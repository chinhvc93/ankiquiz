var ExamTopic_900_999 = {
  msg: "Exam Topic 900 - 999",
  data: [
    {
      question_id: "900",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has implemented a new security requirement. According to the new requirement, the company must scan all traffic from corporate AWS instances in the company's VPC for violations of the company's security policies. As a result of these scans, the company can block access to and from specific IP addresses.<br>To meet the new requirement, the company deploys a set of Amazon EC2 instances in private subnets to serve as transparent proxies. The company installs approved proxy server software on these EC2 instances. The company modifies the route tables on all subnets to use the corresponding EC2 instances with proxy software as the default route. The company also creates security groups that are compliant with the security policies and assigns these security groups to the EC2 instances.<br>Despite these configurations, the traffic of the EC2 instances in their private subnets is not being properly forwarded to the internet.<br>What should a solutions architect do to resolve this issue?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "900",
          answers: [
            {
              choice:
                "<p>A.  Disable source/destination checks on the EC2 instances that run the proxy software.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Add a rule to the security group that is assigned to the proxy EC2 instances to allow all traffic between instances that have this security group. Assign this security group to all EC2 instances in the VPC. </p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Change the VPC's DHCP options set. Set the DNS server options to point to the addresses of the proxy EC2 instances.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Assign one additional elastic network interface to each proxy EC2 instance. Ensure that one of these network interfaces has a route to the private subnets. Ensure that the other network interface has a route to the internet.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "901",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is running a web application in the AWS Cloud. The application consists of dynamic content that is created on a set of Amazon EC2 instances. The<br>EC2 instances run in an Auto Scaling group that is configured as a target group for an Application Load Balancer (ALB).<br>The company is using an Amazon CloudFront distribution to distribute the application globally. The CloudFront distribution uses the ALB as an origin. The company uses Amazon Route 53 for DNS and has created an A record of www.example.com for the CloudFront distribution.<br>A solutions architect must configure the application so that itis highly available and fault tolerant.<br>Which solution meets these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "901",
          answers: [
            {
              choice:
                "<p>A.  Provision a full, secondary application deployment in a different AWS Region. Update the Route 53 A record to be a failover record. Add both of the CloudFront distributions as values. Create Route 53 health checks.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Provision an ALB, an Auto Scaling group, and EC2 instances in a different AWS Region. Update the CloudFront distribution, and create a second origin for the new ALB.  Create an origin group for the two origins. Configure one origin as primary and one origin as secondary.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Provision an Auto Scaling group and EC2 instances in a different AWS Region. Create a second target for the new Auto Scaling group in the ALB.  Set up the failover routing algorithm on the ALB. </p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Provision a full, secondary application deployment in a different AWS Region. Create a second CloudFront distribution, and add the new application setup as an origin. Create an AWS Global Accelerator accelerator. Add both of the CloudFront distributions as endpoints.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "902",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is collecting a large amount of data from a fleet of IoT devices. Data is stored as Optimized Row Columnar (ORC) files in the Hadoop Distributed File<br>System (HDFS) on a persistent Amazon EMR cluster. The company's data analytics team queries the data by using SQL in Apache Presto deployed on the same<br>EMR cluster. Queries scan large amounts of data, always run for less than 15 minutes, and run only between 5 PM and 10 PM.<br>The company is concerned about the high cost associated with the current solution. A solutions architect must propose the most cost-effective solution that will allow SQL data queries.<br>Which solution will meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "902",
          answers: [
            {
              choice:
                "<p>A.  Store data in Amazon S3. Use Amazon Redshift Spectrum to query data.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Store data in Amazon S3. Use the AWS Glue Data Catalog and Amazon Athena to query data.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Store data in EMR File System (EMRFS). Use Presto in Amazon EMR to query data.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Store data in Amazon Redshift. Use Amazon Redshift to query data.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "903",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect is designing a data processing system that will use Amazon EC2 instances. Data that needs to be processed will wait in an Amazon Simple<br>Queue Service (Amazon SQS) queue. At least two data processing instances must run at all times.<br>Which combination of actions will meet these requirements MOST cost-effectively? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: AB</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "903",
          answers: [
            {
              choice:
                "<p>A.  Create a Spot Fleet with a target scaling policy that targets the acceptable backlog per instance. Request two On-Demand Instances for minimum capacity. Use Spot Instances for additional capacity.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Purchase two Reserved Instances for the target platform and instance type in the target AWS Region.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create On-Demand Capacity Reservations for two instances for the target platform and instance type in the target AWS Region.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an Auto Scaling group that uses Spot Instance requests. Configure the scaling policy to scale with the size of the SQS queue. Set the minimum value to 2.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Provision two Dedicated Hosts. Configure AWS Batch to use Spot Instances to supply additional capacity.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "904",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A financial services company loaded millions of historical stock trades into an Amazon DynamoDB table. The table uses on-demand capacity mode. Once each day at midnight, a few million new records are loaded into the table. Application read activity against the table happens in bursts throughout the day, and a limited set of keys are repeatedly looked up. The company needs to reduce costs associated with DynamoDB.<br>Which strategy should a solutions architect recommend to meet this requirement?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "904",
          answers: [
            {
              choice:
                "<p>A.  Deploy an Amazon ElastiCache cluster in front of the DynamoDB table.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Deploy DynamoDB Accelerator (DAX). Configure DynamoDB auto scaling. Purchase Savings Plans in Cost Explorer.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use provisioned capacity mode. Purchase Savings Plans in Cost Explorer.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Deploy DynamoDB Accelerator (DAX). Use provisioned capacity mode. Configure DynamoDB auto scaling.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "905",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company wants to send data from its on-premises systems to Amazon S3 buckets. The company created the S3 buckets in three different accounts. The company must send the data privately without the data traveling across the internet. The company has no existing dedicated connectivity to AWS.<br>Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: AC</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "905",
          answers: [
            {
              choice:
                "<p>A.  Establish a networking account in the AWS Cloud. Create a private VPC in the networking account. Set up an AWS Direct Connect connection with a private VIF between the on-premises environment and the private VPC. </p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Establish a networking account in the AWS Cloud. Create a private VPC in the networking account. Set up an AWS Direct Connect connection with a public VIF between the on-premises environment and the private VPC. </p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an Amazon S3 interface endpoint in the networking account.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an Amazon S3 gateway endpoint in the networking account.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Establish a networking account in the AWS Cloud. Create a private VPC in the networking account. Peer VPCs from the accounts that host the S3 buckets with the VPC in the network account.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "906",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company wants to use a hybrid cloud architecture between an on-premises data center and AWS. The company already has deployed a multi-account structure in AWS Organizations while following the AWS Well-Architected Framework.<br>Due to strict security requirements, connectivity between the data center and AWS must be encrypted in transit. Only a single entry point into AWS is permitted from the data center. The data center must be able to access all the AWS accounts.<br>Which solution meets these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "906",
          answers: [
            {
              choice:
                "<p>A.  Connect the AWS accounts with AWS Transit Gateway. Establish an AWS Site-to-Site VPN connection with the data center, and attach the connection to the transit gateway. Route traffic from the data center to all AWS accounts.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Connect the AWS accounts with VPC peering. Establish an AWS Site-to-Site VPN connection with the data center. Route traffic from the data center to all AWS accounts.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Connect the AWS accounts with VPC peering. Establish an AWS Direct Connect connection to the closest AWS Region. Route traffic from the data center to all AWS accounts.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Connect the AWS accounts with AWS Transit Gateway. Establish an AWS Direct Connect connection to the closest AWS Region, and attach the connection to the transit gateway. Route traffic from the data center to all AWS accounts.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "907",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect works for a government agency that has strict disaster recovery requirements. All Amazon Elastic Block Store (Amazon EBS) snapshots are required to be saved in at least two additional AWS Regions. The agency also is required to maintain the lowest possible operational overhead.<br>Which solution meets these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "907",
          answers: [
            {
              choice:
                "<p>A.  Configure a policy in Amazon Data Lifecycle Manager (Amazon DLM) to run once daily to copy the EBS snapshots to the additional Regions.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use Amazon EventBridge (Amazon CloudWatch Events) to schedule an AWS Lambda function to copy the EBS snapshots to the additional Regions.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Set up AWS Backup to create the EBS snapshots. Configure Amazon S3 cross-Region replication to copy the EBS snapshots to the additional Regions.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Schedule Amazon EC2 Image Builder to run once daily to create an AMI and copy the AMI to the additional Regions.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "908",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A retail company has a small ecommerce web application that uses an Amazon RDS for PostgreSQL DB instance. The DB instance is deployed with the Multi-AZ option turned on.<br>Application usage recently increased exponentially, and users experienced frequent HTTP 503 errors. Users reported the errors, and the company's reputation suffered. The company could not identify a definitive root cause.<br>The company wants to improve its operational readiness and receive alerts before users notice an incident. The company also wants to collect enough information to determine the root cause of any future incident.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "908",
          answers: [
            {
              choice:
                "<p>A.  Turn on Enhanced Monitoring for the DB instance. Modify the corresponding parameter group to turn on query logging for all the slow queries. Create Amazon CloudWatch alarms. Set the alarms to appropriate thresholds that are based on performance metrics in CloudWatch.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Turn on Enhanced Monitoring and Performance Insights for the DB instance. Create Amazon CloudWatch alarms. Set the alarms to appropriate thresholds that are based on performance metrics in CloudWatch.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Turn on log exports to Amazon CloudWatch for the PostgreSQL logs on the DB instance. Analyze the logs by using Amazon Elasticsearch Service (Amazon ES) and Kibana. Create a dashboard in Kibana. Configure alerts that are based on the metrics that are collected.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Turn on Performance Insights for the DB instance. Modify the corresponding parameter group to turn on query logging for all the slow queries. Create Amazon CloudWatch alarms. Set the alarms to appropriate thresholds that are based on performance metrics in CloudWatch.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "909",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is planning to set up a REST API application on AWS. The application team wants to set up a new identity store on AWS. The IT team does not want to maintain any infrastructure or servers for this deployment.<br>What is the MOST operationally efficient solution that meets these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "909",
          answers: [
            {
              choice:
                "<p>A.  Deploy the application as AWS Lambda functions. Set up Amazon API Gateway REST API endpoints for the application. Create a Lambda function, and configure a Lambda authorizer.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Deploy the application in AWS AppSync, and configure AWS Lambda resolvers. Set up an Amazon Cognito user pool, and configure AWS AppSync to use the user pool for authorization.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Deploy the application as AWS Lambda functions. Set up Amazon API Gateway REST API endpoints for the application. Set up an Amazon Cognito user pool, and configure an Amazon Cognito authorizer.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Deploy the application in Amazon Elastic Kubernetes Service (Amazon EKS) clusters. Set up an Application Load Balancer for the EKS pods. Set up an Amazon Cognito user pool and service pod for authentication.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "910",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is using AWS Single Sign-On (AWS SSO) to centrally manage permissions and access to multiple AWS accounts in AWS Organizations. A solutions architect needs to provide users with granular access to AWS accounts based on different job functions.<br>What should the solutions architect do to meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "910",
          answers: [
            {
              choice:
                "<p>A.  Create an IAM group for each job function. In AWS SSO for the management account, create a permission set for each job function. Add users to the appropriate groups. Assign roles to the corresponding groups in all AWS accounts.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a group in AWS SSO for each job function. In AWS SSO for the management account, create a permission set for each job function. Add users to the appropriate groups. Assign groups to AWS accounts with corresponding permission sets.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an IAM role for each job function in all AWS accounts. Create a group in the management account for each job function. In AWS SSO for the management account, create a permission set for each job function.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an IAM role for each job function in the management account. In AWS SSO for the management account, create a permission set for each IAM role.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "911",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has hundreds of AWS accounts. The company recently implemented a centralized internal process for purchasing new Reserved Instances and modifying existing Reserved Instances. This process requires all business units that want to purchase or modify Reserved Instances to submit requests to a dedicated team for procurement. Previously, business units directly purchased or modified Reserved Instances in their own respective AWS accounts autonomously.<br>A solutions architect needs to enforce the new process in the most secure way possible.<br>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: AD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "911",
          answers: [
            {
              choice:
                "<p>A.  Ensure that all AWS accounts are part of an organization in AWS Organizations with all features enabled.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS Config to report on the attachment of an IAM policy that denies access to the ec2:PurchaseReservedInstancesOffering action and the ec2:ModifyReservedInstances action.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  In each AWS account, create an IAM policy that denies the ec2:PurchaseReservedInstancesOffering action and the ec2:ModifyReservedInstances action.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an SCP that denies the ec2:PurchaseReservedInstancesOffering action and the ec2:ModifyReservedInstances action. Attach the SCP to each OU of the organization.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Ensure that all AWS accounts are part of an organization in AWS Organizations that uses the consolidated billing feature.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "912",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company hosts its primary API on AWS by using an Amazon API Gateway API and AWS Lambda functions that contain the logic for the API methods. The company's internal applications use the API for core functionality and business logic. The company's customers use the API to access data from their accounts.<br>Several customers also have access to a legacy API that is running on a single standalone Amazon EC2 instance.<br>The company wants to increase the security for these APIs to better prevent denial of service (DoS) attacks, check for vulnerabilities, and guard against common exploits.<br>What should a solutions architect do to meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "912",
          answers: [
            {
              choice:
                "<p>A.  Use AWS WAF to protect both APIs. Configure Amazon Inspector to analyze the legacy API. Configure Amazon GuardDuty to monitor for malicious attempts to access the APIs.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS WAF to protect the API Gateway API. Configure Amazon Inspector to analyze both APIs. Configure Amazon GuardDuty to block malicious attempts to access the APIs.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use AWS WAF to protect the API Gateway API. Configure Amazon Inspector to analyze the legacy API. Configure Amazon GuardDuty to monitor for malicious attempts to access the APIs.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use AWS WAF to protect the API Gateway API. Configure Amazon Inspector to protect the legacy API. Configure Amazon GuardDuty to block malicious attempts to access the APIs.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "913",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is migrating its applications to the AWS Cloud. Each application will reside in its own AWS account after the migration. The applications will be hosted on Amazon EC2 Linux instances that need to be accessed through the shell for administration. The company's administrators want to use the AWS CLI from their laptops to interact with AWS and the EC2 instances.<br>The company is concerned that SSH access keys might be lost or become public. The company wants to avoid using long-term keys.<br>Which combination of steps should a solutions architect recommend to meet these requirements? (Choose three.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: ABC</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "913",
          answers: [
            {
              choice:
                "<p>A.  Create subaccounts and cross-account roles for each of the applications. Create users. Assign cross-account roles to the users. Provide users with their initial credentials. B Configure AWS Single Sign-On. Create users. Assign the users the permission sets for the application accounts that they need to access. Provide users with their initial credentials.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS Systems Manager Session Manager to obtain shell access to the EC2 instances.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an organization in AWS Organizations with all features enabled to manage the accounts. Create subaccounts to host each of the applications.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an AWS Lambda function to rotate user access keys every 30 days.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Create an AWS Lambda function to rotate SSH keys for the EC2 instances every 30 days.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "914",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect has created a single VPC on AWS. The VPC has one internet gateway and one NAT gateway. The VPC extends across three Availability<br>Zones. Each Availability Zone includes one public subnet and one private subnet. The three private subnets contain Amazon EC2 instances that must be able to connect to the internet.<br>Which solution will increase the network resiliency of this architecture?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "914",
          answers: [
            {
              choice:
                "<p>A.  Add two NAT gateways so that each Availability Zone has a NAT gateway. Configure a route table for each private subnet to send traffic to the NAT gateway in the subnet's Availability Zone.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Add two NAT gateways so that each Availability Zone has a NAT gateway. Configure a route table for each public subnet to send traffic to the NAT gateway in the subnet's Availability Zone.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Add two internet gateways so that each Availability Zone has an internet gateway. Configure a route table for each private subnet to send traffic to the internet gateway in the subnet's Availability Zone.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Add two internet gateways so that each Availability Zone has an internet gateway. Configure a route table for each public subnet to send traffic to the internet gateway in the subnet's Availability Zone.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "915",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is running an application in the AWS Cloud. The company's security team must approve the creation of all new IAM users. When a new IAM user is created, all access for the user must be removed automatically. The security team must then receive a notification to approve the user. The company has a multi-<br>Region AWS CloudTrail trail in the AWS account.<br>Which combination of steps will meet these requirements? (Choose three.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: ADE</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "915",
          answers: [
            {
              choice:
                "<p>A.  Create an Amazon EventBridge (Amazon CloudWatch Events) rule. Define a pattern with the detail-type value set to AWS API Call via CloudTrail and an eventName of CreateUser.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Configure CloudTrail to send a notification for the CreateUser event to an Amazon Simple Notification Service (Amazon SNS) topic.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Invoke a container that runs in Amazon Elastic Container Service (Amazon ECS) with AWS Fargate technology to remove access.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Invoke an AWS Step Functions state machine to remove access.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Use Amazon Simple Notification Service (Amazon SNS) to notify the security team.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Use Amazon Pinpoint to notify the security team.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "916",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is building dozens of new workloads by using a variety of AWS services. Each workload will belong to a separate business unit. The company needs to minimize costs as each business unit experiments with ways to innovate. The company also needs to maximize scalability for its security team so that the security team can identify and respond to threats as quickly as possible for all the workloads.<br>Which combination of actions should a solutions architect take to meet these requirements? (Choose three.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: ADF</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "916",
          answers: [
            {
              choice:
                "<p>A.  Set up a multi-account environment by using AWS Organizations. Organize accounts into the following OUs: Security, Infrastructure, Workloads, and Exception.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Set up a multi-account environment by using AWS Organizations. Organize accounts into the following SCPs: Security, Infrastructure, Workloads, and Exception.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure AWS Trusted Advisor to invoke an AWS Lambda function to move an AWS account that reaches a predefined budget threshold into the Exception OU. Apply an SCP at the root of the organization with a condition that matches the Exception OU to limit usage to core services, including Amazon EC2, Amazon S3, and Amazon RDS.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use AWS Budgets alerts to invoke an AWS Lambda function to move an AWS account that reaches a predefined budget threshold into the Exception OU. Apply an SCP to the Exception OU to limit usage to core services, including Amazon EC2, Amazon S3, and Amazon RDS.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Turn on Amazon GuardDuty in each account. Create an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the security team to the topic so that the security team can receive alerts.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Create a delegated administrator account for Amazon GuardDuty in the organization in AWS Organizations. Create an Amazon Simple Notification Service (Amazon SNS) topic in this account. Subscribe the security team to the topic so that the security team can receive alerts.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "917",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is migrating its development and production workloads to a new organization in AWS Organizations. The company has created a separate member account for development and a separate member account for production. Consolidated billing is inked to the management account. In the management account, a solutions architect needs to create an IAM user that can stop or terminate resources in both member accounts.<br>Which solution will meet this requirement?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "917",
          answers: [
            {
              choice:
                "<p>A.  Create an IAM user and a cross-account role in the management account. Configure the cross-account role with least privilege access to the member accounts.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an IAM user in each member account. In the management account, create a cross-account role that has least privilege access. Grant the IAM users access to the cross-account role by using a trust policy.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an IAM user in the management account. In the member accounts, create an IAM group that has least privilege access. Add the IAM user from the management account to each IAM group in the member accounts.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an IAM user in the management account. In the member accounts, create cross-account roles that have least privilege access. Grant the IAM user access to the role by using a trust policy.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "918",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>An online magazine will launch its latest edition this month. This edition will be the first to be distributed globally. The magazine's dynamic website currently uses an Application Load Balancer in front of the web tier, a fleet of Amazon EC2 instances for web and application servers, and Amazon Aurora MySQL. Portions of the website include static content and almost all traffic is read-only.<br>The magazine is expecting a significant spike in internet traffic when the new edition is launched. Optimal performance is a top priority for the week following the launch.<br>Which combination of steps should a solutions architect take to reduce system response times for a global audience? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: DE</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "918",
          answers: [
            {
              choice:
                "<p>A.  Use logical cross-Region replication to replicate the Aurora MySQL database to a secondary Region. Replace the web servers with Amazon S3. Deploy S3 buckets in cross-Region replication mode.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Ensure the web and application tiers are each in Auto Scaling groups. Introduce an AWS Direct Connect connection. Deploy the web and application tiers in Regions across the world.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Migrate the database from Amazon Aurora to Amazon RDS for MySQL. Ensure all three of the application tiers ג€' web, application, and database ג€' are in private subnets.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use an Aurora global database for physical cross-Region replication. Use Amazon S3 with cross-Region replication for static content and resources. Deploy the web and application tiers in Regions across the world.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Introduce Amazon Route 53 with latency-based routing and Amazon CloudFront distributions. Ensure the web and application tiers are each in Auto Scaling groups.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "919",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has introduced a new policy that allows employees to work remotely from their homes if they connect by using a VPN. The company is hosting internal applications with VPCs in multiple AWS accounts. Currently, the applications are accessible from the company's on-premises office network through an AWS Site- to-Site VPN connection. The VPC in the company's main AWS account has peering connections established with VPCs in other AWS accounts.<br>A solutions architect must design a scalable AWS Client VPN solution for employees to use while they work from home.<br>What is the MOST cost-effective solution that meets these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "919",
          answers: [
            {
              choice:
                "<p>A.  Create a Client VPN endpoint in each AWS account. Configure required routing that allows access to internal applications.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a Client VPN endpoint in the main AWS account. Configure required routing that allows access to internal applications.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a Client VPN endpoint in the main AWS account. Provision a transit gateway that is connected to each AWS account. Configure required routing that allows access to internal applications.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a Client VPN endpoint in the main AWS account. Establish connectivity between the Client VPN endpoint and the AWS Site-to-Site VPN.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "920",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company's solutions architect is designing a disaster recovery (DR) solution for an application that runs on AWS. The application uses PostgreSQL 11.7 as its database. The company has an RPO of 30 seconds. The solutions architect must design a DR solution with the primary database in the us-east-1 Region and the failover database in the us-west-2 Region.<br>What should the solutions architect do to meet these requirements with minimum application change?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "920",
          answers: [
            {
              choice:
                "<p>A.  Migrate the database to Amazon RDS for PostgreSQL in us-east-1. Set up a read replica in us-west-2. Set the managed RPO for the RDS database to 30 seconds.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Migrate the database to Amazon RDS for PostgreSQL in us-east-1. Set up a standby replica in an Availability Zone in us-west-2. Set the managed RPO for the RDS database to 30 seconds.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Migrate the database to an Amazon Aurora PostgreSQL global database with the primary Region as us-east-1 and the secondary Region as us-west-2. Set the managed RPO for the Aurora database to 30 seconds.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Migrate the database to Amazon DynamoDB in us-east-1. Set up global tables with replica tables that are created in us-west-2.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "921",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company that designs multiplayer online games wants to expand its user base outside of Europe. The company transfers a significant amount of UDP traffic to keep all the live and interactive sessions of the games. The company has plans for rapid expansion and wants to build its architecture to provide an optimized online experience to its users.<br>Which architecture will meet these requirements with the LOWEST latency for users?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "921",
          answers: [
            {
              choice:
                "<p>A.  Set up a Multi-AZ environment in a single AWS Region. Use Amazon CloudFront to cache user sessions.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Set up environments in multiple AWS Regions. Create an accelerator in AWS Global Accelerator, and add endpoints from different Regions to it.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Set up environments in multiple AWS Regions. Use Amazon Route 53, and select latency-based routing.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Set up a Multi-AZ environment in a single AWS Region. Use AWS Lambda@Edge to update sessions closer to the users.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "922",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is using a lift-and-shift strategy to migrate applications from several on-premises Windows servers to AWS. The Windows servers will be hosted on<br>Amazon EC2 instances in the us-east-1 Region.<br>The company's security policy allows the installation of migration tools on servers. The migration data must be encrypted in transit and encrypted at rest. The applications are business critical. The company needs to minimize the cutover window and minimize the downtime that results from the migration. The company wants to use Amazon CloudWatch and AWS CloudTrail for monitoring.<br>Which solution will meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "922",
          answers: [
            {
              choice:
                "<p>A.  Use AWS Application Migration Service (CloudEndure Migration) to migrate the Windows servers to AWS. Create a Replication Settings template. Install the AWS Replication Agent on the source servers.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS DataSync to migrate the Windows servers to AWS. Install the DataSync agent on the source servers. Configure a blueprint for the target servers. Begin the replication process.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use AWS Server Migration Service (AWS SMS) to migrate the Windows servers to AWS. Install the SMS Connector on the source servers. Replicate the source servers to AWS. Convert the replicated volumes to AMIs to launch EC2 instances.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use AWS Migration Hub to migrate the Windows servers to AWS. Create a project in Migration Hub. Track the progress of server migration by using the built- in dashboard.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "923",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has set up a multi-account AWS environment by using AWS Control Tower. Each AWS account that AWS Control Tower creates has its own VPC.<br>The company is developing an application that will integrate with many microservices. The company has designated a specific account to host the application. The company will deploy the microservices on Amazon EC2 instances and will implement the microservices across multiple AWS accounts.<br>The microservices require a high degree of interconnectivity. The company needs a solution that will give the application the ability to communicate privately with the microservices. The solution also must minimize cost and operational overhead.<br>Which solution will meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "923",
          answers: [
            {
              choice:
                "<p>A.  Use AWS VPN CloudHub to connect the application VPC to all the other VPCs. Use a virtual private gateway to provide traffic flow between all the VPCs.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create VPC peering connections between the application VPC and all the other VPCs. Update the security groups and route tables to allow traffic flow between all the VPCs.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a transit gateway in the application account. Attach the application VPC and all the other VPCs to the transit gateway. Create a transit gateway route table to direct traffic between the VPCs.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Share the application VPC with the other AWS accounts by using AWS Resource Access Manager (AWS RAM). Deploy the microservices in the shared VPC. </p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "924",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is running an image-processing service in the AWS Cloud. Users upload images to an Amazon S3 bucket for processing. When an image is uploaded to the S3 bucket, several microservices that are based on AWS Lambda functions need to perform different processing tasks on the image. Each task's processing must start immediately after an image is uploaded.<br>Which solution will meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "924",
          answers: [
            {
              choice:
                "<p>A.  Configure each microservice to create an S3 event notification with its Lambda function as the destination.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Configure AWS CloudTrail event logging for Amazon S3. Create an Amazon EventBridge (Amazon CloudWatch Events) rule with an event pattern that matches PutObject API calls through CloudTrail. Register each microservice's Lambda function as a target for the rule.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an Amazon EventBridge (Amazon CloudWatch Events) rule with an event pattern for PutObject events in S3 event notifications. Configure each microservice to register an Amazon Simple Queue Service (Amazon SQS) queue as a target for the rule. Invoke the microservice's Lambda function from the SQS queue.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an S3 event notification with an Amazon Simple Notification Service (Amazon SNS) topic as the destination. Create an SNS subscription for each microservice's Lambda function.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "925",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company uses multiple AWS accounts in a single AWS Region. A solutions architect is designing a solution to consolidate logs generated by Elastic Load<br>Balancers (ELBs) in the AppDev, AppTest, and AppProd accounts. The logs should be stored in an existing Amazon S3 bucket named s3-elb-logs in the central<br>AWS account. The central account is used for log consolidation only and does not have ELBs deployed. ELB logs must be encrypted at rest.<br>Which combination of steps should the solutions architect take to build the solution? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "925",
          answers: [
            {
              choice:
                "<p>A.  Update the S3 bucket policy for the s3-elb-logs bucket to allow the s3:PutBucketLogging action for the central AWS account ID. </p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Update the S3 bucket policy for the s3-elb-logs bucket to allow the s3:PutObject and s3:DeleteObject actions for the AppDev, AppTest, and AppProd account IDs.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Update the S3 bucket policy for the s3-elb-logs bucket to allow the s3:PutObject action for the AppDev, AppTest, and AppProd account IDs.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Enable access logging for the ELBs. Set the S3 location to the s3-elb-logs bucket.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Enable Amazon S3 default encryption using server-side encryption with S3 managed encryption keys (SSE-S3) for the s3-elb-logs S3 bucket.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "926",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A medical company is running a REST API on a set of Amazon EC2 instances. The EC2 instances run in an Auto Scaling group behind an Application Load<br>Balancer (ALB). The ALB runs in three public subnets, and the EC2 instances run in three private subnets. The company has deployed an Amazon CloudFront distribution that has the ALB as the only origin.<br>Which solution should a solutions architect recommend to enhance the origin security?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "926",
          answers: [
            {
              choice:
                "<p>A.  Store a random string in AWS Secrets Manager. Create an AWS Lambda function for automatic secret rotation. Configure CloudFront to inject the random string as a custom HTTP header for the origin request. Create an AWS WAF web ACL rule with a string match rule for the custom header. Associate the web ACL with the ALB. </p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an AWS WAF web ACL rule with an IP match condition of the CloudFront service IP address ranges. Associate the web ACL with the ALB.  Move the ALB into the three private subnets.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Store a random string in AWS Systems Manager Parameter Store. Configure Parameter Store automatic rotation for the string. Configure CloudFront to inject the random string as a custom HTTP header for the origin request. Inspect the value of the custom HTTP header, and block access in the ALB. </p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure AWS Shield Advanced. Create a security group policy to allow connections from CloudFront service IP address ranges. Add the policy to AWS Shield Advanced, and attach the policy to the ALB. </p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "927",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has automated the nightly retraining of its machine learning models by using AWS Step Functions. The workflow consists of multiple steps that use<br>AWS Lambda. Each step can fail for various reasons, and any failure causes a failure of the overall workflow.<br>A review reveals that the retraining has failed multiple nights in a row without the company noticing the failure. A solutions architect needs to improve the workflow so that notifications are sent for all types of failures in the retraining process.<br>Which combination of steps should the solutions architect take to meet these requirements? (Choose three.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: ABC</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "927",
          answers: [
            {
              choice:
                "<p>A.  Create an Amazon Simple Notification Service (Amazon SNS) topic with a subscription of type 'Email' that targets the team's mailing list.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a task named 'Email' that forwards the input arguments to the SNS topic.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Add a Catch field to all Task, Map, and Parallel states that have a statement of 'ErrorEquals': [ 'States.ALL' ] and 'Next': 'Email'.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Add a new email address to Amazon Simple Email Service (Amazon SES). Verify the email address.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Create a task named 'Email' that forwards the input arguments to the SES email address.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Add a Catch field to all Task, Map, and Parallel states that have a statement of 'ErrorEquals': [ 'States.Runtime' ] and 'Next': 'Email'.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "928",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has deployed its database on an Amazon RDS for MySQL DB instance in the us-east-1 Region. The company needs to make its data available to customers in Europe. The customers in Europe must have access to the same data as customers in the United States (US) and will not tolerate high application latency or stale data. The customers in Europe and the customers in the US need to write to the database. Both groups of customers need to see updates from the other group in real time.<br>Which solution will meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "928",
          answers: [
            {
              choice:
                "<p>A.  Create an Amazon Aurora MySQL replica of the RDS for MySQL DB instance. Pause application writes to the RDS DB instance. Promote the Aurora Replica to a standalone DB cluster. Reconfigure the application to use the Aurora database and resume writes. Add eu-west-1 as a secondary Region to the 06 cluster. Enable write forwarding on the DB cluster. Deploy the application in eu-west-1. Configure the application to use the Aurora MySQL endpoint in eu- west-1.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Add a cross-Region replica in eu-west-1 for the RDS for MySQL DB instance. Configure the replica to replicate write queries back to the primary DB instance. Deploy the application in eu-west-1. Configure the application to use the RDS for MySQL endpoint in eu-west-1.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Copy the most recent snapshot from the RDS for MySQL DB instance to eu-west-1. Create a new RDS for MySQL DB instance in eu-west-1 from the snapshot. Configure MySQL logical replication from us-east-1 to eu-west-1. Enable write forwarding on the DB cluster. Deploy the application in eu-west-1. Configure the application to use the RDS for MySQL endpoint in eu-west-1.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Convert the RDS for MySQL DB instance to an Amazon Aurora MySQL DB cluster. Add eu-west-1 as a secondary Region to the DB cluster. Enable write forwarding on the DB cluster. Deploy the application in eu-west-1. Configure the application to use the Aurora MySQL endpoint in eu-west-1.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "929",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company operates quick-service restaurants. The restaurants follow a predictable model with high sales traffic for 4 hours daily. Sales traffic is lower outside of those peak hours.<br>The point of sale and management platform is deployed in the AWS Cloud and has a backend that is based on Amazon DynamoDB. The database table uses provisioned throughput mode with 100,000 RCUs and 80,000 WCUs to match known peak resource consumption.<br>The company wants to reduce its DynamoDB cost and minimize the operational overhead for the IT staff.<br>Which solution meets these requirements MOST cost-effectively?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "929",
          answers: [
            {
              choice: "<p>A.  Reduce the provisioned RCUs and WCUs.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Change the DynamoDB table to use on-demand capacity.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice: "<p>C.  Enable Dynamo DB auto scaling for the table.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Purchase 1-year reserved capacity that is sufficient to cover the peak load for 4 hours each day.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "930",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is using AWS Organizations to manage multiple accounts. Due to regulatory requirements, the company wants to restrict specific member accounts to certain AWS Regions, where they are permitted to deploy resources. The resources in the accounts must be tagged, enforced based on a group standard, and centrally managed with minimal configuration.<br>What should a solutions architect do to meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "930",
          answers: [
            {
              choice:
                "<p>A.  Create an AWS Config rule in the specific member accounts to limit Regions and apply a tag policy.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  From the AWS Billing and Cost Management console, in the management account, disable Regions for the specific member accounts and apply a tag policy on the root.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Associate the specific member accounts with the root. Apply a tag policy and an SCP using conditions to limit Regions.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Associate the specific member accounts with a new OU. Apply a tag policy and an SCP using conditions to limit Regions.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "931",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A developer reports receiving an Error 403: Access Denied message when they try to download an object from an Amazon S3 bucket. The S3 bucket is accessed using an S3 endpoint inside a VPC, and is encrypted with an AWS KMS key. A solutions architect has verified that the developer is assuming the correct IAM role in the account that allows the object to be downloaded. The S3 bucket policy and the NACL are also valid.<br>Which additional step should the solutions architect take to troubleshoot this issue?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "931",
          answers: [
            {
              choice:
                "<p>A.  Ensure that blocking all public access has not been enabled in the S3 bucket.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Verify that the IAM role has permission to decrypt the referenced KMS key.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Verify that the IAM role has the correct trust relationship configured.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Check that local firewall rules are not preventing access to the S3 endpoint.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "932",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company deploys a new web application. As part of the setup, the company configures AWS WAF to log to Amazon S3 through Amazon Kinesis Data Firehose.<br>The company develops an Amazon Athena query that runs once daily to return AWS WAF log data from the previous 24 hours. The volume of daily logs is constant. However, over time, the same query is taking more time to run.<br>A solutions architect needs to design a solution to prevent the query time from continuing to increase. The solution must minimize operational overhead.<br>Which solution will meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "932",
          answers: [
            {
              choice:
                "<p>A.  Create an AWS Lambda function that consolidates each days AWS WAF logs into one log file.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Reduce the amount of data scanned by configuring AWS WAF to send logs to a different S3 bucket each day.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Update the Kinesis Data Firehose configuration to partition the data in Amazon S3 by date and time. Create external tables for Amazon Redshift. Configure Amazon Redshift Spectrum to query the data source.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Modify the Kinesis Data Firehose configuration and Athena table definition to partition the data by date and time. Change the Athena query to view the relevant partitions.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "933",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company manages an on-premises JavaScript front-end web application. The application is hosted on two servers secured with a corporate Active Directory.<br>The application calls a set of Java-based microservices on an application server and stores data in a clustered MySQL database. The application is heavily used during the day on weekdays. It is lightly used during the evenings and weekends.<br>Daytime traffic to the application has increased rapidly, and reliability has diminished as a result. The company wants to migrate the application to AWS with a solution that eliminates the need for server maintenance, with an API to securely connect to the microservices.<br>Which combination of actions will meet these requirements? (Choose three.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: ACF</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "933",
          answers: [
            {
              choice:
                "<p>A.  Host the web application on Amazon S3. Use Amazon Cognito identity pools (federated identities) with SAML for authentication and authorization.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Host the web application on Amazon EC2 with Auto Scaling. Use Amazon Cognito federation and Login with Amazon for authentication and authorization.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an API layer with Amazon API Gateway. Rehost the microservices on AWS Fargate containers.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an API layer with Amazon API Gateway. Rehost the microservices on Amazon Elastic Container Service (Amazon ECS) containers.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Replatform the database to Amazon RDS for MySQL.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Replatform the database to Amazon Aurora MySQL Serverless.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "934",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is running a data-intensive application on AWS. The application runs on a cluster of hundreds of Amazon EC2 instances. A shared file system also runs on several EC2 instances that store 200 TB of data. The application reads and modifies the data on the shared file system and generates a report. The job runs once monthly, reads a subset of the files from the shared file system, and takes about 72 hours to complete. The compute instances scale in an Auto Scaling group, but the instances that host the shared the system run continuously. The compute and storage instances are all in the same AWS Region.<br>A solutions architect needs to reduce costs by replacing the shared file system instances. The file system must provide high performance access to the needed data for the duration of the 72-hour run.<br>Which solution will provide the LARGEST overall cost reduction while meeting these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "934",
          answers: [
            {
              choice:
                "<p>A.  Migrate the data from the existing shared file system to an Amazon S3 bucket that uses the S3 Intelligent-Tiering storage class. Before the job runs each month, use Amazon FSx for Lustre to create a new file system with the data from Amazon S3 by using lazy loading. Use the new file system as the shared storage for the duration of the job. Delete the file system when the job is complete.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Migrate the data from the existing shared file system to a large Amazon Elastic Block Store (Amazon EBS) volume with Multi-Attach enabled. Attach the EBS volume to each of the instances by using a user data script in the Auto Scaling group launch template. Use the EBS volume as the shared storage for the duration of the job. Detach the EBS volume when the job is complete.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Migrate the data from the existing shared file system to an Amazon S3 bucket that uses the S3 Standard storage class. Before the job runs each month, use Amazon FSx for Lustre to create a new file system with the data from Amazon S3 by using batch loading. Use the new file system as the shared storage for the duration of the job. Delete the file system when the job is complete.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Migrate the data from the existing shared file system to an Amazon S3 bucket. Before the job runs each month, use AWS Storage Gateway to create a file gateway with the data from Amazon S3. Use the file gateway as the shared storage for the job. Delete the file gateway when the job is complete.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "935",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is refactoring its on-premises order-processing platform in the AWS Cloud. The platform includes a web front end that is hosted on a fleet of VMs.<br>RabbitMQ to connect the front end to the backend, and a Kubernetes cluster to run a containerized backend system to process the orders. The company does not want to make any major changes to the application.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "935",
          answers: [
            {
              choice:
                "<p>A.  Create an AMI of the web server VM. Create an Amazon EC2 Auto Scaling group that uses the AMI and an Application Load Balancer. Set up Amazon MQ to replace the on-premises messaging queue. Configure Amazon Elastic Kubernetes Service (Amazon EKS) to host the order-processing backend.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a custom AWS Lambda runtime to mimic the web server environment. Create an Amazon API Gateway API to replace the front-end web servers. Set up Amazon MQ to replace the on-premises messaging queue. Configure Amazon Elastic Kubernetes Service (Amazon EKS) to host the order-processing backend.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an AMI of the web server VM. Create an Amazon EC2 Auto Scaling group that uses the AMI and an Application Load Balancer. Set up Amazon MQ to replace the on-premises messaging queue. Install Kuhernetes on a fleet of different EC2 instances to host the order-processing backend.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an AMI of the web server VM Create an Amazon EC2 Auto Scaling group that uses the AMI and an Application Load Balancer. Set up an Amazon Simple Queue Service (Amazon SQS) queue to replace the on-premises messaging queue, Configure Amazon Elastic Kubernetes Service (Amazon EKS) to host the order-processing backend.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "936",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has an organization in AWS Organizations that has a large number of AWS accounts. One of the AWS accounts is designated as a transit account and has a transit gateway that is shared with all of the other AWS accounts. AWS Site-to-Site VPN connections are configured between all of the company's global offices and the transit account. The company has AWS Config enabled on all of its accounts.<br>The company's networking team needs to centrally manage a list of internal IP address ranges that belong to the global offices. Developers will reference this list to gain access to their applications securely.<br>Which solution meets these requirements with the LEAST amount of operational overhead?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "936",
          answers: [
            {
              choice:
                "<p>A.  Create a JSON file that is hosted in Amazon S3 and that lists all of the internal IP address ranges. Configure an Amazon Simple Notification Service (Amazon SNS) topic in each of the accounts that can be invoked when the JSON file is updated. Subscribe an AWS Lambda function to the SNS topic to update all relevant security group rules with the updated IP address ranges.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a new AWS Config managed rule that contains all of the internal IP address ranges. Use the rule to check the security groups in each of the accounts to ensure compliance with the list of IP address ranges. Configure the rule to automatically remediate any noncompliant security group that is detected.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  In the transit account, create a VPC prefix list with all of the internal IP address ranges. Use AWS Resource Access Manager to share the prefix list with all of the other accounts. Use the shared prefix list to configure security group rules in the other accounts.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  In the transit account, create a security group with all of the internal IP address ranges. Configure the security groups in the other accounts to reference the transit account's security group by using a nested security group reference of '<transit-account-id>/sg-1a2b3c4d'.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "937",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company wants to move an application from on premises to the AWS Cloud. The application uses MySQL servers to store backend data. However, the application does not scale properly. The databases have become unresponsive as the user base has increased.<br>The company needs a solution to make the application highly available with low latency across multiple AWS Regions. The solution must require the least possible operational overhead and development effort.<br>Which solution will meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "937",
          answers: [
            {
              choice:
                "<p>A.  Create an Amazon RDS for MySQL DB cluster that includes a cross-Region read replica. Use AWS Database Migration Service (AWS DMS) to migrate existing databases.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Deploy Amazon DynamoDB with global tables. Use AWS Database Migration Service (AWS DMS) to migrate existing databases. Adapt the application to work with DynamoDB. </p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an Amazon Aurora global database. Use native MySQL tools to migrate existing databases.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create MySQL servers on Amazon EC2 instances in two Regions. Set up asynchronous software replication across Regions.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "938",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is running a serverless application that consists of several AWS Lambda functions and Amazon DynamoDB tables. The company has created new functionality that requires the Lambda functions to access an Amazon Neptune DB cluster. The Neptune DB cluster is located in three subnets in a VPC.<br>Which of the possible solutions will allow the Lambda functions to access the Neptune DB cluster and DynamoDB tables? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BE</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "938",
          answers: [
            {
              choice:
                "<p>A.  Create three public subnets in the Neptune VPC, and route traffic through an internet gateway. Host the Lambda functions in the three new public subnets.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create three private subnets in the Neptune VPC, and route internet traffic through a NAT gateway. Host the Lambda functions in the three new private subnets.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Host the Lambda functions outside the VPC.  Update the Neptune security group to allow access from the IP ranges of the Lambda functions.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Host the Lambda functions outside the VPC.  Create a VPC endpoint for the Neptune database, and have the Lambda functions access Neptune over the VPC endpoint.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Create three private subnets in the Neptune VPC.  Host the Lambda functions in the three new isolated subnets. Create a VPC endpoint for DynamoDB, and route DynamoDB traffic to the VPC endpoint.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "939",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company wants to use Amazon WorkSpaces in combination with thin client devices to replace aging desktops. Employees use the desktops to access applications that work with clinical trial data. Corporate security policy states that access to the applications must be restricted to only company branch office locations. The company is considering adding an additional branch office in the next 6 months.<br>Which solution meets these requirements with the MOST operational efficiency?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "939",
          answers: [
            {
              choice:
                "<p>A.  Create an IP access control group rule with the list of public addresses from the branch offices. Associate the IP access control group with the WorkSpaces directory.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS Firewall Manner to create a web ACL rule with an IPSet with the list of public addresses from the branch office locations. Associate the web ACL with the WorkSpaces directory.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use AWS Certificate Manager (ACM) to issue trusted device certificates to the machines deployed in the branch office locations. Enable restricted access on the WorkSpaces directory.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a custom WorkSpace image with Windows Firewall configured to restrict access to the public addresses of the branch offices. Use the image to deploy the WorkSpaces.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "940",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company provides specialized analytics services to customers. The analytics run on Amazon EC2 instances that need to be launched and terminated in response to requests from customers. A solutions architect is creating automation to manage the EC2 instances that handle customer requests. However, when the automation scripts attempt to launch many EC2 instances at the same time, a RequestLimitExceeded error frequently occurs.<br>What should the solutions architect do to handle this error?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "940",
          answers: [
            {
              choice:
                "<p>A.  Implement an exponential backoff strategy so that the API token bucket can refill.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Modify the EC2 instance launch configuration to install diagnostic tools on each instance to troubleshoot the issue.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Request an increase for API throttling quotas from the AWS Support Center.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Request an EC2 API quota increase through the Service Quotas console.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "941",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has a media metadata extraction pipeline running on AWS. Notifications containing a reference to a file in Amazon S3 are sent to an Amazon Simple<br>Notification Service (Amazon SNS) topic. The pipeline consists of a number of AWS Lambda functions that are subscribed to the SNS topic. The Lambda functions extract the S3 tile and write metadata to an Amazon RDS PostgreSQL DB instance.<br>Users report that updates to the metadata are sometimes slow to appear or are lost. During these times, the CPU utilization on the database is high and the number of failed Lambda invocations increases.<br>Which combination of actions should a solutions architect take to help resolve this issue? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: CE</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "941",
          answers: [
            {
              choice:
                "<p>A.  Enable message delivery status on the SNS topic. Configure the SNS topic delivery policy to enable retries with exponential backoff.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an Amazon Simple Queue Service (Amazon SQS) FIFO queue and subscribe the queue to the SNS topic. Configure the Lambda functions to consume messages from the SQS queue.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an RDS proxy for the RDS instance. Update the Lambda functions to connect to the RDS instance using the proxy.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Enable the RDS Data API for the RDS instance. Update the Lambda functions to connect to the RDS instance using the Data API.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Create an Amazon Simple Queue Service (Amazon SQS) standard queue for each Lambda function and subscribe the queues to the SNS topic. Configure the Lambda functions to consume messages from their respective SQS queue.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "942",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has VPC flow logs enabled for its NAT gateway. The company is seeing Action = ACCEPT for inbound traffic that comes from public IP address<br>198.51.100.2 destined for a private Amazon EC2 instance.<br>A solutions architect must determine whether the traffic represents unsolicited inbound connections from the internet. The first two octets of the VPC CIDR block are 203.0.<br>Which set of steps should the solutions architect take to meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "942",
          answers: [
            {
              choice:
                "<p>A.  Open the AWS CloudTrail console. Select the log group that contains the NAT gateway's elastic network interface and the private instance's elastic network interface. Run a query to filter with the destination address set as 'like 203.0' and the source address set as 'like 198.51.100.2'. Run the stats command to filter the sum of bytes transferred by the source address and the destination address.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Open the Amazon CloudWatch console. Select the log group that contains the NAT gateway's elastic network interface and the private instance's elastic network interface. Run a query to filter with the destination address set as 'like 203.0' and the source address set as 'like 198.51.100.2'. Run the stats command to filter the sum of bytes transferred by the source address and the destination address.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Open the AWS CloudTrail console. Select the log group that contains the NAT gateway's elastic network interface and the private instance's elastic network interface. Run a query to filter with the destination address set as 'like 198.51.100.2' and the source address set as 'like 203.0'. Run the stats command to filter the sum of bytes transferred by the source address and the destination address.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Open the Amazon CloudWatch console. Select the log group that contains the NAT gateway's elastic network interface and the private instance's elastic network interface. Run a query to filter with the destination address set as 'like 198.51.100.2' and the source address set as 'like 203.0'. Run the stats command to filter the sum of bytes transferred by the source address and the destination address.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "943",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is planning a migration from an on-premises data center to the AWS Cloud. The company plans to use multiple AWS accounts that are managed in an organization in AWS Organizations. The company will create a small number of accounts initially and will add accounts as needed. A solutions architect must design a solution that turns on AWS CloudTrail in all AWS accounts.<br>What is the MOST operationally efficient solution that meets these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "943",
          answers: [
            {
              choice:
                "<p>A.  Create an AWS Lambda function that creates a new CloudTrail trail in all AWS accounts in the organization. Invoke the Lambda function daily by using a scheduled action in Amazon EventBridge (Amazon CloudWatch Events).</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a new CloudTrail trail in the organization's management account. Configure the trail to log all events for all AWS accounts in the organization.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a new CloudTrail trail in all AWS accounts in the organization. Create new trails whenever a new account is created. Define an SCP that prevents deletion or modification of trails. Apply the SCP to the root OU.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an AWS Systems Manager Automation runbook that creates a CloudTrail trail in all AWS accounts in the organization. Invoke the automation by using Systems Manager State Manager.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "944",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company uses AWS CloudFormation to deploy applications within multiple VPCs that are all attached to a transit gateway. Each VPC that sends traffic to the public internet must send the traffic through a shared services VPC. Each subnet within a VPC uses the default VPC route table, and the traffic is routed to the transit gateway. The transit gateway uses its default route table for any VPC attachment.<br>A security audit reveals that an Amazon EC2 instance that is deployed within a VPC can communicate with an EC2 instance that is deployed in any of the company's other VPCs. A solutions architect needs to limit the traffic between the VPCs. Each VPC must be able to communicate only with a predefined, limited set of authorized VPCs.<br>What should the solutions architect do to meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "944",
          answers: [
            {
              choice:
                "<p>A.  Update the network ACL of each subnet within a VPC to allow outbound traffic only to the authorized VPCs. Remove all deny rules except the default deny rule.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Update all the security groups that are used within a VPC to deny outbound traffic to security groups that are used within the unauthorized VPCs.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a dedicated transit gateway route table for each VPC attachment. Route traffic only to the authorized VPCs.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Update the main route table of each VPC to route traffic only to the authorized VPCs through the transit gateway.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "945",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has developed a single-page web application in JavaScript. The source code is stored in a single Amazon S3 bucket in the us-east-1 Region. The company serves the web application to a global user base through Amazon CloudFront.<br>The company wants to experiment with two versions of the website without informing application users. Each version of the website will reside in its own S3 bucket. The company wants to determine which version is most successful in marketing a new product.<br>The solution must send application users that are based in Europe to the new website design. The solution must send application users that are based in the<br>United States to the current website design. However, some exceptions exist. The company needs to be able to redirect specific users to the new website design, regardless of the users' location.<br>Which solution meets these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "945",
          answers: [
            {
              choice:
                "<p>A.  Configure two CloudFront distributions. Configure a geolocation routing policy in Amazon Route 53 to route traffic to the appropriate CloudFront endpoint based on the location of clients.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Configure a single CloudFront distribution. Create a behavior with different paths for each version of the site. Configure Lambda@Edge on the default path to generate redirects and send the client to the correct version of the website.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure a single CloudFront distribution. Configure an alternate domain name on the distribution. Configure two behaviors to route users to the different S3 origins based on the domain name that the client uses in the HTTP request.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure a single CloudFront distribution with Lambda@Edge. Use Lambda@Edge to send user requests to different origins based on request attributes.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "946",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has an organization in AWS Organizations. The company has enabled trusted access between Organizations and AWS Resource Access Manager<br>(AWS RAM). The organization includes three AWS accounts, one each for shared services, development, and production. The shared services account has a<br>VPC.<br>A solutions architect needs to meet the following requirements:<br>* Configure access between the shared services VPC and the development and production accounts.<br>* Ensure that workloads in each account are deployed to at least three Availability Zones.<br>* Ensure that there is no direct communication between the development and production workloads.<br>Which combination of steps will meet these requirements? (Choose three.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BCF</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "946",
          answers: [
            {
              choice:
                "<p>A.  In the shared services VPC, create three subnets for three Availability Zones. Create one subnet in each Availability Zone.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  In the shared services VPC, create six subnets for three Availability Zones. Create two subnets in each Availability Zone.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure network ACLs to prevent connectivity between the subnets in the development account and the production account.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure VPC default security group outbound rules to prevent connectivity between the subnets in the development account and the production account.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Use AWS RAM to share three subnets in different Availability Zones with the development account. Additionally, use AWS RAM to share the same three subnets with the production account.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Use AWS RAM to share three subnets in different Availability Zones with the development account. Additionally, use AWS RAM to share three other subnets in different Availability Zones with the production account.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#947",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect has deployed a web application that serves users across two AWS Regions under a custom domain. The application uses Amazon Route 53 latency-based routing. The solutions architect has associated weighted record sets with a pair of web servers in separate Availability Zones for each Region.<br><br>The solutions architect runs a disaster recovery scenario. When all the web servers in one Region are stopped. Route 53 does not automatically redirect users to the other Region.<br><br>Which of the following are possible root causes of this issue? (Choose two.)<br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: AE</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#947",
          answers: [
            {
              choice:
                "<p>A.  The weight for the Region where the web servers were stopped is higher than the weight for the other Region.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  One of the web servers in the secondary Region did not pass its HTTP health check.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Latency resource record sets cannot be used in combination with weighted resource record sets.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  The setting to evaluate target health is not turned on for the latency alias resource record set that is associated with the domain in the Region where the web servers were stopped.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  An HTTP health check has not been set up for one or more of the weighted resource record sets associated with the stopped web servers.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#948",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company hosts an application that uses several Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer (ALB). During the initial startup of the EC2 instances, the EC2 instances run user data scripts to download critical content for the application from an Amazon S3 bucket.<br><br>The EC2 instances are launching correctly. However, after a period of time, the EC2 instances are terminated with the following error message: 'An instance was taken out of service in response to an ELB system health check failure.' EC2 instances continue to launch and be terminated because of Auto Scaling events in an endless loop.<br><br>The only recent change to the deployment is that the company added a large amount of critical content to the S3 bucket. The company does not want to alter the user data scripts in production.<br><br>What should a solutions architect do so that the production environment can deploy successfully?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#948",
          answers: [
            {
              choice: "<p>A.  Increase the size of the EC2 instances.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Increase the health check timeout for the ALB. </p>",
              correct: false,
              feedback: "",
            },
            {
              choice: "<p>C.  Change the health check path for the ALB. </p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Increase the health check grace period for the Auto Scaling group.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#949",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A media storage application uploads user photos to Amazon S3 for processing by AWS Lambda functions. Application state is stored in Amazon DynamoDB tables. Users are reporting that some uploaded photos are not being processed properly. The application developers trace the logs and find that Lambda is experiencing photo processing issues when thousands of users upload photos simultaneously. The issues are the result of Lambda concurrency limits and the performance of DynamoDB when data is saved.<br><br>Which combination of actions should a solutions architect take to increase the performance and reliability of the application? (Choose two.)<br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#949",
          answers: [
            {
              choice:
                "<p>A.  Evaluate and adjust the RCUs for the DynamoDB tables.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Evaluate and adjust the WCUs for the DynamoDB tables.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Add an Amazon ElastiCache layer to increase the performance of Lambda functions.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Add an Amazon Simple Queue Service (Amazon SQS) queue and reprocessing logic between Amazon S3 and the Lambda functions.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Use S3 Transfer Acceleration to provide lower latency to users.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#950",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has a multi-tier web application that runs on a fleet of Amazon EC2 instances behind an Application Load Balancer (ALB). The instances are in an Auto Scaling group. The ALB and the Auto Scaling group are replicated in a backup AWS Region. The minimum value and the maximum value for the Auto Scaling group are set to zero. An Amazon RDS Multi-AZ DB instance stores the application's data. The DB instance has a read replica in the backup Region. The application presents an endpoint to end users by using an Amazon Route 53 record.<br><br>The company needs to reduce its RTO to less than 15 minutes by giving the application the ability to automatically fail over to the backup Region. The company does not have a large enough budget for an active-active strategy.<br><br>What should a solutions architect recommend to meet these requirements?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#950",
          answers: [
            {
              choice:
                "<p>A.  Reconfigure the application's Route 53 record with a latency-based routing policy that load balances traffic between the two ALBs. Create an AWS Lambda function in the backup Region to promote the read replica and modify the Auto Scaling group values. Create an Amazon CloudWatch alarm that is based on the HTTPCode_Target_5XX_Count metric for the ALB in the primary Region. Configure the CloudWatch alarm to invoke the Lambda function.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an AWS Lambda function in the backup Region to promote the read replica and modify the Auto Scaling group values. Configure Route 53 with a health check that monitors the web application and sends an Amazon Simple Notification Service (Amazon SNS) notification to the Lambda function when the health check status is unhealthy. Update the application's Route 53 record with a failover policy that routes traffic to the ALB in the backup Region when a health check failure occurs.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure the Auto Scaling group in the backup Region to have the same values as the Auto Scaling group in the primary Region. Reconfigure the application's Route 53 record with a latency-based routing policy that load balances traffic between the two ALBs. Remove the read replica. Replace the read replica with a standalone RDS DB instance. Configure Cross-Region Replication between the RDS DB instances by using snapshots and Amazon S3.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure an endpoint in AWS Global Accelerator with the two ALBs as equal weighted targets. Create an AWS Lambda function in the backup Region to promote the read replica and modify the Auto Scaling group values. Create an Amazon CloudWatch alarm that is based on the HTTPCode_Target_5XX_Count metric for the ALB in the primary Region. Configure the CloudWatch alarm to invoke the Lambda function.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#951",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is migrating an on-premises application and a MySQL database to AWS. The application processes highly sensitive data, and new data is constantly updated in the database. The data must not be transferred over the internet. The company also must encrypt the data in transit and at rest.<br><br>The database is 5 TB in size. The company already has created the database schema in an Amazon RDS for MySQL DB instance. The company has set up a 1 Gbps AWS Direct Connect connection to AWS. The company also has set up a public VIF and a private VIF. A solutions architect needs to design a solution that will migrate the data to AWS with the least possible downtime.<br><br>Which solution will meet these requirements?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#951",
          answers: [
            {
              choice:
                "<p>A.  Perform a database backup. Copy the backup files to an AWS Snowball Edge Storage Optimized device. Import the backup to Amazon S3. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3) for encryption at rest. Use TLS for encryption in transit. Import the data from Amazon S3 to the DB instance.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS Database Migration Service (AWS DMS) to migrate the data to AWS. Create a DMS replication instance in a private subnet. Create VPC endpoints for AWS DMS. Configure a DMS task to copy data from the on-premises database to the DB instance by using full load plus change data capture (CDC). Use the AWS Key Management Service (AWS KMS) default key for encryption at rest. Use TLS for encryption in transit.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Perform a database backup. Use AWS DataSync to transfer the backup files to Amazon S3. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3) for encryption at rest. Use TLS for encryption in transit. Import the data from Amazon S3 to the DB instance.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use Amazon S3 File Gateway. Set up a private connection to Amazon S3 by using AWS PrivateLink. Perform a database backup. Copy the backup files to Amazon S3. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3) for encryption at rest. Use TLS for encryption in transit. Import the data from Amazon S3 to the DB instance.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#952",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect needs to review the design of an Amazon EMR cluster that is using the EMR File System (EMRFS). The cluster performs tasks that are critical to business needs. The cluster is running Amazon EC2 On-Demand Instances at all times for all task, master, and core nodes. The EMR tasks run each morning, starting at 1:00 AM. and take 6 hours to finish running. The amount of time to complete the processing is not a priority because the data is not referenced until late in the day.<br><br>The solutions architect must review the architecture and suggest a solution to minimize the compute costs.<br><br>Which solution should the solutions architect recommend to meet these requirements?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#952",
          answers: [
            {
              choice:
                "<p>A.  Launch all task, master, and core nodes on Spot Instances in an instance fleet. Terminate the duster, including all instances, when the processing is completed.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Launch the master and core nodes on On-Demand Instances. Launch the task nodes on Spot Instances in an instance fleet. Terminate the cluster, including all instances, when the processing is completed. Purchase Compute Savings Plans to cover the On-Demand Instance usage.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Continue to launch all nodes on On-Demand Instances. Terminate the cluster, including all instances, when the processing is completed. Purchase Compute Savings Plans to cover the On-Demand Instance usage</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Launch the master and core nodes on On-Demand Instances. Launch the task nodes on Spot Instances in an instance fleet. Terminate only the task node instances when the processing is completed. Purchase Compute Savings Plans to cover the On-Demand Instance usage.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#953",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect has launched multiple Amazon EC2 instances in a placement group within a single Availability Zone. Because of additional load on the system, the solutions architect attempts to add new instances to the placement group. However, the solutions architect receives an insufficient capacity error.<br><br>What should the solutions architect do to troubleshoot this issue?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#953",
          answers: [
            {
              choice:
                "<p>A.  Use a spread placement group. Set a minimum of eight instances for each Availability Zone.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Stop and start all the instances in the placement group. Try the launch again.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a new placement group. Merge the new placement group with the original placement group.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Launch the additional instances as Dedicated Hosts in the placement groups.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#954",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect has developed a web application that uses an Amazon API Gateway Regional endpoint and an AWS Lambda function. The consumers of the web application are all close to the AWS Region where the application will be deployed. The Lambda function only queries an Amazon Aurora MySQL database. The solutions architect has configured the database to have three read replicas.<br><br>During testing, the application does not meet performance requirements. Under high load, the application opens a large number of database connections. The solutions architect must improve the application's performance.<br><br>Which actions should the solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: AE</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#954",
          answers: [
            {
              choice:
                "<p>A.  Use the cluster endpoint of the Aurora database.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use RDS Proxy to set up a connection pool to the reader endpoint of the Aurora database.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use the Lambda Provisioned Concurrency feature.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Move the code for opening the database connection in the Lambda function outside of the event handler.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Change the API Gateway endpoint to an edge-optimized endpoint.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#955",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has migrated a legacy application to the AWS Cloud. The application runs on three Amazon EC2 instances that are spread across three Availability Zones. One EC2 instance is in each Availability Zone. The EC2 instances are running in three private subnets of the VPC and are set up as targets for an Application Load Balancer (ALB) that is associated with three public subnets.<br><br>The application needs to communicate with on-premises systems. Only traffic from IP addresses in the company's IP address range are allowed to access the on-premises systems. The company's security team is bringing only one IP address from its internal IP address range to the cloud. The company has added this IP address to the allow list for the company firewall. The company also has created an Elastic IP address for this IP address.<br><br>A solutions architect needs to create a solution that gives the application the ability to communicate with the on-premises systems. The solution also must be able to mitigate failures automatically.<br><br>Which solution will meet these requirements?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#955",
          answers: [
            {
              choice:
                "<p>A.  Deploy three NAT gateways, one in each public subnet. Assign the Elastic IP address to the NAT gateways. Turn on health checks for the NAT gateways. If a NAT gateway fails a health check, recreate the NAT gateway and assign the Elastic IP address to the new NAT gateway.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Replace the ALB with a Network Load Balancer (NLB). Assign the Elastic IP address to the NLB Turn on health checks for the NLIn the case of a failed health check, redeploy the NLB in different subnets.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Deploy a single NAT gateway in a public subnet. Assign the Elastic IP address to the NAT gateway. Use Amazon CloudWatch with a custom metric to monitor the NAT gateway. If the NAT gateway is unhealthy, invoke an AWS Lambda function to create a new NAT gateway in a different subnet. Assign the Elastic IP address to the new NAT gateway.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Assign the Elastic IP address to the ALB.  Create an Amazon Route 53 simple record with the Elastic IP address as the value. Create a Route 53 health check. In the case of a failed health check, recreate the ALB in different subnets.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#956",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is running an application in the AWS Cloud. The company has several third-party services that integrate with the application through a RESTful API. The API is a serverless implementation with an Amazon API Gateway regional API endpoint that integrates with several different AWS Lambda functions.<br><br>The application's data is nonrelational and is stored in an Amazon DynamoDB table. The application and the API are running in the eu-west-1 Region. The company needs the API to also be available in the us-east-1 Region. All data must be available in both Regions. A solutions architect already has deployed all the Lambda functions in us-east-1.<br><br>Which additional steps should the solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: AC</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#956",
          answers: [
            {
              choice:
                "<p>A.  Deploy a second API Gateway regional API endpoint in us-east-1. Create Lambda integration with the functions in us-east-1.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Enable DynamoDB Streams on the table in eu-west-1. Replicate all changes to a DynamoDB table in us-east-1.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Modify the DynamoDB table to be a global table in eu-west-1 and in us-east-1.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Change the API Gateway API endpoint in eu-west-1 to an edge-optimized endpoint. Create Lambda integration with the functions in both Regions.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice: "<p>E.  Create a DynamoDB read replica in us-east-1.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#957",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company uses AWS Organizations. The company runs two firewall appliances in a centralized networking account. Each firewall appliance runs on a manually configured highly available Amazon EC2 instance. A transit gateway connects the VPC from the centralized networking account to VPCs of member accounts. Each firewall appliance uses a static private IP address that is then used to route traffic from the member accounts to the internet.<br><br>During a recent incident, a badly configured script initiated the termination of both firewall appliances. During the rebuild of the firewall appliances, the company wrote a new script to configure the firewall appliances at startup.<br><br>The company wants to modernize the deployment of the firewall appliances. The firewall appliances need the ability to scale horizontally to handle increased traffic when the network expands. The company must continue to use the firewall appliances to comply with company policy. The provider of the firewall appliances has confirmed that the latest version of the firewall code will work with all AWS services.<br><br>Which combination of steps should the solutions architect recommend to meet these requirements MOST cost-effectively? (Choose three.)<br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: ADE</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#957",
          answers: [
            {
              choice:
                "<p>A.  Deploy a Gateway Load Balancer in the centralized networking account. Set up an endpoint service that uses AWS PrivateLink.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Deploy a Network Load Balancer in the centralized networking account. Set up an endpoint service that uses AWS PrivateLink.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an Auto Scaling group and a launch template that uses the new script as user data to configure the firewall appliances. Create a target group that uses the instance target type.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an Auto Scaling group. Configure an AWS Launch Wizard deployment that uses the new script as user data to configure the firewall appliances. Create a target group that uses the IP target type.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Create VPC endpoints in each member account. Update the route tables to point to the VPC endpoints.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Create VPC endpoints in the centralized networking account. Update the route tables in each member account to point to the VPC endpoints.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#958",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is running an application in the AWS Cloud. The application uses AWS Lambda functions and Amazon Elastic Container Service (Amazon ECS) containers that run with AWS Fargate technology as its primary compute. The load on the application is irregular. The application experiences long periods of no usage, followed by sudden and significant increases and decreases in traffic. The application is write-heavy and stores data in an Amazon Aurora MySQL database. The database runs on an Amazon RDS memory optimized DB instance that is not able to handle the load.<br><br>What is the MOST cost-effective way for the company to handle the sudden and significant changes in traffic?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#958",
          answers: [
            {
              choice:
                "<p>A.  Add additional read replicas to the database. Purchase Instance Savings Plans and RDS Reserved Instances.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Migrate the database to an Aurora multi-master DB cluster. Purchase Instance Savings Plans.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Migrate the database to an Aurora global database. Purchase Compute Savings Plans and RDS Reserved Instances.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Migrate the database to Aurora Serverless v1. Purchase Compute Savings Plans.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#959",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is using a single AWS Region for its ecommerce website. The website includes a web application that runs on several Amazon EC2 instances behind an Application Load Balancer (ALB). The website also includes an Amazon DynamoDB table. A custom domain name in Amazon Route 53 is linked to the ALB. The company created an SSL/TLS certificate in AWS Certificate Manager (ACM) and attached the certificate to the ALB. The company is not using a content delivery network as part of its design.<br><br>The company wants to replicate its entire application stack in a second Region to provide disaster recovery, plan for future growth, and provide improved access time to users. A solutions architect needs to implement a solution that achieves these goals and minimizes administrative overhead.<br><br>Which combination of steps should the solutions architect take to meet these requirements? (Choose three.)<br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: ADF</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#959",
          answers: [
            {
              choice:
                "<p>A.  Create an AWS CloudFormation template for the current infrastructure design. Use parameters for important system values, including Region. Use the CloudFormation template to create the new infrastructure in the second Region.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use the AWS Management Console to document the existing infrastructure design in the first Region and to create the new infrastructure in the second Region.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Update the Route 53 hosted zone record for the application to use weighted routing. Send 50% of the traffic to the ALB in each Region.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Update the Route 53 hosted zone record for the application to use latency-based routing. Send traffic to the ALB in each Region.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Update the configuration of the existing DynamoDB table by enabling DynamoDB Streams. Add the second Region to create a global table.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Create a new DynamoDB table. Enable DynamoDB Streams for the new table. Add the second Region to create a global table. Copy the data from the existing DynamoDB table to the new table as a one-time operation.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#960",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is hosting a monolithic REST-based API for a mobile app on five Amazon EC2 instances in public subnets of a VPC. Mobile clients connect to the API by using a domain name that is hosted on Amazon Route 53. The company has erupted a Route 53 multivalue answer routing policy with the IP addresses of all the EC2 instances. Recently, the app has been overwhelmed by large and sudden increases to traffic. The app has not been able to keep up with the traffic.<br><br>A solutions architect needs to implement a solution so that the app can handle the new and varying load.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#960",
          answers: [
            {
              choice:
                "<p>A.  Separate the API into individual AWS Lambda functions. Configure an Amazon API Gateway REST API with Lambda integration for the backend. Update the Route 53 record to point to the API Gateway API.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Containerize the API logic. Create an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. Run the containers in the cluster by using Amazon EC2. Create a Kubernetes ingress. Update the Route 53 record to point to the Kubernetes ingress.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an Auto Scaling group. Place all the EC2 instances in the Auto Scaling group. Configure the Auto Scaling group to perform scaling actions that are based on CPU utilization. Create an AWS Lambda function that reacts to Auto Scaling group changes and updates the Route 53 record.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an Application Load Balancer (ALB) in front of the API. Move the EC2 instances to private subnets in the VPC.  Add the EC2 instances as targets for the ALB.  Update the Route 53 record to point to the ALB. </p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#961",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is using Amazon API Gateway to deploy a private REST API that will provide access to sensitive data. The API must be accessible only from an application that is deployed in a VPC. The company deploys the API successfully. However, the API is not accessible from an Amazon EC2 instance that is deployed in the VPC.<br><br>Which solution will provide connectivity between the EC2 instance and the API?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#961",
          answers: [
            {
              choice:
                "<p>A.  Create an interface VPC endpoint for API Gateway. Attach an endpoint policy that allows apigateway:* actions. Disable private DNS naming for the VPC endpoint. Configure an API resource policy that allows access from the VPC.  Use the VPC endpoint's DNS name to access the API.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an interface VPC endpoint for API Gateway. Attach an endpoint policy that allows the execute-api:lnvoke action. Enable private DNS naming for the VPC endpoint. Configure an API resource policy that allows access from the VPC endpoint. Use the API endpoint's DNS names to access the API.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a Network Load Balancer (NLB) and a VPC link. Configure private integration between API Gateway and the NLB.  Use the API endpoint's DNS names to access the API.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an Application Load Balancer (ALB) and a VPC Link. Configure private integration between API Gateway and the ALB.  Use the ALB endpoint's DNS name to access the API.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#962",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A software development company has multiple engineers who are working remotely. The company is running Active Directory Domain Services (AD DS) on an Amazon EC2 instance. The company's security policy states that all internal, nonpublic services that are deployed in a VPC must be accessible through a VPN. Multi-factor authentication (MFA) must be used for access to a VPN.<br><br>What should a solutions architect do to meet these requirements?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#962",
          answers: [
            {
              choice:
                "<p>A.  Create an AWS Site-to-Site VPN connection. Configure integration between a VPN and AD DS. Use an Amazon Workspaces client with MFA support enabled to establish a VPN connection.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an AWS Client VPN endpoint. Create an AD Connector directory for integration with AD DS. Enable MFA for AD Connector. Use AWS Client VPN to establish a VPN connection.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create multiple AWS Site-to-Site VPN connections by using AWS VPN CloudHub. Configure integration between AWS VPN CloudHub and AD DS. Use AWS Copilot to establish a VPN connection.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an Amazon WorkLink endpoint. Configure integration between Amazon WorkLink and AD DS. Enable MFA in Amazon WorkLink. Use AWS Client VPN to establish a VPN connection.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#963",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is migrating an application from on-premises infrastructure to the AWS Cloud. During migration design meetings, the company expressed concerns about the availability and recovery options for its legacy Windows file server. The file server contains sensitive business-critical data that cannot be recreated in the event of data corruption or data loss. According to compliance requirements, the data must not travel across the public internet. The company wants to move to AWS managed services where possible.<br><br>The company decides to store the data in an Amazon FSx for Windows File Server file system. A solutions architect must design a solution that copies the data to another AWS Region for disaster recovery (DR) purposes.<br><br>Which solution will meet these requirements?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#963",
          answers: [
            {
              choice:
                "<p>A.  Create a destination Amazon S3 bucket in the DR Region. Establish connectivity between the FSx for Windows File Server file system in the primary Region and the S3 bucket in the DR Region by using Amazon FSx File Gateway. Configure the S3 bucket as a continuous backup source in FSx File Gateway.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an FSx for Windows File Server file system in the DR Region. Establish connectivity between the VPC in the primary Region and the VPC in the DR Region by using AWS Site-to-Site VPN. Configure AWS DataSync to communicate by using VPN endpoints.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an FSx for Windows File Server file system in the DR Region. Establish connectivity between the VPC in the primary Region and the VPC in the DR Region by using VPC peering. Configure AWS DataSync to communicate by using interface VPC endpoints with AWS PrivateLink.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an FSx for Windows File Server file system in the DR Region Establish connectivity between the VPC in the primary Region and the VPC in the DR Region by using AWS Transit Gateway in each Region. Use AWS Transfer Family to copy files between the FSx for Windows File Server file system in the primary Region and the FSx for Windows File Server file system in the DR Region over the private AWS backbone network.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#964",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has IoT sensors that monitor traffic patterns throughout a large city. The company wants to read and collect data from the sensors and perform aggregations on the data.<br><br>A solutions architect designs a solution in which the IoT devices are streaming to Amazon Kinesis Data Streams. Several applications are reading from the stream. However, several consumers are experiencing throttling and are periodically encountering a ReadProvisionedThroughputExceeded error.<br><br>Which actions should the solutions architect take to resolve this issue? (Choose three.)<br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: ACE</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#964",
          answers: [
            {
              choice:
                "<p>A.  Reshard the stream to increase the number of shards in the stream.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use the Kinesis Producer Library (KPL). Adjust the polling frequency.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use consumers with the enhanced fan-out feature.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Reshard the stream to reduce the number of shards in the stream.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Use an error retry and exponential backoff mechanism in the consumer logic.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Configure the stream to use dynamic partitioning.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#965",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has deployed its corporate website in a VPC on two Amazon EC2 instances behind an Application Load Balancer (ALB). The EC2 instances are deployed in private subnets. The ALB is in a public subnet. A route to an internet gateway exists in the public subnet route table. The company has deployed an Amazon CloudFront distribution with the ALB as the origin.<br><br>The company's security team recently identified that malicious traffic is accessing the ALB directly. The company must deploy security controls to prevent common attack techniques, including cross-site scripting, and to protect against volumetric denials of service.<br><br>Which strategy should a solutions architect recommend to meet these requirements?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#965",
          answers: [
            {
              choice:
                "<p>A.  Migrate the ALB to a private subnet. Associate an AWS WAF web ACL with the ALB.  Update inbound rules on the ALB security group to allow traffic on port 443 only from CloudFront IP addresses.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Associate an AWS WAF web ACL with the CloudFront distribution. Configure an origin access identity (OAI) on the ALB to drop access attempts that do not originate from CloudFront.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Associate an AWS WAF web ACL with the CloudFront distribution. Configure CloudFront to add a custom header to the requests that are sent to the ALB.  Configure advanced routing on the ALB to only forward requests that include the custom header that is set by CloudFront.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Associate an AWS WAF web ACL with the CloudFront distribution. Configure AWS WAF to add a custom header to the requests that are sent to the ALB.  Configure advanced routing on the ALB to only forward requests that include the custom header that is set by CloudFront.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#966",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has millions of objects in an Amazon S3 bucket. The objects are in the S3 Standard storage class. All the S3 objects are accessed frequently. The number of users and applications that access the objects is increasing rapidly. The objects are encrypted with server-side encryption with AWS KMS keys (SSE-KMS).<br><br>A solutions architect reviews the company's monthly AWS invoice and notices that AWS KMS costs are increasing because of the high number of requests from Amazon S3. The solutions architect needs to optimize costs with minimal changes to the application.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#966",
          answers: [
            {
              choice:
                "<p>A.  Create a new S3 bucket that has server-side encryption with customer-provided keys (SSE-C) as the encryption type. Copy the existing objects to the new S3 bucket. Specify SSE-C. </p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a new S3 bucket that has server-side encryption with Amazon S3 managed keys (SSE-S3) as the encryption type. Use S3 Batch Operations to copy the existing objects to the new S3 bucket. Specify SSE-S3.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use AWS CloudHSM to store the encryption keys. Create a new S3 bucket. Use S3 Batch Operations to copy the existing objects to the new S3 bucket. Encrypt the objects by using the keys from CloudHSM.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use the S3 Intelligent-Tiering storage class for the S3 bucket. Create an S3 Intelligent-Tiering archive configuration to transition objects that are not accessed for 90 days to S3 Glacier Deep Archive.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#967",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>An external audit of a company's serverless application reveals IAM policies that grant too many permissions. These policies are attached to the company's AWS Lambda execution roles. Hundreds of the company's Lambda functions have broad access permissions, such as full access to Amazon S3 buckets and Amazon DynamoDB tables. The company wants each function to have only the minimum permissions that the function needs to complete its task.<br><br>A solutions architect must determine which permissions each Lambda function needs.<br><br>What should the solutions architect do to meet this requirement with the LEAST amount of effort?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#967",
          answers: [
            {
              choice:
                "<p>A.  Set up Amazon CodeGuru to profile the Lambda functions and search for AWS API calls. Create an inventory of the required API calls and resources for each Lambda function. Create new IAM access policies for each Lambda function. Review the new policies to ensure that they meet the company's business requirements.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Turn on AWS CloudTrail logging for the AWS account. Use AWS Identity and Access Management Access Analyzer to generate IAM access policies based on the activity recorded in the CloudTrail log. Review the generated policies to ensure that they meet the company's business requirements.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Turn on AWS CloudTrail logging for the AWS account. Create a script to parse the CloudTrail log, search for AWS API calls by Lambda execution role, and create a summary report. Review the report. Create IAM access policies that provide more restrictive permissions for each Lambda function.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Turn on AWS CloudTrail logging for the AWS account. Export the CloudTrail logs to Amazon S3. Use Amazon EMR to process the CloudTrail logs in Amazon S3 and produce a report of API calls and resources used by each execution role. Create a new IAM access policy for each role. Export the generated roles to an S3 bucket. Review the generated policies to ensure that they meet the company's business requirements.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#968",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company uses AWS Organizations. The company creates a central VPC in an AWS account that is designated for networking in a single AWS Region. The central VPC has an AWS Site-to-Site VPN connection to the company's on-premises network. A solutions architect must create another AWS account that uses the same networking resources that the central VPC uses.<br><br>Which solution meets these requirements MOST cost-effectively?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#968",
          answers: [
            {
              choice:
                "<p>A.  Create a VPC in the new AWS account. Create a new Site-to-Site VPN connection for the on-premises connection.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS Resource Access Manager to share the VPN connection in the central VPC with the new AWS account.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a VPC in the new AWS account. Configure a virtual private gateway to connect to the central VPC. </p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use AWS Resource Access Manager to share the subnets in the central VPC with the new AWS account.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#969",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is running a web application on Amazon EC2 instances in a production AWS account. The company requires all logs generated from the web application to be copied to a central AWS account for analysis and archiving. The company's AWS accounts are currently managed independently. Logging agents are configured on the EC2 instances to upload the log files to an Amazon S3 bucket in the central AWS account.<br><br>A solutions architect needs to provide access for a solution that will allow the production account to store log files in the central account. The central account also needs to have read access to the log files.<br><br>What should the solutions architect do to meet these requirements?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#969",
          answers: [
            {
              choice:
                "<p>A.  Create a cross-account role in the central account. Assume the role from the production account when the logs are being copied.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a policy on the S3 bucket with the production account ID as the principal. Allow S3 access from a delegated user.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a policy on the S3 bucket with access from only the CIDR range of the EC2 instances in the production account. Use the production account ID as the principal.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a cross-account role in the production account. Assume the role from the production account when the logs are being copied.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#970",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company uses Amazon EC2 instances to run business-critical applications. Software that is running on the EC2 instances recently caused Amazon GuardDuty to generate the PenTest:S3/KaliLinux finding for some of the company's environments. The company wants to prevent this software from running again. The company is using AWS Organizations to manage its AWS accounts.<br><br>What should a solutions architect do to meet these requirements?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#970",
          answers: [
            {
              choice:
                "<p>A.  Configure Amazon Inspector to check the EC2 instances for the forbidden software and to send an Amazon Simple Notification Service (Amazon SNS) notification when the software is identified. Create an AWS Lambda function that stops the EC2 instances and notifies the company. Subscribe the Lambda function to the SNS topic.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a centralized Amazon EventBridge (Amazon CloudWatch Events) bus to receive GuardDuty events from all accounts. Configure an EventBridge (CloudWatch Events) rule to invoke an AWS Lambda function when the GuardDuty event is generated. Configure the Lambda function to stop the EC2 instances and notify the company.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure an SCP to prevent the software from being installed. Apply the SCP to the root OU for the organization.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a library of approved EC2 AMIs. Create a catalog in AWS Service Catalog to deploy the AMIs for the organization. Update IAM policies to allow EC2 instances to be created only with Service Catalog AMIs.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#971",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company needs to create and manage multiple AWS accounts for a number of departments from a central location. The security team requires read-only access to all accounts from its own AWS account. The company is using AWS Organizations and created an account for the security team.<br><br>How should a solutions architect meet these requirements?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#971",
          answers: [
            {
              choice:
                "<p>A.  Use the OrganizationAccountAccessRole IAM role to create a new IAM policy with read-only access in each member account. Establish a trust relationship between the IAM policy in each member account and the security account. Ask the security team to use the IAM policy to gain access.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use the OrganizationAccountAccessRole IAM role to create a new IAM role with read-only access in each member account. Establish a trust relationship between the IAM role in each member account and the security account. Ask the security team to use the IAM role to gain access.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Ask the security team to use AWS Security Token Service (AWS STS) to call the AssumeRole API for the OrganizationAccountAccessRole IAM role in the management account from the security account. Use the generated temporary credentials to gain access.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Ask the security team to use AWS Security Token Service (AWS STS) to call the AssumeRole API for the OrganizationAccountAccessRole IAM role in the member account from the security account. Use the generated temporary credentials to gain access.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#972",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has developed an application that is running Windows Server on VMware vSphere VMs that the company hosts on premises. The application data is stored in a proprietary format that must be read through the application. The company manually provisioned the servers and the application.<br><br>As part of its disaster recovery plan, the company wants the ability to host its application on AWS temporarily if the company's on-premises environment becomes unavailable. The company wants the application to return to on-premises hosting after a disaster recovery event is complete. The RPO is 5 minutes.<br><br>Which solution meets these requirements with the LEAST amount of operational overhead?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#972",
          answers: [
            {
              choice:
                "<p>A.  Configure AWS DataSync. Replicate the data to Amazon Elastic Block Store (Amazon EBS) volumes. When the on-premises environment is unavailable, use AWS CloudFormation templates to provision Amazon EC2 instances and attach the EBS volumes.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Configure CloudEndure Disaster Recovery. Replicate the data to replication Amazon EC2 instances that are attached to Amazon Elastic Block Store (Amazon EBS) volumes. When the on-premises environment is unavailable, use CloudEndure to launch EC2 instances that use the replicated volumes.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Provision an AWS Storage Gateway file gateway. Replicate the data to an Amazon S3 bucket. When the on-premises environment is unavailable, use AWS Backup to restore the data to Amazon Elastic Block Store (Amazon EBS) volumes and launch Amazon EC2 instances from these EBS volumes.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Provision an Amazon FSx for Windows File Server file system on AWS. Replicate the data to the file system. When the on-premises environment is unavailable, use AWS CloudFormation templates to provision Amazon EC2 instances and use AWS::CloudFormation::Init commands to mount the Amazon FSx file shares.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#973",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A financial services company is operating a highly regulated workload on premises. The company is trying to modernize its monolithic core payments application by changing to a microservices-based architecture with containers. The company is waiting for regulatory approval to run this workload on AWS. In the meantime, the company wants to start deploying the containerized application on premises.<br><br>A solutions architect needs to design a solution that gives the company the ability to run and update existing and new workloads even if the company loses network connectivity to an AWS Region.<br><br>Which solution will meet these requirements?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#973",
          answers: [
            {
              choice:
                "<p>A.  Install AWS Systems Manager, Docker, and Amazon Elastic Container Service (Amazon ECS) agents on the company's managed infrastructure on premises. Register the on-premises servers or VMs with an Amazon ECS Anywhere cluster on AWS. Launch the workload's containers on the cluster.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Install Amazon EKS Distro on the company's managed infrastructure on premises. Register the on-premises servers or VMs with an Amazon EKS Anywhere cluster on AWS. Launch the workload's containers on the cluster.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Download and run the Amazon EKS Anywhere installer on the company's managed infrastructure on premises. Create an Amazon EKS Anywhere cluster on premises. Launch the workload's containers on the cluster.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use the Amazon Elastic Container Service (Amazon ECS) control plane for an Amazon ECS Anywhere cluster. Install the ECS agent on the company's managed infrastructure on premises. Launch the workload's containers on the cluster.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#974",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company uses AWS Organizations for a multi-account setup in the AWS Cloud. The company uses AWS Control Tower for governance and uses AWS Transit Gateway for VPC connectivity across accounts.<br><br>In an AWS application account, the company's application team has deployed a web application that uses AWS Lambda and Amazon RDS. The company's database administrators have a separate DBA account and use the account to centrally manage all the databases across the organization. The database administrators use an Amazon EC2 instance that is deployed in the DBA account to access an RDS database that is deployed in the application account.<br><br>The application team has stored the database credentials as secrets in AWS Secrets Manager in the application account. The application team is manually sharing the secrets with the database administrators. The secrets are encrypted by the default AWS managed key for Secrets Manager in the application account. A solutions architect needs to implement a solution that gives the database administrators access to the database and eliminates the need to manually share the secrets.<br><br>Which solution will meet these requirements?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#974",
          answers: [
            {
              choice:
                "<p>A.  Use AWS Resource Access Manager (AWS RAM) to share the secrets from the application account with the DBA account. In the DBA account, create an IAM role that is named DBA-Admin. Grant the role the required permissions to access the shared secrets. Attach the DBA-Admin role to the EC2 instance for access to the cross-account secrets.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  In the application account, create an IAM role that is named DBA-Secret. Grant the role the required permissions to access the secrets. In the DBA account, create an IAM role that is named DBA-Admin. Grant the DBA-Admin role the required permissions to assume the DBA-Secret role in the application account. Attach the DBA-Admin role to the EC2 instance for access to the cross-account secrets.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  In the DBA account, create an IAM role that is named DBA-Admin. Grant the role the required permissions to access the secrets and the default AWS managed key in the application account. In the application account, attach resource-based policies to the key to allow access from the DBA account. Attach the DBA-Admin role to the EC2 instance for access to the cross-account secrets.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  In the DBA account, create an IAM role that is named DBA-Admin. Grant the role the required permissions to access the secrets in the application account. Attach an SCP to the application account to allow access to the secrets from the DBA account. Attach the DBA-Admin role to the EC2 instance for access to the cross-account secrets.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#975",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company implements a containerized application by using Amazon Elastic Container Service (Amazon ECS) and Amazon API Gateway. The application data is stored in Amazon Aurora databases and Amazon DynamoDB databases. The company automates infrastructure provisioning by using AWS CloudFormation. The company automates application deployment by using AWS CodePipeline.<br><br>A solutions architect needs to implement a disaster recovery (DR) strategy that meets an RPO of 2 hours and an RTO of 4 hours.<br><br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#975",
          answers: [
            {
              choice:
                "<p>A.  Set up an Aurora global database and DynamoDB global tables to replicate the databases to a secondary AWS Region. In the primary Region and in the secondary Region, configure an API Gateway API with a Regional endpoint. Implement Amazon CloudFront with origin failover to route traffic to the secondary Region during a DR scenario.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS Database Migration Service (AWS DMS), Amazon EventBridge (Amazon CloudWatch Events), and AWS Lambda to replicate the Aurora databases to a secondary AWS Region. Use DynamoDB Streams, EventBridge (CloudWatch Events), and Lambda to replicate the DynamoDB databases to the secondary Region. In the primary Region and in the secondary Region, configure an API Gateway API with a Regional endpoint. Implement Amazon Route 53 failover routing to switch traffic from the primary Region to the secondary Region.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use AWS Backup to create backups of the Aurora databases and the DynamoDB databases in a secondary AWS Region. In the primary Region and in the secondary Region, configure an API Gateway API with a Regional endpoint. Implement Amazon Route 53 failover routing to switch traffic from the primary Region to the secondary Region.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Set up an Aurora global database and DynamoDB global tables to replicate the databases to a secondary AWS Region. In the primary Region and in the secondary Region, configure an API Gateway API with a Regional endpoint. Implement Amazon Route 53 failover routing to switch traffic from the primary Region to the secondary Region.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#976",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is planning to migrate an Amazon RDS for Oracle database to an RDS for PostgreSQL DB instance in another AWS account. A solutions architect needs to design a migration strategy that will require no downtime and that will minimize the amount of time necessary to complete the migration. The migration strategy must replicate all existing data and any new data that is created during the migration. The target database must be identical to the source database at completion of the migration process.<br><br>All applications currently use an Amazon Route 53 CNAME record as their endpoint for communication with the RDS for Oracle DB instance. The RDS for Oracle DB instance is in a private subnet.<br><br>Which combination of steps should the solutions architect take to meet these requirements? (Choose three.)<br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: CEF</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#976",
          answers: [
            {
              choice:
                "<p>A.  Create a new RDS for PostgreSQL DB instance in the target account. Use the AWS Schema Conversion Tool (AWS SCT) to migrate the database schema from the source database to the target database.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use the AWS Schema Conversion Tool (AWS SCT) to create a new RDS for PostgreSQL DB instance in the target account with the schema and initial data from the source database.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure VPC peering between the VPCs in the two AWS accounts to provide connectivity to both DB instances from the target account. Configure the security groups that are attached to each DB instance to allow traffic on the database port from the VPC in the target account.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Temporarily allow the source DB instance to be publicly accessible to provide connectivity from the VPC in the target account. Configure the security groups that are attached to each DB instance to allow traffic on the database port from the VPC in the target account.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Use AWS Database Migration Service (AWS DMS) in the target account to perform a full load plus change data capture (CDC) migration from the source database to the target database. When the migration is complete, change the CNAME record to point to the target DB instance endpoint.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Use AWS Database Migration Service (AWS DMS) in the target account to perform a change data capture (CDC) migration from the source database to the target database. When the migration is complete, change the CNAME record to point to the target DB instance endpoint.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#977",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is running its solution on AWS in a manually created VPC. The company is using AWS CloudFormation to provision other parts of the infrastructure. According to a new requirement, the company must manage all infrastructure in an automatic way.<br><br>What should the company do to meet this new requirement with the LEAST effort?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#977",
          answers: [
            {
              choice:
                "<p>A.  Create a new AWS Cloud Development Kit (AWS CDK) stack that strictly provisions the existing VPC resources and configuration. Use AWS CDK to import the VPC into the stack and to manage the VPC. </p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a CloudFormation stack set that creates the VPC.  Use the stack set to import the VPC into the stack.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a new CloudFormation template that strictly provisions the existing VPC resources and configuration. From the CloudFormation console, create a new stack by importing the existing resources.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a new CloudFormation template that creates the VPC.  Use the AWS Serverless Application Model (AWS SAM) CLI to import the VPC. </p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#978",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is processing financial records in the AWS Cloud. Throughout the day, records are uploaded to an Amazon S3 bucket for processing. Every night at midnight, an application processes the records. The application runs on a set of Amazon EC2 instances and is invoked by a cron job on each instance. The application processes all the records in a total of approximately 60 minutes and stores the result in a second S3 bucket.<br><br>A solutions architect needs to modernize the application by implementing a solution that processes the records with the least possible operational overhead.<br><br>Which solution will meet these requirements?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#978",
          answers: [
            {
              choice:
                "<p>A.  Use an AWS Lambda function to process a single record. Create an AWS Step Functions state machine to invoke the Lambda function for each record. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to schedule the state machine to run at midnight.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Containerize the processing logic. Create an Amazon Elastic Kubernetes Service (Amazon EKS) cluster that runs in AWS Fargate mode. Configure an Amazon EventBridge (Amazon CloudWatch Events) rule to schedule invocation of the Fargate tasks at midnight.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use a single AWS Lambda function to process all the records. Use S3 Event Notifications to invoke the Lambda function at midnight.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Containerize the processing logic. Create an Amazon Elastic Container Service (Amazon ECS) cluster that runs in AWS Fargate mode. Configure Amazon Simple Notification Service (Amazon SNS) to schedule invocation of the Fargate tasks at midnight.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#979",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has PHP applications that run in containers and also has a MySQL database. The company wants to move the applications and the database from on premises to AWS. The company has millions of users and will need to manage shared application data between the containers.<br><br>The company needs a solution that will minimize operational overhead and cost. The solution also must be scalable and highly available.<br><br>Which solution will meet these requirements?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#979",
          answers: [
            {
              choice:
                "<p>A.  Deploy containers on Amazon Elastic Container Service (Amazon ECS). Set up the containers to run the tasks on Amazon EC2 instances. Choose Amazon Elastic File System (Amazon EFS) as the volume type. Deploy an Amazon RDS Multi-AZ DB instance with read replicas as the database solution.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Deploy containers on Amazon Elastic Container Service (Amazon ECS). Set up the containers to run the tasks on AWS Fargate. Choose Amazon Elastic File System (Amazon EFS) as the volume type. Deploy Amazon Aurora Serverless as the database solution.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Deploy containers on Amazon Elastic Kubernetes Service (Amazon EKS). Set up the containers to run the tasks on AWS Fargate. Choose Amazon S3 as the volume type. Deploy Amazon Aurora Serverless as the database solution.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Deploy containers on Amazon Elastic Container Service (Amazon ECS). Set up the containers to run the tasks on AWS Fargate. Choose Amazon Elastic Block Store (Amazon EBS) as the volume type. Deploy Amazon Aurora Serverless as the database solution.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#980",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is running a traditional web application on Amazon EC2 instances. The company needs to refactor the application as microservices that run on containers. Separate versions of the application exist in two distinct environments: production and testing. Load for the application is variable, but the minimum load and the maximum load are known. A solutions architect needs to design the updated application with a serverless architecture that minimizes operational complexity.<br><br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#980",
          answers: [
            {
              choice:
                "<p>A.  Upload the container images to AWS Lambda as functions. Configure a concurrency limit for the associated Lambda functions to handle the expected peak load. Configure two separate Lambda integrations within Amazon API Gateway: one for production and one for testing.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Upload the container images to Amazon Elastic Container Registry (Amazon ECR). Configure two auto scaled Amazon Elastic Container Service (Amazon ECS) clusters with the Fargate launch type to handle the expected load. Deploy tasks from the ECR images. Configure two separate Application Load Balancers to direct traffic to the ECS clusters.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Upload the container images to Amazon Elastic Container Registry (Amazon ECR). Configure two auto scaled Amazon Elastic Kubernetes Service (Amazon EKS) clusters with the Fargate launch type to handle the expected load. Deploy tasks from the ECR images. Configure two separate Application Load Balancers to direct traffic to the EKS clusters.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Upload the container images to AWS Elastic Beanstalk. In Elastic Beanstalk, create separate environments and deployments for production and testing. Configure two separate Application Load Balancers to direct traffic to the Elastic Beanstalk deployments.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#981",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company hosts an image-processing service in the AWS Cloud. The company uses a custom on-premises application to call the service from its on-premises systems over an AWS Direct Connect connection. The application sends image-processing requests to software that is hosted on Amazon EC2 instances. The image data is embedded within the requests. The EC2 instances are in an Auto Scaling group and run behind a Network Load Balancer (NLB). The Auto Scaling group has a minimum capacity of two instances.<br><br>The company is receiving tens of thousands of image-processing requests at the same time each day and is experiencing errors. The processing of the requests is not time critical. For much of the day, the application sends no requests.<br><br>The company wants to improve the application's reliability and minimize the number of failed image-processing requests. The company also wants to reduce cost.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#981",
          answers: [
            {
              choice:
                "<p>A.  Add a target tracking scaling policy based on a memory utilization metric that has a target value of 90%. Configure the Auto Scaling group to use additional Spot Instances when scaling events occur.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Change the application to upload the images to Amazon S3. Configure Amazon Simple Queue Service (Amazon SQS) notifications for object uploads. Rewrite the image-processing code that runs on the EC2 instances to receive SQS messages with the object reference so that the messages are processed asynchronously. Remove the NLB. </p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an AWS Lambda function that includes the image-processing logic. Deploy the Lambda function in the VPC that hosts the EC2 instances. Update the target group on the NLB to invoke the Lambda function.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an AWS Lambda function that includes the image-processing logic. Change the application to upload the images to Amazon S3. Configure Amazon Simple Notification Service (Amazon SNS) notifications for object uploads with a retry policy to invoke the Lambda function. Remove the NLB. </p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#982",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A retail company has an on-premises data center in Europe. The company also has a multi-Region AWS presence that includes the eu-west-1 and us-east-1 Regions. The company wants to be able to route network traffic from its on-premises infrastructure into VPCs in either of those Regions. The company also needs to support traffic that is routed directly between VPCs in those Regions. No single points of failure can exist on the network.<br><br>The company already has created two 1 Gbps AWS Direct Connect connections from its on-premises data center. Each connection goes into a separate Direct Connect location in Europe for high availability. These two locations are named DX-A and DX-B, respectively. Each Region has a single AWS Transit Gateway that is configured to route all inter-VPC traffic within that Region.<br><br>Which solution will meet these requirements?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#982",
          answers: [
            {
              choice:
                "<p>A.  Create a private VIF from the DX-A connection into a Direct Connect gateway. Create a private VIF from the DX-B connection into the same Direct Connect gateway for high availability. Associate both the eu-west-1 and us-east-1 transit gateways with the Direct Connect gateway. Peer the transit gateways with each other to support cross-Region routing.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a transit VIF from the DX-A connection into a Direct Connect gateway. Associate the eu-west-1 transit gateway with this Direct Connect gateway. Create a transit VIF from the DX-B connection into a separate Direct Connect gateway. Associate the us-east-1 transit gateway with this separate Direct Connect gateway. Peer the Direct Connect gateways with each other to support high availability and cross-Region routing.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a transit VIF from the DX-A connection into a Direct Connect gateway. Create a transit VIF from the DX-B connection into the same Direct Connect gateway for high availability. Associate both the eu-west-1 and us-east-1 transit gateways with this Direct Connect gateway. Configure the Direct Connect gateway to route traffic between the transit gateways.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a transit VIF from the DX-A connection into a Direct Connect gateway. Create a transit VIF from the DX-B connection into the same Direct Connect gateway for high availability. Associate both the eu-west-1 and us-east-1 transit gateways with this Direct Connect gateway. Peer the transit gateways with each other to support cross-Region routing.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#983",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company uses an AWS CloudFormation template to deploy an Amazon Elastic Container Service (Amazon ECS) service into a production environment. The template includes an Amazon S3 bucket that is named by using a common prefix with the CloudFormation stack name.<br><br>The company uses the same template to create temporary environments for development and continuous integration. Developers can create environments successfully, but they receive errors from CloudFormation when they attempt to delete the environments. The developers often need to delete and recreate stacks with the same names as part of the development and testing process.<br><br>Which combination of steps should a solutions architect take to modify the solution to resolve this issue? (Choose two.)<br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: AD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#983",
          answers: [
            {
              choice:
                "<p>A.  Associate an AWS Lambda function with a CloudFormation custom resource to delete all keys that are present in a given S3 bucket. Implement this custom resource as part of the application's CloudFormation template.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Modify the S3 bucket resource in the CloudFormation template by specifying Delete for the DeletionPolicy attribute. Specify the CAPABILITY_DELETE_NONEMPTY capability to process CloudFormation delete operations.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Modify the S3 bucket resource in the CloudFormation template by specifying Retain for the DeletionPolicy attribute. Configure an AWS Config custom rule to run every 24 hours to identify, empty, and delete buckets that are no longer owned by a CloudFormation stack.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Ensure that CloudFormation operations are being invoked by a role that has s3:DeleteObject permissions on all objects in the bucket.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Modify the S3 bucket resource in the CloudFormation template to configure a bucket policy that grants s3:DeleteObject permissions on all objects in the bucket.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#984",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company wants to move its three-stage web application to the AWS Cloud. The three stages are development, test, and production. Each stage must use its own dedicated VPC. The company wants to access the stages through IPsec connections from the company's main office location.<br><br>Which combination of steps should a solutions architect implement in the network design to meet these requirements? (Choose three.)<br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: ADF</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#984",
          answers: [
            {
              choice:
                "<p>A.  Create a dedicated networking VPC that includes a virtual private gateway.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a transit gateway. Attach all the VPCs to the transit gateway.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create security groups in each VPC to control access to and from the application resources.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a customer gateway. Create a VPN connection. Attach the VPN connection to the transit gateway by specifying the customer gateway.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Create a customer gateway. Create a VPN connection. Attach the VPN connection to the virtual private gateway by specifying the customer gateway.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Create security groups for the transit gateway to control network access to the application resources.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#985",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company needs to move its write-intensive Amazon RDS for PostgreSQL database from the eu-west-1 Region to the eu-north-1 Region. As part of the migration, the company needs to change from Amazon RDS for PostgreSQL to Amazon Aurora PostgreSQL.<br><br>The company is using a new AWS account to host a new Aurora PostgreSQL DB cluster. The RDS database is encrypted with an AWS managed AWS Key Management Service (AWS KMS) key. There must be no interruption to applications that use the RDS for PostgreSQL DB instance.<br><br>Which solution will meet these requirements?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#985",
          answers: [
            {
              choice:
                "<p>A.  Create VPC peering between the VPCs in both accounts. Take a snapshot of the RDS DB instance. Export the snapshot to Amazon S3. Create an S3 gateway endpoint. Use the S3 sync command for ongoing synchronization of data. Restore the snapshot from Amazon S3 in the Aurora account. Migrate the snapshot to the Aurora DB cluster.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create VPC peering between the VPCs in both accounts. Import the AWS managed KMS key to the Aurora account. Take a snapshot of the RDS DB instance. Share the snapshot with the Aurora account. Copy the shared snapshot to eu-north-1 in the Aurora account. Migrate the shared snapshot to the Aurora DB cluster. Use AWS Database Migration Service (AWS DMS) with ongoing replication to complete the migration.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create VPC peering between the VPCs in both accounts. Copy the AWS managed KMS key to the Aurora account. Create an Aurora cross-Region read replica of the RDS DB instance in the Aurora account. Promote the read replica from standby DB instance to primary DB instance.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create VPC peering between the VPCs in both accounts. Create a multi-Region customer managed KMS key in the RDS account, and share the key with the Aurora account. Modify the cluster to use the customer managed KMS key. Take a snapshot of the RDS DB instance. Share the snapshot with the Aurora account. Copy the shared snapshot to eu-north-1 in the Aurora account. Migrate the shared snapshot to the Aurora DB cluster. Use AWS Database Migration Service (AWS DMS) with ongoing replication to complete the migration.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#986",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company uses AWS Organizations to manage multiple AWS accounts. The accounts share an Amazon Simple Queue Service (Amazon SQS) queue. The SQS queue is also shared with other AWS accounts outside the organization. All internal and external accounts have access to send and receive messages according to a permissions policy that is attached to the SQS queue. The company wants to identify any external principals that have access to the SQS queue.<br><br>How should a solutions architect meet this requirement?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#986",
          answers: [
            {
              choice:
                "<p>A.  Set up an AWS CloudTrail trail that logs data events. Use CloudTrail logs to track Amazon SQS API activities by any external principals.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use an AWS Identity and Access Management Access Analyzer to create an analyzer with the current organization as a zone of trust. Filter by external findings on the SQS queue.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Set up an AWS CloudTrail trail that logs management events. Use CloudTrail logs to track Amazon SQS API activities by any external principals.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use AWS Identity and Access Management Access Analyzer to create an analyzer with the current account as a zone of trust. Filter by external findings on the SQS queue.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#987",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company wants to retire its Oracle Solaris NFS storage arrays. The company requires rapid data migration over its internet network connection to a combination of destinations for Amazon S3, Amazon Elastic File System (Amazon EFS), and Amazon FSx for Windows File Server. The company also requires a full initial copy, as well as incremental transfers of changes until the retirement of the storage arrays. All data must be encrypted and checked for integrity.<br><br>What should a solutions architect recommend to meet these requirements?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#987",
          answers: [
            {
              choice:
                "<p>A.  Configure CloudEndure. Create a project and deploy the CloudEndure agent and token to the storage array. Run the migration plan to start the transfer.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Configure AWS DataSync. Configure the DataSync agent and deploy it to the local network. Create a transfer task and start the transfer.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure the aws S3 sync command. Configure the AWS client on the client side with credentials. Run the sync command to start the transfer.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure AWS Transfer for FTP. Configure the FTP client with credentials. Script the client to connect and sync to start the transfer.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#988",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company wants to use Amazon S3 for object storage. Users must be able to access the objects from devices that are connected to their on-premises private network or Amazon EC2 instances. The company has configured AWS Direct Connect and AWS Site-to-Site VPN as a backup. The company does not want to route S3 traffic over the public Internet. The company also requires all data that is stored in S3 buckets to be appropriately classified by data type with a tag named DataClassification.<br><br>Which combination of steps should a solutions architect take to meet these requirements? (Choose three.)<br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: ADF</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#988",
          answers: [
            {
              choice:
                "<p>A.  Configure a gateway VPC endpoint to securely route traffic from on premises to the S3 buckets. Configure an interface VPC endpoint to route traffic between the S3 buckets and EC2 instances over the AWS private network.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Configure an interface VPC endpoint to securely route traffic from on premises to the S3 buckets. Configure a gateway VPC endpoint to route traffic between the S3 buckets and EC2 instances over the AWS private network.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure Amazon GuardDuty to identify S3 buckets that are missing the DataClassification tag. Create an Amazon Simple Notification Service (Amazon SNS) topic. Deliver notifications to the topic whenever an untagged S3 bucket is identified.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure AWS Security Hub to identify S3 buckets that are missing the DataClassification tag. Create an Amazon Simple Notification Service (Amazon SNS) topic. Deliver notifications to the topic whenever an untagged S3 bucket is identified.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Configure AWS Config to identify S3 buckets that are missing the DataClassification tag. Generate a report of all resources that AWS Config identifies as missing the tag.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Configure Amazon Macie to scan all S3 buckets in the account on a scheduled basis. Integrate Macie with Amazon EventBridge (Amazon CloudWatch Events). Create an AWS Lambda function to validate the data classification inferred by Macie and to add the missing tag.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#989",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is developing a new game app for mobile devices. The app has two user tiers: one tier for free-play users and another tier for premium users.<br><br>The company currently uses custom identity authentication across its apps. The company wants to continue to use custom authentication if possible. However, the company's custom identity provider (IdP) is not compatible with either the SAML or Open ID Connect (OIDC) standards. A solutions architect needs to design an authentication approach that makes it easy to transition free-play users to premium users.<br><br>Which design will meet these requirements with the LEAST development effort?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#989",
          answers: [
            {
              choice:
                "<p>A.  Create a single Amazon Cognito identity pool. Develop an authentication provider for the pool that calls the existing custom IdP. Implement two separate authentication flows in the mobile app: one for the free-play users and one for the premium users.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an Amazon Cognito user pool for the premium users. Add a user pool sign-in through the custom IdP. Create a second Amazon Cognito user pool to provide guest access for the free-play users.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create two Amazon Cognito identity pools. Develop an authentication provider for the premium user identity pool that calls the existing custom IdP. For the second identity pool, configure an authentication flow for the free-play users.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a single Amazon Cognito user pool. Add a user pool sign-in through the custom IdP. Set up Amazon Cognito guest access in the same user pool for the free-play users.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#990",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has an Amazon S3 bucket that contains millions of unencrypted objects. To comply with a recent security audit, a solutions architect needs to ensure that all objects are encrypted and needs to compile a list of objects that contain sensitive data. Many applications access objects in the S3 bucket, and the development team has limited resources.<br><br>Which solution will meet these requirements with the LEAST development effort?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#990",
          answers: [
            {
              choice:
                "<p>A.  Run an Amazon Inspector report on the S3 bucket to identify sensitive data. Create a new S3 bucket with default encryption enabled. Transfer the unencrypted objects to the new S3 bucket. Update the applications to access the new S3 bucket.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Run an Amazon Macie report on the S3 bucket to identify sensitive data. Create a new S3 bucket with default encryption enabled. Transfer the unencrypted objects to the new S3 bucket. Update the applications to access the new S3 bucket.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Run an Amazon Inspector report against the S3 bucket to identify sensitive data. Modify the S3 bucket to enable default encryption. Use an Amazon S3 Inventory report and Amazon S3 Batch Operations to encrypt the existing unencrypted objects in the same S3 bucket.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Run an Amazon Macie report on the S3 bucket to identify sensitive data. Modify the S3 bucket to enable default encryption. Use an S3 Inventory report and S3 Batch encrvnt the existing unencrypted objects in the same S3 bucket.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#991",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is hosting a critical application on a single Amazon EC2 instance. The application uses an Amazon ElastiCache for Redis single-node cluster for an in-memory data store. The application uses an Amazon RDS for MariaDB DB instance for a relational database. For the application to function, each piece of the infrastructure must be healthy and must be in an active state.<br><br>A solutions architect needs to improve the application's architecture so that the infrastructure can automatically recover from failure with the least possible downtime.<br><br>Which combination of steps will meet these requirements? (Choose three.)<br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: ACD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#991",
          answers: [
            {
              choice:
                "<p>A.  Use an Elastic Load Balancer to distribute traffic across multiple EC2 instances. Ensure that the EC2 instances are part of an Auto Scaling group that has a minimum capacity of two instances.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use an Elastic Load Balancer to distribute traffic across multiple EC2 instances. Ensure that the EC2 instances are configured in unlimited mode.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Modify the DB instance to create a read replica in the same Availability Zone. Promote the read replica to be the primary DB instance in failure scenarios.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Modify the DB instance to create a Multi-AZ deployment that extends across two Availability Zones.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Create a replication group for the ElastiCache for Redis cluster. Configure the cluster to use an Auto Scaling group that has a minimum capacity of two instances.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#992",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company runs an unauthenticated static website (www.example.com) that includes a registration form for users. The website uses Amazon S3 for hosting and uses Amazon CloudFront as the content delivery network with AWS WAF configured. When the registration form is submitted, the website calls an Amazon API Gateway API endpoint that invokes an AWS Lambda function to process the payload and forward the payload to an external API call.<br><br>During testing, a solutions architect encounters a cross-origin resource sharing (CORS) error. The solutions architect confirms that the CloudFront distribution origin has the Access-Control-Allow-Origin header set to www.example.com.<br><br>What should the solutions architect do to resolve the error?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#992",
          answers: [
            {
              choice:
                "<p>A.  Change the CORS configuration on the S3 bucket. Add rules for CORS to the AllowedOrigin element for www.example.com.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Enable the CORS setting in AWS WAF.  Create a web ACL rule in which the Access-Control-Allow-Origin header is set to www.example.com.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Enable the CORS setting on the API Gateway API endpoint. Ensure that the API endpoint is configured to return all responses that have the Access-Control-Allow-Origin header set to www.example.com.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Enable the CORS setting on the Lambda function. Ensure that the return code of the function has the Access-Control-Allow-Origin header set to www.example.com.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#993",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is using an organization in AWS Organizations to manage AWS accounts. For each new project, the company creates a new linked account. After the creation of a new account, the root user signs in to the new account and creates a service request to increase the service quota for Amazon EC2 instances. A solutions architect needs to automate this process.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#993",
          answers: [
            {
              choice:
                "<p>A.  Create an Amazon EventBridge (Amazon CloudWatch Events) rule to detect creation of a new account. Send the event to an Amazon Simple Notification Service (Amazon SNS) topic that invokes an AWS Lambda function. Configure the Lambda function to run the request-service-quota-increase command to request a service quota increase for EC2 instances.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a Service Quotas request template in the management account. Configure the desired service quota increases for EC2 instances.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an AWS Config rule in the management account to set the service quota for EC2 instances. Q</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an Amazon EventBridge (Amazon CloudWatch Events) rule to detect creation of a new account. Send the event to an Amazon Simple Notification Service (Amazon SNS) topic that invokes an AWS Lambda function. Configure the Lambda function to run the create-case command to request a service quota increase for EC2 instances.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#994",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company wants to record key performance indicators (KPIs) from its application as part of a strategy to convert to a user-based licensing schema. The application is a multi-tier application with a web-based UI. The company saves all log files to Amazon CloudWatch by using the CloudWatch agent. All logins to the application are saved in a log file.<br><br>As part of the new license schema, the company needs to find out how many unique users each client has on a daily basis, weekly basis, and monthly basis.<br><br>Which solution will provide this information with the LEAST change to the application?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#994",
          answers: [
            {
              choice:
                "<p>A.  Configure an Amazon CloudWatch Logs metric filter that saves each successful login as a metric. Configure the user name and client name as dimensions for the metric.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Change the application logic to make each successful login generate a call to the AWS SDK to increment a custom metric that records user name and client name dimensions in CloudWatch.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure the CloudWatch agent to extract successful login metrics from the logs. Additionally, configure the CloudWatch agent to save the successful login metrics as a custom metric that uses the user name and client name as dimensions for the metric.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure an AWS Lambda function to consume an Amazon CloudWatch Logs stream of the application logs. Additionally, configure the Lambda function to increment a custom CloudWatch that uses the user name and client name as dimensions for the metric.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#995",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company's solutions architect is reviewing a web application that runs on AWS. The application references static assets in an Amazon S3 bucket in the us-east-1 Region. The company needs resiliency across multiple AWS Regions. The company already has created an S3 bucket in a second Region.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#995",
          answers: [
            {
              choice:
                "<p>A.  Configure the application to write each object to both S3 buckets. Set up an Amazon Route 53 public hosted zone with a record set by using a weighted routing policy for each S3 bucket. Configure the application to reference the objects by using the Route 53 DNS name.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an AWS Lambda function to copy objects from the S3 bucket in us-east-1 to the S3 bucket in the second Region. Invoke the Lambda function each time an object is written to the S3 bucket in us-east-1. Set up an Amazon CloudFront distribution with an origin group that contains the two S3 buckets as origins.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure replication on the S3 bucket in us-east-1 to replicate objects to the S3 bucket in the second Region. Set up an Amazon CloudFront distribution with an origin group that contains the two S3 buckets as origins.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure replication on the S3 bucket in us-east-1 to replicate objects to the S3 bucket in the second Region. If Lawyer is required, update the application code to load S3 objects from the S3 bucket in the second Region.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#996",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company uses AWS Organizations to manage its AWS accounts. A solutions architect must design a solution in which only administrator roles are allowed to use IAM actions. However, the solutions architect does not have access to all the AWS accounts throughout the company.<br><br>Which solution meets these requirements with the LEAST operational overhead?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#996",
          answers: [
            {
              choice:
                "<p>A.  Create an SCP that applies to all the AWS accounts to allow IAM actions only for administrator roles. Apply the SCP to the root OU.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Configure AWS CloudTrail to invoke an AWS Lambda function for each event that is related to IAM actions. Configure the function to deny the action if the user who invoked the action is not an administrator.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an SCP that applies to all the AWS accounts to deny IAM actions for all users except for those with administrator roles. Apply the SCP to the root OU.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Set an IAM permissions boundary that allows IAM actions. Attach the permissions boundary to every administrator role across all the AWS accounts.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#997",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is using many Amazon S3 buckets to hold confidential data. Some of the S3 buckets are riot encrypted. The company wants to use AWS Key Management Service (AWS KMS) customer managed keys to encrypt the S3 buckets. The company wants a solution that will detect any S3 buckets that are not encrypted and apply AWS KMS encryption to each noncompliant S3 bucket.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#997",
          answers: [
            {
              choice:
                "<p>A.  Configure the s3-default-encryption-kms AWS Config managed rule with manual remediation to check for AWS KMS encryption on the S3 buckets. Modify the properties of the noncompliant S3 buckets to turn on AWS KMS encryption.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Configure a custom AWS Config rule with manual remediation to check for AWS KMS encryption on the S3 buckets. Modify the properties of the noncompliant buckets to turn on AWS KMS encryption.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure the s3-default-encryption-kms AWS Config managed rule. Create an automatic remediation script for the rule that will turn on AWS KMS encryption for any noncompliant buckets.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure a custom AWS Config rule to check for AWS KMS encryption on the S3 buckets. Create an automatic remediation script for the rule that will turn on AWS KMS encryption for any noncompliant buckets.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#998",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company needs to migrate two individual applications from on premises to AWS:<br><br>• The first application is a legacy custom application that is hosted on a physical Windows server. The application source code is no longer available. The application has little documentation, has hardcoded operating system configuration settings, and is used by an external third party.<br>• The second application is an IBM Db2 database that is hosted on a single Linux VM that uses network-attached storage (NAS) to store the database data. The company uses this database internally for employee records.<br><br>The applications are hosted in a data center that the company plans to decommission in 90 days. Where possible, the company must use managed AWS services.<br><br>Which actions for migration should a solutions architect recommend to meet these requirements? (Choose two.)<br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: AE</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#998",
          answers: [
            {
              choice:
                "<p>A.  Migrate the Windows server with the legacy application to Amazon EC2 by using AWS Application Migration Service (CloudEndure Migration).</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Migrate the Linux VM with the IBM Db2 database service to an Amazon EC2 instance by using AWS Application Migration Service (CloudEndure Migration).</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Migrate the Windows server with the legacy application to Amazon EC2 by using AWS Server Migration Service (AWS SMS).</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Migrate the IBM Db2 database data to Amazon RDS for MySQL by using AWS Database Migration Service (AWS DMS) and the AWS Schema Conversion Tool replication agent.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Migrate the IBM Db2 database data to Amazon RDS for MySQL by using AWS DataSync and the AWS Schema Conversion Tool data extraction agent.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#999",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect needs to improve an application that is hosted in the AWS Cloud. The application uses an Amazon Aurora MySQL DB instance that is experiencing overloaded connections. Most of the application's operations insert records into the database. The application currently stores credentials in a text-based configuration file.<br><br>The solutions architect needs to implement a solution so that the application can handle the current connection load. The solution must keep the credentials secure and must provide the ability to rotate the credentials automatically on a regular basis.<br><br>Which solution will meet these requirements?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#999",
          answers: [
            {
              choice:
                "<p>A.  Deploy an Amazon RDS Proxy layer in front of the DB instance. Store the connection credentials as a secret in AWS Secrets Manager.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Deploy an Amazon RDS Proxy layer in front of the DB instance. Store the connection credentials in AWS Systems Manager Parameter Store.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an Aurora Replica. Store the connection credentials as a secret in AWS Secrets Manager.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an Aurora Replica. Store the connection credentials in AWS Systems Manager Parameter Store.</p>",
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
