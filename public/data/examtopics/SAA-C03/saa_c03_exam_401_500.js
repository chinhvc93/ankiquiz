var SAA_C03_Exam_401_500 = {
  "msg": "Quiz Questions",
  "data": [
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
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#402",
          "answers": [
            {
              "choice": "<p>A. Update the Kinesis Data Streams default settings by modifying the data retention period.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Update the application to use the Kinesis Producer Library (KPL) to send the data to Kinesis Data Streams.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the number of Kinesis shards to handle the throughput of the data that is sent to Kinesis Data Streams.<br></p>",
              "correct": true,
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
          "id": 837191,
          "date": "Sun 12 Mar 2023 17:06",
          "username": "\t\t\t\tKarlos99\t\t\t",
          "content": "https://docs.aws.amazon.com/streams/latest/dev/developing-producers-with-kpl.html<br><br>Role of the KPL<br>The KPL is an easy-to-use, highly configurable library that helps you write to a Kinesis data stream. It acts as an intermediary between your producer application code and the Kinesis Data Streams API actions. The KPL performs the following primary tasks:<br>Writes to one or more Kinesis data streams with an automatic and configurable retry mechanism<br>Collects records and uses PutRecords to write multiple records to multiple shards per request<br>Aggregates user records to increase payload size and improve throughput",
          "upvote_count": "1",
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
          "id": 835380,
          "date": "Fri 10 Mar 2023 21:04",
          "username": "\t\t\t\tcegama543\t\t\t",
          "content": "C.  Update the number of Kinesis shards to handle the throughput of the data that is sent to Kinesis Data Streams.<br><br>The best option is to update the number of Kinesis shards to handle the throughput of the data that is sent to Kinesis Data Streams. Kinesis Data Streams scales horizontally by increasing or decreasing the number of shards, which controls the throughput capacity of the stream. By increasing the number of shards, the application will be able to send more data to Kinesis Data Streams, which can help ensure that S3 receives all the data.",
          "upvote_count": "4",
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
      "general_feedback": "<p>Correct Answer: AE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#405",
          "answers": [
            {
              "choice": "<p>A. Use AWS Auto Scaling to adjust the ALB capacity based on request rate.<br></p>",
              "correct": true,
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
              "correct": false,
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
          "content": "why not CE?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Characteristics of security group rules<br><br>You can specify allow rules, but not deny rules.<br>https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html</li></ul>",
          "upvote_count": "2",
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
          "id": 835644,
          "date": "Sat 11 Mar 2023 05:07",
          "username": "\t\t\t\tRuhi02\t\t\t",
          "content": "Answer should be B. . there is typo mistake in B.  Correct Answer is :Use AWS Global Accelerator. Create a Network Load Balancer (NLB) in each of the two Regions as an endpoint. Create an Amazon Elastic Container Service (Amazon ECS) cluster with the Fargate launch type. Create an ECS service on the cluster. Set the ECS service as the target for the NLB.  Process the data in Amazon ECS.",
          "upvote_count": "2",
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
          "id": 838018,
          "date": "Mon 13 Mar 2023 16:15",
          "username": "\t\t\t\telearningtakai\t\t\t",
          "content": "Amazon EFS is a scalable and fully-managed file storage service that is designed to provide high availability and durability. It can be accessed by multiple EC2 instances across multiple Availability Zones simultaneously. Additionally, it offers automatic and instantaneous data replication across different availability zones within a region, which makes it resilient to failures.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
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
          "id": 835223,
          "date": "Fri 10 Mar 2023 17:29",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "cccccccccccccccccccc",
          "upvote_count": "1",
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
          "upvote_count": "3",
          "selected_answers": ""
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
          "id": 835653,
          "date": "Sat 11 Mar 2023 05:25",
          "username": "\t\t\t\tRuhi02\t\t\t",
          "content": "Answer B. . SES is meant for sending high volume e-mail efficiently and securely.<br>SNS is meant as a channel publisher/subscriber service",
          "upvote_count": "2",
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
    }
  ]
}