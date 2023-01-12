var DOP_C01_Part1 = 
{
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#1",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to migrate its content sharing web application hosted on Amazon EC2 to a serverless architecture. The company currently deploys changes to its application by creating a new Auto Scaling group of EC2 instances and a new Elastic Load Balancer, and then shifting the traffic away using an Amazon Route<br>53 weighted routing policy.<br>For its new serverless application, the company is planning to use Amazon API Gateway and AWS Lambda. The company will need to update its deployment processes to work with the new application. It will also need to retain the ability to test new features on a small number of users before rolling the features out to the entire user base.<br>Which deployment strategy will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1",
          "answers": [
            {
              "choice": "<p>A. Use AWS CDK to deploy API Gateway and Lambda functions. When code needs to be changed, update the AWS CloudFormation stack and deploy the new version of the APIs and Lambda functions. Use a Route 53 failover routing policy for the canary release strategy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS CloudFormation to deploy API Gateway and Lambda functions using Lambda function versions. When code needs to be changed, update the CloudFormation stack with the new Lambda code and update the API versions using a canary release strategy. Promote the new version when testing is complete.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Elastic Beanstalk to deploy API Gateway and Lambda functions. When code needs to be changed, deploy a new version of the API and Lambda functions. Shift traffic gradually using an Elastic Beanstalk blue/green deployment.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS OpsWorks to deploy API Gateway in the service layer and Lambda functions in a custom layer. When code needs to be changed, use OpsWorks to perform a blue/green deployment and shift traffic gradually.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 1 discussion",
      "discusstion": [
        {
          "id": 330985,
          "date": "Tue 19 Oct 2021 07:07",
          "username": "devopp",
          "content": "B<br>noting SAM is built over CloudFormation.",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 755414,
          "date": "Sun 25 Dec 2022 06:32",
          "username": "Bulti",
          "content": "B- Canary deployment of Lambda is done using AWS SAM that comes built in with CodeDeploy. https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/automating-updates-to-serverless-apps.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 696953,
          "date": "Mon 17 Oct 2022 07:46",
          "username": "developer_404",
          "content": "Canary Deployment is the use case for this scenario while the other two are Blue green deployment. Option A is using Route53 failover which is not necessary for the scenario.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 661937,
          "date": "Wed 07 Sep 2022 05:42",
          "username": "kopper2019EnWuhuyrk102GoozianGooziankopper2019ZZIN",
          "content": "New as of September 6th, 2022<br>NO.265 A company updated the AWS CloudFormation template tor a critical business application. The stack update process Tailed due to an error in me updated template, and CloudFormation automatically began the stack rollback process Later, a DevOps engineer found the application was still unavailable, and that the stack was in the UPDATE_ROLLBACK_FALED state Which combination of actions will allow the stack rollback to complete successful/? (Select 2)A.  Attach the AWSCloudFormationFulAccess IAM policy to the CloudFormation roleB.  Automatically heal the stack resources using CloudFormation drift detection.C.  Issue a ContinueUpdateRolback command from the CloudFormation console or AWS CLID.  Manually the resources to match the expectations of the stack.E.  Update the existing CloudFormation stack using the original templateAns: CD<br>https://aws.amazon.com/tw/premiumsupport/knowledge-center/cloudformation-update-rollback-failed/Agree CD<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failedit came up in my examD AND Ewhat about the other ones new? thanksPassed with a new question?",
          "upvote_count": "2211211",
          "selected_answers": ""
        },
        {
          "id": 690933,
          "date": "Mon 10 Oct 2022 11:31",
          "username": "EnWuhuyrk102",
          "content": "Ans: CD<br>https://aws.amazon.com/tw/premiumsupport/knowledge-center/cloudformation-update-rollback-failed/Agree CD<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 738544,
          "date": "Thu 08 Dec 2022 03:32",
          "username": "huyrk102",
          "content": "Agree CD<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 689028,
          "date": "Sat 08 Oct 2022 06:59",
          "username": "Goozian",
          "content": "it came up in my exam",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 678268,
          "date": "Sun 25 Sep 2022 00:28",
          "username": "Gooziankopper2019ZZIN",
          "content": "D AND Ewhat about the other ones new? thanksPassed with a new question?",
          "upvote_count": "211",
          "selected_answers": ""
        },
        {
          "id": 680943,
          "date": "Tue 27 Sep 2022 18:14",
          "username": "kopper2019ZZIN",
          "content": "what about the other ones new? thanksPassed with a new question?",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 713386,
          "date": "Tue 08 Nov 2022 02:08",
          "username": "ZZIN",
          "content": "Passed with a new question?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 661935,
          "date": "Wed 07 Sep 2022 05:41",
          "username": "kopper2019kopper2019EnWu",
          "content": "New as of September 6th, 2022<br>A company's application is running on Amazon EC2 instances in an Auto Scaling group. A DevOps engineer needs to ensure there are at least four application servers running at all times. Whenever an update has to be made to the application, the engineer creates a new AMI with the updated configuration and updates the AWS CloudFormation template with the new AMI ID.  After the stack update finishes, the engineer manually terminates the old instances one by one. verifying that the new instance is operational before proceeding. The engineer needs to automate this process.<br>Which action will allow for the LEAST number of manual steps moving forward?A.  Update the CloudFormation template to include the UpdatePolicy attribute with the AutoScalingRollingUpdate policy.B.  Update the CloudFormation template to include the UpdatePolicy attribute with the AutoScalingReplacingUpdate policy.C.  Use an Auto Scaling lifecycle hook to verify that the previous instance is operational before allowing the DevOps engineer's selected instance to terminate.D.  Use an Auto Scaling lifecycle hook to confirm there are at least four running instances before allowing the DevOps engineer's selected instance to terminate.Ans: A",
          "upvote_count": "112",
          "selected_answers": ""
        },
        {
          "id": 661936,
          "date": "Wed 07 Sep 2022 05:41",
          "username": "kopper2019EnWu",
          "content": "C.  Use an Auto Scaling lifecycle hook to verify that the previous instance is operational before allowing the DevOps engineer's selected instance to terminate.D.  Use an Auto Scaling lifecycle hook to confirm there are at least four running instances before allowing the DevOps engineer's selected instance to terminate.Ans: A",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 690940,
          "date": "Mon 10 Oct 2022 11:36",
          "username": "EnWu",
          "content": "Ans: A",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 661933,
          "date": "Wed 07 Sep 2022 05:40",
          "username": "kopper2019huynd6793huynd6793huyrk102",
          "content": "New as of September 6th, 2022<br>A company needs to implement a robust CI/CD pipeline to automate the deployment of an application in AWS. The pipeline must support continuous integration, continuous delivery, and automatic rollback upon deployment failure. The entire CI/CD pipeline must be capable of being re- provisioned in alternate AWS accounts or Regions within minutes. A DevOps engineer has already created an AWS CodeCommit repository to store the source code.<br>Which combination of actions should be taken when building this pipeline to meet these requirements? (Select THREE. )A.  Configure an AWS CodePipehne pipeline with a build stage using AWS CodeBuild.B.  Copy the build artifact from CodeCommit to Amazon S3.C.  Create an Auto Scaling group of Amazon EC2 instances behind an Application Load Balancer (ALB) and set the ALB as the deployment target in AWS CodePipeline.D.  Create an AWS Elastic Beanstalk environment as the deployment target in AWS CodePipeline.E.  Implement an Amazon SQS queue to decouple the pipeline components.F.  Provision all resources using AWS CloudFormation.Ans: ADEsr, I think ADFThe pipeline must support continuous integration, continuous delivery, and automatic rollback upon deployment failure.<br>> A<br>The entire CI/CD pipeline must be capable of being re- provisioned in alternate AWS accounts or Regions within minutes.<br>> DF",
          "upvote_count": "1131",
          "selected_answers": ""
        },
        {
          "id": 703948,
          "date": "Tue 25 Oct 2022 16:31",
          "username": "huynd6793huynd6793huyrk102",
          "content": "Ans: ADEsr, I think ADFThe pipeline must support continuous integration, continuous delivery, and automatic rollback upon deployment failure.<br>> A<br>The entire CI/CD pipeline must be capable of being re- provisioned in alternate AWS accounts or Regions within minutes.<br>> DF",
          "upvote_count": "131",
          "selected_answers": ""
        },
        {
          "id": 703949,
          "date": "Tue 25 Oct 2022 16:32",
          "username": "huynd6793huyrk102",
          "content": "sr, I think ADFThe pipeline must support continuous integration, continuous delivery, and automatic rollback upon deployment failure.<br>> A<br>The entire CI/CD pipeline must be capable of being re- provisioned in alternate AWS accounts or Regions within minutes.<br>> DF",
          "upvote_count": "31",
          "selected_answers": ""
        },
        {
          "id": 738585,
          "date": "Thu 08 Dec 2022 04:25",
          "username": "huyrk102",
          "content": "The pipeline must support continuous integration, continuous delivery, and automatic rollback upon deployment failure.<br>> A<br>The entire CI/CD pipeline must be capable of being re- provisioned in alternate AWS accounts or Regions within minutes.<br>> DF",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 661930,
          "date": "Wed 07 Sep 2022 05:38",
          "username": "kopper2019EnWuhuyrk102",
          "content": "New as of September 6th, 2022<br>A company runs several applications across multiple AWS accounts in an organization in AWS Organizations.<br>Some of the resources are not tagged properly, and the company's finance team cannot determine which costs are associated with which applications. A DevOps engineer must remediate this issue and prevent this issue from happening in the future.<br>Which combination of actions should the DevOps engineer take to meet these requirements? (Select TWO.)<br>A.  Activate the user-defined cost allocation tags in each AWS account.B.  Create and attach an SCP that requires a specific tag.C.  Define each line of business (LOB) in AWS Budgets. Assign the required tag to each resource.D.  Scan all accounts with Tag Editor. Assign the required tag to each resource.E.  Use the budget report to find untagged resources. Assign the required tag to each resource.Ans: BDremediate this issue<br>> D<br>prevent this issue from happening in the future.<br>> B",
          "upvote_count": "121",
          "selected_answers": ""
        },
        {
          "id": 690943,
          "date": "Mon 10 Oct 2022 11:38",
          "username": "EnWuhuyrk102",
          "content": "Ans: BDremediate this issue<br>> D<br>prevent this issue from happening in the future.<br>> B",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 738586,
          "date": "Thu 08 Dec 2022 04:26",
          "username": "huyrk102",
          "content": "remediate this issue<br>> D<br>prevent this issue from happening in the future.<br>> B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 661927,
          "date": "Wed 07 Sep 2022 05:37",
          "username": "kopper2019kopper2019EnWuhuyrk102",
          "content": "New as of September 6th, 2022<br>A company is using AWS Organizations and wants to implement a governance strategy with the following requirements:<br><br>- AWS resource access is restricted to the same two Regions for all accounts.<br>- AWS services are limited to a specific group of authorized services for all accounts.<br>- Authentication is provided by Active Directory.<br>- Access permissions are organized by job function and are identical in each account. Which solution will meet these requirements?<br>A.  Establish an organizational unit (OU) with group policies in the master account to restrict Regions and authorized services. Use AWS Cloud Formation StackSets to provision roles with permissions for each job function, including an IAM trust policy for IAM identity provider authentication in each account.B.  Establish a permission boundary in the master account to restrict Regions and authorized services. Use AWS CloudFormation StackSet to provision roles with permissions for each job function, including an IAM trust policy for IAM identity provider authentication in each account.C.  Establish a service control policy in the master account to restrict Regions and authorized services. Use AWS Resource Access Manager to share master account roles with permissions for each job function, including AWS SSO for authentication in each account.C.  Establish a service control policy in the master account to restrict Regions and authorized services. Use CloudFormation StackSet to provision roles with permissions for each job function, including an IAM trust policy for IAM identity provider authentication in each account.Ans: DAgree D",
          "upvote_count": "1121",
          "selected_answers": ""
        },
        {
          "id": 661928,
          "date": "Wed 07 Sep 2022 05:37",
          "username": "kopper2019EnWuhuyrk102",
          "content": "B.  Establish a permission boundary in the master account to restrict Regions and authorized services. Use AWS CloudFormation StackSet to provision roles with permissions for each job function, including an IAM trust policy for IAM identity provider authentication in each account.C.  Establish a service control policy in the master account to restrict Regions and authorized services. Use AWS Resource Access Manager to share master account roles with permissions for each job function, including AWS SSO for authentication in each account.C.  Establish a service control policy in the master account to restrict Regions and authorized services. Use CloudFormation StackSet to provision roles with permissions for each job function, including an IAM trust policy for IAM identity provider authentication in each account.Ans: DAgree D",
          "upvote_count": "121",
          "selected_answers": ""
        },
        {
          "id": 690946,
          "date": "Mon 10 Oct 2022 11:40",
          "username": "EnWuhuyrk102",
          "content": "Ans: DAgree D",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 738588,
          "date": "Thu 08 Dec 2022 04:33",
          "username": "huyrk102",
          "content": "Agree D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 661923,
          "date": "Wed 07 Sep 2022 05:34",
          "username": "kopper2019kopper2019huynd6793huyrk102ZZIN",
          "content": "NEw Q as of September 6th, 2022<br>A DevOps engineer is currently running a container-based workload on-premises The engineer wants to move the application to AWS, but needs to keep the on-premises solution active because not all APIs will move at the same time. The traffic between AWS and the on-premises network should be secure and encrypted at all times. Low management overload is also a requirement.<br><br>Which combination of actions will meet these criteria? (Select THREE. )<br><br>Create a Network Load Balancer and. for each service, create a listener that points to the correct set of containers either in AWS or on-premises.<br><br>Create an Application Load Balancer and, for each service, create a listener that points to the correct set of containers either in AWS or on-premises.A.  Create a Network Load Balancer and. for each service, create a listener that points to the correct set of containers either in AWS or on-premises.<br>B . Create an Application Load Balancer and, for each service, create a listener that points to the correct set of containers either in AWS or on-premises.C.  Host the AWS containers in Amazon ECS with an EC2 launch type. (D). Host the AWS containers in Amazon ECS with a Fargate launch typeD.  Use Amazon API Gateway to front the workload, and create a VPC link so API Gateway can forward API calls to the on-premises network through a VPN connection.E.  Use Amazon API Gateway to front the workload, and set up public endpoints for the on-premises APIs so API Gateway can access them.B:Create an Application Load Balancer and, for each service, create a listener that points to the correct set of containers either in AWS or on-premises.<br>D:Host the AWS containers in Amazon ECS with a Fargate launch typeE.  Use Amazon API Gateway to front the workload, and create a VPC link so API Gateway can forward API calls to the on-premises network through a VPN connection.Agree BDEIt says three, but what is the correct answer, ABC?",
          "upvote_count": "11411",
          "selected_answers": ""
        },
        {
          "id": 661926,
          "date": "Wed 07 Sep 2022 05:35",
          "username": "kopper2019huynd6793huyrk102ZZIN",
          "content": "A.  Create a Network Load Balancer and. for each service, create a listener that points to the correct set of containers either in AWS or on-premises.<br>B . Create an Application Load Balancer and, for each service, create a listener that points to the correct set of containers either in AWS or on-premises.C.  Host the AWS containers in Amazon ECS with an EC2 launch type. (D). Host the AWS containers in Amazon ECS with a Fargate launch typeD.  Use Amazon API Gateway to front the workload, and create a VPC link so API Gateway can forward API calls to the on-premises network through a VPN connection.E.  Use Amazon API Gateway to front the workload, and set up public endpoints for the on-premises APIs so API Gateway can access them.B:Create an Application Load Balancer and, for each service, create a listener that points to the correct set of containers either in AWS or on-premises.<br>D:Host the AWS containers in Amazon ECS with a Fargate launch typeE.  Use Amazon API Gateway to front the workload, and create a VPC link so API Gateway can forward API calls to the on-premises network through a VPN connection.Agree BDEIt says three, but what is the correct answer, ABC?",
          "upvote_count": "1411",
          "selected_answers": ""
        },
        {
          "id": 703959,
          "date": "Tue 25 Oct 2022 16:48",
          "username": "huynd6793huyrk102ZZIN",
          "content": "B:Create an Application Load Balancer and, for each service, create a listener that points to the correct set of containers either in AWS or on-premises.<br>D:Host the AWS containers in Amazon ECS with a Fargate launch typeE.  Use Amazon API Gateway to front the workload, and create a VPC link so API Gateway can forward API calls to the on-premises network through a VPN connection.Agree BDEIt says three, but what is the correct answer, ABC?",
          "upvote_count": "411",
          "selected_answers": ""
        },
        {
          "id": 738592,
          "date": "Thu 08 Dec 2022 04:39",
          "username": "huyrk102",
          "content": "Agree BDE",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 721760,
          "date": "Sat 19 Nov 2022 05:47",
          "username": "ZZIN",
          "content": "It says three, but what is the correct answer, ABC?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 654607,
          "date": "Wed 31 Aug 2022 03:55",
          "username": "Manh",
          "content": "B make sense",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 327195,
          "date": "Tue 05 Oct 2021 13:12",
          "username": "sanc",
          "content": "B .............",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 326828,
          "date": "Wed 22 Sep 2021 14:36",
          "username": "WhyIronMan",
          "content": "I'll go with B",
          "upvote_count": "2",
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
      "question_text": "<p>A company's application is currently deployed to a single AWS Region. Recently, the company opened a new office on a different continent. The users in the new office are experiencing high latency. The company's application runs on Amazon EC2 instances behind an Application Load Balancer (ALB) and uses Amazon<br>DynamoDB as the database layer. The instances run in an EC2 Auto Scaling group across multiple Availability Zones. A DevOps Engineer is tasked with minimizing application response times and improving availability for users in both Regions.<br>Which combination of actions should be taken to address the latency issues? (Choose three.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CDF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#2",
          "answers": [
            {
              "choice": "<p>A. Create a new DynamoDB table in the new Region with cross-Region replication enabled.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create new ALB and Auto Scaling group global resources and configure the new ALB to direct traffic to the new Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create new ALB and Auto Scaling group resources in the new Region and configure the new ALB to direct traffic to the new Auto Scaling group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create Amazon Route 53 records, health checks, and latency-based routing policies to route to the ALB. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create Amazon Route 53 aliases, health checks, and failover routing policies to route to the ALB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Convert the DynamoDB table to a global table.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 2 discussion",
      "discusstion": [
        {
          "id": 155205,
          "date": "Mon 27 Sep 2021 16:06",
          "username": "Augustoosouza",
          "content": "Answer: C,D,F<br>Creating a new table does not solve the problem, but generates a new one to consolidate the data.",
          "upvote_count": "15",
          "selected_answers": ""
        },
        {
          "id": 755415,
          "date": "Sun 25 Dec 2022 06:35",
          "username": "Bulti",
          "content": "CDF is the correct answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 719368,
          "date": "Wed 16 Nov 2022 07:14",
          "username": "jlb",
          "content": "answer C D F",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CDF"
        },
        {
          "id": 709479,
          "date": "Wed 02 Nov 2022 00:53",
          "username": "tinyflame",
          "content": "Perfect",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CDF"
        },
        {
          "id": 703791,
          "date": "Tue 25 Oct 2022 12:51",
          "username": "ryuhei",
          "content": "Answer is =E2=80=9DC=E3=80=81D=E3=80=81F=E2=80=9D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CDF"
        },
        {
          "id": 610787,
          "date": "Thu 02 Jun 2022 23:37",
          "username": "GCPWizard",
          "content": "Ans: C, D, F<br>E is not correct. You need latency-based routing in this scenario and not fail-over routing",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 582113,
          "date": "Thu 07 Apr 2022 04:09",
          "username": "Naxsi",
          "content": "AGRRED CDF",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 561301,
          "date": "Sat 05 Mar 2022 09:15",
          "username": "[Removed]",
          "content": "for ELB, route53 must use alias record",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CEF"
        },
        {
          "id": 545173,
          "date": "Fri 11 Feb 2022 09:27",
          "username": "blueorca",
          "content": "CDF, cross region replication is for S3",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 253076,
          "date": "Tue 26 Oct 2021 12:05",
          "username": "gmandala",
          "content": "C, D, F",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 224221,
          "date": "Wed 20 Oct 2021 11:33",
          "username": "jackdryan",
          "content": "I'll go with C,D,F",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 219334,
          "date": "Tue 19 Oct 2021 12:10",
          "username": "xlFireman",
          "content": "Agreed with all,CDF",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 209537,
          "date": "Sun 17 Oct 2021 20:29",
          "username": "ChauPhan",
          "content": "C,D,F. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 207584,
          "date": "Thu 14 Oct 2021 22:38",
          "username": "Dgix",
          "content": "CDF.  (Who inputs the \\\"correct\\\" answers in the first place? They are nearly ALWAYS wrong.)",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 163388,
          "date": "Mon 04 Oct 2021 06:27",
          "username": "halfway",
          "content": "CDF. <br>No global ALB or ASG.",
          "upvote_count": "3",
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
      "question_text": "<p>A DevOps engineer used an AWS CloudFormation custom resource to set up AD Connector. The AWS Lambda function executed and created AD Connector, but<br>CloudFormation is not transitioning from CREATE_IN_PROGRESS to CREATE_COMPLETE. <br>Which action should the engineer take to resolve this issue?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#3",
          "answers": [
            {
              "choice": "<p>A. Ensure the Lambda function code has exited successfully.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Ensure the Lambda function code returns a response to the pre-signed URL.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Ensure the Lambda function IAM role has cloudformation:UpdateStack permissions for the stack ARN.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Ensure the Lambda function IAM role has ds:ConnectDirectory permissions for the AWS account.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 3 discussion",
      "discusstion": [
        {
          "id": 326708,
          "date": "Thu 30 Sep 2021 19:05",
          "username": "WhyIronMan",
          "content": "I'll go with B because it is right<br><br>Reference: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/crpg-ref-responses.html",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 755417,
          "date": "Sun 25 Dec 2022 06:38",
          "username": "Bulti",
          "content": "Answer is B- Cloudformation expect the Lambda function invoked using a custom resource to call back at the signed URL",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 659857,
          "date": "Mon 05 Sep 2022 09:29",
          "username": "Goozian",
          "content": "these passedto the lambda as event and invoked :<br><br>{<br>\\\"RequestType\\\" : \\\"Create\\\",<br>\\\"ResponseURL\\\" : \\\"http://pre-signed-S3-url-for-response\\\",<br>\\\"StackId\\\" : \\\"arn:aws:cloudformation:us-west-2:123456789012:stack/stack-name/guid\\\",<br>\\\"RequestId\\\" : \\\"unique id for this create request\\\",<br>\\\"ResourceType\\\" : \\\"Custom::TestResource\\\",<br>\\\"LogicalResourceId\\\" : \\\"MyTestResource\\\",<br>\\\"ResourceProperties\\\" : {<br> \\\"Name\\\" : \\\"Value\\\",<br> \\\"List\\\" : [ \\\"1\\\", \\\"2\\\", \\\"3\\\" ]<br>}<br> }<br><br>and the response has to have: event['ResponseURL']",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 618927,
          "date": "Mon 20 Jun 2022 03:48",
          "username": "SHAAHIBHUSHANAWS",
          "content": "B<br>I thinks its B as Cloudformation stack needs to be updated of the status using helper scripts",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 474464,
          "date": "Mon 08 Nov 2021 20:44",
          "username": "francisco_guerra",
          "content": "I think its A it's not enough with code returns a response to the pre-signed URL it would need to be successfully",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 449948,
          "date": "Tue 02 Nov 2021 22:57",
          "username": "shammous",
          "content": "Option A is broad but could be the right answer. For option B, I'm skeptical as it says \\\"pre-signed URL\\\" (which is for S3) instead of callback URL or ResponseURL.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 410914,
          "date": "Tue 02 Nov 2021 10:15",
          "username": "shwetapathak2301",
          "content": "The answer is B<br>As noted in the CloudFormation documentation, CloudFormation expects your Lambda function to callback to it once it has completed its operation; CloudFormation will pause execution until this callback is received. The event sent to your Lambda function by CloudFormation contains the callback URL (ResponseURL)",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 362919,
          "date": "Mon 25 Oct 2021 14:39",
          "username": "Wrd123456789",
          "content": "I'd say B, but the question is a bit light on details.<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-lambda-function-code-cfnresponsemodule.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 318982,
          "date": "Mon 20 Sep 2021 00:30",
          "username": "Bmaster",
          "content": "I will go with D",
          "upvote_count": "3",
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
      "question_text": "<p>A company plans to stop using Amazon EC2 key pairs for SSH access, and instead plans to use AWS Systems Manager Session Manager. To further enhance security, access to Session Manager must take place over a private network only.<br>Which combinations of actions will accomplish this? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#4",
          "answers": [
            {
              "choice": "<p>A. Allow inbound access to TCP port 22 in all associated EC2 security groups from the VPC CIDR range.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Attach an IAM policy with the necessary Systems Manager permissions to the existing IAM instance profile.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a VPC endpoint for Systems Manager in the desired Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy a new EC2 instance that will act as a bastion host to the rest of the EC2 instance fleet.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Remove any default routes in the associated route tables.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 4 discussion",
      "discusstion": [
        {
          "id": 155150,
          "date": "Sun 19 Sep 2021 20:12",
          "username": "Augustoosouza",
          "content": "I choose B&C. <br>A - wrong. There is no need to open doors.<br>B - Correct<br>C - Correct<br>D - System Manager does not need a bation host.<br>It's wrong.<br><br>Ref: https://aws.amazon.com/en/blogs/aws/new-session-manager/<br>https://cloudonaut.io/goodbye-ssh-use-aws-session-manager-instead/",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 755420,
          "date": "Sun 25 Dec 2022 06:43",
          "username": "Bulti",
          "content": "B,C is the right answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 744906,
          "date": "Wed 14 Dec 2022 10:03",
          "username": "Emekizle",
          "content": "B and C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 275848,
          "date": "Thu 28 Oct 2021 21:24",
          "username": "Kaguar",
          "content": "b and c",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 262338,
          "date": "Wed 27 Oct 2021 23:53",
          "username": "Umer24rjaganrjagan",
          "content": "Remaining Question # 58 (Topic 2)A.  Update the attached IAM policies to allow access to the appropriate KMS key from the CodeDeploy role where the application will be deployed.B.  Update the attached IAM policies to allow access to the appropriate KMS key from the EC2 instance roles where the application will be deployed.C.  Update the CMK key policy to allow access to the appropriate KMS key from the CodeDeploy role where the application will be deployed.D.  Update the CMK key policy to allow access to the appropriate KMS key from the EC2 instance roles where the application will be deployed.<br><br>Answer-AMissing question..I'll go with A",
          "upvote_count": "421",
          "selected_answers": ""
        },
        {
          "id": 277677,
          "date": "Fri 29 Oct 2021 00:18",
          "username": "rjaganrjagan",
          "content": "Missing question..I'll go with A",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 280397,
          "date": "Mon 01 Nov 2021 06:11",
          "username": "rjagan",
          "content": "I'll go with A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 262307,
          "date": "Sun 24 Oct 2021 14:30",
          "username": "Umer24GVGREAT",
          "content": "Question # 57 (Topic 2)<br>A company uses AWS KMS with CMKs and manual key rotation to meet regulatory compliance requirements. The security team wants to be notified when any keys have not been rotated after 90 days. Which solution will accomplish this?A.  Configure AWS KMS to publish to an Amazon SNS topic when keys are more than 90 days old.B.  Configure an Amazon CloudWatch Events event to launch an AWS Lambda function to call the AWS Trusted Advisor API and publish to an Amazon SNS topic.C.  Develop an AWS Config custom rule that publishes to an Amazon SNS topic when keys are more than 90 days old.D.  Configure AWS Security Hub lo publish to an Amazon SNS topic when keys are more than 90 days old.C is the answer",
          "upvote_count": "34",
          "selected_answers": ""
        },
        {
          "id": 273568,
          "date": "Thu 28 Oct 2021 07:45",
          "username": "GVGREAT",
          "content": "C is the answer",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 258714,
          "date": "Tue 19 Oct 2021 01:20",
          "username": "Umer24solo18mackbellkyo",
          "content": "Remaining Question # 56 (Topic 2)B.  Establish a permission boundary in the master account to restrict Regions and authorized services. Use AWS CloudFormation StackSet to provision roles with permissions for each job function, including an IAM trust policy for IAM identity provider authentication in each account.C.  Establish a service control policy in the master account to restrict Regions and authorized services. Use AWS Resource Access Manager to share master account roles with permissions for each job function, including AWS SSO for authentication in each account.D.  Establish a service control policy in the master account to restrict Regions and authorized services. Use CloudFormation StackSet to provision roles with permissions for each job function, including an IAM trust policy for IAM identity provider authentication in each account.Dis corrctWell I would go with service control policy so C or D should be correct.<br>C wants to use RAM to share roles between master and child accounts.<br>From this link: https://docs.aws.amazon.com/ram/latest/userguide/shareable.html<br>I would say this is not possible.<br>So I would go with D. <br>Any thoughts?I go with D too.",
          "upvote_count": "2462",
          "selected_answers": ""
        },
        {
          "id": 297938,
          "date": "Fri 05 Nov 2021 08:28",
          "username": "solo18",
          "content": "Dis corrct",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 260785,
          "date": "Tue 19 Oct 2021 07:57",
          "username": "mackbellkyo",
          "content": "Well I would go with service control policy so C or D should be correct.<br>C wants to use RAM to share roles between master and child accounts.<br>From this link: https://docs.aws.amazon.com/ram/latest/userguide/shareable.html<br>I would say this is not possible.<br>So I would go with D. <br>Any thoughts?I go with D too.",
          "upvote_count": "62",
          "selected_answers": ""
        },
        {
          "id": 290920,
          "date": "Wed 03 Nov 2021 16:37",
          "username": "kyo",
          "content": "I go with D too.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 258712,
          "date": "Mon 18 Oct 2021 15:05",
          "username": "Umer24",
          "content": "Question # 56 (Topic 2)<br>A company is using AWS Organizations and wants to implement a governance strategy with the following requirements: AWS resource access is restricted to the same two Regions for all accounts. AWS services are limited to a specific group of authorized services for all accounts. Authentication is provided by Active Directory. Access permissions are organized by job function and are identical in each account. Which solution will meet these requirements?A.  Establish an organizational unit (OU) with group policies in the master account to restrict Regions and authorized services. Use AWS CloudFormation StackSets to provision roles with permissions for each job function, including an IAM trust policy for IAM identity provider authentication in each account.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 258707,
          "date": "Thu 14 Oct 2021 01:21",
          "username": "Umer24huynd6793apcloudrjaganrjaganyyysolo18apcloud",
          "content": "Remaining Question # 55 (Topic 2)A.  Create an AWS Organizations SCP that denies access to all non-global services in non-US Regions Attach the policy to the root of the organization.B.  Configure AWS CloudTrail to send logs to Amazon CloudWatch Logs and enable it for all Regions Use a CloudWatch Logs metric filter to send an alert on any service activity in non-US Regions.C.  Use an AWS Lambda function that checks for AWS service activity and deploy it to all Regions Write an Amazon CloudWatch Events rule that runs the Lambda function every hour, sending an alert if activity is found in a non-US Region.D.  Use an AWS Lambda function to query Amazon Inspector to look for service activity in non-US Regions and send alerts if any activity is found.E.  Write a SCP using the awsRequestedRegion condition key limiting access to US Regions Apply the policy to all users, groups, and roles.Ans: ABthis seems like the most likely answers.Answer please..One option is C for sure. Anyone have idea about the other option?I think: A BB and Cthis is super super WRONG",
          "upvote_count": "22111311",
          "selected_answers": ""
        },
        {
          "id": 703965,
          "date": "Tue 25 Oct 2022 16:57",
          "username": "huynd6793apcloud",
          "content": "Ans: ABthis seems like the most likely answers.",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 731114,
          "date": "Wed 30 Nov 2022 05:55",
          "username": "apcloud",
          "content": "this seems like the most likely answers.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 277678,
          "date": "Sun 31 Oct 2021 15:17",
          "username": "rjaganrjaganyyy",
          "content": "Answer please..One option is C for sure. Anyone have idea about the other option?I think: A B",
          "upvote_count": "113",
          "selected_answers": ""
        },
        {
          "id": 280398,
          "date": "Tue 02 Nov 2021 11:06",
          "username": "rjagan",
          "content": "One option is C for sure. Anyone have idea about the other option?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 293158,
          "date": "Thu 04 Nov 2021 02:20",
          "username": "yyy",
          "content": "I think: A B",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 297935,
          "date": "Thu 04 Nov 2021 10:14",
          "username": "solo18apcloud",
          "content": "B and Cthis is super super WRONG",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 731113,
          "date": "Wed 30 Nov 2022 05:55",
          "username": "apcloud",
          "content": "this is super super WRONG",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 258704,
          "date": "Wed 13 Oct 2021 13:48",
          "username": "Umer24",
          "content": "Question # 55 (Topic 2)<br>A DevOps engineer is implementing governance controls for a company that requires its infrastructure to be housed within the United States. The engineer must restrict which Regions can be used. and ensure an alert is sent as soon as possible if any activity outside the governance policy takes place The controls should be automatically enabled on any new Region outside the United States. Which combination of actions will meet these requirements? (Select TWO)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 253248,
          "date": "Tue 12 Oct 2021 19:54",
          "username": "gmandala",
          "content": "B and C for me",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 233208,
          "date": "Tue 12 Oct 2021 12:21",
          "username": "svjl",
          "content": "BC.  D is wrong, SM replaces Bastion",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 224556,
          "date": "Sat 09 Oct 2021 13:57",
          "username": "jackdryan",
          "content": "I'll go with B,C",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 210054,
          "date": "Fri 08 Oct 2021 07:47",
          "username": "ChauPhan",
          "content": "B,C<br>https://aws.amazon.com/premiumsupport/knowledge-center/ec2-systems-manager-vpc-endpoints/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 180646,
          "date": "Thu 30 Sep 2021 17:15",
          "username": "aylee",
          "content": "B, C<br>https://aws.amazon.com/ko/premiumsupport/knowledge-center/ec2-systems-manager-vpc-endpoints/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 163607,
          "date": "Tue 21 Sep 2021 22:36",
          "username": "halfwayhalfwayhalfway",
          "content": "BC. <br>The EC2 instances need to access relevant services, so B<br>Use VPC endpoint to access SSM in private network only, so CIn B, it should be EC2 instance profile, instead of IAM instance profileIgnore this comment, it is actually called IAM instance profile: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html",
          "upvote_count": "312",
          "selected_answers": ""
        },
        {
          "id": 163608,
          "date": "Wed 22 Sep 2021 16:43",
          "username": "halfwayhalfway",
          "content": "In B, it should be EC2 instance profile, instead of IAM instance profileIgnore this comment, it is actually called IAM instance profile: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 163612,
          "date": "Sat 25 Sep 2021 06:59",
          "username": "halfway",
          "content": "Ignore this comment, it is actually called IAM instance profile: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html",
          "upvote_count": "2",
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
      "question_text": "<p>A company runs an application with an Amazon EC2 and on-premises configuration. A DevOps Engineer needs to standardize patching across both environments. Company policy dictates that patching only happens during non-business hours.<br>Which combination of actions will meet these requirements? (Choose three.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ABF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#5",
          "answers": [
            {
              "choice": "<p>A. Add the physical machines into AWS Systems Manager using Systems Manager Hybrid Activations.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Attach an IAM role to the EC2 instances, allowing them to be managed by AWS Systems Manager.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create IAM access keys for the on-premises machines to interact with AWS Systems Manager.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Execute an AWS Systems Manager Automation document to patch the systems every hour.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use Amazon CloudWatch Events scheduled events to schedule a patch window.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Use AWS Systems Manager Maintenance Windows to schedule a patch window.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 5 discussion",
      "discusstion": [
        {
          "id": 224515,
          "date": "Sun 07 Nov 2021 06:00",
          "username": "jackdryan",
          "content": "I'll go with A,B,F",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 755423,
          "date": "Sun 25 Dec 2022 06:48",
          "username": "Bulti",
          "content": "A,B and F is the right answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 727228,
          "date": "Sat 26 Nov 2022 04:07",
          "username": "Bulti",
          "content": "A,B,Fhttps://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-managed-instance-activation.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 544877,
          "date": "Thu 10 Feb 2022 22:04",
          "username": "blueorca",
          "content": "While ABF is correct, where is Patch Manager?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 209862,
          "date": "Tue 26 Oct 2021 12:37",
          "username": "ChauPhan",
          "content": "A B F are my answers",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 201437,
          "date": "Sat 23 Oct 2021 01:02",
          "username": "kj07",
          "content": "Answer: ABF<br>C - no, the best practice is to use IAM roles<br>D - no, you need a maintenance window<br>E- no, you don't need CW in this scenario",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 163575,
          "date": "Tue 19 Oct 2021 22:39",
          "username": "halfway",
          "content": "ABF<br>B is required by SSM agent to perform patch actions",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 155553,
          "date": "Fri 01 Oct 2021 04:55",
          "username": "jxp09jxp09",
          "content": "my answer is FABhttps://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances.html",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 155554,
          "date": "Thu 07 Oct 2021 20:57",
          "username": "jxp09",
          "content": "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances.html",
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
      "question_text": "<p>A company has many applications. Different teams in the company developed the applications by using multiple languages and frameworks. The applications run on premises and on different servers with different operating systems. Each team has its own release protocol and process. The company wants to reduce the complexity of the release and maintenance of these applications.<br>The company is migrating its technology stacks, including these applications, to AWS. The company wants centralized control of source code, a consistent and automatic delivery pipeline, and as few maintenance tasks as possible on the underlying infrastructure.<br>What should a DevOps engineer do to meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#6",
          "answers": [
            {
              "choice": "<p>A. Create one AWS CodeCommit repository for all applications. Put each application's code in different branch. Merge the branches, and use AWS CodeBuild to build the applications. Use AWS CodeDeploy to deploy the applications to one centralized application server.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create one AWS CodeCommit repository for each of the applications Use AWS CodeBuild to build the applications one at a time. Use AWS CodeDeploy to deploy the applications to one centralized application server.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create one AWS CodeCommit repository for each of the applications. Use AWS CodeBuild to build the applications one at a time to create one AMI for each server. Use AWS CloudFormation StackSets to automatically provision and decommission Amazon EC2 fleets by using these AMIs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create one AWS CodeCommit repository for each of the applications. Use AWS CodeBuild to build one Docker image for each application in Amazon Elastic Container Registry (Amazon ECR). Use AWS CodeDeploy to deploy the applications to Amazon Elastic Container Service (Amazon ECS) on infrastructure that AWS Fargate manages.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 6 discussion",
      "discusstion": [
        {
          "id": 764814,
          "date": "Tue 03 Jan 2023 16:30",
          "username": "ericzaj",
          "content": "There is a requirement for \\\"as few maintenance tasks as possible on the underlying infrastructure.\\\". Fargate is serverless. This is the best answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 755426,
          "date": "Sun 25 Dec 2022 06:53",
          "username": "Bulti",
          "content": "Answer is D. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 747109,
          "date": "Fri 16 Dec 2022 12:39",
          "username": "ceros399",
          "content": "iS B ,you need docker for all different OS and Fargate toreduce the management of ifrastructure",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 734388,
          "date": "Sat 03 Dec 2022 12:27",
          "username": "ericzaj",
          "content": "B does not look correct. B states CodeDeploy to one application server. Requirements are to move multiple application types running on multiple instance types. D is best answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 725126,
          "date": "Wed 23 Nov 2022 13:52",
          "username": "Xenavis",
          "content": "D since is different coding languages and different tehcnologies behind that.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 719688,
          "date": "Wed 16 Nov 2022 14:37",
          "username": "katekarin",
          "content": "Option D because Fargate requires less maintenance than EC2 instances.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 719401,
          "date": "Wed 16 Nov 2022 07:54",
          "username": "jlb",
          "content": "D : Docker is needed because various OS and language ared used",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 716639,
          "date": "Sat 12 Nov 2022 11:19",
          "username": "flavins",
          "content": "B would have been a beautiful answer but \\\"central application server\\\" spoilt it for applications developed with different programming languages",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 710928,
          "date": "Fri 04 Nov 2022 07:06",
          "username": "developer_404",
          "content": "D -> It covers, source code control, build and continuous deployment along with Maintenance tasks using fargate",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 690819,
          "date": "Mon 10 Oct 2022 09:31",
          "username": "nzin4x",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 688441,
          "date": "Fri 07 Oct 2022 09:54",
          "username": "RogerMarshrobotgeek",
          "content": "D is more suitable.The main point when choosing between C and D is the line \\\"as few maintenance tasks as possible on the underlying infrastructure\\\", clearly they want fargate, they don't care about their money, Bezos will",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 690224,
          "date": "Sun 09 Oct 2022 15:31",
          "username": "robotgeek",
          "content": "The main point when choosing between C and D is the line \\\"as few maintenance tasks as possible on the underlying infrastructure\\\", clearly they want fargate, they don't care about their money, Bezos will",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 680728,
          "date": "Tue 27 Sep 2022 14:10",
          "username": "bestoneguy",
          "content": "B is wrong since it is multiple OS, languages, framework, so cannot deploy to 1 server. Best response is D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 660753,
          "date": "Tue 06 Sep 2022 05:20",
          "username": "dangdoan",
          "content": "D.  multiple languages and frameworks . So need docker",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 655006,
          "date": "Wed 31 Aug 2022 12:50",
          "username": "ohcn",
          "content": "D fullfils all requirements",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 654772,
          "date": "Wed 31 Aug 2022 06:56",
          "username": "Manh",
          "content": "D make sense",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 654635,
          "date": "Wed 31 Aug 2022 04:39",
          "username": "Brain4",
          "content": "I will go with D managed Fargate and centralised",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 654463,
          "date": "Wed 31 Aug 2022 00:16",
          "username": "colinquek",
          "content": "D.  Fulfills all criteria since there is no mention about cost savings.",
          "upvote_count": "2",
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
      "question_text": "<p>A DevOps engineer is developing an application for a company. The application needs to persist files to Amazon S3. The application needs to upload files with different security classifications that the company defines. These classifications include confidential, private, and public. Files that have a confidential classification must not be viewable by anyone other than the user who uploaded them. The application uses the IAM role of the user to call the S3 API operations.<br>The DevOps engineer has modified the application to add a DataClassification tag with the value of confidential and an Owner tag with the uploading user's ID to each confidential object that is uploaded to Amazon S3.<br>Which set of additional steps must the DevOps engineer take to meet the company's requirements?<br></p>",
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
              "choice": "<p>A. Modify the S3 bucket's ACL to grant bucket-owner-read access to the uploading user's IAM role. Create an IAM policy that grants s3:GetObject operations on the S3 bucket when aws:ResourceTag/DataClassification equals confidential, and s3:ExistingObjectTag/Owner equals ${aws:userid}. Attach the policy to the IAM roles for users who require access to the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Modify the S3 bucket policy to allow the s3:GetObject action when aws:ResourceTag/DataClassification equals confidential, and s3:ExistingObjectTag/Owner equals ${aws:userid}. Create an IAM policy that grants s3:GetObject operations on the S3 bucket. Attach the policy to the IAM roles for users who require access to the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the S3 bucket policy to allow the s3:GetObject action when aws:ResourceTag/DataClassification equals confidential, and aws:RequesttTag/Owner equals ${aws:userid}. Create an IAM policy that grants s3:GetObject operations on the S3 bucket. Attach the policy to the IAM roles for users who require access to the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the S3 bucket's ACL to grant authenticated-read access when aws:ResourceTag/DataClassification equals confidential, and s3:ExistingObjectTag/Owner equals ${aws:userid}. Create an IAM policy that grants s3:GetObject operations on the S3 bucket. Attach the policy to the IAM roles for users who require access to the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 7 discussion",
      "discusstion": [
        {
          "id": 757092,
          "date": "Mon 26 Dec 2022 06:49",
          "username": "Bulti",
          "content": "B.  Based on the link given by ohcn",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 690732,
          "date": "Mon 10 Oct 2022 07:37",
          "username": "nzin4x",
          "content": "good enough",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 660754,
          "date": "Tue 06 Sep 2022 05:21",
          "username": "dangdoan",
          "content": "B sound correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 655010,
          "date": "Wed 31 Aug 2022 12:54",
          "username": "ohcn",
          "content": "B - https://docs.aws.amazon.com/AmazonS3/latest/userguide/tagging-and-policies.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 654469,
          "date": "Wed 31 Aug 2022 00:22",
          "username": "colinquek",
          "content": "B<br>Sounds most doable",
          "upvote_count": "1",
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
      "question_text": "<p>A company has developed an AWS Lambda function that handles orders received through an API. The company is using AWS CodeDeploy to deploy the Lambda function as the final stage of a CI/CD pipeline.<br>A DevOps Engineer has noticed there are intermittent failures of the ordering API for a few seconds after deployment. After some investigation, the DevOps<br>Engineer believes the failures are due to database changes not having fully propagated before the Lambda function begins executing.<br>How should the DevOps Engineer overcome this?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#8",
          "answers": [
            {
              "choice": "<p>A. Add a BeforeAllowTraffic hook to the AppSpec file that tests and waits for any necessary database changes before traffic can flow to the new version of the Lambda function<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add an AfterAllowTraffic hook to the AppSpec file that forces traffic to wait for any pending database changes before allowing the new version of the Lambda function to respond<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Add a BeforeInstall hook to the AppSpec file that tests and waits for any necessary database changes before deploying the new version of the Lambda function<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add a ValidateService hook to the AppSpec file that inspects incoming traffic and rejects the payload if dependent services, such as the database, are not yet ready<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 8 discussion",
      "discusstion": [
        {
          "id": 72685,
          "date": "Mon 20 Sep 2021 01:03",
          "username": "otsu",
          "content": "should be A<br>https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-lambda",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 218731,
          "date": "Tue 19 Oct 2021 14:09",
          "username": "xlFireman",
          "content": "A - Correct<br>B - Does not fit into the frame of the question. We want the database to be up and running BEFORE we start serving production traffic.<br>C - Not applicable in the appspec.yml file for Lambda<br>D - Same explanation as C",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 763052,
          "date": "Sun 01 Jan 2023 06:03",
          "username": "Bulti",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 660757,
          "date": "Tue 06 Sep 2022 05:23",
          "username": "dangdoan",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 356986,
          "date": "Thu 04 Nov 2021 09:37",
          "username": "idforadf",
          "content": "AWS Lambda deployment allows only 2 hooks i.e. BeforeAllowTraffic& AfterAllowTraffic . So options C and D are ruled out.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 224195,
          "date": "Sat 23 Oct 2021 00:17",
          "username": "jackdryanpeddyua",
          "content": "I'll go with AI see what you're doing there kid",
          "upvote_count": "41",
          "selected_answers": ""
        },
        {
          "id": 377867,
          "date": "Sun 07 Nov 2021 07:42",
          "username": "peddyua",
          "content": "I see what you're doing there kid",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 209284,
          "date": "Mon 11 Oct 2021 16:24",
          "username": "ChauPhan",
          "content": "A is correct. Other options is not for Lambda",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 97458,
          "date": "Tue 05 Oct 2021 12:12",
          "username": "cybe001",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 85401,
          "date": "Sat 02 Oct 2021 09:28",
          "username": "leotoras",
          "content": "A is correct.",
          "upvote_count": "1",
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
      "question_text": "<p>A software company wants to automate the build process for a project where the code is stored in GitHub. When the repository is updated, source code should be compiled, tested, and pushed to Amazon S3.<br>Which combination of steps would address these requirements? (Choose three.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ABC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#9",
          "answers": [
            {
              "choice": "<p>A. Add a buildspec.yml file to the source code with build instructions.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure a GitHub webhook to trigger a build every time a code change is pushed to the repository.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS CodeBuild project with GitHub as the source repository.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS CodeDeploy application with the Amazon EC2/On-Premises compute platform.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an AWS OpsWorks deployment with the install dependencies command.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Provision an Amazon EC2 instance to perform the build.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 9 discussion",
      "discusstion": [
        {
          "id": 326740,
          "date": "Sun 31 Oct 2021 02:48",
          "username": "WhyIronMan",
          "content": "I'll go with A, B, C<br><br>Reference:<br>https://docs.aws.amazon.com/codebuild/latest/userguide/github-webhook.html",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 335041,
          "date": "Tue 02 Nov 2021 07:06",
          "username": "sb333",
          "content": "ABC is the correct answer.<br>https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html<br>https://docs.aws.amazon.com/codebuild/latest/userguide/sample-github-pull-request.html",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 763053,
          "date": "Sun 01 Jan 2023 06:06",
          "username": "Bulti",
          "content": "A,B,C is the right answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 744879,
          "date": "Wed 14 Dec 2022 09:34",
          "username": "metavers22",
          "content": "i'll go with this",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ABC"
        },
        {
          "id": 726462,
          "date": "Fri 25 Nov 2022 08:15",
          "username": "ducluanxutrieu",
          "content": "I'll go with A, B, C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ABC"
        },
        {
          "id": 716650,
          "date": "Sat 12 Nov 2022 11:47",
          "username": "flavins",
          "content": "I will go for ABC",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ABC"
        },
        {
          "id": 709651,
          "date": "Wed 02 Nov 2022 07:41",
          "username": "flavins",
          "content": "ABC for me",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 665896,
          "date": "Sun 11 Sep 2022 09:07",
          "username": "MikeyJ",
          "content": "With a webhook in place, each time a Git user pushes a commit, your repository is automatically retrieved, zipped, and uploaded to an Amazon Simple Storage System (Amazon S3) bucket. You can then configure AWS services such as AWS CodePipeline, AWS CodeBuild, and AWS CodeDeploy to use the S3 bucket as a source.<br>https://aws.amazon.com/quickstart/architecture/git-to-s3-using-webhooks/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 664095,
          "date": "Fri 09 Sep 2022 02:35",
          "username": "colinquek",
          "content": "ABC - although the 3 ans address only the CI part. The other options while looking like they address deployments, actually dont fit in to this scenario.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        }
      ]
    },
    {
      "question_id": "#10",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An online retail company based in the United States plans to expand its operations to Europe and Asia in the next six months. Its product currently runs on<br>Amazon EC2 instances behind an Application Load Balancer. The instances run in an Amazon EC2 Auto Scaling group across multiple Availability Zones. All data is stored in an Amazon Aurora database instance.<br>When the product is deployed in multiple regions, the company wants a single product catalog across all regions, but for compliance purposes, its customer information and purchases must be kept in each region.<br>How should the company meet these requirements with the LEAST amount of application changes?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#10",
          "answers": [
            {
              "choice": "<p>A. Use Amazon Redshift for the product catalog and Amazon DynamoDB tables for the customer information and purchases.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon DynamoDB global tables for the product catalog and regional tables for the customer information and purchases.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Aurora with read replicas for the product catalog and additional local Aurora instances in each region for the customer information and purchases.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Aurora for the product catalog and Amazon DynamoDB global tables for the customer information and purchases.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 10 discussion",
      "discusstion": [
        {
          "id": 20679,
          "date": "Tue 21 Sep 2021 09:15",
          "username": "marwan",
          "content": "since its minimal changes, stick with Aurora",
          "upvote_count": "17",
          "selected_answers": ""
        },
        {
          "id": 21243,
          "date": "Sat 25 Sep 2021 15:27",
          "username": "BeastX",
          "content": "minimal changes, so change to dynamodb may need schema change, C makes more sense.",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 763055,
          "date": "Sun 01 Jan 2023 06:08",
          "username": "Bulti",
          "content": "Due to least amount of changes needed, the answer is C. ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 664097,
          "date": "Fri 09 Sep 2022 02:36",
          "username": "colinquek",
          "content": "c for me",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 581252,
          "date": "Tue 05 Apr 2022 14:45",
          "username": "jj22222",
          "content": "C.  Use Aurora with read replicas for the product catalog and additional local Aurora instances in each region for the customer information and purchases.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 447382,
          "date": "Fri 05 Nov 2021 01:24",
          "username": "oopsy",
          "content": "Go C -1",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 446803,
          "date": "Thu 04 Nov 2021 06:09",
          "username": "certking",
          "content": "if you have developed with both SQL-like databases, i.e.: RDS, Aurora, and with DynamoDB, you should know the database schema design and CRUD operations are VASTLY different between SQL and DynamoDB. ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 320215,
          "date": "Thu 04 Nov 2021 05:42",
          "username": "WhyIronMan",
          "content": "I'll go with C)<br>The question wants \\\"LEAST amount of application changes\\\", so ANY option with includes DynamoDB (even for half portion) will require a LOT of changes.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 318032,
          "date": "Wed 03 Nov 2021 23:10",
          "username": "glam",
          "content": "C.  Use Aurora with read replicas for the product catalog and additional local Aurora instances in each region for the customer information and purchases.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 226980,
          "date": "Tue 26 Oct 2021 21:59",
          "username": "Coffeinerd",
          "content": "Key info:\\\"LEAST amount of application changes\\\", so not changing DB type or engine, no code refactoring!<br>Right: C<br>Wrong:<br>-A: require code changes, Redshift makes no sense here as it is for data warehousing<br>-B: require again code changes<br>-D: would imply code changes as well.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 223180,
          "date": "Sat 23 Oct 2021 15:13",
          "username": "jackdryan",
          "content": "I'll go with C",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 207067,
          "date": "Thu 21 Oct 2021 11:18",
          "username": "Dr_Wells",
          "content": "ItsOption C cause, we only need a LEAST amount of changes.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 144587,
          "date": "Wed 20 Oct 2021 03:14",
          "username": "cowshield",
          "content": "It's C - all the others require application changes to accommodate a different DB, which is undesirable since the question is asking for minimal application changes. It's worth adding that in the real world things are often much more complicated than this, so you'd want to revisit the business requirements, validate them, forecast future requirements and make a decision. Having regions of US, Asia and Europe is a gross simplification, because what you really need to consider is the data protection regulations in specific jurisdictions, not continents. e.g. Indonesia is in Asia and up until Oct 2019 required customer data to be held in-country, but there is no AWS data centre there. What do you do?",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 122123,
          "date": "Sun 17 Oct 2021 07:03",
          "username": "AKD",
          "content": "Can't be B as it requires application changes.<br>C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 111092,
          "date": "Wed 13 Oct 2021 08:53",
          "username": "Kuang",
          "content": "My Selection C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 106962,
          "date": "Tue 12 Oct 2021 05:19",
          "username": "un",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 80916,
          "date": "Wed 06 Oct 2021 15:48",
          "username": "Raj9",
          "content": "Except C, all will need schema changes, so C makes more sense",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#11",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to ensure that their EC2 instances are secure. They want to be notified if any new vulnerabilities are discovered on their instances, and they also want an audit trail of all login activities on the instances.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#11",
          "answers": [
            {
              "choice": "<p>A. Use AWS Systems Manager to detect vulnerabilities on the EC2 instances. Install the Amazon Kinesis Agent to capture system logs and deliver them to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Systems Manager to detect vulnerabilities on the EC2 instances. Install the Systems Manager Agent to capture system logs and view login activity in the CloudTrail console.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure Amazon CloudWatch to detect vulnerabilities on the EC2 instances. Install the AWS Config daemon to capture system logs and view them in the AWS Config console.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure Amazon Inspector to detect vulnerabilities on the EC2 instances. Install the Amazon CloudWatch Agent to capture system logs and record them via Amazon CloudWatch Logs.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 11 discussion",
      "discusstion": [
        {
          "id": 330224,
          "date": "Tue 02 Nov 2021 02:47",
          "username": "devopp",
          "content": "Has to be D with Inspector & CW Logging there.",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 763056,
          "date": "Sun 01 Jan 2023 06:09",
          "username": "Bulti",
          "content": "D is the correct answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 719411,
          "date": "Wed 16 Nov 2022 08:06",
          "username": "jlb",
          "content": "D: AWS Inspector for vulnerability scans",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 711809,
          "date": "Sat 05 Nov 2022 15:26",
          "username": "XAvenger",
          "content": "D. <br>SSM can be used to check if configuration is compliant, but Inspector is used to check EC2 vulnerabilities.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 693913,
          "date": "Thu 13 Oct 2022 15:07",
          "username": "Vasudevay",
          "content": "B seems right as It requires<br>Login trail as well >> Cloud Trail<br>System vulnerability >> can be detected by SSM via SSM agent installation",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 671598,
          "date": "Sat 17 Sep 2022 16:42",
          "username": "Arbaj",
          "content": "Obvious Choice, Inspector ! For any vulnerability at instance level.<br>And Cloud watch to log all actions",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 664099,
          "date": "Fri 09 Sep 2022 02:37",
          "username": "colinquek",
          "content": "https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 654697,
          "date": "Wed 31 Aug 2022 05:36",
          "username": "Brain4",
          "content": "Inspector for vulnerability definitely makes it D.  If not all else is wrong",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 556556,
          "date": "Sat 26 Feb 2022 08:20",
          "username": "msrividyavihari[Removed]robotgeek",
          "content": "It should be B. As the login activity can be see in Cloud Trail only.login activity to the instance, not the AWS account would be in the system Logs. No need for Cloudtrail.Systems Manager agent does not keep host logs, only own agent logs and records them locally",
          "upvote_count": "111",
          "selected_answers": ""
        },
        {
          "id": 589673,
          "date": "Fri 22 Apr 2022 03:44",
          "username": "[Removed]robotgeek",
          "content": "login activity to the instance, not the AWS account would be in the system Logs. No need for Cloudtrail.Systems Manager agent does not keep host logs, only own agent logs and records them locally",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 690299,
          "date": "Sun 09 Oct 2022 17:20",
          "username": "robotgeek",
          "content": "Systems Manager agent does not keep host logs, only own agent logs and records them locally",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 546483,
          "date": "Sun 13 Feb 2022 15:04",
          "username": "blueorca",
          "content": "Ideally want Inspector and CloudTrail, but CWL would do as well.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 380538,
          "date": "Fri 05 Nov 2021 05:37",
          "username": "okida",
          "content": "D - Only Inspector helps to detect vulnerability issue. Systems Manager and CloudWatch can't do it.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 326013,
          "date": "Tue 19 Oct 2021 17:01",
          "username": "WhyIronMan",
          "content": "I'll go with D",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 311982,
          "date": "Wed 13 Oct 2021 02:02",
          "username": "faltu1985",
          "content": "Ans is D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 311928,
          "date": "Sun 03 Oct 2021 03:51",
          "username": "rscloud",
          "content": "Amazon inspector for assessment<br>D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 310318,
          "date": "Tue 28 Sep 2021 02:51",
          "username": "Rajarshi",
          "content": "ans: D",
          "upvote_count": "3",
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
      "question_text": "<p>A DevOps Engineer needs to back up sensitive Amazon S3 objects that are stored within an S3 bucket with a private bucket policy using the S3 cross-region replication functionality. The objects need to be copied to a target bucket in a different AWS Region and account.<br>Which actions should be performed to enable this replication? (Choose three.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ADE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#12",
          "answers": [
            {
              "choice": "<p>A. Create a replication IAM role in the source account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a replication IAM role in the target account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Add statements to the source bucket policy allowing the replication IAM role to replicate objects.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add statements to the target bucket policy allowing the replication IAM role to replicate objects.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a replication rule in the source bucket to enable the replication.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create a replication rule in the target bucket to enable the replication.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 12 discussion",
      "discusstion": [
        {
          "id": 348098,
          "date": "Thu 23 Sep 2021 02:04",
          "username": "JohnnieWalker",
          "content": "ADE -The replication rule is created in the source bucket",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 763064,
          "date": "Sun 01 Jan 2023 06:23",
          "username": "Bulti",
          "content": "ADE is the correct answer. To enable cross account replication weneed to<br>1.create a replication rule in the source bucket<br>2. Create an IAM role in the source account to perform replication<br>3. Create a resource policy on the destination bucket that grant permission to the IAM role in the source account to replicate objects into the destination bucket.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 657675,
          "date": "Fri 02 Sep 2022 19:49",
          "username": "ohcn",
          "content": "ADE - https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-walkthrough-2.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 655648,
          "date": "Thu 01 Sep 2022 03:14",
          "username": "colinquek",
          "content": "BDE - B becos the source acct should assume the target acct's IAM role to copy things into it.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 617431,
          "date": "Fri 17 Jun 2022 00:56",
          "username": "SHAAHIBHUSHANAWS",
          "content": "ADE<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-walkthrough-2.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 546466,
          "date": "Sun 13 Feb 2022 14:26",
          "username": "blueorca",
          "content": "ADE should be the answer. F is incorrect.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ADE"
        },
        {
          "id": 524537,
          "date": "Sun 16 Jan 2022 01:56",
          "username": "herohiro",
          "content": "I would vote for ADE",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ADE"
        },
        {
          "id": 377938,
          "date": "Fri 05 Nov 2021 23:52",
          "username": "peddyua",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/copy-s3-objects-account/<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-change-owner.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 377937,
          "date": "Thu 28 Oct 2021 17:54",
          "username": "peddyuaXAvenger",
          "content": "BCF<br>Attach bucket policy in source account<br>Attach am policy to user/role in B account<br>Use an user/role in account B to perform cross-account copywas it intentional to choose all incorrect options?",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 711815,
          "date": "Sat 05 Nov 2022 15:30",
          "username": "XAvenger",
          "content": "was it intentional to choose all incorrect options?",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 357132,
          "date": "Sun 24 Oct 2021 10:52",
          "username": "idforadf",
          "content": "Yes, looks like ADE<br><br>https://www.stratoscale.com/blog/storage/replicate-s3-buckets-across-regions/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 352982,
          "date": "Sat 25 Sep 2021 17:36",
          "username": "lgu",
          "content": "I would go with ADE",
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
      "question_text": "<p>A company is using Amazon EC2 for various workloads. Company policy requires that instances be managed centrally to standardize configurations. These configurations include standard logging, metrics, security assessments, and weekly patching.<br>How can the company meet these requirements? (Choose three.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BCF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#13",
          "answers": [
            {
              "choice": "<p>A. Use AWS Config to ensure all EC2 instances are managed by Amazon Inspector.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Config to ensure all EC2 instances are managed by AWS Systems Manager.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Systems Manager to install and manage Amazon Inspector, Systems Manager Patch Manager, and the Amazon CloudWatch agent on all instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon Inspector to install and manage AWS Systems Manager, Systems Manager Patch Manager, and the Amazon CloudWatch agent on all instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use AWS Systems Manager maintenance windows with Systems Manager Run Command to schedule Systems Manager Patch Manager tasks. Use the Amazon CloudWatch agent to schedule Amazon Inspector assessment runs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Use AWS Systems Manager maintenance windows with Systems Manager Run Command to schedule Systems Manager Patch Manager tasks. Use Amazon CloudWatch Events to schedule Amazon Inspector assessment runs.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 13 discussion",
      "discusstion": [
        {
          "id": 312900,
          "date": "Tue 05 Oct 2021 06:00",
          "username": "faltu1985",
          "content": "Ans: BCF",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 763066,
          "date": "Sun 01 Jan 2023 06:28",
          "username": "Bulti",
          "content": "B,C,F are the right answers",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 734933,
          "date": "Sun 04 Dec 2022 09:11",
          "username": "MacK06",
          "content": "Don't know where BDE as correct answer is coming from, but clearly you don't use Inspector to install anything (as stated in E)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 712875,
          "date": "Mon 07 Nov 2022 08:20",
          "username": "developer_404",
          "content": "B - AWS System Manager to manage Centrally<br>C - Use AWS System Manager agent to install Amazon Inspector, not the vice versa.<br>F - Use Cloudwatch Event to schedule, agent is for collecting metrics.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 711638,
          "date": "Sat 05 Nov 2022 10:28",
          "username": "beeeri",
          "content": "Ans: BCF",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 688466,
          "date": "Fri 07 Oct 2022 10:38",
          "username": "RogerMarsh",
          "content": "BCF is correct<br>https://aws.amazon.com/blogs/opensource/getting-started-with-open-source-amazon-cloudwatch-agent/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 673916,
          "date": "Tue 20 Sep 2022 10:02",
          "username": "Goozian",
          "content": "BCF<br>the level of this Question is Associate Exam, not Proff!",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 671840,
          "date": "Sun 18 Sep 2022 00:53",
          "username": "colinquek",
          "content": "thats the way",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 660742,
          "date": "Tue 06 Sep 2022 05:06",
          "username": "SamHan",
          "content": "Ans: BCF",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 602710,
          "date": "Tue 17 May 2022 00:36",
          "username": "GCPWizard",
          "content": "Ans: BCF. <br>E is not correct. You don't need CloudWatch Agent to schedule Amazon Inspector Assessment Runs. You need CloudWatch Events for that.<br>You can configure Amazon Inspector assessment templates as a target for CloudWatch Events. See the link below for allowed AWS services as targets for CloudWatch events.<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/WhatIsCloudWatchEvents.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 589607,
          "date": "Thu 21 Apr 2022 22:09",
          "username": "[Removed]",
          "content": "D - Inspector do not control fleet of instances<br>F - CloudWatch agent is for metrics and logs exports to CloudWatch",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 583189,
          "date": "Sat 09 Apr 2022 09:42",
          "username": "friendofpenguinfriendofpenguin",
          "content": "D - Inspector do not control fleet of instances<br>F - CloudWatch agent is for metrics and logs exports to CloudWatchTypo: E - CloudWatch agent is for metrics and logs exports to CloudWatch",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 583190,
          "date": "Sat 09 Apr 2022 09:43",
          "username": "friendofpenguin",
          "content": "Typo: E - CloudWatch agent is for metrics and logs exports to CloudWatch",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 569803,
          "date": "Thu 17 Mar 2022 15:56",
          "username": "dzenadcu",
          "content": "B, C, F",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 508944,
          "date": "Sat 25 Dec 2021 04:21",
          "username": "szl0144",
          "content": "should be BCF. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 387529,
          "date": "Thu 04 Nov 2021 19:09",
          "username": "D2",
          "content": "Answer B, C, F",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 384624,
          "date": "Sat 30 Oct 2021 10:41",
          "username": "lilpurplepanda",
          "content": "B, C, F",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 384622,
          "date": "Sun 24 Oct 2021 12:22",
          "username": "lilpurplepanda",
          "content": "B, C, F",
          "upvote_count": "1",
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
      "question_text": "<p>A business has an application that consists of five independent AWS Lambda functions.<br>The DevOps Engineer has built a CI/CD pipeline using AWS CodePipeline and AWS CodeBuild that builds, tests, packages, and deploys each Lambda function in sequence. The pipeline uses an Amazon CloudWatch Events rule to ensure the pipeline execution starts as quickly as possible after a change is made to the application source code.<br>After working with the pipeline for a few months, the DevOps Engineer has noticed the pipeline takes too long to complete.<br>What should the DevOps Engineer implement to BEST improve the speed of the pipeline?<br></p>",
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
              "choice": "<p>A. Modify the CodeBuild projects within the pipeline to use a compute type with more available network throughput.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a custom CodeBuild execution environment that includes a symmetric multiprocessing configuration to run the builds in parallel.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the CodePipeline configuration to execute actions for each Lambda function in parallel by specifying the same runOrder.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify each CodeBuild project to run within a VPC and use dedicated instances to increase throughput.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 14 discussion",
      "discusstion": [
        {
          "id": 10572,
          "date": "Tue 21 Sep 2021 05:49",
          "username": "zhamingyArbaj",
          "content": "i choose CAbsolutely",
          "upvote_count": "212",
          "selected_answers": ""
        },
        {
          "id": 671605,
          "date": "Sat 17 Sep 2022 16:49",
          "username": "Arbaj",
          "content": "Absolutely",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 25457,
          "date": "Fri 24 Sep 2021 20:50",
          "username": "ele",
          "content": "C<br>https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html<br>AWS doc: \\\"To specify parallel actions, use the same integer for each action you want to run in parallel.<br><br>For example, if you want three actions to run in sequence in a stage, you would give the first action the runOrder value of 1, the second action the runOrder value of 2, and the third the runOrder value of 3. However, if you want the second and third actions to run in parallel, you would give the first action the runOrder value of 1 and both the second and third actions the runOrder value of 2.\\\"",
          "upvote_count": "19",
          "selected_answers": ""
        },
        {
          "id": 763070,
          "date": "Sun 01 Jan 2023 06:31",
          "username": "Bulti",
          "content": "C is the right answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 763069,
          "date": "Sun 01 Jan 2023 06:30",
          "username": "Bulti",
          "content": "C is the right answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 573582,
          "date": "Wed 23 Mar 2022 13:05",
          "username": "dzenadcu",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 321832,
          "date": "Tue 02 Nov 2021 03:14",
          "username": "WhyIronMan",
          "content": "I'll go with C",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 251904,
          "date": "Thu 28 Oct 2021 22:21",
          "username": "gmandala",
          "content": "C for me",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 223662,
          "date": "Sun 24 Oct 2021 15:48",
          "username": "NorthStar2010",
          "content": "C is my answer,.parallel",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 223219,
          "date": "Sun 24 Oct 2021 11:55",
          "username": "jackdryan",
          "content": "I'll go with C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 205842,
          "date": "Sat 23 Oct 2021 11:13",
          "username": "ChauPhan",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 144389,
          "date": "Sat 23 Oct 2021 06:16",
          "username": "romanov",
          "content": "C is correct. Notice that the five lambda functions are independent and therefore running them in parallel saves time",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 107399,
          "date": "Sat 23 Oct 2021 05:11",
          "username": "un",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 95277,
          "date": "Sat 23 Oct 2021 00:35",
          "username": "Raj9",
          "content": "A - this will improve the timing but real problem here is sequential processing still exist<br>B - don't think there are multi processing options - https://aws.amazon.com/blogs/opensource/using-aws-codepipeline-and-open-source-tools-for-at-scale-infrastructure-deployment/<br>C - correct<br>D - running in vpc will further reduce timing and vpc execution should only be used when funciton has to access vpc resources",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 62156,
          "date": "Tue 19 Oct 2021 01:01",
          "username": "yassu",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 55021,
          "date": "Thu 07 Oct 2021 20:54",
          "username": "xaocho",
          "content": "It is C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 36051,
          "date": "Sat 02 Oct 2021 16:45",
          "username": "dinhvu",
          "content": "I choose C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 31322,
          "date": "Fri 01 Oct 2021 02:54",
          "username": "ppshein",
          "content": "it should go with C. ",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#15",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is creating a software solution that executes a specific parallel-processing mechanism. The software can scale to tens of servers in some special scenarios. This solution uses a proprietary library that is license-based, requiring that each individual server have a single, dedicated license installed. The company has 200 licenses and is planning to run 200 server nodes concurrently at most.<br>The company has requested the following features:<br>-A mechanism to automate the use of the licenses at scale.<br>-Creation of a dashboard to use in the future to verify which licenses are available at any moment.<br>What is the MOST effective way to accomplish these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#15",
          "answers": [
            {
              "choice": "<p>A. Upload the licenses to a private Amazon S3 bucket. Create an AWS CloudFormation template with a Mappings section for the licenses. In the template, create an Auto Scaling group to launch the servers. In the user data script, acquire an available license from the Mappings section. Create an Auto Scaling lifecycle hook, then use it to update the mapping after the instance is terminated.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Upload the licenses to an Amazon DynamoDB table. Create an AWS CloudFormation template that uses an Auto Scaling group to launch the servers. In the user data script, acquire an available license from the DynamoDB table. Create an Auto Scaling lifecycle hook, then use it to update the mapping after the instance is terminated.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Upload the licenses to a private Amazon S3 bucket. Populate an Amazon SQS queue with the list of licenses stored in S3. Create an AWS CloudFormation template that uses an Auto Scaling group to launch the servers. In the user data script acquire an available license from SQS. Create an Auto Scaling lifecycle hook, then use it to put the license back in SQS after the instance is terminated.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Upload the licenses to an Amazon DynamoDB table. Create an AWS CLI script to launch the servers by using the parameter --count, with min:max instances to launch. In the user data script, acquire an available license from the DynamoDB table. Monitor each instance and, in case of failure, replace the instance, then manually update the DynamoDB table.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 15 discussion",
      "discusstion": [
        {
          "id": 21104,
          "date": "Tue 21 Sep 2021 19:07",
          "username": "marwan",
          "content": "I believe B is the right solution",
          "upvote_count": "20",
          "selected_answers": ""
        },
        {
          "id": 99279,
          "date": "Tue 19 Oct 2021 21:56",
          "username": "Raj9",
          "content": "A - license list is dynamic (based on scaling) and mapping are good for values that are static in nature<br>B - looks good<br>C - sqs -unnecessary overhead<br>D - too many manual tasks",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 763072,
          "date": "Sun 01 Jan 2023 06:34",
          "username": "Bulti",
          "content": "B is the right answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 760380,
          "date": "Wed 28 Dec 2022 23:10",
          "username": "Teonardo",
          "content": "B is the right answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 758551,
          "date": "Tue 27 Dec 2022 14:28",
          "username": "ceros399",
          "content": "B is the good for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 734406,
          "date": "Sat 03 Dec 2022 12:46",
          "username": "ericzaj",
          "content": "The Dev Ops Pro is a measure of how well you know automation. D requires manual intervention. B looks to be the right solution.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 713444,
          "date": "Tue 08 Nov 2022 03:56",
          "username": "developer_404",
          "content": "A - S3 contains static data and there is no information on the available licenses to create dashboard.<br>B- DynamoDb contains mapping on the availability of licenses and can create dashboard on the data.<br>C - Overhead to maintain S3 and SQS. Hard to create Dashboard out of SQS.<br>D - Manual update , no no",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 695187,
          "date": "Sat 15 Oct 2022 06:45",
          "username": "nzin4x",
          "content": "B is right answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 688501,
          "date": "Fri 07 Oct 2022 12:08",
          "username": "RogerMarsh",
          "content": "B is correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 655658,
          "date": "Thu 01 Sep 2022 03:24",
          "username": "colinquek",
          "content": "B - becos:<br>1. dynamodb's transactgetitem api- https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/transaction-apis.html#transaction-apis-txgetitems<br>2. CF to generate ASG to manage the EC2s.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 544068,
          "date": "Wed 09 Feb 2022 21:12",
          "username": "blueorca",
          "content": "Should be B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 385414,
          "date": "Sat 06 Nov 2021 20:49",
          "username": "D2",
          "content": "Answer B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 381593,
          "date": "Thu 04 Nov 2021 05:58",
          "username": "30th",
          "content": "\\\"B\\\" is the right answer. \\\"A dashboard to verify which licenses are available.\\\" is a key requirement. S3 and SQS won't provide you such a feature. \\\"D\\\" includes CLI scripts. CLI works in most cases, but it is never a right answer if an AWS native solution is available.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 338637,
          "date": "Tue 02 Nov 2021 21:52",
          "username": "mo_awsdevops",
          "content": "b it is",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 323459,
          "date": "Sat 30 Oct 2021 12:26",
          "username": "WhyIronMan",
          "content": "I'll go with B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 321926,
          "date": "Fri 29 Oct 2021 04:56",
          "username": "aws_Tamilan",
          "content": "Correct Answer: B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 280743,
          "date": "Wed 27 Oct 2021 05:38",
          "username": "yyy",
          "content": "I believe to C: because lifecycle hook can work with SQS directly https://docs.aws.amazon.com/autoscaling/ec2/userguide/configuring-lifecycle-hook-notifications.html",
          "upvote_count": "1",
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
      "question_text": "<p>A DevOps Engineer administers an application that manages video files for a video production company. The application runs on Amazon EC2 instances behind an ELB Application Load Balancer. The instances run in an Auto Scaling group across multiple Availability Zones. Data is stored in an Amazon RDS PostgreSQL<br>Multi-AZ DB instance, and the video files are stored in an Amazon S3 bucket. On a typical day, 50 GB of new video are added to the S3 bucket. The Engineer must implement a multi-region disaster recovery plan with the least data loss and the lowest recovery times. The current application infrastructure is already described using AWS CloudFormation.<br>Which deployment option should the Engineer choose to meet the uptime and recovery objectives for the system?<br></p>",
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
              "choice": "<p>A. Launch the application from the CloudFormation template in the second region, which sets the capacity of the Auto Scaling group to 1. Create an Amazon RDS read replica in the second region. In the second region, enable cross-region replication between the original S3 bucket and a new S3 bucket. To fail over, promote the read replica as master. Update the CloudFormation stack and increase the capacity of the Auto Scaling group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Launch the application from the CloudFormation template in the second region, which sets the capacity of the Auto Scaling group to 1. Create a scheduled task to take daily Amazon RDS cross-region snapshots to the second region. In the second region, enable cross-region replication between the original S3 bucket and Amazon Glacier. In a disaster, launch a new application stack in the second region and restore the database from the most recent snapshot.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Launch the application from the CloudFormation template in the second region, which sets the capacity of the Auto Scaling group to 1. Use Amazon CloudWatch Events to schedule a nightly task to take a snapshot of the database, copy the snapshot to the second region, and replace the DB instance in the second region from the snapshot. In the second region, enable cross-region replication between the original S3 bucket and a new S3 bucket. To fail over, increase the capacity of the Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon CloudWatch Events to schedule a nightly task to take a snapshot of the database and copy the snapshot to the second region. Create an AWS Lambda function that copies each object to a new S3 bucket in the second region in response to S3 event notifications. In the second region, launch the application from the CloudFormation template and restore the database from the most recent snapshot.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 16 discussion",
      "discusstion": [
        {
          "id": 3822,
          "date": "Tue 21 Sep 2021 16:40",
          "username": "toma",
          "content": "answer is A",
          "upvote_count": "46",
          "selected_answers": ""
        },
        {
          "id": 35003,
          "date": "Mon 11 Oct 2021 08:05",
          "username": "ununGreatFunana",
          "content": "A is the right choiceI think D is correct based on comments form @infIts not. Restoring any DB is a time consuming procedure, and this answer implies a restore would have after disaster.<br><br>A is the only answer that implies replication, and active replication to bring a failover DB live is the FASTEST way to restore a downed DB. ",
          "upvote_count": "615",
          "selected_answers": ""
        },
        {
          "id": 113672,
          "date": "Sat 23 Oct 2021 14:13",
          "username": "unGreatFunana",
          "content": "I think D is correct based on comments form @infIts not. Restoring any DB is a time consuming procedure, and this answer implies a restore would have after disaster.<br><br>A is the only answer that implies replication, and active replication to bring a failover DB live is the FASTEST way to restore a downed DB. ",
          "upvote_count": "15",
          "selected_answers": ""
        },
        {
          "id": 502717,
          "date": "Thu 16 Dec 2021 07:32",
          "username": "GreatFunana",
          "content": "Its not. Restoring any DB is a time consuming procedure, and this answer implies a restore would have after disaster.<br><br>A is the only answer that implies replication, and active replication to bring a failover DB live is the FASTEST way to restore a downed DB. ",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 763074,
          "date": "Sun 01 Jan 2023 06:39",
          "username": "Bulti",
          "content": "A is the right answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 758565,
          "date": "Tue 27 Dec 2022 14:40",
          "username": "ceros399",
          "content": "A:cross-Region read replica<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html#USER_ReadRepl.XRgn",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 722934,
          "date": "Sun 20 Nov 2022 20:33",
          "username": "fvztpc",
          "content": "answer is A ,<br>I think, solution do not need new s3 bucket.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 660750,
          "date": "Tue 06 Sep 2022 05:17",
          "username": "SamHan",
          "content": "Ans: A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 447657,
          "date": "Fri 05 Nov 2021 04:02",
          "username": "oopsy",
          "content": "Go A -1",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 320370,
          "date": "Fri 05 Nov 2021 00:30",
          "username": "WhyIronMan",
          "content": "I'll go with A)<br>For those choosing D) recall enable cross-region replication for S3is always the best practice and is strongly recommended.<br>Copying such volume of data using lambda will result in high costs for Lambda execution time, due the time it takes to copy and process .",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 231981,
          "date": "Wed 03 Nov 2021 17:06",
          "username": "svjl",
          "content": "D is totally: 1 \\\"copies each object\\\" , 2 kind of situations RDS-PG is the best option for the cross region",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 229698,
          "date": "Mon 01 Nov 2021 05:12",
          "username": "Coffeinerd",
          "content": "I would keep it simple and efficient: A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 223195,
          "date": "Sun 31 Oct 2021 16:58",
          "username": "jackdryan",
          "content": "I'll go with A",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 205244,
          "date": "Sun 31 Oct 2021 14:54",
          "username": "ChauPhan",
          "content": "Only A is quick for DB recovery in RPO. Other options which go with daily or night schedule will take ~ 24 hours for backup interval, so it does meet RPO condition.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 188386,
          "date": "Sat 30 Oct 2021 05:03",
          "username": "denmaddog",
          "content": "A says: \\\"In the second region, enable cross-region replication between the original S3 bucket and a new S3 bucket.\\\" - the part \\\"In second region\\\" is tricky as S3 does not require region selection, but the second part says \\\"enable cross-region replication between the original S3 bucket and a new S3 bucket\\\" which does not explicitly says on which bucket to configure CRR.<br>So the correct answer is A. ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 166303,
          "date": "Fri 29 Oct 2021 18:33",
          "username": "nqobza",
          "content": "I think it's A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 146488,
          "date": "Thu 28 Oct 2021 18:59",
          "username": "cowshield",
          "content": "I think it should be A, but the wording of the question is incorrect.<br>Normally the response options are created in a pretty formulaic way: you get a bunch of statements and each response contains some combination of those statements, plus a few unique ones. In this case the statement about S3 CRR appears a few times but is incorrectly worded. I suspect they wanted this to be a valid statement, in which case A is clearly the best answer, since the focus is on RPO and A has an RPO measured in minutes, whereas B, C and D appear to have a 24h RPO.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 135472,
          "date": "Tue 26 Oct 2021 04:12",
          "username": "CamNhungDinh",
          "content": "I think using Amazon CloudWatch Events to schedule a nightly task to take a snapshot is great idea.<br>https://couponforless.com/store/amazon.com",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 115401,
          "date": "Sun 24 Oct 2021 17:36",
          "username": "tolik505",
          "content": "I'd go with an option A. <br>It looks like warm standby approach that allows smaller RPO and RTO.<br>Regarding `In the second region, enable cross-region replication between the original S3 bucket and a new S3 bucket`, I believe that the main part is \\\"enable cross-region replication between the original S3 bucket and a new S3 bucket\\\". We shouldn't overthink.",
          "upvote_count": "1",
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
      "question_text": "<p>A company is using AWS CodePipeline to automate its release pipeline. AWS CodeDeploy is being used in the pipeline to deploy an application to Amazon ECS using the blue/green deployment model. The company wants to implement scripts to test the green version of the application before shifting traffic. These scripts will complete in 5 minutes or less. If errors are discovered during these tests, the application must be rolled back.<br>Which strategy will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#17",
          "answers": [
            {
              "choice": "<p>A. Add a stage to the CodePipeline pipeline between the source and deploy stages. Use AWS CodeBuild to create an execution environment and build commands in the buildspec file to invoke test scripts. If errors are found, use the aws deploy stop-deployment command to stop the deployment.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add a stage to the CodePipeline pipeline between the source and deploy stages. Use this stage to execute an AWS Lambda function that will run the test scripts. If errors are found, use the aws deploy stop-deployment command to stop the deployment.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Add a hooks section to the CodeDeploy AppSpec file. Use the AfterAllowTestTraffic lifecycle event to invoke an AWS Lambda function to run the test scripts. If errors are found, exit the Lambda function with an error to trigger rollback.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add a hooks section to the CodeDeploy AppSpec file. Use the AfterAllowTraffic lifecycle event to invoke the test scripts. If errors are found, use the aws deploy stop-deployment CLI command to stop the deployment.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 17 discussion",
      "discusstion": [
        {
          "id": 317301,
          "date": "Tue 21 Sep 2021 09:37",
          "username": "WhyIronMan",
          "content": "C looks correct, reference: https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#reference-appspec-file-structure-hooks-section-structure-ecs-sample-function",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 763075,
          "date": "Sun 01 Jan 2023 06:40",
          "username": "Bulti",
          "content": "C is the correct answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 758798,
          "date": "Tue 27 Dec 2022 17:46",
          "username": "ceros399",
          "content": "C is correct,<br>you need to run the script, the best option is using lambda",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 713486,
          "date": "Tue 08 Nov 2022 06:03",
          "username": "developer_404",
          "content": "Other answers are just stopping the deployment. Rollback is one of the requirement fulfilled by this answer C",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 681897,
          "date": "Wed 28 Sep 2022 18:02",
          "username": "ebratz",
          "content": "https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html<br><br>AfterAllowTestTraffic =E2=80=93 Use to run tasks after the test listener serves traffic to the replacement task set. The results of a hook function at this point can trigger a rollback.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 672881,
          "date": "Mon 19 Sep 2022 05:20",
          "username": "colinquekapcloud",
          "content": "C<br>A, B - u need to deploy first else there is nth to test. And rem CodeBuild is exactly tt, do code building.<br>D - AfterAllowTraffic means the Green env is alr \\\"live\\\", if there is no \\\"AfterAllowTestTraffic\\\" option (C), then D is the correct one.<br><br>Since there AfterAllowTestTraffic, its better to chose tt.<br>https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html << take a look at the diagram in this.do you really need to abbreviate? it makes it way harder to read your explanation. please stop.",
          "upvote_count": "33",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 734089,
          "date": "Fri 02 Dec 2022 23:19",
          "username": "apcloud",
          "content": "do you really need to abbreviate? it makes it way harder to read your explanation. please stop.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 665924,
          "date": "Sun 11 Sep 2022 09:48",
          "username": "MikeyJ",
          "content": "AfterAllowTestTraffic =E2=80=93 Use to run tasks after the test listener serves traffic to the replacement task set. The results of a hook function at this point can trigger a rollback.<br>https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 664104,
          "date": "Fri 09 Sep 2022 02:49",
          "username": "colinquek",
          "content": "B - is testing the new deployment, the green env.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 664074,
          "date": "Fri 09 Sep 2022 01:10",
          "username": "shiptyeyesaws_arn_namesatz_17",
          "content": "Q - \\\"implement scripts to test the green version of the application before shifting traffic\\\"<br>Ans C - \\\"Use the AfterAllowTestTraffic lifecycle event to invoke an AWS Lambda function\\\"<br><br>Why is everyone picking the answer that tests the code \\\"AfterAllowTestTraffic\\\"?Becaus it is \\\"Test\\\" traffic , not real trafficyeah, It's ECS deployment and the question says \\\"test the green version of the application before shifting traffic\\\". In codedeploy ECS deployment has a hook \\\"AfterallowTestTraffic\\\" where we can invoke lambda. So the correct answer is C. ",
          "upvote_count": "221",
          "selected_answers": ""
        },
        {
          "id": 665432,
          "date": "Sat 10 Sep 2022 15:25",
          "username": "aws_arn_namesatz_17",
          "content": "Becaus it is \\\"Test\\\" traffic , not real trafficyeah, It's ECS deployment and the question says \\\"test the green version of the application before shifting traffic\\\". In codedeploy ECS deployment has a hook \\\"AfterallowTestTraffic\\\" where we can invoke lambda. So the correct answer is C. ",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 695271,
          "date": "Sat 15 Oct 2022 10:12",
          "username": "satz_17",
          "content": "yeah, It's ECS deployment and the question says \\\"test the green version of the application before shifting traffic\\\". In codedeploy ECS deployment has a hook \\\"AfterallowTestTraffic\\\" where we can invoke lambda. So the correct answer is C. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 410548,
          "date": "Mon 25 Oct 2021 06:43",
          "username": "arpana_03",
          "content": "C is correct answer",
          "upvote_count": "2",
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
      "question_text": "<p>A company requires an RPO of 2 hours and an RTO of 10 minutes for its data and application at all times. An application uses a MySQL database and Amazon<br>EC2 web servers. The development team needs a strategy for failover and disaster recovery.<br>Which combination of deployment strategies will meet these requirements? (Choose two.)<br></p>",
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
              "choice": "<p>A. Create an Amazon Aurora cluster in one Availability Zone across multiple Regions as the data store. Use Aurora's automatic recovery capabilities in the event of a disaster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon Aurora global database in two Regions as the data store. In the event of a failure, promote the secondary Region as the master for the application.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon Aurora multi-master cluster across multiple Regions as the data store. Use a Network Load Balancer to balance the database traffic in different Regions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up the application in two Regions and use Amazon Route 53 failover-based routing that points to the Application Load Balancers in both Regions. Use health checks to determine the availability in a given Region. Use Auto Scaling groups in each Region to adjust capacity based on demand.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Set up the application in two Regions and use a multi-Region Auto Scaling group behind Application Load Balancers to manage the capacity based on demand. In the event of a disaster, adjust the Auto Scaling group's desired instance count to increase baseline capacity in the failover Region.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 18 discussion",
      "discusstion": [
        {
          "id": 326818,
          "date": "Sat 02 Oct 2021 20:35",
          "username": "WhyIronMan",
          "content": "I'll go with B,D",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 330618,
          "date": "Sun 10 Oct 2021 03:26",
          "username": "devopp",
          "content": "B, D as well here",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 763076,
          "date": "Sun 01 Jan 2023 06:44",
          "username": "Bulti",
          "content": "B &D are the right answers",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 559434,
          "date": "Wed 02 Mar 2022 14:24",
          "username": "miketyz",
          "content": "BD for sure",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 544804,
          "date": "Thu 10 Feb 2022 19:59",
          "username": "blueorca",
          "content": "BD for me",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 379797,
          "date": "Wed 13 Oct 2021 17:43",
          "username": "kdpeiris",
          "content": "Go with B & D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 323356,
          "date": "Thu 23 Sep 2021 18:40",
          "username": "Bmaster",
          "content": "I will go with B,D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 323311,
          "date": "Wed 22 Sep 2021 11:32",
          "username": "Jordanro",
          "content": "I will go with B,D",
          "upvote_count": "2",
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
      "question_text": "<p>An Amazon EC2 instance is running in a Virtual Private Cloud (VPC) and needs to download an object from a restricted Amazon S3 bucket. When the DevOps engineer tries to download, the object an AccessDenied error is received.<br>What are the possible causes for this error? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#19",
          "answers": [
            {
              "choice": "<p>A. The S3 bucket default encryption is enabled<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. There is an error in the S3 bucket policy<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. The object has been moved to Amazon Glacier<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. There is an error in the IAM role configuration<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. S3 versioning is enabled<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 19 discussion",
      "discusstion": [
        {
          "id": 657135,
          "date": "Fri 02 Sep 2022 09:43",
          "username": "devops7",
          "content": "Ans: B, D<br>A.  The S3 bucket default encryption is enabled<br>will not trigger access deniedB.  There is an error in the S3 bucket policy<br>yesC.  The object has been moved to Amazon Glacier<br>The error should be \\\"Object is of storage class GLACIER. Unable to perform download operations on GLACIER objects. You must restore the object to be able to perform the operation.\\\"D.  There is an error in the IAM role configuration<br>yesE.  S3 versioning is enabled<br>will not trigger access denied",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 763077,
          "date": "Sun 01 Jan 2023 06:45",
          "username": "Bulti",
          "content": "B&D is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 664106,
          "date": "Fri 09 Sep 2022 02:52",
          "username": "colinquek",
          "content": "the other answers still allow downloads to occur.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 657705,
          "date": "Fri 02 Sep 2022 20:14",
          "username": "ohcn",
          "content": "B and D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        }
      ]
    },
    {
      "question_id": "#20",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A DevOps team manages an API running on-premises that serves as a backend for an Amazon API Gateway endpoint. Customers have been complaining about high response latencies, which the development team has verified using the API Gateway latency metrics in Amazon CloudWatch. To identify the cause, the team needs to collect relevant data without introducing additional latency.<br>Which actions should be taken to accomplish this? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#20",
          "answers": [
            {
              "choice": "<p>A. Install the CloudWatch agent server side and configure the agent to upload relevant logs to CloudWatch.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable AWS X-Ray tracing in API Gateway, modify the application to capture request segments, and upload those segments to X-Ray during each request.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable AWS X-Ray tracing in API Gateway, modify the application to capture request segments, and use the X-Ray daemon to upload segments to X-Ray.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the on-premises application to send log information back to API Gateway with each request.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Modify the on-premises application to calculate and upload statistical data relevant to the API service requests to CloudWatch metrics.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 20 discussion",
      "discusstion": [
        {
          "id": 326000,
          "date": "Thu 28 Oct 2021 06:26",
          "username": "WhyIronManMBJamesRightAnswers",
          "content": "I'll go with A and C<br><br>References:<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/install-CloudWatch-Agent-on-premise.html<br>https://docs.aws.amazon.com/xray/latest/devguide/xray-api-sendingdata.htmlAgreed. B is sub-optimal because sending every xray segment back to AWS API directly from the application will introduce more latency. Having a local x-ray daemon mitigates that, so C is better.Installing CloudWatch agents on on-prem servers will provider server metrics. How that will help calculate API latency? Ans A doesn't make sense. Ans E would rather help getting latency information.<br>Ans C, E",
          "upvote_count": "2233",
          "selected_answers": ""
        },
        {
          "id": 401854,
          "date": "Mon 01 Nov 2021 05:56",
          "username": "MBJames",
          "content": "Agreed. B is sub-optimal because sending every xray segment back to AWS API directly from the application will introduce more latency. Having a local x-ray daemon mitigates that, so C is better.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 530122,
          "date": "Sun 23 Jan 2022 00:15",
          "username": "RightAnswers",
          "content": "Installing CloudWatch agents on on-prem servers will provider server metrics. How that will help calculate API latency? Ans A doesn't make sense. Ans E would rather help getting latency information.<br>Ans C, E",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 313297,
          "date": "Wed 20 Oct 2021 04:22",
          "username": "Jordanro",
          "content": "I will go with A,C",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 763086,
          "date": "Sun 01 Jan 2023 07:16",
          "username": "Bulti",
          "content": "A and C is the correct answer!",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 741852,
          "date": "Sun 11 Dec 2022 16:45",
          "username": "SatenderRathee",
          "content": "To identify the cause of the high response latencies, the DevOps team should:<br><br>Install the CloudWatch agent server side and configure the agent to upload relevant logs to CloudWatch. This will allow the team to collect log data without introducing additional latency.<br>Enable AWS X-Ray tracing in API Gateway, modify the application to capture request segments, and use the X-Ray daemon to upload segments to X-Ray. This will allow the team to collect tracing data without introducing additional latency.<br>Therefore, the correct actions to take are A and C. <br><br>Option B is incorrect because uploading request segments to X-Ray during each request would introduce additional latency.<br><br>Option D is incorrect because sending log information back to API Gateway with each request would introduce additional latency.<br><br>Option E is incorrect because calculating and uploading statistical data relevant to the API service requests to CloudWatch metrics would introduce additional latency.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 721374,
          "date": "Fri 18 Nov 2022 16:45",
          "username": "kyozanuro",
          "content": "A.  After you install the cloudwatch agent, then it will provide the metrics but cannot use them to get the latency information",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 671615,
          "date": "Sat 17 Sep 2022 17:09",
          "username": "Arbaj",
          "content": "A and C for sure",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 666531,
          "date": "Mon 12 Sep 2022 03:35",
          "username": "Manh",
          "content": "A & C. high response latencies could happen when your resource is full",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 664107,
          "date": "Fri 09 Sep 2022 02:54",
          "username": "colinquek",
          "content": "the only 2 options that dont cause the application to incur more processing.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 660767,
          "date": "Tue 06 Sep 2022 05:38",
          "username": "SamHan",
          "content": "Ans is : CE",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 561260,
          "date": "Sat 05 Mar 2022 07:26",
          "username": "[Removed]",
          "content": "A for metrics and C for performance data",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 553584,
          "date": "Tue 22 Feb 2022 11:20",
          "username": "bobsmith2000",
          "content": "It's actually CE<br>There's no such thing as \\\"CloudWatch agent server side\\\"<br><br>In comments people mention that E adds latency to application. If you've ever worked with Prometheus them you're aware that is different module of code and it depends meddle with request processing.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 544878,
          "date": "Thu 10 Feb 2022 22:07",
          "username": "blueorca",
          "content": "AC meet the requirements",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 511493,
          "date": "Tue 28 Dec 2021 19:57",
          "username": "sg0206",
          "content": "We can not modify the application as it will impact letancy so D and E are eliminated<br>Now, if we upload the logs on each request, then the it will also impact the current performance so B is also not valid option..<br>Now we are left we agents which can upload the logs so A and C are the best options.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 509466,
          "date": "Sun 26 Dec 2021 08:31",
          "username": "gofavad926",
          "content": "Agree with AC",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 445870,
          "date": "Sun 07 Nov 2021 09:32",
          "username": "passtest100",
          "content": "C E<br>E is better for analysis the root of cause.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 385288,
          "date": "Sat 30 Oct 2021 17:29",
          "username": "RLai",
          "content": "ans: A C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 330221,
          "date": "Fri 29 Oct 2021 01:17",
          "username": "devoppGreatFunana",
          "content": "Yep A,C<br>A since assuming this means installing UCWA onto OnPrem Server.<br>Not E (revealed Ans) since this would not meet req, likely increasing latency w additional processing.Nailed it. But for the sake of completion<br>\t- B: not how you send logs to x-ray.<br>\t- D: you don't send logs via api-gateway<br>\t- E: adds latency",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 504118,
          "date": "Sat 18 Dec 2021 09:59",
          "username": "GreatFunana",
          "content": "Nailed it. But for the sake of completion<br>\t- B: not how you send logs to x-ray.<br>\t- D: you don't send logs via api-gateway<br>\t- E: adds latency",
          "upvote_count": "2",
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
      "question_text": "<p>A DevOps engineer wants to find a solution to migrate an application from on premises to AWS. The application is running on Linux and needs to run on specific versions of Apache Tomcat, HAProxy, and Varnish Cache to function properly. The application's operating system-level parameters require tuning. The solution must include a way to automate the deployment of new application versions. The infrastructure should be scalable and faulty servers should be replaced automatically.<br>Which solution should the DevOps engineer use?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#21",
          "answers": [
            {
              "choice": "<p>A. Upload the application as a Docker image that contains all the necessary software to Amazon ECR. Create an Amazon ECS cluster using an AWS Fargate launch type and an Auto Scaling group. Create an AWS CodePipeline pipeline that uses Amazon ECR as a source and Amazon ECS as a deployment provider.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Upload the application code to an AWS CodeCommit repository with a saved configuration file to configure and install the software. Create an AWS Elastic Beanstalk web server tier and a load balanced-type environment that uses the Tomcat solution stack. Create an AWS CodePipeline pipeline that uses CodeCommit as a source and Elastic Beanstalk as a deployment provider.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Upload the application code to an AWS CodeCommit repository with a set of .ebextensions files to configure and install the software. Create an AWS Elastic Beanstalk worker tier environment that uses the Tomcat solution stack. Create an AWS CodePipeline pipeline that uses CodeCommit as a source and Elastic Beanstalk as a deployment provider.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Upload the application code to an AWS CodeCommit repository with an appspec.yml file to configure and install the necessary software. Create an AWS CodeDeploy deployment group associated with an Amazon EC2 Auto Scaling group. Create an AWS CodePipeline pipeline that uses CodeCommit as a source and CodeDeploy as a deployment provider.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 21 discussion",
      "discusstion": [
        {
          "id": 338620,
          "date": "Tue 26 Oct 2021 11:44",
          "username": "twancJohnnieWalker",
          "content": "D - there is nothing like Fargate AutoScaling group - this is serverless approachIt should be A.  I think none of the other options really address the tunning issues properly. There is a \\\"Service Auto Scaling\\\" on Fargate, but not an \\\"Auto Scaling Group\\\", the wording on this question must be wrong. -> https://aws.amazon.com/premiumsupport/knowledge-center/ecs-fargate-service-auto-scaling/",
          "upvote_count": "135",
          "selected_answers": ""
        },
        {
          "id": 350887,
          "date": "Fri 29 Oct 2021 01:58",
          "username": "JohnnieWalker",
          "content": "It should be A.  I think none of the other options really address the tunning issues properly. There is a \\\"Service Auto Scaling\\\" on Fargate, but not an \\\"Auto Scaling Group\\\", the wording on this question must be wrong. -> https://aws.amazon.com/premiumsupport/knowledge-center/ecs-fargate-service-auto-scaling/",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 326625,
          "date": "Sun 10 Oct 2021 16:02",
          "username": "WhyIronMan[Removed]shammousnotabot2",
          "content": "I'll go with A)<br><br>Creating a Docker image of these very customized applications is always a good idea<br><br>Creating a docker image with all necessary apps, data e customizations attend the requirements<br><br>B, C and D doesn't mention the required customizations of app versions or OS changes. None of them mention an AMI creationHaving Apache Tomcat + Varnish + HAProxy on a single Docker image is a container-level suicide. Hence D is the best option here.I upvoted but then checked the other comments. MBJames: \\\"Fargate does not allow for OS-level access which means OS parameter tuning would not be an option.\\\" So option A is ruled out. With option D,EC2 instances are accessible and can be tuned.How do you address this case with Fargate?\\\"The application\\\"=E2=84=A2s operating system-level parameters require tuning\\\"",
          "upvote_count": "111032",
          "selected_answers": ""
        },
        {
          "id": 374758,
          "date": "Thu 04 Nov 2021 22:29",
          "username": "[Removed]",
          "content": "Having Apache Tomcat + Varnish + HAProxy on a single Docker image is a container-level suicide. Hence D is the best option here.",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 449883,
          "date": "Sun 07 Nov 2021 12:54",
          "username": "shammous",
          "content": "I upvoted but then checked the other comments. MBJames: \\\"Fargate does not allow for OS-level access which means OS parameter tuning would not be an option.\\\" So option A is ruled out. With option D,EC2 instances are accessible and can be tuned.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 364179,
          "date": "Mon 01 Nov 2021 02:10",
          "username": "notabot2",
          "content": "How do you address this case with Fargate?\\\"The application\\\"=E2=84=A2s operating system-level parameters require tuning\\\"",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 753685,
          "date": "Thu 22 Dec 2022 23:10",
          "username": "saeidp",
          "content": "D for sure",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 714258,
          "date": "Wed 09 Nov 2022 04:44",
          "username": "developer_404",
          "content": "A - Not good to contain all software in one container.<br>B -Not supporting all servers.<br>C - Same as above.<br>D - Can configure multiple servers including OS level tuning, ASG, Code Deploy. Fulfilling all key requirements.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 665931,
          "date": "Sun 11 Sep 2022 09:56",
          "username": "MikeyJ",
          "content": "The application's operating system-level parameters require tuning.<br>>EC2<br>The solution must include a way to automate the deployment of new application versions.<br>>CodePipeline<br>The infrastructure should be scalable and faulty servers should be replaced automatically.<br>>ASG",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 662083,
          "date": "Wed 07 Sep 2022 08:17",
          "username": "MichaelExamohcn",
          "content": "A - Per the requirement \\\"The infrastructure should be scalable and faulty servers should be replaced automatically.\\\"Fargate is best choice for this.IMHO, the problem on A is: \\\"Upload the application as a Docker image that contains all the necessary software to Amazon ECR\\\". You're basically embedding everything in one image. As [Removed] mentioned, this is not a container-level best practice. Usually containers are recommended to perform specific tasks. I would choose D instead.",
          "upvote_count": "23",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 662705,
          "date": "Wed 07 Sep 2022 18:36",
          "username": "ohcn",
          "content": "IMHO, the problem on A is: \\\"Upload the application as a Docker image that contains all the necessary software to Amazon ECR\\\". You're basically embedding everything in one image. As [Removed] mentioned, this is not a container-level best practice. Usually containers are recommended to perform specific tasks. I would choose D instead.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 655718,
          "date": "Thu 01 Sep 2022 05:04",
          "username": "colinquek",
          "content": "A - becos:<br>1. seems like app is alr build, and there is no mention of source code in the ques.<br>2. so much configuration and dependencies for the app, best choice here is containerise it.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 636934,
          "date": "Mon 25 Jul 2022 22:07",
          "username": "toma",
          "content": "D is the right answer, OS modification is the key.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 631196,
          "date": "Thu 14 Jul 2022 07:28",
          "username": "nqthien041292",
          "content": "Vote A due to this is an application, not a coding source",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 598416,
          "date": "Sun 08 May 2022 04:48",
          "username": "cooldeity",
          "content": "D:thought C would work. It is not good for customize os",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 550683,
          "date": "Sat 19 Feb 2022 06:27",
          "username": "MF2C",
          "content": "OS level setting with EC2",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 532747,
          "date": "Wed 26 Jan 2022 10:29",
          "username": "bobsmith2000",
          "content": "It's D. <br><br>A: docker + Fargate doesn't allow OS modification. Moreover installing too many daemons in one container is a violation of microservice approach (see recomender white papers).<br>B: .ebextentions isn't mentioned. Moreover There's only two types of proxy in BeanStalk: Apache and Nginx. We need HAProxy. Conclusion: we need custom solution with full control over OS (AMI)<br>C: BeanStalk worker tier environment although other part seems reasonable.<br><br>D: CodeCommit addresses automatic distribution of new app version. CodeDeploy + ASG gives full control over OS and installed software. Everything could be configured using CodeDeploy hooks for ASG. And ASG provides scalability. Perfect fit.",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 532737,
          "date": "Wed 26 Jan 2022 10:16",
          "username": "bobsmith2000",
          "content": "It's B. <br><br>A is incorrect because",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 501082,
          "date": "Tue 14 Dec 2021 06:21",
          "username": "Jaxjd",
          "content": "I go with A,<br> We can now access Fargate using exec via SSM.<br>https://aws.amazon.com/blogs/containers/new-using-amazon-ecs-exec-access-your-containers-fargate-ec2/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 442880,
          "date": "Sat 06 Nov 2021 21:44",
          "username": "donny_sanjaysanjose",
          "content": "why not C ??In general, tomcat should be tied with web server environment.",
          "upvote_count": "41",
          "selected_answers": ""
        },
        {
          "id": 637030,
          "date": "Tue 26 Jul 2022 03:04",
          "username": "sanjose",
          "content": "In general, tomcat should be tied with web server environment.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 338617,
          "date": "Fri 15 Oct 2021 19:27",
          "username": "twanc",
          "content": "D - OS requires tuningn menas that it requires OS rather than Docker. Docker in this case would be much harder to implement that typical EC2.",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 330247,
          "date": "Wed 13 Oct 2021 02:07",
          "username": "devopp",
          "content": "A for Docker Image for this bespoke app package (AMI also an option but not listed).",
          "upvote_count": "4",
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
      "question_text": "<p>A company wants to use AWS CloudFormation for infrastructure deployment. The company has strict tagging and resource requirements and wants to limit the deployment to two Regions. Developers will need to deploy multiple versions of the same application.<br>Which solution ensures resources are deployed in accordance with company policy?<br></p>",
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
              "choice": "<p>A. Create AWS Trusted Advisor checks to find and remediate unapproved CloudFormation StackSets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a CloudFormation drift detection operation to find and remediate unapproved CloudFormation StackSets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create CloudFormation StackSets with approved CloudFormation templates.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create AWS Service Catalog products with approved CloudFormation templates.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 22 discussion",
      "discusstion": [
        {
          "id": 374631,
          "date": "Thu 14 Oct 2021 09:19",
          "username": "sb333MBJamesRightAnswers",
          "content": "The answer is D.  https://docs.aws.amazon.com/servicecatalog/latest/adminguide/catalogs_constraints_template-constraints.htmlAgreed, D is the best way to enforce compliance in the scenario.AWS Service Catalog uses CloudFormation templates and StackSets under the hood to provide a wrapper. Since there are no cost constraints here, ServiceCatalog is a better approach:<br>https://aws.amazon.com/blogs/mt/how-to-set-up-a-multi-region-multi-account-catalog-of-company-standard-aws-service-catalog-products/",
          "upvote_count": "2123",
          "selected_answers": ""
        },
        {
          "id": 401870,
          "date": "Mon 25 Oct 2021 04:43",
          "username": "MBJames",
          "content": "Agreed, D is the best way to enforce compliance in the scenario.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 519813,
          "date": "Sat 08 Jan 2022 23:59",
          "username": "RightAnswers",
          "content": "AWS Service Catalog uses CloudFormation templates and StackSets under the hood to provide a wrapper. Since there are no cost constraints here, ServiceCatalog is a better approach:<br>https://aws.amazon.com/blogs/mt/how-to-set-up-a-multi-region-multi-account-catalog-of-company-standard-aws-service-catalog-products/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 326628,
          "date": "Fri 01 Oct 2021 11:16",
          "username": "WhyIronMan",
          "content": "I'll go with C",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 758863,
          "date": "Tue 27 Dec 2022 18:44",
          "username": "ceros399",
          "content": "Ans D:<br>https://docs.aws.amazon.com/servicecatalog/latest/adminguide/constraints-stackset.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 753694,
          "date": "Thu 22 Dec 2022 23:17",
          "username": "saeidp",
          "content": "I'll go with D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 743778,
          "date": "Tue 13 Dec 2022 09:54",
          "username": "Arkarter",
          "content": "I am not sure how choice D can do without CF stackset",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 741861,
          "date": "Sun 11 Dec 2022 16:52",
          "username": "SatenderRathee",
          "content": "AWS CloudFormation StackSets enable you to create, update, or delete stacks across multiple accounts and regions with a single CloudFormation template. By using StackSets, you can ensure that your resources are deployed in accordance with company policy, such as by using approved templates and limiting deployment to specific regions. Additionally, StackSets allow you to deploy multiple versions of the same application, enabling developers to easily update and maintain their infrastructure. AWS Trusted Advisor and drift detection operations do not provide the same level of control and flexibility as StackSets.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 725698,
          "date": "Thu 24 Nov 2022 10:33",
          "username": "Jtic",
          "content": "Voted for D. <br>https://docs.aws.amazon.com/servicecatalog/latest/adminguide/catalogs_constraints_template-constraints.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 689957,
          "date": "Sun 09 Oct 2022 09:03",
          "username": "ducluanxutrieu",
          "content": "I'll go with D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 667352,
          "date": "Mon 12 Sep 2022 20:34",
          "username": "[Removed]",
          "content": "Stacksets will create the Service catalog in the required regions; Should be C based on this AWS document:<br>https://aws.amazon.com/blogs/mt/how-to-set-up-a-multi-region-multi-account-catalog-of-company-standard-aws-service-catalog-products/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 665935,
          "date": "Sun 11 Sep 2022 10:02",
          "username": "MikeyJ",
          "content": "In AWS Service Catalog, you can use stack set constraints to configure product deployment options.<br>https://docs.aws.amazon.com/servicecatalog/latest/adminguide/constraints-stackset.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 657723,
          "date": "Fri 02 Sep 2022 20:35",
          "username": "ohcn",
          "content": "D - Multiple versions of the same application.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 655719,
          "date": "Thu 01 Sep 2022 05:06",
          "username": "colinquekcolinquek",
          "content": "D - as AWS Config is the service to enforce and ensure continual enforcement of policies on resources.i mean AWS Service Catalog",
          "upvote_count": "13",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 655720,
          "date": "Thu 01 Sep 2022 05:06",
          "username": "colinquek",
          "content": "i mean AWS Service Catalog",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 622405,
          "date": "Sun 26 Jun 2022 10:04",
          "username": "nqthien041292",
          "content": "Vote C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 560493,
          "date": "Fri 04 Mar 2022 03:47",
          "username": "[Removed][Removed]apcloudapcloudapcloudapcloud",
          "content": "deploying service catalog in multi-regions takes a lot of steps.it also utilizes cloudformation stackset to create for multi-regions.the best is to use service catalog factory.option D is not easy without sharing the portfolio in another region, so it is not easy to deploy .https://aws.amazon.com/blogs/mt/how-to-set-up-a-multi-region-multi-account-catalog-of-company-standard-aws-service-catalog-products/<br>https://docs.aws.amazon.com/servicecatalog/latest/adminguide/catalogs_constraints_template-constraints.html<br>not really.actually this link says to use stack sets, idk, and i cant delete my commentsounds like youre really referring to answer D.  Its just a matter of setting the region constraints in the catalog.<br>https://aws.amazon.com/blogs/mt/how-to-set-up-a-multi-region-multi-account-catalog-of-company-standard-aws-service-catalog-products/<br>https://docs.aws.amazon.com/servicecatalog/latest/adminguide/catalogs_constraints_template-constraints.htmlactually idk, i cant delete my comment either so idk",
          "upvote_count": "111111",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 560495,
          "date": "Fri 04 Mar 2022 03:51",
          "username": "[Removed]apcloudapcloud",
          "content": "option D is not easy without sharing the portfolio in another region, so it is not easy to deploy .https://aws.amazon.com/blogs/mt/how-to-set-up-a-multi-region-multi-account-catalog-of-company-standard-aws-service-catalog-products/<br>https://docs.aws.amazon.com/servicecatalog/latest/adminguide/catalogs_constraints_template-constraints.html<br>not really.actually this link says to use stack sets, idk, and i cant delete my comment",
          "upvote_count": "111",
          "selected_answers": ""
        },
        {
          "id": 734149,
          "date": "Sat 03 Dec 2022 02:15",
          "username": "apcloudapcloud",
          "content": "https://aws.amazon.com/blogs/mt/how-to-set-up-a-multi-region-multi-account-catalog-of-company-standard-aws-service-catalog-products/<br>https://docs.aws.amazon.com/servicecatalog/latest/adminguide/catalogs_constraints_template-constraints.html<br>not really.actually this link says to use stack sets, idk, and i cant delete my comment",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 734152,
          "date": "Sat 03 Dec 2022 02:17",
          "username": "apcloud",
          "content": "actually this link says to use stack sets, idk, and i cant delete my comment",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 734148,
          "date": "Sat 03 Dec 2022 02:14",
          "username": "apcloudapcloud",
          "content": "sounds like youre really referring to answer D.  Its just a matter of setting the region constraints in the catalog.<br>https://aws.amazon.com/blogs/mt/how-to-set-up-a-multi-region-multi-account-catalog-of-company-standard-aws-service-catalog-products/<br>https://docs.aws.amazon.com/servicecatalog/latest/adminguide/catalogs_constraints_template-constraints.htmlactually idk, i cant delete my comment either so idk",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 734151,
          "date": "Sat 03 Dec 2022 02:16",
          "username": "apcloud",
          "content": "actually idk, i cant delete my comment either so idk",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 544084,
          "date": "Wed 09 Feb 2022 21:30",
          "username": "blueorca",
          "content": "With CF, it can still be changed afterwards, while Service Catalog is a proper enforcement.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 517283,
          "date": "Wed 05 Jan 2022 09:51",
          "username": "SRTSRT",
          "content": "D : https://docs.aws.amazon.com/servicecatalog/latest/adminguide/constraints-resourceupdate.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 440466,
          "date": "Sun 07 Nov 2021 02:19",
          "username": "donny_sanjay",
          "content": "C for sure .Stackset for multiple account/regeion",
          "upvote_count": "1",
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
      "question_text": "<p>A DevOps Engineer must track the health of a stateless RESTful service sitting behind a Classic Load Balancer. The deployment of new application revisions is through a CI/CD pipeline. If the service's latency increases beyond a defined threshold, deployment should be stopped until the service has recovered.<br>Which of the following methods allow for the QUICKEST detection time?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#23",
          "answers": [
            {
              "choice": "<p>A. Use Amazon CloudWatch metrics provided by Elastic Load Balancing to calculate average latency. Alarm and stop deployment when latency increases beyond the defined threshold.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Lambda and Elastic Load Balancing access logs to detect average latency. Alarm and stop deployment when latency increases beyond the defined threshold.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS CodeDeploy's MinimumHealthyHosts setting to define thresholds for rolling back deployments. If these thresholds are breached, roll back the deployment.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Metric Filters to parse application logs in Amazon CloudWatch Logs. Create a filter for latency. Alarm and stop deployment when latency increases beyond the defined threshold.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 23 discussion",
      "discusstion": [
        {
          "id": 30650,
          "date": "Mon 04 Oct 2021 00:05",
          "username": "amzngeniusArnaud92secreatUser",
          "content": "A:<br>https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-cloudwatch-metrics.html<br>https://docs.aws.amazon.com/codedeploy/latest/userguide/deployments-stop.htmlbut you need the deployment ID to stop a deployment, so you mean you have to get it before with list-deployments command?Perfect answer with explanation.",
          "upvote_count": "1912",
          "selected_answers": ""
        },
        {
          "id": 690832,
          "date": "Mon 10 Oct 2022 09:46",
          "username": "Arnaud92",
          "content": "but you need the deployment ID to stop a deployment, so you mean you have to get it before with list-deployments command?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 82194,
          "date": "Thu 21 Oct 2021 04:21",
          "username": "secreatUser",
          "content": "Perfect answer with explanation.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 95336,
          "date": "Fri 22 Oct 2021 14:51",
          "username": "Raj9",
          "content": "A - correct<br>B - this might work but has additonal overhead of a lambda and will depende on how frequently lambda is run. Although minimal but<br>additonal cost of lambda. This won't give QUICKEST detection time.<br>C - MinimumHealthyHosts may not be directly correlated with latency. Latency might be more due to network or other issues even if 100% of hosts are healthy.<br>D - why do this when a ready made option is available https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-cloudwatch-metrics.html",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 710470,
          "date": "Thu 03 Nov 2022 13:08",
          "username": "Chinta",
          "content": "A IS THE CORRECT ONE",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 691806,
          "date": "Tue 11 Oct 2022 08:11",
          "username": "ducluanxutrieu",
          "content": "I'll go with A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 655721,
          "date": "Thu 01 Sep 2022 05:07",
          "username": "colinquek",
          "content": "A is the way to go here",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 546096,
          "date": "Sat 12 Feb 2022 22:06",
          "username": "blueorca",
          "content": "A, existing metric would be faster than going over the fuss of creating a new one",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 412613,
          "date": "Fri 05 Nov 2021 00:26",
          "username": "xxxdolorxxx",
          "content": "I also vote for A. ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 404509,
          "date": "Thu 04 Nov 2021 17:04",
          "username": "siejas",
          "content": "A is the quickest, parsing CW Logs is defo slower than reacting to latency metrics from LB",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 321857,
          "date": "Sun 31 Oct 2021 05:37",
          "username": "WhyIronMan",
          "content": "I'll go with A<br>\\\"allow for the QUICKEST detection time\\\"<br><b>A</b>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 251913,
          "date": "Sat 30 Oct 2021 08:24",
          "username": "gmandala",
          "content": "A - no brainer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 234865,
          "date": "Thu 28 Oct 2021 08:47",
          "username": "dnevado",
          "content": "A for sure",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 232198,
          "date": "Wed 27 Oct 2021 18:29",
          "username": "svjl",
          "content": "A: Why:<br>1- service's latency increases (related to metrics). Create alarm from metrics;<br>2- Not C - minimumhealthyhost (related to health status of the instances, not to service latency);<br>3- Not B because cant create alarm from the logs.<br>4- Possible D, because could create an alarm from the filter (query) but goes against QUICKEST detection time as the question is pointing.<br><br>So definitely A. ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 222414,
          "date": "Sun 24 Oct 2021 16:19",
          "username": "jackdryan",
          "content": "I'll go with A",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 206130,
          "date": "Sun 24 Oct 2021 01:39",
          "username": "ChauPhan",
          "content": "I'll go with A",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 65234,
          "date": "Wed 20 Oct 2021 09:54",
          "username": "un",
          "content": "A is correct<br><br>https://docs.amazonaws.cn/en_us/elasticloadbalancing/latest/application/load-balancer-cloudwatch-metrics.html<br><br>It gives info on HealthyHostCount",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 62162,
          "date": "Fri 15 Oct 2021 14:28",
          "username": "yassu",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 56806,
          "date": "Thu 14 Oct 2021 03:02",
          "username": "coolcerts",
          "content": "A is correct -- we can stop the deployment with CW alarm and SNS<br>https://aws.amazon.com/about-aws/whats-new/2016/09/aws-codedeploy-introduces-deployment-monitoring-with-amazon-cloudwatch-alarms-and-automatic-deployment-rollback/",
          "upvote_count": "3",
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
      "question_text": "<p>An AWS CodePipeline pipeline has implemented a code release process. The pipeline is integrated with AWS CodeDeploy to deploy versions of an application to multiple Amazon EC2 instances for each CodePipeline stage.<br>During a recent deployment, the pipeline failed due to a CodeDeploy issue. The DevOps team wants to improve monitoring and notifications during deployment to decrease resolution times.<br>What should the DevOps Engineer do to create notifications when issues are discovered?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#24",
          "answers": [
            {
              "choice": "<p>A. Implement AWS CloudWatch Logs for CodePipeline and CodeDeploy, create an AWS Config rule to evaluate code deployment issues, and create an Amazon SNS topic to notify stakeholders of deployment issues.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Implement AWS CloudWatch Events for CodePipeline and CodeDeploy, create an AWS Lambda function to evaluate code deployment issues, and create an Amazon SNS topic to notify stakeholders of deployment issues.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Implement AWS CloudTrail to record CodePipeline and CodeDeploy API call information, create an AWS Lambda function to evaluate code deployment issues, and create an Amazon SNS topic to notify stakeholders of deployment issues.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Implement AWS CloudWatch Events for CodePipeline and CodeDeploy, create an Amazon Inspector assessment target to evaluate code deployment issues, and create an Amazon SNS topic to notify stakeholders of deployment issues.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 24 discussion",
      "discusstion": [
        {
          "id": 21925,
          "date": "Mon 20 Sep 2021 21:08",
          "username": "HyunseokBeastX",
          "content": "I think the answer is BI agree.",
          "upvote_count": "121",
          "selected_answers": ""
        },
        {
          "id": 24207,
          "date": "Thu 23 Sep 2021 09:09",
          "username": "BeastX",
          "content": "I agree.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 223310,
          "date": "Fri 05 Nov 2021 08:22",
          "username": "jackdryan",
          "content": "I'll go with B",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 753703,
          "date": "Thu 22 Dec 2022 23:28",
          "username": "saeidp",
          "content": "It is B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 739867,
          "date": "Fri 09 Dec 2022 08:09",
          "username": "Maygam",
          "content": "https://docs.aws.amazon.com/codepipeline/latest/userguide/monitoring-cloudtrail-logs.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 665938,
          "date": "Sun 11 Sep 2022 10:08",
          "username": "MikeyJ",
          "content": "You can use Amazon CloudWatch Events to detect and react to changes in the state of an instance or a deployment (an \\\"event\\\") in your CodeDeploy operations. Then, based on rules you create, CloudWatch Events will invoke one or more target actions when a deployment or instance enters the state you specify in a rule. Depending on the type of state change, you might want to send notifications, capture state information, take corrective action, initiate events, or take other actions. You can select the following types of targets when using CloudWatch Events as part of your CodeDeploy operations:<br><br>AWS Lambda functions<br><br>Kinesis streams<br><br>Amazon SQS queues<br><br>Built-in targets (EC2 CreateSnapshot API call, EC2 RebootInstances API call, EC2 StopInstances API call , and EC2 TerminateInstances API call)<br><br>Amazon SNS topics<br><br>https://docs.aws.amazon.com/codedeploy/latest/userguide/monitoring-cloudwatch-events.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 252417,
          "date": "Sat 06 Nov 2021 12:14",
          "username": "gmandala",
          "content": "B it is",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 207579,
          "date": "Sat 30 Oct 2021 07:56",
          "username": "ChauPhan",
          "content": "B is the right one.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 126210,
          "date": "Tue 26 Oct 2021 03:53",
          "username": "df1228",
          "content": "I go with B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 82527,
          "date": "Fri 22 Oct 2021 19:43",
          "username": "secreatUser",
          "content": "IwillstickwithB. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 62696,
          "date": "Mon 18 Oct 2021 07:17",
          "username": "EbiEbi",
          "content": "Answer is ABEThis is actually for question 99",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 64993,
          "date": "Mon 18 Oct 2021 19:51",
          "username": "Ebi",
          "content": "This is actually for question 99",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 62220,
          "date": "Fri 15 Oct 2021 02:37",
          "username": "yassu",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 58713,
          "date": "Thu 07 Oct 2021 03:08",
          "username": "toshko85",
          "content": "B looks right",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 56746,
          "date": "Mon 04 Oct 2021 17:08",
          "username": "xaocho",
          "content": "It is B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 53250,
          "date": "Sun 03 Oct 2021 02:39",
          "username": "SamuelKhendryChauPhan",
          "content": "It should be A. <br>D is wrong because AWS Inspector can't help here<br>B and C is wrong because it's easier to look at CloudWatch Log then to create Lambda to evaluate code deployment issues.Who will look at cloudwatch Log? according to your saying, there should be a person who will monitor the logs all the time. Is that possible?AWS Config is not relevant here",
          "upvote_count": "121",
          "selected_answers": ""
        },
        {
          "id": 59688,
          "date": "Sat 09 Oct 2021 03:42",
          "username": "hendry",
          "content": "Who will look at cloudwatch Log? according to your saying, there should be a person who will monitor the logs all the time. Is that possible?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 207580,
          "date": "Fri 05 Nov 2021 06:30",
          "username": "ChauPhan",
          "content": "AWS Config is not relevant here",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 52828,
          "date": "Thu 30 Sep 2021 12:18",
          "username": "AlexTunAWStamR",
          "content": "A is right<br>https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.htmlAWS Config if for checking configurations. i think the answer is B",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 102777,
          "date": "Sat 23 Oct 2021 22:27",
          "username": "AWStamR",
          "content": "AWS Config if for checking configurations. i think the answer is B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 37303,
          "date": "Sun 26 Sep 2021 03:23",
          "username": "dinhvu",
          "content": "I go with B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 34190,
          "date": "Fri 24 Sep 2021 01:21",
          "username": "un",
          "content": "B is the right option",
          "upvote_count": "3",
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
      "question_text": "<p>A development team is using AWS CodeCommit to version control application code and AWS CodePipeline to orchestrate software deployments. The team has decided to use a remote master branch as the trigger for the pipeline to integrate code changes. A developer has pushed code changes to the CodeCommit repository, but noticed that the pipeline had no reaction, even after 10 minutes.<br>Which of the following actions should be taken to troubleshoot this issue?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#25",
          "answers": [
            {
              "choice": "<p>A. Check that an Amazon CloudWatch Events rule has been created for the master branch to trigger the pipeline.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Check that the CodePipeline service role has permission to access the CodeCommit repository.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Check that the developer's IAM role has permission to push to the CodeCommit repository.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Check to see if the pipeline failed to start because of CodeCommit errors in Amazon CloudWatch Logs.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 25 discussion",
      "discusstion": [
        {
          "id": 326025,
          "date": "Sat 09 Oct 2021 04:37",
          "username": "WhyIronMan",
          "content": "I'll go with A<br>When you create a pipeline from CodePipeline during the step-by-step it creates a CloudWatch Event rule for a given branch and repo<br>like this:<br>{<br>\\\"source\\\": [<br>\\\"aws.codecommit\\\"<br>],<br>\\\"detail-type\\\": [<br>\\\"CodeCommit Repository State Change\\\"<br>],<br>\\\"resources\\\": [<br>\\\"arn:aws:codecommit:us-east-1:xxxxx:repo-name\\\"<br>],<br>\\\"detail\\\": {<br>\\\"event\\\": [<br>\\\"referenceCreated\\\",<br>\\\"referenceUpdated\\\"<br>],<br>\\\"referenceType\\\": [<br>\\\"branch\\\"<br>],<br>\\\"referenceName\\\": [<br>\\\"master\\\"<br>]<br>}<br>}",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 311932,
          "date": "Fri 01 Oct 2021 14:33",
          "username": "rscloud",
          "content": "A<br>https://docs.aws.amazon.com/codepipeline/latest/userguide/pipelines-trigger-source-repo-changes-console.html",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 760305,
          "date": "Wed 28 Dec 2022 21:36",
          "username": "ceros399",
          "content": "A:<br>https://docs.aws.amazon.com/codepipeline/latest/userguide/triggering.html<br><br>at the begining I though it was B, but If it were a permission problem you might have had an error pointing to it.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 745503,
          "date": "Wed 14 Dec 2022 23:29",
          "username": "luk3k0",
          "content": "\\\"the pipeline had no reaction\\\" > pipeline is not run, so BCD rule out",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 722090,
          "date": "Sat 19 Nov 2022 16:48",
          "username": "kyozanuro",
          "content": "Both A & B are possible to have issue and need to check",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 671860,
          "date": "Sun 18 Sep 2022 01:54",
          "username": "lmimideveloper_404",
          "content": "I think B is also correct. As a pipeline trigger, it can be triggered by cloudwatch event, or it canperiodically check the repository for update. If latter, then B is also correct.When you use the CodePipeline console to create a pipeline, events are enabled by default. In that case, we have to first verify whether the events are created or not. Then the 2nd step would be ensuring the IAM role also has been created with proper permissions.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 714836,
          "date": "Thu 10 Nov 2022 02:07",
          "username": "developer_404",
          "content": "When you use the CodePipeline console to create a pipeline, events are enabled by default. In that case, we have to first verify whether the events are created or not. Then the 2nd step would be ensuring the IAM role also has been created with proper permissions.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 510791,
          "date": "Tue 28 Dec 2021 05:18",
          "username": "sg0206",
          "content": "A is correct<br>B & C are wrong as developer is able to push the code that mean he has access.<br>D is can be another option but it has not reactionmeans even logs are not generated",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 427979,
          "date": "Fri 05 Nov 2021 08:01",
          "username": "PatrickLi",
          "content": "The question is asking what could be the possible cause of the problem. The answers are to check the things that is required to make the pipeline work. A CloudWatch Event can help in troubleshoot but it is not required to make it work, nor it can identify what is causing the problem. So I say B is more appropriate.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 378038,
          "date": "Tue 26 Oct 2021 00:42",
          "username": "kdpeirisamehim",
          "content": "C<br>Permissions required to use the CodeCommit console<br>To allow users to use the CodeCommit console, the administrator must grant them permissions for CodeCommit actions. For example, you could attach the AWSCodeCommitPowerUser managed policy or its equivalent to a user or group.<br>https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-identity-based-access-control.htmlA developer has pushed code<br>changes to the CodeCommit repository ......so this shows that the developer has permission already. I go with A. ",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 423807,
          "date": "Thu 28 Oct 2021 20:21",
          "username": "amehim",
          "content": "A developer has pushed code<br>changes to the CodeCommit repository ......so this shows that the developer has permission already. I go with A. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 330228,
          "date": "Sat 23 Oct 2021 15:38",
          "username": "devopp",
          "content": "Strange Question as no Context to troubleshoot. Sure A, but surely could be any number of other options as well ?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 311980,
          "date": "Sat 02 Oct 2021 18:03",
          "username": "faltu1985",
          "content": "Ans is A",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 310321,
          "date": "Tue 21 Sep 2021 09:21",
          "username": "Rajarshi",
          "content": "ans: A",
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
      "question_text": "<p>A DevOps engineer is deploying a new version of a company's application in an AWS CodeDeploy deployment group associated with its Amazon EC2 instances.<br>After some time, the deployment fails. The engineer realizes that all the events associated with the specific deployment ID are in a Skipped status, and code was not deployed in the instances associated with the deployment group.<br>What are valid reasons for this failure? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#26",
          "answers": [
            {
              "choice": "<p>A. The networking configuration does not allow the EC2 instances to reach the internet via a NAT gateway or internet gateway, and the CodeDeploy endpoint cannot be reached.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. The IAM user who triggered the application deployment does not have permission to interact with the CodeDeploy endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The target EC2 instances were not properly registered with the CodeDeploy endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. An instance profile with proper permissions was not attached to the target EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. The appspec.yml file was not included in the application revision.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 26 discussion",
      "discusstion": [
        {
          "id": 326746,
          "date": "Sat 23 Oct 2021 03:19",
          "username": "WhyIronManWhyIronMan",
          "content": "I'll go with A,DYour instance might not be able to reach the CodeDeploy or S3 public endpoint using port 443. Try one of the following:<br><br>If an instance is provisioned in a private subnet, use a NAT gateway instead of an internet gateway in the route table. For more information, see NAT Gateways.<br><br>The instance you're deploying to might not have an IAM instance profile attached, or it might have an IAM instance profile attached that does not have the required permissions.",
          "upvote_count": "119",
          "selected_answers": ""
        },
        {
          "id": 326748,
          "date": "Mon 25 Oct 2021 05:21",
          "username": "WhyIronMan",
          "content": "Your instance might not be able to reach the CodeDeploy or S3 public endpoint using port 443. Try one of the following:<br><br>If an instance is provisioned in a private subnet, use a NAT gateway instead of an internet gateway in the route table. For more information, see NAT Gateways.<br><br>The instance you're deploying to might not have an IAM instance profile attached, or it might have an IAM instance profile attached that does not have the required permissions.",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 756120,
          "date": "Mon 26 Dec 2022 02:28",
          "username": "apcloud",
          "content": "A,D. <br>I spent a bunch of time reviewing this<br>https://docs.aws.amazon.com/codedeploy/latest/userguide/troubleshooting-deployments.html#troubleshooting-skipped-lifecycle-events",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 753707,
          "date": "Thu 22 Dec 2022 23:42",
          "username": "saeidp",
          "content": "A and D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 739877,
          "date": "Fri 09 Dec 2022 08:31",
          "username": "Maygam",
          "content": "https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 714841,
          "date": "Thu 10 Nov 2022 02:14",
          "username": "developer_404",
          "content": "https://docs.aws.amazon.com/codedeploy/latest/userguide/troubleshooting-deployments.html#troubleshooting-skipped-lifecycle-events",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 704223,
          "date": "Wed 26 Oct 2022 00:49",
          "username": "nzin4x",
          "content": "https://docs.aws.amazon.com/codedeploy/latest/userguide/troubleshooting-deployments.html#troubleshooting-skipped-lifecycle-events",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 668518,
          "date": "Wed 14 Sep 2022 02:46",
          "username": "Manhquixo",
          "content": "ACD<br>https://docs.aws.amazon.com/codedeploy/latest/userguide/troubleshooting-deployments.html#troubleshooting-skipped-lifecycle-eventsA & D is correct.<br>C answer is talking about IAM role - who will execute code deploy/pipeline.<br>But the link being refer. It's talking about Assume role between codedeploy and target endpoint.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 681496,
          "date": "Wed 28 Sep 2022 09:56",
          "username": "quixo",
          "content": "A & D is correct.<br>C answer is talking about IAM role - who will execute code deploy/pipeline.<br>But the link being refer. It's talking about Assume role between codedeploy and target endpoint.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 655724,
          "date": "Thu 01 Sep 2022 05:12",
          "username": "colinquek",
          "content": "Other than A which is quite obviously one of the 2 ans, i pick D as the 2nd part as the others are quite off.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 590106,
          "date": "Fri 22 Apr 2022 18:19",
          "username": "[Removed]",
          "content": "https://docs.aws.amazon.com/codedeploy/latest/userguide/troubleshooting-deployments.html#troubleshooting-skipped-lifecycle-events",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 391200,
          "date": "Sat 30 Oct 2021 17:27",
          "username": "RLai",
          "content": "I picked A & D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 351820,
          "date": "Wed 27 Oct 2021 08:27",
          "username": "JohnnieWalker",
          "content": "A, C, D are right as per this reference: https://docs.aws.amazon.com/codedeploy/latest/userguide/troubleshooting-deployments.html#troubleshooting-skipped-lifecycle-even",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 323262,
          "date": "Thu 07 Oct 2021 03:45",
          "username": "Jordanro",
          "content": "I will go with A,D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 319002,
          "date": "Sun 03 Oct 2021 14:55",
          "username": "Bmaster",
          "content": "I will go with B D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 316949,
          "date": "Sat 25 Sep 2021 05:25",
          "username": "1234567JWhyIronMan",
          "content": "ans: CD<br>https://docs.aws.amazon.com/codedeploy/latest/userguide/troubleshooting-deployments.html#troubleshooting-skipped-lifecycle-eventsYou say CD bot your reference is for AD",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 326745,
          "date": "Thu 07 Oct 2021 15:18",
          "username": "WhyIronMan",
          "content": "You say CD bot your reference is for AD",
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
      "question_text": "<p>A company has an application that is using a MySQL-compatible Amazon Aurora Multi-AZ DB cluster as the database. A cross-Region read replica has been created for disaster recovery purposes. A DevOps engineer wants to automate the promotion of the replica so it becomes the primary database instance in the event of a failure.<br>Which solution will accomplish this?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#27",
          "answers": [
            {
              "choice": "<p>A. Configure a latency-based Amazon Route 53 CNAME with health checks so it points to both the primary and replica endpoints. Subscribe an Amazon SNS topic to Amazon RDS failure notifications from AWS CloudTrail and use that topic to trigger an AWS Lambda function that will promote the replica instance as the master.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Aurora custom endpoint to point to the primary database instance. Configure the application to use this endpoint. Configure AWS CloudTrail to run an AWS Lambda function to promote the replica instance and modify the custom endpoint to point to the newly promoted instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Lambda function to modify the application's AWS Cloud Formation template to promote the replica, apply the template to update the stack, and point the application to the newly promoted instance. Create an Amazon CloudWatch alarm to trigger this Lambda function after the failure event occurs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Store the Aurora endpoint in AWS Systems Manager Parameter Store. Create an Amazon EventBridge (Amazon CloudWatch Events) event that defects the database failure and runs an AWS Lambda function to promote the replica instance and update the endpoint URL stored in AWS Systems Manager Parameter Store. Code the application to reload the endpoint from Parameter Store if a database connection fails.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 27 discussion",
      "discusstion": [
        {
          "id": 316938,
          "date": "Fri 24 Sep 2021 19:21",
          "username": "1234567J",
          "content": "ans: D",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 335046,
          "date": "Sun 26 Sep 2021 18:36",
          "username": "sb333",
          "content": "The answer is D.  EventBridge is needed to detect the database failure. Lambda is needed to promote the replica as it's in another Region (manual promotion, otherwise). Storing and updating the endpoint in Parameter store is important in updating the application. Look at High Availability section of Aurora FAQ:<br>https://aws.amazon.com/rds/aurora/faqs/",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 756131,
          "date": "Mon 26 Dec 2022 02:56",
          "username": "apcloud",
          "content": "This one is hard to understand, but my bust understanding is: A and b are wrong because they use cloud trail, you would want event bridge or cloud watch events or something else. C is wrong because it's using lambda to update cloud formation template when you really need to be adjusting the infra in real time not waiting on cloud formation. Knowing that D is the only possible choice that makes sense",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 755839,
          "date": "Sun 25 Dec 2022 17:59",
          "username": "Arkarterapcloud",
          "content": "I think choice D not right<br>REF : https://aws.amazon.com/blogs/architecture/implementing-multi-region-disaster-recovery-using-event-driven-architecture/-> Parameter Store is hosted in multiple Availability Zones in an AWS Region ->I go with choice A from this link below.<br>https://aws.amazon.com/blogs/database/cross-region-disaster-recovery-using-amazon-aurora-global-database-for-amazon-aurora-postgresql/A talks about RDS, the question is about aurora",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 756126,
          "date": "Mon 26 Dec 2022 02:35",
          "username": "apcloud",
          "content": "A talks about RDS, the question is about aurora",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 753721,
          "date": "Thu 22 Dec 2022 23:52",
          "username": "saeidp",
          "content": "I'll go with D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 744187,
          "date": "Tue 13 Dec 2022 16:14",
          "username": "Nickhiahiahia",
          "content": "So why B is wrong?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 722072,
          "date": "Sat 19 Nov 2022 16:05",
          "username": "alinato",
          "content": "A: Route 53 is the only one which does not go down in case of region going down.<br>D is incorrect because Parameter Store goes down together with region.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 665960,
          "date": "Sun 11 Sep 2022 10:39",
          "username": "MikeyJ",
          "content": "For each of these databases, we store all configuration information in AWS Systems Manager Parameter Store, so the failover process can get all the information it needs to carry out the failover steps.<br><br>We have created a lambda which breaks down the entire failover process into two steps. Step 1 promotes the replica database to be read write, and Step 2 re-establishes resiliency by creating a new replica in the original primary region.<br>https://developer.gs.com/blog/posts/building-multi-region-resiliency-with-amazon-rds-and-amazon-aurora",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 583213,
          "date": "Sat 09 Apr 2022 10:39",
          "username": "friendofpenguin",
          "content": "D - always choose decoupling options for endpoints, urls, passwords etc.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 581282,
          "date": "Tue 05 Apr 2022 15:38",
          "username": "jj22222",
          "content": "D looks right",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 572948,
          "date": "Tue 22 Mar 2022 14:19",
          "username": "dzenadcu",
          "content": "Correct Answer: D<br>Applicatino can be coded to load endpoint value from AWS Parameter Store. Once the value is changed in the param store, the application can use the new value. Just need a reload.<br><br>Wrong answer is B, because Cloudtrail is for static content and media stream caching. But not for DB content.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 508955,
          "date": "Sat 25 Dec 2021 05:36",
          "username": "szl0144",
          "content": "answer is D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 356106,
          "date": "Mon 11 Oct 2021 15:47",
          "username": "awsqueen",
          "content": "D, https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.Endpoints.html#Aurora.Overview.Endpoints.HA",
          "upvote_count": "2",
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
      "question_text": "<p>A healthcare provider has a hybrid architecture that includes 120 on-premises VMware servers running RedHat and 50 Amazon EC2 instances running Amazon<br>Linux. The company is in the middle of an all-in migration to AWS and wants to implement a solution for collecting information from the on-premises virtual machines and the EC2 instances for data analysis. The information includes:<br>- Operating system type and version<br>- Data for installed applications<br>- Network configuration information, such as MAC and IP addresses<br>- Amazon EC2 instance AMI ID and IAM profile<br>How can these requirements be met with the LEAST amount of administration?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#28",
          "answers": [
            {
              "choice": "<p>A. Write a shell script to run as a cron job on EC2 instances to collect and push the data to Amazon S3. For on-premises resources, use VMware vSphere to collect the data and write it into a file gateway for storing the data in S3. Finally, use Amazon Athena on the S3 bucket for analytics.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use a script on the on-premises virtual machines as well as the EC2 instances to gather and push the data into Amazon S3, and then use Amazon Athena for analytics.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Install AWS Systems Manager agents on both the on-premises virtual machines and the EC2 instances. Enable inventory collection and configure resource data sync to an Amazon S3 bucket to analyze the data with Amazon Athena.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Application Discovery Service for deploying Agentless Discovery Connector in the VMware environment and Discovery Agents on the EC2 instances for collecting the data. Then use the AWS Migration Hub Dashboard for analytics.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 28 discussion",
      "discusstion": [
        {
          "id": 65894,
          "date": "Mon 27 Sep 2021 07:21",
          "username": "eleGreatFunana",
          "content": "C is correct: https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-inventory.html<br>Inventory will includeData for installed applications andAmazon EC2 instance AMI ID and IAM profile. What is asked in the question.<br>While Application discovery AWS Application Discovery Service collects server hostnames, IP addresses, MAC addresses, and resource allocation and utilization details of key resources including CPU, network, memory, and disk.<br>I would have gone for D as its least invasive and there are company policies which don't let you install agents just like that ...but to collect data for installed applications can't be collected using Application Discovery ..so correct answer should be CC.  For simplicity, here is the data that can be discovered by the discovery agent:<br><br>https://docs.aws.amazon.com/application-discovery/latest/userguide/agent-data-collected.html<br><br>Note the LACK of IAM info.",
          "upvote_count": "151",
          "selected_answers": ""
        },
        {
          "id": 509910,
          "date": "Mon 27 Dec 2021 00:54",
          "username": "GreatFunana",
          "content": "C.  For simplicity, here is the data that can be discovered by the discovery agent:<br><br>https://docs.aws.amazon.com/application-discovery/latest/userguide/agent-data-collected.html<br><br>Note the LACK of IAM info.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 23645,
          "date": "Sun 19 Sep 2021 20:03",
          "username": "BeastX",
          "content": "C is correct",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 546659,
          "date": "Sun 13 Feb 2022 20:18",
          "username": "blueorca",
          "content": "D is the right answer. C is not least adminitrative resources.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 507901,
          "date": "Thu 23 Dec 2021 14:16",
          "username": "Balki",
          "content": "D is correct. Although \\\"C\\\" solution is valid, this is definitely not the one that can be implemented with the least amount of effort. Although you can use the SSM Agent to fetch all of the required information about your servers, the task of installing it to each and every on-premises VMWare server is a herculean task which entails a lot of execution time. Moreover, the scenario mentioned that the company is doing an all-in migration of their on-premises resources to AWS which means that installing the SSM agent is not appropriate. A better solution would be to use Agentless Discovery Connector of the AWS Application Discovery Service to your on-premises VMware vCenter, which can easily fetch the required information from hundreds of VMware servers.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 501231,
          "date": "Tue 14 Dec 2021 09:50",
          "username": "nqthien041292",
          "content": "Vote C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 447676,
          "date": "Sun 07 Nov 2021 13:47",
          "username": "oopsy",
          "content": "Go C -1",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 323406,
          "date": "Thu 04 Nov 2021 08:50",
          "username": "nebojsaMasiejasJASnipes",
          "content": "The answer is D<br>References:<br><br>https://docs.aws.amazon.com/application-discovery/latest/userguide/what-is-appdiscovery.html<br><br>https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-connector.html<br><br>https://docs.aws.amazon.com/application-discovery/latest/userguide/dashboard.htmlWrong. Not aligned with LEAST amount of administration. Systems Manager is by far the easiest implementationDid I miss something? install system manager agent on each of the 120 systems is not a joke",
          "upvote_count": "422",
          "selected_answers": ""
        },
        {
          "id": 404092,
          "date": "Sun 07 Nov 2021 02:09",
          "username": "siejasJASnipes",
          "content": "Wrong. Not aligned with LEAST amount of administration. Systems Manager is by far the easiest implementationDid I miss something? install system manager agent on each of the 120 systems is not a joke",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 474262,
          "date": "Mon 08 Nov 2021 12:58",
          "username": "JASnipes",
          "content": "Did I miss something? install system manager agent on each of the 120 systems is not a joke",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 320413,
          "date": "Thu 04 Nov 2021 04:47",
          "username": "WhyIronMan",
          "content": "I'll go with C",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 302645,
          "date": "Thu 04 Nov 2021 01:31",
          "username": "Jordanro",
          "content": "I will go with C<br>https://aws.amazon.com/application-discovery/faqs/<br>Q: Can I run agents in my EC2 instances?<br>Yes. You can install the AWS Discovery Agents on your EC2 instances to perform discovery and report upon performance information, network connections, and running processes, just as for any other server.<br>Q: What kind of information is captured by AWS Application Discovery Service?<br>AWS Application Discovery Service is designed to capture a variety of data including static configuration such as server hostnames, IP addresses, MAC addresses, CPU allocation, network throughput, memory allocation, disk resource allocations, DNS servers. It also captures resource utilization metrics such as CPU usage and memory usage. In addition, the AWS Application Discovery Agent can help determine server workloads and network relationships by identifying network connections between systems.<br><br>But Discovery Agent doesn't collectEC2 instance AMI ID and IAM profile information.<br>https://docs.aws.amazon.com/application-discovery/latest/userguide/agent-data-collected.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 276146,
          "date": "Wed 03 Nov 2021 07:12",
          "username": "bnagaraja9099",
          "content": "I will go with D too. Most AWS questions are approach related rather than gotchas. Discovery service has the least amount of administration and plays a big role in on-prem migration.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 232048,
          "date": "Tue 02 Nov 2021 01:00",
          "username": "svjl",
          "content": "C - https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-inventory.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 229850,
          "date": "Mon 01 Nov 2021 19:56",
          "username": "Coffeinerd",
          "content": "Answer: C is the right one. https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-schema.html<br><br>Wrong:<br>A - Writing scripts is effort intensive, not DevOps or AWS related, a lot of manual tasks involved as well<br>B - again scripted options are not good<br>C - right one, even though effort intensive to install it is the ONLY alternative that cover all requirements, so only one that is right.<br>D - less effort but do not deliver application information. So not right.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 228179,
          "date": "Mon 01 Nov 2021 16:50",
          "username": "saddly",
          "content": "The issue of D is Discovery Agent doesn't collect IAM inform.<br>C sounds the only option, though installation is a headache.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 223202,
          "date": "Mon 01 Nov 2021 14:20",
          "username": "jackdryan",
          "content": "I'll go with C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 222547,
          "date": "Sun 31 Oct 2021 19:37",
          "username": "NorthStar2010",
          "content": "I'll go with D.  It's faster to install 50 agents to Amazon EC2 than 120 on VMware virtual machine.Imagine if you have thousands of VM on-prem, no additional work is needed since vCenter will provide the information automatically, so D is the right answer for me.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 220281,
          "date": "Fri 22 Oct 2021 23:41",
          "username": "SamChanxlFiremanrobbyyy",
          "content": "Seems \\\"C\\\" is the most popular answer, but seems it cannot collect \\\"Amazon EC2 instance AMI ID and IAM profile\\\", any idea on this?<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-inventory.htmlAnswer is D.  C is not LEAST effort.\\\"C\\\" SSM Agent can collect \\\"Amazon EC2 instance AMI ID and IAM profile\\\", Check this<br>https://docs.aws.amazon.com/zh_tw/systems-manager/latest/userguide/sysman-inventory-schema.html",
          "upvote_count": "111",
          "selected_answers": ""
        },
        {
          "id": 222342,
          "date": "Sun 24 Oct 2021 11:42",
          "username": "xlFireman",
          "content": "Answer is D.  C is not LEAST effort.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 527194,
          "date": "Wed 19 Jan 2022 04:17",
          "username": "robbyyy",
          "content": "\\\"C\\\" SSM Agent can collect \\\"Amazon EC2 instance AMI ID and IAM profile\\\", Check this<br>https://docs.aws.amazon.com/zh_tw/systems-manager/latest/userguide/sysman-inventory-schema.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 219884,
          "date": "Fri 22 Oct 2021 05:07",
          "username": "xlFireman",
          "content": "Answer is D.  Option C is incorrect because although this solution is valid, this is definitely not the one that can be implemented with the least amount of effort. Although you can use the SSM Agent to fetch all of the required information about your servers, the task of installing it to each and every on-premises VMWare server is a herculean task which entails a lot of execution time. Moreover, the scenario mentioned that the company is doing an all-in migration of their on-premises resources to AWS which means that installing the SSM agent is not appropriate. A better solution would be to use Agentless Discovery Connector of the AWS Application Discovery Service to your on-premises VMware vCenter, which can easily fetch the required information from hundreds of VMware servers.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#29",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's DevOps engineer is working in a multi-account environment. The company uses AWS Transit Gateway to route all outbound traffic through a network operations account. In the network operations account, all account traffic passes through a firewall appliance for inspection before the traffic goes to an internet gateway.<br>The firewall appliance sends logs to Amazon CloudWatch Logs and includes event severities of CRITICAL, HIGH, MEDIUM, LOW, and INFO. The security team wants to receive an alert if any CRITICAL events occur.<br>What should the DevOps engineer do to meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#29",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon CloudWatch Synthetics canary to monitor the firewall state. If the firewall reaches a CRITICAL state or logs a CRITICAL event, use a CloudWatch alarm to publish a notification to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the security team's email address to the topic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon CloudWatch mettic filter by using a search for CRITICAL events. Publish a custom metric for the finding. Use a CloudWatch alarm based on the custom metric to publish a notification to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the security team's email address to the topic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable Amazon GuardDuty in the network operations account. Configure GuardDuty to monitor flow logs. Create an Amazon EventBridge (Amazon CloudWatch Events) event rule that is invoked by GuardDuty events that are CRITICAL. Define an Amazon Simple Notification Service (Amazon SNS) topic as a target. Subscribe the security team's email address to the topic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Firewall Manager to apply consistent policies across all accounts. Create an Amazon EventBridge (Amazon CloudWatch Events) event rule that is invoked by Firewall Manager events that are CRITICAL. Define an Amazon Simple Notification Service (Amazon SNS) topic as a target. Subscribe the security team's email address to the topic.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 29 discussion",
      "discusstion": [
        {
          "id": 760389,
          "date": "Wed 28 Dec 2022 23:30",
          "username": "Teonardo",
          "content": "C is not correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 714970,
          "date": "Thu 10 Nov 2022 07:29",
          "username": "developer_404",
          "content": "They are just asking for receiving notification on critical severity which can be done by Cloudwatch metrics filter and SNS",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 710987,
          "date": "Fri 04 Nov 2022 09:15",
          "username": "flavins",
          "content": "I go with B since there is configuration in place that sends logs to CW",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 689258,
          "date": "Sat 08 Oct 2022 13:40",
          "username": "animalrj",
          "content": "If there was no Logs being sent to CW, I would definitly goes with GuardDuty.But GuardDuty is a Threat Detection based on VPCLogs, Cloud Trail, DNS Logs and EventBridge. In this question we need to analyse logs. Thats the point.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 655726,
          "date": "Thu 01 Sep 2022 05:16",
          "username": "colinquek",
          "content": "B - as the rest are not searching the logs",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 655278,
          "date": "Wed 31 Aug 2022 18:36",
          "username": "ohcn",
          "content": "I go with B.  Question only asks about receiving an alert in case any CRITICAL alert arises. C could be an option if the company, for example, wants to enhance firewall threat source detection. B keep the solution simple.<br>Refer to an example of solution using GuardDuty and Firewall - https://www.juniper.net/documentation/us/en/software/sky-atp/sky-atp/topics/topic-map/sky-atp-guardduty-srx-integration.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 654598,
          "date": "Wed 31 Aug 2022 03:41",
          "username": "bigdood",
          "content": "Since the logs are sent to Cloudwatch via the Firewall Appliance, filtering for the custom metric of CRITCAL from Cloudwatch would be the best response, thus, \\\"B\\\".",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#30",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently migrated its legacy application from on-premises to AWS. The application is hosted on Amazon EC2 instances behind an Application Load<br>Balancer, which is behind Amazon API Gateway. The company wants to ensure users experience minimal disruptions during any deployment of a new version of the application. The company also wants to ensure it can quickly roll back updates if there is an issue.<br>Which solution will meet these requirements with MINIMAL changes to the application?<br></p>",
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
              "choice": "<p>A. Introduce changes as a separate environment parallel to the existing one. Configure API Gateway to use a canary release deployment to send a small subset of user traffic to the new environment.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Introduce changes as a separate environment parallel to the existing one. Update the application's DNS alias records to point to the new environment.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Introduce changes as a separate target group behind the existing Application Load Balancer. Configure API Gateway to route user traffic to the new target group in steps.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Introduce changes as a separate target group behind the existing Application Load Balancer. Configure API Gateway to route all traffic to the Application Load Balancer, which then sends the traffic to the new target group.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 30 discussion",
      "discusstion": [
        {
          "id": 326773,
          "date": "Tue 12 Oct 2021 05:12",
          "username": "WhyIronMan",
          "content": "I'll got with A<br><br>B) required a lot of changes and the DNS can take longer to propagate<br>C) API gateway cannot choose the target group, this is done by de ELB<br>D) ELB Target groups changes require some work, you can just pointo to a new loadbalancer",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 320123,
          "date": "Tue 05 Oct 2021 03:34",
          "username": "yyyshammous",
          "content": "D requires fewer changes than AOption D suggests to reroute all traffic at once, which will affect all the users experience. To avoid that, Option A suggests to use canary deployment, which minimizes the blast radius in case of issues and allows to quickly roll back.",
          "upvote_count": "106",
          "selected_answers": ""
        },
        {
          "id": 450108,
          "date": "Tue 02 Nov 2021 20:20",
          "username": "shammous",
          "content": "Option D suggests to reroute all traffic at once, which will affect all the users experience. To avoid that, Option A suggests to use canary deployment, which minimizes the blast radius in case of issues and allows to quickly roll back.",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 753731,
          "date": "Fri 23 Dec 2022 00:11",
          "username": "saeidp",
          "content": "I'll go with A<br>In case of failure in new code, there will be issues in using option D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 739250,
          "date": "Thu 08 Dec 2022 16:55",
          "username": "ericzaj",
          "content": "A.  Question isn't asking about impacting minimal users, it's asking for minimal disruption.D.  Simple and elegant with minimal changes to the application.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 736854,
          "date": "Tue 06 Dec 2022 14:37",
          "username": "Milind",
          "content": "Why Canary Deployment?<br>Canary deployment benefits include zero downtime, easy rollout and quick rollback =E2=80=93 plus the added safety from the gradual rollout process. It also has some drawbacks =E2=80=93 the expense of maintaining multiple server instances, the difficult clone-or-don't-clone database decision.<br>Source: https://www.split.io/glossary/canary-deployment/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 734528,
          "date": "Sat 03 Dec 2022 16:14",
          "username": "ericzaj",
          "content": "I can see C as correct if you have the ALB configured with routing rules. You can use a http header to route requests to a specific target group. The wording of the question is interesting. The requirement is minimal disruption. D is kind of correct because you could flip to the old target group quickly as long as the old infrastructure hasn't been deprovisioned.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 724451,
          "date": "Tue 22 Nov 2022 17:13",
          "username": "neta1o",
          "content": "For those that looking at C/D I think those may be cancelled because an ALB can only point to one target group?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 710476,
          "date": "Thu 03 Nov 2022 13:23",
          "username": "Chinta",
          "content": "A IS THE RIGHT ANSWER",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 674606,
          "date": "Wed 21 Sep 2022 01:45",
          "username": "Goozian",
          "content": "Though \\\"D\\\" makes more sense in the real world but saying \\\"minimal disruptions\\\" requires just sending a portion of traffic to the new environment. So reluctantly picking \\\"A\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 655728,
          "date": "Thu 01 Sep 2022 05:18",
          "username": "colinquek",
          "content": "A - quite simply, questions of this nature w keywords like \\\"subset of users\\\", the clear option for ans shld be \\\"canary\\\"",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 590110,
          "date": "Fri 22 Apr 2022 18:24",
          "username": "[Removed]",
          "content": "Canary deployment for minimal disruptions",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 560571,
          "date": "Fri 04 Mar 2022 07:48",
          "username": "[Removed]",
          "content": "APIG has no target group,ELB cannt canary, so only Option A is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 430956,
          "date": "Sun 24 Oct 2021 22:24",
          "username": "NNHAN",
          "content": "D, need ASG only<br>A, need ALB+ASG",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 330466,
          "date": "Tue 19 Oct 2021 15:05",
          "username": "devopp",
          "content": "A<br>the Revealed Answer of C is incorrect as APIG cant set the TargetGroup, the ELB does this.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 319018,
          "date": "Sat 25 Sep 2021 01:23",
          "username": "Bmaster",
          "content": "https://docs.aws.amazon.com/apigateway/latest/developerguide/create-canary-deployment.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 319015,
          "date": "Mon 20 Sep 2021 03:50",
          "username": "Bmaster",
          "content": "I will go with A",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#31",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A DevOps Engineer is asked to implement a strategy for deploying updates to a web application with zero downtime. The application infrastructure is defined in<br>AWS CloudFormation and is made up of an Amazon Route 53 record, an Application Load Balancer, Amazon EC2 instances in an EC2 Auto Scaling group, and<br>Amazon DynamoDB tables. To avoid downtime, there must be an active instance serving the application at all times.<br>Which strategies will ensure the deployment happens with zero downtime? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#31",
          "answers": [
            {
              "choice": "<p>A. In the CloudFormation template, modify the AWS::AutoScaling::AutoscalingGroup resource and add an UpdatePolicy attribute to define the required elements for a deployment with zero downtime.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. In the CloudFormation template, modify the AWS:: AutoScaling::DeploymentUpdates resource and add an UpdatePolicy attribute to define the required elements for a deployment with zero downtime.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Add a new Application Load Balancer and Auto Scaling group to the CloudFormation template. Deploy new changes to the inactive Auto Scaling group. Use Route 53 to change the active Application Load Balancer.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add a new Application Load Balancer and Auto Scaling group to the CloudFormation template. Modify the AWS::AutoScaling::AutoScalingGroup resource and add an UpdatePolicy attribute to perform rolling updates.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. In the CloudFormation template, modify the UpdatePolicy attribute for the CloudFormation stack and specify the Auto Scaling group that will be updated. Configure MinSuccessfulInstancesPercent and PauseTime to ensure the deployment happens with zero downtime.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 31 discussion",
      "discusstion": [
        {
          "id": 320954,
          "date": "Sun 10 Oct 2021 05:31",
          "username": "WhyIronMan",
          "content": "I'll go with A, C<br>Rolling updates + blue green deployments",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 319094,
          "date": "Thu 07 Oct 2021 12:17",
          "username": "Jordanro",
          "content": "A,C<br>A is to do rolling updates, C is to do a blue-green deployment.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 427523,
          "date": "Wed 03 Nov 2021 09:54",
          "username": "NNHAN",
          "content": "CE are answers",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 362962,
          "date": "Tue 02 Nov 2021 17:58",
          "username": "feelgreat",
          "content": "ans: A and E.  Combined both provides a complete solution",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 333740,
          "date": "Thu 28 Oct 2021 21:50",
          "username": "CeckGix",
          "content": "Answers are A and D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 333350,
          "date": "Sat 23 Oct 2021 12:33",
          "username": "devoppGreatFunana",
          "content": "changing answer to A,C<br>D is nonsensical with explicit resource creation, and E is not right since ASG & UpdatePolicy specified the wrong way roundso only left with C as a bad choice.This guy \\\"DevOps\\\" like a pro.",
          "upvote_count": "41",
          "selected_answers": ""
        },
        {
          "id": 510052,
          "date": "Mon 27 Dec 2021 07:04",
          "username": "GreatFunana",
          "content": "This guy \\\"DevOps\\\" like a pro.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 333345,
          "date": "Sat 23 Oct 2021 09:36",
          "username": "devoppGreatFunana",
          "content": "Ans is A, D<br>D for ASG UpdatePolicy which has AutoScalingRollingUpdate, so u dont have to explicitly do it manually, which is what optionC does.Read the answer again: \\\"D.  Add a new Application Load Balancer and Auto Scaling group to the CloudFormation template. Modify the AWS::AutoScaling::AutoScalingGroup resource and add an UpdatePolicy attribute to perform rolling updates.\\\"<br><br>Adding a new Auto Scaling Group to the CloudFormation template does nothing. How do you tell it to direct traffic to it? What do you do with the old resources that are still live?<br><br>This answer is a gotcha. If worded correctly, it could have been correct, but its not.<br><br>Its AC. ",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 510051,
          "date": "Mon 27 Dec 2021 07:04",
          "username": "GreatFunana",
          "content": "Read the answer again: \\\"D.  Add a new Application Load Balancer and Auto Scaling group to the CloudFormation template. Modify the AWS::AutoScaling::AutoScalingGroup resource and add an UpdatePolicy attribute to perform rolling updates.\\\"<br><br>Adding a new Auto Scaling Group to the CloudFormation template does nothing. How do you tell it to direct traffic to it? What do you do with the old resources that are still live?<br><br>This answer is a gotcha. If worded correctly, it could have been correct, but its not.<br><br>Its AC. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 319664,
          "date": "Thu 07 Oct 2021 17:04",
          "username": "geniuscloudblueorca",
          "content": "For those who said E is correct, please check the attributes here:<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html<br>To ensure zero downtime, we should modify \\\"MinInstancesInService\\\" instead of \\\"MinSuccessfulInstancesPercent\\\".<br>Sample CF Template for rolling update can be found here (search for \\\"UpdatePolicy\\\"):<br>https://github.com/awslabs/aws-cloudformation-templates/blob/master/aws/services/AutoScaling/AutoScalingRollingUpdates.yamlI checked the docs you linked, it is indeed \\\"MinSuccessfulInstancesPercent\\\" for both rolling and replacing update. But rolling is working with PauseTime whereas replacing is working with CreationPolicy",
          "upvote_count": "51",
          "selected_answers": ""
        },
        {
          "id": 545712,
          "date": "Sat 12 Feb 2022 09:25",
          "username": "blueorca",
          "content": "I checked the docs you linked, it is indeed \\\"MinSuccessfulInstancesPercent\\\" for both rolling and replacing update. But rolling is working with PauseTime whereas replacing is working with CreationPolicy",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 313743,
          "date": "Wed 29 Sep 2021 22:40",
          "username": "cvarg",
          "content": "EC looks right for me",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 313103,
          "date": "Tue 28 Sep 2021 12:29",
          "username": "devopsv2ToRtugo",
          "content": "E is definitely the right answer. https://aws.amazon.com/premiumsupport/knowledge-center/auto-scaling-group-rolling-updates/<br><br>But we have to choose 2 options, I would go with C as second option (It is more like a manual Blue/Green deployment strategy)<br><br>Option A, D: AWS::AutoScaling::AutoScalingGroup itself does not have an UpdatePolicy attribute<br>Option B: AWS::AutoScaling::DeploymentPolicy, there is no resource like thisAccording to https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.htmlUpdatePolicy attribute does exists for AWS::AutoScaling::AutoScalingGroup so A, D are not invalid for that reason.<br><br>In fact you can add an UpdatePolicy attribute to your stack to perform rolling updates as per https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-group.html so A+C looks better for me, the link you provide does nos says anything about achieving zero downtime with option E while rolling deployment can provide zero downtime.",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 315721,
          "date": "Sat 02 Oct 2021 18:25",
          "username": "ToRtugo",
          "content": "According to https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.htmlUpdatePolicy attribute does exists for AWS::AutoScaling::AutoScalingGroup so A, D are not invalid for that reason.<br><br>In fact you can add an UpdatePolicy attribute to your stack to perform rolling updates as per https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-group.html so A+C looks better for me, the link you provide does nos says anything about achieving zero downtime with option E while rolling deployment can provide zero downtime.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 309395,
          "date": "Mon 20 Sep 2021 18:56",
          "username": "Rajarshi",
          "content": "ans is E",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#32",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A DevOps Engineer manages a web application that runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances run in an EC2<br>Auto Scaling group across multiple Availability Zones. The engineer needs to implement a deployment strategy that:<br>-Launches a second fleet of instances with the same capacity as the original fleet.<br>-Maintains the original fleet unchanged while the second fleet is launched.<br>-Transitions traffic to the second fleet when the second fleet is fully deployed.<br>-Terminates the original fleet automatically 1 hour after transition.<br>Which solution will satisfy these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#32",
          "answers": [
            {
              "choice": "<p>A. Use an AWS CloudFormation template with a retention policy for the ALB set to 1 hour. Update the Amazon Route 53 record to reflect the new ALB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use two AWS Elastic Beanstalk environments to perform a blue/green deployment from the original environment to the new one. Create an application version lifecycle policy to terminate the original environment in 1 hour.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS CodeDeploy with a deployment group configured with a blue/green deployment configuration. Select the option Terminate the original instances in the deployment group with a waiting period of 1 hour.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Elastic Beanstalk with the configuration set to Immutable. Create an .ebextension using the Resources key that sets the deletion policy of the ALB to 1 hour, and deploy the application.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 32 discussion",
      "discusstion": [
        {
          "id": 224215,
          "date": "Wed 03 Nov 2021 00:03",
          "username": "jackdryan",
          "content": "I'll go with C",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 163377,
          "date": "Tue 12 Oct 2021 01:38",
          "username": "halfwayapcloudsyaldramskipbaylessfor3halfwaykj07",
          "content": "C. <br>https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BlueInstanceTerminationOption.htmlThis link shows the answer is indeed CThank you for the link - answer is CI'm wondering why the EB ones are false though, do you know?EB application version lifecycle policy is not for EC2 instance. More details can be found here: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-lifecycle.htmlThis link eliminates EB options and this one https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BlueInstanceTerminationOption.html validates option B. ",
          "upvote_count": "712121",
          "selected_answers": ""
        },
        {
          "id": 756135,
          "date": "Mon 26 Dec 2022 03:26",
          "username": "apcloud",
          "content": "This link shows the answer is indeed C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 669255,
          "date": "Wed 14 Sep 2022 20:23",
          "username": "syaldram",
          "content": "Thank you for the link - answer is C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 163968,
          "date": "Wed 13 Oct 2021 01:14",
          "username": "skipbaylessfor3halfwaykj07",
          "content": "I'm wondering why the EB ones are false though, do you know?EB application version lifecycle policy is not for EC2 instance. More details can be found here: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-lifecycle.htmlThis link eliminates EB options and this one https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BlueInstanceTerminationOption.html validates option B. ",
          "upvote_count": "121",
          "selected_answers": ""
        },
        {
          "id": 167482,
          "date": "Thu 21 Oct 2021 13:09",
          "username": "halfwaykj07",
          "content": "EB application version lifecycle policy is not for EC2 instance. More details can be found here: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-lifecycle.htmlThis link eliminates EB options and this one https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BlueInstanceTerminationOption.html validates option B. ",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 200264,
          "date": "Tue 26 Oct 2021 07:17",
          "username": "kj07",
          "content": "This link eliminates EB options and this one https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BlueInstanceTerminationOption.html validates option B. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 736089,
          "date": "Mon 05 Dec 2022 17:16",
          "username": "AlbertC",
          "content": "D - https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environmentmgmt-updates-immutable.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 689267,
          "date": "Sat 08 Oct 2022 13:54",
          "username": "animalrj",
          "content": "Original revision termination settings<br>\\\"The original revision termination settings are configured to wait 1 hour after traffic has been rerouted before terminating the blue task set.\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 665966,
          "date": "Sun 11 Sep 2022 10:58",
          "username": "MikeyJ",
          "content": "Original revision termination settings<br>The original revision termination settings are configured to wait 1 hour after traffic has been rerouted before terminating the blue task set.<br>https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-bluegreen.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 661103,
          "date": "Tue 06 Sep 2022 12:46",
          "username": "SamHan",
          "content": "Ans: C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 221283,
          "date": "Fri 29 Oct 2021 17:30",
          "username": "xlFireman",
          "content": "Answer is C.  B is incorrect because the Elastic Beanstalk Application Version lifecycle just deletes old .config files that dictate how your environment is set up. It does NOT dictate how long until an environment is deleted by Elastic Beanstalk.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 209452,
          "date": "Wed 27 Oct 2021 18:56",
          "username": "ChauPhan",
          "content": "Yes, correct is C.  The remain answers is all using CloudFormation. The DeletionPolicy of CF is just Retain/Delete/Snapshot. There is no option to keep the resource in the amount of time before deletion.<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 155194,
          "date": "Mon 04 Oct 2021 05:31",
          "username": "AugustoosouzaAugustoosouza",
          "content": "Answer B. <br>https://docs.aws.amazon.com/en-us/codedeploy/latest/userguide/deployment-groups-create-blue-green.htmlI typed wrong. Answer C. ",
          "upvote_count": "17",
          "selected_answers": ""
        },
        {
          "id": 155195,
          "date": "Sat 09 Oct 2021 11:48",
          "username": "Augustoosouza",
          "content": "I typed wrong. Answer C. ",
          "upvote_count": "7",
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
      "question_text": "<p>An application is being deployed with two Amazon EC2 Auto Scaling groups, each configured with an Application Load Balancer. The application is deployed to one of the Auto Scaling groups and an Amazon Route 53 alias record is pointed to the Application Load Balancer of the last deployed Auto Scaling group.<br>Deployments alternate between the two Auto Scaling groups.<br>Home security devices are making requests into the application. The Development team notes that new requests are coming into the old stack days after the deployment. The issue is caused by devices that are not observing the Time to Live (TTL) setting on the Amazon Route 53 alias record.<br>What steps should the DevOps Engineer take to address the issue with requests coming to the old stacks, while creating minimal additional resources?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#33",
          "answers": [
            {
              "choice": "<p>A. Create a fleet of Amazon EC2 instances running HAProxy behind an Application Load Balancer. The HAProxy instances will proxy the requests to one of the existing Auto Scaling groups. After a deployment the HAProxy instances are updated to send requests to the newly deployed Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Reduce the application to one Application Load Balancer. Create two target groups named Blue and Green. Create a rule on the Application Load Balancer pointed to a single target group. Add logic to the deployment to update the Application Load Balancer rule to the target group of the newly deployed Auto Scaling group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Move the application to an AWS Elastic Beanstalk application with two environments. Perform new deployments on the non-live environment. After a deployment, perform an Elastic Beanstalk CNAME swap to make the newly deployed environment the live environment.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon CloudFront distribution. Set the two existing Application Load Balancers as origins on the distribution. After a deployment, update the CloudFront distribution behavior to send requests to the newly deployed Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 33 discussion",
      "discusstion": [
        {
          "id": 23851,
          "date": "Mon 20 Sep 2021 00:57",
          "username": "BeastX",
          "content": "B is correct<br>https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html#application-load-balancer-components",
          "upvote_count": "19",
          "selected_answers": ""
        },
        {
          "id": 404113,
          "date": "Wed 27 Oct 2021 10:12",
          "username": "siejassiejas",
          "content": "It's B, had same problem and fixed it in real life :) 1 ALB and switching target groups with b/g switch.To elaborate: 1 LB will have a fixed IPs so R53 record will always point at the same IP's so will customers. TTL now makes no difference as DNS record will be stale",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 404115,
          "date": "Sat 06 Nov 2021 10:17",
          "username": "siejas",
          "content": "To elaborate: 1 LB will have a fixed IPs so R53 record will always point at the same IP's so will customers. TTL now makes no difference as DNS record will be stale",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 374433,
          "date": "Wed 27 Oct 2021 00:28",
          "username": "Dantehilary",
          "content": "B is the correct answer, C is not because swapping URL will still have the TTL challenge",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 320999,
          "date": "Sun 24 Oct 2021 16:07",
          "username": "WhyIronMan",
          "content": "I'll go with B,",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 223207,
          "date": "Fri 22 Oct 2021 02:24",
          "username": "jackdryan",
          "content": "I'll go with B",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 94853,
          "date": "Sat 16 Oct 2021 09:03",
          "username": "Raj9",
          "content": "B looks good",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 62146,
          "date": "Sat 16 Oct 2021 03:26",
          "username": "yassu",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 54967,
          "date": "Wed 13 Oct 2021 15:54",
          "username": "xaocho",
          "content": "It is B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 50312,
          "date": "Thu 30 Sep 2021 23:01",
          "username": "AdityaB",
          "content": "B is correct -- weighted target groups for application load balancers. It allows developers to control how to distribute traffic to multiple versions of their application-- https://aws.amazon.com/blogs/aws/new-application-load-balancer-simplifies-deployment-with-weighted-target-groups/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 35789,
          "date": "Wed 29 Sep 2021 01:14",
          "username": "dinhvu",
          "content": "answer is B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 33891,
          "date": "Mon 27 Sep 2021 00:07",
          "username": "un",
          "content": "B is correct",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 24858,
          "date": "Tue 21 Sep 2021 01:31",
          "username": "HazemYousryAnimiBeastXppshein",
          "content": "Answer is CCan you explain how the answer is CC is not correct, swap CNAME is also changing the DNS, still have the TTL issue.`while creating minimal additional resources` so answer should not be C. ",
          "upvote_count": "2162",
          "selected_answers": ""
        },
        {
          "id": 25603,
          "date": "Tue 21 Sep 2021 20:44",
          "username": "AnimiBeastX",
          "content": "Can you explain how the answer is CC is not correct, swap CNAME is also changing the DNS, still have the TTL issue.",
          "upvote_count": "16",
          "selected_answers": ""
        },
        {
          "id": 25976,
          "date": "Wed 22 Sep 2021 06:32",
          "username": "BeastX",
          "content": "C is not correct, swap CNAME is also changing the DNS, still have the TTL issue.",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 105772,
          "date": "Wed 20 Oct 2021 09:49",
          "username": "ppshein",
          "content": "`while creating minimal additional resources` so answer should not be C. ",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#34",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has 100 GB of log data in an Amazon S3 bucket stored in .csv format. SQL developers want to query this data and generate graphs to visualize it.<br>They also need an efficient, automated way to store metadata from the .csv file.<br>Which combination of steps should be taken to meet these requirements with the LEAST amount of effort? (Choose three.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BCE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#34",
          "answers": [
            {
              "choice": "<p>A. Filter the data through AWS X-Ray to visualize the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Filter the data through Amazon QuickSight to visualize the data.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Query the data with Amazon Athena.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Query the data with Amazon Redshift.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use AWS Glue as the persistent metadata store.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Use Amazon S3 as the persistent metadata store.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 34 discussion",
      "discusstion": [
        {
          "id": 317976,
          "date": "Sun 19 Sep 2021 21:46",
          "username": "Jordanroshammous",
          "content": "I will go with B,C,EGlue is an ETL. S3 would be the service to choose to store metadata:B, C , F",
          "upvote_count": "164",
          "selected_answers": ""
        },
        {
          "id": 450833,
          "date": "Wed 03 Nov 2021 15:30",
          "username": "shammous",
          "content": "Glue is an ETL. S3 would be the service to choose to store metadata:B, C , F",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 326921,
          "date": "Thu 30 Sep 2021 13:40",
          "username": "WhyIronMan",
          "content": "I'll go with B, C, F<br><br>That's not use case for Glue",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 760396,
          "date": "Wed 28 Dec 2022 23:35",
          "username": "Teonardo",
          "content": "Go with BCE",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 760369,
          "date": "Wed 28 Dec 2022 22:53",
          "username": "saeidp",
          "content": "I'll go with B, C and E",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 757843,
          "date": "Mon 26 Dec 2022 22:00",
          "username": "apcloud",
          "content": "Glue data catalogue is persistent meta data store per links in other comments",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 747977,
          "date": "Sat 17 Dec 2022 11:06",
          "username": "Arkarter",
          "content": "WS Glue uses the AWS Glue Data Catalog to store metadata about data sources, transforms, and targets.<br>REF : https://docs.aws.amazon.com/glue/latest/dg/components-overview.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 745659,
          "date": "Thu 15 Dec 2022 04:00",
          "username": "neta1o",
          "content": "\\\"The AWS Glue Data Catalog is a fully-managed persistent metadata store...\\\" Ref: https://docs.aws.amazon.com/whitepapers/latest/best-practices-building-data-lake-for-games/data-cataloging.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 736482,
          "date": "Tue 06 Dec 2022 03:34",
          "username": "DonWang",
          "content": "AWS Glue is good for metadata, but the requirement is LEAST effort",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 720238,
          "date": "Thu 17 Nov 2022 06:37",
          "username": "jlb",
          "content": "BCF<br>AWS Glue :https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-format-csv-home.html > Prerequisites: You will need the S3 paths (s3path) to the CSV files or folders that you want to read",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 715654,
          "date": "Fri 11 Nov 2022 01:55",
          "username": "developer_404",
          "content": "Keyword mapping from the question to answer:<br>B - Generate graphs to visualize data<br>C - Query the data<br>E - Efficient and automated way to store metadata",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 676452,
          "date": "Thu 22 Sep 2022 20:12",
          "username": "Chuky64",
          "content": "I think so.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 675473,
          "date": "Wed 21 Sep 2022 21:43",
          "username": "RightAnswers",
          "content": "The AWS Glue Data Catalog is your persistent technical metadata store in the AWS Cloud - The AWS Glue Data Catalog is your persistent technical metadata store in the AWS Cloud.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 661111,
          "date": "Tue 06 Sep 2022 12:51",
          "username": "SamHan",
          "content": "Ans: BCF",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 657763,
          "date": "Fri 02 Sep 2022 21:26",
          "username": "ohcn",
          "content": "BCE - https://docs.aws.amazon.com/glue/latest/dg/components-overview.html#data-catalog-intro",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 654762,
          "date": "Wed 31 Aug 2022 06:39",
          "username": "guchao2000",
          "content": "The AWS Glue Data Catalog is your persistent technical metadata store in the AWS Cloud.<br>https://docs.aws.amazon.com/glue/latest/dg/components-overview.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 590261,
          "date": "Sat 23 Apr 2022 00:07",
          "username": "[Removed][Removed]",
          "content": "BCF, F is used for persistent metadata storing: https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingMetadata.htmlI thinks it's BCE after all: https://aws.amazon.com/blogs/big-data/harmonize-query-and-visualize-data-from-various-providers-using-aws-glue-amazon-athena-and-amazon-quicksight/",
          "upvote_count": "22",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 591286,
          "date": "Mon 25 Apr 2022 01:15",
          "username": "[Removed]",
          "content": "I thinks it's BCE after all: https://aws.amazon.com/blogs/big-data/harmonize-query-and-visualize-data-from-various-providers-using-aws-glue-amazon-athena-and-amazon-quicksight/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 504498,
          "date": "Sat 18 Dec 2021 23:43",
          "username": "Balki",
          "content": "B,C,E as S3 is already available. If we think from metadata store perspective it is glue catalog https://docs.aws.amazon.com/glue/latest/dg/components-overview.html",
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
      "question_text": "<p>A DevOps Engineer has several legacy applications that all generate different log formats. The Engineer must standardize the formats before writing them to<br>Amazon S3 for querying and analysis.<br>How can this requirement be met at the LOWEST cost?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#35",
          "answers": [
            {
              "choice": "<p>A. Have the application send its logs to an Amazon EMR cluster and normalize the logs before sending them to Amazon S3<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Have the application send its logs to Amazon QuickSight, then use the Amazon QuickSight SPICE engine to normalize the logs. Do the analysis directly from Amazon QuickSight<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Keep the logs in Amazon S3 and use Amazon Redshift Spectrum to normalize the logs in place<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon Kinesis Agent on each server to upload the logs and have Amazon Kinesis Data Firehose use an AWS Lambda function to normalize the logs before writing them to Amazon S3<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 35 discussion",
      "discusstion": [
        {
          "id": 741887,
          "date": "Sun 11 Dec 2022 17:28",
          "username": "SatenderRathee",
          "content": "The most cost-effective option would be to use Amazon Kinesis Agent on each server to upload the logs and have Amazon Kinesis Data Firehose use an AWS Lambda function to normalize the logs before writing them to Amazon S3. This option allows the DevOps Engineer to use a serverless solution for log normalization, which will reduce costs compared to running an Amazon EMR cluster or using Amazon Redshift Spectrum. Additionally, using Amazon Kinesis Data Firehose and AWS Lambda allows for easy scalability as the volume of logs increases.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 255227,
          "date": "Fri 05 Nov 2021 12:50",
          "username": "cm3646",
          "content": "I understand why the answer is D but is this solution LOWEST cost?",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 252670,
          "date": "Sun 31 Oct 2021 04:15",
          "username": "gmandala",
          "content": "D it is",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 224198,
          "date": "Fri 29 Oct 2021 10:12",
          "username": "jackdryan",
          "content": "I'll go with D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 209379,
          "date": "Thu 28 Oct 2021 08:46",
          "username": "ChauPhan",
          "content": "Go with D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 135244,
          "date": "Fri 22 Oct 2021 06:39",
          "username": "cupcakepalomino",
          "content": "Additionalqs from devops exam:<br>Q- Need to backup sensitive s3 objects that are stored within an S3 bucket withprivate bucket policy using the S3 CROSS region replication. The objects need to be copied to a target bucket in a diff AWS region and account. What should be done for replication? (choose 3)<br>A.  Create a replication IAM role in the source accountB.  Create a replication IAM role in the target accountC.  Add statements to the source bucket policy allowing the replication IAM role to replicate objectsD.  Add statements to the target bucket policy allowing the replication IAM role to replicate objectsE.  Set accesscontroltranslation.owneroverride to true in the replication config and add a statement to the target bucket policy allowing the replication IAM role to override object ownershipF.  Set accesscontroltranslation.owneroverride to destination in the replication config and add a statement to the target bucket policy allowing the replication IAM role to override object ownershipIMHO - ADF<br>https://docs.aws.amazon.com/AmazonS3/latest/user-guide/enable-replication.html<br>https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-change-owner.html",
          "upvote_count": "24",
          "selected_answers": ""
        },
        {
          "id": 144445,
          "date": "Sat 23 Oct 2021 07:56",
          "username": "palomino",
          "content": "IMHO - ADF<br>https://docs.aws.amazon.com/AmazonS3/latest/user-guide/enable-replication.html<br>https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-change-owner.html",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 87339,
          "date": "Fri 01 Oct 2021 09:58",
          "username": "Socrates",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 85404,
          "date": "Fri 01 Oct 2021 02:58",
          "username": "leotoras",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 83662,
          "date": "Sat 25 Sep 2021 23:27",
          "username": "solotvun",
          "content": "Answer is D",
          "upvote_count": "2",
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
      "question_text": "<p>A company needs to implement a robust CI/CD pipeline to automate the deployment of an application in AWS. The pipeline must support continuous integration, continuous delivery, and automatic rollback upon deployment failure. The entire CI/CD pipeline must be capable of being re-provisioned in alternate AWS accounts or Regions within minutes. A DevOps engineer has already created an AWS CodeCommit repository to store the source code.<br>Which combination of actions should be taken when building this pipeline to meet these requirements? (Choose three.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ADF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#36",
          "answers": [
            {
              "choice": "<p>A. Configure an AWS CodePipeline pipeline with a build stage using AWS CodeBuild.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Copy the build artifact from CodeCommit to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Auto Scaling group of Amazon EC2 instances behind an Application Load Balancer (ALB) and set the ALB as the deployment target in AWS CodePipeline.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Elastic Beanstalk environment as the deployment target in AWS CodePipeline.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Implement an Amazon SQS queue to decouple the pipeline components.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Provision all resources using AWS CloudFormation.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 36 discussion",
      "discusstion": [
        {
          "id": 717616,
          "date": "Mon 14 Nov 2022 02:56",
          "username": "developer_404",
          "content": "A - for CI<br>D - ASG and ALB are not in scope, hence I go with simple deployment.<br>F - For provisioning into other AWS Account and region.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 689277,
          "date": "Sat 08 Oct 2022 14:10",
          "username": "animalrj",
          "content": "ADF, CodeCommit dont have artefacts, CloudFormation is mandatory, ELB(ASG) are not a requirement, Codebuild to bild the project.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 673281,
          "date": "Mon 19 Sep 2022 14:41",
          "username": "youonebe",
          "content": "ADF. <br><br>A - YES. CodeBuild is needed for building the source code<br>B - Artifact is built under CodeBuild's container environment, not codecommit<br>C - LB ?<br>D - YES. EB can be used for rollback<br>E - Codepipeline itself can handle different stages<br>F - YES. CF is needed from re-provision the same stuff",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 669584,
          "date": "Thu 15 Sep 2022 09:14",
          "username": "MichaelExam",
          "content": "A - For \\\"Integration\\\"<br>D - For \\\"automatic rollback upon deployment failure\\\".<br>F - For \\\"The entire CI/CD pipeline must be capable of being re-provisioned in alternate AWS accounts or Regions within minutes\\\"",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 655714,
          "date": "Thu 01 Sep 2022 05:00",
          "username": "colinquekohcnalexderg",
          "content": "ABF - AB self explanatory.<br><br>F - https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-stackset-deployment.html<br><br>u need a way to re-provision the pipelines in another region. CloudFormation is an option.It might be ABF.  F because question is not asking about application deployment, but how quickly you can re-provision the pipeline in another region. Cloudformation is an option to re-provision it quickly.ADF - to address \\\"continuous delivery, and automatic rollback upon deployment failure\\\"",
          "upvote_count": "313",
          "selected_answers": ""
        },
        {
          "id": 657769,
          "date": "Fri 02 Sep 2022 21:48",
          "username": "ohcn",
          "content": "It might be ABF.  F because question is not asking about application deployment, but how quickly you can re-provision the pipeline in another region. Cloudformation is an option to re-provision it quickly.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 657402,
          "date": "Fri 02 Sep 2022 14:18",
          "username": "alexderg",
          "content": "ADF - to address \\\"continuous delivery, and automatic rollback upon deployment failure\\\"",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#37",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a solution for storing files containing Personally Identifiable Information (PII) on AWS.<br>Requirements state:<br>-All data must be encrypted at rest and in transit.<br>-All data must be replicated in at least two locations that are at least 500 miles (805 kilometers) apart.<br>Which solution meets these requirements?<br></p>",
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
              "choice": "<p>A. Create primary and secondary Amazon S3 buckets in two separate Availability Zones that are at least 500 miles (805 kilometers) apart. Use a bucket policy to enforce access to the buckets only through HTTPS. Use a bucket policy to enforce Amazon S3 SSE-C on all objects uploaded to the bucket. Configure cross- region replication between the two buckets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create primary and secondary Amazon S3 buckets in two separate AWS Regions that are at least 500 miles (805 kilometers) apart. Use a bucket policy to enforce access to the buckets only through HTTPS. Use a bucket policy to enforce S3-Managed Keys (SSE-S3) on all objects uploaded to the bucket. Configure cross-region replication between the two buckets.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create primary and secondary Amazon S3 buckets in two separate AWS Regions that are at least 500 miles (805 kilometers) apart. Use an IAM role to enforce access to the buckets only through HTTPS. Use a bucket policy to enforce Amazon S3-Managed Keys (SSE-S3) on all objects uploaded to the bucket. Configure cross-region replication between the two buckets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create primary and secondary Amazon S3 buckets in two separate Availability Zones that are at least 500 miles (805 kilometers) apart. Use a bucket policy to enforce access to the buckets only through HTTPS. Use a bucket policy to enforce AWS KMS encryption on all objects uploaded to the bucket. Configure cross-region replication between the two buckets. Create a KMS Customer Master Key (CMK) in the primary region for encrypting objects.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 37 discussion",
      "discusstion": [
        {
          "id": 760384,
          "date": "Wed 28 Dec 2022 23:18",
          "username": "saeidp",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 736481,
          "date": "Tue 06 Dec 2022 03:29",
          "username": "DonWang",
          "content": "I choose B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 689279,
          "date": "Sat 08 Oct 2022 14:13",
          "username": "animalrj",
          "content": "As its in another region and has encryption and replication.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 674663,
          "date": "Wed 21 Sep 2022 03:23",
          "username": "Goozian",
          "content": "B<br><br>https://www.examtopics.com/discussions/amazon/view/2753-exam-aws-devops-engineer-professional-topic-1-question-69/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 674661,
          "date": "Wed 21 Sep 2022 03:22",
          "username": "Goozian",
          "content": "Cross \\\"Region\\\" replication -",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 673746,
          "date": "Tue 20 Sep 2022 04:41",
          "username": "lmimi",
          "content": "B for sure",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#38",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using an AWS CodeBuild project to build and package an application. The packages are copied to a shared Amazon S3 bucket before being deployed across multiple AWS accounts.<br>The buildspec.yml file contains the following:<br><img src=\"https://www.examtopics.com/assets/media/exam-media/04243/0002400001.png\" class=\"in-exam-image\"><br>The DevOps Engineer has noticed that anybody with an AWS account is able to download the artifacts.<br>What steps should the DevOps Engineer take to stop this?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#38",
          "answers": [
            {
              "choice": "<p>A. Modify the post_build to command to use \"\"-acl public-read and configure a bucket policy that grants read access to the relevant AWS accounts only.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure a default ACL for the S3 bucket that defines the set of authenticated users as the relevant AWS accounts only and grants read-only access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an S3 bucket policy that grants read access to the relevant AWS accounts and denies read access to the principal \"*\"<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the post_build command to remove \"\"-acl authenticated-read and configure a bucket policy that allows read access to the relevant AWS accounts only.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 38 discussion",
      "discusstion": [
        {
          "id": 26243,
          "date": "Fri 24 Sep 2021 14:00",
          "username": "Timlipleasespammelater",
          "content": "D is my choose<br>https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html\\\"S3 ACLs is a legacy access control mechanism that predates IAM\\\". That is, don't use them!<br>https://aws.amazon.com/blogs/security/iam-policies-and-bucket-policies-and-acls-oh-my-controlling-access-to-s3-resources/",
          "upvote_count": "182",
          "selected_answers": ""
        },
        {
          "id": 79573,
          "date": "Thu 07 Oct 2021 01:47",
          "username": "pleasespammelater",
          "content": "\\\"S3 ACLs is a legacy access control mechanism that predates IAM\\\". That is, don't use them!<br>https://aws.amazon.com/blogs/security/iam-policies-and-bucket-policies-and-acls-oh-my-controlling-access-to-s3-resources/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 51849,
          "date": "Thu 30 Sep 2021 23:58",
          "username": "michelleY",
          "content": "i will go with D.  C is not correct, if you have deny *, allow AuthenticatedUsers still doesn't allow the access. authenticated-read vs public-read, one is for Owner gets FULL_CONTROL. The AuthenticatedUsers group gets READ access., the other one is Owner gets FULL_CONTROL. The AllUsers group (see Who Is a Grantee?) gets READ access.",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 736919,
          "date": "Tue 06 Dec 2022 15:55",
          "username": "Milind",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 736480,
          "date": "Tue 06 Dec 2022 03:26",
          "username": "DonWang",
          "content": "I choose D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 731766,
          "date": "Wed 30 Nov 2022 17:54",
          "username": "huonguyenlt",
          "content": "D is my choose<br>https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 543361,
          "date": "Tue 08 Feb 2022 22:54",
          "username": "blueorca",
          "content": "I choose D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 322337,
          "date": "Wed 03 Nov 2021 00:29",
          "username": "aws_Tamilan",
          "content": "Correct Answer: D<br>You can define bucket policy using NotPrincipal to grant permission to specified accounts or users while it explicitly denies access from other users.<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notprincipal.ht ml",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 317823,
          "date": "Sun 31 Oct 2021 02:56",
          "username": "benLLP",
          "content": "C is my choose<br>https://aws.amazon.com/blogs/security/how-to-restrict-amazon-s3-bucket-access-to-a-specific-iam-role/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 289904,
          "date": "Sat 30 Oct 2021 14:14",
          "username": "kyo",
          "content": "I think the answer is A. <br>https://docs.aws.amazon.com/cli/latest/userguide/cli-services-s3-commands.html<br>When running s3 sync in the post_build section, granting public-read makes it available for download to anyone who knows the URL.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 279949,
          "date": "Sat 30 Oct 2021 09:10",
          "username": "bnagaraja9099",
          "content": "I go with A.  Most restrictive access.<br>public_read definition: Owner gets FULL_CONTROL. The AllUsers group (see Who Is a Grantee?) gets READ access.<br>https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl<br><br>A grantee can be an AWS account or one of the predefined Amazon S3 groups. You grant permission to an AWS account using the email address or the canonical user ID. <br>https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#specifying-grantee",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 240611,
          "date": "Fri 29 Oct 2021 04:43",
          "username": "iptorrent786",
          "content": "Answer is C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 233372,
          "date": "Thu 28 Oct 2021 17:21",
          "username": "svjl",
          "content": "D is totally wrong: acl authenticated-read (Owner gets FULL_CONTROL. The AuthenticatedUsers group gets READ access.) if you remove acl authenticated-read you have to make the bucket public otherwise the accounts will not be able to read. So you will not deny the principal- C is wrong. B is wrong.A is correct because you can give public access and use Grantee access to restrict the accounts, users, groups allowed to read. Its is not the best practice, but none of the other options are supported on this context.<br>https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html<br>https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#specifying-grantee",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 224115,
          "date": "Tue 26 Oct 2021 18:36",
          "username": "jackdryan",
          "content": "I'll go with D",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 221248,
          "date": "Tue 26 Oct 2021 17:05",
          "username": "xlFireman",
          "content": "Answer is D.  Deny* will take precedence over any allows. Do you guys even permission bros?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 208706,
          "date": "Mon 25 Oct 2021 23:30",
          "username": "ChauPhanChauPhan",
          "content": "I'll go with CChange to D, the Deny will overcome the Allow, so C is incorrect",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 208707,
          "date": "Tue 26 Oct 2021 06:09",
          "username": "ChauPhan",
          "content": "Change to D, the Deny will overcome the Allow, so C is incorrect",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 139863,
          "date": "Sun 24 Oct 2021 21:17",
          "username": "orlando1409",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 122000,
          "date": "Sun 24 Oct 2021 20:23",
          "username": "tolik505",
          "content": "D is correct. We don't need any acl params. By default an owner of the bucket has full access. Explicit allow for relevant accounts work in this case perfectly since there is no explicit deny.",
          "upvote_count": "4",
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
      "question_text": "<p>A DevOps engineer needs to grant several external contractors access to a legacy application that runs on an Amazon Linux Amazon EC2 instance. The application server is available only in a private subnet. The contractors are not authorized for VPN access.<br>What should the DevOps engineer do to grant the contactors access to the application server?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#39",
          "answers": [
            {
              "choice": "<p>A. Create an IAM user and SSH keys for each contractor. Add the public SSH key to the application server's SSH authorized_keys file. Instruct the contractors to install the AWS CLI and AWS Systems Manager Session Manager plugin, update their AWS credentials files with their private keys, and use the aws ssm start-session command to gain access to the target application server instance ID. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Ask each contractor to securely send their SSH public key. Add this public key to the application server's SSH authorized-keys file. Instruct the contractors to use their private key to connect to the application server through SSH.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Ask each contractor to securely send their SSH public key. Use EC2 pairs to import their key. Update the application server's SSH authorized_keys file. Instruct the contractors to use their private key to connect to the application server through SSH.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM user for each contractor with programmatic access. Add each user to an IAM group that has a policy that allows the ssm:StartSession action. Instruct the contractors to install the AWS CLI and AWS Systems Manager Session Manager plugin, update their AWS credentials files with their access keys, and use the aws ssm start-session to gain access to the target application server instance ID. <br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 39 discussion",
      "discusstion": [
        {
          "id": 760394,
          "date": "Wed 28 Dec 2022 23:34",
          "username": "saeidp",
          "content": "D for sure",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 744691,
          "date": "Wed 14 Dec 2022 04:46",
          "username": "saggy4",
          "content": "All other answers involve a lot of hassles involving addition and removal of public and private keys. In option D you just need to create/delete and add/remove users from group for all future access",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 736477,
          "date": "Tue 06 Dec 2022 03:22",
          "username": "DonWang",
          "content": "D for me",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 735048,
          "date": "Sun 04 Dec 2022 12:52",
          "username": "Maygam",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/systems-manager-ssh-vpc-resources/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 717748,
          "date": "Mon 14 Nov 2022 07:51",
          "username": "developer_404",
          "content": "Use AWS System Manager for easy login",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 680542,
          "date": "Tue 27 Sep 2022 10:46",
          "username": "celetas",
          "content": "I would say D if contractors belong to the same company, on the other hand B",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 661131,
          "date": "Tue 06 Sep 2022 13:07",
          "username": "SamHan",
          "content": "Ans: D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 656226,
          "date": "Thu 01 Sep 2022 14:21",
          "username": "Brain4",
          "content": "D is the correct answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 655638,
          "date": "Thu 01 Sep 2022 02:52",
          "username": "colinquek",
          "content": "D pls use AWS SSM when possible",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 655475,
          "date": "Wed 31 Aug 2022 22:38",
          "username": "ohcnohcnohcnNickhiahiahia",
          "content": "B seems correct.<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/ec2-ssh-best-practices/<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.htmlMy bad. D seems correct.Session Manager allows AWS Identity and Access Management (IAM) users to log in to your instances with encryption and logging capabilities. Systems Manager's traffic goes through the Systems Manager Endpoint, allowing easy and secure access to private instances without opening inbound ports.if set up only one user, how to trace the user behavior since the are more than one contractor?",
          "upvote_count": "1131",
          "selected_answers": ""
        },
        {
          "id": 657779,
          "date": "Fri 02 Sep 2022 21:56",
          "username": "ohcnohcnNickhiahiahia",
          "content": "My bad. D seems correct.Session Manager allows AWS Identity and Access Management (IAM) users to log in to your instances with encryption and logging capabilities. Systems Manager's traffic goes through the Systems Manager Endpoint, allowing easy and secure access to private instances without opening inbound ports.if set up only one user, how to trace the user behavior since the are more than one contractor?",
          "upvote_count": "131",
          "selected_answers": ""
        },
        {
          "id": 657781,
          "date": "Fri 02 Sep 2022 21:57",
          "username": "ohcnNickhiahiahia",
          "content": "Session Manager allows AWS Identity and Access Management (IAM) users to log in to your instances with encryption and logging capabilities. Systems Manager's traffic goes through the Systems Manager Endpoint, allowing easy and secure access to private instances without opening inbound ports.if set up only one user, how to trace the user behavior since the are more than one contractor?",
          "upvote_count": "31",
          "selected_answers": ""
        },
        {
          "id": 744859,
          "date": "Wed 14 Dec 2022 09:13",
          "username": "Nickhiahiahia",
          "content": "if set up only one user, how to trace the user behavior since the are more than one contractor?",
          "upvote_count": "1",
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
      "question_text": "<p>A company hosts its staging website using an Amazon EC2 instance backed with Amazon EBS storage. The company wants to recover quickly with minimal data losses in the event of network connectivity issues or power failures on the EC2 instance.<br>Which solution will meet these requirements?<br></p>",
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
              "choice": "<p>A. Add the instance to an EC2 Auto Scaling group with the minimum, maximum, and desired capacity set to 1.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add the instance to an EC2 Auto Scaling group with a lifecycle hook to detach the EBS volume when the EC2 instance shuts down or terminates.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon CloudWatch alarm for the StatusCheckFailed_System metric and select the EC2 action to recover the instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon CloudWatch alarm for the StatusCheckFailed_Instance metric and select the EC2 action to reboot the instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 40 discussion",
      "discusstion": [
        {
          "id": 387533,
          "date": "Wed 03 Nov 2021 10:08",
          "username": "D2",
          "content": "Answer C",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 727247,
          "date": "Sat 26 Nov 2022 05:01",
          "username": "Jtic",
          "content": "C<br>StatusCheckFailed_System",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 668091,
          "date": "Tue 13 Sep 2022 15:45",
          "username": "quixo",
          "content": "The recover action can be used only with StatusCheckFailed_System, not with StatusCheckFailed_Instance.<br>-> I will go with C",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 584676,
          "date": "Tue 12 Apr 2022 13:53",
          "username": "jj22222",
          "content": "C - cw alarm for the statuscheckfailed_system metric + ec2 action to recover the instance",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 536758,
          "date": "Mon 31 Jan 2022 09:43",
          "username": "SonamDhingra",
          "content": "Answer C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 444026,
          "date": "Sat 06 Nov 2021 01:17",
          "username": "jp99999robbyyy",
          "content": "A is best and easiest answerNo, the question mentions that \\\"EC2 instance that is backed up by Amazon EBS storage\\\", if you use ASG, you need to configure based AMI, which means data loss more, I will choose C. ",
          "upvote_count": "35",
          "selected_answers": ""
        },
        {
          "id": 521892,
          "date": "Wed 12 Jan 2022 04:31",
          "username": "robbyyy",
          "content": "No, the question mentions that \\\"EC2 instance that is backed up by Amazon EBS storage\\\", if you use ASG, you need to configure based AMI, which means data loss more, I will choose C. ",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 376053,
          "date": "Thu 28 Oct 2021 17:03",
          "username": "RLai",
          "content": "Answer is C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 326095,
          "date": "Thu 14 Oct 2021 21:06",
          "username": "luk3tt0",
          "content": "I published on Android and iOS platform my free app related to AWS Solution Architect Associate C02. If you are interested to prepare the exam, please download it and give me a fedback. https://bit.ly/2PjCCkZ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 325803,
          "date": "Tue 12 Oct 2021 16:26",
          "username": "WhyIronMan",
          "content": "I'll go with C",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 312905,
          "date": "Mon 11 Oct 2021 23:00",
          "username": "faltu1985",
          "content": "Ans: C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 312314,
          "date": "Thu 23 Sep 2021 06:00",
          "username": "Jordanro",
          "content": "C. <br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/UsingAlarmActions.html#AddingRecoverActions",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 310273,
          "date": "Wed 22 Sep 2021 18:14",
          "username": "Rajarshi",
          "content": "ans: C",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#41",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has built a web service that runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The company has deployed the application in us-east-1. Amazon Route 53 provides an external DNS that routes traffic from example.com to the application, created with appropriate health checks.<br>The company has deployed a second environment for the application in eu-west-1. The company wants traffic to be routed to whichever environment results in the best response time for each user. If there is an outage in one Region, traffic should be directed to the other environment.<br>Which configuration will achieve these requirements?A. <br>-A subdomain us.example.com with weighted routing: the US ALB with weight 2 and the EU ALB with weight 1.<br>-Another subdomain eu.example.com with weighted routing: the EU ALB with weight 2 and the US ALB with weight 1.<br>-Geolocation routing records for example.com: North America aliased to us.example.com and Europe aliased to eu.example.com.B. <br>-A subdomain us.example.com with latency-based routing: the US ALB as the first target and the EU ALB as the second target.<br>-Another subdomain eu.example.com with latency-based routing: the EU ALB as the first target and the US ALB as the second target.<br>-Failover routing records for example.com aliased to us.example.com as the first target and eu.example.com as the second target.C. <br>-A subdomain us.example.com with failover routing: the US ALB as primary and the EU ALB as secondary.<br>-Another subdomain eu.example.com with failover routing: the EU ALB as primary and the US ALB as secondary.<br>-Latency-based routing records for example.com that are aliased to us.example.com and eu.example.com.D. <br>-A subdomain us.example.com with multivalue answer routing: the US ALB first and the EU ALB second.<br>-Another subdomain eu.example.com with multivalue answer routing: the EU ALB first and the US ALB second.<br>-Failover routing records for example.com that are aliased to us.example.com and eu.example.com.<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#41",
          "answers": []
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 41 discussion",
      "discusstion": [
        {
          "id": 330140,
          "date": "Fri 29 Oct 2021 15:37",
          "username": "devopp",
          "content": "C is correct (reveal answer didnt show anything here)",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 761509,
          "date": "Thu 29 Dec 2022 22:39",
          "username": "saeidp",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 671819,
          "date": "Sat 17 Sep 2022 23:37",
          "username": "colinquek",
          "content": "C<br>initially was thinking B, but i think it is more common to put failover at DNS level. https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-configuring.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 617411,
          "date": "Thu 16 Jun 2022 23:41",
          "username": "SHAAHIBHUSHANAWS",
          "content": "Any idea why not b?",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 617407,
          "date": "Thu 16 Jun 2022 23:27",
          "username": "SHAAHIBHUSHANAWS",
          "content": "C<br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-configuring.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 546471,
          "date": "Sun 13 Feb 2022 14:37",
          "username": "blueorca",
          "content": "C is right, altho you can just use geoproximity, it has shift over capacity too.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 325797,
          "date": "Wed 27 Oct 2021 05:21",
          "username": "WhyIronMan",
          "content": "I'll go with C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 312904,
          "date": "Fri 15 Oct 2021 06:38",
          "username": "faltu1985",
          "content": "Ans: C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 312262,
          "date": "Fri 08 Oct 2021 05:44",
          "username": "Jordanro",
          "content": "I wll go with C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 310268,
          "date": "Wed 29 Sep 2021 13:10",
          "username": "RajarshiWhyIronMan",
          "content": "ans: AA is wrong, cause you need to create the failover for each region domain first... and after you can create a latency based",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 325796,
          "date": "Sat 23 Oct 2021 00:13",
          "username": "WhyIronMan",
          "content": "A is wrong, cause you need to create the failover for each region domain first... and after you can create a latency based",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 309966,
          "date": "Wed 22 Sep 2021 23:10",
          "username": "rscloud",
          "content": "C is coorect",
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
      "question_text": "<p>A company has multiple development teams sharing one AWS account. The development team's manager wants to be able to automatically stop Amazon EC2 instances and receive notifications if resources are idle and not tagged as production resources.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#42",
          "answers": [
            {
              "choice": "<p>A. Use a scheduled Amazon CloudWatch Events rule to filter for Amazon EC2 instance status checks and identify idle EC2 instances. Use the CloudWatch Events rule to target an AWS Lambda function to stop non-production instances and send notifications.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use a scheduled Amazon CloudWatch Events rule to filter AWS Systems Manager events and identify idle EC2 instances and resources. Use the CloudWatch Events rule to target an AWS Lambda function to stop non-production instances and send notifications.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use a scheduled Amazon CloudWatch Events rule to target a custom AWS Lambda function that runs AWS Trusted Advisor checks. Create a second CloudWatch Events rule to filter events from Trusted Advisor to trigger a Lambda function to stop idle non-production instances and send notifications.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use a scheduled Amazon CloudWatch Events rule to target Amazon Inspector events for idle EC2 instances. Use the CloudWatch Events rule to target the AWS Lambda function to stop non-production instances and send notifications.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 42 discussion",
      "discusstion": [
        {
          "id": 326044,
          "date": "Sun 24 Oct 2021 14:27",
          "username": "WhyIronManJohnnieWalker",
          "content": "I'll go with C<br><br>References:<br>https://docs.aws.am<br>azon.com/awssupport/latest/user/cloudwatch-ta.html<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/EventTypes.html#trusted-advisor-event-types<br>https://aws.amazon.com/premiumsupport/technology/trusted-advisor/I will go with C too.<br>https://gist.github.com/sudharsans/af23ee7e8919947af83ceb269a40d8db<br>https://docs.aws.amazon.com/awssupport/latest/user/cloudwatch-events-ta.html",
          "upvote_count": "212",
          "selected_answers": ""
        },
        {
          "id": 350876,
          "date": "Wed 27 Oct 2021 09:34",
          "username": "JohnnieWalker",
          "content": "I will go with C too.<br>https://gist.github.com/sudharsans/af23ee7e8919947af83ceb269a40d8db<br>https://docs.aws.amazon.com/awssupport/latest/user/cloudwatch-events-ta.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 761512,
          "date": "Thu 29 Dec 2022 22:50",
          "username": "saeidp",
          "content": "C for sure",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 744694,
          "date": "Wed 14 Dec 2022 04:58",
          "username": "saggy4",
          "content": "A - No such cloudwatch event which identifies idle EC2 instances<br>B - No such AWS System Manager Event that lets you know the idle resources<br>C - Correct Answer. Trusted Advisor Checks lets you know idle EC2 instances<br>D - Amazon Inspector is for managing vulnerabilities",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 311934,
          "date": "Sat 23 Oct 2021 21:04",
          "username": "rscloudWhyIronMan",
          "content": "A - CW event for ec2 state and lambda to stop ec2This makes A wrong:<br>CloudWatch Events rule to filter for Amazon EC2 >>>INSTANCE STATUS CHECKS AND IDENTIFY IDLE<<<EC2 instances<br>????<br><br>There are two types of status checks: system status checks and instance status checks, AND NONE of them has the \\\"Idle\\\" status<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-system-instance-status-check.html#types-of-instance-status-checks",
          "upvote_count": "14",
          "selected_answers": ""
        },
        {
          "id": 326039,
          "date": "Sun 24 Oct 2021 06:08",
          "username": "WhyIronMan",
          "content": "This makes A wrong:<br>CloudWatch Events rule to filter for Amazon EC2 >>>INSTANCE STATUS CHECKS AND IDENTIFY IDLE<<<EC2 instances<br>????<br><br>There are two types of status checks: system status checks and instance status checks, AND NONE of them has the \\\"Idle\\\" status<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-system-instance-status-check.html#types-of-instance-status-checks",
          "upvote_count": "4",
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
      "question_text": "<p>An n-tier application requires a table in an Amazon RDS MySQL DB instance to be dropped and repopulated at each deployment. This process can take several minutes and the web tier cannot come online until the process is complete. Currently, the web tier is configured in an Amazon EC2 Auto Scaling group, with instances being terminated and replaced at each deployment. The MySQL table is populated by running a SQL query through an AWS CodeBuild job.<br>What should be done to ensure that the web tier does not come online before the database is completely configured?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#43",
          "answers": [
            {
              "choice": "<p>A. Use Amazon Aurora as a drop-in replacement for RDS MySQL. Use snapshots to populate the table with the correct data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Modify the launch configuration of the Auto Scaling group to pause user data execution for 600 seconds, allowing the table to be populated.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Step Functions to monitor and maintain the state of data population. Mark the database in service before continuing with the deployment.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an EC2 Auto Scaling lifecycle hook to pause the configuration of the web tier until the table is populated.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 43 discussion",
      "discusstion": [
        {
          "id": 163382,
          "date": "Thu 30 Sep 2021 22:24",
          "username": "halfway",
          "content": "D. <br>Lifecycle hook can trigger lambda to check DB status: https://docs.aws.amazon.com/autoscaling/ec2/userguide/configuring-lifecycle-hook-notifications.html",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 727271,
          "date": "Sat 26 Nov 2022 06:08",
          "username": "Jtic",
          "content": "https://docs.aws.amazon.com/autoscaling/ec2/userguide/configuring-lifecycle-hook-notifications.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 447320,
          "date": "Mon 01 Nov 2021 17:53",
          "username": "certking",
          "content": "repopulating table needs to happen at each deployment, not at each ASG scale-in/out event. with option D, when the ASG scales out, it pauses and triggers the DB table repopulating. is that what we want?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 253071,
          "date": "Thu 14 Oct 2021 10:59",
          "username": "gmandala",
          "content": "Only D can be the answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 224218,
          "date": "Fri 08 Oct 2021 02:14",
          "username": "jackdryan",
          "content": "I'll go with D",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 219284,
          "date": "Thu 07 Oct 2021 18:51",
          "username": "xlFireman",
          "content": "D is the answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 209492,
          "date": "Wed 06 Oct 2021 08:19",
          "username": "ChauPhan",
          "content": "Go with D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 158267,
          "date": "Sat 25 Sep 2021 07:20",
          "username": "SmartAKD",
          "content": "Assuming we want to 'guarantee' that database is ready before web tier requires some verification likely through Lambda.<br><br>A & B is out. D is applicable but it doesn't quite guarantee. Also, lifecycle hook is not triggering any Lambda for verification.<br><br>C is correct. Assuming we are using CodePipeline, after CodeBuild, we invoke Stepfunctions that will periodically check table population through lambda.C does not ensure the portal isn't coming online. ASG Life cycle hooks are the only way to make it pause, monitor the state of DB and allow it to proceed later. All of this is made through Lambda.<br>So D is the right answer.",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 160150,
          "date": "Thu 30 Sep 2021 16:32",
          "username": "AKD",
          "content": "C does not ensure the portal isn't coming online. ASG Life cycle hooks are the only way to make it pause, monitor the state of DB and allow it to proceed later. All of this is made through Lambda.<br>So D is the right answer.",
          "upvote_count": "3",
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
      "question_text": "<p>A highly regulated company has a policy that DevOps Engineers should not log in to their Amazon EC2 instances except in emergencies. If a DevOps Engineer does log in, the Security team must be notified within 15 minutes of the occurrence.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#44",
          "answers": [
            {
              "choice": "<p>A. Install the Amazon Inspector agent on each EC2 instance. Subscribe to Amazon CloudWatch Events notifications. Trigger an AWS Lambda function to check if a message is about user logins. If it is, send a notification to the Security team using Amazon SNS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Install the Amazon CloudWatch agent on each EC2 instance. Configure the agent to push all logs to Amazon CloudWatch Logs and set up a CloudWatch metric filter that searches for user logins. If a login is found, send a notification to the Security team using Amazon SNS.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up AWS CloudTrail with Amazon CloudWatch Logs. Subscribe CloudWatch Logs to Amazon Kinesis. Attach AWS Lambda to Kinesis to parse and determine if a log contains a user login. If it does, send a notification to the Security team using Amazon SNS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up a script on each Amazon EC2 instance to push all logs to Amazon S3. Set up an S3 event to trigger an AWS Lambda function, which triggers an Amazon Athena query to run. The Athena query checks for logins and sends the output to the Security team using Amazon SNS.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 44 discussion",
      "discusstion": [
        {
          "id": 155372,
          "date": "Sat 09 Oct 2021 11:33",
          "username": "jxp09saeidpMikeyJsvjlGreatFunanaGreatFunanabnagaraja9099",
          "content": "https://aws.amazon.com/blogs/security/how-to-monitor-and-visualize-failed-ssh-access-attempts-to-amazon-ec2-linux-instances/<br><br>BThanks for the linkA CloudWatch Logs agent runs on each EC2 instance. The agents are configured to send SSH logs from the EC2 instance to a log stream identified by an instance ID. <br>Log streams are aggregated into a log group. As a result, one log group contains all the logs you want to analyze from one or more instances.<br>You apply metric filters to a log group in order to search for specific keywords. When the metric filter finds specific keywords, the filter counts the occurrences of the keywords in a time-based sliding window. If the occurrence of a keyword exceeds the CloudWatch alarm threshold, an alarm is triggered.This is not about failed access.Bruh. Stop being that person who just read the URL string and not bothered to read or at least skim the article. The technique listed in here could easily be adapted for login attempts.Excuse me, the technique listed in here could easily be adapted for successful logins*Thanks ofr the link",
          "upvote_count": "13121321",
          "selected_answers": ""
        },
        {
          "id": 761535,
          "date": "Thu 29 Dec 2022 23:28",
          "username": "saeidp",
          "content": "Thanks for the link",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 666619,
          "date": "Mon 12 Sep 2022 07:51",
          "username": "MikeyJ",
          "content": "A CloudWatch Logs agent runs on each EC2 instance. The agents are configured to send SSH logs from the EC2 instance to a log stream identified by an instance ID. <br>Log streams are aggregated into a log group. As a result, one log group contains all the logs you want to analyze from one or more instances.<br>You apply metric filters to a log group in order to search for specific keywords. When the metric filter finds specific keywords, the filter counts the occurrences of the keywords in a time-based sliding window. If the occurrence of a keyword exceeds the CloudWatch alarm threshold, an alarm is triggered.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 233477,
          "date": "Tue 19 Oct 2021 14:44",
          "username": "svjlGreatFunanaGreatFunana",
          "content": "This is not about failed access.Bruh. Stop being that person who just read the URL string and not bothered to read or at least skim the article. The technique listed in here could easily be adapted for login attempts.Excuse me, the technique listed in here could easily be adapted for successful logins*",
          "upvote_count": "132",
          "selected_answers": ""
        },
        {
          "id": 509763,
          "date": "Sun 26 Dec 2021 20:15",
          "username": "GreatFunanaGreatFunana",
          "content": "Bruh. Stop being that person who just read the URL string and not bothered to read or at least skim the article. The technique listed in here could easily be adapted for login attempts.Excuse me, the technique listed in here could easily be adapted for successful logins*",
          "upvote_count": "32",
          "selected_answers": ""
        },
        {
          "id": 509765,
          "date": "Sun 26 Dec 2021 20:15",
          "username": "GreatFunana",
          "content": "Excuse me, the technique listed in here could easily be adapted for successful logins*",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 280115,
          "date": "Sat 23 Oct 2021 23:21",
          "username": "bnagaraja9099",
          "content": "Thanks ofr the link",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 761534,
          "date": "Thu 29 Dec 2022 23:27",
          "username": "saeidp",
          "content": "B is correct<br>A CloudWatch Logs agent runs on each EC2 instance. The agents are configured to send SSH logs from the EC2 instance to a log stream identified by an instance ID. <br>https://aws.amazon.com/blogs/security/how-to-monitor-and-visualize-failed-ssh-access-attempts-to-amazon-ec2-linux-instances/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 749643,
          "date": "Mon 19 Dec 2022 09:51",
          "username": "whlq",
          "content": "B<br>C is incorrect because CloudTrail logs can take up to 15 minutes to record an event.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 744719,
          "date": "Wed 14 Dec 2022 05:44",
          "username": "saggy4",
          "content": "A - Inspector is for managing vulnerabilities<br>B - Correct Answer, Cloudwatch agent can scan through the EC2 instances for SSH login logs<br>C - Logging into an AWS EC2 instances is not traced by CloudTrail (Only if we use SSM but nothing is mentioned about it in the question).<br>D - Too much work involved to do things",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 741907,
          "date": "Sun 11 Dec 2022 17:51",
          "username": "SatenderRathee",
          "content": "The correct solution is C.  Setting up AWS CloudTrail with Amazon CloudWatch Logs, subscribing CloudWatch Logs to Amazon Kinesis, and attaching an AWS Lambda function to Kinesis to parse the logs and determine if they contain user logins will meet the requirements of the question. This solution will allow the Security team to be notified within 15 minutes of any user logins on the EC2 instances.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 717372,
          "date": "Sun 13 Nov 2022 15:45",
          "username": "flavins",
          "content": "B is correct because is simple and fast. C is an over kill and complicated",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 712390,
          "date": "Sun 06 Nov 2022 16:02",
          "username": "nebojsaMa",
          "content": "C as the explenation says : https://docs.aws.amazon.com/IAM/latest/UserGuide/security-logging-and-monitoring.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 661176,
          "date": "Tue 06 Sep 2022 13:42",
          "username": "SamHanMichaelExam",
          "content": "Ans: C<br>Login requests will be logged only in cloudtrail not cloudwatchC should be wrong. Since the log of login to EC2 instance belong OS level. Cloudtrail don't log OS level event.",
          "upvote_count": "22",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 664595,
          "date": "Fri 09 Sep 2022 15:09",
          "username": "MichaelExam",
          "content": "C should be wrong. Since the log of login to EC2 instance belong OS level. Cloudtrail don't log OS level event.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 546334,
          "date": "Sun 13 Feb 2022 09:50",
          "username": "blueorca",
          "content": "B is correct, as the question states within 15 minutes. If it says immediately then it would be C.  There might be multiple options that can do it, we always need to pick the best one, which includes lowest possible cost as well.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 447316,
          "date": "Sat 06 Nov 2021 17:01",
          "username": "certking",
          "content": "B would be a perfect answer if it mentioned creating a CloudWatch Alarm: having a CloudWatch metric filter along doesn't trigger anything.<br><br>I think C is technically possible but involves too much overhead such as building your Lambda function and paying for Kinesis. It's preventing the wheels",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 261933,
          "date": "Fri 22 Oct 2021 15:33",
          "username": "GVGREAT",
          "content": "Answer is B<br>https://medium.com/@matthewleearthur/alerting-on-successful-ec2-ssh-logins-6b97ccfb33eb",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 252706,
          "date": "Thu 21 Oct 2021 22:02",
          "username": "gmandala",
          "content": "Why not C? We are only interested in ssh log in. https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitor-with-cloudtrail.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 233484,
          "date": "Thu 21 Oct 2021 17:36",
          "username": "svjlMBJamesGreatFunana",
          "content": "A is correct:<br>Amazon Inspector automatically publishes metrics data on your assessments to Amazon CloudWatch. If you are a CloudWatch user, your Inspector assessment statistics will automatically be populated to CloudWatch. The Inspector metrics that are currently available are: number of assessment runs, agents targeted, and findings generated. For more details, see the Amazon Inspector documentation for details on the assessment metrics published to CloudWatch, then you have the messages.<br><br>B is totally wrong, you will create an alert if you filter the logs from CloudWatch insights not from ametric filter.<br>C, D wrong for this context.I think only B can work.<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/EventTypes.html<br><br>Cloudwatch Events can trigger Amazon Inspector, but Amazon Inspector does not generate cloudwatch events. So the methodology described in A wouldn't work. Also, the only metrics posted by inspector to cloudwatch are those you have listed, and successful logins are not among them.Bruh. Have you ever made simple alerts with CloudWatch? You can simply filter patterns with regular CloudWatch metrics/events:<br><br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html",
          "upvote_count": "411",
          "selected_answers": ""
        },
        {
          "id": 401643,
          "date": "Wed 27 Oct 2021 16:44",
          "username": "MBJames",
          "content": "I think only B can work.<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/EventTypes.html<br><br>Cloudwatch Events can trigger Amazon Inspector, but Amazon Inspector does not generate cloudwatch events. So the methodology described in A wouldn't work. Also, the only metrics posted by inspector to cloudwatch are those you have listed, and successful logins are not among them.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 509761,
          "date": "Sun 26 Dec 2021 20:12",
          "username": "GreatFunana",
          "content": "Bruh. Have you ever made simple alerts with CloudWatch? You can simply filter patterns with regular CloudWatch metrics/events:<br><br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 224214,
          "date": "Sun 17 Oct 2021 05:58",
          "username": "jackdryan",
          "content": "I'll go with B",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 209451,
          "date": "Sat 16 Oct 2021 15:28",
          "username": "ChauPhan",
          "content": "B is correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 175908,
          "date": "Sun 10 Oct 2021 04:05",
          "username": "rejuvenatesvjl",
          "content": "B<br>A CloudWatch Logs agent runs on each EC2 instance. The agents are configured to send SSH logs from the EC2 instance to a log stream identified by an instance ID. <br>Log streams are aggregated into a log group. As a result, one log group contains all the logs you want to analyze from one or more instances.<br>You apply metric filters to a log group in order to search for specific keywords. When the metric filter finds specific keywords, the filter counts the occurrences of the keywords in a time-based sliding window. If the occurrence of a keyword exceeds the CloudWatch alarm threshold, an alarm is triggered.<br>An IAM policy defines a role that gives the EC2 servers permission to create logs in a log group and send log events (new log entries) from EC2 to log groups. This role is then assumed by the application servers.<br>CloudWatch alarms notify users when a specified threshold has been crossed. For example, you can set an alarm to trigger when more than 2 failed SSH connections happen in a 5-minute period.<br>https://aws.amazon.com/blogs/security/how-to-monitor-and-visualize-failed-ssh-access-attempts-to-amazon-ec2-linux-instances/This is not about failed access, but when a log in occur",
          "upvote_count": "41",
          "selected_answers": ""
        },
        {
          "id": 233478,
          "date": "Thu 21 Oct 2021 03:20",
          "username": "svjl",
          "content": "This is not about failed access, but when a log in occur",
          "upvote_count": "1",
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
      "question_text": "<p>A DevOps engineer has automated a web service deployment by using AWS CodePipeline with the following steps:<br>1. An AWS CodeBuild project compiles the deployment artifact and runs unit tests.<br>2. An AWS CodeDeploy deployment group deploys the web service to Amazon EC2 instances in the staging environment.<br>3. A CodeDeploy deployment group deploys the web service to EC2 instances in the production environment.<br>The quality assurance (QA) team requests permission to inspect the build artifact before the deployment to the production environment occurs. The QA team wants to run an internal penetration testing tool to conduct manual tests. The tool will be invoked by a REST API call.<br>Which combination of actions should the DevOps engineer take to fulfill this request? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#45",
          "answers": [
            {
              "choice": "<p>A. Insert a manual approval action between the test actions and deployment actions of the pipeline.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Modify the buildspec.yml file for the compilation stage to require manual approval before completion.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the CodeDeploy deployment groups so that they require manual approval to proceed.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the pipeline to directly call the REST API for the penetration testing tool.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Update the pipeline to invoke a Lambda function that calls the REST API for the penetration testing tool.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 45 discussion",
      "discusstion": [
        {
          "id": 655520,
          "date": "Wed 31 Aug 2022 23:52",
          "username": "ohcn",
          "content": "A and E - https://www.examtopics.com/discussions/amazon/view/49433-exam-aws-devops-engineer-professional-topic-1-question-190/",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 761539,
          "date": "Thu 29 Dec 2022 23:36",
          "username": "saeidp",
          "content": "A and E",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 753160,
          "date": "Thu 22 Dec 2022 10:50",
          "username": "Chinta",
          "content": "AE is the correct option",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 674776,
          "date": "Wed 21 Sep 2022 06:27",
          "username": "Goozian",
          "content": "A and E",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 660031,
          "date": "Mon 05 Sep 2022 12:11",
          "username": "costin",
          "content": "E for sure, not sure about A",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#46",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A DevOps Engineer manages a large commercial website that runs on Amazon EC2. The website uses Amazon Kinesis Data Streams to collect and process web logs. The DevOps Engineer manages the Kinesis consumer application, which also runs on Amazon EC2.<br>Sudden increases of data cause the Kinesis consumer application to fall behind, and the Kinesis data streams drop records before the records can be processed.<br>The DevOps Engineer must implement a solution to improve stream handling.<br>Which solution meets these requirements with the MOST operational efficiency?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#46",
          "answers": [
            {
              "choice": "<p>A. Modify the Kinesis consumer application to store the logs durably in Amazon S3. Use Amazon EMR to process the data directly on Amazon S3 to derive customer insights. Store the results in Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Horizontally scale the Kinesis consumer application by adding more EC2 instances based on the Amazon CloudWatch GetRecords.IteratorAgeMilliseconds metric. Increase the retention period of the Kinesis Data Streams.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Convert the Kinesis consumer application to run as an AWS Lambda function. Configure the Kinesis Data Streams as the event source for the Lambda function to process the data streams.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Increase the number of shards in the Kinesis Data Streams to increase the overall throughput so that the consumer application processes data faster.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 46 discussion",
      "discusstion": [
        {
          "id": 762525,
          "date": "Sat 31 Dec 2022 08:20",
          "username": "saeidp",
          "content": "I go with C.  Most efficient (C: because of the sudden spikes) vs fastest approach (B)",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 760607,
          "date": "Thu 29 Dec 2022 06:28",
          "username": "AkaAka4",
          "content": "Refer to ohcn's comment.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 753172,
          "date": "Thu 22 Dec 2022 10:58",
          "username": "Chinta",
          "content": "Go with B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 740961,
          "date": "Sat 10 Dec 2022 13:24",
          "username": "SatenderRathee",
          "content": "kinesis stream + lambda is better solution",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 735072,
          "date": "Sun 04 Dec 2022 13:25",
          "username": "Maygam",
          "content": "1. https://docs.aws.amazon.com/streams/latest/dev/lambda-consumer.html<br>2. https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 722258,
          "date": "Sat 19 Nov 2022 22:20",
          "username": "alinatokyozanuro",
          "content": "I would go with C.  Lambda is always more efficient and cheaper than EC2. https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.htmlAgree. As the question is asking for MOST operational efficiency, then answer is C. <br>If the question is asking for FASTEST method to improve, then answer is B",
          "upvote_count": "34",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 732182,
          "date": "Thu 01 Dec 2022 03:34",
          "username": "kyozanuro",
          "content": "Agree. As the question is asking for MOST operational efficiency, then answer is C. <br>If the question is asking for FASTEST method to improve, then answer is B",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 674782,
          "date": "Wed 21 Sep 2022 06:34",
          "username": "Goozian",
          "content": "Only B can't be false!",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 655526,
          "date": "Wed 31 Aug 2022 23:58",
          "username": "ohcn",
          "content": "B - https://www.examtopics.com/discussions/amazon/view/8544-exam-aws-devops-engineer-professional-topic-1-question-129/",
          "upvote_count": "4",
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
      "question_text": "<p>A company uses AWS Organizations to manage multiple accounts. Information security policies require that all unencrypted Amazon EBS volumes be marked as non-compliant. A DevOps engineer needs to automatically deploy the solution and ensure that this compliance check is always present.<br>With solution will accomplish this?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#47",
          "answers": [
            {
              "choice": "<p>A. Create an AWS CloudFormation template that defines an AWS Inspector rule to check whether EBS encryption is enabled. Save the template to an Amazon S3 bucket that has been shared with all accounts within the company. Update the account creation script pointing to the CloudFormation template in Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Config organizational rule to check whether EBS encryption is enabled and deploy the rule using the AWS CLI. Create and apply an SCP to prohibit stopping and deleting AWS Config across the organization.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an SCP in Organizations. Set the policy to prevent the launch of Amazon EC2 instances without encryption on the EBS volumes using a conditional expression. Apply the SCP to all AWS accounts. Use Amazon Athena to analyze the AWS CloudTrail output, looking for events that deny an ec2:RunInstances action.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy an IAM role to all accounts from a single trusted account. Build a pipeline with AWS CodePipeline with a stage in AWS Lambda to assume the IAM role, and list all EBS volumes in the account. Publish a report to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 47 discussion",
      "discusstion": [
        {
          "id": 356340,
          "date": "Tue 21 Sep 2021 16:02",
          "username": "LB",
          "content": "The answer is B.  We need to use AWS config rules.",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 748327,
          "date": "Sat 17 Dec 2022 20:20",
          "username": "neta1o",
          "content": "If the question was to prevent the volumes from being created instead of marking non compliant would it have been C?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 620812,
          "date": "Thu 23 Jun 2022 08:49",
          "username": "ishitat",
          "content": "https://docs.aws.amazon.com/config/latest/developerguide/ec2-ebs-encryption-by-default.html<br>refer the link",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 543351,
          "date": "Tue 08 Feb 2022 22:30",
          "username": "blueorca",
          "content": "need Config to detect compliance",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 509168,
          "date": "Sat 25 Dec 2021 16:41",
          "username": "Jack9573",
          "content": "Answer B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 508878,
          "date": "Fri 24 Dec 2021 23:03",
          "username": "szl0144",
          "content": "answer is B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 503901,
          "date": "Fri 17 Dec 2021 21:51",
          "username": "vpupkin",
          "content": "BBBBBBBBBB",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 433950,
          "date": "Sun 31 Oct 2021 18:55",
          "username": "thisdump",
          "content": "BBBBBB",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 389173,
          "date": "Sun 17 Oct 2021 20:36",
          "username": "D2",
          "content": "Answer B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 361949,
          "date": "Mon 04 Oct 2021 14:30",
          "username": "MrCarter",
          "content": "BBBBBBBBBBB",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#48",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company develops and maintains a web application using Amazon EC2 instances and an Amazon RDS for SQL Server DB instance in a single Availability<br>Zone. The resources need to run only when new deployments are being tested using AWS CodePipeline. Testing occurs one or more times a week and each test takes 2-3 hours to run. A DevOps engineer wants a solution that does not change the architecture components.<br>Which solution will meet these requirements in the MOST cost-effective manner?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#48",
          "answers": [
            {
              "choice": "<p>A. Convert the RDS database to an Amazon Aurora Serverless database. Use an AWS Lambda function to start and stop the EC2 instances before and after tests.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Put the EC2 instances into an Auto Scaling group. Schedule scaling to run at the start of the deployment tests.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Replace the EC2 instances with EC2 Spot Instances and the RDS database with an RDS Reserved Instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Subscribe Amazon CloudWatch Events to CodePipeline to trigger AWS Systems Manager Automation documents that start and stop all EC2 and RDS instances before and after deployment tests.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 48 discussion",
      "discusstion": [
        {
          "id": 317192,
          "date": "Tue 02 Nov 2021 23:21",
          "username": "1234567Jsyaldram",
          "content": "ans: D<br>https://aws.amazon.com/blogs/mt/systems-manager-automation-documents-manage-instances-cut-costs-off-hours/This link perfectly describes the solution.",
          "upvote_count": "202",
          "selected_answers": ""
        },
        {
          "id": 674003,
          "date": "Tue 20 Sep 2022 11:50",
          "username": "syaldram",
          "content": "This link perfectly describes the solution.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 748330,
          "date": "Sat 17 Dec 2022 20:25",
          "username": "neta1o",
          "content": "D is good, small caveat is that RDS can only be stopped for 7 days then it'll automatically start.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 662828,
          "date": "Wed 07 Sep 2022 21:30",
          "username": "ohcn",
          "content": "D - You can stop RDS instances for up to 7 days. https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StopInstance.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 544089,
          "date": "Wed 09 Feb 2022 21:40",
          "username": "blueorca",
          "content": "D looks better to me",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 508474,
          "date": "Fri 24 Dec 2021 13:01",
          "username": "Jaxjdsg0206kyozanuro",
          "content": "A Require a lot of code change<br>B They have mentioned about EC2 but nothing about RDS<br>C This could be an answer - task require for 2 or 3 hours and reserve the RDS instance to save the cost<br>D won't- you cannot stop SQL RDS instanceWhat is the problem if we stop the server but do not terminate. D can be an anwer.RDS can be stopped to save cost: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StopInstance.html",
          "upvote_count": "222",
          "selected_answers": ""
        },
        {
          "id": 514744,
          "date": "Sun 02 Jan 2022 00:42",
          "username": "sg0206",
          "content": "What is the problem if we stop the server but do not terminate. D can be an anwer.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 732187,
          "date": "Thu 01 Dec 2022 03:47",
          "username": "kyozanuro",
          "content": "RDS can be stopped to save cost: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StopInstance.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 504238,
          "date": "Sat 18 Dec 2021 14:41",
          "username": "devonqo",
          "content": "It's D. ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 465191,
          "date": "Sun 07 Nov 2021 08:02",
          "username": "okida",
          "content": "It's D.  Both EC2, RDS should be launched on-demand for the most cost saving.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 331305,
          "date": "Sun 07 Nov 2021 02:48",
          "username": "devopp",
          "content": "note Revealed B is wrong for lowering costs since RDS is presumably then always running.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 331025,
          "date": "Wed 03 Nov 2021 15:47",
          "username": "devopp",
          "content": "D<br>Revealed B is wrong since breaking requirement to not change architecture components.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 316981,
          "date": "Thu 28 Oct 2021 13:50",
          "username": "WhyIronMan",
          "content": "it does not sounds like the efficient way",
          "upvote_count": "1",
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
      "question_text": "<p>The Development team has grown substantially in recent months and so has the number of projects that use separate code repositories. The current process involves configuring AWS CodePipeline manually. There have been service limit alerts regarding the number of Amazon S3 buckets that exist.<br>Which pipeline option will reduce S3 bucket sprawl alerts?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#49",
          "answers": [
            {
              "choice": "<p>A. Combine the multiple separate code repositories into a single one, and deploy using an AWS CodePipeline that has logic for each project.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create new pipelines by using the AWS API or AWS CLI, and configure them to use a single S3 bucket with separate prefixes for each project.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new pipeline in a different region for each project to bypass the service limits for S3 buckets in a single region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new pipeline and S3 bucket for each project by using the AWS API or AWS CLI to bypass the service limits for S3 buckets in a single account.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 49 discussion",
      "discusstion": [
        {
          "id": 361337,
          "date": "Thu 04 Nov 2021 10:33",
          "username": "Wrd123456789",
          "content": "B for me",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 325275,
          "date": "Wed 29 Sep 2021 08:58",
          "username": "WhyIronMan",
          "content": "I'll go with B",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 696971,
          "date": "Mon 17 Oct 2022 08:07",
          "username": "ducluanxutrieu",
          "content": "I'll go with B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 309758,
          "date": "Sun 26 Sep 2021 00:58",
          "username": "Rajarshi",
          "content": "ans is B",
          "upvote_count": "4",
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
      "question_text": "<p>A company runs several applications across multiple AWS accounts in an organization in AWS Organizations. Some of the resources are not tagged properly and the company's finance team cannot determine which costs are associated with which applications. A DevOps engineer must remediate this issue and prevent this issue from happening in the future.<br>Which combination of actions should the DevOps engineer take to meet these requirements? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#50",
          "answers": [
            {
              "choice": "<p>A. Activate the user-defined cost allocation tags in each AWS account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create and attach an SCP that requires a specific tag.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Define each line of business (LOB) in AWS Budgets. Assign the required tag to each resource.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Scan all accounts with Tag Editor. Assign the required tag to each resource.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use the budget report to find untagged resources. Assign the required tag to each resource.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 50 discussion",
      "discusstion": [
        {
          "id": 753395,
          "date": "Thu 22 Dec 2022 15:44",
          "username": "luk3k0",
          "content": "DB for sure",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 753180,
          "date": "Thu 22 Dec 2022 11:13",
          "username": "Chinta",
          "content": "Answer is BD",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 753178,
          "date": "Thu 22 Dec 2022 11:11",
          "username": "Chinta",
          "content": "Answer is CD",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 667659,
          "date": "Tue 13 Sep 2022 06:48",
          "username": "MikeyJ",
          "content": "I agree with ohcn.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 659464,
          "date": "Sun 04 Sep 2022 20:52",
          "username": "ohcn",
          "content": "Might be B and D - SCP to prevent resources to be created without mandatory tags and Tag Editor to scan resources are not tagged.<br><br>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_tagging.html<br><br>https://aws.amazon.com/about-aws/whats-new/2015/02/19/aws-console-tag-editor-now-supports-not-tagged-and-empty-value-resource-search/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BD"
        }
      ]
    },
    {
      "question_id": "#51",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is implementing an Amazon ECS cluster to run its workload. The company architecture will run multiple ECS services on the cluster, with an<br>Application Load Balancer on the front end, using multiple target groups to route traffic. The Application Development team has been struggling to collect logs that must be collected and sent to an Amazon S3 bucket for near-real time analysis<br>What must the DevOps Engineer configure in the deployment to meet these requirements? (Choose three.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ADF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#51",
          "answers": [
            {
              "choice": "<p>A. Install the Amazon CloudWatch Logs logging agent on the ECS instances. Change the logging driver in the ECS task definition to 'awslogs'.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Download the Amazon CloudWatch Logs container instance from AWS and configure it as a task. Update the application service definitions to include the logging task.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon CloudWatch Events to schedule an AWS Lambda function that will run every 60 seconds running the create-export -task CloudWatch Logs command, then point the output to the logging S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable access logging on the Application Load Balancer, then point it directly to the S3 logging bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Enable access logging on the target groups that are used by the ECS services, then point it directly to the S3 logging bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create an Amazon Kinesis Data Firehose with a destination of the S3 logging bucket, then create an Amazon CloudWatch Logs subscription filter for Kinesis.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 51 discussion",
      "discusstion": [
        {
          "id": 321889,
          "date": "Sat 23 Oct 2021 19:59",
          "username": "WhyIronMan",
          "content": "I'll go with A, D, F",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 321870,
          "date": "Sat 23 Oct 2021 12:49",
          "username": "aws_Tamilan",
          "content": "Correct Answer: ADF<br><br>A =E2=80=93 for instance monitoring<br>D =E2=80=93 Best way logging for ALB<br>F =E2=80=93 For near-real time analysis",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 313564,
          "date": "Wed 20 Oct 2021 10:58",
          "username": "rscloud",
          "content": "ADFis correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 313180,
          "date": "Wed 13 Oct 2021 19:35",
          "username": "SKAWS",
          "content": "I'd go with A D F",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 309490,
          "date": "Thu 23 Sep 2021 08:07",
          "username": "RajarshiDuyPhan",
          "content": "ans is AEFThere is no access log on target group, access log on ELB only",
          "upvote_count": "14",
          "selected_answers": ""
        },
        {
          "id": 312062,
          "date": "Sat 09 Oct 2021 17:10",
          "username": "DuyPhan",
          "content": "There is no access log on target group, access log on ELB only",
          "upvote_count": "4",
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
      "question_text": "<p>A company uses a series of individual Amazon CloudFormation templates to deploy its multi-Region applications. These templates must be deployed in a specific order. The company is making more changes to the templates than previously expected and wants to deploy new templates more efficiently. Additionally, the data engineering team must be notified of all changes to the templates.<br>What should the company do to accomplish these goals?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#52",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Lambda function to deploy the CloudFormation templates in the required order. Use stack policies to alert the data engineering team.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Host the CloudFormation templates in Amazon S3. Use Amazon S3 events to directly trigger CloudFormation updates and Amazon SNS notifications.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Implement CloudFormation StackSets and use drift detection to trigger update alerts to the data engineering team.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Leverage CloudFormation nested stacks and stack sets for deployments. Use Amazon SNS to notify the data engineering team.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 52 discussion",
      "discusstion": [
        {
          "id": 674843,
          "date": "Wed 21 Sep 2022 08:14",
          "username": "Goozianceros399",
          "content": "D seems a better choice among others<br>\\\"in a specific order.\\\" > Nested Stack guaranteeNested Stack doesn't manage the order in which the templates are applied, for hat you use Stack Sets",
          "upvote_count": "51",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 752272,
          "date": "Wed 21 Dec 2022 13:24",
          "username": "ceros399",
          "content": "Nested Stack doesn't manage the order in which the templates are applied, for hat you use Stack Sets",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 763362,
          "date": "Sun 01 Jan 2023 23:40",
          "username": "saeidp",
          "content": "I go with D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 752283,
          "date": "Wed 21 Dec 2022 13:35",
          "username": "ceros399apcloud",
          "content": "Stack Sets will take care of the multi-region ordered deployment. and I don't see the need for nested stackThey aren't looking for drift notifs, they want to notify the team about template changes",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 757891,
          "date": "Mon 26 Dec 2022 23:27",
          "username": "apcloud",
          "content": "They aren't looking for drift notifs, they want to notify the team about template changes",
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
      "question_text": "<p>A company is running an application on Amazon EC2 instances in an Auto Scaling group. Recently, an issue occurred that prevented EC2 instances from launching successfully, and it took several hours for the Support team to discover the issue. The Support team wants to be notified by email whenever an EC2 instance does not start successfully.<br>Which action will accomplish this?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#53",
          "answers": [
            {
              "choice": "<p>A. Add a health check to the Auto Scaling group to invoke an AWS Lambda function whenever an instance status is impaired.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the Auto Scaling group to send a notification to an Amazon SNS topic whenever a failed instance launch occurs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon CloudWatch alarm that invokes an AWS Lambda function when a failed AttachInstances Auto Scaling API call is made.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a status check alarm on Amazon EC2 to send a notification to an Amazon SNS topic whenever a status check fail occurs.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 53 discussion",
      "discusstion": [
        {
          "id": 158365,
          "date": "Mon 20 Sep 2021 05:35",
          "username": "SmartRollingPotato",
          "content": "B is correct<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/ASGettingNotifications.html#auto-scaling-sns-notificationsFor me also, B seems to be a suitable option. For D we need to manually create CW events, while we can use inbuilt ASG events feature",
          "upvote_count": "162",
          "selected_answers": ""
        },
        {
          "id": 180728,
          "date": "Sun 03 Oct 2021 00:07",
          "username": "RollingPotato",
          "content": "For me also, B seems to be a suitable option. For D we need to manually create CW events, while we can use inbuilt ASG events feature",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 224513,
          "date": "Sun 24 Oct 2021 19:01",
          "username": "jackdryan",
          "content": "I'll go with B",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 763367,
          "date": "Sun 01 Jan 2023 23:47",
          "username": "saeidp",
          "content": "I go with B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 253208,
          "date": "Thu 28 Oct 2021 08:38",
          "username": "gmandala",
          "content": "B it is",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 209854,
          "date": "Fri 15 Oct 2021 13:22",
          "username": "ChauPhan",
          "content": "B is fine",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 184132,
          "date": "Sun 03 Oct 2021 19:59",
          "username": "FrankSparrow",
          "content": "B is correct. you can send SNS messages from the ASG console",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 178877,
          "date": "Sat 25 Sep 2021 21:38",
          "username": "nqobzanqobzaRightAnswers",
          "content": "C is the correct answer. EC2 cannot send notifications to SNS topics. We need to use cloudwatch events for this.<br><br>{<br>\\\"source\\\": [<br>\\\"aws.autoscaling\\\"<br>],<br>\\\"detail-type\\\": [<br>\\\"EC2 Instance Launch Unsuccessful\\\"<br>]<br>}IgnoreEC2 can't but Auto Scaling can. https://docs.aws.amazon.com/autoscaling/ec2/userguide/ASGettingNotifications.html#auto-scaling-sns-notifications",
          "upvote_count": "111",
          "selected_answers": ""
        },
        {
          "id": 178880,
          "date": "Wed 29 Sep 2021 07:06",
          "username": "nqobza",
          "content": "Ignore",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 522469,
          "date": "Wed 12 Jan 2022 22:17",
          "username": "RightAnswers",
          "content": "EC2 can't but Auto Scaling can. https://docs.aws.amazon.com/autoscaling/ec2/userguide/ASGettingNotifications.html#auto-scaling-sns-notifications",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#54",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Storage Gateway in file gateway mode in front of an Amazon S3 bucket that is used by multiple resources. In the morning when business begins, users do not see the objects processed by a third party the previous evening. When a DevOps engineer looks directly at the S3 bucket, the data is there, but it is missing in Storage Gateway.<br>Which solution ensures that all the updated third-party files are available in the morning?<br></p>",
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
              "choice": "<p>A. Configure a nightly Amazon EventBridge (Amazon CloudWatch Events) event to trigger an AWS Lambda function to run the RefreshCache command for Storage Gateway.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Instruct the third party to put data into the S3 bucket using AWS Transfer for SFTP.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify Storage Gateway to run in volume gateway mode.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use S3 same-Region replication to replicate any changes made directly in the S3 bucket to Storage Gateway.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 54 discussion",
      "discusstion": [
        {
          "id": 325562,
          "date": "Wed 06 Oct 2021 11:42",
          "username": "yyy",
          "content": "Ans: A<br>https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_RefreshCache.html",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 326726,
          "date": "Wed 27 Oct 2021 02:27",
          "username": "WhyIronMan",
          "content": "I'll go with A",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 318981,
          "date": "Sat 25 Sep 2021 03:36",
          "username": "Bmaster",
          "content": "I will go with A",
          "upvote_count": "5",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#55",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A DevOps engineer sets up two Amazon S3 event notifications for an S3 bucket from the S3 console. Both event notifications will be invoked when an object PUT action occurs. One event notification will invoke an AWS Lambda function if the file suffix is .csv. Another event notification will invoke an Amazon Simple<br>Notification Service (Amazon SNS) topic if the file suffix is .xlsx<br>The DevOps engineer notices that files with the .csv suffix can invoke the Lambda function successfully. However, files with the .xlsx suffix cannot invoke the SNS topic.<br>Which reason explains why the SNS topic is not invoked when .xlsx files are added to the S3 bucket?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#55",
          "answers": [
            {
              "choice": "<p>A. Only one event notification is allowed from the S3 console.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Amazon S3 needs proper permissions to publish an event notification to Amazon SNS.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Lambda has precedence over Amazon SNS in handling the event notification.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Amazon SNS is not a valid destination for some S3 event notifications, including object PUT.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 55 discussion",
      "discusstion": [
        {
          "id": 763372,
          "date": "Sun 01 Jan 2023 23:51",
          "username": "saeidp",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 740979,
          "date": "Sat 10 Dec 2022 13:54",
          "username": "SatenderRathee",
          "content": "These are two differnet filters so B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 696994,
          "date": "Mon 17 Oct 2022 08:29",
          "username": "ducluanxutrieu",
          "content": "I'll go with B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 696447,
          "date": "Sun 16 Oct 2022 20:56",
          "username": "mgm7",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-filtering.html shows that you can have two non overlapping filters triggering two distinct actions, which shows A does not apply here. <br>If B is not taken care of, it certainly will not work, so I will go with B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 688979,
          "date": "Sat 08 Oct 2022 04:05",
          "username": "mvsnogueira2022",
          "content": "B<br>https://aws.amazon.com/premiumsupport/knowledge-center/unable-validate-destination-s3/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 682382,
          "date": "Thu 29 Sep 2022 07:56",
          "username": "quixo",
          "content": "I will go with A<br>Refer: https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-filtering.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 677925,
          "date": "Sat 24 Sep 2022 17:11",
          "username": "RightAnswers",
          "content": "S3 event notification supports SNS, SQS and Lambda. However, it is not possible to have multiple Events defined for the same 'triggers'.<br>https://stackoverflow.com/questions/55079923/programmatically-add-multiple-event-notifications-to-s3-bucket",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 657145,
          "date": "Fri 02 Sep 2022 09:51",
          "username": "devops7",
          "content": "B sounds right",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 655569,
          "date": "Thu 01 Sep 2022 00:57",
          "username": "ohcn",
          "content": "B - https://docs.aws.amazon.com/AmazonS3/latest/userguide/grant-destinations-permissions-to-s3.html",
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
      "question_text": "<p>A company has a web application that uses AWS Elastic Beanstalk, Amazon S3, and Amazon DynamoDB to develop a web application. The web application has increased dramatically in popularity, resulting in unpredictable spikes in traffic. A DevOps Engineer has noted that 90% of the requests are duplicate read requests to the DynamoDB table and the images stored in an S3 bucket.<br>How can the Engineer improve the performance of the website?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#56",
          "answers": [
            {
              "choice": "<p>A. Use Amazon ElastiCache for Redis to cache repeated read requests to DynamoDB and AWS Elemental MediaStore to cache images stored in S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon ElastiCache for Memcached to cache repeated read requests to DynamoDB and Amazon EFS to cache images stored in S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use DynamoDB Accelerator to cache repeated read requests to DynamoDB and Amazon CloudFront to cache images stored in S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use DynamoDB Streams to cache repeated read requests to DynamoDB and API Gateway to cache images stored in S3.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 56 discussion",
      "discusstion": [
        {
          "id": 334753,
          "date": "Thu 28 Oct 2021 00:56",
          "username": "CeckGix",
          "content": "C: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html<br>https://aws.amazon.com/blogs/aws/amazon-dynamodb-accelerator-dax-in-memory-caching-for-read-intensive-workloads/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 323448,
          "date": "Mon 11 Oct 2021 13:15",
          "username": "WhyIronMan",
          "content": "I'll go with C,",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 321923,
          "date": "Mon 04 Oct 2021 04:48",
          "username": "aws_Tamilan",
          "content": "Correct Answer: C<br><br>Reference:<br><br>https://aws.amazon.com/blogs/aws/amazon-dynamodb-accelerator-dax-in-memory-caching-for-read-intensive-workloads/<br><br>https://aws.amazon.com/dynamodb/dax/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 317836,
          "date": "Sat 25 Sep 2021 04:29",
          "username": "devopsv2",
          "content": "Option C, DynamoDB Accelarator is the caching mechanism for DynamoDB and CloudFront is the best caching static images (CDN)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 309498,
          "date": "Wed 22 Sep 2021 02:08",
          "username": "Rajarshi",
          "content": "Ans is C",
          "upvote_count": "1",
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
      "question_text": "<p>A DevOps engineer notices that all Amazon EC2 instances running behind an Application Load Balancer in an Auto Scaling group are failing to respond to user requests. The EC2 instances are also failing target group HTTP health checks.<br>Upon inspection, the engineer notices the application process was not running in any EC2 instances. There are a significant number of out of memory messages in the system logs. The engineer needs to improve the resilience of the application to cope with a potential application memory leak. Monitoring and notifications should be enabled to alert when there is an issue.<br>Which combination of actions will meet these requirements? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#57",
          "answers": [
            {
              "choice": "<p>A. Change the Auto Scaling configuration to replace the instances when they fail the load balancer's health checks.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Change the target group health check HealthCheckIntervalSeconds parameter to reduce the interval between health checks.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Change the target group health checks from HTTP to TCP to check if the port where the application is listening is reachable.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable the available memory consumption metric within the Amazon CloudWatch dashboard for the entire Auto Scaling group. Create an alarm when the memory utilization is high. Associate an Amazon SNS topic to the alarm to receive notifications when the alarm goes off.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use the Amazon CloudWatch agent to collect the memory utilization of the EC2 instances in the Auto Scaling group. Create an alarm when the memory utilization is high and associate an Amazon SNS topic to receive a notification.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 57 discussion",
      "discusstion": [
        {
          "id": 326681,
          "date": "Fri 01 Oct 2021 01:34",
          "username": "WhyIronMan",
          "content": "I'll go with A, E<br><br>B is wrong because it don't attack the problem<br>C is wrong because changing the target group health checks from HTTP to TCP will not help<br>D is wrong because of \\\"notifications when the alarm goes off\\\".",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 314624,
          "date": "Thu 30 Sep 2021 01:12",
          "username": "Jordanro",
          "content": "I will go with A,E",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 688985,
          "date": "Sat 08 Oct 2022 04:23",
          "username": "mvsnogueira2022",
          "content": "A and E<br>C - Is not possible. Only protocols available for health check are HTTP and HTTPS<br>B - Increase the time will not solve",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 630788,
          "date": "Wed 13 Jul 2022 07:55",
          "username": "niklocastro",
          "content": "A company runs a photo processing application that needs to frequently upload and download pictures from Amazon S3 buckets that are located in the same AWS Region.<br>A solutions architect has noticed an increased cost in data transfer fees and needs to implement a solution to reduce these costs.<br>How can the solutions architect meet this requirement?<br>A.  Deploy Amazon API Gateway into a public subnet and adjust the route table to route S3 calls through It.B.  Deploy a NAT gateway into a public subnet and attach an end point policy that allows access to the S3 buckets.C.  Deploy the application Into a public subnet and allow it to route through an internet gateway to access the S3 BucketsD.  Deploy an S3 VPC gateway endpoint into the VPC and attach an endpoint policy that allows access to the S3 buckets.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 630683,
          "date": "Tue 12 Jul 2022 22:47",
          "username": "tefdsfdsvasdf",
          "content": "AE is correct.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 544824,
          "date": "Thu 10 Feb 2022 20:47",
          "username": "blueorca",
          "content": "AE, E is obvious, A is because ASG by default monitor EC2 health check instead of LB, think that's the point of the question.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 385472,
          "date": "Fri 15 Oct 2021 09:29",
          "username": "RLai",
          "content": "Ans: A, E",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 361420,
          "date": "Tue 05 Oct 2021 09:58",
          "username": "feelgreat",
          "content": "ans: B, E<br><br>The Requirement is \\\"Monitoring and notifications\\\", replacement helps nothing by outofmemory",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 330308,
          "date": "Mon 04 Oct 2021 05:24",
          "username": "devoppshammousjustfmm",
          "content": "left with A,B as only sensible options.<br>sinceC doesnt solve problem<br>and D & E are invalid as no plain ASG (or EC2I) metrics on memory utilization (need Custom metric but no mention of that).I thought, like you, that a custom metric is needed for memory usage, but I came across this: \\\"By default, AWS gives you visibility into metrics like CPU load logs, network latency, request volume, etc., but not EC2 memory usage. For other metrics like EC2 memory usage, you'll have to install and configure a CloudWatch agent on the instance...\\\". For more info, check the \\\"mem_xxxx\\\" metrics here: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/metrics-collected-by-CloudWatch-agent.htmlCloudwatch agent have memory used metric.<br><br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/metrics-collected-by-CloudWatch-agent.html",
          "upvote_count": "221",
          "selected_answers": ""
        },
        {
          "id": 449903,
          "date": "Thu 21 Oct 2021 01:05",
          "username": "shammousjustfmm",
          "content": "I thought, like you, that a custom metric is needed for memory usage, but I came across this: \\\"By default, AWS gives you visibility into metrics like CPU load logs, network latency, request volume, etc., but not EC2 memory usage. For other metrics like EC2 memory usage, you'll have to install and configure a CloudWatch agent on the instance...\\\". For more info, check the \\\"mem_xxxx\\\" metrics here: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/metrics-collected-by-CloudWatch-agent.htmlCloudwatch agent have memory used metric.<br><br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/metrics-collected-by-CloudWatch-agent.html",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 464953,
          "date": "Sun 24 Oct 2021 23:37",
          "username": "justfmm",
          "content": "Cloudwatch agent have memory used metric.<br><br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/metrics-collected-by-CloudWatch-agent.html",
          "upvote_count": "1",
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
      "question_text": "<p>A company wants to migrate a legacy application to AWS and develop a deployment pipeline that uses AWS services only. A DevOps engineer is migrating all of the application code from a Git repository to AWS CodeCommit while preserving the history of the repository. The DevOps engineer has set all the permissions within CodeCommit, installed the Git client and the AWS CLI on a local computer, and is ready to migrate the repository.<br>Which actions will follow?<br></p>",
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
              "choice": "<p>A. Create the CodeCommit repository using the AWS CLI. Clone the Git repository directly to CodeCommit using the AWS CLI. Validate that the files were migrated, and publish the CodeCommit repository.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create the CodeCommit repository using the AWS Management Console. Clone both the Git and CodeCommit repositories to the local computer. Copy the files from the Git repository to the CodeCommit repository on the local computer. Commit the CodeCommit repository. Validate that the files were migrated, and share the CodeCommit repository.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create the CodeCommit repository using the AWS Management Console. Use the console to clone the Git repository into the CodeCommit repository. Validate that the files were migrated, and publish the CodeCommit repository.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create the CodeCommit repository using the AWS Management Console or the AWS CLI. Clone the Git repository with a mirror argument to the local computer and push the repository to CodeCommit. Validate that the files were migrated, and share the CodeCommit repository.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 58 discussion",
      "discusstion": [
        {
          "id": 310004,
          "date": "Mon 04 Oct 2021 14:45",
          "username": "rscloud",
          "content": "D<br>https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-migrate-repository-existing.html",
          "upvote_count": "17",
          "selected_answers": ""
        },
        {
          "id": 325820,
          "date": "Sat 09 Oct 2021 14:00",
          "username": "WhyIronManStelSen",
          "content": "I'll got with D<br><br>Reference: https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-migrate-repository-existing.html#how-to-migrate-existing-cloneThe link is very useful to understand. Thanks a lot",
          "upvote_count": "81",
          "selected_answers": ""
        },
        {
          "id": 428467,
          "date": "Fri 29 Oct 2021 16:55",
          "username": "StelSen",
          "content": "The link is very useful to understand. Thanks a lot",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 702089,
          "date": "Sun 23 Oct 2022 12:48",
          "username": "ryuhei",
          "content": "Answer is =E2=80=9DD=E2=80=9D =EF=BC=81",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 546507,
          "date": "Sun 13 Feb 2022 15:46",
          "username": "blueorca",
          "content": "D is the correct answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 441738,
          "date": "Wed 03 Nov 2021 19:33",
          "username": "govindrk",
          "content": "D -<br>1 - create a repo<br>2 - clone the repo (mirror)<br>3 - push<br>4 - validate",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 376082,
          "date": "Tue 26 Oct 2021 13:19",
          "username": "RLai",
          "content": "Ans is D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 376067,
          "date": "Mon 18 Oct 2021 13:57",
          "username": "RLai",
          "content": "Answer: D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 310279,
          "date": "Tue 05 Oct 2021 17:01",
          "username": "Rajarshi",
          "content": "ans: D",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#59",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using AWS to deploy an application. The development team must automate the deployments. The team has created an AWS CodePipeline pipeline to deploy the application to Amazon EC2 instances using AWS CodeDeploy after it has been built using AWS CodeBuild.<br>The team wants to add automated testing to the pipeline to confirm that the application is healthy before deploying the code to the EC2 instances. The team also requires a manual approval action before the application is deployed, even if the tests are successful. The testing and approval must be accomplished at the lowest costs, using the simplest management solution.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#59",
          "answers": [
            {
              "choice": "<p>A. Create a manual approval action after the build action of the pipeline. Use Amazon SNS to inform the team of the stage being triggered. Next, add a test action using CodeBuild to perform the required tests. At the end of the pipeline, add a deploy action to deploy the application to the next stage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a test action after the CodeBuild build of the pipeline. Configure the action to use CodeBuild to perform the required tests. If these tests are successful, mark the action as successful. Add a manual approval action that uses Amazon SNS to notify the team, and add a deploy action to deploy the application to the next stage.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new pipeline that uses a source action that gets the code from the same repository as the first pipeline. Add a deploy action to deploy the code to a test environment. Use a test action using AWS Lambda to test the deployment. Add a manual approval action by using Amazon SNS to notify the team, and add a deploy action to deploy the application to the next stage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a test action after the build action. Use a Jenkins server on Amazon EC2 to perform the required tests and mark the action as successful if the tests pass. Create a manual approval action that uses Amazon SQS to notify the team and add a deploy action to deploy the application to the next stage.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 59 discussion",
      "discusstion": [
        {
          "id": 323449,
          "date": "Thu 07 Oct 2021 00:57",
          "username": "Jordanro",
          "content": "I will go with B. ",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 328284,
          "date": "Wed 03 Nov 2021 00:28",
          "username": "sb333",
          "content": "The answer is B. ",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 318934,
          "date": "Mon 04 Oct 2021 07:51",
          "username": "SpavankoWhyIronMan",
          "content": "I will got with AThe manual approval must be after Tests and before deploy, not after build",
          "upvote_count": "14",
          "selected_answers": ""
        },
        {
          "id": 326942,
          "date": "Sat 30 Oct 2021 04:36",
          "username": "WhyIronMan",
          "content": "The manual approval must be after Tests and before deploy, not after build",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 316383,
          "date": "Tue 28 Sep 2021 23:00",
          "username": "WhyIronManWhyIronMan",
          "content": "Reference: https://docs.aws.amazon.com/codebuild/latest/userguide/how-to-create-pipeline-add-test.htmlI'll go with B<br><br>because its the simplest way with lower costs",
          "upvote_count": "25",
          "selected_answers": ""
        },
        {
          "id": 326941,
          "date": "Wed 27 Oct 2021 20:31",
          "username": "WhyIronMan",
          "content": "I'll go with B<br><br>because its the simplest way with lower costs",
          "upvote_count": "5",
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
      "question_text": "<p>A DevOps engineer wants to deploy a serverless web application that is based on AWS Lambda. The deployment must meet the following requirements:<br>-Provide staging and production environments.<br>-Restrict developers from accessing the production environment.<br>-Avoid hardcoding passwords in the Lambda functions.<br>-Store source code in AWS CodeCommit.<br>-Use AWS CodePipeline to automate the deployment.<br>What is the MOST operationally efficient solution that meets these requirements?<br></p>",
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
              "choice": "<p>A. Create separate staging and production accounts to segregate deployment targets. Use AWS Key Management Service (AWS KMS) to store environment- specific values. Use CodePipeline to automate deployments with AWS CodeDeploy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create separate staging and production accounts to segregate deployment targets. Use Lambda environment variables to store environment-specific values. Use CodePipeline to automate deployments with AWS CodeDeploy.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Define tagging conventions for staging and production environments to segregate deployment targets. Use AWS Key Management Service (AWS KMS) to store environment-specific values. Use CodePipeline to automate deployments with AWS CodeDeploy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Define tagging conventions for staging and production environments to segregate deployment targets. Use Lambda environment variables to store environment-specific values. Use CodePipeline to automate deployments with AWS CodeDeploy.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 60 discussion",
      "discusstion": [
        {
          "id": 763610,
          "date": "Mon 02 Jan 2023 10:19",
          "username": "saeidp",
          "content": "B is correct. This is a serverless deployment",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 741773,
          "date": "Sun 11 Dec 2022 15:15",
          "username": "ericzaj",
          "content": "One of the requirements is this: Restrict developers from accessing the production environment.<br>D alone does not restrict users.B.  meets all requirements.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 733802,
          "date": "Fri 02 Dec 2022 15:07",
          "username": "Jichu",
          "content": "You can't use tagging to segregate deployment targets for Lambda. The docu here only says EC2 https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-tagging.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 727609,
          "date": "Sat 26 Nov 2022 16:30",
          "username": "Maygam",
          "content": "https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-tagging.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 724852,
          "date": "Wed 23 Nov 2022 04:11",
          "username": "kyozanuro",
          "content": "https://aws.amazon.com/blogs/security/guidelines-for-when-to-use-accounts-users-and-groups/<br>Always prefer to use tag to segregate environment rather than using multiple accounts",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 693857,
          "date": "Thu 13 Oct 2022 13:51",
          "username": "mgm7",
          "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html<br>One can use tags and condition statements in policies to restrict access to specific resources.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 678259,
          "date": "Sat 24 Sep 2022 23:51",
          "username": "RightAnswers",
          "content": "Lambda aliases should be used to sperate deplyment stateg. However, with the given options, the best way may be to use different accounts.<br>A: Incorrect - KMS can't be used to store environment specific variable. Those are stored as environment variables, but can be encrypted with a KMS key.<br>B: Correct<br>C and D: Incorrect - Tagging can't be used to segregate deployment targets with Lambda",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 664987,
          "date": "Sat 10 Sep 2022 01:23",
          "username": "MichaelExamGoozian",
          "content": "A,C are wrong. Since KSM can't store environment variable.<br>The difference between B and D is separate environments by account or tagging. Per the requirement - the MOST operationally efficient, I will choice D. do you have any reference/example showing deployment based on tagging ?!",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 674989,
          "date": "Wed 21 Sep 2022 12:03",
          "username": "Goozian",
          "content": "do you have any reference/example showing deployment based on tagging ?!",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 661970,
          "date": "Wed 07 Sep 2022 06:26",
          "username": "SamHan",
          "content": "Ans: B Account level segregating",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 659700,
          "date": "Mon 05 Sep 2022 05:28",
          "username": "network_zealnetwork_zeal",
          "content": "A is correct. D(segregating using tags) cannot be the most operationally efficient versus having an account level segregation.Sorry it is B.  KMS wont store store variables, they will need to be stored in Lambda env variables.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 659702,
          "date": "Mon 05 Sep 2022 05:35",
          "username": "network_zeal",
          "content": "Sorry it is B.  KMS wont store store variables, they will need to be stored in Lambda env variables.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 659518,
          "date": "Sun 04 Sep 2022 22:29",
          "username": "ohcn",
          "content": "B - I suspect D is not the correct answer. Lambda uses ALIAS to segregate deployments. According to AWS documentation that is the deployment group definition for a Lambda deployment: \\\"A CodeDeploy deployment group on an AWS Lambda compute platform identifies a collection of one or more AppSpec files. Each AppSpec file can deploy one Lambda function version. A deployment group also defines a set of configuration options for future deployments, such as alarms and rollback configurations.\\\". https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-steps-lambda.html<br>It means AppSpec is going to be responsible to guide which environment Codedeploy will deploy the lambdafunction. <br>https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-resources.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 658919,
          "date": "Sun 04 Sep 2022 04:30",
          "username": "helloworldabc",
          "content": "dDDDDDDDDDD",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 657880,
          "date": "Sat 03 Sep 2022 00:36",
          "username": "Goozian",
          "content": "D is the optimal solution.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#61",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to use AWS development tools to replace its current bash deployment scripts. The company currently deploys a LAMP application to a group of<br>Amazon EC2 instances behind an Application Load Balancer (ALB). During the deployments, the company unit tests the committed application, stops and starts services, unregisters and re-registers instances with the load balancer, and updates file permissions. The company wants to maintain the same deployment functionality through the shift to using AWS services.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#61",
          "answers": [
            {
              "choice": "<p>A. Use AWS CodeBuild to test the application. Use bash scripts invoked by AWS CodeDeploy's appspec.yml file to restart services, and deregister and register instances with the ALB.  Use the appspec.yml file to update file permissions without a custom script.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS CodePipeline to move the application from the AWS CodeCommit repository to AWS CodeDeploy. Use CodeDeploy's deployment group to test the application, unregister and re-register instances with the ALB, and restart services. Use the appspec.yml file to update the permissions without a custom script.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS CodePipeline to move the application source code from the AWS CodeCommit repository to AWS CodeDeploy. Use CodeDeploy to test the application. Use CodeDeploy's appspec.yml file to restart services and update permissions without a custom script. Use AWS CodeBuild to unregister and re- register instances with the ALB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS CodePipeline to trigger AWS CodeBuild to test the application. Use bash scripts invoked by AWS CodeDeploy's appspec.yml file to restart services. Unregister and re-register the instances in the AWS CodeDeploy deployment group with the ALB.  Update the appspec.yml file to update file permissions without a custom script.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 61 discussion",
      "discusstion": [
        {
          "id": 356257,
          "date": "Mon 27 Sep 2021 10:49",
          "username": "LBhappydazeRightAnswers",
          "content": "D is the correct answer. CodeBuild to test the appliction.You can test with codedeploy: https://aws.amazon.com/blogs/devops/how-to-test-and-debug-aws-codedeploy-locally-before-you-ship-your-code/#:~:textYou%20can%20test%20application%20code,local%20server%20or%20EC2%20instance.You can test application **code packages** (NOT application) on any machine that has the CodeDeploy agent installed before you deploy it through the service. Likewise, to debug locally, you just need to install the CodeDeploy agent on any machine, including your local server or EC2 instance.<br>Where as CodeBuild compiles your source code, runs unit tests, and produces artifacts that are ready to deploy.<br>The correct answer is D",
          "upvote_count": "1111",
          "selected_answers": ""
        },
        {
          "id": 373753,
          "date": "Sat 16 Oct 2021 00:45",
          "username": "happydazeRightAnswers",
          "content": "You can test with codedeploy: https://aws.amazon.com/blogs/devops/how-to-test-and-debug-aws-codedeploy-locally-before-you-ship-your-code/#:~:textYou%20can%20test%20application%20code,local%20server%20or%20EC2%20instance.You can test application **code packages** (NOT application) on any machine that has the CodeDeploy agent installed before you deploy it through the service. Likewise, to debug locally, you just need to install the CodeDeploy agent on any machine, including your local server or EC2 instance.<br>Where as CodeBuild compiles your source code, runs unit tests, and produces artifacts that are ready to deploy.<br>The correct answer is D",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 536503,
          "date": "Sun 30 Jan 2022 22:57",
          "username": "RightAnswers",
          "content": "You can test application **code packages** (NOT application) on any machine that has the CodeDeploy agent installed before you deploy it through the service. Likewise, to debug locally, you just need to install the CodeDeploy agent on any machine, including your local server or EC2 instance.<br>Where as CodeBuild compiles your source code, runs unit tests, and produces artifacts that are ready to deploy.<br>The correct answer is D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 754209,
          "date": "Fri 23 Dec 2022 13:53",
          "username": "Chinta",
          "content": "d is correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 681327,
          "date": "Wed 28 Sep 2022 03:13",
          "username": "Goozian",
          "content": "why not A ?",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 678692,
          "date": "Sun 25 Sep 2022 12:17",
          "username": "RightAnswers",
          "content": "Though Codedeploy can be used for unit testing applications, it requires Codedeploy agents installed on the machine (https://aws.amazon.com/blogs/devops/how-to-test-and-debug-aws-codedeploy-locally-before-you-ship-your-code/#:~:textYou%20can%20test%20application%20code,local%20server%20or%20EC2%20instance). However, the correct approach is to use Codebuild for unit testing.<br>A: Incorrect: There is no deployment pipeline. Uses only Codebuild<br>B and C: Incorrect: Codebuild is used for testing - not Codedeploy<br>D: Correct. Has Codepipeline, Codebuild for unit testing and Codedeploy",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 545381,
          "date": "Fri 11 Feb 2022 15:50",
          "username": "blueorca",
          "content": "D, use CodeBuild for unit tests, CodeDeploy to run scripts",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 403038,
          "date": "Thu 04 Nov 2021 19:00",
          "username": "nsei",
          "content": "D is correct. Unit testing should be done with CodeBuild",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 383061,
          "date": "Mon 01 Nov 2021 22:14",
          "username": "D2",
          "content": "D is correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 373755,
          "date": "Mon 01 Nov 2021 09:13",
          "username": "happydazeGreatFunana",
          "content": "B is correct, you can test with codedeploy as long as the agent is installed..If the question doesn't say the agent is installed, you assume it is not.",
          "upvote_count": "42",
          "selected_answers": ""
        },
        {
          "id": 510006,
          "date": "Mon 27 Dec 2021 05:08",
          "username": "GreatFunana",
          "content": "If the question doesn't say the agent is installed, you assume it is not.",
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
      "question_text": "<p>A company gives its employees limited rights to AWS. DevOps engineers have the ability to assume an administrator role. For tracking purposes, the security team wants to receive a near-real-time notification when the administrator role is assumed.<br>How should this be accomplished?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#62",
          "answers": [
            {
              "choice": "<p>A. Configure AWS Config to publish logs to an Amazon S3 bucket. Use Amazon Athena to query the logs and send a notification to the security team when the administrator role is assumed.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure Amazon GuardDuty to monitor when the administrator role is assumed and send a notification to the security team.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon EventBridge (Amazon CloudWatch Events) event rule using an AWS Management Console sign-in events event pattern that publishes a message to an Amazon SNS topic if the administrator role is assumed.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon EventBridge (Amazon CloudWatch Events) events rule using an AWS API call that uses an AWS CloudTrail event pattern to trigger an AWS Lambda function that publishes a message to an Amazon SNS topic if the administrator role is assumed.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 62 discussion",
      "discusstion": [
        {
          "id": 389170,
          "date": "Thu 07 Oct 2021 14:33",
          "username": "D2StelSen",
          "content": "D should be right answer as it covers all methods of assuming admin role - not just management consoleThis is the most convincing answer. Thanks D2",
          "upvote_count": "141",
          "selected_answers": ""
        },
        {
          "id": 429929,
          "date": "Sat 09 Oct 2021 14:35",
          "username": "StelSen",
          "content": "This is the most convincing answer. Thanks D2",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 356332,
          "date": "Fri 01 Oct 2021 01:10",
          "username": "LBjustfmmsaggy4",
          "content": "D is the answer hereWhy is D the answer ? CloudTrail takes up to 15mins whereby question ask for near real time.The questions says Near Real time and not real time",
          "upvote_count": "1322",
          "selected_answers": ""
        },
        {
          "id": 465665,
          "date": "Sun 31 Oct 2021 10:28",
          "username": "justfmmsaggy4",
          "content": "Why is D the answer ? CloudTrail takes up to 15mins whereby question ask for near real time.The questions says Near Real time and not real time",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 758660,
          "date": "Tue 27 Dec 2022 15:53",
          "username": "saggy4",
          "content": "The questions says Near Real time and not real time",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 754294,
          "date": "Fri 23 Dec 2022 15:36",
          "username": "Arkarter",
          "content": "REF : https://aws.amazon.com/blogs/mt/monitor-and-notify-on-aws-account-root-user-activity/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 741050,
          "date": "Sat 10 Dec 2022 15:36",
          "username": "SatenderRathee",
          "content": "Cloud trail - 'NEAR' real time is the key word",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 723078,
          "date": "Mon 21 Nov 2022 00:26",
          "username": "bartekb3d",
          "content": "C is right answer.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 717504,
          "date": "Sun 13 Nov 2022 21:19",
          "username": "flavins",
          "content": "I go for D Since Cloudtrail deals with taking note of who or what accesses any API(in this instance login and assume roles API)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 706828,
          "date": "Sat 29 Oct 2022 01:54",
          "username": "keigan",
          "content": "D<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html#cloudtrail-integration_apis",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 678701,
          "date": "Sun 25 Sep 2022 12:32",
          "username": "RightAnswers",
          "content": "The requirement is to track whenever the DevOps engineer assumes Admin role (not the console sign-in events as mentioned in answer C).<br>CloudTrail logs attempts to sign into the AWS Management Console (https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-event-reference-aws-console-sign-in-events.html). CloudTrail can be configured to send events to CloudWatch Logs, and CloudWatch sends an SNS notification.<br>The requirement is for a NEAR real time - unfortunately CloudTrail typically delivers logs within an average of about 15 minutes of an API call. This time is not guaranteed.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 648352,
          "date": "Thu 18 Aug 2022 10:09",
          "username": "hubekpeter",
          "content": "You can use sns topic as an event bridge target. There's no need to put lambda in between. This solution is easier to implement, cheaper and more straight forward.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 632483,
          "date": "Sun 17 Jul 2022 09:00",
          "username": "adebisiayohubekpeter",
          "content": "The answer is D<br>There is nothing like an AWS Management Console sign-in events event triggerActually there's https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-event-reference-aws-console-sign-in-events.html",
          "upvote_count": "22",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 648354,
          "date": "Thu 18 Aug 2022 10:11",
          "username": "hubekpeter",
          "content": "Actually there's https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-event-reference-aws-console-sign-in-events.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 620809,
          "date": "Thu 23 Jun 2022 08:36",
          "username": "ishitat",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/root-user-account-eventbridge-rule/<br>refer this link",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 617370,
          "date": "Thu 16 Jun 2022 21:06",
          "username": "monkalways",
          "content": "D is the answer.<br><br>AWS Management Console sign-in events have nothing to do with assuming role.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 603884,
          "date": "Thu 19 May 2022 14:19",
          "username": "cox1960",
          "content": "C, no need for Lambda. Note that both C and D are pretty slow as both use CloudTrail. C usesthe event called \\\"AWS Console Sign In via CloudTrail\\\". Easier than D to configure and again no need for Lambda.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 464850,
          "date": "Mon 18 Oct 2021 12:47",
          "username": "Shenannigan",
          "content": "Based on this https://aws.amazon.com/blogs/mt/monitor-and-notify-on-aws-account-root-user-activity/<br>I believe D is the correct answer and yes I know not exactly the same scenario",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 382452,
          "date": "Mon 04 Oct 2021 14:58",
          "username": "Sagardonthinenifrancisco_guerra",
          "content": "C is the right answer we can create a custom log filter on AWS Cloud trail events and send it SNS topic.<br>https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudwatch-alarms-for-cloudtrail.htmlYes but the answer do not say anything about use a cloudWatch alarm to call the sns topic so the answer is D",
          "upvote_count": "41",
          "selected_answers": ""
        },
        {
          "id": 475840,
          "date": "Thu 11 Nov 2021 00:12",
          "username": "francisco_guerra",
          "content": "Yes but the answer do not say anything about use a cloudWatch alarm to call the sns topic so the answer is D",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#63",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company uses a large number of Amazon EBS backed Amazon EC2 instances. To decrease manual work across all the instances, a DevOps<br>Engineer is tasked with automating restart actions when EC2 instance retirement events are scheduled.<br>How can this be accomplished?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#63",
          "answers": [
            {
              "choice": "<p>A. Create a scheduled Amazon CloudWatch Events rule to execute an AWS Systems Manager automation document that checks if any EC2 instances are scheduled for retirement once a week. If the instance is scheduled for retirement, the automation document will hibernate the instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable EC2 Auto Recovery on all of the instances. Create an AWS Config rule to limit the recovery to occur during a maintenance window only.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Reboot all EC2 instances during an approved maintenance window that is outside of standard business hours. Set up Amazon CloudWatch alarms to send a notification in case any instance is failing EC2 instance status checks.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up an AWS Health Amazon CloudWatch Events rule to execute AWS Systems Manager automation documents that stop and start the EC2 instance when a retirement scheduled event occurs.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 63 discussion",
      "discusstion": [
        {
          "id": 158831,
          "date": "Sun 03 Oct 2021 19:27",
          "username": "Smart",
          "content": "D is correct (https://aws.amazon.com/premiumsupport/knowledge-center/ec2-instance-retirement/)",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 679769,
          "date": "Mon 26 Sep 2022 15:05",
          "username": "RightAnswers",
          "content": "Here is the link:<br>https://aws.amazon.com/blogs/mt/automate-remediation-actions-for-amazon-ec2-notifications-and-beyond-using-ec2-systems-manager-automation-and-aws-health/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 253120,
          "date": "Wed 20 Oct 2021 06:57",
          "username": "gmandala",
          "content": "will go with D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 224467,
          "date": "Sun 17 Oct 2021 12:25",
          "username": "jackdryan",
          "content": "I'll go with D",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 209803,
          "date": "Tue 12 Oct 2021 23:18",
          "username": "ChauPhan",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#64",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company that runs many workloads on AWS has an Amazon EBS spend that has increased over time. The DevOps team notices there are many unattached<br>EBS volumes. Although there are workloads where volumes are detached, volumes over 14 days old are stale and no longer needed. A DevOps engineer has been tasked with creating automation that deletes unattached EBS volumes that have been unattached for 14 days.<br>Which solution will accomplish this?<br></p>",
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
              "choice": "<p>A. Configure the AWS Config ec2-volume-inuse-check managed rule with a configuration changes trigger type and an Amazon EC2 volume resource target. Create a new Amazon CloudWatch Events rule scheduled to execute an AWS Lambda function in 14 days to delete the specified EBS volume.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon EC2 and Amazon Data Lifecycle Manager to configure a volume lifecycle policy. Set the interval period for unattached EBS volumes to 14 days and set the retention rule to delete. Set the policy target volumes as *.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon CloudWatch Events rule to execute an AWS Lambda function daily. The Lambda function should find unattached EBS volumes and tag them with the current date, and delete unattached volumes that have tags with dates that are more than 14 days old.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Trusted Advisor to detect EBS volumes that have been detached for more than 14 days. Execute an AWS Lambda function that creates a snapshot and then deletes the EBS volume.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 64 discussion",
      "discusstion": [
        {
          "id": 325973,
          "date": "Wed 06 Oct 2021 01:58",
          "username": "WhyIronManJohnnieWalkerMBJames",
          "content": "I'll go with C<br><br>Reference: https://aws.amazon.com/blogs/mt/controlling-your-aws-costs-by-deleting-unused-amazon-ebs-volumes/There are two correct answers in this question and not much of a reason to pick one over another, very poorly put. I will go with C. <br>\tA.  AWS Config nope<br>\tB.  Data Lifecycle Manager nope<br>\tC.  Lambda does the job and completely remove, no snapshots. The question says \\\"stale and no longer needed\\\", so I think that is the way to go.<br>Trust Advisor and Lambda works too, but the difference here is that this one creates a snapshot, so should we keep or not? If the question says \\\"stale and no longer needed\\\" I don't think we should.I'd go with D. <br>The way C is described, it would run daily and tag unattached EBS volumes with current date. This means that unattached EBS volumes will keep receiving the current date every day, and the date will never become 14 days old to be deleted. To be correct, C should have said that volumes already having the tag would not be tagged again, but that's not indicated.<br>D is a much cleaner way of doing things as it does not relies on these logic faults.",
          "upvote_count": "2384",
          "selected_answers": ""
        },
        {
          "id": 350612,
          "date": "Thu 14 Oct 2021 13:39",
          "username": "JohnnieWalkerMBJames",
          "content": "There are two correct answers in this question and not much of a reason to pick one over another, very poorly put. I will go with C. <br>\tA.  AWS Config nope<br>\tB.  Data Lifecycle Manager nope<br>\tC.  Lambda does the job and completely remove, no snapshots. The question says \\\"stale and no longer needed\\\", so I think that is the way to go.<br>Trust Advisor and Lambda works too, but the difference here is that this one creates a snapshot, so should we keep or not? If the question says \\\"stale and no longer needed\\\" I don't think we should.I'd go with D. <br>The way C is described, it would run daily and tag unattached EBS volumes with current date. This means that unattached EBS volumes will keep receiving the current date every day, and the date will never become 14 days old to be deleted. To be correct, C should have said that volumes already having the tag would not be tagged again, but that's not indicated.<br>D is a much cleaner way of doing things as it does not relies on these logic faults.",
          "upvote_count": "84",
          "selected_answers": ""
        },
        {
          "id": 401845,
          "date": "Thu 28 Oct 2021 00:07",
          "username": "MBJames",
          "content": "I'd go with D. <br>The way C is described, it would run daily and tag unattached EBS volumes with current date. This means that unattached EBS volumes will keep receiving the current date every day, and the date will never become 14 days old to be deleted. To be correct, C should have said that volumes already having the tag would not be tagged again, but that's not indicated.<br>D is a much cleaner way of doing things as it does not relies on these logic faults.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 362854,
          "date": "Wed 20 Oct 2021 02:15",
          "username": "Wrd123456789justfmm",
          "content": "D: https://github.com/aws/Trusted-Advisor-Tools/tree/master/UnderutilzedEBSVolumes<br><br>This is a serverless (Lambda) application that reacts to Trusted Advisor warnings via CloudWatch rules to detect and delete Underutilized EBS volumes - volumes that have been unattached or had low I/O for a number of days. The app will only delete idle, unattached volumes after successfully taking a snapshot. It sends an email with information on how to recover the volume from the snapshot.https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor-check-reference.html#underutilized-amazon-ebs-volumes",
          "upvote_count": "72",
          "selected_answers": ""
        },
        {
          "id": 467249,
          "date": "Mon 01 Nov 2021 06:33",
          "username": "justfmm",
          "content": "https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor-check-reference.html#underutilized-amazon-ebs-volumes",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 764073,
          "date": "Mon 02 Jan 2023 23:23",
          "username": "saeidp",
          "content": "I'll go with C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 741054,
          "date": "Sat 10 Dec 2022 15:47",
          "username": "SatenderRathee",
          "content": "https://aws.amazon.com/blogs/mt/controlling-your-aws-costs-by-deleting-unused-amazon-ebs-volumes/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 714235,
          "date": "Wed 09 Nov 2022 03:41",
          "username": "tinyflame",
          "content": "Amazon Data Lifecycle Manager cannot discover unattached disks and AWS Trusted Advisor can only discover currently unattached disks<br><br>This question has a complicated request, so I have no choice but to rely on the Lambda function",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 713541,
          "date": "Tue 08 Nov 2022 07:45",
          "username": "srikanth923",
          "content": "I will go with CA.  AWS ConfigChecks if EBS volumes are attached to EC2 instances. If the volume is 'available state', then you configure CloudWatch Event to invoke a Lambda function. Lambda function will take care of deletion. Note that Config does not only trigger unused EBS volumes for 14 days, but every unused EBS volume(irrespective of the number of days its been unused). Though it can be made work, its not the most efficient solutionB.  Data Lifecycle Manager only looks at EBS snapshot lifecycle. Not the EBS volumes itselfC.  Lambda function triggered periodically and tagging the new volumes and checking if already tagged volumes are > 14 days old. If it finds any > 14 days old, Lambda will delete them<br>4. Trusted advisor does not check for unused volumes, it checks for under utilised EBS volumes<br>So C is the best answer in this context.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 679784,
          "date": "Mon 26 Sep 2022 15:22",
          "username": "RightAnswers",
          "content": "At first I thought Ans D seems the best option - but this answers creates a snapshot. creating a snapshot is not a requirement.<br>So, A seems to be the best option.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 673101,
          "date": "Mon 19 Sep 2022 11:02",
          "username": "network_zealnetwork_zeal",
          "content": "Though few of the the answers are poorly worded, D seems to be best of the lot. With A it is not clear how config will identify it is 14 days since volume was unattached, B works with lifecycle of snapshots, not directly with lifecycle of volume, C has a logic flaw if date is updated D.  That leaves D(though it is not clear how D will be automated and why it is creating snapshots before delete when not asked in Qs.)With C, the lambda will update date tag daily with current date",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 673102,
          "date": "Mon 19 Sep 2022 11:02",
          "username": "network_zeal",
          "content": "With C, the lambda will update date tag daily with current date",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 671887,
          "date": "Sun 18 Sep 2022 02:28",
          "username": "colinquek",
          "content": "honestly there is no correct ans here.<br><br>the closest is C, it would hv been logically doable if the tagging of current date is mentioned AFTER the function/logic that detects & delete 14 days old EBS.<br><br>I choose B still. Though tt \\\"Use Amazon EC2 and Amazon Data Lifecycle Manager to configure a volume lifecycle policy\\\" line sounds so wrong.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 662905,
          "date": "Wed 07 Sep 2022 23:30",
          "username": "ohcn",
          "content": "D makes more sense. Trusted Advisor is designed to give you information about underutilized ebs volumes.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 654569,
          "date": "Wed 31 Aug 2022 02:46",
          "username": "jexam211",
          "content": "D maybe is valid, but i don't see any way to create a automatic way to detect, the C option at least is performing a daily task to validate the volumes",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 653081,
          "date": "Sun 28 Aug 2022 20:17",
          "username": "vagobago",
          "content": "Amazon Data Lifecycle Manager is normally the tool for performing cleaning of EBS Snapshots. So, I would got with B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 643634,
          "date": "Sun 07 Aug 2022 10:20",
          "username": "cox1960",
          "content": "For C, what if the volume get re-attached some day and detached. Will the Lambda noticed it? no.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 638345,
          "date": "Thu 28 Jul 2022 00:00",
          "username": "toma",
          "content": "it is A defiantly.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 636827,
          "date": "Mon 25 Jul 2022 18:38",
          "username": "nebojsaMa",
          "content": "B is correct see the link https://aws.amazon.com/about-aws/whats-new/2018/07/introducing-amazon-data-lifecycle-manager-for-ebs-snapshots/?nc1h_ls",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 630155,
          "date": "Mon 11 Jul 2022 19:48",
          "username": "nebojsaMa",
          "content": "B is correct https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 622415,
          "date": "Sun 26 Jun 2022 10:35",
          "username": "nqthien041292",
          "content": "Vote C",
          "upvote_count": "1",
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
      "question_text": "<p>A company has multiple child accounts that are part of an organization in AWS Organizations. The security team needs to review every Amazon EC2 security group and their inbound and outbound rules. The security team wants to programmatically retrieve this information from the child accounts using an AWS Lambda function in the management account of the organization.<br>Which combination of access changes will meet these requirements? (Choose three.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BCE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#65",
          "answers": [
            {
              "choice": "<p>A. Create a trust relationship that allows users in the child accounts to assume the management account IAM role.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a trust relationship that allows users in the management account to assume the IAM roles of the child accounts.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an IAM role in each child account that has access to the AmazonEC2ReadOnlyAccess managed policy.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM role in each child account to allow the sts:AssumeRole action against the management account IAM role's ARN.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an IAM role in the management account that allows the sts:AssumeRole action against the child account IAM role's ARN.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create an IAM role in the management account that has access to the AmazonEC2ReadOnlyAccess managed policy.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 65 discussion",
      "discusstion": [
        {
          "id": 688108,
          "date": "Thu 06 Oct 2022 23:32",
          "username": "Goozian",
          "content": "watch this AWS Video; well explained >https://www.youtube.com/watch?v20tr9gUY4i0",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 662907,
          "date": "Wed 07 Sep 2022 23:32",
          "username": "ohcn",
          "content": "BCE make sense.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 661992,
          "date": "Wed 07 Sep 2022 06:42",
          "username": "SamHan",
          "content": "Ans: BCE",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 659875,
          "date": "Mon 05 Sep 2022 09:44",
          "username": "helloworldabc",
          "content": "B,C,EEEEE",
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
      "question_text": "<p>An application is deployed on Amazon EC2 instances running in an Auto Scaling group. During the bootstrapping process, the instances register their private IP addresses with a monitoring system. The monitoring system performs health checks frequently by sending ping requests to those IP addresses and sending alerts if an instance becomes non-responsive.<br>The existing deployment strategy replaces the current EC2 instances with new ones. A DevOps Engineer has noticed that the monitoring system is sending false alarms during a deployment, and is tasked with stopping these false alarms.<br>Which solution will meet these requirements without affecting the current deployment method?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#66",
          "answers": [
            {
              "choice": "<p>A. Define an Amazon CloudWatch Events target, an AWS Lambda function, and a lifecycle hook attached to the Auto Scaling group. Configure CloudWatch Events to invoke Amazon SNS to send a message to the Systems Administrator group for remediation.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Define an AWS Lambda function and a lifecycle hook attached to the Auto Scaling group. Configure the lifecycle hook to invoke the Lambda function, which removes the entry of the private IP from the monitoring system upon instance termination.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Define an Amazon CloudWatch Events target, an AWS Lambda function, and a lifecycle hook attached to the Auto Scaling group. Configure CloudWatch Events to invoke the Lambda function, which removes the entry of the private IP from the monitoring system upon instance termination.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Define an AWS Lambda function that will run a script when instance termination occurs in an Auto Scaling group. The script will remove the entry of the private IP from the monitoring system.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 66 discussion",
      "discusstion": [
        {
          "id": 224522,
          "date": "Sat 23 Oct 2021 15:49",
          "username": "jackdryan",
          "content": "I'll go with C",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 735244,
          "date": "Sun 04 Dec 2022 17:31",
          "username": "Maygam",
          "content": "https://docs.aws.amazon.com/autoscaling/ec2/userguide/tutorial-lifecycle-hook-lambda.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 675544,
          "date": "Wed 21 Sep 2022 23:59",
          "username": "Goozian",
          "content": "\\\"C\\\"<br>ASG Lifecycle hook needs CloudWatch event to trigger Lambda",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 553192,
          "date": "Mon 21 Feb 2022 20:54",
          "username": "RightAnswersScofield_12",
          "content": "The question says that there are false alarms only during deployment. So, I don't understand why \\\"removing the entry of the private IP from the monitoring system upon instance termination\\\" will solve this problem. Obviously there is a process already in place to remove these IP address - otherwise there will be false alarms all the time, not during the deployment period only.<br>As stated in https://docs.aws.amazon.com/autoscaling/ec2/userguide/configuring-lifecycle-hook-notifications.html, you can use Amazon SNS to set up a notification target (an SNS topic) to receive notifications when a lifecycle action occurs. I am not sure what is the use of CloudWatchEvents and Lambda, when direct SNS notification is possible.<br>All the answers doesn't make sense - but I guess A may be closest.Option A would not stop the false alarm, you need an architecture that would take an action to stop the false alarm, not just notifying the admin",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 758766,
          "date": "Tue 27 Dec 2022 17:13",
          "username": "Scofield_12",
          "content": "Option A would not stop the false alarm, you need an architecture that would take an action to stop the false alarm, not just notifying the admin",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 387468,
          "date": "Thu 04 Nov 2021 02:42",
          "username": "D2",
          "content": "B is right for removing instance from monitoring system. C is not correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 253233,
          "date": "Wed 27 Oct 2021 17:29",
          "username": "gmandalagmandala",
          "content": "B is right. Why CW when ASG lifecycle hooks are tailor-made for this? Also, CW events on their own cannot keep the termination in wait before removing the id.On relook, i see lifecycle hooks still need CW events. So it has to be C. ",
          "upvote_count": "14",
          "selected_answers": ""
        },
        {
          "id": 253237,
          "date": "Sat 30 Oct 2021 20:45",
          "username": "gmandala",
          "content": "On relook, i see lifecycle hooks still need CW events. So it has to be C. ",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 238121,
          "date": "Mon 25 Oct 2021 12:17",
          "username": "dnevado",
          "content": "Not sure, no need for CW but Lambda alsoneedsto send notifications to a SNS topic which is not totally clear in the answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 219805,
          "date": "Wed 20 Oct 2021 10:10",
          "username": "xlFiremanxlFireman",
          "content": "I would go with B hereChange to C, You need CW Events or SNS with ASG Target Group to invoke lambda",
          "upvote_count": "14",
          "selected_answers": ""
        },
        {
          "id": 222179,
          "date": "Thu 21 Oct 2021 16:36",
          "username": "xlFireman",
          "content": "Change to C, You need CW Events or SNS with ASG Target Group to invoke lambda",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 209978,
          "date": "Sun 10 Oct 2021 08:57",
          "username": "ChauPhanChauPhanChauPhantarq",
          "content": "B.  Lifecycle hooks can invoke Lambda directly by BridgeEvent<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/configuring-lifecycle-hook-notifications.htmlRoute notifications to Lambda using EventBridge<br>You can use EventBridge to set up a target to invoke a Lambda function when a lifecycle action occurs.Sorry my mistake, we need CW Event, now they call it EventBridgeso correct answer is C",
          "upvote_count": "2124",
          "selected_answers": ""
        },
        {
          "id": 209980,
          "date": "Tue 12 Oct 2021 16:30",
          "username": "ChauPhanChauPhan",
          "content": "Route notifications to Lambda using EventBridge<br>You can use EventBridge to set up a target to invoke a Lambda function when a lifecycle action occurs.Sorry my mistake, we need CW Event, now they call it EventBridge",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 209990,
          "date": "Sun 17 Oct 2021 11:43",
          "username": "ChauPhan",
          "content": "Sorry my mistake, we need CW Event, now they call it EventBridge",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 351778,
          "date": "Wed 03 Nov 2021 18:28",
          "username": "tarq",
          "content": "so correct answer is C",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 207606,
          "date": "Thu 07 Oct 2021 17:28",
          "username": "Dgix",
          "content": "B.  CW Events not needed.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 202070,
          "date": "Sat 02 Oct 2021 18:20",
          "username": "Steve_DobbsSteve_DobbsChauPhanChauPhan",
          "content": "B. <br>Even in their own reference there is no need for cloutdwatch event trigger. You just need lifecycle hook and AWS lamda function.<br>https://aws.amazon.com/blogs/compute/using-aws-lambda-with-auto-scaling-lifecycle-hooks/Changing to C. <br>You need SNS topic to invoke lamdba from Lifecycle hooks. Without that you will need Cloudwatch Event.I see that LifeCycle hooks can invoke<br>1. Lambda by EventBridge<br>2. SNS<br>3. SQS.<br>I don't see CW Event involved hereSorry my mistake, we need CW Event, now they call it EventBridge",
          "upvote_count": "1221",
          "selected_answers": ""
        },
        {
          "id": 202074,
          "date": "Wed 06 Oct 2021 19:05",
          "username": "Steve_DobbsChauPhanChauPhan",
          "content": "Changing to C. <br>You need SNS topic to invoke lamdba from Lifecycle hooks. Without that you will need Cloudwatch Event.I see that LifeCycle hooks can invoke<br>1. Lambda by EventBridge<br>2. SNS<br>3. SQS.<br>I don't see CW Event involved hereSorry my mistake, we need CW Event, now they call it EventBridge",
          "upvote_count": "221",
          "selected_answers": ""
        },
        {
          "id": 209981,
          "date": "Wed 13 Oct 2021 07:38",
          "username": "ChauPhanChauPhan",
          "content": "I see that LifeCycle hooks can invoke<br>1. Lambda by EventBridge<br>2. SNS<br>3. SQS.<br>I don't see CW Event involved hereSorry my mistake, we need CW Event, now they call it EventBridge",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 209989,
          "date": "Sun 17 Oct 2021 00:09",
          "username": "ChauPhan",
          "content": "Sorry my mistake, we need CW Event, now they call it EventBridge",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 192124,
          "date": "Wed 22 Sep 2021 11:22",
          "username": "oku",
          "content": "A : As Devops Engineer is tasked with stopping these false alarms only without affecting current Deployment Model .",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 162428,
          "date": "Tue 21 Sep 2021 05:35",
          "username": "getawaycar",
          "content": "They changed the name of Cloudwatch Events to EventBridge https://docs.aws.amazon.com/autoscaling/ec2/userguide/cloud-watch-events.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 158375,
          "date": "Mon 20 Sep 2021 13:47",
          "username": "Smart",
          "content": "C is relevant and correct.<br>SNS Notification would have been nice as well.",
          "upvote_count": "4",
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
      "question_text": "<p>An e-commerce company is running a web application in an AWS Elastic Beanstalk environment. In recent months, the average load of the Amazon EC2 instances has been increased to handle more traffic.<br>The company would like to improve the scalability and resilience of the environment. The Development team has been asked to decouple long-running tasks from the environment if the tasks can be executed asynchronously. Examples of these tasks include confirmation emails when users are registered to the platform, and processing images or videos. Also, some of the periodic tasks that are currently running within the web server should be offloaded.<br>What is the MOST time-efficient and integrated way to achieve this?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#67",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon SQS queue and send the tasks that should be decoupled from the Elastic Beanstalk web server environment to the SQS queue. Create a fleet of EC2 instances under an Auto Scaling group. Use an AMI that contains the application to process the asynchronous tasks, configure the application to listen for messages within the SQS queue, and create periodic tasks by placing those into the cron in the operating system. Create an environment variable within the Elastic Beanstalk environment with a value pointing to the SQS queue endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a second Elastic Beanstalk worker tier environment and deploy the application to process the asynchronous tasks there. Send the tasks that should be decoupled from the original Elastic Beanstalk web server environment to the auto-generated Amazon SQS queue by the Elastic Beanstalk worker environment. Place a cron.yaml file within the root of the application source bundle for the worker environment for periodic tasks. Use environment links to link the web server environment with the worker environment.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a second Elastic Beanstalk web server tier environment and deploy the application to process the asynchronous tasks. Send the tasks that should be decoupled from the original Elastic Beanstalk web server to the auto-generated Amazon SQS queue by the second Elastic Beanstalk web server tier environment. Place a cron.yaml file within the root of the application source bundle for the second web server tier environment with the necessary periodic tasks. Use environment links to link both web server environments.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon SQS queue and send the tasks that should be decoupled from the Elastic Beanstalk web server environment to the SQS queue. Create a fleet of EC2 instances under an Auto Scaling group. Install and configure the application to listen for messages within the SQS queue from UserData and create periodic tasks by placing those into the cron in the operating system. Create an environment variable within the Elastic Beanstalk web server environment with a value pointing to the SQS queue endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 67 discussion",
      "discusstion": [
        {
          "id": 28680,
          "date": "Wed 22 Sep 2021 06:01",
          "username": "Sunil86rbk",
          "content": "B<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features-managing-env-tiers.html",
          "upvote_count": "14",
          "selected_answers": ""
        },
        {
          "id": 621752,
          "date": "Fri 24 Jun 2022 18:05",
          "username": "nqthien041292",
          "content": "Vote B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 223339,
          "date": "Fri 05 Nov 2021 18:51",
          "username": "jackdryan",
          "content": "I'll go with B",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 207751,
          "date": "Fri 05 Nov 2021 06:02",
          "username": "ChauPhan",
          "content": "B looks right.<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts-worker.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 62229,
          "date": "Fri 22 Oct 2021 20:22",
          "username": "yassu",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 56772,
          "date": "Tue 12 Oct 2021 15:31",
          "username": "xaocho",
          "content": "It is B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 34224,
          "date": "Fri 08 Oct 2021 21:38",
          "username": "un",
          "content": "B is the right answer ... Link provided by Sunil86rbk has the details",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 31523,
          "date": "Fri 08 Oct 2021 14:34",
          "username": "ppshein",
          "content": "it should be B, because of worker.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 30742,
          "date": "Fri 08 Oct 2021 06:06",
          "username": "amzngenius",
          "content": "B: decouple long-running tasks and executed asynchronously",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 22941,
          "date": "Mon 20 Sep 2021 01:36",
          "username": "Arragon",
          "content": "B is right since you need the SQS function which is available in the worker tier. https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 22424,
          "date": "Mon 20 Sep 2021 01:25",
          "username": "BeastX",
          "content": "B looks right for me",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#68",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an on-premises that is written in Go. A DevOps engineer must move the application to AWS. The company's development team wants to enable blue/green deployments and perform A/B testing.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#68",
          "answers": [
            {
              "choice": "<p>A. Deploy the application on an Amazon EC2 instance and create an AMI of this instance. Use this AMI to create an automatic scaling launch configuration that is used in an Auto Scaling group. Use an Elastic Load Balancer to distribute traffic. When changes are made to the application, a new AMI will be created, which will initiate an EC2 instance refresh.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon Lightsail to deploy the application. Store the application in a zipped format in an Amazon S3 bucket. Use this zipped version to deploy new versions of the application to Lightsail. Use Lightsail deployment options to manage the deployment.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS CodeArtifact to store the application code. Use AWS CodeDeploy to deploy the application to a fleet of Amazon EC2 instances. Use Elastic Load Balancing to distribute the traffic to the EC2 instances. When making changes to the application, upload a new version to CodeArtifact and create a new CodeDeploy deployment.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Elastic Beanstalk to host the application. Store a zipped version of the application in Amazon S3, and use that location to deploy new versions of the application using Elastic Beanstalk to manage the deployment options.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 68 discussion",
      "discusstion": [
        {
          "id": 735263,
          "date": "Sun 04 Dec 2022 17:57",
          "username": "Maygam",
          "content": "https://d1.awsstatic.com/whitepapers/AWS_Blue_Green_Deployments.pdf",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 718685,
          "date": "Tue 15 Nov 2022 12:18",
          "username": "Dakshi",
          "content": "Ans is D",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 689818,
          "date": "Sun 09 Oct 2022 03:26",
          "username": "mvsnogueira2022",
          "content": "Why the default answer is A ? Where the blue/green ? Where is the test ?<br>My answer is D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 678780,
          "date": "Sun 25 Sep 2022 14:34",
          "username": "youonebe",
          "content": "answer is d",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 675719,
          "date": "Thu 22 Sep 2022 05:50",
          "username": "Goozian",
          "content": "When an application is developed and deployed to an AWS Elastic Beanstalk environment, having two separate, but identical, environments=E2=80=94blue and green=E2=80=94increases availability and reduces risk.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 672833,
          "date": "Mon 19 Sep 2022 02:57",
          "username": "bigdoodGoozian",
          "content": "The answer is C.  You can deploy via blue/green in CodeDeploy.what about A/B Test ? no mention about CodeBuild in C",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 675717,
          "date": "Thu 22 Sep 2022 05:46",
          "username": "Goozian",
          "content": "what about A/B Test ? no mention about CodeBuild in C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 655606,
          "date": "Thu 01 Sep 2022 02:00",
          "username": "ohcn",
          "content": "D - https://www.examtopics.com/discussions/amazon/view/28618-exam-aws-devops-engineer-professional-topic-1-question-184/",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#69",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An application runs on Amazon EC2 instances behind an Application Load Balancer (ALB). A DevOps Engineer is using AWS CodeDeploy to release a new version. The deployment fails during the AllowTraffic lifecycle event, but a cause for the failure is not indicated in the deployment logs.<br>What would cause this?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#69",
          "answers": [
            {
              "choice": "<p>A. The appspec.yml file contains an invalid script to execute in the AllowTraffic lifecycle hook.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The user who initiated the deployment does not have the necessary permissions to interact with the ALB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The health checks specified for the ALB target group are misconfigured.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. The CodeDeploy agent was not installed in the EC2 instances that are part of the ALB target group.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 69 discussion",
      "discusstion": [
        {
          "id": 209778,
          "date": "Fri 22 Oct 2021 11:23",
          "username": "ChauPhanChauPhan",
          "content": "A is incorrect because \\\"The Start, Install, TestTraffic, AllowTraffic, and End events in the deployment cannot be scripted, which is why they appear in gray in this diagram.\\\"<br>https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.htmlB. D is incorrect because if the permission or CodeDeploy agent is not installed, the deploy will not go to AllowTraffic hook, it will be fail prior to AllowTraffic.So C is correct",
          "upvote_count": "104",
          "selected_answers": ""
        },
        {
          "id": 209779,
          "date": "Mon 01 Nov 2021 19:52",
          "username": "ChauPhan",
          "content": "So C is correct",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 224229,
          "date": "Sat 06 Nov 2021 21:26",
          "username": "jackdryan",
          "content": "I'll go with C",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 675731,
          "date": "Thu 22 Sep 2022 06:31",
          "username": "Goozian",
          "content": "This failure is typically due to incorrectly configured health checks in Elastic Load Balancing for the Classic Load Balancer, Application Load Balancer, or Network Load Balancer used to manage traffic for the deployment group.<br>To resolve the issue, review and correct any errors in the health check configuration for the load balancer.<br><br>https://docs.aws.amazon.com/codedeploy/latest/userguide/troubleshooting-deployments.html#troubleshooting-deployments-allowtraffic-no-logs",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 477999,
          "date": "Sun 14 Nov 2021 09:08",
          "username": "asjak",
          "content": "correct is C --- https://docs.aws.amazon.com/codedeploy/latest/userguide/troubleshooting-deployments.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 219786,
          "date": "Thu 04 Nov 2021 01:03",
          "username": "xlFireman",
          "content": "After reading through the explanations and links here, I agree with all. C is the best choice, thanks everyone for the tips!",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 177259,
          "date": "Fri 22 Oct 2021 06:14",
          "username": "hyperme",
          "content": "A - AllowTraffic is not a user managed hook<br>B - permissions managed by CodeDeploy role, not user. And if we on the AllowTraffic step, then we were able to block LB traffic<br>C - right<br>D - if there was no agent the job would fail on earlier steps",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 155440,
          "date": "Mon 27 Sep 2021 13:43",
          "username": "jxp09skipbaylessfor3",
          "content": "C<br>In some cases, a blue/green deployment fails during the AllowTraffic lifecycle event, but the deployment logs do not indicate the cause for the failure.<br><br>This failure is typically due to incorrectly configured health checks in Elastic Load Balancing for the Classic Load Balancer, Application Load Balancer, or Network Load Balancer used to manage traffic for the deployment group.<br><br>To resolve the issue, review and correct any errors in the health check configuration for the load balancer.<br><br>For Classic Load Balancers, see Configure Health Checks in the User Guide for Classic Load Balancers and ConfigureHealthCheck in the Elastic Load Balancing API Reference version 2012-06-01.<br><br>For Application Load Balancers, see Health Checks for Your Target Groups in the User Guide for Application Load Balancers.<br><br>For Network Load Balancers, see Health Checks for Your Target Groups in the Network Load Balancer User Guide.^That sounds right to me. Here's the link where all of that is said:<br>https://docs.aws.amazon.com/codedeploy/latest/userguide/troubleshooting-deployments.html",
          "upvote_count": "52",
          "selected_answers": ""
        },
        {
          "id": 168770,
          "date": "Sun 03 Oct 2021 19:03",
          "username": "skipbaylessfor3",
          "content": "^That sounds right to me. Here's the link where all of that is said:<br>https://docs.aws.amazon.com/codedeploy/latest/userguide/troubleshooting-deployments.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 155216,
          "date": "Mon 20 Sep 2021 01:22",
          "username": "Augustoosouza",
          "content": "Ans: C<br>https://docs.aws.amazon.com/pt_br/elasticloadbalancing/latest/application/target-group-health-checks.html",
          "upvote_count": "5",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#70",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a single developer writing code for an automated deployment pipeline. The developer is storing source code in an Amazon S3 bucket for each project. The company wants to add more developers to the team but is concerned about code conflicts and lost work. The company also wants to build a test environment to deploy newer versions of code for testing and allow developers to automatically deploy to both environments when code is changed in the repository.<br>What is the MOST efficient way to meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#70",
          "answers": [
            {
              "choice": "<p>A. Create an AWS CodeCommit repository for each project, use the main branch for production code, and create a testing branch for code deployed to testing. Use feature branches to develop new features and pull requests to merge code to testing and main branches.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create another S3 bucket for each project for testing code, and use an AWS Lambda function to promote code changes between testing and production buckets. Enable versioning on all buckets to prevent code conflicts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS CodeCommit repository for each project, and use the main branch for production and test code with different deployment pipelines for each environment. Use feature branches to develop new features.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable versioning and branching on each S3 bucket, use the main branch for production code, and create a testing branch for code deployed to testing. Have developers use each branch for developing in each environment.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 70 discussion",
      "discusstion": [
        {
          "id": 37073,
          "date": "Fri 01 Oct 2021 03:51",
          "username": "dinhvu",
          "content": "the correct answer is A",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 199827,
          "date": "Mon 11 Oct 2021 12:33",
          "username": "shankyup43WhyIronManis4_JohnnieWalker",
          "content": "The answer should be C because of below line in the question: \\\"allow Developers to automatically deploy to both environments when code is changed in the repository\\\".<br>Option A does not talk about deployment.So, you want deploy do production without test? what warranties you that the code is functional and its not broken?<br><br>Genius strategyI accidentally liked your answer, but I don't. Nobody is saying that you should not test the code deployed to test environment before proceeding to deploy it to production. How will you know that it is the same code that is deployed in test and production if you deploy from different branches? I'm a developer so I should know :) You're not so genius yourself.I think it is (C) too because it has a pipeline for deployment and this is a requirement.<br>(A) doesnt mention deployment, there is no pipelines.<br>Regarding WhyIronMan comment, it doesnt mention it will deploy to production without test, in fact it will have 3 pipelines dev, test and prod, so the code will be tested on the test pipeline, and then deployed to prod as they are separate pipelines.",
          "upvote_count": "6422",
          "selected_answers": ""
        },
        {
          "id": 324232,
          "date": "Tue 26 Oct 2021 01:10",
          "username": "WhyIronManis4_",
          "content": "So, you want deploy do production without test? what warranties you that the code is functional and its not broken?<br><br>Genius strategyI accidentally liked your answer, but I don't. Nobody is saying that you should not test the code deployed to test environment before proceeding to deploy it to production. How will you know that it is the same code that is deployed in test and production if you deploy from different branches? I'm a developer so I should know :) You're not so genius yourself.",
          "upvote_count": "42",
          "selected_answers": ""
        },
        {
          "id": 439174,
          "date": "Sat 06 Nov 2021 02:18",
          "username": "is4_",
          "content": "I accidentally liked your answer, but I don't. Nobody is saying that you should not test the code deployed to test environment before proceeding to deploy it to production. How will you know that it is the same code that is deployed in test and production if you deploy from different branches? I'm a developer so I should know :) You're not so genius yourself.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 353851,
          "date": "Thu 04 Nov 2021 20:46",
          "username": "JohnnieWalker",
          "content": "I think it is (C) too because it has a pipeline for deployment and this is a requirement.<br>(A) doesnt mention deployment, there is no pipelines.<br>Regarding WhyIronMan comment, it doesnt mention it will deploy to production without test, in fact it will have 3 pipelines dev, test and prod, so the code will be tested on the test pipeline, and then deployed to prod as they are separate pipelines.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 765102,
          "date": "Tue 03 Jan 2023 23:36",
          "username": "saeidp",
          "content": "I'll go with A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 758536,
          "date": "Tue 27 Dec 2022 14:20",
          "username": "Chinta",
          "content": "Answer is A ,as per the question you have to eploy new version of code for testing",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 721417,
          "date": "Fri 18 Nov 2022 17:37",
          "username": "USalo",
          "content": "C. <br>It cannot be A because you make the same PR to both branches at the same time ONLY when you need a hotfix to prod and test env. In real world you develop in one branch and when you need a release you merge all the dev branch to prod branch (or create a new version from dev branch if you need to support multiple versions).But you NEVER EVER make PRs to both dev and prod branches during development.<br>If you both branches are always the same - why do you need 2 branches ? If your master and testing branches differ then at some point you will have conflicts.<br>Only C makes sense.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 680186,
          "date": "Mon 26 Sep 2022 23:31",
          "username": "RightAnswers",
          "content": "With a different test branch, there is no way to know if the same code is deployed to two different environments.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 665749,
          "date": "Sun 11 Sep 2022 03:20",
          "username": "MichaelExam",
          "content": "I choice A<br>The difference between A and C is that C uses master branch for the production and testing environment, A uses different branches for the production and testing environment. The better way is A. <br>B,D S3 is not good choice for team working.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 648587,
          "date": "Thu 18 Aug 2022 21:13",
          "username": "jexam211",
          "content": "Honestly a prefer 3 different branches, A option<br><br>Event with the C option different pipelines, which event is triggering the pipeline, when i push the commit in the test/prod branch bad idea, manual trigger? not too devOps at least, another type of trigger maybe add more complexity.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 561252,
          "date": "Sat 05 Mar 2022 06:57",
          "username": "[Removed]",
          "content": "different codepipelines for the same branch seems normal",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 324236,
          "date": "Wed 03 Nov 2021 03:52",
          "username": "WhyIronManis4_gofavad926",
          "content": "I'll go with A. <br><br>for those choosing C:<br>So, do you want deploy do production without testing first?<br>what warranties you that the code is functional and its not broken?<br><br>Yeah, keep deploying untested code to production...its a genius strategyYou often deploy from the same branch so that you know that it is the same code running in all environments. How will you know this otherwise? That can be really unstable if you dont have a pipeline set up that makes sure that no one can push to the master branch anywhere else than from this \\\"test branch\\\".<br>But you ALWAYS test the code in the test / staging environment before proceeding to deploy it to production. This is how its often done (ofc exceptions exists) and it is a very good strategy. I bet y'all answering here have no experience working as developers, I have and I know this.Agree with C, talking about branch strategy (only master for 2 environments) and mention deployments.<br><br>A is not talking about deployment so you are not meeting the requirements... only mention branch strategy (in more detail and different from A)",
          "upvote_count": "443",
          "selected_answers": ""
        },
        {
          "id": 439179,
          "date": "Sun 07 Nov 2021 13:55",
          "username": "is4_gofavad926",
          "content": "You often deploy from the same branch so that you know that it is the same code running in all environments. How will you know this otherwise? That can be really unstable if you dont have a pipeline set up that makes sure that no one can push to the master branch anywhere else than from this \\\"test branch\\\".<br>But you ALWAYS test the code in the test / staging environment before proceeding to deploy it to production. This is how its often done (ofc exceptions exists) and it is a very good strategy. I bet y'all answering here have no experience working as developers, I have and I know this.Agree with C, talking about branch strategy (only master for 2 environments) and mention deployments.<br><br>A is not talking about deployment so you are not meeting the requirements... only mention branch strategy (in more detail and different from A)",
          "upvote_count": "43",
          "selected_answers": ""
        },
        {
          "id": 509462,
          "date": "Sun 26 Dec 2021 08:11",
          "username": "gofavad926",
          "content": "Agree with C, talking about branch strategy (only master for 2 environments) and mention deployments.<br><br>A is not talking about deployment so you are not meeting the requirements... only mention branch strategy (in more detail and different from A)",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 322037,
          "date": "Thu 21 Oct 2021 07:28",
          "username": "aws_Tamilan",
          "content": "Correct Answer: C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 305305,
          "date": "Sun 17 Oct 2021 08:45",
          "username": "rscloud",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 235676,
          "date": "Sat 16 Oct 2021 21:07",
          "username": "dnevado",
          "content": "Agreed with A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 223253,
          "date": "Fri 15 Oct 2021 08:41",
          "username": "jackdryan",
          "content": "I'll go with A",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 219105,
          "date": "Thu 14 Oct 2021 02:12",
          "username": "awsrook",
          "content": "A. https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 218956,
          "date": "Tue 12 Oct 2021 19:42",
          "username": "cloudylandWhyIronManis4_",
          "content": "Prefer to C.  I don't see a problem using the master branch for both prod and test environments in an agile team. For A, don't think merging PR to 2 branches is not good practice.So, you want deploy do production without test? what warranties you that the code is functional and its not broken?<br><br>Genius strategyYou typically want to make sure that it is always the same code revision that is deployed to BOTH test and production environments. Therefore, you always deploy the MASTER branch to BOTH environments but in stages - first to test and after successfully tested that environment, you proceed to production. So there is nothing stupid about that answer.",
          "upvote_count": "313",
          "selected_answers": ""
        },
        {
          "id": 324234,
          "date": "Fri 29 Oct 2021 22:17",
          "username": "WhyIronManis4_",
          "content": "So, you want deploy do production without test? what warranties you that the code is functional and its not broken?<br><br>Genius strategyYou typically want to make sure that it is always the same code revision that is deployed to BOTH test and production environments. Therefore, you always deploy the MASTER branch to BOTH environments but in stages - first to test and after successfully tested that environment, you proceed to production. So there is nothing stupid about that answer.",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 439173,
          "date": "Fri 05 Nov 2021 22:58",
          "username": "is4_",
          "content": "You typically want to make sure that it is always the same code revision that is deployed to BOTH test and production environments. Therefore, you always deploy the MASTER branch to BOTH environments but in stages - first to test and after successfully tested that environment, you proceed to production. So there is nothing stupid about that answer.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 206854,
          "date": "Tue 12 Oct 2021 12:09",
          "username": "ChauPhan",
          "content": "It's A",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#71",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A development team is building an ecommerce application and is using Amazon Simple Notification Service (Amazon SNS) to send order messages to multiple endpoints. One of the endpoints is an external HTTP endpoint that is not always available. The development team needs to receive a notification if an order message is not delivered to the HTTP endpoint.<br>What should a DevOps engineer do to meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#71",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon Simple Queue Service (Amazon SQS) queue. On the SNS topic, configure a redrive policy that sends undelivered messages to the SQS queue. Create an Amazon CloudWatch alarm for the new SQS queue to notify the development team when messages are delivered to the queue.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon Simple Queue Service (Amazon SQS) queue. On the HTTP endpoint subscription of the SNS topic, configure a redrive policy that sends undelivered messages to the SQS queue. Create an Amazon CloudWatch alarm for the new SQS queue to notify the development team when messages are delivered to the queue.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. On the SNS topic, configure an HTTPS delivery policy that will retry delivery until the order message is delivered successfully. Configure the backoffFunction parameter in the policy to notify the development team when a message cannot be delivered within the set constraints.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. On the HTTP endpoint subscription of the SNS topic, configure an HTTPS delivery policy that will retry delivery until the order message is delivered successfully. Configure the backoffFunction parameter in the policy to notify the development team when a message cannot be delivered within the set constraints.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 71 discussion",
      "discusstion": [
        {
          "id": 758542,
          "date": "Tue 27 Dec 2022 14:23",
          "username": "Chinta",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 728774,
          "date": "Mon 28 Nov 2022 05:24",
          "username": "Paresh_Jadhav",
          "content": "B make sense<br>https://docs.aws.amazon.com/sns/latest/dg/sns-message-delivery-retries.html<br><br>\\\"To keep the message after the retries specified in the delivery policy are exhausted, configure your subscription to move undeliverables messages to a dead-letter queue (DLQ).\\\"<br><br>https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-available-cloudwatch-metrics.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 725556,
          "date": "Thu 24 Nov 2022 05:38",
          "username": "kyozanuro",
          "content": "Voted B, because backoffFunction is just a definition algorithm of backoff retry, cannot use it to notify the team.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 672055,
          "date": "Sun 18 Sep 2022 09:06",
          "username": "hankun",
          "content": "B is true.<br>C, D is Https endpoint not http",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 668625,
          "date": "Wed 14 Sep 2022 07:20",
          "username": "MikeyJ",
          "content": "You can use Amazon CloudWatch metrics to monitor dead-letter queues associated with your Amazon SNS subscriptions. All Amazon SQS queues emit CloudWatch metrics at one-minute intervals.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 667884,
          "date": "Tue 13 Sep 2022 12:42",
          "username": "syaldram",
          "content": "The answer is B:<br>https://docs.aws.amazon.com/sns/latest/dg/sns-dead-letter-queues.html<br><br>The dead letter queue for SNS are SQS.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 660482,
          "date": "Mon 05 Sep 2022 21:10",
          "username": "ohcnohcnnetwork_zeal",
          "content": "C makes sense.In fact might be D because one of the HTTP endpoints is not always available.<br><br>\\\"You should customize your delivery policy according to your HTTP/S server's capacity. You can set the policy as a topic attribute or a subscription attribute. If all HTTP/S subscriptions in your topic target the same HTTP/S server, we recommend that you set the delivery policy as a topic attribute, so that it remains valid for all HTTP/S subscriptions in the topic. Otherwise, you must compose a delivery policy for each HTTP/S subscription in your topic, according the capacity of the HTTP/S server that the policy targets.\\\"\\\"<br><br>https://docs.aws.amazon.com/sns/latest/dg/sns-message-delivery-retries.htmlD is incorrect. the same link clearly mentions, When the delivery policy is exhausted, Amazon SNS stops retrying the delivery and discards the message=E2=80=94unless a dead-letter queue is attached to the subscription. So B is correct.",
          "upvote_count": "111",
          "selected_answers": ""
        },
        {
          "id": 663650,
          "date": "Thu 08 Sep 2022 15:22",
          "username": "ohcnnetwork_zeal",
          "content": "In fact might be D because one of the HTTP endpoints is not always available.<br><br>\\\"You should customize your delivery policy according to your HTTP/S server's capacity. You can set the policy as a topic attribute or a subscription attribute. If all HTTP/S subscriptions in your topic target the same HTTP/S server, we recommend that you set the delivery policy as a topic attribute, so that it remains valid for all HTTP/S subscriptions in the topic. Otherwise, you must compose a delivery policy for each HTTP/S subscription in your topic, according the capacity of the HTTP/S server that the policy targets.\\\"\\\"<br><br>https://docs.aws.amazon.com/sns/latest/dg/sns-message-delivery-retries.htmlD is incorrect. the same link clearly mentions, When the delivery policy is exhausted, Amazon SNS stops retrying the delivery and discards the message=E2=80=94unless a dead-letter queue is attached to the subscription. So B is correct.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 672248,
          "date": "Sun 18 Sep 2022 12:56",
          "username": "network_zeal",
          "content": "D is incorrect. the same link clearly mentions, When the delivery policy is exhausted, Amazon SNS stops retrying the delivery and discards the message=E2=80=94unless a dead-letter queue is attached to the subscription. So B is correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 660419,
          "date": "Mon 05 Sep 2022 20:01",
          "username": "costin",
          "content": "I vote for B",
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
      "question_text": "<p>A company is deploying a container-based application using AWS CodeBuild. The Security team mandates that all containers are scanned for vulnerabilities prior to deployment using a password-protected endpoint. All sensitive information must be stored securely.<br>Which solution should be used to meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#72",
          "answers": [
            {
              "choice": "<p>A. Encrypt the password using AWS KMS. Store the encrypted password in the buildspec.yml file as an environment variable under the variables mapping. Reference the environment variable to initiate scanning.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Import the password into an AWS CloudHSM key. Reference the CloudHSM key in the buildpec.yml file as an environment variable under the variables mapping. Reference the environment variable to initiate scanning.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Store the password in the AWS Systems Manager Parameter Store as a secure string. Add the Parameter Store key to the buildspec.yml file as an environment variable under the parameter-store mapping. Reference the environment variable to initiate scanning.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the AWS Encryption SDK to encrypt the password and embed in the buildspec.yml file as a variable under the secrets mapping. Attach a policy to CodeBuild to enable access to the required decryption key.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 72 discussion",
      "discusstion": [
        {
          "id": 155219,
          "date": "Sun 03 Oct 2021 00:19",
          "username": "Augustoosouza",
          "content": "Ans C<br>https://docs.aws.amazon.com/pt_br/codebuild/latest/userguide/build-spec-ref.html",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 745671,
          "date": "Thu 15 Dec 2022 04:41",
          "username": "saggy4",
          "content": "It is C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 253098,
          "date": "Mon 01 Nov 2021 20:30",
          "username": "gmandala",
          "content": "C it is",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 238037,
          "date": "Thu 28 Oct 2021 01:18",
          "username": "dnevado",
          "content": "Its completely C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 224230,
          "date": "Fri 15 Oct 2021 11:03",
          "username": "jackdryan",
          "content": "I'll go with C",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 209781,
          "date": "Sat 09 Oct 2021 18:46",
          "username": "ChauPhan",
          "content": "C is fine",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 172213,
          "date": "Fri 08 Oct 2021 21:29",
          "username": "incorrigble_maverick",
          "content": "C without a shadow of a doubt",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 163407,
          "date": "Fri 08 Oct 2021 07:57",
          "username": "halfway",
          "content": "C. <br>Store password in System manager parameter store.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 162258,
          "date": "Wed 06 Oct 2021 21:27",
          "username": "krrish96",
          "content": "I will go with C",
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
      "question_text": "<p>A company is migrating an application to AWS that runs on a single Amazon EC2 instance. Because of licensing limitations, the application does not support horizontal scaling. The application will be using Amazon Aurora for its database.<br>How can the DevOps Engineer architect automated healing to automatically recover from EC2 and Aurora failures, in addition to recovering across Availability<br>Zones (AZs), in the MOST cost-effective manner?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#73",
          "answers": [
            {
              "choice": "<p>A. Create an EC2 Auto Scaling group with a minimum and maximum instance count of 1, and have it span across AZs. Use a single-node Aurora instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an EC2 instance and enable instance recovery. Create an Aurora database with a read replica in a second AZ, and promote it to a primary database instance if the primary database instance fails.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon CloudWatch Events rule to trigger an AWS Lambda function to start a new EC2 instance in an available AZ when the instance status reaches a failure state. Create an Aurora database with a read replica in a second AZ, and promote it to a primary database instance when the primary database instance fails.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Assign an Elastic IP address on the instance. Create a second EC2 instance in a second AZ. Create an Amazon CloudWatch Events rule to trigger an AWS Lambda function to move the Elastic IP address to the second instance when the first instance fails. Use a single-node Aurora instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 73 discussion",
      "discusstion": [
        {
          "id": 28411,
          "date": "Wed 22 Sep 2021 21:35",
          "username": "jiedee",
          "content": "I go with C",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 96691,
          "date": "Tue 12 Oct 2021 04:58",
          "username": "PeppaPig30thNickhiahiahia",
          "content": "C is correct.<br>Let's break it down:<br>A- Single Aurora instance only supports auto recovery in the same AZ.Nope<br>B- EC2 auto recovery only supports recovery from system failure due to underlying hardware. Nope<br>C- Correct <br>D- Having two EC2 instances running at the same time is not cost-effective at all. NopeWho said the recovery from system failure is not sufficient? The question mentions only \\\"EC2 failures\\\". Application failures recovery was not required. \\\"C\\\" misses the traffic rerouting configuration (which could be tricky without an ASG). \\\"B\\\" is the right answer.what about across AZ recovery?",
          "upvote_count": "931",
          "selected_answers": ""
        },
        {
          "id": 382286,
          "date": "Tue 02 Nov 2021 17:29",
          "username": "30thNickhiahiahia",
          "content": "Who said the recovery from system failure is not sufficient? The question mentions only \\\"EC2 failures\\\". Application failures recovery was not required. \\\"C\\\" misses the traffic rerouting configuration (which could be tricky without an ASG). \\\"B\\\" is the right answer.what about across AZ recovery?",
          "upvote_count": "31",
          "selected_answers": ""
        },
        {
          "id": 764743,
          "date": "Tue 03 Jan 2023 15:29",
          "username": "Nickhiahiahia",
          "content": "what about across AZ recovery?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 511605,
          "date": "Tue 28 Dec 2021 22:57",
          "username": "sg0206",
          "content": "if you spin another instance, tht is voilation of license so option B is not correct.<br>C option will start only one instance at a time after failure.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 382285,
          "date": "Sat 30 Oct 2021 16:45",
          "username": "30thStelSenRightAnswerssg0206",
          "content": "\\\"B\\\" seems to be the right answer. The answer could be a bit longer, because the Autorecovery involves CloudWatch and requires more work than just \\\"enabling\\\". But I think \\\"B\\\" is still the best answer.<br><br>https://medium.com/how-to-enable-autorecovery-in-ec2-instance-in-aws/how-to-enable-autorecovery-in-ec2-instance-e3fec149fad8<br><br>The main problem of \\\"C\\\" is that is doesn't include the traffic rerouting.i checked the link you provided. They didnt talk aboutAZ failure situation. Here is the official links: https://docs.amazonaws.cn/en_us/AWSEC2/latest/UserGuide/ec2-instance-recover.html<br>Here also they didn't mention about AZ failure situation. So unfortunatelyis wrongSince there is a licensing constraint, only Ans B seems right. Auto Recovery is the only option where the license will get transferred, since Auto Recovery has the following features.<br>=C2=B7 The running instance is automatically transferred to the new underlying hardware.<br>=C2=B7 There is no need of migration to a new EC2 instance.<br>=C2=B7 The instance-id does not get changed.<br>=C2=B7 The IP address, if it is an Elastic IP address remain same.<br>=C2=B7 The instance metadata and the private IP addresses also remain same.<br>However, the issue with Ans B is that it doesn't address AZ failover scenario. Ans C addresses the AZ failover but not the license transfer.<br>I guess none of the answers are correct.if you spin another instance, tht is voilation of license so option B is not correct",
          "upvote_count": "1111",
          "selected_answers": ""
        },
        {
          "id": 427406,
          "date": "Sun 07 Nov 2021 15:39",
          "username": "StelSenRightAnswers",
          "content": "i checked the link you provided. They didnt talk aboutAZ failure situation. Here is the official links: https://docs.amazonaws.cn/en_us/AWSEC2/latest/UserGuide/ec2-instance-recover.html<br>Here also they didn't mention about AZ failure situation. So unfortunatelyis wrongSince there is a licensing constraint, only Ans B seems right. Auto Recovery is the only option where the license will get transferred, since Auto Recovery has the following features.<br>=C2=B7 The running instance is automatically transferred to the new underlying hardware.<br>=C2=B7 There is no need of migration to a new EC2 instance.<br>=C2=B7 The instance-id does not get changed.<br>=C2=B7 The IP address, if it is an Elastic IP address remain same.<br>=C2=B7 The instance metadata and the private IP addresses also remain same.<br>However, the issue with Ans B is that it doesn't address AZ failover scenario. Ans C addresses the AZ failover but not the license transfer.<br>I guess none of the answers are correct.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 522303,
          "date": "Wed 12 Jan 2022 17:33",
          "username": "RightAnswers",
          "content": "Since there is a licensing constraint, only Ans B seems right. Auto Recovery is the only option where the license will get transferred, since Auto Recovery has the following features.<br>=C2=B7 The running instance is automatically transferred to the new underlying hardware.<br>=C2=B7 There is no need of migration to a new EC2 instance.<br>=C2=B7 The instance-id does not get changed.<br>=C2=B7 The IP address, if it is an Elastic IP address remain same.<br>=C2=B7 The instance metadata and the private IP addresses also remain same.<br>However, the issue with Ans B is that it doesn't address AZ failover scenario. Ans C addresses the AZ failover but not the license transfer.<br>I guess none of the answers are correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 511602,
          "date": "Tue 28 Dec 2021 22:55",
          "username": "sg0206",
          "content": "if you spin another instance, tht is voilation of license so option B is not correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 324192,
          "date": "Thu 28 Oct 2021 18:08",
          "username": "WhyIronMan30th",
          "content": "I'll go with C<br><br>A & D are wrong because mention to \\\"Use a single-node Aurora instance\\\" so in case of az-failure DB will be permanently down<br><br>B is wrong because, in case of AZ Failure, enable instance recoverywill NOT \\\"recovery\\\" the ec2 in a new AZ.Are you sure? I didn't find an availability zone stickiness regarding Auto-Recovery.",
          "upvote_count": "31",
          "selected_answers": ""
        },
        {
          "id": 382290,
          "date": "Thu 04 Nov 2021 16:46",
          "username": "30th",
          "content": "Are you sure? I didn't find an availability zone stickiness regarding Auto-Recovery.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 322029,
          "date": "Wed 27 Oct 2021 23:01",
          "username": "aws_Tamilan",
          "content": "C.  Create an Amazon CloudWatch Events rule to trigger an AWS Lambda function to start a new EC2 instance in an available AZ when the instance status reaches a failure state. Create an Aurora database with a read replica in a second AZ and promote it to a primary database instance when the primary database instance fails.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 255007,
          "date": "Wed 27 Oct 2021 22:45",
          "username": "[Removed]30th",
          "content": "If C is the answer it's incomplete and has a subtle error: The CloudWatch recovery option works only for system check failures, not for instance status check failures. https://aws.amazon.com/premiumsupport/knowledge-center/automatic-recovery-ec2-cloudwatch/.<br>Also it doesn't mention how to configure the license on the new instance. Usually answers with assumptions are not correct.<br>A fails on the DB layer The only possible answer is B. I think we are allowed to assume the license is only a contract without technical limitation. A bigger problem of \\\"C\\\" is the traffic rerouting. This issue is included in \\\"D\\\", but not mentioned in \\\"C\\\". I agree with you, \\\"B\\\" is the better answer.",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 382292,
          "date": "Sat 06 Nov 2021 20:08",
          "username": "30th",
          "content": "I think we are allowed to assume the license is only a contract without technical limitation. A bigger problem of \\\"C\\\" is the traffic rerouting. This issue is included in \\\"D\\\", but not mentioned in \\\"C\\\". I agree with you, \\\"B\\\" is the better answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 223241,
          "date": "Wed 27 Oct 2021 15:16",
          "username": "jackdryan",
          "content": "I'll go with C",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 218918,
          "date": "Sat 23 Oct 2021 18:16",
          "username": "cloudyland",
          "content": "I go with C. A.  Aurora requires standby for multi AZ support.B.  Like it, but the auto-recovery feature doesn't support recovery across multi-AZ, and it re-mapsESB. D.  License limitation.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 207120,
          "date": "Thu 21 Oct 2021 07:27",
          "username": "DgixxlFireman",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.html<br><br>\\\"The Aurora cluster illustrates the separation of compute capacity and storage. For example, an Aurora configuration with only a single DB instance is still a cluster, because the underlying storage volume involves multiple storage nodes distributed across multiple Availability Zones (AZs).\\\"<br><br>In light of the above: A. A dictates a single Aurora node. Does not fit in the scope of the question asking for HA.  C is the answer here",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 220580,
          "date": "Tue 26 Oct 2021 19:45",
          "username": "xlFireman",
          "content": "A dictates a single Aurora node. Does not fit in the scope of the question asking for HA.  C is the answer here",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 206839,
          "date": "Tue 19 Oct 2021 18:30",
          "username": "ChauPhan",
          "content": "I'll go with C.  I am doubt about EC2 recovery features. There is not any mention in the question.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 201281,
          "date": "Mon 18 Oct 2021 10:48",
          "username": "Steve_Dobbs",
          "content": "C. <br>B is not correct, instance recovery is not a feature that you can just enable. You have to integrate cloudwatch alarms.<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 168407,
          "date": "Mon 18 Oct 2021 04:12",
          "username": "aaccee",
          "content": "Should not A be the best answer.<br>From the Aurora FAQ (https://aws.amazon.com/rds/aurora/faqs):<br>Amazon Aurora automatically maintains 6 copies of your data across 3 Availability Zones and will automatically attempt to recover your database in a healthy AZ with no data loss.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 162125,
          "date": "Mon 18 Oct 2021 03:43",
          "username": "Bad_Mat",
          "content": "The question said: \\\"automated healing\\\" If we need to promote read replica to PROD, can we do it automatically? I think the answer is A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 118749,
          "date": "Sat 16 Oct 2021 22:58",
          "username": "tolik505",
          "content": "For me C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 83059,
          "date": "Fri 08 Oct 2021 17:29",
          "username": "solotvun",
          "content": "C is correct one here",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 62192,
          "date": "Sat 02 Oct 2021 18:50",
          "username": "yassu",
          "content": "C is correct",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#74",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's application development team uses Linux-based Amazon EC2 instances as bastion hosts. Inbound SSH access to the bastion hosts is restricted to specific IP addresses, as defined in the associated security groups. The company's security team wants to receive a notification if the security group rules are modified to allow SSH access from any IP address.<br>What should a DevOps engineer do to meet this requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#74",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon EventBridge (Amazon CloudWatch Events) rule with a source of aws.cloudtrail and the event name AuthorizeSecurityGroupIngress. Define an Amazon Simple Notification Service (Amazon SNS) topic as the target.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable Amazon GuardDuty and check the findings for security group in AWS Security Hub. Configure an Amazon EventBridge (Amazon CloudWatch Events) rule with a custom pattern that matches GuardDuty events with an output of NON_COMPLIANT. Define an Amazon Simple Notification Service (Amazon SNS) topic as the target.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Config rule by using the restricted-ssh managed rule to check whether security groups disallow unrestricted incoming SSH traffic. Configure automatic remediation to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable Amazon Inspector. Include the Common Vulnerabilities and Exposures-1.1 rules package to check the security groups that are associated with the bastion hosts. Configure Amazon Inspector to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 74 discussion",
      "discusstion": [
        {
          "id": 763444,
          "date": "Mon 02 Jan 2023 02:36",
          "username": "strike3test",
          "content": "C is not the answer because restricted-ssh checks if the incoming SSH traffic for the security groups is accessible. The rule is COMPLIANT when IP addresses of the incoming SSH traffic in the security groups are restricted (CIDR other than 0.0.0.0/0). This rule applies only to IPv4.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 758553,
          "date": "Tue 27 Dec 2022 14:29",
          "username": "Chinta",
          "content": "C is the best option",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 757566,
          "date": "Mon 26 Dec 2022 15:56",
          "username": "Arkarter",
          "content": "I go with Choice A<br><br>REF : https://aws.amazon.com/premiumsupport/knowledge-center/monitor-security-group-changes-ec2/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 745681,
          "date": "Thu 15 Dec 2022 04:51",
          "username": "saggy4saggy4",
          "content": "D - inspector is something not used for security group checks and guard duty opt<br>B - this option will send all the non complaint alerts in the security hub<br>C - It is the easiest way to do it. The questions say if the incoming rule is changed to all the rule supports it.<br>A - Seems also correct but C is easier to do + we do not know if Cloudtrail is enabled.C is correct answer.<br>A will send an alert on all the Security group changes even for the correct ones and the question mentioned to send an alert only if the security group is open to all",
          "upvote_count": "31",
          "selected_answers": ""
        },
        {
          "id": 760560,
          "date": "Thu 29 Dec 2022 04:49",
          "username": "saggy4",
          "content": "C is correct answer.<br>A will send an alert on all the Security group changes even for the correct ones and the question mentioned to send an alert only if the security group is open to all",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 739549,
          "date": "Thu 08 Dec 2022 23:44",
          "username": "awspro2021",
          "content": "Answer A:<br>https://aws.amazon.com/premiumsupport/knowledge-center/monitor-security-group-changes-ec2/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 726410,
          "date": "Fri 25 Nov 2022 06:35",
          "username": "MatthewCheung",
          "content": "The question was asked to check anyone who modify the SG, C is checking an unauthorised ssh connection.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 723888,
          "date": "Mon 21 Nov 2022 21:34",
          "username": "johnny007007",
          "content": "\\\"restricted-ssh managed rule\\\" means that you will verify if your security group dont have setup 0.0.0.0/0 CIDR",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 656443,
          "date": "Thu 01 Sep 2022 18:25",
          "username": "ohcnapcloud",
          "content": "C - https://docs.aws.amazon.com/config/latest/developerguide/restricted-ssh.htmlThis wouldn't work if they rule was changed to allow a specific range, it only works if it is chnanged to 0.0.0.0/0. If they change is to any other range that has some restriction, it will stay compliant. This means the answeris A",
          "upvote_count": "41",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 759216,
          "date": "Wed 28 Dec 2022 01:51",
          "username": "apcloud",
          "content": "This wouldn't work if they rule was changed to allow a specific range, it only works if it is chnanged to 0.0.0.0/0. If they change is to any other range that has some restriction, it will stay compliant. This means the answeris A",
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
      "question_text": "<p>A company is using AWS Organizations to create separate AWS accounts for each of its departments. The company needs to automate the following tasks:<br>-Update the Linux AMIs with new patches periodically and generate a golden image<br>-Install a new version of Chef agents in the golden image, if available<br>-Provide the newly generated AMIs to the department's accounts<br>Which solution meets these requirements with the LEAST management overhead?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#75",
          "answers": [
            {
              "choice": "<p>A. Write a script to launch an Amazon EC2 instance from the previous golden image. Apply the patch updates. Install the new version of the Chef agent, generate a new golden image, and then modify the AMI permissions to share only the new image with the department's accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon EC2 Image Builder to create an image pipeline that consists of the base Linux AMI and components to install the Chef agent. Use AWS Resource Access Manager to share EC2 Image Builder images with the department's accounts.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use an AWS Systems Manager Automation runbook to update the Linux AMI by using the previous image. Provide the URL for the script that will update the Chef agent. Use AWS Organizations to replace the previous golden image in the department's accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon EC2 Image Builder to create an image pipeline that consists of the base Linux AMI and components to install the Chef agent. Create a parameter in AWS Systems Manager Parameter Store to store the new AMI ID that can be referenced by the department's accounts.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 75 discussion",
      "discusstion": [
        {
          "id": 759983,
          "date": "Wed 28 Dec 2022 16:05",
          "username": "ericzaj",
          "content": "B looks correct:<br>https://docs.aws.amazon.com/imagebuilder/latest/userguide/manage-shared-resources.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 745683,
          "date": "Thu 15 Dec 2022 04:55",
          "username": "saggy4",
          "content": "People struggling with B and D.  I would go for B.  Though D seems a very good option the answer does not mention anything about how to share the Parameter Store with other accounts.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 722526,
          "date": "Sun 20 Nov 2022 11:23",
          "username": "alinatoneta1o",
          "content": "I would go with D as it does not require anyone to change AMI Id after it has been updated. Having tons of CloudFormation templates, parameter store approach looks to have least overheadI like D as well but I'm not sure how the other accounts would access the AMI's if they aren't shared in some way. For that reason I'm leaning toward B for now. But if D mentioned the sharing I think D would be a better overall solution.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 725244,
          "date": "Wed 23 Nov 2022 16:56",
          "username": "neta1o",
          "content": "I like D as well but I'm not sure how the other accounts would access the AMI's if they aren't shared in some way. For that reason I'm leaning toward B for now. But if D mentioned the sharing I think D would be a better overall solution.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 668638,
          "date": "Wed 14 Sep 2022 07:46",
          "username": "MikeyJ",
          "content": "EC2 Image Builder integrates with AWS Resource Access Manager (AWS RAM) to allow you to share certain resources with any AWS account or through AWS Organizations. EC2 Image Builder resources that can be shared are:<br><br>Components<br><br>Images<br><br>Recipes<br><br>https://docs.aws.amazon.com/imagebuilder/latest/userguide/manage-shared-resources.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 656471,
          "date": "Thu 01 Sep 2022 19:00",
          "username": "ohcn",
          "content": "B - EC2 Image Builder allows you to create a pipeline which turns into least management overhead. https://docs.aws.amazon.com/imagebuilder/latest/userguide/what-is-image-builder.html<br>\\\"The images you build are created in your account and you can configure them for operating system patches on an ongoing basis.\\\"<br><br>RAM helps you to share accross organizations and accounts. https://docs.aws.amazon.com/imagebuilder/latest/userguide/manage-shared-resources.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#76",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that runs on 12 Amazon EC2 instances. The instances run in an Amazon EC2 Auto Scaling group across three Availability Zones.<br>On a typical day each EC2 instance has 30% CPU utilization during business hours and 10% CPU utilization after business hours. The CPU utilization increases suddenly in the first few minutes of business hours each day. Other increases in CPU utilization are gradual. A DevOps engineer needs to optimize costs while maintaining or improving the application's reliability.<br>Which solution meets these requirements?<br></p>",
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
              "choice": "<p>A. Configure a target tracking scaling policy that is based on the Auto Scaling group's average CPU utilization, and set a target of 75%. Create a scheduled action for the Auto Scaling group to adjust the desired capacity to six instances just before business hours begin.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the Auto Scaling group with two scheduled actions for Amazon EC2 Auto Scaling. Configure one action to start nine EC2 instances at the start of business hours. Configure the other action to stop nine instances at the end of business hours.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Change to an AWS Application Auto Scaling group. Configure a target tracking scaling policy that is based on the Auto Scaling group's average CPU utilization, and set a target of 75%. Create a scheduled action for the Auto Scaling group to adjust the minimum number of instances to three instances at the end of business hours and to reset the number to six instances before business hours begin.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Change to an AWS Application Auto Scaling group. Configure a target tracking scaling policy that is based on the Auto Scaling group's average CPU utilization, and set a target of 75%. Create a scheduled action to terminate nine instances each evening at the end of business hours.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 76 discussion",
      "discusstion": [
        {
          "id": 676654,
          "date": "Fri 23 Sep 2022 02:26",
          "username": "GoozianScofield_12",
          "content": "C & D are wrong. Application Auto Scaling isn't for EC2 :<br>https://docs.aws.amazon.com/autoscaling/application/userguide/what-is-application-auto-scaling.html<br><br>B can not be a good option, as it just starts and terminates EC2 instances regardless of the real CPU utilization.<br><br>A is the most appropriateApplication autoscaling can also be applied to EC2 instances, it only has a broader application, compared to EC2 Autoscaling. But the catch here is we want a solution that address both during working hrs and after working hrs (especially when there is low traffic). Option A only address during working hrs.",
          "upvote_count": "61",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 759554,
          "date": "Wed 28 Dec 2022 09:12",
          "username": "Scofield_12",
          "content": "Application autoscaling can also be applied to EC2 instances, it only has a broader application, compared to EC2 Autoscaling. But the catch here is we want a solution that address both during working hrs and after working hrs (especially when there is low traffic). Option A only address during working hrs.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 703194,
          "date": "Mon 24 Oct 2022 18:22",
          "username": "CloudMan01",
          "content": "Answer is A,<br> AWS Application Auto Scaling group isn't provisioned for EC2, so C&D are wrong.",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 745703,
          "date": "Thu 15 Dec 2022 05:57",
          "username": "saggy4",
          "content": "The Answer is actually A.  For folks saying C is the answer. Application Autoscaling and EC2 Autoscaling are two different things.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 702936,
          "date": "Mon 24 Oct 2022 12:59",
          "username": "ryuhei",
          "content": "Answer is =E2=80=9DC=E2=80=9D !!",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 681335,
          "date": "Wed 28 Sep 2022 03:25",
          "username": "quixo",
          "content": "I will go with C. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 659886,
          "date": "Mon 05 Sep 2022 09:56",
          "username": "helloworldabc",
          "content": "CCCCCCCC",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 656609,
          "date": "Thu 01 Sep 2022 21:30",
          "username": "ohcn",
          "content": "C - https://www.examtopics.com/discussions/amazon/view/2752-exam-aws-devops-engineer-professional-topic-1-question-71/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#77",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A development team is building a full-stack serverless web application. The serverless application will consist of a backend REST API and a front end that is built with a single-page application (SPA) framework.<br>The team wants to use a Git-based workflow to develop and deploy the application. The team has created an AWS CodeCommit repository to store the application code. The team wants to use multiple development branches to test new features. In addition, the team wants to ensure that code changes on the development branches are deployed to the different development environments. Code changes to the main branches must be released automatically to production.<br>The development deployments must be available as a subdomain of the main application website, which is hosted in an Amazon Route 53 public hosted zone.<br>What should a DevOps engineer do to meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#77",
          "answers": [
            {
              "choice": "<p>A. Create an application in the AWS Amplify console, and connect the CodeCommit repository. Create a feature branch deployment for each of the environments. Connect the Route 53 domain to the application. Activate the automatic creation of subdomains.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a single AWS CodePipeline pipeline that uses the CodeCommit repository as a source. Configure the pipeline so that it deploys to different environments based on the changed branch. Create an AWS Lambda function that creates a new subdomain based on the source branch name. Invoke the Lambda function in the deployment workflow.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an application in AWS Elastic Beanstalk that uses the CodeCommit repository as a source. Configure Elastic Beanstalk so that it creates a new application environment based on the changed branch. Connect the Route 53 domain to the application. Activate the automatic creation of subdomains.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create multiple AWS CodePipeline pipelines that use the CodeCommit repository as a source. Configure each pipeline so that it deploys to a specific environment based on the configured branch. Configure an AWS CodeDeploy step in the pipeline to deploy the application components and to create the Route 53 public hosted zone.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 77 discussion",
      "discusstion": [
        {
          "id": 733813,
          "date": "Fri 02 Dec 2022 15:21",
          "username": "nsvijay04b1",
          "content": "https://www.youtube.com/watch?vAmJps1bYgs0",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 681224,
          "date": "Tue 27 Sep 2022 23:38",
          "username": "RightAnswers",
          "content": "Amplify leverages Git branches to create new deployments every time a developer connects a new branch in their repository. After connecting your first branch, you can create a new feature branch deployments. Typically the main branch tracks release code and is your production branch. The develop branch is used as an integration branch to test new features. This enables beta testers to test unreleased features on the develop branch deployment, without affecting any of the production end users on the main branch deployment.<br>You can connect a custom domain to an app that you've deployed with Amplify Hosting.<br>https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 676670,
          "date": "Fri 23 Sep 2022 02:56",
          "username": "Goozian",
          "content": "A -> AWS Amplify<br><br>https://aws.amazon.com/blogs/mobile/complete-guide-to-full-stack-ci-cd-workflows-with-aws-amplify/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 657555,
          "date": "Fri 02 Sep 2022 17:29",
          "username": "ohcn",
          "content": "This looks like a case for AWS Amplify. So A. <br>https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html<br>https://docs.aws.amazon.com/amplify/latest/userguide/to-set-up-automatic-subdomains-for-a-Route-53-custom-domain.html<br>https://aws.amazon.com/blogs/mobile/complete-guide-to-full-stack-ci-cd-workflows-with-aws-amplify/",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#78",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using AWS CodePipeline to deploy an application. According to a new guideline, a member of the company's security team must sign off on any application changes before the changes are deployed into production. The approval must be recorded and retained.<br>Which combination of actions will meet these requirements? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#78",
          "answers": [
            {
              "choice": "<p>A. Configure CodePipeline to write actions to Amazon CloudWatch Logs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure CodePipeline to write actions to an Amazon S3 bucket at the end of each pipeline stage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS CloudTrail trail to deliver logs to Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a CodePipeline custom action to invoke an AWS Lambda function for approval. Create a policy that gives the security team access to manage CodePipeline custom actions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a CodePipeline manual approval action before the deployment step. Create a policy that grants the security team access to approve manual approval stages.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 78 discussion",
      "discusstion": [
        {
          "id": 676675,
          "date": "Fri 23 Sep 2022 03:01",
          "username": "Goozian",
          "content": "C & E<br>https://stelligent.com/2019/06/11/aws-codepipeline-approval-gate-tracking/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 659891,
          "date": "Mon 05 Sep 2022 09:58",
          "username": "helloworldabc",
          "content": "CCCCCCEEEEEE",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 656650,
          "date": "Thu 01 Sep 2022 22:11",
          "username": "ohcn",
          "content": "CE - https://www.examtopics.com/discussions/amazon/view/47954-exam-aws-devops-engineer-professional-topic-1-question-254/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: CE"
        }
      ]
    },
    {
      "question_id": "#79",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company manages a web application that runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The EC2 instances run in an Auto<br>Scaling group across multiple Availability Zones. The application uses an Amazon RDS for MySQL DB instance to store the data. The company has configured<br>Amazon Route 53 with an alias record that points to the ALB. <br>Anew company guideline requires a geographically isolated disaster recovery (DR) site with an RTO of 4 hours and an RPO of 15 minutes.<br>Which DR strategy will meet these requirements with the LEAST change to the application stack?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#79",
          "answers": [
            {
              "choice": "<p>A. Launch a replica environment of everything except Amazon RDS in a different Availability Zone. Create an RDS read replica in the new Availability Zone, and configure the new stack to point to the local RDS DB instance. Add the new stack to the Route 53 record set by using a health check to configure a failover routing policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Launch a replica environment of everything except Amazon RDS in a different AWS Region. Create an RDS read replica in the new Region, and configure the new stack to point to the local RDS DB instance. Add the new stack to the Route 53 record set by using a health check to configure a latency routing policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Launch a replica environment of everything except Amazon RDS in a different AWS Region. In the event of an outage, copy and restore the latest RDS snapshot from the primary Region to the DR Region. Adjust the Route 53 record set to point to the ALB in the DR Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Launch a replica environment of everything except Amazon RDS in a different AWS Region. Create an RDS read replica in the new Region, and configure the new environment to point to the local RDS DB instance. Add the new stack to the Route 53 record set by using a health check to configure a failover routing policy. In the event of an outage, promote the read replica to primary.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 79 discussion",
      "discusstion": [
        {
          "id": 667914,
          "date": "Tue 13 Sep 2022 13:07",
          "username": "syaldram",
          "content": "D is the asnwer!",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 659892,
          "date": "Mon 05 Sep 2022 09:58",
          "username": "helloworldabc",
          "content": "DDDDDDDD",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 656658,
          "date": "Thu 01 Sep 2022 22:26",
          "username": "ohcn",
          "content": "D - https://www.examtopics.com/discussions/amazon/view/2840-exam-aws-devops-engineer-professional-topic-1-question-36/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#80",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A DevOps engineer wants to implement an automated response that will occur if AWS Trusted Advisor detects an IAM access key in a public source code repository. The automated response must delete the exposed access key and must notify the security team.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#80",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Lambda function to delete the 1AM access key. Configure AWS CloudTrail logs to stream to Amazon CloudWatch Logs. Create a CloudWatch Logs metric filter for the AWS_RISK_CREDENTIALS_EXPOSED event with two actions. First, run the Lambda function. Second, use Amazon Simple Notification Service (Amazon SNS) to send a notification to the security team.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Lambda function to delete the IAM access key. Create an AWS Config rule for changes to \"aws.trustedadvisor\" and the \"Exposed Access Keys\" status with two actions. First, run the Lambda function. Second, use Amazon Simple Notification Service (Amazon SNS) to send a notification to the security team.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Lambda function that deletes the IAM access key and then uses Amazon Simple Notification Service (Amazon SNS) to notify the security team. Create an AWS Personal Health Dashboard rule for the AWS_RISK_CREDENTIALS_EXPOSED event. Set the target of the Personal Health Dashboard rule to the ARN of the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Lambda function that deletes the IAM access key. Create an Amazon EventBridge (Amazon CloudWatch Events) rule with an \"aws.trustedadvisor\" event source and the \"Exposed Access Keys\" status. Set the EventBridge (CloudWatch Events) rule to target the Lambda function and an Amazon Simple Notification Service (Amazon SNS) topic that notifies the security team.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 80 discussion",
      "discusstion": [
        {
          "id": 734589,
          "date": "Sat 03 Dec 2022 18:18",
          "username": "neta1o",
          "content": "I was initially leaning toward C.  But the wording says \\\"Create an AWS Personal Health Dashboard rule\\\". The rule is technically created in EventBridge. For that reason I'd go with D. ",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 716014,
          "date": "Fri 11 Nov 2022 12:35",
          "username": "bartekb3d",
          "content": "https://aws.amazon.com/blogs/compute/automate-your-it-operations-using-aws-step-functions-and-amazon-cloudwatch-events/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 681392,
          "date": "Wed 28 Sep 2022 06:45",
          "username": "quixo",
          "content": "I will go with C. <br>Public access key <--> AWS Health <--> Event Bridge <--> Lambda Func.<br><br>Refer: https://aws.amazon.com/blogs/compute/automate-your-it-operations-using-aws-step-functions-and-amazon-cloudwatch-events/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 676682,
          "date": "Fri 23 Sep 2022 03:32",
          "username": "Goozian",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 666144,
          "date": "Sun 11 Sep 2022 15:00",
          "username": "hankun",
          "content": "C is true<br><br>https://aws.amazon.com/blogs/compute/automate-your-it-operations-using-aws-step-functions-and-amazon-cloudwatch-events/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 657370,
          "date": "Fri 02 Sep 2022 13:45",
          "username": "ohcn",
          "content": "D - Seems to be the right one. But wording around Exposed Access Key status is kinda wrong. Status should be error and check-name should be Exposed Access Key.<br>https://github.com/aws/Trusted-Advisor-Tools/tree/master/ExposedAccessKeys<br><br>C is also doable, but I don't think this is the case.<br><br>https://www.examtopics.com/discussions/amazon/view/4893-exam-aws-devops-engineer-professional-topic-1-question-64/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#81",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A DevOps engineer wants to implement an automated response that will occur if AWS Trusted Advisor detects an IAM access key in a public source code repository. The automated response must delete the exposed access key and must notify the security team.<br>Which solution will meet these requirements?<br></p>",
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
              "choice": "<p>A. Create an AWS Lambda function to delete the IAM access key. Configure AWS CloudTrail logs to stream to Amazon CloudWatch Logs. Create a CloudWatch Logs metric filter for the AWS_RISK_CREDENTIALS_EXPOSED event with two actions. First, run the Lambda function. Second, use Amazon Simple Notification Service (Amazon SNS) to send a notification to the security team.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Lambda function to delete the IAM access key. Create an AWS Config rule for changes to \"aws.trustedadvisor\" and the \"Exposed Access Keys\" status with two actions. First, run the Lambda function. Second, use Amazon Simple Notification Service (Amazon SNS) to send a notification to the security team.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Lambda function that deletes the IAM access key and then uses Amazon Simple Notification Service (Amazon SNS) to notify the security team. Create an AWS Personal Health Dashboard rule for the AWS_RISK_CREDENTIALS_EXPOSED event. Set the target of the Personal Health Dashboard rule to the ARN of the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Lambda function that deletes the IAM access key. Create an Amazon EventBridge (Amazon CloudWatch Events) rule with an \"aws.trustedadvisor\" event source and the \"Exposed Access Keys\" status. Set the EventBridge (CloudWatch Events) rule to target the Lambda function and an Amazon Simple Notification Service (Amazon SNS) topic that notifies the security team.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 81 discussion",
      "discusstion": [
        {
          "id": 757762,
          "date": "Mon 26 Dec 2022 19:43",
          "username": "tartealacreme",
          "content": "C for sure",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 735152,
          "date": "Sun 04 Dec 2022 15:47",
          "username": "quixo",
          "content": "C<br>https://github.com/aws/Trusted-Advisor-Tools/blob/master/ExposedAccessKeys/README. md",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 728793,
          "date": "Mon 28 Nov 2022 06:09",
          "username": "Paresh_Jadhav",
          "content": "c<br>https://docs.aws.amazon.com/awssupport/latest/user/security-checks.html#exposed-access-keys",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 716016,
          "date": "Fri 11 Nov 2022 12:35",
          "username": "bartekb3d",
          "content": "https://aws.amazon.com/blogs/compute/automate-your-it-operations-using-aws-step-functions-and-amazon-cloudwatch-events/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 681396,
          "date": "Wed 28 Sep 2022 06:58",
          "username": "quixo",
          "content": "I will go with C. <br>Public access key <--> AWS Health <--> Event Bridge <--> Lambda Func.<br><br>Refer: https://aws.amazon.com/blogs/compute/automate-your-it-operations-using-aws-step-functions-and-amazon-cloudwatch-events/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 679311,
          "date": "Mon 26 Sep 2022 02:42",
          "username": "youonebe",
          "content": "80/81 share the same answer D. ",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 676684,
          "date": "Fri 23 Sep 2022 03:36",
          "username": "Goozian",
          "content": "\\\"D\\\" is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 657381,
          "date": "Fri 02 Sep 2022 13:54",
          "username": "ohcn",
          "content": "80 and 81 are the same question, but they have diff answer.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#82",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts an application in North America. The application uses an Amazon Aurora PostgreSQL DB cluster. A team of analysts in Europe generates real- time reports by using the DB cluster. The analysts must have access to the most up-to-date data. A DevOps engineer discovers that the generation of reports is much slower for users in Europe than for users in North America.<br>What should the DevOps engineer do to resolve this issue?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#82",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon DynamoDB table in Europe. Use DynamoDB Accelerator (DAX) to configure replication between the DB cluster and the DynamoDB table. Configure the users' machines to point to the DynamoDB table in Europe.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create cross-Region Aurora Replicas in North America, and activate synchronous replication. Configure the users' machines to point to the Aurora reader endpoint in North America.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Aurora global database. Use the existing DB cluster as the primary cluster, and add a secondary cluster in an AWS Region in Europe. Configure the users' machines to point to the Aurora reader endpoint in Europe.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon DynamoDB global tables in an AWS Region in Europe. Set up continuous replication between the DB cluster and the DynamoDB table by using AWS Database Migration Service (AWS DMS). Configure the users' machines to point to the DynamoDB table in Europe.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 82 discussion",
      "discusstion": [
        {
          "id": 741359,
          "date": "Sun 11 Dec 2022 02:53",
          "username": "jaxsbr",
          "content": "A & D is incorrect - utilizes DynamoDB which is key value storage, whereas PostgreSQL is relational.<br>B is incorrect - \\\"Aurora PostgreSQL DB clusters don't support Aurora Replicas in different AWS Regions,\\\" https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Replication.html<br>This leaves C as correct answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 679314,
          "date": "Mon 26 Sep 2022 02:48",
          "username": "youonebe",
          "content": "B.  cross-Region Aurora Replicas seems good, but user still points to NA which is wrong.<br>That leaves C as the choice.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 660664,
          "date": "Tue 06 Sep 2022 03:26",
          "username": "devops7",
          "content": "C: A & D are too much work, B won't help Europe",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 660505,
          "date": "Mon 05 Sep 2022 21:39",
          "username": "ohcn",
          "content": "C is a good choice",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 659897,
          "date": "Mon 05 Sep 2022 10:02",
          "username": "helloworldabc",
          "content": "CCCCCCC",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#83",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A consulting company was hired to assess security vulnerabilities within a client company's application and propose a plan to remediate all identified issues. The architecture is identified as follows: Amazon S3 storage for content, an Auto Scaling group of Amazon EC2 instances behind an Elastic Load Balancer with attached Amazon EBS storage, and an Amazon RDS MySQL database. There are also several AWS Lambda functions that communicate directly with the RDS database using connection string statements in the code.<br><br>The consultants identified the top security threat as follows: the application is not meeting its requirement to have encryption at rest.<br><br>What solution will address this issue with the LEAST operational overhead and will provide monitoring for potential future violations?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#83",
          "answers": [
            {
              "choice": "<p>A. Enable SSE encryption on the S3 buckets and RDS database. Enable OS-based encryption of data on EBS volumes. Configure Amazon Inspector agents on EC2 instances to report on insecure encryption ciphers. Set up AWS Config rules to periodically check for non-encrypted S3 objects.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the application to encrypt each file prior to storing on Amazon S3. Enable OS-based encryption of data on EBS volumes. Encrypt data on write to RDS. Run cron jobs on each instance to check for unencrypted data and notify via Amazon SNS. Use S3 Events to call an AWS Lambda function and verify if the file is encrypted.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable Secure Sockets Layer (SSL) on the load balancer, ensure that AWS Lambda is using SSL to communicate to the RDS database, and enable S3encryption. Configure the application to force SSL for incoming connections and configure RDS to only grant access if the session is encrypted. Configure Amazon Inspector agents on EC2 instances to report on insecure encryption ciphers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable SSE encryption on the S3 buckets, EBS volumes, and the RDS database. Store RDS credentials in EC2 Parameter Store. Enable a policy on the S3 bucket to deny unencrypted puts. Set up AWS Config rules to periodically check for non-encrypted S3 objects and EBS volumes, and to ensure that RDS storage is encrypted.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 83 discussion",
      "discusstion": [
        {
          "id": 743698,
          "date": "Tue 13 Dec 2022 08:16",
          "username": "Kapello10",
          "content": "D is the correct answer.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 732229,
          "date": "Thu 01 Dec 2022 05:03",
          "username": "SmileyCloud",
          "content": "A - there is no need to use OS based encryption on the EBS volumes. You can just use AWS provided EBS encryption.<br>B - No need to configure apps to encrypt when writing to S3. You use encryption on S3.<br>C - This is encryption in transit, not encryption on rest.<br>D - Correct.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#84",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A DevOps engineer is planning to deploy a Ruby-based application to production. The application needs to interact with an Amazon RDS for MySQL database and should have automatic scaling and high availability. The stored data in the database is critical and should persist regardless of the state of the application stack.<br><br>The DevOps engineer needs to set up an automated deployment strategy for the application with automatic rollbacks. The solution also must alert the application team when a deployment fails.<br><br>Which combination of steps will meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BDE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#84",
          "answers": [
            {
              "choice": "<p>A. Deploy the application on AWS Elastic Beanstalk. Deploy an Amazon RDS for MySQL DB instance as part of the Elastic Beanstalk configuration.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy the application on AWS Elastic Beanstalk. Deploy a separate Amazon RDS for MySQL DB instance outside of Elastic Beanstalk.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure a notification email address that alerts the application team in the AWS Elastic Beanstalk configuration.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure an Amazon EventBridge (Amazon CloudWatch Events) rule to monitor AWS Health events. Use an Amazon Simple Notification Service (Amazon SNS) topic as a target to alert the application team.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use the immutable deployment method to deploy new application versions.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Use the rolling deployment method to deploy new application versions.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 84 discussion",
      "discusstion": [
        {
          "id": 732237,
          "date": "Thu 01 Dec 2022 05:24",
          "username": "SmileyCloud",
          "content": "B and not A because the RDS data is critical. Move RDS out of Beanstalk.<br>D and not C, because D constantly monitors the Beanstalk health. See https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.eventbridge.html<br>E and not F because immutable creates another environment. If rolling deployment fails, you need to redeploy it again. They ask for automated healing. https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html#environments-cfg-rollingdeployments-method",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: BDE"
        },
        {
          "id": 759326,
          "date": "Wed 28 Dec 2022 04:39",
          "username": "saggy4",
          "content": "A -- RDS is critical and should not be clubbed with AWS Beanstalk ENV.<br><br>B -- Correct as RDS should be created separately independent of the BeanStalk ENV.<br><br>C -- Correct -- You can send alerts for your ENV via adding email address in config https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.managing.sns.html#configuration-notifications-namespace<br><br>D -- Health monitor will give alerts for all the environments and also not related to Deployments<br><br>E -- Correct and D -- Incorrect--> RollingNo automatic Rollback, ImmutableAutomatic Rollback.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 734672,
          "date": "Sat 03 Dec 2022 21:40",
          "username": "USalobenjlbenjl",
          "content": "B:and not A because the RDS data is critical. Move RDS out of Beanstalk.<br>C:not D, because AWS Health monitor health status of AWS services, not deployments.<br>E: This was tricky one. We should pay attention that we need automatic rollback, not rolling update.Failed rolling update required manual work to deploy new good version.Failed immutable update will rollback all unhealthy instances automatically, no manual work is needed<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html#environments-cfg-rollingdeployments-methodI mean notification email address, not the sns.Yes, BCE looks correct to me.<br>You can set sns notification in elastic beanstalk console.<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.managing.sns.html",
          "upvote_count": "312",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 749380,
          "date": "Mon 19 Dec 2022 03:26",
          "username": "benjl",
          "content": "I mean notification email address, not the sns.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 749379,
          "date": "Mon 19 Dec 2022 03:25",
          "username": "benjl",
          "content": "Yes, BCE looks correct to me.<br>You can set sns notification in elastic beanstalk console.<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.managing.sns.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 733897,
          "date": "Fri 02 Dec 2022 17:08",
          "username": "nsvijay04b1",
          "content": "B:and not A because the RDS data is critical. Move RDS out of Beanstalk.<br>C:not D, as we r not monitoring AWS health but beanstalkhealth<br>https://docs.aws.amazon.com/zh_cn/elasticbeanstalk/latest/dg/using-features.managing.sns.html<br>F: as user wants rollback automatically",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 727947,
          "date": "Sun 27 Nov 2022 07:12",
          "username": "adozoo",
          "content": "https://docs.aws.amazon.com/zh_cn/elasticbeanstalk/latest/dg/using-features.managing.sns.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACF"
        }
      ]
    },
    {
      "question_id": "#85",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company is looking for ways to deploy an application on AWS that satisfies the following requirements:<br><br>- Has a simple and automated application deployment process.<br>- Has minimal deployment costs while ensuring that at least half of the instances are available to receive end-user requests.<br>- If the application fails, an automated healing mechanism will replace the affected instances.<br><br>Which deployment strategy will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#85",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Elastic Beanstalk environment and configure it to use Auto Scaling and an Elastic Load Balancer. Use rolling deployments with a batch size of 50%.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS OpsWorks stack. Configure the application layer to use rolling deployments as a deployment strategy. Add an Elastic Load Balancing layer. Enable auto healing on the application layer.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS CodeDeploy with Auto Scaling and an Elastic Load Balancer. Use the CodeDeployDefault.HalfAtAtime deployment strategy. Enable an Elastic Load Balancing health check to report the status of the application, and set the Auto Scaling health check to ELB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS CodeDeploy with Auto Scaling and an Elastic Load Balancer. Use a blue/green deployment strategy. Enable an Elastic Load Balancing health check to report the status of the application, and set the Auto Scaling health check to ELB. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 85 discussion",
      "discusstion": [
        {
          "id": 732241,
          "date": "Thu 01 Dec 2022 05:30",
          "username": "SmileyCloud",
          "content": "The keyword is \\\"Has a simple and automated application deployment process.\\\"<br>You can't find anything simpler than Beanstalk. Answer: A",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 745759,
          "date": "Thu 15 Dec 2022 07:07",
          "username": "saggy4saggy4",
          "content": "A is missing an important aspect of Automatic Healing. Rolling deployments in Elastic Beanstalk if failed are not rollback automatically. hence the answer is Chttps://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html#environments-cfg-rollingdeployments-method",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 745761,
          "date": "Thu 15 Dec 2022 07:07",
          "username": "saggy4",
          "content": "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html#environments-cfg-rollingdeployments-method",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 743640,
          "date": "Tue 13 Dec 2022 07:05",
          "username": "ChaiyapornChaiyaporn",
          "content": "C, it has monitoring process.Change my mind, it shoud be A because the question said >> Has a simple and automated application deployment process.",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 744225,
          "date": "Tue 13 Dec 2022 16:43",
          "username": "Chaiyaporn",
          "content": "Change my mind, it shoud be A because the question said >> Has a simple and automated application deployment process.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 727949,
          "date": "Sun 27 Nov 2022 07:16",
          "username": "adozoo",
          "content": "https://docs.aws.amazon.com/zh_cn/codedeploy/latest/userguide/deployment-configurations.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#86",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is implementing AWS CodePipeline to automate its testing process. The company wants to be notified when the execution state fails and used the following custom event pattern in Amazon CloudWatch:<br><br><img src=\"https://img.examtopics.com/aws-devops-engineer-professional/image1.png\"><br><br>Which type of events will match this event pattern?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#86",
          "answers": [
            {
              "choice": "<p>A. Failed deploy and build actions across all the pipelines<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. All rejected or failed approval actions across all the pipelines<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. All the events across all pipelines<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Approval actions across all pipelines<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 86 discussion",
      "discusstion": [
        {
          "id": 743703,
          "date": "Tue 13 Dec 2022 08:25",
          "username": "Kapello10",
          "content": "B is the correct answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 732247,
          "date": "Thu 01 Dec 2022 05:40",
          "username": "SmileyCloud",
          "content": "B.  An example for CodePipeline Action Execution State Change is here.<br>https://docs.aws.amazon.com/codepipeline/latest/userguide/detect-state-changes-cloudwatch-events.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 727457,
          "date": "Sat 26 Nov 2022 12:14",
          "username": "adozoo",
          "content": "https://docs.aws.amazon.com/zh_cn/eventbridge/latest/userguide/eb-event-patterns.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#87",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has developed a Node.js web application which provides REST services to store and retrieve time series data. The web application is built by the development team on company laptops, tested locally, and manually deployed to a single on-premises server, which accesses a local MySQL database. The company is starting a trial in two weeks, during which the application will undergo frequent updates based on customer feedback. The following requirements must be met:<br><br>- The team must be able to reliably build, test, and deploy new updates on a daily basis, without downtime or degraded performance.<br>- The application must be able to scale to meet an unpredictable number of concurrent users during the trial.<br><br>Which action will allow the team to quickly meet these objectives?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#87",
          "answers": [
            {
              "choice": "<p>A. Create two Amazon Lightsail virtual private servers for Node.js; one for test and one for production. Build the Node.js application using existing processes and upload it to the new Lightsail test server using the AWS CLI. Test the application, and if it passes all tests, upload it to the production server. During the trial, monitor the production server usage, and if needed, increase performance by upgrading the instance type.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Develop an AWS CloudFormation template to create an Application Load Balancer and two Amazon EC2 instances with Amazon EBS (SSD) volumes in an Auto Scaling group with rolling updates enabled. Use AWS CodeBuild to build and test the Node.js application and store it in an Amazon S3 bucket. Use user-data scripts to install the application and the MySQL database on each EC2 instance. Update the stack to deploy new application versions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure AWS Elastic Beanstalk to automatically build the application using AWS CodeBuild and to deploy it to a test environment that is configured to support auto scaling. Create a second Elastic Beanstalk environment for production. Use Amazon RDS to store data. When new versions of the applications have passed all tests, use Elastic Beanstalk 'swap cname' to promote the test environment to production.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the application to use Amazon DynamoDB instead of a local MySQL database. Use AWS OpsWorks to create a stack for the application with a DynamoDB layer, an Application Load Balancer layer, and an Amazon EC2 instance layer. Use a Chef recipe to build the application and a Chef recipe to deploy the application to the EC2 instance layer. Use custom health checks to run unit tests on each instance with rollback on failure.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 87 discussion",
      "discusstion": [
        {
          "id": 732248,
          "date": "Thu 01 Dec 2022 05:43",
          "username": "SmileyCloudScofield_12Scofield_12Scofield_12",
          "content": "C.  Requires least effort and does everything required.Elastic Beanstalk, does not build your application, it only deploy. Lightsail will build, test and deploy your application quickly with scalability. check out option A. I think, the best option is still Beanstalk. CAWS lightsail also provides a variety of database options",
          "upvote_count": "4111",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 759780,
          "date": "Wed 28 Dec 2022 13:04",
          "username": "Scofield_12Scofield_12Scofield_12",
          "content": "Elastic Beanstalk, does not build your application, it only deploy. Lightsail will build, test and deploy your application quickly with scalability. check out option A. I think, the best option is still Beanstalk. CAWS lightsail also provides a variety of database options",
          "upvote_count": "111",
          "selected_answers": ""
        },
        {
          "id": 759789,
          "date": "Wed 28 Dec 2022 13:13",
          "username": "Scofield_12",
          "content": "I think, the best option is still Beanstalk. C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 759785,
          "date": "Wed 28 Dec 2022 13:07",
          "username": "Scofield_12",
          "content": "AWS lightsail also provides a variety of database options",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 727461,
          "date": "Sat 26 Nov 2022 12:26",
          "username": "adozoo",
          "content": "without downtime or degraded performance.Elastic Beanstalk can do that",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 727458,
          "date": "Sat 26 Nov 2022 12:15",
          "username": "adozoo",
          "content": "that is about when aprroval rejecdt",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#88",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is deploying a new application that uses Amazon EC2 instances. The company needs a solution to query application logs and AWS account API activity.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#88",
          "answers": [
            {
              "choice": "<p>A. Use the Amazon CloudWatch agent to send logs from the EC2 instances to Amazon CloudWatch Logs. Configure AWS CloudTrail to deliver the API logs to Amazon S3. Use CloudWatch to query both sets of logs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the Amazon CloudWatch agent to send logs from the EC2 instances to Amazon CloudWatch Logs. Configure AWS CloudTrail to deliver the API logs to CloudWatch Logs. Use CloudWatch Logs Insights to query both sets of logs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the Amazon CloudWatch agent to send logs from the EC2 instances to Amazon Kinesis. Configure AWS CloudTrail to deliver the API logs to Kinesis. Use Kinesis to load the data into Amazon Redshift. Use Amazon Redshift to query both sets of logs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the Amazon CloudWatch agent to send logs from the EC2 instances to Amazon S3. Use AWS CloudTrail to deliver the API logs to Amazon S3. Use Amazon Athena to query both sets of logs in Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 88 discussion",
      "discusstion": [
        {
          "id": 732259,
          "date": "Thu 01 Dec 2022 05:54",
          "username": "SmileyCloud",
          "content": "A - You can't use CloudWatch to query anything. You have to use CloudWatch Logs Insights, but even then - you can't use it to query S3.<br>B - Correct. Very simple to configure and use.<br>C - Why would you use this complex solution? RedShift is super expensive.<br>D - This is viable too, but you want your logs in CloudWatch not S3.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 744229,
          "date": "Tue 13 Dec 2022 16:48",
          "username": "Chaiyaporn",
          "content": "B for sure.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 735027,
          "date": "Sun 04 Dec 2022 12:07",
          "username": "xMaruapcloud",
          "content": "Why not D?The features of cloud watch logs insights. Otherwise yes D also works, but B is =E2=80=9Cbetter=E2=80=9D",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 759255,
          "date": "Wed 28 Dec 2022 02:43",
          "username": "apcloud",
          "content": "The features of cloud watch logs insights. Otherwise yes D also works, but B is =E2=80=9Cbetter=E2=80=9D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 728421,
          "date": "Sun 27 Nov 2022 17:25",
          "username": "Maygam",
          "content": "1. https://docs.aws.amazon.com/awscloudtrail/latest/userguide/send-cloudtrail-events-to-cloudwatch-logs.html<br>2. https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 727462,
          "date": "Sat 26 Nov 2022 12:27",
          "username": "adozooMaygam",
          "content": "yes,the CloudTrail to deliver the API logs to Amazon S3 is betterCan you use cloudwatch to query logs in S3, as mentioned Option A?.",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 728814,
          "date": "Mon 28 Nov 2022 06:51",
          "username": "Maygam",
          "content": "Can you use cloudwatch to query logs in S3, as mentioned Option A?.",
          "upvote_count": "2",
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
      "question_text": "<p>A DevOps engineer is tasked with creating a more stable deployment solution for a web application in AWS. Previous deployments have resulted in user-facing bugs, premature user traffic, and inconsistencies between web servers running behind an Application Load Balancer. The current strategy uses AWS CodeCommit to store the code for the application. When developers push to the main branch of the repository, CodeCommit triggers an AWS Lambda deploy function, which invokes an AWS Systems Manager run command to build and deploy the new code to all Amazon EC2 instances.<br><br>Which combination of actions should be taken to implement a more stable deployment solution? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#89",
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
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 89 discussion",
      "discusstion": [
        {
          "id": 759865,
          "date": "Wed 28 Dec 2022 14:12",
          "username": "obaf1",
          "content": "Ans: BC<br>You can specify Application Load Balancer for deployment group...read the excerpt below (link of the entire page also provided):<br>\\\"For a blue/green deployment, you can specify a Classic Load Balancer, Application Load Balancer, or Network Load Balancer in your deployment group.\\\"<br>https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-aws-elastic-load-balancing.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 734288,
          "date": "Sat 03 Dec 2022 09:20",
          "username": "ET0125",
          "content": "I will go with BD,<br>C for selecting the ALB for the deployment group is not supported",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 732265,
          "date": "Thu 01 Dec 2022 06:00",
          "username": "SmileyCloud",
          "content": "BC makes most sense.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 727464,
          "date": "Sat 26 Nov 2022 12:32",
          "username": "adozoo",
          "content": "BC is ok",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BC"
        }
      ]
    },
    {
      "question_id": "#90",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to set up a continuous delivery pipeline. The company stores application code in a private GitHub repository. The company needs to deploy the application components to Amazon Elastic Container Service (Amazon ECS), Amazon EC2, and AWS Lambda. The pipeline must support manual approval actions.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#90",
          "answers": [
            {
              "choice": "<p>A. Use AWS CodePipeline with Amazon ECS, Amazon EC2, and Lambda as deploy providers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS CodePipeline with AWS CodeDeploy as the deploy provider.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS CodePipeline with AWS Elastic Beanstalk as the deploy provider.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS CodeDeploy with GitHub integration to deploy the application.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 90 discussion",
      "discusstion": [
        {
          "id": 727466,
          "date": "Sat 26 Nov 2022 12:33",
          "username": "adozoo",
          "content": "AWS CodeDeploy is one of the tools in the AWS Developer Tools series, which can be used to deploy to three computing environments: EC2, Lambda, and ECS.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#91",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A DevOps engineer is deploying an AWS Service Catalog portfolio using AWS CodePipeline. The pipeline should create products and templates based on a manifest file in either JSON or YAML, and should enforce security requirements on all AWS Service Catalog products managed through the pipeline.<br><br>Which solution will meet the requirements in an automated fashion?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#91",
          "answers": [
            {
              "choice": "<p>A. Use the AWS Service Catalog deploy action in AWS CodeDeploy to push new versions of products into the AWS Service Catalog with verification steps in the CodeDeploy AppSpec.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the AWS Service Catalog deploy action in AWS CodeBuild to verify and push new versions of products into the AWService Catalog.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use an AWS Lambda action in CodePipeline to run a Lambda function to verify and push new versions of products into the AWS Service Catalog.<br></p>",
              "correct": false,
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
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 91 discussion",
      "discusstion": [
        {
          "id": 732271,
          "date": "Thu 01 Dec 2022 06:09",
          "username": "SmileyCloudapcloud",
          "content": "A is correct. Here is an example. https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-S3-servicecatalog.htmlThis link explicitly states to skip the build stage, that is why code build is the incorrect answer",
          "upvote_count": "51",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 759278,
          "date": "Wed 28 Dec 2022 03:16",
          "username": "apcloud",
          "content": "This link explicitly states to skip the build stage, that is why code build is the incorrect answer",
          "upvote_count": "1",
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
      "question_text": "<p>A company has containerized all of its in-house quality control applications. The company is running Jenkins on Amazon EC2, which requires patching and upgrading. The compliance officer has requested a DevOps engineer begin encrypting build artifacts since they contain company intellectual property.<br><br>What should the DevOps engineer do to accomplish this in the MOST maintainable manner?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#92",
          "answers": [
            {
              "choice": "<p>A. Automate patching and upgrading using AWS Systems Manager on EC2 instances and encrypt Amazon EBS volumes by default.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy Jenkins to an Amazon ECS cluster and copy build artifacts to an Amazon S3 bucket with default encryption enabled.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Leverage AWS CodePipeline with a build action and encrypt the artifacts using AWS Secrets Manager.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS CodeBuild with artifact encryption to replace the Jenkins instance running on Amazon EC2.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 92 discussion",
      "discusstion": [
        {
          "id": 735650,
          "date": "Mon 05 Dec 2022 05:13",
          "username": "Maygam",
          "content": "https://docs.aws.amazon.com/codebuild/latest/userguide/security-encryption.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 732273,
          "date": "Thu 01 Dec 2022 06:13",
          "username": "SmileyCloud",
          "content": "D is the correct answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 727481,
          "date": "Sat 26 Nov 2022 12:45",
          "username": "adozoo",
          "content": "Build artifact encryption - CodeBuild requires access to an AWS KMS CMK in order to encrypt its build output artifacts. By default, CodeBuild uses an AWS Key Management Service CMK for Amazon S3 in your AWS account. If you do not want to use this CMK, you must create and configure a customer-managed CMK.",
          "upvote_count": "3",
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
      "question_text": "<p>A production account has a requirement that any Amazon EC2 instance that has been logged into manually must be terminated within 24 hours. All applications in the production account are using Auto Scaling groups with Amazon CloudWatch Logs agent configured.<br><br>How can this process be automated?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#93",
          "answers": [
            {
              "choice": "<p>A. Create a CloudWatch Logs subscription to an AWS Step Functions application. Configure the function to add a tag to the EC2 instance that produced the login event and mark the instance to be decommissioned. Then create a CloudWatch Events rule to trigger a second AWS Lambda function once a day that will terminate all instances with this tag.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a CloudWatch alarm that will trigger on the login event. Send the notification to an Amazon SNS topic that the operations team is subscribed to, and have them terminate the EC2 instance within 24 hours.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a CloudWatch alarm that will trigger on the login event. Configure the alarm to send to an Amazon SQS queue. Use a group of worker instances to process messages from the queue, which then schedules the Amazon CloudWatch Events rule to trigger.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a CloudWatch Logs subscription in an AWS Lambda function. Configure the function to add a tag to the EC2 instance that produced the login event and mark the instance to be decommissioned. Create a CloudWatch Events rule to trigger a daily Lambda function that terminates all instances with this tag.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 93 discussion",
      "discusstion": [
        {
          "id": 754063,
          "date": "Fri 23 Dec 2022 09:58",
          "username": "Imstack",
          "content": "DDDDDDDDDDDDDDD",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 732280,
          "date": "Thu 01 Dec 2022 06:25",
          "username": "SmileyCloud",
          "content": "A - You can't create a log subscription to AWS Step Function. Only OpenSearch, Kinesis, Kinesis Firehouse and Lambda.<br>B - is a manual process. It needs to be automated.<br>C - Too complex. Architecture doesn't make any sense.<br>D - Correct.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 727484,
          "date": "Sat 26 Nov 2022 12:52",
          "username": "adozoo",
          "content": "Does CloudWatch alarm that will trigger on the login event have such an event?Step function it s use to step like batch exe,just two lambda.no needed",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#94",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's application is running on Amazon EC2 instances in an Auto Scaling group. A DevOps engineer needs to ensure there are at least four application servers running at all times. Whenever an update has to be made to the application, the engineer creates a new AMI with the updated configuration and updates the AWS CloudFormation template with the new AMI ID.  After the stack update finishes, the engineer manually terminates the old instances one by one, verifying that the new instance is operational before proceeding. The engineer needs to automate this process.<br><br>Which action will allow for the LEAST number of manual steps moving forward?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#94",
          "answers": [
            {
              "choice": "<p>A. Update the CloudFormation template to include the UpdatePolicy attribute with the AutoScalingRollingUpdate policy.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Update the CloudFormation template to include the UpdatePolicy attribute with the AutoScalingReplacingUpdate policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use an Auto Scaling lifecycle hook to verify that the previous instance is operational before allowing the DevOps engineer's selected instance to terminate.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an Auto Scaling lifecycle hook to confirm there are at least four running instances before allowing the DevOps engineer's selected instance to terminate.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 94 discussion",
      "discusstion": [
        {
          "id": 754069,
          "date": "Fri 23 Dec 2022 10:05",
          "username": "Imstack",
          "content": "AAAAAAAAAAAAAA",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 727492,
          "date": "Sat 26 Nov 2022 13:01",
          "username": "adozoo",
          "content": "For rolling updates, you can specify whether AWS CloudFormation updates the instances in the Auto Scaling group in batches, or all instances at once.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#95",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company using AWS CodeCommit for source control wants to automate its continuous integration and continuous delivery pipeline on AWS in its development environment. The company has three requirements:<br><br>1. There must be a legal and a security review of any code change to make sure sensitive information is not leaked through the source code.<br>2. Every change must go through unit testing.<br>3. Every change must go through a suite of functional testing to ensure functionality.<br><br>In addition, the company has the following requirements for automation:<br><br>1. Code changes should automatically trigger the CI/CD pipeline.<br>2. Any failure in the pipeline should notify devops-admin@xyz.com.<br>3. There must be an approval to stage the assets to Amazon S3 after tests have been performed.<br><br>What should a DevOps Engineer do to meet all of these requirements while following Cl/CD best practices?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#95",
          "answers": [
            {
              "choice": "<p>A. Commit to the development branch and trigger AWS CodePipeline from the development branch. Make an individual stage in CodePipeline for security review, unit tests, functional tests, and manual approval. Use Amazon CloudWatch metrics to detect changes in pipeline stages and Amazon SES for emailing devops-admin@xyz.com.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Commit to mainline and trigger AWS CodePipeline from mainline. Make an individual stage in CodePipeline for security review, unit tests, functional tests, and manual approval. Use AWS CloudTrail logs to detect changes in pipeline stages and Amazon SNS for emailing devops-admin@xyz.com.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Commit to the development branch and trigger AWS CodePipeline from the development branch. Make an individual stage in CodePipeline for security review, unit tests, functional tests, and manual approval. Use Amazon CloudWatch Events to detect changes in pipeline stages and Amazon SNS for emailing devops-admin@xyz.com.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Commit to mainline and trigger AWS CodePipeline from mainline. Make an individual stage in CodePipeline for security review, unit tests, functional tests, and manual approval. Use Amazon CloudWatch Events to detect changes in pipeline stages and Amazon SES for emailing devops-admin@xyz.com.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 95 discussion",
      "discusstion": [
        {
          "id": 754071,
          "date": "Fri 23 Dec 2022 10:08",
          "username": "Imstack",
          "content": "CCCCCCCCCCCCCCCCCCCCCCCC",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 746011,
          "date": "Thu 15 Dec 2022 12:39",
          "username": "saggy4",
          "content": "A and D - SES instead of SNS<br>B - Cloudtrail does not logs for failed pipeline runs<br>C - is the correct answer, SNS for email and Cloudwatch Events for failed triggers",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 733703,
          "date": "Fri 02 Dec 2022 13:05",
          "username": "nsvijay04b1",
          "content": "Always Commit to the development branch not on mainlineand trigger AWS CodePipeline from the development branch.<br>Make an individual stage in CodePipeline for security review, unit tests, functional tests, and manual approval.<br>Amazon CloudWatch Events to detect changes in pipeline \\\"CodePipeline Stage Execution State Change\\\" andTarget a Amazon SNS topic.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#96",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A security review has identified that an AWS CodeBuild project is downloading a database population script from an Amazon S3 bucket using an unauthenticated request. The security team does not allow unauthenticated requests to S3 buckets for this project.<br><br>How can this issue be corrected in the MOST secure manner?</p>",
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
              "choice": "<p>A. Add the bucket name to the AllowedBuckets section of the CodeBuild project settings. Update the build spec to use the AWS CLI to download the database population script.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Modify the S3 bucket settings to enable HTTPS basic authentication and specify a token. Update the build spec to use cURL to pass the token and download the database population script.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Remove unauthenticated access from the S3 bucket with a bucket policy. Modify the service role for the CodeBuild project to include Amazon S3 access. Use the AWS CLI to download the database population script.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Remove unauthenticated access from the S3 bucket with a bucket policy. Use the AWS CLI to download the database population script using an IAM access key and a secret access key.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 96 discussion",
      "discusstion": [
        {
          "id": 754074,
          "date": "Fri 23 Dec 2022 10:11",
          "username": "Imstack",
          "content": "CCCCCCCCCCCCCCCCCC",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 743809,
          "date": "Tue 13 Dec 2022 10:23",
          "username": "Kapello10",
          "content": "B is the correct answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 732288,
          "date": "Thu 01 Dec 2022 06:42",
          "username": "SmileyCloud",
          "content": "C is correct. You need a role to access other AWS services.<br><br>https://docs.aws.amazon.com/codebuild/latest/userguide/setting-up.html#setting-up-service-role",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 727498,
          "date": "Sat 26 Nov 2022 13:08",
          "username": "adozoo",
          "content": "best practices",
          "upvote_count": "2",
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
      "question_text": "<p>A company has multiple development groups working in a single shared AWS account. The senior manager of the groups wants to be alerted via a third-party API call when the creation of resources approaches the service limits for the account.<br><br>Which solution will accomplish this with the LEAST amount of development effort?</p>",
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
              "choice": "<p>A. Create an Amazon CloudWatch Event rule that runs periodically and targets an AWS Lambda function. Within the Lambda function, evaluate the current state of the AWS environment and compare deployed resource values to resource limits on the account. Notify the senior manager if the account is approaching a service limit.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an AWS Lambda function that refreshes AWS Trusted Advisor checks, and configure an Amazon CloudWatch Events rule to run the Lambda function periodically. Create another CloudWatch Events rule with an event pattern matching Trusted Advisor events and a target Lambda function. In the target Lambda function, notify the senior manager.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy an AWS Lambda function that refreshes AWS Personal Health Dashboard checks, and configure an Amazon CloudWatch Events rule to run the Lambda function periodically. Create another CloudWatch Events rule with an event pattern matching Personal Health Dashboard events and a target Lambda function. In the target Lambda function, notify the senior manager.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add an AWS Config custom rule that runs periodically, checks the AWS service limit status, and streams notifications to an Amazon SNS topic. Deploy an AWS Lambda function that notifies the senior manager, and subscribe the Lambda function to the SNS topic.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 97 discussion",
      "discusstion": [
        {
          "id": 754120,
          "date": "Fri 23 Dec 2022 11:18",
          "username": "Imstack",
          "content": "B is the answer, best practice",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 732296,
          "date": "Thu 01 Dec 2022 06:47",
          "username": "SmileyCloud",
          "content": "B.  Any time there is a question about service limits, the answer is Trusted Advisor or Quota Monitor which still uses Trusted Advisor APIs.<br>https://aws.amazon.com/solutions/implementations/quota-monitor/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 731069,
          "date": "Wed 30 Nov 2022 05:00",
          "username": "Maygam",
          "content": "1. AWS Trusted Advisor can be used to access all checks in the Service Limits category.<br>https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html<br>2. AWS Quota Monitor would be more opt but is not listed as an option. Quota Monitor leverages Trusted Advisor.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 728003,
          "date": "Sun 27 Nov 2022 08:34",
          "username": "adozoo",
          "content": "https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#98",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A DevOps engineer is architecting a continuous development strategy for a company's software as a service (SaaS) web application running on AWS. For application and security reasons, users subscribing to this application are distributed across multiple Application Load Balancers (ALBs), each of which has a dedicated Auto Scaling group and fleet of Amazon EC2 instances. The application does not require a build stage, and when it is committed to AWS CodeCommit, the application must trigger a simultaneous deployment to all ALBs, Auto Scaling groups, and EC2 fleets.<br><br>Which architecture will meet these requirements with the LEAST amount of configuration?</p>",
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
              "choice": "<p>A. Create a single AWS CodePipeline pipeline that deploys the application in parallel using unique AWS CodeDeploy applications and deployment groups created for each ALB-Auto Scaling group pair.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a single AWS CodePipeline pipeline that deploys the application using a single AWS CodeDeploy application and single deployment group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a single AWS CodePipeline pipeline that deploys the application in parallel using a single AWS CodeDeploy application and unique deployment group for each ALB-Auto Scaling group pair.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS CodePipeline pipeline for each ALB-Auto Scaling group pair that deploys the application using an AWS CodeDeploy application and deployment group created for the same ALB-Auto Scaling group pair.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 98 discussion",
      "discusstion": [
        {
          "id": 759289,
          "date": "Wed 28 Dec 2022 03:42",
          "username": "apcloud",
          "content": "https://www.examtopics.com/discussions/amazon/view/28608-exam-aws-devops-engineer-professional-topic-1-question-177/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 754770,
          "date": "Sat 24 Dec 2022 09:30",
          "username": "Kapello10",
          "content": "A is the answer<br><br>Create a single AWS CodePipeline pipeline that deploys the application in parallel using unique AWS CodeDeploy applications and deployment groups created for each ALB-Auto Scaling group pair.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 732307,
          "date": "Thu 01 Dec 2022 06:58",
          "username": "SmileyCloudnsvijay04b1nsvijay04b1",
          "content": "C is correct, but there is a limitation that one deployment group can deploy up to 10 ASGs. The question doesn't say how many ASGs are there, it just says multiple.why limiation? it says clearly a different ASG per deployment group.<br><br>\\\"\\\"unique deployment group for each ALB-Auto Scaling group pair.\\\"\\\"***typo***<br>why limitation? it says clearly a different ASG per deployment group.<br>\\\"unique deployment group for each ALB-Auto Scaling group pair.\\\"",
          "upvote_count": "221",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 733710,
          "date": "Fri 02 Dec 2022 13:27",
          "username": "nsvijay04b1nsvijay04b1",
          "content": "why limiation? it says clearly a different ASG per deployment group.<br><br>\\\"\\\"unique deployment group for each ALB-Auto Scaling group pair.\\\"\\\"***typo***<br>why limitation? it says clearly a different ASG per deployment group.<br>\\\"unique deployment group for each ALB-Auto Scaling group pair.\\\"",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 733711,
          "date": "Fri 02 Dec 2022 13:27",
          "username": "nsvijay04b1",
          "content": "***typo***<br>why limitation? it says clearly a different ASG per deployment group.<br>\\\"unique deployment group for each ALB-Auto Scaling group pair.\\\"",
          "upvote_count": "1",
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
      "question_text": "<p>A company's primary AWS Region contains the following infrastructure:<br><br>- An Amazon S3 bucket that contains an object package that is used in instance user data to configure an application.<br>- Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer (ALB) with an instance profile that grants s3:Get* access on the S3 bucket.<br><br>The company has the following infrastructure in a backup Region:<br><br>- An S3 bucket with the same configuration as the S3 bucket in the primary AWS Region, but without any objects.<br>- EC2 instances in an Auto Scaling group behind an ALB that run with the same configuration as in the primary AWS Region.<br><br>To simulate a disaster recovery scenario, the company turns off all access to Amazon S3 and sets the Auto Scaling group's minimum, maximum, and desired instances to 0 in the primary Region. When the instances in the backup Region scale out, they do not pass Amazon Route 53 health checks.<br><br>Which combination of steps should the company take to resolve this issue? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BDF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#99",
          "answers": [
            {
              "choice": "<p>A. Update the Amazon EC2 Auto Scaling service-linked role to allow access to both S3 buckets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up S3 Cross-Region Replication from the S3 bucket in the primary Region to the S3 bucket in the backup Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the instance user data to reference the S3 bucket in the primary Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Increase the timeout for the target group health check.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Update the EC2 instance profile to allow s3:list* actions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Update the EC2 instance profile to allow read access to both S3 buckets.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 99 discussion",
      "discusstion": [
        {
          "id": 741943,
          "date": "Sun 11 Dec 2022 18:45",
          "username": "jaxsbr",
          "content": "B - To ensure the secondary S3 contains the required files needed<br>D - Provide enough time to download the S3 file and run user data<br>F - Since it's a DR scenario and the primary S3 can't be read from we should read from secondary S3. Providing the instance profile read access to both allows it to be used seamlessly before and during the DR scenario",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BDF"
        },
        {
          "id": 744249,
          "date": "Tue 13 Dec 2022 16:57",
          "username": "Chaiyaporn",
          "content": "BDF for me.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 741572,
          "date": "Sun 11 Dec 2022 10:49",
          "username": "SatenderRathee",
          "content": "Set up S3 Cross-Region Replication from the S3 bucket in the primary Region to the S3 bucket in the backup Region. This will ensure that the S3 bucket in the backup Region contains the necessary object package needed to configure the application.Update the instance user data to reference the S3 bucket in the primary Region. This will ensure that the instances in the backup Region are configured to use the object package from the S3 bucket in the primary Region.<br><br>Option D, increasing the timeout for the target group health check, may also be a helpful step to take, as it may give the instances in the backup Region more time to pass the health check. However, the other options are not necessary for resolving this issue.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 733749,
          "date": "Fri 02 Dec 2022 14:24",
          "username": "nsvijay04b1",
          "content": "options need access to both s3 buckets ruled out on DR region you need access to that region bucket with CCR enabled from primary region bucket.<br><br>As we need 3rd option also to select, increasing timeout on R53 selected.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BDE"
        }
      ]
    },
    {
      "question_id": "#100",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a web application's infrastructure using AWS CloudFormation. The database engineering team maintains the database resources in a CloudFormation template, and the software development team maintains the web application resources in a separate CloudFormation template. As the scope of the application grows, the software development team needs to use resources maintained by the database engineering team. However, both teams have their own review and lifecycle management processes that they want to keep. Both teams also require resource-level change-set reviews. The software development team would like to deploy changes to this template using their CI/CD pipeline.<br><br>Which solution will meet these requirements?</p>",
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
              "choice": "<p>A. Create a stack export from the database CloudFormation template and import those references into the web application CloudFormation template.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a CloudFormation nested stack to make cross-stack resource references and parameters available in both stacks.<br></p>",
              "correct": true,
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
      "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 100 discussion",
      "discusstion": [
        {
          "id": 747820,
          "date": "Sat 17 Dec 2022 07:41",
          "username": "benjl",
          "content": "I think answer is A. <br>nested stack is creating its own resources for software development team. The question ask for \\\"needs to use resources maintained by the database engineering team\\\". From this perspective, stack export and import is valid approach. In this case, development team get affected when there is a change in database team.<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.html#cross-stack",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 741576,
          "date": "Sun 11 Dec 2022 10:53",
          "username": "SatenderRathee",
          "content": "The correct answer is B.  Creating a CloudFormation nested stack allows the software development team to make cross-stack resource references and parameters available in both stacks, while still maintaining separate review and lifecycle management processes for each team. In this way, the software development team can use resources maintained by the database engineering team in their CloudFormation template, and can deploy changes to their template using their CI/CD pipeline.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 733763,
          "date": "Fri 02 Dec 2022 14:39",
          "username": "nsvijay04b1",
          "content": "A is wrong when DB team deletes stack , application team gets effected.<br>B is right , use nested stack and deploy own DB for application team and own resources. Even DB template changes further it wont effect already created resources or template application already referenced.<br><br>\\\"However, both teams have their own review and lifecycle management processes that they want to keep\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 733420,
          "date": "Fri 02 Dec 2022 04:36",
          "username": "quixo",
          "content": "Instead, use cross-stack references to export resources from a stack so that other stacks can use them. Stacks can use the exported resources by calling them using the Fn::ImportValue function.<br>Refer:https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.html<br>https://blog.shikisoft.com/cloudformation-nested-stacks-vs-cross-stack-references/<br>https://www.bogotobogo.com/DevOps/AWS/aws-Cloudformation-CrossStck-Reference.php<br><br>A",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 732320,
          "date": "Thu 01 Dec 2022 07:14",
          "username": "SmileyCloud",
          "content": "\\\"Nested Stacks are a great way to deploy your infrastructure in a modular fashion\\\"",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 731744,
          "date": "Wed 30 Nov 2022 17:33",
          "username": "Subhasis_Pattnayak",
          "content": "B is right",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    }
  ]
}