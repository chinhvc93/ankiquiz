var FreeCam_v20220826q100 = {
  msg: "Quiz Questions",
  data: [
    {
      question_id: "1",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is running a web application with On-Demand Amazon EC2 instances in Auto<br>Scaling groups that scale dynamically based on custom metrics After extensive testing, the company<br>determines that the m5.2xlarge instance size is optimal for the workload Application data is stored in<br>db.r4.4xlarge Amazon RDS instances that are confirmed to be optimal. The traffic to the web application<br>spikes randomly during the day.<br>What other cost-optimization methods should the company implement to<br>further reduce costs without impacting the reliability of the application?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "1",
          answers: [
            {
              choice:
                "<p> Reserve capacity for the RDS database and the minimum number of EC2 instances that are constantly running.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Reserve capacity for all EC2 instances and leverage Spot Instance pricing for the RDS database.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Reduce the RDS instance size to db.r4.xlarge and add five equivalent^ sized read replicas to provide reliability.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Double the instance count in the Auto Scaling groups and reduce the instance size to m5.large</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "2",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>The company needs to determine which costs on the monthly AWS bill are attributable to<br>each application or team. The company also must be able to create reports to compare costs from the last 12<br>months and to help forecast costs for the next 12 months. A solutions architect must recommend an AWS<br>Billing and Cost Management solution that provides these cost reports.<br>Which combination of actions will<br>meet these requirements? (Select THREE.)</p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A,C,F</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "2",
          answers: [
            {
              choice:
                "<p> Activate the AWS generated cost allocation tags that represent the application and the team.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice: "<p> Create a cost budget.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Activate IAM access to Billing and Cost Management.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Activate the user-defined cost allocation tags that represent the application and the team.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create a cost category for each application in Billing and Cost Management.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice: "<p> Enable Cost Explorer.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "3",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company wants to improve cost awareness for its Amazon EMR platform The company has aWocated budgets for each team's Amazon EMR usage When a budgetary threshold is reached a notification should be sent by email to the budget office's distribution list Teams should be able lo view their EMR cluster expenses to date A solutions architect needs to create a solution that ensures this policy is proactively and centrally enforced in a multi-account environment<br>Which combination of steps should the solutions architect take to meet these requirements? (Select TWO.)</p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B,D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "3",
          answers: [
            {
              choice:
                "<p> Create an AWS Service Catalog portfolio for each team. Add each team's Amazon EMR cluster as an AWS CloudFormation template to their Service Catalog portfolio as a Product</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create an Amazon CloudWatch metric for billing Create a custom alert when costs exceed the budgetary threshold.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Update the AWS CloudFormation template to include the AWS Budgets Budget resource with the NotificationsWithSubscnbers property</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Implement Amazon CloudWatch dashboards for Amazon EMR usage</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Create an EMR bootstrap action that runs at startup that calls the Cost Explorer API to set the budget on the cluster with the GetCostForecast and NotificationsWithSubscnbers actions</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "4",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>What should the solutions architect do to meet this requirement7</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "4",
          answers: [
            {
              choice:
                "<p> Use Amazon CloudWatch to monitor service quotas that are published under the AWS-'Usage metric namespace Set an alarm for when the math expression metricSERVlCE QUOTA(metric)\"100 is greater than 80 Notify the development team by using Amazon Simple Notification Service (Amazon SNS).</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Create an AWS Config rule to evaluate whether the Fargate SERVICE_QUOTA is greater than 80. Use Amazon Simple Email Service (Amazon SES) to notify the development team when the AWS Config rule is not compliant.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                '<p> / Use Amazon CloudWatch to monitor the Sample Count statistic for each service in the ECS cluster Se: an alarm for when the math expression sample Notification SERVICE_QUOTA(service)"100 is greater than 80 Notify the development team by using Amazon Simple Notification Service (Amazon SNS)</p>',
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create an AWS Lambda function to poll detailed metrics from the ECS cluster. When the number running Fargate tasks is greater than 80. invoke Amazon Simple Email Service (Amazon SES) to notify the development team</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "5",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has a new application that needs to run on five Amazon EC2 instances in a single AWS Region. The application requires high-throughput, low-latency network connections between all of the EC2 instances where the application will run. There is no requirement for the application to be fault tolerant.<br>Which solution will meet these requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: `<p>Correct Answer: C</p> This question has two parts : in the first it talks about "needs high-speed, low-latency network connections between all of the Amazon EC2 instances" and in the second part it talks about "not required to be fault tolerant". Hence, the option A is best suited on this scenario.`,
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "5",
          answers: [
            {
              choice:
                "<p> Launch five new EC2 instances into a partition placement group. Ensure that the EC2 instance type supports enhanced networking.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Launch five new EC2 instances into an Auto Scaling group in the same Availability Zone. Attach an extra elastic network interface to each EC2 instance.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Launch five new EC2 instances into a cluster placement group. Ensure that the EC2 instance type supports enhanced networking.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Launch five new EC2 instances into a spread placement group. Attach an extra elastic network interface to each EC2 instance.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "6",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A financial services company logs personally identifiable information 10 its application logs stored in Amazon S3. Due to regulatory compliance requirements, the log files must be encrypted at rest. The security team has mandated that the company's on-premises hardware security modules (HSMs) be used to generate the CMK material.<br>Which steps should the solutions architect take to meet these requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "6",
          answers: [
            {
              choice:
                "<p> Create an AWS CloudHSM cluster. Create a new CMK in AWS KMS using AWS_CloudHSM as the source (or the key material and an origin of AWS_CLOUDHSM. Enable automatic key rotation on the CMK with a duration of 1 year. Configure a bucket policy on the togging bucket thai disallows uploads of unencrypted data and requires that the encryption source be AWS KMS.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Provision an AWS Direct Connect connection, ensuring there is no overlap of the RFC 1918 address space between on-premises hardware and the VPCs. Configure an AWS bucket policy on the logging bucket that requires all objects to be encrypted. Configure the logging application to query the on-premises HSMs from the AWS environment for the encryption key material, and create a unique CMK for each logging event.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create a new CMK in AWS KMS with AWS-provkJed key material and an origin of AWS_KMS. Disable this CMK. and overwrite the key material with the key material from the on-premises HSM using the public key and import token provided by AWS. Re-enable the CMK. Enable automatic key rotation on the CMK with a duration of 1 year. Configure a bucket policy on the logging bucket that disallows uploads of non-encrypted data and requires that the encryption source be AWS KMS.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create a CMK in AWS KMS with no key material and an origin of EXTERNAL. Import the key material generated from the on-premises HSMs into the CMK using the public key and import token provided by AWS. Configure a bucket policy on the logging bucket that disallows uploads of non-encrypted data and requires that the encryption source be AWS KMS.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "7",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company wants to migrate a 30 TB Oracle data warehouse from on premises to Amazon Redshift The company used the AWS Schema Conversion Tool (AWS SCT) to convert the schema of the existing data warehouse to an Amazon Redshift schema The company also used a migration assessment report to identify manual tasks to complete.<br>The company needs to migrate the data to the new Amazon Redshift cluster during an upcoming data freeze period of 2 weeks The only network connection between the on-premises data warehouse and AWS is a 50 Mops internet connection<br>Which migration strategy meets these requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "7",
          answers: [
            {
              choice:
                "<p> Install the AWS SCT extraction agents on the on-premises servers. Define the extract, upload, and copy tasks to send the data to an Amazon S3 bucket. Copy the data into the Amazon Redshift cluster. Run the tasks at the beginning of the data freeze period.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create a job in AWS Snowball Edge to import data into Amazon S3 Install AWS SCT extraction agents on the on-premises servers Define the local and AWS Database Migration Service (AWS DMS) tasks to send the data to the Snowball Edge device When the Snowball Edge device is returned to AWS and the data is available in Amazon S3, run the AWS DMS subtask to copy the data to Amazon Redshift.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Create an AWS Database Migration Service (AWS DMS) replication instance. Authorize the public IP address of the replication instance to reach the data warehouse through the corporate firewall Create a migration task to run at the beginning of the data freeze period.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> install the AWS SCT extraction agents on the on-premises servers. Create a Site-to-Site VPN connection Create an AWS Database Migration Service (AWS DMS) replication instance that is the appropriate size Authorize the IP address of the replication instance to be able to access the on-premises data warehouse through the VPN connection</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "8",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is planning to set up a REST API application on AWS. The application team wants to set up a new identity store on AWS The IT team does not want to maintain any infrastructure or servers for this deployment.<br>What is the MOST operationally efficient solution that meets these requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "8",
          answers: [
            {
              choice:
                "<p> Deploy the application in Amazon Elastic Kubemetes Service (Amazon EKS) clusters. Set up an Application Load Balancer for the EKS pods Set up an Amazon Cognito user pool and service pod for authentication.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Deploy the application as AWS Lambda functions. Set up Amazon API Gateway REST API endpoints for the application Set up an Amazon Cognito user pool, and configure an Amazon Cognito authorizer</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Deploy the application as AWS Lambda functions. Set up Amazon API Gateway REST API endpoints for the application Create a Lambda function, and configure a Lambda authorizer</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Deploy the application in AWS AppSync, and configure AWS Lambda resolvers Set up an Amazon Cognito user pool, and configure AWS AppSync to use the user pool for authorization</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "9",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>An online magazine will launch Its latest edition this month. This edition will be the first to be distributed globally. The magazine's dynamic website currently uses an Application Load Balancer in front of the web tier a fleet of Amazon EC2 instances for web and application servers, and Amazon Aurora MySQL. Portions of the website include static content and almost all traffic is read-only<br>The magazine is expecting a significant spike m internet traffic when the new edition is launched Optimal performance is a top priority for the week following the launch<br>Which combination of steps should a solutions architect take to reduce system response antes for a global audience? (Select TWO )</p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B,E</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "9",
          answers: [
            {
              choice:
                "<p> Use logical cross-Region replication to replicate the Aurora MySQL database to a secondary Region Replace the web servers with Amazon S3 Deploy S3 buckets in cross-Region replication mode</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Introduce Amazon Route 53 with latency-based routing and Amazon CloudFront distributions. Ensure me web and application tiers are each in Auto Scaling groups</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Migrate the database from Amazon Aurora to Amazon RDS for MySQL. Ensure all three of the application tiers-web. application, and database-are in private subnets.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Ensure the web and application tiers are each m Auto Scaling groups. Introduce an AWS Direct Connect connection Deploy the web and application tiers in Regions across the world</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Use an Aurora global database for physical cross-Region replication. Use Amazon S3 with cross-Region replication for static content and resources. Deploy the web and application tiers in Regions across the world</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "10",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A startup company recently migrated a large ecommerce website to AWS. The website has experienced a 70% increase in sales. Software engineers are using a private GitHub repository to manage code. The DevOps learn is using Jenkins for builds and unit testing. The engineers need to receive notifications for bad builds and zero downtime during deployments. The engineers also need to ensure any changes to production are seamless for users and can be rolled back in the event of a major issue.<br>The software engineers have decided to use AWS CodePipeline to manage their build and deployment process.<br>Which solution will meet these requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "10",
          answers: [
            {
              choice:
                "<p> Use GitHub websockets to trigger the CodePipeline pipeline. Use AWS X-Ray for unit testing and static code analysis. Send alerts to an Amazon SNS topic for any bad builds. Deploy in a blue/green deployment using AWS CodeDeploy.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Use GitHub websockets to trigger the CodePipeline pipeline. Use the Jenkins plugin for AWS CodeBuild to conduct unit testing. Send alerts to an Amazon SNS topic for any bad builds. Deploy in an in-place. all-at-once deployment configuration using AWS CodeDeploy.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Use GitHub webhooks to trigger the CodePipeline pipeline. Use AWS X-Ray for unit testing and static code analysis. Send alerts to an Amazon SNS topic for any bad builds. Deploy in an in-place, all-at-once deployment configuration using AWS CodeDeploy.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Use GitHub webhooks to trigger the CodePipeline pipeline. Use the Jenkins plugin for AWS CodeBuild to conduct unit testing. Send alerts to an Amazon SNS topic for any bad builds. Deploy in a blue/green deployment using AWS CodeDeploy.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "11",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>To abide by industry regulations, a solutions architect must design a solution that will store a company's critical data in multiple public AWS Regions, including in the United States, where the company's headquarters is located. The solutions architect is required to provide access to the data stored in AWS to the company's global WAN network. The security team mandates that no traffic accessing this data should traverse the public internet.<br>How should the solutions architect design a highly available solution that meets the requirements and is cost-effective?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "11",
          answers: [
            {
              choice:
                "<p> Establish two AWS Direct Connect connections from the company headquarters to an AWS Region. Use the company WAN to send traffic over a DX connection. Use an AWS transit VPC solution to access data in other AWS Regions.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Establish two AWS Direct Connect connections from the company headquarters to an AWS Region. Use the company WAN to send traffic over a DX connection. Use inter-region VPC peering to access the data in other AWS Regions.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Establish two AWS Direct Connect connections from the company headquarters to an AWS Region. Use the company WAN to send traffic over a DX connection. Use Direct Connect Gateway to access data in other AWS Regions.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Establish AWS Direct Connect connections from the company headquarters to all AWS Regions in use. Use the company WAN lo send traffic over to the headquarters and then to the respective DX connection to access the data.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "12",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is storing data on premises on a Windows file server. The company produces 5 GB of new data daily.<br>The company migrated part of its Windows-based workload to AWS and needs the data to be available on a file system in the cloud. The company already has established an AWS Direct Connect connection between the on-premises network and AWS.<br>Which data migration strategy should the company use?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "12",
          answers: [
            {
              choice:
                "<p> Use the file gateway option in AWS Storage Gateway to replace the existing Windows file server, and point the existing file share to the new file gateway.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Use AWS Data Pipeline to schedule a daily task to replicate data between the on-premises Windows file server and Amazon Elastic File System (Amazon EFS).</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Use AWS DataSync to schedule a daily task lo replicate data between the on-premises Windows file server and Amazon Elastic File System (Amazon EFS),</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Use AWS DataSync to schedule a daily task to replicate data between the on-premises Windows file server and Amazon FSx.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "13",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company wants to migrate a 30 TB Oracle data warehouse from on premises to Amazon Redshift The company used the AWS Schema Conversion Tool (AWS SCT) to convert the schema of the existing data warehouse to an Amazon Redshift schema The company also used a migration assessment report to identify manual tasks to complete.<br>The company needs to migrate the data to the new Amazon Redshift cluster during an upcoming data freeze period of 2 weeks The only network connection between the on-premises data warehouse and AWS is a 50 Mops internet connection<br>Which migration strategy meets these requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "13",
          answers: [
            {
              choice:
                "<p> Create an AWS Database Migration Service (AWS DMS) replication instance. Authorize the public IP address of the replication instance to reach the data warehouse through the corporate firewall Create a migration task to run at the beginning of the data freeze period.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create a job in AWS Snowball Edge to import data into Amazon S3 Install AWS SCT extraction agents on the on-premises servers Define the local and AWS Database Migration Service (AWS DMS) tasks to send the data to the Snowball Edge device When the Snowball Edge device is returned to AWS and the data is available in Amazon S3, run the AWS DMS subtask to copy the data to Amazon Redshift.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> install the AWS SCT extraction agents on the on-premises servers. Create a Site-to-Site VPN connection Create an AWS Database Migration Service (AWS DMS) replication instance that is the appropriate size Authorize the IP address of the replication instance to be able to access the on-premises data warehouse through the VPN connection</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Install the AWS SCT extraction agents on the on-premises servers. Define the extract, upload, and copy tasks to send the data to an Amazon S3 bucket. Copy the data into the Amazon Redshift cluster. Run the tasks at the beginning of the data freeze period.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "14",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has a policy that all Amazon EC2 instances that are running a database must exist within the same subnets in a shared VPC Administrators must follow security compliance requirements and are not allowed to directly log in to the shared account All company accounts are members of the same organization in AWS Organizations. The number of accounts will rapidly increase as the company grows.<br>A solutions architect uses AWS Resource Access Manager to create a resource share in the shared account<br>What is the MOST operationally efficient configuration to meet these requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: `<p>Correct Answer: D</p> To restrict resource sharing to only principals in your organization, choose Allow sharing with principals in your organization only. <br> Link: <a target="_blank" href="https://aws.amazon.com/blogs/networking-and-content-delivery/vpc-sharing-a-new-approach-to-multiple-accounts-and-vpc-management/">https://aws.amazon.com/blogs/networking-and-content-delivery/vpc-sharing-a-new-approach-to-multiple-accounts-and-vpc-management/</a>`,
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "14",
          answers: [
            {
              choice:
                "<p> Add the VPC to the resource share. Add the organization as a principal</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Add the VPC to the resource share. Add the account IDs as principals</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Add all subnets within the VPC to the resource share. Add the account IDs as principals</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Add all subnets within the VPC to the resource share. Add the organization as a principal.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "15",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect is migrating an existing workload to AWS Fargate. The task can only run in a private subnet within the VPC where there is no direct connectivity from outside the system to the application When the Fargate task is launched the task fails with the following error:<br><code>CannotPullContainerError: API error (500): Get https://111122223333.dkr.ecr.us-east-1.amazonaws.com/v2/: net/http: request canceled while waiting for connection</code><br>How should the solutions architect correct this error?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: `
        <p>Correct Answer: B</p> 
        To resolve this issue, you can: <br>
        o For tasks in public subnets, specify ENABLED for Auto-assign public IP when launching the task. <br>
        o For tasks in private subnets, specify DISABLED for Auto-assign public IP when launching the task, and
        configure a NAT gateway in your VPC to route requests to the internet.
        `,
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "15",
          answers: [
            {
              choice:
                "<p> Ensure the task is set to ENABLED for the auto-assign public IP setting when launching the task.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Ensure the task is set to DISABLED for the auto-assign public IP setting when launching the task. Configure a NAT gateway in the public subnet in the VPC to route requests to the internet.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>  Ensure the task is set to DISABLED for the auto-assign public IP setting when launching the task. Configure a NAT gateway in the private subnet in the VPC to route requests to the internet.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Ensure the network mode is set to bridge in the Fargate task definition.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "16",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company hosts a blog post application on AWS using Amazon API Gateway. Amazon DynamoDB, and AWS Lambda The application currently does not use API keys to authorize requests The API model is as follows:<br>GET /posts/Jpostld) to get post details<br>GET /users/{userld}. to get user details<br>GET /comments/{commentld}: to get comments details<br>The company has noticed users are actively discussing topics in the comments section, and the company wants to increase user engagement by making the comments appear in real time<br>Which design should be used to reduce comment latency and improve user experience?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: `<p>Correct Answer: A</p> keyword "in real time" -> APPSYNC. Link: https://aws.amazon.com/appsync/`,
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "16",
          answers: [
            {
              choice:
                "<p> Use AWS AppSync and leverage WebSockets to deliver comments</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Modify the blog application code to request GET/commentsV{commentld} every 10 seconds</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Use edge-optimized API with Amazon CloudFront to cache API responses.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Change the concurrency limit of the Lambda functions to lower the API response time.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "17",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A development team s Deploying new APIs as serverless applications within a company. The team is currently using the AWS Maragement Console to provision Amazon API Gateway. AWS Lambda, and Amazon DynamoDB resources A solutions architect has been tasked with automating the future deployments of these serveriess APIs<br>How can this be accomplished?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback:
        "<p>Correct Answer: D</p> I would go for D, SAM only works in CLI and the team is currently using the AWS Management Console to provision Amazon API Gateway, AWS Lambda, and Amazon DynamoDB resources.",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "17",
          answers: [
            {
              choice:
                "<p> Commit the application code to the AWS CodeCommit code repository. Use AWS CodePipeline and connect to the CodeCommit code repository Use AWS CodeBuild to build and deploy the Lambda functions using AWS CodeDeptoy Specify the deployment preference type in CodeDeploy to gradually shift traffic over to the new version.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Use AWS CloudFormation to define the serverless application. Implement versioning on the Lambda functions and create aliases to point to the versions. When deploying, configure weights to implement shifting traffic to the newest version, and gradually update the weights as traffic moves over</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Use AWS CloudFonTiation with a Lambda-backed custom resource to provision API Gateway Use the MfS: :OynMoDB::Table and AWS::Lambda::Function resources to create the Amazon DynamoOB table and Lambda functions Write a script to automata the deployment of the CloudFormation template.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Use the AWS Serverless Application Model to define the resources Upload a YAML template and application files to the code repository Use AWS CodePipeline to conned to the code repository and to create an action to build using AWS CodeBuild. Use the AWS CloudFormabon deployment provider m CodePipeline to deploy the solution.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "18",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A fitness tracking company serves users around the world, with its primary markets in North America and Asi<br>a. The company needs to design an infrastructure for its read-heavy user authorization application with the following requirements:<br>* Be resilient to problems with the application in any Region.<br>* Write to a database in a single Region.<br>* Read from multiple Regions.<br>* Support resiliency across application tiers in each Region.<br>* Support the relational database semantics reflected in the application.<br>Which combination of steps should a solutions architect take? (Select TWO.)</p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: `<p>Correct Answer: A,B</p> B because "failover routing" gives resiliency <br>
      A because rest of the options dont make sense for read-heavy and write to central requirement`,
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "18",
          answers: [
            {
              choice:
                "<p> Use an Amazon Route 53 geolocation routing policy combined with a failover routing policy.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Set up active-active web and application servers in each Region. Deploy an Amazon Aurora global database with clusters in each Region. Set up the application to use the in-Region Aurora database endpoints. Create snapshots of the web and application servers and store them in an Amazon S3 bucket in both Regions.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Use an Amazon Route 53 geoproximity routing policy combined with a multivalue answer routing policy.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Deploy web. application, and MySQL database servers to Amazon EC2 instances in each Region. Set up the application so that reads and writes are local to the Region. Create snapshots of the web, application, and database servers and store the snapshots in an Amazon S3 bucket in both Regions. Set up cross-Region replication for the database layer.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Set up web, application, and Amazon RDS for MySQL instances in each Region. Set up the application so that reads are local and writes are partitioned based on the user. Set up a Multi-AZ failover for the web, application, and database servers. Set up cross-Region replication for the database layer.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "19",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is building an image service on the web that will allow users to upload and search random photos. At peak usage, up to 10.000 users worldwide will upload their images. The service will then overlay text on the uploaded images, which will then be published on the company website.<br>Which design should a solutions architect implement?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback:
        "<p>Correct Answer: A</p> Decoupled application that can have 10,000 or more calls in a seconds, S3+SQS",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "19",
          answers: [
            {
              choice:
                "<p> Store the uploaded images in an Amazon S3 bucket and configure an S3 bucket event notification to send a message to the Amazon Simple Queue Service (Amazon SQS) queue. Create a fleet of Amazon EC2 instances to pull messages from Ihe SQS queue to process the images and place them in another S3 bucket. Use Amazon CloudWatch metrics for queue depth to scale out EC2 instances. Enable Amazon CloudFront and configure the origin to be the S3 bucket that contains the processed images.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Store the uploaded images in Amazon Elastic File System (Amazon EFS). Send application log information about each image to Amazon CloudWatch Logs. Create a fleet of Amazon EC2 instances that use CloudWatch Logs to determine which images need to be processed. Place processed images in anolher directory in Amazon EFS. Enable Amazon CloudFront and configure the origin to be the one of the EC2 instances in the fleet.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Store the uploaded images in an Amazon S3 bucket and configure an S3 bucket event notification to send a message to Amazon Simple Notification Service (Amazon SNS). Create a fleet of Amazon EC2 instances behind an Application Load Balancer (ALB) to pull messages from Amazon SNS to process the images and place them in Amazon Elastic File System (Amazon EFS). Use Amazon CloudWatch metrics for the SNS message volume to scale out EC2 instances. Enable Amazon CloudFront and configure the origin lo be the ALB in front of the EC2 instances.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Store the uploaded images on a shared Amazon Elastic Block Store (Amazon EBS) volume mounted to a fleet of Amazon EC2 Spot instances. Create an Amazon DynamoDB table that contains information about each uploaded image and whether it has been processed. Use an Amazon EventBridge (Amazon CloudWatch Events) rule lo scale out EC2 instances. Enable Amazon CloudFront and configure the origin to reference an Elastic Load Balancer in front of the fleet of EC2 instances.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "20",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect is building a containerized NET Core application that will run in AWS Fargate The backend of the application requires Microsoft SQL Server with high availability All tiers of the application must be highly available. The credentials used for the connection string to SQL Server should not be stored on disk within the .NET Core front-end containers<br>Which strategies should the solutions architect use to meet these requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback:
        "<p>Correct Answer: C</p> By default tasks in Fargate are assigned ephemeral storage. https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-task-storage.html https://aws.amazon.com/premiumsupport/knowledge-center/ecs-data-security-container-task/",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "20",
          answers: [
            {
              choice:
                "<p> Set up SQL Server to run in Fargate with Service Auto Scaling. Create an Amazon ECS task execution role that allows the Fargate task definition to get the secret value for the credentials to SQL Server running in Fargate. Specify the ARN of the secret in AWS Secrets Manager in the secrets section of the Fargate task definition so the sensitive data can be injected into the containers as environment variables on startup for reading into the application to construct the connection string. Set up the .NET Core service using Service Auto Scaling behind an Application Load Balancer in multiple Availability Zones.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create an Auto Scaling group to run SQL Server on Amazon EC2. Create a secret in AWS Secrets Manager for the credentials to SQL Server running on EC2. Create an Amazon ECS task execution role that allows the Fargate task definition to get the secret value for the credentials to SQL Server on EC2. Specify the ARN of the secret in Secrets Manager in the secrets section of the Fargate task definition so the sensitive data can be injected into the containers as environment variables on startup for reading into the application to construct the connection string. Set up the .NET Core service using Service Auto Scaling behind an Application Load Balancer in multiple Availability Zones.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create a Multi-AZ deployment of SQL Server on Amazon RDS. Create a secret in AWS Secrets Manager for the credentials to the RDS database. Create an Amazon ECS task execution role that allows the Fargate task definition to get the secret value for the credentials to the RDS database in Secrets Manager. Specify the ARN of the secret in Secrets Manager in the secrets section of the Fargate task definition so the sensitive data can be injected into the containers as environment variables on startup for reading into the application to construct the connection string. Set up the .NET Core service in Fargate using Service Auto Scaling behind an Application Load Balancer in multiple Availability Zones.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Create a Multi-AZ deployment of SQL Server on Amazon RDS. Create a secret in AWS Secrets Manager for the credentials to the RDS database. Create non- persistent empty storage for the .NET Core containers in the Fargate task definition to store the sensitive information. Create an Amazon ECS task execution role that allows the Fargate task definition to get the secret value for the credentials to the RDS database in Secrets Manager. Specify the ARN of the secret in Secrets Manager in the secrets section of the Fargate task definition so the sensitive data can be written to the non-persistent empty storage on startup for reading into the application to construct the connection string. Set up the .NET Core service using Service Auto Scaling behind an Application Load Balancer in multiple Availability Zones.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "21",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A financial services company loaded millions of historical stock trades into an Amazon DynamoDB table The table uses on-demand capacity mode Once each day at midnight, a few million new records are loaded into the table Application read activity against the table happens in bursts throughout the day, and a limited set of keys are repeatedly looked up. The company needs to reduce costs associated with DynamoDB.<br>Which strategy should a solutions architect recommend to meet this requirement?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback:
        "<p>Correct Answer: B</p> Saving Plans does NOT support DynamoDB. <br> DAX + provisioned capacity + auto scaling. Savings plans are for EC2 and do not contribute to DynamoDB",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "21",
          answers: [
            {
              choice:
                "<p> Deploy DynamoDB Accelerator (DAX) Configure DynamoDB auto scaling Purchase Savings Plans in Cost Explorer</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Deploy DynamoDB Accelerator (DAX) Use provisioned capacity mode Configure DynamoDB auto scaling</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Deploy an Amazon ElastiCache cluster in front of the DynamoDB table.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Use provisioned capacity mode Purchase Savings Plans in Cost Explorer</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "22",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect needs to advise a company on how to migrate its on-premises data processing application to the AWS Cloud. Currently, users upload input files through a web portal. The web server then stores the uploaded files on NAS and messages the processing server over a message queue. Each media file can take up to 1 hour to process. The company has determined that the number of media files awaiting processing is significantly higher during business hours, with the number of files rapidly declining after business hours.<br>What is the MOST cost-effective migration recommendation?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "22",
          answers: [
            {
              choice:
                "<p> Create a queue using Amazon MQ. Configure the existing web server to publish to the new queue. When there are messages in the queue, invoke an AWS Lambda function to pull requests from the queue and process the files. Store the processed files in Amazon EFS.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create a queue using Amazon SQS. Configure the existing web server to publish to the new queue. Use Amazon EC2 instances in an EC2 Auto Scaling group to pull requests from the queue and process the files. Scale the EC2 instances based on the SQS queue length. Store the processed files in an Amazon S3 bucket.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Create a queue using Amazon MQ. Configure the existing web server to publish to the new queue. When there are messages in the queue, create a new Amazon EC2 instance to pull requests from the queue and process the files. Store the processed files in Amazon EFS. Shut down the EC2 instance after the task is complete.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create a queue using Amazon SQS. Configure the existing web server to publish to the new queue. When there are messages in the queue, invoke an AWS Lambda function to pull requests from the queue and process the files. Store the processed files in an Amazon S3 bucket.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "23",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company's site reliability engineer is performing a review of Amazon FSx for Windows File Server deployments within an account that the company acquired Company policy states that all Amazon FSx file systems must be configured to be highly available across Availability Zones.<br>During the review, the site reliability engineer discovers that one of the Amazon FSx file systems used a deployment type of Single-AZ 2 A solutions architect needs to minimize downtime while aligning this Amazon FSx file system with company policy.<br>What should the solutions architect do to meet these requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback:
        "<p>Correct Answer: B</p> https://www.examtopics.com/discussions/amazon/view/69129-exam-aws-certified-solutions-architect-professional-topic-1/",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "23",
          answers: [
            {
              choice:
                "<p> Reconfigure the deployment type to Multi-AZ for this Amazon FSx tile system</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create a new Amazon FSx fie system with a deployment type of Multi-AZ. Use AWS DataSync to transfer data to the new Amazon FSx file system. Point users to the new location</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Create a second Amazon FSx file system with a deployment type of Single-AZ 2. Use AWS DataSync to keep the data n sync. Switch users to the second Amazon FSx fie system in the event of failure</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Use the AWS Management Console to take a backup of the Amazon FSx He system Create a new Amazon FSx file system with a deployment type of Multi-AZ Restore the backup</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "24",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        '<p>A company is in the process of implementing AWS Organizations to constrain its developers to use only Amazon EC2. Amazon S3 and Amazon DynamoDB. The developers account resides In a dedicated organizational unit (OU). The solutions architect has implemented the following SCP on the developers account:<br><img src="https://www.examtopics.com/assets/media/exam-media/04241/0037900001.png" style="width: 100%; max-width: 335px; height: 100%; max-height: 439px;"><br>When this policy is deployed, IAM users in the developers account are still able to use AWS services that are not listed in the policy. What should the solutions architect do to eliminate the developers\' ability to use services outside the scope of this policy?</p>',
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "24",
          answers: [
            {
              choice:
                "<p> Remove the FullAWSAccess SCP from the developer account's OU</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Create an explicit deny statement for each AWS service that should be constrained</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Modify the FullAWSAccess SCP to explicitly deny all services</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Add an explicit deny statement using a wildcard to the end of the SCP</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "25",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>An online retail company hosts its stateful web-based application and MySQL database in an on-premises data center on a single server. The company wants to increase its customer base by conducting more marketing campaigns and promotions. In preparation, the company wants to migrate its application and database to AWS to increase the reliability of its architecture.<br>Which solution should provide the HIGHEST level of reliability?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback:
        "<p>Correct Answer: B</p> The question not mention that need multi-thread, so Redis is better than Memcache. There is no clustering in Memcache, only sharding.",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "25",
          answers: [
            {
              choice:
                "<p> Migrate the database to an Amazon RDS MySQL Multi-AZ DB instance. Deploy the application in an Auto Scaling group on Amazon EC2 instances behind an Application Load Balancer. Store sessions in Amazon Neptune.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Migrate the database to Amazon Aurora MySQL. Deploy the application in an Auto Scaling group on Amazon EC2 instances behind an Application Load Balancer. Store sessions in an Amazon ElastiCache for Redis replication group.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Migrate the database to an Amazon RDS MariaDB Multi-AZ DB instance. Deploy the application in an Auto Scaling group on Amazon EC2 instances behind an Application Load Balancer. Store sessions in Amazon ElastiCache for Memcached.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Migrate the database to Amazon DocumentDB (with MongoDB compatibility). Deploy the application in an Auto Scaling group on Amazon EC2 instances behind a Network Load Balancer. Store sessions in Amazon Kinesis Data Firehose.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "26",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company wants to change its internal cloud billing strategy for each of its business units. Currently, the cloud governance team shares reports for overall cloud spending with the head of each business unit. The company uses AWS Organizations lo manage the separate AWS accounts for each business unit. The existing tagging standard in Organizations includes the application, environment, and owner. The cloud governance team wants a centralized solution so each business unit receives monthly reports on its cloud spending. The solution should also send notifications for any cloud spending that exceeds a set threshold.<br>Which solution is the MOST cost-effective way to meet these requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "26",
          answers: [
            {
              choice:
                "<p> Configure AWS Budgets in each account and configure budget alerts lhat are grouped by application, environment, and owner. Add each business unit to an Amazon SNS topic for each alert. Use the AWS Billing and Cost Management dashboard in each account to create monthly reports for each business unit.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Configure AWS Budgets in the organization's master account and configure budget alerts that are grouped by application, environment, and owner. Add each business unit to an Amazon SNS topic for each alert. Use Cost Explorer in the organization's master account to create monthly reports for each business unit.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Configure AWS Budgets in each account and configure budget alerts that are grouped by application, environment, and owner. Add each business unit to an Amazon SNS topic for each alert. Use Cost Explorer in each account to create monthly reports for each business unit.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Enable AWS Cost and Usage Reports in the organization's master account and configure reports grouped by application, environment, and owner. Create an AWS Lambda function that processes AWS Cost and Usage Reports, sends budget alerts, and sends monthly reports to each business unit's email list.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "27",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company wants to retire its Oracle Solaris NFS storage arrays. The company requires rapid data migration over its internet network connection to a combination of destinations for Amazon S3. Amazon Elastic File System (Amazon EFS), and Amazon FSx lor Windows File Server. The company also requires a full initial copy, as well as incremental transfers of changes until the retirement of the storage arrays. All data must be encrypted and checked for integrity.<br>What should a solutions architect recommend to meet these requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "27",
          answers: [
            {
              choice:
                "<p> Configure AWS DataSync. Configure the DataSync agent and deploy it to the local network. Create a transfer task and start the transfer.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Configure CloudEndure. Create a project and deploy the CloudEndure agent and token to the storage array. Run the migration plan to start the transfer.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Configure AWS Transfer (or FTP. Configure the FTP client with credentials. Script the client to connect and sync to start the transfer.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Configure the aws S3 sync command. Configure the AWS client on the client side with credentials. Run the sync command to start the transfer.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "28",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company runs applications on Amazon EC2 instances. The company plans to begin using an Auto Scaling group for the instances. As part of this transition, a solutions architect must ensure that Amazon CloudWatch Logs automatically collects logs from all new instances The new Auto Scaling group will use a launch template that includes the Amazon Linux 2 AMI and no key pair<br>Which solution meets these requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "28",
          answers: [
            {
              choice:
                "<p> Create an Amazon CloudWatch agent configuration for the workload. Save the CloudWatch agent configuration as pan of an AWS Lambda deployment package. Use AWS CloudTrail to capture EC2 tagging events and initiate agent installation. Use AWS CodeBuild to configure the CloudWatch agent on the instances that run the workload.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create an Amazon CloudWatch agent configuration for the workload Store the CloudWatch agent configuration in an Amazon S3 bucket Write an EC2 user data script to fetch the configuration He from Amazon S3. Configure the cloudWatch agent on the instance during Initial boot.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create an Amazon CloudWatch agent configuration for the workload In AWS Systems Manager Parameter Store Create a Systems Manager document that Installs and configures the CloudWatch agent by using the configuration Create an Amazon EventBridge (Amazon CloudWatch Events) rule on the default event bus with a Systems Manager Run Command target that runs the document whenever an instance enters the running state.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Create an Amazon CloudWatch agent configuration for the workload Create an AWS Lambda function to Install and configure CloudWatch agent by using AWS Systems Manager Session Manager. Include the agent configuration inside the Lambda package Create an AWS Config custom rule to identify changes to the EC2 instances and invoke the Lambda function</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "29",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is planning to migrate an application from on premises to AWS. The application currently uses an Oracle database and the company can tolerate a brief downtime of 1 hour when performing the switch to the new infrastructure As part of the migration. the database engine will be changed to MySQL. A solutions architect needs to determine which AWS services can be used to perform the migration while minimizing the amount of work and time required.<br>Which of the following will meet the requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback:
        "<p>Correct Answer: B</p> AWS Application Discovery Service can't identify what embedded SQL code in the application, SCT can scan application source code for embedded SQL statements and convert them as part of a database schema conversion project. So I think the correct answer is B.",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "29",
          answers: [
            {
              choice:
                "<p> Use AWS DMS to begin moving data from the on-premises database to AWS After the initial copy, continue to use AWS DMS to keep the databases in sync until cutting over to the new database use AWS Application Discovery Service to identify what embedded SQL code m the application can be convened and what has to be done manually</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Use AWS SCT to generate the schema scripts and apply them on the target prior to migration. Use AWS DMS to begin moving data from the on-premises database to AWS. After the initial copy continue to use AWS DMS to keep the databases m sync until cutting over to the new database Use AWS SCT to identify what embedded SOL code in the application can be converted and what has to be done manually.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Use AWS DMS to help identify the best target deployment between installing the database engine on Amazon EC2 directly or moving to Amazon RDS. Then, use AWS DMS to migrate to the platform. Use AWS Application Discovery Service to identify what embedded SQL code in the application can be converted and what has to be done manually.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Use AWS SCT to generate the schema scripts and apply them on the target prior to migration Use AWS DMS to analyse the current schema and provide a recommendation for the optimal database engine Then, use AWS DMS to migrate to the recommended engine Use AWS SCT to identify what embedded SQL code in the application can be converted and what has to be done manually</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "30",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect at a largo company needs to set up network security for outbound traffic to the internet from all AWS accounts within an organization m AWS Organizations The organization has more than 100 AWS accounts, and the accounts route to each other by using a centralized AWS Transit Gateway. Each account has both an internet gateway and a NAT gateway for outbound traffic to the interne) The company deploys resources only Into a single AWS Region<br>The company needs the ability to add centrally managed rule-based filtering on all outbound traffic to the internet for all AWS accounts in the organization The peak load of outbound traffic will not exceed 25 Gbps in each Availability Zone<br>Which solution meets these requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "30",
          answers: [
            {
              choice:
                "<p> Create an AWS Network Firewall firewal for rule-based filtering in each AWS account Modify all default routes to point to the Network Firewall firewalls in each account.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Creats a new VPC for outbound traffic to the internet Connect the existing transit gateway to the new VPC Configure a new NAT gateway Create an Auto Scaling group of Amazon EC2 Instances that run an open-source internet proxy for rule-based filtering across all Availability Zones in the Region Modify all default routes to point to the proxy's Auto Scaling group</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> In each AWS account, create an Auto Scaling group of network-optimized Amazon EC2 instances that run an open-source internet proxy for rule-based filtering Modify all default routes to point to the proxy's Auto Scaling group.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create a new VPC for outbound traffic to the internet Connect the existing transit gateway to the new VPC Configure a new NAT gateway Use an AWS Network Firewall firewall for rule-based filtering Create Network Firewall endpoints In each Availability Zone Modify all default routes to point to the Network Firewall endpoints</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "31",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company uses AWS Organizations to manage more than 1.000 AWS accounts. The company has created a new developer organization. There are 540 developer member accounts that must be moved to the new developer organization All accounts are set up with all the required Information so mat each account can be operated as a standalone account<br>Which combination of steps should a solutions architect take to move all of the developer accounts to the new developer organization? (Select THREE )</p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B,C,E</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "31",
          answers: [
            {
              choice:
                "<p> Have each developer sign in to their account and confirm to join the new developer organization.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Call the InviteAccountToOrganzation operation in the Organizations API from the new developer organization's management account to send invitations to the developer accounts.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Sign in to the new developer organization's management account and create a placeholder member account that acts as a target for the developer account migration</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> From each developer account, remove the account from the old organization using the RemoveAccounrFromOrganization operation in the Organizations API</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> From the management account remove each developer account from the old organization using the RemoveAccountFromOrganization operation in the Organizations API</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Call the MoveAccount operation In the Organizations API from the old organization's management account to migrate the developer accounts to the new developer organization</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "32",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A large multinational company runs a timesheet application on AWS that is used by staff across the world The application runs on Amazon EC2 instances in an Auto Scaling group behind an Elastic Load Balancing (ELB) load balancer, and stores data in an Amazon RDS MySQL Multi-AZ database instance.<br>The CFO is concerned about the impact on the business if the application is not available The application must not be down for more than two hours, but the solution must be as cost-effective as possible<br>How should the solutions architect meet the CFO's requirements while minimizing data loss?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "32",
          answers: [
            {
              choice:
                "<p> In another region, configure a read replica and create a copy of the infrastructure When an issue occurs, promote the read replica and configure as an Amazon RDS Multi-AZ database instance Update the DNS record to point to the other region's ELB</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Configure a 1-day window of 60 minute snapshots of the Amazon RDS Multi-AZ database instance which is copied to another region Create an AWS CloudFormation template of the application infrastructure that uses the latest copied snapshot When an issue occurs, use the AWS CloudFormation template to create the environment in another region Update the DNS record to point to the other region's ELB</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Configure a read replica in another region Create an AWS CloudFormation template of the application infrastructure When an issue occurs, promote the read replica and configure as an Amazon RDS Multi-AZ database instance and use the AWS CloudFormation template to create the environment in another region using the promoted Amazon RDS instance Update the DNS record to point to the other region's ELB</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Configure a 1-day window of 60-minute snapshots of the Amazon RDS Multi-AZ database instance Create an AWS CloudFormation template of the applicationinfrastructure that uses the latest snapshot When an issue occurs use the AWS CloudFormation template to create the environment in another region Update the DNS record to point to the other region's EL</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "33",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>An education company is running a web application used by college students around the world. The application runs in an Amazon Elastic Container Service {Amazon ECS) cluster in an Auto Scaling group behind an Application Load Balancer (ALB). A system administrator detects a weekly spike in the number of failed login attempts, which overwhelm the application's authentication service. All the (ailed login attempts originate from about 500 different IP addresses that change each week, A solutions architect must prevent the failed login attempts from overwhelming the authentication service.<br>Which solution meets these requirements with the MOST operational efficiency?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "33",
          answers: [
            {
              choice:
                "<p> Use AWS Firewall Manager to create a security group and security group policy to allow access only to specific CIOR ranges.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create an AWS WAF web ACL with an IP set match rule, and set the rule action to Block. Connect the web ACL to the AL</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create an AWS WAF web ACL with a rate-based rule, and set the rule action to Block. Connect the web ACL to the AL</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Use AWS Firewall Manager to create a security group and security group policy to deny access from the IP addresses.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "34",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect is working with a company that is extremely sensitive to its IT costs and wishes to implement controls that will result in a predictable AWS spend each month Which combination ot steps can help the company control and monitor its monthly AWS usage to achieve a cost that is as close as possible to the target amount? (Select THREE.)</p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A,C,E</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "34",
          answers: [
            {
              choice:
                "<p> Implement an 1AM policy that requires users to specify a 'workload' tag for cost allocation when launching Amazon EC2 instances</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Contact AWS Support and ask that they apply limits to the account so that users are not able to launch more than a certain number of instance types</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Define 'workload' as a cost allocation tag in the AWS Billing and Cost Management console</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Purchase all upfront Reserved Instances that cover 100% of the account's expected Amazon EC2 usage</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Set up AWS Budgets to alert and notify when a given workload is expected to exceed a defined cost</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Place conditions in the users' IAM policies that limit the number of instances they are able to launch</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "35",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A software company is using three AWS accounts for each of its 1 0 development teams The company has developed an AWS CloudFormation standard VPC template that includes three NAT gateways The template is added to each account for each team The company is concerned that network costs will increase each time a new development team is added A solutions architect must maintain the reliability of the company's solutions and minimize operational complexity<br>What should the solutions architect do to reduce the network costs while meeting these requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "35",
          answers: [
            {
              choice:
                "<p> Create a single VPC with three NAT gateways in a shared services account Configure each account VPC with a default route through a transit gateway to the NAT gateway in the shared services account VPC Remove all NAT gateways from the standard VPC template</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Remove two NAT gateways from the standard VPC template Rely on the NAT gateway SLA to cover reliability for the remaining NAT gateway.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create a single VPC with three NAT gateways in a shared services account Configure a Site-to-Site VPN connection from each account to the shared services account Remove all NAT gateways from the standard VPC template</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create a single VPC with three NAT gateways in a shared services account Configure each account VPC with a default route through a VPC peering connection to the NAT gateway in the shared services account VPC Remove all NAT gateways from the standard VPC template</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "36",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A startup company hosts a fleet of Amazon EC2 instances in private subnets using the latest Amazon Linux 2 AMI. The company's engineers rely heavily on SSH access to the instances for troubleshooting.<br>The company's existing architecture includes the following:<br>* A VPC with private and public subnets, and a NAT gateway<br>* Site-to-Site VPN for connectivity with the on-premises environment<br>* EC2 security groups with direct SSH access from the on-premises environment<br>The company needs to increase security controls around SSH access and provide auditing of commands executed by the engineers.<br>Which slrategy should a solutions architect use?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: E</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "36",
          answers: [
            {
              choice:
                "<p> instances that allow inbound TCP on port 22. Have the engineers install the AWS Systems Manager Session Manager plugin for their devices and remotely access the instances by using the start-session API call from Systems Manager.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create an 1AM role with the Ama2onSSMManagedlnstanceCore managed policy attached. Attach the 1AM role to all the EC2 instances. Remove all security group rules attached to the EC2</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Update the EC2 security groups to only allow inbound TCP on port 22 to the IP addresses of the engineer's devices. Install the Amazon CloudWatch agent on all EC2 instances and send operating system audit logs to CloudWatch Logs.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Install and configure EC2 instance Connect on the fleet of EC2 instances. Remove all security group rules attached to EC2 instances that allow inbound TCP on port 22. Advise the engineers to remotely access the instances by using the EC2 Instance Connect CLI.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Update the EC2 security groups to only allow inbound TCP on port 22 to the IP addresses of the engineer's devices. Enable AWS Config for EC2 security group resource changes. Enable AWS Firewall Manager and apply a security group policy that automatically remediates changes to rules.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "37",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect is designing a solution to connect a company's on-premises network with all the company's current and future VPCs on AWS The company is running VPCs in five different AWS Regions and has at least 15 VPCs in each Region.<br>The company's AWS usage is constantly increasing and will continue to grow Additionally, all the VPCs throughout all five Regions must be able to communicate with each other<br>The solution must maximize scalability and ease of management<br>Which solution meets these requirements'?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "37",
          answers: [
            {
              choice:
                "<p> Set up a transit gateway in each Region Establish a redundant AWS Site-to-Site VPN connection between the on-premises firewalls and the transit gateway in the Region that is closest to the on-premises network Peer all the transit gateways with each other Connect all the VPCs to the transit gateway in their Region</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Set up a transit gateway in each Region Establish a redundant AWS Site-to-Site VPN connection between the on-premises firewalls and each transit gateway Route traffic between the different Regions through the company's on-premises firewalls Connect all the VPCs to the transit gateway in their Region</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create an AWS CloudFormation template for a redundant AWS Site-to-Site VPN tunnel to the on-premises network Deploy the CloudFormation template for each VPC Set up VPC peering between all the VPCs for VPC-to-VPC communication</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Create an AWS CloudFormation template for a redundant AWS Site-to-Site VPN tunnel to the on-premises network Deploy the CloudFormation template for each VPC Route traffic between the different Regions through the company's on-premises firewalls</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "38",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company wants to migrate its website from an on-premises data center onto AWS At the same time it wants to migrate the website to a containerized microservice-based architecture to improve the availability and cost efficiency The company's security policy states that privileges and network permissions must be configured according to best practice, using least privilege<br>A solutions architect must create a containerized architecture that meets the security requirements and has deployed the application to an Amazon ECS cluster<br>What steps are required after the deployment to meet the requirements'? (Select TWO.)</p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A,C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "38",
          answers: [
            {
              choice: "<p> Create tasks using the awsvpc network mode</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Apply security groups to Amazon EC2 instances and use 1AM roles for EC2 instances to access other resources</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Apply security groups to the tasks; and use IAM roles for tasks to access other resources</p>",
              correct: true,
              feedback: "",
            },
            {
              choice: "<p> Create tasks using the bridge network mode</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Apply security groups to the tasks, and pass IAM credentials into the container at launch time to access other resources</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "39",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is planning to migrate its on-premises data analysis application to AWS. The application is hosted across a fleet of servers and requires consistent system time.<br>The company has established an AWS Direct Connect connection from its on-premises data center to AWS. The company has a high-precision stratum-0 atomic dock network appliance that acts as an NTP source for all on-premises servers.<br>After the migration to AWS is complete, the clock on all Amazon EC2 instances that host the application must be synchronized with the on-premises atomic clock network appliance.<br>Which solution will meet these requirements with the LEAST administrative overhead?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "39",
          answers: [
            {
              choice:
                "<p> Configure a DHCP options set with the on-premises NTP server address Assign the options set to the VP Ensure that NTP traffic is allowed between AWS and the on-premises networks.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create a custom AMI to use the Amazon Time Sync Service at 169.254.169.123 Use this AMI for the application Use AWS Config to audit the NTP configuration.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Deploy a third-party time server from the AWS Marketplace. Configure the time server to synchronize with the on-premises atomic clock network appliance. Ensure that NTP traffic is allowed inbound in the network ACLs for the VPC that contains the third-party server.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "40",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A mobile gaming company is expanding into the global market. The company's game servers run in the us-east-1 Region. The game's client application uses UDP to communicate with the game servers and needs to be able to connect to a set of static IP addresses.<br>The company wants its game to be accessible on multiple continents. The company also wants the game to maintain its network performance and global availability.<br>Which solution meets these requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "40",
          answers: [
            {
              choice:
                "<p> Provision game servers in each AWS Region Provision a Network Load Balancer (NLB) in front of the game servers Create an accelerator in AWS Global Accelerator, and configure endpoint groups in each Region Associate the NLBs with the corresponding Regional endpoint groups Point the game client's application to the Global Accelerator endpoints</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Provision game servers in each AWS Region Provision a Network Load Balancer (NLB) in front of the game servers Create an Amazon CloudFront distribution that has no geographical restrictions Set the NLB as the origin Perform DNS lookups for the cloudfront net domain name. Use the resulting IP addresses in the game's client application</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Provision an Application Load Balancer (ALB) in front of the game servers Create an Amazon CloudFront distribution that has no geographical restrictions Set the ALB as the origin Perform DNS lookups for the cloudfront net domain name Use the resulting IP addresses in the game's client application.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Provision game servers in each AWS Region. Provision an Application Load Balancer in front of the game servers. Create an Amazon Route 53 latency-based routing policy for the game's client application to use with DNS lookups</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "41",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has a data lake in Amazon S3 that needs to be accessed by hundreds of applications across many AWS accounts. The company's information security policy states that the S3 bucket must not be accessed over the public internet and that each application should have the minimum permissions necessary to function.<br>To meet these requirements, a solutions architect plans to use an S3 access point that is restricted to specific VPCs tor each application.<br>Which combination of steps should the solutions architect take to implement this solution? (Select TWO.)</p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C,D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "41",
          answers: [
            {
              choice:
                "<p> Create an S3 access point for each application in each AWS account and attach the access points to the S3 bucket. Configure each access point to be accessible only from the application's VP Update the bucket policy to require access from an access point.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create an interface endpoint for Amazon S3 in each application's VP Configure the endpoint policy to allow access to an S3 access point. Create a VPC gateway attachment for the S3 endpoint.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create a gateway endpoint lor Amazon S3 in each application's VP Configure the endpoint policy to allow access to an S3 access point. Specify the route table that is used to access the access point.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Create an S3 access point for each application in the AWS account that owns the S3 bucket. Configure each access point to be accessible only from the application's VP Update the bucket policy to require access from an access point.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Create a gateway endpoint for Amazon S3 in the data lake's VP Attach an endpoint policy to allow access to the S3 bucket. Specify the route table that is used to access the bucket.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "42",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company wants to deploy an API to AWS. The company plans to run the API on AWS Fargate behind a load balancer. The API requires the use of header-based routing and must be accessible from on-premises networks through an AWS Direct Connect connection and a private VIF.<br>The company needs to add the client IP addresses that connect to the API to an allow list in AWS. The company also needs to add the IP addresses of the API to the allow list. The company's security team will allow /27 CIDR ranges to be added to the allow list. The solution must minimize complexity and operational overhead.<br>Which solution will meet these requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "42",
          answers: [
            {
              choice:
                "<p> Create two new '27 subnets. Create a new Network Load Balancer (NLB) that extends across the new subnets. Create a new Application Load Balancer (ALB) within the new subnets. Create a security group that includes only the client IP addresses that need access to the API. Attach the security group to the AL Add the ALB's IP addresses as targets behind the NL Provide the security team with the NLB's IP addresses for the allow list.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create a new Application Load Balancer (ALB) in the same subnets as the Fargate task deployments. Create a security group that includes only the client IP addresses that need access to the API. Attach the security group to the AL Provide the security team with the ALB's IP addresses for the allow list.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create two new /27 subnets. Create a new Application Load Balancer (ALB) that extends across the new subnets. Create a security group that includes only the client IP addresses that need access to the API. Attach the security group to the AL Provide the security team with the new subnet IP ranges for the allow list.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create a new Network Load Balancer (NLB) in the same subnets as the Fargate task deployments. Create a security group that includes only the client IP addresses that need access to the API. Attach the new security group to the Fargate tasks. Provide the security team with the NLB's IP addresses for the allow list.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "43",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has an on-premises monitoring solution using a PostgreSQL database for persistence of events. The database is unable to scale due to heavy ingestion and it frequently runs out of storage.<br>The company wants to create a hybrid solution and has already set up a VPN connection between its network and AWS. The solution should include the following attributes:<br>* Managed AWS services to minimize operational complexity<br>* A buffer that automatically scales to match the throughput of data and requires no on-going administration.<br>* A visualization toot to create dashboards to observe events in near-real time.<br>* Support for semi -structured JSON data and dynamic schemas.<br>Which combination of components will enabled company to create a monitoring solution that will satisfy these requirements'' (Select TWO.)</p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A,E</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "43",
          answers: [
            {
              choice:
                "<p> Configure an Amazon Neptune 0 DB instance to receive events Use Amazon QuickSight to read from the database and create near-real-time visualizations and dashboards</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Create an Amazon Kinesis data stream to buffer events Create an AWS Lambda function to process and transform evens</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Use Amazon Kinesis Data Firehose to buffer events Create an AWS Lambda function 10 process and transform events</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Configure an Amazon Aurora PostgreSQL DB cluster to receive events Use Amazon Quick Sight to read from the database and create near-real-time visualizations and dashboards</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Configure Amazon Elasticsearch Service (Amazon ES) to receive events Use the Kibana endpoint deployed with Amazon ES to create near-real-time visualizations and dashboards.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "44",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is building a hybrid solution between its existing on-premises systems and a new backend in AWS. The company has a management application to monitor the state of its current IT infrastructure and automate responses to issues. The company wants to incorporate the status of its consumed AWS services into the application. The application uses an HTTPS endpoint to receive updates.<br>Which approach meets these requirements with the LEAST amount of operational overhead?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "44",
          answers: [
            {
              choice:
                "<p> Configure Amazon EventBridge (Amazon CloudWatch Events) to detect and react to changes for AWS Health events from the AWS Personal Health Dashboard Configure the EventBridge (CloudWatch Events) event to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic and subscribe the topic to the HTTPS endpoint of the management application</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Configure Amazon EventBridge (Amazon CloudWatch Events) to detect and react to changes for AWS Health events from the AWS Service Health Dashboard Configure the EventBridge (CloudWatch Events) event to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic and subscribe the topic to an HTTPS endpoint for the management application with a topic filter corresponding to the services being used</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Modify the on-premises management application to call the AWS Health API to poll for status events of AWS services.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Configure AWS Systems Manager OpsCenter to ingest operational events from the on-premises systems Retire the on-premises management application and adopt OpsCenter as the hub</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "45",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A large company has many business units Each business unit has multiple AWS accounts for different purposes. The CIO of the company sees that each business unit has data that would be useful to share with other parts of the company in total there are about 10 PB of data that needs to be shared with users in 1.000 AWS accounts. The data is proprietary so some of it should only be available to users with specific job types Some of the data is used for throughput of intensive workloads such as simulations. The number of accounts changes frequently because of new initiatives acquisitions and divestitures<br>A solutions architect has been asked to design a system that will allow for sharing data for use in AWS with all of the employees in the company<br>Which approach will allow for secure data sharing in scalable way?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "45",
          answers: [
            {
              choice:
                "<p> Store the data in a series of Amazon S3 buckets Create an AWS STS token vending machine that is integrated with the company's identity provider (IdP) When a user logs in: have the token vending machine attach an IAM policy that assumes the role that limits the user's access and/or upload only the data the user is authorized to access Users can get credentials by authenticating to the token vending machine's website or API and then use those credentials with an S3 client</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Store the data in a single Amazon S3 bucket Write a bucket policy that uses conditions to grant read and write access where appropriate based on each user's business unit and job type. Determine the business unit with the AWS account accessing the bucket and the job type with a prefix in the IAM user's name Users can access data by using IAM credentials from their business unit's AWS account with an S3 client</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Store the data in a series of Amazon S3 buckets Create an application running m Amazon EC2 that is integrated with the company's identity provider (IdP) thatauthenticates users and allows them to download or upload data through the application The application uses the business unit and job type information in the IdP to control what users can upload and download through the application The users can access the data through the application's API</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Store the data in a single Amazon S3 bucket Create an IAM role for every combination of job type and business unit that allows for appropriate read/write access based on object prefixes in the S3 bucket The roles should have trust policies that allow the business unit's AWS accounts to assume their roles Use IAM in each business unit's AWS account to prevent them from assuming roles for a different job type Users get credentials to access the data by using AssumeRole from their business unit's AWS account Users can then use those credentials with an S3 client</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "46",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company hosts a photography website on AWS that has global visitors. The website has experienced steady increases in traffic during the last 12 months, and users have reported a delay in displaying images. The company wants to configure Amazon CloudFront lo deliver photos to visitors with minimal latency.<br>Which actions will achieve this goal? (Select TWO.)</p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D,E</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "46",
          answers: [
            {
              choice:
                "<p> Select Price Class 100 on Ihe CloudFront distribution.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Set the Minimum TTL and Maximum TTL to 0 in the CloudFront distribution.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Set the CloudFront distribution to forward all headers, all cookies, and all query strings to the origin.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Set up additional origin servers that are geographically closer to the requesters. Configure latency-based routing in Amazon Route 53.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Set the Minimum TTL and Maximum TTL to a high value in the CloudFront distribution.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "47",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is creating a sequel for a popular online game. A large number of users from all over the world will play the game within the first week after launch. Currently, the game consists of the following components deployed in a single AWS Region:<br>* Amazon S3 bucket that stores game assets<br>* Amazon DynamoDB table that stores player scores<br>A solutions architect needs to design a Region solution that wifi reduce latency improve reliability, and require the least effort to implement<br>What should the solutions architect do to meet these requirements'</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "47",
          answers: [
            {
              choice:
                "<p> Create an Amazon CloudFront distribution to serve assets from the S3 bucket Configure S3 Cross-Region Replication Create a new DynamoDB able in a new Region Use the new table as a replica target tor DynamoDB global tables.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create another S3 bucket in the same Region, and configure S3 Same-Region Replication between the buckets- Create an Amazon CloudFront distribution and configure origin failover with two origin accessing the S3 buckets Create a new DynamoDB table m a new Region Use the new table as a replica target for DynamoDB global tables.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create an Amazon CloudFront distribution to serve assets from the S3 bucket. Configure S3 Same-Region Replication. Create a new DynamoDB able m a new Region. Configure asynchronous replication between the DynamoDB tables by using AWS Database Migration Service (AWS DMS) with change data capture (CDC)</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Create another S3 bucket in a new Region and configure S3 Cross-Region Replication between the buckets Create an Amazon CloudFront distribution and configure origin failover with two origins accessing the S3 buckets in each Region. Configure DynamoDB global tables by enabling Amazon DynamoDB Streams, and add a replica table in a new Region.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "48",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A fleet of Amazon ECS instances is used to poll an Amazon SQS queue and update items in an Amazon DynamoDB database Items in the table are not being updated, and the SQS queue Is filling up Amazon CloudWatch Logs are showing consistent 400 errors when attempting to update the table The provisioned write capacity units are appropriately configured, and no throttling is occurring<br>What is the LIKELY cause of the failure*?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "48",
          answers: [
            {
              choice: "<p> The ECS task role was modified</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> The ECS configuration does not contain an Auto Scaling group</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> The ECS instance task execution 1AM role was modified</p>",
              correct: false,
              feedback: "",
            },
            {
              choice: "<p> The ECS service was deleted</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "49",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company runs an e-commerce platform with front-end and e-commerce tiers. Both tiers run on LAMP stacks with the front-end instances running behind a load balancing appliance that has a virtual offering on AWS Current*/, the operations team uses SSH to log in to the instances to maintain patches and address other concerns. The platform has recently been the target of multiple attacks, including.<br>* A DDoS attack.<br>* An SOL injection attack<br>* Several successful dictionary attacks on SSH accounts on the web servers<br>The company wants to improve the security of the e-commerce platform by migrating to AWS. The company's solutions architects have decided to use the following approach;<br>* Code review the existing application and fix any SQL injection issues.<br>* Migrate the web application to AWS and leverage the latest AWS Linux AMI to address initial security patching.<br>* Install AWS Systems Manager to manage patching and allow the system administrators to run commands on all instances, as needed.<br>What additional steps will address all of the identified attack types while providing high availability and minimizing risk?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "49",
          answers: [
            {
              choice:
                "<p> Disable SSH access to the Amazon EC2 instances. Migrate on-premises MySQL to Amazon RDS Multi-AZ Leverage an Elastic Load Balancer to spread the load and enable AWS Shield Advanced for protection. Add an Amazon CloudFront distribution in front of the website Enable AWS WAF on the distribution to manage the rules.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Enable SSH access to the Amazon EC2 instances using a security group that limits access to specific IPs. Migrate on-premises MySQL to Amazon RDS Multi-AZ Install the third-party load balancer from the AWS Marketplace and migrate the existing rules to the load balancer's AWS instances Enable AWS Shield Standard for DDoS protection</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Disable SSH access to the EC2 instances. Migrate on-premises MySQL to Amazon RDS Single-AZ. Leverage an AWS Elastic Load Balancer to spread the load Add an Amazon CloudFront distribution in front of the website Enable AWS WAF on the distribution to manage the rules.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Enable SSH access to the Amazon EC2 instances through a bastion host secured by limiting access to specific IP addresses. Migrate on-premises MySQL to a self-managed EC2 instance. Leverage an AWS Elastic Load Balancer to spread the load, and enable AWS Shield Standard for DDoS protection Add an Amazon CloudFront distribution in front of the website.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "50",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A car rental company has built a serverless REST API to provide data to its mobile app. The app consists of an Amazon API Gateway API with a Regional endpoint, AWS Lambda functions and an Amazon Aurora MySQL Serverless DB cluster The company recently opened the API to mobile apps of partners A significant increase in the number of requests resulted causing sporadic database memory errors Analysis of the API traffic indicates that clients are making multiple HTTP GET requests for the same queries in a short period of time Traffic is concentrated during business hours, with spikes around holidays and other events<br>The company needs to improve its ability to support the additional usage while minimizing the increase in costs associated with the solution.<br>Which strategy meets these requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "50",
          answers: [
            {
              choice:
                "<p> Modify the Aurora Serverless DB cluster configuration to increase the maximum amount of available memory</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Enable throttling in the API Gateway production stage Set the rate and burst values to limit the incoming calls</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Implement an Amazon ElastiCache for Redis cache to store the results of the database calls Modify the Lambda functions to use the cache</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Convert the API Gateway Regional endpoint to an edge-optimized endpoint Enable caching in the production stage.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "51",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company wants to host a new global website that consists of static content. A solutions architect is working on a solution that uses Amazon CloudFront with an origin access identity &lt;OAI) to access website content that is stored in a private Amazon S3 bucket.<br>During testing, the solutions architect receives 404 errors from the S3 bucket. Error messages appear only for attempts to access paths that end with a forward slash. such as example.com/path/. These requests should return the existing S3 object path/index.html. Any potential solution must not prevent CloudFront from caching the content.<br>What should the solutions architect do to resolve this problem?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "51",
          answers: [
            {
              choice:
                "<p> Change the CloudFront origin to an Amazon API Gateway endpoint. Rewrite the S3 request URL in an AWS service integration.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Change the CloudFront configuration to use an AWS Lambda@Edge function that is invoked by a viewer request event to rewrite the S3 request URL.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Change the CloudFront origin to an Amazon API Gateway proxy endpoint. Rewrite the S3 request URL by using an AWS Lambda function.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Change the CloudFront configuration to use an AWS Lambda@Edge function that is invoked by an origin request event to rewrite the S3 request URL.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "52",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is creating a sequel for a popular online game. A large number of users from all over the world will play the game within the first week after launch. Currently, the game consists of the following components deployed in a single AWS Region:<br>* Amazon S3 bucket that stores game assets<br>* Amazon DynamoDB table that stores player scores<br>A solutions architect needs to design a multi-Region solution that will reduce latency improve reliability, and require the least effort to implement<br>What should the solutions architect do to meet these requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "52",
          answers: [
            {
              choice:
                "<p> Create another S3 bucket in the same Region, and configure S3 Same-Region Replication between the buckets- Create an Amazon CloudFront distribution and configure origin failover with two origin accessing the S3 buckets Create a new DynamoDB table m a new Region Use the new table as a replica target for DynamoDB global tables.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create an Amazon CloudFront distribution to serve assets from the S3 bucket Configure S3 Cross-Region Replication Create a new DynamoDB able in a new Region Use the new table as a replica target tor DynamoDB global tables.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create an Amazon CloudFront distribution to serve assets from the S3 bucket. Configure S3 Same-Region Replication. Create a new DynamoDB able m a new Region. Configure asynchronous replication between the DynamoDB tables by using AWS Database Migration Service (AWS DMS) with change data capture (CDC)</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create another S3 bucket in a new Region and configure S3 Cross-Region Replication between the buckets Create an Amazon CloudFront distribution and configure origin failover with two origins accessing the S3 buckets in each Region. Configure DynamoDB global tables by enabling Amazon DynamoDB Streams, and add a replica table in a new Region.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "53",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A finance company hosts a data lake in Amazon S3. The company receives financial data records over SFTP each night from several third parties. The company runs its own SFTP server on an Amazon EC2 instance in a public subnet of a VPC. After the files ate uploaded, they are moved to the data lake by a cron job that runs on the same instance. The SFTP server is reachable on DNS sftp.examWe.com through the use of Amazon Route 53.<br>What should a solutions architect do to improve the reliability and scalability of the SFTP solution?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "53",
          answers: [
            {
              choice:
                "<p> Move the EC2 instance into an Auto Scaling group. Place the EC2 instance behind an Application Load Balancer (ALB). Update the DNS record sftp.example.com in Route 53 to point to the AL</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Migrate the SFTP server to a file gateway in AWS Storage Gateway. Update the DNS record sflp.example.com in Route 53 to point to the file gateway endpoint.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Migrate the SFTP server to AWS Transfer for SFTP. Update the DNS record sftp.example.com in Route 53 to point to the server endpoint hostname.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Place the EC2 instance behind a Network Load Balancer (NLB). Update the DNS record sftp.example.com in Route 53 to point to the NL</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "54",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company requires that all internal application connectivity use private IP addresses. To facilitate this policy, a solutions architect has created interface endpoints to connect to AWS public services. Upon testing, the solutions architect notices that the service names are resolving to public IP addresses, and that internal services cannot connect to the interface endpoints.<br>Which step should the solutions architect take to resolve this issue?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "54",
          answers: [
            {
              choice:
                "<p> Update the subnet route table with a route to the interface endpoint.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Configure an Amazon Route 53 private hosted zone with a conditional forwarder for the internal application.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Configure the security group on the interface endpoint to allow connectivity to the AWS services.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Enable the private DNS option on the VPC attributes.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "55",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is using AWS CodePipeline for the CI/CO of an application to an Amazon EC2 Auto Scaling group. All AWS resources are defined in AWS CloudFormation templates. The application artifacts are stored in an Amazon S3 bucket and deployed to the Auto Scaling group using instance user data scripts. As the application has become more complex, recent resource changes in the Cloud Formation templates have caused unplanned downtime.<br>How should a solutions architect improve the CI'CD pipeline to reduce the likelihood that changes in the templates will cause downtime?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "55",
          answers: [
            {
              choice:
                "<p> Use AWS CodeDeploy and a blue/green deployment pattern with CloudFormation to replace the user data deployment scripts. Have the operators log in to running instances and go through a manual test plan to verify the application is running as expected.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Use plugins for the integrated development environment (IDE) to check the templates for errors, and use the AWS CLI to validate that the templates are correct. Adapt the deployment code to check for error conditions and generate notifications on errors. Deploy to a test environment and execute a manual test plan before approving the change for production.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Adapt the deployment scripts to detect and report CloudFormation error conditions when performing deployments. Write test plans for a testing team to execute in a non-production environment before approving the change for production.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Implement automated testing using AWS CodeBuild in a test environment. Use CloudFormation change sets to evaluate changes before deployment. Use AWS CodeDeploy to leverage blue/green deployment patterns to allow evaluations and the ability to revert changes, if needed.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "56",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A new application is running on Amazon Elastic Container Service (Amazon ECS) with AWS Fargate The application uses an Amazon Aurora MySQL database The application and the database run m the same subnets of a VPC with distinct security groups that are configured.<br>The password (or the database is stored m AWS Secrets Manager and is passed to the application through the D8_PASSWORD environment variable The hostname of the database is passed to the application through the DB_HOST environment variable The application Is failing to access the database.<br>Which combination of actions should a solutions architect take to resolve this error? (Select THREE )</p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D,E,F</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "56",
          answers: [
            {
              choice:
                '<p> Ensure that the container has the environment variable with name *D8_PASSWORD" specified with a "ValueFrom" and the secret name of the secret.</p>',
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Ensure that the Fargate service security group allows inbound network traffic from the Aurora MySQL database on the MySQL TCP port 3306.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                '<p> Ensure that the container has the environment variable with name "DB_HOST" specified with the hostname of the OB duster endpoint.</p>',
              correct: false,
              feedback: "",
            },
            {
              choice:
                '<p> Ensure that the container has the environment variable with name "D8_HOST" specified with the hostname of a DB instance endpoint.</p>',
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Ensure that the Aurora MySQL database security group allows inbound network traffic from the Fargate service on the MySQL TCP port 3306.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                '<p> Ensure that the container has the environment variable with name "DB_PASSWORD" specified with a "ValueFrom" and the ARN of the secret</p>',
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "57",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is planning to migrate an application from on premises to the AWS Cloud. The company will begin the migration by moving the application's underlying data storage to AWS The application data is stored on a shared tie system on premises, and the application servers connect to the shared We system through SMB.<br>A solutions architect must implement a solution that uses an Amazon S3 bucket tor shared storage Until the application Is fully migrated and code is rewritten to use native Amazon S3 APIs, the application must continue to have access to the data through SMB The solutions architect must migrate the application data to AWS to its new location while still allowing the on-premises application to access the data.<br>Which solution will meet these requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "57",
          answers: [
            {
              choice:
                "<p> Deploy an AWS Server Migration Service (AWS SMS) VM to the on-premises environment. Use AWS SMS to migrate the file storage server from on premises to an Amazon EC2 instance</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create a new Amazon FSx for Windows File Server fie system Configure AWS DataSync with one location tor the on-premises file share and one location for the new Amazon FSx file system Create a new DataSync task to copy the data from the on-premises file share location to the Amazon FSx file system</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Create an S3 bucket for the application. Deploy a new AWS Storage Gateway Me gateway on an on-premises VM. Create a new file share that stores data in the S3 bucket and is associated with the tie gateway. Copy the data from the on-premises storage to the new file gateway endpoint.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create an S3 bucket for the application. Copy the data from the on-premises storage to the S3 bucket</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "58",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has an application that uses Amazon EC2 instances in an Auto Scaling group. The quality assurance (QA) department needs to launch a large number of short-lived environments to test the application. The application environments are currently launched by the manager of the department using an AWS CloudFormation template To launch the stack, the manager uses a role with permission to use CloudFormation EC2. and Auto Scaling APIs. The manager wants to allow testers to launch their own environments, but does not want to grant broad permissions to each user<br>Which set up would achieve these goals?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "58",
          answers: [
            {
              choice:
                "<p> Upload the AWS CloudFormation template to Amazon S3 Give users in the QA department permission to use CloudFormation and S3 APIs, with conditions that restrict the permissions to the template and the resources it creates Train users to launch the template from the CloudFormation console.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create an AWS Elastic Beanstalk application from the environment template Give users in the QA department permission to use Elastic Beanstalk permissions only Train users to launch Elastic Beanstalk environments with the Elastic Beanstalk CLI, passing the existing role to the environment as a service role</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Upload the AWS CloudFormation template to Amazon S3. Give users in the QA department permission to assume the manager's role and add a policy that restricts the permissions to the template and the resources it creates Train users to launch the template from the CloudFormation console</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create an AWS Service Catalog product from the environment template Add a launch constraint to the product with the existing role Give users in the QA department permission to use AWS Service Catalog APIs only_ Train users to launch the template from the AWS Service Catalog console.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "59",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>An enterprise company wants to allow its developers to purchase third-party software through AWS Marketplace. The company uses an AWS Organizations account structure with full features enabled, and has a shared services account in each organizational unit (OU) that will be used by procurement managers. The procurement team's policy indicates that developers should be able to obtain third-party software from an approved list only and use Private Marketplace in AWS Marketplace to achieve this requirement . The procurement team wants administration of Private Marketplace to be restricted to a role named procurement-manager-role, which could be assumed by procurement managers Other IAM users groups, roles, and account administrators in the company should be denied Private Marketplace administrative access<br>What is the MOST efficient way to design an architecture to meet these requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "59",
          answers: [
            {
              choice:
                "<p> Create an IAM role named procurement-manager-role in all AWS accounts in the organization Add the PowerUserAccess managed policy to the role Apply an inline policy to all 1AM users and roles in every AWS account to deny permissions on the AWSPrivateMarketplaceAdminFullAccess managed policy.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create an IAM role named procurement-manager-role in the AWS accounts that will be used by developers Add the AWSPrivateMarketplaceAdminFullAccess managed policy to the role. Create ....Organizations to deny permissions to administer Private Marketplace to everyone except the role named procurement-manager-role Apply the SCP to all the shared services accounts in the.......</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create an IAM role named procurement-manager-role in all the shared services accounts in the organization Add the AWSPrivateMarketplaceAdminFullAccess managed policy to the role Create an organization root-level SCP to deny permissions to administer Private Marketplace to everyone except the role named procurement-manager-role Create another organization root-level SCP to deny permissions to create an IAM role named procurement-manager-role to everyone in the organization.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Create an IAM role named procurement-manager-role in all AWS accounts in the organization Add the AdministratorAccess managed policy to the role Define a permissions boundary with the AWSPrivateMarketplaceAdminFullAccess managed policy and attach it to all the developer roles.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "60",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect wants to make sure that only AWS users or roles with suitable permissions can access a new Amazon API Gateway endpoint The solutions architect wants an end-to-end view of each request to analyze the latency of the request and create service maps<br>How can the solutions architect design the API Gateway access control and perform request inspections''</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "60",
          answers: [
            {
              choice:
                "<p> Create an AWS Lambda function as the custom authorizer ask the API client to pass the key and secret when making the call, and then use Lambda to validate the key/secret pair against the 1AM system Use AWS X-Ray to trace and analyze user requests to API Gateway</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> For the API Gateway method, set the authorization to AWSJAM Then, give the 1AM user or role execute-api Invoke permission on the REST API resource Enable the API caller to sign requests with AWS Signature when accessing the endpoint Use AWS X-Ray to trace and analyze user requests to API Gateway</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> For the API Gateway resource set CORS to enabled and only return the company's domain in Access-Control-Allow-Origin headers Then give the 1AM user or role execute-api Invoke permission on the REST API resource Use Amazon CloudWatch to trace and analyze user requests to API Gateway</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create a client certificate for API Gateway Distribute the certificate to the AWS users and roles that need to access the endpoint Enable the API caller to pass the client certificate when accessing the endpoint. Use Amazon CloudWatch to trace and analyze user requests to API Gateway.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "61",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A retail company is running an application that stores invoice files in an Amazon S3 bucket and metadata about the files in an Amazon DynamoDB table. The application software runs in both us-east-1 and eu-west-1 The S3 bucket and DynamoDB table are in us-east-1. The company wants to protect itself from data corruption and loss of connectivity to either Region<br>Which option meets these requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "61",
          answers: [
            {
              choice:
                "<p> Create a DynamoDB global table to replicate data between us-east-1 and eu-west-1. Enable continuous backup on the DynamoDB table in us-east-1. Enable versioning on the S3 bucket</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create a DynamoDB global table to replicate data between us-east-1 and eu-west-1. Enable versioning on the S3 bucket Implement strict ACLs on the S3 bucket</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create an AWS Lambda function triggered by Amazon CloudWatch Events to make regular backups of the DynamoDB table Set up S3 cross-region replication from us-east-1 to eu-west-1 Set up MFA delete on the S3 bucket in us-east-1.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Create a DynamoDB global table to replicate data between us-east-1 and eu-west-1. Enable continuous backup on the DynamoDB table in us-east-1. Set up S3 cross-region replication from us-east-1 to eu-west-1.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "62",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A team collects and routes behavioral data for an entire company. The company runs a Multi-AZ VPC environment with public subnets, private subnets, and in internet gateway Each public subnet also contains a NAT gateway Most of the company's applications read from and write to Amazon Kinesis Data Streams. Most of the workloads run in private subnets.<br>A solutions architect must review the infrastructure The solutions architect needs to reduce costs and maintain the function of the applications. The solutions architect uses Cost Explorer and notices that the cost in the EC2-Other category is consistently high A further review shows that NatGateway-Bytes charges are increasing the cost in the EC2-Other category.<br>What should the solutions architect do to meet these requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "62",
          answers: [
            {
              choice:
                "<p> Enable VPC Flow Logs. Use Amazon Athena to analyze the logs for traffic that can be removed. Ensure that security groups are blocking traffic that is responsible for high costs.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Add an interface VPC endpoint for Kinesis Data Streams to the VP Ensure that applications have the correct IAM permissions to use the interface VPC endpoint.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Add an interface VPC endpoint for Kinesis Data Streams to the VPC Ensure that the VPC endpoint policy allows traffic from the applications</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Enable VPC Flow Logs and Amazon Detective. Review Detective findings for traffic that is not related to Kinesis Data Streams Configure security groups to block that traffic</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "63",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solution architect is designing an AWS account structure for a company that consists of multiple tems. All the team will work in the same AWS Region. The company needs a VPC that is connected to the on-premises network. The company expects less than 50 Mbps of total to and from the on-premises network.<br>Which combination of steps will meet these requirements MOST cost-effectively? (Select TWO)</p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A,C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "63",
          answers: [
            {
              choice:
                "<p> Use AWS Site-to-Site VPN for connectivity to the on-premises network</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Use AWS Transit Gateway along with an AWS Site-to-Site VPN for connectivity to the on-premises network. Share the transit gateway by using AWS Resource Access Manager</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create an AWS CloudFormabon template that provisions a VPC and the required subnets. Deploy the template to a shared services account. Share the subnets by using AWS Resource Access Manager</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Use AWS Direct Connect for connectivity to the on-premises network.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create an AWS CloudFormation template that provisions a VPC and the required subnets. Deploy the template to each AWS account</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "64",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has an organization that has many AWS accounts in AWS Organizations A solutions architect must improve how the company manages common security group rules for the AWS accounts in the organization.<br>The company has a common set of IP CIDR ranges in an allow list in each AWS account lo allow access to and from the company's on-premises network Developers within each account are responsible for adding new IP CIDR ranges to their security groups. The security team has its own AWS account. Currently, the security team notifies the owners of the other AWS accounts when changes are made to the allow list.<br>The solutions architect must design a solution that distributes the common set of CIDR ranges across all accounts Which solution meets these requirements with the LEAST amount of operational overhead.</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "64",
          answers: [
            {
              choice: "<p> ......</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create new customer-managed prefix lists in each AWS account within the organization Populate the prefix lists in each account with all internal CIDR ranges Notify the owner of each AWS account to allow the new customer-managed prefix list IDs in their accounts in their security groups Instruct the security team to share updates with each AWS account owner.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create a new customer-managed prefix list in the security team's AWS account Populate the customer-managed prefix list with all internal CIDR ranges. Share the customer-managed prefix list.... organization by using AWS Resource Access Manager Notify the owner of each AWS account to allow the new customer-managed prefix list ID in their security groups</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Set up an Amazon Simple Notification Service (Amazon SNS) topic in the security team's AWS account Deploy an AWS Lambda function in each AWS account Configure the Lambda function to run every time an SNS topic receives a message Configure the Lambda function to take an IP address as input and add it to a list of security groups in the account Instruct the security team to distribute changes by publishing messages to its SNS topic</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "65",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is running a containerized application in the AWS Cloud. The application is running by using Amazon Elastic Container Service (Amazon ECS) on a set Amazon EC2 instances. The EC2 instances run in an Auto Scaling group.<br>The company uses Amazon Elastic Container Registry (Amazon ECRJ to store its container images When a new image version is uploaded, the new image version receives a unique tag<br>The company needs a solution that inspects new image versions for common vulnerabilities and exposures The solution must automatically delete new image tags that have Cntical or High severity findings The solution also must notify the development team when such a deletion occurs<br>Which solution meets these requirements'?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "65",
          answers: [
            {
              choice:
                "<p> Configure scan on push on the repository. Use Amazon EventBndge (Amazon ClouoWatch Events) to invoke an AWS Step Functions state machine when a scan is complete for images that have Cntical or High severity findings Use the Step Functions state machine to delete the image tag for those images and to notify the development team through Amazon Simple Notification Service (Amazon SNS)</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Configure periodic image scan on the repository Configure scan results to be added to an Amazon Simple Queue Service (Amazon SQS) queue Invoke an AWS Step Functions state machine when a new message is added to the SQS queue Use the Step Functions state machine to delete the image tag for images that have Critical or High severity findings. Notify the development team by using Amazon Simple Email Service (Amazon SES).</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Configure scan on push on the repository Configure scan results to be pushed to an Amazon Simple Queue Service (Amazon SQS) queue Invoke an AWS Lambda function when a new message is added to the SQS queue Use the Lambda function to delete the image tag for images that have Critical or High seventy findings. Notify the development team by using Amazon Simple Email Service (Amazon SES).</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Schedule an AWS Lambda function to start a manual image scan every hour Configure Amazon EventBridge (Amazon CloudWatch Events) to invoke another Lambda function when a scan is complete. Use the second Lambda function to delete the image tag for images that have Cnocal or High severity findings. Notify the development team by using Amazon Simple Notification Service (Amazon SNS)</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "66",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company needs to store and process image data that will be uploaded from mobile devices using a custom mobile app. Usage peaks between 8 AM and 5 PM on weekdays, with thousands of uploads per minute. The app is rarely used at any other time A user is notified when image processing is complete.<br>Which combination of actions should a solutions architect take to ensure image processing can scale to handle the load1? (Select THREE.)</p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D,E,F</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "66",
          answers: [
            {
              choice:
                "<p> Invoke an AWS Lambda function to perform image processing when a message is available in the queue</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Send a push notification to the mobile app by using Amazon Simple Notification Service (Amazon SNS) when processing is complete. F Send a push notification to the mobile app by using Amazon Simple Email Service (Amazon SES) when processing is complete.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Upload files from the mobile software directly to Amazon S3. Use S3 event notifications to create a message in an Amazon MQ queue.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Upload files from the mobile software directly to Amazon S3. Use S3 event notifications to create a message in an Amazon Simple Queue Service (Amazon SQS) standard</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Invoke an S3 Batch Operations job to perform image processing when a message is available in the queue</p>",
              correct: true,
              feedback: "",
            },
            {
              choice: "<p> queue.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "67",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A gaming company created a game leaderboard by using a Multi-AZ deployment of an Amazon RDS database. The number of users is growing, and the queries to get individual player rankings are getting slower over time. The company expects a surge in users for an upcoming version and wants to optimize the design for scalability and performance.<br>Which solution will meet these requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "67",
          answers: [
            {
              choice:
                "<p> Keep the leaderboard data in the RDS DB instance. Provision a Multi-AZ deployment of an Amazon ElastiCache for Redis cluster.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Add a read-only replica to the RDS DB instance. Add an RDS Proxy database proxy.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Stream the leaderboard data by using Amazon Kinesis Data Firehose with an Amazon S3 bucket as the destination. Query the S3 bucket by using Amazon Athena for the leaderboard.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Migrate the database to Amazon DynamoD Store the leader different tables. Use Apache HiveQL JOIN statements to build the leaderboard</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "68",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A media company uses Amazon DynamoDB to store metadata for its catalog of movies that are available to stream. Each media item Contains user-facing content that concludes a description of the media, a list of search tags, and similar dat<br>a. In addition, media items include a list of Amazon S3 key names that relate to movie files. The company stores these movie files in a single S3 bucket that has versioning enable. The company uses Amazon CloudFront to serve these movie files.<br>The company has 100.000 media items, and each media item can have many different S3 objects that represent different encodings of the same media S3 objects that belong to the same media item are grouped together under the same key prefix, which is a random unique ID<br>Because of an expiring contract with a media provider, the company must remove 2.000 media Items. The company must completely delete all DynamoDB keys and movie files on Amazon S3 that are related to these media items within 36 hours The company must ensure that the content cannot be recovered.<br>Which combination of actions will meet these requirements? (Select TWO.)</p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A,E</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "68",
          answers: [
            {
              choice:
                "<p> Write a script to delete objects from Amazon S3 Specify in each request a NoncurrentVersionExpiration property with a NoncurrentDays attribute set to 0.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Configure an S3 Lifecycle object expiration rule that is based on the contract's expiration date</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Configure the dynamoDB table with a TTL field. Create and invoke an AWS Lambda function to perform a conditional update Set the TTL field to the time of the contract's expiration on every affected media item.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Temporarily suspend versioning on the S3 bucket. Create and invoke an AWS Lambda function that deletes affected objects Reactivate versioning when the operation is complete</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Write a script to perform a conditional delete on all the affected DynamoDB records</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "69",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has developed a single-page web application in JavaScript. The source code is stored in a single Amazon S3 bucket in the us-east-1 Region. The company serves the web application to a global user base through Amazon CloudFront.<br>The company wants to experiment with two versions of the website without informing application users. Each version of the website will reside in its own S3 bucket. The company wants to determine which version is most successful in marketing a new product.<br>The solution must send application users that are based in Europe to the new website design. The solution must send application users that are based in the United States to the current website design. However, some exceptions exist. The company needs to be able to redirect specific users to the new website design, regardless of the users' location.<br>Which solution meets these requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "69",
          answers: [
            {
              choice:
                "<p> Configure two CloudFront distributions. Configure a geolocation routing policy in Amazon Route 53 to route traffic to the appropriate CloudFront endpoint based on the location of clients.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Configure a single CloudFront distribution. Create a behavior with different paths for each version of the site. Configure Lambda@Edge on the default path to generate redirects and send the client to the correct version of the website.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Configure a single CloudFront distribution. Configure an alternate domain name on the distribution. Configure two behaviors to route users to the different S3 origins based on the domain name that the client uses in the HTTP request.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "70",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company needs to create a centralized logging architecture for all of its AWS accounts. The architecture should provide near-real-time data analysis for all AWS CloudTrail logs and VPC Flow logs across an AWS accounts. The company plans to use Amazon Elasticsearch Service (Amazon ES) to perform log analyses in me logging account.<br>Which strategy should a solutions architect use to meet These requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p> https://www.examtopics.com/discussions/amazon/view/35842-exam-aws-certified-solutions-architect-professional-topic-1/ <br> https://aws.amazon.com/vi/solutions/implementations/centralized-logging/",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "70",
          answers: [
            {
              choice:
                "<p> Configure CloudTrail and VPC Flow Logs to send data to a fog group in Amazon CloudWatch Logs n each AWS account Create AWS Lambda functions in each AWS account to subscribe to the tog groups and stream the data to an Amazon S3 bucket in the togging account. Create another Lambda function to toad data from the S3 bucket to Amazon ES in the logging account.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Configure CloudTrail and VPC Flow Logs m each AWS account to send data to a centralized Amazon S3 Ducket in the fogging account. Create an AWS Lambda function to load data from the S3 bucket to Amazon ES m the togging account</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Configure CloudTrail and VPC Flow Logs to send data to a separate Amazon S3 bucket In each AWS account. Create an AWS Lambda function triggered by S3 evens to copy the data to a centralized logging bucket. Create another Lambda function lo load data from the S3 bucket to Amazon ES in the logging account.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Configure CloudTrail and VPC Flow Logs to send data to a fog group m Amazon CloudWatch Logs n each AWS account Configure a CloudWatch subscription filter m each AWS account to send data to Amazon Kinesis Data Firehose In the fogging account Load data from Kinesis Data Firehose Into Amazon ES in the logging account</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "71",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is migrating an application to the AWS Cloud. The application runs in an on-premises data center and writes thousands of images into a mounted NFS file system each night After the company migrates the application, the company will host the application on an Amazon EC2 instance with a mounted Amazon Elastic File System (Amazon EFS) file system.<br>The company has established an AWS Direct Connect connection to AWS Before the migration cutover. a solutions architect must build a process that will replicate the newly created on-premises images to the EFS file system<br>What is the MOST operationally efficient way to replicate the images?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p> <p>How do I use datasync to migrate data to AWS? Configure DataSync to make an initial copy of your entire dataset, and schedule subsequent incremental transfers of changing data until the final cut-over from on-premises to AWS</p><p>https://www.examtopics.com/discussions/amazon/view/74180-exam-aws-certified-solutions-architect-professional-topic-1/</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "71",
          answers: [
            {
              choice:
                "<p> Deploy an AWS DataSync agent to an on-premises server that has access to the NFS file system Send data over the Direct Connect connection to an AWS PrivateLink interface VPC endpoint for Amazon EFS by using a private VIF Configure a DataSync scheduled task to send the images to the EFS file system every 24 hours.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Deploy an AWS DataSync agent to an on-premises server that has access to the NFS file system Send data over the Direct Connect connection to an S3 bucket by using a public VIF Configure an AWS Lambda function to process event notifications from Amazon S3 and copy the images from Amazon S3 to the EFS file system</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Configure a periodic process to run the aws s3 sync command from the on-premises file system to Amazon S3 Configure an AWS Lambda function to process event notifications from Amazon S3 and copy the images from Amazon S3 to the EFS file system</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Deploy an AWS Storage Gateway file gateway with an NFS mount point. Mount the file gateway file system on the on-premises server. Configure a process to periodically copy the images to the mount point</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "72",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        '<p>A solutions architect is importing a VM from an on-premises environment by using the Amazon EC2 VM Import feature of AWS Import/Export The solutions architect has created an AMI and has provisioned an Amazon EC2 instance that is based on that AMI The EC2 instance runs inside a public subnet in a VPC and has a public IP address assigned<br>The EC2 instance does not appear as a managed instance in the AWS Systems Manager console<br>Which combination of steps should the solutions architect take to troubleshoot this issue? (Select TWO )</p>',
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C,E</p><p>https://www.examtopics.com/discussions/amazon/view/74169-exam-aws-certified-solutions-architect-professional-topic-1/</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "72",
          answers: [
            {
              choice:
                "<p> Verify the correct configuration of service-linked roles for Systems Manager</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Verify that the AWS Application Discovery Agent is configured</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Verify that Systems Manager Agent is installed on the instance and is running</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Verify the existence of a VPC endpoint on the VPC</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Verify that the instance is assigned an appropriate 1AM role for Systems Manager</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "73",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company with global offices has a single 1 Gbps AWS Direct Connect connection to a single AWS Region. The company's on-premises network uses the connection to communicate with the company's resources in the AWS Cloud. The connection has a single private virtual interface that connects to a single VPC.<br>A solutions architect must implement a solution that adds a redundant Direct Connect connection in the same Region. The solution also must provide connectivity to other Regions through the same pair of Direct Connect connections as the company expands into other Regions.<br>Which solution meets these requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p><p>https://www.examtopics.com/discussions/amazon/view/69343-exam-aws-certified-solutions-architect-professional-topic-1/</p><p>https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-gateways-intro.html</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "73",
          answers: [
            {
              choice:
                "<p> Provision a transit gateway. Delete the existing private virtual interface from the existing connection. Create the second Direct Connect connection. Create a new private virtual interface on each connection, and connect both private virtual interfaces to the transit gateway. Associate the transit gateway with the single VP</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Keep the existing private virtual interface. Create the second Direct Connect connection. Create a new public virtual interface on the new connection, and connect the new public virtual interface to the single VP</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Keep the existing private virtual interface. Create the second Direct Connect connection. Create a new private virtual interface on the new connection, and connect the new private virtual interface to the single VP</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Provision a Direct Connect gateway. Delete the existing private virtual interface from the existing connection. Create the second Direct Connect connection. Create a new private virtual interlace on each connection, and connect both private victual interfaces to the Direct Connect gateway. Connect the Direct Connect gateway to the single VP</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "74",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company runs an application on AWS. An AWS Lambda function uses credentials to authenticate to an Amazon RDS tor MySQL DB instance. A security risk assessment identified that these credentials are not frequently rotated. Also, encryption at rest is not enabled for the DB instance. The security team requires that both of these issues be resolved.<br>Which strategy should a solutions architect recommend to remediate these security risks?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p><p>Parameter store can store DB credentials as secure string but CANNOT rotate secrets. And, Cannot enable encryption on existing MySQL RDS instance, must create a new encrypted one from unencrypted snapshot.</p><p>https://www.examtopics.com/discussions/amazon/view/51254-exam-aws-certified-solutions-architect-professional-topic-1/</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "74",
          answers: [
            {
              choice:
                "<p> Configure the Lambda function to store and retrieve the database credentials as encrypted AWS Systems Manager Parameter Store parameters. Create another Lambda function to automatically rotate the credentials. Create an encrypted read replica of the DB instance. Promote the encrypted read replica to be the new primary node.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Enable 1AM DB authentication on the DB instance. Grant the Lambda execution role access to the DB instance. Modify the DB instance and enable encryption.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Configure the Lambda function to store and retrieve the database credentials in AWS Secrets Manager and enable rotation of the credentials. Take a snapshot ol the DB instance and encrypt a copy of that snapshot. Replace the DB instance with a new DB instance that is based on the encrypted snapshot.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Enable 1AM DB authentication on the DB instance. Grant the Lambda execution role access to the DB instance. Create an encrypted read replica of the DB instance. Promote Ihe encrypted read replica to be the new primary node.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "75",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect is designing the data storage and retrieval architecture for a new application that a company will be launching soon. The application is designed to ingest millions of small records per minute from devices all around the world. Each record is less than 4 KB in size and needs to be stored in a durable location where it can be retrieved with low latency. The data is ephemeral and the company is required to store the data for 120 days only, after which the data can be deleted.<br>The solutions architect calculates that, during the course of a year, the storage requirements would be about 10-15 TB.<br>Which storage strategy is the MOST cost-effective and meets the design requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p><p>B. DynamoDB with TTL, cheaper for sustained throughput of small items + suited for fast retrievals. S3 cheaper for storage only, much higher costs with writes. RDS not designed for this use case.</p><p>https://www.examtopics.com/discussions/amazon/view/28419-exam-aws-certified-solutions-architect-professional-topic-1/</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "75",
          answers: [
            {
              choice:
                "<p> Design the application to batch incoming records before writing them to an Amazon S3 bucket. Update the metadata for the object to contain the list of records in the batch and use the Amazon S3 metadata search feature to retrieve the data. Configure a lifecycle policy to delete the data after 120 days.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Design the application to store each incoming record in an Amazon DynamoDB table properly configured for the scale. Configure the DynamoOB Time to Live (TTL) feature to delete records older than 120 days.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Design the application to store each incoming record as a single .csv file in an Amazon S3 bucket to allow for indexed retrieval. Configure a lifecycle policy to delete data older than 120 days.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Design the application to store each incoming record in a single table in an Amazon RDS MySQL database. Run a nightly cron job that executes a query to delete any records older than 120 days.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "76",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is using an Amazon CloudFront distribution to distribute both static and dynamic content from a web application running behind an Application Load Balancer The web application requires user authorization and session tracking tor dynamic content The CloudFront distribution has a single cache behavior configured to forward the Authorization, Host, and Agent HTTP allow list headers and a session cookie to the origin All other cache behavior settings are set to their default value<br>A valid ACM certificate is applied to the CloudFront distribution with a matching CNAME in the distribution settings The ACM certificate is also applied to the HTTPS listener for the Application Load Balancer The CloudFront origin protocol policy is set to HTTPS only Analysis of the cache statistics report shows that the miss rate for this distribution is very high<br>What can the solutions architect do to improve the cache hit rate for this distribution without causing the SSL/TLS handshake between CloudFront and the Application Load Balancer to fail?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: `<p>Correct Answer: D</p><p>Existing configuration is workings with Host Header forwarding - means both CloudFront and ALB are configured with same SSL certificates (same host name definition in SSL cert).
      If you remove host header, CloudFront will add Custom Origin host (hostname defined in ALB) to the host header (host potion of URL). When this request reaches ALB, the request will be failed at ALB as SSL hostname defined in ALB SSL certificate will not match with host portion of URL hence Host Header is required when we have same SSL certificate deployed on CloudFront and ALB. This works if ALB has its own SSL certificate matching its own host name definition which means CloudFront, and ALB have different SSL certificates.</p><p>https://www.examtopics.com/discussions/amazon/view/5106-exam-aws-certified-solutions-architect-professional-topic-1/</p>`,
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "76",
          answers: [
            {
              choice:
                "<p> Create two cache behaviors for static and dynamic content. Remove the User-Agent and Host HTTP headers from the whitelist headers section on both of the cache behaviors. Remove the session cookie from the whitelist cookies section and the Authorization HTTP header from the whitelist headers section for cache behavior configured for static content.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Remove the user-Agent and Authorization HTTP headers from the allow list headers section of the cache behaviour. Then update the cache behaviour to use resigned cookies for authorization</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Remove the Host HTTP header from the allow list headers section and remove the session cookie from the allow list cookies section for the default cache behaviour Enable automatic object compression and use Lambda@Edge viewer request events for user authorization</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create two cache behaviors for static and dynamic content. Remove the User-Agent HTTP header from the whitelist headers section on both of the cache behaviors. Remove the session cookie from the whitelist cookies section and the Authorization HTTP header from the whitelist headers section for cache behavior configured for static content.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "77",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company runs an application that gives users the ability to search for videos and related information by using keywords that are curated from content providers. The application data is stored in an on-premises Oracle database that is 800 GB in size.<br>The company wants to migrate the data to an Amazon Aurora MySQL DB instance. A solutions architect plans to use the AWS Schema Conversion Tool and AWS Database Migration Service (AWS DMS) for the migration. During the migration, the existing database must serve ongoing requests. The migration must be completed with minimum downtime<br>Which solution will meet these requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p><p>https://www.examtopics.com/discussions/amazon/view/59933-exam-aws-certified-solutions-architect-professional-topic-1/</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "77",
          answers: [
            {
              choice:
                "<p> Use the M5 or CS DMS replication instance type for ongoing replication</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create primary key indexes, secondary indexes, and referential integrity constraints in the target database before starting the migration process</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Use AWS DMS to run the conversion report for Oracle to Aurora MySQL. Remediate any issues. Then use AWS DMS to migrate the data</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Turn off automatic backups and logging of the target database until the migration and cutover processes are complete</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "78",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is planning to migrate an Amazon RDS for Oracle database to an RDS for PostgreSQL DB instance in another AWS account A solutions architect needs to design a migration strategy that will require no downtime and that will minimize the amount of time necessary to complete the migration The migration strategy must replicate all existing data and any new data that is created during the migration The target database must be identical to the source database at completion of the migration process<br>All applications currently use an Amazon Route 53 CNAME record as their endpoint for communication with the RDS for Oracle DB instance The RDS for Oracle DB instance is in a private subnet<br>Which combination of steps should the solutions architect take to meet these requirements? (Select THREE )</p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D,E,F</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "78",
          answers: [
            {
              choice:
                "<p> Use AWS Database Migration Service (AWS DMS) in the target account to perform a change data capture (CDC) migration from the source database to the target database When the migration is complete change the CNAME record to point to the target DB instance endpoint</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Temporarily allow the source DB instance to be publicly accessible to provide connectivity from the VPC in the target account Configure the security groups that are attached to each DB instance to allow traffic on the database port from the VPC in the target account.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create a new RDS for PostgreSQL DB instance in the target account Use the AWS Schema Conversion Tool (AWS SCT) to migrate the database schema from the source database to the target database.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Use the AWS Schema Conversion Tool (AWS SCT) to create a new RDS for PostgreSQL DB instance in the target account with the schema and initial data from the source database</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Use AWS Database Migration Service (AWS DMS) in the target account to perform a full load plus change data capture (CDC) migration from the source database to the target database When the migration is complete, change the CNAME record to point to the target DB instance endpoint</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Configure VPC peering between the VPCs in the two AWS accounts to provide connectivity to both DB instances from the target account. Configure the security groups that are attached to each DB instance to allow traffic on the database port from the VPC in the target account</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "79",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company runs its application in the eu-west-1 Region and has one account for each of its environments development, testing, and production All the environments are running 24 hours a day 7 days a week by using stateful Amazon EC2 instances and Amazon RDS for MySQL databases The databases are between 500 GB and 800 GB in size<br>The development team and testing team work on business days during business hours, but the production environment operates 24 hours a day. 7 days a week. The company wants to reduce costs AH resources are tagged with an environment tag with either development, testing, or production as the key.<br>What should a solutions architect do to reduce costs with the LEAST operational effort?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "79",
          answers: [
            {
              choice:
                "<p> Create an Amazon EventBridge (Amazon CloudWatch Events) rule that runs every business day in the evening. Configure the rule to invoke an AWS Lambda function that stops instances based on the tag-Create a second EventBridge (CloudWatch Events) rule that runs every business day in the morning Configure the second rule to invoke another Lambda function that starts instances based on the tag</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create an Amazon EventBridge (Amazon CloudWatch Events) rule that runs once every day Configure the rule to invoke one AWS Lambda function that starts or stops instances based on the tag day and time.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create an Amazon EventBridge (Amazon CloudWatch Events) rule that runs every hour Configure the rule to invoke one AWS Lambda function that terminates or restores instances from their ....based on the tag. day, and time</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create an Amazon EventBridge (Amazon CloudWatch Events) rule that runs every business day in the evening Configure the rule to invoke an AWS Lambda function that terminates instances based on the tag Create a second EventBridge (CloudWatch Events) rule that runs every business day in the morning Configure the second rule to invoke another Lambda function that restores the instances from their last backup based on the tag.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "80",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is migrating its infrastructure to the AW5 Cloud. The company must comply with a variety of regulatory standards for different projects. The company needs a multi-account environment.<br>A solutions architect needs to prepare the baseline infrastructure The solution must provide a consistent baseline of management and security but it must allow flexibility for different compliance requirements within various AWS accounts. The solution also needs to integrate with the existing on-premises Active Directory Federation Services (AD FS) server.<br>Which solution meets these requirements with the LEAST amount of operational overhead?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "80",
          answers: [
            {
              choice:
                "<p> Create an organization In AWS Organizations Create a single SCP for least privilege access across all accounts Create a single OU for all accounts Configure an IAM identity provider tor federation with the on-premises AD FS server Configure a central togging account with a defined process for log generating services to send log events to the central account. Enable AWS Config in the central account with conformance packs for all accounts.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Create an organization in AWS Organizations Create SCPs for least privilege access Create an OU structure, and use it to group AWS accounts Connect AWS Single Sign-On to the on-premises AD FS server. Configure a central logging account with a defined process for tog generating services to send log events to the central account Enable AWS Config in the central account with aggregators and conformance packs.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create an organization in AWS Organizations Enable AWS Control Tower on the organization Review included guardrails for SCPs. Check AWS Config for areas that require additions Configure an IAM identity provider for federation with the on-premises AD FS server.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create an organization In AWS Organizations Enable AWS Control Tower on the organization. Review included guardrails for SCPs. Check AWS Config for areas that require additions Add OUs as necessary Connect AWS Single Sign-On to the on-premises AD FS server</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "81",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A medical company is running an application in the AWS Cloud. The application simulates the effect of medical drugs in development.<br>The application consists of two parts configuration and simulation The configuration part runs in AWS Fargate containers in an Amazon Elastic Container Service (Amazon ECS) cluster. The simulation part runs on large, compute optimized Amazon EC2 instances Simulations can restart if they are interrupted<br>The configuration part runs 24 hours a day with a steady load. The simulation part runs only for a few hours each night with a variable load. The company stores simulation results in Amazon S3, and researchers use the results for 30 days. The company must store simulations for 10 years and must be able to retrieve the simulations within 5 hours<br>Which solution meets these requirements MOST cost-effectively?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "81",
          answers: [
            {
              choice:
                "<p> Purchase an EC2 Instance Savings Plan to cover the usage for the configuration part and the simulation part Create an S3 Lifecycle policy to transition objects that are older than 30 days to S3 Glacier</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Purchase Compute Savings Plans to cover the usage for the configuration part Run the simulation part by using EC2 Spot instances Create an S3 Lifecycle policy to transition objects that are older than 30 days to S3 Glacier</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Purchase Compute Savings Plans to cover the usage for the configuration part Purchase EC2 Reserved Instances for the simulation part Create an S3 Lifecycle policy to transition objects that are older than 30 days to S3 Glacier Deep Archive</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Purchase an EC2 Instance Savings Plan to cover the usage for the configuration part Run the simulation part by using EC2 Spot Instances Create an S3 Lifecycle policy to transition objects that are older than 30 days to S3 Intelligent-Tiering</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "82",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is launching a new web application on Amazon EC2 instances. Development and production workloads exist in separate AWS accounts.<br>According to the company's security requirements, only automated configuration tools are allowed to access the production account. The company's security team wants to receive immediate notification if any manual access to the production AWS account or EC2 instances occurs<br>Which combination of actions should a solutions architect take in the production account to meet these requirements? (Select THREE.)</p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A,B,F</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "82",
          answers: [
            {
              choice:
                "<p> Deploy EC2 instances in an Auto Scaling group Configure the launch template to deploy instances without key pairs Configure Amazon CloudWatch Logs to capture system access logs Create an Amazon CloudWatch alarm that is based on the logs to detect when a user logs in to an EC2 instance</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Turn on AWS CloudTrail logs for all AWS Regions. Configure Amazon CloudWatch alarms to provide an alert when an AwsConsoleSignin event is detected.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Configure Amazon Simple Email Service (Amazon SES) to send email to the security team when an alarm is activated.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Turn on AWS CloudTrail logs in the application's primary AWS Region Use Amazon Athena to queiy the logs for AwsConsoleSignln events.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Deploy EC2 instances in an Auto Scaling group. Configure the launch template to delete the key pair after launch. Configure Amazon CloudWatch Logs for the system access logs Create an Amazon CloudWatch dashboard to show user logins over time.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Configure an Amazon Simple Notification Service (Amazon SNS) topic to send a message to the security team when an alarm is activated</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "83",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company runs an loT platform on AWS loT sensors in various locations send data to the company's Node js API servers on Amazon EC2 instances running behind an Application Load Balancer The data is stored in an Amazon RDS MySQL DB instance that uses a 4 TB General Purpose SSD volume<br>The number of sensors the company has deployed in the field has increased over time and is expected to grow significantly The API servers are consistently overloaded and RDS metrics show high write latency<br>Which of the following steps together will resolve the issues permanently and enable growth as new sensors are provisioned, while keeping this platform cost-efficient? {Select TWO.)</p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A,E</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "83",
          answers: [
            {
              choice:
                "<p> Re-architect the database tier to use Amazon DynamoDB instead of an RDS MySQL DB instance</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Resize the MySQL General Purpose SSD storage to 6 TB to improve the volume's IOPS</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Use AWS X-Ray to analyze and debug application issues and add more API servers to match the load</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Re-architect the database tier to use Amazon Aurora instead of an RDS MySQL DB instance and add read replicas</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Leverage Amazon Kinesis Data Streams and AWS Lambda to ingest and process the raw data</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "84",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A large company with hundreds of AWS accounts has a newly established centralized internal process for purchasing new or modifying existing Reserved Instances. This process requires all business units that want to purchase or modify Reserved Instances to submit requests to a dedicated team for procurement or execution. Previously, business units would directly purchase or modify Reserved Instances in their own respective AWS accounts autonomously.<br>Which combination of steps should be taken to proactively enforce the new process in the MOST secure way possible? (Select TWO.)</p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B,C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "84",
          answers: [
            {
              choice:
                "<p> In each AWS account, create an 1AM policy with a DENY rule to the ec2:PurchaseReservedlnstancesOffering and ec2:ModifyReservedInstances actions.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create an SCP that contains a deny rule to the ec2:PurchaseReservedlnstancesOffering and ec2: Modify Reserved Instances actions. Attach the SCP to each organizational unit (OU) of the AWS Organizations structure.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Ensure all AWS accounts are part of an AWS Organizations structure operating in all features mode.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Ensure that all AWS accounts are part of an AWS Organizations structure operating in consolidated billing features mode.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Use AWS Contig lo report on the attachment of an 1AM policy that denies access to the ec2:PurchaseReservedlnstancesOffering and ec2:ModifyReservedlnstances actions.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "85",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has a complex web application that leverages Amazon CloudFront for global scalability and performance. Over time, users report that the web application is slowing down.<br>The company's operations team reports that the CloudFront cache hit ratio has been dropping steadily. The cache metrics report indicates that query strings on some URLs are inconsistently ordered and are specified sometimes in mixed-case letters and sometimes in lowercase letters.<br>Which set of actions should the solutions architect take to increase the cache hit ratio as quickly as possible?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "85",
          answers: [
            {
              choice:
                "<p> Deploy a Lambda@Edge function to sort parameters by name and force them to be lowercase. Select the CloudFront viewer request trigger to invoke the function.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Deploy a reverse proxy after the load balancer to post-process the emitted URLs in the application to force the URL strings to be lowercase.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Update the CloudFront distribution to disable caching based on query string parameters.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Update the CloudFront distribution to specify casing-insensitive query string processing.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "86",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is migrating its marketing website and content management system from an on-premises data center to AWS. The company wants the AWS application to be deployed in a VPC with Amazon EC2 instances used for the web servers and an Amazon RDS instance for the database.<br>The company has a runbook document that describes the installation process of the on-premises system. The company would like to base the AWS system on the processes referenced in the runbook document. The runbook document describes the installation and configuration of the operating systems, network settings, the website, and content management system software on the servers After the migration is complete, the company wants to be able to make changes quickly to take advantage of other AWS features.<br>How can the application and environment be deployed and automated m AWS. while allowing for future changes?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "86",
          answers: [
            {
              choice:
                "<p> Write an AWS Cloud Formation template that creates the VPC, the EC2 instances, and the RDS instance for the application Ensure that the rest of the steps in the runbook are updated to reflect any changes that may come from the AWS migration</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Write an AWS CloudFormation template that creates the VPC the EC2 instances, and the RDS instance for the application Include EC2 user data in the AWS Cloud Formation template to install and configure the software.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Write a Python script that uses the AWS API to create the VP the EC2 instances and the RDS instance for the application Write shell scripts that implement the rest of the steps in the runbook Have the Python script copy and run the shell scripts on the newly created instances to complete the installation</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Update the runbook to describe how to create the VP the EC2 instances and the RDS instance for the application by using the AWS Console Make sure that the rest of the steps in the runbook are updated to reflect any changes that may come from the AWS migration</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "87",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is configuring connectivity to a multi-account AWS environment to support application workloads fiat serve users in a single geographic region. The workloads depend on a highly available, on-premises legacy system deployed across two locations It is critical for the AWS workloads to manias connectivity to the legacy system, and a minimum of 5 Gbps of bandwidth is required All application workloads within AWS must have connectivity with one another.<br>Which solution will meet these requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "87",
          answers: [
            {
              choice:
                "<p> Configure multiple AWS Direct Connect (DX) 10 Gbps dedicated connections from two DX partners for each on-premises location Create a transit gateway and a DX gateway in a central network account. Create a transit virtual interface for each DX interlace and associate them with the DX gateway. Create a gateway association between the DX gateway and the transit gateway</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Configure multiple AWS Direct Connect (DX) 10 Gbps dedicated connections from a DX partner for each on-premises location Create and attach a virtual private gateway for each AWS account VP Create a transit gateway in a central network account and associate It with the virtual private gateways Create a transit virtual interface on each DX connection and attach the interface to the transit gateway.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Configure multiple AWS Direct Connect (DX) 10 Gbps dedicated connections from two DX partners for each on-premises location Create and attach a virtual private gateway for each AWS account VP Create a DX gateway m a central network account and associate it with the virtual private gateways Create a public virtual interface on each DX connection and associate the interface with me DX gateway.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Configure multiple AWS Direct Connect (OX) 10 Gbps dedicated connections from a DX partner for each on-premises location Create private virtual interfaces on each connection for each AWS account VPC Associate me private virtual interface with a virtual private gateway attached to each VPC</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "88",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solution architect needs to deploy an application on a fleet of Amazon EC2 instances. The EC2 instances run in private subnets in An Auto Scaling group. The application is expected to generate logs at a rate of 100 MB each second on each of the EC2 instances.<br>The logs must be stored in an Amazon S3 bucket so that an Amazon EMR cluster can consume them for further processing The logs must be quickly accessible for the first 90 days and should be retrievable within 48 hours thereafter.<br>What is the MOST cost-effective solution that meets these requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "88",
          answers: [
            {
              choice:
                "<p> Set up an S3 batch operation to copy logs from each EC2 instance to the S3 bucket with S3 Standard storage Use a NAT gateway with the private subnets to connect to Amazon S3 Create S3 Lifecycle policies to move logs that are older than 90 days to S3 Glacier Deep Archive</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Set up an S3 sync job to copy logs from each EC2 instance to the S3 bucket with S3 Standard storage Use a gateway VPC endpoint for Amazon S3 to connect to Amazon S3. Create S3 Lifecycle policies to move logs that are older than 90 days to S3 Glacier Deep Archive</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Set up an S3 sync job to copy logs from each EC2 instance to the S3 bucket with S3 Standard storage Use a gateway VPC endpoint for Amazon S3 to connect to Amazon S3. Create S3 Lifecycle policies to move logs that are older than 90 days to S3 Glacier</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Set up an S3 copy job to write logs from each EC2 instance to the S3 bucket with S3 Standard storage Use a NAT instance within the private subnets to connect to Amazon S3. Create S3 Lifecycle policies to move logs that are older than 90 days to S3 Glacier.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "89",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>During an audit, a security team discovered that a development team was putting IAM user secret access keys in their code and then committing it to an AWS CodeCommit repository . The security team wants to automatically find and remediate instances of this security vulnerability<br>Which solution will ensure that the credentials are appropriately secured automatically?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "89",
          answers: [
            {
              choice:
                "<p> Use a scheduled AWS Lambda function to download and scan the application code from CodeCommit If credentials are found, generate new credentials and store them in AWS KMS</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Run a script nightly using AWS Systems Manager Run Command to search for credentials on the development instances If found use AWS Secrets Manager to rotate the credentials.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Configure a CodeCommit trigger to invoke an AWS Lambda function to scan new code submissions for credentials If credentials are found, disable them in AWS 1AM and notify the user.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Configure Amazon Macie to scan for credentials in CodeCommit repositories If credentials are found, trigger an AWS Lambda function to disable the credentials and notify the user</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "90",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company wants to migrate an application to Amazon EC2 from VMware Infrastructure that runs in an on-premises data center. A solutions architect must preserve the software and configuration settings during the migration.<br>What should the solutions architect do to meet these requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "90",
          answers: [
            {
              choice:
                "<p> Configure AWS Storage Gateway for files service to export a Common Internet File System (CIFSJ share. Create a backup copy to the shared folder. Sign in to the AWS Management Console and create an AMI from the backup copy Launch an EC2 instance that is based on the AMI.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Configure the AWS DataSync agent to start replicating the data store to Amazon FSx for Windows File Server Use the SMB share to host the VMware data store. Use VM Import/Export to move the VMs to Amazon EC2.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create a managed-instance activation for a hybrid environment in AWS Systems Manager. Download and install Systems Manager Agent on the on-premises VM Register the VM with Systems Manager to be a managed instance Use AWS Backup to create a snapshot of the VM and create an AMI. Launch an EC2 instance that is based on the AMI</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Use the VMware vSphere client to export the application as an image in Open Virealization Format (OVF) format Create an Amazon S3 bucket to store the image in the destination AWS Region. Create and apply an 1AM role for VM Import Use the AWS CLI to run the EC2 import command.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "91",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is running a two-tier web-based application in an on-premises data center. The application layer consists of a single server running a stateful application. The application connects to a PostgreSQL database running on a separate server The application's user base is expected to grow significantly, so the company is migrating the application and database to AWS The solution will use Amazon Aurora PostgreSQL. Amazon EC2 Auto Scaling, and Elastic Load Balancing.<br>Which solution will provide a consistent user experience that will allow the application and database tiers to scale?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "91",
          answers: [
            {
              choice:
                "<p> Aurora Auto Scaling for Aurora Replicas. Use an Application Load Balancer with the round robin routing algorithm and sticky sessions enabled.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Aurora Auto Scaling for Aurora writers. Use a Network Load Balancer with the least outstanding requests routing algorithm and sticky sessions enabled.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Enable Aurora Auto Scaling for Aurora Replicas. Use a Network Load Balancer with the least outstanding requests routing algorithm and sticky sessions enabled</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Enable Aurora Auto Scaling for Aurora writers. Use an Application Load Balancer with the round robin routing algorithm and sticky sessions enabled</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "92",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company maintains a restaurant review website. The website is a single-page application where files are stored in Amazon S3 and delivered using Amazon CloudFront. The company receives several fake postings every day that are manually removed.<br>The security team has identified that most of the fake posts are from bots with IP addresses that have a bad reputation within the same global region. The team needs to create a solution to help restrict the bots from accessing the website.<br>Which strategy should a solutions architect use?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "92",
          answers: [
            {
              choice:
                "<p> Use AWS Firewall Manager to control the CloudFront distribution security settings. Select the managed Amazon IP reputation rule group and associate it with Firewall Manager with a deny action.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Associate an AWS WAF web ACL with the CloudFront distribution. Select the managed Amazon IP reputation rule group for the web ACL with a deny action.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Associate an AWS WAF web ACL with the CloudFront distribution. Create a rule group for the web ACL with a geographical match statement with a deny action.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Use AWS Firewall Manager to control the CloudFront distribution security settings. Create a geographical block rule and associate it with Firewall Manager.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "93",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company wants to migrate its data analytics environment from on premises to AWS The environment consists of two simple Node js applications One of the applications collects sensor data and loads it into a MySQL database The other application aggregates the data into reports When the aggregation jobs run. some of the load jobs fail to run correctly<br>The company must resolve the data loading issue The company also needs the migration to occur without interruptions or changes for the company's customers<br>What should a solutions architect do to meet these requirements'?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "93",
          answers: [
            {
              choice:
                "<p> Set up an Amazon Aurora MySQL database as a replication target for the on-premises database Create an Aurora Replica for the Aurora MySQL database, and move the aggregation jobs to run against the Aurora Replica Set up collection endpomts as AWS Lambda functions behind a Network Load Balancer (NLB). and use Amazon RDS Proxy to wnte to the Aurora MySQL database When the databases are synced disable the replication job and restart the Aurora Replica as the primary instance. Point the collector DNS record to the NL</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Set up an Amazon Aurora MySQL database Use AWS Database Migration Service (AWS DMS) to perform continuous data replication from the on-premises database to Aurora Move the aggregation jobs to run against the Aurora MySQL database Set up collection endpomts behind an Application Load Balancer (ALB) as Amazon EC2 instances in an Auto Scaling group When the databases are synced, point the collector DNS record to the ALB Disable the AWS DMS sync task after the cutover from on premises to AWS</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Set up an Amazon Aurora MySQL database Use AWS Database Migration Service (AWS DMS) to perform continuous data replication from the on-premises database to Aurora Create an Aurora Replica for the Aurora MySQL database and move the aggregation jobs to run against the Aurora Replica Set up collection endpoints as AWS Lambda functions behind an Application Load Balancer (ALB) and use Amazon RDS Proxy to write to the Aurora MySQL database When the databases are synced, point the collector DNS record to the ALB Disable the AWS DMS sync task after the cutover from on premises to AWS</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Set up an Amazon Aurora MySQL database Create an Aurora Replica for the Aurora MySQL database and move the aggregation jobs to run against the Aurora Replica Set up collection endpoints as an Amazon Kinesis data stream Use Amazon Kinesis Data Firehose to replicate the data to the Aurora MySQL database When the databases are synced disable the replication job and restart the Aurora Replica as the primary instance Point the collector DNS record to the Kinesis data stream.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "94",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is serving files to Its customers through an SFTP server that is accessible over the internet The SFTP server is running on a single Amazon EC2 instance with an Elastic IP address attached Customers connect to the SFTP server through its Elastic IP address and use SSH (or authentication. The EC2 instance also has an attached security group that allows access from all customer IP addresses.<br>A solutions architect must implement a solution to improve availability, minimize the complexity of infrastructure management, and minimize the disruption to customers who access files The solution must not change the way customers connect.<br>Which solution will meet these requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "94",
          answers: [
            {
              choice:
                "<p> Disassociate the Elastic IP address from the EC2 instance. Create a new Amazon Elastic File System {Amazon EFS) file system to be used for SFTP file hosting. Create an AWS Fargate task definition to run an SFTP server. Specify the EFS file system as a mount in the task definition. Create a Fargate service by using the task definition, and place a Network Load Balancer (NLB) in front of the service When configuring the service, attach the security group with customer IP addresses to the tasks that run the SFTP server. Associate the Elastic IP address with the NL Sync all files from the SFTP server to the S3 bucket.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Disassociate the Elastic IP address from the EC2 instance. Create an Amazon S3 bucket to be used for SFTP file hosting. Create an AWS Transfer Family server Configure the Transfer Family server with a publicly accessible endpoint Associate the SFTP Elastic IP address with the new endpoint Point the Transfer Family server to the S3 bucket. Sync all files from the SFTP server to the S3 bucket.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Disassociate the Elastic IP address from the EC2 instance. Create a multi-attach Amazon Elastic Block Store (Amazon EBS) volume to be used for SFTP file hosting. Create a Network Load Balancer (NLB) with the Elastic IP address attached. Create an Auto Scaling group with EC2 instances that run an SFTP server Define in the Auto Scaling group that instances that are launched should attach the new multi-attach EBS volume Configure the Auto Scaling group to automatically add instances behind the NLB Configure the Auto Scaling group to use the security group that allows customer IP addresses for the EC2 instances that the Auto Scaling group launches. Sync all files from the SFTP server to the new multi-attach EBS volume.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Disassociate the Elastic IP address from the EC2 instance. Create an Amazon S3 bucket to be used for SFTP file hosting. Create an AWS Transfer Family server. Configure the Transfer Family server with a VPC-hosted. internet-facing endpoint. Associate the SFTP Elastic IP address with the new endpoint. Attach the security group with customer IP addresses to the new endpoint. Point the Transfer Family server to the S3 bucket Sync all files from the SFTP server to the S3 bucket.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "95",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company manages an on-premises JavaScript front-end web application. The application is hosted on two servers secured with a corporate Active Directory. The application calls a set of Java-based microservices on an application server and stores data in a clustered MySQL database. The application is heavily used during the day on weekdays. It is lightly used during the evenings and weekends.<br>Daytime traffic to the application has increased rapidly, and reliability has diminished as a result. The company wants to migrate the application to AWS with a solution that eliminates the need for server maintenance, with an API to securely connect to the microservices.<br>Which combination of actions will meet these requirements? (Select THREE.)</p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C,D,F</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "95",
          answers: [
            {
              choice:
                "<p> Replatform the database to Amazon Aurora MySQL Serverless.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Host the web application on Amazon EC2 with Auto Scaling. Use Amazon Cognito federation and Login with Amazon for authentication and authorization.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Create an API layer with Amazon API Gateway. Rehost the microservices on AWS Fargate containers.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Create an API layer with Amazon API Gateway. Rehost the microservices on Amazon Elastic Container Service (Amazon ECS) containers.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Replatform the database to Amazon RDS for MySQL.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Host the web application on Amazon S3. Use Amazon Cognito identity pools (federated identities) with SAML for authentication and authorization.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "96",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is processing videos in the AWS Cloud by using Amazon EC2 instances in an Auto Scaling group. It takes 30 minutes to process a video. Several EC2 instances scale in and out depending on the number of videos in an Amazon Simple Queue Service (Amazon SQS) queue.<br>The company has configured the SQS queue with a redrive policy that specifies a target dead-letter queue and a maxReceiveCount of 1. The company has set the visibility timeout for the SQS queue to 1 hour. The company has set up an Amazon CloudWatch alarm to notify the development team when there are messages in the dead-letter queue.<br>Several times during the day, the development team receives notification that messages are in the dead-letter queue and that videos have not been processed properly. An investigation finds no errors in the application logs.<br>How can the company solve this problem?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "96",
          answers: [
            {
              choice:
                "<p> Update the redrive policy and set maxReceiveCount to 0.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Configure scale-in protection for the instances during processing.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Turn on termination protection for the EC2 instances.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Update the visibility timeout for the SQS queue to 3 hours.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "97",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect is designing a network for a new cloud deployment. Each account will need autonomy to modify route tables and make changes. Centralized and controlled egress internet connectivity is also needed. The cloud footprint is expected to grow to thousands ol AWS accounts.<br>Which architecture will meet these requirements?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "97",
          answers: [
            {
              choice:
                "<p> A shared transit gateway to which each VPC will be attached. Outbound internet access will route through a fleet of VPN-attached firewalls.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> A centralized transit VPC with a VPN connection to a standalone VPC in each account. Outbound internet traffic will be controlled by firewall appliances.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> A shared services VPC to host central assets to include a fleet of firewalls wilh a route to the internet. Each spoke VPC will peer to the central VP</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> A centralized shared VPC with a subnet for each account. Outbound internet traffic will controlled through a fleet of proxy servers.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "98",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has application services that have been containerized and deployed on multiple Amazon EC2 instances with public IPs. An Apache Kafka cluster has been deployed to the EC2 instances. A PostgreSQL database has been migrated to Amazon RDS lor PostgreSQL. The company expects a significant increase of orders on its platform when a new version of its flagship product is released.<br>What changes to the current architecture will reduce operational overhead and support the product release?</p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "98",
          answers: [
            {
              choice:
                "<p> Create an EC2 Auto Scaling group behind an Application Load Balancer. Create additional read replicas for the DB instance. Create Amazon Kinesis data streams and configure the application services lo use the data streams. Store and serve static content directly from Amazon S3.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Deploy the application on Amazon Elastic Kubernetes Service (Amazon EKS) with AWS Fargate and enable auto scaling behind an Application Load Balancer. Create additional read replicas for the DB instance. Create an Amazon Managed Streaming for Apache Kafka cluster and configure the application services to use the cluster. Store static content in Amazon S3 behind an Amazon CloudFront distribution.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Create an EC2 Auto Scaling group behind an Application Load Balancer. Deploy the DB instance in Multi-AZ mode and enable storage auto scaling. Create Amazon Kinesis data streams and configure the application services to use the data streams. Store and serve static content directly from Amazon S3.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Deploy the application on a Kubernetes cluster created on the EC2 instances behind an Application Load Balancer. Deploy the DB instance in Multi-AZ mode and enable storage auto scaling. Create an Amazon Managed Streaming for Apache Kafka cluster and configure the application services to use the cluster. Store static content in Amazon S3 behind an Amazon CloudFront distribution.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "99",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A retail company runs a business-critical web service on an Amazon Elastic Container Service (Amazon ECS) cluster that runs on Amazon EC2 instances The web service receives POST requests from end users and writes data to a MySQL database that runs on a separate EC2 instance The company needs to ensure that data loss does not occur.<br>The current code deployment process includes manual updates of the ECS service During a recent deployment, end users encountered intermittent 502 Bad Gateway errors in response to valid web requests<br>The company wants to implement a reliable solution to prevent this issue from recurring. The company also wants to automate code deployments. The solution must be highly available and must optimize cost-effectiveness<br>Which combination of steps will meet these requirements? (Select THREE.)</p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B,C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "99",
          answers: [
            {
              choice:
                "<p> Run the web service on an ECS cluster that has a Fargate launch type Use AWS CodePipeline and AWS CodeDeploy to perform a blue/green deployment with validation testing to update the ECS service.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Configure an Amazon Simple Queue Service (Amazon SQS) queue as an event source to receive the POST requests from the web service Configure an AWS Lambda function to poll the queue Write the data to the database.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Run the web service on an ECS cluster that has a Fargate launch type Use AWS CodePipeline and AWS CodeDeploy to perform a canary deployment to update the ECS service.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p> Migrate the MySQL database to run on an Amazon RDS for MySQL Multi-AZ DB instance that uses Provisioned IOPS SSD (io2) storage</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
    {
      question_id: "100",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>An ecommerce company runs its infrastructure on AWS. The company exposes its APIs to its web and mobile clients through an Application Load Balancer (ALB) in front of an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. The EKS cluster runs thousands of pods that provide the APIs.<br>After extending delivery to a new continent, the company adds an Amazon CloudFront distribution and sets the ALB as the origin. The company also adds AWS WAF to its architecture.<br>After implementation of the new architecture, API calls are significantly. However, there is a sudden increase in HTTP status code 504 (Gateway Timeout) errors and HTTP status code 502 (Bad Gateway) errors. This increase in errors seems to be for a specific domain. Which factors could be a cause of these errors? (Select TWO.)</p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B,C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "100",
          answers: [
            {
              choice:
                "<p> The origin is not properly configured in CloudFront.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> Some pods are taking more than 30 seconds to answer API calls.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice: "<p> AWS WAF is blocking suspicious requests.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice: "<p> EKS Kubernetes pods are being cycled.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p> There is an SSL/TLS handshake issue between CloudFront and the origin.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "Unknow",
    },
  ],
};
