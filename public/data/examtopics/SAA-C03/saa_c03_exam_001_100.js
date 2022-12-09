var SAA_C03_Exam_001_100 = {
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#1",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company collects data for temperature, humidity, and atmospheric pressure in cities across multiple continents. The average volume of data that the company collects from each site daily is 500 GB.  Each site has a high-speed Internet connection.<br>The company wants to aggregate the data from all these global sites as quickly as possible in a single Amazon S3 bucket. The solution must minimize operational complexity.<br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1",
          "answers": [
            {
              "choice": "<p>A. Turn on S3 Transfer Acceleration on the destination S3 bucket. Use multipart uploads to directly upload site data to the destination S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Upload the data from each site to an S3 bucket in the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket. Then remove the data from the origin S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Schedule AWS Snowball Edge Storage Optimized device jobs daily to transfer data from each site to the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Upload the data from each site to an Amazon EC2 instance in the closest Region. Store the data in an Amazon Elastic Block Store (Amazon EBS) volume. At regular intervals, take an EBS snapshot and copy it to the Region that contains the destination S3 bucket. Restore the EBS volume in that Region.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 690908,
          "date": "Mon 10 Oct 2022 10:55",
          "username": "D2wBoboChow",
          "content": "S3 Transfer Acceleration is the best solution cz it's faster , good for high speed,Transfer Acceleration is designed to optimize transfer speeds from across the world into S3 buckets.I thoughtS3 Transfer Acceleration is based on Cross Region Repilication, I made a mistake.",
          "upvote_count": "131",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 692565,
          "date": "Wed 12 Oct 2022 04:16",
          "username": "BoboChow",
          "content": "I thoughtS3 Transfer Acceleration is based on Cross Region Repilication, I made a mistake.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 735287,
          "date": "Sun 04 Dec 2022 18:29",
          "username": "AlaN652",
          "content": "A is the correct answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 724751,
          "date": "Wed 23 Nov 2022 00:34",
          "username": "jidexray",
          "content": "A is the right answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 723456,
          "date": "Mon 21 Nov 2022 13:18",
          "username": "Wpcorgan",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 722418,
          "date": "Sun 20 Nov 2022 06:59",
          "username": "JayanKuruwita",
          "content": "The only other answer give some compitition for A is C, but it said high speed internet and need to lower the operational overhead. So you be A. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 721729,
          "date": "Sat 19 Nov 2022 03:28",
          "username": "jidexray",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 714806,
          "date": "Thu 10 Nov 2022 00:14",
          "username": "Buruguduystunstugudunstuy",
          "content": "The correct Answer is A<br><br>http://lavnish.blogspot.com/2017/06/aws-s3-cross-region-replication.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 711236,
          "date": "Fri 04 Nov 2022 16:15",
          "username": "Naneyerocky",
          "content": "Amazon S3 Transfer Acceleration is a bucket-level feature that enables fast, easy, and secure transfers of files over long distances between your client and an S3 bucket. Transfer Acceleration is designed to optimize transfer speeds from across the world into S3 buckets.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 709570,
          "date": "Wed 02 Nov 2022 03:26",
          "username": "gulam11adam",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 706704,
          "date": "Fri 28 Oct 2022 20:39",
          "username": "17Master",
          "content": "Ans is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 706151,
          "date": "Fri 28 Oct 2022 07:23",
          "username": "cheese929",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 696438,
          "date": "Sun 16 Oct 2022 20:45",
          "username": "queen101",
          "content": "AAAAAAAAAA",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 695043,
          "date": "Sat 15 Oct 2022 01:32",
          "username": "bilel500",
          "content": "Answer is A. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 695042,
          "date": "Sat 15 Oct 2022 01:32",
          "username": "bilel500",
          "content": "Answer is A. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 691360,
          "date": "Mon 10 Oct 2022 18:41",
          "username": "sba21",
          "content": "Answer: A true",
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
      "question_text": "<p>A company needs the ability to analyze the log files of its proprietary application. The logs are stored in JSON format in an Amazon S3 bucket. Queries will be simple and will run on-demand. A solutions architect needs to perform the analysis with minimal changes to the existing architecture.<br>What should the solutions architect do to meet these requirements with the LEAST amount of operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#2",
          "answers": [
            {
              "choice": "<p>A. Use Amazon Redshift to load all the content into one place and run the SQL queries as needed.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon CloudWatch Logs to store the logs. Run SQL queries as needed from the Amazon CloudWatch console.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon Athena directly with Amazon S3 to run the queries as needed.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Glue to catalog the logs. Use a transient Apache Spark cluster on Amazon EMR to run the SQL queries as needed.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 690161,
          "date": "Sun 09 Oct 2022 14:21",
          "username": "airraid2010BoboChowtt79",
          "content": "Answer: C<br>https://docs.aws.amazon.com/athena/latest/ug/what-is.html<br>Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL. With a few actions in the AWS Management Console, you can point Athena at your data stored in Amazon S3 and begin using standard SQL to run ad-hoc queries and get results in seconds.I agree C is the answerC is right.",
          "upvote_count": "811",
          "selected_answers": ""
        },
        {
          "id": 692564,
          "date": "Wed 12 Oct 2022 04:14",
          "username": "BoboChow",
          "content": "I agree C is the answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 690542,
          "date": "Sun 09 Oct 2022 23:04",
          "username": "tt79",
          "content": "C is right.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 735296,
          "date": "Sun 04 Dec 2022 18:33",
          "username": "AlaN652",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 723653,
          "date": "Mon 21 Nov 2022 15:57",
          "username": "Drekorig",
          "content": "Athena allows query data stored in S3 with SQL",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 723457,
          "date": "Mon 21 Nov 2022 13:19",
          "username": "Wpcorgan",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 711943,
          "date": "Sat 05 Nov 2022 19:18",
          "username": "pm2229",
          "content": "Serverless query service to perform analytics on S3.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 707717,
          "date": "Sun 30 Oct 2022 10:03",
          "username": "Drchattss",
          "content": "Can you pass test with ONLY this dump",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 706706,
          "date": "Fri 28 Oct 2022 20:44",
          "username": "17Master",
          "content": "Amazon Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL. Athena is serverless, so there is no infrastructure to manage, and you pay only for the queries that you run.<br>https://aws.amazon.com/athena/?nc1=h_ls&whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 706185,
          "date": "Fri 28 Oct 2022 08:14",
          "username": "cheese929",
          "content": "Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 700174,
          "date": "Thu 20 Oct 2022 19:45",
          "username": "ManoAnidduque10",
          "content": "Are these the new set of questions as Amazon has updated their exam?yes it is, please notice that the new version is SAA-C03, while the old version is SAA-C02",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 712867,
          "date": "Mon 07 Nov 2022 08:12",
          "username": "dduque10",
          "content": "yes it is, please notice that the new version is SAA-C03, while the old version is SAA-C02",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 696439,
          "date": "Sun 16 Oct 2022 20:47",
          "username": "queen101",
          "content": "CCCCCCCCCC",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 695055,
          "date": "Sat 15 Oct 2022 01:59",
          "username": "bilel500",
          "content": "Answer is C. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 691820,
          "date": "Tue 11 Oct 2022 08:24",
          "username": "sba21",
          "content": "Athena allows directly query data stored in S3",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 691041,
          "date": "Mon 10 Oct 2022 13:11",
          "username": "sba21",
          "content": "Answer: C<br>Athena is only service that allows directly query data stored in S3",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 690914,
          "date": "Mon 10 Oct 2022 11:05",
          "username": "D2w",
          "content": "Amazon Athena is Serverless query service to perform analytics against S3 objects. And cz it wants minimal changes I'll definitely go with it.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 690544,
          "date": "Sun 09 Oct 2022 23:04",
          "username": "tt79",
          "content": "Answer:C",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#3",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations to manage multiple AWS accounts for different departments. The management account has an Amazon S3 bucket that contains project reports. The company wants to limit access to this S3 bucket to only users of accounts within the organization in AWS Organizations.<br>Which solution meets these requirements with the LEAST amount of operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#3",
          "answers": [
            {
              "choice": "<p>A. Add the aws PrincipalOrgID global condition key with a reference to the organization ID to the S3 bucket policy.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an organizational unit (OU) for each department. Add the aws:PrincipalOrgPaths global condition key to the S3 bucket policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS CloudTrail to monitor the CreateAccount, InviteAccountToOrganization, LeaveOrganization, and RemoveAccountFromOrganization events. Update the S3 bucket policy accordingly.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Tag each user that needs access to the S3 bucket. Add the aws:PrincipalTag global condition key to the S3 bucket policy.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 690855,
          "date": "Mon 10 Oct 2022 10:05",
          "username": "udeBoboChow",
          "content": "aws:PrincipalOrgID Validates if the principal accessing the resource belongs to an account in your organization.<br>https://aws.amazon.com/blogs/security/control-access-to-aws-resources-by-using-the-aws-organization-of-iam-principals/the condition key aws:PrincipalOrgID can prevent the members who don't belong to your organization to access the resource",
          "upvote_count": "181",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 692567,
          "date": "Wed 12 Oct 2022 04:25",
          "username": "BoboChow",
          "content": "the condition key aws:PrincipalOrgID can prevent the members who don't belong to your organization to access the resource",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 690108,
          "date": "Sun 09 Oct 2022 13:28",
          "username": "Rock08thangvu1890debillionArielSchivo",
          "content": "Now you can arrange your AWS accounts into groups called organizational units (OUs) and apply policies to OUs or directly to accounts. For example, you can organize your accounts by application, environment, team, or any other grouping that makes sense for your business.It's ok. But It's not the LEAST amount of operational overhead.Yeah! I thought as much.But the goal here is to limit access just for the users of the account, not groups or departments.That's why A is correct.",
          "upvote_count": "5213",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 713207,
          "date": "Mon 07 Nov 2022 18:34",
          "username": "thangvu1890debillion",
          "content": "It's ok. But It's not the LEAST amount of operational overhead.Yeah! I thought as much.",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 713501,
          "date": "Tue 08 Nov 2022 06:26",
          "username": "debillion",
          "content": "Yeah! I thought as much.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 708301,
          "date": "Mon 31 Oct 2022 09:57",
          "username": "ArielSchivo",
          "content": "But the goal here is to limit access just for the users of the account, not groups or departments.That's why A is correct.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 732676,
          "date": "Thu 01 Dec 2022 15:01",
          "username": "9014",
          "content": "A is the correct answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 723459,
          "date": "Mon 21 Nov 2022 13:20",
          "username": "Wpcorgan",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 714289,
          "date": "Wed 09 Nov 2022 05:28",
          "username": "VTI_Training",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 713904,
          "date": "Tue 08 Nov 2022 15:41",
          "username": "Saiofy",
          "content": ".... and it's A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 711924,
          "date": "Sat 05 Nov 2022 18:54",
          "username": "pm2229",
          "content": "It's A, IAM now makes it easier for you to control access to your AWS resources by using the AWS organization of IAM principals (users and roles). You can use the aws:PrincipalOrgID condition key in your resource-based policies to more easily restrict access to IAM principals from accounts in your AWS organization.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 711246,
          "date": "Fri 04 Nov 2022 16:38",
          "username": "Naneyerocky",
          "content": "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html<br>Condition keys: AWS provides condition keys that you can query to provide more granular control over certain actions. <br>The following condition keys are especially useful with AWS Organizations:<br><br>aws:PrincipalOrgID – Simplifies specifying the Principal element in a resource-based policy. This global key provides an alternative to listing all the account IDs for all AWS accounts in an organization. Instead of listing all of the accounts that are members of an organization, you can specify the organization ID in the Condition element.<br><br>aws:PrincipalOrgPaths – Use this condition key to match members of a specific organization root, an OU, or its children. The aws:PrincipalOrgPaths condition key returns true when the principal (root user, IAM user, or role) making the request is in the specified organization path. A path is a text representation of the structure of an AWS Organizations entity.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 706769,
          "date": "Fri 28 Oct 2022 23:50",
          "username": "17Master",
          "content": "ans is A.  The company wants to limit access to this S3 bucket to only users of accounts within the organization in AWS Organizations.<br>https://aws.amazon.com/blogs/security/control-access-to-aws-resources-by-using-the-aws-organization-of-iam-principals/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 704068,
          "date": "Tue 25 Oct 2022 19:39",
          "username": "JesseeS",
          "content": "https://aws.amazon.com/blogs/security/control-access-to-aws-resources-by-using-the-aws-organization-of-iam-principals/ Answer is A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 696440,
          "date": "Sun 16 Oct 2022 20:49",
          "username": "queen101",
          "content": "AAAAAAAAAA",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 695607,
          "date": "Sat 15 Oct 2022 20:28",
          "username": "123jhl0",
          "content": "A requires the LEAST effort",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 695057,
          "date": "Sat 15 Oct 2022 02:02",
          "username": "bilel500",
          "content": "Answer is A. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 693573,
          "date": "Thu 13 Oct 2022 05:54",
          "username": "huiy",
          "content": "Agree A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 692549,
          "date": "Wed 12 Oct 2022 03:30",
          "username": "josh_fan",
          "content": "Now, you can use a new condition key, aws:PrincipalOrgID, in these policies to require all principals accessing the resource to be from an account (including the master account) in the organization.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#4",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An application runs on an Amazon EC2 instance in a VPC.  The application processes logs that are stored in an Amazon S3 bucket. The EC2 instance needs to access the S3 bucket without connectivity to the internet.<br>Which solution will provide private network connectivity to Amazon S3?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#4",
          "answers": [
            {
              "choice": "<p>A. Create a gateway VPC endpoint to the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Stream the logs to Amazon CloudWatch Logs. Export the logs to the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an instance profile on Amazon EC2 to allow S3 access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon API Gateway API with a private link to access the S3 endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 690928,
          "date": "Mon 10 Oct 2022 11:27",
          "username": "D2w",
          "content": "VPC endpoint allows you to connect to AWS services using a private network instead of using the public Internet",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 734969,
          "date": "Sun 04 Dec 2022 10:32",
          "username": "javitech83",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 724969,
          "date": "Wed 23 Nov 2022 08:35",
          "username": "Drekorig",
          "content": "To provide connectivity the answer is \\\"A\\\". To authorize the connection we can use the instance profile.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 724362,
          "date": "Tue 22 Nov 2022 15:01",
          "username": "cheese929",
          "content": "A is right.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 723460,
          "date": "Mon 21 Nov 2022 13:20",
          "username": "Wpcorgan",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 722257,
          "date": "Sat 19 Nov 2022 22:17",
          "username": "grzeev",
          "content": "https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 711938,
          "date": "Sat 05 Nov 2022 19:06",
          "username": "pm2229",
          "content": "It's A, Private endpoints within your VPC that allow AWS services to privately connect to resources within your VPC without traversing the public internet (cheaper)",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 711250,
          "date": "Fri 04 Nov 2022 16:50",
          "username": "Naneyerocky",
          "content": "https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html<br>You can access Amazon S3 from your VPC using gateway VPC endpoints. After you create the gateway endpoint, you can add it as a target in your route table for traffic destined from your VPC to Amazon S3.<br>You can create a policy that restricts access to specific IP address ranges by using the aws:VpcSourceIp condition key.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 708763,
          "date": "Mon 31 Oct 2022 23:55",
          "username": "Adrianjavier",
          "content": "A for sure",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 706772,
          "date": "Fri 28 Oct 2022 23:56",
          "username": "17Master",
          "content": "ans is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 698495,
          "date": "Tue 18 Oct 2022 22:08",
          "username": "bilel500",
          "content": "Answer is A. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 696441,
          "date": "Sun 16 Oct 2022 20:50",
          "username": "queen101",
          "content": "AAAAAAAAAAAA",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 692570,
          "date": "Wed 12 Oct 2022 04:29",
          "username": "BoboChow",
          "content": "obviously it's A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 691639,
          "date": "Tue 11 Oct 2022 03:26",
          "username": "Mikedodo",
          "content": "Reduce Cost and Increase Security with Amazon VPC Endpoints",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#5",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is hosting a web application on AWS using a single Amazon EC2 instance that stores user-uploaded documents in an Amazon EBS volume. For better scalability and availability, the company duplicated the architecture and created a second EC2 instance and EBS volume in another Availability Zone, placing both behind an Application Load Balancer. After completing this change, users reported that, each time they refreshed the website, they could see one subset of their documents or the other, but never all of the documents at the same time.<br>What should a solutions architect propose to ensure users see all of their documents at once?<br><br></p>",
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
              "choice": "<p>A. Copy the data so both EBS volumes contain all the documents<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the Application Load Balancer to direct a user to the server with the documents<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Copy the data from both EBS volumes to Amazon EFS. Modify the application to save new documents to Amazon EFS<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the Application Load Balancer to send the request to both servers. Return each document from the correct server<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 690945,
          "date": "Mon 10 Oct 2022 11:39",
          "username": "D2w",
          "content": "Concurrent or at the same time key word for EFS",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 734970,
          "date": "Sun 04 Dec 2022 10:33",
          "username": "javitech83",
          "content": "c is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 724365,
          "date": "Tue 22 Nov 2022 15:06",
          "username": "cheese929",
          "content": "C is the only solution that make sense.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 723462,
          "date": "Mon 21 Nov 2022 13:22",
          "username": "Wpcorgan",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 719165,
          "date": "Tue 15 Nov 2022 23:26",
          "username": "mikey2000",
          "content": "Ebs doesnt support cross az only reside in one Az but Efs does, that why it's c",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 714178,
          "date": "Wed 09 Nov 2022 01:58",
          "username": "Azeeza",
          "content": "Amazon Elastic File System is a cloud storage service provided by Amazon Web Services designed to provide scalable, elastic and concurrency. Answer is C",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 711949,
          "date": "Sat 05 Nov 2022 19:31",
          "username": "pm2229",
          "content": "It's C,EFS can be mounted to multiple EC2 instances across AZs. The Performance is higher latency & throughput.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 706779,
          "date": "Sat 29 Oct 2022 00:03",
          "username": "17Master",
          "content": "Ans is C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 698540,
          "date": "Wed 19 Oct 2022 00:39",
          "username": "bilel500",
          "content": "Answer is C. <br>Adaptive throughput – EFS’s performance can scale in-line with its storage, operating at a higher throughput for sudden, high-volume file dumps, reaching up to 500,000 IOPS or 10 GB per second<br>Totally elastic – once you’ve spun up an EFS instance, you can add add files without worrying about provisioning or disturbing your application’s performance<br>Additional accessibility – EFS can be mounted from different EC2 instances, but it can also cross the AWS region boundary via the use of VPC peering",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 696443,
          "date": "Sun 16 Oct 2022 20:52",
          "username": "queen101",
          "content": "CCCCCCCCCCCC",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 692574,
          "date": "Wed 12 Oct 2022 04:37",
          "username": "BoboChow",
          "content": "I'm not sure if ALB could configure like session ID thing, so I choose C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#6",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses NFS to store large video files in on-premises network attached storage. Each video file ranges in size from 1 MB to 500 GB.  The total storage is 70 TB and is no longer growing. The company decides to migrate the video files to Amazon S3. The company must migrate the video files as soon as possible while using the least possible network bandwidth.<br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#6",
          "answers": [
            {
              "choice": "<p>A. Create an S3 bucket. Create an IAM role that has permissions to write to the S3 bucket. Use the AWS CLI to copy all files locally to the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Snowball Edge job. Receive a Snowball Edge device on premises. Use the Snowball Edge client to transfer data to the device. Return the device so that AWS can import the data into Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy an S3 File Gateway on premises. Create a public service endpoint to connect to the S3 File Gateway. Create an S3 bucket. Create a new NFS file share on the S3 File Gateway. Point the new file share to the S3 bucket. Transfer the data from the existing NFS file share to the S3 File Gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up an AWS Direct Connect connection between the on-premises network and AWS. Deploy an S3 File Gateway on premises. Create a public virtual interface (VIF) to connect to the S3 File Gateway. Create an S3 bucket. Create a new NFS file share on the S3 File Gateway. Point the new file share to the S3 bucket. Transfer the data from the existing NFS file share to the S3 File Gateway.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 690292,
          "date": "Sun 09 Oct 2022 17:02",
          "username": "tuloveu",
          "content": "As using the least possible network bandwidth.",
          "upvote_count": "16",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 695468,
          "date": "Sat 15 Oct 2022 16:32",
          "username": "GattJohnnyBGabhishek_m89Gattth3cookieGatt",
          "content": "Let's analyse this:<br><br>B.  On a Snowball Edge device you can copy files with a speed of up to 100Gbps. 70TB will take around 5600 seconds, so very quickly, less than 2 hours. The downside is that it'll take between 4-6 working days to receive the device and then another 2-3 working days to send it back and for AWS to move the data onto S3 once it reaches them. Total time: 6-9 working days. Bandwidth used: 0.<br><br>C.  File Gateway uses the Internet, so maximum speed will be at most 1Gbps, so it'll take a minimum of 6.5 days and you use 70TB of Internet bandwidth.<br><br>D.  You can achieve speeds of up to 10Gbps with Direct Connect. Total time 15.5 hours and you will use 70TB of bandwidth. However, what's interesting is that the question does not specific what type of bandwidth? Direct Connect does not use your Internet bandwidth, as you will have a dedicate peer to peer connectivity between your on-prem and the AWS Cloud, so technically, you're not using your \\\"public\\\" bandwidth. <br><br>The requirements are a bit too vague but I think that B is the most appropriate answer, although D might also be correct if the bandwidth usage refers strictly to your public connectivity.So you decided the internet connectivity is at 1Gb at most ?!?!?I would select B also.and it says, \\\"The total storage is 70 TB and is no longer growing\\\". Thats why it should be B. I will add that the question does not specify if the company already has DA in place or not. If they don't have DA in place, it will take a long time (weeks) for DA connectivity to be setup. Another point for B here, as Snowball is much quicker from this perspective.The company must transfer the data asap. Direct connect takes a month to setup doesn't it?That's a good point, indeed, DA might take weeks to establish (depending on your local ISP). And the question does not state that DA has already been established for this company. If they are starting fresh, then certainly DA would be taking too long.",
          "upvote_count": "1111211",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 724193,
          "date": "Tue 22 Nov 2022 09:56",
          "username": "JohnnyBG",
          "content": "So you decided the internet connectivity is at 1Gb at most ?!?!?I would select B also.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 723182,
          "date": "Mon 21 Nov 2022 06:38",
          "username": "abhishek_m89",
          "content": "and it says, \\\"The total storage is 70 TB and is no longer growing\\\". Thats why it should be B. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 714543,
          "date": "Wed 09 Nov 2022 13:09",
          "username": "Gatt",
          "content": "I will add that the question does not specify if the company already has DA in place or not. If they don't have DA in place, it will take a long time (weeks) for DA connectivity to be setup. Another point for B here, as Snowball is much quicker from this perspective.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 704934,
          "date": "Wed 26 Oct 2022 20:37",
          "username": "th3cookieGatt",
          "content": "The company must transfer the data asap. Direct connect takes a month to setup doesn't it?That's a good point, indeed, DA might take weeks to establish (depending on your local ISP). And the question does not state that DA has already been established for this company. If they are starting fresh, then certainly DA would be taking too long.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 714541,
          "date": "Wed 09 Nov 2022 13:09",
          "username": "Gatt",
          "content": "That's a good point, indeed, DA might take weeks to establish (depending on your local ISP). And the question does not state that DA has already been established for this company. If they are starting fresh, then certainly DA would be taking too long.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 735503,
          "date": "Sun 04 Dec 2022 23:50",
          "username": "NRaja",
          "content": "My vote is for B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 734973,
          "date": "Sun 04 Dec 2022 10:38",
          "username": "javitech83",
          "content": "b is correct as we need to use least possible network bandwith",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 734138,
          "date": "Sat 03 Dec 2022 01:47",
          "username": "Nutchawit",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 732684,
          "date": "Thu 01 Dec 2022 15:03",
          "username": "9014",
          "content": "of course the answer is a snowball",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 724997,
          "date": "Wed 23 Nov 2022 09:28",
          "username": "DrekorigJayBee65",
          "content": "This question is just terrible. I think the guys at AWS are talking about Amazon FSx File Gateway. So the reward is \\\"C\\\".<br>Amazon FSx File Gateway optimizes on-premises access to fully managed, highly reliable file shares in Amazon FSx for Windows File Server. Customers with unstructured or file data, whether from SMB-based group shares, or business applications, may require on-premises access to meet low-latency requirements. Amazon FSx File Gateway helps accelerate your file-based storage migration to the cloud to enable faster performance, improved data protection, and reduced cost.\\\"The company must migrate the video files as soon as possible while using the least possible network bandwidth.\\\" C required 70TB of network traffic, B requires zero, so B is a better answer.",
          "upvote_count": "13",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 730064,
          "date": "Tue 29 Nov 2022 08:52",
          "username": "JayBee65",
          "content": "\\\"The company must migrate the video files as soon as possible while using the least possible network bandwidth.\\\" C required 70TB of network traffic, B requires zero, so B is a better answer.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 723464,
          "date": "Mon 21 Nov 2022 13:23",
          "username": "Wpcorgan",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 723135,
          "date": "Mon 21 Nov 2022 03:20",
          "username": "jackwang0616",
          "content": "BBBBBBB",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 716462,
          "date": "Sat 12 Nov 2022 05:16",
          "username": "manu427",
          "content": "Direct Connect lead time more than a moth..so I will go with B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 714822,
          "date": "Thu 10 Nov 2022 01:31",
          "username": "Buruguduystunstugudunstuy",
          "content": "The KEYWORD \\\"The company must migrate the video files as soon as possible\\\" <br><br>I would take the correct answer C. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 714183,
          "date": "Wed 09 Nov 2022 02:02",
          "username": "Azeeza",
          "content": "The answer is C, because of time constraint identified in the question",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 712880,
          "date": "Mon 07 Nov 2022 08:22",
          "username": "dduque10",
          "content": "Why does it say C if the most voted answer is B?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 711983,
          "date": "Sat 05 Nov 2022 21:03",
          "username": "KaityL",
          "content": "I chose B.  A makes no sense. Direct connect takes very long. It said they wanted it done quickly. And its alot of data to be transfered.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 703079,
          "date": "Mon 24 Oct 2022 15:56",
          "username": "Six_Fingered_Jose",
          "content": "I go with B because out of all the options it uses the least bandwidth (none at all),<br>and 70 TB is pretty much the amount of data where you would want to use snowball",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 698954,
          "date": "Wed 19 Oct 2022 13:09",
          "username": "Wajifsensei70517Master",
          "content": "I am choosing C only because it says least network bandwidth didnt say \\\"No\\\" network bandwidth. It is extremely vague though. They could frame it a bit better.Option C is the first to be ruled out. File gateway (storage gateway) is not a migration tool. It simply bridges data from on-prem and AWS (e.g. S3) with local caching on-prem. They are asking about migrating data... file gateway does not migrate data, it is not a migration solution.Its correct!.",
          "upvote_count": "241",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 700862,
          "date": "Fri 21 Oct 2022 14:33",
          "username": "sensei70517Master",
          "content": "Option C is the first to be ruled out. File gateway (storage gateway) is not a migration tool. It simply bridges data from on-prem and AWS (e.g. S3) with local caching on-prem. They are asking about migrating data... file gateway does not migrate data, it is not a migration solution.Its correct!.",
          "upvote_count": "41",
          "selected_answers": ""
        },
        {
          "id": 718442,
          "date": "Tue 15 Nov 2022 03:41",
          "username": "17Master",
          "content": "Its correct!.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 698541,
          "date": "Wed 19 Oct 2022 00:45",
          "username": "bilel500",
          "content": "Answer is B. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#7",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that ingests incoming messages. Dozens of other applications and microservices then quickly consume these messages. The number of messages varies drastically and sometimes increases suddenly to 100,000 each second. The company wants to decouple the solution and increase scalability.<br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#7",
          "answers": [
            {
              "choice": "<p>A. Persist the messages to Amazon Kinesis Data Analytics. Configure the consumer applications to read and process the messages.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy the ingestion application on Amazon EC2 instances in an Auto Scaling group to scale the number of EC2 instances based on CPU metrics.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Write the messages to Amazon Kinesis Data Streams with a single shard. Use an AWS Lambda function to preprocess messages and store them in Amazon DynamoDB.  Configure the consumer applications to read from DynamoDB to process the messages.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Publish the messages to an Amazon Simple Notification Service (Amazon SNS) topic with multiple Amazon Simple Queue Service (Amazon SOS) subscriptions. Configure the consumer applications to process the messages from the queues.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 689305,
          "date": "Sat 08 Oct 2022 14:44",
          "username": "rein_chau9014",
          "content": "D makes more sense to me.of course, the answer is D",
          "upvote_count": "161",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 732687,
          "date": "Thu 01 Dec 2022 15:05",
          "username": "9014",
          "content": "of course, the answer is D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 712728,
          "date": "Mon 07 Nov 2022 01:52",
          "username": "Bevemo",
          "content": "D.  SNS Fan Out Pattern https://docs.aws.amazon.com/sns/latest/dg/sns-common-scenarios.html(A is wrong Kinesis Analysis does not 'persist' by itself.)",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 731197,
          "date": "Wed 30 Nov 2022 08:24",
          "username": "gilang_from_indonesia",
          "content": "It should be D.  Key words: Persist, decouple",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 725074,
          "date": "Wed 23 Nov 2022 12:10",
          "username": "yuchip",
          "content": "A, Amazon Kinesis makes it easy to collect, process, and analyze real-time, streaming data so you can get timely insights and react quickly to new information.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 723466,
          "date": "Mon 21 Nov 2022 13:26",
          "username": "Wpcorgan",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 721789,
          "date": "Sat 19 Nov 2022 06:53",
          "username": "ABCMail",
          "content": "SQS is a better solution for decoupling",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 719732,
          "date": "Wed 16 Nov 2022 15:24",
          "username": "renekton",
          "content": "decoupling an application using sqs and fanout using sns",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 719175,
          "date": "Tue 15 Nov 2022 23:58",
          "username": "mikey2000",
          "content": "Why is A the correct answer?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 710680,
          "date": "Thu 03 Nov 2022 18:28",
          "username": "azmne",
          "content": "D because decoupling = SQS in most cases,",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 708500,
          "date": "Mon 31 Oct 2022 15:45",
          "username": "k0s3k",
          "content": "Guys, I am not for option D.  Look at those SNS limits: https://docs.aws.amazon.com/general/latest/gr/sns.html<br>Even so, why would you publish messages to SNS when you can do it directly to SQS",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 707941,
          "date": "Sun 30 Oct 2022 18:18",
          "username": "bont",
          "content": "D fan out to SQS",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 706739,
          "date": "Fri 28 Oct 2022 22:02",
          "username": "keezbadger",
          "content": "D:By default, FIFO queues support up to 3,000 messages per second with batching or up to 300 messages per second (300 send, receive, or delete operations per second) without batching. So with batching it solved the question and option D also mentions “multiple”. So D is the right choice.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 703082,
          "date": "Mon 24 Oct 2022 15:59",
          "username": "Six_Fingered_Jose",
          "content": "I go for D because decoupling = SQS in most cases,<br>and they did mention SNS into multiple SQS so with multiple SQS you can handle more than 100k requests",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 698919,
          "date": "Wed 19 Oct 2022 12:22",
          "username": "cark0728DrekorigSix_Fingered_Jose17Master",
          "content": "D가 정답이다D'accordyeah i agreex2 -- XD jajajaja",
          "upvote_count": "2131",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 725053,
          "date": "Wed 23 Nov 2022 11:21",
          "username": "Drekorig",
          "content": "D'accord",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 703081,
          "date": "Mon 24 Oct 2022 15:58",
          "username": "Six_Fingered_Jose17Master",
          "content": "yeah i agreex2 -- XD jajajaja",
          "upvote_count": "31",
          "selected_answers": ""
        },
        {
          "id": 718449,
          "date": "Tue 15 Nov 2022 03:51",
          "username": "17Master",
          "content": "x2 -- XD jajajaja",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 698761,
          "date": "Wed 19 Oct 2022 09:17",
          "username": "iCcmaiCcma17Master",
          "content": "https://docs.aws.amazon.com/general/latest/gr/sns.html<br>https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html<br>30,000 messages per secondfriends certainly D makes a lot of sense, so even with the answer I gave, I'm curious, here I leave a link with a debate with very good arguments.<br>https://www.examtopics.com/discussions/amazon/view/43777-exam-aws-certified-solutions-architect-associate-saa-c02/<br>I want to change my answer to DAns is D",
          "upvote_count": "131",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 698791,
          "date": "Wed 19 Oct 2022 09:55",
          "username": "iCcma17Master",
          "content": "friends certainly D makes a lot of sense, so even with the answer I gave, I'm curious, here I leave a link with a debate with very good arguments.<br>https://www.examtopics.com/discussions/amazon/view/43777-exam-aws-certified-solutions-architect-associate-saa-c02/<br>I want to change my answer to DAns is D",
          "upvote_count": "31",
          "selected_answers": ""
        },
        {
          "id": 706783,
          "date": "Sat 29 Oct 2022 00:22",
          "username": "17Master",
          "content": "Ans is D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 697570,
          "date": "Mon 17 Oct 2022 18:54",
          "username": "PhilN135",
          "content": "D - it is",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 696446,
          "date": "Sun 16 Oct 2022 20:55",
          "username": "queen101",
          "content": "DDDDDDD",
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
      "question_text": "<p>A company is migrating a distributed application to AWS. The application serves variable workloads. The legacy platform consists of a primary server that coordinates jobs across multiple compute nodes. The company wants to modernize the application with a solution that maximizes resiliency and scalability.<br>How should a solutions architect design the architecture to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#8",
          "answers": [
            {
              "choice": "<p>A. Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination for the jobs. Implement the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure EC2 Auto Scaling to use scheduled scaling.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination for the jobs. Implement the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure EC2 Auto Scaling based on the size of the queue.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Implement the primary server and the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure AWS CloudTrail as a destination for the jobs. Configure EC2 Auto Scaling based on the load on the primary server.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Implement the primary server and the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure Amazon EventBridge (Amazon CloudWatch Events) as a destination for the jobs. Configure EC2 Auto Scaling based on the load on the compute nodes.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 689313,
          "date": "Sat 08 Oct 2022 14:52",
          "username": "rein_chauWilson_S",
          "content": "A - incorrect: Schedule scaling policy doesn't make sense.<br>C, D - incorrect: Primary server should not be in same Auto Scaling group with compute nodes.<br>B is correct.https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-using-sqs-queue.html",
          "upvote_count": "232",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 714820,
          "date": "Thu 10 Nov 2022 01:25",
          "username": "Wilson_S",
          "content": "https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-using-sqs-queue.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 689123,
          "date": "Sat 08 Oct 2022 10:07",
          "username": "Sinaneos",
          "content": "The answer seems to be B for me:<br>A: doesn't make sense to schedule auto-scaling<br>C: Not sure how CloudTrail would be helpful in this case, at all.<br>D: EventBridge is not really used for this purpose, wouldn't be very reliable",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 723469,
          "date": "Mon 21 Nov 2022 13:27",
          "username": "Wpcorgan",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 721790,
          "date": "Sat 19 Nov 2022 06:58",
          "username": "ABCMail",
          "content": "The scalability can depend on the size of the queue",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 719198,
          "date": "Wed 16 Nov 2022 01:20",
          "username": "mikey2000",
          "content": "I'm so confuse, how is cloudtrail going to be a destination for Jobs.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 718328,
          "date": "Mon 14 Nov 2022 23:53",
          "username": "cinostroza",
          "content": "should be B, is the C for real?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 712882,
          "date": "Mon 07 Nov 2022 08:29",
          "username": "dduque10",
          "content": "Always go with the most voted, C is the worst one",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 712113,
          "date": "Sun 06 Nov 2022 02:32",
          "username": "emyhe",
          "content": "shoule be B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 711495,
          "date": "Sat 05 Nov 2022 03:03",
          "username": "Wajif",
          "content": "Why C? Surely thats a mistake.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 711204,
          "date": "Fri 04 Nov 2022 15:17",
          "username": "lampard999999999",
          "content": "B is corect",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 706785,
          "date": "Sat 29 Oct 2022 00:28",
          "username": "17Master",
          "content": "ans is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 704088,
          "date": "Tue 25 Oct 2022 20:03",
          "username": "alexman94",
          "content": "C - the use of CloudTrail is for AWS events. It doesn’t make sense in receiving jobs. <br>B is my answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 703086,
          "date": "Mon 24 Oct 2022 16:03",
          "username": "Six_Fingered_Jose",
          "content": "I go with B here<br>CloudTrail as a job destination doesnt make sense, thats a logging/auditing platform",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 698543,
          "date": "Wed 19 Oct 2022 00:57",
          "username": "bilel500",
          "content": "Answer is B. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 692581,
          "date": "Wed 12 Oct 2022 04:50",
          "username": "BoboChow",
          "content": "B seems to work.<br>I.m not sure about D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 691121,
          "date": "Mon 10 Oct 2022 14:20",
          "username": "hanhdroid",
          "content": "Should be B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#9",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running an SMB file server in its data center. The file server stores large files that are accessed frequently for the first few days after the files are created. After 7 days the files are rarely accessed.<br>The total data size is increasing and is close to the company's total storage capacity. A solutions architect must increase the company's available storage space without losing low-latency access to the most recently accessed files. The solutions architect must also provide file lifecycle management to avoid future storage issues.<br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#9",
          "answers": [
            {
              "choice": "<p>A. Use AWS DataSync to copy data that is older than 7 days from the SMB file server to AWS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon S3 File Gateway to extend the company's storage space. Create an S3 Lifecycle policy to transition the data to S3 Glacier Deep Archive after 7 days.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon FSx for Windows File Server file system to extend the company's storage space.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Install a utility on each user's computer to access Amazon S3. Create an S3 Lifecycle policy to transition the data to S3 Glacier Flexible Retrieval after 7 days.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 689126,
          "date": "Sat 08 Oct 2022 10:11",
          "username": "SinaneosUdoyen",
          "content": "Answer directly points towards file gateway with lifecycles, https://docs.aws.amazon.com/filegateway/latest/files3/CreatingAnSMBFileShare.html<br><br>D is wrong because utility function is vague and there is no need for flexible storage.Yes it might be vague but how do we keep the low-latency access that only flexible can offer?",
          "upvote_count": "152",
          "selected_answers": ""
        },
        {
          "id": 731229,
          "date": "Wed 30 Nov 2022 09:24",
          "username": "Udoyen",
          "content": "Yes it might be vague but how do we keep the low-latency access that only flexible can offer?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 734975,
          "date": "Sun 04 Dec 2022 10:46",
          "username": "javitech83",
          "content": "B answwer is correct. low latency is only needed for newer files. Additionally, File GW provides low latency access by caching frequently accessed files locally so answer is B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 723472,
          "date": "Mon 21 Nov 2022 13:32",
          "username": "Wpcorgan",
          "content": "B is correct for me",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 721795,
          "date": "Sat 19 Nov 2022 07:11",
          "username": "ABCMail",
          "content": "Using aws S3 gateway seems to be a logical option",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 720359,
          "date": "Thu 17 Nov 2022 10:24",
          "username": "digitalseeJayBee65",
          "content": "After 7 days the files are rarely accessed, so they are still accessed and still need access within milliseconds. So B can't be correct.<br>Installing S3 clients on Clients is a weird solution but the others simply don't fit the case.No, you misread the question, the requirement is \\\"without losing low-latency access to the most recently accessed files\\\". Since files accessed in the last 7 days will not be transitioned to Glacier Deep Archive, they will still be available \\\"without losing low-latency access\\\" if B is selected.",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 730094,
          "date": "Tue 29 Nov 2022 09:22",
          "username": "JayBee65",
          "content": "No, you misread the question, the requirement is \\\"without losing low-latency access to the most recently accessed files\\\". Since files accessed in the last 7 days will not be transitioned to Glacier Deep Archive, they will still be available \\\"without losing low-latency access\\\" if B is selected.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 719352,
          "date": "Wed 16 Nov 2022 06:50",
          "username": "mikey2000",
          "content": "I think the answer is D because the question said without losing low-latency access.With glacier flexible retrieval, data can but access within 1-5 mins unlike glacier deep archival, it take 12 hours to access your data, 12 hours would defeat trying to get a low- latency access",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 718969,
          "date": "Tue 15 Nov 2022 17:54",
          "username": "Mihai7Ptopics",
          "content": "Because it still requires \\\"low latency access\\\" and some files older than 7 days are infrequently, BUT still accessed only Flexible retrieval can retrieve the file in minutes. Deep archive can't. The other answers(A and C) are not any good.Low latency access is for files less than 7 days old.File GW provides low latency access by caching frequently accessed files locally so answer is B. ",
          "upvote_count": "22",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 722093,
          "date": "Sat 19 Nov 2022 16:53",
          "username": "Ptopics",
          "content": "Low latency access is for files less than 7 days old.File GW provides low latency access by caching frequently accessed files locally so answer is B. ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 717679,
          "date": "Mon 14 Nov 2022 04:50",
          "username": "leonnnn",
          "content": "A S3 gateway provides smb for end users and stores file in S3 so that it can use lifecycle management to transit old files.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 716876,
          "date": "Sat 12 Nov 2022 19:56",
          "username": "akellaaws",
          "content": "Utility is not necessary",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 714199,
          "date": "Wed 09 Nov 2022 02:15",
          "username": "Azeeza",
          "content": "File Gateway will be the best bet to replace the SMB storage server",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 713922,
          "date": "Tue 08 Nov 2022 16:19",
          "username": "VijayMeh",
          "content": "B is the right answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 711483,
          "date": "Sat 05 Nov 2022 02:43",
          "username": "gokalpkocer3",
          "content": "lifecycle therefore B. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 706998,
          "date": "Sat 29 Oct 2022 08:01",
          "username": "keezbadger",
          "content": "D is tricky. Though the questions says that \\\"A solutions architect must increase the company's available storage space without losing low-latency access to the most recently accessed files.\\\" Which falls under the category of S3 Glacier flexible retrieval. Amazon S3 File Gateway provides a seamless way to connect to the cloud in order to store application data files and backup images as durable objects in Amazon S3 cloud storage. Amazon S3 File Gateway offers SMB or NFS-based access to data in Amazon S3 with local caching. Therefore :<br>B is the right answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 706793,
          "date": "Sat 29 Oct 2022 00:53",
          "username": "17Master",
          "content": "Ans is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 703090,
          "date": "Mon 24 Oct 2022 16:06",
          "username": "Six_Fingered_JoseSix_Fingered_Jose",
          "content": "I go with B with this one,<br>volume gateway should support SMB, and with cache volume you can cache most recently accessed files locally for minimum latencyoh wait this is about filegateway, ignore my comment but answer is still B",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 703091,
          "date": "Mon 24 Oct 2022 16:07",
          "username": "Six_Fingered_Jose",
          "content": "oh wait this is about filegateway, ignore my comment but answer is still B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 697269,
          "date": "Mon 17 Oct 2022 12:04",
          "username": "patni11",
          "content": "eeeeeeeeeeeeeeeeeee",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 692585,
          "date": "Wed 12 Oct 2022 04:55",
          "username": "BoboChow",
          "content": "Amazon S3 File Gateway supports either SMB or NFS protocol",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#10",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building an ecommerce web application on AWS. The application sends information about new orders to an Amazon API Gateway REST API to process. The company wants to ensure that orders are processed in the order that they are received.<br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#10",
          "answers": [
            {
              "choice": "<p>A. Use an API Gateway integration to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic when the application receives an order. Subscribe an AWS Lambda function to the topic to perform processing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use an API Gateway integration to send a message to an Amazon Simple Queue Service (Amazon SQS) FIFO queue when the application receives an order. Configure the SQS FIFO queue to invoke an AWS Lambda function for processing.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use an API Gateway authorizer to block any requests while the application processes an order.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an API Gateway integration to send a message to an Amazon Simple Queue Service (Amazon SQS) standard queue when the application receives an order. Configure the SQS standard queue to invoke an AWS Lambda function for processing.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 689128,
          "date": "Sat 08 Oct 2022 10:11",
          "username": "Sinaneos",
          "content": "B because FIFO is made for that specific purpose",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 689332,
          "date": "Sat 08 Oct 2022 15:11",
          "username": "rein_chau",
          "content": "Should be B because SQS FIFO queue guarantees message order.",
          "upvote_count": "15",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 730260,
          "date": "Tue 29 Nov 2022 11:48",
          "username": "iamjeffbezos",
          "content": "does the guy uploading these questions just select an answer at random?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 727344,
          "date": "Sat 26 Nov 2022 07:57",
          "username": "ogwu2000",
          "content": "A. Can API Gateway integration sends a message or publishes a message?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 725729,
          "date": "Thu 24 Nov 2022 11:13",
          "username": "Drekorig",
          "content": "Answers A, B and D are possible, but to guarantee the order of the messages the answer is B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 717678,
          "date": "Mon 14 Nov 2022 04:48",
          "username": "leonnnn",
          "content": "SQS FIFO queue guraantees message order.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 716878,
          "date": "Sat 12 Nov 2022 19:59",
          "username": "akellaaws",
          "content": "SQS FIFO can be an event source for Lambda",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 716046,
          "date": "Fri 11 Nov 2022 13:36",
          "username": "raqsa",
          "content": "yes B is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 714962,
          "date": "Thu 10 Nov 2022 07:15",
          "username": "Buruguduystunstugudunstuy",
          "content": "KEYWORDS: \\\"processed in the order that they are received\\\"<br>FIFO, First·In·First·Out<br>The answer is B.  Amazon SQS FIFO<br>https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 712119,
          "date": "Sun 06 Nov 2022 02:44",
          "username": "emyhe",
          "content": "should be B, because require message order, FIFO have First-in-First-Out Deliveryfeature.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 707102,
          "date": "Sat 29 Oct 2022 11:27",
          "username": "ParitoshjaniHasu_UchihaKADSM",
          "content": "SQS is not a push service. Hence the consumer has to poll. SQS FIFO queue cannot invoke Lambda; it is reverse. While SNS can publish record to Lambda. Hence the more appropriate answer is AAWS Lambda now supports Amazon SQS First-In-First-Out (FIFO) as an event source.SQS FIFO can invoke lambda. https://aws.amazon.com/blogs/compute/new-for-aws-lambda-sqs-fifo-as-an-event-source/",
          "upvote_count": "211",
          "selected_answers": ""
        },
        {
          "id": 715106,
          "date": "Thu 10 Nov 2022 10:44",
          "username": "Hasu_Uchiha",
          "content": "AWS Lambda now supports Amazon SQS First-In-First-Out (FIFO) as an event source.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 711064,
          "date": "Fri 04 Nov 2022 11:17",
          "username": "KADSM",
          "content": "SQS FIFO can invoke lambda. https://aws.amazon.com/blogs/compute/new-for-aws-lambda-sqs-fifo-as-an-event-source/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 707000,
          "date": "Sat 29 Oct 2022 08:02",
          "username": "keezbadger",
          "content": "The right answer is B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 703098,
          "date": "Mon 24 Oct 2022 16:13",
          "username": "Six_Fingered_Jose",
          "content": "answer is B here<br>> ensure that orders are processed in the order that they are received.<br>only SQS with FIFO here meets that condition",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 697575,
          "date": "Mon 17 Oct 2022 19:00",
          "username": "PhilN135",
          "content": "B - FIFO",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 697271,
          "date": "Mon 17 Oct 2022 12:06",
          "username": "patni11",
          "content": "galat answer hai bc",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 694459,
          "date": "Fri 14 Oct 2022 04:58",
          "username": "alvarez100",
          "content": "B FIFO !",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 693439,
          "date": "Thu 13 Oct 2022 01:13",
          "username": "arthurfl",
          "content": "FIFO works here, son the answer is B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#11",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that runs on Amazon EC2 instances and uses an Amazon Aurora database. The EC2 instances connect to the database by using user names and passwords that are stored locally in a file. The company wants to minimize the operational overhead of credential management.<br>What should a solutions architect do to accomplish this goal?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#11",
          "answers": [
            {
              "choice": "<p>A. Use AWS Secrets Manager. Turn on automatic rotation.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Systems Manager Parameter Store. Turn on automatic rotation.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon S3 bucket to store objects that are encrypted with an AWS Key Management Service (AWS KMS) encryption key. Migrate the credential file to the S3 bucket. Point the application to the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an encrypted Amazon Elastic Block Store (Amazon EBS) volume for each EC2 instance. Attach the new EBS volume to each EC2 instance. Migrate the credential file to the new EBS volume. Point the application to the new EBS volume.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 689131,
          "date": "Sat 08 Oct 2022 10:15",
          "username": "Sinaneoskewl17MasteriCcma",
          "content": "B is wrong because parameter store does not support auto rotation, unless the customer writes it themselves, A is the answer.correct. see link https://tutorialsdojo.com/aws-secrets-manager-vs-systems-manager-parameter-store/ for differences between SSM Parameter Store and AWS Secrets ManagerREAD!!! AWS Secrets Manager is a secrets management service that helps you protect access to your applications, services, and IT resources. This service enables you to rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle. <br>https://aws.amazon.com/cn/blogs/security/how-to-connect-to-aws-secrets-manager-service-within-a-virtual-private-cloud/yhttps://aws.amazon.com/secrets-manager/?nc1=h_lsty bro, I was confused about that and you just mentioned the \\\"key\\\" phrase, B doesn't support autorotation",
          "upvote_count": "16141",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 734229,
          "date": "Sat 03 Dec 2022 06:48",
          "username": "kewl",
          "content": "correct. see link https://tutorialsdojo.com/aws-secrets-manager-vs-systems-manager-parameter-store/ for differences between SSM Parameter Store and AWS Secrets Manager",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 706796,
          "date": "Sat 29 Oct 2022 01:10",
          "username": "17Master",
          "content": "READ!!! AWS Secrets Manager is a secrets management service that helps you protect access to your applications, services, and IT resources. This service enables you to rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle. <br>https://aws.amazon.com/cn/blogs/security/how-to-connect-to-aws-secrets-manager-service-within-a-virtual-private-cloud/yhttps://aws.amazon.com/secrets-manager/?nc1=h_ls",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 698037,
          "date": "Tue 18 Oct 2022 10:23",
          "username": "iCcma",
          "content": "ty bro, I was confused about that and you just mentioned the \\\"key\\\" phrase, B doesn't support autorotation",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 733923,
          "date": "Fri 02 Dec 2022 17:52",
          "username": "shyam_yadav",
          "content": "Ans is A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 732363,
          "date": "Thu 01 Dec 2022 08:29",
          "username": "DannisExamTopic",
          "content": "secrets manager is newer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 723475,
          "date": "Mon 21 Nov 2022 13:38",
          "username": "Wpcorgan",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 721800,
          "date": "Sat 19 Nov 2022 07:21",
          "username": "ABCMail",
          "content": "AWS secrets manager is most logical",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 718543,
          "date": "Tue 15 Nov 2022 07:36",
          "username": "Kartikey140",
          "content": "A option is correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 716355,
          "date": "Sat 12 Nov 2022 00:40",
          "username": "al20220711",
          "content": "The advantage of Systems Manager over Secrets Manager is costing. But it doesn't mention in the question.SO A is better.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 706797,
          "date": "Sat 29 Oct 2022 01:10",
          "username": "17Master",
          "content": "READ!!! AWS Secrets Manager is a secrets management service that helps you protect access to your applications, services, and IT resources. This service enables you to rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle.<br>https://aws.amazon.com/cn/blogs/security/how-to-connect-to-aws-secrets-manager-service-within-a-virtual-private-cloud/ y https://aws.amazon.com/secrets-manager/?nc1=h_ls",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 697278,
          "date": "Mon 17 Oct 2022 12:08",
          "username": "patni11",
          "content": "dharma",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 693820,
          "date": "Thu 13 Oct 2022 13:15",
          "username": "KVK16",
          "content": "AWS Secrets Manager, a service that makes it easier to rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle. You can configure Secrets Manager to rotate secrets automatically, which can help you meet your security and compliance needs. Secrets Manager offers built-in integrations for MySQL, PostgreSQL, and Amazon Aurora on Amazon RDS, and can rotate credentials for these databases natively. You can control access to your secrets by using fine-grained AWS Identity and Access Management (IAM) policies. To retrieve secrets, employees replace plaintext secrets with a call to Secrets Manager APIs, eliminating the need to hard-code secrets in source code or update configuration files and redeploy code when secrets are rotated.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 692588,
          "date": "Wed 12 Oct 2022 05:02",
          "username": "BoboChow",
          "content": "AWS Secrets Manager is newer toSSM Parameter Store,and I'm not sure the later one can turn on automatic rotation",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 692557,
          "date": "Wed 12 Oct 2022 03:50",
          "username": "josh_fan",
          "content": "https://aws.amazon.com/cn/blogs/security/how-to-connect-to-aws-secrets-manager-service-within-a-virtual-private-cloud/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 691233,
          "date": "Mon 10 Oct 2022 16:09",
          "username": "ogerber",
          "content": "no rotation option on parameter store. <br>never store credentials on buckets, its a hazard. <br>its A!!",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 691161,
          "date": "Mon 10 Oct 2022 15:03",
          "username": "D2w",
          "content": "A, is meant for storing secrets e.g password ect",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 690304,
          "date": "Sun 09 Oct 2022 17:27",
          "username": "tuloveu",
          "content": "A is correct.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 689335,
          "date": "Sat 08 Oct 2022 15:14",
          "username": "rein_chau",
          "content": "A is correct.<br>https://aws.amazon.com/blogs/security/rotate-amazon-rds-database-credentials-automatically-with-aws-secrets-manager/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#12",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A global company hosts its web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The web application has static data and dynamic data. The company stores its static data in an Amazon S3 bucket. The company wants to improve performance and reduce latency for the static data and dynamic data. The company is using its own domain name registered with Amazon Route 53.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#12",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon CloudFront distribution that has the S3 bucket and the ALB as origins. Configure Route 53 to route traffic to the CloudFront distribution.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon CloudFront distribution that has the ALB as an origin. Create an AWS Global Accelerator standard accelerator that has the S3 bucket as an endpoint Configure Route 53 to route traffic to the CloudFront distribution.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon CloudFront distribution that has the S3 bucket as an origin. Create an AWS Global Accelerator standard accelerator that has the ALB and the CloudFront distribution as endpoints. Create a custom domain name that points to the accelerator DNS name. Use the custom domain name as an endpoint for the web application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon CloudFront distribution that has the ALB as an origin. Create an AWS Global Accelerator standard accelerator that has the S3 bucket as an endpoint. Create two domain names. Point one domain name to the CloudFront DNS name for dynamic content. Point the other domain name to the accelerator DNS name for static content. Use the domain names as endpoints for the web application.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 718554,
          "date": "Tue 15 Nov 2022 08:11",
          "username": "Kartikey140",
          "content": "Answer is A<br>Explanation - AWS Global Accelerator vs CloudFront<br>• They both use the AWS global network and its edge locations around the world<br>• Both services integrate with AWS Shield for DDoS protection.<br>• CloudFront <br>• Improves performance for both cacheable content (such as images and videos) <br>• Dynamic content (such as API acceleration and dynamic site delivery)<br>• Content is served at the edge<br>• Global Accelerator <br>• Improves performance for a wide range of applications over TCP or UDP <br>• Proxying packets at the edge to applications running in one or more AWS Regions.<br>• Good fit for non-HTTP use cases, such as gaming (UDP), IoT (MQTT), or Voice over IP<br>• Good for HTTP use cases that require static IP addresses <br>• Good for HTTP use cases that required deterministic, fast regional failover",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 728509,
          "date": "Sun 27 Nov 2022 19:28",
          "username": "hakant",
          "content": "Answer A <br>CF can have multiple origins just like ALB.  Need to set the routes manually using Berhavior tab in the console<br>https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-distribution-serve-content/#:~:text=%20Yes%2C%20you%20can%20configure%20a%20single%20CloudFront,serve%20different%20types%20of%20requests%20from%20multiple%20origins.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 727351,
          "date": "Sat 26 Nov 2022 08:12",
          "username": "ogwu2000JayBee65JayBee65",
          "content": "C.  Not A. Why should CloudFront distribution have two origins - S3 bucket and the ALB ?CloudFront improves performance for both cacheable content (such as images and videos), whereas AWS Global Accelerator does not.CloudFront improves performance for both cacheable content (such as images and videos), and Dynamic content, whereas AWS Global Accelerator does not support Dynamic content.",
          "upvote_count": "111",
          "selected_answers": ""
        },
        {
          "id": 730170,
          "date": "Tue 29 Nov 2022 10:39",
          "username": "JayBee65JayBee65",
          "content": "CloudFront improves performance for both cacheable content (such as images and videos), whereas AWS Global Accelerator does not.CloudFront improves performance for both cacheable content (such as images and videos), and Dynamic content, whereas AWS Global Accelerator does not support Dynamic content.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 730171,
          "date": "Tue 29 Nov 2022 10:40",
          "username": "JayBee65",
          "content": "CloudFront improves performance for both cacheable content (such as images and videos), and Dynamic content, whereas AWS Global Accelerator does not support Dynamic content.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 723476,
          "date": "Mon 21 Nov 2022 13:39",
          "username": "Wpcorgan",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 719251,
          "date": "Wed 16 Nov 2022 02:14",
          "username": "mikey2000",
          "content": "cf support s3, alb or lambda function url as origin",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 717912,
          "date": "Mon 14 Nov 2022 12:16",
          "username": "kanweng",
          "content": "Q: How is AWS Global Accelerator different from Amazon CloudFront?<br><br>A: AWS Global Accelerator and Amazon CloudFront are separate services that use the AWS global network and its edge locations around the world. CloudFront improves performance for both cacheable content (such as images and videos) and dynamic content (such as API acceleration and dynamic site delivery). Global Accelerator improves performance for a wide range of applications over TCP or UDP by proxying packets at the edge to applications running in one or more AWS Regions. Global Accelerator is a good fit for non-HTTP use cases, such as gaming (UDP), IoT (MQTT), or Voice over IP, as well as for HTTP use cases that specifically require static IP addresses or deterministic, fast regional failover. Both services integrate with AWS Shield for DDoS protection.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 717479,
          "date": "Sun 13 Nov 2022 20:36",
          "username": "yd_h",
          "content": "A<br>Endpoints for standard accelerators in AWS Global Accelerator can be Network Load Balancers, Application Load Balancers, Amazon EC2 instances, or Elastic IP addresses.<br>https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 716424,
          "date": "Sat 12 Nov 2022 02:21",
          "username": "goatbernard",
          "content": "answer is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 716317,
          "date": "Fri 11 Nov 2022 21:59",
          "username": "yuantongxue",
          "content": "When you set up your accelerator with Global Accelerator, you associate the static IP addresses to regional endpoints in one or more AWS Regions. For standard accelerators, the endpoints are Network Load Balancers, Application Load Balancers, Amazon EC2 instances, or Elastic IP addresses. For custom routing accelerators, endpoints are virtual private cloud (VPC) subnets with one or more EC2 instances.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 706854,
          "date": "Sat 29 Oct 2022 02:58",
          "username": "17Master",
          "content": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html#concept_elb_origin",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 703113,
          "date": "Mon 24 Oct 2022 16:27",
          "username": "Six_Fingered_Jose",
          "content": "This is a tough question, initially thought answer was C but after some research found A to be the most viable answer here.<br><br>CloudFront can be used to reduce latency for dynamic content (the ALB in this case) by using edge locations to connect via AWS network instead of the internet, thus reducing latency.<br>So it might not necessary cache the content but it still reduces latency and improve performance with the lowest amount of work.<br><br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html#concept_elb_origin",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 700472,
          "date": "Fri 21 Oct 2022 04:17",
          "username": "kogs",
          "content": "A makes more sense and its possible.<br>https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-distribution-serve-content/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 693956,
          "date": "Thu 13 Oct 2022 16:02",
          "username": "KVK16",
          "content": "Static content can be cached at Cloud front Edge locations from S3 and dynamic content <br> EC2 behind the ALB whose performance can be improved by Global Accelerator whose one endpoint is ALB and other Cloud front. So with regards to custom domain name endpoint is web application is R53 alias records for the custom domain point to web application<br>https://aws.amazon.com/blogs/networking-and-content-delivery/improving-availability-and-performance-for-application-load-balancers-using-one-click-integration-with-aws-global-accelerator/<br><br>S3 cannot be endpoint for Global Accelerator - (interesting to think how S3 Global transfer acceleration functions)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 692592,
          "date": "Wed 12 Oct 2022 05:11",
          "username": "BoboChowBoboChow",
          "content": "B,D is out because I don't think S3 can be an endpoint to AWS Accelerator.<br>As for C, I'm wondring if it works that dynamic and static resource use different domain name.<br>So I am going with ANeither CloudFront nor S3 can be as endpoint forAWS Accelerator, so B is out, too.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 692595,
          "date": "Wed 12 Oct 2022 05:14",
          "username": "BoboChow",
          "content": "Neither CloudFront nor S3 can be as endpoint forAWS Accelerator, so B is out, too.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 691972,
          "date": "Tue 11 Oct 2022 11:55",
          "username": "sba21",
          "content": "https://www.examtopics.com/discussions/amazon/view/22044-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 691395,
          "date": "Mon 10 Oct 2022 19:59",
          "username": "EkieArielSchivo17Master17Master",
          "content": "can't have CloudFront nor S3 as endpoints for AWS Accelerator... that eliminate B,C,D. . <br>also CloudFront can improve performance and latency for both static and dynamic contents.. so I am going with AOption A includes an S3 bucket, how can that work with dynamic content? I'm confused here.For more information about using an Application Load Balancer as your origin for CloudFront, https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html#concept_elb_originCloudFront --> BackEnd(S3+ALB) its possible.",
          "upvote_count": "3111",
          "selected_answers": ""
        },
        {
          "id": 697338,
          "date": "Mon 17 Oct 2022 13:02",
          "username": "ArielSchivo17Master17Master",
          "content": "Option A includes an S3 bucket, how can that work with dynamic content? I'm confused here.For more information about using an Application Load Balancer as your origin for CloudFront, https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html#concept_elb_originCloudFront --> BackEnd(S3+ALB) its possible.",
          "upvote_count": "111",
          "selected_answers": ""
        },
        {
          "id": 706853,
          "date": "Sat 29 Oct 2022 02:57",
          "username": "17Master",
          "content": "For more information about using an Application Load Balancer as your origin for CloudFront, https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html#concept_elb_origin",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 706851,
          "date": "Sat 29 Oct 2022 02:56",
          "username": "17Master",
          "content": "CloudFront --> BackEnd(S3+ALB) its possible.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 691236,
          "date": "Mon 10 Oct 2022 16:13",
          "username": "ogerberrodriiviruEkie",
          "content": "can an ALB be an origin to CF? dont think so, only data sources.https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html#concept_elb_originyes you can",
          "upvote_count": "111",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 691507,
          "date": "Mon 10 Oct 2022 22:56",
          "username": "rodriiviru",
          "content": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html#concept_elb_origin",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 691396,
          "date": "Mon 10 Oct 2022 19:59",
          "username": "Ekie",
          "content": "yes you can",
          "upvote_count": "1",
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
      "question_text": "<p>A company performs monthly maintenance on its AWS infrastructure. During these maintenance activities, the company needs to rotate the credentials for its Amazon RDS for MySQL databases across multiple AWS Regions.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#13",
          "answers": [
            {
              "choice": "<p>A. Store the credentials as secrets in AWS Secrets Manager. Use multi-Region secret replication for the required Regions. Configure Secrets Manager to rotate the secrets on a schedule.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Store the credentials as secrets in AWS Systems Manager by creating a secure string parameter. Use multi-Region secret replication for the required Regions. Configure Systems Manager to rotate the secrets on a schedule.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Store the credentials in an Amazon S3 bucket that has server-side encryption (SSE) enabled. Use Amazon EventBridge (Amazon CloudWatch Events) to invoke an AWS Lambda function to rotate the credentials.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Encrypt the credentials as secrets by using AWS Key Management Service (AWS KMS) multi-Region customer managed keys. Store the secrets in an Amazon DynamoDB global table. Use an AWS Lambda function to retrieve the secrets from DynamoDB.  Use the RDS API to rotate the secrets.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 689350,
          "date": "Sat 08 Oct 2022 15:28",
          "username": "rein_chau",
          "content": "A is correct.<br>https://aws.amazon.com/blogs/security/how-to-replicate-secrets-aws-secrets-manager-multiple-regions/",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 734232,
          "date": "Sat 03 Dec 2022 06:55",
          "username": "kewl",
          "content": "rotate credentials is the keyword and systems manager doesn't support rotation. check link <br>https://tutorialsdojo.com/aws-secrets-manager-vs-systems-manager-parameter-store/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 723477,
          "date": "Mon 21 Nov 2022 13:40",
          "username": "Wpcorgan",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 723155,
          "date": "Mon 21 Nov 2022 04:50",
          "username": "Megako",
          "content": "Me Pick A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 722378,
          "date": "Sun 20 Nov 2022 05:17",
          "username": "ABCMail",
          "content": "AWS secrets manager",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 707144,
          "date": "Sat 29 Oct 2022 13:16",
          "username": "17Master",
          "content": "Ans is A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 697648,
          "date": "Mon 17 Oct 2022 21:12",
          "username": "GameDad09",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 693964,
          "date": "Thu 13 Oct 2022 16:17",
          "username": "KVK16",
          "content": "AWS Secrets Manager is meant for storing secrets like credentials to RDS database etc. <br>Capability to force rotation of secrets every X days. Multi Region Secret Keys <br>https://youtu.be/GPab-mc-8nU",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 692604,
          "date": "Wed 12 Oct 2022 05:32",
          "username": "BoboChow",
          "content": "AWS Secrets Manageris Newer service, meant for storing secrets<br>Capability to force rotation of scerets every X days<br>Intergraion with Amazon RDS<br>Secrets are encypted using KMS",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 691171,
          "date": "Mon 10 Oct 2022 15:18",
          "username": "D2w",
          "content": "AWS Secrets Manager meant for storing secrets, Capability to force rotation of secrets every X days, Automate generation of secrets on rotation (uses Lambda), Integration with Amazon RDS (MySQL, PostgreSQL, Aurora).",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#14",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an ecommerce application on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Amazon EC2 Auto Scaling group across multiple Availability Zones. The Auto Scaling group scales based on CPU utilization metrics. The ecommerce application stores the transaction data in a MySQL 8.0 database that is hosted on a large EC2 instance.<br>The database's performance degrades quickly as application load increases. The application handles more read requests than write transactions. The company wants a solution that will automatically scale the database to meet the demand of unpredictable read workloads while maintaining high availability.<br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Use Amazon Redshift with a single node for leader and compute functionality.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon RDS with a Single-AZ deployment Configure Amazon RDS to add reader instances in a different Availability Zone.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon Aurora with a Multi-AZ deployment. Configure Aurora Auto Scaling with Aurora Replicas.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon ElastiCache for Memcached with EC2 Spot Instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 691182,
          "date": "Mon 10 Oct 2022 15:28",
          "username": "D2w",
          "content": "C, AURORA is 5x performance improvement over MySQL on RDS and handles more read requests than write,; maintaining high availability =Multi-AZ deployment",
          "upvote_count": "13",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 723480,
          "date": "Mon 21 Nov 2022 13:41",
          "username": "Wpcorgan",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 722423,
          "date": "Sun 20 Nov 2022 07:08",
          "username": "ABCMail",
          "content": "Aurora offers multi AZ for HA",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 707147,
          "date": "Sat 29 Oct 2022 13:19",
          "username": "17Master",
          "content": "Ans is Aurora",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 707026,
          "date": "Sat 29 Oct 2022 08:30",
          "username": "keezbadger",
          "content": "C is the answer. Aurora is fast, and for this case will support unpredictable workloads through its read replicas. Simple!",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 705066,
          "date": "Thu 27 Oct 2022 01:34",
          "username": "ukwafabian",
          "content": "\\\"Read workloads\\\" \\\"Maintaining high availability\\\" = Read replica's",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 697652,
          "date": "Mon 17 Oct 2022 21:26",
          "username": "GameDad09",
          "content": "C is correct.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 693972,
          "date": "Thu 13 Oct 2022 16:21",
          "username": "KVK16",
          "content": "1. Migration from My SQL, Postgres SQL to Aurora is 5x and 3x times improves performance . Also provision for Read replicas",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 693741,
          "date": "Thu 13 Oct 2022 10:22",
          "username": "Sinaneos",
          "content": "High availability + SQL -> C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 692605,
          "date": "Wed 12 Oct 2022 05:35",
          "username": "BoboChow",
          "content": "C is better than B about availibility",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#15",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently migrated to AWS and wants to implement a solution to protect the traffic that flows in and out of the production VPC.  The company had an inspection server in its on-premises data center. The inspection server performed specific operations such as traffic flow inspection and traffic filtering. The company wants to have the same functionalities in the AWS Cloud.<br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#15",
          "answers": [
            {
              "choice": "<p>A. Use Amazon GuardDuty for traffic inspection and traffic filtering in the production VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Traffic Mirroring to mirror traffic from the production VPC for traffic inspection and filtering.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Network Firewall to create the required rules for traffic inspection and traffic filtering for the production VPC. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Firewall Manager to create the required rules for traffic inspection and traffic filtering for the production VPC. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 692608,
          "date": "Wed 12 Oct 2022 05:41",
          "username": "BoboChowBoboChow",
          "content": "I agree with C. <br>**AWS Network Firewall** is a stateful, managed network firewall and intrusion detection and prevention service for your virtual private cloud (VPC) that you created in Amazon Virtual Private Cloud (Amazon VPC). With Network Firewall, you can filter traffic at the perimeter of your VPC.  This includes filtering traffic going to and coming from an internet gateway, NAT gateway, or over VPN or AWS Direct Connect.And I'm not sure Traffic Mirroring can be for filtering",
          "upvote_count": "83",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 692610,
          "date": "Wed 12 Oct 2022 05:47",
          "username": "BoboChow",
          "content": "And I'm not sure Traffic Mirroring can be for filtering",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 689374,
          "date": "Sat 08 Oct 2022 15:54",
          "username": "rein_chau",
          "content": "C is correct. AWS Network Firewall supports both inspection and filtering as required.<br>B is incorrect because Traffic Mirroring only for inspection.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 727287,
          "date": "Sat 26 Nov 2022 06:51",
          "username": "wisoxe8356",
          "content": "Not A - Amazon GuardDuty is a threat detection service that continuously monitors your AWS accounts and workloads for malicious activity and delivers detailed security findings for visibility and remediation. like someone strange continuely download data from your s3<br><br>Not B - As it is moniroring not filtering<br><br>C - good to do both<br><br>D - configure and manage firewall rules, not monitoring",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 723481,
          "date": "Mon 21 Nov 2022 13:42",
          "username": "Wpcorgan",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 717509,
          "date": "Sun 13 Nov 2022 21:24",
          "username": "sandra42",
          "content": "Network Firewall",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 707156,
          "date": "Sat 29 Oct 2022 13:35",
          "username": "17MasterArielSchivo17Master",
          "content": "Ans is C (AWS Firewall Manager).<br>https://aws.amazon.com/network-firewall/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc.<br>Traffic Mirroring = \\\"copy\\\". https://docs.aws.amazon.com/es_es/vpc/latest/mirroring/traffic-mirroring-how-it-works.htmlAnswer is Network Firewall, not Firewall Manager.ups, its Network Firewall",
          "upvote_count": "331",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 709047,
          "date": "Tue 01 Nov 2022 11:41",
          "username": "ArielSchivo17Master",
          "content": "Answer is Network Firewall, not Firewall Manager.ups, its Network Firewall",
          "upvote_count": "31",
          "selected_answers": ""
        },
        {
          "id": 719089,
          "date": "Tue 15 Nov 2022 21:06",
          "username": "17Master",
          "content": "ups, its Network Firewall",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 697653,
          "date": "Mon 17 Oct 2022 21:30",
          "username": "GameDad09",
          "content": "C is correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 691195,
          "date": "Mon 10 Oct 2022 15:34",
          "username": "D2w",
          "content": "C, protections for all of your Amazon VPCs",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#16",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a data lake on AWS. The data lake consists of data in Amazon S3 and Amazon RDS for PostgreSQL. The company needs a reporting solution that provides data visualization and includes all the data sources within the data lake. Only the company's management team should have full access to all the visualizations. The rest of the company should have only limited access.<br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#16",
          "answers": [
            {
              "choice": "<p>A. Create an analysis in Amazon QuickSight. Connect all the data sources and create new datasets. Publish dashboards to visualize the data. Share the dashboards with the appropriate IAM roles.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an analysis in Amazon QuickSight. Connect all the data sources and create new datasets. Publish dashboards to visualize the data. Share the dashboards with the appropriate users and groups.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Glue table and crawler for the data in Amazon S3. Create an AWS Glue extract, transform, and load (ETL) job to produce reports. Publish the reports to Amazon S3. Use S3 bucket policies to limit access to the reports.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Glue table and crawler for the data in Amazon S3. Use Amazon Athena Federated Query to access data within Amazon RDS for PostgreSQL. Generate reports by using Amazon Athena. Publish the reports to Amazon S3. Use S3 bucket policies to limit access to the reports.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 691510,
          "date": "Mon 10 Oct 2022 23:07",
          "username": "rodriivirumattlaiBoboChow",
          "content": "https://docs.aws.amazon.com/quicksight/latest/user/sharing-a-dashboard.htmlhttps://docs.aws.amazon.com/quicksight/latest/user/share-a-dashboard-grant-access-users.html<br>^ more percise linkAgree with you",
          "upvote_count": "2451",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 692635,
          "date": "Wed 12 Oct 2022 06:44",
          "username": "mattlai",
          "content": "https://docs.aws.amazon.com/quicksight/latest/user/share-a-dashboard-grant-access-users.html<br>^ more percise link",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 692617,
          "date": "Wed 12 Oct 2022 06:02",
          "username": "BoboChow",
          "content": "Agree with you",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 691207,
          "date": "Mon 10 Oct 2022 15:42",
          "username": "D2w17MasterJayyRock17Master",
          "content": "A, The rest of the company should have only limited access you have to create IAM roleAnswer is B.  Permissions are handled directly.<br>https://docs.aws.amazon.com/quicksight/latest/user/share-a-dashboard-grant-access-users.html“Permissions are handled directly” is a broad response that doesn’t say anything or make a point. So you’re saying quicksight will automatically know which person is on the management team and which person isn’t. No it won’t without instructions! So you need to set up IAM groups and limit their access that way. IAM (identity and “ACCESS” management) That’s the other part of the question that needs to be addressed.ajá...read...https://docs.aws.amazon.com/quicksight/latest/user/share-a-dashboard-grant-access-users.html - <br>In the Share dashboard page that opens, do the following:<br>For Invite users and groups to dashboard at left, enter a user email or group name in the search box.<br>Any users or groups that match your query appear in a list below the search box. Only active users and groups appear in the list.<br>For the user or group that you want to grant access to the dashboard, choose Add. Then choose the level of permissions that you want them to have. ********\\\"it says NO here go to the IAM and assign the permissions.\\\" So you don't manage by IAM. Ok, correct answer is B",
          "upvote_count": "6114",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 707173,
          "date": "Sat 29 Oct 2022 14:00",
          "username": "17MasterJayyRock17Master",
          "content": "Answer is B.  Permissions are handled directly.<br>https://docs.aws.amazon.com/quicksight/latest/user/share-a-dashboard-grant-access-users.html“Permissions are handled directly” is a broad response that doesn’t say anything or make a point. So you’re saying quicksight will automatically know which person is on the management team and which person isn’t. No it won’t without instructions! So you need to set up IAM groups and limit their access that way. IAM (identity and “ACCESS” management) That’s the other part of the question that needs to be addressed.ajá...read...https://docs.aws.amazon.com/quicksight/latest/user/share-a-dashboard-grant-access-users.html - <br>In the Share dashboard page that opens, do the following:<br>For Invite users and groups to dashboard at left, enter a user email or group name in the search box.<br>Any users or groups that match your query appear in a list below the search box. Only active users and groups appear in the list.<br>For the user or group that you want to grant access to the dashboard, choose Add. Then choose the level of permissions that you want them to have. ********\\\"it says NO here go to the IAM and assign the permissions.\\\" So you don't manage by IAM. Ok, correct answer is B",
          "upvote_count": "114",
          "selected_answers": ""
        },
        {
          "id": 712801,
          "date": "Mon 07 Nov 2022 05:08",
          "username": "JayyRock17Master",
          "content": "“Permissions are handled directly” is a broad response that doesn’t say anything or make a point. So you’re saying quicksight will automatically know which person is on the management team and which person isn’t. No it won’t without instructions! So you need to set up IAM groups and limit their access that way. IAM (identity and “ACCESS” management) That’s the other part of the question that needs to be addressed.ajá...read...https://docs.aws.amazon.com/quicksight/latest/user/share-a-dashboard-grant-access-users.html - <br>In the Share dashboard page that opens, do the following:<br>For Invite users and groups to dashboard at left, enter a user email or group name in the search box.<br>Any users or groups that match your query appear in a list below the search box. Only active users and groups appear in the list.<br>For the user or group that you want to grant access to the dashboard, choose Add. Then choose the level of permissions that you want them to have. ********\\\"it says NO here go to the IAM and assign the permissions.\\\" So you don't manage by IAM. Ok, correct answer is B",
          "upvote_count": "14",
          "selected_answers": ""
        },
        {
          "id": 719098,
          "date": "Tue 15 Nov 2022 21:23",
          "username": "17Master",
          "content": "ajá...read...https://docs.aws.amazon.com/quicksight/latest/user/share-a-dashboard-grant-access-users.html - <br>In the Share dashboard page that opens, do the following:<br>For Invite users and groups to dashboard at left, enter a user email or group name in the search box.<br>Any users or groups that match your query appear in a list below the search box. Only active users and groups appear in the list.<br>For the user or group that you want to grant access to the dashboard, choose Add. Then choose the level of permissions that you want them to have. ********\\\"it says NO here go to the IAM and assign the permissions.\\\" So you don't manage by IAM. Ok, correct answer is B",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 731183,
          "date": "Wed 30 Nov 2022 08:09",
          "username": "miki111",
          "content": "BBBBBBBBBB",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 724623,
          "date": "Tue 22 Nov 2022 20:52",
          "username": "ashish_t",
          "content": "https://docs.aws.amazon.com/quicksight/latest/user/sharing-a-dashboard.html<br>Option B is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 723483,
          "date": "Mon 21 Nov 2022 13:43",
          "username": "Wpcorgan",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 716841,
          "date": "Sat 12 Nov 2022 18:41",
          "username": "grzeev",
          "content": "https://stackshare.io/stackups/amazon-athena-vs-amazon-quicksight",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 715746,
          "date": "Fri 11 Nov 2022 04:50",
          "username": "jidexray",
          "content": "Please i am still preparing for my exams ..Please is the correct answer the exact answer provided or go with the majority.. its confusing sometimes because the answers are similar attimes",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 713488,
          "date": "Tue 08 Nov 2022 06:08",
          "username": "PS_R",
          "content": "IAM role refers to direction communication between AWS services and IAM User and Gropus for human, so i believe the answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 709013,
          "date": "Tue 01 Nov 2022 10:41",
          "username": "Parveen_88mma7999",
          "content": "Question: In the exam, what would be considered as correct answer? The one which community voted for or what is considered as \\\"Correct answer here?most voted",
          "upvote_count": "14",
          "selected_answers": ""
        },
        {
          "id": 711353,
          "date": "Fri 04 Nov 2022 21:36",
          "username": "mma7999",
          "content": "most voted",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 707172,
          "date": "Sat 29 Oct 2022 13:58",
          "username": "17Master",
          "content": "Granting individual Amazon QuickSight users and groups access to a dashboard in Amazon QuickSight-https://docs.aws.amazon.com/quicksight/latest/user/share-a-dashboard-grant-access-users.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 707033,
          "date": "Sat 29 Oct 2022 08:53",
          "username": "keezbadger",
          "content": "B is the right answer.<br><br>Elimination process:<br>QuickSight gives decision-makers the opportunity to explore and interpret information in an interactive visual environment.QuickSight uses ML to generate accurate responses to natural language questions about data. Get started with data visualization on AWS<br><br>AWS Glue is a serverless data integration service that makes data preparation simpler, faster, and cheaper. <br><br>So AWS glue and crawler is out leaving the two option A and B, <br><br>B is the right answer because you after you publish a dashboard, you can share it with other users or groups in your QuickSight account.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 703130,
          "date": "Mon 24 Oct 2022 16:42",
          "username": "Six_Fingered_Jose",
          "content": "agree with B<br>https://docs.aws.amazon.com/quicksight/latest/user/share-a-dashboard-grant-access-users.html<br>looked around the document and doesnt state anywhere that you can share access using IAM roles",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 696193,
          "date": "Sun 16 Oct 2022 12:57",
          "username": "Wazhija",
          "content": "You can create users and groups and share the dashboards/analysis you create in Athena",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 691995,
          "date": "Tue 11 Oct 2022 12:23",
          "username": "sba2117MasterSix_Fingered_Jose",
          "content": "Answer: DGranting individual Amazon QuickSight users and groups access to a dashboard in Amazon QuickSight - <br>https://docs.aws.amazon.com/es_es/quicksight/latest/user/share-a-dashboard-grant-access-users.htmlathena in itself does not provide visualization, which the question is looking for here",
          "upvote_count": "212",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 707170,
          "date": "Sat 29 Oct 2022 13:56",
          "username": "17Master",
          "content": "Granting individual Amazon QuickSight users and groups access to a dashboard in Amazon QuickSight - <br>https://docs.aws.amazon.com/es_es/quicksight/latest/user/share-a-dashboard-grant-access-users.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 703133,
          "date": "Mon 24 Oct 2022 16:44",
          "username": "Six_Fingered_Jose",
          "content": "athena in itself does not provide visualization, which the question is looking for here",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 689387,
          "date": "Sat 08 Oct 2022 16:02",
          "username": "rein_chau",
          "content": "A is correct.<br>D is incorrect. Although Amazon Athena Federated Query can read from relational database, option D doesn't provide a way to visualize the data as required.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#17",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is implementing a new business application. The application runs on two Amazon EC2 instances and uses an Amazon S3 bucket for document storage. A solutions architect needs to ensure that the EC2 instances can access the S3 bucket.<br>What should the solutions architect do to meet this requirement?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#17",
          "answers": [
            {
              "choice": "<p>A. Create an IAM role that grants access to the S3 bucket. Attach the role to the EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an IAM policy that grants access to the S3 bucket. Attach the policy to the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an IAM group that grants access to the S3 bucket. Attach the group to the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM user that grants access to the S3 bucket. Attach the user account to the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 692001,
          "date": "Tue 11 Oct 2022 12:29",
          "username": "sba21",
          "content": "Always remember that you should associate IAM roles to EC2 instances",
          "upvote_count": "19",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 735070,
          "date": "Sun 04 Dec 2022 13:22",
          "username": "9014",
          "content": "AAAAAAAAAAAA",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 731185,
          "date": "Wed 30 Nov 2022 08:10",
          "username": "miki111",
          "content": "AAAAAAAAAA",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 727903,
          "date": "Sun 27 Nov 2022 04:01",
          "username": "DerekMinstP",
          "content": "A for sure",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 726156,
          "date": "Thu 24 Nov 2022 21:07",
          "username": "sherbo",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 724625,
          "date": "Tue 22 Nov 2022 20:54",
          "username": "ashish_t",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 723485,
          "date": "Mon 21 Nov 2022 13:44",
          "username": "Wpcorgan",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 723163,
          "date": "Mon 21 Nov 2022 05:46",
          "username": "ABCMail",
          "content": "IAM role is a better solution",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 716498,
          "date": "Sat 12 Nov 2022 07:50",
          "username": "libz",
          "content": "IAM roles",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 703140,
          "date": "Mon 24 Oct 2022 16:49",
          "username": "Six_Fingered_Jose",
          "content": "agree with A",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 695442,
          "date": "Sat 15 Oct 2022 15:53",
          "username": "Jahangeer_17",
          "content": "Create one IAM role, give S3 access to it. Attach to EC2",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 694849,
          "date": "Fri 14 Oct 2022 16:30",
          "username": "Chunsli",
          "content": "Policy is conceptual, role or account is more physical.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 693743,
          "date": "Thu 13 Oct 2022 10:24",
          "username": "Sinaneos",
          "content": "IAM roles are the best and easiest way for this",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 691689,
          "date": "Tue 11 Oct 2022 05:41",
          "username": "mattlaimattlai",
          "content": "isnt the correct answer create role and attach policy?nah create role and attach role",
          "upvote_count": "24",
          "selected_answers": ""
        },
        {
          "id": 691690,
          "date": "Tue 11 Oct 2022 05:41",
          "username": "mattlai",
          "content": "nah create role and attach role",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 691645,
          "date": "Tue 11 Oct 2022 03:45",
          "username": "galbimandugalbimandu",
          "content": "Create an AWS Identity and Access Management (IAM) profile role that grants access to Amazon S3. Attach the IAM instance profile to the instance.IAM role, Bucket policy.",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 691647,
          "date": "Tue 11 Oct 2022 03:47",
          "username": "galbimandu",
          "content": "IAM role, Bucket policy.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 691409,
          "date": "Mon 10 Oct 2022 20:21",
          "username": "Ekie",
          "content": "A. . https://aws.amazon.com/premiumsupport/knowledge-center/ec2-instance-access-s3-bucket/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 691247,
          "date": "Mon 10 Oct 2022 16:29",
          "username": "ogerberArielSchivo",
          "content": "B is correct. you attach a policy to an instance not a role.How's so? You can go to the instance, then \\\"attach/replace IAM role\\\".",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 697365,
          "date": "Mon 17 Oct 2022 13:35",
          "username": "ArielSchivo",
          "content": "How's so? You can go to the instance, then \\\"attach/replace IAM role\\\".",
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
      "question_text": "<p>An application development team is designing a microservice that will convert large images to smaller, compressed images. When a user uploads an image through the web interface, the microservice should store the image in an Amazon S3 bucket, process and compress the image with an AWS Lambda function, and store the image in its compressed form in a different S3 bucket.<br>A solutions architect needs to design a solution that uses durable, stateless components to process the images automatically.<br>Which combination of actions will meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#18",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon Simple Queue Service (Amazon SQS) queue. Configure the S3 bucket to send a notification to the SQS queue when an image is uploaded to the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the Lambda function to use the Amazon Simple Queue Service (Amazon SQS) queue as the invocation source. When the SQS message is successfully processed, delete the message in the queue.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the Lambda function to monitor the S3 bucket for new uploads. When an uploaded image is detected, write the file name to a text file in memory and use the text file to keep track of the images that were processed.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Launch an Amazon EC2 instance to monitor an Amazon Simple Queue Service (Amazon SQS) queue. When items are added to the queue, log the file name in a text file on the EC2 instance and invoke the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Configure an Amazon EventBridge (Amazon CloudWatch Events) event to monitor the S3 bucket. When an image is uploaded, send an alert to an Amazon ample Notification Service (Amazon SNS) topic with the application owner's email address for further processing.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 692072,
          "date": "Tue 11 Oct 2022 14:10",
          "username": "sba21",
          "content": "It looks like A-B",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 731187,
          "date": "Wed 30 Nov 2022 08:12",
          "username": "miki111",
          "content": "AAAAAAAAAABBBBBBBBBB",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 726158,
          "date": "Thu 24 Nov 2022 21:10",
          "username": "sherbo",
          "content": "A and B are most correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 723488,
          "date": "Mon 21 Nov 2022 13:45",
          "username": "Wpcorgan",
          "content": "A and B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 717596,
          "date": "Mon 14 Nov 2022 01:58",
          "username": "crystally77TuLe",
          "content": "How about \\\"E\\\". Amazon EventBridge can monitor S3 bucket and send an alert to an SNS.it required the owner's app process image which is not realistic in usage. It's like automation all process and manual the last steps using human effort.",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 727388,
          "date": "Sat 26 Nov 2022 09:18",
          "username": "TuLe",
          "content": "it required the owner's app process image which is not realistic in usage. It's like automation all process and manual the last steps using human effort.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 709943,
          "date": "Wed 02 Nov 2022 18:09",
          "username": "iis",
          "content": "AB is OK. It can be done more straightforwardly. Just connect the S3 event to Lambda, and it is done. I don't think we need SQS or anything.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 697659,
          "date": "Mon 17 Oct 2022 21:48",
          "username": "GameDad09",
          "content": "A+B seems to be correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 691252,
          "date": "Mon 10 Oct 2022 16:35",
          "username": "ogerber",
          "content": "oops i ment A + B also",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 691251,
          "date": "Mon 10 Oct 2022 16:34",
          "username": "ogerber123jhl0ocbn3wbyGameDad09",
          "content": "why not?If you go for A-C. .. what's the purpose of SQS in A?Storing in-memory doesn't seem reliable for a possible huge workload. While SQS can handle bigger workloads.Lambda to monitor S3 put event is incorrect.",
          "upvote_count": "1512",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 696236,
          "date": "Sun 16 Oct 2022 14:37",
          "username": "123jhl0",
          "content": "If you go for A-C. .. what's the purpose of SQS in A?",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 720577,
          "date": "Thu 17 Nov 2022 16:17",
          "username": "ocbn3wby",
          "content": "Storing in-memory doesn't seem reliable for a possible huge workload. While SQS can handle bigger workloads.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 697661,
          "date": "Mon 17 Oct 2022 21:50",
          "username": "GameDad09",
          "content": "Lambda to monitor S3 put event is incorrect.",
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
      "question_text": "<p>A company has a three-tier web application that is deployed on AWS. The web servers are deployed in a public subnet in a VPC.  The application servers and database servers are deployed in private subnets in the same VPC.  The company has deployed a third-party virtual firewall appliance from AWS Marketplace in an inspection VPC.  The appliance is configured with an IP interface that can accept IP packets.<br>A solutions architect needs to integrate the web application with the appliance to inspect all traffic to the application before the traffic reaches the web server.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#19",
          "answers": [
            {
              "choice": "<p>A. Create a Network Load Balancer in the public subnet of the application's VPC to route the traffic to the appliance for packet inspection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Application Load Balancer in the public subnet of the application's VPC to route the traffic to the appliance for packet inspection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy a transit gateway in the inspection VPConfigure route tables to route the incoming packets through the transit gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy a Gateway Load Balancer in the inspection VPC.  Create a Gateway Load Balancer endpoint to receive the incoming packets and forward the packets to the appliance.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 689343,
          "date": "Sat 08 Oct 2022 15:23",
          "username": "CloudGuru99",
          "content": "Answer is D . Use Gateway Load balancer <br>REF: https://aws.amazon.com/blogs/networking-and-content-delivery/scaling-network-traffic-inspection-using-aws-gateway-load-balancer/",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 689415,
          "date": "Sat 08 Oct 2022 16:23",
          "username": "rein_chau",
          "content": "D is correct because this is Gateway Load Balancer feature.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 731194,
          "date": "Wed 30 Nov 2022 08:18",
          "username": "miki111",
          "content": "DDDDDDDDDD",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 726165,
          "date": "Thu 24 Nov 2022 21:14",
          "username": "sherbo",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 725690,
          "date": "Thu 24 Nov 2022 10:25",
          "username": "JohnnyBGJohnnyBG",
          "content": "Would Chose A since it can simply forward all packet at layer 4. Not D since GWLB is more costly and do not bring benefit compared to a simpler NLB. Sorry for my confusion, after more careful reading only GWLB will forward all IP packet where NLB is limited to TCP-UDP ...",
          "upvote_count": "13",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 725706,
          "date": "Thu 24 Nov 2022 10:42",
          "username": "JohnnyBG",
          "content": "Sorry for my confusion, after more careful reading only GWLB will forward all IP packet where NLB is limited to TCP-UDP ...",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 723489,
          "date": "Mon 21 Nov 2022 13:46",
          "username": "Wpcorgan",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 716845,
          "date": "Sat 12 Nov 2022 18:49",
          "username": "grzeev",
          "content": "https://piyushj02.medium.com/aws-gateway-load-balancer-1o1-26d7cf61b798",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 713513,
          "date": "Tue 08 Nov 2022 06:56",
          "username": "Jtic",
          "content": "My Answer is D. <br>The use case falls under Gateway Load balancer capability.<br>https://aws.amazon.com/elasticloadbalancing/gateway-load-balancer/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 712599,
          "date": "Sun 06 Nov 2022 20:26",
          "username": "Newptone",
          "content": "https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/getting-started.html<br>For option B, you need to consider more about how to handle routing traffic which is not LEAST effort.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 712365,
          "date": "Sun 06 Nov 2022 15:37",
          "username": "KADSMKADSM",
          "content": "Have doubt - whether D could be correct as it suggests created Gateway load balancer in Inspection VPCShouldn't be GWLB in Application VPC. ",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 712366,
          "date": "Sun 06 Nov 2022 15:39",
          "username": "KADSM",
          "content": "Shouldn't be GWLB in Application VPC. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 712194,
          "date": "Sun 06 Nov 2022 09:15",
          "username": "pm2229",
          "content": "It's D, Coz.. Gateway Load Balancer is a new type of load balancer that operates at layer 3 of the OSI model and is built on Hyperplane, which is capable of handling several thousands of connections per second. Gateway Load Balancer endpoints are configured in spoke VPCs originating or receiving traffic from the Internet. This architecture allows you to perform inline inspection of traffic from multiple spoke VPCs in a simplified and scalable fashion while still centralizing your virtual appliances.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 707041,
          "date": "Sat 29 Oct 2022 09:30",
          "username": "keezbadger",
          "content": "D: The question is quite tricky, but you have to be aware of the OSI Layers. The key emphasis here is \\\"The appliance is configured with an IP interface that can accept IP packets.\\\" Hence, Option D with gateway mentions this. Thus Path Determination and IP (Network) is associated with IP Interface and IP packet",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 706628,
          "date": "Fri 28 Oct 2022 18:43",
          "username": "ukwafabian",
          "content": "\\\"all traffic to the application before the traffic reaches the web server\\\" Application is Layer 7 so it is B for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 703215,
          "date": "Mon 24 Oct 2022 18:56",
          "username": "ManoAniNewptone",
          "content": "B is correct answer, they are saying with LEAST effort. If you deploy a Gateway load balancer infront of appliance, assuming only 1 instance running at the moment, you need to add secondary instance and its lot of work to re-configure the appliance to handle traffic. Since the web is already exposed to internet, deploying application load balancer at L7 is easier, from there you should be able to route the traffic for inspection before it reaches web server.But if you choose B for forwarding the traffic, it then raises two questions:<br>1. How do you route the traffic from security appliance to your web servers?<br>2. How do you route the traffic from your web servers to your security appliance?<br>Actually it introduces much more efforts to do what GWLB has done by itself.",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 712596,
          "date": "Sun 06 Nov 2022 20:24",
          "username": "Newptone",
          "content": "But if you choose B for forwarding the traffic, it then raises two questions:<br>1. How do you route the traffic from security appliance to your web servers?<br>2. How do you route the traffic from your web servers to your security appliance?<br>Actually it introduces much more efforts to do what GWLB has done by itself.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 697664,
          "date": "Mon 17 Oct 2022 21:56",
          "username": "GameDad09",
          "content": "D seems to be correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 693102,
          "date": "Wed 12 Oct 2022 14:54",
          "username": "herculian_effort",
          "content": "\\\"The appliance is configured with an IP interface that can accept IP packets\\\" which means Layer 3. Application Load Balancer is Layer 7. D is correct since it operates on Layer 3 as mentioned in the link provided by CloudGuru99",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 691757,
          "date": "Tue 11 Oct 2022 07:04",
          "username": "tubtab",
          "content": "D is correct",
          "upvote_count": "2",
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
      "question_text": "<p>A company wants to improve its ability to clone large amounts of production data into a test environment in the same AWS Region. The data is stored in Amazon EC2 instances on Amazon Elastic Block Store (Amazon EBS) volumes. Modifications to the cloned data must not affect the production environment. The software that accesses this data requires consistently high I/O performance.<br>A solutions architect needs to minimize the time that is required to clone the production data into the test environment.<br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#20",
          "answers": [
            {
              "choice": "<p>A. Take EBS snapshots of the production EBS volumes. Restore the snapshots onto EC2 instance store volumes in the test environment.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the production EBS volumes to use the EBS Multi-Attach feature. Take EBS snapshots of the production EBS volumes. Attach the production EBS volumes to the EC2 instances in the test environment.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Take EBS snapshots of the production EBS volumes. Create and initialize new EBS volumes. Attach the new EBS volumes to EC2 instances in the test environment before restoring the volumes from the production EBS snapshots.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Take EBS snapshots of the production EBS volumes. Turn on the EBS fast snapshot restore feature on the EBS snapshots. Restore the snapshots into new EBS volumes. Attach the new EBS volumes to EC2 instances in the test environment.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 704695,
          "date": "Wed 26 Oct 2022 15:03",
          "username": "UWSFish",
          "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-fast-snapshot-restore.html<br><br>Amazon EBS fast snapshot restore (FSR) enables you to create a volume from a snapshot that is fully initialized at creation. This eliminates the latency of I/O operations on a block when it is accessed for the first time. Volumes that are created using fast snapshot restore instantly deliver all of their provisioned performance.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 692623,
          "date": "Wed 12 Oct 2022 06:22",
          "username": "BoboChow",
          "content": "https://aws.amazon.com/cn/about-aws/whats-new/2020/11/amazon-ebs-fast-snapshot-restore-now-available-us-govcloud-regions/",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 723491,
          "date": "Mon 21 Nov 2022 13:47",
          "username": "Wpcorgan",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 716625,
          "date": "Sat 12 Nov 2022 10:55",
          "username": "Wajif",
          "content": "Minimize the time is a key requirement. So D. ",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 697669,
          "date": "Mon 17 Oct 2022 22:06",
          "username": "GameDad09",
          "content": "D seems to be the correct one.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 696611,
          "date": "Mon 17 Oct 2022 00:15",
          "username": "ninjawrz",
          "content": "D: Fast snapshots<br><br>Amazon EBS fast snapshot restore (FSR) enables you to create a volume from a snapshot that is fully initialized at creation. This eliminates the latency of I/O operations on a block when it is accessed for the first time. Volumes that are created using fast snapshot restore instantly deliver all of their provisioned performance.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 696465,
          "date": "Sun 16 Oct 2022 21:23",
          "username": "queen101",
          "content": "DDDDDDDDDDDDD",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 696257,
          "date": "Sun 16 Oct 2022 15:28",
          "username": "123jhl0",
          "content": "The \\\"fast snapshot restore\\\" on EBS eliminates the initialisation time required for the EBS volumes, providing both requests: 1) reduces time to clone data from production to test and 2) provide consistently high performance (as volumes are already initialised)<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-fast-snapshot-restore.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 693026,
          "date": "Wed 12 Oct 2022 13:53",
          "username": "SAA003",
          "content": "C is the answer<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/backup-recovery/restore.html",
          "upvote_count": "1",
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
      "question_text": "<p>An ecommerce company wants to launch a one-deal-a-day website on AWS. Each day will feature exactly one product on sale for a period of 24 hours. The company wants to be able to handle millions of requests each hour with millisecond latency during peak hours.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#21",
          "answers": [
            {
              "choice": "<p>A. Use Amazon S3 to host the full website in different S3 buckets. Add Amazon CloudFront distributions. Set the S3 buckets as origins for the distributions. Store the order data in Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy the full website on Amazon EC2 instances that run in Auto Scaling groups across multiple Availability Zones. Add an Application Load Balancer (ALB) to distribute the website traffic. Add another ALB for the backend APIs. Store the data in Amazon RDS for MySQL.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the full application to run in containers. Host the containers on Amazon Elastic Kubernetes Service (Amazon EKS). Use the Kubernetes Cluster Autoscaler to increase and decrease the number of pods to process bursts in traffic. Store the data in Amazon RDS for MySQL.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an Amazon S3 bucket to host the website's static content. Deploy an Amazon CloudFront distribution. Set the S3 bucket as the origin. Use Amazon API Gateway and AWS Lambda functions for the backend APIs. Store the data in Amazon DynamoDB. <br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 693746,
          "date": "Thu 13 Oct 2022 10:38",
          "username": "Sinaneos",
          "content": "D because all of the components are infinitely scalable<br>dynamoDB, API Gateway, Lambda, and of course s3+cloudfront",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 723494,
          "date": "Mon 21 Nov 2022 13:52",
          "username": "Wpcorgan",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 723174,
          "date": "Mon 21 Nov 2022 06:17",
          "username": "ABCMail",
          "content": "Serverless technologies are better options",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 716629,
          "date": "Sat 12 Nov 2022 11:01",
          "username": "WajifkeithkifoTuLeJayBee65",
          "content": "Why not B? Application load balancer can accept millions of request/hr?For me, the keyword was millisecond latency. Option B suggests RDS as the database, but Option D is DynamoDB. <br><br>DynamoDB - Fast, flexible NoSQL database service for single-digit millisecond performance at any scaleYes, and also LEAST operational overhead. Scaling the application on EC2 instance is hard work require the very good architect.And scaling takes time, so Auto Scaling groups cannot react instantly to a massive surge in demand",
          "upvote_count": "1212",
          "selected_answers": ""
        },
        {
          "id": 717604,
          "date": "Mon 14 Nov 2022 02:16",
          "username": "keithkifoTuLeJayBee65",
          "content": "For me, the keyword was millisecond latency. Option B suggests RDS as the database, but Option D is DynamoDB. <br><br>DynamoDB - Fast, flexible NoSQL database service for single-digit millisecond performance at any scaleYes, and also LEAST operational overhead. Scaling the application on EC2 instance is hard work require the very good architect.And scaling takes time, so Auto Scaling groups cannot react instantly to a massive surge in demand",
          "upvote_count": "212",
          "selected_answers": ""
        },
        {
          "id": 727393,
          "date": "Sat 26 Nov 2022 09:37",
          "username": "TuLeJayBee65",
          "content": "Yes, and also LEAST operational overhead. Scaling the application on EC2 instance is hard work require the very good architect.And scaling takes time, so Auto Scaling groups cannot react instantly to a massive surge in demand",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 732637,
          "date": "Thu 01 Dec 2022 14:12",
          "username": "JayBee65",
          "content": "And scaling takes time, so Auto Scaling groups cannot react instantly to a massive surge in demand",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 716053,
          "date": "Fri 11 Nov 2022 13:47",
          "username": "sodyam",
          "content": "D is the correct answer due to milliseconds latency which will involve cloud front.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 713928,
          "date": "Tue 08 Nov 2022 16:36",
          "username": "xeun88",
          "content": "D is the correct answer due to milliseconds latency which will involve cloud front.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 708063,
          "date": "Sun 30 Oct 2022 23:14",
          "username": "17Master",
          "content": "Ans is correct D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 697670,
          "date": "Mon 17 Oct 2022 22:08",
          "username": "GameDad09",
          "content": "D is the correct one.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 696466,
          "date": "Sun 16 Oct 2022 21:26",
          "username": "queen101",
          "content": "DDDDDDDDDDDDDDDD",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 695065,
          "date": "Sat 15 Oct 2022 02:21",
          "username": "ninjawrz",
          "content": "D: because of least operational overhead",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 692629,
          "date": "Wed 12 Oct 2022 06:33",
          "username": "BoboChow",
          "content": "I feel like the scenario is not only static resource but also dynamic resources.<br>API Gateway + Lambda has a good scalibility",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 692444,
          "date": "Wed 12 Oct 2022 00:22",
          "username": "Lilibell",
          "content": "the answer is D",
          "upvote_count": "2",
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
      "question_text": "<p>A solutions architect is using Amazon S3 to design the storage architecture of a new digital media application. The media files must be resilient to the loss of an Availability Zone. Some files are accessed frequently while other files are rarely accessed in an unpredictable pattern. The solutions architect must minimize the costs of storing and retrieving the media files.<br>Which storage option meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#22",
          "answers": [
            {
              "choice": "<p>A. S3 Standard<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. S3 Intelligent-Tiering<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. S3 Standard-Infrequent Access (S3 Standard-IA)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. S3 One Zone-Infrequent Access (S3 One Zone-IA)<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 696276,
          "date": "Sun 16 Oct 2022 16:10",
          "username": "123jhl0",
          "content": "\\\"unpredictable pattern\\\" - always go for Intelligent Tiering of S3<br>It also meets the resiliency requirement: \\\"S3 Standard, S3 Intelligent-Tiering, S3 Standard-IA, S3 Glacier Instant Retrieval, S3 Glacier Flexible Retrieval, and S3 Glacier Deep Archive redundantly store objects on multiple devices across a minimum of three Availability Zones in an AWS Region\\\" https://docs.aws.amazon.com/AmazonS3/latest/userguide/DataDurability.html",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 735079,
          "date": "Sun 04 Dec 2022 13:39",
          "username": "9014",
          "content": "\\\"unpredictable pattern\\\" - remember the keyword and always go for Intelligent Tiering of S3",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 723495,
          "date": "Mon 21 Nov 2022 13:53",
          "username": "Wpcorgan",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 715384,
          "date": "Thu 10 Nov 2022 17:29",
          "username": "AbhiJo",
          "content": "B is correct, C is incorrect because of requirement for frequent access as well",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 713929,
          "date": "Tue 08 Nov 2022 16:39",
          "username": "xeun88",
          "content": "Since it said some data a access frequently and some are unpredictable, i will go for B. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 708066,
          "date": "Sun 30 Oct 2022 23:16",
          "username": "17Master",
          "content": "ans is correct B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 697672,
          "date": "Mon 17 Oct 2022 22:10",
          "username": "GameDad09",
          "content": "B is the correct one.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 696467,
          "date": "Sun 16 Oct 2022 21:31",
          "username": "queen101",
          "content": "BBBBBBBBBBB",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 695066,
          "date": "Sat 15 Oct 2022 02:22",
          "username": "ninjawrz",
          "content": "B.  S3 Intelligent-Tiering for unpredictable or vague usecase",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 692631,
          "date": "Wed 12 Oct 2022 06:36",
          "username": "BoboChow",
          "content": "sure for B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 691670,
          "date": "Tue 11 Oct 2022 04:59",
          "username": "galbimandu",
          "content": "B<br>https://aws.amazon.com/getting-started/hands-on/getting-started-using-amazon-s3-intelligent-tiering/?nc1=h_ls",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 690627,
          "date": "Mon 10 Oct 2022 03:16",
          "username": "tt79",
          "content": "B is correct.",
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
      "question_text": "<p>A company is storing backup files by using Amazon S3 Standard storage. The files are accessed frequently for 1 month. However, the files are not accessed after 1 month. The company must keep the files indefinitely.<br>Which storage solution will meet these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#23",
          "answers": [
            {
              "choice": "<p>A. Configure S3 Intelligent-Tiering to automatically migrate objects.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Glacier Deep Archive after 1 month.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) after 1 month.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 1 month.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 735266,
          "date": "Sun 04 Dec 2022 18:01",
          "username": "Gil80",
          "content": "Deep archive is cheaper",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 732223,
          "date": "Thu 01 Dec 2022 04:57",
          "username": "ENNYBOLA",
          "content": "i thought it can only go to deep archive after 90 days?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 723496,
          "date": "Mon 21 Nov 2022 13:54",
          "username": "Wpcorgan",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 723196,
          "date": "Mon 21 Nov 2022 06:58",
          "username": "Tsho",
          "content": "BBBBBBBBB",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 721070,
          "date": "Fri 18 Nov 2022 06:07",
          "username": "renekton",
          "content": "B is the correct answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 713932,
          "date": "Tue 08 Nov 2022 16:41",
          "username": "xeun88",
          "content": "B is correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 697673,
          "date": "Mon 17 Oct 2022 22:11",
          "username": "GameDad09",
          "content": "B is the correct one.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 696468,
          "date": "Sun 16 Oct 2022 21:32",
          "username": "queen101",
          "content": "BBBBBBBBBB",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 695067,
          "date": "Sat 15 Oct 2022 02:23",
          "username": "ninjawrz",
          "content": "B: Transition to Glacier deep archive for cost efficiency",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 692650,
          "date": "Wed 12 Oct 2022 07:01",
          "username": "BoboChow",
          "content": "sure for B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 691619,
          "date": "Tue 11 Oct 2022 02:33",
          "username": "Ralston40",
          "content": "The answer is B",
          "upvote_count": "4",
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
      "question_text": "<p>A company observes an increase in Amazon EC2 costs in its most recent bill. The billing team notices unwanted vertical scaling of instance types for a couple of EC2 instances. A solutions architect needs to create a graph comparing the last 2 months of EC2 costs and perform an in-depth analysis to identify the root cause of the vertical scaling.<br>How should the solutions architect generate the information with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#24",
          "answers": [
            {
              "choice": "<p>A. Use AWS Budgets to create a budget report and compare EC2 costs based on instance types.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Cost Explorer's granular filtering feature to perform an in-depth analysis of EC2 costs based on instance types.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use graphs from the AWS Billing and Cost Management dashboard to compare EC2 costs based on instance types for the last 2 months.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Cost and Usage Reports to create a report and send it to an Amazon S3 bucket. Use Amazon QuickSight with Amazon S3 as a source to generate an interactive graph based on instance types.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 692095,
          "date": "Tue 11 Oct 2022 14:29",
          "username": "sba21",
          "content": "https://www.examtopics.com/discussions/amazon/view/68306-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 696285,
          "date": "Sun 16 Oct 2022 16:30",
          "username": "123jhl0Udoyengoku58",
          "content": "The requested result is a graph, so...<br>A - can't be as the result is a report<br>B - can't be as it is limited to 14 days visibility and the graph has to cover 2 months<br>C - seems to provide graphs and the best option available, as...<br>D - could provide graphs, BUT involves operational overhead, which has been requested to be minimised.Cost Explorer, AWS prepares the data about your costs for the current month and the last 12 months: https://aws.amazon.com/aws-cost-management/aws-cost-explorer/12 months data visible on Cost Explorer.",
          "upvote_count": "514",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 731271,
          "date": "Wed 30 Nov 2022 10:30",
          "username": "Udoyen",
          "content": "Cost Explorer, AWS prepares the data about your costs for the current month and the last 12 months: https://aws.amazon.com/aws-cost-management/aws-cost-explorer/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 700643,
          "date": "Fri 21 Oct 2022 10:02",
          "username": "goku58",
          "content": "12 months data visible on Cost Explorer.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 731224,
          "date": "Wed 30 Nov 2022 09:15",
          "username": "JohnnyBG",
          "content": "I would say D<br>Please note that in order to receive the AWS Cost & Usage Report, you will need to create and configure an Amazon S3 bucket. ...In case for large volume of data, you can select options such as Redshift, Athena or QuickSight to help manage and query data that you need.<br><br>https://aws.amazon.com/aws-cost-management/aws-cost-and-usage-reporting/faqs/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 723497,
          "date": "Mon 21 Nov 2022 13:55",
          "username": "Wpcorgan",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 720188,
          "date": "Thu 17 Nov 2022 05:06",
          "username": "koreanmonkey",
          "content": "Because Cost Explorer also provide recommandation about after 12month, I think B is better than C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 712225,
          "date": "Sun 06 Nov 2022 10:25",
          "username": "pm2229",
          "content": "B: AWS Cost Explorer is a tool that enables you to view and analyze your costs and usage. You can explore your usage and costs using the main graph, the Cost Explorer cost and usage reports, or the Cost Explorer RI reports. You can view data for up to the last 12 months.<br><br>Ref: https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 708047,
          "date": "Sun 30 Oct 2022 22:06",
          "username": "keezbadgerdduque10",
          "content": "C is the right answer. B talks about cost explorer granularity filtering and there is a cost assosicated with the usage of indepth analysis. To get indepth analysis you will have to set it to 1hour granularity and this has a cost, as against the questions that says \\\"least operational overhead\\\". For more information read through this: https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/cost_monitor_usage_detailed_source.htmlI think you are confusing operational overhead with cost effectiveness",
          "upvote_count": "35",
          "selected_answers": ""
        },
        {
          "id": 712930,
          "date": "Mon 07 Nov 2022 09:33",
          "username": "dduque10",
          "content": "I think you are confusing operational overhead with cost effectiveness",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 703152,
          "date": "Mon 24 Oct 2022 17:07",
          "username": "Six_Fingered_Jose",
          "content": "This question is honestly too vague,<br>C does not state EXACTLY where from the dashboard they are pulling the graph from, and as for B, it is true that for granular filtering the function only allows for up to 14 days, but cost explorer itself should be able to easily view 2 months.<br><br>question states LEAST amount of overhead which means D should be out of the question since that requires a lot of work.<br><br>think it's either B or C but can't say for sure, why do AWS keeps coming up with these weird questions man",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 696280,
          "date": "Sun 16 Oct 2022 16:18",
          "username": "123jhl0",
          "content": "B can't be the answer, as the functionality only works for the last 14 days and the task in the questions requires \\\"create a graph comparing the last 2 months...\\\". Check this restriction at https://aws.amazon.com/aws-cost-management/pricing/",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 695299,
          "date": "Sat 15 Oct 2022 10:50",
          "username": "Valero_",
          "content": "I think it's Cost Explorer too. https://aws.amazon.com/about-aws/whats-new/2019/11/aws-cost-explorer-supports-hourly-resource-level-granularity/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 695069,
          "date": "Sat 15 Oct 2022 02:26",
          "username": "ninjawrz",
          "content": "B.  AWS Cost Explorer is a tool that enables you to view and analyze your costs and usage. You can explore your usage and costs using the main graph, the Cost Explorer cost and usage reports, or the Cost Explorer RI reports. You can view data for up to the last 12 months, forecast how much you're likely to spend for the next 12 months, and get recommendations for what Reserved Instances to purchase. You can use Cost Explorer to identify areas that need further inquiry and see trends that you can use to understand your costs.<br>https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 692590,
          "date": "Wed 12 Oct 2022 05:09",
          "username": "tubtab",
          "content": "i think b",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 691677,
          "date": "Tue 11 Oct 2022 05:14",
          "username": "galbimandu17Master",
          "content": "https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.htmlit doesn't say anything about EC2.<br>Your report files consist of a .csv file or a collection of .csv files and a manifest file. You can choose to configure your report data for integration with Amazon Athena, Amazon Redshift, or Amazon QuickSight.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 719299,
          "date": "Wed 16 Nov 2022 04:22",
          "username": "17Master",
          "content": "it doesn't say anything about EC2.<br>Your report files consist of a .csv file or a collection of .csv files and a manifest file. You can choose to configure your report data for integration with Amazon Athena, Amazon Redshift, or Amazon QuickSight.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 691277,
          "date": "Mon 10 Oct 2022 17:02",
          "username": "ogerber",
          "content": "i think its D. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#25",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is designing an application. The application uses an AWS Lambda function to receive information through Amazon API Gateway and to store the information in an Amazon Aurora PostgreSQL database.<br>During the proof-of-concept stage, the company has to increase the Lambda quotas significantly to handle the high volumes of data that the company needs to load into the database. A solutions architect must recommend a new design to improve scalability and minimize the configuration effort.<br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#25",
          "answers": [
            {
              "choice": "<p>A. Refactor the Lambda function code to Apache Tomcat code that runs on Amazon EC2 instances. Connect the database by using native Java Database Connectivity (JDBC) drivers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Change the platform from Aurora to Amazon DynamoDProvision a DynamoDB Accelerator (DAX) cluster. Use the DAX client SDK to point the existing DynamoDB API calls at the DAX cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up two Lambda functions. Configure one function to receive the information. Configure the other function to load the information into the database. Integrate the Lambda functions by using Amazon Simple Notification Service (Amazon SNS).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up two Lambda functions. Configure one function to receive the information. Configure the other function to load the information into the database. Integrate the Lambda functions by using an Amazon Simple Queue Service (Amazon SQS) queue.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 696302,
          "date": "Sun 16 Oct 2022 16:48",
          "username": "123jhl0",
          "content": "A - refactoring can be a solution, BUT requires a LOT of effort - not the answer<br>B - DynamoDB is NoSQL and Aurora is SQL, so it requires a DB migration... again a LOT of effort, so no the answer<br>C and D are similar in structure, but...<br>C uses SNS, which would notify the 2nd Lambda function... provoking the same bottleneck... not the solution<br>D uses SQS, so the 2nd lambda function can go to the queue when responsive to keep with the DB load process. <br>Usually the app decoupling helps with the performance improvement by distributing load. In this case, the bottleneck is solved by uses queues... so D is the answer.",
          "upvote_count": "17",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 723498,
          "date": "Mon 21 Nov 2022 13:56",
          "username": "Wpcorgan",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 723204,
          "date": "Mon 21 Nov 2022 07:16",
          "username": "ABCMail",
          "content": "Two single responsibility functions offer a better solution.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 721796,
          "date": "Sat 19 Nov 2022 07:11",
          "username": "akosigengen",
          "content": "D.  Keyword is to handle load which will be taking care of bySQS.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 692707,
          "date": "Wed 12 Oct 2022 07:55",
          "username": "Ajai23",
          "content": "Process of elimination, D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 692659,
          "date": "Wed 12 Oct 2022 07:10",
          "username": "BoboChow",
          "content": "Atually I'm really confused by those options.<br>A is not right obiously, but the remaining options don't make sense, either...",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 692448,
          "date": "Wed 12 Oct 2022 00:31",
          "username": "Lilibell",
          "content": "the answer is D",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#26",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to review its AWS Cloud deployment to ensure that its Amazon S3 buckets do not have unauthorized configuration changes.<br>What should a solutions architect do to accomplish this goal?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#26",
          "answers": [
            {
              "choice": "<p>A. Turn on AWS Config with the appropriate rules.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Turn on AWS Trusted Advisor with the appropriate checks.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Turn on Amazon Inspector with the appropriate assessment template.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Turn on Amazon S3 server access logging. Configure Amazon EventBridge (Amazon Cloud Watch Events).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 711498,
          "date": "Sat 05 Nov 2022 03:08",
          "username": "gokalpkocer3",
          "content": "Configuration changes= AWS Config",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 723499,
          "date": "Mon 21 Nov 2022 13:56",
          "username": "Wpcorgan",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 723206,
          "date": "Mon 21 Nov 2022 07:23",
          "username": "ABCMail",
          "content": "AWS config allows scrutiny of past chnages",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 717163,
          "date": "Sun 13 Nov 2022 08:59",
          "username": "grzeev",
          "content": "AWS Config is a fully managed service that provides you with an AWS resource inventory, configuration history, and configuration change notifications to enable security and governance",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 712961,
          "date": "Mon 07 Nov 2022 10:16",
          "username": "pspinelli19",
          "content": "With Config you can limit changes to your entire account/s.<br>https://www.examtopics.com/discussions/amazon/view/27941-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 709578,
          "date": "Wed 02 Nov 2022 03:43",
          "username": "Solarch",
          "content": "Answer is A.  Trusted Advisor gives you a general check of your system and identifies ways to optimize your infrastructue and improve it. <br>While AWS config is more about specific resource. Like stated ( S3 bucket).Config lets you select particular resource you want to evaluate .",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 708051,
          "date": "Sun 30 Oct 2022 22:24",
          "username": "keezbadger",
          "content": "A is the right answer. The key word in the question is \\\"Review\\\" Hence. AWS config use case here, \\\"Evaluate resource configurations for potential vulnerabilities, and review your configuration history after potential incidents to examine your security posture.\\\"<br><br>Though Trusted advisor is similar but what it does is that, it provides important \\\"recommendations\\\" to optimize your cloud deployments, improve resilience, and address security gaps.<br><br>The keyword for Trusted advisor is Recommendation.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 696319,
          "date": "Sun 16 Oct 2022 17:08",
          "username": "123jhl0",
          "content": "A - according to the picture in the documentation... \\\"AWS Config automatically evaluates the recorded configuration against the configuration that you specify.\\\"<br>https://d1.awsstatic.com/config-diagram-092122.974fe2a4cb6aae1fe564fdbbe30ab55841a9858e.png",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 695147,
          "date": "Sat 15 Oct 2022 05:17",
          "username": "KVK16",
          "content": "Config - With AWS Config, you can dive deep into how your bucket was configured at any point in time. Additionally,Config rules enable you to check whether your S3 buckets have logging and versioning enabled<br>https://aws.amazon.com/about-aws/whats-new/2016/10/record-and-govern-s3-bucket-configurations-with-aws-config/<br><br>S3 only permissions check is done by Trust advisor - apart from other checksroot MFA, SG open ports, RDS Public Snapshots , EBS Public Snapshots , IAM User - one min, Service limits",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 693747,
          "date": "Thu 13 Oct 2022 10:41",
          "username": "Sinaneos",
          "content": "Config is better to PREVENT changes, Trusted advisor would review breaches that have already happened",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 692726,
          "date": "Wed 12 Oct 2022 08:03",
          "username": "masetromain",
          "content": "Answere A : https://youtu.be/MJDuAvNEv64",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 692663,
          "date": "Wed 12 Oct 2022 07:14",
          "username": "BoboChowBoboChow",
          "content": "AWS Trusted Advisor is just to analyze your AWS accounts and providers reconmendation.Inspector is to analyze the running OS against known vulnerabilities",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 692664,
          "date": "Wed 12 Oct 2022 07:14",
          "username": "BoboChow",
          "content": "Inspector is to analyze the running OS against known vulnerabilities",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 690606,
          "date": "Mon 10 Oct 2022 02:34",
          "username": "tuloveu17Master",
          "content": "Trusted Advisor good option.why? - D is correct",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 708074,
          "date": "Sun 30 Oct 2022 23:38",
          "username": "17Master",
          "content": "why? - D is correct",
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
      "question_text": "<p>A company is launching a new application and will display application metrics on an Amazon CloudWatch dashboard. The company's product manager needs to access this dashboard periodically. The product manager does not have an AWS account. A solutions architect must provide access to the product manager by following the principle of least privilege.<br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#27",
          "answers": [
            {
              "choice": "<p>A. Share the dashboard from the CloudWatch console. Enter the product manager's email address, and complete the sharing steps. Provide a shareable link for the dashboard to the product manager.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an IAM user specifically for the product manager. Attach the CloudWatchReadOnlyAccess AWS managed policy to the user. Share the new login credentials with the product manager. Share the browser URL of the correct dashboard with the product manager.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an IAM user for the company's employees. Attach the ViewOnlyAccess AWS managed policy to the IAM user. Share the new login credentials with the product manager. Ask the product manager to navigate to the CloudWatch console and locate the dashboard by name in the Dashboards section.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy a bastion server in a public subnet. When the product manager requires access to the dashboard, start the server and share the RDP credentials. On the bastion server, ensure that the browser is configured to open the dashboard URL with cached AWS credentials that have appropriate permissions to view the dashboard.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 692736,
          "date": "Wed 12 Oct 2022 08:08",
          "username": "masetromain123jhl0",
          "content": "Answere A : https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-dashboard-sharing.html<br><br>Share a single dashboard and designate specific email addresses of the people who can view the dashboard. Each of these users creates their own password that they must enter to view the dashboard.Thanks for the link! No doubt A is the answer.",
          "upvote_count": "192",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 696327,
          "date": "Sun 16 Oct 2022 17:17",
          "username": "123jhl0",
          "content": "Thanks for the link! No doubt A is the answer.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 723500,
          "date": "Mon 21 Nov 2022 13:57",
          "username": "Wpcorgan",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 722812,
          "date": "Sun 20 Nov 2022 17:59",
          "username": "randall56",
          "content": "I think that the point in answer B is \\\"Share the new login credentials with the product manager\\\".That would imply that the PM, who didn't have a login before, would need a new one to access the dashboard. The PM receives an AWS account in this manner.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 722334,
          "date": "Sun 20 Nov 2022 03:00",
          "username": "htangga",
          "content": "the answer is A: product manager doesn't have AWS account",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 715469,
          "date": "Thu 10 Nov 2022 19:35",
          "username": "pm2229",
          "content": "A, Sharing a dashboard publicly makes it accessible to anyone who has the link, with no authentication. Do this only for dashboards that do not contain sensitive information.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 714910,
          "date": "Thu 10 Nov 2022 04:56",
          "username": "PambanKartikey140",
          "content": "\\\"The product manager does not have an AWS account\\\" so answer is A. . pretty straightforwardPoint.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 718841,
          "date": "Tue 15 Nov 2022 15:19",
          "username": "Kartikey140",
          "content": "Point.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 712636,
          "date": "Sun 06 Nov 2022 21:41",
          "username": "backbencher2022",
          "content": "On second thoughts, A is the right answer. Please ignore my previous comment",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 710716,
          "date": "Thu 03 Nov 2022 19:19",
          "username": "backbencher202217Master",
          "content": "B is the correct answer because the access must be given with least privilege and A gives more privileges than required as per this documentation. https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-dashboard-sharing.htmlXD jajaa...Read \\\"But the user doesn't have AWS account\\\". Answer B may be questionable.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 719305,
          "date": "Wed 16 Nov 2022 04:41",
          "username": "17Master",
          "content": "XD jajaa...Read \\\"But the user doesn't have AWS account\\\". Answer B may be questionable.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 710715,
          "date": "Thu 03 Nov 2022 19:18",
          "username": "backbencher2022KADSM",
          "content": "B is the correct answer because the access must be given with least privilege and A gives more privileges than required as per this documentation. https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-dashboard-sharing.htmlBut the user doesn't have AWS account. Answer B may be questionable.",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 712419,
          "date": "Sun 06 Nov 2022 16:37",
          "username": "KADSM",
          "content": "But the user doesn't have AWS account. Answer B may be questionable.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 708058,
          "date": "Sun 30 Oct 2022 22:41",
          "username": "keezbadgertinyfoot",
          "content": "This is a tricky one. <br>For the question the \\\"product manager need access to the dashboard\\\". However, if you share the dashboard. AWS documentation says:<br><br>Warning<br>All people who you share the dashboard with are granted these permissions for the account. If you share the dashboard publicly, then everyone who has the link to the dashboard has these permissions.<br><br>The cloudwatch:GetMetricData and ec2:DescribeTags permissions cannot be scoped down to specific metrics or EC2 instances, so the people with access to the dashboard can query all CloudWatch metrics and the names and tags of all EC2 instances in the account.<br><br>So the product manager can not only view, but query \\\"ALL cloud watch metrics, Names, and tags of EC2 instances in the account\\\" The question now is do we want the product manager to do that? Or just Read/view the dashboard? If it is just Read/view, then Option B, but if it is he needs to do the aformentioned, then Option A. Initially I had the same idea as you but researching into the AWS documentations, actually, the CloudWatchReadOnlyAccess managed policy is much more permissive than that of the shared role that is created. <br><br>Based on (https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/iam-identity-based-access-control-cw.html#managed-policies-cloudwatch-CloudWatchReadOnlyAccess) you can see that the resource allowed is * and the various actions allowed are extremely wide including the cloudwatch:Get*. This essentially has the same rights as what you mentioned about having access to query all EC2 instances metrics in the account and more. If the option was to create a custom managed or inline policy that only grants access to that dashboard resource then it would be the least privilege method.<br><br>Whereas the CloudWatch Role is only granted 4 specific permissions on all resource. https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-dashboard-sharing.html<br><br>Hence I believe that A is a better answer.",
          "upvote_count": "31",
          "selected_answers": ""
        },
        {
          "id": 712406,
          "date": "Sun 06 Nov 2022 16:22",
          "username": "tinyfoot",
          "content": "Initially I had the same idea as you but researching into the AWS documentations, actually, the CloudWatchReadOnlyAccess managed policy is much more permissive than that of the shared role that is created. <br><br>Based on (https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/iam-identity-based-access-control-cw.html#managed-policies-cloudwatch-CloudWatchReadOnlyAccess) you can see that the resource allowed is * and the various actions allowed are extremely wide including the cloudwatch:Get*. This essentially has the same rights as what you mentioned about having access to query all EC2 instances metrics in the account and more. If the option was to create a custom managed or inline policy that only grants access to that dashboard resource then it would be the least privilege method.<br><br>Whereas the CloudWatch Role is only granted 4 specific permissions on all resource. https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-dashboard-sharing.html<br><br>Hence I believe that A is a better answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 703154,
          "date": "Mon 24 Oct 2022 17:13",
          "username": "Six_Fingered_Jose",
          "content": "agree with A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 693748,
          "date": "Thu 13 Oct 2022 10:44",
          "username": "Sinaneos",
          "content": "it's definitely A, there's no point of creating IAM user if the client doesn't have an account. Dashboard share is least privileage",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 692667,
          "date": "Wed 12 Oct 2022 07:17",
          "username": "BoboChow17Master",
          "content": "It seems like BWHY? iam?- Read --> \\\"The product manager does not have an AWS account\\\" -https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-dashboard-sharing.html -- ans is A",
          "upvote_count": "23",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 708077,
          "date": "Sun 30 Oct 2022 23:56",
          "username": "17Master",
          "content": "WHY? iam?- Read --> \\\"The product manager does not have an AWS account\\\" -https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-dashboard-sharing.html -- ans is A",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 692634,
          "date": "Wed 12 Oct 2022 06:42",
          "username": "sba21",
          "content": "CloudWatch > Dashboard > Select your board > Share Dashboard>Share your dashboard and require a username and password>Enter mail address",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#28",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating applications to AWS. The applications are deployed in different accounts. The company manages the accounts centrally by using AWS Organizations. The company's security team needs a single sign-on (SSO) solution across all the company's accounts. The company must continue managing the users and groups in its on-premises self-managed Microsoft Active Directory.<br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a one-way forest trust or a one-way domain trust to connect the company's self-managed Microsoft Active Directory with AWS SSO by using AWS Directory Service for Microsoft Active Directory.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a two-way forest trust to connect the company's self-managed Microsoft Active Directory with AWS SSO by using AWS Directory Service for Microsoft Active Directory.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Directory Service. Create a two-way trust relationship with the company's self-managed Microsoft Active Directory.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy an identity provider (IdP) on premises. Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 708092,
          "date": "Mon 31 Oct 2022 01:20",
          "username": "17Master",
          "content": "Tricky question!!! forget one-way or two-way. In this scenario, AWS applications (Amazon Chime, Amazon Connect, Amazon QuickSight, AWS Single Sign-On, Amazon WorkDocs, Amazon WorkMail, Amazon WorkSpaces, AWS Client VPN, AWS Management Console, and AWS Transfer Family) need to be able to look up objects from the on-premises domain in order for them to function. This tells you that authentication needs to flow both ways. This scenario requires a two-way trust between the on-premises and AWS Managed Microsoft AD domains.<br>It is a requirement of the application<br>Scenario 2: https://aws.amazon.com/es/blogs/security/everything-you-wanted-to-know-about-trusts-with-aws-managed-microsoft-ad/",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 723501,
          "date": "Mon 21 Nov 2022 13:58",
          "username": "Wpcorgan",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 719876,
          "date": "Wed 16 Nov 2022 18:45",
          "username": "pepgua",
          "content": "https://docs.aws.amazon.com/singlesignon/latest/userguide/connectonpremad.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 712870,
          "date": "Mon 07 Nov 2022 08:15",
          "username": "KADSM",
          "content": "Answer Bas we have AWS SSO which requires two way trust. As per documentation - A two-way trust is required for AWS Enterprise Apps such as Amazon Chime, Amazon Connect, Amazon QuickSight, AWS IAM Identity Center (successor to AWS Single Sign-On), Amazon WorkDocs, Amazon WorkMail, Amazon WorkSpaces, and the AWS Management Console. AWS Managed Microsoft AD must be able to query the users and groups in your self-managed AD. <br><br>Amazon EC2, Amazon RDS, and Amazon FSx will work with either a one-way or two-way trust.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 701345,
          "date": "Sat 22 Oct 2022 07:29",
          "username": "dave9994",
          "content": "B should be the correct answer. To access AWS Console, two-way trust is required.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 699624,
          "date": "Thu 20 Oct 2022 09:07",
          "username": "cark0728",
          "content": "b가 정답입니다",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 695181,
          "date": "Sat 15 Oct 2022 06:41",
          "username": "KVK16",
          "content": "In this there is requirement of trust two ways - from On Prem domain to AWS domain. They both will trust each other. One-way trust : If Domain A is trusting Domain B ,users from Domain B can access resources of Domain Abut not vice-versa. So for A - its Outgoing trust and for B its incoming trust. <br><br> AWS applications (Amazon Chime, Amazon Connect, Amazon QuickSight, AWS Single Sign-On, Amazon WorkDocs, Amazon WorkMail, Amazon WorkSpaces, AWS Client VPN, AWS Management Console, and AWS Transfer Family) need to be able to look up objects from the on-premises domain in order for them to function. This tells you that authentication needs to flow both ways.<br><br>For Elaborate details refer <br>https://aws.amazon.com/blogs/security/everything-you-wanted-to-know-about-trusts-with-aws-managed-microsoft-ad/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 693356,
          "date": "Wed 12 Oct 2022 21:52",
          "username": "bluer1",
          "content": "The answer should be B, <br><br>You can configure one and two-way external and forest trust relationships between your AWS Directory Service for Microsoft Active Directory and self-managed (on-premises) directories, as well as between multiple AWS Managed Microsoft AD directories in the AWS cloud. AWS Managed Microsoft AD supports all three trust relationship directions: Incoming, Outgoing and Two-way (Bi-directional).",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 692742,
          "date": "Wed 12 Oct 2022 08:14",
          "username": "masetromain",
          "content": "old question : https://aws.amazon.com/fr/about-aws/whats-new/2022/07/aws-single-sign-on-aws-sso-now-aws-iam-identity-center/<br><br>https://aws.amazon.com/fr/about-aws/whats-new/2022/04/aws-single-sign-on-configurable-synchronization-microsoft-active-directory/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 692675,
          "date": "Wed 12 Oct 2022 07:33",
          "username": "BoboChow",
          "content": "SSO is suitable for the senario. Because it's intergrated with AWS Organizations and on-premise Active Directory.You can centrally manage Single Sign-On to access multiple accounts .<br>But I don't know the one-way/two-way forest trust thing...",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#29",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company provides a Voice over Internet Protocol (VoIP) service that uses UDP connections. The service consists of Amazon EC2 instances that run in an Auto Scaling group. The company has deployments across multiple AWS Regions.<br>The company needs to route users to the Region with the lowest latency. The company also needs automated failover between Regions.<br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#29",
          "answers": [
            {
              "choice": "<p>A. Deploy a Network Load Balancer (NLB) and an associated target group. Associate the target group with the Auto Scaling group. Use the NLB as an AWS Global Accelerator endpoint in each Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an Application Load Balancer (ALB) and an associated target group. Associate the target group with the Auto Scaling group. Use the ALB as an AWS Global Accelerator endpoint in each Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy a Network Load Balancer (NLB) and an associated target group. Associate the target group with the Auto Scaling group. Create an Amazon Route 53 latency record that points to aliases for each NLB.  Create an Amazon CloudFront distribution that uses the latency record as an origin.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy an Application Load Balancer (ALB) and an associated target group. Associate the target group with the Auto Scaling group. Create an Amazon Route 53 weighted record that points to aliases for each ALB.  Deploy an Amazon CloudFront distribution that uses the weighted record as an origin.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 703159,
          "date": "Mon 24 Oct 2022 17:22",
          "username": "Six_Fingered_JoseBoboChow",
          "content": "agree with A,<br>Global Accelerator has automatic failover and is perfect for this scenario with VoIP<br>https://aws.amazon.com/global-accelerator/faqs/Thank you for your link, it make me consolidate A. ",
          "upvote_count": "84",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 706158,
          "date": "Fri 28 Oct 2022 07:30",
          "username": "BoboChow",
          "content": "Thank you for your link, it make me consolidate A. ",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 734593,
          "date": "Sat 03 Dec 2022 18:24",
          "username": "AbhiJo",
          "content": "A is correct for UDP, voip scenario.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 723502,
          "date": "Mon 21 Nov 2022 13:59",
          "username": "Wpcorgan",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 717784,
          "date": "Mon 14 Nov 2022 09:06",
          "username": "grzeev",
          "content": "https://youtu.be/GAxrPQ3ycsQ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 717590,
          "date": "Mon 14 Nov 2022 01:29",
          "username": "htangga",
          "content": "C is correct answer: Because \\\"The company needs to route users to the Region with the lowest latency\\\", in this case, route53 is needed to do so",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 715893,
          "date": "Fri 11 Nov 2022 10:11",
          "username": "vn_thanhtung",
          "content": "Global accelerator good fit for non-HTTP uses case, such as gaming UDP, Void over IP, IoT (MQTT)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 715636,
          "date": "Fri 11 Nov 2022 01:24",
          "username": "AbhiJo",
          "content": "Global Accelerator is a good fit for non-HTTP use cases, such as gaming (UDP), IoT (MQTT), or Voice over IP, as well as for HTTP use cases that specifically require static IP addresses or deterministic, fast regional failover",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 711284,
          "date": "Fri 04 Nov 2022 18:34",
          "username": "mouhannadhaj",
          "content": "CloudFront uses Edge Locations to cache content while Global Accelerator uses Edge Locations to find an optimal pathway to the nearest regional endpoint. CloudFront is designed to handle HTTP protocol meanwhile Global Accelerator is best used for both HTTP and non-HTTP protocols such as TCP and UDP. so i think A is a better answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 708097,
          "date": "Mon 31 Oct 2022 01:33",
          "username": "17Master",
          "content": "Failover and fault tolerance - https://aws.amazon.com/es/global-accelerator/faqs/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 706339,
          "date": "Fri 28 Oct 2022 12:06",
          "username": "raffaello44",
          "content": "not C because Route53 points to NLB but it should point to the Cloudfront.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 704887,
          "date": "Wed 26 Oct 2022 19:21",
          "username": "ManoAni",
          "content": "Traffic must be routed with lower latency and deployments running in multiple regions. So its C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 704323,
          "date": "Wed 26 Oct 2022 04:11",
          "username": "iCcma",
          "content": "\\\"C\\\" is very similar to the correct answer, it even sounds good to use Route 53, but it is VoIP not media that is going to be streamed, so cloudFront helps you rule out \\\"C\\\".<br>Correct answer A\\\"\\\"",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 702378,
          "date": "Sun 23 Oct 2022 20:10",
          "username": "sensei705",
          "content": "A is the correct answer as global accelarator performs automatic failover and due to only having 2 anycast IPs it automatically directs users to the closest region (edge location)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 698320,
          "date": "Tue 18 Oct 2022 17:25",
          "username": "GameDad09",
          "content": "A is the correct one.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 695348,
          "date": "Sat 15 Oct 2022 12:52",
          "username": "Valero_",
          "content": "The question indicates that \\\"The company needs to route users to the Region with the lowest latency. The company also needs automated failover between Regions.\\\", so in my opinion, the only answer best fits here is C because of Route 53.<br>But I'm not sure about the CloudFront distribution setting.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 695195,
          "date": "Sat 15 Oct 2022 06:56",
          "username": "KVK16",
          "content": "HTTP /HTTPS - ALB ; TCP and UDP - NLB;<br>Lowest latency routing and more throughput. Also supports failover, uses Anycast Ip addressing- Global Accelerator <br>Caching at Egde Locations - Cloutfront",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 695128,
          "date": "Sat 15 Oct 2022 04:21",
          "username": "Rachness",
          "content": "WS Global Accelerator automatically checks the health of your applications and routes user traffic only to healthy application endpoints. If the health status changes or you make configuration updates, AWS Global Accelerator reacts instantaneously to route your users to the next available endpoint. https://aws.amazon.com/global-accelerator/faqs/",
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
      "question_text": "<p>A development team runs monthly resource-intensive tests on its general purpose Amazon RDS for MySQL DB instance with Performance Insights enabled. The testing lasts for 48 hours once a month and is the only process that uses the database. The team wants to reduce the cost of running the tests without reducing the compute and memory attributes of the DB instance.<br>Which solution meets these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#30",
          "answers": [
            {
              "choice": "<p>A. Stop the DB instance when tests are completed. Restart the DB instance when required.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use an Auto Scaling policy with the DB instance to automatically scale when tests are completed.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a snapshot when tests are completed. Terminate the DB instance and restore the snapshot when required.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the DB instance to a low-capacity instance when tests are completed. Modify the DB instance again when required.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 691245,
          "date": "Mon 10 Oct 2022 16:25",
          "username": "hanhdroid",
          "content": "Answer C, you still pay for storage when an RDS database is stopped",
          "upvote_count": "13",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 723503,
          "date": "Mon 21 Nov 2022 13:59",
          "username": "Wpcorgan",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 708098,
          "date": "Mon 31 Oct 2022 01:37",
          "username": "17Master",
          "content": "is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 695208,
          "date": "Sat 15 Oct 2022 07:28",
          "username": "KVK16",
          "content": "C - Create a manual Snapshot of DB and shift to S3- Standard and Restore form Manual Snapshot when required.<br><br>Not A - By stopping the DB although you are not paying for DB hours you are still paying for Provisioned IOPs , the storage for Stopped DB is more than Snapshot of underlying EBS vol.and Automated Back ups .<br>Not D - Is possible but not MOST cost effective, no need to run the RDS when not needed.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 692724,
          "date": "Wed 12 Oct 2022 08:01",
          "username": "BoboChowArielSchivoJerry84BoboChowRachness",
          "content": "If instance state is stopped, it's not billed.<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.htmlIt's a DB instance, not an EC2 instance. If the DB instance is stopped, you are still paying for the storage.Thanks for your reply.Thank you for your explanationWhile your DB instance is stopped, you are charged for provisioned storage (including Provisioned IOPS)",
          "upvote_count": "17122",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 697432,
          "date": "Mon 17 Oct 2022 15:35",
          "username": "ArielSchivoJerry84BoboChow",
          "content": "It's a DB instance, not an EC2 instance. If the DB instance is stopped, you are still paying for the storage.Thanks for your reply.Thank you for your explanation",
          "upvote_count": "712",
          "selected_answers": ""
        },
        {
          "id": 716551,
          "date": "Sat 12 Nov 2022 09:21",
          "username": "Jerry84",
          "content": "Thanks for your reply.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 706164,
          "date": "Fri 28 Oct 2022 07:35",
          "username": "BoboChow",
          "content": "Thank you for your explanation",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 695131,
          "date": "Sat 15 Oct 2022 04:27",
          "username": "Rachness",
          "content": "While your DB instance is stopped, you are charged for provisioned storage (including Provisioned IOPS)",
          "upvote_count": "2",
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
      "question_text": "<p>A company that hosts its web application on AWS wants to ensure all Amazon EC2 instances. Amazon RDS DB instances. and Amazon Redshift clusters are configured with tags. The company wants to minimize the effort of configuring and operating this check.<br>What should a solutions architect do to accomplish this?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#31",
          "answers": [
            {
              "choice": "<p>A. Use AWS Config rules to define and detect resources that are not properly tagged.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Cost Explorer to display resources that are not properly tagged. Tag those resources manually.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Write API calls to check all resources for proper tag allocation. Periodically run the code on an EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Write API calls to check all resources for proper tag allocation. Schedule an AWS Lambda function through Amazon CloudWatch to periodically run the code.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 723506,
          "date": "Mon 21 Nov 2022 14:02",
          "username": "Wpcorgan",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 719422,
          "date": "Wed 16 Nov 2022 08:19",
          "username": "Buruguduystunstugudunstuy",
          "content": "The correct answer is A. <br>https://docs.aws.amazon.com/config/latest/developerguide/tagging.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 710777,
          "date": "Thu 03 Nov 2022 21:21",
          "username": "backbencher2022",
          "content": "Easiest option is A",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 708100,
          "date": "Mon 31 Oct 2022 01:40",
          "username": "17Master",
          "content": "Is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: R"
        },
        {
          "id": 696470,
          "date": "Sun 16 Oct 2022 21:33",
          "username": "123jhl0",
          "content": "A can do the task and is the one involving less effort.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 692732,
          "date": "Wed 12 Oct 2022 08:07",
          "username": "BoboChow",
          "content": "I think Config works",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 692464,
          "date": "Wed 12 Oct 2022 00:58",
          "username": "Lilibell",
          "content": "The answer is A",
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
      "question_text": "<p>A development team needs to host a website that will be accessed by other teams. The website contents consist of HTML, CSS, client-side JavaScript, and images.<br>Which method is the MOST cost-effective for hosting the website?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#32",
          "answers": [
            {
              "choice": "<p>A. Containerize the website and host it in AWS Fargate.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon S3 bucket and host the website there.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy a web server on an Amazon EC2 instance to host the website.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure an Application Load Balancer with an AWS Lambda target that uses the Express.js framework.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 692782,
          "date": "Wed 12 Oct 2022 08:47",
          "username": "masetromain",
          "content": "Good answer is B: client-side JavaScript. the website is static, so it must be S3.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 723507,
          "date": "Mon 21 Nov 2022 14:03",
          "username": "Wpcorgan",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 708101,
          "date": "Mon 31 Oct 2022 01:41",
          "username": "17Master",
          "content": "Is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 695116,
          "date": "Sat 15 Oct 2022 04:00",
          "username": "ninjawrz",
          "content": "B: Host static website in S3",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 692737,
          "date": "Wed 12 Oct 2022 08:08",
          "username": "BoboChow",
          "content": "HTML, CSS, client-side JavaScript, and images are all static resources.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 692467,
          "date": "Wed 12 Oct 2022 00:59",
          "username": "Lilibell",
          "content": "The answer is B",
          "upvote_count": "2",
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
      "question_text": "<p>A company runs an online marketplace web application on AWS. The application serves hundreds of thousands of users during peak hours. The company needs a scalable, near-real-time solution to share the details of millions of financial transactions with several other internal applications. Transactions also need to be processed to remove sensitive data before being stored in a document database for low-latency retrieval.<br>What should a solutions architect recommend to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#33",
          "answers": [
            {
              "choice": "<p>A. Store the transactions data into Amazon DynamoDB.  Set up a rule in DynamoDB to remove sensitive data from every transaction upon write. Use DynamoDB Streams to share the transactions data with other applications.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Stream the transactions data into Amazon Kinesis Data Firehose to store data in Amazon DynamoDB and Amazon S3. Use AWS Lambda integration with Kinesis Data Firehose to remove sensitive data. Other applications can consume the data stored in Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Stream the transactions data into Amazon Kinesis Data Streams. Use AWS Lambda integration to remove sensitive data from every transaction and then store the transactions data in Amazon DynamoDB.  Other applications can consume the transactions data off the Kinesis data stream.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Store the batched transactions data in Amazon S3 as files. Use AWS Lambda to process every file and remove sensitive data before updating the files in Amazon S3. The Lambda function then stores the data in Amazon DynamoDB.  Other applications can consume transaction files stored in Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 698574,
          "date": "Wed 19 Oct 2022 02:22",
          "username": "JesseeS",
          "content": "The answer is C, becauseFirehose does not suppport DynamoDB and another key word is \\\"data\\\" Kinesis Data Streams is the correct choice. Pay attention to key words. AWS likes to trick you up to make sure you know the services.",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 697437,
          "date": "Mon 17 Oct 2022 15:44",
          "username": "ArielSchivo",
          "content": "I would go for C.  The tricky phrase is \\\"near-real-time solution\\\", pointing to Firehouse, but it can't send data to DynamoDB, so it leaves us with C as best option. <br><br>Kinesis Data Firehose currently supports Amazon S3, Amazon Redshift, Amazon OpenSearch Service, Splunk, Datadog, NewRelic, Dynatrace, Sumologic, LogicMonitor, MongoDB, and HTTP End Point as destinations.<br><br>https://aws.amazon.com/kinesis/data-firehose/faqs/#:~:text=Kinesis%20Data%20Firehose%20currently%20supports,HTTP%20End%20Point%20as%20destinations.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 734613,
          "date": "Sat 03 Dec 2022 18:54",
          "username": "icaniwill",
          "content": "Answer is C.  Kinesis Streams is good for low latency streaming ingested at scale.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 732722,
          "date": "Thu 01 Dec 2022 15:39",
          "username": "9014",
          "content": "It clearly mentions near-real-time so the answer is B.  Firehose support near-real-time and kinesis support real-time data process",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 723510,
          "date": "Mon 21 Nov 2022 14:04",
          "username": "Wpcorgan",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 717095,
          "date": "Sun 13 Nov 2022 05:59",
          "username": "Wajif",
          "content": "Will vote C due to lack of support of DynamoDB in Firehose. Solution A caught my eye for a second but then ignoring it becaue DynamoDB streams would only send data changes to an existing table.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 711682,
          "date": "Sat 05 Nov 2022 11:31",
          "username": "keezbadger",
          "content": "This question is messed up. AWS question points out \\\"Near real time\\\" which points to Kinesis Firehose and then went ahead to mess it up with a solution support pointing to DynamoDB which is inaccurate and leave us with the C option with Kinesis Data Stream, which is a \\\"real time\\\" streams.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 695539,
          "date": "Sat 15 Oct 2022 18:55",
          "username": "Gatt",
          "content": "A and D are out since they are bad answers.<br>B is impossible as Kinesis Firehose cannot directly store data in DynamoDB. <br>This only leaves C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 695275,
          "date": "Sat 15 Oct 2022 10:15",
          "username": "KVK16",
          "content": "B vs C <br>B : Pro- Sensitive information removal by Lambda , near real-time<br>Con - Ingesting into Dynamo DB although has low latencyis complex and other application using S3 for data<br> <br>C: Pro - Other Apps using data off DB Streams<br>Con : Sensitive data removal lambda , near real-time <br>My Pick is B for being more managed service - a Rule of thumb",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 694489,
          "date": "Fri 14 Oct 2022 06:32",
          "username": "BoboChow",
          "content": "https://docs.aws.amazon.com/zh_cn/streams/latest/dev/tutorial-stock-data-lambda.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 694366,
          "date": "Fri 14 Oct 2022 02:06",
          "username": "340trunkhawk",
          "content": "Please explain C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 694022,
          "date": "Thu 13 Oct 2022 17:06",
          "username": "Sinaneosherculian_effortSinaneos",
          "content": "Near-real-time directly points to kinesis firehose, it's fully managed and scalable, along with dynamoDB.  Transforming data with lambda function integration is one of its main use cases. Therefore the answer has got to be B <br>https://aws.amazon.com/kinesis/data-firehose/faqs/?nc=sn&loc=5It's C.  There is no support for Firehose to DynamoDB. that's correct, I missed that point, thanks :)",
          "upvote_count": "122",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 694361,
          "date": "Fri 14 Oct 2022 01:52",
          "username": "herculian_effortSinaneos",
          "content": "It's C.  There is no support for Firehose to DynamoDB. that's correct, I missed that point, thanks :)",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 701868,
          "date": "Sun 23 Oct 2022 04:40",
          "username": "Sinaneos",
          "content": "that's correct, I missed that point, thanks :)",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 692471,
          "date": "Wed 12 Oct 2022 01:02",
          "username": "Lilibell",
          "content": "The answer is C",
          "upvote_count": "4",
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
      "question_text": "<p>A company hosts its multi-tier applications on AWS. For compliance, governance, auditing, and security, the company must track configuration changes on its AWS resources and record a history of API calls made to these resources.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#34",
          "answers": [
            {
              "choice": "<p>A. Use AWS CloudTrail to track configuration changes and AWS Config to record API calls.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Config to track configuration changes and AWS CloudTrail to record API calls.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Config to track configuration changes and Amazon CloudWatch to record API calls.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS CloudTrail to track configuration changes and Amazon CloudWatch to record API calls.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 702901,
          "date": "Mon 24 Oct 2022 12:01",
          "username": "airraid2010",
          "content": "CloudTrail - Track user activity and API call history.<br>Config - Assess, audits, and evaluates the configuration and relationships of tag resources.<br><br>Therefore, the answer is B",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 723512,
          "date": "Mon 21 Nov 2022 14:04",
          "username": "Wpcorgan",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 700982,
          "date": "Fri 21 Oct 2022 16:09",
          "username": "bansalhp",
          "content": "The answer is B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 699192,
          "date": "Wed 19 Oct 2022 18:33",
          "username": "Evangelia",
          "content": "bbbbbbbb",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 692749,
          "date": "Wed 12 Oct 2022 08:18",
          "username": "tubtab",
          "content": "bbbbbbbb",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 692473,
          "date": "Wed 12 Oct 2022 01:04",
          "username": "Lilibell",
          "content": "The answer is B",
          "upvote_count": "2",
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
      "question_text": "<p>A company is preparing to launch a public-facing web application in the AWS Cloud. The architecture consists of Amazon EC2 instances within a VPC behind an Elastic Load Balancer (ELB). A third-party service is used for the DNS. The company's solutions architect must recommend a solution to detect and protect against large-scale DDoS attacks.<br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#35",
          "answers": [
            {
              "choice": "<p>A. Enable Amazon GuardDuty on the account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable Amazon Inspector on the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable AWS Shield and assign Amazon Route 53 to it.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable AWS Shield Advanced and assign the ELB to it.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 694490,
          "date": "Fri 14 Oct 2022 06:38",
          "username": "BoboChow",
          "content": "AWS Shield Advanced provides expanded DDoS attack protection for your Amazon EC2 instances, Elastic Load Balancing load balancers, CloudFront distributions, Route 53 hosted zones, and AWS Global Accelerator standard accelerators.",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 695124,
          "date": "Sat 15 Oct 2022 04:11",
          "username": "ninjawrz",
          "content": "Answer is D<br>C is incorrect because question says Third party DNS and route 53 is AWS proprietary",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 723515,
          "date": "Mon 21 Nov 2022 14:05",
          "username": "Wpcorgan",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 719851,
          "date": "Wed 16 Nov 2022 18:05",
          "username": "Buruguduystunstugudunstuy",
          "content": "Large-scale DDoS attacks = AWS Shield Advanced<br>The correct answer is D<br>https://aws.amazon.com/shield/faqs/<br>https://docs.aws.amazon.com/whitepapers/latest/aws-best-practices-ddos-resiliency/elastic-load-balancing-bp6.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 717096,
          "date": "Sun 13 Nov 2022 06:03",
          "username": "Wajif",
          "content": "Same reasoning as given by Ninjawarz",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 692475,
          "date": "Wed 12 Oct 2022 01:06",
          "username": "Lilibell",
          "content": "The answer is D",
          "upvote_count": "3",
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
      "question_text": "<p>A company is building an application in the AWS Cloud. The application will store data in Amazon S3 buckets in two AWS Regions. The company must use an AWS Key Management Service (AWS KMS) customer managed key to encrypt all data that is stored in the S3 buckets. The data in both S3 buckets must be encrypted and decrypted with the same KMS key. The data and the key must be stored in each of the two Regions.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#36",
          "answers": [
            {
              "choice": "<p>A. Create an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure replication between the S3 buckets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a customer managed multi-Region KMS key. Create an S3 bucket in each Region. Configure replication between the S3 buckets. Configure the application to use the KMS key with client-side encryption.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a customer managed KMS key and an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure replication between the S3 buckets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a customer managed KMS key and an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with AWS KMS keys (SSE-KMS). Configure replication between the S3 buckets.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 691176,
          "date": "Mon 10 Oct 2022 15:24",
          "username": "pooppantsmagazzTuLeTuLeJayBee65",
          "content": "KMS Multi-region keys are required https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.htmlAmazon S3 cross-region replication decrypts and re-encrypts data under a KMS key in the destination Region, even when replicating objects protected by a multi-Region key. So stating that Amazon S3 cross-region replication decrypts and re-encrypts data under a KMS key in the destination Region, even when replicating objects protected by a multi-Region key is required is incorrect@magazz: it's not true then. Based on the document from AWS https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-config-for-kms-objects.html , we will need to setup the replication rule with destination KMS. In order to have the key available in more than 2, then multi-region key should be required. But I'm still not favor option B - we can use server-side when why wasting effort to do client side encryption.I would say it's true... Not sure the previous one say \\\"not true\\\" :D. It's not clear what you are saying. Are you saying that B is correct or D is correct?",
          "upvote_count": "112111",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 722996,
          "date": "Sun 20 Nov 2022 21:47",
          "username": "magazzTuLeTuLeJayBee65",
          "content": "Amazon S3 cross-region replication decrypts and re-encrypts data under a KMS key in the destination Region, even when replicating objects protected by a multi-Region key. So stating that Amazon S3 cross-region replication decrypts and re-encrypts data under a KMS key in the destination Region, even when replicating objects protected by a multi-Region key is required is incorrect@magazz: it's not true then. Based on the document from AWS https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-config-for-kms-objects.html , we will need to setup the replication rule with destination KMS. In order to have the key available in more than 2, then multi-region key should be required. But I'm still not favor option B - we can use server-side when why wasting effort to do client side encryption.I would say it's true... Not sure the previous one say \\\"not true\\\" :D. It's not clear what you are saying. Are you saying that B is correct or D is correct?",
          "upvote_count": "2111",
          "selected_answers": ""
        },
        {
          "id": 727892,
          "date": "Sun 27 Nov 2022 03:19",
          "username": "TuLeTuLeJayBee65",
          "content": "@magazz: it's not true then. Based on the document from AWS https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-config-for-kms-objects.html , we will need to setup the replication rule with destination KMS. In order to have the key available in more than 2, then multi-region key should be required. But I'm still not favor option B - we can use server-side when why wasting effort to do client side encryption.I would say it's true... Not sure the previous one say \\\"not true\\\" :D. It's not clear what you are saying. Are you saying that B is correct or D is correct?",
          "upvote_count": "111",
          "selected_answers": ""
        },
        {
          "id": 727893,
          "date": "Sun 27 Nov 2022 03:20",
          "username": "TuLeJayBee65",
          "content": "I would say it's true... Not sure the previous one say \\\"not true\\\" :D. It's not clear what you are saying. Are you saying that B is correct or D is correct?",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 732787,
          "date": "Thu 01 Dec 2022 16:52",
          "username": "JayBee65",
          "content": "It's not clear what you are saying. Are you saying that B is correct or D is correct?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 692906,
          "date": "Wed 12 Oct 2022 11:35",
          "username": "KJath3cookieBoboChowBoboChowmattlaiNewptoneNewptone",
          "content": "Cannot be A - question says customer managed key<br>Cannot B - client side encryption is operational overhead<br>Cannot C -as it says SSE-S3 instead of customer managed<br>so the answer is D though it required one time setup of keysHow does client side encryption increase OPERATIONAL overhead? Do you think every connected client is sitting there with gpg cli, decrypting/encrypting every packet that comes in/out? No, it's done via SDK -> https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/introduction.html<br><br>The correct answer is B because that's the only way to actually get the same key across multiple regions with minimal operational overheadThe data in both S3 buckets must be encrypted and decrypted with the same KMS key. <br>AWS KMS supports multi-Region keys, which are AWS KMS keys in different AWS Regions that can be used interchangeably – as though you had the same key in multiple Regions. <br>\\\"as though\\\" means it's different.<br>SoI agree with Bkey change across regions unless you use multi-Region keysfun joke, if u dont do encryption on client side, where else could it be?It could be server side. For client side, the application need to finish the encryption and decryption by itself. So S3 object encryption on the server side is less operational overhead. https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingClientSideEncryption.html<br><br>But for option B, the major issue is if you create KMS keys in 2 regions, they can not be the same.Sorry for the typo, I mean option D. ",
          "upvote_count": "7331112",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 720210,
          "date": "Thu 17 Nov 2022 05:52",
          "username": "th3cookie",
          "content": "How does client side encryption increase OPERATIONAL overhead? Do you think every connected client is sitting there with gpg cli, decrypting/encrypting every packet that comes in/out? No, it's done via SDK -> https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/introduction.html<br><br>The correct answer is B because that's the only way to actually get the same key across multiple regions with minimal operational overhead",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 694498,
          "date": "Fri 14 Oct 2022 06:55",
          "username": "BoboChowBoboChow",
          "content": "The data in both S3 buckets must be encrypted and decrypted with the same KMS key. <br>AWS KMS supports multi-Region keys, which are AWS KMS keys in different AWS Regions that can be used interchangeably – as though you had the same key in multiple Regions. <br>\\\"as though\\\" means it's different.<br>SoI agree with Bkey change across regions unless you use multi-Region keys",
          "upvote_count": "31",
          "selected_answers": ""
        },
        {
          "id": 694503,
          "date": "Fri 14 Oct 2022 07:02",
          "username": "BoboChow",
          "content": "key change across regions unless you use multi-Region keys",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 693495,
          "date": "Thu 13 Oct 2022 03:21",
          "username": "mattlaiNewptoneNewptone",
          "content": "fun joke, if u dont do encryption on client side, where else could it be?It could be server side. For client side, the application need to finish the encryption and decryption by itself. So S3 object encryption on the server side is less operational overhead. https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingClientSideEncryption.html<br><br>But for option B, the major issue is if you create KMS keys in 2 regions, they can not be the same.Sorry for the typo, I mean option D. ",
          "upvote_count": "112",
          "selected_answers": ""
        },
        {
          "id": 712756,
          "date": "Mon 07 Nov 2022 03:12",
          "username": "NewptoneNewptone",
          "content": "It could be server side. For client side, the application need to finish the encryption and decryption by itself. So S3 object encryption on the server side is less operational overhead. https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingClientSideEncryption.html<br><br>But for option B, the major issue is if you create KMS keys in 2 regions, they can not be the same.Sorry for the typo, I mean option D. ",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 712757,
          "date": "Mon 07 Nov 2022 03:15",
          "username": "Newptone",
          "content": "Sorry for the typo, I mean option D. ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 730052,
          "date": "Tue 29 Nov 2022 08:29",
          "username": "workatpace",
          "content": "The main point asked in the question is to use same kms key, if that is not in the answer rest of the facts are not viable.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 720912,
          "date": "Thu 17 Nov 2022 23:06",
          "username": "Mikkka",
          "content": "BBBBBB",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 716514,
          "date": "Sat 12 Nov 2022 08:17",
          "username": "manu427",
          "content": "Should be D (cant b B as B is client side encryption , but question says SSE-KMS)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 710827,
          "date": "Fri 04 Nov 2022 00:38",
          "username": "backbencher2022",
          "content": "B is the correct answer because of same key usage requirements at both regions and Multi-Region keys in AWS KMS fulfills this requirement. For more details check - https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 705996,
          "date": "Fri 28 Oct 2022 02:14",
          "username": "The_Body",
          "content": "B.  “The company must use an AWS Key Management Service (AWS KMS) customer managed key to encrypt all data that is stored in the S3 buckets”. Customer managed keys can be multi-region. SSE-S3 doesn’t allow for customer managed key, AWS S3 manages the key— server side encryption.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 704899,
          "date": "Wed 26 Oct 2022 19:34",
          "username": "ManoAni",
          "content": "Catch is multi-region keys and those must be same. so its B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 703173,
          "date": "Mon 24 Oct 2022 17:46",
          "username": "Six_Fingered_JoseBoboChow",
          "content": "answer should be D as question explicitly mentioned the use of AWS KMS key for the s3 encryption, while C is only mentioning the creation of the key but only encrypting with S3 encryptionThe data in both S3 buckets must be encrypted and decrypted with the same KMS key.<br>D creates KMS key in each region,which means to create two key in total",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 706196,
          "date": "Fri 28 Oct 2022 08:29",
          "username": "BoboChow",
          "content": "The data in both S3 buckets must be encrypted and decrypted with the same KMS key.<br>D creates KMS key in each region,which means to create two key in total",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 691449,
          "date": "Mon 10 Oct 2022 21:01",
          "username": "Ekie",
          "content": "B is right answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 689484,
          "date": "Sat 08 Oct 2022 17:51",
          "username": "CloudGuru99",
          "content": "B is the correct answer",
          "upvote_count": "2",
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
      "question_text": "<p>A company recently launched a variety of new workloads on Amazon EC2 instances in its AWS account. The company needs to create a strategy to access and administer the instances remotely and securely. The company needs to implement a repeatable process that works with native AWS services and follows the AWS Well-Architected Framework.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#37",
          "answers": [
            {
              "choice": "<p>A. Use the EC2 serial console to directly access the terminal interface of each instance for administration.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Attach the appropriate IAM role to each existing instance and new instance. Use AWS Systems Manager Session Manager to establish a remote SSH session.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an administrative SSH key pair. Load the public key into each EC2 instance. Deploy a bastion host in a public subnet to provide a tunnel for administration of each instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Establish an AWS Site-to-Site VPN connection. Instruct administrators to use their local on-premises machines to connect directly to the instances by using SSH keys across the VPN tunnel.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 723521,
          "date": "Mon 21 Nov 2022 14:07",
          "username": "Wpcorgan",
          "content": "B is correct for me",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 719125,
          "date": "Tue 15 Nov 2022 21:59",
          "username": "xeun88",
          "content": "B is the right answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 715912,
          "date": "Fri 11 Nov 2022 10:30",
          "username": "KeldJayBee65Keld17Master17Master",
          "content": "The answer is C, there is no indication of which type of EC2 Windows/Linux.<br>SSH only works for WindowsSession Manager provides support for Windows, Linux, and macOS from a single tool, so Bonly works for *Linux*Is correct C - https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html ------><br>Cross-platform support for Windows, Linux, and macOS<br><br>Session Manager provides support for Windows, Linux, and macOS from a single tool. For example, you don't need to use an SSH client for Linux and macOS managed nodes or an RDP connection for Windows Server managed nodes.B is correct",
          "upvote_count": "11121",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 732793,
          "date": "Thu 01 Dec 2022 16:57",
          "username": "JayBee65",
          "content": "Session Manager provides support for Windows, Linux, and macOS from a single tool, so B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 715913,
          "date": "Fri 11 Nov 2022 10:31",
          "username": "Keld17Master17Master",
          "content": "only works for *Linux*Is correct C - https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html ------><br>Cross-platform support for Windows, Linux, and macOS<br><br>Session Manager provides support for Windows, Linux, and macOS from a single tool. For example, you don't need to use an SSH client for Linux and macOS managed nodes or an RDP connection for Windows Server managed nodes.B is correct",
          "upvote_count": "121",
          "selected_answers": ""
        },
        {
          "id": 719587,
          "date": "Wed 16 Nov 2022 12:53",
          "username": "17Master17Master",
          "content": "Is correct C - https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html ------><br>Cross-platform support for Windows, Linux, and macOS<br><br>Session Manager provides support for Windows, Linux, and macOS from a single tool. For example, you don't need to use an SSH client for Linux and macOS managed nodes or an RDP connection for Windows Server managed nodes.B is correct",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 719588,
          "date": "Wed 16 Nov 2022 12:54",
          "username": "17Master",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 706211,
          "date": "Fri 28 Oct 2022 08:45",
          "username": "BoboChowNightduckyJayBee65",
          "content": "How can Session Manager benefit my organization? <br>Ans: No open inbound ports and no need to manage bastion hosts or SSH keys<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.htmlDo you know what from the question is it Windows or Linux EC2. I think not so how you want to do SSH session for Windows?<br>Answer is CSession Manager provides support for Windows, Linux, and macOS from a single tool",
          "upvote_count": "311",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 718647,
          "date": "Tue 15 Nov 2022 10:41",
          "username": "NightduckyJayBee65",
          "content": "Do you know what from the question is it Windows or Linux EC2. I think not so how you want to do SSH session for Windows?<br>Answer is CSession Manager provides support for Windows, Linux, and macOS from a single tool",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 732795,
          "date": "Thu 01 Dec 2022 16:58",
          "username": "JayBee65",
          "content": "Session Manager provides support for Windows, Linux, and macOS from a single tool",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 703313,
          "date": "Mon 24 Oct 2022 21:33",
          "username": "ManoAniJayBee65",
          "content": "The answer is C, they mentioned that it must be native service, option B is not a service, it is one of the option to connect to instances.? Its a service available on AWS, so a native service",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 732794,
          "date": "Thu 01 Dec 2022 16:58",
          "username": "JayBee65",
          "content": "? Its a service available on AWS, so a native service",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 703174,
          "date": "Mon 24 Oct 2022 17:48",
          "username": "Six_Fingered_JoseSix_Fingered_Jose",
          "content": "> works with native AWS services<br>think they want you to use AWS service so B seems to make the most sense.<br>and also least operational overheadin real world scenario C seems to be most common solution thought..",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 703175,
          "date": "Mon 24 Oct 2022 17:49",
          "username": "Six_Fingered_Jose",
          "content": "in real world scenario C seems to be most common solution thought..",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 695134,
          "date": "Sat 15 Oct 2022 04:29",
          "username": "ninjawrz",
          "content": "B for least operational overhead<br><br>but bastion is for best practice",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 694041,
          "date": "Thu 13 Oct 2022 17:32",
          "username": "Sinaneos",
          "content": "It's either B or C, but B requires less operational overhead (just attaching the IAM role), so I'd pick B",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 692800,
          "date": "Wed 12 Oct 2022 09:17",
          "username": "masetromainAbhiJo",
          "content": "good answer is C ! Bastion is all time the good answer for this case.<br><br>https://aws.amazon.com/fr/quickstart/architecture/linux-bastion/B is correct with less overhead in the question",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 716395,
          "date": "Sat 12 Nov 2022 01:29",
          "username": "AbhiJo",
          "content": "B is correct with less overhead in the question",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 692761,
          "date": "Wed 12 Oct 2022 08:26",
          "username": "tubtab",
          "content": "I think b is the correct answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 691276,
          "date": "Mon 10 Oct 2022 17:02",
          "username": "TaiTran1994Lilibell",
          "content": "I think C is the correct answerthey say the least operational overhead so B",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 692481,
          "date": "Wed 12 Oct 2022 01:15",
          "username": "Lilibell",
          "content": "they say the least operational overhead so B",
          "upvote_count": "3",
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
      "question_text": "<p>A company is hosting a static website on Amazon S3 and is using Amazon Route 53 for DNS. The website is experiencing increased demand from around the world. The company must decrease latency for users who access the website.<br>Which solution meets these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#38",
          "answers": [
            {
              "choice": "<p>A. Replicate the S3 bucket that contains the website to all AWS Regions. Add Route 53 geolocation routing entries.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Provision accelerators in AWS Global Accelerator. Associate the supplied IP addresses with the S3 bucket. Edit the Route 53 entries to point to the IP addresses of the accelerators.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Add an Amazon CloudFront distribution in front of the S3 bucket. Edit the Route 53 entries to point to the CloudFront distribution.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable S3 Transfer Acceleration on the bucket. Edit the Route 53 entries to point to the new endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 732146,
          "date": "Thu 01 Dec 2022 02:30",
          "username": "DasCertDasCert",
          "content": "Isn't Transfer Acceleration the same thing? I mean, what's the difference between C and D?ok, I got the answer to this:<br>In short, Transfer Acceleration is for Writes and CloudFront is for Reads.",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 732148,
          "date": "Thu 01 Dec 2022 02:31",
          "username": "DasCert",
          "content": "ok, I got the answer to this:<br>In short, Transfer Acceleration is for Writes and CloudFront is for Reads.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 723522,
          "date": "Mon 21 Nov 2022 14:08",
          "username": "Wpcorgan",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 719761,
          "date": "Wed 16 Nov 2022 15:55",
          "username": "17Master",
          "content": "ok CloudFront",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 719127,
          "date": "Tue 15 Nov 2022 22:03",
          "username": "xeun88",
          "content": "C is right",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 712993,
          "date": "Mon 07 Nov 2022 12:08",
          "username": "Mordans",
          "content": "ANSWER C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 695136,
          "date": "Sat 15 Oct 2022 04:30",
          "username": "ninjawrz",
          "content": "C: Cloudfront",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 692801,
          "date": "Wed 12 Oct 2022 09:19",
          "username": "masetromain",
          "content": "of course cloudfront it's the answer",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#39",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company maintains a searchable repository of items on its website. The data is stored in an Amazon RDS for MySQL database table that contains more than 10 million rows. The database has 2 TB of General Purpose SSD storage. There are millions of updates against this data every day through the company's website.<br>The company has noticed that some insert operations are taking 10 seconds or longer. The company has determined that the database storage performance is the problem.<br>Which solution addresses this performance issue?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#39",
          "answers": [
            {
              "choice": "<p>A. Change the storage type to Provisioned IOPS SSD. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Change the DB instance to a memory optimized instance class.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Change the DB instance to a burstable performance instance class.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable Multi-AZ RDS read replicas with MySQL native asynchronous replication.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 732771,
          "date": "Thu 01 Dec 2022 16:30",
          "username": "hpipit",
          "content": "A is the correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 723524,
          "date": "Mon 21 Nov 2022 14:09",
          "username": "Wpcorgan",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 720948,
          "date": "Fri 18 Nov 2022 00:02",
          "username": "17Master",
          "content": "SSD is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 718521,
          "date": "Tue 15 Nov 2022 06:51",
          "username": "TonyghostR05",
          "content": "SSD is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 714248,
          "date": "Wed 09 Nov 2022 04:15",
          "username": "luvincanada",
          "content": "A is correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 710830,
          "date": "Fri 04 Nov 2022 00:51",
          "username": "backbencher2022",
          "content": "A is the correct answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 703176,
          "date": "Mon 24 Oct 2022 17:50",
          "username": "Six_Fingered_Jose",
          "content": "> The company has determined that the database storage performance is the problem.<br>A seems to be the most feasible answer here",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 700323,
          "date": "Thu 20 Oct 2022 23:44",
          "username": "Sarvar89",
          "content": "i is indicating that its storage solution has a problem, so i think A should be correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 699385,
          "date": "Thu 20 Oct 2022 00:27",
          "username": "Anon9132656",
          "content": "A<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 695815,
          "date": "Sun 16 Oct 2022 03:00",
          "username": "Incognito013",
          "content": "Answer: A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 695137,
          "date": "Sat 15 Oct 2022 04:33",
          "username": "ninjawrz",
          "content": "A: IOPS<br>Provisioned IOPS – Provisioned IOPS storage is designed to meet the needs of I/O-intensive workloads, particularly database workloads, that require low I/O latency and consistent I/O throughput.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 691185,
          "date": "Mon 10 Oct 2022 15:29",
          "username": "pooppants",
          "content": "A https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 691183,
          "date": "Mon 10 Oct 2022 15:28",
          "username": "pooppantspooppantspooppants",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.htmlignore, answer is b. I misclickedugh! A! the answer is A",
          "upvote_count": "116",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 691186,
          "date": "Mon 10 Oct 2022 15:29",
          "username": "pooppantspooppants",
          "content": "ignore, answer is b. I misclickedugh! A! the answer is A",
          "upvote_count": "16",
          "selected_answers": ""
        },
        {
          "id": 691187,
          "date": "Mon 10 Oct 2022 15:29",
          "username": "pooppants",
          "content": "ugh! A! the answer is A",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 690651,
          "date": "Mon 10 Oct 2022 04:06",
          "username": "tuloveuBoboChow",
          "content": "There are millions of updates against this data every day. The storage Provisioned IOPS SSD should be served.You hit the point",
          "upvote_count": "41",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 694525,
          "date": "Fri 14 Oct 2022 07:35",
          "username": "BoboChow",
          "content": "You hit the point",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 689486,
          "date": "Sat 08 Oct 2022 17:55",
          "username": "CloudGuru99",
          "content": "A is the correct answer",
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
      "question_text": "<p>A company has thousands of edge devices that collectively generate 1 TB of status alerts each day. Each alert is approximately 2 KB in size. A solutions architect needs to implement a solution to ingest and store the alerts for future analysis.<br>The company wants a highly available solution. However, the company needs to minimize costs and does not want to manage additional infrastructure. Additionally, the company wants to keep 14 days of data available for immediate analysis and archive any data older than 14 days.<br>What is the MOST operationally efficient solution that meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#40",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon Kinesis Data Firehose delivery stream to ingest the alerts. Configure the Kinesis Data Firehose stream to deliver the alerts to an Amazon S3 bucket. Set up an S3 Lifecycle configuration to transition data to Amazon S3 Glacier after 14 days.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Launch Amazon EC2 instances across two Availability Zones and place them behind an Elastic Load Balancer to ingest the alerts. Create a script on the EC2 instances that will store the alerts in an Amazon S3 bucket. Set up an S3 Lifecycle configuration to transition data to Amazon S3 Glacier after 14 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon Kinesis Data Firehose delivery stream to ingest the alerts. Configure the Kinesis Data Firehose stream to deliver the alerts to an Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster. Set up the Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster to take manual snapshots every day and delete data from the cluster that is older than 14 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon Simple Queue Service (Amazon SQS) standard queue to ingest the alerts, and set the message retention period to 14 days. Configure consumers to poll the SQS queue, check the age of the message, and analyze the message data as needed. If the message is 14 days old, the consumer should copy the message to an Amazon S3 bucket and delete the message from the SQS queue.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 694050,
          "date": "Thu 13 Oct 2022 17:36",
          "username": "Sinaneos",
          "content": "Definitely A, it's the most operationally efficient compared to D, which requires a lot of code and infrastructure to maintain. A is mostly managed (firehose is fully managed and S3 lifecycles are also managed)",
          "upvote_count": "15",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 697021,
          "date": "Mon 17 Oct 2022 09:00",
          "username": "123jhl0",
          "content": "Only A makes sense operationally.<br>If you think D, just consider what is needed to move the message from SQS to S3... you are polling daily 14 TB to take out 1 TB. .. that's no operationally efficient at all.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 732159,
          "date": "Thu 01 Dec 2022 02:39",
          "username": "DasCert",
          "content": "If we can't move data from standard s3 to glacier before 30 days, as described here:<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-transition-general-considerations.html<br>Then A is wrong.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 723526,
          "date": "Mon 21 Nov 2022 14:11",
          "username": "Wpcorgan",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 695818,
          "date": "Sun 16 Oct 2022 03:04",
          "username": "Incognito013",
          "content": "A<br><br>Stroring the data in S3 and assign a policy to transfer the data to Glacier after 14 days",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 695494,
          "date": "Sat 15 Oct 2022 17:15",
          "username": "KVK16Harry_Newyd_hArielSchivo",
          "content": "In most of the questions, first check the answers that are feasible and then check for the Well-Architected pillar emphasis in the question and hints pointing to it in solving Qs of SAA<br>D: SQS vs Kinesis <br>Both do support retention period 14 days , max record size [256KB and 1MB ]and <br> Total Data produced is 1TB/day <br><br>In Question there is \\\"store the alerts for future analysis\\\" \\\"highly available solution. However, the company needs to minimize costs and does not want to manage additional infrastructure\\\"\\\"MOST operationally efficient solution \\\" <br>No requirement for real time and ordered processing. Also need for LEAST OPERATIONAL head. In Case of Kinesis one has to be watchful of shards capacity so no scope for Autoscaling like SQS and Cost Basis. No need for multi-consumers only one place to store S3.SQS- fully serverless<br>So I think its SQS . Incase there are even multi-consumers still consider SQS-SNS model.Looks like a lot of contributors are forgetting that one cannot transition S3 objects that are less than 30 days old.<br>D is most appropriate.Nope, can't get immediate access to any data you want with SQS. Additionally, if you do somehow you have to stop calling the delete message API call for 14 hours, and then...This is great, but Kinesis and S3 are managed services, so it should be option A as that one is the most operational.",
          "upvote_count": "4112",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 728875,
          "date": "Mon 28 Nov 2022 09:19",
          "username": "Harry_New",
          "content": "Looks like a lot of contributors are forgetting that one cannot transition S3 objects that are less than 30 days old.<br>D is most appropriate.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 698321,
          "date": "Tue 18 Oct 2022 17:28",
          "username": "yd_h",
          "content": "Nope, can't get immediate access to any data you want with SQS. Additionally, if you do somehow you have to stop calling the delete message API call for 14 hours, and then...",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 697450,
          "date": "Mon 17 Oct 2022 15:54",
          "username": "ArielSchivo",
          "content": "This is great, but Kinesis and S3 are managed services, so it should be option A as that one is the most operational.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 695139,
          "date": "Sat 15 Oct 2022 04:35",
          "username": "ninjawrz",
          "content": "This should be A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 693863,
          "date": "Thu 13 Oct 2022 13:56",
          "username": "tubtab",
          "content": "ddddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 693274,
          "date": "Wed 12 Oct 2022 19:14",
          "username": "logicalbinninjawrzmattlaiUdoyen",
          "content": "A cannot be the right answer.<br>Reason - Fireshose cannot be used to store data. Only Kinesis Data Streams has that ability as it focuses on ingesting and storing data streams while Kinesis Data Firehose focuses on delivering data streams to select destinations.<br>SQS on the other hand can store data upto 14 days.<br>So option D is correct.you will be storing the data in S3 then with life cycle Glacier deep archive after 14 daysoption a does not have anything to do with storing dataIs \\\"deliver\\\" not storing?",
          "upvote_count": "1311",
          "selected_answers": ""
        },
        {
          "id": 695138,
          "date": "Sat 15 Oct 2022 04:35",
          "username": "ninjawrz",
          "content": "you will be storing the data in S3 then with life cycle Glacier deep archive after 14 days",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 693503,
          "date": "Thu 13 Oct 2022 03:33",
          "username": "mattlaiUdoyen",
          "content": "option a does not have anything to do with storing dataIs \\\"deliver\\\" not storing?",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 731394,
          "date": "Wed 30 Nov 2022 12:26",
          "username": "Udoyen",
          "content": "Is \\\"deliver\\\" not storing?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 692486,
          "date": "Wed 12 Oct 2022 01:24",
          "username": "Lilibell",
          "content": "The answer is A",
          "upvote_count": "5",
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
      "question_text": "<p>A company's application integrates with multiple software-as-a-service (SaaS) sources for data collection. The company runs Amazon EC2 instances to receive the data and to upload the data to an Amazon S3 bucket for analysis. The same EC2 instance that receives and uploads the data also sends a notification to the user when an upload is complete. The company has noticed slow application performance and wants to improve the performance as much as possible.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#41",
          "answers": [
            {
              "choice": "<p>A. Create an Auto Scaling group so that EC2 instances can scale out. Configure an S3 event notification to send events to an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is complete.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon AppFlow flow to transfer data between each SaaS source and the S3 bucket. Configure an S3 event notification to send events to an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is complete.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon EventBridge (Amazon CloudWatch Events) rule for each SaaS source to send output data. Configure the S3 bucket as the rule's target. Create a second EventBridge (Cloud Watch Events) rule to send events when the upload to the S3 bucket is complete. Configure an Amazon Simple Notification Service (Amazon SNS) topic as the second rule's target.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a Docker container to use instead of an EC2 instance. Host the containerized application on Amazon Elastic Container Service (Amazon ECS). Configure Amazon CloudWatch Container Insights to send events to an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is complete.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 723539,
          "date": "Mon 21 Nov 2022 14:26",
          "username": "Wpcorgan",
          "content": "B is Correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 722413,
          "date": "Sun 20 Nov 2022 06:47",
          "username": "Wajif",
          "content": "Choosing B as it sounds simpler.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 710205,
          "date": "Thu 03 Nov 2022 04:02",
          "username": "peneloco",
          "content": "AppFlow is made for SaaS",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 709367,
          "date": "Tue 01 Nov 2022 19:13",
          "username": "rob74",
          "content": "AppFlow , managed service SAAS-->Least effort",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 703180,
          "date": "Mon 24 Oct 2022 17:59",
          "username": "Six_Fingered_JoseSix_Fingered_Jose",
          "content": "This question just screams AppFlow (SaaS integration)<br>https://aws.amazon.com/appflow/configuring Auto-Scaling also takes time when compared to AppFlow,<br>in AWS's words \\\"in just a few clicks\\\"<br>> Amazon AppFlow is a fully managed integration service that enables you to securely transfer data between Software-as-a-Service (SaaS) applications like Salesforce, SAP, Zendesk, Slack, and ServiceNow, and AWS services like Amazon S3 and Amazon Redshift, in just a few clicks",
          "upvote_count": "33",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 703181,
          "date": "Mon 24 Oct 2022 18:02",
          "username": "Six_Fingered_Jose",
          "content": "configuring Auto-Scaling also takes time when compared to AppFlow,<br>in AWS's words \\\"in just a few clicks\\\"<br>> Amazon AppFlow is a fully managed integration service that enables you to securely transfer data between Software-as-a-Service (SaaS) applications like Salesforce, SAP, Zendesk, Slack, and ServiceNow, and AWS services like Amazon S3 and Amazon Redshift, in just a few clicks",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 702831,
          "date": "Mon 24 Oct 2022 10:27",
          "username": "Sinaneos",
          "content": "Appflow works very well with SaaS platforms, makes a lot more sense in this scenario. Using an ASG might improve the performance, but here it asks for THE BEST PERFORMANCE, hence ASG might not fix the underlying issue in an efficient manner.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 701877,
          "date": "Sun 23 Oct 2022 05:09",
          "username": "dave9994",
          "content": "A is the answer, as it is the LEAST ops. overhead as asked. Minimal changes on current system.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 698328,
          "date": "Tue 18 Oct 2022 17:46",
          "username": "yd_hyd_h",
          "content": "Amazon AppFlow is a bi-directional data transfer service; however, not all source-destination combinations are currently supported. The question does not imply any SaaS providers. It could beany SaaS provider (https://docs.aws.amazon.com/appflow/latest/userguide/requirements.html)I will go with A.  LEAST operational overhead to add an ASG to the existing ec2 instances let S3 handle the notification part.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 698330,
          "date": "Tue 18 Oct 2022 17:48",
          "username": "yd_h",
          "content": "I will go with A.  LEAST operational overhead to add an ASG to the existing ec2 instances let S3 handle the notification part.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 697038,
          "date": "Mon 17 Oct 2022 09:16",
          "username": "123jhl0",
          "content": "Amazon AppFlow is a fully managed integration service that enables you to securely transfer data between Software-as-a-Service (SaaS) applications like Salesforce, SAP, Zendesk, Slack, and ServiceNow, and AWS services like Amazon S3 and Amazon Redshift, in just a few clicks.<br>https://aws.amazon.com/appflow/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 695499,
          "date": "Sat 15 Oct 2022 17:24",
          "username": "KVK16",
          "content": "Amazon AppFlow is a fully managed integration service that enables you to securely transfer data between Software-as-a-Service (SaaS) applications like Salesforce, Marketo, Slack, and ServiceNow, and AWS services like Amazon S3 and Amazon Redshift, in just a few clicks. With AppFlow, you can run data flows at nearly any scale at the frequency you choose - on a schedule, in response to a business event, or on demand.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 694534,
          "date": "Fri 14 Oct 2022 08:05",
          "username": "BoboChowBoboChowalvarez100",
          "content": "How EventBridge loads data toS3?I chang to B<br>https://aws.amazon.com/appflow/?nc1=h_lsYes I agree it is B. ",
          "upvote_count": "242",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 694541,
          "date": "Fri 14 Oct 2022 08:16",
          "username": "BoboChowalvarez100",
          "content": "I chang to B<br>https://aws.amazon.com/appflow/?nc1=h_lsYes I agree it is B. ",
          "upvote_count": "42",
          "selected_answers": ""
        },
        {
          "id": 695698,
          "date": "Sat 15 Oct 2022 22:11",
          "username": "alvarez100",
          "content": "Yes I agree it is B. ",
          "upvote_count": "2",
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
      "question_text": "<p>A company runs a highly available image-processing application on Amazon EC2 instances in a single VPC.  The EC2 instances run inside several subnets across multiple Availability Zones. The EC2 instances do not communicate with each other. However, the EC2 instances download images from Amazon S3 and upload images to Amazon S3 through a single NAT gateway. The company is concerned about data transfer charges.<br>What is the MOST cost-effective way for the company to avoid Regional data transfer charges?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#42",
          "answers": [
            {
              "choice": "<p>A. Launch the NAT gateway in each Availability Zone.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Replace the NAT gateway with a NAT instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy a gateway VPC endpoint for Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provision an EC2 Dedicated Host to run the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 734650,
          "date": "Sat 03 Dec 2022 20:15",
          "username": "shyam_yadav",
          "content": "Option is C bcz Gateway endpoints provide reliable connectivity to Amazon S3 and DynamoDB without requiring an internet gateway or a NAT device for your VPC.  Gateway endpoints do not enable AWS PrivateLink. There is no additional charge for using gateway endpoints",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 725169,
          "date": "Wed 23 Nov 2022 14:39",
          "username": "Shasha1",
          "content": "C is correct <br>https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 723540,
          "date": "Mon 21 Nov 2022 14:27",
          "username": "Wpcorgan",
          "content": "C isCorrect",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 715785,
          "date": "Fri 11 Nov 2022 07:19",
          "username": "justsaysid",
          "content": "This link clearly states that \\\"VPC gateway endpoints allow communication to Amazon S3 and Amazon DynamoDB without incurring data transfer charges within the same Region\\\". On the other hand NAT gateway incurs additional data processing charges. Hence, C is the correct answer.<br>https://aws.amazon.com/blogs/architecture/overview-of-data-transfer-costs-for-common-architectures/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 712968,
          "date": "Mon 07 Nov 2022 10:39",
          "username": "dduque10TuLe",
          "content": "Why not A?using the NAT gateway you will be charge for data transfer out. When VPC gateway endpoint in place for S3, the service will use internal route inside AWS to send data to S3 -> no charge at all.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 727901,
          "date": "Sun 27 Nov 2022 03:51",
          "username": "TuLe",
          "content": "using the NAT gateway you will be charge for data transfer out. When VPC gateway endpoint in place for S3, the service will use internal route inside AWS to send data to S3 -> no charge at all.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 705521,
          "date": "Thu 27 Oct 2022 14:08",
          "username": "airraid2010",
          "content": "C is the answer",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 697785,
          "date": "Tue 18 Oct 2022 03:33",
          "username": "Jahangeer_17KADSMWajif",
          "content": "If we deploy VPC Gateway Endpoint then data will be transfer through AWS network only.Though will it not incur regional data transfer cost ? Here the question is to avoid regional data transfer costsHere it also says \\\"The company is concerned about data transfer charges\\\". They just want to reduce costs hence it is C. ",
          "upvote_count": "212",
          "selected_answers": ""
        },
        {
          "id": 713421,
          "date": "Tue 08 Nov 2022 03:10",
          "username": "KADSMWajif",
          "content": "Though will it not incur regional data transfer cost ? Here the question is to avoid regional data transfer costsHere it also says \\\"The company is concerned about data transfer charges\\\". They just want to reduce costs hence it is C. ",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 722415,
          "date": "Sun 20 Nov 2022 06:52",
          "username": "Wajif",
          "content": "Here it also says \\\"The company is concerned about data transfer charges\\\". They just want to reduce costs hence it is C. ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 695144,
          "date": "Sat 15 Oct 2022 04:57",
          "username": "Rachness",
          "content": "Gateway Endpoint",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 692490,
          "date": "Wed 12 Oct 2022 01:31",
          "username": "Lilibell",
          "content": "The answer is C",
          "upvote_count": "3",
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
      "question_text": "<p>A company has an on-premises application that generates a large amount of time-sensitive data that is backed up to Amazon S3. The application has grown and there are user complaints about internet bandwidth limitations. A solutions architect needs to design a long-term solution that allows for both timely backups to Amazon S3 and with minimal impact on internet connectivity for internal users.<br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#43",
          "answers": [
            {
              "choice": "<p>A. Establish AWS VPN connections and proxy all traffic through a VPC gateway endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Establish a new AWS Direct Connect connection and direct backup traffic through this new connection.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Order daily AWS Snowball devices. Load the data onto the Snowball devices and return the devices to AWS each day.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Submit a support ticket through the AWS Management Console. Request the removal of S3 service limits from the account.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 694056,
          "date": "Thu 13 Oct 2022 17:44",
          "username": "Sinaneos",
          "content": "A: VPN also goes through the internet and uses the bandwidth<br>C: daily Snowball transfer is not really a long-term solution when it comes to cost and efficiency<br>D: S3 limits don't change anything here<br><br>So the answer is B",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 723542,
          "date": "Mon 21 Nov 2022 14:28",
          "username": "Wpcorgan",
          "content": "B is Correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 705525,
          "date": "Thu 27 Oct 2022 14:11",
          "username": "airraid2010",
          "content": "B is the answer",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 695507,
          "date": "Sat 15 Oct 2022 17:46",
          "username": "KVK16KVK16",
          "content": "AWS Direct Connect and AWS Snowball Edge are primarily classified as \\\"Cloud Dedicated Network Connection\\\" and \\\"Data Transfer\\\" tools respectively.<br><br>Even if we say it takes 1/5th of cost for transfer of 250 TB data from on-prem to AWS in a week.Direct Connect vs Snowball",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 695509,
          "date": "Sat 15 Oct 2022 17:47",
          "username": "KVK16",
          "content": "Direct Connect vs Snowball",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 694858,
          "date": "Fri 14 Oct 2022 16:46",
          "username": "oxfordcommaa",
          "content": "B.  <br>The keyword here is long term solution.<br>Direct connect is a dedicated connection between on-prem and AWS, this is the way to ensure stable network connectivity that will not wax and wane like internet connectivity.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 692491,
          "date": "Wed 12 Oct 2022 01:31",
          "username": "Lilibell",
          "content": "The answer is B",
          "upvote_count": "1",
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
      "question_text": "<p>A company has an Amazon S3 bucket that contains critical data. The company must protect the data from accidental deletion.<br>Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#44",
          "answers": [
            {
              "choice": "<p>A. Enable versioning on the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable MFA Delete on the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a bucket policy on the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable default encryption on the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a lifecycle policy for the objects in the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 690838,
          "date": "Mon 10 Oct 2022 09:49",
          "username": "Uhrien",
          "content": "The correct solution is AB, as you can see here:<br><br>https://aws.amazon.com/it/premiumsupport/knowledge-center/s3-audit-deleted-missing-objects/<br><br>It states the following:<br><br>To prevent or mitigate future accidental deletions, consider the following features:<br><br>Enable versioning to keep historical versions of an object.<br>Enable Cross-Region Replication of objects.<br>Enable MFA delete to require multi-factor authentication (MFA) when deleting an object version.",
          "upvote_count": "18",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 734356,
          "date": "Sat 03 Dec 2022 11:50",
          "username": "hpipit",
          "content": "A & B, THE CORRECT RESPONSE",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 732831,
          "date": "Thu 01 Dec 2022 17:25",
          "username": "hpipit",
          "content": "A and B, 100% CORRECT",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 723544,
          "date": "Mon 21 Nov 2022 14:29",
          "username": "Wpcorgan",
          "content": "A and B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 710093,
          "date": "Wed 02 Nov 2022 22:41",
          "username": "Solarch",
          "content": "AB, Versioning keeps a copy and can be retrieved. MFA ensures you have proper authorization to delete an item.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 709279,
          "date": "Tue 01 Nov 2022 17:34",
          "username": "ricenguyen208",
          "content": "AB for sure =))))))))))))))",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 706450,
          "date": "Fri 28 Oct 2022 14:32",
          "username": "raffaello44",
          "content": "there is no relation between cncryption and delete protection. so D is discarded.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 705778,
          "date": "Thu 27 Oct 2022 19:38",
          "username": "ukwafabian",
          "content": "There is no way it is not A and B. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 705532,
          "date": "Thu 27 Oct 2022 14:15",
          "username": "airraid2010",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html<br>You can use the S3 Versioning feature to preserve, retrieve, and restore every version of every object stored in your buckets<br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiFactorAuthenticationDelete.html<br>When working with S3 Versioning in Amazon S3 buckets, you can optionally add another layer of security by configuring a bucket to enable MFA (multi-factor authentication) delete.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 703184,
          "date": "Mon 24 Oct 2022 18:05",
          "username": "Six_Fingered_Jose",
          "content": "obviously AB here",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 697789,
          "date": "Tue 18 Oct 2022 03:37",
          "username": "Jahangeer_17",
          "content": "Correct answer is A & B. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 696207,
          "date": "Sun 16 Oct 2022 13:25",
          "username": "Incognito013",
          "content": "The answers are A and B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 695145,
          "date": "Sat 15 Oct 2022 05:00",
          "username": "Rachness",
          "content": "AB-version and MFA to ensure.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 694539,
          "date": "Fri 14 Oct 2022 08:12",
          "username": "rajendradba",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/s3-audit-deleted-missing-objects/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 691072,
          "date": "Mon 10 Oct 2022 13:41",
          "username": "tt79",
          "content": "AB is correct.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 690662,
          "date": "Mon 10 Oct 2022 04:37",
          "username": "tuloveu",
          "content": "A,B is my option.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 690013,
          "date": "Sun 09 Oct 2022 11:08",
          "username": "Testtest123321",
          "content": "I BELIVE A,C IS CORRECT!",
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
      "question_text": "<p>A company has a data ingestion workflow that consists of the following:<br>• An Amazon Simple Notification Service (Amazon SNS) topic for notifications about new data deliveries<br>• An AWS Lambda function to process the data and record metadata<br>The company observes that the ingestion workflow fails occasionally because of network connectivity issues. When such a failure occurs, the Lambda function does not ingest the corresponding data unless the company manually reruns the job.<br>Which combination of actions should a solutions architect take to ensure that the Lambda function ingests all data in the future? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#45",
          "answers": [
            {
              "choice": "<p>A. Deploy the Lambda function in multiple Availability Zones.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon Simple Queue Service (Amazon SQS) queue, and subscribe it to the SNS topic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Increase the CPU and memory that are allocated to the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Increase provisioned throughput for the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Modify the Lambda function to read from an Amazon Simple Queue Service (Amazon SQS) queue.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 696243,
          "date": "Sun 16 Oct 2022 14:48",
          "username": "Incognito013",
          "content": "A, C, D options are out, since Lambda is fully managed service which provides high availability and scalability by its own<br><br>Answers are B and E",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 694057,
          "date": "Thu 13 Oct 2022 17:45",
          "username": "Sinaneos",
          "content": "BE so that the lambda function reads the SQS queue and nothing gets lost",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 723546,
          "date": "Mon 21 Nov 2022 14:31",
          "username": "Wpcorgan",
          "content": "B and E",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 703186,
          "date": "Mon 24 Oct 2022 18:08",
          "username": "Six_Fingered_Jose",
          "content": "B andE is the obvious answer here,<br>SQS ensures that message does not get lost",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 700301,
          "date": "Thu 20 Oct 2022 23:05",
          "username": "D2wSix_Fingered_Jose",
          "content": "Why not ABlambda is serverless, it does not need to be multi-AZ..",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 703185,
          "date": "Mon 24 Oct 2022 18:06",
          "username": "Six_Fingered_Jose",
          "content": "lambda is serverless, it does not need to be multi-AZ..",
          "upvote_count": "1",
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
      "question_text": "<p>A company has an application that provides marketing services to stores. The services are based on previous purchases by store customers. The stores upload transaction data to the company through SFTP, and the data is processed and analyzed to generate new marketing offers. Some of the files can exceed 200 GB in size.<br>Recently, the company discovered that some of the stores have uploaded files that contain personally identifiable information (PII) that should not have been included. The company wants administrators to be alerted if PII is shared again. The company also wants to automate remediation.<br>What should a solutions architect do to meet these requirements with the LEAST development effort?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#46",
          "answers": [
            {
              "choice": "<p>A. Use an Amazon S3 bucket as a secure transfer point. Use Amazon Inspector to scan the objects in the bucket. If objects contain PII, trigger an S3 Lifecycle policy to remove the objects that contain PII.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use an Amazon S3 bucket as a secure transfer point. Use Amazon Macie to scan the objects in the bucket. If objects contain PII, use Amazon Simple Notification Service (Amazon SNS) to trigger a notification to the administrators to remove the objects that contain PII.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Implement custom scanning algorithms in an AWS Lambda function. Trigger the function when objects are loaded into the bucket. If objects contain PII, use Amazon Simple Notification Service (Amazon SNS) to trigger a notification to the administrators to remove the objects that contain PII.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Implement custom scanning algorithms in an AWS Lambda function. Trigger the function when objects are loaded into the bucket. If objects contain PII, use Amazon Simple Email Service (Amazon SES) to trigger a notification to the administrators and trigger an S3 Lifecycle policy to remove the meats that contain PII.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 716972,
          "date": "Sun 13 Nov 2022 00:17",
          "username": "GattHoraii",
          "content": "I have a problem with answer B.  The question says: \\\"automate remediation\\\". B says that you inform the administrator and he removes the data manually, that's not automating remediation. Very weird, that would mean that D is correct - but it's so much harder to implement.That is correct, \\\"Automate remediation\\\" is not possible if you chose the B",
          "upvote_count": "91",
          "selected_answers": ""
        },
        {
          "id": 729035,
          "date": "Mon 28 Nov 2022 12:35",
          "username": "Horaii",
          "content": "That is correct, \\\"Automate remediation\\\" is not possible if you chose the B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 729566,
          "date": "Mon 28 Nov 2022 20:45",
          "username": "jhxetc",
          "content": "D is the only choice that satisfies the conditions of the question.<br><br>Source: https://aws.amazon.com/blogs/machine-learning/protect-pii-using-amazon-s3-object-lambda-to-process-and-modify-data-during-retrieval/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 729564,
          "date": "Mon 28 Nov 2022 20:43",
          "username": "jhxetc",
          "content": "Answering B only addresses the PII part of the question. It does not automate remediation. Furthermore, Macie publishes findings to EventBridge - which can trigger an SNS notification, but it would not be as straightforward as the wording of the question. <br><br>I'm guessing the question and/or answer wording may vary slightly on actual tests which would make an answer including Macie the correct one. However, in this scenario, D is the option that satisfies all of the the conditions.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 723549,
          "date": "Mon 21 Nov 2022 14:32",
          "username": "Wpcorgan",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 718424,
          "date": "Tue 15 Nov 2022 03:09",
          "username": "kanweng",
          "content": "https://aws.amazon.com/blogs/security/use-macie-to-discover-sensitive-data-as-part-of-automated-data-pipelines/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 717333,
          "date": "Sun 13 Nov 2022 14:39",
          "username": "grzeevgrzeev",
          "content": "Amazon Macie is a data security and data privacy service that uses machine learning (ML) and pattern matching to discover and protect your sensitive dataMacie automatically detects a large and growing list of sensitive data types, including personally identifiable information (PII) such as names, addresses, and credit card numbers. It also gives you constant visibility of the data security and data privacy of your data stored in Amazon S3",
          "upvote_count": "32",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 717337,
          "date": "Sun 13 Nov 2022 14:44",
          "username": "grzeev",
          "content": "Macie automatically detects a large and growing list of sensitive data types, including personally identifiable information (PII) such as names, addresses, and credit card numbers. It also gives you constant visibility of the data security and data privacy of your data stored in Amazon S3",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 709856,
          "date": "Wed 02 Nov 2022 15:16",
          "username": "17Master",
          "content": "https://aws.amazon.com/es/macie/faq/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 698797,
          "date": "Wed 19 Oct 2022 10:03",
          "username": "yd_h17Master",
          "content": "FYI: Macie doesn't directly integrate with SNS. <br>https://docs.aws.amazon.com/macie/latest/user/findings-monitor.html<br>\\\"To support integration with other services and systems, Macie publishes findings to Amazon EventBridge as finding events.\\\"Here - https://aws.amazon.com/es/macie/faq/",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 709855,
          "date": "Wed 02 Nov 2022 15:15",
          "username": "17Master",
          "content": "Here - https://aws.amazon.com/es/macie/faq/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 696244,
          "date": "Sun 16 Oct 2022 14:54",
          "username": "Incognito013",
          "content": "Macie is the solution to detect PII data<br><br>Answer B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 695579,
          "date": "Sat 15 Oct 2022 19:57",
          "username": "ninjawrz",
          "content": "B amazon macie <br>https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 692930,
          "date": "Wed 12 Oct 2022 12:02",
          "username": "masetromain",
          "content": "Good answer is B : Amazon Macie is key<br><br>https://aws.amazon.com/fr/macie/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#47",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs guaranteed Amazon EC2 capacity in three specific Availability Zones in a specific AWS Region for an upcoming event that will last 1 week.<br>What should the company do to guarantee the EC2 capacity?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#47",
          "answers": [
            {
              "choice": "<p>A. Purchase Reserved Instances that specify the Region needed.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an On-Demand Capacity Reservation that specifies the Region needed.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Purchase Reserved Instances that specify the Region and three Availability Zones needed.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an On-Demand Capacity Reservation that specifies the Region and three Availability Zones needed.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 696245,
          "date": "Sun 16 Oct 2022 14:56",
          "username": "Incognito013",
          "content": "Reserved instances are for long term so on-demand will be the right choice - Answer D",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 732692,
          "date": "Thu 01 Dec 2022 15:07",
          "username": "9014",
          "content": "Yes answer is D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 727241,
          "date": "Sat 26 Nov 2022 04:36",
          "username": "Wajif",
          "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html#capacity-reservations-differences",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 723550,
          "date": "Mon 21 Nov 2022 14:32",
          "username": "Wpcorgan",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 721096,
          "date": "Fri 18 Nov 2022 07:14",
          "username": "koreanmonkey",
          "content": "Absolutely D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 719163,
          "date": "Tue 15 Nov 2022 23:22",
          "username": "xeun88",
          "content": "D is the correct answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 716305,
          "date": "Fri 11 Nov 2022 21:26",
          "username": "MyNameIsJulien",
          "content": "Ans D for sure",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 709862,
          "date": "Wed 02 Nov 2022 15:28",
          "username": "17Master",
          "content": "D.  Create an On-Demand Capacity Reservation that specifies the Region and three Availability Zones needed",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 695603,
          "date": "Sat 15 Oct 2022 20:23",
          "username": "ninjawrz",
          "content": "Reserve instances: You will have to pay for the whole term (1 year or 3years) which is not cost effective<br>So answer is<br>D: on demand capacity region<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 695514,
          "date": "Sat 15 Oct 2022 18:00",
          "username": "KVK16",
          "content": "on-demand Capacity reservation for a specific AZ for gamedays",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#48",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's website uses an Amazon EC2 instance store for its catalog of items. The company wants to make sure that the catalog is highly available and that the catalog is stored in a durable location.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#48",
          "answers": [
            {
              "choice": "<p>A. Move the catalog to Amazon ElastiCache for Redis.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy a larger EC2 instance with a larger instance store.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Move the catalog from the instance store to Amazon S3 Glacier Deep Archive.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Move the catalog to an Amazon Elastic File System (Amazon EFS) file system.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 703192,
          "date": "Mon 24 Oct 2022 18:17",
          "username": "Six_Fingered_Jose",
          "content": "keyword is \\\"durable\\\" location<br>A and B is ephemeral storage <br>C takes forever so is not HA,<br>that leaves D",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 692797,
          "date": "Wed 12 Oct 2022 09:07",
          "username": "rajendradba",
          "content": "Elasticache is in Memory, EFS is for durability",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 735157,
          "date": "Sun 04 Dec 2022 16:00",
          "username": "9014",
          "content": "D is correct answer for sure",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 723554,
          "date": "Mon 21 Nov 2022 14:34",
          "username": "Wpcorgan",
          "content": "D is Correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 721415,
          "date": "Fri 18 Nov 2022 17:35",
          "username": "renekton",
          "content": "Answer is A. <br>The company is using instance store which is ephemeral storage and they're looking for highly available storage.<br><br>ElastiCache for Redis is provides high availability and provides automatic failover by detecting primary node failures and promoting a replica to be primary with minimal impact.<br>https://aws.amazon.com/elasticache/redis/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 712685,
          "date": "Sun 06 Nov 2022 23:51",
          "username": "mabotegaEKA_CloudGod",
          "content": "Hello, answer A is correct with Redis AOF enabled (it is not by default), it will warmup the cache if one node would reboot.<br><br>https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/RedisAOF. htmlA can only be correct if Redis append-only file feature (AOF) feature is enabled. Answer is D.  EFS service is designed to be highly scalable, highly available, and highly durable",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 729672,
          "date": "Mon 28 Nov 2022 23:41",
          "username": "EKA_CloudGod",
          "content": "A can only be correct if Redis append-only file feature (AOF) feature is enabled. Answer is D.  EFS service is designed to be highly scalable, highly available, and highly durable",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 709874,
          "date": "Wed 02 Nov 2022 15:42",
          "username": "17Master",
          "content": "But, only Linux - https://aws.amazon.com/getting-started/tutorials/create-network-file-system/?nc1=h_ls",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 696247,
          "date": "Sun 16 Oct 2022 15:01",
          "username": "Incognito013",
          "content": "instance store is not durable, if it goes down then instance store data is lost.<br>EFS is the only option here that will provide high availability and durability, plus it can be accessed by multiple instances at the same time",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 694061,
          "date": "Thu 13 Oct 2022 17:48",
          "username": "Sinaneos",
          "content": "EFS for sure",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 693775,
          "date": "Thu 13 Oct 2022 11:41",
          "username": "SAA003",
          "content": "D for EFS",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 692291,
          "date": "Tue 11 Oct 2022 19:19",
          "username": "MXB05",
          "content": "EFS is the only durable solution here.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 691854,
          "date": "Tue 11 Oct 2022 09:11",
          "username": "hanhdroid",
          "content": "I would say D for EFS",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#49",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company stores call transcript files on a monthly basis. Users access the files randomly within 1 year of the call, but users access the files infrequently after 1 year. The company wants to optimize its solution by giving users the ability to query and retrieve files that are less than 1-year-old as quickly as possible. A delay in retrieving older files is acceptable.<br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#49",
          "answers": [
            {
              "choice": "<p>A. Store individual files with tags in Amazon S3 Glacier Instant Retrieval. Query the tags to retrieve the files from S3 Glacier Instant Retrieval.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Store individual files in Amazon S3 Intelligent-Tiering. Use S3 Lifecycle policies to move the files to S3 Glacier Flexible Retrieval after 1 year. Query and retrieve the files that are in Amazon S3 by using Amazon Athena. Query and retrieve the files that are in S3 Glacier by using S3 Glacier Select.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Store individual files with tags in Amazon S3 Standard storage. Store search metadata for each archive in Amazon S3 Standard storage. Use S3 Lifecycle policies to move the files to S3 Glacier Instant Retrieval after 1 year. Query and retrieve the files by searching for metadata from Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Store individual files in Amazon S3 Standard storage. Use S3 Lifecycle policies to move the files to S3 Glacier Deep Archive after 1 year. Store search metadata in Amazon RDS. Query the files from Amazon RDS. Retrieve the files from S3 Glacier Deep Archive.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 692941,
          "date": "Wed 12 Oct 2022 12:19",
          "username": "masetromain",
          "content": "I think the answer is B:<br>Users access the files randomly<br><br>S3 Intelligent-Tiering is the ideal storage class for data with unknown, changing, or unpredictable access patterns, independent of object size or retention period. You can use S3 Intelligent-Tiering as the default storage class for virtually any workload, especially data lakes, data analytics, new applications, and user-generated content.<br><br>https://aws.amazon.com/fr/s3/storage-classes/intelligent-tiering/",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 692501,
          "date": "Wed 12 Oct 2022 01:44",
          "username": "Lilibell",
          "content": "The answer is B",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 733325,
          "date": "Fri 02 Dec 2022 02:47",
          "username": "Incognito013",
          "content": "B - Keyword \\\"Random\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 732878,
          "date": "Thu 01 Dec 2022 18:15",
          "username": "hpipit",
          "content": "B is the correct and best choice",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 732689,
          "date": "Thu 01 Dec 2022 15:06",
          "username": "9014",
          "content": "of course the answer is a B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 727250,
          "date": "Sat 26 Nov 2022 05:09",
          "username": "Wajif",
          "content": "Between B and C I will choose B because it gives a way to query the file data using Athena. There is no way given in C to query the file but just the ability to retreive.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 723807,
          "date": "Mon 21 Nov 2022 18:58",
          "username": "ocbn3wby",
          "content": "https://aws.amazon.com/s3/pricing/<br><br>A: S3 Glacier Instant Retrieval*** - For long-lived archive data accessed once a quarter with instant retrieval in milliseconds\t<br><br>While the users access the files randomly (not specified once/quarter) - Answer A does not fit. <br><br>B: When we are talking about S3 Intelligent Tiering - this is the most cost effective. However, Glacier Select defeats the purpose: it's focused on extracting data FROM a bigger file and not the file itself. <br>https://aws.amazon.com/blogs/aws/s3-glacier-select/<br>D: Involves RDS, increases the cost. Not much difference between Deep archive and instant retrieval (D vs C). <br><br>I'd go for C. ",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 723555,
          "date": "Mon 21 Nov 2022 14:35",
          "username": "Wpcorgan",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 722534,
          "date": "Sun 20 Nov 2022 11:31",
          "username": "pepgua",
          "content": "B is correct because it's the most cost effective solutionoverall for random access (S3 Intelligent-tiering) for first year AND cheaper option for S3 Glacier storage classes after one year (Glacier-flexible is cheaper than Glacier Instant)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 721022,
          "date": "Fri 18 Nov 2022 03:20",
          "username": "hollie",
          "content": "I don't think S3 Glacier can do metadata search. Thus B is more reasonable.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 717338,
          "date": "Sun 13 Nov 2022 14:49",
          "username": "grzeev",
          "content": "S3 Intelligent-Tiering is the first cloud object storage class that delivers automatic cost savings by moving data between two access tiers — frequent access and infrequent access — when access patterns change, and is ideal for data with unknown or changing access patterns",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 717012,
          "date": "Sun 13 Nov 2022 01:31",
          "username": "Adrianjavier",
          "content": "B for sure",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 716833,
          "date": "Sat 12 Nov 2022 18:30",
          "username": "AbhiJo",
          "content": "Flexible tiering wins",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 716669,
          "date": "Sat 12 Nov 2022 12:45",
          "username": "mabotega",
          "content": "https://aws.amazon.com/pt/blogs/aws/s3-glacier-select/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 713439,
          "date": "Tue 08 Nov 2022 03:44",
          "username": "KADSM",
          "content": "Answer should be C only.:Reasons:<br>File should be accessed as quickly as possible within 1 year. S3 Standard may be the choice. Overall solution should be cost efficient<br>A -> Uses Glacier Instant retreival but the put/get costs are more than S3 standard. <br>B -> Uses Intelligent tiering which may have overhead cost for intelligently doing the tiers. Glacier flexible retreival may have additional costs<br>D -> Ruled out - they are using RDS which may incur additional costs compared to other options.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 709887,
          "date": "Wed 02 Nov 2022 16:00",
          "username": "17Master",
          "content": "S3 Intelligent-Tiering + Glacier Flexible Retrieval is more cost-effective.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 707054,
          "date": "Sat 29 Oct 2022 10:00",
          "username": "SimonPark",
          "content": "The answer looks B",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#50",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a production workload that runs on 1,000 Amazon EC2 Linux instances. The workload is powered by third-party software. The company needs to patch the third-party software on all EC2 instances as quickly as possible to remediate a critical security vulnerability.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#50",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Lambda function to apply the patch to all EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure AWS Systems Manager Patch Manager to apply the patch to all EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Schedule an AWS Systems Manager maintenance window to apply the patch to all EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Systems Manager Run Command to run a custom command that applies the patch to all EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 696419,
          "date": "Sun 16 Oct 2022 19:33",
          "username": "brushek",
          "content": "It can't be B !<br>Look: https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-how-it-works-installation.html<br><br>and You need to patch third-party software ! It doesn't apply for yum,apt or dnf.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 723556,
          "date": "Mon 21 Nov 2022 14:35",
          "username": "Wpcorgan",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 721123,
          "date": "Fri 18 Nov 2022 08:01",
          "username": "koreanmonkey",
          "content": "Because system use third-party software, it needs custom command. D is right.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 716835,
          "date": "Sat 12 Nov 2022 18:31",
          "username": "tinyfoot",
          "content": "The primary focus of Patch Manager, a capability of AWS Systems Manager, is on installing operating systems security-related updates on managed nodes. By default, Patch Manager doesn't install all available patches, but rather a smaller set of patches focused on security. (Ref https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-how-it-works-selection.html)<br><br>Run Command allows you to automate common administrative tasks and perform one-time configuration changes at scale.(Ref https://docs.aws.amazon.com/systems-manager/latest/userguide/execute-remote-commands.html) <br><br>Seems like patch manager is meant for OS level patches and not 3rd party applications. And this falls under run command wheelhouse to carry out one-time configuration changes (update of 3rd part application) at scale.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 714353,
          "date": "Wed 09 Nov 2022 08:02",
          "username": "EKA_CloudGod",
          "content": "I was torn between B and D ad after reviewing docs, I choose D, and here is why;<br>\\\"For Linux-based operating system types that report a severity level for patches, Patch Manager uses the severity level reported by the software publisher for the update notice or individual patch. Patch Manager doesn't derive severity levels from third-party sources, such as the Common Vulnerability Scoring System (CVSS), or from metrics released by the National Vulnerability Database (NVD).\\\"<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 709896,
          "date": "Wed 02 Nov 2022 16:09",
          "username": "17Master",
          "content": "https://docs.aws.amazon.com/es_es/systems-manager/latest/userguide/execute-remote-commands.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 703212,
          "date": "Mon 24 Oct 2022 18:53",
          "username": "Six_Fingered_Jose",
          "content": "agree with D here",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 701908,
          "date": "Sun 23 Oct 2022 06:42",
          "username": "dave9994Six_Fingered_Josedave999417Master",
          "content": "C should be the answer.question says as quickly as possible, C is not the best solution herebased on this : https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-maintenance.htmlin your link it says: Commands in Run Command, a capability of Systems Manager - For more information about Run Command, see AWS Systems Manager Run Command. ANS is D.  <br>:)",
          "upvote_count": "1112",
          "selected_answers": ""
        },
        {
          "id": 703211,
          "date": "Mon 24 Oct 2022 18:53",
          "username": "Six_Fingered_Jose",
          "content": "question says as quickly as possible, C is not the best solution here",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 701909,
          "date": "Sun 23 Oct 2022 06:43",
          "username": "dave999417Master",
          "content": "based on this : https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-maintenance.htmlin your link it says: Commands in Run Command, a capability of Systems Manager - For more information about Run Command, see AWS Systems Manager Run Command. ANS is D.  <br>:)",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 709894,
          "date": "Wed 02 Nov 2022 16:08",
          "username": "17Master",
          "content": "in your link it says: Commands in Run Command, a capability of Systems Manager - For more information about Run Command, see AWS Systems Manager Run Command. ANS is D.  <br>:)",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 697461,
          "date": "Mon 17 Oct 2022 16:07",
          "username": "ArielSchivo",
          "content": "It's not B for sure since you have to path 3rd party software and Systems Manager Patch Manager just works for OS owned software. I would go for D. ",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 695928,
          "date": "Sun 16 Oct 2022 05:48",
          "username": "KVK16",
          "content": "Patch Manager: It automates the process of patching managed nodes with both security-related and other types of updates.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 695727,
          "date": "Sat 15 Oct 2022 22:56",
          "username": "FFORTUNATE",
          "content": "its B. <br><br>https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 695608,
          "date": "Sat 15 Oct 2022 20:37",
          "username": "ninjawrz",
          "content": "Looks B to me",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 692945,
          "date": "Wed 12 Oct 2022 12:29",
          "username": "masetromainSinaneos",
          "content": "I think the answer is B, but I'm not sure.<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.htmlif you are not sure, pls don't vote, we need reliable answers in the website.<br>Reason B is wrong is that the systems manager patch operations are made for OS-related software, the question specifies \\\"3rd party software\\\", therefore we need a custom command, given in D",
          "upvote_count": "27",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 702844,
          "date": "Mon 24 Oct 2022 10:36",
          "username": "Sinaneos",
          "content": "if you are not sure, pls don't vote, we need reliable answers in the website.<br>Reason B is wrong is that the systems manager patch operations are made for OS-related software, the question specifies \\\"3rd party software\\\", therefore we need a custom command, given in D",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 691222,
          "date": "Mon 10 Oct 2022 15:57",
          "username": "pooppants",
          "content": "This is a tough one. The only thing i can find is https://docs.aws.amazon.com/systems-manager/latest/userguide/about-windows-app-patching.html which supports answer D. ",
          "upvote_count": "4",
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
      "question_text": "<p>A company is developing an application that provides order shipping statistics for retrieval by a REST API. The company wants to extract the shipping statistics, organize the data into an easy-to-read HTML format, and send the report to several email addresses at the same time every morning.<br>Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#51",
          "answers": [
            {
              "choice": "<p>A. Configure the application to send the data to Amazon Kinesis Data Firehose.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon Simple Email Service (Amazon SES) to format the data and to send the report by email.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled event that invokes an AWS Glue job to query the application's API for the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled event that invokes an AWS Lambda function to query the application's API for the data.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Store the application data in Amazon S3. Create an Amazon Simple Notification Service (Amazon SNS) topic as an S3 event destination to send the report by email.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 696300,
          "date": "Sun 16 Oct 2022 16:46",
          "username": "whosawsome",
          "content": "You can use SES to format the report in HTML.<br>https://docs.aws.amazon.com/ses/latest/dg/send-email-formatted.html",
          "upvote_count": "13",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 723564,
          "date": "Mon 21 Nov 2022 14:53",
          "username": "Wpcorgan",
          "content": "B and D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 722510,
          "date": "Sun 20 Nov 2022 10:46",
          "username": "pepgua",
          "content": "We seem to agree option D is correct. The second choice is between B (SES) and E (SNS). SES is the best answer as it's specifically designed for Email service. SNS can also deliver notifications via email but it's not designed for that HTML format. BD is correct.<br>https://stackoverflow.com/questions/32241928/sending-html-content-in-aws-snssimple-notification-service-emails-notification",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 711854,
          "date": "Sat 05 Nov 2022 16:30",
          "username": "baiy",
          "content": "Not C because there is no direct connector available for Glue to connect to the internet world (REST API), you can set up a VPC, with a public and a private subnet.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 710854,
          "date": "Fri 04 Nov 2022 01:56",
          "username": "backbencher2022",
          "content": "B&D are the only 2 correct options. If you are choosing option E then you missed the daily morning schedule requirement mentioned in the question which cant be achieved with S3 events for SNS. Event Bridge can used to configure scheduled events (every morning in this case). Option B fulfills the email in HTML format requirement (by SES) and D fulfills every morning schedule event requirement (by EventBridge)",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 710536,
          "date": "Thu 03 Nov 2022 14:52",
          "username": "santosh2316",
          "content": "You can use SES to format the report in HTML.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 703220,
          "date": "Mon 24 Oct 2022 19:06",
          "username": "Six_Fingered_Jose",
          "content": "i think BC or CE<br>Glue should be the winner here with for ETL<br>i personally think SES is the winner here too because of this<br>https://docs.aws.amazon.com/ses/latest/dg/send-email-formatted.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 700389,
          "date": "Fri 21 Oct 2022 01:50",
          "username": "BoboChow",
          "content": "About sending the report to several email addresses, I would rather go for SNS than SES;<br>About extracting the shipping statistics, I would rather go for Lambda than Glue;",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 696014,
          "date": "Sun 16 Oct 2022 07:39",
          "username": "KVK16Newptone",
          "content": "Glue cannot output HTML Report, you'll need a Lambda. Also there is need to invoke the Lambda at a specific time - CRON Job - Thumbrule - Cloudwatch Events + Lambda. The reports are stored in S3 and SNS is invoke to email the reports to same selected emails everyday. <br><br>SNS vs SES - <br>SES Cannot extract data and it sends the emails without the consent of the receivers only take verification of the sender <br>Schedule Lambda toYou didn't check SNS limitation:By contrast, Amazon Simple Notification Service (Amazon SNS) is for messaging-oriented applications, the body of an Amazon SNS notification is limited to 8192 characters of UTF-8 strings, and isn't intended to support multimedia content.<br>It does not support \\\"easy-to-read HTML format\\\" email.<br>https://aws.amazon.com/ses/faqs/#Amazon_SES_and_Other_AWS_Services",
          "upvote_count": "32",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 713244,
          "date": "Mon 07 Nov 2022 19:45",
          "username": "Newptone",
          "content": "You didn't check SNS limitation:By contrast, Amazon Simple Notification Service (Amazon SNS) is for messaging-oriented applications, the body of an Amazon SNS notification is limited to 8192 characters of UTF-8 strings, and isn't intended to support multimedia content.<br>It does not support \\\"easy-to-read HTML format\\\" email.<br>https://aws.amazon.com/ses/faqs/#Amazon_SES_and_Other_AWS_Services",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 695729,
          "date": "Sat 15 Oct 2022 23:01",
          "username": "FFORTUNATE",
          "content": "C. E. <br>Glue job is good for ETL (extract transform load).",
          "upvote_count": "2",
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
      "question_text": "<p>A company wants to migrate its on-premises application to AWS. The application produces output files that vary in size from tens of gigabytes to hundreds of terabytes. The application data must be stored in a standard file system structure. The company wants a solution that scales automatically. is highly available, and requires minimum operational overhead.<br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Migrate the application to run as containers on Amazon Elastic Container Service (Amazon ECS). Use Amazon S3 for storage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the application to run as containers on Amazon Elastic Kubernetes Service (Amazon EKS). Use Amazon Elastic Block Store (Amazon EBS) for storage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the application to Amazon EC2 instances in a Multi-AZ Auto Scaling group. Use Amazon Elastic File System (Amazon EFS) for storage.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the application to Amazon EC2 instances in a Multi-AZ Auto Scaling group. Use Amazon Elastic Block Store (Amazon EBS) for storage.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 698131,
          "date": "Tue 18 Oct 2022 12:58",
          "username": "ArielSchivo",
          "content": "EFS is a standard file system, it scales automatically and is highly available.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 694887,
          "date": "Fri 14 Oct 2022 17:53",
          "username": "oxfordcommaa",
          "content": "chose this due to the key word \\\"standard file system\\\"",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 723566,
          "date": "Mon 21 Nov 2022 14:55",
          "username": "Wpcorgan",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 715210,
          "date": "Thu 10 Nov 2022 13:23",
          "username": "pspinelli19",
          "content": "https://www.examtopics.com/discussions/amazon/view/84147-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 700391,
          "date": "Fri 21 Oct 2022 01:57",
          "username": "BoboChow",
          "content": "standard file system => EFS rather than S3",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 698204,
          "date": "Tue 18 Oct 2022 14:00",
          "username": "Kikiokiki",
          "content": "EBS doesn't offer high availability, data is stored in one AZ.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 697628,
          "date": "Mon 17 Oct 2022 20:37",
          "username": "queen101",
          "content": "cCCCCCCCCCC",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 692956,
          "date": "Wed 12 Oct 2022 12:42",
          "username": "masetromain",
          "content": "I have absolutely no idea...<br><br>Output files that vary in size from tens of gigabytes to hundreds of terabytes<br><br>Simit size for a single object:<br>S3 5To TiB<br>https://aws.amazon.com/fr/blogs/aws/amazon-s3-object-size-limit/<br>EBS 64 Tib<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/volume_constraints.html<br>EFS 47.9 TiB<br>https://docs.aws.amazon.com/efs/latest/ug/limits.html",
          "upvote_count": "5",
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
      "question_text": "<p>A company needs to store its accounting records in Amazon S3. The records must be immediately accessible for 1 year and then must be archived for an additional 9 years. No one at the company, including administrative users and root users, can be able to delete the records during the entire 10-year period. The records must be stored with maximum resiliency.<br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#53",
          "answers": [
            {
              "choice": "<p>A. Store the records in S3 Glacier for the entire 10-year period. Use an access control policy to deny deletion of the records for a period of 10 years.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Store the records by using S3 Intelligent-Tiering. Use an IAM policy to deny deletion of the records. After 10 years, change the IAM policy to allow deletion.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use an S3 Lifecycle policy to transition the records from S3 Standard to S3 Glacier Deep Archive after 1 year. Use S3 Object Lock in compliance mode for a period of 10 years.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an S3 Lifecycle policy to transition the records from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 1 year. Use S3 Object Lock in governance mode for a period of 10 years.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 723570,
          "date": "Mon 21 Nov 2022 14:56",
          "username": "Wpcorgan",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 712221,
          "date": "Sun 06 Nov 2022 10:16",
          "username": "airraid2010",
          "content": "A-Wrong as the records must be immediately accessble for the first year.<br>B-The question never mentioned about the records can be deleted or modified after 10-year period.<br>D-It does not fulfill the condition of securing resiliency; you need multi-AZ to guarantee it.<br><br>Therefore, the answer is C. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 710123,
          "date": "Thu 03 Nov 2022 00:07",
          "username": "17Master",
          "content": "ans is C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 700474,
          "date": "Fri 21 Oct 2022 04:47",
          "username": "BoboChow",
          "content": "sure for C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 697632,
          "date": "Mon 17 Oct 2022 20:41",
          "username": "queen101",
          "content": "CCCCCCCCC",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 695616,
          "date": "Sat 15 Oct 2022 20:50",
          "username": "ninjawrz",
          "content": "This is C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 695546,
          "date": "Sat 15 Oct 2022 19:05",
          "username": "Rachness",
          "content": "compliance lock cant be removed unlike governance",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#54",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs multiple Windows workloads on AWS. The company's employees use Windows file shares that are hosted on two Amazon EC2 instances. The file shares synchronize data between themselves and maintain duplicate copies. The company wants a highly available and durable storage solution that preserves how users currently access the files.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#54",
          "answers": [
            {
              "choice": "<p>A. Migrate all the data to Amazon S3. Set up IAM authentication for users to access files.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up an Amazon S3 File Gateway. Mount the S3 File Gateway on the existing EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Extend the file share environment to Amazon FSx for Windows File Server with a Multi-AZ configuration. Migrate all the data to FSx for Windows File Server.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Extend the file share environment to Amazon Elastic File System (Amazon EFS) with a Multi-AZ configuration. Migrate all the data to Amazon EFS.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 723571,
          "date": "Mon 21 Nov 2022 14:58",
          "username": "Wpcorgan",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 721803,
          "date": "Sat 19 Nov 2022 07:30",
          "username": "Juhith",
          "content": "EFS is only for Linux.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 721148,
          "date": "Fri 18 Nov 2022 08:44",
          "username": "koreanmonkey",
          "content": "EFS is only for Linux.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 720179,
          "date": "Thu 17 Nov 2022 04:43",
          "username": "Buruguduystunstugudunstuy",
          "content": "Windows file shares = Amazon FSx for Windows File Server<br>Hence, the correct answer is C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 710628,
          "date": "Thu 03 Nov 2022 16:58",
          "username": "17Master",
          "content": "FSX---> SMB",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 704319,
          "date": "Wed 26 Oct 2022 03:57",
          "username": "cark0728",
          "content": "C가 올바릅니다",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 696049,
          "date": "Sun 16 Oct 2022 09:08",
          "username": "KVK16",
          "content": "FSx- Windows File Sharehttps://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-file-shares.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#55",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is developing a VPC architecture that includes multiple subnets. The architecture will host applications that use Amazon EC2 instances and Amazon RDS DB instances. The architecture consists of six subnets in two Availability Zones. Each Availability Zone includes a public subnet, a private subnet, and a dedicated subnet for databases. Only EC2 instances that run in the private subnets can have access to the RDS databases.<br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Create a new route table that excludes the route to the public subnets' CIDR blocks. Associate the route table with the database subnets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a security group that denies inbound traffic from the security group that is assigned to instances in the public subnets. Attach the security group to the DB instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a security group that allows inbound traffic from the security group that is assigned to instances in the private subnets. Attach the security group to the DB instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new peering connection between the public subnets and the private subnets. Create a different peering connection between the private subnets and the database subnets.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 694071,
          "date": "Thu 13 Oct 2022 18:00",
          "username": "Sinaneos",
          "content": "A: doesn't fully configure the traffic flow<br>B: security groups don't have deny rules<br>D: peering is mostly between VPCs, doesn't really help here<br><br>answer is C, most mainstream way",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 696061,
          "date": "Sun 16 Oct 2022 09:38",
          "username": "KVK16",
          "content": "Inside a VPC, traffic locallybetween different subnets cannot be restricted by routingbut incase they are in different VPCs then it would be possible. This is imp Gain in VPC<br>- So only method is Security Groups - like EC2 also RDS also has Security Groups to restrict traffic to database instances",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 726973,
          "date": "Fri 25 Nov 2022 18:07",
          "username": "ashish_t",
          "content": "The key is \\\"Only EC2 instances that run in the private subnets can have access to the RDS databases\\\"<br>The answer is C. ",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 723572,
          "date": "Mon 21 Nov 2022 15:00",
          "username": "Wpcorgan",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 710668,
          "date": "Thu 03 Nov 2022 18:03",
          "username": "17Master",
          "content": "Ans correct.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#56",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has registered its domain name with Amazon Route 53. The company uses Amazon API Gateway in the ca-central-1 Region as a public interface for its backend microservice APIs. Third-party services consume the APIs securely. The company wants to design its API Gateway URL with the company's domain name and corresponding certificate so that the third-party services can use HTTPS.<br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#56",
          "answers": [
            {
              "choice": "<p>A. Create stage variables in API Gateway with Name=\"Endpoint-URL\" and Value=\"Company Domain Name\" to overwrite the default URL. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create Route 53 DNS records with the company's domain name. Point the alias record to the Regional API Gateway stage endpoint. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the us-east-1 Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a Regional API Gateway endpoint. Associate the API Gateway endpoint with the company's domain name. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the same Region. Attach the certificate to the API Gateway endpoint. Configure Route 53 to route traffic to the API Gateway endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a Regional API Gateway endpoint. Associate the API Gateway endpoint with the company's domain name. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the us-east-1 Region. Attach the certificate to the API Gateway APIs. Create Route 53 DNS records with the company's domain name. Point an A record to the company's domain name.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 692984,
          "date": "Wed 12 Oct 2022 13:15",
          "username": "masetromainValero_",
          "content": "I think the answer is C.  we don't need to attach a certificate in us-east-1, if is not for cloudfront. In our case the target is ca-central-1.I think that is C too, the target would be the same Region.<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-regional-api-custom-domain-create.html",
          "upvote_count": "114",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 695590,
          "date": "Sat 15 Oct 2022 20:10",
          "username": "Valero_",
          "content": "I think that is C too, the target would be the same Region.<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-regional-api-custom-domain-create.html",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 726976,
          "date": "Fri 25 Nov 2022 18:17",
          "username": "ashish_t",
          "content": "Cert should be in the same region.<br>Answer: C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 726836,
          "date": "Fri 25 Nov 2022 15:21",
          "username": "Vesperia",
          "content": "I choose D since the company wants its own domain name - should not be a regional one. Even though the answer does not mention edge-optimized custom domain name, this setup has to use it.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 726834,
          "date": "Fri 25 Nov 2022 15:16",
          "username": "Vesperia",
          "content": "The only correct answer is D since the company wants to design its API Gateway URL with the company's domain name. Answer C supports only regional domain name.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 723574,
          "date": "Mon 21 Nov 2022 15:01",
          "username": "Wpcorgan",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 716439,
          "date": "Sat 12 Nov 2022 03:34",
          "username": "study_aws1",
          "content": "Will change my earlier selection to C). Reason -<br>• If using Edge-Optimized endpoint, then the certificate must be in us-east-1<br>• If using Regional endpoint, the certificate must be in the API Gateway region",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 715885,
          "date": "Fri 11 Nov 2022 09:52",
          "username": "Nirmal3331",
          "content": "Answer is C:<br><br>Regional custom domain names must use an SSL/TLS certificate that's in the same AWS Region as your API.<br><br>Edge-optimized custom domain names must use a certificate that's in the following Region: US East (N. Virginia) (us-east-1)./",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 714843,
          "date": "Thu 10 Nov 2022 02:30",
          "username": "luvincanada",
          "content": "The question states..company uses Amazon API Gateway in the ca-central-1 Region. Answer Dmentions region name as \\\"us-east-1\\\" Region. which does not match. Therefore C is the correct answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 710759,
          "date": "Thu 03 Nov 2022 20:40",
          "username": "17Master",
          "content": "same region",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 707679,
          "date": "Sun 30 Oct 2022 08:49",
          "username": "study_aws1Athena",
          "content": "Nope option B) seems good. The below link will explain.<br>https://docs.amazonaws.cn/en_us/apigateway/latest/developerguide/how-to-custom-domains-prerequisites.html<br><br>Amazon API Gateway leverages Amazon CloudFront to support certificates for custom domain names. As such, the requirements and constraints of a custom domain name SSL/TLS certificate are dictated by CloudFront.The certificate must be in the same region. as the API. Answer is C",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 710460,
          "date": "Thu 03 Nov 2022 12:58",
          "username": "Athena",
          "content": "The certificate must be in the same region. as the API. Answer is C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 707675,
          "date": "Sun 30 Oct 2022 08:39",
          "username": "[Removed]Nightducky",
          "content": "Nope the below links will explain why it is option B)<br><br>https://docs.amazonaws.cn/en_us/apigateway/latest/developerguide/how-to-custom-domains-prerequisites.html<br><br>Amazon API Gateway leverages Amazon CloudFront to support certificates for custom domain names. As such, the requirements and constraints of a custom domain name SSL/TLS certificate are dictated by CloudFront.Read the question again. Cert has to be in the same region as API.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 712972,
          "date": "Mon 07 Nov 2022 11:00",
          "username": "Nightducky",
          "content": "Read the question again. Cert has to be in the same region as API.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 700478,
          "date": "Fri 21 Oct 2022 05:10",
          "username": "BoboChow",
          "content": "The certificate must be in the same Region as the API.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#57",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a popular social media website. The website gives users the ability to upload images to share with other users. The company wants to make sure that the images do not contain inappropriate content. The company needs a solution that minimizes development effort.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#57",
          "answers": [
            {
              "choice": "<p>A. Use Amazon Comprehend to detect inappropriate content. Use human review for low-confidence predictions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon Rekognition to detect inappropriate content. Use human review for low-confidence predictions.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon SageMaker to detect inappropriate content. Use ground truth to label low-confidence predictions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Fargate to deploy a custom machine learning model to detect inappropriate content. Use ground truth to label low-confidence predictions.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 694555,
          "date": "Fri 14 Oct 2022 08:51",
          "username": "masetromain",
          "content": "Good Answer is B :<br>https://docs.aws.amazon.com/rekognition/latest/dg/moderation.html?pg=ln&sec=ft",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 723575,
          "date": "Mon 21 Nov 2022 15:02",
          "username": "Wpcorgan",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 698159,
          "date": "Tue 18 Oct 2022 13:17",
          "username": "ArielSchivo",
          "content": "Option B. <br><br>https://docs.aws.amazon.com/rekognition/latest/dg/a2i-rekognition.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#58",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to run its critical applications in containers to meet requirements for scalability and availability. The company prefers to focus on maintenance of the critical applications. The company does not want to be responsible for provisioning and managing the underlying infrastructure that runs the containerized workload.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#58",
          "answers": [
            {
              "choice": "<p>A. Use Amazon EC2 instances, and install Docker on the instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon Elastic Container Service (Amazon ECS) on Amazon EC2 worker nodes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon Elastic Container Service (Amazon ECS) on AWS Fargate.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon EC2 instances from an Amazon Elastic Container Service (Amazon ECS)-optimized Amazon Machine Image (AMI).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 694556,
          "date": "Fri 14 Oct 2022 08:53",
          "username": "masetromain",
          "content": "Good answer is C:<br>AWS Fargate is a serverless, pay-as-you-go compute engine that lets you focus on building applications without having to manage servers. AWS Fargate is compatible with Amazon Elastic Container Service (ECS) and Amazon Elastic Kubernetes Service (EKS).<br><br>https://aws.amazon.com/fr/fargate/",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 726980,
          "date": "Fri 25 Nov 2022 18:24",
          "username": "ashish_t",
          "content": "The company does not want to be responsible for provisioning and managing the underlying infrastructure that runs the containerized workload.<br>Fargate is serverless and no need to manage.<br>Answer: C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 723576,
          "date": "Mon 21 Nov 2022 15:03",
          "username": "Wpcorgan",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 712457,
          "date": "Sun 06 Nov 2022 17:15",
          "username": "PS_R",
          "content": "Agree Serverless Containerization Think Fargate",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 698164,
          "date": "Tue 18 Oct 2022 13:21",
          "username": "ArielSchivo",
          "content": "Option C.  Fargate is serverless, no need to manage the underlying infrastructure.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#59",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts more than 300 global websites and applications. The company requires a platform to analyze more than 30 TB of clickstream data each day.<br>What should a solutions architect do to transmit and process the clickstream data?<br><br></p>",
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
              "choice": "<p>A. Design an AWS Data Pipeline to archive the data to an Amazon S3 bucket and run an Amazon EMR cluster with the data to generate analytics.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Auto Scaling group of Amazon EC2 instances to process the data and send it to an Amazon S3 data lake for Amazon Redshift to use for analysis.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Cache the data to Amazon CloudFront. Store the data in an Amazon S3 bucket. When an object is added to the S3 bucket. run an AWS Lambda function to process the data for analysis.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Collect the data from Amazon Kinesis Data Streams. Use Amazon Kinesis Data Firehose to transmit the data to an Amazon S3 data lake. Load the data in Amazon Redshift for analysis.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 698169,
          "date": "Tue 18 Oct 2022 13:29",
          "username": "ArielSchivo",
          "content": "Option D.  <br><br>https://aws.amazon.com/es/blogs/big-data/real-time-analytics-with-amazon-redshift-streaming-ingestion/",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 733563,
          "date": "Fri 02 Dec 2022 09:06",
          "username": "sebasta",
          "content": "Why not A? <br>You can collect data with AWS Data Pipeline and then analyze it with EMR. Whats wrong with this option?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 723578,
          "date": "Mon 21 Nov 2022 15:05",
          "username": "Wpcorgan",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 712460,
          "date": "Sun 06 Nov 2022 17:16",
          "username": "PS_R",
          "content": "Click Stream & Analyse/ process- Think KDS,",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 700479,
          "date": "Fri 21 Oct 2022 05:22",
          "username": "BoboChow",
          "content": "D seems to make sense",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 700279,
          "date": "Thu 20 Oct 2022 22:25",
          "username": "JesseeS",
          "content": "Option D is correct... See the resource. Thank you Ariel",
          "upvote_count": "1",
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
      "question_text": "<p>A company has a website hosted on AWS. The website is behind an Application Load Balancer (ALB) that is configured to handle HTTP and HTTPS separately. The company wants to forward all requests to the website so that the requests will use HTTPS.<br>What should a solutions architect do to meet this requirement?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#60",
          "answers": [
            {
              "choice": "<p>A. Update the ALB's network ACL to accept only HTTPS traffic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a rule that replaces the HTTP in the URL with HTTPS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a listener rule on the ALB to redirect HTTP traffic to HTTPS.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Replace the ALB with a Network Load Balancer configured to use Server Name Indication (SNI).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 694562,
          "date": "Fri 14 Oct 2022 09:00",
          "username": "masetromain",
          "content": "Answer C : <br>https://docs.aws.amazon.com/fr_fr/elasticloadbalancing/latest/application/create-https-listener.html<br>https://aws.amazon.com/fr/premiumsupport/knowledge-center/elb-redirect-http-to-https-using-alb/",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 723579,
          "date": "Mon 21 Nov 2022 15:06",
          "username": "Wpcorgan",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 691880,
          "date": "Tue 11 Oct 2022 09:57",
          "username": "hanhdroid",
          "content": "Answer C: https://aws.amazon.com/premiumsupport/knowledge-center/elb-redirect-http-to-https-using-alb/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#61",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a two-tier web application on AWS. The company's developers have deployed the application on an Amazon EC2 instance that connects directly to a backend Amazon RDS database. The company must not hardcode database credentials in the application. The company must also implement a solution to automatically rotate the database credentials on a regular basis.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#61",
          "answers": [
            {
              "choice": "<p>A. Store the database credentials in the instance metadata. Use Amazon EventBridge (Amazon CloudWatch Events) rules to run a scheduled AWS Lambda function that updates the RDS credentials and instance metadata at the same time.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Store the database credentials in a configuration file in an encrypted Amazon S3 bucket. Use Amazon EventBridge (Amazon CloudWatch Events) rules to run a scheduled AWS Lambda function that updates the RDS credentials and the credentials in the configuration file at the same time. Use S3 Versioning to ensure the ability to fall back to previous values.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Store the database credentials as a secret in AWS Secrets Manager. Turn on automatic rotation for the secret. Attach the required permission to the EC2 role to grant access to the secret.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Store the database credentials as encrypted parameters in AWS Systems Manager Parameter Store. Turn on automatic rotation for the encrypted parameters. Attach the required permission to the EC2 role to grant access to the encrypted parameters.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 696108,
          "date": "Sun 16 Oct 2022 10:49",
          "username": "KVK16JesseeS",
          "content": "Secrets manager supports Autorotation unlike Parameter store.Parameter store does not support autorotation.",
          "upvote_count": "65",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 700282,
          "date": "Thu 20 Oct 2022 22:28",
          "username": "JesseeS",
          "content": "Parameter store does not support autorotation.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 723594,
          "date": "Mon 21 Nov 2022 15:21",
          "username": "Wpcorgan",
          "content": "C is correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 700512,
          "date": "Fri 21 Oct 2022 06:44",
          "username": "BoboChow",
          "content": "AWS Secrets Manager is a newer service than SSM Parameter store",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 698174,
          "date": "Tue 18 Oct 2022 13:37",
          "username": "ArielSchivo",
          "content": "Option C. <br><br>https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_database_secret.html",
          "upvote_count": "2",
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
      "question_text": "<p>A company is deploying a new public web application to AWS. The application will run behind an Application Load Balancer (ALB). The application needs to be encrypted at the edge with an SSL/TLS certificate that is issued by an external certificate authority (CA). The certificate must be rotated each year before the certificate expires.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#62",
          "answers": [
            {
              "choice": "<p>A. Use AWS Certificate Manager (ACM) to issue an SSL/TLS certificate. Apply the certificate to the ALB.  Use the managed renewal feature to automatically rotate the certificate.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Certificate Manager (ACM) to issue an SSL/TLS certificate. Import the key material from the certificate. Apply the certificate to the ALUse the managed renewal feature to automatically rotate the certificate.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Certificate Manager (ACM) Private Certificate Authority to issue an SSL/TLS certificate from the root CA.  Apply the certificate to the ALB.  Use the managed renewal feature to automatically rotate the certificate.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Certificate Manager (ACM) to import an SSL/TLS certificate. Apply the certificate to the ALB.  Use Amazon EventBridge (Amazon CloudWatch Events) to send a notification when the certificate is nearing expiration. Rotate the certificate manually.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 695435,
          "date": "Sat 15 Oct 2022 15:45",
          "username": "Sinaneos",
          "content": "It's a third-party certificate, hence AWS cannot manage renewal automatically. The closest thing you can do is to send a notification to renew the 3rd party certificate.",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 712989,
          "date": "Mon 07 Nov 2022 12:05",
          "username": "mabotega",
          "content": "It is D, because ACM does not manage the renewal process for imported certificates. You are responsible for monitoring the expiration date of your imported certificates and for renewing them before they expire.<br>Check this question on the link below:<br>Q: What types of certificates can I create and manage with ACM?<br>https://www.amazonaws.cn/en/certificate-manager/faqs/#Managed_renewal_and_deployment",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 723597,
          "date": "Mon 21 Nov 2022 15:22",
          "username": "Wpcorgan",
          "content": "D is correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 722931,
          "date": "Sun 20 Nov 2022 20:29",
          "username": "17Master",
          "content": "If issued by an external entity, the certificate must be imported.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 719591,
          "date": "Wed 16 Nov 2022 12:58",
          "username": "Ack3rman",
          "content": "ACM certificates might be ineligible for renewal if:<br>The certificate isn't associated with another AWS service.<br>The certificate is expired.<br>The certificate is imported.<br>It's a private certificate issued with the IssueCertificate API call.<br><br>https://aws.amazon.com/tr/premiumsupport/knowledge-center/acm-certificate-ineligible/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 712988,
          "date": "Mon 07 Nov 2022 12:05",
          "username": "mabotega",
          "content": "It is D, becauseACM does not manage the renewal process for imported certificates. You are responsible for monitoring the expiration date of your imported certificates and for renewing them before they expire.<br>Check this question on the link below: <br>Q: What types of certificates can I create and manage with ACM?<br>https://www.amazonaws.cn/en/certificate-manager/faqs/#Managed_renewal_and_deployment",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 703344,
          "date": "Mon 24 Oct 2022 22:39",
          "username": "ManoAni",
          "content": "When you have a cert issued by external CA, you can import and monitor for its expiration. AWS issued certificate contradicts the statement.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 703231,
          "date": "Mon 24 Oct 2022 19:25",
          "username": "Six_Fingered_Jose",
          "content": "> external certificate authority (CA)<br>answer is D here because question explicitly stated that they are using external CA",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 702726,
          "date": "Mon 24 Oct 2022 07:50",
          "username": "dave9994",
          "content": "D is the Answer. https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 700620,
          "date": "Fri 21 Oct 2022 09:34",
          "username": "NIMIQ",
          "content": "It is A:https://www.amazonaws.cn/en/certificate-manager/faqs/#Managed_renewal_and_deployment",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 700517,
          "date": "Fri 21 Oct 2022 06:56",
          "username": "BoboChow",
          "content": "https://docs.aws.amazon.com/acm/latest/userguide/managed-renewal.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 700290,
          "date": "Thu 20 Oct 2022 22:38",
          "username": "JesseeSManoAni",
          "content": "It is option A<br>https://www.amazonaws.cn/en/certificate-manager/faqs/When you have a cert issued by external CA, you can import and monitor for its expiration. AWS issued certificate contradicts the statement.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 703345,
          "date": "Mon 24 Oct 2022 22:39",
          "username": "ManoAni",
          "content": "When you have a cert issued by external CA, you can import and monitor for its expiration. AWS issued certificate contradicts the statement.",
          "upvote_count": "1",
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
      "question_text": "<p>A company runs its infrastructure on AWS and has a registered base of 700,000 users for its document management application. The company intends to create a product that converts large .pdf files to .jpg image files. The .pdf files average 5 MB in size. The company needs to store the original files and the converted files. A solutions architect must design a scalable solution to accommodate demand that will grow rapidly over time.<br>Which solution meets these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#63",
          "answers": [
            {
              "choice": "<p>A. Save the .pdf files to Amazon S3. Configure an S3 PUT event to invoke an AWS Lambda function to convert the files to .jpg format and store them back in Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Save the .pdf files to Amazon DynamoDUse the DynamoDB Streams feature to invoke an AWS Lambda function to convert the files to .jpg format and store them back in DynamoDB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Upload the .pdf files to an AWS Elastic Beanstalk application that includes Amazon EC2 instances, Amazon Elastic Block Store (Amazon EBS) storage, and an Auto Scaling group. Use a program in the EC2 instances to convert the files to .jpg format. Save the .pdf files and the .jpg files in the EBS store.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Upload the .pdf files to an AWS Elastic Beanstalk application that includes Amazon EC2 instances, Amazon Elastic File System (Amazon EFS) storage, and an Auto Scaling group. Use a program in the EC2 instances to convert the file to .jpg format. Save the .pdf files and the .jpg files in the EBS store.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 698179,
          "date": "Tue 18 Oct 2022 13:44",
          "username": "ArielSchivorob74raffaello44",
          "content": "Option A.  Elastic BeanStalk is expensive, and DocumentDB has a 400KB max to upload files. So Lambda and S3 should be the one.In addition to this Lambda is paid only when used....is lambda scalable as an EC2 ?",
          "upvote_count": "1942",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 709395,
          "date": "Tue 01 Nov 2022 20:10",
          "username": "rob74",
          "content": "In addition to this Lambda is paid only when used....",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 706620,
          "date": "Fri 28 Oct 2022 18:27",
          "username": "raffaello44",
          "content": "is lambda scalable as an EC2 ?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 723599,
          "date": "Mon 21 Nov 2022 15:23",
          "username": "Wpcorgan",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 718618,
          "date": "Tue 15 Nov 2022 10:00",
          "username": "TonyghostR05",
          "content": "S3 is cost effective",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 706061,
          "date": "Fri 28 Oct 2022 04:59",
          "username": "goku58ludovikush",
          "content": "For rapid scalability, B - DynamoDB looks to be a better solution.It is not correct because the maximum item size in DynamoDB is 400 KB. ",
          "upvote_count": "17",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 709753,
          "date": "Wed 02 Nov 2022 12:09",
          "username": "ludovikush",
          "content": "It is not correct because the maximum item size in DynamoDB is 400 KB. ",
          "upvote_count": "7",
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
      "question_text": "<p>A company has more than 5 TB of file data on Windows file servers that run on premises. Users and applications interact with the data each day.<br>The company is moving its Windows workloads to AWS. As the company continues this process, the company requires access to AWS and on-premises file storage with minimum latency. The company needs a solution that minimizes operational overhead and requires no significant changes to the existing file access patterns. The company uses an AWS Site-to-Site VPN connection for connectivity to AWS.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Deploy and configure Amazon FSx for Windows File Server on AWS. Move the on-premises file data to FSx for Windows File Server. Reconfigure the workloads to use FSx for Windows File Server on AWS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy and configure an Amazon S3 File Gateway on premises. Move the on-premises file data to the S3 File Gateway. Reconfigure the on-premises workloads and the cloud workloads to use the S3 File Gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy and configure an Amazon S3 File Gateway on premises. Move the on-premises file data to Amazon S3. Reconfigure the workloads to use either Amazon S3 directly or the S3 File Gateway. depending on each workload's location.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy and configure Amazon FSx for Windows File Server on AWS. Deploy and configure an Amazon FSx File Gateway on premises. Move the on-premises file data to the FSx File Gateway. Configure the cloud workloads to use FSx for Windows File Server on AWS. Configure the on-premises workloads to use the FSx File Gateway.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 693749,
          "date": "Thu 13 Oct 2022 10:45",
          "username": "sba21",
          "content": "https://www.examtopics.com/discussions/amazon/view/83281-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 726878,
          "date": "Fri 25 Nov 2022 16:09",
          "username": "Vesperia",
          "content": "Answer A is correct. The company has a site to site VPN already.There is no need to install file gateway on-premise. https://docs.aws.amazon.com/fsx/latest/LustreGuide/mounting-on-premises.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 723602,
          "date": "Mon 21 Nov 2022 15:25",
          "username": "Wpcorgan",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 718151,
          "date": "Mon 14 Nov 2022 19:04",
          "username": "Kapello10",
          "content": "ddddddddd",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 706069,
          "date": "Fri 28 Oct 2022 05:11",
          "username": "goku5817Masterrewdboy",
          "content": "Windows File server == FSx. <br>Since access from both on-prem and AWS is needed, A isn't sufficient. So D. and VPN S2S?True, but the other requirement is no \\\"significant changes to the existing file access patterns\\\" which would mean mounting File Gateway shares in their on-premises location while they move their workloads to FSx during their migration. So D. ",
          "upvote_count": "322",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 716805,
          "date": "Sat 12 Nov 2022 17:37",
          "username": "17Masterrewdboy",
          "content": "and VPN S2S?True, but the other requirement is no \\\"significant changes to the existing file access patterns\\\" which would mean mounting File Gateway shares in their on-premises location while they move their workloads to FSx during their migration. So D. ",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 726297,
          "date": "Fri 25 Nov 2022 01:45",
          "username": "rewdboy",
          "content": "True, but the other requirement is no \\\"significant changes to the existing file access patterns\\\" which would mean mounting File Gateway shares in their on-premises location while they move their workloads to FSx during their migration. So D. ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 700533,
          "date": "Fri 21 Oct 2022 07:35",
          "username": "BoboChow",
          "content": "https://docs.aws.amazon.com/filegateway/latest/filefsxw/what-is-file-fsxw.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 693144,
          "date": "Wed 12 Oct 2022 15:58",
          "username": "tubtab",
          "content": "dddddddddd",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 692247,
          "date": "Tue 11 Oct 2022 18:17",
          "username": "oldcardigan",
          "content": "i think its D",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#65",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A hospital recently deployed a RESTful API with Amazon API Gateway and AWS Lambda. The hospital uses API Gateway and Lambda to upload reports that are in PDF format and JPEG format. The hospital needs to modify the Lambda code to identify protected health information (PHI) in the reports.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#65",
          "answers": [
            {
              "choice": "<p>A. Use existing Python libraries to extract the text from the reports and to identify the PHI from the extracted text.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon Textract to extract the text from the reports. Use Amazon SageMaker to identify the PHI from the extracted text.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon Textract to extract the text from the reports. Use Amazon Comprehend Medical to identify the PHI from the extracted text.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon Rekognition to extract the text from the reports. Use Amazon Comprehend Medical to identify the PHI from the extracted text.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 733935,
          "date": "Fri 02 Dec 2022 18:12",
          "username": "Rameez1",
          "content": "C is correct<br>Textract- for extracting the text and Comprehend to identify the medical info<br>https://aws.amazon.com/comprehend/medical/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 723605,
          "date": "Mon 21 Nov 2022 15:27",
          "username": "Wpcorgan",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 701773,
          "date": "Sat 22 Oct 2022 22:50",
          "username": "bansalhp",
          "content": "Textract -to extract textandComprehend -to identify Medicalinfo",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 700293,
          "date": "Thu 20 Oct 2022 22:45",
          "username": "JesseeS",
          "content": "Textract and Comprehend is HIPPA compliant<br> https://aws.amazon.com/blogs/machine-learning/amazon-textract-is-now-hipaa-eligible/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 696120,
          "date": "Sun 16 Oct 2022 11:05",
          "username": "KVK16",
          "content": "Textract - Comprehend Medical for PHI info",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#66",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that generates a large number of files, each approximately 5 MB in size. The files are stored in Amazon S3. Company policy requires the files to be stored for 4 years before they can be deleted. Immediate accessibility is always required as the files contain critical business data that is not easy to reproduce. The files are frequently accessed in the first 30 days of the object creation but are rarely accessed after the first 30 days.<br>Which storage solution is MOST cost-effective?<br><br></p>",
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
              "choice": "<p>A. Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Glacier 30 days from object creation. Delete the files 4 years after object creation.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) 30 days from object creation. Delete the files 4 years after object creation.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days from object creation. Delete the files 4 years after object creation.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days from object creation. Move the files to S3 Glacier 4 years after object creation.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 703237,
          "date": "Mon 24 Oct 2022 19:37",
          "username": "Six_Fingered_Jose",
          "content": "i think C should be the answer here, <br>> Immediate accessibility is always required as the files contain critical business data that is not easy to reproduce<br><br>If they do not explicitly mention that they are using Glacier Instant Retrieval, we should assume that Glacier -> takes more time to retrieve and may not meet the requirements",
          "upvote_count": "18",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 696497,
          "date": "Sun 16 Oct 2022 21:57",
          "username": "ninjawrzPamban123jhl0GasGasJDM",
          "content": "Most COST EFFECTIVE<br>A:S3 Glacier Instant Retrieval is a new storage class that delivers the fastest access to archive storage, with the same low latency and high-throughput performance as the S3 Standard and S3 Standard-IA storage classes. You can save up to 68 percent on storage costs as compared with using the S3 Standard-IA storage class when you use the S3 Glacier Instant Retrieval storage class and pay a low price to retrieve data.\\\"Immediate accessibility is always required as the files contain critical business data that is not easy to reproduce\\\" is the key sentence. answer is C. I think A is the answer, too. As S3 Glacier has 3 different classes and one of them is able to retrieve objects in milliseconds (Instant Retrieval). As no class has been specified, we can assume the on that meets requirements is selected.I agree with this, since no specific information about Glacier modality, we can assume that Instant Retrieval is a possibility and as far as I know, this is cheaper than IA. ",
          "upvote_count": "11351",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 715643,
          "date": "Fri 11 Nov 2022 01:38",
          "username": "Pamban",
          "content": "\\\"Immediate accessibility is always required as the files contain critical business data that is not easy to reproduce\\\" is the key sentence. answer is C. ",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 697466,
          "date": "Mon 17 Oct 2022 16:25",
          "username": "123jhl0GasGasJDM",
          "content": "I think A is the answer, too. As S3 Glacier has 3 different classes and one of them is able to retrieve objects in milliseconds (Instant Retrieval). As no class has been specified, we can assume the on that meets requirements is selected.I agree with this, since no specific information about Glacier modality, we can assume that Instant Retrieval is a possibility and as far as I know, this is cheaper than IA. ",
          "upvote_count": "51",
          "selected_answers": ""
        },
        {
          "id": 703539,
          "date": "Tue 25 Oct 2022 06:08",
          "username": "GasGasJDM",
          "content": "I agree with this, since no specific information about Glacier modality, we can assume that Instant Retrieval is a possibility and as far as I know, this is cheaper than IA. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 734126,
          "date": "Sat 03 Dec 2022 01:11",
          "username": "Incognito013",
          "content": "C is the answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 733860,
          "date": "Fri 02 Dec 2022 16:13",
          "username": "gcmrjbr",
          "content": "I vote for A.  I think we can assume Glacier Instant Retrieval.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 731823,
          "date": "Wed 30 Nov 2022 18:53",
          "username": "mj98",
          "content": "Ans is A! Most Cost Effective - Glacier. Instant Retrieval - Glacier Instant retrieval class.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 729865,
          "date": "Tue 29 Nov 2022 03:45",
          "username": "stepman",
          "content": "I would go with A reading these two sentences.<br><br>The files are frequently accessed in the first 30 days of the object creation but are rarely accessed after the first 30 days.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 724081,
          "date": "Tue 22 Nov 2022 04:49",
          "username": "jackwang0616",
          "content": "\\\"Immediate accessibility is always required as the files contain critical business data that is not easy to reproduce\\\"<br>so can't move to the glacier",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 723612,
          "date": "Mon 21 Nov 2022 15:30",
          "username": "Wpcorgan",
          "content": "C is correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 721802,
          "date": "Sat 19 Nov 2022 07:24",
          "username": "mikey2000",
          "content": "I would choose A but that option didn’t specify with glacier would be needed so C Is the answer because the file cannot be easily reproduced and s3 standard IA offers resiliency than s3 one zone IA(only uses one AZ)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 721783,
          "date": "Sat 19 Nov 2022 06:26",
          "username": "edk11z",
          "content": "B because most cost effective. and the data are not impossible to reproduce. they are just hard to reproduce.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 719610,
          "date": "Wed 16 Nov 2022 13:27",
          "username": "Ack3rman",
          "content": "Since it is not specified which type of Glacier it is, the answer is C i believe.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 719417,
          "date": "Wed 16 Nov 2022 08:16",
          "username": "iCcmaKartikey140",
          "content": "*A* mentions \\\"S3 Glacier\\\" not \\\"S3 Glacier Instant Retrieval\\\"<br>Cheese and yogurt are made from milk but they are not the same.<br>Ans *C*<br><br>https://aws.amazon.com/es/s3/storage-classes/check out - https://aws.amazon.com/s3/pricing/<br>Cheese and yogurt 😂",
          "upvote_count": "32",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 720711,
          "date": "Thu 17 Nov 2022 18:59",
          "username": "Kartikey140",
          "content": "check out - https://aws.amazon.com/s3/pricing/<br>Cheese and yogurt 😂",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 715644,
          "date": "Fri 11 Nov 2022 01:38",
          "username": "Pamban",
          "content": "\\\"Immediate accessibility is always required as the files contain critical business data that is not easy to reproduce\\\" is the key sentence. answer is C. ",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 712707,
          "date": "Mon 07 Nov 2022 00:44",
          "username": "backbencher2022",
          "content": "C is the correct answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 712631,
          "date": "Sun 06 Nov 2022 21:33",
          "username": "keezbadger",
          "content": "Let me help you settle this argument. <br>A is wrong as it only mentions S3 glacier and S3 glacier has 3 variations as shown below which conflicts the answer:<br>Amazon s3 Glacier Instant Retrieval: (Here it is millisecond retrieval and good for data accessed once a quarter and minimum duration is 90 days)<br>Amazon S3 Glacier Flexible Retrieval: (Here you have Expedited (1-5minutes), Standard (3-5hours), Bulk (5-12hours-free) retrieval and minimum duration is (90days) <br>Amazon S3 Glacier Deep Archive<br>B is wrong answer. S3 Zone IA is only in One Zone and data will be lost if AZ is destroyed<br>C is right as S3 Standard IA “data is less frequently accessed, but requires rapid access when needed”<br>I hope this helps :)",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 712469,
          "date": "Sun 06 Nov 2022 17:27",
          "username": "PS_R",
          "content": "Unless mentioned about Glacier Instant revival, i feel it is S3 Standard IA",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 711822,
          "date": "Sat 05 Nov 2022 15:39",
          "username": "gokalpkocer3PS_R",
          "content": "Answers does not mention anything about Glacier Instant retrieval. Do not make assumptions if answer specifically does not say it. Answer also does not say anything about AZs. So you can store in infrequent one AZ for most cost effective solution. My answer is B. Since it is Business Critical data, if S3 Onezone is not available for some reason, data will be available, so i would vote for C, S3 IA",
          "upvote_count": "22",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 712471,
          "date": "Sun 06 Nov 2022 17:29",
          "username": "PS_R",
          "content": "Since it is Business Critical data, if S3 Onezone is not available for some reason, data will be available, so i would vote for C, S3 IA",
          "upvote_count": "2",
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
      "question_text": "<p>A company hosts an application on multiple Amazon EC2 instances. The application processes messages from an Amazon SQS queue, writes to an Amazon RDS table, and deletes the message from the queue. Occasional duplicate records are found in the RDS table. The SQS queue does not contain any duplicate messages.<br>What should a solutions architect do to ensure messages are being processed once only?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#67",
          "answers": [
            {
              "choice": "<p>A. Use the CreateQueue API call to create a new queue.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the AddPermission API call to add appropriate permissions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the ReceiveMessage API call to set an appropriate wait time.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the ChangeMessageVisibility API call to increase the visibility timeout.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 696140,
          "date": "Sun 16 Oct 2022 11:27",
          "username": "KVK16",
          "content": "In case of SQS - multi-consumers if one consumer has already picked the message and is processing, in meantime other consumer can pick it up and process the message there by two copies are added at the end. To avoid this the message is made invisible from the time its picked and deleted after processing. This visibility timeout is increased according to max time taken to process the message",
          "upvote_count": "13",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 723614,
          "date": "Mon 21 Nov 2022 15:31",
          "username": "Wpcorgan",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 713010,
          "date": "Mon 07 Nov 2022 12:39",
          "username": "mabotega",
          "content": "D is the correct choise, increasing the visibility timeout according to max time taken to process the message on the RDS.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 696126,
          "date": "Sun 16 Oct 2022 11:13",
          "username": "Valero_",
          "content": "True, it's D. <br>https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#68",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing a new hybrid architecture to extend a company's on-premises infrastructure to AWS. The company requires a highly available connection with consistent low latency to an AWS Region. The company needs to minimize costs and is willing to accept slower traffic if the primary connection fails.<br>What should the solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#68",
          "answers": [
            {
              "choice": "<p>A. Provision an AWS Direct Connect connection to a Region. Provision a VPN connection as a backup if the primary Direct Connect connection fails.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Provision a VPN tunnel connection to a Region for private connectivity. Provision a second VPN tunnel for private connectivity and as a backup if the primary VPN connection fails.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Provision an AWS Direct Connect connection to a Region. Provision a second Direct Connect connection to the same Region as a backup if the primary Direct Connect connection fails.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provision an AWS Direct Connect connection to a Region. Use the Direct Connect failover attribute from the AWS CLI to automatically create a backup connection if the primary Direct Connect connection fails.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 696192,
          "date": "Sun 16 Oct 2022 12:52",
          "username": "KVK16",
          "content": "Direct Connect + VPN best of both",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 713014,
          "date": "Mon 07 Nov 2022 12:50",
          "username": "mabotega",
          "content": "Direct Connect goes throught 1 Gbps, 10 Gbps or 100 Gbps and the VPN goes up to 1.25 Gbps. <br><br>https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-direct-connect-vpn.html",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 727929,
          "date": "Sun 27 Nov 2022 06:21",
          "username": "koreanmonkey",
          "content": "A is rigth I thought wrong",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 727928,
          "date": "Sun 27 Nov 2022 06:09",
          "username": "koreanmonkey",
          "content": "I think VPN is not right solution for \\\"low latency\\\"<br>So how about C?",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 723615,
          "date": "Mon 21 Nov 2022 15:32",
          "username": "Wpcorgan",
          "content": "A is correct",
          "upvote_count": "1",
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
      "question_text": "<p>A company is running a business-critical web application on Amazon EC2 instances behind an Application Load Balancer. The EC2 instances are in an Auto Scaling group. The application uses an Amazon Aurora PostgreSQL database that is deployed in a single Availability Zone. The company wants the application to be highly available with minimum downtime and minimum loss of data.<br>Which solution will meet these requirements with the LEAST operational effort?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#69",
          "answers": [
            {
              "choice": "<p>A. Place the EC2 instances in different AWS Regions. Use Amazon Route 53 health checks to redirect traffic. Use Aurora PostgreSQL Cross-Region Replication.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the Auto Scaling group to use multiple Availability Zones. Configure the database as Multi-AZ. Configure an Amazon RDS Proxy instance for the database.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the Auto Scaling group to use one Availability Zone. Generate hourly snapshots of the database. Recover the database from the snapshots in the event of a failure.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the Auto Scaling group to use multiple AWS Regions. Write the data from the application to Amazon S3. Use S3 Event Notifications to launch an AWS Lambda function to write the data to the database.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 696194,
          "date": "Sun 16 Oct 2022 12:58",
          "username": "KVK16",
          "content": "RDS Proxy for Aurora https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 727293,
          "date": "Sat 26 Nov 2022 06:57",
          "username": "WajifkoreanmonkeyWZN",
          "content": "Why not A?maybe because of load balancer, diffrent region can't be answer.\\\"The load balancer distributes incoming application traffic across multiple targets, such as EC2 instances, in multiple Availability Zones\\\". Why not A?",
          "upvote_count": "111",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 727933,
          "date": "Sun 27 Nov 2022 06:38",
          "username": "koreanmonkeyWZN",
          "content": "maybe because of load balancer, diffrent region can't be answer.\\\"The load balancer distributes incoming application traffic across multiple targets, such as EC2 instances, in multiple Availability Zones\\\". Why not A?",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 734085,
          "date": "Fri 02 Dec 2022 23:02",
          "username": "WZN",
          "content": "\\\"The load balancer distributes incoming application traffic across multiple targets, such as EC2 instances, in multiple Availability Zones\\\". Why not A?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 723618,
          "date": "Mon 21 Nov 2022 15:33",
          "username": "Wpcorgan",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 719620,
          "date": "Wed 16 Nov 2022 13:36",
          "username": "Ack3rman",
          "content": "Important fact: EC2 Auto Scaling groups are regional constructs. They can span Availability Zones, but not AWS regions. So can't be D in case you are between B and D<br>https://aws.amazon.com/tr/ec2/autoscaling/faqs/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 715789,
          "date": "Fri 11 Nov 2022 07:25",
          "username": "Anji69659",
          "content": "MULTI-AZ FOR HIGH SCALABILITY .",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#70",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's HTTP application is behind a Network Load Balancer (NLB). The NLB's target group is configured to use an Amazon EC2 Auto Scaling group with multiple EC2 instances that run the web service.<br>The company notices that the NLB is not detecting HTTP errors for the application. These errors require a manual restart of the EC2 instances that run the web service. The company needs to improve the application's availability without writing custom scripts or code.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#70",
          "answers": [
            {
              "choice": "<p>A. Enable HTTP health checks on the NLB, supplying the URL of the company's application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add a cron job to the EC2 instances to check the local application's logs once each minute. If HTTP errors are detected. the application will restart.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Replace the NLB with an Application Load Balancer. Enable HTTP health checks by supplying the URL of the company's application. Configure an Auto Scaling action to replace unhealthy instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon Cloud Watch alarm that monitors the UnhealthyHostCount metric for the NLB.  Configure an Auto Scaling action to replace unhealthy instances when the alarm is in the ALARM state.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 697490,
          "date": "Mon 17 Oct 2022 16:56",
          "username": "123jhl0Ack3rman",
          "content": "I would choose A, as NLB supports HTTP and HTTPS Health Checks, BUT you can't put any URL (as proposed), only the node IP addresses. <br>So, the solution is C. can you elaborate more pls",
          "upvote_count": "91",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 719626,
          "date": "Wed 16 Nov 2022 13:42",
          "username": "Ack3rman",
          "content": "can you elaborate more pls",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 726753,
          "date": "Fri 25 Nov 2022 13:38",
          "username": "LeGloupier",
          "content": "A is the best option.<br>NLB support http healthcheck, so why do we need to move to ALB ?<br>moreover the sentence \\\"Configure an Auto Scaling action to replace unhealthy instances\\\" in C seems to be wrong, as auto scaling remove any unhealthy instance by default, you do not need to configure it.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 723619,
          "date": "Mon 21 Nov 2022 15:34",
          "username": "Wpcorgan",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 713057,
          "date": "Mon 07 Nov 2022 14:12",
          "username": "mabotega",
          "content": "C is the correct!<br>NLB does not handle HTTP (layer 7) listerns errors only TCP (layer 4) listeners.<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environments-cfg-nlb.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 710929,
          "date": "Fri 04 Nov 2022 07:09",
          "username": "Solarch",
          "content": "Answer is A<br>NLB is ideal for TPC and UDP Traffic and checks operating in layer 4. <br>ALB- Supports HTTP and HTTPs traffics. Hence the ELB needs to be changed from NLB to ALB. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 700070,
          "date": "Thu 20 Oct 2022 17:16",
          "username": "Aman54VesperiaoxfordcommaaMaharaja",
          "content": "NLB supports HTTP health checks, they are part of the target group and the setting is the same for ALB and NLB HTTP/HTTPS health checks.A is incorrect. NLB cannot detect http errors. Adding health check only detects the healthiness of the instances, not http errors.\\\"The company needs to improve the application's availability\\\"<br>Answer A does not address this. The auto scaling group in answer C does.NLB is already configured with a target group supported by EC2 ASG \\\"NLB's target group is configured to use an Amazon EC2 Auto Scaling group\\\". NLB need to be configured to use http health check. Hence A",
          "upvote_count": "1212",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 726910,
          "date": "Fri 25 Nov 2022 16:51",
          "username": "Vesperia",
          "content": "A is incorrect. NLB cannot detect http errors. Adding health check only detects the healthiness of the instances, not http errors.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 704805,
          "date": "Wed 26 Oct 2022 17:21",
          "username": "oxfordcommaaMaharaja",
          "content": "\\\"The company needs to improve the application's availability\\\"<br>Answer A does not address this. The auto scaling group in answer C does.NLB is already configured with a target group supported by EC2 ASG \\\"NLB's target group is configured to use an Amazon EC2 Auto Scaling group\\\". NLB need to be configured to use http health check. Hence A",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 709910,
          "date": "Wed 02 Nov 2022 16:53",
          "username": "Maharaja",
          "content": "NLB is already configured with a target group supported by EC2 ASG \\\"NLB's target group is configured to use an Amazon EC2 Auto Scaling group\\\". NLB need to be configured to use http health check. Hence A",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 698197,
          "date": "Tue 18 Oct 2022 13:56",
          "username": "ArielSchivo",
          "content": "Option C.  NLB works at Layer 4 so it does not support HTTP/HTTPS. The replacement for the ALB is the best choice.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#71",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a shopping application that uses Amazon DynamoDB to store customer information. In case of data corruption, a solutions architect needs to design a solution that meets a recovery point objective (RPO) of 15 minutes and a recovery time objective (RTO) of 1 hour.<br>What should the solutions architect recommend to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#71",
          "answers": [
            {
              "choice": "<p>A. Configure DynamoDB global tables. For RPO recovery, point the application to a different AWS Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure DynamoDB point-in-time recovery. For RPO recovery, restore to the desired point in time.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Export the DynamoDB data to Amazon S3 Glacier on a daily basis. For RPO recovery, import the data from S3 Glacier to DynamoDB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Schedule Amazon Elastic Block Store (Amazon EBS) snapshots for the DynamoDB table every 15 minutes. For RPO recovery, restore the DynamoDB table by using the EBS snapshot.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 697522,
          "date": "Mon 17 Oct 2022 17:37",
          "username": "123jhl0",
          "content": "A - DynamoDB global tables provides multi-Region, and multi-active database, but it not valid \\\"in case of data corruption\\\". In this case, you need a backup. This solutions isn't valid.<br>**B** - Point in Time Recovery is designed as a continuous backup juts to recover it fast. It covers perfectly the RPO, and probably the RTO.https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/PointInTimeRecovery.html<br>C - A daily export will not cover the RPO of 15min.<br>D - DynamoDB is serverless... so what are these EBS snapshots taken from???",
          "upvote_count": "20",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 723648,
          "date": "Mon 21 Nov 2022 15:55",
          "username": "Wpcorgan",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 707105,
          "date": "Sat 29 Oct 2022 11:28",
          "username": "SimonPark",
          "content": "B is the answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 700582,
          "date": "Fri 21 Oct 2022 08:56",
          "username": "BoboChow",
          "content": "I think DynamoDB global tables also work here, but Point in Time Recovery is a better choice",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 698572,
          "date": "Wed 19 Oct 2022 02:14",
          "username": "Kikiokiki",
          "content": "I THINK B.  <br> https://dynobase.dev/dynamodb-point-in-time-recovery/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 696237,
          "date": "Sun 16 Oct 2022 14:37",
          "username": "priya2224patni11Az900500123jhl0",
          "content": "answer is Dbhk gandu chutiye glt ans btata haiTry communicate in English for audienceDynamoDB is serverless, so no storage snapshots available. https://aws.amazon.com/dynamodb/",
          "upvote_count": "1131",
          "selected_answers": ""
        },
        {
          "id": 698867,
          "date": "Wed 19 Oct 2022 11:15",
          "username": "patni11Az900500",
          "content": "bhk gandu chutiye glt ans btata haiTry communicate in English for audience",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 711745,
          "date": "Sat 05 Nov 2022 13:33",
          "username": "Az900500",
          "content": "Try communicate in English for audience",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 697524,
          "date": "Mon 17 Oct 2022 17:40",
          "username": "123jhl0",
          "content": "DynamoDB is serverless, so no storage snapshots available. https://aws.amazon.com/dynamodb/",
          "upvote_count": "1",
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
      "question_text": "<p>A company runs a photo processing application that needs to frequently upload and download pictures from Amazon S3 buckets that are located in the same AWS Region. A solutions architect has noticed an increased cost in data transfer fees and needs to implement a solution to reduce these costs.<br>How can the solutions architect meet this requirement?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#72",
          "answers": [
            {
              "choice": "<p>A. Deploy Amazon API Gateway into a public subnet and adjust the route table to route S3 calls through it.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy a NAT gateway into a public subnet and attach an endpoint policy that allows access to the S3 buckets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy the application into a public subnet and allow it to route through an internet gateway to access the S3 buckets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy an S3 VPC gateway endpoint into the VPC and attach an endpoint policy that allows access to the S3 buckets.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 696260,
          "date": "Sun 16 Oct 2022 15:32",
          "username": "KVK16",
          "content": "To reduce costs get rid of NAT Gateway , VPC endpoint to S3",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 723649,
          "date": "Mon 21 Nov 2022 15:56",
          "username": "Wpcorgan",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 701580,
          "date": "Sat 22 Oct 2022 16:30",
          "username": "yd_h",
          "content": "Selected Answer: D<br>FYI : <br>-There is no additional charge for using gateway endpoints.<br>-Interface endpoints are priced at ~ $0.01/per AZ/per hour. Cost depends on the Region<br>- S3 Interface Endpoints resolve to private VPC IP addresses and are routable from outside the VPC (e.g via VPN, Direct Connect, Transit Gateway, etc). S3 Gateway Endpoints use public IP ranges and are only routable from resources within the VPC. ",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 697537,
          "date": "Mon 17 Oct 2022 17:46",
          "username": "123jhl0",
          "content": "Close question to the Question #4, with same solution.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#73",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently launched Linux-based application instances on Amazon EC2 in a private subnet and launched a Linux-based bastion host on an Amazon EC2 instance in a public subnet of a VPC.  A solutions architect needs to connect from the on-premises network, through the company's internet connection, to the bastion host, and to the application servers. The solutions architect must make sure that the security groups of all the EC2 instances will allow that access.<br>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#73",
          "answers": [
            {
              "choice": "<p>A. Replace the current security group of the bastion host with one that only allows inbound access from the application instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Replace the current security group of the bastion host with one that only allows inbound access from the internal IP range for the company.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Replace the current security group of the bastion host with one that only allows inbound access from the external IP range for the company.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Replace the current security group of the application instances with one that allows inbound SSH access from only the private IP address of the bastion host.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Replace the current security group of the application instances with one that allows inbound SSH access from only the public IP address of the bastion host.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 703268,
          "date": "Mon 24 Oct 2022 20:18",
          "username": "Six_Fingered_Jose",
          "content": "C because from on-prem network to bastion through internet (using on-prem resource's public IP),<br>D because bastion and ec2 is in same VPC, meaning bastion can communicate to EC2 via it's private IP address",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 723654,
          "date": "Mon 21 Nov 2022 15:57",
          "username": "Wpcorgan",
          "content": "C and D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 705729,
          "date": "Thu 27 Oct 2022 18:22",
          "username": "gcmrjbr",
          "content": "CD is Ok.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 699316,
          "date": "Wed 19 Oct 2022 21:49",
          "username": "Evangelia",
          "content": "why C? External?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 698218,
          "date": "Tue 18 Oct 2022 14:10",
          "username": "ArielSchivo",
          "content": "Option C (allow access just from the external IP) and D (allow inbound SSH from the private IP of the bastion host).",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 696512,
          "date": "Sun 16 Oct 2022 22:11",
          "username": "ninjawrz",
          "content": "CD is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CD"
        }
      ]
    },
    {
      "question_id": "#74",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing a two-tier web application. The application consists of a public-facing web tier hosted on Amazon EC2 in public subnets. The database tier consists of Microsoft SQL Server running on Amazon EC2 in a private subnet. Security is a high priority for the company.<br>How should security groups be configured in this situation? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#74",
          "answers": [
            {
              "choice": "<p>A. Configure the security group for the web tier to allow inbound traffic on port 443 from 0.0.0.0/0.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the security group for the web tier to allow outbound traffic on port 443 from 0.0.0.0/0.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the security group for the database tier to allow inbound traffic on port 1433 from the security group for the web tier.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the security group for the database tier to allow outbound traffic on ports 443 and 1433 to the security group for the web tier.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Configure the security group for the database tier to allow inbound traffic on ports 443 and 1433 from the security group for the web tier.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 698241,
          "date": "Tue 18 Oct 2022 14:41",
          "username": "ArielSchivo",
          "content": "EC2 web on public subnets + EC2 SQL on private subnet + security is high priority. So, Option A to allow HTTPS from everywhere. Plus option C to allow SQL connection from the web instance.",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 710799,
          "date": "Thu 03 Nov 2022 22:21",
          "username": "Athena",
          "content": "Web Server Rules: Inbound traffic from 443 (HTTPS)\tSource 0.0.0.0/0 - Allows inbound HTTPS access from any IPv4 address<br>Database Rules : 1433 (MS SQL)The default port to access a Microsoft SQL Server database, for example, on an Amazon RDS instancehttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules-reference.html",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 723656,
          "date": "Mon 21 Nov 2022 15:58",
          "username": "Wpcorgan",
          "content": "A and C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 705727,
          "date": "Thu 27 Oct 2022 18:20",
          "username": "gcmrjbr",
          "content": "Agree with AC. ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 693639,
          "date": "Thu 13 Oct 2022 07:46",
          "username": "srcshekhar",
          "content": "Very good questions",
          "upvote_count": "3",
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
      "question_text": "<p>A company wants to move a multi-tiered application from on premises to the AWS Cloud to improve the application's performance. The application consists of application tiers that communicate with each other by way of RESTful services. Transactions are dropped when one tier becomes overloaded. A solutions architect must design a solution that resolves these issues and modernizes the application.<br>Which solution meets these requirements and is the MOST operationally efficient?<br><br></p>",
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
              "choice": "<p>A. Use Amazon API Gateway and direct transactions to the AWS Lambda functions as the application layer. Use Amazon Simple Queue Service (Amazon SQS) as the communication layer between application services.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon CloudWatch metrics to analyze the application performance history to determine the servers' peak utilization during the performance failures. Increase the size of the application server's Amazon EC2 instances to meet the peak requirements.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon Simple Notification Service (Amazon SNS) to handle the messaging between application servers running on Amazon EC2 in an Auto Scaling group. Use Amazon CloudWatch to monitor the SNS queue length and scale up and down as required.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon Simple Queue Service (Amazon SQS) to handle the messaging between application servers running on Amazon EC2 in an Auto Scaling group. Use Amazon CloudWatch to monitor the SQS queue length and scale up when communication failures are detected.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 705733,
          "date": "Thu 27 Oct 2022 18:31",
          "username": "gcmrjbr",
          "content": "Agree with A>>> Lambda = serverless + autoscale (modernize), SQS= decouple (no more drops)",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 723658,
          "date": "Mon 21 Nov 2022 15:59",
          "username": "Wpcorgan",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 718755,
          "date": "Tue 15 Nov 2022 14:39",
          "username": "airraid2010",
          "content": "https://serverlessland.com/patterns/apigw-http-sqs-lambda-sls",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 701827,
          "date": "Sun 23 Oct 2022 02:21",
          "username": "BoboChow",
          "content": "Serverless + decouple",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 700780,
          "date": "Fri 21 Oct 2022 13:17",
          "username": "cark0728",
          "content": "A가 올바른 정답이다",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#76",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company receives 10 TB of instrumentation data each day from several machines located at a single factory. The data consists of JSON files stored on a storage area network (SAN) in an on-premises data center located within the factory. The company wants to send this data to Amazon S3 where it can be accessed by several additional systems that provide critical near-real-time analytics. A secure transfer is important because the data is considered sensitive.<br>Which solution offers the MOST reliable data transfer?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#76",
          "answers": [
            {
              "choice": "<p>A. AWS DataSync over public internet<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. AWS DataSync over AWS Direct Connect<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. AWS Database Migration Service (AWS DMS) over public internet<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. AWS Database Migration Service (AWS DMS) over AWS Direct Connect<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 698245,
          "date": "Tue 18 Oct 2022 14:44",
          "username": "ArielSchivo",
          "content": "DMS is for databases and here refers to “JSON files”. Public internet is not reliable. So best option is B. ",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 728877,
          "date": "Mon 28 Nov 2022 09:21",
          "username": "Wajif",
          "content": "Public internet options automatically out being best-effort. DMS is for database migration service and here they have to just transfer the data to S3. Hence B. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 723661,
          "date": "Mon 21 Nov 2022 16:00",
          "username": "Wpcorgan",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 701610,
          "date": "Sat 22 Oct 2022 17:21",
          "username": "yd_h",
          "content": "B<br><br>- A SAN presents storage devices to a host such that the storage appears to be locally attached. ( NFS is, or can be, a SAN- https://serverfault.com/questions/499185/is-san-storage-better-than-nfs )<br>- AWS Direct Connect does not encrypt your traffic that is in transit by default. But the connection is private (https://docs.aws.amazon.com/directconnect/latest/UserGuide/encryption-in-transit.html)",
          "upvote_count": "3",
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
      "question_text": "<p>A company needs to configure a real-time data ingestion architecture for its application. The company needs an API, a process that transforms data as the data is streamed, and a storage solution for the data.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#77",
          "answers": [
            {
              "choice": "<p>A. Deploy an Amazon EC2 instance to host an API that sends data to an Amazon Kinesis data stream. Create an Amazon Kinesis Data Firehose delivery stream that uses the Kinesis data stream as a data source. Use AWS Lambda functions to transform the data. Use the Kinesis Data Firehose delivery stream to send the data to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an Amazon EC2 instance to host an API that sends data to AWS Glue. Stop source/destination checking on the EC2 instance. Use AWS Glue to transform the data and to send the data to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure an Amazon API Gateway API to send data to an Amazon Kinesis data stream. Create an Amazon Kinesis Data Firehose delivery stream that uses the Kinesis data stream as a data source. Use AWS Lambda functions to transform the data. Use the Kinesis Data Firehose delivery stream to send the data to Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure an Amazon API Gateway API to send data to AWS Glue. Use AWS Lambda functions to transform the data. Use AWS Glue to send the data to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 697556,
          "date": "Mon 17 Oct 2022 18:38",
          "username": "123jhl0",
          "content": "(A) - You don't need to deploy an EC2 instance to host an API - Operational overhead<br>(B) - Same as A<br>(**C**) - Is the answer<br>(D) - AWS Glue gets data from S3, not from API GW. AWS Glue could do ETL by itself, so don't need lambda. Non sense. https://aws.amazon.com/glue/",
          "upvote_count": "15",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 723663,
          "date": "Mon 21 Nov 2022 16:01",
          "username": "Wpcorgan",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 703977,
          "date": "Tue 25 Oct 2022 17:09",
          "username": "Cristian93",
          "content": "C is correct answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#78",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to keep user transaction data in an Amazon DynamoDB table. The company must retain the data for 7 years.<br>What is the MOST operationally efficient solution that meets these requirements?<br><br></p>",
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
              "choice": "<p>A. Use DynamoDB point-in-time recovery to back up the table continuously.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Backup to create backup schedules and retention policies for the table.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an on-demand backup of the table by using the DynamoDB console. Store the backup in an Amazon S3 bucket. Set an S3 Lifecycle configuration for the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function. Configure the Lambda function to back up the table and to store the backup in an Amazon S3 bucket. Set an S3 Lifecycle configuration for the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 697564,
          "date": "Mon 17 Oct 2022 18:48",
          "username": "123jhl0",
          "content": "Answer is B<br>\\\"Amazon DynamoDB offers two types of backups: point-in-time recovery (PITR) and on-demand backups. (==> D is not the answer)<br>PITR is used to recover your table to any point in time in a rolling 35 day window, which is used to help customers mitigate accidental deletes or writes to their tables from bad code, malicious access, or user error. (==> A isn't the answer)<br>On demand backups are designed for long-term archiving and retention, which is typically used to help customers meet compliance and regulatory requirements.<br>This is the second of a series of two blog posts about using AWS Backup to set up scheduled on-demand backups for Amazon DynamoDB.  Part 1 presents the steps to set up a scheduled backup for DynamoDB tables from the AWS Management Console.\\\" (==> Not the DynamoBD console and C isn't the answer either)<br>https://aws.amazon.com/blogs/database/part-2-set-up-scheduled-backups-for-amazon-dynamodb-using-aws-backup/",
          "upvote_count": "19",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 723665,
          "date": "Mon 21 Nov 2022 16:01",
          "username": "Wpcorgan",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 721469,
          "date": "Fri 18 Nov 2022 18:58",
          "username": "mabotega",
          "content": "We recommend you use AWS Backup to automatically delete the backups that you no longer need by configuring your lifecycle when you created your backup plan.<br>https://docs.aws.amazon.com/aws-backup/latest/devguide/deleting-backups.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 707559,
          "date": "Sun 30 Oct 2022 02:06",
          "username": "SimonPark",
          "content": "B is clear",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#79",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning to use an Amazon DynamoDB table for data storage. The company is concerned about cost optimization. The table will not be used on most mornings. In the evenings, the read and write traffic will often be unpredictable. When traffic spikes occur, they will happen very quickly.<br>What should a solutions architect recommend?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#79",
          "answers": [
            {
              "choice": "<p>A. Create a DynamoDB table in on-demand capacity mode.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a DynamoDB table with a global secondary index.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a DynamoDB table with provisioned capacity and auto scaling.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a DynamoDB table in provisioned capacity mode, and configure it as a global table.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 707562,
          "date": "Sun 30 Oct 2022 02:15",
          "username": "SimonPark",
          "content": "On-demand mode is a good option if any of the following are true:<br>- You create new tables with unknown workloads.<br>- You have unpredictable application traffic.<br>- You prefer the ease of paying for only what you use.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 697574,
          "date": "Mon 17 Oct 2022 18:59",
          "username": "123jhl0",
          "content": "**A** - On demand is the answer - https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.OnDemand<br>B - not related with the unpredictable traffic<br>C - provisioned capacity is recommended for known patterns. Not the case here.<br>D - same as C",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 723670,
          "date": "Mon 21 Nov 2022 16:02",
          "username": "Wpcorgan",
          "content": "A is correct",
          "upvote_count": "1",
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
      "question_text": "<p>A company recently signed a contract with an AWS Managed Service Provider (MSP) Partner for help with an application migration initiative. A solutions architect needs ta share an Amazon Machine Image (AMI) from an existing AWS account with the MSP Partner's AWS account. The AMI is backed by Amazon Elastic Block Store (Amazon EBS) and uses an AWS Key Management Service (AWS KMS) customer managed key to encrypt EBS volume snapshots.<br>What is the MOST secure way for the solutions architect to share the AMI with the MSP Partner's AWS account?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#80",
          "answers": [
            {
              "choice": "<p>A. Make the encrypted AMI and snapshots publicly available. Modify the key policy to allow the MSP Partner's AWS account to use the key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Modify the launchPermission property of the AMI. Share the AMI with the MSP Partner's AWS account only. Modify the key policy to allow the MSP Partner's AWS account to use the key.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the launchPermission property of the AMI. Share the AMI with the MSP Partner's AWS account only. Modify the key policy to trust a new KMS key that is owned by the MSP Partner for encryption.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Export the AMI from the source account to an Amazon S3 bucket in the MSP Partner's AWS account, Encrypt the S3 bucket with a new KMS key that is owned by the MSP Partner. Copy and launch the AMI in the MSP Partner's AWS account.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 698313,
          "date": "Tue 18 Oct 2022 17:16",
          "username": "Sauran",
          "content": "Share the existing KMS key with the MSP external account because it has already been used to encrypt the AMI snapshot.<br><br>https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 716070,
          "date": "Fri 11 Nov 2022 14:23",
          "username": "Jtic",
          "content": "Must use and share the existing KMS key to decrypt the same key",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 714828,
          "date": "Thu 10 Nov 2022 01:53",
          "username": "flbcobra",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/acm-certificate-expiration/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 705686,
          "date": "Thu 27 Oct 2022 17:17",
          "username": "ManoAni",
          "content": "If EBS snapshots are encrypted, then we need to share the same KMS key to partners to be able to access it. Read the note section in the link<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sharingamis-explicit.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 699997,
          "date": "Thu 20 Oct 2022 15:57",
          "username": "tubtab",
          "content": "MOST secure way should be C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 696416,
          "date": "Sun 16 Oct 2022 19:26",
          "username": "ChunsliJticSauranUWSFish",
          "content": "MOST secure way should be C, with a separate key, not the one already used.Must use and share the existing KMS key to decrypt the same keyA seperate/new key is not possible because it won't be able to decrypt the AMI snapshot which was already encrypted with the existing/old key.This is truth",
          "upvote_count": "1162",
          "selected_answers": ""
        },
        {
          "id": 716068,
          "date": "Fri 11 Nov 2022 14:22",
          "username": "Jtic",
          "content": "Must use and share the existing KMS key to decrypt the same key",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 698314,
          "date": "Tue 18 Oct 2022 17:18",
          "username": "SauranUWSFish",
          "content": "A seperate/new key is not possible because it won't be able to decrypt the AMI snapshot which was already encrypted with the existing/old key.This is truth",
          "upvote_count": "62",
          "selected_answers": ""
        },
        {
          "id": 704995,
          "date": "Wed 26 Oct 2022 22:14",
          "username": "UWSFish",
          "content": "This is truth",
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
      "question_text": "<p>A solutions architect is designing the cloud architecture for a new application being deployed on AWS. The process should run in parallel while adding and removing application nodes as needed based on the number of jobs to be processed. The processor application is stateless. The solutions architect must ensure that the application is loosely coupled and the job items are durably stored.<br>Which design should the solutions architect use?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#81",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon SNS topic to send the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch configuration that uses the AMI. Create an Auto Scaling group using the launch configuration. Set the scaling policy for the Auto Scaling group to add and remove nodes based on CPU usage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon SQS queue to hold the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch configuration that uses the AMI. Create an Auto Scaling group using the launch configuration. Set the scaling policy for the Auto Scaling group to add and remove nodes based on network usage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon SQS queue to hold the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch template that uses the AMI. Create an Auto Scaling group using the launch template. Set the scaling policy for the Auto Scaling group to add and remove nodes based on the number of items in the SQS queue.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon SNS topic to send the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch template that uses the AMI. Create an Auto Scaling group using the launch template. Set the scaling policy for the Auto Scaling group to add and remove nodes based on the number of messages published to the SNS topic.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 734583,
          "date": "Sat 03 Dec 2022 18:12",
          "username": "kelljons",
          "content": "what about the word \\\"coupled\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 734470,
          "date": "Sat 03 Dec 2022 14:26",
          "username": "kewl",
          "content": "AWS strongly recommends that you do not use launch configurations hence answer is C<br>https://docs.amazonaws.cn/en_us/autoscaling/ec2/userguide/launch-configurations.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 730216,
          "date": "Tue 29 Nov 2022 11:10",
          "username": "HussamShokr",
          "content": "answer is C a there is nothing called \\\" Launch Configuration\\\" it's called \\\"Launch Template\\\" which is used by the autoscalling group to creat the new instances.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 726278,
          "date": "Fri 25 Nov 2022 00:46",
          "username": "Liliwood",
          "content": "I was not sure between Launch template and Launch configuration.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 723733,
          "date": "Mon 21 Nov 2022 17:20",
          "username": "Wpcorgan",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 713863,
          "date": "Tue 08 Nov 2022 14:31",
          "username": "devopspro",
          "content": "answer is c",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 712149,
          "date": "Sun 06 Nov 2022 05:45",
          "username": "Wilson_S",
          "content": "https://www.examtopics.com/discussions/amazon/view/22139-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 707001,
          "date": "Sat 29 Oct 2022 08:04",
          "username": "wookchan",
          "content": "It looks like C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 706848,
          "date": "Sat 29 Oct 2022 02:49",
          "username": "dokaedu",
          "content": "Correct Answer: C",
          "upvote_count": "1",
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
      "question_text": "<p>A company hosts its web applications in the AWS Cloud. The company configures Elastic Load Balancers to use certificates that are imported into AWS Certificate Manager (ACM). The company's security team must be notified 30 days before the expiration of each certificate.<br>What should a solutions architect recommend to meet this requirement?<br><br></p>",
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
              "choice": "<p>A. Add a rule in ACM to publish a custom message to an Amazon Simple Notification Service (Amazon SNS) topic every day, beginning 30 days before any certificate will expire.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Config rule that checks for certificates that will expire within 30 days. Configure Amazon EventBridge (Amazon CloudWatch Events) to invoke a custom alert by way of Amazon Simple Notification Service (Amazon SNS) when AWS Config reports a noncompliant resource.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Trusted Advisor to check for certificates that will expire within 30 days. Create an Amazon CloudWatch alarm that is based on Trusted Advisor metrics for check status changes. Configure the alarm to send a custom alert by way of Amazon Simple Notification Service (Amazon SNS).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to detect any certificates that will expire within 30 days. Configure the rule to invoke an AWS Lambda function. Configure the Lambda function to send a custom alert by way of Amazon Simple Notification Service (Amazon SNS).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 697381,
          "date": "Mon 17 Oct 2022 14:13",
          "username": "LeGloupierLeGloupier",
          "content": "B<br>AWS Config has a managed rule<br>named acm-certificate-expiration-check<br>to check for expiring certificates<br>(configurable number of days)https://aws.amazon.com/premiumsupport/knowledge-center/acm-certificate-expiration/",
          "upvote_count": "114",
          "selected_answers": ""
        },
        {
          "id": 697384,
          "date": "Mon 17 Oct 2022 14:22",
          "username": "LeGloupier",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/acm-certificate-expiration/",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 705687,
          "date": "Thu 27 Oct 2022 17:23",
          "username": "ManoAni",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/acm-certificate-expiration/",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 734332,
          "date": "Sat 03 Dec 2022 11:19",
          "username": "PDR",
          "content": "it does seem like both B and D meet the requirements here, but with B being the better solution as has elements to configure and uses functionality that is more 'built in'so I would choose B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 727048,
          "date": "Fri 25 Nov 2022 20:22",
          "username": "ashish_t",
          "content": "I think,<br>For SAA-C02: D<br>But for SAA-C03: B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 723734,
          "date": "Mon 21 Nov 2022 17:21",
          "username": "Wpcorgan",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 722071,
          "date": "Sat 19 Nov 2022 16:04",
          "username": "kvsomu",
          "content": "With B option we won't get a notification, in the question we have option, must be notified. <br>So the answer is B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 720103,
          "date": "Thu 17 Nov 2022 01:49",
          "username": "htangga",
          "content": "D is perfect : https://aws.amazon.com/blogs/security/how-to-monitor-expirations-of-imported-certificates-in-aws-certificate-manager-acm/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 710359,
          "date": "Thu 03 Nov 2022 09:25",
          "username": "OnimoleVesperia",
          "content": "weird but i could also configure this using eventbridge without needing config.config just makes it easierEventbridge is just an event bus, requires event sources. For expiring certificate, Config or now ACM can be the source.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 726962,
          "date": "Fri 25 Nov 2022 17:56",
          "username": "Vesperia",
          "content": "Eventbridge is just an event bus, requires event sources. For expiring certificate, Config or now ACM can be the source.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 705688,
          "date": "Thu 27 Oct 2022 17:23",
          "username": "jveluman",
          "content": "B is Perfect",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 696551,
          "date": "Sun 16 Oct 2022 22:41",
          "username": "Moonus",
          "content": "B is Perfect",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#83",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's dynamic website is hosted using on-premises servers in the United States. The company is launching its product in Europe, and it wants to optimize site loading times for new European users. The site's backend must remain in the United States. The product is being launched in a few days, and an immediate solution is needed.<br>What should the solutions architect recommend?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#83",
          "answers": [
            {
              "choice": "<p>A. Launch an Amazon EC2 instance in us-east-1 and migrate the site to it.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Move the website to Amazon S3. Use Cross-Region Replication between Regions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon CloudFront with a custom origin pointing to the on-premises servers.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an Amazon Route 53 geoproximity routing policy pointing to on-premises servers.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 732506,
          "date": "Thu 01 Dec 2022 11:40",
          "username": "kajal1206",
          "content": "C is correct answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 728783,
          "date": "Mon 28 Nov 2022 05:47",
          "username": "koreanmonkey",
          "content": "CloudFront = CDN Service",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 726284,
          "date": "Fri 25 Nov 2022 00:55",
          "username": "Liliwood",
          "content": "C. <br>S3 Cross region Replication minimize latency but also copies objects across Amazon S3 buckets in different AWS Regions(data has to remain in origin thou) so B wrong.<br>Route 53 geo, does not help reducing the latency.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 723735,
          "date": "Mon 21 Nov 2022 17:22",
          "username": "Wpcorgan",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 709477,
          "date": "Wed 02 Nov 2022 00:52",
          "username": "Hunkie",
          "content": "Same question with detailed explanation <br><br>https://www.examtopics.com/discussions/amazon/view/27898-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 698934,
          "date": "Wed 19 Oct 2022 12:47",
          "username": "ArielSchivo",
          "content": "Option C, use CloudFront.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#84",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to reduce the cost of its existing three-tier web architecture. The web, application, and database servers are running on Amazon EC2 instances for the development, test, and production environments. The EC2 instances average 30% CPU utilization during peak hours and 10% CPU utilization during non-peak hours.<br>The production EC2 instances run 24 hours a day. The development and test EC2 instances run for at least 8 hours each day. The company plans to implement automation to stop the development and test EC2 instances when they are not in use.<br>Which EC2 instance purchasing solution will meet the company's requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#84",
          "answers": [
            {
              "choice": "<p>A. Use Spot Instances for the production EC2 instances. Use Reserved Instances for the development and test EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Reserved Instances for the production EC2 instances. Use On-Demand Instances for the development and test EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Spot blocks for the production EC2 instances. Use Reserved Instances for the development and test EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use On-Demand Instances for the production EC2 instances. Use Spot blocks for the development and test EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 697092,
          "date": "Mon 17 Oct 2022 10:06",
          "username": "ArielSchivo",
          "content": "Spot blocks are not longer available, and you can't use spot instances on Prod machines 24x7, so option B should be valid.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 723739,
          "date": "Mon 21 Nov 2022 17:24",
          "username": "Wpcorgan",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 717511,
          "date": "Sun 13 Nov 2022 21:25",
          "username": "Jtic",
          "content": "Reserved Instances and On-demand<br><br>Spot is out as the use case required continues instance running",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 712783,
          "date": "Mon 07 Nov 2022 04:18",
          "username": "Nigma",
          "content": "B is the answer<br><br>https://www.examtopics.com/discussions/amazon/view/80956-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
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
      "question_text": "<p>A company has a production web application in which users upload documents through a web interface or a mobile app. According to a new regulatory requirement. new documents cannot be modified or deleted after they are stored.<br>What should a solutions architect do to meet this requirement?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#85",
          "answers": [
            {
              "choice": "<p>A. Store the uploaded documents in an Amazon S3 bucket with S3 Versioning and S3 Object Lock enabled.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Store the uploaded documents in an Amazon S3 bucket. Configure an S3 Lifecycle policy to archive the documents periodically.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Store the uploaded documents in an Amazon S3 bucket with S3 Versioning enabled. Configure an ACL to restrict all access to read-only.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Store the uploaded documents on an Amazon Elastic File System (Amazon EFS) volume. Access the data by mounting the volume in read-only mode.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 697639,
          "date": "Mon 17 Oct 2022 20:59",
          "username": "123jhl0",
          "content": "You can use S3 Object Lock to store objects using a write-once-read-many (WORM) model. Object Lock can help prevent objects from being deleted or overwritten for a fixed amount of time or indefinitely. You can use S3 Object Lock to meet regulatory requirements that require WORM storage, or add an extra layer of protection against object changes and deletion.<br>Versioning is required and automatically activated as Object Lock is enabled.<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 723741,
          "date": "Mon 21 Nov 2022 17:25",
          "username": "Wpcorgan",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 714832,
          "date": "Thu 10 Nov 2022 02:02",
          "username": "flbcobra",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 699779,
          "date": "Thu 20 Oct 2022 12:04",
          "username": "Evangelia",
          "content": "aaaaaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 699777,
          "date": "Thu 20 Oct 2022 12:04",
          "username": "Evangelia",
          "content": "aaaaaaaaaaa",
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
      "question_text": "<p>A company has several web servers that need to frequently access a common Amazon RDS MySQL Multi-AZ DB instance. The company wants a secure method for the web servers to connect to the database while meeting a security requirement to rotate user credentials frequently.<br>Which solution meets these requirements?<br><br></p>",
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
              "choice": "<p>A. Store the database user credentials in AWS Secrets Manager. Grant the necessary IAM permissions to allow the web servers to access AWS Secrets Manager.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Store the database user credentials in AWS Systems Manager OpsCenter. Grant the necessary IAM permissions to allow the web servers to access OpsCenter.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Store the database user credentials in a secure Amazon S3 bucket. Grant the necessary IAM permissions to allow the web servers to retrieve credentials and access the database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Store the database user credentials in files encrypted with AWS Key Management Service (AWS KMS) on the web server file system. The web server should be able to decrypt the files and access the database.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 697643,
          "date": "Mon 17 Oct 2022 21:03",
          "username": "123jhl0",
          "content": "Secrets Manager enables you to replace hardcoded credentials in your code, including passwords, with an API call to Secrets Manager to retrieve the secret programmatically. This helps ensure the secret can't be compromised by someone examining your code, because the secret no longer exists in the code. Also, you can configure Secrets Manager to automatically rotate the secret for you according to a specified schedule. This enables you to replace long-term secrets with short-term ones, significantly reducing the risk of compromise.<br>https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 734475,
          "date": "Sat 03 Dec 2022 14:37",
          "username": "kewl",
          "content": "Rotate credentials = Secrets Manager",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 723744,
          "date": "Mon 21 Nov 2022 17:26",
          "username": "Wpcorgan",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 720513,
          "date": "Thu 17 Nov 2022 15:15",
          "username": "renekton",
          "content": "Answer is A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#87",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts an application on AWS Lambda functions that are invoked by an Amazon API Gateway API. The Lambda functions save customer data to an Amazon Aurora MySQL database. Whenever the company upgrades the database, the Lambda functions fail to establish database connections until the upgrade is complete. The result is that customer data is not recorded for some of the event.<br>A solutions architect needs to design a solution that stores customer data that is created during database upgrades.<br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#87",
          "answers": [
            {
              "choice": "<p>A. Provision an Amazon RDS proxy to sit between the Lambda functions and the database. Configure the Lambda functions to connect to the RDS proxy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Increase the run time of the Lambda functions to the maximum. Create a retry mechanism in the code that stores the customer data in the database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Persist the customer data to Lambda local storage. Configure new Lambda functions to scan the local storage to save the customer data to the database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Store the customer data in an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Create a new Lambda function that polls the queue and stores the customer data in the database.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 695461,
          "date": "Sat 15 Oct 2022 16:16",
          "username": "brushekattila9778",
          "content": "https://aws.amazon.com/rds/proxy/<br><br>RDS Proxy minimizes application disruption from outages affecting the availability of your database by automatically connecting to a new database instance while preserving application connections. When failovers occur, RDS Proxy routes requests directly to the new database instance. This reduces failover times for Aurora and RDS databases by up to 66%.Aurora supports RDS proxy!<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.html",
          "upvote_count": "111",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 725089,
          "date": "Wed 23 Nov 2022 12:43",
          "username": "attila9778",
          "content": "Aurora supports RDS proxy!<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 698238,
          "date": "Tue 18 Oct 2022 14:37",
          "username": "123jhl0gcmrjbrtinyfoot",
          "content": "The answer is D. <br>RDS Proxy doesn't support Aurora DBs. See limitations at:<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.htmlYou can use RDS Proxy with Aurora Serverless v2 clusters but not with Aurora Serverless v1 clusters. <br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.htmlActually RDS Proxy supports Aurora DBs running on PostgreSQL and MySQL.<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.Aurora_Fea_Regions_DB-eng.Feature.RDS_Proxy.html<br><br>With RDS proxy, you only expose a single endpoint for request to hit and any failure of the primary DB in a Multi-AZ configuration is will be managed automatically by RDS Proxy to point to the new primary DB.  Hence RDS proxy is the most efficient way of solving the issue as additional code change is required. <br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.howitworks.html",
          "upvote_count": "922",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 725714,
          "date": "Thu 24 Nov 2022 10:54",
          "username": "gcmrjbr",
          "content": "You can use RDS Proxy with Aurora Serverless v2 clusters but not with Aurora Serverless v1 clusters. <br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 722689,
          "date": "Sun 20 Nov 2022 15:20",
          "username": "tinyfoot",
          "content": "Actually RDS Proxy supports Aurora DBs running on PostgreSQL and MySQL.<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.Aurora_Fea_Regions_DB-eng.Feature.RDS_Proxy.html<br><br>With RDS proxy, you only expose a single endpoint for request to hit and any failure of the primary DB in a Multi-AZ configuration is will be managed automatically by RDS Proxy to point to the new primary DB.  Hence RDS proxy is the most efficient way of solving the issue as additional code change is required. <br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.howitworks.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 732048,
          "date": "Wed 30 Nov 2022 23:21",
          "username": "bgingrich",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.PostgreSQL.html<br>When you perform a major version upgrade of the primary DB instance, all the in-Region read replicas are also automatically upgraded. After the upgrade workflow starts, the read replicas wait for the pg_upgrade to complete successfully on the primary DB instance. Then the primary DB instance upgrade waits for the read replica upgrades to complete. You experience an outage until the upgrade is complete.<br><br>If your DB instance is in a Multi-AZ deployment, both the primary writer DB instance and standby DB instances are upgraded. The writer and standby DB instances are upgraded at the same time.<br><br>After an upgrade is complete, you can't revert to the previous version of the database engine. If you want to return to the previous version, restore the DB snapshot that was taken before the upgrade to create a new DB instance. <br><br>Seems to indicate that the instance is going down no matter what, RDS Proxy or not.I say D, store data in SQS and access it once the instance is back up.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 726829,
          "date": "Fri 25 Nov 2022 15:08",
          "username": "ocbn3wby",
          "content": "No specific information that supports answer A - Aurora has failover feature (promoting replica to master). However, in RDS Proxy documentation it's not specified how to benefit from the failover Aurora feature - nor the present question points to failing over master to replica. <br><br>Answer is D. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 722314,
          "date": "Sun 20 Nov 2022 01:42",
          "username": "hollie",
          "content": "\\\"You can use RDS Proxy with Aurora Serverless v2 clusters but not with Aurora Serverless v1 clusters.\\\" according to https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.html. Thus Aurora can be used with RDS proxy.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 717751,
          "date": "Mon 14 Nov 2022 08:00",
          "username": "pspinelli19",
          "content": "dddd<br>https://www.examtopics.com/discussions/amazon/view/61069-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 715792,
          "date": "Fri 11 Nov 2022 07:35",
          "username": "study_aws1",
          "content": "All choices point to D). <br>Only point is the specific reason for mention of Amazon SQS FIFO queue. Not sure how FIFO queue value adds in this case.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 714833,
          "date": "Thu 10 Nov 2022 02:05",
          "username": "flbcobra",
          "content": "Amazon RDS Proxy is a fully managed, highly available database proxy for Amazon Relational Database Service (RDS) that makes applications more scalable, more resilient to database failures, and more secure.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 711330,
          "date": "Fri 04 Nov 2022 20:30",
          "username": "backbencher2022",
          "content": "Solution requirement is to store customer data while upgrading. Proxy can't do that. We need SQS",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 709407,
          "date": "Tue 01 Nov 2022 20:44",
          "username": "rob74",
          "content": "The question is \\\"a solution that storesdata\\\"-->So for me answer is D-->Store data in SQS",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 707567,
          "date": "Sun 30 Oct 2022 02:52",
          "username": "SimonParkocbn3wbyAbhiJo",
          "content": "In my humble opinion, the answer is A.  <br>RDS Proxy makes applications more resilient to database failures by automatically connecting to a standby DB instance while preserving application connections.Hi, <br><br>There is no strong documentation that points to this logic: RDS Proxy makes use of the Aurora Failover feature (which is failing over from primary write master to promoting read replicas). <br><br>It says it's resilient to failovers, but I could not find configuration on how to choose to what replica to make failover to. I'd still go with answer D. Using RDS Proxy with Aurora clusters that are part of an Aurora global database isn't currently supported.",
          "upvote_count": "211",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 726826,
          "date": "Fri 25 Nov 2022 15:05",
          "username": "ocbn3wby",
          "content": "Hi, <br><br>There is no strong documentation that points to this logic: RDS Proxy makes use of the Aurora Failover feature (which is failing over from primary write master to promoting read replicas). <br><br>It says it's resilient to failovers, but I could not find configuration on how to choose to what replica to make failover to. I'd still go with answer D. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 718987,
          "date": "Tue 15 Nov 2022 18:37",
          "username": "AbhiJo",
          "content": "Using RDS Proxy with Aurora clusters that are part of an Aurora global database isn't currently supported.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 703353,
          "date": "Mon 24 Oct 2022 22:54",
          "username": "Six_Fingered_Jose",
          "content": "answer should be D,<br>SQS will keep the traffic in the queue while DB is in maintenance",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 700554,
          "date": "Fri 21 Oct 2022 08:21",
          "username": "tubtab",
          "content": "ddddddddddddddd",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 699785,
          "date": "Thu 20 Oct 2022 12:13",
          "username": "Evangelia",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 699351,
          "date": "Wed 19 Oct 2022 22:55",
          "username": "palermo777",
          "content": "The answer is D. <br>We don't have any information that customer has several RDS databases. Hence RDS Proxy might not help by redirecting the load to another DB",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 696556,
          "date": "Sun 16 Oct 2022 22:45",
          "username": "Moonus",
          "content": "D is the answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 693372,
          "date": "Wed 12 Oct 2022 22:44",
          "username": "Lilibell",
          "content": "The answer is D",
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
      "question_text": "<p>A survey company has gathered data for several years from areas in the United States. The company hosts the data in an Amazon S3 bucket that is 3 TB in size and growing. The company has started to share the data with a European marketing firm that has S3 buckets. The company wants to ensure that its data transfer costs remain as low as possible.<br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#88",
          "answers": [
            {
              "choice": "<p>A. Configure the Requester Pays feature on the company's S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure S3 Cross-Region Replication from the company's S3 bucket to one of the marketing firm's S3 buckets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure cross-account access for the marketing firm so that the marketing firm has access to the company's S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the company's S3 bucket to use S3 Intelligent-Tiering. Sync the S3 bucket to one of the marketing firm's S3 buckets.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 703358,
          "date": "Mon 24 Oct 2022 23:04",
          "username": "Six_Fingered_Jose",
          "content": "this question is too vague imho<br>if the question is looking for a way to incur charges to the European company instead of the US company, then requester pay makes sense.<br><br>if they are looking to reduce overall data transfer cost, then B makes sense because the data does not leave the AWS network, thus data transfer cost should be lower technically?<br><br>A.  makes sense because the US company saves money, but the European company is paying for the charges so there is no overall saving in cost when you look at the big picture<br><br>I will go for B because they are not explicitly stating that they want the other company to pay for the charges",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 698244,
          "date": "Tue 18 Oct 2022 14:42",
          "username": "123jhl0",
          "content": "\\\"Typically, you configure buckets to be Requester Pays buckets when you want to share data but not incur charges associated with others accessing the data. For example, you might use Requester Pays buckets when making available large datasets, such as zip code directories, reference data, geospatial information, or web crawling data.\\\"<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 734478,
          "date": "Sat 03 Dec 2022 14:48",
          "username": "kewl",
          "content": "vote for A as requester would pay for the data transfer cost. <br>CRR would require data transfer costs of $0.02 (per GB data transferred)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 731843,
          "date": "Wed 30 Nov 2022 19:17",
          "username": "mj98",
          "content": "Answer is def A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 730742,
          "date": "Tue 29 Nov 2022 19:47",
          "username": "jhxetc",
          "content": "Don't overthink it. The customer wants to reduce it's cost not the european marketing firm. Any complexity behind adding request header would also fall on the euro firm - not the concern of the company. Also bear in mind, that there is no \\\"least overhead\\\" requirement - only cost.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 726981,
          "date": "Fri 25 Nov 2022 18:30",
          "username": "Vesperia",
          "content": "B makes more sense. Using solution A, you have to code it for every single object in the bucket with the x-amz-request-payer. When you share data, it's not likely for per view retrieval only, European marketing firm would run analytics on the whole data set. I agree the question does not describe cleanly though.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 726881,
          "date": "Fri 25 Nov 2022 16:19",
          "username": "ocbn3wby",
          "content": "The company has started to SHARE data - it's part of the company's business to send its data at minimal costs. <br><br>Let's think like this: If you own the European business which has own S3 buckets, and you are aware that there is CRR at low costs, but the provider of your data forces you to pay for all of the charges associated with \\\"requester pays\\\" - would you still do business with the US company? <br><br>Answer B is closer to my heart.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 723748,
          "date": "Mon 21 Nov 2022 17:29",
          "username": "Wpcorgan",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 722454,
          "date": "Sun 20 Nov 2022 08:52",
          "username": "edk11z",
          "content": "The company wants to reduce ITS data cost. Not the marketing firm's.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 720521,
          "date": "Thu 17 Nov 2022 15:27",
          "username": "renekton",
          "content": "Answer is A <br>\\\"has started to share the data\\\" so they already sharing and \\\"The company wants to ensure that its data transfer costs remain as low as possible\\\" this is A trust me.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 719742,
          "date": "Wed 16 Nov 2022 15:37",
          "username": "Ack3rman",
          "content": "If you are setting the replication configuration in a cross-account scenario, where the source and destination buckets are owned by different AWS accounts, the following additional requirement applies:<br><br>The owner of the destination buckets must grant the owner of the source bucket permissions to replicate objects with a bucket policy.<br><br>The destination buckets cannot be configured as Requester Pays buckets. (so can't be A)<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 717752,
          "date": "Mon 14 Nov 2022 08:04",
          "username": "pspinelli19",
          "content": "aa<br>https://www.examtopics.com/discussions/amazon/view/82811-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 717532,
          "date": "Sun 13 Nov 2022 22:28",
          "username": "vladislove",
          "content": "The answer is A, because of the wording of the requirement: \\\"The company wants to ensure that ITS data transfer costs remain as low as possible\\\". <br>If Requester Pays is enabled on the bucket, then the Marketing Firm will exclusively be paying the data transfer charges. The Company will only pay for data storage.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 715609,
          "date": "Fri 11 Nov 2022 00:13",
          "username": "EKA_CloudGod",
          "content": "Answer is A. <br>https://www.examtopics.com/discussions/amazon/view/82811-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 714502,
          "date": "Wed 09 Nov 2022 12:27",
          "username": "PS_Rvn_thanhtung",
          "content": "Yes B Makes more sense, CRR - S3.When to use Cross-Region Replication<br>S3 Cross-Region Replication (CRR) is used to copy objects across Amazon S3 buckets in different AWS Regions. CRR can help you do the following:<br><br>Meet compliance requirements – Although Amazon S3 stores your data across multiple geographically distant Availability Zones by default, compliance requirements might dictate that you store data at even greater distances. To satisfy these requirements, use Cross-Region Replication to replicate data between distant AWS Regions.<br><br>Minimize latency – If your customers are in two geographic locations, you can minimize latency in accessing objects by maintaining object copies in AWS Regions that are geographically closer to your users.<br><br>Increase operational efficiency – If you have compute clusters in two different AWS Regions that analyze the same set of objects, you might choose to maintain object copies in those Regions.",
          "upvote_count": "22",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 715910,
          "date": "Fri 11 Nov 2022 10:29",
          "username": "vn_thanhtung",
          "content": "When to use Cross-Region Replication<br>S3 Cross-Region Replication (CRR) is used to copy objects across Amazon S3 buckets in different AWS Regions. CRR can help you do the following:<br><br>Meet compliance requirements – Although Amazon S3 stores your data across multiple geographically distant Availability Zones by default, compliance requirements might dictate that you store data at even greater distances. To satisfy these requirements, use Cross-Region Replication to replicate data between distant AWS Regions.<br><br>Minimize latency – If your customers are in two geographic locations, you can minimize latency in accessing objects by maintaining object copies in AWS Regions that are geographically closer to your users.<br><br>Increase operational efficiency – If you have compute clusters in two different AWS Regions that analyze the same set of objects, you might choose to maintain object copies in those Regions.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 713267,
          "date": "Mon 07 Nov 2022 20:10",
          "username": "srao123srao123",
          "content": "B is the correct answer.As the data transfer costs (cross region replication)from S3 to another region is $0.02 which uses AWS backbone.<br> Where option C uses internet for data transfer out from S3 which costs $0.09.<br>https://aws.amazon.com/s3/pricing/A is incorrect because the requirement isto keep the data transfer costs as low as possible not who pays for it.We need to pick the option that costs less.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 713271,
          "date": "Mon 07 Nov 2022 20:15",
          "username": "srao123",
          "content": "A is incorrect because the requirement isto keep the data transfer costs as low as possible not who pays for it.We need to pick the option that costs less.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 712996,
          "date": "Mon 07 Nov 2022 12:11",
          "username": "Deplakeraje7676",
          "content": "B is not looking correct, because it says that you are going to replicate S3 from your account to another account, not sure it is possiblehttps://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-walkthrough-2.html<br><br>Setting up replication when source and destination buckets are owned by different AWS accounts is similar to setting replication when both buckets are owned by the same account. The only difference is that the destination bucket owner must grant the source bucket owner permission to replicate objects by adding a bucket policy.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 716537,
          "date": "Sat 12 Nov 2022 08:56",
          "username": "raje7676",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-walkthrough-2.html<br><br>Setting up replication when source and destination buckets are owned by different AWS accounts is similar to setting replication when both buckets are owned by the same account. The only difference is that the destination bucket owner must grant the source bucket owner permission to replicate objects by adding a bucket policy.",
          "upvote_count": "1",
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
      "question_text": "<p>A company uses Amazon S3 to store its confidential audit documents. The S3 bucket uses bucket policies to restrict access to audit team IAM user credentials according to the principle of least privilege. Company managers are worried about accidental deletion of documents in the S3 bucket and want a more secure solution.<br>What should a solutions architect do to secure the audit documents?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#89",
          "answers": [
            {
              "choice": "<p>A. Enable the versioning and MFA Delete features on the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable multi-factor authentication (MFA) on the IAM user credentials for each audit team IAM user account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Add an S3 Lifecycle policy to the audit team's IAM user accounts to deny the s3:DeleteObject action during audit dates.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Key Management Service (AWS KMS) to encrypt the S3 bucket and restrict audit team IAM user accounts from accessing the KMS key.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 698259,
          "date": "Tue 18 Oct 2022 15:12",
          "username": "123jhl0",
          "content": "Same as Question #44",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 723749,
          "date": "Mon 21 Nov 2022 17:29",
          "username": "Wpcorgan",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 717506,
          "date": "Sun 13 Nov 2022 21:22",
          "username": "Jtic",
          "content": "Enable the versioning and MFA Delete features on the S3 bucket.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#90",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using a SQL database to store movie data that is publicly accessible. The database runs on an Amazon RDS Single-AZ DB instance. A script runs queries at random intervals each day to record the number of new movies that have been added to the database. The script must report a final total during business hours.<br>The company's development team notices that the database performance is inadequate for development tasks when the script is running. A solutions architect must recommend a solution to resolve this issue.<br>Which solution will meet this requirement with the LEAST operational overhead?<br><br></p>",
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
              "choice": "<p>A. Modify the DB instance to be a Multi-AZ deployment.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a read replica of the database. Configure the script to query only the read replica.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Instruct the development team to manually export the entries in the database at the end of each day.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon ElastiCache to cache the common queries that the script runs against the database.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 696424,
          "date": "Sun 16 Oct 2022 19:48",
          "username": "alvarez100",
          "content": "Elasti Cache if for reading common results. The script is looking for new movies added. Read replica would be the best choice.",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 726990,
          "date": "Fri 25 Nov 2022 18:55",
          "username": "VesperiaVesperia",
          "content": "Caching works best for static contents. When you run a total, you need to go through all the records in a table. The question is not constructed properly. Best solution is to create an index on the added date, it won't take long, nor heavy io/cpu to get the total number of newly added total for the day. This approach takes minimal effort, does not incur any extra charge, better than both B and D. I would choose B as the answer. For the stated type of queries It's better than D .",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 726994,
          "date": "Fri 25 Nov 2022 19:00",
          "username": "Vesperia",
          "content": "I would choose B as the answer. For the stated type of queries It's better than D .",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 723750,
          "date": "Mon 21 Nov 2022 17:30",
          "username": "Wpcorgan",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 720378,
          "date": "Thu 17 Nov 2022 10:50",
          "username": "htangga",
          "content": "B is more make sense for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 713504,
          "date": "Tue 08 Nov 2022 06:29",
          "username": "Bevemo",
          "content": "Not D as apps have to be re-written to take advantage of elasticache APIs - that is too much overhead.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 713059,
          "date": "Mon 07 Nov 2022 14:15",
          "username": "Gil80",
          "content": "• You have a production DB that is taking on a normal load<br>\t• You want to run a reporting application to run some analytics<br>\t• You create a read replica to run the new workload there<br>\t• The prod application is unaffected<br>\t• Read replicas are used for SELECT (=read) only kind of statements<br>Therefore I believe B to be the better answer.<br><br>As for \\\"D\\\" - ElastiCache use cases are:<br>1. Your data is slow or expensive to get when compared to cache retrieval.<br>2. Users access your data often.<br>3. Your data stays relatively the same, or if it changes quickly staleness is not a large issue.<br><br>1 - Somewhat true.<br>2 - Not true for our case.<br>3 - Also not true. The data changes throughout the day.<br><br>For my understanding, caching has to do with millisecond results, high-performance reads. These are not the issues mentioned in the questions, therefore B. ",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 711935,
          "date": "Sat 05 Nov 2022 19:05",
          "username": "Cizzla7049",
          "content": "Even though B is correct, it says least operational overhead which is D.  Like the other person said, AWS used similar use cases.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 711834,
          "date": "Sat 05 Nov 2022 15:58",
          "username": "Az900500",
          "content": "When you want to free your database from occasional operation overhead, read replica is key ; the operations runs on the replica while the db run continue operation smoothly.. ElasticCahe would have been considered \\\"If DB has issue before or after running the script\\\"<br><br>B is the answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 710173,
          "date": "Thu 03 Nov 2022 02:33",
          "username": "HunkieBevemoArielSchivo",
          "content": "For me its D.  It says least operation overhead. Its the use case of elastic cache.<br><br>https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/elasticache-use-cases.html#:~:text=Speed%20and%20expense,on%20other%0A%09%09%09%09factorsApps have to be re-written to take advantage of elasticache APIs - that is too much overhead.Not sure about that since it says \\\"Your data stays relatively the same, or if it changes quickly staleness is not a large issue\\\", and this is a case related to new movies added to the database.",
          "upvote_count": "111",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 713503,
          "date": "Tue 08 Nov 2022 06:28",
          "username": "Bevemo",
          "content": "Apps have to be re-written to take advantage of elasticache APIs - that is too much overhead.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 713017,
          "date": "Mon 07 Nov 2022 13:05",
          "username": "ArielSchivo",
          "content": "Not sure about that since it says \\\"Your data stays relatively the same, or if it changes quickly staleness is not a large issue\\\", and this is a case related to new movies added to the database.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 703361,
          "date": "Mon 24 Oct 2022 23:08",
          "username": "Six_Fingered_Jose",
          "content": "agree with B, the script only reads the data to produce a report and the slowdown only occurs when the script is running, thus having a read replica solves the issue with the least overhead",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 700557,
          "date": "Fri 21 Oct 2022 08:27",
          "username": "tubtab",
          "content": "bbbbbbbbbbbbbb",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 696464,
          "date": "Sun 16 Oct 2022 21:22",
          "username": "Chunsli",
          "content": "B seems to make a better sense",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 693570,
          "date": "Thu 13 Oct 2022 05:43",
          "username": "brushek",
          "content": "It should be read replica.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#91",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has applications that run on Amazon EC2 instances in a VPC.  One of the applications needs to call the Amazon S3 API to store and read objects. According to the company's security regulations, no traffic from the applications is allowed to travel across the internet.<br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#91",
          "answers": [
            {
              "choice": "<p>A. Configure an S3 gateway endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an S3 bucket in a private subnet.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an S3 bucket in the same AWS Region as the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure a NAT gateway in the same subnet as the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 697103,
          "date": "Mon 17 Oct 2022 10:13",
          "username": "ArielSchivo",
          "content": "Gateway endpoints provide reliable connectivity to Amazon S3 and DynamoDB without requiring an internet gateway or a NAT device for your VPC.  It should be option A. <br><br>https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 723757,
          "date": "Mon 21 Nov 2022 17:47",
          "username": "Wpcorgan",
          "content": "A is correct",
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
      "question_text": "<p>A company is storing sensitive user information in an Amazon S3 bucket. The company wants to provide secure access to this bucket from the application tier running on Amazon EC2 instances inside a VPC. <br>Which combination of steps should a solutions architect take to accomplish this? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#92",
          "answers": [
            {
              "choice": "<p>A. Configure a VPC gateway endpoint for Amazon S3 within the VPC. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a bucket policy to make the objects in the S3 bucket public.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a bucket policy that limits access to only the application tier running in the VPC. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM user with an S3 access policy and copy the IAM credentials to the EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a NAT instance and have the EC2 instances use the NAT instance to access the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 727727,
          "date": "Sat 26 Nov 2022 18:51",
          "username": "DivaLight",
          "content": "Option AC",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 723759,
          "date": "Mon 21 Nov 2022 17:48",
          "username": "Wpcorgan",
          "content": "A and C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 717503,
          "date": "Sun 13 Nov 2022 21:19",
          "username": "Jtic",
          "content": "AC is the correct answer in the use case",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 715621,
          "date": "Fri 11 Nov 2022 00:45",
          "username": "rjamrjam",
          "content": "Options A and ETypo it should be A and C",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 715623,
          "date": "Fri 11 Nov 2022 00:47",
          "username": "rjam",
          "content": "Typo it should be A and C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 698937,
          "date": "Wed 19 Oct 2022 12:52",
          "username": "ArielSchivo",
          "content": "Options A and C. <br><br>https://aws.amazon.com/premiumsupport/knowledge-center/s3-private-connection-no-authentication/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AC"
        }
      ]
    },
    {
      "question_id": "#93",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an on-premises application that is powered by a MySQL database. The company is migrating the application to AWS to increase the application's elasticity and availability.<br>The current architecture shows heavy read activity on the database during times of normal operation. Every 4 hours, the company's development team pulls a full export of the production database to populate a database in the staging environment. During this period, users experience unacceptable application latency. The development team is unable to use the staging environment until the procedure completes.<br>A solutions architect must recommend replacement architecture that alleviates the application latency issue. The replacement architecture also must give the development team the ability to continue using the staging environment without delay.<br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#93",
          "answers": [
            {
              "choice": "<p>A. Use Amazon Aurora MySQL with Multi-AZ Aurora Replicas for production. Populate the staging database by implementing a backup and restore process that uses the mysqldump utility.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon Aurora MySQL with Multi-AZ Aurora Replicas for production. Use database cloning to create the staging database on-demand.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon RDS for MySQL with a Multi-AZ deployment and read replicas for production. Use the standby instance for the staging database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon RDS for MySQL with a Multi-AZ deployment and read replicas for production. Populate the staging database by implementing a backup and restore process that uses the mysqldump utility.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 727730,
          "date": "Sat 26 Nov 2022 18:56",
          "username": "DivaLight",
          "content": "Option B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 717757,
          "date": "Mon 14 Nov 2022 08:19",
          "username": "pspinelli19",
          "content": "Amazon Aurora Fast Database Cloning is what is required here.<br>https://aws.amazon.com/blogs/aws/amazon-aurora-fast-database-cloning/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 707665,
          "date": "Sun 30 Oct 2022 08:22",
          "username": "KLLIM",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Clone.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 697473,
          "date": "Mon 17 Oct 2022 16:39",
          "username": "LeGloupier",
          "content": "B<br>Database cloning",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#94",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is designing an application where users upload small files into Amazon S3. After a user uploads a file, the file requires one-time simple processing to transform the data and save the data in JSON format for later analysis.<br>Each file must be processed as quickly as possible after it is uploaded. Demand will vary. On some days, users will upload a high number of files. On other days, users will upload a few files or no files.<br>Which solution meets these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#94",
          "answers": [
            {
              "choice": "<p>A. Configure Amazon EMR to read text files from Amazon S3. Run processing scripts to transform the data. Store the resulting JSON file in an Amazon Aurora DB cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure Amazon S3 to send an event notification to an Amazon Simple Queue Service (Amazon SQS) queue. Use Amazon EC2 instances to read from the queue and process the data. Store the resulting JSON file in Amazon DynamoDB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure Amazon S3 to send an event notification to an Amazon Simple Queue Service (Amazon SQS) queue. Use an AWS Lambda function to read from the queue and process the data. Store the resulting JSON file in Amazon DynamoDB. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure Amazon EventBridge (Amazon CloudWatch Events) to send an event to Amazon Kinesis Data Streams when a new file is uploaded. Use an AWS Lambda function to consume the event from the stream and process the data. Store the resulting JSON file in an Amazon Aurora DB cluster.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 730289,
          "date": "Tue 29 Nov 2022 12:10",
          "username": "HussamShokr",
          "content": "answer is C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 728155,
          "date": "Sun 27 Nov 2022 12:28",
          "username": "Kapello10",
          "content": "cccccccccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 727732,
          "date": "Sat 26 Nov 2022 19:00",
          "username": "DivaLight",
          "content": "Option C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 723760,
          "date": "Mon 21 Nov 2022 17:51",
          "username": "Wpcorgan",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 717783,
          "date": "Mon 14 Nov 2022 09:06",
          "username": "Pamban",
          "content": "https://www.examtopics.com/discussions/amazon/view/67958-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 717501,
          "date": "Sun 13 Nov 2022 21:16",
          "username": "Jtic",
          "content": "SQS + LAMDA + JSON to Dynamo DB",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 709490,
          "date": "Wed 02 Nov 2022 01:36",
          "username": "Hunkie",
          "content": "With explanations <br><br>https://www.examtopics.com/discussions/amazon/view/67958-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 707826,
          "date": "Sun 30 Oct 2022 14:22",
          "username": "rjamrjam",
          "content": "Option C<br>Dynamo DB is a NoSQL-JSON supportedalso Use an AWS Lambda - serverless - less operational overhead",
          "upvote_count": "33",
          "selected_answers": ""
        },
        {
          "id": 707827,
          "date": "Sun 30 Oct 2022 14:23",
          "username": "rjam",
          "content": "also Use an AWS Lambda - serverless - less operational overhead",
          "upvote_count": "3",
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
      "question_text": "<p>An application allows users at a company's headquarters to access product data. The product data is stored in an Amazon RDS MySQL DB instance. The operations team has isolated an application performance slowdown and wants to separate read traffic from write traffic. A solutions architect needs to optimize the application's performance quickly.<br>What should the solutions architect recommend?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#95",
          "answers": [
            {
              "choice": "<p>A. Change the existing database to a Multi-AZ deployment. Serve the read requests from the primary Availability Zone.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Change the existing database to a Multi-AZ deployment. Serve the read requests from the secondary Availability Zone.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create read replicas for the database. Configure the read replicas with half of the compute and storage resources as the source database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create read replicas for the database. Configure the read replicas with the same compute and storage resources as the source database.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 727733,
          "date": "Sat 26 Nov 2022 19:01",
          "username": "DivaLight",
          "content": "Option D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 723762,
          "date": "Mon 21 Nov 2022 17:53",
          "username": "Wpcorgan",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 712840,
          "date": "Mon 07 Nov 2022 07:19",
          "username": "Nigma",
          "content": "D<br><br>https://www.examtopics.com/discussions/amazon/view/46461-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 709492,
          "date": "Wed 02 Nov 2022 01:42",
          "username": "Hunkie",
          "content": "If you scale the source DB instance, also scale the read replicas.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 698963,
          "date": "Wed 19 Oct 2022 13:23",
          "username": "ArielSchivo",
          "content": "D is correct.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_MySQL.Replication.ReadReplicas.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#96",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An Amazon EC2 administrator created the following policy associated with an IAM group containing several users:<br><img src=\"https://img.examtopics.com/aws-certified-solutions-architect-associate-saa-c03/image1.png\"><br>What is the effect of this policy?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#96",
          "answers": [
            {
              "choice": "<p>A. Users can terminate an EC2 instance in any AWS Region except us-east-1.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Users can terminate an EC2 instance with the IP address 10.100.100.1 in the us-east-1 Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Users can terminate an EC2 instance in the us-east-1 Region when the user's source IP is 10.100.100.254.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Users cannot terminate an EC2 instance in the us-east-1 Region when the user's source IP is 10.100.100.254.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 733433,
          "date": "Fri 02 Dec 2022 05:04",
          "username": "Subh_fidelity",
          "content": "C is correct.<br>0.0/24 , the following five IP addresses are reserved:<br>0.0: Network address.<br>0.1: Reserved by AWS for the VPC router.<br>0.2: Reserved by AWS. The IP address of the DNS server is the base of the VPC network range plus two. ...<br>0.3: Reserved by AWS for future use.<br>0.255: Network broadcast address.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 723764,
          "date": "Mon 21 Nov 2022 17:56",
          "username": "Wpcorgan",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 719187,
          "date": "Wed 16 Nov 2022 00:46",
          "username": "rjam",
          "content": "Option C is the correct answer. <br><br> if CIDR block 10.100.100.0/24, then reserved IP addresses are:<br>• 10.100.100.0 – Network Address<br>• 10.100.100.1 – reserved by AWS for the VPC router<br>• 10.100.100.2 – reserved by AWS for mapping to Amazon-provided DNS<br>• 10.100.100.3 – reserved by AWS for future use<br>• 10.100.100.255 – Network Broadcast Address. AWS does not support broadcast in a VPC,<br><br>The above numbers cannot be used.This rules out the option B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 717500,
          "date": "Sun 13 Nov 2022 21:14",
          "username": "Jtic",
          "content": "should be Last IP 10.100.100.254<br><br>Not an option<br>10.100.100.1: Reserved by AWS for the VPC router",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 704585,
          "date": "Wed 26 Oct 2022 12:49",
          "username": "masetromain",
          "content": "https://www.examtopics.com/discussions/amazon/view/27814-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#97",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a large Microsoft SharePoint deployment running on-premises that requires Microsoft Windows shared file storage. The company wants to migrate this workload to the AWS Cloud and is considering various storage options. The storage solution must be highly available and integrated with Active Directory for access control.<br>Which solution will satisfy these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#97",
          "answers": [
            {
              "choice": "<p>A. Configure Amazon EFS storage and set the Active Directory domain for authentication.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an SMB file share on an AWS Storage Gateway file gateway in two Availability Zones.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon S3 bucket and configure Microsoft Windows Server to mount it as a volume.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon FSx for Windows File Server file system on AWS and set the Active Directory domain for authentication.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 732542,
          "date": "Thu 01 Dec 2022 12:37",
          "username": "kajal1206",
          "content": "Answer is D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 723767,
          "date": "Mon 21 Nov 2022 17:58",
          "username": "Wpcorgan",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 719397,
          "date": "Wed 16 Nov 2022 07:52",
          "username": "TonyghostR05",
          "content": "Window only available for using FSx",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 712855,
          "date": "Mon 07 Nov 2022 07:47",
          "username": "NigmaNigma",
          "content": "D.  Windows is the keyword<br><br>https://www.examtopics.com/discussions/amazon/view/29780-exam-aws-certified-solutions-architect-associate-saa-c02/EFS is for Linux<br>FSx is for Windows",
          "upvote_count": "14",
          "selected_answers": ""
        },
        {
          "id": 712856,
          "date": "Mon 07 Nov 2022 07:47",
          "username": "Nigma",
          "content": "EFS is for Linux<br>FSx is for Windows",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 709497,
          "date": "Wed 02 Nov 2022 02:01",
          "username": "Hunkie",
          "content": "DDDDDDDD",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 706916,
          "date": "Sat 29 Oct 2022 05:26",
          "username": "dokaedu",
          "content": "Correct Answer:D <br>https://docs.aws.amazon.com/fsx/latest/WindowsGuide/aws-ad-integration-fsxW.html",
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
      "question_text": "<p>An image-processing company has a web application that users use to upload images. The application uploads the images into an Amazon S3 bucket. The company has set up S3 event notifications to publish the object creation events to an Amazon Simple Queue Service (Amazon SQS) standard queue. The SQS queue serves as the event source for an AWS Lambda function that processes the images and sends the results to users through email.<br>Users report that they are receiving multiple email messages for every uploaded image. A solutions architect determines that SQS messages are invoking the Lambda function more than once, resulting in multiple email messages.<br>What should the solutions architect do to resolve this issue with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#98",
          "answers": [
            {
              "choice": "<p>A. Set up long polling in the SQS queue by increasing the ReceiveMessage wait time to 30 seconds.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Change the SQS standard queue to an SQS FIFO queue. Use the message deduplication ID to discard duplicate messages.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Increase the visibility timeout in the SQS queue to a value that is greater than the total of the function timeout and the batch window timeout.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the Lambda function to delete each message from the SQS queue immediately after the message is read before processing.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 703369,
          "date": "Mon 24 Oct 2022 23:19",
          "username": "Six_Fingered_Jose",
          "content": "answer should be C,<br>users get duplicated messages because -> lambda polls the message, and starts processing the message.<br>However, before the first lambda can finish processing the message, the visibility timeout runs out on SQS, and SQS returns the message to the poll, causing another Lambda node to process that same message.<br>By increasing the visibility timeout, it should prevent SQS from returning a message back to the poll before Lambda can finish processing the message",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 693607,
          "date": "Thu 13 Oct 2022 06:37",
          "username": "brushek",
          "content": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html<br><br>this is important part:<br>Immediately after a message is received, it remains in the queue. To prevent other consumers from processing the message again, Amazon SQS sets a visibility timeout, a period of time during which Amazon SQS prevents other consumers from receiving and processing the message. The default visibility timeout for a message is 30 seconds. The minimum is 0 seconds. The maximum is 12 hours.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 723768,
          "date": "Mon 21 Nov 2022 17:59",
          "username": "Wpcorgan",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 709502,
          "date": "Wed 02 Nov 2022 02:09",
          "username": "Hunkie",
          "content": "https://www.examtopics.com/discussions/amazon/view/83096-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 700608,
          "date": "Fri 21 Oct 2022 09:21",
          "username": "rob74",
          "content": "Iexlude Polling because-->\\\"The maximum long polling wait time is 20 seconds\\\"<br>https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-short-and-long-polling.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 692345,
          "date": "Tue 11 Oct 2022 20:50",
          "username": "MXB05",
          "content": "A can not be correct, long polling will only ensure that all images are retrieved from all SQS servers in one query. If the same message triggers the lambda function twice it is likely because the visibility timeout isn't long enough and lambda didn't repsond in time with a deletion of the message ->> C is correct",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#99",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is implementing a shared storage solution for a gaming application that is hosted in an on-premises data center. The company needs the ability to use Lustre clients to access data. The solution must be fully managed.<br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#99",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Storage Gateway file gateway. Create a file share that uses the required client protocol. Connect the application server to the file share.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon EC2 Windows instance. Install and configure a Windows file share role on the instance. Connect the application server to the file share.<br></p>",
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
          "id": 698284,
          "date": "Tue 18 Oct 2022 16:09",
          "username": "123jhl0",
          "content": "Answer is D. <br>Lustre in the question is only available as FSx<br>https://aws.amazon.com/fsx/lustre/",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 723770,
          "date": "Mon 21 Nov 2022 18:01",
          "username": "Wpcorgan",
          "content": "D is correct",
          "upvote_count": "1",
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
      "question_text": "<p>A company's containerized application runs on an Amazon EC2 instance. The application needs to download security certificates before it can communicate with other business applications. The company wants a highly secure solution to encrypt and decrypt the certificates in near real time. The solution also needs to store data in highly available storage after the data is encrypted.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#100",
          "answers": [
            {
              "choice": "<p>A. Create AWS Secrets Manager secrets for encrypted certificates. Manually update the certificates as needed. Control access to the data by using fine-grained IAM access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Lambda function that uses the Python cryptography library to receive and perform encryption operations. Store the function in an Amazon S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Key Management Service (AWS KMS) customer managed key. Allow the EC2 role to use the KMS key for encryption operations. Store the encrypted data on Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Key Management Service (AWS KMS) customer managed key. Allow the EC2 role to use the KMS key for encryption operations. Store the encrypted data on Amazon Elastic Block Store (Amazon EBS) volumes.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 696559,
          "date": "Sun 16 Oct 2022 22:47",
          "username": "Chunsli",
          "content": "C makes a better sense. Between C (S3) and D (EBS), S3 is highly available with LEAST operational overhead.",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 692346,
          "date": "Tue 11 Oct 2022 20:53",
          "username": "MXB05",
          "content": "Correct Answer is C: EBS is not highly available",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 731534,
          "date": "Wed 30 Nov 2022 14:39",
          "username": "fabio3wz",
          "content": "Why do some people say that EBS is HA? how can an EBS volume be highly available??? S3 is the only option, and of course we need to use KMS, then the answer is clearly C. ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 723772,
          "date": "Mon 21 Nov 2022 18:03",
          "username": "Wpcorgan",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 719400,
          "date": "Wed 16 Nov 2022 07:53",
          "username": "Cizzla7049",
          "content": "D is correct answer. Least overhead, just open EBS while launching EC2. It's not about which one is the most highly available, it's about which one fits the scenario best.<br>https://aws.amazon.com/blogs/compute/must-know-best-practices-for-amazon-ebs-encryption/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 707577,
          "date": "Sun 30 Oct 2022 03:37",
          "username": "SimonPark",
          "content": "S3 = highly available storage than EBS<br>https://www.justaftermidnight247.com/insights/ebs-efs-and-s3-when-to-use-awss-three-storage-solutions/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 703370,
          "date": "Mon 24 Oct 2022 23:22",
          "username": "Six_Fingered_Jose",
          "content": "C should be the answer,<br>Highly available storage = S3",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 702041,
          "date": "Sun 23 Oct 2022 11:38",
          "username": "nikerlas",
          "content": "\\\"store data in highly available storage after the data is encrypted.\\\"==> EBS",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    }
  ]
}