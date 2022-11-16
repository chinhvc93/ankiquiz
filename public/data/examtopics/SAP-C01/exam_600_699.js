var ExamTopic_600_699 = {
  msg: "Exam Topic 600 - 699",
  data: [
    {
      question_id: "#600",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company with multiple accounts is currently using a configuration that does not meet the following security governance policies:<br>✑ Prevent ingress from port 22 to any Amazon EC2 instance.<br>✑ Require billing and application tags for resources.<br>✑ Encrypt all Amazon EBS volumes.<br>A solutions architect wants to provide preventive and detective controls, including notifications about a specific resource, if there are policy deviations.<br>Which solution should the solutions architect implement?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#600",
          answers: [
            {
              choice:
                "<p>A.  Create an AWS CodeCommit repository containing policy-compliant AWS CloudFormation templates. Create an AWS Service Catalog portfolio. Import the CloudFormation templates by attaching the CodeCommit repository to the portfolio. Restrict users across all accounts to items from the AWS Service Catalog portfolio. Use AWS Config managed rules to detect deviations from the policies. Configure an Amazon CloudWatch Events rule for deviations, and associate a CloudWatch alarm to send notifications when the TriggeredRules metric is greater than zero.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS Service Catalog to build a portfolio with products that are in compliance with the governance policies in a central account. Restrict users across all accounts to AWS Service Catalog products. Share a compliant portfolio to other accounts. Use AWS Config managed rules to detect deviations from the policies. Configure an Amazon CloudWatch Events rule to send a notification when a deviation occurs.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Implement policy-compliant AWS CloudFormation templates for each account, and ensure that all provisioning is completed by CloudFormation. Configure Amazon Inspector to perform regular checks against resources. Perform policy validation and write the assessment output to Amazon CloudWatch Logs. Create a CloudWatch Logs metric filter to increment a metric when a deviation occurs. Configure a CloudWatch alarm to send notifications when the configured metric is greater than zero.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Restrict users and enforce least privilege access using AWS IAM. Consolidate all AWS CloudTrail logs into a single account. Send the CloudTrail logs to Amazon Elasticsearch Service (Amazon ES). Implement monitoring, alerting, and reporting using the Kibana dashboard in Amazon ES and with Amazon SNS.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#601",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is manually deploying its application to production and wants to move to a more mature deployment pattern. The company has asked a solutions architect to design a solution that leverages its current Chef tools and knowledge. The application must be deployed to a staging environment for testing and verification before being deployed to production. Any new deployment must be rolled back in 5 minutes if errors are discovered after a deployment.<br>Which AWS service and deployment pattern should the solutions architect use to meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#601",
          answers: [
            {
              choice:
                "<p>A.  Use AWS Elastic Beanstalk and deploy the application using a rolling update deployment strategy.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS CodePipeline and deploy the application using a rolling update deployment strategy.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use AWS CodeBuild and deploy the application using a canary deployment strategy.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use AWS OpsWorks and deploy the application using a blue/green deployment strategy.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#602",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has been using a third-party provider for its content delivery network and recently decided to switch to Amazon CloudFront. The development team wants to maximize performance for the global user base. The company uses a content management system (CMS) that serves both static and dynamic content.<br>The CMS is behind an Application Load Balancer (ALB) which is set as the default origin for the distribution. Static assets are served from an Amazon S3 bucket.<br>The Origin Access Identity (OAI) was created properly and the S3 bucket policy has been updated to allow the GetObject action from the OAI, but static assets are receiving a 404 error.<br>Which combination of steps should the solutions architect take to fix the error? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: AD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#602",
          answers: [
            {
              choice:
                "<p>A.  Add another origin to the CloudFront distribution for the static assets.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Add a path-based rule to the ALB to forward requests for the static assets.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Add an RTMP distribution to allow caching of both static and dynamic content.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Add a behavior to the CloudFront distribution for the path pattern and the origin of the static assets.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Add a host header condition to the ALB listener and forward the header from CloudFront to add traffic to the allow list.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#603",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A financial services company logs personally identifiable information to its application logs stored in Amazon S3. Due to regulatory compliance requirements, the log files must be encrypted at rest. The security team has mandated that the company's on-premises hardware security modules (HSMs) be used to generate the<br>CMK material.<br>Which steps should the solutions architect take to meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#603",
          answers: [
            {
              choice:
                "<p>A.  Create an AWS CloudHSM cluster. Create a new CMK in AWS KMS using AWS_CloudHSM as the source for the key material and an origin of AWS_CLOUDHSM. Enable automatic key rotation on the CMK with a duration of 1 year. Configure a bucket policy on the logging bucket that disallows uploads of unencrypted data and requires that the encryption source be AWS KMS.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Provision an AWS Direct Connect connection, ensuring there is no overlap of the RFC 1918 address space between on-premises hardware and the VPCs. Configure an AWS bucket policy on the logging bucket that requires all objects to be encrypted. Configure the logging application to query the on-premises HSMs from the AWS environment for the encryption key material, and create a unique CMK for each logging event.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a CMK in AWS KMS with no key material and an origin of EXTERNAL. Import the key material generated from the on-premises HSMs into the CMK using the public key and import token provided by AWS. Configure a bucket policy on the logging bucket that disallows uploads of non-encrypted data and requires that the encryption source be AWS KMS.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a new CMK in AWS KMS with AWS-provided key material and an origin of AWS_KMS. Disable this CMK, and overwrite the key material with the key material from the on-premises HSM using the public key and import token provided by AWS. Re-enable the CMK. Enable automatic key rotation on the CMK with a duration of 1 year. Configure a bucket policy on the logging bucket that disallows uploads of non-encrypted data and requires that the encryption source be AWS KMS.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#604",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect is implementing infrastructure as code for a two-tier web application in an AWS CloudFormation template. The web frontend application will be deployed on Amazon EC2 instances in an Auto Scaling group. The backend database will be an Amazon RDS for MySQL DB instance. The database password will be rotated every 60 days.<br>How can the solutions architect MOST securely manage the configuration of the application's database credentials?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#604",
          answers: [
            {
              choice:
                "<p>A.  Provide the database password as a parameter in the CloudFormation template. Create an initialization script in the Auto Scaling group's launch configuration UserData property to reference the password parameter using the Ref intrinsic function. Store the password on the EC2 instances. Reference the parameter for the value of the MasterUserPassword property in the AWS::RDS::DBInstance resource using the Ref intrinsic function.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a new AWS Secrets Manager secret resource in the CloudFormation template to be used as the database password. Configure the application to retrieve the password from Secrets Manager when needed. Reference the secret resource for the value of the MasterUserPassword property in the AWS::RDS::DBInstance resource using a dynamic reference.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a new AWS Secrets Manager secret resource in the CloudFormation template to be used as the database password. Create an initialization script in the Auto Scaling group's launch configuration UserData property to reference the secret resource using the Ref intrinsic function. Reference the secret resource for the value of the MasterUserPassword property in the AWS::RDS::DBInstance resource using the Ref intrinsic function.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a new AWS Systems Manager Parameter Store parameter in the CloudFormation template to be used as the database password. Create an initialization script in the Auto Scaling group's launch configuration UserData property to reference the parameter. Reference the parameter for the value of the MasterUserPassword property in the AWS::RDS::DBInstance resource using the Fn::GetAtt intrinsic function.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#605",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company built an application based on AWS Lambda deployed in an AWS CloudFormation stack. The last production release of the web application introduced an issue that resulted in an outage lasting several minutes. A solutions architect must adjust the deployment process to support a canary release.<br>Which solution will meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#605",
          answers: [
            {
              choice:
                "<p>A.  Create an alias for every new deployed version of the Lambda function. Use the AWS CLI update-alias command with the routing-config parameter to distribute the load.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Deploy the application into a new CloudFormation stack. Use an Amazon Route 53 weighted routing policy to distribute the load.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a version for every new deployed Lambda function. Use the AWS CLI update-function-configuration command with the routing-config parameter to distribute the load.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure AWS CodeDeploy and use CodeDeployDefault.OneAtATime in the Deployment configuration to distribute the load.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#606",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A manufacturing company is growing exponentially and has secured funding to improve its IT infrastructure and ecommerce presence. The company's ecommerce platform consists of:<br>✑ Static assets primarily comprised of product images stored in Amazon S3.<br>✑ Amazon DynamoDB tables that store product information, user information, and order information.<br>✑ Web servers containing the application's front-end behind Elastic Load Balancers.<br>The company wants to set up a disaster recovery site in a separate Region.<br>Which combination of actions should the solutions architect take to implement the new design while meeting all the requirements? (Choose three.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: ABD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#606",
          answers: [
            {
              choice:
                "<p>A.  Enable Amazon Route 53 health checks to determine if the primary site is down, and route traffic to the disaster recovery site if there is an issue.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Enable Amazon S3 cross-Region replication on the buckets that contain static assets.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Enable multi-Region targets on the Elastic Load Balancer and target Amazon EC2 instances in both Regions.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Enable DynamoDB global tables to achieve a multi-Region table replication.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Enable Amazon CloudWatch and create CloudWatch alarms that route traffic to the disaster recovery site when application latency exceeds the desired threshold.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Enable Amazon S3 versioning on the source and destination buckets containing static assets to ensure there is a rollback version available in the event of data corruption.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#607",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is developing a gene reporting device that will collect genomic information to assist researchers will collecting large samples of data from a diverse population. The device will push 8 KB of genomic data every second to a data platform that will need to process and analyze the data and provide information back to researchers. The data platform must meet the following requirements:<br>✑ Provide near-real-time analytics of the inbound genomic data<br>✑ Ensure the data is flexible, parallel, and durable<br>✑ Deliver results of processing to a data warehouse<br>Which strategy should a solutions architect use to meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#607",
          answers: [
            {
              choice:
                "<p>A.  Use Amazon Kinesis Data Firehouse to collect the inbound sensor data, analyze the data with Kinesis clients, and save the results to an Amazon RDS instance.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use Amazon Kinesis Data Streams to collect the inbound sensor data, analyze the data with Kinesis clients, and save the results to an Amazon Redshift cluster using Amazon EMR.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use Amazon S3 to collect the inbound device data, analyze the data from Amazon SQS with Kinesis, and save the results to an Amazon Redshift cluster.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use an Amazon API Gateway to put requests into an Amazon SQS queue, analyze the data with an AWS Lambda function, and save the results to an Amazon Redshift cluster using Amazon EMR.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#608",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company needs to move its on-premises resources to AWS. The current environment consists of 100 virtual machines (VMs) with a total of 40 TB of storage.<br>Most of the VMs can be taken offline because they support functions during business hours only, however, some are mission critical, so downtime must be minimized.<br>The administrator of the on-premises network provisioned 10 Mbps of internet bandwidth for the migration. The on-premises network throughput has reached capacity and would be costly to increase. A solutions architect must design a migration solution that can be performed within the next 3 months.<br>Which method would fulfill these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#608",
          answers: [
            {
              choice:
                "<p>A.  Set up a 1 Gbps AWS Direct Connect connection. Then, provision a private virtual interface, and use AWS Server Migration Service (SMS) to migrate the VMs into Amazon EC2.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS Application Discovery Service to assess each application, and determine how to refactor and optimize each using AWS services or AWS Marketplace solutions.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Export the VMs locally, beginning with the most mission-critical servers first. Use AWS Transfer for SFTP to securely upload each VM to Amazon S3 after they are exported. Use VM Import/Export to import the VMs into Amazon EC2.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Migrate mission-critical VMs with AWS SMS. Export the other VMs locally and transfer them to Amazon S3 using AWS Snowball. Use VM Import/Export to import the VMs into Amazon EC2.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#609",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company runs a popular public-facing ecommerce website. Its user base is growing quickly from a local market to a national market. The website is hosted in an on-premises data center with web servers and a MySQL database. The company wants to migrate its workload to AWS. A solutions architect needs to create a solution to:<br>✑ Improve security<br>✑ Improve reliability<br>✑ Improve availability<br>✑ Reduce latency<br>✑ Reduce maintenance<br>Which combination of steps should the solutions architect take to meet these requirements? (Choose three.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: ABE</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#609",
          answers: [
            {
              choice:
                "<p>A.  Use Amazon EC2 instances in two Availability Zones for the web servers in an Auto Scaling group behind an Application Load Balancer.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Migrate the database to a Multi-AZ Amazon Aurora MySQL DB cluster.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use Amazon EC2 instances in two Availability Zones to host a highly available MySQL database cluster.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Host static website content in Amazon S3. Use S3 Transfer Acceleration to reduce latency while serving webpages. Use AWS WAF to improve website security.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Host static website content in Amazon S3. Use Amazon CloudFront to reduce latency while serving webpages. Use AWS WAF to improve website security.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Migrate the database to a single-AZ Amazon RDS for MySQL DB instance.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#610",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has an internal application running on AWS that is used to track and process shipments in the company's warehouse. Currently, after the system receives an order, it emails the staff the information needed to ship a package. Once the package is shipped, the staff replies to the email and the order is marked as shipped.<br>The company wants to stop using email in the application and move to a serverless application model.<br>Which architecture solution meets these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#610",
          answers: [
            {
              choice:
                "<p>A.  Use AWS Batch to configure the different tasks required to ship a package. Have AWS Batch trigger an AWS Lambda function that creates and prints a shipping label. Once that label is scanned, as it leaves the warehouse, have another Lambda function move the process to the next step in the AWS Batch job.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  When a new order is created, store the order information in Amazon SQS. Have AWS Lambda check the queue every 5 minutes and process any needed work. When an order needs to be shipped, have Lambda print the label in the warehouse. Once the label has been scanned, as it leaves the warehouse, have an Amazon EC2 instance update Amazon SQS.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Update the application to store new order information in Amazon DynamoDB.  When a new order is created, trigger an AWS Step Functions workflow, mark the orders as ג€in progressג€, and print a package label to the warehouse. Once the label has been scanned and fulfilled, the application will trigger an AWS Lambda function that will mark the order as shipped and complete the workflow.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Store new order information in Amazon EFS. Have instances pull the new information from the NFS and send that information to printers in the warehouse. Once the label has been scanned, as it leaves the warehouse, have Amazon API Gateway call the instances to remove the order information from Amazon EFS.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#611",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has developed a mobile game. The backend for the game runs on several virtual machines located in an on-premises data center. The business logic is exposed using a REST API with multiple functions. Player session data is stored in central file storage. Backend services use different API keys for throttling and to distinguish between live and test traffic.<br>The load on the game backend varies throughout the day. During peak hours, the server capacity is not sufficient. There are also latency issues when fetching player session data. Management has asked a solutions architect to present a cloud architecture that can handle the game's varying load and provide low-latency data access. The API model should not be changed.<br>Which solution meets these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#611",
          answers: [
            {
              choice:
                "<p>A.  Implement the REST API using a Network Load Balancer (NLB). Run the business logic on an Amazon EC2 instance behind the NLB.  Store player session data in Amazon Aurora Serverless.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Implement the REST API using an Application Load Balancer (ALB). Run the business logic in AWS Lambda. Store player session data in Amazon DynamoDB with on-demand capacity.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Implement the REST API using Amazon API Gateway. Run the business logic in AWS Lambda. Store player session data in Amazon DynamoDB with on- demand capacity.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Implement the REST API using AWS AppSync. Run the business logic in AWS Lambda. Store player session data in Amazon Aurora Serverless.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#612",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>An enterprise company wants to allow its developers to purchase third-party software through AWS Marketplace. The company uses an AWS Organizations account structure with full features enabled, and has a shared services account in each organizational unit (OU) that will be used by procurement managers. The procurement team's policy indicates that developers should be able to obtain third-party software from an approved list only and use Private Marketplace in AWS<br>Marketplace to achieve this requirement. The procurement team wants administration of Private Marketplace to be restricted to a role named procurement- manager-role, which could be assumed by procurement managers. Other IAM users, groups, roles, and account administrators in the company should be denied<br>Private Marketplace administrative access.<br>What is the MOST efficient way to design an architecture to meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#612",
          answers: [
            {
              choice:
                "<p>A.  Create an IAM role named procurement-manager-role in all AWS accounts in the organization. Add the PowerUserAccess managed policy to the role. Apply an inline policy to all IAM users and roles in every AWS account to deny permissions on the AWSPrivateMarketplaceAdminFullAccess managed policy.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an IAM role named procurement-manager-role in all AWS accounts in the organization. Add the AdministratorAccess managed policy to the role. Define a permissions boundary with the AWSPrivateMarketplaceAdminFullAccess managed policy and attach it to all the developer roles.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an IAM role named procurement-manager-role in all the shared services accounts in the organization. Add the AWSPrivateMarketplaceAdminFullAccess managed policy to the role. Create an organization root-level SCP to deny permissions to administer Private Marketplace to everyone except the role named procurement-manager-role. Create another organization root-level SCP to deny permissions to create an IAM role named procurement-manager-role to everyone in the organization.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an IAM role named procurement-manager-role in all AWS accounts that will be used by developers. Add the AWSPrivateMarketplaceAdminFullAccess managed policy to the role. Create an SCP in Organizations to deny permissions to administer Private Marketplace to everyone except the role named procurement-manager-role. Apply the SCP to all the shared services accounts in the organization.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#613",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect is designing the data storage and retrieval architecture for a new application that a company will be launching soon. The application is designed to ingest millions of small records per minute from devices all around the world. Each record is less than 4 KB in size and needs to be stored in a durable location where it can be retrieved with low latency. The data is ephemeral and the company is required to store the data for 120 days only, after which the data can be deleted.<br>The solutions architect calculates that, during the course of a year, the storage requirements would be about 10-15 TB.<br>Which storage strategy is the MOST cost-effective and meets the design requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#613",
          answers: [
            {
              choice:
                "<p>A.  Design the application to store each incoming record as a single .csv file in an Amazon S3 bucket to allow for indexed retrieval. Configure a lifecycle policy to delete data older than 120 days.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Design the application to store each incoming record in an Amazon DynamoDB table properly configured for the scale. Configure the DynamoDB Time to Live (TTL) feature to delete records older than 120 days.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Design the application to store each incoming record in a single table in an Amazon RDS MySQL database. Run a nightly cron job that executes a query to delete any records older than 120 days.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Design the application to batch incoming records before writing them to an Amazon S3 bucket. Update the metadata for the object to contain the list of records in the batch and use the Amazon S3 metadata search feature to retrieve the data. Configure a lifecycle policy to delete the data after 120 days.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#614",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company provides auction services for artwork and has users across North America and Europe. The company hosts its application in Amazon EC2 instances in the us-east-1 Region. Artists upload photos of their work as large-size, high-resolution image files from their mobile phones to a centralized Amazon S3 bucket created in the us-east-1 Region. The users in Europe are reporting slow performance for their image uploads.<br>How can a solutions architect improve the performance of the image upload process?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#614",
          answers: [
            {
              choice:
                "<p>A.  Redeploy the application to use S3 multipart uploads.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an Amazon CloudFront distribution and point to the application as a custom origin.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure the buckets to use S3 Transfer Acceleration.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an Auto Scaling group for the EC2 instances and create a scaling policy.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#615",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has developed a new release of a popular video game and wants to make it available for public download. The new release package is approximately<br>5 GB in size. The company provides downloads for existing releases from a Linux-based, publicly facing FTP site hosted in an on-premises data center. The company expects the new release will be downloaded by users worldwide. The company wants a solution that provides improved download performance and low transfer costs, regardless of a user's location.<br>Which solutions will meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#615",
          answers: [
            {
              choice:
                "<p>A.  Store the game files on Amazon EBS volumes mounted on Amazon EC2 instances within an Auto Scaling group. Configure an FTP service on the EC2 instances. Use an Application Load Balancer in front of the Auto Scaling group. Publish the game download URL for users to download the package.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Store the game files on Amazon EFS volumes that are attached to Amazon EC2 instances within an Auto Scaling group. Configure an FTP service on each of the EC2 instances. Use an Application Load Balancer in front of the Auto Scaling group. Publish the game download URL for users to download the package.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure Amazon Route 53 and an Amazon S3 bucket for website hosting. Upload the game files to the S3 bucket. Use Amazon CloudFront for the website. Publish the game download URL for users to download the package.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure Amazon Route 53 and an Amazon S3 bucket for website hosting. Upload the game files to the S3 bucket. Set Requester Pays for the S3 bucket. Publish the game download URL for users to download the package.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#616",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A new startup is running a serverless application using AWS Lambda as the primary source of compute. New versions of the application must be made available to a subset of users before deploying changes to all users. Developers should also have the ability to abort the deployment and have access to an easy rollback<br><br>mechanism. A solutions architect decides to use AWS CodeDeploy to deploy changes when a new version is available.<br>Which CodeDeploy configuration should the solutions architect use?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#616",
          answers: [
            {
              choice: "<p>A.  A blue/green deployment</p>",
              correct: false,
              feedback: "",
            },
            {
              choice: "<p>B.  A linear deployment</p>",
              correct: false,
              feedback: "",
            },
            {
              choice: "<p>C.  A canary deployment</p>",
              correct: true,
              feedback: "",
            },
            {
              choice: "<p>D.  An all-at-once deployment</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#617",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect is implementing federated access to AWS for users of the company's mobile application. Due to regulatory and security requirements, the application must use a custom-built solution for authenticating users and must use IAM roles for authorization.<br>Which of the following actions would enable authentication and authorization and satisfy the requirements? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: DE</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#617",
          answers: [
            {
              choice:
                "<p>A.  Use a custom-built SAML-compatible solution for authentication and AWS SSO for authorization.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a custom-built LDAP connector using Amazon API Gateway and AWS Lambda for authentication. Store authorization tokens in Amazon DynamoDB, and validate authorization requests using another Lambda function that reads the credentials from DynamoDB. </p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use a custom-built OpenID Connect-compatible solution with AWS SSO for authentication and authorization.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use a custom-built SAML-compatible solution that uses LDAP for authentication and uses a SAML assertion to perform authorization to the IAM identity provider.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Use a custom-built OpenID Connect-compatible solution for authentication and use Amazon Cognito for authorization.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#618",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has developed a custom tool used in its workflow that runs within a Docker container. The company must perform manual steps each time the container code is updated to make the container image available to new workflow executions. The company wants to automate this process to eliminate manual effort and ensure a new container image is generated every time the tool code is updated.<br>Which combination of actions should a solutions architect take to meet these requirements? (Choose three.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: ACF</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#618",
          answers: [
            {
              choice:
                "<p>A.  Configure an Amazon ECR repository for the tool. Configure an AWS CodeCommit repository containing code for the tool being deployed to the container image in Amazon ECR.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Configure an AWS CodeDeploy application that triggers an application version update that pulls the latest tool container image from Amazon ECR, updates the container with code from the source AWS CodeCommit repository, and pushes the updated container image to Amazon ECR.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configuration an AWS CodeBuild project that pulls the latest tool container image from Amazon ECR, updates the container with code from the source AWS CodeCommit repository, and pushes the updated container image to Amazon ECR.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure an AWS CodePipeline pipeline that sources the tool code from the AWS CodeCommit repository and initiates an AWS CodeDeploy application update.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Configure an Amazon EventBridge rule that triggers on commits to the AWS CodeCommit repository for the tool. Configure the event to trigger an update to the tool container image in Amazon ECR. Push the updated container image to Amazon ECR.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Configure an AWS CodePipeline pipeline that sources the tool code from the AWS CodeCommit repository and initiates an AWS CodeBuild build.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#619",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company hosts an application on Amazon EC2 instance and needs to store files in Amazon S3. The files should never traverse the public internet, and only the application EC2 instances are granted access to a specific Amazon S3 bucket. A solutions architect has created a VPC endpoint for Amazon S3 and connected the endpoint to the application VPC.<br>Which additional steps should the solutions architect take to meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#619",
          answers: [
            {
              choice:
                "<p>A.  Assign an endpoint policy to the endpoint that restricts access to a specific S3 bucket. Attach a bucket policy to the S3 bucket that grants access to the VPC endpoint. Add the gateway prefix list to a NACL of the instances to limit access to the application EC2 instances only.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Attach a bucket policy to the S3 bucket that grants access to application EC2 instances only using the aws:SourceIp condition. Update the VPC route table so only the application EC2 instances can access the VPC endpoint.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Assign an endpoint policy to the VPC endpoint that restricts access to a specific S3 bucket. Attach a bucket policy to the S3 bucket that grants access to the VPC endpoint. Assign an IAM role to the application EC2 instances and only allow access to this role in the S3 bucket's policy.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Assign an endpoint policy to the VPC endpoint that restricts access to S3 in the current Region. Attach a bucket policy to the S3 bucket that grants access to the VPC private subnets only. Add the gateway prefix list to a NACL to limit access to the application EC2 instances only.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#620",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A financial services company has an on-premises environment that ingests market data feeds from stock exchanges, transforms the data, and sends the data to an internal Apache Kafka cluster. Management wants to leverage AWS services to build a scalable and near-real-time solution with consistent network performance to provide stock market data to a web application.<br>Which steps should a solutions architect take to build the solution? (Choose three.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: ACD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#620",
          answers: [
            {
              choice:
                "<p>A.  Establish an AWS Direct Connect connection from the on-premises data center to AWS.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an Amazon EC2 Auto Scaling group to pull the messages from the on-premises Kafka cluster and use the Amazon Consumer Library to put the data into an Amazon Kinesis data stream.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an Amazon EC2 Auto Scaling group to pull the messages from the on-premises Kafka cluster and use the Amazon Kinesis Producer Library to put the data into a Kinesis data stream.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a WebSocket API in Amazon API Gateway, create an AWS Lambda function to process an Amazon Kinesis data stream, and use the @connections command to send callback messages to connected clients.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Create a GraphQL API in AWS AppSync, create an AWS Lambda function to process the Amazon Kinesis data stream, and use the @connections command to send callback messages to connected clients.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Establish a Site-to-Site VPN from the on-premises data center to AWS.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#621",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A fitness tracking company serves users around the world, with its primary markets in North America and Asia. The company needs to design an infrastructure for its read-heavy user authorization application with the following requirements:<br>✑ Be resilient to problems with the application in any Region.<br>✑ Write to a database in a single Region.<br>✑ Read from multiple Regions.<br>✑ Support resiliency across application tiers in each Region.<br>✑ Support the relational database semantics reflected in the application.<br>Which combination of steps should a solutions architect take? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: CE</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#621",
          answers: [
            {
              choice:
                "<p>A.  Use an Amazon Route 53 geoproximity routing policy combined with a multivalue answer routing policy.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Deploy web, application, and MySQL database servers to Amazon EC2 instance in each Region. Set up the application so that reads and writes are local to the Region. Create snapshots of the web, application, and database servers and store the snapshots in an Amazon S3 bucket in both Regions. Set up cross- Region replication for the database layer.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use an Amazon Route 53 geolocation routing policy combined with a failover routing policy.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Set up web, application, and Amazon RDS for MySQL instances in each Region. Set up the application so that reads are local and writes are partitioned based on the user. Set up a Multi-AZ failover for the web, application, and database servers. Set up cross-Region replication for the database layer.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Set up active-active web and application servers in each Region. Deploy an Amazon Aurora global database with clusters in each Region. Set up the application to use the in-Region Aurora database endpoints. Create snapshots of the web application servers and store them in an Amazon S3 bucket in both Regions.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#622",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company needs to create a centralized logging architecture for all of its AWS accounts. The architecture should provide near-real-time data analysis for all AWS<br>CloudTrail logs and VPC Flow Logs across all AWS accounts. The company plans to use Amazon Elasticsearch Service (Amazon ES) to perform log analysis in the logging account.<br>Which strategy a solutions architect use to meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#622",
          answers: [
            {
              choice:
                "<p>A.  Configure CloudTrail and VPC Flow Logs in each AWS account to send data to a centralized Amazon S3 bucket in the logging account. Create and AWS Lambda function to load data from the S3 bucket to Amazon ES in the logging account.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Configure CloudTrail and VPC Flow Logs to send data to a log group in Amazon CloudWatch account. Configure a CloudWatch subscription filter in each AWS account to send data to Amazon Kinesis Data Firehouse in the logging account. Load data from Kinesis Data Firehouse into Amazon ES in the logging account.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure CloudTrail and VPC Flow Logs to send data to a separate Amazon S3 bucket in each AWS account. Create an AWS Lambda function triggered by S3 events to copy the data to a centralized logging bucket. Create another Lambda function to load data from the S3 bucket to Amazon ES in the logging account.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure CloudTrail and VPC Flow Logs to send data to a log group in Amazon CloudWatch Logs in each AWS account. Create AWS Lambda functions in each AWS accounts to subscribe to the log groups and stream the data to an Amazon S3 bucket in the logging account. Create another Lambda function to load data from the S3 bucket to Amazon ES in the logging account.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#623",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A financial company is using a high-performance compute cluster running on Amazon EC2 instances to perform market simulations. A DNS record must be created in an Amazon Route 53 private hosted zone when instances start. The DNS record must be removed after instances are terminated.<br>Currently the company uses a combination of Amazon CloudWatch Events and AWS Lambda to create the DNS record. The solution worked well in testing with small clusters, but in production with clusters containing thousands of instances the company sees the following error in the Lambda logs:<br>HTTP 400 error (Bad request).<br>The response header also includes a status code element with a value of `Throttling` and a status message element with a value of `Rate exceeded`.<br>Which combination of steps should the Solutions Architect take to resolve these issues? (Choose three.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: CDE</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#623",
          answers: [
            {
              choice:
                "<p>A.  Configure an Amazon SOS FIFO queue and configure a CloudWatch Events rule to use this queue as a target. Remove the Lambda target from the CloudWatch Events rule.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Configure an Amazon Kinesis data stream and configure a CloudWatch Events rule to use this queue as a target. Remove the Lambda target from the CloudWatch Events rule.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Update the CloudWatch Events rule to trigger on Amazon EC2 ג€Instance Launch Successfulג€ and ג€Instance Terminate Successfulג€ events for the Auto Scaling group used by the cluster.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure a Lambda function to retrieve messages from an Amazon SQS queue. Modify the Lambda function to retrieve a maximum of 10 messages then batch the messages by Amazon Route 53 API call type and submit. Delete the messages from the SQS queue after successful API calls.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Configure an Amazon SQS standard queue and configure the existing CloudWatch Events rule to use this queue as a target. Remove the Lambda target from the CloudWatch Events rule.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Configure a Lambda function to read data from the Amazon Kinesis data stream and configure the batch window to 5 minutes. Modify the function to make a single API call to Amazon Route 53 with all records read from the kinesis data stream.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#624",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A North American company with headquarters on the East Coast is deploying a new web application running on Amazon EC2 in the us-east-1 Region. The application should dynamically scale to meet user demand and maintain resiliency. Additionally, the application must have disaster recover capabilities in an active-passive configuration with the us-west-1 Region.<br>Which steps should a solutions architect take after creating a VPC in the us-east-1 Region?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#624",
          answers: [
            {
              choice:
                "<p>A.  Create a VPC in the us-west-1 Region. Use inter-Region VPC peering to connect both VPCs. Deploy an Application Load Balancer (ALB) spanning multiple Availability Zones (AZs) to the VPC in the us-east-1 Region. Deploy EC2 instances across multiple AZs in each Region as part of an Auto Scaling group spanning both VPCs and served by the ALB. </p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Deploy an Application Load Balancer (ALB) spanning multiple Availability Zones (AZs) to the VPC in the us-east-1 Region. Deploy EC2 instances across multiple AZs as part of an Auto Scaling group served by the ALB.  Deploy the same solution to the us-west-1 Region. Create an Amazon Route 53 record set with a failover routing policy and health checks enabled to provide high availability across both Regions.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a VPC in the us-west-1 Region. Use inter-Region VPC peering to connect both VPCs. Deploy an Application Load Balancer (ALB) that spans both VPCs. Deploy EC2 instances across multiple Availability Zones as part of an Auto Scaling group in each VPC served by the ALB.  Create an Amazon Route 53 record that points to the ALB. </p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Deploy an Application Load Balancer (ALB) spanning multiple Availability Zones (AZs) to the VPC in the us-east-1 Region. Deploy EC2 instances across multiple AZs as part of an Auto Scaling group served by the ALB.  Deploy the same solution to the us-west-1 Region. Create separate Amazon Route 53 records in each Region that point to the ALB in the Region. Use Route 53 health checks to provide high availability across both Regions.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#625",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company standardized its method of deploying applications to AWS using AWS CodePipeline and AWS CloudFormation. The applications are in TypeScript and<br>Python. The company has recently acquired another business that deploys applications to AWS using Python scripts.<br>Developers from the newly acquired company are hesitant to move their applications under CloudFormation because it would require that they learn a new domain-specific language and eliminate their access to language features, such as looping.<br>How can the acquired applications quickly be brought up to deployment standards while addressing the developers' concerns?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#625",
          answers: [
            {
              choice:
                "<p>A.  Create Cloud Formation templates and re-use parts of the Python scripts as Instance user data. Use the AWS Cloud Development Kit (AWS CDK) to deploy the application using these templates. Incorporate the AWS CDK into CodePipeline and deploy the application to AWS using these templates.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use a third-party resource provisioning engine inside AWS CodeBuild to standardize the deployment processes of the existing and acquired company. Orchestrate the CodeBuild job using CodePipeline.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Standardize on AWS OpsWorks. Integrate OpsWorks with CodePipeline. Have the developers create Chef recipes to deploy their applications on AWS.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Define the AWS resources using TypeScript or Python. Use the AWS Cloud Development Kit (AWS CDK) to create CloudFormation templates from the developers' code, and use the AWS CDK to create CloudFormation stacks. Incorporate the AWS CDK as a CodeBuild job in CodePipeline.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#626",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has a single AWS master billing account, which is the root of the AWS Organizations hierarchy.<br>The company has multiple AWS accounts within this hierarchy, all organized into organization units (OUs). More OUs and AWS accounts will continue to be created as other parts of the business migrate applications to AWS. These business units may need to use different AWS services. The Security team is implementing the following requirements for all current and future AWS accounts:<br>✑ Control policies must be applied across all accounts to prohibit AWS servers.<br>✑ Exceptions to the control policies are allowed based on valid use cases.<br>Which solution will meet these requirements with minimal optional overhead?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#626",
          answers: [
            {
              choice:
                "<p>A.  Use an SCP in Organizations to implement a deny list of AWS servers. Apply this SCP at the level. For any specific exceptions for an OU, create a new SCP for that OU and add the required AWS services to the allow list.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use an SCP in Organizations to implement a deny list of AWS service. Apply this SCP at the root level and each OU. Remove the default AWS managed SCP from the root level and all OU levels. For any specific exceptions, modify the SCP attached to that OU, and add the required AWS services to the allow list.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use an SCP in Organizations to implement a deny list of AWS service. Apply this SCP at each OU level. Leave the default AWS managed SCP at the root level. For any specific executions for an OU, create a new SCP for that OU.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use an SCP in Organizations to implement an allow list of AWS services. Apply this SCP at the root level. Remove the default AWS managed SCP from the root level and all OU levels. For any specific exceptions for an OU, modify the SCP attached to that OU, and add the required AWS services to the allow list.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#627",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A healthcare company runs a production workload on AWS that stores highly sensitive personal information. The security team mandates that, for auditing purposes, any AWS API action using AWS account root user credentials must automatically create a high-priority ticket in the company's ticketing system. The ticketing system has a monthly 3-hour maintenance window when no tickets can be created.<br>To meet security requirements, the company enabled AWS CloudTrail logs and wrote a scheduled AWS Lambda function that uses Amazon Athena to query API actions performed by the root user. The Lambda function submits any actions found to the ticketing system API. During a recent security audit, the security team discovered that several tickets were not created because the ticketing system was unavailable due to planned maintenance.<br>Which combination of steps should a solutions architect take to ensure that the incidents are reported to the ticketing system even during planned maintenance?<br>(Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: DE</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#627",
          answers: [
            {
              choice:
                "<p>A.  Create an Amazon SNS topic to which Amazon CloudWatch alarms will be published. Configure a CloudWatch alarm to invoke the Lambda function.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an Amazon SQS queue to which Amazon CloudWatch alarms will be published. Configure a CloudWatch alarm to publish to the SQS queue.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Modify the Lambda function to be triggered by messages published to an Amazon SNS topic. Update the existing application code to retry every 5 minutes if the ticketing system's API endpoint is unavailable.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Modify the Lambda function to be triggered when there are messages in the Amazon SQS queue and to return successfully when the ticketing system API has processed the request.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Create an Amazon EventBridge rule that triggers on all API events where the invoking user identity is root. Configure the EventBridge rule to write the event to an Amazon SQS queue.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#628",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect is migrating an existing workload to AWS Fargate. The task can only run in a private subnet within the VPC where there is no direct connectivity from outside the system to the application. When the Fargate task is launched, the task fails with the following error:<br>CannotPullContainerError: API error (500): Get https://111122223333.dkr.ecr.us-east-1.amazonaws.com/v2/: net/http: request canceled while waiting for connection<br>How should the solutions architect correct this error?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#628",
          answers: [
            {
              choice:
                "<p>A.  Ensure the task is set to ENABLED for the auto-assign public IP setting when launching the task.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Ensure the task is set to DISABLED for the auto-assign public IP setting when launching the task. Configure a NAT gateway in the public subnet in the VPC to route requests to the internet.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Ensure the task is set to DISABLED for the auto-assign public IP setting when launching the task. Configure a NAT gateway in the private subnet in the VPC to route requests to the internet.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Ensure the network mode is set to bridge in the Fargate task definition.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#629",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is running a two-tier web-based application in an on-premises data center. The application user consists of a single server running a stateful application. The application connects to a PostgreSQL database running on a separate server. The application's user base is expected to grow significantly, so the company is migrating the application and database to AWS. The solution will use Amazon Aurora PostgreSQL, Amazon EC2 Auto Scaling, and Elastic Load<br>Balancing.<br>Which solution will provide a consistent user experience that will allow the application and database tiers to scale?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#629",
          answers: [
            {
              choice:
                "<p>A.  Enable Aurora Auto Scaling for Aurora Replicas. Use a Network Load Balancer with the least outstanding requests routing algorithm and sticky sessions enabled.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Enable Aurora Auto Scaling for Aurora writes. Use an Application Load Balancer with the round robin routing algorithm and sticky sessions enabled.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Enable Aurora Auto Scaling for Aurora Replicas. Use an Application Load Balancer with the robin routing and sticky sessions enabled.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Enable Aurora Scaling for Aurora writers. Use a Network Load Balancer with the least outstanding requests routing algorithm and sticky sessions enabled.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#630",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect is designing a network for a new cloud deployment. Each account will need autonomy to modify route tables and make changes. Centralized and controlled egress internet connectivity is also needed. The cloud footprint is expected to grow to thousands of AWS accounts.<br>Which architecture will meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#630",
          answers: [
            {
              choice:
                "<p>A.  A centralized transit VPC with a VPN connection to a standalone VPC in each account. Outbound internet traffic will be controlled by firewall appliances.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  A centralized shared VPC with a subnet for each account. Outbound internet traffic will be controlled through a fleet of proxy servers.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  A shared services VPC to host central assets to include a fleet of firewalls with a route to the internet. Each spoke VPC will peer to the central VPC. </p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  A shared transit gateway to which each VPC will be attached. Outbound internet access will route through a fleet of VPN-attached firewalls.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#631",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect needs to migrate 50 TB of NFS data to Amazon S3. The files are on several NFS file servers on corporate network. These are dense file systems containing tens of millions of small files. The system operators have configured the file interface on an AWS Snowball Edge device and are using a shell script to copy data.<br>Developers report that copying the data to the Snowball Edge device is very slow. The solutions architect suspects this may be related to the overhead of encrypting all the small files and transporting them over the network.<br>Which changes can be made to speed up the data transfer?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#631",
          answers: [
            {
              choice:
                "<p>A.  Cluster two Snowball Edge devices together to increase the throughput of the devices.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Change the solution to use the S3 Adapter instead of the file interface on the Snowball Edge device.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Increase the number of parallel copy jobs to increase the throughput of the Snowball Edge device.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Connect directly to the USB interface on the Snowball Edge device and copy the files locally.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#632",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is planning on hosting its ecommerce platform on AWS using a multi-tier web application designed for a NoSQL database. The company plans to use the us-west-2 Region as its primary Region. The company wants to ensure that copies of the application and data are available in second Region, us-west-1, for disaster recovery. The company wants to keep the time to fail over as low as possible. Failing back to the primary Region should be possible without administrative interaction after the primary service is restored.<br>Which design should the solutions architect use?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#632",
          answers: [
            {
              choice:
                "<p>A.  Use AWS CloudFormation StackSets to create the stacks in both Regions with Auto Scaling groups for the web and application tiers. Asynchronously replicate static content between Regions using Amazon S3 cross-Region replication. Use an Amazon Route 53 DNS failover routing policy to direct users to the secondary site in us-west-1 in the event of an outage. Use Amazon DynamoDB global tables for the database tier.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS CloudFormation StackSets to create the stacks in both Regions with Auto Scaling groups for the web and application tiers. Asynchronously replicate static content between Regions using Amazon S3 cross-Region replication. Use an Amazon Route 53 DNS failover routing policy to direct users to the secondary site in us-west-1 in the event of an outage Deploy an Amazon Aurora global database for the database tier.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use AWS Service Catalog to deploy the web and application servers in both Regions Asynchronously replicate static content between the two Regions using Amazon S3 cross-Region replication. Use Amazon Route 53 health checks to identify a primary Region failure and update the public DNS entry listing to the secondary Region in the event of an outage. Use Amazon RDS for MySQL with cross-Region replication for the database tier.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use AWS CloudFormation StackSets to create the stacks in both Regions using Auto Scaling groups for the web and application tiers. Asynchronously replicate static content between Regions using Amazon S3 cross-Region replication. Use Amazon CloudFront with static files in Amazon S3, and multi-Region origins for the front-end web tier. Use Amazon DynamoDB tables in each Region with scheduled backups to Amazon S3.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#633",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company hosts a blog post application on AWS using Amazon API Gateway, Amazon DynamoDB, and AWS Lambda. The application currently does not use<br>API keys to authorize requests. The API model is as follows:<br>GET/posts/[postid] to get post details<br>GET/users[userid] to get user details<br>GET/comments/[commentid] to get comments details<br>The company has noticed users are actively discussing topics in the comments section, and the company wants to increase user engagement by marking the comments appears in real time.<br>Which design should be used to reduce comment latency and improve user experience?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#633",
          answers: [
            {
              choice:
                "<p>A.  Use edge-optimized API with Amazon CloudFront to cache API responses.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Modify the blog application code to request GET comment[commented] every 10 seconds.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use AWS AppSync and leverage WebSockets to deliver comments.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Change the concurrency limit of the Lambda functions to lower the API response time.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#634",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has a VPC with two domain controllers running Active Directory in the default configuration. The VPC DHCP options set is configured to use the IP addresses of the two domain controllers. There is a VPC interface endpoint defined; but instances within the VPC are not able to resolve the private endpoint addresses.<br>Which strategies would resolve this issue? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: AB</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#634",
          answers: [
            {
              choice:
                "<p>A.  Define an outbound Amazon Route 53 Resolver. Set a conditional forward rule for the Active Directory domain to the Active Directory servers. Update the VPC DHCP options set to AmazonProvidedDNS.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Update the DNS service on the Active Directory servers to forward all non-authoritative queries to the VPC Resolver.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Define an inbound Amazon Route 53 Resolver. Set a conditional forward rule for the Active Directory domain to the Active Directory servers. Update the VPC DHCP options set to AmazonProvidedDNS.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Update the DNS service on the client instances to split DNS queries between the Active Directory servers and the VPC Resolver.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Update the DNS service on the Active Directory servers to forward all queries to the VPC Resolver.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#635",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has a photo sharing social networking application. To provide a consistent experience for users, the company performs some image processing on the photos uploaded by users before publishing on the application. The image processing is implemented using a set of Python libraries.<br>The current architecture is as follows:<br>✑ The image processing Python code runs in a single Amazon EC2 instance and stores the processed images in an Amazon S3 bucket named ImageBucket.<br>✑ The front-end application, hosted in another bucket, loads the images from ImageBucket to display to users.<br>With plans for global expansion, the company wants to implement changes in its existing architecture to be able to scale for increased demand on the application and reduce management complexity as the application scales.<br>Which combination of changes should a solutions architect make? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#635",
          answers: [
            {
              choice:
                "<p>A.  Place the image processing EC2 instance into an Auto Scaling group.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS Lambda to run the image processing tasks.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice: "<p>C.  Use Amazon Rekognition for image processing.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use Amazon CloudFront in front of ImageBucket.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Deploy the applications in an Amazon ECS cluster and apply Service Auto Scaling.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#636",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has a web application that allows users to upload short videos. The videos are stored on Amazon EBS volumes and analyzed by custom recognition software for categorization.<br>The website contains static content that has variable traffic with peaks in certain months. The architecture consists of Amazon EC2 instances running in an Auto<br>Scaling group for the web application and EC2 instances running in an Auto Scaling group to process an Amazon SQS-queue. The company wants to re-architect the application to reduce operational overhead using AWS managed services where possible and remove dependencies on third-party software.<br>Which solution meets these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#636",
          answers: [
            {
              choice:
                "<p>A.  Use Amazon ECS containers for the web application and Spot instances for the Scaling group that processes the SQS queue. Replace the custom software with Amazon Rekognition to categorize the videos.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Store the uploaded videos in Amazon EFS and mount the file system to the EC2 instances for the web application. Process the SQS queue with an AWS Lambda function that calls the Amazon Rekognition API to categorize the videos.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Host the web application in Amazon S3. Store the uploaded videos in Amazon S3. Use S3 event notification to publish events to the SQS queue. Process the SQS queue with an AWS Lambda function that call the Amazon Rekognition API to categorize the videos.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use AWS Elastic Beanstalk to launch EC2 instances in an Auto Scaling group for the application and launch a worker environment to process the SQS queue. Replace the custom software with Amazon Rekognition to categorize the videos.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#637",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A retail company processes point-of-sale data on application servers in its data center and writes outputs to an Amazon DynamoDB table. The data center is connected to the company's VPC with an AWS Direct Connect (DX) connection, and the application servers require a consistent network connection at speeds greater than 2 Gbps.<br>The company decides that the DynamoDB table needs to be highly available and fault tolerant. The company policy states that the data should be available across two regions.<br>What changes should the company make to meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#637",
          answers: [
            {
              choice:
                "<p>A.  Establish a second DX connection for redundancy. Use DynamoDB global tables to replicate data to a second Region. Modify the application to fail over to the second Region.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use an AWS managed VPN as a backup to DX. Create an identical DynamoDB table in a second Region. Modify the application to replicate data to both Regions.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Establish a second DX connection for redundancy. Create an identical DynamoDB table in a second Region. Enable DynamoDB auto scaling to manage throughput capacity. Modify the application to write to the second Region.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use AWS managed VPN as a backup to DX. Create an identical DynamoDB table in a second Region. Enable DynamoDB streams to capture changes to the table. Use AWS Lambda to replicate changes to the second Region.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#638",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is using AWS CloudFormation as its deployment tool for all application. It stages all application binaries and templates within Amazon S3 bucket with versioning enabled. Developers have access to an Amazon EC2 instance that hosts the integrated development (IDE). The Developers download the application binaries from Amazon S3 to the EC2 instance, make changes, and upload the binaries to an S3 bucket after running the unit tests locally. The developers want to improve the existing deployment mechanism and implement CI/CD using AWS CodePipeline.<br>The developers have the following requirements:<br>✑ Use AWS CodeCommit for source control.<br>✑ Automate unit testing and security scanning.<br>✑ Alert the Developers when unit tests fail.<br>✑ Turn application features on and off, and customize deployment dynamically as part of CI/CD.<br>✑ Have the lead Developer provide approval before deploying an application.<br>Which solution will meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#638",
          answers: [
            {
              choice:
                "<p>A.  Use AWS CodeBuild to run tests and security scans. Use an Amazon EventBridge rule to send Amazon SNS alerts to the Developers when unit tests fail. Write AWS Cloud Developer kit (AWS CDK) constructs for different solution features, and use a manifest file to turn features on and off in the AWS CDK application. Use a manual approval stage in the pipeline to allow the lead Developer to approve applications.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS Lambda to run unit tests and security scans. Use Lambda in a subsequent stage in the pipeline to send Amazon SNS alerts to the developers when unit tests fail. Write AWS Amplify plugins for different solution features and utilize user prompts to turn features on and off. Use Amazon SES in the pipeline to allow the lead developer to approve applications.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use Jenkins to run unit tests and security scans. Use an Amazon EventBridge rule in the pipeline to send Amazon SES alerts to the developers when unit tests fail. Use AWS CloudFormation nested stacks for different solution features and parameters to turn features on and off. Use AWS Lambda in the pipeline to allow the lead developer to approve applications.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use AWS CodeDeploy to run unit tests and security scans. Use an Amazon CloudWatch alarm in the pipeline to send Amazon SNS alerts to the developers when unit tests fail. Use Docker images for different solution features and the AWS CLI to turn features on and off. Use a manual approval stage in the pipeline to allow the lead developer to approve applications.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#639",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>An IoT company has rolled out a fleet of sensors for monitoring temperatures in remote locations. Each device connects to AWS IoT Core and sends a message<br>30 seconds, updating an Amazon DynamoDB table. A System Administrator users AWS IoT to verify the devices are still sending messages to AWS IoT Core: the database is not updating.<br>What should a Solutions Architect check to determine why the database is not being updated?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#639",
          answers: [
            {
              choice:
                "<p>A.  Verify the AWS IoT Device Shadow service is subscribed to the appropriate topic and is executing the AWS Lambda function.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Verify that AWS IoT monitoring shows that the appropriate AWS IoT rules are being executed, and that the AWS IoT rules are enabled with the correct rule actions.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Check the AWS IoT Fleet indexing service and verify that the thing group has the appropriate IAM role to update DynamoDB. </p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Verify that AWS IoT things are using MQTT instead of MQTT over WebSocket, then check that the provisioning has the appropriate policy attached.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#640",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>An enterprise company is using a multi-account AWS strategy. There are separate accounts for development staging and production workloads. To control costs and improve governance the following requirements have been defined:<br>✑ The company must be able to calculate the AWS costs for each project.<br>✑ The company must be able to calculate the AWS costs for each environment development staging and production.<br>✑ Commonly deployed IT services must be centrally managed.<br>✑ Business units can deploy pre-approved IT services only.<br>✑ Usage of AWS resources in the development account must be limited.<br>Which combination of actions should be taken to meet these requirements? (Choose three.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: ADF</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#640",
          answers: [
            {
              choice:
                "<p>A.  Apply environment, cost center, and application name tags to all taggable resources.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Configure custom budgets and define thresholds using Cost Explorer.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure AWS Trusted Advisor to obtain weekly emails with cost-saving estimates.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a portfolio for each business unit and add products to the portfolios using AWS CloudFormation in AWS Service Catalog.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Configure a billing alarm in Amazon CloudWatch.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Configure SCPs in AWS Organizations to allow services available using AWS.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#641",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is planning to migrate an existing high performance computing (HPC) solution to the AWS Cloud. The existing solution consists of a 12-node cluster running Linux with high speed interconnectivity developed on a single rack. A solutions architect needs to optimize the performance of the HPC cluster.<br>Which combination of steps will meet these requirements? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BC</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#641",
          answers: [
            {
              choice:
                "<p>A.  Deploy instances across at least three Availability Zones.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Deploy Amazon EC2 instances in a placement group.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use Amazon EC2 instances that support Elastic Fabric Adapter (EFA).</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use Amazon EC2 instances that support burstable performance.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice: "<p>E.  Enable CPU hyperthreading.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#642",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company hosts a game player-matching service on a public facing, physical, on-premises instance that all users are able to access over the internet. All traffic to the instance uses UDP. The company wants to migrate the service to AWS and provide a high level of security. A solutions architect needs to design a solution for the player-matching service using AWS.<br>Which combination of steps should the solutions architect take to meet these requirements? (Choose three.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: ADF</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#642",
          answers: [
            {
              choice:
                "<p>A.  Use a Network Load Balancer (NLB) in front of the player-matching instance. Use a friendly DNS entry in Amazon Route 53 pointing to the NLB's Elastic IP address.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use an Application Load Balancer (ALB) in front of the player-matching instance. Use a friendly DNS entry in Amazon Route 53 pointing to the ALB's internet- facing fully qualified domain name (FQDN).</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Define an AWS WAF rule to explicitly drop non-UDP traffic, and associate the rule with the load balancer.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure a network ACL rule to block all non-UDP traffic. Associate the network ACL with the subnets that hold the load balancer instances.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Use Amazon CloudFront with an Elastic Load Balancer as an origin.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Enable AWS Shield Advanced on all public-facing resources.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#643",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has multiple AWS accounts and manages these accounts which AWS Organizations. A developer was given IAM user credentials to access AWS resources. The developer should have read-only access to all Amazon S3 buckets in the account. However, when the developer tries to access the S3 buckets from the console, they receive an access denied error message with no bucket listed.<br>A solution architect reviews the permissions and finds that the developer's IAM user is listed as having read-only access to all S3 buckets in the account.<br>Which additional steps should the solutions architect take to troubleshoot the issue? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: CD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#643",
          answers: [
            {
              choice:
                "<p>A.  Check the bucket policies for all S3 buckets.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice: "<p>B.  Check the ACLs for all S3 buckets.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Check the SCPs set at the organizational units (OUs).</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Check for the permissions boundaries set for the IAM user.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Check if an appropriate IAM role is attached to the IAM user.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#644",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is planning to migrate its business-critical applications from an on-premises data center to AWS. The company has an on-premises installation of a<br>Microsoft SQL Server Always On cluster. The company wants to migrate to an AWS managed database service. A solutions architect must design a heterogeneous database migration on AWS.<br>Which solution will meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#644",
          answers: [
            {
              choice:
                "<p>A.  Migrate the SQL Server databases to Amazon RDS for MySQL by using backup and restore utilities.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use an AWS Snowball Edge Storage Optimized device to transfer data to Amazon S3. Set up Amazon RDS for MySQL. Use S3 integration with SQL Server features, such as BULK INSERT.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use the AWS Schema Conversion Tool to translate the database schema to Amazon RDS for MeSQL. Then use AWS Database Migration Service (AWS DMS) to migrate the data from on-premises databases to Amazon RDS.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use AWS DataSync to migrate data over the network between on-premises storage and Amazon S3. Set up Amazon RDS for MySQL. Use S3 integration with SQL Server features, such as BULK INSERT.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#645",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has an application that generates reports and stores them in an Amazon bucket Amazon S3 bucket. When a user accesses their report, the application generates a signed URL to allow the user to download the report. The company's security team has discovered that the files are public and that anyone can download them without authentication. The company has suspended the generation of new reports until the problem is resolved.<br>Which set of action will immediately remediate the security issue without impacting the application's normal workflow?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#645",
          answers: [
            {
              choice:
                "<p>A.  Create an AWS Lambda function that applies all policy for users who are not authenticated. Create a scheduled event to invoke the Lambda function.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Review the AWS Trusted advisor bucket permissions check and implement the recommend actions.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Run a script that puts a Private ACL on all of the object in the bucket.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use the Block Public Access feature in Amazon S3 to set the IgnorePublicAcis option to TRUE on the bucket.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#646",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company hosts a legacy application that runs on an Amazon EC2 instance inside a VPC without internet access. Users access the application with a desktop program installed on their corporate laptops. Communication between the laptops and the VPC flows through AWS Direct Connect (DX). A new requirement states that all data in transit must be encrypted between users and the VPC.<br>Which strategy should a solutions architect use to maintain consistent network performance while meeting this new requirement?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#646",
          answers: [
            {
              choice:
                "<p>A.  Create a client VPN endpoint and configure the laptops to use an AWS client VPN to connect to the VPC over the internet.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a new public virtual interface for the existing DX connection, and create a new VPN that connects to the VPC over the DX public virtual interface.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a new Site-to-Site VPN that connects to the VPC over the internet.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a new private virtual interface for the existing DX connection, and create a new VPN that connects to the VPC over the DX private virtual interface.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#647",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is creating a centralized logging service running on Amazon EC2 that will receive and analyze logs from hundreds of AWS accounts. AWS PrivateLink is being used to provide connectivity between the client services and the logging service.<br>In each AWS account with a client, an interface endpoint has been created for the logging service and is available. The logging service running on EC2 instances with a Network Load Balancer (NLB) are deployed in different subnets. The clients are unable to submit logs using the VPC endpoint.<br>Which combination of steps should a solutions architect take to resolve this issue? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#647",
          answers: [
            {
              choice:
                "<p>A.  Check that the NACL is attached to the logging service subnet to allow communications to and from the NLB subnets. Check that the NACL is attached to the NLB subnet to allow communications to and from the logging service subnets running on EC2 instances.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Check that the NACL is attached to the logging service subnets to allow communications to and from the interface endpoint subnets. Check that the NACL is attached to the interface endpoint subnet to allow communications to and from the logging service subnets running on EC2 instances.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Check the security group for the logging service running on the EC2 instances to ensure it allows ingress from the NLB subnets.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Check the security group for the logging service running on the EC2 instances to ensure it allows ingress from the clients.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Check the security group for the NLB to ensure it allows ingress from the interface endpoint subnets.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#648",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is refactoring an existing web service that provides read and write access to structured data. The service must respond to short but significant spikes in the system load. The service must be fault tolerant across multiple AWS Regions.<br>Which actions should be taken to meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#648",
          answers: [
            {
              choice:
                "<p>A.  Store the data in Amazon DocumentDB.  Create a single global Amazon CloudFront distribution with a custom origin built on edge-optimized Amazon API Gateway and AWS Lambda. Assign the company's domain as an alternate domain for the distribution, and configure Amazon Route 53 with an alias to the CloudFront distribution.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Store the data in replicated Amazon S3 buckets in two Regions. Create an Amazon CloudFront distribution in each Region, with custom origins built on Amazon API Gateway and AWS Lambda launched in each Region. Assign the company's domain as an alternate domain for both distributions, and configure Amazon Route 53 with a failover routing policy between them.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Store the data in an Amazon DynamoDB global table in two Regions using on-demand capacity mode. In both Regions, run the web service as Amazon ECS Fargate tasks in an Auto Scaling ECS service behind an Application Load Balancer (ALB). In Amazon Route 53, configure an alias record in the company's domain and a Route 53 latency-based routing policy with health checks to distribute traffic between the two ALBs.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Store the data in Amazon Aurora global databases. Add Auto Scaling replicas to both Regions. Run the web service on Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer in each Region. Configure the instances to download the web service code in the user data. In Amazon Route 53, configure an alias record for the company's domain and a multi-value routing policy</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#649",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company plans to migrate to AWS. A solutions architect uses AWS Application Discovery Service over the fleet and discovers that there is an Oracle data warehouse and several PostgreSQL databases.<br>Which combination of migration patterns will reduce licensing costs and operational overhead? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#649",
          answers: [
            {
              choice:
                "<p>A.  Lift and shift the Oracle data warehouse to Amazon EC2 using AWS DMS.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Migrate the Oracle data warehouse to Amazon Redshift using AWS SCT and AWS DMS</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Lift and shift the PostgreSQL databases to Amazon EC2 using AWS DMS.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Migrate the PostgreSQL databases to Amazon RDS for PostgreSQL using AWS DMS.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Migrate the Oracle data warehouse to an Amazon EMR managed cluster using AWS DMS.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#650",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect needs to define a reference architecture for a solution for three-tier applications with web, application, and NoSQL data layers. The reference architecture must meet the following requirements:<br>✑ High availability within an AWS Region<br>✑ Able to fail over in 1 minute to another AWS Region for disaster recovery<br>✑ Provide the most efficient solution while minimizing the impact on the user experience<br>Which combination of steps will meet these requirements? (Choose three.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BCE</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#650",
          answers: [
            {
              choice:
                "<p>A.  Use an Amazon Route 53 weighted routing policy set to 100/0 across the two selected Regions. Set Time to Live (TTL) to 1 hour.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use an Amazon Route 53 failover routing policy for failover from the primary Region to the disaster recovery Region. Set Time to Live (TTL) to 30 seconds.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use a global table within Amazon DynamoDB so data can be accessed in the two selected Regions.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Back up data from an Amazon DynamoDB table in the primary Region every 60 minutes and then write the data to Amazon S3. Use S3 cross-Region replication to copy the data from the primary Region to the disaster recovery Region. Have a script import the data into DynamoDB in a disaster recovery scenario.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Implement a hot standby model using Auto Scaling groups for the web and application layers across multiple Availability Zones in the Regions. Use zonal Reserved Instances for the minimum number of servers and On-Demand Instances for any additional resources.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Use Auto Scaling groups for the web and application layers across multiple Availability Zones in the Regions. Use Spot Instances for the required resources.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#651",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has a Microsoft SQL Server database in its data center and plans to migrate data to Amazon Aurora MySQL. The company has already used the AWS<br>Schema Conversion Tool to migrate triggers, stored procedures and other schema objects to Aurora MySQL. The database contains 1 TB of data and grows less than 1 MB per day. The company's data center is connected to AWS through a dedicated 1Gbps AWS Direct Connect connection.<br>The company would like to migrate data to Aurora MySQL and perform reconfigurations with minimal downtime to the applications.<br>Which solution meets the company's requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#651",
          answers: [
            {
              choice:
                "<p>A.  Shut down applications over the weekend. Create an AWS DMS replication instance and task to migrate existing data from SQL Server to Aurora MySQL. Perform application testing and migrate the data to the new database endpoint.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an AWS DMS replication instance and task to migrate existing data and ongoing replication from SQL Server to Aurora MySQL. Perform application testing and migrate the data to the new database endpoint.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a database snapshot of SQL Server on Amazon S3. Restore the database snapshot from Amazon S3 to Aurora MySQL. Create an AWS DMS replication instance and task for ongoing replication from SQL Server to Aurora MySQL. Perform application testing and migrate the data to the new database endpoint.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a SQL Server native backup file on Amazon S3. Create an AWS DMS replication instance and task to restore the SQL Server backup file to Aurora MySQL. Create another AWS DMS task for ongoing replication from SQL Server to Aurora MySQL. Perform application testing and migrate the data to the new database endpoint.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#652",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company runs an application on a fleet of Amazon EC2 instances. The application requires low latency and random access to 100 GB of data. The application must be able to access the data at up to 3.000 IOPS. A Development team has configured the EC2 launch template to provision a 100-GB Provisioned IOPS<br>(PIOPS) Amazon EBS volume with 3 000 IOPS provisioned. A Solutions Architect is tasked with lowering costs without impacting performance and durability.<br>Which action should be taken?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#652",
          answers: [
            {
              choice:
                "<p>A.  Create an Amazon EFS file system with the performance mode set to Max I/O. Configure the EC2 operating system to mount the EFS file system.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an Amazon EFS file system with the throughput mode set to Provisioned. Configure the EC2 operating system to mount the EFS file system.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Update the EC2 launch template to allocate a new 1-TB EBS General Purpose SSO (gp2) volume.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Update the EC2 launch template to exclude the PIOPS volume. Configure the application to use local instance storage.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#653",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company recently transformed its legacy infrastructure provisioning scripts to AWS CloudFormation templates. The newly developed templates are hosted in the company's private GitHub repository. Since adopting CloudFormation, the company has encountered several issues with updates to the CloudFormation templates, causing execution or creating environment. Management is concerned by the increase in errors and has asked a Solutions Architect to design the automated testing of CloudFormation template updates.<br>What should the Solution Architect do to meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#653",
          answers: [
            {
              choice:
                "<p>A.  Use AWS CodePipeline to create a change set from the CloudFormation templates stored in the private GitHub repository. Execute the change set using AWS CodeDeploy. Include a CodePipeline action to test the deployment with testing scripts run by AWS CodeBuild.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Mirror the GitHub repository to AWS CodeCommit using AWS Lambda. Use AWS CodeDeploy to create a change set from the CloudFormation templates and execute it. Have CodeDeploy test the deployment with testing scripts run by AWS CodeBuild.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use AWS CodePipeline to create and execute a change set from the CloudFormation templates stored in the GitHub repository. Configure a CodePipeline action to be deployment with testing scripts run by AWS CodeBuild.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Mirror the GitHub repository to AWS CodeCommit using AWS Lambda. Use AWS CodeBuild to create a change set from the CloudFormation templates and execute it. Have CodeBuild test the deployment with testing scripts.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#654",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has several Amazon EC2 instances to both public and private subnets within a VPC that is not connected to the corporate network. A security group associated with the EC2 instances allows the company to use the Windows remote desktop protocol (RDP) over the internet to access the instances. The security team has noticed connection attempts from unknown sources. The company wants to implement a more secure solution to access the EC2 instances.<br>Which strategy should a solutions architect implement?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#654",
          answers: [
            {
              choice:
                "<p>A.  Deploy a Linux bastion host on the corporate network that has access to all instances in the VPC. </p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Deploy AWS Systems Manager Agent on the EC2 instances. Access the EC2 instances using Session Manager restricting access to users with permission.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Deploy a Linux bastion host with an Elastic IP address in the public subnet. Allow access to the bastion host from 0.0.0.0/0.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Establish a Site-to-Site VPN connecting the corporate network to the VPC.  Update the security groups to allow access from the corporate network only.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#655",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A retail company has a custom .NET web application running on AWS that uses Microsoft SQL Server for the database. The application servers maintain a user's session locally.<br>Which combination of architecture changes are needed to ensure all tiers of the solution are highly available? (Choose three.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: ACE</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#655",
          answers: [
            {
              choice:
                "<p>A.  Refactor the application to store the user's session in Amazon ElastiCache. Use Application Load Balancers to distribute the load between application instances.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Set up the database to generate hourly snapshots using Amazon EBS. Configure an Amazon CloudWatch Events rule to launch a new database instance if the primary one fails.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Migrate the database to Amazon RDS for SQL Server. Configure the RDS instance to use a Multi-AZ deployment.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Move the .NET content to an Amazon S3 bucket. Configure the bucket for static website hosting.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Put the application instances in an Auto Scaling group. Configure the Auto Scaling group to create new instances if an instance becomes unhealthy.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Deploy Amazon CloudFront in front of the application tier. Configure CloudFront to serve content from healthy application instances only.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#656",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is using an existing orchestration tool to manage thousands of Amazon EC2 instances. A recent penetration test found a vulnerability in the company's software stack. This vulnerability has prompted the company to perform a full evaluation of its current production environment. The analysis determined that the following vulnerabilities exist within the environment:<br>✑ Operating systems with outdated libraries and known vulnerabilities are being used in production.<br>✑ Relational databases hosted and managed by the company are running unsupported versions with known vulnerabilities.<br>✑ Data stored in databases is not encrypted.<br>The solutions architect intends to use AWS Config to continuously audit and assess the compliance of the company's AWS resource configurations with the company's policies and guidelines.<br>What additional steps will enable the company to secure its environments and track resources while adhering to best practices?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#656",
          answers: [
            {
              choice:
                "<p>A.  Use AWS Application Discovery Service to evaluate all running EC2 instances Use the AWS CLI to modify each instance, and use EC2 user data to install the AWS Systems Manager Agent during boot. Schedule patching to run as a Systems Manager Maintenance Windows task. Migrate all relational databases to Amazon RDS and enable AWS KMS encryption.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an AWS CloudFormation template for the EC2 instances. Use EC2 user data in the CloudFormation template to install the AWS Systems Manager Agent, and enable AWS KMS encryption on all Amazon EBS volumes. Have CloudFormation replace all running instances. Use Systems Manager Patch Manager to establish a patch baseline and deploy a Systems Manager Maintenance Windows task to execute AWS-RunPatchBaseline using the patch baseline.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Install the AWS Systems Manager Agent on all existing instances using the company's current orchestration tool. Use the Systems Manager Run Command to execute a list of commands to upgrade software on each instance using operating system-specific tools. Enable AWS KMS encryption on all Amazon EBS volumes.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Install the AWS Systems Manager Agent on all existing instances using the company's current orchestration tool. Migrate all relational databases to Amazon RDS and enable AWS KMS encryption. Use Systems Manager Patch Manager to establish a patch baseline and deploy a Systems Manager Maintenance Windows task to execute AWS-RunPatchBaseline using the patch baseline.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#657",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company wants to improve cost awareness for its Amazon EMR platform. The company has allocated budgets for each team's Amazon EMR usage. When a budgetary threshold is reached, a notification should be sent by email to the budget office's distribution list. Teams should be able to view their EMR cluster expenses to date. A solutions architect needs to create a solution that ensures the policy is proactively and centrally enforced in a multi-account environment.<br>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: AD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#657",
          answers: [
            {
              choice:
                "<p>A.  Update the AWS CloudFormation template to include the AWS::Budgets::Budget::resource with the NotificationsWithSubscribers property.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Implement Amazon CloudWatch dashboards for Amazon EMR usage.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an EMR bootstrap action that runs at startup that calls the Cost Explorer API to set the budget on the cluster with the GetCostForecast and NotificationsWithSubscribers actions.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an AWS Service Catalog portfolio for each team. Add each team's Amazon EMR cluster as an AWS CloudFormation template to their Service Catalog portfolio as a Product.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Create an Amazon CloudWatch metric for billing. Create a custom alert when costs exceed the budgetary threshold.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#658",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is migrating its on-premises systems to AWS. The user environment consists of the following systems:<br>✑ Windows and Linux virtual machines running on VMware.<br>Physical servers running Red Hat Enterprise Linux.<br><img src='https://www.examtopics.com//assets/media/exam-media/04241/0043300002.png'><br>The company wants to be able to perform the following steps before migrating to AWS:<br>✑ Identify dependencies between on-premises systems.<br>✑ Group systems together into applications to build migration plans.<br>✑ Review performance data using Amazon Athena to ensure that Amazon EC2 instances are right-sized.<br>How can these requirements be met?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#658",
          answers: [
            {
              choice:
                "<p>A.  Populate the AWS Application Discovery Service import template with information from an on-premises configuration management database (CMDB). Upload the completed import template to Amazon S3, then import the data into Application Discovery Service.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Install the AWS Application Discovery Service Discovery Agent on each of the on-premises systems. Allow the Discovery Agent to collect data for a period of time.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Install the AWS Application Discovery Service Discovery Connector on each of the on-premises systems and in VMware vCenter. Allow the Discovery Connector to collect data for one week.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Install the AWS Application Discovery Service Discovery Agent on the physical on-premises servers. Install the AWS Application Discovery Service Discovery Connector in VMware vCenter. Allow the Discovery Agent to collect data for a period of time.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#659",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company hosts a web application on AWS in the us-east-1 Region. The application servers are distributed across three Availability Zones behind an Application<br>Load Balancer. The database is hosted in MySQL database on an Amazon EC2 instance. A solutions architect needs to design a cross-Region data recovery solution using AWS services with an RTO of less than 5 minutes and an RPO of less than 1 minute. The solutions architect is deploying application servers in us- west-2, and has configured Amazon Route 53 health checks and DNS failover to us-west-2.<br>Which additional step should the solutions architect take?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#659",
          answers: [
            {
              choice:
                "<p>A.  Migrate the database to an Amazon RDS for MySQL instance with a cross-Region read replica in us-west-2.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Migrate the database to an Amazon Aurora global database with the primary in us-east-1 and the secondary in us-west-2.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Migrate the database to an Amazon RDS for MySQL instance with a Multi-AZ deployment.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a MySQL standby database on an Amazon EC2 instance in us-west-2.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#660",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company wants to migrate its on-premises data center to the AWS Cloud. This includes thousands of virtualized Linux and Microsoft Windows servers, SAN storage, Java and PHP applications with MYSQL, and Oracle databases. There are many dependent services hosted either in the same data center or externally.<br>The technical documentation is incomplete and outdated. A solutions architect needs to understand the current environment and estimate the cloud resource costs after the migration.<br>Which tools or services should solutions architect use to plan the cloud migration? (Choose three.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: ADF</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#660",
          answers: [
            {
              choice: "<p>A.  AWS Application Discovery Service</p>",
              correct: true,
              feedback: "",
            },
            {
              choice: "<p>B.  AWS SMS</p>",
              correct: false,
              feedback: "",
            },
            {
              choice: "<p>C.  AWS x-Ray</p>",
              correct: false,
              feedback: "",
            },
            {
              choice: "<p>D.  AWS Cloud Adoption Readiness Tool (CART)</p>",
              correct: true,
              feedback: "",
            },
            {
              choice: "<p>E.  Amazon Inspector</p>",
              correct: false,
              feedback: "",
            },
            {
              choice: "<p>F.  AWS Migration Hub</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#661",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company decided to purchase Amazon EC2 Reserved Instances. A solutions architect is tasked with implementing a solution where only the master account in<br>AWS Organizations is able to purchase the Reserved Instances. Current and future member accounts should be blocked from purchasing Reserved Instances.<br>Which solution will meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#661",
          answers: [
            {
              choice:
                "<p>A.  Create an SCP with the Deny effect on the ec2:PurchaseReservedInstancesOffering action. Attach the SCP to the root of the organization.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a new organizational unit (OU) Move all current member accounts to the new OU. Create an SCP with the Deny effect on the ec2:PurchaseReservedInstancesOffering action. Attach the SCP to the new OU.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an AWS Config rule event that triggers automation that will terminate any Reserved Instances launched by member accounts.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create two new organizational units (OUs): OU1 and OU2. Move all member accounts to OU2 and the master account to OU1. Create an SCP with the Allow effect on the ec2:PurchaseReservedInstancesOffering action. Attach the SCP to OU1.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#662",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is using multiple AWS accounts. The DNS records are stored in a private hosted zone for Amazon Route 53 in Account A. The company's applications and databases are running in Account B.<br>A solutions architect will deploy a two-tier application in a new VPC. To simplify the configuration, the db.example.com CNAME record set for the Amazon RDS endpoint was created in a private hosted zone for Amazon Route 53.<br>During deployment, the application failed to start. Troubleshooting revealed that db.example.com is not resolvable on the Amazon EC2 instance. The solutions architect confirmed that the record set was created correctly in Route 53.<br>Which combination of steps should the solutions architect take to resolve this issue? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: CE</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#662",
          answers: [
            {
              choice:
                "<p>A.  Deploy the database on a separate EC2 instance in the new VPC.  Create a record set for the instance's private IP in the private hosted zone.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use SSH to connect to the application tier EC2 instance. Add an RDS endpoint IP address to the /etc/resolv.conf file.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an authorization to associate the private hosted zone in Account A with the new VPC in Account B. </p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a private hosted zone for the example com domain in Account B.  Configure Route 53 replication between AWS accounts.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Associate a new VPC in Account B with a hosted zone in Account A.  Delete the association authorization in Account A. </p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#663",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect needs to advise a company on how to migrate its on-premises data processing application to the AWS Cloud. Currently, users upload input files through a web portal. The web server then stores the uploaded files on NAS and messages the processing server over a message queue. Each media file can take up to 1 hour to process. The company has determined that the number of media files awaiting processing is significantly higher during business hours, with the number of files rapidly declining after business hours.<br>What is the MOST cost-effective migration recommendation?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#663",
          answers: [
            {
              choice:
                "<p>A.  Create a queue using Amazon SQS. Configure the existing web server to publish to the new queue. When there are messages in the queue, invoke an AWS Lambda function to pull requests from the queue and process the files. Store the processed files in an Amazon S3 bucket.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a queue using Amazon MQ. Configure the existing web server to publish to the new queue. When there are messages in the queue, create a new Amazon EC2 instance to pull requests from the queue and process the files. Store the processed files in Amazon EFS. Shut down the EC2 instance after the task is complete.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a queue using Amazon MQ. Configure the existing web server to publish to the new queue. When there are messages in the queue, invoke an AWS Lambda function to pull requests from the queue and process the files. Store the processed files in Amazon EFS.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a queue using Amazon SQS. Configure the existing web server to publish to the new queue. Use Amazon EC2 instances in an EC2 Auto Seating group to pull requests from the queue and process the files. Scale the EC2 instances based on the SQS queue length. Store the processed files in an Amazon S3 bucket.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#664",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has a media catalog with metadata for each item in the catalog. Different types of metadata are extracted from the media items by an application running on AWS Lambda. Metadata is extracted according to a number of rules with the output stored in an Amazon ElastiCache for Redis cluster. The extraction process is done in batches and takes around 40 minutes to complete.<br>The update process is triggered manually whenever the metadata extraction rules change.<br>The company wants to reduce the amount of time it takes to extract metadata from its media catalog. To achieve this, a solutions architect has split the single metadata extraction Lambda function into a Lambda function for each type of metadata.<br>Which additional steps should the solutions architect take to meet the requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#664",
          answers: [
            {
              choice:
                "<p>A.  Create an AWS Step Functions workflow to run the Lambda functions in parallel. Create another Step Functions workflow that retrieves a list of media items and executes a metadata extraction workflow for each one.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an AWS Batch compute environment for each Lambda function. Configure an AWS Batch job queue for the compute environment. Create a Lambda function to retrieve a list of media items and write each item to the job queue.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an AWS Step Functions workflow to run the Lambda functions in parallel. Create a Lambda function to retrieve a list of media items and write each item to an Amazon SQS queue. Configure the SQS queue as an input to the Step Functions workflow.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a Lambda function to retrieve a list of media items and write each item to an Amazon SQS queue. Subscribe the metadata extraction Lambda functions to the SQS queue with a large batch size.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#665",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A utility company wants to collect usage data every 5 minutes from its smart meters to facilitate time-of-use metering. When a meter sends data to AWS, the data is sent to Amazon API Gateway, processed by an AWS Lambda function and stored in an Amazon DynamoDB table. During the pilot phase, the Lambda functions took from 3 to 5 seconds to complete.<br>As more smart meters are deployed, the Engineers notice the Lambda functions are taking from 1 to 2 minutes to complete. The functions are also increasing in duration as new types of metrics are collected from the devices. There are many ProvisionedThroughputExceededException errors while performing PUT operations on DynamoDB, and there are also many TooManyRequestsException errors from Lambda.<br>Which combination of changes will resolve these issues? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: AD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#665",
          answers: [
            {
              choice:
                "<p>A.  Increase the write capacity units to the DynamoDB table.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Increase the memory available to the Lambda functions.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Increase the payload size from the smart meters to send more data.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Stream the data into an Amazon Kinesis data stream from API Gateway and process the data in batches.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Collect data in an Amazon SQS FIFO queue, which triggers a Lambda function to process each message.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#666",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>An ecommerce company has an order processing application it wants to migrate to AWS. The application has inconsistent data volume patterns, but needs to be avail at all times. Orders must be processed as they occur and in the order that they are received.<br>Which set of steps should a solutions architect take to meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#666",
          answers: [
            {
              choice:
                "<p>A.  Use AWS Transfer for SFTP and upload orders as they occur. Use On-Demand Instances in multiple Availability Zones for processing.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use Amazon SNS with FIFO and send orders as they occur. Use a single large Reserved Instance for processing.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use Amazon SQS with FIFO and send orders as they occur. Use Reserved Instances in multiple Availability Zones for processing.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use Amazon SQS with FIFO and send orders as they occur. Use Spot Instances in multiple Availability Zones for processing.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#667",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>An AWS partner company is building a service in AWS Organizations using its organization named org1. This service requires the partner company to have access to AWS resources in a customer account, which is in a separate organization named org2. The company must establish least privilege security access using an API or command line tool to the customer account.<br>What is the MOST secure way to allow org1 to access resources in org2?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#667",
          answers: [
            {
              choice:
                "<p>A.  The customer should provide the partner company with their AWS account access keys to log in and perform the required tasks.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  The customer should create an IAM user and assign the required permissions to the IAM user. The customer should then provide the credentials to the partner company to log in and perform the required tasks.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  The customer should create an IAM role and assign the required permissions to the IAM role. The partner company should then use the IAM role's Amazon Resource Name (ARN) when requesting access to perform the required tasks.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  The customer should create an IAM role and assign the required permissions to the IAM role. The partner company should then use the IAM role's Amazon Resource Name (ARN), including the external ID in the IAM role's trust policy, when requesting access to perform the required tasks.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#668",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>An enterprise company is building an infrastructure services platform for its users. The company has the following requirements:<br>✑ Provide least privilege access to users when launching AWS infrastructure so users cannot provision unapproved services.<br>✑ Use a central account to manage the creation of infrastructure services.<br>✑ Provide the ability to distribute infrastructure services to multiple accounts in AWS Organizations.<br>Provide the ability to enforce tags on any infrastructure that is started by users.<br><img src='https://www.examtopics.com//assets/media/exam-media/04241/0043900004.png'><br>Which combination of actions using AWS services will meet these requirements? (Choose three.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BDE</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#668",
          answers: [
            {
              choice:
                "<p>A.  Develop infrastructure services using AWS Cloud Formation templates. Add the templates to a central Amazon S3 bucket and add the-IAM roles or users that require access to the S3 bucket policy.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Develop infrastructure services using AWS Cloud Formation templates. Upload each template as an AWS Service Catalog product to portfolios created in a central AWS account. Share these portfolios with the Organizations structure created for the company.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Allow user IAM roles to have AWSCloudFormationFullAccess and AmazonS3ReadOnlyAccess permissions. Add an Organizations SCP at the AWS account root user level to deny all services except AWS CloudFormation and Amazon S3.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Allow user IAM roles to have ServiceCatalogEndUserAccess permissions only. Use an automation script to import the central portfolios to local AWS accounts, copy the TagOption assign users access and apply launch constraints.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Use the AWS Service Catalog TagOption Library to maintain a list of tags required by the company. Apply the TagOption to AWS Service Catalog products or portfolios.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Use the AWS CloudFormation Resource Tags property to enforce the application of tags to any CloudFormation templates that will be created for users.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#669",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A Solutions Architect is building a solution for updating user metadata that is initiated by web servers. The solution needs to rapidly scale from hundreds to tens of thousands of jobs in less than 30 seconds. The solution must be asynchronous always avertable and minimize costs.<br>Which strategies should the Solutions Architect use to meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#669",
          answers: [
            {
              choice:
                "<p>A.  Create an AWS SWF worker that will update user metadata updating web application to start a new workflow for every job.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an AWS Lambda function that will update user metadata. Create an Amazon SOS queue and configure it as an event source for the Lambda function. Update the web application to send jobs to the queue.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an AWS Lambda function that will update user metadata. Create AWS Step Functions that will trigger the Lambda function. Update the web application to initiate Step Functions for every job.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an Amazon SQS queue. Create an AMI with a worker to check the queue and update user metadata. Configure an Amazon EC2 Auto Scaling group with the new AMI. Update the web application to send jobs to the queue.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#670",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company's main intranet page has experienced degraded response times as its user base has increased although there are no reports of users seeing error pages. The application uses Amazon DynamoDB in read-only mode.<br>Amazon DynamoDB latency metrics for successful requests have been in a steady state even during times when users have reported degradation. The<br>Development team has correlated the issue to ProvisionedThrough put Exceeded exceptions in the application logs when doing Scan and read operations The team also identified an access pattern of steady spikes of read activity on a distributed set of individual data items.<br>The Chief Technology Officer wants to improve the user experience.<br>Which solutions will meet these requirements with the LEAST amount of changes to the application? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#670",
          answers: [
            {
              choice:
                "<p>A.  Change the data model of the DynamoDB tables to ensure that all Scan and read operations meet DynamoDB best practices of uniform data access, reaching the full request throughput provisioned for the DynamoDB tables.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Enable DynamoDB Auto Scaling to manage the throughput capacity as table traffic increases. Set the upper and lower limits to control costs and set a target utilization given the peak usage and how quickly the traffic changes.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Provision Amazon ElastiCache for Redis with cluster mode enabled. The cluster should be provisioned with enough shards to spread the application load and provision at least one read replica node for each shard.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Implement the DynamoDB Accelerator (DAX) client and provision a DAX cluster with the appropriate node types to sustain the application load. Tune the item and query cache configuration for an optimal user experience.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Remove error retries and exponential backoffs in the application code to handle throttling errors.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#671",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect has implemented a SAML 2.0 federated identity solution with their company's on-premises identity provider (IdP) to authenticate users' access to the AWS environment. When the solutions architect tests authentication through the federated identity web portal, access to the AWS environment is granted. However, when test users attempt to authenticate through the federated identity web portal, they are not able to access the AWS environment.<br>Which items should the solutions architect check to ensure identity federation is properly configured? (Choose three.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BDF</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#671",
          answers: [
            {
              choice:
                "<p>A.  The IAM user's permissions policy has allowed the use of SAML federation for that user.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  The IAM roles created for the federated users' or federated groups' trust policy have set the SAML provider as the principal.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Test users are not in the AWSFederatedUsers group in the company's IdR.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  The web portal calls the AWS STS AssumeRoleWithSAML API with the ARN of the SAML provider, the ARN of the IAM role, and the SAML assertion from IdR.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  The on-premises IdP's DNS hostname is reachable from the AWS environment VPCs.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>F.  The company's IdP defines SAML assertions that properly map users or groups in the company to IAM roles with appropriate permissions.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#672",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company's security compliance requirements state that all Amazon EC2 images must be scanned for vulnerabilities and must pass a CVE assessment. A solutions architect is developing a mechanism to create security- approved AMIs that can be used by developers. Any new AMIs should go through an automated assessment process and be marked as approved before developers can use them. The approved images must be scanned every 30 days to ensure compliance.<br>Which combination of steps should the solutions architect take to meet these requirements while following best practices? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BC</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#672",
          answers: [
            {
              choice:
                "<p>A.  Use the AWS Systems Manager EC2 agent to run the CVE assessment on the EC2 instances launched from the AMIs that need to be scanned.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS Lambda to write automatic approval rules. Store the approved AMI list in AWS Systems Manager Parameter Store. Use Amazon EventBridge to trigger an AWS Systems Manager Automation document on all EC2 instances every 30 days.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use Amazon Inspector to run the CVE assessment on the EC2 instances launched from the AMIs that need to be scanned.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use AWS Lambda to write automatic approval rules. Store the approved AMI list in AWS Systems Manager Parameter Store. Use a managed AWS Config rule for continuous scanning on all EC2 instances, and use AWS Systems Manager Automation documents for remediation.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Use AWS CloudTrail to run the CVE assessment on the EC2 instances launched from the AMIs that need to be scanned.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#673",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company uses AWS Organizations with a single OU named Production to manage multiple accounts. All accounts are members of the Production OU.<br>Administrators use deny list SCPs in the root of the organization to manage access to restricted services.<br>The company recently acquired a new business unit and invited the new unit's existing AWS account to the organization. Once onboarded, the administrators of the new business unit discovered that they are not able to update existing AWS Config rules to meet the company's policies.<br>Which option will allow administrators to make changes and continue to enforce the current policies without introducing additional long-term maintenance?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#673",
          answers: [
            {
              choice:
                "<p>A.  Remove the organization's root SCPs that limit access to AWS Config. Create AWS Service Catalog products for the company's standard AWS Config rules and deploy them throughout the organization, including the new account.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a temporary OU named Onboarding for the new account. Apply an SCP to the Onboarding OU to allow AWS Config actions. Move the new account to the Production OU when adjustments to AWS Config are complete.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Convert the organization's root SCPs from deny list SCPs to allow list SCPs to allow the required services only. Temporally apply an SCP to the organization's root that allows AWS Config actions for principals only in the new account.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a temporary OU named Onboarding for the new account. Apply an SCP to the Onboarding OU to allow AWS Config actions. Move the organization's root SCP to the Production OU. Move the new account to the Production OU when adjustments to AWS Config are complete.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#674",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is launching a web-based application in multiple regions around the world. The application consists of both static content stored in a private Amazon<br>S3 bucket and dynamic content hosted in Amazon ECS containers content behind an Application Load Balancer (ALB). The company requires that the static and dynamic application content be accessible through Amazon CloudFront only.<br>Which combination of steps should a solutions architect recommend to restrict direct content access to CloudFront? (Choose three.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: ACF</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#674",
          answers: [
            {
              choice:
                "<p>A.  Create a web ACL in AWS WAF with a rule to validate the presence of a custom header and associate the web ACL with the ALB. </p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a web ACL in AWS WAF with a rule to validate the presence of a custom header and associate the web ACL with the CloudFront distribution.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure CloudFront to add a custom header to origin requests.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure the ALB to add a custom header to HTTP requests.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Update the S3 bucket ACL to allow access from the CloudFront distribution only.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Create a CloudFront Origin Access Identity (OAI) and add it to the CloudFront distribution. Update the S3 bucket policy to allow access to the OAI only.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#675",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has multiple lines of business (LOBs) that roll up to the parent company. The company has asked its solutions architect to develop a solution with the following requirements:<br>✑ Produce a single AWS invoice for all of the AWS accounts used by its LOBs.<br>✑ The costs for each LOB account should be broken out on the invoice.<br>✑ Provide the ability to restrict services and features in the LOB accounts, as defined by the company's governance policy.<br>✑ Each LOB account should be delegated full administrator permissions, regardless of the governance policy.<br>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#675",
          answers: [
            {
              choice:
                "<p>A.  Use AWS Organizations to create an organization in the parent account for each LOB.  Then, invite each LOB account to the appropriate organization.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS Organizations to create a single organization in the parent account. Then, invite each LOB's AWS account to pin the organization.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Implement service quotas to define the services and features that are permitted and apply the quotas to each LOB as appropriate.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an SCP that allows only approved services and features, then apply the policy to the LOB accounts. Enable consolidated billing in the parent account's billing console and link the LOB accounts.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#676",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>An ecommerce website running on AWS uses an Amazon RDS for MySQL DB instance with General Purpose SSD storage. The developers chose an appropriate instance type based on demand, and configured 100 GB of storage with a sufficient amount of free space.<br>The website was running smoothly for a few weeks until a marketing campaign launched. On the second day of the campaign, users reported long wait times and time outs. Amazon CloudWatch metrics indicated that both reads and writes to the DB instance were experiencing long response times. The CloudWatch metrics show 40% to 50% CPU and memory utilization, and sufficient free storage space is still available. The application server logs show no evidence of database connectivity issues.<br>What could be the root cause of the issue with the marketing campaign?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#676",
          answers: [
            {
              choice:
                "<p>A.  It exhausted the I/O credit balance due to provisioning low disk storage during the setup phase.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  It caused the data in the tables to change frequently, requiring indexes to be rebuilt to optimize queries.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  It exhausted the maximum number of allowed connections to the database instance.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  It exhausted the network bandwidth available to the RDS for MySQL DB instance.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#677",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect has been assigned to migrate a 50 TB Oracle data warehouse that contains sales data from on-premises to Amazon Redshift. Major updates to the sales data occur on the final calendar day of the month. For the remainder of the month, the data warehouse only receives minor daily updates and is primarily used for reading and reporting. Because of this, the migration process must start on the first day of the month and must be complete before the next set of updates occur. This provides approximately 30 days to complete the migration and ensure that the minor daily changes have been synchronized with the<br>Amazon Redshift data warehouse. Because the migration cannot impact normal business network operations, the bandwidth allocated to the migration for moving data over the internet is 50 Mbps. The company wants to keep data migration costs low.<br>Which steps will allow the solutions architect to perform the migration within the specified timeline?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#677",
          answers: [
            {
              choice:
                "<p>A.  Install Oracle database software on an Amazon EC2 instance. Configure VPN connectivity between AWS and the company's data center. Configure the Oracle database running on Amazon EC2 to join the Oracle Real Application Clusters (RAC). When the Oracle database on Amazon EC2 finishes synchronizing, create an AWS DMS ongoing replication task to migrate the data from the Oracle database on Amazon EC2 to Amazon Redshift. Verify the data migration is complete and perform the cut over to Amazon Redshift.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an AWS Snowball import job. Export a backup of the Oracle data warehouse. Copy the exported data to the Snowball device. Return the Snowball device to AWS. Create an Amazon RDS for Oracle database and restore the backup file to that RDS instance. Create an AWS DMS task to migrate the data from the RDS for Oracle database to Amazon Redshift. Copy daily incremental backups from Oracle in the data center to the RDS for Oracle database over the internet. Verify the data migration is complete and perform the cut over to Amazon Redshift.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Install Oracle database software on an Amazon EC2 instance. To minimize the migration time, configure VPN connectivity between AWS and the company's data center by provisioning a 1 Gbps AWS Direct Connect connection. Configure the Oracle database running on Amazon EC2 to be a read replica of the data center Oracle database. Start the synchronization process between the company's on-premises data center and the Oracle database on Amazon EC2. When the Oracle database on Amazon EC2 is synchronized with the on-premises database, create an AWS DMS ongoing replication task to migrate the data from the Oracle database read replica that is running on Amazon EC2 to Amazon Redshift. Verify the data migration is complete and perform the cut over to Amazon Redshift.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an AWS Snowball import job. Configure a server in the company's data center with an extraction agent. Use AWS SCT to manage the extraction agent and convert the Oracle schema to an Amazon Redshift schema. Create a new project in AWS SCT using the registered data extraction agent. Create a local task and an AWS DMS task in AWS SCT with replication of ongoing changes. Copy data to the Snowball device and return the Snowball device to AWS. Allow AWS DMS to copy data from Amazon S3 to Amazon Redshift. Verify that the data migration is complete and perform the cut over to Amazon Redshift.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#678",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect is designing a disaster recovery strategy for a three-tier application. The application has an RTO of 30 minutes and an RPO of 5 minutes for the data tier. The application and web tiers are stateless and leverage a fleet of Amazon EC2 instances. The data tier consists of a 50 TB Amazon Aurora database.<br>Which combination of steps satisfies the RTO and RPO requirements while optimizing costs? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#678",
          answers: [
            {
              choice:
                "<p>A.  Create daily snapshots of the EC2 instances and replicate the snapshots to another Region.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Deploy a hot standby of the application to another Region.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create snapshots of the Aurora database every 5 minutes.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a cross-Region Aurora Replica of the database.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Create an AWS Backup job to replicate data to another Region.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#679",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has a primary Amazon S3 bucket that receives thousands of objects every day. The company needs to replicate these objects into several other S3 buckets from various AWS accounts. A solutions architect is designing a new AWS Lambda function that is triggered when an object is created in the main bucket and replicates the object into the target buckets. The objects do not need to be replicated in real time. There is concern that this function may impact other critical<br>Lambda functions due to Lambda's regional concurrency limit.<br>How can the solutions architect ensure this new Lambda function will not impact other critical Lambda functions?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#679",
          answers: [
            {
              choice:
                "<p>A.  Set the new Lambda function reserved concurrency limit to ensure the executions do not impact other critical Lambda functions. Monitor existing critical Lambda functions with Amazon CloudWatch alarms for the Throttles Lambda metric.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Increase the execution timeout of the new Lambda function to 5 minutes. Monitor existing critical Lambda functions with Amazon CloudWatch alarms for the Throttles Lambda metric.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure S3 event notifications to add events to an Amazon SQS queue in a separate account. Create the new Lambda function in the same account as the SQS queue and trigger the function when a message arrives in the queue.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Ensure the new Lambda function implements an exponential backoff algorithm. Monitor existing critical Lambda functions with Amazon CloudWatch alarms for the Throttles Lambda metric.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#680",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company wants to run a serverless application on AWS. The company plans to provision its application in Docker containers running in an Amazon ECS cluster.<br>The application requires a MySQL database and the company plans to use Amazon RDS. The company has documents that need to be accessed frequently for the first 3 months, and rarely after that. The document must be retained for 7 years.<br>What is the MOST cost-effective solution to meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#680",
          answers: [
            {
              choice:
                "<p>A.  Create an ECS cluster using On-Demand Instances. Provision the database and its read replicas in Amazon RDS using Spot Instances. Store the documents in an encrypted EBS volume, and create a cron job to delete the documents after 7 years.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an ECS cluster using a fleet of Spot Instances, with Spot Instance draining enabled. Provision the database and its read replicas in Amazon RDS using Reserved Instances. Store the documents in a secured Amazon S3 bucket with a lifecycle policy to move the documents that are older than 3 months to Amazon S3 Glacier, then delete the documents from Amazon S3 Glacier that are more than 7 years old.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an ECS cluster using On-Demand Instances. Provision the database and its read replicas in Amazon RDS using On-Demand Instances. Store the documents in Amazon EFS. Create a cron job to move the documents that are older than 3 months to Amazon S3 Glacier. Create an AWS Lambda function to delete the documents in S3 Glacier that are older than 7 years.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an ECS cluster using a fleet of Spot Instances with Spot Instance draining enabled. Provision the database and its read replicas in Amazon RDS using On-Demand Instances. Store the documents in a secured Amazon S3 bucket with a lifecycle policy to move the documents that are older than 3 months to Amazon S3 Glacier, then delete the documents in Amazon S3 Glacier after 7 years.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#681",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A financial services company receives a regular data feed from its credit card servicing partner. Approximately 5,000 records are sent every 15 minutes in plaintext, delivered over HTTPS directly into an Amazon S3 bucket with server-side encryption. This feed contains sensitive credit card primary account number<br>(PAN) data. The company needs to automatically mask the PAN before sending the data to another S3 bucket for additional internal processing. The company also needs to remove and merge specific fields, and then transform the record into JSON format. Additionally, extra feeds are likely to be added in the future, so any design needs to be easily expandable.<br>Which solutions will meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#681",
          answers: [
            {
              choice:
                "<p>A.  Trigger an AWS Lambda function on file delivery that extracts each record and writes it to an Amazon SQS queue. Trigger another Lambda function when new messages arrive in the SQS queue to process the records, writing the results to a temporary location in Amazon S3. Trigger a final Lambda function once the SQS queue is empty to transform the records into JSON format and send the results to another S3 bucket for internal processing.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Trigger an AWS Lambda function on file delivery that extracts each record and writes it to an Amazon SQS queue. Configure an AWS Fargate container application to automatically scale to a single instance when the SQS queue contains messages. Have the application process each record, and transform the record into JSON format. When the queue is empty, send the results to another S3 bucket for internal processing and scale down the AWS Fargate instance.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an AWS Glue crawler and custom classifier based on the data feed formats and build a table definition to match. Trigger an AWS Lambda function on file delivery to start an AWS Glue ETL job to transform the entire record according to the processing and transformation requirements. Define the output format as JSON. Once complete, have the ETL job send the results to another S3 bucket for internal processing.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an AWS Glue crawler and custom classifier based upon the data feed formats and build a table definition to match. Perform an Amazon Athena query on file delivery to start an Amazon EMR ETL job to transform the entire record according to the processing and transformation requirements. Define the output format as JSON. Once complete, send the results to another S3 bucket for internal processing and scale down the EMR cluster.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#682",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A media company is serving video files stored in Amazon S3 using Amazon CloudFront. The development team needs access to the logs to diagnose faults and perform service monitoring. The log files from CloudFront may contain sensitive information about users.<br>The company uses a log processing service to remove sensitive information before making the logs available to the development team. The company has the following requirements for the unprocessed logs:<br>✑ The logs must be encrypted at rest and must be accessible by the log processing service only.<br>✑ Only the data protection team can control access to the unprocessed log files.<br>✑ AWS CloudFormation templates must be stored in AWS CodeCommit.<br>✑ AWS CodePipeline must be triggered on commit to perform updates made to CloudFormation templates.<br>CloudFront is already writing the unprocessed logs to an Amazon S3 bucket, and the log processing service is operating against this S3 bucket.<br><img src='https://www.examtopics.com//assets/media/exam-media/04241/0044800005.png'><br>Which combination of steps should a solutions architect take to meet the company's requirements? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: AD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#682",
          answers: [
            {
              choice:
                "<p>A.  Create an AWS KMS key that allows the AWS Logs Delivery account to generate data keys for encryption Configure S3 default encryption to use server-side encryption with KMS managed keys (SSE-KMS) on the log storage bucket using the new KMS key. Modify the KMS key policy to allow the log processing service to perform decrypt operations.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an AWS KMS key that follows the CloudFront service role to generate data keys for encryption Configure S3 default encryption to use KMS managed keys (SSE-KMS) on the log storage bucket using the new KMS key Modify the KMS key policy to allow the log processing service to perform decrypt operations.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure S3 default encryption to use AWS KMS managed keys (SSE-KMS) on the log storage bucket using the AWS Managed S3 KMS key. Modify the KMS key policy to allow the CloudFront service role to generate data keys for encryption Modify the KMS key policy to allow the log processing service to perform decrypt operations.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a new CodeCommit repository for the AWS KMS key template. Create an IAM policy to allow commits to the new repository and attach it to the data protection team's users. Create a new CodePipeline pipeline with a custom IAM role to perform KMS key updates using CloudFormation Modify the KMS key policy to allow the CodePipeline IAM role to modify the key policy.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Use the existing CodeCommit repository for the AWS KMS key template. Create an IAM policy to allow commits to the new repository and attach it to the data protection team's users. Modify the existing CodePipeline pipeline to use a custom IAM role and to perform KMS key updates using CloudFormation. Modify the KMS key policy to allow the CodePipeline IAM role to modify the key policy.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#683",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company's service for video game recommendations has just gone viral. The company has new users from all over the world. The website for the service is hosted on a set of Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer (ALB). The website consists of static content with different resources being loaded depending on the device type.<br>Users recently reported that the load time for the website has increased. Administrators are reporting high loads on the EC2 instances that host the service.<br>Which set actions should a solutions architect take to improve response times?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#683",
          answers: [
            {
              choice:
                "<p>A.  Create separate Auto Scaling groups based on device types. Switch to Network Load Balancer (NLB). Use the User-Agent HTTP header in the NLB to route to a different set of EC2 instances.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Move content to Amazon S3. Create an Amazon CloudFront distribution to serve content out of the S3 bucket. Use Lambda@Edge to load different resources based on the User-Agent HTTP header.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a separate ALB for each device type. Create one Auto Scaling group behind each ALB.  Use Amazon Route 53 to route to different ALBs depending on the User-Agent HTTP header.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Move content to Amazon S3. Create an Amazon CloudFront distribution to serve content out of the S3 bucket. Use the User-Agent HTTP header to load different content.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#684",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is planning a large event where a promotional offer will be introduced. The company's website is hosted on AWS and backed by an Amazon RDS for<br>PostgreSQL DB instance. The website explains the promotion and includes a sign-up page that collects user information and preferences. Management expects large and unpredictable volumes of traffic periodically, which will create many database writes. A solutions architect needs to build a solution that does not change the underlying data model and ensures that submissions are not dropped before they are committed to the database.<br>Which solution meets these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#684",
          answers: [
            {
              choice:
                "<p>A.  Immediately before the event, scale up the existing DB instance to meet the anticipated demand. Then scale down after the event.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use Amazon SQS to decouple the application and database layers. Configure an AWS Lambda function to write items from the queue into the database.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Migrate to Amazon DynamoDB and manage throughput capacity with automatic scaling.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use Amazon ElastiCache for Memcached to increase write capacity to the DB instance.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#685",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A mobile app has become very popular, and usage has gone from a few hundred to millions of users. Users capture and upload images of activities within a city, and provide ratings and recommendations. Data access patterns are unpredictable. The current application is hosted on Amazon EC2 instances behind an<br>Application Load Balancer (ALB). The application is experiencing slowdowns and costs are growing rapidly.<br>Which changes should a solutions architect make to the application architecture to control costs and improve performance?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#685",
          answers: [
            {
              choice:
                "<p>A.  Create an Amazon CloudFront distribution and place the ALB behind the distribution. Store static content in Amazon S3 in an Infrequent Access storage class.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Store static content in an Amazon S3 bucket using the Intelligent Tiering storage class. Use an Amazon CloudFront distribution in front of the S3 bucket and the ALB. </p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Place AWS Global Accelerator in front of the ALB.  Migrate the static content to Amazon EFS, and then run an AWS Lambda function to resize the images during the migration process.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Move the application code to AWS Fargate containers and swap out the EC2 instances with the Fargate containers.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#686",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A financial company with multiple departments wants to expand its on-premises environment to the AWS Cloud. The company must retain centralized access control using an existing on-premises Active Directory (AD) service. Each department should be allowed to create AWS accounts with preconfigured networking and should have access to only a specific list of approved services. Departments are not permitted to have account administrator permissions.<br>What should a solutions architect do to meet these security requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#686",
          answers: [
            {
              choice:
                "<p>A.  Configure AWS Identity and Access Management (IAM) with a SAML identity provider (IdP) linked to the on-premises Active Directory, and create a role to grant access. Configure AWS Organizations with SCPs and create new member accounts. Use AWS CloudFormation templates to configure the member account networking.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Deploy an AWS Control Tower landing zone. Create an AD Connector linked to the on-premises Active Directory. Change the identity source in AWS Single Sign-On to use Active Directory. Allow department administrators to use Account Factory to create new member accounts and networking. Grant the departments AWS power user permissions on the created accounts.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Deploy an Amazon Cloud Directory. Create a two-way trust relationship with the on-premises Active Directory, and create a role to grant access. Set up an AWS Service Catalog to use AWS CloudFormation templates to create the new member accounts and networking. Use IAM roles to allow access to approved AWS services.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure AWS Directory Service for Microsoft Active Directory with AWS Single Sign-On. Join the service to the on-premises Active Directory. Use AWS CloudFormation to create new member accounts and networking. Use IAM roles to allow access to approved AWS services.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#687",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A large financial company is deploying applications that consist of Amazon EC2 and Amazon RDS instances to the AWS Cloud using AWS CloudFormation.<br>The CloudFormation stack has the following stack policy:<br><img src='https://www.examtopics.com//assets/media/exam-media/04241/0045200001.png'><br>The company wants to ensure that developers do not lose data by accidentally removing or replacing RDS instances when updating the CloudFormation stack.<br>Developers also still need to be able to modify or remove EC2 instances as needed.<br>How should the company change the stack policy to meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#687",
          answers: [
            {
              choice:
                "<p>A.  Modify the statement to specify ג€Effectג€: ג€Denyג€, ג€Actionג€:[ג€Update:*ג€] for all logical RDS resources.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Modify the statement to specify ג€Effectג€: ג€Denyג€, ג€Actionג€:[ג€Update:Deleteג€] for all logical RDS resources.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Add a second statement that specifies ג€Effectג€: ג€Denyג€, ג€Actionג€:[ג€Update:Deleteג€, ג€Update:Replaceג€] for all logical RDS resources.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Add a second statement that specifies ג€Effectג€: ג€Denyג€, ג€Actionג€:[ג€Update:*ג€] for all logical RDS resources.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#688",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is currently in the design phase of an application that will need an RPO of less than 5 minutes and an RTO of less than 10 minutes. The solutions architecture team is forecasting that the database will store approximately 10 TB of data. As part of the design, they are looking for a database solution that will provide the company with the ability to fail over to a secondary Region.<br>Which solution will meet these business requirements at the LOWEST cost?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#688",
          answers: [
            {
              choice:
                "<p>A.  Deploy an Amazon Aurora DB cluster and take snapshots of the cluster every 5 minutes. Once a snapshot is complete, copy the snapshot to a secondary Region to serve as a backup in the event of a failure.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Deploy an Amazon RDS instance with a cross-Region read replica in a secondary Region. In the event of a failure, promote the read replica to become the primary.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Deploy an Amazon Aurora DB cluster in the primary Region and another in a secondary Region. Use AWS DMS to keep the secondary Region in sync.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Deploy an Amazon RDS instance with a read replica in the same Region. In the event of a failure, promote the read replica to become the primary.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#689",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has a web application that uses Amazon API Gateway, AWS Lambda, and Amazon DynamoDB. A recent marketing campaign has increased demand.<br>Monitoring software reports that many requests have significantly longer response times than before the marketing campaign.<br>A solutions architect enabled Amazon CloudWatch Logs for API Gateway and noticed that errors are occurring on 20% of the requests. In CloudWatch, the<br>Lambda function Throttles metric represents 1% of the requests and the Errors metric represents 10% of the requests. Application logs indicate that, when errors occur, there is a call to DynamoDB.<br>What change should the solutions architect make to improve the current response times as the web application becomes more popular?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#689",
          answers: [
            {
              choice:
                "<p>A.  Increase the concurrency limit of the Lambda function</p>",
              correct: false,
              feedback: "",
            },
            {
              choice: "<p>B.  Implement DynamoDB auto scaling on the table</p>",
              correct: true,
              feedback: "",
            },
            {
              choice: "<p>C.  Increase the API Gateway throttle limit</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Re-create the DynamoDB table with a better-partitioned primary index</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#690",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A European online newspaper service hosts its public-facing WordPress site in a collocated data center in London. The current WordPress infrastructure consists of a load balancer, two web servers, and one MySQL database server. A solutions architect is tasked with designing a solution with the following requirements:<br>✑ Improve the website's performance<br>✑ Make the web tier scalable and stateless<br>✑ Improve the database server performance for read-heavy loads<br>✑ Reduce latency for users across Europe and the US<br>✑ Design the new architecture with a goal of 99.9% availability<br>Which solution meets these requirements while optimizing operational efficiency?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#690",
          answers: [
            {
              choice:
                "<p>A.  Use an Application Load Balancer (ALB) in front of an Auto Scaling group of WordPress Amazon EC2 instances in one AWS Region and three Availability Zones. Configure an Amazon ElastiCache cluster in front of a Multi-AZ Amazon Aurora MySQL DB cluster. Move the WordPress shared files to Amazon EFS. Configure Amazon CloudFront with the ALB as the origin, and select a price class that includes the US and Europe.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use an Application Load Balancer (ALB) in front of an Auto Scaling group of WordPress Amazon EC2 instances in two AWS Regions and two Availability Zones in each Region. Configure an Amazon ElastiCache cluster in front of a global Amazon Aurora MySQL database. Move the WordPress shared files to Amazon EFS. Configure Amazon CloudFront with the ALB as the origin, and select a price class that includes the US and Europe. Configure EFS cross- Region replication.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use an Application Load Balancer (ALB) in front of an Auto Scaling group of WordPress Amazon EC2 instances in one AWS Region and three Availability Zones. Configure an Amazon DocumentDB table in front of a Multi-AZ Amazon Aurora MySQL DB cluster. Move the WordPress shared files to Amazon EFS. Configure Amazon CloudFront with the ALB as the origin, and select a price class that includes all global locations.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use an Application Load Balancer (ALB) in front of an Auto Scaling group of WordPress Amazon EC2 instances in two AWS Regions and three Availability Zones in each Region. Configure an Amazon ElastiCache cluster in front of a global Amazon Aurora MySQL database. Move the WordPress shared files to Amazon FSx with cross-Region synchronization. Configure Amazon CloudFront with the ALB as the origin and a price class that includes the US and Europe.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#691",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company built an ecommerce website on AWS using a three-tier web architecture. The application is Java-based and composed of an Amazon CloudFront distribution, an Apache web server layer of Amazon EC2 instances in an Auto Scaling group, and a backend Amazon Aurora MySQL database.<br>Last month, during a promotional sales event, users reported errors and timeouts while adding items to their shopping carts. The operations team recovered the logs created by the web servers and reviewed Aurora DB cluster performance metrics. Some of the web servers were terminated before logs could be collected and the Aurora metrics were not sufficient for query performance analysis.<br>Which combination of steps must the solutions architect take to improve application performance visibility during peak traffic events? (Choose three.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: ABD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#691",
          answers: [
            {
              choice:
                "<p>A.  Configure the Aurora MySQL DB cluster to publish slow query and error logs to Amazon CloudWatch Logs.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Implement the AWS X-Ray SDK to trace incoming HTTP requests on the EC2 instances and implement tracing of SQL queries with the X-Ray SDK for Java.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure the Aurora MySQL DB cluster to stream slow query and error logs to Amazon Kinesis</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Install and configure an Amazon CloudWatch Logs agent on the EC2 instances to send the Apache logs to CloudWatch Logs.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Enable and configure AWS CloudTrail to collect and analyze application activity from Amazon EC2 and Aurora.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Enable Aurora MySQL DB cluster performance benchmarking and publish the stream to AWS X-Ray.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#692",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect has an operational workload deployed on Amazon EC2 instances in an Auto Scaling group. The VPC architecture spans two Availability<br>Zones (AZ) with a subnet in each that the Auto Scaling group is targeting. The VPC is connected to an on-premises environment and connectivity cannot be interrupted. The maximum size of the Auto Scaling group is 20 instances in service. The VPC IPv4 addressing is as follows:<br><br>VPC CIDR: 10.0.0.0/23 -<br><br>AZ1 subnet CIDR: 10.0.0.0/24 -<br><br>AZ2 subnet CIDR: 10.0.1.0/24 -<br>Since deployment, a third AZ has become available in the Region. The solutions architect wants to adopt the new AZ without adding additional IPv4 address space and without service downtime.<br>Which solution will meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#692",
          answers: [
            {
              choice:
                "<p>A.  Update the Auto Scaling group to use the AZ2 subnet only. Delete and re-create the AZ1 subnet using half the previous address space. Adjust the Auto Scaling group to also use the new AZ1 subnet. When the instances are healthy, adjust the Auto Scaling group to use the AZ1 subnet only. Remove the current AZ2 subnet. Create a new AZ2 subnet using the second half of the address space from the original AZ1 subnet. Create a new AZ3 subnet using half the original AZ2 subnet address space, then update the Auto Scaling group to target all three new subnets.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Terminate the EC2 instances in the AZ1 subnet. Delete and re-create the AZ1 subnet using half the address space. Update the Auto Scaling group to use this new subnet. Repeat this for the second AZ. Define a new subnet in AZ3, then update the Auto Scaling group to target all three new subnets.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a new VPC with the same IPv4 address space and define three subnets, with one for each AZ. Update the existing Auto Scaling group to target the new subnets in the new VPC. </p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Update the Auto Scaling group to use the AZ2 subnet only. Update the AZ1 subnet to have the previous address space. Adjust the Auto Scaling group to also use the AZ1 subnet again. When the instances are healthy, adjust the Auto Scaling group to use the AZ1 subnet only. Update the current AZ2 subnet and assign the second half of the address space from the original AZ1 subnet. Create a new AZ3 subnet using half the original AZ2 subnet address space, then update the Auto Scaling group to target all three new subnets.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#693",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is storing data on premises on a Windows file server. The company produces 5 GB of new data daily.<br>The company migrated part of its Windows-based workload to AWS and needs the data to be available on a file system in the cloud. The company already has established an AWS Direct Connect connection between the on-premises network and AWS.<br>Which data migration strategy should the company use?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#693",
          answers: [
            {
              choice:
                "<p>A.  Use the file gateway option in AWS Storage Gateway to replace the existing Windows file server, and point the existing file share to the new file gateway</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS DataSync to schedule a daily task to replicate data between the on-premises Windows file server and Amazon FSx</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use AWS Data Pipeline to schedule a daily task to replicate data between the on-premises Windows file server and Amazon Elastic File System (Amazon EFS)</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use AWS DataSync to schedule a daily task to replicate data between the on-premises Windows file server and Amazon Elastic File System (Amazon EFS)</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#694",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company uses AWS Organizations to manage one parent account and nine member accounts. The number of member accounts is expected to grow as the business grows. A security engineer has requested consolidation of AWS CloudTrail logs into the parent account for compliance purposes. Existing logs currently stored in Amazon S3 buckets in each individual member account should not be lost. Future member accounts should comply with the logging strategy.<br>Which operationally efficient solution meets these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#694",
          answers: [
            {
              choice:
                "<p>A.  Create an AWS Lambda function in each member account with a cross-account role. Trigger the Lambda functions when new CloudTrail logs are created and copy the CloudTrail logs to a centralized S3 bucket. Set up an Amazon CloudWatch alarm to alert if CloudTrail is not configured properly.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Configure CloudTrail in each member account to deliver log events to a central S3 bucket. Ensure the central S3 bucket policy allows PutObject access from the member accounts. Migrate existing logs to the central S3 bucket. Set up an Amazon CloudWatch alarm to alert if CloudTrail is not configured properly.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure an organization-level CloudTrail in the parent account to deliver log events to a central S3 bucket. Migrate the existing CloudTrail logs from each member account to the central S3 bucket. Delete the existing CloudTrail and logs in the member accounts.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure an organization-level CloudTrail in the parent account to deliver log events to a central S3 bucket. Configure CloudTrail in each member account to deliver log events to the central S3 bucket.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#695",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A weather service provides high-resolution weather maps from a web application hosted on AWS in the eu-west-1 Region. The weather maps are updated frequently and stored in Amazon S3 along with static HTML content. The web application is fronted by Amazon CloudFront.<br>The company recently expanded to serve users in the us-east-1 Region, and these new users report that viewing their respective weather maps is slow from time to time.<br>Which combination of steps will resolve the us-east-1 performance issues? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#695",
          answers: [
            {
              choice:
                "<p>A.  Configure the AWS Global Accelerator endpoint for the S3 bucket in eu-west-1. Configure endpoint groups for TCP ports 80 and 443 in us-east-1.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a new S3 bucket in us-east-1. Configure S3 cross-Region replication to synchronize from the S3 bucket in eu-west-1.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use Lambda@Edge to modify requests from North America to use the S3 Transfer Acceleration endpoint in us-east-1.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use Lambda@Edge to modify requests from North America to use the S3 bucket in us-east-1.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Configure the AWS Global Accelerator endpoint for us-east-1 as an origin on the CloudFront distribution. Use Lambda@Edge to modify requests from North America to use the new origin.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#696",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is deploying a public-facing global application on AWS using Amazon CloudFront. The application communicates with an external system. A solutions architect needs to ensure the data is secured during end-to-end transit and at rest.<br>Which combination of steps will satisfy these requirements? (Choose three.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BDE</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#696",
          answers: [
            {
              choice:
                "<p>A.  Create a public certificate for the required domain in AWS Certificate Manager and deploy it to CloudFront, an Application Load Balancer, and Amazon EC2 instances.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Acquire a public certificate from a third-party vendor and deploy it to CloudFront, an Application Load Balancer, and Amazon EC2 instances.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Provision Amazon EBS encrypted volumes using AWS KMS and ensure explicit encryption of data when writing to Amazon EBS.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Provision Amazon EBS encrypted volumes using AWS KMS.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Use SSL or encrypt data while communicating with the external system using a VPN.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Communicate with the external system using plaintext and use the VPN to encrypt the data in transit.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#697",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company provides a centralized Amazon EC2 application hosted in a single shared VPC. The centralized application must be accessible from client applications running in the VPCs of other business units. The centralized application front end is configured with a Network Load Balancer (NLB) for scalability.<br>Up to 10 business unit VPCs will need to be connected to the shared VPC. Some of the business unit VPC CIDR blocks overlap with the shared VPC, and some overlap with each other. Network connectivity to the centralized application in the shared VPC should be allowed from authorized business unit VPCs only.<br>Which network configuration should a solutions architect use to provide connectivity from the client applications in the business unit VPCs to the centralized application in the shared VPC?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#697",
          answers: [
            {
              choice:
                "<p>A.  Create an AWS Transit Gateway. Attach the shared VPC and the authorized business unit VPCs to the transit gateway. Create a single transit gateway route table and associate it with all of the attached VPCs. Allow automatic propagation of routes from the attachments into the route table. Configure VPC routing tables to send traffic to the transit gateway.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a VPC endpoint service using the centralized application NLB and enable the option to require endpoint acceptance. Create a VPC endpoint in each of the business unit VPCs using the service name of the endpoint service. Accept authorized endpoint requests from the endpoint service console.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a VPC peering connection from each business unit VPC to the shared VPC.  Accept the VPC peering connections from the shared VPC console. Configure VPC routing tables to send traffic to the VPC peering connection.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure a virtual private gateway for the shared VPC and create customer gateways for each of the authorized business unit VPCs. Establish a Site-to-Site VPN connection from the business unit VPCs to the shared VPC.  Configure VPC routing tables to send traffic to the VPN connection.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#698",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has an on-premises monitoring solution using a PostgreSQL database for persistence of events. The database is unable to scale due to heavy ingestion and it frequently runs out of storage.<br>The company wants to create a hybrid solution and has already set up a VPN connection between its network and AWS. The solution should include the following attributes:<br>✑ Managed AWS services to minimize operational complexity.<br>✑ A buffer that automatically scales to match the throughput of data and requires no ongoing administration.<br>✑ A visualization tool to create dashboards to observe events in near-real time.<br>✑ Support for semi-structured JSON data and dynamic schemas.<br>Which combination of components will enable the company to create a monitoring solution that will satisfy these requirements? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: AD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#698",
          answers: [
            {
              choice:
                "<p>A.  Use Amazon Kinesis Data Firehose to buffer events. Create an AWS Lambda function to process and transform events.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an Amazon Kinesis data stream to buffer events. Create an AWS Lambda function to process and transform events.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure an Amazon Aurora PostgreSQL DB cluster to receive events. Use Amazon QuickSight to read from the database and create near-real-time visualizations and dashboards.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure Amazon Elasticsearch Service (Amazon ES) to receive events. Use the Kibana endpoint deployed with Amazon ES to create near-real-time visualizations and dashboards.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Configure an Amazon Neptune DB instance to receive events. Use Amazon QuickSight to read from the database and create near-real-time visualizations and dashboards.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#699",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A life sciences company is using a combination of open source tools to manage data analysis workflows and Docker containers running on servers in its on- premises data center to process genomics data. Sequencing data is generated and stored on a local storage area network (SAN), and then the data is processed.<br>The research and development teams are running into capacity issues and have decided to re-architect their genomics analysis platform on AWS to scale based on workload demands and reduce the turnaround time from weeks to days.<br>The company has a high-speed AWS Direct Connect connection. Sequencers will generate around 200 GB of data for each genome, and individual jobs can take several hours to process the data with ideal compute capacity. The end result will be stored in Amazon S3. The company is expecting 10-15 job requests each day.<br>Which solution meets these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#699",
          answers: [
            {
              choice:
                "<p>A.  Use regularly scheduled AWS Snowball Edge devices to transfer the sequencing data into AWS. When AWS receives the Snowball Edge device and the data is loaded into Amazon S3, use S3 events to trigger an AWS Lambda function to process the data.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS Data Pipeline to transfer the sequencing data to Amazon S3. Use S3 events to trigger an Amazon EC2 Auto Scaling group to launch custom-AMI EC2 instances running the Docker containers to process the data.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use AWS DataSync to transfer the sequencing data to Amazon S3. Use S3 events to trigger an AWS Lambda function that starts an AWS Step Functions workflow. Store the Docker images in Amazon Elastic Container Registry (Amazon ECR) and trigger AWS Batch to run the container and process the sequencing data.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use an AWS Storage Gateway file gateway to transfer the sequencing data to Amazon S3. Use S3 events to trigger an AWS Batch job that executes on Amazon EC2 instances running the Docker containers to process the data.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
  ],
};
