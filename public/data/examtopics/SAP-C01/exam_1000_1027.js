var ExamTopic_1000_1027 = {
  msg: "Exam Topic 1000 - 1027",
  data: [
    {
      question_id: "#1000",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company wants to establish a dedicated connection between its on-premises infrastructure and AWS. The company is setting up a 1 Gbps AWS Direct Connect connection to its account VPC. The architecture includes a transit gateway and a Direct Connect gateway to connect multiple VPCs and the on-premises infrastructure.<br><br>The company must connect to VPC resources over a transit VIF by using the Direct Connect connection.<br><br>Which combination of steps will meet these requirements? (Choose two.)<br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BC</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#1000",
          answers: [
            {
              choice:
                "<p>A.  Update the 1 Gbps Direct Connect connection to 10 Gbps.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Advertise the on-premises network prefixes over the transit VIF. </p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Advertise the VPC prefixes from the Direct Connect gateway to the on-premises network over the transit VIF. </p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Update the Direct Connect connection's MACsec encryption mode attribute to must_encrypt.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Associate a MACsec Connection Key Name/Connectivity Association Key (CKN/CAK) pair with the Direct Connect connection.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#1001",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company's solutions architect needs to provide secure Remote Desktop connectivity to users for Amazon EC2 Windows instances that are hosted in a VPC. The solution must integrate centralized user management with the company's on-premises Active Directory. Connectivity to the VPC is through the internet. The company has hardware that can be used to establish an AWS Site-to-Site VPN connection.<br><br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#1001",
          answers: [
            {
              choice:
                "<p>A.  Deploy a managed Active Directory by using AWS Directory Service for Microsoft Active Directory. Establish a trust with the on-premises Active Directory. Deploy an EC2 instance as a bastion host in the VPC.  Ensure that the EC2 instance is joined to the domain. Use the bastion host to access the target instances through RDP.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Configure AWS Single Sign-On to integrate with the on-premises Active Directory by using the AWS Directory Service for Microsoft Active Directory AD Connector. Configure permission sets against user groups for access to AWS Systems Manager. Use Systems Manager Fleet Manager to access the target instances through RDP.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Implement a VPN between the on-premises environment and the target VPEnsure that the target instances are joined to the on-premises Active Directory domain over the VPN connection. Configure RDP access through the VPN. Connect from the company's network to the target instances.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Deploy a managed Active Directory by using AWS Directory Service for Microsoft Active Directory. Establish a trust with the on-premises Active Directory. Deploy a Remote Desktop Gateway on AWS by using an AWS Quick Start. Ensure that the Remote Desktop Gateway is joined to the domain. Use the Remote Desktop Gateway to access the target instances through RDP.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#1002",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company uses AWS Organizations to manage its AWS accounts. The company needs a list of all its Amazon EC2 instances that have underutilized CPU or memory usage. The company also needs recommendations for how to downsize these underutilized instances.<br><br>Which solution will meet these requirements with the LEAST effort?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#1002",
          answers: [
            {
              choice:
                "<p>A.  Install a CPU and memory monitoring tool from AWS Marketplace on all the EC2 instances. Store the findings in Amazon S3. Implement a Python script to identify underutilized instances. Reference EC2 instance pricing information for recommendations about downsizing options.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Install the Amazon CloudWatch agent on all the EC2 instances by using AWS Systems Manager. Retrieve the resource optimization recommendations from AWS Cost Explorer in the organization's management account. Use the recommendations to downsize underutilized instances in all accounts of the organization.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Install the Amazon CloudWatch agent on all the EC2 instances by using AWS Systems Manager. Retrieve the resource optimization recommendations from AWS Cost Explorer in each account of the organization. Use the recommendations to downsize underutilized instances in all accounts of the organization.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Install the Amazon CloudWatch agent on all the EC2 instances by using AWS Systems Manager. Create an AWS Lambda function to extract CPU and memory usage from all the EC2 instances. Store the findings as files in Amazon S3. Use Amazon Athena to find underutilized instances. Reference EC2 instance pricing information for recommendations about downsizing options.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#1003",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company uses an on-premises data analytics platform. The system is highly available in a fully redundant configuration across 12 servers in the company's data center.<br><br>The system runs scheduled jobs, both hourly and daily, in addition to one-time requests from users. Scheduled jobs can take between 20 minutes and 2 hours to finish running and have tight SLAs. The scheduled jobs account for 65% of the system usage. User jobs typically finish running in less than 5 minutes and have no SLA. The user jobs account for 35% of system usage. During system failures, scheduled jobs must continue to meet SLAs. However, user jobs can be delayed.<br><br>A solutions architect needs to move the system to Amazon EC2 instances and adopt a consumption-based model to reduce costs with no long-term commitments. The solution must maintain high availability and must not affect the SLAs.<br><br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#1003",
          answers: [
            {
              choice:
                "<p>A.  Split the 12 instances across two Availability Zones in the chosen AWS Region. Run two instances in each Availability Zone as On-Demand Instances with Capacity Reservations. Run four instances in each Availability Zone as Spot Instances.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Split the 12 instances across three Availability Zones in the chosen AWS Region. In one of the Availability Zones, run all four instances as On-Demand Instances with Capacity Reservations. Run the remaining instances as Spot Instances.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Split the 12 instances across three Availability Zones in the chosen AWS Region. Run two instances in each Availability Zone as On-Demand Instances with a Savings Plan. Run two instances in each Availability Zone as Spot Instances.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Split the 12 instances across three Availability Zones in the chosen AWS Region. Run three instances in each Availability Zone as On-Demand Instances with Capacity Reservations. Run one instance in each Availability Zone as a Spot Instance.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#1004",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company operates a fleet of servers on premises and operates a fleet of Amazon EC2 instances in its organization in AWS Organizations. The company's AWS accounts contain hundreds of VPCs. The company wants to connect its AWS accounts to its on-premises network. AWS Site-to-Site VPN connections are already established to a single AWS account. The company wants to control which VPCs can communicate with other VPCs.<br><br>Which combination of steps will achieve this level of control with the LEAST operational effort? (Choose three.)<br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BCD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#1004",
          answers: [
            {
              choice:
                "<p>A.  Create a transit gateway in an AWS account. Share the transit gateway across accounts by using AWS Resource Access Manager (AWS RAM).</p>",
              correct: false,
              feedback: "",
            },
            {
              choice: "<p>B.  Configure attachments to all VPCs and VPNs.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Set up transit gateway route tables. Associate the VPCs and VPNs with the route tables.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice: "<p>D.  Configure VPC peering between the VPCs.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Configure attachments between the VPCs and VPNs.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice: "<p>F.  Set up route tables on the VPCs and VPNs.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#1005",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company recently deployed an application on AWS. The application uses Amazon DynamoDB. The company measured the application load and configured the RCUs and WCUs on the DynamoDB table to match the expected peak load. The peak load occurs once a week for a 4-hour period and is double the average load. The application load is close to the average load for the rest of the week. The access pattern includes many more writes to the table than reads of the table.<br><br>A solutions architect needs to implement a solution to minimize the cost of the table.<br><br>Which solution will meet these requirements?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#1005",
          answers: [
            {
              choice:
                "<p>A.  Use AWS Application Auto Scaling to increase capacity during the peak period. Purchase reserved RCUs and WCUs to match the average load.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Configure on-demand capacity mode for the table.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure DynamoDB Accelerator (DAX) in front of the table. Reduce the provisioned read capacity to match the new peak load on the table.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure DynamoDB Accelerator (DAX) in front of the table. Configure on-demand capacity mode for the table.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#1006",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect is auditing the security setup of an AWS Lambda function for a company. The Lambda function retrieves the latest changes from an Amazon Aurora database. The Lambda function and the database run in the same VPC. Lambda environment variables are providing the database credentials to the Lambda function.<br><br>The Lambda function aggregates data and makes the data available in an Amazon S3 bucket that is configured for server-side encryption with AWS KMS managed encryption keys (SSE-KMS). The data must not travel across the internet. If any database credentials become compromised, the company needs a solution that minimizes the impact of the compromise.<br><br>What should the solutions architect recommend to meet these requirements?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#1006",
          answers: [
            {
              choice:
                "<p>A.  Enable IAM database authentication on the Aurora DB cluster. Change the IAM role for the Lambda function to allow the function to access the database by using IAM database authentication. Deploy a gateway VPC endpoint for Amazon S3 in the VPC. </p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Enable IAM database authentication on the Aurora DB cluster. Change the IAM role for the Lambda function to allow the function to access the database by using IAM database authentication. Enforce HTTPS on the connection to Amazon S3 during data transfers.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Save the database credentials in AWS Systems Manager Parameter Store. Set up password rotation on the credentials in Parameter Store. Change the IAM role for the Lambda function to allow the function to access Parameter Store. Modify the Lambda function to retrieve the credentials from Parameter Store. Deploy a gateway VPC endpoint for Amazon S3 in the VPC. </p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Save the database credentials in AWS Secrets Manager. Set up password rotation on the credentials in Secrets Manager. Change the IAM role for the Lambda function to allow the function to access Secrets Manager. Modify the Lambda function to retrieve the credentials Om Secrets Manager. Enforce HTTPS on the connection to Amazon S3 during data transfers.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#1007",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is developing and hosting several projects in the AWS Cloud. The projects are developed across multiple AWS accounts under the same organization in AWS Organizations. The company requires the cost for cloud infrastructure to be allocated to the owning project. The team responsible for all of the AWS accounts has discovered that several Amazon EC2 instances are lacking the Project tag used for cost allocation.<br><br>Which actions should a solutions architect take to resolve the problem and prevent it from happening in the future? (Choose three.)<br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: CEF</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#1007",
          answers: [
            {
              choice:
                "<p>A.  Create an AWS Config rule in each account to find resources with missing tags.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an SCP in the organization with a deny action for ec2:Runlnstances if the Project tag is missing.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use Amazon Inspector in the organization to find resources with missing tags.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an IAM policy in each account with a deny action for ec2:Runlnstances if the Project tag is missing.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Create an AWS Config aggregator for the organization to collect a list of EC2 instances with the missing Project tag.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Use AWS Security Hub to aggregate a list of EC2 instances with the missing Project tag.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#1008",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company that uses AWS Organizations is creating several new AWS accounts. The company is setting up controls to properly allocate AWS costs to business units. The company must implement a solution to ensure that all resources include a tag that has a key of costcenter and a value from a predefined list of business units. The solution must send a notification each time a resource tag does not meet these criteria. The solution must not prevent the creation of resources.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#1008",
          answers: [
            {
              choice:
                "<p>A.  Create an IAM policy for all actions that create AWS resources. Add a condition to the policy that aws:RequestTag/costcenter must exist and must contain a valid business unit value. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that monitors IAM service events and Amazon EC2 service events for noncompliant tag policies. Configure the rule to send notifications through Amazon Simple Notification Service (Amazon SNS).</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an IAM policy for all actions that create AWS resources. Add a condition to the policy that aws:ResourceTag/costcenter must exist and must contain a valid business unit value. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that monitors IAM service events and Amazon EC2 service events for noncompliant tag policies. Configure the rule to send notifications through Amazon Simple Notification Service (Amazon SNS).</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an organization tag policy that ensures that all resources have the costcenter tag with a valid business unit value. Do not select the option to prevent operations when tags are noncompliant. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that monitors all events for noncompliant tag policies. Configure the rule to send notifications through Amazon Simple Notification Service (Amazon SNS).</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an organization tag policy that ensures that all resources have the costcenter tag with a valid business unit value. Select the option to prevent operations when tags are noncompliant. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that monitors all events for noncompliant tag policies. Configure the rule to send notifications through Amazon Simple Notification Service (Amazon SNS).</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#1009",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>An international delivery company hosts a delivery management system on AWS. Drivers use the system to upload confirmation of delivery. Confirmation includes the recipient's signature or a photo of the package with the recipient. The driver's handheld device uploads signatures and photos through FTP to a single Amazon EC2 instance. Each handheld device saves a file in a directory based on the signed-in user, and the file name matches the delivery number. The EC2 instance then adds metadata to the file after querying a central database to pull delivery information. The file is then placed in Amazon S3 for archiving.<br><br>As the company expands, drivers report that the system is rejecting connections. The FTP server is having problems because of dropped connections and memory issues. In response to these problems, a system engineer schedules a cron task to reboot the EC2 instance every 30 minutes. The billing team reports that files are not always in the archive and that the central system is not always updated.<br><br>A solutions architect needs to design a solution that maximizes scalability to ensure that the archive always receives the files and that systems are always updated. The handheld devices cannot be modified, so the company cannot deploy a new application.<br><br>Which solution will meet these requirements?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#1009",
          answers: [
            {
              choice:
                "<p>A.  Create an AMI of the existing EC2 instance. Create an Auto Scaling group of EC2 instances behind an Application Load Balancer. Configure the Auto Scaling group to have a minimum of three instances.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS Transfer Family to create an FTP server that places the files in Amazon Elastic File System (Amazon EFS). Mount the EFS volume to the existing EC2 instance. Point the EC2 instance to the new path for file processing.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use AWS Transfer Family to create an FTP server that places the files in Amazon S3. Use an S3 event notification through Amazon Simple Notification Service (Amazon SNS) to invoke an AWS Lambda function. Configure the Lambda function to add the metadata and update the delivery system.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Update the handheld devices to place the files directly in Amazon S3. Use an S3 event notification through Amazon Simple Queue Service (Amazon SQS) to invoke an AWS Lambda function. Configure the Lambda function to add the metadata and update the delivery system.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#1010",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company needs to deploy its document storage application across two AWS Regions. The company is storing PDF documents that have an average file size of 512 KiB and a minimum file size of 200 KiB. The company needs protection for accidental document overwrites in the primary Region. The secondary Region must have cost-optimized storage. The company needs a solution that provides an SLA of 99.99% that files will be replicated to the secondary Region within 15 minutes.<br><br>Which solution will meet these requirements?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#1010",
          answers: [
            {
              choice:
                "<p>A.  Deploy an Amazon FSx cluster for multiple application hosts to mount in the primary Region. Configure a second Amazon FSx deployment in the secondary Region. Configure replication from the Amazon FSx cluster in the primary Region to the Amazon FSx deployment in the secondary Region.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Deploy two Amazon S3 buckets, one in each Region. Enable S3 Versioning for each bucket. Enable S3 Replication Time Control (S3 RTC) to replicate objects to the secondary Region. Specify S3 Glacier Deep Archive as the storage class in the secondary Region.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Deploy two Amazon S3 buckets, one in each Region. Enable S3 Versioning for the bucket in the primary Region. Set up S3 Cross-Region Replication (CRR) from the primary Region to the secondary Region. Create an S3 event secondary bucket to invoke an AWS Lambda function that reviews each replicated object and specifies S3 Glacier Deep Archive as the storage class in the secondary Region.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Deploy an Amazon FSx multi-Region cluster. Configure the multi-Region cluster with object versioning. Mount the file system as ZFS with versioning support. Activate S3 archiving from Amazon FSx.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#1011",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has an application that is deployed on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances are part of an Auto Scaling group. The application has unpredictable workloads and frequently scales out and in. The company's development team wants to analyze application logs to find ways to improve the application's performance. However, the logs are no longer available after instances scale in.<br><br>Which solution will give the development team the ability to view the application logs after a scale-in event?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#1011",
          answers: [
            {
              choice:
                "<p>A.  Enable access logs for the ALB.  Store the logs in an Amazon S3 bucket.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Configure the EC2 instances to publish logs to Amazon CloudWatch Logs by using the unified CloudWatch agent.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Modify the Auto Scaling group to use a step scaling policy.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Instrument the application with AWS X-Ray tracing.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#1012",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is deploying a new cluster for big data analytics on AWS. The cluster will run across many Linux Amazon EC2 instances that are spread across multiple Availability Zones.<br><br>All of the nodes in the cluster must have read and write access to common underlying file storage. The file storage must be highly available, must be resilient, must be compatible with the Portable Operating System Interface (POSIX), and must accommodate high levels of throughput.<br><br>Which storage solution will meet these requirements?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#1012",
          answers: [
            {
              choice:
                "<p>A.  Provision an AWS Storage Gateway file gateway NFS file share that is attached to an Amazon S3 bucket. Mount the NFS file share on each EC2 instance in the cluster.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Provision a new Amazon Elastic File System (Amazon EFS) file system that uses General Purpose performance mode. Mount the EFS file system on each EC2 instance in the cluster.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Provision a new Amazon Elastic Block Store (Amazon EBS) volume that uses the io2 volume type. Attach the EBS volume to all of the EC2 instances in the cluster.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Provision a new Amazon Elastic File System (Amazon EFS) file system that uses Max I/O performance mode. Mount the EFS file system on each EC2 instance in the cluster.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#1013",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company had a third-party audit of its AWS environment. The auditor identified secrets in developer documentation and found secrets that were hardcoded into AWS CloudFormation templates throughout the environment. The auditor also identified security groups that allowed inbound traffic from the internet and outbound traffic to all destinations on the internet.<br><br>A solutions architect must design a solution that will encrypt all secrets and rotate the secrets every 90 days. Additionally, the solutions architect must configure the security groups to prevent resources from being accessible from the internet.<br><br>Which solution will meet these requirements?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#1013",
          answers: [
            {
              choice:
                "<p>A.  Use AWS Secrets Manager to create, store, and access secrets. Create new secrets in AWS CloudFormation by using the AWS::SecretsManager::Secret resource type. Reference the secrets in other templates by using Secrets Manager dynamic references. Configure automatic rotation in Secrets Manager to rotate the secrets every 90 days. Use AWS Firewall Manager to create a policy that identifies all security groups that allow inbound or outbound communications for any protocols to 0.0.0.0/0. Whenever the policy flags a security group in violation, remove the noncompliant rule from security groups.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS Systems Manager Parameter Store to create, store, and access secrets. Create new Parameter Store items in AWS CloudFormation by using the AWS::SSM::Parameter resource type. Access these items by using the AWS CLI or AWS APIs. Configure automatic rotation in Parameter Store to rotate the secrets every 90 days. Use AWS Firewall Manager to create a policy that identifies all security groups that allow inbound or outbound communications for any protocols to 0.0.0.0/0. Whenever the policy flags a security group in violation, remove the noncompliant rule from security groups.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use AWS Secrets Manager to create, store, and access secrets. Create new secrets in AWS CloudFormation by using the AWS::SecretsManager::Secret resource type. Reference the secrets in other templates by using Secrets Manager dynamic references. Configure automatic rotation in Secrets Manager to rotate the secrets every 90 days. Use AWS Firewall Manager to create a policy that enforces a requirement for all security groups to explicitly deny inbound and outbound communications for all protocols to 0.0.0.0/0.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use AWS Systems Manager Parameter Store to create, store, and access secrets. Create new Parameter Store items in AWS CloudFormation by using the AWS::SSM::Parameter resource type. Reference the items in other templates by using Systems Manager dynamic references. Configure automatic rotation in Parameter Store to rotate the secrets every 90 days. Use AWS Firewall Manager to create a policy that enforces a requirement for all security groups to explicitly deny inbound and outbound communications for all protocols to 0.0.0.0/0.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#1014",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is running an application on Amazon EC2 instances in the AWS Cloud. The application is using a MongoDB database with a replica set as its data tier. The MongoDB database is installed on systems in the company's on-premises data center and is accessible through an AWS Direct Connect connection to the data center environment.<br><br>A solutions architect must migrate the on-premises MongoDB database to Amazon DocumentDB (with MongoDB compatibility).<br><br>Which strategy should the solutions architect choose to perform this migration?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#1014",
          answers: [
            {
              choice:
                "<p>A.  Create a fleet of EC2 instances. Install MongoDB Community Edition on the EC2 instances, and create a database. Configure continuous synchronous replication with the database that is running in the on-premises data center.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an AWS Database Migration Service (AWS DMS) replication instance. Create a source endpoint for the on-premises MongoDB database by using change data capture (CDC). Create a target endpoint for the Amazon DocumentDB database. Create and run a DMS migration task.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a data migration pipeline by using AWS Data Pipeline. Define data nodes for the on-premises MongoDB database and the Amazon DocumentDB database. Create a scheduled task to run the data pipeline.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a source endpoint for the on-premises MongoDB database by using AWS Glue crawlers. Configure continuous asynchronous replication between the MongoDB database and the Amazon DocumentDB database.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#1015",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is deploying a new API to AWS. The API uses Amazon API Gateway with a Regional API endpoint and an AWS Lambda function for hosting. The API retrieves data from an external vendor API, stores data in an Amazon DynamoDB global table, and retrieves data from the DynamoDB global table. The API key for the vendor's API is stored in AWS Secrets Manager and is encrypted with a customer managed key in AWS Key Management Service (AWS KMS). The company has deployed its own API into a single AWS Region.<br><br>A solutions architect needs to change the API components of the company's API to ensure that the components can run across multiple Regions in an active-active configuration.<br><br>Which combination of changes will meet this requirement with the LEAST operational overhead? (Choose three.)<br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BDF</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#1015",
          answers: [
            {
              choice:
                "<p>A.  Deploy the API to multiple Regions. Configure Amazon Route 53 with custom domain names that route traffic to each Regional API endpoint. Implement a Route 53 multivalue answer routing policy.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a new KMS multi-Region customer managed key. Create a new KMS customer managed replica key in each in-scope Region.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Replicate the existing Secrets Manager secret to other Regions. For each in-scope Region's replicated secret, select the appropriate KMS key.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a new AWS managed KMS key in each in-scope Region. Convert an existing key to a multi-Region key. Use the multi-Region key in other Regions.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Create a new Secrets Manager secret in each in-scope Region. Copy the secret value from the existing Region to the new secret in each in-scope Region.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Modify the deployment process for the Lambda function to repeat the deployment across in-scope Regions. Turn on the multi-Region option for the existing API. Select the Lambda function that is deployed in each Region as the backend for the multi-Region API.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#1016",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company deploys workloads in multiple AWS accounts. Each account has a VPC with VPC flow logs published in text log format to a centralized Amazon S3 bucket. Each log file is compressed with gzip compression. The company must retain the log files indefinitely.<br><br>A security engineer occasionally analyzes the logs by using Amazon Athena to query the VPC flow logs. The query performance is degrading over time as the number of ingested logs is growing. A solutions architect must improve the performance of the log analysis and reduce the storage space that the VPC flow logs use.<br><br>Which solution will meet these requirements with the LARGEST performance improvement?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#1016",
          answers: [
            {
              choice:
                "<p>A.  Create an AWS Lambda function to decompress the gzip files and to compress the files with bzip2 compression. Subscribe the Lambda function to an s3:ObjectCreated:Put S3 event notification for the S3 bucket.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Enable S3 Transfer Acceleration for the S3 bucket. Create an S3 Lifecycle configuration to move files to the S3 Intelligent-Tiering storage class as soon as the files are uploaded.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Update the VPC flow log configuration to store the files in Apache Parquet format. Specify hourly partitions for the log files.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a new Athena workgroup without data usage control limits. Use Athena engine version 2.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#1017",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company's solutions architect is managing a learning platform that supports more than 1 million students. The company's business reporting team is experiencing slow performance while extracting large datasets from the database. The learning application is based on PHP and runs on Amazon EC2 instances that are in an Amazon EC2 Auto Scaling group behind an Application Load Balancer (ALB). Application data is stored in an Amazon S3 bucket and in an Amazon RDS for MySOL database. The ALB is the origin of an Amazon CloudFront distribution.<br><br>The solutions architect observes that slow read operations for SELECT queries are affecting the RDS for MySOL DB instance's CPU utilization. The solutions architect must find a scalable solution to improve the slow website performance with near-zero downtime. The solution also must provide automatic failover with no data loss.<br><br>Which solution will meet these requirements?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#1017",
          answers: [
            {
              choice:
                "<p>A.  Create an incremental database backup by using Percona XtraBackup. Compress the backup files. Synchronize the backup files to Amazon S3. Restore the backup files from Amazon S3 to Amazon Aurora MySOL. Direct the application endpoint to the new Aurora DB instance.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Convert the DB instance to a Multi-AZ deployment. Set the query_cache_type parameter on the database to zero. Increase the CloudFront caching TTL to reduce application server CPU utilization.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an Amazon Aurora read replica from the DB instance. Wait until the read replica is synchronized with the source DB instance. Promote the read replica to a standalone DB cluster. Direct the application endpoint to the new Aurora DB instance.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a read replica cluster on the DB instance. Use a Multi-AZ deployment. Synchronize the read replica with the primary DB instance. Promote the read replica as the primary DB instance.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#1018",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is using IoT devices on its manufacturing equipment. Data from the devices travels to the AWS Cloud through a connection to AWS IoT Core. An Amazon Kinesis data stream sends the data from AWS IoT Core to the company's processing application. The processing application stores data in Amazon S3.<br><br>A new requirement states that the company also must send the raw data to a third-party system by using an HTTP API.<br><br>Which solution will meet these requirements with the LEAST amount of development work?<br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#1018",
          answers: [
            {
              choice:
                "<p>A.  Create a custom AWS Lambda function to consume records from the Kinesis data stream. Configure the Lambda function to call the third-party HTTP API.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an S3 event notification with Amazon EventBridge (Amazon CloudWatch Events) as the event destination. Create an EventBridge (CloudWatch Events) API destination for the third-party HTTP API.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an Amazon Kinesis Data Firehose delivery stream. Configure an HTTP endpoint destination that targets the third-party HTTP API. Configure the Kinesis data stream to send data to the Kinesis Data Firehose delivery stream.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an S3 event notification with an Amazon Simple Queue Service (Amazon SQS) queue as the event destination. Configure the SOS queue to invoke a custom AWS Lambda function. Configure the Lambda function to call the third-party HTTP API.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#1019",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect is deploying a web application that consists of a web tier, an application tier, and a database tier. The infrastructure must be highly available across two Availability Zones. The solution must minimize single points of failure and must be resilient.<br><br>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#1019",
          answers: [
            {
              choice:
                "<p>A.  Deploy an Application Load Balancer (ALB) that is mapped to a public subnet in each Availability Zone for the web tier. Deploy Amazon EC2 instances as web servers in each of the private subnets. Configure the web server instances as the target group for the ALB.  Use Amazon EC2 Auto Scaling for the web server instances.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Deploy an Application Load Balancer (ALB) that is mapped to a public subnet in each Availability Zone for the web tier. Deploy Amazon EC2 instances as web servers in each of the public subnets. Configure the web server instances as the target group for the ALUse Amazon EC2 Auto Scaling for the web server instances.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Deploy a new Application Load Balancer (ALB) to a private subnet in each Availability Zone for the application tier. Deploy Amazon EC2 instances as application servers in each of the private subnets. Configure the application server instances as targets for the new ALB.  Configure the web server instances to forward traffic to the new ALB.  Use Amazon EC2 Auto Scaling for the application server instances.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Deploy a new Application Load Balancer (ALB) to a private subnet in each Availability Zone for the application tier. Deploy Amazon EC2 instances as application servers in each of the private subnets. Configure the web server instances to forward traffic to the application server instances. Use Amazon EC2 Auto Scaling for the application server instances.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Deploy an Amazon RDS Multi-AZ DB instance. Configure the application to target the DB instance.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Deploy an Amazon RDS Single-AZ DB instance with a read replica in another Availability Zone. Configure the application to target the primary DB instance.</p>",
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
