var SAA_C03_Exam_501_600 = {
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#501",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to ingest customer payment data into the company's data lake in Amazon S3. The company receives payment data every minute on average. The company wants to analyze the payment data in real time. Then the company wants to ingest the data into the data lake.<br><br>Which solution will meet these requirements with the MOST operational efficiency?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#501",
          "answers": [
            {
              "choice": "<p>Use Amazon Kinesis Data Streams to ingest data. Use AWS Lambda to analyze the data in real time.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Glue to ingest data. Use Amazon Kinesis Data Analytics to analyze the data in real time.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Kinesis Data Firehose to ingest data. Use Amazon Kinesis Data Analytics to analyze the data in real time.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon API Gateway to ingest data. Use AWS Lambda to analyze the data in real time.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 501 discussion",
      "discusstion": [
        {
          "id": 924662,
          "date": "Sat 16 Dec 2023 02:59",
          "username": "Axeashes",
          "content": "Kinesis Data Firehose is near real time (min. 60 sec). - The question is focusing on real time processing/analysis + efficiency -> Kinesis Data Stream is real time ingestion.<br>https://www.amazonaws.cn/en/kinesis/data-firehose/#:~:textNear%20real%2Dtime,is%20sent%20to%20the%20service.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Unless the intention is real time analytics not real time ingestion !</li></ul>",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 924665,
          "date": "Sat 16 Dec 2023 03:03",
          "username": "Axeashes",
          "content": "Unless the intention is real time analytics not real time ingestion !",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 901846,
          "date": "Sun 19 Nov 2023 13:58",
          "username": "cloudenthusiast",
          "content": "By leveraging the combination of Amazon Kinesis Data Firehose and Amazon Kinesis Data Analytics, you can efficiently ingest and analyze the payment data in real time without the need for manual processing or additional infrastructure management. This solution provides a streamlined and scalable approach to handle continuous data ingestion and analysis requirements.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1202052,
          "date": "Fri 25 Oct 2024 16:17",
          "username": "wizcloudifa",
          "content": "Kinesis Firehouseingesting<br>Kinesis Datastreamsstoring<br>Kinesis analyticsdoing analysis",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1117084,
          "date": "Mon 08 Jul 2024 22:35",
          "username": "awsgeek75",
          "content": "Data is stored on S3 so real-time data analytics can be done with Kinesis Data Analytics which rules out Lambda solutions (A and D) as they are more operationally complex.<br>B is not useful it is more of ETL.<br><br>Firehose is actually to distribute data but given that company is already receiving data somehow so Firehose can basically distribute it to S3 with minimum latency. I have to admit this was confusing. I would have used Kinesis Streams to store on S3 and Data Analytics but combination is confusing!<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"Data is stored on S3...\\\"<br>Nope. Re-read the first sentence. S3 is the destination, not the source.<br>The task is to ingest, analyze in real time, and store in S3.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1222406,
          "date": "Sun 01 Dec 2024 04:03",
          "username": "Mr_Marcus",
          "content": "\\\"Data is stored on S3...\\\"<br>Nope. Re-read the first sentence. S3 is the destination, not the source.<br>The task is to ingest, analyze in real time, and store in S3.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1085063,
          "date": "Sat 01 Jun 2024 08:28",
          "username": "1rob",
          "content": "\\\"payment data every minute on average\\\" is a good-to-go- for firehose.<br>Also firehose is more operational efficient compared to Data Streams.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1084377,
          "date": "Thu 30 May 2024 13:08",
          "username": "lucasbg",
          "content": "I think this is A. The purpose of Firehose is to ingest and deliver to a data store, no to an analytics service. And in fact you can use lambda for real time analysis, such I find A more aligned.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But developing and maintaining a custom Lambda function \\\"to analyze the data in real time\\\" is surely not as 'operationally efficient' as using an existing service such as Kinesis Data Analytics.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1111032,
          "date": "Mon 01 Jul 2024 08:22",
          "username": "pentium75",
          "content": "But developing and maintaining a custom Lambda function \\\"to analyze the data in real time\\\" is surely not as 'operationally efficient' as using an existing service such as Kinesis Data Analytics.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1046789,
          "date": "Thu 18 Apr 2024 11:43",
          "username": "DDongi",
          "content": "Firehose has a 60 sec delay so real time analytics should be without real time data isn't that problematic? Why would you have then real time analytics then in the first place?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 988331,
          "date": "Fri 23 Feb 2024 15:40",
          "username": "Guru4Cloud",
          "content": "Kinesis Data Streams focuses on ingesting and storing data streams while Kinesis Data Firehose focuses on delivering data streams to select destinations, as the motive of the question is to do analytics, the answer should be C.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 963326,
          "date": "Fri 26 Jan 2024 06:54",
          "username": "hsinchang",
          "content": "Kinesis Data Streams focuses on ingesting and storing data streams while Kinesis Data Firehose focuses on delivering data streams to select destinations, as the motive of the question is to do analytics, the answer should be C.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 953339,
          "date": "Tue 16 Jan 2024 16:20",
          "username": "james2033",
          "content": "Quote 'Connect with 30+ fully integrated AWS services and streaming destinations such as Amazon Simple Storage Service (S3)'  at https://aws.amazon.com/kinesis/data-firehose/ . Amazon Kinesis Data Analystics https://aws.amazon.com/kinesis/data-analytics/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 951206,
          "date": "Sun 14 Jan 2024 07:52",
          "username": "TariqKipkemei",
          "content": "Use Kinesis Firehose to capture and deliver the data to Kinesis Analytics to perform analytics.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 903238,
          "date": "Tue 21 Nov 2023 15:59",
          "username": "Anmol_1010",
          "content": "Did anyome took tge exam recently,<br>How many questiona were there",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 902535,
          "date": "Mon 20 Nov 2023 14:19",
          "username": "omoakin",
          "content": "Can we understand why admin's answers are mostly wrong? Or is this done on purpose?",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 900016,
          "date": "Fri 17 Nov 2023 13:54",
          "username": "nosense",
          "content": "Amazon Kinesis Data Firehose the most optimal variant",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 899343,
          "date": "Thu 16 Nov 2023 19:19",
          "username": "kailu",
          "content": "Shouldn't C be more appropriate?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You're right. I believe the answers are wrong on purpose, so good thing votes can be made on answers and discussions are allowed.</li></ul>",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 912967,
          "date": "Sat 02 Dec 2023 20:20",
          "username": "MostofMichelle",
          "content": "You're right. I believe the answers are wrong on purpose, so good thing votes can be made on answers and discussions are allowed.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#502",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a website that uses a content management system (CMS) on Amazon EC2. The CMS runs on a single EC2 instance and uses an Amazon Aurora MySQL Multi-AZ DB instance for the data tier. Website images are stored on an Amazon Elastic Block Store (Amazon EBS) volume that is mounted inside the EC2 instance.<br><br>Which combination of actions should a solutions architect take to improve the performance and resilience of the website? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#502",
          "answers": [
            {
              "choice": "<p>Move the website images into an Amazon S3 bucket that is mounted on every EC2 instance<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Share the website images by using an NFS share from the primary EC2 instance. Mount this share on the other EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Move the website images onto an Amazon Elastic File System (Amazon EFS) file system that is mounted on every EC2 instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Machine Image (AMI) from the existing EC2 instance. Use the AMI to provision new instances behind an Application Load Balancer as part of an Auto Scaling group. Configure the Auto Scaling group to maintain a minimum of two instances. Configure an accelerator in AWS Global Accelerator for the website<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Machine Image (AMI) from the existing EC2 instance. Use the AMI to provision new instances behind an Application Load Balancer as part of an Auto Scaling group. Configure the Auto Scaling group to maintain a minimum of two instances. Configure an Amazon CloudFront distribution for the website.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 502 discussion",
      "discusstion": [
        {
          "id": 901848,
          "date": "Fri 19 May 2023 13:03",
          "username": "cloudenthusiast",
          "content": "By combining the use of Amazon EFS for shared file storage and Amazon CloudFront for content delivery, you can achieve improved performance and resilience for the website.",
          "upvote_count": "14",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 1202060,
          "date": "Thu 25 Apr 2024 16:31",
          "username": "wizcloudifa",
          "content": "First of all you should understand, a website using CMS is a dynamic one not static, so A is out, B is more complicated than C, so C, and between global accelerator and cloudfront,Cloudfront suits better as there is no legacy protocols data(UDP, etc) that needs to be accessed, hence E",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 1111527,
          "date": "Tue 02 Jan 2024 01:46",
          "username": "foha2012",
          "content": "I choose AE. Although I don't know if s3 can be mounted on ec2 ?? Maybe wrong wording. Efs is a better choice but its not a natural selection for strong images.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I made the same mistake but mounting S3 on EC2 is a painful operation so EFS makes more sense (C).<br>Option E takes care of caching static images on CDN so that problem is solved along with resilience etc.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1117089,
          "date": "Mon 08 Jan 2024 23:42",
          "username": "awsgeek75",
          "content": "I made the same mistake but mounting S3 on EC2 is a painful operation so EFS makes more sense (C).<br>Option E takes care of caching static images on CDN so that problem is solved along with resilience etc.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1111040,
          "date": "Mon 01 Jan 2024 09:28",
          "username": "pentium75",
          "content": "Not A because you can't mount an S3 bucket on an EC2 instance. You could use a file gateway and share an S3 bucket via NFS and mount that on EC2, but that is not mentioned here and would also not make sense.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>it is possible to mount s3 to EC2, just quite difficult: https://aws.amazon.com/blogs/storage/mounting-amazon-s3-to-an-amazon-ec2-instance-using-a-private-connection-to-s3-file-gateway/</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 1291674,
          "date": "Mon 30 Sep 2024 22:32",
          "username": "seldiora",
          "content": "it is possible to mount s3 to EC2, just quite difficult: https://aws.amazon.com/blogs/storage/mounting-amazon-s3-to-an-amazon-ec2-instance-using-a-private-connection-to-s3-file-gateway/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1063381,
          "date": "Mon 06 Nov 2023 00:27",
          "username": "potomac",
          "content": "You can mount EFS file systems to multiple Amazon EC2 instances remotely and securely without having to log in to the instances by using the AWS Systems Manager Run Command.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 1056724,
          "date": "Sun 29 Oct 2023 11:02",
          "username": "wsdasdasdqwdaw",
          "content": "A is out of the game for sure. Mount S3 to EC2 ... madness. The question is CE or DE, but it is CE because of AWS Global Accelerator is match with NLB, not ALB as it is staded in option D, thus CE as many of all here noted.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1053336,
          "date": "Wed 25 Oct 2023 02:44",
          "username": "thanhnv142",
          "content": "A and E is correct. We have a cloud fromt + S3 combo<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>S3 can't be mounted on EC2 it is not A for sure!</li><li>https://aws.amazon.com/blogs/storage/mounting-amazon-s3-to-an-amazon-ec2-instance-using-a-private-connection-to-s3-file-gateway/</li><li>\\\"Using a ... S3 file gateway\\\"</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1056722,
          "date": "Sun 29 Oct 2023 10:58",
          "username": "wsdasdasdqwdaw",
          "content": "S3 can't be mounted on EC2 it is not A for sure!<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://aws.amazon.com/blogs/storage/mounting-amazon-s3-to-an-amazon-ec2-instance-using-a-private-connection-to-s3-file-gateway/</li><li>\\\"Using a ... S3 file gateway\\\"</li></ul>",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1066514,
          "date": "Thu 09 Nov 2023 16:52",
          "username": "NickGordon",
          "content": "https://aws.amazon.com/blogs/storage/mounting-amazon-s3-to-an-amazon-ec2-instance-using-a-private-connection-to-s3-file-gateway/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"Using a ... S3 file gateway\\\"</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1111036,
          "date": "Mon 01 Jan 2024 09:27",
          "username": "pentium75",
          "content": "\\\"Using a ... S3 file gateway\\\"",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1049387,
          "date": "Sat 21 Oct 2023 11:43",
          "username": "thanhnv142",
          "content": "A and E.<br>C is not correct because You dont mount a new EFS onto existing EC2. If you do that, you have to migrate all exising data in EBS into EFS. Then remove all the EBS. Should never do this.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I can't follow. EFS provides NFS mount points, how can you not mount those onto existing EC2?</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1111034,
          "date": "Mon 01 Jan 2024 09:24",
          "username": "pentium75",
          "content": "I can't follow. EFS provides NFS mount points, how can you not mount those onto existing EC2?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1017331,
          "date": "Tue 26 Sep 2023 04:53",
          "username": "franbarberan",
          "content": "https://bluexp.netapp.com/blog/ebs-efs-amazons3-best-cloud-storage-system",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 989477,
          "date": "Thu 24 Aug 2023 22:33",
          "username": "Smart",
          "content": "Not A - S3 cannot be mounted (up until few months ago). Exam does not test for the updates in last 6 months.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 988328,
          "date": "Wed 23 Aug 2023 14:39",
          "username": "Guru4Cloud",
          "content": "You have summarized the reasons why options A and E are the best choices very well.<br><br>Migrating static website assets like images to Amazon S3 enables high scalability, durability and shared access across instances. This improves performance.<br><br>Using Auto Scaling with load balancing provides elasticity and resilience. Adding a CloudFront distribution further boosts performance through caching and content delivery.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You can't directly mount an S3 bucket on EC2.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1111037,
          "date": "Mon 01 Jan 2024 09:27",
          "username": "pentium75",
          "content": "You can't directly mount an S3 bucket on EC2.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 977357,
          "date": "Thu 10 Aug 2023 08:28",
          "username": "Ale1973",
          "content": "Both options AE and CE would work, but I choose AE, because, on my opinion, S3 is best suited for performance and resilience.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You can't directly mount an S3 bucket on EC2</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1111038,
          "date": "Mon 01 Jan 2024 09:27",
          "username": "pentium75",
          "content": "You can't directly mount an S3 bucket on EC2",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 973813,
          "date": "Sun 06 Aug 2023 14:23",
          "username": "MicketyMouse",
          "content": "EFS, unlike EBS, can be mounted across multiple EC2 instances and hence C over A.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 951228,
          "date": "Fri 14 Jul 2023 07:11",
          "username": "TariqKipkemei",
          "content": "Technically both options AE and CE would work. But S3 is best suited for unstructured data, and the key benefit of mounting S3 on EC2 is that it provides a cost-effective alternative of using object storage for applications dealing with large files, as compared to expensive file or block storage. At the same time it provides more performant, scalable and highly available storage for these applications.<br><br>Even though there is no mention of 'cost efficient' in this question, in the real world cost is the no.1 factor.<br>In the exam I believe both options would be a pass.<br><br>https://aws.amazon.com/blogs/storage/mounting-amazon-s3-to-an-amazon-ec2-instance-using-a-private-connection-to-s3-file-gateway/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You can't directly mount an S3 bucket on EC2, only through file gateway</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1111039,
          "date": "Mon 01 Jan 2024 09:27",
          "username": "pentium75",
          "content": "You can't directly mount an S3 bucket on EC2, only through file gateway",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 941661,
          "date": "Mon 03 Jul 2023 11:27",
          "username": "AshutoshSingh1923",
          "content": "Option C provides moving the website images onto an Amazon EFS file system that is mounted on every EC2 instance. Amazon EFS provides a scalable and fully managed file storage solution that can be accessed concurrently from multiple EC2 instances. This ensures that the website images can be accessed efficiently and consistently by all instances, improving performance<br>In Option E The Auto Scaling group maintains a minimum of two instances, ensuring resilience by automatically replacing any unhealthy instances. Additionally, configuring an Amazon CloudFront distribution for the website further improves performance by caching content at edge locations closer to the end-users, reducing latency and improving content delivery.<br>Hence combining these actions, the website's performance is improved through efficient image storage and content delivery",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 938083,
          "date": "Thu 29 Jun 2023 14:28",
          "username": "Vadbro7",
          "content": "Which answe is correct?the most voted ones or the Suggested answers?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>the most voted always</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1244343,
          "date": "Mon 08 Jul 2024 15:14",
          "username": "9be0170",
          "content": "the most voted always",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 932842,
          "date": "Sat 24 Jun 2023 20:34",
          "username": "mattcl",
          "content": "A and E: S3 is perfect for images. Besides is the perfect partner of cloudfront",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#503",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an infrastructure monitoring service. The company is building a new feature that will enable the service to monitor data in customer AWS accounts. The new feature will call AWS APIs in customer accounts to describe Amazon EC2 instances and read Amazon CloudWatch metrics.<br><br>What should the company do to obtain access to customer accounts in the MOST secure way?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#503",
          "answers": [
            {
              "choice": "<p>Ensure that the customers create an IAM role in their account with read-only EC2 and CloudWatch permissions and a trust policy to the company's account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a serverless API that implements a token vending machine to provide temporary AWS credentials for a role with read-only EC2 and CloudWatch permissions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Ensure that the customers create an IAM user in their account with read-only EC2 and CloudWatch permissions. Encrypt and store customer access and secret keys in a secrets management system.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Ensure that the customers create an Amazon Cognito user in their account to use an IAM role with read-only EC2 and CloudWatch permissions. Encrypt and store the Amazon Cognito user and password in a secrets management system.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 503 discussion",
      "discusstion": [
        {
          "id": 901855,
          "date": "Sun 19 Nov 2023 14:10",
          "username": "cloudenthusiast",
          "content": "By having customers create an IAM role with the necessary permissions in their own accounts, the company can use AWS Identity and Access Management (IAM) to establish cross-account access. The trust policy allows the company's AWS account to assume the customer's IAM role temporarily, granting access to the specified resources (EC2 instances and CloudWatch metrics) within the customer's account. This approach follows the principle of least privilege, as the company only requests the necessary permissions and does not require long-term access keys or user credentials from the customers.",
          "upvote_count": "15",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 900610,
          "date": "Sat 18 Nov 2023 03:25",
          "username": "Piccalo",
          "content": "A. Roles give temporary credentials<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Agreed . Role is the keyword</li></ul>",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 901209,
          "date": "Sat 18 Nov 2023 15:43",
          "username": "Efren",
          "content": "Agreed . Role is the keyword",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1126797,
          "date": "Fri 19 Jul 2024 16:05",
          "username": "awsgeek75",
          "content": "B: Sharing credentials, even temporary, is insecure<br>C: Access and secret keys. That won't work and sharing secrets outside of account is not secure for this use case<br><br>A: Keyword \\\"trust policy\\\"<br>D: Again, sharing username and pwd and sharing in any way is not secure",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1111042,
          "date": "Mon 01 Jul 2024 08:31",
          "username": "pentium75",
          "content": "Not B (would be about access to the company's account, not the customers' accounts)<br>Not C (storing credentials in a custom system is a big nono)<br>Not D (Cognito has nothing to do here and \\\"user and password\\\" is terrible)",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1085071,
          "date": "Sat 01 Jun 2024 08:47",
          "username": "1rob",
          "content": "The company's infrastructure monitoring service needs to call aws API's in the MOST secure way. So you have to focus on restricting access to the APIs and there is where cognito comes in to play.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Are you suggesting to restrict CloudWatch API with Cognito roles?</li><li>What is unsecure with A?</li><li>The company runs an infrastructure monitoring service.Nowhere is stated that this service lives in an aws account. So A and C I wouldn't choose.<br>B is a bit too vague. So I end up with D.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1117093,
          "date": "Mon 08 Jul 2024 22:46",
          "username": "awsgeek75",
          "content": "Are you suggesting to restrict CloudWatch API with Cognito roles?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1111041,
          "date": "Mon 01 Jul 2024 08:30",
          "username": "pentium75",
          "content": "What is unsecure with A?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The company runs an infrastructure monitoring service.Nowhere is stated that this service lives in an aws account. So A and C I wouldn't choose.<br>B is a bit too vague. So I end up with D.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1118562,
          "date": "Wed 10 Jul 2024 13:06",
          "username": "1rob",
          "content": "The company runs an infrastructure monitoring service.Nowhere is stated that this service lives in an aws account. So A and C I wouldn't choose.<br>B is a bit too vague. So I end up with D.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 988313,
          "date": "Fri 23 Feb 2024 15:29",
          "username": "Guru4Cloud",
          "content": "A is the most secure approach for accessing customer accounts.<br><br>Having customers create a cross-account IAM role with the appropriate permissions, and configuring the trust policy to allow the monitoring service principal account access, implements secure delegation and least privilege access.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#504",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to connect several VPCs in the us-east-1 Region that span hundreds of AWS accounts. The company's networking team has its own AWS account to manage the cloud network.<br><br>What is the MOST operationally efficient solution to connect the VPCs?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#504",
          "answers": [
            {
              "choice": "<p>Set up VPC peering connections between each VPC. Update each associated subnet's route table<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a NAT gateway and an internet gateway in each VPC to connect each VPC through the internet<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Transit Gateway in the networking team's AWS account. Configure static routes from each VPC.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy VPN gateways in each VPC. Create a transit VPC in the networking team's AWS account to connect to each VPC.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 504 discussion",
      "discusstion": [
        {
          "id": 963331,
          "date": "Fri 26 Jan 2024 07:09",
          "username": "hsinchang",
          "content": "The main difference between AWS Transit Gateway and VPC peering is that AWS Transit Gateway is designed to connect multiple VPCs together in a hub-and-spoke model, while VPC peering is designed to connect two VPCs together in a peer-to-peer model.<br>As we have several VPCs here, the answer should be C.",
          "upvote_count": "18",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 901859,
          "date": "Sun 19 Nov 2023 14:11",
          "username": "cloudenthusiast",
          "content": "AWS Transit Gateway is a highly scalable and centralized hub for connecting multiple VPCs, on-premises networks, and remote networks. It simplifies network connectivity by providing a single entry point and reducing the number of connections required. In this scenario, deploying an AWS Transit Gateway in the networking team's AWS account allows for efficient management and control over the network connectivity across multiple VPCs.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1126800,
          "date": "Fri 19 Jul 2024 16:13",
          "username": "awsgeek75",
          "content": "A: This option is suggesting hundreds of peering connection for EACH VPC. Nope!<br>B: NAT gateway is for network translation not VPC interconnectivity so this is wrong<br>C: Transit GW + static routes will connect all VPCs https://aws.amazon.com/transit-gateway/<br>D: VPN gateway is for on-prem to VPN for a VPC. There is no on-prem here so this is wrong",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1066156,
          "date": "Thu 09 May 2024 06:30",
          "username": "TariqKipkemei",
          "content": "Connect, Monitor and Manage Multiple VPCs in one placeAWS Transit Gateway",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 988309,
          "date": "Fri 23 Feb 2024 15:27",
          "username": "Guru4Cloud",
          "content": "C is the most operationally efficient solution for connecting a large number of VPCs across accounts.<br><br>Using AWS Transit Gateway allows all the VPCs to connect to a central hub without needing to create a mesh of VPC peering connections between each VPC pair.<br><br>This significantly reduces the operational overhead of managing the network topology as new VPCs are added or changed.<br><br>The networking team can centrally manage the Transit Gateway routing and share it across accounts using Resource Access Manager.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 909473,
          "date": "Wed 29 Nov 2023 17:09",
          "username": "MirKhobaeb",
          "content": "Answer is C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 909472,
          "date": "Wed 29 Nov 2023 17:08",
          "username": "MirKhobaeb",
          "content": "A transit gateway is a network transit hub that you can use to interconnect your virtual private clouds (VPCs) and on-premises networks. As your cloud infrastructure expands globally, inter-Region peering connects transit gateways together using the AWS Global Infrastructure. Your data is automatically encrypted and never travels over the public internet.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 901771,
          "date": "Sun 19 Nov 2023 11:43",
          "username": "nosense",
          "content": "I voted for c<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>An AWS Transit Gateway is a highly scalable and secure way to connect VPCs in multiple AWS accounts. It is a central hub that routes traffic between VPCs, on-premises networks, and AWS services.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 901970,
          "date": "Sun 19 Nov 2023 16:32",
          "username": "nosense",
          "content": "An AWS Transit Gateway is a highly scalable and secure way to connect VPCs in multiple AWS accounts. It is a central hub that routes traffic between VPCs, on-premises networks, and AWS services.",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#505",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has Amazon EC2 instances that run nightly batch jobs to process data. The EC2 instances run in an Auto Scaling group that uses On-Demand billing. If a job fails on one instance, another instance will reprocess the job. The batch jobs run between 12:00 AM and 06:00 AM local time every day.<br><br>Which solution will provide EC2 instances to meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#505",
          "answers": [
            {
              "choice": "<p>Purchase a 1-year Savings Plan for Amazon EC2 that covers the instance family of the Auto Scaling group that the batch job uses.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Purchase a 1-year Reserved Instance for the specific instance type and operating system of the instances in the Auto Scaling group that the batch job uses.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new launch template for the Auto Scaling group. Set the instances to Spot Instances. Set a policy to scale out based on CPU usage.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new launch template for the Auto Scaling group. Increase the instance size. Set a policy to scale out based on CPU usage.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 505 discussion",
      "discusstion": [
        {
          "id": 901862,
          "date": "Sun 19 Nov 2023 14:14",
          "username": "cloudenthusiast",
          "content": "Purchasing a 1-year Savings Plan (option A) or a 1-year Reserved Instance (option B) may provide cost savings, but they are more suitable for long-running, steady-state workloads. Since your batch jobs run for a specific period each day, using Spot Instances with the ability to scale out based on CPU usage is a more cost-effective choice.",
          "upvote_count": "14",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 988304,
          "date": "Fri 23 Feb 2024 15:25",
          "username": "Guru4Cloud",
          "content": "C is the most cost-effective solution in this scenario.<br><br>Using Spot Instances allows EC2 capacity to be purchased at significant discounts compared to On-Demand prices. The auto scaling group can scale out to add Spot Instances when needed for the batch jobs.<br><br>If Spot Instances become unavailable, regular On-Demand Instances will be launched instead to maintain capacity. The potential for interruptions is acceptable since failed jobs can be re-run.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1198060,
          "date": "Fri 18 Oct 2024 19:37",
          "username": "sandordini",
          "content": "Stateless, most cost-effective >> Spot",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1117108,
          "date": "Mon 08 Jul 2024 23:16",
          "username": "awsgeek75",
          "content": "You don't need any scaling really as the job runs on another EC2 instance if it fails on first one. A. B. D are all more expensive than C due to spot instance being cheaper than reserved instances.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 951253,
          "date": "Sun 14 Jan 2024 08:27",
          "username": "TariqKipkemei",
          "content": "Spot Instances to the rescue....whooosh",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 933960,
          "date": "Tue 26 Dec 2023 04:54",
          "username": "wRhlH",
          "content": "\\\" If a job fails on one instance, another instance will reprocess the job\\\". This ensures Spot Instances are enough for this case",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 915258,
          "date": "Tue 05 Dec 2023 12:10",
          "username": "Abrar2022",
          "content": "Since your batch jobs run for a specific period each day, using Spot Instances with the ability to scale out based on CPU usage is a more cost-effective choice.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 910082,
          "date": "Thu 30 Nov 2023 11:52",
          "username": "Blingy",
          "content": "C FOR ME COS OF SPOT INSTACES",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 901964,
          "date": "Sun 19 Nov 2023 16:25",
          "username": "udo2020",
          "content": "First I think it is B but because of cost saving I think it should be C spot instances.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 901772,
          "date": "Sun 19 Nov 2023 11:43",
          "username": "nosense",
          "content": "c for me",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#506",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A social media company is building a feature for its website. The feature will give users the ability to upload photos. The company expects significant increases in demand during large events and must ensure that the website can handle the upload traffic from users.<br><br>Which solution meets these requirements with the MOST scalability?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#506",
          "answers": [
            {
              "choice": "<p>Upload files from the user's browser to the application servers. Transfer the files to an Amazon S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Provision an AWS Storage Gateway file gateway. Upload files directly from the user's browser to the file gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Generate Amazon S3 presigned URLs in the application. Upload files directly from the user's browser into an S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Provision an Amazon Elastic File System (Amazon EFS) file system. Upload files directly from the user's browser to the file system.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 506 discussion",
      "discusstion": [
        {
          "id": 901864,
          "date": "Sun 19 Nov 2023 14:15",
          "username": "cloudenthusiast",
          "content": "This approach allows users to upload files directly to S3 without passing through the application servers, reducing the load on the application and improving scalability. It leverages the client-side capabilities to handle the file uploads and offloads the processing to S3.",
          "upvote_count": "16",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 988293,
          "date": "Fri 23 Feb 2024 15:19",
          "username": "Guru4Cloud",
          "content": "C is the best solution to meet the scalability requirements.<br><br>Generating S3 presigned URLs allows users to upload directly to S3 instead of application servers. This removes the application servers as a bottleneck for upload traffic.<br><br>S3 can scale to handle very high volumes of uploads with no limits on storage or throughput. Using presigned URLs leverages this scalability.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1184455,
          "date": "Fri 27 Sep 2024 23:25",
          "username": "hro",
          "content": "C - You may use presigned URLs to allow someone to upload an object to your Amazon S3 bucket. Using a presigned URL will allow an upload without requiring another party to have AWS security credentials or permissions.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1118894,
          "date": "Wed 10 Jul 2024 17:48",
          "username": "awsgeek75",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html<br>\\\"You can also use presigned URLs to allow someone to upload a specific object to your Amazon S3 bucket. This allows an upload without requiring another party to have AWS security credentials or permissions. \\\"",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1079017,
          "date": "Fri 24 May 2024 04:08",
          "username": "Goutham4981",
          "content": "S3 presigned url is used for sharing objects from an s3 bucket and not for uploading to an s3 bucket<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No. It allows to download and upload.<br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1093498,
          "date": "Tue 11 Jun 2024 13:33",
          "username": "Murtadhaceit",
          "content": "No. It allows to download and upload.<br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 953809,
          "date": "Wed 17 Jan 2024 06:59",
          "username": "TariqKipkemei",
          "content": "You may use presigned URLs to allow someone to upload an object to your Amazon S3 bucket. Using a presigned URL will allow an upload without requiring another party to have AWS security credentials or permissions.<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 948618,
          "date": "Thu 11 Jan 2024 05:47",
          "username": "baba365",
          "content": "Hello Moderator. This question and answer should be rephrased because:<br><br>1. S3 pre-signed URLs are used to share objects FROM S3 buckets<br>2. How scalable are pre-signed URLs when they are time constrained?<br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Both is wrong<br>Presigned URLs can be used for upload<br>The solution is scalable because you can issue thousands of pre-signed URLs, and thousands of users can upload images at the same time.<br><br>User wants to upload picture -&gt; server generates presigned URL and sends it to the app -&gt; app uploads file</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1111043,
          "date": "Mon 01 Jul 2024 08:35",
          "username": "pentium75",
          "content": "Both is wrong<br>Presigned URLs can be used for upload<br>The solution is scalable because you can issue thousands of pre-signed URLs, and thousands of users can upload images at the same time.<br><br>User wants to upload picture -> server generates presigned URL and sends it to the app -> app uploads file",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 901773,
          "date": "Sun 19 Nov 2023 11:44",
          "username": "nosense",
          "content": "the most scalable because it allows users to upload files directly to Amazon S3,",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#507",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a web application for travel ticketing. The application is based on a database that runs in a single data center in North America. The company wants to expand the application to serve a global user base. The company needs to deploy the application to multiple AWS Regions. Average latency must be less than 1 second on updates to the reservation database.<br><br>The company wants to have separate deployments of its web platform across multiple Regions. However, the company must maintain a single primary reservation database that is globally consistent.<br><br>Which solution should a solutions architect recommend to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#507",
          "answers": [
            {
              "choice": "<p>Convert the application to use Amazon DynamoDB. Use a global table for the center reservation table. Use the correct Regional endpoint in each Regional deployment.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the database to an Amazon Aurora MySQL database. Deploy Aurora Read Replicas in each Region. Use the correct Regional endpoint in each Regional deployment for access to the database.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the database to an Amazon RDS for MySQL database. Deploy MySQL read replicas in each Region. Use the correct Regional endpoint in each Regional deployment for access to the database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the application to an Amazon Aurora Serverless database. Deploy instances of the database to each Region. Use the correct Regional endpoint in each Regional deployment to access the database. Use AWS Lambda functions to process event streams in each Region to synchronize the databases.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 507 discussion",
      "discusstion": [
        {
          "id": 901869,
          "date": "Fri 19 May 2023 13:23",
          "username": "cloudenthusiast",
          "content": "Using DynamoDB's global tables feature, you can achieve a globally consistent reservation database with low latency on updates, making it suitable for serving a global user base. The automatic replication provided by DynamoDB eliminates the need for manual synchronization between Regions.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>DynamoDB Global Tables rely on eventual consistency for replication between Regions. This means that updates in one Region may take milliseconds to seconds to propagate to other Regions.https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html<br><br>The requirement specifies global consistency, which DynamoDB cannot guarantee.</li></ul>",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1325254,
          "date": "Wed 11 Dec 2024 22:13",
          "username": "FlyingHawk",
          "content": "DynamoDB Global Tables rely on eventual consistency for replication between Regions. This means that updates in one Region may take milliseconds to seconds to propagate to other Regions.https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html<br><br>The requirement specifies global consistency, which DynamoDB cannot guarantee.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1126180,
          "date": "Thu 18 Jan 2024 21:40",
          "username": "upliftinghut",
          "content": "Aurora: less than 1 second: https://aws.amazon.com/rds/aurora/global-database/<br>DynamoDB: from 0.5 to 2.5 second: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_HowItWorks.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>B doesn't say Aurora Global</li><li>DynamoDB doesn't meet the &lt;1s req though.</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1175813,
          "date": "Sun 17 Mar 2024 13:32",
          "username": "TheLaPlanta",
          "content": "B doesn't say Aurora Global<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>DynamoDB doesn't meet the &lt;1s req though.</li></ul>",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 1283556,
          "date": "Sat 14 Sep 2024 10:51",
          "username": "MatAlves",
          "content": "DynamoDB doesn't meet the <1s req though.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1334013,
          "date": "Mon 30 Dec 2024 10:32",
          "username": "hilker1983",
          "content": "correct answer bbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1328901,
          "date": "Thu 19 Dec 2024 09:16",
          "username": "EllenLiu",
          "content": "A: dynamoDB global table preview strong consistent<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/multi-region-strong-consistency-gt.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1325808,
          "date": "Thu 12 Dec 2024 19:46",
          "username": "Penjerla",
          "content": "Aurora replicas have to be in the same region as primary<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/aurora-replication-options/compare-solutions.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1325258,
          "date": "Wed 11 Dec 2024 22:15",
          "username": "FlyingHawk",
          "content": "Since DynamoDB Global Tables allow writes in all Regions, conflicts can occur if the same item is updated simultaneously in multiple Regions. DynamoDB uses a \\\"last writer wins\\\" conflict resolution strategy, which may lead to data integrity issues:https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_HowItWorks.html#V2globaltables_HowItWorks.conflict-resolution<br>If you require less than 1-second latency for write updates across Regions, DynamoDB may not consistently meet this requirement due to the asynchronous nature of its replication.<br>For this scenario, DynamoDB Global Tables do not fully meet the requirements due to their reliance on eventual consistency. If strong consistency is a must, go with Amazon Aurora Global Database.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1283553,
          "date": "Thu 19 Sep 2024 14:02",
          "username": "MatAlves",
          "content": "The question asks \\\"Average latency must be less than 1 second on updates to the reservation database.\\\"<br><br>A is incorrect:<br>\\\" Changes to a DynamoDB global tables are replicated asynchronously, with typical latency of between 0.5 - 2.5 seconds between AWS Regions in the same geographic area.\\\"<br><br>B is the answer:<br>\\\"All Aurora Replicas return the same data for query results with minimal replica lag. This lag is usually much less than 100 milliseconds after the primary instance has written an update.\\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Replication.html<br><br>https://community.aws/content/2drxEND7MtTOb2bWs2J0NlCGewP/ddb-globaltables-lag?langen</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1283554,
          "date": "Sat 14 Sep 2024 10:50",
          "username": "MatAlves",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Replication.html<br><br>https://community.aws/content/2drxEND7MtTOb2bWs2J0NlCGewP/ddb-globaltables-lag?langen",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1144870,
          "date": "Thu 08 Feb 2024 20:59",
          "username": "SVDK",
          "content": "How can you update your database in the different regions with read replicas? You need to be able to read and write to the database from the different regions.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1117146,
          "date": "Tue 09 Jan 2024 02:39",
          "username": "Milivoje",
          "content": "In my Opinion it is A. The reason is that Aurora Read Replicas support up to 5 Read replicas indifferent regions . We don't have that limitation with Dynamo DB Global tables, hence I vote for A.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1111047,
          "date": "Mon 01 Jan 2024 09:42",
          "username": "pentium75",
          "content": "Purely from the wording, seems B.<br>DynamoDB \\\"usually within one second\\\"<br>Aurora \\\"usually less than one second\\\"<br>Question asks for \\\"less than one second\\\" thus Aurora<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Answer is A.<br>Option B is about cross-region Aurora replicas not about Aurora Global Database.<br>\\\"Cross-region Aurora replicas have a lag that depends on transaction volume. Typically, a few seconds for most systems.\\\"<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/aurora-replication-options/compare-solutions.html<br>\\\" In a global table, a newly written item is typically propagated to all replica tables within a second.\\\"<br>https://aws.amazon.com/dynamodb/global-tables/</li><li>We need \\\"a single primary reservation database that is globally consistent\\\" -&gt; A is out (DynamoDB is eventually consistent with \\\"last writer wins\\\" and \\\"usually\\\" updates \\\"within [not: less than] one second\\\"). D is out because it mentions multiple databases (and RDS Event Streams to not guarantee the order of events).<br><br>C is out because RDS has higher replication delay, only Aurora can guarantee \\\"less than one second\\\". So we'd have \\\"a single primary reservation database that is globally consistent\\\" in one region, and we'd have read replicas with \\\"less than 1 second on updates\\\" latency in other regions.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1331097,
          "date": "Tue 24 Dec 2024 12:32",
          "username": "Salilgen",
          "content": "Answer is A.<br>Option B is about cross-region Aurora replicas not about Aurora Global Database.<br>\\\"Cross-region Aurora replicas have a lag that depends on transaction volume. Typically, a few seconds for most systems.\\\"<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/aurora-replication-options/compare-solutions.html<br>\\\" In a global table, a newly written item is typically propagated to all replica tables within a second.\\\"<br>https://aws.amazon.com/dynamodb/global-tables/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1116431,
          "date": "Mon 08 Jan 2024 06:46",
          "username": "pentium75",
          "content": "We need \\\"a single primary reservation database that is globally consistent\\\" -> A is out (DynamoDB is eventually consistent with \\\"last writer wins\\\" and \\\"usually\\\" updates \\\"within [not: less than] one second\\\"). D is out because it mentions multiple databases (and RDS Event Streams to not guarantee the order of events).<br><br>C is out because RDS has higher replication delay, only Aurora can guarantee \\\"less than one second\\\". So we'd have \\\"a single primary reservation database that is globally consistent\\\" in one region, and we'd have read replicas with \\\"less than 1 second on updates\\\" latency in other regions.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1080926,
          "date": "Sun 26 Nov 2023 18:53",
          "username": "numark",
          "content": "\\\"a web application for travel ticketing\\\". This would be a transaction, so DynamoDB is not the answer.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>So you can't write to DynamoDB tables at all because tables writes are transactions?</li><li>There are no assumptions about the application here. The choices are related to the database that has one primary source of truth but multi-region presence. No requirement for transaction is given or implied.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1111044,
          "date": "Mon 01 Jan 2024 09:37",
          "username": "pentium75",
          "content": "So you can't write to DynamoDB tables at all because tables writes are transactions?",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1118898,
          "date": "Wed 10 Jan 2024 18:54",
          "username": "awsgeek75",
          "content": "There are no assumptions about the application here. The choices are related to the database that has one primary source of truth but multi-region presence. No requirement for transaction is given or implied.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1079019,
          "date": "Fri 24 Nov 2023 05:16",
          "username": "Goutham4981",
          "content": "Dynamo DB global table acts as a single table. It does not consist of primary and standby databases. It is one single global table which is synchronously updated. Users can write to any of the regional endpoints and the write will be automatically updated across regions. To have a single primary database that is consistent does not align with dynamo db global tables.<br>Option B is even more dumb compared to A since read replicas does not provide failover capability or fast updates from the primary database.<br>The answer almost close to the requirement is Option A even though it is a misfit",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1074406,
          "date": "Sun 19 Nov 2023 03:22",
          "username": "Goutham4981",
          "content": "The question mentions that the average latency on updates to the regional reservation databases should be less than 1sec. Read replicas provide asynchronous replication and hence the update times will be higher. Hence we can easily scrap all the options containing read replicas from the options. Moreover, a globally consistent database with millisecond latencies screams dynamo db global",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1046867,
          "date": "Wed 18 Oct 2023 13:50",
          "username": "DDongi",
          "content": "I think the real difference is that DynamoDB is by default only eventually consistent however it has to be consistent. So it's B.<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 998582,
          "date": "Mon 04 Sep 2023 15:23",
          "username": "jrestrepob",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Replication.CrossRegion.html \\\" average latency less than 1 second.\\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>This is for Cluster</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1017818,
          "date": "Tue 26 Sep 2023 15:46",
          "username": "kwang312",
          "content": "This is for Cluster",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 997918,
          "date": "Sun 03 Sep 2023 21:44",
          "username": "ibu007",
          "content": "Amazon DynamoDB global tables is a fully managed, serverless, multi-Region, and multi-active database. Global tables provide you 99.999% availability, increased application resiliency, and improved business continuity. As global tables replicate your Amazon DynamoDB tables automatically across your choice of AWS Regions, you can achieve fast, local read and write performance.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 992304,
          "date": "Mon 28 Aug 2023 16:44",
          "username": "Bennyboy789",
          "content": "Amazon Aurora provides global databases that replicate your data with low latency to multiple regions. By using Aurora Read Replicas in each Region, the company can achieve low-latency access to the data while maintaining global consistency. The use of regional endpoints ensures that each deployment accesses the appropriate local replica, reducing latency. This solution allows the company to meet the requirement of serving a global user base while keeping average latency less than 1 second.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>While Amazon DynamoDB is a highly scalable NoSQL database, using a global table might introduce latency and might not be suitable for maintaining a single primary reservation database with globally consistent data.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 992309,
          "date": "Mon 28 Aug 2023 16:47",
          "username": "Bennyboy789",
          "content": "While Amazon DynamoDB is a highly scalable NoSQL database, using a global table might introduce latency and might not be suitable for maintaining a single primary reservation database with globally consistent data.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#508",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has migrated multiple Microsoft Windows Server workloads to Amazon EC2 instances that run in the us-west-1 Region. The company manually backs up the workloads to create an image as needed.<br><br>In the event of a natural disaster in the us-west-1 Region, the company wants to recover workloads quickly in the us-west-2 Region. The company wants no more than 24 hours of data loss on the EC2 instances. The company also wants to automate any backups of the EC2 instances.<br><br>Which solutions will meet these requirements with the LEAST administrative effort? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#508",
          "answers": [
            {
              "choice": "<p>Create an Amazon EC2-backed Amazon Machine Image (AMI) lifecycle policy to create a backup based on tags. Schedule the backup to run twice daily. Copy the image on demand.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon EC2-backed Amazon Machine Image (AMI) lifecycle policy to create a backup based on tags. Schedule the backup to run twice daily. Configure the copy to the us-west-2 Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create backup vaults in us-west-1 and in us-west-2 by using AWS Backup. Create a backup plan for the EC2 instances based on tag values. Create an AWS Lambda function to run as a scheduled job to copy the backup data to us-west-2.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a backup vault by using AWS Backup. Use AWS Backup to create a backup plan for the EC2 instances based on tag values. Define the destination for the copy as us-west-2. Specify the backup schedule to run twice daily.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a backup vault by using AWS Backup. Use AWS Backup to create a backup plan for the EC2 instances based on tag values. Specify the backup schedule to run twice daily. Copy on demand to us-west-2.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 508 discussion",
      "discusstion": [
        {
          "id": 901872,
          "date": "Sun 19 Nov 2023 14:28",
          "username": "cloudenthusiast",
          "content": "Option B suggests using an EC2-backed Amazon Machine Image (AMI) lifecycle policy to automate the backup process. By configuring the policy to run twice daily and specifying the copy to the us-west-2 Region, the company can ensure regular backups are created and copied to the alternate region.<br><br>Option D proposes using AWS Backup, which provides a centralized backup management solution. By creating a backup vault and backup plan based on tag values, the company can automate the backup process for the EC2 instances. The backup schedule can be set to run twice daily, and the destination for the copy can be defined as the us-west-2 Region.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Both options automate the backup process and include copying the backups to the us-west-2 Region, ensuring data resilience in the event of a disaster. These solutions minimize administrative effort by leveraging automated backup and copy mechanisms provided by AWS services.</li></ul>",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 901873,
          "date": "Sun 19 Nov 2023 14:28",
          "username": "cloudenthusiast",
          "content": "Both options automate the backup process and include copying the backups to the us-west-2 Region, ensuring data resilience in the event of a disaster. These solutions minimize administrative effort by leveraging automated backup and copy mechanisms provided by AWS services.",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 1126816,
          "date": "Fri 19 Jul 2024 16:37",
          "username": "awsgeek75",
          "content": "LEAST admin overhead:<br>A: On demand so wrong<br>C: Lambda is overhead<br>E: On-demand is wrong<br><br>BD is the only choice. Although D seems to cover for B also, happy to be corrected.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 1023730,
          "date": "Wed 03 Apr 2024 09:41",
          "username": "pmlabs",
          "content": "B D seems to meet the requiremnts fully",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 988236,
          "date": "Fri 23 Feb 2024 14:30",
          "username": "Guru4Cloud",
          "content": "B and D are the options that meet the requirements with the least administrative effort.<br><br>B uses EC2 image lifecycle policies to automatically create AMIs of the instances twice daily and copy them to the us-west-2 region. This automates regional backups.<br><br>D leverages AWS Backup to define a backup plan that runs twice daily and copies backups to us-west-2. AWS Backup automates EC2 instance backups.<br><br>Together, these options provide automated, regional EC2 backup capabilities with minimal administrative overhead.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 953826,
          "date": "Wed 17 Jan 2024 07:33",
          "username": "TariqKipkemei",
          "content": "options B and D will provide least administrative effort.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 915393,
          "date": "Tue 05 Dec 2023 14:35",
          "username": "antropaws",
          "content": "I also vote B and D.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 900087,
          "date": "Fri 17 Nov 2023 14:56",
          "username": "nosense",
          "content": "solutions are both automated and require no manual intervention to create or copy backups",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BD"
        }
      ]
    },
    {
      "question_id": "#509",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company operates a two-tier application for image processing. The application uses two Availability Zones, each with one public subnet and one private subnet. An Application Load Balancer (ALB) for the web tier uses the public subnets. Amazon EC2 instances for the application tier use the private subnets.<br><br>Users report that the application is running more slowly than expected. A security audit of the web server log files shows that the application is receiving millions of illegitimate requests from a small number of IP addresses. A solutions architect needs to resolve the immediate performance problem while the company investigates a more permanent solution.<br><br>What should the solutions architect recommend to meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#509",
          "answers": [
            {
              "choice": "<p>Modify the inbound security group for the web tier. Add a deny rule for the IP addresses that are consuming resources.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the network ACL for the web tier subnets. Add an inbound deny rule for the IP addresses that are consuming resources.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the inbound security group for the application tier. Add a deny rule for the IP addresses that are consuming resources.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the network ACL for the application tier subnets. Add an inbound deny rule for the IP addresses that are consuming resources.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 509 discussion",
      "discusstion": [
        {
          "id": 908396,
          "date": "Tue 28 Nov 2023 10:09",
          "username": "lucdt4",
          "content": "A wrong because security group can't deny (only allow)",
          "upvote_count": "26",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 901876,
          "date": "Sun 19 Nov 2023 14:33",
          "username": "cloudenthusiast",
          "content": "In this scenario, the security audit reveals that the application is receiving millions of illegitimate requests from a small number of IP addresses. To address this issue, it is recommended to modify the network ACL (Access Control List) for the web tier subnets.<br><br>By adding an inbound deny rule specifically targeting the IP addresses that are consuming resources, the network ACL can block the illegitimate traffic at the subnet level before it reaches the web servers. This will help alleviate the excessive load on the web tier and improve the application's performance.",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1126818,
          "date": "Fri 19 Jul 2024 16:44",
          "username": "awsgeek75",
          "content": "A: Wrong as SG cannot deny. By default everything is deny in SG and you allow stuff<br>CD: App tier is not under attack so these are irrelevant options<br>B: Correct as NACL is exactly for this access control list to define rules for CIDR or IP addresses",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1066196,
          "date": "Thu 09 May 2024 06:56",
          "username": "TariqKipkemei",
          "content": "Modify the network ACL for the web tier subnets. Add an inbound deny rule for the IP addresses that are consuming resources.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1063399,
          "date": "Mon 06 May 2024 00:00",
          "username": "potomac",
          "content": "A is wrong<br>Security groups act at the network interface level, not the subnet level, and they support Allow rules only.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1016254,
          "date": "Mon 25 Mar 2024 03:31",
          "username": "Devsin2000",
          "content": "The security Group can be applied to an ALB at web tier.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Security group rules are always permissive; you can't create rules that deny access.<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules.html</li><li>Security group can't deny.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1116365,
          "date": "Mon 08 Jul 2024 03:25",
          "username": "OSHOAIB",
          "content": "Security group rules are always permissive; you can't create rules that deny access.<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1074408,
          "date": "Sun 19 May 2024 02:30",
          "username": "Goutham4981",
          "content": "Security group can't deny.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 988218,
          "date": "Fri 23 Feb 2024 14:12",
          "username": "Guru4Cloud",
          "content": "Since the bad requests are targeting the web tier, adding ACL deny rules for those IP addresses on the web subnets will block the traffic before it reaches the instances.<br><br>Security group changes (Options A and C) would not be effective since the requests are not even reaching those resources.<br><br>Modifying the application tier ACL (Option D) would not stop the bad traffic from hitting the web tier.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 903808,
          "date": "Wed 22 Nov 2023 10:22",
          "username": "fakrap",
          "content": "A is wrong because you cannot put any deny in security group",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 902944,
          "date": "Tue 21 Nov 2023 09:27",
          "username": "Rob1L",
          "content": "You cannot Deny on SG, so it's B",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 900090,
          "date": "Fri 17 Nov 2023 14:58",
          "username": "nosense",
          "content": "Option B is not as effective as option A<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Security group only have allow rules</li><li>yeah, my mistake. B should be</li><li>A and C out due to the fact that SG does not have deny on allow rules.</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 900771,
          "date": "Sat 18 Nov 2023 08:29",
          "username": "y0",
          "content": "Security group only have allow rules<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>yeah, my mistake. B should be</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 901813,
          "date": "Sun 19 Nov 2023 12:41",
          "username": "nosense",
          "content": "yeah, my mistake. B should be",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 901877,
          "date": "Sun 19 Nov 2023 14:34",
          "username": "cloudenthusiast",
          "content": "A and C out due to the fact that SG does not have deny on allow rules.",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#510",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A global marketing company has applications that run in the ap-southeast-2 Region and the eu-west-1 Region. Applications that run in a VPC in eu-west-1 need to communicate securely with databases that run in a VPC in ap-southeast-2.<br><br>Which network design will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#510",
          "answers": [
            {
              "choice": "<p>Create a VPC peering connection between the eu-west-1 VPC and the ap-southeast-2 VPC. Create an inbound rule in the eu-west-1 application security group that allows traffic from the database server IP addresses in the ap-southeast-2 security group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a VPC peering connection between the ap-southeast-2 VPC and the eu-west-1 VPC. Update the subnet route tables. Create an inbound rule in the ap-southeast-2 database security group that references the security group ID of the application servers in eu-west-1.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a VPC peering connection between the ap-southeast-2 VPC and the eu-west-1 VPUpdate the subnet route tables. Create an inbound rule in the ap-southeast-2 database security group that allows traffic from the eu-west-1 application server IP addresses.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a transit gateway with a peering attachment between the eu-west-1 VPC and the ap-southeast-2 VPC. After the transit gateways are properly peered and routing is configured, create an inbound rule in the database security group that references the security group ID of the application servers in eu-west-1.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 510 discussion",
      "discusstion": [
        {
          "id": 945330,
          "date": "Fri 07 Jul 2023 07:15",
          "username": "VellaDevil",
          "content": "Answer: C -->\\\"You cannot reference the security group of a peer VPC that's in a different Region. Instead, use the CIDR block of the peer VPC.\\\"<br>https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-security-groups.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Wow, big thanks!</li><li>Thanks for this clarification!</li></ul>",
          "upvote_count": "46",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1283560,
          "date": "Sat 14 Sep 2024 11:04",
          "username": "MatAlves",
          "content": "Wow, big thanks!",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 963357,
          "date": "Wed 26 Jul 2023 06:56",
          "username": "hsinchang",
          "content": "Thanks for this clarification!",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 924685,
          "date": "Fri 16 Jun 2023 03:04",
          "username": "Axeashes",
          "content": "\\\"You cannot reference the security group of a peer VPC that's in a different Region. Instead, use the CIDR block of the peer VPC.\\\"<br>https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-security-groups.html",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1063401,
          "date": "Mon 06 Nov 2023 01:05",
          "username": "potomac",
          "content": "After establishing the VPC peering connection, the subnet route tables need to be updated in both VPCs to route traffic to the other VPC's CIDR blocks through the peering connection.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 992324,
          "date": "Mon 28 Aug 2023 17:04",
          "username": "Bennyboy789",
          "content": "VPC Peering Connection: This allows communication between instances in different VPCs as if they are on the same network. It's a straightforward approach to connect the two VPCs.<br><br>Subnet Route Tables: After establishing the VPC peering connection, the subnet route tables need to be updated in both VPCs to route traffic to the other VPC's CIDR blocks through the peering connection.<br><br>Inbound Rule in Database Security Group: By creating an inbound rule in the ap-southeast-2 database security group that allows traffic from the eu-west-1 application server IP addresses, you ensure that only the specified application servers from the eu-west-1 VPC can access the database servers in the ap-southeast-2 VPC.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 988212,
          "date": "Wed 23 Aug 2023 13:02",
          "username": "Guru4Cloud",
          "content": "B) Configure VPC peering between ap-southeast-2 and eu-west-1 VPCs. Update routes. Allow traffic in ap-southeast-2 database SG from eu-west-1 application server SG.<br><br>This option establishes the correct network connectivity for the applications in eu-west-1 to reach the databases in ap-southeast-2:<br><br>VPC peering connects the two VPCs across regions - https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html#:~:textYou%20can%20create%20a%20VPC,%2DRegion%20VPC%20peering%20connection).<br><br>Updating route tables enables routing between the VPCs<br>Security group rule allowing traffic from eu-west-1 application server SG to ap-southeast-2 database SG secures connectivity<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No, you cannot use a SG reference from another region so last part \\\"Create an inbound rule in the ap-southeast-2 database security group that references the security group ID of the application servers in eu-west-1\\\" cannot be setup. This is why B is wrong.</li><li>Options A, C, D have flaws:<br>Option A peer direction is wrong<br>Option C opens databases to application server IP addresses rather than SG<br>Option D uses transit gateway which is unnecessary for just two VPCs</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1126866,
          "date": "Fri 19 Jan 2024 19:08",
          "username": "awsgeek75",
          "content": "No, you cannot use a SG reference from another region so last part \\\"Create an inbound rule in the ap-southeast-2 database security group that references the security group ID of the application servers in eu-west-1\\\" cannot be setup. This is why B is wrong.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 988213,
          "date": "Wed 23 Aug 2023 13:02",
          "username": "Guru4Cloud",
          "content": "Options A, C, D have flaws:<br>Option A peer direction is wrong<br>Option C opens databases to application server IP addresses rather than SG<br>Option D uses transit gateway which is unnecessary for just two VPCs",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 953834,
          "date": "Mon 17 Jul 2023 06:52",
          "username": "TariqKipkemei",
          "content": "Selected C but B can also work",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 953831,
          "date": "Mon 17 Jul 2023 06:50",
          "username": "TariqKipkemei",
          "content": "I just tried from the the console, You can specify the name or ID of another security group in the same region. To specify a security group in another AWS account (EC2-Classic only), prefix it with the account ID and a forward slash, for example: 111122223333/OtherSecurityGroup.<br>You can Specify a single IP address, or an IP address range in CIDR notation in the same/other region.<br><br>In the exam both option B and C would be a pass. In the real world both option will work.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Correction, You cannot reference the security group of a peer VPC that's in a different Region. Instead, use the CIDR block of the peer VPC.<br>The C is the only option here.<br><br>https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-security-groups.html#:~:textYou%20cannot-,reference,-the%20security%20group</li><li>This is why B is wrong. You can never access cross region security group id</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1066214,
          "date": "Thu 09 Nov 2023 08:28",
          "username": "TariqKipkemei",
          "content": "Correction, You cannot reference the security group of a peer VPC that's in a different Region. Instead, use the CIDR block of the peer VPC.<br>The C is the only option here.<br><br>https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-security-groups.html#:~:textYou%20cannot-,reference,-the%20security%20group<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>This is why B is wrong. You can never access cross region security group id</li></ul>",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1126867,
          "date": "Fri 19 Jan 2024 19:09",
          "username": "awsgeek75",
          "content": "This is why B is wrong. You can never access cross region security group id",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 938584,
          "date": "Thu 29 Jun 2023 23:32",
          "username": "Chris22usa",
          "content": "I realize D is right as ChatGpt indicates.Because here is not a problem just one application in a VPC connection to another in different region. Actually there many applications in different VPCs in a region which need to connect any other application crossingly in other region. So two transit gateway need to installed in two regions for multiple to multiple VPCs connections.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>However, there was also a part of\\\"create an inbound rule in the database security group that references the security group ID of the application servers in eu-west-1\\\"<br><br>therefore, still C because we cannot reference SG ID of diff VPC, we should use the CIDR block</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 947024,
          "date": "Sun 09 Jul 2023 10:53",
          "username": "Iragmt",
          "content": "However, there was also a part of\\\"create an inbound rule in the database security group that references the security group ID of the application servers in eu-west-1\\\"<br><br>therefore, still C because we cannot reference SG ID of diff VPC, we should use the CIDR block",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 935993,
          "date": "Wed 28 Jun 2023 04:16",
          "username": "Chris22usa",
          "content": "post it on ChaptGpt and it give me answer D. what heck with this?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 934782,
          "date": "Mon 26 Jun 2023 22:41",
          "username": "haoAWS",
          "content": "B is wrong because It is in a different region,so reference to the security group ID will not work.A is wrong because you need to update the route table.The answer should be C.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 932849,
          "date": "Sat 24 Jun 2023 20:46",
          "username": "mattcl",
          "content": "is B. what happens if application server IP addresses changes (Option C). You must change manually the IP in the security group again.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 930271,
          "date": "Thu 22 Jun 2023 10:03",
          "username": "antropaws",
          "content": "I thought B, but I vote C after checking Axeashes response.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 912548,
          "date": "Fri 02 Jun 2023 07:18",
          "username": "HelioNeto",
          "content": "I think the answer is C because the security groups are in different VPCs. When the question wants to allow traffic from app vpc to database vpc i think using peering connection you will be able to add the security groups rules using private ip addresses of app servers. I don't think the database VPC will identify the security group id of another VPC.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 902159,
          "date": "Fri 19 May 2023 19:54",
          "username": "REzirezi",
          "content": "D You cannot create a VPC peering connection between VPCs in different regions.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You can peer any two VPCs in different Regions, as long as they have distinct, non-overlapping CIDR blocks<br>https://docs.aws.amazon.com/devicefarm/latest/developerguide/amazon-vpc-cross-region.html</li><li>You can peer any two VPCs in different Regions, as long as they have distinct, non-overlapping CIDR blocks. This ensures that all of the private IP addresses are unique, and it allows all of the resources in the VPCs to address each other without the need for any form of network address translation (NAT).</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 904005,
          "date": "Mon 22 May 2023 13:56",
          "username": "[Removed]",
          "content": "You can peer any two VPCs in different Regions, as long as they have distinct, non-overlapping CIDR blocks<br>https://docs.aws.amazon.com/devicefarm/latest/developerguide/amazon-vpc-cross-region.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 903814,
          "date": "Mon 22 May 2023 09:26",
          "username": "fakrap",
          "content": "You can peer any two VPCs in different Regions, as long as they have distinct, non-overlapping CIDR blocks. This ensures that all of the private IP addresses are unique, and it allows all of the resources in the VPCs to address each other without the need for any form of network address translation (NAT).",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 901983,
          "date": "Fri 19 May 2023 15:49",
          "username": "nosense",
          "content": "b for me. bcs correct inbound rule, and not overhead",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 901880,
          "date": "Fri 19 May 2023 13:37",
          "username": "cloudenthusiast",
          "content": "Option B suggests configuring a VPC peering connection between the ap-southeast-2 VPC and the eu-west-1 VPC. By establishing this peering connection, the VPCs can communicate with each other over their private IP addresses.<br><br>Additionally, updating the subnet route tables is necessary to ensure that the traffic destined for the remote VPC is correctly routed through the VPC peering connection.<br><br>To secure the communication, an inbound rule is created in the ap-southeast-2 database security group. This rule references the security group ID of the application servers in the eu-west-1 VPC, allowing traffic only from those instances. This approach ensures that only the authorized application servers can access the databases in the ap-southeast-2 VPC.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#511",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing software that uses a PostgreSQL database schema. The company needs to configure multiple development environments and databases for the company's developers. On average, each development environment is used for half of the 8-hour workday.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#511",
          "answers": [
            {
              "choice": "<p>Configure each development environment with its own Amazon Aurora PostgreSQL database<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure each development environment with its own Amazon RDS for PostgreSQL Single-AZ DB instances<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure each development environment with its own Amazon Aurora On-Demand PostgreSQL-Compatible database<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure each development environment with its own Amazon S3 bucket by using Amazon S3 Object Select<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 511 discussion",
      "discusstion": [
        {
          "id": 901882,
          "date": "Fri 19 May 2023 13:41",
          "username": "cloudenthusiast",
          "content": "Option C suggests using Amazon Aurora On-Demand PostgreSQL-Compatible databases for each development environment. This option provides the benefits of Amazon Aurora, which is a high-performance and scalable database engine, while allowing you to pay for usage on an on-demand basis. Amazon Aurora On-Demand instances are typically more cost-effective for individual development environments compared to the provisioned capacity options.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option B suggests using Amazon RDS for PostgreSQL Single-AZ DB instances for each development environment. While Amazon RDS is a reliable and cost-effective option, it may have slightly higher costs compared to Amazon Aurora On-Demand instances.</li><li>I'm thinking that it should be B, since question does not mention any requirement only cost effective and this is just an development environment I guess we can leverage the use of RDS free tier also</li></ul>",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 901883,
          "date": "Fri 19 May 2023 13:41",
          "username": "cloudenthusiast",
          "content": "Option B suggests using Amazon RDS for PostgreSQL Single-AZ DB instances for each development environment. While Amazon RDS is a reliable and cost-effective option, it may have slightly higher costs compared to Amazon Aurora On-Demand instances.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I'm thinking that it should be B, since question does not mention any requirement only cost effective and this is just an development environment I guess we can leverage the use of RDS free tier also</li></ul>",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 947056,
          "date": "Sun 09 Jul 2023 11:19",
          "username": "Iragmt",
          "content": "I'm thinking that it should be B, since question does not mention any requirement only cost effective and this is just an development environment I guess we can leverage the use of RDS free tier also",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1157386,
          "date": "Fri 23 Feb 2024 19:39",
          "username": "Stranko",
          "content": "Guys, when you use the pricing calculator the cost between option B and C is really close. I doubt anyone wants to test on your knowledge of exact pricings in your region. I think that \\\"On Demand\\\" being explicitly specified in option C and not being specified in option B is the main difference here the exam wants to test. In that case I'd assume that option B means a constantly running instance and not \\\"On Demand\\\" which would make the choice pretty obvious. Again, I don't think AWS exam will test you on knowing that a single AZ is cheaper by 0,005 cents than Aurora :D",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1298999,
          "date": "Thu 17 Oct 2024 02:35",
          "username": "tonybuivannghia",
          "content": "I choose C because Aurora on-Demand is Aurora Serverless:<br>The Aurora Serverless is cost effective. Scale out fine-grained increments to provide just the right number of database resources and pay only for capacity consumed.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1241594,
          "date": "Wed 03 Jul 2024 20:41",
          "username": "a7md0",
          "content": "Single-AZ DB instances cheaper",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1202992,
          "date": "Sat 27 Apr 2024 09:35",
          "username": "trinh_le",
          "content": "Single AZ more cost effective",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1139070,
          "date": "Sat 03 Feb 2024 08:58",
          "username": "chasingsummer",
          "content": "1 instance(s) x 0.245 USD hourly x (4 / 24 hours in a day) x 730 hours in a month29.8083 USD ---> Amazon RDS PostgreSQL instances cost (monthly)<br>1 instance(s) x 0.26 USD hourly x (4 / 24 hours in a day) x 730 hours in a month31.6333 USD ---> Amazon Aurora PostgreSQL-Compatible DB instances cost (monthly)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1126211,
          "date": "Thu 18 Jan 2024 22:18",
          "username": "upliftinghut",
          "content": "C is correct because B is cheaper but they don't mention to stop the DB when not in use",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1118933,
          "date": "Wed 10 Jan 2024 19:39",
          "username": "awsgeek75",
          "content": "On-Demand is cheaper that Aurora or RDS because of low weekly usage",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1111106,
          "date": "Mon 01 Jan 2024 12:05",
          "username": "pentium75",
          "content": "We have environments that are used on average 4 hours per workday20 hours per week. So with option C (Aurora on-demand aka serverless) we pay for 20 hours per week. With option B (RDS) we pay for 168 hours per week (the answer does not mention anything about automating shutdown etc.).<br><br>So even if Aurora Serverless is slightly more expensive than RDS, C is cheaper because we pay only 20 (not 168) hours per week.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Question doesn't talk about serverless. Moreover, you can select on-demand pricing model for RDS for PostgreSQL Single-AZ too.<br>IMO answer is B</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1331136,
          "date": "Tue 24 Dec 2024 14:46",
          "username": "Salilgen",
          "content": "Question doesn't talk about serverless. Moreover, you can select on-demand pricing model for RDS for PostgreSQL Single-AZ too.<br>IMO answer is B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1093901,
          "date": "Mon 11 Dec 2023 23:49",
          "username": "Mikado211",
          "content": "Aurora on demand is (a little) more expensive than Aurora<br>Aurora is more expensive than RDS single instance<br><br>So cost effectivenessRDS.<br><br>(B)<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But if you use the database only 20 hours per week (5 x 4), wouldn't you pay way less with Aurora serverless than with RDS?</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1111104,
          "date": "Mon 01 Jan 2024 12:01",
          "username": "pentium75",
          "content": "But if you use the database only 20 hours per week (5 x 4), wouldn't you pay way less with Aurora serverless than with RDS?",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1093592,
          "date": "Mon 11 Dec 2023 15:56",
          "username": "Murtadhaceit",
          "content": "AWS Services Calculator is showing B cheaper by less than a dollar for the same settings for both. I used \\\"db.r6g.large\\\" for RDS (Single-AZ) and Aurora and put 4 hours/day.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I used the calculator, single AZ is cheaper for the exact same usage duration, if you pick On-Demand option for it too. In Aurora case (option C) you have \\\"On Demand\\\" explicitly specified, so if it has to be specified then I suppose that B option is about a constantly running instance. If B had an \\\"On Demand\\\" added, I'd vote B too.</li></ul>",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1157382,
          "date": "Fri 23 Feb 2024 19:34",
          "username": "Stranko",
          "content": "I used the calculator, single AZ is cheaper for the exact same usage duration, if you pick On-Demand option for it too. In Aurora case (option C) you have \\\"On Demand\\\" explicitly specified, so if it has to be specified then I suppose that B option is about a constantly running instance. If B had an \\\"On Demand\\\" added, I'd vote B too.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1091389,
          "date": "Sat 09 Dec 2023 01:57",
          "username": "JoseVincent68",
          "content": "Amazon RDS Single AZ is cheaper than Aurora Multi-AZ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1049872,
          "date": "Sat 21 Oct 2023 23:44",
          "username": "Wayne23Fang",
          "content": "Aurora instances will cost you ~20% more than RDS MySQL Given the running hours the same.<br>Also Aurora is HA.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1019180,
          "date": "Wed 27 Sep 2023 21:12",
          "username": "baba365",
          "content": "=E2=80=A6 just trying to trick you. Aurora on demand is Aurora Serverless.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>that isgood piece of infroamtion</li></ul>",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1046330,
          "date": "Tue 17 Oct 2023 21:55",
          "username": "Anmol_1010",
          "content": "that isgood piece of infroamtion",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 996131,
          "date": "Fri 01 Sep 2023 16:21",
          "username": "deechean",
          "content": "Aurora allows you to pay for the hours used.4 hour every day, you only need 1/6 cost of 24 hours per day.You can check the Aurora pricing calculator.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 988202,
          "date": "Wed 23 Aug 2023 12:49",
          "username": "Guru4Cloud",
          "content": "The key factors:<br><br>RDS Single-AZ instances only run the DB instance when in use, minimizing costs for dev environments not used full-time<br>RDS charges by the hour for DB instance hours used, versus Aurora clusters that have hourly uptime charges<br>PostgreSQL is natively supported by RDS so no compatibility issues<br>S3 Object Select (Option D) does not provide full database functionality<br>Aurora (Options A and C) has higher minimum costs than RDS even when not fully utilized<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Aurora is FULLY compatible with PostgreSQL, allowing existing applications and tools to run without requiring modification.<br>https://aws.amazon.com/rds/aurora/features/#:~:textAurora%20is%20fully%20compatible%20with,to%20run%20without%20requiring%20modification</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1116432,
          "date": "Mon 08 Jan 2024 06:47",
          "username": "OSHOAIB",
          "content": "Aurora is FULLY compatible with PostgreSQL, allowing existing applications and tools to run without requiring modification.<br>https://aws.amazon.com/rds/aurora/features/#:~:textAurora%20is%20fully%20compatible%20with,to%20run%20without%20requiring%20modification",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 954934,
          "date": "Tue 18 Jul 2023 06:18",
          "username": "TariqKipkemei",
          "content": "Putting into consideration that the environments will only run 4 hours everyday and the need to save on costs, then Amazon Aurora would be suitable because it supports auto-scaling configuration where the database automatically starts up, shuts down, and scales capacity up or down based on your application's needs. So for the rest of the 4 hours everyday when not in use the database shuts down automatically when there is no activity.<br>Option C would be best, as this is the name of the service from the aws console.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#512",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations with resources tagged by account. The company also uses AWS Backup to back up its AWS infrastructure resources. The company needs to back up all AWS resources.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#512",
          "answers": [
            {
              "choice": "<p>Use AWS Config to identify all untagged resources. Tag the identified resources programmatically. Use tags in the backup plan.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Config to identify all resources that are not running. Add those resources to the backup vault.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Require all AWS account owners to review their resources to identify the resources that need to be backed up.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Inspector to identify all noncompliant resources.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 512 discussion",
      "discusstion": [
        {
          "id": 901884,
          "date": "Fri 19 May 2023 13:44",
          "username": "cloudenthusiast",
          "content": "This solution allows you to leverage AWS Config to identify any untagged resources within your AWS Organizations accounts. Once identified, you can programmatically apply the necessary tags to indicate the backup requirements for each resource. By using tags in the backup plan configuration, you can ensure that only the tagged resources are included in the backup process, reducing operational overhead and ensuring all necessary resources are backed up.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1236673,
          "date": "Tue 25 Jun 2024 04:48",
          "username": "Gape4",
          "content": "I will go for A. C and D doesn't make sense. B- resources not running? No",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1066959,
          "date": "Fri 10 Nov 2023 06:28",
          "username": "TariqKipkemei",
          "content": "Use AWS config to deploy the tag rule and remediate resources that are not compliant.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 988194,
          "date": "Wed 23 Aug 2023 12:37",
          "username": "Guru4Cloud",
          "content": "This option has the least operational overhead:<br><br>AWS Config continuously evaluates resource configurations and can identify untagged resources<br>Resources can be programmatically tagged via the AWS SDK based on Config data<br>Backup plans can use tag criteria to automatically back up newly tagged resources<br>No manual review or resource discovery needed",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 916647,
          "date": "Tue 06 Jun 2023 23:12",
          "username": "Bill1000",
          "content": "Vote A",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 901984,
          "date": "Fri 19 May 2023 15:51",
          "username": "nosense",
          "content": "a valid for me",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#513",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A social media company wants to allow its users to upload images in an application that is hosted in the AWS Cloud. The company needs a solution that automatically resizes the images so that the images can be displayed on multiple device types. The application experiences unpredictable traffic patterns throughout the day. The company is seeking a highly available solution that maximizes scalability.<br><br>What should a solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#513",
          "answers": [
            {
              "choice": "<p>Create a static website hosted in Amazon S3 that invokes AWS Lambda functions to resize the images and store the images in an Amazon S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a static website hosted in Amazon CloudFront that invokes AWS Step Functions to resize the images and store the images in an Amazon RDS database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a dynamic website hosted on a web server that runs on an Amazon EC2 instance. Configure a process that runs on the EC2 instance to resize the images and store the images in an Amazon S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a dynamic website hosted on an automatically scaling Amazon Elastic Container Service (Amazon ECS) cluster that creates a resize job in Amazon Simple Queue Service (Amazon SQS). Set up an image-resizing program that runs on an Amazon EC2 instance to process the resize jobs.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 513 discussion",
      "discusstion": [
        {
          "id": 901899,
          "date": "Fri 19 May 2023 14:20",
          "username": "cloudenthusiast",
          "content": "By using Amazon S3 and AWS Lambda together, you can create a serverless architecture that provides highly scalable and available image resizing capabilities. Here's how the solution would work:<br><br>Set up an Amazon S3 bucket to store the original images uploaded by users.<br>Configure an event trigger on the S3 bucket to invoke an AWS Lambda function whenever a new image is uploaded.<br>The Lambda function can be designed to retrieve the uploaded image, perform the necessary resizing operations based on device requirements, and store the resized images back in the S3 bucket or a different bucket designated for resized images.<br>Configure the Amazon S3 bucket to make the resized images publicly accessible for serving to users.",
          "upvote_count": "17",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1322986,
          "date": "Sat 07 Dec 2024 03:33",
          "username": "LeonSauveterre",
          "content": "OK. A is better, although I chose D originally.<br><br>I guess it shouldn't be D simply because it overkills for this scenario and introduces higher operational overhead (even though option D can handle more complex workloads than Lambda if needed).",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1221972,
          "date": "Fri 31 May 2024 08:16",
          "username": "cnureddy",
          "content": "How can end user upload an image to S3 bucket with static hosting. I believe it should be dynamic website (Answer D)",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1113390,
          "date": "Thu 04 Jan 2024 08:22",
          "username": "mr123dd",
          "content": "imagestaticS3 or cloudfront<br>but image is unstructured data so you dont store it in a relational database like RDS<br>and Step Function is not for processing<br>So A",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 988193,
          "date": "Wed 23 Aug 2023 12:34",
          "username": "Guru4Cloud",
          "content": "This meets all the key requirements:<br><br>S3 static website provides high availability and auto scaling to handle unpredictable traffic<br>Lambda functions invoked from the S3 site can resize images on the fly<br>Storing images in S3 buckets provides durability, scalability and high throughput<br>Serverless approach with S3 and Lambda maximizes scalability and availability",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 957113,
          "date": "Thu 20 Jul 2023 06:07",
          "username": "TariqKipkemei",
          "content": "ScalabilityS3, Lamda<br>automatically resize imagesLambda",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#514",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a microservices application on Amazon EC2 instances. The company wants to migrate the application to an Amazon Elastic Kubernetes Service (Amazon EKS) cluster for scalability. The company must configure the Amazon EKS control plane with endpoint private access set to true and endpoint public access set to false to maintain security compliance. The company must also put the data plane in private subnets. However, the company has received error notifications because the node cannot join the cluster.<br><br>Which solution will allow the node to join the cluster?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#514",
          "answers": [
            {
              "choice": "<p>Grant the required permission in AWS Identity and Access Management (IAM) to the AmazonEKSNodeRole IAM role.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create interface VPC endpoints to allow nodes to access the control plane.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Recreate nodes in the public subnet. Restrict security groups for EC2 nodes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Allow outbound traffic in the security group of the nodes.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 514 discussion",
      "discusstion": [
        {
          "id": 903908,
          "date": "Mon 22 May 2023 12:00",
          "username": "y0",
          "content": "Check this : https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html<br><br>Also, EKS does not require VPC endpoints. This is not the right use case for EKS<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>correct i was going for B, but A looks better.<br>https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html<br>\\\"When you enable endpoint private access for your cluster, Amazon EKS creates a Route 53 private hosted zone on your behalf and associates it with your cluster's VPC. This private hosted zone is managed by Amazon EKS, and it doesn't appear in your account's Route 53 resources. \\\"</li><li>https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html#:~:textBefore,launched<br><br>\\\"Before you can launch nodes and register them into a cluster, you must create an IAM role for those nodes to use when they are launched.\\\"</li><li>which implies AmazonEKSNodeRole IAM role had already been configured..... that leaves answer B as the only viable choice</li></ul>",
          "upvote_count": "20",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1208474,
          "date": "Wed 08 May 2024 18:34",
          "username": "TwinSpark",
          "content": "correct i was going for B, but A looks better.<br>https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html<br>\\\"When you enable endpoint private access for your cluster, Amazon EKS creates a Route 53 private hosted zone on your behalf and associates it with your cluster's VPC. This private hosted zone is managed by Amazon EKS, and it doesn't appear in your account's Route 53 resources. \\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1182999,
          "date": "Tue 26 Mar 2024 05:16",
          "username": "h0ng97_spare_002",
          "content": "https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html#:~:textBefore,launched<br><br>\\\"Before you can launch nodes and register them into a cluster, you must create an IAM role for those nodes to use when they are launched.\\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>which implies AmazonEKSNodeRole IAM role had already been configured..... that leaves answer B as the only viable choice</li></ul>",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1316561,
          "date": "Sat 23 Nov 2024 05:45",
          "username": "JA2018",
          "content": "which implies AmazonEKSNodeRole IAM role had already been configured..... that leaves answer B as the only viable choice",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 901902,
          "date": "Fri 19 May 2023 14:22",
          "username": "cloudenthusiast",
          "content": "By creating interface VPC endpoints, you can enable the necessary communication between the Amazon EKS control plane and the nodes in private subnets. This solution ensures that the control plane maintains endpoint private access (set to true) and endpoint public access (set to false) for security compliance.",
          "upvote_count": "19",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1331161,
          "date": "Tue 24 Dec 2024 16:05",
          "username": "Salilgen",
          "content": "IMO answer is A.<br>In private cluster you need interface VPC endpoints to necessary connect to some AWS services (https://docs.aws.amazon.com/eks/latest/userguide/private-clusters.html) but EKS node always connect to control plane by EKS owned ENI.<br>See this: it is very clear.<br>https://keetmalin.medium.com/eks-cluster-network-architecture-for-worker-nodes-635e067c8c2a",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1322992,
          "date": "Sat 07 Dec 2024 03:51",
          "username": "LeonSauveterre",
          "content": "The question is trying to tell us:<br>1. \\\"private accesstrue\\\" and \\\"public accessfalse\\\". So the control plane endpoint is private and only accessible from within the VPC.<br>2. Nodes (data plane) are in private subnets.<br><br>Option A is NECESSARY but lack of permissions would generally cause authorization errors, not connectivity errors (that lead to failure of joining the cluster). Only after you got this right, you would likely receive errors about joining. So apparently we have already configured auth correctly, meaning A is not the answer.<br><br>Option C exposes the nodes to the internet. Wrong.<br><br>Option D is important for nodes to communicate with AWS services (because of allowing outbound traffic), but it's not sufficient if the required VPC interface endpoints are not even there.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1241609,
          "date": "Wed 03 Jul 2024 21:04",
          "username": "a7md0",
          "content": "AmazonEKSNodeRole IAM role<br><br>https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1238977,
          "date": "Sat 29 Jun 2024 03:12",
          "username": "emakid",
          "content": "When Amazon EKS nodes cannot join the cluster, especially when the control plane is set to private access only, the issue typically revolves around networking and connectivity. When the EKS control plane is configured with private access only, the nodes must communicate with the control plane over private IP addresses. Creating VPC endpoints (specifically, com.amazonaws.<region>.eks) allows traffic between the EKS nodes and the control plane to be routed privately within the VPC, which resolves the connectivity issue.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1236675,
          "date": "Tue 25 Jun 2024 04:51",
          "username": "Gape4",
          "content": "I think is B.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1231517,
          "date": "Sun 16 Jun 2024 21:34",
          "username": "MandAsh",
          "content": "Error they have mentioned is at network level. They are not saying authorisation is failed rather noceis enable to connect to cluster aka connectivity issue. So answer it must be B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1228404,
          "date": "Tue 11 Jun 2024 13:03",
          "username": "Rocconno",
          "content": "https://docs.aws.amazon.com/eks/latest/userguide/private-clusters.html<br>\\\"Any self-managed nodes must be deployed to subnets that have the VPC interface endpoints that you require. If you create a managed node group, the VPC interface endpoint security group must allow the CIDR for the subnets, or you must add the created node security group to the VPC interface endpoint security group.\\\"",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1208725,
          "date": "Thu 09 May 2024 08:55",
          "username": "stalk98",
          "content": "I Think is A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1202993,
          "date": "Sat 27 Apr 2024 09:40",
          "username": "trinh_le",
          "content": "B is good to go",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1190724,
          "date": "Sun 07 Apr 2024 04:26",
          "username": "JackyCCK",
          "content": "S3/DynamoDB - VPC endpoint, other service should use interface endpoint so B is incorrect",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1189179,
          "date": "Thu 04 Apr 2024 10:35",
          "username": "bujuman",
          "content": "Because of these two assertions:<br>- Amazon EKS control plane with endpoint private access set to true and endpoint public access set to false to maintain security compliance.<br>( The company must also put the data plane in private subnets.<br>The best answer is related to Networking, Private Subnets (EKS Ctr Plane is strictly private and Data Plane stick under private subnets) and not related to EKS autodeployment that sure need an IAM policy. So according to me, answer B is the best answer.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1063418,
          "date": "Mon 06 Nov 2023 01:29",
          "username": "potomac",
          "content": "Before can launch nodes and register nodes into a EKS cluster, must create an IAM role for those nodes to use when they are launched.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1049481,
          "date": "Sat 21 Oct 2023 14:34",
          "username": "thanhnv142",
          "content": "A is correct:<br>To deploy a new EKS cluster:<br>1. Need to have a VPC and at least 2 subnets<br>2. An IAM role that have permission to create and describe EKS cluster",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1049479,
          "date": "Sat 21 Oct 2023 14:26",
          "username": "thanhnv142",
          "content": "A is good to go. B is not correct because they already setup connection to control plane.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"They already setup connection to control plane\\\" where did you read that?</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1111109,
          "date": "Mon 01 Jan 2024 12:18",
          "username": "pentium75",
          "content": "\\\"They already setup connection to control plane\\\" where did you read that?",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 992369,
          "date": "Mon 28 Aug 2023 18:07",
          "username": "Bennyboy789",
          "content": "In Amazon EKS, nodes need to communicate with the EKS control plane. When the Amazon EKS control plane endpoint access is set to private, you need to create interface VPC endpoints in the VPC where your nodes are running. This allows the nodes to access the control plane privately without needing public internet access.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#515",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating an on-premises application to AWS. The company wants to use Amazon Redshift as a solution.<br><br>Which use cases are suitable for Amazon Redshift in this scenario? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BCE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#515",
          "answers": [
            {
              "choice": "<p>Supporting data APIs to access data with traditional, containerized, and event-driven applications<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Supporting client-side and server-side encryption<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Building analytics workloads during specified hours and when the application is not active<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Caching data to reduce the pressure on the backend database<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Scaling globally to support petabytes of data and tens of millions of requests per minute<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Creating a secondary replica of the cluster by using the AWS Management Console<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 515 discussion",
      "discusstion": [
        {
          "id": 909062,
          "date": "Mon 29 May 2023 07:38",
          "username": "elmogy",
          "content": "Amazon Redshift is a data warehouse solution, so it is suitable for:<br>-Supporting encryption (client-side and server-side)<br>-Handling analytics workloads, especially during off-peak hours when the application is less active<br>-Scaling to large amounts of data and high query volumes for analytics purposes<br><br>The following options are incorrect because:<br>A) Data APIs are not typically used with Redshift. It is more for running SQL queries and analytics.<br>D) Redshift is not typically used for caching data. It is for analytics and data warehouse purposes.<br>F) Redshift clusters do not create replicas in the management console. They are standalone clusters. you could create DR cluster from snapshot and restore to another region (automated or manual) but I do not think this what is meant in this option.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"Data APIs are not typically used with Redshift\\\" -&gt; \\\"With the Data API, you can programmatically access data in your Amazon Redshift cluster from different AWS services such as AWS Lambda, Amazon SageMaker notebooks, AWS Cloud9, and also your on-premises applications using the AWS SDK. This allows you to build cloud-native, containerized, serverless, web-based, and event-driven applications on the AWS Cloud.\\\"</li></ul>",
          "upvote_count": "19",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 1111113,
          "date": "Mon 01 Jan 2024 12:36",
          "username": "pentium75",
          "content": "\\\"Data APIs are not typically used with Redshift\\\" -> \\\"With the Data API, you can programmatically access data in your Amazon Redshift cluster from different AWS services such as AWS Lambda, Amazon SageMaker notebooks, AWS Cloud9, and also your on-premises applications using the AWS SDK. This allows you to build cloud-native, containerized, serverless, web-based, and event-driven applications on the AWS Cloud.\\\"",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 902962,
          "date": "Sun 21 May 2023 08:43",
          "username": "Rob1L",
          "content": "B. Supporting client-side and server-side encryption: Amazon Redshift supports both client-side and server-side encryption for improved data security.<br><br>C. Building analytics workloads during specified hours and when the application is not active: Amazon Redshift is optimized for running complex analytic queries against very large datasets, making it a good choice for this use case.<br><br>E. Scaling globally to support petabytes of data and tens of millions of requests per minute: Amazon Redshift is designed to handle petabytes of data, and to deliver fast query and I/O performance for virtually any size dataset.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 1322999,
          "date": "Sat 07 Dec 2024 04:02",
          "username": "LeonSauveterre",
          "content": "YOU MUST KNOW: Amazon Redshift is a cloud-based data warehouse service designed for analytics and reporting on large datasets, optimized for complex queries and analytical workloads rather than transactional or real-time applications.<br><br>After you memorized that, option A is incorrect. If you want to work on operational workloads, then Aurora, Amazon RDS, DynamoDB, and such, are better choices.<br><br>Option D: Caching is not a core use case for Redshift. You can choose DAX (Amazon DynamoDB Accelerator) or ElastiCache to mitigate database pressure.<br><br>Option E: I choose that. BUT, Redshift is not designed for *high-concurrency* transactional workloads like \\\"10s of mils of reqs/min\\\", although it CAN handle massive datasets. Well... It seems partially true to me compared to other definitely wrong options.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 1282383,
          "date": "Thu 12 Sep 2024 02:24",
          "username": "rpmaws",
          "content": "B is not correct, how it can do encryption at client side ?",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 1241047,
          "date": "Tue 02 Jul 2024 23:14",
          "username": "3bdf1cc",
          "content": "Found this related to A -- but specific to Redshift Serverless - but should qualify as a Redshift use case<br>The Data API enables you to seamlessly access data from Redshift Serverless with all types of traditional, cloud-native, and containerized serverless web service-based applications and event-driven applications.<br>https://www.amazonaws.cn/en/blog-selection/use-the-amazon-redshift-data-api-to-interact-with-amazon-redshift-serverless/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1223400,
          "date": "Mon 03 Jun 2024 05:43",
          "username": "NSA_Poker",
          "content": "The following are obviously incorrect:<br>(D) Redshift is not as suitable as ElastiCache for caching.<br>(F) A secondary replica of the cluster is not supported.<br><br>The debate is between BCE & ACE or simplified, between A & C.<br>(A) is incorrect bc there is a difference btw Amazon Redshift Data API & API Gateway. API Gateway supports containerized and serverless workloads, as well as web applications. Amazon Redshift Data API is a built in API to access Redshift data with web services=E2=80=93based applications, including AWS Lambda, Amazon SageMaker notebooks, and AWS Cloud9.<br>https://aws.amazon.com/blogs/big-data/build-a-serverless-analytics-application-with-amazon-redshift-and-amazon-api-gateway/<br><br>(B) is correct. You have the following options of protecting data at rest in Amazon Redshift. Use server-side encryption OR use client-side encryption<br>https://docs.aws.amazon.com/redshift/latest/mgmt/security-encryption.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 1190431,
          "date": "Sat 06 Apr 2024 16:08",
          "username": "JackyCCK",
          "content": "Redshift is OLAP(online analytical processing) so D is wrong, \\\"when the application is not active\\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>*C is wrong</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1190432,
          "date": "Sat 06 Apr 2024 16:10",
          "username": "JackyCCK",
          "content": "*C is wrong",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1119013,
          "date": "Wed 10 Jan 2024 21:32",
          "username": "awsgeek75",
          "content": "A, C, E are for data and Redshift is data warehouse.<br>B is too generic of a choice<br>D caching is not the main purpose of Redshift<br>F replication is not main use of Redshift<br><br>CE are easy<br>Between AB, I chose A because Redshift supports data API and client-side encryption is not Redshift specific",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 1118546,
          "date": "Wed 10 Jan 2024 13:34",
          "username": "1rob",
          "content": "A: source https://aws.amazon.com/blogs/big-data/using-the-amazon-redshift-data-api-to-interact-with-amazon-redshift-clusters/<br>B: source: https://docs.aws.amazon.com/redshift/latest/mgmt/security-encryption.html<br>C: not sure, but you can configure scheduled queries, but the remark \\\" and when the application is not active \\\" , that is not relevant.<br>D: source https://docs.aws.amazon.com/redshift/latest/dg/c_challenges_achieving_high_performance_queries.html<br>E: Scaling globally is not supported; redshift is only a regional service.<br>F: only read replica is supported. So not a secondary replica of the cluster.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ABD"
        },
        {
          "id": 1111114,
          "date": "Mon 01 Jan 2024 12:37",
          "username": "pentium75",
          "content": "A: https://aws.amazon.com/de/blogs/big-data/get-started-with-the-amazon-redshift-data-api/<br>B: https://docs.aws.amazon.com/redshift/latest/mgmt/security-encryption.html<br>D: https://docs.aws.amazon.com/redshift/latest/dg/c_challenges_achieving_high_performance_queries.html#result-caching<br><br>Not C: Redshift is a Data Warehouse; you can use that for analytics, but it is not directly related to an \\\"application\\\"<br>Not E: \\\"Petabytes of data\\\" yes, but \\\"tens of millions of requests per minute\\\" is not a typical feature of Redshift<br>Nor F: Replicas are not a Redshift feature",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ABD"
        },
        {
          "id": 1066970,
          "date": "Fri 10 Nov 2023 07:02",
          "username": "TariqKipkemei",
          "content": "Technically both options A and B apply, this is from the links below:<br><br>A. You can access your Amazon Redshift database using the built-in Amazon Redshift Data API.<br>https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html#:~:textin%20Amazon%20Redshift-,Data%20API,-.%20Using%20this%20API<br><br>B. You can encrypt data client-side and upload the encrypted data to Amazon Redshift. In this case, you manage the encryption process, the encryption keys, and related tools.<br><br>https://docs.aws.amazon.com/redshift/latest/mgmt/security-encryption.html#:~:textUse-,client%2Dside,-encryption%20%E2%80%93%20You%20can",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 1063423,
          "date": "Mon 06 Nov 2023 01:43",
          "username": "potomac",
          "content": "Amazon Redshift provides a Data API that you can use to painlessly access data from Amazon Redshift with all types of traditional, cloud-native, and containerized, serverless web services-based and event-driven applications.<br><br>Amazon Redshift supports up to 500 concurrent queries per cluster, which may be expanded by adding more nodes to the cluster.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>change to ABD<br><br>To reduce query runtime and improve system performance, Amazon Redshift caches the results of certain types of queries in memory on the leader node. When a user submits a query, Amazon Redshift checks the results cache for a valid, cached copy of the query results. If a match is found in the result cache, Amazon Redshift uses the cached results and doesn't run the query. Result caching is transparent to the user.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ABC"
        },
        {
          "id": 1063430,
          "date": "Mon 06 Nov 2023 02:00",
          "username": "potomac",
          "content": "change to ABD<br><br>To reduce query runtime and improve system performance, Amazon Redshift caches the results of certain types of queries in memory on the leader node. When a user submits a query, Amazon Redshift checks the results cache for a valid, cached copy of the query results. If a match is found in the result cache, Amazon Redshift uses the cached results and doesn't run the query. Result caching is transparent to the user.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 988165,
          "date": "Wed 23 Aug 2023 11:56",
          "username": "Guru4Cloud",
          "content": "The key use cases for Amazon Redshift that fit this scenario are:<br><br>B) Redshift supports both client-side and server-side encryption to protect sensitive data.<br><br>C) Redshift is well suited for running batch analytics workloads during off-peak times without affecting OLTP systems.<br><br>E) Redshift can scale to massive datasets and concurrent users to support large analytics workloads.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 987875,
          "date": "Wed 23 Aug 2023 04:37",
          "username": "cd93",
          "content": "Why E lol? It's a data warehouse! it has no need to support millions of requests, it is not mentioned anywhere (https://aws.amazon.com/redshift/features)<br><br>In fact Redshift editor supports max 500 connections and workgroup support max 2000 connections at once, see it's quota page<br>Redshift has a cache layer, D is correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BCD"
        },
        {
          "id": 964859,
          "date": "Thu 27 Jul 2023 17:39",
          "username": "mrsoa",
          "content": "BCE,For B this is why<br><br>https://docs.aws.amazon.com/redshift/latest/mgmt/security-encryption.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 955084,
          "date": "Tue 18 Jul 2023 09:12",
          "username": "james2033",
          "content": "Quote: \\\"The Data API enables you to seamlessly access data from Redshift Serverless with all types of traditional, cloud-native, and containerized serverless web service-based applications and event-driven applications.\\\" at https://aws.amazon.com/blogs/big-data/use-the-amazon-redshift-data-api-to-interact-with-amazon-redshift-serverless/ (28/4/2023). Choose A. B and C are next chosen correct answers.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Typo, I want said \\\"C and E are next chosen correct answers.\\\"</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 955086,
          "date": "Tue 18 Jul 2023 09:13",
          "username": "james2033",
          "content": "Typo, I want said \\\"C and E are next chosen correct answers.\\\"",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 953161,
          "date": "Sun 16 Jul 2023 10:14",
          "username": "0628atv",
          "content": "https://docs.aws.amazon.com/redshift/latest/mgmt/welcome.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACE"
        }
      ]
    },
    {
      "question_id": "#516",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company provides an API interface to customers so the customers can retrieve their financial information. =D0=95he company expects a larger number of requests during peak usage times of the year.<br><br>The company requires the API to respond consistently with low latency to ensure customer satisfaction. The company needs to provide a compute host for the API.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#516",
          "answers": [
            {
              "choice": "<p>Use an Application Load Balancer and Amazon Elastic Container Service (Amazon ECS).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon API Gateway and AWS Lambda functions with provisioned concurrency.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Application Load Balancer and an Amazon Elastic Kubernetes Service (Amazon EKS) cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon API Gateway and AWS Lambda functions with reserved concurrency.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 516 discussion",
      "discusstion": [
        {
          "id": 901914,
          "date": "Fri 19 May 2023 14:32",
          "username": "cloudenthusiast",
          "content": "In the context of the given scenario, where the company wants low latency and consistent performance for their API during peak usage times, it would be more suitable to use provisioned concurrency. By allocating a specific number of concurrent executions, the company can ensure that there are enough function instances available to handle the expected load and minimize the impact of cold starts. This will result in lower latency and improved performance for the API.",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 992594,
          "date": "Mon 28 Aug 2023 22:15",
          "username": "Bennyboy789",
          "content": "Provisioned - minimizing cold starts and providing low latency.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1323004,
          "date": "Sat 07 Dec 2024 04:15",
          "username": "LeonSauveterre",
          "content": "Concurrency of lambda function, provisioned vs reserved:<br><br>Reserved Concurrency:<br>1. Desired instances can start without interference from other functions<br>2. Guarantees available execution capacity for critical functions<br><br>Provisioned Concurrency:<br>1. Also guarantees consistent performance<br>2. [!!] Allows you to pre-warm a specific number of function instances to reduce cold start latency",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1119015,
          "date": "Wed 10 Jan 2024 21:38",
          "username": "awsgeek75",
          "content": "https://docs.aws.amazon.com/lambda/latest/dg/lambda-concurrency.html#reserved-and-provisioned<br><br>Consistency decreases if you exceed your provisioned instance. Lets say you have 1000 (default) provisioned instances and the load is 1500. The new 500 will have to wait until the first 1000 concurrent calls finish. This is solved by increasing the provisioned concurrency to 1500.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1084994,
          "date": "Fri 01 Dec 2023 07:33",
          "username": "1rob",
          "content": "So I have my doubts here. The question also states ;\\\"The company needs to provide a compute host for the API.\\\" Imho this implies to have some sort of physical host which has to be provided by the customer. Translating this further to aws this would mean an EC2 instance. And then when I would go for ECS in stead of EKS.<br>Please share your opinion.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Exactly, inicially I was thinking on B but if company must provide a host I would say that only option A is feasible</li><li>Sorry I understand bad the text, coorect answer is B, as for my understanding now the host is the device that the costumer needs to connect with API Gateway, bellow explains well the logic<br>https://aws.amazon.com/api-gateway/</li></ul>",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1108629,
          "date": "Fri 29 Dec 2023 12:21",
          "username": "pdragon1981",
          "content": "Exactly, inicially I was thinking on B but if company must provide a host I would say that only option A is feasible<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Sorry I understand bad the text, coorect answer is B, as for my understanding now the host is the device that the costumer needs to connect with API Gateway, bellow explains well the logic<br>https://aws.amazon.com/api-gateway/</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1108632,
          "date": "Fri 29 Dec 2023 12:26",
          "username": "pdragon1981",
          "content": "Sorry I understand bad the text, coorect answer is B, as for my understanding now the host is the device that the costumer needs to connect with API Gateway, bellow explains well the logic<br>https://aws.amazon.com/api-gateway/",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 988158,
          "date": "Wed 23 Aug 2023 11:47",
          "username": "Guru4Cloud",
          "content": "This option provides the least operational overhead:<br><br>API Gateway handles the API requests and integration with Lambda<br>Lambda automatically scales compute without managing servers<br>Provisioned concurrency ensures consistent low latency by keeping functions initialized<br>No need to manage containers or orchestration platforms as with ECS/EKS",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 957122,
          "date": "Thu 20 Jul 2023 06:36",
          "username": "TariqKipkemei",
          "content": "The company requires the API to respond consistently with low latency to ensure customer satisfaction especially during high peak periods, there is no mention of cost efficient. Hence provisioned concurrency is the best option.<br>Provisioned concurrency is the number of pre-initialized execution environments you want to allocate to your function. These execution environments are prepared to respond immediately to incoming function requests. Configuring provisioned concurrency incurs charges to your AWS account.<br><br>https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html#:~:textfor%20a%20function.-,Provisioned%20concurrency,-%E2%80%93%20Provisioned%20concurrency%20is",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 909740,
          "date": "Mon 29 May 2023 23:50",
          "username": "MirKhobaeb",
          "content": "AWS Lambda provides a highly scalable and distributed infrastructure that automatically manages the underlying compute resources. It automatically scales your API based on the incoming request load, allowing it to respond consistently with low latency, even during peak times. AWS Lambda takes care of infrastructure provisioning, scaling, and resource management, allowing you to focus on writing the code for your API logic.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#517",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to send all AWS Systems Manager Session Manager logs to an Amazon S3 bucket for archival purposes.<br><br>Which solution will meet this requirement with the MOST operational efficiency?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#517",
          "answers": [
            {
              "choice": "<p>Enable S3 logging in the Systems Manager console. Choose an S3 bucket to send the session data to.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Install the Amazon CloudWatch agent. Push all logs to a CloudWatch log group. Export the logs to an S3 bucket from the group for archival purposes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a Systems Manager document to upload all server logs to a central S3 bucket. Use Amazon EventBridge to run the Systems Manager document against all servers that are in the account daily.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Install an Amazon CloudWatch agent. Push all logs to a CloudWatch log group. Create a CloudWatch logs subscription that pushes any incoming log events to an Amazon Kinesis Data Firehose delivery stream. Set Amazon S3 as the destination.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 517 discussion",
      "discusstion": [
        {
          "id": 1106134,
          "date": "Tue 26 Dec 2023 16:27",
          "username": "master9",
          "content": "send logs to Amazon S3 from AWS Systems Manager Session Manager. Here are the steps to do so:<br><br>Enable S3 Logging: Open the AWS Systems Manager console. In the navigation pane, choose Session Manager. Choose the Preferences tab, and then choose Edit. Select the check box next to Enable under S3 logging.<br><br>Create an S3 Bucket: To store the Session Manager logs, create an S3 bucket to hold the audit logs from the Session Manager interactive shell usage.<br><br>Configure IAM Role: AWS Systems Manager Agent (SSM Agent) uses the same AWS Identity and Access Management (IAM) role to activate itself and upload logs to Amazon S3. You can use either an IAM instance profile that's attached to an Amazon Elastic Compute Cloud (Amazon EC2) instance or the IAM role that's configured for the Default Host Management Configuration.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 901923,
          "date": "Fri 19 May 2023 14:36",
          "username": "cloudenthusiast",
          "content": "option A does not involve CloudWatch, while option D does. Therefore, in terms of operational overhead, option A would generally have less complexity and operational overhead compared to option D.<br><br>Option A simply enables S3 logging in the Systems Manager console, allowing you to directly send session logs to an S3 bucket. This approach is straightforward and requires minimal configuration.<br><br>On the other hand, option D involves installing and configuring the Amazon CloudWatch agent, creating a CloudWatch log group, setting up a CloudWatch Logs subscription, and configuring an Amazon Kinesis Data Firehose delivery stream to store logs in an S3 bucket. This requires additional setup and management compared to option A.<br><br>So, if minimizing operational overhead is a priority, option A would be a simpler and more straightforward choice.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1260761,
          "date": "Sun 04 Aug 2024 20:05",
          "username": "pujithacg8",
          "content": "A, You can choose to store session log data in a specified Amazon Simple Storage Service (Amazon S3) bucket for debugging and troubleshooting purposes.<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-logging.html#session-manager-logging-s3",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1119019,
          "date": "Wed 10 Jan 2024 21:44",
          "username": "awsgeek75",
          "content": "Most efficient is A because it is a direct option in SM logging.<br>B can work but is more operational overhead as you end up using CloudWatch (not sure how but making assumption based on language of option)<br>C is definitely too much work<br>D Way too many moving parts",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1063433,
          "date": "Mon 06 Nov 2023 02:07",
          "username": "potomac",
          "content": "You can choose to store session log data in a specified Amazon Simple Storage Service (Amazon S3) bucket for debugging and troubleshooting purposes.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 996146,
          "date": "Fri 01 Sep 2023 16:55",
          "username": "deechean",
          "content": "You can config the log archived to S3 in the Session Manager - > preference tab.Another option is CloudWatch log.<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-logging.html#session-manager-logging-s3",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 988151,
          "date": "Wed 23 Aug 2023 11:42",
          "username": "Guru4Cloud",
          "content": "=C2=B0Simplicity - Enabling S3 logging requires just a simple configuration in the Systems Manager console to specify the destination S3 bucket. No other services need to be configured.<br> =C2=B0Direct integration - Systems Manager has native support to send session logs to S3 through this feature. No need for intermediary services.<br> =C2=B0Automated flow - Once S3 logging is enabled, the session logs automatically flow to the S3 bucket without manual intervention.<br> =C2=B0Easy management - The S3 bucket can be managed independently for log storage and archival purposes without impacting Systems Manager.<br> =C2=B0Cost-effectiveness - No charges for intermediate CloudWatch or Kinesis services. Just basic S3 storage costs.<br> =C2=B0Minimal overhead - No ongoing management of complex pipeline of services. Direct logs to S3 minimizes overhead.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 957127,
          "date": "Thu 20 Jul 2023 06:48",
          "username": "TariqKipkemei",
          "content": "With the MOST operational efficiency then option A is best.<br>Otherwise B is also an option with a little bit more ops than option A.<br><br>https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-logging.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 946785,
          "date": "Sun 09 Jul 2023 01:35",
          "username": "Zox42",
          "content": "Answer A. https://aws-labs.net/winlab5-manageinfra/sessmgrlog.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 936731,
          "date": "Wed 28 Jun 2023 15:58",
          "username": "Zuit",
          "content": "GPT argued for D.<br><br>B could be an option, by installing a logging package on alle managed systems/ECs etc. https://docs.aws.amazon.com/systems-manager/latest/userguide/distributor-working-with-packages-deploy.html<br><br>However, as it mentions the \\\"Session manager logs\\\" I would tend towards A.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 928253,
          "date": "Tue 20 Jun 2023 09:49",
          "username": "MrAWSAssociate",
          "content": "It should be \\\"A\\\".<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-logging.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 922810,
          "date": "Wed 14 Jun 2023 08:43",
          "username": "secdgs",
          "content": "It have menu to Enable S3 Logging.<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-logging.html#session-manager-logging-s3",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 917002,
          "date": "Wed 07 Jun 2023 10:19",
          "username": "Markie999",
          "content": "BBBBBBBBB<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"Install the CloudWatch agent\\\" where?</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1111125,
          "date": "Mon 01 Jan 2024 12:51",
          "username": "pentium75",
          "content": "\\\"Install the CloudWatch agent\\\" where?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 916656,
          "date": "Tue 06 Jun 2023 23:30",
          "username": "Bill1000",
          "content": "The option 'A' says \\\"Enable S3 logging in the Systems Manager console.\\\" This means that you will enable the logs !! FOR !! S3 events and its is not what the question asks. My vote is for Option B, based on this article: https://docs.aws.amazon.com/AmazonS3/latest/userguide/logging-with-S3.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>To log session data using Amazon S3 (console)<br><br>Open the AWS Systems Manager console at https://console.aws.amazon.com/systems-manager/.<br>In the navigation pane, choose Session Manager.<br>Choose the Preferences tab, and then choose Edit.<br>Select the check box next to Enable under S3 logging.</li><li>But where do you want to install the Amazon CloudWatch agent in case of B?</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 948750,
          "date": "Tue 11 Jul 2023 08:44",
          "username": "baba365",
          "content": "To log session data using Amazon S3 (console)<br><br>Open the AWS Systems Manager console at https://console.aws.amazon.com/systems-manager/.<br>In the navigation pane, choose Session Manager.<br>Choose the Preferences tab, and then choose Edit.<br>Select the check box next to Enable under S3 logging.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 927728,
          "date": "Mon 19 Jun 2023 19:06",
          "username": "vrevkov",
          "content": "But where do you want to install the Amazon CloudWatch agent in case of B?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 910770,
          "date": "Wed 31 May 2023 05:32",
          "username": "omoakin",
          "content": "DDDDDD",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 903210,
          "date": "Sun 21 May 2023 14:34",
          "username": "Anmol_1010",
          "content": "Option D is definetely not right,<br>Its optiom B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 902858,
          "date": "Sun 21 May 2023 04:51",
          "username": "omoakin",
          "content": "Chat GPT says option A is incorrect cos it requires enabling S3 logging in the system manager console only logs information about the systems manager service not the session logs<br>Says correct answer is B<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Question may not be very clear. A should be the answer. Below link is the documetation:<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-logging.html#session-manager-logging-s3</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 905675,
          "date": "Wed 24 May 2023 11:03",
          "username": "[Removed]",
          "content": "Question may not be very clear. A should be the answer. Below link is the documetation:<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-logging.html#session-manager-logging-s3",
          "upvote_count": "5",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#518",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An application uses an Amazon RDS MySQL DB instance. The RDS database is becoming low on disk space. A solutions architect wants to increase the disk space without downtime.<br><br>Which solution meets these requirements with the LEAST amount of effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#518",
          "answers": [
            {
              "choice": "<p>Enable storage autoscaling in RDS<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Increase the RDS database instance size<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Change the RDS database instance storage type to Provisioned IOPS<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Back up the RDS database, increase the storage capacity, restore the database, and stop the previous instance<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 518 discussion",
      "discusstion": [
        {
          "id": 901926,
          "date": "Fri 19 May 2023 14:38",
          "username": "cloudenthusiast",
          "content": "Enabling storage autoscaling allows RDS to automatically adjust the storage capacity based on the application's needs. When the storage usage exceeds a predefined threshold, RDS will automatically increase the allocated storage without requiring manual intervention or causing downtime. This ensures that the RDS database has sufficient disk space to handle the increasing storage requirements.",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1236676,
          "date": "Tue 25 Jun 2024 04:57",
          "username": "Gape4",
          "content": "Autoscaling.... without downtime...",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1063434,
          "date": "Mon 06 Nov 2023 02:09",
          "username": "potomac",
          "content": "Amazon RDS for MariaDB, Amazon RDS for MySQL, Amazon RDS for PostgreSQL, Amazon RDS for SQL Server and Amazon RDS for Oracle support RDS Storage Auto Scaling. RDS Storage Auto Scaling automatically scales storage capacity in response to growing database workloads, with zero downtime.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 988147,
          "date": "Wed 23 Aug 2023 11:32",
          "username": "Guru4Cloud",
          "content": "This question is so obvious",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 957130,
          "date": "Thu 20 Jul 2023 06:54",
          "username": "TariqKipkemei",
          "content": "RDS Storage Auto Scaling continuously monitors actual storage consumption, and scales capacity up automatically when actual utilization approaches provisioned storage capacity. Auto Scaling works with new and existing database instances. You can enable Auto Scaling with just a few clicks in the AWS Management Console. There is no additional cost for RDS Storage Auto Scaling. You pay only for the RDS resources needed to run your applications.<br><br>https://aws.amazon.com/about-aws/whats-new/2019/06/rds-storage-auto-scaling/#:~:textof%20the%20rest.-,RDS%20Storage%20Auto%20Scaling,-continuously%20monitors%20actual",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 955092,
          "date": "Tue 18 Jul 2023 09:21",
          "username": "james2033",
          "content": "Quote \\\"Amazon RDS now supports Storage Auto Scaling\\\" and \\\"... with zero downtime.\\\" (Jun 20th 2019) at https://aws.amazon.com/about-aws/whats-new/2019/06/rds-storage-auto-scaling/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Hello moderator, please help me delete this discussion, I already add content before this comment.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 955098,
          "date": "Tue 18 Jul 2023 09:23",
          "username": "james2033",
          "content": "Hello moderator, please help me delete this discussion, I already add content before this comment.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 953331,
          "date": "Sun 16 Jul 2023 15:09",
          "username": "james2033",
          "content": "See 'Amazon RDS now supports Storage Auto Scaling. Posted On: Jun 20, 2019. Starting today, Amazon RDS for MariaDB, Amazon RDS for MySQL, Amazon RDS for PostgreSQL, Amazon RDS for SQL Server and Amazon RDS for Oracle support RDS Storage Auto Scaling. RDS Storage Auto Scaling automatically scales storage capacity in response to growing database workloads, with zero downtime.'  at https://aws.amazon.com/about-aws/whats-new/2019/06/rds-storage-auto-scaling/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 934793,
          "date": "Mon 26 Jun 2023 23:09",
          "username": "haoAWS",
          "content": "A is the best answer. <br>B will not work for increasing disk space,it only improve the IO performance.<br>C will not work because it will cause downtime.<br>D is too complicated and need much operational effort.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 905682,
          "date": "Wed 24 May 2023 11:07",
          "username": "[Removed]",
          "content": "https://aws.amazon.com/about-aws/whats-new/2019/06/rds-storage-auto-scaling/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 903218,
          "date": "Sun 21 May 2023 14:42",
          "username": "Anmol_1010",
          "content": "The key word isNo Down time. A would be bewt option",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#519",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A consulting company provides professional services to customers worldwide. The company provides solutions and tools for customers to expedite gathering and analyzing data on AWS. The company needs to centrally manage and deploy a common set of solutions and tools for customers to use for self-service purposes.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#519",
          "answers": [
            {
              "choice": "<p>Create AWS CloudFormation templates for the customers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create AWS Service Catalog products for the customers.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create AWS Systems Manager templates for the customers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create AWS Config items for the customers.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 519 discussion",
      "discusstion": [
        {
          "id": 901928,
          "date": "Fri 19 May 2023 14:39",
          "username": "cloudenthusiast",
          "content": "AWS Service Catalog allows you to create and manage catalogs of IT services that can be deployed within your organization. With Service Catalog, you can define a standardized set of products (solutions and tools in this case) that customers can self-service provision. By creating Service Catalog products, you can control and enforce the deployment of approved and validated solutions and tools.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"within your organization\\\" &gt; not for customers</li><li>for this use case, in order to access the self-service functions, customers must have some form of AWS identities (e.g. accounts, users, user groups or roles) already setup in the service provider's AWS organisation.</li></ul>",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1081831,
          "date": "Mon 27 Nov 2023 18:34",
          "username": "Oblako",
          "content": "\\\"within your organization\\\" > not for customers<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>for this use case, in order to access the self-service functions, customers must have some form of AWS identities (e.g. accounts, users, user groups or roles) already setup in the service provider's AWS organisation.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1316564,
          "date": "Sat 23 Nov 2024 06:00",
          "username": "JA2018",
          "content": "for this use case, in order to access the self-service functions, customers must have some form of AWS identities (e.g. accounts, users, user groups or roles) already setup in the service provider's AWS organisation.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 988146,
          "date": "Wed 23 Aug 2023 11:29",
          "username": "Guru4Cloud",
          "content": "Some key advantages of using Service Catalog:<br><br>Centralized management - Products can be maintained in a single catalog for easy discovery and governance.<br>Self-service access - Customers can deploy the solutions on their own without manual intervention.<br>Standardization - Products provide pre-defined templates for consistent deployment.<br>Access control - Granular permissions can be applied to restrict product visibility and access.<br>Reporting - Service Catalog provides detailed analytics on product usage and deployments.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 963439,
          "date": "Wed 26 Jul 2023 08:18",
          "username": "hsinchang",
          "content": "CloudFormation: a code as infrastructure service<br>Systems Manager:management solution for resources<br>Config: assess, audit and evaluate configurations<br>Other options does not fit this scenario.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 957133,
          "date": "Thu 20 Jul 2023 07:01",
          "username": "TariqKipkemei",
          "content": "AWS Service Catalog lets you centrally manage your cloud resources to achieve governance at scale of your infrastructure as code (IaC) templates, written in CloudFormation or Terraform. With AWS Service Catalog, you can meet your compliance requirements while making sure your customers can quickly deploy the cloud resources they need.<br><br>https://aws.amazon.com/servicecatalog/#:~:textHow%20it%20works-,AWS%20Service%20Catalog,-lets%20you%20centrally",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 907298,
          "date": "Fri 26 May 2023 13:16",
          "username": "Yadav_Sanjay",
          "content": "https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#520",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is designing a new web application that will run on Amazon EC2 Instances. The application will use Amazon DynamoDB for backend data storage. The application traffic will be unpredictable. The company expects that the application read and write throughput to the database will be moderate to high. The company needs to scale in response to application traffic.<br><br>Which DynamoDB table configuration will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#520",
          "answers": [
            {
              "choice": "<p>Configure DynamoDB with provisioned read and write by using the DynamoDB Standard table class. Set DynamoDB auto scaling to a maximum defined capacity.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure DynamoDB in on-demand mode by using the DynamoDB Standard table class.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure DynamoDB with provisioned read and write by using the DynamoDB Standard Infrequent Access (DynamoDB Standard-IA) table class. Set DynamoDB auto scaling to a maximum defined capacity.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure DynamoDB in on-demand mode by using the DynamoDB Standard Infrequent Access (DynamoDB Standard-IA) table class.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 520 discussion",
      "discusstion": [
        {
          "id": 901234,
          "date": "Thu 18 May 2023 15:12",
          "username": "Efren",
          "content": "B for me. Provisioned if we know how much traffic will come, but its unpredictable, so we have to go for on-demand<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Spot On</li></ul>",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 945344,
          "date": "Fri 07 Jul 2023 07:36",
          "username": "VellaDevil",
          "content": "Spot On",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1331494,
          "date": "Wed 25 Dec 2024 11:08",
          "username": "fdae619",
          "content": "Can someone answer why the standard class is a better choice to standard IA?",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1238982,
          "date": "Sat 29 Jun 2024 03:34",
          "username": "emakid",
          "content": "Configure DynamoDB in on-demand mode by using the DynamoDB Standard table class.<br><br> This option allows DynamoDB to automatically adjust to varying traffic patterns, which is ideal for unpredictable workloads. The Standard table class is suitable for applications with moderate to high read and write throughput, and on-demand mode ensures that you are billed based on the actual usage, providing cost efficiency for variable traffic patterns.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1236677,
          "date": "Tue 25 Jun 2024 05:00",
          "username": "Gape4",
          "content": "Key word : On demand. So I think B.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1119025,
          "date": "Wed 10 Jan 2024 22:00",
          "username": "awsgeek75",
          "content": "On demand<br>https://docs.aws.amazon.com/wellarchitected/latest/serverless-applications-lens/capacity.html<br><br>\\\"With on-demand capacity mode, DynamoDB charges you for the data reads and writes your application performs on your tables. You do not need to specify how much read and write throughput you expect your application to perform because DynamoDB instantly accommodates your workloads as they ramp up or down.\\\"",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1111140,
          "date": "Mon 01 Jan 2024 13:13",
          "username": "pentium75",
          "content": "Not A because of \\\"unpredictable\\\" traffic<br>Not C and D because we are expecting \\\"moderate to high\\\" traffic",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1092820,
          "date": "Sun 10 Dec 2023 21:16",
          "username": "leonliu4",
          "content": "Leaning towards B, it's hard to predict the capacity for A, and autoscaling doesn't respond fast",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1084046,
          "date": "Thu 30 Nov 2023 08:05",
          "username": "peekingpicker",
          "content": "it's A.<br>remember that :<br>he company expects that the application read and write throughput to the database will be moderate to high<br><br>provisioned throughput is cheaper than ondemand capacity right ?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>but \\\"unpredictable\\\" which usually hints to on-demand</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1111139,
          "date": "Mon 01 Jan 2024 13:13",
          "username": "pentium75",
          "content": "but \\\"unpredictable\\\" which usually hints to on-demand",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1070333,
          "date": "Tue 14 Nov 2023 12:55",
          "username": "dilaaziz",
          "content": "Data storage: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.tableclasses.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Actually, this link confirmed \\\"B\\\" for me...</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1221324,
          "date": "Thu 30 May 2024 01:25",
          "username": "Mr_Marcus",
          "content": "Actually, this link confirmed \\\"B\\\" for me...",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1063446,
          "date": "Mon 06 Nov 2023 02:16",
          "username": "potomac",
          "content": "On-demand mode is great for unpredictable traffic",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1039019,
          "date": "Tue 10 Oct 2023 01:35",
          "username": "bsbs1234",
          "content": "I choose B<br>I think the items stored in the table in this question has large size. So each read/write, a big chunk of data pass through. A capacity unit is used to describe data throughput. provision to the high capacity units will be a waste because unpredicted traffic pattern.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 992392,
          "date": "Mon 28 Aug 2023 18:31",
          "username": "Bennyboy789",
          "content": "Unpredictable on demand",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 988144,
          "date": "Wed 23 Aug 2023 11:25",
          "username": "Guru4Cloud",
          "content": "The key factors are:<br><br>With On-Demand mode, you only pay for what you use instead of over-provisioning capacity. This avoids idle capacity costs.<br>DynamoDB Standard provides the fastest performance needed for moderate-high traffic apps vs Standard-IA which is for less frequent access.<br>Auto scaling with provisioned capacity can also work but requires more administrative effort to tune the scaling thresholds.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 964455,
          "date": "Thu 27 Jul 2023 09:04",
          "username": "msdnpro",
          "content": "Support for B from AWS:<br><br>On-demand mode is a good option if any of the following are true:<br>-You create new tables with unknown workloads.<br>-You have unpredictable application traffic.<br>-You prefer the ease of paying for only what you use.<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 958031,
          "date": "Fri 21 Jul 2023 05:56",
          "username": "TariqKipkemei",
          "content": "Technically both options A and B will work. But this statement 'traffic will be unpredictable' rules out option A, because 'provisioned mode' was made for scenarios where traffic is predictable.<br>So I will stick with B, because 'on-demand mode' is made for unpredictable traffic and instantly accommodates workloads as they ramp up or down.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 953171,
          "date": "Sun 16 Jul 2023 10:30",
          "username": "0628atv",
          "content": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/AutoScaling.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 936375,
          "date": "Wed 28 Jun 2023 10:50",
          "username": "wRhlH",
          "content": "Not B for sure, \\\"The company needs to scale in response to application traffic.\\\"<br>Between A and C, I would choose C. Because it's a new application, and the traffic will be from moderate to high. So by choosing C, it's both cost-effecitve and scalable",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#521",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail company has several businesses. The IT team for each business manages its own AWS account. Each team account is part of an organization in AWS Organizations. Each team monitors its product inventory levels in an Amazon DynamoDB table in the team's own AWS account.<br><br>The company is deploying a central inventory reporting application into a shared AWS account. The application must be able to read items from all the teams' DynamoDB tables.<br><br>Which authentication option will meet these requirements MOST securely?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#521",
          "answers": [
            {
              "choice": "<p>Integrate DynamoDB with AWS Secrets Manager in the inventory application account. Configure the application to use the correct secret from Secrets Manager to authenticate and read the DynamoDB table. Schedule secret rotation for every 30 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>In every business account, create an IAM user that has programmatic access. Configure the application to use the correct IAM user access key ID and secret access key to authenticate and read the DynamoDB table. Manually rotate IAM access keys every 30 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>In every business account, create an IAM role named BU_ROLE with a policy that gives the role access to the DynamoDB table and a trust policy to trust a specific role in the inventory application account. In the inventory account, create a role named APP_ROLE that allows access to the STS AssumeRole API operation. Configure the application to use APP_ROLE and assume the crossaccount role BU_ROLE to read the DynamoDB table.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Integrate DynamoDB with AWS Certificate Manager (ACM). Generate identity certificates to authenticate DynamoDB. Configure the application to use the correct certificate to authenticate and read the DynamoDB table.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 521 discussion",
      "discusstion": [
        {
          "id": 901938,
          "date": "Fri 19 May 2023 14:58",
          "username": "cloudenthusiast",
          "content": "IAM Roles: IAM roles provide a secure way to grant permissions to entities within AWS. By creating an IAM role in each business account named BU_ROLE with the necessary permissions to access the DynamoDB table, the access can be controlled at the IAM role level.<br>Cross-Account Access: By configuring a trust policy in the BU_ROLE that trusts a specific role in the inventory application account (APP_ROLE), you establish a trusted relationship between the two accounts.<br>Least Privilege: By creating a specific IAM role (BU_ROLE) in each business account and granting it access only to the required DynamoDB table, you can ensure that each team's table is accessed with the least privilege principle.<br>Security Token Service (STS): The use of STS AssumeRole API operation in the inventory application account allows the application to assume the cross-account role (BU_ROLE) in each business account.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Well broken down..thank you :)</li></ul>",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 958034,
          "date": "Fri 21 Jul 2023 06:05",
          "username": "TariqKipkemei",
          "content": "Well broken down..thank you :)",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1231525,
          "date": "Sun 16 Jun 2024 21:52",
          "username": "MandAsh",
          "content": "C because they have taken effort to explain it in details.. lol",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 992398,
          "date": "Mon 28 Aug 2023 18:35",
          "username": "Bennyboy789",
          "content": "Keyword: IAM ROLES",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 987687,
          "date": "Tue 22 Aug 2023 20:30",
          "username": "Guru4Cloud",
          "content": "C is the most secure option to meet the requirements.<br><br>Using cross-account IAM roles and role chaining allows the inventory application to securely access resources in other accounts. The roles provide temporary credentials and can be permissions controlled.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 963569,
          "date": "Wed 26 Jul 2023 11:55",
          "username": "hsinchang",
          "content": "Looks complex, but IAM role seems more probable, I go with C.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 932939,
          "date": "Sat 24 Jun 2023 23:21",
          "username": "mattcl",
          "content": "Why not A?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A is wrong because it is incomplete. Just integrating with secrets manager doesn't give any access to DynamoDB.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1119031,
          "date": "Wed 10 Jan 2024 22:07",
          "username": "awsgeek75",
          "content": "A is wrong because it is incomplete. Just integrating with secrets manager doesn't give any access to DynamoDB.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 930264,
          "date": "Thu 22 Jun 2023 09:51",
          "username": "antropaws",
          "content": "It's complex, but looks C.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 902437,
          "date": "Sat 20 May 2023 10:11",
          "username": "eehhssaan",
          "content": "i'll go with C .. coming from two minds",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 901823,
          "date": "Fri 19 May 2023 11:58",
          "username": "nosense",
          "content": "a or c. C looks like a more secure<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>CCCCCCCCCCC</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 902859,
          "date": "Sun 21 May 2023 05:17",
          "username": "omoakin",
          "content": "CCCCCCCCCCC",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#522",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs container applications by using Amazon Elastic Kubernetes Service (Amazon EKS). The company's workload is not consistent throughout the day. The company wants Amazon EKS to scale in and out according to the workload.<br><br>Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#522",
          "answers": [
            {
              "choice": "<p>Use an AWS Lambda function to resize the EKS cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the Kubernetes Metrics Server to activate horizontal pod autoscaling.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use the Kubernetes Cluster Autoscaler to manage the number of nodes in the cluster.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon API Gateway and connect it to Amazon EKS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS App Mesh to observe network activity.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 522 discussion",
      "discusstion": [
        {
          "id": 987685,
          "date": "Thu 22 Aug 2024 20:25",
          "username": "Guru4Cloud",
          "content": "B and C are the correct options.<br><br>Using the Kubernetes Metrics Server (B) enables horizontal pod autoscaling to dynamically scale pods based on CPU/memory usage. This allows scaling at the application tier level.<br><br>The Kubernetes Cluster Autoscaler (C) automatically adjusts the number of nodes in the EKS cluster in response to pod resource requirements and events. This allows scaling at the infrastructure level.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 901939,
          "date": "Sun 19 May 2024 15:00",
          "username": "cloudenthusiast",
          "content": "By combining the Kubernetes Cluster Autoscaler (option C) to manage the number of nodes in the cluster and enabling horizontal pod autoscaling (option B) with the Kubernetes Metrics Server, you can achieve automatic scaling of your EKS cluster and container applications based on workload demand. This approach minimizes operational overhead as it leverages built-in Kubernetes functionality and automation mechanisms.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 1056829,
          "date": "Tue 29 Oct 2024 14:05",
          "username": "wsdasdasdqwdaw",
          "content": "K8S Metrics Server and Autoscaler > B and C",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 958044,
          "date": "Sun 21 Jul 2024 06:19",
          "username": "TariqKipkemei",
          "content": "This is pretty straight forward.<br>Use the Kubernetes Metrics Server to activate horizontal pod autoscaling.<br>Use the Kubernetes Cluster Autoscaler to manage the number of nodes in the cluster.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 955127,
          "date": "Thu 18 Jul 2024 09:59",
          "username": "james2033",
          "content": "Kubernetes Metrics Server https://docs.aws.amazon.com/eks/latest/userguide/metrics-server.html<br><br>AWS Autoscaler https://docs.aws.amazon.com/eks/latest/userguide/autoscaling.html and https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/cloudprovider/aws/README.md",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 901821,
          "date": "Sun 19 May 2024 11:56",
          "username": "nosense",
          "content": "b and c is right",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BC"
        }
      ]
    },
    {
      "question_id": "#523",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a microservice-based serverless web application. The application must be able to retrieve data from multiple Amazon DynamoDB tables A solutions architect needs to give the application the ability to retrieve the data with no impact on the baseline performance of the application.<br><br>Which solution will meet these requirements in the MOST operationally efficient way?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#523",
          "answers": [
            {
              "choice": "<p>AWS AppSync pipeline resolvers<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon CloudFront with Lambda@Edge functions<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Edge-optimized Amazon API Gateway with AWS Lambda functions<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Athena Federated Query with a DynamoDB connector<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 523 discussion",
      "discusstion": [
        {
          "id": 911167,
          "date": "Wed 31 May 2023 13:33",
          "username": "elmogy",
          "content": "just passed yesterday 30-05-23, around 75% of the exam came from here, some with light changes.",
          "upvote_count": "35",
          "selected_answers": ""
        },
        {
          "id": 902866,
          "date": "Sun 21 May 2023 05:35",
          "username": "omoakin",
          "content": "Great work made it to the last question. Goodluck to you all<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Thanks. Do you think the questions after 500 after relevant, they seem to be above associate level (harder)</li><li>I am jealous that 10 months ago there were only 523 questions :(</li><li>right...how to go through 840 questions :(</li><li>Currently 904 :')</li><li>moderators answer is wrong for many questions.which one should we consider:(</li><li>good luck to you as well.</li></ul>",
          "upvote_count": "18",
          "selected_answers": ""
        },
        {
          "id": 1049076,
          "date": "Fri 20 Oct 2023 21:36",
          "username": "cyber_bedouin",
          "content": "Thanks. Do you think the questions after 500 after relevant, they seem to be above associate level (harder)",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 1184203,
          "date": "Wed 27 Mar 2024 16:25",
          "username": "Drew3000",
          "content": "I am jealous that 10 months ago there were only 523 questions :(<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>right...how to go through 840 questions :(</li><li>Currently 904 :')</li><li>moderators answer is wrong for many questions.which one should we consider:(</li></ul>",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 1184547,
          "date": "Thu 28 Mar 2024 04:56",
          "username": "Awsbeginner87",
          "content": "right...how to go through 840 questions :(<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Currently 904 :')</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1235771,
          "date": "Sun 23 Jun 2024 12:01",
          "username": "Rhydian25",
          "content": "Currently 904 :')",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1184550,
          "date": "Thu 28 Mar 2024 04:58",
          "username": "Awsbeginner87",
          "content": "moderators answer is wrong for many questions.which one should we consider:(",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 913025,
          "date": "Fri 02 Jun 2023 21:40",
          "username": "MostofMichelle",
          "content": "good luck to you as well.",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1325364,
          "date": "Thu 12 Dec 2024 03:33",
          "username": "FlyingHawk",
          "content": "Why the suggested answer is D? I read the comments,feel A is more suitable as the requirement is to give the application the ability to retrieve the data with no impact on the baseline performance of the application.D might have affect the baseline performance, A is more effective",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1323011,
          "date": "Sat 07 Dec 2024 05:13",
          "username": "LeonSauveterre",
          "content": "A - Correct. Retrieves data from multiple data sources.<br>B - Incorrect. Lambda@Edge extends serverless processing to CloudFront, but it is typically used for content manipulation, caching, or geographic distribution.<br>C - That works but requires a lot of things to do manually. Why C when you can do with A?<br>D - Amazon Athena Federated Query is designed for ad hoc querying of data across different sources BUT it has impact on performance, and not operationally efficient.<br><br>PS: \\\"ad hoc\\\" means \\\"for this specific purpose\\\". Such requests can lack efficiency for repetitive tasks because it's not optimized or automated, since they're naturally exploratory or tailored to specific immediate needs.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1266723,
          "date": "Fri 16 Aug 2024 00:16",
          "username": "kevindu",
          "content": "Is there anyone who has recently passed the exam who can tell me approximately how many of the original questions are in the actual exam?",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1196631,
          "date": "Tue 16 Apr 2024 16:17",
          "username": "use4u",
          "content": "let me know<br>for most of questions that system answer are corrector comment answer are correct?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Comment answer</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1203944,
          "date": "Mon 29 Apr 2024 11:52",
          "username": "Sergiuss95",
          "content": "Comment answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1153333,
          "date": "Sun 18 Feb 2024 15:36",
          "username": "osmk",
          "content": "https://docs.amazonaws.cn/en_us/athena/latest/ug/connect-to-a-data-source.html",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1126306,
          "date": "Fri 19 Jan 2024 02:47",
          "username": "upliftinghut",
          "content": "key word is most operational effective > D requires no coding",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1119037,
          "date": "Wed 10 Jan 2024 22:17",
          "username": "awsgeek75",
          "content": "I'll go with D as ABC looks too much work or irrelevant. Although not sure how AFQ actually achieves the read without impacting performance.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1111150,
          "date": "Mon 01 Jan 2024 13:35",
          "username": "pentium75",
          "content": "Not A - Pipe Resolvers require coding, would not consider that 'operationally efficient'<br>Not B - CloudFront caches web content at the edge, not DynamoDB query results for apps<br>Not C - Neither API Gateway or Lambda have anything to do with DynamoDB performance<br>D - Can do exactly that",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1094857,
          "date": "Tue 12 Dec 2023 20:06",
          "username": "aws94",
          "content": "I am not an expert but I used Bing+Gemini+ChatgbtAAA",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1087383,
          "date": "Mon 04 Dec 2023 08:18",
          "username": "ekisako",
          "content": "multiple database tablesAppSync pipeline resolvers",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1072159,
          "date": "Thu 16 Nov 2023 06:29",
          "username": "hungta",
          "content": "For an operationally efficient solution that minimizes impact on baseline performance in a microservice-based serverless web application retrieving data from multiple DynamoDB tables, Amazon CloudFront with Lambda@Edge functions (Option B) is often the most suitable choice<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>CloudFront to retrieve data from DynamoDB tables?</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1111144,
          "date": "Mon 01 Jan 2024 13:26",
          "username": "pentium75",
          "content": "CloudFront to retrieve data from DynamoDB tables?",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1053396,
          "date": "Wed 25 Oct 2023 04:46",
          "username": "thanhnv142",
          "content": "D is correct. There is contruction of how to retrive data from DynamoDB with Anthena<br>https://docs.aws.amazon.com/athena/latest/ug/connect-to-a-data-source.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1024878,
          "date": "Wed 04 Oct 2023 16:09",
          "username": "pmlabs",
          "content": "The Answer is A. Some use case for AWS AppSync is Unified data access.<br>Consolidate data from multiple databases, APIs, and microservices in a single network call, from a single endpoint, abstracting backend complexity.https://aws.amazon.com/pm/appsync/?trke37f908f-322e-4ebc-9def-9eafa78141b8&sc_channelps&ef_idCj0KCQjwmvSoBhDOARIsAK6aV7jtg2I6jyXBH6_uUOKRrRoLmXQxaGbwYBP0aO1-RmauWW55DuXSGTMaAnT9EALw_wcB:G:s&s_kwcidAL!4422!3!647301987556!e!!g!!aws%20appsync!19613610159!148358960849",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1005642,
          "date": "Tue 12 Sep 2023 12:23",
          "username": "Linerd",
          "content": "B - seems more operationally efficient<br><br>A: example to make use of GraphQL with multi DynamoDB tables https://www.youtube.com/watch?vHSDKN43Vx7U<br>but it seems not the most operationally efficient to set it up<br><br>D: it can be useful when needs to join multi DynamoDB tables<br>But also \\\"querying DynamoDB using Athena can be slower and more expensive than querying directly using DynamoDB\\\"<br>refer to https://medium.com/@saswat.sahoo.1988/combine-the-simplicity-of-sql-with-the-power-of-nosql-pt-2-cff1c524297e",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1001309,
          "date": "Thu 07 Sep 2023 09:42",
          "username": "skyphilip",
          "content": "A is correct.<br>https://aws.amazon.com/blogs/mobile/appsync-pipeline-resolvers-2/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#524",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to analyze and troubleshoot Access Denied errors and Unauthorized errors that are related to IAM permissions. The company has AWS CloudTrail turned on.<br><br>Which solution will meet these requirements with the LEAST effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#524",
          "answers": [
            {
              "choice": "<p>Use AWS Glue and write custom scripts to query CloudTrail logs for the errors.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Batch and write custom scripts to query CloudTrail logs for the errors.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Search CloudTrail logs with Amazon Athena queries to identify the errors.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Search CloudTrail logs with Amazon QuickSight. Create a dashboard to identify the errors.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 524 discussion",
      "discusstion": [
        {
          "id": 987657,
          "date": "Thu 22 Feb 2024 20:51",
          "username": "Guru4Cloud",
          "content": "Athena allows you to run SQL queries on data in Amazon S3, including CloudTrail logs. It is the easiest way to query the logs and identify specific errors without needing to write any custom code or scripts.<br><br>With Athena, you can write simple SQL queries to filter the CloudTrail logs for the \\\"AccessDenied\\\" and \\\"UnauthorizedOperation\\\" error codes. This will return the relevant log entries that you can then analyze.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1126928,
          "date": "Fri 19 Jul 2024 19:29",
          "username": "awsgeek75",
          "content": "https://docs.aws.amazon.com/athena/latest/ug/cloudtrail-logs.html<br><br>When troubleshooting you will want to query specific things in the log and Athena provides query language for that.<br><br>Quick Sight is data analytics and visualisation tool. You can use it to aggregate data and maybe make a dashboard for number of errors by type etc but that doesn't help you troubleshoot anything.<br><br>C is correct",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1111156,
          "date": "Mon 01 Jul 2024 12:40",
          "username": "pentium75",
          "content": "\\\"Search CloudTrail logs with Amazon QuickSight\\\", that doesn't work. QuickSight can visualize Athena query results, so \\\"search CloudTrail logs with Amazon Athena, then create a dashboard with Amazon QuickSight\\\" would make sense. But QuickSight without Athena won't work.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1091847,
          "date": "Sun 09 Jun 2024 14:25",
          "username": "[Removed]",
          "content": "Athena is for searching",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1072360,
          "date": "Thu 16 May 2024 11:01",
          "username": "bogobob",
          "content": "The question asks specifically to \\\"analyze and troubleshoot\\\". While Athena is easy to get the data, you then just have a list of logs. Not very useful to troubleshoot...<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But without Athena, there is nothing you can visualize in QuickSight.</li><li>How will pretty pictures in QuickSight help with troubleshooting?</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1111157,
          "date": "Mon 01 Jul 2024 12:41",
          "username": "pentium75",
          "content": "But without Athena, there is nothing you can visualize in QuickSight.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1126923,
          "date": "Fri 19 Jul 2024 19:26",
          "username": "awsgeek75",
          "content": "How will pretty pictures in QuickSight help with troubleshooting?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1066558,
          "date": "Thu 09 May 2024 16:52",
          "username": "NickGordon",
          "content": "Quick Sight is an analytics tool. Sounds like a LEAST effort option",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 958052,
          "date": "Sun 21 Jan 2024 07:39",
          "username": "TariqKipkemei",
          "content": "C for me. Using Athena with CloudTrail logs is a powerful way to enhance your analysis of AWS service activity. For example, you can use queries to identify trends and further isolate activity by attributes, such as source IP address or user.<br><br>https://docs.aws.amazon.com/athena/latest/ug/cloudtrail-logs.html#:~:textCloudTrail%20Lake%20documentation.-,Using%20Athena,-with%20CloudTrail%20logs",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 953346,
          "date": "Tue 16 Jan 2024 16:34",
          "username": "james2033",
          "content": "IAM and CloudTrailhttps://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html#stscloudtrailexample-assumerole .<br>Query CloudTrail logs by Athena https://docs.aws.amazon.com/athena/latest/ug/cloudtrail-logs.html#tips-for-querying-cloudtrail-logs#tips-for-querying-cloudtrail-logs<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Choose C, not D, because need 'analyze and troubleshoot' , not just see on dashboard (in D).</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 953348,
          "date": "Tue 16 Jan 2024 16:36",
          "username": "james2033",
          "content": "Choose C, not D, because need 'analyze and troubleshoot' , not just see on dashboard (in D).",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 949667,
          "date": "Fri 12 Jan 2024 13:13",
          "username": "live_reply_developers",
          "content": "Amazon Athena is an interactive query service provided by AWS that enables you to analyze data , is a little bit more suitable integrated with cloud trail that permit to verify WHO accessed the service.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 935892,
          "date": "Thu 28 Dec 2023 02:01",
          "username": "manuh",
          "content": "Dashboard isnt requires. Also refer to this https://repost.aws/knowledge-center/troubleshoot-iam-permission-errors",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 934978,
          "date": "Wed 27 Dec 2023 05:47",
          "username": "haoAWS",
          "content": "I am struggling for the C and D for a long time,and ask the chatGPT.The chatGPT says D is better,since Athena requires more expertise on SQL.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 930510,
          "date": "Fri 22 Dec 2023 15:36",
          "username": "antropaws",
          "content": "Both C and D are feasible. I vote for D:<br><br>Amazon QuickSight supports logging the following actions as events in CloudTrail log files:<br>- Whether the request was made with root or AWS Identity and Access Management user credentials<br>- Whether the request was made with temporary security credentials for an IAM role or federated user<br>- Whether the request was made by another AWS service<br><br>https://docs.aws.amazon.com/quicksight/latest/user/logging-using-cloudtrail.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 924870,
          "date": "Sat 16 Dec 2023 08:23",
          "username": "PCWu",
          "content": "The Answer will be C:<br>Need to use Athena to query keywords and sort out the error logs.<br>D: No need to use Amazon QuickSight to create the dashboard.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 924823,
          "date": "Sat 16 Dec 2023 06:24",
          "username": "Axeashes",
          "content": "\\\"Using Athena with CloudTrail logs is a powerful way to enhance your analysis of AWS service activity.\\\"<br>https://docs.aws.amazon.com/athena/latest/ug/cloudtrail-logs.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 919940,
          "date": "Sun 10 Dec 2023 12:46",
          "username": "oras2023",
          "content": "Analyse and TROUBLESHOOT, look like Athena<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/athena/latest/ug/cloudtrail-logs.html</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 924266,
          "date": "Fri 15 Dec 2023 17:12",
          "username": "oras2023",
          "content": "https://docs.aws.amazon.com/athena/latest/ug/cloudtrail-logs.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 917448,
          "date": "Thu 07 Dec 2023 20:35",
          "username": "alexandercamachop",
          "content": "It specifies analyze, not query logs.<br>Which is why option D is the best one as it provides dashboards to analyze the logs.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#525",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to add its existing AWS usage cost to its operation cost dashboard. A solutions architect needs to recommend a solution that will give the company access to its usage cost programmatically. The company must be able to access cost data for the current year and forecast costs for the next 12 months.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#525",
          "answers": [
            {
              "choice": "<p>Access usage cost-related data by using the AWS Cost Explorer API with pagination.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Access usage cost-related data by using downloadable AWS Cost Explorer report .csv files.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure AWS Budgets actions to send usage cost data to the company through FTP.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create AWS Budgets reports for usage cost data. Send the data to the company through SMTP.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 525 discussion",
      "discusstion": [
        {
          "id": 996472,
          "date": "Sat 02 Mar 2024 02:41",
          "username": "BrijMohan08",
          "content": "Keyword<br>12 months, API Support<br>https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 917465,
          "date": "Thu 07 Dec 2023 20:52",
          "username": "alexandercamachop",
          "content": "Answer is: A<br>says dashboardCost Explorer, therefor C & D are eliminated.<br>also says programmatically, means non manual intervention therefor API.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1119045,
          "date": "Wed 10 Jul 2024 21:24",
          "username": "awsgeek75",
          "content": "Programmatically + LEAST overheadAPI",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1071151,
          "date": "Wed 15 May 2024 06:54",
          "username": "TariqKipkemei",
          "content": "access to its usage cost programmaticallyAWS Cost Explorer API",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1049507,
          "date": "Sun 21 Apr 2024 15:18",
          "username": "thanhnv142",
          "content": "A: correct<br>1. programaticallyAPI<br>2. In the next 12 monthscost explorer",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 987651,
          "date": "Thu 22 Feb 2024 20:43",
          "username": "Guru4Cloud",
          "content": "Access usage cost-related data by using the AWS Cost Explorer API with pagination<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>don't repeat the answer, it is useless... explain , okay? i have seen your replies many time just to copy the options.. it makes no sense...</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1039038,
          "date": "Wed 10 Apr 2024 02:03",
          "username": "wendaz",
          "content": "don't repeat the answer, it is useless... explain , okay? i have seen your replies many time just to copy the options.. it makes no sense...",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 953324,
          "date": "Tue 16 Jan 2024 15:58",
          "username": "james2033",
          "content": "AWS Cost Explorer API with paginated request: https://docs.aws.amazon.com/cost-management/latest/userguide/ce-api-best-practices.html#ce-api-best-practices-optimize-costs",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 928387,
          "date": "Wed 20 Dec 2023 14:19",
          "username": "MrAWSAssociate",
          "content": "From AWS Documentation*:<br>\\\"You can view your costs and usage using the Cost Explorer user interface free of charge. You can also access your data programmatically using the Cost Explorer API. Each paginated API request incurs a charge of $0.01. You can't disable Cost Explorer after you enable it.\\\"<br>* Source:<br>https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html<br>https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cost-explorer/interfaces/costexplorerpaginationconfiguration.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 916335,
          "date": "Wed 06 Dec 2023 17:07",
          "username": "oras2023",
          "content": "least operational overheadAPI access",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 916334,
          "date": "Wed 06 Dec 2023 17:06",
          "username": "oras2023",
          "content": "least operational overheadAPI access",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#526",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is reviewing the resilience of an application. The solutions architect notices that a database administrator recently failed over the application's Amazon Aurora PostgreSQL database writer instance as part of a scaling exercise. The failover resulted in 3 minutes of downtime for the application.<br><br>Which solution will reduce the downtime for scaling exercises with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#526",
          "answers": [
            {
              "choice": "<p>Create more Aurora PostgreSQL read replicas in the cluster to handle the load during failover.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up a secondary Aurora PostgreSQL cluster in the same AWS Region. During failover, update the application to use the secondary cluster's writer endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon ElastiCache for Memcached cluster to handle the load during failover.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up an Amazon RDS proxy for the database. Update the application to use the proxy endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 526 discussion",
      "discusstion": [
        {
          "id": 917466,
          "date": "Wed 07 Jun 2023 19:53",
          "username": "alexandercamachop",
          "content": "D is the correct answer.<br>It is talking about the write database. Not reader.<br>Amazon RDS proxy allows you to automatically route write request to the healthy writer, minimizing downtime.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>One of the benefits of Amazon RDS Proxy is that it can improve application recovery time after database failovers. While RDS Proxy supports both MySQL as well as PostgreSQL engines, in this post, we will use a MySQL test workload to demonstrate how RDS Proxy reduces client recovery time after failover by up to 79% for Amazon Aurora MySQL and by up to 32% for Amazon RDS for MySQL.<br>https://aws.amazon.com/blogs/database/improving-application-availability-with-amazon-rds-proxy/<br>https://aws.amazon.com/rds/proxy/faqs/</li></ul>",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 966271,
          "date": "Sat 29 Jul 2023 11:19",
          "username": "nilandd44gg",
          "content": "One of the benefits of Amazon RDS Proxy is that it can improve application recovery time after database failovers. While RDS Proxy supports both MySQL as well as PostgreSQL engines, in this post, we will use a MySQL test workload to demonstrate how RDS Proxy reduces client recovery time after failover by up to 79% for Amazon Aurora MySQL and by up to 32% for Amazon RDS for MySQL.<br>https://aws.amazon.com/blogs/database/improving-application-availability-with-amazon-rds-proxy/<br>https://aws.amazon.com/rds/proxy/faqs/",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1232459,
          "date": "Tue 18 Jun 2024 15:53",
          "username": "ugaga",
          "content": "AWS EXAM is also an AWS promotion...<br>RDS Proxy really does not reduce recovery time if you don't have alternative RDS instance. You will see if you understand what proxy is. But this is exam ( promotion) of AWS, D could be an answer, because some AWS document says so.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1111169,
          "date": "Mon 01 Jan 2024 13:52",
          "username": "pentium75",
          "content": "\\\"RDS Proxy reduces client recovery time after failover by up to 79% for Amazon Aurora MySQL \\\" https://aws.amazon.com/de/blogs/database/improving-application-availability-with-amazon-rds-proxy/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1101658,
          "date": "Wed 20 Dec 2023 15:58",
          "username": "ftaws",
          "content": "RDS Proxy is used for DB timeout not downtime.<br>How to reduce downtime with RDS Proxy?<br>There is no change downtime if we use RDS Proxy.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"How to reduce downtime with RDS Proxy\\\", by eliminating the need for the application to retrieve the new DNS record after the old one times out.</li><li>I would never have thought about DNS records in this question. Nice catch!</li><li>\\\"RDS Proxy reduces client recovery time after failover by up to 79% for Amazon Aurora MySQL \\\" https://aws.amazon.com/de/blogs/database/improving-application-availability-with-amazon-rds-proxy/</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1111165,
          "date": "Mon 01 Jan 2024 13:50",
          "username": "pentium75",
          "content": "\\\"How to reduce downtime with RDS Proxy\\\", by eliminating the need for the application to retrieve the new DNS record after the old one times out.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I would never have thought about DNS records in this question. Nice catch!</li><li>\\\"RDS Proxy reduces client recovery time after failover by up to 79% for Amazon Aurora MySQL \\\" https://aws.amazon.com/de/blogs/database/improving-application-availability-with-amazon-rds-proxy/</li></ul>",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1283851,
          "date": "Sun 15 Sep 2024 04:12",
          "username": "MatAlves",
          "content": "I would never have thought about DNS records in this question. Nice catch!",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1111172,
          "date": "Mon 01 Jan 2024 14:07",
          "username": "pentium75",
          "content": "\\\"RDS Proxy reduces client recovery time after failover by up to 79% for Amazon Aurora MySQL \\\" https://aws.amazon.com/de/blogs/database/improving-application-availability-with-amazon-rds-proxy/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1100758,
          "date": "Tue 19 Dec 2023 16:31",
          "username": "Cyberkayu",
          "content": "they are using Aurora, RDS proxy dont work here<br>Answer B<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Wrong: https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.html</li><li>\\\"RDS Proxy reduces client recovery time after failover by up to 79% for Amazon Aurora MySQL \\\" https://aws.amazon.com/de/blogs/database/improving-application-availability-with-amazon-rds-proxy/</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1111161,
          "date": "Mon 01 Jan 2024 13:45",
          "username": "pentium75",
          "content": "Wrong: https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1111168,
          "date": "Mon 01 Jan 2024 13:52",
          "username": "pentium75",
          "content": "\\\"RDS Proxy reduces client recovery time after failover by up to 79% for Amazon Aurora MySQL \\\" https://aws.amazon.com/de/blogs/database/improving-application-availability-with-amazon-rds-proxy/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 987649,
          "date": "Tue 22 Aug 2023 19:40",
          "username": "Guru4Cloud",
          "content": "D. Set up an Amazon RDS proxy for the database. Update the application to use the proxy endpoint.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 984881,
          "date": "Sat 19 Aug 2023 03:51",
          "username": "hachiri",
          "content": "point is Aurora Multi-Master<br>Set up a secondary Aurora PostgreSQL cluster in the *same* AWS Region<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I mean correct is B</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 984882,
          "date": "Sat 19 Aug 2023 03:52",
          "username": "hachiri",
          "content": "I mean correct is B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 961136,
          "date": "Mon 24 Jul 2023 07:16",
          "username": "TariqKipkemei",
          "content": "Availability is the main requirement here. Even if RDS proxy is used, it will still find the writer instance unavailable during the scaling exercise.<br>Best option is to create an Amazon ElastiCache for Memcached cluster to handle the load during the scaling operation.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"RDS Proxy reduces client recovery time after failover by up to 79% for Amazon Aurora MySQL \\\" https://aws.amazon.com/de/blogs/database/improving-application-availability-with-amazon-rds-proxy/</li><li>that will only account for the read operation part of it, we are concerned with the write operations here</li><li>Failover is faster with RDS proxy</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1111167,
          "date": "Mon 01 Jan 2024 13:52",
          "username": "pentium75",
          "content": "\\\"RDS Proxy reduces client recovery time after failover by up to 79% for Amazon Aurora MySQL \\\" https://aws.amazon.com/de/blogs/database/improving-application-availability-with-amazon-rds-proxy/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1204506,
          "date": "Tue 30 Apr 2024 12:56",
          "username": "wizcloudifa",
          "content": "that will only account for the read operation part of it, we are concerned with the write operations here",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1111166,
          "date": "Mon 01 Jan 2024 13:51",
          "username": "pentium75",
          "content": "Failover is faster with RDS proxy",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 916002,
          "date": "Tue 06 Jun 2023 09:15",
          "username": "AshishRocks",
          "content": "Set up an Amazon RDS proxy for the database. Update the application to use the proxy endpoint.<br>D is the answer",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#527",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a regional subscription-based streaming service that runs in a single AWS Region. The architecture consists of web servers and application servers on Amazon EC2 instances. The EC2 instances are in Auto Scaling groups behind Elastic Load Balancers. The architecture includes an Amazon Aurora global database cluster that extends across multiple Availability Zones.<br><br>The company wants to expand globally and to ensure that its application has minimal downtime.<br><br>Which solution will provide the MOST fault tolerance?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#527",
          "answers": [
            {
              "choice": "<p>Extend the Auto Scaling groups for the web tier and the application tier to deploy instances in Availability Zones in a second Region. Use an Aurora global database to deploy the database in the primary Region and the second Region. Use Amazon Route 53 health checks with a failover routing policy to the second Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the web tier and the application tier to a second Region. Add an Aurora PostgreSQL cross-Region Aurora Replica in the second Region. Use Amazon Route 53 health checks with a failover routing policy to the second Region. Promote the secondary to primary as needed.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the web tier and the application tier to a second Region. Create an Aurora PostgreSQL database in the second Region. Use AWS Database Migration Service (AWS DMS) to replicate the primary database to the second Region. Use Amazon Route 53 health checks with a failover routing policy to the second Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the web tier and the application tier to a second Region. Use an Amazon Aurora global database to deploy the database in the primary Region and the second Region. Use Amazon Route 53 health checks with a failover routing policy to the second Region. Promote the secondary to primary as needed.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 527 discussion",
      "discusstion": [
        {
          "id": 961147,
          "date": "Mon 24 Jul 2023 07:26",
          "username": "TariqKipkemei",
          "content": "Auto Scaling groups can span Availability Zones, but not AWS regions.<br>Hence the best option is to deploy the web tier and the application tier to a second Region. Use an Amazon Aurora global database to deploy the database in the primary Region and the second Region. Use Amazon Route 53 health checks with a failover routing policy to the second Region. Promote the secondary to primary as needed.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1119052,
          "date": "Wed 10 Jan 2024 22:32",
          "username": "awsgeek75",
          "content": "A: Not possible for autoscaling across regions<br>BC: Using PostgreSQL, not sure why?<br>D: MOST fault tolerant ! MOST scalable. This gives least downtime.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1063464,
          "date": "Mon 06 Nov 2023 03:14",
          "username": "potomac",
          "content": "EC2 Auto Scaling groups are regional constructs. They can span Availability Zones, but not AWS regions",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1049523,
          "date": "Sat 21 Oct 2023 15:36",
          "username": "thanhnv142",
          "content": "527:<br>D is correct:<br>- B & C is not correct because it mentions Aurora PostgreSQL which is not mentioned in the question<br>- A is not correct because Auto scaling group can not span regions<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Simple as that.</li></ul>",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1056839,
          "date": "Sun 29 Oct 2023 14:28",
          "username": "wsdasdasdqwdaw",
          "content": "Simple as that.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 987639,
          "date": "Tue 22 Aug 2023 19:25",
          "username": "Guru4Cloud",
          "content": "Using an Aurora global database that spans both the primary and secondary regions provides automatic replication and failover capabilities for the database tier.<br>Deploying the web and application tiers to a second region provides fault tolerance for those components.<br>Using Route53 health checks and failover routing will route traffic to the secondary region if the primary region becomes unavailable.<br>This provides fault tolerance across all tiers of the architecture while minimizing downtime. Promoting the secondary database to primary ensures the second region can continue operating if needed.<br>A is close, but doesn't provide an automatic database failover capability.<br>B and C provide database replication, but not automatic failover.<br>So D is the most comprehensive and fault tolerant architecture.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>PostgreSQL in options b &amp; C could be a distractor.... PostgreSQL not mentioned in stem</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1316568,
          "date": "Sat 23 Nov 2024 06:19",
          "username": "JA2018",
          "content": "PostgreSQL in options b & C could be a distractor.... PostgreSQL not mentioned in stem",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 946796,
          "date": "Sun 09 Jul 2023 02:13",
          "username": "Zox42",
          "content": "Answer D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 936769,
          "date": "Wed 28 Jun 2023 16:28",
          "username": "Zuit",
          "content": "D seems fitting: Global Databbase and deploying it in the new region",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 928414,
          "date": "Tue 20 Jun 2023 13:43",
          "username": "MrAWSAssociate",
          "content": "B is correct!<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Replicated db doesnt mean they will act as a single db once the transfer is completed. Global db is the correct approach</li><li>PostgreSQL in options b &amp; C could be a distractor.... PostgreSQL not mentioned in stem</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 935899,
          "date": "Wed 28 Jun 2023 01:19",
          "username": "manuh",
          "content": "Replicated db doesnt mean they will act as a single db once the transfer is completed. Global db is the correct approach<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>PostgreSQL in options b &amp; C could be a distractor.... PostgreSQL not mentioned in stem</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1316569,
          "date": "Sat 23 Nov 2024 06:19",
          "username": "JA2018",
          "content": "PostgreSQL in options b & C could be a distractor.... PostgreSQL not mentioned in stem",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 921672,
          "date": "Mon 12 Jun 2023 21:05",
          "username": "r3mo",
          "content": "\\\"D\\\" is the answer: because Aws Aurora Global Database allows you to read and write from any region in the global cluster. This enables you to distribute read and write workloads globally, improving performance and reducing latency. Data is replicated synchronously across regions, ensuring strong consistency.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 920643,
          "date": "Sun 11 Jun 2023 14:09",
          "username": "Henrytml",
          "content": "A is the only answer remain using ELB, both Web/App/DB has been taking care with replicating in 2nd region, lastly route 53 for failover over multiple regions<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>i will revoke my answer to standby web in 2nd region, instead of trigger to scale out</li><li>also Asg cant span beyond a region</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 925162,
          "date": "Fri 16 Jun 2023 14:41",
          "username": "Henrytml",
          "content": "i will revoke my answer to standby web in 2nd region, instead of trigger to scale out",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 935898,
          "date": "Wed 28 Jun 2023 01:18",
          "username": "manuh",
          "content": "also Asg cant span beyond a region",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 917473,
          "date": "Wed 07 Jun 2023 19:57",
          "username": "alexandercamachop",
          "content": "B&C are discarted.<br>The answer is between A and D.<br>I would go with D because it explicitley created this web / app tier in second region, instead A just autoscales into a secondary region, rather then always having resources in this second region.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>as mentioned ASG cannot span across different AWS regions</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1316570,
          "date": "Sat 23 Nov 2024 06:20",
          "username": "JA2018",
          "content": "as mentioned ASG cannot span across different AWS regions",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#528",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A data analytics company wants to migrate its batch processing system to AWS. The company receives thousands of small data files periodically during the day through FTP. An on-premises batch job processes the data files overnight. However, the batch job takes hours to finish running.<br><br>The company wants the AWS solution to process incoming data files as soon as possible with minimal changes to the FTP clients that send the files. The solution must delete the incoming data files after the files have been processed successfully. Processing for each file needs to take 3-8 minutes.<br><br>Which solution will meet these requirements in the MOST operationally efficient way?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#528",
          "answers": [
            {
              "choice": "<p>Use an Amazon EC2 instance that runs an FTP server to store incoming files as objects in Amazon S3 Glacier Flexible Retrieval. Configure a job queue in AWS Batch. Use Amazon EventBridge rules to invoke the job to process the objects nightly from S3 Glacier Flexible Retrieval. Delete the objects after the job has processed the objects.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Amazon EC2 instance that runs an FTP server to store incoming files on an Amazon Elastic Block Store (Amazon EBS) volume. Configure a job queue in AWS Batch. Use Amazon EventBridge rules to invoke the job to process the files nightly from the EBS volume. Delete the files after the job has processed the files.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Transfer Family to create an FTP server to store incoming files on an Amazon Elastic Block Store (Amazon EBS) volume. Configure a job queue in AWS Batch. Use an Amazon S3 event notification when each file arrives to invoke the job in AWS Batch. Delete the files after the job has processed the files.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Transfer Family to create an FTP server to store incoming files in Amazon S3 Standard. Create an AWS Lambda function to process the files and to delete the files after they are processed. Use an S3 event notification to invoke the Lambda function when the files arrive.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 528 discussion",
      "discusstion": [
        {
          "id": 1111178,
          "date": "Mon 01 Jul 2024 13:13",
          "username": "pentium75",
          "content": "Obviously we choose AWS Transfer Family over hosting the FTP server ourselves on an EC2 instance. And \\\"process incoming data files as soon as possible\\\" -> trigger Lambda when files arrive. Lambda functions can run up to 15 minutes, it takes \\\"3-8 minutes\\\" per file -> works.<br><br>AWS Batch just schedules jobs, but these still need to run somewhere (Lambda, Fargate, EC2).<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>well if you opt for unmanaged compute option in AWS Batch in that case you dont have to worry about the compute, AWS batch automatically provisions it for you</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1204533,
          "date": "Wed 30 Oct 2024 14:20",
          "username": "wizcloudifa",
          "content": "well if you opt for unmanaged compute option in AWS Batch in that case you dont have to worry about the compute, AWS batch automatically provisions it for you",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1056843,
          "date": "Mon 29 Apr 2024 13:32",
          "username": "wsdasdasdqwdaw",
          "content": "FTP > AWS Transfer Family, > C or D, but in C is used EBS not S3 which needs EC2 and in general is more complex > very clear D.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 987627,
          "date": "Thu 22 Feb 2024 19:59",
          "username": "Guru4Cloud",
          "content": "The key points:<br><br>Use AWS Transfer Family for the FTP server to receive files directly into S3. This avoids managing FTP servers.<br>Process each file as soon as it arrives using Lambda triggered by S3 events. Lambda provides fast processing time per file.<br>Lambda can also delete files after processing succeeds.<br>Options A, B, C involve more operational overhead of managing FTP servers and batch jobs. Processing latency would be higher waiting for batch windows.<br>Storing files in Glacier (Option A) adds latency for retrieving files.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 963648,
          "date": "Fri 26 Jan 2024 14:22",
          "username": "hsinchang",
          "content": "Processing for each file needs to take 3-8 minutes clearly indicates Lambda functions.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 961158,
          "date": "Wed 24 Jan 2024 08:40",
          "username": "TariqKipkemei",
          "content": "Process incoming data files with minimal changes to the FTP clients that send the filesAWS Transfer Family.<br>Process incoming data files as soon as possibleS3 event notification.<br>Processing for each file needs to take 3-8 minutesAWS Lambda function.<br>Delete file after processingAWS Lambda function.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 930519,
          "date": "Fri 22 Dec 2023 15:47",
          "username": "antropaws",
          "content": "Most likely D.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 921674,
          "date": "Tue 12 Dec 2023 22:10",
          "username": "r3mo",
          "content": "\\\"D\\\" Since each file takes 3-8 minutes to process the lambda function can process the data file whitout a problem.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 921340,
          "date": "Tue 12 Dec 2023 13:31",
          "username": "maver144",
          "content": "You cannot setup AWS Transfer Family to save files into EBS.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://aws.amazon.com/aws-transfer-family/</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 923328,
          "date": "Thu 14 Dec 2023 18:17",
          "username": "oras2023",
          "content": "https://aws.amazon.com/aws-transfer-family/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 921285,
          "date": "Tue 12 Dec 2023 12:23",
          "username": "secdgs",
          "content": "D. Because<br>1. process immediate when file transfer to S3 not wait for process several file in one time.<br>2. takes 3-8 can use Lamda.<br><br>C. Wrong because AWS Batch is use for run large-scale or large amount of data in one time.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 918374,
          "date": "Fri 08 Dec 2023 17:54",
          "username": "Aymanovitchy",
          "content": "To meet the requirements of processing incoming data files as soon as possible with minimal changes to the FTP clients, and deleting the files after successful processing, the most operationally efficient solution would be:<br><br>D. Use AWS Transfer Family to create an FTP server to store incoming files in Amazon S3 Standard. Create an AWS Lambda function to process the files and delete them after processing. Use an S3 event notification to invoke the Lambda function when the files arrive.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 918023,
          "date": "Fri 08 Dec 2023 11:40",
          "username": "bajwa360",
          "content": "It should be D as lambda is more operationally viable solution given the fact each processing takes 3-8 minutes that lambda can handle",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 917477,
          "date": "Thu 07 Dec 2023 20:58",
          "username": "alexandercamachop",
          "content": "Answer has to be between C or D.<br>Because Transfer Family is obvious do to FTP.<br>Now i would go with C because it uses AWS Batch, which makes more sense for Batch processing rather then AWS Lambda.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Also Batch just triggers jobs, they still need to run somewhere (like in Lambda).</li><li>Why? \\\"Process incoming data files as soon as possible\\\", by triggering the Lambda function when files arrive. Batch is for scheduled jobs.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1111179,
          "date": "Mon 01 Jul 2024 13:13",
          "username": "pentium75",
          "content": "Also Batch just triggers jobs, they still need to run somewhere (like in Lambda).",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1111177,
          "date": "Mon 01 Jul 2024 13:12",
          "username": "pentium75",
          "content": "Why? \\\"Process incoming data files as soon as possible\\\", by triggering the Lambda function when files arrive. Batch is for scheduled jobs.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 916644,
          "date": "Wed 06 Dec 2023 23:59",
          "username": "Bill1000",
          "content": "I am between C and D. My reason is:<br><br>\\\"The company wants the AWS solution to process incoming data files <b>as soon as possible</b> with minimal changes to the FTP clients that send the files.\\\"",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#529",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating its workloads to AWS. The company has transactional and sensitive data in its databases. The company wants to use AWS Cloud solutions to increase security and reduce operational overhead for the databases.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#529",
          "answers": [
            {
              "choice": "<p>Migrate the databases to Amazon EC2. Use an AWS Key Management Service (AWS KMS) AWS managed key for encryption.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the databases to Amazon RDS Configure encryption at rest.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the data to Amazon S3 Use Amazon Macie for data security and protection<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the database to Amazon RDS. Use Amazon CloudWatch Logs for data security and protection.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 529 discussion",
      "discusstion": [
        {
          "id": 916007,
          "date": "Tue 06 Jun 2023 09:26",
          "username": "AshishRocks",
          "content": "B is the answer<br>Why not C - Option C suggests migrating the data to Amazon S3 and using Amazon Macie for data security and protection. While Amazon Macie provides advanced security features for data in S3, it may not be directly applicable or optimized for databases, especially for transactional and sensitive data. Amazon RDS provides a more suitable environment for managing databases.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 916276,
          "date": "Tue 06 Jun 2023 15:14",
          "username": "oras2023",
          "content": "B. Migrate the databases to Amazon RDS Configure encryption at rest.<br>Looks like best option",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1313050,
          "date": "Sat 16 Nov 2024 12:51",
          "username": "venomblade",
          "content": "S3 and Macie works too. However, the question mentioned about transactional data. RDS is much better for running transactional workloads. Thus, RDS is the correct answer here.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1119054,
          "date": "Wed 10 Jan 2024 22:37",
          "username": "awsgeek75",
          "content": "A: Operational overhead of EC2 and whatever DB is running on it<br>C: Macie is not for data security, it's for identifying PII and sensitive data<br>D: CloudWatch is for cloud events and does not secure databases<br>B: RDS is managed so least operational overhead. Encryption at rest means security",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 987620,
          "date": "Tue 22 Aug 2023 18:46",
          "username": "Guru4Cloud",
          "content": "Migrate the databases to Amazon RDS Configure encryption at rest.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>down voted.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1039042,
          "date": "Tue 10 Oct 2023 02:09",
          "username": "wendaz",
          "content": "down voted.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 961159,
          "date": "Mon 24 Jul 2023 07:43",
          "username": "TariqKipkemei",
          "content": "Reduce OpsMigrate the databases to Amazon RDS Configure encryption at rest",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 917480,
          "date": "Wed 07 Jun 2023 19:59",
          "username": "alexandercamachop",
          "content": "B for sure.<br>First the correct is Amazon RDS, then encryption at rest makes the database secure.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#530",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an online gaming application that has TCP and UDP multiplayer gaming capabilities. The company uses Amazon Route 53 to point the application traffic to multiple Network Load Balancers (NLBs) in different AWS Regions. The company needs to improve application performance and decrease latency for the online game in preparation for user growth.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#530",
          "answers": [
            {
              "choice": "<p>Add an Amazon CloudFront distribution in front of the NLBs. Increase the Cache-Control max-age parameter.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Replace the NLBs with Application Load Balancers (ALBs). Configure Route 53 to use latency-based routing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add AWS Global Accelerator in front of the NLBs. Configure a Global Accelerator endpoint to use the correct listener ports.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Add an Amazon API Gateway endpoint behind the NLBs. Enable API caching. Override method caching for the different stages.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 530 discussion",
      "discusstion": [
        {
          "id": 987604,
          "date": "Thu 22 Feb 2024 19:26",
          "username": "Guru4Cloud",
          "content": "The key considerations are:<br><br>The application uses TCP and UDP for multiplayer gaming, so Network Load Balancers (NLBs) are appropriate.<br>AWS Global Accelerator can be added in front of the NLBs to improve performance and reduce latency by intelligently routing traffic across AWS Regions and Availability Zones.<br>Global Accelerator provides static anycast IP addresses that act as a fixed entry point to application endpoints in the optimal AWS location. This improves availability and reduces latency.<br>The Global Accelerator endpoint can be configured with the correct NLB listener ports for TCP and UDP.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 961164,
          "date": "Wed 24 Jan 2024 08:46",
          "username": "TariqKipkemei",
          "content": "TCP ,UDP, Gamingglobal accelerator and Network Load Balancer",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1119058,
          "date": "Wed 10 Jul 2024 21:42",
          "username": "awsgeek75",
          "content": "A: CloudFront is for caching. Not required<br>B: ALB is for HTTP layer, won't help with TCP UDP issues<br>D: API Gateway, API Caching total rubbish, ignore this option<br>C: Is correct as Global Accelerator uses unicast for reducing latency globbally.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 925172,
          "date": "Sat 16 Dec 2023 15:48",
          "username": "Henrytml",
          "content": "only b and c handle TCP/UDP, and C comes with accelerator to enhance performance<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Does alb handle udp? Can u share a source?</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 935902,
          "date": "Thu 28 Dec 2023 02:26",
          "username": "manuh",
          "content": "Does alb handle udp? Can u share a source?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 917482,
          "date": "Thu 07 Dec 2023 21:00",
          "username": "alexandercamachop",
          "content": "UDP and TCP is AWS Global accelarator as it works in the Transportation layer.<br>Now this with NLB is perfect.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 916278,
          "date": "Wed 06 Dec 2023 16:16",
          "username": "oras2023",
          "content": "C is helping to reduce latency for end clients",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#531",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to integrate with a third-party data feed. The data feed sends a webhook to notify an external service when new data is ready for consumption. A developer wrote an AWS Lambda function to retrieve data when the company receives a webhook callback. The developer must make the Lambda function available for the third party to call.<br><br>Which solution will meet these requirements with the MOST operational efficiency?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#531",
          "answers": [
            {
              "choice": "<p>Create a function URL for the Lambda function. Provide the Lambda function URL to the third party for the webhook.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an Application Load Balancer (ALB) in front of the Lambda function. Provide the ALB URL to the third party for the webhook.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Simple Notification Service (Amazon SNS) topic. Attach the topic to the Lambda function. Provide the public hostname of the SNS topic to the third party for the webhook.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Simple Queue Service (Amazon SQS) queue. Attach the queue to the Lambda function. Provide the public hostname of the SQS queue to the third party for the webhook.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 531 discussion",
      "discusstion": [
        {
          "id": 961175,
          "date": "Mon 24 Jul 2023 07:52",
          "username": "TariqKipkemei",
          "content": "A function URL is a dedicated HTTP(S) endpoint for your Lambda function. When you create a function URL, Lambda automatically generates a unique URL endpoint for you.",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 955321,
          "date": "Tue 18 Jul 2023 13:32",
          "username": "james2033",
          "content": "Keyword \\\"Lambda function\\\" and \\\"webhook\\\". See https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-saas-furls.html#create-stripe-cfn-stack",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1239264,
          "date": "Sat 29 Jun 2024 14:38",
          "username": "emakid",
          "content": "AWS Lambda can provide a URL to call using Function URLs. This is a relatively new feature in AWS Lambda that allows you to create HTTPS endpoints for your Lambda functions, making it easy to invoke the function directly over the web.<br>Key Features of Lambda Function URLs:<br><br>Direct Access: Provides a simple and direct way to call a Lambda function via an HTTP(S) request.<br>Easy Configuration: You can create a function URL for a Lambda function using the AWS Management Console, AWS CLI, or AWS SDKs.<br>Managed Service: AWS manages the infrastructure for you, handling scaling, patching, and maintenance.<br>Security: You can configure authentication and authorization using AWS IAM or AWS Lambda function URL settings.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1119060,
          "date": "Wed 10 Jan 2024 22:44",
          "username": "awsgeek75",
          "content": "Apart from simplest and most operational, I think A is the only option that will work!<br>BCD cannot even be implemented in real world imho. Happy to be corrected",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1077475,
          "date": "Wed 22 Nov 2023 16:13",
          "username": "Orit",
          "content": "B is the answerThe best solution to make the Lambda function available for the third party to call with the MOST operational efficiency is to deploy an Application Load Balancer (ALB) in front of the Lambda function and provide the ALB URL to the third party for the webhook. This solution is the most efficient because it allows the third party to call the Lambda function without having to worry about managing the Lambda function's availability or scaling. The ALB will automatically distribute traffic across multiple Lambda functions, if necessary, and will also provide redundancy in case of a failure.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I believe you are correct. Lambda functions as targets - implementing ALBs<br>https://docs.aws.amazon.com/elasticloadbalancing/latest/application/lambda-functions.html</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1190596,
          "date": "Sat 06 Apr 2024 21:42",
          "username": "hro",
          "content": "I believe you are correct. Lambda functions as targets - implementing ALBs<br>https://docs.aws.amazon.com/elasticloadbalancing/latest/application/lambda-functions.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 987596,
          "date": "Tue 22 Aug 2023 18:07",
          "username": "Guru4Cloud",
          "content": "The key points:<br><br>A Lambda function needs to be invoked by a third party via a webhook.<br>Using a function URL provides a direct invoke endpoint for the Lambda function. This is simple and efficient.<br>Options B, C, and D insert unnecessary components like ALB, SNS, SQS between the webhook and the Lambda function. These add complexity without benefit.<br>A function URL can be generated and provided to the third party quickly without additional infrastructure.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 926411,
          "date": "Sun 18 Jun 2023 06:02",
          "username": "Abrar2022",
          "content": "key word: Lambda function URLs",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 921348,
          "date": "Mon 12 Jun 2023 12:44",
          "username": "maver144",
          "content": "https://docs.aws.amazon.com/lambda/latest/dg/lambda-urls.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 920815,
          "date": "Sun 11 Jun 2023 17:36",
          "username": "jkhan2405",
          "content": "It's A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 917487,
          "date": "Wed 07 Jun 2023 20:03",
          "username": "alexandercamachop",
          "content": "A would seem like the correct one but not sure.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#532",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a workload in an AWS Region. Customers connect to and access the workload by using an Amazon API Gateway REST API. The company uses Amazon Route 53 as its DNS provider. The company wants to provide individual and secure URLs for all customers.<br><br>Which combination of steps will meet these requirements with the MOST operational efficiency? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ADF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#532",
          "answers": [
            {
              "choice": "<p>Register the required domain in a registrar. Create a wildcard custom domain name in a Route 53 hosted zone and record in the zone that points to the API Gateway endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Request a wildcard certificate that matches the domains in AWS Certificate Manager (ACM) in a different Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create hosted zones for each customer as required in Route 53. Create zone records that point to the API Gateway endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Request a wildcard certificate that matches the custom domain name in AWS Certificate Manager (ACM) in the same Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create multiple API endpoints for each customer in API Gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a custom domain name in API Gateway for the REST API. Import the certificate from AWS Certificate Manager (ACM).<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 532 discussion",
      "discusstion": [
        {
          "id": 924080,
          "date": "Thu 15 Jun 2023 12:22",
          "username": "AshishRocks",
          "content": "Step A involves registering the required domain in a registrar and creating a wildcard custom domain name in a Route 53 hosted zone. This allows you to map individual and secure URLs for all customers to your API Gateway endpoints.<br><br>Step D is to request a wildcard certificate from AWS Certificate Manager (ACM) that matches the custom domain name you created in Step A. This wildcard certificate will cover all subdomains and ensure secure HTTPS communication.<br><br>Step F is to create a custom domain name in API Gateway for your REST API. This allows you to associate the custom domain name with your API Gateway endpoints and import the certificate from ACM for secure communication.",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 987590,
          "date": "Tue 22 Aug 2023 18:03",
          "username": "Guru4Cloud",
          "content": "The key points:<br><br>Using a wildcard domain and certificate avoids managing individual domains/certs per customer. This is more efficient.<br>The domain, hosted zone, and certificate should all be in the same region as the API Gateway REST API for simplicity.<br>Creating multiple API endpoints per customer (Option E) adds complexity and is not required.<br>Option B and C add unnecessary complexity by separating domains, certificates, and hosted zones.",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 1126955,
          "date": "Fri 19 Jan 2024 21:30",
          "username": "awsgeek75",
          "content": "ADF looks right but not sure why C is wrong:<br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-api-gateway.html#routing-to-api-gateway-config<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>My guess on why C is not ideal: Creating individual hosted zones for each customer is too much. It definitely increases operational overhead, while using a wildcard domain eliminates this need (which is more ideal).</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1323107,
          "date": "Sat 07 Dec 2024 14:09",
          "username": "LeonSauveterre",
          "content": "My guess on why C is not ideal: Creating individual hosted zones for each customer is too much. It definitely increases operational overhead, while using a wildcard domain eliminates this need (which is more ideal).",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 966377,
          "date": "Sat 29 Jul 2023 13:54",
          "username": "ukivanlamlpi",
          "content": "https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html<br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/AboutHZWorkingWith.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 946482,
          "date": "Sat 08 Jul 2023 14:56",
          "username": "jaydesai8",
          "content": "ADF - makes sense",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 920816,
          "date": "Sun 11 Jun 2023 17:38",
          "username": "jkhan2405",
          "content": "It's ADF",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 919245,
          "date": "Fri 09 Jun 2023 13:40",
          "username": "MAMADOUG",
          "content": "For me AFD",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 917500,
          "date": "Wed 07 Jun 2023 20:13",
          "username": "alexandercamachop",
          "content": "ADF - One to create the custom domain in Route 53 (Amazon DNS)<br>Second to request wildcard certificate from ADM<br>Thirds to import the certificate from ACM.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 916962,
          "date": "Wed 07 Jun 2023 08:57",
          "username": "AncaZalog",
          "content": "is ADF",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#533",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company stores data in Amazon S3. According to regulations, the data must not contain personally identifiable information (PII). The company recently discovered that S3 buckets have some objects that contain PII. The company needs to automatically detect PII in S3 buckets and to notify the company's security team.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#533",
          "answers": [
            {
              "choice": "<p>Use Amazon Macie. Create an Amazon EventBridge rule to filter the SensitiveData event type from Macie findings and to send an Amazon Simple Notification Service (Amazon SNS) notification to the security team.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon GuardDuty. Create an Amazon EventBridge rule to filter the CRITICAL event type from GuardDuty findings and to send an Amazon Simple Notification Service (Amazon SNS) notification to the security team.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Macie. Create an Amazon EventBridge rule to filter the SensitiveData:S3Object/Personal event type from Macie findings and to send an Amazon Simple Queue Service (Amazon SQS) notification to the security team.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon GuardDuty. Create an Amazon EventBridge rule to filter the CRITICAL event type from GuardDuty findings and to send an Amazon Simple Queue Service (Amazon SQS) notification to the security team.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 533 discussion",
      "discusstion": [
        {
          "id": 917502,
          "date": "Wed 07 Jun 2023 20:15",
          "username": "alexandercamachop",
          "content": "B and D are discarted as Macie is to identify PII.<br>Now that we have between A and C.<br>SNS is more suitable for this option as a pub/sub service, we subscribe the security team and then they will receive the notifications.",
          "upvote_count": "15",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1323108,
          "date": "Sat 07 Dec 2024 14:12",
          "username": "LeonSauveterre",
          "content": "Macie + SNSIdentify PII + Notification",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1119079,
          "date": "Wed 10 Jan 2024 22:56",
          "username": "awsgeek75",
          "content": "BD: Wrong products<br>AC: Uses Macie which is the right product but C uses SQS to notify security team which is an incomplete solution (what's listening to SQS?)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1111194,
          "date": "Mon 01 Jan 2024 14:31",
          "username": "pentium75",
          "content": "Detect PII -> Macie, A or C<br>Notify security team -> SNS, A or B",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1063892,
          "date": "Mon 06 Nov 2023 14:54",
          "username": "potomac",
          "content": "C is SQS, not SNS",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 994379,
          "date": "Wed 30 Aug 2023 20:00",
          "username": "Wayne23Fang",
          "content": "SQS mentioned in C.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 976715,
          "date": "Wed 09 Aug 2023 15:54",
          "username": "Ale1973",
          "content": "Amazon SQS is typically used for decoupling and managing messages between distributed application components. It's not typically used for sending notifications directly to humans. On my opinion C isn't a best practice",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 966854,
          "date": "Sun 30 Jul 2023 06:37",
          "username": "Kp88",
          "content": "Those who say C , please read carefully (I made the same mistake lol). Teams can't be notified with SQS hence A.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 966355,
          "date": "Sat 29 Jul 2023 13:13",
          "username": "ukivanlamlpi",
          "content": "there are different type of sensitive data: https://docs.aws.amazon.com/macie/latest/user/findings-types.html.if the question only focus on PII, then C is the answer.however, in reality, you will use A, because you will not want bank card, credential...etc all sensitive data , not only PII",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 962311,
          "date": "Tue 25 Jul 2023 05:54",
          "username": "TariqKipkemei",
          "content": "Automatically detect PII in S3 bucketsAmazon Macie<br>Notify security teamAmazon SNS<br>Trigger notification based on SensitiveData event type from Macie findingsEventBridge",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 946794,
          "date": "Sun 09 Jul 2023 01:58",
          "username": "NASHDBA",
          "content": "There are different types of Sensitive Data. Here we are only referring to PII. Hence SensitiveData:S3Object/Personal. to use SNS, the security team must subscribe. SQS sends the information as designed",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 946676,
          "date": "Sat 08 Jul 2023 20:22",
          "username": "narddrer",
          "content": "SensitiveData:S3Object/Personal",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 946483,
          "date": "Sat 08 Jul 2023 14:57",
          "username": "jaydesai8",
          "content": "SensitiveMACIE, and SNS to sent notification to the Security Team",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 946359,
          "date": "Sat 08 Jul 2023 11:44",
          "username": "Iragmt",
          "content": "C. Because the question mentioned PII only, there are other Sensitive Data aside from PII.<br>reference: https://docs.aws.amazon.com/macie/latest/user/findings-publish-event-schemas.html look for Event example for a sensitive data finding<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But Amazon SQS is typically used for decoupling and managing messages between distributed application components. It's not typically used for sending notifications directly to humans!</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 976714,
          "date": "Wed 09 Aug 2023 15:53",
          "username": "Ale1973",
          "content": "But Amazon SQS is typically used for decoupling and managing messages between distributed application components. It's not typically used for sending notifications directly to humans!",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 928494,
          "date": "Tue 20 Jun 2023 16:10",
          "username": "kapit",
          "content": "AAAAAAA",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 922950,
          "date": "Wed 14 Jun 2023 11:54",
          "username": "jack79",
          "content": "C https://docs.aws.amazon.com/macie/latest/user/findings-types.html<br>and notice the ensitiveData:S3Object/Personal<br>The object contains personally identifiable information (such as mailing addresses or driver's license identification numbers), personal health information (such as health insurance or medical identification numbers), or a combination of the two.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But Amazon SQS is typically used for decoupling and managing messages between distributed application components. It's not typically used for sending notifications directly to humans!</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 976713,
          "date": "Wed 09 Aug 2023 15:53",
          "username": "Ale1973",
          "content": "But Amazon SQS is typically used for decoupling and managing messages between distributed application components. It's not typically used for sending notifications directly to humans!",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 919249,
          "date": "Fri 09 Jun 2023 13:43",
          "username": "MAMADOUG",
          "content": "I vote for A, SensitiveMACIE, and SNS to prevent Security Team",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#534",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to build a logging solution for its multiple AWS accounts. The company currently stores the logs from all accounts in a centralized account. The company has created an Amazon S3 bucket in the centralized account to store the VPC flow logs and AWS CloudTrail logs. All logs must be highly available for 30 days for frequent analysis, retained for an additional 60 days for backup purposes, and deleted 90 days after creation.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#534",
          "answers": [
            {
              "choice": "<p>Transition objects to the S3 Standard storage class 30 days after creation. Write an expiration action that directs Amazon S3 to delete objects after 90 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Transition objects to the S3 Standard-Infrequent Access (S3 Standard-IA) storage class 30 days after creation. Move all objects to the S3 Glacier Flexible Retrieval storage class after 90 days. Write an expiration action that directs Amazon S3 to delete objects after 90 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Transition objects to the S3 Glacier Flexible Retrieval storage class 30 days after creation. Write an expiration action that directs Amazon S3 to delete objects after 90 days.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Transition objects to the S3 One Zone-Infrequent Access (S3 One Zone-IA) storage class 30 days after creation. Move all objects to the S3 Glacier Flexible Retrieval storage class after 90 days. Write an expiration action that directs Amazon S3 to delete objects after 90 days.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 534 discussion",
      "discusstion": [
        {
          "id": 917514,
          "date": "Wed 07 Jun 2023 20:18",
          "username": "alexandercamachop",
          "content": "C seems the most sutiable.<br>Is the lowest cost.<br>After 30 days is backup only, doesn't specify frequent access.<br>Therefor we must transition the items after 30 days to Glacier Flexible Retrieval.<br><br>Also it says deletion after 90 days, so all answers specifying a transition after 90 days makes no sense.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Agree with you</li></ul>",
          "upvote_count": "18",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 919254,
          "date": "Fri 09 Jun 2023 13:45",
          "username": "MAMADOUG",
          "content": "Agree with you",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 996256,
          "date": "Fri 01 Sep 2023 18:28",
          "username": "deechean",
          "content": "The Glacier min storage duration is 90 days. All the options using Glacier are wrong. Only A is feasible.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>S3 Standard is priced at $0.023 per GB for the first 50 TB stored per month<br>S3 Glacier Flexible Retrieval costs $0.0036 per GB stored per month<br>If you move or delete data in Glacier within 90-days since their creation, you will pay an additional charge, that is called an early deletion fee. In US East you will pay $0.004/GB if you have deleted 1 GB in 2 months, $0.008/GB if you have deleted 1 GB in 1 month and $0.012 if you have deleted 1 GB within 3 months.<br><br>Even with the early deletion fee, it appears to me that answer 'A' would still be cheaper.</li><li>But the objects are deleted after 90 days so how is this charge applicable?</li><li>But why 'transition to the S3 Standard storage class', aren't they there already by default?</li></ul>",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1017765,
          "date": "Tue 26 Sep 2023 14:39",
          "username": "daniel33",
          "content": "S3 Standard is priced at $0.023 per GB for the first 50 TB stored per month<br>S3 Glacier Flexible Retrieval costs $0.0036 per GB stored per month<br>If you move or delete data in Glacier within 90-days since their creation, you will pay an additional charge, that is called an early deletion fee. In US East you will pay $0.004/GB if you have deleted 1 GB in 2 months, $0.008/GB if you have deleted 1 GB in 1 month and $0.012 if you have deleted 1 GB within 3 months.<br><br>Even with the early deletion fee, it appears to me that answer 'A' would still be cheaper.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But the objects are deleted after 90 days so how is this charge applicable?</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1126968,
          "date": "Fri 19 Jan 2024 21:58",
          "username": "awsgeek75",
          "content": "But the objects are deleted after 90 days so how is this charge applicable?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1111210,
          "date": "Mon 01 Jan 2024 14:42",
          "username": "pentium75",
          "content": "But why 'transition to the S3 Standard storage class', aren't they there already by default?",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1323111,
          "date": "Sat 07 Dec 2024 14:29",
          "username": "LeonSauveterre",
          "content": "A: When logs are created, they are initially automatically created to S3 Standard. What are you transitioning anyway?<br>B & D: You could've just deleted logs after 90 days. No need to move them somewhere else then delete them. That's just money down the drain.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1119085,
          "date": "Wed 10 Jan 2024 23:04",
          "username": "awsgeek75",
          "content": "C: Lowest cost<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A: Standard storage is default so this is wrong.<br>B: Looks wrong because it moves object to S3GFR after 90 days when they could just be deleted so extra cost<br>D: Same problem as B</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1119087,
          "date": "Wed 10 Jan 2024 23:05",
          "username": "awsgeek75",
          "content": "A: Standard storage is default so this is wrong.<br>B: Looks wrong because it moves object to S3GFR after 90 days when they could just be deleted so extra cost<br>D: Same problem as B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1111232,
          "date": "Mon 01 Jan 2024 15:02",
          "username": "pentium75",
          "content": "Not A: Objects are created in S3 Standard, so it doesn't make sense to 'transition' them there \\\"30 days after creation\\\"<br>Not B or C: No need to \\\"move all objects to the S3 Glacier Flexible Retrieval storage class after 90 days\\\" because we want to delete, not archive, them. Even if we would delete them right after moving, we would pay 90 days minimum storage duration. Plus, we are using \\\"Infrequent Access\\\" classes here, but we have no access at all.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I guess you wanted to write \\\"Not B or D\\\"</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1235798,
          "date": "Sun 23 Jun 2024 13:28",
          "username": "Rhydian25",
          "content": "I guess you wanted to write \\\"Not B or D\\\"",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1102146,
          "date": "Thu 21 Dec 2023 04:17",
          "username": "ftaws",
          "content": "requirement : frequently analysis<br> search cost : S3 STD 0.0004 vs IA 0.001<br>so IA is more expensive than STD(A)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1073194,
          "date": "Fri 17 Nov 2023 11:12",
          "username": "EdenWang",
          "content": "C is most cost-effective",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 994107,
          "date": "Wed 30 Aug 2023 14:50",
          "username": "Hades2231",
          "content": "Things to note are: 30 days frequent access and 90 days after creation, so you only need to do 2 things, not 3. Objects in S3 will be stored by default for 30 days before you can move it to somewhere else, so C is the answer.<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-transition-general-considerations.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 990509,
          "date": "Sat 26 Aug 2023 06:20",
          "username": "rjbihari",
          "content": "C is the correct one .<br>As after 30 days it doesn't says about access / retrieval , only backup somove items after 30 days to Glacier Flexible Retrieval.<br>And after it says deletion , so expiration action will ensure that the objects are deleted after 90 days, even if they are not accessed",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 987585,
          "date": "Tue 22 Aug 2023 17:56",
          "username": "Guru4Cloud",
          "content": "I think - it is B<br>The first 30 days, the logs need to be highly available for frequent analysis. The S3 Standard storage class is the most expensive storage class, but it also provides the highest availability.<br>After 30 days, the logs still need to be retained for backup purposes, but they do not need to be accessed frequently. The S3 Standard-IA storage class is a good option for this, as it is less expensive than the S3 Standard storage class.<br>After 90 days, the logs can be moved to the S3 Glacier Flexible Retrieval storage class. This is the most cost-effective storage class for long-term archiving.<br>The expiration action will ensure that the objects are deleted after 90 days, even if they are not accessed<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"After 90 days, the logs can be moved to the S3 Glacier Flexible Retrieval storage class. This is the most cost-effective storage class for long-term archiving.\\\" yeah but we don't need long-term archiving, we want to delete them after 90 days.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1111231,
          "date": "Mon 01 Jan 2024 14:59",
          "username": "pentium75",
          "content": "\\\"After 90 days, the logs can be moved to the S3 Glacier Flexible Retrieval storage class. This is the most cost-effective storage class for long-term archiving.\\\" yeah but we don't need long-term archiving, we want to delete them after 90 days.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 962314,
          "date": "Tue 25 Jul 2023 05:59",
          "username": "TariqKipkemei",
          "content": "C is the most cost effective solution.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 930542,
          "date": "Thu 22 Jun 2023 15:04",
          "username": "antropaws",
          "content": "C most likely.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 924696,
          "date": "Fri 16 Jun 2023 03:17",
          "username": "y0eri",
          "content": "Question says \\\"All logs must be highly available for 30 days for frequent analysis\\\" I think the answer is A. Glacier is not made for frequent access.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I take that back. Moderator, please delete my comment.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 924700,
          "date": "Fri 16 Jun 2023 03:19",
          "username": "y0eri",
          "content": "I take that back. Moderator, please delete my comment.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 921959,
          "date": "Tue 13 Jun 2023 08:00",
          "username": "KMohsoe",
          "content": "I think B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#535",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building an Amazon Elastic Kubernetes Service (Amazon EKS) cluster for its workloads. All secrets that are stored in Amazon EKS must be encrypted in the Kubernetes etcd key-value store.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#535",
          "answers": [
            {
              "choice": "<p>Create a new AWS Key Management Service (AWS KMS) key. Use AWS Secrets Manager to manage, rotate, and store all secrets in Amazon EKS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new AWS Key Management Service (AWS KMS) key. Enable Amazon EKS KMS secrets encryption on the Amazon EKS cluster.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create the Amazon EKS cluster with default options. Use the Amazon Elastic Block Store (Amazon EBS) Container Storage Interface (CSI) driver as an add-on.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new AWS Key Management Service (AWS KMS) key with the alias/aws/ebs alias. Enable default Amazon Elastic Block Store (Amazon EBS) volume encryption for the account.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 535 discussion",
      "discusstion": [
        {
          "id": 987513,
          "date": "Thu 22 Aug 2024 16:36",
          "username": "Guru4Cloud",
          "content": "B is the correct solution to meet the requirement of encrypting secrets in the etcd store for an Amazon EKS cluster.<br><br>The key points:<br><br>Create a new KMS key to use for encryption.<br>Enable EKS secrets encryption using that KMS key on the EKS cluster. This will encrypt secrets in the Kubernetes etcd store.<br>Option A uses Secrets Manager which does not encrypt the etcd store.<br>Option C uses EBS CSI which is unrelated to etcd encryption.<br>Option D enables EBS encryption but does not address etcd encryption.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 962320,
          "date": "Thu 25 Jul 2024 06:07",
          "username": "TariqKipkemei",
          "content": "EKS supports using AWS KMS keys to provide envelope encryption of Kubernetes secrets stored in EKS. Envelope encryption adds an addition, customer-managed layer of encryption for application secrets or user data that is stored within a Kubernetes cluster.<br><br>https://eksctl.io/usage/kms-encryption/",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1323114,
          "date": "Sat 07 Dec 2024 14:34",
          "username": "LeonSauveterre",
          "content": "\\\"must be encrypted in the Kubernetes etcd key-value store\\\" - that leaves B only.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 935927,
          "date": "Fri 28 Jun 2024 02:24",
          "username": "manuh",
          "content": "Why not a<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>option A does not enable Amazon EKS KMS secrets encryption on the Amazon EKS cluster</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 962323,
          "date": "Thu 25 Jul 2024 06:14",
          "username": "TariqKipkemei",
          "content": "option A does not enable Amazon EKS KMS secrets encryption on the Amazon EKS cluster",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 928510,
          "date": "Thu 20 Jun 2024 16:33",
          "username": "MrAWSAssociate",
          "content": "B is the right option.<br>https://docs.aws.amazon.com/eks/latest/userguide/enable-kms.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 917516,
          "date": "Fri 07 Jun 2024 20:21",
          "username": "alexandercamachop",
          "content": "It is B, because we need to encrypt inside of the EKS cluster, not outside.<br>AWS KMS is to encrypt at rest.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 916971,
          "date": "Fri 07 Jun 2024 09:14",
          "username": "AncaZalog",
          "content": "is B, not D",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#536",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to provide data scientists with near real-time read-only access to the company's production Amazon RDS for PostgreSQL database. The database is currently configured as a Single-AZ database. The data scientists use complex queries that will not affect the production database. The company needs a solution that is highly available.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#536",
          "answers": [
            {
              "choice": "<p>Scale the existing production database in a maintenance window to provide enough power for the data scientists.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Change the setup from a Single-AZ to a Multi-AZ instance deployment with a larger secondary standby instance. Provide the data scientists access to the secondary instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Change the setup from a Single-AZ to a Multi-AZ instance deployment. Provide two additional read replicas for the data scientists.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Change the setup from a Single-AZ to a Multi-AZ cluster deployment with two readable standby instances. Provide read endpoints to the data scientists.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 536 discussion",
      "discusstion": [
        {
          "id": 946799,
          "date": "Sun 09 Jul 2023 02:16",
          "username": "NASHDBA",
          "content": "Highly AvailableMulti-AZ Cluster<br>Read-only + Near Real timereadable standby.<br>Read replicas are async whereas readable standby is synchronous.<br>https://stackoverflow.com/questions/70663036/differences-b-w-aws-read-replica-and-the-standby-instances<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>a Multi-AZ instance deployment is also highly available for a lower cost, no?</li><li>This^ is the reason.</li></ul>",
          "upvote_count": "22",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1172699,
          "date": "Wed 13 Mar 2024 16:55",
          "username": "chickenmf",
          "content": "a Multi-AZ instance deployment is also highly available for a lower cost, no?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 989506,
          "date": "Thu 24 Aug 2023 23:36",
          "username": "Smart",
          "content": "This^ is the reason.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 921385,
          "date": "Mon 12 Jun 2023 13:15",
          "username": "maver144",
          "content": "It's either C or D. To be honest, I find the newest questions to be ridiculously hard (roughly 500+). I agree with @alexandercamachop that Multi Az in Instance mode is cheaper than Cluster. However, with Cluster we have reader endpoint available to use out-of-box, so there is no need to provide read-replicas, which also has its own costs. The ridiculous part is that I'm pretty sure even the AWS support would have troubles to answer which configuration is MOST cost-effective.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Near real-time is clue for C, since read replicas are async, but still its not obvious question.</li><li>Absolutely true that 500+ questions are damn difficult to answer. I still dont know why is B incorrect. Shouldn't 1 extra be better than 2 ?</li><li>they are not all hard, most are normal. its just this one and that one about EKS encryption control plane (earlier than this page).</li></ul>",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 921387,
          "date": "Mon 12 Jun 2023 13:16",
          "username": "maver144",
          "content": "Near real-time is clue for C, since read replicas are async, but still its not obvious question.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 935931,
          "date": "Wed 28 Jun 2023 02:36",
          "username": "manuh",
          "content": "Absolutely true that 500+ questions are damn difficult to answer. I still dont know why is B incorrect. Shouldn't 1 extra be better than 2 ?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>they are not all hard, most are normal. its just this one and that one about EKS encryption control plane (earlier than this page).</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1090360,
          "date": "Thu 07 Dec 2023 15:16",
          "username": "cyber_bedouin",
          "content": "they are not all hard, most are normal. its just this one and that one about EKS encryption control plane (earlier than this page).",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1239284,
          "date": "Sat 29 Jun 2024 15:21",
          "username": "emakid",
          "content": "Option D: Multi-AZ cluster deployment with two readable standby instances would be more costly and is not necessary if read replicas are sufficient for the data scientists' needs.<br><br>Thus, Option C is the most cost-effective and operationally efficient solution to meet the company's requirements.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1153378,
          "date": "Sun 18 Feb 2024 16:24",
          "username": "osmk",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1111242,
          "date": "Mon 01 Jan 2024 15:10",
          "username": "pentium75",
          "content": "Not A - Not \\\"highly available\\\"<br>Not B - \\\"Access to the secondary instance\\\" is not possible in Multi-AZ<br>Not C - Multi-AZ + two (!) read replicas is more expensive than cluster<br>D - Provides \\\"readable standby instances\\\"",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1088692,
          "date": "Tue 05 Dec 2023 18:52",
          "username": "SHAAHIBHUSHANAWS",
          "content": "D<br><br>https://aws.amazon.com/about-aws/whats-new/2023/01/amazon-rds-multi-az-readable-standbys-rds-postgresql-inbound-replication/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1072324,
          "date": "Thu 16 Nov 2023 11:09",
          "username": "bogobob",
          "content": "https://aws.amazon.com/blogs/database/choose-the-right-amazon-rds-deployment-option-single-az-instance-multi-az-instance-or-multi-az-database-cluster/<br>C would mean you are paying for 4 instances (primary, backup, and 2 read instances). D would be 3 (primary, and 2 backup). Difficult to be sure, pricing calculator doesn't even include clusters yet.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 987510,
          "date": "Tue 22 Aug 2023 16:34",
          "username": "Guru4Cloud",
          "content": "Option D is the most cost-effective solution that meets the requirements for this scenario.<br><br>The key considerations are:<br><br>Data scientists need read-only access to near real-time production data without affecting performance.<br>High availability is required.<br>Cost should be minimized.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 966348,
          "date": "Sat 29 Jul 2023 12:59",
          "username": "ukivanlamlpi",
          "content": "https://aws.amazon.com/blogs/database/choose-the-right-amazon-rds-deployment-option-single-az-instance-multi-az-instance-or-multi-az-database-cluster/<br><br>only multi AZ cluster have reader endpoint.multi AZ instance secondary replicate is not allow to access",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 964479,
          "date": "Thu 27 Jul 2023 09:40",
          "username": "msdnpro",
          "content": "Support for D:<br><br>Amazon RDS now offers Multi-AZ deployments with readable standby instances (also called Multi-AZ DB cluster deployments) in preview. You should consider using Multi-AZ DB cluster deployments with two readable DB instances if you need additional read capacity in your Amazon RDS Multi-AZ deployment and if your application workload has strict transaction latency requirements such as single-digit milliseconds transactions.<br><br>https://aws.amazon.com/blogs/database/readable-standby-instances-in-amazon-rds-multi-az-deployments-a-new-high-availability-option/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 962331,
          "date": "Tue 25 Jul 2023 06:25",
          "username": "TariqKipkemei",
          "content": "Unlike Multi-AZ instance deployment, where the secondary instance can't be accessed for read or writes, Multi-AZ DB cluster deployment consists of primary instance running in one AZ serving read-write traffic and two other standby running in two different AZs serving read traffic.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 948050,
          "date": "Mon 10 Jul 2023 13:35",
          "username": "Iragmt",
          "content": "D. using Multi-AZ DB cluster deployments with two readable DB instances if you need additional read capacity in your Amazon RDS Multi-AZ deployment and if your application workload has strict transaction latency requirements such as single-digit milliseconds transactions. https://aws.amazon.com/blogs/database/readable-standby-instances-in-amazon-rds-multi-az-deployments-a-new-high-availability-option/<br><br>while on read replicas, Amazon RDS then uses the asynchronous replication method for the DB engine to update the read replica whenever there is a change to the primary DB instance. https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 935928,
          "date": "Wed 28 Jun 2023 02:29",
          "username": "manuh",
          "content": "Why not b. Shouldnt it have less number of instances than both c and d?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Complex queries on single db will affect performance of db</li><li>You can't 'access the secondary instance' as suggested by B</li><li>\\\"The Multi-AZ instance is suitable for business/mission critical applications that require high availability with low RTO/RPO and resilience to availability zone outage. However, this high availability option isn't a scaling solution for read-only scenarios. You can't use a standby replica to serve read traffic. To serve read-only traffic, use a Multi-AZ DB cluster or a read replica instead.\\\"</li><li>Multi-AZ is about twice the price of Single-AZ. For example:<br>db.t2.micro single - $0.017/hour<br>db.t2.micro multi - $0.034/hour<br><br>option C: 1 primary + 1 standby + 2 replica4Db<br>option D: 1 primary + 2 standby3Db<br><br>D. appears to be most cost effective</li><li>I think the best explanation I've read so far.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 950692,
          "date": "Thu 13 Jul 2023 15:17",
          "username": "baba365",
          "content": "Complex queries on single db will affect performance of db",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1111236,
          "date": "Mon 01 Jan 2024 15:07",
          "username": "pentium75",
          "content": "You can't 'access the secondary instance' as suggested by B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1111237,
          "date": "Mon 01 Jan 2024 15:08",
          "username": "pentium75",
          "content": "\\\"The Multi-AZ instance is suitable for business/mission critical applications that require high availability with low RTO/RPO and resilience to availability zone outage. However, this high availability option isn't a scaling solution for read-only scenarios. You can't use a standby replica to serve read traffic. To serve read-only traffic, use a Multi-AZ DB cluster or a read replica instead.\\\"",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 950688,
          "date": "Thu 13 Jul 2023 15:12",
          "username": "baba365",
          "content": "Multi-AZ is about twice the price of Single-AZ. For example:<br>db.t2.micro single - $0.017/hour<br>db.t2.micro multi - $0.034/hour<br><br>option C: 1 primary + 1 standby + 2 replica4Db<br>option D: 1 primary + 2 standby3Db<br><br>D. appears to be most cost effective<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I think the best explanation I've read so far.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1056863,
          "date": "Sun 29 Oct 2023 15:06",
          "username": "wsdasdasdqwdaw",
          "content": "I think the best explanation I've read so far.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 933610,
          "date": "Sun 25 Jun 2023 15:05",
          "username": "0628atv",
          "content": "D:<br>https://aws.amazon.com/tw/blogs/database/readable-standby-instances-in-amazon-rds-multi-az-deployments-a-new-high-availability-option/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 928661,
          "date": "Tue 20 Jun 2023 19:52",
          "username": "vrevkov",
          "content": "Forgot to vote",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 928640,
          "date": "Tue 20 Jun 2023 19:26",
          "username": "vrevkov",
          "content": "I think it's D.<br>C: Multi-AZ instanceactive + standby + two read replicas4 RDS instances<br>D: Multi-AZ clusterActive + two standby3 RDS instances<br><br>Single-AZ and Multi-AZ deployments: Pricing is billed per DB instance-hour consumed from the time a DB instance is launched until it is stopped or deleted.<br>https://aws.amazon.com/rds/postgresql/pricing/?pgpr&loc3<br>In the case of a cluster, you will pay less.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 924860,
          "date": "Fri 16 Jun 2023 07:04",
          "username": "Axeashes",
          "content": "Multi-AZ instance: the standby instance doesn't serve any read or write traffic.<br>Multi-AZ DB cluster: consists of primary instance running in one AZ serving read-write traffic and two other standby running in two different AZs serving read traffic.<br>https://aws.amazon.com/blogs/database/choose-the-right-amazon-rds-deployment-option-single-az-instance-multi-az-instance-or-multi-az-database-cluster/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#537",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a three-tier web application in the AWS Cloud that operates across three Availability Zones. The application architecture has an Application Load Balancer, an Amazon EC2 web server that hosts user session states, and a MySQL database that runs on an EC2 instance. The company expects sudden increases in application traffic. The company wants to be able to scale to meet future application capacity demands and to ensure high availability across all three Availability Zones.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#537",
          "answers": [
            {
              "choice": "<p>Migrate the MySQL database to Amazon RDS for MySQL with a Multi-AZ DB cluster deployment. Use Amazon ElastiCache for Redis with high availability to store session data and to cache reads. Migrate the web server to an Auto Scaling group that is in three Availability Zones.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the MySQL database to Amazon RDS for MySQL with a Multi-AZ DB cluster deployment. Use Amazon ElastiCache for Memcached with high availability to store session data and to cache reads. Migrate the web server to an Auto Scaling group that is in three Availability Zones.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the MySQL database to Amazon DynamoDB Use DynamoDB Accelerator (DAX) to cache reads. Store the session data in DynamoDB. Migrate the web server to an Auto Scaling group that is in three Availability Zones.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the MySQL database to Amazon RDS for MySQL in a single Availability Zone. Use Amazon ElastiCache for Redis with high availability to store session data and to cache reads. Migrate the web server to an Auto Scaling group that is in three Availability Zones.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 537 discussion",
      "discusstion": [
        {
          "id": 917522,
          "date": "Thu 07 Dec 2023 21:34",
          "username": "alexandercamachop",
          "content": "Memcached is best suited for caching data, while Redis is better for storing data that needs to be persisted. If you need to store data that needs to be accessed frequently, such as user profiles, session data, and application settings, then Redis is the better choice<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>and for high availability, it's better than memcached</li><li>but does rds multi-az provide the needed scalability?</li><li>it is multi-az cluster deployment, same as B, so yes, it is providing the needed scalability. Great explanation.</li></ul>",
          "upvote_count": "16",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 940176,
          "date": "Mon 01 Jan 2024 19:37",
          "username": "nonameforyou",
          "content": "and for high availability, it's better than memcached<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>but does rds multi-az provide the needed scalability?</li><li>it is multi-az cluster deployment, same as B, so yes, it is providing the needed scalability. Great explanation.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 940180,
          "date": "Mon 01 Jan 2024 19:38",
          "username": "nonameforyou",
          "content": "but does rds multi-az provide the needed scalability?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>it is multi-az cluster deployment, same as B, so yes, it is providing the needed scalability. Great explanation.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1052986,
          "date": "Wed 24 Apr 2024 17:10",
          "username": "wsdasdasdqwdaw",
          "content": "it is multi-az cluster deployment, same as B, so yes, it is providing the needed scalability. Great explanation.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 916977,
          "date": "Thu 07 Dec 2023 10:30",
          "username": "AncaZalog",
          "content": "is A not B",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1153381,
          "date": "Sun 18 Aug 2024 15:30",
          "username": "osmk",
          "content": "Replication: Redis supports creating multiple replicas for read scalability and high availability.https://aws.amazon.com/elasticache/redis-vs-memcached/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1126973,
          "date": "Fri 19 Jul 2024 21:06",
          "username": "awsgeek75",
          "content": "A because of \\\"Amazon EC2 web server that hosts user session states\\\"<br><br>C: RDS to DynamoDB doesn't make total sense<br>D: Single zone is not HA<br><br>Between A and B, A is suitable because of session state and Elasticache with Redis is moreHA than option B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1114080,
          "date": "Thu 04 Jul 2024 21:25",
          "username": "mr123dd",
          "content": "B: from what I know, Memcached provide better performance and simplicity but lower availability than redis.<br>C: mysql is relational database, dynamodb is nosql<br>D: single AZ",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1111255,
          "date": "Mon 01 Jul 2024 14:26",
          "username": "pentium75",
          "content": "ElastiCache for Redis supports HA, ElastiCache for Memcached does not:<br>https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/SelectEngine.html<br><br>C could in theory work, but session data is typically stored in ElastiCache, not in DynamoDB.<br><br>D is not HA.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1101092,
          "date": "Thu 20 Jun 2024 00:39",
          "username": "Cyberkayu",
          "content": "'hosts user session states' in question, thus redis<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Right, but Redis is A</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1111248,
          "date": "Mon 01 Jul 2024 14:13",
          "username": "pentium75",
          "content": "Right, but Redis is A",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1063919,
          "date": "Mon 06 May 2024 14:26",
          "username": "potomac",
          "content": "Redis is a widely adopted in-memory data store for use as a database, cache, message broker, queue, session store, and leaderboard.<br>https://aws.amazon.com/elasticache/redis/",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1053488,
          "date": "Thu 25 Apr 2024 07:48",
          "username": "thanhnv142",
          "content": "B is correct.<br>We are left with 2 options: A and B. But it requires that the system be able to scale to meet future application capacity demands. Redis is very good. But its drawback is not scalable. Thats why they implement memcached.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1006659,
          "date": "Wed 13 Mar 2024 16:19",
          "username": "ErnShm",
          "content": "A<br>Redis as an in-memory data store with high availability and persistence is a popular choice among application developers to store and manage session data for internet-scale applications. Redis provides the sub-millisecond latency, scale, and resiliency required to manage session data such as user profiles, credentials, session state, and user-specific personalization.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Redis provides replication while memcached doesnt.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1105209,
          "date": "Tue 25 Jun 2024 11:11",
          "username": "Gajendr",
          "content": "Redis provides replication while memcached doesnt.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 987482,
          "date": "Thu 22 Feb 2024 16:48",
          "username": "Guru4Cloud",
          "content": "The key reasons why option A is preferable:<br><br>RDS Multi-AZ provides high availability for MySQL by synchronously replicating data across AZs. Automatic failover handles AZ outages.<br>ElastiCache for Redis is better suited for session data caching than Memcached. Redis offers more advanced data structures and flexibility.<br>Auto scaling across 3 AZs provides high availability for the web tier",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 966335,
          "date": "Mon 29 Jan 2024 13:43",
          "username": "ukivanlamlpi",
          "content": "the different between Redis and Memcache is that Memcache suuport multithread process to handle the increase of application traffic. https://aws.amazon.com/elasticache/redis-vs-memcached/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>ElastiCache for Memcached says \\\"No\\\" for \\\"High Availability\\\"<br><br>https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/SelectEngine.html</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1111254,
          "date": "Mon 01 Jul 2024 14:25",
          "username": "pentium75",
          "content": "ElastiCache for Memcached says \\\"No\\\" for \\\"High Availability\\\"<br><br>https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/SelectEngine.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 962338,
          "date": "Thu 25 Jan 2024 07:43",
          "username": "TariqKipkemei",
          "content": "This requirement wins for me: \\\"be able to scale to meet future application capacity demands\\\".<br>Memcached implements a multi-threaded architecture,it can make use of multiple processing cores. This means that you can handle more operations by scaling up compute capacity.<br><br>https://aws.amazon.com/elasticache/redis-vs-memcached/#:~:textby%20their%20rank.-,Multithreaded%20architecture,-Since%20Memcached%20is",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 949238,
          "date": "Thu 11 Jan 2024 21:46",
          "username": "plndmns",
          "content": "cache reads is memcached right?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 928568,
          "date": "Wed 20 Dec 2023 18:58",
          "username": "MrAWSAssociate",
          "content": "B is correct!",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#538",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A global video streaming company uses Amazon CloudFront as a content distribution network (CDN). The company wants to roll out content in a phased manner across multiple countries. The company needs to ensure that viewers who are outside the countries to which the company rolls out content are not able to view the content.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#538",
          "answers": [
            {
              "choice": "<p>Add geographic restrictions to the content in CloudFront by using an allow list. Set up a custom error message.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Set up a new URL tor restricted content. Authorize access by using a signed URL and cookies. Set up a custom error message.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Encrypt the data for the content that the company distributes. Set up a custom error message.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new URL for restricted content. Set up a time-restricted access policy for signed URLs.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 538 discussion",
      "discusstion": [
        {
          "id": 1063922,
          "date": "Mon 06 May 2024 14:28",
          "username": "potomac",
          "content": "The CloudFront geographic restrictions feature lets you control distribution of your content at the country level for all files that you're distributing with a given web distribution.<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/georestrictions.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1119096,
          "date": "Wed 10 Jul 2024 22:18",
          "username": "awsgeek75",
          "content": "This question asks us to guess Netflix subscription model in 2 mins! lol!<br><br>BCD are impractical for geo restrictions as you cannot restrict URL by region and you cannot encrypt by geo region (country etc)",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 987427,
          "date": "Thu 22 Feb 2024 15:13",
          "username": "Guru4Cloud",
          "content": "Add geographic restrictions to the content in CloudFront by using an allow list. Set up a custom error message",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 962339,
          "date": "Thu 25 Jan 2024 07:45",
          "username": "TariqKipkemei",
          "content": "Add geographic restrictions to the content in CloudFront by using an allow list. Set up a custom error message.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 949121,
          "date": "Thu 11 Jan 2024 19:00",
          "username": "jaydesai8",
          "content": "A makes sense - cloudfront has the capabilities of georestriction",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 930560,
          "date": "Fri 22 Dec 2023 16:18",
          "username": "antropaws",
          "content": "Pretty sure it's A.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 917523,
          "date": "Thu 07 Dec 2023 21:36",
          "username": "alexandercamachop",
          "content": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/georestrictions.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 916980,
          "date": "Thu 07 Dec 2023 10:34",
          "username": "AncaZalog",
          "content": "is B not A<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Signed url or cookies can be used for the banner country as well?</li><li>Why's that?</li><li>How is signed URL going to be geo restricted? Anyone with signed url can access the content on that url regardless of their location so B is wrong.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 935932,
          "date": "Thu 28 Dec 2023 03:42",
          "username": "manuh",
          "content": "Signed url or cookies can be used for the banner country as well?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 930559,
          "date": "Fri 22 Dec 2023 16:18",
          "username": "antropaws",
          "content": "Why's that?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1126974,
          "date": "Fri 19 Jul 2024 21:09",
          "username": "awsgeek75",
          "content": "How is signed URL going to be geo restricted? Anyone with signed url can access the content on that url regardless of their location so B is wrong.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#539",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to use the AWS Cloud to improve its on-premises disaster recovery (DR) configuration. The company's core production business application uses Microsoft SQL Server Standard, which runs on a virtual machine (VM). The application has a recovery point objective (RPO) of 30 seconds or fewer and a recovery time objective (RTO) of 60 minutes. The DR solution needs to minimize costs wherever possible.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#539",
          "answers": [
            {
              "choice": "<p>Configure a multi-site active/active setup between the on-premises server and AWS by using Microsoft SQL Server Enterprise with Always On availability groups.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a warm standby Amazon RDS for SQL Server database on AWS. Configure AWS Database Migration Service (AWS DMS) to use change data capture (CDC).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Elastic Disaster Recovery configured to replicate disk changes to AWS as a pilot light.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use third-party backup software to capture backups every night. Store a secondary set of backups in Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 539 discussion",
      "discusstion": [
        {
          "id": 1138181,
          "date": "Fri 02 Feb 2024 07:26",
          "username": "1Alpha1",
          "content": "Backup & Restore (RPO in hours, RTO in 24 hours or less)<br>Pilot Light (RPO in minutes, RTO in hours)<br>Warm Standby (RPO in seconds, RTO in minutes) *** Right Answer ***<br>Active-Active (RPO is none or possibly seconds, RTO in seconds)<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://disaster-recovery.workshop.aws/en/intro/disaster-recovery.html#:~:textPilot%20Light%20(RPO%20in%20minutes,that%20includes%20that%20critical%20core.</li></ul>",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1138185,
          "date": "Fri 02 Feb 2024 07:27",
          "username": "1Alpha1",
          "content": "https://disaster-recovery.workshop.aws/en/intro/disaster-recovery.html#:~:textPilot%20Light%20(RPO%20in%20minutes,that%20includes%20that%20critical%20core.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1111267,
          "date": "Mon 01 Jan 2024 15:40",
          "username": "pentium75",
          "content": "Not A - too expensive and not using AWS services<br>Not B - \\\"RDS for SQL Server\\\" does not support everything that \\\"SQL Server Standard which runs on a VM\\\" does; CDC supports even less (https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SQLServer.html). Also it would be more expensive than C.<br>Not D - \\\"Every night\\\" would not meet the RPO requirement<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Thanks I was confused between B and C. This makes perfect sense!</li></ul>",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1119098,
          "date": "Thu 11 Jan 2024 05:38",
          "username": "awsgeek75",
          "content": "Thanks I was confused between B and C. This makes perfect sense!",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1331648,
          "date": "Wed 25 Dec 2024 18:16",
          "username": "Salilgen",
          "content": "IMO answer is B.<br>AWS Elastic Disaster Recovery is cheaper and may meet the RTO/RPO requirements of the question, but option C states that it is configured as a pilot light (RTO/RPO 10s minute)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1323348,
          "date": "Sun 08 Dec 2024 04:54",
          "username": "LeonSauveterre",
          "content": "RPO: the maximum acceptable amount of *data loss* during an outage or disaster.<br>RTO: the maximum acceptable amount of *downtime* after a failure.<br><br>Why B (RDS with DMS) might be better:<br>1. RTO Guarantee: A warm standby database provides faster recovery since the database is preconfigured and ready to accept traffic.<br>2. Simplicity: For workloads compatible with RDS and DMS, this approach simplifies management.<br><br>Why C (Elastic DR) might be better:<br>1. Workload Compatibility: If the on-premises SQL Server workload uses features that RDS or DMS cannot support, Elastic DR ensures full replication by mirroring the entire VM or disk.<br>2. Cost: Elastic DR replicates data but does not run a live database, making it much cheaper than a warm standby RDS.<br><br>\\\"The DR solution needs to minimize costs wherever possible\\\" - That makes me think C is the answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1256243,
          "date": "Sat 27 Jul 2024 11:45",
          "username": "example_",
          "content": "Pilot light (RPO in minutes, RTO in tens of minutes)<br>Warm standby (RPO in seconds, RTO in minutes)<br><br>https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_planning_for_recovery_disaster_recovery.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>When cost is a concern, and you wish to achieve a similar RPO and RTO objectives as defined in the warm standby strategy, you could consider cloud native solutions, like AWS Elastic Disaster Recovery, that take the pilot light approach and offer improved RPO and RTO targets.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1267956,
          "date": "Sun 18 Aug 2024 08:59",
          "username": "MrAliMohsan",
          "content": "When cost is a concern, and you wish to achieve a similar RPO and RTO objectives as defined in the warm standby strategy, you could consider cloud native solutions, like AWS Elastic Disaster Recovery, that take the pilot light approach and offer improved RPO and RTO targets.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1195020,
          "date": "Sat 13 Apr 2024 17:01",
          "username": "abhiarns",
          "content": "AWS DRS(AWS Elastic Disaster Recovery) enables RPOs of seconds and RTOs of minutes.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1153400,
          "date": "Sun 18 Feb 2024 16:49",
          "username": "osmk",
          "content": "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html#warm-standby",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1126976,
          "date": "Fri 19 Jan 2024 22:18",
          "username": "awsgeek75",
          "content": "A: Not possible<br>B: With RDS it means your failover will launch a different database engine. This is wrong in general<br>D: No comments<br>C: It is a disk based replication so it will be similar DB server and this is the product managed by AWS for the DR of on-prem setups.<br><br>https://aws.amazon.com/blogs/modernizing-with-aws/how-to-set-up-disaster-recovery-for-sql-server-always-on-availability-groups-using-aws-elastic-disaster-recovery/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1083750,
          "date": "Wed 29 Nov 2023 19:57",
          "username": "1rob",
          "content": "AWS Elastic Disaster Recovery<br>If you are considering the pilot light or warm standby strategy for disaster recovery, AWS Elastic Disaster Recovery could provide an alternative approach with improved benefits. Elastic Disaster Recovery can offer an RPO and RTO target similar to warm standby, but maintain the low-cost approach of pilot light<br><br>From <https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_planning_for_recovery_disaster_recovery.html>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1063928,
          "date": "Mon 06 Nov 2023 15:35",
          "username": "potomac",
          "content": "With the pilot light approach, you replicate your data from one environment to another and provision a copy of your core workload infrastructure, not the fully functional copy of your production environment in a recovery environment.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://aws.amazon.com/blogs/architecture/disaster-recovery-dr-architecture-on-aws-part-iii-pilot-light-and-warm-standby/</li><li>We have no idea if they are using SQL Server features that require OS customization etc., so we can't assume that the app would run on RDS for SQL Server at all. We need a replica of the VM that SQL Server is currently running on, thus C.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1092530,
          "date": "Sun 10 Dec 2023 15:20",
          "username": "saymolet",
          "content": "https://aws.amazon.com/blogs/architecture/disaster-recovery-dr-architecture-on-aws-part-iii-pilot-light-and-warm-standby/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1111269,
          "date": "Mon 01 Jan 2024 15:41",
          "username": "pentium75",
          "content": "We have no idea if they are using SQL Server features that require OS customization etc., so we can't assume that the app would run on RDS for SQL Server at all. We need a replica of the VM that SQL Server is currently running on, thus C.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1053585,
          "date": "Wed 25 Oct 2023 10:58",
          "username": "thanhnv142",
          "content": "C: Pilot light<br>- In pilot light, databases are always on, thus minimize RPO (can satisfy the 30s requirement)<br>- Only apps are turn off. But it can satisfy the 60 minutes requirement<br>- Warm standby, of cource, can satisfy all the RPO and RTO requirements, but it is more expensive than pilot light",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1010559,
          "date": "Mon 18 Sep 2023 14:11",
          "username": "richguo",
          "content": "B(warm standby) is doable, but C (pilot light) is most cost effectively.<br>https://aws.amazon.com/tw/blogs/architecture/disaster-recovery-dr-architecture-on-aws-part-iii-pilot-light-and-warm-standby/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 998683,
          "date": "Mon 04 Sep 2023 18:22",
          "username": "LazyTs",
          "content": "The company wants to improve... so needs something guaranteed to be better than 60 mins RTO",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 987416,
          "date": "Tue 22 Aug 2023 13:55",
          "username": "Guru4Cloud",
          "content": "Configure a warm standby Amazon RDS for SQL Server database on AWS. Configure AWS Database Migration Service (AWS DMS) to use change data capture (CDC).<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Warm standby is costlier than Pilot Light</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 987540,
          "date": "Tue 22 Aug 2023 17:10",
          "username": "Eminenza22",
          "content": "Warm standby is costlier than Pilot Light",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 984805,
          "date": "Sat 19 Aug 2023 00:02",
          "username": "PantryRaid",
          "content": "AWS DRS enables RPOs of seconds and RTOs of minutes. Pilot light is also cheaper than warm standby.<br>https://aws.amazon.com/disaster-recovery/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 969180,
          "date": "Tue 01 Aug 2023 17:52",
          "username": "BlueAIBird",
          "content": "C is correct. <br>Since it is not only your core elements that are running all the time, warm standby is usually more costly than pilot light. Warm standby is another example of active/passive failover configuration. Servers can be left running in a minimum number of EC2 instances on the smallest sizes possible.<br>Ref: https://tutorialsdojo.com/backup-and-restore-vs-pilot-light-vs-warm-standby-vs-multi-site/#:~:textSince%20it%20is%20not%20only,on%20the%20smallest%20sizes%20possible.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 956791,
          "date": "Wed 19 Jul 2023 17:55",
          "username": "hozy_",
          "content": "https://aws.amazon.com/ko/blogs/architecture/disaster-recovery-dr-architecture-on-aws-part-iii-pilot-light-and-warm-standby/<br><br>It says Pilot Light costs less than Warm Standby.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#540",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an on-premises server that uses an Oracle database to process and store customer information. The company wants to use an AWS database service to achieve higher availability and to improve application performance. The company also wants to offload reporting from its primary database system.<br><br>Which solution will meet these requirements in the MOST operationally efficient way?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#540",
          "answers": [
            {
              "choice": "<p>Use AWS Database Migration Service (AWS DMS) to create an Amazon RDS DB instance in multiple AWS Regions. Point the reporting functions toward a separate DB instance from the primary DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon RDS in a Single-AZ deployment to create an Oracle database. Create a read replica in the same zone as the primary DB instance. Direct the reporting functions to the read replica.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon RDS deployed in a Multi-AZ cluster deployment to create an Oracle database. Direct the reporting functions to use the reader instance in the cluster deployment.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon RDS deployed in a Multi-AZ instance deployment to create an Amazon Aurora database. Direct the reporting functions to the reader instances.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 540 discussion",
      "discusstion": [
        {
          "id": 964953,
          "date": "Thu 27 Jul 2023 19:49",
          "username": "mrsoa",
          "content": "Its D<br>Multi-AZ DB clusters aren't available with the following engines:<br>RDS for MariaDB<br>RDS for Oracle<br>RDS for SQL Server<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RDS_Fea_Regions_DB-eng.Feature.MultiAZDBClusters.html",
          "upvote_count": "34",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 917582,
          "date": "Wed 07 Jun 2023 22:12",
          "username": "alexandercamachop",
          "content": "C. Use Amazon RDS deployed in a Multi-AZ cluster deployment to create an Oracle database. Direct the reporting functions to use the reader instance in the cluster deployment.<br><br>A and B discarted.<br>The answer is between C and D<br>D says use an Amazon RDS to build an Amazon Aurora, makes no sense.<br>C is the correct one, high availability in multi az deployment.<br>Also point the reporting to the reader replica.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Multi-AZ DB clusters aren't available with the following engines:<br>RDS for MariaDB<br>RDS for Oracle<br>RDS for SQL Server</li><li>using RDS to build Aurora from an Oracle DB https://aws.amazon.com/tutorials/break-free-from-legacy-databases/migrate-oracle-to-amazon-aurora/</li></ul>",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1083757,
          "date": "Wed 29 Nov 2023 20:11",
          "username": "1rob",
          "content": "Multi-AZ DB clusters aren't available with the following engines:<br>RDS for MariaDB<br>RDS for Oracle<br>RDS for SQL Server",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1072347,
          "date": "Thu 16 Nov 2023 11:42",
          "username": "bogobob",
          "content": "using RDS to build Aurora from an Oracle DB https://aws.amazon.com/tutorials/break-free-from-legacy-databases/migrate-oracle-to-amazon-aurora/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1323351,
          "date": "Sun 08 Dec 2024 05:07",
          "username": "LeonSauveterre",
          "content": "In the MOST operationally efficient way, D is better, and A is too much. HOWEVER, Aurora is not Oracle, so this would require migrating from Oracle to Aurora (potentially requiring significant changes to the application, schema, and queries). The question did not say anything about not wanting to migrate.<br><br>B - 100% wrong. Single-AZ deployment does not meet the higher availability requirement.<br>C - 100% wrong. There's no way to create an Oracle db using RDS.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1305057,
          "date": "Wed 30 Oct 2024 16:53",
          "username": "chest_jd",
          "content": "Unfortunately ALL ANSWERS ARE NOT CORRECT.<br><br>A. Use AWS Database Migration Service (AWS DMS) to create an Amazon RDS DB instance in multiple AWS Regions.<br>How can I create RDS using DMS ?<br><br>B. Single-Zone is not suitable for high available solution.<br><br>C. RDS cluster deployment are not available for DBs: RDS for Db2, RDS for MariaDB, RDS for Oracle, RDS for SQL Server<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RDS_Fea_Regions_DB-eng.Feature.MultiAZDBClusters.html<br><br>D. Use Amazon RDS deployed in a Multi-AZ instance deployment to create an Amazon Aurora database.<br>Aurora DOES NOT support Oracle DB. Only MySQL and PostgreSQL",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1170533,
          "date": "Sun 10 Mar 2024 19:25",
          "username": "Ravan",
          "content": "Multi-AZ (Availability Zone) deployments are not available for the following Amazon RDS database engines:<br><br>1. Amazon Aurora with MySQL compatibility<br>2. Amazon Aurora with PostgreSQL compatibility<br>3. Amazon RDS for SQL Server Express Edition<br>4. Amazon RDS for Oracle Standard Edition One<br>5. Amazon RDS for Oracle Standard Edition<br>6. Amazon RDS for Oracle SE2 (Standard Edition 2)<br><br>For these database engines, Amazon RDS provides high availability using other mechanisms specific to each engine, such as Read Replicas or different standby configurations. However, Multi-AZ deployments, which automatically provision and maintain a synchronous standby replica in a different Availability Zone for failover support, are not supported for these engines.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1162816,
          "date": "Thu 29 Feb 2024 17:54",
          "username": "noircesar25",
          "content": "this link expalins why the answer is C and confirms that rds for oracle supports multi-AZ<br>https://aws.amazon.com/blogs/aws/multi-az-option-for-amazon-rds-oracle/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1153408,
          "date": "Sun 18 Feb 2024 17:05",
          "username": "osmk",
          "content": "requiring high availability and performance.https://aws.amazon.com/rds/aurora/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1119103,
          "date": "Wed 10 Jan 2024 23:27",
          "username": "awsgeek75",
          "content": "Between C&D, D is correct as C is not possible:<br>https://aws.amazon.com/blogs/aws/multi-az-option-for-amazon-rds-oracle/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1111281,
          "date": "Mon 01 Jan 2024 15:59",
          "username": "pentium75",
          "content": "Not A - Creating multiple instances and keeping them in sync in DMS is surely not \\\"operationally efficient\\\"<br>Not B - \\\"replica in the same zone\\\" -> does not provide \\\"higher availability\\\"<br>Not C - \\\"Multi-AZ cluster\\\" does not support Oracle engine<br><br>Thus D. Question does not mention that the app would use Oracle-specific features; we're also not asked to minimize application changes. Ideal solution from AWS point of view is to move from Oracle to Aurora.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>but Aurora doesnt support oracle db though</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1290756,
          "date": "Sat 28 Sep 2024 21:29",
          "username": "XXXXXlNN",
          "content": "but Aurora doesnt support oracle db though",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1094969,
          "date": "Tue 12 Dec 2023 22:16",
          "username": "aws94",
          "content": "i am sure just look here<br>https://aws.amazon.com/ar/blogs/aws/amazon-rds-multi-az-db-cluster/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>sorry this is the right link:<br>https://aws.amazon.com/ar/blogs/aws/multi-az-option-for-amazon-rds-oracle/</li><li>\\\"Multi-AZ cluster (!)\\\" does not support Oracle. Multi-AZ instance would.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1094971,
          "date": "Tue 12 Dec 2023 22:20",
          "username": "aws94",
          "content": "sorry this is the right link:<br>https://aws.amazon.com/ar/blogs/aws/multi-az-option-for-amazon-rds-oracle/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1111284,
          "date": "Mon 01 Jan 2024 16:01",
          "username": "pentium75",
          "content": "\\\"Multi-AZ cluster (!)\\\" does not support Oracle. Multi-AZ instance would.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1067826,
          "date": "Sat 11 Nov 2023 13:37",
          "username": "EEK2k",
          "content": "It should be C.Oracle DB is supported in RDS Multi-AZ with one standby for HA. https://aws.amazon.com/rds/features/multi-az/.Additionally, a reader instance/replica could be added to RDS Multi-AZ with one standby setup to offload the read requests.Aurora is only supported MySQL and Postgres compatible DB so \\\"D\\\" is out.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://aws.amazon.com/rds/features/multi-az/ gives:Amazon RDS Multi-AZ is available for RDS for PostgreSQL, RDS for MySQL, RDS for MariaDB, RDS for SQL Server, RDS for Oracle, and RDS for Db2. Amazon RDS Multi-AZ with two readable standbys is available for RDS for PostgreSQL and RDS for MySQL.<br>So no reader instance.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1083763,
          "date": "Wed 29 Nov 2023 20:16",
          "username": "1rob",
          "content": "https://aws.amazon.com/rds/features/multi-az/ gives:Amazon RDS Multi-AZ is available for RDS for PostgreSQL, RDS for MySQL, RDS for MariaDB, RDS for SQL Server, RDS for Oracle, and RDS for Db2. Amazon RDS Multi-AZ with two readable standbys is available for RDS for PostgreSQL and RDS for MySQL.<br>So no reader instance.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1063941,
          "date": "Mon 06 Nov 2023 15:44",
          "username": "potomac",
          "content": "Multi-AZ DB clusters are NOT available with the following engines:<br>RDS for MariaDB<br>RDS for Oracle<br>RDS for SQL Server<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RDS_Fea_Regions_DB-eng.Feature.MultiAZDBClusters.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1056486,
          "date": "Sun 29 Oct 2023 01:21",
          "username": "danielmakita",
          "content": "It is C. Aurora database doesn't support Oracle.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>as pentium75 had pointed out, the stem does not mention that the app would use Oracle-specific features; we're also not asked to minimize application changes. Ideal solution from AWS point of view is to move from Oracle to Aurora.<br></li><li>You can use Aurora instead of Oracle. There are tutorials how to migrate Oracle to Aurora. On top C is not supported. The is not Multi-AZ DB CLUSTER for Oracle.</li><li>It is D</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1316576,
          "date": "Sat 23 Nov 2024 06:46",
          "username": "JA2018",
          "content": "as pentium75 had pointed out, the stem does not mention that the app would use Oracle-specific features; we're also not asked to minimize application changes. Ideal solution from AWS point of view is to move from Oracle to Aurora.<br>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1056870,
          "date": "Sun 29 Oct 2023 15:18",
          "username": "wsdasdasdqwdaw",
          "content": "You can use Aurora instead of Oracle. There are tutorials how to migrate Oracle to Aurora. On top C is not supported. The is not Multi-AZ DB CLUSTER for Oracle.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It is D</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1056871,
          "date": "Sun 29 Oct 2023 15:18",
          "username": "wsdasdasdqwdaw",
          "content": "It is D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1050086,
          "date": "Sun 22 Oct 2023 04:13",
          "username": "thanhnv142",
          "content": "None options seems valid. Not C because it is not supported. But not D as well. RDS is not Aurora. They are two separate services. Additionally, In multi AZ instance deployment, it only provides fault tolerance, not High avai.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 994443,
          "date": "Wed 30 Aug 2023 21:59",
          "username": "Nikki013",
          "content": "Multi-AZ Cluster does not support Oracle as engine:<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RDS_Fea_Regions_DB-eng.Feature.MultiAZDBClusters.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 992648,
          "date": "Tue 29 Aug 2023 00:40",
          "username": "Bennyboy789",
          "content": "D is my choice.<br>Multi-AZ DB cluster does not support Oracle DB.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 990650,
          "date": "Sat 26 Aug 2023 12:38",
          "username": "rjbihari",
          "content": "Option C is correct one .<br>As there is no option for 'Aurora(Oracle Compatible)'.so this kick out D from race.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#541",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to build a web application on AWS. Client access requests to the website are not predictable and can be idle for a long time. Only customers who have paid a subscription fee can have the ability to sign in and use the web application.<br><br>Which combination of steps will meet these requirements MOST cost-effectively? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#541",
          "answers": [
            {
              "choice": "<p>Create an AWS Lambda function to retrieve user information from Amazon DynamoDB. Create an Amazon API Gateway endpoint to accept RESTful APIs. Send the API calls to the Lambda function.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Elastic Container Service (Amazon ECS) service behind an Application Load Balancer to retrieve user information from Amazon RDS. Create an Amazon API Gateway endpoint to accept RESTful APIs. Send the API calls to the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Cognito user pool to authenticate users.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Cognito identity pool to authenticate users.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Amplify to serve the frontend web content with HTML, CSS, and JS. Use an integrated Amazon CloudFront configuration.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon S3 static web hosting with PHP, CSS, and JS. Use Amazon CloudFront to serve the frontend web content.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 541 discussion",
      "discusstion": [
        {
          "id": 995330,
          "date": "Thu 31 Aug 2023 19:09",
          "username": "manOfThePeople",
          "content": "If in doubt between E or F. S3 doesn't support server-side scripts, PHP is a server-side script.<br>The answer is ACE.<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 933067,
          "date": "Sun 25 Jun 2023 02:49",
          "username": "msdnpro",
          "content": "Option B (Amazon ECS) is not the best option since the website \\\"can be idle for a long time\\\", so Lambda (Option A) is a more cost-effective choice.<br><br>Option D is incorrect because User pools are for authentication (identity verification) while Identity pools are for authorization (access control).<br><br>Option F is wrong because S3 web hosting only supports static web files like HTML/CSS, and does not support PHP or JavaScript.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://aws.amazon.com/getting-started/projects/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/module-1/?nc1h_ls</li></ul>",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 933649,
          "date": "Sun 25 Jun 2023 15:38",
          "username": "0628atv",
          "content": "https://aws.amazon.com/getting-started/projects/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/module-1/?nc1h_ls",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1236679,
          "date": "Tue 25 Jun 2024 05:18",
          "username": "Gape4",
          "content": "I will go for A C E",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 1119107,
          "date": "Wed 10 Jan 2024 23:37",
          "username": "awsgeek75",
          "content": "A: App may be idle for long time so Lambda is perfect (charge per invocation)<br>C: Cognito user pool for user auth<br>E: Amplify is low code web dev tool<br><br>B: Wrong, too much cost when idle<br>D: Identity pool is session management/identification. Does not help with auth.<br>F: S3 + PHP doesn't work also no security",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 1089085,
          "date": "Wed 06 Dec 2023 09:35",
          "username": "rcptryk",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html<br>S3 doesn't support server-side scripting",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 1063948,
          "date": "Mon 06 Nov 2023 15:49",
          "username": "potomac",
          "content": "User Poolauthentication<br>Identity Poolauthorization",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 1050120,
          "date": "Sun 22 Oct 2023 04:28",
          "username": "thanhnv142",
          "content": "A D F:<br>A: for hosting the dynamic content of the app. Pay as execution<br>D: for granting temporary privilege access to users who has paid a fee.<br>F: for hosting the static content of the app<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>There is no static content in this web application so F is wrong. You cannot host PHP on S3 also so it is just wrong.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1126981,
          "date": "Fri 19 Jan 2024 22:36",
          "username": "awsgeek75",
          "content": "There is no static content in this web application so F is wrong. You cannot host PHP on S3 also so it is just wrong.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1009126,
          "date": "Sat 16 Sep 2023 14:55",
          "username": "kwang312",
          "content": "ACE is correct answer",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 986849,
          "date": "Mon 21 Aug 2023 20:44",
          "username": "Guru4Cloud",
          "content": "C) Create an Amazon Cognito user pool to authenticate users.<br><br>E) Use AWS Amplify to serve the frontend web content with HTML, CSS, and JS. Use an integrated CloudFront configuration.<br><br>F) Use Amazon S3 static web hosting with PHP, CSS, and JS. Use Amazon CloudFront to serve the frontend web content.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>There is no static content in this web application so F is wrong. You cannot host PHP on S3 also so it is just wrong.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CEF"
        },
        {
          "id": 1126982,
          "date": "Fri 19 Jan 2024 22:36",
          "username": "awsgeek75",
          "content": "There is no static content in this web application so F is wrong. You cannot host PHP on S3 also so it is just wrong.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 963333,
          "date": "Wed 26 Jul 2023 06:14",
          "username": "TariqKipkemei",
          "content": "Build a web applicationAWS Amplify<br>Sign in usersAmazon Cognito user pool<br>Traffic can be idle for a long timeAWS Lambda<br><br>Amazon S3 does not support server-side scripting such as PHP, JSP, or ASP.NET.<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html?icmpiddocs_amazons3_console#:~:textwebsite%20relies%20on-,server%2Dside,-processing%2C%20including%20server<br>Traffic can be idle for a long timeAWS Lambda",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 953244,
          "date": "Sun 16 Jul 2023 13:05",
          "username": "james2033",
          "content": "Use exclusion method: No need for Container (no need run all time), remove B. PHP cannot run with static Amazon S3, remove F.<br>Use selection method: Idle for sometime, choose AWS Lambda, choose A. 'Amazon Cognito is an identity platform for web and mobile apps.'  (https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html ), choose C. Create an identity pool https://docs.aws.amazon.com/cognito/latest/developerguide/tutorial-create-identity-pool.html . AWS Amplify https://aws.amazon.com/amplify/ for build full-stack web-app in hours.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 950897,
          "date": "Thu 13 Jul 2023 19:25",
          "username": "baba365",
          "content": "Ans: ACF<br><br>use AWS SDK for PHP/JS with S3<br><br>https://docs.aws.amazon.com/sdk-for-php/v3/developer-guide/php_s3_code_examples.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>did you actually read the link or just copy the first link from google here? the sdk is intended for usage in a php application. it does not say anything about php support in a s3 bucket</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1057400,
          "date": "Mon 30 Oct 2023 07:38",
          "username": "unbendable",
          "content": "did you actually read the link or just copy the first link from google here? the sdk is intended for usage in a php application. it does not say anything about php support in a s3 bucket",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 947383,
          "date": "Sun 09 Jul 2023 17:26",
          "username": "Zox42",
          "content": "Answer is ACE",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 946504,
          "date": "Sat 08 Jul 2023 15:11",
          "username": "jaydesai8",
          "content": "Lambda serverless<br>User PoolFor user authentication<br>Amplifyhosting web/mobile apps",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 934143,
          "date": "Mon 26 Jun 2023 09:00",
          "username": "live_reply_developers",
          "content": "S3 doesn't support PHP as stated in answer F.<br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 934138,
          "date": "Mon 26 Jun 2023 08:57",
          "username": "wRhlH",
          "content": "I don't think S3 can handle anything dynamic such as PHP. So I go for ACE",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 930592,
          "date": "Thu 22 Jun 2023 15:31",
          "username": "antropaws",
          "content": "ACF no doubt. Check the difference between user pools and identity pools.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACF"
        }
      ]
    },
    {
      "question_id": "#542",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A media company uses an Amazon CloudFront distribution to deliver content over the internet. The company wants only premium customers to have access to the media streams and file content. The company stores all content in an Amazon S3 bucket. The company also delivers content on demand to customers for a specific purpose, such as movie rentals or music downloads.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#542",
          "answers": [
            {
              "choice": "<p>Generate and provide S3 signed cookies to premium customers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Generate and provide CloudFront signed URLs to premium customers.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use origin access control (OAC) to limit the access of non-premium customers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Generate and activate field-level encryption to block non-premium customers.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 542 discussion",
      "discusstion": [
        {
          "id": 1154849,
          "date": "Tue 20 Aug 2024 16:49",
          "username": "NayeraB",
          "content": "This question page is filled with premium customers I just can't",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 1119113,
          "date": "Wed 10 Jul 2024 22:42",
          "username": "awsgeek75",
          "content": "CloudFront Signed URL with Custom Policy are exactly for this.<br>A: Nope, cookies don't help as they don't restrict URL<br>C: Wrong. OAC for non-premium customers, how is that even possible without any details here?<br>D: Field encryption, while good idea, does not help restricting the content by customer",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1111296,
          "date": "Mon 01 Jul 2024 15:10",
          "username": "pentium75",
          "content": "Authentication is done by Cloudfront, thus B",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1109361,
          "date": "Sun 30 Jun 2024 03:17",
          "username": "ferdzcruz",
          "content": "Content on demandCloudFront. B",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 986840,
          "date": "Wed 21 Feb 2024 21:32",
          "username": "Guru4Cloud",
          "content": "Generate and provide CloudFront signed URLs to premium customers.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 963341,
          "date": "Fri 26 Jan 2024 07:25",
          "username": "TariqKipkemei",
          "content": "Use CloudFront signed URLs or signed cookies to restrict access to documents, business data, media streams, or content that is intended for selected users, for example, users who have paid a fee. <br><br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html#:~:textCloudFront%20signed%20URLs",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 953268,
          "date": "Tue 16 Jan 2024 14:41",
          "username": "james2033",
          "content": "See https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-signed-urls.html#private-content-how-signed-urls-work",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 934924,
          "date": "Wed 27 Dec 2023 03:52",
          "username": "haoAWS",
          "content": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html<br>Notice that A is not correct because it should be CloudFront signed URL,not S3.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 930600,
          "date": "Fri 22 Dec 2023 16:36",
          "username": "antropaws",
          "content": "Why not C?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>OAC requires the consumers to have an IAM role with access to the S3 content, this is not what we're after here.</li><li>https://aws.amazon.com/blogs/networking-and-content-delivery/amazon-cloudfront-introduces-origin-access-control-oac/</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1111293,
          "date": "Mon 01 Jul 2024 15:09",
          "username": "pentium75",
          "content": "OAC requires the consumers to have an IAM role with access to the S3 content, this is not what we're after here.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 930601,
          "date": "Fri 22 Dec 2023 16:36",
          "username": "antropaws",
          "content": "https://aws.amazon.com/blogs/networking-and-content-delivery/amazon-cloudfront-introduces-origin-access-control-oac/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 917586,
          "date": "Thu 07 Dec 2023 23:19",
          "username": "alexandercamachop",
          "content": "Signed URLs<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Then why A is incorrect?</li><li>Because Authentication is done by Cloudfront, not S3.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 934923,
          "date": "Wed 27 Dec 2023 03:51",
          "username": "haoAWS",
          "content": "Then why A is incorrect?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Because Authentication is done by Cloudfront, not S3.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1111295,
          "date": "Mon 01 Jul 2024 15:09",
          "username": "pentium75",
          "content": "Because Authentication is done by Cloudfront, not S3.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#543",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs Amazon EC2 instances in multiple AWS accounts that are individually bled. The company recently purchased a Savings Pian. Because of changes in the company's business requirements, the company has decommissioned a large number of EC2 instances. The company wants to use its Savings Plan discounts on its other AWS accounts.<br><br>Which combination of steps will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#543",
          "answers": [
            {
              "choice": "<p>From the AWS Account Management Console of the management account, turn on discount sharing from the billing preferences section.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>From the AWS Account Management Console of the account that purchased the existing Savings Plan, turn on discount sharing from the billing preferences section. Include all accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>From the AWS Organizations management account, use AWS Resource Access Manager (AWS RAM) to share the Savings Plan with other accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an organization in AWS Organizations in a new payer account. Invite the other AWS accounts to join the organization from the management account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an organization in AWS Organizations in the existing AWS account with the existing EC2 instances and Savings Plan. Invite the other AWS accounts to join the organization from the management account.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 543 discussion",
      "discusstion": [
        {
          "id": 948405,
          "date": "Tue 11 Jul 2023 00:07",
          "username": "Aigerim2010",
          "content": "i had this question today",
          "upvote_count": "20",
          "selected_answers": ""
        },
        {
          "id": 994451,
          "date": "Wed 30 Aug 2023 22:37",
          "username": "Nikki013",
          "content": "It is not recommended to have workload on the management account.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>confirm will fail the AWS WAR process</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1316693,
          "date": "Sat 23 Nov 2024 15:39",
          "username": "JA2018",
          "content": "confirm will fail the AWS WAR process",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1334687,
          "date": "Tue 31 Dec 2024 09:05",
          "username": "MaxMingxing",
          "content": "Answer from ChatGPT",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1326289,
          "date": "Sat 14 Dec 2024 01:55",
          "username": "FlyingHawk",
          "content": "If the organization is already created, I am feeling A and B are the right one as \\\"To share an Reserved Instance or Savings Plans discount with an account, both accounts must have sharing activated.\\\"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ri-turn-off.html.If no AWS organization was there, then you need to create an organization, then invite others join, D. then A andB.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1119115,
          "date": "Wed 10 Jan 2024 23:50",
          "username": "awsgeek75",
          "content": "For me, E makes no sense as the discount is with a new payer and cannot be transferred to an existing account unless customer service is involved.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Also, \\\"A company runs Amazon EC2 instances in multiple AWS accounts that are individually bled\\\"<br><br>It's not bled, it is \\\"billed\\\"</li><li>ROTFL :P</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1119116,
          "date": "Wed 10 Jan 2024 23:51",
          "username": "awsgeek75",
          "content": "Also, \\\"A company runs Amazon EC2 instances in multiple AWS accounts that are individually bled\\\"<br><br>It's not bled, it is \\\"billed\\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>ROTFL :P</li></ul>",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1316692,
          "date": "Sat 23 Nov 2024 15:36",
          "username": "JA2018",
          "content": "ROTFL :P",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1111310,
          "date": "Mon 01 Jan 2024 16:25",
          "username": "pentium75",
          "content": "Organization should be created by a new account that is reserved for management. Thus D, followed by A (discount sharing must be enabled in the management account).",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 998750,
          "date": "Mon 04 Sep 2023 20:03",
          "username": "ErnShm",
          "content": "AE<br>https://repost.aws/questions/QUQoJuQLNOTDiyEuCLARlBFQ/transfer-savings-plan-across-organizations#:~:textAWS%20Support%20can%20transfer%20Savings%20Plans%20from%20the%20management%20account%20to%20a%20member%20account%20or%20from%20a%20member%20account%20to%20the%20management%20account%20within%20a%20single%20Organization%20with%20an%20AWS%20Support%20Case.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 990819,
          "date": "Sat 26 Aug 2023 15:48",
          "username": "lemur88",
          "content": "Not E - it mentions using an account with existing EC2s as the management account, which goes against the best practice for a management account<br><br>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_best-practices_mgmt-acct.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 986834,
          "date": "Mon 21 Aug 2023 20:27",
          "username": "Guru4Cloud",
          "content": "AE is best",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 963346,
          "date": "Wed 26 Jul 2023 06:30",
          "username": "TariqKipkemei",
          "content": "AE is best",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 953298,
          "date": "Sun 16 Jul 2023 14:24",
          "username": "james2033",
          "content": "- B is not accepted, because \\\"include all accounts\\\", remove B.<br>- D has \\\"Create an organization in AWS Organization in a new payer acocunt\\\", it is wrong, remove D.<br>- at C: AWS Resource Access Manager (AWS RAM) https://aws.amazon.com/ram/ it is for security, not for billing. Remove C.<br>Has A, E remain, and choosed.<br><br>A. \\\"turn on discount sharing\\\" is ok. This case: Has discount for many EC2 instances in one account, then want to share with other user. At E, create Organization, then share.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>What is the problem with \\\"include all accounts\\\"?</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1111309,
          "date": "Mon 01 Jan 2024 16:21",
          "username": "pentium75",
          "content": "What is the problem with \\\"include all accounts\\\"?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 930606,
          "date": "Thu 22 Jun 2023 15:40",
          "username": "antropaws",
          "content": "I vote AE.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 928700,
          "date": "Tue 20 Jun 2023 20:45",
          "username": "MrAWSAssociate",
          "content": "AE are correct !",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 923393,
          "date": "Wed 14 Jun 2023 18:31",
          "username": "oras2023",
          "content": "It's not good practice to create a payer account with any workload so it must be D.<br>By the reason that we need Organizations for sharing, then we need to turn on its from our PAYER account. (all sub-accounts start share discounts)<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>changed to AD</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 923396,
          "date": "Wed 14 Jun 2023 18:35",
          "username": "oras2023",
          "content": "changed to AD",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 921456,
          "date": "Mon 12 Jun 2023 14:40",
          "username": "maver144",
          "content": "@alexandercamachop it is AE. I believe its just typo. RAM is not needed anyhow.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You are right<br>https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ri-turn-off.html</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 923400,
          "date": "Wed 14 Jun 2023 18:41",
          "username": "oras2023",
          "content": "You are right<br>https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ri-turn-off.html",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 917588,
          "date": "Wed 07 Jun 2023 22:21",
          "username": "alexandercamachop",
          "content": "C & E for sure.<br>In order to share savings plans, we need an organization.<br>Create that organization first and then invite everyone to it.<br>From that console share it other accounts.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CE"
        }
      ]
    },
    {
      "question_id": "#544",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail company uses a regional Amazon API Gateway API for its public REST APIs. The API Gateway endpoint is a custom domain name that points to an Amazon Route 53 alias record. A solutions architect needs to create a solution that has minimal effects on customers and minimal data loss to release the new version of APIs.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#544",
          "answers": [
            {
              "choice": "<p>Create a canary release deployment stage for API Gateway. Deploy the latest API version. Point an appropriate percentage of traffic to the canary stage. After API verification, promote the canary stage to the production stage.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new API Gateway endpoint with a new version of the API in OpenAPI YAML file format. Use the import-to-update operation in merge mode into the API in API Gateway. Deploy the new version of the API to the production stage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new API Gateway endpoint with a new version of the API in OpenAPI JSON file format. Use the import-to-update operation in overwrite mode into the API in API Gateway. Deploy the new version of the API to the production stage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new API Gateway endpoint with new versions of the API definitions. Create a custom domain name for the new API Gateway API. Point the Route 53 alias record to the new API Gateway API custom domain name.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 544 discussion",
      "discusstion": [
        {
          "id": 970741,
          "date": "Thu 03 Aug 2023 06:39",
          "username": "AudreyNguyenHN",
          "content": "We made it all the way here. Good luck everyone!",
          "upvote_count": "18",
          "selected_answers": ""
        },
        {
          "id": 950988,
          "date": "Thu 13 Jul 2023 23:00",
          "username": "dddddddddddww12",
          "content": "what are the total number of questions this package has as on 14 July 2023 , is it 544 or 551 ?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>August 2024 - 981 questions :'(</li><li>March 2024 its 825 questions. Constantly adding.<br>Doe ur question, ExamTopic always shows a few more question in listing compared to actual number</li><li>It's 20th of Feb 2024, and it's 798 (it says 804 at the top I donno why tho)</li></ul>",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 1267962,
          "date": "Sun 18 Aug 2024 09:14",
          "username": "MrAliMohsan",
          "content": "August 2024 - 981 questions :'(",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1181647,
          "date": "Sun 24 Mar 2024 14:58",
          "username": "Faridtnx",
          "content": "March 2024 its 825 questions. Constantly adding.<br>Doe ur question, ExamTopic always shows a few more question in listing compared to actual number",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1154853,
          "date": "Tue 20 Feb 2024 18:01",
          "username": "NayeraB",
          "content": "It's 20th of Feb 2024, and it's 798 (it says 804 at the top I donno why tho)",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1322516,
          "date": "Thu 05 Dec 2024 21:33",
          "username": "rosanna",
          "content": "where do you guys get to know the answer to these things? I study from Stephan's content but lots of topics are uncovered, where am I supposed to find all the exam content in one place?",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1119118,
          "date": "Wed 10 Jan 2024 23:52",
          "username": "awsgeek75",
          "content": "https://docs.aws.amazon.com/apigateway/latest/developerguide/canary-release.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1063967,
          "date": "Mon 06 Nov 2023 16:09",
          "username": "potomac",
          "content": "In a canary release deployment, total API traffic is separated at random into a production release and a canary release with a pre-configured ratio. Typically, the canary release receives a small percentage of API traffic and the production release takes up the rest. The updated API features are only visible to API traffic through the canary. You can adjust the canary traffic percentage to optimize test coverage or performance.<br><br>https://docs.aws.amazon.com/apigateway/latest/developerguide/canary-release.html",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 986830,
          "date": "Mon 21 Aug 2023 20:22",
          "username": "Guru4Cloud",
          "content": "Using a canary release deployment allows incremental rollout of the new API version to a percentage of traffic. This minimizes impact on customers and potential data loss during the release.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 963348,
          "date": "Wed 26 Jul 2023 06:33",
          "username": "TariqKipkemei",
          "content": "Minimal effects on customers and minimal data lossCanary deployment",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 953309,
          "date": "Sun 16 Jul 2023 14:32",
          "username": "james2033",
          "content": "Key word \\\"canary release\\\". See this term in See: https://www.jetbrains.com/teamcity/ci-cd-guide/concepts/canary-release/and/or https://martinfowler.com/bliki/CanaryRelease.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 926462,
          "date": "Sun 18 Jun 2023 08:12",
          "username": "Abrar2022",
          "content": "keyword: \\\"latest versions on an api\\\"<br><br>Canary release is a software development strategy in which a \\\"new version of an API\\\" (as well as other software) is deployed for testing purposes.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 920809,
          "date": "Sun 11 Jun 2023 17:20",
          "username": "jkhan2405",
          "content": "It's A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 917604,
          "date": "Wed 07 Jun 2023 22:46",
          "username": "alexandercamachop",
          "content": "A. Create a canary release deployment stage for API Gateway. Deploy the latest API version. Point an appropriate percentage of traffic to the canary stage. After API verification, promote the canary stage to the production stage.<br><br>Canary release meaning only certain percentage of the users.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#545",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to direct its users to a backup static error page if the company's primary website is unavailable. The primary website's DNS records are hosted in Amazon Route 53. The domain is pointing to an Application Load Balancer (ALB). The company needs a solution that minimizes changes and infrastructure overhead.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#545",
          "answers": [
            {
              "choice": "<p>Update the Route 53 records to use a latency routing policy. Add a static error page that is hosted in an Amazon S3 bucket to the records so that the traffic is sent to the most responsive endpoints.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up a Route 53 active-passive failover configuration. Direct traffic to a static error page that is hosted in an Amazon S3 bucket when Route 53 health checks determine that the ALB endpoint is unhealthy.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Set up a Route 53 active-active configuration with the ALB and an Amazon EC2 instance that hosts a static error page as endpoints. Configure Route 53 to send requests to the instance only if the health checks fail for the ALB.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Update the Route 53 records to use a multivalue answer routing policy. Create a health check. Direct traffic to the website if the health check passes. Direct traffic to a static error page that is hosted in Amazon S3 if the health check does not pass.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 545 discussion",
      "discusstion": [
        {
          "id": 1073083,
          "date": "Fri 17 Nov 2023 08:32",
          "username": "TariqKipkemei",
          "content": "Set up a Route 53 active-passive failover configuration. Direct traffic to a static error page that is hosted in an Amazon S3 bucket when Route 53 health checks determine that the ALB endpoint is unhealthy.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 997006,
          "date": "Sat 02 Sep 2023 18:45",
          "username": "ssa03",
          "content": "B is correct",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1309610,
          "date": "Sun 10 Nov 2024 21:23",
          "username": "Danilus",
          "content": "key -minimizes changes and infrastructure overhead<br>key- backup static error page<br>Option B is the appropriate solution because it sets up automatic failover to an alternative endpoint (the static error page in S3) when the ALB becomes unavailable. Option D is not viable as it does not implement a true failover mechanism and may continue to direct traffic to an unhealthy ALB.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 986825,
          "date": "Mon 21 Aug 2023 20:18",
          "username": "Guru4Cloud",
          "content": "Setting up a Route 53 active-passive failover configuration with the ALB as the primary endpoint and an Amazon S3 static website as the passive endpoint meets the requirements with minimal overhead.<br><br>Route 53 health checks can monitor the ALB health. If the ALB becomes unhealthy, traffic will automatically failover to the S3 static website. This provides automatic failover with minimal configuration changes<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Sorry. I mean B</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 986826,
          "date": "Mon 21 Aug 2023 20:18",
          "username": "Guru4Cloud",
          "content": "Sorry. I mean B",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 975126,
          "date": "Tue 08 Aug 2023 04:50",
          "username": "Nirav1112",
          "content": "B is correct",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 971128,
          "date": "Thu 03 Aug 2023 15:09",
          "username": "mrsoa",
          "content": "B seems correct",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 968960,
          "date": "Tue 01 Aug 2023 12:45",
          "username": "Bmaster",
          "content": "B is correct..<br><br>https://repost.aws/knowledge-center/fail-over-s3-r53<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Nice link find!</li></ul>",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1119121,
          "date": "Wed 10 Jan 2024 23:55",
          "username": "awsgeek75",
          "content": "Nice link find!",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#546",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A recent analysis of a company's IT expenses highlights the need to reduce backup costs. The company's chief information officer wants to simplify the on-premises backup infrastructure and reduce costs by eliminating the use of physical backup tapes. The company must preserve the existing investment in the on-premises backup applications and workflows.<br><br>What should a solutions architect recommend?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#546",
          "answers": [
            {
              "choice": "<p>Set up AWS Storage Gateway to connect with the backup applications using the NFS interface.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up an Amazon EFS file system that connects with the backup applications using the NFS interface.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up an Amazon EFS file system that connects with the backup applications using the iSCSI interface.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up AWS Storage Gateway to connect with the backup applications using the iSCSI-virtual tape library (VTL) interface.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 546 discussion",
      "discusstion": [
        {
          "id": 1073090,
          "date": "Fri 17 May 2024 07:53",
          "username": "TariqKipkemei",
          "content": "Use Tape Gateway to replace physical tapes on premises with virtual tapes on AWS=E2=80=94reducing your data storage costs without changing your tape-based backup workflows. Tape Gateway supports all leading backup applications and caches virtual tapes on premises for low-latency data access. It compresses your tape data, encrypts it, and stores it in a virtual tape library in Amazon Simple Storage Service (Amazon S3). From there, you can transfer it to either Amazon S3 Glacier Flexible Retrieval or Amazon S3 Glacier Deep Archive to help minimize your long-term storage costs.<br><br>https://aws.amazon.com/storagegateway/vtl/#:~:textUse-,Tape%20Gateway,-to%20replace%20physical",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1119125,
          "date": "Wed 10 Jul 2024 22:58",
          "username": "awsgeek75",
          "content": "Tape... lol<br><br>The company must preserve it's existing investment so they want to keep using existing applications. This means EFS won't work. and NFS may not be compatible. VTL is the only thing that may be compatible with an application workflow that backups to tapes.<br><br>Who the hell comes up with these questions!",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1047711,
          "date": "Fri 19 Apr 2024 10:35",
          "username": "Nisarg2121",
          "content": "Tape Gateway is use for attache with app.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1041212,
          "date": "Fri 12 Apr 2024 01:01",
          "username": "gouranga45",
          "content": "Option says it all",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1040840,
          "date": "Thu 11 Apr 2024 17:52",
          "username": "Po_chih",
          "content": "Tape Gateway enables you to replace using physical tapes on premises with virtual tapes in AWS without changing existing backup workflows. Tape Gateway supports all leading backup applications and caches virtual tapes on premises for low-latency data access. Tape Gateway encrypts data between the gateway and AWS for secure data transfer, and compresses data and transitions virtual tapes between Amazon S3 and Amazon S3 Glacier Flexible Retrieval, or Amazon S3 Glacier Deep Archive, to minimize storage costs.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 997005,
          "date": "Sat 02 Mar 2024 19:45",
          "username": "ssa03",
          "content": "https://aws.amazon.com/storagegateway/vtl/?nc1h_ls",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 986819,
          "date": "Wed 21 Feb 2024 21:12",
          "username": "Guru4Cloud",
          "content": "Set up AWS Storage Gateway to connect with the backup applications using the iSCSI-virtual tape library (VTL) interface.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 968972,
          "date": "Thu 01 Feb 2024 13:57",
          "username": "Bmaster",
          "content": "D is correct<br><br>https://aws.amazon.com/storagegateway/vtl/?nc1h_ls",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#547",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has data collection sensors at different locations. The data collection sensors stream a high volume of data to the company. The company wants to design a platform on AWS to ingest and process high-volume streaming data. The solution must be scalable and support data collection in near real time. The company must store the data in Amazon S3 for future reporting.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#547",
          "answers": [
            {
              "choice": "<p>Use Amazon Kinesis Data Firehose to deliver streaming data to Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Glue to deliver streaming data to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Lambda to deliver streaming data and store the data to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Database Migration Service (AWS DMS) to deliver streaming data to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 547 discussion",
      "discusstion": [
        {
          "id": 1239423,
          "date": "Sat 29 Jun 2024 23:06",
          "username": "emakid",
          "content": "Amazon Kinesis Data Firehose is a fully managed service for delivering real-time streaming data to destinations such as Amazon S3, Amazon Redshift, Amazon Elasticsearch Service, and Splunk. It requires minimal setup and maintenance, automatically scales to match the throughput of your data, and offers near real-time data delivery with minimal operational overhead.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1119128,
          "date": "Thu 11 Jan 2024 00:01",
          "username": "awsgeek75",
          "content": "High volume streaming dataKinesis<br>B: Glue is for ETL (to S3 is ok) but not for streaming<br>C: Lambda more overhead<br>D: Streaming ! Data migration",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1111318,
          "date": "Mon 01 Jan 2024 16:37",
          "username": "pentium75",
          "content": "sensor dataKinesis",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1073093,
          "date": "Fri 17 Nov 2023 09:04",
          "username": "TariqKipkemei",
          "content": "Amazon Kinesis Data Firehose: Capture, transform, and load data streams into AWS data stores (S3) in near real-time.<br><br>https://aws.amazon.com/pm/kinesis/?gclidCjwKCAiAu9yqBhBmEiwAHTx5px9z182o0HBEX0BGXU7VeOCOdNpkJMxgbSfvcHlNKN4NHVnbEa0Y1xoCuU0QAvD_BwE&trk239a97c0-9c5d-42a5-ac65-7381b62f3756&sc_channelps&ef_idCjwKCAiAu9yqBhBmEiwAHTx5px9z182o0HBEX0BGXU7VeOCOdNpkJMxgbSfvcHlNKN4NHVnbEa0Y1xoCuU0QAvD_BwE:G:s&s_kwcidAL!4422!3!651612444428!e!!g!!kinesis%20firehose!19836376048!149982297311#:~:textKinesis%20Data%20Firehose-,Capture%2C,-transform%2C%20and%20load",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1063970,
          "date": "Mon 06 Nov 2023 16:14",
          "username": "potomac",
          "content": "A for sure",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 997007,
          "date": "Sat 02 Sep 2023 18:46",
          "username": "ssa03",
          "content": "Correct Answer: A",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 995351,
          "date": "Thu 31 Aug 2023 19:24",
          "username": "manOfThePeople",
          "content": "A is the answer, near real-timeKinesis Data Firehose.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 986818,
          "date": "Mon 21 Aug 2023 20:11",
          "username": "Guru4Cloud",
          "content": "Use Amazon Kinesis Data Firehose to deliver streaming data to Amazon S3<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>That is A</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1111315,
          "date": "Mon 01 Jan 2024 16:37",
          "username": "pentium75",
          "content": "That is A",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 981973,
          "date": "Tue 15 Aug 2023 22:27",
          "username": "bjexamprep",
          "content": "Kinesis Data Firehose is only real-time answer<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>That is A</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1111317,
          "date": "Mon 01 Jan 2024 16:37",
          "username": "pentium75",
          "content": "That is A",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 971136,
          "date": "Thu 03 Aug 2023 15:25",
          "username": "mrsoa",
          "content": "A is the correct answer",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 970926,
          "date": "Thu 03 Aug 2023 11:06",
          "username": "Deepakin96",
          "content": "KinesisNear Real Time",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 970065,
          "date": "Wed 02 Aug 2023 12:54",
          "username": "Kaiden123",
          "content": "Data collection in near real timeAmazon Kinesis Data Firehose",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 968979,
          "date": "Tue 01 Aug 2023 13:03",
          "username": "Bmaster",
          "content": "A is correct..",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#548",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has separate AWS accounts for its finance, data analytics, and development departments. Because of costs and security concerns, the company wants to control which services each AWS account can use.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#548",
          "answers": [
            {
              "choice": "<p>Use AWS Systems Manager templates to control which AWS services each department can use.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create organization units (OUs) for each department in AWS Organizations. Attach service control policies (SCPs) to the OUs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS CloudFormation to automatically provision only the AWS services that each department can use.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up a list of products in AWS Service Catalog in the AWS accounts to manage and control the usage of specific AWS services.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 548 discussion",
      "discusstion": [
        {
          "id": 1119130,
          "date": "Wed 10 Jul 2024 23:03",
          "username": "awsgeek75",
          "content": "DepartmentsOrganizational Units",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1073095,
          "date": "Fri 17 May 2024 08:10",
          "username": "TariqKipkemei",
          "content": "Create organization units (OUs) for each department in AWS Organizations. Attach service control policies (SCPs) to the OUs",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 997008,
          "date": "Sat 02 Mar 2024 19:47",
          "username": "ssa03",
          "content": "Correct Answer: B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 990834,
          "date": "Mon 26 Feb 2024 16:58",
          "username": "lemur88",
          "content": "SCPs to centralize permissioning",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 986816,
          "date": "Wed 21 Feb 2024 21:09",
          "username": "Guru4Cloud",
          "content": "Create organization units (OUs) for each department in AWS Organizations. Attach service control policies (SCPs) to the OUs.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 976976,
          "date": "Fri 09 Feb 2024 22:33",
          "username": "xyb",
          "content": "control services --> SCP",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 976695,
          "date": "Fri 09 Feb 2024 16:34",
          "username": "Ale1973",
          "content": "My rational: Scenary is \\\"A company has separate AWS accounts\\\", it is not mentioning anything about use of Organizations or needs related to centralized managment of these accounts.<br>Then, set up a list of products in AWS Service Catalog in the AWS accounts (on each AWS account) is the best way to manage and control the usage of specific AWS services.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"Separate AWS accounts\\\" just says that it's multiple accounts, it does not indicate that they are NOT connected into a organization.<br><br>Service Catalog alone does not restrict anything. You'd need to create a service in Service Catalog for everything you're allowing to use, then grant permissions on those services, and you'd need to remove other permissions from everyone. All of which is not mentioned in D. Just \\\"setting up a list of products in AWS Service Catalog in the AWS accounts\\\" will not restrict anyone from doing what he could do before.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1111323,
          "date": "Mon 01 Jul 2024 15:41",
          "username": "pentium75",
          "content": "\\\"Separate AWS accounts\\\" just says that it's multiple accounts, it does not indicate that they are NOT connected into a organization.<br><br>Service Catalog alone does not restrict anything. You'd need to create a service in Service Catalog for everything you're allowing to use, then grant permissions on those services, and you'd need to remove other permissions from everyone. All of which is not mentioned in D. Just \\\"setting up a list of products in AWS Service Catalog in the AWS accounts\\\" will not restrict anyone from doing what he could do before.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 972115,
          "date": "Sun 04 Feb 2024 14:52",
          "username": "mrsoa",
          "content": "BBBBBBBBB",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 970924,
          "date": "Sat 03 Feb 2024 12:05",
          "username": "Deepakin96",
          "content": "To control different AWS account you required AWS Organisation",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 968980,
          "date": "Thu 01 Feb 2024 14:04",
          "username": "Bmaster",
          "content": "B is correct!!!!",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#549",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has created a multi-tier application for its ecommerce website. The website uses an Application Load Balancer that resides in the public subnets, a web tier in the public subnets, and a MySQL cluster hosted on Amazon EC2 instances in the private subnets. The MySQL database needs to retrieve product catalog and pricing information that is hosted on the internet by a third-party provider. A solutions architect must devise a strategy that maximizes security without increasing operational overhead.<br><br>What should the solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#549",
          "answers": [
            {
              "choice": "<p>Deploy a NAT instance in the VPC. Route all the internet-based traffic through the NAT instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy a NAT gateway in the public subnets. Modify the private subnet route table to direct all internet-bound traffic to the NAT gateway.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an internet gateway and attach it to the VPModify the private subnet route table to direct internet-bound traffic to the internet gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a virtual private gateway and attach it to the VPC. Modify the private subnet route table to direct internet-bound traffic to the virtual private gateway.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 549 discussion",
      "discusstion": [
        {
          "id": 1119137,
          "date": "Wed 10 Jul 2024 23:07",
          "username": "awsgeek75",
          "content": "A: Probably an old question so this option is here but NAT instance is overhead<br>C: Not secure as IG opens up a lot of things<br>D: VPG connects to a service<br>B: NG is managed solution. Secure by config",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1073096,
          "date": "Fri 17 May 2024 08:11",
          "username": "TariqKipkemei",
          "content": "Deploy a NAT gateway in the public subnets. Modify the private subnet route table to direct all internet-bound traffic to the NAT gateway",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 997010,
          "date": "Sat 02 Mar 2024 19:48",
          "username": "ssa03",
          "content": "Correct Answer: B",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 986815,
          "date": "Wed 21 Feb 2024 21:08",
          "username": "Guru4Cloud",
          "content": "Deploy a NAT gateway in the public subnets. Modify the private subnet route table to direct all internet-bound traffic to the NAT gateway.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 970918,
          "date": "Sat 03 Feb 2024 11:59",
          "username": "Deepakin96",
          "content": "NAT Gateway is safe",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 968988,
          "date": "Thu 01 Feb 2024 14:10",
          "username": "Bmaster",
          "content": "B is correct",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#550",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using AWS Key Management Service (AWS KMS) keys to encrypt AWS Lambda environment variables. A solutions architect needs to ensure that the required permissions are in place to decrypt and use the environment variables.<br><br>Which steps must the solutions architect take to implement the correct permissions? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#550",
          "answers": [
            {
              "choice": "<p>Add AWS KMS permissions in the Lambda resource policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add AWS KMS permissions in the Lambda execution role.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Add AWS KMS permissions in the Lambda function policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Allow the Lambda execution role in the AWS KMS key policy.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Allow the Lambda resource policy in the AWS KMS key policy.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 550 discussion",
      "discusstion": [
        {
          "id": 986813,
          "date": "Wed 21 Feb 2024 21:05",
          "username": "Guru4Cloud",
          "content": "To decrypt environment variables encrypted with AWS KMS, Lambda needs to be granted permissions to call KMS APIs. This is done in two places:<br><br>The Lambda execution role needs kms:Decrypt and kms:GenerateDataKey permissions added. The execution role governs what AWS services the function code can access.<br>The KMS key policy needs to allow the Lambda execution role to have kms:Decrypt and kms:GenerateDataKey permissions for that specific key. This allows the execution role to use that particular key.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 1205201,
          "date": "Fri 01 Nov 2024 22:07",
          "username": "wizcloudifa",
          "content": "As per the principle of least privilege, granting permissionsrole level",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 1073100,
          "date": "Fri 17 May 2024 08:15",
          "username": "TariqKipkemei",
          "content": "Allow the Lambda execution role in the AWS KMS key policy then add AWS KMS permissions in the role.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 997012,
          "date": "Sat 02 Mar 2024 19:51",
          "username": "ssa03",
          "content": "Correct Answer: BD",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 975128,
          "date": "Thu 08 Feb 2024 06:03",
          "username": "Nirav1112",
          "content": "its B & D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 972590,
          "date": "Mon 05 Feb 2024 03:29",
          "username": "mrsoa",
          "content": "BD BD BD BD",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 970915,
          "date": "Sat 03 Feb 2024 11:56",
          "username": "Deepakin96",
          "content": "Its B and D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 968989,
          "date": "Thu 01 Feb 2024 14:11",
          "username": "Bmaster",
          "content": "My choice is B,D",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#551",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a financial application that produces reports. The reports average 50 KB in size and are stored in Amazon S3. The reports are frequently accessed during the first week after production and must be stored for several years. The reports must be retrievable within 6 hours.<br><br>Which solution meets these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#551",
          "answers": [
            {
              "choice": "<p>Use S3 Standard. Use an S3 Lifecycle rule to transition the reports to S3 Glacier after 7 days.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use S3 Standard. Use an S3 Lifecycle rule to transition the reports to S3 Standard-Infrequent Access (S3 Standard-IA) after 7 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use S3 Intelligent-Tiering. Configure S3 Intelligent-Tiering to transition the reports to S3 Standard-Infrequent Access (S3 Standard-IA) and S3 Glacier.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use S3 Standard. Use an S3 Lifecycle rule to transition the reports to S3 Glacier Deep Archive after 7 days.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 551 discussion",
      "discusstion": [
        {
          "id": 972183,
          "date": "Fri 04 Aug 2023 15:16",
          "username": "zjcorpuz",
          "content": "Answer is A<br>Amazon S3 Glacier:<br>Expedited Retrieval: Provides access to data within 1-5 minutes.<br>Standard Retrieval: Provides access to data within 3-5 hours.<br>Bulk Retrieval: Provides access to data within 5-12 hours.<br>Amazon S3 Glacier Deep Archive:<br>Standard Retrieval: Provides access to data within 12 hours.<br>Bulk Retrieval: Provides access to data within 48 hours.",
          "upvote_count": "24",
          "selected_answers": ""
        },
        {
          "id": 988667,
          "date": "Wed 23 Aug 2023 22:37",
          "username": "oayoade",
          "content": "All the \\\"....after 7 days\\\" options are wrong.<br>Before you transition objects to S3 Standard-IA or S3 One Zone-IA, you must store them for at least 30 days in Amazon S3<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-transition-general-considerations.html#:~:textMinimum%20Days%20for%20Transition%20to%20S3%20Standard%2DIA%20or%20S3%20One%20Zone%2DIA<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Objects must be stored for at least 30 days before transitioning to S3 Standard-IA or S3 One Zone-IA.<br><br>Option A is to S3 Glacier. A is correct.</li><li>After reading the document from your link, it's clear that NONE of the restrictions apply to S3 standard, but to S3 Standard IA.<br><br>A is the correct answer.</li><li>This is worth noticing! Glad I came across your comment 1 day before my test.</li><li>so Could I ask is A or C for this question? I voted for A but it seems you had the same question in the exam and it was C? Thanks! I will attend the exam soon.</li><li>the 7 days limitation is only if you want to move from s3 standart to S3 Standard-IA or S3 One Zone-IA, if you move to s3 glacier dont have this limitation, correct answer is A</li></ul>",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1323370,
          "date": "Sun 08 Dec 2024 06:17",
          "username": "LeonSauveterre",
          "content": "Objects must be stored for at least 30 days before transitioning to S3 Standard-IA or S3 One Zone-IA.<br><br>Option A is to S3 Glacier. A is correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1283944,
          "date": "Sun 15 Sep 2024 09:02",
          "username": "MatAlves",
          "content": "After reading the document from your link, it's clear that NONE of the restrictions apply to S3 standard, but to S3 Standard IA.<br><br>A is the correct answer.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 993718,
          "date": "Wed 30 Aug 2023 07:14",
          "username": "Hades2231",
          "content": "This is worth noticing! Glad I came across your comment 1 day before my test.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>so Could I ask is A or C for this question? I voted for A but it seems you had the same question in the exam and it was C? Thanks! I will attend the exam soon.</li></ul>",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1118547,
          "date": "Wed 10 Jan 2024 13:42",
          "username": "Marco_St",
          "content": "so Could I ask is A or C for this question? I voted for A but it seems you had the same question in the exam and it was C? Thanks! I will attend the exam soon.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1017821,
          "date": "Tue 26 Sep 2023 15:47",
          "username": "franbarberan",
          "content": "the 7 days limitation is only if you want to move from s3 standart to S3 Standard-IA or S3 One Zone-IA, if you move to s3 glacier dont have this limitation, correct answer is A",
          "upvote_count": "14",
          "selected_answers": ""
        },
        {
          "id": 1322507,
          "date": "Thu 05 Dec 2024 20:56",
          "username": "rosanna",
          "content": "there's a period before you can transition to any storage class (down the hierarchy) \\\"except for glacier of all types\\\" a minimum of 30 days.<br>However, when transitioning to Glacier directly there's no minimum period to wait so you can choose \\\"A\\\" safely",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1261780,
          "date": "Tue 06 Aug 2024 19:40",
          "username": "1e22522",
          "content": "Its A ya bunch of nerds",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1237800,
          "date": "Thu 27 Jun 2024 02:29",
          "username": "Gape4",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-transition-general-considerations.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1208717,
          "date": "Thu 09 May 2024 08:17",
          "username": "Linuslin",
          "content": "C is incorrect.<br>Unsupported lifecycle transitions<br>Amazon S3 does not support any of the following lifecycle transitions.<br>You can't transition from the following:<br><br>Any storage class to the S3 Standard storage class.<br>Any storage class to the Reduced Redundancy Storage (RRS) class.<br>The S3 Intelligent-Tiering storage class to the S3 Standard-IA storage class.<br>The S3 One Zone-IA storage class to the S3 Intelligent-Tiering, S3 Standard-IA, or S3 Glacier Instant Retrieval storage classes.<br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-transition-general-considerations.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1120053,
          "date": "Thu 11 Jan 2024 19:19",
          "username": "awsgeek75",
          "content": "BC are lifecycle with tiering and infrequent access which are not required here.<br>D is deep archive and can take hours to retrieve so it is not suitable<br>A is cheapest workable option",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1118550,
          "date": "Wed 10 Jan 2024 13:47",
          "username": "Marco_St",
          "content": "frequent access pattern- Standard.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1111615,
          "date": "Tue 02 Jan 2024 06:34",
          "username": "pentium75",
          "content": "Not B - More expensive than A<br>Not C - Intelligent-Tiering moves only objects of at least 128 KB<br>Not D - Glacier Deep Archive takes more than 6 hours to retrieve",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1075216,
          "date": "Mon 20 Nov 2023 08:04",
          "username": "TariqKipkemei",
          "content": "Any option with S3 Intelligent-Tiering is out, this is only required when the access patterns are unknown.<br>From the question the access patterns are well known, enough to tie the frequently accessed reports to S3 standard and transition them to S3 glacier after 7days.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1046508,
          "date": "Wed 18 Oct 2023 05:01",
          "username": "iwannabeawsgod",
          "content": "its A for me",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1027604,
          "date": "Sat 07 Oct 2023 22:06",
          "username": "Carlos_O",
          "content": "Tiene mas sentido",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1027297,
          "date": "Sat 07 Oct 2023 13:50",
          "username": "sl2man",
          "content": "Option A<br>Amazon S3 Glacier Standard Retrieval: Provides access to data within 3-5 hours.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1018726,
          "date": "Wed 27 Sep 2023 13:01",
          "username": "Ramdi1",
          "content": "most cost effective has to be glacier so A<br>With C it is using intelligence tiering which is 30 days minimum from what I have read, I may be wrong on how I read that.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1011608,
          "date": "Tue 19 Sep 2023 20:08",
          "username": "tabbyDolly",
          "content": "answer A<br>frequent access during the first week -> keeps data in s3 standard for 7 days<br>stored for several year and retrievable within 6 hours -> can be moved to s3 glacier for data archive purpose",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1003345,
          "date": "Sat 09 Sep 2023 17:41",
          "username": "anikety123",
          "content": "Its A. Data cannot be transitioned from Intelligent Tiering to Standard IA<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-transition-general-considerations.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1002609,
          "date": "Fri 08 Sep 2023 18:19",
          "username": "Mll1975",
          "content": "Check Oayoade comment, before transition, 30 days in S3 the files have to be, young padawans",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#552",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to optimize the cost of its Amazon EC2 instances. The company also needs to change the type and family of its EC2 instances every 2-3 months.<br><br>What should the company do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#552",
          "answers": [
            {
              "choice": "<p>Purchase Partial Upfront Reserved Instances for a 3-year term.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Purchase a No Upfront Compute Savings Plan for a 1-year term.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Purchase All Upfront Reserved Instances for a 1-year term.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Purchase an All Upfront EC2 Instance Savings Plan for a 1-year term.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 552 discussion",
      "discusstion": [
        {
          "id": 986798,
          "date": "Wed 21 Aug 2024 19:43",
          "username": "Guru4Cloud",
          "content": "The key considerations are:<br><br>The company needs flexibility to change EC2 instance types and families every 2-3 months. This rules out Reserved Instances which lock you into an instance type and family for 1-3 years.<br>A Compute Savings Plan allows switching instance types and families freely within the term as needed. No Upfront is more flexible than All Upfront.<br>A 1-year term balances commitment and flexibility better than a 3-year term given the company's changing needs.<br>With No Upfront, the company only pays for usage monthly without an upfront payment. This optimizes cost.",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 972830,
          "date": "Mon 05 Aug 2024 11:17",
          "username": "Kiki_Pass",
          "content": "\\\"EC2 Instance Savings Plans give you the flexibility to change your usage between instances WITHIN a family in that region. \\\"<br>https://aws.amazon.com/savingsplans/compute-pricing/",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1075218,
          "date": "Wed 20 Nov 2024 08:06",
          "username": "TariqKipkemei",
          "content": "Only Compute Savings Plan allows you to change instance family.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 979228,
          "date": "Mon 12 Aug 2024 09:58",
          "username": "avkya",
          "content": "\\\" needs to change the type and family of its EC2 instances\\\". that means B I think.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 971159,
          "date": "Sat 03 Aug 2024 15:38",
          "username": "mrsoa",
          "content": "B is the right answer",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 969020,
          "date": "Thu 01 Aug 2024 13:42",
          "username": "Bmaster",
          "content": "B is correct..<br>'EC2 Instance Savings Plans' can't change 'family'.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 968098,
          "date": "Wed 31 Jul 2024 14:28",
          "username": "Josantru",
          "content": "Correct B. <br>To change 'Family' always Compute saving plan, right?",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#553",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect needs to review a company's Amazon S3 buckets to discover personally identifiable information (PII). The company stores the PII data in the us-east-1 Region and us-west-2 Region.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#553",
          "answers": [
            {
              "choice": "<p>Configure Amazon Macie in each Region. Create a job to analyze the data that is in Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure AWS Security Hub for all Regions. Create an AWS Config rule to analyze the data that is in Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon Inspector to analyze the data that is in Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon GuardDuty to analyze the data that is in Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 553 discussion",
      "discusstion": [
        {
          "id": 986796,
          "date": "Wed 21 Feb 2024 20:37",
          "username": "Guru4Cloud",
          "content": "The key reasons are:<br><br>Amazon Macie is designed specifically for discovering and classifying sensitive data like PII in S3. This makes it the optimal service to use.<br>Macie can be enabled directly in the required Regions rather than enabling it across all Regions which is unnecessary. This minimizes overhead.<br>Macie can be set up to automatically scan the specified S3 buckets on a schedule. No need to create separate jobs.<br>Security Hub is for security monitoring across AWS accounts, not specific for PII discovery. More overhead than needed.<br>Inspector and GuardDuty are not built for PII discovery in S3 buckets. They provide broader security capabilities.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1120057,
          "date": "Thu 11 Jul 2024 18:27",
          "username": "awsgeek75",
          "content": "PIIMacie<br>Security Hub: Organisation security and logging not for PII<br>Inspector: Infra vulnerability management<br>GuardDuty: Network protection",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1075220,
          "date": "Mon 20 May 2024 07:08",
          "username": "TariqKipkemei",
          "content": "Amazon MaciePII",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 971160,
          "date": "Sat 03 Feb 2024 16:40",
          "username": "mrsoa",
          "content": "AWS MaciePII detection",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 970920,
          "date": "Sat 03 Feb 2024 12:00",
          "username": "Deepakin96",
          "content": "Amazon Macie will identify all PII",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#554",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's SAP application has a backend SQL Server database in an on-premises environment. The company wants to migrate its on-premises application and database server to AWS. The company needs an instance type that meets the high demands of its SAP database. On-premises performance data shows that both the SAP application and the database have high memory utilization.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#554",
          "answers": [
            {
              "choice": "<p>Use the compute optimized instance family for the application. Use the memory optimized instance family for the database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the storage optimized instance family for both the application and the database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the memory optimized instance family for both the application and the database.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use the high performance computing (HPC) optimized instance family for the application. Use the memory optimized instance family for the database.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 554 discussion",
      "discusstion": [
        {
          "id": 986790,
          "date": "Wed 21 Aug 2024 19:35",
          "username": "Guru4Cloud",
          "content": "Since both the app and database have high memory needs, the memory optimized family like R5 instances meet those requirements well.<br>Using the same instance family simplifies management and operations, rather than mixing instance types.<br>Compute optimized instances may not provide enough memory for the SAP app's needs.<br>Storage optimized is overkill for the database's compute and memory needs.<br>HPC is overprovisioned for the SAP app.",
          "upvote_count": "16",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 995367,
          "date": "Sat 31 Aug 2024 19:47",
          "username": "manOfThePeople",
          "content": "High memory utilizationmemory optimized.<br>C is the answer",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1323372,
          "date": "Sun 08 Dec 2024 06:23",
          "username": "LeonSauveterre",
          "content": "Why D is incorrect: HPC family is geared toward compute-heavy workloads such as simulations or scientific calculations, not appropriate for a memory-intensive application like SAP.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1075222,
          "date": "Wed 20 Nov 2024 08:10",
          "username": "TariqKipkemei",
          "content": "Use the memory optimized instance family for both the application and the database",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 973425,
          "date": "Tue 06 Aug 2024 01:25",
          "username": "mrsoa",
          "content": "I thyink its C",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#555",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an application in a VPC with public and private subnets. The VPC extends across multiple Availability Zones. The application runs on Amazon EC2 instances in private subnets. The application uses an Amazon Simple Queue Service (Amazon SQS) queue.<br><br>A solutions architect needs to design a secure solution to establish a connection between the EC2 instances and the SQS queue.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#555",
          "answers": [
            {
              "choice": "<p>Implement an interface VPC endpoint for Amazon SQS. Configure the endpoint to use the private subnets. Add to the endpoint a security group that has an inbound access rule that allows traffic from the EC2 instances that are in the private subnets.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Implement an interface VPC endpoint for Amazon SQS. Configure the endpoint to use the public subnets. Attach to the interface endpoint a VPC endpoint policy that allows access from the EC2 instances that are in the private subnets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement an interface VPC endpoint for Amazon SQS. Configure the endpoint to use the public subnets. Attach an Amazon SQS access policy to the interface VPC endpoint that allows requests from only a specified VPC endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement a gateway endpoint for Amazon SQS. Add a NAT gateway to the private subnets. Attach an IAM role to the EC2 instances that allows access to the SQS queue.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 555 discussion",
      "discusstion": [
        {
          "id": 986785,
          "date": "Wed 21 Feb 2024 20:28",
          "username": "Guru4Cloud",
          "content": "An interface VPC endpoint is a private way to connect to AWS services without having to expose your VPC to the public internet. This is the most secure way to connect to Amazon SQS from the private subnets.<br>Configuring the endpoint to use the private subnets ensures that the traffic between the EC2 instances and the SQS queue is only within the VPC. This helps to protect the traffic from being intercepted by a malicious actor.<br>Adding a security group to the endpoint that has an inbound access rule that allows traffic from the EC2 instances that are in the private subnets further restricts the traffic to only the authorized sources. This helps to prevent unauthorized access to the SQS queue.",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 969049,
          "date": "Thu 01 Feb 2024 15:10",
          "username": "Bmaster",
          "content": "A is correct.<br><br>B,C: 'Configuring endpoints to use public subnets' --> Invalid<br>D: No Gateway Endpoint for SQS.",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1120068,
          "date": "Thu 11 Jul 2024 18:36",
          "username": "awsgeek75",
          "content": "BC are using public subnets so not useful for security<br>D uses gateway endpoint which is not useful to connect to SQS<br>A: https://docs.aws.amazon.com/vpc/latest/privatelink/aws-services-privatelink-support.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Sorry, the link is wrong for A. Please ignore it!</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1126998,
          "date": "Fri 19 Jul 2024 22:32",
          "username": "awsgeek75",
          "content": "Sorry, the link is wrong for A. Please ignore it!",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1095209,
          "date": "Thu 13 Jun 2024 06:47",
          "username": "ShawnTang",
          "content": "A seems the most suitable,<br>but security group can't add to the endpoint derectly, right?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1075229,
          "date": "Mon 20 May 2024 07:24",
          "username": "TariqKipkemei",
          "content": "Answer is A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1075228,
          "date": "Mon 20 May 2024 07:23",
          "username": "TariqKipkemei",
          "content": "Interface endpoints enable connectivity to services over AWS PrivateLink. It is a collection of one or more elastic network interfaces with a private IP address that serves as an entry point for traffic destined to a supported service.<br>Implement an interface VPC endpoint for Amazon SQS. Configure the endpoint to use the private subnets. Add to the endpoint a security group that has an inbound access rule that allows traffic from the EC2 instances that are in the private subnets.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1055839,
          "date": "Sat 27 Apr 2024 23:10",
          "username": "potomac",
          "content": "A is correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 971168,
          "date": "Sat 03 Feb 2024 16:51",
          "username": "mrsoa",
          "content": "I think its A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#556",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is using an AWS CloudFormation template to deploy a three-tier web application. The web application consists of a web tier and an application tier that stores and retrieves user data in Amazon DynamoDB tables. The web and application tiers are hosted on Amazon EC2 instances, and the database tier is not publicly accessible. The application EC2 instances need to access the DynamoDB tables without exposing API credentials in the template.<br><br>What should the solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#556",
          "answers": [
            {
              "choice": "<p>Create an IAM role to read the DynamoDB tables. Associate the role with the application instances by referencing an instance profile.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM role that has the required permissions to read and write from the DynamoDB tables. Add the role to the EC2 instance profile, and associate the instance profile with the application instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use the parameter section in the AWS CloudFormation template to have the user input access and secret keys from an already-created IAM user that has the required permissions to read and write from the DynamoDB tables.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM user in the AWS CloudFormation template that has the required permissions to read and write from the DynamoDB tables. Use the GetAtt function to retrieve the access and secret keys, and pass them to the application instances through the user data.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 556 discussion",
      "discusstion": [
        {
          "id": 1130762,
          "date": "Wed 24 Jul 2024 15:04",
          "username": "upliftinghut",
          "content": "best practice is using IAM role for database access. From app to DB >need both read & write, only B meets these 2",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1111626,
          "date": "Tue 02 Jul 2024 05:53",
          "username": "pentium75",
          "content": "Application \\\"stores and retrieves\\\" data in DynamoDB while A grants only access \\\"to read\\\".",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1047790,
          "date": "Fri 19 Apr 2024 12:12",
          "username": "Nisarg2121",
          "content": "B is correct, A total wrong because \\\"read the DynamoDB tables\\\", so what about write in database.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 987628,
          "date": "Thu 22 Feb 2024 20:03",
          "username": "darekw",
          "content": "question says: ...application tier stores and retrieves user data in Amazon DynamoDB tables... so it needs read and write access<br>A) is only read access<br>B) seems to be the right answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 986782,
          "date": "Wed 21 Feb 2024 20:20",
          "username": "Guru4Cloud",
          "content": "Option B is the correct approach to meet the requirements:<br><br>Create an IAM role with permissions to access DynamoDB<br>Add the IAM role to an EC2 Instance Profile<br>Associate the Instance Profile with the application EC2 instances<br>This allows the instances to assume the IAM role to obtain temporary credentials to access DynamoDB.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 982659,
          "date": "Fri 16 Feb 2024 17:14",
          "username": "anibinaadi",
          "content": "Explanation. Both A and B seems suitable. But Option A is incorrect because it says 'Associate the role with the application instances by referencing an instance profile' . Which just only a Part of the solution.<br>In API/AWS CLI following steps are required to complete the Role-> instance profile association-> to instance.<br>1. Create an IAM Role<br>2. add-role-to-instance-profile (aws iam add-role-to-instance-profile --role-name S3Access --instance-profile-name Webserver)<br>3. associate-iam-instance-profile (aws ec2 associate-iam-instance-profile --instance-id i-123456789abcde123 --iam-instance-profile Nameadmin-role)<br>hence Option B is correct.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 978256,
          "date": "Sun 11 Feb 2024 06:48",
          "username": "DannyKang5649",
          "content": "Why \\\"No read and write\\\" ? The question clearly states that application tier STORE and RETRIEVE the data from DynamoDB. Which means write and read... I think answer should be B",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 976993,
          "date": "Fri 09 Feb 2024 23:04",
          "username": "xyb",
          "content": "https://www.examtopics.com/discussions/amazon/view/80755-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 976651,
          "date": "Fri 09 Feb 2024 15:41",
          "username": "Ale1973",
          "content": "My rationl: Option A is wrong because the scenario says \\\"stores and retrieves user data in Amazon DynamoDB tables\\\", STORES and RETRIVE, if you set a role to READ, you can write on DinamoDB database",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 973987,
          "date": "Tue 06 Feb 2024 18:49",
          "username": "mrsoa",
          "content": "AAAAAAAAA<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No because it grants only read access</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1111624,
          "date": "Tue 02 Jul 2024 05:53",
          "username": "pentium75",
          "content": "No because it grants only read access",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 973179,
          "date": "Mon 05 Feb 2024 19:41",
          "username": "kangho",
          "content": "A is correct<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No because it grants only read access</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1111623,
          "date": "Tue 02 Jul 2024 05:53",
          "username": "pentium75",
          "content": "No because it grants only read access",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#557",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect manages an analytics application. The application stores large amounts of semistructured data in an Amazon S3 bucket. The solutions architect wants to use parallel data processing to process the data more quickly. The solutions architect also wants to use information that is stored in an Amazon Redshift database to enrich the data.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#557",
          "answers": [
            {
              "choice": "<p>Use Amazon Athena to process the S3 data. Use AWS Glue with the Amazon Redshift data to enrich the S3 data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon EMR to process the S3 data. Use Amazon EMR with the Amazon Redshift data to enrich the S3 data.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon EMR to process the S3 data. Use Amazon Kinesis Data Streams to move the S3 data into Amazon Redshift so that the data can be enriched.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Glue to process the S3 data. Use AWS Lake Formation with the Amazon Redshift data to enrich the S3 data.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 557 discussion",
      "discusstion": [
        {
          "id": 986771,
          "date": "Wed 21 Feb 2024 20:13",
          "username": "Guru4Cloud",
          "content": "Option B is the correct solution that meets the requirements:<br><br>Use Amazon EMR to process the semi-structured data in Amazon S3. EMR provides a managed Hadoop framework optimized for processing large datasets in S3.<br>EMR supports parallel data processing across multiple nodes to speed up the processing.<br>EMR can integrate directly with Amazon Redshift using the EMR-Redshift integration. This allows querying the Redshift data from EMR and joining it with the S3 data.<br>This enables enriching the semi-structured S3 data with the information stored in Redshift",
          "upvote_count": "17",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 972197,
          "date": "Sun 04 Feb 2024 16:30",
          "username": "zjcorpuz",
          "content": "By combining AWS Glue and Amazon Redshift, you can process the semistructured data in parallel using Glue ETL jobs and then store the processed and enriched data in a structured format in Amazon Redshift. This approach allows you to perform complex analytics efficiently and at scale.",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 1130837,
          "date": "Wed 24 Jul 2024 16:00",
          "username": "upliftinghut",
          "content": "D: not relevant, data is semistructured and Glue is more batch than stream data<br>A: not correct, Athena is for querying data<br>B & C look ok but C is out > redundant with Kinesis data stream; EMR already processed data as input into Redshift for parallel processing<br><br>Only B is most logical",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1127000,
          "date": "Fri 19 Jul 2024 22:40",
          "username": "awsgeek75",
          "content": "Key requirement: parallel data processing<br>parallel data processing is EMR (Kind of Apache Hadoop) so it only leave B and C<br>C is Kinesis to Redshift which is pointless logic here<br>B EMR for S3 and EMR for Redshift gives maximum parallel processing here",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1111629,
          "date": "Tue 02 Jul 2024 06:06",
          "username": "pentium75",
          "content": "A has a pitfall, \\\"use Amazon Athena to PROCESS the data\\\". With Athena you can query, not process, data.<br>C is wrong because Kinesis has no place here.<br>D is wrong because it does not process the Redshift data, and Glue does ETL, not analyze<br><br>Thus it's B. EMR can use semi-structured data from from S3 and structured data from Redshift and is ideal for \\\"parallel data processing\\\" of \\\"large amounts\\\" of data.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1095428,
          "date": "Thu 13 Jun 2024 11:54",
          "username": "aws94",
          "content": "large amount of data + parallel data processingEMR",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1093016,
          "date": "Tue 11 Jun 2024 02:32",
          "username": "[Removed]",
          "content": "Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Y, but A says \\\"process\\\", not \\\"query\\\" data with Athena.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1111630,
          "date": "Tue 02 Jul 2024 06:07",
          "username": "pentium75",
          "content": "Y, but A says \\\"process\\\", not \\\"query\\\" data with Athena.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1088543,
          "date": "Wed 05 Jun 2024 13:58",
          "username": "SHAAHIBHUSHANAWS",
          "content": "Selected Answer: D<br><br>Glue use apache pyspark cluster for parallel processing. EMR or Glue are possible options. Glue is serverless so better use this plus pyspark is in memory parallel processing.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1081975,
          "date": "Mon 27 May 2024 22:03",
          "username": "aragornfsm",
          "content": "i think a is correct<br>semistructured data > Athena<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"Hadoop [as used by EMR] helps you turn petabytes of un-structured or semi-structured data into useful insights\\\"<br><br>https://aws.amazon.com/emr/features/hadoop/</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1111631,
          "date": "Tue 02 Jul 2024 06:08",
          "username": "pentium75",
          "content": "\\\"Hadoop [as used by EMR] helps you turn petabytes of un-structured or semi-structured data into useful insights\\\"<br><br>https://aws.amazon.com/emr/features/hadoop/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1080301,
          "date": "Sat 25 May 2024 20:05",
          "username": "riyasara",
          "content": "Athena is not designed for parallel data processing. So it's B",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1075234,
          "date": "Mon 20 May 2024 07:41",
          "username": "TariqKipkemei",
          "content": "Answer is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1075233,
          "date": "Mon 20 May 2024 07:41",
          "username": "TariqKipkemei",
          "content": "From this documentation looks like EMR cannot interface with S3.<br>https://aws.amazon.com/emr/<br><br>I will settle with option A.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Of course EMR can access S3<br><br>https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-file-systems.html</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1111632,
          "date": "Tue 02 Jul 2024 06:09",
          "username": "pentium75",
          "content": "Of course EMR can access S3<br><br>https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-file-systems.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1072275,
          "date": "Thu 16 May 2024 08:44",
          "username": "bogobob",
          "content": "For those answering A, AWS Glue can directly query S3, it can't use Athena as a source of data. The questions say the Redshift data should be user to \\\"enrich\\\" which means thats the redshift data needs to be \\\"added\\\" to the s3 data. A doesn't allow that.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1072271,
          "date": "Thu 16 May 2024 08:29",
          "username": "hungta",
          "content": "Choose option B.<br>Option A is not correct. Amazon Athena is suitable for querying data directly from S3 using SQL and allows parallel processing of S3 data.<br>AWS Glue can be used for data preparation and enrichment but might not directly integrate with Amazon Redshift for enrichment.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1064009,
          "date": "Mon 06 May 2024 15:45",
          "username": "potomac",
          "content": "Athena and Redshift both do SQL query",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1027283,
          "date": "Sun 07 Apr 2024 13:33",
          "username": "Sab123",
          "content": "semi-structure supported by Athena not by EMR<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"Hadoop helps you turn petabytes of un-structured or semi-structured data into useful insights about your applications or users.\\\"<br><br>https://aws.amazon.com/emr/features/hadoop/?nc1h_ls</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1111628,
          "date": "Tue 02 Jul 2024 05:59",
          "username": "pentium75",
          "content": "\\\"Hadoop helps you turn petabytes of un-structured or semi-structured data into useful insights about your applications or users.\\\"<br><br>https://aws.amazon.com/emr/features/hadoop/?nc1h_ls",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1019355,
          "date": "Thu 28 Mar 2024 06:13",
          "username": "JKevin778",
          "content": "athena for s3",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#558",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has two VPCs that are located in the us-west-2 Region within the same AWS account. The company needs to allow network traffic between these VPCs. Approximately 500 GB of data transfer will occur between the VPCs each month.<br><br>What is the MOST cost-effective solution to connect these VPCs?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#558",
          "answers": [
            {
              "choice": "<p>Implement AWS Transit Gateway to connect the VPCs. Update the route tables of each VPC to use the transit gateway for inter-VPC communication.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement an AWS Site-to-Site VPN tunnel between the VPCs. Update the route tables of each VPC to use the VPN tunnel for inter-VPC communication.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up a VPC peering connection between the VPCs. Update the route tables of each VPC to use the VPC peering connection for inter-VPC communication.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Set up a 1 GB AWS Direct Connect connection between the VPCs. Update the route tables of each VPC to use the Direct Connect connection for inter-VPC communication.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 558 discussion",
      "discusstion": [
        {
          "id": 969709,
          "date": "Fri 02 Aug 2024 07:17",
          "username": "luiscc",
          "content": "C is the correct answer.<br><br>VPC peering is the most cost-effective way to connect two VPCs within the same region and AWS account. There are no additional charges for VPC peering beyond standard data transfer rates.<br><br>Transit Gateway and VPN add additional hourly and data processing charges that are not necessary for simple VPC peering.<br><br>Direct Connect provides dedicated network connectivity, but is overkill for the relatively low inter-VPC data transfer needs described here. It has high fixed costs plus data transfer rates.<br><br>For occasional inter-VPC communication of moderate data volumes within the same region and account, VPC peering is the most cost-effective solution. It provides simple private connectivity without transfer charges or network appliances.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 986756,
          "date": "Wed 21 Aug 2024 19:04",
          "username": "Guru4Cloud",
          "content": "The key reasons are:<br><br>VPC peering provides private connectivity between VPCs without using public IP space.<br>Data transferred between peered VPCs is free as long as they are in the same region.<br>500 GB/month inter-VPC data transfer fits within peering free tier.<br>Transit Gateway (Option A) incurs hourly charges plus data transfer fees. More costly than peering.<br>Site-to-Site VPN (Option B) incurs hourly charges and data transfer fees. More expensive than peering.<br>Direct Connect (Option D) has high hourly charges and would be overkill for this use case.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1075237,
          "date": "Wed 20 Nov 2024 08:46",
          "username": "TariqKipkemei",
          "content": "A VPC peering connection is a networking connection between two VPCs that enables you to route traffic between them using private IPv4 addresses or IPv6 addresses. Instances in either VPC can communicate with each other as if they are within the same network. You can create a VPC peering connection between your own VPCs, or with a VPC in another AWS account. The VPCs can be in different Regions (also known as an inter-Region VPC peering connection).<br><br>https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html#:~:textA-,VPC%20peering,-connection%20is%20a",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 991640,
          "date": "Tue 27 Aug 2024 21:51",
          "username": "BrijMohan08",
          "content": "Transit Gateway network peering.<br>VPC Peering to peer 2 or more VPC in the same region.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 971276,
          "date": "Sat 03 Aug 2024 17:57",
          "username": "mrsoa",
          "content": "VPC peering is the most cost-effective solution",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 970935,
          "date": "Sat 03 Aug 2024 11:20",
          "username": "Deepakin96",
          "content": "Communicating with two VPC in same accountVPC Peering",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#559",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts multiple applications on AWS for different product lines. The applications use different compute resources, including Amazon EC2 instances and Application Load Balancers. The applications run in different AWS accounts under the same organization in AWS Organizations across multiple AWS Regions. Teams for each product line have tagged each compute resource in the individual accounts.<br><br>The company wants more details about the cost for each product line from the consolidated billing feature in Organizations.<br><br>Which combination of steps will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#559",
          "answers": [
            {
              "choice": "<p>Select a specific AWS generated tag in the AWS Billing console.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Select a specific user-defined tag in the AWS Billing console.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Select a specific user-defined tag in the AWS Resource Groups console.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Activate the selected tag from each AWS account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Activate the selected tag from the Organizations management account.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 559 discussion",
      "discusstion": [
        {
          "id": 986747,
          "date": "Mon 21 Aug 2023 18:58",
          "username": "Guru4Cloud",
          "content": "The reasons are:<br><br>User-defined tags were created by each product team to identify resources. Selecting the relevant tag in the Billing console will group costs.<br>The tag must be activated from the Organizations management account to consolidate billing across all accounts.<br>AWS generated tags are predefined by AWS and won't align to product lines.<br>Resource Groups (Option C) helps manage resources but not billing.<br>Activating the tag from each account (Option D) is not needed since Organizations centralizes billing.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Resource Groups helps grouping, editing, searching tag for resources, and do not use for viewing cost details</li></ul>",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1305240,
          "date": "Thu 31 Oct 2024 01:23",
          "username": "adiorsdior999",
          "content": "Resource Groups helps grouping, editing, searching tag for resources, and do not use for viewing cost details",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1064018,
          "date": "Mon 06 Nov 2023 16:54",
          "username": "potomac",
          "content": "Your user-defined cost allocation tags represent the tag key, which you activate in the Billing console.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 973988,
          "date": "Sun 06 Aug 2023 17:50",
          "username": "mrsoa",
          "content": "BE BE BE BE",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 972847,
          "date": "Sat 05 Aug 2023 11:33",
          "username": "Kiki_Pass",
          "content": "\\\"Only a management account in an organization and single accounts that aren't members of an organization have access to the cost allocation tags manager in the Billing and Cost Management console.\\\"<br>https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/custom-tags.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BE"
        }
      ]
    },
    {
      "question_id": "#560",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's solutions architect is designing an AWS multi-account solution that uses AWS Organizations. The solutions architect has organized the company's accounts into organizational units (OUs).<br><br>The solutions architect needs a solution that will identify any changes to the OU hierarchy. The solution also needs to notify the company's operations team of any changes.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#560",
          "answers": [
            {
              "choice": "<p>Provision the AWS accounts by using AWS Control Tower. Use account drift notifications to identify the changes to the OU hierarchy.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Provision the AWS accounts by using AWS Control Tower. Use AWS Config aggregated rules to identify the changes to the OU hierarchy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Service Catalog to create accounts in Organizations. Use an AWS CloudTrail organization trail to identify the changes to the OU hierarchy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS CloudFormation templates to create accounts in Organizations. Use the drift detection operation on a stack to identify the changes to the OU hierarchy.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 560 discussion",
      "discusstion": [
        {
          "id": 986738,
          "date": "Mon 21 Aug 2023 18:52",
          "username": "Guru4Cloud",
          "content": "The key advantages you highlight of Control Tower are convincing:<br><br>Fully managed service simplifies multi-account setup.<br>Built-in account drift notifications detect OU changes automatically.<br>More scalable and less complex than Config rules or CloudTrail.<br>Better security and compliance guardrails than custom options.<br>Lower operational overhead compared to other solution",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 969504,
          "date": "Wed 02 Aug 2023 02:17",
          "username": "Bmaster",
          "content": "A is correct.<br><br>https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html<br>https://docs.aws.amazon.com/controltower/latest/userguide/prevention-and-notification.html",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 1240790,
          "date": "Tue 02 Jul 2024 14:26",
          "username": "1166ae3",
          "content": "Create Accounts using AWS Service Catalog:<br><br>Utilize AWS Service Catalog to provision AWS accounts within AWS Organizations. This ensures standardized account creation and management.<br>Enable AWS CloudTrail Organization Trail:<br><br>Set up an AWS CloudTrail organization trail that records all API calls across all accounts in the organization.<br>This trail will capture changes to the OU hierarchy, including any modifications to organizational units.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1172751,
          "date": "Wed 13 Mar 2024 18:08",
          "username": "chickenmf",
          "content": "AWS Config helps you maintain a detailed inventory of your resources and their configurations, track changes over time, and ensure compliance with your organization's policies and industry regulations.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Furthermore, AWS Config Aggregated Rules are a feature within AWS Config that enables you to evaluate compliance with desired configurations or compliance standards across multiple AWS accounts and regions. They are particularly useful in scenarios where you want to enforce consistent rules and compliance checks across an entire organization with multiple AWS accounts.</li><li>NVM - This is such a stupid question lol changing my answer to A due to the following:<br>Account drift notifications in AWS are a feature provided by AWS Control Tower. These notifications help organizations identify and respond to changes made to an AWS account that deviate from the established baseline configuration created during the initial setup by AWS Control Tower. Drift refers to any configuration changes that have been made to an AWS account after it was provisioned by Control Tower.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1172753,
          "date": "Wed 13 Mar 2024 18:09",
          "username": "chickenmf",
          "content": "Furthermore, AWS Config Aggregated Rules are a feature within AWS Config that enables you to evaluate compliance with desired configurations or compliance standards across multiple AWS accounts and regions. They are particularly useful in scenarios where you want to enforce consistent rules and compliance checks across an entire organization with multiple AWS accounts.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>NVM - This is such a stupid question lol changing my answer to A due to the following:<br>Account drift notifications in AWS are a feature provided by AWS Control Tower. These notifications help organizations identify and respond to changes made to an AWS account that deviate from the established baseline configuration created during the initial setup by AWS Control Tower. Drift refers to any configuration changes that have been made to an AWS account after it was provisioned by Control Tower.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1172755,
          "date": "Wed 13 Mar 2024 18:12",
          "username": "chickenmf",
          "content": "NVM - This is such a stupid question lol changing my answer to A due to the following:<br>Account drift notifications in AWS are a feature provided by AWS Control Tower. These notifications help organizations identify and respond to changes made to an AWS account that deviate from the established baseline configuration created during the initial setup by AWS Control Tower. Drift refers to any configuration changes that have been made to an AWS account after it was provisioned by Control Tower.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1169663,
          "date": "Sat 09 Mar 2024 17:52",
          "username": "Avyay",
          "content": "This was in my exam today..I selected Answer A<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>what percentage of all these questions would you say were in the exam?</li><li>I read in one of the earlier questions, its around 75%, someone who gave the exam said so</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1172748,
          "date": "Wed 13 Mar 2024 18:04",
          "username": "chickenmf",
          "content": "what percentage of all these questions would you say were in the exam?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I read in one of the earlier questions, its around 75%, someone who gave the exam said so</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1205227,
          "date": "Thu 02 May 2024 00:20",
          "username": "wizcloudifa",
          "content": "I read in one of the earlier questions, its around 75%, someone who gave the exam said so",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1088510,
          "date": "Tue 05 Dec 2023 14:21",
          "username": "SHAAHIBHUSHANAWS",
          "content": "A<br>https://docs.aws.amazon.com/controltower/latest/userguide/drift.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1064022,
          "date": "Mon 06 Nov 2023 16:56",
          "username": "potomac",
          "content": "AWS Control Tower provides passive and active methods of drift monitoring protection for preventive controls.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 988376,
          "date": "Wed 23 Aug 2023 15:49",
          "username": "darekw",
          "content": "https://docs.aws.amazon.com/controltower/latest/userguide/prevention-and-notification.html",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#561",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's website handles millions of requests each day, and the number of requests continues to increase. A solutions architect needs to improve the response time of the web application. The solutions architect determines that the application needs to decrease latency when retrieving product details from the Amazon DynamoDB table.<br><br>Which solution will meet these requirements with the LEAST amount of operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#561",
          "answers": [
            {
              "choice": "<p>Set up a DynamoDB Accelerator (DAX) cluster. Route all read requests through DAX.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Set up Amazon ElastiCache for Redis between the DynamoDB table and the web application. Route all read requests through Redis.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up Amazon ElastiCache for Memcached between the DynamoDB table and the web application. Route all read requests through Memcached.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up Amazon DynamoDB Streams on the table, and have AWS Lambda read from the table and populate Amazon ElastiCache. Route all read requests through ElastiCache.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 561 discussion",
      "discusstion": [
        {
          "id": 971298,
          "date": "Sat 03 Feb 2024 19:16",
          "username": "mrsoa",
          "content": "A , because B,C and D contains Elasticache which required a heavy code changes, so more operational overhead",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1076060,
          "date": "Tue 21 May 2024 06:32",
          "username": "TariqKipkemei",
          "content": "decrease latency when retrieving product details from the Amazon DynamoDBAmazon DynamoDB Accelerator (DAX)",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1198770,
          "date": "Sat 19 Oct 2024 18:44",
          "username": "sandordini",
          "content": "DAX to reduce latency",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 986662,
          "date": "Wed 21 Feb 2024 18:45",
          "username": "Guru4Cloud",
          "content": "The key reasons:<br><br>DAX provides a DynamoDB-compatible caching layer to reduce read latency. It is purpose-built for accelerating DynamoDB workloads.<br>Using DAX requires minimal application changes - only read requests are routed through it.<br>DAX handles caching logic automatically without needing complex integration code.<br>ElastiCache Redis/Memcached (Options B/C) require more integration work to sync DynamoDB data.<br>Using Lambda and Streams to populate ElastiCache (Option D) is a complex event-driven approach requiring ongoing maintenance.<br>DAX plugs in seamlessly to accelerate DynamoDB with very little operational overhead",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 970941,
          "date": "Sat 03 Feb 2024 12:22",
          "username": "Deepakin96",
          "content": "DynamoDB DAX",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 969508,
          "date": "Fri 02 Feb 2024 03:19",
          "username": "Bmaster",
          "content": "only A",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#562",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect needs to ensure that API calls to Amazon DynamoDB from Amazon EC2 instances in a VPC do not travel across the internet.<br><br>Which combination of steps should the solutions architect take to meet this requirement? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#562",
          "answers": [
            {
              "choice": "<p>Create a route table entry for the endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a gateway endpoint for DynamoDB.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an interface endpoint for Amazon EC2.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an elastic network interface for the endpoint in each of the subnets of the VPC.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a security group entry in the endpoint's security group to provide access.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 562 discussion",
      "discusstion": [
        {
          "id": 978309,
          "date": "Fri 11 Aug 2023 07:58",
          "username": "ukivanlamlpi",
          "content": "https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-ddb.html",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 986659,
          "date": "Mon 21 Aug 2023 17:42",
          "username": "Guru4Cloud",
          "content": "The reasons are:<br><br>A gateway endpoint for DynamoDB enables private connectivity between DynamoDB and the VPC. This allows EC2 instances to access DynamoDB APIs without traversing the internet.<br>A security group entry is needed to allow the EC2 instances access to the DynamoDB endpoint over the VPC.<br>An interface endpoint is used for services like S3 and Systems Manager, not DynamoDB.<br>Route table entries route traffic within a VPC but do not affect external connectivity.<br>Elastic network interfaces are not needed for gateway endpoints.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"The outbound rules for the security group for instances that access DynamoDB through the gateway endpoint must allow traffic to DynamoDB\\\", https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-ddb.html<br>The option however is talking about the security group of the endpoint</li></ul>",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1057516,
          "date": "Mon 30 Oct 2023 10:35",
          "username": "unbendable",
          "content": "\\\"The outbound rules for the security group for instances that access DynamoDB through the gateway endpoint must allow traffic to DynamoDB\\\", https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-ddb.html<br>The option however is talking about the security group of the endpoint",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1288632,
          "date": "Tue 24 Sep 2024 15:59",
          "username": "JoeTromundo",
          "content": "A & B are correct<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/vpc-endpoints-dynamodb.html<br>E is incorrect. There's no need for security group.<br>From the URL above:<br>\\\"Once the VPC subnet's gateway endpoint has been granted access to DynamoDB, any AWS account with access to that subnet can use DynamoDB.\\\"",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1242640,
          "date": "Fri 05 Jul 2024 10:58",
          "username": "a7md0",
          "content": "Creating the gateway endpoint and edit the route table is enough, there are no secruity group involved",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1132465,
          "date": "Fri 26 Jan 2024 12:14",
          "username": "osmk",
          "content": "AB https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/vpc-endpoints-dynamodb.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1130859,
          "date": "Wed 24 Jan 2024 17:26",
          "username": "upliftinghut",
          "content": "C & D are both not relevant. D looks ok but DynamoDB doesn't go with security group, it only allows route table for VPC endpoint. Link here: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/vpc-endpoints-dynamodb.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Sorry, E not D. E looks ok but DynamoDB doesn't go with security group, it only allows route table for VPC endpoint. Link here: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/vpc-endpoints-dynamodb.html</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1130861,
          "date": "Wed 24 Jan 2024 17:27",
          "username": "upliftinghut",
          "content": "Sorry, E not D. E looks ok but DynamoDB doesn't go with security group, it only allows route table for VPC endpoint. Link here: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/vpc-endpoints-dynamodb.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1127005,
          "date": "Fri 19 Jan 2024 23:53",
          "username": "awsgeek75",
          "content": "DynamoDB can only be connected via Gateway endpoint (just like S3)<br>route table for connecting the VPC tor the endpoint<br>So do B then A<br><br>C: interface endpoint for EC2 to what?<br>D: ENI not applicable here for VPC<br>E: Incomplete option as to access to what?",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1120330,
          "date": "Fri 12 Jan 2024 02:34",
          "username": "theonlyhero",
          "content": "go through this video it will show the answer is AB<br>https://www.youtube.com/watch?v8FTnyhklEvU",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1111639,
          "date": "Tue 02 Jan 2024 07:28",
          "username": "pentium75",
          "content": "Gateway Endpoint does not have an ENI, thus it has no security group. Instances have security groups and those must allow access to DynamoDB.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1095440,
          "date": "Wed 13 Dec 2023 13:15",
          "username": "aws94",
          "content": "A. Create a route table entry for the endpoint: This is not necessary, as the gateway endpoint itself automatically creates the required route table entries.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1076065,
          "date": "Tue 21 Nov 2023 07:47",
          "username": "TariqKipkemei",
          "content": "Create a gateway endpoint for DynamoDB then create a route table entry for the endpoint",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1073377,
          "date": "Fri 17 Nov 2023 15:14",
          "username": "EdenWang",
          "content": "refer to question 555",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1069713,
          "date": "Mon 13 Nov 2023 21:12",
          "username": "cciesam",
          "content": "https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html#vpc-endpoints-routing<br>Traffic from your VPC to Amazon S3 or DynamoDB is routed to the gateway endpoint. Each subnet route table must have a route that sends traffic destined for the service to the gateway endpoint using the prefix list for the service.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1064029,
          "date": "Mon 06 Nov 2023 17:07",
          "username": "potomac",
          "content": "You can access Amazon DynamoDB from your VPC using gateway VPC endpoints. After you create the gateway endpoint, you can add it as a target in your route table for traffic destined from your VPC to DynamoDB.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1056504,
          "date": "Sun 29 Oct 2023 02:09",
          "username": "danielmakita",
          "content": "It is A and B. Not E because security group does not span VPCs.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1046553,
          "date": "Wed 18 Oct 2023 06:38",
          "username": "iwannabeawsgod",
          "content": "A and B for sure",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1026680,
          "date": "Fri 06 Oct 2023 15:48",
          "username": "loveaws",
          "content": "B and D.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#563",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs its applications on both Amazon Elastic Kubernetes Service (Amazon EKS) clusters and on-premises Kubernetes clusters. The company wants to view all clusters and workloads from a central location.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#563",
          "answers": [
            {
              "choice": "<p>Use Amazon CloudWatch Container Insights to collect and group the cluster information.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon EKS Connector to register and connect all Kubernetes clusters.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Systems Manager to collect and view the cluster information.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon EKS Anywhere as the primary cluster to view the other clusters with native Kubernetes commands.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 563 discussion",
      "discusstion": [
        {
          "id": 997585,
          "date": "Sun 03 Sep 2023 14:04",
          "username": "ErnShm",
          "content": "B<br><br>You can use Amazon EKS Connector to register and connect any conformant Kubernetes cluster to AWS and visualize it in the Amazon EKS console. After a cluster is connected, you can see the status, configuration, and workloads for that cluster in the Amazon EKS console. You can use this feature to view connected clusters in Amazon EKS console, but you can't manage them. The Amazon EKS Connector requires an agent that is an open source project on Github. For additional technical content, including frequently asked questions and troubleshooting, see Troubleshooting issues in Amazon EKS Connector<br><br>The Amazon EKS Connector can connect the following types of Kubernetes clusters to Amazon EKS.<br><br>On-premises Kubernetes clusters<br><br>Self-managed clusters that are running on Amazon EC2<br><br>Managed clusters from other cloud providers",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 971304,
          "date": "Thu 03 Aug 2023 18:26",
          "username": "mrsoa",
          "content": "seems B<br><br>https://docs.aws.amazon.com/eks/latest/userguide/eks-connector.html",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1309530,
          "date": "Sun 10 Nov 2024 17:23",
          "username": "Danilus",
          "content": "KEY-he company wants to view all clusters and workloads from a central location.<br><br>the answer is not D because amazon EKS anywhereallow you to run cluster of kubernetes inon-premises or in other clouds<br> the answer is B EKS connector helps u to connect kubernetes clusterson premises or other cloudand manage from a single ubication",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1120202,
          "date": "Thu 11 Jan 2024 22:19",
          "username": "awsgeek75",
          "content": "https://docs.aws.amazon.com/eks/latest/userguide/eks-connector.html<br>\\\"You can use Amazon EKS Connector to register and connect any conformant Kubernetes cluster to AWS and visualize it in the Amazon EKS console. \\\"<br>B is the right product for this.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1111643,
          "date": "Tue 02 Jan 2024 07:32",
          "username": "pentium75",
          "content": "EKS Connector -> 'view clusters and workloads' as requested<br>EKS Anywhere -> create and manage on-premises EKS clusters",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1088498,
          "date": "Tue 05 Dec 2023 14:08",
          "username": "SHAAHIBHUSHANAWS",
          "content": "B<br>EKS connector helps to integrate multiple cluster with EKS console. EKS anywhere is Kubernetes Ditro cluster to be deployed on-prem. It is not for integrating with other cluster.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1076069,
          "date": "Tue 21 Nov 2023 07:57",
          "username": "TariqKipkemei",
          "content": "View all clusters and workloads (incl on-prem) from a central locationAmazon EKS Connector<br>Create and operate Kubernetes clusters on your own infrastructureAmazon EKS Anywhere<br><br>https://aws.amazon.com/eks/eks-anywhere/#:~:textAmazon-,EKS%20Anywhere,-lets%20you%20create<br><br>https://docs.aws.amazon.com/eks/latest/userguide/eks-connector.html#:~:textYou%20can%20use-,Amazon%20EKS%20Connector,-to%20register%20and",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1064037,
          "date": "Mon 06 Nov 2023 17:15",
          "username": "potomac",
          "content": "It is B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 993079,
          "date": "Tue 29 Aug 2023 14:42",
          "username": "thainguyensunya",
          "content": "Definitely B.<br>\\\"You can use Amazon EKS Connector to register and connect any conformant Kubernetes cluster to AWS and visualize it in the Amazon EKS console. After a cluster is connected, you can see the status, configuration, and workloads for that cluster in the Amazon EKS console. \\\"<br>https://docs.aws.amazon.com/eks/latest/userguide/eks-connector.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 986652,
          "date": "Mon 21 Aug 2023 17:26",
          "username": "Guru4Cloud",
          "content": "The key reasons:<br><br>EKS Connector allows registering external Kubernetes clusters (on-premises and otherwise) with Amazon EKS<br>This provides a unified view and management of all clusters within the EKS console.<br>EKS Connector handles keeping resources in sync across connected clusters.<br>This centralized approach minimizes operational overhead compared to using separate tools.<br>CloudWatch Container Insights (Option A) only provides metrics and logs, not cluster management.<br>Systems Manager (Option C) is more general purpose and does not natively integrate with EKS.<br>EKS Anywhere (Option D) would not provide a single pane of glass for external clusters.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 979402,
          "date": "Sat 12 Aug 2023 16:18",
          "username": "RealMarcus",
          "content": "Amazon EKS Connector enables you to create and manage a centralized view of all your Kubernetes clusters, regardless of whether they are Amazon EKS clusters or on-premises Kubernetes clusters. It allows you to register these clusters with your Amazon EKS control plane, providing a unified management interface for all clusters.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 979253,
          "date": "Sat 12 Aug 2023 10:23",
          "username": "avkya",
          "content": "You can use Amazon EKS Connector to register and connect any conformant Kubernetes cluster to AWS and visualize it in the Amazon EKS console. After a cluster is connected, you can see the status, configuration, and workloads for that cluster in the Amazon EKS console. You can use this feature to view connected clusters in Amazon EKS console, but you can't manage them",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 978315,
          "date": "Fri 11 Aug 2023 08:05",
          "username": "ukivanlamlpi",
          "content": "only D can connect to on-perm<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No.<br><br>\\\"The Amazon EKS Connector can connect the following types of Kubernetes clusters to Amazon EKS.<br><br>On-premises Kubernetes clusters\\\"<br><br>https://aws.amazon.com/de/eks/eks-anywhere/</li><li>Wrong link, statement is from https://docs.aws.amazon.com/eks/latest/userguide/eks-connector.html</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1111641,
          "date": "Tue 02 Jan 2024 07:30",
          "username": "pentium75",
          "content": "No.<br><br>\\\"The Amazon EKS Connector can connect the following types of Kubernetes clusters to Amazon EKS.<br><br>On-premises Kubernetes clusters\\\"<br><br>https://aws.amazon.com/de/eks/eks-anywhere/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Wrong link, statement is from https://docs.aws.amazon.com/eks/latest/userguide/eks-connector.html</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1111642,
          "date": "Tue 02 Jan 2024 07:31",
          "username": "pentium75",
          "content": "Wrong link, statement is from https://docs.aws.amazon.com/eks/latest/userguide/eks-connector.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 969510,
          "date": "Wed 02 Aug 2023 02:24",
          "username": "Bmaster",
          "content": "Only B<br><br>https://docs.aws.amazon.com/eks/latest/userguide/eks-connector.html",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#564",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building an ecommerce application and needs to store sensitive customer information. The company needs to give customers the ability to complete purchase transactions on the website. The company also needs to ensure that sensitive customer data is protected, even from database administrators.<br><br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#564",
          "answers": [
            {
              "choice": "<p>Store sensitive data in an Amazon Elastic Block Store (Amazon EBS) volume. Use EBS encryption to encrypt the data. Use an IAM instance role to restrict access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store sensitive data in Amazon RDS for MySQL. Use AWS Key Management Service (AWS KMS) client-side encryption to encrypt the data.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Store sensitive data in Amazon S3. Use AWS Key Management Service (AWS KMS) server-side encryption to encrypt the data. Use S3 bucket policies to restrict access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store sensitive data in Amazon FSx for Windows Server. Mount the file share on application servers. Use Windows file permissions to restrict access.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 564 discussion",
      "discusstion": [
        {
          "id": 986650,
          "date": "Wed 21 Feb 2024 18:23",
          "username": "Guru4Cloud",
          "content": "The key reasons are:<br><br>RDS MySQL provides a fully managed database service well suited for an ecommerce application.<br>AWS KMS client-side encryption allows encrypting sensitive data before it hits the database. The data remains encrypted at rest.<br>This protects sensitive customer data from database admins and privileged users.<br>EBS encryption (Option A) protects data at rest but not in use. IAM roles don't prevent admin access.<br>S3 (Option C) encrypts data at rest on the server side. Bucket policies don't restrict admin access.<br>FSx file permissions (Option D) don't prevent admin access to unencrypted data.",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1111645,
          "date": "Tue 02 Jul 2024 06:37",
          "username": "pentium75",
          "content": "A, C and D would allow the administrator of the storage to access the data. Besides, it is data about \\\"purchase transactions\\\" which is usually stored in a transactional database (such as RDS for MySQL), not in a file or object storage.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Good thought purchase transactions I had missed that part</li></ul>",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1207384,
          "date": "Wed 06 Nov 2024 17:51",
          "username": "sidharthwader",
          "content": "Good thought purchase transactions I had missed that part",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1088418,
          "date": "Wed 05 Jun 2024 11:20",
          "username": "SHAAHIBHUSHANAWS",
          "content": "B<br>I want to go with B as question is for database administrator. Also client key encryption is possible in code and KMS can be used for encryption but not using KMS keys. Encrypted data available in DB is of no use to DB admin.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1080458,
          "date": "Sun 26 May 2024 03:24",
          "username": "riyasara",
          "content": "Answer is option C. option B is not ideal because Amazon RDS for MySQL is a relational database service that is optimized for structured data, not for storing sensitive customer information. Moreover, by using client-side encryption with AWS KMS, you need to encrypt and decrypt the data in your application code, which increases the risk of exposing your data in transit or at rest. You also need to manage the encryption keys yourself, which adds complexity and overhead to your application.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>eCommerce data and transaction data are ideal for RDS which, when encrypted, is secure even from the DBA.</li><li>\\\"optimized for structured data, not for storing sensitive customer information\\\" ... Data related to \\\"purchase transactions\\\" is usually structured; that it contains \\\"sensitive customer information\\\" doesn't change the structured nature.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1120204,
          "date": "Thu 11 Jul 2024 21:22",
          "username": "awsgeek75",
          "content": "eCommerce data and transaction data are ideal for RDS which, when encrypted, is secure even from the DBA.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1111644,
          "date": "Tue 02 Jul 2024 06:35",
          "username": "pentium75",
          "content": "\\\"optimized for structured data, not for storing sensitive customer information\\\" ... Data related to \\\"purchase transactions\\\" is usually structured; that it contains \\\"sensitive customer information\\\" doesn't change the structured nature.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1053512,
          "date": "Thu 25 Apr 2024 08:21",
          "username": "wsdasdasdqwdaw",
          "content": "I would go for B, because RDS (database admins), but I would like to see as well encryption at rest as well, not only in transit.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 973995,
          "date": "Tue 06 Feb 2024 18:57",
          "username": "mrsoa",
          "content": "Using client-side encryption we can protect<br>specific fields and guarantee only decryption<br>if the client has access to an API key, we can<br>protect specific fields even from database<br>admins",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 973141,
          "date": "Mon 05 Feb 2024 18:35",
          "username": "D10SJoker",
          "content": "For me it's B because of\\\"client-side encryption to encrypt the data\\\"",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 972958,
          "date": "Mon 05 Feb 2024 14:39",
          "username": "h8er",
          "content": "keyword - database administrators",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 972858,
          "date": "Mon 05 Feb 2024 12:47",
          "username": "Kiki_Pass",
          "content": "\\\"even from database administrators\\\" -> \\\"Client Side encryption\\\"",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 969511,
          "date": "Fri 02 Feb 2024 03:27",
          "username": "Bmaster",
          "content": "My choice is B",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#565",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an on-premises MySQL database that handles transactional data. The company is migrating the database to the AWS Cloud. The migrated database must maintain compatibility with the company's applications that use the database. The migrated database also must scale automatically during periods of increased demand.<br><br>Which migration solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#565",
          "answers": [
            {
              "choice": "<p>Use native MySQL tools to migrate the database to Amazon RDS for MySQL. Configure elastic storage scaling.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the database to Amazon Redshift by using the mysqldump utility. Turn on Auto Scaling for the Amazon Redshift cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Database Migration Service (AWS DMS) to migrate the database to Amazon Aurora. Turn on Aurora Auto Scaling.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Database Migration Service (AWS DMS) to migrate the database to Amazon DynamoDB. Configure an Auto Scaling policy.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 565 discussion",
      "discusstion": [
        {
          "id": 986648,
          "date": "Wed 21 Feb 2024 18:20",
          "username": "Guru4Cloud",
          "content": "The key reasons are:<br><br>DMS provides an easy migration path from MySQL to Aurora while minimizing downtime.<br>Aurora is a MySQL-compatible relational database service that will maintain compatibility with the company's applications.<br>Aurora Auto Scaling allows the database to automatically scale up and down based on demand to handle increased workloads.<br>RDS MySQL (Option A) does not scale as well as the Aurora architecture.<br>Redshift (Option B) is for analytics, not transactional data, and may not be compatible.<br>DynamoDB (Option D) is a NoSQL datastore and lacks MySQL compatibility.",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1120207,
          "date": "Thu 11 Jul 2024 21:29",
          "username": "awsgeek75",
          "content": "A is wrong as you cannot use native MySQL tools for migration. Happy to be corrected though!<br>B Redshift is not compatible with MySQL<br>D is DynamoDB<br>C Aurora MySQL is compatible and supports auto scaling",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1076075,
          "date": "Tue 21 May 2024 07:07",
          "username": "TariqKipkemei",
          "content": "on-premises MySQL database, transactional data, maintain compatibility, scale automaticallyAmazon Aurora<br>migrating the database to the AWS CloudAWS Database Migration Service",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1064042,
          "date": "Mon 06 May 2024 16:18",
          "username": "potomac",
          "content": "Aurora is a MySQL-compatible relational database service",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 971315,
          "date": "Sat 03 Feb 2024 19:36",
          "username": "mrsoa",
          "content": "Aurora is better in autoscaling then RDS",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 969517,
          "date": "Fri 02 Feb 2024 03:39",
          "username": "Bmaster",
          "content": "C is correct<br>A is incorrect. RDS for MySQL does not scale automatically during periods of increased demand.<br>B is incorrect. Redshift is used for data sharing purposes.<br>D is incorrect. you muse change application codes.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Amazon RDS now supports Storage Auto Scaling</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 970167,
          "date": "Fri 02 Feb 2024 15:42",
          "username": "Eminenza22",
          "content": "Amazon RDS now supports Storage Auto Scaling",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#566",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs multiple Amazon EC2 Linux instances in a VPC across two Availability Zones. The instances host applications that use a hierarchical directory structure. The applications need to read and write rapidly and concurrently to shared storage.<br><br>What should a solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#566",
          "answers": [
            {
              "choice": "<p>Create an Amazon S3 bucket. Allow access from all the EC2 instances in the VPC.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system from each EC2 instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a file system on a Provisioned IOPS SSD (io2) Amazon Elastic Block Store (Amazon EBS) volume. Attach the EBS volume to all the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create file systems on Amazon Elastic Block Store (Amazon EBS) volumes that are attached to each EC2 instance. Synchronize the EBS volumes across the different EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 566 discussion",
      "discusstion": [
        {
          "id": 968114,
          "date": "Mon 31 Jul 2023 14:45",
          "username": "Josantru",
          "content": "Correct B.<br><br>How is Amazon EFS different than Amazon S3?<br>Amazon EFS provides shared access to data using a traditional file sharing permissions model and hierarchical directory structure via the NFSv4 protocol. Applications that access data using a standard file system interface provided through the operating system can use Amazon EFS to take advantage of the scalability and reliability of file storage in the cloud without writing any new code or adjusting applications.<br><br>Amazon S3 is an object storage platform that uses a simple API for storing and accessing data. Applications that do not require a file system structure and are designed to work with object storage can use Amazon S3 as a massively scalable, durable, low-cost object storage solution.",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 1237814,
          "date": "Thu 27 Jun 2024 02:53",
          "username": "Gape4",
          "content": "https://aws.amazon.com/efs/when-to-choose-efs/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1191575,
          "date": "Mon 08 Apr 2024 14:39",
          "username": "zinabu",
          "content": "hierarchical structure EFS",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1111647,
          "date": "Tue 02 Jan 2024 07:41",
          "username": "pentium75",
          "content": "Not A because S3 does not allow a \\\"hierarchical directory structure\\\"<br>Not C because Multi-attach does not work \\\"across two Availability Zones\\\"<br>Not D because we need \\\"shared\\\", not synchronized, storage.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1076078,
          "date": "Tue 21 Nov 2023 08:12",
          "username": "TariqKipkemei",
          "content": "hierarchical directory structure, read and write rapidly and concurrently to shared storageAmazon Elastic File System<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Best and most concise explanation here. All true.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1262007,
          "date": "Wed 07 Aug 2024 10:51",
          "username": "zits88",
          "content": "Best and most concise explanation here. All true.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1064044,
          "date": "Mon 06 Nov 2023 17:22",
          "username": "potomac",
          "content": "Amazon EFS simultaneously supports on-premises servers using a traditional file permissions model, file locking, and hierarchical directory structure through the NFS v4 protocol.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 986647,
          "date": "Mon 21 Aug 2023 17:18",
          "username": "Guru4Cloud",
          "content": "The key reasons:<br><br>EFS provides a scalable, high performance NFS file system that can be concurrently accessed from multiple EC2 instances.<br>It supports the hierarchical directory structure needed by the applications.<br>EFS is elastic, growing and shrinking automatically as needed.<br>It can be accessed from instances across AZs, meeting the shared storage requirement.<br>S3 object storage (option A) lacks the file system semantics needed by the apps.<br>EBS volumes (options C and D) are attached to a single instance and would require replication and syncing to share across instances.<br>EFS is purpose-built for this use case of a shared file system across Linux instances and aligns best with the performance, concurrency, and availability needs.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 982001,
          "date": "Tue 15 Aug 2023 23:37",
          "username": "barracouto",
          "content": "Going with b",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 979279,
          "date": "Sat 12 Aug 2023 11:26",
          "username": "Bennyboy789",
          "content": "C and D involve using Amazon EBS volumes, which are block storage. While they can be attached to EC2 instances, they might not provide the same level of shared concurrent access as Amazon EFS. Additionally, synchronizing EBS volumes across different EC2 instances (as in option D) can be complex and error-prone.<br><br>Therefore, for a scenario where multiple EC2 instances need to rapidly and concurrently access shared storage with a hierarchical directory structure, Amazon EFS is the best solution.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 978330,
          "date": "Fri 11 Aug 2023 08:19",
          "username": "ukivanlamlpi",
          "content": "s3 is flat structure.EBS multi mount only for same available zone",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 974770,
          "date": "Mon 07 Aug 2023 16:28",
          "username": "Dana12345",
          "content": "Because Amazon EBS Multi-Attach enables you to attach a single Provisioned IOPS SSD (io1 or io2) volume to multiple instances that are in the same Availability Zone. The infra contains 2 AZ's.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 971318,
          "date": "Thu 03 Aug 2023 18:41",
          "username": "mrsoa",
          "content": "B is the correct answer<br><br>https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 971316,
          "date": "Thu 03 Aug 2023 18:40",
          "username": "mrsoa",
          "content": "B is the correct answer<br><br>https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 970418,
          "date": "Wed 02 Aug 2023 19:26",
          "username": "RazSteel",
          "content": "I think that C is the best option coz io2 can share storage and multi attach.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>hierarchial directory structure is present in EFS</li><li>Multi-attach does not work \\\"across two Availability Zones\\\".</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 990096,
          "date": "Fri 25 Aug 2023 15:13",
          "username": "PLN6302",
          "content": "hierarchial directory structure is present in EFS",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1111646,
          "date": "Tue 02 Jan 2024 07:40",
          "username": "pentium75",
          "content": "Multi-attach does not work \\\"across two Availability Zones\\\".",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#567",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing a workload that will store hourly energy consumption by business tenants in a building. The sensors will feed a database through HTTP requests that will add up usage for each tenant. The solutions architect must use managed services when possible. The workload will receive more features in the future as the solutions architect adds independent components.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#567",
          "answers": [
            {
              "choice": "<p>Use Amazon API Gateway with AWS Lambda functions to receive the data from the sensors, process the data, and store the data in an Amazon DynamoDB table.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Elastic Load Balancer that is supported by an Auto Scaling group of Amazon EC2 instances to receive and process the data from the sensors. Use an Amazon S3 bucket to store the processed data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon API Gateway with AWS Lambda functions to receive the data from the sensors, process the data, and store the data in a Microsoft SQL Server Express database on an Amazon EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Elastic Load Balancer that is supported by an Auto Scaling group of Amazon EC2 instances to receive and process the data from the sensors. Use an Amazon Elastic File System (Amazon EFS) shared file system to store the processed data.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 567 discussion",
      "discusstion": [
        {
          "id": 986645,
          "date": "Mon 21 Aug 2023 17:15",
          "username": "Guru4Cloud",
          "content": "The key reasons are:<br><br> =C2=B0 API Gateway removes the need to manage servers to receive the HTTP requests from sensors<br> =C2=B0 Lambda functions provide a serverless compute layer to process data as needed<br> =C2=B0 DynamoDB is a fully managed NoSQL database that scales automatically<br> =C2=B0This serverless architecture has minimal operational overhead to manage<br> =C2=B0 Options B, C, and D all require managing EC2 instances which increases ops workload<br> =C2=B0 Option C also adds SQL Server admin tasks and licensing costs<br> =C2=B0 Option D uses EFS file storage which requires capacity planning and management",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 971321,
          "date": "Thu 03 Aug 2023 18:44",
          "username": "mrsoa",
          "content": "A seems to be the right answer",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1274332,
          "date": "Thu 29 Aug 2024 05:55",
          "username": "AWSSURI",
          "content": "Options B,C,D involves unwanted operational overheads due to EC2<br>So A is the right answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1092630,
          "date": "Sun 10 Dec 2023 17:18",
          "username": "Mikado211",
          "content": "Thinking of that, there is not many questions about IoT Core, but this product could be an excellent answer for the need.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1076082,
          "date": "Tue 21 Nov 2023 08:19",
          "username": "TariqKipkemei",
          "content": "Workload runs every hour, must use managed services, more features in the future, LEAST operational overheadAWS Lambda functions.<br>HTTP requests, must use managed services, more features in the future, LEAST operational overheadAPI Gateway.<br>Must use managed services, more features in the future, LEAST operational overhead Amazon DynamoDB.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 975181,
          "date": "Tue 08 Aug 2023 06:29",
          "username": "ersin13",
          "content": "key word is \\\"must use managed services when possible\\\" api ,lambda dynamodb are serverless. so answer is A",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 973407,
          "date": "Sun 06 Aug 2023 00:17",
          "username": "Kiki_Pass",
          "content": "\\\"The workload will receive more features in the future ...\\\" -> DynamoDB",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 969520,
          "date": "Wed 02 Aug 2023 02:48",
          "username": "Bmaster",
          "content": "A is correct.",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#568",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing the storage architecture for a new web application used for storing and viewing engineering drawings. All application components will be deployed on the AWS infrastructure.<br><br>The application design must support caching to minimize the amount of time that users wait for the engineering drawings to load. The application must be able to store petabytes of data.<br><br>Which combination of storage and caching should the solutions architect use?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#568",
          "answers": [
            {
              "choice": "<p>Amazon S3 with Amazon CloudFront<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon S3 Glacier with Amazon ElastiCache<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Elastic Block Store (Amazon EBS) volumes with Amazon CloudFront<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>AWS Storage Gateway with Amazon ElastiCache<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 568 discussion",
      "discusstion": [
        {
          "id": 969521,
          "date": "Wed 02 Aug 2023 02:48",
          "username": "Bmaster",
          "content": "A is correct",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 986641,
          "date": "Mon 21 Aug 2023 17:10",
          "username": "Guru4Cloud",
          "content": "The key reasons are:<br><br>S3 provides highly durable and scalable object storage capable of handling petabytes of data cost-effectively.<br>CloudFront can be used to cache S3 content at the edge, minimizing latency for users and speeding up access to the engineering drawings.<br>The global CloudFront edge network is ideal for caching large amounts of static media like drawings.<br>EBS provides block storage but lacks the scale and durability of S3 for large media files.<br>Glacier is cheaper archival storage but has higher latency unsuited for frequent access.<br>Storage Gateway and ElastiCache may play a role but do not align as well to the main requirements.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1237815,
          "date": "Thu 27 Jun 2024 02:58",
          "username": "Gape4",
          "content": "I think the answer is A.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1120211,
          "date": "Thu 11 Jan 2024 22:35",
          "username": "awsgeek75",
          "content": "Petabyte data on AWS infra with high performance<br>B is Glacier so slow<br>C EBS for petabyte data doesn't work<br>D Storage gateway is for on premise connectivity which is not required",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1076085,
          "date": "Tue 21 Nov 2023 08:22",
          "username": "TariqKipkemei",
          "content": "Storing and viewing engineering drawingsAmazon S3<br>Support caching to minimize the amount of time that users wait for the engineering drawings to loadAmazon CloudFront",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1053515,
          "date": "Wed 25 Oct 2023 08:27",
          "username": "wsdasdasdqwdaw",
          "content": "CF caching and S3 supports petabytes data",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 990867,
          "date": "Sat 26 Aug 2023 16:36",
          "username": "lemur88",
          "content": "CF allows caching",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 971322,
          "date": "Thu 03 Aug 2023 18:49",
          "username": "mrsoa",
          "content": "The answer seems A:<br>B : Glacier for archiving<br>C : i dont think EBS scale to petabytes (I am not sure about that)<br>D : it incorrect becasueAll application components will be deployed on the AWS infrastructur",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#569",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An Amazon EventBridge rule targets a third-party API. The third-party API has not received any incoming traffic. A solutions architect needs to determine whether the rule conditions are being met and if the rule's target is being invoked.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#569",
          "answers": [
            {
              "choice": "<p>Check for metrics in Amazon CloudWatch in the namespace for AWS/Events.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Review events in the Amazon Simple Queue Service (Amazon SQS) dead-letter queue.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Check for the events in Amazon CloudWatch Logs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Check the trails in AWS CloudTrail for the EventBridge events.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 569 discussion",
      "discusstion": [
        {
          "id": 990868,
          "date": "Mon 26 Feb 2024 17:42",
          "username": "lemur88",
          "content": "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-monitoring.html",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1120213,
          "date": "Thu 11 Jul 2024 21:40",
          "username": "awsgeek75",
          "content": "\\\"EventBridge sends metrics to Amazon CloudWatch every minute for everything from the number of matched events to the number of times a target is invoked by a rule.\\\"<br>from https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-monitoring.html<br>B: SQS, irrelevant<br>C: 'Check for events', this wording is confusing but could mean something in wrong context. I would have chosen C if A wasn't an option<br>D: CloudTrail is for AWS resource monitoring so irrelevant",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1111653,
          "date": "Tue 02 Jul 2024 06:50",
          "username": "pentium75",
          "content": "A per https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-monitoring.html<br>Not B because SQS is not even involved here<br>Not C because EventBridge sends only metrics, not detailed logs, to CloudWatch<br>Not D, many fall for CloudTrail supposedly recording \\\"API calls\\\", but this is about calls for the EventBridge API to AWS, not calls to 3rd party APIs by EventBridge.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1107808,
          "date": "Fri 28 Jun 2024 13:37",
          "username": "Min_93",
          "content": "Option A, \\\"Check for metrics in Amazon CloudWatch in the namespace for AWS/Events,\\\" primarily provides aggregated metrics related to EventBridge, but it may not give detailed information about individual events or their specific content. Metrics in CloudWatch can give you an overview of how many events are being processed, but for detailed inspection of events and their conditions, checking CloudWatch Logs (option C) is more appropriate.<br><br>CloudWatch Logs allow you to see the actual event data and details, providing a more granular view that is useful for troubleshooting and understanding the specifics of why a third-party API is not receiving incoming traffic.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1088401,
          "date": "Wed 05 Jun 2024 10:58",
          "username": "SHAAHIBHUSHANAWS",
          "content": "A<br>Events not generating logs in cloudwatch and cloudtrail. only metric data is available.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1076092,
          "date": "Tue 21 May 2024 07:30",
          "username": "TariqKipkemei",
          "content": "CloudWatch is a monitoring service for AWS resources and applications. CloudTrail is a web service that records API activity in your AWS account. CloudWatch monitors applications and infrastructure performance in the AWS environment. CloudTrail monitors actions in the AWS environment.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"API activity\\\", referring to AWS APIs. This would record if someone modifies the EventBridge configuration.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1111649,
          "date": "Tue 02 Jul 2024 06:47",
          "username": "pentium75",
          "content": "\\\"API activity\\\", referring to AWS APIs. This would record if someone modifies the EventBridge configuration.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1073691,
          "date": "Fri 17 May 2024 22:41",
          "username": "EdenWang",
          "content": "C should be correct, I check in AWS management concole.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1064049,
          "date": "Mon 06 May 2024 16:27",
          "username": "potomac",
          "content": "should be A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 997777,
          "date": "Sun 03 Mar 2024 19:12",
          "username": "ibu007",
          "content": "Check the trails in AWS CloudTrail for the EventBridge events.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I think CloudTrail captures management events (such as modifying the EventBridge configuration)</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1111650,
          "date": "Tue 02 Jul 2024 06:47",
          "username": "pentium75",
          "content": "I think CloudTrail captures management events (such as modifying the EventBridge configuration)",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 988067,
          "date": "Fri 23 Feb 2024 10:42",
          "username": "Eminenza22",
          "content": "Amazon CloudWatch Logs is a service that collects and stores logs from Amazon Web Services (AWS) resources. These logs can be used to troubleshoot problems, monitor performance, and audit activity.<br>The other options are incorrect:Option A: CloudWatch metrics are used to track the performance of AWS resources. They are not used to store events.<br>Option B: Amazon SQS dead-letter queues are used to store messages that cannot be delivered to their intended recipients. They are not used to store events.<br>Option D: AWS CloudTrail is a service that records AWS API calls. It can be used to track the activity of EventBridge rules, but it does not store the events themselves.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>*Errata Corrige*<br>A<br><br>EventBridge sends metrics to Amazon CloudWatch every minute for everything from the number of matched events to the number of times a target is invoked by a rule.<br>https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-monitoring.html</li><li>https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/CloudWatch-Events-Monitoring-CloudWatch-Metrics.html</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 989783,
          "date": "Sun 25 Feb 2024 10:27",
          "username": "Eminenza22",
          "content": "*Errata Corrige*<br>A<br><br>EventBridge sends metrics to Amazon CloudWatch every minute for everything from the number of matched events to the number of times a target is invoked by a rule.<br>https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-monitoring.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/CloudWatch-Events-Monitoring-CloudWatch-Metrics.html</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 989785,
          "date": "Sun 25 Feb 2024 10:30",
          "username": "Eminenza22",
          "content": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/CloudWatch-Events-Monitoring-CloudWatch-Metrics.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 987856,
          "date": "Fri 23 Feb 2024 04:14",
          "username": "jayce5",
          "content": "The answer is D:<br>\\\"CloudTrail captures API calls made by or on behalf of your AWS account from the EventBridge console and to EventBridge API operations.\\\" (https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-logging-monitoring.html)<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"API calls\\\" to AWS for managing EventBridge. Not \\\"API calls\\\" BY EventBridge to 3rd party APIs.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1111651,
          "date": "Tue 02 Jul 2024 06:48",
          "username": "pentium75",
          "content": "\\\"API calls\\\" to AWS for managing EventBridge. Not \\\"API calls\\\" BY EventBridge to 3rd party APIs.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 986633,
          "date": "Wed 21 Feb 2024 18:01",
          "username": "Guru4Cloud",
          "content": "The key reasons:<br><br>AWS CloudTrail provides visibility into EventBridge operations by logging API calls made by EventBridge.<br>Checking the CloudTrail trails will show the PutEvents API calls made when EventBridge rules match an event pattern.<br>CloudTrail will also log the Invoke API call when the rule target is triggered.<br>CloudWatch metrics and logs contain runtime performance data but not info on rule evaluation and targeting.<br>SQS dead letter queues collect failed event deliveries but won't provide insights on successful invocations.<br>CloudTrail is purpose-built to log operational events and API activity so it can confirm if the EventBridge rule is being evaluated and triggering the target as expected.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Amazon CloudWatch Logs is a service that collects and stores logs from Amazon Web Services (AWS) resources. These logs can be used to troubleshoot problems, monitor performance, and audit activity.<br>The other options are incorrect:<br>Option A: CloudWatch metrics are used to track the performance of AWS resources. They are not used to store events.<br>Option B: Amazon SQS dead-letter queues are used to store messages that cannot be delivered to their intended recipients. They are not used to store events.<br>Option D: AWS CloudTrail is a service that records AWS API calls. It can be used to track the activity of EventBridge rules, but it does not store the events themselves.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 988059,
          "date": "Fri 23 Feb 2024 10:37",
          "username": "Eminenza22",
          "content": "Amazon CloudWatch Logs is a service that collects and stores logs from Amazon Web Services (AWS) resources. These logs can be used to troubleshoot problems, monitor performance, and audit activity.<br>The other options are incorrect:<br>Option A: CloudWatch metrics are used to track the performance of AWS resources. They are not used to store events.<br>Option B: Amazon SQS dead-letter queues are used to store messages that cannot be delivered to their intended recipients. They are not used to store events.<br>Option D: AWS CloudTrail is a service that records AWS API calls. It can be used to track the activity of EventBridge rules, but it does not store the events themselves.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 973062,
          "date": "Mon 05 Feb 2024 16:25",
          "username": "Bennyboy789",
          "content": "Option A is the most appropriate solution because Amazon EventBridge publishes metrics to Amazon CloudWatch. You can find relevant metrics in the \\\"AWS/Events\\\" namespace, which allows you to monitor the number of events matched by the rule and the number of invocations to the rule's target.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 972986,
          "date": "Mon 05 Feb 2024 15:08",
          "username": "h8er",
          "content": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/CloudWatch-Events-Monitoring-CloudWatch-Metrics.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#570",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a large workload that runs every Friday evening. The workload runs on Amazon EC2 instances that are in two Availability Zones in the us-east-1 Region. Normally, the company must run no more than two instances at all times. However, the company wants to scale up to six instances each Friday to handle a regularly repeating increased workload.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#570",
          "answers": [
            {
              "choice": "<p>Create a reminder in Amazon EventBridge to scale the instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Auto Scaling group that has a scheduled action.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Auto Scaling group that uses manual scaling.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Auto Scaling group that uses automatic scaling.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 570 discussion",
      "discusstion": [
        {
          "id": 969527,
          "date": "Fri 02 Feb 2024 03:55",
          "username": "Bmaster",
          "content": "B is correct.<br><br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-scheduled-scaling.html",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 1205669,
          "date": "Sat 02 Nov 2024 17:49",
          "username": "wizcloudifa",
          "content": "A - too much operation overhead, manually provisioning the instances after you receive the reminder from eventbridge<br>B - right answer, as you can scale up the EC2 instances and keep them ready before large overload time<br>C - too much operation overhead in manually scaling<br>D - automatic scaling will scale up the instances after some duration after it has encountered the heavy workload traffic, not ideal",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1076093,
          "date": "Tue 21 May 2024 07:33",
          "username": "TariqKipkemei",
          "content": "runs every Friday eveningan Auto Scaling group that has a scheduled action",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 986631,
          "date": "Wed 21 Feb 2024 17:58",
          "username": "Guru4Cloud",
          "content": "The key reasons:<br><br>Auto Scaling scheduled actions allow defining specific dates/times to scale out or in. This can be used to scale to 6 instances every Friday evening automatically.<br>Scheduled scaling removes the need for manual intervention to scale up/down for the workload.<br>EventBridge reminders and manual scaling require human involvement each week adding overhead.<br>Automatic scaling responds to demand and may not align perfectly to scale out every Friday without additional tuning.<br>Scheduled Auto Scaling actions provide the automation needed to scale for the weekly workload without ongoing operational overhead.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 972485,
          "date": "Sun 04 Feb 2024 23:22",
          "username": "Sat897",
          "content": "Predicted period.. So schedule the instance",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 971330,
          "date": "Sat 03 Feb 2024 20:00",
          "username": "mrsoa",
          "content": "B seems to be correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 970943,
          "date": "Sat 03 Feb 2024 12:24",
          "username": "Deepakin96",
          "content": "When we know the run time is Friday, we can schedule the instance to 6",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 968117,
          "date": "Wed 31 Jan 2024 15:49",
          "username": "Josantru",
          "content": "Correct B.",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#571",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is creating a REST API. The company has strict requirements for the use of TLS. The company requires TLSv1.3 on the API endpoints. The company also requires a specific public third-party certificate authority (CA) to sign the TLS certificate.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#571",
          "answers": [
            {
              "choice": "<p>Use a local machine to create a certificate that is signed by the third-party CImport the certificate into AWS Certificate Manager (ACM). Create an HTTP API in Amazon API Gateway with a custom domain. Configure the custom domain to use the certificate.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a certificate in AWS Certificate Manager (ACM) that is signed by the third-party CA. Create an HTTP API in Amazon API Gateway with a custom domain. Configure the custom domain to use the certificate.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Certificate Manager (ACM) to create a certificate that is signed by the third-party CA. Import the certificate into AWS Certificate Manager (ACM). Create an AWS Lambda function with a Lambda function URL. Configure the Lambda function URL to use the certificate.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a certificate in AWS Certificate Manager (ACM) that is signed by the third-party CA. Create an AWS Lambda function with a Lambda function URL. Configure the Lambda function URL to use the certificate.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 571 discussion",
      "discusstion": [
        {
          "id": 1001082,
          "date": "Thu 07 Sep 2023 03:00",
          "username": "bjexamprep",
          "content": "I don't understand why some many people vote B. In ACM, you can either request certificate from Amazon CA or import an existing certificate. There is no option in ACM that allow you to request a certificate that can be signed by third party CA.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I fully agree</li><li>Hmm AWS is saying:<br>ACM certificates can be used to establish secure communications across the internet or within an internal network. You can request a publicly trusted certificate directly from ACM (an \\\"ACM certificate\\\") or import a publicly trusted certificate issued by a third party. Self-signed certificates are also supported. To provision your organization's internal PKI, you can issue ACM certificates signed by a private certificate authority (CA) created and managed by AWS Private CA. The CA may either reside in your account or be shared with you by a different account.<br><br>https://docs.aws.amazon.com/acm/latest/userguide/gs.html</li><li>Exactly. You can \\\"import [not create] a publicly trusted certificate issued by a third party\\\".</li></ul>",
          "upvote_count": "20",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1009203,
          "date": "Sat 16 Sep 2023 18:38",
          "username": "markoniz",
          "content": "I fully agree<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Hmm AWS is saying:<br>ACM certificates can be used to establish secure communications across the internet or within an internal network. You can request a publicly trusted certificate directly from ACM (an \\\"ACM certificate\\\") or import a publicly trusted certificate issued by a third party. Self-signed certificates are also supported. To provision your organization's internal PKI, you can issue ACM certificates signed by a private certificate authority (CA) created and managed by AWS Private CA. The CA may either reside in your account or be shared with you by a different account.<br><br>https://docs.aws.amazon.com/acm/latest/userguide/gs.html</li><li>Exactly. You can \\\"import [not create] a publicly trusted certificate issued by a third party\\\".</li></ul>",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1053528,
          "date": "Wed 25 Oct 2023 08:44",
          "username": "wsdasdasdqwdaw",
          "content": "Hmm AWS is saying:<br>ACM certificates can be used to establish secure communications across the internet or within an internal network. You can request a publicly trusted certificate directly from ACM (an \\\"ACM certificate\\\") or import a publicly trusted certificate issued by a third party. Self-signed certificates are also supported. To provision your organization's internal PKI, you can issue ACM certificates signed by a private certificate authority (CA) created and managed by AWS Private CA. The CA may either reside in your account or be shared with you by a different account.<br><br>https://docs.aws.amazon.com/acm/latest/userguide/gs.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Exactly. You can \\\"import [not create] a publicly trusted certificate issued by a third party\\\".</li></ul>",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1111661,
          "date": "Tue 02 Jan 2024 07:57",
          "username": "pentium75",
          "content": "Exactly. You can \\\"import [not create] a publicly trusted certificate issued by a third party\\\".",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 968889,
          "date": "Tue 01 Aug 2023 10:36",
          "username": "luiscc",
          "content": "AWS Certificate Manager (ACM) is a service that lets you easily provision, manage, and deploy SSL/TLS certificates for use with AWS services and your internal resources. By creating a certificate in ACM that is signed by the third-party CA, the company can meet its requirement for a specific public third-party CA to sign the TLS certificate.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Sounds like ChatGPT answer, \\\"creating a certificate in ACM that is signed by the third-party CA\\\" is not possible.</li></ul>",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1111663,
          "date": "Tue 02 Jan 2024 07:59",
          "username": "pentium75",
          "content": "Sounds like ChatGPT answer, \\\"creating a certificate in ACM that is signed by the third-party CA\\\" is not possible.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1239441,
          "date": "Sun 30 Jun 2024 01:37",
          "username": "emakid",
          "content": "A. Use a local machine to create a certificate that is signed by the third-party CA. Import the certificate into AWS Certificate Manager (ACM). Create an HTTP API in Amazon API Gateway with a custom domain. Configure the custom domain to use the certificate.<br><br>Reason:<br><br>Custom Certificate: Allows you to use a certificate signed by the third-party CA.<br>TLSv1.3 Support: API Gateway supports TLSv1.3 for custom domains.<br>Configuration: You can import the third-party CA certificate into ACM and configure API Gateway to use this certificate with a custom domain.<br><br>This approach meets all the specified requirements by allowing the use of a third-party CA-signed certificate and ensuring the API endpoints use TLSv1.3.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1120218,
          "date": "Thu 11 Jan 2024 22:47",
          "username": "awsgeek75",
          "content": "A is logical answer.<br>BCD are either misworded here or intentionally confusing. Regardless, you cannot create a cert in ACM that is signed by 3rd party CA. You can only import these certs to ACM.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1114997,
          "date": "Sat 06 Jan 2024 07:40",
          "username": "Shubhi_08",
          "content": "We can't create third party certificates in ACM.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1114195,
          "date": "Fri 05 Jan 2024 03:14",
          "username": "foha2012",
          "content": "Is this a question from the associate or professional exam ??",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1111667,
          "date": "Tue 02 Jan 2024 08:04",
          "username": "pentium75",
          "content": "ACM can import, but not create, 3rd party certificates. Leaves only A.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1101380,
          "date": "Wed 20 Dec 2023 09:27",
          "username": "maged123",
          "content": "You have already a publicly trusted certificate issued by a third party and you just need to import it in ACM not to creat a new one. So, the correct answer is A which is the only one that importing the certificate in ACM while B, C and D are creating a new one.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1089857,
          "date": "Thu 07 Dec 2023 00:45",
          "username": "sparun1607",
          "content": "The answer must be A,<br>You can't create a certificate in ACM, read the below link<br>https://docs.aws.amazon.com/acm/latest/userguide/setup.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1081916,
          "date": "Mon 27 Nov 2023 20:46",
          "username": "numark",
          "content": "Answer is A:Can I import a third-party certificate and use it with AWS services?<br><br>Yes. If you want to use a third-party certificate with Amazon CloudFront, Elastic Load Balancing, or Amazon API Gateway, you may import it into ACM using the AWS Management Console, AWS CLI, or ACM APIs. ACM does not manage the renewal process for imported certificates. You can use the AWS Management Console to monitor the expiration dates of an imported certificates and import a new third-party certificate to replace an expiring one.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1077201,
          "date": "Wed 22 Nov 2023 11:08",
          "username": "TariqKipkemei",
          "content": "It's 22/Nov/2023 and from the console you cant create a certificate in AWS Certificate Manager (ACM) that is signed by the third-party CA. But you could obtain it externally thenimport it into ACM.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1075623,
          "date": "Mon 20 Nov 2023 18:01",
          "username": "Tshring",
          "content": "Option B meets these requirements:<br><br>- API Gateway HTTP APIs support TLS 1.3<br>- ACM can import certificates signed by third-party CAs<br>- API Gateway provides REST APIs<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"ACM can import (!) certificates signed by third-party CA\\\", but not create (!) them as B suggests.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1111664,
          "date": "Tue 02 Jan 2024 07:59",
          "username": "pentium75",
          "content": "\\\"ACM can import (!) certificates signed by third-party CA\\\", but not create (!) them as B suggests.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1066785,
          "date": "Thu 09 Nov 2023 23:19",
          "username": "NickGordon",
          "content": "In ACM you can't create a cert signed by another CA. Dude, try it by yourself. There is no such option!",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 987966,
          "date": "Wed 23 Aug 2023 07:58",
          "username": "chen0305_099",
          "content": "WHY NOT A?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 986564,
          "date": "Mon 21 Aug 2023 15:49",
          "username": "Guru4Cloud",
          "content": "Use ACM to create a certificate signed by the third-party CA. ACM integrates with external CAs.<br>Create an API Gateway HTTP API with a custom domain name.<br>Configure the custom domain to use the ACM certificate. API Gateway supports configuring custom domains with ACM certificates.<br>This allows serving the API over TLS using the required third-party certificate and TLS 1.3 support.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"ACM integrates with external CAs.\\\" no</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1111666,
          "date": "Tue 02 Jan 2024 08:00",
          "username": "pentium75",
          "content": "\\\"ACM integrates with external CAs.\\\" no",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 980261,
          "date": "Sun 13 Aug 2023 21:49",
          "username": "taustin2",
          "content": "You can provide certificates for your integrated AWS services either by issuing them directly with ACM or by importing third-party certificates into the ACM management system.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 978067,
          "date": "Thu 10 Aug 2023 22:50",
          "username": "vini15",
          "content": "Should be A.<br>We need to import third-party certificate to ACM.",
          "upvote_count": "5",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#572",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an application on AWS. The application receives inconsistent amounts of usage. The application uses AWS Direct Connect to connect to an on-premises MySQL-compatible database. The on-premises database consistently uses a minimum of 2 GiB of memory.<br><br>The company wants to migrate the on-premises database to a managed AWS service. The company wants to use auto scaling capabilities to manage unexpected workload increases.<br><br>Which solution will meet these requirements with the LEAST administrative overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#572",
          "answers": [
            {
              "choice": "<p>Provision an Amazon DynamoDB database with default read and write capacity settings.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Provision an Amazon Aurora database with a minimum capacity of 1 Aurora capacity unit (ACU).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Provision an Amazon Aurora Serverless v2 database with a minimum capacity of 1 Aurora capacity unit (ACU).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Provision an Amazon RDS for MySQL database with 2 GiB of memory.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 572 discussion",
      "discusstion": [
        {
          "id": 986550,
          "date": "Mon 21 Aug 2023 15:38",
          "username": "Guru4Cloud",
          "content": "The key reasons:<br><br>Aurora Serverless v2 provides auto-scaling so the database can handle inconsistent workloads and spikes automatically without admin intervention.<br>It can scale down to zero when not in use to minimize costs.<br>The minimum 1 ACU capacity is sufficient to replace the on-prem 2 GiB database based on the info given.<br>Serverless capabilities reduce admin overhead for capacity management.<br>DynamoDB lacks MySQL compatibility and requires more hands-on management.<br>RDS and provisioned Aurora require manually resizing instances to scale, increasing admin overhead.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>&gt; It can scale down to zero when not in use to minimize costs.<br>This part is not correct. Aurora Serverless v1 was able to scale to zero.</li></ul>",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1177131,
          "date": "Tue 19 Mar 2024 09:40",
          "username": "dkw2342",
          "content": "> It can scale down to zero when not in use to minimize costs.<br>This part is not correct. Aurora Serverless v1 was able to scale to zero.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1010593,
          "date": "Mon 18 Sep 2023 14:34",
          "username": "kambarami",
          "content": "the questions are hard from 500 +<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I dont think these are associate exam questions rather are from AWS professional exam</li><li>Yes, I agree. I have been reading the pro questions and these are copy paste. On the bright side, it prepares you for the next step!</li></ul>",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 1114199,
          "date": "Fri 05 Jan 2024 03:17",
          "username": "foha2012",
          "content": "I dont think these are associate exam questions rather are from AWS professional exam<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Yes, I agree. I have been reading the pro questions and these are copy paste. On the bright side, it prepares you for the next step!</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1120226,
          "date": "Thu 11 Jan 2024 23:03",
          "username": "awsgeek75",
          "content": "Yes, I agree. I have been reading the pro questions and these are copy paste. On the bright side, it prepares you for the next step!",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 1239442,
          "date": "Sun 30 Jun 2024 01:43",
          "username": "emakid",
          "content": "C. Provision an Amazon Aurora Serverless v2 database with a minimum capacity of 1 Aurora capacity unit (ACU).<br><br>Suitability: Amazon Aurora Serverless v2 is a good option for applications with variable workloads because it automatically adjusts capacity based on demand. It can handle MySQL-compatible databases and supports auto-scaling. You can set the minimum and maximum capacity based on your needs, making it highly suitable for handling unexpected workload increases with minimal administrative overhead.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1120223,
          "date": "Thu 11 Jan 2024 23:01",
          "username": "awsgeek75",
          "content": "LEAST administrative overheadAurora Serverless",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1077205,
          "date": "Wed 22 Nov 2023 11:14",
          "username": "TariqKipkemei",
          "content": "LEAST administrative overheadServerless",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 981216,
          "date": "Tue 15 Aug 2023 04:00",
          "username": "ibu007",
          "content": "serverlessLEAST overhead",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 973921,
          "date": "Sun 06 Aug 2023 16:27",
          "username": "D10SJoker",
          "content": "Why not D?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>no autoscaling with RDS</li><li>Because \\\"LEAST administrative overhead\\\" is a requirement. RDS configured with mem requirements is an admin overhead</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1205790,
          "date": "Thu 02 May 2024 21:13",
          "username": "wizcloudifa",
          "content": "no autoscaling with RDS",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1120224,
          "date": "Thu 11 Jan 2024 23:02",
          "username": "awsgeek75",
          "content": "Because \\\"LEAST administrative overhead\\\" is a requirement. RDS configured with mem requirements is an admin overhead",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 971348,
          "date": "Thu 03 Aug 2023 19:35",
          "username": "mrsoa",
          "content": "C seems to be the right answer<br><br>Instead of provisioning and managing database servers, you specify Aurora capacity units (ACUs). Each ACU is a combination of approximately 2 gigabytes (GB) of memory, corresponding CPU, and networking. Database storage automatically scales from 10 gibibytes (GiB) to 128 tebibytes (TiB), the same as storage in a standard Aurora DB cluster<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v1.how-it-works.html<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 969533,
          "date": "Wed 02 Aug 2023 03:09",
          "username": "Bmaster",
          "content": "C is correct.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.how-it-works.html#aurora-serverless-v2.how-it-works.capacity",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#573",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to use an event-driven programming model with AWS Lambda. The company wants to reduce startup latency for Lambda functions that run on Java 11. The company does not have strict latency requirements for the applications. The company wants to reduce cold starts and outlier latencies when a function scales up.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#573",
          "answers": [
            {
              "choice": "<p>Configure Lambda provisioned concurrency.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Increase the timeout of the Lambda functions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Increase the memory of the Lambda functions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Lambda SnapStart.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 573 discussion",
      "discusstion": [
        {
          "id": 986548,
          "date": "Wed 21 Feb 2024 16:32",
          "username": "Guru4Cloud",
          "content": "The key reasons:<br><br>SnapStart keeps functions initialized and ready to respond quickly, eliminating cold starts.<br>SnapStart is optimized for applications without aggressive latency needs, reducing costs.<br>It scales automatically to match traffic spikes, eliminating outliers when scaling up.<br>SnapStart is a native Lambda feature with no additional charges, keeping costs low.<br>Provisioned concurrency incurs charges for always-on capacity reserved. More costly than SnapStart.<br>Increasing timeout and memory do not directly improve startup performance like SnapStart.",
          "upvote_count": "14",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 985945,
          "date": "Tue 20 Feb 2024 20:09",
          "username": "anikety123",
          "content": "Both Lambda SnapStart and provisioned concurrency can reduce cold starts and outlier latencies when a function scales up. SnapStart helps you improve startup performance by up to 10x at no extra cost. Provisioned concurrency keeps functions initialized and ready to respond in double-digit milliseconds. Configuring provisioned concurrency incurs charges to your AWS account. Use provisioned concurrency if your application has strict cold start latency requirements. You can't use both SnapStart and provisioned concurrency on the same function version.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1120228,
          "date": "Thu 11 Jul 2024 22:05",
          "username": "awsgeek75",
          "content": "https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html<br><br>\\\"Lambda SnapStart for Java can improve startup performance for latency-sensitive applications by up to 10x at no extra cost, typically with no changes to your function code.\\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Also<br>A: Solves concurrency issues not startup<br>B is for execution timeout (don't think that possible if I understand the option correctly)<br>C Memory is not the issue here</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1120229,
          "date": "Thu 11 Jul 2024 22:07",
          "username": "awsgeek75",
          "content": "Also<br>A: Solves concurrency issues not startup<br>B is for execution timeout (don't think that possible if I understand the option correctly)<br>C Memory is not the issue here",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1077210,
          "date": "Wed 22 May 2024 10:22",
          "username": "TariqKipkemei",
          "content": "Lambda SnapStart it is.<br><br>https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html#:~:textRSS-,Lambda%20SnapStart,-for%20Java%20can<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>only because its a Java 11 app...if it were any otherbesides JavaI believeProvisioned concurrency could help.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1077213,
          "date": "Wed 22 May 2024 10:24",
          "username": "TariqKipkemei",
          "content": "only because its a Java 11 app...if it were any otherbesides JavaI believeProvisioned concurrency could help.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1064063,
          "date": "Mon 06 May 2024 16:40",
          "username": "potomac",
          "content": "Lambda SnapStart for Java can improve startup performance for latency-sensitive applications by up to 10x at no extra cost, typically with no changes to your function code.<br><br>https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 991643,
          "date": "Tue 27 Feb 2024 23:21",
          "username": "BrijMohan08",
          "content": "https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 987689,
          "date": "Thu 22 Feb 2024 21:39",
          "username": "skyphilip",
          "content": "D is correct<br>Lambda SnapStart for Java can improve startup performance for latency-sensitive applications by up to 10x at no extra cost, typically with no changes to your function code. The largest contributor to startup latency (often referred to as cold start time) is the time that Lambda spends initializing the function, which includes loading the function's code, starting the runtime, and initializing the function code.<br><br>With SnapStart, Lambda initializes your function when you publish a function version. Lambda takes a Firecracker microVM snapshot of the memory and disk state of the initialized execution environment, encrypts the snapshot, and caches it for low-latency access. When you invoke the function version for the first time, and as the invocations scale up, Lambda resumes new execution environments from the cached snapshot instead of initializing them from scratch, improving startup latency.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 979280,
          "date": "Mon 12 Feb 2024 12:27",
          "username": "avkya",
          "content": "\\\"SnapStart does not support provisioned concurrency, the arm64 architecture, Amazon Elastic File System (Amazon EFS), or ephemeral storage greater than 512 MB.\\\" The question says \\\"The company wants to reduce cold starts\\\" This means provisioned concurrency. I'm a little bit confused with D.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 977332,
          "date": "Sat 10 Feb 2024 09:02",
          "username": "Woodlawn5700",
          "content": "D<br>https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 971352,
          "date": "Sat 03 Feb 2024 20:44",
          "username": "mrsoa",
          "content": "D is the answerLambda SnapStart for Java can improve startup performance for latency-sensitive applications by up to 10x at no extra cost, typically with no changes to your function code. The largest contributor to startup latency (often referred to as cold start time) is the time that Lambda spends initializing the function, which includes loading the function's code, starting the runtime, and initializing the function code.<br><br>https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 969542,
          "date": "Fri 02 Feb 2024 04:22",
          "username": "Bmaster",
          "content": "D is best!!<br>A is not MOST cost effectly.<br>lambda snapshot is new feature for lambda.<br><br>https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>misspell.... lambda snapstart</li></ul>",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 969543,
          "date": "Fri 02 Feb 2024 04:23",
          "username": "Bmaster",
          "content": "misspell.... lambda snapstart",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 968318,
          "date": "Wed 31 Jan 2024 19:41",
          "username": "RaksAWS",
          "content": "why not D<br>It should work",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#574",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services company launched a new application that uses an Amazon RDS for MySQL database. The company uses the application to track stock market trends. The company needs to operate the application for only 2 hours at the end of each week. The company needs to optimize the cost of running the database.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#574",
          "answers": [
            {
              "choice": "<p>Migrate the existing RDS for MySQL database to an Aurora Serverless v2 MySQL database cluster.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the existing RDS for MySQL database to an Aurora MySQL database cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the existing RDS for MySQL database to an Amazon EC2 instance that runs MySQL. Purchase an instance reservation for the EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the existing RDS for MySQL database to an Amazon Elastic Container Service (Amazon ECS) cluster that uses MySQL container images to run tasks.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 574 discussion",
      "discusstion": [
        {
          "id": 986525,
          "date": "Mon 21 Aug 2023 15:07",
          "username": "Guru4Cloud",
          "content": "The key reasons are:<br><br>Aurora Serverless v2 scales compute capacity automatically based on actual usage, down to zero when not in use. This minimizes costs for intermittent usage.<br>Since it only runs for 2 hours per week, the application is ideal for a serverless architecture like Aurora Serverless.<br>Aurora Serverless v2 charges per second when the database is active, unlike RDS which charges hourly.<br>Aurora Serverless provides higher availability than self-managed MySQL on EC2 or ECS.<br>Using reserved EC2 instances or ECS still incurs charges when not in use versus the fine-grained scaling of serverless.<br>Standard Aurora clusters have a minimum capacity unlike the auto-scaling serverless architecture.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A is correct, but Aurora Serverless v2 only scales down to 0.5 ACU, not to zero.</li></ul>",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1177139,
          "date": "Tue 19 Mar 2024 09:46",
          "username": "dkw2342",
          "content": "A is correct, but Aurora Serverless v2 only scales down to 0.5 ACU, not to zero.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1111669,
          "date": "Tue 02 Jan 2024 08:12",
          "username": "pentium75",
          "content": "2 hours per weekServerlessA. Recommended for \\\"infrequent, intermittent, or unpredictable workloads\\\"",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1323945,
          "date": "Mon 09 Dec 2024 10:27",
          "username": "LeonSauveterre",
          "content": "A: Aurora Serverless v2 offers the most cost-effective and operationally efficient solution for intermittent workloads like this.<br><br>B: over-provisioned and too expensive for this workload<br>C: Also expensive. You gotta pay for the instance 24/7, regardless of usage.<br>D: Introduces complexity and operational overhead for database management tasks. Overall, ECS is never easy to handle.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1120232,
          "date": "Thu 11 Jan 2024 23:09",
          "username": "awsgeek75",
          "content": "B is wrong because Aurora MySQL cluster will just keep on running for the rest of the week and will be costly.<br>C and D have too much infra bloating so costly",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1077241,
          "date": "Wed 22 Nov 2023 11:37",
          "username": "TariqKipkemei",
          "content": "Answer is A.<br>Here are the key distinctions:<br><br>Amazon Aurora: provides built-in security, continuous backups, serverless compute, up to 15 read replicas, automated multi-Region replication, and integrations with other AWS services.<br><br>Amazon Aurora Serverless: is an on-demand, auto-scaling configuration for Aurora where the database automatically starts up, shuts down, and scales capacity up or down based on your application's needs.<br><br>With serverless the db will shut down when not in use.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 985943,
          "date": "Sun 20 Aug 2023 19:04",
          "username": "anikety123",
          "content": "Option is A",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 984993,
          "date": "Sat 19 Aug 2023 07:31",
          "username": "hachiri",
          "content": "### Aurora Serverless<br><br>- Automated database instantiation and auto-scaling based on actual usage<br>- Good for infrequent, intermittent or unpredictable workloads<br>- No capacity planning needed<br>- Pay per second, can be more cost-effective",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 978208,
          "date": "Fri 11 Aug 2023 04:11",
          "username": "vini15",
          "content": "will go with A<br>Amazon Aurora Serverless v2 is suitable for the most demanding, highly variable workloads. For example, your database usage might be heavy for a short period of time, followed by long periods of light activity or no activity at all.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 975268,
          "date": "Tue 08 Aug 2023 08:48",
          "username": "msdnpro",
          "content": "\\\"Amazon Aurora Serverless v2 is suitable for the most demanding, highly variable workloads. For example, your database usage might be heavy for a short period of time, followed by long periods of light activity or no activity at all. \\\"<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.how-it-works.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 975245,
          "date": "Tue 08 Aug 2023 07:46",
          "username": "ersin13",
          "content": "A. Migrate the existing RDS for MySQL database to an Aurora Serverless v2 MySQL database cluster.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 971359,
          "date": "Thu 03 Aug 2023 19:55",
          "username": "mrsoa",
          "content": "B seems to be the correct answer, because if we have a predictable workload Aurora database seems to be most cost effective however if we have unpredictable workload aurora serverless seems to be more cost effective because our database will scale up and down<br><br>for more informations please read this article<br>https://medium.com/trackit/aurora-or-aurora-serverless-v2-which-is-more-cost-effective-bcd12e172dcf<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>according to the link, i understand that Aurora Serverless is ideal for sudden peaks in database usage with moderate or minimal usage during other periods of the day. So Answear is A</li><li>True but due to autoscaling - it will be cheaper...check example#1 in the your link.</li><li>Correct Answer is A</li><li>Provisioned RDS (as in B) is good for steady (not \\\"predictable\\\") workloads. In this case, the workload is predictable, but the prediction is that it will be used only 2 hours per week.</li><li>Aurora Serverless is for \\\"infrequent, intermittent, OR unpredictable workloads\\\"</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1067259,
          "date": "Fri 10 Nov 2023 14:43",
          "username": "Chef_couincouin",
          "content": "according to the link, i understand that Aurora Serverless is ideal for sudden peaks in database usage with moderate or minimal usage during other periods of the day. So Answear is A",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 989533,
          "date": "Fri 25 Aug 2023 01:05",
          "username": "Smart",
          "content": "True but due to autoscaling - it will be cheaper...check example#1 in the your link.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Correct Answer is A</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 989535,
          "date": "Fri 25 Aug 2023 01:06",
          "username": "Smart",
          "content": "Correct Answer is A",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1111668,
          "date": "Tue 02 Jan 2024 08:10",
          "username": "pentium75",
          "content": "Provisioned RDS (as in B) is good for steady (not \\\"predictable\\\") workloads. In this case, the workload is predictable, but the prediction is that it will be used only 2 hours per week.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Aurora Serverless is for \\\"infrequent, intermittent, OR unpredictable workloads\\\"</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1111670,
          "date": "Tue 02 Jan 2024 08:12",
          "username": "pentium75",
          "content": "Aurora Serverless is for \\\"infrequent, intermittent, OR unpredictable workloads\\\"",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#575",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company deploys its applications on Amazon Elastic Kubernetes Service (Amazon EKS) behind an Application Load Balancer in an AWS Region. The application needs to store data in a PostgreSQL database engine. The company wants the data in the database to be highly available. The company also needs increased capacity for read workloads.<br><br>Which solution will meet these requirements with the MOST operational efficiency?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#575",
          "answers": [
            {
              "choice": "<p>Create an Amazon DynamoDB database table configured with global tables.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon RDS database with Multi-AZ deployments.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon RDS database with Multi-AZ DB cluster deployment.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon RDS database configured with cross-Region read replicas.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 575 discussion",
      "discusstion": [
        {
          "id": 986518,
          "date": "Mon 21 Aug 2023 14:57",
          "username": "Guru4Cloud",
          "content": "RDS Multi-AZ DB cluster deployments provide high availability, automatic failover, and increased read capacity.<br>A multi-AZ cluster automatically handles replicating data across AZs in a single region.<br>This maintains operational efficiency as it is natively managed by RDS without needing external replication.<br>DynamoDB global tables involve complex provisioning and requires app changes.<br>RDS read replicas require manual setup and management of replication.<br>RDS Multi-AZ clustering is purpose-built by AWS for HA PostgreSQL deployments and balancing read workloads.",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 968891,
          "date": "Tue 01 Aug 2023 10:41",
          "username": "luiscc",
          "content": "DB cluster deployment can scale read workloads by adding read replicas. This provides increased capacity for read workloads without impacting the write workload.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1284499,
          "date": "Mon 16 Sep 2024 07:54",
          "username": "MatAlves",
          "content": "\\\"A Multi-AZ DB cluster deployment is a semisynchronous, high availability deployment mode of Amazon RDS with two readable replica DB instances.\\\"",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1131029,
          "date": "Wed 24 Jan 2024 19:56",
          "username": "upliftinghut",
          "content": "multi-AZ addresses both HA & increased read capacity with synchronous data replication between main DB & standby. Read replica is not enough because only increased read capacity not enabling HA, besides the data replication is async",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1120238,
          "date": "Thu 11 Jan 2024 23:14",
          "username": "awsgeek75",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html<br>\\\"A Multi-AZ DB cluster deployment is a semisynchronous, high availability deployment mode of Amazon RDS with two readable standby DB instances\\\"<br>A: DynamoDB is not Postgres<br>B: Although HA is achieve but it does not increase the read capacity as much as C without additional operational complexity<br>D: Cross region is not a requirement and won't solve the same region HA or read issues",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1095483,
          "date": "Wed 13 Dec 2023 14:12",
          "username": "aws94",
          "content": "Multi-AZ DB Cluster DeploymentAurora",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1077248,
          "date": "Wed 22 Nov 2023 11:40",
          "username": "TariqKipkemei",
          "content": "Multi-AZ DB cluster deployments provides two readable DB instances if you need additional read capacity",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1064064,
          "date": "Mon 06 Nov 2023 17:43",
          "username": "potomac",
          "content": "C is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 979288,
          "date": "Sat 12 Aug 2023 11:39",
          "username": "avkya",
          "content": "Multi-AZ DB clusters provide high availability, increased capacity for read workloads, and lower write latency when compared to Multi-AZ DB instance deployments.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 972603,
          "date": "Sat 05 Aug 2023 02:57",
          "username": "mrsoa",
          "content": "CCCCCCCCCcCCcCcCCCCccccCc",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#576",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a RESTful serverless web application on AWS by using Amazon API Gateway and AWS Lambda. The users of this web application will be geographically distributed, and the company wants to reduce the latency of API requests to these users.<br><br>Which type of endpoint should a solutions architect use to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#576",
          "answers": [
            {
              "choice": "<p>Private endpoint<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Regional endpoint<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Interface VPC endpoint<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Edge-optimized endpoint<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 576 discussion",
      "discusstion": [
        {
          "id": 971365,
          "date": "Sat 03 Feb 2024 21:03",
          "username": "mrsoa",
          "content": "The correct answer is D<br><br>API Gateway - Endpoint Types<br> - Edge-Optimized (default): For global clients<br> - Requests are routed through the CloudFront Edge locations (improves latency)<br> - The API Gateway still lives in only one region<br>- Regional:<br> - For clients within the same region<br> - Could manually combine with CloudFront (more control over the caching<br> strategies and the distribution)<br>- Private:<br> - Can only be accessed from your VPC using an interface VPC endpoint (ENI)<br> - Use a resource policy to define access",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1064068,
          "date": "Mon 06 May 2024 16:49",
          "username": "potomac",
          "content": "An edge-optimized API endpoint typically routes requests to the nearest CloudFront Point of Presence (POP), which could help in cases where your clients are geographically distributed. This is the default endpoint type for API Gateway REST APIs.<br><br>https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-endpoint-types.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1127010,
          "date": "Fri 19 Jul 2024 23:34",
          "username": "awsgeek75",
          "content": "geographically distributed users + low latencyEdge optimized ednpoint",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1077265,
          "date": "Wed 22 May 2024 10:48",
          "username": "TariqKipkemei",
          "content": "An edge-optimized API endpoint typically routes requests to the nearest CloudFront Point of Presence (POP), which could help in cases where your clients are geographically distributed. This is the default endpoint type for API Gateway REST APIs.<br><br>https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-endpoint-types.html#:~:textAPI%20endpoint%20typically-,routes,-requests%20to%20the",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1064565,
          "date": "Tue 07 May 2024 07:00",
          "username": "dilaaziz",
          "content": "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-endpoint-types.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 986512,
          "date": "Wed 21 Feb 2024 15:51",
          "username": "Guru4Cloud",
          "content": "Edge-optimized endpoint",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 968139,
          "date": "Wed 31 Jan 2024 16:14",
          "username": "Josantru",
          "content": "Correct D.<br><br>Edge-optimized API endpoints<br>An edge-optimized API endpoint is best for geographically distributed clients. API requests are routed to the nearest CloudFront Point of Presence (POP). This is the default endpoint type for API Gateway REST APIs.",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#577",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses an Amazon CloudFront distribution to serve content pages for its website. The company needs to ensure that clients use a TLS certificate when accessing the company's website. The company wants to automate the creation and renewal of the TLS certificates.<br><br>Which solution will meet these requirements with the MOST operational efficiency?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#577",
          "answers": [
            {
              "choice": "<p>Use a CloudFront security policy to create a certificate.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use a CloudFront origin access control (OAC) to create a certificate.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Certificate Manager (ACM) to create a certificate. Use DNS validation for the domain.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Certificate Manager (ACM) to create a certificate. Use email validation for the domain.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 577 discussion",
      "discusstion": [
        {
          "id": 969579,
          "date": "Fri 02 Feb 2024 05:27",
          "username": "Bmaster",
          "content": "C is correct.<br><br>\\\"ACM provides managed renewal for your Amazon-issued SSL/TLS certificates. This means that ACM will either renew your certificates automatically (if you are using DNS validation), or it will send you email notices when expiration is approaching. These services are provided for both public and private ACM certificates.\\\"<br><br>https://docs.aws.amazon.com/acm/latest/userguide/managed-renewal.html",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 986508,
          "date": "Wed 21 Feb 2024 15:50",
          "username": "Guru4Cloud",
          "content": "The key reasons are:<br><br>AWS Certificate Manager (ACM) provides free public TLS/SSL certificates and handles certificate renewals automatically.<br>Using DNS validation with ACM is operationally efficient since it automatically makes changes to Route 53 rather than requiring manual validation steps.<br>ACM integrates natively with CloudFront distributions for delivering HTTPS content.<br>CloudFront security policies and origin access controls do not issue TLS certificates.<br>Email validation requires manual steps to approve the domain validation emails for each renewal.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1120241,
          "date": "Thu 11 Jul 2024 22:17",
          "username": "awsgeek75",
          "content": "For me, C is the only realistic option as I don't think you can do AB without a lot of complexity. D just makes no sense.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 997735,
          "date": "Sun 03 Mar 2024 18:32",
          "username": "ibu007",
          "content": "Use AWS Certificate Manager (ACM) to create a certificate. Use DNS validation for the domain",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 988927,
          "date": "Sat 24 Feb 2024 09:59",
          "username": "chen0305_099",
          "content": "C =E4=BC=BC=E4=B9=8E=E6=98=AF=E6=AD=A3=E7=A2=BA=E7=9A=84",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 972883,
          "date": "Mon 05 Feb 2024 13:07",
          "username": "Kiki_Pass",
          "content": "\\\"DNS Validation is preferred for automation purposes\\\" -- Stephane's course on Udemy",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 971366,
          "date": "Sat 03 Feb 2024 21:06",
          "username": "mrsoa",
          "content": "C seems to be correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 969601,
          "date": "Fri 02 Feb 2024 06:28",
          "username": "nananashi",
          "content": "I think the general product uses DNS rather than email to automate, is the given answer correct?",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#578",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company deployed a serverless application that uses Amazon DynamoDB as a database layer. The application has experienced a large increase in users. The company wants to improve database response time from milliseconds to microseconds and to cache requests to the database.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#578",
          "answers": [
            {
              "choice": "<p>Use DynamoDB Accelerator (DAX).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the database to Amazon Redshift.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the database to Amazon RDS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon ElastiCache for Redis.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 578 discussion",
      "discusstion": [
        {
          "id": 973208,
          "date": "Sat 05 Aug 2023 19:02",
          "username": "h8er",
          "content": "Amazon DynamoDB Accelerator (DAX) is a fully managed, highly available, in-memory cache for Amazon DynamoDB that delivers up to a 10 times performance improvement=E2=80=94from milliseconds to microseconds=E2=80=94even at millions of requests per second.<br><br>https://aws.amazon.com/dynamodb/dax/#:~:textAmazon%20DynamoDB%20Accelerator%20(DAX)%20is,millions%20of%20requests%20per%20second.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1284501,
          "date": "Mon 16 Sep 2024 08:01",
          "username": "MatAlves",
          "content": "Amazon ElastiCache for Redis would help with \\\"caching requests\\\", but not \\\" improve database response\\\" itself.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1120246,
          "date": "Thu 11 Jan 2024 23:20",
          "username": "awsgeek75",
          "content": "DAX is least operations overhead.<br>B: Redshift, although powerful, but is for analytics<br>C: Downgrading to RDS won't help<br>D: EC for Redis is more for persistent caching so would be good but lot of operational overhead",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1077274,
          "date": "Wed 22 Nov 2023 11:54",
          "username": "TariqKipkemei",
          "content": "improveDynamoDB response time from milliseconds to microseconds and to cache requests to the databaseDynamoDB Accelerator (DAX)",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 986501,
          "date": "Mon 21 Aug 2023 14:43",
          "username": "Guru4Cloud",
          "content": "Use DynamoDB Accelerator (DAX).<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Which is A, not C.</li><li>Quote A but mark C. You need more coffee mate :)</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1111673,
          "date": "Tue 02 Jan 2024 08:15",
          "username": "pentium75",
          "content": "Which is A, not C.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1120247,
          "date": "Thu 11 Jan 2024 23:21",
          "username": "awsgeek75",
          "content": "Quote A but mark C. You need more coffee mate :)",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 971368,
          "date": "Thu 03 Aug 2023 20:08",
          "username": "mrsoa",
          "content": "Ais the right answer",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 969580,
          "date": "Wed 02 Aug 2023 04:31",
          "username": "Bmaster",
          "content": "Correct A.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#579",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an application that uses Amazon RDS for PostgreSQL. The application receives traffic only on weekdays during business hours. The company wants to optimize costs and reduce operational overhead based on this usage.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#579",
          "answers": [
            {
              "choice": "<p>Use the Instance Scheduler on AWS to configure start and stop schedules.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Turn off automatic backups. Create weekly manual snapshots of the database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a custom AWS Lambda function to start and stop the database based on minimum CPU utilization.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Purchase All Upfront reserved DB instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 579 discussion",
      "discusstion": [
        {
          "id": 1064069,
          "date": "Mon 06 May 2024 16:53",
          "username": "potomac",
          "content": "The Instance Scheduler on AWS solution automates the starting and stopping of Amazon Elastic Compute Cloud (Amazon EC2) and Amazon Relational Database Service (Amazon RDS) instances.<br><br>This solution helps reduce operational costs by stopping resources that are not in use and starting them when they are needed. The cost savings can be significant if you leave all of your instances running at full utilization continuously.<br>https://aws.amazon.com/solutions/implementations/instance-scheduler-on-aws/",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1111674,
          "date": "Tue 02 Jul 2024 07:18",
          "username": "pentium75",
          "content": "B increases operational overhead<br>C Lambda functions could work but NOT \\\"based on minimum CPU utilization\\\"<br>D might save cost but not as much as A",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 997730,
          "date": "Sun 03 Mar 2024 18:30",
          "username": "ibu007",
          "content": "A. Use the Instance Scheduler on AWS to configure start and stop schedules<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Why not D?</li><li>How do you actually reduce costs enough to buy upfront instances that you pay for them if you use them 1 h or 24 and it is payed to run 24h. It says that you use this instances 8 hours a day 5 days a week, totaling 40h a week.... so is it the difference from 40h to 168 h?</li><li>When you buy Reserved Instances, the larger the upfront payment, the greater the discount. To maximize your savings, you can pay all up-front and receive the largest discount. Partial up-front RI's offer lower discounts but give you the option to spend less up front. Lastly, you can choose to spend nothing up front and receive a smaller discount, but allowing you to free up capital to spend in other projects.<br><br>But you need some mechanism to stop on weekend and in night to save cost.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1020312,
          "date": "Fri 29 Mar 2024 03:11",
          "username": "baba365",
          "content": "Why not D?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>How do you actually reduce costs enough to buy upfront instances that you pay for them if you use them 1 h or 24 and it is payed to run 24h. It says that you use this instances 8 hours a day 5 days a week, totaling 40h a week.... so is it the difference from 40h to 168 h?</li><li>When you buy Reserved Instances, the larger the upfront payment, the greater the discount. To maximize your savings, you can pay all up-front and receive the largest discount. Partial up-front RI's offer lower discounts but give you the option to spend less up front. Lastly, you can choose to spend nothing up front and receive a smaller discount, but allowing you to free up capital to spend in other projects.<br><br>But you need some mechanism to stop on weekend and in night to save cost.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1088759,
          "date": "Wed 05 Jun 2024 19:29",
          "username": "AndreiWebNet",
          "content": "How do you actually reduce costs enough to buy upfront instances that you pay for them if you use them 1 h or 24 and it is payed to run 24h. It says that you use this instances 8 hours a day 5 days a week, totaling 40h a week.... so is it the difference from 40h to 168 h?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>When you buy Reserved Instances, the larger the upfront payment, the greater the discount. To maximize your savings, you can pay all up-front and receive the largest discount. Partial up-front RI's offer lower discounts but give you the option to spend less up front. Lastly, you can choose to spend nothing up front and receive a smaller discount, but allowing you to free up capital to spend in other projects.<br><br>But you need some mechanism to stop on weekend and in night to save cost.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1101370,
          "date": "Thu 20 Jun 2024 08:15",
          "username": "master9",
          "content": "When you buy Reserved Instances, the larger the upfront payment, the greater the discount. To maximize your savings, you can pay all up-front and receive the largest discount. Partial up-front RI's offer lower discounts but give you the option to spend less up front. Lastly, you can choose to spend nothing up front and receive a smaller discount, but allowing you to free up capital to spend in other projects.<br><br>But you need some mechanism to stop on weekend and in night to save cost.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 996979,
          "date": "Sat 02 Mar 2024 18:40",
          "username": "ErnShm",
          "content": "A<br>https://docs.aws.amazon.com/solutions/latest/instance-scheduler-on-aws/solution-overview.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 986495,
          "date": "Wed 21 Feb 2024 15:39",
          "username": "Guru4Cloud",
          "content": "Purpose-built scheduling minimizes operational overhead.<br>Aligns instance running time precisely with business hour demands.<br>Maintains backups unlike disabling auto backups.<br>More cost effective and flexible than reserved instances.<br>Simpler to implement than a custom Lambda function.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 985863,
          "date": "Tue 20 Feb 2024 17:34",
          "username": "anikety123",
          "content": "Its B. Check the AWS link<br><br>https://aws.amazon.com/solutions/implementations/instance-scheduler-on-aws/?nc1h_ls<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Sorry I wanted to select A.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 985864,
          "date": "Tue 20 Feb 2024 17:35",
          "username": "anikety123",
          "content": "Sorry I wanted to select A.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 971370,
          "date": "Sat 03 Feb 2024 21:09",
          "username": "mrsoa",
          "content": "Ahttps://aws.amazon.com/solutions/implementations/instance-scheduler-on-aws/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 968317,
          "date": "Wed 31 Jan 2024 19:40",
          "username": "luiscc",
          "content": "Scheduler do the job",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#580",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses locally attached storage to run a latency-sensitive application on premises. The company is using a lift and shift method to move the application to the AWS Cloud. The company does not want to change the application architecture.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#580",
          "answers": [
            {
              "choice": "<p>Configure an Auto Scaling group with an Amazon EC2 instance. Use an Amazon FSx for Lustre file system to run the application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Host the application on an Amazon EC2 instance. Use an Amazon Elastic Block Store (Amazon EBS) GP2 volume to run the application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Auto Scaling group with an Amazon EC2 instance. Use an Amazon FSx for OpenZFS file system to run the application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Host the application on an Amazon EC2 instance. Use an Amazon Elastic Block Store (Amazon EBS) GP3 volume to run the application.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 580 discussion",
      "discusstion": [
        {
          "id": 1077280,
          "date": "Fri 22 Nov 2024 11:59",
          "username": "TariqKipkemei",
          "content": "MOST cost-effectively GP3",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1064074,
          "date": "Wed 06 Nov 2024 17:57",
          "username": "potomac",
          "content": "gp3 offers SSD-performance at a 20% lower cost per GB than gp2 volumes.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 996344,
          "date": "Sun 01 Sep 2024 20:29",
          "username": "bojila",
          "content": "GP3 is the lastest version",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 993659,
          "date": "Fri 30 Aug 2024 04:33",
          "username": "Hades2231",
          "content": "GP3 is the lastest version, and it is cost effective",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 986485,
          "date": "Wed 21 Aug 2024 14:24",
          "username": "Guru4Cloud",
          "content": "GP3 is preferable over GP2, FSx for Lustre, and FSx for OpenZFS is clear and convincing:<br><br>GP3 offers identical latency performance to GP2 at a lower price point.<br>FSx options are higher performance but more expensive and require application changes.<br>GP3 aligns better with lift and shift needs as a directly attached block storage volume.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 980285,
          "date": "Tue 13 Aug 2024 22:29",
          "username": "taustin2",
          "content": "Migrate your Amazon EBS volumes from gp2 to gp3 and save up to 20% on costs.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 979845,
          "date": "Tue 13 Aug 2024 09:49",
          "username": "Vadbro7",
          "content": "Y not gp2",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 976607,
          "date": "Fri 09 Aug 2024 13:55",
          "username": "Ale1973",
          "content": "My rational:<br>Options A y C are based on autoscaling-group and no make sense for me on this scenary.<br>Then, use Amazon EBS is the solution and GP2 or GP3 is the question.<br>Requirement requires the most COST effective solution, then, I choose GP3",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#581",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a stateful production application on Amazon EC2 instances. The application requires at least two EC2 instances to always be running.<br><br>A solutions architect needs to design a highly available and fault-tolerant architecture for the application. The solutions architect creates an Auto Scaling group of EC2 instances.<br><br>Which set of additional steps should the solutions architect take to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#581",
          "answers": [
            {
              "choice": "<p>Set the Auto Scaling group's minimum capacity to two. Deploy one On-Demand Instance in one Availability Zone and one On-Demand Instance in a second Availability Zone.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set the Auto Scaling group's minimum capacity to four. Deploy two On-Demand Instances in one Availability Zone and two On-Demand Instances in a second Availability Zone.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Set the Auto Scaling group's minimum capacity to two. Deploy four Spot Instances in one Availability Zone.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set the Auto Scaling group's minimum capacity to four. Deploy two On-Demand Instances in one Availability Zone and two Spot Instances in a second Availability Zone.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 581 discussion",
      "discusstion": [
        {
          "id": 968888,
          "date": "Tue 01 Aug 2023 10:32",
          "username": "luiscc",
          "content": "By setting the Auto Scaling group's minimum capacity to four, the architect ensures that there are always at least two running instances. Deploying two On-Demand Instances in each of two Availability Zones ensures that the application is highly available and fault-tolerant. If one Availability Zone becomes unavailable, the application can still run in the other Availability Zone.",
          "upvote_count": "18",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 976312,
          "date": "Wed 09 Aug 2023 08:20",
          "username": "Ale1973",
          "content": "My rational is: Highly available2 AZ,and then 2 EC2 instances always running is 1 EC2 in each AZ. If an entire AZ fails, SacalinGroup deploy the minimun instances (2) on the running AZ<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Ans: A.<br><br>The application requires at least two EC2 instances to always be running2 minimum capacity=E2=80=A6 minimum cap of 4 ec2 will work but a waste of resources that doesn't follow well archi. framework.</li><li>it says always have to have two running, hence you need 4. two in each AV. it might be a waste of resource but if that what is required by the company then so be it. Also you out the 4 you cannot use spot instances because if the two instances on the on demand go down and you need to use the spot instance they could be called back at any point.</li><li>AZ * not AV</li></ul>",
          "upvote_count": "13",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1021098,
          "date": "Sat 30 Sep 2023 01:22",
          "username": "baba365",
          "content": "Ans: A.<br><br>The application requires at least two EC2 instances to always be running2 minimum capacity=E2=80=A6 minimum cap of 4 ec2 will work but a waste of resources that doesn't follow well archi. framework.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>it says always have to have two running, hence you need 4. two in each AV. it might be a waste of resource but if that what is required by the company then so be it. Also you out the 4 you cannot use spot instances because if the two instances on the on demand go down and you need to use the spot instance they could be called back at any point.</li><li>AZ * not AV</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1025566,
          "date": "Thu 05 Oct 2023 13:19",
          "username": "Ramdi1",
          "content": "it says always have to have two running, hence you need 4. two in each AV. it might be a waste of resource but if that what is required by the company then so be it. Also you out the 4 you cannot use spot instances because if the two instances on the on demand go down and you need to use the spot instance they could be called back at any point.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>AZ * not AV</li></ul>",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1025567,
          "date": "Thu 05 Oct 2023 13:20",
          "username": "Ramdi1",
          "content": "AZ * not AV",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1239450,
          "date": "Sun 30 Jun 2024 02:15",
          "username": "emakid",
          "content": "Option A:<br><br>Set the Auto Scaling group's minimum capacity to two. Deploy one On-Demand Instance in one Availability Zone and one On-Demand Instance in a second Availability Zone.<br>This configuration ensures that you have two instances running across two different AZs, which provides high availability. However, it does not take advantage of additional capacity to handle failures or spikes in demand. If either AZ becomes unavailable, you will have one running instance, but this does not meet the requirement of having at least two running instances at all times.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1239449,
          "date": "Sun 30 Jun 2024 02:14",
          "username": "emakid",
          "content": "Set the Auto Scaling group's minimum capacity to four. Deploy two On-Demand Instances in one Availability Zone and two On-Demand Instances in a second Availability Zone.<br><br>This configuration provides high availability with four instances distributed across two AZs. The minimum capacity of four ensures that even if one instance fails, there are still two instances in each AZ to handle the load. This option is highly available and fault-tolerant but may be more than required if only two instances are needed to be always running.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1228775,
          "date": "Wed 12 Jun 2024 04:06",
          "username": "cjace",
          "content": "Answer is A: If one Availability Zone fails, the Auto Scaling group will automatically launch a new instance in a different, healthy Availability Zone to maintain the desired capacity of two instances. This is one of the key benefits of using Auto Scaling groups=E2=80=94they automatically maintain the desired number of instances across multiple Availability Zones, ensuring that your application is highly available and fault-tolerant. So even in the event of a failure in one Availability Zone, your application will continue to run on the required number of instances. This is why it's recommended to distribute instances across multiple Availability Zones when designing architectures for high availability and fault tolerance.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>that is reasonable. but what do you think about \\\"always\\\"? With A, there's a moment there would be only one EC2 healthy.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1307238,
          "date": "Tue 05 Nov 2024 08:44",
          "username": "LuongTo",
          "content": "that is reasonable. but what do you think about \\\"always\\\"? With A, there's a moment there would be only one EC2 healthy.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1119828,
          "date": "Thu 11 Jan 2024 14:41",
          "username": "Marco_St",
          "content": "so indeed ASG can set up a new EC2 instance in another AZ if there is one AZ failed with fault but it failed to meet the need of always having 2 instance running before the new instance replacement is done in the working AZ. so this is why we deploy 2 instances per AZ",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1111680,
          "date": "Tue 02 Jan 2024 08:23",
          "username": "pentium75",
          "content": "If it would not mention the \\\"stateful\\\" application, and if it would only have to be \\\"highly available\\\" but NOT \\\"fault-tolerant\\\", A would be fine.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1081813,
          "date": "Mon 27 Nov 2023 18:11",
          "username": "1rob",
          "content": "From <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-best-practices.html: Spot Instances are not suitable for workloads that are inflexible, stateful, fault-intolerant, or tightly coupled between instance nodes. So C and D don't fit.<br><br>From <https://docs.aws.amazon.com/whitepapers/latest/real-time-communication-on-aws/use-multiple-availability-zones.html : Within the constructs of AWS, customers are encouraged to run their workloads in more than one Availability Zone. This ensures that customer applications can withstand even a complete Availability Zone failure - a very rare event in itself.<br><br>So a HA solution in this case implies a total of 4 instances, 2 per AZ.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1078196,
          "date": "Thu 23 Nov 2023 08:39",
          "username": "TariqKipkemei",
          "content": "The main requirement here is a'highly available and fault-tolerant architecture for the application',this covered by option B.<br>The application requires at least two EC2 instances to always be running, main word here being 'atleast' which means more than two is ok.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1025570,
          "date": "Thu 05 Oct 2023 13:20",
          "username": "Ramdi1",
          "content": "B - Need 2 in each AZ and you cant use spot instances as it could be recalled.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1021388,
          "date": "Sat 30 Sep 2023 12:14",
          "username": "Mandar15",
          "content": "Stateful is keyword here. 2 is minimum required all time.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>minimum of 2x EC2 instances per AZ at all times.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1316722,
          "date": "Sat 23 Nov 2024 17:04",
          "username": "JA2018",
          "content": "minimum of 2x EC2 instances per AZ at all times.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1002575,
          "date": "Fri 08 Sep 2023 16:28",
          "username": "Mll1975",
          "content": "If a complete AZ fails, autoscale will lunch a second EC2 in the running AZ. If that short period of time is not always, which is not, then the answer is B, but I would take my chances and select A in the exam xD because the application is highly available and fault-tolerant.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 986477,
          "date": "Mon 21 Aug 2023 14:13",
          "username": "Guru4Cloud",
          "content": "=C2=B0 Minimum of 4 ensures at least 2 instances are always running in each AZ, meeting the HA requirement.<br>=C2=B0 On-Demand instances provide consistent performance and availability, unlike Spot.<br>=C2=B0 Spreading across 2 AZs adds fault tolerance, protecting from AZ failure.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 975978,
          "date": "Tue 08 Aug 2023 21:39",
          "username": "darkknight23",
          "content": "While Spot Instances can be used to reduce costs, they might not provide the same level of availability and guaranteed uptime that On-Demand Instances offer. So I will go with B and not D.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 972199,
          "date": "Fri 04 Aug 2023 15:30",
          "username": "Sat897",
          "content": "Highly available - 2 AZ and then 2 EC2 instances always running. 2 in each AZ.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 972196,
          "date": "Fri 04 Aug 2023 15:29",
          "username": "Sat897",
          "content": "Highly available - 2 AZ and then 2 EC2 instances always running. 2 in each AZ..",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#582",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company uses Amazon Route 53 as its DNS provider. The company hosts its website on premises and in the AWS Cloud. The company's on-premises data center is near the us-west-1 Region. The company uses the eu-central-1 Region to host the website. The company wants to minimize load time for the website as much as possible.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#582",
          "answers": [
            {
              "choice": "<p>Set up a geolocation routing policy. Send the traffic that is near us-west-1 to the on-premises data center. Send the traffic that is near eu-central-1 to eu-central-1.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Set up a simple routing policy that routes all traffic that is near eu-central-1 to eu-central-1 and routes all traffic that is near the on-premises datacenter to the on-premises data center.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up a latency routing policy. Associate the policy with us-west-1.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up a weighted routing policy. Split the traffic evenly between eu-central-1 and the on-premises data center.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 582 discussion",
      "discusstion": [
        {
          "id": 986460,
          "date": "Wed 21 Feb 2024 14:55",
          "username": "Guru4Cloud",
          "content": "The key reasons are:<br><br>Geolocation routing allows you to route users to the closest endpoint based on their geographic location. This will provide the lowest latency.<br>Routing us-west-1 traffic to the on-premises data center minimizes latency for those users since it is also located near there.<br>Routing eu-central-1 traffic to the eu-central-1 AWS region minimizes latency for users nearby.<br>This achieves routing users to the closest endpoint on a geographic basis to optimize for low latency.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>why can't be the option C</li><li>You cannot associate the policy to us-west-1 as the AWS account is in eu-central-1</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 990025,
          "date": "Sun 25 Feb 2024 14:53",
          "username": "PLN6302",
          "content": "why can't be the option C<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You cannot associate the policy to us-west-1 as the AWS account is in eu-central-1</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 990892,
          "date": "Mon 26 Feb 2024 18:07",
          "username": "lemur88",
          "content": "You cannot associate the policy to us-west-1 as the AWS account is in eu-central-1",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1120255,
          "date": "Thu 11 Jul 2024 22:33",
          "username": "awsgeek75",
          "content": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-geo.html<br>B can be done but definition of \\\"near\\\" is ambiguous<br>C wrong region<br>D wrong solution as splitting evenly does not reduce latency for on-prem server users",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1101355,
          "date": "Thu 20 Jun 2024 07:48",
          "username": "Cyberkayu",
          "content": "not C. Client do not have AWS us-west-1 region. Client have a on prem DC near west-1<br>not D. 2 people visit the site together near eu-central-1, one of the user may be thrown to west-1 due to load balancing on split even weighted policy.<br><br>A and B are both valid, latencyhow soon user reach the datacenter and received a responses from the DC, round trip. So in short, geolocationor send user to the nearest DC will improve latency.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1078201,
          "date": "Thu 23 May 2024 07:43",
          "username": "TariqKipkemei",
          "content": "Geolocation routing policy allows you to route traffic based on the location of your users.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1077739,
          "date": "Wed 22 May 2024 19:35",
          "username": "t0nx",
          "content": "C. Set up a latency routing policy. Associate the policy with us-west-1.<br><br>Explanation:<br><br>A latency routing policy directs traffic based on the lowest network latency to the specified AWS endpoint. Since the on-premises data center is near the us-west-1 Region, associating the policy with us-west-1 ensures that users near that region will be directed to the on-premises data center.<br><br>This allows for optimal routing, minimizing the load time for users based on their geographical proximity to the respective hosting locations (us-west-1 and eu-central-1).<br><br>Options A, B, and D do not explicitly consider latency or are not optimal for minimizing load time:<br><br>Option A (geolocation routing policy) would direct traffic based on the geographic location of the user but may not necessarily optimize for the lowest latency.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>There is nothing in us-west-1 as the company's data centre is near us-west-1.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1127012,
          "date": "Fri 19 Jul 2024 23:47",
          "username": "awsgeek75",
          "content": "There is nothing in us-west-1 as the company's data centre is near us-west-1.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1074824,
          "date": "Sun 19 May 2024 18:13",
          "username": "Chiquitabandita",
          "content": "except I don't think that it should be applied to the west region.If Geolocation is applied and the west is closer to the client, but the west is having intermittent issues at the time, they will have a longer latency even though closer to that region.this is why I would apply latency in a real world solution.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1074821,
          "date": "Sun 19 May 2024 18:09",
          "username": "Chiquitabandita",
          "content": "in real world I think it should use latency routing if the main concern is to lower the latency but AWS likes to promote geolocation and if that is in the question I think that will be the answer so I choose A.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1021102,
          "date": "Sat 30 Mar 2024 02:34",
          "username": "baba365",
          "content": "The company wants to minimize load time for the website as much as possible=E2=80=A6 between data Centre and website or between users and website?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 993657,
          "date": "Thu 29 Feb 2024 05:29",
          "username": "Hades2231",
          "content": "Geolocation is the key word",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 990894,
          "date": "Mon 26 Feb 2024 18:08",
          "username": "lemur88",
          "content": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-geo.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#583",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has 5 PB of archived data on physical tapes. The company needs to preserve the data on the tapes for another 10 years for compliance purposes. The company wants to migrate to AWS in the next 6 months. The data center that stores the tapes has a 1 Gbps uplink internet connectivity.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#583",
          "answers": [
            {
              "choice": "<p>Read the data from the tapes on premises. Stage the data in a local NFS storage. Use AWS DataSync to migrate the data to Amazon S3 Glacier Flexible Retrieval.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an on-premises backup application to read the data from the tapes and to write directly to Amazon S3 Glacier Deep Archive.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Order multiple AWS Snowball devices that have Tape Gateway. Copy the physical tapes to virtual tapes in Snowball. Ship the Snowball devices to AWS. Create a lifecycle policy to move the tapes to Amazon S3 Glacier Deep Archive.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an on-premises Tape Gateway. Create virtual tapes in the AWS Cloud. Use backup software to copy the physical tape to the virtual tape.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 583 discussion",
      "discusstion": [
        {
          "id": 992233,
          "date": "Mon 28 Aug 2023 15:31",
          "username": "adeyinkaamole",
          "content": "If you have made it to the end ofthe exam dump, you will definitely pass your exams in Jesus name. After over a year of Procrastination, I am finally ready to write my AWS Solutions Architect Exam. Thank you Exam Topics",
          "upvote_count": "27",
          "selected_answers": ""
        },
        {
          "id": 993656,
          "date": "Wed 30 Aug 2023 04:28",
          "username": "Hades2231",
          "content": "Ready for the exam tomorrow. Wish you guys all the best. BTW Snowball Device comes in handy when you need to move a huge amount of data but cant afford any bandwidth loss",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1284510,
          "date": "Mon 16 Sep 2024 08:34",
          "username": "MatAlves",
          "content": "Oh, to think now we have to study 904 questions instead of just 583 lol<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>currently (22 Nov 2024), question count now stands at 1.019</li><li>well, 2 weeks later today, it says 981 questions...</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1316727,
          "date": "Sat 23 Nov 2024 17:09",
          "username": "JA2018",
          "content": "currently (22 Nov 2024), question count now stands at 1.019",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1290821,
          "date": "Sun 29 Sep 2024 00:14",
          "username": "XXXXXlNN",
          "content": "well, 2 weeks later today, it says 981 questions...",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1120257,
          "date": "Thu 11 Jan 2024 23:36",
          "username": "awsgeek75",
          "content": "5PB over 1GB connection will take approximately 15 months so anything with \\\"transfer\\\" is invalid. ABD are not practical.<br>C: Just order snowball",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1111688,
          "date": "Tue 02 Jan 2024 08:50",
          "username": "pentium75",
          "content": "Though we'll need more than 60 Snowball devices, C is the only option that works. The internet uplink could transport less than 2 PB in 6 months (otherwise, say with a 10 Gb uplink, D would work).",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1101363,
          "date": "Wed 20 Dec 2023 08:56",
          "username": "Cyberkayu",
          "content": "transfer 5 PB data in 1Gbps link, assume 0 overhead and drop packet, need 485 days, 10 hours, 50 minutes, 40 seconds to complete.<br><br>Snowball it is. C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1088142,
          "date": "Tue 05 Dec 2023 03:00",
          "username": "SHAAHIBHUSHANAWS",
          "content": "C<br>https://docs.aws.amazon.com/storagegateway/latest/tgw/using-tape-gateway-snowball.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1078208,
          "date": "Thu 23 Nov 2023 08:55",
          "username": "TariqKipkemei",
          "content": "Migrate petabyte-scale data stored on physical tapes to AWS using AWS Snowball<br>https://aws.amazon.com/snowball/#:~:textMigrate-,petabyte%2Dscale,-data%20stored%20on",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1072309,
          "date": "Thu 16 Nov 2023 10:42",
          "username": "hungta",
          "content": "5 PB data is too huge for using 1Gbps uplink. With this uplink, it takes more than 1 year to migrate this data.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1021113,
          "date": "Sat 30 Sep 2023 01:59",
          "username": "baba365",
          "content": "Answer: D for most cost effective.<br><br>If you are looking for a cost-effective, durable, long-term, offsite alternative for data archiving, deploy a Tape Gateway. With its virtual tape library (VTL) interface, you can use your existing tape-based backup software infrastructure to store data on virtual tape cartridges that you create -<br><br>https://docs.aws.amazon.com/storagegateway/latest/tgw/WhatIsStorageGateway.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1015558,
          "date": "Sun 24 Sep 2023 09:31",
          "username": "Devsin2000",
          "content": "D<br>https://aws.amazon.com/storagegateway/vtl/<br>the bandwidth and available time is ample",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1014254,
          "date": "Fri 22 Sep 2023 17:10",
          "username": "nnecode",
          "content": "The most cost-effective solution to meet the requirements is to read the data from the tapes on premises. Stage the data in a local NFS storage. Use AWS DataSync to migrate the data to Amazon S3 Glacier Flexible Retrieval.<br><br>This solution is the most cost-effective because it uses the least amount of bandwidth. AWS DataSync is a service that transfers data between on-premises storage and Amazon S3. It uses a variety of techniques to optimize the transfer speed and reduce c",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 990899,
          "date": "Sat 26 Aug 2023 17:11",
          "username": "lemur88",
          "content": "Only thing that makes sense given the 1Gbps limitation",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 986452,
          "date": "Mon 21 Aug 2023 13:41",
          "username": "Guru4Cloud",
          "content": "Option C is likely the most cost-effective solution given the large data size and limited internet bandwidth. The physical data transfer and integration with the existing tape infrastructure provides efficiency benefits that can optimize the cost.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 982667,
          "date": "Wed 16 Aug 2023 16:22",
          "username": "barracouto",
          "content": "Went through this dump twice now. Exam is in about an hour. Will update with results.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>how was ur exam?<br>was thesedump que helpful?</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 988295,
          "date": "Wed 23 Aug 2023 14:21",
          "username": "Vaishali12",
          "content": "how was ur exam?<br>was thesedump que helpful?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 977784,
          "date": "Thu 10 Aug 2023 16:54",
          "username": "riccardoto",
          "content": "Finished the dump today - taking my exam tomorrow :-) Wish me luck!",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 976323,
          "date": "Wed 09 Aug 2023 08:35",
          "username": "Ale1973",
          "content": "My rational: question is about which solution will meet these requirements MOST cost-effectively, not MOST time or effectively, then, my response is D (using Tape Gateways)",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#584",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is deploying an application that processes large quantities of data in parallel. The company plans to use Amazon EC2 instances for the workload. The network architecture must be configurable to prevent groups of nodes from sharing the same underlying hardware.<br><br>Which networking solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#584",
          "answers": [
            {
              "choice": "<p>Run the EC2 instances in a spread placement group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Group the EC2 instances in separate accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the EC2 instances with dedicated tenancy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the EC2 instances with shared tenancy.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 584 discussion",
      "discusstion": [
        {
          "id": 994489,
          "date": "Thu 31 Aug 2023 00:19",
          "username": "czyboi",
          "content": "A spread placement group is a group of instances that are each placed on distinct hardware.<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1111699,
          "date": "Tue 02 Jan 2024 09:04",
          "username": "pentium75",
          "content": "A, spread placement group does exactly what is required here.<br>NotC and D, tenancy determines whether the hardware is shared with other customers or not, it has nothing to with your own instances sharing hardware. (On the contrary, dedicated tenancy would spread your EC2 instances across as little nodes as possible.)<br><br>Not B, accounts have nothing to do with the issue.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1239453,
          "date": "Sun 30 Jun 2024 02:22",
          "username": "emakid",
          "content": "Option A: Run the EC2 instances in a spread placement group.<br><br>Spread Placement Group: This placement group strategy ensures that EC2 instances are distributed across distinct hardware to reduce the risk of correlated failures. Instances in a spread placement group are placed on different underlying hardware, which aligns with the requirement to prevent groups of nodes from sharing the same underlying hardware. This is a good fit for the scenario where you need to ensure high availability and fault tolerance.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1237832,
          "date": "Thu 27 Jun 2024 03:28",
          "username": "Gape4",
          "content": "Spread =E2=80=93 Strictly places a small group of instances across distinct underlying hardware to reduce correlated failures.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1119865,
          "date": "Thu 11 Jan 2024 15:40",
          "username": "Marco_St",
          "content": "dedicated tenancy cannot ensure the instances share the same hardware. So A",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1101412,
          "date": "Wed 20 Dec 2023 10:44",
          "username": "maged123",
          "content": "Let's assume that you have two groups of instances, group A and group B and you have two physical hardware X and Y. With spread placement group, you can have group A of instances on hardware X and group B on hardware Y but this will not prevent hardware X to host other instances of other customers because your only requirement is to separate group A from group B. On the other hand, the dedicated tenancy means that AWS will dedicate the physical hardware only for you. So, the correct answer is A.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1095489,
          "date": "Wed 13 Dec 2023 14:19",
          "username": "Murtadhaceit",
          "content": "Question is ambiguous and confusing. Is it asking about the EC2 instance of the same application not sharing hardware? or EC2 instance not sharing hardware with other EC2 from other applications?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1088881,
          "date": "Wed 06 Dec 2023 00:45",
          "username": "Mikado211",
          "content": "Spread placement group allows you to isolate your instances on hardware level.<br>Dedicated tenancy allows you to be sure that you are the only customer on the hardware.<br><br>The correct answer is A.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A : Spread placement group</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1088882,
          "date": "Wed 06 Dec 2023 00:46",
          "username": "Mikado211",
          "content": "A : Spread placement group",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1084544,
          "date": "Thu 30 Nov 2023 17:31",
          "username": "lucasbg",
          "content": "Def is A: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1078220,
          "date": "Thu 23 Nov 2023 09:14",
          "username": "TariqKipkemei",
          "content": "Keywords 'prevent groups of nodes from sharing the same underlying hardware'.<br>Spread Placement Group strictly places a small group of instances across distinct underlying hardware to reduce correlated failures.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1068828,
          "date": "Sun 12 Nov 2023 20:35",
          "username": "cciesam",
          "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html<br>Each instances is placed on seven different racks, each rack has its own network and power source.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1053606,
          "date": "Wed 25 Oct 2023 11:47",
          "username": "wsdasdasdqwdaw",
          "content": "Another tricky question, but I would go for A because:<br><br>Dedicated instances:<br>Dedicated Instances are EC2 instances that run on hardware that's dedicated to a single customer. Dedicated Instances that belong to different AWS accounts are physically isolated at a hardware level, even if those accounts are linked to a single payer account. However, Dedicated Instances might share hardware with other instances from the same AWS account that are not Dedicated Instances.<br>Which is not the desired option.<br><br>Spread =E2=80=93 strictly places a small group of instances across distinct underlying hardware to reduce correlated failures.<br><br>That's why A.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1017457,
          "date": "Tue 26 Sep 2023 08:32",
          "username": "garuta",
          "content": "C is clear.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"Dedicated tenancy\\\" means that all your nodes run on hardware that is not shared with other customers. This is counter-productive to the objective here.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1111694,
          "date": "Tue 02 Jan 2024 09:02",
          "username": "pentium75",
          "content": "\\\"Dedicated tenancy\\\" means that all your nodes run on hardware that is not shared with other customers. This is counter-productive to the objective here.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1015559,
          "date": "Sun 24 Sep 2023 09:34",
          "username": "Devsin2000",
          "content": "A<br>When you launch a new EC2 instance, the EC2 service attempts to place the instance in such a way that all of your instances are spread out across underlying hardware to minimize correlated failures.<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1014381,
          "date": "Fri 22 Sep 2023 19:51",
          "username": "taustin2",
          "content": "Spread Placement Group strictly places a small group of instances across distinct underlying hardware to reduce correlated failures.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1007659,
          "date": "Thu 14 Sep 2023 14:59",
          "username": "Guru4Cloud",
          "content": "C is the correct answer.<br><br>Configuring the EC2 instances with dedicated tenancy ensures that each instance will run on isolated, single-tenant hardware. This meets the requirement to prevent groups of nodes from sharing underlying hardware.<br><br>A spread placement group only provides isolation at the Availability Zone level. Instances could still share hardware within an AZ.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No. C ensures that your EC2 instances run on hardware that is not shared with other customers (!). It is still shared among YOUR instances.</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1111695,
          "date": "Tue 02 Jan 2024 09:03",
          "username": "pentium75",
          "content": "No. C ensures that your EC2 instances run on hardware that is not shared with other customers (!). It is still shared among YOUR instances.",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 995272,
          "date": "Thu 31 Aug 2023 18:20",
          "username": "Eminenza22",
          "content": "Option A is the correct answer. It suggests running the EC2 instances in a spread placement group. This solution is cost-effective and requires minimal development effort .<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The placement group reduces the risk of simultaneous failures by spreading the instances across distinct underlying hardware</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 996151,
          "date": "Fri 01 Sep 2023 17:07",
          "username": "Eminenza22",
          "content": "The placement group reduces the risk of simultaneous failures by spreading the instances across distinct underlying hardware",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#585",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing a disaster recovery (DR) strategy to provide Amazon EC2 capacity in a failover AWS Region. Business requirements state that the DR strategy must meet capacity in the failover Region.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#585",
          "answers": [
            {
              "choice": "<p>Purchase On-Demand Instances in the failover Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Purchase an EC2 Savings Plan in the failover Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Purchase regional Reserved Instances in the failover Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Purchase a Capacity Reservation in the failover Region.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 585 discussion",
      "discusstion": [
        {
          "id": 1329348,
          "date": "Fri 20 Dec 2024 09:08",
          "username": "EllenLiu",
          "content": "it is called on-demand capacity reservation actually . no discount. must specify the following attributes:<br>Availability Zone & Instance type & os type & tenancy<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>DR is a classic use case for capacity reservation</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1329351,
          "date": "Fri 20 Dec 2024 09:10",
          "username": "EllenLiu",
          "content": "DR is a classic use case for capacity reservation",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1239454,
          "date": "Sun 30 Jun 2024 02:25",
          "username": "emakid",
          "content": "Option D: Purchase a Capacity Reservation in the failover Region.<br><br>Capacity Reservation: Capacity Reservations ensure that you have reserved capacity in a specific region for your instances, regardless of whether you are using On-Demand or Reserved Instances. This is ideal for DR scenarios because it guarantees that the required EC2 capacity will be available when needed.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1120263,
          "date": "Thu 11 Jan 2024 23:47",
          "username": "awsgeek75",
          "content": "\\\"Business requirements state that the DR strategy must meet capacity in the failover Region\\\"<br>so only D meets these requirements<br>A. No reservation of capacity<br>B. Saving plans don't guarantee capacity<br>C. Can be possible but it's like an active instance so doesn't really make sense<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Correction on C (I mixed it up with tenancy!). Reserved instance are not really for capacity, its for type of instance which gives good discount but that is not required here.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1120264,
          "date": "Thu 11 Jan 2024 23:49",
          "username": "awsgeek75",
          "content": "Correction on C (I mixed it up with tenancy!). Reserved instance are not really for capacity, its for type of instance which gives good discount but that is not required here.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1104655,
          "date": "Sun 24 Dec 2023 15:34",
          "username": "Derek_G",
          "content": "Purchase a Capacity Reservation in the failover Region:<br><br>A Capacity Reservation allows you to reserve a specific amount of EC2 instance capacity in a given region without purchasing specific instances. This reserved capacity is dedicated to your account and can be utilized for launching instances when needed. Capacity Reservations offer flexibility, allowing you to launch different instance types and sizes within the reserved capacity.<br><br>Purchase regional Reserved Instances in the failover Region:<br><br>Regional Reserved Instances involve paying an upfront fee to reserve a certain number of specific EC2 instances in a particular region. These reserved instances are of a predefined type and size, providing a more traditional reservation model. Regional Reserved Instances are specific to a designated region and ensure that the reserved instances of a particular specification are available when needed.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>What I don't get is... can't you accomplish that by using on-demand? I understood that you can scale infinitely</li><li>It won't guarantee that you have the capacity when you need it. If available, like in most cases, it'll work. But the scenario requires a guarantee that the capacity will be available.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1176131,
          "date": "Mon 18 Mar 2024 01:30",
          "username": "TheLaPlanta",
          "content": "What I don't get is... can't you accomplish that by using on-demand? I understood that you can scale infinitely<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It won't guarantee that you have the capacity when you need it. If available, like in most cases, it'll work. But the scenario requires a guarantee that the capacity will be available.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1182824,
          "date": "Mon 25 Mar 2024 23:31",
          "username": "Tanidanindo",
          "content": "It won't guarantee that you have the capacity when you need it. If available, like in most cases, it'll work. But the scenario requires a guarantee that the capacity will be available.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1088140,
          "date": "Tue 05 Dec 2023 02:58",
          "username": "SHAAHIBHUSHANAWS",
          "content": "D<br>Ask is to reserve capacity with RI capacity is not reserved also you can reserve capacity along with RI but only in AZ .<br>https://repost.aws/knowledge-center/ri-reserved-capacity",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1078221,
          "date": "Thu 23 Nov 2023 09:17",
          "username": "TariqKipkemei",
          "content": "Capacity Reservations mitigate against the risk of being unable to get On-Demand capacity in case there are capacity constraints. If you have strict capacity requirements, and are running business-critical workloads that require a certain level of long or short-term capacity assurance, create a Capacity Reservation to ensure that you always have access to Amazon EC2 capacity when you need it, for as long as you need it.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1064151,
          "date": "Mon 06 Nov 2023 19:26",
          "username": "potomac",
          "content": "Capacity Reservations enable you to reserve capacity for your Amazon EC2 instances in a specific Availability Zone for any duration. This gives you the flexibility to selectively add capacity reservations and still get the Regional RI discounts for that usage. By creating Capacity Reservations, you ensure that you always have access to Amazon EC2 capacity when you need it, for as long as you need it.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Savings Plans does not provide a capacity reservation.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1064153,
          "date": "Mon 06 Nov 2023 19:28",
          "username": "potomac",
          "content": "Savings Plans does not provide a capacity reservation.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1007652,
          "date": "Thu 14 Sep 2023 14:54",
          "username": "Guru4Cloud",
          "content": "Capacity Reservations allocate EC2 capacity in a specific AWS Region for you to launch instances.<br>The capacity is reserved and available to be utilized when needed, meeting the requirement to provide EC2 capacity in the failover region.<br>Other options do not reserve capacity. On-Demand provides flexible capacity but does not reserve capacity upfront. Savings Plans and Reserved Instances provide discounts but do not reserve capacity.<br>Capacity Reservations allow defining instance attributes like instance type, platform, Availability Zone so the reserved capacity matches the production environment.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 998428,
          "date": "Mon 04 Sep 2023 11:33",
          "username": "Eminenza22",
          "content": "A regional Reserved Instance does not reserve capacity<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/reserved-instances-scope.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 997383,
          "date": "Sun 03 Sep 2023 08:39",
          "username": "judyda",
          "content": "reserved instances for price discount. need capacity reservation.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 995957,
          "date": "Fri 01 Sep 2023 12:46",
          "username": "gispankaj",
          "content": "The Reserved Instance discount applies to instance usage within the instance family, regardless of size.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"Reserved Instances are not physical instances, but rather a billing discount \\\"<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1111700,
          "date": "Tue 02 Jan 2024 09:07",
          "username": "pentium75",
          "content": "\\\"Reserved Instances are not physical instances, but rather a billing discount \\\"<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 995948,
          "date": "Fri 01 Sep 2023 12:32",
          "username": "ErnShm",
          "content": "D<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#586",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has five organizational units (OUs) as part of its organization in AWS Organizations. Each OU correlates to the five businesses that the company owns. The company's research and development (R&amp;D) business is separating from the company and will need its own organization. A solutions architect creates a separate new management account for this purpose.<br><br>What should the solutions architect do next in the new management account?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#586",
          "answers": [
            {
              "choice": "<p>Have the R&D AWS account be part of both organizations during the transition.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Invite the R&D AWS account to be part of the new organization after the R&D AWS account has left the prior organization.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new R&D AWS account in the new organization. Migrate resources from the prior R&D AWS account to the new R&D AWS account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Have the R&D AWS account join the new organization. Make the new management account a member of the prior organization.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 586 discussion",
      "discusstion": [
        {
          "id": 1120267,
          "date": "Thu 11 Jan 2024 23:54",
          "username": "awsgeek75",
          "content": "An account can only join another org when it leaves the first org.<br>A is wrong as it's not possible<br>C that's a new account so not really a migration<br>D The R&D department is separating from the company so you don't want the OU to join via nesting",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1111731,
          "date": "Tue 02 Jan 2024 09:53",
          "username": "pentium75",
          "content": "B as exactly described here: https://repost.aws/knowledge-center/organizations-move-accounts",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1239456,
          "date": "Sun 30 Jun 2024 02:29",
          "username": "emakid",
          "content": "Option B: Invite the R&D AWS account to be part of the new organization after the R&D AWS account has left the prior organization is the appropriate approach. This option ensures that the R&D AWS account transitions smoothly from the old organization to the new one. The steps involved are:<br><br>Remove the R&D AWS account from the existing organization: This is done from the existing organization's management account.<br><br>Invite the R&D AWS account to join the new organization: Once the R&D account is no longer part of the previous organization, it can be invited to and accepted into the new organization.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1119877,
          "date": "Thu 11 Jan 2024 16:01",
          "username": "Marco_St",
          "content": "https://aws.amazon.com/blogs/mt/migrating-accounts-between-aws-organizations-with-consolidated-billing-to-all-features/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1108468,
          "date": "Fri 29 Dec 2023 09:08",
          "username": "ale_brd_111",
          "content": "https://repost.aws/knowledge-center/organizations-move-accounts<br>Remove the member account from the old organization.<br>Send an invite to the member account from the new organization.<br>Accept the invite to the new organization from the member account.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1104644,
          "date": "Sun 24 Dec 2023 15:11",
          "username": "Derek_G",
          "content": "C is better. first migrate , then delete. avoid the data lose.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>What kind of \\\"data lose\\\" would happen when you change the account to a new organization? And why should you migrate ALL RESOURCES of the account to a new account?</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1111727,
          "date": "Tue 02 Jan 2024 09:50",
          "username": "pentium75",
          "content": "What kind of \\\"data lose\\\" would happen when you change the account to a new organization? And why should you migrate ALL RESOURCES of the account to a new account?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1104641,
          "date": "Sun 24 Dec 2023 15:07",
          "username": "Derek_G",
          "content": "C is better.first migrate , then delete.avoid the data lose.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1078225,
          "date": "Thu 23 Nov 2023 09:23",
          "username": "TariqKipkemei",
          "content": "As per this document, B is clearly the answer.<br>https://repost.aws/knowledge-center/organizations-move-accounts#:~:textIn%20either%20case%2C-,perform%20these%20actions,-for%20each%20member",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1018934,
          "date": "Wed 27 Sep 2023 17:12",
          "username": "Joben",
          "content": "In either case, perform these actions for each member account:<br>- Remove the member account from the old organization.<br>- Send an invite to the member account from the new organization.<br>- Accept the invite to the new organization from the member account.<br><br>https://repost.aws/knowledge-center/organizations-move-accounts",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1012997,
          "date": "Thu 21 Sep 2023 12:45",
          "username": "Guru4Cloud",
          "content": "Creating a brand new AWS account in the new organization (Option C) allows for a clean separation and migration of only the necessary resources from the old account to the new.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"A clean separation\\\" is already existing, they have their own account. \\\"Migration of only the necessary resources from the old account to the new\\\" is not asked for. They have an account in an existing organization, they need their own organization, thus move the existing account to a new organisation (B), done.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1111729,
          "date": "Tue 02 Jan 2024 09:51",
          "username": "pentium75",
          "content": "\\\"A clean separation\\\" is already existing, they have their own account. \\\"Migration of only the necessary resources from the old account to the new\\\" is not asked for. They have an account in an existing organization, they need their own organization, thus move the existing account to a new organisation (B), done.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1007537,
          "date": "Thu 14 Sep 2023 13:42",
          "username": "Guru4Cloud",
          "content": "When separating a business unit from an AWS Organizations structure, best practice is to:<br><br>Create a new AWS account dedicated for the business unit in the new organization<br>Migrate resources from the old account to the new account<br>Remove the old account from the original organization<br>This allows a clean break between the organizations and avoids any linking between them after separation.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Says who?</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1111730,
          "date": "Tue 02 Jan 2024 09:52",
          "username": "pentium75",
          "content": "Says who?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 996006,
          "date": "Fri 01 Sep 2023 13:37",
          "username": "ErnShm",
          "content": "B<br>https://aws.amazon.com/blogs/mt/migrating-accounts-between-aws-organizations-with-consolidated-billing-to-all-features/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 995954,
          "date": "Fri 01 Sep 2023 12:43",
          "username": "gispankaj",
          "content": "account can leave current organization and then join new organization.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#587",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is designing a solution to capture customer activity in different web applications to process analytics and make predictions. Customer activity in the web applications is unpredictable and can increase suddenly. The company requires a solution that integrates with other web applications. The solution must include an authorization step for security purposes.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#587",
          "answers": [
            {
              "choice": "<p>Configure a Gateway Load Balancer (GWLB) in front of an Amazon Elastic Container Service (Amazon ECS) container instance that stores the information that the company receives in an Amazon Elastic File System (Amazon EFS) file system. Authorization is resolved at the GWLB.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon API Gateway endpoint in front of an Amazon Kinesis data stream that stores the information that the company receives in an Amazon S3 bucket. Use an AWS Lambda function to resolve authorization.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon API Gateway endpoint in front of an Amazon Kinesis Data Firehose that stores the information that the company receives in an Amazon S3 bucket. Use an API Gateway Lambda authorizer to resolve authorization.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a Gateway Load Balancer (GWLB) in front of an Amazon Elastic Container Service (Amazon ECS) container instance that stores the information that the company receives on an Amazon Elastic File System (Amazon EFS) file system. Use an AWS Lambda function to resolve authorization.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 587 discussion",
      "discusstion": [
        {
          "id": 995222,
          "date": "Thu 31 Aug 2023 17:05",
          "username": "ralfj",
          "content": "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1239458,
          "date": "Sun 30 Jun 2024 02:36",
          "username": "emakid",
          "content": "Option C: Configure an Amazon API Gateway endpoint in front of an Amazon Kinesis Data Firehose that stores the information that the company receives in an Amazon S3 bucket. Use an API Gateway Lambda authorizer to resolve authorization.<br><br>This solution meets the requirements in the following ways:<br><br>Handles Unpredictable Traffic: Amazon Kinesis Data Firehose can handle variable amounts of streaming data and automatically scales to accommodate sudden increases in traffic.<br><br>Integration with Web Applications: Amazon API Gateway provides a RESTful API endpoint for integrating with web applications.<br><br>Authorization: An API Gateway Lambda authorizer provides the necessary authorization step to secure API access.<br><br>Data Storage: Amazon Kinesis Data Firehose can deliver data directly to an Amazon S3 bucket for storage, making it suitable for long-term analytics and predictions.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1217201,
          "date": "Fri 24 May 2024 06:23",
          "username": "Matte_",
          "content": "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You cannot use Kinesis Data stream to store data in S3. You need Firehose for that.</li><li>Ummm. This link (Use API Gateway Lambda authorizers) helps to validate \\\"C\\\" as the correct answer, not \\\"B\\\".</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1284512,
          "date": "Mon 16 Sep 2024 08:48",
          "username": "MatAlves",
          "content": "You cannot use Kinesis Data stream to store data in S3. You need Firehose for that.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1221366,
          "date": "Thu 30 May 2024 03:37",
          "username": "Mr_Marcus",
          "content": "Ummm. This link (Use API Gateway Lambda authorizers) helps to validate \\\"C\\\" as the correct answer, not \\\"B\\\".",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1124371,
          "date": "Tue 16 Jan 2024 18:05",
          "username": "4fad2f8",
          "content": "B. Amazon Kinesis Data Firehose does not save anything<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>option C...Amazon Kinesis Data Firehose that stores the information (that the company receives) in an Amazon S3 bucket.<br>This answer statement is worded in a complex way. It means to say that Firehose stores the data in S3 ...which company receives from API Gateway.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1145623,
          "date": "Fri 09 Feb 2024 17:09",
          "username": "jaswantn",
          "content": "option C...Amazon Kinesis Data Firehose that stores the information (that the company receives) in an Amazon S3 bucket.<br>This answer statement is worded in a complex way. It means to say that Firehose stores the data in S3 ...which company receives from API Gateway.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1078228,
          "date": "Thu 23 Nov 2023 09:26",
          "username": "TariqKipkemei",
          "content": "Configure an Amazon API Gateway endpoint in front of an Amazon Kinesis Data Firehose that stores the information that the company receives in an Amazon S3 bucket. Use an API Gateway Lambda authorizer to resolve authorization.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1056956,
          "date": "Sun 29 Oct 2023 17:15",
          "username": "wsdasdasdqwdaw",
          "content": "Using ECS just to stores the information is a overkill. So B or C then, lambda authoriser is the key word > C",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 996169,
          "date": "Fri 01 Sep 2023 17:22",
          "username": "Eminenza22",
          "content": "https://docs.aws.amazon.com/lambda/latest/dg/services-kinesisfirehose.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 996015,
          "date": "Fri 01 Sep 2023 13:52",
          "username": "ErnShm",
          "content": "C<br><br> authorizer is configured for the method. If it is, API Gateway calls the Lambda function. The Lambda function authenticates the caller by means such as the following: Calling out to an OAuth provider to get an OAuth access token",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 995960,
          "date": "Fri 01 Sep 2023 12:49",
          "username": "gispankaj",
          "content": "lambda authoriser seems to be logical solution.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#588",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company wants a disaster recovery solution for its Amazon RDS DB instances that run Microsoft SQL Server Enterprise Edition. The company's current recovery point objective (RPO) and recovery time objective (RTO) are 24 hours.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#588",
          "answers": [
            {
              "choice": "<p>Create a cross-Region read replica and promote the read replica to the primary instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Database Migration Service (AWS DMS) to create RDS cross-Region replication.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use cross-Region replication every 24 hours to copy native backups to an Amazon S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Copy automatic snapshots to another Region every 24 hours.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 588 discussion",
      "discusstion": [
        {
          "id": 997158,
          "date": "Sun 03 Sep 2023 00:06",
          "username": "TiagueteVital",
          "content": "Snapshots are always a cost-efficience way to have a DR plan.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1120268,
          "date": "Thu 11 Jan 2024 23:58",
          "username": "awsgeek75",
          "content": "Cross region data transfer is billable so think of smallest amount of data to transfer every 24 hours",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1284516,
          "date": "Mon 16 Sep 2024 08:52",
          "username": "MatAlves",
          "content": "A, B, C > cross-region $$<br>D > copy snapshots -> most cost-effectively.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1239461,
          "date": "Sun 30 Jun 2024 02:39",
          "username": "emakid",
          "content": "Option D: Copy automatic snapshots to another Region every 24 hours.<br><br>Explanation: This option involves copying RDS automatic snapshots to another Region. It is a straightforward way to ensure that snapshots are available in the event of a disaster. Since RDS snapshots are typically incremental and copied periodically, this solution matches the 24-hour RPO requirement effectively and is cost-effective compared to maintaining constant cross-Region replication.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1064158,
          "date": "Mon 06 Nov 2023 19:40",
          "username": "potomac",
          "content": "Amazon RDS creates and saves automated backups of your DB instance or Multi-AZ DB cluster during the backup window of your DB instance. RDS creates a storage volume snapshot of your DB instance, backing up the entire DB instance and not just individual databases. RDS saves the automated backups of your DB instance according to the backup retention period that you specify. If necessary, you can recover your DB instance to any point in time during the backup retention period.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1053630,
          "date": "Wed 25 Oct 2023 12:25",
          "username": "wsdasdasdqwdaw",
          "content": "most cost-effective way is just copying the snapshot (24h delta in the storage). > D",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1007483,
          "date": "Thu 14 Sep 2023 12:36",
          "username": "Guru4Cloud",
          "content": "Dddddddddd",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 998638,
          "date": "Mon 04 Sep 2023 17:19",
          "username": "Eminenza22",
          "content": "This is the most cost-effective solution because it does not require any additional AWS services. Amazon RDS automatically creates snapshots of your DB instances every hour. You can copy these snapshots to another Region every 24 hours to meet your RPO and RTO requirements.<br><br>The other solutions are more expensive because they require additional AWS services. For example, AWS DMS is a more expensive service than AWS RDS.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#589",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a web application on Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer that has sticky sessions enabled. The web server currently hosts the user session state. The company wants to ensure high availability and avoid user session state loss in the event of a web server outage.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#589",
          "answers": [
            {
              "choice": "<p>Use an Amazon ElastiCache for Memcached instance to store the session data. Update the application to use ElastiCache for Memcached to store the session state.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon ElastiCache for Redis to store the session state. Update the application to use ElastiCache for Redis to store the session state.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use an AWS Storage Gateway cached volume to store session data. Update the application to use AWS Storage Gateway cached volume to store the session state.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon RDS to store the session state. Update the application to use Amazon RDS to store the session state.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 589 discussion",
      "discusstion": [
        {
          "id": 1007468,
          "date": "Thu 14 Sep 2023 12:18",
          "username": "Guru4Cloud",
          "content": "The key points are:<br><br>ElastiCache Redis provides in-memory caching that can deliver microsecond latency for session data.<br>Redis supports replication and multi-AZ which can provide high availability for the cache.<br>The application can be updated to store session data in ElastiCache Redis rather than locally on the web servers.<br>If a web server fails, the user can be routed via the load balancer to another web server which can retrieve their session data from the highly available ElastiCache Redis cluster.",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 994505,
          "date": "Thu 31 Aug 2023 00:39",
          "username": "czyboi",
          "content": "high availability > use redis instead of Elastich memcache",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1239463,
          "date": "Sun 30 Jun 2024 02:45",
          "username": "emakid",
          "content": "Option B: Use Amazon ElastiCache for Redis to store the session state. Update the application to use ElastiCache for Redis to store the session state.<br><br>Explanation: Amazon ElastiCache for Redis is suitable for session state storage because Redis provides both in-memory data storage and persistence options. Redis supports features like replication, persistence, and high availability (through Redis Sentinel or clusters). This ensures that session state is preserved and available even if individual web servers fail.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1111736,
          "date": "Tue 02 Jan 2024 10:05",
          "username": "pentium75",
          "content": "As Memcached is not HA",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1088131,
          "date": "Tue 05 Dec 2023 02:44",
          "username": "SHAAHIBHUSHANAWS",
          "content": "A<br>As cache needs to be distributed as ALB is used.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1064160,
          "date": "Mon 06 Nov 2023 19:41",
          "username": "potomac",
          "content": "B is correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1018384,
          "date": "Wed 27 Sep 2023 05:24",
          "username": "franbarberan",
          "content": "Elastic cache is Only for RDS<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Since when?</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1111735,
          "date": "Tue 02 Jan 2024 10:05",
          "username": "pentium75",
          "content": "Since when?",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 995967,
          "date": "Fri 01 Sep 2023 12:53",
          "username": "gispankaj",
          "content": "redis is correct since it provides high availability and data persistance",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 995274,
          "date": "Thu 31 Aug 2023 18:23",
          "username": "Eminenza22",
          "content": "B is the correct answer. It suggests using Amazon ElastiCache for Redis to store the session state. Update the application to use ElastiCache for Redis to store the session state. This solution is cost-effective and requires minimal development effort.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#590",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company migrated a MySQL database from the company's on-premises data center to an Amazon RDS for MySQL DB instance. The company sized the RDS DB instance to meet the company's average daily workload. Once a month, the database performs slowly when the company runs queries for a report. The company wants to have the ability to run reports and maintain the performance of the daily workloads.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#590",
          "answers": [
            {
              "choice": "<p>Create a read replica of the database. Direct the queries to the read replica.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a backup of the database. Restore the backup to another DB instance. Direct the queries to the new database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Export the data to Amazon S3. Use Amazon Athena to query the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Resize the DB instance to accommodate the additional workload.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 590 discussion",
      "discusstion": [
        {
          "id": 1079100,
          "date": "Sun 24 Nov 2024 08:40",
          "username": "TariqKipkemei",
          "content": "queries for reportsread replica",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1007463,
          "date": "Sat 14 Sep 2024 12:15",
          "username": "Guru4Cloud",
          "content": "Create a read replica of the database. Direct the queries to the read replica.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 998653,
          "date": "Wed 04 Sep 2024 17:43",
          "username": "Eminenza22",
          "content": "This is the most cost-effective solution because it does not require any additional AWS services. A read replica is a copy of a database that is synchronized with the primary database. You can direct the queries for the report to the read replica, which will not affect the performance of the daily workloads",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 997159,
          "date": "Tue 03 Sep 2024 00:11",
          "username": "TiagueteVital",
          "content": "Clearly the right choice, with a read replica all the queries needed for a report are done in the replica, leaving the primary on best perfomance for write",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#591",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a container application by using Amazon Elastic Kubernetes Service (Amazon EKS). The application includes microservices that manage customers and place orders. The company needs to route incoming requests to the appropriate microservices.<br><br>Which solution will meet this requirement MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#591",
          "answers": [
            {
              "choice": "<p>Use the AWS Load Balancer Controller to provision a Network Load Balancer.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the AWS Load Balancer Controller to provision an Application Load Balancer.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use an AWS Lambda function to connect the requests to Amazon EKS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon API Gateway to connect the requests to Amazon EKS.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 591 discussion",
      "discusstion": [
        {
          "id": 1120274,
          "date": "Fri 12 Jan 2024 00:03",
          "username": "awsgeek75",
          "content": "\\\"The company needs to route incoming requests to the appropriate microservices\\\"<br>In Kubernetes world, this would be called an Ingress Service so it will need B<br>https://kubernetes-sigs.github.io/aws-load-balancer-controller/v2.6/<br>https://kubernetes.io/docs/concepts/services-networking/ingress/",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1111739,
          "date": "Tue 02 Jan 2024 10:11",
          "username": "pentium75",
          "content": "Not D because<br>- even with an API gateway you'd need an ALB or ELB (so B+D would work, but D alone does not)<br>- you would use AWS API Gateway Controller (not \\\"Amazon API Gateway\\\") to create the API Gateway<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://aws.amazon.com/blogs/containers/microservices-development-using-aws-controllers-for-kubernetes-ack-and-amazon-eks-blueprints/<br><br>https://aws.amazon.com/blogs/containers/integrate-amazon-api-gateway-with-amazon-eks/</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1111741,
          "date": "Tue 02 Jan 2024 10:13",
          "username": "pentium75",
          "content": "https://aws.amazon.com/blogs/containers/microservices-development-using-aws-controllers-for-kubernetes-ack-and-amazon-eks-blueprints/<br><br>https://aws.amazon.com/blogs/containers/integrate-amazon-api-gateway-with-amazon-eks/",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1239465,
          "date": "Sun 30 Jun 2024 02:51",
          "username": "emakid",
          "content": "Option B: Use the AWS Load Balancer Controller to provision an Application Load Balancer (ALB).<br><br>Explanation: The AWS Load Balancer Controller can provision ALBs, which operate at the application layer (Layer 7). ALBs support advanced routing capabilities such as routing based on HTTP paths or hostnames. This makes ALBs well-suited for routing requests to different microservices based on URL paths or domains. This approach integrates well with Kubernetes and is a common pattern for microservices architectures.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1094091,
          "date": "Tue 12 Dec 2023 04:43",
          "username": "[Removed]",
          "content": "ALB is cost-effectively",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1092940,
          "date": "Mon 11 Dec 2023 00:06",
          "username": "Mikado211",
          "content": "ALB is considered as expensive than API Gateway, particularly on higher load.<br><br>If you do not need any specific functionalities of API Gateway so you must choose ALB because it will be cheaper.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>ALB is considered as LESS expensive</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1092941,
          "date": "Mon 11 Dec 2023 00:06",
          "username": "Mikado211",
          "content": "ALB is considered as LESS expensive",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1086869,
          "date": "Sun 03 Dec 2023 15:38",
          "username": "riyasara",
          "content": "API Gateway has a pricing model that includes a cost per API call, and depending on the volume of requests, this could potentially be more expensive than using an Application Load Balancer.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1081550,
          "date": "Mon 27 Nov 2023 14:03",
          "username": "1rob",
          "content": "Routing requests to the appr. microserv. can easily be done with ALB and ingress. The ingress handles routing rules to the micro.serv.With answer D you wil still need ALB or NLB as can be seen in the pics of https://aws.amazon.com/blogs/containers/integrate-amazon-api-gateway-with-amazon-eks/ or https://aws.amazon.com/blogs/containers/microservices-development-using-aws-controllers-for-kubernetes-ack-and-amazon-eks-blueprints/ so that is not the most cost-effectively.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>yeah, I was going with D than checked and seems that you are right to deploy API gateway you still a LB</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1108444,
          "date": "Fri 29 Dec 2023 08:44",
          "username": "ale_brd_111",
          "content": "yeah, I was going with D than checked and seems that you are right to deploy API gateway you still a LB",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1079107,
          "date": "Fri 24 Nov 2023 08:53",
          "username": "TariqKipkemei",
          "content": "Both ALB and API gateway can be used to route traffic to the microservices, but the question seeks the most 'cost effective' option.<br><br>You are charged for each hour or partial hour that an Application Load Balancer is running, and the number of Load Balancer Capacity Units (LCU) used per hour.<br><br>With Amazon API Gateway, you only pay when your APIs are in use.<br><br>I say API gateway is the best option for this case.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But you still need an ALB or ELB<br><br>https://aws.amazon.com/blogs/containers/microservices-development-using-aws-controllers-for-kubernetes-ack-and-amazon-eks-blueprints/<br><br>https://aws.amazon.com/blogs/containers/integrate-amazon-api-gateway-with-amazon-eks/</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1111740,
          "date": "Tue 02 Jan 2024 10:13",
          "username": "pentium75",
          "content": "But you still need an ALB or ELB<br><br>https://aws.amazon.com/blogs/containers/microservices-development-using-aws-controllers-for-kubernetes-ack-and-amazon-eks-blueprints/<br><br>https://aws.amazon.com/blogs/containers/integrate-amazon-api-gateway-with-amazon-eks/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1077690,
          "date": "Wed 22 Nov 2023 19:53",
          "username": "t0nx",
          "content": "AWS Load Balancer Controller: The AWS Load Balancer Controller is a Kubernetes controller that makes it easy to set up an Application Load Balancer (ALB) or Network Load Balancer (NLB) for your Amazon EKS clusters. It simplifies the process of managing load balancers for applications running on EKS.<br><br>Application Load Balancer (ALB): ALB is a Layer 7 load balancer that is capable of routing requests based on content, such as URL paths or hostnames. This makes it suitable for routing requests to different microservices based on specific criteria.<br><br>Cost-Effectiveness: ALB is typically more cost-effective than an NLB, and it provides additional features at the application layer, which may be useful for routing requests to microservices based on specific conditions.<br><br>Option D: Amazon API Gateway is designed for creating, publishing, and managing APIs. While it can integrate with Amazon EKS, it may be more feature-rich and complex than needed for simple routing to microservices within an EKS cluster.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1064164,
          "date": "Mon 06 Nov 2023 19:45",
          "username": "potomac",
          "content": "API Gateway provides an entry point to your microservices.<br><br>https://aws.amazon.com/blogs/containers/integrate-amazon-api-gateway-with-amazon-eks/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1062488,
          "date": "Sun 05 Nov 2023 01:20",
          "username": "ccmc",
          "content": "B is correct, it is a required before exposing through api gateway",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1054175,
          "date": "Thu 26 Oct 2023 02:23",
          "username": "thanhnv142",
          "content": "B: is correct.<br>For EKS, use application load balancer to expose microservices",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1020970,
          "date": "Fri 29 Sep 2023 19:17",
          "username": "KhasDenis",
          "content": "Routing to ms in k8s -> Ingresses -> Ingress Controller -> AWS Load Balancer Controllerhttps://kubernetes-sigs.github.io/aws-load-balancer-controller/v2.6/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1011212,
          "date": "Tue 19 Sep 2023 13:05",
          "username": "RDM10",
          "content": "Microservices--> API--> API GW",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1007461,
          "date": "Thu 14 Sep 2023 12:12",
          "username": "Guru4Cloud",
          "content": "D. Use Amazon API Gateway to connect the requests to Amazon EKS.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1002524,
          "date": "Fri 08 Sep 2023 15:36",
          "username": "Mll1975",
          "content": "API Gateway is a fully managed service that makes it easy for you to create, publish, maintain, monitor, and secure APIs at any scale. API Gateway provides an entry point to your microservices.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 996178,
          "date": "Fri 01 Sep 2023 17:30",
          "username": "Eminenza22",
          "content": "https://aws.amazon.com/blogs/containers/microservices-development-using-aws-controllers-for-kubernetes-ack-and-amazon-eks-blueprints/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#592",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS and sells access to copyrighted images. The company's global customer base needs to be able to access these images quickly. The company must deny access to users from specific countries. The company wants to minimize costs as much as possible.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#592",
          "answers": [
            {
              "choice": "<p>Use Amazon S3 to store the images. Turn on multi-factor authentication (MFA) and public bucket access. Provide customers with a link to the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon S3 to store the images. Create an IAM user for each customer. Add the users to a group that has permission to access the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon EC2 instances that are behind Application Load Balancers (ALBs) to store the images. Deploy the instances only in the countries the company services. Provide customers with links to the ALBs for their specific country's instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon S3 to store the images. Use Amazon CloudFront to distribute the images with geographic restrictions. Provide a signed URL for each customer to access the data in CloudFront.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 592 discussion",
      "discusstion": [
        {
          "id": 995184,
          "date": "Sat 31 Aug 2024 16:20",
          "username": "ralfj",
          "content": "Use Cloudfront and geographic restriction",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1079114,
          "date": "Sun 24 Nov 2024 08:58",
          "username": "TariqKipkemei",
          "content": "Store images Amazon S3<br>global customer base needs to be able to access these images quicklyAmazon CloudFront<br>deny access to users from specific countriesAmazon CloudFront geographic restrictions, signed URLs",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1006923,
          "date": "Fri 13 Sep 2024 20:49",
          "username": "Guru4Cloud",
          "content": "D. Use Amazon S3 to store the images. Use Amazon CloudFront to distribute the images with geographic restrictions. Provide a signed URL for each customer to access the data in CloudFront.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1005861,
          "date": "Thu 12 Sep 2024 16:53",
          "username": "Colz",
          "content": "Correct answer is D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 997020,
          "date": "Mon 02 Sep 2024 18:59",
          "username": "hubbabubba",
          "content": "answer is D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 996189,
          "date": "Sun 01 Sep 2024 17:38",
          "username": "Eminenza22",
          "content": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/georestrictions.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#593",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing a highly available Amazon ElastiCache for Redis based solution. The solutions architect needs to ensure that failures do not result in performance degradation or loss of data locally and within an AWS Region. The solution needs to provide high availability at the node level and at the Region level.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#593",
          "answers": [
            {
              "choice": "<p>Use Multi-AZ Redis replication groups with shards that contain multiple nodes.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Redis shards that contain multiple nodes with Redis append only files (AOF) turned on.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use a Multi-AZ Redis cluster with more than one read replica in the replication group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Redis shards that contain multiple nodes with Auto Scaling turned on.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 593 discussion",
      "discusstion": [
        {
          "id": 1079122,
          "date": "Fri 24 May 2024 08:09",
          "username": "TariqKipkemei",
          "content": "Multi-AZ is only supported on Redis clusters that have more than one node in each shard (node groups).<br><br>https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html#:~:textnode%20in%20each-,shard.,-Topics",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1111745,
          "date": "Tue 02 Jul 2024 09:25",
          "username": "pentium75",
          "content": "It seems like \\\"Multi-AZ Redis replication group\\\" (A) and \\\"Multi-AZ Redis cluster\\\" (C) are different wordings for the same configuration. However, \\\"to minimize the impact of a node failure, we recommend that your implementation use multiple nodes in each shard\\\" - and that is mentioned only in A.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1106944,
          "date": "Thu 27 Jun 2024 15:25",
          "username": "LocNV",
          "content": "high availability at the node levelshard and Multi A-Zregion level",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1101407,
          "date": "Thu 20 Jun 2024 09:24",
          "username": "Cyberkayu",
          "content": "did client ask for improved performance, unfortunately they didn't, so C is good to have but not part of the business requirement.<br><br>My answer A.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1088124,
          "date": "Wed 05 Jun 2024 01:27",
          "username": "SHAAHIBHUSHANAWS",
          "content": "A<br>Multi-AZ is only option. It is regional service so can use backup to replicate but can not use for failover.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1077711,
          "date": "Wed 22 May 2024 19:04",
          "username": "t0nx",
          "content": "C. Use a Multi-AZ Redis cluster with more than one read replica in the replication group.<br>In summary, option C, using a Multi-AZ Redis cluster with more than one read replica, is designed to provide both node-level and AWS Region-level high availability, making it the most suitable choice for the given requirements.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1064200,
          "date": "Mon 06 May 2024 19:36",
          "username": "potomac",
          "content": "the replication structure is contained within a shard (called node group in the API/CLI) which is contained within a Redis cluster<br><br>A shard (in the API and CLI, a node group) is a hierarchical arrangement of nodes, each wrapped in a cluster. Shards support replication. Within a shard, one node functions as the read/write primary node. All the other nodes in a shard function as read-only replicas of the primary node.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1050587,
          "date": "Mon 22 Apr 2024 15:01",
          "username": "thanhnv142",
          "content": "C is correct.<br>Not A because in replication mode, shard have multiple nodes by default.<br>B and D not correct because that not an option",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1047284,
          "date": "Fri 19 Apr 2024 00:37",
          "username": "iwannabeawsgod",
          "content": "its c for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1040710,
          "date": "Thu 11 Apr 2024 15:52",
          "username": "bsbs1234",
          "content": "C:<br>Cluster mode will create multiple shards, when node level failure, request of shard that not impacted will not has any performance impact. If the issue at AZ level, spread traffic between multiple shards shall also reduce the performance degrade.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1026938,
          "date": "Sat 06 Apr 2024 22:02",
          "username": "loveaws",
          "content": "c.<br>Option A is not ideal because it doesn't mention read replicas, and it's generally better to have read replicas for both performance and high availability.<br>Option B mentions Redis append-only files (AOF), but AOF alone doesn't provide high availability or fault tolerance.<br>Option D mentions Auto Scaling, but this doesn't directly address high availability at the Region level or data replication",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1015772,
          "date": "Sun 24 Mar 2024 15:43",
          "username": "taustin2",
          "content": "Multi-AZ is only supported on Redis clusters that have more than one node in each shard.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1015769,
          "date": "Sun 24 Mar 2024 15:41",
          "username": "taustin2",
          "content": "https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Replication.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1006917,
          "date": "Wed 13 Mar 2024 21:41",
          "username": "Guru4Cloud",
          "content": "Multi-AZ replication groups provide automatic failover between AZs if there is an issue with the primary AZ. This provides high availability at the region level<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>What about \\\"the node level\\\"?</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1111742,
          "date": "Tue 02 Jul 2024 09:17",
          "username": "pentium75",
          "content": "What about \\\"the node level\\\"?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1005952,
          "date": "Tue 12 Mar 2024 20:23",
          "username": "xyb",
          "content": "Enabling ElastiCache Multi-AZ with automatic failover on your Redis cluster (in the API and CLI, replication group) improves your fault tolerance. This is true particularly in cases where your cluster's read/write primary cluster becomes unreachable or fails for any reason. Multi-AZ with automatic failover is only supported on Redis clusters that support replication",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1002545,
          "date": "Fri 08 Mar 2024 16:53",
          "username": "Mll1975",
          "content": "I would go with A too<br><br>I would go with A, Using AOF can't protect you from all failure scenarios.<br>For example, if a node fails due to a hardware fault in an underlying physical server, ElastiCache will provision a new node on a different server. In this case, the AOF is not available and can't be used to recover the data.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 997022,
          "date": "Sat 02 Mar 2024 20:01",
          "username": "hubbabubba",
          "content": "Hate to say this, but I read the two docs linked below, and I still think the answer is A. Turning on AOF helps in data persistence after failure, but it does nothing for availability unless you use Multi-AZ replica groups.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#594",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company plans to migrate to AWS and use Amazon EC2 On-Demand Instances for its application. During the migration testing phase, a technical team observes that the application takes a long time to launch and load memory to become fully productive.<br><br>Which solution will reduce the launch time of the application during the next testing phase?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#594",
          "answers": [
            {
              "choice": "<p>Launch two or more EC2 On-Demand Instances. Turn on auto scaling features and make the EC2 On-Demand Instances available during the next testing phase.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Launch EC2 Spot Instances to support the application and to scale the application so it is available during the next testing phase.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Launch the EC2 On-Demand Instances with hibernation turned on. Configure EC2 Auto Scaling warm pools during the next testing phase.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Launch EC2 On-Demand Instances with Capacity Reservations. Start additional EC2 instances during the next testing phase.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 594 discussion",
      "discusstion": [
        {
          "id": 1006874,
          "date": "Wed 13 Mar 2024 20:52",
          "username": "Guru4Cloud",
          "content": "Using EC2 hibernation and Auto Scaling warm pools will help address this:<br><br>Hibernation saves the in-memory state of the EC2 instance to persistent storage and shuts the instance down. When the instance is started again, the in-memory state is restored, which launches much faster than launching a new instance.<br>Warm pools pre-initialize EC2 instances and keep them ready to fulfill requests, reducing launch time. The hibernated instances can be added to a warm pool.<br>When auto scaling scales out during the next testing phase, it will be able to launch instances from the warm pool rapidly since they are already initialized",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1120277,
          "date": "Thu 11 Jul 2024 23:12",
          "username": "awsgeek75",
          "content": "https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1086872,
          "date": "Mon 03 Jun 2024 14:43",
          "username": "riyasara",
          "content": "Amazon EC2 hibernation and warm pool",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1079125,
          "date": "Fri 24 May 2024 08:16",
          "username": "TariqKipkemei",
          "content": "If an instance or application takes a long time to bootstrap and build a memory footprint in order to become fully productive, you can use hibernation to pre-warm the instance. To pre-warm the instance, you:<br>Launch it with hibernation enabled.<br>Bring it to a desired state.<br>Hibernate it so that it's ready to be resumed to the desired state whenever needed.<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#:~:textyou%20can%20use-,hibernation,-to%20pre%2Dwarm",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1064204,
          "date": "Mon 06 May 2024 19:40",
          "username": "potomac",
          "content": "With Amazon EC2 hibernation enabled, you can maintain your EC2 instances in a \\\"pre-warmed\\\" state so these can get to a productive state faster.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1011665,
          "date": "Tue 19 Mar 2024 23:19",
          "username": "tabbyDolly",
          "content": "C: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 995177,
          "date": "Thu 29 Feb 2024 17:10",
          "username": "ralfj",
          "content": "just use hibernation option so you won't load the full EC2 Instance",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#595",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's applications run on Amazon EC2 instances in Auto Scaling groups. The company notices that its applications experience sudden traffic increases on random days of the week. The company wants to maintain application performance during sudden traffic increases.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#595",
          "answers": [
            {
              "choice": "<p>Use manual scaling to change the size of the Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use predictive scaling to change the size of the Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use dynamic scaling to change the size of the Auto Scaling group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use schedule scaling to change the size of the Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 595 discussion",
      "discusstion": [
        {
          "id": 995172,
          "date": "Thu 29 Feb 2024 17:03",
          "username": "ralfj",
          "content": "Dynamic Scaling =E2=80=93 This is yet another type of Auto Scaling in which the number of EC2 instances is changed automatically depending on the signals received. Dynamic Scaling is a good choice when there is a high volume of unpredictable traffic.<br><br>https://www.developer.com/web-services/aws-auto-scaling-types-best-practices/#:~:textDynamic%20Scaling%20%E2%80%93%20This%20is%20yet,high%20volume%20of%20unpredictable%20traffic.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1011670,
          "date": "Tue 19 Mar 2024 23:21",
          "username": "tabbyDolly",
          "content": "C - \\\" sudden traffic increases on random days of the week\\\" --> dynamic scaling",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1127016,
          "date": "Sat 20 Jul 2024 00:08",
          "username": "awsgeek75",
          "content": "randomdynamic<br>A: Manual is never a solution<br>B: Predictive is not possible as it's random<br>D: Cannot schedule random",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1079128,
          "date": "Fri 24 May 2024 08:24",
          "username": "TariqKipkemei",
          "content": "Dynamic scaling",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1060257,
          "date": "Thu 02 May 2024 04:47",
          "username": "dilaaziz",
          "content": "https://aws.amazon.com/ec2/autoscaling/faqs/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1006873,
          "date": "Wed 13 Mar 2024 20:50",
          "username": "Guru4Cloud",
          "content": "C is the best answer here. Dynamic scaling is the most cost-effective way to automatically scale the Auto Scaling group to maintain performance during random traffic spikes.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#596",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce application uses a PostgreSQL database that runs on an Amazon EC2 instance. During a monthly sales event, database usage increases and causes database connection issues for the application. The traffic is unpredictable for subsequent monthly sales events, which impacts the sales forecast. The company needs to maintain performance when there is an unpredictable increase in traffic.<br><br>Which solution resolves this issue in the MOST cost-effective way?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#596",
          "answers": [
            {
              "choice": "<p>Migrate the PostgreSQL database to Amazon Aurora Serverless v2.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Enable auto scaling for the PostgreSQL database on the EC2 instance to accommodate increased usage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the PostgreSQL database to Amazon RDS for PostgreSQL with a larger instance type.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the PostgreSQL database to Amazon Redshift to accommodate increased usage.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 596 discussion",
      "discusstion": [
        {
          "id": 1006851,
          "date": "Wed 13 Mar 2024 20:33",
          "username": "Guru4Cloud",
          "content": "Answer is A.<br>Aurora Serverless v2 got autoscaling, highly available and cheaper when compared to the other options.",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1111751,
          "date": "Tue 02 Jul 2024 09:41",
          "username": "pentium75",
          "content": "Not B - we can auto-scale the EC2 instance, but not \\\"the [self-managed] PostgreSQL database ON the EC2 instance\\\"<br>Not C - This does not mention scaling, so it would incur high cost and still it might not be able to keep up with the \\\"unpredictable\\\" spikes<br>Not D - Redshift is OLAP Data Warehouse",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1081377,
          "date": "Mon 27 May 2024 09:58",
          "username": "TariqKipkemei",
          "content": "Amazon Aurora Serverless is an on-demand, auto-scaling configuration for Aurora where the database automatically starts up, shuts down, and scales capacity up or down based on your application's needs. This is the least costly option for unpredictable traffic.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1011673,
          "date": "Tue 19 Mar 2024 23:23",
          "username": "tabbyDolly",
          "content": "A: \\\"he traffic is unpredictable for subsequent monthly sales events\\\" --> serverless",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1001101,
          "date": "Thu 07 Mar 2024 04:54",
          "username": "Wayne23Fang",
          "content": "A is probably more expensive than C. Aurora is serverless and fast. But nevertheless it needs DB migration service. Not sure DMS may not be free.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>C is more expensive if you think the scenario where the traffic is low. You are paying for a larger hardware but not using it. That's why I think A is correct.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1056917,
          "date": "Mon 29 Apr 2024 15:23",
          "username": "danielmakita",
          "content": "C is more expensive if you think the scenario where the traffic is low. You are paying for a larger hardware but not using it. That's why I think A is correct.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 997161,
          "date": "Sun 03 Mar 2024 01:28",
          "username": "TiagueteVital",
          "content": "A to autoscaling",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 995450,
          "date": "Thu 29 Feb 2024 22:45",
          "username": "manOfThePeople",
          "content": "Answer is A.<br>Aurora Serverless v2 got autoscaling, highly available and cheaper when compared to the other options.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 995357,
          "date": "Thu 29 Feb 2024 20:33",
          "username": "anikety123",
          "content": "The correct answer is A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#597",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts an internal serverless application on AWS by using Amazon API Gateway and AWS Lambda. The company's employees report issues with high latency when they begin using the application each day. The company wants to reduce latency.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#597",
          "answers": [
            {
              "choice": "<p>Increase the API Gateway throttling limit.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up a scheduled scaling to increase Lambda provisioned concurrency before employees begin to use the application each day.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon CloudWatch alarm to initiate a Lambda function as a target for the alarm at the beginning of each day.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Increase the Lambda function memory.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 597 discussion",
      "discusstion": [
        {
          "id": 994334,
          "date": "Wed 30 Aug 2023 19:06",
          "username": "oayoade",
          "content": "https://aws.amazon.com/blogs/compute/scheduling-aws-lambda-provisioned-concurrency-for-recurring-peak-usage/",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1006764,
          "date": "Wed 13 Sep 2023 17:41",
          "username": "Guru4Cloud",
          "content": "Set up a scheduled scaling to increase Lambda provisioned concurrency before employees begin to use the application each day.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1239466,
          "date": "Sun 30 Jun 2024 03:04",
          "username": "emakid",
          "content": "Option B: Set up a scheduled scaling to increase Lambda provisioned concurrency before employees begin to use the application each day.<br><br>Explanation: Provisioned concurrency ensures that a specified number of Lambda instances are initialized and ready to handle requests. By scheduling this scaling, you can pre-warm Lambda functions before peak usage times, reducing cold start latency. This solution directly addresses the latency issue caused by cold starts.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1081380,
          "date": "Mon 27 Nov 2023 11:00",
          "username": "TariqKipkemei",
          "content": "Provisioned concurrency pre-initializes execution environments for your functions. These execution environments are prepared to respond immediately to incoming function requests at start of day.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1064208,
          "date": "Mon 06 Nov 2023 20:49",
          "username": "potomac",
          "content": "A is wrong<br>API Gateway throttling limit is for better throughput, not for latency",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1002556,
          "date": "Fri 08 Sep 2023 16:04",
          "username": "Mll1975",
          "content": "Provisioned Concurrency incurs additional costs, so it is cost-efficient to use it only when necessary. For example, early in the morning when activity starts, or to handle recurring peak usage.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 995295,
          "date": "Thu 31 Aug 2023 18:45",
          "username": "Eminenza22",
          "content": "B option setting up a scheduled scaling to increase Lambda provisioned concurrency before employees begin to use the application each day. This solution is cost-effective and requires minimal development effort.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#598",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A research company uses on-premises devices to generate data for analysis. The company wants to use the AWS Cloud to analyze the data. The devices generate .csv files and support writing the data to an SMB file share. Company analysts must be able to use SQL commands to query the data. The analysts will run queries periodically throughout the day.<br><br>Which combination of steps will meet these requirements MOST cost-effectively? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#598",
          "answers": [
            {
              "choice": "<p>Deploy an AWS Storage Gateway on premises in Amazon S3 File Gateway mode.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an AWS Storage Gateway on premises in Amazon FSx File Gateway made.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up an AWS Glue crawler to create a table based on the data that is in Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Set up an Amazon EMR cluster with EMR File System (EMRFS) to query the data that is in Amazon S3. Provide access to analysts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up an Amazon Redshift cluster to query the data that is in Amazon S3. Provide access to analysts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Setup Amazon Athena to query the data that is in Amazon S3. Provide access to analysts.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 598 discussion",
      "discusstion": [
        {
          "id": 1120282,
          "date": "Fri 12 Jan 2024 00:25",
          "username": "awsgeek75",
          "content": "SQL Queries is Athena so DE are wrong and we are now dependant on S3<br>A to get files into S3<br>C Glue to convert CSV to S3 table data<br>B irrelevant as we don't have anything to consume data from FSx in other options<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>err,,, pardon my ignorance but I did not recall seeing any mention of S3 in the stem</li><li>My only reservation with this answer is C.<br>CSV is technically a table and Athena can query multiple csv from S3. Glue just seems overengineering over here</li></ul>",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 1316737,
          "date": "Sat 23 Nov 2024 17:52",
          "username": "JA2018",
          "content": "err,,, pardon my ignorance but I did not recall seeing any mention of S3 in the stem",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1127017,
          "date": "Sat 20 Jan 2024 01:15",
          "username": "awsgeek75",
          "content": "My only reservation with this answer is C.<br>CSV is technically a table and Athena can query multiple csv from S3. Glue just seems overengineering over here",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1111756,
          "date": "Tue 02 Jan 2024 10:50",
          "username": "pentium75",
          "content": "A to upload the files to S3 via SMB<br>C to convert the data from CSV format<br>F to query with SQL<br><br>Not B (we need the data in S3, not in FSx)<br>Not D or E (we should provide the ability to run SQL queries)",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 1081388,
          "date": "Mon 27 Nov 2023 11:07",
          "username": "TariqKipkemei",
          "content": "SMB + use SQL commands to query the dataAmazon S3 File Gateway mode +Amazon Athena",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 1056991,
          "date": "Sun 29 Oct 2023 17:52",
          "username": "wsdasdasdqwdaw",
          "content": "https://aws.amazon.com/storagegateway/file/s3/#:~:textAmazon%20S3%20File%20Gateway%20provides,Amazon%20S3%20with%20local%20caching.<br><br>\\\"Amazon S3 File Gateway provides a seamless way to connect to the cloud in order to store application data files and backup images as durable objects in Amazon S3 cloud storage. Amazon S3 File Gateway offers SMB or NFS-based access to data in Amazon S3 with local caching\\\"<br><br>> SMB and NFS is supported in Amazon S3 File Gateway > ACF",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1047296,
          "date": "Thu 19 Oct 2023 00:48",
          "username": "iwannabeawsgod",
          "content": "ACF 100% sure",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 1020099,
          "date": "Thu 28 Sep 2023 18:35",
          "username": "Ramdi1",
          "content": "I thought the correct answer was BCF however I have changed my mind to BCF<br>FSx does support SMB protocol. However so does s3 file gateway which is version 2 and 3 of the SMB protocol. Hence using it with athena ACF should be correct",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 1011193,
          "date": "Tue 19 Sep 2023 12:41",
          "username": "RDM10",
          "content": "SMB file share-is B incorrect?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Yes because \\\"FSx File Gateway\\\" uploads the files to FSx, but we need it in S3.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1111754,
          "date": "Tue 02 Jan 2024 10:48",
          "username": "pentium75",
          "content": "Yes because \\\"FSx File Gateway\\\" uploads the files to FSx, but we need it in S3.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1006506,
          "date": "Wed 13 Sep 2023 12:57",
          "username": "Guru4Cloud",
          "content": "BCF is the correct<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No because FSx File Gateway (B) uploads it to FSx while we we need it in S3. S3 File Gateway provides access to S3 via SMB.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 1111755,
          "date": "Tue 02 Jan 2024 10:49",
          "username": "pentium75",
          "content": "No because FSx File Gateway (B) uploads it to FSx while we we need it in S3. S3 File Gateway provides access to S3 via SMB.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 996147,
          "date": "Fri 01 Sep 2023 16:55",
          "username": "Eminenza22",
          "content": "https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-format-csv-home.html<br>https://aws.amazon.com/blogs/aws/amazon-athena-interactive-sql-queries-for-data-in-amazon-s3/<br>https://aws.amazon.com/storagegateway/faqs/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 995335,
          "date": "Thu 31 Aug 2023 19:11",
          "username": "anikety123",
          "content": "It should be ACF",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 995156,
          "date": "Thu 31 Aug 2023 15:44",
          "username": "ralfj",
          "content": "ACF use S3 File Gateway, Use Glue and Use Athena",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ACF"
        }
      ]
    },
    {
      "question_id": "#599",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to use Amazon Elastic Container Service (Amazon ECS) clusters and Amazon RDS DB instances to build and run a payment processing application. The company will run the application in its on-premises data center for compliance purposes.<br><br>A solutions architect wants to use AWS Outposts as part of the solution. The solutions architect is working with the company's operational team to build the application.<br><br>Which activities are the responsibility of the company's operational team? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#599",
          "answers": [
            {
              "choice": "<p>Providing resilient power and network connectivity to the Outposts racks<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Managing the virtualization hypervisor, storage systems, and the AWS services that run on Outposts<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Physical security and access controls of the data center environment<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Availability of the Outposts infrastructure including the power supplies, servers, and networking equipment within the Outposts racks<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Physical maintenance of Outposts components<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Providing extra capacity for Amazon ECS clusters to mitigate server failures and maintenance events<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 599 discussion",
      "discusstion": [
        {
          "id": 1042579,
          "date": "Fri 13 Oct 2023 12:40",
          "username": "taustin2",
          "content": "From https://docs.aws.amazon.com/whitepapers/latest/aws-outposts-high-availability-design/aws-outposts-high-availability-design.html<br><br>With Outposts, you are responsible for providing resilient power and network connectivity to the Outpost racks to meet your availability requirements for workloads running on Outposts. You are responsible for the physical security and access controls of the data center environment. You must provide sufficient power, space, and cooling to keep the Outpost operational and network connections to connect the Outpost back to the Region. Since Outpost capacity is finite and determined by the size and number of racks AWS installs at your site, you must decide how much EC2, EBS, and S3 on Outposts capacity you need to run your initial workloads, accommodate future growth, and to provide extra capacity to mitigate server failures and maintenance events.",
          "upvote_count": "27",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 997648,
          "date": "Sun 03 Sep 2023 15:13",
          "username": "ibu007",
          "content": "My exam is tomorrow. thank you all for the answers and links.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"Physical maintenance\\\" such as replacing faulty disks is NOT your responsibility.</li></ul>",
          "upvote_count": "16",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 1111757,
          "date": "Tue 02 Jan 2024 10:52",
          "username": "pentium75",
          "content": "\\\"Physical maintenance\\\" such as replacing faulty disks is NOT your responsibility.",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1266095,
          "date": "Thu 15 Aug 2024 02:41",
          "username": "[Removed]",
          "content": "The activities that are the responsibility of the company's operational team when using Amazon Elastic Container Service (Amazon ECS) clusters and Amazon RDS DB instances on AWS Outposts are:<br><br>Providing resilient power and network connectivity to the Outposts racks.<br>Physical security and access controls of the data center environment.<br>Physical maintenance of Outposts components.<br>The solutions architect is responsible for the following activities:<br><br>Managing the virtualization hypervisor, storage systems, and the AWS services that run on Outposts.<br>Ensuring the availability of the Outposts infrastructure, including the power supplies, servers, and networking equipment within the Outposts racks.<br>Providing extra capacity for Amazon ECS clusters to mitigate server failures and maintenance events.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 1111762,
          "date": "Tue 02 Jan 2024 10:57",
          "username": "pentium75",
          "content": "F: \\\"If there is no additional capacity on the Outpost, the instance remains in the stopped state. The Outpost owner can try to free up used capacity or request additional capacity for the Outpost so that the migration can complete.\\\"<br><br>Not D: \\\"Equipment within the Outposts rack\\\" is AWS' responsibility, you're not supposed to touch that<br><br>Not E: \\\"When the AWS installation team arrives on site, they will replace the unhealthy hosts, switches, or rack elements\\\"",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 1081721,
          "date": "Mon 27 Nov 2023 16:47",
          "username": "1rob",
          "content": "From <https://aws.amazon.com/outposts/rack/faqs/ : Your site must support the basic power, networking and space requirements to host an Outpost> A<br>From <https://docs.aws.amazon.com/whitepapers/latest/applying-security-practices-to-network-workload-for-csps/the-shared-responsibility-model.html : In AWS Outposts, the customer takes the responsibility of securing the physical infrastructure to host the AWS Outposts equipment in their own data centers. > C<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>and From &lt;https://docs.aws.amazon.com/whitepapers/latest/aws-outposts-high-availability-design/aws-outposts-high-availability-design.html : Since Outpost capacity is finite and determined by the size and number of racks AWS installs at your site, you must decide how much EC2, EBS, and S3 on Outposts capacity you need to run your initial workloads, accommodate future growth, and to provide extra capacity to mitigate server failures and maintenance events. &gt; F</li><li>From &lt;https://docs.aws.amazon.com/whitepapers/latest/aws-outposts-high-availability-design/aws-outposts-high-availability-design.html&gt;<br> AWS is responsible for the availability of the Outposts infrastructure including the power supplies, servers, and networking equipment within the AWS Outposts racks. AWS also manages the virtualization hypervisor, storage systems, and the AWS services that run on Outposts. So The customer isn't so not D.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 1081722,
          "date": "Mon 27 Nov 2023 16:47",
          "username": "1rob",
          "content": "and From <https://docs.aws.amazon.com/whitepapers/latest/aws-outposts-high-availability-design/aws-outposts-high-availability-design.html : Since Outpost capacity is finite and determined by the size and number of racks AWS installs at your site, you must decide how much EC2, EBS, and S3 on Outposts capacity you need to run your initial workloads, accommodate future growth, and to provide extra capacity to mitigate server failures and maintenance events. > F<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>From &lt;https://docs.aws.amazon.com/whitepapers/latest/aws-outposts-high-availability-design/aws-outposts-high-availability-design.html&gt;<br> AWS is responsible for the availability of the Outposts infrastructure including the power supplies, servers, and networking equipment within the AWS Outposts racks. AWS also manages the virtualization hypervisor, storage systems, and the AWS services that run on Outposts. So The customer isn't so not D.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1081723,
          "date": "Mon 27 Nov 2023 16:48",
          "username": "1rob",
          "content": "From <https://docs.aws.amazon.com/whitepapers/latest/aws-outposts-high-availability-design/aws-outposts-high-availability-design.html><br> AWS is responsible for the availability of the Outposts infrastructure including the power supplies, servers, and networking equipment within the AWS Outposts racks. AWS also manages the virtualization hypervisor, storage systems, and the AWS services that run on Outposts. So The customer isn't so not D.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1081399,
          "date": "Mon 27 Nov 2023 11:24",
          "username": "TariqKipkemei",
          "content": "Only A and C are correct.<br>AWS is responsible for the hardware and software that run on AWS Outposts. This is a fully managed infrastructure service. AWS manages security patches, updates firmware, and maintains the Outpost equipment. AWS also monitors the performance, health, and metrics for your Outpost and determines whether any maintenance is required.<br><br>https://docs.aws.amazon.com/outposts/latest/userguide/outpost-maintenance.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"Choose three\\\".<br><br>You're missing F, you must order the Outposts rack with excess capacity</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1111758,
          "date": "Tue 02 Jan 2024 10:53",
          "username": "pentium75",
          "content": "\\\"Choose three\\\".<br><br>You're missing F, you must order the Outposts rack with excess capacity",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1071364,
          "date": "Wed 15 Nov 2023 12:29",
          "username": "[Removed]",
          "content": "The role that physical companies will play is ACE.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A=EB=8B=A4E"
        },
        {
          "id": 1064264,
          "date": "Mon 06 Nov 2023 22:24",
          "username": "potomac",
          "content": "E is wrong<br>If there is a need to perform physical maintenance, AWS will reach out to schedule a time to visit your site.<br>https://aws.amazon.com/outposts/rack/faqs/#:~:textAs%20AWS%20Outposts%20rack%20runs,the%20Outpost%20for%20compliance%20certification.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>So is D, \\\"equipment WITHIN the Outposts rack\\\" is something that your Infra team should stay away from.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ACD"
        },
        {
          "id": 1111760,
          "date": "Tue 02 Jan 2024 10:54",
          "username": "pentium75",
          "content": "So is D, \\\"equipment WITHIN the Outposts rack\\\" is something that your Infra team should stay away from.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1062712,
          "date": "Sun 05 Nov 2023 08:56",
          "username": "beast2091",
          "content": "ACE<br>AWS is responsible for the availability of the Outposts infrastructure including the power<br>supplies, servers, and networking equipment within the AWS Outposts racks. AWS also<br>manages the virtualization hypervisor, storage systems, and the AWS services that run<br>on Outposts.<br><br>https://d1.awsstatic.com/whitepapers/aws-outposts-high-availability-design-and-architecture-considerations.pdf",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1061180,
          "date": "Fri 03 Nov 2023 09:37",
          "username": "dilaaziz",
          "content": "https://docs.aws.amazon.com/whitepapers/latest/aws-outposts-high-availability-design/aws-outposts-high-availability-design.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 1059185,
          "date": "Tue 31 Oct 2023 21:36",
          "username": "canonlycontainletters1",
          "content": "I choose ACD",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ACD"
        },
        {
          "id": 1056924,
          "date": "Sun 29 Oct 2023 16:30",
          "username": "danielmakita",
          "content": "I think ACD is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ACD"
        },
        {
          "id": 1055511,
          "date": "Fri 27 Oct 2023 13:16",
          "username": "chris0975",
          "content": "You get to choose the capacity. F",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 1050706,
          "date": "Sun 22 Oct 2023 16:04",
          "username": "thanhnv142",
          "content": "A, C and D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1040005,
          "date": "Wed 11 Oct 2023 02:44",
          "username": "aleksand41",
          "content": "ACD https://docs.aws.amazon.com/outposts/latest/userguide/outpost-maintenance.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1020102,
          "date": "Thu 28 Sep 2023 18:40",
          "username": "Ramdi1",
          "content": "I think because of the shared responsibility model it is ACD",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ACD"
        },
        {
          "id": 1015804,
          "date": "Sun 24 Sep 2023 15:05",
          "username": "taustin2",
          "content": "A and C are obviously right. D is wrong because \\\"within the Outpost racks\\\". Between E and F, E is wrong because (https://aws.amazon.com/outposts/rack/faqs/) says \\\"If there is a need to perform physical maintenance, AWS will reach out to schedule a time to visit your site. AWS may replace a given module as appropriate but will not perform any host or network switch servicing on customer premises.\\\" So, choosing F.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACF"
        }
      ]
    }
  ]
}