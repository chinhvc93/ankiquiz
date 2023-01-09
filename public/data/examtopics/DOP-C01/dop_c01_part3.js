var DOP_C01_Part3 = 
{
    "msg": "Quiz Questions",
    "data": [
      {
        "question_id": "#201",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company's security team discovers that IAM access keys were exposed in a public code repository. Moving forward, the DevOps team wants to implement a solution that will automatically disable any keys that are suspected of being compromised, and notify the security team.<br>Which solution will accomplish this?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#201",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon CloudWatch Events event for Amazon Macie. Create an Amazon SNS topic with two subscriptions: one to notify the security team and another to trigger an AWS Lambda function that disables the access keys.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Enable Amazon GuardDuty and set up an Amazon CloudWatch Events rule event for GuardDuty. Trigger an AWS Lambda function to check if the event relates to compromised keys. If so, send a notification to the security team and disable the access keys.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Run an AWS CloudWatch Events rule every 5 minutes to invoke an AWS Lambda function that checks to see if the compromised tag for any access key is set to true. If so, notify the security team and disable the access keys.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Set up AWS Config and create an AWS CloudTrail event for AWS Config. Create an Amazon SNS topic with two subscriptions: one to notify the security team and another to trigger an AWS Lambda function that disables the access keys.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 201 discussion",
        "discusstion": [
          {
            "id": 350599,
            "date": "Sun 17 Oct 2021 04:53",
            "username": "JohnnieWalkerQuekky",
            "content": "Something must be wrong with this question, none of the answers seems to be right.<br>A: Macie is used for personal information as far as I know.<br>B: I am not sure, but I think guardduty doesn't tell you exposed keys, the AWS Health Dashboard does,<br>C: Event rule and lambda seems right, but there is no such a thing as \\\"the compromised tag for any access key is set to true\\\". I don't think this tag exists.<br>D: AWS Config also doesn't do it.<br>There should be an option for AWS Health and the AWS_RISK_CREDENTIALS_EXPOSED event on cloudwatch.Agreed. Only valid answers are either AWS Health or Trusted Advisor. There is no need to run a schedule",
            "upvote_count": "94",
            "selected_answers": ""
          },
          {
            "id": 368696,
            "date": "Sun 17 Oct 2021 14:08",
            "username": "Quekky",
            "content": "Agreed. Only valid answers are either AWS Health or Trusted Advisor. There is no need to run a schedule",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 325839,
            "date": "Wed 13 Oct 2021 09:27",
            "username": "WhyIronManbobsmith2000",
            "content": "I'll go with C, because C is right,<br><br>AWS proactively monitors popular code repository sites for IAM access keys that have been publicly exposed. Upon detection of an exposed IAM access key, AWS Health generates an AWS_RISK_CREDENTIALS_EXPOSED event in the AWS account related to the exposed key.<br><br>References:<br>https://aws.amazon.com/blogs/compute/automate-your-it-operations-using-aws-step-functions-and-amazon-cloudwatch-events/<br>https://github.com/aws/aws-health-tools/blob/master/automated-actions/AWS_RISK_CREDENTIALS_EXPOSED/README. mdC says \\\"checks to see if the compromised tag for any access key is set to true\\\". The tag is never set in the link you provided: they use event bridge to detect AWS_RISK_CREDENTIALS_EXPOSED.  So you're mistaken.<br><br>GuardDuty in turn was build precisely to detect malicious activities and unauthorized access.<br><br>So it's B.  no-brainer. Don't hung up on that too much, sometimes aws simply wanna sell their services.",
            "upvote_count": "84",
            "selected_answers": ""
          },
          {
            "id": 539812,
            "date": "Thu 03 Feb 2022 17:30",
            "username": "bobsmith2000",
            "content": "C says \\\"checks to see if the compromised tag for any access key is set to true\\\". The tag is never set in the link you provided: they use event bridge to detect AWS_RISK_CREDENTIALS_EXPOSED.  So you're mistaken.<br><br>GuardDuty in turn was build precisely to detect malicious activities and unauthorized access.<br><br>So it's B.  no-brainer. Don't hung up on that too much, sometimes aws simply wanna sell their services.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 630759,
            "date": "Wed 13 Jul 2022 05:36",
            "username": "tefdsfdsvasdf",
            "content": "B is correct.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 630178,
            "date": "Mon 11 Jul 2022 20:59",
            "username": "nebojsaMa",
            "content": "I think the B is the right one because of the following article: https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_remediate.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 617913,
            "date": "Fri 17 Jun 2022 21:08",
            "username": "monkalways",
            "content": "The answer is B. <br><br>Amazon GuardDuty generates findings that indicate potential security issues. In this release of GuardDuty, the potential security issues indicate either a compromised EC2 instance or a set of compromised credentials in your AWS environment.<br><br>https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_remediate.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 433028,
            "date": "Thu 28 Oct 2021 10:26",
            "username": "TonyGe",
            "content": "I go for B. <br>https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_remediate.html#compromised-creds<br>If you confirm that the activity is a legitimate use of the AWS credentials, you can ignore the GuardDuty finding. If not, this activity could be the result of a compromise to that particular access key, the IAM user's user ID and password, or possibly the entire AWS account. If you suspect your credentials have been compromised, review the information in the My AWS account may be compromised article to remediate the issue.",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 387149,
            "date": "Tue 26 Oct 2021 20:13",
            "username": "nsei",
            "content": "I'll go with B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 372710,
            "date": "Tue 19 Oct 2021 19:22",
            "username": "sb333",
            "content": "The answer is actually B.  C is incorrect as there is no such tag that is set on an access key. There are several ways of detecting that there may be a compromised situation. One would be to detect that keys are on public sites (AWS Trusted Advisor shows this), but that does not mean that there was actually a compromised situation. AWS CloudTrail could be used to look at usage of a key that was found on a public website. AWS GuardDuty looks for anomalous behavior in your accounts which includes access key usage. So given the available answers, B is actually the only one that is valid here.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 330184,
            "date": "Thu 14 Oct 2021 11:20",
            "username": "devopp",
            "content": "C<br>Only viable option, defn not Macie since not PII/PCI related.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 322722,
            "date": "Mon 04 Oct 2021 20:38",
            "username": "shady734",
            "content": "IB for me. macie is more for personally identifiable information",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 318157,
            "date": "Wed 29 Sep 2021 01:44",
            "username": "yyy",
            "content": "I will go with B:",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 310287,
            "date": "Fri 24 Sep 2021 02:32",
            "username": "RajarshiWhyIronMankorinohyjustfmm",
            "content": "ans is AAWS IAM Credentials are not classified as personally identifiable information, so macie will not workhttps://docs.aws.amazon.com/macie/latest/userguide/what-is-macie.html<br>Amazon Macie Classic enables you to be proactive with security compliance and achieve preventive security as follows:<br>-Identify and protect various data types, including PII, PHI, regulatory documents, API keys, and secret keys<br>-Verify compliance with automated logs that allow for instant auditing<br>-Identify changes to policies and access control lists<br>-Observe changes in user behavior and receive actionable alerts<br>-Receive notifications when data and account credentials leave protected zones<br>-Detect when large quantities of business-critical documents are shared internally and externallyMacie only works on s3",
            "upvote_count": "2111",
            "selected_answers": ""
          },
          {
            "id": 325823,
            "date": "Sun 10 Oct 2021 05:34",
            "username": "WhyIronMankorinohyjustfmm",
            "content": "AWS IAM Credentials are not classified as personally identifiable information, so macie will not workhttps://docs.aws.amazon.com/macie/latest/userguide/what-is-macie.html<br>Amazon Macie Classic enables you to be proactive with security compliance and achieve preventive security as follows:<br>-Identify and protect various data types, including PII, PHI, regulatory documents, API keys, and secret keys<br>-Verify compliance with automated logs that allow for instant auditing<br>-Identify changes to policies and access control lists<br>-Observe changes in user behavior and receive actionable alerts<br>-Receive notifications when data and account credentials leave protected zones<br>-Detect when large quantities of business-critical documents are shared internally and externallyMacie only works on s3",
            "upvote_count": "111",
            "selected_answers": ""
          },
          {
            "id": 381331,
            "date": "Tue 26 Oct 2021 16:46",
            "username": "korinohyjustfmm",
            "content": "https://docs.aws.amazon.com/macie/latest/userguide/what-is-macie.html<br>Amazon Macie Classic enables you to be proactive with security compliance and achieve preventive security as follows:<br>-Identify and protect various data types, including PII, PHI, regulatory documents, API keys, and secret keys<br>-Verify compliance with automated logs that allow for instant auditing<br>-Identify changes to policies and access control lists<br>-Observe changes in user behavior and receive actionable alerts<br>-Receive notifications when data and account credentials leave protected zones<br>-Detect when large quantities of business-critical documents are shared internally and externallyMacie only works on s3",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 464894,
            "date": "Mon 01 Nov 2021 12:27",
            "username": "justfmm",
            "content": "Macie only works on s3",
            "upvote_count": "1",
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
        "question_text": "<p>A company has mandated a global encryption-at-rest policy. A DevOps engineer has been tasked to ensure that new data uploaded to both new and existing<br>Amazon S3 buckets is encrypted at rest across the company's AWS Organizations organization. There are a number of legacy applications deployed on AWS that use Amazon S3 and do not store data encrypted at rest. These applications MUST continue to operate. The engineer must ensure S3 encryption at rest across the organization without requiring an application code change.<br>How should this be accomplished with MINIMAL effort?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#202",
            "answers": [
              {
                "choice": "<p>A. Develop an AWS Lambda function that lists all Amazon S3 buckets in a given account and applies default encryption to all S3 buckets that either do not have it enabled or to those with an S3 bucket policy that do not explicitly deny put-object requests without server-side encryption. Deploy the Lambda function along with an Amazon EventBridge (Amazon CloudWatch Events) scheduled rule with AWS CloudFormation StackSets to all accounts within the organization.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Enable the AWS Config s3-bucket-server-side-encryption-enabled managed rule that checks for S3 bucket that either do not have S3 default encryption enabled or those with an S3 bucket policy that does not explicitly deny put-object requests without server-side encryption. Add the AWS- EnabledS3BucketEncryption remediation action to the AWS Config rule to enable default encryption on any S3 buckets that are not complaint. Use AWS Config organizations integration to deploy the rule across all accounts in the organization.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Enable an AWS Config custom rule that checks for S3 buckets that do not have a bucket policy denying access to s3:PutObject unless the x-amz-server-side- encryption S3 condition is met with an AES 256 value or x-amz-server-side-encryption is not present. Add a custom remediation action to the AWS Config rule that will apply the bucket policy if the S3 bucket is non-complaint. Use AWS Config organizations integration to deploy the rule across all accounts in the organization.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Write an SCP that denies access to s3:PutObject unless either the x-amz-server-side-encryption S3 condition is met with an AES 256 value or x-amz-server- side-encryption is not present. Apply the SCP to the root of the organization to enforce the policy across the entire organization.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 202 discussion",
        "discusstion": [
          {
            "id": 325871,
            "date": "Sun 17 Oct 2021 08:19",
            "username": "WhyIronMan",
            "content": "I'll go with B,<br><br>A) doesn't make sense<br>C) and D) are wrong because not attend the requirement: \\\"These applications MUST continue to operate.\\\"<br><br>References:<br>https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-server-side-encryption-enabled.html<br>https://docs.aws.amazon.com/config/latest/developerguide/config-rule-multi-account-deployment.html<br>https://docs.aws.amazon.com/organizations/latest/userguide/services-that-can-integrate-config.html",
            "upvote_count": "9",
            "selected_answers": ""
          },
          {
            "id": 539052,
            "date": "Wed 02 Feb 2022 18:53",
            "username": "bobsmith2000",
            "content": "B.  no-brainer:<br>- aws config<br>- default s3 encryption (doesn't break anything)<br>- organization: cross-account",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 516053,
            "date": "Mon 03 Jan 2022 22:11",
            "username": "RightAnswers",
            "content": "Ans B<br>https://aws.amazon.com/blogs/mt/aws-config-auto-remediation-s3-compliance/<br>What is missing in the answers is that AWS-EnableS3BucketEncryption is an \\\"AWS SSM Automation document\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 330194,
            "date": "Mon 01 Nov 2021 21:47",
            "username": "devopp",
            "content": "B<br>Minimal effort compared to A.  Other options break existing apps.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 312383,
            "date": "Sat 25 Sep 2021 15:11",
            "username": "Jordanro",
            "content": "I will go with B",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 310305,
            "date": "Tue 21 Sep 2021 23:55",
            "username": "RajarshiWhyIronMan",
            "content": "ans: DIf you go with D, you'll not attend the requirement: \\\"These applications MUST continue to operate.\\\" and you want to attend this",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 325865,
            "date": "Sat 09 Oct 2021 12:49",
            "username": "WhyIronMan",
            "content": "If you go with D, you'll not attend the requirement: \\\"These applications MUST continue to operate.\\\" and you want to attend this",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#203",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps engineer is assisting with a multi-Region disaster recovery solution for a new application. The application consists of Amazon EC2 instances running in an Auto Scaling group and an Amazon Aurora MySQL DB cluster. The application must be available with an RTO of 120 minutes and an RPO of 60 minutes.<br>What is the MOST cost-effective way to meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#203",
            "answers": [
              {
                "choice": "<p>A. Launch an Aurora DB cluster as an Aurora Replica in a different Region. Create an AWS CloudFormation template for all compute resources and create a stack in two Regions. Write a script that promotes the Aurora Replica to the primary instance in the event of a failure.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Launch an Aurora DB cluster as an Aurora Replica in a different Region and configure automatic cross-Region failover. Create an AWS CloudFormation template that includes an Auto Scaling group, and create a stack in two Regions. Write a script that updates the CloudFormation stack in the disaster recovery Region to increase the number of instances.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use AWS Lambda to create and copy a snapshot of the Aurora DB cluster to the destination Region hourly. Create an AWS CloudFormation template that includes an Auto Scaling group, and create a stack in two Regions. Restore the Aurora DB cluster from a snapshot and update the Auto Scaling group to start launching instances.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure Amazon DynamoDB cross-Region replication. Create an AWS CloudFormation template that includes an Auto Scaling group, and create a stack in two Regions. Write a script that will update the CloudFormation stack in the disaster recovery Region and promote the DynamoDB replica to the primary instance in the event of a failure.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 203 discussion",
        "discusstion": [
          {
            "id": 325878,
            "date": "Sun 10 Oct 2021 08:40",
            "username": "WhyIronManJohnnieWalker",
            "content": "I'll go with C<br>it is the MOST cost-effective way to meet these requirementsThe answers are not really that good, but I think should be C. <br>A: Running same stack for two regions not cost-effective<br>B: I don't think Aurora has\\\"automatic cross-Region failover\\\". This is a manual process: htps://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-failover<br>C: Snapshot is cheaper than replicas and update autoscaling group is good. It meet the requirements for RTO and RPO.<br>D: DynamoDB, nope",
            "upvote_count": "183",
            "selected_answers": ""
          },
          {
            "id": 350609,
            "date": "Sun 17 Oct 2021 05:15",
            "username": "JohnnieWalker",
            "content": "The answers are not really that good, but I think should be C. <br>A: Running same stack for two regions not cost-effective<br>B: I don't think Aurora has\\\"automatic cross-Region failover\\\". This is a manual process: htps://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-failover<br>C: Snapshot is cheaper than replicas and update autoscaling group is good. It meet the requirements for RTO and RPO.<br>D: DynamoDB, nope",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 707816,
            "date": "Sun 30 Oct 2022 14:00",
            "username": "RightAnswers",
            "content": "A - Incorrect - Doesn't mention anything about EC2<br>B - Correct - Addresses both RDS and EC2 in Secondary region. Will also meet RTO and RPO requirements<br>C - Incorrect - Time for copying snapshots is propertional to the distance between regions (transfer rate between us region and non-us regions won't be same), the size of the database and current traffic on AWS backbone. So, a 10 GB DB snapshot may complete under 60 mins, but a 10 TB DB may take much longer.<br>D - Incorrect - Migrating to DynamoDB will not be cost effective.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 639719,
            "date": "Sat 30 Jul 2022 16:50",
            "username": "sudipta007",
            "content": "The actual question I checked in other site is :<br>A DevOps engineer is assisting with a multi-Region disaster recovery solution for a new application. The application consists of Amazon EC2 instances running in an Auto Scaling group and an Amazon Aurora MySQL DB cluster. The application must be available with an RTO of 120 minutes and an RPO of 60 minutes.<br><br>What is the MOST cost-effective way to meet these requirements?<br>I guess A is the answer as snapshot will increase the data transfer charges if we transfer the DB and Application AMI's to DR region .",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 577983,
            "date": "Wed 30 Mar 2022 05:36",
            "username": "ramikhreim",
            "content": "Depending on the AWS Regions involved and the amount of data to be copied, a cross-Region snapshot copy can take hours to complete.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 575182,
            "date": "Fri 25 Mar 2022 17:34",
            "username": "dzenadcu",
            "content": "The most cost-effective answer is C and the response and return time objectives are met.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 544043,
            "date": "Wed 09 Feb 2022 20:25",
            "username": "blueorca",
            "content": "C is the most cost-effective",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 385210,
            "date": "Sat 06 Nov 2021 00:03",
            "username": "RLai",
            "content": "Ans: C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 377950,
            "date": "Wed 27 Oct 2021 18:33",
            "username": "kdpeiris",
            "content": "Go with C<br>https://aws.amazon.com/blogs/database/implementing-a-disaster-recovery-strategy-with-amazon-rds/<br>Feature\tRTO\tRPO\tCost\tScope<br>Automated backups\tGood\tBetter\tLow\tSingle Region<br>Manual snapshots\tBetter\tGood\tMedium\tCross-Region<br>Read replicas\tBest\tBest\tHigh\tCross-Region",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 313175,
            "date": "Sat 25 Sep 2021 05:25",
            "username": "Jordanro",
            "content": "I will go with C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 310309,
            "date": "Thu 23 Sep 2021 02:59",
            "username": "RajarshiJordanroLB",
            "content": "ans: BI'm also not sure about C, but please read answer for question number 10 by link<br>https://d1.awsstatic.com/training-and-certification/docs-devops-pro/AWS-Certified-DevOps-Engineer-Professional_Sample-Questions.pdfC is correct. The above link also suggests C as the correct response.",
            "upvote_count": "311",
            "selected_answers": ""
          },
          {
            "id": 325283,
            "date": "Fri 08 Oct 2021 22:53",
            "username": "JordanroLB",
            "content": "I'm also not sure about C, but please read answer for question number 10 by link<br>https://d1.awsstatic.com/training-and-certification/docs-devops-pro/AWS-Certified-DevOps-Engineer-Professional_Sample-Questions.pdfC is correct. The above link also suggests C as the correct response.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 354965,
            "date": "Sun 24 Oct 2021 02:26",
            "username": "LB",
            "content": "C is correct. The above link also suggests C as the correct response.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#205",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps engineer is troubleshooting deployments to a new application that runs on Amazon EC2 instances behind an Application Load Balancer. The instances run in an EC2 Auto Scaling group across multiple Availability Zones. Instances sometimes come online before they are ready, which is leading to increased error rates among users. The current health check configuration gives instances a 60-second grace period and considers instances healthy after two 200 response codes from /index.php, a page that may respond intermittently during the deployment process. The development team wants instances to come online as soon as possible.<br>Which strategy would address this issue?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#205",
            "answers": [
              {
                "choice": "<p>A. Increase the instance grace period from 60 seconds to 180 seconds, and the consecutive health check requirement from 2 to 3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Increase the instance grace period from 60 second to 120 seconds, and change the response code requirement from 200 to 204.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Modify the deployment script to create a /health-check.php file when the deployment begins, then modify the health check path to point to that file.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Modify the deployment script to create a /health-check.php file when all tasks are complete, then modify the health check path to point to that file.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 205 discussion",
        "discusstion": [
          {
            "id": 401850,
            "date": "Wed 20 Oct 2021 05:39",
            "username": "MBJamesGreatFunana",
            "content": "\\\"The development team wants instances to come online as soon as possible.\\\"<br>It's definitely not A or B as that will increase the time for instances to be considered online.<br><br>The problem is that the index.php page responds intermittently during deployment, so the proper approach is NOT to rely on that page and use a proper health-check page instead (C or D).<br><br>I would go for D to ensure the check is OK when (and as soon as) everything works.This answers my question as to why you can't use C as the php page since health checks can come on intermittently providing a false positive.<br><br>D it is.",
            "upvote_count": "92",
            "selected_answers": ""
          },
          {
            "id": 507675,
            "date": "Thu 23 Dec 2021 09:16",
            "username": "GreatFunana",
            "content": "This answers my question as to why you can't use C as the php page since health checks can come on intermittently providing a false positive.<br><br>D it is.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 310315,
            "date": "Mon 20 Sep 2021 15:14",
            "username": "Rajarshi",
            "content": "ans: D",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 649886,
            "date": "Sun 21 Aug 2022 20:37",
            "username": "hubekpeter",
            "content": "Get instances as quickly as possible is the key here. Even the d solution is not ideal, you can still configure a simple health check which will get an expected response once the deployment is done instead of relying on predefined time and exact number of successful responses.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 417928,
            "date": "Sun 24 Oct 2021 15:24",
            "username": "NNHAN",
            "content": "I choose C. <br>\\\"wants instances to come online as soon as possible.\\\"",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 330217,
            "date": "Mon 04 Oct 2021 20:02",
            "username": "devopp",
            "content": "Hmm while D technically possible, surely A in the real world (lol assuming devops isnt driven by impractical development requirements>?)",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 325986,
            "date": "Fri 01 Oct 2021 04:13",
            "username": "WhyIronMan",
            "content": "I'll go with D<br><br>References:<br>https://aws.amazon.com/builders-library/implementing-health-checks/<br>https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-healthchecks.html",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#207",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A devops team uses AWS CloudFormation to build their infrastructure. The security team is concerned about sensitive parameters, such as passwords, being exposed.<br>Which combination of steps will enhance the security of AWS CloudFormation? (Choose three.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BCF</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#207",
            "answers": [
              {
                "choice": "<p>A. Create a secure string with AWS KMS and choose a KMS encryption key. Reference the ARN of the secure string, and give AWS CloudFormation permission to the KMS key for decryption.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create secrets using the AWS Secrets Manager AWS::SecretsManager::Secret resource type. Reference the secret resource return attributes in resources that need a password, such as an Amazon RDS database.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Store sensitive static data as secure strings in the AWS Systems Manager Parameter Store. Use dynamic references in the resources that need access to the data.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Store sensitive static data in the AWS Systems Manager Parameter Store as strings. Reference the stored value using types of Systems Manager parameters.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use AWS KMS to encrypt the CloudFormation template.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F. Use the CloudFormation NoEcho parameter property to mask the parameter value.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 207 discussion",
        "discusstion": [
          {
            "id": 326010,
            "date": "Wed 13 Oct 2021 06:57",
            "username": "WhyIronMan",
            "content": "I'll go with B, C, F<br><br>A) is not the use case<br>D) insecure, you can still see the sensitive value<br>E) encrypting the template do not prevent the echo and it is not effective",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 616789,
            "date": "Wed 15 Jun 2022 15:49",
            "username": "nqthien041292",
            "content": "Vote BCF",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BCF"
          },
          {
            "id": 604687,
            "date": "Sat 21 May 2022 03:43",
            "username": "GCPWizard",
            "content": "Ans: BCF<br>1. we recommend you use dynamic parameters in the stack template to reference sensitive information that is stored and managed outside of CloudFormation, such as in the AWS Systems Manager Parameter Store or AWS Secrets Manager.<br><br>2. If you set the NoEcho attribute to true, CloudFormation returns the parameter value masked as asterisks (*****)",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 543412,
            "date": "Wed 09 Feb 2022 00:44",
            "username": "blueorca",
            "content": "I think should be BCF",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BCF"
          },
          {
            "id": 508940,
            "date": "Sat 25 Dec 2021 04:05",
            "username": "szl0144",
            "content": "should be BCF",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 449109,
            "date": "Thu 04 Nov 2021 10:29",
            "username": "shammous",
            "content": "B,C,F<br>B: \\\"The AWS Systems Manager Parameter Store provides secure, hierarchical storage for configuration data management.\\\"<br>C: \\\"AWS Secrets Manager helps you to securely encrypt, store, and retrieve credentials for your databases and other services.\\\"<br>F: \\\"We strongly recommend against including NoEcho parameters, or any sensitive data, in resource properties that are part of a resource's primary identifier.<br>When a NoEcho parameter is included in a property that forms a primary resource identifier, CloudFormation may use the actual plaintext value in the primary resource identifier. This resource ID may appear in any derived outputs or destinations.\\\"<br>Ref:<br>- https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/security-best-practices.html#creds<br>- https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/parameters-section-structure.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 385289,
            "date": "Tue 26 Oct 2021 14:20",
            "username": "RLai",
            "content": "ans: B C F",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 377462,
            "date": "Sun 24 Oct 2021 03:38",
            "username": "Dantehilary",
            "content": "ans BCF",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 330222,
            "date": "Tue 19 Oct 2021 11:45",
            "username": "devopp",
            "content": "Yep B,C,F most plausible",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 318340,
            "date": "Mon 04 Oct 2021 08:32",
            "username": "yyyWhyIronMan",
            "content": "ADF - B: doesn't fit because it is about SSMA is impossible and D are completely insecure",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 326007,
            "date": "Tue 12 Oct 2021 21:33",
            "username": "WhyIronMan",
            "content": "A is impossible and D are completely insecure",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 311926,
            "date": "Fri 01 Oct 2021 04:51",
            "username": "rscloud",
            "content": "I=E2=80=99ll go with BCF",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 310317,
            "date": "Tue 21 Sep 2021 14:02",
            "username": "Rajarshi",
            "content": "ans: BCF",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#211",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is migrating its public-facing software to AWS. The company plans to use Amazon EC2 to run application code and Amazon RDS to store all application data. The company wants to primarily use one Region with failover capabilities to a secondary Region and Amazon Route 53 to route traffic. The RPO is 2 hours and the RTO is 4 hours.<br>Which combination of steps should be used to meet these requirements while MINIMIZING cost? (Choose three.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ACE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#211",
            "answers": [
              {
                "choice": "<p>A. Create an AWS CloudFormation template to provision the application server and database instance in a single Region.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an AWS CloudFormation template to provision the application tier of the application and a multi-Region database instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure Amazon CloudWatch Events rules to run every hour. Trigger AWS Lambda functions to create an RDS snapshot and copy it to the secondary Region.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure Amazon CloudWatch Events rules to run every 3 hours. Trigger AWS Lambda functions to create an RDS snapshot and copy it to the secondary Region.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. In the event of a failure, deploy a new AWS CloudFormation stack in a secondary region to provision the application resources and a new RDS instance using the copied snapshot and a Route 53 failover routing policy.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>F. In the event of a failure, deploy a new AWS CloudFormation stack in a secondary region to provision the application resources and a replica of the RDS database using the copied snapshot and a Route 53 latency-based routing policy.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 211 discussion",
        "discusstion": [
          {
            "id": 326609,
            "date": "Thu 21 Oct 2021 23:21",
            "username": "WhyIronMan",
            "content": "I'll go with A, C, E<br><br>B) is Wrong multi-Region database instance does not minimize the costs<br>D) is not correct due to RPO of 2 hours<br>F) replica of the RDS database and a Route 53 latency-based routingare not the use case",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 330236,
            "date": "Fri 22 Oct 2021 15:44",
            "username": "devopp",
            "content": "ACE , Cant be D with RPO of 2 hours (3 > 2)",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 610774,
            "date": "Thu 02 Jun 2022 22:02",
            "username": "GCPWizard",
            "content": "Ans: A, C, E",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 597689,
            "date": "Fri 06 May 2022 12:42",
            "username": "KingGuo",
            "content": "right answner",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: ACE"
          },
          {
            "id": 553853,
            "date": "Tue 22 Feb 2022 18:13",
            "username": "bobsmith2000",
            "content": "ACE<br>no-brainer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: ACE"
          },
          {
            "id": 544902,
            "date": "Thu 10 Feb 2022 23:28",
            "username": "blueorca",
            "content": "ACE for me",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: ACE"
          },
          {
            "id": 509972,
            "date": "Mon 27 Dec 2021 04:14",
            "username": "diasporabro",
            "content": "I think it is A,C,E. ..<br>B won't help to minimize cost, D doesn't meet the required RPO...",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 387780,
            "date": "Wed 27 Oct 2021 20:12",
            "username": "D2",
            "content": "ACE correct as database needs to be single region. In DR region, a new db is being created based on snapshot",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 325578,
            "date": "Mon 11 Oct 2021 22:32",
            "username": "Jordanro",
            "content": "I will go with ACE",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 316525,
            "date": "Sun 03 Oct 2021 13:50",
            "username": "1234567J",
            "content": "ACE is correct",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 311975,
            "date": "Fri 01 Oct 2021 18:16",
            "username": "faltu1985WhyIronMan",
            "content": "BCE ( D is not correct due to RPO of 2 hours)B) is Wrong multi-Region database instance does not minimize the costs",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 326604,
            "date": "Tue 12 Oct 2021 05:23",
            "username": "WhyIronMan",
            "content": "B) is Wrong multi-Region database instance does not minimize the costs",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 311945,
            "date": "Sun 26 Sep 2021 16:42",
            "username": "faltu1985WhyIronMan",
            "content": "BCE ( D is not correct due to RPO of 2 hours)B) is Wrong multi-Region database instance does not minimize the costs",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 326605,
            "date": "Wed 13 Oct 2021 17:13",
            "username": "WhyIronMan",
            "content": "B) is Wrong multi-Region database instance does not minimize the costs",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 311936,
            "date": "Thu 23 Sep 2021 16:23",
            "username": "rscloudWhyIronMan",
            "content": "BCE correctB) is Wrong multi-Region database instance does not minimize the costs",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 326607,
            "date": "Wed 20 Oct 2021 20:51",
            "username": "WhyIronMan",
            "content": "B) is Wrong multi-Region database instance does not minimize the costs",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#214",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is deploying a new application using Amazon EC2 instances. The company wants to maintain a centralized application and Amazon API logs that can be queried using one tool or service.<br>Which solution will meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#214",
            "answers": [
              {
                "choice": "<p>A. Use the Amazon CloudWatch agent to send logs from the Amazon EC2 instances to CloudWatch. Configure AWS CloudTrail to deliver the API logs to CloudWatch and use Amazon Athena to query both log sets in CloudWatch.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use the Amazon CloudWatch agent to send logs from the Amazon EC2 instances to CloudWatch. Configure an Amazon Kinesis Data Firehouse log group subscription to send those logs to Amazon S3. Use AWS CloudTrail to deliver the API logs to Amazon S3. Use Amazon Athena to query both log sets in Amazon S3.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use the Amazon CloudWatch agent to send logs from the Amazon EC2 instances to Amazon Kinesis. Configure AWS CloudTrail to deliver the API logs to Kinesis. Use Amazon to load the datainto Amazon Redshift and use Amazon Redshift to query both log sets.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use the Amazon CloudWatch agent to send logs from the Amazon EC2 instances to Amazon S3. Use Amazon CloudTrail to deliver the API logs to Amazon S3 and use Amazon Redshift to query both log sets in Amazon S3.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 214 discussion",
        "discusstion": [
          {
            "id": 326634,
            "date": "Fri 24 Sep 2021 17:29",
            "username": "WhyIronManshammousmav3r1ckRightAnswers",
            "content": "I'll go with A)<br><br>Amazon Athen can query CloudWatch logs and its possible to send CloudTrail to CloudwatchHow Athena would work with CloudWatch? Option B mentions Athena to query S3 which is the right combination.Will this not work?<br><br>https://docs.aws.amazon.com/athena/latest/ug/athena-prebuilt-data-connectors-cwlogs.htmlAthena connector will work - but the question states that \\\"logs that can be queried using **one** tool or service\\\".Athena connector will be an additional element in a tool or service.",
            "upvote_count": "18211",
            "selected_answers": ""
          },
          {
            "id": 449886,
            "date": "Sat 06 Nov 2021 18:15",
            "username": "shammousmav3r1ckRightAnswers",
            "content": "How Athena would work with CloudWatch? Option B mentions Athena to query S3 which is the right combination.Will this not work?<br><br>https://docs.aws.amazon.com/athena/latest/ug/athena-prebuilt-data-connectors-cwlogs.htmlAthena connector will work - but the question states that \\\"logs that can be queried using **one** tool or service\\\".Athena connector will be an additional element in a tool or service.",
            "upvote_count": "211",
            "selected_answers": ""
          },
          {
            "id": 601309,
            "date": "Fri 13 May 2022 20:10",
            "username": "mav3r1ckRightAnswers",
            "content": "Will this not work?<br><br>https://docs.aws.amazon.com/athena/latest/ug/athena-prebuilt-data-connectors-cwlogs.htmlAthena connector will work - but the question states that \\\"logs that can be queried using **one** tool or service\\\".Athena connector will be an additional element in a tool or service.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 708026,
            "date": "Sun 30 Oct 2022 21:23",
            "username": "RightAnswers",
            "content": "Athena connector will work - but the question states that \\\"logs that can be queried using **one** tool or service\\\".Athena connector will be an additional element in a tool or service.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 312835,
            "date": "Tue 21 Sep 2021 23:43",
            "username": "rscloudbenLLPlgurathikumargr3y_matter",
            "content": "Will go with BI will go with A, use Firehouse to send cloudwatch log to s3 seems unnecessaryI dont think you can query CW logs with Athena. Only S3https://docs.aws.amazon.com/athena/latest/ug/athena-prebuilt-data-connectors-cwlogs.htmlCost should also be a Critical factor in this question to easily differentiate between 'A' & 'B'.<br>A(cwLogs) costlier than B(s3).<br>and using Firehose is not a unnecessary step, that is only way to send data to S3 to be queried by Athena.",
            "upvote_count": "154241",
            "selected_answers": ""
          },
          {
            "id": 323023,
            "date": "Fri 24 Sep 2021 07:39",
            "username": "benLLPlgurathikumar",
            "content": "I will go with A, use Firehouse to send cloudwatch log to s3 seems unnecessaryI dont think you can query CW logs with Athena. Only S3https://docs.aws.amazon.com/athena/latest/ug/athena-prebuilt-data-connectors-cwlogs.html",
            "upvote_count": "424",
            "selected_answers": ""
          },
          {
            "id": 353452,
            "date": "Tue 12 Oct 2021 04:11",
            "username": "lgurathikumar",
            "content": "I dont think you can query CW logs with Athena. Only S3https://docs.aws.amazon.com/athena/latest/ug/athena-prebuilt-data-connectors-cwlogs.html",
            "upvote_count": "24",
            "selected_answers": ""
          },
          {
            "id": 370053,
            "date": "Sun 17 Oct 2021 10:43",
            "username": "rathikumar",
            "content": "https://docs.aws.amazon.com/athena/latest/ug/athena-prebuilt-data-connectors-cwlogs.html",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 619149,
            "date": "Mon 20 Jun 2022 10:58",
            "username": "gr3y_matter",
            "content": "Cost should also be a Critical factor in this question to easily differentiate between 'A' & 'B'.<br>A(cwLogs) costlier than B(s3).<br>and using Firehose is not a unnecessary step, that is only way to send data to S3 to be queried by Athena.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 653077,
            "date": "Sun 28 Aug 2022 20:11",
            "username": "vagobago",
            "content": "B is the right answer. A speaks about delivering log to CloudWatch and exploring logs via Amazon Athena. But Athena works on base of S3 dta.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 646057,
            "date": "Sat 13 Aug 2022 01:48",
            "username": "jexam211",
            "content": "Currently one solution (proposed by amazon) is B<br><br>https://docs.aws.amazon.com/solutions/latest/centralized-logging/overview.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 632699,
            "date": "Sun 17 Jul 2022 22:10",
            "username": "toma",
            "content": "B is the right answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 631589,
            "date": "Fri 15 Jul 2022 04:15",
            "username": "Sant25",
            "content": "A is correct<br>https://docs.aws.amazon.com/athena/latest/ug/athena-prebuilt-data-connectors-cwlogs.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 619152,
            "date": "Mon 20 Jun 2022 11:00",
            "username": "gr3y_matter",
            "content": "B - Athena is the service that can be used on CW and S3 both, but additionallyAthena.Connector is required to query CW-logs",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 596492,
            "date": "Wed 04 May 2022 05:57",
            "username": "TarTee",
            "content": "I think the correct answer is D. <br>Amazon Redshift Spectrum is able to query data from S3<br>https://docs.aws.amazon.com/redshift/latest/dg/c-using-spectrum.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 595709,
            "date": "Sun 01 May 2022 21:11",
            "username": "cooldeity",
            "content": "I'll go with B since A doesn't mention cw connnector",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 593511,
            "date": "Thu 28 Apr 2022 05:59",
            "username": "axel2200",
            "content": "https://docs.aws.amazon.com/athena/latest/ug/athena-prebuilt-data-connectors-cwlogs.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 583211,
            "date": "Sat 09 Apr 2022 10:29",
            "username": "friendofpenguin",
            "content": "it's the only valid answer considering Athena is built for querying S3 data",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 581276,
            "date": "Tue 05 Apr 2022 15:24",
            "username": "jj22222",
            "content": "A.  Use the Amazon CloudWatch agent to send logs from the Amazon EC2 instances to CloudWatch. Configure AWS CloudTrail to deliver the API logs to CloudWatch and use Amazon Athena to query both log sets in CloudWatch.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 572938,
            "date": "Tue 22 Mar 2022 13:59",
            "username": "dzenadcu",
            "content": "The only possible answer is B!<br><br>Cloudwatch Agent sends logs only to CloudWatch. Something else must export those logs to S3. The export can be manually configured in CloudWatch Log Groups -> Export -> S3 Bucket. Or via Kinesis Data Firehose. Querying the data is been done with Athena.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 433453,
            "date": "Wed 03 Nov 2021 19:49",
            "username": "TonyGe",
            "content": "B for sure. when talking about centralized logs solution, always think of S3.<br>A/C ruled out.<br>D is incorrect, it is saying query log in S3 by Redshift....",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 401879,
            "date": "Mon 25 Oct 2021 04:12",
            "username": "MBJamesMBJames",
            "content": "Before Nov 2019 the answer would have been B. <br>I suspect this question is older than that.<br>After Nov 2019 the answer can be A, because of https://aws.amazon.com/blogs/big-data/query-any-data-source-with-amazon-athenas-new-federated-query/I will also add that I think B might still be the cheaper solution. Having all of the cloudtrail logs in cloudwatch logs sure sounds expensive, especially for a busy account.",
            "upvote_count": "41",
            "selected_answers": ""
          },
          {
            "id": 401880,
            "date": "Sat 30 Oct 2021 05:17",
            "username": "MBJames",
            "content": "I will also add that I think B might still be the cheaper solution. Having all of the cloudtrail logs in cloudwatch logs sure sounds expensive, especially for a busy account.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 385451,
            "date": "Thu 21 Oct 2021 14:56",
            "username": "RLai",
            "content": "Ans: B",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 374640,
            "date": "Tue 19 Oct 2021 00:11",
            "username": "sb333",
            "content": "The answer is B.  The proposed solutions in this answer are 100% valid. And Athena is built for querying S3. Yes, there is a solution on Github to build an Athena connector for CloudWatch logs, but you are building something that is not inherently available in AWS.",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#215",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company requires that its internally facing web application be highly available. The architecture is made up of one Amazon EC2 web server instance and one<br>NAT instance that provides outbound internet access for updates and accessing public data.<br>Which combination of architecture adjustments should the company implement to achieve high availability? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#215",
            "answers": [
              {
                "choice": "<p>A. Add the NAT instance to an EC2 Auto Scaling group that spans multiple Availability Zones. Update the route tables.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create additional EC2 instances spanning multiple Availability Zones. Add an Application Load Balancer to split the load between them.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure an Application Load Balancer in front of the EC2 instance. Configure Amazon CloudWatch alarms to recover the EC2 instance upon host failure.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Replace the NAT instance with a NAT gateway in each Availability Zone. Update the route tables.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Replace the NAT instances with a NAT gateway that spans multiple Availability Zones. Update the route tables.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 215 discussion",
        "discusstion": [
          {
            "id": 326642,
            "date": "Mon 18 Oct 2021 04:56",
            "username": "WhyIronManrathikumar",
            "content": "I will go with B, Dhttps://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html",
            "upvote_count": "82",
            "selected_answers": ""
          },
          {
            "id": 370070,
            "date": "Tue 26 Oct 2021 22:04",
            "username": "rathikumar",
            "content": "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 645978,
            "date": "Fri 12 Aug 2022 19:05",
            "username": "jexam211",
            "content": "Why not using auto scaling group ? A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 314459,
            "date": "Thu 14 Oct 2021 09:20",
            "username": "faltu1985",
            "content": "Ans: BD",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 314088,
            "date": "Sat 02 Oct 2021 01:32",
            "username": "Jordanro",
            "content": "I will go with B,D",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#216",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is required to collect user consent to a privacy agreement. An application is deployed in six AWS Regions with two in North America, two in Europe, and two in Asia with a user base of 20-30 million users. The company needs to read and write data related to each user's response, and ensure the responses are available in all six Regions.<br>What solution will satisfy these requirements while MINIMIZING latency?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#216",
            "answers": [
              {
                "choice": "<p>A. Implement Amazon Aurora Global Database in each of the six Regions.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Implement Amazon DocumentDB (with MongoDB compatibility) in each of the six Regions.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Implement Amazon DynamoDB global tables in each of the six Regions.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Implement Amazon ElastiCache for Redis replication group in each of the six Regions.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 216 discussion",
        "discusstion": [
          {
            "id": 326647,
            "date": "Mon 18 Oct 2021 22:34",
            "username": "WhyIronMan",
            "content": "I'll go with C<br><br>Reference: https://aws.amazon.com/blogs/database/how-to-use-amazon-dynamodb-global-tables-to-power-multiregion-architectures/",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 581278,
            "date": "Tue 05 Apr 2022 15:29",
            "username": "jj22222",
            "content": "C.  Implement Amazon DynamoDB global tables in each of the six Regions.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 330278,
            "date": "Wed 27 Oct 2021 15:21",
            "username": "devopp",
            "content": "C for Serverless DDB<br>(though Aurora would work as well)",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 314091,
            "date": "Thu 07 Oct 2021 17:04",
            "username": "Jordanro",
            "content": "I will go with C",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#217",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company updated the AWS CloudFormation template for a critical business application. The stack update process failed due to an error in the updated template, and CloudFormation automatically began the stack rollback process. Later, a DevOps engineer found the application was still unavailable, and that the stack was in the UPDATE_ROLLBACK_FAILED state.<br>Which combination of actions will allow the stack rollback to complete successfully? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: CD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#217",
            "answers": [
              {
                "choice": "<p>A. Attach the AWSCloudFormationFullAccess IAM policy to the AWS CloudFormation role.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Automatically heal the stack resources using AWS CloudFormation drift detection.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Issue a ContinueUpdateRollback command from the AWS CloudFormation console or AWS CLI.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Manually adjust the resources to match the expectations of the stack.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Update the existing AWS CloudFormation stack using the original template.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 217 discussion",
        "discusstion": [
          {
            "id": 326652,
            "date": "Tue 26 Oct 2021 05:50",
            "username": "WhyIronMan",
            "content": "I'll go with C, D<br><br>References:<br>https://aws.amazon.com/premiumsupport/knowledge-center/cloudformation-update-rollback-failed/<br>https://docs.amazonaws.cn/en_us/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors",
            "upvote_count": "10",
            "selected_answers": ""
          },
          {
            "id": 379813,
            "date": "Thu 28 Oct 2021 02:59",
            "username": "kdpeiris",
            "content": "I'll go with C, D<br>https://docs.aws.amazon.com/cli/latest/reference/cloudformation/continue-update-rollback.html<br>For a specified stack that is in the UPDATE_ROLLBACK_FAILED state, continues rolling it back to the UPDATE_ROLLBACK_COMPLETE state. Depending on the cause of the failure, you can manually fix the error and continue the rollback. By continuing the rollback, you can return your stack to a working state (the UPDATE_ROLLBACK_COMPLETE state), and then try to update the stack again.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 312839,
            "date": "Tue 21 Sep 2021 22:16",
            "username": "rscloud",
            "content": "Answer is CD",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#218",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has multiple child accounts that are part of an organization in AWS Organizations. The security team needs to review every Amazon EC2 security group and their inbound and outbound rules. The security team wants to programmatically retrieve this information from the child accounts using an AWS Lambda function in the master account of the organization.<br>Which combination of access changes will meet these requirements? (Choose three.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BCE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#218",
            "answers": [
              {
                "choice": "<p>A. Create a trust relationship that allows users in the child accounts to assume the master account IAM role.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a trust relationship that allows users in the master account to assume the IAM roles of the child accounts.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an IAM role in each child account that has access to the AmazonEC2ReadOnlyAccess managed policy.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an IAM role in each child account to allow the sts:AssumeRole action against the master account IAM role's ARN.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Create an IAM role in the master account that allows the sts:AssumeRole action against the child account IAM role's ARN.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>F. Create an IAM role in the master account that has access to the AmazonEC2ReadOnlyAccess managed policy.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 218 discussion",
        "discusstion": [
          {
            "id": 319077,
            "date": "Tue 12 Oct 2021 10:38",
            "username": "WhyIronManWhyIronMan",
            "content": "Jordanro is right.<br>B, C, E is the right answer The resources are in the Linked accounts (child accounts) so they need to have the roles and the trust relationshipReferences:https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html<br>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html",
            "upvote_count": "171",
            "selected_answers": ""
          },
          {
            "id": 326669,
            "date": "Sat 16 Oct 2021 06:21",
            "username": "WhyIronMan",
            "content": "References:https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html<br>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 314276,
            "date": "Fri 08 Oct 2021 02:27",
            "username": "Jordanro",
            "content": "I will go with B,C,E<br>https://aws.amazon.com/premiumsupport/knowledge-center/lambda-function-assume-iam-role/<br>https://kreuzwerker.de/post/aws-multi-account-setups-reloaded",
            "upvote_count": "10",
            "selected_answers": ""
          },
          {
            "id": 672896,
            "date": "Mon 19 Sep 2022 05:55",
            "username": "colinquek",
            "content": "for sure",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BCE"
          },
          {
            "id": 589691,
            "date": "Fri 22 Apr 2022 04:49",
            "username": "[Removed]",
            "content": "Why does examtopics often have the opposite answers. Can someone at examtopics review the questions and make a best effort to have at least most questions correct. It's frustrating when a huge percentage of answers are completely wrong.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BCE"
          },
          {
            "id": 563338,
            "date": "Tue 08 Mar 2022 16:10",
            "username": "dzenadcu",
            "content": "B,C,E must be right",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BCE"
          },
          {
            "id": 442540,
            "date": "Thu 04 Nov 2021 00:53",
            "username": "alexfg93",
            "content": "BCE is right",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 433457,
            "date": "Tue 02 Nov 2021 10:15",
            "username": "TonyGe",
            "content": "step1: C creates the role with correct permission in child.<br>step2: E allows AssumeRole action in master.<br>step3: B allows master to assume the role created in step1.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 330297,
            "date": "Sat 30 Oct 2021 01:37",
            "username": "devopp",
            "content": "Has to be B, C, E<br>This is complete opposite of Revealed Solution ?",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 313182,
            "date": "Mon 27 Sep 2021 20:10",
            "username": "faltu1985",
            "content": "Ans: BCD",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 312845,
            "date": "Mon 20 Sep 2021 17:03",
            "username": "rscloudishitat",
            "content": "Why not ACDbecause they doesn't follow the correct order",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 620855,
            "date": "Thu 23 Jun 2022 10:41",
            "username": "ishitat",
            "content": "because they doesn't follow the correct order",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#220",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is building an application that must allow users to upload images to an Amazon S3 bucket. Users need to be able to sign in to the application using<br>Facebook to upload images.<br>How can these requirements be met?<br></p>",
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
                "choice": "<p>A. Store a user's Facebook user name and password in an Amazon DymanoDB table. Authenticate against those credentials the next time the user tries to log in.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an Amazon Cognito identity pool using Facebook as the identity provider. Obtain temporary AWS credentials so a user can access Amazon S3.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create multiple AWS IAM users. Set the email and password to be the same as each user's Facebook login credentials.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a new Facebook account and store its login credentials in an S3 bucket. Share that S3 bucket with a user. The user will log in to the application using those retrieved credentials.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 220 discussion",
        "discusstion": [
          {
            "id": 326684,
            "date": "Thu 21 Oct 2021 01:08",
            "username": "WhyIronMan",
            "content": "I'll go with B",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 313194,
            "date": "Tue 28 Sep 2021 11:51",
            "username": "faltu1985",
            "content": "Ans: B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 312848,
            "date": "Mon 27 Sep 2021 10:17",
            "username": "rscloud",
            "content": "Will go with B",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#221",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An application running on multiple Amazon EC2 instances pulls messages from a standard Amazon SQS queue. A requirement for the application is that all messages must be encrypted at rest.<br>Developers are instructed to use methods that allow for centralized key management and minimize possible support requirements whenever possible.<br>Which of the following solutions supports these requirements?<br></p>",
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
                "choice": "<p>A. Encrypt individual messages by using client-side encryption with customer managed keys, then write to the SQS queue.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Encrypt individual messages by using SQS Extended Client and the Amazon S3 encryption client.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an SQS queue, and encrypt the queue by using server-side encryption with AWS KMS.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an SQS queue, and encrypt the queue by using client-side encryption.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 221 discussion",
        "discusstion": [
          {
            "id": 314636,
            "date": "Thu 23 Sep 2021 22:36",
            "username": "Jordanro",
            "content": "I will go with C",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 387922,
            "date": "Sun 31 Oct 2021 05:49",
            "username": "D2",
            "content": "Answer C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 362890,
            "date": "Mon 18 Oct 2021 04:19",
            "username": "Wrd123456789",
            "content": "C: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 326689,
            "date": "Wed 06 Oct 2021 11:30",
            "username": "WhyIronMan",
            "content": "I'll go with C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 319074,
            "date": "Mon 27 Sep 2021 21:37",
            "username": "WhyIronMan",
            "content": "C) is the right answer",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#222",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer tested an application locally and then deployed it to AWS Lambda. While testing the application remotely, the Lambda function fails with an access denied message.<br>How can this issue be addressed?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#222",
            "answers": [
              {
                "choice": "<p>A. Update the Lambda function's execution role to include the missing permissions.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Update the Lambda function's resource policy to include the missing permissions.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Include an IAM policy document at the root of the deployment package and redeploy the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Redeploy the Lambda function using an account with access to the AdministratorAccess policy.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 222 discussion",
        "discusstion": [
          {
            "id": 326691,
            "date": "Thu 28 Oct 2021 16:55",
            "username": "WhyIronMan",
            "content": "I'll go with A",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 708039,
            "date": "Sun 30 Oct 2022 21:52",
            "username": "RightAnswers",
            "content": "Ans A<br>While testing the application, the lambda function fails with an access denied error.<br>Similar to the use case mentioned in the ref https://aws.amazon.com/premiumsupport/knowledge-center/access-denied-lambda-s3-bucket/, the lambda function execution role is missing the required IAM permissions.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 649697,
            "date": "Sun 21 Aug 2022 11:32",
            "username": "hubekpeter",
            "content": "This is a very vague question. But I=E2=80=99m assuming that the rbac policy is missing so the user is not able to execute the function itself remotely instead of the lambda have an access deny to other services, so the answer will be A in this case.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 616923,
            "date": "Wed 15 Jun 2022 21:22",
            "username": "monkalwaysangelsrp",
            "content": "The answer is B.  Resource-based policies let you grant usage permission to other AWS accounts or organizations on a per-resource basis.<br><br>https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.htmlwrong, statement says that \\\"While testing remotely\\\" so the user has access to the lambda but looks like lambda is missing permissions for some aws services",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 628895,
            "date": "Fri 08 Jul 2022 22:36",
            "username": "angelsrp",
            "content": "wrong, statement says that \\\"While testing remotely\\\" so the user has access to the lambda but looks like lambda is missing permissions for some aws services",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 323203,
            "date": "Sun 24 Oct 2021 22:45",
            "username": "Jordanro",
            "content": "I will go with A",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#223",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>The development team is creating a social media game which ranks users on a scoreboard. The current implementation uses an Amazon RDS for MySQL database for storing user data; however, the game cannot display scores quickly enough during performance testing.<br>Which service would provide the fastest retrieval times?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#223",
            "answers": [
              {
                "choice": "<p>A. Migrate user data to Amazon DynamoDB for managing content.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use AWS Batch to compute and deliver user and score content.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Deploy Amazon CloudFront for user and score content delivery.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Set up Amazon ElastiCache to deliver user and score content.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 223 discussion",
        "discusstion": [
          {
            "id": 637421,
            "date": "Tue 26 Jul 2022 14:59",
            "username": "cloud_breaker",
            "content": "I think it is D, but calculating scores..may be A?",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 597314,
            "date": "Thu 05 May 2022 14:57",
            "username": "KingGuo",
            "content": "DDB is the right ans.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 504123,
            "date": "Sat 18 Dec 2021 10:07",
            "username": "GreatFunanaGreatFunana[Removed][Removed]bobsmith2000",
            "content": "Sneaky question, on the surface, this looks like what elasticache was made for. However, DynamoDB was designed for updating tables and having huge stores of data that need to be retrieved quickly using complex DBs, especially when sorting with sub ms ranged response time.<br><br>Considering that this data is subject to constant change especially since you have to rank it, you could end up with tons of stale data in elasticache.<br><br>The best bet is A: DynamoDBRe-Read the question:<br><br>\\\"Which service has the quickest retrieval times?\\\"<br><br>Everything that came before this is just fluff and has nothing to do with the actual question.<br><br>Answer is indeed D. The relevant part of the problem is: \\\"however, the game cannot display scores quickly enough during performance testing.\\\" Caching requests will not help with this at all because scores are unique and changing. A is the only correct answer. DynamodDB is designed for fast retrieval of streaming data.Actually my bad after doing more research about AWS Elasticache which supports Redis I now agree that D is the correct answer: https://aws.amazon.com/blogs/database/building-a-real-time-gaming-leaderboard-with-amazon-elasticache-for-redis/It seems to me that the question itself has nothing to do with all the context above it.<br>Is would go with DDB, if it was about \\\"change data plan\\\". But it's not mentioned.<br>Are we talking about greatest retrieval time in general or you take into account constraints on the context.<br>If we still use RDS, then it's definitely D (ElastiCashe).<br>If it's about devising new approach, then it's A (DDB).<br><br>To ambiguous to me.",
            "upvote_count": "43221",
            "selected_answers": ""
          },
          {
            "id": 504668,
            "date": "Sun 19 Dec 2021 07:42",
            "username": "GreatFunana[Removed][Removed]bobsmith2000",
            "content": "Re-Read the question:<br><br>\\\"Which service has the quickest retrieval times?\\\"<br><br>Everything that came before this is just fluff and has nothing to do with the actual question.<br><br>Answer is indeed D. The relevant part of the problem is: \\\"however, the game cannot display scores quickly enough during performance testing.\\\" Caching requests will not help with this at all because scores are unique and changing. A is the only correct answer. DynamodDB is designed for fast retrieval of streaming data.Actually my bad after doing more research about AWS Elasticache which supports Redis I now agree that D is the correct answer: https://aws.amazon.com/blogs/database/building-a-real-time-gaming-leaderboard-with-amazon-elasticache-for-redis/It seems to me that the question itself has nothing to do with all the context above it.<br>Is would go with DDB, if it was about \\\"change data plan\\\". But it's not mentioned.<br>Are we talking about greatest retrieval time in general or you take into account constraints on the context.<br>If we still use RDS, then it's definitely D (ElastiCashe).<br>If it's about devising new approach, then it's A (DDB).<br><br>To ambiguous to me.",
            "upvote_count": "3221",
            "selected_answers": ""
          },
          {
            "id": 589702,
            "date": "Fri 22 Apr 2022 05:07",
            "username": "[Removed][Removed]",
            "content": "The relevant part of the problem is: \\\"however, the game cannot display scores quickly enough during performance testing.\\\" Caching requests will not help with this at all because scores are unique and changing. A is the only correct answer. DynamodDB is designed for fast retrieval of streaming data.Actually my bad after doing more research about AWS Elasticache which supports Redis I now agree that D is the correct answer: https://aws.amazon.com/blogs/database/building-a-real-time-gaming-leaderboard-with-amazon-elasticache-for-redis/",
            "upvote_count": "22",
            "selected_answers": ""
          },
          {
            "id": 589705,
            "date": "Fri 22 Apr 2022 05:11",
            "username": "[Removed]",
            "content": "Actually my bad after doing more research about AWS Elasticache which supports Redis I now agree that D is the correct answer: https://aws.amazon.com/blogs/database/building-a-real-time-gaming-leaderboard-with-amazon-elasticache-for-redis/",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 553588,
            "date": "Tue 22 Feb 2022 11:28",
            "username": "bobsmith2000",
            "content": "It seems to me that the question itself has nothing to do with all the context above it.<br>Is would go with DDB, if it was about \\\"change data plan\\\". But it's not mentioned.<br>Are we talking about greatest retrieval time in general or you take into account constraints on the context.<br>If we still use RDS, then it's definitely D (ElastiCashe).<br>If it's about devising new approach, then it's A (DDB).<br><br>To ambiguous to me.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 449912,
            "date": "Sat 06 Nov 2021 21:58",
            "username": "shammous",
            "content": "D for faster retrieval: https://aws.amazon.com/blogs/database/building-a-real-time-gaming-leaderboard-with-amazon-elasticache-for-redis/",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 399153,
            "date": "Sun 31 Oct 2021 03:00",
            "username": "NNHAN",
            "content": "Rank means sorting? real time data?<br>It is good for elasticache?<br>Ambiguous question!",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 319075,
            "date": "Sat 30 Oct 2021 09:29",
            "username": "WhyIronMan",
            "content": "D) is right",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 316651,
            "date": "Sun 10 Oct 2021 07:11",
            "username": "1234567J",
            "content": "ans: D",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#224",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer has written an application that writes data to Amazon DynamoDB.  The DynamoDB table has been configured to use conditional writes. During peak usage times, writes are failing due to a ConditionalCheckFailedException error.<br>How can the developer increase the application's reliability when multiple clients are attempting to write to the same record?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#224",
            "answers": [
              {
                "choice": "<p>A. Write the data to an Amazon SNS topic.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Increase the amount of write capacity for the table to anticipate short-term spikes or bursts in write operations.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Implement a caching solution, such as DynamoDB Accelerator or Amazon ElastiCache.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Implement error retries and exponential backoff with jitter.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 224 discussion",
        "discusstion": [
          {
            "id": 326696,
            "date": "Fri 01 Oct 2021 09:20",
            "username": "WhyIronMan",
            "content": "I'll go with D",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 708045,
            "date": "Sun 30 Oct 2022 22:00",
            "username": "RightAnswers",
            "content": "None of the answers are correct. As per AWS doc: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html,<br>You specified a condition that evaluated to false. For example, you might have tried to perform a conditional update on an item, but the actual value of the attribute did not match the expected value in the condition.<br>OK to retry? No<br>Which Cleary states that it is NOT OK to retry. If OK to retry? is No, you need to fix the problem on the client side before you submit a new request.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 690193,
            "date": "Sun 09 Oct 2022 15:04",
            "username": "GenePoole",
            "content": "B.  More capacity will mean that write happen faster and there is less likelyhood of a conditional write failure.D.  If a conditional write fails then retrying it isn't going to help as it will fail again.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 367625,
            "date": "Sat 02 Oct 2021 12:50",
            "username": "Elie777PatrickLiStelSenjustfmm",
            "content": "How can exponential back off help with this error ConditionalCheckFailedException ?It can't that's why I would choose BThe issue is \\\"when multiple clients are attempting to write to the same record\\\". Increasing write units won't help. D is correct. Keep trying after sometimes with some intervalConditionalCheckFailedException<br>Message: The conditional request failed.<br><br>You specified a condition that evaluated to false. For example, you might have tried to perform a conditional update on an item, but the actual value of the attribute did not match the expected value in the condition.<br><br>OK to retry? No<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html",
            "upvote_count": "1121",
            "selected_answers": ""
          },
          {
            "id": 427985,
            "date": "Wed 20 Oct 2021 16:45",
            "username": "PatrickLiStelSenjustfmm",
            "content": "It can't that's why I would choose BThe issue is \\\"when multiple clients are attempting to write to the same record\\\". Increasing write units won't help. D is correct. Keep trying after sometimes with some intervalConditionalCheckFailedException<br>Message: The conditional request failed.<br><br>You specified a condition that evaluated to false. For example, you might have tried to perform a conditional update on an item, but the actual value of the attribute did not match the expected value in the condition.<br><br>OK to retry? No<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html",
            "upvote_count": "121",
            "selected_answers": ""
          },
          {
            "id": 430396,
            "date": "Thu 28 Oct 2021 15:10",
            "username": "StelSenjustfmm",
            "content": "The issue is \\\"when multiple clients are attempting to write to the same record\\\". Increasing write units won't help. D is correct. Keep trying after sometimes with some intervalConditionalCheckFailedException<br>Message: The conditional request failed.<br><br>You specified a condition that evaluated to false. For example, you might have tried to perform a conditional update on an item, but the actual value of the attribute did not match the expected value in the condition.<br><br>OK to retry? No<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 465078,
            "date": "Sun 07 Nov 2021 14:28",
            "username": "justfmm",
            "content": "ConditionalCheckFailedException<br>Message: The conditional request failed.<br><br>You specified a condition that evaluated to false. For example, you might have tried to perform a conditional update on an item, but the actual value of the attribute did not match the expected value in the condition.<br><br>OK to retry? No<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 323207,
            "date": "Wed 29 Sep 2021 00:47",
            "username": "Jordanro",
            "content": "I will go with D",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#225",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company uses federated access for its AWS environment. The available roles are created and managed using AWS CloudFormation from CI/CD pipeline. All changes should be made to the IAM roles through the pipeline. The security team found that changes are being made to the roles out-of-band and would like to detect when this occurs.<br>Which action will accomplish this?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#225",
            "answers": [
              {
                "choice": "<p>A. Use Amazon Inspector rules to detect and notify when a CloudFormation stack has a configuration change.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use an AWS Trusted Advisor CloudWatch Events rule to detect and notify when a CloudFormation stack has a configuration change.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use AWS CloudTrail to detect and notify when a CloudFormation stack has detected a configuration change.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use an AWS Config rule to detect and notify when a CloudFormation stack has detected a configuration change.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 225 discussion",
        "discusstion": [
          {
            "id": 314815,
            "date": "Tue 12 Oct 2021 12:36",
            "username": "WhyIronMan",
            "content": "D) AWS Config<br>The answer shows C but the reference is for D",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 636776,
            "date": "Mon 25 Jul 2022 16:59",
            "username": "sudipta007",
            "content": "D Config<br>https://asecure.cloud/a/cfgrule_cloudformation-stack-drift-detection-check/#:~:textA%20config%20rule%20that%20checks,differ%20from%20their%20expected%20configuration.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 620849,
            "date": "Thu 23 Jun 2022 10:27",
            "username": "ishitat",
            "content": "Ans is D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 612210,
            "date": "Mon 06 Jun 2022 08:26",
            "username": "nqthien041292",
            "content": "Vote D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 508612,
            "date": "Fri 24 Dec 2021 17:52",
            "username": "sg0206",
            "content": "D is the answer to detect any compliance or configuration changes we use AWS Config rule",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 505653,
            "date": "Mon 20 Dec 2021 20:38",
            "username": "RightAnswers",
            "content": "Typo in answer. The explanation weblink points to AWS config, which is Ans D. ",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 324892,
            "date": "Sat 06 Nov 2021 16:58",
            "username": "envest",
            "content": "??weblink to config, but right answer is C?",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 314461,
            "date": "Wed 06 Oct 2021 14:57",
            "username": "faltu1985",
            "content": "Ans: D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 313247,
            "date": "Mon 04 Oct 2021 15:36",
            "username": "faltu1985",
            "content": "Ans: D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 312857,
            "date": "Thu 30 Sep 2021 10:33",
            "username": "rscloud",
            "content": "D aws config",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#226",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An application running on a set of Amazon EC2 instances in an Auto Scaling group requires a configuration file to operate. The instances are created and maintained with AWS CloudFormation. A DevOps engineer wants the instances to have the latest configuration file when launched, and wants changes to the configuration file to be reflected on all the instances with a minimal delay when the CloudFormation template is updated. Company policy requires that application configuration files be maintained along with AWS infrastructure configuration files in source control.<br>Which solution will accomplish this?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#226",
            "answers": [
              {
                "choice": "<p>A. In the CloudFormation template, add an AWS Config rule. Place the configuration file content in the rule's InputParameters property, and set the Scope property to the EC2 Auto Scaling group. Add an AWS Systems Manager Resource Data Sync resource to the template to poll for updates to the configuration.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. In the CloudFormation template, add an EC2 launch template resource. Place the configuration file content in the launch template. Configure the cfn-init script to run when the instance is launched, and configure the cfn-hup script to poll for updates to the configuration.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. In the CloudFormation template, add an EC2 launch template resource. Place the configuration file content in the launch template. Add an AWS Systems Manager Resource Data Sync resource to the template to poll for updates to the configuration.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. In the CloudFormation template, add Cloud Formation init metadata. Place the configuration file content in the metadata. Configure the cfn-init script to run when the instance is launched, and configure the cfn-hup script to poll for updates to the configuration.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 226 discussion",
        "discusstion": [
          {
            "id": 326702,
            "date": "Tue 05 Oct 2021 01:35",
            "username": "WhyIronMan",
            "content": "I\\\"ll go with D<br><br>Use the AWS::CloudFormation::Init type to include metadata on an Amazon EC2 instance for the cfn-init helper script. If your template calls the cfn-init script, the script looks for resource metadata rooted in the AWS::CloudFormation::Init metadata key.<br><br>Reference:<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-init.html",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 581287,
            "date": "Tue 05 Apr 2022 15:43",
            "username": "jj22222",
            "content": "D.  In the CloudFormation template, add Cloud Formation init metadata. Place the configuration file content in the metadata. Configure the cfn-init script to run when the instance is launched, and configure the cfn-hup script to poll for updates to the configuration.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 552858,
            "date": "Mon 21 Feb 2022 13:52",
            "username": "diasporabro",
            "content": "I'll choose D. ..",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 330394,
            "date": "Sun 07 Nov 2021 16:04",
            "username": "devopp",
            "content": "In chose B but can see D is more specific to the required block <br>Template> \\\"Resources\\\" > \\\"Metadata\\\" : { \\\"AWS::CloudFormation::Init\\\" :.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 314758,
            "date": "Sun 26 Sep 2021 08:02",
            "username": "Jordanro",
            "content": "I will go with D",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#227",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using AWS CodeCommit as its source code repository. After an internal audit, the compliance team mandates that any code change that go into the master branch must be committed by senior developers.<br>Which solution will meet these requirements?<br></p>",
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
                "choice": "<p>A. Create two repositories in CodeCommit: one for working and another for the master. Create separate IAM groups for senior developers and developers. Assign the resource-level permissions on the repositories tied to the IAM groups. After the code changes are reviewed, sync the approved files to the master code commit repository.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a repository in CodeCommit. Create separate IAM groups for senior developers and developers. Assign code commit permissions for both groups, with code merge permissions for the senior developers group. Create a trigger to notify senior developers with a URL link to approve or deny commit requests delivered through Amazon SNS. Once a senior developer approves the code, the code gets merged to the master branch.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a repository in CodeCommit with a working and master branch. Create separate IAM groups for senior developers and developers. Use an IAM policy to assign each IAM group their corresponding branches. Once the code is merged to the working branch, senior developers can pull the changes from the working branch to the master branch.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a repository in CodeCommit. Create separate IAM groups for senior developers and developers. Use AWS Lambda triggers on the master branch and get the user name of the developer at the event object of the Lambda function. Validate the user name with the IAM group to approve or deny the commit.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 227 discussion",
        "discusstion": [
          {
            "id": 650446,
            "date": "Tue 23 Aug 2022 00:05",
            "username": "colinquek",
            "content": "Have to go with C, over B (which is my initial choice).<br>As B has this \\\"commit requests\\\" - there is only pull requests iirc.<br>So is a C for me.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 618559,
            "date": "Sun 19 Jun 2022 08:59",
            "username": "gr3y_matter",
            "content": "you might think it's B but B is incorrect-<br>The operation is MERGE, but Junior developer can not merge worker branch to Master branch, JunDev has to send pull request to senior developer, then senior developer will \\\"Merge the pull request\\\" to merge working branch with master branch.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 543371,
            "date": "Tue 08 Feb 2022 23:14",
            "username": "blueorca",
            "content": "Only B says merge permission to senior group",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 526344,
            "date": "Tue 18 Jan 2022 07:32",
            "username": "AwscodeStudent",
            "content": "Should be C",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 505719,
            "date": "Mon 20 Dec 2021 23:56",
            "username": "RightAnswers",
            "content": "Only Ans C allows senior developers to pull the changes from the working branch to the master branch.<br>All other answers allows everyone to merge code to Master branch.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 388031,
            "date": "Sun 31 Oct 2021 08:37",
            "username": "D2",
            "content": "Answer C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 377572,
            "date": "Wed 27 Oct 2021 17:53",
            "username": "Dantehilary",
            "content": "C is the ans",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 362147,
            "date": "Wed 27 Oct 2021 03:57",
            "username": "VSNK",
            "content": "Ans : C(Keyword - IAM Policy - Explicit \\\"Deny\\\" Policy)",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 355163,
            "date": "Sat 23 Oct 2021 21:38",
            "username": "LB",
            "content": "C it is",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 330400,
            "date": "Thu 21 Oct 2021 01:47",
            "username": "devopp",
            "content": "I vote C as most realistic.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 319071,
            "date": "Sun 26 Sep 2021 09:26",
            "username": "WhyIronManWhyIronMan",
            "content": "B)is right,<br>Reference: https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-conditional-branch.html<br>\\\"Resource\\\": \\\"arn:aws:codecommit:us-east-2:111111111111:MyDemoRepo\\\",<br>\\\"Condition\\\": {<br>\\\"StringEqualsIfExists\\\": {<br>\\\"codecommit:References\\\": [<br>\\\"refs/heads/main\\\",<br>\\\"refs/heads/prod\\\"<br> ]<br>},Sorry, my answer says B but reference is for C<br>I'll go with C because it is right",
            "upvote_count": "49",
            "selected_answers": ""
          },
          {
            "id": 326704,
            "date": "Sat 02 Oct 2021 13:16",
            "username": "WhyIronMan",
            "content": "Sorry, my answer says B but reference is for C<br>I'll go with C because it is right",
            "upvote_count": "9",
            "selected_answers": ""
          },
          {
            "id": 316669,
            "date": "Thu 23 Sep 2021 21:00",
            "username": "1234567J",
            "content": "ans: B",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#229",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps engineer is tasked with creating a more stable deployment solution for a web application in AWS. Previous deployments have resulted in user-facing bugs, premature user traffic, and inconsistencies between web servers running behind an Application Load Balancer. The current strategy uses AWS<br>CodeCommit to store the code for the application. When developers push to the master branch of the repository, CodeCommit triggers an AWS Lambda deploy function, which invokes an AWS Systems Manager run command to build and deploy the new code to all Amazon EC2 instances.<br>Which combination of actions should be taken to implement a more stable deployment solution? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#229",
            "answers": [
              {
                "choice": "<p>A. Create a pipeline in AWS CodePipeline with CodeCommit as a source provider. Create parallel pipeline stages to build and test the application. Pass the build artifact to AWS CodeDeploy.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a pipeline in AWS CodePipeline with CodeCommit as a source provider. Create separate pipeline stages to build and then test the application. Pass the build artifact to AWS CodeDeploy.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create and use an AWS CodeDeploy application and deployment group to deploy code updates to the EC2 fleet. Select the Application Load Balancer for the deployment group.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create individual Lambda functions to run all build, test, and deploy actions using AWS CodeDeploy instead of AWS Systems Manager.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Modify the Lambda function to build a single application package to be shared by all instances. Use AWS CodeDeploy instead of AWS Systems Manager to update the code on the EC2 fleet.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 229 discussion",
        "discusstion": [
          {
            "id": 326724,
            "date": "Wed 29 Sep 2021 20:38",
            "username": "WhyIronMan",
            "content": "I'll go with B, C<br><br>References:<br>https://docs.aws.amazon.com/codebuild/latest/userguide/how-to-create-pipeline-add-test.html https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-codebuild-devicefarm.html",
            "upvote_count": "10",
            "selected_answers": ""
          },
          {
            "id": 330411,
            "date": "Thu 21 Oct 2021 01:06",
            "username": "devopp",
            "content": "yep B C",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 590072,
            "date": "Fri 22 Apr 2022 17:00",
            "username": "[Removed]",
            "content": "https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-aws-elastic-load-balancing.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 546085,
            "date": "Sat 12 Feb 2022 21:50",
            "username": "blueorca",
            "content": "Is this question outdated? CodeBuild and CodeDeploy is defo better than lambda, and how can you test before build?",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 510788,
            "date": "Tue 28 Dec 2021 05:13",
            "username": "sg0206",
            "content": "Using lambda function to build the code is not a good choice so D and E are not correct.<br>Parallel pipeline is also not required. A separate pipeline is good option to test the build and pass it in another to deploy the code so B is the option.. hence B and C are correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 474369,
            "date": "Mon 08 Nov 2021 16:37",
            "username": "francisco_guerra",
            "content": "codePipeline is considered a continuous delivery tool not integration so it is not used to build and test application. and the answer do not say anything about use Codebuild so<br>C/D maybe?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 391127,
            "date": "Sun 24 Oct 2021 01:15",
            "username": "RLai",
            "content": "Ans: B C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 316674,
            "date": "Tue 28 Sep 2021 14:23",
            "username": "1234567J",
            "content": "ans : BC",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#231",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company's legacy application uses IAM user credentials to access resources in the company's AWS Organizations organization. A DevOps engineer needs to ensure new IAM users cannot be created unless the employee creating the IAM user is on an exception list.<br>Which solution will meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#231",
            "answers": [
              {
                "choice": "<p>A. Attach an Organizations SCP with an explicit deny for all iam:CreateAccessKey actions with a condition that excludes StringNotEquals for aws:username with a value of the exception list.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Attach an Organizations SCP with an explicit deny for all iam:CreateUser actions with a condition that includes StringNotLike for aws:username with a value of the exception list.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Amazon EventBridge (Amazon CloudWatch Events) rule with a pattern that matches the iam:CreateAccessKey action with an AWS Lambda function target. The function will check the user name account against an exception list. If the user is not in the exception list, the function will delete the user.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an Amazon EventBridge (Amazon CloudWatch Events) rule with a pattern that matches the iam:CreateUser action with an AWS Lambda function target. The function will check the user name and account against an exception list. If the user is not in the exception list, the function will delete the user.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 231 discussion",
        "discusstion": [
          {
            "id": 351773,
            "date": "Mon 11 Oct 2021 18:05",
            "username": "JohnnieWalker",
            "content": "I'll go with B. <br>A: iam:CreateAccessKey seems to be wrong, this is for access keys, not users.<br>B: At first I thought StringNotLike was wrong, and it did not exist, but it does exist!<br>\\\"StringNotLike - Negated case-sensitive matching. The values can include a multi-character match wildcard (*) or a single-character match wildcard (?) anywhere in the string.\\\"<br>Reference: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html",
            "upvote_count": "14",
            "selected_answers": ""
          },
          {
            "id": 326732,
            "date": "Tue 05 Oct 2021 23:15",
            "username": "WhyIronMan",
            "content": "I'll go with A",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 546124,
            "date": "Sat 12 Feb 2022 23:14",
            "username": "blueorca",
            "content": "Should be B, question is asking for deny creating users.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 414185,
            "date": "Fri 05 Nov 2021 04:34",
            "username": "Texaspider",
            "content": "https://aws.amazon.com/blogs/security/how-to-restrict-amazon-s3-bucket-access-to-a-specific-iam-role/<br><br>{<br>\\\"Version\\\": \\\"2012-10-17\\\",<br>\\\"Statement\\\": [<br>{<br>\\\"Effect\\\": \\\"Deny\\\",<br>\\\"Principal\\\": \\\"*\\\",<br>\\\"Action\\\": \\\"s3:*\\\",<br>\\\"Resource\\\": [<br>\\\"arn:aws:s3:::MyExampleBucket\\\",<br>\\\"arn:aws:s3:::MyExampleBucket/*\\\"<br>],<br>\\\"Condition\\\": {<br>\\\"StringNotLike\\\": {<br>\\\"aws:userId\\\": [<br>\\\"AROAEXAMPLEID:*\\\",<br>\\\"111111111111\\\"<br>]<br>}<br>}<br>}<br>]<br>}",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 391152,
            "date": "Mon 01 Nov 2021 10:46",
            "username": "RLaiI_heart_shuffle_girls",
            "content": "Answer: A, there is not such thing called =E2=80=9CStringNotLike=E2=80=9DStringNotLike exists https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 509481,
            "date": "Sun 26 Dec 2021 09:19",
            "username": "I_heart_shuffle_girls",
            "content": "StringNotLike exists https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 390937,
            "date": "Tue 19 Oct 2021 10:33",
            "username": "Sagardonthineni",
            "content": "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_general.html#example-scp-restricts-iam-principals<br>Answer B",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 389327,
            "date": "Sat 16 Oct 2021 17:57",
            "username": "D2",
            "content": "Answer B<br>CreateUser - creates IAM User<br>CreateUserKey - creates access key and secret key for an IAM user<br>Question is asking for creating user<br><br>https://docs.aws.amazon.com/IAM/latest/UserGuide/access_permissions-required.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 381932,
            "date": "Sat 16 Oct 2021 06:14",
            "username": "okida",
            "content": "I'll go to B<br>Requirement is for blocking create user, not AccessKey",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 362926,
            "date": "Wed 13 Oct 2021 05:40",
            "username": "Wrd123456789",
            "content": "B, you want to block CreateUser.<br>Deny with StringNotLike with value who _is_ allowed, denies everyone _but_ that user.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 335490,
            "date": "Sat 09 Oct 2021 17:30",
            "username": "sb333",
            "content": "A:<br>{<br>\\\"Version\\\": \\\"2012-10-17\\\",<br>\\\"Statement\\\":<br>{<br>\\\"Effect\\\": \\\"Deny\\\",<br>\\\"Action\\\": \\\"iam:CreateAccessKey\\\",<br>\\\"Resource\\\": \\\"*\\\",<br>\\\"Condition\\\":<br>{ \\\"StringNotEquals\\\": { \\\"aws:username\\\": [\\\"username1\\\", \\\"username2\\\"] } },<br>},<br>}",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 330448,
            "date": "Fri 08 Oct 2021 17:54",
            "username": "devopp",
            "content": "A, wordy question but B is invalidated by Condition expression.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 319866,
            "date": "Sun 03 Oct 2021 03:26",
            "username": "yyy",
            "content": "A:<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/access_permissions-required.html<br>https://summitroute.com/blog/2020/03/25/aws_scp_best_practices/",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 314538,
            "date": "Mon 27 Sep 2021 17:27",
            "username": "mulerlingxiaWhyIronManrathikumar",
            "content": "seems like B should be correct?I will go with Bwith a condition that includes StringEquals for aws:username<br>No way, to be right, it should be StringNotEqualskey word id `new IAM users cannot`",
            "upvote_count": "3131",
            "selected_answers": ""
          },
          {
            "id": 400297,
            "date": "Tue 02 Nov 2021 11:17",
            "username": "lingxia",
            "content": "I will go with B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 319061,
            "date": "Fri 01 Oct 2021 03:24",
            "username": "WhyIronManrathikumar",
            "content": "with a condition that includes StringEquals for aws:username<br>No way, to be right, it should be StringNotEqualskey word id `new IAM users cannot`",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 370501,
            "date": "Wed 13 Oct 2021 15:01",
            "username": "rathikumar",
            "content": "key word id `new IAM users cannot`",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#236",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs an application consisting of an AWS CodeDeploy deployment group that uses Auto Scaling and an Application Load Balancer. The application deployments are automated using AWS CodePipeline, which consists of AWS CodeCommit as the source and AWS CodeDeploy as the deployment provider.<br>After a recent successful deployment, the application experienced an outage for several minutes until the deployment was manually rolled back. A DevOps engineer verified that the pipeline was successful and did not indicate any errors, but found that the code caused the application to become unresponsive after several hours.<br>Which actions will help to prevent future downtime in similar situations? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#236",
            "answers": [
              {
                "choice": "<p>A. Configure a TCP health check for the Auto Scaling target group on a listening port of the application.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure an HTTP or HTTPS health check for the Auto Scaling target group to check a specific application path.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a script to test the application health and execute the script during the BeforeInstall lifecycle hook in the CodeDeploy appspec.yml file.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Update the CodeDeploy deployment group to roll back automatically to the previous version if the deployment fails.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Update the CodeDeploy deployment group to roll back based on a custom Amazon CloudWatch alarm using an application status metric.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 236 discussion",
        "discusstion": [
          {
            "id": 326787,
            "date": "Sat 16 Oct 2021 17:26",
            "username": "WhyIronMan",
            "content": "I'll go with B, E<br><br>References:<br>https://docs.aws.amazon.com/codedeploy/latest/userguide/deployments-rollback-and-redeploy.html#deployments-rollback-and-redeploy-automatic-rollbacks<br>https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-groups-configure-advanced-options.html",
            "upvote_count": "14",
            "selected_answers": ""
          },
          {
            "id": 323267,
            "date": "Wed 22 Sep 2021 04:09",
            "username": "Jordanro",
            "content": "I will go with B,E",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 668159,
            "date": "Tue 13 Sep 2022 16:48",
            "username": "colinquek",
            "content": "B - the only way really to verify the app<br>E - naturally be E if using B as one of the other option.<br><br>C - looks possible but is a trick, there is nth to verify \\\"BeforeInstall\\\"",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 546129,
            "date": "Sat 12 Feb 2022 23:31",
            "username": "blueorca",
            "content": "BE, C is incorrect, how do you run test before the app is even installed??<br>https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#:~:textUse%20to%20run%20tasks%20before%20the%20replacement%20task%20set%20is%20created.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 351836,
            "date": "Tue 02 Nov 2021 10:55",
            "username": "JohnnieWalkerMichaelExamJohnnieWalker",
            "content": "CE<br>The question is \\\"Which actions will help to PREVENT future downtime in similar situations? Therefore we need to PREVENT downtime after SEVERAL HOURS, so this rules out any answers related to deployment.A.  Nope, any helth checks wont help to prevent downtime after several hours, if a failed health check occurs, the deployment would have already completed several hours ago, so there will be downtime.B.  Same as A. C.  This happens before/during deployment, so if we want to prevent something from happening, I would choose this one over A and BD.  E seems to be a better answer.E.  Yes, this happens before/during deployment, so roll back the deployment before it completes will prevent.I think B is correct. Since http and https health check can help ALB deny the traffic to the broken EC2 unit it back to health.correct misspelled \\\"this rules out any answers related to health checks\\\"",
            "upvote_count": "111",
            "selected_answers": ""
          },
          {
            "id": 651552,
            "date": "Thu 25 Aug 2022 02:31",
            "username": "MichaelExam",
            "content": "I think B is correct. Since http and https health check can help ALB deny the traffic to the broken EC2 unit it back to health.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 351839,
            "date": "Sun 07 Nov 2021 11:34",
            "username": "JohnnieWalker",
            "content": "correct misspelled \\\"this rules out any answers related to health checks\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 350714,
            "date": "Fri 29 Oct 2021 05:55",
            "username": "benLLP",
            "content": "Why B is correct ? Auto Scaling group health check can't fix code level issue",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 335375,
            "date": "Tue 19 Oct 2021 17:52",
            "username": "wristyquilltwanc",
            "content": "Why not A,E they do not specify that this is a web app and we can't tell that this app is publishing HTTP/HTTPS wouldn't TCP on the app port be a better health check here?ALB doesnt support TCP",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 338689,
            "date": "Thu 28 Oct 2021 16:59",
            "username": "twanc",
            "content": "ALB doesnt support TCP",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#237",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps engineer is deploying an AWS Service Catalog portfolio using AWS CodePipeline. The pipeline should create products and templates based on a manifest file in either JSON or YAML, and should enforce security requirements on all AWS Service Catalog products managed through the pipeline.<br>Which solution will meet the requirements in an automated fashion?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#237",
            "answers": [
              {
                "choice": "<p>A. Use the AWS Service Catalog deploy action in AWS CodeDeploy to push new versions of products into the AWS Service Catalog with verification steps in the CodeDeploy AppSpec.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use the AWS Service Catalog deploy action in AWS CodeBuild to verify and push new versions of products into the AWS Service Catalog.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use an AWS Lambda action in CodePipeline to run a Lambda function to verify and push new versions of products into the AWS Service Catalog.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use an AWS Lambda action in AWS CodeBuild to run a Lambda function to verify and push new versions of products into the AWS Service Catalog.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 237 discussion",
        "discusstion": [
          {
            "id": 333669,
            "date": "Fri 22 Oct 2021 18:04",
            "username": "sb333",
            "content": "I might actually go with C for this one. For A, there is no AWS Service Catalog deploy action in AWS CodeDeploy (and AppSpec doesn't make any sense here). Same with answer B for CodeBuild. You can add an AWS Service Catalog deploy stage in CodePipeline, but none of the answers have that as an option. Also that deploy stage allows updates to existing Service Catalog products. Not sure you can deploy new products with that option. You can, however, accomplish the requirements by using a Lambda action in CodePipeline (answer C).",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 326795,
            "date": "Sun 10 Oct 2021 00:17",
            "username": "WhyIronManAwsSuperTrooper",
            "content": "I'll go with A<br>Is the most automated fashion<br><br>Reference:<br>https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-S3-servicecatalog.htmlThe link states:<br><br>In Add deploy stage, complete the following:<br> In Deploy provider, choose AWS Service Catalog.",
            "upvote_count": "101",
            "selected_answers": ""
          },
          {
            "id": 401859,
            "date": "Tue 02 Nov 2021 03:57",
            "username": "AwsSuperTrooper",
            "content": "The link states:<br><br>In Add deploy stage, complete the following:<br> In Deploy provider, choose AWS Service Catalog.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 709126,
            "date": "Tue 01 Nov 2022 13:42",
            "username": "RightAnswers",
            "content": "Only CodePipeline can deploy SC products.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 653353,
            "date": "Mon 29 Aug 2022 09:57",
            "username": "vagobago",
            "content": "I would go with C.  A is very suspicious because of \\\"AWS Service Catalog deploy action in AWS CodeDeploy\\\". CodePipeline (but not CodeDeploy) has deploy actions of different types - Service Catalog Deploy Action Integration ans CodeDeploy Deploy Action Integration are 2 types of them: https://docs.aws.amazon.com/codepipeline/latest/userguide/integrations-action-type.html#integrations-deploy",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 643068,
            "date": "Fri 05 Aug 2022 20:42",
            "username": "hubekpeter",
            "content": "C is correct. You can deploy directly to service catalog as a last stage and insert anything you want in between source and deploy actions, like some sort of cf template linter, IAM validators etc.. Also the app spec files support only lambda, ec2, on-prem and ecs as deployment target. So it doesn=E2=80=99t make sense.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 633740,
            "date": "Tue 19 Jul 2022 22:26",
            "username": "toma",
            "content": "answer i A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 552821,
            "date": "Mon 21 Feb 2022 13:01",
            "username": "MF2C",
            "content": "open codedeploy and you will see service catalog",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 417906,
            "date": "Thu 04 Nov 2021 16:59",
            "username": "tgv",
            "content": "It's C. <br>For those who say that it's A, go and try to create a CodeDeploy application and you will see that it can be done only on the below platforms:<br>- EC2/On-premises<br>- AWS Lambda<br>- Amazon ECS",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 410736,
            "date": "Thu 04 Nov 2021 04:31",
            "username": "shwetapathak2301RightAnswers",
            "content": "the answer is D<br>https://aws.amazon.com/blogs/devops/aws-service-catalog-sync-codeAns C<br>shwetapathak2301 got the correct article, however the interpretation was incorrect. CodeBuild cannot deploy. It is the CodePipeline which has a lambda in the CodeBuild stage.",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 516061,
            "date": "Mon 03 Jan 2022 22:23",
            "username": "RightAnswers",
            "content": "Ans C<br>shwetapathak2301 got the correct article, however the interpretation was incorrect. CodeBuild cannot deploy. It is the CodePipeline which has a lambda in the CodeBuild stage.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 342493,
            "date": "Sat 23 Oct 2021 13:09",
            "username": "twanc",
            "content": "answer is C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 323280,
            "date": "Fri 08 Oct 2021 11:59",
            "username": "Jordanro",
            "content": "I will go with D",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 323233,
            "date": "Fri 08 Oct 2021 08:05",
            "username": "benLLP",
            "content": "I will go with A<br>https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-S3-servicecatalog.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 320247,
            "date": "Mon 27 Sep 2021 18:58",
            "username": "yyyyyy",
            "content": "I will go with D<br>https://aws.amazon.com/blogs/devops/aws-service-catalog-sync-code/sorry B",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 320248,
            "date": "Tue 05 Oct 2021 08:04",
            "username": "yyy",
            "content": "sorry B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 316967,
            "date": "Wed 22 Sep 2021 06:41",
            "username": "1234567J",
            "content": "ans: D",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#238",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to use AWS Systems Manager documents to bootstrap physical laptops for developers. The bootstrap code is stored in GitHub. A DevOps engineer has already created a Systems Manager activation, installed the Systems Manager agent with the registration code, and installed an activation ID on all the laptops.<br>Which set of steps should be taken next?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#238",
            "answers": [
              {
                "choice": "<p>A. Configure the Systems Manager document to use the AWS-RunShellScript command to copy the files from GitHub to Amazon S3, then use the aws- downloadContent plugin with a sourceType of S3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure the Systems Manager document to use the aws-configurePackage plugin with an install action and point to the Git repository.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure the Systems Manager document to use the aws-downloadContent plugin with a sourceType of GitHub and sourceInfo with the repository details.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure the Systems Manager document to use the aws:softwareInventory plugin and run the script from the Git repository.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 238 discussion",
        "discusstion": [
          {
            "id": 326800,
            "date": "Fri 05 Nov 2021 05:28",
            "username": "WhyIronManhubekpeter",
            "content": "I'll go with CThis is the correct answer you need to download content first with a parameter of type source and info and only then you can execute the script with runshellscript or runpowershellscriot plugins.",
            "upvote_count": "71",
            "selected_answers": ""
          },
          {
            "id": 649831,
            "date": "Sun 21 Aug 2022 19:01",
            "username": "hubekpeter",
            "content": "This is the correct answer you need to download content first with a parameter of type source and info and only then you can execute the script with runshellscript or runpowershellscriot plugins.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 546062,
            "date": "Sat 12 Feb 2022 20:30",
            "username": "blueorca",
            "content": "Should be C.  When the file is copied to S3, you don't need to download the content anymore, you can just use remote shell script to run it from S3 https://docs.aws.amazon.com/systems-manager/latest/userguide/integration-s3-shell.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 323288,
            "date": "Sun 31 Oct 2021 18:14",
            "username": "Jordanro",
            "content": "I will go with C. ",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 320334,
            "date": "Sat 23 Oct 2021 09:22",
            "username": "yyyyyy",
            "content": "I would go with D because aws-configurePackage and aws-downloadContent are wrong but only aws:softwareInventory is right<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/composite-docs.htmlBut C look right https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html#aws-downloadContent",
            "upvote_count": "24",
            "selected_answers": ""
          },
          {
            "id": 320336,
            "date": "Sun 24 Oct 2021 00:39",
            "username": "yyy",
            "content": "But C look right https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html#aws-downloadContent",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 316970,
            "date": "Fri 01 Oct 2021 05:33",
            "username": "1234567J",
            "content": "ans: C",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#239",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company requires its internal business teams to launch resources through pre-approved AWS CloudFormation templates only. The security team requires automated monitoring when resources drift from their expected state.<br>Which strategy should be used to meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#239",
            "answers": [
              {
                "choice": "<p>A. Allow users to deploy CloudFormation stacks using a CloudFormation service role only. Use CloudFormation drift detection to detect when resources have drifted from their expected state.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Allow users to deploy CloudFormation stacks using a CloudFormation service role only. Use AWS Config rules to detect when resources have drifted from their expected state.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Allow users to deploy CloudFormation stacks using AWS Service Catalog only. Enforce the use of a launch constraint. Use AWS Config rules to detect when resources have drifted from their expected state.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Allow users to deploy CloudFormation stacks using AWS Service Catalog only. Enforce the use of a template constraint. Use Amazon EventBridge (Amazon CloudWatch Events) notifications to detect when resources have drifted from their expected state.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 239 discussion",
        "discusstion": [
          {
            "id": 330488,
            "date": "Mon 11 Oct 2021 03:54",
            "username": "devopp",
            "content": "Definately C<br>AWS Service Catalog use-case.<br>and From links posted below, use AWS Config rules to detect when resources have drifted from their expected state.",
            "upvote_count": "16",
            "selected_answers": ""
          },
          {
            "id": 323292,
            "date": "Sun 10 Oct 2021 05:16",
            "username": "Jordanro",
            "content": "I will go with C",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 638321,
            "date": "Wed 27 Jul 2022 22:46",
            "username": "toma",
            "content": "defiantly C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 588434,
            "date": "Wed 20 Apr 2022 06:16",
            "username": "[Removed]",
            "content": "The answers on Question 12 don't match the question.",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 583557,
            "date": "Sun 10 Apr 2022 04:38",
            "username": "nqthien041292",
            "content": "Vote C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 547167,
            "date": "Mon 14 Feb 2022 15:07",
            "username": "bobsmith2000",
            "content": "C. <br>Look here<br>https://aws.amazon.com/about-aws/whats-new/2019/01/aws-config-adds-support-for-aws-service-catalog/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 539918,
            "date": "Thu 03 Feb 2022 20:18",
            "username": "ntlvld",
            "content": "I will go with C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 510820,
            "date": "Tue 28 Dec 2021 06:36",
            "username": "sg0206",
            "content": "Definately C is the option. If we need to launch resources with pre-approved template then resources should be created via catalog service.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 503236,
            "date": "Thu 16 Dec 2021 23:54",
            "username": "RightAnswers",
            "content": "B<br>On a first glance, all answers look correct. But then, looking carefully at the question, the key item is \\\"the program must recover quickly from any data loss events that occur accidentally\\\". I guess to make that happen, it is not only required to detect the drift, but also address the drift automatically. As mentioned in the link: https://docs.aws.amazon.com/config/latest/developerguide/aws-config-managed-rules-cloudformation-templates.html,a config rule can be created to automatically update the CFN stacks, so that the in case of accidental data loss, the auto updated CFN templates can be used to recreate the resources as well as launch the resources in the failover region with themost up-to-date CFN template(which incorporates the resource changes made by the users).",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 499476,
            "date": "Sat 11 Dec 2021 16:22",
            "username": "ola12",
            "content": "It definately CCCC",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 355616,
            "date": "Mon 01 Nov 2021 21:26",
            "username": "LB",
            "content": "C is the correct answer.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 334406,
            "date": "Mon 01 Nov 2021 12:18",
            "username": "benLLP",
            "content": "I will go with A<br>https://aws.amazon.com/blogs/aws/new-cloudformation-drift-detection/",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 320342,
            "date": "Tue 05 Oct 2021 00:03",
            "username": "yyy",
            "content": "I will go with B<br>https://aws.amazon.com/about-aws/whats-new/2018/11/aws-config-launches-a-new-aws-config-rule-to-support-aws-cloudformation-stack-drift-detection/",
            "upvote_count": "5",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#241",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an application deployed using Amazon ECS with data stored in an Amazon DynamoDB table. The company wants the application to fail over to another Region in a disaster recovery scenario. The application must also efficiently recover from any accidental data loss events. The RPO for the application is<br>1 hour and the RTO is 2 hours.<br>Which highly available solution should a DevOps engineer recommend?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#241",
            "answers": [
              {
                "choice": "<p>A. Change the configuration of the existing DynamoDB table. Enable this as a global table and specify the second Region that will be used. Enable DynamoDB point-in-time recovery.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Enable DynamoDB Streams for the table and create an AWS Lambda function to write the stream data to an S3 bucket in the second Region. Schedule a job for every 2 hours to use AWS Data Pipeline to restore the database to the failover Region.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Export the DynamoDB table every 2 hours using AWS Data Pipeline to an Amazon S3 bucket in the second Region. Use Data Pipeline in the second Region to restore the export from S3 into the second DynamoDB table.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use AWS DMS to replicate the data every hour. Set the original DynamoDB table as the source and the new DynamoDB table as the target.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 241 discussion",
        "discusstion": [
          {
            "id": 320459,
            "date": "Wed 22 Sep 2021 22:59",
            "username": "yyy",
            "content": "I will go with A",
            "upvote_count": "10",
            "selected_answers": ""
          },
          {
            "id": 330625,
            "date": "Mon 18 Oct 2021 14:40",
            "username": "devopp",
            "content": "Ans is A as Global Table with Point-in-Time recovery for the Accidental change requirement.",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 544795,
            "date": "Thu 10 Feb 2022 19:42",
            "username": "blueorca",
            "content": "A for me",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 383371,
            "date": "Wed 03 Nov 2021 03:44",
            "username": "okida",
            "content": "I'll go to A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 327186,
            "date": "Thu 14 Oct 2021 23:54",
            "username": "sanc",
            "content": "A dynamodb global table",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 326825,
            "date": "Fri 08 Oct 2021 06:40",
            "username": "WhyIronMan",
            "content": "I'll go with A",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#242",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is implementing a well-architected design for its globally accessible API stack. The design needs to ensure both high reliability and fast response times for users located in North America and Europe.<br>The API stack contains the following three tiers:<br>-Amazon API Gateway<br>-AWS Lambda<br>-Amazon DynamoDB<br>Which solution will meet the requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#242",
            "answers": [
              {
                "choice": "<p>A. Configure Amazon Route 53 to point to API Gateway APIs in North America and Europe using health checks. Configure the APIs to forward requests to a Lambda function in that Region. Configure the Lambda functions to retrieve and update the data in a DynamoDB table in the same Region as the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure Amazon Route 53 to point to API Gateway APIs in North America and Europe using latency-based routing and health checks. Configure the APIs to forward requests to a Lambda function in that Region. Configure the Lambda functions to retrieve and update the data in a DynamoDB global table.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure Amazon Route 53 to point to API Gateway in North America, create a disaster recovery API in Europe, and configure both APIs to forward requests to the Lambda functions in that Region. Retrieve the data from a DynamoDB global table. Deploy a Lambda function to check the North America API health every 5 minutes. In the event of a failure, update Route 53 to point to the disaster recovery API.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure Amazon Route 53 to point to API Gateway API in North America using latency-based routing. Configure the API to forward requests to the Lambda function in the Region nearest to the user. Configure the Lambda function to retrieve and update the data in a DynamoDB table.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 242 discussion",
        "discusstion": [
          {
            "id": 326826,
            "date": "Sat 30 Oct 2021 02:57",
            "username": "WhyIronMan",
            "content": "I'll go with B",
            "upvote_count": "10",
            "selected_answers": ""
          },
          {
            "id": 320462,
            "date": "Sun 03 Oct 2021 14:28",
            "username": "yyy",
            "content": "I will go with B",
            "upvote_count": "5",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#244",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>After a recent audit, a company decided to implement a new disaster recovery strategy for its Amazon S3 data and its MySQL database running on Amazon EC2.<br>Management wants the ability to recover to a secondary AWS Region with an RPO under 5 seconds and an RTO under 1 minute.<br>Which actions will meet the requirements while MINIMIZING operational overhead? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#244",
            "answers": [
              {
                "choice": "<p>A. Modify the application to write to both Regions at the same time when uploading objects to Amazon S3.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Migrate the database to an Amazon Aurora multi-master in the primary and secondary Regions.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Migrate the database to Amazon RDS with a read replica in the secondary Region.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Migrate to Amazon Aurora Global Database.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Set up S3 cross-Region replication with a replication SLA for the S3 buckets where objects are being put.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 244 discussion",
        "discusstion": [
          {
            "id": 352588,
            "date": "Sat 16 Oct 2021 02:34",
            "username": "JohnnieWalkerjexam211StelSen",
            "content": "The answer should be ADE.  S3 cross-Region replication has an SLA of 15 minutes, the RPO is 5 seconds, so it doesnt meet the requirements.<br><br>New Replication SLA - Replication Time Control feature<br>Most of the objects will be replicated within seconds.<br>99% of the objects will be replicated within 5 minutes.<br>99.99% of the objects will be replicated within 15 minutes.<br><br>Billing credits if the SLA is not met:<br>99.9% to 98.0% =E2=80=93 10% credit<br>98.0% to 95.0% =E2=80=93 25% credit<br>95% to 0% =E2=80=93 100% credit<br><br>https://aws.amazon.com/blogs/aws/s3-replication-update-replication-sla-metrics-and-events/the cost to modify all operation to perform twice it can be really expensive inside the app also it's a really bad practiceAgree. AD is correct",
            "upvote_count": "1322",
            "selected_answers": ""
          },
          {
            "id": 649457,
            "date": "Sat 20 Aug 2022 16:04",
            "username": "jexam211",
            "content": "the cost to modify all operation to perform twice it can be really expensive inside the app also it's a really bad practice",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 430431,
            "date": "Fri 29 Oct 2021 09:03",
            "username": "StelSen",
            "content": "Agree. AD is correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 752292,
            "date": "Wed 21 Dec 2022 13:43",
            "username": "ceros399",
            "content": "In the begining I though about having Cross-Region Replication, but due to the SLA, it will not meet requirements.<br><br>Ans is:AD",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 675052,
            "date": "Wed 21 Sep 2022 13:03",
            "username": "colinquek",
            "content": "D - self explanatory.<br>A - the worse possible idea, cos this DevOps, rem if u hv to first amend code, then write to another region as well, there is a code change and trickles down to operations (guys, ops is more than maintaining the infra), there is code findings to fix, this change requires regression test, uat, prod sign off etc.<br>And what about the code writing to one region and then fails to do so to the next?<br>Iteratively, the change is something to maintain as part of the code baseline moving ahead.<br><br>So that in DevOps' books is affecting operations.<br><br>But sadly of all the options here A is the only workable one for S3.<br><br>So A, D. ",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 660321,
            "date": "Mon 05 Sep 2022 17:44",
            "username": "kopper2019",
            "content": "E is just out because SLA for S3 replication is 15minutes so E is a no go, A and D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 544854,
            "date": "Thu 10 Feb 2022 21:33",
            "username": "blueorca",
            "content": "DE for me",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: DE"
          },
          {
            "id": 525973,
            "date": "Mon 17 Jan 2022 18:37",
            "username": "hubekpeter",
            "content": "D and E<br>replication SLA https://aws.amazon.com/blogs/aws/s3-replication-update-replication-sla-metrics-and-events/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 417924,
            "date": "Sun 24 Oct 2021 02:48",
            "username": "amehim",
            "content": "D & E is doable but E doesn't meet the RPO of 5 seconds. S3 replication takes at least 15 minutes So I'll go with A & D.  https://aws.amazon.com/premiumsupport/knowledge-center/s3-object-replication-time/",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 391674,
            "date": "Fri 22 Oct 2021 19:24",
            "username": "nsei",
            "content": "A and D",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 369972,
            "date": "Fri 22 Oct 2021 05:29",
            "username": "Elie777justfmm",
            "content": "Why did you choose D over C ?If you see RPO in seconds and RTO in less than a minute, its most probably Aurora.<br><br>If your primary region suffers a performance degradation or outage, you can promote one of the secondary regions to take read/write responsibilities. An Aurora cluster can recover in less than 1 minute even in the event of a complete regional outage. This provides your application with an effective Recovery Point Objective (RPO) of 1 second and a Recovery Time Objective (RTO) of less than 1 minute, providing a strong foundation for a global business continuity plan.<br>https://aws.amazon.com/rds/aurora/global-database/<br><br>RDS will take a longer time.",
            "upvote_count": "13",
            "selected_answers": ""
          },
          {
            "id": 465550,
            "date": "Wed 03 Nov 2021 18:15",
            "username": "justfmm",
            "content": "If you see RPO in seconds and RTO in less than a minute, its most probably Aurora.<br><br>If your primary region suffers a performance degradation or outage, you can promote one of the secondary regions to take read/write responsibilities. An Aurora cluster can recover in less than 1 minute even in the event of a complete regional outage. This provides your application with an effective Recovery Point Objective (RPO) of 1 second and a Recovery Time Objective (RTO) of less than 1 minute, providing a strong foundation for a global business continuity plan.<br>https://aws.amazon.com/rds/aurora/global-database/<br><br>RDS will take a longer time.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 356170,
            "date": "Sun 17 Oct 2021 06:24",
            "username": "idforadf",
            "content": "Looks more like D & E, based in DR possibility with Amazon Aurora Global Database",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 330987,
            "date": "Fri 15 Oct 2021 21:52",
            "username": "devopp",
            "content": "D and E",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 327197,
            "date": "Fri 15 Oct 2021 12:12",
            "username": "sanc",
            "content": "D and E",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 326830,
            "date": "Fri 15 Oct 2021 01:24",
            "username": "WhyIronMan",
            "content": "I'll go with D, E",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 326327,
            "date": "Fri 08 Oct 2021 20:49",
            "username": "sb333",
            "content": "I will go with DE.  https://aws.amazon.com/rds/aurora/global-database/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 323322,
            "date": "Mon 04 Oct 2021 06:29",
            "username": "Jordanro",
            "content": "I will go with DE",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 320477,
            "date": "Sat 02 Oct 2021 13:41",
            "username": "yyy",
            "content": "I will go CE",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 317018,
            "date": "Tue 21 Sep 2021 16:03",
            "username": "1234567JWhyIronManshammous",
            "content": "ans: ADA is wrong because is not MINIMIZING operational overheadIt does. Developers change the application's code which is not part of operations.",
            "upvote_count": "311",
            "selected_answers": ""
          },
          {
            "id": 326829,
            "date": "Thu 14 Oct 2021 03:17",
            "username": "WhyIronManshammous",
            "content": "A is wrong because is not MINIMIZING operational overheadIt does. Developers change the application's code which is not part of operations.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 450746,
            "date": "Mon 01 Nov 2021 08:49",
            "username": "shammous",
            "content": "It does. Developers change the application's code which is not part of operations.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#245",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps engineer is scheduling legacy AWS KMS keys for deletion and has created a remediation AWS Lambda function that will re-enable a key if necessary.<br>The engineer wants to automate this process with available AWS CloudTrail data so, if a key scheduled for deletion is in use, it will be re-enabled.<br>Which solution enables this automation?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#245",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon CloudWatch Logs metric filter and alarm for KMS events with an error message. Set the remediation Lambda function as the target of the alarm.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an Amazon CloudWatch Logs metric filter and alarm for KMS events with an error message. Create an Amazon SNS topic as the target of the alarm. Subscribe the remediation Lambda function to the SNS topic.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Amazon CloudWatch Events rule pattern looking for KMS service events with an error message. Create an Amazon SNS topic as the target of the rule. Subscribe the remediation Lambda function to the SNS topic.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Amazon CloudTrail to alert for KMS service events with an error message. Set the remediation Lambda function as the target of the rule.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 245 discussion",
        "discusstion": [
          {
            "id": 314638,
            "date": "Sat 25 Sep 2021 18:54",
            "username": "vzisiadisshammous",
            "content": "I'd go with B<br>https://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys-creating-cloudwatch-alarm.htmlOption C: https://asecure.cloud/a/detect-kms-cmk-operations/",
            "upvote_count": "142",
            "selected_answers": ""
          },
          {
            "id": 450741,
            "date": "Sat 06 Nov 2021 18:26",
            "username": "shammous",
            "content": "Option C: https://asecure.cloud/a/detect-kms-cmk-operations/",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 757512,
            "date": "Mon 26 Dec 2022 15:02",
            "username": "ceros399",
            "content": "I go with B,as you have created an alarm from CloudTrail logs reviewed by cloudwatch logs, you'll need to subscribe to the sns notification. as DevOps you also migth need to subscribe to the sns in order to be informed.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 434198,
            "date": "Thu 28 Oct 2021 18:25",
            "username": "TonyGeTonyGebobsmith2000",
            "content": "I choose A. <br>No SNS is needed here for this requirement, Lambda is enough for this automation.sorry, alarm is configured, then SNS is A MUST to trigger Lambda.<br>B is the right way.CloudTrail isn't mentioned in B.  You must configure CloudTrail to send logs in CloudWatch first.<br>Moreover CloudWatch EventBridge makes use of \\\"AWS API Call via CloudTrail\\\" out of the box.<br><br>So it's Cc indeed.",
            "upvote_count": "142",
            "selected_answers": ""
          },
          {
            "id": 434202,
            "date": "Mon 01 Nov 2021 12:54",
            "username": "TonyGebobsmith2000",
            "content": "sorry, alarm is configured, then SNS is A MUST to trigger Lambda.<br>B is the right way.CloudTrail isn't mentioned in B.  You must configure CloudTrail to send logs in CloudWatch first.<br>Moreover CloudWatch EventBridge makes use of \\\"AWS API Call via CloudTrail\\\" out of the box.<br><br>So it's Cc indeed.",
            "upvote_count": "42",
            "selected_answers": ""
          },
          {
            "id": 543753,
            "date": "Wed 09 Feb 2022 13:38",
            "username": "bobsmith2000",
            "content": "CloudTrail isn't mentioned in B.  You must configure CloudTrail to send logs in CloudWatch first.<br>Moreover CloudWatch EventBridge makes use of \\\"AWS API Call via CloudTrail\\\" out of the box.<br><br>So it's Cc indeed.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 332293,
            "date": "Fri 15 Oct 2021 12:35",
            "username": "sashszSonamDhingrasashszbobsmith2000",
            "content": "I've done it in the real world. It is C. Why do you need to SNS for Clouwatch Events, can't you invoke Lambda directly from it?Actually it is B, as CloudTrail data must be used.CloudTrail isn't mentioned in B.  You must configure CloudTrail to send logs in CloudWatch first.<br>Moreover CloudWatch EventBridge makes use of \\\"AWS API Call via CloudTrail\\\" out of the box.<br><br>So it's C indeed.",
            "upvote_count": "3123",
            "selected_answers": ""
          },
          {
            "id": 554374,
            "date": "Wed 23 Feb 2022 11:50",
            "username": "SonamDhingra",
            "content": "Why do you need to SNS for Clouwatch Events, can't you invoke Lambda directly from it?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 332296,
            "date": "Mon 18 Oct 2021 23:33",
            "username": "sashszbobsmith2000",
            "content": "Actually it is B, as CloudTrail data must be used.CloudTrail isn't mentioned in B.  You must configure CloudTrail to send logs in CloudWatch first.<br>Moreover CloudWatch EventBridge makes use of \\\"AWS API Call via CloudTrail\\\" out of the box.<br><br>So it's C indeed.",
            "upvote_count": "23",
            "selected_answers": ""
          },
          {
            "id": 543754,
            "date": "Wed 09 Feb 2022 13:39",
            "username": "bobsmith2000",
            "content": "CloudTrail isn't mentioned in B.  You must configure CloudTrail to send logs in CloudWatch first.<br>Moreover CloudWatch EventBridge makes use of \\\"AWS API Call via CloudTrail\\\" out of the box.<br><br>So it's C indeed.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 326839,
            "date": "Mon 27 Sep 2021 03:53",
            "username": "WhyIronMan",
            "content": "I'll go with B",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#246",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps engineer is building a centralized CI/CD pipeline using AWS CodeBuild, AWS CodeDeploy, and Amazon S3. The engineer is required to have least privilege access and individual encryption at rest for all artifacts in Amazon S3. The engineer must be able to prune old artifacts without the ability to download or read them.<br>The engineer has already completed the following steps:<br>1. Created a unique AWS Key Management Service (AWS KMS) CMK and S3 bucket for each project's builds.<br>2. Updated the S3 bucket policy to only allow uploads that use the associated KMS encryption.<br>Which final step should be taken to meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#246",
            "answers": [
              {
                "choice": "<p>A. Update the attached IAM policies to allow access to the appropriate KMS key from the CodeDeploy role where the application will be deployed.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Update the attached IAM policies to allow access to the appropriate KMS key from the EC2 instance roles where the application will be deployed.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Update the CMK's key policy to allow access to the appropriate KMS key from the CodeDeploy role where the application will be deployed.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Update the CMK's key policy to allow access to the appropriate KMS key from the EC2 instance roles where the application will be deployed.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 246 discussion",
        "discusstion": [
          {
            "id": 326852,
            "date": "Thu 23 Sep 2021 10:02",
            "username": "WhyIronMan",
            "content": "I'll go with A,<br><br>There is no mention for EC2 instances in the question",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 446972,
            "date": "Sun 07 Nov 2021 11:11",
            "username": "passtest100",
            "content": "B<br>https://aws.amazon.com/blogs/devops/complete-ci-cd-with-aws-codecommit-aws-codebuild-aws-codedeploy-and-aws-codepipeline/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 434210,
            "date": "Tue 19 Oct 2021 23:28",
            "username": "TonyGeTonyGe",
            "content": "B for sure.<br>KMS policy should be added to the EC2 instance service role, not CodeDeploy service role:<br><br>{<br>\\\"Version\\\": \\\"2012-10-17\\\",<br>\\\"Statement\\\": [<br>{<br>\\\"Effect\\\": \\\"Allow\\\",<br>\\\"Action\\\": [<br> \\\"kms:DescribeKey\\\",<br> \\\"kms:GenerateDataKey*\\\",<br> \\\"kms:Encrypt\\\",<br> \\\"kms:ReEncrypt*\\\",<br> \\\"kms:Decrypt\\\"<br>],<br>\\\"Resource\\\": [<br> \\\"arn:aws:kms:us-east-1:XXXXXXXkey/XXXXXXXXXX\\\"<br>]<br>}<br> ]<br>}Changed to A, KMS is used for CodeDeploy to decrypt file in S3, so this should be added to the CodeDeploy service role policy:<br>{<br>\\\"Version\\\": \\\"2012-10-17\\\",<br>\\\"Statement\\\": [<br>{<br>\\\"Effect\\\": \\\"Allow\\\",<br>\\\"Action\\\": [<br>\\\"kms:DescribeKey\\\",<br>\\\"kms:GenerateDataKey*\\\",<br>\\\"kms:Encrypt\\\",<br>\\\"kms:ReEncrypt*\\\",<br>\\\"kms:Decrypt\\\"<br>],<br>\\\"Resource\\\": [<br>\\\"arn:aws:kms:us-east-1:XXXXXXXkey/XXXXXXXXXX\\\"<br>]<br>}<br>]<br>}",
            "upvote_count": "22",
            "selected_answers": ""
          },
          {
            "id": 434220,
            "date": "Thu 21 Oct 2021 07:40",
            "username": "TonyGe",
            "content": "Changed to A, KMS is used for CodeDeploy to decrypt file in S3, so this should be added to the CodeDeploy service role policy:<br>{<br>\\\"Version\\\": \\\"2012-10-17\\\",<br>\\\"Statement\\\": [<br>{<br>\\\"Effect\\\": \\\"Allow\\\",<br>\\\"Action\\\": [<br>\\\"kms:DescribeKey\\\",<br>\\\"kms:GenerateDataKey*\\\",<br>\\\"kms:Encrypt\\\",<br>\\\"kms:ReEncrypt*\\\",<br>\\\"kms:Decrypt\\\"<br>],<br>\\\"Resource\\\": [<br>\\\"arn:aws:kms:us-east-1:XXXXXXXkey/XXXXXXXXXX\\\"<br>]<br>}<br>]<br>}",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 352608,
            "date": "Sat 09 Oct 2021 03:51",
            "username": "JohnnieWalker",
            "content": "I think this should be both A and C. <br>You need to allow access on CMK key policy during the creation of the key, and after also the IAM policy.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 330990,
            "date": "Wed 29 Sep 2021 22:49",
            "username": "devopp",
            "content": "A, assuming C's been done already ?",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#247",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps engineer is designing a multi-Region disaster recovery strategy for an application requiring an RPO of 1 hour and RTO of 4 hours. The application is deployed with an AWS CloudFormation template that creates an Application Load Balancer, Amazon EC2 instances in an Auto Scaling group, and an Amazon<br>RDS Multi-AZ DB instance with 20 GB of allocated storage. The AMI of the application instance does not contain data and has been copied to the destination<br>Region.<br>Which combination of actions will satisfy the recovery objectives at the LOWEST cost? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#247",
            "answers": [
              {
                "choice": "<p>A. Launch an RDS DB instance in the failover Region and use AWS DMS to configure ongoing replication from the source database.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Schedule an AWS Lambda function to take a snapshot of the database every hour and copy the snapshot to the failover Region.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Upon failover, update the CloudFormation stack in the failover Region to update the Auto Scaling group from one running instance to the desired number of instances. When the stack update is complete, change the DNS records to point to the failover Region's Elastic Load Balancer.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Upon failover, launch the CloudFormation template in the failover Region with the snapshot ID as an input parameter. When the stack creation is complete, change the DNS records to point to the failover Region's Elastic Load Balancer.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Utilizing the build-in RDS automated backups, set up an event with Amazon CloudWatch Events that triggers an AWS Lambda function to copy the snapshot to the failover Region.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 247 discussion",
        "discusstion": [
          {
            "id": 330996,
            "date": "Fri 05 Nov 2021 11:40",
            "username": "devopp",
            "content": "B D .....",
            "upvote_count": "13",
            "selected_answers": ""
          },
          {
            "id": 648828,
            "date": "Fri 19 Aug 2022 10:51",
            "username": "hubekpeterjexam211",
            "content": "If there=E2=80=99s rto 4 hours, to save som money, doesn=E2=80=99t make sense to run single instance all the time. And I prefer automated backups, why on earth one will reimplement the feature with lambda, when it=E2=80=99s already available with no effort without any additional infrastructure costs.instead the built in automated backups is better but is not necessary use lambda to copy to another region that process is done automatically, is the best but the answer is not",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: DE"
          },
          {
            "id": 653701,
            "date": "Tue 30 Aug 2022 01:40",
            "username": "jexam211",
            "content": "instead the built in automated backups is better but is not necessary use lambda to copy to another region that process is done automatically, is the best but the answer is not",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 546618,
            "date": "Sun 13 Feb 2022 18:58",
            "username": "blueorca",
            "content": "Should be DB. ",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 514787,
            "date": "Sun 02 Jan 2022 04:00",
            "username": "nqthien041292",
            "content": "Vote BD",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 509892,
            "date": "Mon 27 Dec 2021 00:07",
            "username": "GreatFunana",
            "content": "BD: only because the size of the DB (20GB) is small enough to where replication is not necessary and you could feasibly restore a snapshot in 4 hours.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 326859,
            "date": "Fri 05 Nov 2021 02:55",
            "username": "WhyIronMan",
            "content": "I'll go with B,D",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 323380,
            "date": "Fri 15 Oct 2021 22:15",
            "username": "JordanroJordanrokanavpeer",
            "content": "I will go with B,Cwith B,DBC is the correct one. Least expensive doesn't mean that you we do not have any solution in place configured to at least start failover procedure",
            "upvote_count": "161",
            "selected_answers": ""
          },
          {
            "id": 325737,
            "date": "Sat 30 Oct 2021 01:14",
            "username": "Jordanro",
            "content": "with B,D",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 561486,
            "date": "Sat 05 Mar 2022 15:55",
            "username": "kanavpeer",
            "content": "BC is the correct one. Least expensive doesn't mean that you we do not have any solution in place configured to at least start failover procedure",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 320876,
            "date": "Tue 21 Sep 2021 13:54",
            "username": "yyy",
            "content": "I will go BD",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#248",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is adopting serverless computing and is migrating some of its existing applications to AWS Lambda. A DevOps engineer must come up with an automated deployment strategy using AWS CodePipeline that should include proper version controls, branching strategies, and rollback methods.<br>Which combination of steps should the DevOps engineer follow when setting up the pipeline? (Choose three.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BDF</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#248",
            "answers": [
              {
                "choice": "<p>A. Use Amazon S3 as the source code repository.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use AWS CodeCommit as the source code repository.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use AWS CloudFormation to create an AWS Serverless Application Model (AWS SAM) template for deployment.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use AWS CodeBuild to create an AWS Serverless Application Model (AWS SAM) template for deployment.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use AWS CloudFormation to deploy the application.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F. Use AWS CodeDeploy to deploy the application.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 248 discussion",
        "discusstion": [
          {
            "id": 326870,
            "date": "Fri 01 Oct 2021 08:17",
            "username": "WhyIronMandevops_aws",
            "content": "I'll go with B D F<br><br>Reference: https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-serverlessrepo-auto-publish.htmlBDE the answer from your link",
            "upvote_count": "87",
            "selected_answers": ""
          },
          {
            "id": 332899,
            "date": "Sun 03 Oct 2021 19:35",
            "username": "devops_aws",
            "content": "BDE the answer from your link",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 391818,
            "date": "Tue 12 Oct 2021 10:04",
            "username": "nseiokidaGreatFunana",
            "content": "I think D is wrong because we cannot use codebuild to create SAM template. It should be BCEWe can use code build as a step in code pipeline for creating SAM template https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-serverlessrepo-auto-publish.html<br>-> BDFThis. It used to be not possible, but a SAM template can be built during the build stage of a CodeBuild process. BDF",
            "upvote_count": "721",
            "selected_answers": ""
          },
          {
            "id": 465171,
            "date": "Wed 03 Nov 2021 22:21",
            "username": "okidaGreatFunana",
            "content": "We can use code build as a step in code pipeline for creating SAM template https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-serverlessrepo-auto-publish.html<br>-> BDFThis. It used to be not possible, but a SAM template can be built during the build stage of a CodeBuild process. BDF",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 509746,
            "date": "Sun 26 Dec 2021 19:20",
            "username": "GreatFunana",
            "content": "This. It used to be not possible, but a SAM template can be built during the build stage of a CodeBuild process. BDF",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 546541,
            "date": "Sun 13 Feb 2022 16:29",
            "username": "blueorca",
            "content": "BDF now since CodeBuild can be used to build SAM natively now. B is for branching, F is for rollback.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BDF"
          },
          {
            "id": 511728,
            "date": "Wed 29 Dec 2021 03:50",
            "username": "Jaxjd",
            "content": "F - fall when you EC2 comes into the picture.. here, the question talk about Lambda, so you cannot use Deploy the code/application.. need to skip code deploy when creating a pipeline..<br><br>So E would be correct...<br><br>Reiterate - BDE",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 332901,
            "date": "Wed 06 Oct 2021 22:28",
            "username": "devops_aws",
            "content": "I'll go with BDF<br>https://blog.clairvoyantsoft.com/continuous-deployment-of-lambda-functions-f5d930d1937d",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 331000,
            "date": "Sat 02 Oct 2021 12:06",
            "username": "devoppnojis56937",
            "content": "B D F with CodeDeploy deploying SAM (CloudFormation) Template to best support the rollback requirements.Same for me:<br>https://github.com/aws/serverless-application-model/blob/master/docs/safe_lambda_deployments.rst<br>https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/automating-updates-to-serverless-apps.html",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 391988,
            "date": "Sat 30 Oct 2021 22:47",
            "username": "nojis56937",
            "content": "Same for me:<br>https://github.com/aws/serverless-application-model/blob/master/docs/safe_lambda_deployments.rst<br>https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/automating-updates-to-serverless-apps.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 324644,
            "date": "Wed 29 Sep 2021 09:59",
            "username": "sb333sb333sb333sb333ShenanniganShenannigan",
            "content": "BDE.  AWS CodePipeline has a deployment method of AWS CloudFormation for AWS SAM.Could be BDF due to CodeDeploy being able to do rolling updates for Lambda (using AWS SAM template), which would allow you to rollback if there is an issue discovered.According to this re:Invent session, I was right the first time with BDE.  Another video from AWS indicates that AWS CodeDeploy is used under the hood for the rolling updates, but that's not the option you select in CodePipeline. You actually select AWS CloudFormation for the deployment stage. https://www.youtube.com/watch?vjUXiOPTX9S4BTW, if you want to see this in action, you can go to Lambda, choose Applications, the choose \\\"Serverless API Backend\\\" sample application. When finished, you can view the CodePipeline flow and it maps exactly to BDE as the correct answer!I followed your sample app recommendation and I can see why you would pick cloudformation for the deployment however it is still using code deploy with cloudformation as the provider. So based on that I would still say the answer is B,D,FCorrecting my above statement - it is in the Deploy section but using Cloudformation so B,D,E does appear to be correct",
            "upvote_count": "4110311",
            "selected_answers": ""
          },
          {
            "id": 324670,
            "date": "Thu 30 Sep 2021 08:11",
            "username": "sb333sb333sb333ShenanniganShenannigan",
            "content": "Could be BDF due to CodeDeploy being able to do rolling updates for Lambda (using AWS SAM template), which would allow you to rollback if there is an issue discovered.According to this re:Invent session, I was right the first time with BDE.  Another video from AWS indicates that AWS CodeDeploy is used under the hood for the rolling updates, but that's not the option you select in CodePipeline. You actually select AWS CloudFormation for the deployment stage. https://www.youtube.com/watch?vjUXiOPTX9S4BTW, if you want to see this in action, you can go to Lambda, choose Applications, the choose \\\"Serverless API Backend\\\" sample application. When finished, you can view the CodePipeline flow and it maps exactly to BDE as the correct answer!I followed your sample app recommendation and I can see why you would pick cloudformation for the deployment however it is still using code deploy with cloudformation as the provider. So based on that I would still say the answer is B,D,FCorrecting my above statement - it is in the Deploy section but using Cloudformation so B,D,E does appear to be correct",
            "upvote_count": "110311",
            "selected_answers": ""
          },
          {
            "id": 325112,
            "date": "Fri 01 Oct 2021 01:26",
            "username": "sb333sb333ShenanniganShenannigan",
            "content": "According to this re:Invent session, I was right the first time with BDE.  Another video from AWS indicates that AWS CodeDeploy is used under the hood for the rolling updates, but that's not the option you select in CodePipeline. You actually select AWS CloudFormation for the deployment stage. https://www.youtube.com/watch?vjUXiOPTX9S4BTW, if you want to see this in action, you can go to Lambda, choose Applications, the choose \\\"Serverless API Backend\\\" sample application. When finished, you can view the CodePipeline flow and it maps exactly to BDE as the correct answer!I followed your sample app recommendation and I can see why you would pick cloudformation for the deployment however it is still using code deploy with cloudformation as the provider. So based on that I would still say the answer is B,D,FCorrecting my above statement - it is in the Deploy section but using Cloudformation so B,D,E does appear to be correct",
            "upvote_count": "10311",
            "selected_answers": ""
          },
          {
            "id": 376422,
            "date": "Mon 11 Oct 2021 23:40",
            "username": "sb333ShenanniganShenannigan",
            "content": "BTW, if you want to see this in action, you can go to Lambda, choose Applications, the choose \\\"Serverless API Backend\\\" sample application. When finished, you can view the CodePipeline flow and it maps exactly to BDE as the correct answer!I followed your sample app recommendation and I can see why you would pick cloudformation for the deployment however it is still using code deploy with cloudformation as the provider. So based on that I would still say the answer is B,D,FCorrecting my above statement - it is in the Deploy section but using Cloudformation so B,D,E does appear to be correct",
            "upvote_count": "311",
            "selected_answers": ""
          },
          {
            "id": 464768,
            "date": "Sun 31 Oct 2021 20:43",
            "username": "ShenanniganShenannigan",
            "content": "I followed your sample app recommendation and I can see why you would pick cloudformation for the deployment however it is still using code deploy with cloudformation as the provider. So based on that I would still say the answer is B,D,FCorrecting my above statement - it is in the Deploy section but using Cloudformation so B,D,E does appear to be correct",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 464772,
            "date": "Wed 03 Nov 2021 12:46",
            "username": "Shenannigan",
            "content": "Correcting my above statement - it is in the Deploy section but using Cloudformation so B,D,E does appear to be correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 323382,
            "date": "Tue 28 Sep 2021 02:03",
            "username": "Jordanro",
            "content": "I will go with B,D,F",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#249",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>After a data leakage incident that led to thousands of stolen user profiles, a compliance officer is demanding automatic, auditable security policy checks for all of the company's data stores, starting with public access of Amazon S3 buckets.<br>Which solution will accomplish this with the LEAST amount of effort?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#249",
            "answers": [
              {
                "choice": "<p>A. Create a custom rule in AWS Config triggered by an S3 bucket configuration change that detects when the bucket policy or bucket ACL allows public read access. Use a remediation action to trigger an AWS Lambda function that automatically disables public access.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a custom rule in AWS Config triggered by an S3 bucket configuration change that detects when the bucket policy or bucket ACL allows public read access. Trigger an AWS Lambda function that automatically disables public access.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use a managed rule in AWS Config triggered by an S3 bucket configuration change that detects when the bucket policy or bucket ACL allows public read access. Configure a remediation action that automatically disables public access.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use a managed rule in AWS Config triggered by an S3 bucket configuration change that detects when the bucket policy or bucket ACL allows public read access. Configure an AWS Lambda function that automatically disables public access.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 249 discussion",
        "discusstion": [
          {
            "id": 326881,
            "date": "Fri 01 Oct 2021 05:05",
            "username": "WhyIronManrathikumar",
            "content": "I'll go with C<br>There is an AWS managed remediation called AWS-DisableS3BucketPublicReadWrite<br><br>Reference: https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-aws-disables3bucketpublicreadwrite.htmlhttps://aws.amazon.com/blogs/mt/aws-config-auto-remediation-s3-compliance/",
            "upvote_count": "123",
            "selected_answers": ""
          },
          {
            "id": 370531,
            "date": "Tue 02 Nov 2021 19:39",
            "username": "rathikumar",
            "content": "https://aws.amazon.com/blogs/mt/aws-config-auto-remediation-s3-compliance/",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 619858,
            "date": "Tue 21 Jun 2022 16:17",
            "username": "nqthien041292",
            "content": "Vote C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 584003,
            "date": "Mon 11 Apr 2022 05:21",
            "username": "rewiga",
            "content": "C managed rule - s3-account-level-public-access-blocks https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 508941,
            "date": "Sat 25 Dec 2021 04:10",
            "username": "szl0144",
            "content": "should be C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 331001,
            "date": "Tue 05 Oct 2021 22:24",
            "username": "devopp",
            "content": "C. ......",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 327854,
            "date": "Sun 03 Oct 2021 14:20",
            "username": "sanc",
            "content": "c<br>https://aws.amazon.com/blogs/mt/aws-config-auto-remediation-s3-compliance/",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 317922,
            "date": "Mon 27 Sep 2021 17:54",
            "username": "Jordanro",
            "content": "I will go with C",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#250",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company uses AWS KMS with CMKs and manual key rotation to meet regulatory compliance requirements. The security team wants to be notified when any keys have not been rotated after 90 days.<br>Which solution will accomplish this?<br></p>",
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
                "choice": "<p>A. Configure AWS KMS to publish to an Amazon SNS topic when keys are more than 90 days old.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure an Amazon CloudWatch Events event to launch an AWS Lambda function to call the AWS Trusted Advisor API and publish to an Amazon SNS topic.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Develop an AWS Config custom rule that publishes to an Amazon SNS topic when keys are more than 90 days old.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure AWS Security Hub to publish to an Amazon SNS topic when keys are more than 90 days old.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 250 discussion",
        "discusstion": [
          {
            "id": 326895,
            "date": "Fri 24 Sep 2021 16:35",
            "username": "WhyIronMan",
            "content": "I'll go with C",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 327810,
            "date": "Thu 30 Sep 2021 22:57",
            "username": "sanc",
            "content": "c ............",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 639468,
            "date": "Sat 30 Jul 2022 06:24",
            "username": "sudipta007",
            "content": "C<br>https://aws.amazon.com/blogs/mt/managing-aged-access-keys-through-aws-config-remediations/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 635851,
            "date": "Sun 24 Jul 2022 04:29",
            "username": "sudipta007",
            "content": "KMS can be checked using config rule .<br>https://docs.aws.amazon.com/config/latest/developerguide/cmk-backing-key-rotation-enabled.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 508646,
            "date": "Fri 24 Dec 2021 18:18",
            "username": "szl0144",
            "content": "should be C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 504494,
            "date": "Sat 18 Dec 2021 23:33",
            "username": "RightAnswersRightAnswers",
            "content": "NONE<br>I guess the question should be corrected to say that \\\"the key is not rotated within 90 days of scheduled rotation date\\\" instead of \\\"unused\\\".With the question corrected above the answer would be C. <br>As mentioned by okida, for the corrected question, the reference is:https://docs.aws.amazon.com/config/latest/developerguide/access-keys-rotated.htmlThe AWS Config rule: \\\"access-keys-rotated\\\" has the following parameters-<br>maxAccessKeyAge, Type: int, Default: 90 days.",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 504495,
            "date": "Sat 18 Dec 2021 23:35",
            "username": "RightAnswers",
            "content": "The AWS Config rule: \\\"access-keys-rotated\\\" has the following parameters-<br>maxAccessKeyAge, Type: int, Default: 90 days.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 465594,
            "date": "Thu 04 Nov 2021 04:26",
            "username": "justfmm",
            "content": "I believe question is asking for KMS instead of access key. i cant seems to find kms rotation is Config Managed rules, however i found 1 regarding Config custom rules.<br><br>https://aws.amazon.com/blogs/security/how-to-use-aws-config-to-determine-compliance-of-aws-kms-key-policies-to-your-specifications/<br><br>Answer should be C. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 465179,
            "date": "Fri 22 Oct 2021 16:13",
            "username": "okida",
            "content": "It's C<br>https://docs.aws.amazon.com/config/latest/developerguide/access-keys-rotated.html<br>Using maxAccessKeyAge - Maximum number of days without rotation. Default 90.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 456423,
            "date": "Tue 19 Oct 2021 03:18",
            "username": "RLai",
            "content": "https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor-check-reference.html#iam-access-key-rotation",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 451661,
            "date": "Fri 08 Oct 2021 22:23",
            "username": "RLaiokida",
            "content": "Should be B as you cannot track 90 days simply using AWS config custom rules as it can only keep track of resources configuration changes.I think you are mentioning \\\"Configuration history files are available only for the last 90 days\\\" -> If you store it on S3, the time will be longer",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 465180,
            "date": "Tue 26 Oct 2021 22:45",
            "username": "okida",
            "content": "I think you are mentioning \\\"Configuration history files are available only for the last 90 days\\\" -> If you store it on S3, the time will be longer",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#254",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using AWS CodePipeline to deploy an application. A recent policy change requires that a member of the company's security team sign off on any application changes before they are deployed into production. The approval should be recorded and retained.<br>Which combination of actions will meet these new requirements? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: CE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#254",
            "answers": [
              {
                "choice": "<p>A. Configure CodePipeline with Amazon CloudWatch Logs to retain data.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure CodePipeline to deliver action logs to Amazon S3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an AWS CloudTrail trail to deliver logs to Amazon S3.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a custom CodePipeline action to invoke an AWS Lambda function for approval. Create a policy that gives the security team access to manage custom CodePipeline actions.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Create a manual approval CodePipeline action before the deployment step. Create a policy that grants the security team access to approve manual approval stages.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 254 discussion",
        "discusstion": [
          {
            "id": 328282,
            "date": "Fri 15 Oct 2021 05:09",
            "username": "sb333",
            "content": "I will go with C,E.  If you are recording and retaining approvals, you are not just looking for whether the approval happened or not (you know it has if it continued the pipeline), but \\\"who\\\" did the approval. AWS CloudTrail is what records the \\\"who\\\". If you use an AWS CloudTrail \\\"trail\\\", then you can deliver those audit logs to Amazon S3 for durable storage.<br>https://stelligent.com/2019/06/11/aws-codepipeline-approval-gate-tracking/",
            "upvote_count": "9",
            "selected_answers": ""
          },
          {
            "id": 324059,
            "date": "Sat 09 Oct 2021 10:11",
            "username": "benLLPWhyIronMan",
            "content": "I will go with A,E<br>https://docs.aws.amazon.com/codepipeline/latest/userguide/detect-state-changes-cloudwatch-events.htmlYou changed my mind, I'll go with A, E<br>thanks",
            "upvote_count": "62",
            "selected_answers": ""
          },
          {
            "id": 326925,
            "date": "Mon 11 Oct 2021 15:27",
            "username": "WhyIronMan",
            "content": "You changed my mind, I'll go with A, E<br>thanks",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 616784,
            "date": "Wed 15 Jun 2022 15:34",
            "username": "nqthien041292",
            "content": "Vote CE",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CE"
          },
          {
            "id": 596481,
            "date": "Wed 04 May 2022 04:25",
            "username": "TarTee",
            "content": "According to the question. there is not required to choose C actually.It never mentioned about the logs. E is enough.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 541794,
            "date": "Sun 06 Feb 2022 16:23",
            "username": "diasporabro",
            "content": "CE is correct.<br>Reference here https://docs.aws.amazon.com/codepipeline/latest/userguide/monitoring-cloudtrail-logs.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 534137,
            "date": "Thu 27 Jan 2022 22:27",
            "username": "bobsmith2000",
            "content": "CE<br><br>https://docs.aws.amazon.com/codepipeline/latest/userguide/monitoring-cloudtrail-logs.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 509325,
            "date": "Sat 25 Dec 2021 23:54",
            "username": "RightAnswersS12341234",
            "content": "Those who choose C, isn't that CloudTrail logs are automatically delivered to S3?<br>This link - https://stelligent.com/2019/06/11/aws-codepipeline-approval-gate-tracking/ provides a really good use case of how to store approval actions. As per this link, we need a lambda, which is not an available option.<br>So, I guess A, E will do.Yes, but C asks to create the trail. CloudWatch events do not work without a CloudTrail trail. I'll go with CE",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 518449,
            "date": "Thu 06 Jan 2022 19:01",
            "username": "S12341234",
            "content": "Yes, but C asks to create the trail. CloudWatch events do not work without a CloudTrail trail. I'll go with CE",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 347726,
            "date": "Sun 31 Oct 2021 10:58",
            "username": "that1guynojis56937",
            "content": "C and E<br>https://docs.aws.amazon.com/codepipeline/latest/userguide/incident-response.html<br><br>\\\"AWS CloudTrail can be used to log AWS API calls and related events made by or on behalf of an AWS account. For more information, see Logging CodePipeline API calls with AWS CloudTrail.\\\"<br><br>https://docs.aws.amazon.com/codepipeline/latest/userguide/detect-state-changes-cloudwatch-events.htmlFor C: haven't found CW Logs or S3 direct integration for CP:<br>https://docs.aws.amazon.com/codepipeline/latest/userguide/monitoring.html",
            "upvote_count": "62",
            "selected_answers": ""
          },
          {
            "id": 391994,
            "date": "Tue 02 Nov 2021 13:01",
            "username": "nojis56937",
            "content": "For C: haven't found CW Logs or S3 direct integration for CP:<br>https://docs.aws.amazon.com/codepipeline/latest/userguide/monitoring.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 331037,
            "date": "Wed 20 Oct 2021 23:28",
            "username": "devopp",
            "content": "C E<br>The aim of CloudTrail is to identify the \\\"Who\\\" (deleted something or here approved something)",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 317312,
            "date": "Tue 05 Oct 2021 14:44",
            "username": "WhyIronManWhyIronManyyyjustfmmfriendofpenguin",
            "content": "Reference: https://docs.aws.amazon.com/codepipeline/latest/userguide/monitoring-cloudtrail-logs.htmlSorry, I'll go with A, E<br>@benLLP changed my mindwhy did you change?The link provided by benLLP and WhyIronMan provides approval action logging.<br><br>reference: https://docs.aws.amazon.com/codepipeline/latest/userguide/detect-state-changes-cloudwatch-events.htmlbut cloudwatch logs are not \\\"kept on file,\\\" CE is correct",
            "upvote_count": "12211",
            "selected_answers": ""
          },
          {
            "id": 326927,
            "date": "Wed 13 Oct 2021 01:19",
            "username": "WhyIronManyyyjustfmmfriendofpenguin",
            "content": "Sorry, I'll go with A, E<br>@benLLP changed my mindwhy did you change?The link provided by benLLP and WhyIronMan provides approval action logging.<br><br>reference: https://docs.aws.amazon.com/codepipeline/latest/userguide/detect-state-changes-cloudwatch-events.htmlbut cloudwatch logs are not \\\"kept on file,\\\" CE is correct",
            "upvote_count": "2211",
            "selected_answers": ""
          },
          {
            "id": 337626,
            "date": "Mon 25 Oct 2021 03:11",
            "username": "yyyjustfmmfriendofpenguin",
            "content": "why did you change?The link provided by benLLP and WhyIronMan provides approval action logging.<br><br>reference: https://docs.aws.amazon.com/codepipeline/latest/userguide/detect-state-changes-cloudwatch-events.htmlbut cloudwatch logs are not \\\"kept on file,\\\" CE is correct",
            "upvote_count": "211",
            "selected_answers": ""
          },
          {
            "id": 465613,
            "date": "Thu 04 Nov 2021 20:57",
            "username": "justfmmfriendofpenguin",
            "content": "The link provided by benLLP and WhyIronMan provides approval action logging.<br><br>reference: https://docs.aws.amazon.com/codepipeline/latest/userguide/detect-state-changes-cloudwatch-events.htmlbut cloudwatch logs are not \\\"kept on file,\\\" CE is correct",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 583121,
            "date": "Sat 09 Apr 2022 05:39",
            "username": "friendofpenguin",
            "content": "but cloudwatch logs are not \\\"kept on file,\\\" CE is correct",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#255",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An application's users are encountering bugs immediately after Amazon API Gateway deployments. The development team deploys once or twice a day and uses a blue/green deployment strategy with custom health checks and automated rollbacks. The team wants to limit the number of users affected by deployment bugs and receive notifications when rollbacks are needed.<br>Which combination of steps should a DevOps engineer use to meet these requests? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#255",
            "answers": [
              {
                "choice": "<p>A. Implement a blue/green strategy using path mappings.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Implement a canary deployment strategy.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Implement a rolling deployment strategy using multiple stages.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Amazon CloudWatch alarms to notify the development team.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use Amazon CloudWatch Events to notify the development team.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 255 discussion",
        "discusstion": [
          {
            "id": 318024,
            "date": "Sat 16 Oct 2021 06:58",
            "username": "Jordanro",
            "content": "I will go with B,D",
            "upvote_count": "10",
            "selected_answers": ""
          },
          {
            "id": 616941,
            "date": "Wed 15 Jun 2022 22:12",
            "username": "monkalwaysmonkalways",
            "content": "Answer is B, E. <br><br>B - small impact<br>E - notified for rollback. Rollback creates an CloudWatch event, not an error.Should be B, D.  Misread, \\\"be notified when rollbacks are required\\\". Health check will trigger alarm, aka, rollback is required.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 616943,
            "date": "Wed 15 Jun 2022 22:13",
            "username": "monkalways",
            "content": "Should be B, D.  Misread, \\\"be notified when rollbacks are required\\\". Health check will trigger alarm, aka, rollback is required.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 546490,
            "date": "Sun 13 Feb 2022 15:21",
            "username": "blueorca",
            "content": "BD, small impact and alarms for rollback",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 400345,
            "date": "Fri 29 Oct 2021 19:14",
            "username": "NNHANMBJames",
            "content": "BE, CloudWatch Events is better to notify the development team.While I agree on CW events, in this specific case I think it's BD. <br>The canary release will use cloudwatch metrics to measure failures and you'd likey want an alarm (threshold) on them to notify developers via SNS.",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 401976,
            "date": "Sun 31 Oct 2021 17:08",
            "username": "MBJames",
            "content": "While I agree on CW events, in this specific case I think it's BD. <br>The canary release will use cloudwatch metrics to measure failures and you'd likey want an alarm (threshold) on them to notify developers via SNS.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 331038,
            "date": "Thu 28 Oct 2021 14:17",
            "username": "devopp",
            "content": "B and D for APIG",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 318952,
            "date": "Mon 18 Oct 2021 14:55",
            "username": "Spavanko",
            "content": "I agree with BD",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 317319,
            "date": "Sun 26 Sep 2021 13:28",
            "username": "WhyIronManWhyIronMan",
            "content": "If the team wants to limit the number of users affected by deployment bugs, Canary deployments should be one option besides blue green<br>I'll go with A) B)<br><br>Reference: https://aws.amazon.com/blogs/compute/performing-canary-deployments-for-service-integrations-with-amazon-api-gateway/<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/canary-release.htmlTypo I'll go with B, D",
            "upvote_count": "23",
            "selected_answers": ""
          },
          {
            "id": 326929,
            "date": "Wed 20 Oct 2021 02:44",
            "username": "WhyIronMan",
            "content": "Typo I'll go with B, D",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#256",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps engineer has been tasked with ensuring that all Amazon S3 buckets, except for those with the word \"public\" in the name, allow access only to authorized users utilizing S3 bucket policies. The security team wants to be notified when a bucket is created without the proper policy and for the policy to be automatically updated.<br>Which solutions will meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#256",
            "answers": [
              {
                "choice": "<p>A. Create a custom AWS Config rule that will trigger an AWS Lambda function when an S3 bucket is created or updated. Use the Lambda function to look for S3 buckets that should be private, but that do not have a bucket policy that enforces privacy. When such a bucket is found, invoke a remediation action and use Amazon SNS to notify the security team.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that triggers when an S3 bucket is created. Use an AWS Lambda function to determine whether the bucket should be private. If the bucket should be private, update the PublicAccessBlock configuration. Configure a second EventBridge (CloudWatch Events) rule to notify the security team using Amazon SNS when PutBucketPolicy is called.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Amazon S3 event notification that triggers when an S3 bucket is created that does not have the word \"public\" in the name. Define an AWS Lambda function as a target for this notification and use the function to apply a new default policy to the S3 bucket. Create an additional notification with the same filter and use Amazon SNS to send an email to the security team.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that triggers when a new object is created in a bucket that does not have the word \"public\" in the name. Target and use an AWS Lambda function to update the PublicAccessBlock configuration. Create an additional notification with the same filter and use Amazon SNS to send an email to the security team.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 256 discussion",
        "discusstion": [
          {
            "id": 316405,
            "date": "Wed 22 Sep 2021 05:12",
            "username": "WhyIronMan",
            "content": "The security team wants to be notified WHEN a bucket is CREATED without the proper policy and for the policy to be automatically updated.<br><br>So D) is wrong. And would be a hell to receive a notification every time an object is created in a bucket (even if the right policy is already in place).<br><br>I'll go with A)<br><br>Reference: https://docs.aws.amazon.com/config/latest/developerguide/notifications-for-AWS-Config.html",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 671845,
            "date": "Sun 18 Sep 2022 01:02",
            "username": "colinquek",
            "content": "AWS Config is the way to do this.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 546068,
            "date": "Sat 12 Feb 2022 20:38",
            "username": "blueorca",
            "content": "D is obviously wrong. The question clearly states bucket, not object.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 441021,
            "date": "Fri 29 Oct 2021 20:10",
            "username": "donny_sanjay",
            "content": "A IS THE ANSWER .D - triggers when a new object is created in a bucket while the question itself stats for bucket creation not the object",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 401977,
            "date": "Wed 27 Oct 2021 20:59",
            "username": "MBJames",
            "content": "This is a classic aws config use case, I'll choose A. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 392334,
            "date": "Wed 27 Oct 2021 14:38",
            "username": "nsei",
            "content": "I'll go with A https://aws.amazon.com/blogs/security/how-to-use-aws-config-to-monitor-for-and-respond-to-amazon-s3-buckets-allowing-public-access/<br>B & D cannot be correct because the question is asking to resolve the issue using bucket policies",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 328283,
            "date": "Thu 14 Oct 2021 10:56",
            "username": "sb333",
            "content": "The answer is B. ",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 326549,
            "date": "Mon 27 Sep 2021 15:26",
            "username": "yyyWhyIronManyyyRLai",
            "content": "I will go with BWhy don't notify using the same lambda function?The policy was updated, second actionB will only be triggered when a bucket is created. But A will cover resources (S3) whenever there is any configuration changed. So it is more comprehensive to prevent people changing existing S3 buckets with public access. Therefore I think A is better.",
            "upvote_count": "4112",
            "selected_answers": ""
          },
          {
            "id": 326934,
            "date": "Sat 02 Oct 2021 00:14",
            "username": "WhyIronManyyy",
            "content": "Why don't notify using the same lambda function?The policy was updated, second action",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 337650,
            "date": "Sun 17 Oct 2021 17:44",
            "username": "yyy",
            "content": "The policy was updated, second action",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 451653,
            "date": "Mon 01 Nov 2021 07:21",
            "username": "RLai",
            "content": "B will only be triggered when a bucket is created. But A will cover resources (S3) whenever there is any configuration changed. So it is more comprehensive to prevent people changing existing S3 buckets with public access. Therefore I think A is better.",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#258",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is developing a web application's infrastructure using AWS CloudFormation. The database engineering team maintains the database resources in a<br>CloudFormation template, and the software development team maintains the web application resources in a separate CloudFormation template. As the scope of the application grows, the software development team needs to use resources maintained by the database engineering team. However, both teams have their own review and lifecycle management processes that they want to keep. Both teams also require resource-level change-set reviews. The software development team would like to deploy changes to this template using their CI/CD pipeline.<br>Which solution will meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#258",
            "answers": [
              {
                "choice": "<p>A. Create a stack export from the database CloudFormation template and import those references into the web application CloudFormation template.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a CloudFormation nested stack to make cross-stack resource references and parameters available in both stacks.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a CloudFormation stack set to make cross-stack resource references and parameters available in both stacks.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create input parameters in the web application CloudFormation template and pass resource names and IDs from the database stack.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 258 discussion",
        "discusstion": [
          {
            "id": 328285,
            "date": "Tue 12 Oct 2021 07:19",
            "username": "sb333rathikumarRightAnswerssb333",
            "content": "I will go with A.  This is a case for using cross-stack references. Nested stacks have a different use case.https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.htmlYou got the reference right but the Answer wrong. Let's understand what answer C is all about - it says \\\"Create a CloudFormation stack set to make cross-stack resource references\\\" - it says \\\"Stack Set\\\" not StackSet\\\".<br>I would go with Ans C. Great reference. Thanks for posting. This gives the clear example of using cross-stack references for the use case of the question (Answer A), which is having different lifecycle and ownership of resources.",
            "upvote_count": "18413",
            "selected_answers": ""
          },
          {
            "id": 370980,
            "date": "Thu 14 Oct 2021 16:27",
            "username": "rathikumarRightAnswerssb333",
            "content": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.htmlYou got the reference right but the Answer wrong. Let's understand what answer C is all about - it says \\\"Create a CloudFormation stack set to make cross-stack resource references\\\" - it says \\\"Stack Set\\\" not StackSet\\\".<br>I would go with Ans C. Great reference. Thanks for posting. This gives the clear example of using cross-stack references for the use case of the question (Answer A), which is having different lifecycle and ownership of resources.",
            "upvote_count": "413",
            "selected_answers": ""
          },
          {
            "id": 545547,
            "date": "Fri 11 Feb 2022 23:31",
            "username": "RightAnswers",
            "content": "You got the reference right but the Answer wrong. Let's understand what answer C is all about - it says \\\"Create a CloudFormation stack set to make cross-stack resource references\\\" - it says \\\"Stack Set\\\" not StackSet\\\".<br>I would go with Ans C. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 376992,
            "date": "Mon 25 Oct 2021 21:02",
            "username": "sb333",
            "content": "Great reference. Thanks for posting. This gives the clear example of using cross-stack references for the use case of the question (Answer A), which is having different lifecycle and ownership of resources.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 317272,
            "date": "Mon 04 Oct 2021 09:10",
            "username": "1234567J",
            "content": "ans; B",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 545705,
            "date": "Sat 12 Feb 2022 09:04",
            "username": "blueorca",
            "content": "A, should be cross-stack import, nested stack is for embed a reusable template",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 379807,
            "date": "Thu 28 Oct 2021 12:09",
            "username": "kdpeiris",
            "content": "I will go with A<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.html#cross-stack",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 316381,
            "date": "Thu 30 Sep 2021 02:28",
            "username": "WhyIronManWhyIronMan",
            "content": "Reference: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/walkthrough-crossstackref.htmlI'll go with B",
            "upvote_count": "34",
            "selected_answers": ""
          },
          {
            "id": 326946,
            "date": "Sun 10 Oct 2021 00:51",
            "username": "WhyIronMan",
            "content": "I'll go with B",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#259",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An ecommerce company is receiving reports that its order history page is experiencing delays in reflecting the processing status of orders. The order processing system consists of an AWS Lambda function using reserved concurrency. The Lambda function processes order messages from an Amazon SQS queue and inserts processed orders into an Amazon DynamoDB table. The DynamoDB table has Auto Scaling enabled for read and write capacity.<br>Which actions will diagnose and resolve the delay? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#259",
            "answers": [
              {
                "choice": "<p>A. Check the ApproximateAgeOfOldestMessage metric for the SQS queue and increase the Lambda function concurrency limit.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Check the ApproximateAgeOfOldestMessage metric for the SQS queue and configure a redrive policy on the SQS queue.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Check the NumberOfMessagesSent metric for the SQS queue and increase the SQS queue visibility timeout.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Check the ThrottledWriteRequests metric for the DynamoDB table and increase the maximum write capacity units for the table's Auto Scaling policy.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Check the Throttles metric for the Lambda function and increase the Lambda function timeout.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 259 discussion",
        "discusstion": [
          {
            "id": 323779,
            "date": "Fri 24 Sep 2021 06:12",
            "username": "sb333",
            "content": "AD is the answer.<br><br>A: If the ApproximateAgeOfOldestMessages indicate that orders are remaining in the SQS queue for longer than expected, the reserved concurrency limit may be set too small to keep up with the number of orders entering the queue and is being throttled.<br><br>D: The DynamoDB table is using Auto Scaling. With Auto Scaling, you create a scaling policy that specifies whether you want to scale read capacity or write capacity (or both), and the minimum and maximum provisioned capacity unit settings for the table. The ThottledWriteRequests metric will indicate if there is a throttling issue on the DynamoDB table, which can be resolved by increasing the maximum write capacity units for the table's Auto Scaling policy.<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/AutoScaling.html",
            "upvote_count": "19",
            "selected_answers": ""
          },
          {
            "id": 317267,
            "date": "Mon 20 Sep 2021 07:36",
            "username": "1234567J",
            "content": "should be AC, reserved capacity can be abottleneck",
            "upvote_count": "15",
            "selected_answers": ""
          },
          {
            "id": 581071,
            "date": "Tue 05 Apr 2022 08:59",
            "username": "AdamSmith",
            "content": "A and D. <br><br>B is wrong because redrive policy is to handle messages that were not consumed successfully.<br>C is wrong because increasing visibility timeout only prevents messages from being consumed twice while being processed, the problem here is that messages are not being processed quickly enough, thus causing delay.<br>E.  Increasing the Lambda function timeout does not speed up the process.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 558788,
            "date": "Tue 01 Mar 2022 15:39",
            "username": "miketyz",
            "content": "AD is the answer.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 544736,
            "date": "Thu 10 Feb 2022 18:36",
            "username": "blueorca",
            "content": "AD for me, C would help but not resolve the issue.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 540360,
            "date": "Fri 04 Feb 2022 11:40",
            "username": "bobsmith2000",
            "content": "It's either lambda concurrency of ddb trotting.<br>So ApproximateAgeOfOldestMessage shows if lambda conc sufficient, and the one should check trotting metric.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 525935,
            "date": "Mon 17 Jan 2022 17:18",
            "username": "RightAnswersRightAnswersRightAnswersbobsmith2000",
            "content": "Ans A, B. <br>The key item in the question is - \\\"order history website is experiencing difficulties in reporting the processing status of purchases\\\". This means the requests are read requests and not write requests.C: InCorrect: NumberOfMessagesSent metric measures the number of messages enqueued in a 5-minute interval. SQS visilility timeout indicates the period of time during which Amazon SQS prevents other consumers from receiving and processing the message. There is no relationship between NumberOfMessagesSent metric and the visibility timeout period.<br>D: InCorrect: ThrottledWriteRequests metric for the DynamoDB table indicates the number of requests that are getting throttled while writing. Since the Order history will require read request, this is not applicable here.<br>E: InCorrect: Throttles metric for the Lambda function indicates The number of invocation requests that are throttled. This has no relation to Lambda function timeout.A: Correct: ApproximateAgeOfOldestMessage indicates how long the message has been sitting in the queue and not processed. So, increasing the concurrency limit will allow the the lambda to process more requets.<br>B: Correct: Since ApproximateAgeOfOldestMessage indicates how long the message is sitting in the queue - it is possible that the message is not getting consumed and blocking other messages. Configuring a dead-letter queue will help resolve this situation.The question states:<br>\\\"The Lambda function receives order messages from an Amazon SQS queue and processes them before inserting them into an Amazon DynamoDB database.\\\"<br>So there are writes as well.",
            "upvote_count": "1111",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 525937,
            "date": "Mon 17 Jan 2022 17:19",
            "username": "RightAnswersRightAnswersbobsmith2000",
            "content": "C: InCorrect: NumberOfMessagesSent metric measures the number of messages enqueued in a 5-minute interval. SQS visilility timeout indicates the period of time during which Amazon SQS prevents other consumers from receiving and processing the message. There is no relationship between NumberOfMessagesSent metric and the visibility timeout period.<br>D: InCorrect: ThrottledWriteRequests metric for the DynamoDB table indicates the number of requests that are getting throttled while writing. Since the Order history will require read request, this is not applicable here.<br>E: InCorrect: Throttles metric for the Lambda function indicates The number of invocation requests that are throttled. This has no relation to Lambda function timeout.A: Correct: ApproximateAgeOfOldestMessage indicates how long the message has been sitting in the queue and not processed. So, increasing the concurrency limit will allow the the lambda to process more requets.<br>B: Correct: Since ApproximateAgeOfOldestMessage indicates how long the message is sitting in the queue - it is possible that the message is not getting consumed and blocking other messages. Configuring a dead-letter queue will help resolve this situation.The question states:<br>\\\"The Lambda function receives order messages from an Amazon SQS queue and processes them before inserting them into an Amazon DynamoDB database.\\\"<br>So there are writes as well.",
            "upvote_count": "111",
            "selected_answers": ""
          },
          {
            "id": 525939,
            "date": "Mon 17 Jan 2022 17:19",
            "username": "RightAnswersbobsmith2000",
            "content": "A: Correct: ApproximateAgeOfOldestMessage indicates how long the message has been sitting in the queue and not processed. So, increasing the concurrency limit will allow the the lambda to process more requets.<br>B: Correct: Since ApproximateAgeOfOldestMessage indicates how long the message is sitting in the queue - it is possible that the message is not getting consumed and blocking other messages. Configuring a dead-letter queue will help resolve this situation.The question states:<br>\\\"The Lambda function receives order messages from an Amazon SQS queue and processes them before inserting them into an Amazon DynamoDB database.\\\"<br>So there are writes as well.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 552900,
            "date": "Mon 21 Feb 2022 15:10",
            "username": "bobsmith2000",
            "content": "The question states:<br>\\\"The Lambda function receives order messages from an Amazon SQS queue and processes them before inserting them into an Amazon DynamoDB database.\\\"<br>So there are writes as well.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 441033,
            "date": "Thu 28 Oct 2021 14:35",
            "username": "donny_sanjay",
            "content": "A and C for me",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 388849,
            "date": "Sat 23 Oct 2021 07:15",
            "username": "tosoth",
            "content": "AC<br>D is wrong, because \\\"order history page is experiencing delays\\\", obviously it has nothing to do with WriteRequests",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 333206,
            "date": "Mon 18 Oct 2021 06:14",
            "username": "sashszsashsz",
            "content": "To me: AEShould be AD",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 333216,
            "date": "Mon 18 Oct 2021 13:24",
            "username": "sashsz",
            "content": "Should be AD",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 316378,
            "date": "Mon 20 Sep 2021 05:16",
            "username": "WhyIronManMrCarter",
            "content": "CE looks right.<br>For Lambda:<br>Throttles =E2=80=93 The number of invocation requests that are throttled. When all function instances are processing requests and no concurrency is available to scale up, Lambda rejects additional requests with TooManyRequestsException. Throttled requests and other invocation errors don't count as Invocations or Errors.<br><br>for SQS: NumberOfMessagesSent. This metric measures the number of messages enqueued in a 5-minute interval. It can be useful for determining the health of the systems sending data to SQS. Watch this metric to make sure your producer doesn=E2=80=99t suddenly start sending more messages, or stop sending messages completely.Has nothing to do with timeout. I mean, how long do you think a lambda function takes to update a record in a dynamodb table? You obviously need more lambda's executing at the same since we have one lambda function per update to the dynamodb table. One update is adding one row to the dynamodb table which takes very little time for lambda to process. Answers are A and D",
            "upvote_count": "32",
            "selected_answers": ""
          },
          {
            "id": 361213,
            "date": "Tue 19 Oct 2021 00:37",
            "username": "MrCarter",
            "content": "Has nothing to do with timeout. I mean, how long do you think a lambda function takes to update a record in a dynamodb table? You obviously need more lambda's executing at the same since we have one lambda function per update to the dynamodb table. One update is adding one row to the dynamodb table which takes very little time for lambda to process. Answers are A and D",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#260",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps engineer is implementing governance controls for a company that requires its infrastructure to be housed within the United States. The engineer must restrict which Regions can be used, and ensure an alert is sent as soon as possible if any activity outside the governance policy takes place. The controls should be automatically enabled on any new Region outside the United States.<br>Which combination of actions will meet these requirements? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#260",
            "answers": [
              {
                "choice": "<p>A. Create an AWS Organizations SCP that denies access to all non-global services in non-US Regions. Attach the policy to the root of the organization.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure AWS CloudTrail to send logs to Amazon CloudWatch Logs and enable it for all Regions. Use a CloudWatch Logs metric filter to send an alert on any service activity in non-US Regions.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use an AWS Lambda function that checks for AWS service activity and deploy it to all Regions. Write an Amazon CloudWatch Events rule that runs the Lambda function every hour, sending an alert if activity is found in a non-US Region.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use an AWS Lambda function to query Amazon Inspector to look for service activity in non-US Regions and send alerts if any activity is found.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Write an SCP using the aws:RequestedRegion condition key limiting access to US Regions. Apply the policy to all users, groups, and roles.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 260 discussion",
        "discusstion": [
          {
            "id": 323648,
            "date": "Wed 29 Sep 2021 05:21",
            "username": "sb333WhyIronMan",
            "content": "AB is the correct answer. A is correct in that you need to provide exemptions for global services that have endpoints that are physically hosted in the required regions (using NotAction for those exemptions). You also don't want to apply to all roles, either, such as AWS ControlTower roles (using a Condition and \\\"ArnNotlike\\\" to exclude needed roles). https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples.htmlI agree, thanks!",
            "upvote_count": "154",
            "selected_answers": ""
          },
          {
            "id": 326964,
            "date": "Mon 25 Oct 2021 11:57",
            "username": "WhyIronMan",
            "content": "I agree, thanks!",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 331051,
            "date": "Thu 28 Oct 2021 22:50",
            "username": "devopp",
            "content": "A B for me",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 317256,
            "date": "Mon 27 Sep 2021 07:26",
            "username": "1234567JWhyIronManWhyIronMan",
            "content": "its actually BE<br>https://forums.aws.amazon.com/thread.jspa?threadID285787About E)\\\"Apply the policy to all users, groups, and roles\\\" it should be \\\"Attach the policy to the root of the organization\\\".<br>This makes E wrongThe controls should be automatically enabled on any new Region outside the United States.",
            "upvote_count": "221",
            "selected_answers": ""
          },
          {
            "id": 326962,
            "date": "Sun 10 Oct 2021 23:33",
            "username": "WhyIronMan",
            "content": "About E)\\\"Apply the policy to all users, groups, and roles\\\" it should be \\\"Attach the policy to the root of the organization\\\".<br>This makes E wrong",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 326956,
            "date": "Sun 03 Oct 2021 10:07",
            "username": "WhyIronMan",
            "content": "The controls should be automatically enabled on any new Region outside the United States.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 316373,
            "date": "Sun 26 Sep 2021 01:33",
            "username": "WhyIronManWhyIronManshwetapathak2301",
            "content": "BC looks good.<br>A and E does not make sense because the `aws:RequestedRegion` is avaiable for IAM policies only<br>D does not workI changed my mind, I'll go with A, B (combination)<br><br>A makes sense: https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples.html#example-scp-deny-region<br><br>C is wrong because you can have only one lambda function to do thisplease dont comment when you are not sure!! its very confusing",
            "upvote_count": "143",
            "selected_answers": ""
          },
          {
            "id": 326963,
            "date": "Thu 21 Oct 2021 21:09",
            "username": "WhyIronManshwetapathak2301",
            "content": "I changed my mind, I'll go with A, B (combination)<br><br>A makes sense: https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples.html#example-scp-deny-region<br><br>C is wrong because you can have only one lambda function to do thisplease dont comment when you are not sure!! its very confusing",
            "upvote_count": "43",
            "selected_answers": ""
          },
          {
            "id": 400904,
            "date": "Thu 04 Nov 2021 20:33",
            "username": "shwetapathak2301",
            "content": "please dont comment when you are not sure!! its very confusing",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#261",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Due to compliance regulations, management has asked you to provide a system that allows for cost-effective long-term storage of your application logs and provides a way for support staff to view the logs more quickly. Currently your log system archives logs automatically to Amazon S3 every hour, and support staff must wait for these logs to appear in Amazon S3, because they do not currently have access to the systems to view live logs.<br>What method should you use to become compliant while also providing a faster way for support staff to have access to logs?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#261",
            "answers": [
              {
                "choice": "<p>A. Update Amazon S3 lifecycle policies to archive old logs to Amazon Glacier, and add a new policy to push all log entries to Amazon SQS for ingestion by the support team<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Update Amazon S3 lifecycle policies to archive old logs to Amazon Glacier, and use or write a service to also stream your application logs to CloudWatch Logs.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Update Amazon Glacier lifecycle policies to pull new logs from Amazon S3, and in the Amazon EC2 console, enable the CloudWatch Logs Agent on all of your application servers.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Update Amazon S3 lifecycle policies to archive old logs to Amazon Glacier. key can be different from the tableEnable Amazon S3 partial uploads on your Amazon S3 bucket, and trigger an Amazon SNS notification when a partial upload occurs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use or write a service to stream your application logs to CloudWatch Logs. Use an Amazon Elastic Map Reduce cluster to live stream your logs from CloudWatch Logs for ingestion by the support team, and create a Hadoop job to push the logs to S3 in five-minute chunks.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 261 discussion",
        "discusstion": [
          {
            "id": 332928,
            "date": "Tue 12 Oct 2021 05:12",
            "username": "devops_awstgv",
            "content": "It looks like on outdated questions from 261 till 528. The questions from 2017 and 2018 years. Just for FYIthanks a lot! It saves me a lot of time<br>Also, something that I've noticed while browsing the questions between 261 to 536 is that 350+ questions are more appropriate for an Associate certification (very simple and short) and as you said, a bit outdated.",
            "upvote_count": "131",
            "selected_answers": ""
          },
          {
            "id": 417990,
            "date": "Fri 22 Oct 2021 14:49",
            "username": "tgv",
            "content": "thanks a lot! It saves me a lot of time<br>Also, something that I've noticed while browsing the questions between 261 to 536 is that 350+ questions are more appropriate for an Associate certification (very simple and short) and as you said, a bit outdated.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 326968,
            "date": "Mon 20 Sep 2021 22:41",
            "username": "WhyIronMan",
            "content": "I'll go with B<br><br>All questions are a little weird but B makes more sense",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 360048,
            "date": "Fri 22 Oct 2021 14:01",
            "username": "envest",
            "content": "important is whether questions fit into the new sheme startin 2020. some questions are ok, but I rather pay at VUE. ",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#262",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You want to securely distribute credentials for your Amazon RDS instance to your fleet of web server instances. The credentials are stored in a file that is controlled by a configuration management system.<br>How do you securely deploy the credentials in an automated manner across the fleet of web server instances, which can number in the hundreds, while retaining the ability to roll back if needed?<br></p>",
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
                "choice": "<p>A. Store your credential files in an Amazon S3 bucket. Use Amazon S3 server-side encryption on the credential files. Have a scheduled job that pulls down the credential files into the instances every 10 minutes.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Store the credential files in your version-controlled repository with the rest of your code. Have a post-commit action in version control that kicks off a job in your continuous integration system which securely copses the new credential files to all web server instances.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Insert credential files into user data and use an instance lifecycle policy to periodically refresh the file from the user data.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Keep credential files as a binary blob in an Amazon RDS MySQL DB instance, and have a script on each Amazon EC2 instance that pulls the files down from the RDS instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Store the credential files in your version-controlled repository with the rest of your code. Use a parallel file copy program to send the credential files from your local machine to the Amazon EC2 instances.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 262 discussion",
        "discusstion": [
          {
            "id": 504094,
            "date": "Sat 18 Dec 2021 09:21",
            "username": "GreatFunana",
            "content": "Ancient question. This WAS right at some point, but you'd get fired for doing this now.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 400914,
            "date": "Tue 02 Nov 2021 23:05",
            "username": "NNHAN",
            "content": "waste my time!",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 331055,
            "date": "Wed 27 Oct 2021 13:14",
            "username": "devopp",
            "content": "agree answer here is None of the Above (Param Store/AWS Secrets Manager)",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 326971,
            "date": "Sun 26 Sep 2021 20:37",
            "username": "WhyIronMan",
            "content": "What a question.... what an answers...<br>So if you need to rollback you need to wait more 10 minutes haha<br>what a security...",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#263",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are using a configuration management system to manage your Amazon EC2 instances. On your Amazon EC2 Instances, you want to store credentials for connecting to an Amazon RDS DB instance.<br>How should you securely store these credentials?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#263",
            "answers": [
              {
                "choice": "<p>A. Give the Amazon EC2 instances an IAM role that allows read access to a private Amazon S3 bucket. Store a file with database credentials in the Amazon S3 bucket. Have your configuration management system pull the file from the bucket when it is needed.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Launch an Amazon EC2 instance and use the configuration management system to bootstrap the instance with the Amazon RDS DB credentials. Create an AMI from this instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Store the Amazon RDS DB credentials in Amazon EC2 user data. Import the credentials into the Instance on boot.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Assign an IAM role to your Amazon RDS instance, and use this IAM role to access the Amazon RDS DB from your Amazon EC2 instances.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Store your credentials in your version control system, in plaintext. Check out a copy of your credentials from the version control system on boot. Use Amazon EBS encryption on the volume storing the Amazon RDS DB credentials.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 263 discussion",
        "discusstion": [
          {
            "id": 326973,
            "date": "Thu 04 Nov 2021 10:25",
            "username": "WhyIronMan",
            "content": "what an answer...",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 671872,
            "date": "Sun 18 Sep 2022 02:09",
            "username": "colinquek",
            "content": "Erm D is the most obvious?",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 648368,
            "date": "Thu 18 Aug 2022 11:27",
            "username": "hubekpeter",
            "content": "B,c,e is against security best practice. D - iam should be attached to ec2 instead of Rds the other way around. A is the only meaningful option.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 644435,
            "date": "Tue 09 Aug 2022 11:55",
            "username": "criszhubekpeter",
            "content": "If your application is running on Amazon EC2, then you can use your EC2 instance profile credentials to access the database. So the answer is D.  You don't need to store database passwords on your instance. https://aws.amazon.com/premiumsupport/knowledge-center/users-connect-rds-iam/Yes but the iam role needs to be attached on ec2 not on the rds!!!",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 648365,
            "date": "Thu 18 Aug 2022 11:23",
            "username": "hubekpeter",
            "content": "Yes but the iam role needs to be attached on ec2 not on the rds!!!",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 644434,
            "date": "Tue 09 Aug 2022 11:54",
            "username": "crisz",
            "content": "If your application is running on Amazon EC2, then you can use your EC2 instance profile credentials to access the database. You don't need to store database passwords on your instance. https://aws.amazon.com/premiumsupport/knowledge-center/users-connect-rds-iam/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 618292,
            "date": "Sat 18 Jun 2022 16:28",
            "username": "gr3y_matter",
            "content": "well none of those options are recommended, but \\\"A\\\" makes sense among all. There is 2 way to access s3 buckets data securely -<br>1) Apply an IAM role to instance<br>2) Apply Bucket Policy to bucket",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 610115,
            "date": "Wed 01 Jun 2022 12:44",
            "username": "nqthien041292",
            "content": "A no makes sense because saving credential in S3 is not secure. Vote for B. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 520735,
            "date": "Mon 10 Jan 2022 09:19",
            "username": "Bennycy",
            "content": "D<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 508908,
            "date": "Sat 25 Dec 2021 01:18",
            "username": "szl0144",
            "content": "A is not the best, but it's the best one among the choices.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 508599,
            "date": "Fri 24 Dec 2021 17:44",
            "username": "sg0206",
            "content": "I will go with D option",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 502074,
            "date": "Wed 15 Dec 2021 12:19",
            "username": "devonqo",
            "content": "A -<br>Well I think we are missing an option with EC2 Instance profile with permissions for RDS attached to an EC2... but since it's not there I would go with A as the most logical answer.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 477963,
            "date": "Sun 14 Nov 2021 07:25",
            "username": "eji",
            "content": "i think the possible answer is A, because if D we should assign an IAM role to EC2 instance not to RDS Instance, if C we should not store the credentials in userdata because its cannot be encrtypted in userdata",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 476519,
            "date": "Thu 11 Nov 2021 22:13",
            "username": "gvfwdfdsaddsdsds",
            "content": "A is right",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 400938,
            "date": "Sun 07 Nov 2021 03:52",
            "username": "NNHAN",
            "content": "D is right",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#264",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your company has developed a web application and is hosting it in an Amazon S3 bucket configured for static website hosting. The application is using the AWS<br>SDK for JavaScript in the browser to access data stored in an Amazon DynamoDB table.<br>How can you ensure that API keys for access to your data in DynamoDB are kept secure?<br></p>",
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
                "choice": "<p>A. Create an Amazon S3 role in IAM with access to the specific DynamoDB tables, and assign it to the bucket hosting your website.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure S3 bucket tags with your AWS access keys for your bucket hosing your website so that the application can query them for access.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure a web identity federation role within IAM to enable access to the correct DynamoDB resources and retrieve temporary credentials.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Store AWS keys in global variables within your application and configure the application to use these credentials when making requests.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 264 discussion",
        "discusstion": [
          {
            "id": 404372,
            "date": "Fri 29 Oct 2021 18:15",
            "username": "AJBA",
            "content": "C<br>https://aws.amazon.com/blogs/startups/dynamic-websites-using-the-aws-sdk-for-javascript-in-the-browser/",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 339458,
            "date": "Sun 03 Oct 2021 20:06",
            "username": "twanc",
            "content": "ans: C",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 326985,
            "date": "Wed 29 Sep 2021 18:47",
            "username": "WhyIronManKanishk120gr3y_matter",
            "content": "What a answer...I'll go with BHey..are these latest questions or the old ones? Are they even worth it?Hey Kanishk, nowadays you will get \\\"Multi Service (doesn't mean MCQ/MSQ)\\\" question mostly, where in the question you will see many services are used together.",
            "upvote_count": "231",
            "selected_answers": ""
          },
          {
            "id": 336346,
            "date": "Sat 02 Oct 2021 00:18",
            "username": "Kanishk120gr3y_matter",
            "content": "Hey..are these latest questions or the old ones? Are they even worth it?Hey Kanishk, nowadays you will get \\\"Multi Service (doesn't mean MCQ/MSQ)\\\" question mostly, where in the question you will see many services are used together.",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 618279,
            "date": "Sat 18 Jun 2022 15:46",
            "username": "gr3y_matter",
            "content": "Hey Kanishk, nowadays you will get \\\"Multi Service (doesn't mean MCQ/MSQ)\\\" question mostly, where in the question you will see many services are used together.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#265",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You need to implement A/B deployments for several multi-tier web applications. Each of them has its Individual infrastructure: Amazon Elastic Compute Cloud<br>(EC2) front-end servers, Amazon ElastiCache clusters, Amazon Simple Queue Service (SQS) queues, and Amazon Relational Database (RDS) Instances. Which combination of services would give you the ability to control traffic between different deployed versions of your application?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#265",
            "answers": [
              {
                "choice": "<p>A. Create one AWS Elastic Beanstalk application and all AWS resources (using configuration files inside the application source bundle) for each web application. New versions would be deployed a-eating Elastic Beanstalk environments and using the Swap URLs feature.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Using AWS CloudFormation templates, create one Elastic Beanstalk application and all AWS resources (in the same template) for each web application. New versions would be deployed using AWS CloudFormation templates to create new Elastic Beanstalk environments, and traffic would be balanced between them using weighted Round Robin (WRR) records in Amazon Route53.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Using AWS CloudFormation templates, create one Elastic Beanstalk application and all AWS resources (in the same template) for each web application. New versions would be deployed updating a parameter on the CloudFormation template and passing it to the cfn-hup helper daemon, and traffic would be balanced between them using Weighted Round Robin (WRR) records in Amazon Route 53.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create one Elastic Beanstalk application and all AWS resources (using configuration files inside the application source bundle) for each web application. New versions would be deployed updating the Elastic Beanstalk application version for the current Elastic Beanstalk environment.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 265 discussion",
        "discusstion": [
          {
            "id": 514801,
            "date": "Sun 02 Jan 2022 04:15",
            "username": "nqthien041292",
            "content": "Vote B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 326988,
            "date": "Mon 18 Oct 2021 09:56",
            "username": "WhyIronMan",
            "content": "I'll go with B",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#266",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You work for an insurance company and are responsible for the day-to-day operations of your company's online quote system used to provide insurance quotes to members of the public. Your company wants to use the application logs generated by the system to better understand customer behavior. Industry, regulations also require that you retain all application logs for the system indefinitely in order to investigate fraudulent claims in the future. You have been tasked with designing a log management system with the following requirements:<br>- All log entries must be retained by the system, even during unplanned instance failure.<br>- The customer insight team requires immediate access to the logs from the past seven days.<br>- The fraud investigation team requires access to all historic logs, but will wait up to 24 hours before these logs are available.<br>How would you meet these requirements in a cost-effective manner? (Choose three.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BCD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#266",
            "answers": [
              {
                "choice": "<p>A. Configure your application to write logs to the instance's ephemeral disk, because this storage is free and has good write performance. Create a script that moves the logs from the instance to Amazon 53 once an hour.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Write a script that is configured to be executed when the instance is stopped or terminated and that will upload any remaining logs on the instance to Amazon S3.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Amazon S3 lifecycle configuration to move log files from Amazon S3 to Amazon Glacier after seven days.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure your application to write logs to the instance's default Amazon EBS boot volume, because this storage already exists. Create a script that moves the logs from the instance to Amazon 53 once an hour.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Configure your application to write logs to a separate Amazon EBS volume with the \"delete on termination\" field set to false. Create a script that moves the logs from the instance to Amazon S3 once an hour.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F. Create a housekeeping script that runs on a T2 micro instance managed by an Auto Scaling group for high availability. The script uses the AWS API to identify any unattached Amazon EBS volumes containing log files. Your housekeeping script will mount the Amazon EBS volume, upload all logs to Amazon S3, and then delete the volume.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 266 discussion",
        "discusstion": [
          {
            "id": 619806,
            "date": "Tue 21 Jun 2022 14:31",
            "username": "cox1960",
            "content": "\\\"most cost-effective\\\" means no extra EBS volume that never gets deleted (E) nor an extra EC2 instance running at all time (F). Answer A would be ok if instance stores was always present which is not the case.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BCD"
          },
          {
            "id": 331063,
            "date": "Wed 29 Sep 2021 11:25",
            "username": "devopp",
            "content": "I got C E F",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 326992,
            "date": "Sat 25 Sep 2021 02:38",
            "username": "WhyIronMan",
            "content": "I'll go with CEF",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#267",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have an application running on Amazon EC2 in an Auto Scaling group. Instances are being bootstrapped dynamically, and the bootstrapping takes over 15 minutes to complete. You find that instances are reported by Auto Scaling as being In Service before bootstrapping has completed. You are receiving application alarms related to new instances before they have completed bootstrapping, which is causing confusion. You find the cause: your application monitoring tool is polling the Auto Scaling Service API for instances that are In Service, and creating alarms for new previously unknown instances.<br>Which of the following will ensure that new instances are not added to your application monitoring tool before bootstrapping is completed?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#267",
            "answers": [
              {
                "choice": "<p>A. Create an Auto Scaling group lifecycle hook to hold the instance in a pending: wait state until your bootstrapping is complete. Once bootstrapping is complete, notify Auto Scaling to complete the lifecycle hook and move the instance into a pending: complete state.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use the default Amazon CloudWatch application metrics to monitor your application's health. Configure an Amazon SNS topic to send these CloudWatch alarms to the correct recipients.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Tag all instances on launch to identify that they are in a pending state. Change your application monitoring tool to look for this tag before adding new instances, and the use the Amazon API to set the instance state to 'pending' until bootstrapping is complete.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Increase the desired number of instances in your Auto Scaling group configuration to reduce the time it takes to bootstrap future instances.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 267 discussion",
        "discusstion": [
          {
            "id": 332807,
            "date": "Mon 04 Oct 2021 08:06",
            "username": "rnc21lgu",
            "content": "go with AAgree, A",
            "upvote_count": "71",
            "selected_answers": ""
          },
          {
            "id": 353686,
            "date": "Wed 03 Nov 2021 12:23",
            "username": "lgu",
            "content": "Agree, A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 711840,
            "date": "Sat 05 Nov 2022 16:00",
            "username": "RightAnswers",
            "content": "Ans A<br>Auto Scaling lifecycle hook",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#268",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have been given a business requirement to retain log files for your application for 10 years. You need to regularly retrieve the most recent logs for troubleshooting. Your logging system must be cost-effective, given the large volume of logs.<br>What technique should you use to meet these requirements?<br></p>",
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
                "choice": "<p>A. Store your log in Amazon CloudWatch Logs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Store your logs in Amazon Glacier.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Store your logs in Amazon S3, and use lifecycle policies to archive to Amazon Glacier.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Store your logs in HDFS on an Amazon EMR cluster.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Store your logs on Amazon EBS, and use Amazon EBS snapshots to archive them.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 268 discussion",
        "discusstion": [
          {
            "id": 353687,
            "date": "Wed 29 Sep 2021 14:07",
            "username": "lguMrCarter",
            "content": "After question 260, it looks like old or poor questions..OK, thanks for the info",
            "upvote_count": "61",
            "selected_answers": ""
          },
          {
            "id": 361254,
            "date": "Sat 02 Oct 2021 05:45",
            "username": "MrCarter",
            "content": "OK, thanks for the info",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 361255,
            "date": "Sun 31 Oct 2021 20:55",
            "username": "MrCarterokida",
            "content": "Outdated Q: Answer nowadays would be A as CloudWatch logs are kept indefinitelyCloudWatch is not cost-effective comparing to S3. So C is correct.",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 465467,
            "date": "Thu 04 Nov 2021 01:33",
            "username": "okida",
            "content": "CloudWatch is not cost-effective comparing to S3. So C is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 332808,
            "date": "Sun 26 Sep 2021 00:17",
            "username": "rnc21",
            "content": "I go with C",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#269",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You work for a startup that has developed a new photo-sharing application for mobile devices. Over recent months, your application has increased in popularity; this has resulted in a decrease in the performance of the application clue to the increased load. Your application has a two-tier architecture that is composed of an<br>Auto Scaling PHP application tier and a MySQL RDS instance initially deployed with AWS CloudFormation. Your Auto Scaling group has a min value of 4 and a max value of 8. The desired capacity is now at 8 because of the high CPU utilization of the instances. After some analysis, you are confident that the performance issues stem from a constraint in CPU capacity, although memory utilization remains low. You therefore decide to move from the general-purpose M3 instances to the compute-optimized C3 instances.<br>How would you deploy this change while minimizing any interruption to your end users?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#269",
            "answers": [
              {
                "choice": "<p>A. Sign into the AWS Management Console, copy the old launch configuration, and create a new launch configuration that specifies the C3 instances. Update the Auto Scaling group with the new launch configuration. Auto Scaling will then update the instance type of all running instances.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Sign into the AWS Management Console, and update the existing launch configuration with the new C3 instance type. Add an UpdatePolicy attribute to your Auto Scaling group that specifies AutoScalingRollingUpdate.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Update the launch configuration specified in the AWS CloudFormation template with the new C3 instance type. Run a stack update with the new template. Auto Scaling will then update the instances with the new instance type.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Update the launch configuration specified in the AWS CloudFormation template with the new C3 instance type. Also add an UpdatePolicy attribute to your Auto Scaling group that specifies AutoScalingRollingUpdate. Run a stack update with the new template.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 269 discussion",
        "discusstion": [
          {
            "id": 332809,
            "date": "Thu 14 Oct 2021 20:22",
            "username": "rnc21SonamDhingracox1960",
            "content": "agree. go with Dhow can you update a launch configuration?<br>A is the right answer..D, \\\"to force a rolling update, change the logical ID of the launch configuration resource, and then update the stack and any references pointing to the original logic ID (such as the associated Auto Scaling group). CloudFormation triggers a rolling update on the Auto Scaling group, replacing all instances.\\\" https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html",
            "upvote_count": "331",
            "selected_answers": ""
          },
          {
            "id": 543901,
            "date": "Wed 09 Feb 2022 17:10",
            "username": "SonamDhingracox1960",
            "content": "how can you update a launch configuration?<br>A is the right answer..D, \\\"to force a rolling update, change the logical ID of the launch configuration resource, and then update the stack and any references pointing to the original logic ID (such as the associated Auto Scaling group). CloudFormation triggers a rolling update on the Auto Scaling group, replacing all instances.\\\" https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 613414,
            "date": "Wed 08 Jun 2022 19:15",
            "username": "cox1960",
            "content": "D, \\\"to force a rolling update, change the logical ID of the launch configuration resource, and then update the stack and any references pointing to the original logic ID (such as the associated Auto Scaling group). CloudFormation triggers a rolling update on the Auto Scaling group, replacing all instances.\\\" https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 331374,
            "date": "Sun 26 Sep 2021 09:55",
            "username": "BKhan",
            "content": "Ans is D<br>https://cloudonaut.io/rolling-update-with-aws-cloudformation/",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#270",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have been tasked with implementing an automated data backup solution for your application servers that run on Amazon EC2 with Amazon EBS volumes.<br>You want to use a distributed data store for your backups to avoid single points of failure and to increase the durability of the data. Daily backups should be retained for 30 days so that you can restore data within an hour.<br>How can you implement this through a script that a scheduling daemon runs daily on the application servers?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#270",
            "answers": [
              {
                "choice": "<p>A. Write the script to call the ec2-create-volume API, tag the Amazon EBS volume with the current date time group, and copy backup data to a second Amazon EBS volume. Use the ec2-describe-volumes API to enumerate existing backup volumes. Call the ec2-delete-volume API to prune backup volumes that are tagged with a date-tine group older than 30 days.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Write the script to call the Amazon Glacier upload archive API, and tag the backup archive with the current date-time group. Use the list vaults API to enumerate existing backup archives Call the delete vault API to prune backup archives that are tagged with a date-time group older than 30 days.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Write the script to call the ec2-create-snapshot API, and tag the Amazon EBS snapshot with the current date-time group. Use the ec2-describe-snapshot API to enumerate existing Amazon EBS snapshots. Call the ec2-delete-snapShot API to prune Amazon EBS snapshots that are tagged with a datetime group older than 30 days.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Write the script to call the ec2-create-volume API, tag the Amazon EBS volume with the current date-time group, and use the ec2-copy-snapshot API to back up data to the new Amazon EBS volume. Use the ec2- describe-snapshot API to enumerate existing backup volumes. Call the ec2-delete-snaphot API to prune backup Amazon EBS volumes that are tagged with a date-time group older than 30 days.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 270 discussion",
        "discusstion": [
          {
            "id": 510860,
            "date": "Tue 28 Dec 2021 07:54",
            "username": "I_heart_shuffle_girls",
            "content": "C looks correct to me.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 401020,
            "date": "Wed 27 Oct 2021 03:43",
            "username": "NNHAN",
            "content": "too old question",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 332810,
            "date": "Wed 13 Oct 2021 22:02",
            "username": "rnc21",
            "content": "go with C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 331380,
            "date": "Tue 21 Sep 2021 05:09",
            "username": "BKhan",
            "content": "Ans is C:<br>The words \\\"Distributed\\\" and \\\"durable\\\" in question mean we should use S3 and snapshot stores in S3.",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#271",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your application uses CloudFormation to orchestrate your application's resources. During your testing phase before the application went live, your Amazon RDS instance type was changed and caused the instance to be re-created, resulting In the loss of test data.<br>How should you prevent this from occurring in the future?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#271",
            "answers": [
              {
                "choice": "<p>A. Within the AWS CloudFormation parameter with which users can select the Amazon RDS instance type, set AllowedValues to only contain the current instance type.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use an AWS CloudFormation stack policy to deny updates to the instance. Only allow UpdateStack permission to IAM principals that are denied SetStackPolicy.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. In the AWS CloudFormation template, set the AWS::RDS::DBInstance's DBlnstanceClass property to be read-only.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Subscribe to the AWS CloudFormation notification \"BeforeResourceUpdate,\" and call CancelStackUpdate if the resource identified is the Amazon RDS instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. In the AWS CloudFormation template, set the DeletionPolicy of the AWS::RDS::DBInstance's DeletionPolicy property to \"Retain.\"<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 271 discussion",
        "discusstion": [
          {
            "id": 331385,
            "date": "Tue 05 Oct 2021 03:05",
            "username": "BKhanbobsmith2000hubekpeter",
            "content": "Ans is E:<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.htmlRead it thoroughly:<br>\\\"This capability doesn't apply to resources whose physical instance is replaced during stack update operations. For example, if you edit a resource's properties such that CloudFormation replaces that resource during a stack update.\\\"<br><br>It's B, no-brainerI=E2=80=99ll choose E. . First changing instance class doesn=E2=80=99t case a data loss, it will only reboot the data. Second. This way it will preserve a snapshot which can be easily restored. Iam abac policy is hard to implement correctly, what if there=E2=80=99s a different team who should be able to do such an activity. You end up messing with iam roles which is not a trivial task to implement correctly in organization. From the docs: The default policy is Snapshot for AWS::RDS::DBCluster resources and for AWS::RDS::DBInstance resources that don't specify the DBClusterIdentifier property.",
            "upvote_count": "1031",
            "selected_answers": ""
          },
          {
            "id": 543776,
            "date": "Wed 09 Feb 2022 14:23",
            "username": "bobsmith2000hubekpeter",
            "content": "Read it thoroughly:<br>\\\"This capability doesn't apply to resources whose physical instance is replaced during stack update operations. For example, if you edit a resource's properties such that CloudFormation replaces that resource during a stack update.\\\"<br><br>It's B, no-brainerI=E2=80=99ll choose E. . First changing instance class doesn=E2=80=99t case a data loss, it will only reboot the data. Second. This way it will preserve a snapshot which can be easily restored. Iam abac policy is hard to implement correctly, what if there=E2=80=99s a different team who should be able to do such an activity. You end up messing with iam roles which is not a trivial task to implement correctly in organization. From the docs: The default policy is Snapshot for AWS::RDS::DBCluster resources and for AWS::RDS::DBInstance resources that don't specify the DBClusterIdentifier property.",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 650946,
            "date": "Tue 23 Aug 2022 20:16",
            "username": "hubekpeter",
            "content": "I=E2=80=99ll choose E. . First changing instance class doesn=E2=80=99t case a data loss, it will only reboot the data. Second. This way it will preserve a snapshot which can be easily restored. Iam abac policy is hard to implement correctly, what if there=E2=80=99s a different team who should be able to do such an activity. You end up messing with iam roles which is not a trivial task to implement correctly in organization. From the docs: The default policy is Snapshot for AWS::RDS::DBCluster resources and for AWS::RDS::DBInstance resources that don't specify the DBClusterIdentifier property.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 543780,
            "date": "Wed 09 Feb 2022 14:24",
            "username": "bobsmith2000",
            "content": "It's B because Deletion policy doesn't apply in this case<br>\\\"This capability doesn't apply to resources whose physical instance is replaced during stack update operations. For example, if you edit a resource's properties such that CloudFormation replaces that resource during a stack update.\\\"<br><br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 532463,
            "date": "Tue 25 Jan 2022 23:34",
            "username": "RightAnswers",
            "content": "Ans B<br>After you set a stack policy, all of the resources in the stack are protected by default. To allow updates on specific resources, you specify an explicit Allow statement for those resources in your stack policy. You can define only one stack policy per stack, but, you can protect multiple resources within a single policy. A stack policy applies to all AWS CloudFormation users who attempt to update the stack. You can't associate different stack policies with different users.<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#272",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your company develops a variety of web applications using many platforms and programming languages with different application dependencies. Each application must be developed and deployed quickly and be highly evadable to satisfy your business requirements.<br>Which of the following methods should you use to deploy these applications rapidly?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#272",
            "answers": [
              {
                "choice": "<p>A. Develop the applications in Docker containers, and then deploy them to Elastic Beanstalk environments with Auto Scaling and Elastic Load Balancing.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use the AWS CloudFormation Docker import service to build and deploy the applications with high availability in multiple Availability Zones.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Develop each application's code in DynamoDB, and then use hooks to deploy it to Elastic Beanstalk environments with Auto Scaling and Elastic Load Balancing.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Store each application's code in a Git repository, develop custom package repository managers for each application's dependencies, and deploy to AWS OpsWorks in multiple Availability Zones.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 272 discussion",
        "discusstion": [
          {
            "id": 331388,
            "date": "Sat 25 Sep 2021 00:15",
            "username": "BKhan",
            "content": "Ans is A:<br><br>Docker is perfect for installing applications with different languages and dependencies and ElasticBeanstalk deploys the Apps with less time and less expertise",
            "upvote_count": "5",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#273",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have a large number of web servers in an Auto Scaling group behind a load balancer. On an hourly basis, you want to filter and process the logs to collect data on unique visitors, and then put that data in a durable data store in order to run reports. Web servers in the Auto Scaling group are constantly launching and terminating based on your scaling policies, but you do not want to lose any of the log data from these servers during a stop/termination initiated by a user or by<br>Auto Scaling.<br>What two approaches will meet these requirements? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#273",
            "answers": [
              {
                "choice": "<p>A. Install an Amazon Cloudwatch Logs Agent on every web server during the bootstrap process. Create a CloudWatch log group and define Metric Filters to create custom metrics that track unique visitors from the streaming web server logs. Create a scheduled task on an Amazon EC2 instance that runs every hour to generate a new report based on the Cloudwatch custom metrics.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. On the web servers, create a scheduled task that executes a script to rotate and transmit the logs to Amazon Glacier. Ensure that the operating system shutdown procedure triggers a logs transmission when the Amazon EC2 instance is stopped/terminated. Use Amazon Data Pipeline to process the data in Amazon Glacier and run reports every hour.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. On the web servers, create a scheduled task that executes a script to rotate and transmit the logs to an Amazon S3 bucket. Ensure that the operating system shutdown procedure triggers a logs transmission when the Amazon EC2 instance is stopped/terminated. Use AWS Data Pipeline to move log data from the Amazon S3 bucket to Amazon Redshift In order to process and run reports every hour.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Install an AWS Data Pipeline Logs Agent on every web server during the bootstrap process. Create a log group object in AWS Data Pipeline, and define Metric Filters to move processed log data directly from the web servers to Amazon Redshift and run reports every hour.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 273 discussion",
        "discusstion": [
          {
            "id": 331394,
            "date": "Mon 25 Oct 2021 19:07",
            "username": "BKhan",
            "content": "Ans is A, C:<br>B and D cannot be right.<br>B: because of Glacier.<br>D: because no such thing as =E2=80=9CData pipeline logs agent=E2=80=9D",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#274",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have been tasked with deploying a scalable distributed system using AWS OpsWorks. Your distributed system is required to scale on demand. As it is distributed, each node must hold a configuration file that includes the hostnames of the other instances within the layer.<br>How should you configure AWS OpsWorks to manage scaling this application dynamically?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#274",
            "answers": [
              {
                "choice": "<p>A. Create a Chef Recipe to update this configuration file, configure your AWS OpsWorks stack to use custom cookbooks, and assign this recipe to the Configure LifeCycle Event of the specific layer.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Update this configuration file by writing a script to poll the AWS OpsWorks service API for new instances. Configure your base AMI to execute this script on Operating System startup.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a Chef Recipe to update this configuration file, configure your AWS OpsWorks stack to use custom cookbooks, and assign this recipe to execute when instances are launched.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure your AWS OpsWorks layer to use the AWS-provided recipe for distributed host configuration, and configure the instance hostname and file path parameters in your recipes settings.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 274 discussion",
        "discusstion": [
          {
            "id": 331476,
            "date": "Wed 06 Oct 2021 15:56",
            "username": "BKhan",
            "content": "Ans is A:<br>https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-events.html",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#275",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have an application running on an Amazon EC2 instance and you are using IAM roles to securely access AWS Service APIs. How can you configure your application running on that instance to retrieve the API keys for use with the AWS SDKs?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#275",
            "answers": [
              {
                "choice": "<p>A. When assigning an EC2 IAM role to your instance in the console, in the \"Chosen SDK\" dropdown list, select the SDK that you are using, and the instance will configure the correct SDK on launch with the API keys.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Within your application code, make a GET request to the IAM Service API to retrieve credentials for your user.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. When using AWS SDKs and Amazon EC2 roles, you do not have to explicitly retrieve API keys, because the SDK handles retrieving them from the Amazon EC2 MetaData service.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Within your application code, configure the AWS SDK to get the API keys from environment variables, because assigning an Amazon EC2 role stores keys in environment variables on launch.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 275 discussion",
        "discusstion": [
          {
            "id": 358213,
            "date": "Fri 22 Oct 2021 22:10",
            "username": "LB",
            "content": "C is the correct answer.<br>https://docs.aws.amazon.com/aws-sdk-php/v2/guide/credentials.html#instance-profile-credentials",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#276",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>When an Auto Scaling group is running in Amazon Elastic Compute Cloud (EC2), your application rapidly scales up and down in response to load within a 10- minute window; however, after the load peaks, you begin to see problems in your configuration management system where previously terminated Amazon EC2 resources are still showing as active. What would be a reliable and efficient way to handle the cleanup of Amazon EC2 resources within your configuration management system? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#276",
            "answers": [
              {
                "choice": "<p>A. Write a script that is run by a daily cron job on an Amazon EC2 instance and that executes API Describe calls of the EC2 Auto Scaling group and removes terminated instances from the configuration management system.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure an Amazon Simple Queue Service (SQS) queue for Auto Scaling actions that has a script that listens for new messages and removes terminated instances from the configuration management system.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use your existing configuration management system to control the launching and bootstrapping of instances to reduce the number of moving parts in the automation.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Write a small script that is run during Amazon EC2 instance shutdown to de-register the resource from the configuration management system.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use Amazon Simple Workflow Service (SWF) to maintain an Amazon DynamoDB database that contains a whitelist of instances that have been previously launched, and allow the Amazon SWF worker to remove information from the configuration management system.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 276 discussion",
        "discusstion": [
          {
            "id": 649361,
            "date": "Sat 20 Aug 2022 11:40",
            "username": "devops7",
            "content": "B, D<br>A is not a good choice bc it needs an extra EC2 instance - extra cost",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 588029,
            "date": "Tue 19 Apr 2022 09:38",
            "username": "ramikh",
            "content": "DescribeInstances API ,Recently terminated instances might appear in the returned results. This interval is usually less than one hour. For (A) the daily cron job will not show all terminated instances, so its invalid.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 522723,
            "date": "Thu 13 Jan 2022 09:47",
            "username": "zgydmy",
            "content": "Vote BD",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 514802,
            "date": "Sun 02 Jan 2022 04:18",
            "username": "nqthien041292",
            "content": "Vote AD",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 509881,
            "date": "Sun 26 Dec 2021 23:46",
            "username": "GreatFunana",
            "content": "A.  Automatically disqualified for running on an instance instead of Lambda<br>B.  Pricey, but reliable.<br>C.  Looking at the question, this is already happening... and failing. So this is a no go.<br>D.  Legit, as this can be assigned to a life-cycle hook and done.<br>E.  Newp. Too much beer and places that can fail.<br><br>BD. ",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 401997,
            "date": "Wed 27 Oct 2021 03:49",
            "username": "MBJames",
            "content": "I'd choose AB",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#277",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have enabled Elastic Load Balancing HTTP health checking. After looking at the AWS Management Console, you see that all instances are passing health checks, but your customers are reporting that your site is not responding. What is the cause?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#277",
            "answers": [
              {
                "choice": "<p>A. The HTTP health checking system is misreporting due to latency in inter-instance metadata synchronization.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. The health check in place is not sufficiently evaluating the application function.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. The application is returning a positive health check too quickly for the AWS Management Console to respond.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Latency in DNS resolution is interfering with Amazon EC2 metadata retrieval.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 277 discussion",
        "discusstion": [
          {
            "id": 668460,
            "date": "Wed 14 Sep 2022 00:56",
            "username": "colinquek",
            "content": "go for b",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 390861,
            "date": "Tue 28 Sep 2021 14:20",
            "username": "sg0206",
            "content": "B is correct",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#278",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You use Amazon CloudWatch as your primary monitoring system for your web application. After a recent software deployment, your users are getting Intermittent<br>500 Internal Server Errors when using the web application. You want to create a CloudWatch alarm, and notify an on-call engineer when these occur. How can you accomplish this using AWS services? (Choose three.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BDE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#278",
            "answers": [
              {
                "choice": "<p>A. Deploy your web application as an AWS Elastic Beanstalk application. Use the default Elastic Beanstalk Cloudwatch metrics to capture 500 Internal Server Errors. Set a CloudWatch alarm on that metric.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Install a CloudWatch Logs Agent on your servers to stream web application logs to CloudWatch.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use Amazon Simple Email Service to notify an on-call engineer when a CloudWatch alarm is triggered.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a CloudWatch Logs group and define metric filters that capture 500 Internal Server Errors. Set a CloudWatch alarm on that metric.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use Amazon Simple Notification Service to notify an on-call engineer when a CloudWatch alarm is triggered.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>F. Use AWS Data Pipeline to stream web application logs from your servers to CloudWatch.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 278 discussion",
        "discusstion": [
          {
            "id": 402000,
            "date": "Thu 14 Oct 2021 07:37",
            "username": "MBJamesdevops7",
            "content": "BDE is correctagreed",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 650107,
            "date": "Mon 22 Aug 2022 07:09",
            "username": "devops7",
            "content": "agreed",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#279",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>After a daily scrum with your development teams, you've agreed that using Blue/Green style deployments would benefit the team.<br>Which technique should you use to deliver this new requirement?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#279",
            "answers": [
              {
                "choice": "<p>A. Re-deploy your application on AWS Elastic Beanstalk, and take advantage of Elastic Beanstalk deployment types.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Using an AWS CloudFormation template, re-deploy your application behind a load balancer, launch a new AWS CloudFormation stack during each deployment, update your load balancer to send half your traffic to the new stack while you test, after verification update the load balancer to send 100% of traffic to the new stack, and then terminate the old stack.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Re-deploy your application behind a load balancer that uses Auto Scaling groups, create a new identical Auto Scaling group, and associate it to the load balancer. During deployment, set the desired number of instances on the old Auto Scaling group to zero, and when all instances have terminated, delete the old Auto Scaling group.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Using an AWS OpsWorks stack, re-deploy your application behind an Elastic Load Balancing load balancer and take advantage of OpsWorks stack versioning, during deployment create a new version of your application, tell OpsWorks to launch the new version behind your load balancer, and when the new version is launched, terminate the old OpsWorks stack.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 279 discussion",
        "discusstion": [
          {
            "id": 639408,
            "date": "Sat 30 Jul 2022 01:53",
            "username": "nqthien041292",
            "content": "Vote A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 331065,
            "date": "Sat 06 Nov 2021 04:11",
            "username": "devopp",
            "content": "A because of new Elastic Beanstalk support for Blue/Green",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 327018,
            "date": "Tue 21 Sep 2021 07:41",
            "username": "WhyIronManWhyIronMan",
            "content": "I'll go with ARef: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.CNAMESwap.html",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 327022,
            "date": "Mon 11 Oct 2021 18:26",
            "username": "WhyIronMan",
            "content": "Ref: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.CNAMESwap.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#280",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your development team wants account-level access to production instances in order to do live debugging of a highly secure environment. Which of the following should you do?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#280",
            "answers": [
              {
                "choice": "<p>A. Place the credentials provided by Amazon Elastic Compute Cloud (EC2) into a secure Amazon Sample Storage Service (S3) bucket with encryption enabled. Assign AWS Identity and Access Management (IAM) users to each developer so they can download the credentials file.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Place an internally created private key into a secure S3 bucket with server-side encryption using customer keys and configuration management, create a service account on all the instances using this private key, and assign IAM users to each developer so they can download the file.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Place each developer's own public key into a private S3 bucket, use instance profiles and configuration management to create a user account for each developer on all instances, and place the user's public keys into the appropriate account.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Place the credentials provided by Amazon EC2 onto an MFA encrypted USB drive, and physically share it with each developer so that the private key never leaves the office.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 280 discussion",
        "discusstion": [
          {
            "id": 666915,
            "date": "Mon 12 Sep 2022 14:09",
            "username": "colinquek",
            "content": "Cant answer this as there is now AWS SSM Console login.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 428632,
            "date": "Thu 07 Oct 2021 19:24",
            "username": "StelSen",
            "content": "Answer C.  I saw this question 2016. Not sure it is still applicable",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#281",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>As part of your continuous deployment process, your application undergoes an I/O load performance test before it is deployed to production using new AMIs. The application uses one Amazon Elastic Block Store (EBS) PIOPS volume per instance and requires consistent I/O performance.<br>Which of the following must be carried out to ensure that I/O load performance tests yield the correct results in a repeatable manner?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#281",
            "answers": [
              {
                "choice": "<p>A. Ensure that the I/O block sizes for the test are randomly selected.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Ensure that the Amazon EBS volumes have been pre-warmed by reading all the blocks before the test.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Ensure that snapshots of the Amazon EBS volumes are created as a backup.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Ensure that the Amazon EBS volume is encrypted.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Ensure that the Amazon EBS volume has been pre-warmed by creating a snapshot of the volume before the test.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 281 discussion",
        "discusstion": [
          {
            "id": 599720,
            "date": "Tue 10 May 2022 19:41",
            "username": "Suresh_bk201",
            "content": "empty volumes don't need initialization but volumes created from snapshot are slow initially. You might want to warmup for db servers if max performance is needed from the start.<br>B is the correct answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 360837,
            "date": "Thu 04 Nov 2021 21:29",
            "username": "twiztid_2019",
            "content": "Looks like an old question. Pre-warming is not needed anymore.<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-initialize.html",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 332417,
            "date": "Wed 13 Oct 2021 03:51",
            "username": "BKhan",
            "content": "B is correct Answer",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#282",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>After reviewing the last quarter's monthly bills, management has noticed an increase in the overall bill from Amazon. After researching this increase in cost, you discovered that one of your new services is doing a lot of GET Bucket API calls to Amazon S3 to build a metadata cache of all objects in the applications bucket.<br>Your boss has asked you to come up with a new cost-effective way to help reduce the amount of these new GET Bucket API calls.<br>What process should you use to help mitigate the cost?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#282",
            "answers": [
              {
                "choice": "<p>A. Update your Amazon S3 buckets' lifecycle policies to automatically push a list of objects to a new bucket, and use this list to view objects associated with the application's bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a new DynamoDB table. Use the new DynamoDB table to store all metadata about all objects uploaded to Amazon S3. Any time a new object is uploaded, update the application's internal Amazon S3 object metadata cache from DynamoDB. <br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Using Amazon SNS, create a notification on any new Amazon S3 objects that automatically updates a new DynamoDB table to store all metadata about the new object. Subscribe the application to the Amazon SNS topic to update its internal Amazon S3 object metadata cache from the DynamoDB table.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Upload all images to Amazon SQS, set up SQS lifecycles to move all images to Amazon S3, and initiate an Amazon SNS notification to your application to update the application's Internal Amazon S3 object metadata cache.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Upload all images to an ElastiCache filecache server. Update your application to now read all file metadata from the ElastiCache filecache server, and configure the ElastiCache policies to push all files to Amazon S3 for long-term storage.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 282 discussion",
        "discusstion": [
          {
            "id": 509133,
            "date": "Sat 25 Dec 2021 14:35",
            "username": "szl0144",
            "content": "B IS the correct one.",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 621749,
            "date": "Fri 24 Jun 2022 18:00",
            "username": "nqthien041292",
            "content": "Vote B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 583298,
            "date": "Sat 09 Apr 2022 14:09",
            "username": "friendofpenguin",
            "content": "B is missing Lambda though<br>https://aws.amazon.com/blogs/big-data/building-and-maintaining-an-amazon-s3-metadata-index-without-servers/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 389595,
            "date": "Sat 06 Nov 2021 04:29",
            "username": "Dantehilary",
            "content": "C is wrong SNS can't bridge communication with dynamodb and s3, only lambda. I'm going with B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 374149,
            "date": "Sat 16 Oct 2021 10:39",
            "username": "BKhanBKhan",
            "content": "Ans is E:<br>ElastiCache filecache server is the best solution in this scenarioSorry E is the wrong answer. B is the right on.<br>https://aws.amazon.com/blogs/big-data/building-and-maintaining-an-amazon-s3-metadata-index-without-servers/<br><br>S3 is still the most cost-effective and durable way to store large data objects. The problem is searching not storage, so storing the data in ElasticCache does not address the question",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 374154,
            "date": "Thu 04 Nov 2021 02:55",
            "username": "BKhan",
            "content": "Sorry E is the wrong answer. B is the right on.<br>https://aws.amazon.com/blogs/big-data/building-and-maintaining-an-amazon-s3-metadata-index-without-servers/<br><br>S3 is still the most cost-effective and durable way to store large data objects. The problem is searching not storage, so storing the data in ElasticCache does not address the question",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 331066,
            "date": "Wed 06 Oct 2021 13:04",
            "username": "devopp",
            "content": "B as use of DDB as Metadata cache for S3 Objects is an AWS usecase.",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#283",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your current log analysis application takes more than four hours to generate a report of the top 10 users of your web application. You have been asked to implement a system that can report this information in real time, ensure that the report is always up to date, and handle increases in the number of requests to your web application. Choose the option that is cost-effective and can fulfill the requirements.<br></p>",
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
                "choice": "<p>A. Publish your data to CloudWatch Logs, and configure your application to autoscale to handle the load on demand.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Publish your log data to an Amazon S3 bucket. Use AWS CloudFormation to create an Auto Scaling group to scale your post-processing application which is configured to pull down your log files stored an Amazon S3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Post your log data to an Amazon Kinesis data stream, and subscribe your log-processing application so that is configured to process your logging data.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure an Auto Scaling group to increase the size of your Amazon EMR duster.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Create a multi-AZ Amazon RDS MySQL cluster, post the logging data to MySQL, and run a map reduce job to retrieve the required information on user counts.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 283 discussion",
        "discusstion": [
          {
            "id": 331069,
            "date": "Wed 06 Oct 2021 08:26",
            "username": "devopp",
            "content": "Cas this is an AWS Usecase for Kinesis as a rolling, immutable log.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 327025,
            "date": "Sat 25 Sep 2021 16:03",
            "username": "WhyIronMan",
            "content": "I'll go with C, RealtimeKinesis",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#284",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are using Elastic Beanstalk to manage your e-commerce store. The store is based on an open source e- commerce platform and is deployed across multiple instances in an Auto Scaling group. Your development team often creates new \"extensions\" for the e-commerce store. These extensions include PHP source code as well as an SQL upgrade script used to make any necessary updates to the database schema. You have noticed that some extension deployments fail due to an error when running the SQL upgrade script. After further investigation, you realize that this is because the SQL script is being executed on all of your<br>Amazon EC2 instances.<br>How would you ensure that the SQL script is only executed once per deployment regardless of how many Amazon EC2 instances are running at the time?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#284",
            "answers": [
              {
                "choice": "<p>A. Use a \"Container command\" within an Elastic Beanstalk configuration file to execute the script, ensuring that the \"leader only\" flag is set to true.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Make use of the Amazon EC2 metadata service to query whether the instance is marked as the leader\" in the Auto Scaling group. Only execute the script if \"true\" is returned.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use a \"Solo Command\" within an Elastic Beanstalk configuration file to execute the script. The Elastic Beanstalk service will ensure that the command is only executed once.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Update the Amazon RDS security group to only allow write access from a single instance in the Auto Scaling group; that way, only one instance will successfully execute the script on the database.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 284 discussion",
        "discusstion": [
          {
            "id": 331070,
            "date": "Wed 20 Oct 2021 01:05",
            "username": "devopp",
            "content": "A with leader-only",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 327030,
            "date": "Fri 01 Oct 2021 07:32",
            "username": "WhyIronMan",
            "content": "I'll go with A<br><br>Ref: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/customize-containers-ec2.html#linux-container-commands",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#285",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are administering a continuous integration application that polls version control for changes and then launches new Amazon EC2 instances for a full suite of build tests. What should you do to ensure the lowest overall cost while being able to run as many tests in parallel as possible?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#285",
            "answers": [
              {
                "choice": "<p>A. Perform syntax checking on the continuous integration system before launching a new Amazon EC2 instance for build test, unit and integration tests.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Perform syntax and build tests on the continuous integration system before launching the new Amazon EC2 instance unit and integration tests.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Perform all tests on the continuous integration system, using AWS OpsWorks for unit, integration, and build tests.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Perform syntax checking on the continuous integration system before launching a new AWS Data Pipeline for coordinating the output of unit, integration, and build tests.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 285 discussion",
        "discusstion": [
          {
            "id": 332427,
            "date": "Sat 09 Oct 2021 21:18",
            "username": "BKhan",
            "content": "Ans is B",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#286",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are doing a load testing exercise on your application hosted on AWS. While testing your Amazon RDS MySQL DB instance, you notice that when you hit<br>100% CPU utilization on it, your application becomes non- responsive. Your application is read-heavy.<br>What are methods to scale your data tier to meet the application's needs? (Choose three.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ADE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#286",
            "answers": [
              {
                "choice": "<p>A. Add Amazon RDS DB read replicas, and have your application direct read queries to them.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add your Amazon RDS DB instance to an Auto Scaling group and configure your CloudWatch metric based on CPU utilization.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use an Amazon SQS queue to throttle data going to the Amazon RDS DB instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use ElastiCache in front of your Amazon RDS DB to cache common queries.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Shard your data set among multiple Amazon RDS DB instances.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>F. Enable Multi-AZ for your Amazon RDS DB instance.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 286 discussion",
        "discusstion": [
          {
            "id": 358225,
            "date": "Tue 12 Oct 2021 13:24",
            "username": "LB",
            "content": "ADE is correct",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#287",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your mobile application includes a photo-sharing service that is expecting tens of thousands of users at launch. You will leverage Amazon Simple Storage Service<br>(S3) for storage of the user Images, and you must decide how to authenticate and authorize your users for access to these images. You also need to manage the storage of these images.<br>Which two of the following approaches should you use? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: CE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#287",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon S3 bucket per user, and use your application to generate the S3 URI for the appropriate content.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use AWS Identity and Access Management (IAM) user accounts as your application-level user database, and offload the burden of authentication from your application code.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Authenticate your users at the application level, and use AWS Security Token Service (STS) to grant token-based authorization to S3 objects.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Authenticate your users at the application level, and send an SMS token message to the user. Create an Amazon S3 bucket with the same name as the SMS message token, and move the user's objects to that bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use a key-based naming scheme comprised from the user IDs for all user objects in a single Amazon S3 bucket.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 287 discussion",
        "discusstion": [
          {
            "id": 332648,
            "date": "Thu 23 Sep 2021 06:11",
            "username": "BKhanStelSen",
            "content": "Ans is C and EThis is correct",
            "upvote_count": "83",
            "selected_answers": ""
          },
          {
            "id": 428675,
            "date": "Thu 14 Oct 2021 01:48",
            "username": "StelSen",
            "content": "This is correct",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 377757,
            "date": "Fri 24 Sep 2021 15:04",
            "username": "Dantehilary",
            "content": "BC ans",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#288",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have an Auto Sealing group of Instances that processes messages from an Amazon Simple Queue Service (SQS) queue. The group scales on the size of the queue. Processing Involves calling a third-party web service. The web service is complaining about the number of failed and repeated calls it is receiving from you.<br>You have noticed that when the group scales in, instances are being terminated while they are processing.<br>What cost-effective solution can you use to reduce the number of incomplete process attempts?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#288",
            "answers": [
              {
                "choice": "<p>A. Create a new Auto Scaling group with minimum and maximum of 2 and instances running web proxy software. Configure the VPC route table to route HTTP traffic to these web proxies.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Modify the application running on the instances to enable termination protection while it processes a task and disable it when the processing is complete.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Increase the minimum and maximum size for the Auto Scaling group, and change the scaling policies so they scale less dynamically.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Modify the application running on the instances to put itself into an Auto Scaling Standby state while it processes a task and return itself to InService when the processing is complete.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 288 discussion",
        "discusstion": [
          {
            "id": 331075,
            "date": "Fri 24 Sep 2021 03:47",
            "username": "devoppMBJamesI_heart_shuffle_girls",
            "content": "B for me (recommendation on a course)<br>Dont think we should attempt BAU processing in standby mode, its for troubleshooting ?Agree on B.  https://aws.amazon.com/about-aws/whats-new/2015/12/protect-instances-from-termination-by-auto-scaling/<br>I don't think standby should be abused to keep the instance running in BAU either.B looks correct, putting the instance in standby would not be a good idea.",
            "upvote_count": "811",
            "selected_answers": ""
          },
          {
            "id": 402016,
            "date": "Fri 22 Oct 2021 15:51",
            "username": "MBJamesI_heart_shuffle_girls",
            "content": "Agree on B.  https://aws.amazon.com/about-aws/whats-new/2015/12/protect-instances-from-termination-by-auto-scaling/<br>I don't think standby should be abused to keep the instance running in BAU either.B looks correct, putting the instance in standby would not be a good idea.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 510859,
            "date": "Tue 28 Dec 2021 07:53",
            "username": "I_heart_shuffle_girls",
            "content": "B looks correct, putting the instance in standby would not be a good idea.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 327038,
            "date": "Mon 20 Sep 2021 13:31",
            "username": "WhyIronManStelSen",
            "content": "I'll go with D<br><br>Ref:<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html#standby-stateGuys this is correct.",
            "upvote_count": "61",
            "selected_answers": ""
          },
          {
            "id": 428677,
            "date": "Thu 28 Oct 2021 02:03",
            "username": "StelSen",
            "content": "Guys this is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 693626,
            "date": "Thu 13 Oct 2022 07:13",
            "username": "lmimi",
            "content": "I will go with D. <br>B is wrong as it uses termination protection, rather than the scale-in protection.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 671854,
            "date": "Sun 18 Sep 2022 01:21",
            "username": "colinquek",
            "content": "seems even AWS recommends using this way.<br>And yes there is AWS CLI commands for the app to call to enable/disable termination protection, in case anyone asks.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 543975,
            "date": "Wed 09 Feb 2022 18:50",
            "username": "blueorca",
            "content": "Should be D, even though ideally you want to suspend processes or use scale-in protection https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-using-sqs-queue.html#scale-sqs-queue-scale-in-protection<br><br>Termination protection prevents termination from humans, not from ASG. You would need scale-in protection for that.",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 332667,
            "date": "Wed 29 Sep 2021 19:14",
            "username": "BKhan",
            "content": "D is good Answer",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#289",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>The operations team and the development team want a single place to view both operating system and application logs. How should you implement this using<br>AWS services? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#289",
            "answers": [
              {
                "choice": "<p>A. Using AWS CloudFormation, create a CloudWatch Logs LogGroup and send the operating system and application logs of interest using the CloudWatch Logs Agent.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Using AWS CloudFormation and configuration management, set up remote logging to send events via UDP packets to CloudTrail.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Using configuration management, set up remote logging to send events to Amazon Kinesis and insert these into Amazon CloudSearch or Amazon Redshift, depending on available analytic tools. D.  Using AWS CloudFormation, create a CloudWatch Logs LogGroup. Because the Cloudwatch Log agent automatically sends all operating system logs, you only have to configure the application logs for sending off-machine.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Using AWS CloudFormation, merge the application logs with the operating system logs, and use IAM Roles to allow both teams to have access to view console output from Amazon EC2.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 289 discussion",
        "discusstion": [
          {
            "id": 546469,
            "date": "Sun 13 Feb 2022 14:33",
            "username": "blueorca",
            "content": "Seems to be an old question? It's CloudWatch Unified Agent now",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 509774,
            "date": "Sun 26 Dec 2021 20:40",
            "username": "GreatFunana",
            "content": "Fix the answer list. This is what it should be.<br>A.  Using AWS CloudFormation, create a CloudWatch Logs LogGroup and send the operating system and application logs of interest using the CloudWatch Logs Agent.B.  Using AWS CloudFormation and configuration management, set up remote logging to send events via UDP packets to CloudTrail.C.  Using configuration management, set up remote logging to send events to Amazon Kinesis and insert these into Amazon CloudSearch or Amazon Redshift, depending on available analytic tools.D.  Using AWS CloudFormation, create a CloudWatch Logs LogGroup. Because the Cloudwatch Log agent automatically sends all operating system logs, you only have to configure the application logs for sending off-machine.E.  Using AWS CloudFormation, merge the application logs with the operating system logs, and use IAM Roles to allow both teams to have access to view console output from Amazon EC2.<br><br>A is legit.B.  Is wrong for a variety of reasons.C.  Is a good way to send logs to one placeD.  The agent doesn't do that.E.  That is just a bad idea.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 428682,
            "date": "Sun 24 Oct 2021 19:29",
            "username": "StelSen",
            "content": "Ignore this question.",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#290",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>The project you are working on currently uses a single AWS CloudFormation template to deploy its AWS infrastructure, which supports a multi-tier web application. You have been tasked with organizing the AWS CloudFormation resources so that they can be maintained in the future, and so that different departments such as Networking and Security can review the architecture before it goes to Production.<br>How should you do this in a way that accommodates each department, using their existing workflows?<br></p>",
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
                "choice": "<p>A. Organize the AWS CloudFormation template so that related resources are next to each other in the template, such as VPC subnets and routing rules for Networking and security groups and IAM information for Security.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Separate the AWS CloudFormation template into a nested structure that has individual templates for the resources that are to be governed by different departments, and use the outputs from the networking and security stacks for the application template that you control<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Organize the AWS CloudFormation template so that related resources are next to each other in the template for each department's use, leverage your existing continuous integration tool to constantly deploy changes from all parties to the Production environment, and then run tests for validation.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use a custom application and the AWS SDK to replicate the resources defined in the current AWS CloudFormation template, and use the existing code review system to allow other departments to approve changes before altering the application for future deployments.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 290 discussion",
        "discusstion": [
          {
            "id": 511678,
            "date": "Wed 29 Dec 2021 01:52",
            "username": "diasporabro",
            "content": "I think it is B. .. Makes it easier for each department to audit templates..",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 332668,
            "date": "Fri 22 Oct 2021 08:48",
            "username": "BKhan",
            "content": "B is correct one",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#291",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You currently run your infrastructure on Amazon EC2 instances behind an Auto Scaling group. All logs for you application are currently written to ephemeral storage. Recently your company experienced a major bug in code that made it through testing and was ultimately deployed to your fleet. This bug triggered your<br>Auto Scaling group to scale up and back down before you could successfully retrieve the logs off your server to better assist you in troubleshooting the bug. Which technique should you use to make sure you are able to review your logs after your instances have shut down?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#291",
            "answers": [
              {
                "choice": "<p>A. Configure the ephemeral policies on your Auto Scaling group to back up on terminate.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure your Auto Scaling policies to create a snapshot of all ephemeral storage on terminate.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Install the CloudWatch Logs Agent on your AMI, and configure CloudWatch Logs Agent to stream your logs.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Install the CloudWatch monitoring agent on your AMI, and set up new SNS alert for CloudWatch metrics that triggers the CloudWatch monitoring agent to backup all logs on the ephemeral drive.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Install the CloudWatch monitoring agent on your AMI, Update your Auto Scaling policy to enable automated CloudWatch Log copy.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 291 discussion",
        "discusstion": [
          {
            "id": 332672,
            "date": "Wed 03 Nov 2021 10:25",
            "username": "BKhan",
            "content": "Ans is C:<br>Ephemeral storage is the volatile temporary storage attached to your instances which is only present during the running lifetime of the instance. There is no option that you can take a snapshot of ephemeral storage on terminate.",
            "upvote_count": "5",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#292",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Management has reported an increase in the monthly bill from Amazon web services, and they are extremely concerned with this increased cost. Management has asked you to determine the exact cause of this increase. After reviewing the billing report, you notice an increase in the data transfer cost. How can you provide management with a better insight into data transfer use?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#292",
            "answers": [
              {
                "choice": "<p>A. Update your Amazon CloudWatch metrics to use five-second granularity, which will give better detailed metrics that can be combined with your billing data to pinpoint anomalies.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Amazon CloudWatch Logs to run a map-reduce on your logs to determine high usage and data transfer.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Deliver custom metrics to Amazon CloudWatch per application that breaks down application data transfer into multiple, more specific data points.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Using Amazon CloudWatch metrics, pull your Elastic Load Balancing outbound data transfer metrics monthly, and include them with your billing report to show which application is causing higher bandwidth usage.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 292 discussion",
        "discusstion": [
          {
            "id": 597310,
            "date": "Thu 05 May 2022 14:50",
            "username": "KingGuo",
            "content": "D is right",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 561166,
            "date": "Sat 05 Mar 2022 05:14",
            "username": "MF2C",
            "content": "I favor D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 530116,
            "date": "Sat 22 Jan 2022 23:58",
            "username": "RightAnswersRightAnswers",
            "content": "I am not sure how do you identify data transfer costs using CloudWatch metrics? The ELB out bound data transfer metrics would rather be more appropriate (Ans D).<br>However shouldn't one be using AWS Cost Explorer to identify the data transfer charges ?<br>https://aws.amazon.com/blogs/mt/using-aws-cost-explorer-to-analyze-data-transfer-costs/#:~:textTo%20see%20the%20total%20EC2,6.It looks like that ALB only reports ProcessedBytes(The total number of bytes processed by the load balancer over IPv4 and IPv6 - https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-cloudwatch-metrics.html), NLB reports ProcessedBytes and ProcessedBytes_* metrics (https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-cloudwatch-metrics.html). CLB doesn't report any kind of data transfer metrics (https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-cloudwatch-metrics.html).<br>So, it is not possible to identify outbound data transfer charges specifically using CloudWatch Metrics.<br>So, NONE of the Answers are correct.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 532155,
            "date": "Tue 25 Jan 2022 14:28",
            "username": "RightAnswers",
            "content": "It looks like that ALB only reports ProcessedBytes(The total number of bytes processed by the load balancer over IPv4 and IPv6 - https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-cloudwatch-metrics.html), NLB reports ProcessedBytes and ProcessedBytes_* metrics (https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-cloudwatch-metrics.html). CLB doesn't report any kind of data transfer metrics (https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-cloudwatch-metrics.html).<br>So, it is not possible to identify outbound data transfer charges specifically using CloudWatch Metrics.<br>So, NONE of the Answers are correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 431999,
            "date": "Mon 04 Oct 2021 01:14",
            "username": "thisdump",
            "content": "D is correct, C is wrong anyhow",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 431997,
            "date": "Thu 30 Sep 2021 23:40",
            "username": "thisdump",
            "content": "C is correct, B is wrong anyhow",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 332675,
            "date": "Sat 25 Sep 2021 21:48",
            "username": "BKhan",
            "content": "C is valid Answer",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#293",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>During metric analysis, your team has determined that the company's website is experiencing response times during peak hours that are higher than anticipated.<br>You currently rely on Auto Scaling to make sure that you are scaling your environment during peak windows. How can you improve your Auto Scaling policy to reduce this high response time? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#293",
            "answers": [
              {
                "choice": "<p>A. Push custom metrics to CloudWatch to monitor your CPU and network bandwidth from your servers, which will allow your Auto Scaling policy to have better fine-grain insight.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Increase your Auto Scaling group's number of max servers.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a script that runs and monitors your servers; when it detects an anomaly in load, it posts to an Amazon SNS topic that triggers Elastic Load Balancing to add more servers to the load balancer.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Push custom metrics to CloudWatch for your application that include more detailed information about your web application, such as how many requests it is handling and how many are waiting to be processed.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Update the CloudWatch metric used for your Auto Scaling policy, and enable sub-minute granularity to allow auto scaling to trigger faster.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 293 discussion",
        "discusstion": [
          {
            "id": 523945,
            "date": "Sat 15 Jan 2022 06:43",
            "username": "Ram_ParamRightAnswersdzenadcughostdog",
            "content": "Correct DE<br><br>B doesn't impact the lag, only the peak throughput.Where in the question it says there is a concern about lag - the question specifically asks for \\\"reduce this high response time\\\"!@#$!Sub-minute granularity is not supported by CloudWatch. How would you implement it?D, E can be implemented using High resolution custom metric - https://aws.amazon.com/blogs/aws/new-high-resolution-custom-metrics-and-alarms-for-amazon-cloudwatch/",
            "upvote_count": "7112",
            "selected_answers": ""
          },
          {
            "id": 716090,
            "date": "Fri 11 Nov 2022 14:45",
            "username": "RightAnswers",
            "content": "Where in the question it says there is a concern about lag - the question specifically asks for \\\"reduce this high response time\\\"!@#$!",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 572962,
            "date": "Tue 22 Mar 2022 14:38",
            "username": "dzenadcughostdog",
            "content": "Sub-minute granularity is not supported by CloudWatch. How would you implement it?D, E can be implemented using High resolution custom metric - https://aws.amazon.com/blogs/aws/new-high-resolution-custom-metrics-and-alarms-for-amazon-cloudwatch/",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 600192,
            "date": "Wed 11 May 2022 17:37",
            "username": "ghostdog",
            "content": "D, E can be implemented using High resolution custom metric - https://aws.amazon.com/blogs/aws/new-high-resolution-custom-metrics-and-alarms-for-amazon-cloudwatch/",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 643090,
            "date": "Fri 05 Aug 2022 22:49",
            "username": "jexam211",
            "content": "A -> CPU metric is not a custom metric<br>B -> it's seems over performance solution<br>C -> SNS can't trigger other events<br>D -> It's seems plausible<br>E -> Exist one-minute granularity events<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-cloudwatch-monitoring.html<br><br>so i must sayDE",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: DE"
          },
          {
            "id": 633759,
            "date": "Tue 19 Jul 2022 23:52",
            "username": "toma",
            "content": "BD would say",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 587427,
            "date": "Mon 18 Apr 2022 02:46",
            "username": "Training",
            "content": "Should be AD.  https://aws.amazon.com/premiumsupport/knowledge-center/ec2-instance-hosting-slow-website/. Max servers, we cannot determine what's the max.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 577682,
            "date": "Tue 29 Mar 2022 16:47",
            "username": "AluBhorta",
            "content": "B, E<br><br>B: more instances can reduce contention during peak load, thereby reducing latency.<br>E: lower interval can enable faster scale operations.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 572963,
            "date": "Tue 22 Mar 2022 14:38",
            "username": "dzenadcu",
            "content": "sub-minute granularity not supported",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 332680,
            "date": "Wed 27 Oct 2021 08:09",
            "username": "BKhan",
            "content": "Ans is :BD",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#294",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are responsible for your company's large multi-tiered Windows-based web application running on Amazon EC2 instances situated behind a load balancer.<br>While reviewing metrics, you have started noticing an upwards trend for slow customer page load time. Your manager has asked you to come up with a solution to ensure that customer load time is not affected by too many requests per second.<br>Which technique would you use to solve this issue?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#294",
            "answers": [
              {
                "choice": "<p>A. Re-deploy your infrastructure using an AWS CloudFormation template. Configure Elastic Load Balancing health checks to initiate a new AWS CloudFormation stack when health checks return failed.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Re-deploy your infrastructure using an AWS CloudFormation template. Spin up a second AWS CloudFormation stack. Configure Elastic Load Balancing SpillOver functionality to spill over any slow connections to the second AWS CloudFormation stack.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Re-deploy your infrastructure using AWS CloudFormation, Elastic Beanstalk, and Auto Scaling. Set up your Auto Scaling group policies to scale based on the number of requests per second as well as the current customer load time.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Re-deploy your application using an Auto Scaling template. Configure the Auto Scaling template to spin up a new Elastic Beanstalk application when the customer load time surpasses your threshold.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 294 discussion",
        "discusstion": [
          {
            "id": 332681,
            "date": "Wed 13 Oct 2021 06:56",
            "username": "BKhan",
            "content": "C seems to be a reasonable choice",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#295",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your company has multiple applications running on AWS. Your company wants to develop a tool that notifies on-call teams immediately via email when an alarm is triggered in your environment. You have multiple on-call teams that work different shifts, and the tool should handle notifying the correct teams at the correct times. How should you implement this solution?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#295",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon SNS topic and an Amazon SQS queue. Configure the Amazon SQS queue as a subscriber to the Amazon SNS topic. Configure CloudWatch alarms to notify this topic when an alarm is triggered. Create an Amazon EC2 Auto Scaling group with both minimum and desired Instances configured to 0. Worker nodes in this group spawn when messages are added to the queue. Workers then use Amazon Simple Email Service to send messages to your on call teams.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an Amazon SNS topic and configure your on-call team email addresses as subscribers. Use the AWS SDK tools to integrate your application with Amazon SNS and send messages to this new topic. Notifications will be sent to on-call users when a CloudWatch alarm is triggered.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Amazon SNS topic and configure your on-call team email addresses as subscribers. Create a secondary Amazon SNS topic for alarms and configure your CloudWatch alarms to notify this topic when triggered. Create an HTTP subscriber to this topic that notifies your application via HTTP POST when an alarm is triggered. Use the AWS SDK tools to integrate your application with Amazon SNS and send messages to the first topic so that on-call engineers receive alerts.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an Amazon SNS topic for each on-call group, and configure each of these with the team member emails as subscribers. Create another Amazon SNS topic and configure your CloudWatch alarms to notify this topic when triggered. Create an HTTP subscriber to this topic that notifies your application via HTTP POST when an alarm is triggered. Use the AWS SDK tools to integrate your application with Amazon SNS and send messages to the correct team topic when on shift.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 295 discussion",
        "discusstion": [
          {
            "id": 332737,
            "date": "Sat 23 Oct 2021 17:43",
            "username": "BKhan",
            "content": "Ans is D:<br><br>The requirement is to call the available team not to spin new instances or configure Auto Scaling group. B is sending message to new Topic and C is sending message to the Topic at the top at list and D solves the problem in an appropriate way.",
            "upvote_count": "7",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#296",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your company releases new features with high frequency while demanding high application availability. As part of the application's A/B testing, logs from each updated Amazon EC2 instance of the application need to be analyzed in near real-time, to ensure that the application is working flawlessly after each deployment.<br>If the logs show arty anomalous behavior, then the application version of the instance is changed to a more stable one. Which of the following methods should you use for shipping and analyzing the logs in a highly available manner?<br></p>",
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
                "choice": "<p>A. Ship the logs to Amazon S3 for durability and use Amazon EMR to analyze the logs in a batch manner each hour.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Ship the logs to Amazon CloudWatch Logs and use Amazon EMR to analyze the logs in a batch manner each hour.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Ship the logs to an Amazon Kinesis stream and have the consumers analyze the logs in a live manner.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Ship the logs to a large Amazon EC2 instance and analyze the logs in a live manner.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Store the logs locally on each instance and then have an Amazon Kinesis stream pull the logs for live analysis.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 296 discussion",
        "discusstion": [
          {
            "id": 629113,
            "date": "Sat 09 Jul 2022 12:14",
            "username": "Greyer",
            "content": "Near-realtime -> Kinesis",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 332746,
            "date": "Thu 21 Oct 2021 20:59",
            "username": "BKhan",
            "content": "Ans is C",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#297",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have a code repository that uses Amazon S3 as a data store. During a recent audit of your security controls, some concerns were raised about maintaining the integrity of the data in the Amazon S3 bucket. Another concern was raised around securely deploying code from Amazon S3 to applications running on<br>Amazon EC2 in a virtual private cloud. What are some measures that you can implement to mitigate these concerns? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#297",
            "answers": [
              {
                "choice": "<p>A. Add an Amazon S3 bucket policy with a condition statement to allow access only from Amazon EC2 instances with RFC 1918 IP addresses and enable bucket versioning.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add an Amazon S3 bucket policy with a condition statement that requires multi-factor authentication in order to delete objects and enable bucket versioning.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use a configuration management service to deploy AWS Identity and Access Management user credentials to the Amazon EC2 instances. Use these credentials to securely access the Amazon S3 bucket when deploying code.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an Amazon Identity and Access Management role with authorization to access the Amazon 53 bucket, and launch all of your application's Amazon EC2 instances with this role.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use AWS Data Pipeline to lifecycle the data in your Amazon S3 bucket to Amazon Glacier on a weekly basis.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F. Use AWS Data Pipeline with multi-factor authentication to securely deploy code from the Amazon .5.3 bucket to your Amazon EC2 instances.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 297 discussion",
        "discusstion": [
          {
            "id": 332749,
            "date": "Mon 11 Oct 2021 20:56",
            "username": "BKhan",
            "content": "Ans is B and D<br>B is Ans of \\\"some concerns were raised about maintaining the integrity of the data in the Amazon S3 bucket.\\\"<br>D is Ans of \\\"securely deploying code from Amazon S3 to applications running on<br>Amazon EC2 in a virtual private cloud\\\"",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#298",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have an application consisting of a stateless web server tier running on Amazon EC2 instances behind load balancer, and are using Amazon RDS with read replicas. Which of the following methods should you use to implement a self-healing and cost-effective architecture? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: DG</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#298",
            "answers": [
              {
                "choice": "<p>A. Set up a third-party monitoring solution on a cluster of Amazon EC2 instances in order to emit custom CloudWatch metrics to trigger the termination of unhealthy Amazon EC2 instances.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Set up scripts on each Amazon EC2 instance to frequently send ICMP pings to the load balancer in order to determine which instance is unhealthy and replace it.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Set up an Auto Scaling group for the web server tier along with an Auto Scaling policy that uses the Amazon RDS DB CPU utilization CloudWatch metric to scale the instances.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Set up an Auto Scaling group for the web server tier along with an Auto Scaling policy that uses the Amazon EC2 CPU utilization CloudWatch metric to scale the instances.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use a larger Amazon EC2 instance type for the web server tier and a larger DB instance type for the data storage layer to ensure that they don't become unhealthy.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F. Set up an Auto Scaling group for the database tier along with an Auto Scaling policy that uses the Amazon RDS read replica lag CloudWatch metric to scale out the Amazon RDS read replicas.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p><br>G.Use an Amazon RDS Multi-AZ deployment.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 298 discussion",
        "discusstion": [
          {
            "id": 402028,
            "date": "Sat 25 Sep 2021 09:33",
            "username": "MBJames",
            "content": "DG are OK",
            "upvote_count": "9",
            "selected_answers": ""
          },
          {
            "id": 612507,
            "date": "Tue 07 Jun 2022 01:09",
            "username": "phuchoang",
            "content": "I choose D, G too",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#299",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your application is currently running on Amazon EC2 instances behind a load balancer. Your management has decided to use a Blue/Green deployment strategy.<br>How should you implement this for each deployment?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#299",
            "answers": [
              {
                "choice": "<p>A. Set up Amazon Route 53 health checks to fail over from any Amazon EC2 instance that is currently being deployed to.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Using AWS CloudFormation, create a test stack for validating the code, and then deploy the code to each production Amazon EC2 instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a new load balancer with new Amazon EC2 instances, carry out the deployment, and then switch DNS over to the new load balancer using Amazon Route 53 after testing.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Launch more Amazon EC2 instances to ensure high availability, de-register each Amazon EC2 instance from the load balancer, upgrade it, and test it, and then register it again with the load balancer.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 299 discussion",
        "discusstion": [
          {
            "id": 402030,
            "date": "Sat 30 Oct 2021 20:38",
            "username": "MBJames",
            "content": "Old question, C is a valid answer",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 401910,
            "date": "Sun 24 Oct 2021 06:39",
            "username": "NNHAN",
            "content": "alb/nlb supports blue/green deployment natively",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#300",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your company currently runs a large multi-tier web application. One component is an API service that all other components of your application rely on to perform read/write operations. This service must have high availability and zero downtime during deployments.<br>Which technique should you use to provide cost-effective, zero-downtime deployments for this component?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#300",
            "answers": [
              {
                "choice": "<p>A. Use an AWS CloudFormation template to re-deploy your application behind a load balancer, and launch a new AWS CloudFormation stack during each deployment. Update your load balancer to send traffic to the new stack, and then deploy your software. Leave your old stacks running, and tag their resources with the version for rollback.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Re-deploy your application on Elastic Beanstalk. During deployment, create a new version of your application, and create a new environment running that version in Elastic BeanStalk. Finally, take advantage of the Elastic Beanstalk Swap CNAME operation to switch to the new environment.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Re-deploy your application behind a load balancer that uses Auto Scaling groups. Create a new identical Auto Scaling group and associate it to your Amazon Route53 zone. Configure Amazon Route53 to auto- weight traffic over to the new Auto Scaling group when all instances are marked as healthy.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Re-deploy your application behind a load balancer using an AWS OpsWorks stack and use AWS OpsWorks stack versioning, during deployment create a new version of your application, tell AWS OpsWorks to launch the new version behind your load balancer, and when the new version is launched, terminate the old AWS OpsWorks stack.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 300 discussion",
        "discusstion": [
          {
            "id": 716101,
            "date": "Fri 11 Nov 2022 15:01",
            "username": "RightAnswers",
            "content": "Ans A - Using two target groups behind an ELB and switching traffic between the two target groups is one of the recommended approach for Blue/Green deployment . However the answer says a stack, which I assume is same as target group.<br>Ans B - EB with CNAM swap will also work.<br>Since this is alarge multi-tier web application, I would prefer A.  EB is mostly for small applications not enterprise grade apps.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 581026,
            "date": "Tue 05 Apr 2022 06:25",
            "username": "AdamSmith",
            "content": "B is the only option with zero-downtime.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 523147,
            "date": "Thu 13 Jan 2022 22:42",
            "username": "RightAnswers",
            "content": "I am not sure if ElasticBeanStalk is even recommended for a massive multi-tier application !",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 428689,
            "date": "Wed 06 Oct 2021 02:21",
            "username": "StelSen",
            "content": "I feel it is B.  However none of the options are cost-effective. Immutable or Rolling with additional batches would be my choice, but that is not in the answer anyway.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      }
    ]
  }