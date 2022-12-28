var ExamTopic_101_200 = {
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#101",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>How can an EBS volume that is currently attached to an EC2 instance be migrated from one Availability Zone to another?</p>",
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
              "choice": "<p>A. Detach the volume and attach it to another EC2 instance in the other AZ.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Simply create a new volume in the other AZ and specify the original volume as the source.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a snapshot of the volume, and create a new volume from the snapshot in the other AZ.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Detach the volume, then use the ec2-migrate-volume command to move it to another AZ.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 40739,
          "date": "Wed 22 Sep 2021 15:54",
          "username": "CloudFloater",
          "content": "C<br>http://jayendrapatil.com/tag/ebs/",
          "upvote_count": "5"
        },
        {
          "id": 625090,
          "date": "Thu 30 Jun 2022 09:21",
          "username": "TechX",
          "content": "C, easy one",
          "upvote_count": "2"
        },
        {
          "id": 577734,
          "date": "Tue 29 Mar 2022 18:46",
          "username": "jj22222",
          "content": "C.  Create a snapshot of the volume, and create a new volume from the snapshot in the other AZ.",
          "upvote_count": "1"
        },
        {
          "id": 370832,
          "date": "Tue 02 Nov 2021 11:52",
          "username": "01037",
          "content": "C<br>Easy one",
          "upvote_count": "1"
        },
        {
          "id": 297974,
          "date": "Thu 21 Oct 2021 22:04",
          "username": "eji",
          "content": "you can't directly move EBS volume to other avaiblity zone. what you have to do is create snapshot from the volume then create new volume and choose the avaibility zone for that volume, answer is C",
          "upvote_count": "4"
        },
        {
          "id": 173675,
          "date": "Wed 06 Oct 2021 05:32",
          "username": "kaush",
          "content": "The EBS Volumes attached to the EC2 Instance will always have to remain in the same availability zone as the EC2 Instance. Possible reason to this is because of the fact that EBS Volumes are present outside of the host machine and instances have to be connected over the network, if the EBS Volumes are present outside the Availability Zone there can be potential latency issues and subsequent performance degradation.<br><br>What you can do in such scenario is, get the Snapshot of the EBS Volume (Snapshot sequentially captures the state of your EBS Volume and stores it in S3 Bucket (friendly reminder that it will cost you man) ) and post that you have two options , you can either create an EBS Volume from this snapshot in your desired Availability Zone or you can create an AMI from this snapshot in your desired Availability Zone and then go ahead and launch your EC2 instance from it.",
          "upvote_count": "2"
        },
        {
          "id": 54468,
          "date": "Sun 26 Sep 2021 05:43",
          "username": "miracle",
          "content": "Answer is C.  EBS is Available Zone specific, not a Region Specific. You have to complete the snapshot and create new volume in another Available Zone from the snapshot.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#102",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>After launching an instance that you intend to serve as a NAT (Network Address Translation) device in a public subnet you modify your route tables to have the<br>NAT device be the target of internet bound traffic of your private subnet. When you try and make an outbound connection to the internet from an instance in the private subnet, you are not successful.<br>Which of the following steps could resolve the issue?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#102",
          "answers": [
            {
              "choice": "<p>A. Disabling the Source/Destination Check attribute on the NAT instance<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Attaching an Elastic IP address to the instance in the private subnet<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Attaching a second Elastic Network Interface (ENI) to the NAT instance, and placing it in the private subnet<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Attaching a second Elastic Network Interface (ENI) to the instance in the private subnet, and placing it in the public subnet<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 40744,
          "date": "Sat 25 Sep 2021 22:23",
          "username": "CloudFloater",
          "content": "obvious answer: A<br>but, if u want to research more:<br>http://jayendrapatil.com/aws-vpc-nat/",
          "upvote_count": "7"
        },
        {
          "id": 543364,
          "date": "Tue 08 Feb 2022 22:56",
          "username": "jj22222",
          "content": "A looks right",
          "upvote_count": "1"
        },
        {
          "id": 534354,
          "date": "Fri 28 Jan 2022 04:51",
          "username": "AMKazi",
          "content": "A: rest are not needed.",
          "upvote_count": "1"
        },
        {
          "id": 524266,
          "date": "Sat 15 Jan 2022 16:31",
          "username": "MohamedSherif1",
          "content": "A is correct",
          "upvote_count": "1"
        },
        {
          "id": 514340,
          "date": "Sat 01 Jan 2022 04:54",
          "username": "cldy",
          "content": "A correct.",
          "upvote_count": "1"
        },
        {
          "id": 375810,
          "date": "Sat 16 Oct 2021 09:20",
          "username": "kuroro",
          "content": "Disable source/destination checks<br>Each EC2 instance performs source/destination checks by default. This means that the instance must be the source or destination of any traffic it sends or receives. However, a NAT instance must be able to send and receive traffic when the source or destination is not itself. Therefore, you must disable source/destination checks on the NAT instance.<br>https://docs.aws.amazon.com/vpc/latest/userguide/VPC_NAT_Instance.html",
          "upvote_count": "4"
        },
        {
          "id": 370835,
          "date": "Fri 01 Oct 2021 16:01",
          "username": "01037acloudguru",
          "content": "A easy onehope I can have it in my exam",
          "upvote_count": "21"
        },
        {
          "id": 490531,
          "date": "Tue 30 Nov 2021 09:54",
          "username": "acloudguru",
          "content": "hope I can have it in my exam",
          "upvote_count": "1"
        },
        {
          "id": 54764,
          "date": "Wed 29 Sep 2021 10:49",
          "username": "miracle",
          "content": "Answer is A. ",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#103",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your application provides data transformation services. Files containing data to be transformed are first uploaded to Amazon S3 and then transformed by a fleet of spot EC2 instances. Files submitted by your premium customers must be transformed with the highest priority.<br>How should you implement such a system?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#103",
          "answers": [
            {
              "choice": "<p>A. Use a DynamoDB table with an attribute defining the priority level. Transformation instances will scan the table for tasks, sorting the results by priority level.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Route 53 latency based-routing to send high priority tasks to the closest transformation instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use two SQS queues, one for high priority messages, the other for default priority. Transformation instances first poll the high priority queue; if there is no message, they poll the default priority queue.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use a single SQS queue. Each message contains the priority level. Transformation instances poll high-priority messages first.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 40746,
          "date": "Fri 24 Sep 2021 11:55",
          "username": "CloudFloater",
          "content": "simple answer: c<br><br>http://jayendrapatil.com/aws-sqs-simple-queue-service/",
          "upvote_count": "6"
        },
        {
          "id": 638165,
          "date": "Wed 27 Jul 2022 17:24",
          "username": "hilft",
          "content": "C.  directly from jon bonso's exam",
          "upvote_count": "1"
        },
        {
          "id": 534353,
          "date": "Fri 28 Jan 2022 04:44",
          "username": "AMKazi",
          "content": "C is correct",
          "upvote_count": "1"
        },
        {
          "id": 514022,
          "date": "Fri 31 Dec 2021 11:02",
          "username": "cldy",
          "content": "C is correct.",
          "upvote_count": "1"
        },
        {
          "id": 490530,
          "date": "Tue 30 Nov 2021 09:53",
          "username": "acloudguru",
          "content": "easy one for SQS, C, hope I can have it in my exam",
          "upvote_count": "1"
        },
        {
          "id": 370838,
          "date": "Tue 26 Oct 2021 04:15",
          "username": "01037",
          "content": "C<br>Classical solution",
          "upvote_count": "1"
        },
        {
          "id": 54766,
          "date": "Wed 06 Oct 2021 14:42",
          "username": "miracle",
          "content": "Answer is C. ",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#104",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which of the following are characteristics of Amazon VPC subnets? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#104",
          "answers": [
            {
              "choice": "<p>A. Each subnet spans at least 2 Availability Zones to provide a high-availability environment.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Each subnet maps to a single Availability Zone.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. CIDR block mask of /25 is the smallest range supported.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. By default, all subnets can route between each other, whether they are private or public.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Instances in a private subnet can communicate with the Internet only if they have an Elastic IP.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 594942,
          "date": "Sat 30 Apr 2022 11:54",
          "username": "TechIsi",
          "content": "BD is correct, but default all subnets within a VPC can communicate with each other.",
          "upvote_count": "2"
        },
        {
          "id": 543083,
          "date": "Tue 08 Feb 2022 15:03",
          "username": "Student1950",
          "content": "B and D are correct<br>B: he first entry is the default entry for local routing in the VPC; this entry enables the instances ( from private or public)in this VPC to communicate with each other.<br>https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Scenario2.html",
          "upvote_count": "3"
        },
        {
          "id": 531219,
          "date": "Mon 24 Jan 2022 11:25",
          "username": "GeniusMikeLiu",
          "content": "16 IPs is the smallest range for a VPC Subnet -- /28",
          "upvote_count": "2"
        },
        {
          "id": 370841,
          "date": "Wed 03 Nov 2021 12:36",
          "username": "01037",
          "content": "Of course it's BD<br>E is wrong, without igw, a subnet can't communicate with internet.<br>And a private subnet has no igw",
          "upvote_count": "4"
        },
        {
          "id": 359223,
          "date": "Sun 17 Oct 2021 03:38",
          "username": "viet1991",
          "content": "piotr Highly Voted1 year, 8 months ago<br>Subnet is always a single AZ. BD is correct answer.<br> upvoted 14 times",
          "upvote_count": "3"
        },
        {
          "id": 358804,
          "date": "Sat 16 Oct 2021 12:48",
          "username": "Rudrajit",
          "content": "Answer should be BE.  D is a wrong .",
          "upvote_count": "1"
        },
        {
          "id": 358303,
          "date": "Wed 13 Oct 2021 17:22",
          "username": "alfa2",
          "content": "BE should be correct",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#105",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In AWS, which security aspects are the customer's responsibility? (Choose four.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACDF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#105",
          "answers": [
            {
              "choice": "<p>A. Security Group and ACL (Access Control List) settings<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Decommissioning storage devices<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Patch management on the EC2 instance's operating system<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Life-cycle management of IAM credentials<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Controlling physical access to compute resources<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Encryption of EBS (Elastic Block Storage) volumes<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 636328,
          "date": "Mon 25 Jul 2022 04:30",
          "username": "hilft",
          "content": "I saw this in Cloud practitioner.<br>ACDF<br>Anything to deal with physical - > AWS will handle it.",
          "upvote_count": "2"
        },
        {
          "id": 586285,
          "date": "Fri 15 Apr 2022 12:46",
          "username": "tartarus23",
          "content": "Options B and E are about the underlying hardware and physical infrastructure which AWS customers do not have access not responsibility to mintain",
          "upvote_count": "3"
        },
        {
          "id": 536650,
          "date": "Mon 31 Jan 2022 04:57",
          "username": "TG080",
          "content": "Security Group and ACL (Access Control List) settings,Patch management on the EC2 instance's operating system,Life-cycle management of IAM credentials,Encryption of EBS (Elastic Block Storage) volumes",
          "upvote_count": "1"
        },
        {
          "id": 533733,
          "date": "Thu 27 Jan 2022 13:33",
          "username": "zoliv",
          "content": "ACDF.  if only all the Qs are like this!",
          "upvote_count": "1"
        },
        {
          "id": 371087,
          "date": "Thu 07 Oct 2021 09:08",
          "username": "01037",
          "content": "ACDF<br>Easy",
          "upvote_count": "3"
        },
        {
          "id": 359233,
          "date": "Thu 30 Sep 2021 15:11",
          "username": "viet1991",
          "content": "A.  Security Group and ACL (Access Control List) settings<br><br>C.  Patch management on the EC2 instance's operating system<br><br>D.  Life-cycle management of IAM credentials<br><br>F.  Encryption of EBS (Elastic Block Storage) volumes",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#106",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>When you put objects in Amazon S3, what is the indication that an object was successfully stored?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#106",
          "answers": [
            {
              "choice": "<p>A. A HTTP 200 result code and MD5 checksum, taken together, indicate that the operation was successful.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Amazon S3 is engineered for 99.999999999% durability. Therefore there is no need to confirm that data was inserted.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. A success code is inserted into the S3 object metadata.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Each S3 account has a special bucket named _s3_logs. Success codes are written to this bucket with a timestamp and checksum.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 40750,
          "date": "Tue 21 Sep 2021 20:40",
          "username": "CloudFloater",
          "content": "A<br>http://jayendrapatil.com/aws-simple-storage-service-s3-overview/",
          "upvote_count": "8"
        },
        {
          "id": 494909,
          "date": "Mon 06 Dec 2021 06:07",
          "username": "cldy",
          "content": "A.  A HTTP 200 result code and MD5 checksum, taken together, indicate that the operation was successful.",
          "upvote_count": "1"
        },
        {
          "id": 371088,
          "date": "Wed 27 Oct 2021 20:14",
          "username": "01037",
          "content": "Yes A is correct",
          "upvote_count": "1"
        },
        {
          "id": 119945,
          "date": "Tue 26 Oct 2021 03:16",
          "username": "manoj101",
          "content": "A:<br>Here is How to do integrity check.<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/data-integrity-s3/",
          "upvote_count": "2"
        },
        {
          "id": 74145,
          "date": "Wed 20 Oct 2021 01:25",
          "username": "cert123",
          "content": "Answer A",
          "upvote_count": "2"
        },
        {
          "id": 54770,
          "date": "Sun 03 Oct 2021 10:40",
          "username": "miracle",
          "content": "Answer is A. ",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#107",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Within the IAM service a GROUP is regarded as a:</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#107",
          "answers": [
            {
              "choice": "<p>A. A collection of AWS accounts<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. It's the group of EC2 machines that gain the permissions specified in the GROUP.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. There's no GROUP in IAM, but only USERS and RESOURCES.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. A collection of users.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 40752,
          "date": "Sat 02 Oct 2021 21:25",
          "username": "CloudFloater",
          "content": "D<br>http://jayendrapatil.com/aws-iam-overview/",
          "upvote_count": "6"
        },
        {
          "id": 649478,
          "date": "Sat 20 Aug 2022 17:17",
          "username": "Ni_yot",
          "content": "D this is a freebie.Maybe its a control question",
          "upvote_count": "1"
        },
        {
          "id": 625548,
          "date": "Fri 01 Jul 2022 05:09",
          "username": "TechX",
          "content": "what a question, look like practical level haha",
          "upvote_count": "1"
        },
        {
          "id": 577909,
          "date": "Wed 30 Mar 2022 00:45",
          "username": "jj22222",
          "content": "D is right",
          "upvote_count": "1"
        },
        {
          "id": 372720,
          "date": "Mon 25 Oct 2021 14:44",
          "username": "01037",
          "content": "Sure D",
          "upvote_count": "1"
        },
        {
          "id": 74146,
          "date": "Thu 14 Oct 2021 04:49",
          "username": "cert123",
          "content": "D is the correct option",
          "upvote_count": "2"
        },
        {
          "id": 54771,
          "date": "Tue 05 Oct 2021 20:14",
          "username": "miracle",
          "content": "Answer is D.  IAM (Identity and Access Management) Group is a collection of users,",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#108",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Amazon EC2 provides a repository of public data sets that can be seamlessly integrated into AWS cloud-based applications.<br>What is the monthly charge for using the public data sets?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#108",
          "answers": [
            {
              "choice": "<p>A. A 1-time charge of 10$ for all the datasets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. 1$ per dataset per month<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. 10$ per month for all the datasets<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. There is no charge for using the public data sets<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 40754,
          "date": "Wed 22 Sep 2021 22:09",
          "username": "CloudFloater",
          "content": "D<br>http://jayendrapatil.com/aws-ec2-storage/",
          "upvote_count": "6"
        },
        {
          "id": 496455,
          "date": "Wed 08 Dec 2021 02:47",
          "username": "tkanmani76",
          "content": "https://aws.amazon.com/about-aws/whats-new/2008/12/03/public-data-sets-on-aws-now-available/ - Option D",
          "upvote_count": "1"
        },
        {
          "id": 372722,
          "date": "Sun 24 Oct 2021 19:44",
          "username": "01037",
          "content": "Sure D",
          "upvote_count": "1"
        },
        {
          "id": 307550,
          "date": "Mon 11 Oct 2021 03:53",
          "username": "eji",
          "content": "Answer is D",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#109",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In the Amazon RDS Oracle DB engine, the Database Diagnostic Pack and the Database Tuning Pack are only available with __________.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#109",
          "answers": [
            {
              "choice": "<p>A. Oracle Standard Edition<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Oracle Express Edition<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Oracle Enterprise Edition<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. None of these<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 494242,
          "date": "Sun 05 Dec 2021 11:53",
          "username": "cldy",
          "content": "C.  Oracle Enterprise Edition",
          "upvote_count": "2"
        },
        {
          "id": 372723,
          "date": "Fri 05 Nov 2021 03:45",
          "username": "01037",
          "content": "I guess it's C and it is:-)",
          "upvote_count": "1"
        },
        {
          "id": 327406,
          "date": "Mon 01 Nov 2021 00:45",
          "username": "PredaOvde",
          "content": "They really ask this kind of questions?",
          "upvote_count": "4"
        },
        {
          "id": 54783,
          "date": "Sat 23 Oct 2021 19:41",
          "username": "miracle",
          "content": "Answer is C.  Enterprise Edition Options are currently supported under the BYOL model:<br>Advanced Security (Transparent Data Encryption, Native Network Encryption)<br>Partitioning<br>Management Packs (Diagnostic, Tuning)<br>Advanced Compression<br>Total Recall",
          "upvote_count": "3"
        },
        {
          "id": 40757,
          "date": "Thu 07 Oct 2021 17:13",
          "username": "CloudFloater",
          "content": "C<br>https://aws.amazon.com/rds/oracle/faqs/",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#110",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A 3-Ber e-commerce web application is currently deployed on-premises, and will be migrated to AWS for greater scalability and elasticity. The web tier currently shares read-only data using a network distributed file system. The app server tier uses a clustering mechanism for discovery and shared session state that depends on IP multicast. The database tier uses shared-storage clustering to provide database failover capability, and uses several read slaves for scaling. Data on all servers and the distributed file system directory is backed up weekly to off-site tapes.<br>Which AWS storage and database architecture meets the requirements of the application?</p>",
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
              "choice": "<p>A. Web servers: store read-only data in S3, and copy from S3 to root volume at boot time. App servers: share state using a combination of DynamoDB and IP unicast. Database: use RDS with multi-AZ deployment and one or more read replicas. Backup: web servers, app servers, and database backed up weekly to Glacier using snapshots.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Web servers: store read-only data in an EC2 NFS server, mount to each web server at boot time. App servers: share state using a combination of DynamoDB and IP multicast. Database: use RDS with multi- AZ deployment and one or more Read Replicas. Backup: web and app servers backed up weekly via AMIs, database backed up via DB snapshots.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Web servers: store read-only data in S3, and copy from S3 to root volume at boot time. App servers: share state using a combination of DynamoDB and IP unicast. Database: use RDS with multi-AZ deployment and one or more Read Replicas. Backup: web and app servers backed up weekly via AMIs, database backed up via DB snapshots.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Web servers: store read-only data in S3, and copy from S3 to root volume at boot time App servers: share state using a combination of DynamoDB and IP unicast. Database: use RDS with multi-AZ deployment. Backup: web and app servers backed up weekly via AMIs, database backed up via DB snapshots.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 661353,
          "date": "Tue 06 Sep 2022 16:55",
          "username": "Khannas",
          "content": "C.  <br>Same question as 87",
          "upvote_count": "1"
        },
        {
          "id": 659312,
          "date": "Sun 04 Sep 2022 15:37",
          "username": "welcomeYM",
          "content": "CCCCCC",
          "upvote_count": "2"
        },
        {
          "id": 513325,
          "date": "Thu 30 Dec 2021 13:01",
          "username": "AwsSuperTrooper",
          "content": "I conclude answer C by means of elimination:<br>A -> database backup to glacier is not possible<br>B -> IP multicast is not supported<br>D -> no read slaves as needed per requirements",
          "upvote_count": "2"
        },
        {
          "id": 513323,
          "date": "Thu 30 Dec 2021 12:59",
          "username": "AwsSuperTrooperAwsSuperTrooper",
          "content": "I conclude answer D by means of elimination:<br>A -> database backup to glacier is not possible<br>B -> IP multicast is not supported<br>D -> no read slaves as needed per requirementsShould be C instead of D ;-(",
          "upvote_count": "11"
        },
        {
          "id": 513327,
          "date": "Thu 30 Dec 2021 13:01",
          "username": "AwsSuperTrooper",
          "content": "Should be C instead of D ;-(",
          "upvote_count": "1"
        },
        {
          "id": 495909,
          "date": "Tue 07 Dec 2021 12:10",
          "username": "cldy",
          "content": "B.  Web servers: store read-only data in an EC2 NFS server; mount to each web server at boot time. App servers: share state using a combination of DynamoDB and IP multicast. Database: use RDS with multi-AZ deployment and one or more Read Replicas. Backup: web and app servers backed up weekly via AMIs, database backed up via DB snapshots.",
          "upvote_count": "1"
        },
        {
          "id": 418241,
          "date": "Sat 30 Oct 2021 15:05",
          "username": "Kinnam",
          "content": "Repeated question, refer to No.87. Answer is C. ",
          "upvote_count": "1"
        },
        {
          "id": 373104,
          "date": "Tue 26 Oct 2021 21:48",
          "username": "01037vbalvbal",
          "content": "If B is using EFS, I'll choose B. <br>Is it really a good idea of \\\"copy from S3 to root volume at boot time\\\"?Dynamo DB & Multicast?B is right choice.",
          "upvote_count": "311"
        },
        {
          "id": 503292,
          "date": "Fri 17 Dec 2021 02:51",
          "username": "vbalvbal",
          "content": "Dynamo DB & Multicast?B is right choice.",
          "upvote_count": "11"
        },
        {
          "id": 503298,
          "date": "Fri 17 Dec 2021 03:11",
          "username": "vbal",
          "content": "B is right choice.",
          "upvote_count": "1"
        },
        {
          "id": 371949,
          "date": "Tue 26 Oct 2021 09:36",
          "username": "hess",
          "content": "You cannot store snapshots directly in glacier, so the answer should be C. ",
          "upvote_count": "1"
        },
        {
          "id": 331650,
          "date": "Wed 06 Oct 2021 00:11",
          "username": "ExtHowahlbergusa",
          "content": "This question seems old now AWS support IP multicast so NFS for shared file system than coping data at booting.IP multicast is supported only by TGW and that has to be used in conjunction with GRE tunnels. No way it is supported within a VPC. ",
          "upvote_count": "11"
        },
        {
          "id": 532475,
          "date": "Wed 26 Jan 2022 00:02",
          "username": "wahlbergusa",
          "content": "IP multicast is supported only by TGW and that has to be used in conjunction with GRE tunnels. No way it is supported within a VPC. ",
          "upvote_count": "1"
        },
        {
          "id": 329653,
          "date": "Sat 25 Sep 2021 06:20",
          "username": "kenkool",
          "content": "Answer is B.  <br>NFS for shared file system.",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#111",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user is running a batch process on EBS backed EC2 instances. The batch process launches few EC2 instances to process Hadoop Map reduce jobs which can run between 50 ?600 minutes or sometimes for even more time. The user wants a configuration that can terminate the instance only when the process is completed.<br>How can the user configure this with CloudWatch?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#111",
          "answers": [
            {
              "choice": "<p>A. Configure a job which terminates all instances after 600 minutes<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. It is not possible to terminate instances automatically<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the CloudWatch action to terminate the instance when the CPU utilization falls below 5%<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up the CloudWatch with Auto Scaling to terminate all the instances<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 40779,
          "date": "Wed 29 Sep 2021 07:07",
          "username": "CloudFloater",
          "content": "C<br><br>http://jayendrapatil.com/category/aws/ec2/",
          "upvote_count": "9"
        },
        {
          "id": 613557,
          "date": "Thu 09 Jun 2022 02:46",
          "username": "Anhdd",
          "content": "C for me",
          "upvote_count": "1"
        },
        {
          "id": 605044,
          "date": "Sun 22 May 2022 01:01",
          "username": "user0001",
          "content": "I think it is D , since this job a MapReduce there is no guarantee some nodes my be below 5% ,you should consider them as group",
          "upvote_count": "3"
        },
        {
          "id": 506878,
          "date": "Wed 22 Dec 2021 10:30",
          "username": "Ni_yot",
          "content": "C for sure",
          "upvote_count": "1"
        },
        {
          "id": 499341,
          "date": "Sat 11 Dec 2021 11:46",
          "username": "cldy",
          "content": "C.  Configure the CloudWatch action to terminate the instance when the CPU utilization falls below 5%",
          "upvote_count": "1"
        },
        {
          "id": 498999,
          "date": "Sat 11 Dec 2021 00:14",
          "username": "challenger1",
          "content": "My Answer: C<br>A doesn't make sense because the Patch Process may take \\\"Even Longer\\\" than 600 minutes",
          "upvote_count": "1"
        },
        {
          "id": 490475,
          "date": "Tue 30 Nov 2021 07:55",
          "username": "acloudguru",
          "content": "such simple question, hope I can have it inmyexam",
          "upvote_count": "1"
        },
        {
          "id": 476713,
          "date": "Fri 12 Nov 2021 07:49",
          "username": "jcb871",
          "content": "Why not D?",
          "upvote_count": "4"
        },
        {
          "id": 375924,
          "date": "Sat 30 Oct 2021 08:50",
          "username": "kurorojcb871",
          "content": "Why not A? Why C?\\\"Even longer\\\" in the question",
          "upvote_count": "11"
        },
        {
          "id": 476712,
          "date": "Fri 12 Nov 2021 07:49",
          "username": "jcb871",
          "content": "\\\"Even longer\\\" in the question",
          "upvote_count": "1"
        },
        {
          "id": 226337,
          "date": "Thu 14 Oct 2021 11:45",
          "username": "newme01037",
          "content": "Why is 5% the judge point?Agreed.<br>Though C is the only possible answer.",
          "upvote_count": "41"
        },
        {
          "id": 373191,
          "date": "Thu 28 Oct 2021 01:46",
          "username": "01037",
          "content": "Agreed.<br>Though C is the only possible answer.",
          "upvote_count": "1"
        },
        {
          "id": 54787,
          "date": "Sun 10 Oct 2021 16:20",
          "username": "miracle",
          "content": "Simple answer. C. ",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#112",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>What is the maximum write throughput I can provision for a single Dynamic DB table?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#112",
          "answers": [
            {
              "choice": "<p>A. 1,000 write capacity units<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. 100,000 write capacity units<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Dynamic DB is designed to scale without limits, but if you go beyond 10,000 you have to contact AWS first.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. 10,000 write capacity units<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 67268,
          "date": "Thu 07 Oct 2021 10:05",
          "username": "sergza01037",
          "content": "It looks like an outdated question. It is now 40000 by default <br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html#default-limits-throughput-capacity-modesYes.<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html#default-limits-throughput-capacity-modes",
          "upvote_count": "132"
        },
        {
          "id": 373226,
          "date": "Wed 03 Nov 2021 00:55",
          "username": "01037",
          "content": "Yes.<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html#default-limits-throughput-capacity-modes",
          "upvote_count": "2"
        },
        {
          "id": 40780,
          "date": "Wed 06 Oct 2021 21:21",
          "username": "CloudFloater",
          "content": "C<br><br>https://aws.amazon.com/dynamodb/faqs/Q: What is the maximum throughput I can provision for a single DynamoDB table?<br><br>DynamoDB is designed to scale without limits. However, if you want to exceed throughput rates of 10,000 write capacity units or 10,000 read capacity units for an individual table, you must first contact Amazon. If you want to provision more than 20,000 write capacity units or 20,000 read capacity units from a single subscriber account, you must first contact us to request a limit increase.",
          "upvote_count": "6"
        },
        {
          "id": 179191,
          "date": "Sat 30 Oct 2021 06:16",
          "username": "BillyC",
          "content": "C is correct",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#113",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>What is the name of licensing model in which I can use your existing Oracle Database licenses to run Oracle deployments on Amazon RDS?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#113",
          "answers": [
            {
              "choice": "<p>A. Bring Your Own License<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Role Bases License<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enterprise License<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. License Included<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 40781,
          "date": "Sun 24 Oct 2021 12:54",
          "username": "CloudFloater",
          "content": "A<br>https://aws.amazon.com/rds/oracle/faqs/<br><br>Q: What types of licensing options are available with Amazon RDS for Oracle?<br>There are two types of licensing options available for using Amazon RDS for Oracle:<br>Bring Your Own License (BYOL): In this licensing model, you can use your existing Oracle Database licenses to run Oracle deployments on Amazon RDS. To run a DB instance under the BYOL model, you must have the appropriate Oracle Database license (with Software Update License & Support) for the DB instance class and Oracle Database edition you wish to run. You must also follow Oracle's policies for licensing Oracle Database software in the cloud computing environment. DB instances reside in the Amazon EC2 environment, and Oracle's licensing policy for Amazon EC2 is located here.<br>License Included: In the \\\"License Included\\\" service model, you do not need separately purchased Oracle licenses; the Oracle Database software has been licensed by AWS. \\\"License Included\\\" pricing is inclusive of software, underlying hardware resources, and Amazon RDS management capabilities.",
          "upvote_count": "6"
        },
        {
          "id": 497793,
          "date": "Thu 09 Dec 2021 15:27",
          "username": "cldy",
          "content": "A.  Bring Your Own License",
          "upvote_count": "1"
        },
        {
          "id": 487964,
          "date": "Sat 27 Nov 2021 08:59",
          "username": "acloudguru",
          "content": "wish i can have such simple question in my coming exam",
          "upvote_count": "1"
        },
        {
          "id": 373302,
          "date": "Wed 03 Nov 2021 06:02",
          "username": "01037",
          "content": "Sure A",
          "upvote_count": "1"
        },
        {
          "id": 54810,
          "date": "Sun 24 Oct 2021 14:34",
          "username": "miracle",
          "content": "Answer is A. ",
          "upvote_count": "2"
        },
        {
          "id": 38484,
          "date": "Sat 25 Sep 2021 17:59",
          "username": "amog",
          "content": "Answer is A<br>Update new link https://aws.amazon.com/rds/oracle/faqs/",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#114",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>When you resize the Amazon RDS DB instance, Amazon RDS will perform the upgrade during the next maintenance window. If you want the upgrade to be performed now, rather than waiting for the maintenance window, specify the option.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#114",
          "answers": [
            {
              "choice": "<p>A. ApplyNow<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. ApplySoon<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. ApplyThis<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. ApplyImmediately<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 40782,
          "date": "Fri 22 Oct 2021 23:56",
          "username": "CloudFloater",
          "content": "D<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html<br><br>Using the Apply Immediately Parameter<br>When you modify a DB instance, you can apply the changes immediately. To apply changes immediately, you select the Apply Immediately option in the AWS Management Console, you use the --apply-immediately parameter when calling the AWS CLI, or you set the ApplyImmediately parameter to true when using the Amazon RDS API.",
          "upvote_count": "7"
        },
        {
          "id": 373304,
          "date": "Mon 01 Nov 2021 04:34",
          "username": "01037",
          "content": "D. <br>But does this kind of question really appears in the exam?",
          "upvote_count": "3"
        },
        {
          "id": 287518,
          "date": "Tue 26 Oct 2021 16:31",
          "username": "Mansur",
          "content": "Option D is the right answer<br>aws rds modify-db-instance \\<br>--db-instance-identifier mydbinstance \\<br>--backup-retention-period 7 \\<br>--deletion-protection \\<br>--no-apply-immediately",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#115",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>If I write the below command, what does it do?<br>ec2-run ami-e3a5408a -n 20 -g appserver</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#115",
          "answers": [
            {
              "choice": "<p>A. Start twenty instances as members of appserver group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Creates 20 rules in the security group named appserver<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Terminate twenty instances as members of appserver group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Start 20 security groups<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 514492,
          "date": "Sat 01 Jan 2022 12:50",
          "username": "AwsSuperTrooperAwsSuperTrooper",
          "content": "Nothing unless you press <enter> ;-)And than it's answer A. ...",
          "upvote_count": "51"
        },
        {
          "id": 514493,
          "date": "Sat 01 Jan 2022 12:50",
          "username": "AwsSuperTrooper",
          "content": "And than it's answer A. ...",
          "upvote_count": "1"
        },
        {
          "id": 496729,
          "date": "Wed 08 Dec 2021 11:36",
          "username": "cldy",
          "content": "A.  Start twenty instances as members of appserver group",
          "upvote_count": "1"
        },
        {
          "id": 373308,
          "date": "Mon 25 Oct 2021 05:05",
          "username": "01037",
          "content": "No such command now.<br>I can guess the answer though.",
          "upvote_count": "1"
        },
        {
          "id": 187356,
          "date": "Fri 22 Oct 2021 11:25",
          "username": "LeoChu",
          "content": "is it outdated and equivalent to \\\"aws ec2 run-instances\\\"?",
          "upvote_count": "4"
        },
        {
          "id": 54844,
          "date": "Mon 04 Oct 2021 10:28",
          "username": "miracle",
          "content": "Answer is A. ",
          "upvote_count": "3"
        },
        {
          "id": 40783,
          "date": "Wed 29 Sep 2021 05:55",
          "username": "CloudFloater",
          "content": "A is the answer by elimination; Can someone pls post where I can find this exact command and its various options.Could not find one easily.",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#116",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>The ________ service is targeted at organizations with multiple users or systems that use AWS products such as Amazon EC2, Amazon SimpleDB, and the AWS<br>Management Console.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#116",
          "answers": [
            {
              "choice": "<p>A. Amazon RDS<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. AWS Integrity Management<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. AWS Identity and Access Management<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Amazon EMR<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 580865,
          "date": "Mon 04 Apr 2022 19:34",
          "username": "roka_ua",
          "content": "Vote C",
          "upvote_count": "3"
        },
        {
          "id": 373311,
          "date": "Sun 31 Oct 2021 08:37",
          "username": "01037",
          "content": "Yes, C IAM",
          "upvote_count": "2"
        },
        {
          "id": 359937,
          "date": "Sun 26 Sep 2021 07:49",
          "username": "viet1991",
          "content": "C.  AWS Identity and Access Management",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#117",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which AWS instance address has the following characteristics? :\"If you stop an instance, its Elastic IP address is unmapped, and you must remap it when you restart the instance.\"</p>",
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
              "choice": "<p>A. Both A and B<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. None of these<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. VPC Addresses<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. EC2 Addresses<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 19460,
          "date": "Wed 22 Sep 2021 07:38",
          "username": "Terijames_sing",
          "content": "the problem is not described well?The choice should be the following:<br>A.  VPC Addresses<br>B.  EC2 Addresses<br>C.  Both A and B<br>D.  None of these",
          "upvote_count": "92"
        },
        {
          "id": 159308,
          "date": "Sat 09 Oct 2021 09:42",
          "username": "james_sing",
          "content": "The choice should be the following:<br>A.  VPC Addresses<br>B.  EC2 Addresses<br>C.  Both A and B<br>D.  None of these",
          "upvote_count": "2"
        },
        {
          "id": 545049,
          "date": "Fri 11 Feb 2022 05:49",
          "username": "peddyuapeddyua",
          "content": "EC2 Classic is not in use anymore.<br>\\\"We are retiring EC2-Classic on August 15, 2022\\\"<br>Optimistically I would go with D. I mean B",
          "upvote_count": "11"
        },
        {
          "id": 545051,
          "date": "Fri 11 Feb 2022 05:50",
          "username": "peddyua",
          "content": "I mean B",
          "upvote_count": "1"
        },
        {
          "id": 497761,
          "date": "Thu 09 Dec 2021 14:46",
          "username": "fais1985",
          "content": "Going with B ,they have mentioned EIP not public IP, the best possible answer is B",
          "upvote_count": "1"
        },
        {
          "id": 373315,
          "date": "Sat 30 Oct 2021 04:30",
          "username": "01037",
          "content": "EC2 classic",
          "upvote_count": "1"
        },
        {
          "id": 67273,
          "date": "Thu 07 Oct 2021 03:05",
          "username": "sergza",
          "content": "if thisquestion is about EC2-VPC and EC2 classic. With EC2 VPC you do not need to remap anything EIP is going to remain associated",
          "upvote_count": "4"
        },
        {
          "id": 54846,
          "date": "Fri 24 Sep 2021 20:29",
          "username": "miracle",
          "content": "Answer is D (EC2). VPC has no IP Address.",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#118",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>By default, Amazon Cognito maintains the last-written version of the data. You can override this behavior and resolve data conflicts programmatically.<br>In addition, push synchronization allows you to use Amazon Cognito to send a silent notification to all devices associated with an identity to notify them that new data is available.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#118",
          "answers": [
            {
              "choice": "<p>A. get<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. post<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. pull<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. push<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 40784,
          "date": "Mon 18 Oct 2021 04:03",
          "username": "CloudFloater",
          "content": "D<br>https://aws.amazon.com/cognito/faqs/<br>Q: What is a silent push notification?<br>Amazon Cognito uses the Amazon Simple Notification Service (SNS) to send silent push notifications to devices. A silent push notification is a push message that is received by your application on a user's device that will not be seen by the user.<br><br>Q: How do I use push synchronization?<br>To enable push synchronization you need to declare a platform application using the Amazon SNS page in the AWS Management Console. Then, from the identity pool page in the Amazon Cognito page of the AWS Management Console, you can link the SNS platform application to your Cognito identity pool. Amazon Cognito automatically utilizes the SNS platform application to notify devices of changes.",
          "upvote_count": "7"
        },
        {
          "id": 373318,
          "date": "Thu 04 Nov 2021 15:13",
          "username": "01037Aline_H",
          "content": "Yes, D<br>I don't thins it appears in SAP examYou can get one or two simple question in between. :)",
          "upvote_count": "11"
        },
        {
          "id": 375931,
          "date": "Sat 06 Nov 2021 11:47",
          "username": "Aline_H",
          "content": "You can get one or two simple question in between. :)",
          "upvote_count": "1"
        },
        {
          "id": 40785,
          "date": "Tue 02 Nov 2021 06:34",
          "username": "CloudFloater",
          "content": "Q: How is data synchronized with Amazon Cognito?<br>You can programmatically trigger the sync of data sets between client devices and the Amazon Cognito sync store by using the synchronize() method in the AWS Mobile SDK. The synchronize() method reads the latest version of the data available in the Amazon Cognito sync store and compares it to the local, cached copy. After comparison, the synchronize() method writes the latest updates as necessary to the local data store and the Amazon Cognito sync store. By default Amazon Cognito maintains the last-written version of the data. You can override this behavior and resolve data conflicts programmatically. In addition, push synchronization allows you to use Amazon Cognito to send a silent push notification to all devices associated with an identity to notify them that new data is available.",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#119",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You want to use AWS CodeDeploy to deploy an application to Amazon EC2 instances running within an Amazon Virtual Private Cloud (VPC).<br>What criterion must be met for this to be possible?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#119",
          "answers": [
            {
              "choice": "<p>A. The AWS CodeDeploy agent installed on the Amazon EC2 instances must be able to access only the public AWS CodeDeploy endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The AWS CodeDeploy agent installed on the Amazon EC2 instances must be able to access only the public Amazon S3 service endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The AWS CodeDeploy agent installed on the Amazon EC2 instances must be able to access the public AWS CodeDeploy and Amazon S3 service endpoints.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. It is not currently possible to use AWS CodeDeploy to deploy an application to Amazon EC2 instances running within an Amazon Virtual Private Cloud (VPC. )<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 373322,
          "date": "Wed 29 Sep 2021 02:15",
          "username": "01037",
          "content": "C<br>It's in FAQ",
          "upvote_count": "5"
        },
        {
          "id": 637038,
          "date": "Tue 26 Jul 2022 03:09",
          "username": "hilft",
          "content": "C. <br><br>Q: Can I use AWS CodeDeploy to deploy an application to Amazon EC2 instances running within an Amazon Virtual Private Cloud (VPC)?<br>Yes, but the AWS CodeDeploy agent installed on the Amazon EC2 instances must be able to access the public AWS CodeDeploy and Amazon S3 service endpoints. For more information, see AWS CodeDeploy Endpoints and Amazon S3 Endpoints.",
          "upvote_count": "1"
        },
        {
          "id": 580873,
          "date": "Mon 04 Apr 2022 19:56",
          "username": "roka_ua",
          "content": "Vote C",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#120",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An IAM user is trying to perform an action on an object belonging to some other root account's bucket.<br>Which of the below mentioned options will AWS S3 not verify?</p>",
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
              "choice": "<p>A. The object owner has provided access to the IAM user<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Permission provided by the parent of the IAM user on the bucket<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Permission provided by the bucket owner to the IAM user<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Permission provided by the parent of the IAM user<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 51044,
          "date": "Sun 19 Sep 2021 20:22",
          "username": "Gorha",
          "content": "If D is the complete text it should be the answer. S3 will evaluate the policy attached by the parent of the account where the user belong to, which B. ",
          "upvote_count": "8"
        },
        {
          "id": 424710,
          "date": "Sun 07 Nov 2021 08:29",
          "username": "FERIN_01",
          "content": "B.  as per AWS documentation.<br>User context – If the requester is an IAM principal, the principal must have permission from the parent AWS account to which it belongs. In this step, Amazon S3 evaluates a subset of policies owned by the parent account (also referred as the context authority). This subset of policies includes the user policy that the parent attaches to the principal.",
          "upvote_count": "5"
        },
        {
          "id": 528919,
          "date": "Fri 21 Jan 2022 04:21",
          "username": "Yecine11y",
          "content": "S3 will check all of them EXCEPT B, it will NOT check it<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-auth-workflow-bucket-operation.html<br>Example 4: Bucket operation requested by an IAM principal whose parent AWS account is not the bucket owne",
          "upvote_count": "2"
        },
        {
          "id": 499318,
          "date": "Sat 11 Dec 2021 11:17",
          "username": "cldy",
          "content": "D.  Permission provided by the parent of the IAM user",
          "upvote_count": "1"
        },
        {
          "id": 374639,
          "date": "Sat 06 Nov 2021 07:42",
          "username": "Rudrajit",
          "content": "Ans should be D",
          "upvote_count": "1"
        },
        {
          "id": 373338,
          "date": "Fri 05 Nov 2021 09:59",
          "username": "01037",
          "content": "It's D. <br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-auth-workflow-bucket-operation.html<br>Example 4: Bucket operation requested by an IAM principal whose parent AWS account is not the bucket owner",
          "upvote_count": "2"
        },
        {
          "id": 211336,
          "date": "Thu 21 Oct 2021 23:49",
          "username": "TerrenceC",
          "content": "Just want to reiterate what @MIU mentioned. Obviously, the question is to ask which access scenario that S3 will not verify the permission. Therefore, when we dig into the document...<br><br>https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-auth-workflow-object-operation.html<br><br>We could know the answer D meets its 1111-1111-1111 scenario, the answer C meets its 2222-2222-2222 scenario, and the answer A meets its 3333-3333-3333 scenario.",
          "upvote_count": "4"
        },
        {
          "id": 200980,
          "date": "Wed 20 Oct 2021 16:22",
          "username": "MIU",
          "content": "See the question...this is asking \\\"not\\\" one.",
          "upvote_count": "1"
        },
        {
          "id": 172947,
          "date": "Thu 14 Oct 2021 05:55",
          "username": "Ganfeng",
          "content": "My opinion is, it should be D, <br><br>if you look at step 2.3 of https://docs.aws.amazon.com/AmazonS3/latest/dev/example-walkthroughs-managing-access-example2.html<br><br>TheCross Account (B) need to give its IAM user the permission to access the said Bucket In Account A",
          "upvote_count": "3"
        },
        {
          "id": 138643,
          "date": "Sat 09 Oct 2021 14:42",
          "username": "khksoma",
          "content": "How can the parent of the IAM user provide access to a resource in a different account? It has to be the trusting account providing access.",
          "upvote_count": "4"
        },
        {
          "id": 120013,
          "date": "Sat 02 Oct 2021 00:48",
          "username": "manoj101",
          "content": "It should be D. ",
          "upvote_count": "3"
        },
        {
          "id": 101510,
          "date": "Wed 22 Sep 2021 15:59",
          "username": "VrushaliD",
          "content": "even I think it should be D",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#121",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization is planning to extend their data center by connecting their DC with the AWS VPC using the VPN gateway. The organization is setting up a dynamically routed VPN connection.<br>Which of the below mentioned answers is not required to setup this configuration?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#121",
          "answers": [
            {
              "choice": "<p>A. The type of customer gateway, such as Cisco ASA, Juniper J-Series, Juniper SSG, Yamaha.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Elastic IP ranges that the organization wants to advertise over the VPN connection to the VPC. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Internet-routable IP address (static) of the customer gateway's external interface.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Border Gateway Protocol (BGP) Autonomous System Number (ASN) of the customer gateway.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 494348,
          "date": "Sun 05 Dec 2021 14:19",
          "username": "cldy",
          "content": "B.  Elastic IP ranges that the organization wants to advertise over the VPN connection to the VPC. ",
          "upvote_count": "1"
        },
        {
          "id": 424713,
          "date": "Wed 27 Oct 2021 20:32",
          "username": "FERIN_01",
          "content": "B.  You use Virtual Private gateway at AWS side. You don't require Elastic IP Address. But Customer side ( On premises ) you need static public IP Address",
          "upvote_count": "3"
        },
        {
          "id": 193926,
          "date": "Sun 17 Oct 2021 17:05",
          "username": "modesty0319",
          "content": "Answer is B.  I found the explanation in the following link very informative.<br>http://hadoopexam.com/do1111/index.php/aws-amazon-webservice/aws-sol-architect-professional/74-question-1-quicktechie-com-has-three-different-datacenters-in-mumbai-geneva-and-navada-which-is-planning-to-extend-their-data-center-by-connecting-their-dc-with-the-aws-vpc-using-the-vpn-gateway-quicktechie-com-is-setting-up-a-dynamically-routed-vpn-conne",
          "upvote_count": "3"
        },
        {
          "id": 92262,
          "date": "Tue 28 Sep 2021 20:29",
          "username": "Mkumar",
          "content": "Answer is B",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#122",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In the context of AWS IAM, identify a true statement about user passwords (login profiles).</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#122",
          "answers": [
            {
              "choice": "<p>A. They must contain Unicode characters.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. They can contain any Basic Latin (ASCII) characters.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. They must begin and end with a forward slash (/).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. They cannot contain Basic Latin (ASCII) characters.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 373411,
          "date": "Mon 18 Oct 2021 03:46",
          "username": "01037tahaRyski",
          "content": "B<br>What's the point of this kind of question?<br>Do I need to memorize such thing?Just my thought with the questions I have seen so far! This does not pertain to architecture in any way and it is really disappointing if these are the type of questions in the exam",
          "upvote_count": "53"
        },
        {
          "id": 523784,
          "date": "Fri 14 Jan 2022 23:24",
          "username": "tahaRyski",
          "content": "Just my thought with the questions I have seen so far! This does not pertain to architecture in any way and it is really disappointing if these are the type of questions in the exam",
          "upvote_count": "3"
        },
        {
          "id": 614387,
          "date": "Fri 10 Jun 2022 09:44",
          "username": "foxrj21",
          "content": "its a B",
          "upvote_count": "1"
        },
        {
          "id": 494134,
          "date": "Sun 05 Dec 2021 08:27",
          "username": "cldy",
          "content": "B.  They can contain any Basic Latin (ASCII) characters.",
          "upvote_count": "1"
        },
        {
          "id": 360106,
          "date": "Thu 07 Oct 2021 19:14",
          "username": "viet1991",
          "content": "B<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html<br><br>User passwords (login profiles) can contain any Basic Latin (ASCII) characters.",
          "upvote_count": "1"
        },
        {
          "id": 64647,
          "date": "Fri 01 Oct 2021 05:17",
          "username": "mayurkothavale",
          "content": "more precise link-<br>https://docs.aws.amazon.com/cli/latest/reference/iam/update-account-password-policy.html",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#123",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization is planning to host a Wordpress blog as well a joomla CMS on a single instance launched with VPC.  The organization wants to have separate domains for each application and assign them using Route 53. The organization may have about ten instances each with two applications as mentioned above.<br>While launching the instance, the organization configured two separate network interfaces (primary + ENI) and wanted to have two elastic IPs for that instance. It was suggested to use a public IP from AWS instead of an elastic IP as the number of elastic IPs is restricted.<br>What action will you recommend to the organization?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#123",
          "answers": [
            {
              "choice": "<p>A. I agree with the suggestion but will prefer that the organization should use separate subnets with each ENI for different public IPs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. I do not agree as it is required to have only an elastic IP since an instance has more than one ENI and AWS does not assign a public IP to an instance with multiple ENIs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. I do not agree as AWS VPC does not attach a public IP to an ENI; so the user has to use only an elastic IP only.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. I agree with the suggestion and it is recommended to use a public IP from AWS since the organization is going to use DNS with Route 53.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 68805,
          "date": "Mon 27 Sep 2021 02:59",
          "username": "Exam_boy",
          "content": "B<br><br>When you add a second network interface, the system can no longer auto-assign a public IPv4 address. <br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/MultipleIP.html#working-with-multiple-ipv4",
          "upvote_count": "6"
        },
        {
          "id": 498425,
          "date": "Fri 10 Dec 2021 09:42",
          "username": "cldy",
          "content": "B.  I do not agree as it is required to have only an elastic IP since an instance has more than one ENI and AWS does not assign a public IP to an instance with multiple ENIs.",
          "upvote_count": "1"
        },
        {
          "id": 373413,
          "date": "Wed 20 Oct 2021 04:14",
          "username": "01037",
          "content": "B<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/MultipleIP.html<br>When you add a second network interface, the system can no longer auto-assign a public IPv4 address. You will not be able to connect to the instance over IPv4 unless you assign an Elastic IP address to the primary network interface (eth0). You can assign the Elastic IP address after you complete the Launch wizard. For more information",
          "upvote_count": "1"
        },
        {
          "id": 227178,
          "date": "Sun 17 Oct 2021 17:54",
          "username": "newme",
          "content": "I don't quite understand what the question asks.<br>If it asks whether an instance can have a public IP and an EIP at the same time, then the answer is yes.<br>If it asks whether an instance can have 2 public IP, then No.",
          "upvote_count": "2"
        },
        {
          "id": 182460,
          "date": "Thu 07 Oct 2021 14:18",
          "username": "ipindado2020",
          "content": "b is correct",
          "upvote_count": "1"
        },
        {
          "id": 154773,
          "date": "Sun 03 Oct 2021 09:02",
          "username": "Anila_DhharisiBillyC",
          "content": "What is the correct answer?B for me",
          "upvote_count": "12"
        },
        {
          "id": 179204,
          "date": "Thu 07 Oct 2021 11:44",
          "username": "BillyC",
          "content": "B for me",
          "upvote_count": "2"
        },
        {
          "id": 120026,
          "date": "Sat 02 Oct 2021 07:46",
          "username": "manoj101",
          "content": "When you add a second network interface, the system can no longer auto-assign a public IPv4 address. You will not be able to connect to the instance over IPv4 unless you assign an Elastic IP address to the primary network interface (eth0). You can assign the Elastic IP address after you complete the Launch wizard.",
          "upvote_count": "2"
        },
        {
          "id": 93503,
          "date": "Thu 30 Sep 2021 01:24",
          "username": "JAWS1600learner4ever",
          "content": "Correct Answer is A.  You can auto assign a public IP , if instance has 1 ENI. However, if instance has more than 1 EN1, Public IP cannot be assigned.<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.htmlbut it is clearly mentioned that they wanted to have two elastic IPs for that instance. So the answer is B",
          "upvote_count": "12"
        },
        {
          "id": 141443,
          "date": "Sun 03 Oct 2021 06:55",
          "username": "learner4ever",
          "content": "but it is clearly mentioned that they wanted to have two elastic IPs for that instance. So the answer is B",
          "upvote_count": "2"
        },
        {
          "id": 67103,
          "date": "Wed 22 Sep 2021 02:43",
          "username": "Smartnewme0103701037",
          "content": "I wasn't sure about this one; I believe this is old question. Although, even right now, AWS doesn't allow to attach two interfaces and have public IP. However, I launched simple EC2 with public IP. Then, manually attached 2 ENIs (each with associated EIP). This way I was able to have 3 public IPs for an EC2 instance. Does this make option D correct? or Am I missing something here?>Then, manually attached 2 ENIs (each with associated EIP)<br><br>No, you can't.Yes you can.<br>As to how many ENIs you can attach to an instance, depends on instance type.<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.htmlYes, you can do what you said.<br>But in the question, it is said \\\"While launching the instance\\\", so under the context, B is correct.",
          "upvote_count": "1111"
        },
        {
          "id": 227156,
          "date": "Sun 17 Oct 2021 15:06",
          "username": "newme01037",
          "content": ">Then, manually attached 2 ENIs (each with associated EIP)<br><br>No, you can't.Yes you can.<br>As to how many ENIs you can attach to an instance, depends on instance type.<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html",
          "upvote_count": "11"
        },
        {
          "id": 382625,
          "date": "Fri 29 Oct 2021 10:38",
          "username": "01037",
          "content": "Yes you can.<br>As to how many ENIs you can attach to an instance, depends on instance type.<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html",
          "upvote_count": "1"
        },
        {
          "id": 382628,
          "date": "Sat 30 Oct 2021 05:55",
          "username": "01037",
          "content": "Yes, you can do what you said.<br>But in the question, it is said \\\"While launching the instance\\\", so under the context, B is correct.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#124",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>What is the default maximum number of VPCs allowed per region?</p>",
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
              "choice": "<p>A. 5<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. 10<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. 100<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. 15<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 561419,
          "date": "Sat 05 Mar 2022 13:31",
          "username": "Ni_yot",
          "content": "A correct.",
          "upvote_count": "1"
        },
        {
          "id": 373445,
          "date": "Wed 03 Nov 2021 03:54",
          "username": "01037",
          "content": "A is correct",
          "upvote_count": "2"
        },
        {
          "id": 54856,
          "date": "Sun 03 Oct 2021 21:31",
          "username": "miracle",
          "content": "Answer is A. ",
          "upvote_count": "4"
        },
        {
          "id": 53290,
          "date": "Mon 27 Sep 2021 11:03",
          "username": "cloudinvader",
          "content": "A is the answer,As default max limit of 5 per region. That can be increased on \\\"request\\\" up to max 100.",
          "upvote_count": "3"
        },
        {
          "id": 52090,
          "date": "Fri 24 Sep 2021 02:36",
          "username": "venkattipindado2020",
          "content": "Answer is C.  Maximum 100 VPCs allowed per region.<br>https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.htmlbut 5 as default",
          "upvote_count": "23"
        },
        {
          "id": 182461,
          "date": "Thu 07 Oct 2021 10:34",
          "username": "ipindado2020",
          "content": "but 5 as default",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#125",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A customer has a website which shows all the deals available across the market. The site experiences a load of 5 large EC2 instances generally.<br>However, a week before Thanksgiving vacation they encounter a load of almost 20 large instances. The load during that period varies over the day based on the office timings.<br>Which of the below mentioned solutions is cost effective as well as help the website achieve better performance?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#125",
          "answers": [
            {
              "choice": "<p>A. Setup to run 10 instances during the pre-vacation period and only scale up during the office time by launching 10 more instances using the AutoScaling schedule.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Keep only 10 instances running and manually launch 10 instances every day during office hours.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. During the pre-vacation period setup 20 instances to run continuously.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. During the pre-vacation period setup a scenario where the organization has 15 instances running and 5 instances to scale up and down using Auto Scaling based on the network I/O policy.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 615435,
          "date": "Sun 12 Jun 2022 19:07",
          "username": "CloudHell",
          "content": "It's A to me.",
          "upvote_count": "3"
        },
        {
          "id": 614419,
          "date": "Fri 10 Jun 2022 10:31",
          "username": "LiamNg",
          "content": "Answer is A<br>Given in the explaination, \\\"This is the reason it is recommended that the organization keeps an additional 5 instances running and the next 5 instances scheduled as per the AutoScaling policy for cost effectiveness.\\\"",
          "upvote_count": "2"
        },
        {
          "id": 497315,
          "date": "Thu 09 Dec 2021 05:27",
          "username": "cldy",
          "content": "A.  Setup to run 10 instances during the pre-vacation period and only scale up during the office time by launching 10 more instances using the AutoScaling schedule.",
          "upvote_count": "2"
        },
        {
          "id": 424761,
          "date": "Fri 05 Nov 2021 13:20",
          "username": "FERIN_01",
          "content": "A.  It is SAA question. In the given options most cost effective to keep 10 instance active and 10 add at office hours. The deference between A and B is whether manually add or automatically through ASG. I would prefer through ASG scheduled scaling",
          "upvote_count": "2"
        },
        {
          "id": 414314,
          "date": "Sat 30 Oct 2021 21:51",
          "username": "Table2022user0001",
          "content": "Answer is D, the description is provided for the answer D. it is not cost effective",
          "upvote_count": "11"
        },
        {
          "id": 602052,
          "date": "Sun 15 May 2022 13:37",
          "username": "user0001",
          "content": "it is not cost effective",
          "upvote_count": "1"
        },
        {
          "id": 387919,
          "date": "Fri 29 Oct 2021 01:07",
          "username": "DashL",
          "content": "This questions seems to be from SAA- not for SAP.",
          "upvote_count": "1"
        },
        {
          "id": 321059,
          "date": "Wed 13 Oct 2021 22:02",
          "username": "jpestana701037",
          "content": "The correct answer is AYes I think so",
          "upvote_count": "41"
        },
        {
          "id": 373449,
          "date": "Wed 27 Oct 2021 13:45",
          "username": "01037",
          "content": "Yes I think so",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#126",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization is setting a website on the AWS VPC.  The organization has blocked a few IPs to avoid a D-DOS attack.<br>How can the organization configure that a request from the above mentioned IPs does not access the application instances?</p>",
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
              "choice": "<p>A. Create an IAM policy for VPC which has a condition to disallow traffic from that IP address.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure a security group at the subnet level which denies traffic from the selected IP.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the security group with the EC2 instance which denies access from that IP address.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure an ACL at the subnet which denies the traffic from that IP address.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 623905,
          "date": "Tue 28 Jun 2022 12:29",
          "username": "TechX",
          "content": "100% D",
          "upvote_count": "1"
        },
        {
          "id": 182464,
          "date": "Fri 05 Nov 2021 14:06",
          "username": "ipindado2020",
          "content": "Agree with D",
          "upvote_count": "4"
        },
        {
          "id": 120039,
          "date": "Tue 05 Oct 2021 08:32",
          "username": "manoj101",
          "content": "Security Group configures \\\"Allow Only\\\" so ACL.",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#127",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization has 4 people in the IT operations team who are responsible to manage the AWS infrastructure. The organization wants to setup that each user will have access to launch and manage an instance in a zone which the other user cannot modify.<br>Which of the below mentioned options is the best solution to set this up?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#127",
          "answers": [
            {
              "choice": "<p>A. Create four AWS accounts and give each user access to a separate account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an IAM user and allow them permission to launch an instance of a different sizes only.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create four IAM users and four VPCs and allow each IAM user to have access to separate VPCs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a VPC with four subnets and allow access to each subnet for the individual IAM user.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 172964,
          "date": "Thu 23 Sep 2021 18:21",
          "username": "GanfengTerrenceCnewme01037",
          "content": "though I agree answer D, it might also really depends on what the \\\"zone\\\" means in question? Are we sure this zone is 100% related to AZ? I mean you can \\\"zone\\\" it to production/Dev etc VPC?Here is my understanding. The Zone here could be meant for an AZ or a VPC in that it is more about a concept. For instance, if the answer C replaces its condition with \\\"Create four IAM users and four VPCs and each IAM user could only access its VPC\\\" then it would be the right option accordingly.Even so, how does it prevent user A deleting user B's instances?D. <br>You can limit access of each IAM user to its own subnet.<br>ACD all work, but D is better.",
          "upvote_count": "6114"
        },
        {
          "id": 211361,
          "date": "Sat 25 Sep 2021 07:47",
          "username": "TerrenceCnewme01037",
          "content": "Here is my understanding. The Zone here could be meant for an AZ or a VPC in that it is more about a concept. For instance, if the answer C replaces its condition with \\\"Create four IAM users and four VPCs and each IAM user could only access its VPC\\\" then it would be the right option accordingly.Even so, how does it prevent user A deleting user B's instances?D. <br>You can limit access of each IAM user to its own subnet.<br>ACD all work, but D is better.",
          "upvote_count": "114"
        },
        {
          "id": 227240,
          "date": "Tue 05 Oct 2021 23:00",
          "username": "newme01037",
          "content": "Even so, how does it prevent user A deleting user B's instances?D. <br>You can limit access of each IAM user to its own subnet.<br>ACD all work, but D is better.",
          "upvote_count": "14"
        },
        {
          "id": 373540,
          "date": "Sun 31 Oct 2021 18:52",
          "username": "01037",
          "content": "D. <br>You can limit access of each IAM user to its own subnet.<br>ACD all work, but D is better.",
          "upvote_count": "4"
        },
        {
          "id": 638937,
          "date": "Fri 29 Jul 2022 02:53",
          "username": "hilft",
          "content": "This is a terrible question. Answers aren't practical at all. At least... D works. D",
          "upvote_count": "1"
        },
        {
          "id": 290158,
          "date": "Sun 24 Oct 2021 19:48",
          "username": "windClandestine60",
          "content": "D is right. You can launch instances into a specific subnet by using IAM policy.D is right.<br>\\\"Launch instances into a specific subnet<br>The following policy grants users permission to launch instances into a specific subnet, and to use a specific security group in the request. The policy does this by specifying the ARN for the subnet and the ARN for the security group. If users attempt to launch an instance into a different subnet or using a different security group, the request will fail (unless another policy or statement grants users permission to do so).<br><br>The policy also grants permission to use the network interface resource. When launching into a subnet, the RunInstances request creates a primary network interface by default, so the user needs permission to create this resource when launching the instance.\\\"<br>https://docs.aws.amazon.com/vpc/latest/userguide/vpc-policy-examples.html",
          "upvote_count": "23"
        },
        {
          "id": 528423,
          "date": "Thu 20 Jan 2022 14:24",
          "username": "Clandestine60",
          "content": "D is right.<br>\\\"Launch instances into a specific subnet<br>The following policy grants users permission to launch instances into a specific subnet, and to use a specific security group in the request. The policy does this by specifying the ARN for the subnet and the ARN for the security group. If users attempt to launch an instance into a different subnet or using a different security group, the request will fail (unless another policy or statement grants users permission to do so).<br><br>The policy also grants permission to use the network interface resource. When launching into a subnet, the RunInstances request creates a primary network interface by default, so the user needs permission to create this resource when launching the instance.\\\"<br>https://docs.aws.amazon.com/vpc/latest/userguide/vpc-policy-examples.html",
          "upvote_count": "3"
        },
        {
          "id": 251835,
          "date": "Thu 21 Oct 2021 05:19",
          "username": "kmaiti",
          "content": "C& D are applicable answers but D is more suitable.",
          "upvote_count": "1"
        },
        {
          "id": 227239,
          "date": "Thu 30 Sep 2021 12:17",
          "username": "newmeconsultsk",
          "content": "I think only A meets the requirements.<br>This is a perfect use case for Attribute-based access control (ABAC), but no such answers.I also think A is correct. In D, it can be a private or public subnet, and it does not make sense to control by subnet. At the account level, they have more power and control and the question says at an organization level. An organization can have multiple accounts and each person can manage/lead an account. I will go by A",
          "upvote_count": "31"
        },
        {
          "id": 237533,
          "date": "Thu 14 Oct 2021 03:34",
          "username": "consultsk",
          "content": "I also think A is correct. In D, it can be a private or public subnet, and it does not make sense to control by subnet. At the account level, they have more power and control and the question says at an organization level. An organization can have multiple accounts and each person can manage/lead an account. I will go by A",
          "upvote_count": "1"
        },
        {
          "id": 92265,
          "date": "Mon 20 Sep 2021 09:57",
          "username": "MkumarMkumar",
          "content": "Ans is Aits typo should be D with tags",
          "upvote_count": "15"
        },
        {
          "id": 92268,
          "date": "Tue 21 Sep 2021 09:55",
          "username": "Mkumar",
          "content": "its typo should be D with tags",
          "upvote_count": "5"
        }
      ]
    },
    {
      "question_id": "#128",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization is planning to host an application on the AWS VPC.  The organization wants dedicated instances. However, an AWS consultant advised the organization not to use dedicated instances with VPC as the design has a few limitations.<br>Which of the below mentioned statements is not a limitation of dedicated instances with VPC?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#128",
          "answers": [
            {
              "choice": "<p>A. All instances launched with this VPC will always be dedicated instances and the user cannot use a default tenancy model for them.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. It does not support the AWS RDS with a dedicated tenancy VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The user cannot use Reserved Instances with a dedicated tenancy model.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. The EBS volume will not be on the same tenant hardware as the EC2 instance though the user has configured dedicated tenancy.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 616717,
          "date": "Wed 15 Jun 2022 13:24",
          "username": "Ddssssss",
          "content": "A.  All instances launched with this VPC will always be dedicated instances and the user cannot use a default tenancy model for them. -False, unless you flag the VPC as \\\"Dedicated\\\", which this question might be asking in a poorly worded fashion. <br>B.  It does not support the AWS RDS with a dedicated tenancy VPC.  - Possibly. RDS can support Dedicated but the EC2 instance type has to be compatible. <br>C.  The user cannot use Reserved Instances with a dedicated tenancy model.- False, you can use Dedicated RI. <br>D.  The EBS volume will not be on the same tenant hardware as the EC2 instance though the user has configured dedicated tenancy. -This is a true statement",
          "upvote_count": "1"
        },
        {
          "id": 497568,
          "date": "Thu 09 Dec 2021 11:02",
          "username": "cldy",
          "content": "C.  The user cannot use Reserved Instances with a dedicated tenancy model.",
          "upvote_count": "1"
        },
        {
          "id": 442719,
          "date": "Sat 06 Nov 2021 16:59",
          "username": "nodogoshi",
          "content": "C and D both invaid.<br>https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/dedicated-instance.html",
          "upvote_count": "1"
        },
        {
          "id": 424777,
          "date": "Tue 02 Nov 2021 13:08",
          "username": "FERIN_01",
          "content": "A.  Its a negative question. Option A is incorrect. You can reserve dedicated EC2 instances",
          "upvote_count": "3"
        },
        {
          "id": 373547,
          "date": "Tue 19 Oct 2021 11:04",
          "username": "01037",
          "content": "It is C. <br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-instance.html<br>To guarantee that sufficient capacity is available to launch Dedicated Instances, you can purchase Dedicated Reserved Instances.",
          "upvote_count": "2"
        },
        {
          "id": 257172,
          "date": "Sun 03 Oct 2021 22:39",
          "username": "TaherShaker01037",
          "content": "The answer is D. <br>References:<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-instance.html<br>\\\"When you launch an Amazon EBS-backed Dedicated Instance, the EBS volume doesn't run on single-tenant hardware.\\\"Why is it not a limitation?",
          "upvote_count": "41"
        },
        {
          "id": 373545,
          "date": "Tue 12 Oct 2021 04:13",
          "username": "01037",
          "content": "Why is it not a limitation?",
          "upvote_count": "1"
        },
        {
          "id": 206940,
          "date": "Sat 02 Oct 2021 18:36",
          "username": "MIU",
          "content": "Be attention, this is \\\"not\\\" question.",
          "upvote_count": "1"
        },
        {
          "id": 183686,
          "date": "Tue 21 Sep 2021 23:33",
          "username": "lostri",
          "content": "Answer is B https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-instance.html",
          "upvote_count": "2"
        },
        {
          "id": 92269,
          "date": "Tue 21 Sep 2021 13:12",
          "username": "MkumarLeoChuLeoChu",
          "content": "Answer is Cno it is Bsorry C",
          "upvote_count": "211"
        },
        {
          "id": 187498,
          "date": "Tue 28 Sep 2021 03:57",
          "username": "LeoChuLeoChu",
          "content": "no it is Bsorry C",
          "upvote_count": "11"
        },
        {
          "id": 187499,
          "date": "Sat 02 Oct 2021 06:51",
          "username": "LeoChu",
          "content": "sorry C",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#129",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In which step of using AWS Direct Connect should the user determine the required port speed?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#129",
          "answers": [
            {
              "choice": "<p>A. Complete the Cross Connect<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Verify Your Virtual Interface<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Download Router Configuration<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Submit AWS Direct Connect Connection Request<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 149489,
          "date": "Sun 17 Oct 2021 08:27",
          "username": "sensor",
          "content": "D: LOA",
          "upvote_count": "5"
        },
        {
          "id": 373549,
          "date": "Mon 01 Nov 2021 14:22",
          "username": "01037",
          "content": "Of course D",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#130",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In Amazon IAM, what is the maximum length for a role name?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#130",
          "answers": [
            {
              "choice": "<p>A. 128 characters<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. 512 characters<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. 64 characters<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. 256 characters<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 582345,
          "date": "Thu 07 Apr 2022 12:00",
          "username": "Hasitha99",
          "content": "The role name has 64 characters. But, what is the point of asking these types of questions(ex: length of role name, length of the password, allowed characters for the password, etc)?",
          "upvote_count": "1"
        },
        {
          "id": 494922,
          "date": "Mon 06 Dec 2021 06:31",
          "username": "cldy",
          "content": "C.  64 characters",
          "upvote_count": "1"
        },
        {
          "id": 373551,
          "date": "Wed 03 Nov 2021 15:14",
          "username": "01037",
          "content": "I guessed correctly ^_^",
          "upvote_count": "2"
        },
        {
          "id": 54858,
          "date": "Wed 06 Oct 2021 05:02",
          "username": "miracle",
          "content": "Answer is C.  AWS IAM Role names are limited to 64 characters.",
          "upvote_count": "3"
        },
        {
          "id": 40775,
          "date": "Wed 29 Sep 2021 11:13",
          "username": "CloudFloater",
          "content": "C<br>https://docs.aws.amazon.com/IAM/latest/APIReference/API_Role.html",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#131",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user is planning to host a web server as well as an app server on a single EC2 instance which is a part of the public subnet of a VPC. <br>How can the user setup to have two separate public IPs and separate security groups for both the application as well as the web server?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#131",
          "answers": [
            {
              "choice": "<p>A. Launch VPC with two separate subnets and make the instance a part of both the subnets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Launch a VPC instance with two network interfaces. Assign a separate security group and elastic IP to them.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Launch a VPC instance with two network interfaces. Assign a separate security group to each and AWS will assign a separate public IP to them.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Launch a VPC with ELB such that it redirects requests to separate VPC instances of the public subnet.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 635785,
          "date": "Sun 24 Jul 2022 00:54",
          "username": "hilft",
          "content": "B. <br>Two ENIs. TWO EIPs",
          "upvote_count": "1"
        },
        {
          "id": 555546,
          "date": "Thu 24 Feb 2022 21:42",
          "username": "Ni_yot",
          "content": "B correct. You can do this with 2 NICs",
          "upvote_count": "1"
        },
        {
          "id": 373552,
          "date": "Mon 25 Oct 2021 18:45",
          "username": "01037",
          "content": "B is correct",
          "upvote_count": "1"
        },
        {
          "id": 183690,
          "date": "Thu 21 Oct 2021 03:04",
          "username": "lostri",
          "content": "B is correct",
          "upvote_count": "1"
        },
        {
          "id": 182469,
          "date": "Fri 08 Oct 2021 05:59",
          "username": "ipindado2020",
          "content": "B. ...Two ENIs should have two elastic ips",
          "upvote_count": "4"
        },
        {
          "id": 179218,
          "date": "Thu 07 Oct 2021 07:39",
          "username": "BillyC",
          "content": "Is B correct?",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#132",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You have subscribed to the AWS Business and Enterprise support plan.<br>Your business has a backlog of problems, and you need about 20 of your IAM users to open technical support cases.<br>How many users can open technical support cases under the AWS Business and Enterprise support plan?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#132",
          "answers": [
            {
              "choice": "<p>A. 5 users<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. 10 users<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Unlimited<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. 1 user<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 635824,
          "date": "Sun 24 Jul 2022 02:45",
          "username": "hilft",
          "content": "Yes. Enterprise costs like 5.5k. OF COURSE, THEY GOT TO DO THE JOB DONE. ..<br>This is CLF level question.",
          "upvote_count": "1"
        },
        {
          "id": 373553,
          "date": "Wed 03 Nov 2021 20:35",
          "username": "01037",
          "content": "Of course C, because you paid ^_^",
          "upvote_count": "2"
        },
        {
          "id": 315313,
          "date": "Sat 30 Oct 2021 04:39",
          "username": "ExtHo",
          "content": "https://aws.amazon.com/premiumsupport/faqs/<br><br>Q: How many users can open technical support cases?<br><br>The Business and Enterprise Support plans allow an unlimited number of users to open technical support cases (supported by AWS Identity and Access Management (IAM)). The Developer Support plan allows one user to open technical support cases. Customers with the Basic Support plan cannot open technical support cases.<br>C is correct",
          "upvote_count": "3"
        },
        {
          "id": 176800,
          "date": "Wed 06 Oct 2021 01:12",
          "username": "manoj101",
          "content": "C is correct",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#133",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>While implementing the policy keys in AWS Direct Connect, if you use and the request comes from an Amazon EC2 instance, the instance's public IP address is evaluated to determine if access is allowed.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#133",
          "answers": [
            {
              "choice": "<p>A. aws:SecureTransport<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. aws:EpochIP<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. aws:SourceIp<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. aws:CurrentTime<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 136565,
          "date": "Fri 24 Sep 2021 07:12",
          "username": "RamanPeriyakrb39",
          "content": "aws:SourceIpalthough the question doesn't make sense",
          "upvote_count": "83"
        },
        {
          "id": 499844,
          "date": "Sun 12 Dec 2021 08:28",
          "username": "rb39",
          "content": "although the question doesn't make sense",
          "upvote_count": "3"
        },
        {
          "id": 576751,
          "date": "Mon 28 Mar 2022 12:14",
          "username": "kenchou73",
          "content": "Correct question -<br>While implementing the policy keys in AWS Direct Connect, if you use _____ and the request<br>comes from an Amazon EC2 instance, the instance’s public IP address is evaluated to determine if access is allowed.",
          "upvote_count": "1"
        },
        {
          "id": 495042,
          "date": "Mon 06 Dec 2021 11:27",
          "username": "cldy",
          "content": "C.  aws:SourceIp",
          "upvote_count": "1"
        },
        {
          "id": 484912,
          "date": "Tue 23 Nov 2021 10:32",
          "username": "backfringe",
          "content": "I go with C <br>https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html",
          "upvote_count": "1"
        },
        {
          "id": 373554,
          "date": "Wed 03 Nov 2021 09:22",
          "username": "01037",
          "content": "answer is C",
          "upvote_count": "1"
        },
        {
          "id": 183695,
          "date": "Wed 20 Oct 2021 01:34",
          "username": "lostri",
          "content": "answer is C",
          "upvote_count": "1"
        },
        {
          "id": 177992,
          "date": "Fri 24 Sep 2021 15:14",
          "username": "AlwaysLearning2020",
          "content": "Hmmm.... So is the question asking \\\"While implementing the policy keys in Amazon RDS...\\\" or \\\"While implementing the policy keys in AWS Direct Connect...\\\"???",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#134",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>How many g2.2xlarge on-demand instances can a user run in one region without taking any limit increase approval from AWS?</p>",
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
              "choice": "<p>A. 20<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. 2<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. 5<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. 10<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 635791,
          "date": "Sun 24 Jul 2022 01:02",
          "username": "hilft",
          "content": "Outdated. AWS now limits based on the number of vCPUs.",
          "upvote_count": "1"
        },
        {
          "id": 182481,
          "date": "Sun 07 Nov 2021 16:04",
          "username": "ipindado2020",
          "content": "I guess this is an old question.... now limits are vcpu based (Running On-Demand G instances 128 vcpu)",
          "upvote_count": "2"
        },
        {
          "id": 120059,
          "date": "Mon 01 Nov 2021 18:58",
          "username": "manoj101",
          "content": "The limit is based on vCPU. vCPU calculator can help calculating how many instances for each category.<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-on-demand-instances.html#ec2-on-demand-instances-limits<br><br>https://aws.amazon.com/ec2/faqs/#EC2_On-Demand_Instance_limits",
          "upvote_count": "1"
        },
        {
          "id": 68863,
          "date": "Sat 23 Oct 2021 17:45",
          "username": "Exam_boy",
          "content": "not valid questions under current AWS service. can't find docs to backup this question.",
          "upvote_count": "1"
        },
        {
          "id": 54859,
          "date": "Tue 21 Sep 2021 14:29",
          "username": "miracle",
          "content": "Answer is B.  2 for G2.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#135",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user has created a MySQL RDS instance with PIOPS. Which of the below mentioned statements will help user understand the advantage of PIOPS?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#135",
          "answers": [
            {
              "choice": "<p>A. The user can achieve additional dedicated capacity for the EBS I/O with an enhanced RDS option<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. It uses a standard EBS volume with optimized configuration the stacks<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. It uses optimized EBS volumes and optimized configuration stacks<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. It provides a dedicated network bandwidth between EBS and RDS<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 637782,
          "date": "Wed 27 Jul 2022 05:50",
          "username": "MarkChoi",
          "content": "\\\"with an enhanced RDS option\\\" ???<br>It's weird.<br>C is correct.",
          "upvote_count": "2"
        },
        {
          "id": 586587,
          "date": "Sat 16 Apr 2022 05:17",
          "username": "Hasitha99",
          "content": "Provisioned IOPS uses optimized EBS volumes and an optimized configuration stack. It provides additional, dedicated capacity for the EBS I/<br>O.",
          "upvote_count": "1"
        },
        {
          "id": 585145,
          "date": "Wed 13 Apr 2022 12:36",
          "username": "pawanvu",
          "content": "C <br>Option A mentions Enhanced RDS, which is nothing.",
          "upvote_count": "1"
        },
        {
          "id": 576127,
          "date": "Sun 27 Mar 2022 13:26",
          "username": "Mechanic",
          "content": "Answer is A because of the following text in the question \\\"will assist the user in comprehending the benefits of PIOPS\\\".<br>The user knows about the extra dedicated IOPS in the A answer, but doesn't know what benefit is the by the C answer (what is the meaning of optimized EBS or configuration stacks??).",
          "upvote_count": "3"
        },
        {
          "id": 530598,
          "date": "Sun 23 Jan 2022 15:50",
          "username": "RVivek",
          "content": "Answer C<br>An Amazon EBS–optimized instance uses an optimized configuration stack and provides additional, dedicated capacity for Amazon EBS I/O<br>http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSOptimized.html<br><br>A: is wrong because the last word says enhanced RDS option",
          "upvote_count": "1"
        },
        {
          "id": 495805,
          "date": "Tue 07 Dec 2021 10:10",
          "username": "cldy",
          "content": "C.  It uses optimized EBS volumes and optimized configuration stacks",
          "upvote_count": "1"
        },
        {
          "id": 373558,
          "date": "Sun 31 Oct 2021 08:01",
          "username": "01037",
          "content": "I thins it is A. ",
          "upvote_count": "1"
        },
        {
          "id": 361723,
          "date": "Wed 27 Oct 2021 12:29",
          "username": "viet199101037RVivek",
          "content": "A. <br>https://pegacert.com/vendor/aws/sop-c01/user-created-mysql-rds-instance-piops-below-mentioned-97d35<br>Explanation:<br>RDS DB instance storage comes in two types: standard and provisioned IOPS. Standard storage is allocated on the Amazon EBS volumes and connected to the user's DB instance. Provisioned IOPS uses optimized EBS volumes and an optimized configuration stack. It provides additional, dedicated capacity for the EBS I/O. <br>http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.htmlThe answer there is CAnswer C<br>An Amazon EBS–optimized instance uses an optimized configuration stack and provides additional, dedicated capacity for Amazon EBS I/O<br>http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSOptimized.html<br><br>A: is wrong because the last word says enhanced RDS option isntead ofEBS–optimized",
          "upvote_count": "121"
        },
        {
          "id": 373559,
          "date": "Fri 05 Nov 2021 07:59",
          "username": "01037",
          "content": "The answer there is C",
          "upvote_count": "2"
        },
        {
          "id": 530600,
          "date": "Sun 23 Jan 2022 15:51",
          "username": "RVivek",
          "content": "Answer C<br>An Amazon EBS–optimized instance uses an optimized configuration stack and provides additional, dedicated capacity for Amazon EBS I/O<br>http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSOptimized.html<br><br>A: is wrong because the last word says enhanced RDS option isntead ofEBS–optimized",
          "upvote_count": "1"
        },
        {
          "id": 290235,
          "date": "Sun 17 Oct 2021 15:22",
          "username": "wind",
          "content": "I think A is correct.",
          "upvote_count": "1"
        },
        {
          "id": 182482,
          "date": "Sun 17 Oct 2021 07:36",
          "username": "ipindado2020",
          "content": "A. ..<br>https://aws.amazon.com/es/about-aws/whats-new/2012/09/25/announcing-provisioned-iops-for-amazon-rds/",
          "upvote_count": "1"
        },
        {
          "id": 179258,
          "date": "Fri 01 Oct 2021 04:32",
          "username": "BillyC",
          "content": "A or C?",
          "upvote_count": "1"
        },
        {
          "id": 172969,
          "date": "Wed 29 Sep 2021 17:07",
          "username": "Ganfeng",
          "content": "thought of C and changed my mind to A, the question is \\\"help user understand the advantage of PIOPS\\\", it is not about how this PIOPS works, eg, what infrastructure it is using?",
          "upvote_count": "2"
        },
        {
          "id": 101040,
          "date": "Tue 21 Sep 2021 03:49",
          "username": "Merlin1",
          "content": "Answer is C. ..Never heard of \\\"enhanced RDS Option\\\"",
          "upvote_count": "4"
        },
        {
          "id": 99622,
          "date": "Mon 20 Sep 2021 14:16",
          "username": "meenu2225",
          "content": "A is correct.",
          "upvote_count": "1"
        },
        {
          "id": 54860,
          "date": "Mon 20 Sep 2021 12:41",
          "username": "miracle",
          "content": "Answer is A. ",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#136",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user authenticating with Amazon Cognito will go through a multi-step process to bootstrap their credentials.<br>Amazon Cognito has two different flows for authentication with public providers.<br>Which of the following are the two flows?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#136",
          "answers": [
            {
              "choice": "<p>A. Authenticated and non-authenticated<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Public and private<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enhanced and basic<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Single step and multistep<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 50767,
          "date": "Thu 30 Sep 2021 05:58",
          "username": "Jshuen",
          "content": "https://docs.amazonaws.cn/en_us/cognito/latest/developerguide/authentication-flow.html",
          "upvote_count": "6"
        },
        {
          "id": 496641,
          "date": "Wed 08 Dec 2021 09:27",
          "username": "cldy",
          "content": "C.  Enhanced and basic",
          "upvote_count": "1"
        },
        {
          "id": 361724,
          "date": "Mon 11 Oct 2021 17:07",
          "username": "viet1991",
          "content": "C.  Enhanced and basic<br><br>Authentication flow settings <br>A user authenticating with Amazon Cognito will go through a multi-step process to bootstrap their credentials. Amazon Cognito has two different flows for authentication with public providers: enhanced and basic. Cognito recommends the use of enhanced authentication flow. However, if you still wish to use the basic flow, you can enable it here. Learn more about authentication flows.",
          "upvote_count": "1"
        },
        {
          "id": 40929,
          "date": "Tue 21 Sep 2021 12:57",
          "username": "CloudFloater01037",
          "content": "C<br>https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-dg.pdfYes C<br>Thank you.",
          "upvote_count": "21"
        },
        {
          "id": 373560,
          "date": "Fri 05 Nov 2021 20:24",
          "username": "01037",
          "content": "Yes C<br>Thank you.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#137",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which of the following is the Amazon Resource Name (ARN) condition operator that can be used within an Identity and Access Management (IAM) policy to check the case-insensitive matching of the ARN?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#137",
          "answers": [
            {
              "choice": "<p>A. ArnCheck<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. ArnMatch<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. ArnCase<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. ArnLike<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 29211,
          "date": "Sun 26 Sep 2021 19:48",
          "username": "tan901037",
          "content": "This question seem a bit out-dated.<br><br>Here says ArnLike is case-sensitive:<br> <br> https://docs.aws.amazon.com/en_pv/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN<br>While the Java SDK docs still reference it as \\\"loose case-insensitive\\\":<br> <br> https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/auth/policy/conditions/ArnCondition.ArnComparisonType.html#ArnLikeThanks",
          "upvote_count": "61"
        },
        {
          "id": 373562,
          "date": "Sun 24 Oct 2021 08:57",
          "username": "01037",
          "content": "Thanks",
          "upvote_count": "1"
        },
        {
          "id": 312285,
          "date": "Sun 24 Oct 2021 00:05",
          "username": "JJu",
          "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html<br><br>ArnEquals, ArnLike<br>Case-sensitive matching of the ARN. Each of the six colon-delimited components of the ARN is checked separately and each can include a multi-character match wildcard (*) or a single-character match wildcard (?). These behave identically.<br><br>ArnNotEquals, ArnNotLike<br>Negated matching for ARN. These behave identically.",
          "upvote_count": "1"
        },
        {
          "id": 54863,
          "date": "Mon 27 Sep 2021 15:57",
          "username": "miracle",
          "content": "Answer is D. <br>Amazon Resource Name (ARN) condition operators let you construct Condition elements that restrict access based on comparing a key to an ARN. ArnLike, for instance, is a case-insensitive matching of the ARN. Each of the six colondelimited components of the ARN is checked separately and each can include a multicharacter match wildcard (*) or a single-character match wildcard (?). http://docs.aws.amazon.com/IAM/latest/UserGuide/AccessPolicyLanguage_ElementDescriptions.html",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#138",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization is creating a VPC for their application hosting. The organization has created two private subnets in the same AZ and created one subnet in a separate zone.<br>The organization wants to make a HA system with the internal ELB. <br>Which of these statements is true with respect to an internal ELB in this scenario?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#138",
          "answers": [
            {
              "choice": "<p>A. ELB can support only one subnet in each availability zone.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. ELB does not allow subnet selection; instead it will automatically select all the available subnets of the VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. If the user is creating an internal ELB, he should use only private subnets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. ELB can support all the subnets irrespective of their zones.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 603900,
          "date": "Thu 19 May 2022 14:40",
          "username": "michaelbaib",
          "content": "i think c is correct as well though A is correct.",
          "upvote_count": "1"
        },
        {
          "id": 525499,
          "date": "Mon 17 Jan 2022 07:32",
          "username": "GeniusMikeLiu",
          "content": "why c is wrong?",
          "upvote_count": "1"
        },
        {
          "id": 495632,
          "date": "Tue 07 Dec 2021 06:24",
          "username": "cldy",
          "content": "A.  ELB can support only one subnet in each availability zone.",
          "upvote_count": "1"
        },
        {
          "id": 490556,
          "date": "Tue 30 Nov 2021 10:47",
          "username": "backfringe",
          "content": "I go with A",
          "upvote_count": "1"
        },
        {
          "id": 373565,
          "date": "Fri 29 Oct 2021 19:39",
          "username": "01037",
          "content": "I finally understand the question.<br>It is A. ",
          "upvote_count": "1"
        },
        {
          "id": 120093,
          "date": "Mon 18 Oct 2021 08:17",
          "username": "manoj101",
          "content": "You can attach at most one subnet per Availability Zone. If you select a subnet from an Availability Zone where there is already an attached subnet, this subnet replaces the currently attached subnet for the Availability Zone.",
          "upvote_count": "2"
        },
        {
          "id": 87316,
          "date": "Mon 11 Oct 2021 02:37",
          "username": "fw",
          "content": "A is correct.<br>https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-application-load-balancer.html<br>For Availability Zones, select at least two Availability Zones from your VPC.  If there is one subnet for an Availability Zone, it is selected. If there is more than one subnet for an Availability Zone, select one of the subnets. You can select only one subnet per Availability Zone.",
          "upvote_count": "3"
        },
        {
          "id": 69097,
          "date": "Tue 05 Oct 2021 19:10",
          "username": "Exam_boyuser0001",
          "content": "You can attach at most one subnet per Availability Zone<br>https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-create-internal-load-balancer.htmlYou can attach at most one subnet per Availability Zone. If you select a subnet from an Availability Zone where there is already an attached subnet, this subnet replaces the currently attached subnet for the Availability Zone",
          "upvote_count": "11"
        },
        {
          "id": 598381,
          "date": "Sun 08 May 2022 01:55",
          "username": "user0001",
          "content": "You can attach at most one subnet per Availability Zone. If you select a subnet from an Availability Zone where there is already an attached subnet, this subnet replaces the currently attached subnet for the Availability Zone",
          "upvote_count": "1"
        },
        {
          "id": 53897,
          "date": "Tue 28 Sep 2021 12:55",
          "username": "SamuelK",
          "content": "A: You can attach at most one subnet per Availability Zone. If you select a subnet from an Availability Zone where there is already an attached subnet, this subnet replaces the currently attached subnet for the Availability Zone.",
          "upvote_count": "4"
        },
        {
          "id": 51288,
          "date": "Thu 23 Sep 2021 02:10",
          "username": "Gorha",
          "content": "which makes C most likely correct. Although, you can create an internal ELB in a public subnet, you should create it in a private subnet. otherwise you want use an internet facing ELB. ",
          "upvote_count": "1"
        },
        {
          "id": 51287,
          "date": "Mon 20 Sep 2021 16:08",
          "username": "Gorha",
          "content": "A is correct, it is the same case for internet facing ELB as well: from the ELB console, while creating an ELB:You can specify only one subnet per Availability Zone. You may also add one Elastic IP per Availability Zone if you wish to have specific addresses for your load balancer.",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#139",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In Amazon ElastiCache, the failure of a single cache node can have an impact on the availability of your application and the load on your back-end database while<br>ElastiCache provisions a replacement for the failed cache node and it get repopulated.<br>Which of the following is a solution to reduce this potential availability impact?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#139",
          "answers": [
            {
              "choice": "<p>A. Spread your memory and compute capacity over fewer number of cache nodes, each with smaller capacity.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Spread your memory and compute capacity over a larger number of cache nodes, each with smaller capacity.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Include fewer number of high capacity nodes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Include a larger number of cache nodes, each with high capacity.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 636851,
          "date": "Mon 25 Jul 2022 19:20",
          "username": "hilft",
          "content": "B. <br>HA - > wider, smaller to avoid a single point of failure",
          "upvote_count": "2"
        },
        {
          "id": 627339,
          "date": "Tue 05 Jul 2022 10:10",
          "username": "TechX",
          "content": "100% B",
          "upvote_count": "1"
        },
        {
          "id": 373567,
          "date": "Tue 02 Nov 2021 11:42",
          "username": "01037",
          "content": "B is correct.",
          "upvote_count": "1"
        },
        {
          "id": 361741,
          "date": "Mon 25 Oct 2021 00:05",
          "username": "viet1991",
          "content": "B. <br>Spread your memory and compute capacity over a larger number of cache nodes, each with smaller capacity.<br>Explanation:<br>https://pegacert.com/vendor/aws/sop-c01/amazon-elasticache-failure-single-cache-node-impact-bf8f9<br><br>In Amazon ElastiCache, the number of cache nodes in the cluster is a key factor in the availability of your cluster running Memcached. The failure of a single cache node can have an impact on the availability of your application and the load on your back-end database while ElastiCache provisions a replacement for the failed cache node and it get repopulated.<br>You can reduce this potential availability impact by spreading your memory and compute capacity over a larger number of cache nodes, each with smaller capacity, rather than using a fewer number of high capacity nodes. <br>http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/CacheNode.Memcached.html",
          "upvote_count": "1"
        },
        {
          "id": 290253,
          "date": "Thu 21 Oct 2021 21:21",
          "username": "wind",
          "content": "B is correct.",
          "upvote_count": "1"
        },
        {
          "id": 228087,
          "date": "Thu 21 Oct 2021 08:08",
          "username": "newme",
          "content": "B<br>Explanation<br>https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/nodes-select-size.html",
          "upvote_count": "2"
        },
        {
          "id": 105498,
          "date": "Sun 10 Oct 2021 16:25",
          "username": "purplejuice",
          "content": "It doesn't say memcached though",
          "upvote_count": "1"
        },
        {
          "id": 92277,
          "date": "Mon 20 Sep 2021 23:12",
          "username": "MkumarStec1980A_New_Guy",
          "content": "Answer is AIt's definitely not A. ..with fewer nodes the impact of a failure would be greater...it's definitely B. ..https://jayendrapatil.com/tag/memcached/",
          "upvote_count": "131"
        },
        {
          "id": 150968,
          "date": "Wed 13 Oct 2021 16:40",
          "username": "Stec1980A_New_Guy",
          "content": "It's definitely not A. ..with fewer nodes the impact of a failure would be greater...it's definitely B. ..https://jayendrapatil.com/tag/memcached/",
          "upvote_count": "31"
        },
        {
          "id": 216680,
          "date": "Thu 14 Oct 2021 20:59",
          "username": "A_New_Guy",
          "content": "https://jayendrapatil.com/tag/memcached/",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#140",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>MapMySite is setting up a web application in the AWS VPC.  The organization has decided to use an AWS RDS instead of using its own DB instance for HA and<br>DR requirements.<br>The organization also wants to secure RDS access.<br>How should the web application be setup with RDS?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#140",
          "answers": [
            {
              "choice": "<p>A. Create a VPC with one public and one private subnet. Launch an application instance in the public subnet while RDS is launched in the private subnet.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Setup a public and two private subnets in different AZs within a VPC and create a subnet group. Launch RDS with that subnet group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a network interface and attach two subnets to it. Attach that network interface with RDS while launching a DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create two separate VPCs and launch a Web app in one VPC and RDS in a separate VPC and connect them with VPC peering.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 658968,
          "date": "Sun 04 Sep 2022 07:29",
          "username": "ggrodskiy",
          "content": "DB instance for HA and DR requirements.<br>B - is correct.",
          "upvote_count": "1"
        },
        {
          "id": 643298,
          "date": "Sat 06 Aug 2022 12:08",
          "username": "gondohwe",
          "content": "answering that qstn from a security angle i wld go for A",
          "upvote_count": "1"
        },
        {
          "id": 531759,
          "date": "Tue 25 Jan 2022 02:19",
          "username": "RVivek",
          "content": "B.  Each DB subnet group should have subnets in at least two Availability Zones in a given AWS Region. When creating a DB instance in a VPC, you must choose a DB subnet group<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC. WorkingWithRDSInstanceinaVPC. html<br><br>A- is in correct . After you create a subnet group how do you choose private subnet to deploy RDS",
          "upvote_count": "3"
        },
        {
          "id": 494920,
          "date": "Mon 06 Dec 2021 06:29",
          "username": "cldy",
          "content": "B.  Setup a public and two private subnets in different AZs within a VPC and create a subnet group. Launch RDS with that subnet group.",
          "upvote_count": "4"
        },
        {
          "id": 434700,
          "date": "Tue 02 Nov 2021 06:51",
          "username": "sergioandreslq",
          "content": "B: reason: DB subnet group is a collection of subnets (generally private) that a user can create in a VPC and assign to the RDS DB instances. A DB subnet group allows the user to specify a particular VPC when creating the DB instances. Each DB subnet group should have subnets in at least two AZs in a given region.",
          "upvote_count": "1"
        },
        {
          "id": 424987,
          "date": "Sun 31 Oct 2021 04:16",
          "username": "FERIN_01",
          "content": "A subnet group is a collection of subnets (typically private) that you can designate for your clusters running in an Amazon Virtual Private Cloud (VPC) environment. ... ElastiCache uses that subnet group to choose a subnet and IP addresses within that subnet to associate with your nodes.",
          "upvote_count": "1"
        },
        {
          "id": 408097,
          "date": "Fri 29 Oct 2021 09:56",
          "username": "robertomartinez",
          "content": "those old questions are impossible, the formulation is very poor and you are always wondering if it's a voluntary mistake or not:it's not testing knowlege but how yo interpret a sh***y question.In real life you'd ask your client to rephrase to clear things out. I agree A or B depending on how you want to read the question concerning the presence of the public subnet in the subnet group.",
          "upvote_count": "3"
        },
        {
          "id": 373571,
          "date": "Fri 24 Sep 2021 07:51",
          "username": "01037bamjive06DashL",
          "content": "B? is the public subnet is also in RDS subnet group?<br>Then RDS instance may exist in the public subnet?I see where you're going with this. So whats your answer then? If they didnt mention HA, I'd have picked A.  So B sounds OK - RDS part of private ofcoz...<br>Sarcasm maybe ;)A<br>The subnets in a DB subnet group are either public or private. They can't be a mix of both public and private subnets.<br>So B is ruled out",
          "upvote_count": "411"
        },
        {
          "id": 382207,
          "date": "Thu 30 Sep 2021 05:01",
          "username": "bamjive06DashL",
          "content": "I see where you're going with this. So whats your answer then? If they didnt mention HA, I'd have picked A.  So B sounds OK - RDS part of private ofcoz...<br>Sarcasm maybe ;)A<br>The subnets in a DB subnet group are either public or private. They can't be a mix of both public and private subnets.<br>So B is ruled out",
          "upvote_count": "11"
        },
        {
          "id": 388241,
          "date": "Mon 04 Oct 2021 07:11",
          "username": "DashL",
          "content": "A<br>The subnets in a DB subnet group are either public or private. They can't be a mix of both public and private subnets.<br>So B is ruled out",
          "upvote_count": "1"
        },
        {
          "id": 361743,
          "date": "Fri 24 Sep 2021 01:59",
          "username": "viet1991",
          "content": "B.  Setup a public and two private subnets in different AZs within a VPC and create a subnet group. Launch RDS with that subnet group.",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#141",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>When does an AWS Data Pipeline terminate the AWS Data Pipeline-managed compute resources?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#141",
          "answers": [
            {
              "choice": "<p>A. AWS Data Pipeline terminates AWS Data Pipeline-managed compute resources every 2 hours.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. When the final activity that uses the resources is running<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. AWS Data Pipeline terminates AWS Data Pipeline-managed compute resources every 12 hours.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. When the final activity that uses the resources has completed successfully or failed<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 631116,
          "date": "Thu 14 Jul 2022 03:45",
          "username": "BrianPing",
          "content": "go for D",
          "upvote_count": "1"
        },
        {
          "id": 495099,
          "date": "Mon 06 Dec 2021 12:57",
          "username": "cldy",
          "content": "D.  When the final activity that uses the resources has completed successfully or failed",
          "upvote_count": "3"
        },
        {
          "id": 488847,
          "date": "Sun 28 Nov 2021 06:11",
          "username": "backfringe",
          "content": "I'd go with D",
          "upvote_count": "1"
        },
        {
          "id": 373587,
          "date": "Sat 30 Oct 2021 02:06",
          "username": "01037",
          "content": "I don't really know<br>But D seems reasonable.",
          "upvote_count": "2"
        },
        {
          "id": 361757,
          "date": "Fri 22 Oct 2021 22:53",
          "username": "viet1991",
          "content": "D. <br>When the final activity that uses the resources has completed successfully or failed<br><br>Explanation:<br>Compute resources will be provisioned by AWS Data Pipeline when the first activity for a<br>scheduled time that uses those resources is ready to run, and those instances will be terminated<br>when the final activity that uses the resources has completed successfully or failed.<br>https://aws.amazon.com/datapipeline/faqs/",
          "upvote_count": "1"
        },
        {
          "id": 55346,
          "date": "Thu 21 Oct 2021 09:49",
          "username": "miracle",
          "content": "Answer is D. ",
          "upvote_count": "1"
        },
        {
          "id": 34456,
          "date": "Wed 06 Oct 2021 08:39",
          "username": "shan75",
          "content": "100 GB. .. Reference: \\\"Effective immediately, you can provision new RDS database instances with 1,000 to 10,000 IOPS, and with 100GB to 1 TB of storage for MySQL and Oracle databases\\\"",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#142",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>What bandwidths do AWS Direct Connect currently support?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#142",
          "answers": [
            {
              "choice": "<p>A. 10Mbps and 100Mbps<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. 10Gbps and 100Gbps<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. 100Mbps and 1Gbps<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. 1Gbps and 10 Gbps<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 521704,
          "date": "Tue 11 Jan 2022 19:49",
          "username": "AnonymousJhb",
          "content": "I think this question should be around port size and not speed. If so, then the answer is D.  <br>1Gbps and 10Gbps ports are available. <br>Speeds of 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, and 500Mbps can be ordered from any APN partners.",
          "upvote_count": "1"
        },
        {
          "id": 494215,
          "date": "Sun 05 Dec 2021 11:14",
          "username": "cldy",
          "content": "D.  1Gbps and 10 Gbps",
          "upvote_count": "2"
        },
        {
          "id": 382211,
          "date": "Thu 28 Oct 2021 15:25",
          "username": "bamjive06",
          "content": "Not getting too detailed with this, a Direct Connect (site2site) offers 1G/10/G/100G...but given this may be an old question, answer is D. ",
          "upvote_count": "2"
        },
        {
          "id": 361758,
          "date": "Fri 15 Oct 2021 22:54",
          "username": "viet19910103701037",
          "content": "D. <br>---<br>Q. What connection speeds are available?<br><br>For Dedicated Connections, 1Gbps, 10Gbps, and 100Gbps ports are available. For Hosted Connections, capacities of 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps and 10Gbps may be ordered from approved AWS Direct Connect Partners. See AWS Direct Connect Partners for more information. <br><br>https://aws.amazon.com/directconnect/faqs/#:~:text=What%20connection%20speeds%20are%20available,approved%20AWS%20Direct%20Connect%20Partners.According to this, BCE are all correct?It's BCD",
          "upvote_count": "211"
        },
        {
          "id": 373594,
          "date": "Sun 17 Oct 2021 16:26",
          "username": "0103701037",
          "content": "According to this, BCE are all correct?It's BCD",
          "upvote_count": "11"
        },
        {
          "id": 373595,
          "date": "Mon 25 Oct 2021 15:58",
          "username": "01037",
          "content": "It's BCD",
          "upvote_count": "1"
        },
        {
          "id": 212010,
          "date": "Mon 27 Sep 2021 12:26",
          "username": "TerrenceC",
          "content": "More accurately, both 1/10 Gbps are Dedicated Connections. However, as of today, Direct Connect has offered Hosted Connections that provide more granular bandwidth capacities for every client using.",
          "upvote_count": "2"
        },
        {
          "id": 55347,
          "date": "Wed 22 Sep 2021 20:25",
          "username": "miracle",
          "content": "Answer is D. ",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#143",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>The Principal element of an IAM policy refers to the specific entity that should be allowed or denied permission, whereas the translates to everyone except the specified entity.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#143",
          "answers": [
            {
              "choice": "<p>A. NotPrincipal<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Vendor<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Principal<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Action<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 608386,
          "date": "Sat 28 May 2022 14:18",
          "username": "ravisar",
          "content": "I don't understand this question.\\\"while the denotes everyone except the specified entity\\\" - what does it mean? There is nothing in IAM policy about \\\"Vendor\\\"! I understand the purpose of principal in resource-based IAM policies.",
          "upvote_count": "1"
        },
        {
          "id": 424992,
          "date": "Thu 04 Nov 2021 01:54",
          "username": "FERIN_01",
          "content": "Use the NotPrincipal element to specify the IAM user, federated user, IAM role, AWS account, AWS service, or other principal that is not allowed or denied access to a resource. The NotPrincipal element enables you to specify an exception to a list of principals. Use this element to deny access to all principals except the one named in the NotPrincipal element. The syntax for specifying NotPrincipal is the same as for specifying AWS JSON policy elements: Principal.<br><br>You cannot use the NotPrincipal element in an IAM identity-based policy. You can use it in the trust policies for IAM roles and in resource-based policies. Resource-based policies are policies that you embed directly in an IAM resource.",
          "upvote_count": "1"
        },
        {
          "id": 374368,
          "date": "Wed 03 Nov 2021 02:13",
          "username": "01037",
          "content": "Ok<br>It's A",
          "upvote_count": "1"
        },
        {
          "id": 55351,
          "date": "Tue 12 Oct 2021 11:19",
          "username": "miracle",
          "content": "Answer is A. ",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#144",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Doug has created a VPC with CIDR 10.201.0.0/16 in his AWS account. In this VPC he has created a public subnet with CIDR block 10.201.31.0/24.<br>While launching a new EC2 from the console, he is not able to assign the private IP address 10.201.31.6 to this instance.<br>Which is the most likely reason for this issue?</p>",
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
              "choice": "<p>A. Private address IP 10.201.31.6 is currently assigned to another interface<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Private IP address 10.201.31.6 is reserved by Amazon for IP networking purposes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Private IP address 10.201.31.6 is blocked via ACLs in Amazon infrastructure as a part of platform security.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Private IP address 10.201.31.6 is not part of the associated subnet's IP address range.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 55389,
          "date": "Thu 23 Sep 2021 02:49",
          "username": "miracle",
          "content": "Answer is A. ",
          "upvote_count": "7"
        },
        {
          "id": 497790,
          "date": "Thu 09 Dec 2021 15:24",
          "username": "cldy",
          "content": "A.  Private address IP 10.201.31.6 is currently assigned to another interface",
          "upvote_count": "3"
        },
        {
          "id": 374370,
          "date": "Sat 06 Nov 2021 04:36",
          "username": "01037",
          "content": "A is correct",
          "upvote_count": "2"
        },
        {
          "id": 237357,
          "date": "Tue 02 Nov 2021 11:15",
          "username": "karoth_pkaroth_pwindMrCarterLiamNg",
          "content": "Sorry, it's the only way to submit NEW QUESTION:<br><br>A company is deploying a public-facing global application on AWS using Amazon CloudFront. The application communicates with an external system. A solutions architect needs to ensure the data is secured during end-to-end transit and at rest.<br><br>What combination of steps will satisfy these requirements? (Select THREE. )<br>A.  Create a public certificate for the required domain in AWS Certificate Manager and deploy it to CloudFront, an Application Load Balancer, and Amazon EC2 Instances.<br><br>B.  Acquire a public certificate from a third-party vendor and deploy it to CloudFront, an Application Load Balancer and Amazon EC2 instances.<br><br>C.  Provision Amazon EBS encypted volumes using AWS KMS and ensure explicit encryption of data when writing to Amazon EBS.<br><br>D.  Provision Amazon EBS encypted volumes using AWS KMS.<br><br>E.  Use SSL or encrypt data while communicating with the external system using a VPN.<br><br>F.  Communicate with the external system using plaintext and use the VPN to encrypt data in transit.A, D, E, for me.I think ADE is correct.Should be B,D,E as you want https all the way through to EC2. If it was just between CloudFront and ALB then it would be OK to use ACMAgreed. Similiar question Same Answers @Question #244 Topic 1",
          "upvote_count": "11231"
        },
        {
          "id": 237650,
          "date": "Tue 02 Nov 2021 18:54",
          "username": "karoth_p",
          "content": "A, D, E, for me.",
          "upvote_count": "1"
        },
        {
          "id": 290295,
          "date": "Thu 04 Nov 2021 16:49",
          "username": "wind",
          "content": "I think ADE is correct.",
          "upvote_count": "2"
        },
        {
          "id": 393759,
          "date": "Sat 06 Nov 2021 20:50",
          "username": "MrCarterLiamNg",
          "content": "Should be B,D,E as you want https all the way through to EC2. If it was just between CloudFront and ALB then it would be OK to use ACMAgreed. Similiar question Same Answers @Question #244 Topic 1",
          "upvote_count": "31"
        },
        {
          "id": 603142,
          "date": "Wed 18 May 2022 06:15",
          "username": "LiamNg",
          "content": "Agreed. Similiar question Same Answers @Question #244 Topic 1",
          "upvote_count": "1"
        },
        {
          "id": 236754,
          "date": "Mon 01 Nov 2021 00:05",
          "username": "MichaelHuang",
          "content": "Should be A<br>B.  only first 4 and last one<br>C.  Not applicable<br>D.  10.201.31.6 ispart of 10.201.31.0/24.",
          "upvote_count": "4"
        },
        {
          "id": 121935,
          "date": "Thu 21 Oct 2021 12:12",
          "username": "BasselfcbfloronybStec1980",
          "content": "answer is D@Bassel: 10.201.31.6 is part of the CIDR \\\"10.201.31.0/24\\\" and also of CIDR 10.201.0.0/16 ... so \\\"D\\\" \\\"Private IP address 10.201.31.6 is not part of the associated subnet's IP address range.\\\" could NOT be the Option ...!10.201.31.6 is part of the subnet.<br>Answer is AIt's definitely not D. ..10.201.31.0/24 allows 10.201.31.0 - 10.201.31.255 with reservations on .0 - .3 and .255. It's most likely that .6 is in use elsewhere already...Answer is A. ",
          "upvote_count": "2413"
        },
        {
          "id": 139316,
          "date": "Sat 30 Oct 2021 00:55",
          "username": "fcbflo",
          "content": "@Bassel: 10.201.31.6 is part of the CIDR \\\"10.201.31.0/24\\\" and also of CIDR 10.201.0.0/16 ... so \\\"D\\\" \\\"Private IP address 10.201.31.6 is not part of the associated subnet's IP address range.\\\" could NOT be the Option ...!",
          "upvote_count": "4"
        },
        {
          "id": 139460,
          "date": "Sat 30 Oct 2021 02:29",
          "username": "ronyb",
          "content": "10.201.31.6 is part of the subnet.<br>Answer is A",
          "upvote_count": "1"
        },
        {
          "id": 150998,
          "date": "Sun 31 Oct 2021 19:22",
          "username": "Stec1980",
          "content": "It's definitely not D. ..10.201.31.0/24 allows 10.201.31.0 - 10.201.31.255 with reservations on .0 - .3 and .255. It's most likely that .6 is in use elsewhere already...Answer is A. ",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#145",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user is configuring MySQL RDS with PIOPS. What should be the minimum size of DB storage provided by the user?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#145",
          "answers": [
            {
              "choice": "<p>A. 1 TB<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. 50 GB<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. 5 GB<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. 100 GB<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 488874,
          "date": "Sun 28 Nov 2021 07:16",
          "username": "backfringe",
          "content": "I'd go with D",
          "upvote_count": "1"
        },
        {
          "id": 374379,
          "date": "Sun 07 Nov 2021 08:22",
          "username": "01037",
          "content": "D<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#User_PIOPS.Increase",
          "upvote_count": "1"
        },
        {
          "id": 120895,
          "date": "Thu 04 Nov 2021 15:12",
          "username": "manoj101",
          "content": "D:<br>Except MSSQL rest all are 100GB minimum<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html",
          "upvote_count": "4"
        },
        {
          "id": 55432,
          "date": "Tue 05 Oct 2021 04:56",
          "username": "miracle",
          "content": "Answer is D.  RDS MySQL support 100GB, MSSQL supports 20GB minimum.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#146",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>The Statement element, of an AWS IAM policy, contains an array of individual statements. Each individual statement is a(n) _________ block enclosed in braces<br>{ }.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#146",
          "answers": [
            {
              "choice": "<p>A. XML<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. JavaScript<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. JSON<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. AJAX<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 494939,
          "date": "Mon 06 Dec 2021 07:20",
          "username": "cldy",
          "content": "C.  JSON",
          "upvote_count": "3"
        },
        {
          "id": 374380,
          "date": "Sat 30 Oct 2021 01:02",
          "username": "01037",
          "content": "C is correct",
          "upvote_count": "1"
        },
        {
          "id": 361762,
          "date": "Thu 14 Oct 2021 12:22",
          "username": "viet1991",
          "content": "C. <br>The Statement element, of an IAM policy, contains an array of individual statements. Each individual statement is a JSON block enclosed in braces { }.<br>http://docs.aws.amazon.com/IAM/latest/UserGuide/AccessPolicyLanguage_ElementDescriptions.html",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#147",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>If no explicit deny is found while applying IAM's Policy Evaluation Logic, the enforcement code looks for any ______ instructions that would apply to the request.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#147",
          "answers": [
            {
              "choice": "<p>A. \"cancel\"<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. \"suspend\"<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. \"allowג€<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. \"valid\"<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 636282,
          "date": "Mon 25 Jul 2022 01:00",
          "username": "hilft",
          "content": "keyword : allow / deny",
          "upvote_count": "2"
        },
        {
          "id": 374381,
          "date": "Wed 13 Oct 2021 08:36",
          "username": "01037",
          "content": "C is correct",
          "upvote_count": "1"
        },
        {
          "id": 361764,
          "date": "Fri 01 Oct 2021 20:25",
          "username": "viet1991",
          "content": "Correct Answer: C<br>Explanation/Reference:<br>If an explicit deny is not found among the applicable policies for a specific request, IAM’s Policy Evaluation Logic checks for any \\\"allow\\\" instructions to check if the request can be successfully completed.<br>http://docs.aws.amazon.com/IAM/latest/UserGuide/AccessPolicyLanguage_EvaluationLogic.html",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#148",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization is hosting a scalable web application using AWS. The organization has configured ELB and Auto Scaling to make the application scalable.<br>Which of the below mentioned statements is not required to be followed for ELB when the application is planning to host a web application on VPC?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#148",
          "answers": [
            {
              "choice": "<p>A. The ELB and all the instances should be in the same subnet.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the security group rules and network ACLs to allow traffic to be routed between the subnets in the VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The internet facing ELB should have a route table associated with the internet gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The internet facing ELB should be only in a public subnet.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 55438,
          "date": "Sun 03 Oct 2021 10:21",
          "username": "miracle",
          "content": "Answer is A. ",
          "upvote_count": "8"
        },
        {
          "id": 494914,
          "date": "Mon 06 Dec 2021 06:15",
          "username": "cldy",
          "content": "A.  The ELB and all the instances should be in the same subnet.",
          "upvote_count": "1"
        },
        {
          "id": 374386,
          "date": "Sat 23 Oct 2021 02:43",
          "username": "01037",
          "content": "Yes A. <br>ELB and instances is required to be in same AZ, not same subnet",
          "upvote_count": "1"
        },
        {
          "id": 183720,
          "date": "Thu 21 Oct 2021 16:46",
          "username": "lostriExtHo",
          "content": "i quote \\\"The ELB and instances can be in a separate subnet.\\\" thoughts ?yesin question what is not required",
          "upvote_count": "11"
        },
        {
          "id": 316011,
          "date": "Thu 21 Oct 2021 17:57",
          "username": "ExtHo",
          "content": "yesin question what is not required",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#149",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization (account ID 123412341234) has configured the IAM policy to allow the user to modify his credentials.<br>What will the below mentioned statement allow the user to perform?<br><img src=\"https://www.examtopics.com/https://examtopics.com/assets/media/exam-media/04241/0012000001.png\" class=\"in-exam-image\"></p>",
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
              "choice": "<p>A. Allow the IAM user to update the membership of the group called TestingGroup<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. The IAM policy will throw an error due to an invalid resource name<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The IAM policy will allow the user to subscribe to any IAM group<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Allow the IAM user to delete the TestingGroup<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 68430,
          "date": "Fri 22 Oct 2021 10:03",
          "username": "Smart01037manoj101viet1991user0001",
          "content": "Extra space in front of Account ID in Resource ARN will throw error during creation. Answer is BI saw the space, I thought it's a typo, isn't itYes that's correct. Otherwise question looks very simple.Detail error message:<br>An error occurred<br>Your request has a problem. Please see the following details.<br>The policy failed legacy parsingi do not believe they are stupid enough to try and use space as an error to find , B is wrong <br>A is right",
          "upvote_count": "131322"
        },
        {
          "id": 374392,
          "date": "Sun 31 Oct 2021 08:37",
          "username": "01037",
          "content": "I saw the space, I thought it's a typo, isn't it",
          "upvote_count": "1"
        },
        {
          "id": 120913,
          "date": "Tue 26 Oct 2021 06:46",
          "username": "manoj101",
          "content": "Yes that's correct. Otherwise question looks very simple.",
          "upvote_count": "3"
        },
        {
          "id": 361771,
          "date": "Fri 29 Oct 2021 08:29",
          "username": "viet1991",
          "content": "Detail error message:<br>An error occurred<br>Your request has a problem. Please see the following details.<br>The policy failed legacy parsing",
          "upvote_count": "2"
        },
        {
          "id": 602068,
          "date": "Sun 15 May 2022 14:22",
          "username": "user0001",
          "content": "i do not believe they are stupid enough to try and use space as an error to find , B is wrong <br>A is right",
          "upvote_count": "2"
        },
        {
          "id": 628370,
          "date": "Thu 07 Jul 2022 15:33",
          "username": "junehc",
          "content": "A is correct if the extra space is an erroneous typo.",
          "upvote_count": "1"
        },
        {
          "id": 497342,
          "date": "Thu 09 Dec 2021 06:09",
          "username": "cldy",
          "content": "A.  Allow the IAM user to update the membership of the group called TestingGroup",
          "upvote_count": "1"
        },
        {
          "id": 179286,
          "date": "Thu 28 Oct 2021 23:39",
          "username": "BillyC",
          "content": "B is correct",
          "upvote_count": "2"
        },
        {
          "id": 55441,
          "date": "Sat 09 Oct 2021 21:55",
          "username": "miracle",
          "content": "Answer is A.  any other idea?",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#150",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user has configured EBS volume with PIOPS. The user is not experiencing the optimal throughput.<br>Which of the following could not be factor affecting I/O performance of that EBS volume?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#150",
          "answers": [
            {
              "choice": "<p>A. EBS bandwidth of dedicated instance exceeding the PIOPS<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. EBS volume size<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. EC2 bandwidth<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Instance type is not EBS optimized<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 69125,
          "date": "Thu 14 Oct 2021 07:25",
          "username": "Exam_boy",
          "content": "A.  EBS bandwidth of dedicated instance exceeding the PIOPS<br><br>If the user is not experiencing the expected IOPS or throughput that is provisioned, ensure that the EC2 bandwidth is not the limiting factor, the instance is EBS-optimized (or include 10 Gigabit network connectivity) and the instance type EBS dedicated bandwidth exceeds the IOPS more than he has provisioned. http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-io-characteristics.html",
          "upvote_count": "9"
        },
        {
          "id": 652042,
          "date": "Fri 26 Aug 2022 06:22",
          "username": "Alexey79",
          "content": "Why B:<br>EBS Volume Type Provision IOPS (io) can’t increase IOPS per Volume Size (GB), only on gp2 Volume Types.<br>Because of that, it can NOT “be a factor impacting the EBS volume's I/O performance”.",
          "upvote_count": "1"
        },
        {
          "id": 236763,
          "date": "Fri 29 Oct 2021 04:09",
          "username": "MichaelHuangTable2022",
          "content": "The Answer would be B, if <br>the question of A is: \\\" EBS bandwidth of dedicated instance NOT exceeding the PIOPS\\\"Agree for B, don't even need to think, question is asking \\\"could not be the factor affectingI/O performance\\\".",
          "upvote_count": "42"
        },
        {
          "id": 414399,
          "date": "Fri 05 Nov 2021 01:11",
          "username": "Table2022",
          "content": "Agree for B, don't even need to think, question is asking \\\"could not be the factor affectingI/O performance\\\".",
          "upvote_count": "2"
        },
        {
          "id": 145441,
          "date": "Wed 27 Oct 2021 05:46",
          "username": "fullaws",
          "content": "B is correct",
          "upvote_count": "2"
        },
        {
          "id": 23287,
          "date": "Fri 08 Oct 2021 14:26",
          "username": "examacc",
          "content": "oops.. dint see NOT",
          "upvote_count": "3"
        },
        {
          "id": 23286,
          "date": "Sat 25 Sep 2021 18:17",
          "username": "examacc",
          "content": "I think D you get performance with PIOPS volumes with ebs optimized instances",
          "upvote_count": "2"
        },
        {
          "id": 23026,
          "date": "Fri 24 Sep 2021 15:07",
          "username": "uopspoptan9",
          "content": "Why A is wrong? <br>Isn't is great that we have more bandwidth than PIOPS. How could this be wrong. <br><br>B should be correct because there is a ratio of PIOPS/volume sizeVolume size related to the PIOPS you can choose in the CONFIGURATION TIME only.",
          "upvote_count": "11"
        },
        {
          "id": 29218,
          "date": "Fri 08 Oct 2021 23:16",
          "username": "tan9",
          "content": "Volume size related to the PIOPS you can choose in the CONFIGURATION TIME only.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#151",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>How can multiple compute resources be used on the same pipeline in AWS Data Pipeline?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#151",
          "answers": [
            {
              "choice": "<p>A. You can use multiple compute resources on the same pipeline by defining multiple cluster objects in your definition file and associating the cluster to use for each activity via its runs On field.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. You can use multiple compute resources on the same pipeline by defining multiple cluster definition files<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. You can use multiple compute resources on the same pipeline by defining multiple clusters for your activity.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. You cannot use multiple compute resources on the same pipeline.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 496718,
          "date": "Wed 08 Dec 2021 11:21",
          "username": "cldy",
          "content": "A.  You can use multiple compute resources on the same pipeline by defining multiple cluster objects in your definition file and associating the cluster to use for each activity via its runs On field.",
          "upvote_count": "1"
        },
        {
          "id": 361789,
          "date": "Sun 24 Oct 2021 23:07",
          "username": "viet199101037",
          "content": "A. <br>https://aws.amazon.com/datapipeline/faqs/#:~:text=Q%3A%20Can%20multiple%20compute%20resources,activity%20via%20its%20runsOn%20field.<br><br>Q: Can multiple compute resources be used on the same pipeline?<br><br>Yes, simply define multiple cluster objects in your definition file and associate the cluster to use for each activity via its runsOn field. This allows pipelines to combine AWS and on-premise resources, or to use a mix of instance types for their activities – for example, you may want to use a t1.micro to execute a quick script cheaply, but later on the pipeline may have an Amazon EMR job that requires the power of a cluster of larger instances.Thanks<br>It's A",
          "upvote_count": "31"
        },
        {
          "id": 375199,
          "date": "Sat 06 Nov 2021 13:58",
          "username": "01037",
          "content": "Thanks<br>It's A",
          "upvote_count": "1"
        },
        {
          "id": 92294,
          "date": "Sun 03 Oct 2021 06:05",
          "username": "Mkumar",
          "content": "Answer is A. <br>https://aws.amazon.com/datapipeline/faqs/",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#152",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>The two policies that you attach to an IAM role are the access policy and the trust policy. The trust policy identifies who can assume the role and grants the permission in the AWS Lambda account principal by adding the _______ action.</p>",
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
              "choice": "<p>A. aws:AssumeAdmin<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. lambda:InvokeAsync<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. sts:InvokeAsync<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. sts:AssumeRole<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 69372,
          "date": "Tue 05 Oct 2021 11:06",
          "username": "Exam_boy",
          "content": "The administrator for the newly trusted account must grant the users the permission to assume the role. To do that, the administrator must create or edit a policy that is attached to the user to allow the user access to the sts:AssumeRole action.<br><br>https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-managingrole-editing-console.html",
          "upvote_count": "5"
        },
        {
          "id": 587070,
          "date": "Sun 17 Apr 2022 08:07",
          "username": "wsyh",
          "content": "I will go with D",
          "upvote_count": "1"
        },
        {
          "id": 494360,
          "date": "Sun 05 Dec 2021 14:28",
          "username": "cldy",
          "content": "D.  sts:AssumeRole",
          "upvote_count": "1"
        },
        {
          "id": 375196,
          "date": "Thu 04 Nov 2021 07:18",
          "username": "01037",
          "content": "D is correct",
          "upvote_count": "2"
        },
        {
          "id": 92295,
          "date": "Fri 08 Oct 2021 05:37",
          "username": "Mkumar",
          "content": "Answer D",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#153",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>The MySecureData company has five branches across the globe. They want to expand their data centers such that their web server will be in the AWS and each branch would have their own database in the local data center. Based on the user login, the company wants to connect to the data center.<br>How can MySecureData company implement this scenario with the AWS VPC?</p>",
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
              "choice": "<p>A. Create five VPCs with the public subnet for the app server and setup the VPN gateway for each VPN to connect them individually.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the AWS VPN CloudHub to communicate with multiple VPN connections.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the AWS CloudGateway to communicate with multiple VPN connections.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. It is not possible to connect different data centers from a single VPC. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 92297,
          "date": "Wed 13 Oct 2021 02:53",
          "username": "Mkumar",
          "content": "Answer B",
          "upvote_count": "5"
        },
        {
          "id": 497338,
          "date": "Thu 09 Dec 2021 06:07",
          "username": "cldy",
          "content": "B.  Use the AWS VPN CloudHub to communicate with multiple VPN connections.",
          "upvote_count": "2"
        },
        {
          "id": 484113,
          "date": "Mon 22 Nov 2021 12:13",
          "username": "acloudguru",
          "content": "REALLY HOPE I CAN HAVE THIS QUESTION IN MY EXAM",
          "upvote_count": "1"
        },
        {
          "id": 375949,
          "date": "Sat 06 Nov 2021 06:46",
          "username": "01037",
          "content": "Is the question asking how to implement connections between datacenters and vpc, and between datacenters as well?<br>If so, it is B",
          "upvote_count": "1"
        },
        {
          "id": 361790,
          "date": "Fri 05 Nov 2021 23:54",
          "username": "viet1991",
          "content": "B. <br><br>If the organization has multiple VPN connections, he can<br>provide secure communication between sites using the AWS VPN CloudHub.<br>The VPN CloudHub operates on a simple hub-and-spoke model that the user can use with or<br><br>without a VPC.  This design is suitable for customers with multiple branch offices and existing<br>internet connections who would like to implement a convenient, potentially low-cost hub-andspoke model for primary or backup connectivity between remote offices.<br>http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPN_CloudHub.html",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#154",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>One of your AWS Data Pipeline activities has failed consequently and has entered a hard failure state after retrying thrice.<br>You want to try it again. Is it possible to increase the number of automatic retries to more than thrice?</p>",
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
              "choice": "<p>A. Yes, you can increase the number of automatic retries to 6.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Yes, you can increase the number of automatic retries to indefinite number.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. No, you cannot increase the number of automatic retries.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Yes, you can increase the number of automatic retries to 10.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 324434,
          "date": "Wed 29 Sep 2021 16:42",
          "username": "Dgix",
          "content": "\\\"Thrice\\\"? Is this Shakespeare?",
          "upvote_count": "8"
        },
        {
          "id": 620046,
          "date": "Tue 21 Jun 2022 23:52",
          "username": "gdtypk",
          "content": "D! https://aws.amazon.com/datapipeline/faqs/?nc1=h_ls#:~:text=What%20happens%20if%20an%20activity%20fails",
          "upvote_count": "3"
        },
        {
          "id": 499159,
          "date": "Sat 11 Dec 2021 05:19",
          "username": "cldy",
          "content": "D.  Yes, you can increase the number of automatic retries to 10.",
          "upvote_count": "2"
        },
        {
          "id": 375966,
          "date": "Sat 30 Oct 2021 20:19",
          "username": "01037",
          "content": "OK, it's D",
          "upvote_count": "1"
        },
        {
          "id": 330795,
          "date": "Tue 19 Oct 2021 12:10",
          "username": "kenkool",
          "content": "Ans is D<br>Q: What happens if an activity fails?<br><br>\\\"An activity fails if all of its activity attempts return with a failed state. By default, an activity retries three times before entering a hard failure state. You can increase the number of automatic retries to 10; however, the system does not allow indefinite retries. After an activity exhausts its attempts, it triggers any configured onFailure alarm and will not try to run again unless you manually issue a rerun command via the CLI, API, or console button.\\\"",
          "upvote_count": "3"
        },
        {
          "id": 92300,
          "date": "Tue 21 Sep 2021 20:15",
          "username": "Mkumar",
          "content": "Answer D",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#155",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>True or False: In Amazon ElastiCache replication groups of Redis, for performance tuning reasons, you can change the roles of the cache nodes within the replication group, with the primary and one of the replicas exchanging roles.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#155",
          "answers": [
            {
              "choice": "<p>A. True, however, you get lower performance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. FALSE<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. TRUE<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. False, you must recreate the replication group to improve performance tuning.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 496645,
          "date": "Wed 08 Dec 2021 09:30",
          "username": "cldy",
          "content": "C.  TRUE",
          "upvote_count": "1"
        },
        {
          "id": 361794,
          "date": "Fri 15 Oct 2021 12:47",
          "username": "viet199101037",
          "content": "C. <br>Explanation:<br>In Amazon ElastiCache, a replication group is a collection of Redis Cache Clusters, with one primary read-write cluster and up to five secondary, read-only clusters, which are called read replicas. You can change the roles of the cache clusters within the replication group, with the primary cluster and one of the replicas exchanging roles. You might decide to do this for performance tuning reasons. <br>http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/Replication.Redis.Groups.html<br><br>https://pegacert.com/vendor/aws/sop-c01/true-false-amazon-elasticache-replication-groups-redis-f126fThank you.",
          "upvote_count": "11"
        },
        {
          "id": 375968,
          "date": "Thu 04 Nov 2021 04:47",
          "username": "01037",
          "content": "Thank you.",
          "upvote_count": "1"
        },
        {
          "id": 179296,
          "date": "Fri 15 Oct 2021 05:16",
          "username": "BillyC",
          "content": "C is correct",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#156",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>How much memory does the cr1.8xlarge instance type provide?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#156",
          "answers": [
            {
              "choice": "<p>A. 224 GB<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. 124 GB<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. 184 GB<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. 244 GB<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 149688,
          "date": "Sun 10 Oct 2021 20:51",
          "username": "AWSKrishbamjive06",
          "content": "But why do they ask this kind of number memorizing questions? There are 40-50 types of instance type, difficult to remember all these. They should logical questions though.Just to get you krishing i guess ;)",
          "upvote_count": "81"
        },
        {
          "id": 382226,
          "date": "Thu 04 Nov 2021 03:03",
          "username": "bamjive06",
          "content": "Just to get you krishing i guess ;)",
          "upvote_count": "1"
        },
        {
          "id": 636283,
          "date": "Mon 25 Jul 2022 01:00",
          "username": "hilft",
          "content": "Memorized.",
          "upvote_count": "1"
        },
        {
          "id": 375970,
          "date": "Tue 02 Nov 2021 05:34",
          "username": "01037",
          "content": "Such a question.<br>It's D",
          "upvote_count": "2"
        },
        {
          "id": 272322,
          "date": "Wed 27 Oct 2021 15:07",
          "username": "aimar047",
          "content": "not sure if this question is a valid exam one.. memorizing/gambling questions",
          "upvote_count": "2"
        },
        {
          "id": 214413,
          "date": "Fri 15 Oct 2021 23:45",
          "username": "gauravpatel",
          "content": "https://aws.amazon.com/ec2/previous-generation/<br><br>It'd \\\"D\\\" - 244GB",
          "upvote_count": "1"
        },
        {
          "id": 178083,
          "date": "Mon 11 Oct 2021 11:41",
          "username": "AlwaysLearning2020",
          "content": "The cr1 type is not longer shown in AWS site. Links offen discussion of CR1 point to an URL where no information can be found. :-(. This question should be removed.",
          "upvote_count": "2"
        },
        {
          "id": 40901,
          "date": "Thu 07 Oct 2021 07:10",
          "username": "Yang",
          "content": "D: 244GB https://www.ec2instances.info/?selected=cr1.8xlarge",
          "upvote_count": "1"
        },
        {
          "id": 29219,
          "date": "Wed 06 Oct 2021 09:22",
          "username": "tan9",
          "content": "I don't know why, but for this kind of questions, choose the number divisible by 61GB (30.5/GB)?",
          "upvote_count": "4"
        },
        {
          "id": 20533,
          "date": "Sat 02 Oct 2021 20:19",
          "username": "Steggoza",
          "content": "https://www.ec2instances.info/ - Answer is D",
          "upvote_count": "1"
        },
        {
          "id": 17543,
          "date": "Thu 23 Sep 2021 10:44",
          "username": "Warrenn",
          "content": "A or D?",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#157",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>How many cg1.4xlarge on-demand instances can a user run in one region without taking any limit increase approval from AWS?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#157",
          "answers": [
            {
              "choice": "<p>A. 20<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. 2<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. 5<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. 10<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 536303,
          "date": "Sun 30 Jan 2022 17:02",
          "username": "HellGate",
          "content": "forget this question... too old",
          "upvote_count": "1"
        },
        {
          "id": 185511,
          "date": "Wed 27 Oct 2021 07:48",
          "username": "misterfaust",
          "content": "The answer is B <br>Check https://awslimitchecker.readthedocs.io/en/latest/limits.html#ec2-standard-regions",
          "upvote_count": "1"
        },
        {
          "id": 178089,
          "date": "Wed 20 Oct 2021 09:24",
          "username": "AlwaysLearning202001037",
          "content": "How old is this question? The CG1 type can't even be found in the AWS console EC2-->Limit page.It is previous generation.<br>Outdated question.",
          "upvote_count": "41"
        },
        {
          "id": 373557,
          "date": "Sun 07 Nov 2021 15:23",
          "username": "01037",
          "content": "It is previous generation.<br>Outdated question.",
          "upvote_count": "1"
        },
        {
          "id": 69382,
          "date": "Sat 02 Oct 2021 22:24",
          "username": "Exam_boy",
          "content": "irrelevant now<br>https://awslimitchecker.readthedocs.io/en/latest/limits.html#ec2-standard-regions",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#158",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Regarding Amazon SNS, you can send notification messages to mobile devices through any of the following supported push notification services, EXCEPT:</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#158",
          "answers": [
            {
              "choice": "<p>A. Microsoft Windows Mobile Messaging (MWMM)<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Google Cloud Messaging for Android (GCM)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Amazon Device Messaging (ADM)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Apple Push Notification Service (APNS)<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 505145,
          "date": "Mon 20 Dec 2021 00:55",
          "username": "AkaAka4",
          "content": "I wonder....<br><br>//<br>How it Works<br>Here’s what you need to do to create a mobile app that can receive push notifications:<br><br>Create an app for a supported device and messaging API (Amazon Device Messaging, Apple Push Notification Service, or Google Cloud Messaging).<br>//<br><br>https://aws.amazon.com/blogs/aws/push-notifications-to-mobile-devices-using-amazon-sns/",
          "upvote_count": "1"
        },
        {
          "id": 425038,
          "date": "Tue 19 Oct 2021 19:42",
          "username": "FERIN_01",
          "content": "You send push notification messages to both mobile devices and desktops using one of the following supported push notification services:<br><br>Amazon Device Messaging (ADM)<br><br>Apple Push Notification Service (APNs) for both iOS and Mac OS X<br><br>Baidu Cloud Push (Baidu)<br><br>Firebase Cloud Messaging (FCM)<br><br>Microsoft Push Notification Service for Windows Phone (MPNS)<br><br>Windows Push Notification Services (WNS)",
          "upvote_count": "1"
        },
        {
          "id": 238255,
          "date": "Mon 11 Oct 2021 15:29",
          "username": "consultsk",
          "content": "The answers need to be modified to the latest version of the document as well as a few services consolidations on the MS and Google side. <br>https://docs.aws.amazon.com/sns/latest/dg/sns-mobile-application-as-subscriber.html<br>In fact, considering the abbreviations, and period of those services 'A' can be chosen. I assume a variant of this might appear in the latest exam. I request to understand the documentation and remember. That might be useful",
          "upvote_count": "1"
        },
        {
          "id": 120941,
          "date": "Mon 04 Oct 2021 15:02",
          "username": "manoj101manoj101",
          "content": "You send push notification messages to both mobile devices and desktops using one of the following supported push notification services:<br><br>Amazon Device Messaging (ADM)<br><br>Apple Push Notification Service (APNs) for both iOS and Mac OS X<br><br>Baidu Cloud Push (Baidu)<br><br>Firebase Cloud Messaging (FCM)<br><br>Microsoft Push Notification Service for Windows Phone (MPNS)<br><br>Windows Push Notification Services (WNS)I did not see GCM support",
          "upvote_count": "11"
        },
        {
          "id": 120942,
          "date": "Thu 07 Oct 2021 10:51",
          "username": "manoj101",
          "content": "I did not see GCM support",
          "upvote_count": "1"
        },
        {
          "id": 79664,
          "date": "Mon 04 Oct 2021 11:54",
          "username": "AmazonAu",
          "content": "https://aws.amazon.com/blogs/messaging-and-targeting/the-end-of-google-cloud-messaging-and-what-it-means-for-your-apps/<br>https://docs.aws.amazon.com/sns/latest/dg/sns-how-user-notifications-work.html<br><br>GCM is also not supported now.",
          "upvote_count": "1"
        },
        {
          "id": 38991,
          "date": "Fri 01 Oct 2021 00:57",
          "username": "amogDashL",
          "content": "Answer is A<br>http://jayendrapatil.com/aws-sns-simple-notification-service/<br>Supported push notification services<br>Amazon Device Messaging (ADM)<br>Apple Push Notification Service (APNS)<br>Google Cloud Messaging (GCM)<br>Windows Push Notification Service (WNS) for Windows 8+ and Windows Phone 8.1+<br>Microsoft Push Notification Service (MPNS) for Windows Phone 7+<br>Baidu Cloud Push for Android devices in ChinaBetter insider information than AWS",
          "upvote_count": "41"
        },
        {
          "id": 388270,
          "date": "Tue 19 Oct 2021 06:34",
          "username": "DashL",
          "content": "Better insider information than AWS",
          "upvote_count": "1"
        },
        {
          "id": 23873,
          "date": "Fri 24 Sep 2021 07:50",
          "username": "bgbeppetan9",
          "content": "B - google not supportedA is correct.<br>See: https://docs.aws.amazon.com/en_pv/sns/latest/dg/sns-send-custom-platform-specific-payloads-mobile-devices.html#mobile-push-send-multiplatform",
          "upvote_count": "11"
        },
        {
          "id": 29221,
          "date": "Mon 27 Sep 2021 23:12",
          "username": "tan9",
          "content": "A is correct.<br>See: https://docs.aws.amazon.com/en_pv/sns/latest/dg/sns-send-custom-platform-specific-payloads-mobile-devices.html#mobile-push-send-multiplatform",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#159",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You want to define permissions for a role in an IAM policy. Which of the following configuration formats should you use?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#159",
          "answers": [
            {
              "choice": "<p>A. An XML document written in the IAM Policy Language<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. An XML document written in a language of your choice<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. A JSON document written in the IAM Policy Language<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. JSON document written in a language of your choice<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 375979,
          "date": "Sun 10 Oct 2021 00:03",
          "username": "01037",
          "content": "C is correct",
          "upvote_count": "5"
        },
        {
          "id": 494359,
          "date": "Sun 05 Dec 2021 14:27",
          "username": "cldy",
          "content": "C.  A JSON document written in the IAM Policy Language",
          "upvote_count": "2"
        },
        {
          "id": 179299,
          "date": "Thu 23 Sep 2021 11:22",
          "username": "BillyC",
          "content": "C is correct",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#160",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>IAM Secure and Scalable is an organization which provides scalable and secure SAAS to its clients. They are planning to host a web server and App server on<br>AWS VPC as separate tiers. The organization wants to implement the scalability by configuring Auto Scaling and load balancer with their app servers (middle tier) too.<br>Which of the below mentioned options suits their requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#160",
          "answers": [
            {
              "choice": "<p>A. Since ELB is internet facing, it is recommended to setup HAProxy as the Load balancer within the VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Internet facing ELB with VPC and configure all the App servers with it.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The user should make ELB with EC2-CLASSIC and enable SSH with it for security.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Internal Load balancer with VPC and register all the App servers with it.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 498627,
          "date": "Fri 10 Dec 2021 13:46",
          "username": "cldy",
          "content": "D.  Create an Internal Load balancer with VPC and register all the App servers with it.",
          "upvote_count": "2"
        },
        {
          "id": 425730,
          "date": "Sat 30 Oct 2021 22:56",
          "username": "GrizzlyBear",
          "content": "Answer: D<br>Reason: App tier does not needs to be exposed to the internet so it's common to use an internal load balancer for it.",
          "upvote_count": "3"
        },
        {
          "id": 375980,
          "date": "Tue 26 Oct 2021 22:58",
          "username": "01037",
          "content": "Answer D",
          "upvote_count": "1"
        },
        {
          "id": 92304,
          "date": "Tue 05 Oct 2021 08:35",
          "username": "Mkumar",
          "content": "Answer D",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#161",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>True or False: Amazon ElastiCache supports the Redis key-value store.</p>",
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
              "choice": "<p>A. True, ElastiCache supports the Redis key-value store, but with limited functionalities.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. False, ElastiCache does not support the Redis key-value store.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. True, ElastiCache supports the Redis key-value store.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. False, ElastiCache supports the Redis key-value store only if you are in a VPC environment.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 494261,
          "date": "Sun 05 Dec 2021 12:20",
          "username": "cldy",
          "content": "C.  True, ElastiCache supports the Redis key-value store.",
          "upvote_count": "3"
        },
        {
          "id": 375981,
          "date": "Sat 30 Oct 2021 07:17",
          "username": "01037",
          "content": "Answer is C",
          "upvote_count": "1"
        },
        {
          "id": 92555,
          "date": "Thu 14 Oct 2021 17:07",
          "username": "Mkumar",
          "content": "Answer is C",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#162",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which of the following is NOT an advantage of using AWS Direct Connect?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#162",
          "answers": [
            {
              "choice": "<p>A. AWS Direct Connect provides users access to public and private resources by using two different connections while maintaining network separation between the public and private environments.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. AWS Direct Connect provides a more consistent network experience than Internet-based connections.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. AWS Direct Connect makes it easy to establish a dedicated network connection from your premises to AWS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. AWS Direct Connect reduces your network costs.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 216835,
          "date": "Tue 05 Oct 2021 21:00",
          "username": "Krish812003",
          "content": "Answer is A.  Please refer to this link<br>https://aws.amazon.com/directconnect/#:~:text=Using%20AWS%20Direct%20Connect%2C%20you,experience%20than%20Internet%2Dbased%20connections.<br><br>Using AWS Direct Connect, you can establish private connectivity between AWS and your datacenter, office, or colocation environment, which in many cases can reduce your network costs, increase bandwidth throughput, and provide a more consistent network experience than Internet-based connections.",
          "upvote_count": "8"
        },
        {
          "id": 636905,
          "date": "Mon 25 Jul 2022 20:41",
          "username": "hilft",
          "content": "D.  isn't DX expensive...?",
          "upvote_count": "1"
        },
        {
          "id": 627673,
          "date": "Wed 06 Jul 2022 04:15",
          "username": "TechX",
          "content": "should be a multiple choices answer, cause both A and D are WRONG",
          "upvote_count": "1"
        },
        {
          "id": 522335,
          "date": "Wed 12 Jan 2022 18:18",
          "username": "CoryDtobstar86",
          "content": "It's A unfortunately...But it should be A and D. Documentation does say Direct Connect can be cheaper in some cases. I think thats BS and very rare cases.This is a sales question that shouldn't be on the test.Depends, if you heavily use your VPN connection, you end up with higher costs compared to using Direct Connect instead.",
          "upvote_count": "11"
        },
        {
          "id": 559062,
          "date": "Wed 02 Mar 2022 00:00",
          "username": "tobstar86",
          "content": "Depends, if you heavily use your VPN connection, you end up with higher costs compared to using Direct Connect instead.",
          "upvote_count": "1"
        },
        {
          "id": 450092,
          "date": "Mon 01 Nov 2021 08:03",
          "username": "avt007",
          "content": "it is a",
          "upvote_count": "2"
        },
        {
          "id": 375983,
          "date": "Wed 27 Oct 2021 00:53",
          "username": "01037blackgamer",
          "content": "it is DThe answer is A.  <br>https://aws.amazon.com/getting-started/hands-on/connect-data-center-to-aws/services-costs/",
          "upvote_count": "11"
        },
        {
          "id": 421157,
          "date": "Sun 31 Oct 2021 03:00",
          "username": "blackgamer",
          "content": "The answer is A.  <br>https://aws.amazon.com/getting-started/hands-on/connect-data-center-to-aws/services-costs/",
          "upvote_count": "1"
        },
        {
          "id": 364319,
          "date": "Fri 22 Oct 2021 20:56",
          "username": "abhi3290",
          "content": "D option shouldn't be there otherwise A and D both are correct.",
          "upvote_count": "1"
        },
        {
          "id": 316201,
          "date": "Fri 22 Oct 2021 20:42",
          "username": "ExtHoTable2022",
          "content": "Correct Answer is A<br>see the difference in question they mentioned TWO DIFFERENT CONNECTIONS <br><br>https://aws.amazon.com/directconnect/<br>see upper case info<br><br>AWS Direct Connect lets you establish a dedicated network CONNECTION between your network and one of the AWS Direct Connect locations. USING INDUSTRY STANDARD 802.1Q VLANS, THIS DEDICATED CONNECTION CAN BE PARTITIONED INTO MULTIPLE VIRTUAL INTERFACES. THIS ALLOWS YOU TO USE THE SAME CONNECTION TO ACCESS PUBLIC RESOURCES SUCH AS OBJECTS STORED IN AMAZON S3 USING PUBLIC IP ADDRESS SPACE, AND PRIVATE RESOURCES SUCH AS AMAZON EC2 INSTANCES RUNNING WITHIN AN AMAZON VIRTUAL PRIVATE CLOUD (VPC) USING PRIVATE IP SPACE, WHILE MAINTAINING NETWORK SEPARATION BETWEEN THE PUBLIC AND PRIVATE ENVIRONMENTS. Virtual interfaces can be reconfigured at any time to meet your changing needs.Agree Answer A, because AWS Direct Connect will save your cost.<br>\\\"Data transfer pricing over Direct Connect is lower than data transfer pricing over the internet. \\\"<br>https://aws.amazon.com/getting-started/hands-on/connect-data-center-to-aws/services-costs/",
          "upvote_count": "31"
        },
        {
          "id": 414407,
          "date": "Wed 27 Oct 2021 10:09",
          "username": "Table2022",
          "content": "Agree Answer A, because AWS Direct Connect will save your cost.<br>\\\"Data transfer pricing over Direct Connect is lower than data transfer pricing over the internet. \\\"<br>https://aws.amazon.com/getting-started/hands-on/connect-data-center-to-aws/services-costs/",
          "upvote_count": "1"
        },
        {
          "id": 302387,
          "date": "Fri 22 Oct 2021 06:38",
          "username": "RomanTsai",
          "content": "D is bloooooody expensive if there are a lot of network traffic from AWS to on-premise DC via Direct Connect. DX cannot reduce network costs, only do secure...",
          "upvote_count": "1"
        },
        {
          "id": 302386,
          "date": "Sat 16 Oct 2021 11:39",
          "username": "RomanTsai",
          "content": "D is bloooooody experience if there are a lot of network traffic from AWS to on-premise DC via Direct Connect. DX cannot reduce network costs, only do secure...",
          "upvote_count": "1"
        },
        {
          "id": 272325,
          "date": "Sun 10 Oct 2021 00:23",
          "username": "aimar047chigo17",
          "content": "question seems confusing..and itself confused..Amazon wants you to answer A.  You need to assume it reduces your network costs, even though at the long run, it doesn't when you consider the overall picture.",
          "upvote_count": "12"
        },
        {
          "id": 301384,
          "date": "Sun 10 Oct 2021 16:59",
          "username": "chigo17",
          "content": "Amazon wants you to answer A.  You need to assume it reduces your network costs, even though at the long run, it doesn't when you consider the overall picture.",
          "upvote_count": "2"
        },
        {
          "id": 236770,
          "date": "Wed 06 Oct 2021 16:10",
          "username": "MichaelHuang",
          "content": "The coerced answer is A, but the question could be clearer.",
          "upvote_count": "1"
        },
        {
          "id": 179301,
          "date": "Tue 05 Oct 2021 10:15",
          "username": "BillyC",
          "content": "D is correct for me",
          "upvote_count": "1"
        },
        {
          "id": 172998,
          "date": "Mon 04 Oct 2021 00:56",
          "username": "Ganfeng",
          "content": "A can not be correct, while it does have public and private interface, it won't \\\"maintaining network separation\\\" as both public and private interface are just different VLAN on the same Port (LAG)",
          "upvote_count": "3"
        },
        {
          "id": 96505,
          "date": "Thu 30 Sep 2021 08:38",
          "username": "NKnab",
          "content": "A is correct. atleast thats what AWS wants customers to think. It is all over there Direct connect documentation.",
          "upvote_count": "1"
        },
        {
          "id": 94670,
          "date": "Tue 28 Sep 2021 20:20",
          "username": "Socrates",
          "content": "D is correct, DX has a port hour charge that you pay alongside the capacity provisioned. internet could be cheaper in the long run",
          "upvote_count": "2"
        },
        {
          "id": 92558,
          "date": "Wed 22 Sep 2021 23:42",
          "username": "Mkumar",
          "content": "Answer is A.  its cheaper than Internet.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#163",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization is setting up an application on AWS to have both High Availability (HA) and Disaster Recovery (DR). The organization wants to have both<br>Recovery point objective (RPO) and Recovery time objective (RTO) of 10 minutes.<br>Which of the below mentioned service configurations does not help the organization achieve the said RPO and RTO?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#163",
          "answers": [
            {
              "choice": "<p>A. Take a snapshot of the data every 10 minutes and copy it to the other region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use an elastic IP to assign to a running instance and use Route 53 to map the user's domain with that IP.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create ELB with multi-region routing to allow automated failover when required.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an AMI copy to keep the AMI available in other regions.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 23401,
          "date": "Tue 28 Sep 2021 09:28",
          "username": "examacc",
          "content": "elb cannot do multi region routing.,. this questions does not make sense neither does answers",
          "upvote_count": "11"
        },
        {
          "id": 612243,
          "date": "Mon 06 Jun 2022 09:38",
          "username": "Anhdd",
          "content": "Should be C due to the following:<br>\\\"Amazon has their own Elastic Load Balancer, but it only works to distribute traffic within a region. And while it supports load balancing between availability zones within the same region, it does not allow you to distribute traffic to another region, unless you want to use DNS, which is less than ideal\\\"",
          "upvote_count": "2"
        },
        {
          "id": 603167,
          "date": "Wed 18 May 2022 07:55",
          "username": "LiamNg",
          "content": "Anwser C is only valid if the LB is behind Route 53. C is the Answer.<br>Ref https://aws.amazon.com/elasticloadbalancing/faqs/<br>Q: Does Network Load Balancer support DNS regional and zonal fail-over?<br><br>A: Yes, you can use Amazon Route 53 health checking and DNS failover features to enhance the availability of the applications running behind Network Load Balancers.",
          "upvote_count": "1"
        },
        {
          "id": 516495,
          "date": "Tue 04 Jan 2022 11:55",
          "username": "Riho",
          "content": "Seems like question is just taken from doc. Option C is wrong, but option B is also not giving anything in the point of RPO or RTO . And yes, A is also wrong - while once in 10 minute snapshot is making RPO bigger than 10 min. Taking snapshot and transferring snapshot is taking time...",
          "upvote_count": "1"
        },
        {
          "id": 498438,
          "date": "Fri 10 Dec 2021 09:55",
          "username": "cldy",
          "content": "C.  Create ELB with multi-region routing to allow automated failover when required.",
          "upvote_count": "2"
        },
        {
          "id": 376021,
          "date": "Wed 03 Nov 2021 22:51",
          "username": "01037bamjive06",
          "content": "Answer is C<br>ELB work only in regionCorrect, unless cross-zone",
          "upvote_count": "21"
        },
        {
          "id": 382236,
          "date": "Thu 04 Nov 2021 13:34",
          "username": "bamjive06",
          "content": "Correct, unless cross-zone",
          "upvote_count": "1"
        },
        {
          "id": 272331,
          "date": "Sat 30 Oct 2021 06:50",
          "username": "aimar047",
          "content": "All options given can be correct (except C as ELB does not balance/reroute cross regions). Correct options mean not helping to achieve RTO/RPO of 10 min.. A/C/D are incorrect , snapshotting and copying cross regions is long run or AMI will take definitely more than 10 minutes.. not sure if the question is valid tbh",
          "upvote_count": "1"
        },
        {
          "id": 236776,
          "date": "Thu 28 Oct 2021 06:57",
          "username": "MichaelHuang",
          "content": "The Answer is A:<br>A.  10 mins snapshot interval will not achieve 10 min RTO/RPO<br><br>B.  Use an elastic IP to assign to a running instance and use Route 53 to map the user's domain with that IP.<br>C.  Create ELB with multi-region routing to allow automated failover when required.<br>D.  Use an AMI copy to keep the AMI available in other regions.",
          "upvote_count": "1"
        },
        {
          "id": 145482,
          "date": "Thu 28 Oct 2021 04:37",
          "username": "fullaws",
          "content": "C is correct",
          "upvote_count": "1"
        },
        {
          "id": 142289,
          "date": "Wed 27 Oct 2021 12:47",
          "username": "learner4ever",
          "content": "C is the right answer",
          "upvote_count": "1"
        },
        {
          "id": 101359,
          "date": "Fri 22 Oct 2021 19:31",
          "username": "oatif",
          "content": "B.  ELB cannot span multiple regions only multiple zones.",
          "upvote_count": "1"
        },
        {
          "id": 96508,
          "date": "Sat 16 Oct 2021 02:57",
          "username": "NKnab",
          "content": "Question is about which one doesn't help. Elb is not multiregion.",
          "upvote_count": "1"
        },
        {
          "id": 94673,
          "date": "Wed 13 Oct 2021 12:49",
          "username": "Socrates",
          "content": "B is correct, an IP is just an identifier to a network resource",
          "upvote_count": "1"
        },
        {
          "id": 68394,
          "date": "Sun 10 Oct 2021 13:22",
          "username": "sergza",
          "content": "i think it is C.  Note the question states \\\"Does not help\\\" You could have multiple EIP and have Route 53 policy to iterate between them for HA",
          "upvote_count": "2"
        },
        {
          "id": 59840,
          "date": "Sat 09 Oct 2021 00:19",
          "username": "cloudinvader01037user0001",
          "content": "Elastic IP Address and ELB both are regional services (per region). In the case of DR, how can we use EIP??I think it wants to you can change domain to another up when something happens.you are right",
          "upvote_count": "121"
        },
        {
          "id": 376020,
          "date": "Tue 02 Nov 2021 22:38",
          "username": "01037user0001",
          "content": "I think it wants to you can change domain to another up when something happens.you are right",
          "upvote_count": "21"
        },
        {
          "id": 603087,
          "date": "Wed 18 May 2022 01:54",
          "username": "user0001",
          "content": "you are right",
          "upvote_count": "1"
        },
        {
          "id": 38996,
          "date": "Fri 01 Oct 2021 22:24",
          "username": "amog",
          "content": "Answer is C<br>ELB work only in region",
          "upvote_count": "3"
        },
        {
          "id": 17647,
          "date": "Sun 26 Sep 2021 05:27",
          "username": "ChiggaBoy",
          "content": "Looks like B to me, can anyone confirm?",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#164",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization is having an application which can start and stop an EC2 instance as per schedule. The organization needs the MAC address of the instance to be registered with its software. The instance is launched in EC2-CLASSIC. <br>How can the organization update the MAC registration every time an instance is booted?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#164",
          "answers": [
            {
              "choice": "<p>A. The organization should write a boot strapping script which will get the MAC address from the instance metadata and use that script to register with the application.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. The organization should provide a MAC address as a part of the user data. Thus, whenever the instance is booted the script assigns the fixed MAC address to that instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The instance MAC address never changes. Thus, it is not required to register the MAC address every time.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. AWS never provides a MAC address to an instance; instead the instance ID is used for identifying the instance for any software registration.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 497631,
          "date": "Thu 09 Dec 2021 11:50",
          "username": "cldy",
          "content": "A.  The organization should write a boot strapping script which will get the MAC address from the instance metadata and use that script to register with the application.",
          "upvote_count": "3"
        },
        {
          "id": 376023,
          "date": "Fri 08 Oct 2021 22:57",
          "username": "0103701037",
          "content": "I think it's AAssigning the instance an eni could be a better solution",
          "upvote_count": "11"
        },
        {
          "id": 376026,
          "date": "Sat 30 Oct 2021 16:55",
          "username": "01037",
          "content": "Assigning the instance an eni could be a better solution",
          "upvote_count": "1"
        },
        {
          "id": 363316,
          "date": "Sat 25 Sep 2021 23:32",
          "username": "viet1991",
          "content": "A. <br>\\\"AGUARCODE 2 months, 1 week ago<br>AWS provides an on demand, scalable infrastructure. AWS EC2 allows the user to launch On- Demand instances. AWS does not provide a fixed MAC address to the instances launched in EC2-CLASSIC.  If the instance is launched as a part of EC2-VPC, it can have an ENI which can have a fixed MAC.  However, with EC2-CLASSIC, every time the instance is started or stopped it will have a new MAC address. To get this MAC, the organization can run a script on boot which can fetch the instance metadata and get the MAC address from that instance metadata.<br>Once the MAC is received, the organization can register that MAC with the software.\\\"<br>http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html<br><br>https://www.examtopics.com/discussions/amazon/view/31264-exam-aws-certified-solutions-architect-professional-topic-1/",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#165",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Does Amazon RDS API provide actions to modify DB instances inside a VPC and associate them with DB Security Groups?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#165",
          "answers": [
            {
              "choice": "<p>A. Yes, Amazon does this but only for MySQL RDS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Yes<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. No<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Yes, Amazon does this but only for Oracle RDS.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 635813,
          "date": "Sun 24 Jul 2022 02:20",
          "username": "hilft",
          "content": "B.  Yes?<br><br>I don't think SAP exam will ask this...",
          "upvote_count": "1"
        },
        {
          "id": 384088,
          "date": "Thu 04 Nov 2021 00:52",
          "username": "Nikhil_the_coolest",
          "content": "B is right",
          "upvote_count": "1"
        },
        {
          "id": 376027,
          "date": "Tue 26 Oct 2021 23:19",
          "username": "01037",
          "content": "B is correct",
          "upvote_count": "2"
        },
        {
          "id": 363317,
          "date": "Sun 03 Oct 2021 08:18",
          "username": "viet1991",
          "content": "B. <br>Explanation:<br>You can use the action Modify DB Instance, available in the Amazon RDS API, to pass values for<br>the parameters DB Instance Identifier and DB Security Groups specifying the instance ID and the<br>DB Security Groups you want your instance to be part of.<br>http://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBInstance.html<br><br>https://www.briefmenow.org/amazon/does-amazon-rds-api-provide-actions-to-modify-db-instan/",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#166",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization is setting up a backup and restore system in AWS of their in premise system. The organization needs High Availability(HA) and Disaster Recovery<br>(DR) but is okay to have a longer recovery time to save costs.<br>Which of the below mentioned setup options helps achieve the objective of cost saving as well as DR in the most effective way?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#166",
          "answers": [
            {
              "choice": "<p>A. Setup pre-configured servers and create AMIs. Use EIP and Route 53 to quickly switch over to AWS from in premise.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Setup the backup data on S3 and transfer data to S3 regularly using the storage gateway.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Setup a small instance with AutoScaling; in case of DR start diverting all the load to AWS from on premise.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Replicate on premise DB to EC2 at regular intervals and setup a scenario similar to the pilot light.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 568841,
          "date": "Wed 16 Mar 2022 08:37",
          "username": "jyrajan69",
          "content": "There seems to be a word missing ,but is not willing to pay a premium for a longer recovery time in order to save money. should bebut is willing to pay a premium for a longer recovery time in order to save money. So then the answer is B",
          "upvote_count": "2"
        },
        {
          "id": 496530,
          "date": "Wed 08 Dec 2021 05:41",
          "username": "cldy",
          "content": "B.  Setup the backup data on S3 and transfer data to S3 regularly using the storage gateway.",
          "upvote_count": "1"
        },
        {
          "id": 376030,
          "date": "Sat 30 Oct 2021 11:41",
          "username": "01037",
          "content": "I'll choose B",
          "upvote_count": "1"
        },
        {
          "id": 178023,
          "date": "Fri 08 Oct 2021 08:04",
          "username": "manoj101",
          "content": "B is lowest cost.",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#167",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>By default, what is the maximum number of Cache Nodes you can run in Amazon ElastiCache?</p>",
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
              "choice": "<p>A. 20<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. 50<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. 100<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. 200<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 425092,
          "date": "Sun 07 Nov 2021 09:18",
          "username": "FERIN_01",
          "content": "You can run a maximum of 300 nodes per region. If you need more nodes, please fill in the ElastiCache Limit Increase Request form.",
          "upvote_count": "2"
        },
        {
          "id": 277812,
          "date": "Tue 02 Nov 2021 02:50",
          "username": "Satya1405",
          "content": "Redis will support a max of 500 nodes<br>https://aws.amazon.com/elasticache/redis/",
          "upvote_count": "3"
        },
        {
          "id": 229609,
          "date": "Sat 09 Oct 2021 00:11",
          "username": "newme",
          "content": "the question is not clear",
          "upvote_count": "1"
        },
        {
          "id": 41071,
          "date": "Fri 08 Oct 2021 16:33",
          "username": "CloudFloater",
          "content": "Not sure:<br>Elasticache Memcached<br>https://aws.amazon.com/elasticache/faqs/<br>Q: How many nodes can I run per region in Amazon ElastiCache Memcached?<br><br>You can run a maximum of 100 nodes per region. If you need more nodes, please fill in the ElastiCache Limit Increase Request form.<br><br>Elasticache for Redis<br>https://aws.amazon.com/elasticache/redis/<br>https://aws.amazon.com/about-aws/whats-new/2018/11/amazon-elasticache-for-redis-now-supports-up-to-250-nodes-per-cluster/<br><br>250 Nodes per cluster",
          "upvote_count": "1"
        },
        {
          "id": 18977,
          "date": "Thu 30 Sep 2021 10:59",
          "username": "skywalkerconsultskconsultskconsultsk",
          "content": "The question itself is in questions as it didn't point up whether maximum for each region or each cluster.<br><br>Memcached supports up to 100 nodes per customer for each AWS Region with each cluster having 1–20 nodes. You partition your data across the nodes in a Memcached cluster. When you run the Memcached engine, clusters can be made up of 1–20 nodeshttps://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/WhatIs.Components.htmlI think the intent is to get a ball park count per cluster. I would go with 'A'.Also by default, it creates 20. The doc in the above link says \\\"When you run the Memcached engine, clusters can be made up of 1–20 nodes\\\".",
          "upvote_count": "2111"
        },
        {
          "id": 238721,
          "date": "Sun 17 Oct 2021 12:45",
          "username": "consultskconsultskconsultsk",
          "content": "https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/WhatIs.Components.htmlI think the intent is to get a ball park count per cluster. I would go with 'A'.Also by default, it creates 20. The doc in the above link says \\\"When you run the Memcached engine, clusters can be made up of 1–20 nodes\\\".",
          "upvote_count": "111"
        },
        {
          "id": 238722,
          "date": "Tue 19 Oct 2021 12:51",
          "username": "consultskconsultsk",
          "content": "I think the intent is to get a ball park count per cluster. I would go with 'A'.Also by default, it creates 20. The doc in the above link says \\\"When you run the Memcached engine, clusters can be made up of 1–20 nodes\\\".",
          "upvote_count": "11"
        },
        {
          "id": 238725,
          "date": "Fri 22 Oct 2021 02:11",
          "username": "consultsk",
          "content": "Also by default, it creates 20. The doc in the above link says \\\"When you run the Memcached engine, clusters can be made up of 1–20 nodes\\\".",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#168",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Does an AWS Direct Connect location provide access to Amazon Web Services in the region it is associated with as well as access to other US regions?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#168",
          "answers": [
            {
              "choice": "<p>A. No, it provides access only to the region it is associated with.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. No, it provides access only to the US regions other than the region it is associated with.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Yes, it provides access.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Yes, it provides access but only when there's just one Availability Zone in the region.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 316242,
          "date": "Sun 31 Oct 2021 03:25",
          "username": "ExtHo",
          "content": "AWS Direct Connect location provides access to Amazon Web Services in the region it is associated with, as well as access to other US regions (in case of a Direct Connect in a US region). for e.g. , you can provision a single connection to any AWS Direct Connect location in the US and use it to access public AWS services in all US Regions and AWS GovCloud (US).",
          "upvote_count": "7"
        },
        {
          "id": 184382,
          "date": "Tue 12 Oct 2021 05:03",
          "username": "lostri01037",
          "content": "Answer is A<br>An AWS Direct Connect location provides access to AWS in the Region with which it is associated. You can use a single connection in a public Region or AWS GovCloud (US) to access public AWS services in all other public Regions.You mean C",
          "upvote_count": "42"
        },
        {
          "id": 376032,
          "date": "Sun 31 Oct 2021 12:19",
          "username": "01037",
          "content": "You mean C",
          "upvote_count": "2"
        },
        {
          "id": 41072,
          "date": "Sat 25 Sep 2021 13:08",
          "username": "CloudFloater",
          "content": "C<br><br>https://docs.aws.amazon.com/directconnect/latest/UserGuide/remote_regions.html",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#169",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which of the following components of AWS Data Pipeline specifies the business logic of your data management?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#169",
          "answers": [
            {
              "choice": "<p>A. Task Runner<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Pipeline definition<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. AWS Direct Connect<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Amazon Simple Storage Service 9Amazon S3)<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 496546,
          "date": "Wed 08 Dec 2021 06:23",
          "username": "cldy",
          "content": "B.  Pipeline definition",
          "upvote_count": "1"
        },
        {
          "id": 160902,
          "date": "Mon 20 Sep 2021 13:37",
          "username": "DSHKconsultskconsultsk01037",
          "content": "https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/what-is-datapipeline.html<br>Answer is BPerfect - A pipeline definition specifies the business logic of your data management. For more information, see Pipeline Definition File Syntax: https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional/view/17/#Sorry, accidentally copied the wrong link above from cache. The actual link is: https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-writing-pipeline-definition.htmlThanks",
          "upvote_count": "3111"
        },
        {
          "id": 238732,
          "date": "Wed 22 Sep 2021 05:21",
          "username": "consultskconsultsk01037",
          "content": "Perfect - A pipeline definition specifies the business logic of your data management. For more information, see Pipeline Definition File Syntax: https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-professional/view/17/#Sorry, accidentally copied the wrong link above from cache. The actual link is: https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-writing-pipeline-definition.htmlThanks",
          "upvote_count": "111"
        },
        {
          "id": 238734,
          "date": "Fri 01 Oct 2021 07:36",
          "username": "consultsk01037",
          "content": "Sorry, accidentally copied the wrong link above from cache. The actual link is: https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-writing-pipeline-definition.htmlThanks",
          "upvote_count": "11"
        },
        {
          "id": 376033,
          "date": "Tue 05 Oct 2021 16:06",
          "username": "01037",
          "content": "Thanks",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#170",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>What feature of the load balancing service attempts to force subsequent connections to a service to be redirected to the same node as long as it is online?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#170",
          "answers": [
            {
              "choice": "<p>A. Node balance<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Session retention<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Session multiplexing<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Session persistence<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 92568,
          "date": "Sun 26 Sep 2021 01:42",
          "username": "Mkumar01037",
          "content": "Sticky SessionSticky session",
          "upvote_count": "61"
        },
        {
          "id": 376034,
          "date": "Sun 03 Oct 2021 18:22",
          "username": "01037",
          "content": "Sticky session",
          "upvote_count": "1"
        },
        {
          "id": 636879,
          "date": "Mon 25 Jul 2022 19:49",
          "username": "hilft",
          "content": "never heard of this",
          "upvote_count": "1"
        },
        {
          "id": 627656,
          "date": "Wed 06 Jul 2022 02:59",
          "username": "TechX",
          "content": "seem old answer, should be sticky session (session affinity)",
          "upvote_count": "2"
        },
        {
          "id": 357701,
          "date": "Fri 01 Oct 2021 20:46",
          "username": "tvs",
          "content": "azure question?",
          "upvote_count": "2"
        },
        {
          "id": 69418,
          "date": "Mon 20 Sep 2021 16:25",
          "username": "Exam_boyClandestine60",
          "content": "it is not relevant to AWS ELBsOf course it is. Read abou session persistence/sticky sessions in AWS ALBs",
          "upvote_count": "11"
        },
        {
          "id": 536951,
          "date": "Mon 31 Jan 2022 13:16",
          "username": "Clandestine60",
          "content": "Of course it is. Read abou session persistence/sticky sessions in AWS ALBs",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#171",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>What types of identities do Amazon Cognito identity pools support?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#171",
          "answers": [
            {
              "choice": "<p>A. They support both authenticated and unauthenticated identities.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. They support only unauthenticated identities.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. They support neither authenticated nor unauthenticated identities.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. They support only authenticated identities.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 577929,
          "date": "Wed 30 Mar 2022 01:29",
          "username": "jj22222",
          "content": "A.  They support both authenticated and unauthenticated identities.",
          "upvote_count": "2"
        },
        {
          "id": 376035,
          "date": "Tue 26 Oct 2021 16:58",
          "username": "01037",
          "content": "A is correct",
          "upvote_count": "1"
        },
        {
          "id": 92569,
          "date": "Sun 24 Oct 2021 11:20",
          "username": "Mkumar",
          "content": "Answer is A",
          "upvote_count": "3"
        },
        {
          "id": 69430,
          "date": "Sat 16 Oct 2021 04:49",
          "username": "Exam_boy",
          "content": "https://docs.aws.amazon.com/cognito/latest/developerguide/identity-pools.html",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#172",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In IAM, which of the following is true of temporary security credentials?</p>",
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
              "choice": "<p>A. Once you issue temporary security credentials, they cannot be revoked.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. None of these are correct.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Once you issue temporary security credentials, they can be revoked only when the virtual MFA device is used.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Once you issue temporary security credentials, they can be revoked.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 316290,
          "date": "Tue 28 Sep 2021 04:59",
          "username": "ExtHo01037bamjive06",
          "content": "Answer is A <br>Here<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_disable-perms.html<br><br>clearly mentioned Temporary security credentials are valid until they expire, and they cannot be revoked<br><br>but you can achieve the effect of revoking the credentials by changing the permissions for the credentials even after they have been issued its alternative way only.Thank youThanks",
          "upvote_count": "1011"
        },
        {
          "id": 376038,
          "date": "Sat 09 Oct 2021 22:09",
          "username": "01037",
          "content": "Thank you",
          "upvote_count": "1"
        },
        {
          "id": 382244,
          "date": "Sat 16 Oct 2021 15:37",
          "username": "bamjive06",
          "content": "Thanks",
          "upvote_count": "1"
        },
        {
          "id": 635809,
          "date": "Sun 24 Jul 2022 02:12",
          "username": "hilft",
          "content": "A.  <br>You cannot revoke the temporary security credentials. There is a section in Adrian Cantrill's course on how to deal with when a malicious user receives temporary credentials.",
          "upvote_count": "1"
        },
        {
          "id": 595506,
          "date": "Sun 01 May 2022 10:34",
          "username": "TechIsi",
          "content": "D is correct, all users of the role are impacted https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_revoke-sessions.html",
          "upvote_count": "1"
        },
        {
          "id": 492811,
          "date": "Thu 02 Dec 2021 22:42",
          "username": "pcops",
          "content": "Temporary security credentials are valid until they expire, and they cannot be revoked.",
          "upvote_count": "1"
        },
        {
          "id": 408521,
          "date": "Sun 17 Oct 2021 15:56",
          "username": "robertomartinezrobertomartinez",
          "content": "the problem is that the question is not precise enough, like many other question. theoratically it's yes you can revoke, but you're gonna reset ALL sessions associated with the role. These old questions are really terrible (multiple interpretations, knowing limits and instance capabilities by heart...), I hope the recent questions are better as I don't see how answering these kinfd of question make you a good architecteven the chosen quote text in the answer says \\\"A, ...but also D\\\".",
          "upvote_count": "11"
        },
        {
          "id": 408524,
          "date": "Tue 26 Oct 2021 01:09",
          "username": "robertomartinez",
          "content": "even the chosen quote text in the answer says \\\"A, ...but also D\\\".",
          "upvote_count": "1"
        },
        {
          "id": 378731,
          "date": "Mon 11 Oct 2021 13:26",
          "username": "rain_wu",
          "content": "Answer is D",
          "upvote_count": "1"
        },
        {
          "id": 357624,
          "date": "Wed 29 Sep 2021 16:10",
          "username": "pt8",
          "content": "It's D.  Seehow 'To immediately deny all permissions to any current user of role credentials' https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_revoke-sessions.html",
          "upvote_count": "1"
        },
        {
          "id": 202714,
          "date": "Mon 27 Sep 2021 23:13",
          "username": "cpal012",
          "content": "D is correct. You can revoke them for a role but it affects all users and they will need to reauthenticate",
          "upvote_count": "1"
        },
        {
          "id": 127870,
          "date": "Sat 25 Sep 2021 21:32",
          "username": "ramikhreim",
          "content": "Temporary security credentials are valid until they expire, and they cannot be revoked. However, because permissions are evaluated each time an AWS request is made using the credentials, you can achieve the effect of revoking the credentials by changing the permissions for the credentials even after they have been issued. If you remove all permissions from the temporary security credentials, subsequent AWS requests that use those credentials will fail. The mechanisms for changing or removing the permissions assigned to temporary security credentials are explained in the following sections.",
          "upvote_count": "2"
        },
        {
          "id": 121500,
          "date": "Fri 24 Sep 2021 17:24",
          "username": "manoj101",
          "content": "D is correct",
          "upvote_count": "2"
        },
        {
          "id": 96511,
          "date": "Fri 24 Sep 2021 10:23",
          "username": "NKnab",
          "content": "I think D is correct",
          "upvote_count": "4"
        },
        {
          "id": 28647,
          "date": "Tue 21 Sep 2021 04:22",
          "username": "krtek77tan9kaush",
          "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_revoke-sessions.htmlBy preforming the process depicted the CREDENTIAL itself is still not revocable, you revoke ALL active sessions associated to therole instead.When you enable users to access the AWS Management Console with a long session duration time (such as 12 hours), their temporary credentials do not expire as quickly. If users inadvertently expose their credentials to an unauthorized third party, that party has access for the duration of the session. However, you can immediately revoke all permissions to the role's credentials issued before a certain point in time if you need to. All temporary credentials for that role issued before the specified time become invalid. This forces all users to reauthenticate and request new credentials.",
          "upvote_count": "121"
        },
        {
          "id": 29223,
          "date": "Thu 23 Sep 2021 00:13",
          "username": "tan9",
          "content": "By preforming the process depicted the CREDENTIAL itself is still not revocable, you revoke ALL active sessions associated to therole instead.",
          "upvote_count": "2"
        },
        {
          "id": 174256,
          "date": "Sun 26 Sep 2021 02:54",
          "username": "kaush",
          "content": "When you enable users to access the AWS Management Console with a long session duration time (such as 12 hours), their temporary credentials do not expire as quickly. If users inadvertently expose their credentials to an unauthorized third party, that party has access for the duration of the session. However, you can immediately revoke all permissions to the role's credentials issued before a certain point in time if you need to. All temporary credentials for that role issued before the specified time become invalid. This forces all users to reauthenticate and request new credentials.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#173",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>The CFO of a company wants to allow one of his employees to view only the AWS usage report page.<br>Which of the below mentioned IAM policy statements allows the user to have access to the AWS usage report page?</p>",
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
              "choice": "<p>A. \"Effect\": \"Allow\", \"Action\": [\"Describe\"], \"Resource\": \"Billing\"<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. \"Effect\": \"Allow\", \"Action\": [\"aws-portal: ViewBilling\"], \"Resource\": \"*\"<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. \"Effect\": \"Allow\", \"Action\": [\"aws-portal: ViewUsage\"], \"Resource\": \"*\"<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. \"Effect\": \"Allow\", \"Action\": [\"AccountUsage], \"Resource\": \"*\"<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 121506,
          "date": "Wed 29 Sep 2021 22:07",
          "username": "manoj101kaush0103701037",
          "content": "Both B & C are required.<br><br>To allow IAM users to view usage reports, you must allow both ViewUsage and ViewBilling.<br><br>http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.htmlTo allow IAM users to view usage reports, you must allow both ViewUsage and ViewBilling.Really?Ok<br>It's true",
          "upvote_count": "7211"
        },
        {
          "id": 174261,
          "date": "Sat 23 Oct 2021 15:55",
          "username": "kaush0103701037",
          "content": "To allow IAM users to view usage reports, you must allow both ViewUsage and ViewBilling.Really?Ok<br>It's true",
          "upvote_count": "211"
        },
        {
          "id": 376040,
          "date": "Sun 31 Oct 2021 12:14",
          "username": "0103701037",
          "content": "Really?Ok<br>It's true",
          "upvote_count": "11"
        },
        {
          "id": 376043,
          "date": "Thu 04 Nov 2021 08:29",
          "username": "01037",
          "content": "Ok<br>It's true",
          "upvote_count": "1"
        },
        {
          "id": 497612,
          "date": "Thu 09 Dec 2021 11:40",
          "username": "cldycldy",
          "content": "C.  \\\"Effect\\\": \\\"Allow\\\", \\\"Action\\\": [\\\"aws-portal: ViewUsage\\\"], \\\"Resource\\\": \\\"*\\\"To allow IAM users to view usage reports, you must allow both ViewUsage and ViewBilling.",
          "upvote_count": "11"
        },
        {
          "id": 497614,
          "date": "Thu 09 Dec 2021 11:41",
          "username": "cldy",
          "content": "To allow IAM users to view usage reports, you must allow both ViewUsage and ViewBilling.",
          "upvote_count": "1"
        },
        {
          "id": 92570,
          "date": "Tue 28 Sep 2021 05:52",
          "username": "Mkumar",
          "content": "Correct Answer: C",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#174",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In Amazon VPC, what is the default maximum number of BGP advertised routes allowed per route table?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#174",
          "answers": [
            {
              "choice": "<p>A. 15<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. 100<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. 5<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. 10<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 190684,
          "date": "Mon 04 Oct 2021 12:41",
          "username": "LeoChu01037",
          "content": "how come AWS expects you to memorize these numbers?Maybe because they experts. :-)",
          "upvote_count": "141"
        },
        {
          "id": 376045,
          "date": "Thu 28 Oct 2021 11:52",
          "username": "01037",
          "content": "Maybe because they experts. :-)",
          "upvote_count": "1"
        },
        {
          "id": 577916,
          "date": "Wed 30 Mar 2022 00:53",
          "username": "jj22222",
          "content": "100 - B looks right",
          "upvote_count": "1"
        },
        {
          "id": 376044,
          "date": "Mon 18 Oct 2021 04:46",
          "username": "01037",
          "content": "B is correct",
          "upvote_count": "2"
        },
        {
          "id": 160905,
          "date": "Fri 01 Oct 2021 22:24",
          "username": "DSHK",
          "content": "https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html<br>Answer is B",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#175",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization has created 5 IAM users. The organization wants to give them the same login ID but different passwords. How can the organization achieve this?</p>",
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
              "choice": "<p>A. The organization should create each user in a separate region so that they have their own URL to login<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The organization should create a separate login ID but give the IAM users the same alias so that each one can login with their alias<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. It is not possible to have the same login ID for multiple IAM users of the same account<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. The organization should create various groups and add each user with the same login ID to different groups. The user can login with their own group ID<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 637720,
          "date": "Wed 27 Jul 2022 03:24",
          "username": "hilft",
          "content": "C.  <br>But the question is far from real practice...",
          "upvote_count": "1"
        },
        {
          "id": 542748,
          "date": "Tue 08 Feb 2022 00:03",
          "username": "jj22222",
          "content": "D is right",
          "upvote_count": "1"
        },
        {
          "id": 531079,
          "date": "Mon 24 Jan 2022 07:08",
          "username": "Devgela",
          "content": "C.  It is not possible to have the same login ID for any system",
          "upvote_count": "2"
        },
        {
          "id": 499336,
          "date": "Sat 11 Dec 2021 11:39",
          "username": "cldy",
          "content": "C.  It is not possible to have the same login ID for multiple IAM users of the same account",
          "upvote_count": "2"
        },
        {
          "id": 490423,
          "date": "Tue 30 Nov 2021 06:03",
          "username": "acloudguruYecine11y",
          "content": "C, easy one, i hope i can have it in my examhave you passed your exam ?",
          "upvote_count": "11"
        },
        {
          "id": 528800,
          "date": "Thu 20 Jan 2022 21:43",
          "username": "Yecine11y",
          "content": "have you passed your exam ?",
          "upvote_count": "1"
        },
        {
          "id": 376046,
          "date": "Fri 22 Oct 2021 08:39",
          "username": "01037",
          "content": "C is correct",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#176",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>The user has provisioned the PIOPS volume with an EBS optimized instance.<br>Generally speaking, in which I/O chunk should the bandwidth experienced by the user be measured by AWS?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#176",
          "answers": [
            {
              "choice": "<p>A. 128 KB<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. 256 KB<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. 64 KB<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. 32 KB<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 561416,
          "date": "Sat 05 Mar 2022 13:18",
          "username": "niau",
          "content": "B.  256 KB",
          "upvote_count": "1"
        },
        {
          "id": 539736,
          "date": "Thu 03 Feb 2022 14:59",
          "username": "AnonymousJhb",
          "content": "B = 256kb for ssd and 1024 for hdd. would be nice if they specify type. <br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-io-characteristics.html",
          "upvote_count": "1"
        },
        {
          "id": 494219,
          "date": "Sun 05 Dec 2021 11:20",
          "username": "cldy",
          "content": "B.  256 KB",
          "upvote_count": "2"
        },
        {
          "id": 382254,
          "date": "Wed 27 Oct 2021 23:45",
          "username": "bamjive06",
          "content": "I think the answer is B thanks to the link provided. You just have to 'dig through it for a reasonable correct option.",
          "upvote_count": "1"
        },
        {
          "id": 376392,
          "date": "Wed 20 Oct 2021 14:14",
          "username": "01037",
          "content": "Not quite understand what the question asks",
          "upvote_count": "1"
        },
        {
          "id": 274640,
          "date": "Mon 18 Oct 2021 08:25",
          "username": "aimar047",
          "content": "is that a valid exam question? memorising numbers ?",
          "upvote_count": "1"
        },
        {
          "id": 252568,
          "date": "Fri 15 Oct 2021 04:08",
          "username": "kmaiti",
          "content": "It should be B .(PIOPS is determined on ssd based storage with standard of 256KB of IO chunk) <br><br>ref : https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-io-characteristics.html",
          "upvote_count": "2"
        },
        {
          "id": 160913,
          "date": "Wed 29 Sep 2021 07:41",
          "username": "DSHK",
          "content": "I would vote for B<br>https://aws.amazon.com/premiumsupport/knowledge-center/ebs-calculate-optimal-io-size/",
          "upvote_count": "1"
        },
        {
          "id": 69435,
          "date": "Fri 24 Sep 2021 15:35",
          "username": "Exam_boy",
          "content": "Not specific. According to the following doc,I /O size is capped at 256 KiB for SSD volumes and 1,024 KiB for HDD volumes<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-io-characteristics.html",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#177",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user is planning to use EBS for his DB requirement. The user already has an EC2 instance running in the VPC private subnet.<br>How can the user attach the EBS volume to a running instance?</p>",
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
              "choice": "<p>A. The user can create EBS in the same zone as the subnet of instance and attach that EBS to instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. It is not possible to attach an EBS to an instance running in VPC until the instance is stopped.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The user can specify the same subnet while creating EBS and then attach it to a running instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The user must create EBS within the same VPC and then attach it to a running instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 376390,
          "date": "Sat 06 Nov 2021 23:38",
          "username": "01037",
          "content": "Answer is \\\"A\\\"",
          "upvote_count": "1"
        },
        {
          "id": 160917,
          "date": "Fri 22 Oct 2021 10:29",
          "username": "DSHK",
          "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-attaching-volume.html<br>Answer is \\\"A\\\"",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#178",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization is planning to setup a management network on the AWS VPC.  The organization is trying to secure the webserver on a single VPC instance such that it allows the internet traffic as well as the back-end management traffic. The organization wants to make so that the back end management network interface can receive the SSH traffic only from a selected IP range, while the internet facing webserver will have an IP address which can receive traffic from all the internet<br>IPs.<br>How can the organization achieve this by running web server on a single instance?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#178",
          "answers": [
            {
              "choice": "<p>A. It is not possible to have two IP addresses for a single instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The organization should create two network interfaces with the same subnet and security group to assign separate IPs to each network interface.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. The organization should create two network interfaces with separate subnets so one instance can have two subnets and the respective security groups for controlled access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The organization should launch an instance with two separate subnets using the same network interface which allows to have a separate CIDR as well as security groups.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 715798,
          "date": "Fri 11 Nov 2022 07:39",
          "username": "NathanvB99",
          "content": "An instance can't be in 2 subnets, so C is wrong.<br><br>An instance can, however, have 2 interfaces with 2 IP's. So B is my answer.",
          "upvote_count": "1"
        },
        {
          "id": 707615,
          "date": "Sun 30 Oct 2022 06:09",
          "username": "RajAWSDevOps007",
          "content": "It's ONLY C.  As for ENIs in two subnets for the same EC2 instance, it's very much possible per this link- https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/scenarios-enis.html",
          "upvote_count": "1"
        },
        {
          "id": 703555,
          "date": "Tue 25 Oct 2022 06:48",
          "username": "Pengcheng",
          "content": "C is correct!",
          "upvote_count": "1"
        },
        {
          "id": 648257,
          "date": "Thu 18 Aug 2022 04:37",
          "username": "RVD",
          "content": "ANS = C. <br>You Can attach multiple ENI to EC2 with different subnet in Single VPC but Subnet should be in same AZ you cannot attach with different AZ.",
          "upvote_count": "3"
        },
        {
          "id": 643729,
          "date": "Sun 07 Aug 2022 15:09",
          "username": "nexus2020nexus2020",
          "content": "Real world: production and mgmt should be separated. And mgmt should not be allowed to ssh directly from internet, should be allowed from VPN where employee first vpn in and then do the mgmt work.C, clicked the wrong button....",
          "upvote_count": "11"
        },
        {
          "id": 643730,
          "date": "Sun 07 Aug 2022 15:09",
          "username": "nexus2020",
          "content": "C, clicked the wrong button....",
          "upvote_count": "1"
        },
        {
          "id": 546200,
          "date": "Sun 13 Feb 2022 04:01",
          "username": "futen0326",
          "content": "C is correct. An instance can have multiple ENIs attached to it, and you can deploy those ENIs into different subnets for more granular security configurations, such as the scenario in the question.",
          "upvote_count": "2"
        },
        {
          "id": 531123,
          "date": "Mon 24 Jan 2022 08:48",
          "username": "Devgela",
          "content": "C is only answer",
          "upvote_count": "2"
        },
        {
          "id": 530916,
          "date": "Mon 24 Jan 2022 00:51",
          "username": "AMKazi",
          "content": "B: is the answer. its possible to attach more than one network interface and separate security groups with each ENI <br>A: Wrong, its possible to have 2 IP addresses using 2 network interface cards attached to the instance<br>C: No possible. One instance cannot be available to 2 subnets at the same time<br>d: Not possible",
          "upvote_count": "4"
        },
        {
          "id": 513390,
          "date": "Thu 30 Dec 2021 14:22",
          "username": "cldy",
          "content": "C. <br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/scenarios-enis.html",
          "upvote_count": "2"
        },
        {
          "id": 376406,
          "date": "Sun 17 Oct 2021 15:56",
          "username": "01037",
          "content": "Of course C",
          "upvote_count": "1"
        },
        {
          "id": 316372,
          "date": "Thu 07 Oct 2021 22:08",
          "username": "ExtHo",
          "content": "Correct Answer C:<br>Scenarios for network interfaces<br><br>Attaching multiple network interfaces to an instance is useful when you want to:<br>Create a management network.<br>Use network and security appliances in your VPC. <br>Create dual-homed instances with workloads/roles on distinct subnets.<br>Create a low-budget, high-availability solution.<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/scenarios-enis.html",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#179",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user is trying to create a vault in AWS Glacier. The user wants to enable notifications.<br>In which of the below mentioned options can the user enable the notifications from the AWS console?</p>",
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
              "choice": "<p>A. Glacier does not support the AWS console<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Archival Upload Complete<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Vault Upload Job Complete<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Vault Inventory Retrieval Job Complete<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 582810,
          "date": "Fri 08 Apr 2022 12:29",
          "username": "Hasitha99",
          "content": "You can configure vaults to send notifications to you or your application when retrieving data. Notifications are delivered by using the Amazon Simple Notification Service (Amazon SNS).",
          "upvote_count": "2"
        },
        {
          "id": 495048,
          "date": "Mon 06 Dec 2021 11:31",
          "username": "cldy",
          "content": "D.  Vault Inventory Retrieval Job Complete",
          "upvote_count": "1"
        },
        {
          "id": 425240,
          "date": "Wed 20 Oct 2021 01:38",
          "username": "FERIN_01",
          "content": "Configuring Vault Notifications in Amazon S3 Glacier<br>PDF<br>Kindle<br>RSS<br>Retrieving anything from Amazon S3 Glacier (S3 Glacier), such as an archive from a vault or a vault inventory, is a two-step process.<br><br>Initiate a retrieval job.<br><br>After the job completes, download the job output.<br><br>You can set a notification configuration on a vault so that when a job completes a message is sent to an Amazon Simple Notification Service (Amazon SNS) topic.",
          "upvote_count": "1"
        },
        {
          "id": 160926,
          "date": "Wed 22 Sep 2021 02:15",
          "username": "DSHK01037",
          "content": "https://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications-console.html<br>Answer is DThanks",
          "upvote_count": "31"
        },
        {
          "id": 376442,
          "date": "Sun 10 Oct 2021 05:09",
          "username": "01037",
          "content": "Thanks",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#180",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization is purchasing licensed software. The software license can be registered only to a specific MAC Address. The organization is going to host the software in the AWS environment.<br>How can the organization fulfil the license requirement as the MAC address changes every time an instance is started/stopped/terminated?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#180",
          "answers": [
            {
              "choice": "<p>A. It is not possible to have a fixed MAC address with AWS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The organization should use VPC with the private subnet and configure the MAC address with that subnet.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The organization should use VPC with an elastic network interface which will have a fixed MAC Address.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. The organization should use VPC since VPC allows to configure the MAC address for each EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 577902,
          "date": "Wed 30 Mar 2022 00:32",
          "username": "jj22222",
          "content": "C - will keep same mac",
          "upvote_count": "1"
        },
        {
          "id": 376444,
          "date": "Sun 24 Oct 2021 10:14",
          "username": "01037",
          "content": "C is correct",
          "upvote_count": "1"
        },
        {
          "id": 160927,
          "date": "Sun 03 Oct 2021 01:46",
          "username": "DSHK",
          "content": "https://stackoverflow.com/questions/55686021/static-mac-addresses-for-ec2-instance<br>Answer is C",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#181",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>ABC has three separate departments and each department has their own AWS accounts. The HR department has created a file sharing site where all the on roll employees' data is uploaded. The Admin department uploads data about the employee presence in the office to their DB hosted in the VPC.  The Finance department needs to access data from the HR department to know the on roll employees to calculate the salary based on the number of days that an employee is present in the office.<br>How can ABC setup this scenario?</p>",
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
              "choice": "<p>A. It is not possible to configure VPC peering since each department has a separate AWS account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Setup VPC peering for the VPCs of Admin and Finance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Setup VPC peering for the VPCs of Finance and HR as well as between the VPCs of Finance and Admin.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Setup VPC peering for the VPCs of Admin and HR<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 614921,
          "date": "Sat 11 Jun 2022 11:25",
          "username": "datanerd79",
          "content": "C.  BTW this company doesn't support wfh policies haha",
          "upvote_count": "3"
        },
        {
          "id": 380119,
          "date": "Sun 24 Oct 2021 05:29",
          "username": "kurorobamjive06",
          "content": "Is this possible for VPCs peering between different account?Yes, that's the whole point. You want VLANs to inter-route, right!",
          "upvote_count": "12"
        },
        {
          "id": 382256,
          "date": "Fri 05 Nov 2021 02:48",
          "username": "bamjive06",
          "content": "Yes, that's the whole point. You want VLANs to inter-route, right!",
          "upvote_count": "2"
        },
        {
          "id": 376449,
          "date": "Sun 10 Oct 2021 23:13",
          "username": "01037",
          "content": "Yes it is C",
          "upvote_count": "1"
        },
        {
          "id": 363644,
          "date": "Sun 03 Oct 2021 02:34",
          "username": "viet1991",
          "content": "C.  Setup VPC peering for the VPCs of Finance and HR as well as between the VPCs of Finance and Admin.",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#182",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization is undergoing a security audit. The auditor wants to view the AWS VPC configurations as the organization has hosted all the applications in the<br>AWS VPC.  The auditor is from a remote place and wants to have access to AWS to view all the VPC records.<br>How can the organization meet the expectations of the auditor without compromising on the security of their AWS infrastructure?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#182",
          "answers": [
            {
              "choice": "<p>A. The organization should not accept the request as sharing the credentials means compromising on security.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an IAM role which will have read only access to all EC2 services including VPC and assign that role to the auditor.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an IAM user who will have read only access to the AWS VPC and share those credentials with the auditor.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. The organization should create an IAM user with VPC full access but set a condition that will not allow to modify anything if the request is from any IP other than the organization's data center.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 545004,
          "date": "Fri 11 Feb 2022 04:14",
          "username": "jyrajan69user0001AnonymousJhb",
          "content": "In all circumstances when there is an answer that says Role then that is more than likely the answer, AWS Best Practice. And creating a user with perm credentials is not advisable, so definitely Bagree , it should be BI presume this auditor is external to the business and is not federated? Thus we start with an IAM user role. \\\"Faraway\\\" means nothing. :(",
          "upvote_count": "1011"
        },
        {
          "id": 598239,
          "date": "Sat 07 May 2022 19:49",
          "username": "user0001",
          "content": "agree , it should be B",
          "upvote_count": "1"
        },
        {
          "id": 546980,
          "date": "Mon 14 Feb 2022 09:46",
          "username": "AnonymousJhb",
          "content": "I presume this auditor is external to the business and is not federated? Thus we start with an IAM user role. \\\"Faraway\\\" means nothing. :(",
          "upvote_count": "1"
        },
        {
          "id": 644419,
          "date": "Tue 09 Aug 2022 11:17",
          "username": "gondohwe",
          "content": "the role is violating principle of least priviledge since the auditor needs read-only access to VPC not all EC2 services...C is a better security option",
          "upvote_count": "1"
        },
        {
          "id": 570952,
          "date": "Sat 19 Mar 2022 10:40",
          "username": "bfal",
          "content": "Any answer with role is most likely to be correct, as this is preferred over creating an IAM user account. However, what makes Ans B incorrect is in the question. The role would have been excessive if granted, as \\\"all EC2 services\\\", will be permitted too. And the auditor only requires VPC read-only access, and nothing else, so role for all EC2 services will contradict the principles of least privilege, in my view. So C is correct.",
          "upvote_count": "4"
        },
        {
          "id": 494925,
          "date": "Mon 06 Dec 2021 06:40",
          "username": "cldy",
          "content": "C.  Create an IAM user who will have read only access to the AWS VPC and share those credentials with the auditor.",
          "upvote_count": "1"
        },
        {
          "id": 487084,
          "date": "Fri 26 Nov 2021 06:13",
          "username": "tiana528",
          "content": "C.  Because C can work, it is simple and straightforward. B creates a role which is not necessary.",
          "upvote_count": "2"
        },
        {
          "id": 376457,
          "date": "Sun 26 Sep 2021 21:32",
          "username": "01037",
          "content": "Yes it is C",
          "upvote_count": "1"
        },
        {
          "id": 363647,
          "date": "Thu 23 Sep 2021 11:24",
          "username": "viet1991",
          "content": "C.  Create an IAM user who will have read only access to the AWS VPC and share those credentials with the auditor.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#183",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>What is the maximum length for an instance profile name in AWS IAM?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#183",
          "answers": [
            {
              "choice": "<p>A. 512 characters<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. 128 characters<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. 1024 characters<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. 64 characters<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 596016,
          "date": "Mon 02 May 2022 13:37",
          "username": "tartarus23",
          "content": "B.  Instance profile name\t128 characters<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html",
          "upvote_count": "1"
        },
        {
          "id": 536623,
          "date": "Mon 31 Jan 2022 03:29",
          "username": "TG080",
          "content": "28 characters. For example:<br><br>User IDs that begin with AIDA<br><br>Group IDs that begin with AGPA<br><br>Role IDs that begin with AROA<br><br>Managed policy IDs that begin with ANPA<br><br>Server certificate IDs that begin with ASCA",
          "upvote_count": "1"
        },
        {
          "id": 376458,
          "date": "Thu 04 Nov 2021 13:04",
          "username": "01037",
          "content": "OK, it is 128 characters",
          "upvote_count": "1"
        },
        {
          "id": 297208,
          "date": "Thu 07 Oct 2021 05:31",
          "username": "ar2000",
          "content": "B. <br>https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html",
          "upvote_count": "1"
        },
        {
          "id": 297206,
          "date": "Tue 05 Oct 2021 21:16",
          "username": "ar2000",
          "content": "B. <br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/scenarios-enis.html",
          "upvote_count": "1"
        },
        {
          "id": 179378,
          "date": "Thu 30 Sep 2021 12:40",
          "username": "BillyC",
          "content": "B is correct",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#184",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Cognito Sync is an AWS service that you can use to synchronize user profile data across mobile devices without requiring your own backend. When the device is online, you can synchronize data.<br>If you also set up push sync, what does it allow you to do?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#184",
          "answers": [
            {
              "choice": "<p>A. Notify other devices that a user profile is available across multiple devices<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Synchronize user profile data with less latency<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Notify other devices immediately that an update is available<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Synchronize online data faster<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 514395,
          "date": "Sat 01 Jan 2022 07:17",
          "username": "cldy",
          "content": "C correct.",
          "upvote_count": "1"
        },
        {
          "id": 499061,
          "date": "Sat 11 Dec 2021 04:13",
          "username": "challenger1",
          "content": "My Answer: C<br>The question probably won't come up, as AppSync is used now instead of Cognito Sync.",
          "upvote_count": "2"
        },
        {
          "id": 363649,
          "date": "Fri 01 Oct 2021 16:52",
          "username": "viet1991",
          "content": "C. <br>Explanation:<br>Cognito Sync is an AWS service that you can use to synchronize user profile data across mobile devices without requiring your own backend. When the device is online, you can synchronize<br>data, and if you have also set up push sync, notify other devices immediately that an update is available.<br>http://docs.aws.amazon.com/cognito/devguide/sync/",
          "upvote_count": "1"
        },
        {
          "id": 230265,
          "date": "Fri 01 Oct 2021 11:08",
          "username": "newme",
          "content": "It's recommended to use AWS AppSync now",
          "upvote_count": "4"
        },
        {
          "id": 92068,
          "date": "Mon 27 Sep 2021 07:28",
          "username": "Joeytechn9t",
          "content": "Answer C <br>https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-sync.html",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#185",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization is planning to create a secure scalable application with AWS VPC and ELB.  The organization has two instances already running and each instance has an ENI attached to it in addition to a primary network interface. The primary network interface and additional ENI both have an elastic IP attached to it.<br>If those instances are registered with ELB and the organization wants ELB to send data to a particular EIP of the instance, how can they achieve this?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#185",
          "answers": [
            {
              "choice": "<p>A. The organization should ensure that the IP which is required to receive the ELB traffic is attached to a primary network interface.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. It is not possible to attach an instance with two ENIs with ELB as it will give an IP conflict error.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The organization should ensure that the IP which is required to receive the ELB traffic is attached to an additional ENI.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. It is not possible to send data to a particular IP as ELB will send to any one EIP.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 508198,
          "date": "Fri 24 Dec 2021 00:50",
          "username": "tkanmani76",
          "content": "Option A - If you associate an Elastic IP address with the eth0 network interface of your instance, its current public IPv4 address (if it had one) is released to the EC2-VPC public IP address pool.",
          "upvote_count": "1"
        },
        {
          "id": 363654,
          "date": "Mon 01 Nov 2021 06:46",
          "username": "viet1991",
          "content": "A. <br>But the question is seem to be wrong.<br>\\\"ELB to send data to a particular EIP\\\" => \\\"ELB to send data to a particular IP\\\"<br><br>When the user registers a multi-homed instance (an instance that has an Elastic Network Interface (ENI) attached) with a load balancer, the load balancer will route the traffic to the IP address of the primary network interface (eth0).",
          "upvote_count": "1"
        },
        {
          "id": 274650,
          "date": "Tue 19 Oct 2021 06:48",
          "username": "aimar047",
          "content": "Not sure if any answers is right ! phrasing is very bit confusing..",
          "upvote_count": "2"
        },
        {
          "id": 230268,
          "date": "Wed 22 Sep 2021 07:04",
          "username": "newmeA_New_Guy01037",
          "content": "Though it's not in the answer.<br>How about use target group with target type being ip.See Target Type: https://docs.amazonaws.cn/en_us/elasticloadbalancing/latest/application/load-balancer-target-groups.htmlTarget Type can be IP. So what's your point?<br>From what the question asks, Both A and C can be correct.",
          "upvote_count": "311"
        },
        {
          "id": 232865,
          "date": "Mon 04 Oct 2021 19:17",
          "username": "A_New_Guy01037",
          "content": "See Target Type: https://docs.amazonaws.cn/en_us/elasticloadbalancing/latest/application/load-balancer-target-groups.htmlTarget Type can be IP. So what's your point?<br>From what the question asks, Both A and C can be correct.",
          "upvote_count": "11"
        },
        {
          "id": 376476,
          "date": "Wed 03 Nov 2021 17:05",
          "username": "01037",
          "content": "Target Type can be IP. So what's your point?<br>From what the question asks, Both A and C can be correct.",
          "upvote_count": "1"
        },
        {
          "id": 179380,
          "date": "Tue 21 Sep 2021 20:17",
          "username": "BillyC",
          "content": "A is correct",
          "upvote_count": "1"
        },
        {
          "id": 96517,
          "date": "Mon 20 Sep 2021 08:43",
          "username": "NKnab",
          "content": "When you register an instance with an elastic network interface (ENI) attached, the load balancer routes traffic to the primary IP address of the primary interface (eth0) of the instance.",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#186",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In Amazon Cognito, your mobile app authenticates with the Identity Provider (IdP) using the provider's SDK. Once the end user is authenticated with the IdP, the<br>OAuth or OpenID Connect token returned from the IdP is passed by your app to Amazon Cognito, which returns a new _____ for the user and a set of temporary, limited-privilege AWS credentials.</p>",
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
              "choice": "<p>A. Cognito Key Pair<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Cognito API<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Cognito ID<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Cognito SDK<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 636286,
          "date": "Mon 25 Jul 2022 01:05",
          "username": "hilft",
          "content": "keyword, \\\"ID\\\" Cognito ID",
          "upvote_count": "1"
        },
        {
          "id": 363656,
          "date": "Tue 26 Oct 2021 03:55",
          "username": "viet199101037",
          "content": "C. <br>https://aws.amazon.com/cognito/faqs/<br>How does the login flow work with public identity providers?<br>Your mobile app authenticates with an Identity Provider (IdP) using the provider’s SDK. Once the end user is authenticated with the IdP, the OAuth or OpenID Connect token or the SAML assertion returned from the IdP is passed by your app to Cognito Identity, which returns a new Cognito ID for the user and a set of temporary, limited-privilege AWS credentials.Thank you",
          "upvote_count": "21"
        },
        {
          "id": 376477,
          "date": "Mon 01 Nov 2021 12:12",
          "username": "01037",
          "content": "Thank you",
          "upvote_count": "1"
        },
        {
          "id": 179383,
          "date": "Thu 07 Oct 2021 10:08",
          "username": "BillyC",
          "content": "C is correct",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#187",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>What is the maximum length for a certificate ID in AWS IAM?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#187",
          "answers": [
            {
              "choice": "<p>A. 1024 characters<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. 512 characters<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. 64 characters<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. 128 characters<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 686243,
          "date": "Tue 04 Oct 2022 16:18",
          "username": "astalavista1",
          "content": "Ffs, why do they ask these questions?<br>Why am I required to memorise all this for the exam?",
          "upvote_count": "1"
        },
        {
          "id": 497321,
          "date": "Thu 09 Dec 2021 05:40",
          "username": "cldy",
          "content": "D.  128 characters",
          "upvote_count": "1"
        },
        {
          "id": 376478,
          "date": "Mon 18 Oct 2021 00:22",
          "username": "01037",
          "content": "http://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html<br><br>128 characters. For example:<br>Server certificate IDs that begin with ASCA",
          "upvote_count": "2"
        },
        {
          "id": 363658,
          "date": "Sat 09 Oct 2021 02:42",
          "username": "viet1991",
          "content": "D. <br>Explanation:<br>The maximum length for a certificate ID is 128 characters.<br>http://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#188",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user is trying to create a PIOPS EBS volume with 3 GB size and 90 IOPS. Will AWS create the volume?</p>",
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
              "choice": "<p>A. No, since the PIOPS and EBS size ratio is less than 30<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Yes, since the ratio between EBS and IOPS is less than 30<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. No, the EBS size is less than 4GB<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Yes, since PIOPS is higher than 100<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 541144,
          "date": "Sat 05 Feb 2022 17:01",
          "username": "ravisarravisar",
          "content": "Answer is C.  A Provisioned IOPS SSD (io1) volume must be at least 4 GiB in size. Try to provision an EBS SSD volume with 3 GB in Size via Console and you will get the above error.For General purpose Volume, the Volume size must be at least the size of the snapshot (8 GiB)",
          "upvote_count": "11"
        },
        {
          "id": 541145,
          "date": "Sat 05 Feb 2022 17:03",
          "username": "ravisar",
          "content": "For General purpose Volume, the Volume size must be at least the size of the snapshot (8 GiB)",
          "upvote_count": "1"
        },
        {
          "id": 498487,
          "date": "Fri 10 Dec 2021 10:34",
          "username": "cldy",
          "content": "C.  No, the EBS size is less than 4GB",
          "upvote_count": "1"
        },
        {
          "id": 376479,
          "date": "Mon 11 Oct 2021 17:46",
          "username": "0103701037",
          "content": "Neither C or D is correct.<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html#EBSVolumeTypes_piops<br>Provisioned IOPS SSD volumes can range in size from 4 GiB to 16 TiB and you can provision from 100 IOPS up to 64,000 IOPS per volumeSorry D is wrong",
          "upvote_count": "11"
        },
        {
          "id": 376480,
          "date": "Fri 05 Nov 2021 01:32",
          "username": "01037",
          "content": "Sorry D is wrong",
          "upvote_count": "1"
        },
        {
          "id": 363665,
          "date": "Mon 04 Oct 2021 08:08",
          "username": "viet1991",
          "content": "C. <br>A Provisioned IOPS SSD (io1) volume must be at least 4 GiB in size.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#189",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>If a single condition within an IAM policy includes multiple values for one key, it will be evaluated using a logical______.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#189",
          "answers": [
            {
              "choice": "<p>A. OR<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. NAND<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. NOR<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. AND<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 376481,
          "date": "Thu 14 Oct 2021 21:50",
          "username": "01037",
          "content": "A is correct",
          "upvote_count": "1"
        },
        {
          "id": 174276,
          "date": "Mon 04 Oct 2021 02:15",
          "username": "kaush",
          "content": "Evaluation Logic for Conditions with Multiple Keys or Values<br>If your policy has multiple condition operators or multiple keys attached to a single condition operator, the conditions are evaluated using a logical AND.  If a single condition operator includes multiple values for one key, that condition operator is evaluated using a logical OR. All conditions must resolve to true to trigger the desired Allow or Deny effect.",
          "upvote_count": "1"
        },
        {
          "id": 96523,
          "date": "Thu 30 Sep 2021 11:06",
          "username": "NKnab",
          "content": "If your policy has multiple condition operators or multiple keys attached to a single condition operator, the conditions are evaluated using a logical AND.  If a single condition operator includes multiple values for one key, that condition operator is evaluated using a logical OR.",
          "upvote_count": "2"
        },
        {
          "id": 51825,
          "date": "Sun 26 Sep 2021 16:32",
          "username": "Gorha",
          "content": "A is correct: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_multi-value-conditions.html",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#190",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which of the following cache engines does Amazon ElastiCache support?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#190",
          "answers": [
            {
              "choice": "<p>A. Amazon ElastiCache supports Memcached and Redis.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Amazon ElastiCache supports Redis and WinCache.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Amazon ElastiCache supports Memcached and Hazelcast.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Amazon ElastiCache supports Memcached only.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 376482,
          "date": "Thu 28 Oct 2021 14:36",
          "username": "01037bamjive06",
          "content": "A is correct.<br>What a question(笑)Why not hazelcast?",
          "upvote_count": "51"
        },
        {
          "id": 382259,
          "date": "Sun 07 Nov 2021 06:05",
          "username": "bamjive06",
          "content": "Why not hazelcast?",
          "upvote_count": "1"
        },
        {
          "id": 566216,
          "date": "Sat 12 Mar 2022 15:55",
          "username": "foxrj21",
          "content": "A is correct!",
          "upvote_count": "2"
        },
        {
          "id": 494100,
          "date": "Sun 05 Dec 2021 07:08",
          "username": "cldy",
          "content": "A.  Amazon ElastiCache supports Memcached and Redis.",
          "upvote_count": "1"
        },
        {
          "id": 479173,
          "date": "Tue 16 Nov 2021 05:38",
          "username": "acloudguru",
          "content": "I think the website made a mistake , they mixed up the Devops question in this SAP questions.",
          "upvote_count": "2"
        },
        {
          "id": 179388,
          "date": "Thu 07 Oct 2021 01:26",
          "username": "BillyC",
          "content": "A is correct",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#191",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You have been given the task to define multiple AWS Data Pipeline schedules for different activities in the same pipeline.<br>Which of the following would successfully accomplish this task?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#191",
          "answers": [
            {
              "choice": "<p>A. Creating multiple pipeline definition files<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Defining multiple pipeline definitions in your schedule objects file and associating the desired schedule to the correct activity via its schedule field<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Defining multiple schedule objects in your pipeline definition file and associating the desired schedule to the correct activity via its schedule field<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Defining multiple schedule objects in the schedule field<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 495792,
          "date": "Tue 07 Dec 2021 09:54",
          "username": "cldy",
          "content": "C.  Defining multiple schedule objects in your pipeline definition file and associating the desired schedule to the correct activity via its schedule field",
          "upvote_count": "1"
        },
        {
          "id": 376483,
          "date": "Mon 01 Nov 2021 14:26",
          "username": "01037",
          "content": "C is correct!",
          "upvote_count": "1"
        },
        {
          "id": 179394,
          "date": "Thu 07 Oct 2021 12:41",
          "username": "BillyC",
          "content": "C is correct!",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#192",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In a VPC, can you modify a set of DHCP options after you create them?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#192",
          "answers": [
            {
              "choice": "<p>A. Yes, you can modify a set of DHCP options within 48 hours after creation and there are no VPCs associated with them.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Yes, you can modify a set of DHCP options any time after you create them.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. No, you can't modify a set of DHCP options after you create them.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Yes, you can modify a set of DHCP options within 24 hours after creation.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 494285,
          "date": "Sun 05 Dec 2021 12:50",
          "username": "cldy",
          "content": "C.  No, you can't modify a set of DHCP options after you create them.",
          "upvote_count": "2"
        },
        {
          "id": 415242,
          "date": "Sat 30 Oct 2021 23:08",
          "username": "robertomartinez",
          "content": "Yes it's C, but its sorta dumb because you can achieve the functionality of changing the DHCP options set by switchingto a new one with new options, then delete the old one which I think is what you should remember. One of those \\\"learn the doc by heart question\\\"...because feature has been implemented this way instead of that one ... okay",
          "upvote_count": "2"
        },
        {
          "id": 376484,
          "date": "Fri 22 Oct 2021 07:15",
          "username": "01037",
          "content": "C<br>No you can NOT",
          "upvote_count": "1"
        },
        {
          "id": 316499,
          "date": "Fri 15 Oct 2021 16:50",
          "username": "ExtHo",
          "content": "C is correct Answer:<br>When you create a VPC, we automatically create a set of DHCP options and associate them with the VPC.  You can configure your own DHCP options set for your VPC. <br><br>Changing DHCP options<br>After you create a set of DHCP options, you can't modify them. If you want your VPC to use a different set of DHCP options, you must create a new set and associate them with your VPC.  You can also set up your VPC to use no DHCP options at all.",
          "upvote_count": "2"
        },
        {
          "id": 179395,
          "date": "Thu 07 Oct 2021 09:07",
          "username": "BillyC",
          "content": "C is correct!",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#193",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A bucket owner has allowed another account's IAM users to upload or access objects in his bucket. The IAM user of Account A is trying to access an object created by the IAM user of account B.  What will happen in this scenario?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#193",
          "answers": [
            {
              "choice": "<p>A. It is not possible to give permission to multiple IAM users<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. AWS S3 will verify proper rights given by the owner of Account A, the bucket owner as well as by the IAM user B to the object<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. The bucket policy may not be created as S3 will give error due to conflict of Access Rights<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. It is not possible that the IAM user of one account accesses objects of the other IAM user<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 497794,
          "date": "Thu 09 Dec 2021 15:29",
          "username": "cldy",
          "content": "B.  AWS S3 will verify proper rights given by the owner of Account A, the bucket owner as well as by the IAM user B to the object",
          "upvote_count": "1"
        },
        {
          "id": 376508,
          "date": "Wed 03 Nov 2021 07:15",
          "username": "01037",
          "content": "B<br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-auth-workflow-bucket-operation.html<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-auth-workflow-object-operation.html",
          "upvote_count": "1"
        },
        {
          "id": 179396,
          "date": "Thu 28 Oct 2021 06:25",
          "username": "BillyC",
          "content": "is correct",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#194",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which statement is NOT true about a stack which has been created in a Virtual Private Cloud (VPC) in AWS OpsWorks?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#194",
          "answers": [
            {
              "choice": "<p>A. Subnets whose instances cannot communicate with the Internet are referred to as public subnets.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Subnets whose instances can communicate only with other instances in the VPC and cannot communicate directly with the Internet are referred to as private subnets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. All instances in the stack should have access to any package repositories that your operating system depends on, such as the Amazon Linux or Ubuntu Linux repositories.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Your app and custom cookbook repositories should be accessible for all instances in the stack.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 569462,
          "date": "Thu 17 Mar 2022 05:24",
          "username": "jyrajan69",
          "content": "Seriously, it says cannot communicate with the Internet, definitely not A.  The answer is B",
          "upvote_count": "2"
        },
        {
          "id": 376728,
          "date": "Sat 06 Nov 2021 02:14",
          "username": "01037",
          "content": "A is correct",
          "upvote_count": "2"
        },
        {
          "id": 316514,
          "date": "Wed 27 Oct 2021 08:18",
          "username": "ExtHo",
          "content": "True A is right answer.",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#195",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization has hosted an application on the EC2 instances. There will be multiple users connecting to the instance for setup and configuration of application.<br>The organization is planning to implement certain security best practices.<br>Which of the below mentioned pointers will not help the organization achieve better security arrangement?</p>",
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
              "choice": "<p>A. Allow only IAM users to connect with the EC2 instances with their own secret access key.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a procedure to revoke the access rights of the individual user when they are not required to connect to EC2 instance anymore for the purpose of application configuration.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Apply the latest patch of OS and always keep it updated.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Disable the password based login for all the users. All the users should use their own keys to connect with the instance securely.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 69565,
          "date": "Mon 27 Sep 2021 11:49",
          "username": "sergza",
          "content": "The answer is A.  you need to have key pair not sec access key",
          "upvote_count": "9"
        },
        {
          "id": 504429,
          "date": "Sat 18 Dec 2021 20:35",
          "username": "vbal",
          "content": "IAM doesn't control Login access to EC2",
          "upvote_count": "3"
        },
        {
          "id": 496615,
          "date": "Wed 08 Dec 2021 08:42",
          "username": "cldy",
          "content": "A.  Allow only IAM users to connect with the EC2 instances with their own secret access key.",
          "upvote_count": "1"
        },
        {
          "id": 443470,
          "date": "Sat 23 Oct 2021 16:24",
          "username": "kashi1983",
          "content": "Answer is A",
          "upvote_count": "1"
        },
        {
          "id": 389077,
          "date": "Wed 20 Oct 2021 15:53",
          "username": "DashL",
          "content": "I thought if it is a Windows EC2 instance and you try to connect to this EC2 instance, then you need a user id/pwd. I couldn't find any information on connecting to an Windows EC2 instance using SSH Keys. Am I missing something?",
          "upvote_count": "1"
        },
        {
          "id": 376729,
          "date": "Mon 11 Oct 2021 23:01",
          "username": "01037",
          "content": "A is correct",
          "upvote_count": "1"
        },
        {
          "id": 316523,
          "date": "Sat 09 Oct 2021 15:10",
          "username": "ExtHo",
          "content": "A is correct Answer:<br>https://aws.amazon.com/articles/tips-for-securing-your-ec2-instance/",
          "upvote_count": "2"
        },
        {
          "id": 121936,
          "date": "Thu 07 Oct 2021 23:08",
          "username": "manoj101",
          "content": "While all 4 looks correct & D sentence is not complete not sure which one to pick-up.",
          "upvote_count": "1"
        },
        {
          "id": 110199,
          "date": "Thu 07 Oct 2021 12:38",
          "username": "StudenigoDDamnccp",
          "content": "Correct answer is D - need to disable password-based login.<br>\\\"Additional security can be provided by using secure authentication methods. We recommend using public-key authentication instead of passwords to remotely log in to your instances with SSH. Passwords are vulnerable to a variety of simple attacks, including dictionary and brute-force attacks\\\"the question ask to pick the answer that is NOT helping the security configuration. And ans D actually helps to increase security level.",
          "upvote_count": "22"
        },
        {
          "id": 188341,
          "date": "Fri 08 Oct 2021 08:17",
          "username": "goDDamnccp",
          "content": "the question ask to pick the answer that is NOT helping the security configuration. And ans D actually helps to increase security level.",
          "upvote_count": "2"
        },
        {
          "id": 66160,
          "date": "Sun 19 Sep 2021 19:54",
          "username": "mishay2AsdsSmart",
          "content": "The answer is D. <br>https://aws.amazon.com/articles/tips-for-securing-your-ec2-instance/will \\\"NOT\\\" help the organization achieve better security arrangement?Errr...Reread the question and the article.",
          "upvote_count": "121"
        },
        {
          "id": 67558,
          "date": "Sat 25 Sep 2021 05:16",
          "username": "Asds",
          "content": "will \\\"NOT\\\" help the organization achieve better security arrangement?",
          "upvote_count": "2"
        },
        {
          "id": 68458,
          "date": "Sat 25 Sep 2021 15:03",
          "username": "Smart",
          "content": "Errr...Reread the question and the article.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#196",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>By default, temporary security credentials for an IAM user are valid for a maximum of 12 hours, but you can request a duration as long as _________ hours.</p>",
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
              "choice": "<p>A. 24<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. 36<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. 10<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. 48<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 636805,
          "date": "Mon 25 Jul 2022 17:55",
          "username": "hilft",
          "content": "36 hrs. memorized.",
          "upvote_count": "1"
        },
        {
          "id": 586299,
          "date": "Fri 15 Apr 2022 13:01",
          "username": "tartarus23",
          "content": "By default, temporary security credentials for an IAM user are valid for a maximum of 12 hours. But you can request a duration as short as 15 minutes or as long as 36 hours using the DurationSeconds parameter.",
          "upvote_count": "1"
        },
        {
          "id": 376730,
          "date": "Sun 17 Oct 2021 15:52",
          "username": "01037",
          "content": "B is correct",
          "upvote_count": "1"
        },
        {
          "id": 179399,
          "date": "Tue 12 Oct 2021 10:44",
          "username": "BillyC",
          "content": "B is correct",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#197",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>What RAID method is used on the Cloud Block Storage back-end to implement a very high level of reliability and performance?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#197",
          "answers": [
            {
              "choice": "<p>A. RAID 1 (Mirror)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. RAID 5 (Blocks striped, distributed parity)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. RAID 10 (Blocks mirrored and striped)<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. RAID 2 (Bit level striping)<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 139167,
          "date": "Wed 22 Sep 2021 18:56",
          "username": "DuyPhan01037",
          "content": "Cloud Block Storage --> Is it related to AWS?I doubt it.",
          "upvote_count": "51"
        },
        {
          "id": 376731,
          "date": "Tue 02 Nov 2021 21:19",
          "username": "01037",
          "content": "I doubt it.",
          "upvote_count": "1"
        },
        {
          "id": 636872,
          "date": "Mon 25 Jul 2022 19:44",
          "username": "hilft",
          "content": "AWS does not recommend anything outside RAID 0, RAID 1",
          "upvote_count": "1"
        },
        {
          "id": 535308,
          "date": "Sat 29 Jan 2022 09:11",
          "username": "lulz111",
          "content": "The discussion below does not match the question in any way shape or form",
          "upvote_count": "1"
        },
        {
          "id": 526183,
          "date": "Tue 18 Jan 2022 00:36",
          "username": "weurseuk",
          "content": "D, Rto=2h but rpo: available , so read replica is the best choice",
          "upvote_count": "1"
        },
        {
          "id": 415250,
          "date": "Wed 03 Nov 2021 21:50",
          "username": "robertomartinez",
          "content": "I disagree with the whole question : without description of needed performance (throughput? , latency?, read iops,write iops?)and reliability it's impossible to choose a correct answer between RAID1 (better reliability and lesser write perf) and RAID10 (lesser reliability but better write perf) although both RAID 1 and 10 increase reads perf.",
          "upvote_count": "1"
        },
        {
          "id": 179401,
          "date": "Sun 31 Oct 2021 10:35",
          "username": "BillyC",
          "content": "C is correct",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#198",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>One of the AWS account owners faced a major challenge in June as his account was hacked and the hacker deleted all the data from his AWS account. This resulted in a major blow to the business.<br>Which of the below mentioned steps would not have helped in preventing this action?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#198",
          "answers": [
            {
              "choice": "<p>A. Setup an MFA for each user as well as for the root account user.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Take a backup of the critical data to offsite / on premise.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AMI and a snapshot of the data at regular intervals as well as keep a copy to separate regions.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Do not share the AWS access and secret access keys with others as well do not store it inside programs, instead use IAM roles.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 496539,
          "date": "Wed 08 Dec 2021 06:12",
          "username": "cldy",
          "content": "C.  Create an AMI and a snapshot of the data at regular intervals as well as keep a copy to separate regions.",
          "upvote_count": "1"
        },
        {
          "id": 425514,
          "date": "Fri 05 Nov 2021 03:26",
          "username": "FERIN_01",
          "content": "C.  Its a negative question asking option not prevented this incident. As per author keeping back-up in AWS also can be deleted by hacker hence it is not secure option.",
          "upvote_count": "1"
        },
        {
          "id": 376736,
          "date": "Fri 29 Oct 2021 21:20",
          "username": "01037bamjive06",
          "content": "I think neither B nor C could help PREVENT the action.<br>They can only mediate the result.Correct, and since the user got hacked, should this bad boys drink demons, they could wipe staff here and far. So B is better",
          "upvote_count": "11"
        },
        {
          "id": 382263,
          "date": "Sun 31 Oct 2021 05:32",
          "username": "bamjive06",
          "content": "Correct, and since the user got hacked, should this bad boys drink demons, they could wipe staff here and far. So B is better",
          "upvote_count": "1"
        },
        {
          "id": 127991,
          "date": "Fri 15 Oct 2021 03:18",
          "username": "ramikhreim",
          "content": "Which of the below mentioned steps would NOT have helped in preventing this action.<br>C is the answer the Hacker have access to all regions in this account that will not help i preventing",
          "upvote_count": "2"
        },
        {
          "id": 95751,
          "date": "Tue 05 Oct 2021 16:28",
          "username": "JAWS1600",
          "content": "I take back my previous answer. After readingthe question again \\\"would not have helped\\\" - Correct answer is C. ",
          "upvote_count": "1"
        },
        {
          "id": 95749,
          "date": "Tue 05 Oct 2021 01:54",
          "username": "JAWS1600",
          "content": "B. Issue with A -if hacker hacked an account, he would be able to delete the data in other regions. <br>The safest option is to keep dataoffsite or on-prem. One option is to copy the data backup to EFS and mount EFS on on-prem. Second option will be to copy the backup usingaws s3 cli.",
          "upvote_count": "1"
        },
        {
          "id": 95746,
          "date": "Mon 04 Oct 2021 17:46",
          "username": "JAWS1600",
          "content": "B. Issue with A -if hacker hacked an account, he would be able to delete the data in other regions. <br>The safest option is to keep dataoffsite or on-prem. One option is to copy the data backup to EFS and mount EFS on on-prem. Second option will be to copy the backup usingaws s3 cli.",
          "upvote_count": "2"
        },
        {
          "id": 67560,
          "date": "Sat 25 Sep 2021 08:39",
          "username": "Asdsdoyb",
          "content": "A for sure.... MFA is the most secure thing to do at first when it comes to AWS accounts ..'would not' so Answer is C",
          "upvote_count": "33"
        },
        {
          "id": 69438,
          "date": "Wed 29 Sep 2021 05:30",
          "username": "doyb",
          "content": "'would not' so Answer is C",
          "upvote_count": "3"
        },
        {
          "id": 52749,
          "date": "Thu 23 Sep 2021 23:24",
          "username": "virtual",
          "content": "This can be the right answer, but it is quite disappointing ...",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#199",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>With Amazon Elastic MapReduce (Amazon EMR) you can analyze and process vast amounts of data. The cluster is managed using an open-source framework called Hadoop. You have set up an application to run Hadoop jobs. The application reads data from DynamoDB and generates a temporary file of 100 TBs.<br>The whole process runs for 30 minutes and the output of the job is stored to S3.<br>Which of the below mentioned options is the most cost effective solution in this case?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#199",
          "answers": [
            {
              "choice": "<p>A. Use Spot Instances to run Hadoop jobs and configure them with EBS volumes for persistent data storage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Spot Instances to run Hadoop jobs and configure them with ethereal storage for output file storage.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use an on demand instance to run Hadoop jobs and configure them with EBS volumes for persistent storage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an on demand instance to run Hadoop jobs and configure them with ephemeral storage for output file storage.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 40536,
          "date": "Fri 01 Oct 2021 20:04",
          "username": "amogrobertomartinezbobsmith2000",
          "content": "Answer is B<br>\\\"the output of the job is stored on S3\\\". Ephemeral storage is using to store temporary data in this caseB says ethereal storage, so it's AIt's a typo. Don't read into it. There are a while bunch of questions here with typos",
          "upvote_count": "811"
        },
        {
          "id": 415254,
          "date": "Sun 07 Nov 2021 17:26",
          "username": "robertomartinezbobsmith2000",
          "content": "B says ethereal storage, so it's AIt's a typo. Don't read into it. There are a while bunch of questions here with typos",
          "upvote_count": "11"
        },
        {
          "id": 602497,
          "date": "Mon 16 May 2022 10:25",
          "username": "bobsmith2000",
          "content": "It's a typo. Don't read into it. There are a while bunch of questions here with typos",
          "upvote_count": "1"
        },
        {
          "id": 496787,
          "date": "Wed 08 Dec 2021 12:57",
          "username": "cldy",
          "content": "B.  Use Spot Instances to run Hadoop jobs and configure them with ethereal storage for output file storage.",
          "upvote_count": "1"
        },
        {
          "id": 376739,
          "date": "Sat 30 Oct 2021 18:16",
          "username": "01037",
          "content": "Sure B",
          "upvote_count": "1"
        },
        {
          "id": 341626,
          "date": "Sun 24 Oct 2021 15:15",
          "username": "Madwyn",
          "content": "Use spot for cost.<br><br>Not A because EBS for persistent data storage is not cost efficient, you may use S3.<br>B not because EBS is limited to 16TB, Hadoop forms a cluster, it doesn't require each node to have 100TB storage, that's silly.",
          "upvote_count": "1"
        },
        {
          "id": 230699,
          "date": "Sat 23 Oct 2021 06:57",
          "username": "newme",
          "content": "Where to find price of instance store?<br>And how to add instance store to an instance?<br>I followed instructions from<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/add-instance-store-volumes.html#adding-instance-storage-instance<br>but there is no instance store in Volume Type.",
          "upvote_count": "1"
        },
        {
          "id": 190993,
          "date": "Fri 22 Oct 2021 10:50",
          "username": "MarkDillon1075robertomartinez",
          "content": "'Ethereal' is just a typo.The same question pops up on other sites and its 'Ephemeral' So the answer is BHow can you affirm it's a typo, to me answer is A because \\\"ethereal storage\\\" does not exists. If it's really a Typo (that's a lot of misplaced chars) then answer is B.  If I had this on the day of the exam I'd chose A assuming B is misleading because of the wrong use of term ethereal storage with means nothings",
          "upvote_count": "12"
        },
        {
          "id": 415253,
          "date": "Tue 02 Nov 2021 23:04",
          "username": "robertomartinez",
          "content": "How can you affirm it's a typo, to me answer is A because \\\"ethereal storage\\\" does not exists. If it's really a Typo (that's a lot of misplaced chars) then answer is B.  If I had this on the day of the exam I'd chose A assuming B is misleading because of the wrong use of term ethereal storage with means nothings",
          "upvote_count": "2"
        },
        {
          "id": 131118,
          "date": "Tue 19 Oct 2021 06:01",
          "username": "Paramg1234",
          "content": "This is tricky .... B is the right answer because EBS will not support more than 16 TBs, the remaining choice is B (Although no such thing like ethereal storage)",
          "upvote_count": "1"
        },
        {
          "id": 107135,
          "date": "Sun 17 Oct 2021 07:29",
          "username": "JAWS1600",
          "content": "A is the right answer",
          "upvote_count": "1"
        },
        {
          "id": 107134,
          "date": "Thu 14 Oct 2021 10:50",
          "username": "JAWS1600",
          "content": "Epheremal may not work in this case. Because of 100TB ( FILE size). Instance stores are not available to accomodate this size.<br>https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/volume_limits.html",
          "upvote_count": "2"
        },
        {
          "id": 99518,
          "date": "Tue 12 Oct 2021 22:02",
          "username": "NKnab",
          "content": "b is what aws wants you to do- https://aws.amazon.com/blogs/aws/run-amazon-elastic-mapreduce-on-ec2-spot-instances/",
          "upvote_count": "2"
        },
        {
          "id": 67377,
          "date": "Fri 08 Oct 2021 11:26",
          "username": "NNHANsam422",
          "content": "Answer is C<br>B spot instance might be interrupted any time.Requirement is cost effectivem , Amog comment makes sense",
          "upvote_count": "13"
        },
        {
          "id": 102203,
          "date": "Wed 13 Oct 2021 05:47",
          "username": "sam422",
          "content": "Requirement is cost effectivem , Amog comment makes sense",
          "upvote_count": "3"
        },
        {
          "id": 50950,
          "date": "Thu 07 Oct 2021 20:00",
          "username": "manishgp",
          "content": "Answer is B<br>See the emphasis on \\\"most cost-effective\\\"",
          "upvote_count": "4"
        },
        {
          "id": 18986,
          "date": "Wed 22 Sep 2021 10:11",
          "username": "skywalkerskywalkerexamacc",
          "content": "shouldn't this be \\\"A\\\" since there is no such thing as \\\"ethereal storage\\\" as mentioned in B?If \\\"B\\\" is refer to Ephemeral Storage... then the output will be lost the moment spot instance is terminate.. Output will thus be lost.. <br><br>Having output stored in EBS which is persistent is a better option.. right? So answer should still be \\\"A\\\"???I think B is ok assuming ephermal storage. as it is not the final destination. Final destination is still S3. It is talking about processed data i beleive.",
          "upvote_count": "225"
        },
        {
          "id": 18988,
          "date": "Thu 23 Sep 2021 12:53",
          "username": "skywalkerexamacc",
          "content": "If \\\"B\\\" is refer to Ephemeral Storage... then the output will be lost the moment spot instance is terminate.. Output will thus be lost.. <br><br>Having output stored in EBS which is persistent is a better option.. right? So answer should still be \\\"A\\\"???I think B is ok assuming ephermal storage. as it is not the final destination. Final destination is still S3. It is talking about processed data i beleive.",
          "upvote_count": "25"
        },
        {
          "id": 23435,
          "date": "Thu 23 Sep 2021 15:54",
          "username": "examacc",
          "content": "I think B is ok assuming ephermal storage. as it is not the final destination. Final destination is still S3. It is talking about processed data i beleive.",
          "upvote_count": "5"
        }
      ]
    },
    {
      "question_id": "#200",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In Amazon SNS, to send push notifications to mobile devices using Amazon SNS and ADM, you need to obtain the following, except:</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#200",
          "answers": [
            {
              "choice": "<p>A. Device token<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Client ID<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Registration ID<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Client secret<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 394469,
          "date": "Sun 07 Nov 2021 13:21",
          "username": "Pb55",
          "content": "D.  No need to have the Client Secret.",
          "upvote_count": "6"
        },
        {
          "id": 555717,
          "date": "Fri 25 Feb 2022 04:03",
          "username": "Sonujunko",
          "content": "The screen shot does not ask for Access Token<br><br>https://developer.amazon.com/docs/adm/integrate-your-app.html#test-adm",
          "upvote_count": "3"
        },
        {
          "id": 382267,
          "date": "Wed 03 Nov 2021 10:58",
          "username": "bamjive06",
          "content": "i go with D",
          "upvote_count": "2"
        },
        {
          "id": 321666,
          "date": "Sat 30 Oct 2021 16:39",
          "username": "MinasWang",
          "content": "Should be A.  The point is using SNS and ADM. SNS needs registration ID, but ADM needs registration ID, as well as OAuth Client Credentials ( which required client ID, client secret).<br>https://developer.amazon.com/docs/adm/overview.html",
          "upvote_count": "4"
        },
        {
          "id": 286053,
          "date": "Fri 29 Oct 2021 02:43",
          "username": "awsnoob",
          "content": "https://docs.aws.amazon.com/sns/latest/dg/sns-prerequisites-for-mobile-push-notifications.html<br><br>should be D",
          "upvote_count": "1"
        },
        {
          "id": 278579,
          "date": "Wed 27 Oct 2021 19:11",
          "username": "cirno",
          "content": "for B and D <br>OAuth Client Credentials (Client ID and Client secret).<br>https://developer.amazon.com/docs/adm/overview.html#identification-and-security<br><br>for A and C<br>Push noti service used \\\"device token\\\". FCM used \\\"registration ID\\\".<br>There is SNS and ADM. Not mentioned FCM.<br>https://docs.aws.amazon.com/sns/latest/dg/sns-prerequisites-for-mobile-push-notifications.html<br><br>Answer is C *EXCEPT*",
          "upvote_count": "2"
        },
        {
          "id": 278165,
          "date": "Wed 27 Oct 2021 10:19",
          "username": "Satya1405",
          "content": "you need to obtain the following, EXCEPT:<br>that helps to answer this",
          "upvote_count": "1"
        },
        {
          "id": 231175,
          "date": "Tue 26 Oct 2021 17:06",
          "username": "petebear55",
          "content": "Very clever .. answer D. .. just goes to show the importance off reading the question..",
          "upvote_count": "3"
        },
        {
          "id": 203104,
          "date": "Sat 23 Oct 2021 07:55",
          "username": "MIU",
          "content": "you need to obtain the following, EXCEPT:<br><br>So you should choose wrong one....",
          "upvote_count": "2"
        },
        {
          "id": 192595,
          "date": "Thu 21 Oct 2021 01:24",
          "username": "LeoChu01037ExtHo",
          "content": "Should be D<br><br>To begin using Amazon SNS mobile push notifications, you need the following:<br>* A set of credentials for connecting to one of the supported push notification services: ADM, APNs, Baidu, FCM, MPNS, or WNS.<br>* A device token or registration ID for the mobile app and device. (eliminate A.  Device token, C.  Registration ID)<br>* Amazon SNS configured to send push notification messages to the mobile endpoints.<br>* A mobile app that is registered and configured to use one of the supported push notification services. (eliminate B.  Client ID)* A mobile app that is registered and configured to use one of the supported push notification services. (eliminate B.  Client ID)<br><br>This one sounds far-fetched.<br>I think neither B nor D is neededAgreedD good elimination technique",
          "upvote_count": "221"
        },
        {
          "id": 376759,
          "date": "Sat 30 Oct 2021 18:27",
          "username": "01037",
          "content": "* A mobile app that is registered and configured to use one of the supported push notification services. (eliminate B.  Client ID)<br><br>This one sounds far-fetched.<br>I think neither B nor D is needed",
          "upvote_count": "2"
        },
        {
          "id": 316561,
          "date": "Sat 30 Oct 2021 01:00",
          "username": "ExtHo",
          "content": "AgreedD good elimination technique",
          "upvote_count": "1"
        },
        {
          "id": 173076,
          "date": "Wed 20 Oct 2021 23:27",
          "username": "Ganfeng",
          "content": "The answer should be A.  If you look at the SNS mobile push Console for ADM, it requires the Client ID and Client Secret. <br>Now out of the Device token or Registration ID, \\\"In the Endpoint Token box, enter either the token ID or registration ID, depending on which notification service. For example, with ADM and FCM you enter the registration ID. \\\"<br>https://docs.aws.amazon.com/sns/latest/dg/mobile-push-send-devicetoken.html",
          "upvote_count": "1"
        },
        {
          "id": 172700,
          "date": "Tue 19 Oct 2021 06:21",
          "username": "Krish812003",
          "content": "Here the question is referring to \\\"except\\\" in that case, the answer is B & D<br>Amazon SNS needs some of the information you provide to the push notification service in order to send direct push notification messages to the mobile endpoint. Generally speaking, you need the required credentials for connecting to the push notification service, a device token or registration ID (representing your mobile device and mobile app) received from the push notification service, and the mobile app registered with the push notification service.",
          "upvote_count": "1"
        },
        {
          "id": 113345,
          "date": "Fri 01 Oct 2021 23:36",
          "username": "demon42",
          "content": "Answer is A. <br>https://developer.amazon.com/docs/adm/overview.html#identification-and-security",
          "upvote_count": "2"
        },
        {
          "id": 81451,
          "date": "Wed 29 Sep 2021 21:14",
          "username": "doubled192",
          "content": "Correct answer is A",
          "upvote_count": "1"
        },
        {
          "id": 69716,
          "date": "Mon 27 Sep 2021 17:17",
          "username": "Exam_boy",
          "content": "https://docs.aws.amazon.com/sns/latest/dg/sns-prerequisites-for-mobile-push-notifications.html",
          "upvote_count": "1"
        },
        {
          "id": 54638,
          "date": "Mon 27 Sep 2021 10:19",
          "username": "Gorha",
          "content": "B & D correct! you don't need Client secret nor Client ID",
          "upvote_count": "2"
        },
        {
          "id": 54394,
          "date": "Mon 27 Sep 2021 08:42",
          "username": "Ming",
          "content": "A.  Registration ID is per devices that identifies the Device.",
          "upvote_count": "1"
        }
      ]
    }
  ]
}