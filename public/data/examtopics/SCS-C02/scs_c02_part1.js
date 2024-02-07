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
        "general_feedback": "<p>Correct Answer: BD</p>",
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
                "choice": "<p>Update each stack to use the service role.F Add a policy to each member role to allow the iam:PassRole action. Set the policy's resource field to the ARN of the service role.<br></p>",
                "correct": false,
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
                "choice": "<p>Update the IAM policy attached to the role in the identity account to be:<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Update the trust policy on the role in the target account to be:<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Update the trust policy on the role in the identity account to be:<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Update the IAM policy attached to the role in the target account to be:<br></p>",
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
      }
    ]
  }