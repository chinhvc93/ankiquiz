var ExamTopic_401_430 = {
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#401",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A greeting card firm recently advertised that clients could use the company's platform to send cards to their favorite celebrities. Since the advertising was released, the site has consistently received traffic from 10,000 unique users every second.<br>The platform is powered by m5.xlarge. Behind an Application Load Balancer, Amazon EC2 instances (ALB). The instances are part of an Auto Scaling group and operate on an Amazon Linux-based custom AMI. The platform makes use of an Amazon Aurora MySQL DB cluster with highly accessible main and reader endpoints. Additionally, the platform makes use of an Amazon ElastiCache for Redis cluster, which is accessible through its cluster endpoint.<br>Each client is assigned a unique process, and the platform maintains open database connections to MySQL for the length of the customer's session. However, the platform consumes little resources.<br>Numerous clients are experiencing connection issues while attempting to connect to the platform. Connections to the Aurora database are failing, as seen by the logs. Amazon CloudWatch data indicate that the platform's CPU load is minimal and that connections to the platform are established successfully through the ALB.<br><br>Which option will most effectively correct the errors?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#401",
          "answers": [
            {
              "choice": "<p>Set up an Amazon CloudFront distribution. Set the ALB as the origin. Move all customer traffic to the CloudFront distribution endpoint.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon RDS Proxy. Reconfigure the database connections to use the proxy.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Increase the number of reader nodes in the Aurora MySQL cluster.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Increase the number of nodes in the ElastiCache for Redis cluster.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "#402",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An company has a virtual private cloud (VPC) for its human resources department and another for its administration department. HR needs access to all instances operating in the Admin VPC, while the Admin department requires access to all HR resources.<br><br>How may this situation be put up inside the organization?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#402",
          "answers": [
            {
              "choice": "<p>Setup VPC peering between the VPCs of Admin and HR.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Setup ACL with both VPCs which will allow traffic from the CIDR of the other VPC. </p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Setup the security group with each VPC which allows traffic from the CIDR of another VPC. </p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>It is not possible to connect resources of one VPC from another VPC. </p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "#403",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A firm based in the United States of America (US) purchased a business in Europe. Both businesses rely on the AWS Cloud. The firm in the United States has developed a new application using a microservices architecture. The US-based corporation hosts the application across five virtual private clouds (VPCs) in the us-east-2 Region. The application must have access to resources contained inside a single VPC in the eu-west-1 Region. The application, however, must be unable to access any other VPCs.<br><br>There are no overlapping CIDR ranges between the VPCs in any Region. In AWS Organizations, all accounts are already integrated into a single organization.<br><br>Which approach will be the most cost-effective in meeting these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#403",
          "answers": [
            {
              "choice": "<p>Create one transit gateway in eu-west-1. Attach the VPCs in us-east-2 and the VPC in eu-west-1 to the transit gateway. Create the necessary route entries in each VPC so that the traffic is routed through the transit gateway.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create one transit gateway in each Region. Attach the involved subnets to the regional transit gateway. Create the necessary route entries in the associated route tables for each subnet so that the traffic is routed through the regional transit gateway. Peer the two transit gateways.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a full mesh VPC peering connection configuration between all the VPCs. Create the necessary route entries in each VPC so that the traffic is routed through the VPC peering connection.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create one VPC peering connection for each VPC in us-east-2 to the VPC in eu-west-1. Create the necessary route entries in each VPC so that the traffic is routed through the VPC peering connection.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "#404",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Multiple business divisions comprise a huge global financial services corporation. The organization want to encourage developers to experiment with new services, but there are many compliance requirements for various workloads. The Security team is worried about the on-premises and AWS access strategies. They want to impose control on AWS services used by business teams to manage regulatory workloads, such as Payment Card Industry (PCI) compliance.<br><br>Which option will allay the Security team's fears while enabling Developers to experiment with new services?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#404",
          "answers": [
            {
              "choice": "<p>Implement a strong identity and access management model that includes users, groups, and roles in various AWS accounts. Ensure that centralized AWS CloudTrail logging is enabled to detect anomalies. Build automation with AWS Lambda to tear down unapproved AWS resources for governance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Build a multi-account strategy based on business units, environments, and specific regulatory requirements. Implement SAML-based federation across all AWS accounts with an on-premises identity store. Use AWS Organizations and build organizational units (OUs) structure based on regulations and service governance. Implement service control policies across OUs.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Implement a multi-account strategy based on business units, environments, and specific regulatory requirements. Ensure that only PCI-compliant services are approved for use in the accounts. Build IAM policies to give access to only PCI-compliant services for governance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Build one AWS account for the company for strong security controls. Ensure that all the service limits are raised to meet company scalability requirements. Implement SAML federation with an on-premises identity store, and ensure that only approved services are used in the account.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "#405",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A firm is using AWS CodePipeline to automate the continuous integration and delivery of an application to an Amazon EC2 Auto Scaling group. AWS CloudFormation templates specify all AWS resources. The application artifacts are saved in an Amazon S3 bucket and deployed utilizing instance user data scripts to the Auto Scaling group.<br>Due to the increased complexity of the application, recent resource modifications in the CloudFormation templates resulted in unintended downtime.<br><br>How could a solutions architect optimize the CI/CD pipeline to minimize the risk of downtime due to template changes?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#405",
          "answers": [
            {
              "choice": "<p>Adapt the deployment scripts to detect and report CloudFormation error conditions when performing deployments. Write test plans for a testing team to execute in a non-production environment before approving the change for production.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement automated testing using AWS CodeBuild in a test environment. Use CloudFormation change sets to evaluate changes before deployment. Use AWS CodeDeploy to leverage blue/green deployment patterns to allow evaluations and the ability to revert changes, if needed.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use plugins for the integrated development environment (IDE) to check the templates for errors, and use the AWS CLI to validate that the templates are correct. Adapt the deployment code to check for error conditions and generate notifications on errors. Deploy to a test environment and execute a manual test plan before approving the change for production.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS CodeDeploy and a blue/green deployment pattern with CloudFormation to replace the user data deployment scripts. Have the operators log in to running instances and go through a manual test plan to verify the application is running as expected.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "#406",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>On AWS, a business runs a serverless multi-tenant content management system. A web-based front end communicates with an Amazon API Gateway API using a bespoke AWS Lambda authorizer. The authorizer verifies a user's identity against its tenant ID and stores the information in a JSON Web Token (JWT) token. Following authentication, each API connection made via API Gateway is sent to a Lambda function that processes requests by interacting with a single Amazon DynamoDB database.<br><br>To meet security requirements, the corporation requires a greater degree of separation between renters. Within the first year, the firm will have hundreds of consumers.<br><br>Which method satisfies these criteria with the LEAST amount of operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#406",
          "answers": [
            {
              "choice": "<p>Create a DynamoDB table for each tenant by using the tenant ID in the table name. Create a service that uses the JWT token to retrieve the appropriate Lambda execution role that is tenant-specific. Attach IAM policies to the execution role to allow access only to the DynamoDB table for the tenant.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add tenant ID information to the partition key of the DynamoDB table. Create a service that uses the JWT token to retrieve the appropriate Lambda execution role that is tenant-specific. Attach IAM policies to the execution role to allow access to items in the table only when the key matches the tenant ID. </p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a separate AWS account for each tenant of the application. Use dedicated infrastructure for each tenant. Ensure that no cross-account network connectivity exists.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add tenant ID as a sort key in every DynamoDB table. Add logic to each Lambda function to use the tenant ID that comes from the JWT token as the sort key in every operation on the DynamoDB table.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "#407",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Is it feasible to put data into Amazon Redshift from Amazon DynamoDB?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#407",
          "answers": [
            {
              "choice": "<p>No, you cannot load all the data from DynamoDB table to a Redshift table as it limited by size constraints.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>No</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>No, DynamoDB data types do not correspond directly with those of Amazon Redshift.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Yes</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "#408",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Amazon Cognito by default retains the most recently written version of the data. You may programmatically alter this behavior and handle data discrepancies.<br>Additionally, push synchronization enables you to utilize Amazon Cognito to silently inform all devices connected with an identity when fresh data is available.<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#408",
          "answers": [
            {
              "choice": "<p>get</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>post</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>pull</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>push</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "#409",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retailer hosts a mission-critical online service on an Amazon Elastic Container Service (Amazon ECS) cluster that is comprised of Amazon EC2 instances. The web service accepts POST requests from end users and publishes data to a MySQL database running on its own EC2 server. The business must take precautions to avoid data loss.<br>Currently, the process of deploying code requires manual changes to the ECS service. End users reported sporadic 502 Bad Gateway failures in response to genuine web requests during a recent deployment.<br>The organization want to develop a dependable solution to avoid a recurrence of this situation. Additionally, the organization wishes to automate code deployments. The solution should be highly accessible and cost-effective.<br><br>Which combination of actions will satisfy these criteria? (Select three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#409",
          "answers": [
            {
              "choice": "<p>Run the web service on an ECS cluster that has a Fargate launch type. Use AWS CodePipeline and AWS CodeDeploy to perform a blue/green deployment with validation testing to update the ECS service.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the MySQL database to run on an Amazon RDS for MySQL Multi-AZ DB instance that uses Provisioned IOPS SSD (io2) storage.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon Simple Queue Service (Amazon SQS) queue as an event source to receive the POST requests from the web service. Configure an AWS Lambda function to poll the queue. Write the data to the database.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Run the web service on an ECS cluster that has a Fargate launch type. Use AWS CodePipeline and AWS CodeDeploy to perform a canary deployment to update the ECS service.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon Simple Queue Service (Amazon SQS) queue. Install the SQS agent on the containers that run in the ECS cluster to poll the queue. Write the data to the database.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the MySQL database to run on an Amazon RDS for MySQL Multi-AZ DB instance that uses General Purpose SSD (gp3) storage.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "#410",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A firm needs to guarantee that each of its business units' workloads on AWS have total autonomy and a small blast radius. The security team must be able to manage access to the account's resources and services in order to prevent certain services from being utilized by business units.<br><br>How can a Solutions Architect ensure that all criteria for isolation are met?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#410",
          "answers": [
            {
              "choice": "<p>Create individual accounts for each business unit and add the account to an OU in AWS Organizations. Modify the OU to ensure that the particular services are blocked. Federate each account with an IdP, and create separate roles for the business units and the Security team.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create individual accounts for each business unit. Federate each account with an IdP and create separate roles and policies for business units and the Security team.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create one shared account for the entire company. Create separate VPCs for each business unit. Create individual IAM policies and resource tags for each business unit. Federate each account with an IdP, and create separate roles for the business units and the Security team.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create one shared account for the entire company. Create individual IAM policies and resource tags for each business unit. Federate the account with an IdP, and create separate roles for the business units and the Security team.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "#411",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A Solutions Architect is tasked with the responsibility of developing a highly available infrastructure for a successful worldwide video game running on a mobile phone platform. The application is deployed on Amazon EC2 instances that are routed via an Application Load Balancer. The instances are distributed across several Availability Zones in an Auto Scaling group. Amazon RDS MySQL Multi-AZ instance serves as the database layer. In both us-east-1 and eu-central-1, the whole application stack is deployed. Using a latency-based routing strategy, Amazon Route 53 routes traffic to the two installations. In Route 53, a weighted routing policy is implemented as a failover to another region in the event that a region's installation becomes unresponsive.<br>After limiting access to the Amazon RDS MySQL instance in eu-central-1 from all application instances operating in that region during disaster recovery testing. Route 53 does not failover all traffic to us-east-1 automatically.<br><br>Which adjustments, in light of this circumstance, would enable the infrastructure to failover to us-east-1? (Select two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#411",
          "answers": [
            {
              "choice": "<p>Specify a weight of 100 for the record pointing to the primary Application Load Balancer in us-east-1 and a weight of 60 for the pointing to the primary Application Load Balancer in eu-central-1.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Specify a weight of 100 for the record pointing to the primary Application Load Balancer in us-east-1 and a weight of 0 for the record pointing to the primary Application Load Balancer in eu-central-1.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set the value of Evaluate Target Health to Yes on the latency alias resources for both eu-central-1 and us-east-1.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Write a URL in the application that performs a health check on the database layer. Add it as a health check within the weighted routing policy in both regions.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Disable any existing health checks for the resources in the policies and set a weight of 0 for the records pointing to primary in both eu-central-1 and us-east-1, and set a weight of 100 for the primary Application Load Balancer only in the region that has healthy resources.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "#412",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A business is transferring a portion of its application APIs from Amazon EC2 instances to a serverless environment. For the new application, the business has used Amazon API Gateway, AWS Lambda, and Amazon DynamoDB. The Lambda function's principal job is to get data from a third-party Software as a Service (SaaS) provider. The Lambda function is tied to the same virtual private cloud (VPC) as the original EC2 instances for consistency.<br>Test users report being unable to access the newly relocated feature, and the organization is getting API Gateway 5xx issues. The SaaS provider's monitoring records indicate that the queries never made it to its systems. The organization finds that the Lambda services are generating Amazon CloudWatch Logs. When the same functionality is tested on Amazon EC2 instances, it works correctly.<br><br>What is the source of the problem?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#412",
          "answers": [
            {
              "choice": "<p>Lambda is in a subnet that does not have a NAT gateway attached to it to connect to the SaaS provider.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>The end-user application is misconfigured to continue using the endpoint backed by EC2 instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The throttle limit set on API Gateway is too low and the requests are not making their way through.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>API Gateway does not have the necessary permissions to invoke Lambda.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "#413",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A business has over 100 AWS accounts, each with its own VPC, that need outbound HTTPS communication to the internet. Currently, each VPC has one NAT gateway per Availability Zone (AZ). To save expenses and get visibility into outward traffic, management has requested a new internet access architecture.<br><br>Which solution will satisfy existing requirements and expand when more accounts are provided, all while lowering costs?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#413",
          "answers": [
            {
              "choice": "<p>Create a transit VPC across two AZs using a third-party routing appliance. Create a VPN connection to each VPC.  Default route internet traffic to the transit VPC. </p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create multiple hosted-private AWS Direct Connect VIFs, one per account, each with a Direct Connect gateway. Default route internet traffic back to an on- premises router to route to the internet.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a central VPC for outbound internet traffic. Use VPC peering to default route to a set of redundant NAT gateway in the central VPC. </p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a proxy fleet in a central VPC account. Create an AWS PrivateLink endpoint service in the central VPC.  Use PrivateLink interface for internet connectivity through the proxy fleet.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "#414",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A business has many AWS accounts. A development team is now working on automating cloud governance and remediation procedures. The automation framework makes use of AWS Lambda services, which are managed centrally. A solutions architect must develop a policy allowing Lambda functions to execute in each of the company's AWS accounts with the least privilege possible.<br><br>Which combination of actions will satisfy these criteria? (Select two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#414",
          "answers": [
            {
              "choice": "<p>In the centralized account, create an IAM role that has the Lambda service as a trusted entity. Add an inline policy to assume the roles of the other AWS accounts.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>In the other AWS accounts, create an IAM role that has minimal permissions. Add the centralized account's Lambda IAM role as a trusted entity.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>In the centralized account, create an IAM role that has roles of the other accounts as trusted entities. Provide minimal permissions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>In the other AWS accounts, create an IAM role that has permissions to assume the role of the centralized account. Add the Lambda service as a trusted entity.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>In the other AWS accounts, create an IAM role that has minimal permissions. Add the Lambda service as a trusted entity.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "#415",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A business has adopted an event-driven architecture for its ordering system. The system ceased processing orders during first testing. Further log examination indicated that a single order message in an Amazon Simple Queue Service (Amazon SQS) standard queue was triggering a backend problem and preventing further order messages from being processed. The queue's visibility timeout is 30 seconds, while the backend processing timeout is 10 seconds. A solutions architect must assess erroneous order messages and guarantee that succeeding messages are processed by the system.<br><br>Which approach should the solutions architect employ in order to satisfy these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#415",
          "answers": [
            {
              "choice": "<p>Increase the backend processing timeout to 30 seconds to match the visibility timeout.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Reduce the visibility timeout of the queue to automatically remove the faulty message.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a new SQS FIFO queue as a dead-letter queue to isolate the faulty messages.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a new SQS standard queue as a dead-letter queue to isolate the faulty messages.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "#416",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An company is implementing a multi-site solution in which the application operates on-premises as well as on AWS in order to meet the target of the shortest recovery time possible (RTO).<br><br>Which of the following configurations does not match the criteria of the scenario involving a multi-site solution?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#416",
          "answers": [
            {
              "choice": "<p>Configure data replication based on RTO.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Keep an application running on premise as well as in AWS with full capacity.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Setup a single DB instance which will be accessed by both sites.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Setup a weighted DNS service like Route 53 to route traffic across sites.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "#417",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A business is transferring apps from its on-premises infrastructure to the AWS Cloud. These apps serve as the foundation for the company's internal web forms. These online forms gather data on certain occurrences on a quarterly basis. Simple SQL statements are used to save data to a local relational database using the web forms.<br>Each event generates data, and the on-premises servers remain idle for the majority of the time. The company's goal should be to reduce the quantity of idle infrastructure supporting online forms.<br><br>Which solution will satisfy these criteria?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#417",
          "answers": [
            {
              "choice": "<p>Use Amazon EC2 Image Builder to create AMIs for the legacy servers. Use the AMIs to provision EC2 instances to recreate the applications in the AWS Cloud. Place an Application Load Balancer (ALB) in front of the EC2 instances. Use Amazon Route 53 to point the DNS names of the web forms to the ALB. </p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create one Amazon DynamoDB table to store data for all the data input. Use the application form name as the table key to distinguish data items. Create an Amazon Kinesis data stream to receive the data input and store the input in DynamoDB.  Use Amazon Route 53 to point the DNS names of the web forms to the Kinesis data stream's endpoint.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create Docker images for each server of the legacy web form applications. Create an Amazon Elastic Container Service (Amazon EC2) cluster on AWS Fargate. Place an Application Load Balancer in front of the ECS cluster. Use Fargate task storage to store the web form data.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Provision an Amazon Aurora Serverless cluster. Build multiple schemas for each web form's data storage. Use Amazon API Gateway and an AWS Lambda function to recreate the data input forms. Use Amazon Route 53 to point the DNS names of the web forms to their corresponding API Gateway endpoint.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "#418",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>As a result, one of your AWS Data Pipeline operations failed and reached a hard failure state after three retries.<br>You want to attempt it once again.<br><br>Can the number of automated retries be increased to more than three?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#418",
          "answers": [
            {
              "choice": "<p>Yes, you can increase the number of automatic retries to 6.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Yes, you can increase the number of automatic retries to indefinite number.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>No, you cannot increase the number of automatic retries.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Yes, you can increase the number of automatic retries to 10.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "#419",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A business is arranging connection to a multi-account AWS environment in order to handle application workloads serving a single geographic region's users. The workloads are dependent on an on-premises legacy system that is highly available and distributed over two sites. Connectivity to the legacy system is important for the AWS workloads, and a minimum of 5 Gbps of bandwidth is needed. All AWS application workloads must be connected to one another.<br><br>Which solution will satisfy these criteria?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#419",
          "answers": [
            {
              "choice": "<p>Configure multiple AWS Direct Connect (DX) 10 Gbps dedicated connections from a DX partner for each on-premises location. Create private virtual interfaces on each connection for each AWS account VPC.  Associate the private virtual interface with a virtual private gateway attached to each VPC. </p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure multiple AWS Direct Connect (DX) 10 Gbps dedicated connections from two DX partners for each on-premises location. Create and attach a virtual private gateway for each AWS account VPC.  Create a DX gateway in a central network account and associate it with the virtual private gateways. Create a public virtual interface on each DX connection and associate the interface with the DX gateway.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure multiple AWS Direct Connect (DX) 10 Gbps dedicated connections from two DX partners for each on-premises location. Create a transit gateway and a DX gateway in a central network account. Create a transit virtual interface for each DX interface and associate them with the DX gateway. Create a gateway association between the DX gateway and the transit gateway.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure multiple AWS Direct Connect (DX) 10 Gbps dedicated connections from a DX partner for each on-premises location. Create and attach a virtual private gateway for each AWS account VPC.  Create a transit gateway in a central network account and associate it with the virtual private gateways. Create a transit virtual interface on each DX connection and attach the interface to the transit gateway.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "#420",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A Solutions Architect is tasked with the responsibility of migrating an existing on-premises web application that contains 70 TB of static files and is used to support a public open-data project. As part of the migration process, the Architect want to update to the newest version of the host operating system.<br><br>Which method of migration is the FASTEST and MOST cost-effective?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#420",
          "answers": [
            {
              "choice": "<p>Run a physical-to-virtual conversion on the application server. Transfer the server image over the internet, and transfer the static data to Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Run a physical-to-virtual conversion on the application server. Transfer the server image over AWS Direct Connect, and transfer the static data to Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Re-platform the server to Amazon EC2, and use AWS Snowball to transfer the static data to Amazon S3.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Re-platform the server by using the AWS Server Migration Service to move the code and data to a new Amazon EC2 instance.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "#421",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A firm intends to migrate regulated and security-sensitive operations to AWS. The Security team is establishing a framework to ensure that AWS best practices and industry-recognized compliance requirements are being followed. For teams, the AWS Management Console is the primary way of resource provisioning.<br><br>Which tactics should a Solutions Architect use to ensure that business needs are met and that the configurations of AWS resources are regularly assessed, audited, and monitored? (Select two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#421",
          "answers": [
            {
              "choice": "<p>Use AWS Config rules to periodically audit changes to AWS resources and monitor the compliance of the configuration. Develop AWS Config custom rules using AWS Lambda to establish a test-driven development approach, and further automate the evaluation of configuration changes against the required controls.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon CloudWatch Logs agent to collect all the AWS SDK logs. Search the log data using a pre-defined set of filter patterns that matches mutating API calls. Send notifications using Amazon CloudWatch alarms when unintended changes are performed. Archive log data by using a batch export to Amazon S3 and then Amazon Glacier for a long-term retention and auditability.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS CloudTrail events to assess management activities of all AWS accounts. Ensure that CloudTrail is enabled in all accounts and available AWS services. Enable trails, encrypt CloudTrail event log files with an AWS KMS key, and monitor recorded activities with CloudWatch Logs.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use the Amazon CloudWatch Events near-real-time capabilities to monitor system events patterns, and trigger AWS Lambda functions to automatically revert non-authorized changes in AWS resources. Also, target Amazon SNS topics to enable notifications and improve the response time of incident responses.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use CloudTrail integration with Amazon SNS to automatically notify unauthorized API activities. Ensure that CloudTrail is enabled in all accounts and available AWS services. Evaluate the usage of Lambda functions to automatically revert non-authorized changes in AWS resources.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "#422",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A business is building a new service that will be accessible through TCP on a fixed port. A solutions architect must guarantee that the service is highly available, redundant across Availability Zones, and reachable through the publicly accessible DNS name my.service.com. The service must use fixed address assignments in order for other businesses to add the addresses to their allow list.<br><br>Which solution will fulfill these criteria if resources are distributed across several Availability Zones within a single Region?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#422",
          "answers": [
            {
              "choice": "<p>Create Amazon EC2 instances with an Elastic IP address for each instance. Create a Network Load Balancer (NLB) and expose the static TCP port. Register EC2 instances with the NLB.  Create a new name server record set named my.service.com, and assign the Elastic IP addresses of the EC2 instances to the record set. Provide the Elastic IP addresses of the EC2 instances to the other companies to add to their allow lists.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon ECS cluster and a service definition for the application. Create and assign public IP addresses for the ECS cluster. Create a Network Load Balancer (NLB) and expose the TCP port. Create a target group and assign the ECS cluster name to the NLB.  Create a new A record set named my.service.com, and assign the public IP addresses of the ECS cluster to the record set. Provide the public IP addresses of the ECS cluster to the other companies to add to their allow lists.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create Amazon EC2 instances for the service. Create one Elastic IP address for each Availability Zone. Create a Network Load Balancer (NLB) and expose the assigned TCP port. Assign the Elastic IP addresses to the NLB for each Availability Zone. Create a target group and register the EC2 instances with the NLB.  Create a new A (alias) record set named my.service.com, and assign the NLB DNS name to the record set.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon ECS cluster and a service definition for the application. Create and assign public IP address for each host in the cluster. Create an Application Load Balancer (ALB) and expose the static TCP port. Create a target group and assign the ECS service definition name to the ALB.  Create a new CNAME record set and associate the public IP addresses to the record set. Provide the Elastic IP addresses of the Amazon EC2 instances to the other companies to add to their allow lists.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "#423",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A business must establish a centralized logging infrastructure for all of its Amazon Web Services accounts. The architecture should provide near-real-time data analysis across all AWS CloudTrail and VPC Flow logs. The organization intends to analyze logs in the logging account using Amazon Elasticsearch Service (Amazon ES).<br><br><br>Which method should a solutions architect use in order to satisfy these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#423",
          "answers": [
            {
              "choice": "<p>Configure CloudTrail and VPC Flow Logs in each AWS account to send data to a centralized Amazon S3 bucket in the logging account. Create and AWS Lambda function to load data from the S3 bucket to Amazon ES in the logging account.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure CloudTrail and VPC Flow Logs to send data to a log group in Amazon CloudWatch account. Configure a CloudWatch subscription filter in each AWS account to send data to Amazon Kinesis Data Firehouse in the logging account. Load data from Kinesis Data Firehouse into Amazon ES in the logging account.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure CloudTrail and VPC Flow Logs to send data to a separate Amazon S3 bucket in each AWS account. Create an AWS Lambda function triggered by S3 events to copy the data to a centralized logging bucket. Create another Lambda function to load data from the S3 bucket to Amazon ES in the logging account.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure CloudTrail and VPC Flow Logs to send data to a log group in Amazon CloudWatch Logs in each AWS account. Create AWS Lambda functions in each AWS accounts to subscribe to the log groups and stream the data to an Amazon S3 bucket in the logging account. Create another Lambda function to load data from the S3 bucket to Amazon ES in the logging account.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "#424",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect must assess a business's Amazon EC2 instances and Amazon Elastic Block Store (Amazon EBS) volumes to determine how effectively the business is using resources. The organization uses numerous big, high-memory Amazon EC2 instances to host database clusters in active/passive setups. The organization has not detected a pattern in how these EC2 instances are used by the apps that access the databases.<br>The solutions architect must conduct an analysis of the environment and take appropriate action depending on the results.<br><br>Which option best fits these criteria in terms of cost-effectiveness?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#424",
          "answers": [
            {
              "choice": "<p>Create a dashboard by using AWS Systems Manager OpsCenter. Configure visualizations for Amazon CloudWatch metrics that are associated with the EC2 instances and their EBS volumes. Review the dashboard periodically, and identify usage patterns. Rightsize the EC2 instances based on the peaks in the metrics.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Turn on Amazon CloudWatch detailed monitoring for the EC2 instances and their EBS volumes. Create and review a dashboard that is based on the metrics. Identify usage patterns. Rightsize the EC2 instances based on the peaks in the metrics.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Install the Amazon CloudWatch agent on each of the EC2 instances. Turn on AWS Compute Optimizer, and let it run for at least 12 hours. Review the recommendations from Compute Optimizer, and rightsize the EC2 instances as directed.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Sign up for the AWS Enterprise Support plan. Turn on AWS Trusted Advisor. Wait 12 hours. Review the recommendations from Trusted Advisor, and rightsize the EC2 instances as directed.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "#425",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>On-premises, a business runs a high-volume media-sharing program. It presently stores over 400 terabytes of data, including millions of video clips. The organization is transferring this application to AWS in order to increase the application's stability and save expenses.<br>The Solutions Architecture team intends to store the films in an Amazon S3 bucket and distribute them to customers using Amazon CloudFront. The organization needs to transition this application to AWS within ten days with minimal downtime. Currently, the firm has a 1 Gbps connection to the Internet, with 30% of available capacity.<br><br>Which of the following options would allow the organization to shift the workload to AWS while remaining compliant with all requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#425",
          "answers": [
            {
              "choice": "<p>Use a multi-part upload in Amazon S3 client to parallel-upload the data to the Amazon S3 bucket over the Internet. Use the throttling feature to ensure that the Amazon S3 client does not use more than 30 percent of available Internet capacity.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Request an AWS Snowmobile with 1 PB capacity to be delivered to the data center. Load the data into Snowmobile and send it back to have AWS download that data to the Amazon S3 bucket. Sync the new data that was generated while migration was in flight.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Amazon S3 client to transfer data from the data center to the Amazon S3 bucket over the Internet. Use the throttling feature to ensure the Amazon S3 client does not use more than 30 percent of available Internet capacity.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Request multiple AWS Snowball devices to be delivered to the data center. Load the data concurrently into these devices and send it back. Have AWS download that data to the Amazon S3 bucket. Sync the new data that was generated while migration was in flight.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "#426",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>On AWS, a business is developing a new highly accessible web application. The application needs constant and dependable communication between its AWS application servers and a backend REST API housed on-premises. The backend connection between AWS and on-premises will be handled over a private virtual interface using an AWS Direct Connect connection. Amazon Route 53 will be utilized to handle the application's private DNS records for resolving the IP address for the backend REST API.<br><br>Which architecture would be most likely to establish a secure connection to the backend API?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#426",
          "answers": [
            {
              "choice": "<p>Implement at least two backend endpoints for the backend REST API, and use Route 53 health checks to monitor the availability of each backend endpoint and perform DNS-level failover.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Install a second Direct Connect connection from a different network carrier and attach it to the same virtual private gateway as the first Direct Connect connection.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Install a second cross connect for the same Direct Connect connection from the same network carrier, and join both connections to the same link aggregation group (LAG) on the same private virtual interface.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IPSec VPN connection routed over the public internet from the on-premises data center to AWS and attach it to the same virtual private gateway as the Direct Connect connection.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "#427",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A business is distributing both static and dynamic content from a web application operating behind an Application Load Balancer through an Amazon CloudFront distribution. For dynamic content, the web application needs user authorisation and session monitoring. The CloudFront distribution is set with a single cache behavior that forwards the HTTP whitelist headers Authorization, Host, and User-Agent, as well as a session cookie, to the origin. All other cache behavior parameters are left alone.<br>A valid ACM certificate is deployed to the CloudFront distribution through the distribution settings, along with a corresponding CNAME. Additionally, the ACM certificate is applied to the Application Load Balancer's HTTPS listener. CloudFront's origin protocol policy is configured to use exclusively HTTPS. According to the cache statistics report, this distribution has an extremely high miss rate.<br><br>What can the Solutions Architect do to increase this distribution's cache hit rate without jeopardizing the SSL/TLS handshake between CloudFront and the Application Load Balancer?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#427",
          "answers": [
            {
              "choice": "<p>Create two cache behaviors for static and dynamic content. Remove the User-Agent and Host HTTP headers from the whitelist headers section on both of the cache behaviors. Remove the session cookie from the whitelist cookies section and the Authorization HTTP header from the whitelist headers section for cache behavior configured for static content.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Remove the User-Agent and Authorization HTTP headers from the whitelist headers section of the cache behavior. Then update the cache behavior to use presigned cookies for authorization.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Remove the Host HTTP header from the whitelist headers section and remove the session cookie from the whitelist cookies section for the default cache behavior. Enable automatic object compression and use Lambda@Edge viewer request events for user authorization.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create two cache behaviors for static and dynamic content. Remove the User-Agent HTTP header from the whitelist headers section on both of the cache behaviors. Remove the session cookie from the whitelist cookies section and the Authorization HTTP header from the whitelist headers section for cache behavior configured for static content.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "#428",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An online retailer runs its stateful web application and MySQL database on a single server in an on-premises data center. The corporation wishes to expand its consumer base via the use of additional marketing campaigns and promotions. The firm intends to transition its application and database to AWS in preparation, in order to boost the stability of its architecture.<br><br>Which option should be the most dependable?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#428",
          "answers": [
            {
              "choice": "<p>Migrate the database to an Amazon RDS MySQL Multi-AZ DB instance. Deploy the application in an Auto Scaling group on Amazon EC2 instances behind an Application Load Balancer Store sessions in Amazon Neptune.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the database to Amazon Aurora MySQL. Deploy the application in an Auto Scaling group on Amazon EC2 instances behind an Application Load Balancer. Store sessions in an Amazon ElastiCache for Redis replication group.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the database to Amazon DocumentDB (with MongoDB compatibility). Deploy the application in an Auto Scaling group on Amazon EC2 instances behind a Network Load Balancer. Store sessions in Amazon Kinesis Data Firehose.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the database to an Amazon RDS MariaDB Multi-AZ DB instance. Deploy the application in an Auto Scaling group on Amazon EC2 instances behind an Application Load Balancer. Store sessions in Amazon ElastiCache for Memcached.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "#429",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user has configured the IAM policy to deny any requests that do not originate from IP 10.10.10.1/32. The other regulation is that all requests must be made between 5 and 7 p.m.<br><br>What happens at 6 p.m. if a user requests access from IP 55.109.10.12/32?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#429",
          "answers": [
            {
              "choice": "<p>It will deny access</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>It is not possible to set a policy based on the time or IP</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>IAM will throw an error for policy conflict</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>It will allow access</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "#430",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A business operates an application that is spread over many Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer. All application access attempts must be made accessible for examination to the security team. The IP address of the client, the kind of connection, and the user agent must all be supplied.<br><br>Which solution will satisfy these criteria?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#430",
          "answers": [
            {
              "choice": "<p>Enable EC2 detailed monitoring, and include network logs. Send all logs through Amazon Kinesis Data Firehose to an Amazon Elasticsearch Service (Amazon ES) cluster that the security team uses for analysis.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable VPC Flow Logs for all EC2 instance network interfaces. Publish VPC Flow Logs to an Amazon S3 bucket. Have the security team use Amazon Athena to query and analyze the logs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable access logs for the Application Load Balancer, and publish the logs to an Amazon S3 bucket. Have the security team use Amazon Athena to query and analyze the logs.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Enable Traffic Mirroring and specify all EC2 instance network interfaces as the source. Send all traffic information through Amazon Kinesis Data Firehose to an Amazon Elasticsearch Service (Amazon ES) cluster that the security team uses for analysis.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    }
  ]
}