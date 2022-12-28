var ExamTopic_201_300 = {
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#201",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>True or False: \"In the context of Amazon ElastiCache, from the application's point of view, connecting to the cluster configuration endpoint is no different than connecting directly to an individual cache node.\"</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#201",
          "answers": [
            {
              "choice": "<p>A. True, from the application's point of view, connecting to the cluster configuration endpoint is no different than connecting directly to an individual cache node since, each has a unique node identifier.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. True, from the application's point of view, connecting to the cluster configuration endpoint is no different than connecting directly to an individual cache node.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. False, you can connect to a cache node, but not to a cluster configuration endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. False, you can connect to a cluster configuration endpoint, but not to a cache node.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 256723,
          "date": "Thu 30 Sep 2021 15:45",
          "username": "kmaiti",
          "content": "B is correct<br>Ref: <br>https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Endpoints.html<br>https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/Endpoints.html",
          "upvote_count": "7"
        },
        {
          "id": 686253,
          "date": "Tue 04 Oct 2022 16:44",
          "username": "astalavista1",
          "content": "B - https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Endpoints.html",
          "upvote_count": "1"
        },
        {
          "id": 573430,
          "date": "Wed 23 Mar 2022 08:08",
          "username": "gorodetsky",
          "content": "Answer is A, Agree with cirno,",
          "upvote_count": "2"
        },
        {
          "id": 376768,
          "date": "Fri 22 Oct 2021 22:15",
          "username": "01037",
          "content": "ACD are wrong, but is B valid?<br>cluster configuration endpoint means cluster mode enabled, then there will be multiple shards, so connecting directly to an individual cache node means you can access only part of data but not all.",
          "upvote_count": "1"
        },
        {
          "id": 278611,
          "date": "Tue 05 Oct 2021 02:35",
          "username": "cirno",
          "content": "Application can also connect to any node in the cluster. Node endpoints resolve to specific endpoints.<br>So we need node unique address.<br><br>Answer is A. ",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#202",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization is setting up a highly scalable application using Elastic Beanstalk.<br>They are using Elastic Load Balancing (ELB) as well as a Virtual Private Cloud (VPC) with public and private subnets. They have the following requirements:<br>- All the EC2 instances should have a private IP<br>- All the EC2 instances should receive data via the ELB's.<br>Which of these will not be needed in this setup?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#202",
          "answers": [
            {
              "choice": "<p>A. Launch the EC2 instances with only the public subnet.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create routing rules which will route all inbound traffic from ELB to the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure ELB and NAT as a part of the public subnet only.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create routing rules which will route all outbound traffic from the EC2 instances through NAT.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 33374,
          "date": "Fri 01 Oct 2021 06:50",
          "username": "AmazonAu",
          "content": "A: EC2 in private subnet?",
          "upvote_count": "8"
        },
        {
          "id": 686254,
          "date": "Tue 04 Oct 2022 16:46",
          "username": "astalavista1",
          "content": "http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo-vpc.html",
          "upvote_count": "1"
        },
        {
          "id": 635792,
          "date": "Sun 24 Jul 2022 01:04",
          "username": "hilft",
          "content": "A.  <br>Why only in the public subnet?<br>You can still receive in private with NAT in public.",
          "upvote_count": "2"
        },
        {
          "id": 489071,
          "date": "Sun 28 Nov 2021 12:00",
          "username": "ryu10_09",
          "content": "the question is very tricky and annoying. it took me time. <br>it asked: \\\"which of these will UNecessary\\\" -> so A.  the other options are necessary more or less",
          "upvote_count": "1"
        },
        {
          "id": 376771,
          "date": "Tue 19 Oct 2021 07:34",
          "username": "01037",
          "content": "Yes it is A",
          "upvote_count": "2"
        },
        {
          "id": 340801,
          "date": "Sat 16 Oct 2021 20:52",
          "username": "blackgamer",
          "content": "Likely the question is wrong, B should be answer. But A answer seems to have typo.",
          "upvote_count": "1"
        },
        {
          "id": 329267,
          "date": "Fri 15 Oct 2021 16:31",
          "username": "anandbabu",
          "content": "D is correct",
          "upvote_count": "1"
        },
        {
          "id": 82058,
          "date": "Tue 05 Oct 2021 21:42",
          "username": "palominoghsotq",
          "content": "So am I the only one that is picking up that answer A says 'public subnet' not private subnet?Which is wrong!<br>A.  Launch the EC2 instances with only the public subnet.Please read the question againWhich of these will \\\"\\\"\\\"\\\"\\\"NOT\\\"\\\"\\\"\\\"\\\" be needed in this setup? Answer is A",
          "upvote_count": "37"
        },
        {
          "id": 86333,
          "date": "Wed 06 Oct 2021 21:04",
          "username": "ghsotq",
          "content": "Please read the question againWhich of these will \\\"\\\"\\\"\\\"\\\"NOT\\\"\\\"\\\"\\\"\\\" be needed in this setup? Answer is A",
          "upvote_count": "7"
        }
      ]
    },
    {
      "question_id": "#203",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An EC2 instance that performs source/destination checks by default is launched in a private VPC subnet. All security, NACL, and routing definitions are configured as expected. A custom NAT instance is launched.<br>Which of the following must be done for the custom NAT instance to work?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#203",
          "answers": [
            {
              "choice": "<p>A. The source/destination checks should be disabled on the NAT instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. The NAT instance should be launched in public subnet.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The NAT instance should be configured with a public IP address.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The NAT instance should be configured with an elastic IP address.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 552320,
          "date": "Sun 20 Feb 2022 22:56",
          "username": "johnnsmith",
          "content": "A is correct. The ask is \\\"must\\\". A is a must. B is not a must. C or D alone is not a must.",
          "upvote_count": "2"
        },
        {
          "id": 394476,
          "date": "Sat 23 Oct 2021 23:59",
          "username": "Pb55robertomartinez",
          "content": "Agree, question should be NOT and then D is correct.agree the question sux with weird mix of must and should, imho the whole question is wrong , but having an EIP on NAT instance is not an issue (often a solution to whitelist NAT IP into external firewall)",
          "upvote_count": "21"
        },
        {
          "id": 423466,
          "date": "Sat 30 Oct 2021 13:16",
          "username": "robertomartinez",
          "content": "agree the question sux with weird mix of must and should, imho the whole question is wrong , but having an EIP on NAT instance is not an issue (often a solution to whitelist NAT IP into external firewall)",
          "upvote_count": "1"
        },
        {
          "id": 389083,
          "date": "Sat 16 Oct 2021 00:03",
          "username": "DashL",
          "content": "A, B and either C or D (It should have an Elastic IP or a Public IP) are correct. Tgis isconfusing question.",
          "upvote_count": "1"
        },
        {
          "id": 380378,
          "date": "Fri 15 Oct 2021 18:49",
          "username": "kuroro",
          "content": "A & B are both correct",
          "upvote_count": "1"
        },
        {
          "id": 376790,
          "date": "Thu 14 Oct 2021 22:50",
          "username": "01037",
          "content": "I guess the question is which is NOT<br>then answer would be D",
          "upvote_count": "1"
        },
        {
          "id": 142371,
          "date": "Tue 05 Oct 2021 09:02",
          "username": "learner4evernewmeMansur",
          "content": "A is correct... but B is also correct... right?Also think so.Same here. B also correct.",
          "upvote_count": "211"
        },
        {
          "id": 230801,
          "date": "Fri 08 Oct 2021 23:44",
          "username": "newmeMansur",
          "content": "Also think so.Same here. B also correct.",
          "upvote_count": "11"
        },
        {
          "id": 288242,
          "date": "Sun 10 Oct 2021 14:18",
          "username": "Mansur",
          "content": "Same here. B also correct.",
          "upvote_count": "1"
        },
        {
          "id": 69441,
          "date": "Wed 22 Sep 2021 03:39",
          "username": "doyb",
          "content": "A is the right answer.",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#204",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization has created multiple components of a single application for compartmentalization. Currently all the components are hosted on a single EC2 instance. Due to security reasons the organization wants to implement two separate SSLs for the separate modules although it is already using VPC. <br>How can the organization achieve this with a single instance?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#204",
          "answers": [
            {
              "choice": "<p>A. You have to launch two instances each in a separate subnet and allow VPC peering for a single IP.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a VPC instance which will have multiple network interfaces with multiple elastic IP addresses.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a VPC instance which will have both the ACL and the security group attached to it and have separate rules for each IP address.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a VPC instance which will have multiple subnets attached to it and each will have a separate IP address.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 686255,
          "date": "Tue 04 Oct 2022 16:48",
          "username": "astalavista1",
          "content": "http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/MultipleIP.html",
          "upvote_count": "1"
        },
        {
          "id": 564912,
          "date": "Thu 10 Mar 2022 18:21",
          "username": "Sonujunko",
          "content": "Looks like question meant EC2 instead on VPC in the options.",
          "upvote_count": "1"
        },
        {
          "id": 497346,
          "date": "Thu 09 Dec 2021 06:16",
          "username": "cldy",
          "content": "B.  Create a VPC instance which will have multiple network interfaces with multiple elastic IP addresses.",
          "upvote_count": "2"
        },
        {
          "id": 423467,
          "date": "Sat 06 Nov 2021 02:37",
          "username": "robertomartinez",
          "content": "question makes no sense at all, let's just skip this very old question...",
          "upvote_count": "2"
        },
        {
          "id": 376796,
          "date": "Sun 26 Sep 2021 16:09",
          "username": "01037",
          "content": "Not quite understand the question.<br>SSL is bound to domain, so I could have multiple domains pointing to same IP, then I can have separate SSL, as long as the modules work with domain",
          "upvote_count": "1"
        },
        {
          "id": 278631,
          "date": "Wed 22 Sep 2021 16:15",
          "username": "cirno01037",
          "content": "This question seems old.<br><br>Now, SSL terminate on ELB using CNAME. Nothing mentioned about ELB in the question",
          "upvote_count": "21"
        },
        {
          "id": 376797,
          "date": "Fri 01 Oct 2021 06:29",
          "username": "01037",
          "content": "Nothing mentioned about ELB in the question",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#205",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization is making software for the CIA in USA.  CIA agreed to host the application on AWS but in a secure environment. The organization is thinking of hosting the application on the AWS GovCloud region. Which of the below mentioned difference is not correct when the organization is hosting on the AWS<br>GovCloud in comparison with the AWS standard region?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#205",
          "answers": [
            {
              "choice": "<p>A. The billing for the AWS GovCLoud will be in a different account than the Standard AWS account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. GovCloud region authentication is isolated from Amazon.com.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Physical and logical administrative access only to U.S. persons.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. It is physically isolated and has logical network isolation from all the other regions.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 543441,
          "date": "Wed 09 Feb 2022 01:29",
          "username": "jj22222",
          "content": "A looks right",
          "upvote_count": "2"
        },
        {
          "id": 514891,
          "date": "Sun 02 Jan 2022 10:02",
          "username": "krisvija12krisvija12",
          "content": "It is D .<br>The AWS GovCloud (US) Regions are physically isolated and have logical network isolation from all other AWS RegionsSorry changing it for A.  Its incorrect in question..",
          "upvote_count": "11"
        },
        {
          "id": 514892,
          "date": "Sun 02 Jan 2022 10:03",
          "username": "krisvija12",
          "content": "Sorry changing it for A.  Its incorrect in question..",
          "upvote_count": "1"
        },
        {
          "id": 514354,
          "date": "Sat 01 Jan 2022 05:35",
          "username": "cldy",
          "content": "A correct.",
          "upvote_count": "1"
        },
        {
          "id": 477967,
          "date": "Sun 14 Nov 2021 07:37",
          "username": "saptati",
          "content": "The correct answer is A, all AWS GovCloud (US) activity, usage, and payments are managed through a standard AWS account. https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/usage-and-payment.html",
          "upvote_count": "2"
        },
        {
          "id": 477243,
          "date": "Sat 13 Nov 2021 02:58",
          "username": "sashenka",
          "content": "AAA There's a 1:1 relationship between a GovCloud account and a Standard account. Due to ITAR there is no billing functionality or Cost Explorer, Budgets, etc in ones GovCloud account. It all gets passed through to its Standard account counterpart.",
          "upvote_count": "1"
        },
        {
          "id": 376801,
          "date": "Sun 31 Oct 2021 16:16",
          "username": "01037",
          "content": "I'll vote for A",
          "upvote_count": "3"
        },
        {
          "id": 278666,
          "date": "Tue 21 Sep 2021 07:11",
          "username": "cirnoExtHo",
          "content": "Answer is B<br><br>Traditional account login URL<br>https://signin.aws.amazon.com/signin<br><br>AWS GovCloud login URL<br>https://signin.amazonaws-us-gov.com/Question asking not correct",
          "upvote_count": "11"
        },
        {
          "id": 318260,
          "date": "Sun 31 Oct 2021 05:40",
          "username": "ExtHo",
          "content": "Question asking not correct",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#206",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>How does in-memory caching improve the performance of applications in ElastiCache?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#206",
          "answers": [
            {
              "choice": "<p>A. It improves application performance by deleting the requests that do not contain frequently accessed data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. It improves application performance by implementing good database indexing strategies.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. It improves application performance by using a part of instance RAM for caching important data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. It improves application performance by storing critical pieces of data in memory for low-latency access.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 655104,
          "date": "Wed 31 Aug 2022 15:16",
          "username": "Sizuma",
          "content": "In-memory caching adds a high-speed data storage layer to complement the primary database which reduces load times and increases performance with low latency.<br>option Dis correct",
          "upvote_count": "1"
        },
        {
          "id": 610790,
          "date": "Thu 02 Jun 2022 23:54",
          "username": "Ddssssss",
          "content": "In-memory caching improves application performance by storing critical pieces of data in memory for low-latency access.",
          "upvote_count": "2"
        },
        {
          "id": 610789,
          "date": "Thu 02 Jun 2022 23:53",
          "username": "Ddssssss",
          "content": "Amazon ElastiCache improves the performance of web applications by allowing you to retrieve information from a fast, managed, in-memory system, instead of relying entirely on slower disk-based databases.",
          "upvote_count": "1"
        },
        {
          "id": 606299,
          "date": "Mon 23 May 2022 21:49",
          "username": "user0001",
          "content": "A is the answer, it cache most used data set and purge or delete expired one , there is no concept of critical or important data",
          "upvote_count": "1"
        },
        {
          "id": 376802,
          "date": "Sun 17 Oct 2021 08:46",
          "username": "01037",
          "content": "Definitely D",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#207",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user is thinking to use EBS PIOPS volume.<br>Which of the below mentioned options is a right use case for the PIOPS EBS volume?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#207",
          "answers": [
            {
              "choice": "<p>A. Analytics<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. System boot volume<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Mongo DB<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Log processing<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 655105,
          "date": "Wed 31 Aug 2022 15:17",
          "username": "Sizuma",
          "content": "C correct",
          "upvote_count": "1"
        },
        {
          "id": 636263,
          "date": "Mon 25 Jul 2022 00:23",
          "username": "hilft",
          "content": "C. <br>Fast EBS = > DB. <br>Analytics - > you better use storage<br>Booting - > Non sense.",
          "upvote_count": "1"
        },
        {
          "id": 489783,
          "date": "Mon 29 Nov 2021 11:26",
          "username": "javiems",
          "content": "C.  https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html<br>\\\"...Provisioned IOPS SSD (io1 and io2) volumes are designed to meet the needs of I/O-intensive workloads, particularly database workloads, that are sensitive to storage performance and consistency...\\\"",
          "upvote_count": "1"
        },
        {
          "id": 377355,
          "date": "Sat 23 Oct 2021 19:23",
          "username": "010370103701037",
          "content": "https://www.google.com/amp/s/www.parkmycloud.com/blog/ebs-volume-types/amp/<br><br>Though not official, it seems database is a good use case of provisioned IOPS.So I'll choose Chttps://aws.amazon.com/ebs/features/<br><br>Here",
          "upvote_count": "111"
        },
        {
          "id": 377356,
          "date": "Sat 30 Oct 2021 16:59",
          "username": "0103701037",
          "content": "So I'll choose Chttps://aws.amazon.com/ebs/features/<br><br>Here",
          "upvote_count": "11"
        },
        {
          "id": 377588,
          "date": "Sun 31 Oct 2021 00:35",
          "username": "01037",
          "content": "https://aws.amazon.com/ebs/features/<br><br>Here",
          "upvote_count": "1"
        },
        {
          "id": 278675,
          "date": "Wed 20 Oct 2021 13:51",
          "username": "cirno",
          "content": "Question is not clear.<br>gp2 and gp3 are used for boot volumes.<br>io1 and io2 are used for intensive database workload.<br>st1 for log processing<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html",
          "upvote_count": "1"
        },
        {
          "id": 130270,
          "date": "Sun 26 Sep 2021 00:05",
          "username": "seamasPhat",
          "content": "b is correct. Only sad cloud use for boot volumeShould be C.  https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html<br>Refer: volume characteristics",
          "upvote_count": "12"
        },
        {
          "id": 160719,
          "date": "Tue 19 Oct 2021 17:29",
          "username": "Phat",
          "content": "Should be C.  https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html<br>Refer: volume characteristics",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#208",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>How can a user list the IAM Role configured as a part of the launch config?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#208",
          "answers": [
            {
              "choice": "<p>A. as-describe-launch-configs -iam-profile<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. as-describe-launch-configs -show-long<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. as-describe-launch-configs -iam-role<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. as-describe-launch-configs -role<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 655109,
          "date": "Wed 31 Aug 2022 15:20",
          "username": "Sizuma",
          "content": "As-describe-launch-configs describes all the launch config parameters created by the AWS account in the specified region. Generally, it returns values, such as Launch Config name, Instance Type and AMI ID.  If the user wants additional parameters, such as the IAM Profile used in the config, he has to run command:<br>as-describe-launch-configs –show-long<br>B is correct",
          "upvote_count": "1"
        },
        {
          "id": 636817,
          "date": "Mon 25 Jul 2022 18:15",
          "username": "hilft",
          "content": "out dated",
          "upvote_count": "1"
        },
        {
          "id": 540816,
          "date": "Sat 05 Feb 2022 08:12",
          "username": "HellGate",
          "content": "old syntax...<br>now use \\\"describe-launch-configurations\\\" on CLI to see many other values together.",
          "upvote_count": "1"
        },
        {
          "id": 394492,
          "date": "Thu 21 Oct 2021 13:51",
          "username": "Pb55",
          "content": "http://manpages.ubuntu.com/manpages/trusty/man1/as-describe-launch-configs.1.html",
          "upvote_count": "1"
        },
        {
          "id": 278686,
          "date": "Thu 30 Sep 2021 03:48",
          "username": "cirnoClandestine60blackgamer01037",
          "content": "Answer is A. <br>The name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance. The instance profile contains the IAM role.<br><br>https://docs.aws.amazon.com/cli/latest/reference/autoscaling/describe-launch-configurations.htmlNot A.  Question states -iam-profile as the option not -instanceprofileAgree, Answer is A. What does as-describe-launch-configs -iam-profile mean?",
          "upvote_count": "2111"
        },
        {
          "id": 536811,
          "date": "Mon 31 Jan 2022 11:01",
          "username": "Clandestine60",
          "content": "Not A.  Question states -iam-profile as the option not -instanceprofile",
          "upvote_count": "1"
        },
        {
          "id": 340858,
          "date": "Wed 20 Oct 2021 00:07",
          "username": "blackgamer01037",
          "content": "Agree, Answer is A. What does as-describe-launch-configs -iam-profile mean?",
          "upvote_count": "11"
        },
        {
          "id": 377358,
          "date": "Wed 20 Oct 2021 20:29",
          "username": "01037",
          "content": "What does as-describe-launch-configs -iam-profile mean?",
          "upvote_count": "1"
        },
        {
          "id": 247916,
          "date": "Sun 26 Sep 2021 01:28",
          "username": "FuriouZ",
          "content": "Question should be deleted...Syntax error for all of the possibilities...",
          "upvote_count": "1"
        },
        {
          "id": 241256,
          "date": "Thu 23 Sep 2021 00:28",
          "username": "consultsk",
          "content": "--show-long shows all of the returned values delimited by a character. it displays all details required. Correct answer is B",
          "upvote_count": "2"
        },
        {
          "id": 230810,
          "date": "Mon 20 Sep 2021 21:03",
          "username": "newme",
          "content": "question too old?<br>can't find any references about it",
          "upvote_count": "2"
        },
        {
          "id": 169173,
          "date": "Mon 20 Sep 2021 16:02",
          "username": "Neive",
          "content": "Should not be the answer - A?",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#209",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization is setting up a multi-site solution where the application runs on premise as well as on AWS to achieve the minimum recovery time objective(RTO).<br>Which of the below mentioned configurations will not meet the requirements of the multi-site solution scenario?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#209",
          "answers": [
            {
              "choice": "<p>A. Configure data replication based on RTO.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Keep an application running on premise as well as in AWS with full capacity.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Setup a single DB instance which will be accessed by both sites.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Setup a weighted DNS service like Route 53 to route traffic across sites.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 314601,
          "date": "Fri 24 Sep 2021 02:31",
          "username": "bachdxSunflyhomeExtHoM_Asep",
          "content": "Should be CWeight routing policy is much for Redundancy rather than Recovery.<br>Single DB instance may have HA issue. it's not related to recovery in the question.Question is about multi site solution where you need one to one copy of your infrastructure that's why its C only one site db will not workagree with C because they have to run on both side on prem as well as AWS",
          "upvote_count": "5213"
        },
        {
          "id": 322005,
          "date": "Mon 04 Oct 2021 16:51",
          "username": "SunflyhomeExtHo",
          "content": "Weight routing policy is much for Redundancy rather than Recovery.<br>Single DB instance may have HA issue. it's not related to recovery in the question.Question is about multi site solution where you need one to one copy of your infrastructure that's why its C only one site db will not work",
          "upvote_count": "21"
        },
        {
          "id": 332220,
          "date": "Mon 01 Nov 2021 00:13",
          "username": "ExtHo",
          "content": "Question is about multi site solution where you need one to one copy of your infrastructure that's why its C only one site db will not work",
          "upvote_count": "1"
        },
        {
          "id": 331068,
          "date": "Sat 16 Oct 2021 10:35",
          "username": "M_Asep",
          "content": "agree with C because they have to run on both side on prem as well as AWS",
          "upvote_count": "3"
        },
        {
          "id": 716012,
          "date": "Fri 11 Nov 2022 12:35",
          "username": "NathanvB99",
          "content": "C since having one DB is a single point of failure and makes it harder to make the RTO",
          "upvote_count": "1"
        },
        {
          "id": 693839,
          "date": "Thu 13 Oct 2022 13:39",
          "username": "Milina",
          "content": "C.  only one db. single point of failure.",
          "upvote_count": "1"
        },
        {
          "id": 655111,
          "date": "Wed 31 Aug 2022 15:21",
          "username": "Sizuma",
          "content": "C correct options",
          "upvote_count": "1"
        },
        {
          "id": 637654,
          "date": "Wed 27 Jul 2022 00:22",
          "username": "hilft",
          "content": "C.  only one db. single point of faillure",
          "upvote_count": "1"
        },
        {
          "id": 611621,
          "date": "Sun 05 Jun 2022 01:57",
          "username": "hilft",
          "content": "Answer is C. <br>We talk about disaster recovery system design. Single DB has HA issue.",
          "upvote_count": "1"
        },
        {
          "id": 606737,
          "date": "Tue 24 May 2022 15:30",
          "username": "bobsmith2000bobsmith2000",
          "content": "BCD are all about RTO.<br>Whereas A it's about RPO.<br><br>BCD are all contribute to shortest traffic switch possible. A is about backupsWith a second run I changed my mind to C. <br>Having only one instance in a one site is blatant error",
          "upvote_count": "11"
        },
        {
          "id": 612631,
          "date": "Tue 07 Jun 2022 10:05",
          "username": "bobsmith2000",
          "content": "With a second run I changed my mind to C. <br>Having only one instance in a one site is blatant error",
          "upvote_count": "1"
        },
        {
          "id": 508889,
          "date": "Sat 25 Dec 2021 00:06",
          "username": "vbal",
          "content": "is it RTO Vs RPO question..???",
          "upvote_count": "1"
        },
        {
          "id": 499158,
          "date": "Sat 11 Dec 2021 05:18",
          "username": "cldy",
          "content": "C.  Setup a single DB instance which will be accessed by both sites.",
          "upvote_count": "1"
        },
        {
          "id": 489749,
          "date": "Mon 29 Nov 2021 10:38",
          "username": "acloudguru",
          "content": "C is single DB",
          "upvote_count": "2"
        },
        {
          "id": 377359,
          "date": "Thu 04 Nov 2021 04:46",
          "username": "01037",
          "content": "Should be C",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#210",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which of the following is true of an instance profile when an IAM role is created using the console?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#210",
          "answers": [
            {
              "choice": "<p>A. The instance profile uses a different name.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The console gives the instance profile the same name as the role it corresponds to.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. The instance profile should be created manually by a user.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The console creates the role and instance profile as separate actions.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 655113,
          "date": "Wed 31 Aug 2022 15:23",
          "username": "Sizuma",
          "content": "When you create an IAM role using the console, the console creates an instance profile automatically and gives it the same name as the role it corresponds to<br>B is correct",
          "upvote_count": "1"
        },
        {
          "id": 425565,
          "date": "Sat 30 Oct 2021 08:54",
          "username": "FERIN_01",
          "content": "B. If you use the AWS Management Console to create a role for Amazon EC2, the console automatically creates an instance profile and gives it the same name as the role. When you then use the Amazon EC2 console to launch an instance with an IAM role, you can select a role to associate with the instance. In the console, the list that's displayed is actually a list of instance profile names. The console does not create an instance profile for a role that is not associated with Amazon EC2.",
          "upvote_count": "1"
        },
        {
          "id": 377376,
          "date": "Sat 02 Oct 2021 22:44",
          "username": "01037",
          "content": "yes it's B",
          "upvote_count": "2"
        },
        {
          "id": 331073,
          "date": "Fri 24 Sep 2021 03:05",
          "username": "M_Asep",
          "content": "Agree with B",
          "upvote_count": "1"
        },
        {
          "id": 298017,
          "date": "Wed 22 Sep 2021 07:29",
          "username": "ar2000",
          "content": "B.  confirmed in pluralsight video",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#211",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In the context of policies and permissions in AWS IAM, the Condition element is ____________.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#211",
          "answers": [
            {
              "choice": "<p>A. crucial while writing the IAM policies<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. an optional element<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. always set to null<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. a mandatory element<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 494116,
          "date": "Sun 05 Dec 2021 07:48",
          "username": "cldy",
          "content": "B.  an optional element",
          "upvote_count": "1"
        },
        {
          "id": 377378,
          "date": "Wed 20 Oct 2021 22:26",
          "username": "01037",
          "content": "Of course B",
          "upvote_count": "2"
        },
        {
          "id": 94258,
          "date": "Wed 13 Oct 2021 22:18",
          "username": "Joeytechn9t",
          "content": "Answer B<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#212",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which of the following is true while using an IAM role to grant permissions to applications running on Amazon EC2 instances?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#212",
          "answers": [
            {
              "choice": "<p>A. All applications on the instance share the same role, but different permissions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. All applications on the instance share multiple roles and permissions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Multiple roles are assigned to an EC2 instance at a time.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Only one role can be assigned to an EC2 instance at a time.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 497643,
          "date": "Thu 09 Dec 2021 11:57",
          "username": "cldy",
          "content": "D.  Only one role can be assigned to an EC2 instance at a time.",
          "upvote_count": "2"
        },
        {
          "id": 377379,
          "date": "Sat 06 Nov 2021 07:06",
          "username": "01037",
          "content": "sure D",
          "upvote_count": "1"
        },
        {
          "id": 331078,
          "date": "Sat 23 Oct 2021 09:49",
          "username": "M_Asep",
          "content": "Tested on Practice. agree with D",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#213",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>When using string conditions within IAM, short versions of the available comparators can be used instead of the more verbose ones. streqi is the short version of the _______ string condition.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#213",
          "answers": [
            {
              "choice": "<p>A. StringEqualsIgnoreCase<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. StringNotEqualsIgnoreCase<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. StringLikeStringEquals<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. StringNotEquals<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 655115,
          "date": "Wed 31 Aug 2022 15:30",
          "username": "Sizuma",
          "content": "When using string conditions within IAM, short versions of the available comparators can be used instead of the more verbose versions. For instance, streqi is the short version of StringEqualsIgnoreCase that checks for the exact match between two strings ignoring their case.<br>A is correct",
          "upvote_count": "1"
        },
        {
          "id": 636260,
          "date": "Mon 25 Jul 2022 00:17",
          "username": "hilft",
          "content": "A. <br>A guess work would be something like<br>str / eq / i<br>string equal ignore<br><br>I don't think this will be in SAP exam.",
          "upvote_count": "1"
        },
        {
          "id": 505649,
          "date": "Mon 20 Dec 2021 20:31",
          "username": "thomasjos79",
          "content": "A -->When using string conditions within IAM, short versions of the available comparators can be used<br>instead of the more verbose versions. For instance, streqi is the short version of<br>StringEqualsIgnoreCase that checks for the exact match between two strings ignoring their case.<br>http://awsdocs.s3.amazonaws.com/SNS/20100331/sns-gsg-2010-03-31.pdf",
          "upvote_count": "1"
        },
        {
          "id": 377381,
          "date": "Sun 31 Oct 2021 19:32",
          "username": "01037",
          "content": "Oh there's short version",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#214",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Attempts, one of the three types of items associated with the schedule pipeline in the AWS Data Pipeline, provides robust data management.<br>Which of the following statements is NOT true about Attempts?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#214",
          "answers": [
            {
              "choice": "<p>A. Attempts provide robust data management.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. AWS Data Pipeline retries a failed operation until the count of retries reaches the maximum number of allowed retry attempts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. An AWS Data Pipeline Attempt object compiles the pipeline components to create a set of actionable instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. AWS Data Pipeline Attempt objects track the various attempts, results, and failure reasons if applicable.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 655116,
          "date": "Wed 31 Aug 2022 15:31",
          "username": "Sizuma",
          "content": "Attempts, one of the three types of items associated with a schedule pipeline in AWS Data Pipeline, provides robust data management. AWS Data Pipeline retries a failed operation. It continues to do so until the task reaches the maximum number of allowed retry attempts. Attempt objects track the various attempts, results, and failure reasons if applicable. Essentially, it is the instance with a counter. AWS Data Pipeline performs retries using the same resources from the previous attempts, such as Amazon EMR clusters and EC2 instances.<br>C is correct",
          "upvote_count": "1"
        },
        {
          "id": 497641,
          "date": "Thu 09 Dec 2021 11:56",
          "username": "cldy",
          "content": "C.  An AWS Data Pipeline Attempt object compiles the pipeline components to create a set of actionable instances.",
          "upvote_count": "2"
        },
        {
          "id": 377383,
          "date": "Mon 01 Nov 2021 01:53",
          "username": "01037",
          "content": "Oh NOT true<br>It is C",
          "upvote_count": "1"
        },
        {
          "id": 331087,
          "date": "Fri 22 Oct 2021 02:31",
          "username": "M_Asep",
          "content": "Agree with C.  <br>Instances — When AWS Data Pipeline runs a pipeline, it compiles the pipeline components to create a set of actionable instances. Each instance contains all the information for performing a specific task. The complete set of instances is the to-do list of the pipeline. AWS Data Pipeline hands the instances out to task runners to process.<br><br>https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-how-tasks-scheduled.html",
          "upvote_count": "1"
        },
        {
          "id": 202477,
          "date": "Tue 19 Oct 2021 21:13",
          "username": "MIU",
          "content": "Choose \\\"NOT TRUE\\\" one...so the answer is C. ",
          "upvote_count": "3"
        },
        {
          "id": 100183,
          "date": "Mon 20 Sep 2021 22:16",
          "username": "meenu2225meenu2225purplejuicemeenu2225",
          "content": "B is the correct AnswerCorrection, Typo: A is the correct answerNOT TRUEThanks, C is the answer",
          "upvote_count": "1112"
        },
        {
          "id": 101028,
          "date": "Mon 27 Sep 2021 02:10",
          "username": "meenu2225purplejuicemeenu2225",
          "content": "Correction, Typo: A is the correct answerNOT TRUEThanks, C is the answer",
          "upvote_count": "112"
        },
        {
          "id": 106110,
          "date": "Thu 30 Sep 2021 12:00",
          "username": "purplejuicemeenu2225",
          "content": "NOT TRUEThanks, C is the answer",
          "upvote_count": "12"
        },
        {
          "id": 110900,
          "date": "Wed 13 Oct 2021 06:05",
          "username": "meenu2225",
          "content": "Thanks, C is the answer",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#215",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Select the correct statement about Amazon ElastiCache.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#215",
          "answers": [
            {
              "choice": "<p>A. It makes it easy to set up, manage, and scale a distributed in-memory cache environment in the cloud.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. It allows you to quickly deploy your cache environment only if you install software.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. It does not integrate with other Amazon Web Services.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. It cannot run in the Amazon Virtual Private Cloud (Amazon VPC) environment.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 532132,
          "date": "Tue 25 Jan 2022 13:57",
          "username": "aws01hilft",
          "content": "Does these questions appear in actual exam or just useless addition ?useless.<br>CLF exam level question",
          "upvote_count": "51"
        },
        {
          "id": 637529,
          "date": "Tue 26 Jul 2022 19:05",
          "username": "hilft",
          "content": "useless.<br>CLF exam level question",
          "upvote_count": "1"
        },
        {
          "id": 498624,
          "date": "Fri 10 Dec 2021 13:42",
          "username": "cldy",
          "content": "A.  It makes it easy to set up, manage, and scale a distributed in-memory cache environment in the cloud.",
          "upvote_count": "1"
        },
        {
          "id": 489093,
          "date": "Sun 28 Nov 2021 12:44",
          "username": "acloudguru",
          "content": "this is really easy one ,hope I can have it in my exam",
          "upvote_count": "2"
        },
        {
          "id": 377585,
          "date": "Sat 16 Oct 2021 01:21",
          "username": "01037",
          "content": "A<br>You don't even need to check BCD",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#216",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In Amazon RDS for PostgreSQL, you can provision up to 3TB storage and 30,000 IOPS per database instance. For a workload with 50% writes and 50% reads running on a cr1.8xlarge instance, you can realize over 25,000 IOPS for PostgreSQL. However, by provisioning more than this limit, you may be able to achieve:</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#216",
          "answers": [
            {
              "choice": "<p>A. higher latency and lower throughput.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. lower latency and higher throughput.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. higher throughput only.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. higher latency only.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 655120,
          "date": "Wed 31 Aug 2022 15:32",
          "username": "Sizuma",
          "content": "You can provision up to 3TB storage and 30,000 IOPS per database instance. For a workload with 50% writes and 50% reads running on a cr1.8xlarge instance, you can realize over 25,000 IOPS for PostgreSQL. However, by provisioning more than this limit, you may be able to achieve lower latency and higher throughput. Your actual realized IOPS may vary from the amount you provisioned based on your database workload, instance type, and database engine choice.<br>https://aws.amazon.com/rds/postgresql/<br>B is right",
          "upvote_count": "1"
        },
        {
          "id": 515429,
          "date": "Mon 03 Jan 2022 08:01",
          "username": "hansmong",
          "content": "Yeah this is obsolete, as of 2019 the max size is 64 TB with 80,000 iops https://aws.amazon.com/about-aws/whats-new/2019/05/amazon-rds-mysql-mariadb-postgresql-64tib-support/",
          "upvote_count": "1"
        },
        {
          "id": 389085,
          "date": "Thu 28 Oct 2021 06:08",
          "username": "DashL",
          "content": "Max Size now 64 TiB",
          "upvote_count": "1"
        },
        {
          "id": 377591,
          "date": "Fri 22 Oct 2021 01:05",
          "username": "01037",
          "content": "Why B<br>How to tell?",
          "upvote_count": "1"
        },
        {
          "id": 340964,
          "date": "Tue 12 Oct 2021 19:15",
          "username": "blackgamer",
          "content": "Very old question. the instance type mentioned here is already considered as previous generation instance type.",
          "upvote_count": "1"
        },
        {
          "id": 230824,
          "date": "Thu 07 Oct 2021 02:19",
          "username": "newmeExtHotahaRyski",
          "content": "What's the point of this question?Just to confuse students :)Like Seriously, who writes these questions?",
          "upvote_count": "331"
        },
        {
          "id": 332222,
          "date": "Sun 10 Oct 2021 11:50",
          "username": "ExtHo",
          "content": "Just to confuse students :)",
          "upvote_count": "3"
        },
        {
          "id": 523873,
          "date": "Sat 15 Jan 2022 02:30",
          "username": "tahaRyski",
          "content": "Like Seriously, who writes these questions?",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#217",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which of the following cannot be done using AWS Data Pipeline?</p>",
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
              "choice": "<p>A. Create complex data processing workloads that are fault tolerant, repeatable, and highly available.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Regularly access your data where it's stored, transform and process it at scale, and efficiently transfer the results to another AWS service.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Generate reports over data that has been stored.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Move data between different AWS compute and storage services as well as on premise data sources at specified intervals.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 637006,
          "date": "Tue 26 Jul 2022 02:06",
          "username": "hilft",
          "content": "C. <br>keyword here is 'reports'",
          "upvote_count": "1"
        },
        {
          "id": 577040,
          "date": "Mon 28 Mar 2022 20:43",
          "username": "ravisar",
          "content": "Looks like C is correct. There is no documentation about creating report. <br><br>AWS Data Pipeline helps you move, integrate, and process data across AWS compute and storage resources, as well as your on-premises resources. AWS Data Pipeline supports integration of data and activities across multiple AWS regions.",
          "upvote_count": "1"
        },
        {
          "id": 499409,
          "date": "Sat 11 Dec 2021 13:56",
          "username": "tkanmani76",
          "content": "D it is",
          "upvote_count": "2"
        },
        {
          "id": 377592,
          "date": "Sat 09 Oct 2021 22:29",
          "username": "01037",
          "content": "Yes<br>It's C",
          "upvote_count": "1"
        },
        {
          "id": 288385,
          "date": "Fri 24 Sep 2021 21:47",
          "username": "kmaiti",
          "content": "C is correct one.",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#218",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>AWS Direct Connect itself has NO specific resources for you to control access to. Therefore, there are no AWS Direct Connect Amazon Resource Names (ARNs) for you to use in an Identity and Access Management (IAM) policy.<br>With that in mind, how is it possible to write a policy to control access to AWS Direct Connect actions?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#218",
          "answers": [
            {
              "choice": "<p>A. You can leave the resource name field blank.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. You can choose the name of the AWS Direct Connection as the resource.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. You can use an asterisk (*) as the resource.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. You can create a name for the resource.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 40544,
          "date": "Sun 03 Oct 2021 16:14",
          "username": "amog",
          "content": "Answer is C<br>But now DirectConnect has provide ARNs<br>https://docs.aws.amazon.com/directconnect/latest/UserGuide/security_iam_service-with-iam.html",
          "upvote_count": "10"
        },
        {
          "id": 655121,
          "date": "Wed 31 Aug 2022 15:33",
          "username": "Sizuma",
          "content": "AWS Direct Connect itself has no specific resources for you to control access to. Therefore, there are no AWS Direct Connect ARNs for you to use in an IAM policy. You use an asterisk (*) as the resource when writing a policy to control access to AWS Direct Connect actions.<br>c is right",
          "upvote_count": "1"
        },
        {
          "id": 635790,
          "date": "Sun 24 Jul 2022 01:01",
          "username": "hilft",
          "content": "Outdated.<br>Just in case, memorize with keyword (*)",
          "upvote_count": "1"
        },
        {
          "id": 288392,
          "date": "Fri 08 Oct 2021 01:30",
          "username": "kmaiti01037",
          "content": "Question is bit old. Now it's possible to use direct connect arn as stated here : <br><br>https://docs.aws.amazon.com/directconnect/latest/UserGuide/security_iam_service-with-iam.html<br><br>This fine grained control. If this doesn't fulfill the requirement then star(*) can be used. For the sake of the question, C is correct choice here.Yes you are right",
          "upvote_count": "31"
        },
        {
          "id": 377593,
          "date": "Wed 20 Oct 2021 11:13",
          "username": "01037",
          "content": "Yes you are right",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#219",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Identify an application that polls AWS Data Pipeline for tasks and then performs those tasks.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#219",
          "answers": [
            {
              "choice": "<p>A. A task executor<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. A task deployer<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. A task runner<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. A task optimizer<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 655124,
          "date": "Wed 31 Aug 2022 15:35",
          "username": "Sizuma",
          "content": "A task runner is an application that polls AWS Data Pipeline for tasks and then performs those tasks.<br>c correct",
          "upvote_count": "1"
        },
        {
          "id": 655122,
          "date": "Wed 31 Aug 2022 15:34",
          "username": "Sizuma",
          "content": "C for sure 100%",
          "upvote_count": "1"
        },
        {
          "id": 377594,
          "date": "Sat 02 Oct 2021 11:39",
          "username": "01037",
          "content": "Sure C",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#220",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>With respect to AWS Lambda permissions model, at the time you create a Lambda function, you specify an IAM role that AWS Lambda can assume to execute your Lambda function on your behalf. This role is also referred to as the________role.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#220",
          "answers": [
            {
              "choice": "<p>A. configuration<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. execution<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. delegation<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. dependency<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 636265,
          "date": "Mon 25 Jul 2022 00:28",
          "username": "hilft",
          "content": "not sap level question though. I will guess with Lambda - > \\\"execution\\\"",
          "upvote_count": "1"
        },
        {
          "id": 558279,
          "date": "Mon 28 Feb 2022 20:36",
          "username": "Ni_yot",
          "content": "B for sure.",
          "upvote_count": "1"
        },
        {
          "id": 377595,
          "date": "Fri 08 Oct 2021 12:36",
          "username": "01037",
          "content": "Of course B",
          "upvote_count": "1"
        },
        {
          "id": 94746,
          "date": "Thu 30 Sep 2021 11:58",
          "username": "Joeytechn9t",
          "content": "Answer B<br>https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#221",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Within an IAM policy, can you add an IfExists condition at the end of a Null condition?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#221",
          "answers": [
            {
              "choice": "<p>A. Yes, you can add an IfExists condition at the end of a Null condition but not in all Regions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Yes, you can add an IfExists condition at the end of a Null condition depending on the condition.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. No, you cannot add an IfExists condition at the end of a Null condition.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Yes, you can add an IfExists condition at the end of a Null condition.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 655138,
          "date": "Wed 31 Aug 2022 15:46",
          "username": "Sizuma",
          "content": "Within an IAM policy, IfExists can be added to the end of any condition operator except the Null<br>condition. It can be used to indicate that conditional comparison needs to happen if the policy key<br>is present in the context of a request; otherwise, it can be ignored.<br>http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html C is correct",
          "upvote_count": "1"
        },
        {
          "id": 496725,
          "date": "Wed 08 Dec 2021 11:32",
          "username": "cldy",
          "content": "C.  No, you cannot add an IfExists condition at the end of a Null condition.",
          "upvote_count": "2"
        },
        {
          "id": 377596,
          "date": "Tue 28 Sep 2021 22:35",
          "username": "01037",
          "content": "Thank you",
          "upvote_count": "1"
        },
        {
          "id": 331140,
          "date": "Sat 25 Sep 2021 10:39",
          "username": "M_Asep0103701037",
          "content": "C<br>You can add IfExists to the end of any condition operator name except the Null condition—for example, StringLikeIfExists. You do this to say \\\"If the policy key is present in the context of the request, process the key as specified in the policy. If the key is not present, evaluate the condition element as true.\\\" Other condition elements in the statement can still result in a nonmatch, but not a missing key when checked with ...IfExists.Thank you<br>It's BI mean C",
          "upvote_count": "211"
        },
        {
          "id": 377597,
          "date": "Wed 29 Sep 2021 20:40",
          "username": "0103701037",
          "content": "Thank you<br>It's BI mean C",
          "upvote_count": "11"
        },
        {
          "id": 377598,
          "date": "Wed 27 Oct 2021 04:16",
          "username": "01037",
          "content": "I mean C",
          "upvote_count": "1"
        },
        {
          "id": 99546,
          "date": "Wed 22 Sep 2021 23:24",
          "username": "NKnab",
          "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_IfExists",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#222",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Regarding Identity and Access Management (IAM), Which type of special account belonging to your application allows your code to access Google services programmatically?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#222",
          "answers": [
            {
              "choice": "<p>A. Service account<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Simple Key<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. OAuth<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Code account<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 60647,
          "date": "Sun 19 Sep 2021 23:27",
          "username": "EricHo",
          "content": "LOL this question has nothing to do with AWS, it is GCP.",
          "upvote_count": "12"
        },
        {
          "id": 655140,
          "date": "Wed 31 Aug 2022 15:47",
          "username": "Sizuma",
          "content": "A service account is a special Google account that can be used by applications to access Google services programmatically. This account belongs to your application or a virtual machine (VM), instead of to an individual end user.<br>A is right",
          "upvote_count": "1"
        },
        {
          "id": 382319,
          "date": "Thu 04 Nov 2021 23:08",
          "username": "bamjive06",
          "content": "Interestingly, this question dates back to 2018 ish, though I never came across it in exams",
          "upvote_count": "1"
        },
        {
          "id": 379315,
          "date": "Wed 29 Sep 2021 20:49",
          "username": "01037",
          "content": "GCP😓😓😓",
          "upvote_count": "1"
        },
        {
          "id": 182741,
          "date": "Fri 24 Sep 2021 02:34",
          "username": "AlwaysLearning2020",
          "content": "Huh? What is this?",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#223",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>IAM users do not have permission to create Temporary Security Credentials for federated users and roles by default. In contrast, IAM users can call __________ without the need of any special permissions</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#223",
          "answers": [
            {
              "choice": "<p>A. GetSessionName<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. GetFederationToken<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. GetSessionToken<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. GetFederationName<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 655141,
          "date": "Wed 31 Aug 2022 15:48",
          "username": "Sizuma",
          "content": "Explanation/Reference:<br>Currently the STS API command GetSessionToken is available to every IAM user in your account without previous permission. In contrast, the GetFederationToken command is restricted and explicit permissions need to be granted so a user can issue calls to this particular Action. http:// docs.aws.amazon.com/STS/latest/UsingSTS/STSPermission.html<br><br>C is correct",
          "upvote_count": "1"
        },
        {
          "id": 497797,
          "date": "Thu 09 Dec 2021 15:30",
          "username": "cldy",
          "content": "C.  GetSessionToken",
          "upvote_count": "2"
        },
        {
          "id": 441680,
          "date": "Sun 31 Oct 2021 16:31",
          "username": "Kinnam",
          "content": "Answer is C. <br><br>GetFederationToken - Returns a set of temporary security credentials (consisting of an access key ID, a secret access key, and a security token) for a federated user.<br>https://docs.aws.amazon.com/STS/latest/APIReference/API_GetFederationToken.html<br><br>GetSessionToken - Returns a set of temporary credentials for an AWS account or **IAM user**.<br><br>QS: In contrast, **IAM** users can call__________. So, answer is C. ",
          "upvote_count": "1"
        },
        {
          "id": 425062,
          "date": "Tue 26 Oct 2021 09:08",
          "username": "littlecurly",
          "content": "Answer should be B<br>https://docs.aws.amazon.com/STS/latest/APIReference/API_GetFederationToken.html",
          "upvote_count": "1"
        },
        {
          "id": 69845,
          "date": "Sat 25 Sep 2021 06:32",
          "username": "Exam_boy01037",
          "content": "IAM users can also call GetSessionToken to create temporary security credentials. No permissions are required for a user to call GetSessionToken<br><br>https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_enable-create.htmlThank you",
          "upvote_count": "21"
        },
        {
          "id": 379325,
          "date": "Sun 24 Oct 2021 09:57",
          "username": "01037",
          "content": "Thank you",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#224",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization is planning to use NoSQL DB for its scalable data needs. The organization wants to host an application securely in AWS VPC. <br>What action can be recommended to the organization?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#224",
          "answers": [
            {
              "choice": "<p>A. The organization should setup their own NoSQL cluster on the AWS instance and configure route tables and subnets.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. The organization should only use a DynamoDB because by default it is always a part of the default subnet provided by AWS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The organization should use a DynamoDB while creating a table within the public subnet.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The organization should use a DynamoDB while creating a table within a private subnet.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 89207,
          "date": "Sat 09 Oct 2021 05:27",
          "username": "qianhaopower",
          "content": "DynamoDB cannot be put in VPC, but can use VPC endpoints now for VPC EC2 to access since 2017.",
          "upvote_count": "5"
        },
        {
          "id": 655143,
          "date": "Wed 31 Aug 2022 15:50",
          "username": "Sizuma",
          "content": "A is correct<br>Explanation:<br>The Amazon Virtual Private Cloud (Amazon VPC) allows the user to define a virtual networking environment in a private, isolated section of the Amazon Web Services (AWS) cloud. The user has complete control over the virtual networking environment. Currently VPC does not support DynamoDB. <br>Thus, if the user wants to implement VPC, he has to setup his own NoSQL DB within the VPC. <br>http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Introduction.html",
          "upvote_count": "1"
        },
        {
          "id": 581658,
          "date": "Wed 06 Apr 2022 09:07",
          "username": "Hasitha99",
          "content": "Feasible solution A . But there is another way to achieve security and performance through VPC endpoints.VPC endpoints for DynamoDB make it possible to define a secure path to access DynamoDB from a VPC.  It even enables Amazon EC2 instances in a VPC to use their private IP addresses to access DynamoDB with no exposure to the public internet.<br><br>Ref :https://dynobase.dev/dynamodb-vpc/",
          "upvote_count": "1"
        },
        {
          "id": 494308,
          "date": "Sun 05 Dec 2021 13:08",
          "username": "cldy",
          "content": "A.  The organization should setup their own NoSQL cluster on the AWS instance and configure route tables and subnets.",
          "upvote_count": "2"
        },
        {
          "id": 237773,
          "date": "Fri 05 Nov 2021 09:30",
          "username": "MichaelHuang",
          "content": "A is the only feasible solution, but definitely not a good or recommended solution.",
          "upvote_count": "3"
        },
        {
          "id": 217308,
          "date": "Thu 04 Nov 2021 05:52",
          "username": "TerrenceC",
          "content": "One more replenishments with respect to the VPC Gateway Endpoint. As of today (Nov 2020), both S3 and DynamoDB are touched via the public range. When those two Gateway Endpoints associated with the route table(s), you will see their public range respectively.",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#225",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>What happens when Dedicated instances are launched into a VPC?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#225",
          "answers": [
            {
              "choice": "<p>A. If you launch an instance into a VPC that has an instance tenancy of dedicated, you must manually create a Dedicated instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. If you launch an instance into a VPC that has an instance tenancy of dedicated, your instance is created as a Dedicated instance, only based on the tenancy of the instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. If you launch an instance into a VPC that has an instance tenancy of dedicated, your instance is automatically a Dedicated instance, regardless of the tenancy of the instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. None of these are true.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 655147,
          "date": "Wed 31 Aug 2022 15:52",
          "username": "Sizuma",
          "content": "C is for sure<br><br>If you launch an instance into a VPC that has an instance tenancy of dedicated , your instance is automatically a Dedicated Instance, regardless of the tenancy of the instance. For more information on creating a VPC and choosing the tenancy options, see Create a VPC in the Amazon VPC User Guide.",
          "upvote_count": "1"
        },
        {
          "id": 636901,
          "date": "Mon 25 Jul 2022 20:35",
          "username": "hilft",
          "content": "I saw this in Cloud practitioner exam<br>skip it",
          "upvote_count": "1"
        },
        {
          "id": 518904,
          "date": "Fri 07 Jan 2022 11:59",
          "username": "lucesarano",
          "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-usage-overview.html#creatingdedicatedvpc<br><br>C is the right answer.",
          "upvote_count": "3"
        },
        {
          "id": 487241,
          "date": "Fri 26 Nov 2021 11:03",
          "username": "ryu10_09",
          "content": "If you launch an instance into a VPC that has an instance tenancy of dedicated, your instance is automatically a Dedicated Instance, regardless of the tenancy of the instance<br>From this link: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-usage-overview.html#creatingdedicatedvpc<br><br>so answer is C",
          "upvote_count": "4"
        },
        {
          "id": 394670,
          "date": "Sat 06 Nov 2021 06:50",
          "username": "Pb55",
          "content": "A, B, C all wrong so has to be D. ",
          "upvote_count": "1"
        },
        {
          "id": 393919,
          "date": "Fri 05 Nov 2021 10:01",
          "username": "MrCarter",
          "content": "C for sure",
          "upvote_count": "2"
        },
        {
          "id": 243013,
          "date": "Sat 30 Oct 2021 05:40",
          "username": "consultsk",
          "content": "This is an ambiguous question and answer. Besides, outdated. I will go with C that makes more sense if comes in the exam.",
          "upvote_count": "2"
        },
        {
          "id": 230860,
          "date": "Wed 13 Oct 2021 22:02",
          "username": "newme",
          "content": "C is definitely wrong, so B or D?<br>What does A mean?",
          "upvote_count": "1"
        },
        {
          "id": 230859,
          "date": "Tue 12 Oct 2021 21:54",
          "username": "newme",
          "content": "C is definitely wrong, so B or D?<br>What does A mean?",
          "upvote_count": "1"
        },
        {
          "id": 73498,
          "date": "Thu 07 Oct 2021 21:20",
          "username": "frankzeng01037",
          "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-instance.html<br><br>Tenancy Value\tDescription<br>default<br><br>An instance launched into the VPC runs on shared hardware by default, unless you explicitly specify a different tenancy during instance launch.<br><br>dedicated<br><br>An instance launched into the VPC is a Dedicated Instance by default, unless you explicitly specify a tenancy of host during instance launch. You cannot specify a tenancy of default during instance launch.So no correct answer here",
          "upvote_count": "11"
        },
        {
          "id": 379329,
          "date": "Fri 05 Nov 2021 01:34",
          "username": "01037",
          "content": "So no correct answer here",
          "upvote_count": "1"
        },
        {
          "id": 70794,
          "date": "Wed 29 Sep 2021 12:55",
          "username": "sergza",
          "content": "I do not think it s correct answer as of now An instance launched into the VPC is a Dedicated Instance by default, unless you explicitly specify a tenancy of host during instance launch. You cannot specify a tenancy of default during instance launch.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#226",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization is setting up RDS for their applications. The organization wants to secure RDS access with VPC. <br>Which of the following options is not required while designing the RDS with VPC?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#226",
          "answers": [
            {
              "choice": "<p>A. The organization must create a subnet group with public and private subnets. Both the subnets can be in the same or separate AZ.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. The organization should keep minimum of one IP address in each subnet reserved for RDS failover.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. If the organization is connecting RDS from the internet it must enable the VPC attributes DNS hostnames and DNS resolution.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The organization must create a subnet group with VPC using more than one subnet which are a part of separate AZs.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 655150,
          "date": "Wed 31 Aug 2022 15:53",
          "username": "Sizuma",
          "content": "A is right<br>Explanation:<br>A Virtual Private Cloud (VPC) is a virtual network dedicated to the user’s AWS account. It enables the user to launch AWS resources, such as RDS into a virtual network that the user has defined. Subnets are segments of a VPC’s IP address range that the user can designate to a group of VPC resources based on security and operational needs. A DB subnet group is a collection of subnets (generally private) that the user can create in a VPC and assign to the RDS DB instances. A DB subnet group allows the user to specify a particular VPC when creating the DB instances.<br>Each DB subnet group should have subnets in at least two Availability Zones in a given region. If the RDS instance is required to be accessible from the internet the organization must enable the VPC attributes, DNS hostnames and DNS resolution. For each RDS DB instance that the user runs in a VPC, he should reserve at least one address in each subnet in the DB subnet group for use by Amazon RDS for recovery actions.",
          "upvote_count": "1"
        },
        {
          "id": 277692,
          "date": "Sun 24 Oct 2021 23:59",
          "username": "aimar047",
          "content": "Invalid question..",
          "upvote_count": "1"
        },
        {
          "id": 237785,
          "date": "Fri 22 Oct 2021 22:27",
          "username": "MichaelHuang",
          "content": "Badly phrased question.",
          "upvote_count": "1"
        },
        {
          "id": 230861,
          "date": "Thu 30 Sep 2021 08:42",
          "username": "newme",
          "content": "Does the question and answers even have anything to do with each other?",
          "upvote_count": "1"
        },
        {
          "id": 169280,
          "date": "Sat 25 Sep 2021 05:59",
          "username": "Neive01037",
          "content": "Answer is A.  Subnet group needs not to include both private and public subnetYes you are right.<br>But BCD have nothing to do with secure access of RDS",
          "upvote_count": "21"
        },
        {
          "id": 379330,
          "date": "Fri 29 Oct 2021 22:56",
          "username": "01037",
          "content": "Yes you are right.<br>But BCD have nothing to do with secure access of RDS",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#227",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You create a VPN connection, and your VPN device supports Border Gateway Protocol (BGP).<br>Which of the following should be specified to configure the VPN connection?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#227",
          "answers": [
            {
              "choice": "<p>A. Classless routing<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Classfull routing<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Dynamic routing<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Static routing<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 379331,
          "date": "Mon 04 Oct 2021 02:28",
          "username": "01037lujunzizi",
          "content": "Can I say BCP = dynamic routing?yes, u can",
          "upvote_count": "52"
        },
        {
          "id": 407465,
          "date": "Thu 28 Oct 2021 09:20",
          "username": "lujunzizi",
          "content": "yes, u can",
          "upvote_count": "2"
        },
        {
          "id": 655152,
          "date": "Wed 31 Aug 2022 15:54",
          "username": "Sizuma",
          "content": "If your VPN device supports Border Gateway Protocol (BGP), you need to specify dynamic routing when you configure your VPN connection<br><br>C is correct",
          "upvote_count": "1"
        },
        {
          "id": 636818,
          "date": "Mon 25 Jul 2022 18:15",
          "username": "hilft",
          "content": "BGP = dynamic",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#228",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization has developed an application which provides a smarter shopping experience. They need to show a demonstration to various stakeholders who may not be able to access the in premise application so they decide to host a demo version of the application on AWS.<br>Consequently, they will need a fixed elastic IP attached automatically to the instance when it is launched.<br>In this scenario which of the below mentioned options will not help assign the elastic IP automatically?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#228",
          "answers": [
            {
              "choice": "<p>A. Write a script which will fetch the instance metadata on system boot and assign the public IP using that metadata.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Provide an elastic IP in the user data and setup a bootstrapping script which will fetch that elastic IP and assign it to the instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a controlling application which launches the instance and assigns the elastic IP based on the parameter provided when that instance is booted.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Launch instance with VPC and assign an elastic IP to the primary network interface.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 128061,
          "date": "Sun 24 Oct 2021 09:30",
          "username": "ramikhreimLeoChu01037",
          "content": "its A , its assigned public IP not Elastic IPsmart thoughtyes it's A",
          "upvote_count": "1022"
        },
        {
          "id": 193301,
          "date": "Tue 02 Nov 2021 00:48",
          "username": "LeoChu",
          "content": "smart thought",
          "upvote_count": "2"
        },
        {
          "id": 379348,
          "date": "Sun 07 Nov 2021 09:35",
          "username": "01037",
          "content": "yes it's A",
          "upvote_count": "2"
        },
        {
          "id": 621379,
          "date": "Fri 24 Jun 2022 02:07",
          "username": "Murtazaarif",
          "content": "A is talking about public ip not elastic ip",
          "upvote_count": "2"
        },
        {
          "id": 546224,
          "date": "Sun 13 Feb 2022 05:28",
          "username": "RVivek",
          "content": "The below command will add EIP to instance as priary IP<br>aws ec2 associate-address --instance-id $INSTANCE_ID --allocation-id $ALLOC_ID --allow-reassociation}",
          "upvote_count": "1"
        },
        {
          "id": 496613,
          "date": "Wed 08 Dec 2021 08:40",
          "username": "cldy",
          "content": "A.  Write a script which will fetch the instance metadata on system boot and assign the public IP using that metadata.",
          "upvote_count": "1"
        },
        {
          "id": 98593,
          "date": "Mon 11 Oct 2021 07:45",
          "username": "JAWS1600",
          "content": "Here is example of Elastic IP in user_data<br># curl -s http://169.254.169.254/latest/user-data<br>elastic-ip=23.23.232.241|hostname=ip-test.aws-idev.com",
          "upvote_count": "1"
        },
        {
          "id": 93648,
          "date": "Thu 23 Sep 2021 11:10",
          "username": "JAWS1600JAWS1600",
          "content": "A. <br>https://ranjan01.wordpress.com/web-servers/how-to-automate-elastic-ip-assignment-on-ec2-instance-restart-or-reboot/This option is upon reboot. Question is asking , when EC2 is launched. This means instance has no OS . Unless you are using an AMI, which has script built in, it may not work. More over when instance is launched the elastic IP has to be fetched from user-data, so script can be executed to attach it.Correct option is B",
          "upvote_count": "12"
        },
        {
          "id": 98590,
          "date": "Wed 29 Sep 2021 21:28",
          "username": "JAWS1600",
          "content": "This option is upon reboot. Question is asking , when EC2 is launched. This means instance has no OS . Unless you are using an AMI, which has script built in, it may not work. More over when instance is launched the elastic IP has to be fetched from user-data, so script can be executed to attach it.Correct option is B",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#229",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization is having a VPC for the HR department, and another VPC for the Admin department. The HR department requires access to all the instances running in the Admin VPC while the Admin department requires access to all the resources in the HR department.<br>How can the organization setup this scenario?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#229",
          "answers": [
            {
              "choice": "<p>A. Setup VPC peering between the VPCs of Admin and HR.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Setup ACL with both VPCs which will allow traffic from the CIDR of the other VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Setup the security group with each VPC which allows traffic from the CIDR of another VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. It is not possible to connect resources of one VPC from another VPC. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 655154,
          "date": "Wed 31 Aug 2022 15:55",
          "username": "Sizuma",
          "content": "A is correct<br>Explanation:<br>A Virtual Private Cloud (VPC) is a virtual network dedicated to the user’s AWS account. It enables the user to launch AWS resources into a virtual network that the user has defined.<br>A VPC peering connection allows the user to route traffic between the peer VPCs using private IP addresses as if they are a part of the same network.<br>This is helpful when one VPC from the same or different AWS account wants to connect with resources of the other VPC. ",
          "upvote_count": "1"
        },
        {
          "id": 498676,
          "date": "Fri 10 Dec 2021 15:11",
          "username": "cldy",
          "content": "A.  Setup VPC peering between the VPCs of Admin and HR.",
          "upvote_count": "3"
        },
        {
          "id": 489104,
          "date": "Sun 28 Nov 2021 12:58",
          "username": "acloudguru",
          "content": "hope i can have such easy question in my exam",
          "upvote_count": "3"
        },
        {
          "id": 230884,
          "date": "Wed 22 Sep 2021 19:56",
          "username": "newme",
          "content": "A sure can meet the requirements.<br>But by using VPC peering, the HR department requires access to not just running instances but all the resources in the Admin VPC. ",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#230",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Can a Direct Connect link be connected directly to the Internet?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#230",
          "answers": [
            {
              "choice": "<p>A. Yes, this can be done if you pay for it.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Yes, this can be done only for certain regions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Yes<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. No<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 655155,
          "date": "Wed 31 Aug 2022 15:56",
          "username": "Sizuma",
          "content": "D is right<br>AWS Direct Connect is a network service that provides an alternative to using the Internet to utilize AWS cloud service. Hence, a Direct Connect link cannot be connected to the Internet directly.",
          "upvote_count": "1"
        },
        {
          "id": 497570,
          "date": "Thu 09 Dec 2021 11:03",
          "username": "cldy",
          "content": "D.  No not possible to connect DC directly to Internet.",
          "upvote_count": "2"
        },
        {
          "id": 494641,
          "date": "Sun 05 Dec 2021 21:32",
          "username": "CloudyTexas",
          "content": "dooohh.....this questions belong to cloud practitioner exam....NOT SA Pro exam..!",
          "upvote_count": "1"
        },
        {
          "id": 382325,
          "date": "Fri 05 Nov 2021 03:20",
          "username": "bamjive06",
          "content": "\\\"Direct\\\" to AWS...",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#231",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>ABC has created a multi-tenant Learning Management System (LMS). The application is hosted for five different tenants (clients) in the VPCs of the respective<br>AWS accounts of the tenant. ABC wants to setup a centralized server which can connect with the LMS of each tenant upgrade if required. ABC also wants to ensure that one tenant VPC should not be able to connect to the other tenant VPC for security reasons.<br>How can ABC setup this scenario?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#231",
          "answers": [
            {
              "choice": "<p>A. ABC has to setup one centralized VPC which will peer in to all the other VPCs of the tenants.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. ABC should setup VPC peering with all the VPCs peering each other but block the IPs from CIDR of the tenant VPCs to deny them.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. ABC should setup all the VPCs with the same CIDR but have a centralized VPC.  This way only the centralized VPC can talk to the other VPCs using VPC peering.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. ABC should setup all the VPCs meshed together with VPC peering for all VPCs.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 287446,
          "date": "Mon 20 Sep 2021 16:43",
          "username": "awsnoob01037ryu10_09",
          "content": "Ans A.  Although if you have more than 5 VPC to peer, you should use Transit GatewayTransit Gateway is used for multiple VPCs connecting to each other.<br>A is more suitable for the situation of the question.you want to say 50 peering per VPC not 5",
          "upvote_count": "512"
        },
        {
          "id": 379351,
          "date": "Wed 22 Sep 2021 03:51",
          "username": "01037",
          "content": "Transit Gateway is used for multiple VPCs connecting to each other.<br>A is more suitable for the situation of the question.",
          "upvote_count": "1"
        },
        {
          "id": 489320,
          "date": "Sun 28 Nov 2021 18:58",
          "username": "ryu10_09",
          "content": "you want to say 50 peering per VPC not 5",
          "upvote_count": "2"
        },
        {
          "id": 655171,
          "date": "Wed 31 Aug 2022 16:18",
          "username": "Sizuma",
          "content": "Explanation:<br>A Virtual Private Cloud (VPC) is a virtual network dedicated to the user's AWS account. It enables the user to launch AWS resources into a virtual network that the user has defined. A VPC peering connection allows the user to route traffic between the peer VPCs using private IP addresses as if they are a part of the same network.<br>This is helpful when one VPC from the same or different AWS account wants to connect with resources of the other VPC.  The organization wants to setup that one VPC can connect with all the other VPCs but all other VPCs cannot connect among each other. This can be achieved by configuring VPC peering where one VPC is peered with all the other VPCs, but the other VPCs are not peered to each other. The VPCs are in the same or a separate AWS account and should not have overlapping CIDR blocks. <br>http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide/peering-configurations-full-access.html#many-vpcs-full-acces<br><br>A right options",
          "upvote_count": "1"
        },
        {
          "id": 538339,
          "date": "Wed 02 Feb 2022 03:37",
          "username": "HellGateChuky64",
          "content": "C seems more strong way than A. The subnets have the same CIDR, how to enrute the taffic?",
          "upvote_count": "41"
        },
        {
          "id": 613422,
          "date": "Wed 08 Jun 2022 19:31",
          "username": "Chuky64",
          "content": "The subnets have the same CIDR, how to enrute the taffic?",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#232",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user has created a VPC with CIDR 20.0.0.0/16. The user has created one subnet with CIDR 20.0.0.0/16 in this VPC.  The user is trying to create another subnet with the same VPC for CIDR 20.0.0.1/24.<br>What will happen in this scenario?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#232",
          "answers": [
            {
              "choice": "<p>A. The VPC will modify the first subnet CIDR automatically to allow the second subnet IP range<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The second subnet will be created<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. It will throw a CIDR overlaps error<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. It is not possible to create a subnet with the same CIDR as VPC<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 598747,
          "date": "Mon 09 May 2022 00:33",
          "username": "user0001",
          "content": "C ,<br>Subnet sizing<br>The CIDR block of a subnet can be the same as the CIDR block for the VPC (for a single subnet in the VPC), or a subset of the CIDR block for the VPC (to create multiple subnets in the VPC). The allowed block size is between a /28 netmask and /16 netmask. If you create more than one subnet in a VPC, the CIDR blocks of the subnets cannot overlap<br>https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html",
          "upvote_count": "1"
        },
        {
          "id": 578447,
          "date": "Wed 30 Mar 2022 19:50",
          "username": "Mechanicfbourdet",
          "content": "C. <br>D is correct, but it's a description of how VPC works, not a scenario that'll happen (as stated in the question).<br>One more way to look at it, the consol will show a UI error and will not permit the creation at all.C. <br>D is not correct at all. It IS possible to create a subnet with the same CIDR as VPC",
          "upvote_count": "11"
        },
        {
          "id": 596413,
          "date": "Tue 03 May 2022 16:05",
          "username": "fbourdet",
          "content": "C. <br>D is not correct at all. It IS possible to create a subnet with the same CIDR as VPC",
          "upvote_count": "1"
        },
        {
          "id": 495981,
          "date": "Tue 07 Dec 2021 13:35",
          "username": "cldy",
          "content": "C.  It will throw a CIDR overlaps error",
          "upvote_count": "1"
        },
        {
          "id": 379352,
          "date": "Wed 27 Oct 2021 08:49",
          "username": "01037",
          "content": "C for sure",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#233",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>True or False: The Amazon ElastiCache clusters are not available for use in VPC at this time.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#233",
          "answers": [
            {
              "choice": "<p>A. TRUE<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. True, but they are available only in the GovCloud.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. True, but they are available only on request<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. FALSE<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 655173,
          "date": "Wed 31 Aug 2022 16:20",
          "username": "Sizuma",
          "content": "False D",
          "upvote_count": "1"
        },
        {
          "id": 624346,
          "date": "Wed 29 Jun 2022 02:33",
          "username": "TechX",
          "content": "It's D<br>https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/VPCs.EC. html",
          "upvote_count": "1"
        },
        {
          "id": 382326,
          "date": "Thu 21 Oct 2021 15:48",
          "username": "bamjive06",
          "content": "2012...?",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#234",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In Amazon Redshift, how many slices does a dw2.8xlarge node have?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#234",
          "answers": [
            {
              "choice": "<p>A. 16<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. 8<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. 32</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. 2<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 588104,
          "date": "Tue 19 Apr 2022 13:15",
          "username": "bobsmith2000",
          "content": "Am I supposed to know that for the exam? It's bananas!!<br>I don't believe it.",
          "upvote_count": "5"
        },
        {
          "id": 568971,
          "date": "Wed 16 Mar 2022 10:42",
          "username": "kenchou73",
          "content": "dw2.8xlarge => dc1.8xlarge => 32 slices<br>https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html",
          "upvote_count": "2"
        },
        {
          "id": 566186,
          "date": "Sat 12 Mar 2022 14:53",
          "username": "d18mph23",
          "content": "dw2.8xlarge is the previous name of dc1.8xlarge, this one has 32 slices per node.<br><br>https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-about-clusters-and-nodes",
          "upvote_count": "1"
        },
        {
          "id": 544244,
          "date": "Thu 10 Feb 2022 02:38",
          "username": "jyrajan69",
          "content": "C.  The answer is herehttps://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html",
          "upvote_count": "1"
        },
        {
          "id": 530586,
          "date": "Sun 23 Jan 2022 15:21",
          "username": "pawases",
          "content": "current name for dw2.8xlarge is dc1.8xlarge. So C is correct answer",
          "upvote_count": "1"
        },
        {
          "id": 521070,
          "date": "Mon 10 Jan 2022 20:20",
          "username": "AnonymousJhb",
          "content": "https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-about-clusters-and-nodes",
          "upvote_count": "2"
        },
        {
          "id": 494213,
          "date": "Sun 05 Dec 2021 11:10",
          "username": "cldyAnonymousJhb",
          "content": "A.  16 slices.Wrong, it's C<br>Read the page thoroughly<br>https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-about-clusters-and-nodes",
          "upvote_count": "32"
        },
        {
          "id": 521068,
          "date": "Mon 10 Jan 2022 20:20",
          "username": "AnonymousJhb",
          "content": "Wrong, it's C<br>Read the page thoroughly<br>https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-about-clusters-and-nodes",
          "upvote_count": "2"
        },
        {
          "id": 477980,
          "date": "Sun 14 Nov 2021 08:08",
          "username": "gingerbytes",
          "content": "A.  16.\\\"The disk storage for a compute node is divided into a number of slices. The number of slices per node depends on the node size of the cluster. For example, each DS2.XL compute node has two slices, and each DS2.8XL compute node has 16 slices\\\"",
          "upvote_count": "1"
        },
        {
          "id": 277714,
          "date": "Fri 29 Oct 2021 15:03",
          "username": "aimar047",
          "content": "https://docs.aws.amazon.com/redshift/latest/dg/t_Distributing_data.html<br>16 slices",
          "upvote_count": "1"
        },
        {
          "id": 277713,
          "date": "Thu 28 Oct 2021 15:06",
          "username": "aimar047GeniusMikeLiu",
          "content": "is this really an exam question?I wonder this too, do we need memorize this number for SAP Exam?",
          "upvote_count": "21"
        },
        {
          "id": 497325,
          "date": "Thu 09 Dec 2021 05:43",
          "username": "GeniusMikeLiu",
          "content": "I wonder this too, do we need memorize this number for SAP Exam?",
          "upvote_count": "1"
        },
        {
          "id": 122531,
          "date": "Mon 11 Oct 2021 14:26",
          "username": "manoj101fcbfloJustu01037",
          "content": "Answer is Adc1.8xlarge = 32 (Default slices per node) so C !This is the correct Answer: C.  Read this: <br>https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html<br>dw2.8xlarge has been renamed to dc1.8xlarge as bertman commented.Thanks",
          "upvote_count": "1331"
        },
        {
          "id": 144615,
          "date": "Thu 21 Oct 2021 03:48",
          "username": "fcbfloJustu01037",
          "content": "dc1.8xlarge = 32 (Default slices per node) so C !This is the correct Answer: C.  Read this: <br>https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html<br>dw2.8xlarge has been renamed to dc1.8xlarge as bertman commented.Thanks",
          "upvote_count": "331"
        },
        {
          "id": 266107,
          "date": "Thu 28 Oct 2021 03:17",
          "username": "Justu01037",
          "content": "This is the correct Answer: C.  Read this: <br>https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html<br>dw2.8xlarge has been renamed to dc1.8xlarge as bertman commented.Thanks",
          "upvote_count": "31"
        },
        {
          "id": 379354,
          "date": "Fri 05 Nov 2021 09:55",
          "username": "01037",
          "content": "Thanks",
          "upvote_count": "1"
        },
        {
          "id": 82022,
          "date": "Fri 08 Oct 2021 14:16",
          "username": "bertman",
          "content": "A = 32 <br>https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html<br>dw2.8xlargehas been renamed to dc1.8xlarge",
          "upvote_count": "4"
        },
        {
          "id": 71788,
          "date": "Fri 01 Oct 2021 03:57",
          "username": "sergza",
          "content": "I think it is 16 The disk storage for a compute node is divided into a number of slices. The number of slices per node depends on the node size of the cluster. For example, each DS2.XL compute node has two slices, and each DS2.8XL compute node has 16 slices.",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#235",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Identify a true statement about using an IAM role to grant permissions to applications running on Amazon EC2 instances.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#235",
          "answers": [
            {
              "choice": "<p>A. When AWS credentials are rotated; developers have to update only the root Amazon EC2 instance that uses their credentials.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. When AWS credentials are rotated, developers have to update only the Amazon EC2 instance on which the password policy was applied and which uses their credentials.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. When AWS credentials are rotated, you don't have to manage credentials and you don't have to worry about long-term security risks.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. When AWS credentials are rotated, you must manage credentials and you should consider precautions for long-term security risks.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 497358,
          "date": "Thu 09 Dec 2021 06:36",
          "username": "cldy",
          "content": "C.  When AWS credentials are rotated, you don't have to manage credentials and you don't have to worry about long-term security risks.",
          "upvote_count": "3"
        },
        {
          "id": 484664,
          "date": "Tue 23 Nov 2021 01:38",
          "username": "acloudguru",
          "content": "hope I can have this questionin my exam",
          "upvote_count": "1"
        },
        {
          "id": 379355,
          "date": "Wed 27 Oct 2021 15:52",
          "username": "01037",
          "content": "C is correct",
          "upvote_count": "1"
        },
        {
          "id": 240558,
          "date": "Sat 23 Oct 2021 09:35",
          "username": "MichaelHuang",
          "content": "AWS credentials is confusing, AWS role credentials would be clearer.",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#236",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Out of the striping options available for the EBS volumes, which one has the following disadvantage:<br>'Doubles the amount of I/O required from the instance to EBS compared to RAID 0, because you're mirroring all writes to a pair of volumes, limiting how much you can stripe.'?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#236",
          "answers": [
            {
              "choice": "<p>A. Raid 1<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Raid 0<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. RAID 1+0 (RAID 10)<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Raid 2<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 188251,
          "date": "Thu 23 Sep 2021 23:24",
          "username": "ashendyEThandi",
          "content": "Answer is RAID 1<br>The resulting size and bandwidth of a RAID 1 array is equal to the size and bandwidth of the volumes in the array. For example, two 500 GiB Amazon EBS io1 volumes with 4,000 provisioned IOPS each will create a 1000 GiB RAID 0 array with an available bandwidth of 8,000 IOPS and 1,000 MiB/s of throughput or a 500 GiB RAID 1 array with an available bandwidth of 4,000 IOPS and 500 MiB/s of throughput.Answer is 'C'as RAID 1 does not require twice the size of the required storage",
          "upvote_count": "81"
        },
        {
          "id": 382922,
          "date": "Sun 31 Oct 2021 11:13",
          "username": "EThandi",
          "content": "Answer is 'C'as RAID 1 does not require twice the size of the required storage",
          "upvote_count": "1"
        },
        {
          "id": 655174,
          "date": "Wed 31 Aug 2022 16:22",
          "username": "Sizuma",
          "content": "C for sure",
          "upvote_count": "1"
        },
        {
          "id": 602347,
          "date": "Mon 16 May 2022 02:09",
          "username": "Ddssssss",
          "content": "Raid 1 <br>AWS also supports RAID 1 on Amazon EBS volumes, which creates a greater fault tolerance capability, and makes it ideal for use cases where data durability is part of the requirement. However, it does not provide write performance improvement because the data is written to multiple volumes simultaneously.<br>RAID 10 improves performance on non-optimized queries and large write volumes.<br>RAID 10 is prohibitively expensive on a cost-to-performance ratio.<br>Optimizing schema yields exponentially better return on investment than RAID 10.<br>RAID 10 makes EBS snapshots impossible -- disabling simple disk backups.",
          "upvote_count": "1"
        },
        {
          "id": 522141,
          "date": "Wed 12 Jan 2022 13:24",
          "username": "pititcu667",
          "content": "EBS volumes not regular volumes. By default ebs only supports raid 10 hence c.",
          "upvote_count": "1"
        },
        {
          "id": 498318,
          "date": "Fri 10 Dec 2021 06:27",
          "username": "fais1985",
          "content": "Answer should be A (Raid 1), as we are limiting the striping here<br><br>Raid 0 is used for stripping<br><br>Raid 10 does both Stripping & mirroring but expensive",
          "upvote_count": "1"
        },
        {
          "id": 377332,
          "date": "Tue 05 Oct 2021 02:56",
          "username": "Madwyn01037Clandestine60Clandestine60",
          "content": "C is correct as RAID 1 doesn't do stripping.AgreedI am guessing you mean stripping of parity bits?of course it does. Stripping literally means copying data across disks. Raid 1 does this but repeats stripped data on 2 disks thus creating replicas. Basically copying same data on 2 disks for backups",
          "upvote_count": "2111"
        },
        {
          "id": 379637,
          "date": "Mon 25 Oct 2021 21:35",
          "username": "01037Clandestine60",
          "content": "AgreedI am guessing you mean stripping of parity bits?",
          "upvote_count": "11"
        },
        {
          "id": 536973,
          "date": "Mon 31 Jan 2022 13:28",
          "username": "Clandestine60",
          "content": "I am guessing you mean stripping of parity bits?",
          "upvote_count": "1"
        },
        {
          "id": 536964,
          "date": "Mon 31 Jan 2022 13:24",
          "username": "Clandestine60",
          "content": "of course it does. Stripping literally means copying data across disks. Raid 1 does this but repeats stripped data on 2 disks thus creating replicas. Basically copying same data on 2 disks for backups",
          "upvote_count": "1"
        },
        {
          "id": 331175,
          "date": "Mon 04 Oct 2021 04:56",
          "username": "M_Asep",
          "content": "C is correct",
          "upvote_count": "1"
        },
        {
          "id": 277718,
          "date": "Fri 01 Oct 2021 04:25",
          "username": "aimar047",
          "content": "Answer A",
          "upvote_count": "1"
        },
        {
          "id": 192765,
          "date": "Wed 29 Sep 2021 08:17",
          "username": "lostri",
          "content": "Answer is A",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#237",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In the context of IAM roles for Amazon EC2, which of the following NOT true about delegating permission to make API requests?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#237",
          "answers": [
            {
              "choice": "<p>A. You cannot create an IAM role.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. You can have the application retrieve a set of temporary credentials and use them.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. You can specify the role when you launch your instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. You can define which accounts or AWS services can assume the role.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 655178,
          "date": "Wed 31 Aug 2022 16:23",
          "username": "Sizuma",
          "content": "A right<br>Explanation:<br>Amazon designed IAM roles so that your applications can securely make API requests from your instances, without requiring you to manage the security credentials that the applications use.<br>Instead of creating and distributing your AWS credentials, you can delegate permission to make API requests using IAM roles as follows: Create an IAM role. Define which accounts or AWS services can assume the role. Define which API actions and resources the application can use after assuming the role. Specify the role when you launch your instances. Have the application retrieve a set of temporary credentials and use them.",
          "upvote_count": "1"
        },
        {
          "id": 614101,
          "date": "Thu 09 Jun 2022 18:38",
          "username": "Ddssssss",
          "content": "Is this a double negative? Can an API authorization create an AMI role or not?",
          "upvote_count": "1"
        },
        {
          "id": 587386,
          "date": "Sun 17 Apr 2022 23:02",
          "username": "Kuntazulu",
          "content": "The role you are delegating to has to exist for delegating authorization to perform API calls",
          "upvote_count": "2"
        },
        {
          "id": 579756,
          "date": "Sat 02 Apr 2022 09:43",
          "username": "ideoignusKuntazulu",
          "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html<br><br>Role cannot be passed while launching, only through instance profileRe-read the question, no one mentioned passing roles when launching",
          "upvote_count": "12"
        },
        {
          "id": 587388,
          "date": "Sun 17 Apr 2022 23:04",
          "username": "Kuntazulu",
          "content": "Re-read the question, no one mentioned passing roles when launching",
          "upvote_count": "2"
        },
        {
          "id": 557913,
          "date": "Mon 28 Feb 2022 07:58",
          "username": "adsdadasdad",
          "content": "A is only logical answer",
          "upvote_count": "2"
        },
        {
          "id": 554995,
          "date": "Thu 24 Feb 2022 01:56",
          "username": "Serial_X25tobstar86",
          "content": "D is correct IMO.<br>take a look at https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html.<br>Go to IAM console, select IAM->Roles->Create Role, then you need to select the Trusted entity type, it can be AWS service or AWS account between others, in case of AWS services the commom use cases mention EC2, Lambda and other services, but not accounts. So I believe that \\\"accounts\\\" is the word in the wrong place here at letter D. <br>Off course I'd like to hear some feedback from you Guys. Thanks.Accounts (end all their belonging IAM identities) can assume a role. <br>https://aws.amazon.com/premiumsupport/knowledge-center/iam-assume-role-cli/<br>\\\"For example, a principal similar to arn:aws:iam::123456789012:root allows all IAM identities of the account to assume that role.\\\"<br>This would rule out D.  <br><br>A, seems to be the obvious choice here.",
          "upvote_count": "11"
        },
        {
          "id": 572725,
          "date": "Tue 22 Mar 2022 07:55",
          "username": "tobstar86",
          "content": "Accounts (end all their belonging IAM identities) can assume a role. <br>https://aws.amazon.com/premiumsupport/knowledge-center/iam-assume-role-cli/<br>\\\"For example, a principal similar to arn:aws:iam::123456789012:root allows all IAM identities of the account to assume that role.\\\"<br>This would rule out D.  <br><br>A, seems to be the obvious choice here.",
          "upvote_count": "1"
        },
        {
          "id": 515078,
          "date": "Sun 02 Jan 2022 17:38",
          "username": "manan728",
          "content": "This is how you create IAM role:https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create.html",
          "upvote_count": "1"
        },
        {
          "id": 494105,
          "date": "Sun 05 Dec 2021 07:09",
          "username": "cldyvishgbobsmith2000",
          "content": "A.  You cannot create an IAM role.Not clear. Describe, please.B.  Correct. That is precisely what roles are designed to be used for.<br>C.  Correct. You specify a role when you launch an instance via console, not an instance profile (it's managed by aws under the hood).<br>D.  Correct. In a trusted policy an account or an aws service can be specified.<br><br>So it's only A that has left.",
          "upvote_count": "112"
        },
        {
          "id": 532923,
          "date": "Wed 26 Jan 2022 14:47",
          "username": "vishgbobsmith2000",
          "content": "Not clear. Describe, please.B.  Correct. That is precisely what roles are designed to be used for.<br>C.  Correct. You specify a role when you launch an instance via console, not an instance profile (it's managed by aws under the hood).<br>D.  Correct. In a trusted policy an account or an aws service can be specified.<br><br>So it's only A that has left.",
          "upvote_count": "12"
        },
        {
          "id": 581059,
          "date": "Tue 05 Apr 2022 08:14",
          "username": "bobsmith2000",
          "content": "B.  Correct. That is precisely what roles are designed to be used for.<br>C.  Correct. You specify a role when you launch an instance via console, not an instance profile (it's managed by aws under the hood).<br>D.  Correct. In a trusted policy an account or an aws service can be specified.<br><br>So it's only A that has left.",
          "upvote_count": "2"
        },
        {
          "id": 379638,
          "date": "Sun 31 Oct 2021 14:30",
          "username": "01037",
          "content": "A is Correct",
          "upvote_count": "2"
        },
        {
          "id": 331179,
          "date": "Mon 18 Oct 2021 21:28",
          "username": "M_Asep",
          "content": "A is Correct",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#238",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In the context of Amazon ElastiCache CLI, which of the following commands can you use to view all ElastiCache instance events for the past 24 hours?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#238",
          "answers": [
            {
              "choice": "<p>A. elasticache-events --duration 24<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. elasticache-events --duration 1440<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. elasticache-describe-events --duration 24<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. elasticache describe-events --source-type cache-cluster --duration 1440<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 655179,
          "date": "Wed 31 Aug 2022 16:24",
          "username": "Sizuma",
          "content": "D <br>Explanation:<br>In Amazon ElastiCache, the code “aws elasticache describe-events –source-type cache-cluster — duration 1440” is used to list the cache-cluster events for the past 24 hours (1440 minutes).",
          "upvote_count": "1"
        },
        {
          "id": 586249,
          "date": "Fri 15 Apr 2022 10:49",
          "username": "Hasitha99",
          "content": "**By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.<br>** the \\\"--duration (integer)\\\" parameter specifies the number of minutes worth of events to retrieve.<br><br>Ref: https://docs.aws.amazon.com/cli/latest/reference/elasticache/describe-events.html",
          "upvote_count": "1"
        },
        {
          "id": 530595,
          "date": "Sun 23 Jan 2022 15:42",
          "username": "RVivek",
          "content": "Answer D. <br><br>https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ECEvents.Viewing.html",
          "upvote_count": "1"
        },
        {
          "id": 495798,
          "date": "Tue 07 Dec 2021 10:00",
          "username": "cldy",
          "content": "D.  elasticache describe-events --source-type cache-cluster --duration 1440",
          "upvote_count": "1"
        },
        {
          "id": 394705,
          "date": "Tue 02 Nov 2021 14:56",
          "username": "Pb55",
          "content": "D.  As per link below.",
          "upvote_count": "1"
        },
        {
          "id": 379640,
          "date": "Thu 28 Oct 2021 02:04",
          "username": "01037",
          "content": "D is correct Answer:",
          "upvote_count": "1"
        },
        {
          "id": 318752,
          "date": "Sun 24 Oct 2021 00:40",
          "username": "ExtHo",
          "content": "D is correct Answer:<br>aws elasticache describe-events --source-type cache-cluster --duration 1440 <br><br>https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ECEvents.Viewing.html",
          "upvote_count": "1"
        },
        {
          "id": 162014,
          "date": "Thu 14 Oct 2021 02:36",
          "username": "sam_1975",
          "content": "I would go with D <br>http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/ECEvents.Viewing.html",
          "upvote_count": "2"
        },
        {
          "id": 71876,
          "date": "Sat 09 Oct 2021 18:02",
          "username": "sergza",
          "content": "So i would answer B",
          "upvote_count": "3"
        },
        {
          "id": 71875,
          "date": "Tue 21 Sep 2021 23:16",
          "username": "sergza",
          "content": "Question does not mention anything about cluster event filtering <br>https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ECEvents.Viewing.html",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#239",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In Amazon Cognito what is a silent push notification?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#239",
          "answers": [
            {
              "choice": "<p>A. It is a push message that is received by your application on a user's device that will not be seen by the user.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. It is a push message that is received by your application on a user's device that will return the user's geolocation.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. It is a push message that is received by your application on a user's device that will not be heard by the user.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. It is a push message that is received by your application on a user's device that will return the user's authentication credentials.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 568287,
          "date": "Tue 15 Mar 2022 11:26",
          "username": "foxrj21",
          "content": "Sure A. <br>https://docs.aws.amazon.com/cognito/latest/developerguide/push-sync.html",
          "upvote_count": "1"
        },
        {
          "id": 494101,
          "date": "Sun 05 Dec 2021 07:08",
          "username": "cldy",
          "content": "A.  It is a push message that is received by your application on a user's device that will not be seen by the user.",
          "upvote_count": "1"
        },
        {
          "id": 379643,
          "date": "Thu 04 Nov 2021 00:50",
          "username": "01037",
          "content": "Sure A",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#240",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>When using Numeric Conditions within IAM, short versions of the available comparators can be used instead of the more verbose versions.<br>Which of the following is the short version of the Numeric Condition \"NumericLessThanEquals\"?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#240",
          "answers": [
            {
              "choice": "<p>A. numlteq<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. numlteql<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. numltequals<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. numeql<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 162019,
          "date": "Wed 03 Nov 2021 15:24",
          "username": "sam_1975",
          "content": "A.  http://awsdocs.s3.amazonaws.com/SQS/2011-10-01/sqs-dg-2011-10-01.pdf",
          "upvote_count": "5"
        },
        {
          "id": 655180,
          "date": "Wed 31 Aug 2022 16:26",
          "username": "Sizuma",
          "content": "Correct Answer: A<br>When using Numeric Conditions within IAM, short versions of the available comparators can be used instead of the more verbose versions. For instance, numIteq is the short version of NumericLessThanEquals.<br>http://awsdocs.s3.amazonaws.com/SQS/2011-10-01/sqs-dg-2011-10-01.pdf",
          "upvote_count": "1"
        },
        {
          "id": 490627,
          "date": "Tue 30 Nov 2021 12:17",
          "username": "acloudguru",
          "content": "why such question????",
          "upvote_count": "3"
        },
        {
          "id": 379645,
          "date": "Sat 06 Nov 2021 08:35",
          "username": "01037",
          "content": "I Guess A<br>Thought I can find any references",
          "upvote_count": "2"
        },
        {
          "id": 71352,
          "date": "Fri 08 Oct 2021 21:44",
          "username": "Exam_boy",
          "content": "not relevant any more. can't find any reference of short version of operators in IAM docs",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#241",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>AWS has launched T2 instances which come with CPU usage credit. An organization has a requirement which keeps an instance running for 24 hours. However, the organization has high usage only during 11 AM to 12 PM. The organization is planning to use a T2 small instance for this purpose.<br>If the organization already has multiple instances running since Jan 2012, which of the below mentioned options should the organization implement while launching a T2 instance?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#241",
          "answers": [
            {
              "choice": "<p>A. The organization must migrate to the EC2-VPC platform first before launching a T2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. While launching a T2 instance the organization must create a new AWS account as this account does not have the EC2-VPC platform.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a VPC and launch a T2 instance as part of one of the subnets of that VPC. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. While launching a T2 instance the organization must select EC2-VPC as the platform.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 580132,
          "date": "Sun 03 Apr 2022 08:37",
          "username": "MWinter",
          "content": "it is basically saying the they are using EC2-classic platform, therefore, we will need to create VPC based on EC2-VPC platform initiate the T2 type instance.<br>So, C is the correct answer.",
          "upvote_count": "2"
        },
        {
          "id": 561307,
          "date": "Sat 05 Mar 2022 09:37",
          "username": "Mechanic",
          "content": "C. <br>Even though I thought the question is about scheduling Autoscaling or some instance specs, it was so weird in the choices, but chose the answer because it makes sense.",
          "upvote_count": "1"
        },
        {
          "id": 498230,
          "date": "Fri 10 Dec 2021 03:27",
          "username": "GeniusMikeLiu",
          "content": "this question is really wired from now",
          "upvote_count": "2"
        },
        {
          "id": 494386,
          "date": "Sun 05 Dec 2021 14:51",
          "username": "cldy",
          "content": "C.  Create a VPC and launch a T2 instance as part of one of the subnets of that VPC. ",
          "upvote_count": "1"
        },
        {
          "id": 379836,
          "date": "Mon 01 Nov 2021 20:04",
          "username": "01037",
          "content": "C is the only valid option",
          "upvote_count": "1"
        },
        {
          "id": 277728,
          "date": "Tue 05 Oct 2021 17:17",
          "username": "aimar047",
          "content": "What is the difference between A and C? In both cases will be requiring to create a new EC2-VPC ..",
          "upvote_count": "1"
        },
        {
          "id": 230892,
          "date": "Fri 01 Oct 2021 01:16",
          "username": "newme",
          "content": "What does \\\"since Jan 2012\\\" imply?<br>There were VPC then",
          "upvote_count": "1"
        },
        {
          "id": 162021,
          "date": "Mon 20 Sep 2021 01:25",
          "username": "sam_1975",
          "content": "I go with C as VPC is the pre-requisite for creating EC2, assuming user doesn;t want to use the default VPC",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#242",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>How does AWS Data Pipeline execute activities on on-premise resources or AWS resources that you manage?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#242",
          "answers": [
            {
              "choice": "<p>A. By supplying a Task Runner package that can be installed on your on-premise hosts<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. None of these<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. By supplying a Task Runner file that the resources can access for execution<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. By supplying a Task Runner json script that can be installed on your on-premise hosts<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 288673,
          "date": "Mon 04 Oct 2021 17:12",
          "username": "Mansur01037",
          "content": "Answer A<br>Q: Can I execute activities on on-premise resources or AWS resources that I manage?<br><br>Yes. To enable running activities using on-premise resources, AWS Data Pipeline supplies a Task Runner package that can be installed on your on-premise hosts. This package continuously polls the AWS Data Pipeline service for work to perform. When it’s time to run a particular activity on your on-premise resources, for example, executing a DB stored procedure or a database dump, AWS Data Pipeline will issue the appropriate command to the Task Runner. To ensure that your pipeline activities are highly available, you can optionally assign multiple Task Runners to poll for a given job. This way, if one Task Runner becomes unavailable, the others will pick up its work.<br><br>REF: https://aws.amazon.com/datapipeline/faqs/Thank you",
          "upvote_count": "51"
        },
        {
          "id": 379837,
          "date": "Thu 28 Oct 2021 12:00",
          "username": "01037",
          "content": "Thank you",
          "upvote_count": "1"
        },
        {
          "id": 655184,
          "date": "Wed 31 Aug 2022 16:28",
          "username": "Sizuma",
          "content": "A CORRECT",
          "upvote_count": "1"
        },
        {
          "id": 266113,
          "date": "Fri 24 Sep 2021 11:48",
          "username": "Justuaimar047",
          "content": "Bad question: \\\"or AWS resources that you manage\\\". Does AWS resources need Task Runner package?agree with",
          "upvote_count": "31"
        },
        {
          "id": 277729,
          "date": "Sun 03 Oct 2021 17:14",
          "username": "aimar047",
          "content": "agree with",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#243",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which of following IAM policy elements lets you specify an exception to a list of actions?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#243",
          "answers": [
            {
              "choice": "<p>A. NotException<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. ExceptionAction<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Exception<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. NotAction<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 636861,
          "date": "Mon 25 Jul 2022 19:32",
          "username": "hilft",
          "content": "D.  Exception = NotAction",
          "upvote_count": "2"
        },
        {
          "id": 560331,
          "date": "Thu 03 Mar 2022 20:54",
          "username": "Ni_yot",
          "content": "D for me. To action is 'Action' and an exception is 'Not Action'",
          "upvote_count": "1"
        },
        {
          "id": 379838,
          "date": "Sat 25 Sep 2021 10:27",
          "username": "01037",
          "content": "Sure D",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#244",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In AWS IAM, which of the following predefined policy condition keys checks how long ago (in seconds) the MFA-validated security credentials making the request were issued using multi- factor authentication (MFA)?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#244",
          "answers": [
            {
              "choice": "<p>A. aws:MultiFactorAuthAge<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. aws:MultiFactorAuthLast<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. aws:MFAAge<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. aws:MultiFactorAuthPrevious<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 645139,
          "date": "Wed 10 Aug 2022 21:54",
          "username": "etopics",
          "content": "A.  aws:MultiFactorAuthAge",
          "upvote_count": "1"
        },
        {
          "id": 645138,
          "date": "Wed 10 Aug 2022 21:54",
          "username": "etopics",
          "content": "aaaaaaaaaaaaaaa",
          "upvote_count": "1"
        },
        {
          "id": 498619,
          "date": "Fri 10 Dec 2021 13:39",
          "username": "cldy",
          "content": "A.  aws:MultiFactorAuthAge",
          "upvote_count": "2"
        },
        {
          "id": 71392,
          "date": "Sat 16 Oct 2021 23:14",
          "username": "Exam_boy01037",
          "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-multifactorauthageThank you",
          "upvote_count": "31"
        },
        {
          "id": 379839,
          "date": "Sun 17 Oct 2021 18:04",
          "username": "01037",
          "content": "Thank you",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#245",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user is configuring MySQL RDS with PIOPS. What should be the minimum PIOPS that the user should provision?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#245",
          "answers": [
            {
              "choice": "<p>A. 1000<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. 200<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. 2000<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. 500<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 193442,
          "date": "Fri 01 Oct 2021 16:58",
          "username": "LeoChu",
          "content": "how come a solution architect has to memorize these kinds of questions :(",
          "upvote_count": "13"
        },
        {
          "id": 542921,
          "date": "Tue 08 Feb 2022 09:06",
          "username": "AnonymousJhb",
          "content": "A is correct<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS<br>Database engine\tRange of Provisioned IOPS\tRange of storage<br>SQL Server\t1,000–64,000 IOPS\t 20 GiB–16 TiB<br>MariaDB\t1,000–80,000 IOPS\t 100 GiB–64 TiB<br>MySQL\t1,000–80,000 IOPS\t100 GiB–64 TiB<br>PostgreSQL\t1,000–80,000 IOPS\t100 GiB–64 TiB<br>Oracle\t1,000–256,000 IOPS\t100 GiB–64 TiB",
          "upvote_count": "2"
        },
        {
          "id": 494263,
          "date": "Sun 05 Dec 2021 12:23",
          "username": "cldy",
          "content": "A.  1000",
          "upvote_count": "2"
        },
        {
          "id": 379840,
          "date": "Sat 06 Nov 2021 13:29",
          "username": "01037",
          "content": "A is correct",
          "upvote_count": "1"
        },
        {
          "id": 217505,
          "date": "Mon 25 Oct 2021 12:42",
          "username": "smartassX",
          "content": "A -> IOPS range in RDS 1,000–80,000",
          "upvote_count": "4"
        },
        {
          "id": 202826,
          "date": "Sun 10 Oct 2021 14:50",
          "username": "cpal012",
          "content": "Numbers change all the time - this question is silly",
          "upvote_count": "3"
        },
        {
          "id": 182811,
          "date": "Wed 22 Sep 2021 20:10",
          "username": "AlwaysLearning2020",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#246",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are setting up some EBS volumes for a customer who has requested a setup which includes a RAID (redundant array of inexpensive disks). AWS has some recommendations for RAID setups.<br>Which RAID setup is not recommended for Amazon EBS?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#246",
          "answers": [
            {
              "choice": "<p>A. RAID 1 only<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. RAID 5 only<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. RAID 5 and RAID 6<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. RAID 0 only<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 379842,
          "date": "Thu 07 Oct 2021 23:56",
          "username": "01037AkaAka4",
          "content": "inexpensive😓ikr hahahaha",
          "upvote_count": "61"
        },
        {
          "id": 504136,
          "date": "Sat 18 Dec 2021 10:43",
          "username": "AkaAka4",
          "content": "ikr hahahaha",
          "upvote_count": "1"
        },
        {
          "id": 648726,
          "date": "Fri 19 Aug 2022 06:44",
          "username": "dethblow",
          "content": "c is correct<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/raid-config.htmlBoulevard%20Kukulcan%20Km%2014.5,%20Retorno%20Chac%20L-41,%20Zona%20Hotelera%20Cancun,%20Quintana%20Roo%2077500",
          "upvote_count": "1"
        },
        {
          "id": 643784,
          "date": "Sun 07 Aug 2022 19:11",
          "username": "Santo99",
          "content": "Raid 0 is not redundant, and the question states „redundant array of inexpensive disks“",
          "upvote_count": "1"
        },
        {
          "id": 592564,
          "date": "Tue 26 Apr 2022 18:29",
          "username": "nlbr",
          "content": "C is correct<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/raid-config.html#raid-config-options",
          "upvote_count": "2"
        },
        {
          "id": 548112,
          "date": "Tue 15 Feb 2022 23:32",
          "username": "changeofaseason",
          "content": "Only RAID 0 is recommended, which is not an answer here.<br><br>This doc states that RAID 1 doesnt offer performance and eats more EC2 cycles, and also that RAID 5/6 are not recommended.<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/raid-config.html",
          "upvote_count": "1"
        },
        {
          "id": 478463,
          "date": "Mon 15 Nov 2021 05:55",
          "username": "sashenka",
          "content": "C - RAID 5 or 6 are not recommended",
          "upvote_count": "1"
        },
        {
          "id": 277730,
          "date": "Thu 23 Sep 2021 09:13",
          "username": "aimar04701037bamjive06",
          "content": "RAID 1. It is literally said: RAID5 and 6 are not recommendedhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/raid-config.htmlSo you saying the answer is A then, by contraction?",
          "upvote_count": "221"
        },
        {
          "id": 379843,
          "date": "Sun 10 Oct 2021 10:49",
          "username": "01037",
          "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/raid-config.html",
          "upvote_count": "2"
        },
        {
          "id": 382335,
          "date": "Thu 14 Oct 2021 04:01",
          "username": "bamjive06",
          "content": "So you saying the answer is A then, by contraction?",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#247",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Once the user has set ElastiCache for an application and it is up and running, which services, does Amazon not provide for the user:</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#247",
          "answers": [
            {
              "choice": "<p>A. The ability for client programs to automatically identify all of the nodes in a cache cluster, and to initiate and maintain connections to all of these nodes<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Automating common administrative tasks such as failure detection and recovery, and software patching.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Providing default Time to Live (TTL) in the AWS Elasticache Redis Implementation for different type of data.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Providing detailed monitoring metrics associated with your Cache Nodes, enabling you to diagnose and react to issues very quickly<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 230896,
          "date": "Wed 27 Oct 2021 04:39",
          "username": "newme",
          "content": "Redis itself doesn't have default/global TTL",
          "upvote_count": "5"
        },
        {
          "id": 580864,
          "date": "Mon 04 Apr 2022 19:32",
          "username": "roka_ua",
          "content": "Vote C",
          "upvote_count": "1"
        },
        {
          "id": 379844,
          "date": "Sat 30 Oct 2021 05:26",
          "username": "01037",
          "content": "I guessed it's C",
          "upvote_count": "1"
        },
        {
          "id": 169361,
          "date": "Thu 21 Oct 2021 23:17",
          "username": "Neive",
          "content": "Answe is c. There is no default TTL",
          "upvote_count": "2"
        },
        {
          "id": 141265,
          "date": "Thu 21 Oct 2021 08:27",
          "username": "XZhao",
          "content": "https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.html",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#248",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In the context of AWS Cloud Hardware Security Module(HSM), does your application need to reside in the same VPC as the CloudHSM instance?</p>",
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
              "choice": "<p>A. No, but the server or instance on which your application and the HSM client is running must have network (IP) reachability to the HSM.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Yes, always<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. No, but they must reside in the same Availability Zone.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. No, but it should reside in same Availability Zone as the DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 643940,
          "date": "Mon 08 Aug 2022 06:33",
          "username": "MightyRaju1",
          "content": "A is the answer",
          "upvote_count": "2"
        },
        {
          "id": 494113,
          "date": "Sun 05 Dec 2021 07:41",
          "username": "cldy",
          "content": "A.  No, but the server or instance on which your application and the HSM client is running must have network (IP) reachability to the HSM.",
          "upvote_count": "3"
        },
        {
          "id": 379845,
          "date": "Sat 09 Oct 2021 09:24",
          "username": "01037",
          "content": "A is correct",
          "upvote_count": "2"
        },
        {
          "id": 307025,
          "date": "Sun 03 Oct 2021 07:11",
          "username": "certking",
          "content": "A<br>https://aws.amazon.com/cloudhsm/faqs/",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#249",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>True or False: In Amazon ElastiCache, you can use Cache Security Groups to configure the cache clusters that are part of a VPC. </p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#249",
          "answers": [
            {
              "choice": "<p>A. FALSE<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. TRUE<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. True, this is applicable only to cache clusters that are running in an Amazon VPC environment.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. True, but only when you configure the cache clusters using the Cache Security Groups from the console navigation pane.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 170363,
          "date": "Fri 29 Oct 2021 19:13",
          "username": "OrlandoP",
          "content": "Important<br>Amazon ElastiCache security groups are only applicable to clusters that are not running in an Amazon Virtual Private Cloud environment (VPC). If you are running in an Amazon Virtual Private Cloud, Security Groups is not available in the console navigation pane.<br><br>If you are running your ElastiCache nodes in an Amazon VPC, you control access to your clusters with Amazon VPC security groups, which are different from ElastiCache security groups.<br>https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/SecurityGroups.html",
          "upvote_count": "6"
        },
        {
          "id": 655187,
          "date": "Wed 31 Aug 2022 16:31",
          "username": "Sizuma",
          "content": "c CORRECT",
          "upvote_count": "1"
        },
        {
          "id": 496524,
          "date": "Wed 08 Dec 2021 05:28",
          "username": "cldy",
          "content": "A.  FALSE",
          "upvote_count": "1"
        },
        {
          "id": 389612,
          "date": "Sat 30 Oct 2021 21:43",
          "username": "DashL",
          "content": "the link https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/VPCs.html says: We have deprecated the use of Amazon EC2-Classic for launching ElastiCache clusters. All current generation nodes are launched in Amazon Virtual Private Cloud only.",
          "upvote_count": "1"
        },
        {
          "id": 382337,
          "date": "Sat 30 Oct 2021 19:10",
          "username": "bamjive06",
          "content": "Agree with A too<br>https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/VPCs.html",
          "upvote_count": "1"
        },
        {
          "id": 175220,
          "date": "Sat 30 Oct 2021 07:08",
          "username": "Krish812003",
          "content": "The answer should be \\\"A\\\" because an Amazon VPC security group controls inbound and outbound traffic for your ElastiCache clusters and Amazon EC2 instances.",
          "upvote_count": "1"
        },
        {
          "id": 169459,
          "date": "Tue 26 Oct 2021 09:19",
          "username": "Neive",
          "content": "C is the correct answer. Now you can define elasticcache cluster only in vpc and can define the security group.",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#250",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>What is the role of the PollForTask action when it is called by a task runner in AWS Data Pipeline?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#250",
          "answers": [
            {
              "choice": "<p>A. It is used to retrieve the pipeline definition.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. It is used to report the progress of the task runner to AWS Data Pipeline.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. It is used to receive a task to perform from AWS Data Pipeline.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. It is used to inform AWS Data Pipeline of the outcome when the task runner completes a task.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 655189,
          "date": "Wed 31 Aug 2022 16:32",
          "username": "Sizuma",
          "content": "C CORRECT<br>Task runners call PollForTask to receive a task to perform from AWS Data Pipeline. The task runner specifies which tasks it can perform by setting a value for the workerGroup parameter.",
          "upvote_count": "1"
        },
        {
          "id": 635815,
          "date": "Sun 24 Jul 2022 02:22",
          "username": "hilft",
          "content": "C. <br><br>I got to memorize this. Never saw it",
          "upvote_count": "1"
        },
        {
          "id": 379850,
          "date": "Sun 24 Oct 2021 12:52",
          "username": "01037bamjive06",
          "content": "C<br>easy oneSounds like you're DevOps ready mate ;)",
          "upvote_count": "23"
        },
        {
          "id": 382339,
          "date": "Wed 27 Oct 2021 03:41",
          "username": "bamjive06",
          "content": "Sounds like you're DevOps ready mate ;)",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#251",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>What is the average queue length recommended by AWS to achieve a lower latency for the 200 PIOPS EBS volume?</p>",
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
              "choice": "<p>A. 5<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. 1<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. 2<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. 4<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 139992,
          "date": "Wed 13 Oct 2021 10:14",
          "username": "DuyPhan01037",
          "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/benchmark_procedures.html#UnderstandingQueueLength<br>For PIOPS, queue length is 1 for every 1000 IOPSThanks",
          "upvote_count": "51"
        },
        {
          "id": 380099,
          "date": "Sat 30 Oct 2021 18:46",
          "username": "01037",
          "content": "Thanks",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#252",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Who is responsible for modifying the routing tables and networking ACLs in a VPC to ensure that a DB instance is reachable from other instances in the VPC?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#252",
          "answers": [
            {
              "choice": "<p>A. AWS administrators<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The owner of the AWS account<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Amazon<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The DB engine vendor<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 636907,
          "date": "Mon 25 Jul 2022 20:42",
          "username": "hilft",
          "content": "A question from CLF exam",
          "upvote_count": "1"
        },
        {
          "id": 380105,
          "date": "Fri 05 Nov 2021 11:29",
          "username": "01037",
          "content": "Yes it is B",
          "upvote_count": "1"
        },
        {
          "id": 277737,
          "date": "Sun 24 Oct 2021 16:37",
          "username": "aimar047tonikus",
          "content": "what a random questionindeed... have they recently updated/changed questions? The majority of questions I'm reviewing now don't look like they are from PRO exam...",
          "upvote_count": "13"
        },
        {
          "id": 487278,
          "date": "Fri 26 Nov 2021 12:02",
          "username": "tonikus",
          "content": "indeed... have they recently updated/changed questions? The majority of questions I'm reviewing now don't look like they are from PRO exam...",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#253",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization is planning to host a web application in the AWS VPC.  The organization does not want to host a database in the public cloud due to statutory requirements.<br>How can the organization setup in this scenario?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#253",
          "answers": [
            {
              "choice": "<p>A. The organization should plan the app server on the public subnet and database in the organization's data center and connect them with the VPN gateway.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. The organization should plan the app server on the public subnet and use RDS with the private subnet for a secure data operation.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The organization should use the public subnet for the app server and use RDS with a storage gateway to access as well as sync the data securely from the local data center.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The organization should plan the app server on the public subnet and database in a private subnet so it will not be in the public cloud.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 497355,
          "date": "Thu 09 Dec 2021 06:31",
          "username": "cldy",
          "content": "A.  The organization should plan the app server on the public subnet and database in the organization's data center and connect them with the VPN gateway.",
          "upvote_count": "3"
        },
        {
          "id": 380108,
          "date": "Sun 03 Oct 2021 01:25",
          "username": "01037",
          "content": "A is correct",
          "upvote_count": "1"
        },
        {
          "id": 266119,
          "date": "Wed 29 Sep 2021 12:56",
          "username": "JustuMrCarter",
          "content": "Answer is A, Read the question correctly :Dhahaha cheers ;)",
          "upvote_count": "31"
        },
        {
          "id": 393953,
          "date": "Sun 24 Oct 2021 23:05",
          "username": "MrCarter",
          "content": "hahaha cheers ;)",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#254",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user is trying to create a PIOPS EBS volume with 4000 IOPS and 100 GB size. AWS does not allow the user to create this volume.<br>What is the possible root cause for this?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#254",
          "answers": [
            {
              "choice": "<p>A. PIOPS is supported for EBS higher than 500 GB size<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The maximum IOPS supported by EBS is 3000<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The ratio between IOPS and the EBS volume is higher than 30<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The ratio between IOPS and the EBS volume is lower than 50<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 23200,
          "date": "Fri 01 Oct 2021 01:16",
          "username": "Scunningham99examaccGeniusMikeLiu",
          "content": "Answer is d, 30is the old value but this has improved a d is now 50:1 ratioInfact D is also wrong. This question is wrong in todays context as the volume will get createdYeah. I tried and max IOPS of 100GB is 5000(io1)",
          "upvote_count": "671"
        },
        {
          "id": 23653,
          "date": "Sun 03 Oct 2021 18:36",
          "username": "examaccGeniusMikeLiu",
          "content": "Infact D is also wrong. This question is wrong in todays context as the volume will get createdYeah. I tried and max IOPS of 100GB is 5000(io1)",
          "upvote_count": "71"
        },
        {
          "id": 528311,
          "date": "Thu 20 Jan 2022 10:58",
          "username": "GeniusMikeLiu",
          "content": "Yeah. I tried and max IOPS of 100GB is 5000(io1)",
          "upvote_count": "1"
        },
        {
          "id": 497619,
          "date": "Thu 09 Dec 2021 11:44",
          "username": "cldy",
          "content": "D.  The ratio between IOPS and the EBS volume is lower than 50<br>For io1, the ratio between the I/OPS and the size of the volume is 50:1. That is if the volume size is 100 GB then it is able to afford 5,000 I/OPS at maximum.<br>On the other side for io2, its ratio is 500:1. That is if the volume size is 100 GB then it is able to afford 50,000 I/OPS at maximum.",
          "upvote_count": "1"
        },
        {
          "id": 380113,
          "date": "Thu 04 Nov 2021 05:51",
          "username": "01037",
          "content": "outdated.<br>No correct answer here. <br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html<br>The maximum ratio of provisioned IOPS to requested volume size (in GiB) is 50:1 for io1 volumes, and 500:1 for io2 volumes",
          "upvote_count": "3"
        },
        {
          "id": 353883,
          "date": "Sat 23 Oct 2021 17:11",
          "username": "Sam0_2000",
          "content": "I am not sure what to answer for this question on May 10th.<br>30 is the old value <br>then it was 50:1 ratio <br>I am not sure if I did it right - but I tried to create one EBS Provisioned Io1<br>tried to create a volume with 4000 and no errors<br> <br>------ <br>screen details<br>Volume Type Provisioned IOPS SSD (io1)<br>Size (GiB)100(Min: 4 GiB, Max: 16384 GiB)<br>IOPS4000(Min: 100 IOPS, Max: 64000 IOPS)<br><br>Someone please respond - I am taking a test on 5/16 and I am not sure what to answer",
          "upvote_count": "1"
        },
        {
          "id": 219182,
          "date": "Wed 13 Oct 2021 03:01",
          "username": "TerrenceCJustu",
          "content": "An update for Nov 2020. There are two types of volume, io1, and io2.<br><br>For io1, the ratio between the I/OPS and the size of the volume is 50:1. That is if the volume size is 100 GB then it is able to afford 5,000 I/OPS at maximum.<br><br>On the other side for io2, its ratio is 500:1. That is if the volume size is 100 GB then it is able to afford 50,000 I/OPS at maximum.<br><br>One thing in common between those types is that the maximum I/OPS keeps 64,000 unchanged.Thanks for the update. Lot of these questions are really old.",
          "upvote_count": "21"
        },
        {
          "id": 266120,
          "date": "Sat 23 Oct 2021 03:42",
          "username": "Justu",
          "content": "Thanks for the update. Lot of these questions are really old.",
          "upvote_count": "1"
        },
        {
          "id": 40574,
          "date": "Fri 08 Oct 2021 22:33",
          "username": "amog",
          "content": "Answer is C (for old)<br>Now maximum is 50:1<br>The maximum ratio of provisioned IOPS to requested volume size (in GiB) is 50:1. For example, a 100 GiB volume can be provisioned with up to 5,000 IOPS",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#255",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user is planning to host a Highly Available system on the AWS VPC.  Which of the below mentioned statements is helpful in this scenario?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#255",
          "answers": [
            {
              "choice": "<p>A. Create VPC subnets in two separate availability zones and launch instances in different subnets.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create VPC with only one public subnet and launch instances in different AZs using that subnet.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create two VPCs in two separate zones and setup failover with ELB such that if one VPC fails it will divert traffic to another VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create VPC with only one private subnet and launch instances in different AZs using that subnet.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 647292,
          "date": "Mon 15 Aug 2022 19:05",
          "username": "Ni_yot",
          "content": "Cis over kill. 'A' will do just fine",
          "upvote_count": "1"
        },
        {
          "id": 638927,
          "date": "Fri 29 Jul 2022 02:27",
          "username": "hilft",
          "content": "I vote for C. ",
          "upvote_count": "1"
        },
        {
          "id": 492147,
          "date": "Thu 02 Dec 2021 05:48",
          "username": "acloudguru",
          "content": "yes, A",
          "upvote_count": "2"
        },
        {
          "id": 380121,
          "date": "Fri 22 Oct 2021 07:54",
          "username": "01037",
          "content": "A for sure",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#256",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user is creating a PIOPS volume. What is the maximum ratio the user should configure between PIOPS and the volume size?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#256",
          "answers": [
            {
              "choice": "<p>A. 5<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. 10<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. 20<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. 30<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 48605,
          "date": "Thu 07 Oct 2021 13:39",
          "username": "ro1h02n4",
          "content": "This question is out dated now.<br>The maximum ratio of provisioned IOPS to requested volume size (in GiB) is 50:1",
          "upvote_count": "8"
        },
        {
          "id": 631718,
          "date": "Fri 15 Jul 2022 13:39",
          "username": "CloudHandsOn",
          "content": "50:1. \\\"Outdated\\\"",
          "upvote_count": "2"
        },
        {
          "id": 570272,
          "date": "Fri 18 Mar 2022 07:13",
          "username": "kenchou73",
          "content": "Outdated! <br>The maximum ratio of provisioned IOPS to requested volume size (in GiB) is 50:1 for io1 volumes, and 500:1 for io2 volumes.<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html",
          "upvote_count": "1"
        },
        {
          "id": 494322,
          "date": "Sun 05 Dec 2021 13:18",
          "username": "cldy",
          "content": "io1 -> 50:1<br>io2 -> 500:1",
          "upvote_count": "3"
        },
        {
          "id": 380122,
          "date": "Thu 14 Oct 2021 09:12",
          "username": "01037",
          "content": "outdated.<br>No correct answer here.<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html<br>The maximum ratio of provisioned IOPS to requested volume size (in GiB) is 50:1 for io1 volumes, and 500:1 for io2 volumes",
          "upvote_count": "1"
        },
        {
          "id": 219186,
          "date": "Tue 12 Oct 2021 22:19",
          "username": "TerrenceC",
          "content": "An update for Nov 2020. There are two types of volume, io1, and io2.<br><br>For io1, the ratio between the I/OPS and the size of the volume is 50:1. That is if the volume size is 100 GB then it is able to afford 5,000 I/OPS at maximum.<br><br>On the other side for io2, its ratio is 500:1. That is if the volume size is 100 GB then it is able to afford 50,000 I/OPS at maximum.<br><br>One thing in common between those types is that the maximum I/OPS keeps 64,000 unchanged.",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#257",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>What is a possible reason you would need to edit claims issued in a SAML token?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#257",
          "answers": [
            {
              "choice": "<p>A. The NameIdentifier claim cannot be the same as the username stored in AD. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Authentication fails consistently.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The NameIdentifier claim cannot be the same as the claim URI.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The NameIdentifier claim must be the same as the username stored in AD. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 495990,
          "date": "Tue 07 Dec 2021 13:41",
          "username": "cldy",
          "content": "A.  The NameIdentifier claim cannot be the same as the username stored in AD. ",
          "upvote_count": "1"
        },
        {
          "id": 380213,
          "date": "Sat 30 Oct 2021 05:21",
          "username": "01037",
          "content": "Skip this question",
          "upvote_count": "3"
        },
        {
          "id": 182910,
          "date": "Fri 29 Oct 2021 13:13",
          "username": "AlwaysLearning2020",
          "content": "Huh? What is this?",
          "upvote_count": "1"
        },
        {
          "id": 66111,
          "date": "Mon 27 Sep 2021 21:16",
          "username": "kneelpurplejuice",
          "content": "I think this is an Azure question not AWSYes. This is an Azure question",
          "upvote_count": "43"
        },
        {
          "id": 106241,
          "date": "Sat 16 Oct 2021 08:06",
          "username": "purplejuice",
          "content": "Yes. This is an Azure question",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#258",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A government client needs you to set up secure cryptographic key storage for some of their extremely confidential data. You decide that the AWS CloudHSM is the best service for this.<br>However, there seem to be a few pre-requisites before this can happen, one of those being a security group that has certain ports open.<br>Which of the following is correct in regards to those security groups?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#258",
          "answers": [
            {
              "choice": "<p>A. A security group that has no ports open to your network.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. A security group that has only port 3389 (for RDP) open to your network.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. A security group that has only port 22 (for SSH) open to your network.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. A security group that has port 22 (for SSH) or port 3389 (for RDP) open to your network.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 626136,
          "date": "Sat 02 Jul 2022 14:30",
          "username": "aandc",
          "content": "weird question, should be2223-2225",
          "upvote_count": "1"
        },
        {
          "id": 577746,
          "date": "Tue 29 Mar 2022 19:04",
          "username": "jj22222",
          "content": "D.  A security group that has port 22 (for SSH) or port 3389 (for RDP) open to your network.",
          "upvote_count": "1"
        },
        {
          "id": 546831,
          "date": "Mon 14 Feb 2022 02:05",
          "username": "tkanmani76tkanmani76",
          "content": "https://docs.aws.amazon.com/cloudhsm/latest/userguide/configure-sg-client-instance.htmlHence D is correct",
          "upvote_count": "11"
        },
        {
          "id": 546832,
          "date": "Mon 14 Feb 2022 02:05",
          "username": "tkanmani76",
          "content": "Hence D is correct",
          "upvote_count": "1"
        },
        {
          "id": 389800,
          "date": "Sun 24 Oct 2021 06:15",
          "username": "DashL",
          "content": "For CloudHSM, you launch an Amazon EC2 Client Instance to connect to cloud HSM (https://docs.aws.amazon.com/cloudhsm/latest/userguide/launch-client-instance.html). To connect to the EC2 instance you need either port 22(SSH) or 3389(RDP) open. But the seurity group between EC2 client and CloudHSM need to have port 2223-2225 open. https://docs.aws.amazon.com/cloudhsm/latest/userguide/configure-sg-client-instance.html.<br>The question seems to be asking for CloudHSM pre-requisites, not client EC2 instances. If my understanding is correct, none of the answers are valid.",
          "upvote_count": "2"
        },
        {
          "id": 380238,
          "date": "Thu 21 Oct 2021 01:56",
          "username": "01037",
          "content": "OK, it is D<br>a little far-fetched",
          "upvote_count": "1"
        },
        {
          "id": 299598,
          "date": "Thu 07 Oct 2021 17:28",
          "username": "ar2000",
          "content": "d. You need to modify the default security group to permit the SSH or RDP connection so that you can<br>download and install client software, and interact with your HSM.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#259",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>What is the network performance offered by the c4.8xlarge instance in Amazon EC2?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#259",
          "answers": [
            {
              "choice": "<p>A. Very High but variable<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. 20 Gigabit<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. 5 Gigabit<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. 10 Gigabit<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 531782,
          "date": "Tue 25 Jan 2022 02:57",
          "username": "GeniusMikeLiu",
          "content": "really hard to memorize this numbers",
          "upvote_count": "2"
        },
        {
          "id": 380244,
          "date": "Thu 21 Oct 2021 02:00",
          "username": "01037",
          "content": "https://aws.amazon.com/ec2/instance-types/",
          "upvote_count": "3"
        },
        {
          "id": 230930,
          "date": "Sun 03 Oct 2021 18:49",
          "username": "newmeJustuMrCarterAkaAka4",
          "content": "How frequent this kind of question will appear in the exam?Don't know yet, will you get back once you have passed the exam?These questions never appear in the exam. But it is useful info. I am 6x AWS CertifiedGood to know! I'm sure as **** that I'll fail the exam if these questions appear ;D",
          "upvote_count": "3261"
        },
        {
          "id": 266123,
          "date": "Mon 18 Oct 2021 02:21",
          "username": "JustuMrCarterAkaAka4",
          "content": "Don't know yet, will you get back once you have passed the exam?These questions never appear in the exam. But it is useful info. I am 6x AWS CertifiedGood to know! I'm sure as **** that I'll fail the exam if these questions appear ;D",
          "upvote_count": "261"
        },
        {
          "id": 393961,
          "date": "Thu 21 Oct 2021 07:01",
          "username": "MrCarterAkaAka4",
          "content": "These questions never appear in the exam. But it is useful info. I am 6x AWS CertifiedGood to know! I'm sure as **** that I'll fail the exam if these questions appear ;D",
          "upvote_count": "61"
        },
        {
          "id": 504964,
          "date": "Sun 19 Dec 2021 16:10",
          "username": "AkaAka4",
          "content": "Good to know! I'm sure as **** that I'll fail the exam if these questions appear ;D",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#260",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization is setting up a web application with the JEE stack. The application uses the JBoss app server and MySQL DB.  The application has a logging module which logs all the activities whenever a business function of the JEE application is called. The logging activity takes some time due to the large size of the log file.<br>If the application wants to setup a scalable infrastructure which of the below mentioned options will help achieve this setup?</p>",
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
              "choice": "<p>A. Host the log files on EBS with PIOPS which will have higher I/O.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Host logging and the app server on separate servers such that they are both in the same zone.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Host logging and the app server on the same instance so that the network latency will be shorter.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a separate module for logging and using SQS compartmentalize the module such that all calls to logging are asynchronous.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 494299,
          "date": "Sun 05 Dec 2021 13:03",
          "username": "cldy",
          "content": "D.  Create a separate module for logging and using SQS compartmentalize the module such that all calls to logging are asynchronous.",
          "upvote_count": "4"
        },
        {
          "id": 288923,
          "date": "Fri 08 Oct 2021 19:19",
          "username": "Mansur",
          "content": "Answer D. <br><br>D.  Create a separate module for logging and using SQS compartmentalize the module such that all <br>calls to logging are asynchronous.",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#261",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You're trying to delete an SSL certificate from the IAM certificate store, and you're getting the message \"Certificate: &lt;certificate-id&gt; is being used by CloudFront.\"<br>Which of the following statements is probably the reason why you are getting this error?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#261",
          "answers": [
            {
              "choice": "<p>A. Before you can delete an SSL certificate you need to set up https on your server.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Before you can delete an SSL certificate, you need to set up the appropriate access level in IAM<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Before you can delete an SSL certificate, you need to either rotate SSL certificates or revert from using a custom SSL certificate to using the default CloudFront certificate.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. You can't delete SSL certificates. You need to request it from AWS.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 407781,
          "date": "Sun 10 Oct 2021 05:43",
          "username": "Aline_H",
          "content": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cnames-and-https-rotate-certificates.html",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#262",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user has set the IAM policy where it denies all requests if a request is not from IP 10.10.10.1/32. The other policy says allow all requests between 5 PM to 7<br>PM.<br>What will happen when a user is requesting access from IP 55.109.10.12/32 at 6 PM?</p>",
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
              "choice": "<p>A. It will deny access<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. It is not possible to set a policy based on the time or IP<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. IAM will throw an error for policy conflict<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. It will allow access<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 637690,
          "date": "Wed 27 Jul 2022 02:01",
          "username": "hilft",
          "content": "CLF level question. won't be in SAP",
          "upvote_count": "1"
        },
        {
          "id": 628887,
          "date": "Fri 08 Jul 2022 21:47",
          "username": "hilft",
          "content": "In plain english, block anyone that is not from 10.10.10.1/32 from 5 to 7.<br>Someone is trying with 55.109.xxx.xxx/32 - > Block.<br>The answer is A",
          "upvote_count": "1"
        },
        {
          "id": 530127,
          "date": "Sun 23 Jan 2022 00:26",
          "username": "jj22222",
          "content": "A looks right - it will deny the request",
          "upvote_count": "2"
        },
        {
          "id": 528875,
          "date": "Fri 21 Jan 2022 02:14",
          "username": "Yecine11y",
          "content": "there is no conflict with time<br>Source Ip is wrong, user will be able to access but IAM will throw an error, example:<br><br>An error occurred describing your selected AMI<br>You are not authorized to perform this operation.",
          "upvote_count": "1"
        },
        {
          "id": 499257,
          "date": "Sat 11 Dec 2021 10:21",
          "username": "cldy",
          "content": "A.  It will deny access",
          "upvote_count": "1"
        },
        {
          "id": 318955,
          "date": "Wed 20 Oct 2021 07:19",
          "username": "ExtHo",
          "content": "CIDR 10.10.10.1/32<br>First IP\t10.10.10.1<br>LastIP\t10.10.10.1<br><br>CIDR 55.109.10.12/32<br>First IP\t55.109.10.12<br>LastIP\t55.109.10.12<br><br>Since we have different IPs don't confused with time simple follow standard rule <br>By default, all requests are denied",
          "upvote_count": "1"
        },
        {
          "id": 230943,
          "date": "Tue 19 Oct 2021 03:28",
          "username": "newme",
          "content": "\\\"The other policy says allow all requests between 5 PM to 7 PM\\\"]<br>How to do this?<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Date<br>says it has to specify date and \\\"Wildcards are not permitted for date condition operators\\\"",
          "upvote_count": "2"
        },
        {
          "id": 140021,
          "date": "Fri 15 Oct 2021 00:46",
          "username": "DuyPhan",
          "content": "A is correct, explicitly deny always take higher priority",
          "upvote_count": "1"
        },
        {
          "id": 99722,
          "date": "Thu 23 Sep 2021 18:05",
          "username": "NKnabmeenu2225Oleksandr",
          "content": "D is correct. request is coming from a different ip address than the one which is deniedA is correct, Please check the question again, it says denies all the requests if the request is NOT from 10.10.10.1/32right. But the question says that all requests coming NOT from 10.10..../32 is denied.",
          "upvote_count": "121"
        },
        {
          "id": 100556,
          "date": "Thu 07 Oct 2021 13:42",
          "username": "meenu2225",
          "content": "A is correct, Please check the question again, it says denies all the requests if the request is NOT from 10.10.10.1/32",
          "upvote_count": "2"
        },
        {
          "id": 100514,
          "date": "Mon 27 Sep 2021 00:51",
          "username": "Oleksandr",
          "content": "right. But the question says that all requests coming NOT from 10.10..../32 is denied.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#263",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Do you need to use Amazon Cognito to use the Amazon Mobile Analytics service?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#263",
          "answers": [
            {
              "choice": "<p>A. No. However, it is recommend by AWS to use Amazon Cognito for security best practices.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Yes. You need to use it only if you have IAM root access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. No. You cannot use it at all, and you need to use AWS IAM accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Yes. It is recommended by AWS to use Amazon Cognito to use Amazon Mobile Analytics service.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 520455,
          "date": "Sun 09 Jan 2022 21:42",
          "username": "CloudChef",
          "content": "A a A a A",
          "upvote_count": "2"
        },
        {
          "id": 288940,
          "date": "Sun 31 Oct 2021 08:38",
          "username": "Mansur",
          "content": "Q: Do I need to use Amazon Cognito to use the Amazon Mobile Analytics service?<br><br>No. You can initialize Amazon Mobile Analytics using AWS IAM accounts. However, we recommend using Amazon Cognito for security best practices.",
          "upvote_count": "3"
        },
        {
          "id": 183603,
          "date": "Thu 28 Oct 2021 08:04",
          "username": "AlwaysLearning2020",
          "content": "Amazon Mobile Analytics is now Amazon Pinpoint. ;-)",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#264",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which of the following AWS services can be used to define alarms to trigger on a certain activity, such as activity success, failure, or delay in AWS Data Pipeline?</p>",
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
              "choice": "<p>A. Amazon SES<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Amazon CodeDeploy<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Amazon SNS<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Amazon SQS<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 175899,
          "date": "Tue 02 Nov 2021 15:09",
          "username": "Krish812003",
          "content": "Answer is C - SNS, check this link - https://aws.amazon.com/datapipeline/faqs/<br><br>Q: How do I add alarms to an activity?<br><br>You can define Amazon SNS alarms to trigger on activity success, failure, or delay. Create an alarm object and reference it in the onFail,onSuccess, or onLate slots of the activity object.",
          "upvote_count": "5"
        },
        {
          "id": 172443,
          "date": "Wed 27 Oct 2021 07:01",
          "username": "Kamazani",
          "content": "Ans=D. ..<br>The SQS queue size can be set to trigger an alarm,<br>SNS is only a notification service.",
          "upvote_count": "1"
        },
        {
          "id": 79002,
          "date": "Wed 22 Sep 2021 14:13",
          "username": "koalasy",
          "content": "it did not ask question correctly, SNS is a service but is not used to define alarm, it is the target for alarm.",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#265",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You want to use Amazon Redshift and you are planning to deploy dw1.8xlarge nodes. What is the minimum amount of nodes that you need to deploy with this kind of configuration?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#265",
          "answers": [
            {
              "choice": "<p>A. 1<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. 4<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. 3<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. 2<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 407785,
          "date": "Sun 07 Nov 2021 04:27",
          "username": "Aline_H",
          "content": "dw1.8xlarge is changed to ds2.8xlarge and node range is 2-128, so minimum is 2",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#266",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Mike is appointed as Cloud Consultant in ABC. com. ABC has the following VPCs set- up in the US East Region:<br>A VPC with CIDR block 10.10.0.0/16, a subnet in that VPC with CIDR block 10.10.1.0/24 A VPC with CIDR block 10.40.0.0/16, a subnet in that VPC with CIDR block 10.40.1.0/24 ABC. com is trying to establish network connection between two subnets, a subnet with CIDR block 10.10.1.0/24 and another subnet with CIDR block 10.40.1.0/24.<br>Which one of the following solutions should Mike recommend to ABC. com?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#266",
          "answers": [
            {
              "choice": "<p>A. Create 2 Virtual Private Gateways and configure one with each VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create 2 Internet Gateways, and attach one to each VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a VPC Peering connection between both VPCs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create one EC2 instance in each subnet, assign Elastic IPs to both instances, and configure a set up Site-to-Site VPN connection between both EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 577737,
          "date": "Tue 29 Mar 2022 18:50",
          "username": "jj22222",
          "content": "C peering connection",
          "upvote_count": "3"
        },
        {
          "id": 462416,
          "date": "Fri 08 Oct 2021 19:12",
          "username": "Bhagirathi",
          "content": "yes this shall work.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#267",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Can Provisioned IOPS be used on RDS instances launched in a VPC?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#267",
          "answers": [
            {
              "choice": "<p>A. Yes, they can be used only with Oracle based instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Yes, they can be used for all RDS instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. No<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Yes, they can be used only with MySQL based instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 496517,
          "date": "Wed 08 Dec 2021 05:10",
          "username": "cldy",
          "content": "B.  Yes, they can be used for all RDS instances.",
          "upvote_count": "3"
        },
        {
          "id": 462417,
          "date": "Fri 29 Oct 2021 14:39",
          "username": "Bhagirathi",
          "content": "B - is the option.",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#268",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>To get started using AWS Direct Connect, in which of the following steps do you configure Border Gateway Protocol (BGP)?</p>",
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
              "choice": "<p>A. Complete the Cross Connect<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure Redundant Connections with AWS Direct Connect<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a Virtual Interface</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Download Router Configuration<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 497868,
          "date": "Thu 09 Dec 2021 16:58",
          "username": "rb39",
          "content": "why not A - cross connect?",
          "upvote_count": "6"
        },
        {
          "id": 627858,
          "date": "Wed 06 Jul 2022 13:34",
          "username": "etopics",
          "content": "C.  Create a Virtual Interface",
          "upvote_count": "3"
        },
        {
          "id": 568440,
          "date": "Tue 15 Mar 2022 14:56",
          "username": "foxrj21",
          "content": "AWS Direct Connect links your internal network to an AWS Direct Connect location over a standard Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an AWS Direct Connect router. With this connection, you can create virtual interfaces directly to public AWS services (for example, to Amazon S3) or to Amazon VPC, bypassing internet service providers in your network path. An AWS Direct Connect location provides access to AWS in the Region with which it is associated. You can use a single connection in a public Region or AWS GovCloud (US) to access public AWS services in all other public Regions.",
          "upvote_count": "1"
        },
        {
          "id": 568439,
          "date": "Tue 15 Mar 2022 14:55",
          "username": "foxrj21",
          "content": "Sure C",
          "upvote_count": "1"
        },
        {
          "id": 527301,
          "date": "Wed 19 Jan 2022 08:55",
          "username": "sTeVe86",
          "content": "I believe this question belongs to ANS.<br>Similar question: #8 in https://www.examtopics.com/exams/amazon/ans-c00/view/.<br>Also \\\"Submit AWS Direct Connect Connection Request\\\" is the correct answer.<br>Unfortunately there is no such answer in here.",
          "upvote_count": "1"
        },
        {
          "id": 494114,
          "date": "Sun 05 Dec 2021 07:43",
          "username": "cldy",
          "content": "C.  Create a Virtual Interface",
          "upvote_count": "1"
        },
        {
          "id": 462418,
          "date": "Wed 13 Oct 2021 21:04",
          "username": "Bhagirathi",
          "content": "we can go with \\\" C \\\".",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#269",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which of the following components of AWS Data Pipeline polls for tasks and then performs those tasks?</p>",
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
              "choice": "<p>A. Pipeline Definition<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Task Runner<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Amazon Elastic MapReduce (EMR)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. AWS Direct Connect<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 499324,
          "date": "Sat 11 Dec 2021 11:24",
          "username": "cldy",
          "content": "B.  Task Runner",
          "upvote_count": "2"
        },
        {
          "id": 498996,
          "date": "Sat 11 Dec 2021 00:11",
          "username": "challenger1",
          "content": "My Answer: B",
          "upvote_count": "1"
        },
        {
          "id": 490397,
          "date": "Tue 30 Nov 2021 04:45",
          "username": "acloudguru",
          "content": "C and D can be easier rule out, even no idea ,this is a easy imply one ,hope i can have it in my exam",
          "upvote_count": "1"
        },
        {
          "id": 462419,
          "date": "Thu 07 Oct 2021 07:31",
          "username": "Bhagirathi",
          "content": "\\\" B \\\" is correct.",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#270",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user is hosting a public website on AWS. The user wants to have the database and the app server on the AWS VPC.  The user wants to setup a database that can connect to the Internet for any patch upgrade but cannot receive any request from the internet. How can the user set this up?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#270",
          "answers": [
            {
              "choice": "<p>A. Setup DB in a private subnet with the security group allowing only outbound traffic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Setup DB in a public subnet with the security group allowing only inbound data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Setup DB in a local data center and use a private gateway to connect the application with DB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Setup DB in a private subnet which is connected to the internet via NAT for outbound.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 650931,
          "date": "Tue 23 Aug 2022 19:34",
          "username": "Ni_yot",
          "content": "D is the right ans",
          "upvote_count": "1"
        },
        {
          "id": 625651,
          "date": "Fri 01 Jul 2022 10:32",
          "username": "TechX",
          "content": "100% D",
          "upvote_count": "1"
        },
        {
          "id": 598030,
          "date": "Sat 07 May 2022 10:20",
          "username": "tartarus23",
          "content": "D.  As best practice database should not be publicly facing, so best solution is to utilize NAT for the required internet connection.",
          "upvote_count": "1"
        },
        {
          "id": 516223,
          "date": "Tue 04 Jan 2022 05:01",
          "username": "RVivekpeddyua",
          "content": "Why not B ?<br>NAT involes costBest Practices = DB is in private subnet + NAT so only outbound is allowed. For patching only outbound should be allowed.",
          "upvote_count": "12"
        },
        {
          "id": 544972,
          "date": "Fri 11 Feb 2022 03:32",
          "username": "peddyua",
          "content": "Best Practices = DB is in private subnet + NAT so only outbound is allowed. For patching only outbound should be allowed.",
          "upvote_count": "2"
        },
        {
          "id": 462420,
          "date": "Sat 30 Oct 2021 19:03",
          "username": "Bhagirathi",
          "content": "NAT is secured",
          "upvote_count": "1"
        },
        {
          "id": 409659,
          "date": "Fri 08 Oct 2021 09:00",
          "username": "SamuelJP",
          "content": "Exactly D",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#271",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization is setting up their website on AWS. The organization is working on various security measures to be performed on the AWS EC2 instances.<br>Which of the below mentioned security mechanisms will not help the organization to avoid future data leaks and identify security weaknesses?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#271",
          "answers": [
            {
              "choice": "<p>A. Run penetration testing on AWS with prior approval from Amazon.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Perform SQL injection for application testing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Perform a Code Check for any memory leaks.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Perform a hardening test on the AWS instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 514384,
          "date": "Sat 01 Jan 2022 06:32",
          "username": "cldy",
          "content": "C correct.",
          "upvote_count": "1"
        },
        {
          "id": 311264,
          "date": "Sat 23 Oct 2021 11:47",
          "username": "JAGUARCODE",
          "content": "AWS security follows the shared security model where the user is as much responsible as Amazon.<br>Since Amazon is a public cloud it is bound to be targeted by hackers. If an organization is planning to host their application on AWS EC2, they should perform the below mentioned security checks as a measure to find any security weakness/data leaks:<br>- Perform penetration testing as performed by attackers to find any vulnerability. <br>- The organizationmust take an approval from AWS before performing penetration testing <br>- Perform hardening testing to find if there are any unnecessary ports open <br>- Perform SQL injection to find any DB security issues The code memory checks are generally useful when the organization wants to improve the application performance.",
          "upvote_count": "2"
        },
        {
          "id": 230954,
          "date": "Mon 27 Sep 2021 19:06",
          "username": "newmeconsultsk",
          "content": "Memory leak can also lead to security problems, can't it?Generally, a memory leak is a performance issue. A few times and induced bugs with the virus can also lead to it. I think these types of questions are induced to confuse. IMO: We should go by the best option 'C'.",
          "upvote_count": "22"
        },
        {
          "id": 244474,
          "date": "Wed 20 Oct 2021 21:26",
          "username": "consultsk",
          "content": "Generally, a memory leak is a performance issue. A few times and induced bugs with the virus can also lead to it. I think these types of questions are induced to confuse. IMO: We should go by the best option 'C'.",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#272",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In Amazon ElastiCache, the default cache port is:</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#272",
          "answers": [
            {
              "choice": "<p>A. for Memcached 11210 and for Redis 6380.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. for Memcached 11211 and for Redis 6380.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. for Memcached 11210 and for Redis 6379.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. for Memcached 11211 and for Redis 6379.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 568289,
          "date": "Tue 15 Mar 2022 11:27",
          "username": "foxrj21",
          "content": "Sure D!<br>https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/accessing-elasticache.html",
          "upvote_count": "1"
        },
        {
          "id": 494102,
          "date": "Sun 05 Dec 2021 07:09",
          "username": "cldy",
          "content": "D.  for Memcached 11211 and for Redis 6379.",
          "upvote_count": "1"
        },
        {
          "id": 101878,
          "date": "Thu 21 Oct 2021 18:36",
          "username": "Joeytechn9t",
          "content": "Answer D<br>https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/accessing-elasticache.html",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#273",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user has created a VPC with public and private subnets using the VPC wizard. The VPC has CIDR 20.0.0.0/16. The private subnet uses CIDR 20.0.0.0/24. The<br>NAT instance ID is i-a12345.<br>Which of the below mentioned entries are required in the main route table attached with the private subnet to allow instances to connect with the internet?</p>",
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
              "choice": "<p>A. Destination: 20.0.0.0/0 and Target: 80<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Destination: 20.0.0.0/0 and Target: i-a12345<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Destination: 20.0.0.0/24 and Target: i-a12345<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Destination: 0.0.0.0/0 and Target: i-a12345<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 541172,
          "date": "Sat 05 Feb 2022 17:48",
          "username": "ravisar",
          "content": "Answer is D <br><br>Internet Gateway (IGW) allows instances with public IPs to access the internet. <br>NAT Gateway (NGW) allows instances with no public IPs to access the internet<br> <br>The route table entry is as follows for outbound connections from Private subnet: <br>0.0.0.0/0- Destination: NAT Gateway/VirtualPrivateGateway/TransitGateway<br><br>For public subnet outbound connections, the route table entry should be: <br>0.0.0.0/0- Destination: Internet Gateway <br><br>https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html<br><br>Other entry needed in route table is for inbound connections in private and public subnet is:<br>Private Subnet CIDR - Destination : Local",
          "upvote_count": "2"
        },
        {
          "id": 498587,
          "date": "Fri 10 Dec 2021 13:01",
          "username": "cldy",
          "content": "D.  Destination: 0.0.0.0/0 and Target: i-a12345",
          "upvote_count": "1"
        },
        {
          "id": 92640,
          "date": "Sun 24 Oct 2021 17:14",
          "username": "MkumarMkumar",
          "content": "Answer Ctypo its D",
          "upvote_count": "13"
        },
        {
          "id": 92641,
          "date": "Thu 28 Oct 2021 09:45",
          "username": "Mkumar",
          "content": "typo its D",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#274",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which of the following cannot be used to manage Amazon ElastiCache and perform administrative tasks?</p>",
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
              "choice": "<p>A. AWS software development kits (SDKs)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Amazon S3<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. ElastiCache command line interface (CLI)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. AWS CloudWatch<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 23987,
          "date": "Wed 29 Sep 2021 01:08",
          "username": "Edwin_Lu",
          "content": "I think it should be B Amazon S3.<br>The AWS Management Console also provides cache node performance graphs from CloudWatch.",
          "upvote_count": "11"
        },
        {
          "id": 25133,
          "date": "Sun 03 Oct 2021 09:51",
          "username": "examacc",
          "content": "Yes it looks b",
          "upvote_count": "7"
        },
        {
          "id": 580638,
          "date": "Mon 04 Apr 2022 12:20",
          "username": "milesaws",
          "content": "skip this question",
          "upvote_count": "1"
        },
        {
          "id": 577868,
          "date": "Tue 29 Mar 2022 23:13",
          "username": "jj22222",
          "content": "i agree with b",
          "upvote_count": "2"
        },
        {
          "id": 523696,
          "date": "Fri 14 Jan 2022 20:27",
          "username": "CloudChef",
          "content": "CloudWatch is a monitoring tool and doesn't give users access to manage Amazon ElastiCache.",
          "upvote_count": "1"
        },
        {
          "id": 521579,
          "date": "Tue 11 Jan 2022 15:29",
          "username": "pititcu667",
          "content": "technically you can scale elastic cache at least the redis cluster based on cloudwatch alarms",
          "upvote_count": "1"
        },
        {
          "id": 403557,
          "date": "Sat 06 Nov 2021 21:29",
          "username": "nodogoshi",
          "content": "Cloudwatch event can run administrative tasks by many elasticaches cloud watch metcis and logs. S3 do nothing. Answer is C. ",
          "upvote_count": "1"
        },
        {
          "id": 380381,
          "date": "Mon 01 Nov 2021 19:50",
          "username": "01037",
          "content": "How to define management of ElastiCacheo（笑）<br>Just skip this one.",
          "upvote_count": "1"
        },
        {
          "id": 288988,
          "date": "Sat 30 Oct 2021 16:47",
          "username": "Mansur",
          "content": "It could be C also:<br>The Amazon ElastiCache Command Line Interface (CLI) does not support any ElastiCache improvements after API version 2014-09-30. To use newer ElastiCache functionality from the command line, use the AWS Command Line Interface.<br><br>Ref: https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/elasticache-api-reference.html",
          "upvote_count": "2"
        },
        {
          "id": 207007,
          "date": "Mon 11 Oct 2021 15:16",
          "username": "MIUnewme",
          "content": "Everyone, you have to chose False one in this question...So?<br>I think B is the wrong one though.",
          "upvote_count": "11"
        },
        {
          "id": 230956,
          "date": "Wed 27 Oct 2021 22:18",
          "username": "newme",
          "content": "So?<br>I think B is the wrong one though.",
          "upvote_count": "1"
        },
        {
          "id": 99726,
          "date": "Wed 06 Oct 2021 00:54",
          "username": "NKnabPhat",
          "content": "c - there is no such thing as ElastiCache command line interface (CLI). You need to use AWS cli.https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/elasticache-api-reference.html --> elastiscache has cmdline. So answer should be D cloudwatch, as it is just monitoring tool.",
          "upvote_count": "22"
        },
        {
          "id": 161204,
          "date": "Sun 10 Oct 2021 15:17",
          "username": "Phat",
          "content": "https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/elasticache-api-reference.html --> elastiscache has cmdline. So answer should be D cloudwatch, as it is just monitoring tool.",
          "upvote_count": "2"
        },
        {
          "id": 77710,
          "date": "Mon 04 Oct 2021 23:51",
          "username": "Exam_boy",
          "content": "S3 is used to snapshot elastic cache<br>https://aws.amazon.com/elasticache/faqs/",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#275",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which of the following statements is correct about AWS Direct Connect?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#275",
          "answers": [
            {
              "choice": "<p>A. Connections to AWS Direct Connect require double clad fiber for 1 gigabit Ethernet with Auto Negotiation enabled for the port.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. An AWS Direct Connect location provides access to Amazon Web Services in the region it is associated with.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. AWS Direct Connect links your internal network to an AWS Direct Connect location over a standard 50 gigabit Ethernet cable.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. To use AWS Direct Connect, your network must be collocated with a new AWS Direct Connect location.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 623805,
          "date": "Tue 28 Jun 2022 09:11",
          "username": "TechX",
          "content": "B is right",
          "upvote_count": "1"
        },
        {
          "id": 546363,
          "date": "Sun 13 Feb 2022 10:46",
          "username": "futen0326",
          "content": "It's B .. Need to use a DX Gateway to access other regions.",
          "upvote_count": "1"
        },
        {
          "id": 520758,
          "date": "Mon 10 Jan 2022 10:18",
          "username": "pititcu667peddyua",
          "content": "D is wrong because you do not have to be colocated. Your third party provider has to be colocated with an AWS direct connect location. Do not forget you can use partners for direct connect.one of the requirements are:<br>Your network is colocated with an existing AWS Direct Connect location",
          "upvote_count": "21"
        },
        {
          "id": 551297,
          "date": "Sat 19 Feb 2022 21:09",
          "username": "peddyua",
          "content": "one of the requirements are:<br>Your network is colocated with an existing AWS Direct Connect location",
          "upvote_count": "1"
        },
        {
          "id": 519800,
          "date": "Sat 08 Jan 2022 23:19",
          "username": "CloudChef",
          "content": "\\\"An AWS<br>Direct Connect location provides access to Amazon Web Services in the region it is associated with, as well as access to other US regions. To use AWS Direct<br>Connect, your network is collocated with an existing AWS Direct Connect location.\\\"",
          "upvote_count": "2"
        },
        {
          "id": 425919,
          "date": "Sat 06 Nov 2021 06:17",
          "username": "FERIN_01",
          "content": "B.  is wrong.<br>Yes. Direct Connect Partners can help you extend your preexisting data center or office network to a Direct Connect location. Please see Direct Connect Partners for more information. With Direct Connect Gateway, you can access any AWS Region from any AWS Direct Connect Location (excluding China)",
          "upvote_count": "1"
        },
        {
          "id": 380384,
          "date": "Thu 21 Oct 2021 05:19",
          "username": "0103701037",
          "content": "B is just half of the correct answer, so it should be wrong.<br>Another wired question, skipI was wrong. B is actually correct.<br>https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html<br>An AWS Direct Connect location provides access to AWS in the Region with which it is associated<br>https://docs.aws.amazon.com/directconnect/latest/UserGuide/remote_regions.html<br>You can create a Direct Connect gateway in any public Region. Use it to connect your AWS Direct Connect connection over a private virtual interface to VPCs in your account that are located in different Regions or to a transit gateway. For more information, see Working with Direct Connect gateways.",
          "upvote_count": "12"
        },
        {
          "id": 380385,
          "date": "Thu 04 Nov 2021 17:16",
          "username": "01037",
          "content": "I was wrong. B is actually correct.<br>https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html<br>An AWS Direct Connect location provides access to AWS in the Region with which it is associated<br>https://docs.aws.amazon.com/directconnect/latest/UserGuide/remote_regions.html<br>You can create a Direct Connect gateway in any public Region. Use it to connect your AWS Direct Connect connection over a private virtual interface to VPCs in your account that are located in different Regions or to a transit gateway. For more information, see Working with Direct Connect gateways.",
          "upvote_count": "2"
        },
        {
          "id": 318996,
          "date": "Sat 09 Oct 2021 07:11",
          "username": "ExtHo",
          "content": "May be D is rolled out due to\\\"New Keyword\\\" instead using existing AWS Direct Connect location",
          "upvote_count": "2"
        },
        {
          "id": 241919,
          "date": "Thu 30 Sep 2021 15:50",
          "username": "MichaelHuangconsultsk",
          "content": "Not B -- \\\" ...Services in the region it is associated with, as well as access to other US regions. ..\\\" <br>Should be D - \\\"...To use AWS Direct Connect, your network is collocated with an existing AWS Direct Connect location...\\\"D is correct. Even it is stated in the description, and I think the answer suggested by ExamTopics 'B' is a typo error and not correct. Again, the correct answer is 'D'.",
          "upvote_count": "23"
        },
        {
          "id": 245156,
          "date": "Thu 07 Oct 2021 10:12",
          "username": "consultsk",
          "content": "D is correct. Even it is stated in the description, and I think the answer suggested by ExamTopics 'B' is a typo error and not correct. Again, the correct answer is 'D'.",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#276",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which of the following statements is correct about the number of security groups and rules applicable for an EC2-Classic instance and an EC2-VPC network interface?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#276",
          "answers": [
            {
              "choice": "<p>A. In EC2-Classic, you can associate an instance with up to 5 security groups and add up to 50 rules to a security group. In EC2-VPC, you can associate a network interface with up to 500 security groups and add up to 100 rules to a security group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. In EC2-Classic, you can associate an instance with up to 500 security groups and add up to 50 rules to a security group. In EC2-VPC, you can associate a network interface with up to 5 security groups and add up to 100 rules to a security group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. In EC2-Classic, you can associate an instance with up to 5 security groups and add up to 100 rules to a security group. In EC2-VPC, you can associate a network interface with up to 500 security groups and add up to 50 rules to a security group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. In EC2-Classic, you can associate an instance with up to 500 security groups and add up to 100 rules to a security group. In EC2-VPC, you can associate a network interface with up to 5 security groups and add up to 50 rules to a security group.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 637046,
          "date": "Tue 26 Jul 2022 03:23",
          "username": "hilft",
          "content": "what is ec2 classic? out dated",
          "upvote_count": "1"
        },
        {
          "id": 230961,
          "date": "Sat 23 Oct 2021 18:06",
          "username": "newme01037",
          "content": "Old question.<br>For VPC, default security groups per network interface is 5, and the maximum is 16. This quota is enforced separately for IPv4 rules and IPv6 rules. The quota for security groups per network interface multiplied by the quota for rules per security group cannot exceed 1000. For example, if you increase this quota to 10, we decrease the quota for your number of rules per security group to 100.https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html",
          "upvote_count": "21"
        },
        {
          "id": 380387,
          "date": "Sun 24 Oct 2021 05:08",
          "username": "01037",
          "content": "https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html",
          "upvote_count": "1"
        },
        {
          "id": 92642,
          "date": "Fri 22 Oct 2021 10:47",
          "username": "Mkumar",
          "content": "Answer B",
          "upvote_count": "1"
        },
        {
          "id": 80368,
          "date": "Tue 19 Oct 2021 18:09",
          "username": "sergza",
          "content": "https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html Now it is 120 rules ( 60 for inbound and 60 for outbound)",
          "upvote_count": "4"
        },
        {
          "id": 41991,
          "date": "Tue 05 Oct 2021 06:14",
          "username": "Denis_H",
          "content": "Sorry, I made a mistake ...<br>This is the complete text for the ANSWER :)<br>\\\"In EC2-Classic, you can associate an instance with up to 500 security groups and add up to 100 rules to a security group. In EC2-VPC, you can associate a network interface with up to 5 security groups and add up to 50 rules to a security group.\\\"",
          "upvote_count": "4"
        },
        {
          "id": 41987,
          "date": "Wed 29 Sep 2021 21:02",
          "username": "Denis_H",
          "content": "This is the complete question: \\\"In EC2-Classic, you can associate an instance with up to 500 security groups and add up to 100 rules to a security group. In EC2-VPC, you can associate a network interface with up to 5 security groups and add up to 50 rules to a security group.\\\"",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#277",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Is there any way to own a direct connection to Amazon Web Services?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#277",
          "answers": [
            {
              "choice": "<p>A. No, AWS only allows access from the public Internet.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. No, you can create an encrypted tunnel to VPC, but you cannot own the connection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Yes, you can via Amazon Dedicated Connection<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Yes, you can via AWS Direct Connect.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 509474,
          "date": "Sun 26 Dec 2021 08:53",
          "username": "rootx",
          "content": "is that for pro exam?",
          "upvote_count": "2"
        },
        {
          "id": 389900,
          "date": "Thu 28 Oct 2021 22:10",
          "username": "DashL",
          "content": "There are two types of connections:<br>Dedicated Connection: A physical Ethernet connection associated with a single customer. Customers can request a dedicated connection through the AWS Direct Connect console, the CLI, or the API.<br>Hosted Connection: A physical Ethernet connection that an AWS Direct Connect Partner provisions on behalf of a customer. Customers request a hosted connection by contacting a partner in the AWS Direct Connect Partner Program, who provisions the connection.",
          "upvote_count": "1"
        },
        {
          "id": 380388,
          "date": "Sun 26 Sep 2021 00:13",
          "username": "01037",
          "content": "D<br>It is what Direct Connection is used for.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#278",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Identify a true statement about the statement ID (Sid) in IAM.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#278",
          "answers": [
            {
              "choice": "<p>A. You cannot expose the Sid in the IAM API.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. You cannot use a Sid value as a sub-ID for a policy document's ID for services provided by SQS and SNS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. You can expose the Sid in the IAM API.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. You cannot assign a Sid value to each statement in a statement array.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 498478,
          "date": "Fri 10 Dec 2021 10:24",
          "username": "cldy",
          "content": "A.  You cannot expose the Sid in the IAM API.",
          "upvote_count": "2"
        },
        {
          "id": 380389,
          "date": "Wed 06 Oct 2021 08:26",
          "username": "0103701037",
          "content": "OK, it is Ahttps://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html",
          "upvote_count": "12"
        },
        {
          "id": 380391,
          "date": "Fri 29 Oct 2021 09:09",
          "username": "01037",
          "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#279",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In Amazon ElastiCache, which of the following statements is correct?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#279",
          "answers": [
            {
              "choice": "<p>A. When you launch an ElastiCache cluster into an Amazon VPC private subnet, every cache node is assigned a public IP address within that subnet.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. You cannot use ElastiCache in a VPC that is configured for dedicated instance tenancy.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. If your AWS account supports only the EC2-VPC platform, ElastiCache will never launch your cluster in a VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. ElastiCache is not fully integrated with Amazon Virtual Private Cloud (VPC).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 569974,
          "date": "Thu 17 Mar 2022 18:23",
          "username": "foxrj21",
          "content": "You cannot use ElastiCache in a VPC that is configured for dedicated instance tenancy.",
          "upvote_count": "1"
        },
        {
          "id": 494136,
          "date": "Sun 05 Dec 2021 08:32",
          "username": "cldy",
          "content": "B.  You cannot use ElastiCache in a VPC that is configured for dedicated instance tenancy.",
          "upvote_count": "1"
        },
        {
          "id": 135591,
          "date": "Fri 08 Oct 2021 07:13",
          "username": "Shawn101037",
          "content": "B.  https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/VPCs.EC. htmlThank you.<br>I know none of ACD is correct.",
          "upvote_count": "41"
        },
        {
          "id": 380401,
          "date": "Wed 20 Oct 2021 20:56",
          "username": "01037",
          "content": "Thank you.<br>I know none of ACD is correct.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#280",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization has setup RDS with VPC.  The organization wants RDS to be accessible from the internet. Which of the below mentioned configurations is not required in this scenario?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#280",
          "answers": [
            {
              "choice": "<p>A. The organization must enable the parameter in the console which makes the RDS instance publicly accessible.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. The organization must allow access from the internet in the RDS VPC security group,<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The organization must setup RDS with the subnet group which has an external IP.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The organization must enable the VPC attributes DNS hostnames and DNS resolution.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 230965,
          "date": "Wed 22 Sep 2021 21:25",
          "username": "newme01037acloudguruExtHoAnonymousJhb",
          "content": "\\\"The organization must enable the parameter in the console which makes the RDS instance publicly accessible\\\"<br><br>The parameter is \\\"Public access\\\" when creating RDSOh, there is such a paramter.so the answer is A?configurations is not required :)No. You Never publicly expose RDS. RDS is always in a private subnet. Connect the dB tier to a public subnet tier with nsgs or nacls.<br>Answer is C",
          "upvote_count": "72211"
        },
        {
          "id": 380404,
          "date": "Wed 03 Nov 2021 23:16",
          "username": "01037",
          "content": "Oh, there is such a paramter.",
          "upvote_count": "2"
        },
        {
          "id": 480685,
          "date": "Thu 18 Nov 2021 13:26",
          "username": "acloudguru",
          "content": "so the answer is A?",
          "upvote_count": "2"
        },
        {
          "id": 319016,
          "date": "Wed 29 Sep 2021 16:33",
          "username": "ExtHo",
          "content": "configurations is not required :)",
          "upvote_count": "1"
        },
        {
          "id": 534816,
          "date": "Fri 28 Jan 2022 16:48",
          "username": "AnonymousJhb",
          "content": "No. You Never publicly expose RDS. RDS is always in a private subnet. Connect the dB tier to a public subnet tier with nsgs or nacls.<br>Answer is C",
          "upvote_count": "1"
        },
        {
          "id": 643015,
          "date": "Fri 05 Aug 2022 16:25",
          "username": "Sumit_Kumar",
          "content": "D is the answer - which is not required. <br>1. Publicly accessible attribute 2. Public subnets 3. Security group to allow public access - all are required",
          "upvote_count": "1"
        },
        {
          "id": 631276,
          "date": "Thu 14 Jul 2022 11:45",
          "username": "brcartoon",
          "content": "Answer is C, because there is no \\\"external\\\" IP (it should be a public subnet or public IP)",
          "upvote_count": "1"
        },
        {
          "id": 630276,
          "date": "Tue 12 Jul 2022 05:56",
          "username": "MarkChoiMarkChoi",
          "content": "Above \\\"The company desires internet access to RDS.\\\"<br>so RDS is configured with public access \\\"YES\\\"<br>also RDS instance is in a public subnet.<br>so C is not correct answer.<br>You should be following C. Oh my. I rewrite that.<br><br>Above \\\"The company desires internet access to RDS.\\\"<br>so RDS is configured with public access \\\"YES\\\"<br>also RDS instance is in a public subnet.<br>so A is not correct answer.<br>C is correct answer.",
          "upvote_count": "11"
        },
        {
          "id": 630277,
          "date": "Tue 12 Jul 2022 05:59",
          "username": "MarkChoi",
          "content": "Oh my. I rewrite that.<br><br>Above \\\"The company desires internet access to RDS.\\\"<br>so RDS is configured with public access \\\"YES\\\"<br>also RDS instance is in a public subnet.<br>so A is not correct answer.<br>C is correct answer.",
          "upvote_count": "1"
        },
        {
          "id": 628359,
          "date": "Thu 07 Jul 2022 14:41",
          "username": "Arnaud92",
          "content": "It's A;<br>A.  The organization must enable the parameter in the console which makes the RDS instance publicly accessible. NO SENSE<br><br>B.  The organization must allow access from the internet in the RDS VPC security group, CORRECT;you have to modify the security group of the RDS instance to allow internet access<br><br>C.  The organization must setup RDS with the subnet group which has an external IP.; CORRECT ; for (direct) internet access it's necessary ;https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC. Scenarios.html<br><br>D.  The organization must enable the VPC attributes DNS hostnames and DNS resolution.; CORRECT \\\"If you want your DB instance in the VPC to be publicly accessible, you must enable the VPC attributes DNS hostnames and DNS resolution. \\\" https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC. WorkingWithRDSInstanceinaVPC. html#USER_VPC. InstanceInVPC",
          "upvote_count": "1"
        },
        {
          "id": 593469,
          "date": "Thu 28 Apr 2022 04:14",
          "username": "MC9",
          "content": "It's D<br>\\\"A DB instance in a VPC accessed by a client application through the internet – To access a DB instance in a VPC from a client application through the internet, you configure a VPC with a single public subnet, and an internet gateway to enable communication over the internet.<br>To connect to a DB instance from outside of its VPC, the DB instance must be publicly accessible. Also, access must be granted using the inbound rules of the DB instance's security group, and other requirements must be met. \\\"<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_CommonTasks.Connect.html",
          "upvote_count": "2"
        },
        {
          "id": 574069,
          "date": "Thu 24 Mar 2022 05:41",
          "username": "marco_lw",
          "content": "it's A",
          "upvote_count": "1"
        },
        {
          "id": 544219,
          "date": "Thu 10 Feb 2022 02:20",
          "username": "jyrajan69",
          "content": "Attach an internet gateway to your VPC. <br>Add a route to your subnet’s route table that directs internet-bound traffic to the internet gateway. If a subnet is associated with a route table that has a route to an internet gateway, it’s known as a public subnet. If a subnet is associated with a route table that does not have a route to an internet gateway, it’s known as a private subnet.<br>Ensure that instances in your subnet have a globally unique IP address (public IPv4 address, Elastic IP address, or IPv6 address).<br>Ensure that your network access control lists and security group rules allow the relevant traffic to flow to and from your instance.<br><br>So based on this has to be C",
          "upvote_count": "2"
        },
        {
          "id": 535599,
          "date": "Sat 29 Jan 2022 17:55",
          "username": "gerhardbl",
          "content": "C - the answer that is marked as correct is already explained thoroughly. C is also the only one that absolutely makes not sense: a subnet or \\\"subnet group\\\" never has an IP address, do CCNA if you don't understand that. Other than that the question is just poorly written, definitely not a real exam question.",
          "upvote_count": "3"
        },
        {
          "id": 509472,
          "date": "Sun 26 Dec 2021 08:47",
          "username": "RVivek",
          "content": "Answer is A. <br>The question is what isnot required <br>The below URL confirms B & D are required. C is required for innetnet access<br>http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC. html<br><br>For A i could not see any reason why it is required.",
          "upvote_count": "3"
        },
        {
          "id": 505941,
          "date": "Tue 21 Dec 2021 10:05",
          "username": "nwkwahlbergusa",
          "content": "A - https://aws.amazon.com/premiumsupport/knowledge-center/rds-connectivity-instance-subnet-vpc/<br><br>in RDS Console, Under Connectivity, extend the Additional configuration section, and then choose Publicly accessible.The question is asking for the option which is NOT necessary.",
          "upvote_count": "11"
        },
        {
          "id": 510638,
          "date": "Mon 27 Dec 2021 23:30",
          "username": "wahlbergusa",
          "content": "The question is asking for the option which is NOT necessary.",
          "upvote_count": "1"
        },
        {
          "id": 494158,
          "date": "Sun 05 Dec 2021 09:26",
          "username": "cldy",
          "content": "C.  The organization must setup RDS with the subnet group which has an external IP.",
          "upvote_count": "2"
        },
        {
          "id": 491766,
          "date": "Wed 01 Dec 2021 16:25",
          "username": "wahlbergusa",
          "content": "D<br>should be D according to the recent console settings for RDS",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#281",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization, which has the AWS account ID as 999988887777, has created 50 IAM users. All the users are added to the same group ABC. <br>If the organization has enabled that each IAM user can login with the AWS console, which AWS login URL will the IAM users use??</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#281",
          "answers": [
            {
              "choice": "<p>A. https://999988887777.aws.amazon.com/ABC/<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. https://signin.aws.amazon.com/ABC/<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. https://ABC. signin.aws.amazon.com/999988887777/console/<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. https://999988887777.signin.aws.amazon.com/console/<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 446188,
          "date": "Fri 22 Oct 2021 04:54",
          "username": "moon2351",
          "content": "D is correct.",
          "upvote_count": "1"
        },
        {
          "id": 380422,
          "date": "Thu 07 Oct 2021 01:21",
          "username": "01037",
          "content": "What a question<br>D",
          "upvote_count": "2"
        },
        {
          "id": 360056,
          "date": "Thu 30 Sep 2021 06:20",
          "username": "alfa2",
          "content": "D is correct",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#282",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Can you configure multiple Load Balancers with a single Auto Scaling group?</p>",
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
              "choice": "<p>A. No<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Yes, you can but only if it is configured with Amazon Redshift.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Yes, you can provide the ELB is configured with Amazon AppStream.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Yes<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 496596,
          "date": "Wed 08 Dec 2021 07:41",
          "username": "cldy",
          "content": "D.  Yes",
          "upvote_count": "1"
        },
        {
          "id": 380423,
          "date": "Thu 28 Oct 2021 22:34",
          "username": "01037",
          "content": "D<br>Yes we can",
          "upvote_count": "1"
        },
        {
          "id": 289262,
          "date": "Tue 05 Oct 2021 03:21",
          "username": "Mansur",
          "content": "Answer D is right<br><br>Although you can attach, multiple Load Balances to a single Autoscaling group, it is rarely used, especially after AWS introduced Application Load Balancer(ALB) with support for Routing Rules(Domain and Path-based) and attaching multiple SSL Certificates for a single load balancer features.<br><br>For example, few scenarios where it was required previously (Before above mentioned new features were available)<br><br>If you have multiple applications running inside an EC2(Although it's not recommended)and needed their own SSL certificates, it must point to multiple Load Balancers.<br>If you have an Application Proxy AutoScaling Group which points to Backend Services with their own SSL.<br>For the different path and port mappings for internal applications in EC2 (Similar to Point 1)",
          "upvote_count": "4"
        },
        {
          "id": 241959,
          "date": "Mon 27 Sep 2021 05:51",
          "username": "MichaelHuang",
          "content": "Yes, you can configure more than one load balancer with an autoscaling group-- why do you need more than one ELB for each ASG?",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#283",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An Auto Scaling group is running at the desired capacity of 5 instances and receives a trigger from the Cloudwatch Alarm to increase the capacity by 1. The cool down period is 5 minutes. Cloudwatch sends another trigger after 2 minutes to decrease the desired capacity by 1.<br>What will be the count of instances at the end of 4 minutes?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#283",
          "answers": [
            {
              "choice": "<p>A. 4<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. 5<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. 6<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. 7<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 497377,
          "date": "Thu 09 Dec 2021 07:16",
          "username": "cldy",
          "content": "C.  6 EC2 instances",
          "upvote_count": "1"
        },
        {
          "id": 484678,
          "date": "Tue 23 Nov 2021 02:16",
          "username": "acloudguru",
          "content": "5 +1=6 ,as still in cool down time(5 mins), the second alarm(in 2mins) is ingnored, so after 4mins, which the cood down time is over, still 1 more mins, before the 3rd cloudwatch alarm starts, totally still 6 machines. Am I right?",
          "upvote_count": "1"
        },
        {
          "id": 446190,
          "date": "Thu 28 Oct 2021 03:29",
          "username": "moon2351",
          "content": "Answer is C",
          "upvote_count": "1"
        },
        {
          "id": 380425,
          "date": "Mon 18 Oct 2021 04:21",
          "username": "01037",
          "content": "Yes, it is 6",
          "upvote_count": "1"
        },
        {
          "id": 42004,
          "date": "Sun 19 Sep 2021 19:44",
          "username": "Denis_H",
          "content": "I think you can find more information with this two link:<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/Cooldown.html#cooldowns-multiple-instances<br>https://aws.amazon.com/premiumsupport/knowledge-center/autoscaling-policy-cloudwatch-alarm/?nc1=h_ls",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#284",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which of the following is NOT a true statement about Auto Scaling?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#284",
          "answers": [
            {
              "choice": "<p>A. Auto Scaling can launch instances in different Azs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Auto Scaling can work with CloudWatch.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Auto Scaling can launch an instance at a specific time.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Auto Scaling can launch instances in different regions.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 496520,
          "date": "Wed 08 Dec 2021 05:17",
          "username": "cldy",
          "content": "D.  Auto Scaling can launch instances in different regions.",
          "upvote_count": "1"
        },
        {
          "id": 446192,
          "date": "Sun 07 Nov 2021 07:39",
          "username": "moon2351",
          "content": "Answer is D",
          "upvote_count": "1"
        },
        {
          "id": 380428,
          "date": "Tue 19 Oct 2021 23:49",
          "username": "01037",
          "content": "Definitely D",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#285",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user wants to configure AutoScaling which scales up when the CPU utilization is above 70% and scales down when the CPU utilization is below 30%.<br>How can the user configure AutoScaling for the above mentioned condition?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#285",
          "answers": [
            {
              "choice": "<p>A. Configure ELB to notify AutoScaling on load increase or decrease<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AutoScaling with a schedule<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AutoScaling by manually modifying the desired capacity during a condition<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use dynamic AutoScaling with a policy<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 577722,
          "date": "Tue 29 Mar 2022 18:23",
          "username": "jj22222",
          "content": "D - dynamic policy",
          "upvote_count": "1"
        },
        {
          "id": 532315,
          "date": "Tue 25 Jan 2022 18:56",
          "username": "shotty1",
          "content": "it is D",
          "upvote_count": "1"
        },
        {
          "id": 462525,
          "date": "Wed 29 Sep 2021 02:20",
          "username": "Bhagirathi",
          "content": "D seems - OK",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#286",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Can a user configure a custom health check with Auto Scaling?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#286",
          "answers": [
            {
              "choice": "<p>A. Yes, but the configured data will not be saved to Auto Scaling.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. No, only an ELB health check can be configured with Auto Scaling.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Yes<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. No<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 446193,
          "date": "Sun 26 Sep 2021 11:05",
          "username": "moon2351",
          "content": "Answer is C",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#287",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You have setup an Auto Scaling group. The cool down period for the Auto Scaling group is 7 minutes. The first scaling activity request for the Auto Scaling group is to launch two instances. It receives the activity question at time \"t\", and the first instance is launched at t+3 minutes, while the second instance is launched at t<br>+4 minutes.<br>How many minutes after time \"t\" will Auto Scaling accept another scaling activity request?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#287",
          "answers": [
            {
              "choice": "<p>A. 11 minutes<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. 10 minutes<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. 7 minutes<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. 14 minutes<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 403758,
          "date": "Sun 17 Oct 2021 10:25",
          "username": "karthisena",
          "content": "Explanation:<br>If an Auto Scaling group is launching more than one instance, the cool down period for each instance<br>starts after that instance is launched. The group remains locked until the last instance that was<br>launched has completed its cool down period. In this case the cool down period for the first instance<br>starts after 3 minutes and finishes at the 10th minute (3+7 cool down), while for the second instance<br>it starts at the 4th minute and finishes at the 11th minute (4+7 cool down). Thus, the Auto Scaling<br>group will receive another request only after 11 minutes.",
          "upvote_count": "9"
        },
        {
          "id": 638364,
          "date": "Thu 28 Jul 2022 02:07",
          "username": "hilft",
          "content": "A.  7+4=?",
          "upvote_count": "1"
        },
        {
          "id": 539848,
          "date": "Thu 03 Feb 2022 18:23",
          "username": "zoliv",
          "content": "A.  don't u love math :-)",
          "upvote_count": "1"
        },
        {
          "id": 514375,
          "date": "Sat 01 Jan 2022 06:12",
          "username": "cldy",
          "content": "A correct.",
          "upvote_count": "1"
        },
        {
          "id": 80833,
          "date": "Thu 07 Oct 2021 16:54",
          "username": "zpei01037",
          "content": "https://docs.aws.amazon.com/autoscaling/ec2/userguide/Cooldown.htmlhttps://docs.aws.amazon.com/autoscaling/ec2/userguide/Cooldown.html#cooldowns-multiple-instances",
          "upvote_count": "12"
        },
        {
          "id": 380721,
          "date": "Mon 11 Oct 2021 11:28",
          "username": "01037",
          "content": "https://docs.aws.amazon.com/autoscaling/ec2/userguide/Cooldown.html#cooldowns-multiple-instances",
          "upvote_count": "2"
        },
        {
          "id": 80832,
          "date": "Thu 30 Sep 2021 03:26",
          "username": "zpei",
          "content": "https://docs.aws.amazon.com/zh_cn/autoscaling/ec2/userguide/Cooldown.html",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#288",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You have just added a new instance to your Auto Scaling group, which receives ELB health checks. An ELB heath check says the new instance's state is out of<br>Service.<br>What does Auto Scaling do in this particular scenario?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#288",
          "answers": [
            {
              "choice": "<p>A. It replaces the instance with a healthy one<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. It stops the instance<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. It marks an instance as unhealthy<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. It terminates the instance<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 671169,
          "date": "Sat 17 Sep 2022 02:34",
          "username": "LeoExam",
          "content": "will replace the unhealth one, refer the following link: https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-add-elb-healthcheck.html",
          "upvote_count": "1"
        },
        {
          "id": 651436,
          "date": "Wed 24 Aug 2022 21:49",
          "username": "Biden",
          "content": "Course Auto-Scaling replaces the unhealthy instance with a new one...hence answer is A !",
          "upvote_count": "1"
        },
        {
          "id": 596446,
          "date": "Tue 03 May 2022 22:04",
          "username": "aloha123",
          "content": "By default, the Elastic Load Balancing health checks are not enabled. When you enable these health checks and Elastic Load Balancing reports a registered instance as unhealthy, Amazon EC2 Auto Scaling marks the instance as unhealthy on its next periodic health check and replaces it",
          "upvote_count": "2"
        },
        {
          "id": 545032,
          "date": "Fri 11 Feb 2022 05:23",
          "username": "peddyuapeddyua",
          "content": "ELB indicates ec2 as \\\"out of service\\\" means it's already marked as unhealthy, first scaling activity is to terminate unhealthy EC2, then next scaling activity happens which is launch Healthy EC2.<br>D. Changing to C. ",
          "upvote_count": "12"
        },
        {
          "id": 545034,
          "date": "Fri 11 Feb 2022 05:28",
          "username": "peddyua",
          "content": "Changing to C. ",
          "upvote_count": "2"
        },
        {
          "id": 533144,
          "date": "Wed 26 Jan 2022 19:32",
          "username": "lulz111",
          "content": "Its A&C<br>\\\"After an instance has been marked unhealthy because of a health check, it is almost immediately scheduled for replacement. It never automatically recovers its health. You can intervene manually by calling the set-instance-health command to set the instance's health status back to healthy. If the instance is already terminating, you get an error. \\\"<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html",
          "upvote_count": "1"
        },
        {
          "id": 527023,
          "date": "Tue 18 Jan 2022 22:35",
          "username": "CloudChef",
          "content": "It marks it as unhealthy.",
          "upvote_count": "2"
        },
        {
          "id": 497748,
          "date": "Thu 09 Dec 2021 14:25",
          "username": "fais1985fais1985",
          "content": "A & B both are correct,it terminates that instance and launches a new one. <br>Going with A , because what if the option is specified as not to replace with healthy one.Sorry its A & D",
          "upvote_count": "11"
        },
        {
          "id": 497749,
          "date": "Thu 09 Dec 2021 14:26",
          "username": "fais1985",
          "content": "Sorry its A & D",
          "upvote_count": "1"
        },
        {
          "id": 489323,
          "date": "Sun 28 Nov 2021 19:00",
          "username": "ryu10_09",
          "content": "A.  it replaces the instance with a healty once unless specified not to do so (with ReplaceHealhy feature)",
          "upvote_count": "1"
        },
        {
          "id": 487075,
          "date": "Fri 26 Nov 2021 05:18",
          "username": "Gurnoor",
          "content": "Terminates the instance.",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#289",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A sys admin is maintaining an application on AWS. The application is installed on EC2 and user has configured ELB and Auto Scaling. Considering future load increase, the user is planning to launch new servers proactively so that they get registered with ELB. <br>How can the user add these instances with Auto Scaling?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#289",
          "answers": [
            {
              "choice": "<p>A. Decrease the minimum limit of the Auto Scaling group<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Increase the maximum limit of the Auto Scaling group<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Launch an instance manually and register it with ELB on the fly<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Increase the desired capacity of the Auto Scaling group<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 651438,
          "date": "Wed 24 Aug 2022 21:53",
          "username": "Biden",
          "content": "Playing with words here... Future Load Increase = Max Limit, Proactive = Desired capacity. But since is finally says \\\"planning to Launch\\\" = Answer D",
          "upvote_count": "1"
        },
        {
          "id": 534097,
          "date": "Thu 27 Jan 2022 21:08",
          "username": "Ni_yot",
          "content": "D is correct.When you set the capacity, auto scaling will do the rest when needed.",
          "upvote_count": "1"
        },
        {
          "id": 462534,
          "date": "Tue 05 Oct 2021 08:14",
          "username": "Bhagirathi",
          "content": "D seems OK",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#290",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You have set up Auto Scaling to automatically scale in. Consequently, you must decide which instances Auto Scaling should end first.<br>What should you use to configure this?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#290",
          "answers": [
            {
              "choice": "<p>A. An Elastic Load Balancer<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. A termination policy<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. An IAM role<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Another scaling group<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 499072,
          "date": "Sat 11 Dec 2021 04:40",
          "username": "challenger1",
          "content": "My Answer: B",
          "upvote_count": "1"
        },
        {
          "id": 446204,
          "date": "Sat 09 Oct 2021 12:58",
          "username": "moon2351",
          "content": "Answer is B",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#291",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which of the following commands accepts binary data as parameters?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#291",
          "answers": [
            {
              "choice": "<p>A. --user-data<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. ג€\"cipher text-key<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. --aws-customer-key<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. --describe-instances-user<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 446553,
          "date": "Mon 25 Oct 2021 21:33",
          "username": "moon2351",
          "content": "Answer is Correct",
          "upvote_count": "2"
        },
        {
          "id": 289286,
          "date": "Wed 13 Oct 2021 13:03",
          "username": "MansurExtHo01037",
          "content": "Binary files<br>For commands that take binary data as a parameter, specify that the data is binary content using the fileb:// prefix. Commands that accept binary data include:<br>• aws ec2 run-instances–--user-dataparameter.<br>• aws s3api put-object–--sse-customer-keyparameter. <br>• aws kms decrypt–--ciphertext-blobparameter.https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-file.html#cli-usage-parameters-file-binaryThank you",
          "upvote_count": "231"
        },
        {
          "id": 319341,
          "date": "Sun 17 Oct 2021 00:27",
          "username": "ExtHo01037",
          "content": "https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-file.html#cli-usage-parameters-file-binaryThank you",
          "upvote_count": "31"
        },
        {
          "id": 380728,
          "date": "Sun 24 Oct 2021 05:28",
          "username": "01037",
          "content": "Thank you",
          "upvote_count": "1"
        },
        {
          "id": 231110,
          "date": "Sat 02 Oct 2021 13:22",
          "username": "newme",
          "content": "is base64-encoded text binary dat?",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#292",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>To scale out the AWS resources using manual AutoScaling, which of the below mentioned parameters should the user change?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#292",
          "answers": [
            {
              "choice": "<p>A. Current capacity<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Desired capacity<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Preferred capacity<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Maximum capacity<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 607547,
          "date": "Thu 26 May 2022 10:53",
          "username": "AnhddDdssssss",
          "content": "why not D? Because it talk about scale out, is it?because the term is desired capacity.",
          "upvote_count": "11"
        },
        {
          "id": 614098,
          "date": "Thu 09 Jun 2022 18:35",
          "username": "Ddssssss",
          "content": "because the term is desired capacity.",
          "upvote_count": "1"
        },
        {
          "id": 566275,
          "date": "Sat 12 Mar 2022 17:40",
          "username": "foxrj21",
          "content": "B.  Desired capacity",
          "upvote_count": "3"
        },
        {
          "id": 494103,
          "date": "Sun 05 Dec 2021 07:09",
          "username": "cldy",
          "content": "B.  Desired capacity",
          "upvote_count": "1"
        },
        {
          "id": 462573,
          "date": "Wed 13 Oct 2021 07:40",
          "username": "Bhagirathiacloudguru",
          "content": "B is correct\\\"The minimum and maximum size limits also apply when you manually scale your Auto Scaling group, such as when you want to turn off auto scaling and have the group run at a fixed size, either temporarily or permanently. In this case, you can manage the size of the Auto Scaling group by updating its desired capacity as needed.\\\" https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-capacity-limits.html",
          "upvote_count": "12"
        },
        {
          "id": 479878,
          "date": "Wed 17 Nov 2021 09:45",
          "username": "acloudguru",
          "content": "\\\"The minimum and maximum size limits also apply when you manually scale your Auto Scaling group, such as when you want to turn off auto scaling and have the group run at a fixed size, either temporarily or permanently. In this case, you can manage the size of the Auto Scaling group by updating its desired capacity as needed.\\\" https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-capacity-limits.html",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#293",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>After moving an E-Commerce website for a client from a dedicated server to AWS you have also set up auto scaling to perform health checks on the instances in your group and replace instances that fail these checks. Your client has come to you with his own health check system that he wants you to use as it has proved to be very useful prior to his site running on AWS.<br>What do you think would be an appropriate response to this given all that you know about auto scaling and CloudWatch?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#293",
          "answers": [
            {
              "choice": "<p>A. It is not possible to implement your own health check system due to compatibility issues.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. It is not possible to implement your own health check system. You need to use AWSs health check system.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. It is possible to implement your own health check system and then send the instance's health information directly from your system to CloudWatch but only in the US East (N. Virginia) region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. It is possible to implement your own health check system and then send the instance's health information directly from your system to CloudWatch.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 604946,
          "date": "Sat 21 May 2022 18:09",
          "username": "bobsmith2000",
          "content": "Isn't it a bulls about Cloud watch? <br>You send a Health check via SDK or CLI, don't you?",
          "upvote_count": "1"
        },
        {
          "id": 497791,
          "date": "Thu 09 Dec 2021 15:25",
          "username": "cldy",
          "content": "D.  It is possible to implement your own health check system and then send the instance's health information directly from your system to CloudWatch.",
          "upvote_count": "1"
        },
        {
          "id": 446557,
          "date": "Sat 06 Nov 2021 09:47",
          "username": "moon2351",
          "content": "Answer is Correct",
          "upvote_count": "1"
        },
        {
          "id": 380729,
          "date": "Mon 18 Oct 2021 09:01",
          "username": "01037",
          "content": "Yes, you can use custom health check.<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html<br><br>But is it sent to CloudWatch?<br>Not sure about it, can't find any reference either.",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#294",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Identify a benefit of using Auto Scaling for your application.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#294",
          "answers": [
            {
              "choice": "<p>A. Your application gains better fault tolerance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Your application optimizes only logistics and operations.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Your application receives latency requirements in every region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. You acquire clarity on prototypes in your application.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 624363,
          "date": "Wed 29 Jun 2022 03:44",
          "username": "TechX",
          "content": "Answer: A<br>Explanation:<br>When you use Auto Scaling, your applications gain better fault tolerance. Auto Scaling can detect when an instance is unhealthy, terminate it, and launch an instance to replace it. You can also configure Auto Scaling to use multiple Availability Zones. If one Availability Zone becomes unavailable, Auto Scaling can launch instances in another one to compensate. http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/how-as-works.html",
          "upvote_count": "2"
        },
        {
          "id": 532374,
          "date": "Tue 25 Jan 2022 20:49",
          "username": "Ni_yot",
          "content": "A is correct",
          "upvote_count": "1"
        },
        {
          "id": 380731,
          "date": "Sat 06 Nov 2021 02:56",
          "username": "01037",
          "content": "First think about the difference of HA and FT.<br>https://www.ibm.com/docs/en/powerha-aix/7.2?topic=aix-high-availability-versus-fault-tolerance<br><br>FT: no service interruption<br>HA: minimal service interruption<br>FT is a upgrade version of HA",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#295",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user has suspended the scaling process on the Auto Scaling group. A scaling activity to increase the instance count was already in progress.<br>What effect will the suspension have on that activity?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#295",
          "answers": [
            {
              "choice": "<p>A. No effect. The scaling activity continues<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Pauses the instance launch and launches it only after Auto Scaling is resumed<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Terminates the instance<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Stops the instance temporary<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 496792,
          "date": "Wed 08 Dec 2021 13:03",
          "username": "cldy",
          "content": "A.  No effect. The scaling activity continues",
          "upvote_count": "1"
        },
        {
          "id": 380742,
          "date": "Sat 09 Oct 2021 00:31",
          "username": "01037",
          "content": "Though not find any reference about \\\"Scaling activities that were already in progress before the group was suspended continue until completed.\\\", after trying, it is true.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#296",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Does Autoscaling automatically assign tags to resources?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#296",
          "answers": [
            {
              "choice": "<p>A. No, not unless they are configured via API.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Yes, it does.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Yes, by default.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. No, it does not.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 607948,
          "date": "Fri 27 May 2022 08:42",
          "username": "bobsmith2000",
          "content": "According to Exam_boy's link, it's clearly C. ",
          "upvote_count": "2"
        },
        {
          "id": 514378,
          "date": "Sat 01 Jan 2022 06:16",
          "username": "cldywahlbergusaLiamNgtobstar86",
          "content": "B correct.I think it should be C.  As there is this note in Exam_boy' s URL - \\\"The Auto Scaling group automatically adds a tag to instances with a key of aws:autoscaling:groupName and a value of the Auto Scaling group name.\\\"I believe answer is C.  The Key point is \\\"it adds tags to the instances during resource creation rather than after the resource is created\\\" so that it will be tagged by default.<br>The provided answers are confusing and badly designed.So what's the difference between B and C? Judging by the URL adding it \\\"automatically\\\" also means, it always does it = default?",
          "upvote_count": "4211"
        },
        {
          "id": 527427,
          "date": "Wed 19 Jan 2022 11:56",
          "username": "wahlbergusaLiamNgtobstar86",
          "content": "I think it should be C.  As there is this note in Exam_boy' s URL - \\\"The Auto Scaling group automatically adds a tag to instances with a key of aws:autoscaling:groupName and a value of the Auto Scaling group name.\\\"I believe answer is C.  The Key point is \\\"it adds tags to the instances during resource creation rather than after the resource is created\\\" so that it will be tagged by default.<br>The provided answers are confusing and badly designed.So what's the difference between B and C? Judging by the URL adding it \\\"automatically\\\" also means, it always does it = default?",
          "upvote_count": "211"
        },
        {
          "id": 603311,
          "date": "Wed 18 May 2022 15:31",
          "username": "LiamNg",
          "content": "I believe answer is C.  The Key point is \\\"it adds tags to the instances during resource creation rather than after the resource is created\\\" so that it will be tagged by default.<br>The provided answers are confusing and badly designed.",
          "upvote_count": "1"
        },
        {
          "id": 567271,
          "date": "Mon 14 Mar 2022 01:57",
          "username": "tobstar86",
          "content": "So what's the difference between B and C? Judging by the URL adding it \\\"automatically\\\" also means, it always does it = default?",
          "upvote_count": "1"
        },
        {
          "id": 78942,
          "date": "Thu 23 Sep 2021 02:20",
          "username": "Exam_boy",
          "content": "https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-tagging.html#tag-lifecycle",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#297",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>If you have a running instance using an Amazon EBS boot partition, you can call the _______ API to release the compute resources but preserve the data on the boot partition.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#297",
          "answers": [
            {
              "choice": "<p>A. Stop Instances<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Terminate Instances<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. AMI Instance<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Ping Instance<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 636855,
          "date": "Mon 25 Jul 2022 19:26",
          "username": "hilft",
          "content": "C.  Stop<br>not Terminate",
          "upvote_count": "1"
        },
        {
          "id": 520733,
          "date": "Mon 10 Jan 2022 09:18",
          "username": "GeniusMikeLiuGeniusMikeLiu",
          "content": "A is right. Terminate Instances will default delete ebs volumes.https://aws.amazon.com/cn/premiumsupport/knowledge-center/deleteontermination-ebs/",
          "upvote_count": "11"
        },
        {
          "id": 520736,
          "date": "Mon 10 Jan 2022 09:19",
          "username": "GeniusMikeLiu",
          "content": "https://aws.amazon.com/cn/premiumsupport/knowledge-center/deleteontermination-ebs/",
          "upvote_count": "1"
        },
        {
          "id": 446856,
          "date": "Mon 04 Oct 2021 05:27",
          "username": "nodogoshichocojigy",
          "content": "Terminate Instances also do this.not maintaiing boot partiotion's data",
          "upvote_count": "11"
        },
        {
          "id": 630395,
          "date": "Tue 12 Jul 2022 10:27",
          "username": "chocojigy",
          "content": "not maintaiing boot partiotion's data",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#298",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which EC2 functionality allows the user to place the Cluster Compute instances in clusters?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#298",
          "answers": [
            {
              "choice": "<p>A. Cluster group<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Cluster security group<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. GPU units<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Cluster placement group<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 650850,
          "date": "Tue 23 Aug 2022 16:16",
          "username": "Ni_yot",
          "content": "It is D",
          "upvote_count": "1"
        },
        {
          "id": 577934,
          "date": "Wed 30 Mar 2022 01:45",
          "username": "jj22222",
          "content": "D.  Cluster placement group",
          "upvote_count": "1"
        },
        {
          "id": 462575,
          "date": "Wed 20 Oct 2021 02:48",
          "username": "Bhagirathi",
          "content": "Yes - D",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#299",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user has launched a dedicated EBS backed instance with EC2. You are curious where the EBS volume for this instance will be created.<br>Which statement is correct about the EBS volume's creation?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#299",
          "answers": [
            {
              "choice": "<p>A. The EBS volume will not be created on the same tenant hardware assigned to the dedicated instance<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. AWS does not allow a dedicated EBS backed instance launch<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The EBS volume will be created on the same tenant hardware assigned to the dedicated instance<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The user can specify where the EBS will be created<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 498431,
          "date": "Fri 10 Dec 2021 09:50",
          "username": "cldy",
          "content": "A.  The EBS volume will not be created on the same tenant hardware assigned to the dedicated instance",
          "upvote_count": "2"
        },
        {
          "id": 380753,
          "date": "Sun 26 Sep 2021 09:52",
          "username": "01037",
          "content": "I don't think there is such thing as \\\"a dedicated EBS backed instance\\\".<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-instance.html<br>Amazon EBS with Dedicated Instances<br>When you launch an Amazon EBS-backed Dedicated Instance, the EBS volume doesn't run on single-tenant hardware.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#300",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which system is used by Amazon Machine Images paravirtual (PV) virtualization during the boot process?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#300",
          "answers": [
            {
              "choice": "<p>A. PV-BOOT<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. PV-AMI<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. PV-WORM<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. PV-GRUB<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 576104,
          "date": "Sun 27 Mar 2022 12:01",
          "username": "Mechanic",
          "content": "D. <br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/virtualization_types.html",
          "upvote_count": "1"
        },
        {
          "id": 511685,
          "date": "Wed 29 Dec 2021 02:14",
          "username": "eightddy",
          "content": "D.  PV-GRUB",
          "upvote_count": "1"
        },
        {
          "id": 495744,
          "date": "Tue 07 Dec 2021 08:42",
          "username": "cldy",
          "content": "D.  PV-GRUB",
          "upvote_count": "2"
        }
      ]
    }
  ]
}