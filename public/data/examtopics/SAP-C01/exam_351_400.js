var ExamTopic_351_400 = {
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "351",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Currently, a firm establishes connections between an AWS Region and its data center using a single 1 Gbps AWS Direct Connect connection. The organization has five Amazon Virtual Private Cloud (VPC) instances, all of which are linked to the data center through a single Direct Connect connection. The Network team is concerned about single points of failure and is looking for ways to increase the redundancy of the connections to AWS while keeping prices low.<br><br>Which option would increase the redundancy of the AWS connection while remaining within the budget constraints?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "351",
          "answers": [
            {
              "choice": "<p>Provision another 1 Gbps Direct Connect connection and create new VIFs to each of the VPCs. Configure the VIFs in a load balancing fashion using BGP.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up VPN tunnels from the data center to each VPC.  Terminate each VPN tunnel at the virtual private gateway (VGW) of the respective VPC and set up BGP for route management.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Set up a new point-to-point Multiprotocol Label Switching (MPLS) connection to the AWS Region that's being used. Configure BGP to use this new circuit as passive, so that no traffic flows through this unless the AWS Direct Connect fails.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a public VIF on the Direct Connect connection and set up a VPN tunnel which will terminate on the virtual private gateway (VGW) of the respective VPC using the public VIF.  Use BGP to handle the failover to the VPN connection.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "352",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A huge corporation operates a well-known online application. The application is hosted on many Amazon EC2 Linux instances on a private subnet through an Auto Scaling group.<br>The instances in the Auto Scaling group on the private subnet are targeted by an Application Load Balancer. AWS Systems Manager Session Manager is setup, and all EC2 instances are running the AWS Systems Manager Agent.<br>The firm just updated the application. Certain Amazon EC2 instances are now being flagged as unhealthy and terminated. As a consequence, the application's capability is lowered. A solutions architect attempts to uncover the underlying cause by studying Amazon CloudWatch logs obtained from the application, however the logs provide inconclusive information.<br><br>How should the solutions architect have access to an Amazon EC2 instance in order to diagnose the problem?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "352",
          "answers": [
            {
              "choice": "<p>Suspend the Auto Scaling group's HealthCheck scaling process. Use Session Manager to log in to an instance that is marked as unhealthy.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable EC2 instance termination protection. Use Session Manager to log in to an instance that is marked as unhealthy.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set the termination policy to OldestInstance on the Auto Scaling group. Use Session Manager to log in to an instance that is marked an unhealthy.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Suspend the Auto Scaling group's Terminate process. Use Session Manager to log in to an instance that is marked as unhealthy.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "353",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's on-premises data center hosts a 24 TB MySQL database that grows at a pace of 10 GB per day. The data center is linked to the company's AWS infrastructure through a VPN connection at a speed of 50 Mbps.<br>The organization is in the process of transferring the application and associated workload to AWS. On Amazon EC2, the application code is already deployed and tested. The firm now requires database migration and wishes to go live on AWS within three weeks.<br><br>Which of the following techniques allows for the LEAST amount of downtime?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "353",
          "answers": [
            {
              "choice": "<p>1. Use the VM Import/Export service to import a snapshot of the on-premises database into AWS. 2. Launch a new EC2 instance from the snapshot. 3. Set up ongoing database replication from on premises to the EC2 database over the VPN. 4. Change the DNS entry to point to the EC2 database. 5. Stop the replication.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>1. Launch an AWS DMS instance. 2. Launch an Amazon RDS Aurora MySQL DB instance.3. Configure the AWS DMS instance with on-premises and Amazon RDS database information. 4. Start the replication task within AWS DMS over the VPN. 5. Change the DNS entry to point to the Amazon RDS MySQL database. 6. Stop the replication.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>1. Create a database export locally using database-native tools. 2. Import that into AWS using AWS Snowball. 3. Launch an Amazon RDS Aurora DB instance. 4. Load the data in the RDS Aurora DB instance from the export. 5. Set up database replication from the on-premises database to the RDS Aurora DB instance over the VPN. 6. Change the DNS entry to point to the RDS Aurora DB instance. 7. Stop the replication.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>1. Take the on-premises application offline. 2. Create a database export locally using database-native tools. 3. Import that into AWS using AWS Snowball. 4. Launch an Amazon RDS Aurora DB instance. 5. Load the data in the RDS Aurora DB instance from the export. 6. Change the DNS entry to point to the Amazon RDS Aurora DB instance. 7. Put the Amazon EC2 hosted application online.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "354",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A business intends to host its ecommerce platform on Amazon Web Services (AWS) utilizing a multi-tier web application optimized for NoSQL databases. The firm intends to base its operations in the us-west-2 Region. The organization want to guarantee that disaster recovery copies of the application and data are accessible in the second Region, us-west-1. The corporation wishes to limit the time required to fail over to a minimum. After the main service is restored, failing back to the primary Region should be available without administrative intervention.<br><br>Which design style should be used by the solutions architect?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "354",
          "answers": [
            {
              "choice": "<p>Use AWS CloudFormation StackSets to create the stacks in both Regions with Auto Scaling groups for the web and application tiers. Asynchronously replicate static content between Regions using Amazon S3 cross-Region replication. Use an Amazon Route 53 DNS failover routing policy to direct users to the secondary site in us-west-1 in the event of an outage. Use Amazon DynamoDB global tables for the database tier.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS CloudFormation StackSets to create the stacks in both Regions with Auto Scaling groups for the web and application tiers. Asynchronously replicate static content between Regions using Amazon S3 cross-Region replication. Use an Amazon Route 53 DNS failover routing policy to direct users to the secondary site in us-west-1 in the event of an outage Deploy an Amazon Aurora global database for the database tier.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Service Catalog to deploy the web and application servers in both Regions Asynchronously replicate static content between the two Regions using Amazon S3 cross-Region replication. Use Amazon Route 53 health checks to identify a primary Region failure and update the public DNS entry listing to the secondary Region in the event of an outage. Use Amazon RDS for MySQL with cross-Region replication for the database tier.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS CloudFormation StackSets to create the stacks in both Regions using Auto Scaling groups for the web and application tiers. Asynchronously replicate static content between Regions using Amazon S3 cross-Region replication. Use Amazon CloudFront with static files in Amazon S3, and multi-Region origins for the front-end web tier. Use Amazon DynamoDB tables in each Region with scheduled backups to Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "355",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An business wishes to host both a Wordpress blog and a Joomla content management system on a single VPC-launched instance. The business want to have distinct domains for each application, which will be assigned using Route 53. As noted before, the company may have around 10 instances, each with two apps.<br>When the instance was launched, the organization established two distinct network interfaces (main + ENI) and desired two elastic IP addresses for the instance. It was advised to utilize a public IP from AWS rather than an elastic IP due to the limited amount of elastic IPs.<br><br>Which course of action would you suggest to the organization?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "355",
          "answers": [
            {
              "choice": "<p>I agree with the suggestion but will prefer that the organization should use separate subnets with each ENI for different public IPs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>I do not agree as it is required to have only an elastic IP since an instance has more than one ENI and AWS does not assign a public IP to an instance with multiple ENIs.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>I do not agree as AWS VPC does not attach a public IP to an ENI; so the user has to use only an elastic IP only.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>I agree with the suggestion and it is recommended to use a public IP from AWS since the organization is going to use DNS with Route 53.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "356",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A firm manages a constellation of imaging satellites. The satellites transmit data to one of the company's ground stations, which processes around 5 GB of data each minute. This data is added to the existing 2 PB of network-attached storage.<br>The firm maintains a website via which users may view and buy the photographs. Additionally, this webpage is accessible from the ground station.<br>According on use research, clients are more likely to retrieve photographs recorded during the recent 24 hours.<br>The firm wishes to transition its image storage and distribution system to AWS in order to decrease expenses and expand its client base.<br><br>Which Amazon Web Services architecture and migration method will satisfy these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "356",
          "answers": [
            {
              "choice": "<p>Use multiple AWS Snowball appliances to migrate the existing imagery to Amazon S3. Create a 1-Gb AWS Direct Connect connection from the ground station to AWS, and upload new data to Amazon S3 through the Direct Connect connection. Migrate the data distribution website to Amazon EC2 instances. By using Amazon S3 as an origin, have this website serve the data through Amazon CloudFront by creating signed URLs.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a 1-Gb Direct Connect connection from the ground station to AWS. Use the AWS Command Line Interface to copy the existing data and upload new data to Amazon S3 over the Direct Connect connection. Migrate the data distribution website to EC2 instances. By using Amazon S3 as an origin, have this website serve the data through CloudFront by creating signed URLs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use multiple Snowball appliances to migrate the existing images to Amazon S3. Upload new data by regularly using Snowball appliances to upload data from the network-attached storage. Migrate the data distribution website to EC2 instances. By using Amazon S3 as an origin, have this website serve the data through CloudFront by creating signed URLs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use multiple Snowball appliances to migrate the existing images to an Amazon EFS file system. Create a 1-Gb Direct Connect connection from the ground station to AWS, and upload new data by mounting the EFS file system over the Direct Connect connection. Migrate the data distribution website to EC2 instances. By using webservers in EC2 that mount the EFS file system as the origin, have this website serve the data through CloudFront by creating signed URLs.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "357",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A multinational corporation saw a significant rise in its monthly AWS spending. This is because developers deployed Amazon EC2 instances in unexpected regions by mistake. The organization has created processes around least privilege for developers and uses Active Directory groups to manage access to on-premises resources. The organization now wishes to save expenses by limiting Developers' access to the AWS Management Console without impairing their productivity. Additionally, the firm want to enable Developers to establish Amazon EC2 in a single location without restricting access to other services in any region.<br><br>How can this organization meet these increased security criteria while keeping the Operations team's administrative load to a minimum?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "357",
          "answers": [
            {
              "choice": "<p>Set up SAML-based authentication tied to an IAM role that has an AdministrativeAccess managed policy attached to it. Attach a customer managed policy that denies access to Amazon EC2 in each region except for the one required.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM user for each Developer and add them to the developer IAM group that has the PowerUserAccess managed policy attached to it. Attach a customer managed policy that allows the Developers access to Amazon EC2 only in the required region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up SAML-based authentication tied to an IAM role that has a PowerUserAccess managed policy and a customer managed policy that deny all the Developers access to any AWS services except AWS Service Catalog. Within AWS Service Catalog, create a product containing only the EC2 resources in the approved region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up SAML-based authentication tied to an IAM role that has the PowerUserAccess managed policy attached to it. Attach a customer managed policy that denies access to Amazon EC2 in each region except for the one required.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "358",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>With EC2, a user has established a dedicated EBS-backed instance. You're wondering about the location of the EBS volume for this instance.<br><br>Which statement concerning the formation of the EBS volume is correct?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "358",
          "answers": [
            {
              "choice": "<p>The EBS volume will not be created on the same tenant hardware assigned to the dedicated instance</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>AWS does not allow a dedicated EBS backed instance launch</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The EBS volume will be created on the same tenant hardware assigned to the dedicated instance</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The user can specify where the EBS will be created</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "359",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A firm that is an AWS partner is developing a service in AWS Organizations utilizing the organization org1. This service requires that the partner business<br> access to Amazon Web Services resources via a customer account that is part of a distinct organization called org2. The business must create security access with the fewest possible privileges.<br> accessing the client account using an API or command line tool.<br><br>What is the SECUREST method for org1 to get access to resources in org2?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "359",
          "answers": [
            {
              "choice": "<p>The customer should provide the partner company with their AWS account access keys to log in and perform the required tasks.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The customer should create an IAM user and assign the required permissions to the IAM user. The customer should then provide the credentials to the partner company to log in and perform the required tasks.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The customer should create an IAM role and assign the required permissions to the IAM role. The partner company should then use the IAM role's Amazon Resource Name (ARN) when requesting access to perform the required tasks.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The customer should create an IAM role and assign the required permissions to the IAM role. The partner company should then use the IAM role's Amazon Resource Name (ARN), including the external ID in the IAM role's trust policy, when requesting access to perform the required tasks.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "360",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A business is deploying an application on AWS with the goal of ensuring both high availability (HA) and disaster recovery (DR). The company desires both a 10 minute Recovery point goal (RPO) and a 10 minute Recovery time target (RTO).<br><br>Which of the following service configurations does not assist the company in meeting the above-mentioned RPO and RTO?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "360",
          "answers": [
            {
              "choice": "<p>Take a snapshot of the data every 10 minutes and copy it to the other region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an elastic IP to assign to a running instance and use Route 53 to map the user's domain with that IP.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create ELB with multi-region routing to allow automated failover when required.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use an AMI copy to keep the AMI available in other regions.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "361",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A business has a complicated online application that makes use of Amazon CloudFront to scale globally and function well. Users have reported that the web application has slowed down over time.<br>According to the company's operations staff, the CloudFront cache hit ratio has been rapidly decreasing. According to the cache metrics report, query strings for certain URLs are inconsistently ordered and are supplied in mixed-case and lowercase characters at times.<br><br>Which set of measures should the solutions architect perform in order to maximize the cache hit ratio?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "361",
          "answers": [
            {
              "choice": "<p>Deploy a Lambda@Edge function to sort parameters by name and force them to be lowercase. Select the CloudFront viewer request trigger to invoke the function.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Update the CloudFront distribution to disable caching based on query string parameters.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy a reverse proxy after the load balancer to post process the emitted URLs in the application to force the URL strings to be lowercase.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Update the CloudFront distribution to specify case-insensitive query string processing.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "362",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail organization is using Amazon Web Services to run an ecommerce website across different AWS Regions. The corporation wants the website to remain available for online purchases at all times. Data is stored on the website on an Amazon RDS for MySQL database instance.<br><br>Which option will give the HIGHEST level of database availability?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "362",
          "answers": [
            {
              "choice": "<p>Configure automated backups on Amazon RDS. In the case of disruption, promote an automated backup to be a standalone DB instance. Direct database traffic to the promoted DB instance. Create a replacement read replica that has the promoted DB instance as its source.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure global tables and read replicas on Amazon RDS. Activate the cross-Region scope. In the case of disruption, use AWS Lambda to copy the read replicas from one Region to another Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure global tables and automated backups on Amazon RDS. In the case of disruption, use AWS Lambda to copy the read replicas from one Region to another Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure read replicas on Amazon RDS. In the case of disruption, promote a cross-Region and read replica to be a standalone DB instance. Direct database traffic to the promoted DB instance. Create a replacement read replica that has the promoted DB instance as its source.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "363",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A web firm want to integrate an external payment service into their highly accessible application that is installed on a virtual private cloud (VPC). Their EC2 instances for their application are hidden behind a public-facing ELB. Under typical load conditions, auto scaling is employed to deploy new instances. The application runs two instances in the Auto Scaling group, but may scale up to three times its size at its maximum. The application instances must interact with the payment service through the Internet, which necessitates whitelisting any public IP addresses needed to connect to the payment service. At any one moment, a maximum of four whitelisting IP addresses may be added using an API.<br><br>What approach should they use while architecting their solution?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "363",
          "answers": [
            {
              "choice": "<p>Route payment requests through two NAT instances setup for High Availability and whitelist the Elastic IP addresses attached to the MAT instances.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Whitelist the VPC Internet Gateway Public IP and route payment requests through the Internet Gateway.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Whitelist the ELB IP addresses and route payment requests from the Application servers through the ELB. </p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Automatically assign public IP addresses to the application instances in the Auto Scaling group and run a script on boot that adds each instances public IP address to the payment validation whitelist API.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "364",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your business maintains a social media website for document storage and sharing. The online application enables users to upload big files while stopping and restarting the upload process as necessary. At the moment, files are uploaded to your PHP front end using Elastic Load Balancing and an autoscaling fleet of Amazon Elastic Compute Cloud (EC2) instances that scale based on the average amount of data received (NetworkIn). Following the upload of a file, it is transferred to Amazon Simple Storage Service (S3).<br><br>Amazon EC2 instances are enabled for Amazon S3 uploads using an AWS Identity and Access Management (IAM) role. Your user base and<br><br>scale have risen dramatically, prompting you to adjust the Max parameter for the Auto Scaling group many times. Your CFO is worried about growing expenses and has taken measures to mitigate them.<br><br>requested that you make necessary adjustments to the architecture in order to minimize expenses.<br><br>Which architectural changes might you make to minimize expenses while maintaining the security and scalability of your online application?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "364",
          "answers": [
            {
              "choice": "<p>Replace the Auto Scaling launch configuration to include c3.8xlarge instances; those instances can potentially yield a network throuthput of 10gbps.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Re-architect your ingest pattern, have the app authenticate against your identity provider, and use your identity provider as a broker fetching temporary AWS credentials from AWS Secure Token Service (GetFederationToken). Securely pass the credentials and S3 endpoint/prefix to your app. Implement client-side logic to directly upload the file to Amazon S3 using the given credentials and S3 prefix.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Re-architect your ingest pattern, and move your web application instances into a VPC public subnet. Attach a public IP address for each EC2 instance (using the Auto Scaling launch configuration settings). Use Amazon Route 53 Round Robin records set and HTTP health check to DNS load balance the app requests; this approach will significantly reduce the cost by bypassing Elastic Load Balancing.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Re-architect your ingest pattern, have the app authenticate against your identity provider, and use your identity provider as a broker fetching temporary AWS credentials from AWS Secure Token Service (GetFederationToken). Securely pass the credentials and S3 endpoint/prefix to your app. Implement client-side logic that used the S3 multipart upload API to directly upload the file to Amazon S3 using the given credentials and S3 prefix.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "365",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A workload is being handled on AWS by an online e-commerce firm. A web layer, an application tier for business logic, and a database tier for user and transactional data management comprise the application architecture. The database server requires 100 GB of RAM. The firm demands cost-effective catastrophe recovery for the application with a recovery time objective (RTO) of 5 minutes and a recovery point objective (RPO) of 1 hour. Additionally, the firm has a statutory need for out-of-region catastrophe recovery, requiring a minimum distance of 250 miles between the main and alternative locations.<br><br>Which of the following choices can the Solutions Architect build in order to provide this client with a complete solution that satisfies disaster recovery requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "365",
          "answers": [
            {
              "choice": "<p>Back up the application and database data frequently and copy them to Amazon S3. Replicate the backups using S3 cross-region replication, and use AWS CloudFormation to instantiate infrastructure for disaster recovery and restore data from Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Employ a pilot light environment in which the primary database is configured with mirroring to build a standby database on m4.large in the alternate region. Use AWS CloudFormation to instantiate the web servers, application servers and load balancers in case of a disaster to bring the application up in the alternate region. Vertically resize the database to meet the full production demands, and use Amazon Route 53 to switch traffic to the alternate region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use a scaled-down version of the fully functional production environment in the alternate region that includes one instance of the web server, one instance of the application server, and a replicated instance of the database server in standby mode. Place the web and the application tiers in an Auto Scaling behind a load balancer, which can automatically scale when the load arrives to the application. Use Amazon Route 53 to switch traffic to the alternate region.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Employ a multi-region solution with fully functional web, application, and database tiers in both regions with equivalent capacity. Activate the primary database in one region only and the standby database in the other region. Use Amazon Route 53 to automatically switch traffic from one region to another using health check routing policies.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "366",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A business employs Amazon API Gateway, AWS Lambda, and Amazon DynamoDB to power a web application. Demand has surged as a result of a recent marketing push.<br>According to monitoring software, many queries now have much longer response times than they had before to the marketing effort.<br>A solutions architect installed Amazon CloudWatch Logs for API Gateway and discovered that 20% of requests encounter problems. The Lambda function Throttles statistic in CloudWatch represents 1% of all requests, whereas the Errors meter represents 10% of all requests. The application logs reveal that when an error occurs, a request to DynamoDB is made.<br><br>What changes should the solutions architect do to enhance the web application's existing response times as it grows in popularity?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "366",
          "answers": [
            {
              "choice": "<p>Increase the concurrency limit of the Lambda function</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement DynamoDB auto scaling on the table</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Increase the API Gateway throttle limit</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Re-create the DynamoDB table with a better-partitioned primary index</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "367",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A business has chosen to migrate certain workloads to AWS in order to build a grid environment for doing market analytics. The grid will be composed of several identical instances generated by a work scheduling mechanism. Each time a big analytics task is done, a new VPC, job scheduler, and grid nodes are deployed. Multiple grids might be operating concurrently.<br>The following are critical requirements:<br>✑&nbsp;Grid instances must interface with Amazon S3 in order to obtain processed data.<br>✑ To monitor intermediate data, grid instances must interface with Amazon DynamoDB.<br>✑ To launch new grid nodes, the task scheduler merely has to connect with the Amazon EC2 API.<br>A critical criterion is that the environment has no direct or indirect connection to the internet. The application, on the other hand, must be able to connect easily with Amazon S3, Amazon DynamoDB, and the Amazon EC2 API, without requiring reconfiguration for each new deployment.<br><br>Which of the following should the Solutions Architect perform in order to accomplish this goal? (Select three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AEF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "367",
          "answers": [
            {
              "choice": "<p>Enable VPC endpoints for Amazon S3 and DynamoDB. </p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Disable Private DNS Name Support.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the application on the grid instances to use the private DNS name of the Amazon S3 endpoint.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Populate the on-premises DNS server with the private IP addresses of the EC2 endpoint.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable an interface VPC endpoint for EC2.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon S3 endpoint policy to permit access only from the grid nodes.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "368",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A firm is in the design phase of an application that will need a response time of fewer than five minutes and a response time of less than ten minutes. According to the solutions architecture team, the database will hold around 10 TB of data. They are searching for a database solution that will enable the organization to fail over to a secondary Region as part of the architecture.<br><br>Which solution satisfies these business needs at the LOWEST possible price?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "368",
          "answers": [
            {
              "choice": "<p>Deploy an Amazon Aurora DB cluster and take snapshots of the cluster every 5 minutes. Once a snapshot is complete, copy the snapshot to a secondary Region to serve as a backup in the event of a failure.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an Amazon RDS instance with a cross-Region read replica in a secondary Region. In the event of a failure, promote the read replica to become the primary.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an Amazon Aurora DB cluster in the primary Region and another in a secondary Region. Use AWS DMS to keep the secondary Region in sync.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an Amazon RDS instance with a read replica in the same Region. In the event of a failure, promote the read replica to become the primary.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "369",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A business operates a dynamic mission-critical online application with a 99.99 percent service level agreement. The application is accessible to users worldwide 24 hours a day. The program is presently hosted on-premises and often fails to achieve its service level agreement (SLA), particularly when millions of users use it simultaneously. Remote users often complain about latency.<br><br>How can this application be modified to be more scalable and to enable automated failover at the lowest possible cost?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "369",
          "answers": [
            {
              "choice": "<p>Use Amazon Route 53 failover routing with geolocation-based routing. Host the website on automatically scaled Amazon EC2 instances behind an Application Load Balancer with an additional Application Load Balancer and EC2 instances for the application layer in each region. Use a Multi-AZ deployment with MySQL as the data layer.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Route 53 round robin routing to distribute the load evenly to several regions with health checks. Host the website on automatically scaled Amazon ECS with AWS Fargate technology containers behind a Network Load Balancer, with an additional Network Load Balancer and Fargate containers for the application layer in each region. Use Amazon Aurora replicas for the data layer.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Route 53 latency-based routing to route to the nearest region with health checks. Host the website in Amazon S3 in each region and use Amazon API Gateway with AWS Lambda for the application layer. Use Amazon DynamoDB global tables as the data layer with Amazon DynamoDB Accelerator (DAX) for caching.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Route 53 geolocation-based routing. Host the website on automatically scaled AWS Fargate containers behind a Network Load Balancer with an additional Network Load Balancer and Fargate containers for the application layer in each region. Use Amazon Aurora Multi-Master for Aurora MySQL as the data layer.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "370",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is developing a solution to link an organization's on-premises network to all of the organization's present and future AWS VPCs. The organization operates VPCs in five distinct AWS Regions and maintains a minimum of 15 VPCs in each Region.<br>The company's AWS utilization is growing at a rapid pace and will continue to do so. Additionally, all VPCs must be able to interact with one another across all five Regions.<br>The solution's scalability and manageability must be maximized.<br><br>Which solution satisfies these criteria?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "370",
          "answers": [
            {
              "choice": "<p>Set up a transit gateway in each Region. Establish a redundant AWS Site-to-Site VPN connection between the on-premises firewalls and the transit gateway in the Region that is closest to the on-premises network. Peer all the transit gateways with each other. Connect all the VPCs to the transit gateway in their Region.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS CloudFormation template for a redundant AWS Site-to-Site VPN tunnel to the on-premises network. Deploy the CloudFormation template for each VPC.  Set up VPC peering between all the VPCs for VPC-to-VPC communication.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up a transit gateway in each Region. Establish a redundant AWS Site-to-Site VPN connection between the on-premises firewalls and each transit gateway. Route traffic between the different Regions through the company's on-premises firewalls. Connect all the VPCs to the transit gateway in their Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS CloudFormation template for a redundant AWS Site-to-Site VPN tunnel to the on-premises network. Deploy the CloudFormation template for each VPC.  Route traffic between the different Regions through the company's on-premises firewalls.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "371",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A business intends to install a new private intranet service using Amazon EC2 instances inside a Virtual Private Cloud (VPC). The VPC is connected to the company's on-premises network using an AWS Site-to-Site VPN. The new service must communicate with the on-premises services that are already in place. On-premises services are accessed using company-owned hostnames. for instance, a DNS zone. This DNS zone is entirely on-premises and accessible only via the company's private network.<br><br>To connect the new service with current services, a solutions architect must guarantee that the new service can resolve hostnames on the company's example domain.<br><br>Which solution satisfies these criteria?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "371",
          "answers": [
            {
              "choice": "<p>Create an empty private zone in Amazon Route 53 for company example. Add an additional NS record to the company's on-premises company.example zone that points to the authoritative name servers for the new private zone in Route 53.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Turn on DNS hostnames for the VPC.  Configure a new outbound endpoint with Amazon Route 53 Resolver. Create a Resolver rule to forward requests for company.example to the on-premises name servers.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Turn on DNS hostnames for the VPC.  Configure a new inbound resolver endpoint with Amazon Route 53 Resolver. Configure the on-premises DNS server to forward requests for company.example to the new resolver.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Systems Manager to configure a run document that will install a hosts file that contains any required hostnames. Use an Amazon EventBridge (Amazon CloudWatch Events) rule to run the document when an instance is entering the running state.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "372",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A business runs over 200 distinct internet-facing web apps. All apps are deployed to Amazon Web Services in a single AWS Region. All apps' fully qualified domain names (FQDNs) are made accessible through HTTPS using Application Load Balancers (ALBs). SSL/TLS certificates for public usage are setup on the ALBs.<br>A Solutions Architect is tasked with the responsibility of migrating online applications to a multi-region architecture. All HTTPS services should continue to operate normally.<br><br>Which technique satisfies these criteria?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "372",
          "answers": [
            {
              "choice": "<p>Request a certificate for each FQDN using AWS KMS. Associate the certificates with the ALBs in the primary AWS Region. Enable cross-region availability in AWS KMS for the certificates and associate the certificates with the ALBs in the secondary AWS Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Generate the key pairs and certificate requests for each FQDN using AWS KMS. Associate the certificates with the ALBs in both the primary and secondary AWS Regions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Request a certificate for each FQDN using AWS Certificate Manager. Associate the certificates with the ALBs in both the primary and secondary AWS Regions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Request certificates for each FQDN in both the primary and secondary AWS Regions using AWS Certificate Manager. Associate the certificates with the corresponding ALBs in each AWS Region.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "373",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Determine the truthfulness of a statement ID (Sid) in IAM.<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "373",
          "answers": [
            {
              "choice": "<p>You cannot expose the Sid in the IAM API.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>You cannot use a Sid value as a sub-ID for a policy document's ID for services provided by SQS and SNS.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>You can expose the Sid in the IAM API.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>You cannot assign a Sid value to each statement in a statement array.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "374",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A Solutions Architect is tasked with the responsibility of designing a highly available, stateless REST service. The service will need numerous persistent storage layers to store meta information about service objects and to provide content. Each request must be verified and handled securely. Costs must be kept as low as feasible.<br><br>How are these stipulations to be met?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "374",
          "answers": [
            {
              "choice": "<p>Use AWS Fargate to host a container that runs a self-contained REST service. Set up an Amazon ECS service that is fronted by an Application Load Balancer (ALB). Use a custom authenticator to control access to the API. Store request meta information in Amazon DynamoDB with Auto Scaling and static content in a secured S3 bucket. Make secure signed requests for Amazon S3 objects and proxy the data through the REST service interface.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Fargate to host a container that runs a self-contained REST service. Set up an ECS service that is fronted by a cross-zone ALB.  Use an Amazon Cognito user pool to control access to the API. Store request meta information in DynamoDB with Auto Scaling and static content in a secured S3 bucket. Generate presigned URLs when returning references to content stored in Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up Amazon API Gateway and create the required API resources and methods. Use an Amazon Cognito user pool to control access to the API. Configure the methods to use AWS Lambda proxy integrations, and process each resource with a unique AWS Lambda function. Store request meta information in DynamoDB with Auto Scaling and static content in a secured S3 bucket. Generate presigned URLs when returning references to content stored in Amazon S3.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Set up Amazon API Gateway and create the required API resources and methods. Use an Amazon API Gateway custom authorizer to control access to the API. Configure the methods to use AWS Lambda custom integrations, and process each resource with a unique Lambda function. Store request meta information in an Amazon ElastiCache Multi-AZ cluster and static content in a secured S3 bucket. Generate presigned URLs when returning references to content stored in Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "375",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is importing a virtual machine from an on-premises environment utilizing AWS Import/Amazon Export's EC2 VM Import capability. The solutions architect has built an Amazon Machine Image (AMI) and deployed an Amazon EC2 machine based on it. The EC2 instance is located inside a public subnet within a VPC and is issued a public IP address.<br>In the AWS Systems Manager console, the EC2 instance does not display as a managed instance.<br><br>Which measures should the solutions architect take in combination to resolve this issue? (Select two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "375",
          "answers": [
            {
              "choice": "<p>Verify that Systems Manager Agent is installed on the instance and is running</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Verify that the instance is assigned an appropriate IAM role for Systems Manager.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Verify the existence of a VPC endpoint on the VPC. </p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Verify that the AWS Application Discovery Agent is configured.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Verify the correct configuration of service-linked roles for Systems Manager.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "376",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An company employs Amazon API Gateway, AWS Lambda, and Amazon DynamoDB to power a write-intensive mobile application. Although the application expanded satisfactorily, expenditures climbed dramatically as a result of higher-than-anticipated Lambda charges. The application's use is erratic, yet it has consistently increased by 20% month over month.<br><br>The Solutions Architect observes that the average execution time for the present Lambda functions is 4.5 minutes. The majority of the delay time is due to a high-latency network call to an on-premises 3-TB MySQL database server. Because the VPC is accessed over a VPN, the Lambda functions have been set with a five-minute timeout.<br><br>How can the Solutions Architect minimize the present architecture's cost?<br><br>A.<br>✑Substitute AWS Direct Connect for the VPN to minimize network latency to the on-premises MySQL database.<br>✑ Local caching should be enabled in the mobile application to minimize Lambda function invocation calls.<br>✑Monitor the performance of the Lambda function; progressively reduce the timeout and memory characteristics while keeping an acceptable execution time.<br>✑Offload DynamoDB's commonly accessed records to Amazon ElastiCache.<br><br>B.<br>✑ Substitute AWS Direct Connect for the VPN to minimize network latency to the on-premises MySQL database.<br>✑Cache API Gateway response data in Amazon CloudFront.<br>✑Instead of Lambda, use Amazon EC2 Reserved Instances.<br>✑Enable Auto Scaling on Amazon EC2 and make advantage of Spot Instances during peak periods.<br>✑To control target consumption, enable DynamoDB Auto Scaling.<br><br>C.<br>✑ Migrate the MySQL database server to Amazon RDS for MySQL Multi-AZ.<br>✑Enable Amazon CloudFront caching of Amazon API Gateway responses to minimize the number of Lambda function invocations.<br>✑Monitor the performance of the Lambda function; progressively reduce the timeout and memory characteristics while keeping an acceptable execution time.<br>✑Enable DynamoDB Accelerator and DynamoDB Auto Scaling for frequently accessed records.<br><br>D.<br>✑ Migrate the MySQL database server to Amazon RDS for MySQL Multi-AZ.<br>✑Enable API caching on the API Gateway to minimize Lambda function calls.<br>✑Continue to monitor the performance of the AWS Lambda function; progressively reduce the timeout and memory attributes while keeping an acceptable execution time.<br>✑Enable DynamoDB's auto scaling.<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "376",
          "answers": []
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "377",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A business operates an application that enables users to search for videos and associated material using selected keywords from content providers.<br>The application data is housed in an 800 GB Oracle database on-premises.<br>The organization wishes to move the data to a MySQL DB instance hosted on Amazon Aurora. A solutions architect intends to migrate the data using the AWS Schema Conversion Tool and AWS Database Migration Service (AWS DMS). Throughout the conversion process, the current database must continue to service requests. The migration process must be done with the least amount of downtime possible.<br><br>Which solution will satisfy these criteria?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "377",
          "answers": [
            {
              "choice": "<p>Create primary key indexes, secondary indexes, and referential integrity constraints in the target database before starting the migration process.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS DMS to run the conversion report for Oracle to Aurora MySQL. Remediate any issues. Then use AWS DMS to migrate the data.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use the M5 or C5 DMS replication instance type for ongoing replication.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Turn off automatic backups and logging of the target database until the migration and cutover processes are complete.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "378",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Ten new domain names have been registered by a business. The domains are used for internet marketing purposes by the business. The business need a solution that will send web visitors to a domain-specific URL. A JSON document defines all domains and target URLS. Amazon Route 53 manages all DNS records.<br>An architect of solutions must design a redirect service that takes HTTP and HTTPS queries.<br><br>Which combination of activities should the solutions architect take to ensure that these criteria are met with the LEAST amount of operational work possible? (Select three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CEF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "378",
          "answers": [
            {
              "choice": "<p>Create a dynamic webpage that runs on an Amazon EC2 instance. Configure the webpage to use the JSON document in combination with the event message to look up and respond with a redirect URL.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Application Load Balancer that includes HTTP and HTTPS listeners.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Lambda function that uses the JSON document in combination with the event message to look up and respond with a redirect URL.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Amazon API Gateway API with a custom domain to publish an AWS Lambda function.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon CloudFront distribution. Deploy a Lambda@Edge function.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an SSL certificate by using AWS Certificate Manager (ACM). Include the domains as Subject Alternative Names.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "379",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>The primary intranet website of a corporation has worsened response times as its user base has grown, despite no complaints of users seeing error pages. The application makes read-only usage of Amazon DynamoDB.<br>Even at instances when customers reported degradation, Amazon DynamoDB latency measurements for successful requests remained stable. The development team determined that the problem was caused by ProvisionedThrough logging Exceeded exceptions in the application logs while performing Scan and read operations. Additionally, the researchers found an access pattern characterized by consistent spikes in read activity across a scattered group of individual data items.<br>The Chief Technology Officer is interested in enhancing the user experience.<br><br>Which solutions will satisfy these needs with the MINIMUM amount of application modification? (Select two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "379",
          "answers": [
            {
              "choice": "<p>Change the data model of the DynamoDB tables to ensure that all Scan and read operations meet DynamoDB best practices of uniform data access, reaching the full request throughput provisioned for the DynamoDB tables.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable DynamoDB Auto Scaling to manage the throughput capacity as table traffic increases. Set the upper and lower limits to control costs and set a target utilization given the peak usage and how quickly the traffic changes.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Provision Amazon ElastiCache for Redis with cluster mode enabled. The cluster should be provisioned with enough shards to spread the application load and provision at least one read replica node for each shard.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement the DynamoDB Accelerator (DAX) client and provision a DAX cluster with the appropriate node types to sustain the application load. Tune the item and query cache configuration for an optimal user experience.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Remove error retries and exponential backoffs in the application code to handle throttling errors.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "380",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user has constructed a virtual private cloud (VPC) with both public and private subnets. CIDR 20.0.0.0/16 is assigned to the VPC. The private network is identified by CIDR 20.0.1.0/24, whereas the public subnet is identified by CIDR 20.0.0.0/24. The user intends to utilize the public subnet (port 80) to run a web server and the private subnet to host a database server (port 3306). The user is setting the NAT instance's security group.<br><br>Which of the following items in the NAT's security group is not necessary in order for database servers to connect to the Internet for software updates?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "380",
          "answers": [
            {
              "choice": "<p>For Outbound allow Destination: 0.0.0.0/0 on port 443</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>For Inbound allow Source: 20.0.1.0/24 on port 80</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>For Inbound allow Source: 20.0.0.0/24 on port 80</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>For Outbound allow Destination: 0.0.0.0/0 on port 80</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "381",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user is attempting to establish a PIOPS EBS volume with a capacity of 3 GB and a throughput of 90 IOPS.&nbsp;<br><br>Is AWS going to produce the volume?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "381",
          "answers": [
            {
              "choice": "<p>No, since the PIOPS and EBS size ratio is less than 30</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Yes, since the ratio between EBS and IOPS is less than 30</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>No, the EBS size is less than 4GB</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Yes, since PIOPS is higher than 100</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "382",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A business wishes to enable its marketing department to run SQL queries on customer information in order to discover market segments. Hundreds of files contain the data. Encryption of records in transit and at rest is required. While the Team Manager must be able to manage users and groups, no team member should have access to services or resources that are not necessary to run the SQL queries. Additionally, administrators must audit queries and get warnings when a query breaches the Security team's set guidelines.<br>AWS Organizations was utilized to establish a new Team Manager account and an AWS IAM user with administrator access.<br><br>Which design satisfies these criteria?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "382",
          "answers": [
            {
              "choice": "<p>Apply a service control policy (SCP) that allows access to IAM, Amazon RDS, and AWS CloudTrail. Load customer records in Amazon RDS MySQL and train users to execute queries using the AWS CLI. Stream the query logs to Amazon CloudWatch Logs from the RDS database instance. Use a subscription filter with AWS Lambda functions to audit and alarm on queries against personal data.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Apply a service control policy (SCP) that denies access to all services except IAM, Amazon Athena, Amazon S3, and AWS CloudTrail. Store customer record files in Amazon S3 and train users to execute queries using the CLI via Athena. Analyze CloudTrail events to audit and alarm on queries against personal data.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Apply a service control policy (SCP) that denies access to all services except IAM, Amazon DynamoDB, and AWS CloudTrail. Store customer records in DynamoDB and train users to execute queries using the AWS CLI. Enable DynamoDB streams to track the queries that are issued and use an AWS Lambda function for real-time monitoring and alerting.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Apply a service control policy (SCP) that allows access to IAM, Amazon Athena, Amazon S3, and AWS CloudTrail. Store customer records as files in Amazon S3 and train users to leverage the Amazon S3 Select feature and execute queries using the AWS CLI. Enable S3 object-level logging and analyze CloudTrail events to audit and alarm on queries against personal data.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "383",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user has used the VPC wizard to construct a VPC with public and private subnets. CIDR 20.0.0.0/16 is assigned to the VPC. CIDR 20.0.0.0/24 is used for the private subnet. i-a12345 is the NAT instance ID.<br><br>Which of the following entries in the primary route table associated with the private subnet is necessary to enable instances to connect to the internet?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "383",
          "answers": [
            {
              "choice": "<p>Destination: 20.0.0.0/0 and Target: 80</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Destination: 20.0.0.0/0 and Target: i-a12345</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Destination: 20.0.0.0/24 and Target: i-a12345</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Destination: 0.0.0.0/0 and Target: i-a12345</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "384",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization wishes to use a SaaS solution provided by a third party. The SaaS application must have the ability to execute multiple API calls in order to find Amazon EC2 resources that are operating inside the enterprise's account. The company has internal security standards requiring that any external access to their environment adhere to the concept of least privilege and that procedures are in place to guarantee that the SaaS vendor's credentials cannot be utilized by another third party.<br><br>Which of the following options would satisfy all of these criteria?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "384",
          "answers": [
            {
              "choice": "<p>From the AWS Management Console, navigate to the Security Credentials page and retrieve the access and secret key for your account.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM user within the enterprise account assign a user policy to the IAM user that allows only the actions required by the SaaS application create a new access and secret key for the user and provide these credentials to the SaaS provider.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM role for cross-account access allows the SaaS provider's account to assume the role and assign it a policy that allows only the actions required by the SaaS application.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM role for EC2 instances, assign it a policy that allows only the actions required tor the SaaS application to work, provide the role ARN to the SaaS provider to use when launching their application instances.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "385",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>AWS Organizations is used by a business to handle more than 1,000 AWS accounts. The corporation has established a new developer division. There are 540 member accounts for developers that must be transferred to the new development organization. Each account is configured with the necessary information to function independently.<br><br>Which actions should a solutions architect perform in combination to migrate all developer accounts to the new developer organization? (Select three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BEF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "385",
          "answers": [
            {
              "choice": "<p>Call the MoveAccount operation in the Organizations API from the old organization's management account to migrate the developer accounts to the new developer organization.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>From the management account, remove each developer account from the old organization using the RemoveAccountFromOrganization operation in the Organizations API.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>From each developer account, remove the account from the old organization using the RemoveAccountFromOrganization operation in the Organizations API.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Sign in to the new developer organization's management account and create a placeholder member account that acts as a target for the developer account migration.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Call the InviteAccountToOrganization operation in the Organizations API from the new developer organization's management account to send invitations to the developer accounts.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Have each developer sign in to their account and confirm to join the new developer organization.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "386",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>DynamoDB is solely utilized as a transport mechanism; it is not used as a data store format.<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "386",
          "answers": [
            {
              "choice": "<p>WDDX</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>XML</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>SGML</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>JSON</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "387",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>To use Amazon SNS and ADM to deliver push notifications to mobile devices, you must have the following, except:<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "387",
          "answers": [
            {
              "choice": "<p>Device token</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Client ID</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Registration ID</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Client secret</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "388",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A Solutions Architect is assisting a firm in AWS with the operation of a normal three-tier web application. Amazon EC2 hosts the web and application levels, whereas Amazon RDS hosts the database tier. The firm is revamping its web and application layers to take use of Amazon API Gateway and AWS Lambda, with the goal of deploying the new application within six months. In the meanwhile, the IT Manager has requested cost savings from the Solutions Architect.<br><br>Which option will be the MOST EFFECTIVE in terms of cost while preserving reliability?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "388",
          "answers": [
            {
              "choice": "<p>Use Spot Instances for the web tier, On-Demand Instances for the application tier, and Reserved Instances for the database tier.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use On-Demand Instances for the web and application tiers, and Reserved Instances for the database tier.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Spot Instances for the web and application tiers, and Reserved Instances for the database tier.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Reserved Instances for the web, application, and database tiers.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "389",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You're considering migrating your Development (Dev) and Test environments to Amazon Web Services (AWS). You've chosen to host each environment using a different AWS account.<br>You want to use Consolidated Billing to connect each account's bill to a Master AWS account. To ensure budget compliance, you'd want to develop a mechanism that allows administrators in the Master account to halt, remove, and/or terminate resources in both the Dev and Test accounts.<br><br>Determine which choice will enable you to accomplish this aim.<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "389",
          "answers": [
            {
              "choice": "<p>Create IAM users in the Master account with full Admin permissions. Create cross-account roles in the Dev and Test accounts that grant the Master account access to the resources in the account by inheriting permissions from the Master account.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create IAM users and a cross-account role in the Master account that grants full Admin permissions to the Dev and Test accounts.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create IAM users in the Master account. Create cross-account roles in the Dev and Test accounts that have full Admin permissions and grant the Master account access.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Link the accounts using Consolidated Billing. This will give IAM users in the Master account access to resources in the Dev and Test accounts</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "390",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A business commissions a solution architect to reduce the cost of a solution. The solution manages many client demands. Amazon API Gateway, AWS Lambda, AWS Fargate, Amazon Simple Queue Service (Amazon SQS), and Amazon EC2 are all used in the solution's multi-tier architecture.<br>In the present configuration, queries are routed via API Gateway to Lambda, which then starts a Fargate container or pushes a message to a SQS queue. A EC2 Fleet is a collection of EC2 instances that act as workers for a SQS queue. The size of the EC2 Fleet is proportional to the number of items in the SQS queue.<br><br>Which sequence of activities should the solutions architect prescribe to get the most cost savings? (Select three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BDE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "390",
          "answers": [
            {
              "choice": "<p>Determine the minimum number of EC2 instances that are needed during a day. Reserve this number of instances in a 3-year plan with payment all upfront.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Examine the last 6 months of compute utilization across the services. Use this information to determine the needed compute for the solution. Commit to a Savings Plan for this amount.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Determine the average number of EC2 instances that are needed during a day. Reserve this number of instances in a 3-year plan with payment all upfront.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Remove the SQS queue from the solution and from the solution infrastructure.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Change the solution so that it runs as a container instead of on EC2 instances. Configure Lambda to start up the solution in Fargate by using environment variables to give the solution the message.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Change the Lambda function so that it posts the message directly to the EC2 instances through an Application Load Balancer.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "391",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>To access AWS services, a company's AWS architecture presently relies on access keys and secret access keys saved on each instance. Each instance's database credentials are hard-coded. SSH keys are kept in a secure Amazon S3 bucket enabling command-line remote access. The organization has tasked its solutions architect with enhancing the architecture's security posture without increasing operational complexity.<br><br>Which actions should the solutions architect take in conjunction to achieve this? (Select three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "391",
          "answers": [
            {
              "choice": "<p>Use Amazon EC2 instance profiles with an IAM role</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Secrets Manager to store access keys and secret access keys</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Systems Manager Parameter Store to store database credentials</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use a secure fleet of Amazon EC2 bastion hosts for remote access</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS KMS to store database credentials</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Systems Manager Session Manager for remote access</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "392",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>On AWS, a business is operating a.NET three-tier web application. The team is presently storing and serving the website's picture and video assets on local instance storage through XL storage optimized instances. The firm has experienced data loss as a result of replication and instance failures. The Solutions Architect has been tasked with redesigning this application in order to increase its dependability while maintaining a cost-effective architecture.<br><br>Which solution will satisfy these criteria?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "392",
          "answers": [
            {
              "choice": "<p>Set up a new Amazon EFS share, move all image and video files to this share, and then attach this new drive as a mount point to all existing servers. Create an Elastic Load Balancer with Auto Scaling general purpose instances. Enable Amazon CloudFront to the Elastic Load Balancer. Enable Cost Explorer and use AWS Trusted Advisor checks to continue monitoring the environment for future savings.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement Auto Scaling with general purpose instance types and an Elastic Load Balancer. Enable an Amazon CloudFront distribution to Amazon S3 and move images and video files to Amazon S3. Reserve general purpose instances to meet base performance requirements. Use Cost Explorer and AWS Trusted Advisor checks to continue monitoring the environment for future savings.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Move the entire website to Amazon S3 using the S3 website hosting feature. Remove all the web servers and have Amazon S3 communicate directly with the application servers in Amazon VPC. </p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Elastic Beanstalk to deploy the .NET application. Move all images and video files to Amazon EFS. Create an Amazon CloudFront distribution that points to the EFS share. Reserve the m4.4xl instances needed to meet base performance requirements.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "393",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which of the following preset policy condition keys in AWS IAM examines how recently (in seconds) the MFA-validated security credentials used to make the request were issued?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "393",
          "answers": [
            {
              "choice": "<p>aws:MultiFactorAuthAge</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>aws:MultiFactorAuthLast</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>aws:MFAAge</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>aws:MultiFactorAuthPrevious</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "394",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You're creating a social networking site and contemplating how to protect it against distributed denial-of-service (DDoS) assaults.<br><br>Which of the following mitigating strategies is a suitable option? (Select three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CDE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "394",
          "answers": [
            {
              "choice": "<p>Add multiple elastic network interfaces (ENIs) to each EC2 instance to increase the network bandwidth.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use dedicated instances to ensure that each instance has the maximum performance possible.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Amazon CloudFront distribution for both static and dynamic content.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Elastic Load Balancer with auto scaling groups at the web, app and Amazon Relational Database Service (RDS) tiers</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Add alert Amazon CloudWatch to look for high Network in and CPU utilization.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create processes and capabilities to quickly add and remove rules to the instance OS firewall.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "395",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Choose the appropriate remark on Amazon ElastiCache.<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "395",
          "answers": [
            {
              "choice": "<p>It makes it easy to set up, manage, and scale a distributed in-memory cache environment in the cloud.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>It allows you to quickly deploy your cache environment only if you install software.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>It does not integrate with other Amazon Web Services.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>It cannot run in the Amazon Virtual Private Cloud (Amazon VPC) environment.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "396",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>IAM Secure and Scalable is a company that offers its customers with scalable and secure SaaS. They want to run a web server and an application server on AWS VPC as distinct tiers. The business wishes to achieve scalability by also implementing Auto Scaling and a load balancer on its application servers (middle tier).<br><br>Which of the following choices best meets their needs?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "396",
          "answers": [
            {
              "choice": "<p>Since ELB is internet facing, it is recommended to setup HAProxy as the Load balancer within the VPC. </p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Internet facing ELB with VPC and configure all the App servers with it.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The user should make ELB with EC2-CLASSIC and enable SSH with it for security.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Internal Load balancer with VPC and register all the App servers with it.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "397",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A medical business is using the AWS Cloud to host an application. The program replicates the impact of developing medicinal medications.<br><br>Two components comprise the application: setup and simulation. The configuration portion of the application is executed in AWS Fargate containers inside an Amazon Elastic Container Service (Amazon ECS) cluster. The simulation component is executed on massively parallelized Amazon EC2 instances. If a simulation is interrupted, it may be restarted.<br><br>The setup portion of the application runs 24 hours a day with a constant load. The simulation portion runs for a few hours each night under varied load conditions. The corporation maintains simulation findings in Amazon S3 and the researchers have 30 days to utilize them. The firm must keep simulations for a minimum of ten years and be able to recover them within five hours.<br><br>Which option best fits these criteria in terms of cost-effectiveness?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "397",
          "answers": [
            {
              "choice": "<p>Purchase an EC2 Instance Savings Plan to cover the usage for the configuration part. Run the simulation part by using EC2 Spot Instances. Create an S3 Lifecycle policy to transition objects that are older than 30 days to S3 Intelligent-Tiering.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Purchase an EC2 Instance Savings Plan to cover the usage for the configuration part and the simulation part. Create an S3 Lifecycle policy to transition objects that are older than 30 days to S3 Glacier.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Purchase Compute Savings Plans to cover the usage for the configuration part. Run the simulation part by using EC2 Spot Instances. Create an S3 Lifecycle policy to transition objects that are older than 30 days to S3 Glacier.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Purchase Compute Savings Plans to cover the usage for the configuration part. Purchase EC2 Reserved Instances for the simulation part. Create an S3 Lifecycle policy to transition objects that are older than 30 days to S3 Glacier Deep Archive.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "398",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A firm that operates apps on Amazon Web Services (AWS) just signed up for a new data-as-a-service (SaaS) provider. The vendor supplies data through a REST API that the vendor hosts on AWS. The vendor provides numerous connecting options for the API and is collaborating with the firm to determine the optimal method of connection.<br><br>The company's Amazon Web Services (AWS) account does not permit outbound internet connectivity from inside its AWS environment. Vendor services are hosted on AWS in the same region as the vendor's apps.<br>A solutions architect must integrate connection to the vendor's API in order for the API to be highly accessible inside the company's virtual private cloud (VPC).<br><br>Which solution will satisfy these criteria?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "398",
          "answers": [
            {
              "choice": "<p>Connect to the vendor's public API address for the data service</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Connect to the vendor by way of a VPC peering connection between the vendor's VPC and the company's VPC</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Connect to the vendor by way of a VPC endpoint service that uses AWS PrivateLink</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Connect to a public bastion host that the vendor provides. Tunnel the API traffic</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "399",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A Solutions Architect has been tasked with the responsibility of examining a company's Amazon Redshift cluster, which has fast become a vital element of its technology and supports critical business processes. The Solutions Architect's role is to strengthen the cluster's dependability and availability and to give alternatives for restoring the cluster within four hours if a problem occurs.<br><br>Which of the following solution alternatives BEST meets the business requirement at the lowest possible cost?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "399",
          "answers": [
            {
              "choice": "<p>Ensure that the Amazon Redshift cluster has been set up to make use of Auto Scaling groups with the nodes in the cluster spread across multiple Availability Zones.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Ensure that the Amazon Redshift cluster creation has been templated using AWS CloudFormation so it can easily be launched in another Availability Zone and data populated from the automated Redshift back-ups stored in Amazon S3.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Kinesis Data Firehose to collect the data ahead of ingestion into Amazon Redshift and create clusters using AWS CloudFormation in another region and stream the data to both clusters.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create two identical Amazon Redshift clusters in different regions (one as the primary, one as the secondary). Use Amazon S3 cross-region replication from the primary to secondary region, which triggers an AWS Lambda function to populate the cluster in the secondary region.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": ""
    },
    {
      "question_id": "400",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your website is providing your staff with on-demand training videos. Monthly videos in high-resolution MP4 format are uploaded. Your staff is geographically dispersed and often on the road, using company-provided tablets that need the HTTP Live Streaming (HLS) protocol to view video. Your organization lacks experience in video transcoding, and as a result, you may need to hire a consultant.<br><br>How can you build the most cost-effective architecture possible while maintaining high availability and video transmission quality?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "400",
          "answers": [
            {
              "choice": "<p>A video transcoding pipeline running on EC2 using SQS to distribute tasks and Auto Scaling to adjust the number of nodes depending on the length of the queue. EBS volumes to host videos and EBS snapshots to incrementally backup original files after a few days. CloudFront to serve HLS transcoded videos from EC2.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Elastic Transcoder to transcode original high-resolution MP4 videos to HLS. EBS volumes to host videos and EBS snapshots to incrementally backup original files after a few days. CloudFront to serve HLS transcoded videos from EC2.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Elastic Transcoder to transcode original high-resolution MP4 videos to HLS. S3 to host videos with Lifecycle Management to archive original files to Glacier after a few days. CloudFront to serve HLS transcoded videos from S3.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>A video transcoding pipeline running on EC2 using SQS to distribute tasks and Auto Scaling to adjust the number of nodes depending on the length of the queue. S3 to host videos with Lifecycle Management to archive all files to Glacier after a few days. CloudFront to serve HLS transcoded videos from Glacier.</p>",
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