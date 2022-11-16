var ExamTopic_500_599 = {
  msg: "Exam Topic 500 - 599",
  data: [
    {
      question_id: "#500",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company must deploy multiple independent instances of an application. The front-end application is internet accessible. However, corporate policy stipulates that the backends are to be isolated from each other and the internet, yet accessible from a centralized administration server. The application setup should be automated to minimize the opportunity for mistakes as new instances are deployed.<br>Which option meets the requirements and MINIMIZES costs?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#500",
          answers: [
            {
              choice:
                "<p>A.  Use an AWS CloudFormation template to create identical IAM roles for each region. Use AWS CloudFormation StackSets to deploy each application instance by using parameters to customize for each instance, and use security groups to isolate each instance while permitting access to the central server.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create each instance of the application IAM roles and resources in separate accounts by using AWS CloudFormation StackSets. Include a VPN connection to the VPN gateway of the central administration server.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Duplicate the application IAM roles and resources in separate accounts by using a single AWS CloudFormation template. Include VPC peering to connect the VPC of each application instance to a central VPC. </p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use the parameters of the AWS CloudFormation template to customize the deployment into separate accounts. Include a NAT gateway to allow communication back to the central administration server.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#501",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A group of Amazon EC2 instances have been configured as a high performance computing (HPC) cluster. The instances are running in a placement group, and are able to communicate with each other at network speeds of up to 20 Gbps.<br>The cluster needs to communicate with a control EC2 instance outside of the placement group. The control instance has the same instance type and AMI as the other instances, and is configured with a public IP address.<br>How can the Solutions Architect improve the network speeds between the control instance and the instances in the placement group?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#501",
          answers: [
            {
              choice:
                "<p>A.  Terminate the control instance and relaunch it in the placement group.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Ensure that the instances are communicating using their private IP addresses.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Ensure that the control instance is using an Elastic Network Adapter.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Move the control instance inside the placement group.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#502",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A Solutions Architect has created an AWS CloudFormation template for a three-tier application that contains an Auto Scaling group of Amazon EC2 instances running a custom AMI.<br>The Solutions Architect wants to ensure that future updates to the custom AMI can be deployed to a running stack by first updating the template to refer to the new<br>AMI, and then invoking UpdateStack to replace the EC2 instances with instances launched from the new AMI.<br>How can updates to the AMI be deployed to meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#502",
          answers: [
            {
              choice:
                "<p>A.  Create a change set for a new version of the template, view the changes to the running EC2 instances to ensure that the AMI is correctly updated, and then execute the change set.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Edit the AWS::AutoScaling::LaunchConfiguration resource in the template, changing its DeletionPolicy to Replace.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Edit the AWS::AutoScaling::AutoScalingGroup resource in the template, inserting an UpdatePolicy attribute.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a new stack from the updated template. Once it is successfully deployed, modify the DNS records to point to the new stack and delete the old stack.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#503",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A Solutions Architect is designing a multi-account structure that has 10 existing accounts. The design must meet the following requirements:<br>✑ Consolidate all accounts into one organization.<br>✑ Allow full access to the Amazon EC2 service from the master account and the secondary accounts.<br>✑ Minimize the effort required to add additional secondary accounts.<br>Which combination of steps should be included in the solution? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: AD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#503",
          answers: [
            {
              choice:
                "<p>A.  Create an organization from the master account. Send invitations to the secondary accounts from the master account. Accept the invitations and create an OU.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an organization from the master account. Send a join request to the master account from each secondary account. Accept the requests and create an OU.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a VPC peering connection between the master account and the secondary accounts. Accept the request for the VPC peering connection.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a service control policy (SCP) that enables full EC2 access, and attach the policy to the OU.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Create a full EC2 access policy and map the policy to a role in each account. Trust every other account to assume the role.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#504",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>AnyCompany has acquired numerous companies over the past few years. The CIO for AnyCompany would like to keep the resources for each acquired company separate. The CIO also would like to enforce a chargeback model where each company pays for the AWS services it uses.<br>The Solutions Architect is tasked with designing an AWS architecture that allows AnyCompany to achieve the following:<br>✑ Implementing a detailed chargeback mechanism to ensure that each company pays for the resources it uses.<br>✑ AnyCompany can pay for AWS services for all its companies through a single invoice.<br>✑ Developers in each acquired company have access to resources in their company only.<br>✑ Developers in an acquired company should not be able to affect resources in their company only.<br>✑ A single identity store is used to authenticate Developers across all companies.<br>Which of the following approaches would meet these requirements? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: AD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#504",
          answers: [
            {
              choice:
                "<p>A.  Create a multi-account strategy with an account per company. Use consolidated billing to ensure that AnyCompany needs to pay a single bill only.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a multi-account strategy with a virtual private cloud (VPC) for each company. Reduce impact across companies by not creating any VPC peering links. As everything is in a single account, there will be a single invoice. Use tagging to create a detailed bill for each company.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create IAM users for each Developer in the account to which they require access. Create policies that allow the users access to all resources in that account. Attach the policies to the IAM user.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a federated identity store against the company's Active Directory. Create IAM roles with appropriate permissions and set the trust relationships with AWS and the identity store. Use AWS STS to grant users access based on the groups they belong to in the identity store.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Create a multi-account strategy with an account per company. For billing purposes, use a tagging solution that uses a tag to identify the company that creates each resource.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#505",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company deployed a three-tier web application in two regions: us-east-1 and eu-west-1. The application must be active in both regions at the same time. The database tier of the application uses a single Amazon RDS Aurora database globally, with a master in us-east-1 and a read replica in eu-west-1. Both regions are connected by a VPN.<br>The company wants to ensure that the application remains available even in the event of a region-level failure of all of the application's components. It is acceptable for the application to be in read-only mode for up to 1 hour. The company plans to configure two Amazon Route 53 record sets, one for each of the regions.<br>How should the company complete the configuration to meet its requirements while providing the lowest latency for the application end-users? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: CE</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#505",
          answers: [
            {
              choice:
                "<p>A.  Use failover routing and configure the us-east-1 record set as primary and the eu-west-1 record set as secondary. Configure an HTTP health check for the web application in us-east-1, and associate it to the us-east-1 record set.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use weighted routing and configure each record set with a weight of 50. Configure an HTTP health check for each region, and attach it to the record set for that region.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use latency-based routing for both record sets. Configure a health check for each region and attach it to the record set for that region.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure an Amazon CloudWatch alarm for the health checks in us-east-1, and have it invoke an AWS Lambda function that promotes the read replica in eu- west-1.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Configure Amazon RDS event notifications to react to the failure of the database in us-east-1 by invoking an AWS Lambda function that promotes the read replica in eu-west-1.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#506",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company runs a Windows Server host in a public subnet that is configured to allow a team of administrators to connect over RDP to troubleshoot issues with hosts in a private subnet. The host must be available at all times outside of a scheduled maintenance window, and needs to receive the latest operating system updates within 3 days of release.<br>What should be done to manage the host with the LEAST amount of administrative effort?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#506",
          answers: [
            {
              choice:
                "<p>A.  Run the host in a single-instance AWS Elastic Beanstalk environment. Configure the environment with a custom AMI to use a hardened machine image from AWS Marketplace. Apply system updates with AWS Systems Manager Patch Manager.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Run the host on AWS WorkSpaces. Use Amazon WorkSpaces Application Manager (WAM) to harden the host. Configure Windows automatic updates to occur every 3 days.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Run the host in an Auto Scaling group with a minimum and maximum instance count of 1. Use a hardened machine image from AWS Marketplace. Apply system updates with AWS Systems Manager Patch Manager.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Run the host in AWS OpsWorks Stacks. Use a Chief recipe to harden the AMI during instance launch. Use an AWS Lambda scheduled event to run the Upgrade Operating System stack command to apply system updates.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#507",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has a large on-premises Apache Hadoop cluster with a 20 PB HDFS database. The cluster is growing every quarter by roughly 200 instances and 1<br>PB. The company's goals are to enable resiliency for its Hadoop data, limit the impact of losing cluster nodes, and significantly reduce costs. The current cluster runs 24/7 and supports a variety of analysis workloads, including interactive queries and batch processing.<br>Which solution would meet these requirements with the LEAST expense and down time?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#507",
          answers: [
            {
              choice:
                "<p>A.  Use AWS Snowmobile to migrate the existing cluster data to Amazon S3. Create a persistent Amazon EMR cluster initially sized to handle the interactive workload based on historical data from the on-premises cluster. Store the data on EMRFS. Minimize costs using Reserved Instances for master and core nodes and Spot Instances for task nodes, and auto scale task nodes based on Amazon CloudWatch metrics. Create job-specific, optimized clusters for batch workloads that are similarly optimized.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS Snowmobile to migrate the existing cluster data to Amazon S3. Create a persistent Amazon EMR cluster of a similar size and configuration to the current cluster. Store the data on EMRFS. Minimize costs by using Reserved Instances. As the workload grows each quarter, purchase additional Reserved Instances and add to the cluster.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use AWS Snowball to migrate the existing cluster data to Amazon S3. Create a persistent Amazon EMR cluster initially sized to handle the interactive workloads based on historical data from the on-premises cluster. Store the data on EMRFS. Minimize costs using Reserved Instances for master and core nodes and Spot Instances for task nodes, and auto scale task nodes based on Amazon CloudWatch metrics. Create job-specific, optimized clusters for batch workloads that are similarly optimized.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use AWS Direct Connect to migrate the existing cluster data to Amazon S3. Create a persistent Amazon EMR cluster initially sized to handle the interactive workload based on historical data from the on-premises cluster. Store the data on EMRFS. Minimize costs using Reserved Instances for master and core nodes and Spot Instances for task nodes, and auto scale task nodes based on Amazon CloudWatch metrics. Create job-specific, optimized clusters for batch workloads that are similarly optimized.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#508",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is running a large application on premises. Its technology stack consists of Microsoft .NET for the web server platform and Apache Cassandra for the database. The company wants to migrate this application to AWS to improve service reliability. The IT team also wants to reduce the time it spends on capacity management and maintenance of this infrastructure. The Development team is willing and available to make code changes to support the migration.<br>Which design is the LEAST complex to manage after the migration?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#508",
          answers: [
            {
              choice:
                "<p>A.  Migrate the web servers to Amazon EC2 instances in an Auto Scaling group that is running .NET. Migrate the existing Cassandra database to Amazon Aurora with multiple read replicas, and run both in a Multi-AZ mode.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Migrate the web servers to an AWS Elastic Beanstalk environment that is running the .NET platform in a Multi-AZ Auto Scaling configuration. Migrate the Cassandra database to Amazon EC2 instances that are running in a Multi-AZ configuration.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Migrate the web servers to an AWS Elastic Beanstalk environment that is running the .NET platform in a Multi-AZ Auto Scaling configuration. Migrate the existing Cassandra database to Amazon DynamoDB. </p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Migrate the web servers to Amazon EC2 instances in an Auto Scaling group that is running .NET. Migrate the existing Cassandra database to Amazon DynamoDB. </p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#509",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has a requirement that only allows specially hardened AMIs to be launched into public subnets in a VPC, and for the AMIs to be associated with a specific security group. Allowing non-compliant instances to launch into the public subnet could present a significant security risk if they are allowed to operate.<br>A mapping of approved AMIs to subnets to security groups exists in an Amazon DynamoDB table in the same AWS account. The company created an AWS<br>Lambda function that, when invoked, will terminate a given Amazon EC2 instance if the combination of AMI, subnet, and security group are not approved in the<br>DynamoDB table.<br>What should the Solutions Architect do to MOST quickly mitigate the risk of compliance deviations?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#509",
          answers: [
            {
              choice:
                "<p>A.  Create an Amazon CloudWatch Events rule that matches each time an EC2 instance is launched using one of the allowed AMIs, and associate it with the Lambda function as the target.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  For the Amazon S3 bucket receiving the AWS CloudTrail logs, create an S3 event notification configuration with a filter to match when logs contain the ec2:RunInstances action, and associate it with the Lambda function as the target.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Enable AWS CloudTrail and configure it to stream to an Amazon CloudWatch Logs group. Create a metric filter in CloudWatch to match when the ec2:RunInstances action occurs, and trigger the Lambda function when the metric is greater than 0.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an Amazon CloudWatch Events rule that matches each time an EC2 instance is launched, and associate it with the Lambda function as the target.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#510",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A Solutions Architect must migrate an existing on-premises web application with 70 TB of static files supporting a public open-data initiative. The Architect wants to upgrade to the latest version of the host operating system as part of the migration effort.<br>Which is the FASTEST and MOST cost-effective way to perform the migration?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#510",
          answers: [
            {
              choice:
                "<p>A.  Run a physical-to-virtual conversion on the application server. Transfer the server image over the internet, and transfer the static data to Amazon S3.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Run a physical-to-virtual conversion on the application server. Transfer the server image over AWS Direct Connect, and transfer the static data to Amazon S3.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Re-platform the server to Amazon EC2, and use AWS Snowball to transfer the static data to Amazon S3.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Re-platform the server by using the AWS Server Migration Service to move the code and data to a new Amazon EC2 instance.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#511",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has an application that generates a weather forecast that is updated every 15 minutes with an output resolution of 1 billion unique positions, each approximately 20 bytes in size (20 Gigabytes per forecast). Every hour, the forecast data is globally accessed approximately 5 million times (1,400 requests per second), and up to 10 times more during weather events. The forecast data is overwritten every update. Users of the current weather forecast application expect responses to queries to be returned in less than two seconds for each request.<br>Which design meets the required request rate and response time?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#511",
          answers: [
            {
              choice:
                "<p>A.  Store forecast locations in an Amazon ES cluster. Use an Amazon CloudFront distribution targeting an Amazon API Gateway endpoint with AWS Lambda functions responding to queries as the origin. Enable API caching on the API Gateway stage with a cache-control timeout set for 15 minutes.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Store forecast locations in an Amazon EFS volume. Create an Amazon CloudFront distribution that targets an Elastic Load Balancing group of an Auto Scaling fleet of Amazon EC2 instances that have mounted the Amazon EFS volume. Set the cache-control timeout for 15 minutes in the CloudFront distribution.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Store forecast locations in an Amazon ES cluster. Use an Amazon CloudFront distribution targeting an API Gateway endpoint with AWS Lambda functions responding to queries as the origin. Create an Amazon Lambda@Edge function that caches the data locally at edge locations for 15 minutes.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Store forecast locations in Amazon S3 as individual objects. Create an Amazon CloudFront distribution targeting an Elastic Load Balancing group of an Auto Scaling fleet of EC2 instances, querying the origin of the S3 object. Set the cache-control timeout for 15 minutes in the CloudFront distribution.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#512",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is using AWS CloudFormation to deploy its infrastructure. The company is concerned that, if a production CloudFormation stack is deleted, important data stored in Amazon RDS databases or Amazon EBS volumes might also be deleted.<br>How can the company prevent users from accidentally deleting data in this way?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#512",
          answers: [
            {
              choice:
                "<p>A.  Modify the CloudFormation templates to add a DeletionPolicy attribute to RDS and EBS resources.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Configure a stack policy that disallows the deletion of RDS and EBS resources.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Modify IAM policies to deny deleting RDS and EBS resources that are tagged with an ג€aws:cloudformation:stack-nameג€ tag.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use AWS Config rules to prevent deleting RDS and EBS resources.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#513",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is planning to migrate an application from on-premises to AWS. The application currently uses an Oracle database and the company can tolerate a brief downtime of 1 hour when performing the switch to the new infrastructure. As part of the migration, the database engine will be changed to MySQL. A<br>Solutions Architect needs to determine which AWS services can be used to perform the migration while minimizing the amount of work and time required.<br>Which of the following will meet the requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#513",
          answers: [
            {
              choice:
                "<p>A.  Use AWS SCT to generate the schema scripts and apply them on the target prior to migration. Use AWS DMS to analyze the current schema and provide a recommendation for the optimal database engine. Then, use AWS DMS to migrate to the recommended engine. Use AWS SCT to identify what embedded SQL code in the application can be converted and what has to be done manually.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS SCT to generate the schema scripts and apply them on the target prior to migration. Use AWS DMS to begin moving data from the on-premises database to AWS. After the initial copy, continue to use AWS DMS to keep the databases in sync until cutting over to the new database. Use AWS SCT to identify what embedded SQL code in the application can be converted and what has to be done manually.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use AWS DMS to help identify the best target deployment between installing the database engine on Amazon EC2 directly or moving to Amazon RDS. Then, use AWS DMS to migrate to the platform. Use AWS Application Discovery Service to identify what embedded SQL code in the application can be converted and what has to be done manually.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use AWS DMS to begin moving data from the on-premises database to AWS. After the initial copy, continue to use AWS DMS to keep the databases in sync until cutting over to the new database. Use AWS Application Discovery Service to identify what embedded SQL code in the application can be converted and what has to be done manually.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#514",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is using AWS to run an internet-facing production application written in Node.js. The Development team is responsible for pushing new versions of their software directly to production. The application software is updated multiple times a day. The team needs guidance from a Solutions Architect to help them deploy the software to the production fleet quickly and with the least amount of disruption to the service.<br>Which option meets these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#514",
          answers: [
            {
              choice:
                "<p>A.  Prepackage the software into an AMI and then use Auto Scaling to deploy the production fleet. For software changes, update the AMI and allow Auto Scaling to automatically push the new AMI to production.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS CodeDeploy to push the prepackaged AMI to production. For software changes, reconfigure CodeDeploy with new AMI identification to push the new AMI to the production fleet.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use AWS Elastic Beanstalk to host the production application. For software changes, upload the new application version to Elastic Beanstalk to push this to the production fleet using a blue/green deployment method.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Deploy the base AMI through Auto Scaling and bootstrap the software using user data. For software changes, SSH to each of the instances and replace the software with the new version.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#515",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company used Amazon EC2 instances to deploy a web fleet to host a blog site. The EC2 instances are behind an Application Load Balancer (ALB) and are configured in an Auto Scaling group. The web application stores all blog content on an Amazon EFS volume.<br>The company recently added a feature for bloggers to add video to their posts, attracting 10 times the previous user traffic. At peak times of day, users report buffering and timeout issues while attempting to reach the site or watch videos.<br>Which is the MOST cost-efficient and scalable deployment that will resolve the issues for users?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#515",
          answers: [
            {
              choice:
                "<p>A.  Reconfigure Amazon EFS to enable maximum I/O.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Update the blog site to use instance store volumes for storage. Copy the site contents to the volumes at launch and to Amazon S3 at shutdown.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure an Amazon CloudFront distribution. Point the distribution to an S3 bucket, and migrate the videos from EFS to Amazon S3.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Set up an Amazon CloudFront distribution for all site contents, and point the distribution at the ALB. </p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#516",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company runs its containerized batch jobs on Amazon ECS. The jobs are scheduled by submitting a container image, a task definition, and the relevant data to an Amazon S3 bucket. Container images may be unique per job. Running the jobs as quickly as possible is of utmost importance, so submitting job artifacts to the<br>S3 bucket triggers the job to run immediately. Sometimes there may be no jobs running at all. However, jobs of any size can be submitted with no prior warning to the IT Operations team. Job definitions include CPU and memory resource requirements.<br>What solution will allow the batch jobs to complete as quickly as possible after being scheduled?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#516",
          answers: [
            {
              choice:
                "<p>A.  Schedule the jobs on an Amazon ECS cluster using the Amazon EC2 launch type. Use Service Auto Scaling to increase or decrease the number of running tasks to suit the number of running jobs.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Schedule the jobs directly on EC2 instances. Use Reserved Instances for the baseline minimum load, and use On-Demand Instances in an Auto Scaling group to scale up the platform based on demand.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Schedule the jobs on an Amazon ECS cluster using the Fargate launch type. Use Service Auto Scaling to increase or decrease the number of running tasks to suit the number of running jobs.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Schedule the jobs on an Amazon ECS cluster using the Fargate launch type. Use Spot Instances in an Auto Scaling group to scale the platform based on demand. Use Service Auto Scaling to increase or decrease the number of running tasks to suit the number of running jobs.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#517",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company receives clickstream data files to Amazon S3 every five minutes. A Python script runs as a cron job once a day on an Amazon EC2 instance to process each file and load it into a database hosted on Amazon RDS. The cron job takes 15 to 30 minutes to process 24 hours of data. The data consumers ask for the data be available as soon as possible.<br>Which solution would accomplish the desired outcome?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#517",
          answers: [
            {
              choice:
                "<p>A.  Increase the size of the instance to speed up processing and update the schedule to run once an hour.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Convert the cron job to an AWS Lambda function and trigger this new function using a cron job on an EC2 instance.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Convert the cron job to an AWS Lambda function and schedule it to run once an hour using Amazon CloudWatch Events.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an AWS Lambda function that runs when a file is delivered to Amazon S3 using S3 event notifications.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#518",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company that is new to AWS reports it has exhausted its service limits across several accounts that are on the Basic Support plan. The company would like to prevent this from happening in the future.<br>What is the MOST efficient way of monitoring and managing all service limits in the company's accounts?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#518",
          answers: [
            {
              choice:
                "<p>A.  Use Amazon CloudWatch and AWS Lambda to periodically calculate the limits across all linked accounts using AWS Trusted Advisor, provide notifications using Amazon SNS if the limits are close to exceeding the threshold.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Reach out to AWS Support to proactively increase the limits across all accounts. That way, the customer avoids creating and managing infrastructure just to raise the service limits.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use Amazon CloudWatch and AWS Lambda to periodically calculate the limits across all linked accounts using AWS Trusted Advisor, programmatically increase the limits that are close to exceeding the threshold.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use Amazon CloudWatch and AWS Lambda to periodically calculate the limits across all linked accounts using AWS Trusted Advisor, and use Amazon SNS for notifications if a limit is close to exceeding the threshold. Ensure that the accounts are using the AWS Business Support plan at a minimum.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#519",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company runs an IoT platform on AWS. IoT sensors in various locations send data to the company's Node.js API servers on Amazon EC2 instances running behind an Application Load Balancer. The data is stored in an Amazon RDS MySQL DB instance that uses a 4 TB General Purpose SSD volume.<br>The number of sensors the company has deployed in the field has increased over time, and is expected to grow significantly. The API servers are consistently overloaded and RDS metrics show high write latency.<br>Which of the following steps together will resolve the issues permanently and enable growth as new sensors are provisioned, while keeping this platform cost- efficient? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: CE</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#519",
          answers: [
            {
              choice:
                "<p>A.  Resize the MySQL General Purpose SSD storage to 6 TB to improve the volume's IOPS</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Re-architect the database tier to use Amazon Aurora instead of an RDS MySQL DB instance and add read replicas</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Leverage Amazon Kinesis Data Streams and AWS Lambda to ingest and process the raw data</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use AWS X-Ray to analyze and debug application issues and add more API servers to match the load</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Re-architect the database tier to use Amazon DynamoDB instead of an RDS MySQL DB instance</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#520",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A Solutions Architect is designing a system that will collect and store data from 2,000 internet-connected sensors. Each sensor produces 1 KB of data every second. The data must be available for analysis within a few seconds of it being sent to the system and stored for analysis indefinitely.<br>Which is the MOST cost-effective solution for collecting and storing the data?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#520",
          answers: [
            {
              choice:
                "<p>A.  Put each record in Amazon Kinesis Data Streams. Use an AWS Lambda function to write each record to an object in Amazon S3 with a prefix that organizes the records by hour and hashes the record's key. Analyze recent data from Kinesis Data Streams and historical data from Amazon S3.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Put each record in Amazon Kinesis Data Streams. Set up Amazon Kinesis Data Firehouse to read records from the stream and group them into objects in Amazon S3. Analyze recent data from Kinesis Data Streams and historical data from Amazon S3.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Put each record into an Amazon DynamoDB table. Analyze the recent data by querying the table. Use an AWS Lambda function connected to a DynamoDB stream to group records together, write them into objects in Amazon S3, and then delete the record from the DynamoDB table. Analyze recent data from the DynamoDB table and historical data from Amazon S3</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Put each record into an object in Amazon S3 with a prefix what organizes the records by hour and hashes the record's key. Use S3 lifecycle management to transition objects to S3 infrequent access storage to reduce storage costs. Analyze recent and historical data by accessing the data in Amazon S3</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#521",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>An auction website enables users to bid on collectible items. The auction rules require that each bid is processed only once and in the order it was received. The current implementation is based on a fleet of Amazon EC2 web servers that write bid records into Amazon Kinesis Data Streams. A single t2.large instance has a cron job that runs the bid processor, which reads incoming bids from Kinesis Data Streams and processes each bid. The auction site is growing in popularity, but users are complaining that some bids are not registering.<br>Troubleshooting indicates that the bid processor is too slow during peak demand hours, sometimes crashes while processing, and occasionally loses track of which records is being processed.<br>What changes should make the bid processing more reliable?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#521",
          answers: [
            {
              choice:
                "<p>A.  Refactor the web application to use the Amazon Kinesis Producer Library (KPL) when posting bids to Kinesis Data Streams. Refactor the bid processor to flag each record in Kinesis Data Streams as being unread, processing, and processed. At the start of each bid processing run, scan Kinesis Data Streams for unprocessed records.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Refactor the web application to post each incoming bid to an Amazon SNS topic in place of Kinesis Data Streams. Configure the SNS topic to trigger an AWS Lambda function that processes each bid as soon as a user submits it.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Refactor the web application to post each incoming bid to an Amazon SQS FIFO queue in place of Kinesis Data Streams. Refactor the bid processor to continuously the SQS queue. Place the bid processing EC2 instance in an Auto Scaling group with a minimum and a maximum size of 1.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Switch the EC2 instance type from t2.large to a larger general compute instance type. Put the bid processor EC2 instances in an Auto Scaling group that scales out the number of EC2 instances running the bid processor, based on the IncomingRecords metric in Kinesis Data Streams.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#522",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A bank is re-architecting its mainframe-based credit card approval processing application to a cloud-native application on the AWS cloud.<br>The new application will receive up to 1,000 requests per second at peak load. There are multiple steps to each transaction, and each step must receive the result of the previous step. The entire request must return an authorization response within less than 2 seconds with zero data loss. Every request must receive a response. The solution must be Payment Card Industry Data Security Standard (PCI DSS)-compliant.<br>Which option will meet all of the bank's objectives with the LEAST complexity and LOWEST cost while also meeting compliance requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#522",
          answers: [
            {
              choice:
                "<p>A.  Create an Amazon API Gateway to process inbound requests using a single AWS Lambda task that performs multiple steps and returns a JSON object with the approval status. Open a support case to increase the limit for the number of concurrent Lambdas to allow room for bursts of activity due to the new application.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an Application Load Balancer with an Amazon ECS cluster on Amazon EC2 Dedicated Instances in a target group to process incoming requests. Use Auto Scaling to scale the cluster out/in based on average CPU utilization. Deploy a web service that processes all of the approval steps and returns a JSON object with the approval status.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Deploy the application on Amazon EC2 on Dedicated Instances. Use an Elastic Load Balancer in front of a farm of application servers in an Auto Scaling group to handle incoming requests. Scale out/in based on a custom Amazon CloudWatch metric for the number of inbound requests per second after measuring the capacity of a single instance.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an Amazon API Gateway to process inbound requests using a series of AWS Lambda processes, each with an Amazon SQS input queue. As each step completes, it writes its result to the next step's queue. The final step returns a JSON object with the approval status. Open a support case to increase the limit for the number of concurrent Lambdas to allow room for bursts of activity due to the new application.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#523",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A Solutions Architect is migrating a 10 TB PostgreSQL database to Amazon RDS for PostgreSQL. The company's internet link is 50 MB with a VPN in the<br>Amazon VPC, and the Solutions Architect needs to migrate the data and synchronize the changes before the cutover. The cutover must take place within an 8-day period.<br>What is the LEAST complex method of migrating the database securely and reliably?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#523",
          answers: [
            {
              choice:
                "<p>A.  Order an AWS Snowball device and copy the database using the AWS DMS. When the database is available in Amazon S3, use AWS DMS to load it to Amazon RDS, and configure a job to synchronize changes before the cutover.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an AWS DMS job to continuously replicate the data from on premises to AWS. Cutover to Amazon RDS after the data is synchronized.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Order an AWS Snowball device and copy a database dump to the device. After the data has been copied to Amazon S3, import it to the Amazon RDS instance. Set up log shipping over a VPN to synchronize changes before the cutover.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Order an AWS Snowball device and copy the database by using the AWS Schema Conversion Tool. When the data is available in Amazon S3, use AWS DMS to load it to Amazon RDS, and configure a job to synchronize changes before the cutover.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#524",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A Solutions Architect must update an application environment within AWS Elastic Beanstalk using a blue/green deployment methodology. The Solutions Architect creates an environment that is identical to the existing application environment and deploys the application to the new environment.<br>What should be done next to complete the update?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#524",
          answers: [
            {
              choice:
                "<p>A.  Redirect to the new environment using Amazon Route 53</p>",
              correct: false,
              feedback: "",
            },
            {
              choice: "<p>B.  Select the Swap Environment URLs option</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Replace the Auto Scaling launch configuration</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Update the DNS records to point to the green environment</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#525",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has a legacy application running on servers on premises. To increase the application's reliability, the company wants to gain actionable insights using application logs. A Solutions Architect has been given following requirements for the solution:<br>✑ Aggregate logs using AWS.<br>✑ Automate log analysis for errors.<br>✑ Notify the Operations team when errors go beyond a specified threshold.<br>What solution meets the requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#525",
          answers: [
            {
              choice:
                "<p>A.  Install Amazon Kinesis Agent on servers, send logs to Amazon Kinesis Data Streams and use Amazon Kinesis Data Analytics to identify errors, create an Amazon CloudWatch alarm to notify the Operations team of errors</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Install an AWS X-Ray agent on servers, send logs to AWS Lambda and analyze them to identify errors, use Amazon CloudWatch Events to notify the Operations team of errors.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Install Logstash on servers, send logs to Amazon S3 and use Amazon Athena to identify errors, use sendmail to notify the Operations team of errors.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Install the Amazon CloudWatch agent on servers, send logs to Amazon CloudWatch Logs and use metric filters to identify errors, create a CloudWatch alarm to notify the Operations team of errors.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#526",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>What combination of steps could a Solutions Architect take to protect a web workload running on Amazon EC2 from DDoS and application layer attacks? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#526",
          answers: [
            {
              choice:
                "<p>A.  Put the EC2 instances behind a Network Load Balancer and configure AWS WAF on it.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Migrate the DNS to Amazon Route 53 and use AWS Shield.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Put the EC2 instances in an Auto Scaling group and configure AWS WAF on it.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create and use an Amazon CloudFront distribution and configure AWS WAF on it.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Create and use an internet gateway in the VPC and use AWS Shield.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#527",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A photo-sharing and publishing company receives 10,000 to 150,000 images daily. The company receives the images from multiple suppliers and users registered with the service. The company is moving to AWS and wants to enrich the existing metadata by adding data using Amazon Rekognition.<br>The following is an example of the additional data:<br><img src='https://www.examtopics.com//assets/media/exam-media/04241/0034700001.png'><br>As part of the cloud migration program, the company uploaded existing image data to Amazon S3 and told users to upload images directly to Amazon S3.<br>What should the Solutions Architect do to support these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#527",
          answers: [
            {
              choice:
                "<p>A.  Trigger AWS Lambda based on an S3 event notification to create additional metadata using Amazon Rekognition. Use Amazon DynamoDB to store the metadata and Amazon ES to create an index. Use a web front-end to provide search capabilities backed by Amazon ES.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use Amazon Kinesis to stream data based on an S3 event. Use an application running in Amazon EC2 to extract metadata from the images. Then store the data on Amazon DynamoDB and Amazon CloudSearch and create an index. Use a web front-end with search capabilities backed by CloudSearch.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Start an Amazon SQS queue based on S3 event notifications. Then have Amazon SQS send the metadata information to Amazon DynamoDB.  An application running on Amazon EC2 extracts data from Amazon Rekognition using the API and adds data to DynamoDB and Amazon ES. Use a web front-end to provide search capabilities backed by Amazon ES.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Trigger AWS Lambda based on an S3 event notification to create additional metadata using Amazon Rekognition. Use Amazon RDS MySQL Multi-AZ to store the metadata information and use Lambda to create an index. Use a web front-end with search capabilities backed by Lambda.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#528",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A Solutions Architect is redesigning an image-viewing and messaging platform to be delivered as SaaS. Currently, there is a farm of virtual desktop infrastructure<br>(VDI) that runs a desktop image-viewing application and a desktop messaging application. Both applications use a shared database to manage user accounts and sharing. Users log in from a web portal that launches the applications and streams the view of the application on the user's machine. The Development Operations team wants to move away from using VDI and wants to rewrite the application.<br>What is the MOST cost-effective architecture that offers both security and ease of management?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#528",
          answers: [
            {
              choice:
                "<p>A.  Run a website from an Amazon S3 bucket with a separate S3 bucket for images and messaging data. Call AWS Lambda functions from embedded JavaScript to manage the dynamic content, and use Amazon Cognito for user and sharing management.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Run a website from Amazon EC2 Linux servers, storing the images in Amazon S3, and use Amazon Cognito for user accounts and sharing. Create AWS CloudFormation templates to launch the application by using EC2 user data to install and configure the application.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Run a website as an AWS Elastic Beanstalk application, storing the images in Amazon S3, and using an Amazon RDS database for user accounts and sharing. Create AWS CloudFormation templates to launch the application and perform blue/green deployments.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Run a website from an Amazon S3 bucket that authorizes Amazon AppStream to stream applications for a combined image viewer and messenger that stores images in Amazon S3. Have the website use an Amazon RDS database for user accounts and sharing.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#529",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company would like to implement a serverless application by using Amazon API Gateway, AWS Lambda, and Amazon DynamoDB. They deployed a proof of concept and stated that the average response time is greater than what their upstream services can accept. Amazon CloudWatch metrics did not indicate any issues with DynamoDB but showed that some Lambda functions were hitting their timeout.<br>Which of the following actions should the Solutions Architect consider to improve performance? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#529",
          answers: [
            {
              choice:
                "<p>A.  Configure the AWS Lambda function to reuse containers to avoid unnecessary startup time.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Increase the amount of memory and adjust the timeout on the Lambda function. Complete performance testing to identify the ideal memory and timeout configuration for the Lambda function.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an Amazon ElastiCache cluster running Memcached, and configure the Lambda function for VPC integration with access to the Amazon ElastiCache cluster.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Enable API cache on the appropriate stage in Amazon API Gateway, and override the TTL for individual methods that require a lower TTL than the entire stage.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Increase the amount of CPU, and adjust the timeout on the Lambda function. Complete performance testing to identify the ideal CPU and timeout configuration for the Lambda function.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#530",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is migrating an application to AWS. It wants to use fully managed services as much as possible during the migration. The company needs to store large, important documents within the application with the following requirements:<br>✑ The data must be highly durable and available.<br>✑ The data must always be encrypted at rest and in transit.<br>✑ The encryption key must be managed by the company and rotated periodically.<br>Which of the following solutions should the Solutions Architect recommend?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#530",
          answers: [
            {
              choice:
                "<p>A.  Deploy the storage gateway to AWS in file gateway mode. Use Amazon EBS volume encryption using an AWS KMS key to encrypt the storage gateway volumes.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use Amazon S3 with a bucket policy to enforce HTTPS for connections to the bucket and to enforce server-side encryption and AWS KMS for object encryption.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use Amazon DynamoDB with SSL to connect to DynamoDB.  Use an AWS KMS key to encrypt DynamoDB objects at rest.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Deploy instances with Amazon EBS volumes attached to store this data. Use EBS volume encryption using an AWS KMS key to encrypt the data.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#531",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A Solutions Architect is designing a highly available and reliable solution for a cluster of Amazon EC2 instances.<br>The Solutions Architect must ensure that any EC2 instance within the cluster recovers automatically after a system failure. The solution must ensure that the recovered instance maintains the same IP address.<br>How can these requirements be met?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#531",
          answers: [
            {
              choice:
                "<p>A.  Create an AWS Lambda script to restart any EC2 instances that shut down unexpectedly.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an Auto Scaling group for each EC2 instance that has a minimum and maximum size of 1.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a new t2.micro instance to monitor the cluster instances. Configure the t2.micro instance to issue an aws ec2 reboot-instances command upon failure.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an Amazon CloudWatch alarm for the StatusCheckFailed_System metric, and then configure an EC2 action to recover the instance.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#532",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A public retail web application uses an Application Load Balancer (ALB) in front of Amazon EC2 instances running across multiple Availability Zones (AZs) in a<br>Region backed by an Amazon RDS MySQL Multi-AZ deployment. Target group health checks are configured to use HTTP and pointed at the product catalog page. Auto Scaling is configured to maintain the web fleet size based on the ALB health check.<br>Recently, the application experienced an outage. Auto Scaling continuously replaced the instances during the outage. A subsequent investigation determined that the web server metrics were within the normal range, but the database tier was experiencing high load, resulting in severely elevated query response times.<br>Which of the following changes together would remediate these issues while improving monitoring capabilities for the availability and functionality of the entire application stack for future growth? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BE</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#532",
          answers: [
            {
              choice:
                "<p>A.  Configure read replicas for Amazon RDS MySQL and use the single reader endpoint in the web application to reduce the load on the backend database tier.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Configure the target group health check to point at a simple HTML page instead of a product catalog page and the Amazon Route 53 health check against the product page to evaluate full application functionality. Configure Amazon CloudWatch alarms to notify administrators when the site fails.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure the target group health check to use a TCP check of the Amazon EC2 web server and the Amazon Route 53 health check against the product page to evaluate full application functionality. Configure Amazon CloudWatch alarms to notify administrators when the site fails.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure an Amazon CloudWatch alarm for Amazon RDS with an action to recover a high-load, impaired RDS instance in the database tier.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Configure an Amazon ElastiCache cluster and place it between the web application and RDS MySQL instances to reduce the load on the backend database tier.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#533",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is running an email application across multiple AWS Regions. The company uses Ohio (us-east-2) as the primary Region and Northern Virginia (us- east-1) as the Disaster Recovery (DR) Region. The data is continuously replicated from the primary Region to the DR Region by a single instance on the public subnet in both Regions. The replication messages between the Regions have a significant backlog during certain times of the day. The backlog clears on its own after a short time, but it affects the application's RPO.<br>Which of the following solutions should help remediate this performance problem? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: AC</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#533",
          answers: [
            {
              choice: "<p>A.  Increase the size of the instances.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Have the instance in the primary Region write the data to an Amazon SQS queue in the primary Region instead, and have the instance in the DR Region poll from this queue.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use multiple instances on the primary and DR Regions to send and receive the replication data.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Change the DR Region to Oregon (us-west-2) instead of the current DR Region.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Attach an additional elastic network interface to each of the instances in both Regions and set up load balancing between the network interfaces.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#534",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has implemented AWS Organizations. It has recently set up a number of new accounts and wants to deny access to a specific set of AWS services in these new accounts.<br>How can this be controlled MOST efficiently?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#534",
          answers: [
            {
              choice:
                "<p>A.  Create an IAM policy in each account that denies access to the services. Associate the policy with an IAM group, and add all IAM users to the group.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a service control policy that denies access to the services. Add all of the new accounts to a single organizational unit (OU), and apply the policy to that OU.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an IAM policy in each account that denies access to the services. Associate the policy with an IAM role, and instruct users to log in using their corporate credentials and assume the IAM role.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a service control policy that denies access to the services, and apply the policy to the root of the organization.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#535",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has deployed an application to multiple environments in AWS, including production and testing. The company has separate accounts for production and testing, and users are allowed to create additional application users for team members or services, as needed. The Security team has asked the Operations team for better isolation between production and testing with centralized controls on security credentials and improved management of permissions between environments.<br>Which of the following options would MOST securely accomplish this goal?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#535",
          answers: [
            {
              choice:
                "<p>A.  Create a new AWS account to hold user and service accounts, such as an identity account. Create users and groups in the identity account. Create roles with appropriate permissions in the production and testing accounts. Add the identity account to the trust policies for the roles.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Modify permissions in the production and testing accounts to limit creating new IAM users to members of the Operations team. Set a strong IAM password policy on each account. Create new IAM users and groups in each account to limit developer access to just the services required to complete their job function.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a script that runs on each account that checks user accounts for adherence to a security policy. Disable any user or service accounts that do not comply.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create all user accounts in the production account. Create roles for access in the production account and testing accounts. Grant cross-account access from the production account to the testing account.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#536",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>The CISO of a large enterprise with multiple IT departments, each with its own AWS account, wants one central place where AWS permissions for users can be managed and users authentication credentials can be synchronized with the company's existing on-premises solution.<br>Which solution will meet the CISO's requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#536",
          answers: [
            {
              choice:
                "<p>A.  Define AWS IAM roles based on the functional responsibilities of the users in a central account. Create a SAML-based identity management provider. Map users in the on-premises groups to IAM roles. Establish trust relationships between the other accounts and the central account.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Deploy a common set of AWS IAM users, groups, roles, and policies in all of the AWS accounts using AWS Organizations. Implement federation between the on-premises identity provider and the AWS accounts.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use AWS Organizations in a centralized account to define service control policies (SCPs). Create a SAML-based identity management provider in each account and map users in the on-premises groups to AWS IAM roles.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Perform a thorough analysis of the user base and create AWS IAM users accounts that have the necessary permissions. Set up a process to provision and deprovision accounts based on data in the on-premises solution.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#537",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A large company has increased its utilization of AWS over time in an unmanaged way. As such, they have a large number of independent AWS accounts across different business units, projects, and environments. The company has created a Cloud Center of Excellence team, which is responsible for managing all aspects of the AWS Cloud, including their AWS accounts.<br>Which of the following should the Cloud Center of Excellence team do to BEST address their requirements in a centralized way? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: DE</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#537",
          answers: [
            {
              choice:
                "<p>A.  Control all AWS account root user credentials. Assign AWS IAM users in the account of each user who needs to access AWS resources. Follow the policy of least privilege in assigning permissions to each user.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Tag all AWS resources with details about the business unit, project, and environment. Send all AWS Cost and Usage reports to a central Amazon S3 bucket, and use tools such as Amazon Athena and Amazon QuickSight to collect billing details by business unit.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use the AWS Marketplace to choose and deploy a Cost Management tool. Tag all AWS resources with details about the business unit, project, and environment. Send all AWS Cost and Usage reports for the AWS accounts to this tool for analysis.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Set up AWS Organizations. Enable consolidated billing, and link all existing AWS accounts to a master billing account. Tag all AWS resources with details about the business unit, project and environment. Analyze Cost and Usage reports using tools such as Amazon Athena and Amazon QuickSight, to collect billing details by business unit.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Using a master AWS account, create IAM users within the master account. Define IAM roles in the other AWS accounts, which cover each of the required functions in the account. Follow the policy of least privilege in assigning permissions to each role, then enable the IAM users to assume the roles that they need to use.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#538",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>To abide by industry regulations, a Solutions Architect must design a solution that will store a company's critical data in multiple public AWS Regions, including in the United States, where the company's headquarters is located. The Solutions Architect is required to provide access to the data stored in AWS to the company's global WAN network. The Security team mandates that no traffic accessing this data should traverse the public internet.<br>How should the Solutions Architect design a highly available solution that meets the requirements and is cost-effective?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#538",
          answers: [
            {
              choice:
                "<p>A.  Establish AWS Direct Connect connections from the company headquarters to all AWS Regions in use. Use the company WAN to send traffic over to the headquarters and then to the respective DX connection to access the data.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Establish two AWS Direct Connect connections from the company headquarters to an AWS Region. Use the company WAN to send traffic over a DX connection. Use inter-region VPC peering to access the data in other AWS Regions.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Establish two AWS Direct Connect connections from the company headquarters to an AWS Region. Use the company WAN to send traffic over a DX connection. Use an AWS transit VPC solution to access data in other AWS Regions.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Establish two AWS Direct Connect connections from the company headquarters to an AWS Region. Use the company WAN to send traffic over a DX connection. Use Direct Connect Gateway to access data in other AWS Regions.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#539",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company wants to manage the costs associated with a group of 20 applications that are infrequently used, but are still business-critical, by migrating to AWS.<br>The applications are a mix of Java and Node.js spread across different instance clusters. The company wants to minimize costs while standardizing by using a single deployment methodology. Most of the applications are part of month-end processing routines with a small number of concurrent users, but they are occasionally run at other times. Average application memory consumption is less than 1 GB, though some applications use as much as 2.5 GB of memory during peak processing. The most important application in the group is a billing report written in Java that accesses multiple data sources and often for several hours.<br>Which is the MOST cost-effective solution?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#539",
          answers: [
            {
              choice:
                "<p>A.  Deploy a separate AWS Lambda function for each application. Use AWS CloudTrail logs and Amazon CloudWatch alarms to verify completion of critical jobs.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Deploy Amazon ECS containers on Amazon EC2 with Auto Scaling configured for memory utilization of 75%. Deploy an ECS task for each application being migrated with ECS task scaling. Monitor services and hosts by using Amazon CloudWatch.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Deploy AWS Elastic Beanstalk for each application with Auto Scaling to ensure that all requests have sufficient resources. Monitor each AWS Elastic Beanstalk deployment by using CloudWatch alarms.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Deploy a new Amazon EC2 instance cluster that co-hosts all applications by using EC2 Auto Scaling and Application Load Balancers. Scale cluster size based on a custom metric set on instance memory utilization. Purchase 3-year Reserved Instance reservations equal to the GroupMaxSize parameter of the Auto Scaling group.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#540",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A Solutions Architect must build a highly available infrastructure for a popular global video game that runs on a mobile phone platform. The application runs on<br>Amazon EC2 instances behind an Application Load Balancer. The instances run in an Auto Scaling group across multiple Availability Zones. The database tier is an Amazon RDS MySQL Multi-AZ instance. The entire application stack is deployed in both us-east-1 and eu-central-1. Amazon Route 53 is used to route traffic to the two installations using a latency-based routing policy. A weighted routing policy is configured in Route 53 as a fail over to another region in case the installation in a region becomes unresponsive.<br>During the testing of disaster recovery scenarios, after blocking access to the Amazon RDS MySQL instance in eu-central-1 from all the application instances running in that region. Route 53 does not automatically failover all traffic to us-east-1.<br>Based on this situation, which changes would allow the infrastructure to failover to us-east-1? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: CD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#540",
          answers: [
            {
              choice:
                "<p>A.  Specify a weight of 100 for the record pointing to the primary Application Load Balancer in us-east-1 and a weight of 60 for the pointing to the primary Application Load Balancer in eu-central-1.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Specify a weight of 100 for the record pointing to the primary Application Load Balancer in us-east-1 and a weight of 0 for the record pointing to the primary Application Load Balancer in eu-central-1.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Set the value of Evaluate Target Health to Yes on the latency alias resources for both eu-central-1 and us-east-1.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Write a URL in the application that performs a health check on the database layer. Add it as a health check within the weighted routing policy in both regions.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Disable any existing health checks for the resources in the policies and set a weight of 0 for the records pointing to primary in both eu-central-1 and us-east-1, and set a weight of 100 for the primary Application Load Balancer only in the region that has healthy resources.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#541",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>An online e-commerce business is running a workload on AWS. The application architecture includes a web tier, an application tier for business logic, and a database tier for user and transactional data management. The database server has a 100 GB memory requirement. The business requires cost-efficient disaster recovery for the application with an RTO of 5 minutes and an RPO of 1 hour. The business also has a regulatory for out-of-region disaster recovery with a minimum distance between the primary and alternate sites of 250 miles.<br>Which of the following options can the Solutions Architect design to create a comprehensive solution for this customer that meets the disaster recovery requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#541",
          answers: [
            {
              choice:
                "<p>A.  Back up the application and database data frequently and copy them to Amazon S3. Replicate the backups using S3 cross-region replication, and use AWS CloudFormation to instantiate infrastructure for disaster recovery and restore data from Amazon S3.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Employ a pilot light environment in which the primary database is configured with mirroring to build a standby database on m4.large in the alternate region. Use AWS CloudFormation to instantiate the web servers, application servers and load balancers in case of a disaster to bring the application up in the alternate region. Vertically resize the database to meet the full production demands, and use Amazon Route 53 to switch traffic to the alternate region.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use a scaled-down version of the fully functional production environment in the alternate region that includes one instance of the web server, one instance of the application server, and a replicated instance of the database server in standby mode. Place the web and the application tiers in an Auto Scaling behind a load balancer, which can automatically scale when the load arrives to the application. Use Amazon Route 53 to switch traffic to the alternate region.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Employ a multi-region solution with fully functional web, application, and database tiers in both regions with equivalent capacity. Activate the primary database in one region only and the standby database in the other region. Use Amazon Route 53 to automatically switch traffic from one region to another using health check routing policies.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#542",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company runs a memory-intensive analytics application using on-demand Amazon EC2 C5 compute optimized instance. The application is used continuously and application demand doubles during working hours. The application currently scales based on CPU usage. When scaling in occurs, a lifecycle hook is used because the instance requires 4 minutes to clean the application state before terminating.<br>Because users reported poor performance during working hours, scheduled scaling actions were implemented so additional instances would be added during working hours. The Solutions Architect has been asked to reduce the cost of the application.<br>Which solution is MOST cost-effective?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#542",
          answers: [
            {
              choice:
                "<p>A.  Use the existing launch configuration that uses C5 instances, and update the application AMI to include the Amazon CloudWatch agent. Change the Auto Scaling policies to scale based on memory utilization. Use Reserved Instances for the number of instances required after working hours, and use Spot Instances to cover the increased demand during working hours.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Update the existing launch configuration to use R5 instances, and update the application AMI to include SSM Agent. Change the Auto Scaling policies to scale based on memory utilization. Use Reserved Instances for the number of instances required after working hours, and use Spot Instances with on-Demand instances to cover the increased demand during working hours.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use the existing launch configuration that uses C5 instances, and update the application AMI to include SSM Agent. Leave the Auto Scaling policies to scale based on CPU utilization. Use scheduled Reserved Instances for the number of instances required after working hours, and use Spot Instances to cover the increased demand during working hours.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a new launch configuration using R5 instances, and update the application AMI to include the Amazon CloudWatch agent. Change the Auto Scaling policies to scale based on memory utilization. Use Reserved Instances for the number of instances required after working hours, and use Standard Reserved Instances with On-Demand Instances to cover the increased demand during working hours.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#543",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has a data center that must be migrated to AWS as quickly as possible. The data center has a 500 Mbps AWS Direct Connect link and a separate, fully available 1 Gbps ISP connection. A Solutions Architect must transfer 20 TB of data from the data center to an Amazon S3 bucket.<br>What is the FASTEST way transfer the data?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#543",
          answers: [
            {
              choice:
                "<p>A.  Upload the data to the S3 bucket using the existing DX link.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Send the data to AWS using the AWS Import/Export service.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Upload the data using an 80 TB AWS Snowball device.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Upload the data to the S3 bucket using S3 Transfer Acceleration.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#544",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company wants to host its website on AWS using serverless architecture design patterns for global customers. The company has outlined its requirements as follow:<br>✑ The website should be responsive.<br>✑ The website should offer minimal latency.<br>✑ The website should be highly available.<br>✑ Users should be able to authenticate through social identity providers such as Google, Facebook, and Amazon.<br>✑ There should be baseline DDoS protections for spikes in traffic.<br>How can the design requirements be met?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#544",
          answers: [
            {
              choice:
                "<p>A.  Use Amazon CloudFront with Amazon ECS for hosting the website. Use AWS Secrets Manager to provide user management and authentication functions. Use ECS Docker containers to build an API.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use Amazon Route 53 latency routing with an Application Load Balancer and AWS Fargate in different regions for hosting the website. Use Amazon Cognito to provide user management and authentication functions. Use Amazon EKS containers to build an API.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use Amazon CloudFront with Amazon S3 for hosting static web resources. Use Amazon Cognito to provide user management and authentication functions. Use Amazon API Gateway with AWS Lambda to build an API.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use AWS Direct Connect with Amazon CloudFront and Amazon S3 for hosting static web resources. Use Amazon Cognito to provide user management authentication functions. Use AWS Lambda to build an API.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#545",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is currently using AWS CodeCommit for its source control and AWS CodePipeline for continuous integration. The pipeline has a build stage for building the artifacts, which is then staged in an Amazon S3 bucket.<br>The company has identified various improvement opportunities in the existing process, and a Solutions Architect has been given the following requirements:<br>✑ Create a new pipeline to support feature development<br>✑ Support feature development without impacting production applications<br>✑ Incorporate continuous testing with unit tests<br>✑ Isolate development and production artifacts<br>✑ Support the capability to merge tested code into production code.<br>How should the Solutions Architect achieve these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#545",
          answers: [
            {
              choice:
                "<p>A.  Trigger a separate pipeline from CodeCommit feature branches. Use AWS CodeBuild for running unit tests. Use CodeBuild to stage the artifacts within an S3 bucket in a separate testing account.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Trigger a separate pipeline from CodeCommit feature branches. Use AWS Lambda for running unit tests. Use AWS CodeDeploy to stage the artifacts within an S3 bucket in a separate testing account.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Trigger a separate pipeline from CodeCommit tags. Use Jenkins for running unit tests. Create a stage in the pipeline with S3 as the target for staging the artifacts with an S3 bucket in a separate testing account.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a separate CodeCommit repository for feature development and use it to trigger the pipeline. Use AWS Lambda for running unit tests. Use AWS CodeBuild to stage the artifacts within different S3 buckets in the same production account.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#546",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company runs an ordering system on AWS using Amazon SQS and AWS Lambda, with each order received as a JSON message. Recently the company had a marketing event that led to a tenfold increase in orders. With this increase, the following undesired behaviors started in the ordering system:<br>✑ Lambda failures while processing orders lead to queue backlogs.<br>✑ The same orders have been processed multiple times.<br>A Solutions Architect has been asked to solve the existing issues with the ordering system and add the following resiliency features:<br>✑ Retain problematic orders for analysis.<br>✑ Send notification if errors go beyond a threshold value.<br>How should the Solutions Architect meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#546",
          answers: [
            {
              choice:
                "<p>A.  Receive multiple messages with each Lambda invocation, add error handling to message processing code and delete messages after processing, increase the visibility timeout for the messages, create a dead letter queue for messages that could not be processed, create an Amazon CloudWatch alarm on Lambda errors for notification.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Receive single messages with each Lambda invocation, put additional Lambda workers to poll the queue, delete messages after processing, increase the message timer for the messages, use Amazon CloudWatch Logs for messages that could not be processed, create a CloudWatch alarm on Lambda errors for notification.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Receive multiple messages with each Lambda invocation, use long polling when receiving the messages, log the errors from the message processing code using Amazon CloudWatch Logs, create a dead letter queue with AWS Lambda to capture failed invocations, create CloudWatch events on Lambda errors for notification.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Receive multiple messages with each Lambda invocation, add error handling to message processing code and delete messages after processing, increase the visibility timeout for the messages, create a delay queue for messages that could not be processed, create an Amazon CloudWatch metric on Lambda errors for notification.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#547",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p><img src='https://www.examtopics.com//assets/media/exam-media/04241/0036100001.png'><br>An organization has recently grown through acquisitions. Two of the purchased companies use the same IP CIDR range. There is a new short-term requirement to allow AnyCompany A (VPC-A) to communicate with a server that has the IP address 10.0.0.77 in AnyCompany B (VPC-B). AnyCompany A must also communicate with all resources in AnyCompany C (VPC-C). The Network team has created the VPC peer links, but it is having issues with communications between VPC-A and VPC-B. After an investigation, the team believes that the routing tables in the VPCs are incorrect.<br>What configuration will allow AnyCompany A to communicate with AnyCompany C in addition to the database in AnyCompany B?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#547",
          answers: [
            {
              choice:
                "<p>A.  On VPC-A, create a static route for the VPC-B CIDR range (10.0.0.0/24) across VPC peer pcx-AB.  Create a static route of 10.0.0.0/16 across VPC peer pcx-AC.  On VPC-B, create a static route for VPC-A CIDR (172.16.0.0/24) on peer pcx-AB.  On VPC-C, create a static route for VPC-A CIDR (172.16.0.0/24) across peer pcx-AC. </p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  On VPC-A, enable dynamic route propagation on pcx-AB and pcx-AC.  On VPC-B, enable dynamic route propagation and use security groups to allow only the IP address 10.0.0.77/32 on VPC peer pcx-AB.  On VPC-C, enable dynamic route propagation with VPC-A on peer pcx-AC. </p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  On VPC-A, create network access control lists that block the IP address 10.0.0.77/32 on VPC peer pcx-AC.  On VPC-A, create a static route for VPC-B CIDR (10.0.0.0/24) on pcx-AB and a static route for VPC-C CIDR (10.0.0.0/24) on pcx-AC.  On VPC-B, create a static route for VPC-A CIDR (172.16.0.0/24) on peer pcx-AB.  On VPC-C, create a static route for VPC-A CIDR (172.16.0.0/24) across peer pcx-AC. </p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  On VPC-A, create a static route for the VPC-B (10.0.0.77/32) database across VPC peer pcx-AB.  Create a static route for the VPC-C CIDR on VPC peer pcx-AC.  On VPC-B, create a static route for VPC-A CIDR (172.16.0.0/24) on peer pcx-AB.  On VPC-C, create a static route for VPC-A CIDR (172.16.0.0/24) across peer pcx-AC. </p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#548",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is designing a new highly available web application on AWS. The application requires consistent and reliable connectivity from the application servers in AWS to a backend REST API hosted in the company's on-premises environment. The backend connection between AWS and on-premises will be routed over an AWS Direct Connect connection through a private virtual interface. Amazon Route 53 will be used to manage private DNS records for the application to resolve the IP address on the backend REST API.<br>Which design would provide a reliable connection to the backend API?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#548",
          answers: [
            {
              choice:
                "<p>A.  Implement at least two backend endpoints for the backend REST API, and use Route 53 health checks to monitor the availability of each backend endpoint and perform DNS-level failover.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Install a second Direct Connect connection from a different network carrier and attach it to the same virtual private gateway as the first Direct Connect connection.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Install a second cross connect for the same Direct Connect connection from the same network carrier, and join both connections to the same link aggregation group (LAG) on the same private virtual interface.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an IPSec VPN connection routed over the public internet from the on-premises data center to AWS and attach it to the same virtual private gateway as the Direct Connect connection.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#549",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A retail company is running an application that stores invoice files in an Amazon S3 bucket and metadata about the files in an Amazon DynamoDB table. The application software runs in both us-east-1 and eu-west-1. The S3 bucket and DynamoDB table are in us-east-1. The company wants to protect itself from data corruption and loss of connectivity to either Region.<br>Which option meets these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#549",
          answers: [
            {
              choice:
                "<p>A.  Create a DynamoDB global table to replicate data between us-east-1 and eu-west-1. Enable continuous backup on the DynamoDB table in us-east-1. Enable versioning on the S3 bucket.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an AWS Lambda function triggered by Amazon CloudWatch Events to make regular backups of the DynamoDB table. Set up S3 cross-region replication from us-east-1 to eu-west-1. Set up MFA delete on the S3 bucket in us-east-1.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a DynamoDB global table to replicate data between us-east-1 and eu-west-1. Enable versioning on the S3 bucket. Implement strict ACLs on the S3 bucket.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a DynamoDB global table to replicate data between us-east-1 and eu-west-1. Enable continuous backup on the DynamoDB table in us-east-1. Set up S3 cross-region replication from us-east-1 to eu-west-1.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#550",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company wants to launch an online shopping website in multiple countries and must ensure that customers are protected against potential `man-in-the-middle` attacks.<br>Which architecture will provide the MOST secure site access?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#550",
          answers: [
            {
              choice:
                "<p>A.  Use Amazon Route 53 for domain registration and DNS services. Enable DNSSEC for all Route 53 requests. Use AWS Certificate Manager (ACM) to register TLS/SSL certificates for the shopping website, and use Application Load Balancers configured with those TLS/SSL certificates for the site. Use the Server Name Identification extension in all client requests to the site.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Register 2048-bit encryption keys from a third-party certificate service. Use a third-party DNS provider that uses the customer managed keys for DNSSec. Upload the keys to ACM, and use ACM to automatically deploy the certificates for secure web services to an EC2 front-end web server fleet by using NGINX. Use the Server Name Identification extension in all client requests to the site.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use Route 53 for domain registration. Register 2048-bit encryption keys from a third-party certificate service. Use a third-party DNS service that supports DNSSEC for DNS requests that use the customer managed keys. Import the customer managed keys to ACM to deploy the certificates to Classic Load Balancers configured with those TLS/SSL certificates for the site. Use the Server Name Identification extension in all clients requests to the site.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use Route 53 for domain registration, and host the company DNS root servers on Amazon EC2 instances running Bind. Enable DNSSEC for DNS requests. Use ACM to register TLS/SSL certificates for the shopping website, and use Application Load Balancers configured with those TLS/SSL certificates for the site. Use the Server Name Identification extension in all client requests to the site.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#551",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is creating an account strategy so that they can begin using AWS. The Security team will provide each team with the permissions they need to follow the principle or least privileged access. Teams would like to keep their resources isolated from other groups, and the Finance team would like each team's resource usage separated for billing purposes.<br>Which account creation process meets these requirements and allows for changes?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#551",
          answers: [
            {
              choice:
                "<p>A.  Create a new AWS Organizations account. Create groups in Active Directory and assign them to roles in AWS to grant federated access. Require each team to tag their resources, and separate bills based on tags. Control access to resources through IAM granting the minimally required privilege.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create individual accounts for each team. Assign the security account as the master account, and enable consolidated billing for all other accounts. Create a cross-account role for security to manage accounts, and send logs to a bucket in the security account.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a new AWS account, and use AWS Service Catalog to provide teams with the required resources. Implement a third-party billing solution to provide the Finance team with the resource use for each team based on tagging. Isolate resources using IAM to avoid account sprawl. Security will control and monitor logs and permissions.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a master account for billing using Organizations, and create each team's account from that master account. Create a security account for logs and cross-account access. Apply service control policies on each account, and grant the Security team cross-account access to all accounts. Security will create IAM policies for each account to maintain least privilege access.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#552",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has a 24 TB MySQL database in its on-premises data center that grows at the rate of 10 GB per day. The data center is connected to the company's<br>AWS infrastructure with a 50 Mbps VPN connection.<br>The company is migrating the application and workload to AWS. The application code is already installed and tested on Amazon EC2. The company now needs to migrate the database and wants to go live on AWS within 3 weeks.<br>Which of the following approaches meets the schedule with LEAST downtime?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#552",
          answers: [
            {
              choice:
                "<p>A.  1. Use the VM Import/Export service to import a snapshot of the on-premises database into AWS. 2. Launch a new EC2 instance from the snapshot. 3. Set up ongoing database replication from on premises to the EC2 database over the VPN. 4. Change the DNS entry to point to the EC2 database. 5. Stop the replication.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  1. Launch an AWS DMS instance. 2. Launch an Amazon RDS Aurora MySQL DB instance. 3. Configure the AWS DMS instance with on-premises and Amazon RDS database information. 4. Start the replication task within AWS DMS over the VPN. 5. Change the DNS entry to point to the Amazon RDS MySQL database. 6. Stop the replication.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  1. Create a database export locally using database-native tools. 2. Import that into AWS using AWS Snowball. 3. Launch an Amazon RDS Aurora DB instance. 4. Load the data in the RDS Aurora DB instance from the export. 5. Set up database replication from the on-premises database to the RDS Aurora DB instance over the VPN. 6. Change the DNS entry to point to the RDS Aurora DB instance. 7. Stop the replication.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  1. Take the on-premises application offline. 2. Create a database export locally using database-native tools. 3. Import that into AWS using AWS Snowball. 4. Launch an Amazon RDS Aurora DB instance. 5. Load the data in the RDS Aurora DB instance from the export. 6. Change the DNS entry to point to the Amazon RDS Aurora DB instance. 7. Put the Amazon EC2 hosted application online.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#553",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company wants to allow its Marketing team to perform SQL queries on customer records to identify market segments. The data is spread across hundreds of files. The records must be encrypted in transit and at rest. The Team Manager must have the ability to manage users and groups, but no team members should have access to services or resources not required for the SQL queries. Additionally, Administrators need to audit the queries made and receive notifications when a query violates rules defined by the Security team.<br>AWS Organizations has been used to create a new account and an AWS IAM user with administrator permissions for the Team Manager.<br>Which design meets these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#553",
          answers: [
            {
              choice:
                "<p>A.  Apply a service control policy (SCP) that allows access to IAM, Amazon RDS, and AWS CloudTrail. Load customer records in Amazon RDS MySQL and train users to execute queries using the AWS CLI. Stream the query logs to Amazon CloudWatch Logs from the RDS database instance. Use a subscription filter with AWS Lambda functions to audit and alarm on queries against personal data.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Apply a service control policy (SCP) that denies access to all services except IAM, Amazon Athena, Amazon S3, and AWS CloudTrail. Store customer record files in Amazon S3 and train users to execute queries using the CLI via Athena. Analyze CloudTrail events to audit and alarm on queries against personal data.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Apply a service control policy (SCP) that denies access to all services except IAM, Amazon DynamoDB, and AWS CloudTrail. Store customer records in DynamoDB and train users to execute queries using the AWS CLI. Enable DynamoDB streams to track the queries that are issued and use an AWS Lambda function for real-time monitoring and alerting.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Apply a service control policy (SCP) that allows access to IAM, Amazon Athena, Amazon S3, and AWS CloudTrail. Store customer records as files in Amazon S3 and train users to leverage the Amazon S3 Select feature and execute queries using the AWS CLI. Enable S3 object-level logging and analyze CloudTrail events to audit and alarm on queries against personal data.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#554",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A Solutions Architect is responsible for redesigning a legacy Java application to improve its availability, data durability, and scalability. Currently, the application runs on a single high-memory Amazon EC2 instance. It accepts HTTP requests from upstream clients, adds them to an in-memory queue, and responds with a<br>200 status. A separate application thread reads items from the queue, processes them, and persists the results to an Amazon RDS MySQL instance. The processing time for each item takes 90 seconds on average, most of which is spent waiting on external service calls, but the application is written to process multiple items in parallel.<br>Traffic to this service is unpredictable. During periods of high load, items may sit in the internal queue for over an hour while the application processes the backlog.<br><br>In addition, the current system has issues with availability and data loss if the single application node fails.<br>Clients that access this service cannot be modified. They expect to receive a response to each HTTP request they send within 10 seconds before they will time out and retry the request.<br>Which approach would improve the availability and durability of the system while decreasing the processing latency and minimizing costs?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#554",
          answers: [
            {
              choice:
                "<p>A.  Create an Amazon API Gateway REST API that uses Lambda proxy integration to pass requests to an AWS Lambda function. Migrate the core processing code to a Lambda function and write a wrapper class that provides a handler method that converts the proxy events to the internal application data model and invokes the processing module.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an Amazon API Gateway REST API that uses a service proxy to put items in an Amazon SQS queue. Extract the core processing code from the existing application and update it to pull items from Amazon SQS instead of an in-memory queue. Deploy the new processing application to smaller EC2 instances within an Auto Scaling group that scales dynamically based on the approximate number of messages in the Amazon SQS queue.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Modify the application to use Amazon DynamoDB instead of Amazon RDS. Configure Auto Scaling for the DynamoDB table. Deploy the application within an Auto Scaling group with a scaling policy based on CPU utilization. Back the in-memory queue with a memory-mapped file to an instance store volume and periodically write that file to Amazon S3.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Update the application to use a Redis task queue instead of the in-memory queue. Build a Docker container image for the application. Create an Amazon ECS task definition that includes the application container and a separate container to host Redis. Deploy the new task definition as an ECS service using AWS Fargate, and enable Auto Scaling.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#555",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A Solutions Architect needs to migrate a legacy application from on premises to AWS. On premises, the application runs on two Linux servers behind a load balancer and accesses a database that is master-master on two servers. Each application server requires a license file that is tied to the MAC address of the server's network adapter. It takes the software vendor 12 hours to send ne license files through email. The application requires configuration files to use static.<br>IPv4 addresses to access the database servers, not DNS.<br>Given these requirements, which steps should be taken together to enable a scalable architecture for the application servers? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: AD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#555",
          answers: [
            {
              choice:
                "<p>A.  Create a pool of ENIs, request license files from the vendor for the pool, and store the license files within Amazon S3. Create automation to download an unused license, and attach the corresponding ENI at boot time.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a pool of ENIs, request license files from the vendor for the pool, store the license files on an Amazon EC2 instance, modify the configuration files, and create an AMI from the instance. use this AMI for all instances.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a bootstrap automation to request a new license file from the vendor with a unique return email. Have the server configure itself with the received license file.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create bootstrap automation to attach an ENI from the pool, read the database IP addresses from AWS Systems Manager Parameter Store, and inject those parameters into the local configuration files. Keep SSM up to date using a Lambda function.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Install the application on an EC2 instance, configure the application, and configure the IP address information. Create an AMI from this instance and use if for all instances.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#556",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has an Amazon VPC that is divided into a public subnet and a private subnet. A web application runs in Amazon VPC, and each subnet has its own<br>NACL. The public subnet has a CIDR of 10.0.0.0/24. An Application Load Balancer is deployed to the public subnet. The private subnet has a CIDR of 10.0.1.0/24.<br>Amazon EC2 instances that run a web server on port 80 are launched into the private subnet.<br>Only network traffic that is required for the Application Load Balancer to access the web application can be allowed to travel between the public and private subnets.<br>What collection of rules should be written to ensure that the private subnet's NACL meets the requirement? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: BD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#556",
          answers: [
            {
              choice:
                "<p>A.  An inbound rule for port 80 from source 0.0.0.0/0.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  An inbound rule for port 80 from source 10.0.0.0/24.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  An outbound rule for port 80 to destination 0.0.0.0/0.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  An outbound rule for port 80 to destination 10.0.0.0/24.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  An outbound rule for ports 1024 through 65535 to destination 10.0.0.0/24.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#557",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has an internal AWS Elastic Beanstalk worker environment inside a VPC that must access an external payment gateway API available on an HTTPS endpoint on the public internet. Because of security policies, the payment gateway's Application team can grant access to only one public IP address.<br>Which architecture will set up an Elastic Beanstalk environment to access the company's application without making multiple changes on the company's end?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#557",
          answers: [
            {
              choice:
                "<p>A.  Configure the Elastic Beanstalk application to place Amazon EC2 instances in a private subnet with an outbound route to a NAT gateway in a public subnet. Associate an Elastic IP address to the NAT gateway that can be whitelisted on the payment gateway application side.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Configure the Elastic Beanstalk application to place Amazon EC2 instances in a public subnet with an internet gateway. Associate an Elastic IP address to the internet gateway that can be whitelisted on the payment gateway application side.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure the Elastic Beanstalk application to place Amazon EC2 instances in a private subnet. Set an HTTPS_PROXY application parameter to send outbound HTTPS connections to an EC2 proxy server deployed in a public subnet. Associate an Elastic IP address to the EC2 proxy host that can be whitelisted on the payment gateway application side.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure the Elastic Beanstalk application to place Amazon EC2 instances in a public subnet. Set the HTTPS_PROXY and NO_PROXY application parameters to send non-VPC outbound HTTPS connections to an EC2 proxy server deployed in a public subnet. Associate an Elastic IP address to the EC2 proxy host that can be whitelisted on the payment gateway application side.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#558",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has a website that enables users to upload videos. Company policy states the uploaded videos must be analyzed for restricted content. An uploaded video is placed in Amazon S3, and a message is pushed to an Amazon SQS queue with the video's location. A backend application pulls this location from<br>Amazon SQS and analyzes the video.<br>The video analysis is compute-intensive and occurs sporadically during the day. The website scales with demand. The video analysis application runs on a fixed number of instances. Peak demand occurs during the holidays, so the company must add instances to the application during this time. All instances used are currently on-demand Amazon EC2 T2 instances. The company wants to reduce the cost of the current solution.<br>Which of the following solutions is MOST cost-effective?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#558",
          answers: [
            {
              choice:
                "<p>A.  Keep the website on T2 instances. Determine the minimum number of website instances required during off-peak times and use Spot Instances to cover them while using Reserved Instances to cover peak demand. Use Amazon EC2 R4 and Amazon EC2 R5 Reserved Instances in an Auto Scaling group for the video analysis application.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Keep the website on T2 instances. Determine the minimum number of website instances required during off-peak times and use Reserved Instances to cover them while using On-Demand Instances to cover peak demand. Use Spot Fleet for the video analysis application comprised of Amazon EC2 C4 and Amazon EC2 C5 Spot Instances.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Migrate the website to AWS Elastic Beanstalk and Amazon EC2 C4 instances. Determine the minimum number of website instances required during off-peak times and use On-Demand Instances to cover them while using Spot capacity to cover peak demand. Use Spot Fleet for the video analysis application comprised of C4 and Amazon EC2 C5 instances.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Migrate the website to AWS Elastic Beanstalk and Amazon EC2 R4 instances. Determine the minimum number of website instances required during off-peak times and use Reserved Instances to cover them while using On-Demand Instances to cover peak demand. Use Spot Fleet for the video analysis application comprised of R4 and Amazon EC2 R5 instances.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#559",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has an application that uses Amazon EC2 instances in an Auto Scaling group. The Quality Assurance (QA) department needs to launch a large number of short-lived environments to test the application. The application environments are currently launched by the Manager of the department using an AWS<br>CloudFormation template. To launch the stack, the Manager uses a role with permission to use CloudFormation, EC2, and Auto Scaling APIs. The Manager wants to allow testers to launch their own environments, but does not want to grant broad permissions to each user.<br>Which set up would achieve these goals?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#559",
          answers: [
            {
              choice:
                "<p>A.  Upload the AWS CloudFormation template to Amazon S3. Give users in the QA department permission to assume the Manager's role and add a policy that restricts the permissions to the template and the resources it creates. Train users to launch the template from the CloudFormation console.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an AWS Service Catalog product from the environment template. Add a launch constraint to the product with the existing role. Give users in the QA department permission to use AWS Service Catalog APIs only. Train users to launch the templates from the AWS Service Catalog console.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Upload the AWS CloudFormation template to Amazon S3. Give users in the QA department permission to use CloudFormation and S3 APIs, with conditions that restrict the permission to the template and the resources it creates. Train users to launch the template from the CloudFormation console.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an AWS Elastic Beanstalk application from the environment template. Give users in the QA department permission to use Elastic Beanstalk permissions only. Train users to launch Elastic Beanstalk environment with the Elastic Beanstalk CLI, passing the existing role to the environment as a service role.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#560",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has several teams, and each team has their own Amazon RDS database that totals 100 TB. The company is building a data query platform for<br>Business Intelligence Analysts to generate a weekly business report. The new system must run ad-hoc SQL queries.<br>What is the MOST cost-effective solution?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#560",
          answers: [
            {
              choice:
                "<p>A.  Create a new Amazon Redshift cluster. Create an AWS Glue ETL job to copy data from the RDS databases to the Amazon Redshift cluster. Use Amazon Redshift to run the query.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an Amazon EMR cluster with enough core nodes. Run an Apache Spark job to copy data from the RDS databases to a Hadoop Distributed File System (HDFS). Use a local Apache Hive metastore to maintain the table definition. Use Spark SQL to run the query.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use an AWS Glue ETL job to copy all the RDS databases to a single Amazon Aurora PostgreSQL database. Run SQL queries on the Aurora PostgreSQL database.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use an AWS Glue crawler to crawl all the databases and create tables in the AWS Glue Data Catalog. Use an AWS Glue ETL job to load data from the RDS databases to Amazon S3, and use Amazon Athena to run the queries.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#561",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company provides AWS solutions to its users with AWS CloudFormation templates. Users launch the templates in their accounts to have different solutions provisioned for them. The users want to improve the deployment strategy for solutions while retaining the ability to do the following:<br>✑ Add their own features to a solution for their specific deployments.<br>✑ Run unit tests on their changes.<br>✑ Turn features on and off for their deployments.<br>✑ Automatically update with code changes.<br>✑ Run security scanning tools for their deployments.<br>Which strategies should the Solutions Architect use to meet the requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#561",
          answers: [
            {
              choice:
                "<p>A.  Allow users to download solution code as Docker images. Use AWS CodeBuild and AWS CodePipeline for the CI/CD pipeline. Use Docker images for different solution features and the AWS CLI to turn features on and off. Use AWS CodeDeploy to run unit tests and security scans, and for deploying and updating a solution with changes.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Allow users to download solution code artifacts. Use AWS CodeCommit and AWS CodePipeline for the CI/CD pipeline. Use AWS Amplify plugins for different solution features and user prompts to turn features on and off. Use AWS Lambda to run unit tests and security scans, and AWS CodeBuild for deploying and updating a solution with changes.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Allow users to download solution code artifacts in their Amazon S3 buckets. Use Amazon S3 and AWS CodePipeline for the CI/CD pipelines. Use CloudFormation StackSets for different solution features and to turn features on and off. Use AWS Lambda to run unit tests and security scans, and CloudFormation for deploying and updating a solution with changes.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Allow users to download solution code artifacts. Use AWS CodeCommit and AWS CodePipeline for the CI/CD pipeline. Use the AWS Cloud Development Kit constructs for different solution features, and use the manifest file to turn features on and off. Use AWS CodeBuild to run unit tests and security scans, and for deploying and updating a solution with changes.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#562",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company uses Amazon S3 to host a web application. Currently, the company uses a continuous integration tool running on an Amazon EC2 instance that builds and deploys the application by uploading it to an S3 bucket. A Solutions Architect needs to enhance the security of the company's platform with the following requirements:<br>✑ A build process should be run in a separate account from the account hosting the web application.<br>✑ A build process should have minimal access in the account it operates in.<br>✑ Long-lived credentials should not be used.<br>As a start, the Development team created two AWS accounts: one for the application named web account process; other is a named build account.<br>Which solution should the Solutions Architect use to meet the security requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#562",
          answers: [
            {
              choice:
                "<p>A.  In the build account, create a new IAM role, which can be assumed by Amazon EC2 only. Attach the role to the EC2 instance running the continuous integration process. Create an IAM policy to allow s3: PutObject calls on the S3 bucket in the web account. In the web account, create an S3 bucket policy attached to the S3 bucket that allows the build account to use s3:PutObject calls.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  In the build account, create a new IAM role, which can be assumed by Amazon EC2 only. Attach the role to the EC2 instance running the continuous integration process. Create an IAM policy to allow s3: PutObject calls on the S3 bucket in the web account. In the web account, create an S3 bucket policy attached to the S3 bucket that allows the newly created IAM role to use s3:PutObject calls.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  In the build account, create a new IAM user. Store the access key and secret access key in AWS Secrets Manager. Modify the continuous integration process to perform a lookup of the IAM user credentials from Secrets Manager. Create an IAM policy to allow s3: PutObject calls on the S3 bucket in the web account, and attack it to the user. In the web account, create an S3 bucket policy attached to the S3 bucket that allows the newly created IAM user to use s3:PutObject calls.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  In the build account, modify the continuous integration process to perform a lookup of the IAM user credentials from AWS Secrets Manager. In the web account, create a new IAM user. Store the access key and secret access key in Secrets Manager. Attach the PowerUserAccess IAM policy to the IAM user.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#563",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A fleet of Amazon ECS instances is used to poll an Amazon SQS queue and update items in an Amazon DynamoDB database. Items in the table are not being updated, and the SQS queue is filling up. Amazon CloudWatch Logs are showing consistent 400 errors when attempting to update the table. The provisioned write capacity units are appropriately configured, and no throttling is occurring.<br>What is the LIKELY cause of the failure?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#563",
          answers: [
            {
              choice: "<p>A.  The ECS service was deleted.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  The ECS configuration does not contain an Auto Scaling group.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  The ECS instance task execution IAM role was modified.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice: "<p>D.  The ECS task role was modified.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#564",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A mobile gaming application publishes data continuously to Amazon Kinesis Data Streams. An AWS Lambda function processes records from the data stream and writes to an Amazon DynamoDB table. The DynamoDB table has an auto scaling policy enabled with the target utilization set to 70%.<br>For several minutes at the start and end of each day, there is a spike in traffic that often exceeds five times the normal load. The company notices the<br>GetRecords.IteratorAgeMilliseconds metric of the Kinesis data stream temporarily spikes to over a minute for several minutes. The AWS Lambda function writes<br>ProvisionedThroughputExceededException messages to Amazon CloudWatch Logs during these times, and some records are redirected to the dead letter queue.<br>No exceptions are thrown by the Kinesis producer on the gaming application.<br>What change should the company make to resolve this issue?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#564",
          answers: [
            {
              choice:
                "<p>A.  Use Application Auto Scaling to set a scaling schedule to scale out write capacity on the DynamoDB table during predictable load spikes.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use Amazon CloudWatch Events to monitor the dead letter queue and invoke a Lambda function to automatically retry failed records.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Reduce the DynamoDB table auto scaling policy's target utilization to 20% to more quickly respond to load spikes.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Increase the number of shards in the Kinesis data stream to increase throughput capacity.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#565",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has a web application that securely uploads pictures and videos to an Amazon S3 bucket. The company requires that only authenticated users are allowed to post content. The application generates a presigned URL that is used to upload objects through a browser interface. Most users are reporting slow upload times for objects larger than 100 MB.<br>What can a Solutions Architect do to improve the performance of these uploads while ensuring only authenticated users are allowed to post content?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#565",
          answers: [
            {
              choice:
                "<p>A.  Set up an Amazon API Gateway with an edge-optimized API endpoint that has a resource as an S3 service proxy. Configure the PUT method for this resource to expose the S3 PutObject operation. Secure the API Gateway using a COGNITO_USER_POOLS authorizer. Have the browser interface use API Gateway instead of the presigned URL to upload objects.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Set up an Amazon API Gateway with a regional API endpoint that has a resource as an S3 service proxy. Configure the PUT method for this resource to expose the S3 PutObject operation. Secure the API Gateway using an AWS Lambda authorizer. Have the browser interface use API Gateway instead of the presigned URL to upload API objects.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Enable an S3 Transfer Acceleration endpoint on the S3 bucket. Use the endpoint when generating the presigned URL. Have the browser interface upload the objects to this URL using the S3 multipart upload API.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure an Amazon CloudFront distribution for the destination S3 bucket. Enable PUT and POST methods for the CloudFront cache behavior. Update the CloudFront origin to use an origin access identity (OAI). Give the OAI user s3:PutObject permissions in the bucket policy. Have the browser interface upload objects using the CloudFront distribution.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#566",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company's CISO has asked a Solutions Architect to re-engineer the company's current CI/CD practices to make sure patch deployments to its applications can happen as quickly as possible with minimal downtime if vulnerabilities are discovered. The company must also be able to quickly roll back a change in case of errors.<br>The web application is deployed in a fleet of Amazon EC2 instances behind an Application Load Balancer. The company is currently using GitHub to host the application source code, and has configured an AWS CodeBuild project to build the application. The company also intends to use AWS CodePipeline to trigger builds from GitHub commits using the existing CodeBuild project.<br>What CI/CD configuration meets all of the requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#566",
          answers: [
            {
              choice:
                "<p>A.  Configure CodePipeline with a deploy stage using AWS CodeDeploy configured for in-place deployment. Monitor the newly deployed code, and, if there are any issues, push another code update.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Configure CodePipeline with a deploy stage using AWS CodeDeploy configured for blue/green deployments. Monitor the newly deployed code, and, if there are any issues, trigger a manual rollback using CodeDeploy.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure CodePipeline with a deploy stage using AWS CloudFormation to create a pipeline for test and production stacks. Monitor the newly deployed code, and, if there are any issues, push another code update.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure the CodePipeline with a deploy stage using AWS OpsWorks and in-place deployments. Monitor the newly deployed code, and, if there are any issues, push another code update.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#567",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company wants to analyze log data using date ranges with a custom application running on AWS. The application generates about 10 GB of data every day, which is expected to grow. A Solutions Architect is tasked with storing the data in Amazon S3 and using Amazon Athena to analyze the data.<br>Which combination of steps will ensure optimal performance as the data grows? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: CE</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#567",
          answers: [
            {
              choice:
                "<p>A.  Store each object in Amazon S3 with a random string at the front of each key.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice: "<p>B.  Store the data in multiple S3 buckets.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Store the data in Amazon S3 in a columnar format, such as Apache Parquet or Apache ORC. </p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Store the data in Amazon S3 in objects that are smaller than 10 MB. </p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Store the data using Apache Hive partitioning in Amazon S3 using a key that includes a date, such as dt=2019-02.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#568",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>An advisory firm is creating a secure data analytics solution for its regulated financial services users. Users will upload their raw data to an Amazon S3 bucket, where they have PutObject permissions only. Data will be analyzed by applications running on an Amazon EMR cluster launched in a VPC. The firm requires that the environment be isolated from the internet. All data at rest must be encrypted using keys controlled by the firm.<br>Which combination of actions should the Solutions Architect take to meet the user's security requirements? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: AE</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#568",
          answers: [
            {
              choice:
                "<p>A.  Launch the Amazon EMR cluster in a private subnet configured to use an AWS KMS CMK for at-rest encryption. Configure a gateway VPC endpoint for Amazon S3 and an interface VPC endpoint for AWS KMS.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Launch the Amazon EMR cluster in a private subnet configured to use an AWS KMS CMK for at-rest encryption. Configure a gateway VPC endpoint for Amazon S3 and a NAT gateway to access AWS KMS.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Launch the Amazon EMR cluster in a private subnet configured to use an AWS CloudHSM appliance for at-rest encryption. Configure a gateway VPC endpoint for Amazon S3 and an interface VPC endpoint for CloudHSM.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure the S3 endpoint policies to permit access to the necessary data buckets only.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Configure the S3 bucket policies to permit access using an aws:sourceVpce condition to match the S3 endpoint ID. </p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#569",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>While debugging a backend application for an IoT system that supports globally distributed devices, a Solutions Architect notices that stale data is occasionally being sent to user devices. Devices often share data, and stale data does not cause issues in most cases. However, device operations are disrupted when a device reads the stale data after an update.<br>The global system has multiple identical application stacks deployed in different AWS Regions. If a user device travels out of its home geographic region, it will always connect to the geographically closest AWS Region to write or read data. The same data is available in all supported AWS Regions using an Amazon<br>DynamoDB global table.<br>What change should be made to avoid causing disruptions in device operations?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#569",
          answers: [
            {
              choice:
                "<p>A.  Update the backend to use strongly consistent reads. Update the devices to always write to and read from their home AWS Region.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Enable strong consistency globally on a DynamoDB global table. Update the backend to use strongly consistent reads.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Switch the backend data store to Amazon Aurora MySQL with cross-region replicas. Update the backend to always write to the master endpoint.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Select one AWS Region as a master and perform all writes in that AWS Region only. Update the backend to use strongly consistent reads.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#570",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A software as a service (SaaS) company offers a cloud solution for document management to private law firms and the public sector. A local government client recently mandated that highly confidential documents cannot be stored outside the country. The company CIO asks a Solutions Architect to ensure the application can adapt to this new requirement. The CIO also wants to have a proper backup plan for these documents, as backups are not currently performed.<br>What solution meets these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#570",
          answers: [
            {
              choice:
                "<p>A.  Tag documents that are not highly confidential as regular in Amazon S3. Create individual S3 buckets for each user. Upload objects to each user's bucket. Set S3 bucket replication from these buckets to a central S3 bucket in a different AWS account and AWS Region. Configure an AWS Lambda function triggered by scheduled events in Amazon CloudWatch to delete objects that are tagged as secret in the S3 backup bucket.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Tag documents as either regular or secret in Amazon S3. Create an individual S3 backup bucket in the same AWS account and AWS Region. Create a cross- region S3 bucket in a separate AWS account. Set proper IAM roles to allow cross-region permissions to the S3 buckets. Configure an AWS Lambda function triggered by Amazon CloudWatch scheduled events to copy objects that are tagged as secret to the S3 backup bucket and objects tagged as normal to the cross-region S3 bucket.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Tag documents as either regular or secret in Amazon S3. Create an individual S3 backup bucket in the same AWS account and AWS Region. Use S3 selective cross-region replication based on object tags to move regular documents to an S3 bucket in a different AWS Region. Configure an AWS Lambda function that triggers when new S3 objects are created in the main bucket to replicate only documents tagged as secret into the S3 bucket in the same AWS Region.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Tag highly confidential documents as secret in Amazon S3. Create an individual S3 backup bucket in the same AWS account and AWS Region. Use S3 selective cross-region replication based on object tags to move regular documents to a different AWS Region. Create an Amazon CloudWatch Events rule for new S3 objects tagged as secret to trigger an AWS Lambda function to replicate them into a separate bucket in the same AWS Region.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#571",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has an application that runs on a fleet of Amazon EC2 instances and stores 70 GB of device data for each instance in Amazon S3. Recently, some of the S3 uploads have been failing. At the same time, the company is seeing an unexpected increase in storage data costs. The application code cannot be modified.<br>What is the MOST efficient way to upload the device data to Amazon S3 while managing storage costs?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#571",
          answers: [
            {
              choice:
                "<p>A.  Upload device data using a multipart upload. Use the AWS CLI to list incomplete parts to address the failed S3 uploads. Enable the lifecycle policy for the incomplete multipart uploads on the S3 bucket to delete the old uploads and prevent new failed uploads from accumulating.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Upload device data using S3 Transfer Acceleration. Use the AWS Management Console to address the failed S3 uploads. Use the Multi-Object Delete operation nightly to delete the old uploads.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Upload device data using a multipart upload. Use the AWS Management Console to list incomplete parts to address the failed S3 uploads. Configure a lifecycle policy to archive continuously to Amazon S3 Glacier.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Upload device data using S3 Transfer Acceleration. Use the AWS Management Console to list incomplete parts to address the failed S3 uploads. Enable the lifecycle policy for the incomplete multipart uploads on the S3 bucket to delete the old uploads and prevent new failed uploads from accumulating.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#572",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is in the process of implementing AWS Organizations to constrain its developers to use only Amazon EC2, Amazon S3, and Amazon DynamoDB. The<br>Developers account resides in a dedicated organizational unit (OU). The Solutions Architect has implemented the following SCP on the Developers account:<br><img src='https://www.examtopics.com//assets/media/exam-media/04241/0037900001.png'><br>When this policy is deployed, IAM users in the Developers account are still able to use AWS services that are not listed in the policy.<br>What should the Solutions Architect do to eliminate the Developers' ability to use services outside the scope of this policy?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#572",
          answers: [
            {
              choice:
                "<p>A.  Create an explicit deny statement for each AWS service that should be constrained.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Remove the FullAWSAccess SCP from the Developer account's OU.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Modify the FullAWSAccess SCP to explicitly deny all services.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Add an explicit deny statement using a wildcard to the end of the SCP.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#573",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company developed a Java application and deployed it to an Apache Tomcat server that runs on Amazon EC2 instances. The company's Engineering team has implemented AWS CloudFormation and Chef Automate to automate the provisioning of and updates to the infrastructure and configuration of the application in the development, test, and production environments. These implementations have led to significantly improves reliability in releasing changes. The Engineering team reports there are frequent service disruptions due to unexpected errors when updating the application of the Apache Tomcat server.<br>Which solution will increase the reliability of all releases?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#573",
          answers: [
            {
              choice:
                "<p>A.  Implement a blue/green deployment methodology.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice: "<p>B.  Implement the canary release methodology.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure Amazon CloudFront to serve all requests from the cache while deploying the updates.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Implement the all at once deployment methodology.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#574",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>During a security audit of a Service team's application, a Solutions Architect discovers that a username and password for an Amazon RDS database and a set of<br>AWS IAM user credentials can be viewed in the AWS Lambda function code. The Lambda function uses the username and password to run queries on the database, and it uses the IAM credentials to call AWS services in a separate management account.<br>The Solutions Architect is concerned that the credentials could grant inappropriate access to anyone who can view the Lambda code. The management account and the Service team's account are in separate AWS Organizations organizational units (OUs).<br>Which combination of changes should the Solutions Architect make to improve the solution's security? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: AB</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#574",
          answers: [
            {
              choice:
                "<p>A.  Configure Lambda to assume a role in the management account with appropriate access to AWS.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Configure Lambda to use the stored database credentials in AWS Secrets Manager and enable automatic rotation.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a Lambda function to rotate the credentials every hour by deploying a new Lambda version with the updated credentials.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use an SCP on the management account's OU to prevent IAM users from accessing resources in the Service team's account.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Enable AWS Shield Advanced on the management account to shield sensitive resources from unauthorized IAM access.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#575",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is having issues with a newly deployed serverless infrastructure that uses Amazon API Gateway, Amazon Lambda, and Amazon DynamoDB.<br>In a steady state, the application performs as expected. However, during peak load, tens of thousands of simultaneous invocations are needed and user requests fail multiple times before succeeding. The company has checked the logs for each component, focusing specifically on Amazon CloudWatch Logs for Lambda.<br>There are no errors logged by the services or applications.<br>What might cause this problem?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#575",
          answers: [
            {
              choice:
                "<p>A.  Lambda has very low memory assigned, which causes the function to fail at peak load.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Lambda is in a subnet that uses a NAT gateway to reach out of the internet, and the function instance does not have sufficient Amazon EC2 resources in the VPC to scale with the load.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  The throttle limit set on API Gateway is very low. During peak load, the additional requests are not making their way through to Lambda.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  DynamoDB is set up in an auto scaling mode. During peak load, DynamoDB adjusts capacity and throughput behind the scenes, which is causing the temporary downtime. Once the scaling completes, the retries go through successfully.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#576",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A large company with hundreds of AWS accounts has a newly established centralized internal process for purchasing new or modifying existing Reserved<br>Instances. This process requires all business units that want to purchase or modify Reserved Instances to submit requests to a dedicated team for procurement or execution. Previously, business units would directly purchase or modify Reserved Instances in their own respective AWS accounts autonomously.<br>Which combination of steps should be taken to proactively enforce the new process in the MOST secure way possible? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: AD</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#576",
          answers: [
            {
              choice:
                "<p>A.  Ensure all AWS accounts are part of an AWS Organizations structure operating in all features mode.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS Config to report on the attachment of an IAM policy that denies access to the ec2:PurchaseReservedInstancesOffering and ec2:ModifyReservedInstances actions.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  In each AWS account, create an IAM policy with a DENY rule to the ec2:PurchaseReservedInstancesOffering and ec2:ModifyReservedInstances actions.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an SCP that contains a deny rule to the ec2:PurchaseReservedInstancesOffering and ec2:ModifyReservedInstances actions. Attach the SCP to each organizational unit (OU) of the AWS Organizations structure.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Ensure that all AWS accounts are part of an AWS Organizations structure operating in consolidated billing features mode.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#577",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A Solutions Architect wants to make sure that only AWS users or roles with suitable permissions can access a new Amazon API Gateway endpoint. The Solutions<br>Architect wants an end-to-end view of each request to analyze the latency of the request and create service maps.<br>How can the Solutions Architect design the API Gateway access control and perform request inspections?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#577",
          answers: [
            {
              choice:
                "<p>A.  For the API Gateway method, set the authorization to AWS_IAM. Then, give the IAM user or role execute-api:Invoke permission on the REST API resource. Enable the API caller to sign requests with AWS Signature when accessing the endpoint. Use AWS X-Ray to trace and analyze user requests to API Gateway.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  For the API Gateway resource, set CORS to enabled and only return the company's domain in Access-Control-Allow-Origin headers. Then, give the IAM user or role execute-api:Invoke permission on the REST API resource. Use Amazon CloudWatch to trace and analyze user requests to API Gateway.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an AWS Lambda function as the custom authorizer, ask the API client to pass the key and secret when making the call, and then use Lambda to validate the key/secret pair against the IAM system. Use AWS X-Ray to trace and analyze user requests to API Gateway.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a client certificate for API Gateway. Distribute the certificate to the AWS users and roles that need to access the endpoint. Enable the API caller to pass the client certificate when accessing the endpoint. Use Amazon CloudWatch to trace and analyze user requests to API Gateway.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#578",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A Solutions Architect needs to design a highly available application that will allow authenticated users to stay connected to the application even when there are underlying failures.<br>Which solution will meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#578",
          answers: [
            {
              choice:
                "<p>A.  Deploy the application on Amazon EC2 instances. Use Amazon Route 53 to forward requests to the EC2 instances. Use Amazon DynamoDB to save the authenticated connection details.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Deploy the application on Amazon EC2 instances in an Auto Scaling group. Use an internet-facing Application Load Balancer to handle requests. Use Amazon DynamoDB to save the authenticated connection details.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Deploy the application on Amazon EC2 instances in an Auto Scaling group. Use an internet-facing Application Load Balancer on the front end. Use EC2 instances to save the authenticated connection details.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Deploy the application on Amazon EC2 instances in an Auto Scaling group. Use an internet-facing Application Load Balancer on the front end. Use EC2 instances hosting a MySQL database to save the authenticated connection details.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#579",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company experienced a breach of highly confidential personal information due to permission issues on an Amazon S3 bucket. The Information Security team has tightened the bucket policy to restrict access. Additionally, to be better prepared for future attacks, these requirements must be met:<br>✑ Identify remote IP addresses that are accessing the bucket objects.<br>✑ Receive alerts when the security policy on the bucket is changed.<br>✑ Remediate the policy changes automatically.<br>Which strategies should the Solutions Architect use?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#579",
          answers: [
            {
              choice:
                "<p>A.  Use Amazon CloudWatch Logs with CloudWatch filters to identify remote IP addresses. Use CloudWatch Events rules with AWS Lambda to automatically remediate S3 bucket policy changes. Use Amazon SES with CloudWatch Events rules for alerts.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use Amazon Athena with S3 access logs to identify remote IP addresses. Use AWS Config rules with AWS Systems Manager Automation to automatically remediate S3 bucket policy changes. Use Amazon SNS with AWS Config rules for alerts.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use S3 access logs with Amazon Elasticsearch Service and Kibana to identify remote IP addresses. Use an Amazon Inspector assessment template to automatically remediate S3 bucket policy changes. Use Amazon SNS for alerts.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use Amazon Macie with an S3 bucket to identify access patterns and remote IP addresses. Use AWS Lambda with Macie to automatically remediate S3 bucket policy changes. Use Macie automatic alerting capabilities for alerts.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#580",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A Solutions Architect is designing a deployment strategy for an application tier and has the following requirements:<br>✑ The application code will need a 500 GB static dataset to be present before application startup.<br>✑ The application tier must be able to scale up and down based on demand with as little startup time as possible.<br>✑ The Development team should be able to update the code multiple times each day.<br>✑ Critical operating system (OS) patches must be installed within 48 hours of being released.<br>Which deployment strategy meets these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#580",
          answers: [
            {
              choice:
                "<p>A.  Use AWS Systems Manager to create a new AMI with the updated OS patches. Update the Auto Scaling group to use the patched AMI and replace existing unpatched instances. Use AWS CodeDeploy to push the application code to the instances. Store the static data in Amazon EFS.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS Systems Manager to create a new AMI with updated OS patches. Update the Auto Scaling group to use the patched AMI and replace existing unpatched instances. Update the OS patches and the application code as batch job every night. Store the static data in Amazon EFS.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use an Amazon-provided AMI for the OS. Configure an Auto Scaling group set to a static instance count. Configure an Amazon EC2 user data script to download the data from Amazon S3. Install OS patches with AWS Systems Manager when they are released. Use AWS CodeDeploy to push the application code to the instances.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use an Amazon-provided AMI for the OS. Configure an Auto Scaling group. Configure an Amazon EC2 user data script to download the data from Amazon S3. Replace existing instances after each updated Amazon-provided AMI release. Use AWS CodeDeploy to push the application code to the instances.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#581",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is operating a large customer service call center, and stores and processes call recordings with a custom application. Approximately 2% of the call recordings are transcribed by an offshore team for quality assurance purposes. These recordings take up to 72 hours to be transcribed. The recordings are stored on an NFS share before they are archived to an offsite location after 90 days. The company uses Linux servers for processing the call recordings and managing the transcription queue. There is also a web application for the quality assurance staff to review and score call recordings.<br>The company plans to migrate the system to AWS to reduce storage costs and the time required to transcribe calls.<br>Which set of actions should be taken to meet the company's objectives?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#581",
          answers: [
            {
              choice:
                "<p>A.  Upload the call recordings to Amazon S3 from the call center. Set up an S3 lifecycle policy to move the call recordings to Amazon S3 Glacier after 90 days. Use an AWS Lambda trigger to transcribe the call recordings with Amazon Transcribe. Use Amazon S3, Amazon API Gateway, and Lambda to host the review and scoring application.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Upload the call recordings to Amazon S3 from the call center. Set up an S3 lifecycle policy to move the call recordings to Amazon S3 Glacier after 90 days. Use an AWS Lambda trigger to transcribe the call recordings with Amazon Mechanical Turk. Use Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer to host the review and scoring application.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer to host the review and scoring application. Upload the call recordings to this application from the call center and store them on an Amazon EFS mount point. Use AWS Backup to archive the call recordings after 90 days. Transcribe the call recordings with Amazon Transcribe.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Upload the call recordings to Amazon S3 from the call center and put the object key in an Amazon SQS queue. Set up an S3 lifecycle policy to move the call recordings to Amazon S3 Glacier after 90 days. Use Amazon EC2 instances in an Auto Scaling group to send the recordings to Amazon Mechanical Turk for transcription. Use the number of objects in the queue as the scaling metric. Use Amazon S3, Amazon API Gateway, and AWS Lambda to host the review and scoring application.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#582",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A Solutions Architect is building a containerized .NET Core application that will run in AWS Fargate. The backend of the application requires Microsoft SQL Server with high availability. All tiers of the application must be highly available. The credentials used for the connection string to SQL Server should not be stored on disk within the .NET Core front-end containers.<br>Which strategies should the Solutions Architect use to meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#582",
          answers: [
            {
              choice:
                "<p>A.  Set up SQL Server to run in Fargate with Service Auto Scaling. Create an Amazon ECS task execution role that allows the Fargate task definition to get the secret value for the credentials to SQL Server running in Fargate. Specify the ARN of the secret in AWS Secrets Manager in the secrets section of the Fargate task definition so the sensitive data can be injected into the containers as environment variables on startup for reading into the application to construct the connection string. Set up the .NET Core service using Service Auto Scaling behind an Application Load Balancer in multiple Availability Zones.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a Multi-AZ deployment of SQL Server on Amazon RDS. Create a secret in AWS Secrets Manager for the credentials to the RDS database. Create an Amazon ECS task execution role that allows the Fargate task definition to get the secret value for the credentials to the RDS database in Secrets Manager. Specify the ARN of the secret in Secrets Manager in the secrets section of the Fargate task definition so the sensitive data can be injected into the containers as environment variables on startup for reading into the application to construct the connection string. Set up the .NET Core service in Fargate using Service Auto Scaling behind an Application Load Balancer in multiple Availability Zones.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an Auto Scaling group to run SQL Server on Amazon EC2. Create a secret in AWS Secrets Manager for the credentials to SQL Server running on EC2. Create an Amazon ECS task execution role that allows the Fargate task definition to get the secret value for the credentials to SQL Server on EC2. Specify the ARN of the secret in Secrets Manager in the secrets section of the Fargate task definition so the sensitive data can be injected into the containers as environment variables on startup for reading into the application to construct the connection string. Set up the .NET Core service using Service Auto Scaling behind an Application Load Balancer in multiple Availability Zones.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a Multi-AZ deployment of SQL Server on Amazon RDS. Create a secret in AWS Secrets Manager for the credentials to the RDS database. Create non- persistent empty storage for the .NET Core containers in the Fargate task definition to store the sensitive information. Create an Amazon ECS task execution role that allows the Fargate task definition to get the secret value for the credentials to the RDS database in Secrets Manager. Specify the ARN of the secret in Secrets Manager in the secrets section of the Fargate task definition so the sensitive data can be written to the non-persistent empty storage on startup for reading into the application to construct the connection string. Set up the .NET Core service using Service Auto Scaling behind an Application Load Balancer in multiple Availability Zones.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#583",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>An enterprise company wants to implement cost controls for all its accounts in AWS Organizations, which has full features enabled. The company has mapped organizational units (OUs) to its business units, and it wants to bill these business units for their individual AWS spending. There has been a recent spike in the company's AWS bill, which is generating attention from the Finance team. A Solutions Architect needs to investigate the cause of the spike while designing a solution that will track AWS costs in Organizations and generate a notification to the required teams if costs from a business unit exceed a specific monetary threshold.<br>Which solution will meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#583",
          answers: [
            {
              choice:
                "<p>A.  Use Cost Explorer to troubleshoot the reason for the additional costs. Set up an AWS Lambda function to monitor the company's AWS bill by each AWS account in an OU. Store the threshold amount set by the Finance team in the AWS Systems Manager Parameter Store. Write the custom rules in the Lambda function to verify any hidden costs for the AWS accounts. Trigger a notification from the Lambda function to an Amazon SNS topic when a budget threshold is breached.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS Trusted Advisor to troubleshoot the reason for the additional costs. Set up an AWS Lambda function to monitor the company's AWS bill by each AWS account in an OU. Store the threshold amount set by the Finance team in the AWS Systems Manager Parameter Store. Write custom rules in the Lambda function to verify any hidden costs for the AWS accounts. Trigger an email to the required teams from the Lambda function using Amazon SNS when a budget threshold is breached.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use Cost Explorer to troubleshoot the reason for the additional costs. Create a budget using AWS Budgets with the monetary amount set by the Finance team for each OU by grouping the linked accounts. Configure an Amazon SNS notification to the required teams in the budget.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use AWS Trusted Advisor to troubleshoot the reason for the additional costs. Create a budget using AWS Budgets with the monetary amount set by the Finance team for each OU by grouping the linked accounts. Add the Amazon EC2 instance types to be used in the company as a budget filter. Configure an Amazon SNS topic with a subscription for the Finance team email address to receive budget notifications.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#584",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is developing a new service that will be accessed using TCP on a static port. A solutions architect must ensure that the service is highly available, has redundancy across Availability Zones, and is accessible using the DNS name my.service.com, which is publicly accessible. The service must use fixed address assignments so other companies can add the addresses to their allow lists.<br>Assuming that resources are deployed in multiple Availability Zones in a single Region, which solution will meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#584",
          answers: [
            {
              choice:
                "<p>A.  Create Amazon EC2 instances with an Elastic IP address for each instance. Create a Network Load Balancer (NLB) and expose the static TCP port. Register EC2 instances with the NLB.  Create a new name server record set named my.service.com, and assign the Elastic IP addresses of the EC2 instances to the record set. Provide the Elastic IP addresses of the EC2 instances to the other companies to add to their allow lists.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an Amazon ECS cluster and a service definition for the application. Create and assign public IP addresses for the ECS cluster. Create a Network Load Balancer (NLB) and expose the TCP port. Create a target group and assign the ECS cluster name to the NLB.  Create a new A record set named my.service.com, and assign the public IP addresses of the ECS cluster to the record set. Provide the public IP addresses of the ECS cluster to the other companies to add to their allow lists.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create Amazon EC2 instances for the service. Create one Elastic IP address for each Availability Zone. Create a Network Load Balancer (NLB) and expose the assigned TCP port. Assign the Elastic IP addresses to the NLB for each Availability Zone. Create a target group and register the EC2 instances with the NLB.  Create a new A (alias) record set named my.service.com, and assign the NLB DNS name to the record set.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an Amazon ECS cluster and a service definition for the application. Create and assign public IP address for each host in the cluster. Create an Application Load Balancer (ALB) and expose the static TCP port. Create a target group and assign the ECS service definition name to the ALB.  Create a new CNAME record set and associate the public IP addresses to the record set. Provide the Elastic IP addresses of the Amazon EC2 instances to the other companies to add to their allow lists.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#585",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is running a web application with On-Demand Amazon EC2 instances in Auto Scaling groups that scale dynamically based on custom metrics. After extensive testing, the company determines that the m5.2xlarge instance size is optimal for the workload. Application data is stored in db.r4.4xlarge Amazon RDS instances that are confirmed to be optimal. The traffic to the web application spikes randomly during the day.<br>What other cost-optimization methods should the company implement to further reduce costs without impacting the reliability of the application?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#585",
          answers: [
            {
              choice:
                "<p>A.  Double the instance count in the Auto Scaling groups and reduce the instance size to m5.large.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Reserve capacity for the RDS database and the minimum number of EC2 instances that are constantly running.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Reduce the RDS instance size to db.r4.xlarge and add five equivalently sized read replicas to provide reliability.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Reserve capacity for all EC2 instances and leverage Spot Instance pricing for the RDS database.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#586",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>During an audit, a security team discovered that a development team was putting IAM user secret access keys in their code and then committing it to an AWS<br>CodeCommit repository. The security team wants to automatically find and remediate instances of this security vulnerability.<br>Which solution will ensure that the credentials are appropriately secured automatically?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: D</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#586",
          answers: [
            {
              choice:
                "<p>A.  Run a script nightly using AWS Systems Manager Run Command to search for credentials on the development instances. If found, use AWS Secrets Manager to rotate the credentials.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use a scheduled AWS Lambda function to download and scan the application code from CodeCommit. If credentials are found, generate new credentials and store them in AWS KMS.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Configure Amazon Macie to scan for credentials in CodeCommit repositories. If credentials are found, trigger an AWS Lambda function to disable the credentials and notify the user.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Configure a CodeCommit trigger to invoke an AWS Lambda function to scan new code submissions for credentials. If credentials are found, disable them in AWS IAM and notify the user.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#587",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is using AWS CodePipeline for the CI/CD of an application to an Amazon EC2 Auto Scaling group. All AWS resources are defined in AWS<br>CloudFormation templates. The application artifacts are stored in an Amazon S3 bucket and deployed to the Auto Scaling group using instance user data scripts.<br>As the application has become more complex, recent resource changes in the CloudFormation templates have caused unplanned downtime.<br>How should a solutions architect improve the CI/CD pipeline to reduce the likelihood that changes in the templates will cause downtime?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#587",
          answers: [
            {
              choice:
                "<p>A.  Adapt the deployment scripts to detect and report CloudFormation error conditions when performing deployments. Write test plans for a testing team to execute in a non-production environment before approving the change for production.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Implement automated testing using AWS CodeBuild in a test environment. Use CloudFormation change sets to evaluate changes before deployment. Use AWS CodeDeploy to leverage blue/green deployment patterns to allow evaluations and the ability to revert changes, if needed.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use plugins for the integrated development environment (IDE) to check the templates for errors, and use the AWS CLI to validate that the templates are correct. Adapt the deployment code to check for error conditions and generate notifications on errors. Deploy to a test environment and execute a manual test plan before approving the change for production.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use AWS CodeDeploy and a blue/green deployment pattern with CloudFormation to replace the user data deployment scripts. Have the operators log in to running instances and go through a manual test plan to verify the application is running as expected.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#588",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A financial services company is moving to AWS and wants to enable developers to experiment and innovate while preventing access to production applications.<br>The company has the following requirements:<br>✑ Production workloads cannot be directly connected to the internet.<br>✑ All workloads must be restricted to the us-west-2 and eu-central-1 Regions.<br>✑ Notification should be sent when developer sandboxes exceed $500 in AWS spending monthly.<br>Which combination of actions needs to be taken to create a multi-account structure that meets the company's requirements? (Choose three.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: ACF</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#588",
          answers: [
            {
              choice:
                "<p>A.  Create accounts for each production workload within an organization in AWS Organizations. Place the production accounts within an organizational unit (OU). For each account, delete the default VPC.  Create an SCP with a Deny rule for the attach an internet gateway and create a default VPC actions. Attach the SCP to the OU for the production accounts.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create accounts for each production workload within an organization in AWS Organizations. Place the production accounts within an organizational unit (OU). Create an SCP with a Deny rule on the attach an internet gateway action. Create an SCP with a Deny rule to prevent use of the default VPC.  Attach the SCPs to the OU for the production accounts.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a SCP containing a Deny Effect for cloudfront:*, iam:*, route53:*, and support:* with a StringNotEquals condition on an aws:RequestedRegion condition key with us-west-2 and eu-central-1 values. Attach the SCP to the organization's root.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an IAM permission boundary containing a Deny Effect for cloudfront:*, iam:*, route53:*, and support:* with a StringNotEquals condition on an aws:RequestedRegion condition key with us-west-2 and eu-central-1 values. Attach the permission boundary to an IAM group containing the development and production users.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Create accounts for each development workload within an organization in AWS Organizations. Place the development accounts within an organizational unit (OU). Create a custom AWS Config rule to deactivate all IAM users when an account's monthly bill exceeds $500.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Create accounts for each development workload within an organization in AWS Organizations. Place the development accounts within an organizational unit (OU). Create a budget within AWS Budgets for each development account to monitor and report on monthly spending exceeding $500.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#589",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is hosting a three-tier web application in an on-premises environment. Due to a recent surge in traffic that resulted in downtime and a significant financial impact, company management has ordered that the application be moved to AWS. The application is written in .NET and has a dependency on a MySQL database. A solutions architect must design a scalable and highly available solution to meet the demand of 200,000 daily users.<br>Which steps should the solutions architect take to design an appropriate solution?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#589",
          answers: [
            {
              choice:
                "<p>A.  Use AWS Elastic Beanstalk to create a new application with a web server environment and an Amazon RDS MySQL Multi-AZ DB instance. The environment should launch a Network Load Balancer (NLB) in front of an Amazon EC2 Auto Scaling group in multiple Availability Zones. Use an Amazon Route 53 alias record to route traffic from the company's domain to the NLB. </p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS CloudFormation to launch a stack containing an Application Load Balancer (ALB) in front of an Amazon EC2 Auto Scaling group spanning three Availability Zones. The stack should launch a Multi-AZ deployment of an Amazon Aurora MySQL DB cluster with a Retain deletion policy. Use an Amazon Route 53 alias record to route traffic from the company's domain to the ALB. </p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use AWS Elastic Beanstalk to create an automatically scaling web server environment that spans two separate Regions with an Application Load Balancer (ALB) in each Region. Create a Multi-AZ deployment of an Amazon Aurora MySQL DB cluster with a cross-Region read replica. Use Amazon Route 53 with a geoproximity routing policy to route traffic between the two Regions.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use AWS CloudFormation to launch a stack containing an Application Load Balancer (ALB) in front of an Amazon ECS cluster of Spot instances spanning three Availability Zones. The stack should launch an Amazon RDS MySQL DB instance with a Snapshot deletion policy. Use an Amazon Route 53 alias record to route traffic from the company's domain to the ALB. </p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#590",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A solutions architect is designing a publicly accessible web application that is on an Amazon CloudFront distribution with an Amazon S3 website endpoint as the origin. When the solution is deployed, the website returns an Error 403: Access Denied message.<br>Which steps should the solutions architect take to correct the issue? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: AB</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#590",
          answers: [
            {
              choice:
                "<p>A.  Remove the S3 block public access option from the S3 bucket.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Remove the requester pays option from the S3 bucket.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Remove the origin access identity (OAI) from the CloudFront distribution.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Change the storage class from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA).</p>",
              correct: false,
              feedback: "",
            },
            {
              choice: "<p>E.  Disable S3 object versioning.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#591",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A web application is hosted in a dedicated VPC that is connected to a company's on-premises data center over a Site-to-Site VPN connection. The application is accessible from the company network only. This is a temporary non-production application that is used during business hours. The workload is generally low with occasional surges.<br>The application has an Amazon Aurora MySQL provisioned database cluster on the backend. The VPC has an internet gateway and a NAT gateways attached.<br>The web servers are in private subnets in an Auto Scaling group behind an Elastic Load Balancer. The web servers also upload data to an Amazon S3 bucket through the internet.<br>A solutions architect needs to reduce operational costs and simplify the architecture.<br>Which strategy should the solutions architect use?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#591",
          answers: [
            {
              choice:
                "<p>A.  Review the Auto Scaling group settings and ensure the scheduled actions are specified to operate the Amazon EC2 instances during business hours only. Use 3-year scheduled Reserved Instances for the web server EC2 instances. Detach the internet gateway and remove the NAT gateways from the VPC.  Use an Aurora Serverless database and set up a VPC endpoint for the S3 bucket.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Review the Auto Scaling group settings and ensure the scheduled actions are specified to operate the Amazon EC2 instances during business hours only. Detach the internet gateway and remove the NAT gateways from the VPC.  Use an Aurora Serverless database and set up a VPC endpoint for the S3 bucket, then update the network routing and security rules and policies related to the changes.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Review the Auto Scaling group settings and ensure the scheduled actions are specified to operate the Amazon EC2 instances during business hours only. Detach the internet gateway from the VPC, and use an Aurora Serverless database. Set up a VPC endpoint for the S3 bucket, then update the network routing and security rules and policies related to the changes.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use 3-year scheduled Reserved Instances for the web server Amazon EC2 instances. Remove the NAT gateways from the VPC, and set up a VPC endpoint for the S3 bucket. Use Amazon CloudWatch and AWS Lambda to stop and start the Aurora DB cluster so it operates during business hours only. Update the network routing and security rules and policies related to the changes.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#592",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company plans to refactor a monolithic application into a modern application design deployed on AWS. The CI/CD pipeline needs to be upgraded to support the modern design for the application with the following requirements:<br>✑ It should allow changes to be released several times every hour.<br>✑ It should be able to roll back the changes as quickly as possible.<br>Which design will meet these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#592",
          answers: [
            {
              choice:
                "<p>A.  Deploy a CI/CD pipeline that incorporates AMIs to contain the application and their configurations. Deploy the application by replacing Amazon EC2 instances.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Specify AWS Elastic Beanstalk to stage in a secondary environment as the deployment target for the CI/CD pipeline of the application. To deploy, swap the staging and production environment URLs.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use AWS Systems Manager to re-provision the infrastructure for each deployment. Update the Amazon EC2 user data to pull the latest code artifact from Amazon S3 and use Amazon Route 53 weighted routing to point to the new environment.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Roll out the application updates as part of an Auto Scaling event using prebuilt AMIs. Use new versions of the AMIs to add instances, and phase out all instances that use the previous AMI version with the configured termination policy during a deployment event.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#593",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company currently has data hosted in an IBM Db2 database. A web application calls an API that runs stored procedures on the database to retrieve user information data that is read-only. This data is historical in nature and changes on a daily basis. When a user logs in to the application, this data needs to be retrieved within 3 seconds. Each time a user logs in, the stored procedures run. Users log in several times a day to check stock prices.<br>Running this database has become cost-prohibitive due to Db2 CPU licensing. Performance goals are not being met. Timeouts from Db2 are common due to long-running queries.<br>Which approach should a solutions architect take to migrate this solution to AWS?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: B</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#593",
          answers: [
            {
              choice:
                "<p>A.  Rehost the Db2 database in Amazon Fargate. Migrate all the data. Enable caching in Fargate. Refactor the API to use the Fargate Db2 database. Implement Amazon API Gateway and enable API caching.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Use AWS DMS to migrate data to Amazon DynamoDB using a continuous replication task. Refactor the API to use the DynamoDB data. Implement the refactored API in Amazon API Gateway and enable API caching.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create a local cache on the mainframe to store query outputs. Use SFTP to sync to Amazon S3 on a daily basis. Refactor the API to use Amazon EFS. Implement Amazon API Gateway and enable API caching.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Extract data daily and copy the data to AWS Snowball for storage on Amazon S3. Sync daily. Refactor the API to use the S3 data. Implement Amazon API Gateway and enable API caching.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#594",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is planning to deploy a new business analytics application that requires 10,000 hours of compute time each month. The compute resources can have flexible availability, but must be as cost-effective as possible. The company will also provide a reporting service to distribute analytics reports, which needs to run at all times.<br>How should the Solutions Architect design a solution that meets these requirements?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#594",
          answers: [
            {
              choice:
                "<p>A.  Deploy the reporting service on a Spot Fleet. Deploy the analytics application as a container in Amazon ECS with AWS Fargate as the compute option. Set the analytics application to use a custom metric with Service Auto Scaling.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Deploy the reporting service on an On-Demand Instance. Deploy the analytics application as a container in AWS Batch with AWS Fargate as the compute option. Set the analytics application to use a custom metric with Service Auto Scaling.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Deploy the reporting service as a container in Amazon ECS with AWS Fargate as the compute option. Deploy the analytics application on a Spot Fleet. Set the analytics application to use a custom metric with Amazon EC2 Auto Scaling applied to the Spot Fleet.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Deploy the reporting service as a container in Amazon ECS with AWS Fargate as the compute option. Deploy the analytics application on an On-Demand Instance and purchase a Reserved Instance with a 3-year term. Set the analytics application to use a custom metric with Amazon EC2 Auto Scaling applied to the On-Demand Instance.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#595",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is migrating its three-tier web application from on-premises to the AWS Cloud. The company has the following requirements for the migration process:<br>✑ Ingest machine images from the on-premises environment.<br>✑ Synchronize changes from the on-premises environment to the AWS environment until the production cutover.<br>✑ Minimize downtime when executing the production cutover.<br>✑ Migrate the virtual machines' root volumes and data volumes.<br>Which solution will satisfy these requirements with minimal operational overhead?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#595",
          answers: [
            {
              choice:
                "<p>A.  Use AWS Server Migration Service (SMS) to create and launch a replication job for each tier of the application. Launch instances from the AMIs created by AWS SMS. After initial testing, perform a final replication and create new instances from the updated AMIs.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an AWS CLI VM Import/Export script to migrate each virtual machine. Schedule the script to run incrementally to maintain changes in the application. Launch instances from the AMIs created by VM Import/Export. Once testing is done, rerun the script to do a final import and launch the instances from the AMIs.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Use AWS Server Migration Service (SMS) to upload the operating system volumes. Use the AWS CLI import-snapshot command for the data volumes. Launch instances from the AMIs created by AWS SMS and attach the data volumes to the instances. After initial testing, perform a final replication, launch new instances from the replicated AMIs, and attach the data volumes to the instances.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Use AWS Application Discovery Service and AWS Migration Hub to group the virtual machines as an application. Use the AWS CLI VM Import/Export script to import the virtual machines as AMIs. Schedule the script to run incrementally to maintain changes in the application. Launch instances from the AMIs. After initial testing, perform a final virtual machine import and launch new instances from the AMIs.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#596",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>An enterprise company's data science team wants to provide a safe, cost-effective way to provide easy access to Amazon SageMaker. The data scientists have limited AWS knowledge and need to be able to launch a Jupyter notebook instance. The notebook instance needs to have a preconfigured AWS KMS key to encrypt data at rest on the machine learning storage volume without exposing the complex setup requirements.<br>Which approach will allow the company to set up a self-service mechanism for the data scientists to launch Jupyter notebooks in its AWS accounts with the<br>LEAST amount of operational overhead?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: C</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#596",
          answers: [
            {
              choice:
                "<p>A.  Create a serverless front end using a static Amazon S3 website to allow the data scientists to request a Jupyter notebook instance by filling out a form. Use Amazon API Gateway to receive requests from the S3 website and trigger a central AWS Lambda function to make an API call to Amazon SageMaker that will launch a notebook instance with a preconfigured KMS key for the data scientists. Then call back to the front-end website to display the URL to the notebook instance.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create an AWS CloudFormation template to launch a Jupyter notebook instance using the AWS::SageMaker::NotebookInstance resource type with a preconfigured KMS key. Add a user-friendly name to the CloudFormation template. Display the URL to the notebook using the Outputs section. Distribute the CloudFormation template to the data scientists using a shared Amazon S3 bucket.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Create an AWS CloudFormation template to launch a Jupyter notebook instance using the AWS::SageMaker::NotebookInstance resource type with a preconfigured KMS key. Simplify the parameter names, such as the instance size, by mapping them to Small, Large, and X-Large using the Mappings section in CloudFormation. Display the URL to the notebook using the Outputs section, then upload the template into an AWS Service Catalog product in the data scientist's portfolio, and share it with the data scientist's IAM role.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create an AWS CLI script that the data scientists can run locally. Provide step-by-step instructions about the parameters to be provided while executing the AWS CLI script to launch a Jupyter notebook with a preconfigured KMS key. Distribute the CLI script to the data scientists using a shared Amazon S3 bucket.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#597",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company is migrating its applications to AWS. The applications will be deployed to AWS accounts owned by business units. The company has several teams of developers who are responsible for the development and maintenance of all applications. The company is expecting rapid growth in the number of users.<br>The company's chief technology officer has the following requirements:<br>✑ Developers must launch the AWS infrastructure using AWS CloudFormation.<br>Developers must not be able to create resources outside of CloudFormation.<br><img src='https://www.examtopics.com//assets/media/exam-media/04241/0039500002.png'><br>✑ The solution must be able to scale to hundreds of AWS accounts.<br>Which of the following would meet these requirements? (Choose two.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: AC</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#597",
          answers: [
            {
              choice:
                "<p>A.  Using CloudFormation, create an IAM role that can be assumed by CloudFormation that has permissions to create all the resources the company needs. Use CloudFormation StackSets to deploy this template to each AWS account.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  In a central account, create an IAM role that can be assumed by developers, and attach a policy that allows interaction with CloudFormation. Modify the AssumeRolePolicyDocument action to allow the IAM role to be passed to CloudFormation.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Using CloudFormation, create an IAM role that can be assumed by developers, and attach policies that allow interaction with and passing a role to CloudFormation. Attach an inline policy to deny access to all other AWS services. Use CloudFormation StackSets to deploy this template to each AWS account.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Using CloudFormation, create an IAM role for each developer, and attach policies that allow interaction with CloudFormation. Use CloudFormation StackSets to deploy this template to each AWS account.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  In a central AWS account, create an IAM role that can be assumed by CloudFormation that has permissions to create the resources the company requires. Create a CloudFormation stack policy that allows the IAM role to manage resources. Use CloudFormation StackSets to deploy the CloudFormation stack policy to each AWS account.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#598",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A media company has a static web application that is generated programmatically. The company has a build pipeline that generates HTML content that is uploaded to an Amazon S3 bucket served by Amazon CloudFront. The build pipeline runs inside a Build Account. The S3 bucket and CloudFront distribution are in a Distribution Account. The build pipeline uploads the files to Amazon S3 using an IAM role in the Build Account. The S3 bucket has a bucket policy that only allows CloudFront to read objects using an origin access identity (OAI). During testing all attempts to access the application using the CloudFront URL result in an<br>HTTP 403 Access Denied response.<br>What should a solutions architect suggest to the company to allow access the objects in Amazon S3 through CloudFront?<br><br><br></p>",
      mark: 1,
      is_partially_correct: false,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: A</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#598",
          answers: [
            {
              choice:
                "<p>A.  Modify the S3 upload process in the Build Account to add the bucket-owner-full-control ACL to the objects at upload.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Create a new cross-account IAM role in the Distribution Account with write access to the S3 bucket. Modify the build pipeline to assume this role to upload the files to the Distribution Account.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Modify the S3 upload process in the Build Account to set the object owner to the Distribution Account.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Create a new IAM role in the Distribution Account with read access to the S3 bucket. Configure CloudFront to use this new role as its OAI. Modify the build pipeline to assume this role when uploading files from the Build Account.</p>",
              correct: false,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
    {
      question_id: "#599",
      topic_id: 1,
      course_id: 1,
      case_study_id: null,
      lab_id: 0,
      question_text:
        "<p>A company has built a high performance computing (HPC) cluster in AWS for a tightly coupled workload that generates a large number of shared files stored in<br>Amazon EFS. The cluster was performing well when the number of Amazon EC2 instances in the cluster was 100. However, when the company increased the cluster size to 1,000 EC2 instances, overall performance was well below expectations.<br>Which collection of design choices should a solutions architect make to achieve the maximum performance from the HPC cluster? (Choose three.)<br><br><br></p>",
      mark: 1,
      is_partially_correct: true,
      question_type: "1",
      difficulty_level: "0",
      general_feedback: "<p>Correct Answer: ACF</p>",
      is_active: true,
      answer_list: [
        {
          question_answer_id: 1,
          question_id: "#599",
          answers: [
            {
              choice:
                "<p>A.  Ensure the HPC cluster is launched within a single Availability Zone.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>B.  Launch the EC2 instances and attach elastic network interfaces in multiples of four.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>C.  Select EC2 instance types with an Elastic Fabric Adapter (EFA) enabled.</p>",
              correct: true,
              feedback: "",
            },
            {
              choice:
                "<p>D.  Ensure the clusters is launched across multiple Availability Zones.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>E.  Replace Amazon EFS win multiple Amazon EBS volumes in a RAID array.</p>",
              correct: false,
              feedback: "",
            },
            {
              choice:
                "<p>F.  Replace Amazon EFS with Amazon FSx for Lustre.</p>",
              correct: true,
              feedback: "",
            },
          ],
        },
      ],
      topic_name: "XXX",
    },
  ],
};
