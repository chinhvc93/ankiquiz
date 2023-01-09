var DVA_C01_Part6 = 
{
    "msg": "Quiz Questions",
    "data": [
      {
        "question_id": "#29",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Which of the following is chosen as the default region when making an API call with an AWS SDK?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#29",
            "answers": [
              {
                "choice": "<p>A. ap-northeast-1<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. us-west-2<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. us-east-1<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. eu-west-1<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. us-central-1<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 2 question 29 discussion",
        "discusstion": [
          {
            "id": 238446,
            "date": "Wed 03 Nov 2021 15:52",
            "username": "RicardoD",
            "content": "C is the answer<br><br>Default SDK region is us-east-1",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 193891,
            "date": "Tue 02 Nov 2021 08:02",
            "username": "Chinta",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 154851,
            "date": "Thu 28 Oct 2021 07:09",
            "username": "saeidp",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 139281,
            "date": "Thu 28 Oct 2021 05:01",
            "username": "wackyGuru",
            "content": "C.  us-east-1",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 128901,
            "date": "Thu 21 Oct 2021 19:11",
            "username": "Scarback",
            "content": "Resp: C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 114534,
            "date": "Wed 20 Oct 2021 03:10",
            "username": "Donell",
            "content": "Answer:C<br>When you use an endpoint with no Region, AWS routes the Amazon EC2 request to US East (N. Virginia) (us-east-1), which is the default Region for API calls.<br><br>Reference: https://docs.amazonaws.cn/en_us/general/latest/gr/rande.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 78522,
            "date": "Fri 15 Oct 2021 03:27",
            "username": "semi_sonic",
            "content": "C.  us-east-1",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 67750,
            "date": "Thu 14 Oct 2021 04:50",
            "username": "kinetic1g",
            "content": "C.  us-east-1",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 48222,
            "date": "Sun 03 Oct 2021 02:35",
            "username": "Dev1",
            "content": "Ans: C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 47046,
            "date": "Mon 27 Sep 2021 05:35",
            "username": "awscertified",
            "content": "C.  us-east-1",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 41477,
            "date": "Thu 23 Sep 2021 06:59",
            "username": "jonnalagaddaBach999",
            "content": "C is the answer<br>use the default SDK region (USEast1).<br>https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/java-dg-region-selection.htmlAutomatically Determine the AWS Region from the Environment<br>Important<br>This section applies only when using a client builder to access AWS services. AWS clients created by using the client constructor will not automatically determine region from the environment and will, instead, use the default SDK region (USEast1).",
            "upvote_count": "23",
            "selected_answers": ""
          },
          {
            "id": 55830,
            "date": "Fri 08 Oct 2021 08:02",
            "username": "Bach999",
            "content": "Automatically Determine the AWS Region from the Environment<br>Important<br>This section applies only when using a client builder to access AWS services. AWS clients created by using the client constructor will not automatically determine region from the environment and will, instead, use the default SDK region (USEast1).",
            "upvote_count": "3",
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
        "question_text": "<p>EC2 instances are launched from Amazon Machine images (AMIs). A given public AMI can:<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#35",
            "answers": [
              {
                "choice": "<p>A. be used to launch EC2 Instances in any AWS region.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. only be used to launch EC2 instances in the same country as the AMI is stored.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. only be used to launch EC2 instances in the same AWS region as the AMI is stored.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. only be used to launch EC2 instances in the same AWS availability zone as the AMI is stored<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 2 question 35 discussion",
        "discusstion": [
          {
            "id": 30846,
            "date": "Tue 21 Sep 2021 00:19",
            "username": "aws_Tamilan",
            "content": "C.  only be used to launch EC2 instances in the same AWS region as the AMI is stored.",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 239318,
            "date": "Thu 28 Oct 2021 11:45",
            "username": "RicardoD",
            "content": "C is the answer<br>AMIs are available to launch machines only in the region they were stored",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 193898,
            "date": "Wed 20 Oct 2021 14:13",
            "username": "Chinta",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 174343,
            "date": "Sun 17 Oct 2021 20:56",
            "username": "saeidp",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 139291,
            "date": "Sat 16 Oct 2021 00:57",
            "username": "wackyGuru",
            "content": "C.  only be used to launch EC2 instances in the same AWS region as the AMI is stored.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 128909,
            "date": "Fri 15 Oct 2021 18:27",
            "username": "Scarback",
            "content": "Resp: C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 67756,
            "date": "Tue 12 Oct 2021 15:45",
            "username": "kinetic1g",
            "content": "C.  only be used to launch EC2 instances in the same AWS region as the AMI is stored.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 48236,
            "date": "Tue 28 Sep 2021 21:20",
            "username": "Dev1",
            "content": "Ans: C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 47053,
            "date": "Sun 26 Sep 2021 17:34",
            "username": "awscertifiedBach999",
            "content": "C.  only be used to launch EC2 instances in the same AWS region as the AMI is stored.https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/usingsharedamis-finding.html<br><br>You can use the Amazon EC2 console or the command line to find shared AMIs.<br><br>Note<br>AMIs are a regional resource. Therefore, when searching for a shared AMI (public or private), you must search for it from within the region from which it is being shared. To make an AMI available in a different region, copy the AMI to the region and then share it. For more information, see Copying an AMI.",
            "upvote_count": "48",
            "selected_answers": ""
          },
          {
            "id": 55839,
            "date": "Wed 06 Oct 2021 14:35",
            "username": "Bach999",
            "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/usingsharedamis-finding.html<br><br>You can use the Amazon EC2 console or the command line to find shared AMIs.<br><br>Note<br>AMIs are a regional resource. Therefore, when searching for a shared AMI (public or private), you must search for it from within the region from which it is being shared. To make an AMI available in a different region, copy the AMI to the region and then share it. For more information, see Copying an AMI.",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 36542,
            "date": "Fri 24 Sep 2021 08:42",
            "username": "doofus",
            "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sharingamis-intro.html",
            "upvote_count": "1",
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
        "question_text": "<p>Which EC2 API call would you use to retrieve a list of Amazon Machine Images (AMIs)?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#36",
            "answers": [
              {
                "choice": "<p>A. DescnbeInstances<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. DescribeAMls<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. DescribeImages<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. GetAMls<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. You cannot retrieve a list of AMIs as there are over 10,000 AMIs<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 2 question 36 discussion",
        "discusstion": [
          {
            "id": 239319,
            "date": "Tue 02 Nov 2021 18:28",
            "username": "RicardoD",
            "content": "C is the answer<br><br>Describes the specified images (AMIs, AKIs, and ARIs) available to you or all of the images available to you.<br><br>The images available to you include public images, private images that you own, and private images owned by other AWS accounts for which you have explicit launch permissions.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 193899,
            "date": "Tue 02 Nov 2021 15:09",
            "username": "Chinta",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 155823,
            "date": "Sat 30 Oct 2021 16:21",
            "username": "saeidp",
            "content": "C is the correct answere<br>https://ec2.amazonaws.com/?ActionDescribeImages&ImageId.1ami-1234567890EXAMPLE&AUTHPARAMS",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 78530,
            "date": "Mon 18 Oct 2021 15:46",
            "username": "semi_sonic",
            "content": "C.  DescribeImages",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 67757,
            "date": "Mon 18 Oct 2021 07:14",
            "username": "kinetic1g",
            "content": "C.  DescribeImages",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 48237,
            "date": "Sat 09 Oct 2021 03:47",
            "username": "Dev1",
            "content": "Ans: C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 47054,
            "date": "Tue 05 Oct 2021 19:31",
            "username": "awscertified",
            "content": "C.  DescribeImages",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 34538,
            "date": "Sun 03 Oct 2021 00:44",
            "username": "Athena",
            "content": "Ans is C<br>https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImages.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 30847,
            "date": "Tue 21 Sep 2021 20:06",
            "username": "aws_Tamilan",
            "content": "C.  DescribeImages",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 19099,
            "date": "Tue 21 Sep 2021 15:25",
            "username": "sg0206",
            "content": "C is correct : - Describes the specified images (AMIs, AKIs, and ARIs) available to you or all of the images available to you.",
            "upvote_count": "4",
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
        "question_text": "<p>Which of the following platforms are supported by Elastic Beanstalk? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AB</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#40",
            "answers": [
              {
                "choice": "<p>A. Apache Tomcat<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. .NET<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. IBM Websphere<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Oracle JBoss<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Jetty<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 2 question 40 discussion",
        "discusstion": [
          {
            "id": 711446,
            "date": "Sat 05 Nov 2022 00:44",
            "username": "cloud_collector",
            "content": "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html#concepts.platforms.list",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 239329,
            "date": "Sun 07 Nov 2021 17:24",
            "username": "RicardoD",
            "content": "A | B are the answers<br><br>Elastic Beanstalk provides platforms for programming languages (Go, Java, Node. js, PHP, Python, Ruby), application servers (Tomcat, Passenger, Puma), and Docker containers.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 193905,
            "date": "Fri 22 Oct 2021 11:22",
            "username": "Chinta",
            "content": "AB is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 155836,
            "date": "Mon 18 Oct 2021 15:54",
            "username": "saeidp",
            "content": "A B are the correct ones",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 139297,
            "date": "Tue 12 Oct 2021 12:55",
            "username": "wackyGuru",
            "content": "A.  Apache TomcatB.  .NET",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 67760,
            "date": "Fri 01 Oct 2021 18:22",
            "username": "kinetic1g",
            "content": "A.  Apache TomcatB.  .NET",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 48258,
            "date": "Wed 29 Sep 2021 17:00",
            "username": "Dev1",
            "content": "Ans: A, B<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/platforms/platforms-supported.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 47063,
            "date": "Thu 23 Sep 2021 10:47",
            "username": "awscertified",
            "content": "A.  Apache TomcatB.  .NET",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 30860,
            "date": "Wed 22 Sep 2021 20:46",
            "username": "aws_Tamilan",
            "content": "A.  Apache TomcatB.  .NET",
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
        "question_text": "<p>You have an environment that consists of a public subnet using Amazon VPC and 3 instances that are running in this subnet. These three instances can successfully communicate with other hosts on the Internet. You launch a fourth instance in the same subnet, using the same AMI and security group configuration you used for the others, but find that this instance cannot be accessed from the Internet.<br>What should you do to enable internet access?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#45",
            "answers": [
              {
                "choice": "<p>A. Deploy a NAT instance into the public subnet.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Modify the routing table for the public subnet<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure a publically routable IP Address In the host OS of the fourth instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Assign an Elastic IP address to the fourth instance.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 2 question 45 discussion",
        "discusstion": [
          {
            "id": 155859,
            "date": "Fri 15 Oct 2021 18:34",
            "username": "saeidp",
            "content": "D is correct<br>For an EC2 instance to have internet access, that instance needs to have a public/elastic IP address assigned to it, and the instance needs to also reside inside a public subnet.<br>Public IP Address is also correct but in every boot it might be different address",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 353104,
            "date": "Sun 07 Nov 2021 06:31",
            "username": "VAG1595",
            "content": "Answer: D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 332331,
            "date": "Fri 05 Nov 2021 15:51",
            "username": "Karanbansal14",
            "content": "Why not B?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 258367,
            "date": "Mon 25 Oct 2021 10:44",
            "username": "AWSAssociateDeveloperGNKx2210",
            "content": "I dont understand why VPC questions are asked with this much depth!<br>we are preparing for developer associate, VPC should be deeply asked in Architect examsI think this question is very basic that you guys need to know for work with AWS",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 263188,
            "date": "Tue 02 Nov 2021 01:32",
            "username": "GNKx2210",
            "content": "I think this question is very basic that you guys need to know for work with AWS",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 239357,
            "date": "Thu 21 Oct 2021 09:51",
            "username": "RicardoD",
            "content": "D is the Answer<br><br>Clearly the instance has been launched without a public IP and to access internet, hence you will need to assign an Elastic IP to this instance.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 214444,
            "date": "Wed 20 Oct 2021 01:19",
            "username": "jpush",
            "content": "ANS IS D<br><br>An Elastic IP address is a static IPv4 address designed for dynamic cloud computing. By using an Elastic IP address, you can mask the failure of an instance or software by rapidly remapping the address to another instance in your account. An Elastic IP address is allocated to your AWS account, and is yours until you release it.<br><br>An Elastic IP address is a public IPv4 address, which is reachable from the internet. If your instance does not have a public IPv4 address, you can associate an Elastic IP address with your instance to enable communication with the internet. For example, this allows you to connect to your instance from your local computer.<br><br>We currently do not support Elastic IP addresses for IPv6.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 200373,
            "date": "Tue 19 Oct 2021 18:53",
            "username": "vjt",
            "content": "D is correct.<br>For people thinking C, you cannot assign a public address if instance is launched without one. only option left is to assign an elastic one or terminate and change subnet setting and then start a new instance.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 193912,
            "date": "Mon 18 Oct 2021 01:09",
            "username": "Chinta",
            "content": "D is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 129360,
            "date": "Sat 09 Oct 2021 02:13",
            "username": "onlinebaba",
            "content": "D<br>In this scenario other instances can communicate to/from the internet which means they have a public address and are also connected to a IGW. Now a fourth instance has been launched in the same subnet with same security group but this instance cannot communicate with the internet. One plausible reason could be the subnet has turned off automatic assignment of public address when an EC2 instance is created, which mean any new instance created will not have a public IP and therefore cannot communicate with the Internet. The only option here is to assign an Elastic IP.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 123196,
            "date": "Fri 01 Oct 2021 22:03",
            "username": "smt1234AwsTrevNorthStar2010",
            "content": "I don't understand either. Why D? Sounds like the other 3 working instances all have elastic IPs? Surely you don't have to have elastic IPs to access InternetThis issue is not about the 4th instance accessing the internet.... It's about this instance being accessed FROM the internet.When you launch an EC2, there's an option to enable public IP address assignment which they didn't selected. The only way to assign a public IP is assigning an Elastic IP.There is a cost only if you don't use the elastic IP, meaning you requested but didn't detach and released",
            "upvote_count": "233",
            "selected_answers": ""
          },
          {
            "id": 127148,
            "date": "Mon 04 Oct 2021 02:48",
            "username": "AwsTrev",
            "content": "This issue is not about the 4th instance accessing the internet.... It's about this instance being accessed FROM the internet.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 127338,
            "date": "Tue 05 Oct 2021 09:52",
            "username": "NorthStar2010",
            "content": "When you launch an EC2, there's an option to enable public IP address assignment which they didn't selected. The only way to assign a public IP is assigning an Elastic IP.There is a cost only if you don't use the elastic IP, meaning you requested but didn't detach and released",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 98332,
            "date": "Fri 01 Oct 2021 09:40",
            "username": "chalosca",
            "content": "Answer is C<br>Public IP wasn't enabled by default.<br>We need to add a public IP on the host.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 88189,
            "date": "Wed 29 Sep 2021 07:07",
            "username": "awswannabe",
            "content": "wouldnt the Elastic IP cost money? perhaps the routing table can be checked if enough ip is available for the subnet range?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 77954,
            "date": "Wed 29 Sep 2021 01:20",
            "username": "AWS_best_developer",
            "content": "Why D?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 67766,
            "date": "Tue 28 Sep 2021 18:09",
            "username": "kinetic1g",
            "content": "D.  Assign an Elastic IP address to the fourth instance.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 58858,
            "date": "Fri 24 Sep 2021 07:32",
            "username": "atogeekhdesairusll",
            "content": "Why not A ?NAT is only for private subnet needing access to internet. Here it says that subnet already have access to internet, so its a public subnet.Its a public subnet, meaning that there is a route to the internet gateway configured on the route table of the subnet, in this case any instance in the subnet with a public ip address could should has access to the internet,what's missing here is the auto assign public ip, which is a configuration that can be set on the subnet, if not set, then you have to create it yourself. (an instance without a public IP, cannot make requests to the internet)",
            "upvote_count": "111",
            "selected_answers": ""
          },
          {
            "id": 74231,
            "date": "Tue 28 Sep 2021 18:49",
            "username": "hdesai",
            "content": "NAT is only for private subnet needing access to internet. Here it says that subnet already have access to internet, so its a public subnet.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 257384,
            "date": "Sun 24 Oct 2021 02:55",
            "username": "rusll",
            "content": "Its a public subnet, meaning that there is a route to the internet gateway configured on the route table of the subnet, in this case any instance in the subnet with a public ip address could should has access to the internet,what's missing here is the auto assign public ip, which is a configuration that can be set on the subnet, if not set, then you have to create it yourself. (an instance without a public IP, cannot make requests to the internet)",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 48474,
            "date": "Thu 23 Sep 2021 06:35",
            "username": "Dev1",
            "content": "Ans: D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 47070,
            "date": "Wed 22 Sep 2021 00:34",
            "username": "awscertified",
            "content": "D.  Assign an Elastic IP address to the fourth instance.",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#49",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>When uploading an object, what request header can be explicitly specified in a request to Amazon S3 to encrypt object data when saved on the server side?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#49",
            "answers": [
              {
                "choice": "<p>A. x-amz-storage-class<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Content-MD5<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. x-amz-security-token<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. x-amz-server-side-encryption<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 2 question 49 discussion",
        "discusstion": [
          {
            "id": 239367,
            "date": "Tue 02 Nov 2021 08:26",
            "username": "RicardoD",
            "content": "D is the answer",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 193916,
            "date": "Mon 01 Nov 2021 10:31",
            "username": "Chinta",
            "content": "D is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 155876,
            "date": "Wed 27 Oct 2021 00:52",
            "username": "saeidp",
            "content": "D is correct. value of the header can AES256 in case of(SSE-S3) or aws:kms in case of(SSE-KMS)",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 93430,
            "date": "Sun 24 Oct 2021 19:24",
            "username": "MinisterKlaus",
            "content": "Absolutely D :))",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 67770,
            "date": "Thu 14 Oct 2021 09:36",
            "username": "kinetic1g",
            "content": "D.  x-amz-server-side-encryption",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 48485,
            "date": "Sun 10 Oct 2021 16:28",
            "username": "Dev1",
            "content": "Ans: D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 47076,
            "date": "Thu 30 Sep 2021 19:43",
            "username": "awscertified",
            "content": "D.  x-amz-server-side-encryption",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 36535,
            "date": "Wed 22 Sep 2021 19:20",
            "username": "doofus",
            "content": "https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html#APISupportforServer-SideEncryption",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 30873,
            "date": "Mon 20 Sep 2021 18:12",
            "username": "aws_Tamilan",
            "content": "D.  x-amz-server-side-encryption",
            "upvote_count": "3",
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
        "question_text": "<p>You attempt to store an object in the US-STANDARD region in Amazon S3, and receive a confirmation that it has been successfully stored. You then immediately make another API call and attempt to read this object. S3 tells you that the object does not exist.<br>What could explain this behavior?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#52",
            "answers": [
              {
                "choice": "<p>A. US-STANDARD uses eventual consistency and it can take time for an object to be readable in a bucket<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Objects in Amazon S3 do not become visible until they are replicated to a second region.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. US-STANDARD imposes a 1 second delay before new objects are readable.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. You exceeded the bucket object limit, and once this limit is raised the object will be visible.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 2 question 52 discussion",
        "discusstion": [
          {
            "id": 23405,
            "date": "Tue 21 Sep 2021 17:35",
            "username": "newbie2019",
            "content": "It is not actually \\\"US STANDARD\\\", but S3 itself.",
            "upvote_count": "9",
            "selected_answers": ""
          },
          {
            "id": 33782,
            "date": "Tue 28 Sep 2021 08:59",
            "username": "CloudAgile",
            "content": "\\\"Amazon S3 provides read-after-write consistency for PUTS of new objects in your S3 bucket in all Regions with one caveat. The caveat is that if you make a HEAD or GET request to the key name (to find if the object exists) before creating the object, Amazon S3 provides eventual consistency for read-after-write. \\\"So seems this question is wrong.",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 239382,
            "date": "Sun 07 Nov 2021 07:12",
            "username": "RicardoD",
            "content": "This question seems to be wrong.<br><br>Amazon S3 provides strong read-after-write consistency for PUTs and DELETEs of objects in your Amazon S3 bucket in all AWS Regions<br><br>Bucket configurations have an eventual consistency model. Specifically:<br><br>If you delete a bucket and immediately list all buckets, the deleted bucket might still appear in the list.<br><br>If you enable versioning on a bucket for the first time, it might take a short amount of time for the change to be fully propagated. We recommend that you wait for 15 minutes after enabling versioning before issuing write operations (PUT or DELETE) on objects in the bucket.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 193921,
            "date": "Fri 05 Nov 2021 05:02",
            "username": "Chinta",
            "content": "A old questions",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 188762,
            "date": "Wed 03 Nov 2021 22:26",
            "username": "quiinb",
            "content": "outdate question",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 155970,
            "date": "Wed 03 Nov 2021 17:09",
            "username": "saeidp",
            "content": "A probably is the correct answere<br>If the object is new then s3 gives you read after write consistency no matter what region<br>if the object already exist in the bucket and gets overwritten then s3 gives you Eventual Consistency. The question doesn't say anything about if the object already exist or not",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 143899,
            "date": "Mon 01 Nov 2021 04:49",
            "username": "_Bailey",
            "content": "A.  This could happen at overwrite, due to eventual consistency - which takes time for the modification.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 128955,
            "date": "Sun 17 Oct 2021 19:19",
            "username": "Scarback",
            "content": "Resp: A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 120000,
            "date": "Fri 15 Oct 2021 14:49",
            "username": "MannyC",
            "content": "Ans: A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 67773,
            "date": "Sun 10 Oct 2021 20:24",
            "username": "kinetic1g",
            "content": "A.  US-STANDARD uses eventual consistency and it can take time for an object to be readable in a bucket",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 48598,
            "date": "Sat 09 Oct 2021 15:23",
            "username": "Dev1",
            "content": "Ans: A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 47081,
            "date": "Sat 09 Oct 2021 06:29",
            "username": "awscertified",
            "content": "A.  US-STANDARD uses eventual consistency and it can take time for an object to be readable in a bucket",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 30878,
            "date": "Fri 24 Sep 2021 14:18",
            "username": "aws_Tamilan",
            "content": "A.  US-STANDARD uses eventual consistency and it can take time for an object to be readable in a bucket<br>https://acloud.guru/forums/aws-certified-developer-associate/discussion/-KGngHzVQ03OpeAA9jSP/i-cant-answer-a-sample-question-pretty-worried-about-the-real-thing",
            "upvote_count": "6",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#56",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>What type of block cipher does Amazon S3 offer for server side encryption?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#56",
            "answers": [
              {
                "choice": "<p>A. Triple DES<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Advanced Encryption Standard<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Blowfish<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. RC5<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 2 question 56 discussion",
        "discusstion": [
          {
            "id": 290574,
            "date": "Sun 07 Nov 2021 07:46",
            "username": "Suvojit168",
            "content": "B for sure.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 244199,
            "date": "Wed 03 Nov 2021 17:18",
            "username": "AwwAWS",
            "content": "AES answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 239957,
            "date": "Sat 09 Oct 2021 20:21",
            "username": "RicardoD",
            "content": "B is the answer<br><br>S3 offers SSE AES 256 and AWS-KMS options",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 193954,
            "date": "Sat 09 Oct 2021 07:55",
            "username": "Chinta",
            "content": "B .AES is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 48610,
            "date": "Fri 08 Oct 2021 23:18",
            "username": "Dev1",
            "content": "Ans:B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 47089,
            "date": "Tue 05 Oct 2021 20:55",
            "username": "awscertified",
            "content": "B.  Advanced Encryption Standard",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 43134,
            "date": "Thu 30 Sep 2021 21:06",
            "username": "OnePG",
            "content": "B.  is the correct answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 36502,
            "date": "Thu 30 Sep 2021 00:43",
            "username": "doofus",
            "content": "https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 30882,
            "date": "Sun 26 Sep 2021 09:17",
            "username": "aws_Tamilan",
            "content": "B.  Advanced Encryption Standard",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#58",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Which of the following statements about SQS is true?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#58",
            "answers": [
              {
                "choice": "<p>A. Messages will be delivered exactly once and messages will be delivered in First in, First out order<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Messages will be delivered exactly once and message delivery order is indeterminate<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Messages will be delivered one or more times and messages will be delivered in First in, First out order<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Messages will be delivered one or more times and message delivery order is indeterminate<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 2 question 58 discussion",
        "discusstion": [
          {
            "id": 239967,
            "date": "Mon 01 Nov 2021 17:39",
            "username": "RicardoD",
            "content": "D is the answer<br><br>In SQS default messages will be delivered one or more times and delivery order is not determined.<br><br>In SQS FIFO (option A), messages will be delivered once , in the exact order they arrive, first in , first out",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 193956,
            "date": "Mon 25 Oct 2021 16:39",
            "username": "Chinta",
            "content": "D.  is the correct one",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 48613,
            "date": "Fri 22 Oct 2021 23:55",
            "username": "Dev1",
            "content": "Ans: D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 47480,
            "date": "Fri 08 Oct 2021 16:26",
            "username": "awscertified",
            "content": "D.  Messages will be delivered one or more times and message delivery order is indeterminate",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 36522,
            "date": "Mon 04 Oct 2021 16:53",
            "username": "doofus",
            "content": "A and D are correct in this question--it depends on the queue type<br>https://aws.amazon.com/sqs/features/",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 30884,
            "date": "Wed 29 Sep 2021 15:52",
            "username": "aws_Tamilan",
            "content": "D.  Messages will be delivered one or more times and message delivery order is indeterminate",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#79",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Which of the following is an example of a good DynamoDB hash key schema for provisioned throughput efficiency?<br></p>",
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
                "choice": "<p>A. User ID, where the application has many different users.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Status Code where most status codes are the same<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Device ID, where one is by far more popular than all the others.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Game Type, where there are three possible game types<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 2 question 79 discussion",
        "discusstion": [
          {
            "id": 704342,
            "date": "Wed 26 Oct 2022 04:50",
            "username": "zzr2",
            "content": "A is answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 240764,
            "date": "Wed 13 Oct 2021 10:32",
            "username": "RicardoD",
            "content": "A is the answer<br><br>One should look for the best randomization possible",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 194072,
            "date": "Wed 06 Oct 2021 04:07",
            "username": "Chinta",
            "content": "A is the correct one",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 48984,
            "date": "Sun 03 Oct 2021 19:26",
            "username": "Dev1",
            "content": "Ans: A",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 47508,
            "date": "Sat 02 Oct 2021 03:43",
            "username": "awscertified",
            "content": "A.  User ID, where the application has many different users.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 30921,
            "date": "Thu 30 Sep 2021 07:10",
            "username": "aws_Tamilan",
            "content": "A.  User ID, where the application has many different users.",
            "upvote_count": "3",
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
        "question_text": "<p>EC2 instances are launched from Amazon Machine images (AMIs). A given public AMI can:<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#89",
            "answers": [
              {
                "choice": "<p>A. be used to launch EC2 Instances in any AWS region.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. only be used to launch EC2 instances in the same country as the AMI is stored.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. only be used to launch EC2 instances in the same AWS region as the AMI is stored.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. only be used to launch EC2 instances in the same AWS availability zone as the AMI is stored<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 2 question 89 discussion",
        "discusstion": [
          {
            "id": 240817,
            "date": "Sun 17 Oct 2021 20:05",
            "username": "RicardoD",
            "content": "C is the answer",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 200028,
            "date": "Tue 12 Oct 2021 03:23",
            "username": "Ash111",
            "content": "C.  only be used to launch EC2 instances in the same AWS region as the AMI is stored.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 194083,
            "date": "Mon 11 Oct 2021 23:02",
            "username": "Chinta",
            "content": "C is the correct one",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 49001,
            "date": "Mon 27 Sep 2021 18:15",
            "username": "Dev1",
            "content": "Ans: C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 47523,
            "date": "Sun 26 Sep 2021 01:13",
            "username": "awscertified",
            "content": "C.  only be used to launch EC2 instances in the same AWS region as the AMI is stored.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 30934,
            "date": "Tue 21 Sep 2021 02:04",
            "username": "aws_Tamilan",
            "content": "C.  only be used to launch EC2 instances in the same AWS region as the AMI is stored.",
            "upvote_count": "2",
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
        "question_text": "<p>When using a large Scan operation in DynamoDB, what technique can be used to minimize the impact of a scan on a table's provisioned throughput?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#92",
            "answers": [
              {
                "choice": "<p>A. Set a smaller page size for the scan<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use parallel scans<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Define a range index on the table<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Prewarm the table by updating all items<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 2 question 92 discussion",
        "discusstion": [
          {
            "id": 240825,
            "date": "Fri 05 Nov 2021 09:22",
            "username": "RicardoD",
            "content": "A is the answer",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 200033,
            "date": "Sat 30 Oct 2021 07:18",
            "username": "Ash111",
            "content": "A.  Set a smaller page size for the scan",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 194087,
            "date": "Wed 27 Oct 2021 21:28",
            "username": "Chinta",
            "content": "A is the correct one",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 49004,
            "date": "Wed 13 Oct 2021 23:53",
            "username": "Dev1",
            "content": "Ans: A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 47526,
            "date": "Sun 10 Oct 2021 09:51",
            "username": "awscertified",
            "content": "A.  Set a smaller page size for the scan",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 34590,
            "date": "Wed 06 Oct 2021 13:40",
            "username": "AthenaBach999",
            "content": "Ans is A<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-query-scan.htmlInstead of using a large Scan operation, you can use the following techniques to minimize the impact of a scan on a table's provisioned throughput.<br><br>Reduce page size<br><br>Isolate scan operations",
            "upvote_count": "14",
            "selected_answers": ""
          },
          {
            "id": 51963,
            "date": "Sun 24 Oct 2021 12:55",
            "username": "Bach999",
            "content": "Instead of using a large Scan operation, you can use the following techniques to minimize the impact of a scan on a table's provisioned throughput.<br><br>Reduce page size<br><br>Isolate scan operations",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 30936,
            "date": "Fri 24 Sep 2021 02:44",
            "username": "aws_Tamilan",
            "content": "A.  Set a smaller page size for the scan",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 23409,
            "date": "Mon 20 Sep 2021 02:56",
            "username": "newbie2019",
            "content": "Ans is A. ",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#97",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>What happens, by default, when one of the resources in a CloudFormation stack cannot be created?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#97",
            "answers": [
              {
                "choice": "<p>A. Previously-created resources are kept but the stack creation terminates.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Previously-created resources are deleted and the stack creation terminates.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. The stack creation continues, and the final results indicate which steps failed.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. CloudFormation templates are parsed in advance so stack creation is guaranteed to succeed.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 2 question 97 discussion",
        "discusstion": [
          {
            "id": 240833,
            "date": "Thu 04 Nov 2021 07:05",
            "username": "RicardoD",
            "content": "B is the answer",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 200036,
            "date": "Tue 02 Nov 2021 00:28",
            "username": "Ash111",
            "content": "B.  Previously-created resources are deleted and the stack creation terminates.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 194094,
            "date": "Mon 18 Oct 2021 11:24",
            "username": "Chinta",
            "content": "B is the correct one",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 177690,
            "date": "Wed 13 Oct 2021 19:39",
            "username": "jaywanta",
            "content": "Ans: B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 49011,
            "date": "Sun 26 Sep 2021 19:50",
            "username": "Dev1",
            "content": "Ans: B",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 47532,
            "date": "Wed 22 Sep 2021 16:26",
            "username": "awscertified",
            "content": "B.  Previously-created resources are deleted and the stack creation terminates.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 30942,
            "date": "Tue 21 Sep 2021 04:37",
            "username": "aws_TamilanBach999",
            "content": "B.  Previously-created resources are deleted and the stack creation terminates.https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html<br><br>AWS CloudFormation ensures all stack resources are created or deleted as appropriate. Because AWS CloudFormation treats the stack resources as a single unit, they must all be created or deleted successfully for the stack to be created or deleted. If a resource cannot be created, AWS CloudFormation rolls the stack back and automatically deletes any resources that were created. If a resource cannot be deleted, any remaining resources are retained until the stack can be successfully deleted.",
            "upvote_count": "32",
            "selected_answers": ""
          },
          {
            "id": 51932,
            "date": "Fri 08 Oct 2021 18:05",
            "username": "Bach999",
            "content": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html<br><br>AWS CloudFormation ensures all stack resources are created or deleted as appropriate. Because AWS CloudFormation treats the stack resources as a single unit, they must all be created or deleted successfully for the stack to be created or deleted. If a resource cannot be created, AWS CloudFormation rolls the stack back and automatically deletes any resources that were created. If a resource cannot be deleted, any remaining resources are retained until the stack can be successfully deleted.",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#99",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have an environment that consists of a public subnet using Amazon VPC and 3 instances that are running in this subnet. These three instances can successfully communicate with other hosts on the Internet. You launch a fourth instance in the same subnet, using the same AMI and security group configuration you used for the others, but find that this instance cannot be accessed from the Internet.<br>What should you do to enable internet access?<br></p>",
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
                "choice": "<p>A. Deploy a NAT instance into the public subnet.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Modify the routing table for the public subnet<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure a publically routable IP Address In the host OS of the fourth instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Assign an Elastic IP address to the fourth instance.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 2 question 99 discussion",
        "discusstion": [
          {
            "id": 240837,
            "date": "Fri 29 Oct 2021 22:27",
            "username": "RicardoD",
            "content": "D is the answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 194096,
            "date": "Tue 19 Oct 2021 05:18",
            "username": "Chinta",
            "content": "D is the correct one",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 49013,
            "date": "Sat 16 Oct 2021 05:34",
            "username": "Dev1",
            "content": "Ans: D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 47536,
            "date": "Mon 27 Sep 2021 02:26",
            "username": "awscertified",
            "content": "D.  Assign an Elastic IP address to the fourth instance.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 30946,
            "date": "Tue 21 Sep 2021 08:09",
            "username": "aws_Tamilan",
            "content": "D.  Assign an Elastic IP address to the fourth instance.",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      }
    ]
  }