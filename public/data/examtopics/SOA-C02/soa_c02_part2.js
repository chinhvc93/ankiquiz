var SOA_C02_Part2 = 
{
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#101",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator wants to manage a web server application with AWS Elastic Beanstalk. The Elastic Beanstalk service must maintain full capacity for new deployments at all times.<br>Which deployment policies satisfy this requirement? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#101",
          "answers": [
            {
              "choice": "<p>A. All at once<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Immutable<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Rebuild<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Rolling<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Rolling with additional batch<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 101 discussion",
      "discusstion": [
        {
          "id": 741442,
          "date": "Sun 11 Dec 2022 06:48",
          "username": "michaldavid",
          "content": "B and E",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 720816,
          "date": "Thu 17 Nov 2022 20:58",
          "username": "Liongeek",
          "content": "Ans: BE",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 716891,
          "date": "Sat 12 Nov 2022 20:27",
          "username": "Atown",
          "content": "BE<br><br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html<br><br>B -- Immutable deployments perform an immutable update to launch a full set of new instances running the new version of the application in a separate Auto Scaling group, alongside the instances running the old version. Immutable deployments can prevent issues caused by partially completed rolling deployments. If the new instances don't pass health checks, Elastic Beanstalk terminates them, leaving the original instances untouched.<br><br>E --To maintain full capacity during deployments, you can configure your environment to launch a new batch of instances before taking any instances out of service. This option is known as a rolling deployment with an additional batch. When the deployment completes, Elastic Beanstalk terminates the additional batch of instances.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 656895,
          "date": "Fri 02 Sep 2022 04:59",
          "username": "princajen",
          "content": "Vote for B,E<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BE"
        }
      ]
    },
    {
      "question_id": "#102",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an Auto Scaling group of Amazon EC2 instances that scale based on average CPU utilization. The Auto Scaling group events log indicates an<br>InsufficientInstanceCapacity error.<br>Which actions should a SysOps administrator take to remediate this issue? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#102",
          "answers": [
            {
              "choice": "<p>A. Change the instance type that the company is using.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the Auto Scaling group in different Availability Zones.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the Auto Scaling group to use different Amazon Elastic Block Store (Amazon EBS) volume sizes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Increase the maximum size of the Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Request an increase in the instance service quota.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 102 discussion",
      "discusstion": [
        {
          "id": 741443,
          "date": "Sun 11 Dec 2022 06:51",
          "username": "michaldavid",
          "content": "A and B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 720824,
          "date": "Thu 17 Nov 2022 21:06",
          "username": "Liongeek",
          "content": "Ans: B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 696920,
          "date": "Mon 17 Oct 2022 07:08",
          "username": "Surferbolt",
          "content": "AB is the answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 659377,
          "date": "Sun 04 Sep 2022 18:05",
          "username": "princajen",
          "content": "It's A and B.  They had another question asking the same thing and the answers were A and B. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 659330,
          "date": "Sun 04 Sep 2022 16:12",
          "username": "haxaffee",
          "content": "Its AB.  E is relevant for InstanceLimitExceeded not InsufficientInstanceCapacity.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 657983,
          "date": "Sat 03 Sep 2022 04:24",
          "username": "skinnyxpuppy",
          "content": "https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/troubleshooting-launch.html#troubleshooting-launch-capacity<br><br>Solution<br>To resolve the issue, try the following:<br><br>Wait a few minutes and then submit your request again; capacity can shift frequently.<br><br>Submit a new request with a reduced number of instances. For example, if you're making a single request to launch 15 instances, try making 3 requests for 5 instances, or 15 requests for 1 instance instead.<br><br>****If you're launching an instance, submit a new request without specifying an Availability Zone.<br><br>****If you're launching an instance, submit a new request using a different instance type (which you can resize at a later stage). For more information, see Change the instance type.<br><br>If you are launching instances into a cluster placement group, you can get an insufficient capacity error. For more information, see Placement group rules and limitations.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AB"
        }
      ]
    },
    {
      "question_id": "#103",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator needs to control access to groups of Amazon EC2 instances using AWS Systems Manager Session Manager. Specific tags on the EC2 instances have already been added.<br>Which additional actions should the administrator take to control access? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#103",
          "answers": [
            {
              "choice": "<p>A. Attach an IAM policy to the users or groups that require access to the EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Attach an IAM role to control access to the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a placement group for the EC2 instances and add a specific tag.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a service account and attach it to the EC2 instances that need to be controlled.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an IAM policy that grants access to any EC2 instances with a tag specified in the Condition element.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 103 discussion",
      "discusstion": [
        {
          "id": 750224,
          "date": "Mon 19 Dec 2022 21:21",
          "username": "zolthar_z",
          "content": "A and E are the same, attach or update policies, both actions are the same",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 748595,
          "date": "Sun 18 Dec 2022 05:09",
          "username": "MrMLB",
          "content": "A and E",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 741446,
          "date": "Sun 11 Dec 2022 06:55",
          "username": "michaldavid",
          "content": "A and E to me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 720825,
          "date": "Thu 17 Nov 2022 21:07",
          "username": "Liongeek",
          "content": "Ans: AE",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 696922,
          "date": "Mon 17 Oct 2022 07:13",
          "username": "Surferbolt",
          "content": "AE.  Users use Session Manager.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 688842,
          "date": "Fri 07 Oct 2022 19:24",
          "username": "Chhotu_DBA",
          "content": "answer BE",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 670353,
          "date": "Fri 16 Sep 2022 01:38",
          "username": "Bonzai90210",
          "content": "B does not make sense because the Admin is granting access via session manager. Since IAM Users or Groups are more likely to use session manager than an AWS service or federated identity would be, A makes more sense than B. ",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 663859,
          "date": "Thu 08 Sep 2022 19:38",
          "username": "haxaffeechanaka5",
          "content": "AE, Role doesn't make any sense in this context because it is not attached but assumed.<br><br>Alternative would be a Role with the Policy Attached to it and users assume that role but there is no option for it.https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/control-access-with-tags.html",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 665742,
          "date": "Sun 11 Sep 2022 03:00",
          "username": "chanaka5",
          "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/control-access-with-tags.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 663144,
          "date": "Thu 08 Sep 2022 07:22",
          "username": "AAAaat",
          "content": "I think A & E, you attach policies not roles",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 663143,
          "date": "Thu 08 Sep 2022 07:21",
          "username": "AAAaat",
          "content": "I think A & E, you attach policies not roles",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 662766,
          "date": "Wed 07 Sep 2022 19:48",
          "username": "CiCa560",
          "content": "I think A & B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 660308,
          "date": "Mon 05 Sep 2022 17:20",
          "username": "kati2k22cz",
          "content": "B and E. <br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        }
      ]
    },
    {
      "question_id": "#104",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an AWS Lambda function in Account A.  The Lambda function needs to read the objects in an Amazon S3 bucket in Account B.  A SysOps administrator must create corresponding IAM roles in both accounts.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#104",
          "answers": [
            {
              "choice": "<p>A. In Account A, create a Lambda execution role to assume the role in Account B.  In Account B.  create a role that the function can assume to gain access to the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. In Account A, create a Lambda execution role that provides access to the S3 bucket. In Account B, create a role that the function can assume.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. In Account A, create a role that the function can assume. In Account B, create a Lambda execution role that provides access to the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. In Account A.  create a role that the function can assume to gain access to the S3 bucket. In Account B, create a Lambda execution role to assume the role in Account A. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 104 discussion",
      "discusstion": [
        {
          "id": 741448,
          "date": "Sun 11 Dec 2022 06:58",
          "username": "michaldavid",
          "content": "aaaaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 720833,
          "date": "Thu 17 Nov 2022 21:18",
          "username": "Liongeek",
          "content": "Ans: A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 696969,
          "date": "Mon 17 Oct 2022 08:04",
          "username": "Surferbolt",
          "content": "A is the answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 660315,
          "date": "Mon 05 Sep 2022 17:33",
          "username": "kati2k22cz",
          "content": "A. <br>https://aws.amazon.com/premiumsupport/knowledge-center/lambda-function-assume-iam-role/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#105",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An AWS Lambda function is intermittently failing several times a day. A SysOps administrator must find out how often this error has occurred in the last 7 days.<br>Which action will meet this requirement in the MOST operationally efficient manner?<br></p>",
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
              "choice": "<p>A. Use Amazon Athena to query the Amazon CloudWatch logs that are associated with the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon Athena to query the AWS CloudTrail logs that are associated with the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon CloudWatch Logs Insights to query the associated Lambda function logs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon OpenSearch Service (Amazon Elasticsearch Service) to stream the Amazon CloudWatch logs for the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 105 discussion",
      "discusstion": [
        {
          "id": 741450,
          "date": "Sun 11 Dec 2022 07:00",
          "username": "michaldavid",
          "content": "ccccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 720248,
          "date": "Thu 17 Nov 2022 06:58",
          "username": "Liongeek",
          "content": "Ans: C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 696973,
          "date": "Mon 17 Oct 2022 08:08",
          "username": "Surferbolt",
          "content": "C is the answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 659382,
          "date": "Sun 04 Sep 2022 18:16",
          "username": "princajen",
          "content": "Voting for C!<br><br>https://aws.amazon.com/blogs/compute/operating-lambda-using-cloudwatch-logs-insights/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 657879,
          "date": "Sat 03 Sep 2022 00:35",
          "username": "Rick365",
          "content": "C.  Use Amazon CloudWatch Logs Insights to query the associated Lambda function logs.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#106",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using Amazon CloudFront to serve static content for its web application to its users. The CloudFront distribution uses an existing on-premises website as a custom origin.<br>The company requires the use of TLS between CloudFront and the origin server. This configuration has worked as expected for several months. However, users are now experiencing HTTP 502 (Bad Gateway) errors when they view webpages that include content from the CloudFront distribution.<br>What should a SysOps administrator do to resolve this problem?<br></p>",
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
              "choice": "<p>A. Examine the expiration date on the certificate on the origin site. Validate that the certificate has not expired. Replace the certificate if necessary.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Examine the hostname on the certificate on the origin site. Validate that the hostname matches one of the hostnames on the CloudFront distribution. Replace the certificate if necessary.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Examine the firewall rules that are associated with the origin server. Validate that port 443 is open for inbound traffic from the internet. Create an inbound rule if necessary.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Examine the network ACL rules that are associated with the CloudFront distribution. Validate that port 443 is open for outbound traffic to the origin server. Create an outbound rule if necessary.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 106 discussion",
      "discusstion": [
        {
          "id": 659383,
          "date": "Sun 04 Sep 2022 18:18",
          "username": "princajen",
          "content": "A! is correct<br><br>HTTP 502 errors from CloudFront can occur because of the following reasons:<br><br>There's an SSL negotiation failure because the origin is using SSL/TLS protocols and ciphers that aren't supported by CloudFront.<br>There's an SSL negotiation failure because the SSL certificate on the origin is expired or invalid, or because the certificate chain is invalid.<br>There's a host header mismatch in the SSL negotiation between your CloudFront distribution and the custom origin.<br>The custom origin isn't responding on the ports specified in the origin settings of the CloudFront distribution.<br>The custom origin is ending the connection to CloudFront too quickly.<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/resolve-cloudfront-connection-error/",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 741453,
          "date": "Sun 11 Dec 2022 07:06",
          "username": "michaldavid",
          "content": "aaaaaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#107",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An Amazon CloudFront distribution has a single Amazon S3 bucket as its origin. A SysOps administrator must ensure that users can access the S3 bucket only through requests from the CloudFront endpoint.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#107",
          "answers": [
            {
              "choice": "<p>A. Configure S3 Block Public Access on the S3 bucket. Update the S3 bucket policy to allow the GetObject action from only the CloudFront distribution.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure Origin Shield in the CloudFront distribution. Update the CloudFront origin to include a custom Origin_Shield header.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an origin access identity (OAI). Assign the OAI to the CloudFront distribution. Update the S3 bucket policy to restrict access to the OAI.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an origin access identity (OAI). Assign the OAI to the S3 bucket. Update the CloudFront origin to include a custom Origin header with the OAI value.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 107 discussion",
      "discusstion": [
        {
          "id": 741456,
          "date": "Sun 11 Dec 2022 07:09",
          "username": "michaldavid",
          "content": "cccccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 697251,
          "date": "Mon 17 Oct 2022 11:50",
          "username": "Surferbolt",
          "content": "C is the answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 691412,
          "date": "Mon 10 Oct 2022 20:28",
          "username": "elnurguSurferbolt",
          "content": "Answer C says, \\\"..restrict access to OAI\\\" I obviously didn't understand it. Why do we restrict access to OAI? Actually, I think we need to allow read-only access to OAI.They probably typed wrongly. If I recall correctly, the button reads somewhere along the lines of 'bucket can restrict access to only OAI', and what it achieves is allowing S3 objects to be accessed only through CloudFront.",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 697256,
          "date": "Mon 17 Oct 2022 11:54",
          "username": "Surferbolt",
          "content": "They probably typed wrongly. If I recall correctly, the button reads somewhere along the lines of 'bucket can restrict access to only OAI', and what it achieves is allowing S3 objects to be accessed only through CloudFront.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 660401,
          "date": "Mon 05 Sep 2022 19:30",
          "username": "kati2k22cz",
          "content": "C is the correct answer<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#108",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator is designing a solution for an Amazon RDS for PostgreSQL DB instance. Database credentials must be stored and rotated monthly. The applications that connect to the DB instance send write-intensive traffic with variable client connections that sometimes increase significantly in a short period of time.<br>Which solution should a SysOps administrator choose to meet these requirements?<br></p>",
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
              "choice": "<p>A. Configure AWS Key Management Service (AWS KMS) to automatically rotate the keys for the DB instance. Use RDS Proxy to handle the increases in database connections.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure AWS Key Management Service (AWS KMS) to automatically rotate the keys for the DB instance. Use RDS read replicas to handle the increases in database connections.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure AWS Secrets Manager to automatically rotate the credentials for the DB instance. Use RDS Proxy to handle the increases in database connections.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure AWS Secrets Manager to automatically rotate the credentials for the DB instance. Use RDS read replicas to handle the increases in database connections.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 108 discussion",
      "discusstion": [
        {
          "id": 741458,
          "date": "Sun 11 Dec 2022 07:11",
          "username": "michaldavid",
          "content": "cccccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 720252,
          "date": "Thu 17 Nov 2022 07:07",
          "username": "Liongeek",
          "content": "Ans: C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 697259,
          "date": "Mon 17 Oct 2022 11:58",
          "username": "Surferbolt",
          "content": "C. <br>https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_turn-on-for-db.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 685131,
          "date": "Mon 03 Oct 2022 02:36",
          "username": "bakjeeone",
          "content": "Secret Manager can rotate secret in database.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 681104,
          "date": "Tue 27 Sep 2022 21:12",
          "username": "Gianilucaxenodamus",
          "content": "It's A as Secrets Manager does not auto rotate credentialsKMS does not handle database credentials.It handles encryption keys. <br>This is secrets manager.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 718317,
          "date": "Mon 14 Nov 2022 23:27",
          "username": "xenodamus",
          "content": "KMS does not handle database credentials.It handles encryption keys. <br>This is secrets manager.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 659388,
          "date": "Sun 04 Sep 2022 18:25",
          "username": "haxaffee",
          "content": "I thinnk C is correct since we are talking about writing to the DB.  It is indeed available: Amazon RDS Proxy is available for Amazon Aurora with MySQL compatibility, Amazon Aurora with PostgreSQL compatibility, Amazon RDS for MariaDB, Amazon RDS for MySQL, and Amazon RDS for PostgreSQL.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#109",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to reduce costs for jobs that can be completed at any time. The jobs currently run by using multiple Amazon EC2 On-Demand Instances and the jobs take slightly less than 2 hours to complete. If a job falls for any reason it must be restarted from the beginning.<br>Which solution will meet these requirements MOST cost-effectively?<br></p>",
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
              "choice": "<p>A. Purchase Reserved Instances for the jobs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Submit a request for a one-time Spot Instance for the jobs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Submit a request for Spot Instances with a defined duration for the jobs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use a mixture of On-Demand Instances and Spot Instances for the jobs.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 109 discussion",
      "discusstion": [
        {
          "id": 660467,
          "date": "Mon 05 Sep 2022 20:52",
          "username": "kati2k22czSurferbolt",
          "content": "Its C. <br>The name of Resource is Spot Block<br>https://aws.amazon.com/blogs/aws/new-ec2-spot-blocks-for-defined-duration-workloads/Update July 2021 =E2=80=93 Spot Instances with a defined duration (also known as Spot blocks) are no longer available to new customers as of July 1, 2021. For customers that have previously used the feature, we will continue to support Spot Instances with a defined duration until December 31, 2022. If your workload is interruption tolerant, we recommend that you use Spot Instances without setting a defined duration. If your workload is not interruption tolerant we recommend that you use On-Demand instances for the required duration of your workload.",
          "upvote_count": "51",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 697268,
          "date": "Mon 17 Oct 2022 12:04",
          "username": "Surferbolt",
          "content": "Update July 2021 =E2=80=93 Spot Instances with a defined duration (also known as Spot blocks) are no longer available to new customers as of July 1, 2021. For customers that have previously used the feature, we will continue to support Spot Instances with a defined duration until December 31, 2022. If your workload is interruption tolerant, we recommend that you use Spot Instances without setting a defined duration. If your workload is not interruption tolerant we recommend that you use On-Demand instances for the required duration of your workload.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 720253,
          "date": "Thu 17 Nov 2022 07:09",
          "username": "Liongeek",
          "content": "Until the end of 2022, the ans is C",
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
      "question_text": "<p>An environment consists of 100 Amazon EC2 Windows instances. The Amazon CloudWatch agent is deployed and running on all EC2 Instances with a baseline configuration file to capture log files. There is a new requirement to capture the DHCP log files that exist on 50 of the instances.<br>What is the MOST operationally efficient way to meet this new requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#110",
          "answers": [
            {
              "choice": "<p>A. Create an additional CloudWatch agent configuration file to capture the DHCP logs. Use the AWS Systems Manager Run Command to restart the CloudWatch agent on each EC2 instance with the append-config option to apply the additional configuration file.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Log in to each EC2 Instance with administrator rights. Create a PowerShell script to push the needed baseline log files and DHCP log files to CloudWatch.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Run the CloudWatch agent configuration file wizard on each EC2 instance. Verify that the baseline log files are included and add the DHCP log files during the wizard creation process.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Run the CloudWatch agent configuration file wizard on each EC2 instance and select the advanced detail level. This will capture the operating system log files.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 110 discussion",
      "discusstion": [
        {
          "id": 663866,
          "date": "Thu 08 Sep 2022 19:48",
          "username": "haxaffee",
          "content": "While I find no real solution in the internet for Windows instances, I will go with A because I can't believe logging into EVERY INSTANCE with 100x is a valid solution. Who does that 2022.",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 741461,
          "date": "Sun 11 Dec 2022 07:14",
          "username": "michaldavid",
          "content": "aaaaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 697276,
          "date": "Mon 17 Oct 2022 12:07",
          "username": "Surferbolt",
          "content": "A.  Systems Manager is the way to go.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 694993,
          "date": "Fri 14 Oct 2022 21:46",
          "username": "sassy69",
          "content": "I go with A. <br><br>D is valid, but not the MOST operationally efficient.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 660484,
          "date": "Mon 05 Sep 2022 21:12",
          "username": "kati2k22czLiongeek",
          "content": "D. <br>More info of detail level here<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/create-cloudwatch-agent-configuration-file-wizard.htmlThe wizard only can be used if you log to the instance. But there are 100 instances. That solution doesn't apply.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 720259,
          "date": "Thu 17 Nov 2022 07:12",
          "username": "Liongeek",
          "content": "The wizard only can be used if you log to the instance. But there are 100 instances. That solution doesn't apply.",
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
      "question_text": "<p>A company has 10 Amazon EC2 instances in its production account. A SysOps administrator must ensure that email notifications are sent to administrators each time there is an EC2 instance state change.<br>Which solution will meet this requirements?<br></p>",
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
              "choice": "<p>A. Configure an Amazon Route 53 simple routing policy that publishes a message to an Amazon Simple Notification Service (Amazon SNS) topic when an EC2 instance state changes. This SNS topic then sends notifications to its email subscribers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure an Amazon Route 53 simple routing policy that publishes a message to an Amazon Simple Queue Service (Amazon SQS) queue when an EC2 instance state changes. This SQS queue then sends notifications to its email subscribers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that publishes a message to an Amazon Simple Notification Service (Amazon SNS) topic when an EC2 instance state changes. This SNS topic then sends notifications to its email subscribers.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that publishes a message to an Amazon Simple Queue Service (Amazon SQS) queue when an EC2 instance state changes. This SQS queue then sends notifications to its email subscribers.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 111 discussion",
      "discusstion": [
        {
          "id": 741464,
          "date": "Sun 11 Dec 2022 07:19",
          "username": "michaldavid",
          "content": "cccccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 697277,
          "date": "Mon 17 Oct 2022 12:08",
          "username": "Surferbolt",
          "content": "C.  EventBridge and SNS.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 671629,
          "date": "Sat 17 Sep 2022 17:26",
          "username": "XAvenger",
          "content": "C.  All Route 53 and SQS options are automatically out. C is left",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#112",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that runs on a fleet of Amazon EC2 instances behind an Elastic Load Balancer. The instances run in an Auto Scaling group. The application's performance remains consistent throughout most of each day. However, an increase in user traffic slows the performance during the same 4-hour period of time each day.<br>What is the MOST operationally efficient solution that will resolve this issue?<br></p>",
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
              "choice": "<p>A. Configure a second Elastic Load Balancer in front of the Auto Scaling group with a weighted routing policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the fleet of EC2 instances to run on larger instance types to support the increase in user traffic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a scheduled scaling action to scale out the number of EC2 instances shortly before the increase in user traffic occurs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Manually add a few more EC2 instances to the Auto Scaling group to support the increase in user traffic.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 112 discussion",
      "discusstion": [
        {
          "id": 656911,
          "date": "Fri 02 Sep 2022 05:16",
          "username": "princajen",
          "content": "I'm voting for C!<br>They see the same slow performance at the same time each day. Scheduled scaling makes sense.<br>Scheduled scaling helps you to set up your own scaling schedule according to predictable load changes. For example, let's say that every week the traffic to your web application starts to increase on Wednesday, remains high on Thursday, and starts to decrease on Friday. You can configure a schedule for Amazon EC2 Auto Scaling to increase capacity on Wednesday and decrease capacity on Friday.<br><br>To use scheduled scaling, you create scheduled actions. Scheduled actions are performed automatically as a function of date and time. When you create a scheduled action, you specify when the scaling activity should occur and the new desired, minimum, and maximum sizes for the scaling action. You can create scheduled actions that scale one time only or that scale on a recurring schedule.<br><br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-scheduled-scaling.html",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 741465,
          "date": "Sun 11 Dec 2022 07:21",
          "username": "michaldavid",
          "content": "ccccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 720260,
          "date": "Thu 17 Nov 2022 07:14",
          "username": "Liongeek",
          "content": "Ans: C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 697279,
          "date": "Mon 17 Oct 2022 12:09",
          "username": "Surferbolt",
          "content": "C.  Since peak traffic is predictable, they can schedule a scale out.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 659397,
          "date": "Sun 04 Sep 2022 18:41",
          "username": "haxaffee",
          "content": "Vote C.  No way its A. ",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 657928,
          "date": "Sat 03 Sep 2022 02:33",
          "username": "Rick365",
          "content": "C.  Create a scheduled scaling action to scale out the number of EC2 instances shortly before the increase in user traffic occurs.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#113",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts an application on an Amazon EC2 instance in a single AWS Region. The application requires support for non-HTTP TCP traffic and HTTP traffic.<br>The company wants to deliver content with low latency by leveraging the AWS network. The company also wants to implement an Auto Scaling group with an<br>Elastic Load Balancer.<br>How should a SysOps administrator meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#113",
          "answers": [
            {
              "choice": "<p>A. Create an Auto Scaling group with an Application Load Balancer (ALB). Add an Amazon CloudFront distribution with the ALB as the origin.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Auto Scaling group with an Application Load Balancer (ALB). Add an accelerator with AWS Global Accelerator with the ALB as an endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Auto Scaling group with a Network Load Balancer (NLB). Add an Amazon CloudFront distribution with the NLB as the origin.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Auto Scaling group with a Network Load Balancer (NLB). Add an accelerator with AWS Global Accelerator with the NLB as an endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 113 discussion",
      "discusstion": [
        {
          "id": 732373,
          "date": "Thu 01 Dec 2022 08:42",
          "username": "Akaza",
          "content": "D for sure",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 697352,
          "date": "Mon 17 Oct 2022 13:19",
          "username": "Surferbolt",
          "content": "D is the answer.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 670834,
          "date": "Fri 16 Sep 2022 14:42",
          "username": "Gorille69",
          "content": "It is not A or B because ALB works with layer 7 of OSI model ( HTTP, HTTPS ) , NLB works with layer 4 ( TCP, UDP, TLS ) . it remains C or D .it is possible to have the eLB as the origin Cloudfront but CloudFront is designed to handle the HTTP protocol, while Global Accelerator is best used for HTTP and non-HTTP protocols such as TCP and UDP. So, my answer is D too.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 666471,
          "date": "Sun 11 Sep 2022 23:56",
          "username": "Balliache520505",
          "content": "Answer D.  AWS Global Accelerator and Amazon CloudFront are separate services that use the AWS global network and its edge locations around the world. CloudFront improves performance for both cacheable content (such as images and videos) and dynamic content (such as API acceleration and dynamic site delivery). Global Accelerator improves performance for a wide range of applications over TCP or UDP by proxying packets at the edge to applications running in one or more AWS Regions. Global Accelerator is a good fit for non-HTTP use cases, such as gaming (UDP), IoT (MQTT), or Voice over IP, as well as for HTTP use cases that specifically require static IP addresses or deterministic, fast regional failover. Both services integrate with AWS Shield for DDoS protection.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 661046,
          "date": "Tue 06 Sep 2022 11:35",
          "username": "kati2k22cz",
          "content": "Yes, found 2 references. I agree with D. <br>https://medium.com/awesome-cloud/aws-difference-between-application-load-balancer-and-network-load-balancer-cb8b6cd296a4<br>https://aws.amazon.com/global-accelerator/faqs/?nc1h_ls",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 659976,
          "date": "Mon 05 Sep 2022 11:14",
          "username": "Lolaadmin",
          "content": "Ans:D<br>CloudFront is designed to handle HTTP protocol meanwhile Global Accelerator is best used for both HTTP and non-HTTP protocols such as TCP and UDP.<br>https://tutorialsdojo.com/aws-global-accelerator-vs-amazon-cloudfront/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 659623,
          "date": "Mon 05 Sep 2022 01:25",
          "username": "AAAaat",
          "content": "I think it is D because it says NON HTTP traffic.<br>https://aws.amazon.com/elasticloadbalancing/features/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 659621,
          "date": "Mon 05 Sep 2022 01:24",
          "username": "AAAaatAAAaat",
          "content": "I think it is C because it says NON HTTP traffic.<br>https://aws.amazon.com/elasticloadbalancing/features/I meant D",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 659624,
          "date": "Mon 05 Sep 2022 01:25",
          "username": "AAAaat",
          "content": "I meant D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 659402,
          "date": "Sun 04 Sep 2022 18:45",
          "username": "haxaffee",
          "content": "In my opinion every answer so far is wrong. The question states it needs HTTP and NON-HTTP TCP tarffic. Therefore it cannot be an ALB and must be a NLB.  AWS Global Accelerator: \\\"When the internet is congested, AWS Global Accelerator optimizes the path to your application to keep packet loss, jitter, and latency consistently low.\\\"<br><br>D is correct in my world.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 658761,
          "date": "Sat 03 Sep 2022 21:00",
          "username": "andrerkn",
          "content": "Looks B works better for now.<br>https://jayendrapatil.com/aws-cloudfront-vs-global-accelerator/<br><br>\\\"Global Accelerator improves performance for a wide range of applications over TCP or UDP by proxying packets at the edge to applications running in one or more AWS Regions\\\".<br><br>\\\"Global Accelerator is a good fit for non-HTTP use cases, such as gaming (UDP), IoT (MQTT), or VoIP, as well as for HTTP use cases that require static IP addresses or deterministic, fast regional failover.\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 657938,
          "date": "Sat 03 Sep 2022 02:53",
          "username": "Rick365",
          "content": "A.  Create an Auto Scaling group with an Application Load Balancer (ALB). Add an Amazon CloudFront distribution with the ALB as the origin.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#114",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator has an AWS CloudFormation template that is used to deploy an encrypted Amazon Machine Image (AMI). The CloudFormation template will be used in a second account so the SysOps administrator copies the encrypted AMI to the second account. When launching the new CloudFormation stack in the second account, it fails.<br>Which action should the SysOps administrator take to correct the issue?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#114",
          "answers": [
            {
              "choice": "<p>A. Change the AMI permissions to mark the AMI as public.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deregister the AMI in the source account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Re-encrypt the destination AMI with an AWS Key Management Service (AWS KMS) key from the destination account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the CloudFormation template with the ID of the AMI in the destination account.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 114 discussion",
      "discusstion": [
        {
          "id": 715698,
          "date": "Fri 11 Nov 2022 03:14",
          "username": "weixing",
          "content": "It is D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 659391,
          "date": "Sun 04 Sep 2022 18:31",
          "username": "princajen",
          "content": "C!<br><br>While launching the instance from a shared encrypted AMI, you can specify a KMS key of your choice. You may also choose cmkSource to encrypt volumes in your account. However, we recommend that you re-encrypt the volumes using a KMS key in the target account. This protects you if the source KMS key is compromised, or if the source account revokes permissions, which could cause you to lose access to any encrypted volumes you created using cmkSource.<br><br>https://aws.amazon.com/blogs/security/how-to-share-encrypted-amis-across-accounts-to-launch-encrypted-ec2-instances/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#115",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's SysOps administrator deploys four new Amazon EC2 instances by using the standard Amazon Linux 2 Amazon Machine Image (AMI). The company needs to be able to use AWS Systems Manager to manage the instances. The SysOps administrator notices that the instances do not appear in the Systems Manager console.<br><br>What must the SysOps administrator do to resolve this issue?</p>",
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
              "choice": "<p>A. Connect to each instance by using SSH. Install Systems Manager Agent on each instance. Configure Systems Manager Agent to start automatically when the instances start up.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Certificate Manager (ACM) to create a TLS certificate. Import the certificate into each instance. Configure Systems Manager Agent to use the TLS certificate for secure communications.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Connect to each instance by using SSH. Create an ssm-user account. Add the ssm-user account to the /etc/sudoers.d directory.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Attach an IAM instance profile to the instances. Ensure that the instance profile contains the AmazonSSMManagedInstanceCore policy.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 115 discussion",
      "discusstion": [
        {
          "id": 741469,
          "date": "Sun 11 Dec 2022 07:28",
          "username": "michaldavid",
          "content": "ddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 720503,
          "date": "Thu 17 Nov 2022 14:58",
          "username": "Liongeek",
          "content": "Ans: D<br>If instances were deployed with Amazon Linux 2, they already have the SSM Agent installed.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 719940,
          "date": "Wed 16 Nov 2022 20:11",
          "username": "Xelnak",
          "content": "D.  for sure<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/setup-instance-profile.html",
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
      "question_text": "<p>A SysOps administrator is maintaining a web application using an Amazon CloudFront web distribution, an Application Load Balancer (ALB), Amazon RDS, and Amazon EC2 in a VPC.  All services have logging enabled. The administrator needs to investigate HTTP Layer 7 status codes from the web application.<br><br>Which log sources contain the status codes? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#116",
          "answers": [
            {
              "choice": "<p>A. VPC Flow Logs<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. AWS CloudTrail logs<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. ALB access logs<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. CloudFront access togs<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. RDS logs<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 116 discussion",
      "discusstion": [
        {
          "id": 741471,
          "date": "Sun 11 Dec 2022 07:33",
          "username": "michaldavid",
          "content": "C and D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 735986,
          "date": "Mon 05 Dec 2022 15:13",
          "username": "goatbernard",
          "content": "level 7 -> ALB + CloudFront",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 735984,
          "date": "Mon 05 Dec 2022 15:13",
          "username": "goatbernard",
          "content": "level 7 -> ALB + CloudFront",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 720566,
          "date": "Thu 17 Nov 2022 16:07",
          "username": "Liongeek",
          "content": "Ans: C,D",
          "upvote_count": "2",
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
      "question_text": "<p>A company wants to be alerted through email when IAM CreateUser API calls are made within its AWS account.<br><br>Which combination of actions should a SysOps administrator take to meet this requirement? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#117",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon EventBridge (Amazon CloudWatch Events) rule with AWS CloudTrail as the event source and IAM CreateUser as the specific API call for the event pattern.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon EventBridge (Amazon CloudWatch Events) rule with Amazon CloudSearch as the event source and IAM CreateUser as the specific API call for the event pattern.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon EventBridge (Amazon CloudWatch Events) rule with AWS IAM Access Analyzer as the event source and IAM CreateUser as the specific API call for the event pattern.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an Amazon Simple Notification Service (Amazon SNS) topic as an event target with an email subscription.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use an Amazon Simple Email Service (Amazon SES) notification as an event target with an email subscription.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 117 discussion",
      "discusstion": [
        {
          "id": 741476,
          "date": "Sun 11 Dec 2022 07:37",
          "username": "michaldavid",
          "content": "A and D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 720567,
          "date": "Thu 17 Nov 2022 16:09",
          "username": "Liongeek",
          "content": "Ans: A,D",
          "upvote_count": "2",
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
      "question_text": "<p>A database is running on an Amazon RDS Multi-AZ DB instance. A recent security audit found the database to be out of compliance because it was not encrypted.<br><br>Which approach will resolve the encryption requirement?</p>",
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
              "choice": "<p>A. Log in to the RDS console and select the encryption box to encrypt the database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new encrypted Amazon EBS volume and attach it to the instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Encrypt the standby replica in the secondary Availability Zone and promote it to the primary instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Take a snapshot of the RDS instance, copy and encrypt the snapshot, and then restore to the new RDS instance.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 118 discussion",
      "discusstion": [
        {
          "id": 741481,
          "date": "Sun 11 Dec 2022 07:38",
          "username": "michaldavid",
          "content": "dddddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 720576,
          "date": "Thu 17 Nov 2022 16:17",
          "username": "Liongeek",
          "content": "Ans: D<br>Ref: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html#Overview.Encryption.Limitations",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 719948,
          "date": "Wed 16 Nov 2022 20:24",
          "username": "Xelnak",
          "content": "D.  You can only encrypt an Amazon RDS DB instance when you create it, not after the DB instance is created.<br><br>However, because you can encrypt a copy of an unencrypted snapshot, you can effectively add encryption to an unencrypted DB instance. That is, you can create a snapshot of your DB instance, and then create an encrypted copy of that snapshot. You can then restore a DB instance from the encrypted snapshot, and thus you have an encrypted copy of your original DB instance.<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html",
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
      "question_text": "<p>A company using AWS Organizations requires that no Amazon S3 buckets in its production accounts should ever be deleted.<br><br>What is the SIMPLEST approach the SysOps administrator can take to ensure S3 buckets in those accounts can never be deleted?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#119",
          "answers": [
            {
              "choice": "<p>A. Set up MFA Delete on all the S3 buckets to prevent the buckets from being deleted.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use service control policies to deny the s3:DeleteBucket action on all buckets in production accounts.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an IAM group that has an IAM policy to deny the s3:DeleteBucket action on all buckets in production accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Shield to deny the s3:DeleteBucket action on the AWS account instead of all S3 buckets.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 119 discussion",
      "discusstion": [
        {
          "id": 741483,
          "date": "Sun 11 Dec 2022 07:39",
          "username": "michaldavid",
          "content": "bbbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 720580,
          "date": "Thu 17 Nov 2022 16:18",
          "username": "Liongeek",
          "content": "Ans: B",
          "upvote_count": "1",
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
      "question_text": "<p>A company has an application that is running on Amazon EC2 instances in a VPC.  The application needs access to download software updates from the internet. The VPC has public subnets and private subnets. The company's security policy requires all EC2 instances to be deployed in private subnets.<br><br>What should a SysOps administrator do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#120",
          "answers": [
            {
              "choice": "<p>A. Add an internet gateway to the VPC.  In the route table for the private subnets, add a route to the internet gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add aNAT gateway to a private subnet. In the route table for the private subnets, add a route to the NAT gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Add a NAT gateway to public subnet. In the route table for the private subnets, add a route to the NAT gateway.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add two internet gateways to the VPC.  In the route tables for the private subnets and public subnets, add a route to each internet gateway.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 120 discussion",
      "discusstion": [
        {
          "id": 756148,
          "date": "Mon 26 Dec 2022 03:47",
          "username": "jessbase2022",
          "content": "C<br>https://aws.amazon.com/premiumsupport/knowledge-center/nat-gateway-vpc-private-subnet/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 749325,
          "date": "Mon 19 Dec 2022 01:57",
          "username": "MrMLB",
          "content": "To meet the requirements of the company's security policy, the SysOps administrator should choose option B: Add a NAT gateway to a private subnet. In the route table for the private subnets, add a route to the NAT gateway.<br><br>In this scenario, the EC2 instances in the private subnets need access to the internet to download software updates, but they cannot be directly connected to the internet. A NAT gateway allows the EC2 instances to connect to the internet indirectly by routing their traffic through the NAT gateway, which is located in a public subnet. The NAT gateway has a direct connection to the internet, so it can access the internet on behalf of the EC2 instances.<br><br>To set this up, the SysOps administrator should create a NAT gateway in a private subnet and then add a route to the NAT gateway in the route table for the private subnets. This will allow the EC2 instances in the private subnets to access the internet through the NAT gateway.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 741489,
          "date": "Sun 11 Dec 2022 07:49",
          "username": "michaldavid",
          "content": "cccccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 738201,
          "date": "Wed 07 Dec 2022 19:10",
          "username": "tts1234",
          "content": "A Nat Gateway enables instances in private subnets to connect to the internet. The Nat gateway must be deployed in the public subnet with an Elastic IP. Once the resource is created, a route table associated with the the private subnet needs to point internet-bound traffic to the NAT gateway.<br>https://towardsdatascience.com/connecting-to-an-ec2-instance-in-a-private-subnet-on-aws-38a3b86f58fb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#121",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A development team recently deployed a new version of a web application to production. After the release, penetration testing revealed a cross-site scripting vulnerability that could expose user data.<br><br>Which AWS service will mitigate this issue?</p>",
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
              "choice": "<p>A. AWS Shield Standard<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. AWS WAF<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Elastic Load Balancing<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Amazon Cognito<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 121 discussion",
      "discusstion": [
        {
          "id": 741490,
          "date": "Sun 11 Dec 2022 07:52",
          "username": "michaldavid",
          "content": "bbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#122",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator must configure a resilient tier of Amazon EC2 instances for a high performance computing (HPC) application. The HPC application requires minimum latency between nodes.<br><br>Which actions should the SysOps administrator take to meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#122",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon Elastic File System (Amazon EFS) file system. Mount the file system to the EC2 instances by using user data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a Multi-AZ Network Load Balancer in front of the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Place the EC2 instances in an Auto Scaling group within a single subnet.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Launch the EC2 instances into a cluster placement group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Launch the EC2 instances into a partition placement group.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 122 discussion",
      "discusstion": [
        {
          "id": 760114,
          "date": "Wed 28 Dec 2022 17:53",
          "username": "skiwili",
          "content": "C and D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 759773,
          "date": "Wed 28 Dec 2022 12:55",
          "username": "hiun",
          "content": "C and D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 749926,
          "date": "Mon 19 Dec 2022 15:43",
          "username": "MrMLB",
          "content": "Both cluster and partition placement groups are optimized for HPC applications that require low latency and high performance networking.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 747449,
          "date": "Fri 16 Dec 2022 18:24",
          "username": "grka25",
          "content": "A and D, i think. You request your number of instances before lunch. If you use ASG, the probability that they will spawn near your cluster is very little.<br><br>You can launch multiple instance types into a cluster placement group. However, this reduces the likelihood that the required capacity will be available for your launch to succeed. We recommend using the same instance type for all instances in a cluster placement group.<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 744496,
          "date": "Tue 13 Dec 2022 23:18",
          "username": "Jamshif01",
          "content": "C and D",
          "upvote_count": "2",
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
      "question_text": "<p>A company's customers are reporting increased latency while accessing static web content from Amazon S3. A SysOps administrator observed a very high rate of read operations on a particular S3 bucket.<br><br>What will minimize latency by reducing load on the S3 bucket?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#123",
          "answers": [
            {
              "choice": "<p>A. Migrate the S3 bucket to a region that is closer to end users' geographic locations.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use cross-region replication to replicate all of the data to another region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon CloudFront distribution with the S3 bucket as the origin.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon ElastiCache to cache data being served from Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 123 discussion",
      "discusstion": [
        {
          "id": 741492,
          "date": "Sun 11 Dec 2022 07:55",
          "username": "michaldavid",
          "content": "ccccccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 737934,
          "date": "Wed 07 Dec 2022 14:58",
          "username": "Pepepep",
          "content": "Discussion on this link.<br>https://www.examtopics.com/discussions/amazon/view/7004-exam-aws-sysops-topic-1-question-611-discussion/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 737533,
          "date": "Wed 07 Dec 2022 08:39",
          "username": "grka25beznika",
          "content": "The answer is C.  You can find this question in the old dump. Most people voted C there.<br><br>Cloudfront will cache the static content reducing the load on the S3 bucketC definitely. D doesn't even make any sense with static website. Elasticache works together with a DataBase.",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 738187,
          "date": "Wed 07 Dec 2022 18:52",
          "username": "beznika",
          "content": "C definitely. D doesn't even make any sense with static website. Elasticache works together with a DataBase.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 734604,
          "date": "Sat 03 Dec 2022 18:35",
          "username": "CloudHandsOn",
          "content": "The answer should be D. <br>Elasticache used with S3 for high reads is ideal to help with this kind of issue.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 722247,
          "date": "Sat 19 Nov 2022 21:55",
          "username": "FatochBiggerStaff",
          "content": "Those questions are new .Where is the discussion ? after 120 no discussion. how do I believe default answer is correct. Anyone recently trying to get certificatesI agree, why no discussion. How are the correct answers picked?",
          "upvote_count": "41",
          "selected_answers": ""
        },
        {
          "id": 725147,
          "date": "Wed 23 Nov 2022 14:22",
          "username": "BiggerStaff",
          "content": "I agree, why no discussion. How are the correct answers picked?",
          "upvote_count": "1",
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
      "question_text": "<p>A SysOps administrator needs to develop a solution that provides email notification and inserts a record into a database every time a file is put into an Amazon S3 bucket.<br><br>What is the MOST operationally efficient solution that meets these requirements?</p>",
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
              "choice": "<p>A. Set up an S3 event notification that targets an Amazon Simple Notification Service (Amazon SNS) topic. Create two subscriptions for the SNS topic. Use one subscription to send the email notification. Use the other subscription to invoke an AWS Lambda function that inserts the record into the database.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up an Amazon CloudWatch alarm that enters ALARM state whenever an object is created in the S3 bucket. Configure the alarm to invoke an AWS Lambda function that sends the email notification and inserts the record into the database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Lambda function to send the email notification and insert the record into the database whenever a new object is detected in the S3 bucket. Invoke the function every minute with an Amazon EventBridge (Amazon CloudWatch Events) scheduled rule.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up two S3 event notifications. Target a separate AWS Lambda function with each notification. Configure one function to send the email notification. Configure the other function to insert the record into the database.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 124 discussion",
      "discusstion": [
        {
          "id": 755514,
          "date": "Sun 25 Dec 2022 09:23",
          "username": "edu_anadat",
          "content": "You can't set up two S3 event notifications with the same Event types. But it's possible configure Lambda function, without SNS, in S3 event notifications",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 741494,
          "date": "Sun 11 Dec 2022 08:00",
          "username": "michaldavid",
          "content": "aaaaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 728213,
          "date": "Sun 27 Nov 2022 13:47",
          "username": "marcelodba",
          "content": "https://aws.amazon.com/pt/premiumsupport/knowledge-center/lambda-subscribe-sns-topic-same-account/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#125",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a web application on Amazon EC2 instances behind an Application Load Balancer. The instances are in an Amazon EC2 Auto Scaling group. The application is accessed with a public URL.<br><br>A SysOps administrator needs to implement a monitoring solution that checks the availability of the application and follows the same routes and actions as a customer. The SysOps administrator must receive a notification if less than 95% of the monitoring runs find no errors.<br><br>Which solution will meet these requirements?</p>",
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
              "choice": "<p>A. Create an Amazon CloudWatch Synthetics canary with a script that follows customer routes. Schedule the canary to run on a recurring schedule. Create a CloudWatch alarm that publishes a message to an Amazon Simple Notification Service (Amazon SNS) topic when the SuccessPercent metric is less than 95%.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create Amazon Route 53 health checks that monitor the availability of the endpoint. Create Amazon CloudWatch alarms that publish a message to an Amazon Simple Notification Service (Amazon SNS) topic when the HealthCheckPercentageHealthy metric is less than 95%.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a single AWS Lambda function to check whether the endpoints are available for each customer path. Schedule the Lambda function by using Amazon EventBridge (Amazon CloudWatch Events). Configure the Lambda function to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic when an endpoint returns an error.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Lambda function for each customer path to check whether that specific endpoint is available. Schedule the Lambda functions by using Amazon EventBridge (Amazon CloudWatch Events). Configure each Lambda function to publish a custom metric to Amazon CloudWatch for the endpoint status. Create CloudWatch alarms based on each custom metric to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic when an alarm is in the ALARM state.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 125 discussion",
      "discusstion": [
        {
          "id": 741495,
          "date": "Sun 11 Dec 2022 08:02",
          "username": "michaldavid",
          "content": "aaaaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 740822,
          "date": "Sat 10 Dec 2022 11:00",
          "username": "BugsBunny9998666",
          "content": "canary forscripts",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 720724,
          "date": "Thu 17 Nov 2022 19:10",
          "username": "hardwiredmanhardwiredman",
          "content": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.htmlThink Canary in the coal mine...",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 720725,
          "date": "Thu 17 Nov 2022 19:11",
          "username": "hardwiredman",
          "content": "Think Canary in the coal mine...",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 720713,
          "date": "Thu 17 Nov 2022 19:01",
          "username": "Liongeek",
          "content": "Ans: A<br>Synthetics it's the only one who follows the same routes and actions as a customer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 719973,
          "date": "Wed 16 Nov 2022 20:52",
          "username": "Xelnak",
          "content": "A for sure<br>You can use Amazon CloudWatch Synthetics to create canaries, configurable scripts that run on a schedule, to monitor your endpoints and APIs. Canaries follow the same routes and perform the same actions as a customer, which makes it possible for you to continually verify your customer experience even when you don't have any customer traffic on your applications. By using canaries, you can discover issues before your customers do.<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#126",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator uses AWS Systems Manager Session Manager to connect to instances. After the SysOps administrator launches a new Amazon EC2 instance, the EC2 instance does not appear in the Session Manager list of systems that are available for connection. The SysOps administrator verifies that Systems Manager Agent is installed, updated, and running on the EC2 instance.<br><br>What is the reason for this issue?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#126",
          "answers": [
            {
              "choice": "<p>A. The SysOps administrator does not have access to the key pair that is required for connection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The SysOps administrator has not attached a security group to the EC2 instance to allow SSH on port 22.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The EC2 instance does not have an attached IAM role that allows Session Manager to connect to the EC2 instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. The EC2 instance ID has not been entered into the Session Manager configuration.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 126 discussion",
      "discusstion": [
        {
          "id": 742438,
          "date": "Mon 12 Dec 2022 07:00",
          "username": "michaldavid",
          "content": "ccccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 728218,
          "date": "Sun 27 Nov 2022 13:52",
          "username": "marcelodba",
          "content": "It's c",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 723068,
          "date": "Mon 21 Nov 2022 00:02",
          "username": "Jamshif01",
          "content": "Answer: C it is 100 %",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 720715,
          "date": "Thu 17 Nov 2022 19:01",
          "username": "Liongeek",
          "content": "Ans: C!",
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
      "question_text": "<p>A SysOps administrator is unable to launch Amazon EC2 instances into a VPC because there are no available private IPv4 addresses in the VPC. <br><br>Which combination of actions must the SysOps administrator take to launch the instances? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#127",
          "answers": [
            {
              "choice": "<p>A. Associate a secondary IPv4 CIDR block with the VPC. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Associate a primary IPv6 CIDR block with the VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new subnet for the VPC. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the CIDR block of the VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Modify the CIDR block of the subnet that is associated with the instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 127 discussion",
      "discusstion": [
        {
          "id": 728220,
          "date": "Sun 27 Nov 2022 13:54",
          "username": "marcelodba",
          "content": "A, C looks right",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 720734,
          "date": "Thu 17 Nov 2022 19:20",
          "username": "Liongeek",
          "content": "Ans: A&C<br>Every time you run out of IP's in your subnet, create a SECONDARY CIDR in your VPC.  That will create a second local route in your RT's. Now you have more IP's available where you can create subnets.<br>Remember: you CANNOT modify the CIDR of a VPC or subnet.<br>Ref. https://docs.aws.amazon.com/vpc/latest/userguide/configure-your-vpc.html#vpc-resize",
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
      "question_text": "<p>A SysOps administrator is creating an Amazon EC2 Auto Scaling group in a new AWS account. After adding some instances, the SysOps administrator notices that the group has not reached the minimum number of instances. The SysOps administrator receives the following error message:<br><br>Launching a new EC2 instance. Status Reason: Your quota allows for 0 more running instance(s).<br>You requested at least 1. Launching EC2 instance failed.<br><br>Which action will resolve this issue?</p>",
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
              "choice": "<p>A. Adjust the account spending limits for Amazon EC2 on the AWS Billing and Cost Management console.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Modify the EC2 quota for that AWS Region in the EC2 Settings section of the EC2 console.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Request a quota increase for the instance type family by using Service Quotas on the AWS Management Console.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the Rebalance action in the Auto Scaling group on the AWS Management Console.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 128 discussion",
      "discusstion": [
        {
          "id": 742441,
          "date": "Mon 12 Dec 2022 07:06",
          "username": "michaldavid",
          "content": "ccccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 736646,
          "date": "Tue 06 Dec 2022 09:58",
          "username": "goatbernard",
          "content": "C i will choose",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 728223,
          "date": "Sun 27 Nov 2022 13:57",
          "username": "marcelodba",
          "content": "I'll go for C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 722262,
          "date": "Sat 19 Nov 2022 22:36",
          "username": "Fatoch",
          "content": "For me C too",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 720757,
          "date": "Thu 17 Nov 2022 19:40",
          "username": "Liongeek",
          "content": "This on is tricky but I'll go for C. <br>1. You don't modify, you request an increase in your quota<br>2. Option B i'ts too much general... there's no such EC2 Instance Quota per Region, the quota it's per instance family.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 720664,
          "date": "Thu 17 Nov 2022 17:51",
          "username": "Xelnak",
          "content": "C.  Request a quota increase for the instance type family by using Service Quotas on the AWS Management Console.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#129",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator is creating two AWS CloudFormation templates. The first template will create a VPC with associated resources, such as subnets, route tables, and an internet gateway. The second template will deploy application resources within the VPC that was created by the first template. The second template should refer to the resources created by the first template.<br><br>How can this be accomplished with the LEAST amount of administrative effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#129",
          "answers": [
            {
              "choice": "<p>A. Add an export field to the outputs of the first template and import the values in the second template.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a custom resource that queries the stack created by the first template and retrieves the required values.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a mapping in the first template that is referenced by the second template.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Input the names of resources in the first template and refer to those names in the second template as a parameter.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 129 discussion",
      "discusstion": [
        {
          "id": 742444,
          "date": "Mon 12 Dec 2022 07:08",
          "username": "michaldavid",
          "content": "aaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 737799,
          "date": "Wed 07 Dec 2022 12:46",
          "username": "BugsBunny9998666BugsBunny9998666",
          "content": "Its A, this question pop up in old topic for sys ops, there over 15 peoplevoted Ahere are some old comments<br>A is correct!<br>The optional Mappings section matches a key to a corresponding set of named values. For example, if you want to set values based on a region, you can create a mapping that uses the region name as a key and contains the values you want to specify for each specific region. You use the Fn::FindInMap intrinsic function to retrieve values in a map.<br><br>You can't include parameters, pseudo parameters, or intrinsic functions in the Mappings section.<br><br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/mappings-section-structure.html<br><br>A is correct, mappings have nothing to do in referencing from one stack to the other",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 737802,
          "date": "Wed 07 Dec 2022 12:47",
          "username": "BugsBunny9998666",
          "content": "here are some old comments<br>A is correct!<br>The optional Mappings section matches a key to a corresponding set of named values. For example, if you want to set values based on a region, you can create a mapping that uses the region name as a key and contains the values you want to specify for each specific region. You use the Fn::FindInMap intrinsic function to retrieve values in a map.<br><br>You can't include parameters, pseudo parameters, or intrinsic functions in the Mappings section.<br><br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/mappings-section-structure.html<br><br>A is correct, mappings have nothing to do in referencing from one stack to the other",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 728227,
          "date": "Sun 27 Nov 2022 13:59",
          "username": "marcelodba",
          "content": "A , You have to export first then import on 2nd template",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 722265,
          "date": "Sat 19 Nov 2022 22:42",
          "username": "Fatoch",
          "content": "It's c<br>Answer is C",
          "upvote_count": "2",
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
      "question_text": "<p>A company runs a web application on three Amazon EC2 instances behind an Application Load Balancer (ALB). The company notices that random periods of increased traffic cause a degradation in the application's performance. A SysOps administrator must scale the application to meet the increased traffic.<br><br>Which solution meets these requirements?</p>",
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
              "choice": "<p>A. Create an Amazon CloudWatch alarm to monitor application latency and increase the size of each EC2 instance if the desired threshold is reached.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to monitor application latency and add an EC2 instance to the ALB if the desired threshold is reached.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy the application to an Auto Scaling group of EC2 instances with a target tracking scaling policy. Attach the ALB to the Auto Scaling group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy the application to an Auto Scaling group of EC2 instances with a scheduled scaling policy. Attach the ALB to the Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 130 discussion",
      "discusstion": [
        {
          "id": 742447,
          "date": "Mon 12 Dec 2022 07:11",
          "username": "michaldavid",
          "content": "ccccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 737805,
          "date": "Wed 07 Dec 2022 12:51",
          "username": "BugsBunny9998666",
          "content": "target tracking scaling policy is perfect for RANDOM periods of increased traffic.<br>For those who chooseD, D is NOT an option here what are you ? Wizard with crystal ball to know when traffic will increase ?",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 734539,
          "date": "Sat 03 Dec 2022 16:33",
          "username": "beznika",
          "content": "It would be very useful to have downvote option as well.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 734535,
          "date": "Sat 03 Dec 2022 16:29",
          "username": "beznika",
          "content": "C is the right answer. How can it D if the option says scheduled scaling! How can you schedule scaling when you have random increase in traffic?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 728233,
          "date": "Sun 27 Nov 2022 14:03",
          "username": "marcelodba",
          "content": "It's says random periods so schedule it's not an option",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 720676,
          "date": "Thu 17 Nov 2022 18:01",
          "username": "Xelnak",
          "content": "Scheduled scaling helps you to set up your own scaling schedule according to predictable load changes. For example, let's say that every week the traffic to your web application starts to increase on Wednesday, remains high on Thursday, and starts to decrease on Friday. You can configure a schedule for Amazon EC2 Auto Scaling to increase capacity on Wednesday and decrease capacity on Friday.<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-scheduled-scaling.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 720150,
          "date": "Thu 17 Nov 2022 03:50",
          "username": "LiongeekLiongeek",
          "content": "Ans: CMy bad, Ans is D.  It's says random periods so schedule it's not an option",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 720808,
          "date": "Thu 17 Nov 2022 20:46",
          "username": "Liongeek",
          "content": "My bad, Ans is D.  It's says random periods so schedule it's not an option",
          "upvote_count": "2",
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
      "question_text": "<p>A company has a high-performance Windows workload. The workload requires a storage volume that provides consistent performance of 10,000 IOPS. The company does not want to pay for additional unneeded capacity to achieve this performance.<br><br>Which solution will meet these requirements with the LEAST cost?</p>",
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
              "choice": "<p>A. Use a Provisioned IOPS SSD (io1) Amazon Elastic Block Store (Amazon EBS) volume that is configured with 10,000 provisioned IOPS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use a General Purpose SSD (gp3) Amazon Elastic Block Store (Amazon EBS) volume that is configured with 10,000 provisioned IOPS.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use an Amazon Elastic File System (Amazon EFS) file system in Max I/O mode.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an Amazon FSx for Windows File Server file system that is configured with 10,000 IOPS.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 131 discussion",
      "discusstion": [
        {
          "id": 766616,
          "date": "Thu 05 Jan 2023 13:39",
          "username": "dangji",
          "content": "least cost and 10000 IOPS, it should be General Purpose SSD. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 742449,
          "date": "Mon 12 Dec 2022 07:16",
          "username": "michaldavid",
          "content": "To me this is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 741006,
          "date": "Sat 10 Dec 2022 14:36",
          "username": "Pepepep",
          "content": "I would go with A.  From the link bellow volumes with Provisioned IOPS are recommended for workloads that require sustained IOPS, which is one of the requirements in the questions.<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 728336,
          "date": "Sun 27 Nov 2022 15:36",
          "username": "marcelodba",
          "content": "A and B are viable, GP3 is cheaper",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 720151,
          "date": "Thu 17 Nov 2022 03:52",
          "username": "Liongeek",
          "content": "Ans: A",
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
      "question_text": "<p>A SysOps administrator must create a solution that automatically shuts down any Amazon EC2 instances that have less than 10% average CPU utilization for 60 minutes or more.<br><br>Which solution will meet this requirement in the MOST operationally efficient manner?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#132",
          "answers": [
            {
              "choice": "<p>A. Implement a cron job on each EC2 instance to run once every 60 minutes and calculate the current CPU utilization. Initiate an instance shutdown if CPU utilization is less than 10%.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Implement an Amazon CloudWatch alarm for each EC2 instance to monitor average CPU utilization. Set the period at 1 hour, and set the threshold at 10%. Configure an EC2 action on the alarm to stop the instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Install the unified Amazon CloudWatch agent on each EC2 instance, and enable the Basic level predefined metric set. Log CPU utilization every 60 minutes, and initiate an instance shutdown if CPU utilization is less than 10%.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Systems Manager Run Command to get CPU utilization from each EC2 instance every 60 minutes. Initiate an instance shutdown if CPU utilization is less than 10%.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 132 discussion",
      "discusstion": [
        {
          "id": 750956,
          "date": "Tue 20 Dec 2022 14:51",
          "username": "zolthar_z",
          "content": "Answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 737578,
          "date": "Wed 07 Dec 2022 09:18",
          "username": "grka25",
          "content": "I will go with B.  This is a simple example of AWS autoscaling.",
          "upvote_count": "1",
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
      "question_text": "<p>A SysOps administrator is unable to authenticate an AWS CLI call to an AWS service.<br><br>Which of the following is the cause of this issue?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#133",
          "answers": [
            {
              "choice": "<p>A. The IAM password is incorrect.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The server certificate is missing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The SSH key pair is incorrect.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. There is no access key.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 133 discussion",
      "discusstion": [
        {
          "id": 742452,
          "date": "Mon 12 Dec 2022 07:18",
          "username": "michaldavid",
          "content": "dddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 720804,
          "date": "Thu 17 Nov 2022 20:44",
          "username": "Liongeek",
          "content": "Ans: D<br>You don't use passwords in AWS CLI. You use access and secret access key.",
          "upvote_count": "2",
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
      "question_text": "<p>A company requires that all IAM user accounts that have not been used for 90 days or more must have their access keys and passwords immediately disabled. A SysOps administrator must automate the process of disabling unused keys using the MOST operationally efficient method.<br><br>How should the SysOps administrator implement this solution?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#134",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Step Functions workflow to identify IAM users that have not been active for 90 days. Run an AWS Lambda function when a scheduled Amazon EventBridge (Amazon CloudWatch Events) rule is invoked to automatically remove the AWS access keys and passwords for these IAM users.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure an AWS Config rule to identify IAM users that have not been active for 90 days. Set up an automatic weekly batch process on an Amazon EC2 instance to disable the AWS access keys and passwords for these IAM users.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Develop and run a Python script on an Amazon EC2 instance to programmatically identify IAM users that have not been active for 90 days. Automatically delete these IAM users.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up an AWS Config managed rule to identify IAM users that have not been active for 90 days. Set up an AWS Systems Manager automation runbook to disable the AWS access keys for these IAM users.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 134 discussion",
      "discusstion": [
        {
          "id": 742454,
          "date": "Mon 12 Dec 2022 07:20",
          "username": "michaldavid",
          "content": "ddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 741013,
          "date": "Sat 10 Dec 2022 14:42",
          "username": "Pepepep",
          "content": "D. <br>https://docs.aws.amazon.com/config/latest/developerguide/iam-user-unused-credentials-check.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 728352,
          "date": "Sun 27 Nov 2022 16:01",
          "username": "marcelodba",
          "content": "I'll go for D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#135",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company creates custom AMI images by launching new Amazon EC2 instances from an AWS CloudFormation template. It installs and configures necessary software through AWS OpsWorks, and takes images of each EC2 instance. The process of installing and configuring software can take between 2 to 3 hours, but at times, the process stalls due to installation errors.<br><br>The SysOps administrator must modify the CloudFormation template so if the process stalls, the entire stack will fail and roll back.<br><br>Based on these requirements, what should be added to the template?</p>",
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
              "choice": "<p>A. Conditions with a timeout set to 4 hours.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. CreationPolicy with a timeout set to 4 hours.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. DependsOn with a timeout set to 4 hours.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Metadata with a timeout set to 4 hours.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 135 discussion",
      "discusstion": [
        {
          "id": 742455,
          "date": "Mon 12 Dec 2022 07:22",
          "username": "michaldavid",
          "content": "bbbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 721925,
          "date": "Sat 19 Nov 2022 11:16",
          "username": "Raynor",
          "content": "B - https://docs.aws.amazon.com/ko_kr/AWSCloudFormation/latest/UserGuide/aws-attribute-creationpolicy.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#136",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs workloads on 90 Amazon EC2 instances in the eu-west-1 Region in an AWS account. In 2 months, the company will migrate the workloads from eu-west-1 to the eu-west-3 Region.<br><br>The company needs to reduce the cost of the EC2 instances. The company is willing to make a 1-year commitment that will begin next week. The company must choose an EC2 instance purchasing option that will provide discounts for the 90 EC2 instances regardless of Region during the 1-year period.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#136",
          "answers": [
            {
              "choice": "<p>A. Purchase EC2 Standard Reserved Instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Purchase an EC2 Instance Savings Plan.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Purchase EC2 Convertible Reserved Instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Purchase a Compute Savings Plan.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 136 discussion",
      "discusstion": [
        {
          "id": 763792,
          "date": "Mon 02 Jan 2023 15:39",
          "username": "hiun",
          "content": "D.  Global",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 745312,
          "date": "Wed 14 Dec 2022 18:09",
          "username": "tts1234",
          "content": "D.  Purchase a Compute Savings Plan.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 742457,
          "date": "Mon 12 Dec 2022 07:25",
          "username": "michaldavid",
          "content": "ddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 720706,
          "date": "Thu 17 Nov 2022 18:47",
          "username": "Xelnak",
          "content": "EC2 Instance Savings Plans provide the lowest prices, offering savings up to 72% (just like Standard RIs) in exchange for commitment to usage of individual instance families in a Region (for example, M5 usage in N. Virginia).<br>https://docs.aws.amazon.com/whitepapers/latest/cost-optimization-reservation-models/savings-plans.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 720161,
          "date": "Thu 17 Nov 2022 04:10",
          "username": "Liongeek",
          "content": "Ans: D<br>Compute Saving Plans are global<br>The other ones are regional.<br>Question asks for global",
          "upvote_count": "2",
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
      "question_text": "<p>A SysOps administrator has created a VPC that contains a public subnet and a private subnet. Amazon EC2 instances that were launched in the private subnet cannot access the internet. The default network ACL is active on all subnets in the VPC, and all security groups allow all outbound traffic.<br><br>Which solution will provide the EC2 instances in the private subnet with access to the internet?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#137",
          "answers": [
            {
              "choice": "<p>A. Create a NAT gateway in the public subnet. Create a route from the private subnet to the NAT gateway.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a NAT gateway in the public subnet. Create a route from the public subnet to the NAT gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a NAT gateway in the private subnet. Create a route from the public subnet to the NAT gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a NAT gateway in the private subnet. Create a route from the private subnet to the NAT gateway.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 137 discussion",
      "discusstion": [
        {
          "id": 742459,
          "date": "Mon 12 Dec 2022 07:27",
          "username": "michaldavid",
          "content": "aaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 720163,
          "date": "Thu 17 Nov 2022 04:11",
          "username": "Liongeek",
          "content": "Ans: A",
          "upvote_count": "3",
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
      "question_text": "<p>A company plans to run a public web application on Amazon EC2 instances behind an Elastic Load Balancer (ELB). The company's security team wants to protect the website by using AWS Certificate Manager (ACM) certificates. The ELB must automatically redirect any HTTP requests to HTTPS.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#138",
          "answers": [
            {
              "choice": "<p>A. Create an Application Load Balancer that has one HTTPS listener on port 80. Attach an SSL/TLS certificate to listener port 80. Create a rule to redirect requests from HTTP to HTTPS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Application Load Balancer that has one HTTP listener on port 80 and one HTTPS protocol listener on port 443. Attach an SSL/TLS certificate to listener port 443. Create a rule to redirect requests from port 80 to port 443.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Application Load Balancer that has two TCP listeners on port 80 and port 443. Attach an SSL/TLS certificate to listener port 443. Create a rule to redirect requests from port 80 to port 443.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a Network Load Balancer that has two TCP listeners on port 80 and port 443. Attach an SSL/TLS certificate to listener port 443. Create a rule to redirect requests from port 80 to port 443.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 138 discussion",
      "discusstion": [
        {
          "id": 742462,
          "date": "Mon 12 Dec 2022 07:29",
          "username": "michaldavid",
          "content": "bbbbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 728357,
          "date": "Sun 27 Nov 2022 16:08",
          "username": "marcelodba",
          "content": "I'll go for B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#139",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to track its AWS costs in all member accounts that are part of an organization in AWS Organizations. Managers of the member accounts want to receive a notification when the estimated costs exceed a predetermined amount each month. The managers are unable to configure a billing alarm. The IAM permissions for all users are correct.<br><br>What could be the cause of this issue?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#139",
          "answers": [
            {
              "choice": "<p>A. The management/payer account does not have billing alerts turned on.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. The company has not configured AWS Resource Access Manager (AWS RAM) to share billing information between the member accounts and the management/payer account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Amazon GuardDuty is turned on for all the accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The company has not configured an AWS Config rule to monitor billing.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 139 discussion",
      "discusstion": [
        {
          "id": 742464,
          "date": "Mon 12 Dec 2022 07:30",
          "username": "michaldavid",
          "content": "aaaaaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 728360,
          "date": "Sun 27 Nov 2022 16:12",
          "username": "marcelodba",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 720212,
          "date": "Thu 17 Nov 2022 05:56",
          "username": "Liongeek",
          "content": "Ans: A<br>Ref. https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html#turning_on_billing_metrics",
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
      "question_text": "<p>A company is using Amazon Elastic Container Service (Amazon ECS) to run a containerized application on Amazon EC2 instances. A SysOps administrator needs to monitor only traffic flows between the ECS tasks.<br><br>Which combination of steps should the SysOps administrator take to meet this requirement? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#140",
          "answers": [
            {
              "choice": "<p>A. Configure Amazon CloudWatch Logs on the elastic network interface of each task.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure VPC Flow Logs on the elastic network interface of each task.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Specify the awsvpc network mode in the task definition.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Specify the bridge network mode in the task definition.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Specify the host network mode in the task definition.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 140 discussion",
      "discusstion": [
        {
          "id": 758647,
          "date": "Tue 27 Dec 2022 15:46",
          "username": "hiun",
          "content": "B, C is correct answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 742620,
          "date": "Mon 12 Dec 2022 10:44",
          "username": "Arnaud92",
          "content": "B,C : https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking-awsvpc.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 728376,
          "date": "Sun 27 Nov 2022 16:30",
          "username": "marcelodba",
          "content": "I'll go for B,C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BC"
        }
      ]
    },
    {
      "question_id": "#141",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations to manage multiple AWS accounts. The company's SysOps team has been using a manual process to create and manage IAM roles. The team requires an automated solution to create and manage the necessary IAM roles for multiple AWS accounts.<br><br>What is the MOST operationally efficient solution that meets these requirements?</p>",
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
              "choice": "<p>A. Create AWS CloudFormation templates. Reuse the templates to create the necessary IAM roles in each of the AWS accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Directory Service with AWS Organizations to automatically associate the necessary IAM roles with Microsoft Active Directory users.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Resource Access Manager with AWS Organizations to deploy and manage shared resources across the AWS accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS CloudFormation StackSets with AWS Organizations to deploy and manage IAM roles for the AWS accounts.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 141 discussion",
      "discusstion": [
        {
          "id": 742475,
          "date": "Mon 12 Dec 2022 07:46",
          "username": "michaldavid",
          "content": "ddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 728387,
          "date": "Sun 27 Nov 2022 16:41",
          "username": "marcelodba",
          "content": "I'll go for D<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#142",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator needs to configure automatic rotation for Amazon RDS database credentials. The credentials must rotate every 30 days. The solution must integrate with Amazon RDS.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
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
              "choice": "<p>A. Store the credentials in AWS Systems Manager Parameter Store as a secure string. Configure automatic rotation with a rotation interval of 30 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Store the credentials in AWS Secrets Manager. Configure automatic rotation with a rotation interval of 30 days.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Store the credentials in a file in an Amazon S3 bucket. Deploy an AWS Lambda function to automatically rotate the credentials every 30 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Store the credentials in AWS Secrets Manager. Deploy an AWS Lambda function to automatically rotate the credentials every 30 days.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 142 discussion",
      "discusstion": [
        {
          "id": 742476,
          "date": "Mon 12 Dec 2022 07:47",
          "username": "michaldavid",
          "content": "bbbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 728389,
          "date": "Sun 27 Nov 2022 16:43",
          "username": "marcelodba",
          "content": "Ans. B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#143",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's SysOps administrator attempts to restore an Amazon Elastic Block Store (Amazon EBS) snapshot. However, the snapshot is missing because another system administrator accidentally deleted the snapshot. The company needs the ability to recover snapshots for a specified period of time after snapshots are deleted.<br><br>Which solution will provide this functionality?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#143",
          "answers": [
            {
              "choice": "<p>A. Turn on deletion protection on individual EBS snapshots that need to be kept.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an IAM policy that denies the deletion of EBS snapshots by using a condition statement for the snapshot age. Apply the policy to all users.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a Recycle Bin retention rule for EBS snapshots for the desired retention period.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon EventBridge (Amazon CloudWatch Events) to schedule an AWS Lambda function to copy EBS snapshots to Amazon S3 Glacier.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 143 discussion",
      "discusstion": [
        {
          "id": 742479,
          "date": "Mon 12 Dec 2022 07:49",
          "username": "michaldavid",
          "content": "cccccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 728391,
          "date": "Sun 27 Nov 2022 16:45",
          "username": "marcelodba",
          "content": "https://aws.amazon.com/pt/blogs/aws/new-recycle-bin-for-ebs-snapshots/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 720222,
          "date": "Thu 17 Nov 2022 06:12",
          "username": "Liongeek",
          "content": "Ans: C<br>REF.  https://aws.amazon.com/es/blogs/aws/new-recycle-bin-for-ebs-snapshots/",
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
      "question_text": "<p>A SysOps administrator recently configured Amazon S3 Cross-Region Replication on an S3 bucket.<br><br>Which of the following does this feature replicate to the destination S3 bucket by default?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#144",
          "answers": [
            {
              "choice": "<p>A. Objects in the source S3 bucket for which the bucket owner does not have permissions<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Objects that are stored in S3 Glacier<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Objects that existed before replication was configured<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Object metadata<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 144 discussion",
      "discusstion": [
        {
          "id": 742484,
          "date": "Mon 12 Dec 2022 07:54",
          "username": "michaldavid",
          "content": "ddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 742230,
          "date": "Mon 12 Dec 2022 01:07",
          "username": "gsotiriou",
          "content": "I think D as well<br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-what-is-isnot-replicated.html#:~:textObject%20metadata%20from%20the%20source%20objects%20to%20the%20replicas.%20For%20information%20about%20replicating%20metadata%20from%20the%20replicas%20to%20the%20source%20objects%2C%20see%20Replicating%20metadata%20changes%20with%20Amazon%20S3%20replica%20modification%20sync.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 741101,
          "date": "Sat 10 Dec 2022 17:31",
          "username": "Fatoch",
          "content": "In this case it is not A.  By default S3 bucket does not have permissions. Why D? I didn't get yet",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 737939,
          "date": "Wed 07 Dec 2022 15:10",
          "username": "grka25",
          "content": "I think D. <br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html",
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
      "question_text": "<p>A company has a workload that is sending log data to Amazon CloudWatch Logs. One of the fields includes a measure of application latency. A SysOps administrator needs to monitor the p90 statistic of this field over time.<br><br>What should the SysOps administrator do to meet this requirement?</p>",
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
              "choice": "<p>A. Create an Amazon CloudWatch Contributor Insights rule on the log data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a metric filter on the log data.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a subscription filter on the log data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon CloudWatch Application Insights rule for the workload.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 145 discussion",
      "discusstion": [
        {
          "id": 741025,
          "date": "Sat 10 Dec 2022 15:04",
          "username": "Pepepep",
          "content": "B<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/MonitoringLogData.html",
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
      "question_text": "<p>A company wants to archive sensitive data on Amazon S3 Glacier. The company's regulatory and compliance requirements do not allow any modifications to the data by any account.<br><br>Which solution meets these requirements?</p>",
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
              "choice": "<p>A. Attach a vault lock policy to an S3 Glacier vault that contains the archived data. Use the lock ID to validate the vault lock policy after 24 hours.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Attach a vault lock policy to an S3 Glacier vault that contains the archived data. Use the lock ID to validate the vault lock policy within 24 hours.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure S3 Object Lock in governance mode. Upload all files after 24 hours.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure S3 Object Lock in governance mode. Upload all files within 24 hours.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 146 discussion",
      "discusstion": [
        {
          "id": 748214,
          "date": "Sat 17 Dec 2022 17:50",
          "username": "Fatoch",
          "content": "A and B are same answers.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 728401,
          "date": "Sun 27 Nov 2022 16:57",
          "username": "marcelodba",
          "content": "https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html#:~:textInitiate%20the%20lock,will%20be%20deleted.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 727810,
          "date": "Sat 26 Nov 2022 21:46",
          "username": "Beidog",
          "content": "Vote for B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 721921,
          "date": "Sat 19 Nov 2022 10:52",
          "username": "Raynor",
          "content": "B - https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html#vault-lock-overview",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 720754,
          "date": "Thu 17 Nov 2022 19:33",
          "username": "Xelnak",
          "content": "While the policy is in the in-progress state, you have 24 hours to validate your Vault Lock policy before the lock ID expires. To prevent your vault from exiting the in-progress state, you must complete the Vault Lock process within these 24 hours. Otherwise, your Vault Lock policy will be deleted.<br>https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html#vault-lock-overview",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 720237,
          "date": "Thu 17 Nov 2022 06:36",
          "username": "Liongeekzolthar_z",
          "content": "Ans: A<br>Ref: https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html#vault-lock-overviewBased on your link the answer is B",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 751136,
          "date": "Tue 20 Dec 2022 16:40",
          "username": "zolthar_z",
          "content": "Based on your link the answer is B",
          "upvote_count": "1",
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
      "question_text": "<p>A company manages an application that uses Amazon ElastiCache for Redis with two extra-large nodes spread across two different Availability Zones. The company's IT team discovers that the ElastiCache for Redis cluster has 75% freeable memory. The application must maintain high availability.<br><br>What is the MOST cost-effective way to resize the cluster?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#147",
          "answers": [
            {
              "choice": "<p>A. Decrease the number of nodes in the ElastiCache for Redis cluster from 2 to 1.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy a new ElastiCache for Redis cluster that uses large node types. Migrate the data from the original cluster to the new cluster. After the process is complete, shut down the original cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy a new ElastiCache for Redis cluster that uses large node types. Take a backup from the original cluster, and restore the backup in the new cluster. After the process is complete, shut down the original cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Perform an online resizing for the ElastiCache for Redis cluster. Change the node types from extra-large nodes to large nodes.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 147 discussion",
      "discusstion": [
        {
          "id": 721104,
          "date": "Fri 18 Nov 2022 07:23",
          "username": "Xelnak",
          "content": "https://docs.amazonaws.cn/en_us/AmazonElastiCache/latest/red-ug/redis-cluster-vertical-scaling-scaling-down.html#redis-cluster-vertical-scaling-down-console",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 755579,
          "date": "Sun 25 Dec 2022 11:20",
          "username": "edu_anadat",
          "content": "D<br>The application must maintain high availability.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 727813,
          "date": "Sat 26 Nov 2022 21:54",
          "username": "Beidog",
          "content": "Answer is D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#148",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company must migrate its applications to AWS. The company is using Chef recipes for configuration management. The company wants to continue to use the existing Chef recipes after the applications are migrated to AWS.<br><br>What is the MOST operationally efficient solution that meets these requirements?</p>",
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
              "choice": "<p>A. Use AWS CloudFormation to create an Amazon EC2 instance, install a Chef server, and add Chef recipes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS CloudFormation to create a stack and add layers for Chef recipes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Elastic Beanstalk with the Docker platform to upload Chef recipes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS OpsWorks to create a stack and add layers with Chef recipes.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 148 discussion",
      "discusstion": [
        {
          "id": 766694,
          "date": "Thu 05 Jan 2023 15:07",
          "username": "dangji",
          "content": "The key word is \\\"Chef\\\".",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 742490,
          "date": "Mon 12 Dec 2022 08:05",
          "username": "michaldavid",
          "content": "ddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 728404,
          "date": "Sun 27 Nov 2022 17:02",
          "username": "marcelodba",
          "content": "https://docs.aws.amazon.com/opsworks/latest/userguide/welcome_opscm.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#149",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations to manage its AWS accounts. A SysOps administrator must create a backup strategy for all Amazon EC2 instances across all the company's AWS accounts.<br><br>Which solution will meet these requirements in the MOST operationally efficient way?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#149",
          "answers": [
            {
              "choice": "<p>A. Deploy an AWS Lambda function to each account to run EC2 instance snapshots on a scheduled basis.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS CloudFormation stack set in the management account to add an AutoBackupTrue tag to every EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Backup in the management account to deploy policies for all accounts and resources.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use a service control policy (SCP) to run EC2 instance snapshots on a scheduled basis in each account.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 149 discussion",
      "discusstion": [
        {
          "id": 721108,
          "date": "Fri 18 Nov 2022 07:29",
          "username": "Xelnak",
          "content": "https://aws.amazon.com/backup/features/<br>AWS Backup now supports cross-account backup, enabling you to securely copy your backups across your AWS accounts within your AWS organizations.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 720811,
          "date": "Thu 17 Nov 2022 20:48",
          "username": "Liongeek",
          "content": "Ans C<br>Tagging isn't enough to backup the instances. You'll also need a backup plan and rules.",
          "upvote_count": "1",
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
      "question_text": "<p>A SysOps administrator is reviewing VPC Flow Logs to troubleshoot connectivity issues in a VPC.  While reviewing the logs, the SysOps administrator notices that rejected traffic is not listed.<br><br>What should the SysOps administrator do to ensure that all traffic is logged?</p>",
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
              "choice": "<p>A. Create a new flow log that has a filter setting to capture all traffic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new flow log. Set the log record format to a custom format. Select the proper fields to include in the log.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Edit the existing flow log. Change the filter setting to capture all traffic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Edit the existing flow log. Set the log record format to a custom format. Select the proper fields to include in the log.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 150 discussion",
      "discusstion": [
        {
          "id": 719888,
          "date": "Wed 16 Nov 2022 19:07",
          "username": "Liongeek",
          "content": "Ans: A<br>You CANNOT modify a VPC Flow Log<br>Ref: https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html#flow-logs-limitations \\\"After you create a flow log, you cannot change its configuration or the flow log record format. For example, you can't associate a different IAM role with the flow log, or add or remove fields in the flow log record. Instead, you can delete the flow log and create a new one with the required configuration.\\\"",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 763402,
          "date": "Mon 02 Jan 2023 01:20",
          "username": "CodePoet",
          "content": "Keyword: \\\"ensure that all traffic is logged\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 762676,
          "date": "Sat 31 Dec 2022 14:57",
          "username": "yeacuz",
          "content": "The answer is:B.  Create a new flow log. Set the log record format to a custom format. Select the proper fields to include in the log.<br><br>You need to create a new flow log.There is no \\\"filter setting to capture all traffic\\\", but you can set the log record to a custom format as specified in the user guide (https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html#flow-logs-custom)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 740766,
          "date": "Sat 10 Dec 2022 08:54",
          "username": "marcelodba",
          "content": "Ans: A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#151",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is expanding its use of AWS services across its portfolios. The company wants to provision AWS accounts for each team to ensure a separation of business processes for security, compliance, and billing. Account creation and bootstrapping should be completed in a scalable and efficient way so new accounts are created with a defined baseline and governance guardrails in place. A SysOps administrator needs to design a provisioning process that saves time and resources.<br><br>Which action should be taken to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#151",
          "answers": [
            {
              "choice": "<p>A. Automate using AWS Elastic Beanstalk to provision the AWS accounts, set up infrastructure, and integrate with AWS Organizations.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create bootstrapping scripts in AWS OpsWorks and combine them with AWS CloudFormation templates to provision accounts and infrastructure.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Config to provision accounts and deploy instances using AWS Service Catalog.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Control Tower to create a template in Account Factory and use the template to provision new accounts.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 151 discussion",
      "discusstion": [
        {
          "id": 743582,
          "date": "Tue 13 Dec 2022 05:35",
          "username": "michaldavid",
          "content": "ddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 741210,
          "date": "Sat 10 Dec 2022 20:52",
          "username": "tyfta6",
          "content": "Elastic Beanstalk is for Deploying Web Apps, NOT for automating MultiAccount AWS Infrastructures (which is all that Control Tower does)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 719928,
          "date": "Wed 16 Nov 2022 20:00",
          "username": "Liongeek",
          "content": "Ans: D",
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
      "question_text": "<p>A SysOps administrator noticed that the cache hit ratio for an Amazon CloudFront distribution is less than 10%.<br><br>Which collection of configuration changes will increase the cache hit ratio for the distribution? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#152",
          "answers": [
            {
              "choice": "<p>A. Ensure that only required cookies, query strings, and headers are forwarded in the Cache Behavior Settings.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Change the Viewer Protocol Policy to use HTTPS only.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the distribution to use presigned cookies and URLs to restrict access to the distribution.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable automatic compression of objects in the Cache Behavior Settings.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Increase the CloudFront time to live (TTL) settings in the Cache Behavior Settings.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 152 discussion",
      "discusstion": [
        {
          "id": 743583,
          "date": "Tue 13 Dec 2022 05:36",
          "username": "michaldavid",
          "content": "A and E",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 719930,
          "date": "Wed 16 Nov 2022 20:02",
          "username": "Liongeek",
          "content": "Ans: A&E",
          "upvote_count": "3",
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
      "question_text": "<p>A SysOps administrator is attempting to download patches from the internet into an instance in a private subnet. An internet gateway exists for the VPC, and a NAT gateway has been deployed on the public subnet; however, the instance has no internet connectivity. The resources deployed into the private subnet must be inaccessible directly from the public internet.<br><br>Public Subnet (10.0.1.0/24) Route Table<br><br>Destination  Target -<br>10.0.0.0/16  local<br>0.0.0.0/0   IGW<br><br>Private Subnet (10.0.2.0/24) Route Table<br><br>Destination   Target -<br>10.0.0.0/16   local<br><br>What should be added to the private subnet's route table in order to address this issue, given the information provided?</p>",
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
              "choice": "<p>A. 0.0.0.0/0  IGW<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. 0.0.0.0/0  NAT<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. 10.0.1.0/24  IGW<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. 10.0.1.0/24  NAT<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 153 discussion",
      "discusstion": [
        {
          "id": 743584,
          "date": "Tue 13 Dec 2022 05:39",
          "username": "michaldavid",
          "content": "bbbbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 723193,
          "date": "Mon 21 Nov 2022 06:55",
          "username": "Jamshif01",
          "content": "B is the correct answer<br>private ip --> nat gateway --> 0.0.0.0/0 --> internet access",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 719933,
          "date": "Wed 16 Nov 2022 20:03",
          "username": "LiongeekLiongeek",
          "content": "Ans: AMy Bad, correct Ans is B",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 719934,
          "date": "Wed 16 Nov 2022 20:04",
          "username": "Liongeek",
          "content": "My Bad, correct Ans is B",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#154",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is undergoing an external audit of its systems, which run wholly on AWS. A SysOps administrator must supply documentation of Payment Card Industry Data Security Standard (PCI DSS) compliance for the infrastructure managed by AWS.<br><br>Which set of actions should the SysOps administrator take to meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#154",
          "answers": [
            {
              "choice": "<p>A. Download the applicable reports from the AWS Artifact portal and supply these to the auditors.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Download complete copies of the AWS CloudTrail log files and supply these to the auditors.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Download complete copies of the AWS CloudWatch logs and supply these to the auditors.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provide the auditors with administrative access to the production AWS account so that the auditors can determine compliance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 154 discussion",
      "discusstion": [
        {
          "id": 719937,
          "date": "Wed 16 Nov 2022 20:06",
          "username": "Liongeek",
          "content": "Ans: A<br>Just notice that this is correct as is regarding AWS infrastructure, but if you want to know if your resource and account configuration is compliant, you should then check AWS Security Hub",
          "upvote_count": "3",
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
      "question_text": "<p>A company has an initiative to reduce costs associated with Amazon EC2 and AWS Lambda.<br><br>Which action should a SysOps administrator take to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#155",
          "answers": [
            {
              "choice": "<p>A. Analyze the AWS Cost and Usage Report by using Amazon Athena to identify cost savings.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Budgets alert to alarm when account spend reaches 80% of the budget.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Purchase Reserved Instances through the Amazon EC2 console.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Compute Optimizer and take action on the provided recommendations.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 155 discussion",
      "discusstion": [
        {
          "id": 743586,
          "date": "Tue 13 Dec 2022 05:41",
          "username": "michaldavid",
          "content": "ddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 719947,
          "date": "Wed 16 Nov 2022 20:21",
          "username": "Liongeek",
          "content": "Ans: D<br>Compute Optimizer gives recomendations for EC2, EBS, Lambda",
          "upvote_count": "3",
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
      "question_text": "<p>A company wants to use only IPv6 for all its Amazon EC2 instances. The EC2 instances must not be accessible from the internet, but the EC2 instances must be able to access the internet. The company creates a dual-stack VPC and IPv6-only subnets.<br><br>How should a SysOps administrator configure the VPC to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#156",
          "answers": [
            {
              "choice": "<p>A. Create and attach a NAT gateway. Create a custom route table that includes an entry to point all IPv6 traffic to the NAT gateway. Attach the custom route table to the IPv6-only subnets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create and attach an internet gateway. Create a custom route table that includes an entry to point all IPv6 traffic to the internet gateway. Attach the custom route table to the IPv6-only subnets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create and attach an egress-only internet gateway. Create a custom route table that includes an entry to point all IPv6 traffic to the egress-only internet gateway. Attach the custom route table to the IPv6-only subnets.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create and attach an internet gateway and a NAT gateway. Create a custom route table that includes an entry to point all IPv6 traffic to the internet gateway and all IPv4 traffic to the NAT gateway. Attach the custom route table to the IPv6-only subnets.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 156 discussion",
      "discusstion": [
        {
          "id": 743588,
          "date": "Tue 13 Dec 2022 05:44",
          "username": "michaldavid",
          "content": "ccccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 738802,
          "date": "Thu 08 Dec 2022 10:12",
          "username": "BugsBunny9998666",
          "content": "ingress\t\tiP v4 only<br>egress \t\tiP v6 only /// one way connection to internet without being exposed",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 736689,
          "date": "Tue 06 Dec 2022 10:43",
          "username": "XAvenger",
          "content": "egress-only internet gateway",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 720936,
          "date": "Thu 17 Nov 2022 23:33",
          "username": "hardwiredman",
          "content": "IPV6 needs an internet-only gateway",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 719949,
          "date": "Wed 16 Nov 2022 20:25",
          "username": "Liongeek",
          "content": "Ans is C<br>Only egress-only internet gateway can be used to let instance go to internet without being exposed",
          "upvote_count": "4",
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
      "question_text": "<p>A company has an existing web application that runs on two Amazon EC2 instances behind an Application Load Balancer (ALB) across two Availability Zones. The application uses an Amazon RDS Multi-AZ DB Instance. Amazon Route 53 record sets route requests for dynamic content to the load balancer and requests for static content to an Amazon S3 bucket. Site visitors are reporting extremely long loading times.<br><br>Which actions should be taken to improve the performance of the website? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#157",
          "answers": [
            {
              "choice": "<p>A. Add Amazon CloudFront caching for static content.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Change the load balancer listener from HTTPS to TCP.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable Amazon Route 53 latency-based routing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Implement Amazon EC2 Auto Scaling for the web servers.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Move the static content from Amazon S3 to the web servers.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 157 discussion",
      "discusstion": [
        {
          "id": 769337,
          "date": "Sun 08 Jan 2023 12:40",
          "username": "zolthar_z",
          "content": "AD:<br>A is obvious<br>D If servers are working to total capacity theASG will help to increase the performance,<br><br>If is a latency issue C will not work because both are in the same region",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 743590,
          "date": "Tue 13 Dec 2022 05:48",
          "username": "michaldavid",
          "content": "A and D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 738814,
          "date": "Thu 08 Dec 2022 10:22",
          "username": "BugsBunny9998666",
          "content": "A D ///C is wrong as it mentioned that ((ALB) across two Availability Zones ) JUST 1 region !!!<br>what is the point in C, Route 53 latency routing if it all goes to one region anyway ?",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 738310,
          "date": "Wed 07 Dec 2022 21:09",
          "username": "beznika",
          "content": "AD 100%",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 732053,
          "date": "Wed 30 Nov 2022 23:24",
          "username": "tyfta6",
          "content": "True A.  Add Amazon CloudFront caching for static content. (For S3)<br>Wrong B.  Change the load balancer listener from HTTPS to TCP. (ALB not supported TCP. NLB supported TCP and has extreme perfermance)<br>Wrong C.  Enable Amazon Route 53 latency-based routing. (Application is in one region. Dont need latency)<br>True D.  Implement Amazon EC2 Auto Scaling for the web servers. (Auto Scailing can control app perfermance by scale out and scale in)<br>Wrong E.  Move the static content from Amazon S3 to the web servers.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 728480,
          "date": "Sun 27 Nov 2022 18:37",
          "username": "marcelodba",
          "content": "I'll go for A,C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 723200,
          "date": "Mon 21 Nov 2022 07:04",
          "username": "Jamshif01",
          "content": "ans: ACA.  Add Amazon CloudFront caching for static content.-YESB.  Change the load balancer listener from HTTPS to TCP. - doesn't make any senseC.  Enable Amazon Route 53 latency-based routing. - YESD.  Implement Amazon EC2 Auto Scaling for the web servers. - This won't help with loadingE.  Move the static content from Amazon S3 to the web servers. - no, cloudfront caching going to solve this problem",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 719953,
          "date": "Wed 16 Nov 2022 20:28",
          "username": "Liongeek",
          "content": "This on is tricky. I think it's A & C, but not sure if it's also D. ",
          "upvote_count": "2",
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
      "question_text": "<p>A company is running an application on premises and wants to use AWS for data backup. All of the data must be available locally. The backup application can write only to block-based storage that is compatible with the Portable Operating System Interface (POSIX).<br><br>Which backup solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#158",
          "answers": [
            {
              "choice": "<p>A. Configure the backup software to use Amazon S3 as the target for the data backups.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the backup software to use Amazon S3 Glacier as the target for the data backups.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Storage Gateway, and configure it to use gateway-cached volumes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Storage Gateway, and configure it to use gateway-stored volumes.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 158 discussion",
      "discusstion": [
        {
          "id": 751734,
          "date": "Wed 21 Dec 2022 02:05",
          "username": "MrMLB",
          "content": "C.  Use AWS Storage Gateway, and configure it to use gateway-cached volumes.<br><br>AWS Storage Gateway is a service that connects an on-premises data center to the cloud. It provides block-based storage that is compatible with the Portable Operating System Interface (POSIX) and can be used as a target for data backups. Gateway-cached volumes allow you to store your data locally, while asynchronously backing up that data to Amazon S3. This allows you to retain local access to your data, while still providing the benefits of cloud-based data storage and backup.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 743591,
          "date": "Tue 13 Dec 2022 05:49",
          "username": "michaldavid",
          "content": "dddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 721182,
          "date": "Fri 18 Nov 2022 09:53",
          "username": "Xelnak",
          "content": "https://docs.amazonaws.cn/en_us/storagegateway/latest/vgw/StorageGatewayConcepts.html<br>By using stored volumes, you can store your primary data locally, while asynchronously backing up that data to Amazon. Stored volumes provide your on-premises applications with low-latency access to their entire datasets. At the same time, they provide durable, offsite backups.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 719961,
          "date": "Wed 16 Nov 2022 20:43",
          "username": "Liongeek",
          "content": "Ans: D<br>With Volume Stored Gateway all your data stays onprem and backups are sent to S3 asEBS snapshots. It's also POSIX compatible",
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
      "question_text": "<p>A global company handles a large amount of personally identifiable information (PII) through an internal web portal. The company's application runs in a corporate data center that is connected to AWS through an AWS Direct Connect connection. The application stores the PII in Amazon S3. According to a compliance requirement, traffic from the web portal to Amazon S3 must not travel across the internet.<br><br>What should a SysOps administrator do to meet the compliance requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#159",
          "answers": [
            {
              "choice": "<p>A. Provision an interface VPC endpoint for Amazon S3. Modify the application to use the interface endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure AWS Network Firewall to redirect traffic to the internal S3 address.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the application to use the S3 path-style endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up a range of VPC network ACLs to redirect traffic to the internal S3 address.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 159 discussion",
      "discusstion": [
        {
          "id": 743593,
          "date": "Tue 13 Dec 2022 05:51",
          "username": "michaldavid",
          "content": "aaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 734625,
          "date": "Sat 03 Dec 2022 19:38",
          "username": "beznikabeznika",
          "content": "This question is written wrong. For S3 there is no interface VPC endpoint. S3 and DynamoDB uses VPC Gateway Endpoint. Interface VPC endpoints require ENI and S3 doesn't use it.A answer is still correct but I was wrong about the S3, it can use both VPC gateway endpoint and interface VPC endpoint.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 738313,
          "date": "Wed 07 Dec 2022 21:13",
          "username": "beznika",
          "content": "A answer is still correct but I was wrong about the S3, it can use both VPC gateway endpoint and interface VPC endpoint.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 721186,
          "date": "Fri 18 Nov 2022 10:03",
          "username": "Xelnak",
          "content": "Using the interface endpoint, applications in your on-premises data center can easily query S3 buckets over AWS Direct Connect or Site-to-Site VPN.<br>https://aws.amazon.com/blogs/architecture/choosing-your-vpc-endpoint-strategy-for-amazon-s3/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 719965,
          "date": "Wed 16 Nov 2022 20:45",
          "username": "Liongeek",
          "content": "Ans: A!",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#160",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator notices a scale-up event for an Amazon EC2 Auto Scaling group. Amazon CloudWatch shows a spike in the RequestCount metric for the associated Application Load Balancer. The administrator would like to know the IP addresses for the source of the requests.<br><br>Where can the administrator find this information?</p>",
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
              "choice": "<p>A. Auto Scaling logs<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. AWS CloudTrail logs<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. EC2 instance logs<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Elastic Load Balancer access logs<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 160 discussion",
      "discusstion": [
        {
          "id": 743594,
          "date": "Tue 13 Dec 2022 05:51",
          "username": "michaldavid",
          "content": "dddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 719966,
          "date": "Wed 16 Nov 2022 20:46",
          "username": "Liongeek",
          "content": "Ans: D!",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#161",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's SysOps administrator deploys a public Network Load Balancer (NLB) in front of the company's web application. The web application does not use any Elastic IP addresses. Users must access the web application by using the company's domain name. The SysOps administrator needs to configure Amazon Route 53 to route traffic to the NLB. <br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#161",
          "answers": [
            {
              "choice": "<p>A. Create a Route 53 AAAA record for the NLB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a Route 53 alias record for the NLB. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a Route 53 CAA record for the NLB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a Route 53 CNAME record for the NLB. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 161 discussion",
      "discusstion": [
        {
          "id": 738862,
          "date": "Thu 08 Dec 2022 10:53",
          "username": "BugsBunny9998666",
          "content": "As a good reminder:<br>A recordURL to IPv4<br>AAAA recordURL to IPv6<br>CNAME recordURL to URL (All the same, one urlMany URL's)<br>Alias recordAWS service",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 743597,
          "date": "Tue 13 Dec 2022 05:54",
          "username": "michaldavid",
          "content": "bbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 719968,
          "date": "Wed 16 Nov 2022 20:48",
          "username": "Liongeek",
          "content": "Ans: B<br>Alias record doesn't charge when you associate it to AWS resources like NLB",
          "upvote_count": "1",
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
      "question_text": "<p>A company runs an encrypted Amazon RDS for Oracle DB instance. The company wants to make regular backups available in another AWS Region.<br><br>What is the MOST operationally efficient solution that meets these requirements?</p>",
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
              "choice": "<p>A. Modify the DB instance. Enable cross-Region automated backups.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an RDS read replica in another Region. Create a snapshot of the read replica.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Database Migration Service (AWS DMS) to copy the data to a DB instance in another Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Temporarily turn off encryption on the DB instance. Take a snapshot. Copy the snapshot to another Region.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 162 discussion",
      "discusstion": [
        {
          "id": 743600,
          "date": "Tue 13 Dec 2022 05:56",
          "username": "michaldavid",
          "content": "aaaaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 719971,
          "date": "Wed 16 Nov 2022 20:51",
          "username": "Liongeek",
          "content": "Ans: A<br>REF: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html<br>\\\"Enabling cross-Region automated backups<br>You can enable backup replication on new or existing DB instances using the Amazon RDS console. You can also use the start-db-instance-automated-backups-replication AWS CLI command or the StartDBInstanceAutomatedBackupsReplication RDS API operation. You can replicate up to 20 backups to each destination AWS Region for each AWS account\\\"",
          "upvote_count": "3",
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
      "question_text": "<p>A company is rolling out a new version of its website. Management wants to deploy the new website in a limited rollout to 20% of the company's customers. The company uses Amazon Route 53 for its website's DNS solution.<br><br>Which configuration will meet these requirements?</p>",
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
              "choice": "<p>A. Create a failover routing policy. Within the policy, configure 80% of the website traffic to be sent to the original resource. Configure the remaining 20% of traffic as the failover record that points to the new resource.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a multivalue answer routing policy. Within the policy, create 4 records with the name and IP address of the original resource. Configure 1 record with the name and IP address of the new resource.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a latency-based routing policy. Within the policy, configure a record pointing to the original resource with a weight of 80. Configure a record pointing to the new resource with a weight of 20.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a weighted routing policy. Within the policy, configure a weight of 80 for the record pointing to the original resource. Configure a weight of 20 for the record pointing to the new resource.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 163 discussion",
      "discusstion": [
        {
          "id": 743601,
          "date": "Tue 13 Dec 2022 05:57",
          "username": "michaldavid",
          "content": "ddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 728487,
          "date": "Sun 27 Nov 2022 18:43",
          "username": "marcelodba",
          "content": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-weighted.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 719993,
          "date": "Wed 16 Nov 2022 21:43",
          "username": "Liongeek",
          "content": "Ans: D",
          "upvote_count": "3",
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
      "question_text": "<p>A SysOps administrator created an AWS CloudFormation template that provisions Amazon EC2 instances, an Elastic Load Balancer (ELB), and an Amazon RDS DB instance. During stack creation, the creation of the EC2 instances and the creation of the ELB are successful. However, the creation of the DB instance fails.<br><br>What is the default behavior of CloudFormation in this scenario?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#164",
          "answers": [
            {
              "choice": "<p>A. CloudFormation will roll back the stack and delete the stack.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. CloudFormation will roll back the stack but will not delete the stack.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. CloudFormation will prompt the user to roll back the stack or continue.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. CloudFormation will successfully complete the stack but will report a failed status for the DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 164 discussion",
      "discusstion": [
        {
          "id": 751740,
          "date": "Wed 21 Dec 2022 02:19",
          "username": "MrMLB",
          "content": "B.  CloudFormation will roll back the stack but will not delete the stack.<br><br>In AWS CloudFormation, if the creation of a resource within a stack fails, CloudFormation will roll back the entire stack to its previous state. This means that any resources that were created successfully will be deleted, and the stack will be returned to the state it was in before the stack creation began. However, CloudFormation does not delete the stack itself in this scenario. Instead, the stack remains in a failed state, and the administrator can choose to roll back the stack or continue with the stack creation.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 743602,
          "date": "Tue 13 Dec 2022 05:59",
          "username": "michaldavid",
          "content": "bbbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 741089,
          "date": "Sat 10 Dec 2022 17:15",
          "username": "Pepepep",
          "content": "It is B. <br>https://stelligent.com/2020/08/17/removing-errors-on-cloudformation-stack-creation/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 735137,
          "date": "Sun 04 Dec 2022 15:23",
          "username": "CloudHandsOn",
          "content": "Answer is B.  Stack will need to be deleted manually",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 734649,
          "date": "Sat 03 Dec 2022 20:13",
          "username": "beznika",
          "content": "B.  CloudFormation default behavior is to rolback but the stack needs to be removed manually.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 728469,
          "date": "Sun 27 Nov 2022 18:18",
          "username": "traja",
          "content": "Ans is B.  It will delete all the resources in the stack but stack deletion will be manual.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 721197,
          "date": "Fri 18 Nov 2022 10:26",
          "username": "Xelnak",
          "content": "A for sure",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 719999,
          "date": "Wed 16 Nov 2022 22:00",
          "username": "Liongeek",
          "content": "I think it's A",
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
      "question_text": "<p>A SysOps administrator needs to automate the invocation of an AWS Lambda function. The Lambda function must run at the end of each day to generate a report on data that is stored in an Amazon S3 bucket.<br><br>What is the MOST operationally efficient solution that meets these requirements?</p>",
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
              "choice": "<p>A. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that has an event pattern for Amazon S3 and the Lambda function as a target.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that has a schedule and the Lambda function as a target.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an S3 event notification to invoke the Lambda function whenever objects change in the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy an Amazon EC2 instance with a cron job to invoke the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 165 discussion",
      "discusstion": [
        {
          "id": 743603,
          "date": "Tue 13 Dec 2022 06:00",
          "username": "michaldavid",
          "content": "bbbbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 720001,
          "date": "Wed 16 Nov 2022 22:03",
          "username": "Liongeek",
          "content": "Ans B<br>S3 Event notification has nothing to do here since the lambda will be triggered based on a daily schedule not every time an object is uploaded",
          "upvote_count": "3",
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
      "question_text": "<p>A company is releasing a new static website hosted on Amazon S3. The static website hosting feature was enabled on the bucket and content was uploaded; however, upon navigating to the site, the following error message is received:<br><br>403 Forbidden - Access Denied<br><br>What change should be made to fix this error?</p>",
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
              "choice": "<p>A. Add a bucket policy that grants everyone read access to the bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add a bucket policy that grants everyone read access to the bucket objects.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Remove the default bucket policy that denies read access to the bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure cross-origin resource sharing (CORS) on the bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 166 discussion",
      "discusstion": [
        {
          "id": 761356,
          "date": "Thu 29 Dec 2022 19:24",
          "username": "skiwili",
          "content": "Answer is B. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 751744,
          "date": "Wed 21 Dec 2022 02:23",
          "username": "MrMLB",
          "content": "A.  Add a bucket policy that grants everyone read access to the bucket.<br><br>To fix the error message \\\"403 Forbidden - Access Denied\\\" when trying to access a static website hosted on Amazon S3, you should add a bucket policy that grants everyone read access to the bucket. By default, Amazon S3 bucket policies deny all public access to the bucket and its contents. To allow users to access the static website hosted on the bucket, you need to add a bucket policy that grants read access to the bucket. You can do this by specifying a bucket policy that includes a \\\"Principal\\\" element with the value \\\"*\\\" (wildcard), which grants access to everyone, and an \\\"Action\\\" element with the value \\\"s3:GetObject\\\", which allows users to retrieve objects from the bucket.<br><br>Option B, adding a bucket policy that grants everyone read access to the bucket objects, would not be a valid solution, as this would not grant read access to the bucket itself.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 743605,
          "date": "Tue 13 Dec 2022 06:02",
          "username": "michaldavid",
          "content": "bbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 720003,
          "date": "Wed 16 Nov 2022 22:06",
          "username": "Liongeek",
          "content": "Ans B<br>Ref: https://aws.amazon.com/es/premiumsupport/knowledge-center/s3-static-website-endpoint-error/",
          "upvote_count": "4",
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
      "question_text": "<p>A company uses AWS Organizations. A SysOps administrator wants to use AWS Compute Optimizer and AWS tag policies in the management account to govern all member accounts in the billing family. The SysOps administrator navigates to the AWS Organizations console but cannot activate tag policies through the management account.<br><br>What could be the reason for this issue?</p>",
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
              "choice": "<p>A. All features have not been enabled in the organization.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Consolidated billing has not been enabled.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The member accounts do not have tags enabled for cost allocation.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The member accounts have not manually enabled trusted access for Compute Optimizer.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 167 discussion",
      "discusstion": [
        {
          "id": 743606,
          "date": "Tue 13 Dec 2022 06:04",
          "username": "michaldavid",
          "content": "aaaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 720009,
          "date": "Wed 16 Nov 2022 22:10",
          "username": "Liongeek",
          "content": "Ans: A<br>Ref: https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies-prereqs.html",
          "upvote_count": "2",
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
      "question_text": "<p>A company is storing media content in an Amazon S3 bucket and uses Amazon CloudFront to distribute the content to its users. Due to licensing terms, the company is not authorized to distribute the content in some countries. A SysOps administrator must restrict access to certain countries.<br><br>What is the MOST operationally efficient solution that meets these requirements?</p>",
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
              "choice": "<p>A. Configure the S3 bucket policy to deny the GetObject operation based on the S3:LocationConstraint condition.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a secondary origin access identity (OAI). Configure the S3 bucket policy to prevent access from unauthorized countries.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable the geo restriction feature in the CloudFront distribution to prevent access from unauthorized countries.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the application to generate signed CloudFront URLs only for IP addresses in authorized counties.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 168 discussion",
      "discusstion": [
        {
          "id": 743607,
          "date": "Tue 13 Dec 2022 06:05",
          "username": "michaldavid",
          "content": "cccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 721214,
          "date": "Fri 18 Nov 2022 11:05",
          "username": "Xelnak",
          "content": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/georestrictions.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#169",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator created an Amazon VPC with an IPv6 CIDR block, which requires access to the internet. However, access from the internet towards the VPC is prohibited. After adding and configuring the required components to the VPC, the administrator is unable to connect to any of the domains that reside on the internet.<br><br>What additional route destination rule should the administrator add to the route tables?</p>",
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
              "choice": "<p>A. Route ::/0 traffic to a NAT gateway<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Route ::/0 traffic to an internet gateway<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Route 0.0.0.0/0 traffic to an egress-only internet gateway<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Route ::/0 traffic to an egress-only internet gateway<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 169 discussion",
      "discusstion": [
        {
          "id": 761360,
          "date": "Thu 29 Dec 2022 19:28",
          "username": "skiwili",
          "content": "Dddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 743609,
          "date": "Tue 13 Dec 2022 06:08",
          "username": "michaldavid",
          "content": "ddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 741268,
          "date": "Sat 10 Dec 2022 23:07",
          "username": "tyfta6",
          "content": "Vote for D<br><br>IPV4NAT Instance/Gateway | 0.0.0.0<br>IPV6Egress-Only Internet Gateway | ::/0",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 721217,
          "date": "Fri 18 Nov 2022 11:10",
          "username": "Xelnakbeznikajtz31",
          "content": "B.  Route ::/0 traffic to an internet gateway<br>NOT D because egress-only-internet-gateway is for accessing internet from private subnetIt says that access from the internet is prohibited. So the only option correct here is D. For me it's D. <br>We don't know if we try to access from private or public net, right?",
          "upvote_count": "211",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 738329,
          "date": "Wed 07 Dec 2022 21:44",
          "username": "beznika",
          "content": "It says that access from the internet is prohibited. So the only option correct here is D. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 725252,
          "date": "Wed 23 Nov 2022 17:09",
          "username": "jtz31",
          "content": "For me it's D. <br>We don't know if we try to access from private or public net, right?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 720014,
          "date": "Wed 16 Nov 2022 22:12",
          "username": "Liongeek",
          "content": "Ans: D<br>Ref: https://docs.aws.amazon.com/vpc/latest/userguide/egress-only-internet-gateway.html",
          "upvote_count": "4",
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
      "question_text": "<p>A company hosts several write-intensive applications. These applications use a MySQL database that runs on a single Amazon EC2 instance. The company asks a SysOps administrator to implement a highly available database solution that is ideal for multi-tenant workloads.<br><br>Which solution should the SysOps administrator implement to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#170",
          "answers": [
            {
              "choice": "<p>A. Create a second EC2 instance for MySQL. Configure the second instance to be a read replica.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the database to an Amazon Aurora DB cluster. Add an Aurora Replica.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the database to an Amazon Aurora multi-master DB cluster.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the database to an Amazon RDS for MySQL DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 170 discussion",
      "discusstion": [
        {
          "id": 721226,
          "date": "Fri 18 Nov 2022 11:24",
          "username": "Xelnak",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-multi-master.html#aurora-multi-master-overview<br>Multi-master clusters are best suited for segmented workloads, such as for multitenant applications.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 720016,
          "date": "Wed 16 Nov 2022 22:15",
          "username": "Liongeek",
          "content": "Ans: C<br>Ref: https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-multi-master.html#aurora-multi-master-overview",
          "upvote_count": "2",
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
      "question_text": "<p>A company has a memory-intensive application that runs on a fleet of Amazon EC2 instances behind an Elastic Load Balancer (ELB). The instances run in an Auto Scaling group. A SysOps administrator must ensure that the application can scale based on the number of users that connect to the application.<br><br>Which solution will meet these requirements?</p>",
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
              "choice": "<p>A. Create a scaling policy that will scale the application based on the ActiveConnectionCount Amazon CloudWatch metric that is generated from the ELB. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a scaling policy that will scale the application based on the mem_used Amazon CloudWatch metric that is generated from the ELB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a scheduled scaling policy to increase the number of EC2 instances in the Auto Scaling group to support additional connections.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create and deploy a script on the ELB to expose the number of connected users as a custom Amazon CloudWatch metric. Create a scaling policy that uses the metric.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 171 discussion",
      "discusstion": [
        {
          "id": 743610,
          "date": "Tue 13 Dec 2022 06:10",
          "username": "michaldavid",
          "content": "aaaaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 728493,
          "date": "Sun 27 Nov 2022 18:50",
          "username": "marcelodba",
          "content": "Ans. A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#172",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator creates a new VPC that includes a public subnet and a private subnet. The SysOps administrator successfully launches 11 Amazon EC2 instances in the private subnet. The SysOps administrator attempts to launch one more EC2 instance in the same subnet. However, the SysOps administrator receives an error message that states that not enough free IP addresses are available.<br><br>What must the SysOps administrator do to deploy more EC2 instances?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#172",
          "answers": [
            {
              "choice": "<p>A. Edit the private subnet to change the CIDR block to /27.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Edit the private subnet to extend across a second Availability Zone.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Assign additional Elastic IP addresses to the private subnet.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new private subnet to hold the required EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 172 discussion",
      "discusstion": [
        {
          "id": 737371,
          "date": "Wed 07 Dec 2022 03:16",
          "username": "goatbernard",
          "content": "D is the answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 720017,
          "date": "Wed 16 Nov 2022 22:18",
          "username": "Liongeek",
          "content": "Ans: D<br>Ref: https://aws.amazon.com/es/premiumsupport/knowledge-center/vpc-ip-address-range/",
          "upvote_count": "2",
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
      "question_text": "<p>A company needs to automatically monitor an AWS account for potential unauthorized AWS Management Console logins from multiple geographic locations.<br><br>Which solution will meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#173",
          "answers": [
            {
              "choice": "<p>A. Configure Amazon Cognito to detect any compromised IAM credentials.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up Amazon Inspector. Scan and monitor resources for unauthorized logins.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up AWS Config. Add the iam-policy-blacklisted-check managed rule to the account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure Amazon GuardDuty to monitor the UnauthorizedAccess:IAMUser/ConsoleLoginSuccess.B finding.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 173 discussion",
      "discusstion": [
        {
          "id": 751594,
          "date": "Tue 20 Dec 2022 23:27",
          "username": "tts1234",
          "content": "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_finding-types-iam.html#unauthorizedaccess-iam-consoleloginsuccessb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 743613,
          "date": "Tue 13 Dec 2022 06:13",
          "username": "michaldavid",
          "content": "ddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 720018,
          "date": "Wed 16 Nov 2022 22:19",
          "username": "Liongeek",
          "content": "Ans: D",
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
      "question_text": "<p>A company has an Amazon RDS DB instance. The company wants to implement a caching service while maintaining high availability.<br><br>Which combination of actions will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#174",
          "answers": [
            {
              "choice": "<p>A. Add Auto Discovery to the data store.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon ElastiCache for Memcached data store.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon ElastiCache for Redis data store.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable Multi-AZ for the data store.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Enable Multi-threading for the data store.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 174 discussion",
      "discusstion": [
        {
          "id": 743615,
          "date": "Tue 13 Dec 2022 06:14",
          "username": "michaldavid",
          "content": "C and D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 740790,
          "date": "Sat 10 Dec 2022 09:53",
          "username": "marcelodba",
          "content": "multi-thread is related to performance.<br>https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html#AutoFailover.Enable",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 720019,
          "date": "Wed 16 Nov 2022 22:25",
          "username": "Liongeek",
          "content": "Ans: C&D<br>C because only Redis gives cache and HA (Memcached doesn't have HA)<br>Ref: https://aws.amazon.com/es/elasticache/redis-vs-memcached/<br>D: For HA",
          "upvote_count": "2",
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
      "question_text": "<p>A company monitors its account activity using AWS CloudTrail, and is concerned that some log files are being tampered with after the logs have been delivered to the account's Amazon S3 bucket.<br><br>Moving forward, how can the SysOps administrator confirm that the log files have not been modified after being delivered to the S3 bucket?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#175",
          "answers": [
            {
              "choice": "<p>A. Stream the CloudTrail logs to Amazon CloudWatch Logs to store logs at a secondary location.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable log file integrity validation and use digest files to verify the hash value of the log file.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Replicate the S3 log bucket across regions, and encrypt log files with S3 managed keys.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable S3 server access logging to track requests made to the log bucket for security audits.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 175 discussion",
      "discusstion": [
        {
          "id": 743616,
          "date": "Tue 13 Dec 2022 06:15",
          "username": "michaldavid",
          "content": "bbbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 720020,
          "date": "Wed 16 Nov 2022 22:26",
          "username": "Liongeek",
          "content": "Ans: B",
          "upvote_count": "4",
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
      "question_text": "<p>A SysOps administrator is reviewing AWS Trusted Advisor warnings and encounters a warning for an S3 bucket policy that has open access permissions. While discussing the issue with the bucket owner, the administrator realizes the S3 bucket is an origin for an Amazon CloudFront web distribution.<br><br>Which action should the administrator take to ensure that users access objects in Amazon S3 by using only CloudFront URLs?</p>",
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
              "choice": "<p>A. Encrypt the S3 bucket content with Server-Side Encryption with Amazon S3-Managed Keys (SSE-S3).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an origin access identity and grant it permissions to read objects in the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Assign an IAM user to the CloudFront distribution and grant the user permissions in the S3 bucket policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Assign an IAM role to the CloudFront distribution and grant the role permissions in the S3 bucket policy.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 176 discussion",
      "discusstion": [
        {
          "id": 743620,
          "date": "Tue 13 Dec 2022 06:29",
          "username": "michaldavid",
          "content": "bbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 720021,
          "date": "Wed 16 Nov 2022 22:26",
          "username": "Liongeek",
          "content": "Ans: B<br>I just had a class on that in CloudGuru :p",
          "upvote_count": "2",
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
      "question_text": "<p>A SysOps administrator is reviewing AWS Trusted Advisor recommendations. The SysOps administrator notices that all the application servers for a finance application are listed in the Low Utilization Amazon EC2 Instances check. The application runs on three instances across three Availability Zones. The SysOps administrator must reduce the cost of running the application without affecting the application's availability or design.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#177",
          "answers": [
            {
              "choice": "<p>A. Reduce the number of application servers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Apply rightsizing recommendations from AWS Cost Explorer to reduce the instance size.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Provision an Application Load Balancer in front of the instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Scale up the instance size of the application servers.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 177 discussion",
      "discusstion": [
        {
          "id": 748364,
          "date": "Sat 17 Dec 2022 21:00",
          "username": "beznika",
          "content": "B for sure. You can't reduce the number of instances.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 743621,
          "date": "Tue 13 Dec 2022 06:33",
          "username": "michaldavid",
          "content": "bbbbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 741232,
          "date": "Sat 10 Dec 2022 22:08",
          "username": "Fatochgsotiriou",
          "content": "is this B? Anyone have idea?Well... For me it's is certainly not:<br>C -> LoadBalancing will not reduce your cost in the end<br>D -> Increasing the size of your servers is pretty much obvious why is not a good idea<br><br>That leaves A or B. <br>I believe it is not A because the use case tells us to NOT mess with the application's \\\"high availability and design\\\". That means that the application should still be running on a 3-server configuration across 3 availability zones as that ensures HA and might have special design considerations in its programming.<br><br>So that leaves us with B and trusting the AWS Cost Explorer and its right sizing.",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 742294,
          "date": "Mon 12 Dec 2022 02:36",
          "username": "gsotiriou",
          "content": "Well... For me it's is certainly not:<br>C -> LoadBalancing will not reduce your cost in the end<br>D -> Increasing the size of your servers is pretty much obvious why is not a good idea<br><br>That leaves A or B. <br>I believe it is not A because the use case tells us to NOT mess with the application's \\\"high availability and design\\\". That means that the application should still be running on a 3-server configuration across 3 availability zones as that ensures HA and might have special design considerations in its programming.<br><br>So that leaves us with B and trusting the AWS Cost Explorer and its right sizing.",
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
      "question_text": "<p>A company hosts its website in the us-east-1 Region. The company is preparing to deploy its website into the eu-central-1 Region. Website visitors who are located in Europe should access the website that is hosted in eu-central-1. All other visitors access the website that is hosted in us-east-1. The company uses Amazon Route 53 to manage the website's DNS records.<br><br>Which routing policy should a SysOps administrator apply to the Route 53 record set to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#178",
          "answers": [
            {
              "choice": "<p>A. Geolocation routing policy<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Geoproximity routing policy<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Latency routing policy<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Multivalue answer routing policy<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 178 discussion",
      "discusstion": [
        {
          "id": 755622,
          "date": "Sun 25 Dec 2022 13:13",
          "username": "edu_anadat",
          "content": "A<br>Geolocation routing policy --> it's used to user location<br>Geoproximity routing policy --> it's used to resource location",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 750200,
          "date": "Mon 19 Dec 2022 20:45",
          "username": "grka25",
          "content": "I think this should be B<br><br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-geoproximity.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 743622,
          "date": "Tue 13 Dec 2022 06:33",
          "username": "michaldavid",
          "content": "aaaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 741235,
          "date": "Sat 10 Dec 2022 22:11",
          "username": "Fatoch",
          "content": "It's A",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#179",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization with a large IT department has decided to migrate to AWS. With different job functions in the IT department, it is not desirable to give all users access to all AWS resources. Currently the organization handles access via LDAP group membership.<br><br>What is the BEST method to allow access using current LDAP credentials?</p>",
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
              "choice": "<p>A. Create an AWS Directory Service Simple AD.  Replicate the on-premises LDAP directory to Simple AD. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a Lambda function to read LDAP groups and automate the creation of IAM users.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS CloudFormation to create IAM roles. Deploy Direct Connect to allow access to the on-premises LDAP server.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Federate the LDAP directory with IAM using SAML. Create different IAM roles to correspond to different LDAP groups to limit permissions.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 179 discussion",
      "discusstion": [
        {
          "id": 742010,
          "date": "Sun 11 Dec 2022 20:05",
          "username": "tyfta6",
          "content": "Vote for D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 739270,
          "date": "Thu 08 Dec 2022 17:32",
          "username": "grka25",
          "content": "Answer is D",
          "upvote_count": "1",
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
      "question_text": "<p>A SysOps administrator has created an Amazon EC2 instance using an AWS CloudFormation template in the us-east-1 Region. The administrator finds that this template has failed to create an EC2 instance in the us-west-2 Region.<br><br>What is one cause for this failure?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#180",
          "answers": [
            {
              "choice": "<p>A. Resource tags defined in the CloudFormation template are specific to the us-east-1 Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The Amazon Machine Image (AMI) ID referenced in the CloudFormation template could not be found in the us-west-2 Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. The cfn-init script did not run during resource provisioning in the us-west-2 Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The IAM user was not created in the specified Region.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 180 discussion",
      "discusstion": [
        {
          "id": 743623,
          "date": "Tue 13 Dec 2022 06:35",
          "username": "michaldavid",
          "content": "bbbbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 742018,
          "date": "Sun 11 Dec 2022 20:08",
          "username": "tyfta6",
          "content": "Vote for B<br><br>AMI is region specific. So it might not be available in another region.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 739271,
          "date": "Thu 08 Dec 2022 17:33",
          "username": "grka25",
          "content": "Answer is B",
          "upvote_count": "1",
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
      "question_text": "<p>A global gaming company is preparing to launch a new game on AWS. The game runs in multiple AWS Regions on a fleet of Amazon EC2 instances. The instances are in an Auto Scaling group behind an Application Load Balancer (ALB) in each Region. The company plans to use Amazon Route 53 for DNS services. The DNS configuration must direct users to the Region that is closest to them and must provide automated failover.<br><br>Which combination of steps should a SysOps administrator take to configure Route 53 to meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#181",
          "answers": [
            {
              "choice": "<p>A. Create Amazon CloudWatch alarms that monitor the health of the ALB in each Region. Configure Route 53 DNS failover by using a health check that monitors the alarms.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create Amazon CloudWatch alarms that monitor the health of the EC2 instances in each Region. Configure Route 53 DNS failover by using a health check that monitors the alarms.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure Route 53 DNS failover by using a health check that monitors the private IP address of an EC2 instance in each Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure Route 53 geoproximity routing. Specify the Regions that are used for the infrastructure.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Configure Route 53 simple routing. Specify the continent, country, and state or province that are used for the infrastructure.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 181 discussion",
      "discusstion": [
        {
          "id": 743625,
          "date": "Tue 13 Dec 2022 06:39",
          "username": "michaldavid",
          "content": "A and D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        }
      ]
    },
    {
      "question_id": "#182",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator is investigating a company's web application for performance problems. The application runs on Amazon EC2 instances that are in an Auto Scaling group. The application receives large traffic increases at random times throughout the day. During periods of rapid traffic increases, the Auto Scaling group is not adding capacity fast enough. As a result, users are experiencing poor performance.<br><br>The company wants to minimize costs without adversely affecting the user experience when web traffic surges quickly. The company needs a solution that adds more capacity to the Auto Scaling group for larger traffic increases than for smaller traffic increases.<br><br>How should the SysOps administrator configure the Auto Scaling group to meet these requirements?</p>",
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
              "choice": "<p>A. Create a simple scaling policy with settings to make larger adjustments in capacity when the system is under heavy load.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a step scaling policy with settings to make larger adjustments in capacity when the system is under heavy load.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a target tracking scaling policy with settings to make larger adjustments in capacity when the system is under heavy load.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon EC2 Auto Scaling lifecycle hooks. Adjust the Auto Scaling group's maximum number of instances after every scaling event.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 182 discussion",
      "discusstion": [
        {
          "id": 767197,
          "date": "Fri 06 Jan 2023 03:16",
          "username": "dangji",
          "content": "C AWS recommend use \\\"target tracking scaling\\\".<br>\\\"We strongly recommend that you use a target tracking scaling policy to scale on a metric like average CPU utilization or the RequestCountPerTarget metric from the Application Load Balancer. \\\"<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 752887,
          "date": "Thu 22 Dec 2022 01:09",
          "username": "tts1234",
          "content": "https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 751429,
          "date": "Tue 20 Dec 2022 21:16",
          "username": "zolthar_z",
          "content": "Ans is C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 748379,
          "date": "Sat 17 Dec 2022 21:10",
          "username": "beznika",
          "content": "B 100%. https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html#SimpleScaling",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 743626,
          "date": "Tue 13 Dec 2022 06:41",
          "username": "michaldavid",
          "content": "B for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 743381,
          "date": "Mon 12 Dec 2022 23:28",
          "username": "Pepepep",
          "content": "I will go with C.  From Amazon documentation: \\\"We strongly recommend that you use a target tracking scaling policy to scale on a metric like average CPU utilization or the RequestCountPerTarget metric from the Application Load Balancer. Metrics that decrease when capacity increases and increase when capacity decreases can be used to proportionally scale out or in the number of instances using target tracking. This helps ensure that Amazon EC2 Auto Scaling follows the demand curve for your applications closely.\\\"<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 742026,
          "date": "Sun 11 Dec 2022 20:23",
          "username": "tyfta6",
          "content": "I vote for D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 741248,
          "date": "Sat 10 Dec 2022 22:24",
          "username": "Fatoch",
          "content": "for me D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 739960,
          "date": "Fri 09 Dec 2022 10:33",
          "username": "beznika",
          "content": "I think it's B https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 739419,
          "date": "Thu 08 Dec 2022 21:02",
          "username": "grka25",
          "content": "I will go with C",
          "upvote_count": "2",
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
      "question_text": "<p>A company has a compliance requirement that no security groups can allow SSH ports to be open to all IP addresses. A SysOps administrator must implement a solution that will notify the company's SysOps team when a security group rule violates this requirement. The solution also must remediate the security group rule automatically.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#183",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that invokes an AWS Lambda function when a security group changes. Configure the Lambda function to evaluate the security group for compliance, remove all inbound security group rules on all ports, and notify the SysOps team if the security group is noncompliant.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS CloudTrail metric filter for security group changes. Create an Amazon CloudWatch alarm to notify the SysOps team through an Amazon Simple Notification Service (Amazon SNS) topic when the metric is greater than 0. Subscribe an AWS Lambda function to the SNS topic to remediate the security group rule by removing the rule.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Activate the AWS Config restricted-ssh managed rule. Add automatic remediation to the AWS Config rule by using the AWS Systems Manager Automation AWS-DisablePublicAccessForSecurityGroup runbook. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to notify the SysOps team when the rule is noncompliant.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS CloudTrail metric filter for security group changes. Create an Amazon CloudWatch alarm for when the metric is greater than 0. Add an AWS Systems Manager action to the CloudWatch alarm to suspend the security group by using the Systems Manager Automation AWS-DisablePublicAccessForSecurityGroup runbook when the alarm is in ALARM state. Add an Amazon Simple Notification Service (Amazon SNS) topic as a second target to notify the SysOps team.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 183 discussion",
      "discusstion": [
        {
          "id": 752977,
          "date": "Thu 22 Dec 2022 06:20",
          "username": "tts1234",
          "content": "https://docs.aws.amazon.com/config/latest/developerguide/restricted-ssh.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 743628,
          "date": "Tue 13 Dec 2022 06:44",
          "username": "michaldavid",
          "content": "I go for C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 742036,
          "date": "Sun 11 Dec 2022 20:38",
          "username": "tyfta6",
          "content": "Vote for C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#184",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that runs only on Amazon EC2 Spot Instances. The instances run in an Amazon EC2 Auto Scaling group with scheduled scaling actions. However, the capacity does not always increase at the scheduled times, and instances terminate many times a day. A SysOps administrator must ensure that the instances launch on time and have fewer interruptions.<br><br>Which action will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#184",
          "answers": [
            {
              "choice": "<p>A. Specify the capacity-optimized allocation strategy for Spot Instances. Add more instance types to the Auto Scaling group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Specify the capacity-optimized allocation strategy for Spot Instances. Increase the size of the instances in the Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Specify the lowest-price allocation strategy for Spot Instances. Add more instance types to the Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Specify the lowest-price allocation strategy for Spot Instances. Increase the size of the instances in the Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 184 discussion",
      "discusstion": [
        {
          "id": 743629,
          "date": "Tue 13 Dec 2022 06:46",
          "username": "michaldavid",
          "content": "aaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 721365,
          "date": "Fri 18 Nov 2022 16:34",
          "username": "Xelnak",
          "content": "in August 2019 AWS launched the capacity-optimized allocation strategy for Spot Instances, which helps customers tap into the deepest Spot Instance pools by analyzing capacity metrics. Since then, customers have seen a significantly lower interruption rate with capacity-optimized strategy<br>https://aws.amazon.com/blogs/compute/introducing-price-capacity-optimized-allocation-strategy-for-ec2-spot-instances/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#185",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company plans to deploy a database on an Amazon Aurora MySQL DB cluster. The database will store data for a demonstration environment. The data must be reset on a daily basis.<br><br>What is the MOST operationally efficient solution that meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#185",
          "answers": [
            {
              "choice": "<p>A. Create a manual snapshot of the DB cluster after the data has been populated. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function on a daily basis. Configure the function to restore the snapshot and then delete the previous DB cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable the Backtrack feature during the creation of the DB cluster. Specify a target backtrack window of 48 hours. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function on a daily basis. Configure the function to perform a backtrack operation.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Export a manual snapshot of the DB cluster to an Amazon S3 bucket after the data has been populated. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function on a daily basis. Configure the function to restore the snapshot from Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set the DB cluster backup retention period to 2 days. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function on a daily basis. Configure the function to restore the DB cluster to a point in time and then delete the previous DB cluster.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 185 discussion",
      "discusstion": [
        {
          "id": 743630,
          "date": "Tue 13 Dec 2022 06:47",
          "username": "michaldavid",
          "content": "bbbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 742052,
          "date": "Sun 11 Dec 2022 21:00",
          "username": "tyfta6",
          "content": "Vote for B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 720031,
          "date": "Wed 16 Nov 2022 22:42",
          "username": "Liongeek",
          "content": "Ans: B<br>Ref: https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html",
          "upvote_count": "1",
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
      "question_text": "<p>A SysOps administrator is setting up an automated process to recover an Amazon EC2 instance in the event of an underlying hardware failure. The recovered instance must have the same private IP address and the same Elastic IP address that the original instance had. The SysOps team must receive an email notification when the recovery process is initiated.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#186",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon CloudWatch alarm for the EC2 instance, and specify the StatusCheckFailed_Instance metric. Add an EC2 action to the alarm to recover the instance. Add an alarm notification to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the SysOps team email address to the SNS topic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon CloudWatch alarm for the EC2 instance, and specify the StatusCheckFailed_System metric. Add an EC2 action to the alarm to recover the instance. Add an alarm notification to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the SysOps team email address to the SNS topic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Auto Scaling group across three different subnets in the same Availability Zone with a minimum, maximum, and desired size of 1. Configure the Auto Scaling group to use a launch template that specifies the private IP address and the Elastic IP address. Add an activity notification for the Auto Scaling group to send an email message to the SysOps team through Amazon Simple Email Service (Amazon SES).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Auto Scaling group across three Availability Zones with a minimum, maximum, and desired size of 1. Configure the Auto Scaling group to use a launch template that specifies the private IP address and the Elastic IP address. Add an activity notification for the Auto Scaling group to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the SysOps team email address to the SNS topic.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 186 discussion",
      "discusstion": [
        {
          "id": 743633,
          "date": "Tue 13 Dec 2022 06:55",
          "username": "michaldavid",
          "content": "bbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 732272,
          "date": "Thu 01 Dec 2022 06:12",
          "username": "tyfta6",
          "content": "Answer is B<br><br>You can create an Amazon CloudWatch alarm that monitors an Amazon EC2 instance and automatically recovers the instance if it becomes impaired due to an underlying hardware failure or a problem that requires AWS involvement to repair. Terminated instances cannot be recovered.<br><br>A recovered instance is identical to the original instance, including the instance ID, private IP addresses, Elastic IP addresses, and all instance metadata. If the impaired instance has a public IPv4 address, the instance retains the public IPv4 address after recovery. If the impaired instance is in a placement group, the recovered instance runs in the placement group.<br><br>When the StatusCheckFailed_System alarm is triggered, and the recover action is initiated, you will be notified by the Amazon SNS topic that you selected when you created the alarm and associated the recover action.<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 721372,
          "date": "Fri 18 Nov 2022 16:44",
          "username": "Xelnak",
          "content": "To automatically recover an instance when a system status check failure occurs, you can use the default configuration of the instance or create an Amazon CloudWatch alarm. If an instance becomes unreachable because of an underlying hardware failure or a problem that requires AWS involvement to repair, the instance is automatically recovered.<br><br>A recovered instance is identical to the original instance, including the instance ID, private IP addresses, Elastic IP addresses, and all instance metadata.<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#187",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a public website that recently experienced problems. Some links led to missing webpages, and other links rendered incorrect webpages. The application infrastructure was running properly, and all the provisioned resources were healthy. Application logs and dashboards did not show any errors, and no monitoring alarms were raised. Systems administrators were not aware of any problems until end users reported the issues.<br><br>The company needs to proactively monitor the website for such issues in the future and must implement a solution as soon as possible.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#187",
          "answers": [
            {
              "choice": "<p>A. Rewrite the application to surface a custom error to the application log when issues occur. Automatically parse logs for errors. Create an Amazon CloudWatch alarm to provide alerts when issues are detected.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Lambda function to test the website. Configure the Lambda function to emit an Amazon CloudWatch custom metric when errors are detected. Configure a CloudWatch alarm to provide alerts when issues are detected.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon CloudWatch Synthetics canary. Use the CloudWatch Synthetics Recorder plugin to generate the script for the canary run. Configure the canary in line with requirements. Create an alarm to provide alerts when issues are detected.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. In the Amazon CloudWatch console, turn on Application Insights. Create a CloudWatch alarm to provide alerts when an issue is detected.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 187 discussion",
      "discusstion": [
        {
          "id": 767207,
          "date": "Fri 06 Jan 2023 03:27",
          "username": "dangji",
          "content": "Canaries follow the same routes and perform the same actions as a customer<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 743635,
          "date": "Tue 13 Dec 2022 06:56",
          "username": "michaldavid",
          "content": "cccccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 727040,
          "date": "Fri 25 Nov 2022 20:08",
          "username": "BugsBunny9998666",
          "content": "C is possible, correct me if Im wrong: Canaries are scripts written in Node.js or Python.<br>They create Lambda functions in your account that use Node.js or Python as a framework. Canaries work over both HTTP and HTTPS protocols. which makes it possible for you to continually verify your customer experience even when you don't have any customer traffic on your applications. By using canaries, you can discover issues before your customers do. This is why B is good but as C is automation of what B says making it a better option",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 724996,
          "date": "Wed 23 Nov 2022 09:28",
          "username": "BugsBunny9998666BugsBunny9998666",
          "content": "C is possible: Canaries are scripts written in Node.js or Python. They create Lambda functions in your account that use Node.js or Python as a framework. Canaries work over both HTTP and HTTPS protocols.which makes it possible for you to continually verify your customer experience even when you don't have any customer traffic on your applications. By using canaries, you can discover issues before your customers do.https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.html",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 724998,
          "date": "Wed 23 Nov 2022 09:29",
          "username": "BugsBunny9998666",
          "content": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 721860,
          "date": "Sat 19 Nov 2022 10:01",
          "username": "Raynorzolthar_z",
          "content": "This is B!C is the simplest way to test web sites",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 751440,
          "date": "Tue 20 Dec 2022 21:29",
          "username": "zolthar_z",
          "content": "C is the simplest way to test web sites",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#188",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator is responsible for a company's security groups. The company wants to maintain a documented trail of any changes that are made to the security groups. The SysOps administrator must receive notification whenever the security groups change.<br><br>Which solution will meet these requirements?</p>",
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
              "choice": "<p>A. Set up Amazon Detective to record security group changes. Specify an Amazon CloudWatch Logs log group to store configuration history logs. Create an Amazon Simple Queue Service (Amazon SQS) queue for notifications about configuration changes. Subscribe the SysOps administrator's email address to the SQS queue.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up AWS Systems Manager Change Manager to record security group changes. Specify an Amazon CloudWatch Logs log group to store configuration history logs. Create an Amazon Simple Notification Service (Amazon SNS) topic for notifications about configuration changes. Subscribe the SysOps administrator's email address to the SNS topic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up AWS Config to record security group changes. Specify an Amazon S3 bucket as the location for configuration snapshots and history files. Create an Amazon Simple Notification Service (Amazon SNS) topic for notifications about configuration changes. Subscribe the SysOps administrator's email address to the SNS topic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up Amazon Detective to record security group changes. Specify an Amazon S3 bucket as the location for configuration snapshots and history files. Create an Amazon Simple Notification Service (Amazon SNS) topic for notifications about configuration changes. Subscribe the SysOps administrator's email address to the SNS topic.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 188 discussion",
      "discusstion": [
        {
          "id": 721861,
          "date": "Sat 19 Nov 2022 10:03",
          "username": "RaynorRaynor",
          "content": "maintain a documented trail of any changesconfig + S3<br>NotificationSNSmaintain a documented trail of any changesconfig + S3,<br>AlertSNS",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 721862,
          "date": "Sat 19 Nov 2022 10:05",
          "username": "Raynor",
          "content": "maintain a documented trail of any changesconfig + S3,<br>AlertSNS",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#189",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company has built a web application that uses an Amazon Aurora DB cluster. The DB cluster includes memory optimized instance types with both a writer node and a reader node. Traffic volume changes throughout the day. During sudden traffic surges, Amazon CloudWatch metrics for the DB cluster indicate high RAM consumption and an increase in select latency.<br><br>A SysOps administrator must implement a configuration change to improve the performance of the DB cluster. The change must minimize downtime and must not result in the loss of data.<br><br>Which change will meet these requirements?</p>",
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
              "choice": "<p>A. Add an Aurora Replica to the DB cluster.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Modify the DB cluster to convert the DB cluster into a multi-master DB cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Take a snapshot of the DB cluster. From that snapshot, create a new DB cluster that has larger memory optimized instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Increase the disk storage capacity of the DB cluster to double the existing disk capacity.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 189 discussion",
      "discusstion": [
        {
          "id": 758900,
          "date": "Tue 27 Dec 2022 19:13",
          "username": "Mila28",
          "content": "The key word is \\\"dowtime\\\", so I vote for A.  B is out because this changes needs a dowtime for business",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 751446,
          "date": "Tue 20 Dec 2022 21:39",
          "username": "zolthar_z",
          "content": "Memory Issues and select latency are more related with read process",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 742098,
          "date": "Sun 11 Dec 2022 22:05",
          "username": "tyfta6",
          "content": "Vote for B<br><br>In a multi-master cluster, all DB instances have read/write capability. Multi-master clusters have different availability characteristics, support for database features, and procedures for monitoring and troubleshooting than single-master clusters.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 741600,
          "date": "Sun 11 Dec 2022 11:42",
          "username": "marcelodba",
          "content": "not mentioning that is writing intensive workload",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#190",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a simple web application that runs on a set of Amazon EC2 instances behind an Elastic Load Balancer in the eu-west-2 Region. Amazon Route 53 holds a DNS record for the application with a simple routing policy. Users from all over the world access the application through their web browsers.<br><br>The company needs to create additional copies of the application in the us-east-1 Region and in the ap-south-1 Region. The company must direct users to the Region that provides the fastest response times when the users load the application.<br><br>What should a SysOps administrator do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#190",
          "answers": [
            {
              "choice": "<p>A. In each new Region, create a new Elastic Load Balancer and a new set of EC2 instances to run a copy of the application. Transition to a geolocation routing policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. In each new Region, create a copy of the application on new EC2 instances. Add these new EC2 instances to the Elastic Load Balancer in eu-west-2. Transition to a latency routing policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. In each new Region, create a copy of the application on new EC2 instances. Add these new EC2 instances to the Elastic Load Balancer in eu-west-2. Transition to a multivalue routing policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. In each new Region, create a new Elastic Load Balancer and a new set of EC2 instances to run a copy of the application. Transition to a latency routing policy.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 190 discussion",
      "discusstion": [
        {
          "id": 742115,
          "date": "Sun 11 Dec 2022 22:28",
          "username": "tyfta6",
          "content": "Does Elastic load balancer work across regions?<br>Amazon has made the creation and management of load balancers in the cloud a lot simpler when they created elastic load balancers. But elastic load balancers have one fatal flaw. They exist within a single AWS region and if that region is having an outage, then your whole application goes down.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 742114,
          "date": "Sun 11 Dec 2022 22:26",
          "username": "tyfta6",
          "content": "Vote for D.  Anybody look into B choice?",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 739973,
          "date": "Fri 09 Dec 2022 10:58",
          "username": "beznika",
          "content": "Correct is D.  The fastest response time so latency based routing has to be used.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 739474,
          "date": "Thu 08 Dec 2022 22:09",
          "username": "grka25grka25",
          "content": "Answer is ACorrection, D",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 748261,
          "date": "Sat 17 Dec 2022 19:01",
          "username": "grka25",
          "content": "Correction, D",
          "upvote_count": "1",
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
      "question_text": "<p>A company creates a new member account by using AWS Organizations. A SysOps administrator needs to add AWS Business Support to the new account.<br><br>Which combination of steps must the SysOps administrator take to meet this requirement? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#191",
          "answers": [
            {
              "choice": "<p>A. Sign in to the new account by using IAM credentials. Change the support plan.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Sign in to the new account by using root user credentials. Change the support plan.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the AWS Support API to change the support plan.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Reset the password of the account root user.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an IAM user that has administrator privileges in the new account.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 191 discussion",
      "discusstion": [
        {
          "id": 753678,
          "date": "Thu 22 Dec 2022 23:03",
          "username": "tts1234",
          "content": "B and E seems right.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 748388,
          "date": "Sat 17 Dec 2022 21:24",
          "username": "beznika",
          "content": "My choice B&E.  You have to sign it with a root to change it. And then you should create a user with admin permissions as it is not a good practice to use root access for any administrative tasks.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#192",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator creates two VPCs, VPC1 and VPC2, in a company's AWS account The SysOps administrator deploys a Linux Amazon EC2 instance in VPC1 and deploys an Amazon RDS for MySQL DB instance in VPC2. The DB instance is deployed in a private subnet. An application that runs on the EC2 instance needs to connect to the database.<br><br>What should the SysOps administrator do to give the EC2 instance the ability to connect to the database?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#192",
          "answers": [
            {
              "choice": "<p>A. Enter the DB instance connection string into the VPC1 route table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure VPC peering between the two VPCs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Add the same IPv4 CIDR range for both VPCs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Connect to the DB instance by using the DB instance's public IP address.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 192 discussion",
      "discusstion": [
        {
          "id": 743648,
          "date": "Tue 13 Dec 2022 07:13",
          "username": "michaldavidbamishr",
          "content": "bbbbbbbhi michal when you are giving the exam?",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 744429,
          "date": "Tue 13 Dec 2022 21:01",
          "username": "bamishr",
          "content": "hi michal when you are giving the exam?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 742032,
          "date": "Sun 11 Dec 2022 20:32",
          "username": "Fatoch",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#193",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses an Amazon S3 bucket to store data files. The S3 bucket contains hundreds of objects. The company needs to replace a tag on all the objects in the S3 bucket with another tag.<br><br>What is the MOST operationally efficient way to meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#193",
          "answers": [
            {
              "choice": "<p>A. Use S3 Batch Operations. Specify the operation to replace all object tags.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the AWS CLI to get the tags for each object. Save the tags in a list. Use S3 Batch Operations. Specify the operation to delete all object tags. Use the AWS CLI and the list to retag the objects.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the AWS CLI to get the tags for each object. Save the tags in a list. Use the AWS CLI and the list to remove the object tags. Use the AWS CLI and the list to retag the objects.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the AWS CLI to copy the objects to another S3 bucket. Add the new tag to the copied objects. Delete the original objects.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 193 discussion",
      "discusstion": [
        {
          "id": 720036,
          "date": "Wed 16 Nov 2022 22:57",
          "username": "Liongeek",
          "content": "Ans: A<br>Ref. https://aws.amazon.com/es/blogs/storage/adding-and-removing-object-tags-with-s3-batch-operations/",
          "upvote_count": "6",
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
      "question_text": "<p>A company needs to take an inventory of applications that are running on multiple Amazon EC2 instances. The company has configured users and roles with the appropriate permissions for AWS Systems Manager. An updated version of Systems Manager Agent has been installed and is running on every instance. While configuring an inventory collection, a SysOps administrator discovers that not all the instances in a single subnet are managed by Systems Manager.<br><br>What must the SysOps administrator do to fix this issue?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#194",
          "answers": [
            {
              "choice": "<p>A. Ensure that all the EC2 instances have the correct tags for Systems Manager access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure AWS Identity and Access Management Access Analyzer to determine and automatically remediate the issue.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Ensure that all the EC2 instances have an instance profile with Systems Manager access.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure Systems Manager to use an interface VPC endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 194 discussion",
      "discusstion": [
        {
          "id": 743650,
          "date": "Tue 13 Dec 2022 07:19",
          "username": "michaldavid",
          "content": "ccccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 742169,
          "date": "Sun 11 Dec 2022 23:32",
          "username": "tyfta6",
          "content": "Vote for C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 738997,
          "date": "Thu 08 Dec 2022 13:07",
          "username": "BugsBunny9998666",
          "content": "C makes most cense",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 735894,
          "date": "Mon 05 Dec 2022 12:49",
          "username": "CloudHandsOn",
          "content": "I'll go with C as well",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 720039,
          "date": "Wed 16 Nov 2022 23:04",
          "username": "Liongeek",
          "content": "It looks like C for me. I don't think it's D.  In order to be D, all instances in that subnet shouldn't be in SSM but question says that SOME INSTANCES IN THE SAME SUBNET...",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#195",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company stores sensitive data in an Amazon S3 bucket. The company must log all access attempts to the S3 bucket. The company's risk team must receive immediate notification about any delete events.<br><br>Which solution will meet these requirements?</p>",
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
              "choice": "<p>A. Enable S3 server access logging for audit logs. Set up an Amazon Simple Notification Service (Amazon SNS) notification for the S3 bucket. Select DeleteObject for the event type for the alert system.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable S3 server access logging for audit logs. Launch an Amazon EC2 instance for the alert system. Run a cron job on the EC2 instance to download the access logs each day and to scan for a DeleteObject event.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon CloudWatch Logs for audit logs. Use Amazon CloudWatch alarms with an Amazon Simple Notification Service (Amazon SNS) notification for the alert system.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon CloudWatch Logs for audit logs. Launch an Amazon EC2 instance for the alert system. Run a cron job on the EC2 instance each day to compare the list of the items with the list from the previous day. Configure the cron job to send a notification if an item is missing.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 195 discussion",
      "discusstion": [
        {
          "id": 752817,
          "date": "Wed 21 Dec 2022 23:23",
          "username": "MrMLB",
          "content": "A<br><br>To meet the requirements of logging all access attempts to the S3 bucket and receiving immediate notification about any delete events, the company can enable S3 server access logging and set up an Amazon Simple Notification Service (Amazon SNS) notification for the S3 bucket. The S3 server access logs will record all access attempts to the bucket, including delete events, and the SNS notification can be configured to send an alert when a DeleteObject event occurs.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 748394,
          "date": "Sat 17 Dec 2022 21:29",
          "username": "beznika",
          "content": "A looks good.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 743654,
          "date": "Tue 13 Dec 2022 07:22",
          "username": "michaldavid",
          "content": "aaaaaaa",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 742044,
          "date": "Sun 11 Dec 2022 20:45",
          "username": "Fatoch",
          "content": "is it not C?",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#196",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator receives an alert from Amazon GuardDuty about suspicious network activity on an Amazon EC2 instance. The GuardDuty finding lists a new external IP address as a traffic destination. The SysOps administrator does not recognize the external IP address. The SysOps administrator must block traffic to the external IP address that GuardDuty identified.<br><br>Which solution will meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#196",
          "answers": [
            {
              "choice": "<p>A. Create a new security group to block traffic to the external IP address. Assign the new security group to the EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use VPC flow logs with Amazon Athena to block traffic to the external IP address.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a network ACL. Add an outbound deny rule for traffic to the external IP address.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new security group to block traffic to the external IP address. Assign the new security group to the entire VPC. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 196 discussion",
      "discusstion": [
        {
          "id": 751457,
          "date": "Tue 20 Dec 2022 21:48",
          "username": "zolthar_z",
          "content": "Answer is C, ACL is the only way to block outbound traffic",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 748952,
          "date": "Sun 18 Dec 2022 14:29",
          "username": "beznika",
          "content": "Security groups are out because you allow traffic using security groups not block. VPC flow logs with Athena? How can that help? And the ACL outbound rule to block the IP? ACL makes the most sense because if the IP is the destination the outbound rule to block will do. However it would make more sense to modify existing ACL because a subnet can be associated with only one ACL. So I am going to say C is the correct one.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#197",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's reporting job that used to run in 15 minutes is now taking an hour to run. An application generates the reports. The application runs on Amazon EC2 instances and extracts data from an Amazon RDS for MySQL database.<br><br>A SysOps administrator checks the Amazon CloudWatch dashboard for the RDS instance and notices that the Read IOPS metrics are high, even when the reports are not running. The SysOps administrator needs to improve the performance and the availability of the RDS instance.<br><br>Which solution will meet these requirements?</p>",
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
              "choice": "<p>A. Configure an Amazon ElastiCache cluster in front of the RDS instance. Update the reporting job to query the ElastiCache cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an RDS read replica. Update the reporting job to query the reader endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon CloudFront distribution. Set the RDS instance as the origin. Update the reporting job to query the CloudFront distribution.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Increase the size of the RDS instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 197 discussion",
      "discusstion": [
        {
          "id": 751460,
          "date": "Tue 20 Dec 2022 21:49",
          "username": "zolthar_z",
          "content": "If you have read issues read-replica is always the solution",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 748397,
          "date": "Sat 17 Dec 2022 21:33",
          "username": "beznika",
          "content": "My choice B",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#198",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's SysOps administrator regularly checks the AWS Personal Health Dashboard in each of the company's accounts. The accounts are part of an organization in AWS Organizations. The company recently added 10 more accounts to the organization. The SysOps administrator must consolidate the alerts from each account's Personal Health Dashboard.<br><br>Which solution will meet this requirement with the LEAST amount of effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#198",
          "answers": [
            {
              "choice": "<p>A. Enable organizational view in AWS Health.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the Personal Health Dashboard in each account to forward events to a central AWS CloudTrail log.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Lambda function to query the AWS Health API and to write all events to an Amazon DynamoDB table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the AWS Health API to write events to an Amazon DynamoDB table.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 198 discussion",
      "discusstion": [
        {
          "id": 752469,
          "date": "Wed 21 Dec 2022 16:08",
          "username": "zolthar_z",
          "content": "The complete answer is: Go to Admin account and add the health dashboards from other accounts",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#199",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an application on Amazon EC2 instances. The EC2 instances are in an Auto Scaling group and run behind an Application Load Balancer (ALB). The application experiences errors when total requests exceed 100 requests per second. A SysOps administrator must collect information about total requests for a 2-week period to determine when requests exceeded this threshold.<br><br>What should the SysOps administrator do to collect this data?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#199",
          "answers": [
            {
              "choice": "<p>A. Use the ALB's RequestCount metric. Configure a time range of 2 weeks and a period of 1 minute. Examine the chart to determine peak traffic times and volumes.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon CloudWatch metric math to generate a sum of request counts for all the EC2 instances over a 2-week period. Sort by a 1-minute interval.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create Amazon CloudWatch custom metrics on the EC2 launch configuration templates to create aggregated request metrics across all the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon EventBridge (Amazon CloudWatch Events) rule. Configure an EC2 event matching pattern that creates a metric that is based on EC2 requests. Display the data in a graph.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 199 discussion",
      "discusstion": [
        {
          "id": 752474,
          "date": "Wed 21 Dec 2022 16:10",
          "username": "zolthar_z",
          "content": "Answer is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#200",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently migrated its application to a VPC on AWS. An AWS Site-to-Site VPN connection connects the company's on-premises network to the VPC.  The application retrieves customer data from another system that resides on premises. The application uses an on-premises DNS server to resolve domain records. After the migration, the application is not able to connect to the customer data because of name resolution errors.<br><br>Which solution will give the application the ability to resolve the internal domain names?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#200",
          "answers": [
            {
              "choice": "<p>A. Launch EC2 instances in the VPC.  On the EC2 instances, deploy a custom DNS forwarder that forwards all DNS requests to the on-premises DNS server. Create an Amazon Route 53 private hosted zone that uses the EC2 instances for name servers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon Route 53 Resolver outbound endpoint. Configure the outbound endpoint to forward DNS queries against the on-premises domain to the on-premises DNS server.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up two AWS Direct Connect connections between the AWS environment and the on-premises network. Set up a link aggregation group (LAG) that includes the two connections. Change the VPC resolver address to point to the on-premises DNS server.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon Route 53 public hosted zone for the on-premises domain. Configure the network ACLs to forward DNS requests against the on-premises domain to the Route 53 public hosted zone.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 200 discussion",
      "discusstion": [
        {
          "id": 767350,
          "date": "Fri 06 Jan 2023 07:34",
          "username": "dangji",
          "content": "To forward DNS queries that originate on Amazon EC2 instances in one or more VPCs to your network<br>https://docs.aws.amazon.com/zh_tw/Route53/latest/DeveloperGuide/resolver-forwarding-outbound-queries.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 743708,
          "date": "Tue 13 Dec 2022 08:32",
          "username": "michaldavid",
          "content": "bbbbbb",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    }
  ]
}
