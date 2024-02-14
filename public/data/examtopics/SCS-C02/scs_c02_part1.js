var SCS_C02_Part1 = {
    "msg": "Quiz Questions",
    "data": [
      {
        "question_id": "#1",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an AWS Lambda function that creates image thumbnails from larger images. The Lambda function needs read and write access to an Amazon S3 bucket in the same AWS account.<br>Which solutions will provide the Lambda function this access? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: CD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#1",
            "answers": [
              {
                "choice": "<p>Create an IAM user that has only programmatic access. Create a new access key pair. Add environmental variables to the Lambda function with the access key ID and secret access key. Modify the Lambda function to use the environmental variables at run time during communication with Amazon S3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Generate an Amazon EC2 key pair. Store the private key in AWS Secrets Manager. Modify the Lambda function to retrieve the private key from Secrets Manager and to use the private key during communication with Amazon S3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an IAM role for the Lambda function. Attach an IAM policy that allows access to the S3 bucket.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create an IAM role for the Lambda function. Attach a bucket policy to the S3 bucket to allow access. Specify the function's IAM role as the principal.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create a security group. Attach the security group to the Lambda function. Attach a bucket policy that allows access to the S3 bucket through the security group ID. <br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 1 discussion",
        "discusstion": [
          {
            "id": 1097567,
            "date": "Fri 15 Dec 2023 19:14",
            "username": "\t\t\t\ttulmegusto\t\t\t",
            "content": "itexamstest.com<br><br>no disscusion cd :)",
            "upvote_count": "13",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 1026268,
            "date": "Fri 06 Oct 2023 07:36",
            "username": "\t\t\t\tCertified101\t\t\t",
            "content": "C & D - The other 3 are defiantly wrong",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 1125723,
            "date": "Thu 18 Jan 2024 11:18",
            "username": "\t\t\t\tsarcactus\t\t\t",
            "content": "CD are the correct ones!<br>But do i need to put these correct answers or answers marked as \\\"Correct Answer\\\" on the real exam?",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 1094751,
            "date": "Tue 12 Dec 2023 18:00",
            "username": "\t\t\t\tRaphaello\t\t\t",
            "content": "CD<br>Why the answers for many questions are categorically wrong?",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 1079460,
            "date": "Fri 24 Nov 2023 18:36",
            "username": "\t\t\t\tawssecuritynewbie\t\t\t",
            "content": "for sure this will be the use of AWS ROLES it is simple, you attach a role to the lambda to be able to access certain S3 bucket.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 1068992,
            "date": "Mon 13 Nov 2023 04:10",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "Refer to this:<br>https://repost.aws/knowledge-center/lambda-execution-role-s3-bucket",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 1058372,
            "date": "Tue 31 Oct 2023 01:29",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "C and D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 1056510,
            "date": "Sun 29 Oct 2023 02:22",
            "username": "\t\t\t\tlalee2\t\t\t",
            "content": "same account. for ABAC IAM role w/ policy will do. RBAC requires principal",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 1054547,
            "date": "Thu 26 Oct 2023 14:27",
            "username": "\t\t\t\tpupsik\t\t\t",
            "content": "Permission needs to be specified either from Lambda's role policy, or from S3 bucket's resource policy.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 1052430,
            "date": "Tue 24 Oct 2023 04:51",
            "username": "\t\t\t\tKR693\t\t\t",
            "content": "c and d",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1027928,
            "date": "Sun 08 Oct 2023 13:42",
            "username": "\t\t\t\tdhax12\t\t\t",
            "content": "Any type of key means a long term access. Always use IAM roles to keep access temporarily. Answer should be C&D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1024305,
            "date": "Wed 04 Oct 2023 02:44",
            "username": "\t\t\t\tRayHK\t\t\t",
            "content": "vote for C and D",
            "upvote_count": "3",
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
        "question_text": "<p>A security engineer is configuring a new website that is named example.com. The security engineer wants to secure communications with the website by requiring users to connect to example.com through HTTPS.<br>Which of the following is a valid option for storing SSL/TLS certificates?</p>",
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
                "choice": "<p>Custom SSL certificate that is stored in AWS Key Management Service (AWS KMS)<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Default SSL certificate that is stored in Amazon CloudFront<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Custom SSL certificate that is stored in AWS Certificate Manager (ACM)<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Default SSL certificate that is stored in Amazon S3<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 2 discussion",
        "discusstion": [
          {
            "id": 1097569,
            "date": "Fri 15 Dec 2023 19:15",
            "username": "\t\t\t\ttulmegusto\t\t\t",
            "content": "itexamstest.com<br><br>no disscusion c :)",
            "upvote_count": "13",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1074852,
            "date": "Sun 19 Nov 2023 19:37",
            "username": "\t\t\t\tawssecuritynewbie\t\t\t",
            "content": "Did anyone take this exam? Is these dumps valid?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1068993,
            "date": "Mon 13 Nov 2023 04:11",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "ACM is the natural choice.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1058373,
            "date": "Tue 31 Oct 2023 01:34",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "Answer C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1056732,
            "date": "Sun 29 Oct 2023 11:11",
            "username": "\t\t\t\timymoco\t\t\t",
            "content": "Answer is C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1056511,
            "date": "Sun 29 Oct 2023 02:23",
            "username": "\t\t\t\tlalee2\t\t\t",
            "content": "ACM do the job",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1054549,
            "date": "Thu 26 Oct 2023 14:29",
            "username": "\t\t\t\tpupsik\t\t\t",
            "content": "ACM is where you would normally store SSL certificates.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1052431,
            "date": "Tue 24 Oct 2023 04:54",
            "username": "\t\t\t\tKR693\t\t\t",
            "content": "Answer C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1047411,
            "date": "Thu 19 Oct 2023 02:54",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1026270,
            "date": "Fri 06 Oct 2023 07:38",
            "username": "\t\t\t\tCertified101\t\t\t",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1023653,
            "date": "Tue 03 Oct 2023 08:13",
            "username": "\t\t\t\taragon_saa\t\t\t",
            "content": "https://www.examtopics.com/discussions/amazon/view/88394-exam-aws-certified-security-specialty-topic-1-question-359/",
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
        "question_text": "<p>A security engineer needs to develop a process to investigate and respond to potential security events on a company's Amazon EC2 instances. All the EC2 instances are backed by Amazon Elastic Block Store (Amazon EBS). The company uses AWS Systems Manager to manage all the EC2 instances and has installed Systems Manager Agent (SSM Agent) on all the EC2 instances.<br>The process that the security engineer is developing must comply with AWS security best practices and must meet the following requirements:<br>A compromised EC2 instance's volatile memory and non-volatile memory must be preserved for forensic purposes.<br>A compromised EC2 instance's metadata must be updated with corresponding incident ticket information.<br>A compromised EC2 instance must remain online during the investigation but must be isolated to prevent the spread of malware.<br>Any investigative activity during the collection of volatile data must be captured as part of the process.<br>Which combination of steps should the security engineer take to meet these requirements with the LEAST operational overhead? (Choose three.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ACE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#3",
            "answers": [
              {
                "choice": "<p>Gather any relevant metadata for the compromised EC2 instance. Enable termination protection. Isolate the instance by updating the instance's security groups to restrict access. Detach the instance from any Auto Scaling groups that the instance is a member of. Deregister the instance from any Elastic Load Balancing (ELB) resources.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Gather any relevant metadata for the compromised EC2 instance. Enable termination protection. Move the instance to an isolation subnet that denies all source and destination traffic. Associate the instance with the subnet to restrict access. Detach the instance from any Auto Scaling groups that the instance is a member of. Deregister the instance from any Elastic Load Balancing (ELB) resources.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use Systems Manager Run Command to invoke scripts that collect volatile data.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Establish a Linux SSH or Windows Remote Desktop Protocol (RDP) session to the compromised EC2 instance to invoke scripts that collect volatile data.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a snapshot of the compromised EC2 instance's EBS volume for follow-up investigations. Tag the instance with any relevant metadata and incident ticket information.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create a Systems Manager State Manager association to generate an EBS volume snapshot of the compromised EC2 instance. Tag the instance with any relevant metadata and incident ticket information.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 3 discussion",
        "discusstion": [
          {
            "id": 1097570,
            "date": "Fri 15 Dec 2023 19:15",
            "username": "\t\t\t\ttulmegusto\t\t\t",
            "content": "itexamstest.com<br><br>no disscusion ace :)",
            "upvote_count": "13",
            "selected_answers": "Selected Answer: ACE"
          },
          {
            "id": 1054553,
            "date": "Thu 26 Oct 2023 14:33",
            "username": "\t\t\t\tpupsik\t\t\t",
            "content": "The reason it is not \\\"B\\\" is because you cannot move a running instance into a different subnet.",
            "upvote_count": "8",
            "selected_answers": "Selected Answer: ACE"
          },
          {
            "id": 1110474,
            "date": "Sun 31 Dec 2023 12:09",
            "username": "\t\t\t\tcsG13\t\t\t",
            "content": "A & C are correct. Since it's an SSM managed node already, why not F?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1105529,
            "date": "Mon 25 Dec 2023 21:44",
            "username": "\t\t\t\tSab31\t\t\t",
            "content": "Can someone share why not F? As it automated the EBS backup process. Hence reducing the overhead.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>F is technically feasible but SSM state manager is used for routine backup of EC2 instances. In this case the snapshot is one-off and you cannot automate the second part that is tagging with metadata and incident ticket info. So it is not appropriate.</li></ul>",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1110916,
            "date": "Mon 01 Jan 2024 02:14",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "F is technically feasible but SSM state manager is used for routine backup of EC2 instances. In this case the snapshot is one-off and you cannot automate the second part that is tagging with metadata and incident ticket info. So it is not appropriate.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1098868,
            "date": "Sun 17 Dec 2023 13:09",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "between C and D,<br>D is a traditional method which has more overhead: need to preconfigure instance connectivity to external storage medium for writing memory<br>And it risk altering the memory and storage artifacts in the process. Using system manager is a comparatively better way.<br><br>https://d1.awsstatic.com/events/aws-reinforce-2022/TDR401_Instance-memory-acquisition-techniques-for-effective-incident-response.pdf",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: ACE"
          },
          {
            "id": 1095870,
            "date": "Wed 13 Dec 2023 23:18",
            "username": "\t\t\t\tRaphaello\t\t\t",
            "content": "A C E<br>It's not possible to move an existing instance to another subnet; rather, one can associate it with a restricted SG.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1079494,
            "date": "Fri 24 Nov 2023 19:37",
            "username": "\t\t\t\tawssecuritynewbie\t\t\t",
            "content": "A C E, for sure.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: ACE"
          },
          {
            "id": 1058380,
            "date": "Tue 31 Oct 2023 01:56",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "A, C, E",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: ACE"
          },
          {
            "id": 1056513,
            "date": "Sun 29 Oct 2023 02:26",
            "username": "\t\t\t\tlalee2\t\t\t",
            "content": "Gather info -> isolate -> detach ->snapshot",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: ACE"
          },
          {
            "id": 1052433,
            "date": "Tue 24 Oct 2023 05:00",
            "username": "\t\t\t\tKR693\t\t\t",
            "content": "A, C and E",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1027457,
            "date": "Sat 07 Oct 2023 16:49",
            "username": "\t\t\t\t0dd\t\t\t",
            "content": "ACE.  B is incorrect because once a EC2 instance created, it could not be moved to other subnets",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 1027154,
            "date": "Sat 07 Oct 2023 09:12",
            "username": "\t\t\t\tkk2000\t\t\t",
            "content": "ACE makes more sense.Updating Security group(Least operational overhead) rather than moving the EC2 to different subnet which needs more steps required.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#4",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an organization in AWS Organizations. The company wants to use AWS CloudFormation StackSets in the organization to deploy various AWS design patterns into environments. These patterns consist of Amazon EC2 instances, Elastic Load Balancing (ELB) load balancers, Amazon RDS databases, and Amazon Elastic Kubernetes Service (Amazon EKS) clusters or Amazon Elastic Container Service (Amazon ECS) clusters.<br>Currently, the company's developers can create their own CloudFormation stacks to increase the overall speed of delivery. A centralized CI/CD pipeline in a shared services AWS account deploys each CloudFormation stack.<br>The company's security team has already provided requirements for each service in accordance with internal standards. If there are any resources that do not comply with the internal standards, the security team must receive notification to take appropriate action. The security team must implement a notification solution that gives developers the ability to maintain the same overall delivery speed that they currently have.<br>Which solution will meet these requirements in the MOST operationally efficient way?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#4",
            "answers": [
              {
                "choice": "<p>Create an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the security team's email addresses to the SNS topic. Create a custom AWS Lambda function that will run the aws cloudformation validate-template AWS CLI command on all CloudFormation templates before the build stage in the CI/CD pipeline. Configure the CI/CD pipeline to publish a notification to the SNS topic if any issues are found.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the security team's email addresses to the SNS topic. Create custom rules in CloudFormation Guard for each resource configuration. In the CI/CD pipeline, before the build stage, configure a Docker image to run the cfn-guard command on the CloudFormation template. Configure the CI/CD pipeline to publish a notification to the SNS topic if any issues are found.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Amazon Simple Notification Service (Amazon SNS) topic and an Amazon Simple Queue Service (Amazon SQS) queue. Subscribe the security team's email addresses to the SNS topic. Create an Amazon S3 bucket in the shared services AWS account. Include an event notification to publish to the SQS queue when new objects are added to the S3 bucket. Require the developers to put their CloudFormation templates in the S3 bucket. Launch EC2 instances that automatically scale based on the SQS queue depth. Configure the EC2 instances to use CloudFormation Guard to scan the templates and deploy the templates if there are no issues. Configure the CI/CD pipeline to publish a notification to the SNS topic if any issues are found.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a centralized CloudFormation stack set that includes a standard set of resources that the developers can deploy in each AWS account. Configure each CloudFormation template to meet the security requirements. For any new resources or configurations, update the CloudFormation template and send the template to the security team for review. When the review is completed, add the new CloudFormation stack to the repository for the developers to use.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 4 discussion",
        "discusstion": [
          {
            "id": 1097571,
            "date": "Fri 15 Dec 2023 19:16",
            "username": "\t\t\t\ttulmegusto\t\t\t",
            "content": "itexamstest.com<br><br>no disscusion b :)",
            "upvote_count": "13",
            "selected_answers": ""
          },
          {
            "id": 1100479,
            "date": "Tue 19 Dec 2023 10:44",
            "username": "\t\t\t\ttrashbox\t\t\t",
            "content": "Exam on 2023-12-18",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1095103,
            "date": "Wed 13 Dec 2023 04:08",
            "username": "\t\t\t\tRaphaello\t\t\t",
            "content": "Command \\\"aws cloudformation validate-template\\\" checks only the syntax of cfn template.<br>I'd go with answer B, CloudFormation Guard, as it evaluates and validates cfn templates.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1083008,
            "date": "Wed 29 Nov 2023 00:10",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Def. going with B as it doesn't ask to improve the delivery speed. Had that been the case then probably would have gone with option A IMO.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1073006,
            "date": "Fri 17 Nov 2023 04:15",
            "username": "\t\t\t\tChristina666\t\t\t",
            "content": "BBB The ask is to send notification and not affecting current delivery speed. So only need to add a validation step to send SNS",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1068988,
            "date": "Mon 13 Nov 2023 03:53",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "Option A likely is utilizing cfn-guard as well but by Lambda/cli command, instead of creating custom rules for each resource config.More operationally efficient than B. <br>https://github.com/aws-cloudformation/cloudformation-guard",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1058421,
            "date": "Tue 31 Oct 2023 03:50",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "validate-template is only for syntax and some semantic errors. cfn-guard is for policy compliance.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1056515,
            "date": "Sun 29 Oct 2023 02:28",
            "username": "\t\t\t\tlalee2\t\t\t",
            "content": "CloudFormation Guard and SNS",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1054565,
            "date": "Thu 26 Oct 2023 14:47",
            "username": "\t\t\t\tpupsik\t\t\t",
            "content": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.html#:~:textValidate%20templates%20for,non%2Dcompliant%20resources.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1053820,
            "date": "Wed 25 Oct 2023 17:01",
            "username": "\t\t\t\tleoaquinods\t\t\t",
            "content": "most operationally efficient",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1052438,
            "date": "Tue 24 Oct 2023 05:13",
            "username": "\t\t\t\tKR693\t\t\t",
            "content": "Option B. <br><br>The aws cloudformation validate-template command is designed to check only the syntax of your template.<br><br>Using Guard, you can write policy rules to validate any JSON- or YAML-formatted structured data against, including but not limited to AWS CloudFormation templates. Guard supports the entire spectrum of end-to-end evaluation of policy checks",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 1050883,
            "date": "Sun 22 Oct 2023 18:46",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer A.  Most operationally efficient<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Answer B.  My original selection</li></ul>",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1064173,
            "date": "Mon 06 Nov 2023 19:58",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer B.  My original selection",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1047559,
            "date": "Thu 19 Oct 2023 07:16",
            "username": "\t\t\t\tLunga778\t\t\t",
            "content": "answerer is A",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1047426,
            "date": "Thu 19 Oct 2023 03:29",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer B. <br>You can use cfn-guard automatically as part of a CI/CD pipeline to stop deployment of non-compliant resources.<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Changed to answer A</li><li>Original selection B</li></ul>",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1050885,
            "date": "Sun 22 Oct 2023 18:48",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Changed to answer A<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Original selection B</li></ul>",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1064175,
            "date": "Mon 06 Nov 2023 19:59",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Original selection B",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#5",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is migrating one of its legacy systems from an on-premises data center to AWS. The application server will run on AWS, but the database must remain in the on-premises data center for compliance reasons. The database is sensitive to network latency. Additionally, the data that travels between the on-premises data center and AWS must have IPsec encryption.<br>Which combination of AWS solutions will meet these requirements? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AB</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#5",
            "answers": [
              {
                "choice": "<p>AWS Site-to-Site VPN<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>AWS Direct Connect<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>AWS VPN CloudHub<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>VPC peering<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>NAT gateway<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 5 discussion",
        "discusstion": [
          {
            "id": 1101578,
            "date": "Wed 20 Dec 2023 14:55",
            "username": "\t\t\t\tusmanbaigmughal\t\t\t",
            "content": "AB is the correct answer.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1068999,
            "date": "Mon 13 Nov 2023 04:26",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "C.  AWS VPN CloudHub - this is hub-and-spoke solution to connect multiple sites.D.  VPC peering - this is to connect cloud VPCto VPC. E.  NAT gateway - public or private NAT gateway? the public type is to access the internet, and a private NAT gateway is often used for communication between VPCs or between VPCs and Transit Gateway.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 1058425,
            "date": "Tue 31 Oct 2023 03:52",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "A and B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 1056518,
            "date": "Sun 29 Oct 2023 02:31",
            "username": "\t\t\t\tlalee2\t\t\t",
            "content": "A and B provide IPsec encryption and minimized latency",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 1054569,
            "date": "Thu 26 Oct 2023 14:49",
            "username": "\t\t\t\tpupsik\t\t\t",
            "content": "DirectConnect for reliable connection and VPN for IPSec tunnel.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 1052440,
            "date": "Tue 24 Oct 2023 05:19",
            "username": "\t\t\t\tKR693\t\t\t",
            "content": "A and B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1047427,
            "date": "Thu 19 Oct 2023 03:32",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer AB<br>https://docs.aws.amazon.com/directconnect/latest/UserGuide/encryption-in-transit.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 1023655,
            "date": "Tue 03 Oct 2023 08:15",
            "username": "\t\t\t\taragon_saa\t\t\t",
            "content": "https://www.examtopics.com/discussions/amazon/view/88132-exam-aws-certified-security-specialty-topic-1-question-363/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#6",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an application that uses dozens of Amazon DynamoDB tables to store data. Auditors find that the tables do not comply with the company's data protection policy.<br>The company's retention policy states that all data must be backed up twice each month: once at midnight on the 15th day of the month and again at midnight on the 25th day of the month. The company must retain the backups for 3 months.<br>Which combination of steps should a security engineer take to meet these requirements? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: CD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#6",
            "answers": [
              {
                "choice": "<p>Use the DynamoDB on-demand backup capability to create a backup plan. Configure a lifecycle policy to expire backups after 3 months.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS DataSync to create a backup plan. Add a backup rule that includes a retention period of 3 months.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS Backup to create a backup plan. Add a backup rule that includes a retention period of 3 months.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Set the backup frequency by using a cron schedule expression. Assign each DynamoDB table to the backup plan.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Set the backup frequency by using a rate schedule expression. Assign each DynamoDB table to the backup plan.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 6 discussion",
        "discusstion": [
          {
            "id": 1100480,
            "date": "Tue 19 Dec 2023 10:45",
            "username": "\t\t\t\ttrashbox\t\t\t",
            "content": "Exam on 2023-12-18",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1095865,
            "date": "Wed 13 Dec 2023 23:10",
            "username": "\t\t\t\tRaphaello\t\t\t",
            "content": "A C<br>What happened to DynamoDB on-demand backup?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>DynamoDB's Backup function is only 0 days ~ 35 days. So, Backup from Outside like Lambda or AWS Backup is fine for this requirement.</li></ul>",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1115514,
            "date": "Sun 07 Jan 2024 01:27",
            "username": "\t\t\t\tHisayuki\t\t\t",
            "content": "DynamoDB's Backup function is only 0 days ~ 35 days. So, Backup from Outside like Lambda or AWS Backup is fine for this requirement.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1087800,
            "date": "Mon 04 Dec 2023 18:32",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "AWS Backup and Cron Job schedule comb. makes sense...",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 1073009,
            "date": "Fri 17 Nov 2023 04:26",
            "username": "\t\t\t\tChristina666\t\t\t",
            "content": "DynamoDB on-demand backup capability to create full backups of your tables for long-term retention and archival for regulatory compliance needs.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 1069056,
            "date": "Mon 13 Nov 2023 07:01",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "A.  the DynamoDB on-demand backup capability creates full backup while the backup plan of 3 months is by AWS Backup.B.  AWS DataSync is for data discovery and migration, not backup DynamoDB. E.  Rate schedule expression is not suitable for fixed date scheduling.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 1056746,
            "date": "Sun 29 Oct 2023 11:30",
            "username": "\t\t\t\timymoco\t\t\t",
            "content": "C and D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1056519,
            "date": "Sun 29 Oct 2023 02:32",
            "username": "\t\t\t\tlalee2\t\t\t",
            "content": "C and D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 1054572,
            "date": "Thu 26 Oct 2023 14:52",
            "username": "\t\t\t\tpupsik\t\t\t",
            "content": "C and D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 1052443,
            "date": "Tue 24 Oct 2023 05:28",
            "username": "\t\t\t\tKR693\t\t\t",
            "content": "C and D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1044342,
            "date": "Sun 15 Oct 2023 19:23",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "https://aws.amazon.com/blogs/database/set-up-scheduled-backups-for-amazon-dynamodb-using-aws-backup/",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 1042528,
            "date": "Fri 13 Oct 2023 11:40",
            "username": "\t\t\t\tPrabhuGr\t\t\t",
            "content": "A and C are the answer.<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/BackupRestore.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#7",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company needs a security engineer to implement a scalable solution for multi-account authentication and authorization. The solution should not introduce additional user-managed architectural components. Native AWS features should be used as much as possible. The security engineer has set up AWS Organizations with all features activated and AWS IAM Identity Center (AWS Single Sign-On) enabled.<br>Which additional steps should the security engineer take to complete the task?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#7",
            "answers": [
              {
                "choice": "<p>Use AD Connector to create users and groups for all employees that require access to AWS accounts. Assign AD Connector groups to AWS accounts and link to the IAM roles in accordance with the employees' job functions and access requirements. Instruct employees to access AWS accounts by using the AWS Directory Service user portal.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use an IAM Identity Center default directory to create users and groups for all employees that require access to AWS accounts. Assign groups to AWS accounts and link to permission sets in accordance with the employees' job functions and access requirements. Instruct employees to access AWS accounts by using the IAM Identity Center user portal.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use an IAM Identity Center default directory to create users and groups for all employees that require access to AWS accounts. Link IAM Identity Center groups to the IAM users present in all accounts to inherit existing permissions. Instruct employees to access AWS accounts by using the IAM Identity Center user portal.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS Directory Service for Microsoft Active Directory to create users and groups for all employees that require access to AWS accounts. Enable AWS Management Console access in the created directory and specify IAM Identity Center as a source of information for integrated accounts and permission sets. Instruct employees to access AWS accounts by using the AWS Directory Service user portal.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 7 discussion",
        "discusstion": [
          {
            "id": 1069064,
            "date": "Mon 13 Nov 2023 07:11",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "A.  AD Connector only provides connectivity, not managing users.C.  IAM users should not need to be created in all accounts - results in admin overhead.assume role instead.D.  Letting end users DIY access in AWS Management Console, AWS Directory Service user portal is not a good idea.",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1056521,
            "date": "Sun 29 Oct 2023 02:34",
            "username": "\t\t\t\tlalee2\t\t\t",
            "content": "https://aws.amazon.com/ko/iam/identity-center/faqs/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1054580,
            "date": "Thu 26 Oct 2023 14:58",
            "username": "\t\t\t\tpupsik\t\t\t",
            "content": "Normally we would use AD Connector to connect to on-premises AD.  But option A doesn't come close to that. Hence option B. ",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1052447,
            "date": "Tue 24 Oct 2023 05:39",
            "username": "\t\t\t\tKR693\t\t\t",
            "content": "Option B",
            "upvote_count": "3",
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
        "question_text": "<p>A company has deployed Amazon GuardDuty and now wants to implement automation for potential threats. The company has decided to start with RDP brute force attacks that come from Amazon EC2 instances in the company's AWS environment. A security engineer needs to implement a solution that blocks the detected communication from a suspicious instance until investigation and potential remediation can occur.<br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#8",
            "answers": [
              {
                "choice": "<p>Configure GuardDuty to send the event to an Amazon Kinesis data stream. Process the event with an Amazon Kinesis Data Analytics for Apache Flink application that sends a notification to the company through Amazon Simple Notification Service (Amazon SNS). Add rules to the network ACL to block traffic to and from the suspicious instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure GuardDuty to send the event to Amazon EventBridge. Deploy an AWS WAF web ACL. Process the event with an AWS Lambda function that sends a notification to the company through Amazon Simple Notification Service (Amazon SNS) and adds a web ACL rule to block traffic to and from the suspicious instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Enable AWS Security Hub to ingest GuardDuty findings and send the event to Amazon EventBridge. Deploy AWS Network Firewall. Process the event with an AWS Lambda function that adds a rule to a Network Firewall firewall policy to block traffic to and from the suspicious instance.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Enable AWS Security Hub to ingest GuardDuty findings. Configure an Amazon Kinesis data stream as an event destination for Security Hub. Process the event with an AWS Lambda function that replaces the security group of the suspicious instance with a security group that does not allow any connections.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 8 discussion",
        "discusstion": [
          {
            "id": 1133446,
            "date": "Sat 27 Jan 2024 16:27",
            "username": "\t\t\t\tawssecuritynewbie\t\t\t",
            "content": "I would go with C, as option D will block any connection to the Ec2 machine, which is not what you want, and security groups are easier and at the endpoint level.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1133228,
            "date": "Sat 27 Jan 2024 11:23",
            "username": "\t\t\t\tmynickc\t\t\t",
            "content": "Here is some basics: WAF protects the port 443 / 80. RDP is different port and nothing to do with Layer 7 nor WAF",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1116241,
            "date": "Mon 08 Jan 2024 00:29",
            "username": "\t\t\t\thappy34\t\t\t",
            "content": "D is the answer.we need identify the best method -tech and cost.implied.WAF is layer 7 prevention . FW is layer 3 - 7.WEB ACL can prevent layer 7.RDP is mostly Layer 7.password guessing etc<br>https://repost.aws/knowledge-center/waf-prevent-brute-force-attacks",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1110926,
            "date": "Mon 01 Jan 2024 02:34",
            "username": "\t\t\t\tbrpjp\t\t\t",
            "content": "Hello, correct my understanding agree with answer C. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1110858,
            "date": "Sun 31 Dec 2023 23:51",
            "username": "\t\t\t\tbrpjp\t\t\t",
            "content": "When GuardDuty is there, do not understand what is requirement to integrate Security Hub.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1110857,
            "date": "Sun 31 Dec 2023 23:48",
            "username": "\t\t\t\tbrpjp\t\t\t",
            "content": "Answer B correct. Requested first scenario of RDP brute force attack. Neither NACL,Network Firewall, and Security Group support to block, only WAF help to block traffic based on pattern.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1099004,
            "date": "Sun 17 Dec 2023 15:46",
            "username": "\t\t\t\t3633f8f\t\t\t",
            "content": "C is the answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1097579,
            "date": "Fri 15 Dec 2023 19:33",
            "username": "\t\t\t\ttulmegusto\t\t\t",
            "content": "itexamstest.com<br><br>no disscusion c :)",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1097506,
            "date": "Fri 15 Dec 2023 18:39",
            "username": "\t\t\t\t3633f8f\t\t\t",
            "content": "To isolate there is nothing more powerful that an ACL at subnet level, which immediately denies traffic in any direction. Wishing to automate, there is no choice to use ACL, as you do not know the exact IP of the source is attacking, thus, you do apply security group restiction.<br><br>The need of Kinesys Data Streams is to process real-time events while happening.<br>A firewall you do not usually automate at his has complex features needs to be set via IaC or console.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Correcting as RDP handles directly in layer 3. C</li></ul>",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1099003,
            "date": "Sun 17 Dec 2023 15:45",
            "username": "\t\t\t\t3633f8f\t\t\t",
            "content": "Correcting as RDP handles directly in layer 3. C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1095975,
            "date": "Thu 14 Dec 2023 03:47",
            "username": "\t\t\t\tRaphaello\t\t\t",
            "content": "C<br>SecurityGroup is a simpler way of isolating a suspicious instance, unlike Network Firewall that is a paid service.<br>EventBridge is needed to relay events to Kinesis Data Stream. At that point, what is the need to Kinesis Data Stream? Lambda function could be invoked directly from EventBridge.<br>For that, I'd go with C. ",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1095839,
            "date": "Wed 13 Dec 2023 22:36",
            "username": "\t\t\t\tRaphaello\t\t\t",
            "content": "C<br>SecurityGroup is a simpler way of isolating a suspicious instance, unlike Network Firewall that is a paid service.<br>EventBridge is needed to relay events to Kinesis Data Stream. At that point, what is the need to Kinesis Data Stream? Lambda function could be invoked directly from EventBridge.<br>For that, I'd go with C. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1095417,
            "date": "Wed 13 Dec 2023 12:28",
            "username": "\t\t\t\tWeepingMaplte\t\t\t",
            "content": "AWS Network Firewall is a better option unless the question wants the most cost-effective method.<br>https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-group-stateful-creating.html#:~:textStateful%20actions.-,To%20define%20IP%20sets%20and%20ports%20as%20variables%20that%20you%20can,variables%20and%20values%20for%20IP%20set%20variables%20and%20Port%20variables.,-To%20add%20one",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1083084,
            "date": "Wed 29 Nov 2023 04:29",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Would go with C since it has asked specifically for automating the security findings... and that's where Security Hub comes into play with EventBridge combination..",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1079741,
            "date": "Sat 25 Nov 2023 06:07",
            "username": "\t\t\t\tmarlonchin\t\t\t",
            "content": "Why network firewall can't block ips in its own security group: I think I will also go with C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1079560,
            "date": "Fri 24 Nov 2023 20:34",
            "username": "\t\t\t\tawssecuritynewbie\t\t\t",
            "content": "so people that are saying to use option C, listen up .<br><br>you are using \\\" web ACL\\\" to block traffic? web ACL is only for HTTP/S so it would note be blocking port 3389... so it cannot be that! the best option so far would be D. <br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option C is NOT webACL. It is using AWS Network Firewall.</li></ul>",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1086489,
            "date": "Sun 03 Dec 2023 01:08",
            "username": "\t\t\t\tmav3r1ck\t\t\t",
            "content": "Option C is NOT webACL. It is using AWS Network Firewall.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 1069094,
            "date": "Mon 13 Nov 2023 07:39",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "Let Guardduty detections be sent to Security Hub as findings is a simple and elegant way.<br>https://docs.aws.amazon.com/guardduty/latest/ug/securityhub-integration.html<br><br>Use eventbridge to respond by invoke Lambda. Amazon Kinesis data stream not needed.<br>https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cloudwatch-events.html<br><br>Suggest to only block specific port 389 against thse suspicious EC2 instance instead of isolate it in a security group, to minimize the impact while it has not been verified as a confirmed attack.",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1064493,
            "date": "Tue 07 Nov 2023 05:46",
            "username": "\t\t\t\tkejam\t\t\t",
            "content": "The wording of the question is vague, but I would go with 'D'.<br>If the suspicious instance is in the same subnet as the target instance the traffic won't route through the network firewall.<br>\\\"When you enable both GuardDuty and Security Hub, the integration is enabled automatically. GuardDuty immediately begins to send findings to Security Hub.\\\"<br>https://docs.aws.amazon.com/guardduty/latest/ug/securityhub-integration.html#securityhub-integration-enable<br><br>\\\"Relaying the event to Amazon Kinesis Data Streams\\\"<br>https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cloudwatch-events.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1058838,
            "date": "Tue 31 Oct 2023 14:58",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "Answer C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1052449,
            "date": "Tue 24 Oct 2023 05:43",
            "username": "\t\t\t\tKR693\t\t\t",
            "content": "Option C",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 1047434,
            "date": "Thu 19 Oct 2023 03:47",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer C",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1027189,
            "date": "Sat 07 Oct 2023 10:14",
            "username": "\t\t\t\tkk2000\t\t\t",
            "content": "C is correct<br>https://aws.amazon.com/blogs/security/automatically-block-suspicious-traffic-with-aws-network-firewall-and-amazon-guardduty/",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 1023656,
            "date": "Tue 03 Oct 2023 08:16",
            "username": "\t\t\t\taragon_saa\t\t\t",
            "content": "https://www.examtopics.com/discussions/amazon/view/88361-exam-aws-certified-security-specialty-topic-1-question-407/",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#9",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an AWS account that hosts a production application. The company receives an email notification that Amazon GuardDuty has detected an Impact:IAMUser/AnomalousBehavior finding in the account. A security engineer needs to run the investigation playbook for this security incident and must collect and analyze the information without affecting the application.<br>Which solution will meet these requirements MOST quickly?</p>",
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
                "choice": "<p>Log in to the AWS account by using read-only credentials. Review the GuardDuty finding for details about the IAM credentials that were used. Use the IAM console to add a DenyAll policy to the IAM principal.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Log in to the AWS account by using read-only credentials. Review the GuardDuty finding to determine which API calls initiated the finding. Use Amazon Detective to review the API calls in context.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Log in to the AWS account by using administrator credentials. Review the GuardDuty finding for details about the IAM credentials that were used. Use the IAM console to add a DenyAll policy to the IAM principal.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Log in to the AWS account by using read-only credentials. Review the GuardDuty finding to determine which API calls initiated the finding. Use AWS CloudTrail Insights and AWS CloudTrail Lake to review the API calls in context.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 9 discussion",
        "discusstion": [
          {
            "id": 1054683,
            "date": "Thu 26 Oct 2023 16:59",
            "username": "\t\t\t\tpupsik\t\t\t",
            "content": "https://aws.amazon.com/blogs/security/how-you-can-use-amazon-guardduty-to-detect-suspicious-activity-within-your-aws-account/#:~:textStart%20an%20investigation%20with%20Amazon%20Detective",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1087920,
            "date": "Mon 04 Dec 2023 20:52",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Option B since Detective is integrated with GuardDuty by native... contrast to option D where Insights and Lake are NA to GuardDuty..",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1073338,
            "date": "Fri 17 Nov 2023 14:27",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "A.  Read-only login should not allow user to add DenyAllPolicy.C.  Add DenyAllPolicy to the principal is very intrusive intervention.D.  Use AWS CloudTrail Insights and AWS CloudTrail Lake are not integrated with GuardDuty (as opposed to AWS Detective) hence it might lack correlationship",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1056526,
            "date": "Sun 29 Oct 2023 02:56",
            "username": "\t\t\t\tlalee2\t\t\t",
            "content": "'Qs says collect and analyze the info' read-only credential is enough. Detective provides API activities.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1052457,
            "date": "Tue 24 Oct 2023 05:51",
            "username": "\t\t\t\tKR693\t\t\t",
            "content": "Option B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1047631,
            "date": "Thu 19 Oct 2023 08:55",
            "username": "\t\t\t\tLunga778\t\t\t",
            "content": "correct answer is be<br>https://aws.amazon.com/blogs/aws/new-aws-cloudtrail-lake-supports-ingesting-activity-events-from-non-aws-sources/<br><br>https://aws.amazon.com/about-aws/whats-new/2019/11/aws-cloudtrail-announces-cloudtrail-insights/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>i mean is D</li></ul>",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1047633,
            "date": "Thu 19 Oct 2023 08:55",
            "username": "\t\t\t\tLunga778\t\t\t",
            "content": "i mean is D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1047440,
            "date": "Thu 19 Oct 2023 03:56",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1044366,
            "date": "Sun 15 Oct 2023 20:09",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "https://aws.amazon.com/blogs/security/how-you-can-use-amazon-guardduty-to-detect-suspicious-activity-within-your-aws-account/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#423",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Company A has an AWS account that is named Account A.  Company A recently acquired Company B, which has an AWS account that is named Account B.  Company B stores its files in an Amazon S3 bucket. The administrators need to give a user from Account A full access to the S3 bucket in Account B. <br><br>After the administrators adjust the IAM permissions for the user in Account A to access the S3 bucket in Account B, the user still cannot access any files in the S3 bucket.<br><br>Which solution will resolve this issue?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#423",
            "answers": [
              {
                "choice": "<p>In Account B, create a bucket ACL to allow the user from Account A to access the S3 bucket in Account B. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>In Account B, create an object ACL to allow the user from Account A to access all the objects in the S3 bucket in Account B. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>In Account B, create a bucket policy to allow the user from Account A to access the S3 bucket in Account B. <br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>In Account B, create a user policy to allow the user from Account A to access the S3 bucket in Account B. <br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 423 discussion",
        "discusstion": [
          {
            "id": 735587,
            "date": "Mon 05 Dec 2022 02:44",
            "username": "\t\t\t\ttainh\t\t\t",
            "content": "C is correct<br>Cross-account access to S3<br>https://aws.amazon.com/premiumsupport/knowledge-center/cross-account-access-s3/",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 885347,
            "date": "Sun 30 Apr 2023 16:53",
            "username": "\t\t\t\tG4Exams\t\t\t",
            "content": "C.  Bucket Policy is still needed in the bucket.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 731703,
            "date": "Wed 30 Nov 2022 16:54",
            "username": "\t\t\t\tkerar\t\t\t",
            "content": "AWS recommends using S3 bucket policies or IAM policies for access control.<br><br>https://aws.amazon.com/blogs/security/iam-policies-and-bucket-policies-and-acls-oh-my-controlling-access-to-s3-resources/",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 724829,
            "date": "Wed 23 Nov 2022 03:08",
            "username": "\t\t\t\tAdamWest\t\t\t",
            "content": "C - Bucket policies are Deny by default.",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#11",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to receive an email notification about critical findings in AWS Security Hub. The company does not have an existing architecture that supports this functionality.<br>Which solution will meet the requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#11",
            "answers": [
              {
                "choice": "<p>Create an AWS Lambda function to identify critical Security Hub findings. Create an Amazon Simple Notification Service (Amazon SNS) topic as the target of the Lambda function. Subscribe an email endpoint to the SNS topic to receive published messages.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Amazon Kinesis Data Firehose delivery stream. Integrate the delivery stream with Amazon EventBridge. Create an EventBridge rule that has a filter to detect critical Security Hub findings. Configure the delivery stream to send the findings to an email address.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Amazon EventBridge rule to detect critical Security Hub findings. Create an Amazon Simple Notification Service (Amazon SNS) topic as the target of the EventBridge rule. Subscribe an email endpoint to the SNS topic to receive published messages.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Amazon EventBridge rule to detect critical Security Hub findings. Create an Amazon Simple Email Service (Amazon SES) topic as the target of the EventBridge rule. Use the Amazon SES API to format the message. Choose an email address to be the recipient of the message.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 11 discussion",
        "discusstion": [
          {
            "id": 1100484,
            "date": "Tue 19 Dec 2023 10:46",
            "username": "\t\t\t\ttrashbox\t\t\t",
            "content": "Exam on 2023-12-18",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1097573,
            "date": "Fri 15 Dec 2023 19:17",
            "username": "\t\t\t\t3633f8f\t\t\t",
            "content": "Marked D is defenitely wrong",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1095855,
            "date": "Wed 13 Dec 2023 23:01",
            "username": "\t\t\t\tRaphaello\t\t\t",
            "content": "C<br>SES? Seriously?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1073853,
            "date": "Sat 18 Nov 2023 08:57",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "To filter for critical only finding:<br><br>https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cwe-all-findings.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1072701,
            "date": "Thu 16 Nov 2023 19:43",
            "username": "\t\t\t\tYR4591\t\t\t",
            "content": "C is right<br>securityhub > eventbridge > sns",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1059651,
            "date": "Wed 01 Nov 2023 12:35",
            "username": "\t\t\t\tKaramen\t\t\t",
            "content": "C is right. confirmed",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1058966,
            "date": "Tue 31 Oct 2023 15:58",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "C is right",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1056593,
            "date": "Sun 29 Oct 2023 06:14",
            "username": "\t\t\t\tlalee2\t\t\t",
            "content": "EventBridge -> SNS is right",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1054689,
            "date": "Thu 26 Oct 2023 17:05",
            "username": "\t\t\t\tpupsik\t\t\t",
            "content": "EventBridge Rule -> SNS -> Email delivery",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1052472,
            "date": "Tue 24 Oct 2023 06:08",
            "username": "\t\t\t\tKR693\t\t\t",
            "content": "Option C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1048326,
            "date": "Fri 20 Oct 2023 04:55",
            "username": "\t\t\t\tjabilrn\t\t\t",
            "content": "I think C is right.<br>I dont believe SES can be the target for Eventbridge",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#12",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An international company has established a new business entity in South Korea. The company also has established a new AWS account to contain the workload for the South Korean region. The company has set up the workload in the new account in the ap-northeast-2 Region. The workload consists of three Auto Scaling groups of Amazon EC2 instances. All workloads that operate in this Region must keep system logs and application logs for 7 years.<br>A security engineer must implement a solution to ensure that no logging data is lost for each instance during scaling activities. The solution also must keep the logs for only the required period of 7 years.<br>Which combination of steps should the security engineer take to meet these requirements? (Choose three.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ABC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#12",
            "answers": [
              {
                "choice": "<p>Ensure that the Amazon CloudWatch agent is installed on all the EC2 instances that the Auto Scaling groups launch. Generate a CloudWatch agent configuration file to forward the required logs to Amazon CloudWatch Logs.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Set the log retention for desired log groups to 7 years.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Attach an IAM role to the launch configuration or launch template that the Auto Scaling groups use. Configure the role to provide the necessary permissions to forward logs to Amazon CloudWatch Logs.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Attach an IAM role to the launch configuration or launch template that the Auto Scaling groups use. Configure the role to provide the necessary permissions to forward logs to Amazon S3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Ensure that a log forwarding application is installed on all the EC2 instances that the Auto Scaling groups launch. Configure the log forwarding application to periodically bundle the logs and forward the logs to Amazon S3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure an Amazon S3 Lifecycle policy on the target S3 bucket to expire objects after 7 years.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 12 discussion",
        "discusstion": [
          {
            "id": 1073854,
            "date": "Sat 18 Nov 2023 09:10",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "As the log data for 7 years will be expensive, use AWS S3 Lifecycle Management to transfer data to lower cost storage class will be more cost effective solution.<br>https://medium.com/avmconsulting-blog/aws-s3-lifecycle-management-1ed2f67c3b73<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I would go for ACF if the asked is \\\"COST-EFFECTIVE\\\" solution. But leaning to ABF, as Cloudwatch logs support up to 10yrs of retention as well. Feel free to disagree if you think I'm wrong.https://docs.aws.amazon.com/managedservices/latest/userguide/log-customize-retention.html</li><li>Agree it should not be ACF but ABC.  ACF does not explain how cloudwatch log end s up in s3. (seems that it requires a lambda function to automate)<br>In fact, if S3 is the chosen path then it can only be DEF for consistency.But this combination assume that s3 bucket policy has been configured and the log forwarding application configured can reliably send all logs data without losing any.</li></ul>",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: ACF"
          },
          {
            "id": 1089523,
            "date": "Wed 06 Dec 2023 17:11",
            "username": "\t\t\t\tmav3r1ck\t\t\t",
            "content": "I would go for ACF if the asked is \\\"COST-EFFECTIVE\\\" solution. But leaning to ABF, as Cloudwatch logs support up to 10yrs of retention as well. Feel free to disagree if you think I'm wrong.https://docs.aws.amazon.com/managedservices/latest/userguide/log-customize-retention.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Agree it should not be ACF but ABC.  ACF does not explain how cloudwatch log end s up in s3. (seems that it requires a lambda function to automate)<br>In fact, if S3 is the chosen path then it can only be DEF for consistency.But this combination assume that s3 bucket policy has been configured and the log forwarding application configured can reliably send all logs data without losing any.</li></ul>",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1110957,
            "date": "Mon 01 Jan 2024 04:53",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "Agree it should not be ACF but ABC.  ACF does not explain how cloudwatch log end s up in s3. (seems that it requires a lambda function to automate)<br>In fact, if S3 is the chosen path then it can only be DEF for consistency.But this combination assume that s3 bucket policy has been configured and the log forwarding application configured can reliably send all logs data without losing any.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1059666,
            "date": "Wed 01 Nov 2023 12:48",
            "username": "\t\t\t\tKaramen\t\t\t",
            "content": "ABC<br><br>there isn't good option to forwarding log from EC2 to S3 bucket.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 1056596,
            "date": "Sun 29 Oct 2023 06:34",
            "username": "\t\t\t\tlalee2\t\t\t",
            "content": "CloudWatch agent -> CloudWatch Logs, IAM role to launch template -> CloudWatch Logs",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: ABC"
          },
          {
            "id": 1054691,
            "date": "Thu 26 Oct 2023 17:08",
            "username": "\t\t\t\tpupsik\t\t\t",
            "content": "ABC it is.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: ABC"
          },
          {
            "id": 1052480,
            "date": "Tue 24 Oct 2023 06:16",
            "username": "\t\t\t\tKR693\t\t\t",
            "content": "A, B and C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1047453,
            "date": "Thu 19 Oct 2023 04:07",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer ABC",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: ABC"
          },
          {
            "id": 1024272,
            "date": "Wed 04 Oct 2023 01:10",
            "username": "\t\t\t\taragon_saa\t\t\t",
            "content": "https://www.examtopics.com/discussions/amazon/view/89514-exam-aws-certified-security-specialty-topic-1-question-451/",
            "upvote_count": "2",
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
        "question_text": "<p>A security engineer is designing an IAM policy to protect AWS API operations. The policy must enforce multi-factor authentication (MFA) for IAM users to access certain services in the AWS production account. Each session must remain valid for only 2 hours. The current version of the IAM policy is as follows:<br><img title=\"image1\" src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image1.png\"><br>Which combination of conditions must the security engineer add to the IAM policy to meet these requirements? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#13",
            "answers": [
              {
                "choice": "<p>\"Bool\": {\"aws:MultiFactorAuthPresent\": \"true\"}<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>\"Bool\": {\"aws:MultiFactorAuthPresent\": \"false\"}<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>\"NumericLessThan\": {\"aws:MultiFactorAuthAge\": \"7200\"}<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>\"NumericGreaterThan\": {\"aws:MultiFactorAuthAge\": \"7200\"}<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>\"NumericLessThan\": {\"MaxSessionDuration\": \"7200\"}<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 13 discussion",
        "discusstion": [
          {
            "id": 1027207,
            "date": "Sat 07 Oct 2023 10:57",
            "username": "\t\t\t\tkk2000\t\t\t",
            "content": "Correct Answer is AC",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 1122541,
            "date": "Sun 14 Jan 2024 14:20",
            "username": "\t\t\t\tmtzanida\t\t\t",
            "content": "A and C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 1095654,
            "date": "Wed 13 Dec 2023 17:37",
            "username": "\t\t\t\tRaphaello\t\t\t",
            "content": "AC<br>Action is ALLOW..as long as the auth. age is LESS 7200 seconds.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1073857,
            "date": "Sat 18 Nov 2023 09:23",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_configure-api-require.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 1065310,
            "date": "Wed 08 Nov 2023 05:08",
            "username": "\t\t\t\tkejam\t\t\t",
            "content": "A and C<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_configure-api-require.html#MFAProtectedAPI-overview",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 1056606,
            "date": "Sun 29 Oct 2023 06:59",
            "username": "\t\t\t\tlalee2\t\t\t",
            "content": "A and C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 1053097,
            "date": "Tue 24 Oct 2023 20:42",
            "username": "\t\t\t\tdenied\t\t\t",
            "content": "A and C",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 1052496,
            "date": "Tue 24 Oct 2023 06:33",
            "username": "\t\t\t\tKR693\t\t\t",
            "content": "A and C",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#14",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company uses AWS Organizations and has production workloads across multiple AWS accounts. A security engineer needs to design a solution that will proactively monitor for suspicious behavior across all the accounts that contain production workloads.<br>The solution must automate remediation of incidents across the production accounts. The solution also must publish a notification to an Amazon Simple Notification Service (Amazon SNS) topic when a critical security finding is detected. In addition, the solution must send all security incident logs to a dedicated account.<br>Which solution will meet these requirements?</p>",
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
                "choice": "<p>Activate Amazon GuardDuty in each production account. In a dedicated logging account, aggregate all GuardDuty logs from each production account. Remediate incidents by configuring GuardDuty to directly invoke an AWS Lambda function. Configure the Lambda function to also publish notifications to the SNS topic.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Activate AWS Security Hub in each production account. In a dedicated logging account, aggregate all Security Hub findings from each production account. Remediate incidents by using AWS Config and AWS Systems Manager. Configure Systems Manager to also publish notifications to the SNS topic.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Activate Amazon GuardDuty in each production account. In a dedicated logging account, aggregate all GuardDuty logs from each production account. Remediate incidents by using Amazon EventBridge to invoke a custom AWS Lambda function from the GuardDuty findings. Configure the Lambda function to also publish notifications to the SNS topic.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Activate AWS Security Hub in each production account. In a dedicated logging account, aggregate all Security Hub findings from each production account. Remediate incidents by using Amazon EventBridge to invoke a custom AWS Lambda function from the Security Hub findings. Configure the Lambda function to also publish notifications to the SNS topic.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 14 discussion",
        "discusstion": [
          {
            "id": 1095638,
            "date": "Wed 13 Dec 2023 17:19",
            "username": "\t\t\t\tRaphaello\t\t\t",
            "content": "Best answer is C<br>One would not need SecurityHub to launch a response to GuardDuty finding.<br>SecurityHub is security posture management tool, but without it GuardDuty can still responds to findings.<br><br>https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1073873,
            "date": "Sat 18 Nov 2023 10:10",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "Security Hub by itself does not detect suspicious activity, but GuardDuty.<br>Eventbridge rule is required to trigger remediation actions and SNS topic.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1059083,
            "date": "Tue 31 Oct 2023 18:35",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "SecurityHub checks posture. GuardDuty monitors for malicious activity.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1059079,
            "date": "Tue 31 Oct 2023 18:34",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "It's C. <br>SecurityHub checks posture. GuardDuty monitors for malicious activity.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1056611,
            "date": "Sun 29 Oct 2023 07:16",
            "username": "\t\t\t\tlalee2\t\t\t",
            "content": "Option C responds to all requirements; automate remediation, notification via SNS, send logs to a dedicated account",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1055112,
            "date": "Fri 27 Oct 2023 06:44",
            "username": "\t\t\t\tbhui\t\t\t",
            "content": "I would say it is C as Guardduty must be turned on even for the security hub options. Also you can aggregate GuardDuty Findings and trigger Events.<br>https://aws.amazon.com/blogs/security/how-to-manage-amazon-guardduty-security-findings-across-multiple-accounts/<br>https://repost.aws/knowledge-center/guardduty-eventbridge-sns-rule",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 1054777,
            "date": "Thu 26 Oct 2023 18:55",
            "username": "\t\t\t\tpupsik\t\t\t",
            "content": "Agree, it is C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1052500,
            "date": "Tue 24 Oct 2023 06:39",
            "username": "\t\t\t\tKR693\t\t\t",
            "content": "Option C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1051923,
            "date": "Mon 23 Oct 2023 15:55",
            "username": "\t\t\t\tSumi81\t\t\t",
            "content": "Answer is C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1047893,
            "date": "Thu 19 Oct 2023 14:30",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer C<br>https://www.youtube.com/watch?vRGNMkhaT_GY",
            "upvote_count": "2",
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
        "question_text": "<p>A company is designing a multi-account structure for its development teams. The company is using AWS Organizations and AWS IAM Identity Center (AWS Single Sign-On). The company must implement a solution so that the development teams can use only specific AWS Regions and so that each AWS account allows access to only specific AWS services.<br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
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
                "choice": "<p>Use IAM Identity Center to set up service-linked roles with IAM policy statements that include the Condition, Resource, and NotAction elements to allow access to only the Regions and services that are needed.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Deactivate AWS Security Token Service (AWS STS) in Regions that the developers are not allowed to use.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create SCPs that include the Condition, Resource, and NotAction elements to allow access to only the Regions and services that are needed.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>For each AWS account, create tailored identity-based policies for IAM Identity Center. Use statements that include the Condition, Resource, and NotAction elements to allow access to only the Regions and services that are needed.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 15 discussion",
        "discusstion": [
          {
            "id": 1139089,
            "date": "Sat 03 Feb 2024 09:32",
            "username": "\t\t\t\thabros\t\t\t",
            "content": "C.  If AWS organizations is enabled, why not take advantage of region deny feature? SCP is the actual mechanism to enforce this rule!",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1133300,
            "date": "Sat 27 Jan 2024 12:43",
            "username": "\t\t\t\tmynickc\t\t\t",
            "content": "C is wrong becoz notaction, resource & condition can support deny only. https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_syntax.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1115314,
            "date": "Sat 06 Jan 2024 17:47",
            "username": "\t\t\t\tSab31\t\t\t",
            "content": "C seems a good option but can someone share if SCPs can have \\\"NotAction\\\" element?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1095097,
            "date": "Wed 13 Dec 2023 03:56",
            "username": "\t\t\t\tRaphaello\t\t\t",
            "content": "Correct answer is C. <br>SCP to control which organization node can operate on which region(s).",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1073877,
            "date": "Sat 18 Nov 2023 10:21",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_general.html#example-scp-deny-region",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1056616,
            "date": "Sun 29 Oct 2023 07:34",
            "username": "\t\t\t\tlalee2\t\t\t",
            "content": "Under Organization SCP is the least operational overhead.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1052510,
            "date": "Tue 24 Oct 2023 06:48",
            "username": "\t\t\t\tKR693\t\t\t",
            "content": "Option C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1051926,
            "date": "Mon 23 Oct 2023 15:58",
            "username": "\t\t\t\tSumi81\t\t\t",
            "content": "C is right",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1047898,
            "date": "Thu 19 Oct 2023 14:33",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Agree answer C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1024273,
            "date": "Wed 04 Oct 2023 01:12",
            "username": "\t\t\t\taragon_saa\t\t\t",
            "content": "https://www.examtopics.com/discussions/amazon/view/88434-exam-aws-certified-security-specialty-topic-1-question-431/",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#16",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is developing an ecommerce application. The application uses Amazon EC2 instances and an Amazon RDS MySQL database. For compliance reasons, data must be secured in transit and at rest. The company needs a solution that minimizes operational overhead and minimizes cost.<br>Which solution meets these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#16",
            "answers": [
              {
                "choice": "<p>Use TLS certificates from AWS Certificate Manager (ACM) with an Application Load Balancer. Deploy self-signed certificates on the EC2 instances. Ensure that the database client software uses a TLS connection to Amazon RDS. Enable encryption of the RDS DB instance. Enable encryption on the Amazon Elastic Block Store (Amazon EBS) volumes that support the EC2 instances.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use TLS certificates from a third-party vendor with an Application Load Balancer. Install the same certificates on the EC2 instances. Ensure that the database client software uses a TLS connection to Amazon RDS. Use AWS Secrets Manager for client-side encryption of application data.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS CloudHSM to generate TLS certificates for the EC2 instances. Install the TLS certificates on the EC2 instances. Ensure that the database client software uses a TLS connection to Amazon RDS. Use the encryption keys from CloudHSM for client-side encryption of application data.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use Amazon CloudFront with AWS WAF.  Send HTTP connections to the origin EC2 instances. Ensure that the database client software uses a TLS connection to Amazon RDS. Use AWS Key Management Service (AWS KMS) for client-side encryption of application data before the data is stored in the RDS database.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 16 discussion",
        "discusstion": [
          {
            "id": 1135338,
            "date": "Mon 29 Jan 2024 22:53",
            "username": "\t\t\t\tawssecuritynewbie\t\t\t",
            "content": "Non of them talk about the encryption at rest for the EBS apart from Option A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1097612,
            "date": "Fri 15 Dec 2023 19:51",
            "username": "\t\t\t\t3633f8f\t\t\t",
            "content": "TLS In-Flight encryption is core funcitionality of ACM. Others are invalidated based on this.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1073882,
            "date": "Sat 18 Nov 2023 10:34",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "Only A address data encryption at rest at RDS and EBS and is the most cost-effective and efficient method.<br>TLS certificates from a third-party vendor or generated by CloudHSM is unnecessarily increase cost and ops overhead.<br>CloudFront with WAF is irrelevant to the requirement.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1059117,
            "date": "Tue 31 Oct 2023 18:55",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "Answer A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1056627,
            "date": "Sun 29 Oct 2023 07:54",
            "username": "\t\t\t\tlalee2\t\t\t",
            "content": "Option A talks about ACM which is encryption in transit",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1054782,
            "date": "Thu 26 Oct 2023 19:00",
            "username": "\t\t\t\tpupsik\t\t\t",
            "content": "Option A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1052535,
            "date": "Tue 24 Oct 2023 07:12",
            "username": "\t\t\t\tKR693\t\t\t",
            "content": "Option A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1051932,
            "date": "Mon 23 Oct 2023 16:01",
            "username": "\t\t\t\tSumi81\t\t\t",
            "content": "A.  No other solution talks about encryption at rest",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1047904,
            "date": "Thu 19 Oct 2023 14:38",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Agree answer A. <br>TLS certificates from (ACM) secures data in transit",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1024274,
            "date": "Wed 04 Oct 2023 01:12",
            "username": "\t\t\t\taragon_saa\t\t\t",
            "content": "https://www.examtopics.com/discussions/amazon/view/60895-exam-aws-certified-security-specialty-topic-1-question-265/",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#17",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A security engineer is working with a company to design an ecommerce application. The application will run on Amazon EC2 instances that run in an Auto Scaling group behind an Application Load Balancer (ALB). The application will use an Amazon RDS DB instance for its database.<br>The only required connectivity from the internet is for HTTP and HTTPS traffic to the application. The application must communicate with an external payment provider that allows traffic only from a preconfigured allow list of IP addresses. The company must ensure that communications with the external payment provider are not interrupted as the environment scales.<br>Which combination of actions should the security engineer recommend to meet these requirements? (Choose three.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ACE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#17",
            "answers": [
              {
                "choice": "<p>Deploy a NAT gateway in each private subnet for every Availability Zone that is in use.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Place the DB instance in a public subnet.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Place the DB instance in a private subnet.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Configure the Auto Scaling group to place the EC2 instances in a public subnet.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure the Auto Scaling group to place the EC2 instances in a private subnet.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Deploy the ALB in a private subnet.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 17 discussion",
        "discusstion": [
          {
            "id": 1095848,
            "date": "Wed 13 Dec 2023 22:51",
            "username": "\t\t\t\tRaphaello\t\t\t",
            "content": "Keyword: \\\" preconfigured allow list of IP addresses\\\"<br>However, the question missed an important detail alongside these keywords..that the communication has to be routed to a VPN and through a virtual private gateway (VGW).<br>That's the only reason you can place NAT GW in a private subnet.<br>Without that piece of detail, placing NAT GW seems unreasonable.<br>Poorly written question, but if you considered that, A C E would make sense.<br><br>https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-scenarios.html#private-nat-allowed-range",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1073958,
            "date": "Sat 18 Nov 2023 12:34",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "C and E are definitely correct.<br>A is confusing because NAT gateway should be created in public subnets. It should be referring to created *for each private subnets instead.<br>F is wrong because ALB should be in public subnet.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>There is private NAT gateway as well, but I'm not sure if private NAT gateway is deployed to public or private subnet.<br><br>https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html<br>Private =E2=80=93 Instances in private subnets can connect to other VPCs or your on-premises network through a private NAT gateway. You can route traffic from the NAT gateway through a transit gateway or a virtual private gateway. You cannot associate an elastic IP address with a private NAT gateway. You can attach an internet gateway to a VPC with a private NAT gateway, but if you route traffic from the private NAT gateway to the internet gateway, the internet gateway drops the traffic.</li></ul>",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: ACE"
          },
          {
            "id": 1093019,
            "date": "Mon 11 Dec 2023 03:35",
            "username": "\t\t\t\tconfusedyeti69\t\t\t",
            "content": "There is private NAT gateway as well, but I'm not sure if private NAT gateway is deployed to public or private subnet.<br><br>https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html<br>Private =E2=80=93 Instances in private subnets can connect to other VPCs or your on-premises network through a private NAT gateway. You can route traffic from the NAT gateway through a transit gateway or a virtual private gateway. You cannot associate an elastic IP address with a private NAT gateway. You can attach an internet gateway to a VPC with a private NAT gateway, but if you route traffic from the private NAT gateway to the internet gateway, the internet gateway drops the traffic.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1059131,
            "date": "Tue 31 Oct 2023 19:19",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "A,C and E, except that NAT gateways are created in public subnets, so that private subnets can reach the Internet. Option A is worded wrong.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: ACE"
          },
          {
            "id": 1056630,
            "date": "Sun 29 Oct 2023 08:00",
            "username": "\t\t\t\tlalee2\t\t\t",
            "content": "A, C, E",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: ACE"
          },
          {
            "id": 1052550,
            "date": "Tue 24 Oct 2023 07:27",
            "username": "\t\t\t\tKR693\t\t\t",
            "content": "A, C and E",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1051953,
            "date": "Mon 23 Oct 2023 16:18",
            "username": "\t\t\t\tSumi81\t\t\t",
            "content": "I think its ACD",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1047910,
            "date": "Thu 19 Oct 2023 14:45",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer ACE",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: ACE"
          },
          {
            "id": 1023660,
            "date": "Tue 03 Oct 2023 08:20",
            "username": "\t\t\t\taragon_saa\t\t\t",
            "content": "https://www.examtopics.com/discussions/amazon/view/69095-exam-aws-certified-security-specialty-topic-1-question-299/",
            "upvote_count": "4",
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
        "question_text": "<p>A company uses several AWS CloudFormation stacks to handle the deployment of a suite of applications. The leader of the company's application development team notices that the stack deployments fail with permission errors when some team members try to deploy the stacks. However, other team members can deploy the stacks successfully.<br>The team members access the account by assuming a role that has a specific set of permissions that are necessary for the job responsibilities of the team members. All team members have permissions to perform operations on the stacks.<br>Which combination of steps will ensure consistent deployment of the stacks MOST securely? (Choose three.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BDF</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#18",
            "answers": [
              {
                "choice": "<p>Create a service role that has a composite principal that contains each service that needs the necessary permissions. Configure the role to allow the sts:AssumeRole action.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a service role that has cloudformation.amazonaws.com as the service principal. Configure the role to allow the sts:AssumeRole action.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>For each required set of permissions, add a separate policy to the role to allow those permissions. Add the ARN of each CloudFormation stack in the resource field of each policy.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>For each required set of permissions, add a separate policy to the role to allow those permissions. Add the ARN of each service that needs the permissions in the resource field of the corresponding policy.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Update each stack to use the service role.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Add a policy to each member role to allow the iam:PassRole action. Set the policy's resource field to the ARN of the service role.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 18 discussion",
        "discusstion": [
          {
            "id": 1134239,
            "date": "Sun 28 Jan 2024 16:46",
            "username": "\t\t\t\tmynickc\t\t\t",
            "content": "I took the exam today (Jan/28) and the choices E & F are two separate as per this question. In some of the comments, it was mentioned that E&F are considered as one choice.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1110949,
            "date": "Mon 01 Jan 2024 04:06",
            "username": "\t\t\t\tbrpjp\t\t\t",
            "content": "Yes, Correct answer is B D F, based on numbers of linked already provided and passrole from ChatGpt.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1100112,
            "date": "Tue 19 Dec 2023 00:28",
            "username": "\t\t\t\tWeepingMaplte\t\t\t",
            "content": "Ans: B D F. <br>In Cloud formation, you select the required role during a new creation.The team members will deploy using the new role. updating the current stacks is not a priority as compared to IAM:PassRole.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 1095962,
            "date": "Thu 14 Dec 2023 03:30",
            "username": "\t\t\t\tRaphaello\t\t\t",
            "content": "B D E<br><br>To be able to update each stack to use the service role (E), user needs to be able to pass the role using iam:PassRole (F).<br>But it is done once.<br><br>I would go with E along side B & D. ",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1095150,
            "date": "Wed 13 Dec 2023 06:28",
            "username": "\t\t\t\tvincentsr7\t\t\t",
            "content": "why not A , dont we need a composite principal",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1074398,
            "date": "Sun 19 Nov 2023 03:01",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "B,D and F. <br>https://blog.awsfundamentals.com/aws-cloudformation-execution-permissions<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Consider this article to justify F: passrole is needed so that team member who has limited permission by their own role, can run the stack using service role's permissions.<br>https://medium.com/@sapna.mandhare/demystifying-iam-passrole-permission-d62a2dc69778</li></ul>",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 1110965,
            "date": "Mon 01 Jan 2024 06:01",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "Consider this article to justify F: passrole is needed so that team member who has limited permission by their own role, can run the stack using service role's permissions.<br>https://medium.com/@sapna.mandhare/demystifying-iam-passrole-permission-d62a2dc69778",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1069019,
            "date": "Mon 13 Nov 2023 05:24",
            "username": "\t\t\t\tCiara123456\t\t\t",
            "content": "BDF, https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-servicerole.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 1065490,
            "date": "Wed 08 Nov 2023 10:28",
            "username": "\t\t\t\tLunga778\t\t\t",
            "content": "B D AndF",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1059697,
            "date": "Wed 01 Nov 2023 13:44",
            "username": "\t\t\t\tKaramen\t\t\t",
            "content": "BEF<br>- Create a CloudFormation service role<br>- Update your stack using the role when deploying<br>- ensure iam:passrole<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-servicerole.html</li></ul>",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1059698,
            "date": "Wed 01 Nov 2023 13:44",
            "username": "\t\t\t\tKaramen\t\t\t",
            "content": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-servicerole.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1059603,
            "date": "Wed 01 Nov 2023 11:45",
            "username": "\t\t\t\tChristina666\t\t\t",
            "content": "BDF<br>By creating a service role specifically for AWS CloudFormation, you can limit the permissions to just what CloudFormation needs, and this reduces the risk of excessive permissions or accidental permission conflicts.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 1059292,
            "date": "Wed 01 Nov 2023 02:07",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "B, D, E & F (E&F show up as a single option?)<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/least-privilege-cloudformation/service-roles-for-cloudformation.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BDE"
          },
          {
            "id": 1052579,
            "date": "Tue 24 Oct 2023 07:57",
            "username": "\t\t\t\tKR693\t\t\t",
            "content": "B, D and F",
            "upvote_count": "1",
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
        "question_text": "<p>A company used a lift-and-shift approach to migrate from its on-premises data centers to the AWS Cloud. The company migrated on-premises VMs to Amazon EC2 instances. Now the company wants to replace some of components that are running on the EC2 instances with managed AWS services that provide similar functionality.<br>Initially, the company will transition from load balancer software that runs on EC2 instances to AWS Elastic Load Balancers. A security engineer must ensure that after this transition, all the load balancer logs are centralized and searchable for auditing. The security engineer must also ensure that metrics are generated to show which ciphers are in use.<br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#19",
            "answers": [
              {
                "choice": "<p>Create an Amazon CloudWatch Logs log group. Configure the load balancers to send logs to the log group. Use the CloudWatch Logs console to search the logs. Create CloudWatch Logs filters on the logs for the required metrics.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Amazon S3 bucket. Configure the load balancers to send logs to the S3 bucket. Use Amazon Athena to search the logs that are in the S3 bucket. Create Amazon CloudWatch filters on the S3 log files for the required metrics.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Amazon S3 bucket. Configure the load balancers to send logs to the S3 bucket. Use Amazon Athena to search the logs that are in the S3 bucket. Create Athena queries for the required metrics. Publish the metrics to Amazon CloudWatch.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Amazon CloudWatch Logs log group. Configure the load balancers to send logs to the log group. Use the AWS Management Console to search the logs. Create Amazon Athena queries for the required metrics. Publish the metrics to Amazon CloudWatch.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 19 discussion",
        "discusstion": [
          {
            "id": 1076364,
            "date": "Tue 21 Nov 2023 15:23",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-cloudwatch-metrics.html#view-metric-data<br>s3 buckets and athena are not needed.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No, if you look at the reqs. of this question, it specifically asks for this query:<br>\\\"All the load balancer logs are centralized and searchable for auditing\\\"..<br>So if you select A for CloudWatch Log groups, it has the default retention policy set. After which it will clear off all the saved logs!... so how would you be able to do the audit on the logs after 14 days lets say??<br>That's why I'm going with Option C here..</li><li>By default, cloudWatch log retention is indefinite unless you set it to limited duration due to audit requirement.<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html#SettingLogRetention</li><li>However i tend to agree it is C after reviewing this qn: enable access log can keep logs in s3 where you can search for ssl_cipher string using SQL like query:<br>https://docs.aws.amazon.com/athena/latest/ug/application-load-balancer-logs.html<br>you can indeed publish athena query metrics to cloudwatch by enabling the option.<br>https://docs.aws.amazon.com/athena/latest/ug/query-metrics-viewing.html</li></ul>",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1083117,
            "date": "Wed 29 Nov 2023 06:00",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "No, if you look at the reqs. of this question, it specifically asks for this query:<br>\\\"All the load balancer logs are centralized and searchable for auditing\\\"..<br>So if you select A for CloudWatch Log groups, it has the default retention policy set. After which it will clear off all the saved logs!... so how would you be able to do the audit on the logs after 14 days lets say??<br>That's why I'm going with Option C here..<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>By default, cloudWatch log retention is indefinite unless you set it to limited duration due to audit requirement.<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html#SettingLogRetention</li><li>However i tend to agree it is C after reviewing this qn: enable access log can keep logs in s3 where you can search for ssl_cipher string using SQL like query:<br>https://docs.aws.amazon.com/athena/latest/ug/application-load-balancer-logs.html<br>you can indeed publish athena query metrics to cloudwatch by enabling the option.<br>https://docs.aws.amazon.com/athena/latest/ug/query-metrics-viewing.html</li></ul>",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1110984,
            "date": "Mon 01 Jan 2024 07:40",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "By default, cloudWatch log retention is indefinite unless you set it to limited duration due to audit requirement.<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html#SettingLogRetention",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1110986,
            "date": "Mon 01 Jan 2024 07:46",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "However i tend to agree it is C after reviewing this qn: enable access log can keep logs in s3 where you can search for ssl_cipher string using SQL like query:<br>https://docs.aws.amazon.com/athena/latest/ug/application-load-balancer-logs.html<br>you can indeed publish athena query metrics to cloudwatch by enabling the option.<br>https://docs.aws.amazon.com/athena/latest/ug/query-metrics-viewing.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1126176,
            "date": "Thu 18 Jan 2024 21:35",
            "username": "\t\t\t\tsmanzana\t\t\t",
            "content": "A or C?? I choose C because I think that AWS ELB cant send logs to CloudWatch",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1126149,
            "date": "Thu 18 Jan 2024 20:53",
            "username": "\t\t\t\tGafa255\t\t\t",
            "content": "ELB cant send log to CloudWatch.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1100486,
            "date": "Tue 19 Dec 2023 10:48",
            "username": "\t\t\t\ttrashbox\t\t\t",
            "content": "Exam on 2023-12-18",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1095093,
            "date": "Wed 13 Dec 2023 03:53",
            "username": "\t\t\t\tRaphaello\t\t\t",
            "content": "Correct Answer is B. <br>We're talking about ELB access logs, not metrics, which always get forwarded to S3 bucket.<br>From there one can use Athena for SQL querying.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1059331,
            "date": "Wed 01 Nov 2023 03:48",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "Answer is C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1056650,
            "date": "Sun 29 Oct 2023 08:52",
            "username": "\t\t\t\tlalee2\t\t\t",
            "content": "I think C is right",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1054796,
            "date": "Thu 26 Oct 2023 19:24",
            "username": "\t\t\t\tpupsik\t\t\t",
            "content": "Agree with C. ",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1054232,
            "date": "Thu 26 Oct 2023 04:02",
            "username": "\t\t\t\tbhui\t\t\t",
            "content": "The Correct Answer should be C. <br>A,D is wrong as - ELB cannot publish log directly to CloudWatch Log.<br>B is wrong as - CloudWatch filter on S3 is not available. The filter is for CloudWatch Log.Instead you can publish query-related metrics to CloudWatch with custom widget https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/add_custom_widget_samples.html",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1053347,
            "date": "Wed 25 Oct 2023 03:09",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Thinking also A<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Correction to answer C. </li></ul>",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1064179,
            "date": "Mon 06 Nov 2023 20:03",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Correction to answer C. ",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1051959,
            "date": "Mon 23 Oct 2023 16:24",
            "username": "\t\t\t\tSumi81\t\t\t",
            "content": "I think A",
            "upvote_count": "1",
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
        "question_text": "<p>A company uses AWS Organizations to manage a multi-account AWS environment in a single AWS Region. The organization's management account is named management-01. The company has turned on AWS Config in all accounts in the organization. The company has designated an account named security-01 as the delegated administrator for AWS Config.<br>All accounts report the compliance status of each account's rules to the AWS Config delegated administrator account by using an AWS Config aggregator. Each account administrator can configure and manage the account's own AWS Config rules to handle each account's unique compliance requirements.<br>A security engineer needs to implement a solution to automatically deploy a set of 10 AWS Config rules to all existing and future AWS accounts in the organization. The solution must turn on AWS Config automatically during account creation.<br>Which combination of steps will meet these requirements? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#20",
            "answers": [
              {
                "choice": "<p>Create an AWS CloudFormation template that contains the 10 required AWS Config rules. Deploy the template by using CloudFormation StackSets in the security-01 account.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a conformance pack that contains the 10 required AWS Config rules. Deploy the conformance pack from the security-01 account.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create a conformance pack that contains the 10 required AWS Config rules. Deploy the conformance pack from the management-01 account.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an AWS CloudFormation template that will activate AWS Config. Deploy the template by using CloudFormation StackSets in the security-01 account.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an AWS CloudFormation template that will activate AWS Config. Deploy the template by using CloudFormation StackSets in the management-01 account.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 20 discussion",
        "discusstion": [
          {
            "id": 1074301,
            "date": "Sat 18 Nov 2023 22:45",
            "username": "\t\t\t\tChristina666\t\t\t",
            "content": "Use management account to delegate accounts for auditing, security or compliance, then use delegated account to deploy conformance packs",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 1111035,
            "date": "Mon 01 Jan 2024 09:25",
            "username": "\t\t\t\tDaibin\t\t\t",
            "content": "I'd go with B and E<br>https://aws.amazon.com/blogs/mt/using-delegated-admin-for-aws-config-operations-and-aggregation/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1100487,
            "date": "Tue 19 Dec 2023 10:49",
            "username": "\t\t\t\ttrashbox\t\t\t",
            "content": "Exam on 2023-12-18",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1095112,
            "date": "Wed 13 Dec 2023 04:29",
            "username": "\t\t\t\tRaphaello\t\t\t",
            "content": "\\\"security-01 account\\\" is a delegated administrator account, so let's agree that either Cfn stacksets or Config rules will be deployed from this account.<br>Now, since there are multiple accounts, deploying AWS Config rules (conformance pack) would be through CloudFormation template/stackset.<br>AD seems right choices for me, albeit B is not wrong but it misses the deployment part of Config rules.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1077904,
            "date": "Wed 22 Nov 2023 23:51",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "I go with B and E. <br>https://aws.amazon.com/blogs/mt/deploying-conformance-packs-across-an-organization-with-automatic-remediation/<br>Delegated administrator for AWS Organizations<br>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_delegate_policies.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 1074425,
            "date": "Sun 19 Nov 2023 04:13",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "I'd probably go with C and E since the AWS documentation shows that it's only the management account from where the CFN stack can be deployed at along with the Conformance Packs which can also be deployed at the Management/Master account level.<br>But pls. correct me if I understood it incorrectly somewhere... Thnx!",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CE"
          },
          {
            "id": 1074422,
            "date": "Sun 19 Nov 2023 04:04",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "https://aws.amazon.com/blogs/mt/deploying-conformance-packs-across-an-organization-with-automatic-remediation/<br><br>From the source above, it looks like the Conformance Packs can be setup only by the Master Account (Which probably in this usecase, it's the Management account I guess).<br><br>\\\"These conformance packs and their underlying config rules and remediations actions are not modifiable by your organization's member accounts. Only master accounts can create, update, and delete organization conformance packs.\\\"<br><br>Still confused as to why we've the Security-01 account setup as the AWS Config Delegated administrator for all the member accounts?..",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1059336,
            "date": "Wed 01 Nov 2023 04:08",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "B and E",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 1056656,
            "date": "Sun 29 Oct 2023 09:07",
            "username": "\t\t\t\tlalee2\t\t\t",
            "content": "B and E.  Conformance should be set up in admin account but in the question it says 'security-01 as the delegated administrator for AWS Config'. I would pick B and E here.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 1054882,
            "date": "Thu 26 Oct 2023 21:53",
            "username": "\t\t\t\tpupsik\t\t\t",
            "content": "Agree with @bhui.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 1054233,
            "date": "Thu 26 Oct 2023 04:08",
            "username": "\t\t\t\tbhui\t\t\t",
            "content": "Should be BE<br>https://aws.amazon.com/blogs/mt/deploying-conformance-packs-across-an-organization-with-automatic-remediation/<br>B as security account is the AWS Config delegated admin<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Supplementing my thoughts with this blog.<br>https://aws.amazon.com/blogs/mt/org-aggregator-delegated-admin/<br>1. To enable AWS Config access to AWS Organizations<br>- Run the following command from your organization management account:<br>2. To set up an aggregator using delegated admin</li></ul>",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 1055113,
            "date": "Fri 27 Oct 2023 06:49",
            "username": "\t\t\t\tbhui\t\t\t",
            "content": "Supplementing my thoughts with this blog.<br>https://aws.amazon.com/blogs/mt/org-aggregator-delegated-admin/<br>1. To enable AWS Config access to AWS Organizations<br>- Run the following command from your organization management account:<br>2. To set up an aggregator using delegated admin",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 1051967,
            "date": "Mon 23 Oct 2023 16:29",
            "username": "\t\t\t\tSumi81\t\t\t",
            "content": "CE<br>https://aws.amazon.com/blogs/mt/deploying-conformance-packs-across-an-organization-with-automatic-remediation/",
            "upvote_count": "3",
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
        "question_text": "<p>A company has a legacy application that runs on a single Amazon EC2 instance. A security audit shows that the application has been using an IAM access key within its code to access an Amazon S3 bucket that is named DOC-EXAMPLE-BUCKET1 in the same AWS account. This access key pair has the s3:GetObject permission to all objects in only this S3 bucket. The company takes the application offline because the application is not compliant with the company's security policies for accessing other AWS resources from Amazon EC2.<br>A security engineer validates that AWS CloudTrail is turned on in all AWS Regions. CloudTrail is sending logs to an S3 bucket that is named DOC-EXAMPLE-BUCKET2. This S3 bucket is in the same AWS account as DOC-EXAMPLE-BUCKET1. However, CloudTrail has not been configured to send logs to Amazon CloudWatch Logs.<br>The company wants to know if any objects in DOC-EXAMPLE-BUCKET1 were accessed with the IAM access key in the past 60 days. If any objects were accessed, the company wants to know if any of the objects that are text files (.txt extension) contained personally identifiable information (PII).<br>Which combination of steps should the security engineer take to gather this information? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: CE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#21",
            "answers": [
              {
                "choice": "<p>Use Amazon CloudWatch Logs Insights to identify any objects in DOC-EXAMPLE-BUCKET1 that contain PII and that were available to the access key.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use Amazon OpenSearch Service to query the CloudTrail logs in DOC-EXAMPLE-BUCKET2 for API calls that used the access key to access an object that contained PII.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use Amazon Athena to query the CloudTrail logs in DOC-EXAMPLE-BUCKET2 for any API calls that used the access key to access an object that contained PII.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS Identity and Access Management Access Analyzer to identify any API calls that used the access key to access objects that contained PII in DOC-EXAMPLE-BUCKET1.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure Amazon Macie to identify any objects in DOC-EXAMPLE-BUCKET1 that contain PII and that were available to the access key.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 21 discussion",
        "discusstion": [
          {
            "id": 1097938,
            "date": "Sat 16 Dec 2023 06:51",
            "username": "\t\t\t\t3633f8f\t\t\t",
            "content": "CE without further discussion.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CE"
          },
          {
            "id": 1095617,
            "date": "Wed 13 Dec 2023 16:58",
            "username": "\t\t\t\tRaphaello\t\t\t",
            "content": "CE<br><br>A does not add anything.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1095115,
            "date": "Wed 13 Dec 2023 04:53",
            "username": "\t\t\t\tRaphaello\t\t\t",
            "content": "CE<br>CloudTrail is not configured to forward findings to CloudWatch in this scenario.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1079297,
            "date": "Fri 24 Nov 2023 14:47",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "D - using access analyzer seems to be a possible answer too:<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/logging-using-cloudtrail.html<br>However, C should be better as Athena is used which able to return results to answer whether any object is accessed.<br>Macie is definitely needed to answer whether PII is present.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Correction, C is only referring to the information captured in the cloudtrail through access analyzer api. You still need Athena for a quick and convenient search in the logs stored in s3.<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/logging-using-cloudtrail.html#service-name-info-in-cloudtrail</li></ul>",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CE"
          },
          {
            "id": 1108206,
            "date": "Fri 29 Dec 2023 01:17",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "Correction, C is only referring to the information captured in the cloudtrail through access analyzer api. You still need Athena for a quick and convenient search in the logs stored in s3.<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/logging-using-cloudtrail.html#service-name-info-in-cloudtrail",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1072718,
            "date": "Thu 16 Nov 2023 20:07",
            "username": "\t\t\t\tYR4591\t\t\t",
            "content": "Athena send the query results to s3 bucket > Macie can scan s3 bucket",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: CE"
          },
          {
            "id": 1059713,
            "date": "Wed 01 Nov 2023 14:04",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "C and E",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1056691,
            "date": "Sun 29 Oct 2023 09:47",
            "username": "\t\t\t\tlalee2\t\t\t",
            "content": "my pick is C and E also",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1054891,
            "date": "Thu 26 Oct 2023 22:05",
            "username": "\t\t\t\tpupsik\t\t\t",
            "content": "CE it is.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: CE"
          },
          {
            "id": 1051984,
            "date": "Mon 23 Oct 2023 16:53",
            "username": "\t\t\t\tSumi81\t\t\t",
            "content": "CE is correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1047920,
            "date": "Thu 19 Oct 2023 14:55",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Agree answer CE",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: CE"
          },
          {
            "id": 1043961,
            "date": "Sun 15 Oct 2023 10:35",
            "username": "\t\t\t\ttecte\t\t\t",
            "content": "CE is correct.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1023662,
            "date": "Tue 03 Oct 2023 08:22",
            "username": "\t\t\t\taragon_saa\t\t\t",
            "content": "https://www.examtopics.com/discussions/amazon/view/89893-exam-aws-certified-security-specialty-topic-1-question-450/",
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
        "question_text": "<p>A security engineer creates an Amazon S3 bucket policy that denies access to all users. A few days later, the security engineer adds an additional statement to the bucket policy to allow read-only access to one other employee. Even after updating the policy, the employee sill receives an access denied message.<br>What is the likely cause of this access denial?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#22",
            "answers": [
              {
                "choice": "<p>The ACL in the bucket needs to be updated.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The IAM policy does not allow the user to access the bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>It takes a few minutes for a bucket policy to take effect.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The allow permission is being overridden by the deny.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 22 discussion",
        "discusstion": [
          {
            "id": 1100489,
            "date": "Tue 19 Dec 2023 10:50",
            "username": "\t\t\t\ttrashbox\t\t\t",
            "content": "Exam on 2023-12-18",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1059716,
            "date": "Wed 01 Nov 2023 14:09",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "\\\"An explicit deny in any policy overrides any allows.\\\"<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-denyallow",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1056695,
            "date": "Sun 29 Oct 2023 09:56",
            "username": "\t\t\t\tlalee2\t\t\t",
            "content": "D is my answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1047944,
            "date": "Thu 19 Oct 2023 15:19",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Agree answer D",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1024275,
            "date": "Wed 04 Oct 2023 01:14",
            "username": "\t\t\t\taragon_saa\t\t\t",
            "content": "https://www.examtopics.com/discussions/amazon/view/30027-exam-aws-certified-security-specialty-topic-1-question-177/",
            "upvote_count": "2",
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
        "question_text": "<p>A company is using Amazon Macie, AWS Firewall Manager, Amazon Inspector, and AWS Shield Advanced in its AWS account. The company wants to receive alerts if a DDoS attack occurs against the account.<br>Which solution will meet this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#23",
            "answers": [
              {
                "choice": "<p>Use Macie to detect an active DDoS event. Create Amazon CloudWatch alarms that respond to Macie findings.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use Amazon inspector to review resources and to invoke Amazon CloudWatch alarms for any resources that are vulnerable to DDoS attacks.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Amazon CloudWatch alarm that monitors Firewall Manager metrics for an active DDoS event.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Amazon CloudWatch alarm that monitors Shield Advanced metrics for an active DDoS event.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 23 discussion",
        "discusstion": [
          {
            "id": 1100490,
            "date": "Tue 19 Dec 2023 10:50",
            "username": "\t\t\t\ttrashbox\t\t\t",
            "content": "Exam on 2023-12-18",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1095964,
            "date": "Thu 14 Dec 2023 03:37",
            "username": "\t\t\t\tRaphaello\t\t\t",
            "content": "D is the correct answer.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1079305,
            "date": "Fri 24 Nov 2023 14:56",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "https://docs.aws.amazon.com/waf/latest/developerguide/ddos-cloudwatch-metrics.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1056702,
            "date": "Sun 29 Oct 2023 10:08",
            "username": "\t\t\t\tlalee2\t\t\t",
            "content": "Shield Advanced for DDoS",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1051986,
            "date": "Mon 23 Oct 2023 16:55",
            "username": "\t\t\t\tSumi81\t\t\t",
            "content": "D is right",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1047946,
            "date": "Thu 19 Oct 2023 15:22",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Agree answer D. <br>Shield Advanced for DDoS",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1024276,
            "date": "Wed 04 Oct 2023 01:14",
            "username": "\t\t\t\taragon_saa\t\t\t",
            "content": "https://www.examtopics.com/discussions/amazon/view/89223-exam-aws-certified-security-specialty-topic-1-question-452/",
            "upvote_count": "1",
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
        "question_text": "<p>A company hosts a web application on an Apache web server. The application runs on Amazon EC2 instances that are in an Auto Scaling group. The company configured the EC2 instances to send the Apache web server logs to an Amazon CloudWatch Logs group that the company has configured to expire after 1 year.<br>Recently, the company discovered in the Apache web server logs that a specific IP address is sending suspicious requests to the web application. A security engineer wants to analyze the past week of Apache web server logs to determine how many requests that the IP address sent and the corresponding URLs that the IP address requested.<br>What should the security engineer do to meet these requirements with the LEAST effort?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#24",
            "answers": [
              {
                "choice": "<p>Export the CloudWatch Logs group data to Amazon S3. Use Amazon Macie to query the logs for the specific IP address and the requested URL.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure a CloudWatch Logs subscription to stream the log group to an Amazon OpenSearch Service cluster. Use OpenSearch Service to analyze the logs for the specific IP address and the requested URLs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use CloudWatch Logs Insights and a custom query syntax to analyze the CloudWatch logs for the specific IP address and the requested URLs.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Export the CloudWatch Logs group data to Amazon S3. Use AWS Glue to crawl the S3 bucket for only the log entries that contain the specific IP address. Use AWS Glue to view the results.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 24 discussion",
        "discusstion": [
          {
            "id": 1046369,
            "date": "Tue 17 Oct 2023 23:19",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "The correct answer here is C.  Please check the Queries for Apache server logs section of the following document - https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax-examples.html",
            "upvote_count": "9",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1095660,
            "date": "Wed 13 Dec 2023 17:41",
            "username": "\t\t\t\tRaphaello\t\t\t",
            "content": "C<br>A classic usage of CloudWatch Logs Insights<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax-examples.html#CWL_QuerySyntax-examples-Apache",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1088163,
            "date": "Tue 05 Dec 2023 04:18",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Option C only among all others can only get this sol. done with the 'LEAST' effort as per the ask/reqs.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1059738,
            "date": "Wed 01 Nov 2023 14:36",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "Answer is C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1056706,
            "date": "Sun 29 Oct 2023 10:15",
            "username": "\t\t\t\tlalee2\t\t\t",
            "content": "C seems to be correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1051997,
            "date": "Mon 23 Oct 2023 17:04",
            "username": "\t\t\t\tSumi81\t\t\t",
            "content": "C is correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1027275,
            "date": "Sat 07 Oct 2023 13:25",
            "username": "\t\t\t\tkk2000\t\t\t",
            "content": "Correct Answer is C",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#25",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>While securing the connection between a company's VPC and its on-premises data center, a security engineer sent a ping command from an on-premises host (IP address 203.0.113.12) to an Amazon EC2 instance (IP address 172.31.16.139). The ping command did not return a response. The flow log in the VPC showed the following:<br><img title=\"image2\" src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image2.png\"><br>What action should be performed to allow the ping to work?</p>",
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
                "choice": "<p>In the security group of the EC2 instance, allow inbound ICMP traffic.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>In the security group of the EC2 instance, allow outbound ICMP traffic.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>In the VPC's NACL, allow inbound ICMP traffic.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>In the VPC's NACL, allow outbound ICMP traffic.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 25 discussion",
        "discusstion": [
          {
            "id": 1080466,
            "date": "Sun 26 Nov 2023 04:57",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "There are multiple possible cause.<br>https://arcadian.cloud/aws/2022/07/01/4-reasons-you-cannot-ping-your-aws-ec2-instance-and-how-to-fix-them/<br>Base on the logs, only one direction is not successful. Likely its #4 - NACL.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1074465,
            "date": "Sun 19 Nov 2023 06:48",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "It's the EC2 instance IP area from where the ping didn't get the response back to the on-prem location which is clearly a usecase of NACL area. Therefore, def. going with 'D'.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1074305,
            "date": "Sat 18 Nov 2023 22:57",
            "username": "\t\t\t\tChristina666\t\t\t",
            "content": "NACLs are stateless and do not track the state of a connection, while Security Groups are stateful and allow traffic based on the response to previous traffic.<br><br>Default rule: NACLs have a default rule that denies all traffic, while Security Groups have a default rule that allows all traffic.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1059754,
            "date": "Wed 01 Nov 2023 14:53",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "Answer D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1056707,
            "date": "Sun 29 Oct 2023 10:22",
            "username": "\t\t\t\tlalee2\t\t\t",
            "content": "Answer D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1054942,
            "date": "Fri 27 Oct 2023 00:46",
            "username": "\t\t\t\tpupsik\t\t\t",
            "content": "Outbound communication on NACL is blocked.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1053082,
            "date": "Tue 24 Oct 2023 19:50",
            "username": "\t\t\t\tallcertcracker\t\t\t",
            "content": "it is D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1052001,
            "date": "Mon 23 Oct 2023 17:08",
            "username": "\t\t\t\tSumi81\t\t\t",
            "content": "I think its B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1048028,
            "date": "Thu 19 Oct 2023 16:44",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1023663,
            "date": "Tue 03 Oct 2023 08:25",
            "username": "\t\t\t\taragon_saa\t\t\t",
            "content": "https://www.examtopics.com/discussions/amazon/view/16473-exam-aws-certified-security-specialty-topic-2-question-8/",
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
        "question_text": "<p>A company developed an application by using AWS Lambda, Amazon S3, Amazon Simple Notification Service (Amazon SNS), and Amazon DynamoDB.  An external application puts objects into the company's S3 bucket and tags the objects with date and time. A Lambda function periodically pulls data from the company's S3 bucket based on date and time tags and inserts specific values into a DynamoDB table for further processing.<br>The data includes personally identifiable information (PII). The company must remove data that is older than 30 days from the S3 bucket and the DynamoDB table.<br>Which solution will meet this requirement with the MOST operational efficiency?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#26",
            "answers": [
              {
                "choice": "<p>Update the Lambda function to add a TTL S3 flag to S3 objects. Create an S3 Lifecycle policy to expire objects that are older than 30 days by using the TTL S3 flag.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an S3 Lifecycle policy to expire objects that are older than 30 days. Update the Lambda function to add the TTL attribute in the DynamoDB table. Enable TTL on the DynamoDB table to expire entries that are older than 30 days based on the TTL attribute.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create an S3 Lifecycle policy to expire objects that are older than 30 days and to add all prefixes to the S3 bucket. Update the Lambda function to delete entries that are older than 30 days.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an S3 Lifecycle policy to expire objects that are older than 30 days by using object tags. Update the Lambda function to delete entries that are older than 30 days.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 26 discussion",
        "discusstion": [
          {
            "id": 1080536,
            "date": "Sun 26 Nov 2023 08:56",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configuration-examples.html<br>Just need to set expiration days in the LifecycleConfiguration- add prefix, object tags are not needed.<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html<br>TTL is used for housekeeping data in DynamoDB by enabling TTL attribute by console or CLI, without the need for any lambda function/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1059759,
            "date": "Wed 01 Nov 2023 14:57",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "Lifecycle policy for S3, TTL for dynamodb.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1056709,
            "date": "Sun 29 Oct 2023 10:31",
            "username": "\t\t\t\tlalee2\t\t\t",
            "content": "B is right",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1054944,
            "date": "Fri 27 Oct 2023 00:49",
            "username": "\t\t\t\tpupsik\t\t\t",
            "content": "B is correct... although wording is not quite right.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1052914,
            "date": "Tue 24 Oct 2023 16:09",
            "username": "\t\t\t\tabhishek007\t\t\t",
            "content": "B is the correct answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1052008,
            "date": "Mon 23 Oct 2023 17:13",
            "username": "\t\t\t\tSumi81\t\t\t",
            "content": "B is right",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1027289,
            "date": "Sat 07 Oct 2023 13:39",
            "username": "\t\t\t\tkk2000\t\t\t",
            "content": "Correct Answer is B",
            "upvote_count": "2",
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
        "question_text": "<p>What are the MOST secure ways to protect the AWS account root user of a recently opened AWS account? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: DE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#27",
            "answers": [
              {
                "choice": "<p>Use the AWS account root user access keys instead of the AWS Management Console.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Enable multi-factor authentication for the AWS IAM users with the AdministratorAccess managed policy attached to them.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS KMS to encrypt all AWS account root user and AWS IAM access keys and set automatic rotation to 30 days.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Do not create access keys for the AWS account root user; instead, create AWS IAM users.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Enable multi-factor authentication for the AWS account root user.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 27 discussion",
        "discusstion": [
          {
            "id": 1059761,
            "date": "Wed 01 Nov 2023 14:59",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "Answer D and E",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: DE"
          },
          {
            "id": 1056714,
            "date": "Sun 29 Oct 2023 10:37",
            "username": "\t\t\t\tlalee2\t\t\t",
            "content": "Answer DE",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: DE"
          },
          {
            "id": 1052915,
            "date": "Tue 24 Oct 2023 16:10",
            "username": "\t\t\t\tabhishek007\t\t\t",
            "content": "DE seems to be the correct answer",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1052009,
            "date": "Mon 23 Oct 2023 17:14",
            "username": "\t\t\t\tSumi81\t\t\t",
            "content": "DE is correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1048037,
            "date": "Thu 19 Oct 2023 16:47",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer DE",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: DE"
          },
          {
            "id": 1024277,
            "date": "Wed 04 Oct 2023 01:16",
            "username": "\t\t\t\taragon_saa\t\t\t",
            "content": "https://www.examtopics.com/discussions/amazon/view/16530-exam-aws-certified-security-specialty-topic-1-question-135/",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#28",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is expanding its group of stores. On the day that each new store opens, the company wants to launch a customized web application for that store. Each store's application will have a non-production environment and a production environment. Each environment will be deployed in a separate AWS account. The company uses AWS Organizations and has an OU that is used only for these accounts.<br>The company distributes most of the development work to third-party development teams. A security engineer needs to ensure that each team follows the company's deployment plan for AWS resources. The security engineer also must limit access to the deployment plan to only the developers who need access. The security engineer already has created an AWS CloudFormation template that implements the deployment plan.<br>What should the security engineer do next to meet the requirements in the MOST secure way?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#28",
            "answers": [
              {
                "choice": "<p>Create an AWS Service Catalog portfolio in the organization's management account. Upload the CloudFormation template. Add the template to the portfolio's product list. Share the portfolio with the OU.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use the CloudFormation CLI to create a module from the CloudFormation template. Register the module as a private extension in the CloudFormation registry. Publish the extension. In the OU, create an SCP that allows access to the extension.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an AWS Service Catalog portfolio in the organization's management account. Upload the CloudFormation template. Add the template to the portfolio's product list. Create an IAM role that has a trust policy that allows cross-account access to the portfolio for users in the OU accounts. Attach the AWSServiceCatalogEndUserFullAccess managed policy to the role.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use the CloudFormation CLI to create a module from the CloudFormation template. Register the module as a private extension in the CloudFormation registry. Publish the extension. Share the extension with the OU.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 28 discussion",
        "discusstion": [
          {
            "id": 1137126,
            "date": "Wed 31 Jan 2024 23:47",
            "username": "\t\t\t\tlongns\t\t\t",
            "content": "C: incorrect because allows cross-account access to the portfolio for users in the OU accounts. Attach the AWSServiceCatalogEndUserFullAccess managed policy to the role --> this violate rule give least privilege<br>Privilege of https://docs.aws.amazon.com/aws-managed-policy/latest/reference/AWSServiceCatalogEndUserFullAccess.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1074900,
            "date": "Sun 19 Nov 2023 20:54",
            "username": "\t\t\t\tChristina666\t\t\t",
            "content": "To use Service Catalog with multiple AWS accounts, you need to enable AWS Organizations with all features enabled. This allows you to centrally manage your accounts and apply policies across your organization. You can also use Service Catalog as a service principal for AWS Organizations, which lets you share your portfolios with organizational units (OUs) or accounts in your organization.<br><br>To create a Service Catalog portfolio, you need to use an administrator account, such as the organization's management account. You can upload your CloudFormation template as a product in your portfolio, and define constraints and tags for it. You can then share your portfolio with the OU that contains the accounts for the web applications. This will allow the developers in those accounts to launch products from the shared portfolio using the Service Catalog end user console.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option C is incorrect because creating an IAM role that has a trust policy that allows cross-account access to the portfolio is not secure. It would allow any user in the OU accounts to assume the role and access the portfolio, regardless of their job function or access requirements.</li></ul>",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1074901,
            "date": "Sun 19 Nov 2023 20:54",
            "username": "\t\t\t\tChristina666\t\t\t",
            "content": "Option C is incorrect because creating an IAM role that has a trust policy that allows cross-account access to the portfolio is not secure. It would allow any user in the OU accounts to assume the role and access the portfolio, regardless of their job function or access requirements.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 1074896,
            "date": "Sun 19 Nov 2023 20:41",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Still a bit ambigious btw A and D. .. Not sure fully :/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1066105,
            "date": "Thu 09 Nov 2023 05:31",
            "username": "\t\t\t\tkejam\t\t\t",
            "content": "You can share a Service Catalog portfolio to an Org OU<br>https://docs.aws.amazon.com/organizations/latest/userguide/services-that-can-integrate-servicecatalog.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1059844,
            "date": "Wed 01 Nov 2023 16:05",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "Service Catalog sounds like the right tool for the job<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>why not C</li></ul>",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1060372,
            "date": "Thu 02 Nov 2023 08:47",
            "username": "\t\t\t\tM2ao\t\t\t",
            "content": "why not C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1056780,
            "date": "Sun 29 Oct 2023 12:41",
            "username": "\t\t\t\tbannium\t\t\t",
            "content": "I think Option A is sufficient for our needs.<br>https://aws.amazon.com/about-aws/whats-new/2022/11/aws-service-catalog-sharing-principal-names-portfolio-organization/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1049942,
            "date": "Sun 22 Oct 2023 01:16",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "B instead of D<br>SCP limits the access<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Are you sure that it should be B?... cuz will SCP going to work under the OU level?..</li></ul>",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1074902,
            "date": "Sun 19 Nov 2023 20:55",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Are you sure that it should be B?... cuz will SCP going to work under the OU level?..",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1048056,
            "date": "Thu 19 Oct 2023 17:15",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer D.  You can use the CloudFormation (CLI).<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html<br>https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/modules.html<br>https://aws.amazon.com/blogs/mt/introducing-aws-cloudformation-modules/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#29",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A team is using AWS Secrets Manager to store an application database password. Only a limited number of IAM principals within the account can have access to the secret. The principals who require access to the secret change frequently. A security engineer must create a solution that maximizes flexibility and scalability.<br>Which solution will meet these requirements?</p>",
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
                "choice": "<p>Use a role-based approach by creating an IAM role with an inline permissions policy that allows access to the secret. Update the IAM principals in the role trust policy as required.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Deploy a VPC endpoint for Secrets Manager. Create and attach an endpoint policy that specifies the IAM principals that are allowed to access the secret. Update the list of IAM principals as required.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use a tag-based approach by attaching a resource policy to the secret. Apply tags to the secret and the IAM principals. Use the aws:PrincipalTag and aws:ResourceTag IAM condition keys to control access.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use a deny-by-default approach by using IAM policies to deny access to the secret explicitly. Attach the policies to an IAM group. Add all IAM principals to the IAM group. Remove principals from the group when they need access. Add the principals to the group again when access is no longer allowed.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 29 discussion",
        "discusstion": [
          {
            "id": 1048064,
            "date": "Thu 19 Oct 2023 17:32",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer C<br><br>https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_attribute-based-access-control.html<br>https://aws.amazon.com/blogs/security/simplify-granting-access-to-your-aws-resources-by-using-tags-on-aws-iam-users-and-roles/",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1081000,
            "date": "Sun 26 Nov 2023 20:47",
            "username": "\t\t\t\tawssecuritynewbie\t\t\t",
            "content": "A ,,,,,,,,,,,,,,<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It is not A, it is not best-practice to use inline policies on a role.</li></ul>",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1096932,
            "date": "Fri 15 Dec 2023 01:31",
            "username": "\t\t\t\t1c7c461\t\t\t",
            "content": "It is not A, it is not best-practice to use inline policies on a role.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1066122,
            "date": "Thu 09 Nov 2023 06:08",
            "username": "\t\t\t\tkejam\t\t\t",
            "content": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/managing-secrets_tagging.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#30",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is hosting a web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The application has become the target of a DoS attack. Application logging shows that requests are coming from a small number of client IP addresses, but the addresses change regularly.<br>The company needs to block the malicious traffic with a solution that requires the least amount of ongoing effort.<br>Which solution meets these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#30",
            "answers": [
              {
                "choice": "<p>Create an AWS WAF rate-based rule, and attach it to the ALB. <br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Update the security group that is attached to the ALB to block the attacking IP addresses.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Update the ALB subnet's network ACL to block the attacking client IP addresses.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an AWS WAF rate-based rule, and attach it to the security group of the EC2 instances.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 30 discussion",
        "discusstion": [
          {
            "id": 1095972,
            "date": "Thu 14 Dec 2023 03:46",
            "username": "\t\t\t\tRaphaello\t\t\t",
            "content": "A<br>WAF rate-based rule and attach it to ALB. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1083908,
            "date": "Thu 30 Nov 2023 02:48",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "WAF protects CloudFront, R53 and ALB as they're tightly integrated with WAF. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1083841,
            "date": "Wed 29 Nov 2023 23:39",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "AWS WAF can be deployed on Amazon CloudFront, the Application Load Balancer (ALB), Amazon API Gateway, and AWS AppSync.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Indeed, AWS WAF cannot be directly attached to the Security Group of EC2 instances.</li></ul>",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1126675,
            "date": "Fri 19 Jan 2024 13:47",
            "username": "\t\t\t\tsmanzana\t\t\t",
            "content": "Indeed, AWS WAF cannot be directly attached to the Security Group of EC2 instances.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1081002,
            "date": "Sun 26 Nov 2023 20:52",
            "username": "\t\t\t\tawssecuritynewbie\t\t\t",
            "content": "They could of used the VPC flow logs to figure out the IPs that are attacking then use lambda to update the ACL NACL for the LB.  it would be better than actually applying rate limiting.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1048068,
            "date": "Thu 19 Oct 2023 17:37",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer A<br>https://www.examtopics.com/discussions/amazon/view/61173-exam-aws-certified-security-specialty-topic-1-question-259/",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#31",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has hundreds of AWS accounts in an organization in AWS Organizations. The company operates out of a single AWS Region. The company has a dedicated security tooling AWS account in the organization. The security tooling account is configured as the organization's delegated administrator for Amazon GuardDuty and AWS Security Hub. The company has configured the environment to automatically enable GuardDuty and Security Hub for existing AWS accounts and new AWS accounts.<br>The company is performing control tests on specific GuardDuty findings to make sure that the company's security team can detect and respond to security events. The security team launched an Amazon EC2 instance and attempted to run DNS requests against a test domain, example.com, to generate a DNS finding. However, the GuardDuty finding was never created in the Security Hub delegated administrator account.<br>Why was the finding was not created in the Security Hub delegated administrator account?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#31",
            "answers": [
              {
                "choice": "<p>VPC flow logs were not turned on for the VPC where the EC2 instance was launched.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The VPC where the EC2 instance was launched had the DHCP option configured for a custom OpenDNS resolver.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>The GuardDuty integration with Security Hub was never activated in the AWS account where the finding was generated.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Cross-Region aggregation in Security Hub was not configured.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 31 discussion",
        "discusstion": [
          {
            "id": 1077524,
            "date": "Wed 22 Nov 2023 17:11",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "Guardduty cannot detect DNS requests if a custom resolver is setup<br><br>See below:<br><br>https://repost.aws/knowledge-center/guardduty-finding-types#:~:textNote%3A%20GuardDuty%20only%20processes%20DNS%20logs%20if%20you%20use%20the%20default%20VPC%20DNS%20resolver.%20All%20other%20types%20of%20DNS%20resolvers%20won%27t%20generated%20DNS%20based%20findings.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"GuardDuty only processes DNS logs if you use the default VPC DNS resolver. All other types of DNS resolvers won't generated DNS based findings.\\\"</li></ul>",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1083853,
            "date": "Wed 29 Nov 2023 23:57",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "\\\"GuardDuty only processes DNS logs if you use the default VPC DNS resolver. All other types of DNS resolvers won't generated DNS based findings.\\\"",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1123465,
            "date": "Mon 15 Jan 2024 15:59",
            "username": "\t\t\t\tmynickc\t\t\t",
            "content": "B is correct. https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-internal-providers.html#integration-amazon-guardduty",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1116510,
            "date": "Mon 08 Jan 2024 10:23",
            "username": "\t\t\t\tCloudRover\t\t\t",
            "content": "\\\"GuardDuty only processes DNS logs if you use the default VPC DNS resolver. All other types of DNS resolvers won't generated DNS based findings.\\\"<br>As Daniel76 pointed out, this is the correct answer.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1100492,
            "date": "Tue 19 Dec 2023 10:53",
            "username": "\t\t\t\ttrashbox\t\t\t",
            "content": "Exam on 2023-12-18",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1095976,
            "date": "Thu 14 Dec 2023 03:52",
            "username": "\t\t\t\tRaphaello\t\t\t",
            "content": "Going with D. <br>https://docs.aws.amazon.com/securityhub/latest/userguide/finding-aggregation-enable.html#finding-aggregation-enable-console<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>but didn't the question said that the company operates out of a single region?</li></ul>",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1111061,
            "date": "Mon 01 Jan 2024 10:23",
            "username": "\t\t\t\tKaiW\t\t\t",
            "content": "but didn't the question said that the company operates out of a single region?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1066147,
            "date": "Thu 09 Nov 2023 07:10",
            "username": "\t\t\t\tkejam\t\t\t",
            "content": "Choosing D through a process of elimination.<br>A.  VPC flow logs are not required to be turned on.<br>https://aws.amazon.com/guardduty/faqs/<br>B.  Custom DNS resolver? GuardDuty should have picked that up from the VPC flow logs:<br>https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_finding-types-ec2.html#defenseevasion-ec2-unusualdnsresolver<br>C.  GuardDuty and Security Hub integration is enabled automatically:<br>https://docs.aws.amazon.com/guardduty/latest/ug/securityhub-integration.html#securityhub-integration-enable<br>D.  Cross-Region aggregation. Regions weren't mentioned in the question, but it is the only possible answer left.<br>https://docs.aws.amazon.com/securityhub/latest/userguide/finding-aggregation.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Just noticed \\\"The company operates out of a single AWS Region.\\\"So changing my answer to none of the above ;-)</li></ul>",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1082105,
            "date": "Tue 28 Nov 2023 04:28",
            "username": "\t\t\t\tkejam\t\t\t",
            "content": "Just noticed \\\"The company operates out of a single AWS Region.\\\"So changing my answer to none of the above ;-)",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1056788,
            "date": "Sun 29 Oct 2023 12:53",
            "username": "\t\t\t\tbannium\t\t\t",
            "content": "> Note: GuardDuty only processes DNS logs if you use the default VPC DNS resolver. All other types of DNS resolvers won't generated DNS based findings.<br>https://repost.aws/knowledge-center/guardduty-finding-types",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#32",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An ecommerce company has a web application architecture that runs primarily on containers. The application containers are deployed on Amazon Elastic Container Service (Amazon ECS). The container images for the application are stored in Amazon Elastic Container Registry (Amazon ECR).<br>The company's security team is performing an audit of components of the application architecture. The security team identifies issues with some container images that are stored in the container repositories.<br>The security team wants to address these issues by implementing continual scanning and on-push scanning of the container images. The security team needs to implement a solution that makes any findings from these scans visible in a centralized dashboard. The security team plans to use the dashboard to view these findings along with other security-related findings that they intend to generate in the future. There are specific repositories that the security team needs to exclude from the scanning process.<br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#32",
            "answers": [
              {
                "choice": "<p>Use Amazon Inspector. Create inclusion rules in Amazon ECR to match repositories that need to be scanned. Push Amazon Inspector findings to AWS Security Hub.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use ECR basic scanning of container images. Create inclusion rules in Amazon ECR to match repositories that need to be scanned. Push findings to AWS Security Hub.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use ECR basic scanning of container images. Create inclusion rules in Amazon ECR to match repositories that need to be scanned. Push findings to Amazon Inspector.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use Amazon Inspector. Create inclusion rules in Amazon Inspector to match repositories that need to be scanned. Push Amazon Inspector findings to AWS Config.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 32 discussion",
        "discusstion": [
          {
            "id": 1047216,
            "date": "Wed 18 Oct 2023 22:41",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "Amazon Inspector supports the configuration of inclusion rules to select which ECR repositories are scanned. Please see more information here - https://aws.amazon.com/inspector/faqs/",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1074937,
            "date": "Sun 19 Nov 2023 22:19",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Def. it's A as per the features described for Amazon Inspector here:<br>https://aws.amazon.com/inspector/faqs/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1066151,
            "date": "Thu 09 Nov 2023 07:21",
            "username": "\t\t\t\tkejam\t\t\t",
            "content": "Answer A<br>Inspector can continuously scan ECR and send findings to Security Hub<br>https://docs.aws.amazon.com/inspector/latest/user/scanning-ecr.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1056792,
            "date": "Sun 29 Oct 2023 13:03",
            "username": "\t\t\t\tbannium\t\t\t",
            "content": "using Amazon ECR integrates with Amazon Inspector with filters<br>https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html#image-scanning-filters",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1056633,
            "date": "Sun 29 Oct 2023 08:09",
            "username": "\t\t\t\tbengalister\t\t\t",
            "content": "Answer A<br>Amazon inspector can definitely scan ECR repositories<br>https://docs.aws.amazon.com/inspector/latest/user/scanning-ecr.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1055532,
            "date": "Fri 27 Oct 2023 13:38",
            "username": "\t\t\t\tpupsik\t\t\t",
            "content": "Inspector scans EC2 instances.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>it can scan ec2, ecr, and lambda</li></ul>",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1141745,
            "date": "Tue 06 Feb 2024 05:10",
            "username": "\t\t\t\tlightrod\t\t\t",
            "content": "it can scan ec2, ecr, and lambda",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1038950,
            "date": "Mon 09 Oct 2023 21:11",
            "username": "\t\t\t\tangelsrp\t\t\t",
            "content": "B<br><br>ECR does provide basic image scanning functionality, which can detect software vulnerabilities in your container images. AWS Security Hub provides a centralized view for security alert and compliance posture across AWS accounts. This solution seems to meet the requirements. Amazon Inspector is used for analyzing EC2 instances and identifying potential security vulnerabilities, but not for container images.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>ECR basic scanning only can be configured to on push, or do manual. it does not support continously scan as required.<br>ECR enhanced scanning integrates with AWS Inspector - so yes it covers not just EC2 instance but container.</li></ul>",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1108236,
            "date": "Fri 29 Dec 2023 02:53",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "ECR basic scanning only can be configured to on push, or do manual. it does not support continously scan as required.<br>ECR enhanced scanning integrates with AWS Inspector - so yes it covers not just EC2 instance but container.",
            "upvote_count": "1",
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
        "question_text": "<p>A company has a single AWS account and uses an Amazon EC2 instance to test application code. The company recently discovered that the instance was compromised. The instance was serving up malware. The analysis of the instance showed that the instance was compromised 35 days ago.<br>A security engineer must implement a continuous monitoring solution that automatically notifies the company's security team about compromised instances through an email distribution list for high severity findings. The security engineer must implement the solution as soon as possible.<br>Which combination of steps should the security engineer take to meet these requirements? (Choose three.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BCE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#33",
            "answers": [
              {
                "choice": "<p>Enable AWS Security Hub in the AWS account.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Enable Amazon GuardDuty in the AWS account.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the security team's email distribution list to the topic.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Amazon Simple Queue Service (Amazon SQS) queue. Subscribe the security team's email distribution list to the queue.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Amazon EventBridge rule for GuardDuty findings of high severity. Configure the rule to publish a message to the topic.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Amazon EventBridge rule for Security Hub findings of high severity. Configure the rule to publish a message to the queue.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 33 discussion",
        "discusstion": [
          {
            "id": 1048085,
            "date": "Thu 19 Oct 2023 18:08",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer BCE",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: BCE"
          },
          {
            "id": 1093500,
            "date": "Mon 11 Dec 2023 14:33",
            "username": "\t\t\t\tWeepingMaplte\t\t\t",
            "content": "AWS Security Hub does not have any scanning capabilities. It provides you with a comprehensive view of your security state only.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 1085605,
            "date": "Sat 02 Dec 2023 02:42",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "GuardDuty, Eventbridge, SNS topics",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BCE"
          },
          {
            "id": 1084250,
            "date": "Thu 30 Nov 2023 11:40",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "https://repost.aws/knowledge-center/guardduty-eventbridge-sns-rule",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BCE"
          },
          {
            "id": 1074940,
            "date": "Sun 19 Nov 2023 22:23",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "BCE options look most relevant.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BCE"
          },
          {
            "id": 1055545,
            "date": "Fri 27 Oct 2023 13:48",
            "username": "\t\t\t\tpupsik\t\t\t",
            "content": "BCE it is.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BCE"
          }
        ]
      },
      {
        "question_id": "#34",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company uses identity federation to authenticate users into an identity account (987654321987) where the users assume an IAM role named IdentityRole. The users then assume an IAM role named JobFunctionRole in the target AWS account (123456789123) to perform their job functions.<br>A user is unable to assume the IAM role in the target account. The policy attached to the role in the identity account is:<br><img title=\"image3\" src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image3.png\"><br>What should be done to enable the user to assume the appropriate role in the target account?</p>",
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
                "choice": "<p>Update the IAM policy attached to the role in the identity account to be:<br><img title=\"image4\" src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image4.png\"></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Update the trust policy on the role in the target account to be:<br><img title=\"image5\" src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image5.png\"></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Update the trust policy on the role in the identity account to be:<br><img title=\"image6\" src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image6.png\"></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Update the IAM policy attached to the role in the target account to be:<br><img title=\"image7\" src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image7.png\"></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 34 discussion",
        "discusstion": [
          {
            "id": 1085642,
            "date": "Sat 02 Dec 2023 03:33",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "When an user is unable to assume a role in the target account, one should check the principal element in the trust policy in the JobFunctionRole in the target account.<br>Refer to this article to understand permission vs trust policies.<br>https://www.linkedin.com/pulse/permission-policy-vs-trust-aws-rupesh-tiwari/",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1066941,
            "date": "Fri 10 Nov 2023 05:21",
            "username": "\t\t\t\tkejam\t\t\t",
            "content": "Answer B<br>In IAM roles, use the Principal element in the role trust policy to specify who can assume the role.<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1056635,
            "date": "Sun 29 Oct 2023 08:14",
            "username": "\t\t\t\tbengalister\t\t\t",
            "content": "B is the correct answer",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1055548,
            "date": "Fri 27 Oct 2023 13:51",
            "username": "\t\t\t\tpupsik\t\t\t",
            "content": "B it is.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1048089,
            "date": "Thu 19 Oct 2023 18:10",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Agree with answer B",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1027331,
            "date": "Sat 07 Oct 2023 14:32",
            "username": "\t\t\t\tkk2000\t\t\t",
            "content": "Correct Answer is B",
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
        "question_text": "<p>A company is using AWS Organizations to manage multiple AWS accounts for its human resources, finance, software development, and production departments. All the company's developers are part of the software development AWS account.<br>The company discovers that developers have launched Amazon EC2 instances that were preconfigured with software that the company has not approved for use. The company wants to implement a solution to ensure that developers can launch EC2 instances with only approved software applications and only in the software development AWS account.<br>Which solution will meet these requirements?</p>",
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
                "choice": "<p>In the software development account, create AMIs of preconfigured instances that include only approved software. Include the AMI IDs in the condition section of an AWS CloudFormation template to launch the appropriate AMI based on the AWS Region. Provide the developers with the CloudFormation template to launch EC2 instances in the software development account.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Amazon EventBridge rule that runs when any EC2 RunInstances API event occurs in the software development account. Specify AWS Systems Manager Run Command as a target of the rule. Configure Run Command to run a script that will install all approved software onto the instances that the developers launch.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use an AWS Service Catalog portfolio that contains EC2 products with appropriate AMIs that include only approved software. Grant the developers permission to access only the Service Catalog portfolio to launch a product in the software development account.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>In the management account, create AMIs of preconfigured instances that include only approved software. Use AWS CloudFormation StackSets to launch the AMIs across any AWS account in the organization. Grant the developers permission to launch the stack sets within the management account.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 35 discussion",
        "discusstion": [
          {
            "id": 1047239,
            "date": "Wed 18 Oct 2023 23:34",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "You can use AWS Service Catalog to build a customized AMI from which a team can only launch products from. Please see - https://aws.amazon.com/blogs/mt/use-aws-service-catalog-to-build-a-custom-catalog-of-products-from-aws-marketplace/",
            "upvote_count": "8",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1102141,
            "date": "Thu 21 Dec 2023 04:14",
            "username": "\t\t\t\tRaphaello\t\t\t",
            "content": "AWS Service Catalog is introduced for this specific purpose: govern and pre-configure provisioning of approved products",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1093508,
            "date": "Mon 11 Dec 2023 14:39",
            "username": "\t\t\t\tWeepingMaplte\t\t\t",
            "content": "AWS Service Catalog is a service that enables organizations to govern, manage, and automate the provisioning of IT services across their AWS accounts.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1048092,
            "date": "Thu 19 Oct 2023 18:12",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer C",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1027337,
            "date": "Sat 07 Oct 2023 14:38",
            "username": "\t\t\t\tkk2000\t\t\t",
            "content": "C should be the correct answer",
            "upvote_count": "4",
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
        "question_text": "<p>A company has enabled Amazon GuardDuty in all AWS Regions as part of its security monitoring strategy. In one of its VPCs, the company hosts an Amazon EC2 instance that works as an FTP server. A high number of clients from multiple locations contact the FTP server. GuardDuty identifies this activity as a brute force attack because of the high number of connections that happen every hour.<br>The company has flagged the finding as a false positive, but GuardDuty continues to raise the issue. A security engineer must improve the signal-to-noise ratio without compromising the company's visibility of potential anomalous behavior.<br>Which solution will meet these requirements?</p>",
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
                "choice": "<p>Disable the FTP rule in GuardDuty in the Region where the FTP server is deployed.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Add the FTP server to a trusted IP list. Deploy the list to GuardDuty to stop receiving the notifications.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a suppression rule in GuardDuty to filter findings by automatically archiving new findings that match the specified criteria.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create an AWS Lambda function that has the appropriate permissions to delete the finding whenever a new occurrence is reported.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 36 discussion",
        "discusstion": [
          {
            "id": 1048096,
            "date": "Thu 19 Oct 2023 18:21",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer C<br>https://docs.aws.amazon.com/guardduty/latest/ug/findings_suppression-rule.html",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1093511,
            "date": "Mon 11 Dec 2023 14:41",
            "username": "\t\t\t\tWeepingMaplte\t\t\t",
            "content": "A suppression rule is a set of criteria, consisting of a filter attribute paired with a value, used to filter findings by automatically archiving new findings that match the specified criteria.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1085657,
            "date": "Sat 02 Dec 2023 03:59",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "Suppression rule with specific criteria is the most appropriate solution.<br>Disable FTP entirely, trust everything from the FTP server reduces the GuardDuty effectiveness.<br>Creating lambda to delete the finding is counter productive and the finding might have already trigger SNS topic if there's one.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1083970,
            "date": "Thu 30 Nov 2023 04:44",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Self-explanatory from the link provided below.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#37",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running internal microservices on Amazon Elastic Container Service (Amazon ECS) with the Amazon EC2 launch type. The company is using Amazon Elastic Container Registry (Amazon ECR) private repositories.<br>A security engineer needs to encrypt the private repositories by using AWS Key Management Service (AWS KMS). The security engineer also needs to analyze the container images for any common vulnerabilities and exposures (CVEs).<br>Which solution will meet these requirements?</p>",
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
                "choice": "<p>Enable KMS encryption on the existing ECR repositories. Install Amazon Inspector Agent from the ECS container instances' user data. Run an assessment with the CVE rules.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Recreate the ECR repositories with KMS encryption and ECR scanning enabled. Analyze the scan report after the next push of images.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Recreate the ECR repositories with KMS encryption and ECR scanning enabled. Install AWS Systems Manager Agent on the ECS container instances. Run an inventory report.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Enable KMS encryption on the existing ECR repositories. Use AWS Trusted Advisor to check the ECS container instances and to verify the findings against a list of current CVEs.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 37 discussion",
        "discusstion": [
          {
            "id": 1048099,
            "date": "Thu 19 Oct 2023 18:25",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer B<br><br>https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-create.html https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-edit.html",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1120691,
            "date": "Fri 12 Jan 2024 11:17",
            "username": "\t\t\t\tJonu\t\t\t",
            "content": "How about the CVE part of the question?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1092971,
            "date": "Mon 11 Dec 2023 01:22",
            "username": "\t\t\t\tOsirus\t\t\t",
            "content": "Answer B<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>This should be correct</li></ul>",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1092974,
            "date": "Mon 11 Dec 2023 01:23",
            "username": "\t\t\t\tOsirus\t\t\t",
            "content": "This should be correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1085680,
            "date": "Sat 02 Dec 2023 04:39",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "ECR repositories need to be recreated not enabled, with KMS encryption.<br>The inventory for AWS system manager does not contain anything about vulnerability.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1053643,
            "date": "Wed 25 Oct 2023 12:50",
            "username": "\t\t\t\tahrentom\t\t\t",
            "content": "should be the right anwser",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#38",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company's security engineer has been tasked with restricting a contractor's IAM account access to the company's Amazon EC2 console without providing access to any other AWS services. The contractor's IAM account must not be able to gain access to any other AWS service, even if the IAM account is assigned additional permissions based on IAM group membership.<br>What should the security engineer do to meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#38",
            "answers": [
              {
                "choice": "<p>Create an inline IAM user policy that allows for Amazon EC2 access for the contractor's IAM user.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an IAM permissions boundary policy that allows Amazon EC2 access. Associate the contractor's IAM account with the IAM permissions boundary policy.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create an IAM group with an attached policy that allows for Amazon EC2 access. Associate the contractor's IAM account with the IAM group.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a IAM role that allows for EC2 and explicitly denies all other services. Instruct the contractor to always assume this role.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 38 discussion",
        "discusstion": [
          {
            "id": 1100493,
            "date": "Tue 19 Dec 2023 10:54",
            "username": "\t\t\t\ttrashbox\t\t\t",
            "content": "Exam on 2023-12-18",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1093524,
            "date": "Mon 11 Dec 2023 14:47",
            "username": "\t\t\t\tWeepingMaplte\t\t\t",
            "content": "IAM permissions boundary policy is a managed policy that defines the maximum permissions that an identity-based policy can grant to an IAM entity (user or role). It essentially acts as a safety net to prevent users and roles from exceeding their intended permissions.",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1085683,
            "date": "Sat 02 Dec 2023 04:45",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "Only B talks about restricting the access, by using permission boundary.<br>D - if you assign more than one role to the vendor, there's always risk that the instruction is not followed.<br>A, C- regardless of feasibility, by creating allow doesn't block the vendor from accessing services other than EC2 instance.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1083977,
            "date": "Thu 30 Nov 2023 04:59",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "B makes more sense to me as it would explicitly define the specific service based IAM permissions policy which then can be associated with the contractor's IAM account which then help in restricting down his access to only at that service level in question.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1081942,
            "date": "Mon 27 Nov 2023 21:29",
            "username": "\t\t\t\tawssecuritynewbie\t\t\t",
            "content": "he Answer should be C, creating a inline does not deny him access to everything else and it also makes it harder to manager and scale.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1081941,
            "date": "Mon 27 Nov 2023 21:29",
            "username": "\t\t\t\tawssecuritynewbie\t\t\t",
            "content": "the Answer should be C, creating a inline does not deny him access to everything else and it also makes it harder to manager and scale.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1072790,
            "date": "Thu 16 Nov 2023 21:43",
            "username": "\t\t\t\tYR4591\t\t\t",
            "content": "B is right",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1066948,
            "date": "Fri 10 Nov 2023 05:50",
            "username": "\t\t\t\tkejam\t\t\t",
            "content": "Answer B<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_bound",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1048111,
            "date": "Thu 19 Oct 2023 18:38",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer B",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1027385,
            "date": "Sat 07 Oct 2023 15:01",
            "username": "\t\t\t\tkk2000\t\t\t",
            "content": "B is the correct answer",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#39",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company manages multiple AWS accounts using AWS Organizations. The company's security team notices that some member accounts are not sending AWS CloudTrail logs to a centralized Amazon S3 logging bucket. The security team wants to ensure there is at least one trail configured for all existing accounts and for any account that is created in the future.<br>Which set of actions should the security team implement to accomplish this?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#39",
            "answers": [
              {
                "choice": "<p>Create a new trail and configure it to send CloudTrail logs to Amazon S3. Use Amazon EventBridge to send notification if a trail is deleted or stopped.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Deploy an AWS Lambda function in every account to check if there is an existing trail and create a new trail, if needed.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Edit the existing trail in the Organizations management account and apply it to the organization.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create an SCP to deny the cloudtrail:Delete* and cloudtrail:Stop* actions. Apply the SCP to all accounts.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 39 discussion",
        "discusstion": [
          {
            "id": 1048114,
            "date": "Thu 19 Oct 2023 18:40",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer C<br>https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-trail-organization.html",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1085688,
            "date": "Sat 02 Dec 2023 04:57",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "Only C mention the use of management account.<br>By editing an existing trail in their account, and apply it to an organization, an organization trail is ready to log events for the management account and all member accounts in the organization. This do away with the need to manually create and monitor trail in every accounts.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#40",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company recently had a security audit in which the auditors identified multiple potential threats. These potential threats can cause usage pattern changes such as DNS access peak, abnormal instance traffic, abnormal network interface traffic, and unusual Amazon S3 API calls. The threats can come from different sources and can occur at any time. The company needs to implement a solution to continuously monitor its system and identify all these incoming threats in near-real time.<br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#40",
            "answers": [
              {
                "choice": "<p>Enable AWS CloudTrail logs, VPC flow logs, and DNS logs. Use Amazon CloudWatch Logs to manage these logs from a centralized account.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Enable AWS CloudTrail logs, VPC flow logs, and DNS logs. Use Amazon Macie to monitor these logs from a centralized account.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Enable Amazon GuardDuty from a centralized account. Use GuardDuty to manage AWS CloudTrail logs, VPC flow logs, and DNS logs.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Enable Amazon Inspector from a centralized account. Use Amazon Inspector to manage AWS CloudTrail logs, VPC flow logs, and DNS logs.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 40 discussion",
        "discusstion": [
          {
            "id": 1048118,
            "date": "Thu 19 Oct 2023 18:42",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer C",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1129795,
            "date": "Tue 23 Jan 2024 17:48",
            "username": "\t\t\t\tsmanzana\t\t\t",
            "content": "C- near-real time -> GuardDuty",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1085690,
            "date": "Sat 02 Dec 2023 05:05",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "Guardduty draw data sources from: AWS CloudTrail logs, VPC flow logs, and DNS logs<br>https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_data-sources.html<br>Only GuardDuty detects abnormal and unusual activities among all choices.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1083982,
            "date": "Thu 30 Nov 2023 05:11",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Monitoring threats, abnormal traffic etc always leads towards GuardDuty.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#41",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company that uses AWS Organizations is using AWS IAM Identity Center (AWS Single Sign-On) to administer access to AWS accounts. A security engineer is creating a custom permission set in IAM Identity Center. The company will use the permission set across multiple accounts. An AWS managed policy and a customer managed policy are attached to the permission set. The security engineer has full administrative permissions and is operating in the management account.<br>When the security engineer attempts to assign the permission set to an IAM Identity Center user who has access to multiple accounts, the assignment fails.<br>What should the security engineer do to resolve this failure?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#41",
            "answers": [
              {
                "choice": "<p>Create the customer managed policy in every account where the permission set is assigned. Give the customer managed policy the same name and same permissions in each account.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Remove either the AWS managed policy or the customer managed policy from the permission set. Create a second permission set that includes the removed policy. Apply the permission sets separately to the user.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Evaluate the logic of the AWS managed policy and the customer managed policy. Resolve any policy conflicts in the permission set before deployment.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Do not add the new permission set to the user. Instead, edit the user's existing permission set to include the AWS managed policy and the customer managed policy.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 41 discussion",
        "discusstion": [
          {
            "id": 1077661,
            "date": "Wed 22 Nov 2023 19:30",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "Give this a read y'all. Answer indeed is A.  You must create the CMP in each account unlike theAWS Managed Policies<br><br>https://aws.amazon.com/blogs/security/how-to-use-customer-managed-policies-in-aws-single-sign-on-for-advanced-use-cases/#:~:textConfigure%20an%20IAM%20Identity%20Center%20permission%20set%20to%20use%20a%20CMP",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1055657,
            "date": "Fri 27 Oct 2023 16:29",
            "username": "\t\t\t\tpupsik\t\t\t",
            "content": "https://docs.aws.amazon.com/singlesignon/latest/userguide/permissionsetcustom.html#:~:textWhen%20you%20create%20a%20permission%20set%20with%20a%20customer%20managed%20policy%2C%20you%20must%20create%20an%20IAM%20policy%20with%20the%20same%20name%20and%20path%20in%20each%20AWS%20account%20where%20IAM%20Identity%20Center%20assigns%20your%20permission%20set.",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1123750,
            "date": "Tue 16 Jan 2024 00:04",
            "username": "\t\t\t\tmynickc\t\t\t",
            "content": "Answer is C.  Because, when you assign a permissionset via the identity center; it automatically creates IAM controlled role in all the org. https://docs.aws.amazon.com/singlesignon/latest/userguide/permissionsetsconcept.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1086670,
            "date": "Sun 03 Dec 2023 08:18",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "https://docs.aws.amazon.com/singlesignon/latest/userguide/howtocmp.html<br><br>\\\"Before you assign your permission set with IAM policies, you must prepare your member account. The name of an IAM policy in your member account must be a case-sensitive match to name of the policy in your management account. IAM Identity Center fails to assign the permission set if the policy doesn't exist in your member account.\\\"",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1075154,
            "date": "Mon 20 Nov 2023 05:56",
            "username": "\t\t\t\tAWSvad\t\t\t",
            "content": "The correct answer is:<br>C.  Evaluate the logic of the AWS managed policy and the customer managed policy. Resolve any policy conflicts in the permission set before deployment.<br><br>In this scenario, the assignment of the permission set to an IAM Identity Center user is failing, indicating a potential conflict between the AWS managed policy and the customer managed policy. It is important to review and evaluate the logic of both policies and resolve any conflicts before deploying the permission set.<br><br>Options A and B suggest alternative actions but do not directly address the issue of policy conflicts. Option A involves creating the customer managed policy in every account, which may not resolve the underlying problem. Option B suggests removing either the AWS managed policy or the customer managed policy, which may not be the most appropriate solution.<br><br>Option D suggests editing the user's existing permission set, but it does not address the potential conflicts between the AWS managed policy and the customer managed policy.<br><br>Therefore, option C is the most appropriate choice to resolve the issue by thoroughly evaluating and resolving policy conflicts in the permission set before deployment.<br><br>- ChatGPT<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The correct answer is:<br>A.  Create the customer managed policy in every account where the permission set is assigned. Give the customer managed policy the same name and same permissions in each account.<br><br>Explanation:<br><br>When using IAM Identity Center (AWS Single Sign-On) to administer access to AWS accounts across multiple accounts, and attaching a customer managed policy to a permission set, it's essential to create the corresponding IAM policy with the same name and permissions in each AWS account where the permission set is assigned. This ensures consistency and avoids issues during the assignment process.<br><br>Option A aligns with this requirement by recommending the creation of the customer managed policy in every account where the permission set is assigned, with the same name and permissions. This approach helps in maintaining uniformity across accounts and resolving the assignment failure.<br><br>Options B, C, and D do not directly address the need to create the customer managed policy in each account or ensure consistency across accounts, making option A the appropriate solution in this scenario.<br><br>- ChatGPT</li></ul>",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1112764,
            "date": "Wed 03 Jan 2024 14:02",
            "username": "\t\t\t\talexleely\t\t\t",
            "content": "The correct answer is:<br>A.  Create the customer managed policy in every account where the permission set is assigned. Give the customer managed policy the same name and same permissions in each account.<br><br>Explanation:<br><br>When using IAM Identity Center (AWS Single Sign-On) to administer access to AWS accounts across multiple accounts, and attaching a customer managed policy to a permission set, it's essential to create the corresponding IAM policy with the same name and permissions in each AWS account where the permission set is assigned. This ensures consistency and avoids issues during the assignment process.<br><br>Option A aligns with this requirement by recommending the creation of the customer managed policy in every account where the permission set is assigned, with the same name and permissions. This approach helps in maintaining uniformity across accounts and resolving the assignment failure.<br><br>Options B, C, and D do not directly address the need to create the customer managed policy in each account or ensure consistency across accounts, making option A the appropriate solution in this scenario.<br><br>- ChatGPT",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1066955,
            "date": "Fri 10 Nov 2023 06:10",
            "username": "\t\t\t\tkejam\t\t\t",
            "content": "Answer C<br><br>Not A: AWS IAM Identity Center enables you to centrally manage permissions across multiple AWS accounts without configuring each account manually.<br>https://docs.aws.amazon.com/singlesignon/latest/userguide/manage-your-accounts.html<br><br>Not B: You can assign more than one permission set to a user.<br>https://docs.aws.amazon.com/singlesignon/latest/userguide/permissionsets.html<br><br>Not D: A custom permission set can use up to 10 AWS managed or customer managed policies.<br>https://docs.aws.amazon.com/singlesignon/latest/userguide/howtocreatepermissionset.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1053654,
            "date": "Wed 25 Oct 2023 13:10",
            "username": "\t\t\t\tahrentom\t\t\t",
            "content": "I would go with C here, seems to be the most logical anwser<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>have to correct me, the right one here is A</li><li>when you're using permissionset you don't need to create the customer managed policy in every org manually. so its C</li></ul>",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1069306,
            "date": "Mon 13 Nov 2023 13:41",
            "username": "\t\t\t\tahrentom\t\t\t",
            "content": "have to correct me, the right one here is A<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>when you're using permissionset you don't need to create the customer managed policy in every org manually. so its C</li></ul>",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 1123766,
            "date": "Tue 16 Jan 2024 00:30",
            "username": "\t\t\t\tmynickc\t\t\t",
            "content": "when you're using permissionset you don't need to create the customer managed policy in every org manually. so its C",
            "upvote_count": "1",
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
        "question_text": "<p>A company has thousands of AWS Lambda functions. While reviewing the Lambda functions, a security engineer discovers that sensitive information is being stored in environment variables and is viewable as plaintext in the Lambda console. The values of the sensitive information are only a few characters long.<br>What is the MOST cost-effective way to address this security issue?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#42",
            "answers": [
              {
                "choice": "<p>Set up IAM policies from the Lambda console to hide access to the environment variables.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS Step Functions to store the environment variables. Access the environment variables at runtime. Use IAM permissions to restrict access to the environment variables to only the Lambda functions that require access.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Store the environment variables in AWS Secrets Manager, and access them at runtime. Use IAM permissions to restrict access to the secrets to only the Lambda functions that require access.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Store the environment variables in AWS Systems Manager Parameter Store as secure string parameters, and access them at runtime. Use IAM permissions to restrict access to the parameters to only the Lambda functions that require access.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 42 discussion",
        "discusstion": [
          {
            "id": 1066957,
            "date": "Fri 10 Nov 2023 06:21",
            "username": "\t\t\t\tkejam\t\t\t",
            "content": "Answer D<br>There is no charge from Parameter Store to create a SecureString parameter.<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html#what-is-a-parameter",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1046890,
            "date": "Wed 18 Oct 2023 14:09",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Store the environment variables as secure strings in Parameter Store. Most cost-effective way.",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1100494,
            "date": "Tue 19 Dec 2023 10:55",
            "username": "\t\t\t\ttrashbox\t\t\t",
            "content": "Exam on 2023-12-18",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1077664,
            "date": "Wed 22 Nov 2023 19:32",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "cost efficient.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1055051,
            "date": "Fri 27 Oct 2023 04:04",
            "username": "\t\t\t\tstream3652\t\t\t",
            "content": "Isn't C more secure?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>That is a good question. However, the emphasis here is MOST cost-effective. Using secure string in Parameter Store is free, hence D is cost effective.</li><li>the question is asking for cost-effective way</li></ul>",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1063127,
            "date": "Sun 05 Nov 2023 18:04",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "That is a good question. However, the emphasis here is MOST cost-effective. Using secure string in Parameter Store is free, hence D is cost effective.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 1056209,
            "date": "Sat 28 Oct 2023 14:53",
            "username": "\t\t\t\tM2ao\t\t\t",
            "content": "the question is asking for cost-effective way",
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
        "question_text": "<p>A security engineer is using AWS Organizations and wants to optimize SCPs. The security engineer needs to ensure that the SCPs conform to best practices.<br>Which approach should the security engineer take to meet this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#43",
            "answers": [
              {
                "choice": "<p>Use AWS IAM Access Analyzer to analyze the polices. View the findings from policy validation checks.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Review AWS Trusted Advisor checks for all accounts in the organization.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Set up AWS Audit Manager. Run an assessment for all AWS Regions for all accounts.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Ensure that Amazon Inspector agents are installed on all Amazon EC2 instances in all accounts.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 43 discussion",
        "discusstion": [
          {
            "id": 1100495,
            "date": "Tue 19 Dec 2023 10:55",
            "username": "\t\t\t\ttrashbox\t\t\t",
            "content": "Exam on 2023-12-18",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1063133,
            "date": "Sun 05 Nov 2023 18:13",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "You can create AWS IAM Access Analyzer in AWS Organizations as the zone of trust.<br>https://aws.amazon.com/blogs/aws/new-use-aws-iam-access-analyzer-in-aws-organizations/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1057623,
            "date": "Mon 30 Oct 2023 13:04",
            "username": "\t\t\t\tbannium\t\t\t",
            "content": "It seems IAM Access Analyzer<br>> This powerful new feature will help you to construct IAM policies and SCPs that take advantage of time-tested AWS best practices.<br>https://aws.amazon.com/jp/blogs/aws/iam-access-analyzer-update-policy-validation/",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1055671,
            "date": "Fri 27 Oct 2023 16:51",
            "username": "\t\t\t\tpupsik\t\t\t",
            "content": "I don't think Trusted Advisor would give insights regarding SCP configurations, hence A. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1053659,
            "date": "Wed 25 Oct 2023 13:15",
            "username": "\t\t\t\tahrentom\t\t\t",
            "content": "best practices --> Trusted Advisor<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No, cuz Trusted Advisor doesn't analyze anything with the SCP level so hence A is correct here.</li></ul>",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1088653,
            "date": "Tue 05 Dec 2023 18:04",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "No, cuz Trusted Advisor doesn't analyze anything with the SCP level so hence A is correct here.",
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
        "question_text": "<p>A company uses Amazon RDS for MySQL as a database engine for its applications. A recent security audit revealed an RDS instance that is not compliant with company policy for encrypting data at rest. A security engineer at the company needs to ensure that all existing RDS databases are encrypted using server-side encryption and that any future deviations from the policy are detected.<br>Which combination of steps should the security engineer take to accomplish this? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#44",
            "answers": [
              {
                "choice": "<p>Create an AWS Config rule to detect the creation of unencrypted RDS databases. Create an Amazon EventBridge rule to trigger on the AWS Config rules compliance state change and use Amazon Simple Notification Service (Amazon SNS) to notify the security operations team.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS System Manager State Manager to detect RDS database encryption configuration drift. Create an Amazon EventBridge rule to track state changes and use Amazon Simple Notification Service (Amazon SNS) to notify the security operations team.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a read replica for the existing unencrypted RDS database and enable replica encryption in the process. Once the replica becomes active, promote it into a standalone database instance and terminate the unencrypted database instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Take a snapshot of the unencrypted RDS database. Copy the snapshot and enable snapshot encryption in the process. Restore the database instance from the newly created encrypted snapshot. Terminate the unencrypted database instance.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Enable encryption for the identified unencrypted RDS instance by changing the configurations of the existing database.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 44 discussion",
        "discusstion": [
          {
            "id": 1053667,
            "date": "Wed 25 Oct 2023 13:28",
            "username": "\t\t\t\tahrentom\t\t\t",
            "content": "A and D, here=C2=B4s another source<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/automatically-remediate-unencrypted-amazon-rds-db-instances-and-clusters.html",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 1100498,
            "date": "Tue 19 Dec 2023 10:56",
            "username": "\t\t\t\ttrashbox\t\t\t",
            "content": "Exam on 2023-12-18",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1046910,
            "date": "Wed 18 Oct 2023 14:44",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer is AD. <br>https://www.examtopics.com/discussions/amazon/view/60595-exam-aws-certified-security-specialty-topic-1-question-275/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AD"
          }
        ]
      },
      {
        "question_id": "#45",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has recently recovered from a security incident that required the restoration of Amazon EC2 instances from snapshots. The company uses an AWS Key Management Service (AWS KMS) customer managed key to encrypt all Amazon Elastic Block Store (Amazon EBS) snapshots.<br>The company performs a gap analysis of its disaster recovery procedures and backup strategies. A security engineer needs to implement a solution so that the company can recover the EC2 instances if the AWS account is compromised and the EBS snapshots are deleted.<br>Which solution will meet this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#45",
            "answers": [
              {
                "choice": "<p>Create a new Amazon S3 bucket. Use EBS lifecycle policies to move EBS snapshots to the new S3 bucket. Use lifecycle policies to move snapshots to the S3 Glacier Instant Retrieval storage class. Use S3 Object Lock to prevent deletion of the snapshots.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS Systems Manager to distribute a configuration that backs up all attached disks to Amazon S3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a new AWS account that has limited privileges. Allow the new account to access the KMS key that encrypts the EBS snapshots. Copy the encrypted snapshots to the new account on a recurring basis.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS Backup to copy EBS snapshots to Amazon S3. Use S3 Object Lock to prevent deletion of the snapshots.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 45 discussion",
        "discusstion": [
          {
            "id": 1113422,
            "date": "Thu 04 Jan 2024 09:21",
            "username": "\t\t\t\tTh3Dud3\t\t\t",
            "content": "c. You can add a vault lock to your AWS Backup Vault. So no need to use S3 object lock.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1086922,
            "date": "Sun 03 Dec 2023 17:13",
            "username": "\t\t\t\tconfusedyeti69\t\t\t",
            "content": "How compromise is compromised? You wouldn't have access to KMS if you choose C and your snapshots are in the same account if you choose D. <br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>This statement in option C \\\"Allow the new account to access the KMS key that encrypts the EBS snapshots\\\" clearly means that when you're creating a new account for a backup solution, you also have the appropriate 'Access' to encrypt and decrypt the keys as well. That's why it's further said to copy out the encrypted snapshots in the new account too for performing any future decrypt operations.<br><br>Hope it helps..</li><li>If you store the snapshot in account B that is encrypted with account A's key, and then lose access to the key (compromised), would you still be able to use the snapshot?</li><li>The key is in the KMS and account B has access to it.<br>if account A is gone, account B can still decrypt the snapshot, provided the account A did not have the right to delete this key in the KMS..</li></ul>",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1088661,
            "date": "Tue 05 Dec 2023 18:15",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "This statement in option C \\\"Allow the new account to access the KMS key that encrypts the EBS snapshots\\\" clearly means that when you're creating a new account for a backup solution, you also have the appropriate 'Access' to encrypt and decrypt the keys as well. That's why it's further said to copy out the encrypted snapshots in the new account too for performing any future decrypt operations.<br><br>Hope it helps..<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>If you store the snapshot in account B that is encrypted with account A's key, and then lose access to the key (compromised), would you still be able to use the snapshot?</li><li>The key is in the KMS and account B has access to it.<br>if account A is gone, account B can still decrypt the snapshot, provided the account A did not have the right to delete this key in the KMS..</li></ul>",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1090782,
            "date": "Fri 08 Dec 2023 06:29",
            "username": "\t\t\t\tconfusedyeti69\t\t\t",
            "content": "If you store the snapshot in account B that is encrypted with account A's key, and then lose access to the key (compromised), would you still be able to use the snapshot?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The key is in the KMS and account B has access to it.<br>if account A is gone, account B can still decrypt the snapshot, provided the account A did not have the right to delete this key in the KMS..</li></ul>",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1108316,
            "date": "Fri 29 Dec 2023 04:49",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "The key is in the KMS and account B has access to it.<br>if account A is gone, account B can still decrypt the snapshot, provided the account A did not have the right to delete this key in the KMS..",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1086713,
            "date": "Sun 03 Dec 2023 10:40",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "You cant use D because the snapshot can still be deleted even if under compliance mode, if the compromised AWS account is deleted.<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1081966,
            "date": "Mon 27 Nov 2023 22:36",
            "username": "\t\t\t\tawssecuritynewbie\t\t\t",
            "content": "but if the AWS account is compromised and they are worried about the AWS account being deleted...so it will lose the KMS key as well.It is a tricky question the S3 lock is not enough because you will lose the KMS keys.. but it should have a solution to copy the keys into the new account as well.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1063148,
            "date": "Sun 05 Nov 2023 18:41",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "C is the correct answer to me.<br><br>New AWS account with limited privileges - prevents the account from being compromised<br>Access to AWS KMS key - access to the key to decrypt data in the recovery account.<br>Copy snapshots to the recovery account (new account) on a recurring basis - This could be using AWS Backup as well or any other services.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1055684,
            "date": "Fri 27 Oct 2023 17:18",
            "username": "\t\t\t\tpupsik\t\t\t",
            "content": "\\\"Use S3 Object Lock to prevent deletion of the snapshots.\\\" makes this option vert viable, even if account gets compromised.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The only concern I have with D is that there is no mention of how to access the AWS KMS CMK key used for the encryption of EBS snpshots. Therefore, I will go for C. </li><li>It is creating a snapshot and storing it in S3 of the same account, there is no need for any KMS policy to be explicitly mention in the answer. But like another previous comment mentioned, it would be better to backup the keys as well if storing the backup snapshot in another account. I vote D as answer.</li><li>How I can export ebs Snapshot data to S3 bucket using AWS Backup?</li></ul>",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1063143,
            "date": "Sun 05 Nov 2023 18:34",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "The only concern I have with D is that there is no mention of how to access the AWS KMS CMK key used for the encryption of EBS snpshots. Therefore, I will go for C. <br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It is creating a snapshot and storing it in S3 of the same account, there is no need for any KMS policy to be explicitly mention in the answer. But like another previous comment mentioned, it would be better to backup the keys as well if storing the backup snapshot in another account. I vote D as answer.</li></ul>",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1086917,
            "date": "Sun 03 Dec 2023 17:00",
            "username": "\t\t\t\tconfusedyeti69\t\t\t",
            "content": "It is creating a snapshot and storing it in S3 of the same account, there is no need for any KMS policy to be explicitly mention in the answer. But like another previous comment mentioned, it would be better to backup the keys as well if storing the backup snapshot in another account. I vote D as answer.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1057638,
            "date": "Mon 30 Oct 2023 13:16",
            "username": "\t\t\t\tbannium\t\t\t",
            "content": "How I can export ebs Snapshot data to S3 bucket using AWS Backup?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1046925,
            "date": "Wed 18 Oct 2023 14:55",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer C.  The wording is rearranged, but same answer selections. <br>https://www.examtopics.com/discussions/amazon/view/69464-exam-aws-certified-security-specialty-topic-1-question-315/",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#46",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company's security engineer is designing an isolation procedure for Amazon EC2 instances as part of an incident response plan. The security engineer needs to isolate a target instance to block any traffic to and from the target instance, except for traffic from the company's forensics team. Each of the company's EC2 instances has its own dedicated security group. The EC2 instances are deployed in subnets of a VPC.  A subnet can contain multiple instances.<br>The security engineer is testing the procedure for EC2 isolation and opens an SSH session to the target instance. The procedure starts to simulate access to the target instance by an attacker. The security engineer removes the existing security group rules and adds security group rules to give the forensics team access to the target instance on port 22.<br>After these changes, the security engineer notices that the SSH connection is still active and usable. When the security engineer runs a ping command to the public IP address of the target instance, the ping command is blocked.<br>What should the security engineer do to isolate the target instance?</p>",
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
                "choice": "<p>Add an inbound rule to the security group to allow traffic from 0.0.0.0/0 for all ports. Add an outbound rule to the security group to allow traffic to 0.0.0.0/0 for all ports. Then immediately delete these rules.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Remove the port 22 security group rule. Attach an instance role policy that allows AWS Systems Manager Session Manager connections so that the forensics team can access the target instance.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create a network ACL that is associated with the target instance's subnet. Add a rule at the top of the inbound rule set to deny all traffic from 0.0.0.0/0. Add a rule at the top of the outbound rule set to deny all traffic to 0.0.0.0/0.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an AWS Systems Manager document that adds a host-level firewall rule to block all inbound traffic and outbound traffic. Run the document on the target instance.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 46 discussion",
        "discusstion": [
          {
            "id": 1116457,
            "date": "Mon 08 Jan 2024 07:48",
            "username": "\t\t\t\tyedaself\t\t\t",
            "content": "Answer is A.  It is about connection tracking. https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#untracked-connections<br>B is not relevant because question doesn't asks a way to connect to instance it asks why a tracked connection is not interrupted when security group rules changed.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>but the question says \\\"The security engineer removes the existing security group rules and adds security group rules to give the forensics team access to the target instance on port 22.\\\" so this practice was already done for the port 22...</li></ul>",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1118768,
            "date": "Wed 10 Jan 2024 16:47",
            "username": "\t\t\t\tdodino\t\t\t",
            "content": "but the question says \\\"The security engineer removes the existing security group rules and adds security group rules to give the forensics team access to the target instance on port 22.\\\" so this practice was already done for the port 22...",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1108331,
            "date": "Fri 29 Dec 2023 05:04",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "To isolate a specific EC2, security group is the way to go as it can affect targeted instance not the entire network.<br>A does not make sense, as security group is stateful network control.<br>B is using security group to isolate the EC2, and using session manager ensure exclusive access via management console.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1100499,
            "date": "Tue 19 Dec 2023 10:57",
            "username": "\t\t\t\ttrashbox\t\t\t",
            "content": "Exam on 2023-12-18",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1088664,
            "date": "Tue 05 Dec 2023 18:19",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "No doubt, it's B. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1063158,
            "date": "Sun 05 Nov 2023 18:57",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "There is no need for SSH port 22 since Systems Manager Session Manager can give the necessary access that the security team needs to the EC2 instances.",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1059600,
            "date": "Wed 01 Nov 2023 11:43",
            "username": "\t\t\t\ttatarevick\t\t\t",
            "content": "There can be multiple ec2 instances per subnet and C would block access to ALL of them. It is B",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1057115,
            "date": "Sun 29 Oct 2023 20:59",
            "username": "\t\t\t\tsnowmaggedon\t\t\t",
            "content": "Definitely B",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 1056215,
            "date": "Sat 28 Oct 2023 15:00",
            "username": "\t\t\t\tM2ao\t\t\t",
            "content": "shoud be C<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It can't be C for sure since it will block all ingress and outgress connections from the subnet level via NACL changes... that's not what's the ask is for in this use case... Def. it's B IMO.</li><li>There can be multiple ec2 instances per subnet and C would block access to ALL of them. It is B</li></ul>",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1084795,
            "date": "Thu 30 Nov 2023 22:46",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "It can't be C for sure since it will block all ingress and outgress connections from the subnet level via NACL changes... that's not what's the ask is for in this use case... Def. it's B IMO.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1057116,
            "date": "Sun 29 Oct 2023 21:00",
            "username": "\t\t\t\tsnowmaggedon\t\t\t",
            "content": "There can be multiple ec2 instances per subnet and C would block access to ALL of them. It is B",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#47",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A startup company is using a single AWS account that has resources in a single AWS Region. A security engineer configures an AWS CloudTrail trail in the same Region to deliver log files to an Amazon S3 bucket by using the AWS CLI.<br>Because of expansion, the company adds resources in multiple Regions. The security engineer notices that the logs from the new Regions are not reaching the S3 bucket.<br>What should the security engineer do to fix this issue with the LEAST amount of operational overhead?</p>",
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
                "choice": "<p>Create a new CloudTrail trail. Select the new Regions where the company added resources.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Change the S3 bucket to receive notifications to track all actions from all Regions.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a new CloudTrail trail that applies to all Regions.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Change the existing CloudTrail trail so that it applies to all Regions.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 47 discussion",
        "discusstion": [
          {
            "id": 1027488,
            "date": "Sat 07 Oct 2023 17:30",
            "username": "\t\t\t\tkk2000\t\t\t",
            "content": "Correct Answer is D<br>https://docs.aws.amazon.com/awscloudtrail/latest/userguide/receive-cloudtrail-log-files-from-multiple-regions.html",
            "upvote_count": "9",
            "selected_answers": ""
          },
          {
            "id": 1083922,
            "date": "Thu 30 Nov 2023 03:12",
            "username": "\t\t\t\tbrpjp\t\t\t",
            "content": "Question is new region trail not reaching to s3 bucket and not trail created from new region.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But each trail is independent and its region cannot be changed after the initial configuration=E2=80=A6and the answer D says =E2=80=9Cchange the trail=E2=80=9D not =E2=80=9Ccreate a new trail=E2=80=9D</li><li>Question specifically emphasis on the solution with 'LEAST amount of operational overhead' which is doable only through option D.  All other options still involves some kind of operational overhead. Hope it helps..</li></ul>",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1127550,
            "date": "Sun 21 Jan 2024 00:52",
            "username": "\t\t\t\tsmanzana\t\t\t",
            "content": "But each trail is independent and its region cannot be changed after the initial configuration=E2=80=A6and the answer D says =E2=80=9Cchange the trail=E2=80=9D not =E2=80=9Ccreate a new trail=E2=80=9D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1088669,
            "date": "Tue 05 Dec 2023 18:28",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Question specifically emphasis on the solution with 'LEAST amount of operational overhead' which is doable only through option D.  All other options still involves some kind of operational overhead. Hope it helps..",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1054309,
            "date": "Thu 26 Oct 2023 07:45",
            "username": "\t\t\t\tahrentom\t\t\t",
            "content": "go with D",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1046945,
            "date": "Wed 18 Oct 2023 15:17",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Agree answer is D.  Change the existing CloudTrail using AWS CLI, add the --is-multi-region-trail option to the update-trail command.",
            "upvote_count": "3",
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
        "question_text": "<p>A company's public Application Load Balancer (ALB) recently experienced a DDoS attack. To mitigate this issue, the company deployed Amazon CloudFront in front of the ALB so that users would not directly access the Amazon EC2 instances behind the ALB. <br>The company discovers that some traffic is still coming directly into the ALB and is still being handled by the EC2 instances.<br>Which combination of steps should the company take to ensure that the EC2 instances will receive traffic only from CloudFront? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#48",
            "answers": [
              {
                "choice": "<p>Configure CloudFront to add a cache key policy to allow a custom HTTP header that CloudFront sends to the ALB. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure CloudFront to add a custom HTTP header to requests that CloudFront sends to the ALB. <br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Configure the ALB to forward only requests that contain the custom HTTP header.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Configure the ALB and CloudFront to use the X-Forwarded-For header to check client IP addresses.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure the ALB and CloudFront to use the same X.509 certificate that is generated by AWS Certificate Manager (ACM).<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 48 discussion",
        "discusstion": [
          {
            "id": 1047027,
            "date": "Wed 18 Oct 2023 17:14",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer is BC. <br>https://www.examtopics.com/discussions/amazon/view/88447-exam-aws-certified-security-specialty-topic-1-question-437/",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 1088672,
            "date": "Tue 05 Dec 2023 18:30",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "W/o any doubt..",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 1086784,
            "date": "Sun 03 Dec 2023 12:46",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/example-function-add-true-client-ip-header.html<br>https://aws.amazon.com/blogs/security/three-most-important-aws-waf-rate-based-rules/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BC"
          }
        ]
      },
      {
        "question_id": "#49",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company discovers a billing anomaly in its AWS account. A security consultant investigates the anomaly and discovers that an employee who left the company 30 days ago still has access to the account. The company has not monitored account activity in the past.<br>The security consultant needs to determine which resources have been deployed or reconfigured by the employee as quickly as possible.<br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#49",
            "answers": [
              {
                "choice": "<p>In AWS Cost Explorer, filter chart data to display results from the past 30 days. Export the results to a data table. Group the data table by resource.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS Cost Anomaly Detection to create a cost monitor. Access the detection history. Set the time frame to Last 30 days. In the search area, choose the service category.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>In AWS CloudTrail, filter the event history to display results from the past 30 days. Create an Amazon Athena table that contains the data. Partition the table by event source.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS Audit Manager to create an assessment for the past 30 days. Apply a usage-based framework to the assessment. Configure the assessment to assess by resource.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 49 discussion",
        "discusstion": [
          {
            "id": 1047059,
            "date": "Wed 18 Oct 2023 18:18",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer C.  CloudTrail for as quickly as possible. Look up events related to the creation, modification, or deletion of resources in your AWS account.<br><br>AWS Cost Anomaly Detection: For a new service subscription, 10 days of historical service usage data is needed before anomalies can be detected for that service. If you create a new monitor, it can take up to 24 hours to begin detecting new anomalies.",
            "upvote_count": "7",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1139380,
            "date": "Sat 03 Feb 2024 16:38",
            "username": "\t\t\t\tawssecuritynewbie\t\t\t",
            "content": "I think C is the best answer but Athena is over kill",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1093943,
            "date": "Tue 12 Dec 2023 01:00",
            "username": "\t\t\t\tWeepingMaplte\t\t\t",
            "content": "Think only Cloudtrail records down resources reconfigured by the employee.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1087694,
            "date": "Mon 04 Dec 2023 15:11",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "The investigation was triggered by cost anomaly but that is not the only concern. The security engineer needs to find out what has been deployed as well as reconfigured, so AWS Cost explorer or Anomaly detection will not do the job. Only CloudTrail and Anthena will be the most effective method. Cost should have nothing to do with compliance so audit manager will not help.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1074218,
            "date": "Sat 18 Nov 2023 19:57",
            "username": "\t\t\t\tErnestokoro\t\t\t",
            "content": "Ans is B! Please see link below: https://docs.aws.amazon.com/cost-management/latest/userguide/getting-started-ad.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Don't think it can be B.  See this comment above:<br>\\\"AWS Cost Anomaly Detection: For a new service subscription, 10 days of historical service usage data is needed before anomalies can be detected for that service. If you create a new monitor, it can take up to 24 hours to begin detecting new anomalies.\\\"</li></ul>",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1076911,
            "date": "Wed 22 Nov 2023 05:39",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Don't think it can be B.  See this comment above:<br>\\\"AWS Cost Anomaly Detection: For a new service subscription, 10 days of historical service usage data is needed before anomalies can be detected for that service. If you create a new monitor, it can take up to 24 hours to begin detecting new anomalies.\\\"",
            "upvote_count": "2",
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
        "question_text": "<p>A security engineer is checking an AWS CloudFormation template for vulnerabilities. The security engineer finds a parameter that has a default value that exposes an application's API key in plaintext. The parameter is referenced several times throughout the template. The security engineer must replace the parameter while maintaining the ability to reference the value in the template.<br>Which solution will meet these requirements in the MOST secure way?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#50",
            "answers": [
              {
                "choice": "<p>Store the API key value as a SecureString parameter in AWS Systems Manager Parameter Store. In the template, replace all references to the value with {{resolve:ssm:MySSMParameterName:1}}.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Store the API key value in AWS Secrets Manager. In the template, replace all references to the value with {{resolve:secretsmanager:MySecretId:SecretString}}.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Store the API key value in Amazon DynamoDB.  In the template, replace all references to the value with {{resolve:dynamodb:MyTableName:MyPrimaryKey}}.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Store the API key value in a new Amazon S3 bucket. In the template, replace all references to the value with {{resolve:s3:MyBucketName:MyObjectName}}.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 50 discussion",
        "discusstion": [
          {
            "id": 1047079,
            "date": "Wed 18 Oct 2023 18:51",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Agree answer B. <br><br>Not A.  {{resolve:ssm:MySSMParameterName:1}}<br>ssm: Systems Manager Parameter Store plaintext parameter.<br>ssm-secure: Systems Manager Parameter Store secure string parameter.<br><br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html",
            "upvote_count": "8",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1101646,
            "date": "Wed 20 Dec 2023 15:40",
            "username": "\t\t\t\tdexterryu\t\t\t",
            "content": "This is a bit of a trick question. A is correct outside of the syntax in the ssm reference. Therefor B.  Had it been resolve:ssm-secure:MySSMParam then A would be correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1088675,
            "date": "Tue 05 Dec 2023 18:34",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "MOST secure way..",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1087699,
            "date": "Mon 04 Dec 2023 15:20",
            "username": "\t\t\t\tconfusedyeti69\t\t\t",
            "content": "Secure. B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1027500,
            "date": "Sat 07 Oct 2023 17:50",
            "username": "\t\t\t\tkk2000\t\t\t",
            "content": "Answer: B using secrets manager.(More secure way)<br>https://docs.aws.amazon.com/secretsmanager/latest/userguide/cfn-example_reference-secret.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Agree. SSM can create secure API string as well but the emphasis here is on MOST secure. Therefore, Secret Manager is the answer.</li></ul>",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 1049966,
            "date": "Sun 22 Oct 2023 01:54",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "Agree. SSM can create secure API string as well but the emphasis here is on MOST secure. Therefore, Secret Manager is the answer.",
            "upvote_count": "3",
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
        "question_text": "<p>A company's AWS CloudTrail logs are all centrally stored in an Amazon S3 bucket. The security team controls the company's AWS account. The security team must prevent unauthorized access and tampering of the CloudTrail logs.<br>Which combination of steps should the security team take? (Choose three.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ADE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#51",
            "answers": [
              {
                "choice": "<p>Configure server-side encryption with AWS KMS managed encryption keys (SSE-KMS).<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Compress log files with secure gzip.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Amazon EventBridge rule to notify the security team of any modifications on CloudTrail log files.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Implement least privilege access to the S3 bucket by configuring a bucket policy.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Configure CloudTrail log file integrity validation.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Configure Access Analyzer for S3.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 51 discussion",
        "discusstion": [
          {
            "id": 1076931,
            "date": "Wed 22 Nov 2023 06:27",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Here's what it describes about the usage of log file integration and the SSE-KMS usecase scenario:<br><br>\\\"If you use SSE-KMS and log file validation, and you have modified your Amazon S3 bucket policy to only allow SSE-KMS encrypted files, you will not be able to create trails that utilize that bucket unless you modify your bucket policy to specifically allow AES256 encryption, as shown in the following example policy line.<br><br>\\\"StringNotEquals\\\": { \\\"s3:x-amz-server-side-encryption\\\": [\\\"aws:kms\\\", \\\"AES256\\\"] }<br>\\\"",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: ADE"
          },
          {
            "id": 1054317,
            "date": "Thu 26 Oct 2023 07:58",
            "username": "\t\t\t\tahrentom\t\t\t",
            "content": "ADE<br>https://docs.aws.amazon.com/awscloudtrail/latest/userguide/best-practices-security.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: ADE"
          }
        ]
      },
      {
        "question_id": "#52",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has several petabytes of data. The company must preserve this data for 7 years to comply with regulatory requirements. The company's compliance team asks a security officer to develop a strategy that will prevent anyone from changing or deleting the data.<br>Which solution will meet this requirement MOST cost-effectively?</p>",
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
                "choice": "<p>Create an Amazon S3 bucket. Configure the bucket to use S3 Object Lock in compliance mode. Upload the data to the bucket. Create a resource-based bucket policy that meets all the regulatory requirements.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Amazon S3 bucket. Configure the bucket to use S3 Object Lock in governance mode. Upload the data to the bucket. Create a user-based IAM policy that meets all the regulatory requirements.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a vault in Amazon S3 Glacier. Create a Vault Lock policy in S3 Glacier that meets all the regulatory requirements. Upload the data to the vault.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Amazon S3 bucket. Upload the data to the bucket. Use a lifecycle rule to transition the data to a vault in S3 Glacier. Create a Vault Lock policy that meets all the regulatory requirements.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 52 discussion",
        "discusstion": [
          {
            "id": 1100501,
            "date": "Tue 19 Dec 2023 10:58",
            "username": "\t\t\t\ttrashbox\t\t\t",
            "content": "Exam on 2023-12-18",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1067414,
            "date": "Fri 10 Nov 2023 18:38",
            "username": "\t\t\t\tkejam\t\t\t",
            "content": "https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock-policy.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1059807,
            "date": "Wed 01 Nov 2023 15:40",
            "username": "\t\t\t\tcjkuga\t\t\t",
            "content": "Both A and C work here but C is the MOST cost-effective.",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1055780,
            "date": "Fri 27 Oct 2023 20:16",
            "username": "\t\t\t\tpupsik\t\t\t",
            "content": "Question doesn't ask for a backup solution, so Glacier is not a good fir here.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No, it clearly states that \\\"The company must preserve this data for 7 years\\\"... so how would you keep such large data safe and specifically complianced with all the regulatory reqs. That's why going with C here.</li></ul>",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1076935,
            "date": "Wed 22 Nov 2023 06:45",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "No, it clearly states that \\\"The company must preserve this data for 7 years\\\"... so how would you keep such large data safe and specifically complianced with all the regulatory reqs. That's why going with C here.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1051066,
            "date": "Sun 22 Oct 2023 22:24",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Correction, answer C",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1049979,
            "date": "Sun 22 Oct 2023 02:08",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "The correct answer here is C.  This option ticks all the boxes.<br><br> Several petabytes of data + 7 years + Regulatory Compliance + MOST cost-effective solution.<br><br>D is close but we don't S3 at all.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Thanks AgboolKun! What are your thoughts on #49?<br>Agree with answer C as well. Can set the policy on Vault Lock that cannot be altered.<br>https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-access-policy.html</li><li>@100fold, I agree with your answer (C) in #49. There is no better option to C!!<br><br>I upvoted your answer already!!</li><li>@AgboolaKun, I sat the exam Friday and marked 926. 80% from this study were on my exam. 6-7 new questions, one related to AWS KMS keyrings. Good luck everyone!</li><li>Wow!! Congratulations!! I am happy for you. I will be sitting for the exam soon. I will let you know!!</li><li>@AgboolKun. Awesome! All The Best wishes throughout your career =F0=9F=91=8D</li></ul>",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1051063,
            "date": "Sun 22 Oct 2023 22:22",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Thanks AgboolKun! What are your thoughts on #49?<br>Agree with answer C as well. Can set the policy on Vault Lock that cannot be altered.<br>https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-access-policy.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>@100fold, I agree with your answer (C) in #49. There is no better option to C!!<br><br>I upvoted your answer already!!</li><li>@AgboolaKun, I sat the exam Friday and marked 926. 80% from this study were on my exam. 6-7 new questions, one related to AWS KMS keyrings. Good luck everyone!</li><li>Wow!! Congratulations!! I am happy for you. I will be sitting for the exam soon. I will let you know!!</li><li>@AgboolKun. Awesome! All The Best wishes throughout your career =F0=9F=91=8D</li></ul>",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1063168,
            "date": "Sun 05 Nov 2023 19:15",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "@100fold, I agree with your answer (C) in #49. There is no better option to C!!<br><br>I upvoted your answer already!!<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>@AgboolaKun, I sat the exam Friday and marked 926. 80% from this study were on my exam. 6-7 new questions, one related to AWS KMS keyrings. Good luck everyone!</li><li>Wow!! Congratulations!! I am happy for you. I will be sitting for the exam soon. I will let you know!!</li><li>@AgboolKun. Awesome! All The Best wishes throughout your career =F0=9F=91=8D</li></ul>",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1064188,
            "date": "Mon 06 Nov 2023 20:22",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "@AgboolaKun, I sat the exam Friday and marked 926. 80% from this study were on my exam. 6-7 new questions, one related to AWS KMS keyrings. Good luck everyone!<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Wow!! Congratulations!! I am happy for you. I will be sitting for the exam soon. I will let you know!!</li><li>@AgboolKun. Awesome! All The Best wishes throughout your career =F0=9F=91=8D</li></ul>",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 1069853,
            "date": "Tue 14 Nov 2023 01:16",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "Wow!! Congratulations!! I am happy for you. I will be sitting for the exam soon. I will let you know!!<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>@AgboolKun. Awesome! All The Best wishes throughout your career =F0=9F=91=8D</li></ul>",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1072513,
            "date": "Thu 16 Nov 2023 16:03",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "@AgboolKun. Awesome! All The Best wishes throughout your career =F0=9F=91=8D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1047097,
            "date": "Wed 18 Oct 2023 19:17",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer A. <br>Compliance mode will prevent anyone from changing or deleting the data including the root user. Requested by the company's compliance team. <br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Correction to Answer C. <br>https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-access-policy.html</li></ul>",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1051064,
            "date": "Sun 22 Oct 2023 22:23",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Correction to Answer C. <br>https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-access-policy.html",
            "upvote_count": "1",
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
        "question_text": "<p>A-company uses a third-party identity provider and SAML-based SSO for its AWS accounts. After the third-party identity provider renewed an expired signing certificate, users saw the following message when trying to log in:<br>Error: Response Signature Invalid (Service: AWSSecurityTokenService; Status Code: 400; Error Code: InvalidIdentityToken)<br>A security engineer needs to provide a solution that corrects the error and minimizes operational overhead.<br>Which solution meets these requirements?</p>",
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
                "choice": "<p>Upload the third-party signing certificate's new private key to the AWS identity provider entity defined in AWS Identity and Access Management (IAM) by using the AWS Management Console.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Sign the identity provider's metadata file with the new public key. Upload the signature to the AWS identity provider entity defined in AWS Identity and Access Management (IAM) by using the AWS CLI.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Download the updated SAML metadata file from the identity service provider. Update the file in the AWS identity provider entity defined in AWS Identity and Access Management (IAM) by using the AWS CLI.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Configure the AWS identity provider entity defined in AWS Identity and Access Management (IAM) to synchronously fetch the new public key by using the AWS Management Console.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 53 discussion",
        "discusstion": [
          {
            "id": 1047110,
            "date": "Wed 18 Oct 2023 19:32",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer C. <br><br>https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_saml.html#troubleshoot_saml_invalid-metadata<br>https://www.examtopics.com/discussions/amazon/view/69166-exam-aws-certified-security-specialty-topic-1-question-292/",
            "upvote_count": "8",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1103350,
            "date": "Fri 22 Dec 2023 13:12",
            "username": "\t\t\t\tyorkicurke\t\t\t",
            "content": "nice link by user:100fold<br>thanks bud",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1086274,
            "date": "Sat 02 Dec 2023 16:03",
            "username": "\t\t\t\tawssecuritynewbie\t\t\t",
            "content": "Cis the correct answer",
            "upvote_count": "1",
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
        "question_text": "<p>A company has several workloads running on AWS. Employees are required to authenticate using on-premises ADFS and SSO to access the AWS Management Console. Developers migrated an existing legacy web application to an Amazon EC2 instance. Employees need to access this application from anywhere on the internet, but currently, there is no authentication system built into the application.<br>How should the security engineer implement employee-only access to this system without changing the application?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#54",
            "answers": [
              {
                "choice": "<p>Place the application behind an Application Load Balancer (ALB). Use Amazon Cognito as authentication for the ALB.  Define a SAML-based Amazon Cognito user pool and connect it to ADFS.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Implement AWS IAM Identity Center (AWS Single Sign-On) in the management account and link it to ADFS as an identity provider. Define the EC2 instance as a managed resource, then apply an IAM policy on the resource.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Define an Amazon Cognito identity pool, then install the connector on the Active Directory server. Use the Amazon Cognito SDK on the application instance to authenticate the employees using their Active Directory user names and passwords.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an AWS Lambda custom authorizer as the authenticator for a reverse proxy on Amazon EC2. Ensure the security group on Amazon EC2 only allows access from the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 54 discussion",
        "discusstion": [
          {
            "id": 1047303,
            "date": "Thu 19 Oct 2023 00:55",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer A. <br><br>https://docs.aws.amazon.com/elasticloadbalancing/latest/application/listener-authenticate-users.html<br>https://www.examtopics.com/discussions/amazon/view/30063-exam-aws-certified-security-specialty-topic-1-question-143/",
            "upvote_count": "9",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#55",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using AWS to run a long-running analysis process on data that is stored in Amazon S3 buckets. The process runs on a fleet of Amazon EC2 instances that are in an Auto Scaling group. The EC2 instances are deployed in a private subnet of a VPC that does not have internet access. The EC2 instances and the S3 buckets are in the same AWS account.<br>The EC2 instances access the S3 buckets through an S3 gateway endpoint that has the default access policy. Each EC2 instance is associated with an instance profile role that has a policy that explicitly allows the s3:GetObject action and the s3:PutObject action for only the required S3 buckets.<br>The company learns that one or more of the EC2 instances are compromised and are exfiltrating data to an S3 bucket that is outside the company's organization in AWS Organizations. A security engineer must implement a solution to stop this exfiltration of data and to keep the EC2 processing job functional.<br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#55",
            "answers": [
              {
                "choice": "<p>Update the policy on the S3 gateway endpoint to allow the S3 actions only if the values of the aws:ResourceOrgID and aws:PrincipalOrgID condition keys match the company's values.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Update the policy on the instance profile role to allow the S3 actions only if the value of the aws:ResourceOrgID condition key matches the company's value.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Add a network ACL rule to the subnet of the EC2 instances to block outgoing connections on port 443.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Apply an SCP on the AWS account to allow the S3 actions only if the values of the aws:ResourceOrgID and aws:PrincipalOrgID condition keys match the company's values.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 55 discussion",
        "discusstion": [
          {
            "id": 1067484,
            "date": "Fri 10 Nov 2023 20:26",
            "username": "\t\t\t\tkejam\t\t\t",
            "content": "Answer D based on the syntax of these answers.<br>A.  This could work, but you don't need aws:ResourceOrgID and aws:PrincipalOrgID You can add allowed buckets (internal or external) as needed which is much more flexible IMO.https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html#edit-vpc-endpoint-policy-s3<br>B.  This doesn't prevent S3 actions on external accounts.<br>C.  This does nothing as the S3 endpoint is inside the VPC. <br>D.  This solution matches the answer exactly.<br>Example 3: https://aws.amazon.com/blogs/security/how-to-control-access-to-aws-resources-based-on-aws-account-ou-or-organization/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I agree totally. I have always thought that D is the correct answer but I could not locate any supported documentation online. Thank you for providing the link. The example 3 in the link as you pointed out tallies with the scenario in this question.</li></ul>",
            "upvote_count": "8",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1070990,
            "date": "Wed 15 Nov 2023 02:21",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "I agree totally. I have always thought that D is the correct answer but I could not locate any supported documentation online. Thank you for providing the link. The example 3 in the link as you pointed out tallies with the scenario in this question.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1049185,
            "date": "Sat 21 Oct 2023 01:45",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "D<br>https://aws.amazon.com/blogs/security/how-to-control-access-to-aws-resources-based-on-aws-account-ou-or-organization/",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 1141293,
            "date": "Mon 05 Feb 2024 17:55",
            "username": "\t\t\t\tLazyAutonomy\t\t\t",
            "content": "Answer is A. <br>D is wrong because attackers wont use EC2 instance credentials to exfil data - no attacker is that stupid.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html#edit-vpc-endpoint-policy-s3<br>https://developer.squareup.com/blog/adopting-aws-vpc-endpoints-at-square/</li></ul>",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1141296,
            "date": "Mon 05 Feb 2024 18:00",
            "username": "\t\t\t\tLazyAutonomy\t\t\t",
            "content": "https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html#edit-vpc-endpoint-policy-s3<br>https://developer.squareup.com/blog/adopting-aws-vpc-endpoints-at-square/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1140555,
            "date": "Sun 04 Feb 2024 22:58",
            "username": "\t\t\t\tmark16dc\t\t\t",
            "content": "Given the effectiveness and direct impact on preventing data exfiltration to external S3 buckets, Option D is the correct solution. It leverages the organizational control provided by AWS Organizations to enforce policy restrictions at the account level, ensuring that S3 actions are confined to the company's organizational boundaries, thus meeting the security requirements without disrupting the EC2 processing jobs.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1113737,
            "date": "Thu 04 Jan 2024 15:15",
            "username": "\t\t\t\tRNan\t\t\t",
            "content": "Answer: B<br>The compromised EC2 instances are exfiltrating data to an S3 bucket outside the company's organization. By updating the policy on the instance profile role, you can restrict the S3 actions to only allow access to the required S3 buckets within the company's organization.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1111065,
            "date": "Mon 01 Jan 2024 10:37",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "Between A and D, A must be ruled out because:<br>\\\"An endpoint policy does not override or replace identity-based policies or resource-based policies. \\\" So, either the compromised ec2 instance or the external s3 can override the endpoint policy.<br>https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-access.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1108709,
            "date": "Fri 29 Dec 2023 14:26",
            "username": "\t\t\t\tDebbieB67\t\t\t",
            "content": "Answer D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1103364,
            "date": "Fri 22 Dec 2023 13:45",
            "username": "\t\t\t\tyorkicurke\t\t\t",
            "content": "This ensures that only resources from within the company's AWS Organization can access the S3 bucket through the endpoint. This prevents any exfiltration of data from compromised EC2 instances to external S3 buckets, while STILL allowing the processing job on the instances to function normally by accessing the company's internal S3 resources through the private endpoint.<br>https://repost.aws/questions/QU2Qx3s51DQ9SyrlWueh9L_Q/restrict-access-to-s3-bucket",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1098256,
            "date": "Sat 16 Dec 2023 15:58",
            "username": "\t\t\t\tOralinux\t\t\t",
            "content": "Answer B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1097575,
            "date": "Fri 15 Dec 2023 19:24",
            "username": "\t\t\t\t1c7c461\t\t\t",
            "content": "The answer is B.  You all missed the part that EC2 instance is compromised. The restriction has to be added to the instance profile of the ec2 instance to restrict which S3 buckets it can connect to. This question is about limiting access from EC2 to external S3 buckets.",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1094477,
            "date": "Tue 12 Dec 2023 13:33",
            "username": "\t\t\t\tWeepingMaplte\t\t\t",
            "content": "I will go with A although D is also a possible method.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1088721,
            "date": "Tue 05 Dec 2023 19:40",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "D is the correct option.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1086484,
            "date": "Sun 03 Dec 2023 00:57",
            "username": "\t\t\t\tsnowmaggedon\t\t\t",
            "content": "D.  I have seen this is many other practice tests.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1086277,
            "date": "Sat 02 Dec 2023 16:10",
            "username": "\t\t\t\tawssecuritynewbie\t\t\t",
            "content": "if they are exfiltrating data via the EC2 to a S3 bucket, then ACL will not help either SCP, you would need to modify the S3 endpoint so allow access to only the Aws Org and not other S3 buckets in AWS.<br>Answer would be A:",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1086247,
            "date": "Sat 02 Dec 2023 15:17",
            "username": "\t\t\t\tmarco25\t\t\t",
            "content": "Choosing between a and D, A has the issue of not able to prevent direct we access bypassing the gateway.So voted d",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1079256,
            "date": "Fri 24 Nov 2023 13:38",
            "username": "\t\t\t\tmarlonchin\t\t\t",
            "content": "Does this Q mention any company resources needed to access the S3? EC2 access only through the S3 gateway endpoint. Ithink it should be A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1058414,
            "date": "Tue 31 Oct 2023 03:27",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Please disregard my previous answer to eliminate any confusion. Weighing out A or B. <br><br>The solution request is to stop exfiltration of data",
            "upvote_count": "2",
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
        "question_text": "<p>A company that operates in a hybrid cloud environment must meet strict compliance requirements. The company wants to create a report that includes evidence from on-premises workloads alongside evidence from AWS resources. A security engineer must implement a solution to collect, review, and manage the evidence to demonstrate compliance with company policy.<br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#56",
            "answers": [
              {
                "choice": "<p>Create an assessment in AWS Audit Manager from a prebuilt framework or a custom framework. Upload manual evidence from the on-premises workloads. Add the evidence to the assessment. Generate an assessment report after Audit Manager collects the necessary evidence from the AWS resources.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Install the Amazon CloudWatch agent on the on-premises workloads. Use AWS Config to deploy a conformance pack from a sample conformance pack template or a custom YAML template. Generate an assessment report after AWS Config identifies noncompliant workloads and resources.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Set up the appropriate security standard in AWS Security Hub. Upload manual evidence from the on-premises workloads. Wait for Security Hub to collect the evidence from the AWS resources. Download the list of controls as a .csv file.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Install the Amazon CloudWatch agent on the on-premises workloads. Create a CloudWatch dashboard to monitor the on-premises workloads and the AWS resources. Run a query on the workloads and resources. Download the results.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 56 discussion",
        "discusstion": [
          {
            "id": 1094522,
            "date": "Tue 12 Dec 2023 13:57",
            "username": "\t\t\t\tWeepingMaplte\t\t\t",
            "content": "The keyword in the question is \\\"evidence\\\".AWS Audit Manager manages evidences.<br>https://docs.aws.amazon.com/audit-manager/latest/userguide/what-is.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1087728,
            "date": "Mon 04 Dec 2023 16:02",
            "username": "\t\t\t\tconfusedyeti69\t\t\t",
            "content": "voted A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1083959,
            "date": "Thu 30 Nov 2023 04:27",
            "username": "\t\t\t\tbrpjp\t\t\t",
            "content": "Requirement is company policy compliance, which security hub supports and not Audit Manager. C is correct answer.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Source for this statement pls?... See the below Audit Manager link which justifies option A instead:<br>https://aws.amazon.com/blogs/aws/aws-audit-manager-simplifies-audit-preparation/</li></ul>",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1088746,
            "date": "Tue 05 Dec 2023 20:00",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Source for this statement pls?... See the below Audit Manager link which justifies option A instead:<br>https://aws.amazon.com/blogs/aws/aws-audit-manager-simplifies-audit-preparation/",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1047326,
            "date": "Thu 19 Oct 2023 01:37",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer A",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1027523,
            "date": "Sat 07 Oct 2023 18:15",
            "username": "\t\t\t\tkk2000\t\t\t",
            "content": "A<br>https://aws.amazon.com/blogs/aws/aws-audit-manager-simplifies-audit-preparation/",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#57",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>To meet regulatory requirements, a security engineer needs to implement an IAM policy that restricts the use of AWS services to the us-east-1 Region.<br>What policy should the engineer implement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#57",
            "answers": [
              {
                "choice": "<p><br><img src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image8.png\"><br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p><br><img src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image9.png\"><br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p><br><img src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image10.png\"><br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p><br><img src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image11.png\"><br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 57 discussion",
        "discusstion": [
          {
            "id": 1047328,
            "date": "Thu 19 Oct 2023 01:44",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer C<br><br>https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_aws_deny-requested-region.html",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1104278,
            "date": "Sat 23 Dec 2023 21:32",
            "username": "\t\t\t\trahav\t\t\t",
            "content": "Answer is C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1071124,
            "date": "Wed 15 Nov 2023 07:02",
            "username": "\t\t\t\tlmimi\t\t\t",
            "content": "Why not A? C is just not denied, but not explicit allow.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A can't be correct since the 'Deny' always takes the precedence over 'Allow' if any similar SID policy statement is defined. The option C looks correct since it denies the access of the aws resources explicitly through the condition that 'IF' the region is not equal to 'us-east-1'. Since the question states that the access restriction should be limited to just us-east-1 region only.</li></ul>",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1079049,
            "date": "Fri 24 Nov 2023 06:33",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "A can't be correct since the 'Deny' always takes the precedence over 'Allow' if any similar SID policy statement is defined. The option C looks correct since it denies the access of the aws resources explicitly through the condition that 'IF' the region is not equal to 'us-east-1'. Since the question states that the access restriction should be limited to just us-east-1 region only.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1027531,
            "date": "Sat 07 Oct 2023 18:27",
            "username": "\t\t\t\tkk2000\t\t\t",
            "content": "C is Correct",
            "upvote_count": "2",
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
        "question_text": "<p>A company has a web server in the AWS Cloud. The company will store the content for the web server in an Amazon S3 bucket. A security engineer must use an Amazon CloudFront distribution to speed up delivery of the content. None of the files can be publicly accessible from the S3 bucket directly.<br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#58",
            "answers": [
              {
                "choice": "<p>Configure the permissions on the individual files in the S3 bucket so that only the CloudFront distribution has access to them.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an origin access control (OAC). Associate the OAC with the CloudFront distribution. Configure the S3 bucket permissions so that only the OAC can access the files in the S3 bucket.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create an S3 role in AWS Identity and Access Management (IAM). Allow only the CloudFront distribution to assume the role to access the files in the S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an S3 bucket policy that uses only the CloudFront distribution ID as the principal and the Amazon Resource Name (ARN) as the target.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 58 discussion",
        "discusstion": [
          {
            "id": 1047329,
            "date": "Thu 19 Oct 2023 01:53",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer B. <br>Amazon CloudFront introduces Origin Access Control (OAC) <br>https://aws.amazon.com/blogs/networking-and-content-delivery/amazon-cloudfront-introduces-origin-access-control-oac/",
            "upvote_count": "9",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1108078,
            "date": "Thu 28 Dec 2023 20:54",
            "username": "\t\t\t\tnouns\t\t\t",
            "content": "Option B: When you associate an OAI with a CloudFront distribution, it acts as a pseudo-user for the distribution, and you can configure S3 bucket permissions to grant access only to that OAI. This allows CloudFront to fetch and serve objects from the S3 bucket on behalf of the end-users without making the objects directly accessible from the S3 bucket.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#59",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A security engineer logs in to the AWS Lambda console with administrator permissions. The security engineer is trying to view logs in Amazon CloudWatch for a Lambda function that is named myFunction. When the security engineer chooses the option in the Lambda console to view logs in CloudWatch, an \"error loading Log Streams\" message appears.<br>The IAM policy for the Lambda function's execution role contains the following:<br><img title=\"image12\" src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image12.png\"><br>How should the security engineer correct the error?</p>",
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
                "choice": "<p>Move the logs:CreateLogGroup action to the second Allow statement.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Add the logs:PutDestination action to the second Allow statement.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Add the logs:GetLogEvents action to the second Allow statement.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Add the logs:CreateLogStream action to the second Allow statement.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 59 discussion",
        "discusstion": [
          {
            "id": 1132194,
            "date": "Fri 26 Jan 2024 02:16",
            "username": "\t\t\t\tmynickc\t\t\t",
            "content": "putlogevent require logstream. so it is createlogstream. https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/permissions-reference-cwl.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1128511,
            "date": "Mon 22 Jan 2024 11:28",
            "username": "\t\t\t\tGafa255\t\t\t",
            "content": "C is correct options because Security Engineer wants to see LOG. logs:GetLogEvents<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-identity-based-access-control-cwl.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Sorry the correct options is D because the issue is when the Lambda function want to create the streams.</li></ul>",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1128514,
            "date": "Mon 22 Jan 2024 11:30",
            "username": "\t\t\t\tGafa255\t\t\t",
            "content": "Sorry the correct options is D because the issue is when the Lambda function want to create the streams.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1079411,
            "date": "Fri 24 Nov 2023 16:45",
            "username": "\t\t\t\tmarlonchin\t\t\t",
            "content": "D I don't think adding logs is not the responsibility of the Lamda function here",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1077803,
            "date": "Wed 22 Nov 2023 21:53",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "Seems poorly written to me.. The engineer is trying to view the logs. So they'll need \\\"logs:GetLogEvents \\\" permission. However the policy is also missing\\\"logs:CreateLogStream\\\" so they will also need that in order for the Lambda to \\\"create a new log stream\\\". Doubt something this bad will be on the exam",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1072812,
            "date": "Thu 16 Nov 2023 22:15",
            "username": "\t\t\t\tYR4591\t\t\t",
            "content": "When creating log group, there should be a permission to put log streams in the log group",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1067529,
            "date": "Fri 10 Nov 2023 22:11",
            "username": "\t\t\t\tkejam\t\t\t",
            "content": "Answer C.  The security engineer wants to view logs in CloudWatch.<br>A.  logs:CreateLogGroup - Required to create a new log groupB.  logs:PutDestination - Required to create or update a destination log streamC.  Add the logs:GetLogEvents - Required to retrieve log events from a log streamD.  Add the logs:CreateLogStream - Required to create a new log stream in a log group<br><br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/permissions-reference-cwl.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But w/o creating the LogStream, how can the PutLogStream going to work from option C?.. that looks missing to me though..</li></ul>",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1088762,
            "date": "Tue 05 Dec 2023 20:40",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "But w/o creating the LogStream, how can the PutLogStream going to work from option C?.. that looks missing to me though..",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1047348,
            "date": "Thu 19 Oct 2023 01:59",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer D<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-identity-based-access-control-cwl.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1027534,
            "date": "Sat 07 Oct 2023 18:31",
            "username": "\t\t\t\tkk2000\t\t\t",
            "content": "Correct Answer is D",
            "upvote_count": "3",
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
        "question_text": "<p>A company has a new partnership with a vendor. The vendor will process data from the company's customers. The company will upload data files as objects into an Amazon S3 bucket. The vendor will download the objects to perform data processing. The objects will contain sensitive data.<br>A security engineer must implement a solution that prevents objects from residing in the S3 bucket for longer than 72 hours.<br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#60",
            "answers": [
              {
                "choice": "<p>Use Amazon Macie to scan the S3 bucket for sensitive data every 72 hours. Configure Macie to delete the objects that contain sensitive data when they are discovered.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure an S3 Lifecycle rule on the S3 bucket to expire objects that have been in the S3 bucket for 72 hours.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Amazon EventBridge scheduled rule that invokes an AWS Lambda function every day. Program the Lambda function to remove any objects that have been in the S3 bucket for 72 hours.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use the S3 Intelligent-Tiering storage class for all objects that are uploaded to the S3 bucket. Use S3 Intelligent-Tiering to expire objects that have been in the $3 bucket for 72 hours.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 60 discussion",
        "discusstion": [
          {
            "id": 1047387,
            "date": "Thu 19 Oct 2023 02:26",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "B<br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/how-to-set-lifecycle-configuration-intro.html",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1087120,
            "date": "Sun 03 Dec 2023 22:06",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "B is self-explanatory and sufficient.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#61",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company accidentally deleted the private key for an Amazon Elastic Block Store (Amazon EBS)-backed Amazon EC2 instance. A security engineer needs to regain access to the instance.<br>Which combination of steps will meet this requirement? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#61",
            "answers": [
              {
                "choice": "<p>Stop the instance. Detach the root volume. Generate a new key pair.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Keep the instance running. Detach the root volume. Generate a new key pair.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>When the volume is detached from the original instance, attach the volume to another instance as a data volume. Modify the authorized_keys file with a new public key. Move the volume back to the original instance. Start the instance.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>When the volume is detached from the original instance, attach the volume to another instance as a data volume. Modify the authorized_keys file with a new private key. Move the volume back to the original instance. Start the instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>When the volume is detached from the original instance, attach the volume to another instance as a data volume. Modify the authorized_keys file with a new public key. Move the volume back to the original instance that is running.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 61 discussion",
        "discusstion": [
          {
            "id": 1047390,
            "date": "Thu 19 Oct 2023 02:28",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer AC<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesConnecting.html#replacing-lost-key-pair",
            "upvote_count": "7",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 1088913,
            "date": "Wed 06 Dec 2023 01:59",
            "username": "\t\t\t\tjeff001\t\t\t",
            "content": "A & C. Stop the instance, detach its root volume and attach it to another instance as a data volume, modify the authorized_keys file with a new public key, move the volume back to the original instance, and restart the instance",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 1083042,
            "date": "Wed 29 Nov 2023 02:32",
            "username": "\t\t\t\t352ae9a\t\t\t",
            "content": "Answer AC",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#62",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company purchased a subscription to a third-party cloud security scanning solution that integrates with AWS Security Hub. A security engineer needs to implement a solution that will remediate the findings from the third-party scanning solution automatically.<br>Which solution will meet this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#62",
            "answers": [
              {
                "choice": "<p>Set up an Amazon EventBridge rule that reacts to new Security Hub findings. Configure an AWS Lambda function as the target for the rule to remediate the findings.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Set up a custom action in Security Hub. Configure the custom action to call AWS Systems Manager Automation runbooks to remediate the findings.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Set up a custom action in Security Hub. Configure an AWS Lambda function as the target for the custom action to remediate the findings.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Set up AWS Config rules to use AWS Systems Manager Automation runbooks to remediate the findings.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 62 discussion",
        "discusstion": [
          {
            "id": 1047404,
            "date": "Thu 19 Oct 2023 02:44",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer A<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/automate-remediation-for-aws-security-hub-standard-findings.html",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1133087,
            "date": "Sat 27 Jan 2024 06:55",
            "username": "\t\t\t\tDerets\t\t\t",
            "content": "Answer B<br>Custom action is a native feature for Security Hub when using a 3rd-party library. Then you need to use Systems Manager Automation runbooks.<br>Answer A (EventBridge+Lambda) can be used for standard findings.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1104499,
            "date": "Sun 24 Dec 2023 09:21",
            "username": "\t\t\t\tyorkicurke\t\t\t",
            "content": "Verty tricky one. A,B and C can all be implemented. and we havent asked for easy,quickly or something like that a solution. so reason for not picking others<br><br>A:- could also be used but would require additional steps to configure rules to route findings from this specific third-party source to the appropriate target. Custom actions provide a native option within Security Hub.<br><br>C:- identical to B.  same reasoning that Custom actions provide a native option within Security Hub.<br><br>to be honest i could go for any out of these three. even though i chose B.  Arghhhh",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1088777,
            "date": "Tue 05 Dec 2023 20:54",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "To remediate the findings automatically, option A describes about the best practices..",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#63",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An application is running on an Amazon EC2 instance that has an IAM role attached. The IAM role provides access to an AWS Key Management Service (AWS KMS) customer managed key and an Amazon S3 bucket. The key is used to access 2 TB of sensitive data that is stored in the S3 bucket.<br>A security engineer discovers a potential vulnerability on the EC2 instance that could result in the compromise of the sensitive data. Due to other critical operations, the security engineer cannot immediately shut down the EC2 instance for vulnerability patching.<br>What is the FASTEST way to prevent the sensitive data from being exposed?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#63",
            "answers": [
              {
                "choice": "<p>Download the data from the existing S3 bucket to a new EC2 instance. Then delete the data from the S3 bucket. Re-encrypt the data with a client-based key. Upload the data to a new S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Block access to the public range of S3 endpoint IP addresses by using a host-based firewall. Ensure that internet-bound traffic from the affected EC2 instance is routed through the host-based firewall.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Revoke the IAM role's active session permissions. Update the S3 bucket policy to deny access to the IAM role. Remove the IAM role from the EC2 instance profile.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Disable the current key. Create a new KMS key that the IAM role does not have access to, and re-encrypt all the data with the new key. Schedule the compromised key for deletion.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 63 discussion",
        "discusstion": [
          {
            "id": 1093168,
            "date": "Mon 11 Dec 2023 08:10",
            "username": "\t\t\t\ttapupa\t\t\t",
            "content": "itexamstest.com<br><br>no disscusion c :)",
            "upvote_count": "13",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1092467,
            "date": "Sun 10 Dec 2023 12:46",
            "username": "\t\t\t\tOralinux\t\t\t",
            "content": "C.  Revoke the IAM role's active session permissions.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 1091422,
            "date": "Sat 09 Dec 2023 04:11",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "This contains more detail response. Refer to part 2 for containment step. The first step is always to deal with the role access first.<br>https://www.bicarait.com/2021/04/27/aws-incident-response-unintended-access-to-s3-bucket/<br>It only takes a few minutes for policy updates to effectively revoke the role's temporary security credentials to force all users assuming the role to reauthenticate and request new credentials. (as compare to re-encrypt entire s3 bucket data to a single new key)<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_disable-perms.html#deny-access-to-all-sessions<br>Furthermore, though unrelated to the requirement:<br>The s3 bucket may be encrypted by multiple data keys which is intended. by re-encrypting the entire bucket, you may affect data that are encrypted by other legitimate keys unaffected by this vulnerable ec2.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1079432,
            "date": "Fri 24 Nov 2023 17:56",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Still v confusing btw C and D. ... but I'd probably go with C. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1067550,
            "date": "Fri 10 Nov 2023 23:10",
            "username": "\t\t\t\tkejam\t\t\t",
            "content": "Answer D.  The fastest way to prevent sensitive data from being exposed is to disable the current key.<br>A.  Not fastB.  Not fastC.  AWSRevokeOlderSessions is fast, however bad actors can immediately reconnect with new sessions before you remove the IAM role from the EC2 instance profile.If these steps were reversed to prevent that its no longer the fastest solution because its 2 steps.D.  Disable the current key...1st step prevents sensitive data exposure and the rest of the steps to re-encrypt the data with a new key can follow.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>If your bucket has millions of objects, re-encryption is slower. Ans is C</li><li>No, that's not the point here. The req. is to implement it 'FASTER' to get it secured on the first attempt which I also feel Option D provides it. Disabling the key right away can atleast help ensure that no sensitive data would get exposed further IMO... and then the rest of the steps to re-encrypting the data can be done as a 2nd step to follow...</li></ul>",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1088192,
            "date": "Tue 05 Dec 2023 06:01",
            "username": "\t\t\t\tconfusedyeti69\t\t\t",
            "content": "If your bucket has millions of objects, re-encryption is slower. Ans is C<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No, that's not the point here. The req. is to implement it 'FASTER' to get it secured on the first attempt which I also feel Option D provides it. Disabling the key right away can atleast help ensure that no sensitive data would get exposed further IMO... and then the rest of the steps to re-encrypting the data can be done as a 2nd step to follow...</li></ul>",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1088786,
            "date": "Tue 05 Dec 2023 21:14",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "No, that's not the point here. The req. is to implement it 'FASTER' to get it secured on the first attempt which I also feel Option D provides it. Disabling the key right away can atleast help ensure that no sensitive data would get exposed further IMO... and then the rest of the steps to re-encrypting the data can be done as a 2nd step to follow...",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1047407,
            "date": "Thu 19 Oct 2023 02:48",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer C<br>https://www.examtopics.com/discussions/amazon/view/60659-exam-aws-certified-security-specialty-topic-1-question-287/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#64",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is building an application on AWS that will store sensitive information. The company has a support team with access to the IT infrastructure, including databases. The company's security engineer must introduce measures to protect the sensitive data against any data breach while minimizing management overhead. The credentials must be regularly rotated.<br>What should the security engineer recommend?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#64",
            "answers": [
              {
                "choice": "<p>Enable Amazon RDS encryption to encrypt the database and snapshots. Enable Amazon Elastic Block Store (Amazon EBS) encryption on Amazon EC2 instances. Include the database credential in the EC2 user data field. Use an AWS Lambda function to rotate database credentials. Set up TLS for the connection to the database.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Install a database on an Amazon EC2 instance. Enable third-party disk encryption to encrypt the Amazon Elastic Block Store (Amazon EBS) volume. Store the database credentials in AWS CloudHSM with automatic rotation. Set up TLS for the connection to the database.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Enable Amazon RDS encryption to encrypt the database and snapshots. Enable Amazon Elastic Black Store (Amazon EBS) encryption on Amazon EC2 instances. Store the database credentials in AWS Secrets Manager with automatic rotation. Set up TLS for the connection to the RDS hosted database.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Set up an AWS CloudHSM cluster with AWS Key Management Service (AWS KMS) to store KMS keys. Set up Amazon RDS encryption using AWS KMS to encrypt the database. Store database credentials in the AWS Systems Manager Parameter Store with automatic rotation. Set up TLS for the connection to the RDS hosted database.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 64 discussion",
        "discusstion": [
          {
            "id": 1067553,
            "date": "Fri 10 Nov 2023 23:18",
            "username": "\t\t\t\tkejam\t\t\t",
            "content": "Answer C<br>https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_turn-on-for-db.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1047409,
            "date": "Thu 19 Oct 2023 02:50",
            "username": "\t\t\t\t100fold\t\t\t",
            "content": "Answer C<br>https://www.examtopics.com/discussions/amazon/view/60739-exam-aws-certified-security-specialty-topic-1-question-268/",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#65",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using Amazon Route 53 Resolver for its hybrid DNS infrastructure. The company has set up Route 53 Resolver forwarding rules for authoritative domains that are hosted on on-premises DNS servers.<br><br>A new security mandate requires the company to implement a solution to log and query DNS traffic that goes to the on-premises DNS servers. The logs must show details of the source IP address of the instance from which the query originated. The logs also must show the DNS name that was requested in Route 53 Resolver.<br><br>Which solution will meet these requirements?</p>",
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
                "choice": "<p>Use VPC Traffic Mirroring. Configure all relevant elastic network interfaces as the traffic source, include amazon-dns in the mirror filter, and set Amazon CloudWatch Logs as the mirror target. Use CloudWatch Insights on the mirror session logs to run queries on the source IP address and DNS name.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure VPC flow logs on all relevant VPCs. Send the logs to an Amazon S3 bucket. Use Amazon Athena to run SQL queries on the source IP address and DNS name.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure Route 53 Resolver query logging on all relevant VPCs. Send the logs to Amazon CloudWatch Logs. Use CloudWatch Insights to run queries on the source IP address and DNS name.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Modify the Route 53 Resolver rules on the authoritative domains that forward to the on-premises DNS servers. Send the logs to an Amazon S3 bucket. Use Amazon Athena to run SQL queries on the source IP address and DNS name.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 65 discussion",
        "discusstion": [
          {
            "id": 1111089,
            "date": "Mon 01 Jan 2024 11:12",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "C is the only answer as you need to config resolver query logging on all vpc, and cloudwatch log insight indeed allow you to query the source IP address.<br><br>https://aws.amazon.com/blogs/aws/log-your-vpc-dns-queries-with-route-53-resolver-query-logs/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1110722,
            "date": "Sun 31 Dec 2023 18:21",
            "username": "\t\t\t\tbrpjp\t\t\t",
            "content": "Correct answer is D.  https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html. Please read this statement : Resolver rules enable you to create one forwarding rule for each domain name and specify the name of the domain for which you want to forward DNS queries from your VPC to an on-premises DNS resolver and from your on-premises to your VPC.  Rules are applied directly to your VPC and can be shared across multiple accounts. so correct answer, based on above statement is D and not C, as it does not specify the requirements to send outbound connections to on-premise.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1087558,
            "date": "Mon 04 Dec 2023 11:16",
            "username": "\t\t\t\tahrentom\t\t\t",
            "content": "For me it=C2=B4s anwser C<br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver-query-logs.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1079476,
            "date": "Fri 24 Nov 2023 18:56",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "Seems like it's C<br><br>https://medium.com/@sisodiyapradeep/dns-query-logging-aggregation-control-tower-environment-well-architected-telemetry-workload-266dcdbf7195",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1078682,
            "date": "Thu 23 Nov 2023 20:11",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1078633,
            "date": "Thu 23 Nov 2023 19:16",
            "username": "\t\t\t\tmarlonchin\t\t\t",
            "content": "https://repost.aws/knowledge-center/route53-view-endpoint-traffic",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#66",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A security engineer is configuring account-based access control (ABAC) to allow only specific principals to put objects into an Amazon S3 bucket. The principals already have access to Amazon S3.<br><br>The security engineer needs to configure a bucket policy that allows principals to put objects into the S3 bucket only if the value of the Team tag on the object matches the value of the Team tag that is associated with the principal. During testing, the security engineer notices that a principal can still put objects into the S3 bucket when the tag values do not match.<br><br>Which combination of factors are causing the PutObject operation to succeed when the tag values are different? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#66",
            "answers": [
              {
                "choice": "<p>The principal's identity-based policy grants access to put objects into the S3 bucket with no conditions.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>The principal's identity-based policy overrides the condition because the identity-based policy contains an explicit allow.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The S3 bucket's resource policy does not deny access to put objects.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>The S3 bucket's resource policy cannot allow actions to the principal.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The bucket policy does not apply to principals in the same zone of trust.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 66 discussion",
        "discusstion": [
          {
            "id": 1104509,
            "date": "Sun 24 Dec 2023 09:52",
            "username": "\t\t\t\trahav\t\t\t",
            "content": "AC is the correct ones",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 1092525,
            "date": "Sun 10 Dec 2023 14:58",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_attribute-based-access-control.html<br>Look out for step 2- create ABAC policy example.<br>To ensure that resources is only granted when principal and resource tag match, there should be condition for the access, and disallow when tag not match.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 1079487,
            "date": "Fri 24 Nov 2023 19:28",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "BDE Don't appear to make much sense. So A C it is.<br><br>The resource policy should be setup to DENY if a tag DOES NOT MATCH the desired tags. Not ALLOW the tag listed alone. Otherwise, a IAM policy without conditions may be enough to provide access. Not a fan of this question as it leaves a ton up in the air but hey..",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 1078683,
            "date": "Thu 23 Nov 2023 20:13",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 1078650,
            "date": "Thu 23 Nov 2023 19:32",
            "username": "\t\t\t\tmarlonchin\t\t\t",
            "content": "Sorry not D I need the explanation for E if it is right answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1078645,
            "date": "Thu 23 Nov 2023 19:28",
            "username": "\t\t\t\tmarlonchin\t\t\t",
            "content": "BE can some explain how it is possible for D to be answer",
            "upvote_count": "1",
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
        "question_text": "<p>A company is hosting multiple applications within a single VPC in its AWS account. The applications are running behind an Application Load Balancer that is associated with an AWS WAF web ACL. The company's security team has identified that multiple port scans are originating from a specific range of IP addresses on the internet.<br><br>A security engineer needs to deny access from the offending IP addresses.<br><br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#67",
            "answers": [
              {
                "choice": "<p>Modify the AWS WAF web ACL with an IP set match rule statement to deny incoming requests from the IP address range.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Add a rule to all security groups to deny the incoming requests from the IP address range.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Modify the AWS WAF web ACL with a rate-based rule statement to deny the incoming requests from the IP address range.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure the AWS WAF web ACL with regex match conditions. Specify a pattern set to deny the incoming requests based on the match condition.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 67 discussion",
        "discusstion": [
          {
            "id": 1098202,
            "date": "Sat 16 Dec 2023 14:35",
            "username": "\t\t\t\t3633f8f\t\t\t",
            "content": "As per below discussion.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1092814,
            "date": "Sun 10 Dec 2023 21:06",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "https://docs.aws.amazon.com/waf/latest/developerguide/listing-managed-ips.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>agree, should be C. </li><li>agree, should be A instead.</li><li>You will use rate limit if it is normal HTTP/s traffic. For port scanning is a network reconnaissance technique used to identify which ports on a computer system are open and potentially vulnerable. You will want to block it 100%.</li><li>The question is how to apply what the security engineer wants to do which is to block every single request coming from that IP set. Hence, I also think correct answer is A. </li></ul>",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1111123,
            "date": "Mon 01 Jan 2024 12:50",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "agree, should be C. <br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>agree, should be A instead.</li></ul>",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1111124,
            "date": "Mon 01 Jan 2024 12:50",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "agree, should be A instead.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1097796,
            "date": "Sat 16 Dec 2023 02:08",
            "username": "\t\t\t\tWeepingMaplte\t\t\t",
            "content": "You will use rate limit if it is normal HTTP/s traffic. For port scanning is a network reconnaissance technique used to identify which ports on a computer system are open and potentially vulnerable. You will want to block it 100%.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The question is how to apply what the security engineer wants to do which is to block every single request coming from that IP set. Hence, I also think correct answer is A. </li></ul>",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1098201,
            "date": "Sat 16 Dec 2023 14:34",
            "username": "\t\t\t\t3633f8f\t\t\t",
            "content": "The question is how to apply what the security engineer wants to do which is to block every single request coming from that IP set. Hence, I also think correct answer is A. ",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1079482,
            "date": "Fri 24 Nov 2023 19:11",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "Agreed on A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1078685,
            "date": "Thu 23 Nov 2023 20:15",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#68",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has contracted with a third party to audit several AWS accounts. To enable the audit, cross-account IAM roles have been created in each account targeted for audit. The auditor is having trouble accessing some of the accounts.<br><br>Which of the following may be causing this problem? (Choose three.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ACF</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#68",
            "answers": [
              {
                "choice": "<p>The external ID used by the auditor is missing or incorrect.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>The auditor is using the incorrect password.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The auditor has not been granted sts:AssumeRole for the role in the destination account.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>The Amazon EC2 role used by the auditor must be set to the destination account role.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The secret key used by the auditor is missing or incorrect.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The role ARN used by the auditor is missing or incorrect.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 68 discussion",
        "discusstion": [
          {
            "id": 1104514,
            "date": "Sun 24 Dec 2023 10:08",
            "username": "\t\t\t\trahav\t\t\t",
            "content": "ACF for sure",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: ACF"
          },
          {
            "id": 1092834,
            "date": "Sun 10 Dec 2023 21:37",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "B &E, if its due to external ID or secret key used by auditor, then access to all accounts shd be affected.<br>D, ec2 is irrelevant in account access.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: ACF"
          },
          {
            "id": 1079481,
            "date": "Fri 24 Nov 2023 19:11",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "ACF for sure",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: ACF"
          },
          {
            "id": 1078686,
            "date": "Thu 23 Nov 2023 20:17",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: ACF"
          }
        ]
      },
      {
        "question_id": "#69",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A security engineer needs to configure an Amazon S3 bucket policy to restrict access to an S3 bucket that is named DOC-EXAMPLE-BUCKET. The policy must allow access to only DOC-EXAMPLE-BUCKET from only the following endpoint: vpce-1a2b3c4d. The policy must deny all access to DOC-EXAMPLE-BUCKET if the specified endpoint is not used.<br><br>Which bucket policy statement meets these requirements?</p>",
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
                "choice": "<p><br><img src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image13.png\"><br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p><br><img src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image14.png\"><br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p><br><img src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image15.png\"><br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p><br><img src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image16.png\"><br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 69 discussion",
        "discusstion": [
          {
            "id": 1104516,
            "date": "Sun 24 Dec 2023 10:11",
            "username": "\t\t\t\trahav\t\t\t",
            "content": "B is the correct one",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1085692,
            "date": "Sat 02 Dec 2023 05:11",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "No doubt, it's B. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1079489,
            "date": "Fri 24 Nov 2023 19:29",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "B is correcto",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1078687,
            "date": "Thu 23 Nov 2023 20:18",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
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
        "question_text": "<p>A company has a group of Amazon EC2 instances in a single private subnet of a VPC with no internet gateway attached. A security engineer has installed the Amazon CloudWatch agent on all instances in that subnet to capture logs from a specific application. To ensure that the logs flow securely, the company's networking team has created VPC endpoints for CloudWatch monitoring and CloudWatch logs. The networking team has attached the endpoints to the VPC. <br><br>The application is generating logs However, when the security engineer queries CloudWatch, the logs do not appear.<br><br>Which combination of steps should the security engineer take to troubleshoot this issue? (Choose three.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ACD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#70",
            "answers": [
              {
                "choice": "<p>Ensure that the EC2 instance profile that is attached to the EC2 instances has permissions to create log streams and write logs.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create a metric filter on the logs so that they can be viewed in the AWS Management Console.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Check the CloudWatch agent configuration file on each EC2 instance to make sure that the CloudWatch agent is collecting the proper log files.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Check the VPC endpoint policies of both VPC endpoints to ensure that the EC2 instances have permissions to use them.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create a NAT gateway in the subnet so that the EC2 instances can communicate with CloudWatch.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Ensure that the security groups allow all the EC2 instances to communicate with each other to aggregate logs before sending.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 70 discussion",
        "discusstion": [
          {
            "id": 1104519,
            "date": "Sun 24 Dec 2023 10:18",
            "username": "\t\t\t\trahav\t\t\t",
            "content": "ACD are the correct ones. for sure",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: ACD"
          },
          {
            "id": 1085696,
            "date": "Sat 02 Dec 2023 05:17",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "ACD makes a good comb. logically.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: ACD"
          },
          {
            "id": 1079490,
            "date": "Fri 24 Nov 2023 19:35",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "ACD seem correct",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: ACD"
          },
          {
            "id": 1078691,
            "date": "Thu 23 Nov 2023 20:21",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: ACD"
          }
        ]
      },
      {
        "question_id": "#71",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company uses AWS Signer with all of the company's AWS Lambda functions. A developer recently stopped working for the company. The company wants to ensure that all the code that the developer wrote can no longer be deployed to the Lambda functions.<br><br>Which solution will meet this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#71",
            "answers": [
              {
                "choice": "<p>Revoke all versions of the signing profile assigned to the developer.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Examine the developer's IAM roles. Remove all permissions that grant access to Signer.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Re-encrypt all source code with a new AWS Key Management Service (AWS KMS) key.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use Amazon CodeGuru to profile all the code that the Lambda functions use.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 71 discussion",
        "discusstion": [
          {
            "id": 1104526,
            "date": "Sun 24 Dec 2023 10:22",
            "username": "\t\t\t\trahav\t\t\t",
            "content": "https://docs.aws.amazon.com/signer/latest/developerguide/revocation.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1096159,
            "date": "Thu 14 Dec 2023 08:44",
            "username": "\t\t\t\tvincentsr7\t\t\t",
            "content": "The privilege has to be removed from signer , for this option b is the right answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1096044,
            "date": "Thu 14 Dec 2023 06:13",
            "username": "\t\t\t\tvincentsr7\t\t\t",
            "content": "Option A suggests revoking all versions of the signing profile assigned to the developer, but this is not the most effective solution for preventing the developer from deploying code to Lambda functions. Signing profiles primarily deal with the integrity and authenticity of code, rather than controlling the ability to deploy code",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1083095,
            "date": "Wed 29 Nov 2023 05:01",
            "username": "\t\t\t\tkejam\t\t\t",
            "content": "Answer A<br>New URL: https://docs.aws.amazon.com/signer/latest/developerguide/revocation.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1079692,
            "date": "Sat 25 Nov 2023 04:03",
            "username": "\t\t\t\tlmimi\t\t\t",
            "content": "A<br>Refer to https://docs.aws.amazon.com/signer/latest/developerguide/revoking.html<br>https://docs.aws.amazon.com/signer/latest/developerguide/revoking.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 1079617,
            "date": "Fri 24 Nov 2023 23:00",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "A is the correct answer. Revoke the developer signing profile - https://docs.aws.amazon.com/signer/latest/developerguide/revocation.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1079497,
            "date": "Fri 24 Nov 2023 19:46",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "A will handle prevention",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1078694,
            "date": "Thu 23 Nov 2023 20:22",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Source pls?</li></ul>",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1079731,
            "date": "Sat 25 Nov 2023 05:47",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Source pls?",
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
        "question_text": "<p>A company plans to use AWS Key Management Service (AWS KMS) to implement an encryption strategy to protect data at rest. The company requires client-side encryption for company projects. The company is currently conducting multiple projects to test the company's use of AWS KMS. These tests have led to a sudden increase in the company's AWS resource consumption. The test projects include applications that issue multiple requests each second to KMS endpoints for encryption activities.<br><br>The company needs to develop a solution that does not throttle the company's ability to use AWS KMS. The solution must improve key usage for client-side encryption and must be cost optimized.<br><br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#72",
            "answers": [
              {
                "choice": "<p>Use keyrings with the AWS Encryption SDK. Use each keyring individually or combine keyrings into a multi-keyring. Decrypt the data by using a keyring that has the primary key in the multi-keyring.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use data key caching. Use the local cache that the AWS Encryption SDK provides with a caching cryptographic materials manager.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use KMS key rotation. Use a local cache in the AWS Encryption SDK with a caching cryptographic materials manager.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use keyrings with the AWS Encryption SDK. Use each keyring individually or combine keyrings into a multi-keyring. Use any of the wrapping keys in the multi-keyring to decrypt the data.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 72 discussion",
        "discusstion": [
          {
            "id": 1108627,
            "date": "Fri 29 Dec 2023 12:15",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "\\\"Caching can reduce your use of cryptographic services, such as AWS Key Management Service (AWS KMS). If you are hitting your AWS KMS requests-per-second limit, caching can help.\\\"<br>https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/data-key-caching.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1097943,
            "date": "Sat 16 Dec 2023 07:02",
            "username": "\t\t\t\tWeepingMaplte\t\t\t",
            "content": "Local key cache: Implement local key caching in your applications to store frequently used encryption keys, reducing the number of calls to KMS. Consider libraries like AWS Encryption SDK for secure key cache management.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1079726,
            "date": "Sat 25 Nov 2023 05:38",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Shouldn't it be 'D'? Couldn't verify the source for the option of 'C' being correct anywhere.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1079691,
            "date": "Sat 25 Nov 2023 03:48",
            "username": "\t\t\t\tlmimi\t\t\t",
            "content": "I vote for B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1079624,
            "date": "Fri 24 Nov 2023 23:21",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "Data key caching helps to improve performance, reduce cost, and help stay within limit as your key usage increases without throttling - https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/data-key-caching.html",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1079502,
            "date": "Fri 24 Nov 2023 19:52",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "B seems right<br><br>https://repost.aws/knowledge-center/kms-throttlingexception-error",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1078697,
            "date": "Thu 23 Nov 2023 20:24",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>C is correct</li></ul>",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1078699,
            "date": "Thu 23 Nov 2023 20:26",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#73",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A security team is working on a solution that will use Amazon EventBridge to monitor new Amazon S3 objects. The solution will monitor for public access and for changes to any S3 bucket policy or setting that result in public access. The security team configures EventBridge to watch for specific API calls that are logged from AWS CloudTrail. EventBridge has an action to send an email notification through Amazon Simple Notification Service (Amazon SNS) to the security team immediately with details of the API call.<br><br>Specifically, the security team wants EventBridge to watch for the s3:PutObjectAcl, s3:DeleteBucketPolicy, and s3:PutBucketPolicy API invocation logs from CloudTrail. While developing the solution in a single account, the security team discovers that the s3:PutObjectAcl API call does not invoke an EventBridge event However, the s3:DeleteBucketPolicy API call and the s3:PutBucketPolicy API call do invoke an event.<br><br>The security team has enabled CloudTrail for AWS management events with a basic configuration in the AWS Region in which EventBridge is being tested. Verification of the EventBridge event pattern indicates that the pattern is set up correctly. The security team must implement a solution so that the s3:PutObjectAcl API call will invoke an EventBridge event. The solution must not generate false notifications.<br><br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#73",
            "answers": [
              {
                "choice": "<p>Modify the EventBridge event pattern by selecting Amazon S3. Select All Events as the event type.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Modify the EventBridge event pattern by selecting Amazon S3. Select Bucket Level Operations as the event type.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Enable CloudTrail Insights to identify unusual API activity.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Enable CloudTrail to monitor data events for read and write operations to S3 buckets.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 73 discussion",
        "discusstion": [
          {
            "id": 1079512,
            "date": "Fri 24 Nov 2023 20:01",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "You need to enable data events for that API event to trigger<br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/cloudtrail-logging-s3-info.html#cloudtrail-object-level-tracking",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1104529,
            "date": "Sun 24 Dec 2023 10:41",
            "username": "\t\t\t\trahav\t\t\t",
            "content": "you need to enable data events in cloudtrail",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1097948,
            "date": "Sat 16 Dec 2023 07:10",
            "username": "\t\t\t\tWeepingMaplte\t\t\t",
            "content": "By default, CloudTrail only logs bucket-level API calls in S3, not object-level actions. This means it logs events like creating or deleting buckets, but not actions like uploading or downloading objects.<br>To enable object-level logging, you need to explicitly configure CloudTrail for your S3 buckets. You can do this in the S3 console, CLI, or SDK.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 1078706,
            "date": "Thu 23 Nov 2023 20:31",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#74",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company uses Amazon GuardDuty. The company's security team wants all High severity findings to automatically generate a ticket in a third-party ticketing system through email integration.<br><br>Which solution will meet this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#74",
            "answers": [
              {
                "choice": "<p>Create a verified identity for the third-party ticketing email system in Amazon Simple Email Service (Amazon SES). Create an Amazon EventBridge rule that includes an event pattern that matches High severity GuardDuty findings. Specify the SES identity as the target for the EventBridge rule.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the third-party ticketing email system to the SNS topic. Create an Amazon EventBridge rule that includes an event pattern that matches High severity GuardDuty findings. Specify the SNS topic as the target for the EventBridge rule.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use the GuardDuty CreateFilter API operation to build a filter in GuardDuty to monitor for High severity findings. Export the results of the filter to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the third-party ticketing email system to the SNS topic.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use the GuardDuty CreateFilter API operation to build a filter in GuardDuty to monitor for High severity findings. Create an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the third-party ticketing email system to the SNS topic. Create an Amazon EventBridge rule that includes an event pattern that matches GuardDuty findings that are selected by the filter. Specify the SNS topic as the target for the EventBridge rule.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 74 discussion",
        "discusstion": [
          {
            "id": 1104530,
            "date": "Sun 24 Dec 2023 10:42",
            "username": "\t\t\t\trahav\t\t\t",
            "content": "B is the right one- you do it with EventBridge",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1098220,
            "date": "Sat 16 Dec 2023 15:11",
            "username": "\t\t\t\t3633f8f\t\t\t",
            "content": "Create a high severity Eventbridge based on GuardDuty High Severity Findings: https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1097952,
            "date": "Sat 16 Dec 2023 07:14",
            "username": "\t\t\t\tWeepingMaplte\t\t\t",
            "content": "Key steps for integration:<br>1. Create a Eventbridge/CloudWatch event rule: Define the event pattern to trigger the rule based on specific GuardDuty findings.<br>2. Configure the rule target: Choose where to send the findings data, like an SNS topic",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1081292,
            "date": "Mon 27 Nov 2023 08:57",
            "username": "\t\t\t\tlmimi\t\t\t",
            "content": "B. <br>Users can define filter in EventBridge. Not necessary to use GuardDuty CreateFilter API.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1079757,
            "date": "Sat 25 Nov 2023 06:41",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "D sounds pretty legit IMO.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Sorry, after reviewing it again, looks like Option 'B' looks to be more correct ans.</li></ul>",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1080148,
            "date": "Sat 25 Nov 2023 17:05",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Sorry, after reviewing it again, looks like Option 'B' looks to be more correct ans.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1079518,
            "date": "Fri 24 Nov 2023 20:10",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "B. . Use Eventbridge (formally Cloudwatch Events)<br><br>https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1078714,
            "date": "Thu 23 Nov 2023 20:33",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>D is correct</li></ul>",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1078718,
            "date": "Thu 23 Nov 2023 20:35",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "D is correct",
            "upvote_count": "1",
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
        "question_text": "<p>A company is using AWS Organizations to implement a multi-account strategy. The company does not have on-premises infrastructure. All workloads run on AWS. The company currently has eight member accounts. The company anticipates that it will have no more than 20 AWS accounts total at any time.<br><br>The company issues a new security policy that contains the following requirements:<br><br>- No AWS account should use a VPC within the AWS account for workloads.<br>- The company should use a centrally managed VPC that all AWS accounts can access to launch workloads in subnets.<br>- No AWS account should be able to modify another AWS account's application resources within the centrally managed VPC. <br>- The centrally managed VPC should reside in an existing AWS account that is named Ac-count-A within an organization.<br><br>The company uses an AWS CloudFormation template to create a VPC that contains multiple subnets in Account-A.  This template exports the subnet IDs through the CloudFormation Outputs section.<br><br>Which solution will complete the security setup to meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#75",
            "answers": [
              {
                "choice": "<p>Use a CloudFormation template in the member accounts to launch workloads. Configure the template to use the Fn::ImportValue function to obtain the subnet ID values.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use a transit gateway in the VPC within Account-A.  Configure the member accounts to use the transit gateway to access the subnets in Account-A to launch workloads.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS Resource Access Manager (AWS RAM) to share Account-A's VPC subnets with the remaining member accounts. Configure the member accounts to use the shared subnets to launch workloads.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create a peering connection between Account-A and the remaining member accounts. Configure the member accounts to use the subnets in Account-A through the VPC peering connection to launch workloads.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 75 discussion",
        "discusstion": [
          {
            "id": 1121697,
            "date": "Sat 13 Jan 2024 14:52",
            "username": "\t\t\t\tvikasj1in\t\t\t",
            "content": "C.  Explanation:<br>using AWS RAM, allows for centralized control over the VPC in Account-A, shared access to subnets with other member accounts, and isolation between the resources of different accounts within the VPC.  This aligns well with the specified security requirements.<br><br>VPC Peering or Transit Gateway: While VPC peering (Option D) or Transit Gateway (Option B) could facilitate communication between VPCs, they might not provide the level of isolation required in this scenario. With VPC peering, all resources in the peered VPCs have the ability to communicate with each other directly.<br><br>CloudFormation Fn::ImportValue: While using CloudFormation's Fn::ImportValue (Option A) is a common approach to share values between stacks, in this scenario, AWS RAM provides a more structured and scalable way to share resources (subnets) across accounts.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1104532,
            "date": "Sun 24 Dec 2023 10:44",
            "username": "\t\t\t\trahav\t\t\t",
            "content": "RAM is used to share subnets",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1079634,
            "date": "Sat 25 Nov 2023 00:22",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "Yes, you can use the AWS Resource Access Manager (AWS RAM) to share your subnets and resources in VPC owner, Account-A with other accounts - https://aws.amazon.com/blogs/networking-and-content-delivery/vpc-sharing-a-new-approach-to-multiple-accounts-and-vpc-management/",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1079526,
            "date": "Fri 24 Nov 2023 20:18",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "C is correct. B and D will require multiple VPCs and A is not applicable here",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1078721,
            "date": "Thu 23 Nov 2023 20:37",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#76",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company's security team needs to receive a notification whenever an AWS access key has not been rotated in 90 or more days. A security engineer must develop a solution that provides these notifications automatically.<br><br>Which solution will meet these requirements with the LEAST amount of effort?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#76",
            "answers": [
              {
                "choice": "<p>Deploy an AWS Config managed rule to run on a periodic basis of 24 hours. Select the access-keys-rotated managed rule, and set the maxAccessKeyAge parameter to 90 days. Create an Amazon EventBridge rule with an event pattern that matches the compliance type of NON_ COMPLIANT from AWS Config for the managed rule. Configure EventBridge to send an Amazon Simple Notification Service (Amazon SNS) notification to the security team.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create a script to export a .csv file from the AWS Trusted Advisor check for IAM access key rotation. Load the script into an AWS Lambda function that will upload the .csv file to an Amazon S3 bucket. Create an Amazon Athena table query that runs when the .csv file is uploaded to the S3 bucket. Publish the results for any keys older than 90 days by using an invocation of an Amazon Simple Notification Service (Amazon SNS) notification to the security team.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a script to download the IAM credentials report on a periodic basis. Load the script into an AWS Lambda function that will run on a schedule through Amazon EventBridge. Configure the Lambda script to load the report into memory and to filter the report for records in which the key was last rotated at least 90 days ago. If any records are detected, send an Amazon Simple Notification Service (Amazon SNS) notification to the security team.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an AWS Lambda function that queries the IAM API to list all the users. Iterate through the users by using the ListAccessKeys operation. Verify that the value in the CreateDate field is not at least 90 days old. Send an Amazon Simple Notification Service (Amazon SNS) notification to the security team if the value is at least 90 days old. Create an Amazon EventBridge rule to schedule the Lambda function to run each day.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 76 discussion",
        "discusstion": [
          {
            "id": 1121703,
            "date": "Sat 13 Jan 2024 15:00",
            "username": "\t\t\t\tvikasj1in\t\t\t",
            "content": "AWS Config managed rule (access-keys-rotated): This managed rule checks whether IAM access keys have been rotated within a specified timeframe. By configuring it to run on a periodic basis of 24 hours and setting the maxAccessKeyAge parameter to 90 days, it will automatically detect access keys that haven't been rotated in 90 or more days.<br><br>Amazon EventBridge rule: Create an EventBridge rule with an event pattern that matches the compliance type of NON_COMPLIANT from AWS Config for the access-keys-rotated managed rule. This ensures that EventBridge triggers an action when the IAM access keys are found to be non-compliant.<br><br>Amazon SNS Notification: Configure EventBridge to send an SNS notification to the security team when the event pattern matches. This will automatically notify the security team when access keys have not been rotated within the specified timeframe.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1104524,
            "date": "Sun 24 Dec 2023 10:19",
            "username": "\t\t\t\tyorkicurke\t\t\t",
            "content": "The rest of the options are garbage",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1079536,
            "date": "Fri 24 Nov 2023 20:23",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "Yup.. A",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1078722,
            "date": "Thu 23 Nov 2023 20:38",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#77",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company maintains an open-source application that is hosted on a public GitHub repository. While creating a new commit to the repository, an engineer uploaded their AWS access key and secret access key. The engineer reported the mistake to a manager, and the manager immediately disabled the access key.<br><br>The company needs to assess the impact of the exposed access key. A security engineer must recommend a solution that requires the least possible managerial overhead.<br><br>Which solution meets these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#77",
            "answers": [
              {
                "choice": "<p>Analyze an AWS Identity and Access Management (IAM) use report from AWS Trusted Advisor to see when the access key was last used.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Analyze Amazon CloudWatch Logs for activity by searching for the access key.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Analyze VPC flow logs for activity by searching for the access key.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Analyze a credential report in AWS Identity and Access Management (IAM) to see when the access key was last used.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 77 discussion",
        "discusstion": [
          {
            "id": 1115256,
            "date": "Sat 06 Jan 2024 15:52",
            "username": "\t\t\t\tbrpjp\t\t\t",
            "content": "Selected Answer: B is correct. Question is to analyze impact of exposed access key. From credential report you know only key last used, but not able to determine how many times key used and what activities performed.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1104534,
            "date": "Sun 24 Dec 2023 10:50",
            "username": "\t\t\t\trahav\t\t\t",
            "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1098236,
            "date": "Sat 16 Dec 2023 15:28",
            "username": "\t\t\t\t3633f8f\t\t\t",
            "content": "Least effort.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1083106,
            "date": "Wed 29 Nov 2023 05:26",
            "username": "\t\t\t\tkejam\t\t\t",
            "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1079538,
            "date": "Fri 24 Nov 2023 20:24",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "D 99.999999% sure",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1078724,
            "date": "Thu 23 Nov 2023 20:40",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#78",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company plans to create individual child accounts within an existing organization in AWS Organizations for each of its DevOps teams. AWS CloudTrail has been enabled and configured on all accounts to write audit logs to an Amazon S3 bucket in a centralized AWS account. A security engineer needs to ensure that DevOps team members are unable to modify or disable this configuration.<br><br>How can the security engineer meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#78",
            "answers": [
              {
                "choice": "<p>Create an IAM policy that prohibits changes to the specific CloudTrail trail and apply the policy to the AWS account root user.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an S3 bucket policy in the specified destination account for the CloudTrail trail that prohibits configuration changes from the AWS account root user in the source account.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an SCP that prohibits changes to the specific CloudTrail trail and apply the SCP to the appropriate organizational unit or account in Organizations.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create an IAM policy that prohibits changes to the specific CloudTrail trail and apply the policy to a new IAM group. Have team members use individual IAM accounts that are members of the new IAM group.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 78 discussion",
        "discusstion": [
          {
            "id": 1121706,
            "date": "Sat 13 Jan 2024 15:07",
            "username": "\t\t\t\tvikasj1in\t\t\t",
            "content": "SCPs in AWS Organizations are used to set fine-grained permissions and restrictions on AWS accounts within an organization. They operate at the root level or organizational unit level.<br>the security engineer can enforce a policy at the organizational level, ensuring that no accounts under the specified organizational unit can make modifications or disable the CloudTrail configuration.While IAM policies and S3 bucket policies can control access to resources, they are typically more focused on granting permissions rather than restricting actions on CloudTrail trails globally across the organization.<br><br>Option C, using an SCP, provides centralized control and is well-suited for enforcing organization-wide policies. It ensures that even if DevOps team members have administrative permissions in their individual accounts, they won't be able to modify or disable the specified CloudTrail trail due to the SCP restrictions.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1098238,
            "date": "Sat 16 Dec 2023 15:30",
            "username": "\t\t\t\t3633f8f\t\t\t",
            "content": "C is correct.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1080209,
            "date": "Sat 25 Nov 2023 18:39",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "For sure it should be 'D'.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>typo: 'C'.</li></ul>",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1080210,
            "date": "Sat 25 Nov 2023 18:39",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "typo: 'C'.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1079574,
            "date": "Fri 24 Nov 2023 20:43",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "C sounds good",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1078726,
            "date": "Thu 23 Nov 2023 20:41",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#79",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company's policy requires that all API keys be encrypted and stored separately from source code in a centralized security account. This security account is managed by the company's security team. However, an audit revealed that an API key is stored with the source code of an AWS Lambda function in an AWS CodeCommit repository in the DevOps account.<br><br>How should the security team securely store the API key?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#79",
            "answers": [
              {
                "choice": "<p>Create a CodeCommit repository in the security account using AWS Key Management Service (AWS KMS) for encryption. Require the development team to migrate the Lambda source code to this repository.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Store the API key in an Amazon S3 bucket in the security account using server-side encryption with Amazon S3 managed encryption keys (SSE-S3) to encrypt the key. Create a presigned URL for the S3 key, and specify the URL in a Lambda environmental variable in the AWS CloudFormation template. Update the Lambda function code to retrieve the key using the URL and call the API.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a secret in AWS Secrets Manager in the security account to store the API key using AWS Key Management Service (AWS KMS) for encryption. Grant access to the IAM role used by the Lambda function so that the function can retrieve the key from Secrets Manager and call the API.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create an encrypted environment variable for the Lambda function to store the API key using AWS Key Management Service (AWS KMS) for encryption. Grant access to the IAM role used by the Lambda function so that the function can decrypt the key at runtime.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 79 discussion",
        "discusstion": [
          {
            "id": 1098242,
            "date": "Sat 16 Dec 2023 15:33",
            "username": "\t\t\t\t3633f8f\t\t\t",
            "content": "C is correct among others. In case there is something related to AWS Systems Manager Parameter Store as Secure String would be even better more accurate choice.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1094911,
            "date": "Tue 12 Dec 2023 21:02",
            "username": "\t\t\t\tRaphaello\t\t\t",
            "content": "C<br>Whenever there is an AWS can do the job, in this scenario Secrets Manager, then it is the right choice.<br>Environment variable is not the right answer, despite using KMS for encryption.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1080214,
            "date": "Sat 25 Nov 2023 18:44",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Def. 'C' is the best practice way.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1079580,
            "date": "Fri 24 Nov 2023 20:45",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "C for the win",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1078728,
            "date": "Thu 23 Nov 2023 20:42",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#80",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A security engineer is asked to update an AWS CloudTrail log file prefix for an existing trail. When attempting to save the change in the CloudTrail console, the security engineer receives the following error message: \"There is a problem with the bucket policy.\"<br><br>What will enable the security engineer to save the change?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#80",
            "answers": [
              {
                "choice": "<p>Create a new trail with the updated log file prefix, and then delete the original trail. Update the existing bucket policy in the Amazon S3 console with the new log file prefix, and then update the log file prefix in the CloudTrail console.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Update the existing bucket policy in the Amazon S3 console to allow the security engineer's principal to perform PutBucketPolicy, and then update the log file prefix in the CloudTrail console.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Update the existing bucket policy in the Amazon S3 console with the new log file prefix, and then update the log file prefix in the CloudTrail console.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Update the existing bucket policy in the Amazon S3 console to allow the security engineer's principal to perform GetBucketPolicy, and then update the log file prefix in the CloudTrail console.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 80 discussion",
        "discusstion": [
          {
            "id": 1139935,
            "date": "Sun 04 Feb 2024 10:26",
            "username": "\t\t\t\tSHERLOCKAWS\t\t\t",
            "content": "Explained here >> https://docs.aws.amazon.com/awscloudtrail/latest/userguide/create-s3-bucket-policy-for-cloudtrail.html#cloudtrail-add-change-or-remove-a-bucket-prefix",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1121710,
            "date": "Sat 13 Jan 2024 15:10",
            "username": "\t\t\t\tvikasj1in\t\t\t",
            "content": "C.  Updating Bucket Policy: The error message indicates that there is a problem with the bucket policy. To resolve this, the security engineer needs to update the existing bucket policy in the Amazon S3 console with the new log file prefix. This ensures that the bucket policy is correctly configured to allow CloudTrail to write logs to the specified location.<br><br>Updating Log File Prefix in CloudTrail Console: Once the bucket policy is updated, the security engineer can then go back to the CloudTrail console and update the log file prefix there. This will ensure that CloudTrail knows the correct destination in the S3 bucket for storing the log files.<br><br>Option C is the correct choice as it addresses the issue by first updating the bucket policy and then updating the log file prefix in the CloudTrail console. The other options involve unnecessary steps or do not directly address the reported problem.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1098063,
            "date": "Sat 16 Dec 2023 11:26",
            "username": "\t\t\t\tWeepingMaplte\t\t\t",
            "content": "Verify the S3 bucket policy:<br>Open the S3 bucket policy in the S3 console, CLI, or SDK.<br>Ensure the policy grants CloudTrail permission to write log files with the new prefix to the specified S3 bucket. Look for permissions like s3:PutObject with the correct bucket prefix included.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1096197,
            "date": "Thu 14 Dec 2023 09:03",
            "username": "\t\t\t\tvincentsr7\t\t\t",
            "content": "B.  As C does not provide the required privileges to the security engineer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1080223,
            "date": "Sat 25 Nov 2023 18:59",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "C looks legit.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1079639,
            "date": "Sat 25 Nov 2023 00:44",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "The correct answer is C - https://docs.aws.amazon.com/awscloudtrail/latest/userguide/create-s3-bucket-policy-for-cloudtrail.html#cloudtrail-add-change-or-remove-a-bucket-prefix",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1079582,
            "date": "Fri 24 Nov 2023 20:47",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/create-s3-bucket-policy-for-cloudtrail.html#cloudtrail-add-change-or-remove-a-bucket-prefix",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1078731,
            "date": "Thu 23 Nov 2023 20:44",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#81",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company uses AWS Organizations. The company wants to implement short-term credentials for third-party AWS accounts to use to access accounts within the company's organization. Access is for the AWS Management Console and third-party software-as-a-service (SaaS) applications. Trust must be enhanced to prevent two external accounts from using the same credentials. The solution must require the least possible operational effort.<br><br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#81",
            "answers": [
              {
                "choice": "<p>Use a bearer token authentication with OAuth or SAML to manage and share a central Amazon Cognito user pool across multiple Amazon API Gateway APIs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Implement AWS IAM Identity Center (AWS Single Sign-On), and use an identity source of choice. Grant access to users and groups from other accounts by using permission sets that are assigned by account.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a unique IAM role for each external account. Create a trust policy Use AWS Secrets Manager to create a random external key.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a unique IAM role for each external account. Create a trust policy that includes a condition that uses the sts:ExternalId condition key.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 81 discussion",
        "discusstion": [
          {
            "id": 1139937,
            "date": "Sun 04 Feb 2024 10:28",
            "username": "\t\t\t\tSHERLOCKAWS\t\t\t",
            "content": "Explained here > https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1121717,
            "date": "Sat 13 Jan 2024 15:15",
            "username": "\t\t\t\tvikasj1in\t\t\t",
            "content": "Creating a unique IAM role for each external account allows you to grant specific permissions to each external account independently. Including a condition in the trust policy that uses the sts:ExternalId condition key allows you to enhance the trust between the accounts and prevent one external account from using the credentials intended for another external account. The sts:ExternalId condition ensures that the request is accompanied by the expected external ID, adding an extra layer of security.<br><br>Options A, B, and C do not specifically address the requirement to prevent two external accounts from using the same credentials and may introduce unnecessary complexity or dependencies.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1098069,
            "date": "Sat 16 Dec 2023 11:30",
            "username": "\t\t\t\tWeepingMaplte\t\t\t",
            "content": "What is an external ID:<br>An external ID is a unique identifier that is managed by a third-party identity provider (IdP). It's used to verify the identity of a user without requiring them to have an AWS IAM account.<br><br>Creating a role with an external ID:<br><br>You can create a role in your AWS account and specify an external ID source (e.g., SAML provider, OIDC provider).<br>You can define trust relationships between the role and the external IdP. This ensures that only authorized users with the correct external ID can assume the role.<br>You can attach IAM policies to the role to grant specific permissions to access AWS resources.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1084839,
            "date": "Fri 01 Dec 2023 00:56",
            "username": "\t\t\t\tkejam\t\t\t",
            "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1080244,
            "date": "Sat 25 Nov 2023 19:34",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "C looks a bit reasonable but with a condition on the role makes it more secured so going with 'D'.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1079585,
            "date": "Fri 24 Nov 2023 20:54",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "D will do it. The rest are distractors / incorrect",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1078733,
            "date": "Thu 23 Nov 2023 20:45",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#82",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is evaluating its security posture. In the past, the company has observed issues with specific hosts and host header combinations that affected the company's business. The company has configured AWS WAF web ACLs as an initial step to mitigate these issues.<br><br>The company must create a log analysis solution for the AWS WAF web ACLs to monitor problematic activity. The company wants to process all the AWS WAF logs in a central location. The company must have the ability to filter out requests based on specific hosts.<br><br>A security engineer starts to enable access logging for the AWS WAF web ACLs.<br><br>What should the security engineer do next to meet these requirements with the MOST operational efficiency?</p>",
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
                "choice": "<p>Specify Amazon Redshift as the destination for the access logs. Deploy the Amazon Athena Redshift connector. Use Athena to query the data from Amazon Redshift and to filter the logs by host.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Specify Amazon CloudWatch as the destination for the access logs. Use Amazon CloudWatch Logs Insights to design a query to filter the logs by host.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Specify Amazon CloudWatch as the destination for the access logs. Export the CloudWatch logs to an Amazon S3 bucket. Use Amazon Athena to query the logs and to filter the logs by host.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Specify Amazon CloudWatch as the destination for the access logs. Use Amazon Redshift Spectrum to query the logs and to filter the logs by host.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 82 discussion",
        "discusstion": [
          {
            "id": 1121719,
            "date": "Sat 13 Jan 2024 15:20",
            "username": "\t\t\t\tvikasj1in\t\t\t",
            "content": "B. <br>CloudWatch Logs Insights is a fully managed service that enables you to search and analyze your log data efficiently. It allows you to interactively explore and analyze your logs directly in the CloudWatch console.<br><br>Operational Efficiency: CloudWatch is a native AWS service that can directly receive and store AWS WAF access logs. Using CloudWatch Logs Insights, you can design and run queries to filter logs based on specific hosts. This provides a quick and efficient way to analyze and monitor AWS WAF logs centrally.<br><br>Options C and D involve additional steps such as exporting logs to S3 or using Amazon Redshift Spectrum, which may introduce additional complexity and operational overhead. Option A suggests using Amazon Redshift directly, which may not be the most efficient option for log analysis in this scenario.<br><br>Therefore, option B is the most operationally efficient solution for analyzing and filtering AWS WAF access logs in a central location.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1098252,
            "date": "Sat 16 Dec 2023 15:48",
            "username": "\t\t\t\t3633f8f\t\t\t",
            "content": "B indeed.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1098075,
            "date": "Sat 16 Dec 2023 11:34",
            "username": "\t\t\t\tWeepingMaplte\t\t\t",
            "content": "Log Insights: Provides a powerful query interface for searching and analyzing WAF logs based on various criteria like IP addresses, user agents, and rule IDs.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1081737,
            "date": "Mon 27 Nov 2023 16:56",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "Agree. B is theMOST operational efficiency - https://aws.amazon.com/blogs/mt/analyzing-aws-waf-logs-in-amazon-cloudwatch-logs/",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1080261,
            "date": "Sat 25 Nov 2023 20:01",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Agreed. It asks specifically about the Operational Efficiency on this. Option C seems to be good as well but it takes a bit more steps to setup/configure those steps. Where from Option 'B', you can get it from the CW Insights features.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1079653,
            "date": "Sat 25 Nov 2023 01:24",
            "username": "\t\t\t\tlmimi\t\t\t",
            "content": "I think B is the MOST operational efficiency",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1079587,
            "date": "Fri 24 Nov 2023 20:58",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "voting B",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1079586,
            "date": "Fri 24 Nov 2023 20:58",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "I'd argue B is more efficient. Less moving parts than C. <br><br>https://aws.amazon.com/blogs/mt/analyzing-aws-waf-logs-in-amazon-cloudwatch-logs/",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1078734,
            "date": "Thu 23 Nov 2023 20:46",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#83",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A security engineer is trying to use Amazon EC2 Image Builder to create an image of an EC2 instance. The security engineer has configured the pipeline to send logs to an Amazon S3 bucket. When the security engineer runs the pipeline, the build fails with the following error: \"AccessDenied: Access Denied status code: 403\".<br><br>The security engineer must resolve the error by implementing a solution that complies with best practices for least privilege access.<br><br>Which combination of steps will meet these requirements? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#83",
            "answers": [
              {
                "choice": "<p>Ensure that the following policies are attached to the IAM role that the security engineer is using=C2=B7EC2InstanceProfileForImageBuilder, EC2InstanceProfileForImageBuilderECRContainerBuilds, and AmazonSSMManagedInstanceCore.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Ensure that the following policies are attached to the instance profile for the EC2 instance: EC2InstanceProfileForImageBuilder, EC2InstanceProfileForImageBuilderECRContainerBuilds, and AmazonSSMManagedInstanceCore.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Ensure that the AWSImageBuilderFullAccess policy is attached to the instance profile for the EC2 instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Ensure that the security engineer's IAM role has the s3:PutObject permission for the S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Ensure that the instance profile for the EC2 instance has the s3:PutObject permission for the S3 bucket.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 83 discussion",
        "discusstion": [
          {
            "id": 1121734,
            "date": "Sat 13 Jan 2024 15:30",
            "username": "\t\t\t\tvikasj1in\t\t\t",
            "content": "A.  The IAM role used by Amazon EC2 Image Builder needs to have the necessary policies attached to perform the required actions. In this case, the role needs policies such as EC2InstanceProfileForImageBuilder,EC2InstanceProfileForImageBuilderECRContainerBuilds, and AmazonSSMManagedInstanceCore.<br><br>D: The IAM role must have the s3:PutObject permission for the specified S3 bucket. This permission is required for storing logs in the S3 bucket.<br><br>Options B and E involve attaching policies directly to the instance profile, which is not the recommended approach for Amazon EC2 Image Builder. The IAM role associated with EC2 Image Builder is used for the build process, and it is the role that needs the required permissions.<br><br>Option C is not specific to the IAM role or instance profile used by Amazon EC2 Image Builder, and it's generally not recommended to attach broad policies like AWSImageBuilderFullAccess without following the principle of least privilege.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1106008,
            "date": "Tue 26 Dec 2023 13:44",
            "username": "\t\t\t\tgiancesarini2023\t\t\t",
            "content": "The correct answer is B/E. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1098253,
            "date": "Sat 16 Dec 2023 15:53",
            "username": "\t\t\t\t3633f8f\t\t\t",
            "content": "BE choice as Instance Profile >> Role for the Instance on start up - usually -",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 1098079,
            "date": "Sat 16 Dec 2023 11:39",
            "username": "\t\t\t\tWeepingMaplte\t\t\t",
            "content": "EC2InstanceProfileForImageBuilder, EC2InstanceProfileForImageBuilderECRContainerBuilds, and AmazonSSMManagedInstanceCore are policies.<br>https://docs.aws.amazon.com/imagebuilder/latest/userguide/security-iam-awsmanpol.html<br><br>Ensure the IAM roles used by Image Builder have the necessary permissions to access resources involved in the build process, like S3 buckets, EC2 instances, and SSM automation documents.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 1086382,
            "date": "Sat 02 Dec 2023 20:29",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Thanks folks!... got the EC2 Instance profile concept now so def. going with B and E now.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 1084783,
            "date": "Thu 30 Nov 2023 22:16",
            "username": "\t\t\t\tsnowmaggedon\t\t\t",
            "content": "A pipeline is running so that means the engineer's role is not relevant. Answer is BE",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1081764,
            "date": "Mon 27 Nov 2023 17:16",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "Please note that an instance profile is an IAM role for the EC2 instance. Therefore, the option A which states that \\\"IAM role attached to the engineer\\\" is wrong. Please check this link for more information - https://docs.aws.amazon.com/imagebuilder/latest/userguide/troubleshooting.html#ts-access-denied",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 1080269,
            "date": "Sat 25 Nov 2023 20:15",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "\\\"Solution:<br><br>Depending on the cause, this issue can be resolved as follows:<br>Instance profile is missing managed policies =E2=80=93 Add the missing policies to your instance profile role. Then run the pipeline again.<br>Instance profile is missing write permissions for S3 bucket =E2=80=93 Add a policy to your instance profile role that grants PutObject permissions to write to your S3 bucket. Then run the pipeline again.\\\"<br><br>The sol. states that it's EC2 Instance Profile \\\"Role\\\" as per their documentation. Whereas, in option B and E, it states EC2 Instance profile only. Does it mean the same thing? Can someone pls. help clarify on this.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1079856,
            "date": "Sat 25 Nov 2023 10:00",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "B and E as per the following<br><br>https://docs.aws.amazon.com/imagebuilder/latest/userguide/troubleshooting.html#ts-access-denied",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 1078737,
            "date": "Thu 23 Nov 2023 20:48",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: DE"
          }
        ]
      },
      {
        "question_id": "#84",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A security engineer must use AWS Key Management Service (AWS KMS) to design a key management solution for a set of Amazon Elastic Block Store (Amazon EBS) volumes that contain sensitive data. The solution needs to ensure that the key material automatically expires in 90 days.<br><br>Which solution meets these criteria?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#84",
            "answers": [
              {
                "choice": "<p>A customer managed key that uses customer provided key material<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>A customer managed key that uses AWS provided key material<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>An AWS managed key<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Operating system encryption that uses GnuPG<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 84 discussion",
        "discusstion": [
          {
            "id": 1122152,
            "date": "Sun 14 Jan 2024 01:34",
            "username": "\t\t\t\tvikasj1in\t\t\t",
            "content": "AWS Managed Key (AWS KMS): AWS managed keys (AWS KMS keys) are created, managed, and rotated by AWS KMS. AWS automatically handles key rotation for these keys. With an AWS managed key, you can set the key rotation interval, and AWS KMS will automatically rotate the key material.<br><br>Expiration: While AWS managed keys don't have an explicit \\\"expiration\\\" property, you can achieve similar functionality by configuring key rotation every 90 days. This ensures that the key material is automatically rotated, effectively providing a new key every 90 days.<br><br>Options A and B refer to customer managed keys, and the expiration of key material would need to be managed manually by the customer. Option D mentions GnuPG, which is not applicable for managing AWS EBS volume encryption keys.<br><br>Therefore, option C (AWS managed key) is the most suitable choice for this scenario.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1104660,
            "date": "Sun 24 Dec 2023 15:41",
            "username": "\t\t\t\trahav\t\t\t",
            "content": "You may set an expiration period for an imported key. AWS KMS will automatically delete the key material after the expiration period. You can also delete imported key material on demand. In both cases the key material itself is deleted but the KMS key reference in AWS KMS and associated metadata are retained so that the key material can be re-imported in the future. Keys generated by AWS KMS do not have an expiration time and cannot be deleted immediately; there is a mandatory 7 to 30 day wait period. All customer managed KMS keys, regardless of whether the key material was imported, can be manually disabled or scheduled for deletion. In this case the KMS key itself is deleted, not just the underlying key material.<br><br>https://aws.amazon.com/kms/faqs/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1098088,
            "date": "Sat 16 Dec 2023 11:50",
            "username": "\t\t\t\tWeepingMaplte\t\t\t",
            "content": "A will be the answer. The key word in the question is automatically expires. For answer B and C, it does not have the expiration date option. It only has the rotate option.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1096407,
            "date": "Thu 14 Dec 2023 12:37",
            "username": "\t\t\t\tvincentsr7\t\t\t",
            "content": "Option C. <br>A customer managed key (option A) that uses customer provided key material would not have the automatic expiration capability by default.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1095465,
            "date": "Wed 13 Dec 2023 13:57",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "When you import key material, you can set an optional expiration time.<br>https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-managing.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1080277,
            "date": "Sat 25 Nov 2023 20:27",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "A sounds legit.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1079858,
            "date": "Sat 25 Nov 2023 10:02",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "Definitely A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1079651,
            "date": "Sat 25 Nov 2023 01:21",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "A is correct - https://awscli.amazonaws.com/v2/documentation/api/latest/reference/kms/import-key-material.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1078740,
            "date": "Thu 23 Nov 2023 20:50",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#85",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A security engineer is building a Java application that is running on Amazon EC2. The application communicates with an Amazon RDS instance and authenticates with a user name and password.<br><br>Which combination of steps can the engineer take to protect the credentials and minimize downtime when the credentials are rotated? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: CE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#85",
            "answers": [
              {
                "choice": "<p>Have a database administrator encrypt the credentials and store the ciphertext in Amazon S3. Grant permission to the instance role associated with the EC2 instance to read the object and decrypt the ciphertext.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure a scheduled job that updates the credential in AWS Systems Manager Parameter Store and notifies the engineer that the application needs to be restarted.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure automatic rotation of credentials in AWS Secrets Manager.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Store the credential in an encrypted string parameter in AWS Systems Manager Parameter Store. Grant permission to the instance role associated with the EC2 instance to access the parameter and the AWS KMS key that is used to encrypt it.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure the Java application to catch a connection failure and make a call to AWS Secrets Manager to retrieve updated credentials when the password is rotated. Grant permission to the instance role associated with the EC2 instance to access Secrets Manager.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 85 discussion",
        "discusstion": [
          {
            "id": 1122153,
            "date": "Sun 14 Jan 2024 01:36",
            "username": "\t\t\t\tvikasj1in\t\t\t",
            "content": "AWS Secrets Manager (Option C and E): AWS Secrets Manager provides a solution for managing and rotating sensitive information, such as database credentials. You can configure automatic rotation of credentials in AWS Secrets Manager, and the Java application can catch a connection failure and make a call to Secrets Manager to retrieve updated credentials when the password is rotated.<br><br>Systems Manager Parameter Store (Option D): While storing credentials in an encrypted string parameter in AWS Systems Manager Parameter Store is a valid approach, Secrets Manager provides a more specialized solution for credential rotation.<br><br>Option A involves storing ciphertext in Amazon S3, which adds complexity and may not be as secure as using dedicated services like AWS Secrets Manager.<br><br>Option B suggests manually updating the credential in Systems Manager Parameter Store and notifying the engineer, which is less automated and may introduce downtime.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1098264,
            "date": "Sat 16 Dec 2023 16:16",
            "username": "\t\t\t\t3633f8f\t\t\t",
            "content": "Systems Manager provides integration with RDS and in combination with Java Try and Catch makes possible rotate credentials as frequent as required.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CE"
          },
          {
            "id": 1086386,
            "date": "Sat 02 Dec 2023 20:38",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Def. C and E makes perfect comb.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CE"
          },
          {
            "id": 1080290,
            "date": "Sat 25 Nov 2023 20:56",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "V confusing btw CE and DE.  The question states about protecting the creds which gives the hint towards option D since it talks about leveraging KMS keys with SSM parameter store options too... No doubt on option E cuz that looks more reasonable but there's a confusion over option C or D. .. :(<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>C is correct because Systems Manager Parameter Store cannot be used for key rotation. Key rotation is a feature of Secrets Manager. I hope that helps.</li><li>Ah ok, got it now, thanks so much AgboolaKun! :)</li></ul>",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1081772,
            "date": "Mon 27 Nov 2023 17:23",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "C is correct because Systems Manager Parameter Store cannot be used for key rotation. Key rotation is a feature of Secrets Manager. I hope that helps.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Ah ok, got it now, thanks so much AgboolaKun! :)</li></ul>",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 1086385,
            "date": "Sat 02 Dec 2023 20:37",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Ah ok, got it now, thanks so much AgboolaKun! :)",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1079861,
            "date": "Sat 25 Nov 2023 10:03",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "I'll vote C and E.  Secrets Manager for rotation",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: CE"
          },
          {
            "id": 1078747,
            "date": "Thu 23 Nov 2023 21:05",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: CE"
          }
        ]
      },
      {
        "question_id": "#86",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company uses SAML federation to grant users access to AWS accounts. A company workload that is in an isolated AWS account runs on immutable infrastructure with no human access to Amazon EC2. The company requires a specialized user known as a break glass user to have access to the workload AWS account and instances in the case of SAML errors. A recent audit discovered that the company did not create the break glass user for the AWS account that contains the workload.<br><br>The company must create the break glass user. The company must log any activities of the break glass user and send the logs to a security team.<br><br>Which combination of solutions will meet these requirements? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#86",
            "answers": [
              {
                "choice": "<p>Create a local individual break glass IAM user for the security team. Create a trail in AWS CloudTrail that has Amazon CloudWatch Logs turned on. Use Amazon EventBridge to monitor local user activities.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create a break glass EC2 key pair for the AWS account. Provide the key pair to the security team. Use AWS CloudTrail to monitor key pair activity. Send notifications to the security team by using Amazon Simple Notification Service (Amazon SNS).<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a break glass IAM role for the account. Allow security team members to perform the AssumeRoleWithSAML operation. Create an AWS CloudTrail trail that has Amazon CloudWatch Logs turned on. Use Amazon EventBridge to monitor security team activities.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a local individual break glass IAM user on the operating system level of each workload instance. Configure unrestricted security groups on the instances to grant access to the break glass IAM users.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure AWS Systems Manager Session Manager for Amazon EC2. Configure an AWS CloudTrail filter based on Session Manager. Send the results to an Amazon Simple Notification Service (Amazon SNS) topic.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 86 discussion",
        "discusstion": [
          {
            "id": 1084846,
            "date": "Fri 01 Dec 2023 01:25",
            "username": "\t\t\t\tkejam\t\t\t",
            "content": "A and E<br>\\\"Although the use and creation of AWS IAM users is highly discouraged, break glass users are an exception.<br>To ensure human break-glass access to your environment, we recommend that you create the following in your AWS organization:<br>At least two IAM users...\\\"<br>https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/break-glass-access.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I think ur option A might be right here cuz it asks about the IAM break-glass user and not any roles for the whole security team if I understood the question correctly...</li></ul>",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: AE"
          },
          {
            "id": 1086390,
            "date": "Sat 02 Dec 2023 20:52",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "I think ur option A might be right here cuz it asks about the IAM break-glass user and not any roles for the whole security team if I understood the question correctly...",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1132899,
            "date": "Fri 26 Jan 2024 22:13",
            "username": "\t\t\t\tmynickc\t\t\t",
            "content": "read the question carefully, it is asking for a user incase SAML error so assuming role with AssumeRoleWithSAML is not gonna work.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AE"
          },
          {
            "id": 1122160,
            "date": "Sun 14 Jan 2024 01:45",
            "username": "\t\t\t\tvikasj1in\t\t\t",
            "content": "C, E. <br>Creating a break glass IAM role allows for temporary access when needed. Allowing security team members to perform the AssumeRoleWithSAML operation ensures that the break glass user can assume the role during incidents. Configuring AWS CloudTrail with CloudWatch Logs turned on allows for the logging of activities, and EventBridge can be used to monitor those logs for security team activities.Configuring CloudTrail filters based on Session Manager actions allows logging of activities, and sending the results to an SNS topic can notify the security team.<br><br>A & B involve local user or key pair management, which may not be as scalable or auditable compared to using IAM roles and Systems Manager Session Manager.<br><br>D suggests creating local individual IAM users on the operating system level, which is not the recommended approach, as it's more challenging to manage and audit compared to IAM roles and System Manager Session Manager.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1109335,
            "date": "Sat 30 Dec 2023 02:57",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "The rest of the options:<br>B- key pair is very vulnerable. very often, breakglass is sealed in physical envelope and kept in safe.<br>C- the question requires breakglass user. This option did not provide any user but role.<br>D- the question require breakglass user at account level but this option provide instance level. Besides, unrestricted security group for all such instances make them vulnerable to password guessing.<br><br>The best approach is still create breakglass at account level, seal the breakglass accounts with procedure and physical security, use cloudtrail to ensure its usage is accountable and notification to the entire security team is sent via SNS topic. The account level user allows breakglass user to access to all EC2 instances through session manager.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AE"
          },
          {
            "id": 1107289,
            "date": "Thu 28 Dec 2023 01:35",
            "username": "\t\t\t\tbrpjp\t\t\t",
            "content": "Correct Answer D & E:<br>Question is to log any activities of the break glass user and send the logs to a security team. Because of sending logs to security team, security can not be a break glass user to have adequate segregation of duties. Answer A, B and C refer to security team be a break glass user.<br>So correct answer is D and E. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1103902,
            "date": "Sat 23 Dec 2023 08:06",
            "username": "\t\t\t\tyorkicurke\t\t\t",
            "content": "and why i did not go for C;<br>Because it relies on SAMLfor the AssumeRoleWithSAML operation. Questionmentions that there might be SAML errors. If SAML is not functioning correctly, then the AssumeRoleWithSAML operation would also fail. This means that the security team members would not be able to assume the break glass IAM role when needed, defeating the purpose of having a break glass user for emergency access.<br>Peace Out:)",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AE"
          },
          {
            "id": 1102635,
            "date": "Thu 21 Dec 2023 15:56",
            "username": "\t\t\t\ttayman\t\t\t",
            "content": "Vote for A and E. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AE"
          },
          {
            "id": 1102539,
            "date": "Thu 21 Dec 2023 14:08",
            "username": "\t\t\t\tdexterryu\t\t\t",
            "content": "AE are correct. C would not work in the case of SAML issues which the question specifically states is the purpose.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AE"
          },
          {
            "id": 1102537,
            "date": "Thu 21 Dec 2023 14:07",
            "username": "\t\t\t\tdexterryu\t\t\t",
            "content": "AE are correct. C would not work in the case of SAML issues which the question specifically states is the purpose.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1088076,
            "date": "Tue 05 Dec 2023 00:19",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "CE are the correct answers to this question. Folks choosing AE need to read these \\\"A break glass role that is deployed to all the accounts in the organization, and that can only be 'assumed' by the break glass users from the management account. These roles are needed to allow access from the management account to apply and update guardrails, to troubleshoot and resolve issues with the automation tooling from the security tooling account, or to remediate security and operational issues in one of the member accounts in the AWS organization.\\\" sentences from the following link - https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/break-glass-access.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But if you read the question again, this is whatthey're asking specifically:<br>\\\"The company must create the break glass user. The company must log any activities of the break glass user and send the logs to a security team.\\\"<br>When even the break glass user doesn't exist then how can the role be a choice here for this usecase??... You must need to create a local users first inorder to grant the role to it right?... I know it's still v confusing but that's how I interpreted this question..</li></ul>",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CE"
          },
          {
            "id": 1088842,
            "date": "Tue 05 Dec 2023 23:31",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "But if you read the question again, this is whatthey're asking specifically:<br>\\\"The company must create the break glass user. The company must log any activities of the break glass user and send the logs to a security team.\\\"<br>When even the break glass user doesn't exist then how can the role be a choice here for this usecase??... You must need to create a local users first inorder to grant the role to it right?... I know it's still v confusing but that's how I interpreted this question..",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1087839,
            "date": "Mon 04 Dec 2023 19:22",
            "username": "\t\t\t\tMihBP340\t\t\t",
            "content": "Its A rather than C due to SAML att whileusing IAM roles.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AE"
          },
          {
            "id": 1086405,
            "date": "Sat 02 Dec 2023 21:33",
            "username": "\t\t\t\tmarco25\t\t\t",
            "content": "A is correct need local user in case same is broken",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: AE"
          },
          {
            "id": 1080314,
            "date": "Sat 25 Nov 2023 21:25",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "C and E makes a good combo imo.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CE"
          },
          {
            "id": 1079873,
            "date": "Sat 25 Nov 2023 10:23",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "I'll vote C E as well<br><br>https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/break-glass-access.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: CE"
          },
          {
            "id": 1078756,
            "date": "Thu 23 Nov 2023 21:13",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CE"
          }
        ]
      },
      {
        "question_id": "#87",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A security engineer is working with a product team building a web application on AWS. The application uses Amazon S3 to host the static content, Amazon API Gateway to provide RESTful services, and Amazon DynamoDB as the backend data store. The users already exist in a directory that is exposed through a SAML identity provider.<br><br>Which combination of the following actions should the engineer take to allow users to be authenticated into the web application and call APIs? (Choose three.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BCF</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#87",
            "answers": [
              {
                "choice": "<p>Create a custom authorization service using AWS Lambda.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure a SAML identity provider in Amazon Cognito to map attributes to the Amazon Cognito user pool attributes.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Configure the SAML identity provider to add the Amazon Cognito user pool as a relying party.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Configure an Amazon Cognito identity pool to integrate with social login providers.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Update DynamoDB to store the user email addresses and passwords.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Update API Gateway to use a COGNITO_USER_POOLS authorizer.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 87 discussion",
        "discusstion": [
          {
            "id": 1109342,
            "date": "Sat 30 Dec 2023 03:27",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "For API to refer to Cognito user pool, use \\\"COGNITO_USER_POOLS\\\" authorizer<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-enable-cognito-user-pool.html<br><br>For Cognito user pool to act as relying party to SAML IdP<br>https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-saml-idp.html<br><br>Other options:<br>A- \\\"As an alternative to using IAM roles and policies or Lambda authorizers (formerly known as custom authorizers), you can use an Amazon Cognito user pool to control who can access your API in Amazon API Gateway.\\\"<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html<br>D - social login users not required for this question.<br>E - Dynamo DB is irrelevant- never store store password in db without all the additional overheads required to keep them secure.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BCF"
          },
          {
            "id": 1104845,
            "date": "Sun 24 Dec 2023 22:15",
            "username": "\t\t\t\trahav\t\t\t",
            "content": "BCF is logical here",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BCF"
          },
          {
            "id": 1079879,
            "date": "Sat 25 Nov 2023 10:30",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "BCF.  This was on the other exam topics practice set",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BCF"
          },
          {
            "id": 1078765,
            "date": "Thu 23 Nov 2023 21:30",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BCF"
          }
        ]
      },
      {
        "question_id": "#88",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company needs to improve its ability to identify and prevent IAM policies that grant public access or cross-account access to resources. The company has implemented AWS Organizations and has started using AWS Identity and Access Management Access Analyzer to refine overly broad access to accounts in the organization.<br><br>A security engineer must automate a response in the company's organization for any newly created policies that are overly permissive. The automation must remediate external access and must notify the company's security team.<br><br>Which combination of steps should the security engineer take to meet these requirements? (Choose three.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ACF</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#88",
            "answers": [
              {
                "choice": "<p>Create an AWS Step Functions state machine that checks the resource type in the finding and adds an explicit Deny statement in the trust policy for the IAM role. Configure the state machine to publish a notification to an Amazon Simple Notification Service (Amazon SNS) topic.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create an AWS Batch job that forwards any resource type findings to an AWS Lambda function. Configure the Lambda function to add an explicit Deny statement in the trust policy for the IAM role. Configure the AWS Batch job to publish a notification to an Amazon Simple Notification Service (Amazon SNS) topic.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>In Amazon EventBridge, create an event rule that matches active IAM Access Analyzer findings and invokes AWS Step Functions for resolution.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>In Amazon CloudWatch, create a metric filter that matches active IAM Access Analyzer findings and invokes AWS Batch for resolution.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Amazon Simple Queue Service (Amazon SQS) queue. Configure the queue to forward a notification to the security team that an external principal has been granted access to the specific IAM role and has been blocked.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Amazon Simple Notification Service (Amazon SNS) topic for external or cross-account access notices. Subscribe the security team's email addresses to the topic.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 88 discussion",
        "discusstion": [
          {
            "id": 1079885,
            "date": "Sat 25 Nov 2023 10:44",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "ACF make thr most sense Herr. See below:<br><br>https://aws.amazon.com/blogs/compute/orchestrating-a-security-incident-response-with-aws-step-functions/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>the* here*</li></ul>",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: ACF"
          },
          {
            "id": 1079913,
            "date": "Sat 25 Nov 2023 11:16",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "the* here*",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1102662,
            "date": "Thu 21 Dec 2023 16:21",
            "username": "\t\t\t\ttayman\t\t\t",
            "content": "Vote for A C F",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: ACF"
          },
          {
            "id": 1080323,
            "date": "Sat 25 Nov 2023 21:55",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "ACF most likely.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: ACF"
          },
          {
            "id": 1078766,
            "date": "Thu 23 Nov 2023 21:32",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CEF"
          }
        ]
      },
      {
        "question_id": "#89",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A security engineer is configuring a mechanism to send an alert when three or more failed sign-in attempts to the AWS Management Console occur during a 5-minute period. The security engineer creates a trail in AWS CloudTrail to assist in this work.<br><br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#89",
            "answers": [
              {
                "choice": "<p>In CloudTrail, turn on Insights events on the trail. Configure an alarm on the insight with eventName matching ConsoleLogin and errorMessage matching \"Failed authentication''. Configure a threshold of 3 and a period of 5 minutes.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure CloudTrail to send events to Amazon CloudWatch Logs. Create a metric filter for the relevant log group. Create a filter pattern with eventName matching ConsoleLogin and errorMessage matching \"Failed authentication\". Create a CloudWatch alarm with a threshold of 3 and a period of 5 minutes.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Amazon Athena table from the CloudTrail events. Run a query for eventName matching ConsoleLogin and for errorMessage matching \"Failed authentication\". Create a notification action from the query to send an Amazon Simple Notification Service (Amazon SNS) notification when the count equals 3 within a period of 5 minutes.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>In AWS Identity and Access Management Access Analyzer, create a new analyzer. Configure the analyzer to send an Amazon Simple Notification Service (Amazon SNS) notification when a failed sign-in event occurs 3 times for any IAM user within a period of 5 minutes.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 89 discussion",
        "discusstion": [
          {
            "id": 1136924,
            "date": "Wed 31 Jan 2024 16:38",
            "username": "\t\t\t\tcloudbusting\t\t\t",
            "content": "Because it says alert the answer is B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1110096,
            "date": "Sat 30 Dec 2023 23:29",
            "username": "\t\t\t\tbrpjp\t\t\t",
            "content": "C is correct. Because SNS generated using detail information on finding that help security, while only CloudWatch Alarm generated do not have information as with SNS notification.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1104962,
            "date": "Mon 25 Dec 2023 02:24",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "This is how it is done:<br>https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudwatch-alarms-for-cloudtrail.html#cloudwatch-alarms-for-cloudtrail-signin<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>For option c, you will need Eventbridge, Lambda on top of SNS topic.<br>https://stackoverflow.com/questions/62823521/i-need-to-create-alerts-based-on-the-results-returned-by-queries-in-amazon-athen<br>Option b doesnt include SNS topic, but that is fine because the question ask for \\\"alert\\\" (you can find it in the console) but not \\\"notification\\\".</li></ul>",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1104965,
            "date": "Mon 25 Dec 2023 02:32",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "For option c, you will need Eventbridge, Lambda on top of SNS topic.<br>https://stackoverflow.com/questions/62823521/i-need-to-create-alerts-based-on-the-results-returned-by-queries-in-amazon-athen<br>Option b doesnt include SNS topic, but that is fine because the question ask for \\\"alert\\\" (you can find it in the console) but not \\\"notification\\\".",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1104849,
            "date": "Sun 24 Dec 2023 22:26",
            "username": "\t\t\t\trahav\t\t\t",
            "content": "B is the answer. need an Alarm here",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1080328,
            "date": "Sat 25 Nov 2023 21:59",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "CW alarm is best suited here for this scenario.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1079890,
            "date": "Sat 25 Nov 2023 10:48",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "B it is. Insights does not do alarming",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1078767,
            "date": "Thu 23 Nov 2023 21:33",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#90",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company's security engineer is developing an incident response plan to detect suspicious activity in an AWS account for VPC hosted resources. The security engineer needs to provide visibility for as many AWS Regions as possible.<br><br>Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#90",
            "answers": [
              {
                "choice": "<p>Turn on VPC Flow Logs for all VPCs in the account.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Activate Amazon GuardDuty across all AWS Regions.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Activate Amazon Detective across all AWS Regions.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Amazon Simple Notification Service (Amazon SNS) topic. Create an Amazon EventBridge rule that responds to findings and publishes the findings to the SNS topic.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create an AWS Lambda function. Create an Amazon EventBridge rule that invokes the Lambda function to publish findings to Amazon Simple Email Service (Amazon SES).<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 90 discussion",
        "discusstion": [
          {
            "id": 1081827,
            "date": "Mon 27 Nov 2023 18:32",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "BD are the correct options here. The keywords here are \\\"developing an incident response plan to detect suspicious activity\\\". There is no better way to develop incident response plan without providing a way for the relevant stakeholders to take actions or respond to suspicious activities.<br><br>B is an obvious option because GuardDuty can monitor and analyze API calls across all AWS Regions, andnetwork activities found in Amazon CloudTrail Events, Amazon VPC Flow Logs, and DNS Logs. Therefore, option A is not needed since GuardDuty monitoring activities include the VPC Flow Logs.<br><br>There is no better way to respond to the findings generated by GuardDuty than the services described in option D. <br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Ok, but why the Detective svc. wasn't a good choice here as it's for developing an incident response plan to 'detect' right?... Agree with option D on the other hand cuz it makes sense..</li></ul>",
            "upvote_count": "8",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 1086407,
            "date": "Sat 02 Dec 2023 21:46",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Ok, but why the Detective svc. wasn't a good choice here as it's for developing an incident response plan to 'detect' right?... Agree with option D on the other hand cuz it makes sense..",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1104853,
            "date": "Sun 24 Dec 2023 22:34",
            "username": "\t\t\t\trahav\t\t\t",
            "content": "VPC Flow logs are very expensive.... Guardduty is the right tool to do that with eventbridge",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 1098115,
            "date": "Sat 16 Dec 2023 12:42",
            "username": "\t\t\t\tWeepingMaplte\t\t\t",
            "content": "A.  Turn on VPC Flow Logs for all VPCs in the account: While VPC Flow Logs offer detailed information about network traffic, analyzing and storing logs for all VPCs across Regions can incur significant storage and processing costs.C.  Activate Amazon Detective across all AWS Regions: Detective focuses on root cause analysis and investigation, which might be overkill for initial detection and notification. Additionally, its per-hour billing model can quickly become expensive for continuous monitoring across multiple Regions.E.  Create an AWS Lambda function for publishing findings to SES: While Lambda offers flexibility, creating and maintaining a custom Lambda function specifically for publishing findings can add development and operational overhead compared to the readily available options with EventBridge and SNS.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 1080332,
            "date": "Sat 25 Nov 2023 22:09",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "AB options best suited. Self-explantory too.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 1079893,
            "date": "Sat 25 Nov 2023 10:54",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "AB are correcto",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 1078768,
            "date": "Thu 23 Nov 2023 21:35",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AB"
          }
        ]
      },
      {
        "question_id": "#91",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company stores images for a website in an Amazon S3 bucket. The company is using Amazon CloudFront to serve the images to end users. The company recently discovered that the images are being accessed from countries where the company does not have a distribution license.<br><br>Which actions should the company take to secure the images to limit their distribution? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#91",
            "answers": [
              {
                "choice": "<p>Update the S3 bucket policy to restrict access to a CloudFront origin access control (OAC).<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Update the website DNS record to use an Amazon Route 53 geolocation record deny list of countries where the company lacks a license.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Add a CloudFront geo restriction deny list of countries where the company lacks a license.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Update the S3 bucket policy with a deny list of countries where the company lacks a license.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Enable the Restrict Viewer Access option in CloudFront to create a deny list of countries where the company lacks a license.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 91 discussion",
        "discusstion": [
          {
            "id": 1128879,
            "date": "Mon 22 Jan 2024 17:48",
            "username": "\t\t\t\tGafa255\t\t\t",
            "content": "AC correct options. https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/georestrictions.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html</li></ul>",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 1128880,
            "date": "Mon 22 Jan 2024 17:48",
            "username": "\t\t\t\tGafa255\t\t\t",
            "content": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1084849,
            "date": "Fri 01 Dec 2023 01:49",
            "username": "\t\t\t\tkejam\t\t\t",
            "content": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/georestrictions.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 1080338,
            "date": "Sat 25 Nov 2023 22:15",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "A describes how to limit the access via the policy to bound the access within OAC. <br>C describes about using the geo restriction based R53 policy you can use to limit the access on the unwanted countries.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>typo: It's Geo restriction list in CloudFront and not R53 policy, my bad!...</li></ul>",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 1080342,
            "date": "Sat 25 Nov 2023 22:18",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "typo: It's Geo restriction list in CloudFront and not R53 policy, my bad!...",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1079900,
            "date": "Sat 25 Nov 2023 10:57",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "A so the object requests do not bypass Cloudfront, and C for georestrictions. Careful with this oioi fella =F0=9F=91=80<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Fully agreed on ur 'oioi' feedback:D. .</li></ul>",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 1080335,
            "date": "Sat 25 Nov 2023 22:12",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Fully agreed on ur 'oioi' feedback:D. .",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1078772,
            "date": "Thu 23 Nov 2023 21:37",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CE"
          }
        ]
      },
      {
        "question_id": "#92",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has deployed servers on Amazon EC2 instances in a VPC.  External vendors access these servers over the internet. Recently, the company deployed a new application on EC2 instances in a new CIDR range. The company needs to make the application available to the vendors.<br><br>A security engineer verified that the associated security groups and network ACLs are allowing the required ports in the inbound direction. However, the vendors cannot connect to the application.<br><br>Which solution will provide the vendors access to the application?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#92",
            "answers": [
              {
                "choice": "<p>Modify the security group that is associated with the EC2 instances to have the same outbound rules as inbound rules.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Modify the network ACL that is associated with the CIDR range to allow outbound traffic to ephemeral ports.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Modify the inbound rules on the internet gateway to allow the required ports.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Modify the network ACL that is associated with the CIDR range to have the same outbound rules as inbound rules.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 92 discussion",
        "discusstion": [
          {
            "id": 1129133,
            "date": "Tue 23 Jan 2024 01:45",
            "username": "\t\t\t\tJamshif01\t\t\t",
            "content": "I don't understand why they are called 'ephmeral' ports",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1102690,
            "date": "Thu 21 Dec 2023 16:44",
            "username": "\t\t\t\ttayman\t\t\t",
            "content": "Definitely B. ",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1101952,
            "date": "Wed 20 Dec 2023 22:16",
            "username": "\t\t\t\tykhan321\t\t\t",
            "content": "Did someone take the test recently? How many questons appeared from here?",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1080345,
            "date": "Sat 25 Nov 2023 22:24",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Agreed with B. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1079903,
            "date": "Sat 25 Nov 2023 11:02",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "B.  You must allow the ephemeral ports in the outbound NACL for the CIDR range.",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1078776,
            "date": "Thu 23 Nov 2023 21:39",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#93",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company uses infrastructure as code (IaC) to create AWS infrastructure. The company writes the code as AWS CloudFormation templates to deploy the infrastructure. The company has an existing CI/CD pipeline that the company can use to deploy these templates.<br><br>After a recent security audit, the company decides to adopt a policy-as-code approach to improve the company's security posture on AWS. The company must prevent the deployment of any infrastructure that would violate a security policy, such as an unencrypted Amazon Elastic Block Store (Amazon EBS) volume.<br><br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#93",
            "answers": [
              {
                "choice": "<p>Turn on AWS Trusted Advisor. Configure security notifications as webhooks in the preferences section of the CI/CD pipeline.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Turn on AWS Config. Use the prebuilt rules or customized rules. Subscribe tile CI/CD pipeline to an Amazon Simple Notification Service (Amazon SNS) topic that receives notifications from AWS Config.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create rule sets in AWS CloudFormation Guard. Run validation checks for CloudFormation templates as a phase of the CI/CD process.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create rule sets as SCPs. Integrate the SCPs as a part of validation control in a phase of the CI/CD process.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 93 discussion",
        "discusstion": [
          {
            "id": 1096533,
            "date": "Thu 14 Dec 2023 15:10",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "https://aws.amazon.com/blogs/mt/policy-as-code-for-securing-aws-and-third-party-resource-types/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1080476,
            "date": "Sun 26 Nov 2023 05:23",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "C definitely. CFN Guard defined rule sets help in preventing from the derivation of Infrastructure resource security policies..",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1079904,
            "date": "Sat 25 Nov 2023 11:04",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "C for sure",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1078780,
            "date": "Thu 23 Nov 2023 21:41",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#94",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running an Amazon RDS for MySQL DB instance in a VPC.  The VPC must not send or receive network traffic through the internet.<br><br>A security engineer wants to use AWS Secrets Manager to rotate the DB instance credentials automatically. Because of a security policy, the security engineer cannot use the standard AWS Lambda function that Secrets Manager provides to rotate the credentials.<br><br>The security engineer deploys a custom Lambda function in the VPC.  The custom Lambda function will be responsible for rotating the secret in Secrets Manager. The security engineer edits the DB instance's security group to allow connections from this function. When the function is invoked, the function cannot communicate with Secrets Manager to rotate the secret properly.<br><br>What should the security engineer do so that the function can rotate the secret?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#94",
            "answers": [
              {
                "choice": "<p>Add an egress-only internet gateway to the VPC.  Allow only the Lambda function's subnet to route traffic through the egress-only internet gateway.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Add a NAT gateway to the VPC.  Configure only the Lambda function's subnet with a default route through the NAT gateway.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure a VPC peering connection to the default VPC for Secrets Manager. Configure the Lambda function's subnet to use the peering connection for routes.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure a Secrets Manager interface VPC endpoint. Include the Lambda function's private subnet during the configuration process.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 94 discussion",
        "discusstion": [
          {
            "id": 1096535,
            "date": "Thu 14 Dec 2023 15:14",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/vpc-endpoint-overview.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1080489,
            "date": "Sun 26 Nov 2023 06:03",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "D looks legit.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1079908,
            "date": "Sat 25 Nov 2023 11:09",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "D is the winner",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1078782,
            "date": "Thu 23 Nov 2023 21:43",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#95",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>The security engineer is managing a traditional three-tier web application that is running on Amazon EC2 instances. The application has become the target of increasing numbers of malicious attacks from the internet.<br><br>What steps should the security engineer take to check for known vulnerabilities and limit the attack surface? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#95",
            "answers": [
              {
                "choice": "<p>Use AWS Certificate Manager to encrypt all traffic between the client and application servers.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Review the application security groups to ensure that only the necessary ports are open.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use Elastic Load Balancing to offload Secure Sockets Layer encryption.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use Amazon Inspector to periodically scan the backend instances.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS Key Management Service (AWS KMS) to encrypt all the traffic between the client and application servers.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 95 discussion",
        "discusstion": [
          {
            "id": 1081903,
            "date": "Mon 27 Nov 2023 20:29",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "Security groups for reducing the attack surface,<br>Amazon Inspector to scan for and mitigate known vulnerabilities",
            "upvote_count": "7",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 1080490,
            "date": "Sun 26 Nov 2023 06:08",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "B and D , self-explanatory..",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 1079910,
            "date": "Sat 25 Nov 2023 11:10",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "B D.  Moderator, please correct the default answers",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 1078783,
            "date": "Thu 23 Nov 2023 21:45",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BD"
          }
        ]
      },
      {
        "question_id": "#96",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using Amazon Elastic Container Service (Amazon ECS) to run its container-based application on AWS. The company needs to ensure that the container images contain no severe vulnerabilities. The company also must ensure that only specific IAM roles and specific AWS accounts can access the container images.<br><br>Which solution will meet these requirements with the LEAST management overhead?</p>",
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
                "choice": "<p>Pull images from the public container registry. Publish the images to Amazon Elastic Container Registry (Amazon ECR) repositories with scan on push configured in a centralized AWS account. Use a CI/CD pipeline to deploy the images to different AWS accounts. Use identity-based policies to restrict access to which IAM principals can access the images.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Pull images from the public container registry. Publish the images to a private container registry that is hosted on Amazon EC2 instances in a centralized AWS account. Deploy host-based container scanning tools to EC2 instances that run Amazon ECS. Restrict access to the container images by using basic authentication over HTTPS.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Pull images from the public container registry. Publish the images to Amazon Elastic Container Registry (Amazon ECR) repositories with scan on push configured in a centralized AWS account. Use a CI/CD pipeline to deploy the images to different AWS accounts. Use repository policies and identity-based policies to restrict access to which IAM principals and accounts can access the images.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Pull images from the public container registry. Publish the images to AWS CodeArtifact repositories in a centralized AWS account. Use a CI/CD pipeline to deploy the images to different AWS accounts. Use repository policies and identity-based policies to restrict access to which IAM principals and accounts can access the images.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 96 discussion",
        "discusstion": [
          {
            "id": 1128890,
            "date": "Mon 22 Jan 2024 18:07",
            "username": "\t\t\t\tGafa255\t\t\t",
            "content": "https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1096547,
            "date": "Thu 14 Dec 2023 15:25",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1081909,
            "date": "Mon 27 Nov 2023 20:37",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "C is the correct answer. Please refer to https://aws.amazon.com/premiumsupport/knowledge-center/secondary-account-access-ecr/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1080492,
            "date": "Sun 26 Nov 2023 06:19",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Should be C as it logically answers for not only the question of providing a solution of vulnerable free container image process but also covers the method of its access restrictions via IAM roles/principals and accounts as well.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1079911,
            "date": "Sat 25 Nov 2023 11:13",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "I like C.  More hardened than A?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A also doesn't mention account restrictions so C for sure</li></ul>",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1079912,
            "date": "Sat 25 Nov 2023 11:14",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "A also doesn't mention account restrictions so C for sure",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1078785,
            "date": "Thu 23 Nov 2023 21:47",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "1",
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
        "question_text": "<p>A company's data scientists want to create artificial intelligence and machine learning (AI/ML) training models by using Amazon SageMaker. The training models will use large datasets in an Amazon S3 bucket. The datasets contain sensitive information.<br><br>On average, the data scientists need 30 days to train models. The S3 bucket has been secured appropriately. The company's data retention policy states that all data that is older than 45 days must be removed from the S3 bucket.<br><br>Which action should a security engineer take to enforce this data retention policy?</p>",
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
                "choice": "<p>Configure an S3 Lifecycle rule on the S3 bucket to delete objects after 45 days.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create an AWS Lambda function to check the last-modified date of the S3 objects and delete objects that are older than 45 days. Create an S3 event notification to invoke the Lambda function for each PutObject operation.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an AWS Lambda function to check the last-modified date of the S3 objects and delete objects that are older than 45 days. Create an Amazon EventBridge rule to invoke the Lambda function each month.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure S3 Intelligent-Tiering on the S3 bucket to automatically transition objects to another storage class.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 97 discussion",
        "discusstion": [
          {
            "id": 1105166,
            "date": "Mon 25 Dec 2023 11:16",
            "username": "\t\t\t\trahav\t\t\t",
            "content": "A is correct. need to be removed",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1101968,
            "date": "Wed 20 Dec 2023 22:50",
            "username": "\t\t\t\tykhan321\t\t\t",
            "content": "correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1080973,
            "date": "Sun 26 Nov 2023 20:01",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Option A is sufficient to complete the required asks.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1079914,
            "date": "Sat 25 Nov 2023 11:18",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "A.  The rest are just pure comedy<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Laughing!!! I agree, they are just pure comedy.</li></ul>",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1081910,
            "date": "Mon 27 Nov 2023 20:40",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "Laughing!!! I agree, they are just pure comedy.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1078788,
            "date": "Thu 23 Nov 2023 21:48",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
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
        "question_text": "<p>A security engineer is troubleshooting an AWS Lambda function that is named MyLambdaFunction. The function is encountering an error when the function attempts to read the objects in an Amazon S3 bucket that is named DOC-EXAMPLE-BUCKET. The S3 bucket has the following bucket policy:<br><br><img src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image17.png\"><br><br>Which change should the security engineer make to the policy to ensure that the Lambda function can read the bucket objects?</p>",
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
                "choice": "<p>Remove the Condition element. Change the Principal element to the following: <img src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image18.png\"><br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Change the Action element to the following:<img src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image19.png\"><br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Change the Resource element to \"arn:aws:s3:::DOC-EXAMPLE- BUCKET/*''.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Change the Resource element to \"arn:aws:lambda:::function:MyLambdaFunction\". Change the Principal element to the following: <img src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image20.png\"><br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 98 discussion",
        "discusstion": [
          {
            "id": 1080980,
            "date": "Sun 26 Nov 2023 20:14",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Yup, option C is absolutely correct since there's nothing wrong on any other areas except the missing ' * ' under the Resource element.",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1128892,
            "date": "Mon 22 Jan 2024 18:12",
            "username": "\t\t\t\tGafa255\t\t\t",
            "content": "missing the *",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1079915,
            "date": "Sat 25 Nov 2023 11:20",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "C.  Missing the *",
            "upvote_count": "2",
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
        "question_text": "<p>An IAM user receives an Access Denied message when the user attempts to access objects in an Amazon S3 bucket. The user and the S3 bucket are in the same AWS account. The S3 bucket is configured to use server-side encryption with AWS KMS keys (SSE-KMS) to encrypt all of its objects at rest by using a customer managed key from the same AWS account. The S3 bucket has no bucket policy defined. The IAM user has been granted permissions through an IAM policy that allows the kms:Decrypt permission to the customer managed key. The IAM policy also allows the s3:List* and s3:Get* permissions for the S3 bucket and its objects.<br><br>Which of the following is a possible reason that the IAM user cannot access the objects in the S3 bucket?</p>",
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
                "choice": "<p>The IAM policy needs to allow the kms:DescribeKey permission.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The S3 bucket has been changed to use the AWS managed key to encrypt objects at rest.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>An S3 bucket policy needs to be added to allow the IAM user to access the objects.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The KMS key policy has been edited to remove the ability for the AWS account to have full access to the key.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 99 discussion",
        "discusstion": [
          {
            "id": 1122985,
            "date": "Mon 15 Jan 2024 02:07",
            "username": "\t\t\t\tvikasj1in\t\t\t",
            "content": "The IAM user has been granted the kms:Decrypt permission for the customer managed key used for server-side encryption in the S3 bucket. If the KMS key policy has been modified to restrict access, it might override the IAM user's permissions, resulting in an Access Denied error.<br><br>It's crucial to ensure that the KMS key policy grants the necessary permissions to the AWS account (and by extension, the IAM user) to perform the required decryption operations.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1105069,
            "date": "Mon 25 Dec 2023 07:53",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "If you allow by IAM policy to a key, it still can be denied by key policy (which is another policy) unless you explicitly allows.<br>\\\"Unless the key policy explicitly allows it, you cannot use IAM policies to allow access to a KMS key. Without permission from the key policy, IAM policies that allow permissions have no effect.\\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html</li></ul>",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1105070,
            "date": "Mon 25 Dec 2023 07:53",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1096776,
            "date": "Thu 14 Dec 2023 21:00",
            "username": "\t\t\t\tazure4life\t\t\t",
            "content": "The possible reason that the IAM user cannot access the objects in the S3 bucket is that the KMS key policy has been edited to remove the ability for the AWS account to have full access to the key.<br><br>Since the S3 bucket is using SSE-KMS encryption with a customer managed key, the key policy for that KMS key needs to grant the appropriate permissions to allow decryption of the objects. The IAM policy grants the kms:Decrypt permission, but if the key policy no longer gives the AWS account full access, the decrypt permission will still be denied.<br><br>Options A and B relate to the kms:DescribeKey permission and AWS managed keys, but a customer managed key is being used here. Option C is incorrect because an S3 bucket policy is not required when using IAM policies for permissions. Therefore, option D that mentions the KMS key policy having inappropriate access for the account is the likely reason for the access being denied.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1084858,
            "date": "Fri 01 Dec 2023 02:25",
            "username": "\t\t\t\tkejam\t\t\t",
            "content": "https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-default.html#key-policy-default-allow-root-enable-iam",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1080994,
            "date": "Sun 26 Nov 2023 20:39",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "The following statement leads me to believe that option D could be the best option:<br>'The S3 bucket is configured to use server-side encryption with AWS KMS keys (SSE-KMS) to encrypt all of its objects at rest by using a customer managed key from the same AWS account'.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1079919,
            "date": "Sat 25 Nov 2023 11:22",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "D is correct",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1078791,
            "date": "Thu 23 Nov 2023 21:51",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#100",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a guideline that mandates the encryption of all Amazon S3 bucket data in transit. A security engineer must implement an S3 bucket policy that denies any S3 operations if data is not encrypted.<br><br>Which S3 bucket policy will meet this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#100",
            "answers": [
              {
                "choice": "<p><br><img src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image21.png\"><br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p><br><img src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image22.png\"><br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p><br><img src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image23.png\"><br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p><br><img src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image24.png\"><br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 100 discussion",
        "discusstion": [
          {
            "id": 1127317,
            "date": "Sat 20 Jan 2024 15:16",
            "username": "\t\t\t\tcannoe\t\t\t",
            "content": "The question is a bit tricky for me.<br><br>The requirement is: \\\"A security engineer must implement an S3 bucket policy that denies any S3 operations if data is not encrypted.\\\"<br><br>Using HTTPS as a connection does not encrypt the data, it encrypts the connection. When using HTTPS to access an Amazon S3 bucket, the HTTPS encryption is de-encapsulated at the S3 service endpoint. This means the data transmitted between your application and the S3 endpoint is encrypted in transit using HTTPS, but once it reaches the S3 endpoint, the encryption is removed before the data is stored in S3.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1086561,
            "date": "Sun 03 Dec 2023 04:27",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Updated selection: Def. B",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1084860,
            "date": "Fri 01 Dec 2023 02:30",
            "username": "\t\t\t\tkejam\t\t\t",
            "content": "Enforce encryption of data in transit<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html#security-best-practices-prevent",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1081927,
            "date": "Mon 27 Nov 2023 21:01",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "This question is requesting to make objects accessible only through HTTPS. Option B is correct because it specifies the bucket policy condition with correct syntax.<br><br>Please refer to \\\"Defense-in-depth requirement 2: Data must be accessible only by a limited set of public IP addresses\\\" section in this link - https://aws.amazon.com/blogs/security/how-to-use-bucket-policies-and-apply-defense-in-depth-to-help-secure-your-amazon-s3-data/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Thnx so much... got the concept cleared now so def. going with B here now..</li></ul>",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1086560,
            "date": "Sun 03 Dec 2023 04:21",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Thnx so much... got the concept cleared now so def. going with B here now..",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1081003,
            "date": "Sun 26 Nov 2023 20:52",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Not sure if I'm fully correct here in selecting this ans. I'd go with C here cuz I feel like it is asked about no S3 bucket operation IF the data is not encrypted. It doesn't say about if the data is not securely in transit. That's why in my opinion, the AES256 encryption method should be mentioned under the conditional logic area in the bucket policy.<br><br>But I'd appreciate if anyone else would like to discuss and clarify my understandings on this if I'm incorrect here... Thnx so much!",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1079920,
            "date": "Sat 25 Nov 2023 11:25",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "B.  You want to deny where secure transport is false<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://repost.aws/knowledge-center/s3-bucket-policy-for-config-rule</li></ul>",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1081911,
            "date": "Mon 27 Nov 2023 20:41",
            "username": "\t\t\t\tWije1\t\t\t",
            "content": "https://repost.aws/knowledge-center/s3-bucket-policy-for-config-rule",
            "upvote_count": "2",
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
        "question_text": "<p>A security engineer wants to use Amazon Simple Notification Service (Amazon SNS) to send email alerts to a company's security team for Amazon GuardDuty findings that have a High severity level. The security engineer also wants to deliver these findings to a visualization tool for further examination. <br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#101",
            "answers": [
              {
                "choice": "<p>Set up GuardDuty to send notifications to an Amazon CloudWatch alarm with two targets in CloudWatch. From CloudWatch, stream the findings through Amazon Kinesis Data Streams into an Amazon Open Search Service domain as the first target for delivery. Use Amazon QuickSight to visualize the findings. Use OpenSearch queries for further analysis. Deliver email alerts to the security team by configuring an SNS topic as a second target for the CloudWatch alarm. Use event pattern matching with an Amazon EventBridge event rule to send only High severity findings in the alerts.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Set up GuardDuty to send notifications to AWS CloudTrail with two targets in CloudTrail. From CloudTrail, stream the findings through Amazon Kinesis Data Firehose into an Amazon OpenSearch Service domain as the first target for delivery. Use OpenSearch Dashboards to visualize the findings. Use OpenSearch queries for further analysis. Deliver email alerts to the security team by configuring an SNS topic as a second target for CloudTrail. Use event pattern matching with a CloudTrail event rule to send only High severity findings in the alerts.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Set up GuardDuty to send notifications to Amazon EventBridge with two targets. From EventBridge, stream the findings through Amazon Kinesis Data Firehose into an Amazon OpenSearch Service domain as the first target for delivery. Use OpenSearch Dashboards to visualize the findings. Use OpenSearch queries for further analysis. Deliver email alerts to the security team by configuring an SNS topic as a second target for EventBridge. Use event pattern matching with an EventBridge event rule to send only High severity findings in the alerts.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Set up GuardDuty to send notifications to Amazon EventBridge with two targets. From EventBridge, stream the findings through Amazon Kinesis Data Streams into an Amazon OpenSearch Service domain as the first target for delivery. Use Amazon QuickSight to visualize the findings. Use OpenSearch queries for further analysis. Deliver email alerts to the security team by configuring an SNS topic as a second target for EventBridge. Use event pattern matching with an EventBridge event rule to send only High severity findings in the alerts.</p>",
                "correct": false,
                "feedback": ""
              },
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 100 discussion",
        "discusstion": [
          {
            "id": 1129478,
            "date": "Tue 23 Jan 2024 12:57",
            "username": "\t\t\t\tmynickc \t\t\t",
            "content": "D is not right because you need to perform a few activities to establish connection b/w Opensearch and QuickSight which is missing in choice D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1129478,
            "date": "Tue 23 Jan 2024 12:57",
            "username": "\t\t\t\tmynickc  \t\t\t",
            "content": "C - it filters only High alerts.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
        ]
      },
      {
        "question_id": "#102",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A security engineer needs to implement a write-once-read-many (WORM) model for data that a company will store in Amazon S3 buckets. The company uses the S3 Standard storage class for all of its S3 buckets. The security engineer must ensure that objects cannot be overwritten or deleted by any user, including the AWS account root user.<br><br>Which solution will meet these requirements?</p>",
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
                "choice": "<p>Create new S3 buckets with S3 Object Lock enabled in compliance mode. Place objects in the S3 buckets.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use S3 Glacier Vault Lock to attach a Vault Lock policy to new S3 buckets. Wait 24 hours to complete the Vault Lock process. Place objects in the S3 buckets.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create new S3 buckets with S3 Object Lock enabled in governance mode. Place objects in the S3 buckets.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create new S3 buckets with S3 Object Lock enabled in governance mode. Add a legal hold to the S3 buckets. Place objects in the S3 buckets.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 102 discussion",
        "discusstion": [
          {
            "id": 1129478,
            "date": "Tue 23 Jan 2024 12:57",
            "username": "\t\t\t\tJamshif01\t\t\t",
            "content": "A<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-configure.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1089047,
            "date": "Wed 06 Dec 2023 08:24",
            "username": "\t\t\t\tconfusedyeti69\t\t\t",
            "content": "In compliance mode, a protected object version can't be overwritten or deleted by any user, including the root user in your AWS account. When an object is locked in compliance mode, its retention mode can't be changed, and its retention period can't be shortened. Compliance mode helps ensure that an object version can't be overwritten or deleted for the duration of the retention period.<br><br>In governance mode, users can't overwrite or delete an object version or alter its lock settings unless they have special permissions. With governance mode, you protect objects against being deleted by most users, but you can still grant some users permission to alter the retention settings or delete the objects if necessary. You can also use governance mode to test retention-period settings before creating a compliance-mode retention period.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1084926,
            "date": "Fri 01 Dec 2023 04:55",
            "username": "\t\t\t\tkejam\t\t\t",
            "content": "https://aws.amazon.com/s3/features/object-lock/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1081014,
            "date": "Sun 26 Nov 2023 21:49",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Option A would work in this usecase.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1079922,
            "date": "Sat 25 Nov 2023 11:29",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "A rings the most bells",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1078802,
            "date": "Thu 23 Nov 2023 21:56",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "coorect",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#103",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company needs complete encryption of the traffic between external users and an application. The company hosts the application on a fleet of Amazon EC2 instances that run in an Auto Scaling group behind an Application Load Balancer (ALB).<br><br>How can a security engineer meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#103",
            "answers": [
              {
                "choice": "<p>Create a new Amazon-issued certificate in AWS Secrets Manager. Export the certificate from Secrets Manager. Import the certificate into the ALB and the EC2 instances.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a new Amazon-issued certificate in AWS Certificate Manager (ACM). Associate the certificate with the ALExport the certificate from ACM. Install the certificate on the EC2 instances.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Import a new third-party certificate into AWS Identity and Access Management (IAM). Export the certificate from IAM. Associate the certificate with the ALB and the EC2 instances.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Import a new third-party certificate into AWS Certificate Manager (ACM). Associate the certificate with the ALB.  Install the certificate on the EC2 instances.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 103 discussion",
        "discusstion": [
          {
            "id": 1082040,
            "date": "Tue 28 Nov 2023 01:51",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "Because of the wording of this question, I did not first know which of the options B and D is correct.<br><br>However, my conviction that you can't directly install Amazon-issued certificates on EC2 instances (refer to - https://repost.aws/knowledge-center/associate-acm-certificate-alb-nlb for more information) made me to study a few documentations to be sure D is the correct answer.<br><br>Please check the Accepted answer in the following thread - https://repost.aws/questions/QUIo7PWvZ3T6aFYCByhZ5f0A/load-certificate-on-alb-and-ec2",
            "upvote_count": "7",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1123008,
            "date": "Mon 15 Jan 2024 03:07",
            "username": "\t\t\t\tvikasj1in\t\t\t",
            "content": "B. <br>To achieve complete encryption of the traffic between external users and an application hosted on Amazon EC2 instances behind an Application Load Balancer (ALB), you would typically use SSL/TLS encryption. AWS Certificate Manager (ACM) provides a managed service for provisioning and renewing SSL/TLS certificates.<br><br>Here's how the process works:<br><br>Create a new Amazon-issued certificate in ACM.<br>Associate the certificate with the ALB.  This ensures that the ALB can terminate SSL/TLS connections on behalf of the EC2 instances.<br>Export the certificate from ACM.<br>Install the exported certificate on the EC2 instances. This ensures that the communication between the ALB and EC2 instances is also encrypted.<br>By using ACM, you benefit from the managed certificate service, automated certificate renewal, and easy integration with other AWS services like ALB.  This approach ensures secure communication from external users to the ALB and between the ALB and EC2 instances.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1097965,
            "date": "Sat 16 Dec 2023 08:06",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "ACM should be used, so A and C are out.<br>Between B and D, B is out because Amazon-issued public cert cannot be installed on EC2 instances.<br>https://repost.aws/knowledge-center/associate-acm-certificate-alb-nlb",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1096791,
            "date": "Thu 14 Dec 2023 21:11",
            "username": "\t\t\t\tazure4life\t\t\t",
            "content": "Option D is the correct solution.<br><br>To encrypt traffic between external users and the application behind the Application Load Balancer (ALB), a certificate should be imported into AWS Certificate Manager (ACM) and associated with the ALB.  The same certificate should also be installed on the EC2 instances.<br><br>Option A is incorrect because Secrets Manager is used for storing secrets, not SSL/TLS certificates.<br><br>Option B is incorrect because Amazon-issued ACM certificates can only be used with Elastic Load Balancers and Amazon CloudFront. They cannot be exported and installed on EC2 instances.<br><br>Option C is incorrect because IAM does not support importing or managing SSL/TLS certificates.<br><br>Option D uses a third-party certificate imported into ACM, associated with the ALB, and installed on the EC2 instances. This provides complete encryption between the users and application.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1092674,
            "date": "Sun 10 Dec 2023 18:07",
            "username": "\t\t\t\tOralinux\t\t\t",
            "content": "Bad question; I think it should be B since AWSalways tries to promote and use internal services and not go to third parties. We deploy SSL in ALB terminate and send non-SSL to EC2. In my opinion, the provided answers are incorrect.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1084624,
            "date": "Thu 30 Nov 2023 18:43",
            "username": "\t\t\t\tsnowmaggedon\t\t\t",
            "content": "CAN'T use an ACM cert on ec2 instance. D is the right answer.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1081019,
            "date": "Sun 26 Nov 2023 22:17",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "I think it's asking about the key difference btw creating Amazon based Cert versus creating/using 3rd party Certs.... specially on leveraging the feature of 'exporting the Cert' from ACM which looks valid in option B only whereas on other choices, it's not a good fit. I could be wrong but that's what makes me feel to go with option B here..",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1079927,
            "date": "Sat 25 Nov 2023 11:40",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "Kind of a bad question here, so I can't really make a proper decision between B and D. .What certificate is being applied? ALB does not pass encrypted traffic to a target. NLB will do that.<br><br>you must deploy at least one SSL server certificate on your load balancer. The load balancer uses a server certificate to terminate the front-end connection and then decrypt requests from clients before sending them to the targets. You must also specify a security policy, which is used to negotiate secure connections between clients and the load balancer.<br><br>If you need to pass encrypted traffic to targets without the load balancer decrypting it, you can create a Network Load Balancer or Classic Load Balancer with a TCP listener on port 443. With a TCP listener, the load balancer passes encrypted traffic through to the targets without decrypting it.https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1078803,
            "date": "Thu 23 Nov 2023 21:58",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#104",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an organization with SCPs in AWS Organizations. The root SCP for the organization is as follows:<br><br><img src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image25.png\"><br><br>The company's developers are members of a group that has an IAM policy that allows access to Amazon Simple Email Service (Amazon SES) by allowing ses:* actions. The account is a child to an OU that has an SCP that allows Amazon SES. The developers are receiving a not-authorized error when they try to access Amazon SES through the AWS Management Console.<br><br>Which change must a security engineer implement so that the developers can access Amazon SES?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#104",
            "answers": [
              {
                "choice": "<p>Add a resource policy that allows each member of the group to access Amazon SES.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Add a resource policy that allows \"Principal\": {\"AWS\": \"arn:aws:iam::account-number:group/Dev\"}.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Remove the AWS Control Tower control (guardrail) that restricts access to Amazon SES.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Remove Amazon SES from the root SCP.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 104 discussion",
        "discusstion": [
          {
            "id": 1105203,
            "date": "Mon 25 Dec 2023 12:06",
            "username": "\t\t\t\trahav\t\t\t",
            "content": "D is the correct one",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1102005,
            "date": "Thu 21 Dec 2023 00:04",
            "username": "\t\t\t\tykhan321\t\t\t",
            "content": "Why most of the answers are incorrect here.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1096794,
            "date": "Thu 14 Dec 2023 21:16",
            "username": "\t\t\t\tazure4life\t\t\t",
            "content": "Option D is the correct solution. The root SCP is denying access to Amazon SES across the organization. Even though the OU SCP and IAM policy allow SES access, the root SCP takes precedence and blocks it. Removing Amazon SES from the root SCP whitelist will resolve the issue and allow the developers to access SES based on the permissions granted in their IAM policy.<br><br>Option A is incorrect because resource policies apply at the service level, not for IAM users/groups.<br><br>Option B is also related to resource policies, not the issue with the SCP whitelist.<br><br>Option C mentions AWS Control Tower which is not referenced in the question. The SCP is set through AWS Organizations.<br><br>So the root cause is the root SCP denying access to SES, and it needs to be removed from that SCP to allow access that is permitted in the lower levels of permissions.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1092680,
            "date": "Sun 10 Dec 2023 18:17",
            "username": "\t\t\t\tOralinux\t\t\t",
            "content": "Answer D:<br>a resource policy attached directly to an AWS resource (such as Amazon SES) cannot override an SCP (Service Control Policy) set at the root level in AWS Organizations.<br><br>Service Control Policies (SCPs) at the root level act as \\\"guardrails\\\" and define the maximum permissions that accounts within the organization can have. They are evaluated before resource policies.<br><br>If an SCP denies access to a particular service, even a resource policy allowing access on the specific resource won't take effect. The SCP at the root level will override any resource policy attached to individual resources.<br><br>So, while a resource policy can be useful for granting permissions on a specific resource, it cannot be used to override the restrictions imposed by an SCP at a higher level in the organization's hierarchy. In this scenario, removing the restriction for Amazon SES from the root SCP would be the effective solution.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1087041,
            "date": "Sun 03 Dec 2023 19:47",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Leads me towards option D only cuz it seems like the denial of ses* actions explicitly defined under the SCP is probably blocking their authorization requests... not sure if Control Tower here makes any big difference..",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1079930,
            "date": "Sat 25 Nov 2023 11:42",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "The answer is D",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#105",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company hosts a public website on an Amazon EC2 instance. HTTPS traffic must be able to access the website. The company uses SSH for management of the web server.<br><br>The website is on the subnet 10.0.1.0/24. The management subnet is 192.168.100.0/24. A security engineer must create a security group for the EC2 instance.<br><br>Which combination of steps should the security engineer take to meet these requirements in the MOST secure manner? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#105",
            "answers": [
              {
                "choice": "<p>Allow port 22 from source 0.0.0.0/0.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Allow port 443 from source 0.0 0 0/0.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Allow port 22 from 192.168.100.0/24.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Allow port 22 from 10.0.1.0/24.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Allow port 443 from 10.0.1.0/24.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 105 discussion",
        "discusstion": [
          {
            "id": 1105204,
            "date": "Mon 25 Dec 2023 12:09",
            "username": "\t\t\t\trahav\t\t\t",
            "content": "BC is the correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 1103852,
            "date": "Sat 23 Dec 2023 04:46",
            "username": "\t\t\t\ttayman\t\t\t",
            "content": "BC 100%",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 1102007,
            "date": "Thu 21 Dec 2023 00:07",
            "username": "\t\t\t\tykhan321\t\t\t",
            "content": "Another wrong answer here. My head is spinning.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 1092687,
            "date": "Sun 10 Dec 2023 18:25",
            "username": "\t\t\t\tOralinux\t\t\t",
            "content": "Answer: BC",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1082060,
            "date": "Tue 28 Nov 2023 02:28",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Yup, agreed with B and C. ",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 1079934,
            "date": "Sat 25 Nov 2023 11:47",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "Quite sure the subnet \\\"10.0.1.0/24\\\" is a distractor, so B and C are my vote.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Agree. I almost fell for it until I read the question again and paid attention to \\\"HTTPS traffic must be able to access the website\\\". This means any (0.0.0.0/0) https traffic.</li></ul>",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 1082062,
            "date": "Tue 28 Nov 2023 02:33",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "Agree. I almost fell for it until I read the question again and paid attention to \\\"HTTPS traffic must be able to access the website\\\". This means any (0.0.0.0/0) https traffic.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1078805,
            "date": "Thu 23 Nov 2023 22:00",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BC"
          }
        ]
      },
      {
        "question_id": "#106",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A security engineer wants to forward custom application-security logs from an Amazon EC2 instance to Amazon CloudWatch. The security engineer installs the CloudWatch agent on the EC2 instance and adds the path of the logs to the CloudWatch configuration file.<br><br>However, CloudWatch does not receive the logs. The security engineer verifies that the awslogs service is running on the EC2 instance.<br><br>What should the security engineer do next to resolve the issue?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#106",
            "answers": [
              {
                "choice": "<p>Add AWS CloudTrail to the trust policy of the EC2 in stance. Send the custom logs to CloudTrail instead of CloudWatch.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Add Amazon S3 to the trust policy of the EC2 instance. Configure the application to write the custom logs to an S3 bucket that CloudWatch can use to ingest the logs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Add Amazon Inspector to the trust policy of the EC2 instance. Use Amazon Inspector instead of the CloudWatch agent to collect the custom logs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Attach the CloudWatchAgentServerPolicy AWS managed policy to the EC2 instance role.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 106 discussion",
        "discusstion": [
          {
            "id": 1129494,
            "date": "Tue 23 Jan 2024 13:13",
            "username": "\t\t\t\tJamshif01\t\t\t",
            "content": "D<br>All other answers are irrelevant",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1105206,
            "date": "Mon 25 Dec 2023 12:10",
            "username": "\t\t\t\trahav\t\t\t",
            "content": "D for sure",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1104554,
            "date": "Sun 24 Dec 2023 12:05",
            "username": "\t\t\t\tyorkicurke\t\t\t",
            "content": "Uses of CloudWatchAgentServerPolicy ;<br>It allows the CloudWatch agent to publish metrics and logs to CloudWatch on behalf of the IAM role or user the policy is attached to.<br>It provides permissions for the agent to access and manage its own configuration files stored in S3.<br>The policy grants permissions across multiple AWS services like CloudWatch, S3, KMS etc. to allow end-to-end functionality of the monitoring agent.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1102008,
            "date": "Thu 21 Dec 2023 00:09",
            "username": "\t\t\t\tykhan321\t\t\t",
            "content": "Only EC2 & Cloudwatch are in questions here.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1092690,
            "date": "Sun 10 Dec 2023 18:29",
            "username": "\t\t\t\tOralinux\t\t\t",
            "content": "Answer: D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1082074,
            "date": "Tue 28 Nov 2023 03:16",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "No doubt about D. ",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1079935,
            "date": "Sat 25 Nov 2023 11:48",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "D is correcto",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1078807,
            "date": "Thu 23 Nov 2023 22:05",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#107",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A systems engineer is troubleshooting the connectivity of a test environment that includes a virtual security appliance deployed inline. In addition to using the virtual security appliance, the development team wants to use security groups and network ACLs to accomplish various security requirements in the environment.<br><br>What configuration is necessary to allow the virtual security appliance to route the traffic?</p>",
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
                "choice": "<p>Disable network ACLs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure the security appliance's elastic network interface for promiscuous mode.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Disable the Network Source/Destination check on the security appliance's elastic network interface.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Place the security appliance in the public subnet with the internet gateway.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 107 discussion",
        "discusstion": [
          {
            "id": 1123009,
            "date": "Mon 15 Jan 2024 03:18",
            "username": "\t\t\t\tvikasj1in\t\t\t",
            "content": "C,<br>When you deploy a virtual security appliance inline in a subnet, you need to ensure that it can effectively route traffic between different subnets. The \\\"Network Source/Destination check\\\" is a feature in Amazon EC2 that controls whether source/destination checking is enabled or disabled on a network interface.<br><br>In this context, the virtual security appliance acts as a router, and the \\\"Network Source/Destination check\\\" should be disabled on its elastic network interface. When this check is disabled, the network interface can handle traffic that is not specifically destined for the instance it is attached to, allowing it to route traffic between different subnets.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1105207,
            "date": "Mon 25 Dec 2023 12:11",
            "username": "\t\t\t\trahav\t\t\t",
            "content": "C for sure",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1097997,
            "date": "Sat 16 Dec 2023 08:54",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "Source/destination checking<br>You can enable or disable source/destination checks, which ensure that the instance is either the source or the destination of any traffic that it receives. Source/destination checks are enabled by default. You must disable source/destination checks if the instance runs services such as network address translation, routing, or firewalls.<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1096811,
            "date": "Thu 14 Dec 2023 21:28",
            "username": "\t\t\t\tazure4life\t\t\t",
            "content": "Option C is the correct solution.<br><br>To allow a virtual security appliance deployed inline to route traffic between subnets, the Network Source/Destination Check needs to be disabled on its elastic network interface. This enables the appliance to receive traffic that is not specifically addressed to itself.<br><br>Option A is incorrect because disabling network ACLs is not required for a virtual appliance deployment and would reduce security.<br><br>Option B mentions promiscuous mode which applies to physical network interfaces, not virtual ones in AWS.<br><br>Option D places the appliance in the public subnet which may help route internet traffic but does not address routing between private subnets. Disabling the Source/Destination Check is required to enable that routing functionality.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1092692,
            "date": "Sun 10 Dec 2023 18:30",
            "username": "\t\t\t\tOralinux\t\t\t",
            "content": "Answer: C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1084935,
            "date": "Fri 01 Dec 2023 05:24",
            "username": "\t\t\t\tkejam\t\t\t",
            "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1079936,
            "date": "Sat 25 Nov 2023 11:50",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "C is correct",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 1078811,
            "date": "Thu 23 Nov 2023 22:08",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
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
        "question_text": "<p>A security engineer needs to create an Amazon S3 bucket policy to grant least privilege read access to IAM user accounts that are named User1, User2, and User3. These IAM user accounts are members of the AuthorizedPeople IAM group. The security engineer drafts the following S3 bucket policy:<br><br><img src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image26.png\"><br><br>When the security engineer tries to add the policy to the S3 bucket, the following error message appears: \"Missing required field Principal.\"<br><br>The security engineer is adding a Principal element to the policy. The addition must provide read access to only User1, User2, and User3.<br><br>Which solution meets these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#108",
            "answers": [
              {
                "choice": "<p><br><img src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image27.png\"><br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p><br><img src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image28.png\"><br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p><br><img src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image29.png\"><br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p><br><img src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image30.png\"><br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 108 discussion",
        "discusstion": [
          {
            "id": 1079941,
            "date": "Sat 25 Nov 2023 11:54",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "Agree with AgboolaKun. What a lovely question<br><br>You can specify any of the following principals in a policy:<br>AWS account and root user<br>IAM roles<br>Role sessions<br>IAM users<br>Federated user sessions<br>AWS services<br>All principals<br><br>You cannot identify a user group as a principal in a policy (such as a resource-based policy) because groups relate to permissions, not authentication, and principals are authenticated IAM entities.<br><br>https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying",
            "upvote_count": "8",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1092698,
            "date": "Sun 10 Dec 2023 18:40",
            "username": "\t\t\t\tOralinux\t\t\t",
            "content": "Answer A: \\\" IAM user accounts that are named User1, User2, and User3. These IAM user accounts are members of the AuthorizedPeople IAM group\\\"<br>we do not want to give read access to other accounts that are part of the AuthorizedPeople IAM group. > then only A satisfy this criteria",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1087052,
            "date": "Sun 03 Dec 2023 20:09",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "All others are not the valid choices since the Principal needs to be selected only for User1, User2 and User3 'only' explicitly... plus, groups can't be identified as a Principal anyways..",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1079646,
            "date": "Sat 25 Nov 2023 01:04",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "The correct answer is A - https://www.examtopics.com/discussions/amazon/view/60777-exam-aws-certified-security-specialty-topic-1-question-258/",
            "upvote_count": "4",
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
        "question_text": "<p>A security engineer recently rotated all IAM access keys in an AWS account. The security engineer then configured AWS Config and enabled the following AWS Config managed rules: mfa-enabled-for-iam-console-access, iam-user-mfa-enabled, access-keys-rotated, and iam-user-unused-credentials-check.<br><br>The security engineer notices that all resources are displaying as noncompliant after the IAM GenerateCredentialReport API operation is invoked.<br><br>What could be the reason for the noncompliant status?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#109",
            "answers": [
              {
                "choice": "<p>The IAM credential report was generated within the past 4 hours.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>The security engineer does not have the GenerateCredentialReport permission.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The security engineer does not have the GetCredenlialReport permission.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The AWS Config rules have a MaximumExecutionFrequency value of 24 hours.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 109 discussion",
        "discusstion": [
          {
            "id": 1079645,
            "date": "Sat 25 Nov 2023 01:02",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "The report was generated within the past 4 hours - https://repost.aws/knowledge-center/config-credential-report",
            "upvote_count": "8",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1123010,
            "date": "Mon 15 Jan 2024 03:25",
            "username": "\t\t\t\tvikasj1in\t\t\t",
            "content": "When these AWS Config rules are triggered, they rely on the latest IAM credential report to evaluate compliance. If the IAM credential report has been generated within the past 4 hours, it might not reflect the most recent changes, such as the rotation of access keys.<br>To address this, it's a good practice to ensure that the IAM credential report is generated and updated at regular intervals, and AWS Config rules are then evaluated against the most recent report. You can schedule the generation of the IAM credential report and the evaluation of AWS Config rules accordingly.<br><br>A &C are incorrect because the noncompliance is related to the timeliness of the IAM credential report rather than permissions. Option D is incorrect because the MaximumExecutionFrequency value doesn't affect the initial evaluation of the rules; it determines how often the rule is re-evaluated after its first evaluation.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1109355,
            "date": "Sat 30 Dec 2023 04:02",
            "username": "\t\t\t\tbrpjp\t\t\t",
            "content": "Answer D may be correct, on assumption that if maximumexecutionfrequency is 24 hours, then report is one day old rather than 4 hours mentioned on option A.  Anyone can clarify my understanding.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1103967,
            "date": "Sat 23 Dec 2023 11:19",
            "username": "\t\t\t\tyorkicurke\t\t\t",
            "content": "Explained in the following link;<br><br>https://repost.aws/knowledge-center/config-credential-report<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>oh shootAgboolaKunalready mentioned it. ok thumbs up for youAgboolaKun</li></ul>",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1103968,
            "date": "Sat 23 Dec 2023 11:20",
            "username": "\t\t\t\tyorkicurke\t\t\t",
            "content": "oh shootAgboolaKunalready mentioned it. ok thumbs up for youAgboolaKun",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1082118,
            "date": "Tue 28 Nov 2023 04:54",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Agreed on A. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1079945,
            "date": "Sat 25 Nov 2023 11:58",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "I agree with AgboolaKun. Read the link for some good insight",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1078816,
            "date": "Thu 23 Nov 2023 22:10",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Anything else besides correct?</li></ul>",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1102025,
            "date": "Thu 21 Dec 2023 00:22",
            "username": "\t\t\t\tykhan321\t\t\t",
            "content": "Anything else besides correct?",
            "upvote_count": "1",
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
        "question_text": "<p>A company is using AWS WAF to protect a customized public API service that is based on Amazon EC instances. The API uses an Application Load Balancer.<br><br>The AWS WAF web ACL is configured with an AWS Managed Rules rule group. After a software upgrade to the API and the client application, some types of requests are no longer working and are causing application stability issues. A security engineer discovers that AWS WAF logging is not turned on for the web ACL.<br><br>The security engineer needs to immediately return the application to service, resolve the issue, and ensure that logging is not turned off in the future. The security engineer turns on logging for the web ACL and specifies Amazon CloudWatch Logs as the destination.<br><br>Which additional set of steps should the security engineer take to meet the requirements?</p>",
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
                "choice": "<p>Edit the rules in the web ACL to include rules with Count actions. Review the logs to determine which rule is blocking the request. Modify the IAM policy of all AWS WAF administrators so that they cannot remove the logging configuration for any AWS WAF web ACLs.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Edit the rules in the web ACL to include rules with Count actions. Review the logs to determine which rule is blocking the request. Modify the AWS WAF resource policy so that AWS WAF administrators cannot remove the logging configuration for any AWS WAF web ACLs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Edit the rules in the web ACL to include rules with Count and Challenge actions. Review the logs to determine which rule is blocking the request. Modify the AWS WAF resource policy so that AWS WAF administrators cannot remove the logging configuration for any AWS WAF web ACLs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Edit the rules in the web ACL to include rules with Count and Challenge actions. Review the logs to determine which rule is blocking the request. Modify the IAM policy of all AWS WAF administrators so that they cannot remove the logging configuration for any AWS WAF web ACLs.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 110 discussion",
        "discusstion": [
          {
            "id": 1123016,
            "date": "Mon 15 Jan 2024 03:36",
            "username": "\t\t\t\tvikasj1in\t\t\t",
            "content": "B.  A Count action allows rules to collect data about requests that match the conditions but does not block or allow the requests. After making this change, the SE can review the logs in CloudWatch Logs to determine which rule is blocking the specific requests causing the application stability issues. To ensure that logging is not turned off in the future, the security engineer should modify the AWS WAF resource policy. This modification should restrict AWS WAF administrators from removing the logging configuration for any AWS WAF web ACLs, adding an extra layer of protection against inadvertent changes.<br><br>C & D suggest including rules with Count and Challenge actions, which may not be necessary for the immediate resolution of the issue. Option A recommends modifying IAM policies, but modifying the AWS WAF resource policy is a more direct and suitable approach for preventing changes to logging configurations.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1103992,
            "date": "Sat 23 Dec 2023 12:35",
            "username": "\t\t\t\tyorkicurke\t\t\t",
            "content": "As many have suggested of why i'ts unnecessary to go for 'challenge' so C&D -> OUT<br><br>As of why not picking B(resource-based) is because resource policy would only control access to that single web ACL.<br><br>The question asks to ensure logging is not turned off for any web ACLs[well that's what's implied], which modifying IAM policies globally achieves but modifying a single resource policy does not.<br><br>AWS documentation recommends applying least privilege permissions through IAM policies when managing access to resources across multiple accounts. This helps ensure permissions are restricted at the identity level rather than at the individual resource level.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1082147,
            "date": "Tue 28 Nov 2023 05:40",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "It's def. not B.  Going with option A cuz of IAM policy capability in this use case rather than resource policies.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1079956,
            "date": "Sat 25 Nov 2023 12:11",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "Challenge logs are not necessary here (CAPTCHA). We'll also want to restrict with IAM policies and NOT resource policies. Perhaps with SCPs as well. Answer is A<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Challenge:<br>Runs a silent background check on the client session to verify if it's a legitimate browser.<br>Doesn't involve any user interaction, keeping the experience seamless.<br>Less effective against sophisticated bots that can mimic browser behavior.</li></ul>",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1102557,
            "date": "Thu 21 Dec 2023 14:30",
            "username": "\t\t\t\tWeepingMaplte\t\t\t",
            "content": "Challenge:<br>Runs a silent background check on the client session to verify if it's a legitimate browser.<br>Doesn't involve any user interaction, keeping the experience seamless.<br>Less effective against sophisticated bots that can mimic browser behavior.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1078819,
            "date": "Thu 23 Nov 2023 22:12",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#111",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A security engineer is creating an AWS Lambda function. The Lambda function needs to use a role that is named LambdaAuditRole to assume a role that is named AcmeAuditFactoryRole in a different AWS account.<br><br>When the code is processed, the following error message appears: \"An error occurred (AccessDenied) when calling the AssumeRole operation.\"<br><br>Which combination of steps should the security engineer take to resolve this error? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#111",
            "answers": [
              {
                "choice": "<p>Ensure that LambdaAuditRole has the sts:AssumeRole permission for AcmeAuditFactoryRole.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Ensure that LambdaAuditRole has the AWSLambdaBasicExecutionRole managed policy attached.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Ensure that the trust policy for AcmeAuditFactoryRole allows the sts:AssumeRole action from LambdaAuditRole.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Ensure that the trust policy for LambdaAuditRole allows the sts:AssumeRole action from the lambda.amazonaws.com service.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Ensure that the sts:AssumeRole API call is being issued to the us-east-1 Region endpoint.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 111 discussion",
        "discusstion": [
          {
            "id": 1084943,
            "date": "Fri 01 Dec 2023 05:39",
            "username": "\t\t\t\tkejam\t\t\t",
            "content": "https://repost.aws/knowledge-center/lambda-function-assume-iam-role",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 1082152,
            "date": "Tue 28 Nov 2023 05:49",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "makes the perfect logic.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 1079960,
            "date": "Sat 25 Nov 2023 12:19",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "A and C seems right",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 1078824,
            "date": "Thu 23 Nov 2023 22:20",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "coorect",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          }
        ]
      },
      {
        "question_id": "#112",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has AWS accounts in an organization in AWS Organizations. The organization includes a dedicated security account.<br><br>All AWS account activity across all member accounts must be logged and reported to the dedicated security account. The company must retain all the activity logs in a secure storage location within the dedicated security account for 2 years. No changes or deletions of the logs are allowed.<br><br>Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#112",
            "answers": [
              {
                "choice": "<p>In the dedicated security account, create an Amazon S3 bucket. Configure S3 Object Lock in compliance mode and a retention period of 2 years on the S3 bucket. Set the bucket policy to allow the organization's management account to write to the S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>In the dedicated security account, create an Amazon S3 bucket. Configure S3 Object Lock in compliance mode and a retention period of 2 years on the S3 bucket. Set the bucket policy to allow the organization's member accounts to write to the S3 bucket.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>In the dedicated security account, create an Amazon S3 bucket that has an S3 Lifecycle configuration that expires objects after 2 years. Set the bucket policy to allow the organization's member accounts to write to the S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an AWS CloudTrail trail for the organization. Configure logs to be delivered to the logging Amazon S3 bucket in the dedicated security account.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Turn on AWS CloudTrail in each account. Configure logs to be delivered to an Amazon S3 bucket that is created in the organization's management account. Forward the logs to the S3 bucket in the dedicated security account by using AWS Lambda and Amazon Kinesis Data Firehose.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 112 discussion",
        "discusstion": [
          {
            "id": 1084033,
            "date": "Thu 30 Nov 2023 07:33",
            "username": "\t\t\t\tahrentom\t\t\t",
            "content": "I go with BD, because each Member Account has to write into the security Account S3 bucket, not only the Organization Management Account.<br>https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-set-bucket-policy-for-multiple-accounts.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Agreed.CloudTrail for Org requires the destination S3 bucket to allow writes from each member account.Object Lock is enabled to prevent the data from being overwritten/deleted.</li></ul>",
            "upvote_count": "8",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 1084947,
            "date": "Fri 01 Dec 2023 05:45",
            "username": "\t\t\t\tkejam\t\t\t",
            "content": "Agreed.CloudTrail for Org requires the destination S3 bucket to allow writes from each member account.Object Lock is enabled to prevent the data from being overwritten/deleted.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1133354,
            "date": "Sat 27 Jan 2024 14:06",
            "username": "\t\t\t\tErnestokoro\t\t\t",
            "content": "The organization includes a dedicated security account Member account while ALL OTHER Management account. this means to me that granting the permission from the Management account reduces operational overhead than doing it at individual member accounts. Therefore I go with option AD. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1123022,
            "date": "Mon 15 Jan 2024 03:46",
            "username": "\t\t\t\tvikasj1in\t\t\t",
            "content": "A, D<br>Option B covers the storage aspect by configuring a dedicated S3 bucket in the security account, allowing member accounts to write logs. S3 Object Lock in compliance mode ensures the retention requirements.<br><br>Option D complements this by configuring CloudTrail to capture the logs and deliver them to the dedicated S3 bucket directly.<br><br>Together, these options cover the log storage, retention, and collection requirements with the least operational overhead.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1106742,
            "date": "Wed 27 Dec 2023 12:24",
            "username": "\t\t\t\tWeepingMaplte\t\t\t",
            "content": "Enable Organization Trail: In the Management Console or CLI, activate an organization trail that logs all events from all member accounts.<br>https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-trail-organization.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 1099821,
            "date": "Mon 18 Dec 2023 16:31",
            "username": "\t\t\t\tjeff001\t\t\t",
            "content": "Member account needs to write to S3.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 1086458,
            "date": "Sun 03 Dec 2023 00:06",
            "username": "\t\t\t\tmarco25\t\t\t",
            "content": "trails across member accounts, needs permissions to the sender bucket",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 1082161,
            "date": "Tue 28 Nov 2023 06:08",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "If I understand correctly, the reason why the option B can't be a correct one cuz the use case has asked about the logs which must not be deleted or changed which can't be met in option B if we opt for each member's accounts to be given with the full S3 logs access under an organization.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A has only one account and option B has all the aws accounts.</li><li>If following your logic, the management account can delete and change the logs too.<br>And the options also says to only give write access to S3 only.<br>It is not A because members need to write S3, not only management.<br><br>In compliance mode, a protected object version can't be overwritten or deleted by any user, including the root user in your AWS account.<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html</li></ul>",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 1102039,
            "date": "Thu 21 Dec 2023 00:36",
            "username": "\t\t\t\tykhan321\t\t\t",
            "content": "A has only one account and option B has all the aws accounts.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1089471,
            "date": "Wed 06 Dec 2023 16:04",
            "username": "\t\t\t\tconfusedyeti69\t\t\t",
            "content": "If following your logic, the management account can delete and change the logs too.<br>And the options also says to only give write access to S3 only.<br>It is not A because members need to write S3, not only management.<br><br>In compliance mode, a protected object version can't be overwritten or deleted by any user, including the root user in your AWS account.<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1079963,
            "date": "Sat 25 Nov 2023 12:23",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "A and D are correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 1078837,
            "date": "Thu 23 Nov 2023 22:31",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AD"
          }
        ]
      },
      {
        "question_id": "#113",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is testing its incident response plan for compromised credentials. The company runs a database on an Amazon EC2 instance and stores the sensitive database credentials as a secret in AWS Secrets Manager. The secret has rotation configured with an AWS Lambda function that uses the generic rotation function template. The EC2 instance and the Lambda function are deployed in the same private subnet. The VPC has a Secrets Manager VPC endpoint.<br><br>A security engineer discovers that the secret cannot rotate. The security engineer determines that the VPC endpoint is working as intended. The Amazon CloudWatch logs contain the following error: \"setSecret: Unable to log into database\".<br><br>Which solution will resolve this error?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#113",
            "answers": [
              {
                "choice": "<p>Use the AWS Management Console to edit the JSON structure of the secret in Secrets Manager so that the secret automatically conforms with the structure that the database requires.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Ensure that the security group that is attached to the Lambda function allows outbound connections to the EC2 instance. Ensure that the security group that is attached to the EC2 instance allows inbound connections from the security group that is attached to the Lambda function.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use the Secrets Manager list-secrets command in the AWS CLI to list the secret. Identify the database credentials. Use the Secrets Manager rotate-secret command in the AWS CLI to force the immediate rotation of the secret.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Add an internet gateway to the VPC.  Create a NAT gateway in a public subnet. Update the VPC route tables so that traffic from the Lambda function and traffic from the EC2 instance can reach the Secrets Manager public endpoint.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 113 discussion",
        "discusstion": [
          {
            "id": 1105284,
            "date": "Mon 25 Dec 2023 13:59",
            "username": "\t\t\t\tDaniel76\t\t\t",
            "content": "a) when you use the console to store a database secret, Secrets Manager automatically creates it in the correct JSON structure.<br>c) secret manager already configured as auto-rotation. also, secret id should have been known instead of listing secrets .<br>d) accessing secret manager via public is not recommended.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1104559,
            "date": "Sun 24 Dec 2023 12:29",
            "username": "\t\t\t\tyorkicurke\t\t\t",
            "content": "Hate questions like these which rather then testing your knoweledge of technologies trick you into these weired worded questions.<br><br>the statement 'Ensure that the security group that is attached to the Lambda function allows outbound' threw me off as Lambda does not have SGs.<br><br>But then through some internet digging came accross the fact that when a Lambda function needs to access resources inside a Virtual Private Cloud (VPC), it does so using ENI which resides in a subnet of the VPC and can have a security group associated with it. The security group acts as a virtual firewall for the ENI.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1089480,
            "date": "Wed 06 Dec 2023 16:13",
            "username": "\t\t\t\tconfusedyeti69\t\t\t",
            "content": "Why would the lambda need access to the EC2? The question is unclear about the exact job of the lambda. It is worded as if the lambda job is to change the creds in secrets manager only.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The DB runs on the EC2 that's why the Lambda needs access to it to set the new credentials</li></ul>",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1101676,
            "date": "Wed 20 Dec 2023 16:23",
            "username": "\t\t\t\tJPSWS\t\t\t",
            "content": "The DB runs on the EC2 that's why the Lambda needs access to it to set the new credentials",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1082184,
            "date": "Tue 28 Nov 2023 06:32",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "B is the only one that logically seems right. All others are distracters except option C.  But option C describes the solution of this problem as a one time thing whereas, it's been asked to provide a permanent solution for this use case. That's why B looks much more secured and valid option among all others.",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1079965,
            "date": "Sat 25 Nov 2023 12:27",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "I'll vote B.  The rest are distractors but feel free to correct me if I'm wrong.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 1078840,
            "date": "Thu 23 Nov 2023 22:35",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#114",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company deploys a set of standard IAM roles in AWS accounts. The IAM roles are based on job functions within the company. To balance operational efficiency and security, a security engineer implemented AWS Organizations SCPs to restrict access to critical security services in all company accounts.<br><br>All of the company's accounts and OUs within AWS Organizations have a default FullAWSAccess SCP that is attached. The security engineer needs to ensure that no one can disable Amazon GuardDuty and AWS Security Hub. The security engineer also must not override other permissions that are granted by IAM policies that are defined in the accounts.<br><br>Which SCP should the security engineer attach to the root of the organization to meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#114",
            "answers": [
              {
                "choice": "<p><br><img src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image31.png\"><br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p><br><img src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image32.png\"><br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p><br><img src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image33.png\"><br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p><br><img src=\"https://img.examtopics.com/aws-certified-security-specialty-scs-c02/image34.png\"><br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 114 discussion",
        "discusstion": [
          {
            "id": 1084043,
            "date": "Thu 30 Nov 2023 07:54",
            "username": "\t\t\t\tahrentom\t\t\t",
            "content": "A is correct, key word in SCP is to Deny, because it overwrites the FullAccessSCP Alow statement.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1083028,
            "date": "Wed 29 Nov 2023 01:18",
            "username": "\t\t\t\tAgboolaKun\t\t\t",
            "content": "A is correct. The NotAction element cannot be used in this case.<br><br>You only need an explicit DENY here since all accounts and OUs already have a default FullAWSAccess SCP but you don't want them to be able to disable Amazon GuardDuty and AWS Security Hub.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Kindly correct me if I am wrong. When we attach a new SCP the default FullAWSAccess SCP is detached from the OU. isn't that right?</li></ul>",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1114819,
            "date": "Fri 05 Jan 2024 23:05",
            "username": "\t\t\t\tSab31\t\t\t",
            "content": "Kindly correct me if I am wrong. When we attach a new SCP the default FullAWSAccess SCP is detached from the OU. isn't that right?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1082755,
            "date": "Tue 28 Nov 2023 17:55",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Probably going with D but still not 100% sure how is it going to work that way... would appreciate if someone could help in understanding this question..<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>SCPs do not support NotAction with effect Allow.</li><li>Ah ok, got it...thnx so much... in this way, probably looks like all other options are invalid except option A since on all others they've used 'NotAction' attribute with Allow directly and indirectly which won't work..</li></ul>",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 1085168,
            "date": "Fri 01 Dec 2023 12:20",
            "username": "\t\t\t\tLeoD\t\t\t",
            "content": "SCPs do not support NotAction with effect Allow.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Ah ok, got it...thnx so much... in this way, probably looks like all other options are invalid except option A since on all others they've used 'NotAction' attribute with Allow directly and indirectly which won't work..</li></ul>",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1087094,
            "date": "Sun 03 Dec 2023 21:28",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Ah ok, got it...thnx so much... in this way, probably looks like all other options are invalid except option A since on all others they've used 'NotAction' attribute with Allow directly and indirectly which won't work..",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 1079971,
            "date": "Sat 25 Nov 2023 12:39",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "A.  OU level will still have access to other services outside of Guardduty and Security Hub due to the OU level policy. D could work but is not necessary",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#115",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company needs to follow security best practices to deploy resources from an AWS CloudFormation template. The CloudFormation template must be able to configure sensitive database credentials.<br><br>The company already uses AWS Key Management Service (AWS KMS) and AWS Secrets Manager.<br><br>Which solution will meet the requirements?</p>",
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
                "choice": "<p>Use a dynamic reference in the CloudFormation template to reference the database credentials in Secrets Manager.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use a parameter in the CloudFormation template to reference the database credentials. Encrypt the CloudFormation template by using AWS KMS.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use a SecureString parameter in the CloudFormation template to reference the database credentials in Secrets Manager.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use a SecureString parameter in the CloudFormation template to reference an encrypted value in AWS KMS.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty SCS-C02 topic 1 question 115 discussion",
        "discusstion": [
          {
            "id": 1095797,
            "date": "Wed 13 Dec 2023 21:29",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Since this is the last question here so maybe I can post it here. I've passed this exam with a score of 926. Only few of the questions were not from this exam material but else, everything came from here. Would like to thanks to all of you who helped in answering my queries and got my concept clarified!... Man_Kind, Agboola and others, you guys simply rock, thanks once again so much! :)<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>@Aamee, do you think there is a question from 1 to 50? I'm only studying from 50 to 115.</li></ul>",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 1106429,
            "date": "Tue 26 Dec 2023 23:52",
            "username": "\t\t\t\tgiancesarini2023\t\t\t",
            "content": "@Aamee, do you think there is a question from 1 to 50? I'm only studying from 50 to 115.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1141773,
            "date": "Tue 06 Feb 2024 06:06",
            "username": "\t\t\t\tnn67\t\t\t",
            "content": "A<br>keyword dynamic reference",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1138449,
            "date": "Fri 02 Feb 2024 11:54",
            "username": "\t\t\t\tPmktechno\t\t\t",
            "content": "Yesterday I took this exam (Feb 1st) single question also wasn't came from this set of questions. Please wait examtopics team should be update soon new set of questions.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1125336,
            "date": "Wed 17 Jan 2024 22:20",
            "username": "\t\t\t\tbrpjp\t\t\t",
            "content": "Hello, I passed exam with 956 score. Thank you all for contributing and correcting the answers.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>when did you take the exam?</li></ul>",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1134177,
            "date": "Sun 28 Jan 2024 15:44",
            "username": "\t\t\t\talexleely\t\t\t",
            "content": "when did you take the exam?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 1082166,
            "date": "Tue 28 Nov 2023 06:14",
            "username": "\t\t\t\tAamee\t\t\t",
            "content": "Yup, for sure it should be A.  Here's the summary:<br><br>\\\"Updating a secret in Secrets Manager doesn't automatically update the secret in CloudFormation. In order for CloudFormation to update a secretsmanager dynamic reference, you must perform a stack update that updates the resource containing the dynamic reference, either by updating the resource property that contains the secretsmanager dynamic reference, or updating another of the resource's properties.\\\"",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1079975,
            "date": "Sat 25 Nov 2023 12:47",
            "username": "\t\t\t\t[Removed]\t\t\t",
            "content": "A.  See below<br><br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html#dynamic-references-secretsmanager",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 1078847,
            "date": "Thu 23 Nov 2023 22:44",
            "username": "\t\t\t\toioi\t\t\t",
            "content": "correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          }
        ]
      }
    ]
  }