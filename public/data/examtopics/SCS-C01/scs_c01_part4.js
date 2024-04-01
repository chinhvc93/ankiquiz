var SCS_C01_Part4 = {
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#400",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A healthcare company has multiple AWS accounts in an organization in AWS Organizations. The company uses Amazon S3 buckets to store sensitive information of patients. The company needs to restrict users from deleting any S3 bucket across the organization.<br><br>What is the MOST scalable solution that meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#400",
          "answers": [
            {
              "choice": "<p>Permissions boundaries in AWS Identity and Access Management (IAM)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>S3 bucket policies<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Tag policies<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>SCPs<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 400 discussion",
      "discusstion": [
        {
          "id": 724284,
          "date": "Tue 22 Nov 2022 12:41",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "SCP - SCPs offer central control over the maximum available permissions for all accounts in your organization",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 914714,
          "date": "Sun 04 Jun 2023 16:02",
          "username": "\t\t\t\tToptip\t\t\t",
          "content": "SCP is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 796436,
          "date": "Thu 02 Feb 2023 21:53",
          "username": "\t\t\t\tSuhasj02\t\t\t",
          "content": "SCP for across organization",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 731053,
          "date": "Wed 30 Nov 2022 04:39",
          "username": "\t\t\t\tkerar\t\t\t",
          "content": "This SCP prevents users or roles in any affected account from deleting any S3 bucket or objects.<br><br>https://asecure.cloud/a/scp_s3/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>D for Sure, I agree</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 767073,
          "date": "Thu 05 Jan 2023 22:57",
          "username": "\t\t\t\tLeonardocp33\t\t\t",
          "content": "D for Sure, I agree",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 731051,
          "date": "Wed 30 Nov 2022 04:38",
          "username": "\t\t\t\tkerar\t\t\t",
          "content": "This SCP prevents users or roles in any affected account from deleting any S3 bucket or objects.<br><br>https://asecure.cloud/a/scp_s3/",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#401",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an AWS Lambda function that requires access to an Amazon S3 bucket. The company's security policy requires that connections to Amazon S3 are over a private network and are secure.<br><br>The company has configured a gateway VPC endpoint in the VPC to allow access to Amazon S3. The company has configured the Lambda function to run inside the VPC.  Additionally, the company has configured the Lambda function to use a private subnet that has a route to the internet through a NAT gateway.<br><br>Other resources in the VPC use this private subnet to access the internet successfully. When the Lambda function runs, it uses the NAT gateway instead of the gateway VPC endpoint to access Amazon S3.<br><br>What can a security engineer do to ensure that the Lambda function uses the gateway VPC endpoint for Amazon S3?</p>",
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
              "choice": "<p>Remove the route to the NAT gateway within the route table of the private subnet that the Lambda function uses.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Associate the gateway VPC endpoint with the route table of the private subnet that the Lambda function uses.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Adjust the gateway VPC endpoint policy to allow access from the Lambda function's network interface address.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the Lambda function's security group to allow connections to the S3 network address space.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 401 discussion",
      "discusstion": [
        {
          "id": 934524,
          "date": "Mon 26 Jun 2023 15:55",
          "username": "\t\t\t\tGreen53\t\t\t",
          "content": "B makes the most sense here.<br><br>Selecting A *would* stop Lambda from accessing the internet, but it *wouldn't* provide any access to S3 without further configurations to the route table. The question only states the VPC endpoint has been configured, not that the route tables have been configured. This still needs to be done, see:<br>https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html<br><br>\\\"Traffic from your VPC to Amazon S3 or DynamoDB is routed to the gateway endpoint. Each subnet route table must have a route that sends traffic destined for the service to the gateway endpoint using the prefix list for the service.\\\"<br><br>A can only work in combination with B. <br>B works because more specific routes take priority over more general ones:<br>https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html<br><br>C/D don't make sense.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 914052,
          "date": "Sun 04 Jun 2023 04:08",
          "username": "\t\t\t\tOCHT\t\t\t",
          "content": "[Explanation]<br>Yes, option A is still the correct answer. A VPC Endpoint for Amazon S3 enables instances in your VPC to use their private IP addresses to access S3 with no exposure to the public internet. AWS uses the existing infrastructure of a VPC to create a privately routed connection between the VPC and S3.<br><br>The issue described in the question arises because when the Lambda function requires access to S3, it is using the NAT Gateway instead of the VPC Endpoint. This is likely due to the route table of the private subnet pointing to the NAT Gateway for 0.0.0.0/0 (all IP address space), causing all traffic to be routed to the internet via the NAT Gateway, including traffic intended for S3.<br><br>To ensure the Lambda function uses the S3 VPC Endpoint and not the NAT Gateway, you should remove the route to the NAT Gateway from the route table of the private subnet that the Lambda function uses. This ensures that the traffic destined for S3 will use the VPC Endpoint.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 765503,
          "date": "Wed 04 Jan 2023 11:47",
          "username": "\t\t\t\tsecdaddy\t\t\t",
          "content": "I agree with Adam that B makes the most sense.<br><br>@kerar note the requirement \\\"...connections to Amazon S3 are over a private network and are secure.\\\"Also the actual question states \\\"... ensure that the Lambda function uses the gateway VPC endpoint for Amazon S3\\\"",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 731057,
          "date": "Wed 30 Nov 2022 04:40",
          "username": "\t\t\t\tkerar\t\t\t",
          "content": "To give public internet access to your Lambda function, you'll need to add a NAT gateway in a public subnet. Then you'll need to add a route to the route table of your private subnet that points to the NAT gateway.<br><br>https://www.alexdebrie.com/posts/aws-lambda-vpc/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 731049,
          "date": "Wed 30 Nov 2022 04:36",
          "username": "\t\t\t\tkerar\t\t\t",
          "content": "To give public internet access to your Lambda function, you'll need to add a NAT gateway in a public subnet. Then you'll need to add a route to the route table of your private subnet that points to the NAT gateway.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 724841,
          "date": "Wed 23 Nov 2022 03:36",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "B - Makes the most Sense.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#402",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is hosting a set of application, database, and web server instances in the AWS Cloud. Each set of instances has separate security groups. The company has properly defined the network ACLs. The company discovers an issue with the communication between the application and database instances.<br><br>Which set of steps should a security engineer take to troubleshoot the issue?</p>",
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
              "choice": "<p>Check the inbound rules for the database security group. Check the outbound rules for the application security group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Check the outbound rules for the database security group. Check the inbound rules for the application security group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Check the inbound rules for the database security group. Check the inbound rules for the application security group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Check the outbound rules for the database security group. Check the inbound rules and the outbound rules for the application security group.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 402 discussion",
      "discusstion": [
        {
          "id": 724288,
          "date": "Tue 22 Nov 2022 12:47",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "A : The access rules enforced by your local firewall and the IP addresses authorized to access your DB instance might not match. The problem is most likely the inbound rules in your security group.<br>By default, DB instances don't allow access. Access is granted through a security group<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Troubleshooting.html",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 895408,
          "date": "Thu 11 May 2023 22:57",
          "username": "\t\t\t\tITGURU51\t\t\t",
          "content": "The inbound rule for the security group needs to be configured for the database servers. Since the traffic flow is going from the application servers to the database tier we need to ensure that the outbound rule is configured correctly on the application tier. A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 774323,
          "date": "Fri 13 Jan 2023 11:05",
          "username": "\t\t\t\tkrishccie\t\t\t",
          "content": "Source is Application and Destination would be DB.  So DB inbound SG needs to be in place. Security groups are stateful allowing return traffic for the matching session and return traffic is on the random port so no SG for the return (Inbound on the application) is needed.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 766769,
          "date": "Thu 05 Jan 2023 16:25",
          "username": "\t\t\t\tLeonardocp33\t\t\t",
          "content": "Think it is A assuming application is the origin and database is the destination, SG has default allow outbound rule 0.0.0.0/0, so this option makes more sense to me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 765025,
          "date": "Tue 03 Jan 2023 21:38",
          "username": "\t\t\t\tawsec2\t\t\t",
          "content": "B.  Check the outbound rules for the database security group. Check the inbound rules for the application security group.<br><br>To communicate with the database instances, the application instances need to be able to send traffic to the database instances. Therefore, the security engineer should check the outbound rules for the database security group to make sure that the traffic from the application instances is allowed.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You wrote \\\"check the outbound rules for the database security group to make sure that the traffic from the application instances is allowed.\\\" - but this is inbound traffic (to the database) so inbound rules for the database security group.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 765507,
          "date": "Wed 04 Jan 2023 11:50",
          "username": "\t\t\t\tsecdaddy\t\t\t",
          "content": "You wrote \\\"check the outbound rules for the database security group to make sure that the traffic from the application instances is allowed.\\\" - but this is inbound traffic (to the database) so inbound rules for the database security group.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 755959,
          "date": "Sun 25 Dec 2022 20:40",
          "username": "\t\t\t\tyew2\t\t\t",
          "content": "Think it is A also but this seems like a trick question of sorts can someone confirm ?",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#403",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that processes personally identifiable information (PII). The application runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The company's security policies require that data is encrypted in transit at all times to avoid the possibility of exposing any PII in plaintext.<br><br>Which solutions could a security engineer use to meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#403",
          "answers": [
            {
              "choice": "<p>Terminate SSL from clients on the existing ALB.  Use HTTPS to connect from the ALB to the EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Replace the existing ALB with a Network Load Balancer (NLB). On the NLB, configure an SSL listener and TCP passthrough to receive client connections. Terminate HTTPS traffic from the NLB on the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Replace the existing ALB with a Network Load Balancer (NLB). On the NLB, configure TCP passthrough to receive client connections. Terminate SSL from the NLB on the EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a Network Load Balancer (NLB) with TCP passthrough to receive client connections. Terminate SSL on the existing ALB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a Network Load Balancer (NLB) with a TLS listener to receive client connections. Configure TCP passthrough on the existing ALB so that the NLB can reach the EC2 instances.Terminate SSL from the ALB on the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 403 discussion",
      "discusstion": [
        {
          "id": 731086,
          "date": "Wed 30 Nov 2022 05:25",
          "username": "\t\t\t\tkerar\t\t\t",
          "content": "A.  SSL/TLS termination on ALB =E2=86=92 Encryption in transitC.  A Network Load Balancer only supports transport layer (layer 4) TCP listeners. HTTP and HTTPS traffic can be routed to your environment over TCP. To establish secure HTTPS connections between web clients and your environment, install a self-signed certificate on the environment's instances, and configure the instances to listen on the appropriate port (typically 443) and terminate HTTPS connections.<br><br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environments-cfg-nlb.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Agree but if anyone has a configuration example of the re-encryption rule on the ALB I'd be interested in seeing it.</li><li>NLB does support TLS listeners but it will offload the certificate at NLB if the listener is TLS. If you use TCP then it's pass through to targets.</li></ul>",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 765569,
          "date": "Wed 04 Jan 2023 12:38",
          "username": "\t\t\t\tsecdaddy\t\t\t",
          "content": "Agree but if anyone has a configuration example of the re-encryption rule on the ALB I'd be interested in seeing it.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 868907,
          "date": "Thu 13 Apr 2023 01:39",
          "username": "\t\t\t\tnairj\t\t\t",
          "content": "NLB does support TLS listeners but it will offload the certificate at NLB if the listener is TLS. If you use TCP then it's pass through to targets.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 914730,
          "date": "Sun 04 Jun 2023 16:20",
          "username": "\t\t\t\tToptip\t\t\t",
          "content": "AC are correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 868910,
          "date": "Thu 13 Apr 2023 01:40",
          "username": "\t\t\t\tnairj\t\t\t",
          "content": "A and C<br>NLB with TLS listeners, not SSL - https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html<br>https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I meant NLB with TCP listener, not TLS .</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 868912,
          "date": "Thu 13 Apr 2023 01:41",
          "username": "\t\t\t\tnairj\t\t\t",
          "content": "I meant NLB with TCP listener, not TLS .",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 833440,
          "date": "Thu 09 Mar 2023 00:18",
          "username": "\t\t\t\tawsguru1998\t\t\t",
          "content": "CEC.  Replace the existing ALB with a Network Load Balancer (NLB). On the NLB, configure TCP passthrough to receive client connections. Terminate SSL from the NLB on the EC2 instances.<br><br>This solution replaces the existing ALB with an NLB and uses TCP passthrough to receive client connections. SSL is terminated on the EC2 instances, ensuring end-to-end encryption of PII data in transit at all times.<br>E.  Configure a Network Load Balancer (NLB) with a TLS listener to receive client connections. Configure TCP passthrough on the existing ALB so that the NLB can reach the EC2 instances. Terminate SSL from the ALB on the EC2 instances.<br><br>This solution configures an NLB with a TLS listener to receive client connections. TCP passthrough is configured on the existing ALB so that the NLB can reach the EC2 instances. SSL is terminated on the ALB, ensuring end-to-end encryption of PII data in transit at all times.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 818228,
          "date": "Wed 22 Feb 2023 19:33",
          "username": "\t\t\t\tcreatechange\t\t\t",
          "content": "I vote for B,E. <br><br>A doesn't add up to me. The encryption is not E2E as it is terminated and then was re-encrypted. This, by definition, would not be E2EE. <br><br>E makes more sense to me: \\\"Note that if you need to pass encrypted traffic to the targets without the load balancer decrypting it, create a TCP listener on port 443 instead of creating a TLS listener. The load balancer passes the request to the target as is, without decrypting it.\\\"<br><br>Reference: https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A is E2E.  there are no hops where it is unencrypted. encryption terminates and is re-established on the same resource/entity.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 827037,
          "date": "Thu 02 Mar 2023 16:15",
          "username": "\t\t\t\tEll89\t\t\t",
          "content": "A is E2E.  there are no hops where it is unencrypted. encryption terminates and is re-established on the same resource/entity.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 804644,
          "date": "Fri 10 Feb 2023 19:32",
          "username": "\t\t\t\tswrp4595\t\t\t",
          "content": "In Option B, the NLB is configured with an SSL listener, which allows the NLB to encrypt the data in transit between the client and the NLB.  The NLB is also configured with TCP passthrough, which allows it to pass the encrypted data to the EC2 instances, and the HTTPS traffic is terminated from the NLB on the EC2 instances, ensuring that the data is encrypted in transit between the NLB and the EC2 instances as well.<br><br>In Option C, the NLB is only configured with TCP passthrough, which does not encrypt the data in transit. As a result, this option does not meet the company's security policy requirements to encrypt data in transit at all times to avoid the possibility of exposing any personally identifiable information (PII) in plaintext.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 797253,
          "date": "Fri 03 Feb 2023 19:13",
          "username": "\t\t\t\troguecloud\t\t\t",
          "content": "Nitpicking, but maybe they intend you to pick up on this?...<br>B states:\\\"SSL listener and TCP passthrough,\\\" where the wording should be \\\"TCP Listener and SSL Passthrough\\\"(??)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 765031,
          "date": "Tue 03 Jan 2023 21:42",
          "username": "\t\t\t\tawsec2\t\t\t",
          "content": "AD<br>To encrypt the data in transit at all times, the security engineer could configure the existing ALB to terminate SSL from clients and use HTTPS to connect to the EC2 instances. This would encrypt the data in transit between clients and the ALB, and between the ALB and the EC2 instances.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No reason to keep the ALB if you put the NLB in doing tcp passthrough. The sessions will pass through the NLB and terminate directly on the EC2 instances.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 765568,
          "date": "Wed 04 Jan 2023 12:37",
          "username": "\t\t\t\tsecdaddy\t\t\t",
          "content": "No reason to keep the ALB if you put the NLB in doing tcp passthrough. The sessions will pass through the NLB and terminate directly on the EC2 instances.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 747373,
          "date": "Fri 16 Dec 2022 17:21",
          "username": "\t\t\t\tUn1c0rn\t\t\t",
          "content": "AWS doc says; You can choose the type of load balancer that your environment uses only during environment creation. You can change settings to manage the behavior of your running environment's load balancer, but you can't change its type.<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environments-cfg-nlb.html#:~:textYou%20can%20choose%20the%20type%20of%20load%20balancer%20that%20your%20environment%20uses%20only%20during%20environment%20creation.%20You%20can%20change%20settings%20to%20manage%20the%20behavior%20of%20your%20running%20environment%27s%20load%20balancer%2C%20but%20you%20can%27t%20change%20its%20type.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 742140,
          "date": "Sun 11 Dec 2022 23:07",
          "username": "\t\t\t\tBalki\t\t\t",
          "content": "Basic understanding of ALB and NLB",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 740741,
          "date": "Sat 10 Dec 2022 07:55",
          "username": "\t\t\t\tmaddyr\t\t\t",
          "content": "agree with A, C . Nice question",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 726394,
          "date": "Fri 25 Nov 2022 06:05",
          "username": "\t\t\t\tIsaias\t\t\t",
          "content": "ATerminate ssl on alb and configure Target group with https<br>C or Replace with a NLB use listener 443 for passthrough the ssl terminate on the instances<br>https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html<br>https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AC"
        }
      ]
    },
    {
      "question_id": "#404",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using an AWS owned CMK in its application to encrypt files in an AWS account. The company's security team wants to have the ability to change to new key material for new files whenever there is a potential key breach. A security engineer must implement a solution that gives the security team the ability to change the key whenever the team wants to do so.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#404",
          "answers": [
            {
              "choice": "<p>Create a new customer managed CMK. Add a key rotation schedule to the CMK. Invoke the key rotation schedule every time the security team requests a key change.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new AWS managed CMK. Add a key rotation schedule to the CMK. Invoke the key rotation schedule every time the security team requests a key change.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a CMK alias. Create a new customer managed CMK every time the security team requests a key change. Associate the alias with the new CMK.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a CMK alias. Create a new AWS managed CMK every time the security team requests a key change. Associate the alias with the new CMK.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 404 discussion",
      "discusstion": [
        {
          "id": 724578,
          "date": "Tue 22 Nov 2022 19:59",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "C:<br>Much of the power of aliases come from your ability to change the KMS key associated with an alias at any time. Aliases can make your code easier to write and maintain. For example, suppose you use an alias to refer to a particular KMS key and you want to change the KMS key. In that case, just associate the alias with a different KMS key. You don't need to change your code.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>source https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html</li><li>On reading this further, as per my other comment, an alias does not allow changing key material which is the requirement.C and D are eliminated.</li></ul>",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 765575,
          "date": "Wed 04 Jan 2023 12:46",
          "username": "\t\t\t\tsecdaddy\t\t\t",
          "content": "source https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 765587,
          "date": "Wed 04 Jan 2023 13:01",
          "username": "\t\t\t\tsecdaddy\t\t\t",
          "content": "On reading this further, as per my other comment, an alias does not allow changing key material which is the requirement.C and D are eliminated.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 895814,
          "date": "Fri 12 May 2023 12:07",
          "username": "\t\t\t\tITGURU51\t\t\t",
          "content": "As per AWS: You cannot enable automatic key rotation for a KMS key with imported key material. Also, you cannot change the properties of AWS managed keys. C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 765586,
          "date": "Wed 04 Jan 2023 13:00",
          "username": "\t\t\t\tsecdaddy\t\t\t",
          "content": "Unless I am mistaken, an alias is just a name that points to some key (in this case the AWS owned CMK) which means that using an alias would not allow the team to 'change to new key material'.<br><br>A seems like a good solution that meets the requirement<br>B not possible (see below)<br>C and D are both aliases so as above don't meet the requirement<br><br>\\\" you cannot change any properties of AWS managed keys, rotate them, change their key policies, or schedule them for deletion.\\\" eliminates B<br>\\\"KMS keys that AWS services create in a service account are AWS owned keys.\\\"<br>\\\"n general, unless you are required to audit or control the encryption key that protects your resources, an AWS owned key is a good choice\\\"<br>https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Isn't this exactly what the Alias does? The alias remains, but the actual key material is rotated on the backend? From documentation provided:<br>\\\"Much of the power of aliases come from your ability to change the KMS key associated with an alias at any time. \\\"</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 797239,
          "date": "Fri 03 Feb 2023 18:51",
          "username": "\t\t\t\troguecloud\t\t\t",
          "content": "Isn't this exactly what the Alias does? The alias remains, but the actual key material is rotated on the backend? From documentation provided:<br>\\\"Much of the power of aliases come from your ability to change the KMS key associated with an alias at any time. \\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 734280,
          "date": "Sat 03 Dec 2022 09:06",
          "username": "\t\t\t\ttainh\t\t\t",
          "content": "C is correct<br>https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#rotate-keys-manually",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 731105,
          "date": "Wed 30 Nov 2022 05:47",
          "username": "\t\t\t\tkerar\t\t\t",
          "content": "You can add, change, and delete an alias without affecting the associated KMS key.<br><br>https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#alias-concept",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#405",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations and has Amazon Elastic Kubernetes Service (Amazon EKS) clusters in many AWS accounts. A security engineer integrates Amazon EKS with AWS CloudTrail. The CloudTrail trails are stored in an Amazon S3 bucket in each account to monitor API calls. The security engineer observes that CloudTrail logs are not displaying Kubernetes pod creation events.<br><br>What should the security engineer do to view the Kubernetes events from Amazon CloudWatch?</p>",
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
              "choice": "<p>Configure the EKS clusters to use private S3 VPC endpoints. Configure the S3 buckets for logging.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable Kubernetes API server component logs for each cluster.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Enable cross-origin resource sharing (CORS) in the S3 bucket that is used for logging.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure CloudWatch. View the events in the CloudWatch console.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 405 discussion",
      "discusstion": [
        {
          "id": 817163,
          "date": "Tue 21 Feb 2023 22:02",
          "username": "\t\t\t\tNan001\t\t\t",
          "content": "Explanation:<br>CloudTrail logs API activity, while Kubernetes events include more granular data such as pod creation events. To view Kubernetes events, it is necessary to enable Kubernetes API server component logs for each EKS cluster. These logs are sent to Amazon CloudWatch Logs, where they can be monitored and analyzed. Therefore, option B is the correct answer",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 914740,
          "date": "Sun 04 Jun 2023 16:34",
          "username": "\t\t\t\tToptip\t\t\t",
          "content": "B is correct:<br>aws eks update-cluster-config \\<br>--region region-code \\<br>--name my-cluster \\<br>--logging '{\\\"clusterLogging\\\":[{\\\"types\\\":[\\\"api\\\",\\\"audit\\\",\\\"authenticator\\\",\\\"controllerManager\\\",\\\"scheduler\\\"],\\\"enabled\\\":true}]}'",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 803085,
          "date": "Thu 09 Feb 2023 11:34",
          "username": "\t\t\t\tSmartphone\t\t\t",
          "content": "The question talks about CloudTrail log. Why everyone is talking about here about CloudWatch log.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Look at the question, it asks you to view logs from CloudWatch..</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 806065,
          "date": "Sun 12 Feb 2023 08:31",
          "username": "\t\t\t\tselim507\t\t\t",
          "content": "Look at the question, it asks you to view logs from CloudWatch..",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 796696,
          "date": "Fri 03 Feb 2023 04:48",
          "username": "\t\t\t\tSuhasj02\t\t\t",
          "content": "By default, cluster control plane logs aren't sent to CloudWatch Logs. You must enable each log type individually to send logs for your cluster. CloudWatch Logs ingestion, archive storage, and data scanning rates apply to enabled control plane logs. For more information, see CloudWatch pricing.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 788606,
          "date": "Thu 26 Jan 2023 11:19",
          "username": "\t\t\t\tselim507\t\t\t",
          "content": "\\\"By default, cluster control plane logs aren't sent to CloudWatch Logs. You must enable each log type individually to send logs for your cluster\\\"<br><br>https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 765607,
          "date": "Wed 04 Jan 2023 13:23",
          "username": "\t\t\t\tsecdaddy\t\t\t",
          "content": "\\\"By default, cluster control plane logs aren't sent to CloudWatch Logs.\\\"<br>\\\" start using Amazon EKS control plane logging by choosing which log types you want to enable for each new or existing Amazon EKS cluster. You can enable or disable each log type on a per-cluster basis\\\"<br>https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>So I'm guessing B</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 765608,
          "date": "Wed 04 Jan 2023 13:24",
          "username": "\t\t\t\tsecdaddy\t\t\t",
          "content": "So I'm guessing B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 731108,
          "date": "Wed 30 Nov 2022 05:51",
          "username": "\t\t\t\tkerar\t\t\t",
          "content": "Amazon EKS control plane logging provides audit and diagnostic logs directly from the Amazon EKS control plane to CloudWatch Logs in your account. These logs make it easy for you to secure and run your clusters. You can select the exact log types you need, and logs are sent as log streams to a group for each Amazon EKS cluster in CloudWatch.<br><br>https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The explanation and link given by you is correct. But these are not enabled by default<br>To enable it you--<br><br> By default, cluster control plane logs aren't sent to CloudWatch Logs. You must enable each log type individually to send logs for your cluster. CloudWatch Logs ingestion, archive storage, and data scanning rates apply to enabled control plane logs. For more information, see CloudWatch pricing.<br><br>Read the last paragraph of the link which you have provided, so I will go with B</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 796697,
          "date": "Fri 03 Feb 2023 04:50",
          "username": "\t\t\t\tSuhasj02\t\t\t",
          "content": "The explanation and link given by you is correct. But these are not enabled by default<br>To enable it you--<br><br> By default, cluster control plane logs aren't sent to CloudWatch Logs. You must enable each log type individually to send logs for your cluster. CloudWatch Logs ingestion, archive storage, and data scanning rates apply to enabled control plane logs. For more information, see CloudWatch pricing.<br><br>Read the last paragraph of the link which you have provided, so I will go with B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 724775,
          "date": "Wed 23 Nov 2022 01:34",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "D - This is a really bad question in my mind as it ignores the goal of S3 logging.<br>A- not gonna work<br>B - This is already enabled by default through API calls<br>C - Nope<br>D - using cloudwatch you can see all pod events and statistics.<br>https://aws.amazon.com/blogs/containers/managing-kubernetes-control-plane-events-in-amazon-eks/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#406",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A systems administrator was attempting to launch a new Amazon EC2 instance with an encrypted boot volume using a new AWS Key Management Service (AWS KMS) customer managed key. The EC2 console initially stated the launch was successful, but the instance was subsequently terminated. The IAM role used by the system administrator has the following IAM permissions:<br><br><img src=\"https://img.examtopics.com/aws-certified-security-specialty/image22.png\"><br><br>Which IAM permission is the systems administrator missing?</p>",
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
              "choice": "<p>kms:GetKeyRotationStatus<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>kms:CreateGrant<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>kms:GenerateRandom<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>kms:EnableKey<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 406 discussion",
      "discusstion": [
        {
          "id": 724777,
          "date": "Wed 23 Nov 2022 02:26",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "B - Create Grant<br>Adds a grant to a key to specify who can use the key and under what conditions.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 914743,
          "date": "Sun 04 Jun 2023 16:37",
          "username": "\t\t\t\tToptip\t\t\t",
          "content": "kms:CreateGrant",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 765617,
          "date": "Wed 04 Jan 2023 13:30",
          "username": "\t\t\t\tsecdaddy\t\t\t",
          "content": "Agree B<br>Allow attachment of persistent resources (kms:CreateGrant)<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/key-policy-requirements-EBS-encryption.html",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 731115,
          "date": "Wed 30 Nov 2022 05:55",
          "username": "\t\t\t\tkerar\t\t\t",
          "content": "Adds a grant to a KMS key.<br><br>A grant is a policy instrument that allows AWS principals to use KMS keys in cryptographic operations. It also can allow them to view a KMS key (DescribeKey) and create and manage grants.<br><br>https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateGrant.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#407",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has deployed Amazon GuardDuty and now wants to implement automation for potential threats. The company has decided to start with RDP brute force attacks that come from Amazon EC2 instances in the company's AWS environment. A security engineer needs to implement a solution that blocks the detected communication from a suspicious instance until investigation and potential remediation can occur.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#407",
          "answers": [
            {
              "choice": "<p>Configure GuardDuty to send the event to an Amazon Kinesis data stream. Process the event with an Amazon Kinesis Data Analytics for Apache Flink application that sends a notification to the company through Amazon Simple Notification Service (Amazon SNS). Add rules to the network ACL to block traffic to and from the suspicious instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure GuardDuty to send the event to Amazon EventBridge (Amazon CloudWatch Events). Deploy an AWS WAF web ACL. Process the event with an AWS Lambda function that sends a notification to the company through Amazon Simple Notification Service (Amazon SNS) and adds a web ACL rule to block traffic to and from the suspicious instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable AWS Security Hub to ingest GuardDuty findings and send the event to Amazon EventBridge (Amazon CloudWatch Events). Deploy AWS Network Firewall. Process the event with an AWS Lambda function that adds a rule to a Network Firewall firewall policy to block traffic to and from the suspicious instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Enable AWS Security Hub to ingest GuardDuty findings. Configure an Amazon Kinesis data stream as an event destination for Security Hub. Process the event with an AWS Lambda function that replaces the security group of the suspicious instance with a security group that does not allow any connections.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 407 discussion",
      "discusstion": [
        {
          "id": 754960,
          "date": "Sat 24 Dec 2022 16:19",
          "username": "\t\t\t\tFyssy\t\t\t",
          "content": "key points guard duty, security group<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>security hub doesnt send toAmazon Kinesis data stream , only to firehose</li><li>Actually it states here that events can be relayed from SH -&gt; Data Stream: https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cloudwatch-events.html . Based on that, I think the answer is D</li><li>In the link you shared, the information states that Eventbridge can be configured to relay events to Kinesis data streams, its not integrating SH with data streams.</li></ul>",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 759343,
          "date": "Wed 28 Dec 2022 05:08",
          "username": "\t\t\t\tyew2\t\t\t",
          "content": "security hub doesnt send toAmazon Kinesis data stream , only to firehose<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Actually it states here that events can be relayed from SH -&gt; Data Stream: https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cloudwatch-events.html . Based on that, I think the answer is D</li><li>In the link you shared, the information states that Eventbridge can be configured to relay events to Kinesis data streams, its not integrating SH with data streams.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 791971,
          "date": "Sun 29 Jan 2023 20:15",
          "username": "\t\t\t\tmargz\t\t\t",
          "content": "Actually it states here that events can be relayed from SH -> Data Stream: https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cloudwatch-events.html . Based on that, I think the answer is D<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>In the link you shared, the information states that Eventbridge can be configured to relay events to Kinesis data streams, its not integrating SH with data streams.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 868923,
          "date": "Thu 13 Apr 2023 02:06",
          "username": "\t\t\t\tnairj\t\t\t",
          "content": "In the link you shared, the information states that Eventbridge can be configured to relay events to Kinesis data streams, its not integrating SH with data streams.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 724781,
          "date": "Wed 23 Nov 2022 01:48",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "C - Don't know what to say the workflow is off in the question according to the blog post:It should be:<br>Aws Guarduty - AWS Security HUB -Amazon event bridge - Aws Step functions (calling lambda) - then to AWS network firewall - deny policy in VPC<br>https://aws.amazon.com/blogs/security/automatically-block-suspicious-traffic-with-aws-network-firewall-and-amazon-guardduty/",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 932614,
          "date": "Sat 24 Jun 2023 15:54",
          "username": "\t\t\t\tGreen53\t\t\t",
          "content": "Remove A and B.  You can't use a Web ACL on an EC2 instance, and I can't even see how A would work.<br>This leaves C and D.  I would remove D, simply because it blocks *all* traffic to the instance. While this may block the suspicious traffic, it would also block anything else trying to access it.<br>I therefore think C is the better solution.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 914752,
          "date": "Sun 04 Jun 2023 16:46",
          "username": "\t\t\t\tToptip\t\t\t",
          "content": "Well.. that's really a tricky question",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 914198,
          "date": "Sun 04 Jun 2023 08:20",
          "username": "\t\t\t\tTofu13\t\t\t",
          "content": "implement a solution that blocks the detected communication from a suspicious instance until investigation and potential remediation<br>D would block all traffic which is not wanted (yet) in this case. Adding a security group with no rules is often the solution when u are already sure that your instance is compromised, but that's not the case here.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 896208,
          "date": "Fri 12 May 2023 21:31",
          "username": "\t\t\t\tITGURU51\t\t\t",
          "content": "The correct answer should be B:<br>https://aws.amazon.com/blogs/security/how-to-use-amazon-guardduty-and-aws-web-application-firewall-to-automatically-block-suspicious-hosts/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 876023,
          "date": "Thu 20 Apr 2023 23:54",
          "username": "\t\t\t\tAzureDP900\t\t\t",
          "content": "C is right<br><br>In this blog you can learn how to use AWS Network Firewall to automatically respond to potential security events within your Amazon Web Services (AWS) environment that are detected by Amazon GuardDuty. The goal is to rapidly contain the impact of security events, while providing additional time for follow-up investigation.<br>https://aws.amazon.com/blogs/security/automatically-block-suspicious-traffic-with-aws-network-firewall-and-amazon-guardduty/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 870695,
          "date": "Sat 15 Apr 2023 08:29",
          "username": "\t\t\t\tisokalau\t\t\t",
          "content": "According to the discussion and provided links",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 868924,
          "date": "Thu 13 Apr 2023 02:09",
          "username": "\t\t\t\tnairj\t\t\t",
          "content": "The Answer is C : because of SH's integration with Eventbridge to forward events. I haven't found any reference which states SH can integrate with Kinesis data streams so I'll choose C. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 829294,
          "date": "Sat 04 Mar 2023 20:13",
          "username": "\t\t\t\tAzureDP900\t\t\t",
          "content": "D is right<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>C is right<br>https://aws.amazon.com/blogs/security/automatically-block-suspicious-traffic-with-aws-network-firewall-and-amazon-guardduty/</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 876024,
          "date": "Thu 20 Apr 2023 23:55",
          "username": "\t\t\t\tAzureDP900\t\t\t",
          "content": "C is right<br>https://aws.amazon.com/blogs/security/automatically-block-suspicious-traffic-with-aws-network-firewall-and-amazon-guardduty/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 818232,
          "date": "Wed 22 Feb 2023 19:40",
          "username": "\t\t\t\tcreatechange\t\t\t",
          "content": "D seems correct.<br><br>Network Firewall is: 1. heavy handed and 2. appears to be generally geared at protecting the perimeter.<br><br>The problem states that the attacks are coming from EC2 instances within the customer's VPC (odd, but ok).<br><br>With the above in mind, D appears to be the appropriate solution.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I'm redacting my answer, but this question sucks. Apparently Network Firewall can be used, at the very least, inter-VPC.  This question doesn't delineate how the internal network is structured, but that at least opens up the possibility that it could be used.<br><br>Additionally, Security Hub can't send directly to a Kinesis Stream - EventBridge needs to sit in the middle. C answers this question more fully, so I am inclined to go with that now.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 818251,
          "date": "Wed 22 Feb 2023 19:51",
          "username": "\t\t\t\tcreatechange\t\t\t",
          "content": "I'm redacting my answer, but this question sucks. Apparently Network Firewall can be used, at the very least, inter-VPC.  This question doesn't delineate how the internal network is structured, but that at least opens up the possibility that it could be used.<br><br>Additionally, Security Hub can't send directly to a Kinesis Stream - EventBridge needs to sit in the middle. C answers this question more fully, so I am inclined to go with that now.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 804654,
          "date": "Fri 10 Feb 2023 19:57",
          "username": "\t\t\t\tswrp4595\t\t\t",
          "content": "Look at the step by step how it works section. We could associate blocking the network traffic to an ec2 instance id and the remote ip address.<br>https://aws.amazon.com/blogs/security/automatically-block-suspicious-traffic-with-aws-network-firewall-and-amazon-guardduty/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 791969,
          "date": "Sun 29 Jan 2023 20:14",
          "username": "\t\t\t\tmargz\t\t\t",
          "content": "Although C is tempting and would certainly mitigate the threat, I don't think it works for this scenario because it would affect the entire VPC / all the instances in the subnets routing traffic through the firewall. I'd imagine you just want to focus on locking down the *single* offending instance and the most straightforward and acceptable way to do that is locking down its security groups.<br><br>Additionally, documentation here states that you CAN forward Security Hub events to Amazon Kinesis Data Streams, so the architecture in D should work just fine --> https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cloudwatch-events.html.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 788659,
          "date": "Thu 26 Jan 2023 12:36",
          "username": "\t\t\t\tselim507\t\t\t",
          "content": "Best way to put an instance into quarantine is replace SGs with an empty one.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 772710,
          "date": "Wed 11 Jan 2023 17:08",
          "username": "\t\t\t\tluis12345\t\t\t",
          "content": "Traffic is coming from EC2 instances WITHIN the AWS architecture. This means, WAF cannot be used as it only helps with incoming traffic from the internet and a Network Firewall is required.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 765640,
          "date": "Wed 04 Jan 2023 13:50",
          "username": "\t\t\t\tsecdaddy\t\t\t",
          "content": "I'm guessing D<br>A has no linkage between sending the notification (not a requirement) and adding rules to the NACL<br>B no need for a WAF<br>C deploying a firewall is more complicated, relatively, than changing security groups<br>D seems possible if we assume that Security Hub sends to Eventbridge sends to KinesisSecurity Hub - GuardDuty \\\"When you enable both GuardDuty and Security Hub, the integration is enabled automatically.\\\"<br>https://docs.aws.amazon.com/guardduty/latest/ug/securityhub-integration.html<br><br>\\\"GuardDuty supports exporting active findings to CloudWatch Events and, optionally, to an Amazon S3 bucket.\\\"<br>https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_exportfindings.html<br><br>EventBridgeCloudWatch Events",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 765044,
          "date": "Tue 03 Jan 2023 21:58",
          "username": "\t\t\t\tawsec2\t\t\t",
          "content": "i believe B",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#408",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to implement a content delivery network for an upcoming product launch. The origin for distribution is an object store outside of AWS and requires the Authorization header from the request to be passed to it.<br><br>How can a security engineer meet this requirement in the LEAST amount of time?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#408",
          "answers": [
            {
              "choice": "<p>Migrate the objects to Amazon S3. Create a new AWS Global Accelerator accelerator that has a listener on port 443 and an endpoint group that points to the origin distribution.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new Amazon CloudFront distribution. Create a new CloudFront custom header for X-Amz-Authorization. Attach the header to the distribution.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new Amazon CloudFront distribution. Create a new CloudFront cache policy with a header whitelist for the Authorization header. Attach the policy to the distribution.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the objects to Amazon S3. Create a new Amazon CloudFront distribution. Create a new CloudFront cache policy with a header whitelist for the Authorization header. Attach the policy to the distribution.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 408 discussion",
      "discusstion": [
        {
          "id": 727429,
          "date": "Sat 26 Nov 2022 11:00",
          "username": "\t\t\t\tD2\t\t\t",
          "content": "Answer C. <br>https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-authorization-header/",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 944212,
          "date": "Thu 06 Jul 2023 03:36",
          "username": "\t\t\t\tsamCarson\t\t\t",
          "content": "Creating a CloudFront cache policy with a header whitelist allows the engineer to define which headers should be forwarded to the origin, in this case, the object store outside of AWS. By specifying the Authorization header in the whitelist, CloudFront will pass it along with the requests to the origin, fulfilling the requirement.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 829292,
          "date": "Sat 04 Mar 2023 20:12",
          "username": "\t\t\t\tAzureDP900\t\t\t",
          "content": "C is perfrect.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 803983,
          "date": "Fri 10 Feb 2023 06:10",
          "username": "\t\t\t\tmilofficial\t\t\t",
          "content": "Answer is C<br><br>A - Global Accelerator bogus<br>B - X-amz is expired<br>C - is correct<br>D - not needed to migrate data to S3. Cloudfront can connect to other origins even outside of AWS.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 803141,
          "date": "Thu 09 Feb 2023 12:32",
          "username": "\t\t\t\tSmartphone\t\t\t",
          "content": "This form of authentication using the x-amz-authorization header is no longer valid. This was part of a previous and now deprecated version of the AWS API (version 3). The new API (version 4) uses the 'authorization' header.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 765049,
          "date": "Tue 03 Jan 2023 22:01",
          "username": "\t\t\t\tawsec2\t\t\t",
          "content": "B.  Create a new Amazon CloudFront distribution. Create a new CloudFront custom header for X-Amz-Authorization. Attach the header to the distribution.<br><br>To pass the Authorization header from the request to the origin for distribution, the security engineer can create a new CloudFront custom header for X-Amz-Authorization and attach it to the CloudFront distribution. This solution does not require the objects to be migrated to Amazon S3, which means it can be implemented in the least amount of time.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Note: You can't use an origin request policy to forward the Authorization header. The header must be a part of the cache key to prevent the cache from satisfying unauthorized requests. CloudFront returns an HTTP 400 error if you create an origin request policy that forwards the Authorization header</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775891,
          "date": "Sat 14 Jan 2023 21:15",
          "username": "\t\t\t\tTalaQ\t\t\t",
          "content": "Note: You can't use an origin request policy to forward the Authorization header. The header must be a part of the cache key to prevent the cache from satisfying unauthorized requests. CloudFront returns an HTTP 400 error if you create an origin request policy that forwards the Authorization header",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 735094,
          "date": "Sun 04 Dec 2022 13:59",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "C - Is the answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 724783,
          "date": "Wed 23 Nov 2022 01:52",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "C - create a cache policy for any auth header<br>https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-authorization-header/",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#409",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations. The company has teams that use an AWS CloudHSM hardware security module (HSM) that is hosted in a central AWS account. One of the teams creates its own new dedicated AWS account and wants to use the HSM that is hosted in the central account.<br><br>How should a security engineer share the HSM that is hosted in the central account with the new dedicated account?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#409",
          "answers": [
            {
              "choice": "<p>Use AWS Resource Access Manager (AWS RAM) to share the VPC subnet ID of the HSM that is hosted in the central account with the new dedicated account. Configure the CloudHSM security group to accept inbound traffic from the private IP addresses of client instances in the new dedicated account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Identity and Access Management (IAM) to create a cross-account role to access the CloudHSM cluster that is in the central account. Create a new IAM user in the new dedicated account. Assign the cross-account role the new IAM user.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Single Sign-On to create an AWS Security Token Service (AWS STS) token to authenticate from the new dedicated account to the central account. Use the cross-account permissions that are assigned to the STS token to invoke an operation on the HSM in the central account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Resource Access Manager (AWS RAM) to share the ID of the HSM that is hosted in the central account with the new dedicated account. Configure the CloudHSM security group to accept inbound traffic from the private IP addresses of client instances in the new dedicated account.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 409 discussion",
      "discusstion": [
        {
          "id": 724786,
          "date": "Wed 23 Nov 2022 01:56",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "A : Use AWS RAM to share VPC Subnet id - same article as luisfsm but highlighted the content.<br>https://aws.amazon.com/premiumsupport/knowledge-center/cloudhsm-share-clusters/#:~:textIn%20the%20navigation%20pane%2C%20in,subnet%20ID%20for%20your%20CloudHSM.",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 914757,
          "date": "Sun 04 Jun 2023 16:52",
          "username": "\t\t\t\tToptip\t\t\t",
          "content": "sounds same type of question of SA Pro",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 897789,
          "date": "Sun 14 May 2023 19:45",
          "username": "\t\t\t\tITGURU51\t\t\t",
          "content": "According to the AWS re:Post knowledge center12, you can use AWS Resource Access Manager (AWS RAM) to share subnets for the Amazon Virtual Private Cloud (Amazon VPC) containing your CloudHSM with other AWS accounts. You also need to configure the CloudHSM security group to allow the CloudHSM client to connect to the CloudHSM cluster.<br><br>Therefore, the correct answer is A.  Use AWS Resource Access Manager (AWS RAM) to share the VPC subnet ID of the HSM that is hosted in the central account with the new dedicated account. Configure the CloudHSM security group to accept inbound traffic from the private IP addresses of client instances in the new dedicated account. A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 795773,
          "date": "Thu 02 Feb 2023 06:39",
          "username": "\t\t\t\texamtopics_dummy\t\t\t",
          "content": "Must be A due to \\\"Create a resource share with Account 1 for with other accounts\\\"<br>and \\\"In Resources, choose the Amazon VPC subnet ID for your CloudHSM.\\\"<br>https://aws.amazon.com/premiumsupport/knowledge-center/cloudhsm-share-clusters/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 791044,
          "date": "Sat 28 Jan 2023 21:11",
          "username": "\t\t\t\tygen\t\t\t",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/cloudhsm-share-clusters/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 765051,
          "date": "Tue 03 Jan 2023 22:04",
          "username": "\t\t\t\tawsec2\t\t\t",
          "content": "i think D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 724325,
          "date": "Tue 22 Nov 2022 13:49",
          "username": "\t\t\t\tluisfsm\t\t\t",
          "content": "Looks like A, but can also be D:<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/cloudhsm-share-clusters/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#410",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently began using Amazon Route 53 as its DNS provider. The company must log public DNS queries that Route 53 receives. The company has activated Route 53 public DNS query logging. The queries must be stored in a highly durable storage solution that deletes logs that are older than 1 year.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
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
              "choice": "<p>Configure Route 53 to export log data to Amazon S3. Configure an S3 Lifecycle policy that deletes objects in the target S3 bucket that are older than 1 year.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Route 53 to export log data to Amazon S3. Configure an AWS Lambda function to run every hour to delete log files that are older than 1 year.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Route 53 to export log data to Amazon CloudWatch Logs. For the target CloudWatch Logs log group, set the retention period to 1 year.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Route 53 to export log data to Amazon CloudWatch Logs. Use CloudWatch Logs Insights to identify and delete log entries that are older than 1 year.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 410 discussion",
      "discusstion": [
        {
          "id": 734298,
          "date": "Sat 03 Dec 2022 09:47",
          "username": "\t\t\t\ttainh\t\t\t",
          "content": "A is correct<br>S3 most cost-effectively<br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html<br>Changing the retention period for logs and exporting logs to Amazon S3<br><br>By default, CloudWatch Logs stores query logs indefinitely. You can optionally specify a retention period so that CloudWatch Logs deletes logs that are older than the retention period. For more information, see Change log data retention in CloudWatch Logs in the Amazon CloudWatch User Guide.<br><br>If you want to retain log data but you don't need CloudWatch Logs tools to view and analyze the data, you can export logs to Amazon S3, which can reduce your storage costs.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Agree with you. A is right</li></ul>",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 829308,
          "date": "Sat 04 Mar 2023 20:23",
          "username": "\t\t\t\tAzureDP900\t\t\t",
          "content": "Agree with you. A is right",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 897859,
          "date": "Sun 14 May 2023 21:15",
          "username": "\t\t\t\tITGURU51\t\t\t",
          "content": "Answer A is the most cost effective solution for storing the DNS logs.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 804668,
          "date": "Fri 10 Feb 2023 20:15",
          "username": "\t\t\t\tswrp4595\t\t\t",
          "content": "Option C is incorrect because it is not the most cost-effective solution. Configuring Route 53 to export log data to Amazon CloudWatch Logs and setting the retention period to 1 year will result in charges for storing the logs for the full year, even if the logs are no longer needed. Additionally, there is a charge for the number of ingested log events, and this can add up over time, leading to higher costs. In comparison, options A and B provide a more cost-effective solution by automatically deleting logs that are older than 1 year, reducing the amount of data stored and the associated charges.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 803985,
          "date": "Fri 10 Feb 2023 06:14",
          "username": "\t\t\t\tmilofficial\t\t\t",
          "content": "general wise words: key word durable is almost always S3<br>S3 is more cost-effectively than CloudWatch. S3 Lifecycle policies for automatic deletion<br><br>A 100%",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 799440,
          "date": "Mon 06 Feb 2023 06:22",
          "username": "\t\t\t\troguecloud\t\t\t",
          "content": "To all those saying C, Every AWS exam question I have ever encountered that mentions cost Expects you to know what the cheapest option is, no other answer will be accepted.<br>This makes me say A. ",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 796011,
          "date": "Thu 02 Feb 2023 12:57",
          "username": "\t\t\t\tAnshnow\t\t\t",
          "content": "A,<br><br>If you want to retain log data but you don't need CloudWatch Logs tools to view and analyze the data, you can export logs to Amazon S3, which can reduce your storage costs<br><br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 777836,
          "date": "Mon 16 Jan 2023 16:07",
          "username": "\t\t\t\tselim507\t\t\t",
          "content": "It is A. <br><br>CloudWatch does cost 10+ times more than s3<br>You can export dns query logs to either s3 or cloudwatch<br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html#query-logs-changing-retention-period",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 765054,
          "date": "Tue 03 Jan 2023 22:06",
          "username": "\t\t\t\tawsec2\t\t\t",
          "content": "i think A",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 764840,
          "date": "Tue 03 Jan 2023 16:53",
          "username": "\t\t\t\tSmartphone\t\t\t",
          "content": "Answer: A<br>If you want to retain log data but you don't need CloudWatch Logs tools to view and analyze the data, you can export logs to Amazon S3, which can reduce your storage costs. For more information, see Exporting log data to Amazon S3.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 764203,
          "date": "Tue 03 Jan 2023 04:18",
          "username": "\t\t\t\tWilson_S\t\t\t",
          "content": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 759387,
          "date": "Wed 28 Dec 2022 06:34",
          "username": "\t\t\t\tf9048f93rf\t\t\t",
          "content": "DNS query logs can be send directly to S3:<br>https://aws.amazon.com/blogs/aws/log-your-vpc-dns-queries-with-route-53-resolver-query-logs/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Not sure.It looks like that feature only logs internal queries, not public queries.<br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver-query-logs.html<br><br>In the article you post, it says \\\"if it lives in your Amazon VPC and makes a DNS query, then this feature will log it\\\"</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 766552,
          "date": "Thu 05 Jan 2023 12:15",
          "username": "\t\t\t\tsecdaddy\t\t\t",
          "content": "Not sure.It looks like that feature only logs internal queries, not public queries.<br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver-query-logs.html<br><br>In the article you post, it says \\\"if it lives in your Amazon VPC and makes a DNS query, then this feature will log it\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 758972,
          "date": "Tue 27 Dec 2022 20:42",
          "username": "\t\t\t\tmust_be_rohit\t\t\t",
          "content": "Retention period for cloudwatch logs can be till 10 years.. this seems to be the right option<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>CloudWatch does cost 10+ times more than s3, so I go with A</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 777830,
          "date": "Mon 16 Jan 2023 16:04",
          "username": "\t\t\t\tselim507\t\t\t",
          "content": "CloudWatch does cost 10+ times more than s3, so I go with A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 754927,
          "date": "Sat 24 Dec 2022 15:14",
          "username": "\t\t\t\tFyssy\t\t\t",
          "content": "send dns query logs to cloudwatchlog and set retention period to 1year.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 748126,
          "date": "Sat 17 Dec 2022 15:39",
          "username": "\t\t\t\tNOZOMI\t\t\t",
          "content": "Query logs cannot be exported directly to s3.<br>I think A is correct for cost efficiency because it can be exported to s3 with the logs function.<br>But if the answer is A, anything is possible<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Answer is C, Its a tricky question. I agree with U</li><li>I know C is a possibility, but this link has me feeling A.  https://docs.amazonaws.cn/en_us/Route53/latest/DeveloperGuide/resolver-query-logs-choosing-target-resource.html</li><li>Sorry, that link is for resolver query logs, but the question does specify 'public DNS query logging.' Its a tricky question as the it wants a cost effective solution but i don't see how you can get to S3 without it going to Cloudwatch Logs first.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 766848,
          "date": "Thu 05 Jan 2023 17:54",
          "username": "\t\t\t\tLeonardocp33\t\t\t",
          "content": "Answer is C, Its a tricky question. I agree with U",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 756098,
          "date": "Mon 26 Dec 2022 01:15",
          "username": "\t\t\t\tWilson_S\t\t\t",
          "content": "I know C is a possibility, but this link has me feeling A.  https://docs.amazonaws.cn/en_us/Route53/latest/DeveloperGuide/resolver-query-logs-choosing-target-resource.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Sorry, that link is for resolver query logs, but the question does specify 'public DNS query logging.' Its a tricky question as the it wants a cost effective solution but i don't see how you can get to S3 without it going to Cloudwatch Logs first.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 756101,
          "date": "Mon 26 Dec 2022 01:22",
          "username": "\t\t\t\tWilson_S\t\t\t",
          "content": "Sorry, that link is for resolver query logs, but the question does specify 'public DNS query logging.' Its a tricky question as the it wants a cost effective solution but i don't see how you can get to S3 without it going to Cloudwatch Logs first.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 731132,
          "date": "Wed 30 Nov 2022 06:30",
          "username": "\t\t\t\tkerar\t\t\t",
          "content": "If you want to retain log data but you don't need CloudWatch Logs tools to view and analyze the data, you can export logs to Amazon S3, which can reduce your storage costs.<br><br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 725817,
          "date": "Thu 24 Nov 2022 13:15",
          "username": "\t\t\t\ttryks\t\t\t",
          "content": "A > S3 cheaper than cloud watch",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 725314,
          "date": "Wed 23 Nov 2022 19:01",
          "username": "\t\t\t\tIsaias\t\t\t",
          "content": "I go with A,s3 provides a highly durable storageand MOST cost-effectively<br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/S3Export.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#411",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has configured a gateway VPC endpoint in a VPC.  Only Amazon EC2 instances that reside in a single subnet in the VPC can use the endpoint. The company has modified the route table for this single subnet to route traffic to Amazon S3 through the gateway VPC endpoint. The VPC provides internet access through an internet gateway.<br><br>A security engineer attempts to use instance profile credentials from an EC2 instance to retrieve an object from the S3 bucket, but the attempt fails. The security engineer verifies that the EC2 instance has an IAM instance profile with the correct permissions to access the S3 bucket and to retrieve objects. The security engineer also verifies that the S3 bucket policy is allowing access properly. Additionally, the security engineer verifies that the EC2 instance's security group and the subnet's network ACLs allow the communication.<br><br>What else should the security engineer check to determine why the request from the EC2 instance is failing?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#411",
          "answers": [
            {
              "choice": "<p>Verify that the EC2 instance's security group does not have an implicit inbound deny rule for Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Verify that the VPC endpoint's security group does not have an explicit inbound deny rule for the EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Verify that the internet gateway is allowing traffic to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Verify that the VPC endpoint policy is allowing access to Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 411 discussion",
      "discusstion": [
        {
          "id": 914771,
          "date": "Sun 04 Jun 2023 17:24",
          "username": "\t\t\t\tToptip\t\t\t",
          "content": "D for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 829313,
          "date": "Sat 04 Mar 2023 20:27",
          "username": "\t\t\t\tAzureDP900\t\t\t",
          "content": "D is right",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 766855,
          "date": "Thu 05 Jan 2023 17:59",
          "username": "\t\t\t\tLeonardocp33\t\t\t",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 734783,
          "date": "Sun 04 Dec 2022 02:33",
          "username": "\t\t\t\ttainh\t\t\t",
          "content": "D is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 731137,
          "date": "Wed 30 Nov 2022 06:40",
          "username": "\t\t\t\tkerar\t\t\t",
          "content": "Review the endpoint policy. Check if the policy blocks access to the S3 bucket or to the AWS Identity and Access Management (IAM) user affected by the connectivity issues. If necessary, edit the policy to enable access for the S3 bucket or IAM user<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/connect-s3-vpc-endpoint/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 724795,
          "date": "Wed 23 Nov 2022 02:11",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "D- Its possible the instance profile creds are not permitted in the VPC endpoint policy.All endpoints come standard with a permit any any. But they can be changed<br>Default Enpoint policy:<br>\\\"Effect\\\": \\\"Allow\\\",<br>\\\"Principal\\\": \\\"*\\\",<br>\\\"Action\\\": \\\"*\\\",<br>\\\"Resource\\\": \\\"*\\\"<br>https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-access.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#412",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a single AWS account and uses an Amazon EC2 instance to test application code. The company recently discovered that the instance was compromised. The instance was serving up malware. The analysis of the instance showed that the instance was compromised 35 days ago.<br><br>A security engineer must implement a continuous monitoring solution that automatically notifies the company's security team about compromised instances through an email distribution list for high severity findings. The security engineer must implement the solution as soon as possible.<br><br>Which combination of steps should the security engineer take to meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BCE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#412",
          "answers": [
            {
              "choice": "<p>Enable AWS Security Hub in the AWS account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable Amazon GuardDuty in the AWS account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the security team's email distribution list to the topic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Simple Queue Service (Amazon SQS) queue. Subscribe the security team's email distribution list to the queue.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon EventBridge (Amazon CloudWatch Events) rule for GuardDuty findings of high severity. Configure the rule to publish a message to the topic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon EventBridge (Amazon CloudWatch Events) rule for Security Hub findings of high severity. Configure the rule to publish a message to the queue.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 412 discussion",
      "discusstion": [
        {
          "id": 731148,
          "date": "Wed 30 Nov 2022 06:51",
          "username": "\t\t\t\tkerar\t\t\t",
          "content": "You can use CloudWatch Events with GuardDuty to set up automated finding alerts by sending GuardDuty finding events to a messaging hub to help increase the visibility of GuardDuty findings. This topic shows you how to send findings alerts to email, Slack, or Amazon Chime by setting up an SNS topic and then connecting that topic to an CloudWatch Events event rule.<br><br>https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 1161921,
          "date": "Wed 28 Feb 2024 19:51",
          "username": "\t\t\t\tRaphaello\t\t\t",
          "content": "BCE are the correct answers.<br>GuardDuty >> EventBridge >> SNS",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 1070015,
          "date": "Tue 14 Nov 2023 06:30",
          "username": "\t\t\t\tkejam\t\t\t",
          "content": "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_settingup.html#setup-sns",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 914776,
          "date": "Sun 04 Jun 2023 17:27",
          "username": "\t\t\t\tToptip\t\t\t",
          "content": "BCE for me too",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 829314,
          "date": "Sat 04 Mar 2023 20:29",
          "username": "\t\t\t\tAzureDP900\t\t\t",
          "content": "BCE is right",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 804338,
          "date": "Fri 10 Feb 2023 14:17",
          "username": "\t\t\t\tmilofficial\t\t\t",
          "content": "easy one",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 766872,
          "date": "Thu 05 Jan 2023 18:16",
          "username": "\t\t\t\tLeonardocp33\t\t\t",
          "content": "BCE, I try and it works.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 727235,
          "date": "Sat 26 Nov 2022 04:24",
          "username": "\t\t\t\tD2\t\t\t",
          "content": "BCE - all connected",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 724797,
          "date": "Wed 23 Nov 2022 02:14",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "BCE - Is correct.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BCE"
        }
      ]
    },
    {
      "question_id": "#413",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An IAM user receives an Access Denied message when the user attempts to access objects in an Amazon S3 bucket. The user and the S3 bucket are in the same AWS account. The S3 bucket is configured to use server-side encryption with AWS KMS keys (SSE-KMS) to encrypt all of its objects at rest by using a customer managed key from the same AWS account. The S3 bucket has no bucket policy defined. The IAM user has been granted permissions through an IAM policy that allows the kms:Decrypt permission to the customer managed key. The IAM policy also allows the s3:List* and s3:Get* permissions for the S3 bucket and its objects.<br><br>Which of the following is a possible reason that the IAM user cannot access the objects in the S3 bucket?</p>",
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
              "choice": "<p>The IAM policy needs to allow the kms:DescribeKey permission.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The S3 bucket has been changed to use the AWS managed key to encrypt objects at rest.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>An S3 bucket policy needs to be added to allow the IAM user to access the objects.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The KMS key policy has been edited to remove the ability for the AWS account to have full access to the key.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 413 discussion",
      "discusstion": [
        {
          "id": 742118,
          "date": "Sun 11 Dec 2022 22:39",
          "username": "\t\t\t\tBalki\t\t\t",
          "content": "Agree with D https://aws.amazon.com/premiumsupport/knowledge-center/s3-bucket-access-default-encryption/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>yes, It is D</li></ul>",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 829319,
          "date": "Sat 04 Mar 2023 20:31",
          "username": "\t\t\t\tAzureDP900\t\t\t",
          "content": "yes, It is D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1070018,
          "date": "Tue 14 Nov 2023 06:34",
          "username": "\t\t\t\tkejam\t\t\t",
          "content": "https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-default.html#key-policy-default-allow-root-enable-iam",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 862630,
          "date": "Thu 06 Apr 2023 03:30",
          "username": "\t\t\t\ttask_7\t\t\t",
          "content": "The minimum permissions required to download a file from an S3 bucket encrypted with SSE-KMS CMK are:<br><br>s3:GetObject - This permission allows you to download the object from the S3 bucket.<br><br>kms:Decrypt - This permission allows you to decrypt the data key that is used to encrypt the object.<br><br>kms:DescribeKey - This permission allows you to retrieve metadata about the CMK, such as the key policy and key state<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>My bad look like Decrypt is good enough</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 862667,
          "date": "Thu 06 Apr 2023 05:15",
          "username": "\t\t\t\ttask_7\t\t\t",
          "content": "My bad look like Decrypt is good enough",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 739219,
          "date": "Thu 08 Dec 2022 16:29",
          "username": "\t\t\t\tpiter8111\t\t\t",
          "content": "D.  The possible reason for access denied is not having correct permission in KMS resource policy.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 735304,
          "date": "Sun 04 Dec 2022 18:39",
          "username": "\t\t\t\tIsaias\t\t\t",
          "content": "it hasa iam policy to grant the s3so it does not need the bucket policybecause it says \\\"The user and the S3 bucket are in the same AWS account.\\\" ,I think the problem is with the key policy so a select D,<br>https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html<br>No AWS principal, including the account root user or key creator, has any permissions to a KMS key unless they are explicitly allowed, and never denied, in a key policy, IAM policy, or grant.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 734795,
          "date": "Sun 04 Dec 2022 03:05",
          "username": "\t\t\t\ttainh\t\t\t",
          "content": "i think D is correct<br>S3 use default policy, so resouce owner can access bucket (same AWS Account)<br>https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-policy.html<br>May be KMS key policy don't grant IAM user permission to access KMS<br>https://aws.amazon.com/premiumsupport/knowledge-center/s3-bucket-access-default-encryption/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 733600,
          "date": "Fri 02 Dec 2022 10:20",
          "username": "\t\t\t\tSreeprasad\t\t\t",
          "content": "D.  The possible reason for access denied is not having correct permission in KMS resource policy. C is not the answer. Bucket and IAM user is in the same account and iam policy already granted permissions",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 731150,
          "date": "Wed 30 Nov 2022 06:55",
          "username": "\t\t\t\tkerar\t\t\t",
          "content": "The bucket policy in Account A must grant access to Account B. <br><br>https://aws.amazon.com/premiumsupport/knowledge-center/cross-account-access-denied-error-s3/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>both are in same account in this question</li><li>It says \\\"The user and the S3 bucket are in the same AWS account.\\\" I think the problem is with the key policy so a select D,<br>https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html<br>No AWS principal, including the account root user or key creator, has any permissions to a KMS key unless they are explicitly allowed, and never denied, in a key policy, IAM policy, or grant.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 733386,
          "date": "Fri 02 Dec 2022 04:15",
          "username": "\t\t\t\tspeedster\t\t\t",
          "content": "both are in same account in this question",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 733100,
          "date": "Thu 01 Dec 2022 22:06",
          "username": "\t\t\t\tIsaias\t\t\t",
          "content": "It says \\\"The user and the S3 bucket are in the same AWS account.\\\" I think the problem is with the key policy so a select D,<br>https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html<br>No AWS principal, including the account root user or key creator, has any permissions to a KMS key unless they are explicitly allowed, and never denied, in a key policy, IAM policy, or grant.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 724799,
          "date": "Wed 23 Nov 2022 02:17",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "C - By default, all Amazon S3 buckets and objects are private. Only the resource owner which is the AWS account that created the bucket can access that bucket. The resource owner can, however, choose to grant access permissions to other resources and users. One way to do this is to write an access policy.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#414",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using AWS Organizations to create OUs for its accounts. The company has more than 20 accounts that are all part of the OUs. A security engineer must implement a solution to ensure that no account can stop log file delivery to AWS CloudTrail.<br><br>Which solution will meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#414",
          "answers": [
            {
              "choice": "<p>Use the --is-multi-region-trail option while running the create-trail command to ensure that logs are configured across all AWS Regions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an SCP that includes a Deny rule for the cloudtrail:StopLogging action. Apply the SCP to all accounts in the OUs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an SCP that includes an Allow rule for the cloudtrail:StopLogging action. Apply the SCP to all accounts in the OUs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Systems Manager to ensure that CloudTrail is always turned on.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 414 discussion",
      "discusstion": [
        {
          "id": 724802,
          "date": "Wed 23 Nov 2022 02:21",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "B - Actual syntax would be:<br>\\\"Action\\\": [<br>\\\"cloudtrail:StopLogging\\\",<br>\\\"cloudtrail:DeleteTrail\\\"<br>],<br>\\\"Resource\\\": \\\"*\\\",<br>\\\"Effect\\\": \\\"Deny\\\"",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1070024,
          "date": "Tue 14 Nov 2023 06:41",
          "username": "\t\t\t\tkejam\t\t\t",
          "content": "https://aws.amazon.com/blogs/industries/best-practices-for-aws-organizations-service-control-policies-in-a-multi-account-environment/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 829322,
          "date": "Sat 04 Mar 2023 20:34",
          "username": "\t\t\t\tAzureDP900\t\t\t",
          "content": "B is right",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 758929,
          "date": "Tue 27 Dec 2022 19:44",
          "username": "\t\t\t\tmust_be_rohit\t\t\t",
          "content": "When its OU and policy need to be across all accounts... SCP is the correct option",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 731152,
          "date": "Wed 30 Nov 2022 07:01",
          "username": "\t\t\t\tkerar\t\t\t",
          "content": "This SCP prevents users or roles in any affected account from disabling a CloudTrail log, either directly as a command or through the console.<br><br>https://asecure.cloud/a/scp_cloudtrail/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 727238,
          "date": "Sat 26 Nov 2022 04:32",
          "username": "\t\t\t\tD2\t\t\t",
          "content": "It's B",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#415",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running internal microservices on Amazon Elastic Container Service (Amazon ECS) with the Amazon EC2 launch type. The company is using Amazon Elastic Container Registry (Amazon ECR) private repositories.<br><br>A security engineer needs to encrypt the private repositories by using AWS Key Management Service (AWS KMS). The security engineer also needs to analyze the container images for any common vulnerabilities and exposures (CVEs).<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#415",
          "answers": [
            {
              "choice": "<p>Enable KMS encryption on the existing ECR repositories. Install Amazon Inspector Agent from the ECS container instances' user data. Run an assessment with the CVE rules.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Recreate the ECR repositories with KMS encryption and ECR scanning enabled. Analyze the scan report after the next push of images.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Recreate the ECR repositories with KMS encryption and ECR scanning enabled. Install AWS Systems Manager Agent on the ECS container instances. Run an inventory report.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable KMS encryption on the existing ECR repositories. Use AWS Trusted Advisor to check the ECS container instances and to verily the findings against a list of current CVEs.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 415 discussion",
      "discusstion": [
        {
          "id": 755567,
          "date": "Sun 25 Dec 2022 10:44",
          "username": "\t\t\t\tryogoku\t\t\t",
          "content": "B because:<br>1. ECR supports image scanning by default. No need to install anything:<br>https://docs.aws.amazon.com/inspector/latest/user/enable-disable-scanning-ecr.html<br>It is not possible to change ECR encryption after repository is created:<br>https://aws.amazon.com/blogs/containers/introducing-amazon-ecr-server-side-encryption-using-aws-key-management-system/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Agreed</li></ul>",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 829327,
          "date": "Sat 04 Mar 2023 20:37",
          "username": "\t\t\t\tAzureDP900\t\t\t",
          "content": "Agreed",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 985664,
          "date": "Sun 20 Aug 2023 10:58",
          "username": "\t\t\t\tNuha_23\t\t\t",
          "content": "The answer is B. <br><br>A&D are out :we can not Enable KMS encryption on the existing ECR repositories<br>\\\"For Encryption settings, this is a view only field as the encryption settings for a repository can't be changed once the repository is created.\\\"<br>C is wrong : There is no SSM agentfor CVE<br><br>more information :<br>https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-create.html<br>https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-edit.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 934060,
          "date": "Mon 26 Jun 2023 07:38",
          "username": "\t\t\t\tGreen53\t\t\t",
          "content": "You can't enable KMS on ECR after creation, so rule out A. <br>You don't need Systems Manager Agent (or Inspector) to scan images, rules out C. <br>D is incorrect, this isn't what Trusted Advisor is for.<br><br>That leaves B. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 914807,
          "date": "Sun 04 Jun 2023 18:19",
          "username": "\t\t\t\tToptip\t\t\t",
          "content": "i think B is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 914567,
          "date": "Sun 04 Jun 2023 14:22",
          "username": "\t\t\t\tTofu13\t\t\t",
          "content": "Basic scanning is the default for ECR.<br>U can use enhanced scanning which uses Inspector.<br>https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html<br>https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 842805,
          "date": "Sat 18 Mar 2023 14:33",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "The KMS encryption settings cannot be changed or disabled after the repository is created.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 818273,
          "date": "Wed 22 Feb 2023 20:08",
          "username": "\t\t\t\tcreatechange\t\t\t",
          "content": "A cannot be true. Inspector installed on the EC2 instance would not perform container image scanning. You can utilize native ECR functionality for both encryption and container scanning.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 766901,
          "date": "Thu 05 Jan 2023 19:00",
          "username": "\t\t\t\tLeonardocp33\t\t\t",
          "content": "A and D is out because encryption cannot be changed after create the repository. B is the correct answer because ECR and inspector has a automatic process for scanning CVE https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 766650,
          "date": "Thu 05 Jan 2023 14:19",
          "username": "\t\t\t\tSmartphone\t\t\t",
          "content": "Answer is B. <br>For the the CVEs report of ECR container, it needs to be activated and configured the scanning settings at ECR console. In background, AWS Inspector scans the images. For scanning, not required to installed any agent..<br>https://docs.aws.amazon.com/inspector/latest/user/enable-disable-scanning-ecr.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 761003,
          "date": "Thu 29 Dec 2022 13:41",
          "username": "\t\t\t\tTeknoklutz\t\t\t",
          "content": "Basic scanning=E2=80=94Amazon ECR uses the Common Vulnerabilities and Exposures (CVEs) database from the open-source Clair project. With basic scanning, you configure your repositories to scan on push or you can perform manual scans and Amazon ECR provides a list of scan findings.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 755108,
          "date": "Sat 24 Dec 2022 20:36",
          "username": "\t\t\t\tKevin24\t\t\t",
          "content": "CVE Scanning is mentioned only in A<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Not A and not D, because as per article below you can see that ECR repository encryption cannot be changed after it is created.<br><br>https://aws.amazon.com/blogs/containers/introducing-amazon-ecr-server-side-encryption-using-aws-key-management-system/</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 755562,
          "date": "Sun 25 Dec 2022 10:38",
          "username": "\t\t\t\tryogoku\t\t\t",
          "content": "Not A and not D, because as per article below you can see that ECR repository encryption cannot be changed after it is created.<br><br>https://aws.amazon.com/blogs/containers/introducing-amazon-ecr-server-side-encryption-using-aws-key-management-system/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 748339,
          "date": "Sat 17 Dec 2022 20:32",
          "username": "\t\t\t\tBlueocean\t\t\t",
          "content": "While the AWS Inspector seems better for CVE, and Option A could have been option, the fact that encryption cannot be enabled for existing repository rules this out. The best option remaining is Option C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 745376,
          "date": "Wed 14 Dec 2022 19:41",
          "username": "\t\t\t\tamcloud\t\t\t",
          "content": "B - https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 742830,
          "date": "Mon 12 Dec 2022 14:24",
          "username": "\t\t\t\tPhongsanth\t\t\t",
          "content": "The KMS encryption setting cannot be changed or disabled after the repository is created. see the image step in this link<br><br>https://aws.amazon.com/blogs/containers/introducing-amazon-ecr-server-side-encryption-using-aws-key-management-system/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 742117,
          "date": "Sun 11 Dec 2022 22:34",
          "username": "\t\t\t\tBalki\t\t\t",
          "content": "It should be C.  We cannot change KMS encryption on an ECR image. You can try it yourself in AWS Console. We can detect CVE through SM. https://aws.amazon.com/about-aws/whats-new/2020/10/now-use-aws-systems-manager-to-view-vulnerability-identifiers-for-missing-patches-on-your-linux-instances/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 739214,
          "date": "Thu 08 Dec 2022 16:24",
          "username": "\t\t\t\tpiter8111\t\t\t",
          "content": "The KMS encryption settings cannot be changed or disabled after the repository is created.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 734798,
          "date": "Sun 04 Dec 2022 03:21",
          "username": "\t\t\t\ttainh\t\t\t",
          "content": "A is correct<br>https://docs.aws.amazon.com/inspector/v1/userguide/inspector_cves.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#416",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an AWS WAF web ACL. According to a new compliance requirement, the company must configure comprehensive logging of all web ACL requests. The company has created an Amazon S3 bucket to store the logs.<br><br>Which combination of steps should the company take next to meet this requirement? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#416",
          "answers": [
            {
              "choice": "<p>Enable logging for the web ACL. Associate the web ACL with the Amazon Kinesis data stream.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable logging for the web ACL. Associate the web ACL with the Amazon Kinesis Data Firehose delivery stream.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure log filtering for the web ACL. Associate the web ACL with the Amazon Kinesis Data Firehose delivery stream.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Kinesis data stream in any AWS Region. Specify the S3 bucket as the destination for the data stream.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Kinesis Data Firehose delivery stream in the same AWS Region as the web ACL. Specify the S3 bucket as the destination for the delivery stream.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 416 discussion",
      "discusstion": [
        {
          "id": 725814,
          "date": "Thu 24 Nov 2022 13:07",
          "username": "\t\t\t\ttryks\t\t\t",
          "content": "B & E > To send logs to Amazon Kinesis Data Firehose, you send logs from your web ACL to an Amazon Kinesis Data Firehose with a configured storage destination. After you enable logging, AWS WAF delivers logs to your storage destination through the HTTPS endpoint of Kinesis Data Firehose.<br>https://docs.aws.amazon.com/waf/latest/developerguide/logging-kinesis.html",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 1038892,
          "date": "Mon 09 Oct 2023 19:45",
          "username": "\t\t\t\t[Removed]\t\t\t",
          "content": "It appears the answer is not on this list? WAF can be configured to send logs directly to an S3 Bucket<br><br>https://docs.aws.amazon.com/waf/latest/developerguide/logging-s3.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 829330,
          "date": "Sat 04 Mar 2023 20:41",
          "username": "\t\t\t\tAzureDP900\t\t\t",
          "content": "B,E is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 774185,
          "date": "Fri 13 Jan 2023 08:21",
          "username": "\t\t\t\tnnope\t\t\t",
          "content": "Why do we need Kinesis when S3 is directly supported? https://docs.aws.amazon.com/waf/latest/developerguide/logging.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Because web ACL to S3 direct isn't in the answer list ?</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776491,
          "date": "Sun 15 Jan 2023 12:52",
          "username": "\t\t\t\tsecdaddy\t\t\t",
          "content": "Because web ACL to S3 direct isn't in the answer list ?",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 763264,
          "date": "Sun 01 Jan 2023 17:40",
          "username": "\t\t\t\tTeknoklutz\t\t\t",
          "content": "Should be B and E",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 724807,
          "date": "Wed 23 Nov 2022 02:32",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "BE -<br>AWS WAF logging goes to kinesis data firehose and from there you define the kinesis data firehose delivery stream which points to an S3 object name.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BE"
        }
      ]
    },
    {
      "question_id": "#417",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has two VPCs in the us-east-1 Region: vpc-1 and vpe-2. The company recently created an Amazon API Gateway REST API with the endpoint type set to PRIVATE.  The company also created a VPC endpoint for the REST API in vpc-1. Resources in vpc-1 can access the REST API successfully.<br><br>The company now wants to give resources in vpc-2 the ability to access the REST API. The company creates a VPC endpoint for the REST API in vpc-2, but the resources in vpc-2 cannot access the REST API.<br><br>A security engineer must make the REST API accessible to resources in vpc-2 by creating a solution that provides the minimum access that is necessary.<br><br>Which solution will meet these requirements?</p>",
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
              "choice": "<p>Set up VPC peering between vpc-1 and vpc-2. Attach an identity-based policy to the resources in vpc-2 to grant access to the REST API.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up a VPC endpoint of vpc-2 in vpc-1. Attach an identity-based policy to the resources in vpc-2 to grant access to the REST API.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set the API endpoint type to REGIONAL. Attach a resource policy to the REST API to allow access from vpc-2.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Keep the API endpoint type as PRIVATE.  Attach a resource policy to the REST API to allow access from vpc-2.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 417 discussion",
      "discusstion": [
        {
          "id": 732360,
          "date": "Thu 01 Dec 2022 08:25",
          "username": "\t\t\t\tD2\t\t\t",
          "content": "For cross VPC, we use REGIONAL endpoints.<br><br>https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-endpoint-types.html",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 942466,
          "date": "Tue 04 Jul 2023 09:15",
          "username": "\t\t\t\tcherry23\t\t\t",
          "content": "D will work",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 932279,
          "date": "Sat 24 Jun 2023 08:54",
          "username": "\t\t\t\tNoexperience\t\t\t",
          "content": "https://repost.aws/knowledge-center/api-gateway-resource-policy-access<br><br>D is the answer",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 914533,
          "date": "Sun 04 Jun 2023 14:01",
          "username": "\t\t\t\t6_8ftwin\t\t\t",
          "content": "D<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-private-apis.html#associate-private-api-with-vpc-endpoint<br>Look at the CLI command. Multiple VPC endpoints are associated with the private REST API.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 904260,
          "date": "Mon 22 May 2023 19:32",
          "username": "\t\t\t\tsudipta0007\t\t\t",
          "content": "D is correct .<br>https://repost.aws/knowledge-center/api-gateway-private-cross-account-vpce",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 850295,
          "date": "Sat 25 Mar 2023 17:51",
          "username": "\t\t\t\tCyp\t\t\t",
          "content": "D for minimum access",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 849733,
          "date": "Sat 25 Mar 2023 02:36",
          "username": "\t\t\t\tpeddyua\t\t\t",
          "content": "it should remain privateso traffic is not leaving VPC, all you need is to configure VPC peering:<br>Update the endpoint policy of the VPC endpoint for the REST API in vpc-1 to include the route tables associated with vpc-2. This will allow traffic from vpc-2 to flow through the VPC endpoint in vpc-1 to reach the REST API.<br><br>Create a VPC peering connection between vpc-1 and vpc-2. This will allow traffic from vpc-2 to be routed to vpc-1.<br><br>Update the route tables associated with the resources in vpc-2 to route traffic destined for the REST API to the VPC peering connection with vpc-1.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 841539,
          "date": "Fri 17 Mar 2023 04:11",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "Needs to be private, regional makes it public.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Regional API endpoints<br>A regional API endpoint is intended for clients in the same region. When a client running on an EC2 instance calls an API in the same region, or when an API is intended to serve a small number of clients with high demands, a regional API reduces connection overhead.<br><br>Private API endpoints<br>A private API endpoint is an API endpoint that can only be accessed from your Amazon Virtual Private Cloud (VPC) using an interface VPC endpoint, which is an endpoint network interface (ENI) that you create in your VPC.  For more information, see Creating a private API in Amazon API Gateway.<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-endpoint-types.html</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 841540,
          "date": "Fri 17 Mar 2023 04:15",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "Regional API endpoints<br>A regional API endpoint is intended for clients in the same region. When a client running on an EC2 instance calls an API in the same region, or when an API is intended to serve a small number of clients with high demands, a regional API reduces connection overhead.<br><br>Private API endpoints<br>A private API endpoint is an API endpoint that can only be accessed from your Amazon Virtual Private Cloud (VPC) using an interface VPC endpoint, which is an endpoint network interface (ENI) that you create in your VPC.  For more information, see Creating a private API in Amazon API Gateway.<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-endpoint-types.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 836299,
          "date": "Sat 11 Mar 2023 17:57",
          "username": "\t\t\t\tawsguru1998\t\t\t",
          "content": "A,<br>D would work only if there is peering",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 811011,
          "date": "Thu 16 Feb 2023 19:47",
          "username": "\t\t\t\tgtmnagalla\t\t\t",
          "content": "Option D - \\\"provides the minimum access that is necessary.\\\" when compared to optionC",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 808209,
          "date": "Tue 14 Feb 2023 09:30",
          "username": "\t\t\t\tPatrickLi\t\t\t",
          "content": "Answer is D.  https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-resource-policies-examples.html#apigateway-resource-policies-source-vpc-example<br><br>C is NOT correct as it exposes the API to the public internet. It is the worst answer here. A or B expose the 2 VPC resources with each other but still not to the public.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 805735,
          "date": "Sat 11 Feb 2023 23:57",
          "username": "\t\t\t\tswrp4595\t\t\t",
          "content": "Option C is incorrect because the endpoint type of the REST API is set to PRIVATE, which means that the API is only accessible from within the same VPC as the endpoint. If the endpoint type is set to REGIONAL, the API can be accessed from any VPC in the same region, but this would not provide the minimum access that is necessary. The correct solution is to keep the endpoint type as PRIVATE and attach a resource policy to the REST API to allow access from vpc-2, as stated in option D. ",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 731596,
          "date": "Wed 30 Nov 2022 15:29",
          "username": "\t\t\t\tkerar\t\t\t",
          "content": "A regional API endpoint is intended for clients in the same region.<br><br>https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-endpoint-types.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 724811,
          "date": "Wed 23 Nov 2022 02:44",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "C - You can use resource policies for all API endpoint types in API Gateway: private, edge-optimized, and Regional. Regional API endpoint will typically lower the latency of connections and is recommended for such scenarios.<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-private-apis.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#418",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has application logs from AWS accounts in an organization in AWS Organizations. A security engineer is copying these logs to a centralized Amazon S3 bucket in the security team's AWS account.<br><br>Each of the company's applications is in its own AWS account. Logs are encrypted and pushed into S3 buckets that are associated with each account.<br><br>The security engineer deploys an AWS Lambda function into each account to copy the relevant log files to the centralized S3 bucket. The Lambda function can copy the log files in the centralized S3 bucket.<br><br>The Lambda function's IAM execution role policy from the security team's AWS account is the following:<br><br><img src=\"https://img.examtopics.com/aws-certified-security-specialty/image23.png\"><br><br>The centralized S3 bucket policy is the following:<br><br><img src=\"https://img.examtopics.com/aws-certified-security-specialty/image24.png\"><br><br>The security engineer needs to remove excess permissions while ensuring the functionality of the solution.<br><br>Which changes to the policies meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#418",
          "answers": [
            {
              "choice": "<p>Update the centralized S3 bucket policy to the following:<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Update the centralized S3 bucket policy to the following:<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Update the Lambda IAM execution role policy to the following:<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Update the Lambda IAM execution role policy to the following:<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Update the Lambda IAM execution role policy to the following:<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 418 discussion",
      "discusstion": [
        {
          "id": 914821,
          "date": "Sun 04 Jun 2023 18:50",
          "username": "\t\t\t\tToptip\t\t\t",
          "content": "B+D i agree",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 808214,
          "date": "Tue 14 Feb 2023 09:37",
          "username": "\t\t\t\tPatrickLi\t\t\t",
          "content": "Vote on BD. ",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 776986,
          "date": "Sun 15 Jan 2023 20:26",
          "username": "\t\t\t\tappashu\t\t\t",
          "content": "since bucketpolicy already allows put permissions, lamba willnot need that permission again.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 757289,
          "date": "Mon 26 Dec 2022 09:59",
          "username": "\t\t\t\tryogoku\t\t\t",
          "content": "BD as others explained already.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 747445,
          "date": "Fri 16 Dec 2022 18:11",
          "username": "\t\t\t\tUn1c0rn\t\t\t",
          "content": "Why NOT E? Lambda also needs s3:Get as well?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Because Lambda does not require Get operation to store logs in S3 bucket.</li><li>clarification - Lambda doesn't need Get from centralizedbucket, only from the individual buckets in the source accounts.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 757287,
          "date": "Mon 26 Dec 2022 09:58",
          "username": "\t\t\t\tryogoku\t\t\t",
          "content": "Because Lambda does not require Get operation to store logs in S3 bucket.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>clarification - Lambda doesn't need Get from centralizedbucket, only from the individual buckets in the source accounts.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 766829,
          "date": "Thu 05 Jan 2023 17:30",
          "username": "\t\t\t\tsecdaddy\t\t\t",
          "content": "clarification - Lambda doesn't need Get from centralizedbucket, only from the individual buckets in the source accounts.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 742109,
          "date": "Sun 11 Dec 2022 22:18",
          "username": "\t\t\t\tBalki\t\t\t",
          "content": "Agree with others",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 739481,
          "date": "Thu 08 Dec 2022 22:28",
          "username": "\t\t\t\tIsaias\t\t\t",
          "content": "Guys A cannot be, why? because you will get the next error \\\"Action does not apply to any resource(s) in statement\\\" in actions like getObect PutObject You need specify action inside tu bucket with \\\"*\\\"in the arn resource,<br>https://bobbyhadz.com/blog/aws-s3-action-does-not-apply-to-resources<br>So I will go with B and D",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 735322,
          "date": "Sun 04 Dec 2022 18:58",
          "username": "\t\t\t\tIsaias\t\t\t",
          "content": "Guys A cannot be, why? because you will get the next error \\\"Action does not apply to any resource(s) in statement\\\" in actions like getObect PutObject You need specify action inside tu bucket with \\\"*\\\"in the arn resource,<br>https://bobbyhadz.com/blog/aws-s3-action-does-not-apply-to-resources<br>So I will go with B and D",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 734893,
          "date": "Sun 04 Dec 2022 07:58",
          "username": "\t\t\t\ttainh\t\t\t",
          "content": "With Centrallized S3 bucket policy jusst need Put* permission<br>https://lepczynski.it/en/aws_en/how-to-automatically-copy-data-from-aws-s3-lambda-events/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Can't be A, it's missing the \\\"*\\\" on the resource (outlined in your link also)</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 932607,
          "date": "Sat 24 Jun 2023 15:47",
          "username": "\t\t\t\tGreen53\t\t\t",
          "content": "Can't be A, it's missing the \\\"*\\\" on the resource (outlined in your link also)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 725810,
          "date": "Thu 24 Nov 2022 13:01",
          "username": "\t\t\t\ttryks\t\t\t",
          "content": "Will go for A & C<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>C? would be D because the lambda needs Put?<br>I think AC</li><li>correct: AD</li><li>A can not be, because there is a missing '*' in the policy</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 733272,
          "date": "Fri 02 Dec 2022 01:51",
          "username": "\t\t\t\tlandsamboni\t\t\t",
          "content": "C? would be D because the lambda needs Put?<br>I think AC<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>correct: AD</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 734632,
          "date": "Sat 03 Dec 2022 19:47",
          "username": "\t\t\t\tlandsamboni\t\t\t",
          "content": "correct: AD",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 788848,
          "date": "Thu 26 Jan 2023 16:19",
          "username": "\t\t\t\tselim507\t\t\t",
          "content": "A can not be, because there is a missing '*' in the policy",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#419",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's security team needs to receive a notification whenever an AWS access key has not been rotated in 90 or more days. A security engineer must develop a solution that provides these notifications automatically.<br><br>Which solution will meet these requirements with the LEAST amount of effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#419",
          "answers": [
            {
              "choice": "<p>Deploy an AWS Config managed rule to run on a periodic basis of 24 hours. Select the access-keys-rotated managed rule, and set the maxAccessKeyAge parameter to 90 days. Create an Amazon EventBridge (Amazon CloudWatch Events) rule with an event pattern that matches the compliance type of NON_COMPLIANT from AWS Config for the managed rule. Configure EventBridge (CloudWatch Events) to send an Amazon Simple Notification Service (Amazon SNS) notification to the security team.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a script to export a .csv file from the AWS Trusted Advisor check for IAM access key rotation. Load the script into an AWS Lambda function that will upload the .csv file to an Amazon S3 bucket. Create an Amazon Athena table query that runs when the .csv file is uploaded to the S3 bucket. Publish the results for any keys older than 90 days by using an invocation of an Amazon Simple Notification Service (Amazon SNS) notification to the security team.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a script to download the IAM credentials report on a periodic basis. Load the script into an AWS Lambda function that will run on a schedule through Amazon EventBridge (Amazon CloudWatch Events). Configure the Lambda script to load the report into memory and to filter the report for records in which the key was last rotated at least 90 days ago. If any records are detected, send an Amazon Simple Notification Service (Amazon SNS) notification to the security team.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Lambda function that queries the IAM API to list all the users. Iterate through the users by using the ListAccessKeys operation. Verify that the value in the CreateDate field is not at least 90 days old. Send an Amazon Simple Notification Service (Amazon SNS) notification to the security team if the value is at least 90 days old. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to schedule the Lambda function to run each day.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 419 discussion",
      "discusstion": [
        {
          "id": 724812,
          "date": "Wed 23 Nov 2022 02:47",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "A - AWS config to event bridge to SNS",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 742102,
          "date": "Sun 11 Dec 2022 22:12",
          "username": "\t\t\t\tBalki\t\t\t",
          "content": "https://aws.amazon.com/blogs/mt/managing-aged-access-keys-through-aws-config-remediations/",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 841545,
          "date": "Fri 17 Mar 2023 04:24",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "A since AWS Config is the least amount of effort required.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 829335,
          "date": "Sat 04 Mar 2023 20:48",
          "username": "\t\t\t\tAzureDP900\t\t\t",
          "content": "A is right",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#420",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A security engineer needs to create an Amazon S3 bucket policy that restricts access to specific IP address ranges. The policy must allow only IP addresses in the range 10.24.34.0/23 to access the S3 bucket DOC-EXAMPLE-BUCKET and its objects. The policy must deny access to DOC-EXAMPLE-BUCKET from other IP address ranges.<br><br>IAM policies will control the actions that principals can take in the S3 bucket.<br><br>Which policy meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#420",
          "answers": [
            {
              "choice": "<p><img class=\"w-100 p-3\" src=\"https://img.examtopics.com/aws-certified-security-specialty/image30.png\"></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p><img class=\"w-100 p-3\" src=\"https://img.examtopics.com/aws-certified-security-specialty/image31.png\"></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p><img class=\"w-100 p-3\" src=\"https://img.examtopics.com/aws-certified-security-specialty/image32.png\"></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p><img class=\"w-100 p-3\" src=\"https://img.examtopics.com/aws-certified-security-specialty/image33.png\"></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 420 discussion",
      "discusstion": [
        {
          "id": 723610,
          "date": "Mon 21 Nov 2022 15:30",
          "username": "\t\t\t\tdocjames81\t\t\t",
          "content": "I vote B, AWS docs have it as an example of this use case: https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html#example-bucket-policies-use-case-3",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 985695,
          "date": "Sun 20 Aug 2023 11:51",
          "username": "\t\t\t\tNuha_23\t\t\t",
          "content": "See : Restrict access to a specific IP address range<br>https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 839066,
          "date": "Tue 14 Mar 2023 18:14",
          "username": "\t\t\t\tArtaggedon\t\t\t",
          "content": "Unless I'm missing something (and if so, please let me know), answer is D and heres why:<br><br>A - INCORRECT - Allows IP not it the CIDR, which means allows everyone but the CIDR. Just the opposite of what we want.<br>B - INCORRECT - Denies access to everyone who is not in the CIDR, BUT it doesn't allow access the IPs inside the CIDR, which is something required.<br>C - INCORRECT - Denies everyone who is in the CIDR, which is bad, but not as bad as A. <br>D - CORRECT - Allows IP's in the CIDR, which we want. And, because AWS has a default policy of DENY if we don't have and explicit DENY, the policy denies access to people outside the CIDR by omission.<br><br>It's true that D doesn't have an explicit deny, but it's the only one that furfills the request of granting access to the CIDR and leaving outside the others. But, please, correct me if I'm wrong<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Let me correct D: Allows IP's in the CIDR, which we want. And, because AWS has a default policy of DENY if we don't have and explicit *ALLOW*, the policy denies access to people outside the CIDR by omission.</li><li>B<br>\\\"policy must deny\\\"<br>We don't know the IAM policy.</li><li>there is a mistake in ARNs</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 839068,
          "date": "Tue 14 Mar 2023 18:16",
          "username": "\t\t\t\tArtaggedon\t\t\t",
          "content": "Let me correct D: Allows IP's in the CIDR, which we want. And, because AWS has a default policy of DENY if we don't have and explicit *ALLOW*, the policy denies access to people outside the CIDR by omission.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>B<br>\\\"policy must deny\\\"<br>We don't know the IAM policy.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 914572,
          "date": "Sun 04 Jun 2023 14:27",
          "username": "\t\t\t\t6_8ftwin\t\t\t",
          "content": "B<br>\\\"policy must deny\\\"<br>We don't know the IAM policy.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 930208,
          "date": "Thu 22 Jun 2023 08:28",
          "username": "\t\t\t\tvherman\t\t\t",
          "content": "there is a mistake in ARNs",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 829338,
          "date": "Sat 04 Mar 2023 20:50",
          "username": "\t\t\t\tAzureDP900\t\t\t",
          "content": "B is right",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 804036,
          "date": "Fri 10 Feb 2023 07:32",
          "username": "\t\t\t\tmilofficial\t\t\t",
          "content": "always the double negatives<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://repost.aws/knowledge-center/block-s3-traffic-vpc-ip</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 862715,
          "date": "Thu 06 Apr 2023 07:51",
          "username": "\t\t\t\ttask_7\t\t\t",
          "content": "https://repost.aws/knowledge-center/block-s3-traffic-vpc-ip",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 779364,
          "date": "Tue 17 Jan 2023 23:07",
          "username": "\t\t\t\tNocky24\t\t\t",
          "content": "B is the right answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 734896,
          "date": "Sun 04 Dec 2022 08:02",
          "username": "\t\t\t\ttainh\t\t\t",
          "content": "B is correct",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 724336,
          "date": "Tue 22 Nov 2022 14:26",
          "username": "\t\t\t\tluisfsm\t\t\t",
          "content": "Agree with B",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#421",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's security engineer receives an abuse notification from AWS. The notification indicates that someone is hosting malware from the company's AWS account. After investigation, the security engineer finds a new Amazon S3 bucket that an IAM user created without authorization.<br><br>Which combination of steps should the security engineer take to MINIMIZE the consequences of this compromise? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CDF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#421",
          "answers": [
            {
              "choice": "<p>Encrypt all AWS CloudTrail logs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Turn on Amazon GuardDuty.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Change the password for all IAM users.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Rotate or delete all AWS access keys.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Take snapshots of all Amazon Elastic Block Store (Amazon EBS) volumes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Delete any resources that are unrecognized or unauthorized.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 421 discussion",
      "discusstion": [
        {
          "id": 729198,
          "date": "Mon 28 Nov 2022 15:10",
          "username": "\t\t\t\tvyktors\t\t\t",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/potential-account-compromise/<br>B - Guard Duty is too late<br>E- snapshot is important for investigation, but not all ebs just impacted",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: CDF"
        },
        {
          "id": 722253,
          "date": "Sat 19 Nov 2022 22:10",
          "username": "\t\t\t\tShriraj32\t\t\t",
          "content": "CDF, for sure.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: CDF"
        },
        {
          "id": 942746,
          "date": "Tue 04 Jul 2023 14:28",
          "username": "\t\t\t\tsssssdssds\t\t\t",
          "content": "cdf for sure",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CDF"
        },
        {
          "id": 868994,
          "date": "Thu 13 Apr 2023 03:48",
          "username": "\t\t\t\tnairj\t\t\t",
          "content": "C, D and F - Rest are distractors.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 766045,
          "date": "Wed 04 Jan 2023 21:09",
          "username": "\t\t\t\tawsec2\t\t\t",
          "content": "BDF<br>Other options, such as encrypting CloudTrail logs, changing passwords for all IAM users, and taking snapshots of EBS volumes, may be useful in certain circumstances, but they would not necessarily minimize the consequences of this particular compromise.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 728440,
          "date": "Sun 27 Nov 2022 17:46",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "CDF - Is the answer.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: CDF"
        },
        {
          "id": 727205,
          "date": "Sat 26 Nov 2022 03:04",
          "username": "\t\t\t\tD2\t\t\t",
          "content": "Question is asking to \\\"minimize\\\" consequence of this \\\"occurance\\\"<br>answer should be CDE<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I meant CDF</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 727206,
          "date": "Sat 26 Nov 2022 03:05",
          "username": "\t\t\t\tD2\t\t\t",
          "content": "I meant CDF",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 725797,
          "date": "Thu 24 Nov 2022 12:49",
          "username": "\t\t\t\ttryks\t\t\t",
          "content": "BDF -<br>B > guard duty can help to detect compromission<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>sure, but it will not help if you have ALREADY been comprimised</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 770239,
          "date": "Mon 09 Jan 2023 11:23",
          "username": "\t\t\t\tluis12345\t\t\t",
          "content": "sure, but it will not help if you have ALREADY been comprimised",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#422",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running its workloads in a single AWS Region and uses AWS Organizations. A security engineer must implement a solution to prevent users from launching resources in other Regions.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#422",
          "answers": [
            {
              "choice": "<p>Create an IAM policy that has an aws:RequestedRegion condition that allows actions only in the designated Region. Attach the policy to all users.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM policy that has an aws:RequestedRegion condition that denies actions that are not in the designated Region. Attach the policy to the AWS account in AWS Organizations.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM policy that has an aws:RequestedRegion condition that allows the desired actions. Attach the policy only to the users who are in the designated Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an SCP that has an aws:RequestedRegion condition that denies actions that are not in the designated Region. Attach the SCP to the AWS account in AWS Organizations.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 422 discussion",
      "discusstion": [
        {
          "id": 724826,
          "date": "Wed 23 Nov 2022 03:06",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "D - Although you can use a IAM policy to prevent users launchingresources in other regions.The best practice is to use SCP when using AWS organizations.<br>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_general.html#example-scp-deny-region<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Thank you for sharing the link</li></ul>",
          "upvote_count": "14",
          "selected_answers": ""
        },
        {
          "id": 829491,
          "date": "Sun 05 Mar 2023 00:36",
          "username": "\t\t\t\tAzureDP900\t\t\t",
          "content": "Thank you for sharing the link",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 897909,
          "date": "Mon 15 May 2023 00:35",
          "username": "\t\t\t\tITGURU51\t\t\t",
          "content": "Option D is the best solution to meet the requirements with the least operational overhead. By creating an SCP that denies actions that are not in the designated Region and attaching it to the AWS account in AWS Organizations, you can ensure that no user or role can launch resources in other Regions, regardless of their IAM permissions.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 804038,
          "date": "Fri 10 Feb 2023 07:33",
          "username": "\t\t\t\tmilofficial\t\t\t",
          "content": "cross account permissions - > SCP",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 747496,
          "date": "Fri 16 Dec 2022 19:27",
          "username": "\t\t\t\tUn1c0rn\t\t\t",
          "content": "Answer: D<br>SCP is for less effort and most effective",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#423",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Company A has an AWS account that is named Account A.  Company A recently acquired Company B, which has an AWS account that is named Account B.  Company B stores its files in an Amazon S3 bucket. The administrators need to give a user from Account A full access to the S3 bucket in Account B. <br><br>After the administrators adjust the IAM permissions for the user in Account A to access the S3 bucket in Account B, the user still cannot access any files in the S3 bucket.<br><br>Which solution will resolve this issue?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#423",
          "answers": [
            {
              "choice": "<p>In Account B, create a bucket ACL to allow the user from Account A to access the S3 bucket in Account B. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>In Account B, create an object ACL to allow the user from Account A to access all the objects in the S3 bucket in Account B. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>In Account B, create a bucket policy to allow the user from Account A to access the S3 bucket in Account B. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>In Account B, create a user policy to allow the user from Account A to access the S3 bucket in Account B. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 423 discussion",
      "discusstion": [
        {
          "id": 735587,
          "date": "Mon 05 Dec 2022 02:44",
          "username": "\t\t\t\ttainh\t\t\t",
          "content": "C is correct<br>Cross-account access to S3<br>https://aws.amazon.com/premiumsupport/knowledge-center/cross-account-access-s3/",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 885347,
          "date": "Sun 30 Apr 2023 16:53",
          "username": "\t\t\t\tG4Exams\t\t\t",
          "content": "C.  Bucket Policy is still needed in the bucket.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 731703,
          "date": "Wed 30 Nov 2022 16:54",
          "username": "\t\t\t\tkerar\t\t\t",
          "content": "AWS recommends using S3 bucket policies or IAM policies for access control.<br><br>https://aws.amazon.com/blogs/security/iam-policies-and-bucket-policies-and-acls-oh-my-controlling-access-to-s3-resources/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 724829,
          "date": "Wed 23 Nov 2022 03:08",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "C - Bucket policies are Deny by default.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#424",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A security engineer needs to implement automation for AWS resources at scale. The goal is to block traffic to and from suspicious remote hosts by specifying IP addresses that are associated with known command and control servers for botnets. The security engineer is using AWS Step Functions to orchestrate the solution.<br><br>What should the security engineer do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#424",
          "answers": [
            {
              "choice": "<p>Use Amazon GuardDuty to detect suspicious communication. Use an Amazon DynamoDB table to store IP addresses of suspected malicious hosts. Use AWS. Lambda functions to update the DynamoDB table and to update an AWS WAF web ACL rule to block the traffic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon GuardDuty to detect suspicious communication. Use an Amazon DynamoDB table to store IP addresses of suspected malicious hosts. Use AWS Lambda functions to update the DynamoDB table and to update an AWS Network Firewall rule group to block the traffic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Inspector to detect suspicious communication. Use an Amazon DynamoDB table to store IP addresses of suspected malicious hosts. Use AWS Lambda functions to update the DynamoDB table and to update an AWS WAF web ACL rule to block the traffic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Traffic Mirroring. Direct the mirrored traffic to an Amazon EC2 instance that has the Amazon Inspector agent configured to search for suspicious communication. Use an Amazon DynamoDB table to store IP addresses of suspected malicious hosts. Use AWS Lambda functions to update the DynamoDB table and to update an AWS Network Firewall rule group to block the traffic.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 424 discussion",
      "discusstion": [
        {
          "id": 758912,
          "date": "Tue 27 Dec 2022 19:24",
          "username": "\t\t\t\tmust_be_rohit\t\t\t",
          "content": "The important requirement isto block traffic to and from suspicious remote hosts.. Thus should be network firewall as WAF only blocks incoming traffic",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 724830,
          "date": "Wed 23 Nov 2022 03:11",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "B - pretty much same as another question above.Firewall to deny.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://aws.amazon.com/blogs/security/how-to-use-amazon-guardduty-and-aws-web-application-firewall-to-automatically-block-suspicious-hosts/</li><li>While I think B should work, I have included a link supporting A. </li><li>Changing my answer to A, due to the AWS Step Functions requirement.</li><li>The RUL provided by aj2aj2 specifically shows Step Functions in the Solution Overview diagram and the article provides exactly the solution that is being requested.B</li></ul>",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 735693,
          "date": "Mon 05 Dec 2022 07:10",
          "username": "\t\t\t\tWilson_S\t\t\t",
          "content": "https://aws.amazon.com/blogs/security/how-to-use-amazon-guardduty-and-aws-web-application-firewall-to-automatically-block-suspicious-hosts/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>While I think B should work, I have included a link supporting A. </li><li>Changing my answer to A, due to the AWS Step Functions requirement.</li><li>The RUL provided by aj2aj2 specifically shows Step Functions in the Solution Overview diagram and the article provides exactly the solution that is being requested.B</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 735694,
          "date": "Mon 05 Dec 2022 07:12",
          "username": "\t\t\t\tWilson_S\t\t\t",
          "content": "While I think B should work, I have included a link supporting A. <br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Changing my answer to A, due to the AWS Step Functions requirement.</li><li>The RUL provided by aj2aj2 specifically shows Step Functions in the Solution Overview diagram and the article provides exactly the solution that is being requested.B</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 750087,
          "date": "Mon 19 Dec 2022 18:39",
          "username": "\t\t\t\tWilson_S\t\t\t",
          "content": "Changing my answer to A, due to the AWS Step Functions requirement.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The RUL provided by aj2aj2 specifically shows Step Functions in the Solution Overview diagram and the article provides exactly the solution that is being requested.B</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 767391,
          "date": "Fri 06 Jan 2023 08:53",
          "username": "\t\t\t\tsecdaddy\t\t\t",
          "content": "The RUL provided by aj2aj2 specifically shows Step Functions in the Solution Overview diagram and the article provides exactly the solution that is being requested.B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 932640,
          "date": "Sat 24 Jun 2023 16:20",
          "username": "\t\t\t\tGreen53\t\t\t",
          "content": "Eliminate C and D. <br>Leaves A/B<br>No where does it mention ALB/CloudFront or the like, so a WAF isn't required (and, as stated, it blocks inbound traffic only) so I'd go with B. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 914606,
          "date": "Sun 04 Jun 2023 14:49",
          "username": "\t\t\t\t6_8ftwin\t\t\t",
          "content": "B<br>WAF is used for web applications. The questions mentioned protecting \\\"AWS resources\\\", which is much broader in scope.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 842369,
          "date": "Sat 18 Mar 2023 01:01",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "The goal is to block traffic at scale, using a network firewall is a more efficient option than a WAF web ACL rule. By using AWS Step Functions, the security engineer can orchestrate the Lambda functions to automate the process.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 748281,
          "date": "Sat 17 Dec 2022 19:32",
          "username": "\t\t\t\taj2aj2\t\t\t",
          "content": "B is correct - The automation example we provide in this blog post is focused on blocking traffic to and from suspicious remote hosts, for example to IP addresses associated with known command and control servers for botnets.https://aws.amazon.com/blogs/security/automatically-block-suspicious-traffic-with-aws-network-firewall-and-amazon-guardduty/",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 741352,
          "date": "Sun 11 Dec 2022 02:33",
          "username": "\t\t\t\tmaddyr\t\t\t",
          "content": "A for me",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 735598,
          "date": "Mon 05 Dec 2022 03:00",
          "username": "\t\t\t\ttainh\t\t\t",
          "content": "B is correct<br>https://aws.amazon.com/blogs/security/automatically-block-suspicious-traffic-with-aws-network-firewall-and-amazon-guardduty/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#425",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using AWS Systems Manager Session Manager to manage Amazon EC2 instances. A user is unable to connect to a new EC2 instance that runs Amazon Linux 2 in a private subnet in a newly created VPC.  The user confirms that the new EC2 instance has the correct IAM instance profile attached.<br><br>What is the MOST likely root cause of the user's inability to connect?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#425",
          "answers": [
            {
              "choice": "<p>The EC2 key pair on the instance is mismatched with the user's key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The EC2 instance security group is missing SSH port 22 for inbound traffic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The EC2 instance is in a private VPC and is missing the ssmmessages endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Linux 2 does not have Systems Manager Agent preinstalled.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 425 discussion",
      "discusstion": [
        {
          "id": 731780,
          "date": "Wed 30 Nov 2022 18:08",
          "username": "\t\t\t\tkerar\t\t\t",
          "content": "Configure VPC endpoints to reach Systems Manager endpoints for instances in a private subnet. The ssmmessages endpoint is required only for AWS Systems Manager Session Manager.https://aws.amazon.com/premiumsupport/knowledge-center/systems-manager-ec2-instance-not-appear/",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 724833,
          "date": "Wed 23 Nov 2022 03:16",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "C -<br>https://aws.amazon.com/premiumsupport/knowledge-center/ec2-systems-manager-vpc-endpoints/",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 931711,
          "date": "Fri 23 Jun 2023 16:49",
          "username": "\t\t\t\tAndrii223\t\t\t",
          "content": "Private subnets<br><br>Use private IP addresses to privately access Amazon EC2 and Systems Manager APIs. To resolve issues when connecting to an endpoint from an instance in a private subnet, confirm one of the following points:<br><br>Your instance's route table routes internet traffic to a NAT gateway.<br>Your VPC endpoint is configured to reach Systems Manager endpoints.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 927555,
          "date": "Mon 19 Jun 2023 15:40",
          "username": "\t\t\t\tSamcert\t\t\t",
          "content": "https://repost.aws/knowledge-center/ec2-systems-manager-vpc-endpoints",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 915030,
          "date": "Mon 05 Jun 2023 04:51",
          "username": "\t\t\t\tTofu13\t\t\t",
          "content": "Other endpoints also have to be established.<br>https://repost.aws/knowledge-center/ec2-systems-manager-vpc-endpoints",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 760365,
          "date": "Wed 28 Dec 2022 22:48",
          "username": "\t\t\t\tlandsamboni\t\t\t",
          "content": "C.  The EC2 instance is in a private VPC and is missing the ssmmessages endpoint.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 756076,
          "date": "Sun 25 Dec 2022 23:44",
          "username": "\t\t\t\tyew2\t\t\t",
          "content": "why not D? Agent needs to be installed<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Yes, you are right. However, the SSM agent is pre-installed in every Amazon Linux image.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 776620,
          "date": "Sun 15 Jan 2023 14:44",
          "username": "\t\t\t\tTerrenceC\t\t\t",
          "content": "Yes, you are right. However, the SSM agent is pre-installed in every Amazon Linux image.",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#426",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently adopted new compliance standards that require all user actions in AWS to be logged. The user actions must be logged for all accounts that belong to an organization in AWS Organizations. The company needs to set alarms that respond when specified actions occur. The alarms must forward alerts to an email distribution list. The alerts must occur in as close to real time as possible.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#426",
          "answers": [
            {
              "choice": "<p>Implement an AWS CloudTrail trail as an organizational trail. Configure the trail with Amazon CloudWatch Logs forwarding. In CloudWatch Logs, set a metric filter for any user action events that the company specifies. Create an Amazon CloudWatch alarm to provide alerts for occurrences within a reported period and to publish messages to an Amazon Simple Notification Service (Amazon SNS) topic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Implement an AWS CloudTrail trail. Configure the trail with Amazon CloudWatch Logs forwarding. In CloudWatch Logs, set a metric filter for any user action events that the company specifies. Create an Amazon CloudWatch alarm to provide alerts for occurrences within a reported period and to send messages to an Amazon Simple Queue Service (Amazon SQS) queue.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement an AWS CloudTrail trail as an organizational trail. Configure the trail to store logs in an Amazon S3 bucket. Configure an Amazon EC2 instance to mount the S3 bucket as a file system to ingest new log files that are pushed to the S3 bucket. Configure the EC2 instance also to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic when one of the specified actions is found in the logs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement an AWS CloudTrail trail. Configure the trail to store logs in an Amazon S3 bucket. Each hour, create an AWS Glue Data Catalog that references the S3 bucket. Configure Amazon Athena to initiate queries against the Data Catalog to identify the specified actions in the logs.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 426 discussion",
      "discusstion": [
        {
          "id": 735605,
          "date": "Mon 05 Dec 2022 03:10",
          "username": "\t\t\t\ttainh\t\t\t",
          "content": "A is correct<br>https://aws.amazon.com/blogs/mt/monitor-changes-and-auto-enable-logging-in-aws-cloudtrail/",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 829494,
          "date": "Sun 05 Mar 2023 00:45",
          "username": "\t\t\t\tAzureDP900\t\t\t",
          "content": "A is right",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 767399,
          "date": "Fri 06 Jan 2023 09:08",
          "username": "\t\t\t\tsecdaddy\t\t\t",
          "content": "Also of interest https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-trail-organization.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 724836,
          "date": "Wed 23 Nov 2022 03:19",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "A - is correct",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#427",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is operating an AWS workload that consists of multiple applications that are deployed on Amazon EC2 instances. Recent changes to a security group caused connectivity issues for some application instances that use the security group. The company now needs all changes to security groups to initiate an alert to a specific company email address.<br><br>Which solution will meet this requirement in the MOST operationally efficient manner?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#427",
          "answers": [
            {
              "choice": "<p>Implement AWS Config. Configure an AWS Config managed rule to detect changes to security groups. Configure a manual remediation action for noncompliant resources to forward evaluations to an Amazon Simple Notification Service (Amazon SNS) topic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement AWS Config. Configure an AWS Config managed rule to detect changes to security groups. Configure a manual remediation action for noncompliant resources to forward evaluations to an Amazon Simple Queue Service (Amazon SQS) queue.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement AWS CloudTrail. Configure forwarding to Amazon CloudWatch Logs. Configure a CloudWatch Logs metric filter with a pattern match on all security group changes. Configure an Amazon CloudWatch alarm to publish messages to an Amazon Simple Notification Service (Amazon SNS) topic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Implement AWS CloudTrail. Configure forwarding to Amazon S3. Configure an AWS Glue crawler for use with Amazon Athena to query log contents for event patterns that indicate changes to security groups. Publish the query results to an Amazon Simple Queue Service (Amazon SQS) queue.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 427 discussion",
      "discusstion": [
        {
          "id": 792013,
          "date": "Sun 29 Jan 2023 20:53",
          "username": "\t\t\t\tmargz\t\t\t",
          "content": "Choosing C over A, quite a few reasons which others already stated, but a big one is that the question states \\\"The company now needs ALL changes to security groups to initiate an alert to a specific company email address.\\\" Key-word being \\\"ALL\\\". I believe A would only notify of security group changes that made a sg non-compliant, whereas CloudTrail gives us a wider scope of activity.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 735607,
          "date": "Mon 05 Dec 2022 03:22",
          "username": "\t\t\t\ttainh\t\t\t",
          "content": "i choose C<br>https://aws.amazon.com/es/blogs/security/how-to-monitor-aws-account-configuration-changes-and-api-calls-to-amazon-ec2-security-groups/<br>A: focused on compliance management<br>C: offers a faster way to detect changes to a security group's configuration<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>C is faster and operationally efficient</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 742085,
          "date": "Sun 11 Dec 2022 21:41",
          "username": "\t\t\t\tBalki\t\t\t",
          "content": "C is faster and operationally efficient",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 897937,
          "date": "Mon 15 May 2023 01:55",
          "username": "\t\t\t\tITGURU51\t\t\t",
          "content": "The questions states that we are looking for the most operationally efficient method. Therefore C<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A is more efficient than C</li><li>But the problem is managed rule</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 942508,
          "date": "Tue 04 Jul 2023 10:18",
          "username": "\t\t\t\tcherry23\t\t\t",
          "content": "A is more efficient than C<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But the problem is managed rule</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 942518,
          "date": "Tue 04 Jul 2023 10:29",
          "username": "\t\t\t\tcherry23\t\t\t",
          "content": "But the problem is managed rule",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 871634,
          "date": "Sun 16 Apr 2023 11:41",
          "username": "\t\t\t\tawsgugu\t\t\t",
          "content": "C:<br><br>In this post, Method 1 uses AWS Config to monitor changes to a security group's configuration as part of an organization's overall compliance auditing program. Method 1 views a change to a VPC security group as a compliance risk. Use this method when you want to bolster your company's compliance management.<br><br>Method 2 uses AWS CloudTrail and Amazon CloudWatch Events to identify AWS API calls that could change the configurations of VPC security groups. Method 2 views a change to a VPC security group as a potential security incident that should be identified in near real time. Use this method when you want to support your company's monitoring of security operations.<br><br>https://aws.amazon.com/blogs/security/how-to-monitor-aws-account-configuration-changes-and-api-calls-to-amazon-ec2-security-groups/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 811821,
          "date": "Fri 17 Feb 2023 12:52",
          "username": "\t\t\t\tBoss_Sivaji\t\t\t",
          "content": "Both A and C works, however for the overall compliance A is efficient and for faster incident detection C is better. Here the company needs all changes to Security Group.<br>https://aws.amazon.com/blogs/security/how-to-monitor-aws-account-configuration-changes-and-api-calls-to-amazon-ec2-security-groups/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 770246,
          "date": "Mon 09 Jan 2023 11:32",
          "username": "\t\t\t\tluis12345\t\t\t",
          "content": "A also includes remediation and the questions does not ask for it",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 769000,
          "date": "Sun 08 Jan 2023 01:59",
          "username": "\t\t\t\tAssilAbdulrahim\t\t\t",
          "content": "Another reason for choosing C is the time it takes for the alert to get sent. I think A might take up to 4 hours while C would be nearly immediate.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 767409,
          "date": "Fri 06 Jan 2023 09:22",
          "username": "\t\t\t\tsecdaddy\t\t\t",
          "content": "MOST operationally efficientless manual intervention.A requires manual remediation so from this standpoint C is better than A. <br>Reference for the cloudwatch logs metric filter trigger alarm on sg change part :<br>https://docs.fugue.co/FG_R00056.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 766069,
          "date": "Wed 04 Jan 2023 21:42",
          "username": "\t\t\t\tawsec2\t\t\t",
          "content": "i chooseA",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 733340,
          "date": "Fri 02 Dec 2022 03:10",
          "username": "\t\t\t\tlandsamboni\t\t\t",
          "content": "C.  Implement AWS CloudTrail. Configure forwarding to Amazon CloudWatch Logs. Configure a CloudWatch Logs metric filter with a pattern match on all security group changes. Configure an Amazon CloudWatch alarm to publish messages to an Amazon Simple Notification Service (Amazon SNS) topic.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 727230,
          "date": "Sat 26 Nov 2022 04:11",
          "username": "\t\t\t\tD2\t\t\t",
          "content": "A and C are correct. A is more scalable in multi-account scenario. Though question doesnt explicitly state of multiple accounts but as a best practice, applications should be hosted in their own individual accounts. That implicit requirement points towards A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 725786,
          "date": "Thu 24 Nov 2022 12:41",
          "username": "\t\t\t\ttryks\t\t\t",
          "content": "A & C correct but choose C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 725464,
          "date": "Thu 24 Nov 2022 01:26",
          "username": "\t\t\t\tIsaias\t\t\t",
          "content": "A and C are correct ,<br>I read this post and I Choose C<br>https://aws.amazon.com/es/blogs/security/how-to-monitor-aws-account-configuration-changes-and-api-calls-to-amazon-ec2-security-groups/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Thank you!<br>If your concern is more about incident detection, Method 2 offers a faster way to detect changes to a security group's configuration. Both methods can help you add security to your AWS infrastructure.</li><li>Yes, and the 2 method is from the perspective of the object being changed thats we are looking for, the 1st one is from the perspective of the not compliance</li><li>Yeah, A is correct too, but in this case there is a manual step defined which does not make itoperationally efficient..</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 733341,
          "date": "Fri 02 Dec 2022 03:12",
          "username": "\t\t\t\tlandsamboni\t\t\t",
          "content": "Thank you!<br>If your concern is more about incident detection, Method 2 offers a faster way to detect changes to a security group's configuration. Both methods can help you add security to your AWS infrastructure.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Yes, and the 2 method is from the perspective of the object being changed thats we are looking for, the 1st one is from the perspective of the not compliance</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 735345,
          "date": "Sun 04 Dec 2022 19:22",
          "username": "\t\t\t\tIsaias\t\t\t",
          "content": "Yes, and the 2 method is from the perspective of the object being changed thats we are looking for, the 1st one is from the perspective of the not compliance",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 788923,
          "date": "Thu 26 Jan 2023 17:35",
          "username": "\t\t\t\tselim507\t\t\t",
          "content": "Yeah, A is correct too, but in this case there is a manual step defined which does not make itoperationally efficient..",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 724838,
          "date": "Wed 23 Nov 2022 03:22",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "Its between A or C. Choosing A. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#428",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A security engineer is configuring a mechanism to send an alert when three or more failed sign-in attempts to the AWS Management Console occur during a 5-minute period. The security engineer creates a trail in AWS CloudTrail to assist in this work.<br><br>Which solution will meet these requirements?</p>",
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
              "choice": "<p>In CloudTrail, turn on Insights events on the trail. Configure an alarm on the insight with eventName matching ConsoleLogin and errorMessage matching 'Failed authentication'.  Configure a threshold of 3 and a period of 5 minutes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure CloudTrail to send events to Amazon CloudWatch Logs. Create a metric filter for the relevant log group. Create a filter pattern with eventName matching ConsoleLogin and errorMessage matching 'Failed authentication'.  Create a CloudWatch alarm with a threshold of 3 and a period of 5 minutes.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Athena table from the CloudTrail events. Run a query for eventName matching ConsoleLogin and for errorMessage matching 'Failed authentication'.  Create a notification action from the query to send an Amazon Simple Notification Service (Amazon SNS) notification when the count equals 3 within a period of 5 minutes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>In AWS Identity and Access Management Access Analyzer, create a new analyzer. Configure the analyzer to send an Amazon Simple Notification Service (Amazon SNS) notification when a failed sign-in event occurs 3 times for any IAM user within a period of 5 minutes.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 428 discussion",
      "discusstion": [
        {
          "id": 724840,
          "date": "Wed 23 Nov 2022 03:32",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "B - Correct Answer<br>https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudwatch-alarms-for-cloudtrail.html<br>A - Insights today cannot alarm<br>C - So much work when A has it built it.<br>D - Why ? \\\"The security engineer creates a trail in AWS CloudTrail to assist in this work.\\\"",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 870136,
          "date": "Fri 14 Apr 2023 13:01",
          "username": "\t\t\t\tisokalau\t\t\t",
          "content": "D is incorrect because IAM Access Analyzer is used to identify the resources that an IAM principal (user or role) can access, and it doesn't provide the capability to create an alarm for failed sign-in attempts.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 805266,
          "date": "Sat 11 Feb 2023 14:48",
          "username": "\t\t\t\tBaksallas\t\t\t",
          "content": "A - lacks mechanism to send an alert...<br>B - lacks mechanism to send an alert...<br>C - Athena query is manual.<br>D - Meets all requirements.<br><br>The only reason why I'm not choosing B as answer is because there is no Sending of the alert requirement that is met here. Everything else on B looks good though.<br><br>My answer - according to the question to meet all of the requirements - is D. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 767440,
          "date": "Fri 06 Jan 2023 09:59",
          "username": "\t\t\t\tsecdaddy\t\t\t",
          "content": "For B would be something lik this https://asecure.cloud/a/failed_console_logins/<br>but with these values :<br>Period: \\\"60\\\"<br>EvaluationPeriods: \\\"5\\\"<br>Threshold: \\\"3\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 729526,
          "date": "Mon 28 Nov 2022 19:44",
          "username": "\t\t\t\tvyktors\t\t\t",
          "content": "B - as per AdamWest link",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 727231,
          "date": "Sat 26 Nov 2022 04:13",
          "username": "\t\t\t\tD2\t\t\t",
          "content": "Answer B",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#429",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to prevent public exposure of data that is stored in Amazon S3.<br><br>Which combination of steps should a security engineer take to meet this requirement? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#429",
          "answers": [
            {
              "choice": "<p>Turn on S3 Block Public Access.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Enforce S3 bucket encryption by using server-side encryption with AWS KMS managed keys (SSE-KMS).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Enforce S3 bucket encryption by using server-side encryption with Amazon S3 managed encryption keys (SSE-S3).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use S3 Storage Lens.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Macie.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 429 discussion",
      "discusstion": [
        {
          "id": 742075,
          "date": "Sun 11 Dec 2022 21:31",
          "username": "\t\t\t\tBalki\t\t\t",
          "content": "C is tempting. But always go to KMS, The main advantage of SSE-KMS over SSE-S3 is the additional level of security provided by permissions on the KMS key itself, allowing you to enable decryption only to authorized users or applications. SSE-KMS also provides an audit trail that shows when a CMK was used and by whom.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Although you are correct with answer, I still think A is enough to prevent public exposure of data.</li></ul>",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 942534,
          "date": "Tue 04 Jul 2023 10:40",
          "username": "\t\t\t\tcherry23\t\t\t",
          "content": "Although you are correct with answer, I still think A is enough to prevent public exposure of data.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 929005,
          "date": "Wed 21 Jun 2023 05:22",
          "username": "\t\t\t\tGreen53\t\t\t",
          "content": "A - Generally a good idea to block public access, this is the easiest way to do so<br>B - SSE-KMS will ensure objects are not accessible, even if the bucket is public (since an anonymous user would never have your KMS key). A user would need the appropriate IAM permissions:<br>https://repost.aws/knowledge-center/s3-bucket-access-default-encryption<br><br>C - SSE:S3 doesn't have the same protection. Since AWS manages the encryption, anyone with access to the bucket can access the content<br>D - ?<br>E - This will not *prevent* public exposure. It simply records personal data (the question doesn't state the type of data being protected anyway)",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 920515,
          "date": "Sun 11 Jun 2023 10:32",
          "username": "\t\t\t\tGranwizzard\t\t\t",
          "content": "Why Not AE?<br>Macie will help you prevent data exposure, with an alert or finding.<br>Encryption doesn't prevent public data exposure, in my opinion, it protects you from accessing the data in a human-readable format if you don't know the key to decrypt it.<br>Any thoughts?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Just dey play</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 931725,
          "date": "Fri 23 Jun 2023 16:55",
          "username": "\t\t\t\tAndrii223\t\t\t",
          "content": "Just dey play",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 727233,
          "date": "Sat 26 Nov 2022 04:14",
          "username": "\t\t\t\tD2\t\t\t",
          "content": "AB it is",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 725130,
          "date": "Wed 23 Nov 2022 13:54",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "AB -<br>Block public access and Encrypt.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 723047,
          "date": "Sun 20 Nov 2022 23:02",
          "username": "\t\t\t\tFyssy\t\t\t",
          "content": "KMS provides additional security",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        }
      ]
    },
    {
      "question_id": "#430",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company that builds document management systems recently performed a security review of its application on AWS. The review showed that uploads of documents through signed URLs into Amazon S3 could occur in the application without encryption in transit. A security engineer must implement a solution that prevents uploads that are not encrypted in transit.<br><br>Which solution will meet this requirement?</p>",
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
              "choice": "<p>Ensure that all client implementations are using HTTPS to upload documents into the application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the s3-bucket-ssl-requests-only managed rule in AWS Config.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add an S3 bucket policy that denies all S3 actions for condition 'aws:secureTransport': 'false'. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Add an S3 bucket ACL with a grantee of AllUsers, a permission of WRITE, and a condition of secureTransport.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 430 discussion",
      "discusstion": [
        {
          "id": 725135,
          "date": "Wed 23 Nov 2022 14:00",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "C - the following bucket policy complies with the rule. The policy explicitly denies all actions on the bucket and objects when the request meets the condition \\\"aws:SecureTransport\\\": \\\"false\\\":<br> \\\"Effect\\\": \\\"Deny\\\",<br>\\\"Resource\\\": [<br>\\\"arn:aws:s3:::DOC-EXAMPLE-BUCKET\\\",<br>\\\"arn:aws:s3:::DOC-EXAMPLE-BUCKET/*\\\"<br>],<br>\\\"Condition\\\": {<br>\\\"Bool\\\": {<br>\\\"aws:SecureTransport\\\": \\\"false\\\"<br>You might want to pick B but do not - B will check for compliancy only not enforcement. C is enforcement.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>source : https://repost.aws/knowledge-center/s3-bucket-policy-for-config-rule</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 768358,
          "date": "Sat 07 Jan 2023 09:23",
          "username": "\t\t\t\tsecdaddy\t\t\t",
          "content": "source : https://repost.aws/knowledge-center/s3-bucket-policy-for-config-rule",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 735619,
          "date": "Mon 05 Dec 2022 03:50",
          "username": "\t\t\t\ttainh\t\t\t",
          "content": "C is correct<br>https://aws.amazon.com/blogs/security/how-to-use-bucket-policies-and-apply-defense-in-depth-to-help-secure-your-amazon-s3-data/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 725465,
          "date": "Thu 24 Nov 2022 01:30",
          "username": "\t\t\t\tIsaias\t\t\t",
          "content": "C for sure",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 725091,
          "date": "Wed 23 Nov 2022 12:51",
          "username": "\t\t\t\tluisfsm\t\t\t",
          "content": "Agree with C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#431",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is designing a multi-account structure for its development teams. The company is using AWS Organizations and AWS Single Sign-On (AWS SSO). The company must implement a solution so that the development teams can use only specific AWS Regions and so that each AWS account allows access to only specific AWS services.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#431",
          "answers": [
            {
              "choice": "<p>Use AWS SSO to set up service-linked roles with IAM policy statements that include the Condition, Resource, and NotAction elements to allow access to only the Regions and services that are needed.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deactivate AWS Security Token Service (AWS STS) in Regions that the developers are not allowed to use.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create SCPs that include the Condition, Resource, and NotAction elements to allow access to only the Regions and services that are needed.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>For each AWS account, create tailored identity-based policies for AWS SSO. Use statements that include the Condition, Resource, and NotAction elements to allow access to only the Regions and services that are needed.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 431 discussion",
      "discusstion": [
        {
          "id": 725136,
          "date": "Wed 23 Nov 2022 14:02",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "C -<br>When using organizations and preventing regions SCP is the best practice.IAM rules can do this to but not as effectively.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>NotAction in SCP...</li></ul>",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 914676,
          "date": "Sun 04 Jun 2023 15:34",
          "username": "\t\t\t\tEnzao\t\t\t",
          "content": "NotAction in SCP...",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1071057,
          "date": "Wed 15 Nov 2023 05:05",
          "username": "\t\t\t\tkejam\t\t\t",
          "content": "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_general.html#example-scp-deny-region",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 947704,
          "date": "Mon 10 Jul 2023 05:50",
          "username": "\t\t\t\tpk0619\t\t\t",
          "content": "NotAction,Resource, conditions in SCP cannot be used for allow action they can only Deny<br>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_syntax.html#scp-elements-table",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 804051,
          "date": "Fri 10 Feb 2023 07:50",
          "username": "\t\t\t\tmilofficial\t\t\t",
          "content": "again, cross-account permission stuff -> SCP in at least 90% of all cases",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 725854,
          "date": "Thu 24 Nov 2022 14:34",
          "username": "\t\t\t\tD2\t\t\t",
          "content": "C is correct",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#432",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A developer has created an AWS Lambda function in a company's development account. The Lambda function requires the use of an AWS Key Management Service (AWS KMS) customer managed key that exists in a security account that the company's security team controls. The developer obtains the ARN of the KMS key from a previous Lambda function in the development account. The previous Lambda function had been working properly with the KMS key.<br><br>When the developer uses the ARN and tests the new Lambda function, an error message states that access is denied to the KMS key in the security account. The developer tests the previous Lambda function that uses the same KMS key and discovers that the previous Lambda function still can encrypt data as expected.<br><br>A security engineer must resolve the problem so that the new Lambda function in the development account can use the KMS key from the security account.<br><br>Which combination of steps should the security engineer take to meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#432",
          "answers": [
            {
              "choice": "<p>In the security account, configure an IAM role for the new Lambda function. Attach an IAM policy that allows access to the KMS key in the security account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>In the development account, configure an IAM role for the new Lambda function. Attach a key policy that allows access to the KMS key in the security account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>In the development account, configure an IAM role for the new Lambda function. Attach an IAM policy that allows access to the KMS key in the security account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a key policy for the KMS key in the security account to allow access to the IAM role of the new Lambda function in the security account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a key policy for the KMS key in the security account to allow access to the IAM role of the new Lambda function in the development account.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 432 discussion",
      "discusstion": [
        {
          "id": 725607,
          "date": "Thu 24 Nov 2022 07:52",
          "username": "\t\t\t\tIsaias\t\t\t",
          "content": "C Lambda Need a iam Role that have a iam policy to use kms services<br>E The Iam Role need permision to use CMK , attach permision on de key policy",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 1071063,
          "date": "Wed 15 Nov 2023 05:12",
          "username": "\t\t\t\tkejam\t\t\t",
          "content": "https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 930741,
          "date": "Thu 22 Jun 2023 17:33",
          "username": "\t\t\t\tGreen53\t\t\t",
          "content": "Since this is a cross account request, and the KMS key resides in the security account, this is also where the IAM policy should reside.<br>This page describes it well: https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-access-cross-acct-resources.html<br><br>It's related to step functions, but states:<br><br>You specify the target IAM role the state machine must assume before invoking the cross-account Lambda function. Then, modify the trust policy in the target IAM role to allow the source account to assume the target role temporarily. Also, to call the AWS resource, define the appropriate permissions in the target IAM role. Finally, update the source account's execution role to specify the required permission to assume the target role.<br><br>So, dev (source) account Lambda assumes a role in production (target) account, which has an IAM policy providing access to KMS key.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>In this case, wouldn't option D be a better fit? Since according to option A, the IAM role for the function resides in the security account.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 933200,
          "date": "Sun 25 Jun 2023 06:29",
          "username": "\t\t\t\tfrancinetanzx\t\t\t",
          "content": "In this case, wouldn't option D be a better fit? Since according to option A, the IAM role for the function resides in the security account.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 914872,
          "date": "Sun 04 Jun 2023 20:33",
          "username": "\t\t\t\tToptip\t\t\t",
          "content": "C+E bingooo",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 898839,
          "date": "Tue 16 May 2023 04:25",
          "username": "\t\t\t\tOCHT\t\t\t",
          "content": "Although option E is correct, option C is not because it suggests to \\\"configure an IAM role for the new Lambda function in the development account\\\", which is incorrect. The IAM role for the Lambda function should be configured in the security account, where the KMS key resides. This is because permissions for resources should be configured where the resources reside.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 813673,
          "date": "Sun 19 Feb 2023 03:31",
          "username": "\t\t\t\tsam15\t\t\t",
          "content": "C,E. <br>The link below provides clarity of how cross account access should work with KMS:<br>https://docs.aws.amazon.com/kms/latest/developerguide/policy-evaluation.html#example-cross-acct",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 778725,
          "date": "Tue 17 Jan 2023 10:07",
          "username": "\t\t\t\tselim507\t\t\t",
          "content": "since KMS Key is located in different account than dev account, we have to set up the permissions in security account first than assume the lambda role from dev account.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 761085,
          "date": "Thu 29 Dec 2022 14:57",
          "username": "\t\t\t\tTeknoklutz\t\t\t",
          "content": "CE for sure",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 746460,
          "date": "Thu 15 Dec 2022 20:34",
          "username": "\t\t\t\tamcloud\t\t\t",
          "content": "Its AD - https://aws.amazon.com/es/premiumsupport/knowledge-center/lambda-function-assume-iam-role/<br>You have to set the permision in the cross-account. In the lambda acount the rol only need the assume role statement.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 725859,
          "date": "Thu 24 Nov 2022 14:37",
          "username": "\t\t\t\tD2\t\t\t",
          "content": "CE correct",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#433",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to restrict access to Amazon DynamoDB tables in the us-east1 Region for account 0123456789. All users must be denied permission to work with DynamoDB tables in us-east-1 unless the users access the tables through the following endpoint: vpce-11aa22bb.<br><br>Which IAM statement will enforce this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#433",
          "answers": [
            {
              "choice": "<p><img class=\"w-100 p-3\" src=\"https://img.examtopics.com/aws-certified-security-specialty/image34.png\"></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p><img class=\"w-100 p-3\" src=\"https://img.examtopics.com/aws-certified-security-specialty/image35.png\"></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p><img class=\"w-100 p-3\" src=\"https://img.examtopics.com/aws-certified-security-specialty/image36.png\"></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p><img class=\"w-100 p-3\" src=\"https://img.examtopics.com/aws-certified-security-specialty/image37.png\"></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 433 discussion",
      "discusstion": [
        {
          "id": 731848,
          "date": "Wed 30 Nov 2022 19:28",
          "username": "\t\t\t\tkerar\t\t\t",
          "content": "https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-ddb.html",
          "upvote_count": "15",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1039385,
          "date": "Tue 10 Oct 2023 12:45",
          "username": "\t\t\t\t[Removed]\t\t\t",
          "content": "C.  The question doesn't state there is a resource policy allowing the action. If D, all users are denied if not resource policy is defined that allows the behavior.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 914733,
          "date": "Sun 04 Jun 2023 16:24",
          "username": "\t\t\t\t6_8ftwin\t\t\t",
          "content": "C<br>IAM policies have an implicit deny. The implicit deny still holds true for 'D', meaning no one has access.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>D<br>Since the question asks Which IAM STATEMENT will enforce this requirement, D is the better option.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 925528,
          "date": "Fri 16 Jun 2023 22:09",
          "username": "\t\t\t\t6_8ftwin\t\t\t",
          "content": "D<br>Since the question asks Which IAM STATEMENT will enforce this requirement, D is the better option.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 912589,
          "date": "Fri 02 Jun 2023 08:45",
          "username": "\t\t\t\tHIEP_DC\t\t\t",
          "content": "C<br>for case assumes that there is also a policy statement that allows the access required -> D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 845489,
          "date": "Tue 21 Mar 2023 04:34",
          "username": "\t\t\t\tigloooooo\t\t\t",
          "content": "this should be C. <br>By default, it is deny.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 829500,
          "date": "Sun 05 Mar 2023 01:02",
          "username": "\t\t\t\tAzureDP900\t\t\t",
          "content": "D is right",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 725144,
          "date": "Wed 23 Nov 2022 14:09",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "D - Looks correct",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#434",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A security engineer is attempting to assign a virtual multi-factor authentication (MFA) device to an IAM user whose current virtual MFA device is faulty. The security engineer receives an error message that indicates that the security engineer is not authorized to perform iam:DeleteVirtualMFADevice.<br><br>The IAM role that the security engineer is using has the correct permissions to delete, list, and create a virtual MFA device. The IAM user also has permissions to delete their own virtual MFA device, but only if the IAM user is authenticated with MFA. <br><br>What should the security engineer do to resolve this issue?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#434",
          "answers": [
            {
              "choice": "<p>Modify the policy for the IAM user to allow the IAM user to delete the virtual MFA device without using MFA authentication.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Sign in as the AWS account root user. Modify the MFA device by using the IAM console to generate a new synchronization quick response (QR) code.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the AWS CLI or AWS API to find the ARN of the virtual MFA device and to delete the device.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Sign in as the AWS account root user. Delete the virtual MFA device by using the IAM console.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 434 discussion",
      "discusstion": [
        {
          "id": 723039,
          "date": "Sun 20 Nov 2022 22:51",
          "username": "\t\t\t\tFyssy\t\t\t",
          "content": "To resolve this issue, you or another administrator must delete the user's existing MFA device using the AWS CLI or AWS API. For more information, see I am not authorized to perform: iam:DeleteVirtualMFADevice. https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_aws_my-sec-creds-self-manage-mfa-only.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A is wrong because even if you have permission you still need to login and this will need MFA</li></ul>",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 942563,
          "date": "Tue 04 Jul 2023 11:11",
          "username": "\t\t\t\tcherry23\t\t\t",
          "content": "A is wrong because even if you have permission you still need to login and this will need MFA",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 940544,
          "date": "Sun 02 Jul 2023 06:47",
          "username": "\t\t\t\tTECHNOWARRIOR\t\t\t",
          "content": "Option D is not the correct answer because it would require the security engineer to sign in as the AWS account root user. This is not necessary in this case, as the security engineer can use the AWS CLI or AWS API to delete the virtual MFA device without signing in as the AWS account root user.<br><br>The correct answer is C. <br><br>The security engineer is not authorized to perform the iam:DeleteVirtualMFADevice action because the IAM role that they are using does not have the correct permissions. The IAM user has permissions to delete their own virtual MFA device, but only if they are authenticated with MFA. <br><br>To resolve this issue, the security engineer can use the AWS CLI or AWS API to find the ARN of the virtual MFA device and to delete the device.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 939014,
          "date": "Fri 30 Jun 2023 12:45",
          "username": "\t\t\t\tGranwizzard\t\t\t",
          "content": "if the security engineer is receiving the error how will option C will work?<br>I believe it is D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 862908,
          "date": "Thu 06 Apr 2023 13:42",
          "username": "\t\t\t\ttask_7\t\t\t",
          "content": "https://repost.aws/knowledge-center/lost-broken-mfa",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 818237,
          "date": "Wed 22 Feb 2023 19:43",
          "username": "\t\t\t\tNan001\t\t\t",
          "content": "The error message indicates that the security engineer is not authorized to perform iam:DeleteVirtualMFADevice, so modifying the policy for the IAM user to allow the IAM user to delete the virtual MFA device without using MFA authentication (option A) is not a recommended solution.<br><br>Option B suggests signing in as the AWS account root user, which is not recommended because it violates the AWS security best practice of using the root user only for AWS account and billing management purposes.<br><br>Option C is a viable solution, but it requires additional steps to find the ARN of the virtual MFA device and to ensure that the IAM user is authenticated with MFA. <br><br>Therefore, the best solution is to sign in as the AWS account root user and delete the virtual MFA device using the IAM console (option D). The root user has the necessary permissions to delete the virtual MFA device, and the IAM console provides a user-friendly interface to manage IAM resources. Once the virtual MFA device is deleted, the IAM user can re-assign a new virtual MFA device.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I am taking it back, it is C. </li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 818239,
          "date": "Wed 22 Feb 2023 19:44",
          "username": "\t\t\t\tNan001\t\t\t",
          "content": "I am taking it back, it is C. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 735632,
          "date": "Mon 05 Dec 2022 04:23",
          "username": "\t\t\t\ttainh\t\t\t",
          "content": "C is correct<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_general.html#troubleshoot_general_access-denied-delete-mfa",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 722263,
          "date": "Sat 19 Nov 2022 22:39",
          "username": "\t\t\t\tShriraj32\t\t\t",
          "content": "it's C. <br>https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_aws_my-sec-creds-self-manage-mfa-only.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#435",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's data is encrypted in an Amazon S3 bucket by an AWS Key Management Service (AWS KMS) customer managed key. The company has AWS Lambda functions that run in the same account as the S3 bucket. The Lambda functions need to access the data in the S3 bucket. A security engineer must ensure that each Lambda function has its own programmatic access control permissions to use the KMS key.<br><br>What should the security engineer do to meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#435",
          "answers": [
            {
              "choice": "<p>Create Lambda IAM users for each Lambda function. Attach an IAM policy that includes specific access permissions to use the KMS key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a key grant for the Lambda service principal. Add or remove specific access permissions to use the KMS key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a Lambda execution role that provides specific access permissions to use the KMS key for each Lambda function.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure each Lambda function to assume an IAM role that provides specific access permissions to use the AWS managed KMS key for Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 435 discussion",
      "discusstion": [
        {
          "id": 725624,
          "date": "Thu 24 Nov 2022 08:11",
          "username": "\t\t\t\tIsaias\t\t\t",
          "content": "I go with C<br>https://aws.amazon.com/premiumsupport/knowledge-center/lambda-execution-role-s3-bucket/?nc1h_ls",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 758793,
          "date": "Tue 27 Dec 2022 17:43",
          "username": "\t\t\t\tmust_be_rohit\t\t\t",
          "content": "GRANTS seems to be the best option<br>https://docs.aws.amazon.com/kms/latest/developerguide/grants.html",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1071080,
          "date": "Wed 15 Nov 2023 05:36",
          "username": "\t\t\t\tkejam\t\t\t",
          "content": "Answer D<br><br>A security engineer must ensure that each Lambda function has its own programmatic access control permissions to use the KMS key.<br><br>https://docs.aws.amazon.com/lambda/latest/dg/security-iam.html<br>https://docs.aws.amazon.com/kms/latest/developerguide/cmks-in-iam-policies.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Changing to C<br>We don't manage the AWS managed KMS key policies.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1071091,
          "date": "Wed 15 Nov 2023 05:45",
          "username": "\t\t\t\tkejam\t\t\t",
          "content": "Changing to C<br>We don't manage the AWS managed KMS key policies.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 940901,
          "date": "Sun 02 Jul 2023 15:15",
          "username": "\t\t\t\tsymplesims\t\t\t",
          "content": "Selected Answer: C<br>- Answerd by ChatGPT.<br><br>By creating a separate Lambda execution role for each Lambda function, the security engineer can define granular access permissions for each function. The Lambda execution role can include the necessary permissions to use the KMS key, allowing the Lambda function to access the encrypted data in the S3 bucket. This approach ensures that each Lambda function has its own distinct set of permissions and provides isolation of access control for each function.<br><br>On the other hand, Option B (creating a key grant for the Lambda service principal) would grant permissions directly to the Lambda service principal itself rather than to individual Lambda functions. This approach would not provide separate programmatic access control permissions for each Lambda function, as all functions would share the same permissions granted to the Lambda service principal.<br><br>Therefore, Option C is the correct choice to ensure that each Lambda function has its own programmatic access control permissions to use the KMS key.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 930386,
          "date": "Thu 22 Jun 2023 12:26",
          "username": "\t\t\t\tvherman\t\t\t",
          "content": "The correct answer is C, because:<br>1. Requirement \\\"Each Lambda Function has ITS OWN programmatic access\\\" points to C (C: specific access permissions for EACH lambda function); (B: grant for THE lambda principal)<br>- Grants are often used for temporary permissions",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 873713,
          "date": "Tue 18 Apr 2023 16:21",
          "username": "\t\t\t\tKezuko\t\t\t",
          "content": "https://docs.aws.amazon.com/workspaces-web/latest/adminguide/getting-started-iam-user-access-keys.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 850790,
          "date": "Sun 26 Mar 2023 09:09",
          "username": "\t\t\t\tCyp\t\t\t",
          "content": "Programatic accessGrant",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 842871,
          "date": "Sat 18 Mar 2023 16:16",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "Lambda execution role",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 804067,
          "date": "Fri 10 Feb 2023 08:13",
          "username": "\t\t\t\tmilofficial\t\t\t",
          "content": "Very difficult choice between B and C.  The correct answer is C, because:<br>- Requirement \\\"each Lambda function has ITS OWN programmatic access\\\" points to C (C: specific access permissions for EACH lambda function); (B: grant for THE lambda principal)<br>- Grants are often used for temporary permissions",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 788960,
          "date": "Thu 26 Jan 2023 18:10",
          "username": "\t\t\t\tselim507\t\t\t",
          "content": "Lambda execution role is a service role",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 788614,
          "date": "Thu 26 Jan 2023 11:33",
          "username": "\t\t\t\tarpgaur\t\t\t",
          "content": "Programmatic access Grants",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 768403,
          "date": "Sat 07 Jan 2023 10:40",
          "username": "\t\t\t\tsecdaddy\t\t\t",
          "content": "B \\\"However, the grantee principal cannot be a service principal\\\"<br>https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant-best-practices<br><br>Breaking down C, it might be saying \\\"that provides specific access permissions...for each Lambda function\\\", I guess by listing each lambda ARN one by one in the role policy.If so then for me this meets the \\\"ensure that each Lambda function has its own access\\\" part of the requirement and seems the better choice.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 761037,
          "date": "Thu 29 Dec 2022 14:15",
          "username": "\t\t\t\tTeknoklutz\t\t\t",
          "content": "Grant for programmatic access.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 759586,
          "date": "Wed 28 Dec 2022 09:45",
          "username": "\t\t\t\tAbhi_shek_kumar\t\t\t",
          "content": "Grant for programmatic access",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 754746,
          "date": "Sat 24 Dec 2022 08:16",
          "username": "\t\t\t\tFyssy\t\t\t",
          "content": "Every Lambda function has an IAM role called an execution role.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 733106,
          "date": "Thu 01 Dec 2022 22:18",
          "username": "\t\t\t\taj2aj2\t\t\t",
          "content": "Why not B - Key Grants are used programmatic access control permissions to use the KMS key",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 727157,
          "date": "Sat 26 Nov 2022 01:03",
          "username": "\t\t\t\tD2\t\t\t",
          "content": "C is more appropriate as D talks about AWS managed KMS key whereas questions states it's customer managed key",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#436",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company allows users to download its mobile app onto their phones. The app is MQTT based and connects to AWS IoT Core to subscribe to specific client-related topics.<br><br>Recently, the company discovered that some malicious attackers have been trying to get a Trojan horse onto legitimate mobile phones. The Trojan horse poses as the authentic application and uses a client ID with injected special characters to gain access to topics outside the client's privilege scope.<br><br>Which combination of actions should the company take to prevent this threat? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#436",
          "answers": [
            {
              "choice": "<p>In the application, use an IoT thing name as the client ID to connect the device to AWS IoT Core.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>In the application, add a client ID check. Disconnect from the server if any special character is detected.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Apply an AWS IoT Core policy that allows 'AWSIoTWirelessDataAccess' with the principal set to 'client/${iot:Connection.Thing.ThingName}'. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Apply an AWS IoT Core policy to the device to allow 'iot:Connect' with the resource set to 'client/${iot:ClientId}'. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Apply an AWS IoT Core policy to the device to allow 'iot:Connect' with the resource set to 'client/${iot:Connection.Thing.ThingName}'. <br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 436 discussion",
      "discusstion": [
        {
          "id": 762936,
          "date": "Sat 31 Dec 2022 22:03",
          "username": "\t\t\t\tTeknoklutz\t\t\t",
          "content": "https://docs.aws.amazon.com/iot/latest/developerguide/security-best-practices.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 725214,
          "date": "Wed 23 Nov 2022 15:54",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "BE - Correct.<br>https://docs.aws.amazon.com/iot/latest/developerguide/thing-policy-variables.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 927514,
          "date": "Mon 19 Jun 2023 15:06",
          "username": "\t\t\t\tkomik_101\t\t\t",
          "content": "Google Bard saying...<br>The true answer is A and B. A.  In the application, use an IoT thing name as the client ID to connect the device to AWS IoT Core. This will make it more difficult for attackers to create a Trojan horse that can pose as the authentic application.B.  In the application, add a client ID check. Disconnect from the server if any special character is detected. This will prevent the application from connecting to the server if it detects any special characters in the client ID, which could indicate that the client ID is malicious.<br>The other options are not as effective at preventing this threat.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 757291,
          "date": "Mon 26 Dec 2022 10:02",
          "username": "\t\t\t\tryogoku\t\t\t",
          "content": "This question most likely is not scored. Reading the exam requirements and it is explicitly stated that IoT is out of scope for this exam. Therefore I would not worry too much about this one.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I had one question regarding DDos attack from IoT devices on the exam.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 850572,
          "date": "Sun 26 Mar 2023 01:12",
          "username": "\t\t\t\tpeddyua\t\t\t",
          "content": "I had one question regarding DDos attack from IoT devices on the exam.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 755182,
          "date": "Sat 24 Dec 2022 22:48",
          "username": "\t\t\t\tKevin24\t\t\t",
          "content": "Whenever you define a thing in AWS IoT, a unique identifier will be assigned to your device in your AWS IoT account. By default it is same as the name of thing(defaultClientId) and it can be used for establishing connection to the AWS IoT broker.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 744371,
          "date": "Tue 13 Dec 2022 19:46",
          "username": "\t\t\t\trzukowski\t\t\t",
          "content": "https://docs.aws.amazon.com/iot/latest/developerguide/security-best-practices.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 742056,
          "date": "Sun 11 Dec 2022 21:08",
          "username": "\t\t\t\tBalki\t\t\t",
          "content": "It should be AE.  There is nothing called as Cliend ID check. All we have to do is to have the correct policy in place pointing to the thing name https://docs.aws.amazon.com/iot/latest/developerguide/security-best-practices.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AE"
        }
      ]
    },
    {
      "question_id": "#437",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's public Application Load Balancer (ALB) recently experienced a DDoS attack. To mitigate this issue. the company deployed Amazon CloudFront in front of the ALB so that users would not directly access the Amazon EC2 instances behind the ALB. <br><br>The company discovers that some traffic is still coming directly into the ALB and is still being handled by the EC2 instances.<br><br>Which combination of steps should the company take to ensure that the EC2 instances will receive traffic only from CloudFront? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#437",
          "answers": [
            {
              "choice": "<p>Configure CloudFront to add a cache key policy to allow a custom HTTP header that CloudFront sends to the ALB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure CloudFront to add a custom: HTTP header to requests that CloudFront sends to the ALB. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the ALB to forward only requests that contain the custom HTTP header.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the ALB and CloudFront to use the X-Forwarded-For header to check client IP addresses.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the ALB and CloudFront to use the same X.509 certificate that is generated by AWS Certificate Manager (ACM).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 437 discussion",
      "discusstion": [
        {
          "id": 725276,
          "date": "Wed 23 Nov 2022 17:54",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "BC-<br>To prevent users from directly accessing an Application Load Balancer and allow access only through CloudFront, complete these high-level steps:<br>Configure CloudFront to add a custom HTTP header to requests that it sends to the Application Load Balancer.<br>Configure the Application Load Balancer to only forward requests that contain the custom HTTP header.<br>(Optional) Require HTTPS to improve the security of this solution.<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/restrict-access-to-load-balancer.html",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 842393,
          "date": "Sat 18 Mar 2023 01:56",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "B: Configure CloudFront to add a custom HTTP header to requests that CloudFront sends to the ALB.  This header can be used as a way to identify requests that are coming from CloudFront.<br><br>C: Configure the ALB to forward only requests that contain the custom HTTP header. This will ensure that the EC2 instances will only receive traffic that has been forwarded by CloudFront.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 727164,
          "date": "Sat 26 Nov 2022 01:10",
          "username": "\t\t\t\tD2\t\t\t",
          "content": "B and C it is",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#438",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has two web applications that run on Amazon EC2 and Amazon S3. The applications failed an HTTP security audit, and users are reporting latency issues.<br><br>The applications need to deliver web content at low latencies while improving security and privacy for users and content providers. The company must implement a solution that does not require changes to the application code.<br><br>Which combination of actions should the company take to meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#438",
          "answers": [
            {
              "choice": "<p>Deploy Amazon API Gateway. Cache the endpoint's responses.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon API Gateway with a request parameter-based AWS Lambda authorizer to add HTTP security headers on origin responses.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Write a Lambda@Edge function to add HTTP security headers on origin responses.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon CloudFront. Create a distribution for the EC2 and S3 origins.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Implement an Application Load Balancer (ALB) to honor the connection header from the incoming client request after forwarding the response back to the client.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 438 discussion",
      "discusstion": [
        {
          "id": 735690,
          "date": "Mon 05 Dec 2022 06:59",
          "username": "\t\t\t\ttainh\t\t\t",
          "content": "I think C, D<br>use CloudFront & Lambda@Edge to improve latency & security<br>https://aws.amazon.com/blogs/networking-and-content-delivery/adding-http-security-headers-using-lambdaedge-and-amazon-cloudfront/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>CD makes sense</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 742042,
          "date": "Sun 11 Dec 2022 20:44",
          "username": "\t\t\t\tBalki\t\t\t",
          "content": "CD makes sense",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 732337,
          "date": "Thu 01 Dec 2022 07:40",
          "username": "\t\t\t\tD2\t\t\t",
          "content": "Answer CD<br><br>CloudFront will reduce latency<br>Lambda@edge security headers would improve security<br>Only these two are making sense<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I don`t know.<br>That`s why take into with 'function', email protected.</li><li>How to create a Cloudfront distribution with EC2 origin? We must use the S3, ALB, API Gateway</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 897421,
          "date": "Sun 14 May 2023 11:04",
          "username": "\t\t\t\tBlue15\t\t\t",
          "content": "I don`t know.<br>That`s why take into with 'function', email protected.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 903754,
          "date": "Mon 22 May 2023 08:01",
          "username": "\t\t\t\t572f16d\t\t\t",
          "content": "How to create a Cloudfront distribution with EC2 origin? We must use the S3, ALB, API Gateway",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 725655,
          "date": "Thu 24 Nov 2022 09:15",
          "username": "\t\t\t\ttryks\t\t\t",
          "content": "D / E are correct<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Language of E is totally not worth selection</li><li>It is not E.  Implement an Application Load Balancer (ALB)<br>because the question says \\\"EC2 and S3\\\", and the ALB will only secure EC2, not S3. So Lambda@Edge will help protect both</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 942580,
          "date": "Tue 04 Jul 2023 11:40",
          "username": "\t\t\t\tcherry23\t\t\t",
          "content": "Language of E is totally not worth selection",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 733401,
          "date": "Fri 02 Dec 2022 04:24",
          "username": "\t\t\t\tlandsamboni\t\t\t",
          "content": "It is not E.  Implement an Application Load Balancer (ALB)<br>because the question says \\\"EC2 and S3\\\", and the ALB will only secure EC2, not S3. So Lambda@Edge will help protect both",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#439",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's application runs on an Amazon EC2 instance and stores objects in an Amazon S3 bucket. The EC2 instance is using an instance profile that provides access to read and write objects in the S3 bucket. The S3 bucket contains objects and has not been configured for any encryption at rest. The company is adopting a new security policy that mandates encryption at rest for all S3 buckets, encryption at rest for all objects in S3 buckets, and key rotation once every year.<br><br>What should a security engineer do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#439",
          "answers": [
            {
              "choice": "<p>Enable server-side encryption with Amazon S3 managed encryption keys (SSE-S3) for the S3 bucket. Configure annual automatic key rotation. Use an S3 Batch Operations job with the COPY command to change all the objects in the S3 bucket to use the SSE-S3 key. Configure the EC2 instance profile with permissions to use the SSE-S3 key. Configure S3 data events to encrypt an object during a write operation.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new AWS Key Management Service (AWS KMS) customer managed key. Configure annual automatic key rotation. Enable server-side encryption with AWS KMS keys (SSE-KMS) for the S3 bucket. Add a bucket policy to the S3 bucket to enforce SSE-KMS encryption. Configure the EC2 instance profile with permissions to use the customer managed key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new AWS Key Management Service (AWS KMS) customer managed key. Configure annual automatic key rotation. Enable server-side encryption with AWS KMS keys (SSE-KMS) for the S3 bucket. Use an S3 Batch Operations job with the COPY command to change all the objects in the S3 bucket to use the customer managed key. Configure the EC2 instance profile with permissions to use the customer managed key.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Enable server-side encryption with Amazon S3 managed encryption keys (SSE-S3) for the S3 bucket. Configure annual automatic key rotation. Configure the EC2 instance profile with permissions to use the SSE-S3 key. Use the AWS CLI to copy the S3 objects in place by specifying the SSE-S3 key as the encryption key. Configure S3 data events to encrypt an object during a write operation.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 439 discussion",
      "discusstion": [
        {
          "id": 725302,
          "date": "Wed 23 Nov 2022 18:39",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "C:<br>As part of copying the objects, specify that S3 should encrypt the object with SSE-S3 or SSE-KMS encryption. This job copies the objects, so all your objects show an updated creation date upon completion, regardless of when you originally added them to S3. You also must specify the other properties for your set of objects as part of the S3 Batch Operations job, including object tags and storage class.<br>https://aws.amazon.com/blogs/storage/encrypting-objects-with-amazon-s3-batch-operations/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>but question also sayin \\\"encryption at rest for all objects in S3 buckets, and key rotation once every year.\\\"B, saying ok =C4=B1 will do this. C doing this?</li></ul>",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 927357,
          "date": "Mon 19 Jun 2023 12:13",
          "username": "\t\t\t\tkomik_101\t\t\t",
          "content": "but question also sayin \\\"encryption at rest for all objects in S3 buckets, and key rotation once every year.\\\"B, saying ok =C4=B1 will do this. C doing this?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 927344,
          "date": "Mon 19 Jun 2023 11:48",
          "username": "\t\t\t\tkomik_101\t\t\t",
          "content": "I asked to BARD.  he gave this awser. and I will say B. <br><br>ME:are you sure this? some people saying answer is C. <br><br>Sure, let's take a look at option C as well:<br>C.  Create a new AWS Key Management Service (AWS KMS) customer managed key. Configure annual automatic key rotation. Enable server-side encryption with AWS KMS keys (SSE-KMS) for the S3 bucket. Use an S3 Batch Operations job with the COPY command to change all the objects in the S3 bucket to use the customer managed key. Configure the EC2 instance profile with permissions to use the customer managed key.<br><br>Option C is also a valid approach, but it does not meet the requirement for key rotation once every year. The S3 Batch Operations job will only encrypt the objects in the S3 bucket once, and the customer managed key will not be rotated until the next year.<br><br>Option B, on the other hand, meets all of the requirements. The customer managed key will be rotated annually, which will help to mitigate the risk of unauthorized access to the data.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option B does not take into account existing objects in S3. Enabling default encryption does not change the encryption of existing objects in the same bucket - which means they will remain unencrypted whilst new uploads are encrypted.<br><br>https://aws.amazon.com/blogs/storage/encrypting-existing-amazon-s3-objects-with-the-aws-cli/</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 933260,
          "date": "Sun 25 Jun 2023 07:43",
          "username": "\t\t\t\tfrancinetanzx\t\t\t",
          "content": "Option B does not take into account existing objects in S3. Enabling default encryption does not change the encryption of existing objects in the same bucket - which means they will remain unencrypted whilst new uploads are encrypted.<br><br>https://aws.amazon.com/blogs/storage/encrypting-existing-amazon-s3-objects-with-the-aws-cli/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 914784,
          "date": "Sun 04 Jun 2023 17:40",
          "username": "\t\t\t\t6_8ftwin\t\t\t",
          "content": "C<br>Answer B does not encrypt currently unencrypted objects. Also, once server side encryption is enabled, there isn't a need for a bucket policy to enforce encryption on new objects.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 893774,
          "date": "Wed 10 May 2023 11:10",
          "username": "\t\t\t\tOCHT\t\t\t",
          "content": "B.  Create a new AWS Key Management Service (AWS KMS) customer managed key. Configure annual automatic key rotation. Enable server-side encryption with AWS KMS keys (SSE-KMS) for the S3 bucket. Add a bucket policy to the S3 bucket to enforce SSE-KMS encryption. Configure the EC2 instance profile with permissions to use the customer managed key.<br><br>This option meets all the requirements stated in the question. By creating a new AWS KMS customer managed key and configuring annual key rotation, you address the encryption at rest and key rotation requirements. Enabling server-side encryption with SSE-KMS for the S3 bucket ensures that new objects are encrypted at rest. Adding a bucket policy to enforce SSE-KMS encryption will ensure all new objects uploaded to the bucket are encrypted. Finally, configuring the EC2 instance profile with permissions to use the customer managed key allows the application to read and write encrypted objects in the S3 bucket.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 764594,
          "date": "Tue 03 Jan 2023 12:52",
          "username": "\t\t\t\tjishrajesh\t\t\t",
          "content": "Selected c",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 735691,
          "date": "Mon 05 Dec 2022 07:04",
          "username": "\t\t\t\ttainh\t\t\t",
          "content": "C is correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#440",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations. According to compliance requirements, the company's applications that are hosted on Amazon EC2 instances must never use IAM credentials from Instance Metadata Service Version 1 (IMDSv1).<br><br>What should a security engineer do to meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#440",
          "answers": [
            {
              "choice": "<p>Create a security group that denies access on HTTP to 169.254.169.254. Attach this security group to all EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deactivate all access to IMDSv1 through the instance metadata options when using the AWS CLI, AWS API, or AWS Management Console to launch an EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Attach the following SCP to the root OU in AWS Organizations:<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Attach the following SCP to the root OU in AWS Organizations:<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 440 discussion",
      "discusstion": [
        {
          "id": 742035,
          "date": "Sun 11 Dec 2022 20:35",
          "username": "\t\t\t\tBalki\t\t\t",
          "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ExamplePolicies_EC2.html#iam-example-instance-metadata-require-roles-to-use-IMDSv2-credentials Role Credentials is the key word",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 733422,
          "date": "Fri 02 Dec 2022 04:41",
          "username": "\t\t\t\tlandsamboni\t\t\t",
          "content": "C option won't affect existing EC2 instances, so the correct answer is D. ",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1071109,
          "date": "Wed 15 Nov 2023 06:20",
          "username": "\t\t\t\tkejam\t\t\t",
          "content": "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_ec2.html#example-ec2-2",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 889807,
          "date": "Fri 05 May 2023 07:23",
          "username": "\t\t\t\tMehdi_ahmednacer\t\t\t",
          "content": "C<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-metadata-transition-to-version-2.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>After reading different comment. i'm sure is D. <br>C and D address the same issue. However, D addresses the issue in case EC2 instance is already running (the case of this question). While, C prevents provisioning new instances with IMDSv1</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 889838,
          "date": "Fri 05 May 2023 08:37",
          "username": "\t\t\t\tMehdi_ahmednacer\t\t\t",
          "content": "After reading different comment. i'm sure is D. <br>C and D address the same issue. However, D addresses the issue in case EC2 instance is already running (the case of this question). While, C prevents provisioning new instances with IMDSv1",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 796803,
          "date": "Fri 03 Feb 2023 07:34",
          "username": "\t\t\t\texamtopics_dummy\t\t\t",
          "content": "Based on https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ExamplePolicies_EC2.html<br>C is Require the use of IMDSv2<br>D is Require role credentials to be retrieved from IMDSv2<br><br>C stops us from starting a new instance but the question asks for \\\"must never use IAM credentials from Instance Metadata Service Version 1 (IMDSv1)\\\"<br><br>Thus D must be correct as it \\\"specifies that if this policy is applied to a role, and the role is assumed by the EC2 service and the resulting credentials are used to sign a request, then the request must be signed by EC2 role credentials retrieved from IMDSv2. Otherwise, all of its API calls will get an UnauthorizedOperation error. This statement/policy can be applied generally because, if the request is not signed by EC2 role credentials, it has no effect.\\\"",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 727175,
          "date": "Sat 26 Nov 2022 01:29",
          "username": "\t\t\t\tD2\t\t\t",
          "content": "C and D address the issue. However, D addresses the issue in case EC2 instance is already running. C prevents provisioning new instances with IMDSv1<br><br>https://summitroute.com/blog/2020/03/25/aws_scp_best_practices/#require-the-use-of-imdsv2<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>So it's D. </li></ul>",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 733423,
          "date": "Fri 02 Dec 2022 04:41",
          "username": "\t\t\t\tlandsamboni\t\t\t",
          "content": "So it's D. ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 723019,
          "date": "Sun 20 Nov 2022 22:21",
          "username": "\t\t\t\tFyssy\t\t\t",
          "content": "C is the answer<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Provide the reason</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 761056,
          "date": "Thu 29 Dec 2022 14:29",
          "username": "\t\t\t\tTeknoklutz\t\t\t",
          "content": "Provide the reason",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#441",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to implement DNS Security Extensions (DNSSEC) for a specific subdomain. The subdomain is already registered with Amazon Route 53. A security engineer has enabled DNSSEC signing and has created a key-signing key (KSK). When the security engineer tries to test the configuration, the security engineer receives an error for a broken trust chain.<br><br>What should the security engineer do to resolve this error?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#441",
          "answers": [
            {
              "choice": "<p>Replace the KSK with a zone-signing key (ZSK).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deactivate and then activate the KSK.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a Delegation Signer (DS) record in the parent hosted zone.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a Delegation Signer (DS) record in the subdomain.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 441 discussion",
      "discusstion": [
        {
          "id": 724012,
          "date": "Tue 22 Nov 2022 02:01",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "Agree Answer C:<br>After you enable DNSSEC signing for a hosted zone in Route 53, establish a chain of trust for the hosted zone to complete your DNSSEC signing setup. You do this by creating a Delegation Signer (DS) record in the parent hosted zone,",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 723558,
          "date": "Mon 21 Nov 2022 14:40",
          "username": "\t\t\t\tdocjames81\t\t\t",
          "content": "Docs appear to point to C being the answer here: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring-dnssec-enable-signing.html",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1109027,
          "date": "Fri 29 Dec 2023 20:13",
          "username": "\t\t\t\tyorkicurke\t\t\t",
          "content": "The following will hopefully clear most of the points in this question.<br>So to implement DNS Security Extensions (DNSSEC) for a specific subdomain registered with Route 53, you need to follow these steps:<br><br>Enable DNSSEC signing for the parent zone or hosted zone in Route 53 where the subdomain is defined. This involves creating a key-signing (KSK) key.<br><br>Sign all resource records in the parent zone with the KSK using the DNSSEC signing configuration.<br><br>Create a delegation signer (DS) record for the subdomain zone and register it with the parent zone. The DS record establishes trust between the parent and subdomain zones.<br><br>If the subdomain zone is hosted in a separate Route 53 hosted zone, enable DNSSEC signing on that zone as well by creating a key-signing key.<br><br>Sign all resource records in the subdomain zone with its key-signing key. This secures the records in the subdomain zone.<br><br>Verify DNSSEC configurations by checking that the parent and subdomain zones are returning signed records with valid signatures when queried.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Also;<br><br>Replacing the KSK with a zone-signing key (ZSK) would not resolve the issue. Both KSK and ZSK are used in DNSSEC, but they serve different purposes. The KSK is used to sign the DNSKEY record, and the ZSK is used to sign the zone data.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1109029,
          "date": "Fri 29 Dec 2023 20:14",
          "username": "\t\t\t\tyorkicurke\t\t\t",
          "content": "Also;<br><br>Replacing the KSK with a zone-signing key (ZSK) would not resolve the issue. Both KSK and ZSK are used in DNSSEC, but they serve different purposes. The KSK is used to sign the DNSKEY record, and the ZSK is used to sign the zone data.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 735696,
          "date": "Mon 05 Dec 2022 07:22",
          "username": "\t\t\t\ttainh\t\t\t",
          "content": "C is correct<br>https://aws.amazon.com/premiumsupport/knowledge-center/route-53-configure-dnssec-subdomain/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#442",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using Amazon Elastic Container Service (Amazon ECS) to run its container-based application on AWS. The company needs to ensure that the container images contain no severe vulnerabilities. The company also must ensure that only specific IAM roles and specific AWS accounts can access the container images.<br><br>Which solution will meet these requirements with the LEAST management overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#442",
          "answers": [
            {
              "choice": "<p>Pull images from the public container registry. Publish the images to Amazon Elastic Container Registry (Amazon ECR) repositories with scan on push configured in a centralized AWS account. Use a CI/CD pipeline to deploy the images to different AWS accounts. Use identity-based policies to restrict access to which IAM principals can access the images.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Pull images from the public container registry. Publish the images to a private container registry that is hosted on Amazon EC2 instances in a centralized AWS account. Deploy host-based container scanning tools to EC2 instances that run Amazon ECS. Restrict access to the container images by using basic authentication over HTTPS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Pull images from the public container registry. Publish the images to Amazon Elastic Container Registry (Amazon ECR) repositories with scan on push configured in a centralized AWS account. Use a CI/CD pipeline to deploy the images to different AWS accounts. Use repository policies and identity-based policies to restrict access to which IAM principals and accounts can access the images.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Pull images from the public container registry. Publish the images to AWS CodeArtifact repositories in a centralized AWS account. Use a CI/CD pipeline to deploy the images to different AWS accounts. Use repository policies and identity-based policies to restrict access to which IAM principals and accounts can access the images.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 442 discussion",
      "discusstion": [
        {
          "id": 735699,
          "date": "Mon 05 Dec 2022 07:33",
          "username": "\t\t\t\ttainh\t\t\t",
          "content": "C is correct<br>https://aws.amazon.com/premiumsupport/knowledge-center/secondary-account-access-ecr/",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1176056,
          "date": "Sun 17 Mar 2024 21:50",
          "username": "\t\t\t\thro\t\t\t",
          "content": "The LEAST management would be A - only addressing the Identity-based policies and NOT both ID policies and repo policies. No?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 725853,
          "date": "Thu 24 Nov 2022 14:32",
          "username": "\t\t\t\tD2\t\t\t",
          "content": "C is correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 722167,
          "date": "Sat 19 Nov 2022 19:22",
          "username": "\t\t\t\tsambda\t\t\t",
          "content": "C is correct",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#443",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon EC2 Linux instances in the AWS Cloud. A member of the company's security team recently received a report about common vulnerability identifiers on the instances.<br><br>A security engineer needs to verify patching and perform remediation if the instances do not have the correct patches installed. The security engineer must determine which EC2 instances are at risk and must implement a solution to automatically update those instances with the applicable patches.<br><br>What should the security engineer do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#443",
          "answers": [
            {
              "choice": "<p>Use AWS Systems Manager Patch Manager to view vulnerability identifiers for missing patches on the instances. Use Patch Manager also to automate the patching process.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Shield Advanced to view vulnerability identifiers for missing patches on the instances. Use AWS Systems Manager Patch Manager to automate the patching process.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon GuardDuty to view vulnerability identifiers for missing patches on the instances. Use Amazon Inspector to automate the patching process.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Inspector to view vulnerability identifiers for missing patches on the instances. Use Amazon Inspector also to automate the patching process.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 443 discussion",
      "discusstion": [
        {
          "id": 735700,
          "date": "Mon 05 Dec 2022 07:36",
          "username": "\t\t\t\ttainh\t\t\t",
          "content": "A is correct<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776659,
          "date": "Sun 15 Jan 2023 15:25",
          "username": "\t\t\t\tsecdaddy\t\t\t",
          "content": "https://aws.amazon.com/about-aws/whats-new/2020/10/now-use-aws-systems-manager-to-view-vulnerability-identifiers-for-missing-patches-on-your-linux-instances/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 764597,
          "date": "Tue 03 Jan 2023 12:53",
          "username": "\t\t\t\tjishrajesh\t\t\t",
          "content": "Selected a",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 729627,
          "date": "Mon 28 Nov 2022 22:14",
          "username": "\t\t\t\tTeknoklutz\t\t\t",
          "content": "SM Patch Manager - Inspector can not patch",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#444",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a single-page application (SPA) that is served by Amazon CloudFront. An Amazon S3 bucket is the origin of the CloudFront distribution. The company is using Amazon Cognito for authentication.<br><br>An external security review reveals that unauthenticated users can download the application source code from the SPA in index.html and view internal details of the SPA.  A security engineer needs to implement a solution to avoid exposing the source code to unauthenticated users.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#444",
          "answers": [
            {
              "choice": "<p>Split the login logic to a separate login.html page. Designate the new page as the landing page. Attach an AWS WAF web ACL to the CloudFront distribution to deny unauthenticated requests to index html.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Change the authentication method in Amazon Cognito to use an AWS Lambda authorizer. Configure the Lambda authorizer to control authentication and disallow downloads if the user is not authenticated.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement an Amazon Cognito hosted UI for the login. Add Lambda@Edge logic to the CloudFront distribution to either serve content or redirect to the login page.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an origin access identity (OAI). Associate the OAI with the CloudFront distribution. Configure S3 bucket permissions for the OAI to allow access to authenticated users only.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 444 discussion",
      "discusstion": [
        {
          "id": 736428,
          "date": "Tue 06 Dec 2022 01:27",
          "username": "\t\t\t\tspeedster\t\t\t",
          "content": "Cognito login UI is separate UI component, which is not part of index.html<br>https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-app-integration.html#cognito-user-pools-create-an-app-integration",
          "upvote_count": "13",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 915221,
          "date": "Mon 05 Jun 2023 10:32",
          "username": "\t\t\t\tToptip\t\t\t",
          "content": "i think D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 875277,
          "date": "Thu 20 Apr 2023 06:45",
          "username": "\t\t\t\tamaltare\t\t\t",
          "content": "https://aws.amazon.com/blogs/networking-and-content-delivery/authorizationedge-how-to-use-lambdaedge-and-json-web-tokens-to-enhance-web-application-security/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 842899,
          "date": "Sat 18 Mar 2023 16:39",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "Amazon Cognito hosted UI for the login, which provides a secure login mechanism for authenticated users. Add Lambda@Edge logic to the CloudFront distribution allows to serve content or redirect to the login page if the user is not authenticated.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 784101,
          "date": "Sun 22 Jan 2023 10:08",
          "username": "\t\t\t\tsahanpere\t\t\t",
          "content": "Can security engineer implement a business logic which he do the developer work? But asyou can configure the existing cognito configs to prompt for cognito manage login page. Hence C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 774885,
          "date": "Fri 13 Jan 2023 22:42",
          "username": "\t\t\t\tkrishccie\t\t\t",
          "content": "https://repost.aws/questions/QUVlGulealTn2GP4r9Wr6IYA/restrict-access-to-webpage-with-amplify-cognito&<br><br>https://aws.amazon.com/blogs/networking-and-content-delivery/authorizationedge-using-cookies-protect-your-amazon-cloudfront-content-from-being-downloaded-by-unauthenticated-users/<br><br>&",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 772718,
          "date": "Wed 11 Jan 2023 17:34",
          "username": "\t\t\t\tsahanpere\t\t\t",
          "content": "C - This can prevent unauthorised users to load the index.html to the client side. cause congnito prompt the login page first then only authorised users can only load index.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 761067,
          "date": "Thu 29 Dec 2022 14:39",
          "username": "\t\t\t\tTeknoklutz\t\t\t",
          "content": "Due to \\\"unauthenticated\\\" user identification, i would go with Cognito, Option C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 757858,
          "date": "Mon 26 Dec 2022 22:22",
          "username": "\t\t\t\tryogoku\t\t\t",
          "content": "WAF will control who can access index, hence option A. <br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>WAF will block malicious use requests not controls .. C is right</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 829550,
          "date": "Sun 05 Mar 2023 03:10",
          "username": "\t\t\t\tAzureDP900\t\t\t",
          "content": "WAF will block malicious use requests not controls .. C is right",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 754502,
          "date": "Fri 23 Dec 2022 21:16",
          "username": "\t\t\t\tFyssy\t\t\t",
          "content": "Using AWS WAF to control access to your content<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-awswaf.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 733955,
          "date": "Fri 02 Dec 2022 18:50",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "In my mind A or D<br>A - WAF for application Security.Essentially, you can create a new login page that prevents the view of indext.html.WAF no works with Cognito auth (Sept 6 2022).<br>B - provides a custom auth scheme for your API - Does not prevent view of index.html<br>C - provides hosted UI OAuth - which would not prevent view<br>D - This looks really good but can't find how to do it, other than 3rd party apps<br>https://tray.io/connectors/aws-cognito-cloudfront-integrations",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#445",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating its Amazon EC2 based applications to use Instance Metadata Service Version 2 (IMDSv2). A security engineer needs to determine whether any of the EC2 instances are still using Instance Metadata Service Version 1 (IMDSv1).<br><br>What should the security engineer do to confirm that the IMDSv1 endpoint is no longer being used?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#445",
          "answers": [
            {
              "choice": "<p>Configure logging on the Amazon CloudWatch agent for IMDSv1 as part of EC2 instance startup. Create a metric filter and a CloudWatch dashboard. Track the metric in the dashboard.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon CloudWatch dashboard. Verify that the EC2:MetadataNoToken metric is zero across all EC2 instances. Monitor the dashboard.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a security group that blocks access to HTTP for the IMDSv1 endpoint. Attach the security group to all EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure user data scripts for all EC2 instances to send logging information to AWS CloudTrail when IMDSv1 is used. Create a metric filter and an Amazon CloudWatch dashboard. Track the metric in the dashboard.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 445 discussion",
      "discusstion": [
        {
          "id": 729636,
          "date": "Mon 28 Nov 2022 22:42",
          "username": "\t\t\t\tTeknoklutz\t\t\t",
          "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-service.html<br><br>MDSv2 uses token-backed sessions, while IMDSv1 does not. The MetadataNoToken CloudWatch metric tracks the number of calls to the instance metadata service that are using IMDSv1. By tracking this metric to zero, you can determine if and when all of your software has been upgraded to use IMDSv2<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>That`s good. I think what you say is good.</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 897450,
          "date": "Sun 14 May 2023 11:56",
          "username": "\t\t\t\tBlue15\t\t\t",
          "content": "That`s good. I think what you say is good.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 757848,
          "date": "Mon 26 Dec 2022 22:03",
          "username": "\t\t\t\tSubs2021\t\t\t",
          "content": "Ans: B<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-service.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 754492,
          "date": "Fri 23 Dec 2022 21:04",
          "username": "\t\t\t\tFyssy\t\t\t",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#446",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using HTTPS for all its public endpoints. A third-party certificate authority (CA) issues the certificates. The company imports the certificates and attaches the certificates to an Elastic Load Balancer or an Amazon CloudFront distribution. The company also is using a third-party DNS hosting provider.<br><br>The certificates are near expiration. The company wants to migrate to AWS Certificate Manager (ACM) with automatic renewal. When the company adds the CNAME record during DNS validation, the certificate status changes to Failed.<br><br>What is the root cause of this issue?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#446",
          "answers": [
            {
              "choice": "<p>DNS validation requires the domain to be hosted on Amazon Route 53.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Automatic renewal for domain validation requires the domain to be hosted on Amazon Route 53.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The domain has Certification Authority Authorization (CAA) DNS records that allow only specific certificate authorities.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>DNS validation requires a TXT record instead of a CNAME record.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 446 discussion",
      "discusstion": [
        {
          "id": 733962,
          "date": "Fri 02 Dec 2022 19:04",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "B - If you do not use Amazon Route 53 to manage your public DNS records, contact your DNS provider to find out how to add records. If you lack authority to edit your domain's DNS database, you must use email validation instead.<br><br>A - DNS validation is not required to be only route53<br>C - We know nothing about the actual domain. Other than 3rd party.<br>D - Dns validate requires a CNAME record - Confirmed in question 349.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1126064,
          "date": "Thu 18 Jan 2024 17:45",
          "username": "\t\t\t\tYR4591\t\t\t",
          "content": "The question asks about dns validation process. Your domain does not have to be in route53 for this.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 933827,
          "date": "Sun 25 Jun 2023 20:53",
          "username": "\t\t\t\tAnuragksslr\t\t\t",
          "content": "DNS not with Route53. Validation only happens with active DNS, which is 3rd party",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 930758,
          "date": "Thu 22 Jun 2023 17:58",
          "username": "\t\t\t\tGreen53\t\t\t",
          "content": "I'd have to go with C here.<br><br>It isn't A, the records just have to exist. See:<br>https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html<br><br>\\\"If you do not use Amazon Route 53 to manage your public DNS records, contact your DNS provider to find out how to add records.\\\"<br><br>I can't see it being B.  Notice we're not trying to automatically renew a certificate, we're trying to issue a new one (the *old* certificates are near expiration). I see nothing on:<br>https://docs.aws.amazon.com/acm/latest/userguide/troubleshooting-renewal.html<br>to suggest it requires to be hosted in Route53 (unless you want to click the 'create DNS' option in ACM).<br><br>We then have D,which is incorrect, see https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html<br><br>C seems the most plausible, given:<br>https://docs.aws.amazon.com/acm/latest/userguide/dns-renewal-validation.html<br><br>\\\"ACM sends AWS Health events and Amazon EventBridge events when it cannot automatically validate a domain during renewal (for example, because of the presence of CAA record)\\\"",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 914815,
          "date": "Sun 04 Jun 2023 18:34",
          "username": "\t\t\t\t6_8ftwin\t\t\t",
          "content": "C<br>If you are not using Route 53 as your DNS provider, you need to manually enter CNAME records provided by ACM into your provider's database, usually through a website. CNAME records are used for a number of purposes, including as redirect mechanisms and as containers for vendor-specific metadata. For ACM, these records allow initial domain ownership validation and ongoing automated certificate renewal.<br>https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html<br>'C' is the only valid choice",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 908386,
          "date": "Sun 28 May 2023 08:56",
          "username": "\t\t\t\tpal40sg\t\t\t",
          "content": "B: Automatic renewal for domain validation requires the domain to be hosted on Amazon Route 53.<br><br>When using AWS Certificate Manager (ACM) for automatic renewal, the domain validation process requires the domain to be hosted on Amazon Route 53, which is Amazon Web Services' (AWS) DNS service. This means that the company's DNS hosting provider, which is a third-party provider, is not compatible with the automatic renewal process.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option C, which states that the domain has Certification Authority Authorization (CAA) DNS records that allow only specific certificate authorities, is not the root cause of the issue mentioned in the scenario. While CAA records can restrict which certificate authorities are allowed to issue certificates for a domain, it does not directly relate to the failure of DNS validation when adding a CNAME record.<br><br>In the given scenario, the problem lies with the requirement for automatic renewal with ACM, which specifically requires the domain to be hosted on Amazon Route 53 (option B). This means that using a third-party DNS hosting provider is not compatible with the automatic renewal process offered by ACM.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 908387,
          "date": "Sun 28 May 2023 08:57",
          "username": "\t\t\t\tpal40sg\t\t\t",
          "content": "Option C, which states that the domain has Certification Authority Authorization (CAA) DNS records that allow only specific certificate authorities, is not the root cause of the issue mentioned in the scenario. While CAA records can restrict which certificate authorities are allowed to issue certificates for a domain, it does not directly relate to the failure of DNS validation when adding a CNAME record.<br><br>In the given scenario, the problem lies with the requirement for automatic renewal with ACM, which specifically requires the domain to be hosted on Amazon Route 53 (option B). This means that using a third-party DNS hosting provider is not compatible with the automatic renewal process offered by ACM.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 856136,
          "date": "Thu 30 Mar 2023 21:21",
          "username": "\t\t\t\treji07\t\t\t",
          "content": "With DNS validation, you write a CNAME record to your DNS configuration to establish control of your domain name. After you have configured the CNAME record, ACM can automatically renew DNS-validated certificates before they expire, as long as the DNS record has not changed. To make it even easier to validate your domain, ACM can update your DNS configuration for you if you manage your DNS records with Amazon Route 53. If tou are not using Route53 you need to ensure that CNAME record exists for the certificate in the hosted domain",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 842921,
          "date": "Sat 18 Mar 2023 17:04",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "Documentation is clear on this:<br>It's recommend using DNS validation over email validation for the following reasons:<br>ACM automatically renews DNS-validated certificates for as long as a certificate remains in use and the DNS record is in place.<br><br>To be renewed, email-validated certificates require an action by the domain owner. ACM begins sending renewal notices 45 days before expiration, using the domain's WHOIS mailbox addresses and five common administrator addressess. The notifications contain a link that the domain owner can click for easy renewal. Once all listed domains are validated, ACM issues a renewed certificate with the same ARN.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>B is correct as R53 is not required.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 842922,
          "date": "Sat 18 Mar 2023 17:06",
          "username": "\t\t\t\tc73bf38\t\t\t",
          "content": "B is correct as R53 is not required.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 834519,
          "date": "Fri 10 Mar 2023 01:10",
          "username": "\t\t\t\tawsguru1998\t\t\t",
          "content": "A When using AWS Certificate Manager (ACM) to request and manage SSL/TLS certificates, the DNS validation process requires that the domain be hosted on Amazon Route 53. If the company is using a third-party DNS hosting provider, the CNAME record created during the validation process will not be recognized by ACM, resulting in a validation failure.<br><br>To resolve this issue, the company can either transfer their domain to Amazon Route 53, or they can use one of the other validation methods supported by ACM, such as email validation or HTTP validation.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 821430,
          "date": "Sat 25 Feb 2023 12:38",
          "username": "\t\t\t\tSergioP\t\t\t",
          "content": "why not A?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 809237,
          "date": "Wed 15 Feb 2023 08:25",
          "username": "\t\t\t\tPatrickLi\t\t\t",
          "content": "C.  There is no requirement the domain name is hosted with R53 whatsoever.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 781657,
          "date": "Thu 19 Jan 2023 23:24",
          "username": "\t\t\t\tNocky24\t\t\t",
          "content": "C out of these choices based on this article: https://aws.amazon.com/premiumsupport/knowledge-center/acm-troubleshoot-caa-errors/<br><br>B is incorrect, your zone doesn't need to be in R53 at all for auto renewal, it just needs to be accessible via public DNS: https://docs.aws.amazon.com/acm/latest/userguide/dns-renewal-validation.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 764598,
          "date": "Tue 03 Jan 2023 12:54",
          "username": "\t\t\t\tjishrajesh\t\t\t",
          "content": "Selected b",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 754475,
          "date": "Fri 23 Dec 2022 20:50",
          "username": "\t\t\t\tFyssy\t\t\t",
          "content": "This is of of the ways certificate validation can fail.<br>https://aws.amazon.com/premiumsupport/knowledge-center/acm-troubleshoot-caa-errors/<br>https://aws.amazon.com/blogs/security/easier-certificate-validation-using-dns-with-aws-certificate-manager/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 733985,
          "date": "Fri 02 Dec 2022 19:33",
          "username": "\t\t\t\tkerar\t\t\t",
          "content": "Automatic renewal through DNS happens only when you are using R53 to manage your domains.<br><br>https://repost.aws/questions/QU4uFrU2dDT4u2-Xsglm-qAg/help-i-am-not-technical-my-aws-certificate-manager-acm-was-unable-to-renew-the-certificate-automatically-using-dns-validation-how-can-i-solve-this?sc_ichannelha&sc_ilangen&sc_isiterepost&sc_iplacehp&sc_icontentQU4uFrU2dDT4u2-Xsglm-qAg&sc_ipos7",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#447",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is designing a solution to serve content from an Amazon CloudFront distribution that will have an Amazon S3 bucket as the origin. A security engineer needs to encrypt S3 data at rest with an AWS Key Management Service (KMS) customer managed key rather than with an S3 managed key. The solution must minimize operational overhead.<br><br>Which combination of steps should the security engineer take to meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ADF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#447",
          "answers": [
            {
              "choice": "<p>Create the S3 bucket. Configure server-side encryption with a customer managed KMS key.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create the S3 bucket. Configure server-side encryption with customer-provided encryption keys (SSE-C).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create the CloudFront distribution. Use the S3 bucket as the origin. Configure the distribution to use an origin access identity (OAI).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create the CloudFront distribution. Use the S3 bucket as the origin. Delete the origin access identity (OAI) configuration.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the CloudFront distribution cache to encrypt data at rest by using the customer managed KMS key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a Lambda@Edge function that runs for origin request events and reads from the S3 bucket by using the customer managed KMS key.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 447 discussion",
      "discusstion": [
        {
          "id": 741923,
          "date": "Sun 11 Dec 2022 18:16",
          "username": "\t\t\t\tBalki\t\t\t",
          "content": "Tough question. Instead of exposing your S3 bucket publicly to allow CloudFront to download objects, it is best to keep your bucket private using CloudFront Origin Access Identity (OAI). OAI is a special CloudFront user that is associated with an S3 origin and given the necessary permissions to access to objects within the bucket. Currently, OAI only supports SSE-S3, which means customers cannot use SSE-KMS with OAI.",
          "upvote_count": "17",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 946990,
          "date": "Sun 09 Jul 2023 10:14",
          "username": "\t\t\t\twmp7039\t\t\t",
          "content": "ADF : https://aws.amazon.com/blogs/networking-and-content-delivery/serving-sse-kms-encrypted-content-from-s3-using-cloudfront/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 933348,
          "date": "Sun 25 Jun 2023 09:40",
          "username": "\t\t\t\tOCHT\t\t\t",
          "content": "ACF should be correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 898893,
          "date": "Tue 16 May 2023 07:34",
          "username": "\t\t\t\tOCHT\t\t\t",
          "content": "Option D is not selected since deleting the OAI configuration will expose the S3 content directly, which isn't ideal considering the security requirements.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It should be ADF since u cannot use OAI with KMS customer managed keys (see blog post posted by other users)<br>With OAC it is now possible to use KMS.<br>https://aws.amazon.com/blogs/networking-and-content-delivery/amazon-cloudfront-introduces-origin-access-control-oac/</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 925915,
          "date": "Sat 17 Jun 2023 12:49",
          "username": "\t\t\t\tTofu13\t\t\t",
          "content": "It should be ADF since u cannot use OAI with KMS customer managed keys (see blog post posted by other users)<br>With OAC it is now possible to use KMS.<br>https://aws.amazon.com/blogs/networking-and-content-delivery/amazon-cloudfront-introduces-origin-access-control-oac/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 764600,
          "date": "Tue 03 Jan 2023 12:54",
          "username": "\t\t\t\tjishrajesh\t\t\t",
          "content": "Selected adf",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 763295,
          "date": "Sun 01 Jan 2023 19:32",
          "username": "\t\t\t\tTeknoklutz\t\t\t",
          "content": "ADF should be answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 746894,
          "date": "Fri 16 Dec 2022 08:07",
          "username": "\t\t\t\tajajajaj\t\t\t",
          "content": "Please don't giveus this question because we won't use OAI anymore!!<br>We can use OAC instead and don't need to worry how to manage KMS.<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 737629,
          "date": "Wed 07 Dec 2022 10:05",
          "username": "\t\t\t\tpiter8111\t\t\t",
          "content": "https://aws.amazon.com/blogs/networking-and-content-delivery/serving-sse-kms-encrypted-content-from-s3-using-cloudfront/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 737283,
          "date": "Wed 07 Dec 2022 00:35",
          "username": "\t\t\t\tTeknoklutz\t\t\t",
          "content": "https://aws.amazon.com/blogs/networking-and-content-delivery/serving-sse-kms-encrypted-content-from-s3-using-cloudfront/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 736498,
          "date": "Tue 06 Dec 2022 04:13",
          "username": "\t\t\t\ttainh\t\t\t",
          "content": "i choose A,D,F<br>https://aws.amazon.com/blogs/networking-and-content-delivery/serving-sse-kms-encrypted-content-from-s3-using-cloudfront/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 736423,
          "date": "Tue 06 Dec 2022 01:19",
          "username": "\t\t\t\tWilson_S\t\t\t",
          "content": "For the ability to decrypt, I am considering ADF after reading the following: https://aws.amazon.com/blogs/networking-and-content-delivery/serving-sse-kms-encrypted-content-from-s3-using-cloudfront/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 734616,
          "date": "Sat 03 Dec 2022 19:14",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "ADE -<br>If your origin is an Amazon S3 bucket configured as a website endpoint, you must set it up with CloudFront as a custom origin. That means you can't use OAC (or OAI). However, you can restrict access to a custom origin by setting up custom headers and configuring the origin to require them.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>ADF guy<br>Check with this link<br><br>https://aws.amazon.com/blogs/networking-and-content-delivery/serving-sse-kms-encrypted-content-from-s3-using-cloudfront/</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ADE"
        },
        {
          "id": 743989,
          "date": "Tue 13 Dec 2022 13:24",
          "username": "\t\t\t\tPhongsanth\t\t\t",
          "content": "ADF guy<br>Check with this link<br><br>https://aws.amazon.com/blogs/networking-and-content-delivery/serving-sse-kms-encrypted-content-from-s3-using-cloudfront/",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#448",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A security engineer is attempting to push a Linux-based container image to an Amazon Elastic Container Registry (Amazon ECR) repository that is in the us-east-1 Region. The security engineer has retrieved an authentication token by using the aws ecr get-login-password AWS CLI command within the last 4 hours. The security engineer has confirmed that the correct permissions are in place to push the container image to the repository.<br><br>When the security engineer tries to push the container image, the security engineer receives the following error: 'no basic auth credentials'. <br><br>What should the security engineer do to resolve this error?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#448",
          "answers": [
            {
              "choice": "<p>Obtain a new authorization token.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the AWS CLI to use us-east-1.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the aws-auth-cm.yaml file to include the IAM role for the security engineer.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Activate AWS Security Token Service (AWS STS) in us-east-1.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 448 discussion",
      "discusstion": [
        {
          "id": 733996,
          "date": "Fri 02 Dec 2022 19:49",
          "username": "\t\t\t\tkerar\t\t\t",
          "content": "Authentication requests are tied to specific regions, and cannot be used across regions. To resolve the issue, ensure that you have retrieved an authentication token from the same Region your repository exists in.<br><br>https://docs.aws.amazon.com/AmazonECR/latest/userguide/common-errors-docker.html#error-403",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 908391,
          "date": "Sun 28 May 2023 09:04",
          "username": "\t\t\t\tpal40sg\t\t\t",
          "content": "HTTP 403 Errors or \\\"no basic auth credentials\\\" error when pushing to repository<br>There are times when you may receive an HTTP 403 (Forbidden) error, or the error message no basic auth credentials from the docker push or docker pull commands, even if you have successfully authenticated to Docker using the aws ecr get-login-password command. The following are some known causes of this issue:<br><br>You have authenticated to a different region<br>Authentication requests are tied to specific regions, and cannot be used across regions. For example, if you obtain an authorization token from US West (Oregon), you cannot use it to authenticate against your repositories in US East (N. Virginia). To resolve the issue, ensure that you have retrieved an authentication token from the same Region your repository exists in. For more information, see Private registry authentication.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 741925,
          "date": "Sun 11 Dec 2022 18:20",
          "username": "\t\t\t\tBalki\t\t\t",
          "content": "https://docs.aws.amazon.com/AmazonECR/latest/userguide/common-errors-docker.html#error-403",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#449",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A security engineer is trying to use Amazon EC2 Image Builder to create an image of an EC2 instance. The security engineer has configured the pipeline to send logs to an Amazon S3 bucket. When the security engineer runs the pipeline, the build fails with the following error: 'AccessDenied: Access Denied status code: 403'. <br><br>The security engineer must resolve the error by implementing a solution that complies with best practices for least privilege access.<br><br>Which combination of steps will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#449",
          "answers": [
            {
              "choice": "<p>Ensure that the following policies are attached to the IAM role that the security engineer is using: EC2InstanceProfileForImageBuilder, EC2InstanceProfileForImageBuilderECRContainerBuilds, and AmazonSSMManagedInstanceCore.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Ensure that the following policies are attached to the instance profile for the EC2 instance: EC2InstanceProfileForImageBuilder, EC2InstanceProfileForImageBuilderECRContainerBuilds, and AmazonSSMManagedInstanceCore.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Ensure that the AWSImageBuilderFullAccess policy is attached to the instance profile for the EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Ensure that the security engineer's IAM role has the s3:PutObject permission for the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Ensure that the instance profile for the EC2 instance has the s3:PutObject permission for the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 449 discussion",
      "discusstion": [
        {
          "id": 739998,
          "date": "Fri 09 Dec 2022 11:34",
          "username": "\t\t\t\tBK__\t\t\t",
          "content": "ANS is BE<br><br>For those supporting \\\"A\\\", the instance profile is an IAM role for the EC2 instance. A says the IAM role attached to the engineer and this is wrong. B is instance profile which is the same as IAM role for the EC2 instance.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The engineer is not the one that needs the permissions but the EC2 instance</li></ul>",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 740000,
          "date": "Fri 09 Dec 2022 11:35",
          "username": "\t\t\t\tBK__\t\t\t",
          "content": "The engineer is not the one that needs the permissions but the EC2 instance",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 769181,
          "date": "Sun 08 Jan 2023 09:08",
          "username": "\t\t\t\tsecdaddy\t\t\t",
          "content": "The rights are clearly listed here, supporting BE<br>https://docs.aws.amazon.com/imagebuilder/latest/userguide/image-builder-setting-up.html#image-builder-IAM-prereq<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Thx for sharing link</li></ul>",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 829571,
          "date": "Sun 05 Mar 2023 03:35",
          "username": "\t\t\t\tAzureDP900\t\t\t",
          "content": "Thx for sharing link",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 981557,
          "date": "Tue 15 Aug 2023 12:49",
          "username": "\t\t\t\tNoexperience\t\t\t",
          "content": "Selected Answer: AD<br><br>To meet the requirements of resolving the \\\"Access Denied\\\" error with Amazon EC2 Image Builder while adhering to best practices for least privilege access, the following steps should be taken:<br>A.  Ensure that the following policies are attached to the IAM role that the security engineer is using: EC2InstanceProfileForImageBuilder, EC2InstanceProfileForImageBuilderECRContainerBuilds, and AmazonSSMManagedInstanceCore.<br>D.  Ensure that the security engineer's IAM role has the s3:PutObject permission for the S3 bucket.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 940361,
          "date": "Sun 02 Jul 2023 01:36",
          "username": "\t\t\t\tjeff001\t\t\t",
          "content": "https://docs.aws.amazon.com/imagebuilder/latest/userguide/troubleshooting.html#ts-access-denied",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 933694,
          "date": "Sun 25 Jun 2023 16:41",
          "username": "\t\t\t\tfrancinetanzx\t\t\t",
          "content": "https://docs.aws.amazon.com/imagebuilder/latest/userguide/troubleshooting.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 894714,
          "date": "Thu 11 May 2023 09:28",
          "username": "\t\t\t\tOCHT\t\t\t",
          "content": "In the context of the scenario, the best combination would be A and D. <br><br>Here's why:<br><br>The IAM role that the security engineer is using to interact with Amazon EC2 Image Builder needs to have the right policies attached. The policies mentioned in Option A (EC2InstanceProfileForImageBuilder, EC2InstanceProfileForImageBuilderECRContainerBuilds, and AmazonSSMManagedInstanceCore) provide the necessary permissions to create and manage EC2 instances for Image Builder, build and test the image, and use Systems Manager capabilities.<br><br>Option D ensures that the security engineer's IAM role has the permissions needed to write logs to the S3 bucket. It's crucial for the role used to run the pipeline to have this permission, as the pipeline's logs are being sent to an S3 bucket.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The other combinations have a key issue - they suggest attaching the necessary permissions to the instance profile for the EC2 instance (Options B and E). However, the permissions needed to run the pipeline and write logs to the S3 bucket should be attached to the IAM role that the security engineer is using to interact with EC2 Image Builder, not the instance profile for the EC2 instance itself.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 894717,
          "date": "Thu 11 May 2023 09:30",
          "username": "\t\t\t\tOCHT\t\t\t",
          "content": "The other combinations have a key issue - they suggest attaching the necessary permissions to the instance profile for the EC2 instance (Options B and E). However, the permissions needed to run the pipeline and write logs to the S3 bucket should be attached to the IAM role that the security engineer is using to interact with EC2 Image Builder, not the instance profile for the EC2 instance itself.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 828067,
          "date": "Fri 03 Mar 2023 16:07",
          "username": "\t\t\t\tbwestpha\t\t\t",
          "content": "i checked BE",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 809246,
          "date": "Wed 15 Feb 2023 08:34",
          "username": "\t\t\t\tPatrickLi\t\t\t",
          "content": "Vote for BE.  The permission of the user who runs the pipeline is irrelevant.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 763296,
          "date": "Sun 01 Jan 2023 19:33",
          "username": "\t\t\t\tTeknoklutz\t\t\t",
          "content": "BE Correct Answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 737601,
          "date": "Wed 07 Dec 2022 09:44",
          "username": "\t\t\t\tpiter8111\t\t\t",
          "content": "https://docs.aws.amazon.com/imagebuilder/latest/userguide/troubleshooting.html - Access denied =E2=80=93 status code 403",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 736500,
          "date": "Tue 06 Dec 2022 04:26",
          "username": "\t\t\t\ttainh\t\t\t",
          "content": "B,E are correct<br>https://docs.aws.amazon.com/imagebuilder/latest/userguide/troubleshooting.html#ts-access-denied",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 736434,
          "date": "Tue 06 Dec 2022 01:35",
          "username": "\t\t\t\tWilson_S\t\t\t",
          "content": "Link supporting A and E: https://docs.aws.amazon.com/imagebuilder/latest/userguide/image-builder-setting-up.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Sorry! B and E. </li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 751413,
          "date": "Tue 20 Dec 2022 20:50",
          "username": "\t\t\t\tWilson_S\t\t\t",
          "content": "Sorry! B and E. ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 736114,
          "date": "Mon 05 Dec 2022 17:45",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "AE is the answer -<br>EThe instance profile role is missing permissions that are required for logging to Amazon S3. Most commonly, this occurs when the instance profile role does not have PutObject permissions for your S3 buckets.<br><br>AAn instance profile is a container for an IAM role that you can use to pass role information to an Amazon EC2 instance when the instance starts. You can tag instance profiles when you use the AWS CLI or AWS API. You can use IAM tag key-value pairs to add custom attributes to an instance profile. <br>The IAM role that you associate with your instance profile must have permissions to run the build and test components included in your image. The following IAM role policies must be attached to the IAM role that is associated with the instance profile:<br>EC2InstanceProfileForImageBuilder<br>EC2InstanceProfileForImageBuilderECRContainerBuilds<br>AmazonSSMManagedInstanceCore<br>https://docs.aws.amazon.com/imagebuilder/latest/userguide/security_iam_service-with-iam.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 734766,
          "date": "Sun 04 Dec 2022 01:49",
          "username": "\t\t\t\tSaklani\t\t\t",
          "content": "BE<br>https://docs.aws.amazon.com/imagebuilder/latest/userguide/troubleshooting.html#troubleshooting-pipelines<br>The instance profile is the one which should have the perm",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 734001,
          "date": "Fri 02 Dec 2022 19:55",
          "username": "\t\t\t\tkerar\t\t\t",
          "content": "Instance profile is missing managed policies =E2=80=93 Add the missing policies to your instance profile role. Then run the pipeline again.<br><br>Instance profile is missing write permissions for S3 bucket =E2=80=93 Add a policy to your instance profile role that grants PutObject permissions to write to your S3 bucket. Then run the pipeline again.<br><br>https://docs.aws.amazon.com/imagebuilder/latest/userguide/troubleshooting.html#troubleshooting-pipelines",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 732614,
          "date": "Thu 01 Dec 2022 13:45",
          "username": "\t\t\t\tkishore1212\t\t\t",
          "content": "https://docs.aws.amazon.com/imagebuilder/latest/userguide/troubleshooting.html#troubleshooting-pipelines<br> Instance profile should have permissions",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 732055,
          "date": "Wed 30 Nov 2022 23:25",
          "username": "\t\t\t\t[Removed]\t\t\t",
          "content": "Answer should be A,E",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#450",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a legacy application that runs on a single Amazon EC2 instance. A security audit shows that the application has been using an IAM access key within its code to access an Amazon S3 bucket that is named DOC-EXAMPLE-BUCKET1 in the same AWS account. This access key pair has the s3:GetObject permission to all objects in only this S3 bucket. The company takes the application offline because the application is not compliant with the company's security policies for accessing other AWS resources from Amazon EC2.<br><br>A security engineer validates that AWS CloudTrail is turned on in all AWS Regions. CloudTrail is sending logs to an S3 bucket that is named DOC-EXAMPLE-BUCKET2. This S3 bucket is in the same AWS account as DOC-EXAMPLE-BUCKET1. However, CloudTrail has not been configured to send logs to Amazon CloudWatch Logs.<br><br>The company wants to know if any objects in DOC-EXAMPLE-BUCKET1 were accessed with the IAM access key in the past 60 days. If any objects were accessed, the company wants to know if any of the objects that are text files (.txt extension) contained personally identifiable information (PII).<br><br>Which combination of steps should the security engineer take to gather this information? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#450",
          "answers": [
            {
              "choice": "<p>Configure Amazon Macie to identify any objects in DOC-EXAMPLE-BUCKET1 that contain PII and that were available to the access key.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon CloudWatch Logs Insights to identify any objects in DOC-EXAMPLE-BUCKET1 that contain PII and that were available to the access key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon OpenSearch Service (Amazon Elasticsearch Service) to query the CloudTrail logs in DOC-EXAMPLE-BUCKET2 for API calls that used the access key to access an object that contained PII.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Athena to query the CloudTrail logs in DOC-EXAMPLE-BUCKET2 for any API calls that used the access key to access an object that contained PII.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Identity and Access Management Access Analyzer to identify any API calls that used the access key to access objects that contained PII in DOC-EXAMPLE-BUCKET1.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Unlimited AccessExam AWS Certified Security - Specialty topic 1 question 450 discussion",
      "discusstion": [
        {
          "id": 734610,
          "date": "Sat 03 Dec 2022 18:50",
          "username": "\t\t\t\tAdamWest\t\t\t",
          "content": "AD - Use macie for sensitive data discovery.<br>Use Athena for API searches.Using Athena with CloudTrail logs is a powerful way to enhance your analysis of AWS service activity. For example, you can use queries to identify trends and further isolate activity by attributes, such as Access Keys<br><br>A common application is to use CloudTrail logs to analyze operational activity for security and compliance<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>AD is right, I agree. Question is too big for killing time</li></ul>",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 829574,
          "date": "Sun 05 Mar 2023 03:39",
          "username": "\t\t\t\tAzureDP900\t\t\t",
          "content": "AD is right, I agree. Question is too big for killing time",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 789415,
          "date": "Fri 27 Jan 2023 09:03",
          "username": "\t\t\t\tselim507\t\t\t",
          "content": "I got tired of reading the question...",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 873853,
          "date": "Tue 18 Apr 2023 18:26",
          "username": "\t\t\t\tKezuko\t\t\t",
          "content": "I am not sure why people chose D.  As D shows querying on DOC-Example-Bucket2 while the question is answering if any objects in DOC-EXAMPLE-BUCKET1 were accessed. So with that in mind, C and D is out. You left A, B, and E.  B is out due to Cloudtrail has not been configured to send logs to the CloudWatch Logs. We are left with A and E. <br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Nevermind, I change my answer to A D.  Because Cloudtrail was configured previously, hence will be sending the logs that shows the API calls that used the access key to access the object</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 878601,
          "date": "Sun 23 Apr 2023 18:23",
          "username": "\t\t\t\tKezuko\t\t\t",
          "content": "Nevermind, I change my answer to A D.  Because Cloudtrail was configured previously, hence will be sending the logs that shows the API calls that used the access key to access the object",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 741936,
          "date": "Sun 11 Dec 2022 18:35",
          "username": "\t\t\t\tBalki\t\t\t",
          "content": "Only reason why we cannot choose B is , Cloudtrail doesnt log to Cloudwatch. Else, we can choose that. So, A&D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        }
      ]
    }
  ]
}