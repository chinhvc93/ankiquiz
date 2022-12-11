var SOA_C02_Exam_Extra1 = {
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#100",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a policy that requires all Amazon EC2 instances to have a specific set of tags. If an EC2 instance does not have the required tags, the noncompliant instance should be terminated.<br>What is the MOST operationally efficient solution that meets these requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#100",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to send all EC2 instance state changes to an AWS Lambda function to determine if each instance is compliant. Terminate any noncompliant instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an IAM policy that enforces all EC2 instance tag requirements. If the required tags are not in place for an instance, the policy will terminate noncompliant instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Lambda function to determine if each EC2 instance is compliant and terminate an instance if it is noncompliant. Schedule the Lambda function to invoke every 5 minutes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Config rule to check if the required tags are present. If an EC2 instance is noncompliant, invoke an AWS Systems Manager Automation document to terminate the instance.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 720815,
          "date": "Thu 17 Nov 2022 20:56",
          "username": "Liongeek",
          "content": "Ans: D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 696896,
          "date": "Mon 17 Oct 2022 06:52",
          "username": "Surferbolt",
          "content": "D.  Use Config.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 662608,
          "date": "Wed 07 Sep 2022 16:43",
          "username": "kati2k22cz",
          "content": "its D. <br>https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation.html",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#101",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator wants to manage a web server application with AWS Elastic Beanstalk. The Elastic Beanstalk service must maintain full capacity for new deployments at all times.<br>Which deployment policies satisfy this requirement? (Choose two.)</p>",
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
      "topic_name": "",
      "discusstion": [
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
          "upvote_count": "1",
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
      "question_text": "<p>A company has an Auto Scaling group of Amazon EC2 instances that scale based on average CPU utilization. The Auto Scaling group events log indicates an<br>InsufficientInstanceCapacity error.<br>Which actions should a SysOps administrator take to remediate this issue? (Choose two.)</p>",
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
      "topic_name": "",
      "discusstion": [
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
      "question_text": "<p>A SysOps administrator needs to control access to groups of Amazon EC2 instances using AWS Systems Manager Session Manager. Specific tags on the EC2 instances have already been added.<br>Which additional actions should the administrator take to control access? (Choose two.)</p>",
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
      "topic_name": "",
      "discusstion": [
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
      "question_text": "<p>A company has an AWS Lambda function in Account A.  The Lambda function needs to read the objects in an Amazon S3 bucket in Account B.  A SysOps administrator must create corresponding IAM roles in both accounts.<br>Which solution will meet these requirements?</p>",
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
      "topic_name": "",
      "discusstion": [
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
      "question_id": "#106",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using Amazon CloudFront to serve static content for its web application to its users. The CloudFront distribution uses an existing on-premises website as a custom origin.<br>The company requires the use of TLS between CloudFront and the origin server. This configuration has worked as expected for several months. However, users are now experiencing HTTP 502 (Bad Gateway) errors when they view webpages that include content from the CloudFront distribution.<br>What should a SysOps administrator do to resolve this problem?</p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 659383,
          "date": "Sun 04 Sep 2022 18:18",
          "username": "princajen",
          "content": "A! is correct<br><br>HTTP 502 errors from CloudFront can occur because of the following reasons:<br><br>There's an SSL negotiation failure because the origin is using SSL/TLS protocols and ciphers that aren't supported by CloudFront.<br>There's an SSL negotiation failure because the SSL certificate on the origin is expired or invalid, or because the certificate chain is invalid.<br>There's a host header mismatch in the SSL negotiation between your CloudFront distribution and the custom origin.<br>The custom origin isn't responding on the ports specified in the origin settings of the CloudFront distribution.<br>The custom origin is ending the connection to CloudFront too quickly.<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/resolve-cloudfront-connection-error/",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#109",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to reduce costs for jobs that can be completed at any time. The jobs currently run by using multiple Amazon EC2 On-Demand Instances and the jobs take slightly less than 2 hours to complete. If a job falls for any reason it must be restarted from the beginning.<br>Which solution will meet these requirements MOST cost-effectively?</p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 660467,
          "date": "Mon 05 Sep 2022 20:52",
          "username": "kati2k22czSurferbolt",
          "content": "Its C. <br>The name of Resource is Spot Block<br>https://aws.amazon.com/blogs/aws/new-ec2-spot-blocks-for-defined-duration-workloads/Update July 2021 – Spot Instances with a defined duration (also known as Spot blocks) are no longer available to new customers as of July 1, 2021. For customers that have previously used the feature, we will continue to support Spot Instances with a defined duration until December 31, 2022. If your workload is interruption tolerant, we recommend that you use Spot Instances without setting a defined duration. If your workload is not interruption tolerant we recommend that you use On-Demand instances for the required duration of your workload.",
          "upvote_count": "51",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 697268,
          "date": "Mon 17 Oct 2022 12:04",
          "username": "Surferbolt",
          "content": "Update July 2021 – Spot Instances with a defined duration (also known as Spot blocks) are no longer available to new customers as of July 1, 2021. For customers that have previously used the feature, we will continue to support Spot Instances with a defined duration until December 31, 2022. If your workload is interruption tolerant, we recommend that you use Spot Instances without setting a defined duration. If your workload is not interruption tolerant we recommend that you use On-Demand instances for the required duration of your workload.",
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
      "question_text": "<p>An environment consists of 100 Amazon EC2 Windows instances. The Amazon CloudWatch agent is deployed and running on all EC2 Instances with a baseline configuration file to capture log files. There is a new requirement to capture the DHCP log files that exist on 50 of the instances.<br>What is the MOST operationally efficient way to meet this new requirement?</p>",
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
      "topic_name": "",
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
          "content": "I go with A.  <br><br>D is valid, but not the MOST operationally efficient.",
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
      "question_text": "<p>A company has 10 Amazon EC2 instances in its production account. A SysOps administrator must ensure that email notifications are sent to administrators each time there is an EC2 instance state change.<br>Which solution will meet this requirements?</p>",
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
      "topic_name": "",
      "discusstion": [
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
      "question_id": "#114",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator has an AWS CloudFormation template that is used to deploy an encrypted Amazon Machine Image (AMI). The CloudFormation template will be used in a second account so the SysOps administrator copies the encrypted AMI to the second account. When launching the new CloudFormation stack in the second account, it fails.<br>Which action should the SysOps administrator take to correct the issue?</p>",
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
      "topic_name": "",
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
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 735986,
          "date": "Mon 05 Dec 2022 15:13",
          "username": "goatbernard",
          "content": "level 7 -> ALB + CloudFront",
          "upvote_count": "1",
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
      "topic_name": "",
      "discusstion": [
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
      "topic_name": "",
      "discusstion": [
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
          "content": "D.  You can only encrypt an Amazon RDS DB instance when you create it, not after the DB instance is created.<br><br>However, because you can encrypt a copy of an unencrypted snapshot, you can effectively add encryption to an unencrypted DB instance. That is, you can create a snapshot of your DB instance, and then create an encrypted copy of that snapshot. You can then restore a DB instance from the encrypted snapshot, and thus you have an encrypted copy of your original DB instance. <br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html",
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
      "question_text": "<p>A company has an application that is running on Amazon EC2 instances in a VPC.  The application needs access to download software updates from the internet. The VPC has public subnets and private subnets. The company’s security policy requires all EC2 instances to be deployed in private subnets.<br><br>What should a SysOps administrator do to meet these requirements?</p>",
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
      "topic_name": "",
      "discusstion": [
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
      "topic_name": "",
      "discusstion": [
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
      "topic_name": "",
      "discusstion": [
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
      "topic_name": "",
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
          "content": "Ans: A&C<br>Every time you run out of IP's in your subnet, create a SECONDARY CIDR in your VPC.  That will create a second local route in your RT's. Now you have more IP's available where you can create subnets. <br>Remember: you CANNOT modify the CIDR of a VPC or subnet.<br>Ref. https://docs.aws.amazon.com/vpc/latest/userguide/configure-your-vpc.html#vpc-resize",
          "upvote_count": "1",
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
      "topic_name": "",
      "discusstion": [
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 737799,
          "date": "Wed 07 Dec 2022 12:46",
          "username": "BugsBunny9998666BugsBunny9998666",
          "content": "Its A, this question pop up in old topic for sys ops, there over 15 peoplevoted Ahere are some old comments <br>A is correct!<br>The optional Mappings section matches a key to a corresponding set of named values. For example, if you want to set values based on a region, you can create a mapping that uses the region name as a key and contains the values you want to specify for each specific region. You use the Fn::FindInMap intrinsic function to retrieve values in a map.<br><br>You can't include parameters, pseudo parameters, or intrinsic functions in the Mappings section.<br><br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/mappings-section-structure.html<br><br>A is correct, mappings have nothing to do in referencing from one stack to the other",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 737802,
          "date": "Wed 07 Dec 2022 12:47",
          "username": "BugsBunny9998666",
          "content": "here are some old comments <br>A is correct!<br>The optional Mappings section matches a key to a corresponding set of named values. For example, if you want to set values based on a region, you can create a mapping that uses the region name as a key and contains the values you want to specify for each specific region. You use the Fn::FindInMap intrinsic function to retrieve values in a map.<br><br>You can't include parameters, pseudo parameters, or intrinsic functions in the Mappings section.<br><br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/mappings-section-structure.html<br><br>A is correct, mappings have nothing to do in referencing from one stack to the other",
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
      "question_text": "<p>A company runs a web application on three Amazon EC2 instances behind an Application Load Balancer (ALB). The company notices that random periods of increased traffic cause a degradation in the application’s performance. A SysOps administrator must scale the application to meet the increased traffic.<br><br>Which solution meets these requirements?</p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 737805,
          "date": "Wed 07 Dec 2022 12:51",
          "username": "BugsBunny9998666",
          "content": "target tracking scaling policy is perfect for RANDOM periods of increased traffic.<br>For those who chooseD, D is NOT an option here what are you ? Wizard with crystal ball to know when traffic will increase ?",
          "upvote_count": "1",
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
      "topic_name": "",
      "discusstion": [
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
      "topic_name": "",
      "discusstion": [
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
      "topic_name": "",
      "discusstion": [
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
      "topic_name": "",
      "discusstion": [
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
          "upvote_count": "1",
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
      "question_text": "<p>A company’s SysOps administrator attempts to restore an Amazon Elastic Block Store (Amazon EBS) snapshot. However, the snapshot is missing because another system administrator accidentally deleted the snapshot. The company needs the ability to recover snapshots for a specified period of time after snapshots are deleted.<br><br>Which solution will provide this functionality?</p>",
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
      "topic_name": "",
      "discusstion": [
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
      "question_id": "#146",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to archive sensitive data on Amazon S3 Glacier. The company’s regulatory and compliance requirements do not allow any modifications to the data by any account.<br><br>Which solution meets these requirements?</p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 728401,
          "date": "Sun 27 Nov 2022 16:57",
          "username": "marcelodba",
          "content": "https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html#:~:text=Initiate%20the%20lock,will%20be%20deleted.",
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
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 720237,
          "date": "Thu 17 Nov 2022 06:36",
          "username": "Liongeek",
          "content": "Ans: A<br>Ref: https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html#vault-lock-overview",
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
      "question_text": "<p>A company manages an application that uses Amazon ElastiCache for Redis with two extra-large nodes spread across two different Availability Zones. The company’s IT team discovers that the ElastiCache for Redis cluster has 75% freeable memory. The application must maintain high availability.<br><br>What is the MOST cost-effective way to resize the cluster?</p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 721104,
          "date": "Fri 18 Nov 2022 07:23",
          "username": "Xelnak",
          "content": "https://docs.amazonaws.cn/en_us/AmazonElastiCache/latest/red-ug/redis-cluster-vertical-scaling-scaling-down.html#redis-cluster-vertical-scaling-down-console",
          "upvote_count": "5",
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
      "question_id": "#149",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations to manage its AWS accounts. A SysOps administrator must create a backup strategy for all Amazon EC2 instances across all the company’s AWS accounts.<br><br>Which solution will meet these requirements in the MOST operationally efficient way?</p>",
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
              "choice": "<p>B. Create an AWS CloudFormation stack set in the management account to add an AutoBackup=True tag to every EC2 instance.<br></p>",
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
      "topic_name": "",
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
      "question_id": "#153",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator is attempting to download patches from the internet into an instance in a private subnet. An internet gateway exists for the VPC, and a NAT gateway has been deployed on the public subnet; however, the instance has no internet connectivity. The resources deployed into the private subnet must be inaccessible directly from the public internet.<br><br>Public Subnet (10.0.1.0/24) Route Table<br><br>Destination\t\tTarget -<br>10.0.0.0/16\t\tlocal<br>0.0.0.0/0\t\t\tIGW<br><br>Private Subnet (10.0.2.0/24) Route Table<br><br>Destination \t\tTarget -<br>10.0.0.0/16 \t\tlocal<br><br>What should be added to the private subnet’s route table in order to address this issue, given the information provided?</p>",
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
              "choice": "<p>A. 0.0.0.0/0 IGW<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. 0.0.0.0/0 NAT<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. 10.0.1.0/24 IGW<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. 10.0.1.0/24 NAT<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
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
      "topic_name": "",
      "discusstion": [
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
      "topic_name": "",
      "discusstion": [
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
          "upvote_count": "3",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 738814,
          "date": "Thu 08 Dec 2022 10:22",
          "username": "BugsBunny9998666",
          "content": "A D ///C is wrong as it mentioned that ((ALB) across two Availability Zones ) JUST 1 region !!!<br>what is the point in C, Route 53 latency routing if it all goes to one region anyway ?",
          "upvote_count": "1",
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
          "content": "ans: AC<br>A.  Add Amazon CloudFront caching for static content.-YES<br>B.  Change the load balancer listener from HTTPS to TCP. - doesn't make any sense<br>C.  Enable Amazon Route 53 latency-based routing. - YES<br>D.  Implement Amazon EC2 Auto Scaling for the web servers. - This won't help with loading<br>E.  Move the static content from Amazon S3 to the web servers. - no, cloudfront caching going to solve this problem",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 721182,
          "date": "Fri 18 Nov 2022 09:53",
          "username": "Xelnak",
          "content": "https://docs.amazonaws.cn/en_us/storagegateway/latest/vgw/StorageGatewayConcepts.html<br>By using stored volumes, you can store your primary data locally, while asynchronously backing up that data to Amazon. Stored volumes provide your on-premises applications with low-latency access to their entire datasets. At the same time, they provide durable, offsite backups.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 719961,
          "date": "Wed 16 Nov 2022 20:43",
          "username": "Liongeek",
          "content": "Ans: D<br>With Volume Stored Gateway all your data stays onprem and backups are sent to S3 asEBS snapshots. It's also POSIX compatible",
          "upvote_count": "2",
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
      "question_text": "<p>A global company handles a large amount of personally identifiable information (PII) through an internal web portal. The company’s application runs in a corporate data center that is connected to AWS through an AWS Direct Connect connection. The application stores the PII in Amazon S3. According to a compliance requirement, traffic from the web portal to Amazon S3 must not travel across the internet.<br><br>What should a SysOps administrator do to meet the compliance requirement?</p>",
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
      "topic_name": "",
      "discusstion": [
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
      "topic_name": "",
      "discusstion": [
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
      "topic_name": "",
      "discusstion": [
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
      "topic_name": "",
      "discusstion": [
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
      "topic_name": "",
      "discusstion": [
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
      "general_feedback": "<p>Correct Answer: B</p>",
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
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Route 0.0.0.0/0 traffic to an egress-only internet gateway<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Route ::/0 traffic to an egress-only internet gateway<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
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
      "topic_name": "",
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
      "topic_name": "",
      "discusstion": [
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
      "topic_name": "",
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
      "topic_name": "",
      "discusstion": [
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
      "topic_name": "",
      "discusstion": [
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
      "question_text": "<p>A company monitors its account activity using AWS CloudTrail, and is concerned that some log files are being tampered with after the logs have been delivered to the account’s Amazon S3 bucket.<br><br>Moving forward, how can the SysOps administrator confirm that the log files have not been modified after being delivered to the S3 bucket?</p>",
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
      "topic_name": "",
      "discusstion": [
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
      "topic_name": "",
      "discusstion": [
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
      "topic_name": "",
      "discusstion": [
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 727040,
          "date": "Fri 25 Nov 2022 20:08",
          "username": "BugsBunny9998666",
          "content": "C is possible, correct me if Im wrong: Canaries are scripts written in Node.js or Python. <br>They create Lambda functions in your account that use Node.js or Python as a framework. Canaries work over both HTTP and HTTPS protocols. which makes it possible for you to continually verify your customer experience even when you don't have any customer traffic on your applications. By using canaries, you can discover issues before your customers do. This is why B is good but as C is automation of what B says making it a better option",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 724996,
          "date": "Wed 23 Nov 2022 09:28",
          "username": "BugsBunny9998666BugsBunny9998666",
          "content": "C is possible: Canaries are scripts written in Node.js or Python. They create Lambda functions in your account that use Node.js or Python as a framework. Canaries work over both HTTP and HTTPS protocols.which makes it possible for you to continually verify your customer experience even when you don't have any customer traffic on your applications. By using canaries, you can discover issues before your customers do.https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.html",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 724998,
          "date": "Wed 23 Nov 2022 09:29",
          "username": "BugsBunny9998666",
          "content": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 721860,
          "date": "Sat 19 Nov 2022 10:01",
          "username": "Raynor",
          "content": "This is B!",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#188",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator is responsible for a company’s security groups. The company wants to maintain a documented trail of any changes that are made to the security groups. The SysOps administrator must receive notification whenever the security groups change.<br><br>Which solution will meet these requirements?</p>",
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
              "choice": "<p>A. Set up Amazon Detective to record security group changes. Specify an Amazon CloudWatch Logs log group to store configuration history logs. Create an Amazon Simple Queue Service (Amazon SQS) queue for notifications about configuration changes. Subscribe the SysOps administrator’s email address to the SQS queue.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up AWS Systems Manager Change Manager to record security group changes. Specify an Amazon CloudWatch Logs log group to store configuration history logs. Create an Amazon Simple Notification Service (Amazon SNS) topic for notifications about configuration changes. Subscribe the SysOps administrator’s email address to the SNS topic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up AWS Config to record security group changes. Specify an Amazon S3 bucket as the location for configuration snapshots and history files. Create an Amazon Simple Notification Service (Amazon SNS) topic for notifications about configuration changes. Subscribe the SysOps administrator’s email address to the SNS topic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up Amazon Detective to record security group changes. Specify an Amazon S3 bucket as the location for configuration snapshots and history files. Create an Amazon Simple Notification Service (Amazon SNS) topic for notifications about configuration changes. Subscribe the SysOps administrator’s email address to the SNS topic.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 721861,
          "date": "Sat 19 Nov 2022 10:03",
          "username": "RaynorRaynor",
          "content": "maintain a documented trail of any changes = config + S3<br>Notification = SNSmaintain a documented trail of any changes = config + S3, <br>Alert = SNS",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 721862,
          "date": "Sat 19 Nov 2022 10:05",
          "username": "Raynor",
          "content": "maintain a documented trail of any changes = config + S3, <br>Alert = SNS",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 720036,
          "date": "Wed 16 Nov 2022 22:57",
          "username": "Liongeek",
          "content": "Ans: A<br>Ref. https://aws.amazon.com/es/blogs/storage/adding-and-removing-object-tags-with-s3-batch-operations/",
          "upvote_count": "4",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 738997,
          "date": "Thu 08 Dec 2022 13:07",
          "username": "BugsBunny9998666",
          "content": "C makes most cense",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 735894,
          "date": "Mon 05 Dec 2022 12:49",
          "username": "CloudHandsOn",
          "content": "I'll go with C as well",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 720039,
          "date": "Wed 16 Nov 2022 23:04",
          "username": "Liongeek",
          "content": "It looks like C for me. I don't think it's D.  In order to be D, all instances in that subnet shouldn't be in SSM but question says that SOME INSTANCES IN THE SAME SUBNET...",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#202",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs several workloads on AWS. The company identifies five AWS Trusted Advisor service quota metrics to monitor in a specific AWS Region. The company wants to receive email notification each time resource usage exceeds 60% of one of the service quotas.<br><br>Which solution will meet these requirements?</p>",
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
              "choice": "<p>A. Create five Amazon CloudWatch alarms, one for each Trusted Advisor service quota metric. Configure an Amazon Simple Notification Service (Amazon SNS) topic for email notification each time that usage exceeds 60% of one of the service quotas.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create five Amazon CloudWatch alarms, one for each Trusted Advisor service quota metric. Configure an Amazon Simple Queue Service (Amazon SQS) queue for email notification each time that usage exceeds 60% of one of the service quotas.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the AWS Service Health Dashboard to monitor each Trusted Advisor service quota metric. Configure an Amazon Simple Queue Service (Amazon SQS) queue for email notification each time that usage exceeds 60% of one of the service quotas.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the AWS Service Health Dashboard to monitor each Trusted Advisor service quota metric. Configure an Amazon Simple Notification Service (Amazon SNS) topic for email notification each time that usage exceeds 60% of one of the service quotas.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 739235,
          "date": "Thu 08 Dec 2022 16:45",
          "username": "CloudHandsOn",
          "content": "Setting up the Alarms, then sending emails via SNS should do the job",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 738559,
          "date": "Thu 08 Dec 2022 03:49",
          "username": "goatbernard",
          "content": "it should be SNS instead of SQS",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#97",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A team of on-call engineers frequently needs to connect to Amazon EC2 instances in a private subnet to troubleshoot and run commands. The instances use either the latest AWS-provided Windows Amazon Machine Images (AMIs) or Amazon Linux AMIs.<br>The team has an existing 1AM role for authorization. A SysOps administrator must provide the team with access to the instances by granting IAM permissions to this role.<br>Which solution will meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#97",
          "answers": [
            {
              "choice": "<p>A. Add a statement to the 1AM role policy to allow the ssm:StartSession action on the instances. Instruct the team to use AWS Systems Manager Session Manager to connect to the instances by using the assumed IAM role.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Associate an Elastic IP address and a security group with each instance. Add the engineers' IP addresses to the security group inbound rules. Add a statement to the IAM role policy to allow the ec2:AuthorizeSecurityGrouplngress action so that the team can connect to the instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a bastion host with an EC2 instance, and associate the bastion host with the VPC.  Add a statement to the 1AM role policy to allow the ec2:CreateVpnConnection action on the bastion host. Instruct the team to use the bastion host endpoint to connect to the instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an internet-facing Network Load Balancer. Use two listeners. Forward port 22 to a target group of Linux instances. Forward port 3389 to a target group of Windows instances. Add a statement to the IAM role policy to allow the ec2:CreateRoute action so that the team can connect to the instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 720911,
          "date": "Thu 17 Nov 2022 23:05",
          "username": "Liongeek",
          "content": "Ans: A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 696827,
          "date": "Mon 17 Oct 2022 06:35",
          "username": "Surferbolt",
          "content": "A is correct.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 660002,
          "date": "Mon 05 Sep 2022 11:43",
          "username": "kati2k22cz",
          "content": "Agree, its A. <br>https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#98",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to ensure strict adherence to a budget for 25 applications deployed on AWS. Separate teams are responsible for storage, compute, and database costs. A SysOps administrator must implement an automated solution to alert each team when their projected spend will exceed a quarterly amount that has been set by the finance department. The solution cannot incur additional compute, storage, or database costs.<br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#98",
          "answers": [
            {
              "choice": "<p>A. Configure AWS Cost and Usage Reports to send a daily report to an Amazon S3 bucket. Create an AWS Lambda function that will evaluate spend by service and notify each team by using Amazon Simple Notification Service (Amazon SNS) notifications. Invoke the Lambda function when a report is placed in the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure AWS Cost and Usage Reports to send a daily report to an Amazon S3 bucket. Create a rule in Amazon EventBridge (Amazon CloudWatch Events) to evaluate the spend by service and notify each team by using Amazon Simple Queue Service (Amazon SQS) when the cost threshold is exceeded.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Budgets to create one cost budget and select each of the services in use. Specify the budget amount defined by the finance department along with the forecasted cost threshold. Enter the appropriate email recipients for the budget.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Budgets to create a cost budget for each team, filtering by the services they own. Specify the budget amount defined by the finance department along with a forecasted cost threshold. Enter the appropriate email recipients for each budget.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 720915,
          "date": "Thu 17 Nov 2022 23:07",
          "username": "Liongeek",
          "content": "Ans: D<br>You will need one budget per deparment",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 696824,
          "date": "Mon 17 Oct 2022 06:34",
          "username": "Surferbolt",
          "content": "D.  Budgets",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 660037,
          "date": "Mon 05 Sep 2022 12:17",
          "username": "kati2k22cz",
          "content": "Letter D.  Cost per team<br>https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#99",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a static website on Amazon S3. An Amazon CloudFront distribution presents this site to global users. The company uses the Managed-<br>CachingDisabled CloudFront cache policy. The company's developers confirm that they frequently update a file in Amazon S3 with new information.<br>Users report that the website presents correct information when the website first loads the file. However, the users' browsers do not retrieve the updated file after a refresh.<br>What should a SysOps administrator recommend to fix this issue?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#99",
          "answers": [
            {
              "choice": "<p>A. Add a Cache-Control header field with max-age=0 to the S3 object.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Change the CloudFront cache policy to Managed-CachingOptimized.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Disable bucket versioning in the S3 bucket configuration.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable content compression in the CloudFront configuration.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 716889,
          "date": "Sat 12 Nov 2022 20:21",
          "username": "Atown",
          "content": "Would it not be B since Caching is already Disabled?",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 696894,
          "date": "Mon 17 Oct 2022 06:51",
          "username": "Surferbolt",
          "content": "A is the answer.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 659375,
          "date": "Sun 04 Sep 2022 18:02",
          "username": "princajen",
          "content": "A!<br>You can control how long your files stay in a CloudFront cache before CloudFront forwards another request to your origin. Reducing the duration allows you to serve dynamic content. Increasing the duration means that your users get better performance because your files are more likely to be served directly from the edge cache. A longer duration also reduces the load on your origin.<br><br>To change the cache duration for an individual file, you can configure your origin to add a Cache-Control header with the max-age or s-maxage directive, or an Expires header to the file.<br><br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    }
  ]
}