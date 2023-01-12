var DOP_C01_Part5 = 
{
    "msg": "Quiz Questions",
    "data": [
      {
        "question_id": "#401",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>What is required to achieve gigabit network throughput on EC2? You already selected cluster-compute, 10GB instances with enhanced networking, and your workload is already network-bound, but you are not seeing 10 gigabit speeds.<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#401",
            "answers": [
              {
                "choice": "<p>A. Enable biplex networking on your servers, so packets are non-blocking in both directions and there's no switching overhead.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Ensure the instances are in different VPCs so you don't saturate the Internet Gateway on any one VPC. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Select PIOPS for your drives and mount several, so you can provision sufficient disk throughput.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use a placement group for your instances so the instances are physically near each other in the same Availability Zone.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 401 discussion",
        "discusstion": [
          {
            "id": 514792,
            "date": "Sun 02 Jan 2022 04:04",
            "username": "nqthien041292",
            "content": "Vote D",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 377203,
            "date": "Sun 17 Oct 2021 15:40",
            "username": "peddyua",
            "content": "For instances that are enabled for enhanced networking, the following rules apply:<br>Instances within a cluster placement group can use up to 10 Gbps for single-flow traffic. Instances that are not within a cluster placement group can use up to 5 Gbps for single-flow traffic.<br><br>Answer D",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#402",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>If you want CloudFormation stack status updates to show up in a continuous delivery system in as close to real time as possible, how should you achieve this?<br></p>",
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
                "choice": "<p>A. Use a long-poll on the Resources object in your CloudFormation stack and display those state changes in the UI for the system.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use a long-poll on the <code>ListStacksAPI</code> call for your CloudFormation stack and display those state changes in the UI for the system.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Subscribe your continuous delivery system to an SNS topic that you also tell your CloudFormation stack to publish events into.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Subscribe your continuous delivery system to an SQS queue that you also tell your CloudFormation stack to publish events into.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 402 discussion",
        "discusstion": [
          {
            "id": 581228,
            "date": "Tue 05 Apr 2022 13:55",
            "username": "jj22222",
            "content": "C.  Subscribe your continuous delivery system to an SNS topic that you also tell your CloudFormation stack to publish events into.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 534526,
            "date": "Fri 28 Jan 2022 09:09",
            "username": "SonamDhingra",
            "content": "Option-C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 503931,
            "date": "Sat 18 Dec 2021 00:14",
            "username": "RightAnswers",
            "content": "AWS::CloudFormation::Stack Resource type allows you to specify the SNS Topic (see AWS::CloudFormation::Stack docs - link: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stack.html) with the NotificationARNs (Link: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stack.html#cfn-cloudformation-stack-notificationarns) property.<br><br>You can create an SNS Topic in CloudFormation (using AWS::SNS::Topic ) and you can also add CloudWatch Alarms (using AWS::CloudWatch::Alarm ) which can then trigger SNS topics (either an existing one or one that you create in the CFN template) by passing it in with the AlarmActions property",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 497482,
            "date": "Thu 09 Dec 2021 10:02",
            "username": "I_heart_shuffle_girls",
            "content": "I agree with C. ",
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
        "question_text": "<p>What does it mean if you have zero IOPS and a non-empty I/O queue for all EBS volumes attached to a running EC2 instance?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#403",
            "answers": [
              {
                "choice": "<p>A. The I/O queue is buffer flushing.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Your EBS disk head(s) is/are seeking magnetic stripes.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. The EBS volume is unavailable.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. You need to re-mount the EBS volume in the OS.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 403 discussion",
        "discusstion": [
          {
            "id": 581213,
            "date": "Tue 05 Apr 2022 13:42",
            "username": "jj22222",
            "content": "C.  The EBS volume is unavailable.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 497472,
            "date": "Thu 09 Dec 2021 09:53",
            "username": "I_heart_shuffle_girls",
            "content": "C is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 481919,
            "date": "Fri 19 Nov 2021 17:26",
            "username": "Ramu12",
            "content": "C<br><br>=E2=80=9CUnavailable=E2=80=9D and =E2=80=9CUnavailability=E2=80=9D mean:<br>For the Region-Level SLA applicable to Amazon EBS, when all of your attached volumes deployed in two or more AZs in the same AWS region (or, if there is only one AZ in the AWS region, that AZ and an AZ in another AWS region) perform zero read write IO, with pending IO in the queue.<br><br>Refer: https://aws.amazon.com/compute/sla/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#404",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>From a compliance and security perspective, which of these statements is true?<br></p>",
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
                "choice": "<p>A. You do not ever need to rotate access keys for AWS IAM Users.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. You do not ever need to rotate access keys for AWS IAM Roles, nor AWS IAM Users.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. None of the other statements is true.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. You do not ever need to rotate access keys for AWS IAM Roles.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 404 discussion",
        "discusstion": [
          {
            "id": 625847,
            "date": "Fri 01 Jul 2022 20:41",
            "username": "nebojsaMa",
            "content": "By assuming the role with the STS example:<br>aws sts assume-role --role-arn \\\"arn:aws:iam::123456789012:role/example-role\\\" --role-session-name AWSCLI-Session<br>This is a security Token with secret key, secret access key and the session token which is valid for only few hours.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 606379,
            "date": "Tue 24 May 2022 02:37",
            "username": "SHAAHIBHUSHANAWS",
            "content": "C As roles does not have access keys. Temporary access tokens are generated at run time for 15 min or configurable time.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 579953,
            "date": "Sat 02 Apr 2022 19:02",
            "username": "jj22222",
            "content": "D is right, it is roles",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 497432,
            "date": "Thu 09 Dec 2021 09:12",
            "username": "I_heart_shuffle_girls",
            "content": "I believe D is correct.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 479165,
            "date": "Tue 16 Nov 2021 05:19",
            "username": "acloudguru",
            "content": "D, role has tempo key handled by aws ,you do not have to rotate, but for users, the SSH keysshould be rotated in case of lost",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 390540,
            "date": "Sun 24 Oct 2021 03:42",
            "username": "KMoneyafantict",
            "content": "I think its C because:<br>In an earlier post, we described Identity and Access Management (IAM) roles for Amazon EC2. If you run applications on EC2 that need access to AWS services, we strongly recommend using this feature. Roles use temporary security credentials that auto-expire and auto-renew, so you don't have to worry about access key rotation =E2=80=93 AWS does it for you. However, if you are running applications somewhere other than on EC2, you should add access key rotation to your application management process. In this post, Cristian Ilac, software development manager on the IAM team, will walk you through the steps to rotate access keys for an IAM user.<br>https://aws.amazon.com/blogs/security/how-to-rotate-access-keys-for-iam-users/This url shows how to rotate access keys for an IAM user, not for IAM role, so I think it's D. ",
            "upvote_count": "34",
            "selected_answers": ""
          },
          {
            "id": 490434,
            "date": "Tue 30 Nov 2021 06:23",
            "username": "afantict",
            "content": "This url shows how to rotate access keys for an IAM user, not for IAM role, so I think it's D. ",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#405",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Which of these configuration or deployment practices is a security risk for RDS?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#405",
            "answers": [
              {
                "choice": "<p>A. Storing SQL function code in plaintext<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Non-Multi-AZ RDS instance<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Having RDS and EC2 instances exist in the same subnet<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. RDS in a public subnet<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 405 discussion",
        "discusstion": [
          {
            "id": 497527,
            "date": "Thu 09 Dec 2021 10:27",
            "username": "I_heart_shuffle_girls",
            "content": "D is correct.",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#406",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Which of these is not a reason a Multi-AZ RDS instance will failover?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#406",
            "answers": [
              {
                "choice": "<p>A. An Availability Zone outage<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. A manual failover of the DB instance was initiated using Reboot with failover<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. To autoscale to a higher instance class<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. The primary DB instance fails<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 406 discussion",
        "discusstion": [
          {
            "id": 497635,
            "date": "Thu 09 Dec 2021 11:52",
            "username": "I_heart_shuffle_girls",
            "content": "C is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#407",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You need to create an audit log of all changes to customer banking data. You use DynamoDB to store this customer banking data. It is important not to lose any information due to server failures.<br>What is an elegant way to accomplish this?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#407",
            "answers": [
              {
                "choice": "<p>A. Use a DynamoDB StreamSpecification and stream all changes to AWS Lambda. Log the changes to AWS CloudWatch Logs, removing sensitive information before logging.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Before writing to DynamoDB, do a pre-write acknoledgment to disk on the application server, removing sensitive information before logging. Periodically rotate these log files into S3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use a DynamoDB StreamSpecification and periodically flush to an EC2 instance store, removing sensitive information before putting the objects. Periodically flush these batches to S3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Before writing to DynamoDB, do a pre-write acknoledgment to disk on the application server, removing sensitive information before logging. Periodically pipe these files into CloudWatch Logs.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 407 discussion",
        "discusstion": [
          {
            "id": 388856,
            "date": "Sat 25 Sep 2021 03:56",
            "username": "D2",
            "content": "Answer A",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#408",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You need your API backed by DynamoDB to stay online during a total regional AWS failure. You can tolerate a couple minutes of lag or slowness during a large failure event, but the system should recover with normal operation after those few minutes.<br>What is a good approach?<br></p>",
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
                "choice": "<p>A. Set up DynamoDB cross-region replication in a master-standby configuration, with a single standby in another region. Create an Auto Scaling Group behind an ELB in each of the two regions DynamoDB is running in. Add a Route53 Latency DNS Record with DNS Failover, using the ELBs in the two regions as the resource records.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Set up a DynamoDB Multi-Region table. Create an Auto Scaling Group behind an ELB in each of the two regions DynamoDB is running in. Add a Route53 Latency DNS Record with DNS Failover, using the ELBs in the two regions as the resource records.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Set up a DynamoDB Multi-Region table. Create a cross-region ELB pointing to a cross-region Auto Scaling Group, and direct a Route53 Latency DNS Record with DNS Failover to the crossregion ELB. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Set up DynamoDB cross-region replication in a master-standby configuration, with a single standby in another region. Create a cross-region ELB pointing to a cross-region Auto Scaling Group, and direct a Route53 Latency DNS Record with DNS Failover to the cross-region ELB. <br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 408 discussion",
        "discusstion": [
          {
            "id": 560576,
            "date": "Fri 04 Mar 2022 08:03",
            "username": "[Removed]",
            "content": "BELB cannt cross region",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 521810,
            "date": "Wed 12 Jan 2022 00:05",
            "username": "RightAnswersRightAnswers",
            "content": "B<br>Looks like this question pre-dated the availability of DDB Global tables. I would assume multi-master tables refer to Global Tables.multi-region **",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 521811,
            "date": "Wed 12 Jan 2022 00:06",
            "username": "RightAnswers",
            "content": "multi-region **",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 403430,
            "date": "Wed 29 Sep 2021 05:55",
            "username": "MBJamesStelSen",
            "content": "I think B is the correct answer, assuming it means DynamoDB Global table.<br>A wouldn't work with latency-based DNS, because traffic would be sent in the standby region as well and the dynamodb table there would receive writes not replicated elsewhere.Yes. Option- B is correct",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 429806,
            "date": "Thu 07 Oct 2021 04:12",
            "username": "StelSen",
            "content": "Yes. Option- B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#410",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your company wants to understand where cost is coming from in the company's production AWS account. There are a number of applications and services running at any given time. Without expending too much initial development time, how best can you give the business a good understanding of which applications cost the most per month to operate?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#410",
            "answers": [
              {
                "choice": "<p>A. Create an automation script which periodically creates AWS Support tickets requesting detailed intra-month information about your bill.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use custom CloudWatch Metrics in your system, and put a metric data point whenever cost is incurred.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use AWS Cost Allocation Tagging for all resources which support it. Use the Cost Explorer to analyze costs throughout the month.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use the AWS Price API and constantly running resource inventory scripts to calculate total price based on multiplication of consumed resources over time.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 410 discussion",
        "discusstion": [
          {
            "id": 388862,
            "date": "Sun 31 Oct 2021 17:31",
            "username": "D2",
            "content": "Answer C",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#411",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>There is a very serious outage at AWS. EC2 is not affected, but your EC2 instance deployment scripts stopped working in the region with the outage.<br>What might be the issue?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#411",
            "answers": [
              {
                "choice": "<p>A. The AWS Console is down, so your CLI commands do not work.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. S3 is unavailable, so you can't create EBS volumes from a snapshot you use to deploy new volumes.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. AWS turns off the <code>DeployCode</code> API call when there are major outages, to protect from system floods.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. None of the other answers make sense. If EC2 is not affected, it must be some other issue.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 411 discussion",
        "discusstion": [
          {
            "id": 641567,
            "date": "Wed 03 Aug 2022 06:15",
            "username": "hubekpeter",
            "content": "A, you're not interacting with this api<br>B, s3 doesn't have nothing with ebs<br>C, doesn't make sense<br>D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 598616,
            "date": "Sun 08 May 2022 18:30",
            "username": "BKcloud",
            "content": "S3 is most reliable and available isn't it??",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 583195,
            "date": "Sat 09 Apr 2022 09:52",
            "username": "friendofpenguin",
            "content": "EC2 instance deployment scripts - could refer to scripts stored in EBS volumes (part of an AMI snapshot) and if S3 has an outage, the volumes and hence the EC2s are affected too<br>I will stick to B<br>The only reference I find explicitly saying AMIs are stored in S3 is the welcoming page below<br>https://aws.amazon.com/ebs/snapshots/<br>Amazon EBS Snapshots are a convenient way to back up your EBS volumes. The snapshots are automatically saved to Amazon Simple Storage Service (Amazon S3) for long-term retention.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 509900,
            "date": "Mon 27 Dec 2021 00:23",
            "username": "RightAnswers",
            "content": "EC2 instance deployment script could be a CloudFormation template or an API call - the keyword is \\\"Script\\\".<br>Also looking at the question, the key word is \\\"area\\\" - which can be correlatedto an AZ. An area is not a region. S3 is replicated in all AZs.<br>The question is vague - so D is the most probable answer.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 508050,
            "date": "Thu 23 Dec 2021 17:56",
            "username": "Bad_Mat",
            "content": "How to S3 related to snapshots? I think answer is D",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#412",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Which of the following tools does not directly support AWS OpsWorks, for monitoring your stacks?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#412",
            "answers": [
              {
                "choice": "<p>A. AWS Config<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Amazon CloudWatch Metrics<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. AWS CloudTrail<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Amazon CloudWatch Logs<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 412 discussion",
        "discusstion": [
          {
            "id": 585190,
            "date": "Wed 13 Apr 2022 14:29",
            "username": "jj22222",
            "content": "looks good",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 497537,
            "date": "Thu 09 Dec 2021 10:34",
            "username": "I_heart_shuffle_girls",
            "content": "A is correct.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 331134,
            "date": "Tue 12 Oct 2021 06:06",
            "username": "devopp",
            "content": "A since unlikely OpsWorks integrated w Config",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#413",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>What is a circular dependency in AWS CloudFormation?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#413",
            "answers": [
              {
                "choice": "<p>A. When a Template references an earlier version of itself.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. When Nested Stacks depend on each other.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. When Resources form a DependOn loop.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. When a Template references a region, which references the original Template.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 413 discussion",
        "discusstion": [
          {
            "id": 582056,
            "date": "Thu 07 Apr 2022 00:12",
            "username": "Naxsi",
            "content": "c should be the correct one",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 579945,
            "date": "Sat 02 Apr 2022 18:50",
            "username": "jj22222",
            "content": "CCCCCCCCCCC",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 503269,
            "date": "Fri 17 Dec 2021 01:38",
            "username": "theCreatorSD",
            "content": "I little confused between B and C. <br>Would anyone explain about B, Please?<br>Any resources are fine.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 497423,
            "date": "Thu 09 Dec 2021 08:59",
            "username": "I_heart_shuffle_girls",
            "content": "I concur with the others C appears to be correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 480473,
            "date": "Thu 18 Nov 2021 07:19",
            "username": "theCreatorSD",
            "content": "https://aws.amazon.com/ko/blogs/infrastructure-and-automation/handling-circular-dependency-errors-in-aws-cloudformation/?nc1h_ls<br><br>It should be helpful, too.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 478914,
            "date": "Mon 15 Nov 2021 19:22",
            "username": "BaburTurk",
            "content": "https://aws.amazon.com/blogs/infrastructure-and-automation/handling-circular-dependency-errors-in-aws-cloudformation/<br><br>c",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 475291,
            "date": "Wed 10 Nov 2021 09:42",
            "username": "afantict",
            "content": "I think it's c",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#414",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You need to run a very large batch data processing job one time per day. The source data exists entirely in S3, and the output of the processing job should also be written to S3 when finished. If you need to version control this processing job and all setup and teardown logic for the system, what approach should you use?<br></p>",
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
                "choice": "<p>A. Model an AWS EMR job in AWS Elastic Beanstalk.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Model an AWS EMR job in AWS CloudFormation.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Model an AWS EMR job in AWS OpsWorks.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Model an AWS EMR job in AWS CLI Composer.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 414 discussion",
        "discusstion": [
          {
            "id": 554056,
            "date": "Tue 22 Feb 2022 23:30",
            "username": "Snakepablocolinquek",
            "content": "B because im smartlove tis comment :D",
            "upvote_count": "41",
            "selected_answers": ""
          },
          {
            "id": 623823,
            "date": "Tue 28 Jun 2022 09:40",
            "username": "colinquek",
            "content": "love tis comment :D",
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
        "question_text": "<p>What is true of the way that encryption works with EBS?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#415",
            "answers": [
              {
                "choice": "<p>A. Snapshotting an encrypted volume makes an encrypted snapshot; restoring an encrypted snapshot creates an encrypted volume when specified / requested.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Snapshotting an encrypted volume makes an encrypted snapshot when specified / requested; restoring an encrypted snapshot creates an encrypted volume when specified / requested.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Snapshotting an encrypted volume makes an encrypted snapshot; restoring an encrypted snapshot always creates an encrypted volume.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Snapshotting an encrypted volume makes an encrypted snapshot when specified / requested; restoring an encrypted snapshot always creates an encrypted volume.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 415 discussion",
        "discusstion": [
          {
            "id": 497596,
            "date": "Thu 09 Dec 2021 11:21",
            "username": "I_heart_shuffle_girls",
            "content": "C is correct.",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#416",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>When thinking of AWS OpsWorks, which of the following is true?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#416",
            "answers": [
              {
                "choice": "<p>A. Stacks have many layers, layers have many instances.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Instances have many stacks, stacks have many layers.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Layers have many stacks, stacks have many instances.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Layers have many instances, instances have many stacks.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 416 discussion",
        "discusstion": [
          {
            "id": 581209,
            "date": "Tue 05 Apr 2022 13:36",
            "username": "jj22222",
            "content": "A.  Stacks have many layers, layers have many instances.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 497445,
            "date": "Thu 09 Dec 2021 09:25",
            "username": "I_heart_shuffle_girls",
            "content": "A is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 356933,
            "date": "Sun 03 Oct 2021 12:41",
            "username": "awsqueen",
            "content": "A<br>Ref : https://docs.aws.amazon.com/ko_kr/opsworks/latest/userguide/images/php_walkthrough_arch_4.png",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#417",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>When thinking of AWS Elastic Beanstalk, which statement is true?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#417",
            "answers": [
              {
                "choice": "<p>A. Worker tiers pull jobs from SNS.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Worker tiers pull jobs from HTTP.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Worker tiers pull jobs from JSON.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Worker tiers pull jobs from SQS.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 417 discussion",
        "discusstion": [
          {
            "id": 579976,
            "date": "Sat 02 Apr 2022 19:45",
            "username": "jj22222",
            "content": "worker tier pulls jobs from SQS",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 497438,
            "date": "Thu 09 Dec 2021 09:19",
            "username": "I_heart_shuffle_girls",
            "content": "D is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 377216,
            "date": "Fri 15 Oct 2021 06:36",
            "username": "peddyua",
            "content": "D<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts-worker.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 337516,
            "date": "Tue 12 Oct 2021 09:11",
            "username": "BKhan",
            "content": "Ans is D<br>Watch the small video for concept<br>https://www.youtube.com/watch?v50g73uKFNAM&ab_channelExamPro",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#419",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your application's Auto Scaling Group scales up too quickly, too much, and stays scaled when traffic decreases.<br>What should you do to fix this?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#419",
            "answers": [
              {
                "choice": "<p>A. Set a longer cooldown period on the Group, so the system stops overshooting the target capacity. The issue is that the scaling system does not allow enough time for new instances to begin servicing requests before measuring aggregate load again.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Calculate the bottleneck or constraint on the compute layer, then select that as the new metric, and set the metric thresholds to the bounding values that begin to affect response latency.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Raise the CloudWatch Alarms threshold associated with your autoscaling group, so the scaling takes more of an increase in demand before beginning.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use larger instances instead of many smaller ones, so the Group stops scaling out so much and wasting resources as the OS level, since the OS uses a higher proportion of resources on smaller instances.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 419 discussion",
        "discusstion": [
          {
            "id": 538958,
            "date": "Wed 02 Feb 2022 17:46",
            "username": "kanavpeer",
            "content": "ans is A.  A scaling cooldown helps you prevent your Auto Scaling group from launching or terminating additional instances before the effects of previous activities are visible.<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/Cooldown.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 337531,
            "date": "Sat 16 Oct 2021 07:33",
            "username": "BKhanGreatFunanaRightAnswersGreatFunana",
            "content": "Ans is B<br>Cooldown period will affect both scale-up and down. At the moment scale-up too quick and scale-down to slow, if we extend the Cooldown period, that will cause not scale-up or not scale-downYou mean A right?scaling cooldown helps you prevent your Auto Scaling group from launching or terminating additional instances before the effects of previous activities are visible.<br><br>When you use simple scaling, after the Auto Scaling group scales using a simple scaling policy, it waits for a cooldown period to complete before any further scaling activities initiated by simple scaling policies can start. An adequate cooldown period helps to prevent the initiation of an additional scaling activity based on stale metrics.Nevermind. I re-read the question and understand the context. A is a band-aid to the overall issue.",
            "upvote_count": "2211",
            "selected_answers": ""
          },
          {
            "id": 505849,
            "date": "Tue 21 Dec 2021 07:12",
            "username": "GreatFunanaRightAnswersGreatFunana",
            "content": "You mean A right?scaling cooldown helps you prevent your Auto Scaling group from launching or terminating additional instances before the effects of previous activities are visible.<br><br>When you use simple scaling, after the Auto Scaling group scales using a simple scaling policy, it waits for a cooldown period to complete before any further scaling activities initiated by simple scaling policies can start. An adequate cooldown period helps to prevent the initiation of an additional scaling activity based on stale metrics.Nevermind. I re-read the question and understand the context. A is a band-aid to the overall issue.",
            "upvote_count": "211",
            "selected_answers": ""
          },
          {
            "id": 536520,
            "date": "Sun 30 Jan 2022 23:31",
            "username": "RightAnswers",
            "content": "scaling cooldown helps you prevent your Auto Scaling group from launching or terminating additional instances before the effects of previous activities are visible.<br><br>When you use simple scaling, after the Auto Scaling group scales using a simple scaling policy, it waits for a cooldown period to complete before any further scaling activities initiated by simple scaling policies can start. An adequate cooldown period helps to prevent the initiation of an additional scaling activity based on stale metrics.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 510017,
            "date": "Mon 27 Dec 2021 05:34",
            "username": "GreatFunana",
            "content": "Nevermind. I re-read the question and understand the context. A is a band-aid to the overall issue.",
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
        "question_text": "<p>You need the absolute highest possible network performance for a cluster computing application. You already selected homogeneous instance types supporting<br>10 gigabit enhanced networking, made sure that your workload was network bound, and put the instances in a placement group. What is the last optimization you can make?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#420",
            "answers": [
              {
                "choice": "<p>A. Use 9001 MTU instead of 1500 for Jumbo Frames, to raise packet body to packet overhead ratios.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Segregate the instances into different peered VPCs while keeping them all in a placement group, so each one has its own Internet Gateway.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Bake an AMI for the instances and relaunch, so the instances are fresh in the placement group and do not have noisy neighbors.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Turn off SYN/ACK on your TCP stack or begin using UDP for higher throughput.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 420 discussion",
        "discusstion": [
          {
            "id": 608899,
            "date": "Sun 29 May 2022 21:14",
            "username": "GCPWizard",
            "content": "Ans: A<br>Jumbo frames allow more than 1500 bytes of data by increasing the payload size per packet, and thus increasing the percentage of the packet that is not packet overhead. Fewer packets are needed to send the same amount of usable data.<br>B is not correct since the max is 10 Gbps in a clustered placement group and it's already configured as per the scenario given in the question.<br><br>For instances that are enabled for enhanced networking, the following rules apply:<br>Instances within a cluster placement group can use up to 10 Gbps for single-flow traffic. Instances that are not within a cluster placement group can use up to 5 Gbps for single-flow traffic.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 539245,
            "date": "Thu 03 Feb 2022 00:12",
            "username": "bobsmith2000",
            "content": "Just put a vote",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 539243,
            "date": "Thu 03 Feb 2022 00:12",
            "username": "bobsmith2000hubekpeter",
            "content": "B for sure. You must put instances into a placement group to begin with. There's no mention of it in the question. So it's either B or C. <br><br>\\\"A cluster placement group is a logical grouping of instances within a single Availability Zone. A cluster placement group can span peered VPCs in the same Region. Instances in the same cluster placement group enjoy a higher per-flow throughput limit for TCP/IP traffic and are placed in the same high-bisection bandwidth segment of the network.\\\"<br><br>So the answer is B. <br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.htmlThey're already using placement groups, read the question carefully. Therefore I vote for A. ",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 647299,
            "date": "Mon 15 Aug 2022 19:28",
            "username": "hubekpeter",
            "content": "They're already using placement groups, read the question carefully. Therefore I vote for A. ",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#421",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your CTO is very worried about the security of your AWS account. How best can you prevent hackers from completely hijacking your account?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#421",
            "answers": [
              {
                "choice": "<p>A. Use short but complex password on the root account and any administrators.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use AWS IAM Geo-Lock and disallow anyone from logging in except for in your city.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use MFA on all users and accounts, especially on the root account.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Don't write down or remember the root account password after creating the AWS account.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 421 discussion",
        "discusstion": [
          {
            "id": 497618,
            "date": "Thu 09 Dec 2021 11:43",
            "username": "I_heart_shuffle_girls",
            "content": "C is correct.",
            "upvote_count": "1",
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
        "question_text": "<p>If you are trying to configure an AWS Elastic Beanstalk worker tier for easy debugging if there are problems finishing queue jobs, what should you configure?<br></p>",
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
                "choice": "<p>A. Configure Rolling Deployments<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure Enhanced Health Reporting<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure Blue-Green Deployments<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure a Dead Letter Queue<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 422 discussion",
        "discusstion": [
          {
            "id": 497523,
            "date": "Thu 09 Dec 2021 10:26",
            "username": "I_heart_shuffle_girls",
            "content": "D is correct.",
            "upvote_count": "3",
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
        "question_text": "<p>You have a high security requirement for your AWS accounts.<br>What is the most rapid and sophisticated setup you can use to react to AWS API calls to your account?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#423",
            "answers": [
              {
                "choice": "<p>A. Subscription to AWS Config via an SNS Topic. Use a Lambda Function to perform in-flight analysis and reactivity to changes as they occur.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Global AWS CloudTrail setup delivering to S3 with an SNS subscription to the deliver notifications, pushing into a Lambda, which inserts records into an ELK stack for analysis.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use a CloudWatch Rule ScheduleExpression to periodically analyze IAM credential logs. Push the deltas for events into an ELK stack and perform ad-hoc analysis there.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. CloudWatch Events Rules which trigger based on all AWS API calls, submitting all events to an AWS Kinesis Stream for arbitrary downstream analysis.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 423 discussion",
        "discusstion": [
          {
            "id": 671879,
            "date": "Sun 18 Sep 2022 02:17",
            "username": "colinquek",
            "content": "CloudTrail is the AWS default answer for AWS API calls auditing process.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 381915,
            "date": "Sat 06 Nov 2021 10:33",
            "username": "D2",
            "content": "Answer B.  CloudTrail required for auditing API Calls",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 377231,
            "date": "Mon 25 Oct 2021 01:30",
            "username": "peddyua",
            "content": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html<br><br>Amazon Kinesis Data Streams is a web service you can use for rapid and continuous data intake and aggregation",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 377227,
            "date": "Thu 14 Oct 2021 18:47",
            "username": "peddyuaGreatFunana",
            "content": "Agree D will be fasterIf you need to direct API calls, you need CloudTrail. While D is to a degree RIGHT, it does not include info on how to retrieve logs, so the answer assumes that CloudWatch is the way to retrieve API calls, which is wrong.<br><br>Answer is B. ",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 509682,
            "date": "Sun 26 Dec 2021 16:53",
            "username": "GreatFunana",
            "content": "If you need to direct API calls, you need CloudTrail. While D is to a degree RIGHT, it does not include info on how to retrieve logs, so the answer assumes that CloudWatch is the way to retrieve API calls, which is wrong.<br><br>Answer is B. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 339914,
            "date": "Wed 29 Sep 2021 16:47",
            "username": "GCP_userGreatFunana",
            "content": "Should be D. <br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/EventTypes.html#api_event_typeNo. The document you refer to, in multiple places, lists CloudTrail is the source of API calls. This is an incomplete answer, and the most complete one is B. ",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 509683,
            "date": "Sun 26 Dec 2021 16:55",
            "username": "GreatFunana",
            "content": "No. The document you refer to, in multiple places, lists CloudTrail is the source of API calls. This is an incomplete answer, and the most complete one is B. ",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#424",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>What method should you use to author automation if you want to wait for a CloudFormation stack to finish completing in a script?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#424",
            "answers": [
              {
                "choice": "<p>A. Event subscription using SQS.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Event subscription using SNS.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Poll using <code>ListStacks</code> / <code>list-stacks</code><br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Poll using <code>GetStackStatus</code> / <code>get-stack-status</code><br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 424 discussion",
        "discusstion": [
          {
            "id": 524056,
            "date": "Sat 15 Jan 2022 10:43",
            "username": "herohiro",
            "content": "C is right. D is wrong. No API action calledGetStackStatus.<br>https://docs.aws.amazon.com/ja_jp/AWSCloudFormation/latest/APIReference/API_Operations.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 497613,
            "date": "Thu 09 Dec 2021 11:41",
            "username": "I_heart_shuffle_girls",
            "content": "C is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#425",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your application consists of 10% writes and 90% reads. You currently service all requests through a Route53 Alias Record directed towards an AWS ELB, which sits in front of an EC2 Auto Scaling Group. Your system is getting very expensive when there are large traffic spikes during certain news events, during which many more people request to read similar data all at the same time.<br>What is the simplest and cheapest way to reduce costs and scale with spikes like this?<br></p>",
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
                "choice": "<p>A. Create an S3 bucket and asynchronously replicate common requests responses into S3 objects. When a request comes in for a precomputed response, redirect to AWS S3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create another ELB and Auto Scaling Group layer mounted on top of the other system, adding a tier to the system. Serve most read requests out of the top layer.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a CloudFront Distribution and direct Route53 to the Distribution. Use the ELB as an Origin and specify Cache Behaviours to proxy cache requests which can be served late.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a Memcached cluster in AWS ElastiCache. Create cache logic to serve requests which can be served late from the in-memory cache for increased performance.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 425 discussion",
        "discusstion": [
          {
            "id": 416993,
            "date": "Wed 06 Oct 2021 06:37",
            "username": "tgv",
            "content": "C is the simplest and cheapest way",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 377234,
            "date": "Mon 04 Oct 2021 03:51",
            "username": "peddyua",
            "content": "Answer C, 90 % reads.<br>D is wrong no mentioning of Database in question.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#426",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You need to perform ad-hoc business analytics queries on well-structured data. Data comes in constantly at a high velocity. Your business intelligence team can understand SQL. What AWS service(s) should you look to first?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#426",
            "answers": [
              {
                "choice": "<p>A. Kinesis Firehose + RDS<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Kinesis Firehose + RedShift<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. EMR using Hive<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. EMR running Apache Spark<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 426 discussion",
        "discusstion": [
          {
            "id": 429870,
            "date": "Sun 07 Nov 2021 14:23",
            "username": "StelSen",
            "content": "Option-B is correct. Use AWS Managed services as much as possible. In exam atleast.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 373804,
            "date": "Fri 08 Oct 2021 07:49",
            "username": "happydazeGreatFunana",
            "content": "Should be C.  Apache Hive is an open-source, distributed, fault-tolerant system that provides data warehouse-like query capabilities. It enables users to read, write, and manage petabytes of data using a SQL-like interface.Newp. The data is being ingested quickly, and Redshift is faster. Not to mention it takes work to get an EMR cluster going. Option B. ",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 507677,
            "date": "Thu 23 Dec 2021 09:29",
            "username": "GreatFunana",
            "content": "Newp. The data is being ingested quickly, and Redshift is faster. Not to mention it takes work to get an EMR cluster going. Option B. ",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#427",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are building a game high score table in DynamoDB.  You will store each user's highest score for each game, with many games, all of which have relatively similar usage levels and numbers of players. You need to be able to look up the highest score for any game.<br>What is the best DynamoDB key structure?<br></p>",
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
                "choice": "<p>A. HighestScore as the hash / only key.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. GameID as the hash key, HighestScore as the range key.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. GameID as the hash / only key.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. GameID as the range / only key.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 427 discussion",
        "discusstion": [
          {
            "id": 618587,
            "date": "Sun 19 Jun 2022 10:13",
            "username": "gr3y_matter",
            "content": "B<br>because: to get highScore of a particular game-<br>FIRST you have to filter-out that game & to do so use PARTITION KEY(hash key) on GAME-ID,<br>and now there may be different types of Score patterns in the Filtered-game, out of which to get the 'highScore' , use SORT KEY(range ley) on HighScore.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 508180,
            "date": "Thu 23 Dec 2021 23:59",
            "username": "RightAnswers",
            "content": "B<br>Choosing the Partition key/Hash key: https://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/<br>Choosing the Sort key/Range key: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-sort-keys.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 417000,
            "date": "Fri 05 Nov 2021 15:54",
            "username": "tgv",
            "content": "B.  GameID as the hash key, HighestScore as the range key.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#428",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>What is server immutability?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#428",
            "answers": [
              {
                "choice": "<p>A. Not updating a server after creation.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. The ability to change server counts.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Updating a server after creation.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. The inability to change server counts.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 428 discussion",
        "discusstion": [
          {
            "id": 497510,
            "date": "Thu 09 Dec 2021 10:21",
            "username": "I_heart_shuffle_girls",
            "content": "A is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 417002,
            "date": "Tue 05 Oct 2021 18:04",
            "username": "tgv",
            "content": "A.  Immutableunchanging over time or unable to be changed.",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#429",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You run a clustered NoSQL database on AWS EC2 using AWS EBS. You need to reduce latency for database response times. Performance is the most important concern, not availability. You did not perform the initial setup, someone without much AWS knowledge did, so you are not sure if they configured everything optimally. Which of the following is NOT likely to be an issue contributing to increased latency?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#429",
            "answers": [
              {
                "choice": "<p>A. The EC2 instances are not EBS Optimized.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. The database and requesting system are both in the wrong Availability Zone.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. The EBS Volumes are not using PIOPS.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. The database is not running in a placement group.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 429 discussion",
        "discusstion": [
          {
            "id": 417004,
            "date": "Fri 01 Oct 2021 16:12",
            "username": "tgv",
            "content": "B.  There's no such thing as wrong Availability Zone for this scenario",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#430",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Fill the blanks: __________ helps us track AWS API calls and transitions, _________ helps to understand what resources we have now, and ________ allows auditing credentials and logins.<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#430",
            "answers": [
              {
                "choice": "<p>A. AWS Config, CloudTrail, IAM Credential Reports<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. CloudTrail, IAM Credential Reports, AWS Config<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. CloudTrail, AWS Config, IAM Credential Reports<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. AWS Config, IAM Credential Reports, CloudTrail<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 430 discussion",
        "discusstion": [
          {
            "id": 417005,
            "date": "Mon 27 Sep 2021 03:50",
            "username": "tgv",
            "content": "C.  CloudTrail for API calls / AWS Config for existing resources / IAM Credentials Reports for auditing credentials and logins",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#431",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are creating an application which stores extremely sensitive financial information. All information in the system must be encrypted at rest and in transit.<br>Which of these is a violation of this policy?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#431",
            "answers": [
              {
                "choice": "<p>A. ELB SSL termination.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. ELB Using Proxy Protocol v1.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. CloudFront Viewer Protocol Policy set to HTTPS redirection.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Telling S3 to use AES256 on the server-side.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 431 discussion",
        "discusstion": [
          {
            "id": 585154,
            "date": "Wed 13 Apr 2022 12:54",
            "username": "jj22222",
            "content": "agree A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 572973,
            "date": "Tue 22 Mar 2022 14:52",
            "username": "dzenadcu",
            "content": "If you terminate SSL on the ELB, then the traffic between the ELB and the compute instance is not encrypted.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 566425,
            "date": "Sun 13 Mar 2022 00:30",
            "username": "BKcloud",
            "content": "I am not sure about B.  so most obvious ans is A",
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
        "question_text": "<p>You need to scale an RDS deployment. You are operating at 10% writes and 90% reads, based on your logging. How best can you scale this in a simple way?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#432",
            "answers": [
              {
                "choice": "<p>A. Create a second master RDS instance and peer the RDS groups.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Cache all the database responses on the read side with CloudFront.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create read replicas for RDS since the load is mostly reads.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a Multi-AZ RDS installs and route read traffic to standby.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 432 discussion",
        "discusstion": [
          {
            "id": 593463,
            "date": "Thu 28 Apr 2022 03:52",
            "username": "axel2200",
            "content": "C is correct. Read replica to reduce load in primary RDS",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 581248,
            "date": "Tue 05 Apr 2022 14:31",
            "username": "jj22222",
            "content": "C.  Create read replicas for RDS since the load is mostly reads.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 497485,
            "date": "Thu 09 Dec 2021 10:04",
            "username": "I_heart_shuffle_girls",
            "content": "C is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 417006,
            "date": "Fri 05 Nov 2021 04:00",
            "username": "tgv",
            "content": "C.  Read Replicas for read intensive activities",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#433",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>When thinking of AWS Elastic Beanstalk, the 'Swap Environment URLs' feature most directly aids in what?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#433",
            "answers": [
              {
                "choice": "<p>A. Immutable Rolling Deployments<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Mutable Rolling Deployments<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Canary Deployments<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Blue-Green Deployments<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 433 discussion",
        "discusstion": [
          {
            "id": 497506,
            "date": "Thu 09 Dec 2021 10:19",
            "username": "I_heart_shuffle_girls",
            "content": "D is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 417010,
            "date": "Tue 26 Oct 2021 20:31",
            "username": "tgv",
            "content": "D.  Blue-Green Deployments.<br>The answer which has an explanation are usually the correct ones shown when pressing the Reveal Solution",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 339713,
            "date": "Thu 07 Oct 2021 13:00",
            "username": "GCP_user",
            "content": "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.CNAMESwap.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#434",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You need to create a simple, holistic check for your system's general availablity and uptime. Your system presents itself as an HTTP-speaking API. What is the most simple tool on AWS to achieve this with?<br></p>",
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
                "choice": "<p>A. Route53 Health Checks<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. CloudWatch Health Checks<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. AWS ELB Health Checks<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. EC2 Health Checks<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 434 discussion",
        "discusstion": [
          {
            "id": 339724,
            "date": "Thu 21 Oct 2021 07:59",
            "username": "GCP_user",
            "content": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/welcome-health-checks.html",
            "upvote_count": "2",
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
        "question_text": "<p>What is the scope of an EC2 security group?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#435",
            "answers": [
              {
                "choice": "<p>A. Availability Zone<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Placement Group<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Region<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. VPC<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 435 discussion",
        "discusstion": [
          {
            "id": 402656,
            "date": "Tue 26 Oct 2021 20:46",
            "username": "MBJamesMBJames",
            "content": "C is wrong, the right answer is D, the scope is VPC<br>\\\"A security group can only be used in the VPC that you specify when you create the security group.\\\" from https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.htmlI guess this might be an old question as it says \\\"EC2 security group\\\", not the VPC one...",
            "upvote_count": "72",
            "selected_answers": ""
          },
          {
            "id": 402657,
            "date": "Sun 07 Nov 2021 07:24",
            "username": "MBJames",
            "content": "I guess this might be an old question as it says \\\"EC2 security group\\\", not the VPC one...",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 575412,
            "date": "Sat 26 Mar 2022 08:23",
            "username": "dzenadcu",
            "content": "VPC, not region.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 497565,
            "date": "Thu 09 Dec 2021 11:00",
            "username": "I_heart_shuffle_girlsRightAnswers",
            "content": "I will go with C.  I recognize that both C and D are correct however the question does not use the word VPC and this document specifically states regional. https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resources.htmlAgreed. Ans is C. <br>You can update the inbound or outbound rules for your VPC security groups to reference security groups in the peered VPC.  Doing so allows traffic to flow to and from instances that are associated with the referenced security group in the peered VPC.  So, even if a security group is specified in a VPC it can control traffic in another VPC making the scope regional.",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 517847,
            "date": "Wed 05 Jan 2022 23:55",
            "username": "RightAnswers",
            "content": "Agreed. Ans is C. <br>You can update the inbound or outbound rules for your VPC security groups to reference security groups in the peered VPC.  Doing so allows traffic to flow to and from instances that are associated with the referenced security group in the peered VPC.  So, even if a security group is specified in a VPC it can control traffic in another VPC making the scope regional.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 486011,
            "date": "Wed 24 Nov 2021 14:36",
            "username": "stvsting",
            "content": "Agree with MBJames. Right answer is D: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html<br>\\\"When you launch an instance in a VPC, you must specify a security group that's created for _that VPC_ \\\"",
            "upvote_count": "2",
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
        "question_text": "<p>You run accounting software in the AWS cloud. This software needs to be online continuously during the day every day of the week, and has a very static requirement for compute resources. You also have other, unrelated batch jobs that need to run once per day at any time of your choosing. How should you minimize cost?<br></p>",
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
                "choice": "<p>A. Purchase a Heavy Utilization Reserved Instance to run the accounting software. Turn it off after hours. Run the batch jobs with the same instance class, so the Reserved Instance credits are also applied to the batch jobs.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Purchase a Medium Utilization Reserved Instance to run the accounting software. Turn it off after hours. Run the batch jobs with the same instance class, so the Reserved Instance credits are also applied to the batch jobs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Purchase a Light Utilization Reserved Instance to run the accounting software. Turn it off after hours. Run the batch jobs with the same instance class, so the Reserved Instance credits are also applied to the batch jobs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Purchase a Full Utilization Reserved Instance to run the accounting software. Turn it off after hours. Run the batch jobs with the same instance class, so the Reserved Instance credits are also applied to the batch jobs.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 436 discussion",
        "discusstion": [
          {
            "id": 405756,
            "date": "Mon 01 Nov 2021 16:28",
            "username": "NNHAN",
            "content": "too old question",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 337677,
            "date": "Fri 15 Oct 2021 22:27",
            "username": "BKhan",
            "content": "Ans is A<br><br>https://aws.amazon.com/about-aws/whats-new/2011/12/01/New-Amazon-EC2-Reserved-Instances-Options-Now-Available/#:~:textHeavy%20Utilization%20RIs%20%E2%80%93%20Heavy%20Utilization,our%20lowest%20hourly%20usage%20fee.&textrunning%20On%2DDemand%20Instances.,-If%20you're",
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
        "question_text": "<p>Which EBS volume type is best for high performance NoSQL cluster deployments?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#437",
            "answers": [
              {
                "choice": "<p>A. io1<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. gp1<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. standard<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. gp2<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 437 discussion",
        "discusstion": [
          {
            "id": 382163,
            "date": "Fri 29 Oct 2021 06:52",
            "username": "D2",
            "content": "A is correct<br><br>https://n2ws.com/blog/aws-ebs-snapshot/best-practices-nosql-databases-amazon-ec2#:~:textWhile%20there%20are%20multiple%20Amazon,IOPS%20of%2010%2C000%20per%20volume.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#439",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You need to perform ad-hoc analysis on log data, including searching quickly for specific error codes and reference numbers. Which should you evaluate first?<br></p>",
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
                "choice": "<p>A. AWS Elasticsearch Service<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. AWS RedShift<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. AWS EMR<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. AWS DynamoDB<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 439 discussion",
        "discusstion": [
          {
            "id": 497586,
            "date": "Thu 09 Dec 2021 11:14",
            "username": "I_heart_shuffle_girls",
            "content": "A is correct.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 337782,
            "date": "Fri 24 Sep 2021 21:59",
            "username": "BKhan",
            "content": "Ans is A<br>https://www.alooma.com/answers/how-does-amazon-redshift-compare-with-elasticsearch",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#440",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Which status represents a failure state in AWS CloudFormation?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#440",
            "answers": [
              {
                "choice": "<p>A. <code>UPDATE_COMPLETE_CLEANUP_IN_PROGRESS</code><br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. <code>DELETE_COMPLETE_WITH_ARTIFACTS</code><br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. <code>ROLLBACK_IN_PROGRESS</code><br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. <code>ROLLBACK_FAILED</code><br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 440 discussion",
        "discusstion": [
          {
            "id": 377291,
            "date": "Fri 15 Oct 2021 01:36",
            "username": "peddyua",
            "content": "Answer C<br>D means you failed both including rollback itself<br>further more<br>ROLLBACK_FAILED is not a CloudFormation state (but UPDATE_ROLLBACK_FAILED is).",
            "upvote_count": "10",
            "selected_answers": ""
          },
          {
            "id": 642843,
            "date": "Fri 05 Aug 2022 10:34",
            "username": "kowalkowal",
            "content": "\\\"Answer C<br>D means you failed both including rollback itself<br>further more<br>ROLLBACK_FAILED is not a CloudFormation state (but UPDATE_ROLLBACK_FAILED is).\\\"",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 581215,
            "date": "Tue 05 Apr 2022 13:44",
            "username": "jj22222",
            "content": "D.  <code>ROLLBACK_FAILED</code>",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 497476,
            "date": "Thu 09 Dec 2021 09:56",
            "username": "I_heart_shuffle_girls",
            "content": "Answer should be D.  It is asking for which on indicates a failure state. This to me means that it is currently in the failed state. C indicates that a job is in progress.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 421442,
            "date": "Thu 04 Nov 2021 16:17",
            "username": "TonyGe",
            "content": "C is incorrect. The questions is asking \\\"failure state\\\".C.  \\\"Ongoing removal of one or more stacks after a failed stack creation or after an explicitly canceled stack creation.\\\" is this a failure statue? no, it is ongoing removal the stacks after a failed operation.<br>D is correct. \\\"Unsuccessful removal of one or more stacks after a failed stack creation or after an explicitly canceled stack creation\\\"",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 413257,
            "date": "Thu 04 Nov 2021 01:34",
            "username": "Texaspider",
            "content": "ROLLBACK_FAILED - Unsuccessful removal of one or more stacks after a failed stack creation or after an explicitly canceled stack creation. Delete the stack or view the stack events to see any associated error messages.<br><br>ROLLBACK_IN_PROGRESS - Ongoing removal of one or more stacks after a failed stack creation or after an explicitly canceled stack creation.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 382166,
            "date": "Wed 20 Oct 2021 23:53",
            "username": "D2",
            "content": "Answer is C<br><br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-describing-stacks.html",
            "upvote_count": "4",
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
        "question_text": "<p>What is the scope of an EC2 EIP?<br></p>",
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
                "choice": "<p>A. Placement Group<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Availability Zone<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Region<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. VPC<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 441 discussion",
        "discusstion": [
          {
            "id": 618157,
            "date": "Sat 18 Jun 2022 11:14",
            "username": "gr3y_matter",
            "content": "An Elastic IP address is for use in a specific Region only, and cannot be moved to a different Region.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 338049,
            "date": "Sun 31 Oct 2021 17:49",
            "username": "BKhan",
            "content": "Ans is C<br><br>Elastic IP address limit. By default, all AWS accounts are limited to five (5) Elastic IP addresses per Region,",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#442",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>For AWS Auto Scaling, what is the first transition state an existing instance enters after leaving steady state in Standby mode?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#442",
            "answers": [
              {
                "choice": "<p>A. Detaching<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Terminating:Wait<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Pending<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. EnteringStandby<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 442 discussion",
        "discusstion": [
          {
            "id": 497632,
            "date": "Thu 09 Dec 2021 11:50",
            "username": "I_heart_shuffle_girls",
            "content": "C is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 382176,
            "date": "Tue 05 Oct 2021 03:26",
            "username": "D2D2rewiga",
            "content": "Answer C<br><br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroupLifecycle.htmlAnswer B (not C)<br><br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroupLifecycle.htmlThat link shows the pending is next",
            "upvote_count": "211",
            "selected_answers": ""
          },
          {
            "id": 382178,
            "date": "Sun 10 Oct 2021 11:51",
            "username": "D2rewiga",
            "content": "Answer B (not C)<br><br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroupLifecycle.htmlThat link shows the pending is next",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 587061,
            "date": "Sun 17 Apr 2022 07:31",
            "username": "rewiga",
            "content": "That link shows the pending is next",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#443",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You want to pass queue messages that are 1GB each.<br>How should you achieve this?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#443",
            "answers": [
              {
                "choice": "<p>A. Use Kinesis as a buffer stream for message bodies. Store the checkpoint id for the placement in the Kinesis Stream in SQS.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use the Amazon SQS Extended Client Library for Java and Amazon S3 as a storage mechanism for message bodies.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use SQS's support for message partitioning and multi-part uploads on Amazon S3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use AWS EFS as a shared pool storage medium. Store filesystem pointers to the files on disk in the SQS message bodies.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 443 discussion",
        "discusstion": [
          {
            "id": 388887,
            "date": "Mon 01 Nov 2021 12:13",
            "username": "D2",
            "content": "Answer B",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 351912,
            "date": "Mon 18 Oct 2021 11:03",
            "username": "cnethers",
            "content": "B is the answer",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 351910,
            "date": "Thu 07 Oct 2021 05:04",
            "username": "cnethers",
            "content": "https://aws.amazon.com/about-aws/whats-new/2015/10/now-send-payloads-up-to-2gb-with-amazon-sqs/",
            "upvote_count": "1",
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
        "question_text": "<p>Your system automatically provisions EIPs to EC2 instances in a VPC on boot. The system provisions the whole VPC and stack at once. You have two of them per VPC.  On your new AWS account, your attempt to create a Development environment failed, after successfully creating Staging and Production environments in the same region. What happened?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#445",
            "answers": [
              {
                "choice": "<p>A. You didn't choose the Development version of the AMI you are using.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. You didn't set the Development flag to true when deploying EC2 instances.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. You hit the soft limit of 5 EIPs per region and requested a 6th.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. You hit the soft limit of 2 VPCs per region and requested a 3rd.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 445 discussion",
        "discusstion": [
          {
            "id": 545295,
            "date": "Fri 11 Feb 2022 13:25",
            "username": "SonamDhingra",
            "content": "Answer is C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 339692,
            "date": "Sat 23 Oct 2021 13:40",
            "username": "GCP_user",
            "content": "https://console.aws.amazon.com/servicequotas/home/services/elastic-inference/quotas",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#446",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>To monitor API calls against our AWS account by different users and entities, we can use ________ to create a history of calls in bulk for later review, and use<br>___________ for reacting to AWS API calls in real-time.<br></p>",
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
                "choice": "<p>A. AWS Config; AWS Inspector<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. AWS CloudTrail; AWS Config<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. AWS CloudTrail; CloudWatch Events<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. AWS Config; AWS Lambda<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 446 discussion",
        "discusstion": [
          {
            "id": 554300,
            "date": "Wed 23 Feb 2022 09:03",
            "username": "SonamDhingra",
            "content": "Option C",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 384016,
            "date": "Fri 22 Oct 2021 22:14",
            "username": "Sagardonthineni",
            "content": "Answer C",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#447",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>How does Amazon RDS multi Availability Zone model work?<br></p>",
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
                "choice": "<p>A. A second, standby database is deployed and maintained in a different availability zone from master, using synchronous replication.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. A second, standby database is deployed and maintained in a different availability zone from master using asynchronous replication.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. A second, standby database is deployed and maintained in a different region from master using asynchronous replication.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. A second, standby database is deployed and maintained in a different region from master using synchronous replication.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 447 discussion",
        "discusstion": [
          {
            "id": 497601,
            "date": "Thu 09 Dec 2021 11:24",
            "username": "I_heart_shuffle_girls",
            "content": "A is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 384017,
            "date": "Mon 20 Sep 2021 03:04",
            "username": "Sagardonthineni",
            "content": "Answer A",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#448",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Which of these is not an instrinsic function in AWS CloudFormation?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#448",
            "answers": [
              {
                "choice": "<p>A. Fn::Equals<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Fn::If<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Fn::Not<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Fn::Parse<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 448 discussion",
        "discusstion": [
          {
            "id": 497579,
            "date": "Thu 09 Dec 2021 11:09",
            "username": "I_heart_shuffle_girls",
            "content": "D is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 384019,
            "date": "Tue 02 Nov 2021 11:43",
            "username": "Sagardonthineni",
            "content": "https://docs.amazonaws.cn/en_us/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#449",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Which one of the following is a restriction of AWS EBS Snapshots?<br></p>",
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
                "choice": "<p>A. Snapshot restorations are restricted to the region in which the snapshots are created.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. You cannot share unencrypted snapshots.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. To share a snapshot with a user in other region the snapshot has to be created in that region first.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. You cannot share a snapshot containing sensitive data such as an AWS Access Key ID or AWS Secret Access Key.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 449 discussion",
        "discusstion": [
          {
            "id": 497567,
            "date": "Thu 09 Dec 2021 11:01",
            "username": "I_heart_shuffle_girls",
            "content": "C is correct.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 384026,
            "date": "Fri 22 Oct 2021 01:27",
            "username": "Sagardonthineni",
            "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modifying-snapshot-permissions.html Answer C",
            "upvote_count": "2",
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
        "question_text": "<p>What option below is the geographic limit of an EC2 security group?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#450",
            "answers": [
              {
                "choice": "<p>A. Security groups are global.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. They are confined to Placement Groups.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. They are confined to Regions.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. They are confined to Availability Zones.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 450 discussion",
        "discusstion": [
          {
            "id": 514806,
            "date": "Sun 02 Jan 2022 04:26",
            "username": "nqthien041292",
            "content": "Vote C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 497642,
            "date": "Thu 09 Dec 2021 11:57",
            "username": "I_heart_shuffle_girls",
            "content": "C is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 339695,
            "date": "Sun 07 Nov 2021 14:35",
            "username": "GCP_user",
            "content": "Each resource name, such as a security group name or key pair name, is tied to its Region and can be used only in the Region where you created the resource. Although you can create resources with the same name in multiple Regions, they aren't related to each other.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#451",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>If designing a single playbook to run across multiple Linux distributions that have distribution specific commands, what would be the best method to allow a successful run?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#451",
            "answers": [
              {
                "choice": "<p>A. Enable fact gathering and use the `when' conditional to match the distribution to the task.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. This is not possible, a separate playbook for each target Linux distribution is required.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use `ignore_errors: true' in the tasks.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use the `shell' module to write your own checks for each command that is ran.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 451 discussion",
        "discusstion": [
          {
            "id": 503909,
            "date": "Fri 17 Dec 2021 22:20",
            "username": "RightAnswers",
            "content": "Hmm...This is an Ansible question. I don't see how this is related to AWS?",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 500791,
            "date": "Mon 13 Dec 2021 18:53",
            "username": "fgg89",
            "content": "Agree with A",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#452",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Which is the proper syntax for referencing a variable's value in an Ansible task?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#452",
            "answers": [
              {
                "choice": "<p>A. ${variable_name}<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. { variable_name }<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. \"{{ variable_name }}\"<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. @variable_name<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 452 discussion",
        "discusstion": [
          {
            "id": 497594,
            "date": "Thu 09 Dec 2021 11:20",
            "username": "I_heart_shuffle_girls",
            "content": "C is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 486642,
            "date": "Thu 25 Nov 2021 13:43",
            "username": "joancarles",
            "content": "it's C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 484909,
            "date": "Tue 23 Nov 2021 10:29",
            "username": "ejieji",
            "content": "i think its D, but it should be { { variable name } }i mean C",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 484910,
            "date": "Tue 23 Nov 2021 10:29",
            "username": "eji",
            "content": "i mean C",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#453",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>If Erin has three clusters of server types that are all managed by Ansible and she needs to provision each cluster so that they are configured with their appropriate<br>NTP server addresses. What is the best method Erin should use in Ansible for managing this?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#453",
            "answers": [
              {
                "choice": "<p>A. Write a task that scans the network in the target hosts' region for the NTP server, register the resulting address so that the next task can write the NTP configuration.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Break down the hosts by region in the Ansible inventory file and assign an inventory group variable the NTP address value for the respective region. The playbook can contain just the single play referencing the NTP variable from the inventory.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a playbook for each different region and store the NTP address in a variable in the play in the event the NTP server changes.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create three plays, each one has the hosts for their respective regions and set the NTP server address in each task.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 453 discussion",
        "discusstion": [
          {
            "id": 587715,
            "date": "Mon 18 Apr 2022 16:33",
            "username": "jj22222",
            "content": "not on test",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 514230,
            "date": "Fri 31 Dec 2021 22:19",
            "username": "RightAnswers",
            "content": "Awwwee!! Another useless ansible question !!",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#454",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Which of the following is an invalid variable name in Ansible?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#454",
            "answers": [
              {
                "choice": "<p>A. host1st_ref<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. host-first-ref<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Host1stRef<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. host_first_ref<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 454 discussion",
        "discusstion": [
          {
            "id": 497583,
            "date": "Thu 09 Dec 2021 11:13",
            "username": "I_heart_shuffle_girls",
            "content": "B is correct. - are not allowed.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#455",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>What are the bare minimum requirements for a valid Ansible playbook?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#455",
            "answers": [
              {
                "choice": "<p>A. The hosts, connection type, fact gathering, vars and tasks.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. The hosts declaration and tasks<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. A YAML file with a single line containing `---'.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. At least one play with at least a hosts declaration<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 455 discussion",
        "discusstion": [
          {
            "id": 515723,
            "date": "Mon 03 Jan 2022 13:54",
            "username": "RightAnswers",
            "content": "Oooohhaaawww!! Another Ansible question - I am not sure why these are in AWS?????????????",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 497542,
            "date": "Thu 09 Dec 2021 10:35",
            "username": "I_heart_shuffle_girls",
            "content": "D is correct.",
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
        "question_text": "<p>When Ansible's connection state is set to `remote', what method of communication does Ansible utilize to run commands on the remote target host?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#457",
            "answers": [
              {
                "choice": "<p>A. SSH<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. RSH<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. PSExec<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. API call to Ansible client on host<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 457 discussion",
        "discusstion": [
          {
            "id": 497617,
            "date": "Thu 09 Dec 2021 11:42",
            "username": "I_heart_shuffle_girls",
            "content": "A is correct.",
            "upvote_count": "1",
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
        "question_text": "<p>Which resource cannot be defined in an Ansible Playbook?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#458",
            "answers": [
              {
                "choice": "<p>A. Fact Gathering State<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Host Groups<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Inventory File<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Variables<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 458 discussion",
        "discusstion": [
          {
            "id": 514809,
            "date": "Sun 02 Jan 2022 04:27",
            "username": "nqthien041292",
            "content": "Vote C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 497644,
            "date": "Thu 09 Dec 2021 11:57",
            "username": "I_heart_shuffle_girls",
            "content": "C is correct.",
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
        "question_text": "<p>When specifying multiple variable names and values for a playbook on the command line, which of the following is the correct syntax?<br></p>",
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
                "choice": "<p>A. ansible-playbook playbook.yml -e `host=\"foo\" pkg=\"bar\"'<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. ansible-playbook playbook.yml -e `host: \"foo\", pkg: \"bar\"'<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. ansible-playbook playbook.yml -e `host=\"foo\"' -e `pkg=\"bar\"'<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. ansible-playbook playbook.yml --extra-vars \"hostfoo\", \"pkgbar\"<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 459 discussion",
        "discusstion": [
          {
            "id": 642764,
            "date": "Fri 05 Aug 2022 07:54",
            "username": "kowalkowal",
            "content": "https://stackoverflow.com/questions/30662069/how-can-i-pass-variable-to-ansible-playbook-in-the-command-line",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 642164,
            "date": "Thu 04 Aug 2022 06:15",
            "username": "Mihai2",
            "content": "I tested the answer A and C.  Both worked",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 636883,
            "date": "Mon 25 Jul 2022 19:57",
            "username": "AzRNoob",
            "content": "Answer is A even though the formatting is off in my web browser.<br><br>Values passed in using the keyvalue syntax are interpreted as strings. Use the JSON format if you need to pass non-string values such as Booleans, integers, floats, lists, and so on.<br><br>ansible-playbook release.yml --extra-vars \\\"version1.23.45 other_variablefoo\\\"",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 606554,
            "date": "Tue 24 May 2022 09:46",
            "username": "alicewsm",
            "content": "why not B, \\\"key\\\": \\\"name\\\", \\\"array\\\" <--- there should be a \\\"comma\\\" between value",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 497443,
            "date": "Thu 09 Dec 2021 09:25",
            "username": "I_heart_shuffle_girls",
            "content": "Answer is A even though the formatting is off in my web browser.<br><br>Values passed in using the keyvalue syntax are interpreted as strings. Use the JSON format if you need to pass non-string values such as Booleans, integers, floats, lists, and so on.<br><br>ansible-playbook release.yml --extra-vars \\\"version1.23.45 other_variablefoo\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 481910,
            "date": "Fri 19 Nov 2021 17:06",
            "username": "Ramu12",
            "content": "Using ansible =E2=80=98=E2=80=93 =E2=80=93 exra-vars' tag or =E2=80=98-e=E2=80=98 tag we can pass the variable to playbook.<br><br>ansible-playbook playbook.yml --extra-vars=E2=80=9Cx1 y2=E2=80=9D <br><br>OR<br><br>ansible-playbook playbook.yml -e=E2=80=9Cx1 y2=E2=80=9D<br><br>Refer: https://stackoverflow.com/questions/30662069/how-can-i-pass-variable-to-ansible-playbook-in-the-command-line",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#460",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Ansible provides some methods for controlling how or when a task is ran. Which of the following is a valid method for controlling a task with a loop?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#460",
            "answers": [
              {
                "choice": "<p>A. - with: <value><br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. - with_items: <value><br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. - only_when: <conditional><br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. - items: <value><br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 460 discussion",
        "discusstion": [
          {
            "id": 587718,
            "date": "Mon 18 Apr 2022 16:42",
            "username": "jj22222",
            "content": "delete",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 514252,
            "date": "Fri 31 Dec 2021 23:56",
            "username": "RightAnswers",
            "content": "Another Ansible question - not at all useful for AWS.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 497536,
            "date": "Thu 09 Dec 2021 10:33",
            "username": "I_heart_shuffle_girls",
            "content": "B is correct for now.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#461",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Which difference between core modules and extra modules is not correct?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#461",
            "answers": [
              {
                "choice": "<p>A. Extra modules may one day become core modules<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Core modules are supported by the Ansible team<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Core modules are shipped by default with Ansible<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Extra modules have no support<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 461 discussion",
        "discusstion": [
          {
            "id": 497611,
            "date": "Thu 09 Dec 2021 11:39",
            "username": "I_heart_shuffle_girls",
            "content": "D is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 489848,
            "date": "Mon 29 Nov 2021 13:06",
            "username": "eji",
            "content": "i think the question is the correct, not the incorrect, isn't it?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 338175,
            "date": "Thu 23 Sep 2021 03:37",
            "username": "BKhan",
            "content": "Ans is D<br>These modules are currently shipped with Ansible, but might be shipped separately in the future. They are also mostly maintained by the community. Non-core modules are still fully usable, but may receive slightly lower response rates for issues and pull requests.https://ansible-docs.readthedocs.io/zh/stable-2.0/rst/modules_extra.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#462",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>What is the proper (best practice) way to begin a playbook?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#462",
            "answers": [
              {
                "choice": "<p>A. - hosts: all<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. ...<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. ###<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. ---<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 462 discussion",
        "discusstion": [
          {
            "id": 579979,
            "date": "Sat 02 Apr 2022 19:52",
            "username": "jj22222",
            "content": "D looks right",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 497441,
            "date": "Thu 09 Dec 2021 09:21",
            "username": "I_heart_shuffle_girls",
            "content": "D is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 486641,
            "date": "Thu 25 Nov 2021 13:41",
            "username": "joancarles",
            "content": "D is right:<br>https://docs.ansible.com/ansible/latest/user_guide/playbooks_intro.html#playbook-syntax",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 484825,
            "date": "Tue 23 Nov 2021 09:20",
            "username": "ejieji",
            "content": "i think the answer is Ai mean D",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 488584,
            "date": "Sun 28 Nov 2021 00:58",
            "username": "eji",
            "content": "i mean D",
            "upvote_count": "2",
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
        "question_text": "<p>You have a playbook that includes a task to install a package for a service, put a configuration file for that package on the system and restart the service. The playbook is then run twice in a row. What would you expect Ansible to do on the second run?<br></p>",
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
                "choice": "<p>A. Remove the old package and config file and reinstall and then restart the service.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Take no action on the target host.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Check if the package is installed, check if the file matches the source file, if not reinstall it; restart the service.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Attempt to reinstall the package, copy the file and restart the service.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 463 discussion",
        "discusstion": [
          {
            "id": 616810,
            "date": "Wed 15 Jun 2022 17:17",
            "username": "monkalways",
            "content": "Remove. It's an Ansible question.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#464",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Which tool will Ansible not use, even if available, to gather facts?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#464",
            "answers": [
              {
                "choice": "<p>A. facter<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. lsb_release<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Ansible setup module<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. ohai<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 464 discussion",
        "discusstion": [
          {
            "id": 497548,
            "date": "Thu 09 Dec 2021 10:42",
            "username": "I_heart_shuffle_girls",
            "content": "B is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#465",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>If a variable is assigned in the `vars' section of a playbook, where is the proper place to override that variable?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#465",
            "answers": [
              {
                "choice": "<p>A. Inventory group var<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. playbook host_vars<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. role defaults<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. extra vars<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 465 discussion",
        "discusstion": [
          {
            "id": 497437,
            "date": "Thu 09 Dec 2021 09:19",
            "username": "I_heart_shuffle_girls",
            "content": "D is correct.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 377311,
            "date": "Mon 25 Oct 2021 19:06",
            "username": "peddyua",
            "content": "Instead of worrying about variable precedence, we encourage you to think about how easily or how often you want to override a variable when deciding where to set it. If you are not sure what other variables are defined, and you need a particular value, use --extra-vars (-e) to override all other variables",
            "upvote_count": "4",
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
        "question_text": "<p>If Ansible encounters a resource that does not meet the requirements specified in the play it makes the necessary changes to the resource; however if the resource is already in the desired state Ansible will do nothing. This is an example of which methodology?<br></p>",
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
                "choice": "<p>A. Idempotency<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Immutability<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Convergence<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Infrastructure as Code<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 466 discussion",
        "discusstion": [
          {
            "id": 514256,
            "date": "Sat 01 Jan 2022 00:01",
            "username": "RightAnswers",
            "content": "Another Ansible question - not at all useful for AWS...",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 514254,
            "date": "Fri 31 Dec 2021 23:58",
            "username": "RightAnswers",
            "content": "Another Ansible question - not at all useful for AWS.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#467",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>When writing plays, tasks and playbooks, Ansible fully supports which high level language to describe these?<br></p>",
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
                "choice": "<p>A. YAML<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Python<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. XML<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. JSON<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 467 discussion",
        "discusstion": [
          {
            "id": 617309,
            "date": "Thu 16 Jun 2022 17:16",
            "username": "gr3y_matter",
            "content": "YAML is a data serialization language<br>JSON is a language-independent data interchange format<br>XML is a markup language<br><br>Python is a high-level programming language",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 553077,
            "date": "Mon 21 Feb 2022 19:12",
            "username": "dzenadcu",
            "content": "Ansible modules can be written in any language that can return JSON, such as Ruby, Python, or bash. https://www.ansible.com/overview/how-ansible-works",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 533777,
            "date": "Thu 27 Jan 2022 14:29",
            "username": "cheerimp",
            "content": "But only Python is a high-level language",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 516151,
            "date": "Tue 04 Jan 2022 01:32",
            "username": "Ray0411",
            "content": "Bpython ruby powershell",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 503903,
            "date": "Fri 17 Dec 2021 22:09",
            "username": "RightAnswers",
            "content": "This is an Ansible question. I am not sure how this question is related to AWS?",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 497469,
            "date": "Thu 09 Dec 2021 09:53",
            "username": "I_heart_shuffle_girls",
            "content": "Answer is A. ",
            "upvote_count": "3",
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
        "question_text": "<p>What is the expected behavior if Ansible is called with `=CB=9Cansible-playbook -i localhost playbook.yml'?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#468",
            "answers": [
              {
                "choice": "<p>A. Ansible will attempt to read the inventory file named 'localhost'<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Ansible will run the plays locally.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Ansible will run the playbook on the host named 'localhost'<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Ansible won't run, this is invalid command line syntax<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 468 discussion",
        "discusstion": [
          {
            "id": 508165,
            "date": "Thu 23 Dec 2021 23:15",
            "username": "RightAnswers",
            "content": "Hmmmm.... Another Ansible question - not useful for AWS",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 497518,
            "date": "Thu 09 Dec 2021 10:24",
            "username": "I_heart_shuffle_girls",
            "content": "A is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#469",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>The Ansible Inventory system allows many attributes to be defined within it. Which item below is not one of these?<br></p>",
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
                "choice": "<p>A. Group variables<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Host groups<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Include vars<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Children groups<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 469 discussion",
        "discusstion": [
          {
            "id": 521532,
            "date": "Tue 11 Jan 2022 13:38",
            "username": "Dagger2_1",
            "content": "Someone may be adding garbage questions to dilute quality of the content. Experienced people please flag.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 503919,
            "date": "Fri 17 Dec 2021 23:31",
            "username": "RightAnswers",
            "content": "Hmm... Another Ansible Question. Now sure how this is related to AWS??",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 497481,
            "date": "Thu 09 Dec 2021 09:59",
            "username": "I_heart_shuffle_girls",
            "content": "I believe C is correct.",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#470",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>When writing custom Ansible modules, which language is not supported?<br></p>",
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
                "choice": "<p>A. Python<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. C++<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Bash<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. All of the languages listed are supported<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 470 discussion",
        "discusstion": [
          {
            "id": 579956,
            "date": "Sat 02 Apr 2022 19:06",
            "username": "jj22222",
            "content": "all are supported<br><br>is this on the test?",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 497434,
            "date": "Thu 09 Dec 2021 09:16",
            "username": "I_heart_shuffle_girls",
            "content": "D is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 479879,
            "date": "Wed 17 Nov 2021 09:45",
            "username": "kowalkowal",
            "content": "D - https://opensource.com/article/19/3/developing-ansible-modules<br>Custom Ansible modules 101<br>- JSON (JavaScript Object Notation) in stdout: that's the contract!<br>- They can be written in any language, but =E2=80=A6<br>- Python is usually the best option (or the second best)",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#471",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>When specifying more than one conditional requirements for a task, what is the proper method?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#471",
            "answers": [
              {
                "choice": "<p>A. - when: foo\"hello\" and bar\"world\"<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. - when: foo\"hello\" - when: bar\"world\"<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. - when: foo\"hello\" && bar\"world\"<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. - when: foo is \"hello\" and bar is \"world\"<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 471 discussion",
        "discusstion": [
          {
            "id": 508574,
            "date": "Fri 24 Dec 2021 17:28",
            "username": "szl0144",
            "content": "will Ansible question be shown in the exam?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 503933,
            "date": "Sat 18 Dec 2021 00:16",
            "username": "RightAnswers",
            "content": "Hmmm... another Ansible question. Useless for AWS CDOP.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 497489,
            "date": "Thu 09 Dec 2021 10:05",
            "username": "I_heart_shuffle_girls",
            "content": "A is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#472",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Ansible supports running Playbook on the host directly or via SSH. How can Ansible be told to run its playbooks directly on the host?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#472",
            "answers": [
              {
                "choice": "<p>A. Setting 'connection: local' in the tasks that run locally.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Specifying '-type local' on the command line.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. It does not need to be specified; it is the default.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Setting 'connection: local' in the Playbook.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 472 discussion",
        "discusstion": [
          {
            "id": 517848,
            "date": "Wed 05 Jan 2022 23:58",
            "username": "RightAnswers",
            "content": "Since when Ansible is part of AWS certification?<br>https://d1.awsstatic.com/training-and-certification/docs-devops-pro/AWS-Certified-DevOps-Engineer-Professional_Exam-Guide.pdf<br>Pages 8-10",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 497556,
            "date": "Thu 09 Dec 2021 10:45",
            "username": "I_heart_shuffle_girls",
            "content": "D is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 339574,
            "date": "Mon 27 Sep 2021 02:22",
            "username": "GCP_user",
            "content": "https://docs.ansible.com/ansible/latest/user_guide/playbooks_delegation.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#473",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>What is the main difference between calling the commands `=CB=9Cansible' and `=CB=9Cansible-playbook' on the command line?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#473",
            "answers": [
              {
                "choice": "<p>A. 'ansible' is for setting configuration and environment variables which 'ansible-playbook' will use when running plays.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. 'ansible-playbook' is for running entire Playbooks while 'ansible' is for calling ad-hoc commands.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. 'ansible-playbook' runs the playbooks by using the 'ansible' command to run the individual plays<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. 'ansible' is for running individual plays and 'ansible-playbook' is for running the entire playbook.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 473 discussion",
        "discusstion": [
          {
            "id": 497608,
            "date": "Thu 09 Dec 2021 11:36",
            "username": "I_heart_shuffle_girls",
            "content": "B is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 339577,
            "date": "Thu 30 Sep 2021 05:21",
            "username": "GCP_user",
            "content": "https://docs.ansible.com/ansible/latest/user_guide/intro_adhoc.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#474",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Which answer is the proper syntax for specifying two target hosts on the command line when running an Ansible Playbook?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#474",
            "answers": [
              {
                "choice": "<p>A. ansible-playbook -h host1.example.com -i all playbook.yml<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. ansible-playbook -i host1.example.com playbook.yml<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. ansible-playbook -h host1.example.com,host2.example.com playbook.yml<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. ansible-playbook -i host1.example.com,host2.example.com playbook.yml<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 474 discussion",
        "discusstion": [
          {
            "id": 497663,
            "date": "Thu 09 Dec 2021 12:11",
            "username": "I_heart_shuffle_girls",
            "content": "D is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 339599,
            "date": "Fri 15 Oct 2021 16:47",
            "username": "GCP_user",
            "content": "https://docs.ansible.com/ansible/latest/user_guide/intro_patterns.html<br>Patterns and ansible-playbook flags<br>You can change the behavior of the patterns defined in playbooks using command-line options. For example, you can run a playbook that defines hosts: all on a single host by specifying -i 127.0.0.2, (note the trailing comma). This works even if the host you target is not defined in your inventory. You can also limit the hosts you target on a particular run with the --limit flag:<br><br>ansible-playbook site.yml --limit datacenter2",
            "upvote_count": "1",
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
        "question_text": "<p>What is the purpose of a Docker swarm worker node?<br></p>",
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
                "choice": "<p>A. scheduling services<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. service swarm node HTTP API endpoints<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. executing containers<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. maintaining cluster state<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 475 discussion",
        "discusstion": [
          {
            "id": 497615,
            "date": "Thu 09 Dec 2021 11:42",
            "username": "I_heart_shuffle_girls",
            "content": "C is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 402730,
            "date": "Mon 11 Oct 2021 16:54",
            "username": "shwetapathak2301",
            "content": "CCCCCCCCCCC",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 339609,
            "date": "Tue 05 Oct 2021 20:00",
            "username": "GCP_user",
            "content": "Nothing is Docker swarm worker node. You can create a swarm of one manager node.",
            "upvote_count": "1",
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
        "question_text": "<p>You are building a Docker image with the following Dockerfile. How many layers will the resulting image have?<br><br>FROM scratch -<br><br>CMD /app/hello.sh -<br></p>",
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
                "choice": "<p>A. 2<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. 4<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. 1<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. 3<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 476 discussion",
        "discusstion": [
          {
            "id": 636503,
            "date": "Mon 25 Jul 2022 08:57",
            "username": "nqthien041292",
            "content": "Vote D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 517010,
            "date": "Tue 04 Jan 2022 22:39",
            "username": "RightAnswersguchao2000cloudstudent1234",
            "content": "As described in the link: https://docs.docker.com/storage/storagedriver/, the DockerFile contain only one command which runs on the container layer. The container layer is a Read/Write layer. The CMD instruction specifies what command to run within the container, which only modifies the image's metadata, which does not produce an image layer.<br>So, there is only one layer i.e. the container layer.There is only 1 layer, but it's a docker image layer, not a container layer:<br>FROM -> 1 image layer<br>CMD -> no image layer<br>No container -> no container layerExplanation:FROM scratch<br>CMD /app/hello.sh<br>The image contains all the layers from the base image (only one in this case, since we're building rom scratch), plus a new layer with the CMD instruction, and a read-write container layer.<br><br>Reference: https://docs.docker.com/engine/userguide/storagedriver/imagesandcontainers/#sharingpromotes-smaller-images<br><br>Answer is D.  3 layers.",
            "upvote_count": "313",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 653698,
            "date": "Tue 30 Aug 2022 01:34",
            "username": "guchao2000",
            "content": "There is only 1 layer, but it's a docker image layer, not a container layer:<br>FROM -> 1 image layer<br>CMD -> no image layer<br>No container -> no container layer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 587656,
            "date": "Mon 18 Apr 2022 14:38",
            "username": "cloudstudent1234",
            "content": "Explanation:FROM scratch<br>CMD /app/hello.sh<br>The image contains all the layers from the base image (only one in this case, since we're building rom scratch), plus a new layer with the CMD instruction, and a read-write container layer.<br><br>Reference: https://docs.docker.com/engine/userguide/storagedriver/imagesandcontainers/#sharingpromotes-smaller-images<br><br>Answer is D.  3 layers.",
            "upvote_count": "3",
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
        "question_text": "<p>What storage driver does Docker generally recommend that you use if it is available?<br></p>",
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
                "choice": "<p>A. zfs<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. btrfs<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. aufs<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. overlay<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 477 discussion",
        "discusstion": [
          {
            "id": 497593,
            "date": "Thu 09 Dec 2021 11:19",
            "username": "I_heart_shuffle_girls",
            "content": "If overlay2 is not available I would go with aufs. In this case answer is C.  If D was overlay2 answer would be D. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 377321,
            "date": "Mon 01 Nov 2021 13:23",
            "username": "peddyua",
            "content": "overlay2 is the preferred storage driver, for all currently supported Linux distributions, and requires no extra configuration.<br><br>I would stick to aufs in this case....as overlay isnot overlay2",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 343944,
            "date": "Sat 23 Oct 2021 22:33",
            "username": "AnilaC",
            "content": "Ans id D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 338729,
            "date": "Mon 18 Oct 2021 12:39",
            "username": "BKhanD2",
            "content": "Ans is D<br>Previously it was aufs but currently, in dockers we use overlay driveroverlay is deprecated. overlay2 is current preferred driver. however overlay2 is not in the options on this question hence i would go with aufs<br><br>https://docs.docker.com/storage/storagedriver/select-storage-driver/#:~:textDocker%20supports%20the%20following%20storage,had%20no%20support%20for%20overlay2%20.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 382516,
            "date": "Tue 02 Nov 2021 09:36",
            "username": "D2",
            "content": "overlay is deprecated. overlay2 is current preferred driver. however overlay2 is not in the options on this question hence i would go with aufs<br><br>https://docs.docker.com/storage/storagedriver/select-storage-driver/#:~:textDocker%20supports%20the%20following%20storage,had%20no%20support%20for%20overlay2%20.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#478",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>In which Docker Swarm model does the swarm manager distribute a specific number of replica tasks among the nodes based upon the scale you set in the desired state?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#478",
            "answers": [
              {
                "choice": "<p>A. distributed services<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. scaled services<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. replicated services<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. global services<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 478 discussion",
        "discusstion": [
          {
            "id": 519865,
            "date": "Sun 09 Jan 2022 03:20",
            "username": "herohiro",
            "content": "Does AWS ask us about Docker Swarm?",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#479",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>On which local address does the Docker DNS server listen?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#479",
            "answers": [
              {
                "choice": "<p>A. 127.0.0.1<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. 127.0.0.111<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. 127.0.0.254<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. 127.0.0.11<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 479 discussion",
        "discusstion": [
          {
            "id": 497623,
            "date": "Thu 09 Dec 2021 11:46",
            "username": "I_heart_shuffle_girls",
            "content": "D is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 339621,
            "date": "Wed 20 Oct 2021 05:12",
            "username": "GCP_user",
            "content": "http://docs.docker.oeynet.com/engine/userguide/networking/configure-dns/<br>Feel like this content is old too.",
            "upvote_count": "1",
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
        "question_text": "<p>What are the default memory limit policies for a Docker container?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#480",
            "answers": [
              {
                "choice": "<p>A. Limited memory, limited kernel memory<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Unlimited memory, limited kernel memory<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Limited memory, unlimited kernel memory<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Unlimited memory, unlimited kernel memory<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 480 discussion",
        "discusstion": [
          {
            "id": 587565,
            "date": "Mon 18 Apr 2022 10:48",
            "username": "venuperandurulondon",
            "content": "D is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 514794,
            "date": "Sun 02 Jan 2022 04:05",
            "username": "nqthien041292",
            "content": "Vote D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 497647,
            "date": "Thu 09 Dec 2021 12:00",
            "username": "I_heart_shuffle_girls",
            "content": "D is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 377323,
            "date": "Tue 12 Oct 2021 21:30",
            "username": "peddyua",
            "content": "By default, Docker does not apply memory limitations to individual containers. Containers can consume all available memory of the host",
            "upvote_count": "1",
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
        "question_text": "<p>What needs to be done in order to remotely access a Docker daemon running on Linux?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#481",
            "answers": [
              {
                "choice": "<p>A. add certificate authentication to the docker API<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. change the encryption level to TLS<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. enable the TCP socket<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. bind the Docker API to a unix socket<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 481 discussion",
        "discusstion": [
          {
            "id": 497624,
            "date": "Thu 09 Dec 2021 11:47",
            "username": "I_heart_shuffle_girls",
            "content": "C is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 402701,
            "date": "Sat 06 Nov 2021 15:55",
            "username": "shwetapathak2301",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#482",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Which of the following Dockerfile commands cannot be overridden at runtime?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#482",
            "answers": [
              {
                "choice": "<p>A. VOLUME<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. USER<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. ADD<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. CMD<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 482 discussion",
        "discusstion": [
          {
            "id": 714670,
            "date": "Wed 09 Nov 2022 15:48",
            "username": "RightAnswers",
            "content": "Four of the Dockerfile commands cannot be overridden at runtime: FROM , MAINTAINER , RUN , and ADD",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 625856,
            "date": "Fri 01 Jul 2022 21:15",
            "username": "nebojsaMa",
            "content": "I belive D because all relative paths (of the host) used inside the Compose file will be relative to the docker-compose.yml file. The entrypoint, working_dir, command,and expose field values override the ENTRYPOINT, WORKDIR, CMD and EXPOSE instructions of the image from which the container is being created.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 497454,
            "date": "Thu 09 Dec 2021 09:39",
            "username": "I_heart_shuffle_girls",
            "content": "Really feel like the answer should be D not C. ",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 480753,
            "date": "Thu 18 Nov 2021 14:52",
            "username": "haris14",
            "content": "Should be .Dockerfile not docker compose file",
            "upvote_count": "3",
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
        "question_text": "<p>When deploying to a Docker swarm, which section of the docker-compose file defines configuration related to the deployment and running of services?<br></p>",
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
                "choice": "<p>A. services<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. build<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. deploy<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. args<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 483 discussion",
        "discusstion": [
          {
            "id": 617307,
            "date": "Thu 16 Jun 2022 17:07",
            "username": "gr3y_matter",
            "content": "C- https://docs.docker.com/engine/swarm/stack-deploy/#:~:textyou%20can%20use%20docker%20stack%20deploy%20to%20deploy%20a%20complete%20application%20stack%20to%20the%20swarm.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 497466,
            "date": "Thu 09 Dec 2021 09:49",
            "username": "I_heart_shuffle_girls",
            "content": "I agree with C. ",
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
        "question_text": "<p>Which of the following is NOT an advantage of Docker's content addressable storage model?<br></p>",
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
                "choice": "<p>A. random UUIDs improve filesystem performance<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. improved security<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. guarantees data integrity after push, pull, load, and save operations<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. avoids content ID collisions<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 485 discussion",
        "discusstion": [
          {
            "id": 497616,
            "date": "Thu 09 Dec 2021 11:42",
            "username": "I_heart_shuffle_girls",
            "content": "A is correct.",
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
        "question_text": "<p>What flag would you use to limit a Docker container's memory usage to 128 megabytes?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#486",
            "answers": [
              {
                "choice": "<p>A. -memory 128m<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. -m 128m<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. --memory-reservation 128m<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. -m 128MB<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 486 discussion",
        "discusstion": [
          {
            "id": 497585,
            "date": "Thu 09 Dec 2021 11:14",
            "username": "I_heart_shuffle_girls",
            "content": "B is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#487",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>What is the only layer in a Docker image that is not read-only?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#487",
            "answers": [
              {
                "choice": "<p>A. they are all read-only<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. none are read-only<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. the first layer<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. the last layer<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 487 discussion",
        "discusstion": [
          {
            "id": 641060,
            "date": "Tue 02 Aug 2022 07:12",
            "username": "hubekpeter",
            "content": "The major difference between a container and an image is the top writable layer. All writes to the container that add new or modify existing data are stored in this writable layer. When the container is deleted the writable layer is also deleted. The underlying image remains unchanged.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 583441,
            "date": "Sat 09 Apr 2022 20:17",
            "username": "bianca_93",
            "content": "D - is correct because the last layer is read-write. Each layer except the very last one is read-only. I think it is a trick question.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 548030,
            "date": "Tue 15 Feb 2022 22:07",
            "username": "bobsmith2000",
            "content": "For an image they are all read-only.<br>But when you created a consumer out of an image, the new read-write layer is added on top of all image's layers.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 506219,
            "date": "Tue 21 Dec 2021 16:04",
            "username": "RightAnswers",
            "content": "D<br>https://docs.docker.com/storage/storagedriver/#images-and-layers",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 497515,
            "date": "Thu 09 Dec 2021 10:23",
            "username": "I_heart_shuffle_girls",
            "content": "D is correct.",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#489",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>What does the Docker network docker_gwbridge do?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#489",
            "answers": [
              {
                "choice": "<p>A. allows communication between containers on the same host<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. allows communication between swarm nodes on different hosts<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. allows communication between swarm nodes on the same host<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. allows communication between containers on the different hosts<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 489 discussion",
        "discusstion": [
          {
            "id": 497633,
            "date": "Thu 09 Dec 2021 11:51",
            "username": "I_heart_shuffle_girls",
            "content": "B is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#490",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Which services can be used as optional components of setting up a new Trail in CloudTrail?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#490",
            "answers": [
              {
                "choice": "<p>A. KMS, SNS and SES<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. CloudWatch, S3 and SNS<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. KMS, Cloudwatch and SNS<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. KMS, S3 and CloudWatch<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 490 discussion",
        "discusstion": [
          {
            "id": 519830,
            "date": "Sun 09 Jan 2022 00:40",
            "username": "RightAnswers",
            "content": "C<br>The question asks for OPTIONAL settings.<br>kms, sns, cloudwatch are optional equirements. S3 is a madatory requirement.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 518988,
            "date": "Fri 07 Jan 2022 14:40",
            "username": "hogehogefoobar",
            "content": "D<br>https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-create-a-trail-using-the-console-first-time.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 497572,
            "date": "Thu 09 Dec 2021 11:04",
            "username": "I_heart_shuffle_girls",
            "content": "C is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 489842,
            "date": "Mon 29 Nov 2021 12:50",
            "username": "ejiI_heart_shuffle_girls",
            "content": "Why not A?SES is not a valid selection when creating a cloudtrail.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 497573,
            "date": "Thu 09 Dec 2021 11:04",
            "username": "I_heart_shuffle_girls",
            "content": "SES is not a valid selection when creating a cloudtrail.",
            "upvote_count": "1",
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
        "question_text": "<p>What is AWS CloudTrail Processing Library?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#491",
            "answers": [
              {
                "choice": "<p>A. A static library with CloudTrail log files in a movable format machine code that is directly executable<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. An object library with CloudTrail log files in a movable format machine code that is usually not directly executable<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. A Java library that makes it easy to build an application that reads and processes CloudTrail log files<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. A PHP library that renders various generic containers needed for CloudTrail log files<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 491 discussion",
        "discusstion": [
          {
            "id": 497640,
            "date": "Thu 09 Dec 2021 11:56",
            "username": "I_heart_shuffle_girls",
            "content": "C is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 402364,
            "date": "Tue 26 Oct 2021 03:29",
            "username": "shwetapathak2301",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 339191,
            "date": "Sun 24 Oct 2021 02:42",
            "username": "GCP_user",
            "content": "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/use-the-cloudtrail-processing-library.html",
            "upvote_count": "1",
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
        "question_text": "<p>Using the AWS CLI, which command retrieves CloudTrail trail settings, including the status of the trail itself?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#492",
            "answers": [
              {
                "choice": "<p>A. aws cloudtrail return-trails<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. aws cloudtrail validate-settings<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. aws cloudtrail get-settings<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. aws cloudtrail describe-trails<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 492 discussion",
        "discusstion": [
          {
            "id": 497574,
            "date": "Thu 09 Dec 2021 11:05",
            "username": "I_heart_shuffle_girls",
            "content": "D is correct.<br><br>https://docs.aws.amazon.com/cli/latest/reference/cloudtrail/index.html",
            "upvote_count": "1",
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
        "question_text": "<p>You are running Amazon CloudTrail on an Amazon S3 bucket and look at your most recent log. You notice that the entries include the ListThings and<br>CreateThings actions and wonder if your devices have been hacked. Based on these entries, what service would you be concerned may have been hacked?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#493",
            "answers": [
              {
                "choice": "<p>A. Amazon Inspector<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. AWS IoT<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. AWS CodePipeline<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Amazon Glacier<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 493 discussion",
        "discusstion": [
          {
            "id": 642862,
            "date": "Fri 05 Aug 2022 11:01",
            "username": "kowalkowal",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 617317,
            "date": "Thu 16 Jun 2022 17:52",
            "username": "gr3y_matter",
            "content": "https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#:~:textFor%20details%20about%20the%20columns%20in%20the%20following%20table%2C%20see%20Actions%20table.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 599830,
            "date": "Wed 11 May 2022 04:09",
            "username": "nqthien041292",
            "content": "ListThings and CreateThings come from IOT",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 581222,
            "date": "Tue 05 Apr 2022 13:49",
            "username": "jj22222",
            "content": "A.  Amazon Inspector",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 550193,
            "date": "Fri 18 Feb 2022 12:55",
            "username": "rubiorubio1",
            "content": "i would vote for b",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 534525,
            "date": "Fri 28 Jan 2022 09:07",
            "username": "SonamDhingra",
            "content": "Option-B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 395659,
            "date": "Sat 09 Oct 2021 01:32",
            "username": "muell_xyz",
            "content": "B<br><br>https://docs.aws.amazon.com/iot/latest/apireference/API_ListThings.html",
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
        "question_text": "<p>When logging with Amazon CloudTrail, API call information for services with regional end points is ____.<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#494",
            "answers": [
              {
                "choice": "<p>A. captured and processed in the same region as to which the API call is made and delivered to the region associated with your Amazon S3 bucket<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. captured, processed, and delivered to the region associated with your Amazon S3 bucket<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. captured in the same region as to which the API call is made and processed and delivered to the region associated with your Amazon S3 bucket<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. captured in the region where the end point is located, processed in the region where the CloudTrail trail is configured, and delivered to the region associated with your Amazon S3 bucket<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 494 discussion",
        "discusstion": [
          {
            "id": 548414,
            "date": "Wed 16 Feb 2022 09:47",
            "username": "SonamDhingra",
            "content": "The answer is A. <br>https://aws.amazon.com/cloudtrail/faqs/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 497609,
            "date": "Thu 09 Dec 2021 11:37",
            "username": "I_heart_shuffle_girls",
            "content": "A is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#495",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>When logging with Amazon CloudTrail, API call information for services with single end points is ____.<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#495",
            "answers": [
              {
                "choice": "<p>A. captured and processed in the same region as to which the API call is made and delivered to the region associated with your Amazon S3 bucket<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. captured, processed, and delivered to the region associated with your Amazon S3 bucket<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. captured in the same region as to which the API call is made and processed and delivered to the region associated with your Amazon S3 bucket<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. captured in the region where the end point is located, processed in the region where the CloudTrail trail is configured, and delivered to the region associated with your Amazon S3 bucket<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 495 discussion",
        "discusstion": [
          {
            "id": 714682,
            "date": "Wed 09 Nov 2022 16:12",
            "username": "RightAnswers",
            "content": "https://www.amazonaws.cn/en/cloudtrail/faqs/<br>Q: Where are my log files stored and processed before they are delivered to my Amazon S3 bucket?<br>Ans: Activity information for services with regional end points (EC2, RDS etc.) is captured and processed in the same region as to which the action is made and delivered to the region associated with your Amazon S3 bucket.<br>Action information for services with single end points (IAM, STS, etc.) is captured in the region where the end point is located, processed in the region where the CloudTrail trail is configured and delivered to the region associated with your Amazon S3 bucket.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 497603,
            "date": "Thu 09 Dec 2021 11:25",
            "username": "I_heart_shuffle_girls",
            "content": "D is correct.",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#496",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>What is the correct syntax for the AWS command to create a single region trail?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#496",
            "answers": [
              {
                "choice": "<p>A. aws create-trail --name trailname --s3-object objectname<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. aws cloudtrail --s3-regionname IPaddress create-trail --name trailname<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. aws cloudtrail create-trail --name trailname --s3-bucket-name bucketname<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. aws cloudtrail create-trail --name trailname --s3-portnumber IPaddress<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 496 discussion",
        "discusstion": [
          {
            "id": 497590,
            "date": "Thu 09 Dec 2021 11:17",
            "username": "I_heart_shuffle_girls",
            "content": "C is correct.",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#497",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You want to set up the CloudTrail Processing Library to log your bucket operations. Which command will build a .jar file from the CloudTrail Processing Library source code?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#497",
            "answers": [
              {
                "choice": "<p>A. mvn javac mvn -install processor<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. jar install processor<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. build jar -Dgpg.processor<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. mvn clean install -Dgpg.skiptrue<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 497 discussion",
        "discusstion": [
          {
            "id": 402535,
            "date": "Mon 01 Nov 2021 15:13",
            "username": "shwetapathak2301",
            "content": "D is correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 339194,
            "date": "Thu 07 Oct 2021 17:20",
            "username": "GCP_user",
            "content": "https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/setup-project-maven.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#498",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>By default, Amazon CloudTrail logs ____ actions defined by the CloudTrail ____ APIs.<br></p>",
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
                "choice": "<p>A. bucket-level; RESTful<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. object-level; RESTful<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. object-level; SDK<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. bucket-level; SDK<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 498 discussion",
        "discusstion": [
          {
            "id": 497547,
            "date": "Thu 09 Dec 2021 10:42",
            "username": "I_heart_shuffle_girls",
            "content": "A is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 383263,
            "date": "Wed 03 Nov 2021 04:54",
            "username": "Sagardonthineni",
            "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/enable-cloudtrail-logging-for-s3.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#499",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You want to build an application that coordinates work across distributed components, and you find Amazon Simple Workflow Service (Amazon SWF) does this easily. You have enabled logging in CloudTrail, but you are unsure about Amazon SWF actions supported.<br>Which of the following actions is NOT supported?<br></p>",
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
                "choice": "<p>A. RegisterDomain<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. RegisterWorkflowActivity<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. RegisterActivityType<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. RegisterWorkflowType<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 499 discussion",
        "discusstion": [
          {
            "id": 514788,
            "date": "Sun 02 Jan 2022 04:01",
            "username": "nqthien041292",
            "content": "Vote B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 507760,
            "date": "Thu 23 Dec 2021 11:56",
            "username": "Balki",
            "content": "https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-api-by-category.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 402675,
            "date": "Sat 06 Nov 2021 03:54",
            "username": "shwetapathak2301",
            "content": "B is correct",
            "upvote_count": "1",
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
        "question_text": "<p>Consider the portion of a CloudTrail log file below. Which type of event is being captured?<br>\"eventTime\":\"2016-07-16T17:35:32Z\",<br>\"eventSource\":\"signin.amazonaws.com\",<br>\"eventName\":\"ConsoleLogin\",<br>\"awsRegion\":\"us-west-1\",<br>\"sourceIPAddress\":\"192.1.2.10\",<br>...<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#500",
            "answers": [
              {
                "choice": "<p>A. AWS console sign-in<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. AWS log off<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. AWS error<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. AWS deployment<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 500 discussion",
        "discusstion": [
          {
            "id": 540350,
            "date": "Fri 04 Feb 2022 10:53",
            "username": "Erso",
            "content": "the correct answer is A https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-log-file-examples.html",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 449654,
            "date": "Mon 04 Oct 2021 02:50",
            "username": "oopsy",
            "content": "maybe D",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      }
    ]
  }