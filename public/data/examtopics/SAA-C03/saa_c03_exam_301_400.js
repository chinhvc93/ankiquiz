var SAA_C03_Exam_301_400 = {
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#301",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A university research laboratory needs to migrate 30 TB of data from an on-premises Windows file server to Amazon FSx for Windows File Server. The laboratory has a 1 Gbps network link that many other departments in the university share.<br><br>The laboratory wants to implement a data migration service that will maximize the performance of the data transfer. However, the laboratory needs to be able to control the amount of bandwidth that the service uses to minimize the impact on other departments. The data migration must take place within the next 5 days.<br><br>Which AWS solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#301",
          "answers": [
            {
              "choice": "<p>A. AWS Snowcone<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Amazon FSx File Gateway<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. AWS DataSync<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. AWS Transfer Family<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 836192,
          "date": "Sat 11 Mar 2023 16:07",
          "username": "\t\t\t\tMichal_L_95\t\t\t",
          "content": "As read a little bit, I assume that B (FSx File Gateway) requires a little bit more configuration rather than C (DataSync). From Stephane Maarek course explanation about DataSync:<br> An online data transfer service that simplifies, automates, and accelerates copying large amounts of data between on-premises storage systems and AWS Storage services, as well as between AWS Storage services.<br><br>You can use AWS DataSync to migrate data located on-premises, at the edge, or in other clouds to Amazon S3, Amazon EFS, Amazon FSx for Windows File Server, Amazon FSx for Lustre, Amazon FSx for OpenZFS, and Amazon FSx for NetApp ONTAP.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 830891,
          "date": "Mon 06 Mar 2023 15:20",
          "username": "\t\t\t\tAlessandraSAA\t\t\t",
          "content": "A not possible because Snowcone it's just 8TB and it takes 4-6 business days to deliver<br>B why cannot be https://aws.amazon.com/storagegateway/file/fsx/?<br>C I don't really get this<br>D cannot be because not compatible - https://aws.amazon.com/aws-transfer-family/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 827494,
          "date": "Thu 02 Mar 2023 23:20",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "Voting C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 819502,
          "date": "Thu 23 Feb 2023 18:41",
          "username": "\t\t\t\tBhawesh\t\t\t",
          "content": "C.  - DataSync is Correct.A.  Snowcone is incorrect. The question says data migration must take place within the next 5 days.AWS says: If you order, you will receive the Snowcone device in approximately 4-6 days.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 817127,
          "date": "Tue 21 Feb 2023 21:20",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "DataSync can be used to migrate data between on-premises Windows file servers and Amazon FSx for Windows File Server with its compatibility for Windows file systems.<br><br>The laboratory needs to migrate a large amount of data (30 TB) within a relatively short timeframe (5 days) and limit the impact on other departments' network traffic. Therefore, AWS DataSync can meet these requirements by providing fast and efficient data transfer with network throttling capability to control bandwidth usage.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 813155,
          "date": "Sat 18 Feb 2023 16:04",
          "username": "\t\t\t\tcloudbusting\t\t\t",
          "content": "https://docs.aws.amazon.com/datasync/latest/userguide/configure-bandwidth.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 812026,
          "date": "Fri 17 Feb 2023 16:04",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "https://aws.amazon.com/datasync/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#302",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to create a mobile app that allows users to stream slow-motion video clips on their mobile devices. Currently, the app captures video clips and uploads the video clips in raw format into an Amazon S3 bucket. The app retrieves these video clips directly from the S3 bucket. However, the videos are large in their raw format.<br><br>Users are experiencing issues with buffering and playback on mobile devices. The company wants to implement solutions to maximize the performance and scalability of the app while minimizing operational overhead.<br><br>Which combination of solutions will meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#302",
          "answers": [
            {
              "choice": "<p>A. Deploy Amazon CloudFront for content delivery and caching.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS DataSync to replicate the video files across AW'S Regions in other S3 buckets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon Elastic Transcoder to convert the video files to more appropriate formats.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy an Auto Sealing group of Amazon EC2 instances in Local Zones for content delivery and caching.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Deploy an Auto Scaling group of Amazon EC2 instances to convert the video files to more appropriate formats.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 812224,
          "date": "Fri 17 Feb 2023 19:36",
          "username": "\t\t\t\tBhawesh\t\t\t",
          "content": "For Minimum operational overhead, the 2 options A,C should be correct.A.  Deploy Amazon CloudFront for content delivery and caching.C.  Use Amazon Elastic Transcoder to convert the video files to more appropriate formats.",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 827504,
          "date": "Thu 02 Mar 2023 23:26",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "A and C. Transcoder does exactly what this needs.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 827503,
          "date": "Thu 02 Mar 2023 23:26",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "A and C. CloudFront hs caching for A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 818402,
          "date": "Wed 22 Feb 2023 21:55",
          "username": "\t\t\t\twawaw3213\t\t\t",
          "content": "a and c",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 818141,
          "date": "Wed 22 Feb 2023 18:51",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "Both A and C - I was not able to choose both<br>https://aws.amazon.com/elastictranscoder/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 817170,
          "date": "Tue 21 Feb 2023 22:09",
          "username": "\t\t\t\tBhrino\t\t\t",
          "content": "A and C bc cloud front would help the performance for content such as this and elastictranscoder makes the process from transferring devices almost seamless",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 817154,
          "date": "Tue 21 Feb 2023 21:55",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "A & C.  <br>A: Deploy Amazon CloudFront for content delivery and caching: Amazon CloudFront is a content delivery network (CDN) that can help improve the performance and scalability of the app by caching content at edge locations, reducing latency, and improving the delivery of video clips to users. CloudFront can also provide features such as DDoS protection, SSL/TLS encryption, and content compression to optimize the delivery of video clips.<br><br>C: Use Amazon Elastic Transcoder to convert the video files to more appropriate formats: Amazon Elastic Transcoder is a service that can help optimize the video format for mobile devices, reducing the size of the video files, and improving the playback performance. Elastic Transcoder can also convert videos into multiple formats to support different devices and platforms.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 815755,
          "date": "Mon 20 Feb 2023 20:49",
          "username": "\t\t\t\tBabba\t\t\t",
          "content": "Clearly A & C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 814504,
          "date": "Sun 19 Feb 2023 21:30",
          "username": "\t\t\t\tjahmad0730\t\t\t",
          "content": "A and C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#303",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is launching a new application deployed on an Amazon Elastic Container Service (Amazon ECS) cluster and is using the Fargate launch type for ECS tasks. The company is monitoring CPU and memory usage because it is expecting high traffic to the application upon its launch. However, the company wants to reduce costs when utilization decreases.<br><br>What should a solutions architect recommend?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#303",
          "answers": [
            {
              "choice": "<p>A. Use Amazon EC2 Auto Scaling to scale at certain periods based on previous traffic patterns.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use an AWS Lambda function to scale Amazon ECS based on metric breaches that trigger an Amazon CloudWatch alarm.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon EC2 Auto Scaling with simple scaling policies to scale when ECS metric breaches trigger an Amazon CloudWatch alarm.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Application Auto Scaling with target tracking policies to scale when ECS metric breaches trigger an Amazon CloudWatch alarm.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 813369,
          "date": "Sat 18 Feb 2023 19:13",
          "username": "\t\t\t\trrharris\t\t\t",
          "content": "Answer is D - Auto-scaling with target tracking",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 835431,
          "date": "Fri 10 Mar 2023 22:02",
          "username": "\t\t\t\tboxu03\t\t\t",
          "content": "should be D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 819394,
          "date": "Thu 23 Feb 2023 17:26",
          "username": "\t\t\t\tJoxtat\t\t\t",
          "content": "https://docs.aws.amazon.com/autoscaling/application/userguide/what-is-application-auto-scaling.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 814519,
          "date": "Sun 19 Feb 2023 21:40",
          "username": "\t\t\t\tjahmad0730\t\t\t",
          "content": "Answer is D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 813078,
          "date": "Sat 18 Feb 2023 15:18",
          "username": "\t\t\t\tNeha999\t\t\t",
          "content": "D : auto-scaling with target tracking",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#304",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently created a disaster recovery site in a different AWS Region. The company needs to transfer large amounts of data back and forth between NFS file systems in the two Regions on a periodic basis.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#304",
          "answers": [
            {
              "choice": "<p>A. Use AWS DataSync.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Snowball devices.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up an SFTP server on Amazon EC2.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Database Migration Service (AWS DMS).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 817305,
          "date": "Wed 22 Feb 2023 01:32",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "AWS DataSync is a fully managed data transfer service that simplifies moving large amounts of data between on-premises storage systems and AWS services. It can also transfer data between different AWS services, including different AWS Regions. DataSync provides a simple, scalable, and automated solution to transfer data, and it minimizes the operational overhead because it is fully managed by AWS.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 814344,
          "date": "Sun 19 Feb 2023 19:01",
          "username": "\t\t\t\tskiwili\t\t\t",
          "content": "Aaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 814185,
          "date": "Sun 19 Feb 2023 15:49",
          "username": "\t\t\t\tNolaHOla\t\t\t",
          "content": "A should be correct",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#305",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is designing a shared storage solution for a gaming application that is hosted in the AWS Cloud. The company needs the ability to use SMB clients to access data. The solution must be fully managed.<br><br>Which AWS solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#305",
          "answers": [
            {
              "choice": "<p>A. Create an AWS DataSync task that shares the data as a mountable file system. Mount the file system to the application server.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon EC2 Windows instance. Install and configure a Windows file share role on the instance. Connect the application server to the file share.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon FSx for Windows File Server file system. Attach the file system to the origin server. Connect the application server to the file system.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon S3 bucket. Assign an IAM role to the application to grant access to the S3 bucket. Mount the S3 bucket to the application server.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 827508,
          "date": "Thu 02 Mar 2023 23:34",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "I vote C since FSx supports SMB",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 817310,
          "date": "Wed 22 Feb 2023 01:37",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "AWS FSx for Windows File Server is a fully managed native Microsoft Windows file system that is accessible through the SMB protocol. It provides features such as file system backups, integrated with Amazon S3, and Active Directory integration for user authentication and access control. This solution allows for the use of SMB clients to access the data and is fully managed, eliminating the need for the company to manage the underlying infrastructure.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 815754,
          "date": "Mon 20 Feb 2023 20:48",
          "username": "\t\t\t\tBabba\t\t\t",
          "content": "C for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 813405,
          "date": "Sat 18 Feb 2023 19:53",
          "username": "\t\t\t\trrharris\t\t\t",
          "content": "Answer is C - SMB = storage gateway or FSx",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 813069,
          "date": "Sat 18 Feb 2023 15:13",
          "username": "\t\t\t\tNeha999\t\t\t",
          "content": "C L: Amazon FSx for Windows File Server file system",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#306",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to run an in-memory database for a latency-sensitive application that runs on Amazon EC2 instances. The application processes more than 100,000 transactions each minute and requires high network throughput. A solutions architect needs to provide a cost-effective network design that minimizes data transfer charges.<br><br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#306",
          "answers": [
            {
              "choice": "<p>A. Launch all EC2 instances in the same Availability Zone within the same AWS Region. Specify a placement group with cluster strategy when launching EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Launch all EC2 instances in different Availability Zones within the same AWS Region. Specify a placement group with partition strategy when launching EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy an Auto Scaling group to launch EC2 instances in different Availability Zones based on a network utilization target.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy an Auto Scaling group with a step scaling policy to launch EC2 instances in different Availability Zones.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 827513,
          "date": "Thu 02 Mar 2023 23:40",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "Cluster placement groups improves throughput between the instances which means less EC2 instances would be needed thus reducing costs.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 819528,
          "date": "Thu 23 Feb 2023 19:11",
          "username": "\t\t\t\tmaciekmaciek\t\t\t",
          "content": "A because Specify a placement group",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 818538,
          "date": "Thu 23 Feb 2023 00:25",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "It is option A:<br>To achieve low latency, high throughput, and cost-effectiveness, the optimal solution is to launch EC2 instances as a placement group with the cluster strategy within the same Availability Zone.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 818442,
          "date": "Wed 22 Feb 2023 22:25",
          "username": "\t\t\t\tManOnTheMoon\t\t\t",
          "content": "Why not C?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You're thinking operational efficiency.The question asks for cost reduction.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 827514,
          "date": "Thu 02 Mar 2023 23:41",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "You're thinking operational efficiency.The question asks for cost reduction.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 813407,
          "date": "Sat 18 Feb 2023 19:55",
          "username": "\t\t\t\trrharris\t\t\t",
          "content": "Answer is A - Clustering",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 813064,
          "date": "Sat 18 Feb 2023 15:11",
          "username": "\t\t\t\tNeha999\t\t\t",
          "content": "A : Cluster placement group",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#307",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company that primarily runs its application servers on premises has decided to migrate to AWS. The company wants to minimize its need to scale its Internet Small Computer Systems Interface (iSCSI) storage on premises. The company wants only its recently accessed data to remain stored locally.<br><br>Which AWS solution should the company use to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#307",
          "answers": [
            {
              "choice": "<p>A. Amazon S3 File Gateway<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. AWS Storage Gateway Tape Gateway<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. AWS Storage Gateway Volume Gateway stored volumes<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. AWS Storage Gateway Volume Gateway cached volumes<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 817344,
          "date": "Wed 22 Feb 2023 02:27",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "AWS Storage Gateway Volume Gateway provides two configurations for connecting to iSCSI storage, namely, stored volumes and cached volumes. The stored volume configuration stores the entire data set on-premises and asynchronously backs up the data to AWS. The cached volume configuration stores recently accessed data on-premises, and the remaining data is stored in Amazon S3.<br><br>Since the company wants only its recently accessed data to remain stored locally, the cached volume configuration would be the most appropriate. It allows the company to keep frequently accessed data on-premises and reduce the need for scaling its iSCSI storage while still providing access to all data through the AWS cloud. This configuration also provides low-latency access to frequently accessed data and cost-effective off-site backups for less frequently accessed data.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 811799,
          "date": "Fri 17 Feb 2023 12:28",
          "username": "\t\t\t\tsmgsi\t\t\t",
          "content": "https://docs.amazonaws.cn/en_us/storagegateway/latest/vgw/StorageGatewayConcepts.html#storage-gateway-cached-concepts",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 827515,
          "date": "Thu 02 Mar 2023 23:42",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "I vote D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 818474,
          "date": "Wed 22 Feb 2023 22:46",
          "username": "\t\t\t\tManOnTheMoon\t\t\t",
          "content": "Agree with D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 815753,
          "date": "Mon 20 Feb 2023 20:47",
          "username": "\t\t\t\tBabba\t\t\t",
          "content": "recently accessed data to remain stored locally - cached",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 812234,
          "date": "Fri 17 Feb 2023 19:45",
          "username": "\t\t\t\tBhawesh\t\t\t",
          "content": "D.  AWS Storage Gateway Volume Gateway cached volumes",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 812033,
          "date": "Fri 17 Feb 2023 16:07",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "recently accessed data to remain stored locally - cached",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#308",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has multiple AWS accounts that use consolidated billing. The company runs several active high performance Amazon RDS for Oracle On-Demand DB instances for 90 days. The company's finance team has access to AWS Trusted Advisor in the consolidated billing account and all other AWS accounts.<br><br>The finance team needs to use the appropriate AWS account to access the Trusted Advisor check recommendations for RDS. The finance team must review the appropriate Trusted Advisor check to reduce RDS costs.<br><br>Which combination of steps should the finance team take to meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#308",
          "answers": [
            {
              "choice": "<p>A. Use the Trusted Advisor recommendations from the account where the RDS instances are running.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the Trusted Advisor recommendations from the consolidated billing account to see all RDS instance checks at the same time.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Review the Trusted Advisor check for Amazon RDS Reserved Instance Optimization.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Review the Trusted Advisor check for Amazon RDS Idle DB Instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Review the Trusted Advisor check for Amazon Redshift Reserved Node Optimization.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 814086,
          "date": "Sun 19 Feb 2023 14:01",
          "username": "\t\t\t\tNietzsche82\t\t\t",
          "content": "B & D<br>https://aws.amazon.com/premiumsupport/knowledge-center/trusted-advisor-cost-optimization/",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 827517,
          "date": "Thu 02 Mar 2023 23:44",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "I got with B and D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 822897,
          "date": "Sun 26 Feb 2023 20:52",
          "username": "\t\t\t\tMichal_L_95\t\t\t",
          "content": "I would go with B and C as the company is running for 90 days and C option is basing on 30 days report which would mean that there is higher potential on cost saving rather than on idle instances<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>C is stating \\\"Reserved Instances\\\"The question states they are using On Demand Instances.Reserved instances are reserved for less money for 1 or 3 years.</li><li>Once read the question again, I agree with you.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 827518,
          "date": "Thu 02 Mar 2023 23:45",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "C is stating \\\"Reserved Instances\\\"The question states they are using On Demand Instances.Reserved instances are reserved for less money for 1 or 3 years.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Once read the question again, I agree with you.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 836219,
          "date": "Sat 11 Mar 2023 16:36",
          "username": "\t\t\t\tMichal_L_95\t\t\t",
          "content": "Once read the question again, I agree with you.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 818151,
          "date": "Wed 22 Feb 2023 18:57",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "reduce costs - delete idle instances<br>https://aws.amazon.com/premiumsupport/knowledge-center/trusted-advisor-cost-optimization/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>This same URL also says that there is an option which recommends the purchase of reserved noes. So I think that C is the option instead of D, because since they already use on-demand DB instances, most probably that there will not have iddle instances. But if we replace them by reserved ones, we indeed can have some costs savings. <br>What are your thought on it?</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 819685,
          "date": "Thu 23 Feb 2023 21:05",
          "username": "\t\t\t\tleoattf\t\t\t",
          "content": "This same URL also says that there is an option which recommends the purchase of reserved noes. So I think that C is the option instead of D, because since they already use on-demand DB instances, most probably that there will not have iddle instances. But if we replace them by reserved ones, we indeed can have some costs savings. <br>What are your thought on it?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 817449,
          "date": "Wed 22 Feb 2023 05:02",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "B.  Use the Trusted Advisor recommendations from the consolidated billing account to see all RDS instance checks at the same time. This option allows the finance team to see all RDS instance checks across all AWS accounts in one place. Since the company uses consolidated billing, this account will have access to all of the AWS accounts' Trusted Advisor recommendations.<br>C.  Review the Trusted Advisor check for Amazon RDS Reserved Instance Optimization. This check can help identify cost savings opportunities for RDS by identifying instances that can be covered by Reserved Instances. This can result in significant savings on RDS costs.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I also think it is B and C.  I think that C is the option instead of D, because since they already use on-demand DB instances, most probably there will not have idle instances. But if we replace them by reserved ones, we indeed can have some costs savings.</li><li>Option A is not recommended because the finance team may not have access to the AWS account where the RDS instances are running. Even if they have access, it may not be practical to check each individual account for Trusted Advisor recommendations.<br><br>Option D is not the best choice because it only addresses the issue of idle instances and may not provide the most effective recommendations to reduce RDS costs.<br><br>Option E is not relevant to this scenario since it is related to Amazon Redshift, not RDS.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 819688,
          "date": "Thu 23 Feb 2023 21:08",
          "username": "\t\t\t\tleoattf\t\t\t",
          "content": "I also think it is B and C.  I think that C is the option instead of D, because since they already use on-demand DB instances, most probably there will not have idle instances. But if we replace them by reserved ones, we indeed can have some costs savings.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 817450,
          "date": "Wed 22 Feb 2023 05:03",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "Option A is not recommended because the finance team may not have access to the AWS account where the RDS instances are running. Even if they have access, it may not be practical to check each individual account for Trusted Advisor recommendations.<br><br>Option D is not the best choice because it only addresses the issue of idle instances and may not provide the most effective recommendations to reduce RDS costs.<br><br>Option E is not relevant to this scenario since it is related to Amazon Redshift, not RDS.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 816021,
          "date": "Tue 21 Feb 2023 00:36",
          "username": "\t\t\t\tjennyka76\t\t\t",
          "content": "B & D<br>https://aws.amazon.com/premiumsupport/knowledge-center/trusted-advisor-cost-optimization/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 814350,
          "date": "Sun 19 Feb 2023 19:06",
          "username": "\t\t\t\tskiwili\t\t\t",
          "content": "B and D I believe",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BD"
        }
      ]
    },
    {
      "question_id": "#309",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect needs to optimize storage costs. The solutions architect must identify any Amazon S3 buckets that are no longer being accessed or are rarely accessed.<br><br>Which solution will accomplish this goal with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#309",
          "answers": [
            {
              "choice": "<p>A. Analyze bucket access patterns by using the S3 Storage Lens dashboard for advanced activity metrics.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Analyze bucket access patterns by using the S3 dashboard in the AWS Management Console.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Turn on the Amazon CloudWatch BucketSizeBytes metric for buckets. Analyze bucket access patterns by using the metrics data with Amazon Athena.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Turn on AWS CloudTrail for S3 object monitoring. Analyze bucket access patterns by using CloudTrail logs that are integrated with Amazon CloudWatch Logs.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 818156,
          "date": "Wed 22 Feb 2023 19:00",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "https://aws.amazon.com/blogs/aws/s3-storage-lens/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 817353,
          "date": "Wed 22 Feb 2023 02:46",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "S3 Storage Lens provides a dashboard with advanced activity metrics that enable the identification of infrequently accessed and unused buckets. This can help a solutions architect optimize storage costs without incurring additional operational overhead.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 815750,
          "date": "Mon 20 Feb 2023 20:46",
          "username": "\t\t\t\tBabba\t\t\t",
          "content": "it looks like it's A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 813034,
          "date": "Sat 18 Feb 2023 14:49",
          "username": "\t\t\t\tkpato87\t\t\t",
          "content": "S3 Storage Lens is a fully managed S3 storage analytics solution that provides a comprehensive view of object storage usage, activity trends, and recommendations to optimize costs. Storage Lens allows you to analyze object access patterns across all of your S3 buckets and generate detailed metrics and reports.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#310",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company sells datasets to customers who do research in artificial intelligence and machine learning (AI/ML). The datasets are large, formatted files that are stored in an Amazon S3 bucket in the us-east-1 Region. The company hosts a web application that the customers use to purchase access to a given dataset. The web application is deployed on multiple Amazon EC2 instances behind an Application Load Balancer. After a purchase is made, customers receive an S3 signed URL that allows access to the files.<br><br>The customers are distributed across North America and Europe. The company wants to reduce the cost that is associated with data transfers and wants to maintain or improve performance.<br><br>What should a solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#310",
          "answers": [
            {
              "choice": "<p>A. Configure S3 Transfer Acceleration on the existing S3 bucket. Direct customer requests to the S3 Transfer Acceleration endpoint. Continue to use S3 signed URLs for access control.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an Amazon CloudFront distribution with the existing S3 bucket as the origin. Direct customer requests to the CloudFront URL. Switch to CloudFront signed URLs for access control.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up a second S3 bucket in the eu-central-1 Region with S3 Cross-Region Replication between the buckets. Direct customer requests to the closest Region. Continue to use S3 signed URLs for access control.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the web application to enable streaming of the datasets to end users. Configure the web application to read the data from the existing S3 bucket. Implement access control directly in the application.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 817393,
          "date": "Wed 22 Feb 2023 03:23",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "To reduce the cost associated with data transfers and maintain or improve performance, a solutions architect should use Amazon CloudFront, a content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds.<br><br>Deploying a CloudFront distribution with the existing S3 bucket as the origin will allow the company to serve the data to customers from edge locations that are closer to them, reducing data transfer costs and improving performance.<br><br>Directing customer requests to the CloudFront URL and switching to CloudFront signed URLs for access control will enable customers to access the data securely and efficiently.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 816879,
          "date": "Tue 21 Feb 2023 17:52",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 812246,
          "date": "Fri 17 Feb 2023 19:53",
          "username": "\t\t\t\tBhawesh\t\t\t",
          "content": "B.  Deploy an Amazon CloudFront distribution with the existing S3 bucket as the origin. Direct customer requests to the CloudFront URL. Switch to CloudFront signed URLs for access control.<br><br>https://www.examtopics.com/discussions/amazon/view/68990-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#311",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using AWS to design a web application that will process insurance quotes. Users will request quotes from the application. Quotes must be separated by quote type, must be responded to within 24 hours, and must not get lost. The solution must maximize operational efficiency and must minimize maintenance.<br><br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#311",
          "answers": [
            {
              "choice": "<p>A. Create multiple Amazon Kinesis data streams based on the quote type. Configure the web application to send messages to the proper data stream. Configure each backend group of application servers to use the Kinesis Client Library (KCL) to pool messages from its own data stream.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Lambda function and an Amazon Simple Notification Service (Amazon SNS) topic for each quote type. Subscribe the Lambda function to its associated SNS topic. Configure the application to publish requests for quotes to the appropriate SNS topic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a single Amazon Simple Notification Service (Amazon SNS) topic. Subscribe Amazon Simple Queue Service (Amazon SQS) queues to the SNS topic. Configure SNS message filtering to publish messages to the proper SQS queue based on the quote type. Configure each backend application server to use its own SQS queue.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create multiple Amazon Kinesis Data Firehose delivery streams based on the quote type to deliver data streams to an Amazon OpenSearch Service cluster. Configure the application to send messages to the proper delivery stream. Configure each backend group of application servers to search for the messages from OpenSearch Service and process them accordingly.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 811863,
          "date": "Fri 17 Feb 2023 13:32",
          "username": "\t\t\t\tVIad\t\t\t",
          "content": "C is the best option",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 814268,
          "date": "Sun 19 Feb 2023 17:39",
          "username": "\t\t\t\tYechi\t\t\t",
          "content": "https://aws.amazon.com/getting-started/hands-on/filter-messages-published-to-topics/",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 827542,
          "date": "Fri 03 Mar 2023 00:49",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "This is the SNS fan-out technique where you will have one SNS service to many SQS services<br>https://docs.aws.amazon.com/sns/latest/dg/sns-sqs-as-subscriber.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 817453,
          "date": "Wed 22 Feb 2023 05:15",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "Quote types need to be separated: SNS message filtering can be used to publish messages to the appropriate SQS queue based on the quote type, ensuring that quotes are separated by type.<br>Quotes must be responded to within 24 hours and must not get lost: SQS provides reliable and scalable queuing for messages, ensuring that quotes will not get lost and can be processed in a timely manner. Additionally, each backend application server can use its own SQS queue, ensuring that quotes are processed efficiently without any delay.<br>Operational efficiency and minimizing maintenance: Using a single SNS topic and multiple SQS queues is a scalable and cost-effective approach, which can help to maximize operational efficiency and minimize maintenance. Additionally, SNS and SQS are fully managed services, which means that the company will not need to worry about maintenance tasks such as software updates, hardware upgrades, or scaling the infrastructure.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#312",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that runs on several Amazon EC2 instances. Each EC2 instance has multiple Amazon Elastic Block Store (Amazon EBS) data volumes attached to it. The application's EC2 instance configuration and data need to be backed up nightly. The application also needs to be recoverable in a different AWS Region.<br><br>Which solution will meet these requirements in the MOST operationally efficient way?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#312",
          "answers": [
            {
              "choice": "<p>A. Write an AWS Lambda function that schedules nightly snapshots of the application's EBS volumes and copies the snapshots to a different Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a backup plan by using AWS Backup to perform nightly backups. Copy the backups to another Region. Add the application's EC2 instances as resources.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a backup plan by using AWS Backup to perform nightly backups. Copy the backups to another Region. Add the application's EBS volumes as resources.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Write an AWS Lambda function that schedules nightly snapshots of the application's EBS volumes and copies the snapshots to a different Availability Zone.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 817886,
          "date": "Wed 22 Feb 2023 14:56",
          "username": "\t\t\t\tTungPham\t\t\t",
          "content": "https://aws.amazon.com/vi/blogs/aws/aws-backup-ec2-instances-efs-single-file-restore-and-cross-region-backup/<br>When you back up an EC2 instance, AWS Backup will protect all EBS volumes attached to the instance, and it will attach them to an AMI that stores all parameters from the original EC2 instance except for two",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 817807,
          "date": "Wed 22 Feb 2023 13:21",
          "username": "\t\t\t\tkhasport\t\t\t",
          "content": "B is answer so the requirement is\\\"The application's EC2 instance configuration and data need to be backed up nightly\\\" so we need \\\"add the application's EC2 instances as resources\\\". This option will backup bothEC2 configuration and data",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 817550,
          "date": "Wed 22 Feb 2023 08:03",
          "username": "\t\t\t\tAlmeroSenior\t\t\t",
          "content": "AWS KB states if you select the EC2 instance , associated EBS's will be auto covered . <br><br>https://aws.amazon.com/blogs/aws/aws-backup-ec2-instances-efs-single-file-restore-and-cross-region-backup/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 817465,
          "date": "Wed 22 Feb 2023 05:33",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "B is the most appropriate solution because it allows you to create a backup plan to automate the backup process of EC2 instances and EBS volumes, and copy backups to another region. Additionally, you can add the application's EC2 instances as resources to ensure their configuration and data are backed up nightly.<br>A and D involve writing custom Lambda functions to automate the snapshot process, which can be complex and require more maintenance effort. Moreover, these options do not provide an integrated solution for managing backups and recovery, and copying snapshots to another region.<br><br>Option C involves creating a backup plan with AWS Backup to perform backups for EBS volumes only. This approach would not back up the EC2 instances and their configuration",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 816418,
          "date": "Tue 21 Feb 2023 10:50",
          "username": "\t\t\t\teverfly\t\t\t",
          "content": "The application's EC2 instance configuration and data are stored on EBS volume right?",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 814983,
          "date": "Mon 20 Feb 2023 09:00",
          "username": "\t\t\t\tRehan33\t\t\t",
          "content": "The data is store on EBS volume so why we are not using EBS as a source instead of EC2<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Because \\\"The application's EC2 instance configuration and data need to be backed up nightly\\\"</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 815699,
          "date": "Mon 20 Feb 2023 20:07",
          "username": "\t\t\t\tobatunde\t\t\t",
          "content": "Because \\\"The application's EC2 instance configuration and data need to be backed up nightly\\\"",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 814227,
          "date": "Sun 19 Feb 2023 16:45",
          "username": "\t\t\t\tfulingyu288\t\t\t",
          "content": "Use AWS Backup to create a backup plan that includes the EC2 instances, Amazon EBS snapshots, and any other resources needed for recovery. The backup plan can be configured to run on a nightly schedule.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 812914,
          "date": "Sat 18 Feb 2023 12:57",
          "username": "\t\t\t\tzTopic\t\t\t",
          "content": "The application's EC2 instance configuration and data need to be backed up nightly >> B<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But isn't the data needed to be backed up on the EBS?</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 814256,
          "date": "Sun 19 Feb 2023 17:24",
          "username": "\t\t\t\tNolaHOla\t\t\t",
          "content": "But isn't the data needed to be backed up on the EBS?",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#313",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a mobile app on AWS. The company wants to expand its reach to millions of users. The company needs to build a platform so that authorized users can watch the company's content on their mobile devices.<br><br>What should a solutions architect recommend to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#313",
          "answers": [
            {
              "choice": "<p>A. Publish content to a public Amazon S3 bucket. Use AWS Key Management Service (AWS KMS) keys to stream content.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up IPsec VPN between the mobile app and the AWS environment to stream content.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon CloudFront. Provide signed URLs to stream content.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up AWS Client VPN between the mobile app and the AWS environment to stream content.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 833670,
          "date": "Thu 09 Mar 2023 08:05",
          "username": "\t\t\t\tkprakashbehera\t\t\t",
          "content": "Cloudfront is the correct solution.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 828165,
          "date": "Fri 03 Mar 2023 18:22",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "Enough with CloudFront already.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 817472,
          "date": "Wed 22 Feb 2023 05:55",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "Amazon CloudFront is a content delivery network (CDN) that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds. CloudFront supports signed URLs that provide authorized access to your content. This feature allows the company to control who can access their content and for how long, providing a secure and scalable solution for millions of users.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 815739,
          "date": "Mon 20 Feb 2023 20:34",
          "username": "\t\t\t\tjennyka76\t\t\t",
          "content": "C<br>https://www.amazonaws.cn/en/cloudfront/",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#314",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an on-premises MySQL database used by the global sales team with infrequent access patterns. The sales team requires the database to have minimal downtime. A database administrator wants to migrate this database to AWS without selecting a particular instance type in anticipation of more users in the future.<br><br>Which service should a solutions architect recommend?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#314",
          "answers": [
            {
              "choice": "<p>A. Amazon Aurora MySQL<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Amazon Aurora Serverless for MySQL<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Amazon Redshift Spectrum<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Amazon RDS for MySQL<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 813063,
          "date": "Sat 18 Feb 2023 15:09",
          "username": "\t\t\t\tcloudbusting\t\t\t",
          "content": "\\\"without selecting a particular instance type\\\" = serverless",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 832156,
          "date": "Tue 07 Mar 2023 18:30",
          "username": "\t\t\t\tSrikanth0057\t\t\t",
          "content": "Bbbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 828171,
          "date": "Fri 03 Mar 2023 18:26",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "https://aws.amazon.com/rds/aurora/serverless/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 817474,
          "date": "Wed 22 Feb 2023 06:00",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "Amazon Aurora Serverless for MySQL is a fully managed, auto-scaling relational database service that scales up or down automatically based on the application demand. This service provides all the capabilities of Amazon Aurora, such as high availability, durability, and security, without requiring the customer to provision any database instances.<br><br>With Amazon Aurora Serverless for MySQL, the sales team can enjoy minimal downtime since the database is designed to automatically scale to accommodate the increased traffic. Additionally, the service allows the customer to pay only for the capacity used, making it cost-effective for infrequent access patterns.<br><br>Amazon RDS for MySQL could also be an option, but it requires the customer to select an instance type, and the database administrator would need to monitor and adjust the instance size manually to accommodate the increasing traffic.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 812831,
          "date": "Sat 18 Feb 2023 10:44",
          "username": "\t\t\t\tDrayen25\t\t\t",
          "content": "Minimal downtime points directly to Aurora Serverless",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#315",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company experienced a breach that affected several applications in its on-premises data center. The attacker took advantage of vulnerabilities in the custom applications that were running on the servers. The company is now migrating its applications to run on Amazon EC2 instances. The company wants to implement a solution that actively scans for vulnerabilities on the EC2 instances and sends a report that details the findings.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#315",
          "answers": [
            {
              "choice": "<p>A. Deploy AWS Shield to scan the EC2 instances for vulnerabilities. Create an AWS Lambda function to log any findings to AWS CloudTrail.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy Amazon Macie and AWS Lambda functions to scan the EC2 instances for vulnerabilities. Log any findings to AWS CloudTrail.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Turn on Amazon GuardDuty. Deploy the GuardDuty agents to the EC2 instances. Configure an AWS Lambda function to automate the generation and distribution of reports that detail the findings.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Turn on Amazon Inspector. Deploy the Amazon Inspector agent to the EC2 instances. Configure an AWS Lambda function to automate the generation and distribution of reports that detail the findings.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 829309,
          "date": "Sat 04 Mar 2023 20:24",
          "username": "\t\t\t\tsiyam008\t\t\t",
          "content": "AWS Shield for DDOS<br>Amazon Macie for discover and protect sensitive date<br>Amazon GuardDuty for intelligent thread discovery to protect AWS account<br>Amazon Inspector for automated security assessment. like known Vulnerability",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 817478,
          "date": "Wed 22 Feb 2023 06:05",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "Amazon Inspector is a security assessment service that helps to identify security vulnerabilities and compliance issues in applications deployed on Amazon EC2 instances. It can be used to assess the security of applications that are deployed on Amazon EC2 instances, including those that are custom-built.<br><br>To use Amazon Inspector, the Amazon Inspector agent must be installed on the EC2 instances that need to be assessed. The agent collects data about the instances and sends it to Amazon Inspector for analysis. Amazon Inspector then generates a report that details any security vulnerabilities that were found and provides guidance on how to remediate them.<br><br>By configuring an AWS Lambda function, the company can automate the generation and distribution of reports that detail the findings. This means that reports can be generated and distributed as soon as vulnerabilities are detected, allowing the company to take action quickly.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 815892,
          "date": "Mon 20 Feb 2023 22:20",
          "username": "\t\t\t\tpbpally\t\t\t",
          "content": "I'm a little confused on how someone came up with C, it is definitely D. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 815706,
          "date": "Mon 20 Feb 2023 20:10",
          "username": "\t\t\t\tobatunde\t\t\t",
          "content": "Amazon Inspector<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Amazon Inspector is an automated vulnerability management service that continually scans AWS workloads for software vulnerabilities and unintended network exposure. https://aws.amazon.com/inspector/features/?nc=sn&amp;loc=2</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 815709,
          "date": "Mon 20 Feb 2023 20:12",
          "username": "\t\t\t\tobatunde\t\t\t",
          "content": "Amazon Inspector is an automated vulnerability management service that continually scans AWS workloads for software vulnerabilities and unintended network exposure. https://aws.amazon.com/inspector/features/?nc=sn&loc=2",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 815542,
          "date": "Mon 20 Feb 2023 17:39",
          "username": "\t\t\t\tPalanda\t\t\t",
          "content": "I think D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 814852,
          "date": "Mon 20 Feb 2023 06:32",
          "username": "\t\t\t\tminglu\t\t\t",
          "content": "Inspector for EC2",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 814594,
          "date": "Sun 19 Feb 2023 22:46",
          "username": "\t\t\t\tskiwili\t\t\t",
          "content": "Ddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 813065,
          "date": "Sat 18 Feb 2023 15:11",
          "username": "\t\t\t\tcloudbusting\t\t\t",
          "content": "this is inspector = https://medium.com/aws-architech/use-case-aws-inspector-vs-guardduty-3662bf80767a",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#316",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses an Amazon EC2 instance to run a script to poll for and process messages in an Amazon Simple Queue Service (Amazon SQS) queue. The company wants to reduce operational costs while maintaining its ability to process a growing number of messages that are added to the queue.<br><br>What should a solutions architect recommend to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#316",
          "answers": [
            {
              "choice": "<p>A. Increase the size of the EC2 instance to process messages faster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon EventBridge to turn off the EC2 instance when the instance is underutilized.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the script on the EC2 instance to an AWS Lambda function with the appropriate runtime.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Systems Manager Run Command to run the script on demand.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 828183,
          "date": "Fri 03 Mar 2023 18:32",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "Lambda costs money only when it's processing, not when idle",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 818494,
          "date": "Wed 22 Feb 2023 23:24",
          "username": "\t\t\t\tManOnTheMoon\t\t\t",
          "content": "Agree with C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 817815,
          "date": "Wed 22 Feb 2023 13:34",
          "username": "\t\t\t\tkhasport\t\t\t",
          "content": "the answer is C.  With this option, you can reduce operational cost as the question mentioned",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 817490,
          "date": "Wed 22 Feb 2023 06:27",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "AWS Lambda is a serverless compute service that allows you to run your code without provisioning or managing servers. By migrating the script to an AWS Lambda function, you can eliminate the need to maintain an EC2 instance, reducing operational costs. Additionally, Lambda automatically scales to handle the increasing number of messages in the SQS queue.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 813054,
          "date": "Sat 18 Feb 2023 15:01",
          "username": "\t\t\t\tkpato87\t\t\t",
          "content": "By migrating the script to AWS Lambda, the company can take advantage of the auto-scaling feature of the service. AWS Lambda will automatically scale resources to match the size of the workload. This means that the company will not have to worry about provisioning or managing instances as the number of messages increases, resulting in lower operational costs",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 812705,
          "date": "Sat 18 Feb 2023 07:14",
          "username": "\t\t\t\tzTopic\t\t\t",
          "content": "It Should be C.  <br>Lambda allows you to execute code without provisioning or managing servers, so it is ideal for running scripts that poll for and process messages in an Amazon SQS queue. The scaling of the Lambda function is automatic, and you only pay for the actual time it takes to process the messages.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 812257,
          "date": "Fri 17 Feb 2023 20:07",
          "username": "\t\t\t\tBhawesh\t\t\t",
          "content": "To reduce the operational overhead, it should be:D.  Use AWS Systems Manager Run Command to run the script on demand.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#317",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses a legacy application to produce data in CSV format. The legacy application stores the output data in Amazon S3. The company is deploying a new commercial off-the-shelf (COTS) application that can perform complex SQL queries to analyze data that is stored in Amazon Redshift and Amazon S3 only. However, the COTS application cannot process the .csv files that the legacy application produces.<br><br>The company cannot update the legacy application to produce data in another format. The company needs to implement a solution so that the COTS application can use the data that the legacy application produces.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#317",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Glue extract, transform, and load (ETL) job that runs on a schedule. Configure the ETL job to process the .csv files and store the processed data in Amazon Redshift.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Develop a Python script that runs on Amazon EC2 instances to convert the .csv files to .sql files. Invoke the Python script on a cron schedule to store the output files in Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Lambda function and an Amazon DynamoDB table. Use an S3 event to invoke the Lambda function. Configure the Lambda function to perform an extract, transform, and load (ETL) job to process the .csv files and store the processed data in the DynamoDB table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon EventBridge to launch an Amazon EMR cluster on a weekly schedule. Configure the EMR cluster to perform an extract, transform, and load (ETL) job to process the .csv files and store the processed data in an Amazon Redshift table.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 817495,
          "date": "Wed 22 Feb 2023 16:11",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "A would be the best solution as it involves the least operational overhead. With this solution, an AWS Glue ETL job is created to process the .csv files and store the processed data directly in Amazon Redshift. This is a serverless approach that does not require any infrastructure to be provisioned, configured, or maintained. AWS Glue provides a fully managed, pay-as-you-go ETL service that can be easily configured to process data from S3 and load it into Amazon Redshift. This approach allows the legacy application to continue to produce data in the CSV format that it currently uses, while providing the new COTS application with the ability to analyze the data using complex SQL queries.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 814555,
          "date": "Sun 19 Feb 2023 22:10",
          "username": "\t\t\t\tjennyka76\t\t\t",
          "content": "A<br>https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-format-csv-home.html<br>I AGREE AFTER READING LINK",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 813088,
          "date": "Sat 18 Feb 2023 15:25",
          "username": "\t\t\t\tcloudbusting\t\t\t",
          "content": "A: https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-format.html",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#318",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently migrated its entire IT environment to the AWS Cloud. The company discovers that users are provisioning oversized Amazon EC2 instances and modifying security group rules without using the appropriate change control process. A solutions architect must devise a strategy to track and audit these inventory and configuration changes.<br><br>Which actions should the solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#318",
          "answers": [
            {
              "choice": "<p>A. Enable AWS CloudTrail and use it for auditing.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use data lifecycle policies for the Amazon EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable AWS Trusted Advisor and reference the security dashboard.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable AWS Config and create rules for auditing and compliance purposes.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Restore previous resource configurations with an AWS CloudFormation template.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 817498,
          "date": "Wed 22 Feb 2023 06:43",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "A.  Enable AWS CloudTrail and use it for auditing. CloudTrail provides event history of your AWS account activity, including actions taken through the AWS Management Console, AWS Command Line Interface (CLI), and AWS SDKs and APIs. By enabling CloudTrail, the company can track user activity and changes to AWS resources, and monitor compliance with internal policies and external regulations.<br>D.  Enable AWS Config and create rules for auditing and compliance purposes. AWS Config provides a detailed inventory of the AWS resources in your account, and continuously records changes to the configurations of those resources. By creating rules in AWS Config, the company can automate the evaluation of resource configurations against desired state, and receive alerts when configurations drift from compliance.<br><br>Options B, C, and E are not directly relevant to the requirement of tracking and auditing inventory and configuration changes.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 814599,
          "date": "Sun 19 Feb 2023 22:50",
          "username": "\t\t\t\tskiwili\t\t\t",
          "content": "Yes A and D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 814543,
          "date": "Sun 19 Feb 2023 22:02",
          "username": "\t\t\t\tjennyka76\t\t\t",
          "content": "AGREE WITH ANSWER - A & D<br>CloudTrail and Config",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 813040,
          "date": "Sat 18 Feb 2023 14:52",
          "username": "\t\t\t\tNeha999\t\t\t",
          "content": "CloudTrail and Config",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#319",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has hundreds of Amazon EC2 Linux-based instances in the AWS Cloud. Systems administrators have used shared SSH keys to manage the instances. After a recent audit, the company's security team is mandating the removal of all shared keys. A solutions architect must design a solution that provides secure access to the EC2 instances.<br><br>Which solution will meet this requirement with the LEAST amount of administrative overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#319",
          "answers": [
            {
              "choice": "<p>A. Use AWS Systems Manager Session Manager to connect to the EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Security Token Service (AWS STS) to generate one-time SSH keys on demand.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Allow shared SSH access to a set of bastion instances. Configure all other instances to allow only SSH access from the bastion instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an Amazon Cognito custom authorizer to authenticate users. Invoke an AWS Lambda function to generate a temporary SSH key.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 828195,
          "date": "Fri 03 Mar 2023 18:40",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "I vote a",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 817538,
          "date": "Wed 22 Feb 2023 07:40",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "AWS Systems Manager Session Manager provides secure and auditable instance management without the need for any inbound connections or open ports. It allows you to manage your instances through an interactive one-click browser-based shell or through the AWS CLI. This means that you don't have to manage any SSH keys, and you don't have to worry about securing access to your instances as access is controlled through IAM policies.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 816664,
          "date": "Tue 21 Feb 2023 15:26",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 814670,
          "date": "Mon 20 Feb 2023 00:48",
          "username": "\t\t\t\tjahmad0730\t\t\t",
          "content": "Answer must be A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 814532,
          "date": "Sun 19 Feb 2023 21:51",
          "username": "\t\t\t\tjennyka76\t\t\t",
          "content": "ANSWER - A<br>AWS SESSION MANAGER IS CORRECT LEAST EFFORTS TO ACCESS LINUX SYSTEM IN AWS CONDOLE AND YOUR ARE ALREAADY LOGIN TO AWS. SO NO NEED FOR THE TOKEN OR OTHER STUFF DONE IN THE BACKGROUND BY AWS. MAKES SENESE. ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 813144,
          "date": "Sat 18 Feb 2023 15:59",
          "username": "\t\t\t\tcloudbusting\t\t\t",
          "content": "Answer is A",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 812716,
          "date": "Sat 18 Feb 2023 07:27",
          "username": "\t\t\t\tzTopic\t\t\t",
          "content": "Answer is A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 811875,
          "date": "Fri 17 Feb 2023 13:56",
          "username": "\t\t\t\tVIad\t\t\t",
          "content": "Answer is A<br> Using AWS Systems Manager Session Manager to connect to the EC2 instances is a secure option as it eliminates the need for inbound SSH ports and removes the requirement to manage SSH keys manually. It also provides a complete audit trail of user activity. This solution requires no additional software to be installed on the EC2 instances.",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#320",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using a fleet of Amazon EC2 instances to ingest data from on-premises data sources. The data is in JSON format and ingestion rates can be as high as 1 MB/s. When an EC2 instance is rebooted, the data in-flight is lost. The company's data science team wants to query ingested data in near-real time.<br><br>Which solution provides near-real-time data querying that is scalable with minimal data loss?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#320",
          "answers": [
            {
              "choice": "<p>A. Publish data to Amazon Kinesis Data Streams, Use Kinesis Data Analytics to query the data.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Publish data to Amazon Kinesis Data Firehose with Amazon Redshift as the destination. Use Amazon Redshift to query the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Store ingested data in an EC2 instance store. Publish data to Amazon Kinesis Data Firehose with Amazon S3 as the destination. Use Amazon Athena to query the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Store ingested data in an Amazon Elastic Block Store (Amazon EBS) volume. Publish data to Amazon ElastiCache for Redis. Subscribe to the Redis channel to query the data.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 817542,
          "date": "Wed 22 Feb 2023 07:55",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "A:is the solution for the company's requirements. Publishing data to Amazon Kinesis Data Streams can support ingestion rates as high as 1 MB/s and provide real-time data processing. Kinesis Data Analytics can query the ingested data in real-time with low latency, and the solution can scale as needed to accommodate increases in ingestion rates or querying needs. This solution also ensures minimal data loss in the event of an EC2 instance reboot since Kinesis Data Streams has a persistent data store for up to 7 days by default.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 814523,
          "date": "Sun 19 Feb 2023 21:45",
          "username": "\t\t\t\tjennyka76\t\t\t",
          "content": "ANSWER - A<br>https://docs.aws.amazon.com/kinesisanalytics/latest/dev/what-is.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 813150,
          "date": "Sat 18 Feb 2023 16:01",
          "username": "\t\t\t\tcloudbusting\t\t\t",
          "content": "near-real-time data querying = Kinesis analytics",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 812719,
          "date": "Sat 18 Feb 2023 07:31",
          "username": "\t\t\t\tzTopic\t\t\t",
          "content": "Answer is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#321",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>What should a solutions architect do to ensure that all objects uploaded to an Amazon S3 bucket are encrypted?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#321",
          "answers": [
            {
              "choice": "<p>A. Update the bucket policy to deny if the PutObject does not have an s3:x-amz-acl header set.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Update the bucket policy to deny if the PutObject does not have an s3:x-amz-acl header set to private.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the bucket policy to deny if the PutObject does not have an aws:SecureTransport header set to true.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the bucket policy to deny if the PutObject does not have an x-amz-server-side-encryption header set.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 828201,
          "date": "Fri 03 Mar 2023 18:47",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "I vote d",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 817545,
          "date": "Wed 22 Feb 2023 07:57",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "To ensure that all objects uploaded to an Amazon S3 bucket are encrypted, the solutions architect should update the bucket policy to deny any PutObject requests that do not have an x-amz-server-side-encryption header set. This will prevent any objects from being uploaded to the bucket unless they are encrypted using server-side encryption.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 814514,
          "date": "Sun 19 Feb 2023 21:36",
          "username": "\t\t\t\tjennyka76\t\t\t",
          "content": "answer - D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 812720,
          "date": "Sat 18 Feb 2023 07:34",
          "username": "\t\t\t\tzTopic\t\t\t",
          "content": "Answer is D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 812171,
          "date": "Fri 17 Feb 2023 18:37",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "https://aws.amazon.com/blogs/security/how-to-prevent-uploads-of-unencrypted-objects-to-amazon-s3/#:~:text=Solution%20overview",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 812160,
          "date": "Fri 17 Feb 2023 18:21",
          "username": "\t\t\t\tNeorem\t\t\t",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#322",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing a multi-tier application for a company. The application's users upload images from a mobile device. The application generates a thumbnail of each image and returns a message to the user to confirm that the image was uploaded successfully.<br><br>The thumbnail generation can take up to 60 seconds, but the company wants to provide a faster response time to its users to notify them that the original image was received. The solutions architect must design the application to asynchronously dispatch requests to the different application tiers.<br><br>What should the solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#322",
          "answers": [
            {
              "choice": "<p>A. Write a custom AWS Lambda function to generate the thumbnail and alert the user. Use the image upload process as an event source to invoke the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Step Functions workflow. Configure Step Functions to handle the orchestration between the application tiers and alert the user when thumbnail generation is complete.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon Simple Queue Service (Amazon SQS) message queue. As images are uploaded, place a message on the SQS queue for thumbnail generation. Alert the user through an application message that the image was received.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create Amazon Simple Notification Service (Amazon SNS) notification topics and subscriptions. Use one subscription with the application to generate the thumbnail after the image upload is complete. Use a second subscription to message the user's mobile app by way of a push notification after thumbnail generation is complete.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 830981,
          "date": "Mon 06 Mar 2023 17:12",
          "username": "\t\t\t\tAlessandraSAA\t\t\t",
          "content": "why not B?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 828340,
          "date": "Fri 03 Mar 2023 20:58",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "I've noticed there are a lot of questions about decoupling services and SQS is almost always the answer.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 827868,
          "date": "Fri 03 Mar 2023 11:22",
          "username": "\t\t\t\tWael216\t\t\t",
          "content": "Creating an Amazon Simple Queue Service (SQS) message queue and placing messages on the queue for thumbnail generation can help separate the image upload and thumbnail generation processes.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 826404,
          "date": "Thu 02 Mar 2023 03:30",
          "username": "\t\t\t\tvindahake\t\t\t",
          "content": "C<br>The key here is \\\"a faster response time to its users to notify them that the original image was received.\\\" i.e user needs to be notified when image was received and not after thumbnail was created.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 821216,
          "date": "Sat 25 Feb 2023 06:35",
          "username": "\t\t\t\tAlmeroSenior\t\t\t",
          "content": "A looks like the best way , but its essentially replacing the mentioned app , that's not the ask",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 820610,
          "date": "Fri 24 Feb 2023 15:39",
          "username": "\t\t\t\tMickey321\t\t\t",
          "content": "Selected Answer: A<br>https://docs.aws.amazon.com/lambda/latest/dg/with-s3-tutorial.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 818186,
          "date": "Wed 22 Feb 2023 19:13",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "C is the only one that makes sense",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 817555,
          "date": "Wed 22 Feb 2023 08:06",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "Use a custom AWS Lambda function to generate the thumbnail and alert the user. Lambda functions are well-suited for short-lived, stateless operations like generating thumbnails, and they can be triggered by various events, including image uploads. By using Lambda, the application can quickly confirm that the image was uploaded successfully and then asynchronously generate the thumbnail. When the thumbnail is generated, the Lambda function can send a message to the user to confirm that the thumbnail is ready.<br><br>C proposes to use an Amazon Simple Queue Service (Amazon SQS) message queue to process image uploads and generate thumbnails. SQS can help decouple the image upload process from the thumbnail generation process, which is helpful for asynchronous processing. However, it may not be the most suitable option for quickly alerting the user that the image was received, as the user may have to wait until the thumbnail is generated before receiving a notification.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 817086,
          "date": "Tue 21 Feb 2023 20:44",
          "username": "\t\t\t\tBhrino\t\t\t",
          "content": "This is A because SNS and SQS dont work because it can take up to 60 seconds andb is just more complex than a",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 814512,
          "date": "Sun 19 Feb 2023 21:34",
          "username": "\t\t\t\tjennyka76\t\t\t",
          "content": "answer - c",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 813618,
          "date": "Sun 19 Feb 2023 01:59",
          "username": "\t\t\t\trrharris\t\t\t",
          "content": "Answer is C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 813024,
          "date": "Sat 18 Feb 2023 14:41",
          "username": "\t\t\t\tNeha999\t\t\t",
          "content": "D<br>SNS fan out",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 812722,
          "date": "Sat 18 Feb 2023 07:36",
          "username": "\t\t\t\tzTopic\t\t\t",
          "content": "The solutions architect can use Amazon Simple Queue Service (SQS) to manage the messages and dispatch the requests in a scalable and decoupled manner. Therefore, the correct answer is C. ",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#323",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's facility has badge readers at every entrance throughout the building. When badges are scanned, the readers send a message over HTTPS to indicate who attempted to access that particular entrance.<br><br>A solutions architect must design a system to process these messages from the sensors. The solution must be highly available, and the results must be made available for the company's security team to analyze.<br><br>Which system architecture should the solutions architect recommend?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#323",
          "answers": [
            {
              "choice": "<p>A. Launch an Amazon EC2 instance to serve as the HTTPS endpoint and to process the messages. Configure the EC2 instance to save the results to an Amazon S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an HTTPS endpoint in Amazon API Gateway. Configure the API Gateway endpoint to invoke an AWS Lambda function to process the messages and save the results to an Amazon DynamoDB table.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon Route 53 to direct incoming sensor messages to an AWS Lambda function. Configure the Lambda function to process the messages and save the results to an Amazon DynamoDB table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a gateway VPC endpoint for Amazon S3. Configure a Site-to-Site VPN connection from the facility network to the VPC so that sensor data can be written directly to an S3 bucket by way of the VPC endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 828345,
          "date": "Fri 03 Mar 2023 21:01",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "I vote B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 819840,
          "date": "Thu 23 Feb 2023 23:32",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "It is option \\\"B\\\" <br>Option \\\"B\\\" can provide a system with highly scalable, fault-tolerant, and easy to manage.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 817564,
          "date": "Wed 22 Feb 2023 08:13",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "Deploy Amazon API Gateway as an HTTPS endpoint and AWS Lambda to process and save the messages to an Amazon DynamoDB table. This option provides a highly available and scalable solution that can easily handle large amounts of data. It also integrates with other AWS services, making it easier to analyze and visualize the data for the security team.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 812726,
          "date": "Sat 18 Feb 2023 07:39",
          "username": "\t\t\t\tzTopic\t\t\t",
          "content": "B is Correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#324",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to implement a disaster recovery plan for its primary on-premises file storage volume. The file storage volume is mounted from an Internet Small Computer Systems Interface (iSCSI) device on a local storage server. The file storage volume holds hundreds of terabytes (TB) of data.<br><br>The company wants to ensure that end users retain immediate access to all file types from the on-premises systems without experiencing latency.<br><br>Which solution will meet these requirements with the LEAST amount of change to the company's existing infrastructure?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#324",
          "answers": [
            {
              "choice": "<p>A. Provision an Amazon S3 File Gateway as a virtual machine (VM) that is hosted on premises. Set the local cache to 10 TB.  Modify existing applications to access the files through the NFS protocol. To recover from a disaster, provision an Amazon EC2 instance and mount the S3 bucket that contains the files.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Provision an AWS Storage Gateway tape gateway. Use a data backup solution to back up all existing data to a virtual tape library. Configure the data backup solution to run nightly after the initial backup is complete. To recover from a disaster, provision an Amazon EC2 instance and restore the data to an Amazon Elastic Block Store (Amazon EBS) volume from the volumes in the virtual tape library.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Provision an AWS Storage Gateway Volume Gateway cached volume. Set the local cache to 10 TB.  Mount the Volume Gateway cached volume to the existing file server by using iSCSI, and copy all files to the storage volume. Configure scheduled snapshots of the storage volume. To recover from a disaster, restore a snapshot to an Amazon Elastic Block Store (Amazon EBS) volume and attach the EBS volume to an Amazon EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provision an AWS Storage Gateway Volume Gateway stored volume with the same amount of disk space as the existing file storage volume. Mount the Volume Gateway stored volume to the existing file server by using iSCSI, and copy all files to the storage volume. Configure scheduled snapshots of the storage volume. To recover from a disaster, restore a snapshot to an Amazon Elastic Block Store (Amazon EBS) volume and attach the EBS volume to an Amazon EC2 instance.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 835253,
          "date": "Fri 10 Mar 2023 18:09",
          "username": "\t\t\t\tbangfire\t\t\t",
          "content": "Answer is C. <br><br>Option D is not the best solution because a Volume Gateway stored volume does not provide immediate access to all file types and would require additional steps to retrieve data from Amazon S3, which can result in latency for end-users.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You're confusing cached mode with stored volume mode.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 836415,
          "date": "Sat 11 Mar 2023 19:58",
          "username": "\t\t\t\tUnluckyDucky\t\t\t",
          "content": "You're confusing cached mode with stored volume mode.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 834488,
          "date": "Thu 09 Mar 2023 23:39",
          "username": "\t\t\t\tun1x\t\t\t",
          "content": "Answer is C. <br>why?<br>https://docs.aws.amazon.com/storagegateway/latest/vgw/StorageGatewayConcepts.html#storage-gateway-stored-volume-concepts<br><br>\\\"Stored volumes can range from 1 GiB to 16 TiB in size and must be rounded to the nearest GiB.  Each gateway configured for stored volumes can support up to 32 volumes and a total volume storage of 512 TiB\\\"<br><br>Option D states: \\\"Provision an AWS Storage Gateway Volume Gateway stored *volume* with the same amount of disk space as the existing file storage volume.\\\". <br>Notice that it states volume and not volumes, which would be the only way to match the information that the question provides.<br>Initial question states that on-premise volume is 100s of TB in size.<br>Therefore, only logical and viable answer can be C. <br>Feel free to prove me wrong",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 828353,
          "date": "Fri 03 Mar 2023 21:06",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "Stored Volume Gateway will retain ALL data locally whereas Cached Volume Gateway retains frequently accessed data locally",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 819887,
          "date": "Fri 24 Feb 2023 00:22",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "As per the given information, option 'C' can support the Company's requirements with the LEAST amount of change to the existing infrastructure, I think.<br>https://aws.amazon.com/storagegateway/volume/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 818198,
          "date": "Wed 22 Feb 2023 19:18",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "the \\\" all file types\\\" is confusing - does not say \\\"all files\\\" - also, hundreds of Terabytes is enormously large to maintain all files on-prem.Cache volume is also low latency",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 817574,
          "date": "Wed 22 Feb 2023 08:27",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "Answer is D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 813622,
          "date": "Sun 19 Feb 2023 02:04",
          "username": "\t\t\t\trrharris\t\t\t",
          "content": "Answer is D - Retain Immediate Access",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 812727,
          "date": "Sat 18 Feb 2023 07:41",
          "username": "\t\t\t\tzTopic\t\t\t",
          "content": "Keyword: Retain access to ALL data on-premise. <br>Provision an AWS Storage Gateway Volume Gateway stored volume",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 812335,
          "date": "Fri 17 Feb 2023 21:22",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "https://aws.amazon.com/storagegateway/volume/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>access to all file types not upto 10 tb. thats mean we will use store one not cached . D is correct</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 815981,
          "date": "Mon 20 Feb 2023 23:41",
          "username": "\t\t\t\tRehan33\t\t\t",
          "content": "access to all file types not upto 10 tb. thats mean we will use store one not cached . D is correct",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#325",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is hosting a web application from an Amazon S3 bucket. The application uses Amazon Cognito as an identity provider to authenticate users and return a JSON Web Token (JWT) that provides access to protected resources that are stored in another S3 bucket.<br><br>Upon deployment of the application, users report errors and are unable to access the protected content. A solutions architect must resolve this issue by providing proper permissions so that users can access the protected content.<br><br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#325",
          "answers": [
            {
              "choice": "<p>A. Update the Amazon Cognito identity pool to assume the proper IAM role for access to the protected content.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Update the S3 ACL to allow the application to access the protected content.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Redeploy the application to Amazon S3 to prevent eventually consistent reads in the S3 bucket from affecting the ability of users to access the protected content.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the Amazon Cognito pool to use custom attribute mappings within the identity pool and grant users the proper permissions to access the protected content.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 831636,
          "date": "Tue 07 Mar 2023 08:43",
          "username": "\t\t\t\tBrak\t\t\t",
          "content": "A makes no sense - Cognito is not accessing the S3 resource. It just returns the JWT token that will be attached to the S3 request.<br><br>D is the right answer, using custom attributes that are added to the JWT and used to grant permissions in S3. See https://docs.aws.amazon.com/cognito/latest/developerguide/using-attributes-for-access-control-policy-example.html for an example.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But even D requires setting up the permissions as bucket policy (as show in the shared example) which includes higher overhead than managing permissions attached to specific roles.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 833669,
          "date": "Thu 09 Mar 2023 08:05",
          "username": "\t\t\t\tAbhineet9148232\t\t\t",
          "content": "But even D requires setting up the permissions as bucket policy (as show in the shared example) which includes higher overhead than managing permissions attached to specific roles.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 828359,
          "date": "Fri 03 Mar 2023 21:09",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "Services access other services via IAM Roles.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 817575,
          "date": "Wed 22 Feb 2023 08:32",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "A is the best solution as it directly addresses the issue of permissions and grants authenticated users the necessary IAM role to access the protected content.<br><br>A suggests updating the Amazon Cognito identity pool to assume the proper IAM role for access to the protected content. This is a valid solution, as it would grant authenticated users the necessary permissions to access the protected content.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 814106,
          "date": "Sun 19 Feb 2023 14:16",
          "username": "\t\t\t\tjennyka76\t\t\t",
          "content": "ANSWER - A<br>https://docs.aws.amazon.com/cognito/latest/developerguide/tutorial-create-identity-pool.html<br>You have to create an custom role such as read-only",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 812733,
          "date": "Sat 18 Feb 2023 07:46",
          "username": "\t\t\t\tzTopic\t\t\t",
          "content": "Answer is A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#326",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An image hosting company uploads its large assets to Amazon S3 Standard buckets. The company uses multipart upload in parallel by using S3 APIs and overwrites if the same object is uploaded again. For the first 30 days after upload, the objects will be accessed frequently. The objects will be used less frequently after 30 days, but the access patterns for each object will be inconsistent. The company must optimize its S3 storage costs while maintaining high availability and resiliency of stored assets.<br><br>Which combination of actions should a solutions architect recommend to meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#326",
          "answers": [
            {
              "choice": "<p>A. Move assets to S3 Intelligent-Tiering after 30 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure an S3 Lifecycle policy to clean up incomplete multipart uploads.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure an S3 Lifecycle policy to clean up expired object delete markers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Move assets to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Move assets to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 30 days.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 812990,
          "date": "Sat 18 Feb 2023 14:14",
          "username": "\t\t\t\tNeha999\t\t\t",
          "content": "AB<br>A : Access Pattern for each object inconsistent, Infrequent Access<br>B : Deleting Incomplete Multipart Uploads to Lower Amazon S3 Costs",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 816082,
          "date": "Tue 21 Feb 2023 02:23",
          "username": "\t\t\t\tTungPham\t\t\t",
          "content": "B because Abort Incomplete Multipart Uploads Using S3 Lifecycle => https://aws.amazon.com/blogs/aws-cloud-financial-management/discovering-and-deleting-incomplete-multipart-uploads-to-lower-amazon-s3-costs/<br>A because The objects will be used less frequently after 30 days, but the access patterns for each object will be inconsistent => random access => S3 Intelligent-Tiering",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 833900,
          "date": "Thu 09 Mar 2023 12:27",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "i think b , d make more sense<br>it is no matter where each object is moved,<br>we only know object is not accessed frequently after 30days<br>so i go with D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 833672,
          "date": "Thu 09 Mar 2023 08:14",
          "username": "\t\t\t\tAbhineet9148232\t\t\t",
          "content": "S3-IA provides same low latency and high throughput performance of S3 Standard. Ideal for infrequent but high throughput access.<br><br>https://aws.amazon.com/s3/storage-classes/#Unknown_or_changing_access",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 828371,
          "date": "Fri 03 Mar 2023 21:17",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "For A vs D, this comment is \\\"but the access patterns for each object will be inconsistent.\\\"That means some object will be accessed, others will not.This will give the Inteligent tier the opportunity to move the S3 object to Glacier Instant Retireval which still has very low latency.This is a confusing question though since Inteligent tiering does add additional costs per object.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 827409,
          "date": "Thu 02 Mar 2023 21:34",
          "username": "\t\t\t\tHaineHess\t\t\t",
          "content": "b d for cost saving & high availability",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 823822,
          "date": "Mon 27 Feb 2023 15:40",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "B is sure<br>Here is why D is correct for the storage solution with less frequent access. See the below link for detail about that.<br>https://aws.amazon.com/s3/storage-classes/#Infrequent_access",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 823817,
          "date": "Mon 27 Feb 2023 15:33",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "It is sure that the correct answer are option B andD. <br>S3 Standard-IA is for data that is accessed less frequently but requires rapid access when needed. S3 Standard-IA offers the high durability, high throughput, and low latency of S3 Standard, with a low per GB storage price and per GB retrieval charge.<br>https://aws.amazon.com/s3/storage-classes/#Infrequent_access",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 819884,
          "date": "Fri 24 Feb 2023 00:20",
          "username": "\t\t\t\tJa13\t\t\t",
          "content": "As it says \\\"inconsistent patterns\\\" intelligent tiering is best",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 819426,
          "date": "Thu 23 Feb 2023 17:55",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "S3 Intelligent-Tiering - Data with unknown, changing, or unpredictable access patterns and moves objects that have not been accessed in 30 consecutive days to the Infrequent Access tier.<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 817582,
          "date": "Wed 22 Feb 2023 08:45",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "Makes more sense to me",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 816016,
          "date": "Tue 21 Feb 2023 00:33",
          "username": "\t\t\t\tgeekgirl22\t\t\t",
          "content": "AB,<br>Delete failed multi part uploadshttps://aws.amazon.com/blogs/aws-cloud-financial-management/discovering-and-deleting-incomplete-multipart-uploads-to-lower-amazon-s3-costs/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 815656,
          "date": "Mon 20 Feb 2023 19:25",
          "username": "\t\t\t\tVirgilio1t\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/84533-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 814618,
          "date": "Sun 19 Feb 2023 23:15",
          "username": "\t\t\t\tskiwili\t\t\t",
          "content": "B and D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 814296,
          "date": "Sun 19 Feb 2023 18:08",
          "username": "\t\t\t\tNolaHOla\t\t\t",
          "content": "AB:<br>The company can optimize its S3 storage costs while maintaining high availability and resiliency of stored assets by taking the following actions:<br>A.  Move assets to S3 Intelligent-Tiering after 30 days to automatically move infrequently accessed objects to the infrequent access tier and minimize storage costs. This storage class is designed to optimize costs by automatically moving data to the most cost-effective access tier without any performance impact or operational overhead. It provides automatic cost savings by moving data between two access tiers (frequent and infrequent) when access patterns change, without any performance impact or operational overhead.<br>B.  Configure an S3 Lifecycle policy to clean up incomplete multipart uploads. This will help prevent storage costs from increasing due to incomplete multipart uploads and minimize storage costs.<br><br>Therefore, the recommended actions are A and B. ",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 814089,
          "date": "Sun 19 Feb 2023 14:02",
          "username": "\t\t\t\tjennyka76\t\t\t",
          "content": "Answer A & D<br>https://aws.amazon.com/s3/storage-classes/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 813075,
          "date": "Sat 18 Feb 2023 15:16",
          "username": "\t\t\t\tkpato87\t\t\t",
          "content": "The access patterns for each object are inconsistent after 30 days, so moving the assets to S3 Intelligent-Tiering will optimize storage costs while maintaining high availability and resiliency.<br><br>Moving assets to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days will also optimize storage costs, as S3 Standard-IA is designed for infrequently accessed data that needs to be stored for longer durations, while still maintaining high availability and durability.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        }
      ]
    },
    {
      "question_id": "#327",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect must secure a VPC network that hosts Amazon EC2 instances. The EC2 instances contain highly sensitive data and run in a private subnet. According to company policy, the EC2 instances that run in the VPC can access only approved third-party software repositories on the internet for software product updates that use the third party's URL. Other internet traffic must be blocked.<br><br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#327",
          "answers": [
            {
              "choice": "<p>A. Update the route table for the private subnet to route the outbound traffic to an AWS Network Firewall firewall. Configure domain list rule groups.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up an AWS WAF web ACL. Create a custom set of rules that filter traffic requests based on source and destination IP address range sets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Implement strict inbound security group rules. Configure an outbound rule that allows traffic only to the authorized software repositories on the internet by specifying the URLs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure an Application Load Balancer (ALB) in front of the EC2 instances. Direct all outbound traffic to the ALB.  Use a URL-based rule listener in the ALB's target group for outbound access to the internet.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 836432,
          "date": "Sat 11 Mar 2023 20:11",
          "username": "\t\t\t\tUnluckyDucky\t\t\t",
          "content": "Can't use URLs in outbound rule of security groups. URL Filtering screams Firewall.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 833075,
          "date": "Wed 08 Mar 2023 15:53",
          "username": "\t\t\t\tVeseljkoD\t\t\t",
          "content": "We can't specifu URL in outbound rule of security group. Create free tier AWS account and test it.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 831762,
          "date": "Tue 07 Mar 2023 11:33",
          "username": "\t\t\t\tLeo301\t\t\t",
          "content": "CCCCCCCCCCC",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 831645,
          "date": "Tue 07 Mar 2023 08:52",
          "username": "\t\t\t\tBrak\t\t\t",
          "content": "It can't be C.  You cannot use URLs in the outbound rules of a security group.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 829613,
          "date": "Sun 05 Mar 2023 05:03",
          "username": "\t\t\t\tjohnmcclane78\t\t\t",
          "content": "Option C is the best solution to meet the requirements of this scenario. Implementing strict inbound security group rules that only allow traffic from approved sources can help secure the VPC network that hosts Amazon EC2 instances. Additionally, configuring an outbound rule that allows traffic only to the authorized software repositories on the internet by specifying the URLs will ensure that only approved third-party software repositories can be accessed from the EC2 instances. This solution does not require any additional AWS services and can be implemented using VPC security groups.<br><br>Option A is not the best solution as it involves the use of AWS Network Firewall, which may introduce additional operational overhead. While domain list rule groups can be used to block all internet traffic except for the approved third-party software repositories, this solution is more complex than necessary for this scenario.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 828392,
          "date": "Fri 03 Mar 2023 21:30",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "In the security group, only allow inbound traffic originating from the VPC. Then only allow outbound traffic with a whitelisted IP address.The question asks about blocking EC2 instances, which is best for security groups since those are at the EC2 instance level.A network firewall is at the VPC level, which is not what the question is asking to protect.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Is Security Group able to allow a specific URL? According to https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html, I cannot find such description.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 829867,
          "date": "Sun 05 Mar 2023 12:27",
          "username": "\t\t\t\tTheodorz\t\t\t",
          "content": "Is Security Group able to allow a specific URL? According to https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html, I cannot find such description.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 820068,
          "date": "Fri 24 Feb 2023 04:17",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "I am confused that It seems both options A and C are valid solutions.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Same here - why is C not a valid option?</li><li>And it is easier to do it at the level</li><li>And it is easier to do it at the VPC level</li><li>Because in this case, the session is initialized from inside</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 825796,
          "date": "Wed 01 Mar 2023 13:13",
          "username": "\t\t\t\tZohx\t\t\t",
          "content": "Same here - why is C not a valid option?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>And it is easier to do it at the level</li><li>And it is easier to do it at the VPC level</li><li>Because in this case, the session is initialized from inside</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 827760,
          "date": "Fri 03 Mar 2023 09:18",
          "username": "\t\t\t\tKarlos99\t\t\t",
          "content": "And it is easier to do it at the level",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 827761,
          "date": "Fri 03 Mar 2023 09:19",
          "username": "\t\t\t\tKarlos99\t\t\t",
          "content": "And it is easier to do it at the VPC level",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 827756,
          "date": "Fri 03 Mar 2023 09:13",
          "username": "\t\t\t\tKarlos99\t\t\t",
          "content": "Because in this case, the session is initialized from inside",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 819594,
          "date": "Thu 23 Feb 2023 20:01",
          "username": "\t\t\t\tBhawesh\t\t\t",
          "content": "Correct Answer A.  Send the outbound connection from EC2 to Network Firewall. In Network Firewall, create stateful outbound rules to allow certain domains for software patch download and deny all other domains.<br><br>https://docs.aws.amazon.com/network-firewall/latest/developerguide/suricata-examples.html#suricata-example-domain-filtering",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 814074,
          "date": "Sun 19 Feb 2023 13:46",
          "username": "\t\t\t\tjennyka76\t\t\t",
          "content": "Answer - A<br>https://aws.amazon.com/premiumsupport/knowledge-center/ec2-al1-al2-update-yum-without-internet/",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 812973,
          "date": "Sat 18 Feb 2023 14:03",
          "username": "\t\t\t\tNeha999\t\t\t",
          "content": "A as other options are controlling inbound traffic",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#328",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is hosting a three-tier ecommerce application in the AWS Cloud. The company hosts the website on Amazon S3 and integrates the website with an API that handles sales requests. The company hosts the API on three Amazon EC2 instances behind an Application Load Balancer (ALB). The API consists of static and dynamic front-end content along with backend workers that process sales requests asynchronously.<br><br>The company is expecting a significant and sudden increase in the number of sales requests during events for the launch of new products.<br><br>What should a solutions architect recommend to ensure that all the requests are processed successfully?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#328",
          "answers": [
            {
              "choice": "<p>A. Add an Amazon CloudFront distribution for the dynamic content. Increase the number of EC2 instances to handle the increase in traffic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add an Amazon CloudFront distribution for the static content. Place the EC2 instances in an Auto Scaling group to launch new instances based on network traffic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Add an Amazon CloudFront distribution for the dynamic content. Add an Amazon ElastiCache instance in front of the ALB to reduce traffic for the API to handle.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add an Amazon CloudFront distribution for the static content. Add an Amazon Simple Queue Service (Amazon SQS) queue to receive requests from the website for later processing by the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 831137,
          "date": "Mon 06 Mar 2023 19:32",
          "username": "\t\t\t\tharirkmusa\t\t\t",
          "content": "Selected D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 830611,
          "date": "Mon 06 Mar 2023 08:29",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "anwer d",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 828400,
          "date": "Fri 03 Mar 2023 21:36",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "The auto-scaling would increase the rate at which sales requests are \\\"processed\\\", whereas a SQS will ensure messages don't get lost.If you were at a fast food restaurant with a long line with 3 cash registers, would you want more cash registers or longer ropes to handle longer lines?Same concept here.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 820099,
          "date": "Fri 24 Feb 2023 05:21",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "I think D. <br>It may be SQS as per the points, <br>>workers process sales requests asynchronously and <br>?the requests are processed successfully,",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 818732,
          "date": "Thu 23 Feb 2023 04:18",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "Based on the provided information, the best option is B.  Add an Amazon CloudFront distribution for the static content. Place the EC2 instances in an Auto Scaling group to launch new instances based on network traffic.<br><br>This option addresses the need for scaling the infrastructure to handle the increase in traffic by adding an Auto Scaling group to the existing EC2 instances, which allows for automatic scaling based on network traffic. Additionally, adding an Amazon CloudFront distribution for the static content will improve the performance of the website by caching content closer to the end-users.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>D maybe inappropriate for this scenario because by adding an Amazon CloudFront distribution for the static content and adding an Amazon Simple Queue Service (Amazon SQS) queue to receive requests from the website for later processing by the EC2 instances, is not the best option as it adds unnecessary complexity to the system. It would be better to add an Auto Scaling group to handle the increased traffic.</li><li>SQS also doesn't ensure real-time processing since the EC2s would be the bottleneck.</li><li>No, because you must ensure the requests are processed successfully. If there is a sudden spike in usage some messages might be missed whereas with SQS the messages must be processed before being removed from the queue. Answer D is correct</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 818733,
          "date": "Thu 23 Feb 2023 04:20",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "D maybe inappropriate for this scenario because by adding an Amazon CloudFront distribution for the static content and adding an Amazon Simple Queue Service (Amazon SQS) queue to receive requests from the website for later processing by the EC2 instances, is not the best option as it adds unnecessary complexity to the system. It would be better to add an Auto Scaling group to handle the increased traffic.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>SQS also doesn't ensure real-time processing since the EC2s would be the bottleneck.</li><li>No, because you must ensure the requests are processed successfully. If there is a sudden spike in usage some messages might be missed whereas with SQS the messages must be processed before being removed from the queue. Answer D is correct</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 828398,
          "date": "Fri 03 Mar 2023 21:34",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "SQS also doesn't ensure real-time processing since the EC2s would be the bottleneck.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 821420,
          "date": "Sat 25 Feb 2023 12:25",
          "username": "\t\t\t\tnder\t\t\t",
          "content": "No, because you must ensure the requests are processed successfully. If there is a sudden spike in usage some messages might be missed whereas with SQS the messages must be processed before being removed from the queue. Answer D is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 812964,
          "date": "Sat 18 Feb 2023 13:57",
          "username": "\t\t\t\tNeha999\t\t\t",
          "content": "D<br>https://www.examtopics.com/discussions/amazon/view/67936-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 812296,
          "date": "Fri 17 Feb 2023 20:47",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "Static content can include images and style sheets that are the same across all users and are best cached at the edges of the content distribution network (CDN). Dynamic content includes information that changes frequently or is personalized based on user preferences, behavior, location or other factors- all content is sales requests",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#329",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A security audit reveals that Amazon EC2 instances are not being patched regularly. A solutions architect needs to provide a solution that will run regular security scans across a large fleet of EC2 instances. The solution should also patch the EC2 instances on a regular schedule and provide a report of each instance's patch status.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#329",
          "answers": [
            {
              "choice": "<p>A. Set up Amazon Macie to scan the EC2 instances for software vulnerabilities. Set up a cron job on each EC2 instance to patch the instance on a regular schedule.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Turn on Amazon GuardDuty in the account. Configure GuardDuty to scan the EC2 instances for software vulnerabilities. Set up AWS Systems Manager Session Manager to patch the EC2 instances on a regular schedule.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up Amazon Detective to scan the EC2 instances for software vulnerabilities. Set up an Amazon EventBridge scheduled rule to patch the EC2 instances on a regular schedule.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Turn on Amazon Inspector in the account. Configure Amazon Inspector to scan the EC2 instances for software vulnerabilities. Set up AWS Systems Manager Patch Manager to patch the EC2 instances on a regular schedule.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 828407,
          "date": "Fri 03 Mar 2023 21:43",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "Inspecter is for EC2 instances and network accessibility of those instances<br>https://portal.tutorialsdojo.com/forums/discussion/difference-between-security-hub-detective-and-inspector/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 818742,
          "date": "Thu 23 Feb 2023 04:28",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "Amazon Inspector is a security assessment service that helps improve the security and compliance of applications deployed on Amazon Web Services (AWS). It automatically assesses applications for vulnerabilities or deviations from best practices. Amazon Inspector can be used to identify security issues and recommend fixes for them. It is an ideal solution for running regular security scans across a large fleet of EC2 instances.<br><br>AWS Systems Manager Patch Manager is a service that helps you automate the process of patching Windows and Linux instances. It provides a simple, automated way to patch your instances with the latest security patches and updates. Patch Manager helps you maintain compliance with security policies and regulations by providing detailed reports on the patch status of your instances.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 816239,
          "date": "Tue 21 Feb 2023 06:39",
          "username": "\t\t\t\tTungPham\t\t\t",
          "content": "Amazon Inspectorfor EC2<br>https://aws.amazon.com/vi/inspector/faqs/?nc1=f_ls<br>Amazon system manager Patch manager for automates the process of patching managed nodes with both security-related updates and other types of updates.<br><br>http://webcache.googleusercontent.com/search?q=cache:FbFTc6XKycwJ:https://medium.com/aws-architech/use-case-aws-inspector-vs-guardduty-3662bf80767a&hl=vi&gl=kr&strip=1&vwsrc=0",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 813488,
          "date": "Sat 18 Feb 2023 21:36",
          "username": "\t\t\t\tjennyka76\t\t\t",
          "content": "answer - D<br>https://aws.amazon.com/inspector/faqs/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 812977,
          "date": "Sat 18 Feb 2023 14:05",
          "username": "\t\t\t\tNeha999\t\t\t",
          "content": "D as AWS Systems Manager Patch Manager can patch the EC2 instances.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#330",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning to store data on Amazon RDS DB instances. The company must encrypt the data at rest.<br><br>What should a solutions architect do to meet this requirement?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#330",
          "answers": [
            {
              "choice": "<p>A. Create a key in AWS Key Management Service (AWS KMS). Enable encryption for the DB instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an encryption key. Store the key in AWS Secrets Manager. Use the key to encrypt the DB instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Generate a certificate in AWS Certificate Manager (ACM). Enable SSL/TLS on the DB instances by using the certificate.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Generate a certificate in AWS Identity and Access Management (IAM). Enable SSL/TLS on the DB instances by using the certificate.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 831532,
          "date": "Tue 07 Mar 2023 04:45",
          "username": "\t\t\t\tPRASAD180\t\t\t",
          "content": "A is 100% Crt",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 828409,
          "date": "Fri 03 Mar 2023 21:45",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "Key Management Service.Secrets Manager is for database connection strings.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 818746,
          "date": "Thu 23 Feb 2023 04:31",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "A is the correct solution to meet the requirement of encrypting the data at rest. <br><br>To encrypt data at rest in Amazon RDS, you can use the encryption feature of Amazon RDS, which uses AWS Key Management Service (AWS KMS). With this feature, Amazon RDS encrypts each database instance with a unique key. This key is stored securely by AWS KMS. You can manage your own keys or use the default AWS-managed keys. When you enable encryption for a DB instance, Amazon RDS encrypts the underlying storage, including the automated backups, read replicas, and snapshots.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 818215,
          "date": "Wed 22 Feb 2023 19:25",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "AWS Key Management Service (KMS) is used to manage the keys used to encrypt and decrypt the data.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 815766,
          "date": "Mon 20 Feb 2023 20:56",
          "username": "\t\t\t\tpbpally\t\t\t",
          "content": "Option A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 814302,
          "date": "Sun 19 Feb 2023 18:15",
          "username": "\t\t\t\tNolaHOla\t\t\t",
          "content": "A.  Create a key in AWS Key Management Service (AWS KMS). Enable encryption for the DB instances is the correct answer to encrypt the data at rest in Amazon RDS DB instances.<br><br>Amazon RDS provides multiple options for encrypting data at rest. AWS Key Management Service (KMS) is used to manage the keys used to encrypt and decrypt the data. Therefore, a solution architect should create a key in AWS KMS and enable encryption for the DB instances to encrypt the data at rest.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 814050,
          "date": "Sun 19 Feb 2023 13:16",
          "username": "\t\t\t\tjennyka76\t\t\t",
          "content": "ANSWER - A<br>https://docs.aws.amazon.com/whitepapers/latest/efs-encrypted-file-systems/managing-keys.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 812285,
          "date": "Fri 17 Feb 2023 20:38",
          "username": "\t\t\t\tBhawesh\t\t\t",
          "content": "A.  Create a key in AWS Key Management Service (AWS KMS). Enable encryption for the DB instances.<br><br>https://www.examtopics.com/discussions/amazon/view/80753-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#331",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company must migrate 20 TB of data from a data center to the AWS Cloud within 30 days. The company's network bandwidth is limited to 15 Mbps and cannot exceed 70% utilization.<br><br>What should a solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#331",
          "answers": [
            {
              "choice": "<p>A. Use AWS Snowball.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS DataSync.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use a secure VPN connection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon S3 Transfer Acceleration.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 820620,
          "date": "Fri 24 Feb 2023 15:45",
          "username": "\t\t\t\tBilalazure\t\t\t",
          "content": "Aws snowball",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 818800,
          "date": "Thu 23 Feb 2023 05:40",
          "username": "\t\t\t\tPRASAD180\t\t\t",
          "content": "A is 100% Crt",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 818756,
          "date": "Thu 23 Feb 2023 04:38",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "AWS Snowball",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 815761,
          "date": "Mon 20 Feb 2023 20:55",
          "username": "\t\t\t\tpbpally\t\t\t",
          "content": "Option a",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 814042,
          "date": "Sun 19 Feb 2023 13:07",
          "username": "\t\t\t\tjennyka76\t\t\t",
          "content": "ANSWER - A<br>https://docs.aws.amazon.com/snowball/latest/ug/whatissnowball.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 811776,
          "date": "Fri 17 Feb 2023 12:01",
          "username": "\t\t\t\tAWSSHA1\t\t\t",
          "content": "option A",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#332",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to provide its employees with secure access to confidential and sensitive files. The company wants to ensure that the files can be accessed only by authorized users. The files must be downloaded securely to the employees' devices.<br><br>The files are stored in an on-premises Windows file server. However, due to an increase in remote usage, the file server is running out of capacity.<br>.<br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#332",
          "answers": [
            {
              "choice": "<p>A. Migrate the file server to an Amazon EC2 instance in a public subnet. Configure the security group to limit inbound traffic to the employees' IP addresses.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the files to an Amazon FSx for Windows File Server file system. Integrate the Amazon FSx file system with the on-premises Active Directory. Configure AWS Client VPN.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the files to Amazon S3, and create a private VPC endpoint. Create a signed URL to allow download.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the files to Amazon S3, and create a public VPC endpoint. Allow employees to sign on with AWS IAM Identity Center (AWS Single Sign-On).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 818808,
          "date": "Thu 23 Feb 2023 06:10",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "B is the best solution for the given requirements. It provides a secure way for employees to access confidential and sensitive files from anywhere using AWS Client VPN. The Amazon FSx for Windows File Server file system is designed to provide native support for Windows file system features such as NTFS permissions, Active Directory integration, and Distributed File System (DFS). This means that the company can continue to use their on-premises Active Directory to manage user access to files.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 818479,
          "date": "Wed 22 Feb 2023 22:51",
          "username": "\t\t\t\tBilalazure\t\t\t",
          "content": "B is the correct answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 814032,
          "date": "Sun 19 Feb 2023 12:57",
          "username": "\t\t\t\tjennyka76\t\t\t",
          "content": "Answer - B<br>1- https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html<br>2- https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-storage-capacity.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 812950,
          "date": "Sat 18 Feb 2023 13:46",
          "username": "\t\t\t\tNeha999\t\t\t",
          "content": "B <br>Amazon FSx for Windows File Server file system",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#333",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's application runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances run in an Amazon EC2 Auto Scaling group across multiple Availability Zones. On the first day of every month at midnight, the application becomes much slower when the month-end financial calculation batch runs. This causes the CPU utilization of the EC2 instances to immediately peak to 100%, which disrupts the application.<br><br>What should a solutions architect recommend to ensure the application is able to handle the workload and avoid downtime?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#333",
          "answers": [
            {
              "choice": "<p>A. Configure an Amazon CloudFront distribution in front of the ALB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure an EC2 Auto Scaling simple scaling policy based on CPU utilization.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure an EC2 Auto Scaling scheduled scaling policy based on the monthly schedule.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure Amazon ElastiCache to remove some of the workload from the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 828430,
          "date": "Fri 03 Mar 2023 22:04",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "If the scaling were based on CPU or memory, it requires a certain amount of time above that threshhold, 5 minutes for example.That would mean the CPU would be at 100% for five minutes.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 818811,
          "date": "Thu 23 Feb 2023 06:16",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "C: Configure an EC2 Auto Scaling scheduled scaling policy based on the monthly schedule is the best option because it allows for the proactive scaling of the EC2 instances before the monthly batch run begins. This will ensure that the application is able to handle the increased workload without experiencing downtime. The scheduled scaling policy can be configured to increase the number of instances in the Auto Scaling group a few hours before the batch run and then decrease the number of instances after the batch run is complete. This will ensure that the resources are available when needed and not wasted when not needed.<br><br>The most appropriate solution to handle the increased workload during the monthly batch run and avoid downtime would be to configure an EC2 Auto Scaling scheduled scaling policy based on the monthly schedule.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Scheduled scaling policies allow you to schedule EC2 instance scaling events in advance based on a specified time and date. You can use this feature to plan for anticipated traffic spikes or seasonal changes in demand. By setting up scheduled scaling policies, you can ensure that you have the right number of instances running at the right time, thereby optimizing performance and reducing costs.<br><br>To set up a scheduled scaling policy in EC2 Auto Scaling, you need to specify the following:<br><br>Start time and date: The date and time when the scaling event should begin.<br><br>Desired capacity: The number of instances that you want to have running after the scaling event.<br><br>Recurrence: The frequency with which the scaling event should occur. This can be a one-time event or a recurring event, such as daily or weekly.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 818812,
          "date": "Thu 23 Feb 2023 06:19",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "Scheduled scaling policies allow you to schedule EC2 instance scaling events in advance based on a specified time and date. You can use this feature to plan for anticipated traffic spikes or seasonal changes in demand. By setting up scheduled scaling policies, you can ensure that you have the right number of instances running at the right time, thereby optimizing performance and reducing costs.<br><br>To set up a scheduled scaling policy in EC2 Auto Scaling, you need to specify the following:<br><br>Start time and date: The date and time when the scaling event should begin.<br><br>Desired capacity: The number of instances that you want to have running after the scaling event.<br><br>Recurrence: The frequency with which the scaling event should occur. This can be a one-time event or a recurring event, such as daily or weekly.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 818225,
          "date": "Wed 22 Feb 2023 19:31",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "C is the correct answer as traffic spike is known",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 814024,
          "date": "Sun 19 Feb 2023 12:49",
          "username": "\t\t\t\tjennyka76\t\t\t",
          "content": "ANSWER - C<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-scheduled-scaling.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 812945,
          "date": "Sat 18 Feb 2023 13:40",
          "username": "\t\t\t\tNeha999\t\t\t",
          "content": "C as the schedule of traffic spike is known beforehand.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#334",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to give a customer the ability to use on-premises Microsoft Active Directory to download files that are stored in Amazon S3. The customer's application uses an SFTP client to download the files.<br><br>Which solution will meet these requirements with the LEAST operational overhead and no changes to the customer's application?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#334",
          "answers": [
            {
              "choice": "<p>A. Set up AWS Transfer Family with SFTP for Amazon S3. Configure integrated Active Directory authentication.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up AWS Database Migration Service (AWS DMS) to synchronize the on-premises client with Amazon S3. Configure integrated Active Directory authentication.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up AWS DataSync to synchronize between the on-premises location and the S3 location by using AWS IAM Identity Center (AWS Single Sign-On).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up a Windows Amazon EC2 instance with SFTP to connect the on-premises client with Amazon S3. Integrate AWS Identity and Access Management (IAM).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 828431,
          "date": "Fri 03 Mar 2023 22:06",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "SFTP, FTP - think \\\"Transfer\\\" during test time",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 818818,
          "date": "Thu 23 Feb 2023 06:26",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "AWS Transfer Family",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 818817,
          "date": "Thu 23 Feb 2023 06:24",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "AWS Transfer Family is a fully managed service that allows customers to transfer files over SFTP, FTPS, and FTP directly into and out of Amazon S3. It eliminates the need to manage any infrastructure for file transfer, which reduces operational overhead. Additionally, the service can be configured to use an existing Active Directory for authentication, which means that no changes need to be made to the customer's application.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 818226,
          "date": "Wed 22 Feb 2023 19:32",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "Transfer family is used for SFTP",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 813638,
          "date": "Sun 19 Feb 2023 02:26",
          "username": "\t\t\t\tTungPham\t\t\t",
          "content": "using AWS Batch toLEAST operational overhead<br>and have SFTP to no changes to the customer's application<br><br>https://aws.amazon.com/vi/blogs/architecture/managed-file-transfer-using-aws-transfer-family-and-amazon-s3/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 812291,
          "date": "Fri 17 Feb 2023 20:44",
          "username": "\t\t\t\tBhawesh\t\t\t",
          "content": "A.  Set up AWS Transfer Family with SFTP for Amazon S3. Configure integrated Active Directory authentication.<br><br>https://docs.aws.amazon.com/transfer/latest/userguide/directory-services-users.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#335",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is experiencing sudden increases in demand. The company needs to provision large Amazon EC2 instances from an Amazon Machine Image (AMI). The instances will run in an Auto Scaling group. The company needs a solution that provides minimum initialization latency to meet the demand.<br><br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#335",
          "answers": [
            {
              "choice": "<p>A. Use the aws ec2 register-image command to create an AMI from a snapshot. Use AWS Step Functions to replace the AMI in the Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable Amazon Elastic Block Store (Amazon EBS) fast snapshot restore on a snapshot. Provision an AMI by using the snapshot. Replace the AMI in the Auto Scaling group with the new AMI.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable AMI creation and define lifecycle rules in Amazon Data Lifecycle Manager (Amazon DLM). Create an AWS Lambda function that modifies the AMI in the Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon EventBridge to invoke AWS Backup lifecycle policies that provision AMIs. Configure Auto Scaling group capacity limits as an event source in EventBridge.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 820125,
          "date": "Fri 24 Feb 2023 06:09",
          "username": "\t\t\t\tgeekgirl22\t\t\t",
          "content": "Keyword, minimize initilization latency == snapshot.A and B have snapshots in them, but B is the one that makes sense.<br>C has DLP that can create machines from AMI, but that does not talk about latency and snapshots.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 818822,
          "date": "Thu 23 Feb 2023 06:32",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "Enabling Amazon Elastic Block Store (Amazon EBS) fast snapshot restore on a snapshot allows for rapid restoration of EBS volumes from snapshots. This reduces the time required to create an AMI from a snapshot, which is useful for quickly provisioning large Amazon EC2 instances.<br><br>Provisioning an AMI by using the fast snapshot restore feature is a fast and efficient way to create an AMI. Once the AMI is created, it can be replaced in the Auto Scaling group without any downtime or disruption to running instances.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 816690,
          "date": "Tue 21 Feb 2023 15:49",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "Enabling Amazon Elastic Block Store (Amazon EBS) fast snapshot restore on a snapshot allows you to<br>quickly create a new Amazon Machine Image (AMI) from a snapshot, which can help reduce the<br>initialization latency when provisioning new instances. Once the AMI is provisioned, you can replace<br>the AMI in the Auto Scaling group with the new AMI. This will ensure that new instances are launched from the updated AMI and are able to meet the increased demand quickly.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 813670,
          "date": "Sun 19 Feb 2023 03:24",
          "username": "\t\t\t\tTungPham\t\t\t",
          "content": "Provision an AMI by using the snapshot => not sure because SnapShot only backup a EBS, AMI is backup a cluster<br>. Replace the AMI in the Auto Scaling group with the new AMI. => for what ??<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html<br><br>Amazon Data Lifecycle Manager helps automate snapshot and AMI management",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 813417,
          "date": "Sat 18 Feb 2023 20:07",
          "username": "\t\t\t\tjennyka76\t\t\t",
          "content": "agree with answer - B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 813109,
          "date": "Sat 18 Feb 2023 15:39",
          "username": "\t\t\t\tkpato87\t\t\t",
          "content": "Option B is the most suitable solution for this use case, as it enables Amazon Elastic Block Store (Amazon EBS) fast snapshot restore on a snapshot, which significantly reduces the time required for creating an AMI from the snapshot. The fast snapshot restore feature enables Amazon EBS to pre-warm the EBS volumes associated with the snapshot, which reduces the time required to initialize the volumes when launching instances from the AMI.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 812942,
          "date": "Sat 18 Feb 2023 13:35",
          "username": "\t\t\t\tNeha999\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/82400-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 812163,
          "date": "Fri 17 Feb 2023 18:25",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "Enabling Amazon Elastic Block Store (Amazon EBS) fast snapshot restore on a snapshot allows you to<br>quickly create a new Amazon Machine Image (AMI) from a snapshot, which can help reduce the<br>initialization latency when provisioning new instances. Once the AMI is provisioned, you can replace<br>the AMI in the Auto Scaling group with the new AMI. This will ensure that new instances are launched<br>from the updated AMI and are able to meet the increased demand quickly.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#336",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a multi-tier web application that uses an Amazon Aurora MySQL DB cluster for storage. The application tier is hosted on Amazon EC2 instances. The company's IT security guidelines mandate that the database credentials be encrypted and rotated every 14 days.<br><br>What should a solutions architect do to meet this requirement with the LEAST operational effort?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#336",
          "answers": [
            {
              "choice": "<p>A. Create a new AWS Key Management Service (AWS KMS) encryption key. Use AWS Secrets Manager to create a new secret that uses the KMS key with the appropriate credentials. Associate the secret with the Aurora DB cluster. Configure a custom rotation period of 14 days.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create two parameters in AWS Systems Manager Parameter Store: one for the user name as a string parameter and one that uses the SecureString type for the password. Select AWS Key Management Service (AWS KMS) encryption for the password parameter, and load these parameters in the application tier. Implement an AWS Lambda function that rotates the password every 14 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Store a file that contains the credentials in an AWS Key Management Service (AWS KMS) encrypted Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system in all EC2 instances of the application tier. Restrict the access to the file on the file system so that the application can read the file and that only super users can modify the file. Implement an AWS Lambda function that rotates the key in Aurora every 14 days and writes new credentials into the file.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Store a file that contains the credentials in an AWS Key Management Service (AWS KMS) encrypted Amazon S3 bucket that the application uses to load the credentials. Download the file to the application regularly to ensure that the correct credentials are used. Implement an AWS Lambda function that rotates the Aurora credentials every 14 days and uploads these credentials to the file in the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 828433,
          "date": "Fri 03 Mar 2023 22:19",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "Voting A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 818838,
          "date": "Thu 23 Feb 2023 07:00",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "A proposes to create a new AWS KMS encryption key and use AWS Secrets Manager to create a new secret that uses the KMS key with the appropriate credentials. Then, the secret will be associated with the Aurora DB cluster, and a custom rotation period of 14 days will be configured. AWS Secrets Manager will automate the process of rotating the database credentials, which will reduce the operational effort required to meet the IT security guidelines.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 813403,
          "date": "Sat 18 Feb 2023 19:50",
          "username": "\t\t\t\tjennyka76\t\t\t",
          "content": "Answer is A<br>To implement password rotation lifecycles, use AWS Secrets Manager. You can rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle using Secrets Manager.<br>https://aws.amazon.com/blogs/security/how-to-use-aws-secrets-manager-rotate-credentials-amazon-rds-database-types-oracle/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 812940,
          "date": "Sat 18 Feb 2023 13:31",
          "username": "\t\t\t\tNeha999\t\t\t",
          "content": "A<br>https://www.examtopics.com/discussions/amazon/view/59985-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#337",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has deployed a web application on AWS. The company hosts the backend database on Amazon RDS for MySQL with a primary DB instance and five read replicas to support scaling needs. The read replicas must lag no more than 1 second behind the primary DB instance. The database routinely runs scheduled stored procedures.<br><br>As traffic on the website increases, the replicas experience additional lag during periods of peak load. A solutions architect must reduce the replication lag as much as possible. The solutions architect must minimize changes to the application code and must minimize ongoing operational overhead.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#337",
          "answers": [
            {
              "choice": "<p>A. Migrate the database to Amazon Aurora MySQL. Replace the read replicas with Aurora Replicas, and configure Aurora Auto Scaling. Replace the stored procedures with Aurora MySQL native functions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an Amazon ElastiCache for Redis cluster in front of the database. Modify the application to check the cache before the application queries the database. Replace the stored procedures with AWS Lambda functions.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the database to a MySQL database that runs on Amazon EC2 instances. Choose large, compute optimized EC2 instances for all replica nodes. Maintain the stored procedures on the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the database to Amazon DynamoDB.  Provision a large number of read capacity units (RCUs) to support the required throughput, and configure on-demand capacity scaling. Replace the stored procedures with DynamoDB streams.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 835621,
          "date": "Sat 11 Mar 2023 04:36",
          "username": "\t\t\t\tkaushald\t\t\t",
          "content": "Option A is the most appropriate solution for reducing replication lag without significant changes to the application code and minimizing ongoing operational overhead. Migrating the database to Amazon Aurora MySQL allows for improved replication performance and higher scalability compared to Amazon RDS for MySQL. Aurora Replicas provide faster replication, reducing the replication lag, and Aurora Auto Scaling ensures that there are enough Aurora Replicas to handle the incoming traffic. Additionally, Aurora MySQL native functions can replace the stored procedures, reducing the load on the database and improving performance.<br><br>Option B is not the best solution since adding an ElastiCache for Redis cluster does not address the replication lag issue, and the cache may not have the most up-to-date information. Additionally, replacing the stored procedures with AWS Lambda functions adds additional complexity and may not improve performance.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 834510,
          "date": "Fri 10 Mar 2023 00:37",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "a,b are confusing me..<br>i would like to go with b..<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option B is incorrect because it suggests using ElastiCache for Redis as a caching layer in front of the database, but this would not necessarily reduce the replication lag on the read replicas. Additionally, it suggests replacing the stored procedures with AWS Lambda functions, which may require significant changes to the application code.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 835276,
          "date": "Fri 10 Mar 2023 18:41",
          "username": "\t\t\t\tbangfire\t\t\t",
          "content": "Option B is incorrect because it suggests using ElastiCache for Redis as a caching layer in front of the database, but this would not necessarily reduce the replication lag on the read replicas. Additionally, it suggests replacing the stored procedures with AWS Lambda functions, which may require significant changes to the application code.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 833678,
          "date": "Thu 09 Mar 2023 08:28",
          "username": "\t\t\t\tfkie4\t\t\t",
          "content": "i hate this kind of question",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 825374,
          "date": "Wed 01 Mar 2023 00:08",
          "username": "\t\t\t\tNel8\t\t\t",
          "content": "By using ElastiCache you avoid a lot of common issues you might encounter. ElastiCache is a database caching solution. ElastiCache Redis per se, supports failover and Multi-AZ. And Most of all, ElastiCache is well suited to place in front of RDS.<br><br>Migrating a database such as option A, requires operational overhead.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 818235,
          "date": "Wed 22 Feb 2023 19:42",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "Aurora can have up to 15 read replicas - much faster than RDS<br>https://aws.amazon.com/rds/aurora/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\" As a result, all Aurora Replicas return the same data for query results with minimal replica lag. This lag is usually much less than 100 milliseconds after the primary instance has written an update \\\"<br><br>Reference: <br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Replication.html</li><li>You can invoke an Amazon Lambda function from an Amazon Aurora MySQL-Compatible Edition DB cluster with the \\\"native function\\\"....<br><br>https://docs.amazonaws.cn/en_us/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.Lambda.html</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 830682,
          "date": "Mon 06 Mar 2023 10:13",
          "username": "\t\t\t\tChrisG1454\t\t\t",
          "content": "\\\" As a result, all Aurora Replicas return the same data for query results with minimal replica lag. This lag is usually much less than 100 milliseconds after the primary instance has written an update \\\"<br><br>Reference: <br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Replication.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You can invoke an Amazon Lambda function from an Amazon Aurora MySQL-Compatible Edition DB cluster with the \\\"native function\\\"....<br><br>https://docs.amazonaws.cn/en_us/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.Lambda.html</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 835690,
          "date": "Sat 11 Mar 2023 07:02",
          "username": "\t\t\t\tChrisG1454\t\t\t",
          "content": "You can invoke an Amazon Lambda function from an Amazon Aurora MySQL-Compatible Edition DB cluster with the \\\"native function\\\"....<br><br>https://docs.amazonaws.cn/en_us/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.Lambda.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 813395,
          "date": "Sat 18 Feb 2023 19:43",
          "username": "\t\t\t\tjennyka76\t\t\t",
          "content": "Answer - A<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PostgreSQL.Replication.ReadReplicas.html<br>---------------------------------------------------------------------------------------<br>You can scale reads for your Amazon RDS for PostgreSQL DB instance by adding read replicas to the instance. As with other Amazon RDS database engines, RDS for PostgreSQL uses the native replication mechanisms of PostgreSQL to keep read replicas up to date with changes on the source DB.  For general information about read replicas and Amazon RDS, see Working with read replicas.",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#338",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect must create a disaster recovery (DR) plan for a high-volume software as a service (SaaS) platform. All data for the platform is stored in an Amazon Aurora MySQL DB cluster.<br><br>The DR plan must replicate data to a secondary AWS Region.<br><br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#338",
          "answers": [
            {
              "choice": "<p>A. Use MySQL binary log replication to an Aurora cluster in the secondary Region. Provision one DB instance for the Aurora cluster in the secondary Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up an Aurora global database for the DB cluster. When setup is complete, remove the DB instance from the secondary Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Database Migration Service (AWS DMS) to continuously replicate data to an Aurora cluster in the secondary Region. Remove the DB instance from the secondary Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up an Aurora global database for the DB cluster. Specify a minimum of one DB instance in the secondary Region.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 813367,
          "date": "Sat 18 Feb 2023 19:12",
          "username": "\t\t\t\tjennyka76\t\t\t",
          "content": "Answer - A<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Replication.CrossRegion.html<br>-----------------------------------------------------------------------------<br>Before you begin<br>Before you can create an Aurora MySQL DB cluster that is a cross-Region read replica, you must turn on binary logging on your source Aurora MySQL DB cluster. Cross-region replication for Aurora MySQL uses MySQL binary replication to replay changes on the cross-Region read replica DB cluster.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The question states \\\" The DR plan must replicate data to a \\\"secondary\\\" AWS Region.\\\"<br><br>In addition to Aurora Replicas, you have the following options for replication with Aurora MySQL:<br><br>Aurora MySQL DB clusters in different AWS Regions.<br><br>You can replicate data across multiple Regions by using an Aurora global database. For details, see High availability across AWS Regions with Aurora global databases<br><br>You can create an Aurora read replica of an Aurora MySQL DB cluster in a different AWS Region, by using MySQL binary log (binlog) replication. Each cluster can have up to five read replicas created this way, each in a different Region.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Replication.html</li><li>The question is asking for the most cost-effective solution.<br>Aurora global databases are more expensive.<br><br>https://aws.amazon.com/rds/aurora/pricing/</li><li>On this same URL you provided, there is a note highlighted, stating the following:<br>\\\"Replication from the primary DB cluster to all secondaries is handled by the Aurora storage layer rather than by the database engine, so lag time for replicating changes is minimal—typically, less than 1 second. Keeping the database engine out of the replication process means that the database engine is dedicated to processing workloads. It also means that you don't need to configure or manage the Aurora MySQL binlog (binary logging) replication.\\\"<br><br>So, answer should be A</li><li>Correction: So, answer should be D</li></ul>",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 830690,
          "date": "Mon 06 Mar 2023 10:32",
          "username": "\t\t\t\tChrisG1454\t\t\t",
          "content": "The question states \\\" The DR plan must replicate data to a \\\"secondary\\\" AWS Region.\\\"<br><br>In addition to Aurora Replicas, you have the following options for replication with Aurora MySQL:<br><br>Aurora MySQL DB clusters in different AWS Regions.<br><br>You can replicate data across multiple Regions by using an Aurora global database. For details, see High availability across AWS Regions with Aurora global databases<br><br>You can create an Aurora read replica of an Aurora MySQL DB cluster in a different AWS Region, by using MySQL binary log (binlog) replication. Each cluster can have up to five read replicas created this way, each in a different Region.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Replication.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The question is asking for the most cost-effective solution.<br>Aurora global databases are more expensive.<br><br>https://aws.amazon.com/rds/aurora/pricing/</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 830691,
          "date": "Mon 06 Mar 2023 10:40",
          "username": "\t\t\t\tChrisG1454\t\t\t",
          "content": "The question is asking for the most cost-effective solution.<br>Aurora global databases are more expensive.<br><br>https://aws.amazon.com/rds/aurora/pricing/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 820924,
          "date": "Fri 24 Feb 2023 21:40",
          "username": "\t\t\t\tleoattf\t\t\t",
          "content": "On this same URL you provided, there is a note highlighted, stating the following:<br>\\\"Replication from the primary DB cluster to all secondaries is handled by the Aurora storage layer rather than by the database engine, so lag time for replicating changes is minimal—typically, less than 1 second. Keeping the database engine out of the replication process means that the database engine is dedicated to processing workloads. It also means that you don't need to configure or manage the Aurora MySQL binlog (binary logging) replication.\\\"<br><br>So, answer should be A<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Correction: So, answer should be D</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 820925,
          "date": "Fri 24 Feb 2023 21:41",
          "username": "\t\t\t\tleoattf\t\t\t",
          "content": "Correction: So, answer should be D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 833897,
          "date": "Thu 09 Mar 2023 12:22",
          "username": "\t\t\t\tAbhineet9148232\t\t\t",
          "content": "D: With Amazon Aurora Global Database, you pay for replicated write I/Os between the primary Region and each secondary Region (in this case 1). <br><br>Not A because it achieves the same, would be equally costly and adds overhead.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 830058,
          "date": "Sun 05 Mar 2023 17:01",
          "username": "\t\t\t\tsentorcaca\t\t\t",
          "content": "CCCCCC",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 828435,
          "date": "Fri 03 Mar 2023 22:34",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "I think Amazon is looking for D here.I don' think A is intended because that would require knowledge of MySQL, which isn't what they are testing us on.Not option C because the question states large volume.If the volume were low, then DMS would be better.This question is not a good question.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>very true. Amazon wanna everyone to use AWS, why do they sell for MySQL?</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 833681,
          "date": "Thu 09 Mar 2023 08:37",
          "username": "\t\t\t\tfkie4\t\t\t",
          "content": "very true. Amazon wanna everyone to use AWS, why do they sell for MySQL?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 818876,
          "date": "Thu 23 Feb 2023 07:41",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "D provides automatic replication",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 818875,
          "date": "Thu 23 Feb 2023 07:41",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "D provides automatic replication to a secondary Region through the Aurora global database feature. This feature provides automatic replication of data across AWS Regions, with the ability to control and configure the replication process. By specifying a minimum of one DB instance in the secondary Region, you can ensure that your secondary database is always available and up-to-date, allowing for quick failover in the event of a disaster.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 818270,
          "date": "Wed 22 Feb 2023 20:07",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "Actually I change my answer to 'D' because of following:<br>An Aurora DB cluster can contain up to 15 Aurora Replicas. The Aurora Replicas can be distributed across the Availability Zones that a DB cluster spans WITHIN an AWS Region.<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Replication.htmhttps://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Replication.html<br>You can replicate data across multiple Regions by using an Aurora global database",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 818253,
          "date": "Wed 22 Feb 2023 19:54",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Replication.MySQL.htmlGlobal database is for specific versions - they did not tell us the version<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 817092,
          "date": "Tue 21 Feb 2023 20:53",
          "username": "\t\t\t\tdoodledreads\t\t\t",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html<br><br>Checkout the part Recovery from Region-wide outages",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 812769,
          "date": "Sat 18 Feb 2023 08:54",
          "username": "\t\t\t\tzTopic\t\t\t",
          "content": "Answer is A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#339",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a custom application with embedded credentials that retrieves information from an Amazon RDS MySQL DB instance. Management says the application must be made more secure with the least amount of programming effort.<br><br>What should a solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#339",
          "answers": [
            {
              "choice": "<p>A. Use AWS Key Management Service (AWS KMS) to create keys. Configure the application to load the database credentials from AWS KMS. Enable automatic key rotation.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create credentials on the RDS for MySQL database for the application user and store the credentials in AWS Secrets Manager. Configure the application to load the database credentials from Secrets Manager. Create an AWS Lambda function that rotates the credentials in Secret Manager.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create credentials on the RDS for MySQL database for the application user and store the credentials in AWS Secrets Manager. Configure the application to load the database credentials from Secrets Manager. Set up a credentials rotation schedule for the application user in the RDS for MySQL database using Secrets Manager.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create credentials on the RDS for MySQL database for the application user and store the credentials in AWS Systems Manager Parameter Store. Configure the application to load the database credentials from Parameter Store. Set up a credentials rotation schedule for the application user in the RDS for MySQL database using Parameter Store.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 812302,
          "date": "Fri 17 Feb 2023 20:53",
          "username": "\t\t\t\tBhawesh\t\t\t",
          "content": "C.  Create credentials on the RDS for MySQL database for the application user and store the credentials in AWS Secrets Manager. Configure the application to load the database credentials from Secrets Manager. Set up a credentials rotation schedule for the application user in the RDS for MySQL database using Secrets Manager.<br><br>https://www.examtopics.com/discussions/amazon/view/46483-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 812959,
          "date": "Sat 18 Feb 2023 13:54",
          "username": "\t\t\t\tcloudbusting\t\t\t",
          "content": "Parameter Store does not provide automatic credential rotation.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 831973,
          "date": "Tue 07 Mar 2023 15:03",
          "username": "\t\t\t\tAlessandraSAA\t\t\t",
          "content": "why it's not A?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 820597,
          "date": "Fri 24 Feb 2023 15:25",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "https://aws.amazon.com/blogs/security/rotate-amazon-rds-database-credentials-automatically-with-aws-secrets-manager/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 818889,
          "date": "Thu 23 Feb 2023 07:58",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "C is a valid solution for securing the custom application with the least amount of programming effort. It involves creating credentials on the RDS for MySQL database for the application user and storing them in AWS Secrets Manager. The application can then be configured to load the database credentials from Secrets Manager. Additionally, the solution includes setting up a credentials rotation schedule for the application user in the RDS for MySQL database using Secrets Manager, which will automatically rotate the credentials at a specified interval without requiring any programming effort.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 818305,
          "date": "Wed 22 Feb 2023 20:38",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_database_secret.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 813343,
          "date": "Sat 18 Feb 2023 18:36",
          "username": "\t\t\t\tjennyka76\t\t\t",
          "content": "Answer -C<br>https://ws.amazon.com/blogs/security/rotate-amazon-rds-database-credentials-automatically-with-aws-secrets-manager/",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#340",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A media company hosts its website on AWS. The website application's architecture includes a fleet of Amazon EC2 instances behind an Application Load Balancer (ALB) and a database that is hosted on Amazon Aurora. The company's cybersecurity team reports that the application is vulnerable to SQL injection.<br><br>How should the company resolve this issue?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#340",
          "answers": [
            {
              "choice": "<p>A. Use AWS WAF in front of the ALB.  Associate the appropriate web ACLs with AWS WAF. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an ALB listener rule to reply to SQL injections with a fixed response.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Subscribe to AWS Shield Advanced to block all SQL injection attempts automatically.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up Amazon Inspector to block all SQL injection attempts automatically.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 812313,
          "date": "Fri 17 Feb 2023 21:00",
          "username": "\t\t\t\tBhawesh\t\t\t",
          "content": "A.  Use AWS WAF in front of the ALB.  Associate the appropriate web ACLs with AWS WAF. <br><br>SQL Injection - AWS WAF<br>DDoS - AWS Shield",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 813336,
          "date": "Sat 18 Feb 2023 18:27",
          "username": "\t\t\t\tjennyka76\t\t\t",
          "content": "Answer -A<br>https://aws.amazon.com/premiumsupport/knowledge-center/waf-block-common-attacks/#:~:text=To%20protect%20your%20applications%20against,%2C%20query%20string%2C%20or%20URI.<br>-----------------------------------------------------------------------------------------------------------------------<br>Protect against SQL injection and cross-site scripting<br>To protect your applications against SQL injection and cross-site scripting (XSS) attacks, use the built-in SQL injection and cross-site scripting engines. Remember that attacks can be performed on different parts of the HTTP request, such as the HTTP header, query string, or URI. Configure the AWS WAF rules to inspect different parts of the HTTP request against the built-in mitigation engines.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 833685,
          "date": "Thu 09 Mar 2023 08:48",
          "username": "\t\t\t\tfkie4\t\t\t",
          "content": "It is A.  I am happy to see Amazon gives out score like this...",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 818899,
          "date": "Thu 23 Feb 2023 08:09",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "AWS WAF is a managed service that protects web applications from common web exploits that could affect application availability, compromise security, or consume excessive resources. AWS WAF enables customers to create custom rules that block common attack patterns, such as SQL injection attacks.<br><br>By using AWS WAF in front of the ALB and associating the appropriate web ACLs with AWS WAF, the company can protect its website application from SQL injection attacks. AWS WAF will inspect incoming traffic to the website application and block requests that match the defined SQL injection patterns in the web ACLs. This will help to prevent SQL injection attacks from reaching the application, thereby improving the overall security posture of the application.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>B, C, and D are not the best solutions for this issue. Replying to SQL injections with a fixed response <br>(B) is not a recommended approach as it does not actually fix the vulnerability, but only masks the issue. Subscribing to AWS Shield Advanced <br>(C) is useful to protect against DDoS attacks but does not protect against SQL injection vulnerabilities. Amazon Inspector <br>(D) is a vulnerability assessment tool and can identify vulnerabilities but cannot block attacks in real-time.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 818902,
          "date": "Thu 23 Feb 2023 08:11",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "B, C, and D are not the best solutions for this issue. Replying to SQL injections with a fixed response <br>(B) is not a recommended approach as it does not actually fix the vulnerability, but only masks the issue. Subscribing to AWS Shield Advanced <br>(C) is useful to protect against DDoS attacks but does not protect against SQL injection vulnerabilities. Amazon Inspector <br>(D) is a vulnerability assessment tool and can identify vulnerabilities but cannot block attacks in real-time.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 815741,
          "date": "Mon 20 Feb 2023 20:38",
          "username": "\t\t\t\tpbpally\t\t\t",
          "content": "Bhawesh answers it perfect so I'm avoiding redundancy but agree on it being A. ",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#341",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an Amazon S3 data lake that is governed by AWS Lake Formation. The company wants to create a visualization in Amazon QuickSight by joining the data in the data lake with operational data that is stored in an Amazon Aurora MySQL database. The company wants to enforce column-level authorization so that the company's marketing team can access only a subset of columns in the database.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#341",
          "answers": [
            {
              "choice": "<p>A. Use Amazon EMR to ingest the data directly from the database to the QuickSight SPICE engine. Include only the required columns.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Glue Studio to ingest the data from the database to the S3 data lake. Attach an IAM policy to the QuickSight users to enforce column-level access control. Use Amazon S3 as the data source in QuickSight.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Glue Elastic Views to create a materialized view for the database in Amazon S3. Create an S3 bucket policy to enforce column-level access control for the QuickSight users. Use Amazon S3 as the data source in QuickSight.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use a Lake Formation blueprint to ingest the data from the database to the S3 data lake. Use Lake Formation to enforce column-level access control for the QuickSight users. Use Amazon Athena as the data source in QuickSight.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 818908,
          "date": "Thu 23 Feb 2023 08:21",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "Using a Lake Formation blueprint to ingest the data from the database to the S3 data lake, using Lake Formation to enforce column-level access control for the QuickSight users, and using Amazon Athena as the data source in QuickSight. This solution requires the least operational overhead as it utilizes the features provided by AWS Lake Formation to enforce column-level authorization, which simplifies the process and reduces the need for additional configuration and maintenance.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 813562,
          "date": "Sun 19 Feb 2023 00:18",
          "username": "\t\t\t\tK0nAn\t\t\t",
          "content": "This solution leverages AWS Lake Formation to ingest data from the Aurora MySQL database into the S3 data lake, while enforcing column-level access control for QuickSight users. Lake Formation can be used to create and manage the data lake's metadata and enforce security and governance policies, including column-level access control. This solution then uses Amazon Athena as the data source in QuickSight to query the data in the S3 data lake. This solution minimizes operational overhead by leveraging AWS services to manage and secure the data, and by using a standard query service (Amazon Athena) to provide a SQL interface to the data.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 812582,
          "date": "Sat 18 Feb 2023 03:56",
          "username": "\t\t\t\tjennyka76\t\t\t",
          "content": "Answer - D<br>https://aws.amazon.com/blogs/big-data/enforce-column-level-authorization-with-amazon-quicksight-and-aws-lake-formation/",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 812319,
          "date": "Fri 17 Feb 2023 21:04",
          "username": "\t\t\t\tBhawesh\t\t\t",
          "content": "D.  Use a Lake Formation blueprint to ingest the data from the database to the S3 data lake. Use Lake Formation to enforce column-level access control for the QuickSight users. Use Amazon Athena as the data source in QuickSight.<br><br>https://www.examtopics.com/discussions/amazon/view/80865-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#342",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A transaction processing company has weekly scripted batch jobs that run on Amazon EC2 instances. The EC2 instances are in an Auto Scaling group. The number of transactions can vary, but the baseline CPU utilization that is noted on each run is at least 60%. The company needs to provision the capacity 30 minutes before the jobs run.<br><br>Currently, engineers complete this task by manually modifying the Auto Scaling group parameters. The company does not have the resources to analyze the required capacity trends for the Auto Scaling group counts. The company needs an automated way to modify the Auto Scaling group's desired capacity.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#342",
          "answers": [
            {
              "choice": "<p>A. Create a dynamic scaling policy for the Auto Scaling group. Configure the policy to scale based on the CPU utilization metric. Set the target value for the metric to 60%.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a scheduled scaling policy for the Auto Scaling group. Set the appropriate desired capacity, minimum capacity, and maximum capacity. Set the recurrence to weekly. Set the start time to 30 minutes before the batch jobs run.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a predictive scaling policy for the Auto Scaling group. Configure the policy to scale based on forecast. Set the scaling metric to CPU utilization. Set the target value for the metric to 60%. In the policy, set the instances to pre-launch 30 minutes before the jobs run.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon EventBridge event to invoke an AWS Lambda function when the CPU utilization metric value for the Auto Scaling group reaches 60%. Configure the Lambda function to increase the Auto Scaling group's desired capacity and maximum capacity by 20%.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 837275,
          "date": "Sun 12 Mar 2023 19:06",
          "username": "\t\t\t\tfkie4\t\t\t",
          "content": "B is NOT correct. the question said \\\"The company does not have the resources to analyze the required capacity trends for the Auto Scaling group counts.\\\". <br>answer B said \\\"Set the appropriate desired capacity, minimum capacity, and maximum capacity\\\". <br>how can someone set desired capacity if he has no resources to analyze the required capacity. <br>Read carefully Amigo",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 836755,
          "date": "Sun 12 Mar 2023 07:37",
          "username": "\t\t\t\tUnluckyDucky\t\t\t",
          "content": "\\\"The company does not have the resources to analyze the required capacity trends for the Auto Scaling group counts\\\"<br>Using predictive schedule seems appropriate here, however the question says the company doesn't have the resources to analyze this, even though forecast does it for you using ML.<br><br>The job runs weekly therefore the easiest way to achieve this with the LEAST operational overhead, seems to be scheduled scaling.<br><br>Both solutions achieve the goal, B imho does it better, considering the limitations.<br><br>Predictive Scaling:<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html<br>Scheduled Scaling:<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-scheduled-scaling.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 832214,
          "date": "Tue 07 Mar 2023 20:08",
          "username": "\t\t\t\tsamcloudaws\t\t\t",
          "content": "Scheduled scaling seems mostly simplest way to solve this",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 828457,
          "date": "Sat 04 Mar 2023 00:01",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "\\\"The company needs to provision the capacity 30 minutes before the jobs run.\\\"This means the ASG group needs to scale BEFORE the CPU utilization hits 60%.Dynamic scaling only responds to a scaling metric setup such as average CPU utilization at 60% for 5 minutes.The forecasting option is automatic, however, it does require some time for it to be effective since it needs the EC2 utilization in the past to predict the future.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 823574,
          "date": "Mon 27 Feb 2023 11:57",
          "username": "\t\t\t\tnder\t\t\t",
          "content": "Dynamic Scaling policy is the least operational overhead.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 822101,
          "date": "Sun 26 Feb 2023 07:17",
          "username": "\t\t\t\tdpmahendra\t\t\t",
          "content": "B Scheduled scaling<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>C: Use predictive scaling to increase the number of EC2 instances in your Auto Scaling group in advance of daily and weekly patterns in traffic flows.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 822102,
          "date": "Sun 26 Feb 2023 07:18",
          "username": "\t\t\t\tdpmahendra\t\t\t",
          "content": "C: Use predictive scaling to increase the number of EC2 instances in your Auto Scaling group in advance of daily and weekly patterns in traffic flows.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 818946,
          "date": "Thu 23 Feb 2023 08:56",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "This solution automates the capacity provisioning process based on the actual workload, without requiring any manual intervention. With dynamic scaling, the Auto Scaling group will automatically adjust the number of instances based on the actual workload. The target value for the CPU utilization metric is set to 60%, which is the baseline CPU utilization that is noted on each run, indicating that this is a reasonable level of utilization for the workload. This solution does not require any scheduling or forecasting, reducing the operational overhead.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 818332,
          "date": "Wed 22 Feb 2023 20:52",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "answer is C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 816404,
          "date": "Tue 21 Feb 2023 10:36",
          "username": "\t\t\t\tNeha999\t\t\t",
          "content": "https://www.examtopics.com/discussions/amazon/view/83336-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#343",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing a company's disaster recovery (DR) architecture. The company has a MySQL database that runs on an Amazon EC2 instance in a private subnet with scheduled backup. The DR design needs to include multiple AWS Regions.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#343",
          "answers": [
            {
              "choice": "<p>A. Migrate the MySQL database to multiple EC2 instances. Configure a standby EC2 instance in the DR Region. Turn on replication.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the MySQL database to Amazon RDS. Use a Multi-AZ deployment. Turn on read replication for the primary DB instance in the different Availability Zones.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the MySQL database to an Amazon Aurora global database. Host the primary DB cluster in the primary Region. Host the secondary DB cluster in the DR Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Store the scheduled backup of the MySQL database in an Amazon S3 bucket that is configured for S3 Cross-Region Replication (CRR). Use the data backup to restore the database in the DR Region.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 832858,
          "date": "Wed 08 Mar 2023 12:07",
          "username": "\t\t\t\tAlessandraSAA\t\t\t",
          "content": "A.  Multiple EC2 instances to be configured and updated manually in case of DR.B. Amazon RDS=Multi-AZ while it asks to be multi-regionC.  correct, see comment from LuckyAroD.  Manual process to start the DR, therefore same limitation as answer A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 821349,
          "date": "Sat 25 Feb 2023 10:39",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "Amazon Aurora global database can span and replicate DB Servers between multiple AWS Regions. And also compatible with MySQL.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 818958,
          "date": "Thu 23 Feb 2023 09:06",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "C: Migrate MySQL database to an Amazon Aurora global database is the best solution because it requires minimal operational overhead. Aurora is a managed service that provides automatic failover, so standby instances do not need to be manually configured. The primary DB cluster can be hosted in the primary Region, and the secondary DB cluster can be hosted in the DR Region. This approach ensures that the data is always available and up-to-date in multiple Regions, without requiring significant manual intervention.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 818945,
          "date": "Thu 23 Feb 2023 08:54",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "With dynamic scaling, the Auto Scaling group will automatically adjust the number of instances based on the actual workload. The target value for the CPU utilization metric is set to 60%, which is the baseline CPU utilization that is noted on each run, indicating that this is a reasonable level of utilization for the workload. This solution does not require any scheduling or forecasting, reducing the operational overhead.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Sorry, Posted right answer to the wrong question, mistakenly clicked the next question, sorry.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 818953,
          "date": "Thu 23 Feb 2023 09:04",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "Sorry, Posted right answer to the wrong question, mistakenly clicked the next question, sorry.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 818513,
          "date": "Wed 22 Feb 2023 23:52",
          "username": "\t\t\t\tgeekgirl22\t\t\t",
          "content": "C is the answer as RDS is only multi-zone not multi region.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 818343,
          "date": "Wed 22 Feb 2023 20:59",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Replication.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 817370,
          "date": "Wed 22 Feb 2023 03:04",
          "username": "\t\t\t\tSMAZ\t\t\t",
          "content": "C<br>option A has operation overhead whereas option C not.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 817064,
          "date": "Tue 21 Feb 2023 20:31",
          "username": "\t\t\t\talexman\t\t\t",
          "content": "C mentions multiple regions. Option B is within the same region",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 817021,
          "date": "Tue 21 Feb 2023 19:56",
          "username": "\t\t\t\tjennyka76\t\t\t",
          "content": "ANSWER - B?? NOT SURE",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#344",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a Java application that uses Amazon Simple Queue Service (Amazon SQS) to parse messages. The application cannot parse messages that are larger than 256 KB in size. The company wants to implement a solution to give the application the ability to parse messages as large as 50 MB. <br><br>Which solution will meet these requirements with the FEWEST changes to the code?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#344",
          "answers": [
            {
              "choice": "<p>A. Use the Amazon SQS Extended Client Library for Java to host messages that are larger than 256 KB in Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon EventBridge to post large messages from the application instead of Amazon SQS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Change the limit in Amazon SQS to handle messages that are larger than 256 KB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Store messages that are larger than 256 KB in Amazon Elastic File System (Amazon EFS). Configure Amazon SQS to reference this location in the messages.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 818965,
          "date": "Thu 23 Feb 2023 09:11",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "A.  Use the Amazon SQS Extended Client Library for Java to host messages that are larger than 256 KB in Amazon S3.<br><br>Amazon SQS has a limit of 256 KB for the size of messages. To handle messages larger than 256 KB, the Amazon SQS Extended Client Library for Java can be used. This library allows messages larger than 256 KB to be stored in Amazon S3 and provides a way to retrieve and process them. Using this solution, the application code can remain largely unchanged while still being able to process messages up to 50 MB in size.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 818345,
          "date": "Wed 22 Feb 2023 21:00",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "https://github.com/awslabs/amazon-sqs-java-extended-client-lib",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 817300,
          "date": "Wed 22 Feb 2023 01:23",
          "username": "\t\t\t\tArathore\t\t\t",
          "content": "To send messages larger than 256 KiB, you can use the Amazon SQS Extended Client Library for Java. This library allows you to send an Amazon SQS message that contains a reference to a message payload in Amazon S3. The maximum payload size is 2 GB. ",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 816401,
          "date": "Tue 21 Feb 2023 10:33",
          "username": "\t\t\t\tNeha999\t\t\t",
          "content": "A<br>For messages > 256 KB, use Amazon SQS Extended Client Library for Java<br>https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#345",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to restrict access to the content of one of its main web applications and to protect the content by using authorization techniques available on AWS. The company wants to implement a serverless architecture and an authentication solution for fewer than 100 users. The solution needs to integrate with the main web application and serve web content globally. The solution must also scale as the company's user base grows while providing the lowest login latency possible.<br><br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#345",
          "answers": [
            {
              "choice": "<p>A. Use Amazon Cognito for authentication. Use Lambda@Edge for authorization. Use Amazon CloudFront to serve the web application globally.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Directory Service for Microsoft Active Directory for authentication. Use AWS Lambda for authorization. Use an Application Load Balancer to serve the web application globally.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon Cognito for authentication. Use AWS Lambda for authorization. Use Amazon S3 Transfer Acceleration to serve the web application globally.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Directory Service for Microsoft Active Directory for authentication. Use Lambda@Edge for authorization. Use AWS Elastic Beanstalk to serve the web application globally.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 820997,
          "date": "Fri 24 Feb 2023 23:17",
          "username": "\t\t\t\tLonojack\t\t\t",
          "content": "CloudFront=globally<br>Lambda@edge = Authorization/ Latency<br>Cognito=Authentication for Web apps",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 818983,
          "date": "Thu 23 Feb 2023 09:41",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "Amazon CloudFront is a global content delivery network (CDN) service that can securely deliver web content, videos, and APIs at scale. It integrates with Cognito for authentication and with Lambda@Edge for authorization, making it an ideal choice for serving web content globally.<br><br>Lambda@Edge is a service that lets you run AWS Lambda functions globally closer to users, providing lower latency and faster response times. It can also handle authorization logic at the edge to secure content in CloudFront. For this scenario, Lambda@Edge can provide authorization for the web application while leveraging the low-latency benefit of running at the edge.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 818350,
          "date": "Wed 22 Feb 2023 21:04",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "CloudFront to serve globally",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 817376,
          "date": "Wed 22 Feb 2023 03:09",
          "username": "\t\t\t\tSMAZ\t\t\t",
          "content": "A<br>Amazon Cognito for authentication and Lambda@Edge for authorizatioN, Amazon CloudFront to serve the web application globally provides low-latency content delivery",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#346",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an aging network-attached storage (NAS) array in its data center. The NAS array presents SMB shares and NFS shares to client workstations. The company does not want to purchase a new NAS array. The company also does not want to incur the cost of renewing the NAS array's support contract. Some of the data is accessed frequently, but much of the data is inactive.<br><br>A solutions architect needs to implement a solution that migrates the data to Amazon S3, uses S3 Lifecycle policies, and maintains the same look and feel for the client workstations. The solutions architect has identified AWS Storage Gateway as part of the solution.<br><br>Which type of storage gateway should the solutions architect provision to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#346",
          "answers": [
            {
              "choice": "<p>A. Volume Gateway<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Tape Gateway<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Amazon FSx File Gateway<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Amazon S3 File Gateway<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 828949,
          "date": "Sat 04 Mar 2023 14:01",
          "username": "\t\t\t\tsiyam008\t\t\t",
          "content": "https://aws.amazon.com/blogs/storage/how-to-create-smb-file-shares-with-aws-storage-gateway-using-hyper-v/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 818987,
          "date": "Thu 23 Feb 2023 09:49",
          "username": "\t\t\t\tLuckyAro\t\t\t",
          "content": "Amazon S3 File Gateway provides on-premises applications with access to virtually unlimited cloud storage using NFS and SMB file interfaces. It seamlessly moves frequently accessed data to a low-latency cache while storing colder data in Amazon S3, using S3 Lifecycle policies to transition data between storage classes over time.<br><br>In this case, the company's aging NAS array can be replaced with an Amazon S3 File Gateway that presents the same NFS and SMB shares to the client workstations. The data can then be migrated to Amazon S3 and managed using S3 Lifecycle policies",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 818352,
          "date": "Wed 22 Feb 2023 21:06",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "https://aws.amazon.com/about-aws/whats-new/2018/06/aws-storage-gateway-adds-smb-support-to-store-objects-in-amazon-s3/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 816529,
          "date": "Tue 21 Feb 2023 13:09",
          "username": "\t\t\t\teverfly\t\t\t",
          "content": "Amazon S3 File Gateway provides a file interface to objects stored in S3. It can be used for a file-based interface with S3, which allows the company to migrate their NAS array data to S3 while maintaining the same look and feel for client workstations. Amazon S3 File Gateway supports SMB and NFS protocols, which will allow clients to continue to access the data using these protocols. Additionally, Amazon S3 Lifecycle policies can be used to automate the movement of data to lower-cost storage tiers, reducing the storage cost of inactive data.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#347",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that is running on Amazon EC2 instances. A solutions architect has standardized the company on a particular instance family and various instance sizes based on the current needs of the company.<br><br>The company wants to maximize cost savings for the application over the next 3 years. The company needs to be able to change the instance family and sizes in the next 6 months based on application popularity and usage.<br><br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#347",
          "answers": [
            {
              "choice": "<p>A. Compute Savings Plan<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. EC2 Instance Savings Plan<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Zonal Reserved Instances<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Standard Reserved Instances<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 817733,
          "date": "Wed 22 Feb 2023 11:53",
          "username": "\t\t\t\tAlmeroSenior\t\t\t",
          "content": "Read Carefully guys , They need to be able to change FAMILY , and although EC2 Savings has a higher discount , its clearly documented as not allowed > <br><br>EC2 Instance Savings Plans provide savings up to 72 percent off On-Demand, in exchange for a commitment to a specific instance family in a chosen AWS Region (for example, M5 in Virginia). These plans automatically apply to usage regardless of size (for example, m5.xlarge, m5.2xlarge, etc.), OS (for example, Windows, Linux, etc.), and tenancy (Host, Dedicated, Default) within the specified family in a Region.",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 818367,
          "date": "Wed 22 Feb 2023 21:24",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "https://aws.amazon.com/savingsplans/compute-pricing/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 817931,
          "date": "Wed 22 Feb 2023 15:41",
          "username": "\t\t\t\teverfly\t\t\t",
          "content": "Compute Savings Plans provide the most flexibility and help to reduce your costs by up to 66%. These plans automatically apply to EC2 instance usage regardless of instance family, size, AZ, Region, OS or tenancy, and also apply to Fargate or Lambda usage. <br>EC2 Instance Savings Plans provide the lowest prices, offering savings up to 72% in exchange for commitment to usage of individual instance families in a Region<br>https://aws.amazon.com/savingsplans/compute-pricing/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 817070,
          "date": "Tue 21 Feb 2023 20:35",
          "username": "\t\t\t\tdoodledreads\t\t\t",
          "content": "Compute Savings plans are most flexible - lets you change the instance types vs EC2 Savings plans offer best savings.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 816614,
          "date": "Tue 21 Feb 2023 14:18",
          "username": "\t\t\t\tYechi\t\t\t",
          "content": "With an EC2 Instance Savings Plan, you can change your instance size within the instance family (for example, from c5.xlarge to c5.2xlarge) or the operating system (for example, from Windows to Linux), or move from Dedicated tenancy to Default and continue to receive the discounted rate provided by your EC2 Instance Savings Plan.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 816536,
          "date": "Tue 21 Feb 2023 13:16",
          "username": "\t\t\t\teverfly\t\t\t",
          "content": "EC2 Instance Savings Plans provide the lowest prices, offering savings up to 72% in exchange for commitment to usage of individual instance families in a Region (e.g. M5 usage in N. Virginia). This automatically reduces your cost on the selected instance family in that region regardless of AZ, size, OS or tenancy. EC2 Instance Savings Plans give you the flexibility to change your usage between instances within a family in that region. For example, you can move from c5.xlarge running Windows to c5.2xlarge running Linux and automatically benefit from the Savings Plan prices.<br>https://aws.amazon.com/savingsplans/compute-pricing/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#348",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company collects data from a large number of participants who use wearable devices. The company stores the data in an Amazon DynamoDB table and uses applications to analyze the data. The data workload is constant and predictable. The company wants to stay at or below its forecasted budget for DynamoDB. <br><br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#348",
          "answers": [
            {
              "choice": "<p>A. Use provisioned mode and DynamoDB Standard-Infrequent Access (DynamoDB Standard-IA). Reserve capacity for the forecasted workload.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use provisioned mode. Specify the read capacity units (RCUs) and write capacity units (WCUs).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use on-demand mode. Set the read capacity units (RCUs) and write capacity units (WCUs) high enough to accommodate changes in the workload.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use on-demand mode. Specify the read capacity units (RCUs) and write capacity units (WCUs) with reserved capacity.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 837403,
          "date": "Sun 12 Mar 2023 22:23",
          "username": "\t\t\t\tkayodea25\t\t\t",
          "content": "Option C is the most cost-effective solution for this scenario. In on-demand mode, DynamoDB automatically scales up or down based on the current workload, so the company only pays for the capacity it uses. By setting the RCUs and WCUs high enough to accommodate changes in the workload, the company can ensure that it always has the necessary capacity without overprovisioning and incurring unnecessary costs. Since the workload is constant and predictable, using provisioned mode with reserved capacity (Options A and D) may result in paying for unused capacity during periods of low demand. Option B, using provisioned mode without reserved capacity, may result in throttling during periods of high demand if the provisioned capacity is not sufficient to handle the workload.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 828467,
          "date": "Sat 04 Mar 2023 00:38",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "\\\"The data workload is constant and predictable.\\\"<br>https://docs.aws.amazon.com/wellarchitected/latest/serverless-applications-lens/capacity.html<br><br>\\\"With provisioned capacity you pay for the provision of read and write capacity units for your DynamoDB tables. Whereas with DynamoDB on-demand you pay per request for the data reads and writes that your application performs on your tables.\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 828193,
          "date": "Fri 03 Mar 2023 18:39",
          "username": "\t\t\t\tCharly0710\t\t\t",
          "content": "The data workload is constant and predictable, then, isn't on-demand mode.<br>DynamoDB Standard-IA is not necessary in this context",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 820979,
          "date": "Fri 24 Feb 2023 22:53",
          "username": "\t\t\t\tLonojack\t\t\t",
          "content": "The problem with (A) is: “Standard-Infrequent Access“. In the question, they say the company has to analyze the Data. <br>That's why the Correct answer is (B)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 818373,
          "date": "Wed 22 Feb 2023 21:25",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "workload is constant<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The problem with (A) is: “Standard-Infrequent Access“.<br>In the question, they say the company has to analyze the Data.<br>Correct answer is (B)</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 820977,
          "date": "Fri 24 Feb 2023 22:51",
          "username": "\t\t\t\tLonojack\t\t\t",
          "content": "The problem with (A) is: “Standard-Infrequent Access“.<br>In the question, they say the company has to analyze the Data.<br>Correct answer is (B)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 817314,
          "date": "Wed 22 Feb 2023 01:44",
          "username": "\t\t\t\tSamuel03\t\t\t",
          "content": "As the numbers are already known",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 816544,
          "date": "Tue 21 Feb 2023 13:22",
          "username": "\t\t\t\teverfly\t\t\t",
          "content": "The data workload is constant and predictable.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#349",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company stores confidential data in an Amazon Aurora PostgreSQL database in the ap-southeast-3 Region. The database is encrypted with an AWS Key Management Service (AWS KMS) customer managed key. The company was recently acquired and must securely share a backup of the database with the acquiring company's AWS account in ap-southeast-3.<br><br>What should a solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#349",
          "answers": [
            {
              "choice": "<p>A. Create a database snapshot. Copy the snapshot to a new unencrypted snapshot. Share the new snapshot with the acquiring company's AWS account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a database snapshot. Add the acquiring company's AWS account to the KMS key policy. Share the snapshot with the acquiring company's AWS account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a database snapshot that uses a different AWS managed KMS key. Add the acquiring company's AWS account to the KMS key alias. Share the snapshot with the acquiring company's AWS account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a database snapshot. Download the database snapshot. Upload the database snapshot to an Amazon S3 bucket. Update the S3 bucket policy to allow access from the acquiring company's AWS account.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 828469,
          "date": "Sat 04 Mar 2023 00:47",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 820139,
          "date": "Fri 24 Feb 2023 06:38",
          "username": "\t\t\t\tgeekgirl22\t\t\t",
          "content": "It is C, you have to create a new key. Read below<br>You can't share a snapshot that's encrypted with the default AWS KMS key. You must create a custom AWS KMS key instead. To share an encrypted Aurora DB cluster snapshot:<br><br>Create a custom AWS KMS key.<br>Add the target account to the custom AWS KMS key.<br>Create a copy of the DB cluster snapshot using the custom AWS KMS key. Then, share the newly copied snapshot with the target account.<br>Copy the shared DB cluster snapshot from the target account<br>https://aws.amazon.com/premiumsupport/knowledge-center/aurora-share-encrypted-snapshot/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Yes, as per the given information \\\"The database is encrypted with an AWS Key Management Service (AWS KMS) customer managed key\\\", it may not be the default AWS KMS key.</li><li>Yes, can't share a snapshot that's encrypted with the default AWS KMS key. <br>But as per the given information \\\"The database is encrypted with an AWS Key Management Service (AWS KMS) customer managed key\\\", it may not be the default AWS KMS key.</li><li>I agree with KZM.<br>It is B. <br>There's no need to create another custom AWS KMS key. <br>https://aws.amazon.com/premiumsupport/knowledge-center/aurora-share-encrypted-snapshot/<br>Give target account access to the custom AWS KMS key within the source account<br>1. Log in to the source account, and go to the AWS KMS console in the same Region as the DB cluster snapshot.<br>2. Select Customer-managed keys from the navigation pane.<br>3. Select your custom AWS KMS key (ALREADY CREATED)<br>4. From the Other AWS accounts section, select Add another AWS account, and then enter the AWS account number of your target account. <br><br>Then:<br>Copy and share the DB cluster snapshot</li><li>I also thought straight away that it could be C, however, the questions mentions that the database is encrypted with an AWS KMS custom key already. So maybe the letter B could be right, since it already has a custom key, not the default KMS Key.<br>What do you think?</li><li>It is B. <br>There's no need to create another custom AWS KMS key.<br>https://aws.amazon.com/premiumsupport/knowledge-center/aurora-share-encrypted-snapshot/<br>Give target account access to the custom AWS KMS key within the source account<br>1. Log in to the source account, and go to the AWS KMS console in the same Region as the DB cluster snapshot.<br>2. Select Customer-managed keys from the navigation pane.<br>3. Select your custom AWS KMS key (ALREADY CREATED)<br>4. From the Other AWS accounts section, select Add another AWS account, and then enter the AWS account number of your target account.<br><br>Then:<br>Copy and share the DB cluster snapshot</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 821332,
          "date": "Sat 25 Feb 2023 10:08",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "Yes, as per the given information \\\"The database is encrypted with an AWS Key Management Service (AWS KMS) customer managed key\\\", it may not be the default AWS KMS key.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Yes, can't share a snapshot that's encrypted with the default AWS KMS key. <br>But as per the given information \\\"The database is encrypted with an AWS Key Management Service (AWS KMS) customer managed key\\\", it may not be the default AWS KMS key.</li><li>I agree with KZM.<br>It is B. <br>There's no need to create another custom AWS KMS key. <br>https://aws.amazon.com/premiumsupport/knowledge-center/aurora-share-encrypted-snapshot/<br>Give target account access to the custom AWS KMS key within the source account<br>1. Log in to the source account, and go to the AWS KMS console in the same Region as the DB cluster snapshot.<br>2. Select Customer-managed keys from the navigation pane.<br>3. Select your custom AWS KMS key (ALREADY CREATED)<br>4. From the Other AWS accounts section, select Add another AWS account, and then enter the AWS account number of your target account. <br><br>Then:<br>Copy and share the DB cluster snapshot</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 821333,
          "date": "Sat 25 Feb 2023 10:09",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "Yes, can't share a snapshot that's encrypted with the default AWS KMS key. <br>But as per the given information \\\"The database is encrypted with an AWS Key Management Service (AWS KMS) customer managed key\\\", it may not be the default AWS KMS key.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I agree with KZM.<br>It is B. <br>There's no need to create another custom AWS KMS key. <br>https://aws.amazon.com/premiumsupport/knowledge-center/aurora-share-encrypted-snapshot/<br>Give target account access to the custom AWS KMS key within the source account<br>1. Log in to the source account, and go to the AWS KMS console in the same Region as the DB cluster snapshot.<br>2. Select Customer-managed keys from the navigation pane.<br>3. Select your custom AWS KMS key (ALREADY CREATED)<br>4. From the Other AWS accounts section, select Add another AWS account, and then enter the AWS account number of your target account. <br><br>Then:<br>Copy and share the DB cluster snapshot</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 837235,
          "date": "Sun 12 Mar 2023 17:48",
          "username": "\t\t\t\tenzomv\t\t\t",
          "content": "I agree with KZM.<br>It is B. <br>There's no need to create another custom AWS KMS key. <br>https://aws.amazon.com/premiumsupport/knowledge-center/aurora-share-encrypted-snapshot/<br>Give target account access to the custom AWS KMS key within the source account<br>1. Log in to the source account, and go to the AWS KMS console in the same Region as the DB cluster snapshot.<br>2. Select Customer-managed keys from the navigation pane.<br>3. Select your custom AWS KMS key (ALREADY CREATED)<br>4. From the Other AWS accounts section, select Add another AWS account, and then enter the AWS account number of your target account. <br><br>Then:<br>Copy and share the DB cluster snapshot",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 821008,
          "date": "Fri 24 Feb 2023 23:59",
          "username": "\t\t\t\tleoattf\t\t\t",
          "content": "I also thought straight away that it could be C, however, the questions mentions that the database is encrypted with an AWS KMS custom key already. So maybe the letter B could be right, since it already has a custom key, not the default KMS Key.<br>What do you think?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It is B. <br>There's no need to create another custom AWS KMS key.<br>https://aws.amazon.com/premiumsupport/knowledge-center/aurora-share-encrypted-snapshot/<br>Give target account access to the custom AWS KMS key within the source account<br>1. Log in to the source account, and go to the AWS KMS console in the same Region as the DB cluster snapshot.<br>2. Select Customer-managed keys from the navigation pane.<br>3. Select your custom AWS KMS key (ALREADY CREATED)<br>4. From the Other AWS accounts section, select Add another AWS account, and then enter the AWS account number of your target account.<br><br>Then:<br>Copy and share the DB cluster snapshot</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 837237,
          "date": "Sun 12 Mar 2023 17:49",
          "username": "\t\t\t\tenzomv\t\t\t",
          "content": "It is B. <br>There's no need to create another custom AWS KMS key.<br>https://aws.amazon.com/premiumsupport/knowledge-center/aurora-share-encrypted-snapshot/<br>Give target account access to the custom AWS KMS key within the source account<br>1. Log in to the source account, and go to the AWS KMS console in the same Region as the DB cluster snapshot.<br>2. Select Customer-managed keys from the navigation pane.<br>3. Select your custom AWS KMS key (ALREADY CREATED)<br>4. From the Other AWS accounts section, select Add another AWS account, and then enter the AWS account number of your target account.<br><br>Then:<br>Copy and share the DB cluster snapshot",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 819651,
          "date": "Thu 23 Feb 2023 20:44",
          "username": "\t\t\t\tnyx12345\t\t\t",
          "content": "Is it bad that in answer B the acquiring company is using the same KMS key? Should a new KMS key not be used?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Yes, you are right, read my comment above.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 820140,
          "date": "Fri 24 Feb 2023 06:38",
          "username": "\t\t\t\tgeekgirl22\t\t\t",
          "content": "Yes, you are right, read my comment above.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 818406,
          "date": "Wed 22 Feb 2023 22:02",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/aurora-share-encrypted-snapshot/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 817005,
          "date": "Tue 21 Feb 2023 19:47",
          "username": "\t\t\t\tjennyka76\t\t\t",
          "content": "ANSWER - B",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#350",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses a 100 GB Amazon RDS for Microsoft SQL Server Single-AZ DB instance in the us-east-1 Region to store customer transactions. The company needs high availability and automatic recovery for the DB instance.<br><br>The company must also run reports on the RDS database several times a year. The report process causes transactions to take longer than usual to post to the customers' accounts. The company needs a solution that will improve the performance of the report process.<br><br>Which combination of steps will meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#350",
          "answers": [
            {
              "choice": "<p>A. Modify the DB instance from a Single-AZ DB instance to a Multi-AZ deployment.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Take a snapshot of the current DB instance. Restore the snapshot to a new RDS deployment in another Availability Zone.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a read replica of the DB instance in a different Availability Zone. Point all requests for reports to the read replica.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the database to RDS Custom.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use RDS Proxy to limit reporting requests to the maintenance window.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 821341,
          "date": "Sat 25 Feb 2023 10:26",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "Options A+C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 818427,
          "date": "Wed 22 Feb 2023 22:15",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "https://medium.com/awesome-cloud/aws-difference-between-multi-az-and-read-replicas-in-amazon-rds-60fe848ef53a",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 817007,
          "date": "Tue 21 Feb 2023 19:48",
          "username": "\t\t\t\tjennyka76\t\t\t",
          "content": "ANSWER -A & C",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#351",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is moving its data management application to AWS. The company wants to transition to an event-driven architecture. The architecture needs to be more distributed and to use serverless concepts while performing the different aspects of the workflow. The company also wants to minimize operational overhead.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#351",
          "answers": [
            {
              "choice": "<p>A. Build out the workflow in AWS Glue. Use AWS Glue to invoke AWS Lambda functions to process the workflow steps.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Build out the workflow in AWS Step Functions. Deploy the application on Amazon EC2 instances. Use Step Functions to invoke the workflow steps on the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Build out the workflow in Amazon EventBridge. Use EventBridge to invoke AWS Lambda functions on a schedule to process the workflow steps.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Build out the workflow in AWS Step Functions. Use Step Functions to create a state machine. Use the state machine to invoke AWS Lambda functions to process the workflow steps.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 829055,
          "date": "Sat 04 Mar 2023 16:02",
          "username": "\t\t\t\tKarlos99\t\t\t",
          "content": "There are two main types of routers used in event-driven architectures: event buses and event topics. At AWS, we offer Amazon EventBridge to build event buses and Amazon Simple Notification Service (SNS) to build event topics.https://aws.amazon.com/event-driven-architecture/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 822002,
          "date": "Sun 26 Feb 2023 03:14",
          "username": "\t\t\t\tTungPham\t\t\t",
          "content": "Step 3: Create a State Machine<br>Use the Step Functions console to create a state machine that invokes the Lambda function that you created earlier in Step 1.<br>https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-creating-lambda-state-machine.html<br>In Step Functions, a workflow is called a state machine, which is a series of event-driven steps. Each step in a workflow is called a state.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 820947,
          "date": "Fri 24 Feb 2023 22:13",
          "username": "\t\t\t\tLonojack\t\t\t",
          "content": "This is why I'm voting D…..QUESTION ASKED FOR IT TO: use serverless concepts while performing the different aspects of the workflow. Is option D utilizing Serverless concepts?",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 820699,
          "date": "Fri 24 Feb 2023 17:10",
          "username": "\t\t\t\tBilalazure\t\t\t",
          "content": "Distrubuted****",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 820144,
          "date": "Fri 24 Feb 2023 06:45",
          "username": "\t\t\t\tgeekgirl22\t\t\t",
          "content": "It is D. Cannot be C because C is \\\"scheduled\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 819671,
          "date": "Thu 23 Feb 2023 20:56",
          "username": "\t\t\t\tAmerico32\t\t\t",
          "content": "Vou de C, orientada a eventos",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 819480,
          "date": "Thu 23 Feb 2023 18:24",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "AWS Step functions is serverless Visual workflows for distributed applications<br>https://aws.amazon.com/step-functions/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Besides, \\\"Visualize and develop resilient workflows for EVENT-DRIVEN architectures.\\\"</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 825046,
          "date": "Tue 28 Feb 2023 17:49",
          "username": "\t\t\t\tleoattf\t\t\t",
          "content": "Besides, \\\"Visualize and develop resilient workflows for EVENT-DRIVEN architectures.\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 818610,
          "date": "Thu 23 Feb 2023 02:01",
          "username": "\t\t\t\ttellmenowwwww\t\t\t",
          "content": "Could it be a C because it's event-driven architecture?",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 817842,
          "date": "Wed 22 Feb 2023 14:06",
          "username": "\t\t\t\tSMAZ\t\t\t",
          "content": "Option D. .<br>AWS Step functions are used for distributed applications",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#352",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is designing the network for an online multi-player game. The game uses the UDP networking protocol and will be deployed in eight AWS Regions. The network architecture needs to minimize latency and packet loss to give end users a high-quality gaming experience.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#352",
          "answers": [
            {
              "choice": "<p>A. Setup a transit gateway in each Region. Create inter-Region peering attachments between each transit gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up AWS Global Accelerator with UDP listeners and endpoint groups in each Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up Amazon CloudFront with UDP turned on. Configure an origin in each Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up a VPC peering mesh between each Region. Turn on UDP for each VPC. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 827614,
          "date": "Fri 03 Mar 2023 03:56",
          "username": "\t\t\t\tBofi\t\t\t",
          "content": "AWS Global Accelerator is a service that improves the availability and performance of applications with local or global users. Global Accelerator improves performance for a wide range of applications over TCP or UDP by proxying packets at the edge to applications running in one or more AWS Regions. Global Accelerator is a good fit for non-HTTP use cases, such as gaming (UDP), IoT (MQTT), or Voice over IP, as well as for HTTP use cases that specifically require static IP addresses or deterministic, fast regional failover. Both services integrate with AWS Shield for DDoS protection.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 821710,
          "date": "Sat 25 Feb 2023 18:48",
          "username": "\t\t\t\tK0nAn\t\t\t",
          "content": "Global Accelerator for UDP and TCP traffic",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 818429,
          "date": "Wed 22 Feb 2023 22:16",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "Global Accelerator",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 816390,
          "date": "Tue 21 Feb 2023 10:24",
          "username": "\t\t\t\tNeha999\t\t\t",
          "content": "B<br>Global Accelerator for UDP traffic",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#353",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a three-tier web application on Amazon EC2 instances in a single Availability Zone. The web application uses a self-managed MySQL database that is hosted on an EC2 instance to store data in an Amazon Elastic Block Store (Amazon EBS) volume. The MySQL database currently uses a 1 TB Provisioned IOPS SSD (io2) EBS volume. The company expects traffic of 1,000 IOPS for both reads and writes at peak traffic.<br><br>The company wants to minimize any disruptions, stabilize performance, and reduce costs while retaining the capacity for double the IOPS. The company wants to move the database tier to a fully managed solution that is highly available and fault tolerant.<br><br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#353",
          "answers": [
            {
              "choice": "<p>A. Use a Multi-AZ deployment of an Amazon RDS for MySQL DB instance with an io2 Block Express EBS volume.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use a Multi-AZ deployment of an Amazon RDS for MySQL DB instance with a General Purpose SSD (gp2) EBS volume.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon S3 Intelligent-Tiering access tiers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use two large EC2 instances to host the database in active-passive mode.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 817772,
          "date": "Wed 22 Feb 2023 12:36",
          "username": "\t\t\t\tAlmeroSenior\t\t\t",
          "content": "RDS does not support IO2 or IO2express . GP2 can do the required IOPS RDS supported Storage > <br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html<br>GP2 max IOPS > <br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/general-purpose.html#gp2-performance",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 828482,
          "date": "Sat 04 Mar 2023 01:10",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "for DB instances between 1 TiB and 4 TiB, storage is striped across four Amazon EBS volumes providing burst performance of up to 12,000 IOPS.<br><br>from\\\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 822048,
          "date": "Sun 26 Feb 2023 04:16",
          "username": "\t\t\t\tTungPham\t\t\t",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html<br>Amazon RDS provides three storage types: General Purpose SSD (also known as gp2 and gp3), Provisioned IOPS SSD (also known as io1), and magnetic (also known as standard)<br>B- MOST cost-effectively",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 821403,
          "date": "Sat 25 Feb 2023 12:07",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "The baseline IOPS performance of gp2 volumes is 3 IOPS per GB, which means that a 1 TB gp2 volume will have a baseline performance of 3,000 IOPS. However, the volume can also burst up to 16,000 IOPS for short periods, but this burst performance is limited and may not be sustained for long durations.<br>So, I am more prefer option A. <br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>If a 1 TB gp3 EBS volume is used, the maximum available IOPS according to calculations is 3000. This means that the storage can support a requirement of 1000 IOPS, and even 2000 IOPS if the requirement is doubled.<br>I am confusing between choosing A or B. </li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 824240,
          "date": "Tue 28 Feb 2023 00:59",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "If a 1 TB gp3 EBS volume is used, the maximum available IOPS according to calculations is 3000. This means that the storage can support a requirement of 1000 IOPS, and even 2000 IOPS if the requirement is doubled.<br>I am confusing between choosing A or B. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 820057,
          "date": "Fri 24 Feb 2023 03:58",
          "username": "\t\t\t\tmark16dc\t\t\t",
          "content": "Option A is the correct answer. A Multi-AZ deployment provides high availability and fault tolerance by automatically replicating data to a standby instance in a different Availability Zone. This allows for seamless failover in the event of a primary instance failure. Using an io2 Block Express EBS volume provides the needed IOPS performance and capacity for the database. It is also designed for low latency and high durability, which makes it a good choice for a database tier.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 818438,
          "date": "Wed 22 Feb 2023 22:20",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "Correction - hit wrong answer button - meant 'B'<br>Amazon RDS provides three storage types: General Purpose SSD (also known as gp2 and gp3), Provisioned IOPS SSD (also known as io1)<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 818435,
          "date": "Wed 22 Feb 2023 22:19",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "Amazon RDS provides three storage types: General Purpose SSD (also known as gp2 and gp3), Provisioned IOPS SSD (also known as io1)<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 816571,
          "date": "Tue 21 Feb 2023 13:42",
          "username": "\t\t\t\teverfly\t\t\t",
          "content": "https://aws.amazon.com/about-aws/whats-new/2021/07/aws-announces-general-availability-amazon-ebs-block-express-volumes/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#354",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a serverless application on AWS. The application uses Amazon API Gateway, AWS Lambda, and an Amazon RDS for PostgreSQL database. The company notices an increase in application errors that result from database connection timeouts during times of peak traffic or unpredictable traffic. The company needs a solution that reduces the application failures with the least amount of change to the code.<br><br>What should a solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#354",
          "answers": [
            {
              "choice": "<p>A. Reduce the Lambda concurrency rate.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable RDS Proxy on the RDS DB instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Resize the RDS DB instance class to accept more connections.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the database to Amazon DynamoDB with on-demand scaling.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 819600,
          "date": "Thu 23 Feb 2023 20:03",
          "username": "\t\t\t\tnder\t\t\t",
          "content": "RDS Proxy will pool connections, no code changes need to be made",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 818443,
          "date": "Wed 22 Feb 2023 22:26",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "RDS proxy",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 816391,
          "date": "Tue 21 Feb 2023 10:25",
          "username": "\t\t\t\tNeha999\t\t\t",
          "content": "B RDS Proxy<br>https://aws.amazon.com/rds/proxy/",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#355",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating an old application to AWS. The application runs a batch job every hour and is CPU intensive. The batch job takes 15 minutes on average with an on-premises server. The server has 64 virtual CPU (vCPU) and 512 GiB of memory.<br><br>Which solution will run the batch job within 15 minutes with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#355",
          "answers": [
            {
              "choice": "<p>A. Use AWS Lambda with functional scaling.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon Elastic Container Service (Amazon ECS) with AWS Fargate.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon Lightsail with AWS Auto Scaling.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Batch on Amazon EC2.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 816579,
          "date": "Tue 21 Feb 2023 13:52",
          "username": "\t\t\t\tNolaHOla\t\t\t",
          "content": "The amount of CPU and memory resources required by the batch job exceeds the capabilities of AWS Lambda and Amazon Lightsail with AWS Auto Scaling, which offer limited compute resources. AWS Fargate offers containerized application orchestration and scalable infrastructure, but may require additional operational overhead to configure and manage the environment. AWS Batch is a fully managed service that automatically provisions the required infrastructure for batch jobs, with options to use different instance types and launch modes.<br><br>Therefore, the solution that will run the batch job within 15 minutes with the LEAST operational overhead is D.  Use AWS Batch on Amazon EC2. AWS Batch can handle all the operational aspects of job scheduling, instance management, and scaling while using Amazon EC2 injavascript:void(0)stances with the right amount of CPU and memory resources to meet the job's requirements.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 816644,
          "date": "Tue 21 Feb 2023 15:07",
          "username": "\t\t\t\teverfly\t\t\t",
          "content": "AWS Batch is a fully-managed service that can launch and manage the compute resources needed to execute batch jobs. It can scale the compute environment based on the size and timing of the batch jobs.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 831632,
          "date": "Tue 07 Mar 2023 08:38",
          "username": "\t\t\t\tJLII\t\t\t",
          "content": "Not A because: \\\"AWS Lambda now supports up to 10 GB of memory and 6 vCPU cores for Lambda Functions.\\\" https://aws.amazon.com/about-aws/whats-new/2020/12/aws-lambda-supports-10gb-memory-6-vcpu-cores-lambda-functions/ vs. \\\"The server has 64 virtual CPU (vCPU) and 512 GiB of memory\\\" in the question.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 818666,
          "date": "Thu 23 Feb 2023 03:05",
          "username": "\t\t\t\tgeekgirl22\t\t\t",
          "content": "A is the answer. Lambda is known that has a limit of 15 minutes. So for as long as it says \\\"within 15 minutes\\\" that should be a clear indication it is Lambda<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Wrong, the job takes \\\"On average 15 minutes\\\" and requires more cpu and ram than lambda can deal with. AWS Batch is correct in this scenario</li><li>read the rest of the question which gives the answer:<br>\\\"Which solution will run the batch job within 15 minutes with the LEAST operational overhead?\\\"<br>Keyword \\\"Within 15 minutes\\\"</li><li>What happens if it EXCEEDS the 15 min AVERAGE? <br>Average = possibly can be more than 15min.<br>The safer bet would be option D: AWS Batch on EC2</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 819598,
          "date": "Thu 23 Feb 2023 20:02",
          "username": "\t\t\t\tnder\t\t\t",
          "content": "Wrong, the job takes \\\"On average 15 minutes\\\" and requires more cpu and ram than lambda can deal with. AWS Batch is correct in this scenario<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>read the rest of the question which gives the answer:<br>\\\"Which solution will run the batch job within 15 minutes with the LEAST operational overhead?\\\"<br>Keyword \\\"Within 15 minutes\\\"</li><li>What happens if it EXCEEDS the 15 min AVERAGE? <br>Average = possibly can be more than 15min.<br>The safer bet would be option D: AWS Batch on EC2</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 820151,
          "date": "Fri 24 Feb 2023 07:04",
          "username": "\t\t\t\tgeekgirl22\t\t\t",
          "content": "read the rest of the question which gives the answer:<br>\\\"Which solution will run the batch job within 15 minutes with the LEAST operational overhead?\\\"<br>Keyword \\\"Within 15 minutes\\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>What happens if it EXCEEDS the 15 min AVERAGE? <br>Average = possibly can be more than 15min.<br>The safer bet would be option D: AWS Batch on EC2</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 820693,
          "date": "Fri 24 Feb 2023 17:03",
          "username": "\t\t\t\tLonojack\t\t\t",
          "content": "What happens if it EXCEEDS the 15 min AVERAGE? <br>Average = possibly can be more than 15min.<br>The safer bet would be option D: AWS Batch on EC2",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 818447,
          "date": "Wed 22 Feb 2023 22:27",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "AWS batch on EC2",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#356",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company stores its data objects in Amazon S3 Standard storage. A solutions architect has found that 75% of the data is rarely accessed after 30 days. The company needs all the data to remain immediately accessible with the same high availability and resiliency, but the company wants to minimize storage costs.<br><br>Which storage solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#356",
          "answers": [
            {
              "choice": "<p>A. Move the data objects to S3 Glacier Deep Archive after 30 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Move the data objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Move the data objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 30 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Move the data objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) immediately.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 820668,
          "date": "Fri 24 Feb 2023 16:35",
          "username": "\t\t\t\tLonojack\t\t\t",
          "content": "Needs immediate accessibility after 30days,IF they need to be accessed.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 818453,
          "date": "Wed 22 Feb 2023 22:29",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "S3 Standard-Infrequent Access after 30 days",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 816582,
          "date": "Tue 21 Feb 2023 13:53",
          "username": "\t\t\t\tNolaHOla\t\t\t",
          "content": "B<br>Option B - Move the data objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days - will meet the requirements of keeping the data immediately accessible with high availability and resiliency, while minimizing storage costs. S3 Standard-IA is designed for infrequently accessed data, and it provides a lower storage cost than S3 Standard, while still offering the same low latency, high throughput, and high durability as S3 Standard.",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#357",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A gaming company is moving its public scoreboard from a data center to the AWS Cloud. The company uses Amazon EC2 Windows Server instances behind an Application Load Balancer to host its dynamic application. The company needs a highly available storage solution for the application. The application consists of static files and dynamic server-side code.<br><br>Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#357",
          "answers": [
            {
              "choice": "<p>A. Store the static files on Amazon S3. Use Amazon CloudFront to cache objects at the edge.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Store the static files on Amazon S3. Use Amazon ElastiCache to cache objects at the edge.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Store the server-side code on Amazon Elastic File System (Amazon EFS). Mount the EFS volume on each EC2 instance to share the files.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Store the server-side code on Amazon FSx for Windows File Server. Mount the FSx for Windows File Server volume on each EC2 instance to share the files.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Store the server-side code on a General Purpose SSD (gp2) Amazon Elastic Block Store (Amazon EBS) volume. Mount the EBS volume on each EC2 instance to share the files.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 827528,
          "date": "Fri 03 Mar 2023 00:06",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "A because Elasticache, despite being ideal for leaderboards per Amazon, doesn't cache at edge locations.D because FSx has higher performance for low latency needs.<br><br>https://www.techtarget.com/searchaws/tip/Amazon-FSx-vs-EFS-Compare-the-AWS-file-services<br><br>\\\"FSx is built for high performance and submillisecond latency using solid-state drive storage volumes. This design enables users to select storage capacity and latency independently. Thus, even a subterabyte file system can have 256 Mbps or higher throughput and support volumes up to 64 TB. \\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 822065,
          "date": "Sun 26 Feb 2023 05:13",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "It is obvious that A and D. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 818455,
          "date": "Wed 22 Feb 2023 22:29",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "both A and D seem correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 816584,
          "date": "Tue 21 Feb 2023 13:55",
          "username": "\t\t\t\tNolaHOla\t\t\t",
          "content": "A and D seems correct",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#358",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A social media company runs its application on Amazon EC2 instances behind an Application Load Balancer (ALB). The ALB is the origin for an Amazon CloudFront distribution. The application has more than a billion images stored in an Amazon S3 bucket and processes thousands of images each second. The company wants to resize the images dynamically and serve appropriate formats to clients.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#358",
          "answers": [
            {
              "choice": "<p>A. Install an external image management library on an EC2 instance. Use the image management library to process the images.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a CloudFront origin request policy. Use the policy to automatically resize images and to serve the appropriate format based on the User-Agent HTTP header in the request.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use a Lambda@Edge function with an external image management library. Associate the Lambda@Edge function with the CloudFront behaviors that serve the images.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a CloudFront response headers policy. Use the policy to automatically resize images and to serve the appropriate format based on the User-Agent HTTP header in the request.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 818459,
          "date": "Wed 22 Feb 2023 22:31",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "https://aws.amazon.com/cn/blogs/networking-and-content-delivery/resizing-images-with-amazon-cloudfront-lambdaedge-aws-cdn-blog/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 816640,
          "date": "Tue 21 Feb 2023 14:59",
          "username": "\t\t\t\teverfly\t\t\t",
          "content": "https://aws.amazon.com/cn/blogs/networking-and-content-delivery/resizing-images-with-amazon-cloudfront-lambdaedge-aws-cdn-blog/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 816586,
          "date": "Tue 21 Feb 2023 13:57",
          "username": "\t\t\t\tNolaHOla\t\t\t",
          "content": "Use a Lambda@Edge function with an external image management library. Associate the Lambda@Edge function with the CloudFront behaviors that serve the images.<br><br>Using a Lambda@Edge function with an external image management library is the best solution to resize the images dynamically and serve appropriate formats to clients. Lambda@Edge is a serverless computing service that allows running custom code in response to CloudFront events, such as viewer requests and origin requests. By using a Lambda@Edge function, it's possible to process images on the fly and modify the CloudFront response before it's sent back to the client. Additionally, Lambda@Edge has built-in support for external libraries that can be used to process images. This approach will reduce operational overhead and scale automatically with traffic.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#359",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A hospital needs to store patient records in an Amazon S3 bucket. The hospital's compliance team must ensure that all protected health information (PHI) is encrypted in transit and at rest. The compliance team must administer the encryption key for data at rest.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#359",
          "answers": [
            {
              "choice": "<p>A. Create a public SSL/TLS certificate in AWS Certificate Manager (ACM). Associate the certificate with Amazon S3. Configure default encryption for each S3 bucket to use server-side encryption with AWS KMS keys (SSE-KMS). Assign the compliance team to manage the KMS keys.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the aws:SecureTransport condition on S3 bucket policies to allow only encrypted connections over HTTPS (TLS). Configure default encryption for each S3 bucket to use server-side encryption with S3 managed encryption keys (SSE-S3). Assign the compliance team to manage the SSE-S3 keys.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the aws:SecureTransport condition on S3 bucket policies to allow only encrypted connections over HTTPS (TLS). Configure default encryption for each S3 bucket to use server-side encryption with AWS KMS keys (SSE-KMS). Assign the compliance team to manage the KMS keys.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the aws:SecureTransport condition on S3 bucket policies to allow only encrypted connections over HTTPS (TLS). Use Amazon Macie to protect the sensitive data that is stored in Amazon S3. Assign the compliance team to manage Macie.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 816594,
          "date": "Tue 21 Feb 2023 14:02",
          "username": "\t\t\t\tNolaHOla\t\t\t",
          "content": "Option C is correct because it allows the compliance team to manage the KMS keys used for server-side encryption, thereby providing the necessary control over the encryption keys. Additionally, the use of the \\\"aws:SecureTransport\\\" condition on the bucket policy ensures that all connections to the S3 bucket are encrypted in transit.<br>option B might be misleading but using SSE-S3, the encryption keys are managed by AWS and not by the compliance team<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Perfect explanation. I Agree</li></ul>",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 820640,
          "date": "Fri 24 Feb 2023 16:00",
          "username": "\t\t\t\tLonojack\t\t\t",
          "content": "Perfect explanation. I Agree",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 833528,
          "date": "Thu 09 Mar 2023 02:51",
          "username": "\t\t\t\tDody\t\t\t",
          "content": "Correct Answer is \\\"C\\\"<br>“D” is not correct because Amazon Macie securely stores your data at rest using AWS encryption solutions. Macie encrypts data, such as findings, using an AWS managed key from AWS Key Management Service (AWS KMS).However, in the question there is a requirement that the compliance team must administer the encryption key for data at rest.<br>https://docs.aws.amazon.com/macie/latest/user/data-protection.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 831501,
          "date": "Tue 07 Mar 2023 03:49",
          "username": "\t\t\t\tcegama543\t\t\t",
          "content": "Option C will meet the requirements.<br><br>Explanation:<br><br>The compliance team needs to administer the encryption key for data at rest in order to ensure that protected health information (PHI) is encrypted in transit and at rest. Therefore, we need to use server-side encryption with AWS KMS keys (SSE-KMS). The default encryption for each S3 bucket can be configured to use SSE-KMS to ensure that all new objects in the bucket are encrypted with KMS keys.<br><br>Additionally, we can configure the S3 bucket policies to allow only encrypted connections over HTTPS (TLS) using the aws:SecureTransport condition. This ensures that the data is encrypted in transit.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 829004,
          "date": "Sat 04 Mar 2023 14:49",
          "username": "\t\t\t\tKarlos99\t\t\t",
          "content": "We must provide encrypted in transit and at rest. Macie is needed to discover and recognize any PII or Protected Health Information. We already know that the hospital is working with the sensitive data ) soprotect them witn KMS and SSL. Answer D is unnecessary",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 828489,
          "date": "Sat 04 Mar 2023 01:34",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "Macie does not encrypt the data like the question is asking<br>https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html<br><br>Also, SSE-S3 encryption is fully managed by AWS so the Compliance Team can't administer this.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 828113,
          "date": "Fri 03 Mar 2023 17:04",
          "username": "\t\t\t\tAbhineet9148232\t\t\t",
          "content": "C [Correct]: Ensures Https only traffic (encrypted transit), Enables compliance team to govern encryption key.<br>D [Incorrect]: Misleading; PHI is required to be encrypted not discovered. Maice is a discovery service. (https://aws.amazon.com/macie/)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 824375,
          "date": "Tue 28 Feb 2023 05:10",
          "username": "\t\t\t\tNel8\t\t\t",
          "content": "Correct answer should be D.  \\\"Use Amazon Macie to protect the sensitive data...\\\"<br>As requirement says \\\"The hospitals's compliance team must ensure that all protected health information (PHI) is encrypted in transit and at rest.\\\"<br><br>Macie protects personal record such as PHI. Macie provides you with an inventory of your S3 buckets, and automatically evaluates and monitors the buckets for security and access control. If Macie detects a potential issue with the security or privacy of your data, such as a bucket that becomes publicly accessible, Macie generates a finding for you to review and remediate as necessary.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 821350,
          "date": "Sat 25 Feb 2023 10:41",
          "username": "\t\t\t\tDrayen25\t\t\t",
          "content": "Option C should be",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#360",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon API Gateway to run a private gateway with two REST APIs in the same VPC.  The BuyStock RESTful web service calls the CheckFunds RESTful web service to ensure that enough funds are available before a stock can be purchased. The company has noticed in the VPC flow logs that the BuyStock RESTful web service calls the CheckFunds RESTful web service over the internet instead of through the VPC.  A solutions architect must implement a solution so that the APIs communicate through the VPC. <br><br>Which solution will meet these requirements with the FEWEST changes to the code?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#360",
          "answers": [
            {
              "choice": "<p>A. Add an X-API-Key header in the HTTP header for authorization.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use an interface endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use a gateway endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add an Amazon Simple Queue Service (Amazon SQS) queue between the two REST APIs.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 828605,
          "date": "Sat 04 Mar 2023 04:16",
          "username": "\t\t\t\tsiyam008\t\t\t",
          "content": "https://www.linkedin.com/pulse/aws-interface-endpoint-vs-gateway-alex-chang<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Correct answer is B.  Incorrectly selected C</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 828607,
          "date": "Sat 04 Mar 2023 04:17",
          "username": "\t\t\t\tsiyam008\t\t\t",
          "content": "Correct answer is B.  Incorrectly selected C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 823231,
          "date": "Mon 27 Feb 2023 06:29",
          "username": "\t\t\t\tDASBOL\t\t\t",
          "content": "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-private-apis.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 820937,
          "date": "Fri 24 Feb 2023 21:57",
          "username": "\t\t\t\tSherif_Abbas\t\t\t",
          "content": "The only time where an Interface Endpoint may be preferable (for S3 or DynamoDB) over a Gateway Endpoint is if you require access from on-premises, for example you want private access from your on-premise data center<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The RESTful services is neither an S3 or DynamDB service, so a VPC Gateway endpoint isn't available here.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 828491,
          "date": "Sat 04 Mar 2023 01:39",
          "username": "\t\t\t\tSteve_4542636\t\t\t",
          "content": "The RESTful services is neither an S3 or DynamDB service, so a VPC Gateway endpoint isn't available here.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 818476,
          "date": "Wed 22 Feb 2023 22:48",
          "username": "\t\t\t\tbdp123\t\t\t",
          "content": "fewest changes to code and below link:<br>https://gkzz.medium.com/what-is-the-differences-between-vpc-endpoint-gateway-endpoint-ae97bfab97d8",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 817898,
          "date": "Wed 22 Feb 2023 15:09",
          "username": "\t\t\t\tKAUS2\t\t\t",
          "content": "Agreed B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 817814,
          "date": "Wed 22 Feb 2023 13:31",
          "username": "\t\t\t\tAlmeroSenior\t\t\t",
          "content": "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-private-apis.html- Interface EP",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 816637,
          "date": "Tue 21 Feb 2023 14:53",
          "username": "\t\t\t\teverfly\t\t\t",
          "content": "an interface endpoint is a horizontally scaled, redundant VPC endpoint that provides private connectivity to a service. It is an elastic network interface with a private IP address that serves as an entry point for traffic destined to the AWS service. Interface endpoints are used to connect VPCs with AWS services",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#361",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a multiplayer gaming application on AWS. The company wants the application to read data with sub-millisecond latency and run one-time queries on historical data.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#361",
          "answers": [
            {
              "choice": "<p>A. Use Amazon RDS for data that is frequently accessed. Run a periodic custom script to export the data to an Amazon S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Store the data directly in an Amazon S3 bucket. Implement an S3 Lifecycle policy to move older data to S3 Glacier Deep Archive for long-term storage. Run one-time queries on the data in Amazon S3 by using Amazon Athena.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon DynamoDB with DynamoDB Accelerator (DAX) for data that is frequently accessed. Export the data to an Amazon S3 bucket by using DynamoDB table export. Run one-time queries on the data in Amazon S3 by using Amazon Athena.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon DynamoDB for data that is frequently accessed. Turn on streaming to Amazon Kinesis Data Streams. Use Amazon Kinesis Data Firehose to read the data from Kinesis Data Streams. Store the records in an Amazon S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 837776,
          "date": "Mon 13 Mar 2023 09:46",
          "username": "\t\t\t\tKAUS2\t\t\t",
          "content": "Option C is the right one. The questions clearly states \\\"sub-millisecond latency \\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 835919,
          "date": "Sat 11 Mar 2023 12:46",
          "username": "\t\t\t\tsmgsi\t\t\t",
          "content": "https://aws.amazon.com/dynamodb/dax/?nc1=h_ls",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 834938,
          "date": "Fri 10 Mar 2023 13:07",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "Cccccccccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 834930,
          "date": "Fri 10 Mar 2023 12:59",
          "username": "\t\t\t\tACasper\t\t\t",
          "content": "Answer is C for Submillisecond",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#362",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses a payment processing system that requires messages for a particular payment ID to be received in the same order that they were sent. Otherwise, the payments might be processed incorrectly.<br><br>Which actions should a solutions architect take to meet this requirement? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#362",
          "answers": [
            {
              "choice": "<p>A. Write the messages to an Amazon DynamoDB table with the payment ID as the partition key.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Write the messages to an Amazon Kinesis data stream with the payment ID as the partition key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Write the messages to an Amazon ElastiCache for Memcached cluster with the payment ID as the key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Write the messages to an Amazon Simple Queue Service (Amazon SQS) queue. Set the message attribute to use the payment ID. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Write the messages to an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Set the message group to use the payment ID. <br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 836272,
          "date": "Sat 11 Mar 2023 17:32",
          "username": "\t\t\t\tKarlos99\t\t\t",
          "content": "No doubt )",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 836256,
          "date": "Sat 11 Mar 2023 17:14",
          "username": "\t\t\t\tkprakashbehera\t\t\t",
          "content": "Ans - AE<br>Kinessis and elastic cache are not required in this case.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 834945,
          "date": "Fri 10 Mar 2023 13:11",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "Araeaeaeea",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        }
      ]
    },
    {
      "question_id": "#363",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a game system that needs to send unique events to separate leaderboard, matchmaking, and authentication services concurrently. The company needs an AWS event-driven system that guarantees the order of the events.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#363",
          "answers": [
            {
              "choice": "<p>A. Amazon EventBridge event bus<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Amazon Simple Notification Service (Amazon SNS) FIFO topics<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Amazon Simple Notification Service (Amazon SNS) standard topics<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Amazon Simple Queue Service (Amazon SQS) FIFO queues<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 837622,
          "date": "Mon 13 Mar 2023 05:08",
          "username": "\t\t\t\tachevez85\t\t\t",
          "content": "What is the difference between Queue and Topic?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 837484,
          "date": "Mon 13 Mar 2023 01:25",
          "username": "\t\t\t\tfkie4\t\t\t",
          "content": "SNS has FIFO topics. see this:<br>https://docs.aws.amazon.com/sns/latest/dg/sns-fifo-topics.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 837194,
          "date": "Sun 12 Mar 2023 17:08",
          "username": "\t\t\t\tKS2020\t\t\t",
          "content": "Here events need to be sent to separate leaderboard, matchmaking, and authentication services concurrently. This means consumers are multiple i.e., 3. Again it guarantees the order of the events. So, answer should be B.  Amazon Simple Notification Service (Amazon SNS) FIFO topics",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 836910,
          "date": "Sun 12 Mar 2023 11:40",
          "username": "\t\t\t\tXXXman\t\t\t",
          "content": "guarantees the order",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 834970,
          "date": "Fri 10 Mar 2023 13:37",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "Q: Does EventBridge Pipes provide ordering guarantees?<br>Yes, EventBridge Pipes will maintain the order of events received from an event source when sending those events to a destination service.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#364",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A hospital is designing a new application that gathers symptoms from patients. The hospital has decided to use Amazon Simple Queue Service (Amazon SQS) and Amazon Simple Notification Service (Amazon SNS) in the architecture.<br><br>A solutions architect is reviewing the infrastructure design. Data must be encrypted at rest and in transit. Only authorized personnel of the hospital should be able to access the data.<br><br>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#364",
          "answers": [
            {
              "choice": "<p>A. Turn on server-side encryption on the SQS components. Update the default key policy to restrict key usage to a set of authorized principals.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Turn on server-side encryption on the SNS components by using an AWS Key Management Service (AWS KMS) customer managed key. Apply a key policy to restrict key usage to a set of authorized principals.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Turn on encryption on the SNS components. Update the default key policy to restrict key usage to a set of authorized principals. Set a condition in the topic policy to allow only encrypted connections over TLS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Turn on server-side encryption on the SQS components by using an AWS Key Management Service (AWS KMS) customer managed key. Apply a key policy to restrict key usage to a set of authorized principals. Set a condition in the queue policy to allow only encrypted connections over TLS.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Turn on server-side encryption on the SQS components by using an AWS Key Management Service (AWS KMS) customer managed key. Apply an IAM policy to restrict key usage to a set of authorized principals. Set a condition in the queue policy to allow only encrypted connections over TLS.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 837488,
          "date": "Mon 13 Mar 2023 01:32",
          "username": "\t\t\t\tfkie4\t\t\t",
          "content": "read this:<br>https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html<br>https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 836928,
          "date": "Sun 12 Mar 2023 12:08",
          "username": "\t\t\t\tKarlos99\t\t\t",
          "content": "For a customer managed KMS key, you must configure the key policy to add permissions for each queue producer and consumer.https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-key-management.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 834993,
          "date": "Fri 10 Mar 2023 13:54",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "bebebe<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>bdbdbdbd<br>All KMS keys must have a key policy. IAM policies are optional.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 834999,
          "date": "Fri 10 Mar 2023 14:02",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "bdbdbdbd<br>All KMS keys must have a key policy. IAM policies are optional.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#365",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a web application that is backed by Amazon RDS. A new database administrator caused data loss by accidentally editing information in a database table. To help recover from this type of incident, the company wants the ability to restore the database to its state from 5 minutes before any change within the last 30 days.<br><br>Which feature should the solutions architect include in the design to meet this requirement?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#365",
          "answers": [
            {
              "choice": "<p>A. Read replicas<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Manual snapshots<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Automated backups<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Multi-AZ deployments<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 835005,
          "date": "Fri 10 Mar 2023 14:04",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "ccccccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#366",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's web application consists of an Amazon API Gateway API in front of an AWS Lambda function and an Amazon DynamoDB database. The Lambda function handles the business logic, and the DynamoDB table hosts the data. The application uses Amazon Cognito user pools to identify the individual users of the application. A solutions architect needs to update the application so that only users who have a subscription can access premium content.<br><br>Which solution will meet this requirement with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#366",
          "answers": [
            {
              "choice": "<p>A. Enable API caching and throttling on the API Gateway API.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up AWS WAF on the API Gateway API. Create a rule to filter users who have a subscription.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Apply fine-grained IAM permissions to the premium content in the DynamoDB table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Implement API usage plans and API keys to limit the access of users who do not have a subscription.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 837818,
          "date": "Mon 13 Mar 2023 10:55",
          "username": "\t\t\t\tquentin17\t\t\t",
          "content": "Both C&D are valid solution<br>According to ChatGPT:<br>\\\"Applying fine-grained IAM permissions to the premium content in the DynamoDB table is a valid approach, but it requires more effort in managing IAM policies and roles for each user, making it more complex and adding operational overhead.\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 836940,
          "date": "Sun 12 Mar 2023 12:24",
          "username": "\t\t\t\tKarlos99\t\t\t",
          "content": "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 835007,
          "date": "Fri 10 Mar 2023 14:07",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "ccccccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#367",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using Amazon Route 53 latency-based routing to route requests to its UDP-based application for users around the world. The application is hosted on redundant servers in the company's on-premises data centers in the United States, Asia, and Europe. The company's compliance requirements state that the application must be hosted on premises. The company wants to improve the performance and availability of the application.<br><br>What should a solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#367",
          "answers": [
            {
              "choice": "<p>A. Configure three Network Load Balancers (NLBs) in the three AWS Regions to address the on-premises endpoints. Create an accelerator by using AWS Global Accelerator, and register the NLBs as its endpoints. Provide access to the application by using a CNAME that points to the accelerator DNS.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure three Application Load Balancers (ALBs) in the three AWS Regions to address the on-premises endpoints. Create an accelerator by using AWS Global Accelerator, and register the ALBs as its endpoints. Provide access to the application by using a CNAME that points to the accelerator DNS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure three Network Load Balancers (NLBs) in the three AWS Regions to address the on-premises endpoints. In Route 53, create a latency-based record that points to the three NLBs, and use it as an origin for an Amazon CloudFront distribution. Provide access to the application by using a CNAME that points to the CloudFront DNS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure three Application Load Balancers (ALBs) in the three AWS Regions to address the on-premises endpoints. In Route 53, create a latency-based record that points to the three ALBs, and use it as an origin for an Amazon CloudFront distribution. Provide access to the application by using a CNAME that points to the CloudFront DNS.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 835016,
          "date": "Fri 10 Mar 2023 14:18",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "aaaaaaaa",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#368",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect wants all new users to have specific complexity requirements and mandatory rotation periods for IAM user passwords.<br><br>What should the solutions architect do to accomplish this?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#368",
          "answers": [
            {
              "choice": "<p>A. Set an overall password policy for the entire AWS account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set a password policy for each IAM user in the AWS account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use third-party vendor software to set password requirements.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Attach an Amazon CloudWatch rule to the Create_newuser event to set the password with the appropriate requirements.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 835017,
          "date": "Fri 10 Mar 2023 14:21",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "aaaaaaa",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#369",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has migrated an application to Amazon EC2 Linux instances. One of these EC2 instances runs several 1-hour tasks on a schedule. These tasks were written by different teams and have no common programming language. The company is concerned about performance and scalability while these tasks run on a single instance. A solutions architect needs to implement a solution to resolve these concerns.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#369",
          "answers": [
            {
              "choice": "<p>A. Use AWS Batch to run the tasks as jobs. Schedule the jobs by using Amazon EventBridge (Amazon CloudWatch Events).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Convert the EC2 instance to a container. Use AWS App Runner to create the container on demand to run the tasks as jobs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Copy the tasks into AWS Lambda functions. Schedule the Lambda functions by using Amazon EventBridge (Amazon CloudWatch Events).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon Machine Image (AMI) of the EC2 instance that runs the tasks. Create an Auto Scaling group with the AMI to run multiple copies of the instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 837495,
          "date": "Mon 13 Mar 2023 01:51",
          "username": "\t\t\t\tfkie4\t\t\t",
          "content": "question said \\\"These tasks were written by different teams and have no common programming language\\\", and key word \\\"scalable\\\". Only Lambda can fulfil these. Lambda can be done in different programming languages, and it is scalable",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 835020,
          "date": "Fri 10 Mar 2023 14:23",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "aaaaaaaa<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A my S. show some reasons next time</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 837494,
          "date": "Mon 13 Mar 2023 01:49",
          "username": "\t\t\t\tfkie4\t\t\t",
          "content": "A my S. show some reasons next time",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#370",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a public three-tier web application in a VPC.  The application runs on Amazon EC2 instances across multiple Availability Zones. The EC2 instances that run in private subnets need to communicate with a license server over the internet. The company needs a managed solution that minimizes operational maintenance.<br><br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#370",
          "answers": [
            {
              "choice": "<p>A. Provision a NAT instance in a public subnet. Modify each private subnet's route table with a default route that points to the NAT instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Provision a NAT instance in a private subnet. Modify each private subnet's route table with a default route that points to the NAT instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Provision a NAT gateway in a public subnet. Modify each private subnet's route table with a default route that points to the NAT gateway.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provision a NAT gateway in a private subnet. Modify each private subnet's route table with a default route that points to the NAT gateway.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 837012,
          "date": "Sun 12 Mar 2023 13:40",
          "username": "\t\t\t\tUnluckyDucky\t\t\t",
          "content": "\\\"The company needs a managed solution that minimizes operational maintenance\\\"<br><br>Watch out for NAT instances vs NAT Gateways.<br><br>As the company needs a managed solution that minimizes operational maintenance - NAT Gateway is a public subnet is the answer.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 835024,
          "date": "Fri 10 Mar 2023 14:26",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "ccccccccc",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#371",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to create an Amazon Elastic Kubernetes Service (Amazon EKS) cluster to host a digital media streaming application. The EKS cluster will use a managed node group that is backed by Amazon Elastic Block Store (Amazon EBS) volumes for storage. The company must encrypt all data at rest by using a customer managed key that is stored in AWS Key Management Service (AWS KMS).<br><br>Which combination of actions will meet this requirement with the LEAST operational overhead? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#371",
          "answers": [
            {
              "choice": "<p>A. Use a Kubernetes plugin that uses the customer managed key to perform data encryption.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. After creation of the EKS cluster, locate the EBS volumes. Enable encryption by using the customer managed key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable EBS encryption by default in the AWS Region where the EKS cluster will be created. Select the customer managed key as the default key.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create the EKS cluster. Create an IAM role that has a policy that grants permission to the customer managed key. Associate the role with the EKS cluster.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Store the customer managed key as a Kubernetes secret in the EKS cluster. Use the customer managed key to encrypt the EBS volumes.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 836951,
          "date": "Sun 12 Mar 2023 12:40",
          "username": "\t\t\t\tKarlos99\t\t\t",
          "content": "Least overhead",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 835028,
          "date": "Fri 10 Mar 2023 14:30",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "bdbdbdbdbd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        }
      ]
    },
    {
      "question_id": "#372",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to migrate an Oracle database to AWS. The database consists of a single table that contains millions of geographic information systems (GIS) images that are high resolution and are identified by a geographic code.<br><br>When a natural disaster occurs, tens of thousands of images get updated every few minutes. Each geographic code has a single image or row that is associated with it. The company wants a solution that is highly available and scalable during such events.<br><br>Which solution meets these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#372",
          "answers": [
            {
              "choice": "<p>A. Store the images and geographic codes in a database table. Use Oracle running on an Amazon RDS Multi-AZ DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Store the images in Amazon S3 buckets. Use Amazon DynamoDB with the geographic code as the key and the image S3 URL as the value.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Store the images and geographic codes in an Amazon DynamoDB table. Configure DynamoDB Accelerator (DAX) during times of high load.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Store the images in Amazon S3 buckets. Store geographic codes and image S3 URLs in a database table. Use Oracle running on an Amazon RDS Multi-AZ DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 837671,
          "date": "Mon 13 Mar 2023 07:00",
          "username": "\t\t\t\tKAUS2\t\t\t",
          "content": "Option B is the right answer . You cannot store high resolution images in DynamoDB due to its limitation - Maximum size of an item is 400KB",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 836956,
          "date": "Sun 12 Mar 2023 12:44",
          "username": "\t\t\t\tKarlos99\t\t\t",
          "content": "The company wants a solution that is highly available and scalable",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 835042,
          "date": "Fri 10 Mar 2023 14:39",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "bbbbbbbbbb",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#373",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that collects data from IoT sensors on automobiles. The data is streamed and stored in Amazon S3 through Amazon Kinesis Data Firehose. The data produces trillions of S3 objects each year. Each morning, the company uses the data from the previous 30 days to retrain a suite of machine learning (ML) models.<br><br>Four times each year, the company uses the data from the previous 12 months to perform analysis and train other ML models. The data must be available with minimal delay for up to 1 year. After 1 year, the data must be retained for archival purposes.<br><br>Which storage solution meets these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#373",
          "answers": [
            {
              "choice": "<p>A. Use the S3 Intelligent-Tiering storage class. Create an S3 Lifecycle policy to transition objects to S3 Glacier Deep Archive after 1 year.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the S3 Intelligent-Tiering storage class. Configure S3 Intelligent-Tiering to automatically move objects to S3 Glacier Deep Archive after 1 year.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the S3 Standard-Infrequent Access (S3 Standard-IA) storage class. Create an S3 Lifecycle policy to transition objects to S3 Glacier Deep Archive after 1 year.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the S3 Standard storage class. Create an S3 Lifecycle policy to transition objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days, and then to S3 Glacier Deep Archive after 1 year.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 837607,
          "date": "Mon 13 Mar 2023 04:49",
          "username": "\t\t\t\tKAUS2\t\t\t",
          "content": "Agree with UnluckyDucky , the correct option is D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 837503,
          "date": "Mon 13 Mar 2023 01:59",
          "username": "\t\t\t\tfkie4\t\t\t",
          "content": "Should be D.  see this:<br>https://www.examtopics.com/discussions/amazon/view/68947-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 837072,
          "date": "Sun 12 Mar 2023 14:53",
          "username": "\t\t\t\tUnluckyDucky\t\t\t",
          "content": "Access patterns is given, therefore D is the most logical answer.<br><br>Intelligent tiering is for random, unpredictable access.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 836366,
          "date": "Sat 11 Mar 2023 19:08",
          "username": "\t\t\t\tNithin1119\t\t\t",
          "content": "Bbbbbbbbb<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>hello!!??</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 837504,
          "date": "Mon 13 Mar 2023 01:59",
          "username": "\t\t\t\tfkie4\t\t\t",
          "content": "hello!!??",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 835050,
          "date": "Fri 10 Mar 2023 14:43",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "ddddddd<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>D because:<br>- First 30 days- data access every morning ( predictable and frequently) – S3 standard<br>- After 30 days, accessed 4 times a year – S3 infrequently access<br>- Data preserved- S3 Gllacier Deep Archive</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 835051,
          "date": "Fri 10 Mar 2023 14:43",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "D because:<br>- First 30 days- data access every morning ( predictable and frequently) – S3 standard<br>- After 30 days, accessed 4 times a year – S3 infrequently access<br>- Data preserved- S3 Gllacier Deep Archive",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#374",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running several business applications in three separate VPCs within the us-east-1 Region. The applications must be able to communicate between VPCs. The applications also must be able to consistently send hundreds of gigabytes of data each day to a latency-sensitive application that runs in a single on-premises data center.<br><br>A solutions architect needs to design a network connectivity solution that maximizes cost-effectiveness.<br><br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#374",
          "answers": [
            {
              "choice": "<p>A. Configure three AWS Site-to-Site VPN connections from the data center to AWS. Establish connectivity by configuring one VPN connection for each VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Launch a third-party virtual network appliance in each VPC.  Establish an IPsec VPN tunnel between the data center and each virtual appliance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up three AWS Direct Connect connections from the data center to a Direct Connect gateway in us-east-1. Establish connectivity by configuring each VPC to use one of the Direct Connect connections.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up one AWS Direct Connect connection from the data center to AWS. Create a transit gateway, and attach each VPC to the transit gateway. Establish connectivity between the Direct Connect connection and the transit gateway.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 836963,
          "date": "Sun 12 Mar 2023 12:51",
          "username": "\t\t\t\tKarlos99\t\t\t",
          "content": "maximizes cost-effectiveness",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 835058,
          "date": "Fri 10 Mar 2023 14:45",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "ddddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#375",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company is building a distributed application that involves several serverless functions and AWS services to complete order-processing tasks. These tasks require manual approvals as part of the workflow. A solutions architect needs to design an architecture for the order-processing application. The solution must be able to combine multiple AWS Lambda functions into responsive serverless applications. The solution also must orchestrate data and services that run on Amazon EC2 instances, containers, or on-premises servers.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#375",
          "answers": [
            {
              "choice": "<p>A. Use AWS Step Functions to build the application.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Integrate all the application components in an AWS Glue job.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon Simple Queue Service (Amazon SQS) to build the application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Lambda functions and Amazon EventBridge events to build the application.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 835781,
          "date": "Sat 11 Mar 2023 10:18",
          "username": "\t\t\t\tktulu2602\t\t\t",
          "content": "Option A: Use AWS Step Functions to build the application.<br>AWS Step Functions is a serverless workflow service that makes it easy to coordinate distributed applications and microservices using visual workflows. It is an ideal solution for designing architectures for distributed applications that involve multiple AWS services and serverless functions, as it allows us to orchestrate the flow of our application components using visual workflows. AWS Step Functions also integrates with other AWS services like AWS Lambda, Amazon EC2, and Amazon ECS, and it has built-in error handling and retry mechanisms. This option provides a serverless solution with the least operational overhead for building the application.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#376",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has launched an Amazon RDS for MySQL DB instance. Most of the connections to the database come from serverless applications. Application traffic to the database changes significantly at random intervals. At times of high demand, users report that their applications experience database connection rejection errors.<br><br>Which solution will resolve this issue with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#376",
          "answers": [
            {
              "choice": "<p>A. Create a proxy in RDS Proxy. Configure the users' applications to use the DB instance through RDS Proxy.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy Amazon ElastiCache for Memcached between the users' applications and the DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the DB instance to a different instance class that has higher I/O capacity. Configure the users' applications to use the new DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure Multi-AZ for the DB instance. Configure the users' applications to switch between the DB instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 835785,
          "date": "Sat 11 Mar 2023 10:20",
          "username": "\t\t\t\tktulu2602\t\t\t",
          "content": "The correct solution for this scenario would be to create a proxy in RDS Proxy. RDS Proxy allows for managing thousands of concurrent database connections, which can help reduce connection errors. RDS Proxy also provides features such as connection pooling, read/write splitting, and retries. This solution requires the least operational overhead as it does not involve migrating to a different instance class or setting up a new cache layer. Therefore, option A is the correct answer.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#377",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently deployed a new auditing system to centralize information about operating system versions, patching, and installed software for Amazon EC2 instances. A solutions architect must ensure all instances provisioned through EC2 Auto Scaling groups successfully send reports to the auditing system as soon as they are launched and terminated.<br><br>Which solution achieves these goals MOST efficiently?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#377",
          "answers": [
            {
              "choice": "<p>A. Use a scheduled AWS Lambda function and run a script remotely on all EC2 instances to send data to the audit system.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use EC2 Auto Scaling lifecycle hooks to run a custom script to send data to the audit system when instances are launched and terminated.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use an EC2 Auto Scaling launch configuration to run a custom script through user data to send data to the audit system when instances are launched and terminated.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Run a custom script on the instance operating system to send data to the audit system. Configure the script to be invoked by the EC2 Auto Scaling group when the instance starts and is terminated.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 837537,
          "date": "Mon 13 Mar 2023 02:56",
          "username": "\t\t\t\tfkie4\t\t\t",
          "content": "it is B.  read this:<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 835787,
          "date": "Sat 11 Mar 2023 10:22",
          "username": "\t\t\t\tktulu2602\t\t\t",
          "content": "The most efficient solution for this scenario is to use EC2 Auto Scaling lifecycle hooks to run a custom script to send data to the audit system when instances are launched and terminated. The lifecycle hook can be used to delay instance termination until the script has completed, ensuring that all data is sent to the audit system before the instance is terminated. This solution is more efficient than using a scheduled AWS Lambda function, which would require running the function periodically and may not capture all instances launched and terminated within the interval. Running a custom script through user data is also not an optimal solution, as it may not guarantee that all instances send data to the audit system. Therefore, option B is the correct answer.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#378",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a real-time multiplayer game that uses UDP for communications between the client and servers in an Auto Scaling group. Spikes in demand are anticipated during the day, so the game server platform must adapt accordingly. Developers want to store gamer scores and other non-relational data in a database solution that will scale without intervention.<br><br>Which solution should a solutions architect recommend?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#378",
          "answers": [
            {
              "choice": "<p>A. Use Amazon Route 53 for traffic distribution and Amazon Aurora Serverless for data storage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use a Network Load Balancer for traffic distribution and Amazon DynamoDB on-demand for data storage.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use a Network Load Balancer for traffic distribution and Amazon Aurora Global Database for data storage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an Application Load Balancer for traffic distribution and Amazon DynamoDB global tables for data storage.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 837599,
          "date": "Mon 13 Mar 2023 04:39",
          "username": "\t\t\t\tKAUS2\t\t\t",
          "content": "Correct option is “B”",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 836851,
          "date": "Sun 12 Mar 2023 10:30",
          "username": "\t\t\t\taragon_saa\t\t\t",
          "content": "B<br><br>https://www.examtopics.com/discussions/amazon/view/29756-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 836678,
          "date": "Sun 12 Mar 2023 03:39",
          "username": "\t\t\t\tKenp1192\t\t\t",
          "content": "B<br>Because NLB can handle UDP and DynamoDB is Non-Relational",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 836662,
          "date": "Sun 12 Mar 2023 02:28",
          "username": "\t\t\t\tfruto123\t\t\t",
          "content": "key words - UDP, non-relational data<br>answers - NLB for UDP application, DynamoDB for non-relational data",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#379",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a frontend application that uses an Amazon API Gateway API backend that is integrated with AWS Lambda. When the API receives requests, the Lambda function loads many libraries. Then the Lambda function connects to an Amazon RDS database, processes the data, and returns the data to the frontend application. The company wants to ensure that response latency is as low as possible for all its users with the fewest number of changes to the company's operations.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#379",
          "answers": [
            {
              "choice": "<p>A. Establish a connection between the frontend application and the database to make queries faster by bypassing the API.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure provisioned concurrency for the Lambda function that handles the requests.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Cache the results of the queries in Amazon S3 for faster retrieval of similar datasets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Increase the size of the database to increase the number of connections Lambda can establish at one time.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 837095,
          "date": "Sun 12 Mar 2023 15:10",
          "username": "\t\t\t\tUnluckyDucky\t\t\t",
          "content": "Key:the Lambda function loads many libraries<br><br>Configuring provisioned concurrency would get rid of the \\\"cold start\\\" of the function therefore speeding up the proccess.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 836978,
          "date": "Sun 12 Mar 2023 13:04",
          "username": "\t\t\t\tKarlos99\t\t\t",
          "content": "https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#380",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating its on-premises workload to the AWS Cloud. The company already uses several Amazon EC2 instances and Amazon RDS DB instances. The company wants a solution that automatically starts and stops the EC2 instances and DB instances outside of business hours. The solution must minimize cost and infrastructure maintenance.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#380",
          "answers": [
            {
              "choice": "<p>A. Scale the EC2 instances by using elastic resize. Scale the DB instances to zero outside of business hours.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Explore AWS Marketplace for partner solutions that will automatically start and stop the EC2 instances and DB instances on a schedule.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Launch another EC2 instance. Configure a crontab schedule to run shell scripts that will start and stop the existing EC2 instances and DB instances on a schedule.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Lambda function that will start and stop the EC2 instances and DB instances. Configure Amazon EventBridge to invoke the Lambda function on a schedule.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 835793,
          "date": "Sat 11 Mar 2023 10:28",
          "username": "\t\t\t\tktulu2602\t\t\t",
          "content": "The most efficient solution for automatically starting and stopping EC2 instances and DB instances on a schedule while minimizing cost and infrastructure maintenance is to create an AWS Lambda function and configure Amazon EventBridge to invoke the function on a schedule.<br><br>Option A, scaling EC2 instances by using elastic resize and scaling DB instances to zero outside of business hours, is not feasible as DB instances cannot be scaled to zero.<br><br>Option B, exploring AWS Marketplace for partner solutions, may be an option, but it may not be the most efficient solution and could potentially add additional costs.<br><br>Option C, launching another EC2 instance and configuring a crontab schedule to run shell scripts that will start and stop the existing EC2 instances and DB instances on a schedule, adds unnecessary infrastructure and maintenance.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#381",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a three-tier web application that includes a PostgreSQL database. The database stores the metadata from documents. The company searches the metadata for key terms to retrieve documents that the company reviews in a report each month. The documents are stored in Amazon S3. The documents are usually written only once, but they are updated frequently.<br><br>The reporting process takes a few hours with the use of relational queries. The reporting process must not prevent any document modifications or the addition of new documents. A solutions architect needs to implement a solution to speed up the reporting process.<br><br>Which solution will meet these requirements with the LEAST amount of change to the application code?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#381",
          "answers": [
            {
              "choice": "<p>A. Set up a new Amazon DocumentDB (with MongoDB compatibility) cluster that includes a read replica. Scale the read replica to generate the reports.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up a new Amazon Aurora PostgreSQL DB cluster that includes an Aurora Replica. Issue queries to the Aurora Replica to generate the reports.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up a new Amazon RDS for PostgreSQL Multi-AZ DB instance. Configure the reporting module to query the secondary RDS node so that the reporting module does not affect the primary node.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up a new Amazon DynamoDB table to store the documents. Use a fixed write capacity to support new document entries. Automatically scale the read capacity to support the reports.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 837102,
          "date": "Sun 12 Mar 2023 15:18",
          "username": "\t\t\t\tUnluckyDucky\t\t\t",
          "content": "\\\"LEAST amount of change to the application code\\\"<br><br>Aurora is a relational database, it supports PostgreSQL and with the help of read replicas we can issue the reporting proccess that take several hours to the replica, therefore not affecting the primary node which can handle new writes or document modifications.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 836671,
          "date": "Sun 12 Mar 2023 03:05",
          "username": "\t\t\t\tAshukaushal619\t\t\t",
          "content": "its D only ,recorrected",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 836670,
          "date": "Sun 12 Mar 2023 02:54",
          "username": "\t\t\t\tAshukaushal619\t\t\t",
          "content": "bbbbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#382",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a three-tier application on AWS that ingests sensor data from its users' devices. The traffic flows through a Network Load Balancer (NLB), then to Amazon EC2 instances for the web tier, and finally to EC2 instances for the application tier. The application tier makes calls to a database.<br><br>What should a solutions architect do to improve the security of the data in transit?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#382",
          "answers": [
            {
              "choice": "<p>A. Configure a TLS listener. Deploy the server certificate on the NLB. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure AWS Shield Advanced. Enable AWS WAF on the NLB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Change the load balancer to an Application Load Balancer (ALB). Enable AWS WAF on the ALB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Encrypt the Amazon Elastic Block Store (Amazon EBS) volume on the EC2 instances by using AWS Key Management Service (AWS KMS).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 836682,
          "date": "Sun 12 Mar 2023 03:52",
          "username": "\t\t\t\tfruto123\t\t\t",
          "content": "Network Load Balancers now support TLS protocol. With this launch, you can now offload resource intensive decryption/encryption from your application servers to a high throughput, and low latency Network Load Balancer. Network Load Balancer is now able to terminate TLS traffic and set up connections with your targets either over TCP or TLS protocol.<br><br>https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html<br><br>https://exampleloadbalancer.com/nlbtls_demo.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#383",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning to migrate a commercial off-the-shelf application from its on-premises data center to AWS. The software has a software licensing model using sockets and cores with predictable capacity and uptime requirements. The company wants to use its existing licenses, which were purchased earlier this year.<br><br>Which Amazon EC2 pricing option is the MOST cost-effective?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#383",
          "answers": [
            {
              "choice": "<p>A. Dedicated Reserved Hosts<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Dedicated On-Demand Hosts<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Dedicated Reserved Instances<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Dedicated On-Demand Instances<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 837543,
          "date": "Mon 13 Mar 2023 03:06",
          "username": "\t\t\t\tfkie4\t\t\t",
          "content": "\\\"predictable capacity and uptime requirements\\\" means \\\"Reserved\\\"<br>\\\"sockets and cores\\\" means \\\"dedicated host\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 836869,
          "date": "Sun 12 Mar 2023 10:52",
          "username": "\t\t\t\taragon_saa\t\t\t",
          "content": "A<br>https://www.examtopics.com/discussions/amazon/view/35818-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 836684,
          "date": "Sun 12 Mar 2023 03:57",
          "username": "\t\t\t\tfruto123\t\t\t",
          "content": "Dedicated Host Reservations provide a billing discount compared to running On-Demand Dedicated Hosts. Reservations are available in three payment options.<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 836681,
          "date": "Sun 12 Mar 2023 03:50",
          "username": "\t\t\t\tKenp1192\t\t\t",
          "content": "A<br>is the most cost effective",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#384",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an application on Amazon EC2 Linux instances across multiple Availability Zones. The application needs a storage layer that is highly available and Portable Operating System Interface (POSIX)-compliant. The storage layer must provide maximum data durability and must be shareable across the EC2 instances. The data in the storage layer will be accessed frequently for the first 30 days and will be accessed infrequently after that time.<br><br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#384",
          "answers": [
            {
              "choice": "<p>A. Use the Amazon S3 Standard storage class. Create an S3 Lifecycle policy to move infrequently accessed data to S3 Glacier.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the Amazon S3 Standard storage class. Create an S3 Lifecycle policy to move infrequently accessed data to S3 Standard-Infrequent Access (S3 Standard-IA).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the Amazon Elastic File System (Amazon EFS) Standard storage class. Create a lifecycle management policy to move infrequently accessed data to EFS Standard-Infrequent Access (EFS Standard-IA).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the Amazon Elastic File System (Amazon EFS) One Zone storage class. Create a lifecycle management policy to move infrequently accessed data to EFS One Zone-Infrequent Access (EFS One Zone-IA).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 837544,
          "date": "Mon 13 Mar 2023 03:10",
          "username": "\t\t\t\tfkie4\t\t\t",
          "content": "\\\"POSIX-compliant\\\" means EFS.<br>also, file system can be shared with multiple EC2 instances means \\\"EFS\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 837114,
          "date": "Sun 12 Mar 2023 15:33",
          "username": "\t\t\t\tKAUS2\t\t\t",
          "content": "Option C is the correct answer .",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 836719,
          "date": "Sun 12 Mar 2023 05:39",
          "username": "\t\t\t\tRuhi02\t\t\t",
          "content": "Answer c :https://aws.amazon.com/efs/features/infrequent-access/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 835795,
          "date": "Sat 11 Mar 2023 10:37",
          "username": "\t\t\t\tktulu2602\t\t\t",
          "content": "Option A, using S3, is not a good option as it is an object storage service and not POSIX-compliant. Option B, using S3 Standard-IA, is also not a good option as it is an object storage service and not POSIX-compliant. Option D, using EFS One Zone, is not the best option for high availability since it is only stored in a single AZ.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#385",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is creating a new VPC design. There are two public subnets for the load balancer, two private subnets for web servers, and two private subnets for MySQL. The web servers use only HTTPS. The solutions architect has already created a security group for the load balancer allowing port 443 from 0.0.0.0/0. Company policy requires that each resource has the least access required to still be able to perform its tasks.<br><br>Which additional configuration strategy should the solutions architect use to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#385",
          "answers": [
            {
              "choice": "<p>A. Create a security group for the web servers and allow port 443 from 0.0.0.0/0. Create a security group for the MySQL servers and allow port 3306 from the web servers security group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a network ACL for the web servers and allow port 443 from 0.0.0.0/0. Create a network ACL for the MySQL servers and allow port 3306 from the web servers security group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a security group for the web servers and allow port 443 from the load balancer. Create a security group for the MySQL servers and allow port 3306 from the web servers security group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a network ACL for the web servers and allow port 443 from the load balancer. Create a network ACL for the MySQL servers and allow port 3306 from the web servers security group.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 837545,
          "date": "Mon 13 Mar 2023 03:13",
          "username": "\t\t\t\tfkie4\t\t\t",
          "content": "Just C.  plain and simple",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 836883,
          "date": "Sun 12 Mar 2023 11:02",
          "username": "\t\t\t\taragon_saa\t\t\t",
          "content": "C<br>https://www.examtopics.com/discussions/amazon/view/43796-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 835116,
          "date": "Fri 10 Mar 2023 15:41",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "cccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#386",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company is running a multi-tier application on AWS. The front-end and backend tiers both run on Amazon EC2, and the database runs on Amazon RDS for MySQL. The backend tier communicates with the RDS instance. There are frequent calls to return identical datasets from the database that are causing performance slowdowns.<br><br>Which action should be taken to improve the performance of the backend?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#386",
          "answers": [
            {
              "choice": "<p>A. Implement Amazon SNS to store the database calls.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Implement Amazon ElastiCache to cache the large datasets.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Implement an RDS for MySQL read replica to cache database calls.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Implement Amazon Kinesis Data Firehose to stream the calls to the database.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 836887,
          "date": "Sun 12 Mar 2023 11:07",
          "username": "\t\t\t\taragon_saa\t\t\t",
          "content": "B<br>https://www.examtopics.com/discussions/amazon/view/27874-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 836695,
          "date": "Sun 12 Mar 2023 04:18",
          "username": "\t\t\t\tfruto123\t\t\t",
          "content": "Key term is identical datasets from the database it means caching can solve this issue by cached in frequently used dataset from DB",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#387",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A new employee has joined a company as a deployment engineer. The deployment engineer will be using AWS CloudFormation templates to create multiple AWS resources. A solutions architect wants the deployment engineer to perform job activities while following the principle of least privilege.<br><br>Which combination of actions should the solutions architect take to accomplish this goal? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: DE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#387",
          "answers": [
            {
              "choice": "<p>A. Have the deployment engineer use AWS account root user credentials for performing AWS CloudFormation stack operations.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new IAM user for the deployment engineer and add the IAM user to a group that has the PowerUsers IAM policy attached.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new IAM user for the deployment engineer and add the IAM user to a group that has the AdministratorAccess IAM policy attached.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new IAM user for the deployment engineer and add the IAM user to a group that has an IAM policy that allows AWS CloudFormation actions only.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an IAM role for the deployment engineer to explicitly define the permissions specific to the AWS CloudFormation stack and launch stacks using that IAM role.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 836860,
          "date": "Sun 12 Mar 2023 10:40",
          "username": "\t\t\t\taragon_saa\t\t\t",
          "content": "D, E<br>https://www.examtopics.com/discussions/amazon/view/46428-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 836697,
          "date": "Sun 12 Mar 2023 04:21",
          "username": "\t\t\t\tfruto123\t\t\t",
          "content": "I agree DE",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: DE"
        }
      ]
    },
    {
      "question_id": "#388",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is deploying a two-tier web application in a VPC.  The web tier is using an Amazon EC2 Auto Scaling group with public subnets that span multiple Availability Zones. The database tier consists of an Amazon RDS for MySQL DB instance in separate private subnets. The web tier requires access to the database to retrieve product information.<br><br>The web application is not working as intended. The web application reports that it cannot connect to the database. The database is confirmed to be up and running. All configurations for the network ACLs, security groups, and route tables are still in their default states.<br><br>What should a solutions architect recommend to fix the application?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#388",
          "answers": [
            {
              "choice": "<p>A. Add an explicit rule to the private subnet's network ACL to allow traffic from the web tier's EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add a route in the VPC route table to allow traffic between the web tier's EC2 instances and the database tier.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy the web tier's EC2 instances and the database tier's RDS instance into two separate VPCs, and configure VPC peering.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add an inbound rule to the security group of the database tier's RDS instance to allow traffic from the web tiers security group.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 836900,
          "date": "Sun 12 Mar 2023 11:17",
          "username": "\t\t\t\taragon_saa\t\t\t",
          "content": "D<br>https://www.examtopics.com/discussions/amazon/view/81445-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 836843,
          "date": "Sun 12 Mar 2023 10:21",
          "username": "\t\t\t\tKAUS2\t\t\t",
          "content": "D is correct option",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 835124,
          "date": "Fri 10 Mar 2023 15:49",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "ddddddd",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#389",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a large dataset for its online advertising business stored in an Amazon RDS for MySQL DB instance in a single Availability Zone. The company wants business reporting queries to run without impacting the write operations to the production DB instance.<br><br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#389",
          "answers": [
            {
              "choice": "<p>A. Deploy RDS read replicas to process the business reporting queries.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Scale out the DB instance horizontally by placing it behind an Elastic Load Balancer.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Scale up the DB instance to a larger instance type to handle write operations and queries.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy the DB instance in multiple Availability Zones to process the business reporting queries.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 836842,
          "date": "Sun 12 Mar 2023 10:20",
          "username": "\t\t\t\tKAUS2\t\t\t",
          "content": "Option \\\"A\\\" isthe right answer . Read replica use cases - You have a production database <br>that is taking on normal load&You want to run a reportingapplication to run some analytics<br>• You create a Read Replica to run the new workload there<br>• The production application is unaffected<br>• Read replicas are used for SELECT (=read) only kind of statements (not INSERT, UPDATE, DELETE)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 835577,
          "date": "Sat 11 Mar 2023 03:23",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "aaaaaaaaaaa",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 835411,
          "date": "Fri 10 Mar 2023 21:29",
          "username": "\t\t\t\tcegama543\t\t\t",
          "content": "option A is the best solution for ensuring that business reporting queries can run without impacting write operations to the production DB instance.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#390",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a three-tier ecommerce application on a fleet of Amazon EC2 instances. The instances run in an Auto Scaling group behind an Application Load Balancer (ALB). All ecommerce data is stored in an Amazon RDS for MariaDB Multi-AZ DB instance.<br><br>The company wants to optimize customer session management during transactions. The application must store session data durably.<br><br>Which solutions will meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#390",
          "answers": [
            {
              "choice": "<p>A. Turn on the sticky sessions feature (session affinity) on the ALB. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use an Amazon DynamoDB table to store customer session information.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy an Amazon Cognito user pool to manage user session information.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy an Amazon ElastiCache for Redis cluster to store customer session information.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use AWS Systems Manager Application Manager in the application to manage user session information.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 837081,
          "date": "Sun 12 Mar 2023 14:59",
          "username": "\t\t\t\tKarlos99\t\t\t",
          "content": "The application must store session data durably : DynamoDB",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 836703,
          "date": "Sun 12 Mar 2023 04:35",
          "username": "\t\t\t\tfruto123\t\t\t",
          "content": "It is A and D.  Proof is in link below.<br><br>https://aws.amazon.com/caching/session-management/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 835580,
          "date": "Sat 11 Mar 2023 03:26",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "bdbdbdbdbd<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>care to explain?</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 837551,
          "date": "Mon 13 Mar 2023 03:22",
          "username": "\t\t\t\tfkie4\t\t\t",
          "content": "care to explain?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 835410,
          "date": "Fri 10 Mar 2023 21:28",
          "username": "\t\t\t\tcegama543\t\t\t",
          "content": "A.  Turn on the sticky sessions feature (session affinity) on the ALB. D.  Deploy an Amazon ElastiCache for Redis cluster to store customer session information.<br><br>The best solution for optimizing customer session management during transactions is to turn on the sticky sessions feature (session affinity) on the ALB to ensure that each client request is routed to the same web server in the Auto Scaling group. This will ensure that the customer session is maintained throughout the transaction.<br><br>In addition, the company should deploy an Amazon ElastiCache for Redis cluster to store customer session information durably. This will ensure that the customer session information is readily available and easily accessible during a transaction.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 835409,
          "date": "Fri 10 Mar 2023 21:27",
          "username": "\t\t\t\tcegama543\t\t\t",
          "content": "A company hosts a three-tier ecommerce application on a fleet of Amazon EC2 instances. The instances run in an Auto Scaling group behind an Application Load Balancer (ALB). All ecommerce data is stored in an Amazon RDS for MariaDB Multi-AZ DB instance.<br><br>The company wants to optimize customer session management during transactions. The application must store session data durably.<br><br>Which solutions will meet these requirements? (Choose two.)<br>A.  Turn on the sticky sessions feature (session affinity) on the ALB. B.  Use an Amazon DynamoDB table to store customer session information.C.  Deploy an Amazon Cognito user pool to manage user session information.D.  Deploy an Amazon ElastiCache for Redis cluster to store customer session information.E.  Use AWS Systems Manager Application Manager in the application to manage user session information.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        }
      ]
    },
    {
      "question_id": "#391",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs a backup strategy for its three-tier stateless web application. The web application runs on Amazon EC2 instances in an Auto Scaling group with a dynamic scaling policy that is configured to respond to scaling events. The database tier runs on Amazon RDS for PostgreSQL. The web application does not require temporary local storage on the EC2 instances. The company's recovery point objective (RPO) is 2 hours.<br><br>The backup strategy must maximize scalability and optimize resource utilization for this environment.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#391",
          "answers": [
            {
              "choice": "<p>A. Take snapshots of Amazon Elastic Block Store (Amazon EBS) volumes of the EC2 instances and database every 2 hours to meet the RPO.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure a snapshot lifecycle policy to take Amazon Elastic Block Store (Amazon EBS) snapshots. Enable automated backups in Amazon RDS to meet the RPO.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Retain the latest Amazon Machine Images (AMIs) of the web and application tiers. Enable automated backups in Amazon RDS and use point-in-time recovery to meet the RPO.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Take snapshots of Amazon Elastic Block Store (Amazon EBS) volumes of the EC2 instances every 2 hours. Enable automated backups in Amazon RDS and use point-in-time recovery to meet the RPO.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 835804,
          "date": "Sat 11 Mar 2023 10:54",
          "username": "\t\t\t\tktulu2602\t\t\t",
          "content": "Option B is the most appropriate solution for the given requirements.<br><br>With this solution, a snapshot lifecycle policy can be created to take Amazon Elastic Block Store (Amazon EBS) snapshots periodically, which will ensure that EC2 instances can be restored in the event of an outage. Additionally, automated backups can be enabled in Amazon RDS for PostgreSQL to take frequent backups of the database tier. This will help to minimize the RPO to 2 hours.<br><br>Taking snapshots of Amazon EBS volumes of the EC2 instances and database every 2 hours (Option A) may not be cost-effective and efficient, as this approach would require taking regular backups of all the instances and volumes, regardless of whether any changes have occurred or not. Retaining the latest Amazon Machine Images (AMIs) of the web and application tiers (Option C) would provide only an image backup and not a data backup, which is required for the database tier. Taking snapshots of Amazon EBS volumes of the EC2 instances every 2 hours and enabling automated backups in Amazon RDS and using point-in-time recovery (Option D) would result in higher costs and may not be necessary to meet the RPO requirement of 2 hours.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 835407,
          "date": "Fri 10 Mar 2023 21:25",
          "username": "\t\t\t\tcegama543\t\t\t",
          "content": "B.  Configure a snapshot lifecycle policy to take Amazon Elastic Block Store (Amazon EBS) snapshots. Enable automated backups in Amazon RDS to meet the RPO.<br><br>The best solution is to configure a snapshot lifecycle policy to take Amazon Elastic Block Store (Amazon EBS) snapshots, and enable automated backups in Amazon RDS to meet the RPO. An RPO of 2 hours means that the company needs to ensure that the backup is taken every 2 hours to minimize data loss in case of a disaster. Using a snapshot lifecycle policy to take Amazon EBS snapshots will ensure that the web and application tier can be restored quickly and efficiently in case of a disaster. Additionally, enabling automated backups in Amazon RDS will ensure that the database tier can be restored quickly and efficiently in case of a disaster. This solution maximizes scalability and optimizes resource utilization because it uses automated backup solutions built into AWS.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#392",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to deploy a new public web application on AWS. The application includes a web server tier that uses Amazon EC2 instances. The application also includes a database tier that uses an Amazon RDS for MySQL DB instance.<br><br>The application must be secure and accessible for global customers that have dynamic IP addresses.<br><br>How should a solutions architect configure the security groups to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#392",
          "answers": [
            {
              "choice": "<p>A. Configure the security group for the web servers to allow inbound traffic on port 443 from 0.0.0.0/0. Configure the security group for the DB instance to allow inbound traffic on port 3306 from the security group of the web servers.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the security group for the web servers to allow inbound traffic on port 443 from the IP addresses of the customers. Configure the security group for the DB instance to allow inbound traffic on port 3306 from the security group of the web servers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the security group for the web servers to allow inbound traffic on port 443 from the IP addresses of the customers. Configure the security group for the DB instance to allow inbound traffic on port 3306 from the IP addresses of the customers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the security group for the web servers to allow inbound traffic on port 443 from 0.0.0.0/0. Configure the security group for the DB instance to allow inbound traffic on port 3306 from 0.0.0.0/0.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 836397,
          "date": "Sat 11 Mar 2023 19:32",
          "username": "\t\t\t\tkprakashbehera\t\t\t",
          "content": "Ans - A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 835150,
          "date": "Fri 10 Mar 2023 16:18",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "aaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#393",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A payment processing company records all voice communication with its customers and stores the audio files in an Amazon S3 bucket. The company needs to capture the text from the audio files. The company must remove from the text any personally identifiable information (PII) that belongs to customers.<br><br>What should a solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#393",
          "answers": [
            {
              "choice": "<p>A. Process the audio files by using Amazon Kinesis Video Streams. Use an AWS Lambda function to scan for known PII patterns.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. When an audio file is uploaded to the S3 bucket, invoke an AWS Lambda function to start an Amazon Textract task to analyze the call recordings.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure an Amazon Transcribe transcription job with PII redaction turned on. When an audio file is uploaded to the S3 bucket, invoke an AWS Lambda function to start the transcription job. Store the output in a separate S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon Connect contact flow that ingests the audio files with transcription turned on. Embed an AWS Lambda function to scan for known PII patterns. Use Amazon EventBridge to start the contact flow when an audio file is uploaded to the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 836724,
          "date": "Sun 12 Mar 2023 05:59",
          "username": "\t\t\t\tRuhi02\t\t\t",
          "content": "answer c",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 836196,
          "date": "Sat 11 Mar 2023 16:09",
          "username": "\t\t\t\tKAUS2\t\t\t",
          "content": "Option C is correct..",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#394",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a multi-tier ecommerce web application in the AWS Cloud. The application runs on Amazon EC2 instances with an Amazon RDS for MySQL Multi-AZ DB instance. Amazon RDS is configured with the latest generation DB instance with 2,000 GB of storage in a General Purpose SSD (gp3) Amazon Elastic Block Store (Amazon EBS) volume. The database performance affects the application during periods of high demand.<br><br>A database administrator analyzes the logs in Amazon CloudWatch Logs and discovers that the application performance always degrades when the number of read and write IOPS is higher than 20,000.<br><br>What should a solutions architect do to improve the application performance?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#394",
          "answers": [
            {
              "choice": "<p>A. Replace the volume with a magnetic volume.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Increase the number of IOPS on the gp3 volume.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Replace the volume with a Provisioned IOPS SSD (io2) volume.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Replace the 2,000 GB gp3 volume with two 1,000 GB gp3 volumes.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 836179,
          "date": "Sat 11 Mar 2023 15:57",
          "username": "\t\t\t\tKAUS2\t\t\t",
          "content": "Option \\\"C\\\" is the correct one - <br>Provisioned IOPS (PIOPS) SSD - <br> - Critical business applications with sustained IOPS performance Or applications that need more than 16,000 IOPS<br>- Great for databases workloads (sensitive to storage perf and consistency)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 835811,
          "date": "Sat 11 Mar 2023 11:11",
          "username": "\t\t\t\tktulu2602\t\t\t",
          "content": "Provisioned IOPS SSD provides predictable and consistent IOPS performance, which is necessary for database workloads.<br><br>Option A of replacing the volume with a magnetic volume is not a suitable solution since magnetic volumes are designed for infrequent access and cannot provide the required performance for database workloads.<br><br>Option B of increasing the number of IOPS on the gp3 volume may not solve the issue since gp3 volumes are designed to provide burstable IOPS performance, which means that they can provide high performance but for a limited duration.<br><br>Option D of replacing the 2,000 GB gp3 volume with two 1,000 GB gp3 volumes is not an optimal solution because it does not address the underlying issue of inconsistent and unpredictable IOPS performance.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 835157,
          "date": "Fri 10 Mar 2023 16:29",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "cccccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#395",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An IAM user made several configuration changes to AWS resources in their company's account during a production deployment last week. A solutions architect learned that a couple of security group rules are not configured as desired. The solutions architect wants to confirm which IAM user was responsible for making changes.<br><br>Which service should the solutions architect use to find the desired information?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#395",
          "answers": [
            {
              "choice": "<p>A. Amazon GuardDuty<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Amazon Inspector<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. AWS CloudTrail<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. AWS Config<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 837547,
          "date": "Mon 13 Mar 2023 03:14",
          "username": "\t\t\t\tdcp\t\t\t",
          "content": "C.  AWS CloudTrail",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 836401,
          "date": "Sat 11 Mar 2023 19:33",
          "username": "\t\t\t\tkprakashbehera\t\t\t",
          "content": "CloudTrail logs will tell who did that",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 836177,
          "date": "Sat 11 Mar 2023 15:54",
          "username": "\t\t\t\tKAUS2\t\t\t",
          "content": "Option \\\"C\\\" AWS CloudTrail is correct.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 835648,
          "date": "Sat 11 Mar 2023 05:12",
          "username": "\t\t\t\tNithin1119\t\t\t",
          "content": "cccccc",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 835395,
          "date": "Fri 10 Mar 2023 21:14",
          "username": "\t\t\t\tcegama543\t\t\t",
          "content": "C.  AWS CloudTrail<br><br>The best option is to use AWS CloudTrail to find the desired information. AWS CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing of AWS account activities. CloudTrail can be used to log all changes made to resources in an AWS account, including changes made by IAM users, EC2 instances, AWS management console, and other AWS services. By using CloudTrail, the solutions architect can identify the IAM user who made the configuration changes to the security group rules.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#396",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has implemented a self-managed DNS service on AWS. The solution consists of the following:<br><br>• Amazon EC2 instances in different AWS Regions<br>• Endpoints of a standard accelerator in AWS Global Accelerator<br><br>The company wants to protect the solution against DDoS attacks.<br><br>What should a solutions architect do to meet this requirement?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#396",
          "answers": [
            {
              "choice": "<p>A. Subscribe to AWS Shield Advanced. Add the accelerator as a resource to protect.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Subscribe to AWS Shield Advanced. Add the EC2 instances as resources to protect.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS WAF web ACL that includes a rate-based rule. Associate the web ACL with the accelerator.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS WAF web ACL that includes a rate-based rule. Associate the web ACL with the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 835814,
          "date": "Sat 11 Mar 2023 11:14",
          "username": "\t\t\t\tktulu2602\t\t\t",
          "content": "AWS Shield is a managed service that provides protection against Distributed Denial of Service (DDoS) attacks for applications running on AWS. AWS Shield Standard is automatically enabled to all AWS customers at no additional cost. AWS Shield Advanced is an optional paid service. AWS Shield Advanced provides additional protections against more sophisticated and larger attacks for your applications running on Amazon Elastic Compute Cloud (EC2), Elastic Load Balancing (ELB), Amazon CloudFront, AWS Global Accelerator, and Route 53.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 835171,
          "date": "Fri 10 Mar 2023 16:41",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "aaaaa<br>accelator can not be attached to shield<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Yes it can:<br>AWS Shield is a managed service that provides protection against Distributed Denial of Service (DDoS) attacks for applications running on AWS. AWS Shield Standard is automatically enabled to all AWS customers at no additional cost. AWS Shield Advanced is an optional paid service. AWS Shield Advanced provides additional protections against more sophisticated and larger attacks for your applications running on Amazon Elastic Compute Cloud (EC2), Elastic Load Balancing (ELB), Amazon CloudFront, AWS Global Accelerator, and Route 53.</li><li>bbbbbbbbb</li><li>Your origin servers can be Amazon Simple Storage Service (S3), Amazon EC2, Elastic Load Balancing, or a custom server outside of AWS. You can also enable AWS Shield Advanced directly on Elastic Load Balancing or Amazon EC2 in the following AWS Regions - Northern Virginia, Ohio, Oregon, Northern California, Montreal, São Paulo, Ireland, Frankfurt, London, Paris, Stockholm, Singapore, Tokyo, Sydney, Seoul, Mumbai, Milan, and Cape Town.<br>My answer is B</li><li>https://docs.aws.amazon.com/waf/latest/developerguide/ddos-event-mitigation-logic-gax.html<br><br>Sorry I meant A</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 835813,
          "date": "Sat 11 Mar 2023 11:14",
          "username": "\t\t\t\tktulu2602\t\t\t",
          "content": "Yes it can:<br>AWS Shield is a managed service that provides protection against Distributed Denial of Service (DDoS) attacks for applications running on AWS. AWS Shield Standard is automatically enabled to all AWS customers at no additional cost. AWS Shield Advanced is an optional paid service. AWS Shield Advanced provides additional protections against more sophisticated and larger attacks for your applications running on Amazon Elastic Compute Cloud (EC2), Elastic Load Balancing (ELB), Amazon CloudFront, AWS Global Accelerator, and Route 53.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 835581,
          "date": "Sat 11 Mar 2023 03:31",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "bbbbbbbbb<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Your origin servers can be Amazon Simple Storage Service (S3), Amazon EC2, Elastic Load Balancing, or a custom server outside of AWS. You can also enable AWS Shield Advanced directly on Elastic Load Balancing or Amazon EC2 in the following AWS Regions - Northern Virginia, Ohio, Oregon, Northern California, Montreal, São Paulo, Ireland, Frankfurt, London, Paris, Stockholm, Singapore, Tokyo, Sydney, Seoul, Mumbai, Milan, and Cape Town.<br>My answer is B</li><li>https://docs.aws.amazon.com/waf/latest/developerguide/ddos-event-mitigation-logic-gax.html<br><br>Sorry I meant A</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 837122,
          "date": "Sun 12 Mar 2023 15:44",
          "username": "\t\t\t\tenzomv\t\t\t",
          "content": "Your origin servers can be Amazon Simple Storage Service (S3), Amazon EC2, Elastic Load Balancing, or a custom server outside of AWS. You can also enable AWS Shield Advanced directly on Elastic Load Balancing or Amazon EC2 in the following AWS Regions - Northern Virginia, Ohio, Oregon, Northern California, Montreal, São Paulo, Ireland, Frankfurt, London, Paris, Stockholm, Singapore, Tokyo, Sydney, Seoul, Mumbai, Milan, and Cape Town.<br>My answer is B<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/waf/latest/developerguide/ddos-event-mitigation-logic-gax.html<br><br>Sorry I meant A</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 837128,
          "date": "Sun 12 Mar 2023 15:52",
          "username": "\t\t\t\tenzomv\t\t\t",
          "content": "https://docs.aws.amazon.com/waf/latest/developerguide/ddos-event-mitigation-logic-gax.html<br><br>Sorry I meant A",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#397",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company needs to run a scheduled daily job to aggregate and filter sales records for analytics. The company stores the sales records in an Amazon S3 bucket. Each object can be up to 10 GB in size. Based on the number of sales events, the job can take up to an hour to complete. The CPU and memory usage of the job are constant and are known in advance.<br><br>A solutions architect needs to minimize the amount of operational effort that is needed for the job to run.<br><br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#397",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Lambda function that has an Amazon EventBridge notification. Schedule the EventBridge event to run once a day.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Lambda function. Create an Amazon API Gateway HTTP API, and integrate the API with the function. Create an Amazon EventBridge scheduled event that calls the API and invokes the function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon Elastic Container Service (Amazon ECS) cluster with an AWS Fargate launch type. Create an Amazon EventBridge scheduled event that launches an ECS task on the cluster to run the job.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon Elastic Container Service (Amazon ECS) cluster with an Amazon EC2 launch type and an Auto Scaling group with at least one EC2 instance. Create an Amazon EventBridge scheduled event that launches an ECS task on the cluster to run the job.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 835816,
          "date": "Sat 11 Mar 2023 11:16",
          "username": "\t\t\t\tktulu2602\t\t\t",
          "content": "The requirement is to run a daily scheduled job to aggregate and filter sales records for analytics in the most efficient way possible. Based on the requirement, we can eliminate option A and B since they use AWS Lambda which has a limit of 15 minutes of execution time, which may not be sufficient for a job that can take up to an hour to complete.<br><br>Between options C and D, option C is the better choice since it uses AWS Fargate which is a serverless compute engine for containers that eliminates the need to manage the underlying EC2 instances, making it a low operational effort solution. Additionally, Fargate also provides instant scale-up and scale-down capabilities to run the scheduled job as per the requirement.<br><br>Therefore, the correct answer is:<br>C.  Create an Amazon Elastic Container Service (Amazon ECS) cluster with an AWS Fargate launch type. Create an Amazon EventBridge scheduled event that launches an ECS task on the cluster to run the job.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#398",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to transfer 600 TB of data from its on-premises network-attached storage (NAS) system to the AWS Cloud. The data transfer must be complete within 2 weeks. The data is sensitive and must be encrypted in transit. The company's internet connection can support an upload speed of 100 Mbps.<br><br>Which solution meets these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#398",
          "answers": [
            {
              "choice": "<p>A. Use Amazon S3 multi-part upload functionality to transfer the files over HTTPS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a VPN connection between the on-premises NAS system and the nearest AWS Region. Transfer the data over the VPN connection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the AWS Snow Family console to order several AWS Snowball Edge Storage Optimized devices. Use the devices to transfer the data to Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up a 10 Gbps AWS Direct Connect connection between the company location and the nearest AWS Region. Transfer the data over a VPN connection into the Region to store the data in Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 836154,
          "date": "Sat 11 Mar 2023 15:41",
          "username": "\t\t\t\tKAUS2\t\t\t",
          "content": "Best option is to use multiple AWS Snowball Edge Storage Optimized devices. Option \\\"C\\\" is the correct one.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 835818,
          "date": "Sat 11 Mar 2023 11:19",
          "username": "\t\t\t\tktulu2602\t\t\t",
          "content": "All others are limited by the bandwidth limit<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Or provisioning time in the D case</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 835820,
          "date": "Sat 11 Mar 2023 11:19",
          "username": "\t\t\t\tktulu2602\t\t\t",
          "content": "Or provisioning time in the D case",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 835612,
          "date": "Sat 11 Mar 2023 04:27",
          "username": "\t\t\t\tKZM\t\t\t",
          "content": "It is C.  Snowball (from Snow Family).",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 835386,
          "date": "Fri 10 Mar 2023 21:08",
          "username": "\t\t\t\tcegama543\t\t\t",
          "content": "C.  Use the AWS Snow Family console to order several AWS Snowball Edge Storage Optimized devices. Use the devices to transfer the data to Amazon S3.<br><br>The best option is to use the AWS Snow Family console to order several AWS Snowball Edge Storage Optimized devices and use the devices to transfer the data to Amazon S3. Snowball Edge is a petabyte-scale data transfer device that can help transfer large amounts of data securely and quickly. Using Snowball Edge can be the most cost-effective solution for transferring large amounts of data over long distances and can help meet the requirement of transferring 600 TB of data within two weeks.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#399",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial company hosts a web application on AWS. The application uses an Amazon API Gateway Regional API endpoint to give users the ability to retrieve current stock prices. The company's security team has noticed an increase in the number of API requests. The security team is concerned that HTTP flood attacks might take the application offline.<br><br>A solutions architect must design a solution to protect the application from this type of attack.<br><br>Which solution meets these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#399",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon CloudFront distribution in front of the API Gateway Regional API endpoint with a maximum TTL of 24 hours.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a Regional AWS WAF web ACL with a rate-based rule. Associate the web ACL with the API Gateway stage.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon CloudWatch metrics to monitor the Count metric and alert the security team when the predefined rate is reached.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon CloudFront distribution with Lambda@Edge in front of the API Gateway Regional API endpoint. Create an AWS Lambda function to block requests from IP addresses that exceed the predefined rate.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 835181,
          "date": "Fri 10 Mar 2023 16:49",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "bbbbbbbb",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
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
    }
  ]
}