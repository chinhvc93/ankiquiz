// Practice Test 1(SAP-C02)
var SAP_C02_Whiz_PracticeTest1 = {
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": 98175,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You help a team to create various AMIs and Docker images through EC2 Image Builder pipelines. Other teams want to use the same EC2 Image Builder resources, including components, recipes and images in their image pipelines. You need to find a proper approach to share resources with other organizational units inside the AWS Organization or other specific AWS accounts. Which of the following methods is suitable?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answer​:​ D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect </strong>because you need to configure resource shares instead of shared pipelines in AWS RAM.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect </strong>because you cannot directly share components, recipes or images through EC2 Image Builder. Instead, RAM should be used.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect </strong>because image pipelines cannot be used to share EC2 Image Builder resources such as components or recipes.</li>\r\n\t<li><strong>Option​ ​D ​is​ CORRECT</strong> because RAM is appropriate for users to share EC2 Image Builder resources. Take the following snapshot as an example:<br />\r\n\t<img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/cs2.png\" style=\"height:325px; width:750px\" /></li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/imagebuilder/latest/userguide/manage-shared-resources.html#manage-shared-resources-share\" target=\"_blank\">https://docs.aws.amazon.com/imagebuilder/latest/userguide/manage-shared-resources.html#manage-shared-resources-share</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122863,
          "question_id": 98175,
          "answers": [
            {
              "choice": "<p>In AWS Resource Access Manager (RAM), create shared pipelines by selecting the shared components, images, or recipes in EC2 Image Builder and select the target organizational units or AWS accounts</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>In the EC2 Image Builder, select the shared resources such as components, recipes or images and distribute the resources to other organizational units or AWS accounts</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>In the EC2 Image Builder image pipelines, share the resources to other organizational units or AWS accounts after the pipelines are finished successfully</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>In AWS Resource Access Manager (RAM), add the shared components, images, or recipes in resource shares and configure the principals which are allowed to access the shared resources</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98176,
      "topic_id": 2686,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company uses a hybrid environment to host its infrastructure and services. Applications are mainly deployed in AWS. As a part of the company strategy, certain Amazon EC2 instances need to be exported through the VM Import/Export tool as OVA files and deployed in the on-premises VMware vSphere environment. How would you use the VM Import/Export tool in the right way?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answer:​ C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because Server Migration Connector is a component of AWS Server Migration Service, and it is not used by the VM Import/Export tool.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect </strong>because the VM Import/Export tool cannot be used to deploy the AWS discovery tools. Discovery Tools are used by AWS Migration Hub to plan the migration from data centers to AWS.</li>\r\n\t<li><strong>Option​ ​C ​is​ CORRECT</strong> because VM Import/Export uses the AWS CLI command &ldquo;aws ec2 create-instance-export-task&rdquo; to export an EC2 instance. i.e. &ldquo;aws ec2 create-instance-export-task --instance-id my-instance-id --target-environment vmware --export-to-s3-task file://C:\\file.json&rdquo;. This CLI command creates an OVA file in an S3 bucket. The OVA file will be used to launch VMs in VMware vSphere.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect </strong>because &ldquo;aws ec2 export-image&rdquo; is used to export a VM directly from an Amazon Machine Image (AMI). Please refer to the below.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport.html\" target=\"_blank\">https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport_image.html\" target=\"_blank\">https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport_image.html</a>&nbsp;</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122864,
          "question_id": 98176,
          "answers": [
            {
              "choice": "<p>Use the VM Import/Export tool to install the Server Migration Connector, generate ova files and migrate the EC2 instances to VMware vSphere</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use the VM Import/Export tool to deploy the AWS discovery tools in EC2 instances and trigger migration jobs to VMware vSphere</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use the &ldquo;aws ec2 create-instance-export-task&rdquo; command to export EC2 instances and store the exported ova files in an S3 bucket</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Use the &ldquo;aws ec2 export-image&rdquo; command to export EC2 instances and download the exported ova files in a local disk</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Accelerate Workload Migration and Modernization"
    },
    {
      "question_id": 98177,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your team is developing a new Lambda function for a microservice component. You need to package and deploy the Lambda function as a container image. The container image should be built based on the python:buster image with other dependencies and libraries installed. In order to use the container image properly for the Lambda function, which of the following actions is required?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answer​: D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because there is no need to assume the IAM role in the Dockerfile. Users should configure the IAM role when creating the Lambda function.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect </strong>because Lambda automatically forwards logs to CloudWatch Logs. Users do not need to install the CloudWatch agent in Dockerfile.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect </strong>because after the Docker image has been built, users should push the image to ECR. There is no ECR agent that needs to be installed in the Docker image.</li>\r\n\t<li><strong>Option​ ​D ​is​ CORRECT </strong>because the container image for Lambda must implement the Lambda Runtime API that is added by the open-source runtime interface client.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/aws/new-for-aws-lambda-container-image-support/\" target=\"_blank\">https://aws.amazon.com/blogs/aws/new-for-aws-lambda-container-image-support/</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/lambda/latest/dg/images-create.html\" target=\"_blank\">https://docs.aws.amazon.com/lambda/latest/dg/images-create.html</a>&nbsp;</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122865,
          "question_id": 98177,
          "answers": [
            {
              "choice": "<p>In the Dockerfile, assume the IAM role through the &ldquo;aws sts assume-role&rdquo; CLI for the Lambda function during runtime</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Install the CloudWatch Log agent in the container image for the Lambda function to forward its logs to a CloudWatch Log group</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Install the Amazon Elastic Container Registry (Amazon ECR) agent for the Lambda function to interact with ECR to fetch the Docker image</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Install the runtime interface client in the container image to make it compatible with Lambda</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98178,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your team uses Elastic Beanstalk to manage a legacy JAVA application for a financial system. The Elastic Beanstalk environment is based on Amazon Linux. Now you need to update the operating system to Amazon Linux 2 in order to take advantage of the latest Elastic Beanstalk functionality. During the update, there should be minimal service impact to the application. Which of the following options describes the correct order to perform the operating system update?</p>\r\n\r\n<p>1. Turn the new environment into the production environment by swapping its CNAME with the existing environment&#39;s CNAME.</p>\r\n\r\n<p>2.&nbsp;In the Elastic Beanstalk console, select the environment and update the platform to Amazon Linux 2.</p>\r\n\r\n<p>3.&nbsp;Create a new environment in Elastic Beanstalk and deploy the application code to it.</p>\r\n\r\n<p>4.&nbsp;Find and fix any application compatibility issues in the Amazon Linux 2 environment.</p>\r\n\r\n<p>5.&nbsp;Terminate the old Elastic Beanstalk environment.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answer: C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect </strong>because terminating the old environment is not the correct procedure to update the operating system. So, step 5 should not be in the first position.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect</strong> because step 2 is the unwanted step that does not describe any updates.</li>\r\n\t<li><strong>Option​ ​C ​is​ CORRECT</strong> because this sequence describes the blue/green update strategy by creating a new environment, testing it and then swapping the DNS for the production environment.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect </strong>because issues cannot be followed before creating and deploying the code. The sequence does not describe any of the update strategies.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-platform-update-managed.html\" target=\"_blank\">https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-platform-update-managed.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.platform.upgrade.html\" target=\"_blank\">https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.platform.upgrade.html</a>&nbsp;</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122866,
          "question_id": 98178,
          "answers": [
            {
              "choice": "<p>5 &gt; 2 &gt; 1 &gt; 4</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>2 &gt; 3 &gt; 1 &gt; 5</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>3 &gt; 4 &gt; 1 &gt; 5</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>4 &gt; 2 &gt; 3 &gt; 1</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98179,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are working in a company as an AWS engineer. Your company uses a lot of Elastic Beanstalk applications on different platforms. Most of the Elastic Beanstalk environments do not enable platform updates. So, your team has to update the platforms during scheduled maintenance windows manually. You would like to enable managed platform updates through the Elastic Beanstalk console. Which of the following options do you need to configure for the managed platform updates? (Select TWO.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answer​s: A and&nbsp;C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is CORRECT</strong> because, for the managed platform updates in Elastic Beanstalk, you can choose the update level to be &ldquo;Minor versions and patches&rdquo; or &ldquo;Patch only&rdquo;.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect </strong>because Managed platform updates don&#39;t support updates across platform branches such as operating system, runtime, or Elastic Beanstalk components.</li>\r\n\t<li><strong>Option​ ​C ​is​ CORRECT</strong> because you can select the weekly update time period for Elastic Beanstalk to perform the updates shown below:<img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/8.jpg\" style=\"height:516px; width:750px\" /></li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect </strong>because users cannot configure the Instance reboot option.</li>\r\n\t<li><strong>Option​ ​E ​is​ ​incorrect</strong> because the patch baseline from Systems Manager cannot be configured for the Elastic Beanstalk managed platform updates.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-platform-update-managed.html\" target=\"_blank\">https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-platform-update-managed.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122867,
          "question_id": 98179,
          "answers": [
            {
              "choice": "<p>The update level</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>The operating system</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The weekly update period</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Instance reboot</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Patch baseline from Systems Manager</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98246,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company deploys an internal application in an Elastic Beanstalk environment which is created in a private VPC and has no access to the internet. The application is used for monitoring and logging, and other VPC applications need to send requests to the internal application. For security purposes, the traffic to the Elastic Beanstalk service should stay inside the Amazon network without exposure to the internet. How would you achieve this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answer:​ B</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because NAT Gateway is used to provide internet connectivity to private subnets. So, there is&nbsp;no need for NAT Gateway for the above-mentioned requirement.</li>\r\n\t<li><strong>Option​ B is​ CORRECT</strong> because the traffic to Elastic Beanstalk needs to be private without being exposed to the internet. This requirement can be achieved by the VPC endpoint service powered by AWS PrivateLink. With PrivateLink, users do not need to configure other connectivity services such as VPN connection or AWS Direct Connect. Check the following snapshot for how to create the VPC endpoint:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/csa-prop-ST-compute-9.JPG\" style=\"height:225px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because disabling the DNS name is not a feasible option in an Elastic Beanstalk environment.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect </strong>because, in order to send other applications&rsquo; traffic to the Elastic Beanstalk service, something must be used, i.e., the VPC endpoint.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/vpc.html\" target=\"_blank\">https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/vpc.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/vpc-vpce.html\" target=\"_blank\">https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/vpc-vpce.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122943,
          "question_id": 98246,
          "answers": [
            {
              "choice": "<p>Create a NAT Gateway in the public subnet. Modify the route table to connect other applications and the Elastic Beanstalk service through the NAT Gateway</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an interface VPC endpoint for the Elastic Beanstalk service. Requests are sent to Elastic Beanstalk through AWS PrivateLink</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Disable DNS name in the Elastic Beanstalk environment to disallow the connections through the public endpoint of Elastic Beanstalk</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Nothing needs to be done as Elastic Beanstalk provides the private DNS &ldquo;com.amazonaws.region.elasticbeanstalk&rdquo; by default</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98247,
      "topic_id": 2687,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are an AWS Solutions Architect in a financial company. The company recently started working on migrating legacy applications to AWS. You planned to use a new AWS Organization to manage all AWS accounts so that you can easily configure accounts, assign organizational units, configure security policies, etc. Which methods are valid for you to add accounts to the Organization? (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answer​s: A and&nbsp;D</strong></p>\r\n\r\n<p>There are two methods to add accounts to the AWS Organization either by creating new accounts within an Organization or by creating invitations. Please refer to</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ CORRECT</strong>&nbsp;because the user can create a new account that is part of the Organization.</li>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect&nbsp;</strong>because other accounts can not create requests to join the Organization. There is no CLI request-join-to-organization as well.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect&nbsp;</strong>because, in the AWS console, users cannot create requests to join an Organization. However, they can accept invitations.</li>\r\n\t<li><strong>Option​ ​D ​is​ CORRECT&nbsp;</strong>because this can be done through the AWS console, CLI, or API.</li>\r\n\t<li><strong>Option​ ​E ​is​ ​incorrect</strong>&nbsp;because the cross-account IAM role is not required in this scenario. Also, there is no API call to add to an organization for other accounts.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_invites.html\" target=\"_blank\">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_invites.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html\" target=\"_blank\">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122944,
          "question_id": 98247,
          "answers": [
            {
              "choice": "<p>In the AWS Organization console, create accounts within your organization</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS CLI request-join-to-organization for other AWS accounts to join the Organization. After the Organization owner accepts the requests, the accounts will join successfully</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>For other accounts, use management accounts to log in to the AWS Organization console, create requests to the Organization owner to join the organization</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>In the management account of the Organization, create invitations to other accounts and wait for them to accept the invitations</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>For other accounts, create a cross-account IAM role that allows the operation of add-account-to-organization for the resource of the AWS Organization ARN. Use an IAM user to assume the IAM role and send an API call to add the account to the Organization</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design Solutions for Organizational Complexity"
    },
    {
      "question_id": 98248,
      "topic_id": 2687,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You have signed in to an AWS Organization&#39;s management account using an admin IAM user. You need to move accounts to this Organization from one OU (Organizational Unit) to another or back to the root from an OU. However, the operation was disallowed due to a lack of permissions. So you started looking at the IAM policies attached to this user. Which permissions do you need to move accounts among OUs? (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answers: B and&nbsp;C</strong></p>\r\n\r\n<p>Users can move accounts between the Root and OUs in AWS Organization according to</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html\" target=\"_blank\">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html</a>.</li>\r\n</ul>\r\n\r\n<p>However, permissions are needed to do that.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect </strong>because organizations:DescribeAccount is used to retrieve Organization details about the account, which is not required.</li>\r\n\t<li><strong>Option​ ​B ​is​ CORRECT&nbsp;</strong>because organizations:DescribeOrganization is required if the move operation is done from the console.</li>\r\n\t<li><strong>Option​ ​C ​is​ CORRECT</strong>&nbsp;because organizations:MoveAccount permits users to move accounts in an Organization.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect&nbsp;</strong>because attaching SCP is not needed in this scenario.</li>\r\n\t<li><strong>Option​ E ​is​ ​incorrect</strong>:&nbsp;because this is one of the permission used to create an OU within a root in your organization.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122945,
          "question_id": 98248,
          "answers": [
            {
              "choice": "<p>organizations:DescribeAccount</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>organizations:DescribeOrganization</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>organizations:MoveAccount</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>organizations:AttachPolicy</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>organizations:CreateOrganizationalUnit</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design Solutions for Organizational Complexity"
    },
    {
      "question_id": 98249,
      "topic_id": 2687,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In an AWS Organization, the Root is attached to a default SCP that allows all actions on all resources. And other OUs or AWS accounts are attached with SCPs that contain Deny lists. For example, an SCP that denies cloudtrail:StopLogging is attached to an OU. However, you think that the Deny lists can be improved to contain more services such as those that are not used. How would you find out the AWS services&nbsp;that are allowed by the SCP but are never used?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answer​:&nbsp;D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect</strong>&nbsp;because the AWS Organization console does not contain the last access data.</li>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect</strong>&nbsp;because&nbsp;the IAM credential report provides IAM user information. There is no access data for AWS Organization.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect&nbsp;</strong>because AWS Config does not show resource information related to the Organization. The user cannot identify which services are not used in AWS Config.</li>\r\n\t<li><strong>Option​ ​D ​is​ CORRECT</strong>&nbsp;because the service report in Organization Activity can be used to identify the AWS services&nbsp;to be included in the Deny lists.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/10/11/ckeditor_7.png\" style=\"height:298px; width:750px\" /><br />\r\n<br />\r\n<strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html\" target=\"_blank\">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor-view-data-orgs.html\" target=\"_blank\">https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor-view-data-orgs.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122946,
          "question_id": 98249,
          "answers": [
            {
              "choice": "<p>In the AWS Organization console, identify allowed services that are never used by AWS accounts</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>In the IAM credential report of AWS accounts, examine those services that are not required to be allowed by SCPs</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>In the AWS Config console, list the AWS services that are not used by IAM users</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>In the IAM console, click the&nbsp;Organization activity&nbsp;and check the last accessed data to identify services that are never used</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design Solutions for Organizational Complexity"
    },
    {
      "question_id": 98250,
      "topic_id": 2687,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your AWS Organization has below hierarchy.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/10/11/ckeditor_8.0.png\" /></p>\r\n\r\n<p>And the OUs are attached with below SCPs:</p>\r\n\r\n<p>Root: FullAWSAccess.</p>\r\n\r\n<p>Admin_OU: Deny S3 upload action if without encryption.</p>\r\n\r\n<p>DEV1_OU: Deny all S3 actions.</p>\r\n\r\n<p>DEV2_OU: Allow all S3 actions.</p>\r\n\r\n<p>An AWS Account is attached under DEV2_OU, and it has an IAM user Bob who is given full permissions to S3 resources. What will happen when the user Bob is trying to upload objects to an S3 bucket without encryption?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answer​:​ A</strong></p>\r\n\r\n<p>About how SCPs work, please refer to the documentation in</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_about-scps.html\" target=\"_blank\">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_about-scps.html</a>.</li>\r\n</ul>\r\n\r\n<p>One rule is that any action that has an explicit Deny always takes priority.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ CORRECT&nbsp;</strong>because DEV2_OU inherits the SCP in Admin_OU which contains a Deny policy. The policy overrides any Allow that other SCPs might grant.</li>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect</strong>: because other SCPs that the OU has inherited should also be considered.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong>&nbsp;because the SCP in DEV1_OU does not need to be considered as it is not a parent node for user Bob.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong>:&nbsp;because the Allow policy does not override a Deny policy if it exists.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122947,
          "question_id": 98250,
          "answers": [
            {
              "choice": "<p>The action will be denied as the SCP in Admin_OU denies the operation</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>The action will be allowed as the SCP in the root has full AWS access, and Bob is attached with full S3 permissions</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The action will be denied as SCP in DEV1_OU has an S3 Deny policy, which takes priority</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The action will be allowed as DEV2_OU is attached with an S3 Allow SCP policy, which takes priority</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design Solutions for Organizational Complexity"
    },
    {
      "question_id": 98251,
      "topic_id": 2686,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You were hired as an AWS Architect in a company to help migrate legacy applications from on-premises to AWS. The team is trying to use AWS Migration Hub to visualize the migrating process. The first step is using discovery tools to get valuable server data such as performance summary and performance time series. The team has good SQL experience, so they hope that AWS Athena can be used to analyze the imported data. Given that the legacy applications are installed in Linux CentOS 7 or above physical servers, which discovery tool is the best for you to use?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answer​:​ B</strong></p>\r\n\r\n<p>AWS Migration Hub is a central place where the migration process can be visualized including the discovery phase. There are several discovery tools that are provided. For the details, please refer to</p>\r\n\r\n<p><a href=\"https://docs.aws.amazon.com/application-discovery/latest/userguide/what-is-appdiscovery.html\" target=\"_blank\">https://docs.aws.amazon.com/application-discovery/latest/userguide/what-is-appdiscovery.html</a>.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect</strong>:​ Because AWS Discovery Connector is a VMware appliance used for VMware virtual machines. It cannot be used for CentOS. Besides, the data from Discovery Connector cannot be explored by AWS Athena.</li>\r\n\t<li><strong>Option​ ​B ​is​ CORRECT</strong>:​ Because AWS Discovery Agent has supported CentOS Linux servers. And user can enable data exploration in Amazon Athena from the console:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/10/23/ckeditor_1.png\" style=\"height:141px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong>:​ Because Discovery Agent has supported a wide range of Linux and Windows servers. Check <a href=\"https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-agent.html\" target=\"_blank\">https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-agent.html</a>.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong>:​ Because this is not how Discovery Agent works. Discovery Agent can transfer data securely to Application Discovery Service instead of S3.</li>\r\n</ul>\r\n\r\n<p>Please refer to page 22 on the below link</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/application-discovery/latest/userguide/appdiscovery-ug.pdf#what-is-appdiscovery\" target=\"_blank\">https://docs.aws.amazon.com/application-discovery/latest/userguide/appdiscovery-ug.pdf#what-is-appdiscovery</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122948,
          "question_id": 98251,
          "answers": [
            {
              "choice": "<p>Configure AWS Agentless Discovery Connector on the Linux CentOS servers which automatically registers with the Application Discovery Service endpoint. The collected data is sent to the Application Discovery Service every 15 minutes</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Install AWS Discovery Agent on the servers which transmit data to AWS Application Discovery Service. Then in Migration Hub, enable the Data Exploration in Amazon Athena</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>As Linux CentOS does not support AWS discovery tools, use Import Template to upload the server data to an S3 bucket manually. Then import the data in S3 to AWS Migration Hub and optionally analyze the data by AWS Athena</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Install AWS Discovery Agent on the physical servers and configure the agent to send data to an S3 bucket. Create related tables in AWS Athena to analyze the server data</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Accelerate Workload Migration and Modernization"
    },
    {
      "question_id": 98252,
      "topic_id": 2686,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company owns a large number of on-premises virtual machines managed in VMware vCenter. To plan the migration from local servers to AWS, you have installed AWS Discovery Connector in the VMware vCenter Server that helps collect information about the virtual machines. The Discovery Connector has already registered with the Application Discovery Service successfully. Which data can be discovered by the Discovery Connector? (Select TWO.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answers​:​ A and&nbsp;D</strong></p>\r\n\r\n<p>There are two ways of performing discovery and collecting data offered by Application Discovery Service which are Agentless discovery and Agent-based discovery. The reference can be found in&nbsp;</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/application-discovery/latest/userguide/what-is-appdiscovery.html\" target=\"_blank\">https://docs.aws.amazon.com/application-discovery/latest/userguide/what-is-appdiscovery.html</a>.</li>\r\n\t<li><strong>Option​ ​A ​is​ CORRECT</strong>:​ Discovery Connector belongs to agentless discovery. It can collect static configuration and utilization data including CPU, RAM, and Disk I/O.</li>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect</strong>:​&nbsp; Only the &#39;type&#39; of the hypervisor can be discovered and NOT the &#39;name&#39; of the hypervisor.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong>:​ Because Discovery Connector does not discover the time and date of the system.</li>\r\n\t<li><strong>Option​ ​D ​is​ CORRECT</strong>:​ Refer to the explanation in Option A.</li>\r\n\t<li><strong>Option​ ​E ​is​ ​incorrect</strong>:​ Because only AWS Application Discovery Agent can provide the running process data to the Application Discovery Service.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122949,
          "question_id": 98252,
          "answers": [
            {
              "choice": "<p>Average number of read and write I/O operations per second</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Name of the hypervisor used</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Date and time on the virtual machine</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Average free RAM expressed in MB</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>The running process data on the local server</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Accelerate Workload Migration and Modernization"
    },
    {
      "question_id": 98253,
      "topic_id": 2686,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You lead a project to migrate the local Oracle database to AWS RDS. You plan to use AWS Database Migration Service for the project as users can easily configure it to replicate data continuously. As the Oracle database is used for financial services, data security is very important. You already created a replication instance in AWS DMS. How does the replication instance encrypt the stored data to keep it secure?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answer​:​ D</strong></p>\r\n\r\n<ul>\r\n</ul>\r\n\r\n<p>on how to encrypt the storage used by a replication instance.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect</strong>:​ Because the replication instance is encrypted by KMS and cannot be disabled.</li>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect</strong>:​ Because the master key is aws/dms by default, and user can modify the key with a CMK according to the below screenshot:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/10/23/ckeditor_8.png\" style=\"height:381px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong>:​ Because the replication instance uses AWS KMS to encrypt the stored data.</li>\r\n\t<li><strong>Option​ ​D ​is​ CORRECT</strong>:​ Refer to the explanation in Option B. When the replication instance is created, the encryption settings can be found in the section of &ldquo;Advanced security and network configuration&rdquo;.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.EncryptionKey.html\" target=\"_blank\">https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.EncryptionKey.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122950,
          "question_id": 98253,
          "answers": [
            {
              "choice": "<p>By default, the volume in the instance is not encrypted. Users can choose to encrypt the EBS volume by KMS</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The replication instance is encrypted by KMS, and the master key used is aws/ebs. Users cannot disable the encryption or modify the master key for the encryption</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The replication instance does not encrypt the stored data. Instead, the data in transit is encrypted for the connections between replication instances and endpoints</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>KMS encrypts data in the replication instance. The master key is aws/dms by default or a customer managed key (CMK)</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Accelerate Workload Migration and Modernization"
    },
    {
      "question_id": 98254,
      "topic_id": 2686,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to migrate its data from a local server to AWS S3. The total amount of data is about 35TB. The data needs some advanced machine learning analysis before being migrated to AWS. The migration project should finish as fast as possible, and it is unacceptable to finish it in months. The data at rest should also be encrypted during the migration. What is the best way to achieve this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answer​: C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect</strong>:​ Because AWS Transfer for SFTP is based on the network connection. It is unsuitable for migrating a huge amount of data. It also cannot provide processing ability before migration.</li>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect</strong>:​ Because when the data is less than 10PB, Snowmobile is NOT recommended.</li>\r\n\t<li><strong>Option​ ​C ​is​ CORRECT</strong>:​ Snowball Edge is suitable for data migration and edge computing devices. For the scenarios that need processing abilities, either a single Snowball Edge Compute Optimized device(s) should be used.&nbsp;This Snowball Edge device option has the most compute functionality, with 52 vCPUs, 208 GiB of memory, and 42 TB (39.5 usable)</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong>:​ Snowball Edge devices have two options - Compute Optimized and Storage Optimized. For this scenario, Compute Optimized device should be chosen.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/snowmobile/faqs/\" target=\"_blank\">https://aws.amazon.com/snowmobile/faqs/</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/whitepapers/latest/aws-overview/migration-services.html#aws-snowball-edge\" target=\"_blank\">https://docs.aws.amazon.com/whitepapers/latest/aws-overview/migration-services.html#aws-snowball-edge</a>.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122951,
          "question_id": 98254,
          "answers": [
            {
              "choice": "<p>Configure AWS Transfer for SFTP service to transfer files directly into Amazon S3 using the Secure File Transfer Protocol (SFTP)</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Snowmobile to transfer an extremely large amount of data as it is secure, fast, and cost-effective. KMS encrypts all data transferred in Snowmobile</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use one Snowball Edge Compute Optimized product. Perform machine learning analysis at remote location and transfer the data. After the equipment is shipped back, AWS can store the data in S3</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Snowball Edge Storage Optimized service. Perform machine learning and processing at edge location before copying the data. AWS can store the data in S3 after the device is returned to AWS</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Accelerate Workload Migration and Modernization"
    },
    {
      "question_id": 98255,
      "topic_id": 2686,
      "course_id": null,
      "case_study_id": 0,
      "lab_id": 0,
      "question_text": "<p>As an AWS Solutions Architect, you need to configure an identity service in AWS based on SAML. Since you already have a SAML identity provider outside of AWS, you plan to use the same IdP to manage user identities. To create the SAML identity provider in IAM, the below steps may be required.</p>\r\n\r\n<p>1.&nbsp;Configure the SAML IdP with relying party trust.</p>\r\n\r\n<p>2.&nbsp;Use AWS CLI assume-role-with-web-identity to return a set of temporary security credentials for authentication.</p>\r\n\r\n<p>3.&nbsp;Get the SAML metadata document from the IdP.</p>\r\n\r\n<p>4.&nbsp;Create a SAML IAM identity provider from AWS console or CLI.</p>\r\n\r\n<p>5.&nbsp;In IdP, configure SAML Assertions for the authentication response.</p>\r\n\r\n<p>Which one describes the correct sequences?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answer​:​ D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect</strong>:​ Because assume-role-with-web-identity is not used for SAML identity provider. Step 2 should not be included.</li>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect</strong>:​ Same reason as Option A.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong>:​ Before creating the identity provider, you need to get the metadata document from IdP:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/11/08/ckeditor_123.png\" style=\"height:227px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​D ​is​ CORRECT</strong>:​ After creating the identity provider in step 4, you need to configure the IdP side as steps 1 and 5 which add relying party trust between the IdP and AWS.</li>\r\n</ul>\r\n\r\n<p>Please check <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_saml.html\" target=\"_blank\">https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_saml.html</a> on how to create IAM SAML identity providers.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122958,
          "question_id": 98255,
          "answers": [
            {
              "question_id": "98255",
              "choice": "<p>4 -&gt; 1 -&gt; 5 -&gt; 2</p>",
              "feedback": "",
              "correct": 0
            },
            {
              "question_id": "98255",
              "choice": "<p>3 -&gt; 1 -&gt; 4 -&gt; 2</p>",
              "feedback": "",
              "correct": 0
            },
            {
              "question_id": "98255",
              "choice": "<p>1 -&gt; 4 -&gt; 3 -&gt; 5</p>",
              "feedback": "",
              "correct": 0
            },
            {
              "question_id": "98255",
              "choice": "<p>3 -&gt; 4 -&gt; 1 -&gt; 5</p>",
              "feedback": "",
              "correct": 1
            }
          ]
        }
      ],
      "topic_name": "Accelerate Workload Migration and Modernization"
    },
    {
      "question_id": 98256,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your team is developing an Android app. You need to use an Amazon Cognito Identity Pool to create unique identities for the app users and federate them with the identity provider from Google. You also want to allow unauthenticated guest access for the application. Guests can get temporary tokens for limited access. How would you implement the guest access using Amazon Cognito?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answer:​ A</strong></p>\r\n\r\n<p>About how to use Identity Pool for federated identities in AWS Cognito, please refer to&nbsp;<a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/identity-pools.html\" target=\"_blank\">https://docs.aws.amazon.com/cognito/latest/developerguide/identity-pools.html</a>. The authentication flow can be found in <a href=\"https://docs.aws.amazon.com/en_pv/cognito/latest/developerguide/authentication-flow.html\" target=\"_blank\">https://docs.aws.amazon.com/en_pv/cognito/latest/developerguide/authentication-flow.html</a></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ CORRECT</strong>:​ Because the unauthenticated access feature can be enabled in Cognito Identity Pool as below:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/11/08/ckeditor_234.png\" style=\"height:245px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect</strong>:​ Because the feature of unauthenticated identities is managed in Cognito Identity Pool instead of User Pool.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect:​</strong> Because the GetCredentialsForIdentity API does not have a request type of Guest.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong>:​ Because the GetOpenIdToken API does not provide the temporary tokens. Users can request a new temporary identity ID via the GetId API.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122953,
          "question_id": 98256,
          "answers": [
            {
              "choice": "<p>Enable the unauthenticated access in Cognito Identity Pool. Guest users can request an identity ID via the GetId API</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Activate the unauthenticated access feature in Cognito User Pool. Link the User Pool in Cognito Identity Pool</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Users can get guest credentials via the GetCredentialsForIdentity API with a request type as Guest</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Guest users can request temporary tokens by using the GetOpenIdToken API</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98257,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You use AWS Cognito User Pool to configure a user directory for an application. You want to separate different users as readers, contributors, and editors of the app. For example, the readers can only read contents from AWS S3 buckets. Contributors can put contents into Amazon S3 buckets, and editors have the permissions to publish contents through an API in Amazon API Gateway. Which method is the best to achieve this requirement in AWS Cognito?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answer: C</strong></p>\r\n\r\n<p>In Amazon Cognito User Pool, you can configure users in groups to manage the permissions better. Each group can be linked with an IAM role ARN. The reference can be found in <a href=\"https://docs.aws.amazon.com/en_pv/cognito/latest/developerguide/cognito-user-pools-user-groups.html\" target=\"_blank\">https://docs.aws.amazon.com/en_pv/cognito/latest/developerguide/cognito-user-pools-user-groups.html</a>.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect</strong>:​ Because users should be added into groups in the Cognito User Pool instead of IAM.</li>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect</strong>:​ Because users in Cognito User Pool cannot be configured directly with an IAM role.</li>\r\n\t<li><strong>Option​ ​C ​is​ CORRECT</strong>:​ Check the below example:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/11/08/ckeditor_345.png\" style=\"height:418px; width:750px\" /></p>\r\n\r\n<p>Group1 is linked with an IAM role, and User1 is added into the group.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong>:​ Similar to Option B, it is inappropriate to attach an IAM policy to each user directly.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122954,
          "question_id": 98257,
          "answers": [
            {
              "choice": "<p>In IAM, add different groups and assign suitable IAM policies. In Amazon Cognito User Pool, assign users to the IAM groups</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Configure different IAM roles in IAM for readers, contributors and editors. In Amazon Cognito User Pool, configure each user with an IAM role</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>In Amazon Cognito User Pool, create groups and assign IAM roles to them. Add users to the groups to assign the required permissions</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Directly attach an IAM policy to each user in Amazon Cognito User Pool. Make sure each user has an appropriate IAM policy according to the user role</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98258,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You implement a REST API using a Lambda Function. The API is exposed through the AWS API gateway. The Lambda Function calls a third-party service to retrieve the data. But this third-party service may not respond in time. You already increased the timeout of the Lambda Function to be 15 minutes. However, sometimes users still get an HTTP 504 error after about 30 seconds. Which of the following options is the most possible reason?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answer:​ C</strong></p>\r\n\r\n<p>Please check <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/limits.html\" target=\"_blank\">https://docs.aws.amazon.com/apigateway/latest/developerguide/limits.html</a> for the Amazon API Gateway limits. The integration timeout is 50 milliseconds - 29 seconds for all integration types. And the limit cannot be increased.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect</strong>:​ Because HTTP 504 is Gateway Timeout instead of Internal Server Error.</li>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect:​</strong> When the third-party service does not respond in time, the API Gateway reaches its limit after 29 seconds. It is not the third-party service that returns the HTTP 504 error code in this scenario.</li>\r\n\t<li><strong>Option​ ​C ​is​ CORRECT:</strong>​ Because the API call&nbsp;through API Gateway cannot exceed 29 seconds due to the limits. This is the most possible reason to cause the issue.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect:​</strong> Because the limit of Lambda Function can be 15 minutes according to <a href=\"https://aws.amazon.com/about-aws/whats-new/2018/10/aws-lambda-supports-functions-that-can-run-up-to-15-minutes/\" target=\"_blank\">https://aws.amazon.com/about-aws/whats-new/2018/10/aws-lambda-supports-functions-that-can-run-up-to-15-minutes/</a>. The limit of API Gateway has caused the issue.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122955,
          "question_id": 98258,
          "answers": [
            {
              "choice": "<p>The error code indicates that there is an Internal Server Error. Check the CloudWatch Logs of the Lambda Function</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The third-party service has returned an HTTP 504 error after 30 seconds to the Lambda Function. Then the Lambda Function forwards the error to the API Gateway</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The maximum of integration timeout for AWS API Gateway is 29 seconds. Although the timer for Lambda Function does not expire yet, the API Gateway already hits its limitation</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>When Lambda Function integrates with API Gateway, the effective Lambda Function execution time limit is 30 seconds although the limit is set to 15 minutes</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98259,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are developing a mobile application. As it is a proof of concept, you want to deliver the project as soon as possible and you prefer using a serverless pattern. The whole application contains the presentation tier, the logical tier and the database tier. The component in the presentation tier is the mobile application running on a user device. For the logical tier and database tier, which services should you use as the serverless mobile backend?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answer:​ D</strong></p>\r\n\r\n<p>As the serverless pattern is required, we should choose the serverless services that AWS fully manages.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect</strong>:​ Because Amazon RDS MySQL is not a pure serverless service. Users still need to configure the database instance type, storage and provisioned IOPS. Details can be found in&nbsp;<a href=\"https://d1.awsstatic.com/whitepapers/AWS_Serverless_Multi-Tier_Architectures.pdf\" target=\"_blank\">https://d1.awsstatic.com/whitepapers/AWS_Serverless_Multi-Tier_Architectures.pdf</a>.</li>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect</strong>:​ Because AWS ECS with EC2 instance is not a serverless service,&nbsp;ECS with Fargate can be a serverless service. In this scenario, Amazon API Gateway with AWS Lambda is the most appropriate for the logic tier.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong>:​ Because AWS Auto Scaling Group and Amazon DocumentDB are not serverless services.</li>\r\n\t<li><strong>Option​ ​D ​is​ CORRECT</strong>:​ Because all the mentioned services are serverless. Users do not need to create or maintain servers for the whole architecture.</li>\r\n</ul>\r\n\r\n<p>Check&nbsp;<a href=\"https://d1.awsstatic.com/whitepapers/AWS_Serverless_Multi-Tier_Architectures.pdf\" target=\"_blank\">https://d1.awsstatic.com/whitepapers/AWS_Serverless_Multi-Tier_Architectures.pdf</a> on how to create AWS serverless multi-tier architectures via Amazon API Gateway and AWS Lambda.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122956,
          "question_id": 98259,
          "answers": [
            {
              "choice": "<p>The logical tier contains Amazon API Gateway and AWS Lambda. The API Gateway endpoints are secured via Amazon Certificate Manager. Amazon RDS MySQL is used for the data tier</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The logic tier contains Amazon API Gateway and AWS ECS with EC2 instances. The API Gateway endpoints are secured via third-party identity providers. The data tier includes the resource of Amazon DynamoDB</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The logic tier contains Amazon CloudFront and AWS Auto Scaling Group. Amazon Cognito identity pools provide identity services. Amazon DocumentDB is used for the data tier</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The logic tier contains Amazon API Gateway and AWS Lambda. The API Gateway endpoints are secured via Amazon Cognito user pools. Amazon DynamoDB is used for the data tier</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98260,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You create a Lambda Function to process clients&rsquo; queries from a web application. The workload is time sensitive so that you want the Lambda function to finish processing and respond as quickly as possible. You prefer allocating more resources such as memories or CPUs to the Lambda Function. However, you are unsure how many resources are being used at the moment. Which action can help you to get the current memory usage and allocate more resources if needed?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answer​:​ B</strong></p>\r\n\r\n<p>Check <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/resource-model.html\" target=\"_blank\">https://docs.aws.amazon.com/lambda/latest/dg/resource-model.html</a> on how to configure Lambda Functions. Users can allocate memories for a Lambda Function as below:</p>\r\n\r\n<p><strong><img src=\"https://lh3.googleusercontent.com/BiM-4QuemUffPIimEgQs46vVZQzrIY2qndouG5d7e9B9s2MdzA3jLntdmEVEEkco8gZO9fpxCv28j05KLufNvCVpa3N4lEVvPnrQ-lPNfEVcsC0-uHzUgYLPHwDhzYtykm-2ChIj\" style=\"height:394px; width:750px\" /></strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect:​ </strong>We cannot use the default CloudWatch metrics to get the allocated and used memory.</li>\r\n\t<li><strong>Option​ ​B ​is​ CORRECT:​ </strong>We can get the max memory used from the CloudWatch logs.</li>\r\n</ul>\r\n\r\n<p><strong><img src=\"https://lh6.googleusercontent.com/dzUQ-MuoDkubyE8EoJHrYK9bjgDM8cYPKdK9rax6DyQJQ2U6pli3FS-2_gBDUTrmRCfJhfOFeo2pjJr6nvTi41i1_3fU7IR5Gq40d2DKdSSsi5H-m2ggymCU-TZSvooWc2kcE8Sy\" style=\"height:43px; width:750px\" /></strong></p>\r\n\r\n<p>If the max memory used is close to the memory allocated, it is better to allocate more memories to speed up the processing.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect:​</strong> Because the reserved concurrency does not influence how many memories or CPUs the Lambda Function has to process a request.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong>:​ Although Lambda Function is serverless, users are still responsible for monitoring the running status and allocating more resources if needed.&nbsp;</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122957,
          "question_id": 98260,
          "answers": [
            {
              "choice": "<p>Check the default CloudWatch metrics to get the allocated and used memories. Pre-allocate more resources to the Lambda Function if required</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Check CloudWatch Logs to get the max memory used and allocate more memory if needed</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>&nbsp;Check CloudWatch metrics to get the max number of invocations. Increase the reserved concurrency to speed up the processing time</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Memories and CPUs in Lambda Function are managed by AWS and can auto-scale if required. You are not supposed to allocate more resources by yourself</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98488,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A software development team just finished phase 1 of a web service that provides NBA news to subscribers. The web service has used a dedicated VPC which has only IPv4 CIDR (10.0.0.0/16) with two public subnets and two private subnets. A NAT gateway is put into each public subnet for outbound internet traffic. The EC2 instances are put into private subnets with a route that connects all Internet-bound IPv4 traffic to the relevant NAT gateway. The product is getting more and more popular and needs IPv6 to support some new features. Which below options are required for the new support for IPv6? Select 3.</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answers:&nbsp;B, C and&nbsp;F</strong></p>\r\n\r\n<p>Refer to <a href=\"https://docs.aws.amazon.com/vpc/latest/userguide/vpc-migrate-ipv6.html\" target=\"_blank\">https://docs.aws.amazon.com/vpc/latest/userguide/vpc-migrate-ipv6.html</a> for the details on how to migrate to IPv6 traffic. Please also note that this question asks for the necessary options. The below steps are required.</p>\r\n\r\n<ul>\r\n\t<li>Step 1: Associate an IPv6 CIDR Block with Your VPC and Subnets</li>\r\n\t<li>Step 2: Update Your Route Tables</li>\r\n\t<li>Step 3: Update Your Security Group Rules</li>\r\n\t<li>Step 4: Change Your Instance Type</li>\r\n\t<li>Step 5: Assign IPv6 Addresses to Your Instances</li>\r\n\t<li>Option A is incorrect: Because you do not need to delete and recreate VPC to support IPv6.</li>\r\n\t<li>Option B is CORRECT: Because that is a required step to add IPv6 CIDR in both VPC and subnets.</li>\r\n\t<li>Option C is CORRECT: Because the routing table needs to be modified to route the IPv6 traffic properly.</li>\r\n\t<li>Option D is incorrect: Because the NAT gateway is IPv4 only. For IPv6, an egress-only internet gateway should be used. Refer to<a href=\"https://docs.aws.amazon.com/vpc/latest/userguide/egress-only-internet-gateway.html\" target=\"_blank\"> https://docs.aws.amazon.com/vpc/latest/userguide/egress-only-internet-gateway.html</a>.</li>\r\n\t<li>Option E is incorrect: Same reason as option D. Also, you cannot add IPv6 IP range to the NAT gateway.</li>\r\n\t<li>Option F is CORRECT: Because EC2 instances need IPv6 addresses to route IPv6 traffic. This can be done in &ldquo;Actions, Networking, Manage IP Addresses&rdquo; and choose &ldquo;Assign new IP&rdquo; Under &ldquo;IPv6 Addresses&rdquo;.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123264,
          "question_id": 98488,
          "answers": [
            {
              "choice": "<p>Delete existing VPC and recreate a new VPC with both IPv4 and IPv6 CIDR. Create new public and private subnets with both IPv4 and IPv6 address ranges</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Associate an Amazon-provided IPv6 CIDR block with existing VPC and subnets. In the VPC and subnets console, choose &ldquo;Add IPv6 CIDR&rdquo;</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>For public subnets, create a route that routes all IPv6 traffic from the subnet to the internet gateway. For private subnets, create a route that routes all Internet-bound IPv6 traffic to an egress-only internet gateway</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Update the route tables to route the IPv6 traffic. For public subnets, create a route that routes all IPv6 traffic from the subnet to the internet gateway. For private subnets, create a route that routes all Internet-bound IPv6 traffic to NAT gateway</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Assign IPv6 addresses to NAT gateway which will be used to route the internet-bound IPv6 traffic from EC2 instances</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Assign IPv6 addresses to EC2 instances from the IPv6 address range that is allocated to the subnet</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98489,
      "topic_id": 2687,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An administrator in your company has created a VPC with an IPv4 CIDR block 10.0.0.0/24. Now they want to add additional address space outside of the current VPC CIDR. Because&nbsp;there is a requirement to host more resources in that VPC. Which of the below requirement can be used to accomplish this?</p>\r\n<quillbot-extension-portal></quillbot-extension-portal>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: B</strong></p>\r\n\r\n<p>An existing CIDR for a VPC is not modifiable. However, you can add additional CIDR blocks, i.e., up to four secondary IPv4 CIDR blocks to an already existing VPC.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect </strong>because you can change the CIDR of VPC by adding up to 4 secondary IPv4 IP CIDRs to your VPC.</li>\r\n\t<li><strong>Option B is CORRECT</strong> because you can expand your existing VPC by adding up to four secondary IPv4 IP ranges (CIDRs) to your VPC.</li>\r\n\t<li><strong>Option C is incorrect </strong>because deleting the subnets is unnecessary.</li>\r\n\t<li><strong>Option D is incorrect</strong> because this configuration would peer the VPC. It will not alter the existing VPC&rsquo;s CIDR.</li>\r\n</ul>\r\n\r\n<p>For more information on VPC and its FAQs, please refer to the following links-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/vpc/faqs/\" target=\"_blank\">https://aws.amazon.com/vpc/faqs/</a></li>\r\n</ul>\r\n<quillbot-extension-portal></quillbot-extension-portal>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123265,
          "question_id": 98489,
          "answers": [
            {
              "choice": "<p>You cannot change a VPC&#39;s size. Currently, to change the size of a VPC, you must terminate your existing VPC and create a new one</p>\r\n<quillbot-extension-portal></quillbot-extension-portal>",
              "correct": 0,
              "feedback": "<p>&nbsp;</p>\r\n<quillbot-extension-portal></quillbot-extension-portal>"
            },
            {
              "choice": "<p>Expand your existing VPC by adding secondary IPv4 IP ranges (CIDRs) to your VPC</p>\r\n<quillbot-extension-portal></quillbot-extension-portal>",
              "correct": 1,
              "feedback": "<p>&nbsp;</p>\r\n<quillbot-extension-portal></quillbot-extension-portal>"
            },
            {
              "choice": "<p>Delete all the subnets in the VPC and expand the VPC</p>\r\n<quillbot-extension-portal></quillbot-extension-portal>",
              "correct": 0,
              "feedback": "<p>&nbsp;</p>\r\n<quillbot-extension-portal></quillbot-extension-portal>"
            },
            {
              "choice": "<p>Create a new VPC with a greater range and then connect the older VPC to the newer one</p>\r\n<quillbot-extension-portal></quillbot-extension-portal>",
              "correct": 0,
              "feedback": "<p>&nbsp;</p>\r\n<quillbot-extension-portal></quillbot-extension-portal>"
            }
          ]
        }
      ],
      "topic_name": "Design Solutions for Organizational Complexity"
    },
    {
      "question_id": 98490,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your application provides data transformation services. Files containing data to be transformed are first uploaded to Amazon S3 and then transformed by a fleet of spot EC2 instances. Files submitted by your premium customers must be transformed with the highest priority. How should you implement such a system?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer:&nbsp;C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because using DynamoDB tables will be a very expensive solution compared to using the SQS queue(s).</li>\r\n\t<li><strong>Option B is incorrect </strong>because the transformation instances are spot instances that may not be up and running all the time; there are chances that they will be terminated.</li>\r\n\t<li><strong>Option C is CORRECT</strong> because (a) it decouples the components of a distributed application, so the application is not impacted due to using spot instances, (b) it is a much cheaper option compared to using DynamoDB tables, and more importantly, (b) it maintains a separate queue for the high priority messages which can be processed before the default priority queue.</li>\r\n\t<li><strong>Option D is incorrect </strong>because the transformation instances cannot poll high-priority messages first.&nbsp;They just poll and can determine priority only after receiving the messages.</li>\r\n</ul>\r\n\r\n<p><strong>More information about implementing the priority queue via SQS:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://awsmedia.s3.amazonaws.com/pdf/queues.pdf\" target=\"_blank\">http://awsmedia.s3.amazonaws.com/pdf/queues.pdf</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123266,
          "question_id": 98490,
          "answers": [
            {
              "choice": "<p>Use a DynamoDB table with an attribute defining the priority level. Transformation instances will scan the table for tasks, sorting the results by priority level</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use Route 53 latency based-routing to send high priority tasks to the closest transformation instances</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use two SQS queues, one for high priority messages, the other for default priority. Transformation instances first poll the high priority queue; if there is no message, they poll the default priority queue</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Use a single SQS queue. Each message contains the priority level. Transformation instances poll high-priority messages first</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98491,
      "topic_id": 2686,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A big company has a service to process gigantic clickstream data sets which are often the result of holiday shopping traffic on a retail website, or sudden dramatic growth on the data network of a media or social networking site. It is becoming more and more complex to analyze these clickstream datasets for its on-premise infrastructure. As the sample data set keeps growing, fewer applications are available to provide a timely response. The service is using a Hadoop cluster with Cascading. How can they migrate the applications to AWS in the best way?&nbsp;</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer:&nbsp;D</strong></p>\r\n\r\n<p>The application needs to process data timely; therefore Kinesis stream should be considered first. After a click event happens, a message should be put into the Kinesis stream in real-time. Moreover, Cascading is a proven, highly extensible application development framework for building massively parallelized data applications on EMR. By using EMR, the application does not need to change a lot for the migration. Refer to <a href=\"https://aws.amazon.com/blogs/big-data/integrating-amazon-kinesis-amazon-s3-and-amazon-redshift-with-cascading-on-amazon-emr/\" target=\"_blank\">https://aws.amazon.com/blogs/big-data/integrating-amazon-kinesis-amazon-s3-and-amazon-redshift-with-cascading-on-amazon-emr/</a>.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect:</strong> Because the RDS database&#39;s output is improper as RDS does not scale well when the traffic is high. Redshift is much more appropriate.</li>\r\n\t<li><strong>Option B is incorrect: </strong>AWS Lambda can potentially work for Hadoop. However, EMR provides native support for Hadoop. Also, RDS is incorrect.</li>\r\n\t<li><strong>Option C is incorrect: </strong>Because EC2 is not suitable for Hadoop processing if compared with EMR. This question asks for the best option. So EMR should be chosen.</li>\r\n\t<li><strong>Option D is CORRECT: </strong>Because the EMR cluster with Cascading can process the data from Kinesis stream in real-time, and Redshift is also a proper place to store the output data.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123267,
          "question_id": 98491,
          "answers": [
            {
              "choice": "<p>Put the source data to S3 and migrate the processing service to an AWS EMR Hadoop cluster with Cascading. Enable EMR to read and query data from S3 buckets directly. Write the output to the RDS database</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Put the source data to a Kinesis stream and migrate the processing service to AWS lambda to utilize its scaling feature. Enable lambda to read and query data from the Kinesis stream directly. Write the output to the RDS database</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Put the source data to an S3 bucket and migrate the processing service to AWS EC2 with auto-scaling. Ensure that the auto-scaling configuration has a proper maximum and&nbsp;minimum number of instances. Monitor the performance in the Cloudwatch dashboard. Write the output to the DynamoDB table for downstream to process</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Put the source data to a Kinesis stream and migrate the processing service to an AWS EMR cluster with Cascading. Enable EMR to read and query data from Kinesis streams directly. Write the output to Redshift</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Accelerate Workload Migration and Modernization"
    },
    {
      "question_id": 98492,
      "topic_id": 2686,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A middle-sized company is planning to migrate its on-premises servers to AWS. At the moment, they have used various licenses, including windows operating system server, SQL Server, IBM Db2, SAP ERP, etc. After migration, the existing licenses should continue to work in EC2. The IT administrators prefer to use a centralized place to control and manage the licenses to prevent potential non-compliant license usages. For example, SQL Server Standard&#39;s license only allows 50 vCPUs, which means a rule is needed to limit the number of SQL Servers in EC2. Which option is correct for the IT administrators to use?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct&nbsp;Answer:&nbsp;B</strong></p>\r\n\r\n<p>AWS License Manager is a central place to manage licenses in AWS EC2 and on-premises instances. It contains 3 parts to use:</p>\r\n\r\n<ul>\r\n\t<li>Define licensing rules.</li>\r\n\t<li>Enforce licensing rules.</li>\r\n\t<li>Track usage.</li>\r\n</ul>\r\n\r\n<p>AWS License Manager currently integrates with Amazon EC2, allowing you to track licenses for default (shared-tenancy) EC2 instances, Dedicated Instances, Dedicated Hosts, Spot Instances, and Spot Fleet, and Auto Scaling groups. Refer to <a href=\"https://docs.aws.amazon.com/license-manager/latest/userguide/license-manager.html\" target=\"_blank\">https://docs.aws.amazon.com/license-manager/latest/userguide/license-manager.html</a>.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;A is&nbsp;incorrect.&nbsp;</strong>Because AWS License Manager manages the BYOL licenses. Although AWS System Manager can work together with AWS License Manager to manage licenses for on-premises servers and non-AWS public clouds, it is not the central place to provide license management.</li>\r\n\t<li><strong>Option&nbsp;B is&nbsp;CORRECT:&nbsp;</strong>Because AWS License Manager can define licensing rules, track license usage, and enforce controls on license use to reduce the risk of license overages.</li>\r\n\t<li><strong>Option&nbsp;C is&nbsp;incorrect:&nbsp;</strong>Because the AWS License manager should be considered first for licensing management.</li>\r\n\t<li><strong>Option&nbsp;D is&nbsp;incorrect:&nbsp;</strong>Because AWS License Manager can manage non-Microsoft licenses.</li>\r\n</ul>\r\n\r\n<p>According to <a href=\"https://docs.aws.amazon.com/license-manager/latest/userguide/license-manager.html\" target=\"_blank\">https://docs.aws.amazon.com/license-manager/latest/userguide/license-manager.html</a>, license Manager tracks various software products from Microsoft, IBM, SAP, Oracle, and other vendors.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123268,
          "question_id": 98492,
          "answers": [
            {
              "choice": "<p>Create license rules in AWS System Manager for all BYOL licenses. Use the rules to make sure that there are no non-compliant activities. Link the rules when EC2 AMI is created. System Manager console has provided license usage status</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Define license rules in AWS License Manager for the required licenses. Enforce the license rules in EC2 and track usage in the AWS License Manager console</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Use a license management blueprint to create a dedicated Lambda to control license usage. Lambda outputs the usage status to Cloudwatch Metrics which can be used by the administrators to track the status</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Define and enforce license rules in AWS License Manager for the Microsoft relevant licenses such as windows, SQL Server as only Microsoft licenses are supported. For the other licenses such as IBM Db2, track the license usage in AWS System Manager</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Accelerate Workload Migration and Modernization"
    },
    {
      "question_id": 98493,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A mobile App developer just made an App in both IOS and Android with a feature to count step numbers. He has used AWS Cognito to authorize users to provide access to the AWS DynamoDB table. The App uses the DynamoDB table to store user subscriber data and many steps. Now the developer also needs Cognito to integrate with Google to provide federated authentication for the mobile application users so that the user does not need to remember extra login access. &nbsp;What should the developer do to authenticate and authorize the users with suitable permissions for the IOS and Android App? (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answers:&nbsp;A and C</strong></p>\r\n\r\n<p>One common use case for Amazon Cognito is to access AWS Services with an Identity Pool. For the Identity pool itself, it can include:</p>\r\n\r\n<ul>\r\n\t<li>Users in an Amazon Cognito identity&nbsp;pool.</li>\r\n\t<li>Users who authenticate with external identity providers such as Facebook, Google, or a SAML-based identity provider.</li>\r\n\t<li>Users authenticated via your own existing authentication process.</li>\r\n\t<li><strong>Option A is CORRECT&nbsp;</strong>because Identity pool can be used to set up the federated identities through third-party identity providers such as Google.</li>\r\n\t<li><strong>Option B is&nbsp;incorrect:</strong>&nbsp;Because Google federated identities work for both Android and IOS. Refer to&nbsp;<a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/google.html\" target=\"_blank\">https://docs.aws.amazon.com/cognito/latest/developerguide/google.html</a> on the details.</li>\r\n\t<li><strong>Option C is CORRECT </strong>because the User Pool is where the federated identity would be set-up and the Identity Pool is where permissions would be granted.&nbsp;Please also check <a href=\"https://aws.amazon.com/premiumsupport/knowledge-center/cognito-user-pools-identity-pools/\" target=\"_blank\">https://aws.amazon.com/premiumsupport/knowledge-center/cognito-user-pools-identity-pools/</a> for the differences between User pools and Identify pools. User pools are for authentication (identify verification), while Identity pools are for authorization (access control).</li>\r\n\t<li><strong>Option D is incorrect:&nbsp;</strong>Same reason as Option B.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123269,
          "question_id": 98493,
          "answers": [
            {
              "choice": "<p>Amazon Cognito Identity pools (federated identities) support user authorization through federated identity providers&mdash;including Amazon, Facebook, Google, and SAML identity providers. The developer just needs to set up the federated identities for Google access</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Only Android works for federated identities if Google access is required for AWS Cognito. This can be done by configuring Cognito identity pools with a Google Client ID</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Cognito User pools support user authentication through federated identity providers&mdash;including Amazon, Facebook, Google, and SAML identity providers. The developer just needs to set up the federated identities for Google access in the Cognito User Pool</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Only IOS (Objective-C and Swift) works for federated identities if Google access is required for AWS Cognito. This can be done by configuration Cognito identity pools with a Google Client ID. Google federated access does not work for the android app</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98495,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are working in a big organization as an AWS Solutions Architect. At the moment, the company is managing AWS AMIs in different ways without a common pattern. Different teams follow their own processes to create AMIs based on various pipelines. You plan to standardize the creation and management of AMIs through EC2 Image Builder. Which of the following benefits can you achieve with EC2 Image Builder? (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answer​s:​ B and&nbsp;D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because the operating system versions can be customized. Users can choose a particular OS version based on their needs.</li>\r\n\t<li><strong>Option​ B is​ CORRECT</strong> because users can customize components to build their desired output AMIs. Take the following as an example:<img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/cs1.png\" /></li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because AMIs cannot be automatically deployed on EC2 instances. The image pipeline provides an automation framework for building secure AMIs and container images on AWS.</li>\r\n\t<li><strong>Option​ ​D ​is​ CORRECT </strong>because EC2 Image Builder supports this. The generated AMIs can be distributed through an AMI pipeline.</li>\r\n\t<li><strong>Option​ ​E ​is​ ​incorrect </strong>because EC2 Image Builder utilizes image recipes, and Packer templates cannot be used by EC2 Image Builder.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/imagebuilder/latest/userguide/what-is-image-builder.html\" target=\"_blank\">https://docs.aws.amazon.com/imagebuilder/latest/userguide/what-is-image-builder.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/imagebuilder/latest/userguide/how-image-builder-works.html\" target=\"_blank\">https://docs.aws.amazon.com/imagebuilder/latest/userguide/how-image-builder-works.html</a>&nbsp;</li>\r\n\t<li><a href=\"https://www.packer.io/docs/templates\" target=\"_blank\">https://www.packer.io/docs/templates</a>&nbsp;</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123271,
          "question_id": 98495,
          "answers": [
            {
              "choice": "<p>EC2 Image Builder pipelines always use the latest operating system in which the latest security patches are installed</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>In an EC2 Image Builder pipeline, users can choose to install Amazon managed components such as the CloudWatch agent and the CodeDeploy agent</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>With an EC2 Image Builder pipeline, users can automatically deploy the AMIs in EC2 instances or Auto Scaling groups in different AWS Regions</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>In an EC2 Image Builder pipeline, the generated AMIs can be automatically distributed to multiple AWS Regions or shared with other AWS accounts</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>EC2 Image Builder pipelines are based on Packer so that Packer templates can be reused</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98494,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You have developed a web application to collect monthly expense reports. To the nature of the application and looking at the usage statistics, it is mostly used around the last week of the month and the first week of the month. To increase the application performance, you added a caching layer in front of the application servers.&nbsp;So the reports are cached and served immediately. You started off with Elasticache Redis with a &quot;cache.t2.small&quot; node type. The application has been running fine. When looking at the performance activity in CloudWatch, 60% of the requests are served by the cache, and the cache cannot cope with additional content requirements. You want to improve the application with minimal changes and&nbsp;resources. Please select a valid option.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: A</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is CORRECT</strong> because we can modify the cache node type from &quot;cache.t2.small&quot; to &quot;cache.t2.medium&quot; in the console. We must increase the size of the Redis instance for the server to serve more requests from the cache.</li>\r\n\t<li><strong>Option B is INCORRECT</strong> because creating a new Elasticache instance with a &quot;cache.t2.micro&quot; node type is not needed here.</li>\r\n\t<li><strong>Option C is INCORRECT</strong> because migrating to Beanstalk will simply not save the cost. Also, Beanstalk has an RDS layer but no caching layer.</li>\r\n\t<li><strong>Option D is INCORRECT </strong>because S3 and CloudFront will incur additional costs for such a minimal use case.</li>\r\n</ul>\r\n\r\n<p>There are two things here:<br />\r\nElastic Cache Instance -&gt; this supports the underlying Elasticache engine. This is similar to our ec2 instance like &quot;t2.micro&quot;, &quot;t2.small&quot; etc. This instance type can be modified either through the AWS console or through the CLI.<br />\r\nRedis -&gt; This is the engine that runs the elasticache cluster. This engine can only be &quot;upgraded&quot; and cannot be &quot;downgraded&quot;.<br />\r\nPlease refer to page 99&nbsp;of the below link-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/redis-ug.pdf\" target=\"_blank\">https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/redis-ug.pdf</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123270,
          "question_id": 98494,
          "answers": [
            {
              "choice": "<p>Modify the ElastiCache instance from t2 small to t2 medium, as t2 medium&nbsp;is more suitable for the given requirement</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new ElastiCache instance with t2 micro, and terminate the t2 small instance</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the application to Elastic Beanstalk to use auto-scaling and set the desired and min capacity to 1, use the RDS and Cache layer of Beanstalk to save the cost</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Run the web application from S3 and serve with CloudFront</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98496,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An IoT company has a new product which is a camera device. The device has installed several sensors and can record video as required. The device has AWS Kinesis Video Streams SDK in the software and can transmit recorded video in real-time to AWS Kinesis. Then the end-users can use a desktop or web client to view, download, or share the video stream. The client app should be simple and use a third-party player such as Google Shaka Player to display the video stream from Kinesis. How should the client app be designed?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: B</strong></p>\r\n\r\n<p>The most straightforward way to view or live playback the video in Kinesis Video Streams is by using HLS. HTTP Live Streaming (HLS) is an industry-standard HTTP-based media streaming communications protocol.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect: </strong>Because although GetMedia API may work, it is not as simple as HLS. You may have to create a player that uses GetMedia and build it yourself. However, in this case, a third-party player is needed.</li>\r\n\t<li><strong>Option B is CORRECT: </strong>Because GetHLSStreamingSessionURL API is required for third-party players to play the HLS streams.</li>\r\n\t<li><strong>Option C is incorrect:</strong> Because HTTP Live Streaming (HLS) should be used to playback the Kinesis Video Streams.</li>\r\n\t<li><strong>Option D is incorrect: </strong>Same reason as Option C.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-hls.html#how-hls-ex1-session\" target=\"_blank\">https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-hls.html#how-hls-ex1-session</a>.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123272,
          "question_id": 98496,
          "answers": [
            {
              "choice": "<p>The client can use HTTP Live Streaming (HLS) for live playback. Use GetMedia API to process and play Kinesis video streams</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The client can use HLS for live playback. Use GetHLSStreamingSessionURL API to retrieve the HLS streaming session URL, then provide the URL to the video player</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>The client can use Adobe HTTP Dynamic Streaming (HDS) for live playback. Use GetHDSStreamingSessionURL API to retrieve the HDS streaming session URL, then provide the URL to the video player</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The client can use Microsoft Smooth Streaming (MSS) for live playback. Use GetMSSStreaming API to retrieve the MSS streaming to the video player</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98497,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": 0,
      "lab_id": 0,
      "question_text": "<p>You are hired as an AWS solutions architect in a startup company. You notice some issues with the backup strategy of EC2 instances, and there is no snapshot lifecycle management. Users just create snapshots manually without a routine policy to control. You want to suggest using a proper EBS Snapshot Lifecycle policy. How would you persuade your team lead to approve this suggestion?&nbsp; (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answers: A and&nbsp;B</strong></p>\r\n\r\n<p>EBS Snapshot Lifecycle policy, as a backup strategy, can bring lots of benefits for EC2 users. About the details, please refer to <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html</a>.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is CORRECT:</strong> Because EC2 EBS volumes can have a routine backup which helps on the quality audit.</li>\r\n\t<li><strong>Option B is CORRECT: </strong>Because this is the major benefit of the life cycle policy, preserving important data and EBS volumes can be easily restored via the snapshots.</li>\r\n\t<li><strong>Option C is incorrect: </strong>The snapshot lifecycle policy can reduce storage costs by deleting outdated backups. However, the snapshots themselves still have costs.</li>\r\n\t<li><strong>Option D is incorrect: </strong>Because you can create up to 100 lifecycle policies per Region.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123274,
          "question_id": 98497,
          "answers": [
            {
              "question_id": "98497",
              "choice": "<p>A snapshot lifecycle policy helps to retain backups as required by auditors or internal compliance</p>",
              "feedback": "",
              "correct": 1
            },
            {
              "question_id": "98497",
              "choice": "<p>An EBS Snapshot Lifecycle helps to protect valuable data by enforcing a regular backup schedule</p>",
              "feedback": "",
              "correct": 1
            },
            {
              "question_id": "98497",
              "choice": "<p>A proper snapshot lifecycle policy is able to reduce storage costs as the snapshots taken by the schedule policy are free</p>",
              "feedback": "",
              "correct": 0
            },
            {
              "question_id": "98497",
              "choice": "<p>You can create an unlimited number of lifecycle policies</p>",
              "feedback": "",
              "correct": 0
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98261,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are building a large-scale confidential documentation web server on AWS, and all of the documentation for it will be stored on S3. One of the requirements is that it cannot be publicly accessible from S3 directly. You will need to use CloudFront to accomplish this. Which of the methods listed below would satisfy the requirements as outlined? Choose an answer from the options below.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: B</strong></p>\r\n\r\n<p>There are two main points (1) the files should not be accessed directly via S3 as they are confidential, and (2) the files should be accessible via CloudFront.</p>\r\n\r\n<p>If you want to use CloudFront signed URLs or signed cookies to provide access to objects in your Amazon S3 bucket, you probably also want to prevent users from accessing your Amazon S3 objects using Amazon S3 URLs. If users access your objects directly in Amazon S3, they bypass the controls provided by CloudFront signed URLs or signed cookies, for example, control over the date and time that a user can no longer access your content and control over which IP addresses can be used to access the content. In addition, if users access objects both through CloudFront and directly by using Amazon S3 URLs, CloudFront access logs are less useful because they&#39;re incomplete. See the image below:</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_soifjb.png\" style=\"height:422px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because it does not give CloudFront exclusive access to the S3 bucket.</li>\r\n\t<li><strong>Option B is CORRECT</strong> because it gives CloudFront exclusive access to the S3 bucket and prevents other users from accessing the public content of S3 directly via S3 URL.</li>\r\n\t<li><strong>Option C is incorrect </strong>because you do not need to create any individual policies for each bucket.</li>\r\n\t<li><strong>Option D is incorrect</strong> because (a) creating a bucket policy is unnecessary and (b) it does not prevent other users from accessing the public content of S3 directly via S3 URL.</li>\r\n</ul>\r\n\r\n<p>For more information on Origin Access Identity, please see the below link:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122959,
          "question_id": 98261,
          "answers": [
            {
              "choice": "<p>Create an Identity and Access Management (IAM) user for CloudFront and grant access to the objects in your S3 bucket to that IAM User</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Origin Access Identity (OAI) for CloudFront and grant access to the objects in your S3 bucket to that OAI only</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Create individual policies for each bucket that stores documents and in that policy grant access to only CloudFront</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create an S3 bucket policy that lists the CloudFront distribution ID as the Principal and the target bucket as the Amazon Resource Name (ARN)</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98262,
      "topic_id": 2686,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A&nbsp;company runs its critical portal on its On-prem datacenter on&nbsp;docker containers with a PostgreSQL database of size 40 TB.&nbsp;They are looking to migrate their existing portal to AWS to enhance user&#39;s experience&nbsp;with less burden on Infrastructure management.&nbsp;Which of the following methods should they use? (Select TWO).</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answers: B and D&nbsp;</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is Incorrect</strong> because deploying container on ECS using EC2 will require management task.</li>\r\n\t<li><strong>Option B is Correct</strong> because Fargate removes the management task of container on ECS. Also, moving 40TB of data one-time using snowball will be the right strategy here as this is the one-time movement of large data.</li>\r\n\t<li><strong>Option C is Incorrect</strong> because deploying a container on EC2 will require lots of management task and also moving 40TB using 1GBPS will not right strategy here as this is a one-time data movement.</li>\r\n\t<li><strong>Option D is Correct</strong> because RDS Aurora PostgreSQL provides better performance.</li>\r\n\t<li><strong>Option E is Incorrect</strong> because running PostgreSQL in EC2 will require lots of management task like installation, Patching etc</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/rds/aurora/postgresql-features/\" target=\"_blank\">https://aws.amazon.com/rds/aurora/postgresql-features/</a></li>\r\n\t<li><a href=\"https://www.youtube.com/watch?v=4xqOoRPrnAw\" target=\"_blank\">https://www.youtube.com/watch?v=4xqOoRPrnAw</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/compute/migrating-your-amazon-ecs-containers-to-aws-fargate/\" target=\"_blank\">https://aws.amazon.com/blogs/compute/migrating-your-amazon-ecs-containers-to-aws-</a><a href=\"https://aws.amazon.com/blogs/compute/migrating-your-amazon-ecs-containers-to-aws- fargate/\" target=\"_blank\"> fargate/</a></li>\r\n\t<li><a href=\"https://d1.awsstatic.com/events/reinvent/2019/Managing_large-scale_offline_data_migrations_Best_practices_STG337.pdf\" target=\"_blank\">https://d1.awsstatic.com/events/reinvent/2019/Managing_large-</a><a href=\"https://d1.awsstatic.com/events/reinvent/2019/Managing_large-cale_offline_data_migrations_Best_practices_STG337.pdf\" target=\"_blank\">cale_offline_data_migrations_Best_practices_STG337.pdf</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122960,
          "question_id": 98262,
          "answers": [
            {
              "choice": "<p>They should choose EC2 to deploy the containers on ECS and move the 40TB data using snowball on AWS</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>They should choose Fargate to deploy the containers on ECS and move the 40TB data using&nbsp;snowball on AWS</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>They should choose EC2 to deploy the containers on ECS and move the 40 TB data using 1Gbps Direct Connection Connection</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>They should use the RDS Aurora PostgreSQL Database in AWS</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>They should run the PostgreSQL on top of EC2 Nitro Based system for better Database Performance</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Accelerate Workload Migration and Modernization"
    },
    {
      "question_id": 98263,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A legacy application with a license is attached to a single MAC address. An EC2 instance can receive a new MAC address while launching new instances. How can you ensure that your EC2 instances can maintain a single MAC address for licensing? Choose the correct option.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: A</strong></p>\r\n\r\n<p>Tip: Whenever a question has a scenario where you need to use a fixed MAC address for EC2 instances, always think about using Elastic Network Interface (ENI).</p>\r\n\r\n<p>If a static MAC address is assigned to an ENI, it remains unchanged. As long as the EC2 has that ENI, its MAC address will not change.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is CORRECT</strong> because, as mentioned above, as ENI with static MAC address can be assigned to the EC2 instance. If the instance becomes unavailable or needs to be replaced, the ENI can be detached and re-attached to another EC2 while maintaining the same MAC address.</li>\r\n\t<li><strong>Option B is incorrect </strong>because subnets have CIDR, not static MAC addresses.</li>\r\n\t<li><strong>Option C is incorrect</strong> because if the EC2 instance fails or becomes unavailable, its MAC address cannot be reused with another EC2 instance.</li>\r\n\t<li><strong>Option D is incorrect </strong>because you can avail of ENI in order to have a static MAC address for the EC2 instances.</li>\r\n</ul>\r\n\r\n<p><strong>More information on ENI on AWS Documentation:</strong></p>\r\n\r\n<p><strong>Create a Low Budget High Availability Solution</strong></p>\r\n\r\n<p>If one of your instances serving a particular function fails, its network interface can be attached to a replacement or hot standby instance pre-configured for the same role in order to recover the service rapidly. For example, you can use a network interface as your primary or secondary network interface to a critical service such as a database instance or a NAT instance. If the instance fails, you (or more likely, the code running on your behalf) can attach the network interface to a hot standby instance. Because the interface maintains its private IP addresses, Elastic IP addresses, and MAC address, network traffic begins flowing to the standby instance as soon as you attach the network interface to the replacement instance. Users experience a brief loss of connectivity between the time the instance fails and when the network interface is attached to the standby instance, but no changes to the VPC route table or your DNS server are required.</p>\r\n\r\n<p>Best Practices for Configuring Network Interfaces</p>\r\n\r\n<p>For more information on elastic network interfaces, please visit the below URL-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122961,
          "question_id": 98263,
          "answers": [
            {
              "choice": "<p>Create an ENI and assign it to the EC2 instance. The ENI will have a static MAC address and can be detached and reattached to a new instance if the current instance becomes unavailable</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Private subnets have static MAC addresses. Launch the EC2 instance in a private subnet and, if required, use a NAT to serve data over the internet</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a manual MAC address for each EC2 instance and report that to the licensing company</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>AWS cannot have a fixed MAC address; the best solution is to create a dedicated VPN/VGW gateway to serve data from the legacy application</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98264,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>The Dynamic Host Configuration Protocol (DHCP) provides a standard for passing configuration information to hosts on a TCP/IP network. You can have multiple sets of DHCP options, but you can associate only one set of DHCP options with a VPC at a time. You have just created your first set of DHCP options and associated it with your VPC but now realize that you have made an error in setting them up and you need to change the options. Which of the following options do you need to take to achieve this?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Options A, B and D are incorrect</strong> because you cannot modify the DHCP options - neither via the console nor via CLI.</li>\r\n\t<li><strong>Option C is CORRECT</strong> because once you create a set of DHCP options, you cannot modify them. You must create a new set of DHCP options and associate it with your VPC.</li>\r\n</ul>\r\n\r\n<p><strong>AWS Document says:</strong></p>\r\n\r\n<p><strong>Changing DHCP Options</strong></p>\r\n\r\n<p>After you create a set of DHCP options, you can&#39;t modify them. If you want your VPC to use a different set of DHCP options, you must create a new set and associate them with your VPC. You can also set up your VPC to use no DHCP options at all.</p>\r\n\r\n<p>You can have multiple sets of DHCP options, but you can associate only one set of DHCP options with a VPC at a time. If you delete a VPC, the DHCP options set associated with the VPC are also deleted.</p>\r\n\r\n<p>After you associate a new set of DHCP options with a VPC, any existing instances and all new instances that you launch in the VPC use these options. You don&#39;t need to restart or relaunch the instances. They automatically pick up the changes within a few hours, depending on how frequently the instance renews its DHCP lease. If you want, you can explicitly renew the lease using the operating system on the instance.</p>\r\n\r\n<p>For more information on the DHCP Options set, please see the below link:-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_DHCP_Options.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_DHCP_Options.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122964,
          "question_id": 98264,
          "answers": [
            {
              "choice": "<p>You need to stop all the instances in the VPC. You can then change the options, and they will take effect when you start the instances</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>You can modify the options from the console or the CLI</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>You must create a new set of DHCP options and associate them with your VPC</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>You can modify the options from the CLI only, not from the console</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98265,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": 0,
      "lab_id": 0,
      "question_text": "<p>You are a software engineer and are creating a new web service in AWS. The service is about daily schedules that end users can configure and fetch. It contains an AngularJs front end that deals with data in a DynamoDB table called &quot;UserScheduleData&quot; with read and write permissions. You plan to use API Gateway and Lambda to handle the backend service. During development, you also need to do integration tests frequently using curl for the API endpoints. You have created a role &ldquo;ScheduleRoleLambda&rdquo; for Lambda itself. What below options should you perform to ensure that Lambda contains the necessary permissions in the service role? (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answers:&nbsp;B and&nbsp;E</strong></p>\r\n\r\n<p>Firstly, the CloudWatch Logs permission&nbsp;for Lambda is required at a minimum. Refer to the below Lambda settings:</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/02/21/ckeditor_aws_q3.jpg\" style=\"height:220px; width:750px\" /></p>\r\n\r\n<p>Every lambda needs this permission to create a log group, log stream, and put log events.</p>\r\n\r\n<p>Besides, access to DynamoDB is required for the Lambda. &quot;dynamodb:GetItem&quot; and &quot;dynamodb:PutItem&quot; are necessary.</p>\r\n\r\n<p>Lastly, it needs to add permission&nbsp;to the permissions policy associated with the Lambda function. Run the add-permission AWS Lambda command to grant the Amazon API Gateway service principal (apigateway.amazonaws.com) permissions to invoke the Lambda function.</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/lambda/latest/dg/with-on-demand-https-example.html\" target=\"_blank\">https://docs.aws.amazon.com/lambda/latest/dg/with-on-demand-https-example.html</a>&nbsp;</li>\r\n\t<li><strong>Option A is incorrect,</strong>&nbsp;although AWS X-Ray can trace AWS Lambda functions, it is not mandatory.</li>\r\n\t<li><strong>Option B is CORRECT</strong> because the Lambda&nbsp;function needs access to Amazon CloudWatch Logs for log streaming.&nbsp;</li>\r\n\t<li><strong>Option C&nbsp;is incorrect,</strong>&nbsp;SNS may help with error handling; however, it is optional and only needed depending on specific requirements.</li>\r\n\t<li><strong>Option D&nbsp;is incorrect </strong>because, for the permissions of DynamoDB, the resource should be arn name of the DynamoDB table in accordance with the principle of least privilege. &quot;dynamodb:FetchItem&quot; is incorrect as well.</li>\r\n</ul>\r\n\r\n<p>Below is an example:</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/02/21/ckeditor_aws_q3.1.jpg\" style=\"height:382px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option E&nbsp;is CORRECT</strong>&nbsp;because it correctly describes the permissions for DynamoDB.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/lambda/latest/dg/lambda-permissions.html\" target=\"_blank\">https://docs.aws.amazon.com/lambda/latest/dg/lambda-permissions.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/lambda/latest/dg/with-on-demand-https-example.html\" target=\"_blank\">https://docs.aws.amazon.com/lambda/latest/dg/with-on-demand-https-example.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123018,
          "question_id": 98265,
          "answers": [
            {
              "question_id": "98265",
              "choice": "<p>AWSXrayWriteOnlyAccess policy is needed for &ldquo;ScheduleRoleLambda&rdquo; so that a segment record with details about the function invocation and execution can be saved for tracking and debug purpose</p>",
              "feedback": "",
              "correct": 0
            },
            {
              "question_id": "98265",
              "choice": "<p>&ldquo;ScheduleRoleLambda&rdquo; should have a policy for CloudWatch Logs including CreateLogGroup, CreateLogStream and PutLogEvents</p>",
              "feedback": "",
              "correct": 1
            },
            {
              "question_id": "98265",
              "choice": "<p>&ldquo;sns:publish&rdquo; allow inline policy should be added into &ldquo;ScheduleRoleLambda&rdquo; for error handlings. For example, when exception appears, the message can be put into a dead letter queue via SNS publish</p>",
              "feedback": "",
              "correct": 0
            },
            {
              "question_id": "98265",
              "choice": "<p>&ldquo;ScheduleRoleLambda&rdquo; should contain an inline policy to allow DynamoDb access. The resource should be &ldquo;*&rdquo; and the action should contain &quot;dynamodb:FetchItem&quot;, &quot;dynamodb:PutItem&quot; and &quot;dynamodb:Query&quot;</p>",
              "feedback": "",
              "correct": 0
            },
            {
              "question_id": "98265",
              "choice": "<p>An IAM policy to allow DynamoDb access is needed for &ldquo;ScheduleRoleLambda&rdquo;. The resource should be the arn of &ldquo;UserScheduleData&rdquo; and the actions should contain &quot;dynamodb:GetItem&quot; and &quot;dynamodb:PutItem&quot;</p>",
              "feedback": "",
              "correct": 1
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98266,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You&#39;re building a mobile application game. The application needs permissions for each user to communicate and store data in DynamoDB tables. What is the best method for granting each mobile device that installs your application to access DynamoDB tables for storage when required? Choose the correct answer from the options below.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect </strong>because IAM Roles are preferred over IAM Users because IAM Users have to access the AWS resources using access and secret keys, which is a security concern.</li>\r\n\t<li><strong>Option B is not</strong> a feasible configuration.</li>\r\n\t<li><strong>Option C is CORRECT</strong> because it (a) creates an IAM Role with the needed permissions to connect to DynamoDB, (b) it authenticates the users with Web Identity Federation, and (c) the application accesses the DynamoDB with temporary credentials that are given by STS.</li>\r\n\t<li><strong>Option D is incorrect </strong>because creating the Active Directory (AD) server and using AD for authenticating are unnecessary and costly.</li>\r\n</ul>\r\n\r\n<p>See the note&nbsp;below for more information on AssumeRoleWithWebIdentity API.</p>\r\n\r\n<p>When you write such an app, you&#39;ll make requests to AWS services that must be signed with an AWS access key. However, we strongly recommend that you do not embed or distribute long-term&nbsp;AWS credentials with apps that users download to a&nbsp;device, even in an encrypted store. Instead, build your app to request temporary AWS security credentials dynamically when needed using web identity federation. The supplied temporary credentials map to an AWS role that has only the permissions needed to perform the tasks required by the mobile app</p>\r\n\r\n<p>For more information on web identity federation, please refer to the below link:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html\" target=\"_blank\">http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122966,
          "question_id": 98266,
          "answers": [
            {
              "choice": "<p>During the install and game configuration process, each user creates an IAM credential and assigns the IAM user to a group with proper permissions to communicate with DynamoDB</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM group that only gives access to your application and the DynamoDB tables. Then, when writing to DynamoDB, simply include the unique device ID to associate the data with that specific user</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM role with the proper permission policy to communicate with the DynamoDB table. Use web identity federation, which assumes the IAM role using AssumeRoleWithWebIdentity, when the user signs in, granting temporary security credentials using STS</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Active Directory server and an AD user for each mobile application user. When the user signs in to the AD sign-on, allow the AD server to federate using SAML 2.0 to IAM and assign a role to the AD user which is assumed with AssumeRoleWithSAML</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98267,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": 0,
      "lab_id": 0,
      "question_text": "<p>You are an AWS Solutions Architect. A company owns a large number of batch processing workloads in a local data center and plans to migrate these jobs to AWS Batch. The company has decided to use AWS Batch with Fargate. Which of the following situations are best suited to using AWS Batch with Fargate?</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answers: B and D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect.</strong> Because, for this option, the EC2 instance is more suitable as users can choose the instance configurations.</li>\r\n\t<li><strong>Option​ B is​ CORRECT.&nbsp;</strong>Because with Fargate, jobs can start faster at the initial scale-out of work as users do not need to wait for EC2 instances to launch.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect.&nbsp;</strong>Because the EC2 instance is more suitable as users need to customize the AMI and instance type. Users cannot do this with Fargate.</li>\r\n\t<li><strong>Option​ ​D ​is​ CORRECT.&nbsp;</strong>Because Fargate manages the servers and clusters of EC2 instances for AWS Batch jobs. Users do not need to worry about the details of compute resources.</li>\r\n\t<li><strong>Option​ E ​is​ ​incorrect.</strong> Because with Fargate, users cannot select instance types or the minimum number of vCPUs.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/batch/latest/userguide/fargate.html\" target=\"_blank\">https://docs.aws.amazon.com/batch/latest/userguide/fargate.html</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/batch/faqs/\" target=\"_blank\">https://aws.amazon.com/batch/faqs/</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123975,
          "question_id": 98267,
          "answers": [
            {
              "question_id": "98267",
              "choice": "<p>When a batch job needs access to particular instance configurations, including processors and GPUs</p>",
              "feedback": "",
              "correct": 0
            },
            {
              "question_id": "98267",
              "choice": "<p>When a batch job needs to be started fast at the initial scale-out of work</p>",
              "feedback": "",
              "correct": 1
            },
            {
              "question_id": "98267",
              "choice": "<p>When a batch job needs to use a compute environment based on a custom AMI and the instance type must be A1</p>",
              "feedback": "",
              "correct": 0
            },
            {
              "question_id": "98267",
              "choice": "<p>When users do not want to provision or scale clusters of virtual machines to run containers for AWS Batch jobs</p>",
              "feedback": "",
              "correct": 1
            },
            {
              "question_id": "98267",
              "choice": "<p>When a batch job needs the instance type to be C5 with multiple vCPUs</p>",
              "feedback": "",
              "correct": 0
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98268,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You currently have 9 EC2 instances running in a Cluster Placement Group. All these nine instances were initially launched at the same time and seemed to be performing as expected. You decide that you need to add two new instances to the group.&nbsp;However, when you attempt to do this, you receive a &#39;capacity error.&#39; Which of the following actions will most likely fix this problem? Choose the correct answer from the options below.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: B</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because to benefit from the enhanced networking, all the instances should be in the same Placement Group. Launching the new ones in a new Placement Group will not work in this case.</li>\r\n\t<li><strong>Option B is CORRECT</strong> because the most likely reason for the &quot;Capacity Error&quot; is that the underlying hardware may not have the capacity to launch any additional instances on it. If the instances are stopped and restarted, AWS may move the instances to a hardware that has the capacity for all the requested instances.</li>\r\n\t<li><strong>Option C is incorrect </strong>because there is no such limit on the number of instances in a Placement Group (however, you can not exceed your EC2 instance limit allocated to your account per region).</li>\r\n\t<li><strong>Option D is incorrect </strong>because the capacity error is not related to the instance size and ensures that the instances are of the same size will not resolve the capacity error.</li>\r\n</ul>\r\n\r\n<p><strong>More information on Cluster Placement Group</strong></p>\r\n\r\n<p>&nbsp;If you receive a capacity error when launching an instance in a placement group that already has running instances, stop and start all of the instances in the placement group, and try the launch again. Restarting the instances may migrate them to hardware that has the capacity for all the requested instances.</p>\r\n\r\n<p><strong>Cluster Placement Groups</strong></p>\r\n\r\n<p>A cluster placement group is a logical grouping of instances within a single Availability Zone. A placement group can span peered VPCs in the same region.</p>\r\n\r\n<p>Cluster placement groups are recommended for applications that benefit from low network latency, high network throughput, or both. The majority of the network traffic is between the instances in the group. To provide the lowest latency and the highest packet-per-second network performance for your placement group, choose an instance type supporting enhanced networking. For more information, see Enhanced Networking.</p>\r\n\r\n<p>We recommend that you launch the number of instances you need in the placement group in a single launch request and use the same instance type for all instances in the placement group. If you try to add more instances to the placement group later or try to launch more than one instance type in the placement group, you increase your chances of getting an insufficient capacity error.</p>\r\n\r\n<p>If you stop an instance in a placement group and then start it again, it still runs in the placement group. However, the start fails if there isn&#39;t enough capacity for the instance.</p>\r\n\r\n<p>If you receive a capacity error when launching an instance in a placement group that already has running instances, stop and start all of the instances in the placement group and try the launch again. Restarting the instances may migrate them to hardware that has capacity for all the requested instances.</p>\r\n\r\n<p><br />\r\nFor more information on this, please refer to the below URL</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html</a></li>\r\n</ul>\r\n\r\n<p><strong>Note:</strong>&nbsp;</p>\r\n\r\n<p>In this scenario, we are discussing the insufficient capacity error happening within a placement group.<br />\r\nAs per AWS docs,</p>\r\n\r\n<p>&quot;If you receive a capacity error when launching an instance in a placement group that already has running instances, stop and start all of the instances in the placement group, and try the launch again. Restarting the instances may migrate them to hardware that has capacity for all the requested instances.&quot;</p>\r\n\r\n<p>In our scenario, we already have 9 EC2 instances running on a placement group. When we tried to add 2 more to the group, we have encountered this error. So if we stop and restart all the instances, it will help resolve this issue as the restarting instances will migrate to a new hardware that will have the capacity for all the instances.<br />\r\n<br />\r\nFor more information, please refer to:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122969,
          "question_id": 98268,
          "answers": [
            {
              "choice": "<p>Create another placement group and launch new instances in that group. Make sure that both the placement groups are in the same subnet</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Stop and restart all the instances in the Placement Group and then try the launch again</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Request a capacity increase from AWS as you are initially limited to 10 instances per Placement Group</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Make sure all the instances are the same size and then try the launch again</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98269,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An auditor needs access to logs that record all the API events on AWS.&nbsp;The company has multiple AWS accounts, where the auditor needs access to all the logs for all the accounts. What is the best way to configure access for the auditor to view event logs from all accounts?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: D</strong></p>\r\n\r\n<p>You can have CloudTrail deliver log files from multiple AWS accounts into a single Amazon S3 bucket. For example, you have four AWS accounts with account IDs 111111111111, 222222222222, 333333333333, and 444444444444, and you want to configure CloudTrail to deliver log files from all four of these accounts to a bucket belonging to account 111111111111. To accomplish this, complete the following steps in order:</p>\r\n\r\n<ol>\r\n\t<li>\r\n\t<p>Turn on CloudTrail in the account where the destination bucket will belong (111111111111 in this example). Do not turn on CloudTrail in any other accounts yet.</p>\r\n\t</li>\r\n\t<li>\r\n\t<p>Update the bucket policy on your destination bucket to grant cross-account permissions to CloudTrail.</p>\r\n\t</li>\r\n\t<li>\r\n\t<p>Turn on CloudTrail in the other accounts you want (222222222222, 333333333333, and 444444444444 in this example). Configure CloudTrail in these accounts to use the same bucket belonging to the account that you specified in step 1 (111111111111 in this example).</p>\r\n\t</li>\r\n</ol>\r\n\r\n<p>The AWS CloudTrail service provides an option to deliver the log files for all the regions in a single S3 bucket. This feature is very useful when you need to access the logs related to all the resources in multiple regions for all the AWS accounts via a single S3 bucket. Please see the images below.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because delivering the logs in multiple buckets is an unnecessary overhead. Instead, you can have CloudTrail deliver the logs to a single S3 bucket.</li>\r\n\t<li><strong>Option B is incorrect</strong> because consolidated billing will not help the auditor to get the records of all the API events in AWS.&nbsp;</li>\r\n\t<li><strong>Option C is incorrect</strong> because there is no consolidated logging feature in AWS CloudTrail.</li>\r\n\t<li><strong>Option D is CORRECT</strong> because it delivers the logs pertaining to different AWS accounts to a single S3 bucket in the primary account and grants the auditor access to it.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-receive-logs-from-multiple-accounts.html\" target=\"_blank\">https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-receive-logs-from-multiple-accounts.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122970,
          "question_id": 98269,
          "answers": [
            {
              "choice": "<p>Configure the CloudTrail service in each AWS account, and make the logs delivered to an S3 bucket on each account, while granting the auditor permissions to the bucket via roles in the secondary accounts and a single primary IAM account that can assume a read-only role in the secondary AWS accounts</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the CloudTrail service in the primary AWS account and configure consolidated billing for all the secondary accounts. Then grant the auditor access to the S3 bucket that receives the CloudTrail log files</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the CloudTrail service in each AWS account and enable consolidated logging inside of CloudTrail</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the CloudTrail service in each AWS account and have the logs delivered to a single S3 bucket in&nbsp;a separate account. Provide the auditor to access only to this&nbsp;bucket</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98270,
      "topic_id": 2686,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are an AWS solutions architect and in charge of a migration project from local servers to AWS. AWS Server Migration Service has been configured to replicate a large number of VMware virtual machines to EC2 AMI. SMS already helps generating CloudFormation templates during the migration of applications. You also manually created several CloudFormation templates to create AWS resources including EC2. You wish to use a service to manage the resources created by CloudFormation templates centrally. And users can choose certain products and deploy them quickly. The service should also integrate with IAM to provide access control. Which method is the best for you to take?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answer​:&nbsp;C</strong></p>\r\n\r\n<p>AWS Service Catalog can help manage CloudFormation templates in portfolio and products. It also works with IAM to provide access control to the managed resources. Details can be found in</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/servicecatalog/latest/adminguide/what-is_concepts.html\" target=\"_blank\">https://docs.aws.amazon.com/servicecatalog/latest/adminguide/what-is_concepts.html</a>.</li>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect</strong>:​ Because AWS Config cannot be used to manage resources by tags.</li>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect</strong>:​ Because Resource Access Manager is used to share resources with other IAM accounts. It is unsuitable for this scenario.</li>\r\n\t<li><strong>Option​ ​C ​is​ CORRECT</strong>:​ Because in Service Catalog, you can add a product and link it with a CloudFormation template. Using this method, all CloudFormation templates can be managed as products in a portfolio.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong>:​ Because AWS Resource Groups cannot group the CloudFormation templates. Users cannot create CloudFormation stacks based on the groups either.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122973,
          "question_id": 98270,
          "answers": [
            {
              "choice": "<p>Manage resources in AWS Config via tags. Create resources and provide access control based on tags</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Configure and manage all CloudFormation templates in AWS Resource Access Manager. Assign different permissions to IAM users or roles</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create portfolio and products in AWS Service Catalog. Use IAM permissions to grant users access to the portfolio</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Create groups of CloudFormation templates in AWS Resource Groups. Assign related IAM permissions based on the group ARN</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Accelerate Workload Migration and Modernization"
    },
    {
      "question_id": 98271,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Singapore-based College is closed due to covid 19. College wants to continue Online classes. They are also looking for a solution to offer college-based applications/software/Labs to students easily. What device-agnostic solution for all college students will you suggest?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: B</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because using Amazon WorkSpace is not the right solution in this case.</li>\r\n\t<li><strong>Option B is Correct</strong> because Amazon AppStream offers a desktop-based application through streaming. Price is based on a monthly fee per streaming user and stream resource required for provisioning.</li>\r\n\t<li><strong>Option C is incorrect</strong> because &nbsp;Amazon WorkSpace is not the right solution in this case.</li>\r\n\t<li><strong>Option D is incorrect</strong> because the hourly fee&nbsp;per streaming user is the wrong statement here.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/appstream2/pricing/?nc=sn&amp;loc=4\" target=\"_blank\">https://aws.amazon.com/appstream2/pricing/?nc=sn&amp;loc=4</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/publicsector/fife-school-districts-use-amazon-appstream-2-0-to-provide-equitable-access/\" target=\"_blank\">https://aws.amazon.com/blogs/publicsector/fife-school-districts-use-amazon-appstream-2-0-</a><a href=\"https://aws.amazon.com/blogs/publicsector/fife-school-districts-use-amazon-appstream-2-0-to-provide-equitable-access/\">to-provide-equitable-access/</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122974,
          "question_id": 98271,
          "answers": [
            {
              "choice": "<p>You can suggest using Amazon AppStream 2.0 in VPC. Amazon&nbsp; AppStream 2.0 price is based on a monthly fee per streaming user and stream resource required for provisioning. Students can access the application through the Amazon WorkSpace</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>You can suggest using Amazon AppStream 2.0 in VPC. Amazon AppStream 2.0 price is based on a monthly fee per streaming user and stream resource required for provisioning. Students can access the application through the browser in their personal system</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>You can suggest to use Amazon WorkSpace and run them in always ON mode</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>You can suggest using Amazon AppStream 2.0. Amazon AppStream 2.0 price is based on an hourly fee per streaming user and stream resource required for provisioning. Students can access the application through the browser in their personal system</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98272,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your security officer has told you that you need to tighten up the logging of all events that occur on your AWS account. He wants to be able to access all events that occur on the account across all regions quickly and in the simplest possible manner. He also wants to make sure that he is the only person who can access these events in the most secure way possible. Which of the following would be the best solution to assure his requirements are met? Choose the correct answer from the options below.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: A</strong></p>\r\n\r\n<p>The main points to consider in this scenario is: (1)&nbsp; the security officer needs to access all events that occur on the account <strong>across all the regions</strong>, and (2) only that security officer should have the access.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is CORRECT </strong>because it configures only one S3 bucket for all the CloudTrail log events on the account across all the regions. It also restricts access to the security officer only via the bucket policy. See the images below:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_yw6lzg.png\" style=\"height:187px; width:750px\" /></p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_vkaauy.png\" style=\"height:214px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option B is incorrect </strong>because it uses Amazon Glacier vaults, an archival solution and is not used to store the CloudTrail logs.</li>\r\n\t<li><strong>Option C is incorrect </strong>because sending the API calls to CloudWatch is unnecessary. Also, notifying the security officer via email is not a good nor a secure architecture.</li>\r\n\t<li><strong>Option D is incorrect</strong> because CloudTrail provides an option where are all the logs get delivered to a single S3 bucket. Putting all the logs in separate buckets is an overhead .</li>\r\n</ul>\r\n\r\n<p><strong>More information on AWS CloudTrail</strong></p>\r\n\r\n<p>AWS CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing of your AWS account. With CloudTrail, you can log, continuously monitor, and retain events related to API calls across your AWS infrastructure. CloudTrail provides a history of AWS API calls for your account, including API calls made through the AWS Management Console, AWS SDKs, command-line tools, and other AWS services. This history simplifies security analysis, resource change tracking, and troubleshooting.</p>\r\n\r\n<p>You can design CloudTrail to send all logs to a central S3 bucket.</p>\r\n\r\n<p>For more information on CloudTrail, please visit the below URL:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/cloudtrail/\" target=\"_blank\">https://aws.amazon.com/cloudtrail/</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122975,
          "question_id": 98272,
          "answers": [
            {
              "choice": "<p>Use CloudTrail to log all events to one S3 bucket. Make this S3 bucket only accessible by your security officer with a bucket policy that restricts access to his user only and adds MFA to the policy for a further security level</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Use CloudTrail to log all events to an Amazon Glacier Vault. Make sure the vault access policy only grants access to the security officer&#39;s IP address</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use CloudTrail to send all API calls to CloudWatch and send an email to the security officer every time an API call is made. Make sure the emails are encrypted</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use CloudTrail to log all events to a separate S3 bucket in each region as CloudTrail cannot write to a bucket in a different region. Use MFA and bucket policies on all the different buckets</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98273,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are launching your first ElastiCache cache cluster and start using Memcached. Which of your following requirement is NOT supported by Memcached?&nbsp;Choose the correct answer from the options below.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer:&nbsp;B</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option B is CORRECT</strong> because it is Redis, not Memcached, which supports advanced/complexdata types such as strings, hashes, lists, sets, sorted sets, and bitmaps.</li>\r\n\t<li><strong>Options A, C and D are all incorrect</strong> because these are the main features of Memcached.</li>\r\n</ul>\r\n\r\n<p>For the exam, it is very important to remember the differences between Memcached and Redis. Both are excellent solutions, but used for different scenarios. Please see the notes given below by the AWS documentation:&nbsp;</p>\r\n\r\n<p><strong>Choose Memcached if the following apply to your situation:</strong></p>\r\n\r\n<ul>\r\n\t<li>You need the simplest model possible.</li>\r\n\t<li>You need to run large nodes with multiple cores or threads.</li>\r\n\t<li>You need the ability to scale out/in, adding and removing nodes as demand on your system increases and decreases.</li>\r\n\t<li>You need to cache objects, such as a database.</li>\r\n</ul>\r\n\r\n<p><strong>Choose Redis 2.8.x or Redis 3.2.4 (non-clustered mode) if the following apply to your situation:</strong></p>\r\n\r\n<ul>\r\n\t<li>You need complex data types, such as strings, hashes, lists, sets, sorted sets, and bitmaps.</li>\r\n\t<li>You need to sort or rank in-memory data-sets.</li>\r\n\t<li>You need persistence of your key store.</li>\r\n\t<li>You need to replicate your data from the primary to one or more read replicas for read-intensive applications.</li>\r\n\t<li>You need automatic failover if your primary node fails.</li>\r\n\t<li>You need publish and subscribe (pub/sub) capabilities&mdash;to inform clients about events on the server.</li>\r\n\t<li>You need backup and restore capabilities.</li>\r\n\t<li>You need to support multiple databases.</li>\r\n</ul>\r\n\r\n<p>For more information on the various caching engines, please visit the below URL:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/SelectEngine.Uses.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/SelectEngine.Uses.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122976,
          "question_id": 98273,
          "answers": [
            {
              "choice": "<p>Your&nbsp;ability to scale your cache horizontally as you grow</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>You can use more advanced data types, such as lists, hashes, and sets</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Your need for as&nbsp;simple a caching model as possible</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Object caching is your primary goal to offload your database</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98274,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In your organization, your DevOps team is in charge of provisioning resources in an AWS account. Tim was a team member and created a Customer Managed Key in KMS several months ago. The default key policy is removed, and the key policy is as below.</p>\r\n\r\n<pre class=\"brush:java;\">\r\n{\r\n&nbsp;&nbsp;&quot;Version&quot;: &quot;2012-10-17&quot;,\r\n&nbsp;&nbsp;&quot;Id&quot;: &quot;key-consolepolicy-1&quot;,\r\n&nbsp;&nbsp;&quot;Statement&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;{\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Sid&quot;: &quot;Enable IAM User Permissions&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Effect&quot;: &quot;Allow&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Principal&quot;: {&quot;AWS&quot;: &quot;arn:aws:iam::111122223333:user/Tim&quot;},\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Action&quot;: &quot;kms:*&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Resource&quot;: &quot;*&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;}\r\n&nbsp;&nbsp;]\r\n}</pre>\r\n\r\n<p>As Tim leaves the company, his accounts are deleted including the above IAM user. As a result, the CMK becomes unmanageable for other users to view or use. How should you deal with this problem?&nbsp;</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answer​: A</strong></p>\r\n\r\n<p>About the default and recommended key policies in KMS, check the AWS documentation in <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default\" target=\"_blank\">https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default</a>. The default key policy is as below:</p>\r\n\r\n<pre class=\"brush:java;\">\r\n{\r\n&nbsp; &quot;Sid&quot;: &quot;Enable IAM User Permissions&quot;,\r\n&nbsp; &quot;Effect&quot;: &quot;Allow&quot;,\r\n&nbsp; &quot;Principal&quot;: {&quot;AWS&quot;: &quot;arn:aws:iam::111122223333:root&quot;},\r\n&nbsp; &quot;Action&quot;: &quot;kms:*&quot;,\r\n&nbsp; &quot;Resource&quot;: &quot;*&quot;\r\n}</pre>\r\n\r\n<p>This allows the permissions of the key to be managed by IAM policies.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ CORRECT:​ </strong>Because even the root user cannot manage it. You have to contact AWS Support to restore it.</li>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect:​ </strong>Because the root user cannot manage the key policy either as the user is not allowed to do that.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect:​ </strong>Because the key policy cannot be modified by any IAM user anymore.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect:​ </strong>Because the key policy still denies the action even if the IAM user has an IAM policy to allow it.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122978,
          "question_id": 98274,
          "answers": [
            {
              "choice": "<p>&nbsp;Contact AWS Support to regain access to the CMK</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Log in as the root user of the AWS account and add another user as the key administrator</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use the IAM admin user to edit the key policy to allow all actions for the principal of arn:aws:iam::111122223333:root. Add other IAM users as key administrators or users if required</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM policy that allows the action of kms:PutKeyPolicy and attach the policy to an IAM user. Login into AWS console with the user and modify the key policy to the default one</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98275,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company asked you to create a mobile application. The application is built to work with DynamoDB as the backend and Javascript as the front end. During the application&#39;s usage, you notice that sometimes during the daytime, the write requests are throttled because of low provisioned write capacity. How can you effectively resolve this problem of DynamoDB in the easiest way?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: A</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is correct </strong>because users can enable Auto Scaling in DynamoDB.&nbsp;</li>\r\n\t<li><strong>Option B is incorrect</strong> because just increasing the write capacity of the DynamoDB table would not satisfy the requirement &quot;effectively manage DynamoDB&quot;. The problem only happens during the daytime. So there is a waste of provisioned resources when there are few requests at the night.</li>\r\n\t<li><strong>Option C is incorrect.</strong> Because you have to create a new&nbsp;SQS queue and modify&nbsp;the related logic for DynamoDB. This option is not the easiest one.</li>\r\n\t<li><strong>Option D is incorrect </strong>because launching a DynamoDB table in a Multi-AZ configuration with a global index would only increase data availability and would not solve the write contention issue.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/AutoScaling.html\" target=\"_blank\">https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/AutoScaling.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122982,
          "question_id": 98275,
          "answers": [
            {
              "choice": "<p>Enable DynamoDB Auto Scaling to meet the requirements</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Increase write capacity of DynamoDB to meet the peak loads</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use the SQS service to read messages in the queue and write these to DynamoDB</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Launch DynamoDB in Multi-AZ configuration with a global index to balance writes</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98276,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A manufacturing company whose head office is in Sydney, have plants in 16 locations across the world. Employees based in these 16 locations have to send their daily development data to AWS for storage and further analysis. Data size is expected to be in GBs. What is the best way to send the data to AWS?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is Incorrect</strong> because direct connect is ideal for clients who want&nbsp;to establish private connectivity between their on-prem network and AWS for some location. This is not the right solution for moving files from multiple locations.</li>\r\n\t<li><strong>Option B is Incorrect</strong> because snowball is ideal for clients moving a large bunch of data at once.</li>\r\n\t<li><strong>Option C is Correct</strong> because S3 Transfer acceleration gives the ability to write into the single S3 Bucket from various locations. It uses edge locations to move the data.</li>\r\n\t<li><strong>Option D is Incorrect</strong> because Transfer acceleration doesn&rsquo;t work with the Amazon Glacier storage class.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://www.youtube.com/watch?v=J2CVnmUWSi4\" target=\"_blank\">https://www.youtube.com/watch?v=J2CVnmUWSi4</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/about-aws/whats-new/2016/04/transfer-files-into-amazon-s3-up-to-300-percent-faster/\" target=\"_blank\">https://aws.amazon.com/about-aws/whats-new/2016/04/transfer-files-into-amazon-s3-up-to-</a><a href=\"http://aws.amazon.com/about-aws/whats-new/2016/04/transfer-files-into-amazon-s3-up-to- 300-percent-faster/\" target=\"_blank\"> 300-percent-faster/</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/s3/transfer-acceleration/\" target=\"_blank\">https://aws.amazon.com/s3/transfer-acceleration/</a></li>\r\n\t<li><a href=\"https://www.youtube.com/watch?v=HnUqH3hdz4I\" target=\"_blank\">https://www.youtube.com/watch?v=HnUqH3hdz4I</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122983,
          "question_id": 98276,
          "answers": [
            {
              "choice": "<p>They can send through AWS Direct Connect and store the data in Amazon S3</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>They can store the data in Amazon S3 and send it through Snowball</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>They can send through S3 Transfer acceleration and store the data in Amazon S3</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>They can store in Amazon Glacier and send through S3 Transfer acceleration</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98277,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You have just developed a new mobile application that handles analytics workloads on large-scale datasets stored on Amazon Redshift. Consequently, the application needs to access Amazon Redshift tables. Your company is asking to expand&nbsp;the scope of the application. Which of the following methods would be the best, both practically and security-wise, to access the tables?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: D</strong></p>\r\n\r\n<p>Tip: When a service, user, or application needs to access an AWS resource, always prefer creating an IAM Role over creating an IAM User.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because embedding keys in the application to access AWS resources is not a good architectural practice as it creates security concerns.</li>\r\n\t<li><strong>Option B is incorrect</strong> because the Redshift cluster uses the HSM certificate to connect to the client&#39;s HSM to store and retrieve the keys used to encrypt the cluster databases.</li>\r\n\t<li><strong>Option C is incorrect </strong>because the read-only policy is insufficient and embedding keys in the application to access AWS resources is not a good architectural practice as it creates security concerns.</li>\r\n\t<li><strong>Option D is CORRECT </strong>because (a) the IAM role allows the least privileged access to the AWS resource, (b) the web identity federation ensures the identity of the user, and (c) the user is given temporary credentials to access the AWS resource.</li>\r\n</ul>\r\n\r\n<p>For more information on IAM policies, please refer to the below link-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html\" target=\"_blank\">http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html</a></li>\r\n\t<li><a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html\" target=\"_blank\">http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122984,
          "question_id": 98277,
          "answers": [
            {
              "choice": "<p>Create an IAM user and generate encryption keys for that user. Create a policy for Redshift read-only access. Embed the keys in the application</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create an HSM client certificate in Redshift and authenticate using this certificate</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create a Redshift read-only access policy in IAM and embed those credentials in the application</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use roles that allow a web identity federated user to assume a role that allows access to the Redshift table by providing temporary credentials</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98278,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You have a legacy application running that uses an m4.large instance size and cannot scale with Auto Scaling, but only has peak performance 5% of the time. This is a huge waste of resources and money. So your Senior Technical Manager has set you the task of trying to reduce costs while still keeping the legacy application, having lesser memory requirements, running in the long-term as it should. Which of the following will best accomplish the task your manager has assigned you? Choose the correct answer from the options below.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: A</strong></p>\r\n\r\n<p>The AWS documentation clearly indicates using T2 EC2 instance types for those instances that often don&rsquo;t use CPU.</p>\r\n\r\n<p><strong>&nbsp;T2</strong></p>\r\n\r\n<p>T2 instances are Burstable Performance Instances that provide a baseline level of CPU performance with the ability to burst above the baseline.</p>\r\n\r\n<p>T2 Unlimited instances can sustain high CPU performance for as long as a workload needs it. For most general-purpose workloads, T2 Unlimited instances will provide ample performance without any additional charges. If the instance needs to run at higher CPU utilization for a prolonged period, it can also do so at a flat additional charge of 5 cents per vCPU-hour.</p>\r\n\r\n<p>CPU Credits govern the baseline performance and ability to burst. T2 instances receive CPU Credits continuously at a set rate depending on the instance size, accumulating CPU Credits when they are idle, and consuming CPU credits when active. T2 instances are a good choice for various general-purpose workloads, including microservices, low-latency interactive applications, small and medium databases, virtual desktops, development, build and stage environments, code repositories, and product prototypes. For more information, see Burstable Performance Instances.</p>\r\n\r\n<p>For more information on EC2 instance types, please see the below link:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/ec2/instance-types/\" target=\"_blank\">https://aws.amazon.com/ec2/instance-types/</a></li>\r\n\t<li><strong>Option B is INCORRECT</strong> because using a &quot;C4&quot; instance would incur more costs and as per the requirements of the question, we need to reduce the costs. Please refer to the below link for instances pricing.</li>\r\n\t<li><a href=\"https://aws.amazon.com/ec2/pricing/on-demand/\" target=\"_blank\">https://aws.amazon.com/ec2/pricing/on-demand/</a></li>\r\n\t<li><strong>Option C is INCORRECT </strong>because although &quot;t2.nano&quot; instance pricing is less, it has only 0.5 GiB of allocated memory, making the legacy application run too slow.</li>\r\n\t<li><strong>Option D is INCORRECT </strong>because there are chances that the spot instances would not be available when there is a need. Therefore, there are chances for the legacy application to break down for want of more instances when needed.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122986,
          "question_id": 98278,
          "answers": [
            {
              "choice": "<p>Use a &quot;t2.medium - 3 yr RI&quot; burstable performance instance</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Use a C4.large instance with enhanced networking</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use two t2.nano instances that have single Root I/O Virtualization</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use t2.nano instance and add spot instances when they are required</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98279,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": 0,
      "lab_id": 0,
      "question_text": "<p>Your company is running a microservice-based application. They are using DynamoDB to store the data and AWS API Gateway for managing the Rest APIs. They are also using Lambda non-proxy integration. The development team recently made a change&nbsp;to one Rest API method. After that, the API stopped working. You have been asked to troubleshoot the issue. Which is the correct statement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: B</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because we can make changes in the Rest APIs in AWS API Gateway.</li>\r\n\t<li><strong>Option B is Correct</strong> because updates to the method require Redeployment of the API.</li>\r\n\t<li><strong>Option C is Incorrect</strong> because an update to the stage doesn&rsquo;t require the Redeployment of the API.</li>\r\n\t<li><strong>Option D is incorrect</strong> because it&rsquo;s not mentioned in the question that they are using the caching.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/updating-api.html\" target=\"_blank\">https://docs.aws.amazon.com/apigateway/latest/developerguide/updating-api.html</a></li>\r\n\t<li><a href=\"https://www.youtube.com/watch?v=9ElpSPXk-g8\" target=\"_blank\">https://www.youtube.com/watch?v=9ElpSPXk-g8</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122992,
          "question_id": 98279,
          "answers": [
            {
              "question_id": "98279",
              "choice": "<p>You can&rsquo;t change the Rest APIs in AWS API Gateway</p>",
              "feedback": "",
              "correct": 0
            },
            {
              "question_id": "98279",
              "choice": "<p>As the development team has recently made&nbsp;a change in the method of the Rest API. They should Redeploy the API</p>",
              "feedback": "",
              "correct": 1
            },
            {
              "question_id": "98279",
              "choice": "<p>As the development team has recently made a change in the stage of the Rest API. They should Redeploy the API</p>",
              "feedback": "",
              "correct": 0
            },
            {
              "question_id": "98279",
              "choice": "<p>You should change the Cache time-to-live (TTL) value and update the Lambda Code</p>",
              "feedback": "",
              "correct": 0
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98897,
      "topic_id": 2687,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A popular real estate firm has recently moved to a hybrid cloud infrastructure that extends its data centers into AWS. They decide to allow on-premises users, who are already signed in using their corporate accounts, to manage AWS resources without the creation of separate IAM users for each of them. This is to avoid having two separate login accounts. As an AWS Solutions Architect of the firm, which of the following do you deem the most optimal way of authorizing users in this hybrid architecture?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option C is correct</strong> as - The idea is to provide temporary access to AWS resources to the existing users, but without creating new IAM users for them to avoid having to maintain two login accounts. This will require a setup where there is SSO for your users so they only need to sign in once in their on-premises network and can also access the AWS cloud at the same time. You can use a role to configure your SAML 2.0-compliant identity provider (IdP) and AWS to permit your federated users to access the AWS Management Console. The role grants the user permission to carry out tasks in the console.</li>\r\n\t<li><strong>Option A is incorrect</strong> - The use of AssumeRoleWithWebIdentity is wrong as it is only for Web Identity Federations (Facebook, Twitter, and other social logins). The purpose here is to provide access to the AWS console to users through their corporate identity provider.</li>\r\n\t<li><strong>Option B is incorrect</strong> for the same reason as listed for Option A - AssumeRoleWithWebIdentity is wrong as it is only for Web Identity Federations (Facebook, Twitter, and other social logins)</li>\r\n\t<li><strong>Option D is incorrect</strong> as GetSessionToken returns a set of temporary credentials for an AWS account or IAM user, which is again not needed here.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-custom-url.html\" target=\"_blank\">https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-custom-url.html</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/identity/federation/\" target=\"_blank\">https://aws.amazon.com/identity/federation/</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/security/how-to-establish-federated-access-to-your-aws-resources-by-using-active-directory-user-attributes/\" target=\"_blank\">https://aws.amazon.com/blogs/security/how-to-establish-federated-access-to-your-aws-resources-by-using-active-directory-user-attributes/</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 124255,
          "question_id": 98897,
          "answers": [
            {
              "choice": "<p>Authenticate using your on-premises SAML 2.0 &ndash; compliant IDP using STS and AssumeRoleWithWebIdentity to retrieve temporary security credentials, which enables your users to log in to the AWS console using a browser</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Extract AWS security credentials with Web Identity Federation using STS and AssumeRoleWithWebIdentity to enable users to log in to AWS</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Authenticate using your on-premises SAML 2.0 &ndash; compliant IDP, retrieve temporary credentials using STS, and provide federated access to the AWS console via AWS SSO endpoint on a browser</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Extract AWS security credentials with Web Identity Federation using STS and call the GetSessionToken&nbsp;API operation to provide temporary login to the users</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design Solutions for Organizational Complexity"
    },
    {
      "question_id": 98281,
      "topic_id": 2686,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company is planning to move an existing portal to AWS. Currently, it&rsquo;s running in on-premises. It is a 5-year-old portal developed on Java and MySQL 5.6. Your company is looking to dockerize the application and deploy it in a highly available environment in AWS. You also need a serverless compute engine for containers so that you do not need to provision and manage servers. Which of the following methods is the most suitable?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong>&nbsp;because the Client is looking to dockerize the App in a serverless environment. Amazon ECS with EC2 Launch Type is not the best case here.</li>\r\n\t<li><strong>Option B is incorrect</strong> because the Client is looking for dockerizing&nbsp;the App in a serverless environment. Amazon EC2 is not the best case here.</li>\r\n\t<li><strong>Option C is incorrect</strong> because ECS with EC2 Launch Type is not a serverless environment.</li>\r\n\t<li><strong>Option D is CORRECT</strong> because ECS with AWS Fargate Launch Type provides a highly available and serverless environment. This option meets the requirements of the question.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-dg.pdf\" target=\"_blank\">https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-dg.pdf</a></li>\r\n\t<li><a href=\"https://www.youtube.com/watch?v=4xqOoRPrnAw\" target=\"_blank\">https://www.youtube.com/watch?v=4xqOoRPrnAw</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/compute/migrating-your-amazon-ecs-containers-to-aws-fargate/\" target=\"_blank\">https://aws.amazon.com/blogs/compute/migrating-your-amazon-ecs-containers-to-aws-</a><a href=\"https://aws.amazon.com/blogs/compute/migrating-your-amazon-ecs-containers-to-aws- fargate/\" target=\"_blank\"> fargate/</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122993,
          "question_id": 98281,
          "answers": [
            {
              "choice": "<p>Deploy the Application on Amazon ECS with EC2 Launch Type and leverage Amazon RDS MySQL for the database</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the Application on Amazon EC2 and leverage the Amazon Aurora MySQL for the database</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Containerize the Java based application, store Container image in Docker Hub and deploy it in ECS with EC2 Launch Type. Leverage Amazon Aurora MySQL for the database</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Containerize the Java based application, store Container image in ECR and deploy it in ECS with AWS Fargate Launch Type. Leverage Amazon Aurora MySQL for the database</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Accelerate Workload Migration and Modernization"
    },
    {
      "question_id": 98282,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You have acquired a new contract from a client to move all of their&nbsp;existing infrastructures&nbsp;onto AWS. You notice that they are running some of their&nbsp;applications using multicast, and they need to keep it running as such when it is migrated to AWS. You discover that multicast is not available on AWS, as you cannot manage multiple subnets on a single interface on AWS, and a subnet can only belong to one availability zone. Which of the following would enable you to deploy legacy applications on AWS that require multicast?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: B</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because, although creating an Elastic Network Interfaces to communicate between the various subnets is a correct step, it would not be enough in this scenario unless a virtual overlay is set up on top.</li>\r\n\t<li><strong>Option B is CORRECT</strong> because TGW allows enabling multicast and select subnets to include in the multicast domain when associating VPC attachments.</li>\r\n\t<li><strong>Option C is incorrect </strong>because it would disrupt multicast, involve additional&nbsp;time and cost, and not add any value.</li>\r\n\t<li><strong>Option D is incorrect</strong> because VPC peering and multicast are not the same.</li>\r\n</ul>\r\n\r\n<p>For more information on Multicast in an Amazon VPC, please visit the URL below</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/vpc/latest/tgw/how-multicast-works.html\" target=\"_blank\">vpc-tgw-how-multicast-works</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122994,
          "question_id": 98282,
          "answers": [
            {
              "choice": "<p>Provide Elastic Network Interfaces to communicate between the subnets</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Rely on a Transit Gateway, enable multicast, and create a multicast domain associated with the relevant subnets</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Create all the subnets in a single VPC&nbsp;</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create all the subnets on a different VPC and use VPC peering between them</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98898,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are an AWS admin in an IT firm. Recently your firm ran into some complications due to different sets of security rules set for each application. The firm decides to use AWS Firewall Manager to make it easier to bring new applications and resources into compliance by enforcing a common set of security rules. The firm now counts on you to enable the AWS Firewall Manager for them. What are the mandatory prerequisites you should be aware of to use AWS Firewall Manager? (Select THREE)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answers: A, B&nbsp;and D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Options A, B&nbsp;and D are correct</strong> as they are mandatory pre-requisites&nbsp;to use AWS Firewall Manager. There are three mandatory pre-requisites and one optional pre-requisite to use AWS Firewall Manager.</li>\r\n\t<li>AWS Organizations&nbsp;- Your accounts must be part of&nbsp;AWS Organizations&nbsp;and have enabled all features.</li>\r\n\t<li>Set the AWS Firewall Manager Administrator Account&nbsp;- Firewall Manager must be associated with the management account of your AWS organization or associated with a member account that has the appropriate permissions. The account that you associate with Firewall Manager is called the Firewall Manager administrator account.</li>\r\n\t<li>Enable&nbsp;AWS Config&nbsp;on accounts&nbsp;- Enable AWS Config for each member account in your organization.</li>\r\n\t<li>Enable AWS Resource Access Manager (Optional)&nbsp;- To enable Firewall Manager to centrally configure AWS Network Firewalls or associate Amazon Route 53 Resolver DNS Firewall rules across accounts and VPCs, you must first enable sharing of resources using&nbsp;AWS Resource Access Manager.</li>\r\n\t<li><strong>Option C is incorrect</strong> as the creation of policy type takes place once the prerequisites stated above are completed.</li>\r\n\t<li><strong>Option E is incorrect</strong> as the question asks only for &ldquo;Mandatory prerequisites&rdquo;. This is an optional prerequisite.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/firewall-manager/\" target=\"_blank\">https://aws.amazon.com/firewall-manager/</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/firewall-manager/faqs/\" target=\"_blank\">https://aws.amazon.com/firewall-manager/faqs/</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 124256,
          "question_id": 98898,
          "answers": [
            {
              "choice": "<p>Your accounts must be part of&nbsp;AWS Organizations&nbsp;and must have enabled all features</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>The Firewall Manager must be associated with the management account of your AWS organization or associated with a member account that has the appropriate permissions</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Have a policy type ready for AWS WAF, and AWS Network Firewall, and specify the set of rules or protections you need in place</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Enable AWS Config for each member accounts in your organization</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Enable AWS Resource Access Manager to centrally configure AWS Network Firewalls or associate Amazon Route 53 Resolver DNS Firewall rules across accounts and VPCs</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98284,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A third-party auditor is being brought in to review security processes and configurations for all of a company&#39;s AWS accounts. Currently, the company does not use any on-premises identity provider. Instead, they rely on IAM accounts in each of their AWS accounts.&nbsp;Now the auditor needs read-only access to all AWS resources for each AWS account. The auditor has an IAM user in his AWS account. Given the requirements, what is the most secure and easiest method for architecting access for the security auditor? Choose the correct answer from the options below.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer:&nbsp;C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect </strong>because creating an IAM User for each AWS account is an overhead and less preferred way than creating IAM Role.</li>\r\n\t<li><strong>Option B is incorrect</strong> because the scenario says that the company does not have any on-premises identity provider. This method is not straightforward.</li>\r\n\t<li><strong>Option C is CORRECT</strong> because it creates an IAM Role with all the necessary permission policies that&nbsp;allow the auditor to assume it while accessing the resources.</li>\r\n\t<li><strong>Option D is incorrect</strong> because using the IAM Role with the required permissions is the preferred and more secure way of accessing the AWS resources than using the Amazon credentials. Also, this option does not use the Security Token Service that gives temporary credentials to log in. Hence this is a less secure way of accessing the AWS resources.</li>\r\n</ul>\r\n\r\n<p>For more information on IAM roles, please refer to the below URL-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html\" target=\"_blank\">http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122996,
          "question_id": 98284,
          "answers": [
            {
              "choice": "<p>Create an IAM user for each AWS account with read-only permission policies for the auditor, and disable each account when the audit is complete</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an on-premise AD server and enable SAML identity&nbsp;federation for single sign-on to each AWS account</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM role with read-only permissions to all AWS services in each AWS account. Allow&nbsp;the auditor IAM user to assume the ARN role for each AWS account</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Create a custom identity broker application that allows the auditor to use existing Amazon credentials to log into the AWS environments</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98285,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>The Japan-based fintech company is running applications in AWS. Those are mission-critical applications, and they want to analyze the application logs using Amazon Redshift. The applications forward the logs to a Kinesis Data Firehose. What do you suggest to send the records from Kinesis Data Firehose to Redshift?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: A</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is Correct</strong> because a Kinesis Data Firehose delivers your data to an S3 bucket first and then issues an Amazon Redshift&nbsp;<strong>COPY</strong>&nbsp;command to load the data into your Amazon Redshift cluster. Specify an S3 bucket that you own where the streaming data should be delivered. Create a new S3 bucket, or choose an existing bucket that you own.</li>\r\n\t<li><strong>Option B is incorrect</strong>&nbsp;because LOAD is not a valid command to move the data to Amazon Redshift.</li>\r\n\t<li><strong>Option C is incorrect</strong> because SQS cannot be used to send the data from Kinesis Firehose to Amazon Redshift.</li>\r\n\t<li><strong>Option D is incorrect</strong> because Lambda cannot be used to send the data from Kinesis Firehose to Amazon Redshift.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/firehose/latest/dev/create-destination.html#create-destination-redshift\" target=\"_blank\">https://docs.aws.amazon.com/firehose/latest/dev/create-destination.html#create-destination-redshift</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122997,
          "question_id": 98285,
          "answers": [
            {
              "choice": "<p>Configure Kinesis Data Firehose to deliver your data to the S3 bucket first and then issue an Amazon Redshift COPY command to load the data into your Amazon Redshift cluster</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon S3 to store raw data and send the data to Amazon Redshift using Load Command</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Directly send the data to Amazon Redshift using an SQS queue</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Directly send the data to Amazon Redshift using a custom Lambda fuction</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98286,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your supervisor tells you of&nbsp;a client who needs a two-tier web application that is&nbsp;publicly accessible and configured on AWS. The most important requirement is that MySQL must be used as the database, and it must be configured at the client&#39;s location in the most secure fashion. Which of the following solutions would be the best to ensure&nbsp;that the client&rsquo;s requirements are met?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: A</strong></p>\r\n\r\n<p>In this scenario, the main architectural consideration is that the database should remain on the client&#39;s data center.&nbsp;Since the database should not be hosted on the cloud, you cannot put the database in the public&nbsp;subnet in AWS.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is correct</strong>&nbsp;because it puts the application servers in the public subnet ( because it should be publicly accessible ) and keeps the database server at the client&#39;s data center. This is also a valid two-tiered architecture.</li>\r\n\t<li><strong>Option B is INCORRECT</strong> because VPC peering cannot establish the connection between on-premises and AWS VPC.</li>\r\n\t<li><strong>Option C is INCORRECT </strong>because the database cannot be on the public subnet. It is rather located at the client&#39;s data center as per the question.</li>\r\n\t<li><strong>Option D is INCORRECT</strong> because the database cannot be on the public subnet due to the posed security risk (against the question&#39;s requirements).</li>\r\n</ul>\r\n\r\n<p>The best option is to create a VPN connection for securing traffic, as shown below.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_j0vgh8.png\" style=\"height:382px; width:750px\" /></p>\r\n\r\n<p>For more information on VPN connections, please visit the below URL-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_VPN.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_VPN.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122998,
          "question_id": 98286,
          "answers": [
            {
              "choice": "<p>Build the application server on a public subnet and the database at the client&rsquo;s data center. Connect them with a VPN connection that uses IPsec</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Build the application server on the private subnet and the database at the client&#39;s data center. Connect them with a VPC peering connection</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Build the application server on a private subnet and the database on the public subnet with a NAT instance between them</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Build the application server on the private subnet and the database on the public subnet with a secure SSH connection to the public subnet from the client&#39;s data center</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98287,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company has an e-commerce platform that is expanding all over the globe. You have EC2 instances deployed in multiple regions. You want to monitor the performance of all of these EC2 instances. How will you set up CloudWatch to monitor EC2 instances in multiple regions?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: C</strong></p>\r\n\r\n<p>You can monitor AWS resources in multiple regions using a single CloudWatch dashboard. For example, you can create a dashboard that shows CPU utilization for an EC2 instance located in the&nbsp;us-west-2&nbsp;region with your billing metrics, which are located in the&nbsp;us-east-1&nbsp;region.</p>\r\n\r\n<p>Please see the following snapshot which shows how a global CloudWatch Dashboard looks.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_vf2fhs.png\" style=\"height:216px; width:750px\" /></p>\r\n\r\n<p>For more information on the Cloudwatch dashboard, please refer to the below URLs:</p>\r\n\r\n<ul>\r\n\t<li>Nov 8 2019 new anouncement:&nbsp;&nbsp;<a href=\"https://aws.amazon.com/about-aws/whats-new/2019/11/amazon-cloudwatch-launches-cross-account-cross-region-dashboards/\" target=\"_blank\">https://aws.amazon.com/about-aws/whats-new/2019/11/amazon-cloudwatch-launches-cross-account-cross-region-dashboards/</a></li>\r\n\t<li>Cross-region cross-account console:&nbsp; <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html\" target=\"_blank\">https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html</a></li>\r\n\t<li>Cross-Account Cross-Region Dashboards with Amazon CloudWatch:&nbsp; &nbsp;<a href=\"https://aws.amazon.com/blogs/aws/cross-account-cross-region-dashboards-with-amazon-cloudwatch/\" target=\"_blank\">https://aws.amazon.com/blogs/aws/cross-account-cross-region-dashboards-with-amazon-cloudwatch/</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 122999,
          "question_id": 98287,
          "answers": [
            {
              "choice": "<p>Create separate dashboards in every region</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Register instances running on different regions to CloudWatch</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Have one single dashboard that reports the metrics from CloudWatch pertaining to different regions</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>This is not possible</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98288,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a Redshift cluster for petabyte-scale data warehousing. The data within the cluster is easily reproducible from additional data stored on Amazon S3. The company wants to reduce the overall cost of running this Redshift cluster. Which scenario would meet best for the needs of the running cluster? Choose the correct answer from the options below.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer:&nbsp;B</strong></p>\r\n\r\n<p>Snapshots are point-in-time backups of a cluster. There are two types of snapshots:&nbsp;<em>automated</em>&nbsp;and&nbsp;<em>manual</em>. Amazon Redshift stores these snapshots internally in Amazon S3 using an encrypted Secure Sockets Layer (SSL) connection. If you need to restore from a snapshot, Amazon Redshift creates a new cluster and imports data from the snapshot that you specify.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect </strong>because AWS Redshift does not have the concept of read replica.</li>\r\n\t<li><strong>Option B is CORRECT</strong> because&nbsp; &quot;There is no additional charge for backup storage up to 100% of your provisioned storage for an active data warehouse cluster&quot;. Therefore, if we reduce&nbsp;to a 1-day retention period for the backup, we can save costs too.&nbsp;</li>\r\n\t<li><strong>Option C is incorrect </strong>because implementing daily backup is going to be more expensive than option B.</li>\r\n\t<li><strong>Option D is incorrect </strong>because we cannot get disabled manual snapshots. In this scenario, we need to reconfigure the automated snapshots.</li>\r\n</ul>\r\n\r\n<p>For more information on Redshift snapshots, please visit the below URLs:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/redshift/pricing/\" target=\"_blank\">https://aws.amazon.com/redshift/pricing/</a></li>\r\n\t<li><a href=\"http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html\" target=\"_blank\">http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123000,
          "question_id": 98288,
          "answers": [
            {
              "choice": "<p>Disable automated backups. Create a read-replica in another region for disaster recovery</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Enable automated snapshots but set the retention period to a lower number to reduce storage costs</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Implement daily backups but do not enable multi-region copy to save data transfer costs</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Disable manual snapshots on the cluster</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98289,
      "topic_id": 2687,
      "course_id": null,
      "case_study_id": 0,
      "lab_id": 0,
      "question_text": "<p>You&#39;re working as a consultant for a company that has a three-tier application. This architecture&#39;s application layer sends over 120Gbps of data&nbsp;during peak hours to and from Amazon S3. Currently, you&#39;re running two NAT gateways in two subnets to transfer the data from your private application layer to Amazon S3. You will also need to ensure that the instances receive software patches from a third-party repository. What architectural changes should be made, if any?&nbsp;</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: B</strong></p>\r\n\r\n<p>VPC Endpoints for Amazon S3 are easy to configure, highly reliable, and provide a secure connection to S3 that does not require a gateway or NAT instances. The&nbsp;EC2 instances running in private subnets of a VPC can now have controlled access to S3 buckets, objects, and API functions in the same region as the VPC. You can use an S3 bucket policy to indicate which VPCs and VPC Endpoints have access to your S3 buckets.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect </strong>because adding a third NAT Gateway for communicating with an S3 bucket is a costly solution compared to creating an S3 endpoint.</li>\r\n\t<li><strong>Option B is CORRECT</strong> because (a) you can securely connect with S3 via the S3 endpoint, and (b) even though you can connect to the S3 endpoint without requiring a NAT gateway, you still need to keep it because the instances in the VPC needs to receive the software patches from the third-party repository.&nbsp;</li>\r\n\t<li><strong>Option C is incorrect </strong>because you need to connect to the Amazon S3 via the VPC endpoint as the current NAT gateways may not be sufficient to handle the peak load.</li>\r\n\t<li><strong>Option D is incorrect </strong>because if you remove the NAT Gateway, the instances in the VPC will not be able to receive the software patches from the third-party repository.</li>\r\n</ul>\r\n\r\n<p>For more information on VPC endpoints, please refer to the below URL-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/aws/new-vpc-endpoint-for-amazon-s3/\" target=\"_blank\">https://aws.amazon.com/blogs/aws/new-vpc-endpoint-for-amazon-s3/</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html\">https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123290,
          "question_id": 98289,
          "answers": [
            {
              "question_id": "98289",
              "choice": "<p>NAT gateways support bandwidth scaling&nbsp;of up to 100 Gbps and two of them are running.&nbsp;Add a third NAT Gateway to a separate subnet to allow for any increase in demand</p>",
              "feedback": "",
              "correct": 0
            },
            {
              "question_id": "98289",
              "choice": "<p>Create a VPC S3 endpoint which allows for higher bandwidth, throughput as well as tighter security and keep the NAT gateways to receive the software patches from the third party repository</p>",
              "feedback": "",
              "correct": 1
            },
            {
              "question_id": "98289",
              "choice": "<p>NAT gateways support bandwidth scaling&nbsp;of up to 100 Gbps and&nbsp;two are running.&nbsp;No changes are required to improve this architecture</p>",
              "feedback": "",
              "correct": 0
            },
            {
              "question_id": "98289",
              "choice": "<p>Remove the NAT gateways and create a VPC S3 endpoint which allows for higher bandwidth throughput as well as tighter security</p>",
              "feedback": "",
              "correct": 0
            }
          ]
        }
      ],
      "topic_name": "Design Solutions for Organizational Complexity"
    },
    {
      "question_id": 98290,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are designing a photo-sharing mobile app. The application will store all pictures in a single Amazon S3 bucket. Users will upload pictures from their mobile devices directly to Amazon S3 and will be able to view and download their own pictures directly from Amazon S3. You want to configure security to handle the potential users in the most secure manner possible.</p>\r\n\r\n<p>What should be done by your server-side application when a new user registers on the photo-sharing mobile application?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: B</strong></p>\r\n\r\n<p>This scenario requires the mobile application to have access to the S3 bucket. There are potentially millions of users and proper security measures should be taken. It is suggested to set up a web identity federation through AWS Cognito.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_t35pmz.png\" style=\"height:422px; width:750px\" /></p>\r\n\r\n<p>You can let users sign in using a well-known third-party identity provider such as logging in with Amazon, Facebook, Google, or any OpenID Connect (OIDC) 2.0 compatible provider. You can exchange the credentials from that provider for temporary permissions to use resources in your AWS account. This is known as the&nbsp;<em>web identity federation</em>&nbsp;approach to temporary access. When you use web identity federation for your mobile or web application, you don&#39;t need to create custom sign-in codes or manage your own user identities. Using a web identity federation helps you keep your AWS account secure because you don&#39;t have to distribute long-term security credentials, such as IAM user access keys, with your application.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect </strong>because you should always grant short-term or temporary credentials for the mobile application. This option asks to create long-term credentials.</li>\r\n\t<li><strong>Option B is CORRECT</strong> because it configures the web identity federation through AWS Cognito by generating&nbsp;temporary security credentials using STS &quot;AssumeRole&quot; function.</li>\r\n\t<li><strong>Option C&nbsp;is incorrect</strong> because, it asks to create an IAM User, not the IAM Role - which is not a good solution. You should create an IAM Role to access the AWS Resource via the &quot;AssumeRole&quot; function.</li>\r\n\t<li><strong>Option D&nbsp;is incorrect </strong>because, it asks to create an IAM User, not the IAM Role - which is not a good solution. You should create an IAM Role to access the AWS Resource via the &quot;AssumeRole&quot; function.</li>\r\n</ul>\r\n\r\n<p>For more information on AWS temporary credentials, please refer to the below links-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html\" target=\"_blank\">http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html\" target=\"_blank\">https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc_cognito.html\" target=\"_blank\">https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc_cognito.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123002,
          "question_id": 98290,
          "answers": [
            {
              "choice": "<p>Create a set of long-term credentials using the AWS Security Token Service with appropriate permissions. Store these credentials in the mobile app and use them to access Amazon S3</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Set up web identity federation through Amazon Cognito for the mobile app. Use Cognito API operations to get a Cognito token and request temporary security credentials from AWS STS. Use the temporary credentials to access Amazon S3</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM user. Assign appropriate permissions to the IAM user Generate an access key and secret key for the IAM user, store them in the mobile app, and use these credentials to access Amazon S3</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM user. Update the bucket policy with appropriate permissions for the IAM user. Generate an Access Key and Secret Key for the IAM user, store them in the mobile app and use these credentials to access Amazon S3</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98291,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You have an application running on an EC2 Instance which will allow users to download files from a private S3 bucket using a pre-signed URL. Before generating the URL, the application should verify the existence of the file in S3. How should the application use AWS credentials to access the S3 bucket securely?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer:&nbsp;C</strong></p>\r\n\r\n<p>An IAM&nbsp;<em>role</em>&nbsp;is similar to a user. In that, it is an AWS identity with permission policies that determine what the identity can perform in AWS. However, instead of being uniquely associated with one person, a role is intended to be assumable by anyone who needs it. If a user is assigned a role, access keys are created dynamically and provided to the user.</p>\r\n\r\n<p>You can use roles to delegate access to users, applications, or services that don&#39;t normally have access to your AWS resources.</p>\r\n\r\n<p>Whenever the question presents you with a scenario where an application, user, or service wants to access another service, always prefer creating IAM Role over IAM User. The reason being that when an IAM User is created for the application, it has to use the security credentials such as access key and secret key to use the AWS resource/service. This has security concerns. Whereas, when an IAM Role is created, it has all the necessary policies attached to it. So, the use of the access key and the secret key is not needed. This is the preferred approach.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because you should use the IAM Role.&nbsp;See the explanation given above.</li>\r\n\t<li><strong>Option B is incorrect </strong>because instead of IAM User, you should use the IAM Role. See the explanation given above.</li>\r\n\t<li><strong>Option C is CORRECT </strong>because (a) it creates the IAM Role with appropriate permissions, and (b) the application accesses the AWS Resource using that role.</li>\r\n\t<li><strong>Option D is incorrect</strong> because instead of IAM User, you should use the IAM Role. See the explanation given above.</li>\r\n</ul>\r\n\r\n<p>For more information on IAM roles, please visit the below URL-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html\" target=\"_blank\">http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123003,
          "question_id": 98291,
          "answers": [
            {
              "choice": "<p>Use the AWS account access Keys. The application retrieves the credentials from the source code of the application</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM user for the application with permissions that allow list access to the S3 bucket, launch the instance as the IAM user, and retrieve the IAM user&rsquo;s credentials from the EC2 instance user data</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM role for EC2 that allows permission to list objects in the S3 bucket. Launch the instance with that&nbsp;role and assume&nbsp;the role&rsquo;s credentials from the EC2 Instance metadata</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM user for the application with permissions that allow list access to the S3 bucket. The application retrieves the IAM user credentials from a temporary directory with permissions that allow read access only to the application user</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98292,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A benefits enrollment company hosts a 3-tier web application running in a VPC on AWS which includes a NAT (Network Address Translation) instance in the public Web tier. There is enough provisioned capacity for the expected workload for the new fiscal year benefit enrollment period plus some extra overhead. Enrollment proceeds nicely for two days, but&nbsp;the web tier becomes unresponsive upon investigation using CloudWatch and other monitoring tools. It is discovered that there is a huge and unanticipated amount of inbound traffic coming from a set of 15 specific IP addresses over port 80 from a country where the benefits company has no customers. The web tier instances are so overloaded that benefit enrollment administrators cannot even SSH into them. Which activity would be useful in defending against this attack?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: D</strong></p>\r\n\r\n<p>In this scenario, the attack comes from a set of certain IP addresses over a specific port from a specific country. You are supposed to defend against this attack.&nbsp;</p>\r\n\r\n<p>In such questions, always think about two options: Security groups and Network Access Control List (NACL). Security Groups operate at the individual instance level, whereas NACL operates at the subnet level. You should always fortify the NACL first, as it is encounter first during the communication with the instances in the VPC.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because IP addresses cannot be blocked using the route table or IGW.</li>\r\n\t<li><strong>Option B is incorrect </strong>because changing the NAT instance&#39;s EIP cannot block the incoming traffic from a particular IP address.</li>\r\n\t<li><strong>Option C is incorrect </strong>because (a) you cannot deny port access using security groups, and (b) by default all requests are denied; you open access for a particular IP address or range. You cannot deny access to particular IP addresses using security groups.</li>\r\n\t<li><strong>Option D is CORRECT</strong> because (a) you can add deny rules in NACL and block access to certain IP addresses. See an example below.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_gak95i.png\" style=\"height:321px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Security.html\" target=\"_blank\">https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Security.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123004,
          "question_id": 98292,
          "answers": [
            {
              "choice": "<p>Create a custom route table associated with the web tier and block the attacking IP addresses from the IGW (Internet Gateway)</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Change the EIP (Elastic IP Address) of the NAT instance in the web tier subnet and update the Main Route Table with the new EIP</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create 15 Security Group rules to block the attacking IP addresses over port 80</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create an inbound NACL (Network Access Control List) associated with the web tier subnet with deny rules to block the attacking IP addresses</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98293,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your fortune 500 company has undertaken a TCO analysis evaluating the use of Amazon S3 versus acquiring more hardware. The outcome was that all employees would be granted access to use Amazon S3 for storage of their personal documents. Which of the following will you need to consider so that you can set up a solution that incorporates a single sign-on from your corporate AD or LDAP directory?</p>\r\n\r\n<p>Choose 3 options from the below.</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answers: A, B and D</strong></p>\r\n\r\n<p>In questions like this where an application or user needs to be given access using Single Sign On (SSO), the following steps are very important.</p>\r\n\r\n<p>(i) setting up an identity provider for federated access</p>\r\n\r\n<p>(ii) authenticating users using corporate data store or&nbsp;active directory-user-attributes.</p>\r\n\r\n<p>(iii) getting temporary access tokens/credentials using AWS STS</p>\r\n\r\n<p>(iv) creating the IAM Role that has access to the needed AWS Resources</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is CORRECT </strong>because as mentioned above, setting up an identity provider for federated access is needed.</li>\r\n\t<li><strong>Option B is CORRECT </strong>because as mentioned above, getting temporary access tokens/credentials using AWS STS is needed.</li>\r\n\t<li><strong>Option C is incorrect</strong> because tagging each folder in a bucket does not help in this scenario.</li>\r\n\t<li><strong>Option D is CORRECT</strong> because as mentioned above, creating the IAM Role that has access to the needed AWS Resources is needed.</li>\r\n\t<li><strong>Option E is incorrect </strong>because you should be creating IAM Roles rather than IAM Users.&nbsp;</li>\r\n</ul>\r\n\r\n<p>The diagram below showcases how authentication is carried out when having an identity broker. This is an example of a SAML connection, but the same concept holds true for getting access to an AWS resource.</p>\r\n\r\n<p>&nbsp;<img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_cl3rab.png\" style=\"height:373px; width:750px\" /></p>\r\n\r\n<p>For more information on federated access, please visit the below link-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_federated-users.html\" target=\"_blank\">http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_federated-users.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123005,
          "question_id": 98293,
          "answers": [
            {
              "choice": "<p>Setting up a federation proxy or identity provider</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Using AWS Security Token Service to generate temporary tokens</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Tagging each folder in the bucket</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Configuring IAM roles that have suitable permissions to the related S3 resources</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Setting up a matching IAM user for every user in your corporate directory that needs access to a folder in the bucket</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98294,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are implementing a URL whitelisting system for a company that wants to restrict outbound HTTPS connections to specific domains from their EC2-hosted applications. You deploy a single t2.micro EC2 instance running proxy software and configure it to accept traffic from all subnets and EC2 instances in the VPC. You configure the proxy to only pass through traffic to domains that you define in its whitelist configuration.</p>\r\n\r\n<p>You have a nightly maintenance window or 10 minutes where all instances fetch new software updates. Each update is different and has about 200MB in size. There are 500 instances In the VPC that routinely fetch updates. There is no issue for most of the days. However, you notice that some machines fail to download certain software updates within the maintenance window for a few days. The download URLs used for these updates are correctly listed in the proxy&rsquo;s whitelist configuration, and you can access them manually using a web browser on the instances. What might be happening?</p>\r\n\r\n<p>Choose an answer&nbsp;from the options below.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: A&nbsp;</strong></p>\r\n\r\n<p>This scenario contains the following main points: (1) there is a single EC2 instance running proxy software that either acts as or connects to a NAT instance. The NAT instances are not AWS managed; they are user-managed; so, it may become the bottleneck, (2) there is a whitelist maintained so that limited outside access is given to the instances inside VPC, (3) the URLs in the whitelist are correctly maintained. Hence, whitelist is not an issue, (4) only some machines are having download problems with some updates. i.e. some updates are successful on some machines.</p>\r\n\r\n<p>This indicates that there is no setup issue, but most likely, it is the proxy instance that is a bottleneck and under-performing or inconsistently performing. As the proxy instance is not part of an auto-scaling group, its size must be definitely the issue.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is CORRECT </strong>because due to the limited size of the proxy instance, its network throughput might not be sufficient to provide service to all the VPC instances (as only some of the instances are not able to download the updates).</li>\r\n\t<li><strong>Option B is incorrect </strong>because limited storage on the proxy instance should not cause other instances of any problems in downloading the updates.</li>\r\n\t<li><strong>Option C is incorrect</strong> because proxy instances are supposed to be in a public subnet, but the allocation of EIPs should not cause any issues for other instances in the VPC.</li>\r\n\t<li><strong>Option D&nbsp;is incorrect </strong>because none of the instances would get the updates if this were the case. However, some of the instances could get the updates.&nbsp;So&nbsp;this cannot be the case.&nbsp;</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123006,
          "question_id": 98294,
          "answers": [
            {
              "choice": "<p>You are running the proxy on an undersized EC2 instance type. So network throughput is not sufficient for all instances to download their updates in time</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>You have not allocated enough storage to the EC2 instance running the proxy. So the network buffer is filling up causing some requests to fail</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>You are running the proxy in a private subnet but&nbsp;have not allocated enough EIP&rsquo;s to support the needed network throughput through the Internet Gateway (IGW)</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The route table for the subnets containing the affected EC2 instances is not configured to direct network traffic for the software update locations to the proxy</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98899,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial company was recently a victim of suspicious activity and plans to use Amazon Detective to make it easy to analyze, investigate, and quickly identify the root cause of potential security issues or suspicious activities. The company would want to manage multiple accounts with Amazon Detective due to its huge amount of data. As an AWS Architect for the company, what would you suggest from the following options as the best available solution?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option C is correct</strong> as Amazon Detective is a multi-account service that aggregates data from monitored member accounts under a single&nbsp;administrative account within the same region. You can configure multi-account monitoring deployments in the same way that you configure&nbsp;administrative and member accounts in Amazon GuardDuty and AWS Security Hub.</li>\r\n\t<li><strong>Options A and B are incorrect</strong> as it says Amazon Detective is a single-account service.</li>\r\n\t<li><strong>Option D is incorrect</strong> as it says the data is aggregated under a single&nbsp;administrative account globally. It is within that region and not global.</li>\r\n</ul>\r\n\r\n<p><strong>References: </strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/detective/faqs/\" target=\"_blank\">https://aws.amazon.com/detective/faqs/</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/detective/latest/adminguide/detective-prerequisites.html\" target=\"_blank\">https://docs.aws.amazon.com/detective/latest/adminguide/detective-prerequisites.html</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/detective/\" target=\"_blank\">https://aws.amazon.com/detective/</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 124257,
          "question_id": 98899,
          "answers": [
            {
              "choice": "<p>Amazon Detective is a single-account service that aggregates data from monitored member accounts under a single&nbsp;administrative account globally. Hence, not possible to manage multiple accounts with Amazon Detective</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Detective is a single-account service that aggregates data from monitored member accounts under a single&nbsp;administrative account within the same region. Hence, not possible to manage multiple accounts with Amazon Detective</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Detective is a multi-account service that aggregates data from monitored member accounts under a single&nbsp;administrative account within the same region. Hence, it&rsquo;s possible to manage multiple accounts with Amazon Detective</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Detective is a multi-account service that aggregates data from monitored member accounts under a single&nbsp;administrative account globally. Hence, it&rsquo;s possible to manage multiple accounts with Amazon Detective</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98296,
      "topic_id": 2687,
      "course_id": null,
      "case_study_id": 0,
      "lab_id": 0,
      "question_text": "<p>A large real-estate brokerage is exploring the option of adding a cost-effective location-based alert to their existing mobile application. The application backend infrastructure currently runs on AWS. Users who opt for&nbsp;this service will receive alerts on their mobile devices regarding real-estate offers in proximity to their location. For the alerts to be relevant, delivery time needs to be in the low minute count. The existing mobile app has 5 million users across the US. Which one of the following architectural suggestions would you make to the customer?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: C</strong></p>\r\n\r\n<p>The scenario has the following architectural considerations: (1) the users should get notifications about the real estate in the area near to their location, (2) only subscribed users should get the notification, (3) the notification delivery should be fast, (4) the architecture should be scalable, and (5) it should be cost-effective.</p>\r\n\r\n<p>When the question has considerations for scalability, always think about DynamoDB as it is the most recommended database solution to handle the huge amount of data/records. For automated notifications, always think about SNS.&nbsp;</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect </strong>because sending notifications via mobile earners/device providers as alerts is neither feasible nor cost-effective.&nbsp;</li>\r\n\t<li><strong>Option B is incorrect</strong> because receiving location via Direct Connect and carrier connection is not cost-effective.&nbsp;It also does not deal with subscriptions. Sending notifications via mobile carriers as the alert is not cost-effective as well.</li>\r\n\t<li><strong>Option C is CORRECT </strong>because (a) SQS is a highly scalable, cost-effective solution for carrying out utility tasks such as holding the location of millions of users, (b) it uses highly scalable DynamoDB, and (c) it uses the cost-effective AWS SNS Mobile Push service to send push notification messages directly to apps on mobile devices.</li>\r\n\t<li><strong>Option D is incorrect</strong> because the AWS SNS Mobile Push service is used to send push notification messages to the mobile devices, not to get the mobile devices&#39; location.</li>\r\n</ul>\r\n\r\n<p>For more information on AWS SNS Mobile Push, please see the diagram and link given below:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html\" target=\"_blank\">https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html</a></li>\r\n</ul>\r\n\r\n<p><strong>Note:</strong></p>\r\n\r\n<p>Option C says that the mobile application will send the device location to the processing EC2 instances using SQS. Then the instances would look at the DynamoDB database for offers relevant to the location. Then finally, SNS&nbsp;Mobile Push, which is part of SNS, will be used to send offers to the mobile application. So it leverages both SQS as well as SNS functionality for different parts of the architecture. This is the correct solution to this problem.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123288,
          "question_id": 98296,
          "answers": [
            {
              "question_id": "98296",
              "choice": "<p>The mobile application will submit its location details to a web service endpoint using ELB and EC2 instances. DynamoDB will be used to store and retrieve the relevant offers from EC2 instances, which would then communicate with mobile carriers or device providers to push alerts back to the mobile application</p>",
              "feedback": "",
              "correct": 0
            },
            {
              "question_id": "98296",
              "choice": "<p>Use AWS DirectConnect or VPN to establish connectivity with the mobile carrier.&nbsp;EC2 instances will receive the mobile application&#39;s location details through the mobile carrier. RDS will be used to store and retrieve the relevant offers. EC2 instances will communicate with the mobile carrier&nbsp;to push alerts back to the mobile application</p>",
              "feedback": "",
              "correct": 0
            },
            {
              "question_id": "98296",
              "choice": "<p>SQS ( buffer storage ) would be used to capture the device location details sent from the Mobile application. EC2 instances will process the messages from the SQS queue and retrieve the relevant offers from DynamoDB. SNS Mobile Push will be used to send offers to the mobile application</p>",
              "feedback": "",
              "correct": 1
            },
            {
              "question_id": "98296",
              "choice": "<p>The mobile application will send the device location&#39;s details using the SNS&nbsp;Mobile Push. EC2 instances will retrieve the relevant offers from DynamoDB. EC2 instances will communicate with the mobile carrier or the device provider&nbsp;to push alerts back to the mobile application</p>",
              "feedback": "",
              "correct": 0
            }
          ]
        }
      ],
      "topic_name": "Design Solutions for Organizational Complexity"
    },
    {
      "question_id": 98297,
      "topic_id": 2686,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A newspaper organization has an on-premises application that allows the public to search its back catalog and retrieve individual newspaper pages via a website written in Java. It also has a commercial search application nearing its end of life. They scanned the old newspapers into JPEGs which are of a total size of 17TB and used Optical Character Recognition (OCR) to populate a commercial search product. The organization wants to migrate its archive to AWS and produce a cost-efficient, highly available, and durable architecture. Which of the below options is the most appropriate?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: C</strong></p>\r\n\r\n<p>This question presents the following scenarios: (1) type of storage that can store a large amount of data (17TB), (2)&nbsp;the architecture should be cost-effective, highly available, and durable.</p>\r\n\r\n<p>Tip: Whenever a storage service stores a large amount of data with low cost, high availability, and high durability, always think about using S3.&nbsp;</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect </strong>because even though it uses S3, it uses the commercial search software at the end of its life.</li>\r\n\t<li><strong>Option B is incorrect</strong> because striped EBS is not as durable of a solution as S3 and certainly not as cost-effective as S3. Also, it has maintenance overhead.</li>\r\n\t<li><strong>Option C is CORRECT</strong> because (a) it uses S3 to store the cost-effective images, (b) for more efficiency, it uses OpenSearch for query processing, and (c) with an Auto Scaling group&nbsp;in multi-AZs, it achieves high availability.</li>\r\n\t<li><strong>Option D is incorrect </strong>because it does not have high availability with a single AZ RDS instance.</li>\r\n\t<li><strong>Option E is incorrect</strong> because (a) this configuration is not scalable, and (b) it does not mention any origin for the CloudFront distribution.</li>\r\n</ul>\r\n\r\n<p>For more information on Amazon OpenSearch, please visit the below link-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/opensearch-service/\" target=\"_blank\">https://aws.amazon.com/opensearch-service/</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123009,
          "question_id": 98297,
          "answers": [
            {
              "choice": "<p>Use S3 to store and serve the scanned files. Install the commercial search application on EC2 Instances and configure it with Auto-Scaling and an Elastic Load Balancer</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Model the environment using CloudFormation. Use an EC2 instance running Apache webserver and an open-source search application, stripe multiple standard EBS volumes together to store the JPEGs and search index</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use S3 to store and serve the scanned files. Use Amazon&nbsp;OpenSearch for query processing, and use an Auto Scaling group&nbsp;to host the website across multiple availability zones</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Use a single-AZ RDS MySQL instance to store the search index for the JPEG images and use an EC2 instance to serve the website and translate user queries into SQL</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use a CloudFront download distribution to serve the JPEGs to the end users. Install the current commercial search product, along with a Java Container for the website on EC2 instances and use Route53 with DNS round-robin</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Accelerate Workload Migration and Modernization"
    },
    {
      "question_id": 98298,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your customer is willing to consolidate their log streams, access logs, application logs, security logs, etc. in one single system. Once consolidated, the customer wants to analyze these logs in real time based on heuristics. From time to time, the customer needs to validate heuristics, which requires going back to data samples extracted from the last 12 hours. What is the best approach to meet your customer&rsquo;s requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: B</strong></p>\r\n\r\n<p>Whenever the scenario - just like this one - wants to do real-time processing of a stream of data, always think about Amazon Kinesis. According to the AWS documentation;</p>\r\n\r\n<p>The default retention period of 24 hours covers scenarios where intermittent lags in processing require catch-up with the real-time data.<br />\r\nA seven-day retention lets you reprocess data for up to seven days to resolve potential downstream data losses.<br />\r\nLong-term data retention greater than seven days and up to 365 days lets you reprocess old data.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because SQS is not used for real-time processing of the stream of data.</li>\r\n\t<li><strong>Option B is CORRECT</strong> because Amazon Kinesis Data Streams is best suited for applying the real-time processing of the stream of data. Also, the records of the stream are available for 24 hours in Kinesis.</li>\r\n\t<li><strong>Option C is incorrect</strong> because CloudTrail is not used to process real-time data processing, and EMR is used for batch processing.</li>\r\n\t<li><strong>Option D is incorrect</strong> because setting autoscaling of EC2 instances is not cost-effective, and EMR is used for batch processing.</li>\r\n</ul>\r\n\r\n<p>For more information on Kinesis, please visit the below URL-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/kinesis/data-streams/faqs/\" target=\"_blank\">https://aws.amazon.com/kinesis/data-streams/faqs/</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123010,
          "question_id": 98298,
          "answers": [
            {
              "choice": "<p>Send all the log events to Amazon SQS. Setup an Auto Scaling group of EC2 servers to consume the logs and apply the heuristics</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Send all the log events to Amazon Kinesis Data Streams. Develop a client process to apply heuristics to the logs</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon Cloud Trail to receive custom logs and&nbsp;use EMR to apply heuristics to the logs</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Setup Auto Scaling group of EC2 Syslog servers and&nbsp;store the logs S3 use EMR to apply heuristics on the logs</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98299,
      "topic_id": 2686,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A team is developing a feature that needs to recognize Celebrities. By using the App, clients can upload photos and search celebrities among the photos by clicking a button. Or they can upload a bunch of photos and search the times that a given celebrity has appeared. The team wants to run the App&nbsp;in AWS at a lower cost. Which option is the most efficient one to implement while still ensuring availability and stability?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: C</strong></p>\r\n\r\n<p>As the question asks for a lower cost while still ensuring availability and stability. Lambda should be considered first. Lambda can autoscale without manual operations. More importantly, it is very efficient to develop a web app without considering a lot about OS, patching, etc.</p>\r\n\r\n<p>Amazon Rekognition can recognize thousands of celebrities in a wide range of categories, such as entertainment and media, sports, business, and politics. With Amazon Rekognition, you can recognize celebrities in images and stored videos. You can also get additional information for recognized celebrities.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect:</strong> Because EC2 does not cost-efficient and brings in extra cost if the load is not stable. Lambda should be considered instead.</li>\r\n\t<li><strong>Option B is incorrect:</strong> Because Rekognition API &ldquo;RecognizeCelebrities&rdquo; should be used in this case. For each celebrity recognized, &ldquo;RecognizeCelebrities&rdquo; returns a Celebrity object. The Celebrity object contains the celebrity name, ID, URL links to additional information, match confidence, and a ComparedFace object that you can use to locate the celebrity&#39;s face on the image. &ldquo;SearchFaces&rdquo; is incorrect as it is not used to search Celebrities.</li>\r\n\t<li><strong>Option C is CORRECT: </strong>Because Lambda together with Rekognition can meet the need for low cost, availability, and stability. Refer to <a href=\"https://docs.aws.amazon.com/rekognition/latest/dg/celebrities.html\" target=\"_blank\">https://docs.aws.amazon.com/rekognition/latest/dg/celebrities.html</a> for this feature.</li>\r\n\t<li><strong>Option D is incorrect: </strong>Because firstly, it has used EC2. Even if Autoscaling and ELB are used, it is not as efficient as Lambda. Secondly, API &ldquo;SearchFaces&rdquo; should not be used for the function of Celebrities Recognition.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123011,
          "question_id": 98299,
          "answers": [
            {
              "choice": "<p>Create the frontend and backend in a T2 medium EC2 instance to use its burstable capability. Call Rekognition API &ldquo;RecognizeCelebrities&rdquo; to fetch the information in a JSON format. Process the JSON result in the backend service and return the result to the frontend UI</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Develop the App&nbsp;in a serverless lambda to use Rekognition API &ldquo;SearchFaces&rdquo; to search a Celebrity. The input image can be base64-encoded bytes or an S3 object. After the API has been returned, present the result to clients</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use the AWS Rekognition service. Implement the App&nbsp;in a lambda to call Rekognition API &ldquo;RecognizeCelebrities&rdquo; to fetch the information required in a JSON format. Process the information in Lambda and return the result to end-users. Use S3 for clients to upload photos</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Implement the App&nbsp;in an M4 large EC2 instance&nbsp;with Autoscaling and Elastic Load Balancer. Build the application via a Cloudformation template. Use the App&nbsp;to call Rekognition API &ldquo;SearchFaces&rdquo; to get the information. Process the JSON result in the backend service and return the result to the frontend with a Cloudfront CDN</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Accelerate Workload Migration and Modernization"
    },
    {
      "question_id": 98300,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A team has just received a task to build an application that needs to recognize faces in streaming videos. They will get the source videos from a third party that uses a container format (MKV).</p>\r\n\r\n<p>The APP should be able to quickly address faces through the video in real-time and save the output in a suitable manner for downstream to process. As recommended by the AWS Solutions Architect colleague, they would like to develop the service using AWS Rekognition. Which below options are needed to accomplish the task? (Select THREE)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct&nbsp;Answers: B, C&nbsp;and&nbsp;F</strong></p>\r\n\r\n<p>Facial recognition in live videos&nbsp;is different from that in photos. Kinesis is required to meet the needs of the real-time process. Amazon Rekognition Video uses Amazon Kinesis Video Streams to receive and process a video stream. The analysis results are output from Amazon Rekognition Video to a Kinesis data stream and then read by your client application. Amazon Rekognition Video provides a stream processor (<a href=\"https://docs.aws.amazon.com/rekognition/latest/dg/API_CreateStreamProcessor.html\" target=\"_blank\">CreateStreamProcessor</a>) that you can use to start and manage the analysis of streaming video.</p>\r\n\r\n<p>In summary, the below 3 items are needed for Amazon Rekognition Video with streaming video.</p>\r\n\r\n<ul>\r\n\t<li>A Kinesis video stream for sending streaming video to Amazon Rekognition Video. For more information, see the&nbsp;<a href=\"https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/what-is-kinesis-video.html\" target=\"_blank\">Kinesis Video stream</a>.</li>\r\n\t<li>An Amazon Rekognition Video stream processor to manage the analysis of the streaming video. For more information, see <a href=\"https://docs.aws.amazon.com/rekognition/latest/dg/streaming-video-starting-analysis.html\" target=\"_blank\">Starting Streaming Video Analysis</a>.</li>\r\n\t<li>A Kinesis data stream consumer to read the analysis results that Amazon Rekognition Video sends to the Kinesis data stream. For more information, see <a href=\"https://docs.aws.amazon.com/streams/latest/dev/amazon-kinesis-consumers.html\" target=\"_blank\">Consumers for Amazon Kinesis Streams</a>.</li>\r\n\t<li><strong>Option&nbsp;A is&nbsp;incorrect </strong>because the source videos should be put into the Kinesis video stream instead of S3. Afterward, the Rekognition processor will pick up records in the Kinesis stream to process.</li>\r\n\t<li><strong>Option&nbsp;B is&nbsp;CORRECT</strong> because it is the step to convert source data into the Kinesis video stream.</li>\r\n\t<li><strong>Option&nbsp;C is&nbsp;CORRECT</strong>.&nbsp;A stream processor can be created by calling <a href=\"https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateStreamProcessor.html\" target=\"_blank\">CreateStreamProcessor</a>. The request parameters include the Amazon Resource Names (ARNs) for the Kinesis video stream, the Kinesis data stream, and the identifier for the collection that&#39;s used to recognize faces in the streaming video. It also includes the name that you specify for the stream processor.</li>\r\n</ul>\r\n\r\n<p>Below is an example:</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/03/20/ckeditor_9.png\" style=\"height:315px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;D is&nbsp;incorrect</strong> because, for video processing, Rekognition API &ldquo;DetectFaces&rdquo; should not be used. &ldquo;DetectFaces&rdquo; is used to detect faces within an image that is provided as input. Instead, stream processor-relevant APIs should be used.</li>\r\n\t<li><strong>Option&nbsp;E is&nbsp;incorrect</strong> because the output from Rekognition should be stored in the Kinesis data stream. When the Rekognition stream processor is created, the Rekognition output (Kinesis Data Stream) is defined.</li>\r\n</ul>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Output&quot;: {<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;KinesisDataStream&quot;: {<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Arn&quot;: &quot;arn:aws:kinesis:us-east-1:nnnnnnnnnnnn:stream/outputData&quot;<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }</p>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;F is&nbsp;CORRECT</strong> because it describes correctly how to consume the Kinesis data stream. You can use the Amazon Kinesis Data Streams Client Library to consume analysis results that are sent to the Amazon Kinesis Data Streams output stream.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/rekognition/latest/dg/streaming-video-kinesis-output.html\" target=\"_blank\">https://docs.aws.amazon.com/rekognition/latest/dg/streaming-video-kinesis-output.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123012,
          "question_id": 98300,
          "answers": [
            {
              "choice": "<p>S3 buckets to store the source MKV videos for AWS Rekognition to process. S3 should be used in this case as it has provided an unlimited, highly available, and durable storing space. Make sure that the third party has the write access to S3 buckets</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>A Kinesis video stream for sending streaming video to Amazon Rekognition Video. This can be done by using Kinesis &ldquo;PutMedia&rdquo; API in Java SDK. The PutMedia operation writes video data fragments into a Kinesis video stream that Amazon Rekognition Video consumes</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>An Amazon Rekognition Video stream processor to manage the analysis of the streaming video. It can be used to start, stop, and manage stream processors according to needs</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Use EC2 or Lambda to call Rekognition API &ldquo;DetectFaces&rdquo; with the source videos saved in the S3 bucket. For each face detected, the operation returns face details. These details include a bounding box of the face, a confidence value, and a fixed set of attributes such as facial landmarks, etc.</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>After the app&nbsp;has utilized Rekognition API to fetch the recognized faces from live videos, use S3 or RDS database to store the output from Rekognition. Another Lambda can be used to post-process the result and present it to UI</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>A Kinesis data stream consumer to read the analysis results that Amazon Rekognition Video sends to the Kinesis data stream.&nbsp;The consumer can be autoscaled by running it on multiple EC2 instances under an Auto Scaling group</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98301,
      "topic_id": 2686,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company has recently extended its on-premises data center into a VPC on AWS to add burst computing capacity as needed. The data center has already used an identity provider (IDP).&nbsp;Members of your Network Operations Center need to be able to go to the AWS Management Console and administer Amazon EC2 instances as necessary. You don&rsquo;t want to create new IAM users for each member and make those users sign in again to the AWS Management Console. Which option below will meet the needs of your NOC members?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: C</strong></p>\r\n\r\n<p>This scenario has two requirements: (a) temporary access to AWS resources be given to certain users or applications (NOC members in this case), and (b) you are not supposed to create new IAM users for the NOC members to log into AWS console.&nbsp;</p>\r\n\r\n<p>This scenario is handled by a concept named &quot;Federated Access&quot;. Read this for more information on federated access:&nbsp;<a href=\"https://aws.amazon.com/identity/federation/\" target=\"_blank\">https://aws.amazon.com/identity/federation/</a> .</p>\r\n\r\n<p>Read this article for more information on how to establish federated access to the AWS resources.</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/security/how-to-establish-federated-access-to-your-aws-resources-by-using-active-directory-user-attributes/\" target=\"_blank\">https://aws.amazon.com/blogs/security/how-to-establish-federated-access-to-your-aws-resources-by-using-active-directory-user-attributes/</a></li>\r\n\t<li><strong>Option A is incorrect </strong>because OAuth 2.0 is not applicable in this scenario as we are not using Web Identity Federation. It is used with public identity providers such as Facebook, Google, etc.</li>\r\n\t<li><strong>Option B is incorrect</strong> because the key point here is that you need to give access to AWS Management Console to only the members of your Network Operations Center using on-premises SSO to avoid signing in again. The users should not be using Facebook or Google IDs to login.</li>\r\n\t<li><strong>Option C is CORRECT </strong>because (a) it gives federated access to the NOC members to AWS resources by using SAML 2.0 identity provider, and (b) it uses on-premises single sign on (SSO) endpoint to authenticate users and gives them access tokens before providing the federated access.</li>\r\n\t<li><strong>Option D is incorrect </strong>because, even though it uses SAML 2.0 identity provider, we need to grant SSO access to the AWS management console and retrieving temporary security credentials is irrelevant here.</li>\r\n</ul>\r\n\r\n<p>See this diagram that explains the Federated Access using SAML 2.0.&nbsp;</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_ncagbh.png\" style=\"height:433px; width:750px\" /></p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123013,
          "question_id": 98301,
          "answers": [
            {
              "choice": "<p>Use OAuth 2.0 to retrieve temporary AWS security credentials to enable your members to sign in to the AWS Management Console</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use Web Identity Federation to retrieve AWS temporary security credentials to enable your members to sign in to the AWS Management Console</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use your on-premises SAML 2.0-compliant identity provider (IDP) to grant the members federated access to the AWS Management Console via the AWS single sign-on (SSO) endpoint</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Use your on-premises SAML 2.0-compliant identity provider (IDP) to retrieve temporary security credentials to enable members to sign in to the AWS Management Console</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Accelerate Workload Migration and Modernization"
    },
    {
      "question_id": 98302,
      "topic_id": 2686,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a batch analysis with transactional reporting every hour on its main transactional DB running on an RDS MySQL instance to populate its central Data Warehouse running on Redshift. During the execution of the batch, their transactional applications are very slow. When the batch completes, they need to update the top management dashboard with the new data. The dashboard is produced by another system running on-premises that is currently started when a manually-sent email notifies that an update is required. The on-premises system cannot be modified because it is managed by another team.</p>\r\n\r\n<p>How would you optimize this scenario to solve performance issues and automate the process as much as possible?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: C</strong></p>\r\n\r\n<p>There are two architectural considerations here. (1) you need to improve read performance by reducing the load on the RDS MySQL instance, and (2) automate the process of notifying to the on-premise system.</p>\r\n\r\n<p>When the scenario asks you to improve a DB instance&#39;s read performance, always look for options such as ElastiCache or Read Replicas. And when the question asks you to automate the notification process, always think of using SNS.&nbsp;</p>\r\n\r\n<ul>\r\n\t<li><strong>Options A and B are incorrect </strong>because replacing RDS with Redshift may need many changes on the applications and are not required in this scenario.</li>\r\n\t<li><strong>Option C is CORRECT</strong> because (a) it uses Read Replicas which improves the read performance, and (b) it uses SNS which automates the process of notifying the on-premise system to update the dashboard.</li>\r\n\t<li><strong>Option D is incorrect </strong>because SQS is not a service to be used for sending the notification.</li>\r\n</ul>\r\n\r\n<p>For more information on Read Replica&rsquo;s, please visit the below link-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/rds/details/read-replicas/\" target=\"_blank\">https://aws.amazon.com/rds/details/read-replicas/</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123014,
          "question_id": 98302,
          "answers": [
            {
              "choice": "<p>Replace RDS with Redshift for the batch analysis and SNS to notify the on-premises system to update the dashboard</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Replace RDS with Redshift for the batch analysis and SQS to send a message to the on-premises system to update the dashboard</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create an RDS Read Replica for the batch analysis and SNS to notify the on-premises system to update the dashboard</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Create an RDS Read Replica for the batch analysis and SQS to send a message to the on-premises system to update the dashboard</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Accelerate Workload Migration and Modernization"
    },
    {
      "question_id": 98303,
      "topic_id": 2687,
      "course_id": null,
      "case_study_id": 0,
      "lab_id": 0,
      "question_text": "<p>You are looking to migrate your Development and Test environments to AWS. You have decided to use separate AWS accounts to host each environment. You plan to link each account bill to a Management&nbsp;AWS account using Consolidated Billing. To make sure that you keep within the budget, you would like to implement a way for administrators in the Management&nbsp;account to have access to stop, delete and/or terminate resources in both the Dev and Test accounts. Identify which of the options will allow you to achieve this goal.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer:&nbsp;C</strong></p>\r\n\r\n<p>The scenario here is asking you to give permissions to administrators in the Management account such that they can have access to stop, delete, and terminate the resources in two accounts: Dev and Test.</p>\r\n\r\n<p>Tip: Remember that you always create roles in the account whose resources are to be accessed. In this example, that would be Dev and Test. Then you create the users in the account who will be accessing the resources and give them that particular role. In this example, the Management account should create the users.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because the Management account IAM user needs to assume roles from the Dev and Test accounts. The roles should have suitable permissions so that the Management account IAM user can access resources.</li>\r\n\t<li><strong>Option B is incorrect </strong>because the cross-account role should be created in Dev and Test accounts, not in the Management account.</li>\r\n\t<li><strong>Option C is CORRECT </strong>because (a) the cross-account role is created in Dev and Test accounts, and the users are created in the Management account given that role.</li>\r\n\t<li><strong>Option D is incorrect </strong>because consolidated billing does not give access to resources in this fashion.</li>\r\n</ul>\r\n\r\n<p>For more information on cross-account access, please visit the below URL:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html\" target=\"_blank\">http://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123287,
          "question_id": 98303,
          "answers": [
            {
              "question_id": "98303",
              "choice": "<p>Create IAM users in the Management account with full Admin permissions. Create cross-account roles in the Dev and Test accounts that grant Management&nbsp;account access to the resources in the account by inheriting permissions from the&nbsp;Management&nbsp;account</p>",
              "feedback": "",
              "correct": 0
            },
            {
              "question_id": "98303",
              "choice": "<p>Create IAM users and a cross-account role in the Management account that grants full Admin permissions to the Dev and Test accounts</p>",
              "feedback": "",
              "correct": 0
            },
            {
              "question_id": "98303",
              "choice": "<p>Create IAM users in the Management account with the &quot;AssumeRole&quot; permissions. Create cross-account roles in the Dev and Test accounts that have full Admin permissions and grant Management account access</p>",
              "feedback": "",
              "correct": 1
            },
            {
              "question_id": "98303",
              "choice": "<p>Link the accounts using Consolidated Billing. This will give IAM users in the Management account access to the resources in Dev and Test accounts</p>",
              "feedback": "",
              "correct": 0
            }
          ]
        }
      ],
      "topic_name": "Design Solutions for Organizational Complexity"
    },
    {
      "question_id": 98304,
      "topic_id": 2686,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A data analysis engineer had&nbsp;an old on-premise database for his meteorology analysis for years. This database is growing too big and becoming less responsive. He prefers to migrate it to AWS DynamoDB, and he already has the mapping rules in place. However, he has been told that the database type is unsupported by AWS Database Migration Service. He can export the data to CSV format files from the old database. How can the data analysis engineer migrate the data to AWS DynamoDB successfully?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: C</strong></p>\r\n\r\n<p>In most cases, when someone is migrating to a new database, he has access to the source database and can use the database directly as a source. Sometimes, however, he might not have access to the source directly. In other cases, the source is really old or possibly unsupported. In these cases, if he can export the data in CSV format, he can still migrate or platform, the data. In this question, DMS does not support this database type. However, the CSV files can be used after being uploaded to S3. AWS Database Migration Services (AWS DMS) added support for using Amazon S3 as a source for database migration.</p>\r\n\r\n<p>If S3 is the source endpoint, an external table definition is required. An external table definition is a JSON document that describes how AWS DMS should interpret the data from Amazon S3. The maximum size of this document is 2 MB. If a source endpoint is created using the AWS DMS Management Console, a JSON file can be entered directly into the table mapping box such as:</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/02/21/ckeditor_awsq12.jpg\" style=\"height:352px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because the mapping rule should be put in the source endpoint configuration rather than the task settings if S3 is the source for DMS.</li>\r\n\t<li><strong>Option B is incorrect</strong> because AWS Database Migration Service is suitable. Moreover, Data Pipeline does not deal with table mappings. Data Pipeline is suitable for data backup instead of database migration.</li>\r\n\t<li><strong>Option C is CORRECT</strong>.&nbsp;It correctly describes how to use S3 as the source endpoint and defines the mapping rules. Below is a piece of JSON mapping rule:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/02/21/ckeditor_awsq12.1.jpg\" style=\"height:570px; width:750px\" /></p>\r\n\r\n<p>A reference is in<a href=\"https://aws.amazon.com/blogs/database/migrate-delimited-files-from-amazon-s3-to-an-amazon-dynamodb-nosql-table-using-aws-database-migration-service-and-aws-cloudformation/\" target=\"_blank\"> https://aws.amazon.com/blogs/database/migrate-delimited-files-from-amazon-s3-to-an-amazon-dynamodb-nosql-table-using-aws-database-migration-service-and-aws-cloudformation/</a>.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option D is incorrect </strong>because DynamoDB cannot resolve the table mapping by uploading CSV files exported from databases. Data Migration Service can deal with this scenario properly.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123016,
          "question_id": 98304,
          "answers": [
            {
              "choice": "<p>Firstly, upload the CSV files to S3. Create an S3 source endpoint and DynamoDB target endpoint in AWS DMS. Create a migration task by referring to the source and target endpoints. Add the mapping rule in the task using a JSON format</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>AWS Database Migration Service is inappropriate for this task. Upload the CSV files to S3 and then use an AWS Data Pipeline to import the data from S3 to DynamoDB by an S3-to-DynamoDB template</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Upload the exported CSV files to S3 at first. Then create S3 source endpoint and DynamoDB target endpoint in AWS DMS console. When the S3 source endpoint is configured, add the table mapping rule with a JSON table structure.&nbsp;Create a Replication Task to move the data from the source endpoint to the target endpoint</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>AWS Database Migration Service is not needed for this scenario. The AWS DynamoDB supports the import of CSV Excel files directly by console and CLI. Create the DynamoDB table firstly with a proper schema and then import the CSV database data</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Accelerate Workload Migration and Modernization"
    },
    {
      "question_id": 98305,
      "topic_id": 2687,
      "course_id": null,
      "case_study_id": 0,
      "lab_id": 0,
      "question_text": "<p>A large company starts to use AWS organizations with the consolidated billing feature&nbsp;to manage its separate departments. The AWS operation team has just created 3 OUs (organization units) with 2 AWS accounts each. To be compliant with company-wide security policy, CloudTrail is required for all AWS accounts which is already been set up. However, after some time, there are cases that users in certain OU have turned off the CloudTrail of their accounts. What is the best way for the AWS operation team to prevent this from happening again?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: A</strong></p>\r\n\r\n<p>&nbsp;AWS Organizations has provided two feature sets.</p>\r\n\r\n<ul>\r\n\t<li>Consolidated billing &ndash; This feature set provides shared billing functionality but does not include the more advanced features of AWS Organizations.</li>\r\n\t<li>All features &ndash; The complete feature set that is available to AWS Organizations. It includes all the functionality of consolidated billing and advanced features that give you more control over your organization&#39;s accounts. For example, when all features are enabled, the master account of the organization has full control over what member accounts can do. The master account can apply SCPs to restrict the services and actions that users (including the root user) and roles in an account can access. It can prevent member accounts from leaving the organization.</li>\r\n</ul>\r\n\r\n<p>In this case, we should use &ldquo;All features&rdquo;. One thing to note is that the feature sets can be upgraded in flight. It does not need to delete/recreate the AWS Organizations.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is CORRECT </strong>because SCP is suitable for limiting actions that AWS accounts in an Organization can do. Below is an example of a deny policy:</li>\r\n</ul>\r\n\r\n<pre>\r\n{\r\n&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,\r\n&nbsp; &quot;Statement&quot;: [\r\n&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Deny&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: &quot;cloudtrail:StopLogging&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: &quot;*&quot;\r\n&nbsp;&nbsp;&nbsp; }\r\n&nbsp; ]\r\n}</pre>\r\n\r\n<ul>\r\n\t<li><strong>Option B is incorrect</strong> because it does not need to delete/recreate the AWS Organizations to upgrade feature sets.</li>\r\n\t<li><strong>Option C is incorrect </strong>because although it can potentially work, it has lots of repeatable work and is not straightforward if compared with Option A.</li>\r\n\t<li><strong>Option D is incorrect</strong> because it does not mention the upgrade of feature sets. Secondly, the allow policy is incorrect as this case only requires limiting CloudTrail deletion. Allow policy implicitly prevents everything except for several allows items.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/industries/best-practices-for-aws-organizations-service-control-policies-in-a-multi-account-environment/\" target=\"_blank\">https://aws.amazon.com/blogs/industries/best-practices-for-aws-organizations-service-control-policies-in-a-multi-account-environment/</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html\" target=\"_blank\">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123286,
          "question_id": 98305,
          "answers": [
            {
              "question_id": "98305",
              "choice": "<p>Update the AWS Organizations feature sets to &ldquo;All features&rdquo; and then create a Service Control Policies (SCP) to Prevent Users from Disabling AWS CloudTrail. This can be achieved by a deny policy with cloudtrail:StopLogging denied</p>",
              "feedback": "",
              "correct": 1
            },
            {
              "question_id": "98305",
              "choice": "<p>This can be achieved by Service Control Policies (SCP) in the &ldquo;All features&rdquo; set. The team needs to delete and recreate the AWS Organizations with &ldquo;All features&rdquo; enabled and then use a proper control policy to limit the operation of cloudtrail:StopLogging</p>",
              "feedback": "",
              "correct": 0
            },
            {
              "question_id": "98305",
              "choice": "<p>In each AWS account in this organization, create an IAM policy to deny cloudtrail:StopLogging for all users including administrators</p>",
              "feedback": "",
              "correct": 0
            },
            {
              "question_id": "98305",
              "choice": "<p>Use Service Control Policies (SCP) to prevent users from disabling AWS CloudTrail. This can be done by a allow policy that denies cloudtrail:StopLogging</p>",
              "feedback": "",
              "correct": 0
            }
          ]
        }
      ],
      "topic_name": "Design Solutions for Organizational Complexity"
    }
  ]
}