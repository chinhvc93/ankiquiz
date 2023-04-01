// 7. Compute - EC2, Lambda, Elastic Beanstalk, Batch
var Compute = {
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": 58123,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": 0,
      "lab_id": 0,
      "question_text": "<p>You help a team to create various AMIs and Docker images through EC2 Image Builder pipelines. Other teams want to use the same EC2 Image Builder resources, including components, recipes and images in their image pipelines. You need to find a proper approach to share resources with other organizational units inside the AWS Organization or other specific AWS accounts. Which of the following methods is suitable?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answer​:​ D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect </strong>because you need to configure resource shares instead of shared pipelines in AWS RAM.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect </strong>because you cannot directly share components, recipes or images through EC2 Image Builder. Instead, RAM should be used.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect </strong>because image pipelines cannot be used to share EC2 Image Builder resources such as components or recipes.</li>\r\n\t<li><strong>Option​ ​D ​is​ CORRECT</strong> because RAM is appropriate for users to share EC2 Image Builder resources. Take the following snapshot as an example:<br />\r\n\t<img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/cs2.png\" style=\"height:325px; width:750px\" /></li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/imagebuilder/latest/userguide/manage-shared-resources.html#manage-shared-resources-share\">https://docs.aws.amazon.com/imagebuilder/latest/userguide/manage-shared-resources.html#manage-shared-resources-share</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 59870,
          "question_id": 58123,
          "answers": [
            {
              "question_id": "58123",
              "choice": "<p>In AWS Resource Access Manager (RAM), create shared pipelines by selecting the shared components, images, or recipes in EC2 Image Builder and select the target organizational units or AWS accounts.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "58123",
              "choice": "<p>In the EC2 Image Builder, select the shared resources such as components, recipes or images and distribute the resources to other organizational units or AWS accounts.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "58123",
              "choice": "<p>In the EC2 Image Builder image pipelines, share the resources to other organizational units or AWS accounts after the pipelines are finished successfully.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "58123",
              "choice": "<p>In AWS Resource Access Manager (RAM), add the shared components, images, or recipes in resource shares and configure the principals which are allowed to access the shared resources.</p>",
              "feedback": "",
              "correct": true
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 58124,
      "topic_id": 365,
      "course_id": null,
      "case_study_id": 0,
      "lab_id": 0,
      "question_text": "<p>Your company uses a hybrid environment to host its infrastructure and services. Applications are mainly deployed in AWS. As a part of the company strategy, certain Amazon EC2 instances need to be exported through the VM Import/Export tool as OVA files and deployed in the on-premises VMware vSphere environment. How would you use the VM Import/Export tool in the right way?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answer:​ C</strong></p>\n\n<ul>\n\t<li><strong>Option​ ​A is ​incorrect</strong> because Server Migration Connector is a component of AWS Server Migration Service, and it is not used by the VM Import/Export tool.</li>\n\t<li><strong>Option​ B is​ ​incorrect </strong>because the VM Import/Export tool cannot be used to deploy the AWS discovery tools. Discovery Tools are used by AWS Migration Hub to plan the migration from data centers to AWS.</li>\n\t<li><strong>Option​ ​C ​is​ CORRECT</strong> because VM Import/Export uses the AWS CLI command &ldquo;aws ec2 create-instance-export-task&rdquo; to export an EC2 instance. i.e. &ldquo;aws ec2 create-instance-export-task --instance-id my-instance-id --target-environment vmware --export-to-s3-task file://C:\\file.json&rdquo;. This CLI command creates an OVA file in an S3 bucket. The OVA file will be used to launch VMs in VMware vSphere.</li>\n\t<li><strong>Option​ ​D ​is​ ​incorrect </strong>because &ldquo;aws ec2 export-image&rdquo; is used to export a VM directly from an Amazon Machine Image (AMI). Please refer to the below.</li>\n</ul>\n\n<p><strong>References:</strong></p>\n\n<ul>\n\t<li><a href=\"https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport.html\">https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport.html</a></li>\n\t<li><a href=\"https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport_image.html\">https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport_image.html</a>&nbsp;</li>\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 59188,
          "question_id": 58124,
          "answers": [
            {
              "question_id": "58124",
              "choice": "<p>Use the VM Import/Export tool to install the Server Migration Connector, generate ova files and migrate the EC2 instances to VMware vSphere.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "58124",
              "choice": "<p>Use the VM Import/Export tool to deploy the AWS discovery tools in EC2 instances and trigger migration jobs to VMware vSphere.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "58124",
              "choice": "<p>Use the &ldquo;aws ec2 create-instance-export-task&rdquo; command to export EC2 instances and store the exported ova files in an S3 bucket.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "58124",
              "choice": "<p>Use the &ldquo;aws ec2 export-image&rdquo; command to export EC2 instances and download the exported ova files in a local disk.</p>",
              "feedback": "",
              "correct": false
            }
          ]
        }
      ],
      "topic_name": "Migration Planning"
    },
    {
      "question_id": 58155,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": 0,
      "lab_id": 0,
      "question_text": "<p>Your team is developing a new Lambda function for a microservice component. You need to package and deploy the Lambda function as a container image. The container image should be built based on the python:buster image with other dependencies and libraries installed. In order to use the container image properly for the Lambda function, which of the following actions is required?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answer​: D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because there is no need to assume the IAM role in the Dockerfile. Users should configure the IAM role when creating the Lambda function.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect </strong>because Lambda automatically forwards logs to CloudWatch Logs. Users do not need to install the CloudWatch agent in Dockerfile.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect </strong>because after the Docker image has been built, users should push the image to ECR. There is no ECR agent that needs to be installed in the Docker image.</li>\r\n\t<li><strong>Option​ ​D ​is​ CORRECT </strong>because the container image for Lambda must implement the Lambda Runtime API that is added by the open-source runtime interface client.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/aws/new-for-aws-lambda-container-image-support/\">https://aws.amazon.com/blogs/aws/new-for-aws-lambda-container-image-support/</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/lambda/latest/dg/images-create.html\">https://docs.aws.amazon.com/lambda/latest/dg/images-create.html</a>&nbsp;</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 59179,
          "question_id": 58155,
          "answers": [
            {
              "question_id": "58155",
              "choice": "<p>In the Dockerfile, assume the IAM role through the &ldquo;aws sts assume-role&rdquo; CLI for the Lambda function during runtime.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "58155",
              "choice": "<p>Install the CloudWatch Log agent in the container image for the Lambda function to forward its logs to a CloudWatch Log group.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "58155",
              "choice": "<p>Install the Amazon Elastic Container Registry (Amazon ECR) agent for the Lambda function to interact with ECR to fetch the Docker image.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "58155",
              "choice": "<p>Install the runtime interface client in the container image to make it compatible with Lambda.</p>",
              "feedback": "",
              "correct": true
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 58156,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": 0,
      "lab_id": 0,
      "question_text": "<p>Your team uses Elastic Beanstalk to manage a legacy JAVA application for a financial system. The Elastic Beanstalk environment is based on Amazon Linux. Now you need to update the operating system to Amazon Linux 2 in order to take advantage of the latest Elastic Beanstalk functionality. During the update, there should be minimal service impact to the application. Which of the following options describes the correct order to perform the operating system update?</p>\r\n\r\n<p>1. Turn the new environment into the production environment by swapping its CNAME with the existing environment&#39;s CNAME.</p>\r\n\r\n<p>2.&nbsp;In the Elastic Beanstalk console, select the environment and update the platform to Amazon Linux 2.</p>\r\n\r\n<p>3.&nbsp;Create a new environment in Elastic Beanstalk and deploy the application code to it.</p>\r\n\r\n<p>4.&nbsp;Find and fix any application compatibility issues in the Amazon Linux 2 environment.</p>\r\n\r\n<p>5.&nbsp;Terminate the old Elastic Beanstalk environment.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answer: C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect </strong>because terminating the old environment is not the correct procedure to update the operating system. So, step 5 should not be in the first position.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect</strong> because step 2 is the unwanted step that does not describe any updates.</li>\r\n\t<li><strong>Option​ ​C ​is​ CORRECT</strong> because this sequence describes the blue/green update strategy by creating a new environment, testing it and then swapping the DNS for the production environment.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect </strong>because issues cannot be followed before creating and deploying the code. The sequence does not describe any of the update strategies.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-platform-update-managed.html\">https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-platform-update-managed.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.platform.upgrade.html\">https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.platform.upgrade.html</a>&nbsp;</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 59114,
          "question_id": 58156,
          "answers": [
            {
              "question_id": "58156",
              "choice": "<p>5 &gt; 2 &gt; 1 &gt; 4</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "58156",
              "choice": "<p>2 &gt; 3 &gt; 1 &gt; 5</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "58156",
              "choice": "<p>3 &gt; 4 &gt; 1 &gt; 5</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "58156",
              "choice": "<p>4 &gt; 2 &gt; 3 &gt; 1</p>",
              "feedback": "",
              "correct": false
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 58157,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": 0,
      "lab_id": 0,
      "question_text": "<p>You are working in a company as an AWS engineer. Your company uses a lot of Elastic Beanstalk applications on different platforms. Most of the Elastic Beanstalk environments do not enable platform updates. So, your team has to update the platforms during scheduled maintenance windows manually. You would like to enable managed platform updates through the Elastic Beanstalk console. Which of the following options do you need to configure for the managed platform updates? (Select TWO.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answer​s: A and&nbsp;C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is CORRECT</strong> because, for the managed platform updates in Elastic Beanstalk, you can choose the update level to be &ldquo;Minor versions and patches&rdquo; or &ldquo;Patch only&rdquo;.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect </strong>because Managed platform updates don&#39;t support updates across platform branches such as operating system, runtime, or Elastic Beanstalk components.</li>\r\n\t<li><strong>Option​ ​C ​is​ CORRECT</strong> because you can select the weekly update time period for Elastic Beanstalk to perform the updates shown below:<img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/8.jpg\" style=\"height:516px; width:750px\" /></li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect </strong>because users cannot configure the Instance reboot option.</li>\r\n\t<li><strong>Option​ ​E ​is​ ​incorrect</strong> because the patch baseline from Systems Manager cannot be configured for the Elastic Beanstalk managed platform updates.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-platform-update-managed.html\">https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-platform-update-managed.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 59112,
          "question_id": 58157,
          "answers": [
            {
              "question_id": "58157",
              "choice": "<p>The update level.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "58157",
              "choice": "<p>The operating system.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "58157",
              "choice": "<p>The weekly update period.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "58157",
              "choice": "<p>Instance reboot.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "58157",
              "choice": "<p>Patch baseline from Systems Manager.</p>",
              "feedback": "",
              "correct": false
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 58158,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": 0,
      "lab_id": 0,
      "question_text": "<p>Your company deploys an internal application in an Elastic Beanstalk environment which is created in a private VPC and has no access to the internet. The application is used for monitoring and logging, and other VPC applications need to send requests to the internal application. For security purposes, the traffic to the Elastic Beanstalk service should stay inside the Amazon network without exposure to the internet. How would you achieve this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answer:​ B</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because NAT Gateway is used to provide internet connectivity to private subnets. So, there is&nbsp;no need for NAT Gateway for the above-mentioned requirement.</li>\r\n\t<li><strong>Option​ B is​ CORRECT</strong> because the traffic to Elastic Beanstalk needs to be private without being exposed to the internet. This requirement can be achieved by the VPC endpoint service powered by AWS PrivateLink. With PrivateLink, users do not need to configure other connectivity services such as VPN connection or AWS Direct Connect. Check the following snapshot for how to create the VPC endpoint:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/csa-prop-ST-compute-9.JPG\" style=\"height:222px; width:740px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because disabling the DNS name is not a feasible option in an Elastic Beanstalk environment.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect </strong>because, in order to send other applications&rsquo; traffic to the Elastic Beanstalk service, something must be used, i.e., the VPC endpoint.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/vpc.html\">https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/vpc.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/vpc-vpce.html\">https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/vpc-vpce.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 118651,
          "question_id": 58158,
          "answers": [
            {
              "question_id": "58158",
              "choice": "<p>Create a NAT Gateway in the public subnet. Modify the route table to connect other applications and the Elastic Beanstalk service through the NAT Gateway.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "58158",
              "choice": "<p>Configure an interface VPC endpoint for the Elastic Beanstalk service. Requests are sent to Elastic Beanstalk through AWS PrivateLink.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "58158",
              "choice": "<p>Disable DNS name in the Elastic Beanstalk environment to disallow the connections through the public endpoint of Elastic Beanstalk.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "58158",
              "choice": "<p>Nothing needs to be done as Elastic Beanstalk provides the private DNS &ldquo;com.amazonaws.region.elasticbeanstalk&rdquo; by default.</p>",
              "feedback": "",
              "correct": false
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    }
  ]
}