var ExamTopic_400_499 = {
  msg: "Exam Topic 400 - 499",
  data: [
    {
      question_id: "#400",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company uses Amazon S3 to store documents that may only be accessible to an Amazon EC2 instance in a certain virtual private cloud (VPC). The company fears that a malicious insider with access to this instance could also set up an EC2 instance in another VPC to access these documents.<br>Which of the following solutions will provide the required protection?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#400",
          answers: [
            {
              choice:
                "<p>A.  Use an S3 VPC endpoint and an S3 bucket policy to limit access to this VPC endpoint.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use EC2 instance profiles and an S3 bucket policy to limit access to the role attached to the instance profile.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use S3 client-side encryption and store the key in the instance metadata.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use S3 server-side encryption and protect the key with an encryption context.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#401",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>The Solutions Architect manages a serverless application that consists of multiple API gateways, AWS Lambda functions, Amazon S3 buckets, and Amazon<br>DynamoDB tables. Customers say that a few application components slow while loading dynamic images, and some are timing out with the `504 Gateway<br>Timeout` error. While troubleshooting the scenario, the Solutions Architect confirms that DynamoDB monitoring metrics are at acceptable levels.<br>Which of the following steps would be optimal for debugging these application issues? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#401",
          answers: [
            {
              choice:
                "<p>A.  Parse HTTP logs in Amazon API Gateway for HTTP errors to determine the root cause of the errors.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Parse Amazon CloudWatch Logs to determine processing times for requested images at specified intervals.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Parse VPC Flow Logs to determine if there is packet loss between the Lambda function and S3.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Parse AWS X-Ray traces and analyze HTTP methods to determine the root cause of the HTTP errors.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Parse S3 access logs to determine if objects being accessed are from specific IP addresses to narrow the scope to geographic latency issues.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#402",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A Solutions Architect is designing the storage layer for a recently purchased application. The application will be running on Amazon EC2 instances and has the following layers and requirements:<br>✑ Data layer: A POSIX file system shared across many systems.<br>✑ Service layer: Static file content that requires block storage with more than 100k IOPS.<br>Which combination of AWS services will meet these needs? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: CE</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#402",
          answers: [
            {
              choice: "<p>A.  Data layer - Amazon S3</p>",
              correct: false,
              feedback: "",
            },
            {
              choice: "<p>B.  Data layer - Amazon EC2 Ephemeral Storage</p>",
              correct: false,
              feedback: "",
            },
            {
              choice: "<p>C.  Data layer - Amazon EFS</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Service layer - Amazon EBS volumes with Provisioned IOPS</p>",
              correct: false,
              feedback: "",
            },
            {
              choice: "<p>E.  Service layer - Amazon EC2 Ephemeral Storage</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#403",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has an application that runs a web service on Amazon EC2 instances and stores .jpg images in Amazon S3. The web traffic has a predictable baseline, but often demand spikes unpredictably for short periods of time. The application is loosely coupled and stateless. The .jpg images stored in Amazon S3 are accessed frequently for the first 15 to 20 days, they are seldom accessed thereafter but always need to be immediately available. The CIO has asked to find ways to reduce costs.<br>Which of the following options will reduce costs? (Choose two.)</p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: AB</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#403",
          answers: [
            {
              choice:
                "<p>A. Purchase Reserved instances for baseline capacity requirements and use On-Demand instances for the demand spikes.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B. Configure a lifecycle policy to move the .jpg images on Amazon S3 to S3 IA after 30 days.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C. Use On-Demand instances for baseline capacity requirements and use Spot Fleet instances for the demand spikes.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D. Configure a lifecycle policy to move the .jpg images on Amazon S3 to Amazon Glacier after 30 days.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E. Create a script that checks the load on all web servers and terminates unnecessary On-Demand instances.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#404",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A hybrid network architecture must be used during a company's multi-year data center migration from multiple private data centers to AWS. The current data centers are linked together with private fiber. Due to unique legacy applications, NAT cannot be used. During the migration period, many applications will need access to other applications in both the data centers and AWS.<br>Which option offers a hybrid network architecture that is secure and highly available, that allows for high bandwidth and a multi-region deployment post-migration?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#404",
          answers: [
            {
              choice:
                "<p>A.  Use AWS Direct Connect to each data center from different ISPs, and configure routing to failover to the other data center's Direct Connect if one fails. Ensure that no VPC CIDR blocks overlap one another or the on-premises network.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use multiple hardware VPN connections to AWS from the on-premises data center. Route different subnet traffic through different VPN connections. Ensure that no VPC CIDR blocks overlap one another or the on-premises network.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use a software VPN with clustering both in AWS and the on-premises data center, and route traffic through the cluster. Ensure that no VPC CIDR blocks overlap one another or the on-premises network.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use AWS Direct Connect and a VPN as backup, and configure both to use the same virtual private gateway and BGP. Ensure that no VPC CIDR blocks overlap one another or the on-premises network.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#405",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is currently running a production workload on AWS that is very I/O intensive. Its workload consists of a single tier with 10 c4.8xlarge instances, each with 2 TB gp2 volumes. The number of processing jobs has recently increased, and latency has increased as well. The team realizes that they are constrained on the IOPS. For the application to perform efficiently, they need to increase the IOPS by 3,000 for each of the instances.<br>Which of the following designs will meet the performance goal MOST cost effectively?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#405",
          answers: [
            {
              choice:
                "<p>A.  Change the type of Amazon EBS volume from gp2 to io1 and set provisioned IOPS to 9,000.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Increase the size of the gp2 volumes in each instance to 3 TB. </p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a new Amazon EFS file system and move all the data to this new file system. Mount this file system to all 10 instances.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a new Amazon S3 bucket and move all the data to this new bucket. Allow each instance to access this S3 bucket and use it for storage.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#406",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company's data center is connected to the AWS Cloud over a minimally used 10 Gbps AWS Direct Connect connection with a private virtual interface to its virtual private cloud (VPC). The company internet connection is 200 Mbps, and the company has a 150 TB dataset that is created each Friday. The data must be transferred and available in Amazon S3 on Monday morning.<br>Which is the LEAST expensive way to meet the requirements while allowing for data transfer growth?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#406",
          answers: [
            {
              choice:
                "<p>A.  Order two 80 TB AWS Snowball appliances. Offload the data to the appliances and ship them to AWS. AWS will copy the data from the Snowball appliances to Amazon S3.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a VPC endpoint for Amazon S3. Copy the data to Amazon S3 by using the VPC endpoint, forcing the transfer to use the Direct Connect connection.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a VPC endpoint for Amazon S3. Set up a reverse proxy farm behind a Classic Load Balancer in the VPC.  Copy the data to Amazon S3 using the proxy.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a public virtual interface on a Direct Connect connection, and copy the data to Amazon S3 over the connection.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#407",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has created an account for individual Development teams, resulting in a total of 200 accounts. All accounts have a single virtual private cloud (VPC) in a single region with multiple microservices running in Docker containers that need to communicate with microservices in other accounts. The Security team requirements state that these microservices must not traverse the public internet, and only certain internal services should be allowed to call other individual services. If there is any denied network traffic for a service, the Security team must be notified of any denied requests, including the source IP.<br>How can connectivity be established between service while meeting the security requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#407",
          answers: [
            {
              choice:
                "<p>A.  Create a VPC peering connection between the VPCs. Use security groups on the instances to allow traffic from the security group IDs that are permitted to call the microservice. Apply network ACLs and allow traffic from the local VPC and peered VPCs only. Within the task definition in Amazon ECS for each of the microservices, specify a log configuration by using the awslogs driver. Within Amazon CloudWatch Logs, create a metric filter and alarm off of the number of HTTP 403 responses. Create an alarm when the number of messages exceeds a threshold set by the Security team.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Ensure that no CIDR ranges are overlapping, and attach a virtual private gateway (VGW) to each VPC.  Provision an IPsec tunnel between each VGW and enable route propagation on the route table. Configure security groups on each service to allow the CIDR ranges of the VPCs in the other accounts. Enable VPC Flow Logs, and use an Amazon CloudWatch Logs subscription filter for rejected traffic. Create an IAM role and allow the Security team to call the AssumeRole action for each account.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Deploy a transit VPC by using third-party marketplace VPN appliances running on Amazon EC2, dynamically routed VPN connections between the VPN appliance, and the virtual private gateways (VGWs) attached to each VPC within the region. Adjust network ACLs to allow traffic from the local VPC only. Apply security groups to the microservices to allow traffic from the VPN appliances only. Install the awslogs agent on each VPN appliance, and configure logs to forward to Amazon CloudWatch Logs in the security account for the Security team to access.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a Network Load Balancer (NLB) for each microservice. Attach the NLB to a PrivateLink endpoint service and whitelist the accounts that will be consuming this service. Create an interface endpoint in the consumer VPC and associate a security group that allows only the security group IDs of the services authorized to call the producer service. On the producer services, create security groups for each microservice and allow only the CIDR range of the allowed services. Create VPC Flow Logs on each VPC to capture rejected traffic that will be delivered to an Amazon CloudWatch Logs group. Create a CloudWatch Logs subscription that streams the log data to a security account.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#408",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company runs a dynamic mission-critical web application that has an SLA of 99.99%. Global application users access the application 24/7. The application is currently hosted on premises and routinely fails to meet its SLA, especially when millions of users access the application concurrently. Remote users complain of latency.<br>How should this application be redesigned to be scalable and allow for automatic failover at the lowest cost?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#408",
          answers: [
            {
              choice:
                "<p>A.  Use Amazon Route 53 failover routing with geolocation-based routing. Host the website on automatically scaled Amazon EC2 instances behind an Application Load Balancer with an additional Application Load Balancer and EC2 instances for the application layer in each region. Use a Multi-AZ deployment with MySQL as the data layer.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use Amazon Route 53 round robin routing to distribute the load evenly to several regions with health checks. Host the website on automatically scaled Amazon ECS with AWS Fargate technology containers behind a Network Load Balancer, with an additional Network Load Balancer and Fargate containers for the application layer in each region. Use Amazon Aurora replicas for the data layer.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use Amazon Route 53 latency-based routing to route to the nearest region with health checks. Host the website in Amazon S3 in each region and use Amazon API Gateway with AWS Lambda for the application layer. Use Amazon DynamoDB global tables as the data layer with Amazon DynamoDB Accelerator (DAX) for caching.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use Amazon Route 53 geolocation-based routing. Host the website on automatically scaled AWS Fargate containers behind a Network Load Balancer with an additional Network Load Balancer and Fargate containers for the application layer in each region. Use Amazon Aurora Multi-Master for Aurora MySQL as the data layer.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#409",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company manages more than 200 separate internet-facing web applications. All of the applications are deployed to AWS in a single AWS Region. The fully qualified domain names (FQDNs) of all of the applications are made available through HTTPS using Application Load Balancers (ALBs). The ALBs are configured to use public SSL/TLS certificates.<br>A Solutions Architect needs to migrate the web applications to a multi-region architecture. All HTTPS services should continue to work without interruption.<br>Which approach meets these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#409",
          answers: [
            {
              choice:
                "<p>A.  Request a certificate for each FQDN using AWS KMS. Associate the certificates with the ALBs in the primary AWS Region. Enable cross-region availability in AWS KMS for the certificates and associate the certificates with the ALBs in the secondary AWS Region.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Generate the key pairs and certificate requests for each FQDN using AWS KMS. Associate the certificates with the ALBs in both the primary and secondary AWS Regions.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Request a certificate for each FQDN using AWS Certificate Manager. Associate the certificates with the ALBs in both the primary and secondary AWS Regions.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Request certificates for each FQDN in both the primary and secondary AWS Regions using AWS Certificate Manager. Associate the certificates with the corresponding ALBs in each AWS Region.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#410",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>An e-commerce company is revamping its IT infrastructure and is planning to use AWS services. The company's CIO has asked a Solutions Architect to design a simple, highly available, and loosely coupled order processing application. The application is responsible for receiving and processing orders before storing them in an Amazon DynamoDB table. The application has a sporadic traffic pattern and should be able to scale during marketing campaigns to process the orders with minimal delays.<br>Which of the following is the MOST reliable approach to meet the requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#410",
          answers: [
            {
              choice:
                "<p>A.  Receive the orders in an Amazon EC2-hosted database and use EC2 instances to process them.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Receive the orders in an Amazon SQS queue and trigger an AWS Lambda function to process them.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Receive the orders using the AWS Step Functions program and trigger an Amazon ECS container to process them.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Receive the orders in Amazon Kinesis Data Streams and use Amazon EC2 instances to process them.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#411",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has an application written using an in-house software framework. The framework installation takes 30 minutes and is performed with a user data script. Company Developers deploy changes to the application frequently. The framework installation is becoming a bottleneck in this process.<br>Which of the following would speed up this process?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#411",
          answers: [
            {
              choice:
                "<p>A.  Create a pipeline to build a custom AMI with the framework installed and use this AMI as a baseline for application deployments.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Employ a user data script to install the framework but compress the installation files to make them smaller.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a pipeline to parallelize the installation tasks and call this pipeline from a user data script.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure an AWS OpsWorks cookbook that installs the framework instead of employing user data. Use this cookbook as a base for all deployments.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#412",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company wants to ensure that the workloads for each of its business units have complete autonomy and a minimal blast radius in AWS. The Security team must be able to control access to the resources and services in the account to ensure that particular services are not used by the business units.<br>How can a Solutions Architect achieve the isolation requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#412",
          answers: [
            {
              choice:
                "<p>A.  Create individual accounts for each business unit and add the account to an OU in AWS Organizations. Modify the OU to ensure that the particular services are blocked. Federate each account with an IdP, and create separate roles for the business units and the Security team.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create individual accounts for each business unit. Federate each account with an IdP and create separate roles and policies for business units and the Security team.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create one shared account for the entire company. Create separate VPCs for each business unit. Create individual IAM policies and resource tags for each business unit. Federate each account with an IdP, and create separate roles for the business units and the Security team.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create one shared account for the entire company. Create individual IAM policies and resource tags for each business unit. Federate the account with an IdP, and create separate roles for the business units and the Security team.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#413",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is migrating a subset of its application APIs from Amazon EC2 instances to run on a serverless infrastructure. The company has set up Amazon API<br>Gateway, AWS Lambda, and Amazon DynamoDB for the new application. The primary responsibility of the Lambda function is to obtain data from a third-party<br>Software as a Service (SaaS) provider. For consistency, the Lambda function is attached to the same virtual private cloud (VPC) as the original EC2 instances.<br>Test users report an inability to use this newly moved functionality, and the company is receiving 5xx errors from API Gateway. Monitoring reports from the SaaS provider shows that the requests never made it to its systems. The company notices that Amazon CloudWatch Logs are being generated by the Lambda functions. When the same functionality is tested against the EC2 systems, it works as expected.<br>What is causing the issue?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#413",
          answers: [
            {
              choice:
                "<p>A.  Lambda is in a subnet that does not have a NAT gateway attached to it to connect to the SaaS provider.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  The end-user application is misconfigured to continue using the endpoint backed by EC2 instances.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  The throttle limit set on API Gateway is too low and the requests are not making their way through.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  API Gateway does not have the necessary permissions to invoke Lambda.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#414",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A Solutions Architect is working with a company that is extremely sensitive to its IT costs and wishes to implement controls that will result in a predictable AWS spend each month.<br>Which combination of steps can help the company control and monitor its monthly AWS usage to achieve a cost that is as close as possible to the target amount?<br>(Choose three.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: AEF</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#414",
          answers: [
            {
              choice:
                "<p>A.  Implement an IAM policy that requires users to specify a 'workload' tag for cost allocation when launching Amazon EC2 instances.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Contact AWS Support and ask that they apply limits to the account so that users are not able to launch more than a certain number of instance types.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Purchase all upfront Reserved Instances that cover 100% of the account's expected Amazon EC2 usage.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Place conditions in the users' IAM policies that limit the number of instances they are able to launch.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Define 'workload' as a cost allocation tag in the AWS Billing and Cost Management console.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Set up AWS Budgets to alert and notify when a given workload is expected to exceed a defined cost.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#415",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A large global company wants to migrate a stateless mission-critical application to AWS. The application is based on IBM WebSphere (application and integration middleware), IBM MQ (messaging middleware), and IBM DB2 (database software) on a z/OS operating system.<br>How should the Solutions Architect migrate the application to AWS?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#415",
          answers: [
            {
              choice:
                "<p>A.  Re-host WebSphere-based applications on Amazon EC2 behind a load balancer with Auto Scaling. Re-platform the IBM MQ to an Amazon EC2-based MQ. Re-platform the z/OS-based DB2 to Amazon RDS DB2.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Re-host WebSphere-based applications on Amazon EC2 behind a load balancer with Auto Scaling. Re-platform the IBM MQ to an Amazon MQ. Re-platform z/ OS-based DB2 to Amazon EC2-based DB2.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Orchestrate and deploy the application by using AWS Elastic Beanstalk. Re-platform the IBM MQ to Amazon SQS. Re-platform z/OS-based DB2 to Amazon RDS DB2.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use the AWS Server Migration Service to migrate the IBM WebSphere and IBM DB2 to an Amazon EC2-based solution. Re-platform the IBM MQ to an Amazon MQ.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#416",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A media storage application uploads user photos to Amazon S3 for processing. End users are reporting that some uploaded photos are not being processed properly. The Application Developers trace the logs and find that AWS Lambda is experiencing execution issues when thousands of users are on the system simultaneously. Issues are caused by:<br>✑ Limits around concurrent executions.<br>✑ The performance of Amazon DynamoDB when saving data.<br>Which actions can be taken to increase the performance and reliability of the application? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#416",
          answers: [
            {
              choice:
                "<p>A.  Evaluate and adjust the read capacity units (RCUs) for the DynamoDB tables.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Evaluate and adjust the write capacity units (WCUs) for the DynamoDB tables.</p>",
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
                "<p>D.  Configure a dead letter queue that will reprocess failed or timed-out Lambda functions.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Use S3 Transfer Acceleration to provide lower-latency access to end users.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#417",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company operates a group of imaging satellites. The satellites stream data to one of the company's ground stations where processing creates about 5 GB of images per minute. This data is added to network-attached storage, where 2 PB of data are already stored.<br>The company runs a website that allows its customers to access and purchase the images over the Internet. This website is also running in the ground station.<br>Usage analysis shows that customers are most likely to access images that have been captured in the last 24 hours.<br>The company would like to migrate the image storage and distribution system to AWS to reduce costs and increase the number of customers that can be served.<br>Which AWS architecture and migration strategy will meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#417",
          answers: [
            {
              choice:
                "<p>A.  Use multiple AWS Snowball appliances to migrate the existing imagery to Amazon S3. Create a 1-Gb AWS Direct Connect connection from the ground station to AWS, and upload new data to Amazon S3 through the Direct Connect connection. Migrate the data distribution website to Amazon EC2 instances. By using Amazon S3 as an origin, have this website serve the data through Amazon CloudFront by creating signed URLs.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a 1-Gb Direct Connect connection from the ground station to AWS. Use the AWS Command Line Interface to copy the existing data and upload new data to Amazon S3 over the Direct Connect connection. Migrate the data distribution website to EC2 instances. By using Amazon S3 as an origin, have this website serve the data through CloudFront by creating signed URLs.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use multiple Snowball appliances to migrate the existing images to Amazon S3. Upload new data by regularly using Snowball appliances to upload data from the network-attached storage. Migrate the data distribution website to EC2 instances. By using Amazon S3 as an origin, have this website serve the data through CloudFront by creating signed URLs.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use multiple Snowball appliances to migrate the existing images to an Amazon EFS file system. Create a 1-Gb Direct Connect connection from the ground station to AWS, and upload new data by mounting the EFS file system over the Direct Connect connection. Migrate the data distribution website to EC2 instances. By using webservers in EC2 that mount the EFS file system as the origin, have this website serve the data through CloudFront by creating signed URLs.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#418",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company ingests and processes streaming market data. The data rate is constant. A nightly process that calculates aggregate statistics is run, and each execution takes about 4 hours to complete. The statistical analysis is not mission critical to the business, and previous data points are picked up on the next execution if a particular run fails.<br>The current architecture uses a pool of Amazon EC2 Reserved Instances with 1-year reservations running full time to ingest and store the streaming data in attached Amazon EBS volumes. On-Demand EC2 instances are launched each night to perform the nightly processing, accessing the stored data from NFS shares on the ingestion servers, and terminating the nightly processing servers when complete. The Reserved Instance reservations are expiring, and the company needs to determine whether to purchase new reservations or implement a new design.<br>Which is the most cost-effective design?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#418",
          answers: [
            {
              choice:
                "<p>A.  Update the ingestion process to use Amazon Kinesis Data Firehose to save data to Amazon S3. Use a fleet of On-Demand EC2 instances that launches each night to perform the batch processing of the S3 data and terminates when the processing completes.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Update the ingestion process to use Amazon Kinesis Data Firehouse to save data to Amazon S3. Use AWS Batch to perform nightly processing with a Spot market bid of 50% of the On-Demand price.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Update the ingestion process to use a fleet of EC2 Reserved Instances behind a Network Load Balancer with 3-year leases. Use Batch with Spot instances with a maximum bid of 50% of the On-Demand price for the nightly processing.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Update the ingestion process to use Amazon Kinesis Data Firehose to save data to Amazon Redshift. Use an AWS Lambda function scheduled to run nightly with Amazon CloudWatch Events to query Amazon Redshift to generate the daily statistics.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#419",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A three-tier web application runs on Amazon EC2 instances. Cron daemons are used to trigger scripts that collect the web server, application, and database logs and send them to a centralized location every hour. Occasionally, scaling events or unplanned outages have caused the instances to stop before the latest logs were collected, and the log files were lost.<br>Which of the following options is the MOST reliable way of collecting and preserving the log files?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#419",
          answers: [
            {
              choice:
                "<p>A.  Update the cron jobs to run every 5 minutes instead of every hour to reduce the possibility of log messages being lost in an outage.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use Amazon CloudWatch Events to trigger Amazon Systems Manager Run Command to invoke the log collection scripts more frequently to reduce the possibility of log messages being lost in an outage.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use the Amazon CloudWatch Logs agent to stream log messages directly to CloudWatch Logs. Configure the agent with a batch count of 1 to reduce the possibility of log messages being lost in an outage.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use Amazon CloudWatch Events to trigger AWS Lambda to SSH into each running instance and invoke the log collection scripts more frequently to reduce the possibility of log messages being lost in an outage.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#420",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company stores sales transaction data in Amazon DynamoDB tables. To detect anomalous behaviors and respond quickly, all changes to the items stored in the DynamoDB tables must be logged within 30 minutes.<br>Which solution meets the requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#420",
          answers: [
            {
              choice:
                "<p>A.  Copy the DynamoDB tables into Apache Hive tables on Amazon EMR every hour and analyze them for anomalous behaviors. Send Amazon SNS notifications when anomalous behaviors are detected.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS CloudTrail to capture all the APIs that change the DynamoDB tables. Send SNS notifications when anomalous behaviors are detected using CloudTrail event filtering.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use Amazon DynamoDB Streams to capture and send updates to AWS Lambda. Create a Lambda function to output records to Amazon Kinesis Data Streams. Analyze any anomalies with Amazon Kinesis Data Analytics. Send SNS notifications when anomalous behaviors are detected.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use event patterns in Amazon CloudWatch Events to capture DynamoDB API call events with an AWS Lambda function as a target to analyze behavior. Send SNS notifications when anomalous behaviors are detected.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#421",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is running multiple applications on Amazon EC2. Each application is deployed and managed by multiple business units. All applications are deployed on a single AWS account but on different virtual private clouds (VPCs). The company uses a separate VPC in the same account for test and development purposes.<br>Production applications suffered multiple outages when users accidentally terminated and modified resources that belonged to another business unit. A Solutions<br>Architect has been asked to improve the availability of the company applications while allowing the Developers access to the resources they need.<br>Which option meets the requirements with the LEAST disruption?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#421",
          answers: [
            {
              choice:
                "<p>A.  Create an AWS account for each business unit. Move each business unit's instances to its own account and set up a federation to allow users to access their business unit's account.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Set up a federation to allow users to use their corporate credentials, and lock the users down to their own VPC.  Use a network ACL to block each VPC from accessing other VPCs.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Implement a tagging policy based on business units. Create an IAM policy so that each user can terminate instances belonging to their own business units only.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Set up role-based access for each user and provide limited permissions based on individual roles and the services for which each user is responsible.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#422",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>An enterprise runs 103 line-of-business applications on virtual machines in an on-premises data center. Many of the applications are simple PHP, Java, or Ruby web applications, are no longer actively developed, and serve little traffic.<br>Which approach should be used to migrate these applications to AWS with the LOWEST infrastructure costs?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#422",
          answers: [
            {
              choice:
                "<p>A.  Deploy the applications to single-instance AWS Elastic Beanstalk environments without a load balancer.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS SMS to create AMIs for each virtual machine and run them in Amazon EC2.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Convert each application to a Docker image and deploy to a small Amazon ECS cluster behind an Application Load Balancer.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use VM Import/Export to create AMIs for each virtual machine and run them in single-instance AWS Elastic Beanstalk environments by configuring a custom image.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#423",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A Solutions Architect must create a cost-effective backup solution for a company's 500MB source code repository of proprietary and sensitive applications. The repository runs on Linux and backs up daily to tape. Tape backups are stored for 1 year.<br>The current solution is not meeting the company's needs because it is a manual process that is prone to error, expensive to maintain, and does not meet the need for a Recovery Point Objective (RPO) of 1 hour or Recovery Time Objective (RTO) of 2 hours. The new disaster recovery requirement is for backups to be stored offsite and to be able to restore a single file if needed.<br>Which solution meets the customer's needs for RTO, RPO, and disaster recovery with the LEAST effort and expense?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#423",
          answers: [
            {
              choice:
                "<p>A.  Replace local tapes with an AWS Storage Gateway virtual tape library to integrate with current backup software. Run backups nightly and store the virtual tapes on Amazon S3 standard storage in US-EAST-1. Use cross-region replication to create a second copy in US-WEST-2. Use Amazon S3 lifecycle policies to perform automatic migration to Amazon Glacier and deletion of expired backups after 1 year.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Configure the local source code repository to synchronize files to an AWS Storage Gateway file Amazon gateway to store backup copies in an Amazon S3 Standard bucket. Enable versioning on the Amazon S3 bucket. Create Amazon S3 lifecycle policies to automatically migrate old versions of objects to Amazon S3 Standard - Infrequent Access, then Amazon Glacier, then delete backups after 1 year.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Replace the local source code repository storage with a Storage Gateway stored volume. Change the default snapshot frequency to 1 hour. Use Amazon S3 lifecycle policies to archive snapshots to Amazon Glacier and remove old snapshots after 1 year. Use cross-region replication to create a copy of the snapshots in US-WEST-2.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Replace the local source code repository storage with a Storage Gateway cached volume. Create a snapshot schedule to take hourly snapshots. Use an Amazon CloudWatch Events schedule expression rule to run an hourly AWS Lambda task to copy snapshots from US-EAST -1 to US-WEST-2.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#424",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company CFO recently analyzed the company's AWS monthly bill and identified an opportunity to reduce the cost for AWS Elastic Beanstalk environments in use. The CFO has asked a Solutions Architect to design a highly available solution that will spin up an Elastic Beanstalk environment in the morning and terminate it at the end of the day.<br>The solution should be designed with minimal operational overhead and to minimize costs. It should also be able to handle the increased use of Elastic Beanstalk environments among different teams, and must provide a one-stop scheduler solution for all teams to keep the operational costs low.<br>What design will meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#424",
          answers: [
            {
              choice:
                "<p>A.  Set up a Linux EC2 Micro instance. Configure an IAM role to allow the start and stop of the Elastic Beanstalk environment and attach it to the instance. Create scripts on the instance to start and stop the Elastic Beanstalk environment. Configure cron jobs on the instance to execute the scripts.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Develop AWS Lambda functions to start and stop the Elastic Beanstalk environment. Configure a Lambda execution role granting Elastic Beanstalk environment start/stop permissions, and assign the role to the Lambda functions. Configure cron expression Amazon CloudWatch Events rules to trigger the Lambda functions.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Develop an AWS Step Functions state machine with ג€waitג€ as its type to control the start and stop time. Use the activity task to start and stop the Elastic Beanstalk environment. Create a role for Step Functions to allow it to start and stop the Elastic Beanstalk environment. Invoke Step Functions daily.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure a time-based Auto Scaling group. In the morning, have the Auto Scaling group scale up an Amazon EC2 instance and put the Elastic Beanstalk environment start command in the EC2 instance user data. At the end of the day, scale down the instance number to 0 to terminate the EC2 instance.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#425",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company plans to move regulated and security-sensitive businesses to AWS. The Security team is developing a framework to validate the adoption of AWS best practices and industry-recognized compliance standards. The AWS Management Console is the preferred method for teams to provision resources.<br>Which strategies should a Solutions Architect use to meet the business requirements and continuously assess, audit, and monitor the configurations of AWS resources? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: AC</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#425",
          answers: [
            {
              choice:
                "<p>A.  Use AWS Config rules to periodically audit changes to AWS resources and monitor the compliance of the configuration. Develop AWS Config custom rules using AWS Lambda to establish a test-driven development approach, and further automate the evaluation of configuration changes against the required controls.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use Amazon CloudWatch Logs agent to collect all the AWS SDK logs. Search the log data using a pre-defined set of filter patterns that matches mutating API calls. Send notifications using Amazon CloudWatch alarms when unintended changes are performed. Archive log data by using a batch export to Amazon S3 and then Amazon Glacier for a long-term retention and auditability.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use AWS CloudTrail events to assess management activities of all AWS accounts. Ensure that CloudTrail is enabled in all accounts and available AWS services. Enable trails, encrypt CloudTrail event log files with an AWS KMS key, and monitor recorded activities with CloudWatch Logs.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use the Amazon CloudWatch Events near-real-time capabilities to monitor system events patterns, and trigger AWS Lambda functions to automatically revert non-authorized changes in AWS resources. Also, target Amazon SNS topics to enable notifications and improve the response time of incident responses.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Use CloudTrail integration with Amazon SNS to automatically notify unauthorized API activities. Ensure that CloudTrail is enabled in all accounts and available AWS services. Evaluate the usage of Lambda functions to automatically revert non-authorized changes in AWS resources.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#426",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is running a high-user-volume media-sharing application on premises. It currently hosts about 400 TB of data with millions of video files. The company is migrating this application to AWS to improve reliability and reduce costs.<br>The Solutions Architecture team plans to store the videos in an Amazon S3 bucket and use Amazon CloudFront to distribute videos to users. The company needs to migrate this application to AWS within 10 days with the least amount of downtime possible. The company currently has 1 Gbps connectivity to the Internet with<br>30 percent free capacity.<br>Which of the following solutions would enable the company to migrate the workload to AWS and meet all of the requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#426",
          answers: [
            {
              choice:
                "<p>A.  Use a multi-part upload in Amazon S3 client to parallel-upload the data to the Amazon S3 bucket over the Internet. Use the throttling feature to ensure that the Amazon S3 client does not use more than 30 percent of available Internet capacity.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Request an AWS Snowmobile with 1 PB capacity to be delivered to the data center. Load the data into Snowmobile and send it back to have AWS download that data to the Amazon S3 bucket. Sync the new data that was generated while migration was in flight.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use an Amazon S3 client to transfer data from the data center to the Amazon S3 bucket over the Internet. Use the throttling feature to ensure the Amazon S3 client does not use more than 30 percent of available Internet capacity.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Request multiple AWS Snowball devices to be delivered to the data center. Load the data concurrently into these devices and send it back. Have AWS download that data to the Amazon S3 bucket. Sync the new data that was generated while migration was in flight.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#427",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has developed a new billing application that will be released in two weeks. Developers are testing the application running on 10 EC2 instances managed by an Auto Scaling group in subnet 172.31.0.0/24 within VPC A with CIDR block 172.31.0.0/16. The Developers noticed connection timeout errors in the application logs while connecting to an Oracle database running on an Amazon EC2 instance in the same region within VPC B with CIDR block 172.50.0.0/16.<br>The IP of the database instance is hard-coded in the application instances.<br>Which recommendations should a Solutions Architect present to the Developers to solve the problem in a secure way with minimal maintenance and overhead?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#427",
          answers: [
            {
              choice:
                "<p>A.  Disable the SrcDestCheck attribute for all instances running the application and Oracle Database. Change the default route of VPC A to point ENI of the Oracle Database that has an IP address assigned within the range of 172.50.0.0/16</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create and attach internet gateways for both VPCs. Configure default routes to the internet gateways for both VPCs. Assign an Elastic IP for each Amazon EC2 instance in VPC A</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a VPC peering connection between the two VPCs and add a route to the routing table of VPC A that points to the IP address range of 172.50.0.0/16</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an additional Amazon EC2 instance for each VPC as a customer gateway; create one virtual private gateway (VGW) for each VPC, configure an end- to-end VPC, and advertise the routes for 172.50.0.0/16</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#428",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A Solutions Architect has been asked to look at a company's Amazon Redshift cluster, which has quickly become an integral part of its technology and supports key business process. The Solutions Architect is to increase the reliability and availability of the cluster and provide options to ensure that if an issue arises, the cluster can either operate or be restored within four hours.<br>Which of the following solution options BEST addresses the business need in the most cost-effective manner?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#428",
          answers: [
            {
              choice:
                "<p>A.  Ensure that the Amazon Redshift cluster has been set up to make use of Auto Scaling groups with the nodes in the cluster spread across multiple Availability Zones.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Ensure that the Amazon Redshift cluster creation has been templated using AWS CloudFormation so it can easily be launched in another Availability Zone and data populated from the automated Redshift back-ups stored in Amazon S3.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use Amazon Kinesis Data Firehose to collect the data ahead of ingestion into Amazon Redshift and create clusters using AWS CloudFormation in another region and stream the data to both clusters.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create two identical Amazon Redshift clusters in different regions (one as the primary, one as the secondary). Use Amazon S3 cross-region replication from the primary to secondary region, which triggers an AWS Lambda function to populate the cluster in the secondary region.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#429",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company prefers to limit running Amazon EC2 instances to those that were launched from AMIs pre-approved by the Information Security department. The<br>Development team has an agile continuous integration and deployment process that cannot be stalled by the solution.<br>Which method enforces the required controls with the LEAST impact on the development process? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: AD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#429",
          answers: [
            {
              choice:
                "<p>A.  Use IAM policies to restrict the ability of users or other automated entities to launch EC2 instances based on a specific set of pre-approved AMIs, such as those tagged in a specific way by Information Security.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use regular scans within Amazon Inspector with a custom assessment template to determine if the EC2 instance that the Amazon Inspector Agent is running on is based upon a pre-approved AMI. If it is not, shut down the instance and inform Information Security by email that this occurred.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Only allow launching of EC2 instances using a centralized DevOps team, which is given work packages via notifications from an internal ticketing system. Users make requests for resources using this ticketing tool, which has manual information security approval steps to ensure that EC2 instances are only launched from approved AMIs.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use AWS Config rules to spot any launches of EC2 instances based on non-approved AMIs, trigger an AWS Lambda function to automatically terminate the instance, and publish a message to an Amazon SNS topic to inform Information Security that this occurred.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Use a scheduled AWS Lambda function to scan through the list of running instances within the virtual private cloud (VPC) and determine if any of these are based on unapproved AMIs. Publish a message to an SNS topic to inform Information Security that this occurred and then shut down the instance.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#430",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A Company had a security event whereby an Amazon S3 bucket with sensitive information was made public. Company policy is to never have public S3 objects, and the Compliance team must be informed immediately when any public objects are identified.<br>How can the presence of a public S3 object be detected, set to trigger alarm notifications, and automatically remediated in the future? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#430",
          answers: [
            {
              choice:
                "<p>A.  Turn on object-level logging for Amazon S3. Turn on Amazon S3 event notifications to notify by using an Amazon SNS topic when a PutObject API call is made with a public-read permission.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Configure an Amazon CloudWatch Events rule that invokes an AWS Lambda function to secure the S3 bucket.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use the S3 bucket permissions for AWS Trusted Advisor and configure a CloudWatch event to notify by using Amazon SNS.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Turn on object-level logging for Amazon S3. Configure a CloudWatch event to notify by using an SNS topic when a PutObject API call with public-read permission is detected in the AWS CloudTrail logs.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Schedule a recursive Lambda function to regularly change all object permissions inside the S3 bucket.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#431",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is using an Amazon CloudFront distribution to distribute both static and dynamic content from a web application running behind an Application Load<br>Balancer. The web application requires user authorization and session tracking for dynamic content. The CloudFront distribution has a single cache behavior configured to forward the Authorization, Host, and User-Agent HTTP whitelist headers and a session cookie to the origin. All other cache behavior settings are set to their default value.<br>A valid ACM certificate is applied to the CloudFront distribution with a matching CNAME in the distribution settings. The ACM certificate is also applied to the<br>HTTPS listener for the Application Load Balancer. The CloudFront origin protocol policy is set to HTTPS only. Analysis of the cache statistics report shows that the miss rate for this distribution is very high.<br>What can the Solutions Architect do to improve the cache hit rate for this distribution without causing the SSL/TLS handshake between CloudFront and the<br>Application Load Balancer to fail?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#431",
          answers: [
            {
              choice:
                "<p>A.  Create two cache behaviors for static and dynamic content. Remove the User-Agent and Host HTTP headers from the whitelist headers section on both of the cache behaviors. Remove the session cookie from the whitelist cookies section and the Authorization HTTP header from the whitelist headers section for cache behavior configured for static content.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Remove the User-Agent and Authorization HTTP headers from the whitelist headers section of the cache behavior. Then update the cache behavior to use presigned cookies for authorization.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Remove the Host HTTP header from the whitelist headers section and remove the session cookie from the whitelist cookies section for the default cache behavior. Enable automatic object compression and use Lambda@Edge viewer request events for user authorization.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create two cache behaviors for static and dynamic content. Remove the User-Agent HTTP header from the whitelist headers section on both of the cache behaviors. Remove the session cookie from the whitelist cookies section and the Authorization HTTP header from the whitelist headers section for cache behavior configured for static content.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#432",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>An organization has a write-intensive mobile application that uses Amazon API Gateway, AWS Lambda, and Amazon DynamoDB. The application has scaled well, however, costs have increased exponentially because of higher than anticipated Lambda costs. The application's use is unpredictable, but there has been a steady 20% increase in utilization every month.<br>While monitoring the current Lambda functions, the Solutions Architect notices that the execution-time averages 4.5 minutes. Most of the wait time is the result of a high-latency network call to a 3-TB MySQL database server that is on-premises. A VPN is used to connect to the VPC, so the Lambda functions have been configured with a five-minute timeout.<br>How can the Solutions Architect reduce the cost of the current architecture?<br>A.<br>✑ Replace the VPN with AWS Direct Connect to reduce the network latency to the on-premises MySQL database.<br>✑ Enable local caching in the mobile application to reduce the Lambda function invocation calls.<br>✑ Monitor the Lambda function performance; gradually adjust the timeout and memory properties to lower values while maintaining an acceptable execution time.<br>✑ Offload the frequently accessed records from DynamoDB to Amazon ElastiCache.<br>B.<br>✑ Replace the VPN with AWS Direct Connect to reduce the network latency to the on-premises MySQL database.<br>✑ Cache the API Gateway results to Amazon CloudFront.<br>✑ Use Amazon EC2 Reserved Instances instead of Lambda.<br>✑ Enable Auto Scaling on EC2, and use Spot Instances during peak times.<br>✑ Enable DynamoDB Auto Scaling to manage target utilization.<br>C.<br>✑ Migrate the MySQL database server into a Multi-AZ Amazon RDS for MySQL.<br>✑ Enable caching of the Amazon API Gateway results in Amazon CloudFront to reduce the number of Lambda function invocations.<br>✑ Monitor the Lambda function performance; gradually adjust the timeout and memory properties to lower values while maintaining an acceptable execution time.<br>✑ Enable DynamoDB Accelerator for frequently accessed records, and enable the DynamoDB Auto Scaling feature.<br>D.<br>✑ Migrate the MySQL database server into a Multi-AZ Amazon RDS for MySQL.<br>✑ Enable API caching on API Gateway to reduce the number of Lambda function invocations.<br>✑ Continue to monitor the AWS Lambda function performance; gradually adjust the timeout and memory properties to lower values while maintaining an acceptable execution time.<br>✑ Enable Auto Scaling in DynamoDB.<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#432",
          answers: [],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#433",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company runs a video processing platform. Files are uploaded by users who connect to a web server, which stores them on an Amazon EFS share. This web server is running on a single Amazon EC2 instance. A different group of instances, running in an Auto Scaling group, scans the EFS share directory structure for new files to process and generates new videos (thumbnails, different resolution, compression, etc.) according to the instructions file, which is uploaded along with the video files. A different application running on a group of instances managed by an Auto Scaling group processes the video files and then deletes them from the<br>EFS share. The results are stored in an S3 bucket. Links to the processed video files are emailed to the customer.<br>The company has recently discovered that as they add more instances to the Auto Scaling Group, many files are processed twice, so image processing speed is not improved. The maximum size of these video files is 2GB.<br>What should the Solutions Architect do to improve reliability and reduce the redundant processing of video files?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#433",
          answers: [
            {
              choice:
                "<p>A.  Modify the web application to upload the video files directly to Amazon S3. Use Amazon CloudWatch Events to trigger an AWS Lambda function every time a file is uploaded, and have this Lambda function put a message into an Amazon SQS queue. Modify the video processing application to read from SQS queue for new files and use the queue depth metric to scale instances in the video processing Auto Scaling group.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Set up a cron job on the web server instance to synchronize the contents of the EFS share into Amazon S3. Trigger an AWS Lambda function every time a file is uploaded to process the video file and store the results in Amazon S3. Using Amazon CloudWatch Events, trigger an Amazon SES job to send an email to the customer containing the link to the processed file.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Rewrite the web application to run directly from Amazon S3 and use Amazon API Gateway to upload the video files to an S3 bucket. Use an S3 trigger to run an AWS Lambda function each time a file is uploaded to process and store new video files in a different bucket. Using CloudWatch Events, trigger an SES job to send an email to the customer containing the link to the processed file.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Rewrite the web application to run from Amazon S3 and upload the video files to an S3 bucket. Each time a new file is uploaded, trigger an AWS Lambda function to put a message in an SQS queue containing the link and the instructions. Modify the video processing application to read from the SQS queue and the S3 bucket. Use the queue depth metric to adjust the size of the Auto Scaling group for video processing instances.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#434",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A Solutions Architect must establish a patching plan for a large mixed fleet of Windows and Linux servers. The patching plan must be implemented securely, be audit-ready, and comply with the company's business requirements.<br>Which option will meet these requirements with MINIMAL effort?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#434",
          answers: [
            {
              choice:
                "<p>A.  Install and use an OS-native patching service to manage the update frequency and release approval for all instances. Use AWS Config to verify the OS state on each instance and report on any patch compliance issues.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS Systems Manager on all instances to manage patching. Test patches outside of production and then deploy during a maintenance window with the appropriate approval.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use AWS OpsWorks for Chef Automate to run a set of scripts that will iterate through all instances of a given type. Issue the appropriate OS command to get and install updates on each instance, including any required restarts during the maintenance window.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Migrate all applications to AWS OpsWorks and use OpsWorks automatic patching support to keep the OS up-to-date following the initial installation. Use AWS Config to provide audit and compliance reporting.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#435",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A Solutions Architect must design a highly available, stateless, REST service. The service will require multiple persistent storage layers for service object meta information and the delivery of content. Each request needs to be authenticated and securely processed. There is a requirement to keep costs as low as possible.<br>How can these requirements be met?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#435",
          answers: [
            {
              choice:
                "<p>A.  Use AWS Fargate to host a container that runs a self-contained REST service. Set up an Amazon ECS service that is fronted by an Application Load Balancer (ALB). Use a custom authenticator to control access to the API. Store request meta information in Amazon DynamoDB with Auto Scaling and static content in a secured S3 bucket. Make secure signed requests for Amazon S3 objects and proxy the data through the REST service interface.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS Fargate to host a container that runs a self-contained REST service. Set up an ECS service that is fronted by a cross-zone ALB.  Use an Amazon Cognito user pool to control access to the API. Store request meta information in DynamoDB with Auto Scaling and static content in a secured S3 bucket. Generate presigned URLs when returning references to content stored in Amazon S3.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Set up Amazon API Gateway and create the required API resources and methods. Use an Amazon Cognito user pool to control access to the API. Configure the methods to use AWS Lambda proxy integrations, and process each resource with a unique AWS Lambda function. Store request meta information in DynamoDB with Auto Scaling and static content in a secured S3 bucket. Generate presigned URLs when returning references to content stored in Amazon S3.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Set up Amazon API Gateway and create the required API resources and methods. Use an Amazon API Gateway custom authorizer to control access to the API. Configure the methods to use AWS Lambda custom integrations, and process each resource with a unique Lambda function. Store request meta information in an Amazon ElastiCache Multi-AZ cluster and static content in a secured S3 bucket. Generate presigned URLs when returning references to content stored in Amazon S3.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#436",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A large company experienced a drastic increase in its monthly AWS spend. This is after Developers accidentally launched Amazon EC2 instances in unexpected regions. The company has established practices around least privileges for Developers and controls access to on-premises resources using Active Directory groups. The company now want to control costs by restricting the level of access that Developers have to the AWS Management Console without impacting their productivity. The company would also like to allow Developers to launch Amazon EC2 in only one region, without limiting access to other services in any region.<br>How can this company achieve these new security requirements while minimizing the administrative burden on the Operations team?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#436",
          answers: [
            {
              choice:
                "<p>A.  Set up SAML-based authentication tied to an IAM role that has an AdministrativeAccess managed policy attached to it. Attach a customer managed policy that denies access to Amazon EC2 in each region except for the one required.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an IAM user for each Developer and add them to the developer IAM group that has the PowerUserAccess managed policy attached to it. Attach a customer managed policy that allows the Developers access to Amazon EC2 only in the required region.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Set up SAML-based authentication tied to an IAM role that has a PowerUserAccess managed policy and a customer managed policy that deny all the Developers access to any AWS services except AWS Service Catalog. Within AWS Service Catalog, create a product containing only the EC2 resources in the approved region.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Set up SAML-based authentication tied to an IAM role that has the PowerUserAccess managed policy attached to it. Attach a customer managed policy that denies access to Amazon EC2 in each region except for the one required.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#437",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is finalizing the architecture for its backup solution for applications running on AWS. All of the applications run on AWS and use at least two Availability<br>Zones in each tier.<br>Company policy requires IT to durably store nightly backups for all its data in at least two locations: production and disaster recovery. The locations must be in different geographic regions. The company also needs the backup to be available to restore immediately at the production data center, and within 24 hours at the disaster recovery location. All backup processes must be fully automated.<br>What is the MOST cost-effective backup solution that will meet all requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#437",
          answers: [
            {
              choice:
                "<p>A.  Back up all the data to a large Amazon EBS volume attached to the backup media server in the production region. Run automated scripts to snapshot these volumes nightly, and copy these snapshots to the disaster recovery region.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Back up all the data to Amazon S3 in the disaster recovery region. Use a lifecycle policy to move this data to Amazon Glacier in the production region immediately. Only the data is replicated; remove the data from the S3 bucket in the disaster recovery region.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Back up all the data to Amazon Glacier in the production region. Set up cross-region replication of this data to Amazon Glacier in the disaster recovery region. Set up a lifecycle policy to delete any data older than 60 days.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Back up all the data to Amazon S3 in the production region. Set up cross-region replication of this S3 bucket to another region and set up a lifecycle policy in the second region to immediately move this data to Amazon Glacier.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#438",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has an existing on-premises three-tier web application. The Linux web servers serve content from a centralized file share on a NAS server because the content is refreshed several times a day from various sources. The existing infrastructure is not optimized and the company would like to move to AWS in order to gain the ability to scale resources up and down in response to load. On-premises and AWS resources are connected using AWS Direct Connect.<br>How can the company migrate the web infrastructure to AWS without delaying the content refresh process?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#438",
          answers: [
            {
              choice:
                "<p>A.  Create a cluster of web server Amazon EC2 instances behind a Classic Load Balancer on AWS. Share an Amazon EBS volume among all instances for the content. Schedule a periodic synchronization of this volume and the NAS server.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an on-premises file gateway using AWS Storage Gateway to replace the NAS server and replicate content to AWS. On the AWS side, mount the same Storage Gateway bucket to each web server Amazon EC2 instance to serve the content.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Expose an Amazon EFS share to on-premises users to serve as the NAS serve. Mount the same EFS share to the web server Amazon EC2 instances to serve the content.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create web server Amazon EC2 instances on AWS in an Auto Scaling group. Configure a nightly process where the web server instances are updated from the NAS server.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#439",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has multiple AWS accounts hosting IT applications. An Amazon CloudWatch Logs agent is installed on all Amazon EC2 instances. The company wants to aggregate all security events in a centralized AWS account dedicated to log storage.<br>Security Administrators need to perform near-real-time gathering and correlating of events across multiple AWS accounts.<br>Which solution satisfies these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#439",
          answers: [
            {
              choice:
                "<p>A.  Create a Log Audit IAM role in each application AWS account with permissions to view CloudWatch Logs, configure an AWS Lambda function to assume the Log Audit role, and perform an hourly export of CloudWatch Logs data to an Amazon S3 bucket in the logging AWS account.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Configure CloudWatch Logs streams in each application AWS account to forward events to CloudWatch Logs in the logging AWS account. In the logging AWS account, subscribe an Amazon Kinesis Data Firehose stream to Amazon CloudWatch Events, and use the stream to persist log data in Amazon S3.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create Amazon Kinesis Data Streams in the logging account, subscribe the stream to CloudWatch Logs streams in each application AWS account, configure an Amazon Kinesis Data Firehose delivery stream with the Data Streams as its source, and persist the log data in an Amazon S3 bucket inside the logging AWS account.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure CloudWatch Logs agents to publish data to an Amazon Kinesis Data Firehose stream in the logging AWS account, use an AWS Lambda function to read messages from the stream and push messages to Data Firehose, and persist the data in Amazon S3.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#440",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has a serverless application comprised of Amazon CloudFront, Amazon API Gateway, and AWS Lambda functions. The current deployment process of the application code is to create a new version number of the Lambda function and run an AWS CLI script to update. If the new function version has errors, another CLI script reverts by deploying the previous working version of the function. The company would like to decrease the time to deploy new versions of the application logic provided by the Lambda functions, and also reduce the time to detect and revert when errors are identified.<br>How can this be accomplished?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#440",
          answers: [
            {
              choice:
                "<p>A.  Create and deploy nested AWS CloudFormation stacks with the parent stack consisting of the AWS CloudFront distribution and API Gateway, and the child stack containing the Lambda function. For changes to Lambda, create an AWS CloudFormation change set and deploy; if errors are triggered, revert the AWS CloudFormation change set to the previous version.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS SAM and built-in AWS CodeDeploy to deploy the new Lambda version, gradually shift traffic to the new version, and use pre-traffic and post-traffic test functions to verify code. Rollback if Amazon CloudWatch alarms are triggered.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Refactor the AWS CLI scripts into a single script that deploys the new Lambda version. When deployment is completed, the script tests execute. If errors are detected, revert to the previous Lambda version.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create and deploy an AWS CloudFormation stack that consists of a new API Gateway endpoint that references the new Lambda version. Change the CloudFront origin to the new API Gateway endpoint, monitor errors and if detected, change the AWS CloudFront origin to the previous API Gateway endpoint.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#441",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is running a .NET three-tier web application on AWS. The team currently uses XL storage optimized instances to store and serve the website's image and video files on local instance storage. The company has encountered issues with data loss from replication and instance failures. The Solutions Architect has been asked to redesign this application to improve its reliability while keeping costs low.<br>Which solution will meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#441",
          answers: [
            {
              choice:
                "<p>A.  Set up a new Amazon EFS share, move all image and video files to this share, and then attach this new drive as a mount point to all existing servers. Create an Elastic Load Balancer with Auto Scaling general purpose instances. Enable Amazon CloudFront to the Elastic Load Balancer. Enable Cost Explorer and use AWS Trusted Advisor checks to continue monitoring the environment for future savings.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Implement Auto Scaling with general purpose instance types and an Elastic Load Balancer. Enable an Amazon CloudFront distribution to Amazon S3 and move images and video files to Amazon S3. Reserve general purpose instances to meet base performance requirements. Use Cost Explorer and AWS Trusted Advisor checks to continue monitoring the environment for future savings.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Move the entire website to Amazon S3 using the S3 website hosting feature. Remove all the web servers and have Amazon S3 communicate directly with the application servers in Amazon VPC. </p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use AWS Elastic Beanstalk to deploy the .NET application. Move all images and video files to Amazon EFS. Create an Amazon CloudFront distribution that points to the EFS share. Reserve the m4.4xl instances needed to meet base performance requirements.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#442",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has developed a web application that runs on Amazon EC2 instances in one AWS Region. The company has taken on new business in other countries and must deploy its application into other regions to meet low-latency requirements for its users. The regions can be segregated, and an application running in one region does not need to communicate with instances in other regions.<br>How should the company's Solutions Architect automate the deployment of the application so that it can be MOST efficiently deployed into multiple regions?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#442",
          answers: [
            {
              choice:
                "<p>A.  Write a bash script that uses the AWS CLI to query the current state in one region and output a JSON representation. Pass the JSON representation to the AWS CLI, specifying the --region parameter to deploy the application to other regions.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Write a bash script that uses the AWS CLI to query the current state in one region and output an AWS CloudFormation template. Create a CloudFormation stack from the template by using the AWS CLI, specifying the --region parameter to deploy the application to other regions.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Write a CloudFormation template describing the application's infrastructure in the resources section. Create a CloudFormation stack from the template by using the AWS CLI, specify multiple regions using the --regions parameter to deploy the application.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Write a CloudFormation template describing the application's infrastructure in the Resources section. Use a CloudFormation stack set from an administrator account to launch stack instances that deploy the application to other regions.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#443",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A media company has a 30-TB repository of digital news videos. These videos are stored on tape in an on-premises tape library and referenced by a Media Asset<br>Management (MAM) system. The company wants to enrich the metadata for these videos in an automated fashion and put them into a searchable catalog by using a MAM feature. The company must be able to search based on information in the video, such as objects, scenery items, or people's faces. A catalog is available that contains faces of people who have appeared in the videos that include an image of each person. The company would like to migrate these videos to<br>AWS.<br>The company has a high-speed AWS Direct Connect connection with AWS and would like to move the MAM solution video content directly from its current file system.<br>How can these requirements be met by using the LEAST amount of ongoing management overhead and causing MINIMAL disruption to the existing system?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#443",
          answers: [
            {
              choice:
                "<p>A.  Set up an AWS Storage Gateway, file gateway appliance on-premises. Use the MAM solution to extract the videos from the current archive and push them into the file gateway. Use the catalog of faces to build a collection in Amazon Rekognition. Build an AWS Lambda function that invokes the Rekognition Javascript SDK to have Rekognition pull the video from the Amazon S3 files backing the file gateway, retrieve the required metadata, and push the metadata into the MAM solution.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Set up an AWS Storage Gateway, tape gateway appliance on-premises. Use the MAM solution to extract the videos from the current archive and push them into the tape gateway. Use the catalog of faces to build a collection in Amazon Rekognition. Build an AWS Lambda function that invokes the Rekognition Javascript SDK to have Amazon Rekognition process the video in the tape gateway, retrieve the required metadata, and push the metadata into the MAM solution.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure a video ingestion stream by using Amazon Kinesis Video Streams. Use the catalog of faces to build a collection in Amazon Rekognition. Stream the videos from the MAM solution into Kinesis Video Streams. Configure Amazon Rekognition to process the streamed videos. Then, use a stream consumer to retrieve the required metadata, and push the metadata into the MAM solution. Configure the stream to store the videos in Amazon S3.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Set up an Amazon EC2 instance that runs the OpenCV libraries. Copy the videos, images, and face catalog from the on-premises library into an Amazon EBS volume mounted on this EC2 instance. Process the videos to retrieve the required metadata, and push the metadata into the MAM solution, while also copying the video files to an Amazon S3 bucket.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#444",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is planning the migration of several lab environments used for software testing. An assortment of custom tooling is used to manage the test runs for each lab. The labs use immutable infrastructure for the software test runs, and the results are stored in a highly available SQL database cluster. Although completely rewriting the custom tooling is out of scope for the migration project, the company would like to optimize workloads during the migration.<br>Which application migration strategy meets this requirement?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#444",
          answers: [
            {
              choice: "<p>A.  Re-host</p>",
              correct: false,
              feedback: "",
            },
            {
              choice: "<p>B.  Re-platform</p>",
              correct: true,
              feedback: "",
            },
            {
              choice: "<p>C.  Re-factor/re-architect</p>",
              correct: false,
              feedback: "",
            },
            {
              choice: "<p>D.  Retire</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#445",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is implementing a multi-account strategy; however, the Management team has expressed concerns that services like DNS may become overly complex. The company needs a solution that allows private DNS to be shared among virtual private clouds (VPCs) in different accounts. The company will have approximately 50 accounts in total.<br>What solution would create the LEAST complex DNS architecture and ensure that each VPC can resolve all AWS resources?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#445",
          answers: [
            {
              choice:
                "<p>A.  Create a shared services VPC in a central account, and create a VPC peering connection from the shared services VPC to each of the VPCs in the other accounts. Within Amazon Route 53, create a privately hosted zone in the shared services VPC and resource record sets for the domain and subdomains. Programmatically associate other VPCs with the hosted zone.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a VPC peering connection among the VPCs in all accounts. Set the VPC attributes enableDnsHostnames and enableDnsSupport to ג€trueג€ for each VPC.  Create an Amazon Route 53 private zone for each VPC.  Create resource record sets for the domain and subdomains. Programmatically associate the hosted zones in each VPC with the other VPCs.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a shared services VPC in a central account. Create a VPC peering connection from the VPCs in other accounts to the shared services VPC.  Create an Amazon Route 53 privately hosted zone in the shared services VPC with resource record sets for the domain and subdomains. Allow UDP and TCP port 53 over the VPC peering connections.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Set the VPC attributes enableDnsHostnames and enableDnsSupport to ג€falseג€ in every VPC.  Create an AWS Direct Connect connection with a private virtual interface. Allow UDP and TCP port 53 over the virtual interface. Use the on-premises DNS servers to resolve the IP addresses in each VPC on AWS.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#446",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has asked a Solutions Architect to design a secure content management solution that can be accessed by API calls by external customer applications.<br>The company requires that a customer administrator must be able to submit an API call and roll back changes to existing files sent to the content management solution, as needed.<br>What is the MOST secure deployment design that meets all solution requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#446",
          answers: [
            {
              choice:
                "<p>A.  Use Amazon S3 for object storage with versioning and bucket access logging enabled, and an IAM role and access policy for each customer application. Encrypt objects using SSE-KMS. Develop the content management application to use a separate AWS KMS key for each customer.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use Amazon WorkDocs for object storage. Leverage WorkDocs encryption, user access management, and version control. Use AWS CloudTrail to log all SDK actions and create reports of hourly access by using the Amazon CloudWatch dashboard. Enable a revert function in the SDK based on a static Amazon S3 webpage that shows the output of the CloudWatch dashboard.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use Amazon EFS for object storage, using encryption at rest for the Amazon EFS volume and a customer managed key stored in AWS KMS. Use IAM roles and Amazon EFS access policies to specify separate encryption keys for each customer application. Deploy the content management application to store all new versions as new files in Amazon EFS and use a control API to revert a specific file to a previous version.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use Amazon S3 for object storage with versioning and enable S3 bucket access logging. Use an IAM role and access policy for each customer application. Encrypt objects using client-side encryption, and distribute an encryption key to all customers when accessing the content management application.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#447",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has released a new version of a website to target an audience in Asia and South America. The website's media assets are hosted on Amazon S3 and have an Amazon CloudFront distribution to improve end-user performance. However, users are having a poor login experience, the authentication service is only available in the us-east-1 AWS Region.<br>How can the Solutions Architect improve the login experience and maintain high security and performance with minimal management overhead?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#447",
          answers: [
            {
              choice:
                "<p>A.  Replicate the setup in each new geography and use Amazon Route 53 geo-based routing to route traffic to the AWS Region closest to the users.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use an Amazon Route 53 weighted routing policy to route traffic to the CloudFront distribution. Use CloudFront cached HTTP methods to improve the user login experience.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use Amazon Lambda@Edge attached to the CloudFront viewer request trigger to authenticate and authorize users by maintaining a secure cookie token with a session expiry to improve the user experience in multiple geographies.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Replicate the setup in each geography and use Network Load Balancers to route traffic to the authentication service running in the closest region to users.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#448",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has a standard three-tier architecture using two Availability Zones. During the company's off season, users report that the website is not working. The<br>Solutions Architect finds that no changes have been made to the environment recently, the website is reachable, and it is possible to log in. However, when the<br>Solutions Architect selects the `find a store near you` function, the maps provided on the site by a third-party RESTful API call do not work about 50% of the time after refreshing the page. The outbound API calls are made through Amazon EC2 NAT instances.<br>What is the MOST likely reason for this failure and how can it be mitigated in the future?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#448",
          answers: [
            {
              choice:
                "<p>A.  The network ACL for one subnet is blocking outbound web traffic. Open the network ACL and prevent administration from making future changes through IAM.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  The fault is in the third-party environment. Contact the third party that provides the maps and request a fix that will provide better uptime.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  One NAT instance has become overloaded. Replace both EC2 NAT instances with a larger-sized instance and make sure to account for growth when making the new instance size.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  One of the NAT instances failed. Recommend replacing the EC2 NAT instances with a NAT gateway.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#449",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is migrating to the cloud. It wants to evaluate the configurations of virtual machines in its existing data center environment to ensure that it can size new Amazon EC2 instances accurately. The company wants to collect metrics, such as CPU, memory, and disk utilization, and it needs an inventory of what processes are running on each instance. The company would also like to monitor network connections to map communications between servers.<br>Which would enable the collection of this data MOST cost effectively?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#449",
          answers: [
            {
              choice:
                "<p>A.  Use AWS Application Discovery Service and deploy the data collection agent to each virtual machine in the data center.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Configure the Amazon CloudWatch agent on all servers within the local environment and publish metrics to Amazon CloudWatch Logs.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use AWS Application Discovery Service and enable agentless discovery in the existing virtualization environment.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Enable AWS Application Discovery Service in the AWS Management Console and configure the corporate firewall to allow scans over a VPN.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#450",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company with several AWS accounts is using AWS Organizations and service control policies (SCPs). An Administrator created the following SCP and has attached it to an organizational unit (OU) that contains AWS account 1111-1111-1111:<br><img src='https://www.examtopics.com/assets/media/exam-media/04241/0029700001.png'><br>Developers working in account 1111-1111-1111 complain that they cannot create Amazon S3 buckets. How should the Administrator address this problem?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#450",
          answers: [
            {
              choice:
                "<p>A.  Add s3:CreateBucket with ג€Allowג€ effect to the SCP.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Remove the account from the OU, and attach the SCP directly to account 1111-1111-1111.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Instruct the Developers to add Amazon S3 permissions to their IAM entities.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice: "<p>D.  Remove the SCP from account 1111-1111-1111.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#451",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company that provides wireless services needs a solution to store and analyze log files about user activities. Currently, log files are delivered daily to Amazon<br>Linux on an Amazon EC2 instance. A batch script is run once a day to aggregate data used for analysis by a third-party tool. The data pushed to the third-party tool is used to generate a visualization for end users. The batch script is cumbersome to maintain, and it takes several hours to deliver the ever-increasing data volumes to the third-party tool. The company wants to lower costs, and is open to considering a new tool that minimizes development effort and lowers administrative overhead. The company wants to build a more agile solution that can store and perform the analysis in near-real time, with minimal overhead. The solution needs to be cost effective and scalable to meet the company's end-user base growth.<br>Which solution meets the company's requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#451",
          answers: [
            {
              choice:
                "<p>A.  Develop a Python script to capture the data from Amazon EC2 in real time and store the data in Amazon S3. Use a copy command to copy data from Amazon S3 to Amazon Redshift. Connect a business intelligence tool running on Amazon EC2 to Amazon Redshift and create the visualizations.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use an Amazon Kinesis agent running on an EC2 instance in an Auto Scaling group to collect and send the data to an Amazon Kinesis Data Firehose delivery stream. The Kinesis Data Firehose delivery stream will deliver the data directly to Amazon ES. Use Kibana to visualize the data.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use an in-memory caching application running on an Amazon EBS-optimized EC2 instance to capture the log data in near real-time. Install an Amazon ES cluster on the same EC2 instance to store the log files as they are delivered to Amazon EC2 in near real-time. Install a Kibana plugin to create the visualizations.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use an Amazon Kinesis agent running on an EC2 instance to collect and send the data to an Amazon Kinesis Data Firehose delivery stream. The Kinesis Data Firehose delivery stream will deliver the data to Amazon S3. Use an AWS Lambda function to deliver the data from Amazon S3 to Amazon ES. Use Kibana to visualize the data.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#452",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company wants to move a web application to AWS. The application stores session information locally on each web server, which will make auto scaling difficult.<br>As part of the migration, the application will be rewritten to decouple the session data from the web servers. The company requires low latency, scalability, and availability.<br>Which service will meet the requirements for storing the session information in the MOST cost-effective way?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#452",
          answers: [
            {
              choice: "<p>A.  Amazon ElastiCache with the Memcached engine</p>",
              correct: false,
              feedback: "",
            },
            {
              choice: "<p>B.  Amazon S3</p>",
              correct: false,
              feedback: "",
            },
            {
              choice: "<p>C.  Amazon RDS MySQL</p>",
              correct: false,
              feedback: "",
            },
            {
              choice: "<p>D.  Amazon ElastiCache with the Redis engine</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#453",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has an Amazon EC2 deployment that has the following architecture:<br>✑ An application tier that contains 8 m4.xlarge instances<br>✑ A Classic Load Balancer<br>✑ Amazon S3 as a persistent data store<br>After one of the EC2 instances fails, users report very slow processing of their requests. A Solutions Architect must recommend design changes to maximize system reliability. The solution must minimize costs.<br>What should the Solutions Architect recommend?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#453",
          answers: [
            {
              choice:
                "<p>A.  Migrate the existing EC2 instances to a serverless deployment using AWS Lambda functions</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Change the Classic Load Balancer to an Application Load Balancer</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Replace the application tier with m4.large instances in an Auto Scaling group</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Replace the application tier with 4 m4.2xlarge instances</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#454",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>An on-premises application will be migrated to the cloud. The application consists of a single Elasticsearch virtual machine with data source feeds from local systems that will not be migrated, and a Java web application on Apache Tomcat running on three virtual machines. The Elasticsearch server currently uses 1 TB of storage out of 16 TB available storage, and the web application is updated every 4 months. Multiple users access the web application from the Internet. There is a 10Gbit AWS Direct Connect connection established, and the application can be migrated over a scheduled 48-hour change window.<br>Which strategy will have the LEAST impact on the Operations staff after the migration?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#454",
          answers: [
            {
              choice:
                "<p>A.  Create an Elasticsearch server on Amazon EC2 right-sized with 2 TB of Amazon EBS and a public AWS Elastic Beanstalk environment for the web application. Pause the data sources, export the Elasticsearch index from on premises, and import into the EC2 Elasticsearch server. Move data source feeds to the new Elasticsearch server and move users to the web application.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an Amazon ES cluster for Elasticsearch and a public AWS Elastic Beanstalk environment for the web application. Use AWS DMS to replicate Elasticsearch data. When replication has finished, move data source feeds to the new Amazon ES cluster endpoint and move users to the new web application.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use the AWS SMS to replicate the virtual machines into AWS. When the migration is complete, pause the data source feeds and start the migrated Elasticsearch and web application instances. Place the web application instances behind a public Elastic Load Balancer. Move the data source feeds to the new Elasticsearch server and move users to the new web Application Load Balancer.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an Amazon ES cluster for Elasticsearch and a public AWS Elastic Beanstalk environment for the web application. Pause the data source feeds, export the Elasticsearch index from on premises, and import into the Amazon ES cluster. Move the data source feeds to the new Amazon ES cluster endpoint and move users to the new web application.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#455",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company's application is increasingly popular and experiencing latency because of high volume reads on the database server.<br>The service has the following properties:<br>✑ A highly available REST API hosted in one region using Application Load Balancer (ALB) with auto scaling.<br>✑ A MySQL database hosted on an Amazon EC2 instance in a single Availability Zone.<br>The company wants to reduce latency, increase in-region database read performance, and have multi-region disaster recovery capabilities that can perform a live recovery automatically without any data or performance loss (HA/DR).<br>Which deployment strategy will meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#455",
          answers: [
            {
              choice:
                "<p>A.  Use AWS CloudFormation StackSets to deploy the API layer in two regions. Migrate the database to an Amazon Aurora with MySQL database cluster with multiple read replicas in one region and a read replica in a different region than the source database cluster. Use Amazon Route 53 health checks to trigger a DNS failover to the standby region if the health checks to the primary load balancer fail. In the event of Route 53 failover, promote the cross-region database replica to be the master and build out new read replicas in the standby region.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use Amazon ElastiCache for Redis Multi-AZ with an automatic failover to cache the database read queries. Use AWS OpsWorks to deploy the API layer, cache layer, and existing database layer in two regions. In the event of failure, use Amazon Route 53 health checks on the database to trigger a DNS failover to the standby region if the health checks in the primary region fail. Back up the MySQL database frequently, and in the event of a failure in an active region, copy the backup to the standby region and restore the standby database.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use AWS CloudFormation StackSets to deploy the API layer in two regions. Add the database to an Auto Scaling group. Add a read replica to the database in the second region. Use Amazon Route 53 health checks on the database to trigger a DNS failover to the standby region if the health checks in the primary region fail. Promote the cross-region database replica to be the master and build out new read replicas in the standby region.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use Amazon ElastiCache for Redis Multi-AZ with an automatic failover to cache the database read queries. Use AWS OpsWorks to deploy the API layer, cache layer, and existing database layer in two regions. Use Amazon Route 53 health checks on the ALB to trigger a DNS failover to the standby region if the health checks in the primary region fail. Back up the MySQL database frequently, and in the event of a failure in an active region, copy the backup to the standby region and restore the standby database.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#456",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company runs a three-tier application in AWS. Users report that the application performance can vary greatly depending on the time of day and functionality being accessed.<br>The application includes the following components:<br>✑ Eight t2.large front-end web servers that serve static content and proxy dynamic content from the application tier.<br>✑ Four t2.large application servers.<br>✑ One db.m4.large Amazon RDS MySQL Multi-AZ DB instance.<br>Operations has determined that the web and application tiers are network constrained.<br>Which of the following is a cost effective way to improve application performance? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#456",
          answers: [
            {
              choice:
                "<p>A.  Replace web and app tiers with t2.xlarge instances</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS Auto Scaling and m4.large instances for the web and application tiers</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Convert the MySQL RDS instance to a self-managed MySQL cluster on Amazon EC2</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an Amazon CloudFront distribution to cache content</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Increase the size of the Amazon RDS instance to db.m4.xlarge</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#457",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>An online retailer needs to regularly process large product catalogs, which are handled in batches. These are sent out to be processed by people using the<br>Amazon Mechanical Turk service, but the retailer has asked its Solutions Architect to design a workflow orchestration system that allows it to handle multiple concurrent Mechanical Turk operations, deal with the result assessment process, and reprocess failures.<br>Which of the following options gives the retailer the ability to interrogate the state of every workflow with the LEAST amount of implementation effort?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#457",
          answers: [
            {
              choice:
                "<p>A.  Trigger Amazon CloudWatch alarms based upon message visibility in multiple Amazon SQS queues (one queue per workflow stage) and send messages via Amazon SNS to trigger AWS Lambda functions to process the next step. Use Amazon ES and Kibana to visualize Lambda processing logs to see the workflow states.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Hold workflow information in an Amazon RDS instance with AWS Lambda functions polling RDS for status changes. Worker Lambda functions then process the next workflow steps. Amazon QuickSight will visualize workflow states directly out of Amazon RDS.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Build the workflow in AWS Step Functions, using it to orchestrate multiple concurrent workflows. The status of each workflow can be visualized in the AWS Management Console, and historical data can be written to Amazon S3 and visualized using Amazon QuickSight.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use Amazon SWF to create a workflow that handles a single batch of catalog records with multiple worker tasks to extract the data, transform it, and send it through Mechanical Turk. Use Amazon ES and Kibana to visualize AWS Lambda processing logs to see the workflow states.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#458",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>An organization has two Amazon EC2 instances:<br>✑ The first is running an ordering application and an inventory application.<br>The second is running a queuing system.<br><img src='https://www.examtopics.com/assets/media/exam-media/04241/0030200002.png'><br>During certain times of the year, several thousand orders are placed per second. Some orders were lost when the queuing system was down. Also, the organization's inventory application has the incorrect quantity of products because some orders were processed twice.<br>What should be done to ensure that the applications can handle the increasing number of orders?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#458",
          answers: [
            {
              choice:
                "<p>A.  Put the ordering and inventory applications into their own AWS Lambda functions. Have the ordering application write the messages into an Amazon SQS FIFO queue.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Put the ordering and inventory applications into their own Amazon ECS containers, and create an Auto Scaling group for each application. Then, deploy the message queuing server in multiple Availability Zones.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Put the ordering and inventory applications into their own Amazon EC2 instances, and create an Auto Scaling group for each application. Use Amazon SQS standard queues for the incoming orders, and implement idempotency in the inventory application.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Put the ordering and inventory applications into their own Amazon EC2 instances. Write the incoming orders to an Amazon Kinesis data stream. Configure AWS Lambda to poll the stream and update the inventory application.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#459",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is migrating its on-premises build artifact server to an AWS solution. The current system consists of an Apache HTTP server that serves artifacts to clients on the local network, restricted by the perimeter firewall. The artifact consumers are largely build automation scripts that download artifacts via anonymous<br>HTTP, which the company will be unable to modify within its migration timetable.<br>The company decides to move the solution to Amazon S3 static website hosting. The artifact consumers will be migrated to Amazon EC2 instances located within both public and private subnets in a virtual private cloud (VPC).<br>Which solution will permit the artifact consumers to download artifacts without modifying the existing automation scripts?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#459",
          answers: [
            {
              choice:
                "<p>A.  Create a NAT gateway within a public subnet of the VPC.  Add a default route pointing to the NAT gateway into the route table associated with the subnets containing consumers. Configure the bucket policy to allow the s3:ListBucket and s3:GetObject actions using the condition IpAddress and the condition key aws:SourceIp matching the elastic IP address of the NAT gateway.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a VPC endpoint and add it to the route table associated with subnets containing consumers. Configure the bucket policy to allow s3:ListBucket and s3:GetObject actions using the condition StringEquals and the condition key aws:sourceVpce matching the identification of the VPC endpoint.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an IAM role and instance profile for Amazon EC2 and attach it to the instances that consume build artifacts. Configure the bucket policy to allow the s3:ListBucket and s3:GetObjects actions for the principal matching the IAM role created.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a VPC endpoint and add it to the route table associated with subnets containing consumers. Configure the bucket policy to allow s3:ListBucket and s3:GetObject actions using the condition IpAddress and the condition key aws:SourceIp matching the VPC CIDR block.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#460",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A group of research institutions and hospitals are in a partnership to study 2 PBs of genomic data. The institute that owns the data stores it in an Amazon S3 bucket and updates it regularly. The institute would like to give all of the organizations in the partnership read access to the data. All members of the partnership are extremely cost-conscious, and the institute that owns the account with the S3 bucket is concerned about covering the costs for requests and data transfers from Amazon S3.<br>Which solution allows for secure datasharing without causing the institute that owns the bucket to assume all the costs for S3 requests and data transfers?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#460",
          answers: [
            {
              choice:
                "<p>A.  Ensure that all organizations in the partnership have AWS accounts. In the account with the S3 bucket, create a cross-account role for each account in the partnership that allows read access to the data. Have the organizations assume and use that read role when accessing the data.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Ensure that all organizations in the partnership have AWS accounts. Create a bucket policy on the bucket that owns the data. The policy should allow the accounts in the partnership read access to the bucket. Enable Requester Pays on the bucket. Have the organizations use their AWS credentials when accessing the data.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Ensure that all organizations in the partnership have AWS accounts. Configure buckets in each of the accounts with a bucket policy that allows the institute that owns the data the ability to write to the bucket. Periodically sync the data from the institute's account to the other organizations. Have the organizations use their AWS credentials when accessing the data using their accounts.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Ensure that all organizations in the partnership have AWS accounts. In the account with the S3 bucket, create a cross-account role for each account in the partnership that allows read access to the data. Enable Requester Pays on the bucket. Have the organizations assume and use that read role when accessing the data.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#461",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company currently uses a single 1 Gbps AWS Direct Connect connection to establish connectivity between an AWS Region and its data center. The company has five Amazon VPCs, all of which are connected to the data center using the same Direct Connect connection. The Network team is worried about the single point of failure and is interested in improving the redundancy of the connections to AWS while keeping costs to a minimum.<br>Which solution would improve the redundancy of the connection to AWS while meeting the cost requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#461",
          answers: [
            {
              choice:
                "<p>A.  Provision another 1 Gbps Direct Connect connection and create new VIFs to each of the VPCs. Configure the VIFs in a load balancing fashion using BGP.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Set up VPN tunnels from the data center to each VPC.  Terminate each VPN tunnel at the virtual private gateway (VGW) of the respective VPC and set up BGP for route management.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Set up a new point-to-point Multiprotocol Label Switching (MPLS) connection to the AWS Region that's being used. Configure BGP to use this new circuit as passive, so that no traffic flows through this unless the AWS Direct Connect fails.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a public VIF on the Direct Connect connection and set up a VPN tunnel which will terminate on the virtual private gateway (VGW) of the respective VPC using the public VIF.  Use BGP to handle the failover to the VPN connection.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#462",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company currently uses Amazon EBS and Amazon RDS for storage purposes. The company intends to use a pilot light approach for disaster recovery in a different AWS Region. The company has an RTO of 6 hours and an RPO of 24 hours.<br>Which solution would achieve the requirements with MINIMAL cost?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#462",
          answers: [
            {
              choice:
                "<p>A.  Use AWS Lambda to create daily EBS and RDS snapshots, and copy them to the disaster recovery region. Use Amazon Route 53 with active-passive failover configuration. Use Amazon EC2 in an Auto Scaling group with the capacity set to 0 in the disaster recovery region.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS Lambda to create daily EBS and RDS snapshots, and copy them to the disaster recovery region. Use Amazon Route 53 with active-active failover configuration. Use Amazon EC2 in an Auto Scaling group configured in the same way as in the primary region.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use Amazon ECS to handle long-running tasks to create daily EBS and RDS snapshots, and copy to the disaster recovery region. Use Amazon Route 53 with active-passive failover configuration. Use Amazon EC2 in an Auto Scaling group with the capacity set to 0 in the disaster recovery region.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use EBS and RDS cross-region snapshot copy capability to create snapshots in the disaster recovery region. Use Amazon Route 53 with active-active failover configuration. Use Amazon EC2 in an Auto Scaling group with the capacity set to 0 in the disaster recovery region.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#463",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company needs to cost-effectively persist small data records (up to 1 KiB) for up to 30 days. The data is read rarely. When reading the data, a 5-minute delay is acceptable.<br>Which of the following solutions achieve this goal? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#463",
          answers: [
            {
              choice:
                "<p>A.  Use Amazon S3 to collect multiple records in one S3 object. Use a lifecycle configuration to move data to Amazon Glacier immediately after write. Use expedited retrievals when reading the data.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Write the records to Amazon Kinesis Data Firehose and configure Kinesis Data Firehose to deliver the data to Amazon S3 after 5 minutes. Set an expiration action at 30 days on the S3 bucket.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use an AWS Lambda function invoked via Amazon API Gateway to collect data for 5 minutes. Write data to Amazon S3 just before the Lambda execution stops.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Write the records to Amazon DynamoDB configured with a Time To Live (TTL) of 30 days. Read data using the GetItem or BatchGetItem call.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Write the records to an Amazon ElastiCache for Redis. Configure the Redis append-only file (AOF) persistence logs to write to Amazon S3. Recover from the log if the ElastiCache instance has failed.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#464",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A Development team is deploying new APIs as serverless applications within a company. The team is currently using the AWS Management Console to provision<br>Amazon API Gateway, AWS Lambda, and Amazon DynamoDB resources. A Solutions Architect has been tasked with automating the future deployments of these serverless APIs.<br>How can this be accomplished?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#464",
          answers: [
            {
              choice:
                "<p>A.  Use AWS CloudFormation with a Lambda-backed custom resource to provision API Gateway. Use the AWS::DynamoDB::Table and AWS::Lambda::Function resources to create the Amazon DynamoDB table and Lambda functions. Write a script to automate the deployment of the CloudFormation template.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use the AWS Serverless Application Model to define the resources. Upload a YAML template and application files to the code repository. Use AWS CodePipeline to connect to the code repository and to create an action to build using AWS CodeBuild. Use the AWS CloudFormation deployment provider in CodePipeline to deploy the solution.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use AWS CloudFormation to define the serverless application. Implement versioning on the Lambda functions and create aliases to point to the versions. When deploying, configure weights to implement shifting traffic to the newest version, and gradually update the weights as traffic moves over.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Commit the application code to the AWS CodeCommit code repository. Use AWS CodePipeline and connect to the CodeCommit code repository. Use AWS CodeBuild to build and deploy the Lambda functions using AWS CodeDeploy. Specify the deployment preference type in CodeDeploy to gradually shift traffic over to the new version.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#465",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>The company Security team requires that all data uploaded into an Amazon S3 bucket must be encrypted. The encryption keys must be highly available and the company must be able to control access on a per-user basis, with different users having access to different encryption keys.<br>Which of the following architectures will meet these requirements? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#465",
          answers: [
            {
              choice:
                "<p>A.  Use Amazon S3 server-side encryption with Amazon S3-managed keys. Allow Amazon S3 to generate an AWS/S3 master key, and use IAM to control access to the data keys that are generated.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use Amazon S3 server-side encryption with AWS KMS-managed keys, create multiple customer master keys, and use key policies to control access to them.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use Amazon S3 server-side encryption with customer-managed keys, and use AWS CloudHSM to manage the keys. Use CloudHSM client software to control access to the keys that are generated.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use Amazon S3 server-side encryption with customer-managed keys, and use two AWS CloudHSM instances configured in high-availability mode to manage the keys. Use the CloudHSM client software to control access to the keys that are generated.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Use Amazon S3 server-side encryption with customer-managed keys, and use two AWS CloudHSM instances configured in high-availability mode to manage the keys. Use IAM to control access to the keys that are generated in CloudHSM.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#466",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company runs a public-facing application that uses a Java-based web service via a RESTful API. It is hosted on Apache Tomcat on a single server in a data center that runs consistently at 30% CPU utilization. Use of the API is expected to increase by 10 times with a new product launch. The business wants to migrate the application to AWS with no disruption, and needs it to scale to meet demand.<br>The company has already decided to use Amazon Route 53 and CNAME records to redirect traffic. How can these requirements be met with the LEAST amount of effort?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#466",
          answers: [
            {
              choice:
                "<p>A.  Use AWS Elastic Beanstalk to deploy the Java web service and enable Auto Scaling. Then switch the application to use the new web service.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Lift and shift the Apache server to the cloud using AWS SMS. Then switch the application to direct web service traffic to the new instance.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a Docker image and migrate the image to Amazon ECS. Then change the application code to direct web service queries to the ECS container.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Modify the application to call the web service via Amazon API Gateway. Then create a new AWS Lambda Java function to run the Java web service code. After testing, change API Gateway to use the Lambda function.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#467",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is using AWS for production and development workloads. Each business unit has its own AWS account for production, and a separate AWS account to develop and deploy its applications. The Information Security department has introduced new security policies that limit access for terminating certain Amazon<br>EC2 instances in all accounts to a small group of individuals from the Security team.<br>How can the Solutions Architect meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#467",
          answers: [
            {
              choice:
                "<p>A.  Create a new IAM policy that allows access to those EC2 instances only for the Security team. Apply this policy to the AWS Organizations master account.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a new tag-based IAM policy that allows access to these EC2 instances only for the Security team. Tag the instances appropriately, and apply this policy in each account.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an organizational unit under AWS Organizations. Move all the accounts into this organizational unit and use SCP to apply a whitelist policy to allow access to these EC2 instances for the Security team only.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Set up SAML federation for all accounts in AWS. Configure SAML so that it checks for the service API call before authenticating the user. Block SAML from authenticating API calls if anyone other than the Security team accesses these instances.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#468",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is moving a business-critical, multi-tier application to AWS. The architecture consists of a desktop client application and server infrastructure. The server infrastructure resides in an on-premises data center that frequently fails to maintain the application uptime SLA of 99.95%. A Solutions Architect must re- architect the application to ensure that it can meet or exceed the SLA.<br>The application contains a PostgreSQL database running on a single virtual machine. The business logic and presentation layers are load balanced between multiple virtual machines. Remote users complain about slow load times while using this latency-sensitive application.<br>Which of the following will meet the availability requirements with little change to the application while improving user experience and minimizing costs?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#468",
          answers: [
            {
              choice:
                "<p>A.  Migrate the database to a PostgreSQL database in Amazon EC2. Host the application and presentation layers in automatically scaled Amazon ECS containers behind an Application Load Balancer. Allocate an Amazon WorkSpaces WorkSpace for each end user to improve the user experience.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Migrate the database to an Amazon RDS Aurora PostgreSQL configuration. Host the application and presentation layers in an Auto Scaling configuration on Amazon EC2 instances behind an Application Load Balancer. Use Amazon AppStream 2.0 to improve the user experience.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Migrate the database to an Amazon RDS PostgreSQL Multi-AZ configuration. Host the application and presentation layers in automatically scaled AWS Fargate containers behind a Network Load Balancer. Use Amazon ElastiCache to improve the user experience.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Migrate the database to an Amazon Redshift cluster with at least two nodes. Combine and host the application and presentation layers in automatically scaled Amazon ECS containers behind an Application Load Balancer. Use Amazon CloudFront to improve the user experience.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#469",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company needs to run a software package that has a license that must be run on the same physical host for the duration of its use. The software package is only going to be used for 90 days. The company requires patching and restarting of all instances every 30 days.<br>How can these requirements be met using AWS?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#469",
          answers: [
            {
              choice:
                "<p>A.  Run a dedicated instance with auto-placement disabled.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Run the instance on a dedicated host with Host Affinity set to Host.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Run an On-Demand Instance with a Reserved Instance to ensure consistent placement.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Run the instance on a licensed host with termination set for 90 days.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#470",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A bank is designing an online customer service portal where customers can chat with customer service agents. The portal is required to maintain a 15-minute<br>RPO or RTO in case of a regional disaster. Banking regulations require that all customer service chat transcripts must be preserved on durable storage for at least<br>7 years, chat conversations must be encrypted in-flight, and transcripts must be encrypted at rest. The Data Loss Prevention team requires that data at rest must be encrypted using a key that the team controls, rotates, and revokes.<br>Which design meets these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#470",
          answers: [
            {
              choice:
                "<p>A.  The chat application logs each chat message into Amazon CloudWatch Logs. A scheduled AWS Lambda function invokes a CloudWatch Logs CreateExportTask every 5 minutes to export chat transcripts to Amazon S3. The S3 bucket is configured for cross-region replication to the backup region. Separate AWS KMS keys are specified for the CloudWatch Logs group and the S3 bucket.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  The chat application logs each chat message into two different Amazon CloudWatch Logs groups in two different regions, with the same AWS KMS key applied. Both CloudWatch Logs groups are configured to export logs into an Amazon Glacier vault with a 7-year vault lock policy with a KMS key specified.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  The chat application logs each chat message into Amazon CloudWatch Logs. A subscription filter on the CloudWatch Logs group feeds into an Amazon Kinesis Data Firehose which streams the chat messages into an Amazon S3 bucket in the backup region. Separate AWS KMS keys are specified for the CloudWatch Logs group and the Kinesis Data Firehose.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  The chat application logs each chat message into Amazon CloudWatch Logs. The CloudWatch Logs group is configured to export logs into an Amazon Glacier vault with a 7-year vault lock policy. Glacier cross-region replication mirrors chat archives to the backup region. Separate AWS KMS keys are specified for the CloudWatch Logs group and the Amazon Glacier vault.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#471",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company currently runs a secure application on Amazon EC2 that takes files from on-premises locations through AWS Direct Connect, processes them, and uploads them to a single Amazon S3 bucket. The application uses HTTPS for encryption in transit to Amazon S3, and S3 server-side encryption to encrypt at rest.<br>Which of the following changes should the Solutions Architect recommend to make this solution more secure without impeding application's performance?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#471",
          answers: [
            {
              choice:
                "<p>A.  Add a NAT gateway. Update the security groups on the EC2 instance to allow access to and from the S3 IP range only. Configure an S3 bucket policy that allows communication from the NAT gateway's Elastic IP address only.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Add a VPC endpoint. Configure endpoint policies on the VPC endpoint to allow access to the required Amazon S3 buckets only. Implement an S3 bucket policy that allows communication from the VPC's source IP range only.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Add a NAT gateway. Update the security groups on the EC2 instance to allow access to and from the S3 IP range only. Configure an S3 bucket policy that allows communication from the source public IP address of the on-premises network only.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Add a VPC endpoint. Configure endpoint policies on the VPC endpoint to allow access to the required S3 buckets only. Implement an S3 bucket policy that allows communication from the VPC endpoint only.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#472",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>As a part of building large applications in the AWS Cloud, the Solutions Architect is required to implement the perimeter security protection. Applications running on AWS have the following endpoints:<br>✑ Application Load Balancer<br>✑ Amazon API Gateway regional endpoint<br>✑ Elastic IP address-based EC2 instances.<br>✑ Amazon S3 hosted websites.<br>✑ Classic Load Balancer<br>The Solutions Architect must design a solution to protect all of the listed web front ends and provide the following security capabilities:<br>✑ DDoS protection<br>✑ SQL injection protection<br>✑ IP address whitelist/blacklist<br>✑ HTTP flood protection<br>✑ Bad bot scraper protection<br>How should the Solutions Architect design the solution?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#472",
          answers: [
            {
              choice:
                "<p>A.  Deploy AWS WAF and AWS Shield Advanced on all web endpoints. Add AWS WAF rules to enforce the company's requirements.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Deploy Amazon CloudFront in front of all the endpoints. The CloudFront distribution provides perimeter protection. Add AWS Lambda-based automation to provide additional security.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Deploy Amazon CloudFront in front of all the endpoints. Deploy AWS WAF and AWS Shield Advanced. Add AWS WAF rules to enforce the company's requirements. Use AWS Lambda to automate and enhance the security posture.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Secure the endpoints by using network ACLs and security groups and adding rules to enforce the company's requirements. Use AWS Lambda to automatically update the rules.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#473",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has more than 100 AWS accounts, with one VPC per account, that need outbound HTTPS connectivity to the internet. The current design contains one NAT gateway per Availability Zone (AZ) in each VPC. To reduce costs and obtain information about outbound traffic, management has asked for a new architecture for internet access.<br>Which solution will meet the current needs, and continue to grow as new accounts are provisioned, while reducing costs?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#473",
          answers: [
            {
              choice:
                "<p>A.  Create a transit VPC across two AZs using a third-party routing appliance. Create a VPN connection to each VPC.  Default route internet traffic to the transit VPC. </p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create multiple hosted-private AWS Direct Connect VIFs, one per account, each with a Direct Connect gateway. Default route internet traffic back to an on- premises router to route to the internet.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a central VPC for outbound internet traffic. Use VPC peering to default route to a set of redundant NAT gateway in the central VPC. </p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a proxy fleet in a central VPC account. Create an AWS PrivateLink endpoint service in the central VPC.  Use PrivateLink interface for internet connectivity through the proxy fleet.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#474",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company runs an e-commerce platform with front-end and e-commerce tiers. Both tiers run on LAMP stacks with the front-end instances running behind a load balancing appliance that has a virtual offering on AWS. Currently, the Operations team uses SSH to log in to the instances to maintain patches and address other concerns. The platform has recently been the target of multiple attacks, including:<br>✑ A DDoS attack.<br>✑ An SQL injection attack.<br>✑ Several successful dictionary attacks on SSH accounts on the web servers.<br>The company wants to improve the security of the e-commerce platform by migrating to AWS. The company's Solutions Architects have decided to use the following approach:<br>✑ Code review the existing application and fix any SQL injection issues.<br>✑ Migrate the web application to AWS and leverage the latest AWS Linux AMI to address initial security patching.<br>✑ Install AWS Systems Manager to manage patching and allow the system administrators to run commands on all instances, as needed. all<br>What additional steps will address<br>of the identified attack types while providing high availability and minimizing risk?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#474",
          answers: [
            {
              choice:
                "<p>A.  Enable SSH access to the Amazon EC2 instances using a security group that limits access to specific IPs. Migrate on-premises MySQL to Amazon RDS Multi- AZ. Install the third-party load balancer from the AWS Marketplace and migrate the existing rules to the load balancer's AWS instances. Enable AWS Shield Standard for DDoS protection.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Disable SSH access to the Amazon EC2 instances. Migrate on-premises MySQL to Amazon RDS Multi-AZ. Leverage an Elastic Load Balancer to spread the load and enable AWS Shield Advanced for protection. Add an Amazon CloudFront distribution in front of the website. Enable AWS WAF on the distribution to manage the rules.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Enable SSH access to the Amazon EC2 instances through a bastion host secured by limiting access to specific IP addresses. Migrate on-premises MySQL to a self-managed EC2 instance. Leverage an AWS Elastic Load Balancer to spread the load and enable AWS Shield Standard for DDoS protection. Add an Amazon CloudFront distribution in front of the website.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Disable SSH access to the EC2 instances. Migrate on-premises MySQL to Amazon RDS Single-AZ. Leverage an AWS Elastic Load Balancer to spread the load. Add an Amazon CloudFront distribution in front of the website. Enable AWS WAF on the distribution to manage the rules.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#475",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has a High Performance Computing (HPC) cluster in its on-premises data center, which runs thousands of jobs in parallel for one week every month, processing petabytes of images. The images are stored on a network file server, which is replicated to a disaster recovery site. The on-premises data center has reached capacity and has started to spread the jobs out over the course of the month in order to better utilize the cluster, causing a delay in the job completion.<br>The company has asked its Solutions Architect to design a cost-effective solution on AWS to scale beyond the current capacity of 5,000 cores and 10 petabytes of data. The solution must require the least amount of management overhead and maintain the current level of durability.<br>Which solution will meet the company's requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#475",
          answers: [
            {
              choice:
                "<p>A.  Create a container in the Amazon Elastic Container Registry with the executable file for the job. Use Amazon ECS with Spot Fleet in Auto Scaling groups. Store the raw data in Amazon EBS SC1 volumes and write the output to Amazon S3.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an Amazon EMR cluster with a combination of On Demand and Reserved Instance Task Nodes that will use Spark to pull data from Amazon S3. Use Amazon DynamoDB to maintain a list of jobs that need to be processed by the Amazon EMR cluster.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Store the raw data in Amazon S3, and use AWS Batch with Managed Compute Environments to create Spot Fleets. Submit jobs to AWS Batch Job Queues to pull down objects from Amazon S3 onto Amazon EBS volumes for temporary storage to be processed, and then write the results back to Amazon S3.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Submit the list of jobs to be processed to an Amazon SQS to queue the jobs that need to be processed. Create a diversified cluster of Amazon EC2 worker instances using Spot Fleet that will automatically scale based on the queue depth. Use Amazon EFS to store all the data sharing it across all instances in the cluster.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#476",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A large company has many business units. Each business unit has multiple AWS accounts for different purposes. The CIO of the company sees that each business unit has data that would be useful to share with other parts of the company. In total, there are about 10 PB of data that needs to be shared with users in<br>1,000 AWS accounts. The data is proprietary, so some of it should only be available to users with specific job types. Some of the data is used for throughput of intensive workloads, such as simulations. The number of accounts changes frequently because of new initiatives, acquisitions, and divestitures.<br>A Solutions Architect has been asked to design a system that will allow for sharing data for use in AWS with all of the employees in the company.<br>Which approach will allow for secure data sharing in scalable way?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#476",
          answers: [
            {
              choice:
                "<p>A.  Store the data in a single Amazon S3 bucket. Create an IAM role for every combination of job type and business unit that allows for appropriate read/write access based on object prefixes in the S3 bucket. The roles should have trust policies that allow the business unit's AWS accounts to assume their roles. Use IAM in each business unit's AWS account to prevent them from assuming roles for a different job type. Users get credentials to access the data by using AssumeRole from their business unit's AWS account. Users can then use those credentials with an S3 client.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Store the data in a single Amazon S3 bucket. Write a bucket policy that uses conditions to grant read and write access where appropriate, based on each user's business unit and job type. Determine the business unit with the AWS account accessing the bucket and the job type with a prefix in the IAM user's name. Users can access data by using IAM credentials from their business unit's AWS account with an S3 client.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Store the data in a series of Amazon S3 buckets. Create an application running in Amazon EC2 that is integrated with the company's identity provider (IdP) that authenticates users and allows them to download or upload data through the application. The application uses the business unit and job type information in the IdP to control what users can upload and download through the application. The users can access the data through the application's API.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Store the data in a series of Amazon S3 buckets. Create an AWS STS token vending machine that is integrated with the company's identity provider (IdP). When a user logs in, have the token vending machine attach an IAM policy that assumes the role that limits the user's access and/or upload only the data the user is authorized to access. Users can get credentials by authenticating to the token vending machine's website or API and then use those credentials with an S3 client.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#477",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company wants to migrate its website from an on-premises data center onto AWS. At the same time, it wants to migrate the website to a containerized microservice-based architecture to improve the availability and cost efficiency. The company's security policy states that privileges and network permissions must be configured according to best practice, using least privilege.<br>A Solutions Architect must create a containerized architecture that meets the security requirements and has deployed the application to an Amazon ECS cluster.<br>What steps are required after the deployment to meet the requirements? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BE</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#477",
          answers: [
            {
              choice: "<p>A.  Create tasks using the bridge network mode.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice: "<p>B.  Create tasks using the awsvpc network mode.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Apply security groups to Amazon EC2 instances, and use IAM roles for EC2 instances to access other resources.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Apply security groups to the tasks, and pass IAM credentials into the container at launch time to access other resources.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Apply security groups to the tasks, and use IAM roles for tasks to access other resources.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#478",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is migrating its marketing website and content management system from an on-premises data center to AWS. The company wants the AWS application to be deployed in a VPC with Amazon EC2 instances used for the web servers and an Amazon RDS instance for the database.<br>The company has a runbook document that describes the installation process of the on-premises system. The company would like to base the AWS system on the processes referenced in the runbook document. The runbook document describes the installation and configuration of the operating systems, network settings, the website, and content management system software on the servers. After the migration is complete, the company wants to be able to make changes quickly to take advantage of other AWS features.<br>How can the application and environment be deployed and automated in AWS, while allowing for future changes?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#478",
          answers: [
            {
              choice:
                "<p>A.  Update the runbook to describe how to create the VPC, the EC2 instances, and the RDS instance for the application by using the AWS Console. Make sure that the rest of the steps in the runbook are updated to reflect any changes that may come from the AWS migration.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Write a Python script that uses the AWS API to create the VPC, the EC2 instances, and the RDS instance for the application. Write shell scripts that implement the rest of the steps in the runbook. Have the Python script copy and run the shell scripts on the newly created instances to complete the installation.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Write an AWS CloudFormation template that creates the VPC, the EC2 instances, and the RDS instance for the application. Ensure that the rest of the steps in the runbook are updated to reflect any changes that may come from the AWS migration.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Write an AWS CloudFormation template that creates the VPC, the EC2 instances, and the RDS instance for the application. Include EC2 user data in the AWS CloudFormation template to install and configure the software.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#479",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is adding a new approved external vendor that only supports IPv6 connectivity. The company's backend systems sit in the private subnet of an<br>Amazon VPC. The company uses a NAT gateway to allow these systems to communicate with external vendors over IPv4. Company policy requires systems that communicate with external vendors to use a security group that limits access to only approved external vendors. The virtual private cloud (VPC) uses the default network ACL.<br>The Systems Operator successfully assigns IPv6 addresses to each of the backend systems. The Systems Operator also updates the outbound security group to include the IPv6 CIDR of the external vendor (destination). The systems within the VPC are able to ping one another successfully over IPv6. However, these systems are unable to communicate with the external vendor.<br>What changes are required to enable communication with the external vendor?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#479",
          answers: [
            {
              choice:
                "<p>A.  Create an IPv6 NAT instance. Add a route for destination 0.0.0.0/0 pointing to the NAT instance.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Enable IPv6 on the NAT gateway. Add a route for destination ::/0 pointing to the NAT gateway.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Enable IPv6 on the internet gateway. Add a route for destination 0.0.0.0/0 pointing to the IGW.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an egress-only internet gateway. Add a route for destination ::/0 pointing to the gateway.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#480",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A finance company is running its business-critical application on current-generation Linux EC2 instances. The application includes a self-managed MySQL database performing heavy I/O operations. The application is working fine to handle a moderate amount of traffic during the month. However, it slows down during the final three days of each month due to month-end reporting, even though the company is using Elastic Load Balancers and Auto Scaling within its infrastructure to meet the increased demand.<br>Which of the following actions would allow the database to handle the month-end load with the LEAST impact on performance?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#480",
          answers: [
            {
              choice:
                "<p>A.  Pre-warming Elastic Load Balancers, using a bigger instance type, changing all Amazon EBS volumes to GP2 volumes.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Performing a one-time migration of the database cluster to Amazon RDS, and creating several additional read replicas to handle the load during end of month.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Using Amazon CloudWatch with AWS Lambda to change the type, size, or IOPS of Amazon EBS volumes in the cluster based on a specific CloudWatch metric.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Replacing all existing Amazon EBS volumes with new PIOPS volumes that have the maximum available storage size and I/O per second by taking snapshots before the end of the month and reverting back afterwards.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#481",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A Solutions Architect is designing the storage layer for a data warehousing application. The data files are large, but they have statically placed metadata at the beginning of each file that describes the size and placement of the file's index. The data files are read in by a fleet of Amazon EC2 instances that store the index size, index location, and other category information about the data file in a database. That database is used by Amazon EMR to group files together for deeper analysis.<br>What would be the MOST cost-effective, high availability storage solution for this workflow?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#481",
          answers: [
            {
              choice:
                "<p>A.  Store the data files in Amazon S3 and use Range GET for each file's metadata, then index the relevant data.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Store the data files in Amazon EFS mounted by the EC2 fleet and EMR nodes.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Store the data files on Amazon EBS volumes and allow the EC2 fleet and EMR to mount and unmount the volumes where they are needed.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Store the content of the data files in Amazon DynamoDB tables with the metadata, index, and data as their own keys.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#482",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company uses an Amazon EMR cluster to process data once a day. The raw data comes from Amazon S3, and the resulting processed data is also stored in<br>Amazon S3. The processing must complete within 4 hours; currently, it only takes 3 hours. However, the processing time is taking 5 to 10 minutes longer each week due to an increasing volume of raw data.<br>The team is also concerned about rising costs as the compute capacity increases. The EMR cluster is currently running on three m3.xlarge instances (one master and two core nodes).<br>Which of the following solutions will reduce costs related to the increasing compute needs?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#482",
          answers: [
            {
              choice:
                "<p>A.  Add additional task nodes, but have the team purchase an all-upfront convertible Reserved Instance for each additional node to offset the costs.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Add additional task nodes, but use instance fleets with the master node in on-Demand mode and a mix of On-Demand and Spot Instances for the core and task nodes. Purchase a scheduled Reserved Instance for the master node.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Add additional task nodes, but use instance fleets with the master node in Spot mode and a mix of On-Demand and Spot Instances for the core and task nodes. Purchase enough scheduled Reserved Instances to offset the cost of running any On-Demand instances.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Add additional task nodes, but use instance fleets with the master node in On-Demand mode and a mix of On-Demand and Spot Instances for the core and task nodes. Purchase a standard all-upfront Reserved Instance for the master node.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#483",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is building an AWS landing zone and has asked a Solutions Architect to design a multi-account access strategy that will allow hundreds of users to use corporate credentials to access the AWS Console. The company is running a Microsoft Active Directory, and users will use an AWS Direct Connect connection to connect to AWS. The company also wants to be able to federate to third-party services and providers, including custom applications.<br>Which solution meets the requirements by using the LEAST amount of management overhead?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#483",
          answers: [
            {
              choice:
                "<p>A.  Connect the Active Directory to AWS by using single sign-on and an Active Directory Federation Services (AD FS) with SAML 2.0, and then configure the Identity Provider (IdP) system to use form-based authentication. Build the AD FS portal page with corporate branding, and integrate third-party applications that support SAML 2.0 as required.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a two-way Forest trust relationship between the on-premises Active Directory and the AWS Directory Service. Set up AWS Single Sign-On with AWS Organizations. Use single sign-on integrations for connections with third-party applications.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure single sign-on by connecting the on-premises Active Directory using the AWS Directory Service AD Connector. Enable federation to the AWS services and accounts by using the IAM applications and services linking function. Leverage third-party single sign-on as needed.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Connect the company's Active Directory to AWS by using AD FS and SAML 2.0. Configure the AD FS claim rule to leverage Regex and a common Active Directory naming convention for the security group to allow federation of all AWS accounts. Leverage third-party single sign-on as needed, and add it to the AD FS server.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#484",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A Solutions Architect is designing a network solution for a company that has applications running in a data center in Northern Virginia. The applications in the company's data center require predictable performance to applications running in a virtual private cloud (VPC) located in us-east-1, and a secondary VPC in us- west-2 within the same account. The company data center is collocated in an AWS Direct Connect facility that serves the us-east-1 region. The company has already ordered an AWS Direct Connect connection and a cross-connect has been established.<br>Which solution will meet the requirements at the LOWEST cost?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#484",
          answers: [
            {
              choice:
                "<p>A.  Provision a Direct Connect gateway and attach the virtual private gateway (VGW) for the VPC in us-east-1 and the VGW for the VPC in us-west-2. Create a private VIF on the Direct Connect connection and associate it to the Direct Connect gateway.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create private VIFs on the Direct Connect connection for each of the company's VPCs in the us-east-1 and us-west-2 regions. Configure the company's data center router to connect directly with the VPCs in those regions via the private VIFs.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Deploy a transit VPC solution using Amazon EC2-based router instances in the us-east-1 region. Establish IPsec VPN tunnels between the transit routers and virtual private gateways (VGWs) located in the us-east-1 and us-west-2 regions, which are attached to the company's VPCs in those regions. Create a public VIF on the Direct Connect connection and establish IPsec VPN tunnels over the public VIF between the transit routers and the company's data center router.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Order a second Direct Connect connection to a Direct Connect facility with connectivity to the us-west-2 region. Work with a partner to establish a network extension link over dark fiber from the Direct Connect facility to the company's data center. Establish private VIFs on the Direct Connect connections for each of the company's VPCs in the respective regions. Configure the company's data center router to connect directly with the VPCs in those regions via the private VIFs.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#485",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has a web service deployed in the following two AWS Regions: us-west-2 and us-est-1. Each AWS region runs an identical version of the web service.<br>Amazon Route 53 is used to route customers to the AWS Region that has the lowest latency.<br>The company wants to improve the availability of the web service in case an outage occurs in one of the two AWS Regions.<br>A Solutions Architect has recommended that a Route 53 health check be performed. The health check must detect a specific text on an endpoint.<br>What combination of conditions should the endpoint meet to pass the Route 53 health check? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: CD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#485",
          answers: [
            {
              choice:
                "<p>A.  The endpoint must establish a TCP connection within 10 seconds.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  The endpoint must return an HTTP 200 status code.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  The endpoint must return an HTTP 2xx or 3xx status code.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  The specific text string must appear within the first 5,120 bytes of the response.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  The endpoint must respond to the request within the number of seconds specified when creating the health check.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#486",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company operating a website on AWS requires high levels of scalability, availability, and performance. The company is running a Ruby on Rails application on<br>Amazon EC2. It has a data tier on MySQL 5.6 on Amazon EC2 using 16 TB of Amazon EBS storage Amazon CloudFront is used to cache application content.<br>The Operations team is reporting continuous and unexpected growth of EBS volumes assigned to the MySQL database. The Solutions Architect has been asked to design a highly scalable, highly available, and high-performing solution.<br>Which solution is the MOST cost-effective at scale?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#486",
          answers: [
            {
              choice:
                "<p>A.  Implement Multi-AZ and Auto Scaling for all EC2 instances in the current configuration. Ensure that all EC2 instances are purchased as reserved instances. Implement new elastic Amazon EBS volumes for the data tier.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Design and implement the Docker-based containerized solution for the application using Amazon ECS. Migrate to an Amazon Aurora MySQL Multi-AZ cluster. Implement storage checks for Aurora MySQL storage utilization and an AWS Lambda function to grow the Aurora MySQL storage, as necessary. Ensure that Multi-AZ architectures are implemented.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Ensure that EC2 instances are right-sized and behind an Elastic Load Balancing load balancer. Implement Auto Scaling with EC2 instances. Ensure that the reserved instances are purchased for fixed capacity and that Auto Scaling instances run on demand. Migrate to an Amazon Aurora MySQL Multi-AZ cluster. Ensure that Multi-AZ architectures are implemented.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Ensure that EC2 instances are right-sized and behind an Elastic Load Balancer. Implement Auto Scaling with EC2 instances. Ensure that Reserved instances are purchased for fixed capacity and that Auto Scaling instances run on demand. Migrate to an Amazon Aurora MySQL Multi-AZ cluster. Implement storage checks for Aurora MySQL storage utilization and an AWS Lambda function to grow Aurora MySQL storage, as necessary. Ensure Multi-AZ architectures are implemented.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#487",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>The Security team needs to provide a team of interns with an AWS environment so they can build a serverless video transcoding application. The project will use<br>Amazon S3, AWS Lambda, Amazon API Gateway, Amazon Cognito, Amazon DynamoDB, and Amazon Elastic Transcoder.<br>The interns should be able to create and configure the necessary resources, but they may not have access to create or modify AWS IAM roles. The Solutions<br>Architect creates a policy and attaches it to the interns' group.<br>How should the Security team configure the environment to ensure that the interns are self-sufficient?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#487",
          answers: [
            {
              choice:
                "<p>A.  Create a policy that allows creation of project-related resources only. Create roles with required service permissions, which are assumable by the services.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a policy that allows creation of all project-related resources, including roles that allow access only to specified resources.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create roles with the required service permissions, which are assumable by the services. Have the interns create and use a bastion host to create the project resources in the project subnet only.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a policy that allows creation of project-related resources only. Require the interns to raise a request for roles to be created with the Security team. The interns will provide the requirements for the permissions to be set in the role.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#488",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is running a commercial Apache Hadoop cluster on Amazon EC2. This cluster is being used daily to query large files on Amazon S3. The data on<br>Amazon S3 has been curated and does not require any additional transformations steps. The company is using a commercial business intelligence (BI) tool on<br>Amazon EC2 to run queries against the Hadoop cluster and visualize the data.<br>The company wants to reduce or eliminate the overhead costs associated with managing the Hadoop cluster and the BI tool. The company would like to move to a more cost-effective solution with minimal effort. The visualization is simple and requires performing some basic aggregation steps only.<br>Which option will meet the company's requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#488",
          answers: [
            {
              choice:
                "<p>A.  Launch a transient Amazon EMR cluster daily and develop an Apache Hive script to analyze the files on Amazon S3. Shut down the Amazon EMR cluster when the job is complete. Then use Amazon QuickSight to connect to Amazon EMR and perform the visualization.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Develop a stored procedure invoked from a MySQL database running on Amazon EC2 to analyze the files in Amazon S3. Then use a fast in-memory BI tool running on Amazon EC2 to visualize the data.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Develop a script that uses Amazon Athena to query and analyze the files on Amazon S3. Then use Amazon QuickSight to connect to Athena and perform the visualization.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use a commercial extract, transform, load (ETL) tool that runs on Amazon EC2 to prepare the data for processing. Then switch to a faster and cheaper BI tool that runs on Amazon EC2 to visualize the data from Amazon S3.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#489",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A large multinational company runs a timesheet application on AWS that is used by staff across the world. The application runs on Amazon EC2 instances in an<br>Auto Scaling group behind an Elastic Load Balancing (ELB) load balancer, and stores data in an Amazon RDS MySQL Multi-AZ database instance.<br>The CFO is concerned about the impact on the business if the application is not available. The application must not be down for more than two hours, but he solution must be as cost-effective as possible.<br>How should the Solutions Architect meet the CFO's requirements while minimizing data loss?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#489",
          answers: [
            {
              choice:
                "<p>A.  In another region, configure a read replica and create a copy of the infrastructure. When an issue occurs, promote the read replica and configure as an Amazon RDS Multi-AZ database instance. Update the DNS record to point to the other region's ELB. </p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Configure a 1-day window of 60-minute snapshots of the Amazon RDS Multi-AZ database instance. Create an AWS CloudFormation template of the application infrastructure that uses the latest snapshot. When an issue occurs, use the AWS CloudFormation template to create the environment in another region. Update the DNS record to point to the other region's ELB. </p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure a 1-day window of 60-minute snapshots of the Amazon RDS Multi-AZ database instance which is copied to another region. Create an AWS CloudFormation template of the application infrastructure that uses the latest copied snapshot. When an issue occurs, use the AWS CloudFormation template to create the environment in another region. Update the DNS record to point to the other region's ELB. </p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure a read replica in another region. Create an AWS CloudFormation template of the application infrastructure. When an issue occurs, promote the read replica and configure as an Amazon RDS Multi-AZ database instance and use the AWS CloudFormation template to create the environment in another region using the promoted Amazon RDS instance. Update the DNS record to point to the other region's ELB. </p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#490",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A Development team has created a series of AWS CloudFormation templates to help deploy services. They created a template for a network/virtual private cloud<br>(VPC) stack, a database stack, a bastion host stack, and a web application-specific stack. Each service requires the deployment of at least:<br>✑ A network/VPC stack<br>✑ A bastion host stack<br>✑ A web application stack<br>Each template has multiple input parameters that make it difficult to deploy the services individually from the AWS CloudFormation console. The input parameters from one stack are typically outputs from other stacks. For example, the VPC ID, subnet IDs, and security groups from the network stack may need to be used in the application stack or database stack.<br>Which actions will help reduce both the operational burden and the number of parameters passed into a service deployment? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: AE</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#490",
          answers: [
            {
              choice:
                "<p>A.  Create a new AWS CloudFormation template for each service. Alter the existing templates to use cross-stack references to eliminate passing many parameters to each template. Call each required stack for the application as a nested stack from the new stack. Call the newly created service stack from the AWS CloudFormation console to deploy the specific service with a subset of the parameters previously required.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a new portfolio in AWS Service Catalog for each service. Create a product for each existing AWS CloudFormation template required to build the service. Add the products to the portfolio that represents that service in AWS Service Catalog. To deploy the service, select the specific service portfolio and launch the portfolio with the necessary parameters to deploy all templates.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Set up an AWS CodePipeline workflow for each service. For each existing template, choose AWS CloudFormation as a deployment action. Add the AWS CloudFormation template to the deployment action. Ensure that the deployment actions are processed to make sure that dependencies are obeyed. Use configuration files and scripts to share parameters between the stacks. To launch the service, execute the specific template by choosing the name of the service and releasing a change.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use AWS Step Functions to define a new service. Create a new AWS CloudFormation template for each service. Alter the existing templates to use cross- stack references to eliminate passing many parameters to each template. Call each required stack for the application as a nested stack from the new service template. Configure AWS Step Functions to call the service template directly. In the AWS Step Functions console, execute the step.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Create a new portfolio for the services in AWS Service Catalog. Create a new AWS CloudFormation template for each service. Alter the existing templates to use cross-stack references to eliminate passing many parameters to each template. Call each required stack for the application as a nested stack from the new stack. Create a product for each application. Add the service template to the product. Add each new product to the portfolio. Deploy the product from the portfolio to deploy the service with the necessary parameters only to start the deployment.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#491",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has an application behind a load balancer with enough Amazon EC2 instances to satisfy peak demand. Scripts and third-party deployment solutions are used to configure EC2 instances when demand increases or an instance fails. The team must periodically evaluate the utilization of the instance types to ensure that the correct sizes are deployed.<br>How can this workload be optimized to meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#491",
          answers: [
            {
              choice:
                "<p>A.  Use CloudFormer to create AWS CloudFormation stacks from the current resources. Deploy that stack by using AWS CloudFormation in the same region. Use Amazon CloudWatch alarms to send notifications about underutilized resources to provide cost-savings suggestions.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an Auto Scaling group to scale the instances, and use AWS CodeDeploy to perform the configuration. Change from a load balancer to an Application Load Balancer. Purchase a third-party product that provides suggestions for cost savings on AWS resources.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Deploy the application by using AWS Elastic Beanstalk with default options. Register for an AWS Support Developer plan. Review the instance usage for the application by using Amazon CloudWatch, and identify less expensive instances that can handle the load. Hold monthly meetings to review new instance types and determine whether Reserved Instances should be purchased.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Deploy the application as a Docker image by using Amazon ECS. Set up Amazon EC2 Auto Scaling and Amazon ECS scaling. Register for AWS Business Support and use Trusted Advisor checks to provide suggestions on cost savings.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#492",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A large global financial services company has multiple business units. The company wants to allow Developers to try new services, but there are multiple compliance requirements for different workloads. The Security team is concerned about the access strategy for on-premises and AWS implementations. They would like to enforce governance for AWS services used by business teams for regulatory workloads, including Payment Card Industry (PCI) requirements.<br>Which solution will address the Security team's concerns and allow the Developers to try new services?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#492",
          answers: [
            {
              choice:
                "<p>A.  Implement a strong identity and access management model that includes users, groups, and roles in various AWS accounts. Ensure that centralized AWS CloudTrail logging is enabled to detect anomalies. Build automation with AWS Lambda to tear down unapproved AWS resources for governance.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Build a multi-account strategy based on business units, environments, and specific regulatory requirements. Implement SAML-based federation across all AWS accounts with an on-premises identity store. Use AWS Organizations and build organizational units (OUs) structure based on regulations and service governance. Implement service control policies across OUs.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Implement a multi-account strategy based on business units, environments, and specific regulatory requirements. Ensure that only PCI-compliant services are approved for use in the accounts. Build IAM policies to give access to only PCI-compliant services for governance.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Build one AWS account for the company for strong security controls. Ensure that all the service limits are raised to meet company scalability requirements. Implement SAML federation with an on-premises identity store, and ensure that only approved services are used in the account.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#493",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company had a tight deadline to migrate its on-premises environment to AWS. It moved over Microsoft SQL Servers and Microsoft Windows Servers using the virtual machine import/export service and rebuild other applications native to the cloud. The team created both Amazon EC2 databases and used Amazon RDS.<br>Each team in the company was responsible for migrating their applications, and they have created individual accounts for isolation of resources. The company did not have much time to consider costs, but now it would like suggestions on reducing its AWS spend.<br>Which steps should a Solutions Architect take to reduce costs?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#493",
          answers: [
            {
              choice:
                "<p>A.  Enable AWS Business Support and review AWS Trusted Advisor's cost checks. Create Amazon EC2 Auto Scaling groups for applications that experience fluctuating demand. Save AWS Simple Monthly Calculator reports in Amazon S3 for trend analysis. Create a master account under Organizations and have teams join for consolidated billing.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Enable Cost Explorer and AWS Business Support. Reserve Amazon EC2 and Amazon RDS DB instances. Use Amazon CloudWatch and AWS Trusted Advisor for monitoring and to receive cost-savings suggestions. Create a master account under Organizations and have teams join for consolidated billing.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an AWS Lambda function that changes the instance size based on Amazon CloudWatch alarms. Reserve instances based on AWS Simple Monthly Calculator suggestions. Have an AWS Well-Architected framework review and apply recommendations. Create a master account under Organizations and have teams join for consolidated billing.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a budget and monitor for costs exceeding the budget. Create Amazon EC2 Auto Scaling groups for applications that experience fluctuating demand. Create an AWS Lambda function that changes instance sizes based on Amazon CloudWatch alarms. Have each team upload their bill to an Amazon S3 bucket for analysis of team spending. Use Spot Instances on nightly batch processing jobs.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#494",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p><br>A company wants to replace its call center<br>system with a solution built using AWS managed services. The company call center would like the solution to receive calls, create contact flows, and scale to handle growth projections. The call center would also like the solution to use deep learning capabilities to recognize the intent of the callers and handle basic tasks, reducing the need to speak to an agent. The solution should also be able to query business applications and provide relevant information back to callers as requested.<br>Which services should the Solutions Architect use to build this solution? (Choose three.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BDE</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#494",
          answers: [
            {
              choice:
                "<p>A.  Amazon Rekognition to identify who is calling.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Amazon Connect to create a cloud-based contact center.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Amazon Alexa for Business to build conversational interfaces.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  AWS Lambda to integrate with internal systems.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Amazon Lex to recognize the intent of the caller.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Amazon SQS to add incoming callers to a queue.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#495",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A large company is migrating its entire IT portfolio to AWS. Each business unit in the company has a standalone AWS account that supports both development and test environments. New accounts to support production workloads will be needed soon.<br>The Finance department requires a centralized method for payment but must maintain visibility into each group's spending to allocate costs.<br>The Security team requires a centralized mechanism to control IAM usage in all the company's accounts.<br>What combination of the following options meet the company's needs with the LEAST effort? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#495",
          answers: [
            {
              choice:
                "<p>A.  Use a collection of parameterized AWS CloudFormation templates defining common IAM permissions that are launched into each account. Require all new and existing accounts to launch the appropriate stacks to enforce the least privilege model.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS Organizations to create a new organization from a chosen payer account and define an organizational unit hierarchy. Invite the existing accounts to join the organization and create new accounts using Organizations.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Require each business unit to use its own AWS accounts. Tag each AWS account appropriately and enable Cost Explorer to administer chargebacks.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Enable all features of AWS Organizations and establish appropriate service control policies that filter IAM permissions for sub-accounts.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Consolidate all of the company's AWS accounts into a single AWS account. Use tags for billing purposes and IAM's Access Advisor feature to enforce the least privilege model.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#496",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company collects a steady stream of 10 million data records from 100,000 sources each day. These records are written to an Amazon RDS MySQL DB. A query must produce the daily average of a data source over the past 30 days. There are twice as many reads as writes. Queries to the collected data are for one source<br>ID at a time.<br>How can the Solutions Architect improve the reliability and cost effectiveness of this solution?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#496",
          answers: [
            {
              choice:
                "<p>A.  Use Amazon Aurora with MySQL in a Multi-AZ mode. Use four additional read replicas.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use Amazon DynamoDB with the source ID as the partition key and the timestamp as the sort key. Use a Time to Live (TTL) to delete data after 30 days.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use Amazon DynamoDB with the source ID as the partition key. Use a different table each day.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Ingest data into Amazon Kinesis using a retention period of 30 days. Use AWS Lambda to write data records to Amazon ElastiCache for read access.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#497",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is moving a business-critical application onto AWS. It is a traditional three-tier web application using an Oracle database. Data must be encrypted in transit and at rest. The database hosts 12 TB of data. Network connectivity to the source Oracle database over the internal is allowed, and the company wants to reduce operational costs by using AWS Managed Services where possible. All resources within the web and application tiers have been migrated. The database has a few tables and a simple schema using primary keys only; however, it contains many Binary Large Object (BLOB) fields. It was not possible to use the database's native replication tools because of licensing restrictions.<br>Which database migration solution will result in the LEAST amount of impact to the application's availability?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#497",
          answers: [
            {
              choice:
                "<p>A.  Provision an Amazon RDS for Oracle instance. Host the RDS database within a virtual private cloud (VPC) subnet with internet access, and set up the RDS database as an encrypted Read Replica of the source database. Use SSL to encrypt the connection between the two databases. Monitor the replication performance by watching the RDS ReplicaLag metric. During the application maintenance window, shut down the on-premises database and switch over the application connection to the RDS instance when there is no more replication lag. Promote the Read Replica into a standalone database instance.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Provision an Amazon EC2 instance and install the same Oracle database software. Create a backup of the source database using the supported tools. During the application maintenance window, restore the backup into the Oracle database running in the EC2 instance. Set up an Amazon RDS for Oracle instance, and create an import job between the databases hosted in AWS. Shut down the source database and switch over the database connections to the RDS instance when the job is complete.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use AWS DMS to load and replicate the dataset between the on-premises Oracle database and the replication instance hosted on AWS. Provision an Amazon RDS for Oracle instance with Transparent Data Encryption (TDE) enabled and configure it as a target for the replication instance. Create a customer-managed AWS KMS master key to set it as the encryption key for the replication instance. Use AWS DMS tasks to load the data into the target RDS instance. During the application maintenance window and after the load tasks reach the ongoing replication phase, switch the database connections to the new database.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a compressed full database backup of the on-premises Oracle database during an application maintenance window. While the backup is being performed, provision a 10 Gbps AWS Direct Connect connection to increase the transfer speed of the database backup files to Amazon S3, and shorten the maintenance window period. Use SSL/TLS to copy the files over the Direct Connect connection. When the backup files are successfully copied, start the maintenance window, and rise any of the Amazon RDS supported tools to import the data into a newly provisioned Amazon RDS for Oracle instance with encryption enabled. Wait until the data is fully loaded and switch over the database connections to the new database. Delete the Direct Connect connection to cut unnecessary charges.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#498",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has decided to move some workloads onto AWS to create a grid environment to run market analytics. The grid will consist of many similar instances, spun-up by a job-scheduling function. Each time a large analytics workload is completed, a new VPC is deployed along with job scheduler and grid nodes. Multiple grids could be running in parallel.<br>Key requirements are:<br>✑ Grid instances must communicate with Amazon S3 to retrieve data to be processed.<br>✑ Grid instances must communicate with Amazon DynamoDB to track intermediate data.<br>✑ The job scheduler needs only to communicate with the Amazon EC2 API to start new grid nodes.<br>A key requirement is that the environment has no access to the internet, either directly or via the on-premises proxy. However, the application needs to be able to seamlessly communicate to Amazon S3, Amazon DynamoDB, and Amazon EC2 API, without the need for reconfiguration for each new deployment.<br>Which of the following should the Solutions Architect do to achieve this target architecture? (Choose three.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: AEF</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#498",
          answers: [
            {
              choice:
                "<p>A.  Enable VPC endpoints for Amazon S3 and DynamoDB. </p>",
              correct: true,
              feedback: "",
            },
            {
              choice: "<p>B.  Disable Private DNS Name Support.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure the application on the grid instances to use the private DNS name of the Amazon S3 endpoint.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Populate the on-premises DNS server with the private IP addresses of the EC2 endpoint.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice: "<p>E.  Enable an interface VPC endpoint for EC2.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Configure Amazon S3 endpoint policy to permit access only from the grid nodes.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#499",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>An internal security audit of AWS resources within a company found that a number of Amazon EC2 instances running Microsoft Windows workloads were missing several important operating system-level patches. A Solutions Architect has been asked to fix existing patch deficiencies, and to develop a workflow to ensure that future patching requirements are identified and taken care of quickly. The Solutions Architect has decided to use AWS Systems Manager. It is important that EC2 instance reboots do not occur at the same time on all Windows workloads to meet organizational uptime requirements.<br>Which workflow will meet these requirements in an automated manner?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#499",
          answers: [
            {
              choice:
                "<p>A.  Add a Patch Group tag with a value of Windows Servers to all existing EC2 instances. Ensure that all Windows EC2 instances are assigned this tag. Associate the AWS-DefaultPatchBaseline to the Windows Servers patch group. Define an AWS Systems Manager maintenance window, conduct patching within it, and associate it with the Windows Servers patch group. Register instances with the maintenance window using associated subnet IDs. Assign the AWS- RunPatchBaseline document as a task within each maintenance window.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Add a Patch Group tag with a value of Windows Servers to all existing EC2 instances. Ensure that all Windows EC2 instances are assigned this tag. Associate the AWS-WindowsPatchBaseline to the Windows Servers patch group. Create an Amazon CloudWatch Events rule configured to use a cron expression to schedule the execution of patching using the AWS Systems Manager run command. Assign the AWS-RunWindowsPatchBaseline document as a task associated with the Windows Servers patch group. Create an AWS Systems Manager State Manager document to define commands to be executed during patch execution.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Add a Patch Group tag with a value of either Windows Servers1 or Windows Servers2 to all existing EC2 instances. Ensure that all Windows EC2 instances are assigned this tag. Associate the AWS-DefaultPatchBaseline with both Windows Servers patch groups. Define two non-overlapping AWS Systems Manager maintenance windows, conduct patching within them, and associate each with a different patch group. Register targets with specific maintenance windows using the Patch Group tags. Assign the AWS-RunPatchBaseline document as a task within each maintenance window.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Add a Patch Group tag with a value of either Windows Servers1 or Windows Server2 to all existing EC2 instances. Ensure that all Windows EC2 instances are assigned this tag. Associate the AWS-WindowsPatchBaseline with both Windows Servers patch groups. Define two non-overlapping AWS Systems Manager maintenance windows, conduct patching within them, and associate each with a different patch group. Assign the AWS-RunWindowsPatchBaseline document as a task within each maintenance window. Create an AWS Systems Manager State Manager document to define commands to be executed during patch execution.</p>",
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
