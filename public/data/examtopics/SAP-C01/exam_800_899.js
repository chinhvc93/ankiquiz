var ExamTopic_800_899 = {
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#800",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has used infrastructure as code (IaC) to provision a set of two Amazon EC2 instances. The instances have remained the same for several years.<br>The company's business has grown rapidly in the past few months. In response the company's operations team has implemented an Auto Scaling group to manage the sudden increases in traffic. Company policy requires a monthly installation of security updates on all operating systems that are running.<br>The most recent security update required a reboot. As a result, the Auto Scaling group terminated the instances and replaced them with new, unpatched instances.<br>Which combination of steps should a solutions architect recommend to avoid a recurrence of this issue? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#800",
          "answers": [
            {
              "choice": "<p>A. Modify the Auto Scaling group by setting the Update policy to target the oldest launch configuration for replacement.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new Auto Scaling group before the next patch maintenance. During the maintenance window, patch both groups and reboot the instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Elastic Load Balancer in front of the Auto Scaling group. Configure monitoring to ensure that target group health checks return healthy after the Auto Scaling group replaces the terminated instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create automation scripts to patch an AMI, update the launch configuration, and invoke an Auto Scaling instance refresh.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an Elastic Load Balancer in front of the Auto Scaling group. Configure termination protection on the instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 644864,
          "date": "Wed 10 Aug 2022 10:33",
          "username": "foureye2004",
          "content": "A incorrrect: default oldest launchconfiguration will be terminated first<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-termination-policies.html<br><br>B.  Incorrect: No need to create a new ASG<br>C.  Correct: Need a loadbalancer to make sure the request route to the healthy instance.<br>D.  Correct: Script to update OS patch, Lambda to update a launch configuration and trigger Autoscaling Instance refresh<br>E.  Incorrect: Termination protection is not help.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 658736,
          "date": "Sat 03 Sep 2022 20:26",
          "username": "Ni_yot",
          "content": "C and D.  <br>The following example updates an Auto Scaling group with a newly patched AMI. This approach ensures that new images are automatically made available to different computing environments that use Auto Scaling groups.<br><br>The final step of the automation in this example uses a Python function to create a new launch template that uses the newly patched AMI. Then the Auto Scaling group is updated to use the new launch template. In this type of Auto Scaling scenario, users could terminate existing instances in the Auto Scaling group to force a new instance to launch that uses the new image. Or, users could wait and allow scale-in or scale-out events to naturally launch newer instances.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 632068,
          "date": "Sat 16 Jul 2022 10:54",
          "username": "asfsdfsdf",
          "content": "E and B are eliminated they don't make any sense<br>D is a must since need to patch the AMI and create a new launch configuration update it in the AS and execute refresh. <br>Both A and C are correct for this use case, C - will make sure servers are running correctly after patching and A will make sure the unpatched EC2s will be terminated first. <br>Since the requirement is to make sure ASG is to have only latest configuration I have to choose AD - if A was with \\\"SkipMatching\\\" it was making more sense",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 610467,
          "date": "Thu 02 Jun 2022 08:19",
          "username": "bobsmith2000",
          "content": "Even through you cannot update launch config, I suppose it's AD<br>Right by the book:<br>- latest ami in ASG<br>- instances refresh",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 598756,
          "date": "Mon 09 May 2022 00:52",
          "username": "user0001",
          "content": "A/D, you need to update AMI otherwise you wont get the latest or resolve the security issue",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 585719,
          "date": "Thu 14 Apr 2022 13:11",
          "username": "SaiKrish123",
          "content": "C&D in autoscaling group launch configuration need to be updated with AMI",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 551852,
          "date": "Sun 20 Feb 2022 15:19",
          "username": "Alexey79",
          "content": "A<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html<br>“The termination policy for the Auto Scaling group controls which instances are replaced first.”<br>“If you did not assign a specific termination policy to the group, Amazon EC2 Auto Scaling uses the default termination policy. It selects the Availability Zone with two instances, and terminates the instance that was launched from the oldest launch template or launch configuration.”<br><br>Both C and D correct and describe need for refresh EC2 Instances with newest template. But, C doesn’t mention Patching phase, only D does. In question, ELB requirement is not mentioned.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 544120,
          "date": "Wed 09 Feb 2022 23:22",
          "username": "usmanbaigmughal",
          "content": "C And D:<br>https://aws.amazon.com/blogs/compute/introducing-instance-refresh-for-ec2-auto-scaling/#:~:text=You%20can%20trigger%20an%20Instance,ASG%20terminates%20and%20launches%20instances.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 530900,
          "date": "Mon 24 Jan 2022 00:20",
          "username": "saeidp",
          "content": "C and D<br>Walkthrough: Simplify AMI patching using Automation, AWS Lambda, and Parameter Store<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-walk-patch-windows-ami-simplify.html<br><br>Walkthrough: Patch an AMI and update an Auto Scaling group<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-walk-patch-windows-ami-autoscaling.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 516853,
          "date": "Tue 04 Jan 2022 18:08",
          "username": "Smartphone",
          "content": "Answer is A & C<br>To change the launch configuration for an Auto Scaling group, use an existing launch configuration as the basis for a new launch configuration. Then, update the Auto Scaling group to use the new launch configuration. After you change the launch configuration for an Auto Scaling group, any new instances are launched using the new configuration options, but existing instances are not affected.To update the existing instances, terminate them so that they are replaced by your Auto Scaling group, or allow auto scaling to gradually replace older instances with newer instances based on your termination policies.<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/change-launch-config.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 513360,
          "date": "Thu 30 Dec 2021 13:45",
          "username": "AwsSuperTrooper",
          "content": "I believe it should be A & C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 511744,
          "date": "Wed 29 Dec 2021 04:19",
          "username": "techn00busmanbaigmughalsashsz",
          "content": "Think its D & EC And D<br>For E : Termination protection have no sense.<br><br>https://aws.amazon.com/blogs/compute/introducing-instance-refresh-for-ec2-auto-scaling/#:~:text=You%20can%20trigger%20an%20Instance,ASG%20terminates%20and%20launches%20instances.D & E - make sure that the new instances are patched after they are created and keep the old running to serve the traffic. NO much to think about .",
          "upvote_count": "311",
          "selected_answers": ""
        },
        {
          "id": 544121,
          "date": "Wed 09 Feb 2022 23:23",
          "username": "usmanbaigmughalsashsz",
          "content": "C And D<br>For E : Termination protection have no sense.<br><br>https://aws.amazon.com/blogs/compute/introducing-instance-refresh-for-ec2-auto-scaling/#:~:text=You%20can%20trigger%20an%20Instance,ASG%20terminates%20and%20launches%20instances.D & E - make sure that the new instances are patched after they are created and keep the old running to serve the traffic. NO much to think about .",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 586162,
          "date": "Fri 15 Apr 2022 07:12",
          "username": "sashsz",
          "content": "D & E - make sure that the new instances are patched after they are created and keep the old running to serve the traffic. NO much to think about .",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#801",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services company in North America plans to release a new online web application to its customers on AWS. The company will launch the application in the us-east-1 Region on Amazon EC2 instances. The application must be highly available and must dynamically scale to meet user traffic. The company also wants to implement a disaster recovery environment for the application in the us-west-1 Region by using active-passive failover.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#801",
          "answers": [
            {
              "choice": "<p>A. Create a VPC in us-east-1 and a VPC in us-west-1. Configure VPC peering. In the us-east-1 VPC, create an Application Load Balancer (ALB) that extends across multiple Availability Zones in both VPCs. Create an Auto Scaling group that deploys the EC2 instances across the multiple Availability Zones in both VPCs. Place the Auto Scaling group behind the ALB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a VPC in us-east-1 and a VPC in us-west-1. In the us-east-1 VPC, create an Application Load Balancer (ALB) that extends across multiple Availability Zones in that VPC.  Create an Auto Scaling group that deploys the EC2 instances across the multiple Availability Zones in the us-east-1 VPC.  Place the Auto Scaling group behind the ALB.  Set up the same configuration in the us-west-1 VPC.  Create an Amazon Route 53 hosted zone. Create separate records for each ALB.  Enable health checks to ensure high availability between Regions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a VPC in us-east-1 and a VPC in us-west-1. In the us-east-1 VPC, create an Application Load Balancer (ALB) that extends across multiple Availability Zones in that VPC.  Create an Auto Scaling group that deploys the EC2 instances across the multiple Availability Zones in the us-east-1 VPC.  Place the Auto Scaling group behind the ALB.  Set up the same configuration in the us-west-1 VPC.  Create an Amazon Route 53 hosted zone. Create separate records for each ALB.  Enable health checks and configure a failover routing policy for each record.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a VPC in us-east-1 and a VPC in us-west-1. Configure VPC peering. In the us-east-1 VPC, create an Application Load Balancer (ALB) that extends across multiple Availability Zones in both VPCs. Create an Auto Scaling group that deploys the EC2 instances across the multiple Availability Zones in both VPCs. Place the Auto Scaling group behind the ALB.  Create an Amazon Route 53 hosted zone. Create a record for the ALB. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 526245,
          "date": "Tue 18 Jan 2022 03:11",
          "username": "Student1950",
          "content": "Answer C.  Since sites will be running in active-passive",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 632073,
          "date": "Sat 16 Jul 2022 10:59",
          "username": "asfsdfsdf",
          "content": "C - failover records will do the ticket - ALB is a regional resource",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 610461,
          "date": "Thu 02 Jun 2022 08:08",
          "username": "bobsmith2000",
          "content": "ALB can't span several Regions.<br>Failover routing Policy.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 575232,
          "date": "Fri 25 Mar 2022 20:34",
          "username": "CloudHell",
          "content": "Answer is C, it's the one that handles failover while B (the one shown as the answer today) it almost the same but does not handle failover.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 572299,
          "date": "Mon 21 Mar 2022 15:15",
          "username": "bfal",
          "content": "Answer is C.  The fail-over in answer C meets the active-Passive Requirement.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 513339,
          "date": "Thu 30 Dec 2021 13:15",
          "username": "AwsSuperTrooperAwsSuperTrooper",
          "content": "Answer CVCP peering is not needed and a failover routing policy is.",
          "upvote_count": "41",
          "selected_answers": ""
        },
        {
          "id": 513340,
          "date": "Thu 30 Dec 2021 13:16",
          "username": "AwsSuperTrooper",
          "content": "VCP peering is not needed and a failover routing policy is.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#802",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's site reliability engineer is performing a review of Amazon FSx for Windows File Server deployments within an account that the company acquired.<br>Company policy states that all Amazon FSx file systems must be configured to be highly available across Availability Zones.<br>During the review, the site reliability engineer discovers that one of the Amazon FSx file systems used a deployment type of Single-AZ 2. A solutions architect needs to minimize downtime while aligning this Amazon FSx file system with company policy.<br>What should the solutions architect do to meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#802",
          "answers": [
            {
              "choice": "<p>A. Reconfigure the deployment type to Multi-AZ for this Amazon FSx file system.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new Amazon FSx file system with a deployment type of Multi-AZ. Use AWS DataSync to transfer data to the new Amazon FSx file system. Point users to the new location.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a second Amazon FSx file system with a deployment type of Single-AZ 2. Use AWS DataSync to keep the data in sync. Switch users to the second Amazon FSx file system in the event of failure.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the AWS Management Console to take a backup of the Amazon FSx file system. Create a new Amazon FSx file system with a deployment type of Multi- AZ. Restore the backup to the new Amazon FSx file system. Point users to the new location.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 542136,
          "date": "Mon 07 Feb 2022 05:14",
          "username": "Bigbearcn",
          "content": "It's B.  B has less downtime than D. ",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 712313,
          "date": "Sun 06 Nov 2022 14:09",
          "username": "orik",
          "content": "why no A? isn't is possible to change the type?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 653496,
          "date": "Mon 29 Aug 2022 14:55",
          "username": "Rocketeer",
          "content": "D<br>Data sync not needed when setup as MultiAZ. Hence need to do a one time copy.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 643877,
          "date": "Mon 08 Aug 2022 01:30",
          "username": "nexus2020",
          "content": "B – Sync = up to date<br>D – back and restore = not up to date = more down time",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 636484,
          "date": "Mon 25 Jul 2022 08:34",
          "username": "cen007",
          "content": "B. <br>We recommend using AWS DataSync to transfer data between FSx for Windows File Server file systems. DataSync is a data transfer service that simplifies, automates, and accelerates moving and replicating data between on-premises storage systems and other AWS storage services over the internet or AWS Direct Connect. DataSync can transfer your file system data and metadata, such as ownership, timestamps, and access permissions.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 632079,
          "date": "Sat 16 Jul 2022 11:07",
          "username": "asfsdfsdf",
          "content": "Only B and D are valid - according to AWS documentation the correct way is to use DataSync to sync the two FSx once done - switch to the new one.<br>So B is the most correct one",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 607551,
          "date": "Thu 26 May 2022 11:07",
          "username": "bobsmith2000",
          "content": "Obviously it's between B and D. <br>D implies risk of loosing data which was uploaded or changed since the snapshot was taken.<br>So I'm going with B. ",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 558612,
          "date": "Tue 01 Mar 2022 07:20",
          "username": "itznotme",
          "content": "https://aws.amazon.com/fsx/windows/faqs/?nc=sn&loc=8",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 556871,
          "date": "Sat 26 Feb 2022 18:37",
          "username": "Sonujunko",
          "content": "D In addition to AMKazi's comment subsequent AZ failure is transparent to users, which reduces the downtime which was one the criteria in the question.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 555581,
          "date": "Thu 24 Feb 2022 22:34",
          "username": "cannottellname",
          "content": "BBBB<br>https://docs.aws.amazon.com/fsx/latest/WindowsGuide/migrate-files-to-fsx-datasync.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 533168,
          "date": "Wed 26 Jan 2022 20:18",
          "username": "AMKazi",
          "content": "And D: <br>https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html#aws-backup-and-fsx",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 532226,
          "date": "Tue 25 Jan 2022 16:17",
          "username": "pititcu667",
          "content": "D and B are good options but D has less cost.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 526537,
          "date": "Tue 18 Jan 2022 12:13",
          "username": "cannottellnameAMKazi",
          "content": "B.  It allows data sync<br>https://aws.amazon.com/blogs/storage/how-to-replicate-amazon-fsx-file-server-data-across-aws-regions/its not about multi region data sync, its multi AZ. Ans is D https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html#aws-backup-and-fsx",
          "upvote_count": "43",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 533167,
          "date": "Wed 26 Jan 2022 20:18",
          "username": "AMKazi",
          "content": "its not about multi region data sync, its multi AZ. Ans is D https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html#aws-backup-and-fsx",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 514774,
          "date": "Sun 02 Jan 2022 03:15",
          "username": "tkanmani76",
          "content": "B should be right answer - refer FAQ for usage of Data Sync.<br>If you’d like to migrate your existing files to Amazon FSx for Windows File Server file systems, we recommend the use of AWS DataSync, an online data transfer service designed to simplify, automate, and accelerate copying large amounts of data to and from AWS storage services.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 513969,
          "date": "Fri 31 Dec 2021 10:00",
          "username": "cldy",
          "content": "B: DataSync for FSx to FSx transfer.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#803",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's solutions architect is analyzing costs of a multi-application environment. The environment is deployed across multiple Availability Zones in a single<br>AWS Region. After a recent acquisition, the company manages two organizations in AWS Organizations. The company has created multiple service provider applications as AWS PrivateLink-powered VPC endpoint services in one organization. The company has created multiple service consumer applications in the other organization.<br>Data transfer charges are much higher than the company expected, and the solutions architect needs to reduce the costs. The solutions architect must recommend guidelines for developers to follow when they deploy services. These guidelines must minimize data transfer charges for the whole environment.<br>Which guidelines meet these requirements? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#803",
          "answers": [
            {
              "choice": "<p>A. Use AWS Resource Access Manager to share the subnets that host the service provider applications with other accounts in the organization.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Place the service provider applications and the service consumer applications in AWS accounts in the same organization.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Turn off cross-zone load balancing for the Network Load Balancer in all service provider application deployments.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Ensure that service consumer compute resources use the Availability Zone-specific endpoint service by using the endpoint's local DNS name.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a Savings Plan that provides adequate coverage for the organization's planned inter-Availability Zone data transfer usage.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 540114,
          "date": "Fri 04 Feb 2022 01:09",
          "username": "saeidpfirstabedByrney",
          "content": "CD<br>A is wrong: Because RAM cannot use sharing between organizations then this answer is outRAM correct <br><br>AWS Resource Access Manager (AWS RAM) helps you securely share the AWS resources that you create in one AWS account with other AWS accounts. If you have multiple AWS accounts, you can create a resource once and use AWS RAM to make that resource usable by those other accounts. If your account is managed by AWS Organizations, then you can share resources with all the other accounts in the organization, or only those accounts contained by one or more specified organizational units (OUs)<br><br>https://docs.aws.amazon.com/ram/latest/userguide/what-is.htmlSharing doesn't save the inter-AZ data costs - these would occur even if all the resources were in the same account.",
          "upvote_count": "921",
          "selected_answers": ""
        },
        {
          "id": 687513,
          "date": "Thu 06 Oct 2022 07:44",
          "username": "firstabedByrney",
          "content": "RAM correct <br><br>AWS Resource Access Manager (AWS RAM) helps you securely share the AWS resources that you create in one AWS account with other AWS accounts. If you have multiple AWS accounts, you can create a resource once and use AWS RAM to make that resource usable by those other accounts. If your account is managed by AWS Organizations, then you can share resources with all the other accounts in the organization, or only those accounts contained by one or more specified organizational units (OUs)<br><br>https://docs.aws.amazon.com/ram/latest/userguide/what-is.htmlSharing doesn't save the inter-AZ data costs - these would occur even if all the resources were in the same account.",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 714164,
          "date": "Wed 09 Nov 2022 01:11",
          "username": "Byrney",
          "content": "Sharing doesn't save the inter-AZ data costs - these would occur even if all the resources were in the same account.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 728347,
          "date": "Sun 27 Nov 2022 15:52",
          "username": "pixepe",
          "content": "C D <br><br>Q: Am I charged for regional AWS data-transfer when I enable cross-zone load balancing in Network Load Balancer?<br><br>A: Yes, you will be charged for regional data transfer between Availability Zones with Network Load Balancer when cross-zone load balancing is enabled. Check the charges in the data transfer section of the Amazon EC2 On-Demand Pricing page.<br><br>From AWS FAQ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 714165,
          "date": "Wed 09 Nov 2022 01:12",
          "username": "Byrney",
          "content": "The costs are from inter-AZ data transfer.Only C and D address that.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 690715,
          "date": "Mon 10 Oct 2022 07:07",
          "username": "caveman712",
          "content": "Aim is to avoid inter-AZ charges:<br>C - No cross-zone load balancing will save cost. Question doesn't mention reliability<br>D - You can use AZ specific endpoint DNS e.g. vpce-xxxx-xxxx-us-east-1b.vpce-svc-xxx.us-east-1.vpce.amazonaws.com",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 686259,
          "date": "Tue 04 Oct 2022 16:52",
          "username": "dcdcdc3",
          "content": "C - cross-zone NLD adds cost <br>D is worded very bad as there is no \\\"local\\\" DNS but there is private IP of each PrivateLink endpoint, auto-created by AWS, so apps can be set to use that private IP (there is more to it but for the exam that should suffice): <br>https://aws.amazon.com/blogs/apn/reviewing-dns-mechanisms-for-routing-traffic-and-enabling-failover-for-aws-privatelink-deployments/<br>A and B are not wrong, but not contributing to saving Data transfer charges<br>E - not aware of Savings plan for Data transfers, would be nice if it existed",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 672233,
          "date": "Sun 18 Sep 2022 12:39",
          "username": "Yashar1691",
          "content": "gunjan229's explanation sounds good.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 656493,
          "date": "Thu 01 Sep 2022 19:23",
          "username": "Ni_yotNi_yot",
          "content": "C has to be one of the ans surely.<br>If you enable cross-zone load balancing, you no longer have to worry that clients caching DNS information will result in requests being distributed unevenly. With this launch, requests are distributed equally to your targets regardless of the Availability Zone in which they are located. This feature makes it easier for you to deploy and manage your applications across multiple Availability Zones. When you enable cross-zone load balancing for your Network Load Balancer, regional data charges apply.A will be my other ans. AWS Resource Access Manager (RAM) helps you securely share your resources across AWS accounts, within your organization or organizational units (OUs) in AWS Organizations, and with IAM roles and IAM users for supported resource types. You can use AWS RAM to share transit gateways, subnets, AWS License Manager license configurations, Amazon Route 53 Resolver rules, and more resource types.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 656498,
          "date": "Thu 01 Sep 2022 19:26",
          "username": "Ni_yot",
          "content": "A will be my other ans. AWS Resource Access Manager (RAM) helps you securely share your resources across AWS accounts, within your organization or organizational units (OUs) in AWS Organizations, and with IAM roles and IAM users for supported resource types. You can use AWS RAM to share transit gateways, subnets, AWS License Manager license configurations, Amazon Route 53 Resolver rules, and more resource types.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 648772,
          "date": "Fri 19 Aug 2022 08:45",
          "username": "Kyperossb333",
          "content": "I dont know exactly answer but cross-zone ELB not extra charge so option C dont affect to data transmission cost!Q: Am I charged for regional AWS data-transfer when I enable cross-zone load balancing in Network Load Balancer?<br><br>A: Yes, you will be charged for regional data transfer between Availability Zones with Network Load Balancer when cross-zone load balancing is enabled. Check the charges in the data transfer section of the Amazon EC2 On-Demand Pricing page.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 687447,
          "date": "Thu 06 Oct 2022 06:37",
          "username": "sb333",
          "content": "Q: Am I charged for regional AWS data-transfer when I enable cross-zone load balancing in Network Load Balancer?<br><br>A: Yes, you will be charged for regional data transfer between Availability Zones with Network Load Balancer when cross-zone load balancing is enabled. Check the charges in the data transfer section of the Amazon EC2 On-Demand Pricing page.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 646338,
          "date": "Sat 13 Aug 2022 15:19",
          "username": "kenchou73",
          "content": "Vote for C D, guideline for developers should be reducing the traffic between AZ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 632094,
          "date": "Sat 16 Jul 2022 11:57",
          "username": "asfsdfsdf",
          "content": "C - will not provide any savings the traffic will still be split into different AZs that will cost inter-az charges<br>E - Saving plans are not for inter-az charges<br>D - Will not improve the charges as the consumer cant control which AZ will be used on the provider end.<br>So only A and B are valid - RAM can share Subnets only in the same org, so move accounts to the same org and share the needed subnet work directly without inter-az charges.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 627196,
          "date": "Tue 05 Jul 2022 04:08",
          "username": "aandcaandc",
          "content": "Vote for ACChange to AB",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 627199,
          "date": "Tue 05 Jul 2022 04:10",
          "username": "aandc",
          "content": "Change to AB",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 610944,
          "date": "Fri 03 Jun 2022 07:53",
          "username": "bobsmith2000",
          "content": "A) Use RAM to share subnets and<br>B) Deploy everything into the same org",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 566617,
          "date": "Sun 13 Mar 2022 09:07",
          "username": "gunjan229",
          "content": "Should be A and B for below reasons:<br>1. If the accounts are within same organization then only resources can be shared.<br>2. Data transfer charges will be less within same AZ, so if we use shared subnet then resources will be launched in same AZ<br>3. C is wrong because NLB cross zone balancing will incur transfer charges.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 533093,
          "date": "Wed 26 Jan 2022 18:11",
          "username": "aws01",
          "content": "seems like A and C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 521937,
          "date": "Wed 12 Jan 2022 07:20",
          "username": "Buggie",
          "content": "Correction. It should be C and D",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 520072,
          "date": "Sun 09 Jan 2022 10:38",
          "username": "guruaws2021",
          "content": "How the option A will help in data transfer savings , the service provder org has multiple regions in numerous availability zone",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 519240,
          "date": "Sat 08 Jan 2022 00:30",
          "username": "Buggie",
          "content": "C will break DR. B is better.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#804",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an environment that has a single AWS account. A solutions architect is reviewing the environment to recommend what the company could improve specifically in terms of access to the AWS Management Console. The company's IT support workers currently access the console for administrative tasks, authenticating with named IAM users that have been mapped to their job role.<br>The IT support workers no longer want to maintain both their Active Directory and IAM user accounts. They want to be able to access the console by using their existing Active Directory credentials. The solutions architect is using AWS Single Sign-On (AWS SSO) to implement this functionality.<br>Which solution will meet these requirements MOST cost-effectively?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#804",
          "answers": [
            {
              "choice": "<p>A. Create an organization in AWS Organizations. Turn on the AWS SSO feature in Organizations Create and configure a directory in AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD) with a two-way trust to the company's on-premises Active Directory. Configure AWS SSO and set the AWS Managed Microsoft AD directory as the identity source. Create permission sets and map them to the existing groups within the AWS Managed Microsoft AD directory.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an organization in AWS Organizations. Turn on the AWS SSO feature in Organizations Create and configure an AD Connector to connect to the company's on-premises Active Directory. Configure AWS SSO and select the AD Connector as the identity source. Create permission sets and map them to the existing groups within the company's Active Directory.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an organization in AWS Organizations. Turn on all features for the organization. Create and configure a directory in AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD) with a two-way trust to the company's on-premises Active Directory. Configure AWS SSO and select the AWS Managed Microsoft AD directory as the identity source. Create permission sets and map them to the existing groups within the AWS Managed Microsoft AD directory.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an organization in AWS Organizations. Turn on all features for the organization. Create and configure an AD Connector to connect to the company's on-premises Active Directory. Configure AWS SSO and select the AD Connector as the identity source. Create permission sets and map them to the existing groups within the company's Active Directory.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 528933,
          "date": "Fri 21 Jan 2022 05:36",
          "username": "m0h3nuser0001",
          "content": "Ans D <br>Refer the link for enabling org features. https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.htmlD because Create and configure an AD Connector to connect to the company's on-premises Active Directory<br>company to use their AD only",
          "upvote_count": "61",
          "selected_answers": ""
        },
        {
          "id": 605731,
          "date": "Mon 23 May 2022 00:58",
          "username": "user0001",
          "content": "D because Create and configure an AD Connector to connect to the company's on-premises Active Directory<br>company to use their AD only",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 531648,
          "date": "Tue 25 Jan 2022 00:48",
          "username": "tkanmani76",
          "content": "B - AD Connector to connect to On-premise directory. SSO should be enabled at Org level.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 653509,
          "date": "Mon 29 Aug 2022 15:27",
          "username": "Rocketeercaveman712",
          "content": "D<br>Need All Features enabled first https://docs.aws.amazon.com/singlesignon/latest/userguide/prereqs.htmlNew link: https://docs.aws.amazon.com/singlesignon/latest/userguide/get-started-prereqs-considerations.html<br><br>If you've already set up AWS Organizations, make sure that all features are enabled.",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 689802,
          "date": "Sun 09 Oct 2022 03:05",
          "username": "caveman712",
          "content": "New link: https://docs.aws.amazon.com/singlesignon/latest/userguide/get-started-prereqs-considerations.html<br><br>If you've already set up AWS Organizations, make sure that all features are enabled.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 632098,
          "date": "Sat 16 Jul 2022 12:06",
          "username": "asfsdfsdf",
          "content": "not A and B for sure - must enable all features in order to use AWS SSO<br>Both C and D are correct only D is cost effective.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 625891,
          "date": "Sat 02 Jul 2022 03:02",
          "username": "aandc",
          "content": "D:<br>Before you can set up AWS SSO, you must:<br><br>Have first set up the AWS Organizations service and have All features set to enabled. For more information about this setting, see Enabling All Features in Your Organization in the AWS Organizations User Guide.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 625871,
          "date": "Fri 01 Jul 2022 23:22",
          "username": "jyrajan69",
          "content": "Before you can set up AWS SSO, you must:<br><br>Have first set up the AWS Organizations service and have All features set to enabled. For more information about this setting, see Enabling All Features in Your Organization in the AWS Organizations User Guide. ..So the answer definitely D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 607961,
          "date": "Fri 27 May 2022 09:16",
          "username": "bobsmith2000",
          "content": "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_create.html#create-org<br>During an org creation the one is able to choose between all features or Consolidated Billing features only.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 597345,
          "date": "Thu 05 May 2022 16:48",
          "username": "Ryannnsb333",
          "content": "C is correct.<br>https://docs.aws.amazon.com/singlesignon/latest/userguide/prereqs.htmlC is not correct. You would need to configure a sync scope, which is a list you define of users and groups to sync from on-premises AD.  This would not come from the AWS Managed Microsoft AD, as stated in this question. It has to come from the on-premises AD, which is what the question requires. So that makes this answer wrong and why Answer D is correct, as that solution queries the on-premises AD directly.<br><br>https://docs.aws.amazon.com/singlesignon/latest/userguide/provision-users-from-ad-configurable-ADsync.html",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 687432,
          "date": "Thu 06 Oct 2022 06:14",
          "username": "sb333",
          "content": "C is not correct. You would need to configure a sync scope, which is a list you define of users and groups to sync from on-premises AD.  This would not come from the AWS Managed Microsoft AD, as stated in this question. It has to come from the on-premises AD, which is what the question requires. So that makes this answer wrong and why Answer D is correct, as that solution queries the on-premises AD directly.<br><br>https://docs.aws.amazon.com/singlesignon/latest/userguide/provision-users-from-ad-configurable-ADsync.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 554869,
          "date": "Wed 23 Feb 2022 21:53",
          "username": "usmanbaigmughal",
          "content": "B. <br>D is wrong because no need to enable all org features. only SSO is required to connect with AD connector",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 545652,
          "date": "Sat 12 Feb 2022 05:36",
          "username": "tkanmani76",
          "content": "D is right.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 544706,
          "date": "Thu 10 Feb 2022 17:39",
          "username": "Juksdelfnec",
          "content": "B is the correct answer. AD connector and to use AWS SSO with AWS Organizations, you must first Enable AWS SSO, which grants AWS SSO the capability to create Service-linked roles in each account in your AWS organization\\\"<br>https://docs.aws.amazon.com/singlesignon/latest/userguide/manage-your-accounts.htmlyou are right but Before you can set up AWS SSO, you must:<br>Have first set up the AWS Organizations service and have All features set to enabled.",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 599544,
          "date": "Tue 10 May 2022 12:48",
          "username": "delfnec",
          "content": "you are right but Before you can set up AWS SSO, you must:<br>Have first set up the AWS Organizations service and have All features set to enabled.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 514381,
          "date": "Sat 01 Jan 2022 06:23",
          "username": "cldy",
          "content": "D: Turn ON all Org features + AD Connector.",
          "upvote_count": "5",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#805",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A gaming company created a game leaderboard by using a Multi-AZ deployment of an Amazon RDS database. The number of users is growing, and the queries to get individual player rankings are getting slower over time. The company expects a surge in users for an upcoming version and wants to optimize the design for scalability and performance.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#805",
          "answers": [
            {
              "choice": "<p>A. Migrate the database to Amazon DynamoDB.  Store the leaderboard data in two different tables. Use Apache HiveQL JOIN statements to build the leaderboard.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Keep the leaderboard data in the RDS DB instance. Provision a Multi-AZ deployment of an Amazon ElastiCache for Redis cluster.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Stream the leaderboard data by using Amazon Kinesis Data Firehose with an Amazon S3 bucket as the destination. Query the S3 bucket by using Amazon Athena for the leaderboard.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add a read-only replica to the RDS DB instance. Add an RDS Proxy database proxy.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 533889,
          "date": "Thu 27 Jan 2022 16:29",
          "username": "wahlbergusaSureNotsashsz",
          "content": "B.  <br>https://aws.amazon.com/blogs/database/building-a-real-time-gaming-leaderboard-with-amazon-elasticache-for-redis/What about DynamoDB? I heard it's the best solution for leaderbords. But not sure about 2 tables and HiveQL..Can't be D, because:<br>For RDS DB instances in replication configurations, you can associate a proxy only with the writer DB instance, not a read replica.<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.html",
          "upvote_count": "1514",
          "selected_answers": ""
        },
        {
          "id": 714467,
          "date": "Wed 09 Nov 2022 11:22",
          "username": "SureNot",
          "content": "What about DynamoDB? I heard it's the best solution for leaderbords. But not sure about 2 tables and HiveQL..",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 595435,
          "date": "Sun 01 May 2022 06:39",
          "username": "sashsz",
          "content": "Can't be D, because:<br>For RDS DB instances in replication configurations, you can associate a proxy only with the writer DB instance, not a read replica.<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.html",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 632102,
          "date": "Sat 16 Jul 2022 12:15",
          "username": "asfsdfsdf",
          "content": "Question is a about a latency issue with rankings and leaderboard - this is clearly a use case forsorted sets with Redis ES... so B<br>D was correct if the issue was general in all queries and not specific for rankings",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 656971,
          "date": "Fri 02 Sep 2022 06:56",
          "username": "kadev",
          "content": "D<br>A.  must refactor coding for Dynamo sdk<br>B.  Redis for caching, not for surge in users =>And to do this, you mush add more lines coding to query from DB and commit to redis<br>C.  ignore ofcourse<br>D.  Easy way, \\\"queries to get\\\" => read sql => add more replicas + rds proxy",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 627331,
          "date": "Tue 05 Jul 2022 09:43",
          "username": "TechX",
          "content": "D for me, you can't you S3 to perform read/write for game. It's too slow. You need read performance, so D is the best answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 599263,
          "date": "Mon 09 May 2022 21:46",
          "username": "Yamchi",
          "content": "Definitely B, refer to the following link:<br>https://aws.amazon.com/blogs/database/building-a-real-time-gaming-leaderboard-with-amazon-elasticache-for-redis/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 551534,
          "date": "Sun 20 Feb 2022 05:57",
          "username": "peddyua",
          "content": "D<br>Q: What use cases does RDS Proxy address?<br><br>Applications with unpredictable workloads: Applications that support highly variable workloads may attempt to open a burst of new database connections. RDS Proxy’s connection governance allows customers to gracefully scale applications dealing with unpredictable workloads by efficiently reusing database connections. First, RDS Proxy enables multiple application connections to share a database connection for efficient use of database resources. Second, RDS Proxy allows customers to maintain predictable database performance by regulating the number of database connections that are opened. Third, RDS Proxy removes unserviceable application requests to preserve overall performance and availability of the application.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 544941,
          "date": "Fri 11 Feb 2022 02:11",
          "username": "Bigbearcn",
          "content": "B looks good.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 538372,
          "date": "Wed 02 Feb 2022 04:47",
          "username": "cannottellname",
          "content": "D seems more appropriate here. As rank of individual user is sluggish - which cannot be cached for each and every user. RDS Proxy will help with multiple connections over a single connection to DB and thus, better performance for DB also.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 529605,
          "date": "Sat 22 Jan 2022 06:05",
          "username": "tkanmani76tkanmani76",
          "content": "C looks good.Changing to B",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 546407,
          "date": "Sun 13 Feb 2022 12:06",
          "username": "tkanmani76",
          "content": "Changing to B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 519348,
          "date": "Sat 08 Jan 2022 07:40",
          "username": "SmartphoneSmartphone",
          "content": "B looks more close.Changing it to D. RDS Proxy makes applications more resilient to database failures by automatically connecting to a standby DB instance while preserving application connections. Using RDS Proxy, you can handle unpredictable surges in database traffic that otherwise might cause issues due to oversubscribing connections or creating new connections at a fast rate.<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.html",
          "upvote_count": "14",
          "selected_answers": ""
        },
        {
          "id": 519351,
          "date": "Sat 08 Jan 2022 07:43",
          "username": "Smartphone",
          "content": "Changing it to D. RDS Proxy makes applications more resilient to database failures by automatically connecting to a standby DB instance while preserving application connections. Using RDS Proxy, you can handle unpredictable surges in database traffic that otherwise might cause issues due to oversubscribing connections or creating new connections at a fast rate.<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.html",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#806",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a software-as-a-service (SaaS) application on AWS. The application consists of AWS Lambda functions and an Amazon RDS for MySQL Multi-<br>AZ database. During market events, the application has a much higher workload than normal. Users notice slow response times during the peak periods because of many database connections. The company needs to improve the scalable performance and availability of the database.<br>Which solution meets these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#806",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon CloudWatch alarm action that triggers a Lambda function to add an Amazon RDS for MySQL read replica when resource utilization hits a threshold.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the database to Amazon Aurora, and add a read replica. Add a database connection pool outside of the Lambda handler function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the database to Amazon Aurora, and add a read replica. Use Amazon Route 53 weighted records.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the database to Amazon Aurora, and add an Aurora Replica. Configure Amazon RDS Proxy to manage database connection pools.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 535933,
          "date": "Sun 30 Jan 2022 05:52",
          "username": "kyo",
          "content": "RDS proxy",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 632103,
          "date": "Sat 16 Jul 2022 12:24",
          "username": "asfsdfsdf",
          "content": "As of march 2021 its D <br>https://aws.amazon.com/about-aws/whats-new/2021/03/amazon-rds-proxy-adds-read-only-endpoints-for-amazon-aurora-replicas/",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 637695,
          "date": "Wed 27 Jul 2022 02:12",
          "username": "hilft",
          "content": "D.  is optimal",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 532006,
          "date": "Tue 25 Jan 2022 10:30",
          "username": "pititcu667",
          "content": "D is correct lookup RDS proxy it's a new service and it solves the high connection problem.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 524540,
          "date": "Sun 16 Jan 2022 02:24",
          "username": "Polu",
          "content": "D.  A is not correct - Add read replica during peak event will take a lot of time hence will not solve the purpose.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 518350,
          "date": "Thu 06 Jan 2022 17:05",
          "username": "AMKazi",
          "content": "This only solves read performance, what about DB connection issues??<br>Answer should be D: Solves both problems: Connection pooling and read replica. Plus Aurora is much better in terms of performance.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 515593,
          "date": "Mon 03 Jan 2022 11:04",
          "username": "tkanmani76",
          "content": "D is the right answer - https://aws.amazon.com/rds/proxy/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 514885,
          "date": "Sun 02 Jan 2022 09:36",
          "username": "GeniusMikeLiu",
          "content": "why don't create theread replica on the begining?",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#807",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an on-premises Microsoft SQL Server database that writes a nightly 200 GB export to a local drive. The company wants to move the backups to more robust cloud storage on Amazon S3. The company has set up a 10 Gbps AWS Direct Connect connection between the on-premises data center and AWS.<br>Which solution meets these requirements MOST cost-effectively?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#807",
          "answers": [
            {
              "choice": "<p>A. Create a new S3 bucket. Deploy an AWS Storage Gateway file gateway within the VPC that is connected to the Direct Connect connection. Create a new SMB file share. Write nightly database exports to the new SMB file share.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon FSx for Windows File Server Single-AZ file system within the VPC that is connected to the Direct Connect connection. Create a new SMB file share. Write nightly database exports to an SMB file share on the Amazon FSx file system. Enable nightly backups.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon FSx for Windows File Server Multi-AZ file system within the VPC that is connected to the Direct Connect connection. Create a new SMB file share. Write nightly database exports to an SMB file share on the Amazon FSx file system. Enable nightly backups.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new S3 bucket. Deploy an AWS Storage Gateway volume gateway within the VPC that is connected to the Direct Connect connection. Create a new SMB file share. Write nightly database exports to the new SMB file share on the volume gateway, and automate copies of this data to an S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 514065,
          "date": "Fri 31 Dec 2021 13:20",
          "username": "Firelorduser0001",
          "content": "The question explicitly says S3, so I think it's AA, because file is cheaper than volume https://aws.amazon.com/storagegateway/pricing/",
          "upvote_count": "81",
          "selected_answers": ""
        },
        {
          "id": 598664,
          "date": "Sun 08 May 2022 20:38",
          "username": "user0001",
          "content": "A, because file is cheaper than volume https://aws.amazon.com/storagegateway/pricing/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 714973,
          "date": "Thu 10 Nov 2022 07:36",
          "username": "janvandermerwer",
          "content": "A - seems to be a good option.<br><br>D seems overkill - copy data to the file share attached via volume gateway, then copy that data again to s3. - Volume gateway is already hosted on s3 as a backend? And Two lots of copies are probably going to be more expensive than One (Question A)<br><br>B&C are likely expensive.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 693487,
          "date": "Thu 13 Oct 2022 03:01",
          "username": "AwsBRFan",
          "content": "https://docs.aws.amazon.com/filegateway/latest/files3/CreatingAnSMBFileShare.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 651889,
          "date": "Thu 25 Aug 2022 19:05",
          "username": "kadev",
          "content": "you have 10GBs DX. Why not use aws-cli put data to S3 for cheap lol",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 644829,
          "date": "Wed 10 Aug 2022 08:40",
          "username": "foureye2004",
          "content": "B,C not related to S3 => incorrect<br>D: if use Volume Gateway, we have to attach the new volume to the server located db, but it this option does not mention about the attachment. => incorrect<br><br>So, A is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 632104,
          "date": "Sat 16 Jul 2022 12:36",
          "username": "asfsdfsdf",
          "content": "Only A is valid<br>Need to transfer to s3 so B and C are out<br>D will not work SMB is not for volume GW only file gateway - in order to make D work need to use iscsi and SAN storage.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 610498,
          "date": "Thu 02 Jun 2022 10:28",
          "username": "Anhdd",
          "content": "The answer should be A.  Since, SMB & NFS protocole is for File gateway. While Volume gateway's protocole is iSCSI",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 605369,
          "date": "Sun 22 May 2022 13:00",
          "username": "jinxiao2010",
          "content": "Should be D, because S3 is much more cost effetive and also match the resillent requirement.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 582521,
          "date": "Thu 07 Apr 2022 17:56",
          "username": "Yamchi",
          "content": "more resilient and use of S3 >>>>> answer is D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 547586,
          "date": "Tue 15 Feb 2022 08:53",
          "username": "jyrajan69jyrajan69",
          "content": "Both B and C, requires you bring a new Fsx Server, does not address the cost issue.Since this is likely a Windows System, then it Storage Gateway(https://aws.amazon.com/storagegateway/file/) so answer AMust revise my answer, the first line states that the files are stored locally, so given a choice between A and D.  There is no requirement for NFS here, so that eliminates A, leaving D as the only possible answer. The answer is D. ",
          "upvote_count": "32",
          "selected_answers": ""
        },
        {
          "id": 568720,
          "date": "Wed 16 Mar 2022 01:59",
          "username": "jyrajan69",
          "content": "Must revise my answer, the first line states that the files are stored locally, so given a choice between A and D.  There is no requirement for NFS here, so that eliminates A, leaving D as the only possible answer. The answer is D. ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 545676,
          "date": "Sat 12 Feb 2022 07:17",
          "username": "RVivek",
          "content": "Answer A. <br>Question explicitly states backup to S3. hnece \\\"S3 File gateway should be used\\\"<br>https://aws.amazon.com/storagegateway/file/?nc=sn&loc=2&dn=2",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 534235,
          "date": "Fri 28 Jan 2022 01:55",
          "username": "Juks",
          "content": "D is correct. It is asking for backups in AWS.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 517043,
          "date": "Wed 05 Jan 2022 00:15",
          "username": "Buggie",
          "content": "it is A.  Fsx for windows",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#808",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has multiple AWS accounts. The company recently had a security audit that revealed many unencrypted Amazon Elastic Block Store (Amazon EBS) volumes attached to Amazon EC2 instances.<br>A solutions architect must encrypt the unencrypted volumes and ensure that unencrypted volumes will be detected automatically in the future. Additionally, the company wants a solution that can centrally manage multiple AWS accounts with a focus on compliance and security.<br>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#808",
          "answers": [
            {
              "choice": "<p>A. Create an organization in AWS Organizations. Set up AWS Control Tower, and turn on the strongly recommended guardrails. Join all accounts to the organization. Categorize the AWS accounts into OUs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the AWS CLI to list all the unencrypted volumes in all the AWS accounts. Run a script to encrypt all the unencrypted volumes in place.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a snapshot of each unencrypted volume. Create a new encrypted volume from the unencrypted snapshot. Detach the existing volume, and replace it with the encrypted volume.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an organization in AWS Organizations. Set up AWS Control Tower, and turn on the mandatory guardrails. Join all accounts to the organization. Categorize the AWS accounts into OUs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Turn on AWS CloudTrail. Configure an Amazon EventBridge (Amazon CloudWatch Events) rule to detect and automatically encrypt unencrypted volumes.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 516691,
          "date": "Tue 04 Jan 2022 15:11",
          "username": "SmartphoneRVivek",
          "content": "A. CORRECT - The strongly recommended guardrails enables to detect Whether Encryption is enabled for Amazon EBS Volumes Attached to Amazon EC2 Instances (https://docs.aws.amazon.com/controltower/latest/userguide/strongly-recommended-guardrails.html)<br> <br>B.  NOT CORRECT - This is a complete manual task <br><br>C.  CORRECT - This is the only way to change the unencrypted volume to encrypted volume that is attached to EC2 instances.<br><br>D.  NOT CORRECT - The mandatory guardrails are created by the AWS itself. (https://docs.aws.amazon.com/controltower/latest/userguide/mandatory-guardrails.html)<br><br>E.  Not Correct - Cloudtrail can not solve the this problem.Good explanation. However C says create encrypted volume from unencruyptedsnapshot . We have to coy unencypted nopshot to an encryptedsnapsot , then create a voume from it",
          "upvote_count": "71",
          "selected_answers": ""
        },
        {
          "id": 546256,
          "date": "Sun 13 Feb 2022 07:32",
          "username": "RVivek",
          "content": "Good explanation. However C says create encrypted volume from unencruyptedsnapshot . We have to coy unencypted nopshot to an encryptedsnapsot , then create a voume from it",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 661728,
          "date": "Wed 07 Sep 2022 01:37",
          "username": "AYANtheGLADIATOR",
          "content": "We can't make a encrypted volume from an unencrypted snapshot.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 632111,
          "date": "Sat 16 Jul 2022 12:48",
          "username": "asfsdfsdf",
          "content": "C for sure - no other way to do it<br>A is the most correct other answer since EBS encryption is part of the strongly recommended guardrails<br>https://docs.aws.amazon.com/controltower/latest/userguide/strongly-recommended-guardrails.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 517345,
          "date": "Wed 05 Jan 2022 10:55",
          "username": "wahlbergusa",
          "content": "I was gonna choose C,D but it seems the mandatory guardrails are enabled by default. (no need to manually turn them on). Hence I' d go with A,C. ",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#809",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a new application that needs to run on five Amazon EC2 instances in a single AWS Region. The application requires high-throughput, low-latency network connections between all of the EC2 instances where the application will run. There is no requirement for the application to be fault tolerant.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#809",
          "answers": [
            {
              "choice": "<p>A. Launch five new EC2 instances into a cluster placement group. Ensure that the EC2 instance type supports enhanced networking.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Launch five new EC2 instances into an Auto Scaling group in the same Availability Zone. Attach an extra elastic network interface to each EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Launch five new EC2 instances into a partition placement group. Ensure that the EC2 instance type supports enhanced networking.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Launch five new EC2 instances into a spread placement group. Attach an extra elastic network interface to each EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 632112,
          "date": "Sat 16 Jul 2022 12:50",
          "username": "asfsdfsdf",
          "content": "A for sure",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 624385,
          "date": "Wed 29 Jun 2022 04:52",
          "username": "TechXTechX",
          "content": "100% AExplanation: <br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html#placement- groups-cluster",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 624388,
          "date": "Wed 29 Jun 2022 04:54",
          "username": "TechX",
          "content": "Explanation: <br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html#placement- groups-cluster",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 544180,
          "date": "Thu 10 Feb 2022 01:17",
          "username": "Bigbearcn",
          "content": "It looks like a SAA level question.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 542260,
          "date": "Mon 07 Feb 2022 10:30",
          "username": "Punitsolanki",
          "content": "Answer is A as Cluster placement will give good performance and there is no requirement<br> for FT, spread placement group will not give performance at it is a use case for FT.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 534086,
          "date": "Thu 27 Jan 2022 20:54",
          "username": "CloudChef",
          "content": "A4me4sure",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 533213,
          "date": "Wed 26 Jan 2022 20:59",
          "username": "Ni_yot",
          "content": "A indeed is correct.When you launch EC2 instances in a cluster they benefit from performance and low latency. No redundancy though as per the question https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 515031,
          "date": "Sun 02 Jan 2022 15:50",
          "username": "Smartphone",
          "content": "Answer is A.  This question has two parts :in the first it talks about \\\"needs high-speed, low-latency network connections between all of the Amazon EC2 instances\\\" and in the second part it talks about \\\"not required to be fault tolerant\\\". Hence, the option A is best suited on this scenario.",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#810",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A media company is hosting a high-traffic news website on AWS. The website's front end is based solely on HTML and JavaScript. The company loads all dynamic content by using dynamic asynchronous JavaScript requests to a dedicated backend infrastructure.<br>The front end runs on four Amazon EC2 instances as web servers. The dynamic backend runs in containers on an Amazon Elastic Container Service (Amazon<br>ECS) cluster that uses an Auto Scaling group of EC2 instances. The ECS tasks are behind an Application Load Balancer (ALB).<br>Which solutions should a solutions architect recommend to optimize costs? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#810",
          "answers": [
            {
              "choice": "<p>A. Migrate the front end of the website to an Amazon S3 bucket Deploy an Amazon CloudFront distribution. Set the S3 bucket as the distribution's origin.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an Amazon CloudFront distribution. Configure the distribution to use the ALB endpoint as the origin.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the front-end services to the ECS cluster. Increase the minimum number of nodes in the Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Turn on Auto Scaling for the front-end EC2 instances. Configure a new listener rule on the ALB to serve the front end.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Migrate the backend of the website to an Amazon S3 bucket. Deploy an Amazon CloudFront distribution. Set the S3 bucket as the distribution's origin.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 521584,
          "date": "Tue 11 Jan 2022 15:35",
          "username": "pititcu667",
          "content": "AB since the frontend is entirely static content hence the ideal use case for s3 web site hosting",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 709794,
          "date": "Wed 02 Nov 2022 13:07",
          "username": "bloless1s",
          "content": "it should be B&D.  <br>If the answer requires only one option then only A would be perfect. <br>But the question requires two combine steps, then the combination of B&D makes most sense. It is typical Cloudfront + ALB + Auto Scaling solution.<br>The combine of A & B can be redundant for B.  Cloudfront for service API seems does not appear anywhere on AWS solution.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 707844,
          "date": "Sun 30 Oct 2022 15:04",
          "username": "softarts",
          "content": "AB => javascript is js file which will be executed on client browser, so it is static file.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 698615,
          "date": "Wed 19 Oct 2022 04:09",
          "username": "sb333sb333",
          "content": "A: The front end servers are static and can be migrated to S3. Then create a CloudFront deployment and use S3 and an origin.<br>B: The backend is dynamic content, which is behind and ALB.  You set this ALB as an origin in the distribution.<br><br>AWS exam questions are like this sometimes, asking you to do something similar in two different answers, like create a CloudFront distribution. But you have to put them into context, that AWS wants you to know that a CloudFront distribution is needed in both answers and that you need one or more origins. If they just said in answer B that you needed to create a second origin, then it's easier to know that answer A is right since it asked you to create the deployment with an origin. Anyways, AB is correct and the cheapest option to go with.Sorry, typed \\\"deployment\\\" a couple times when I meant to type \\\"distribution\\\". Can't edit posts once you submit. :)",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 698616,
          "date": "Wed 19 Oct 2022 04:13",
          "username": "sb333",
          "content": "Sorry, typed \\\"deployment\\\" a couple times when I meant to type \\\"distribution\\\". Can't edit posts once you submit. :)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 693497,
          "date": "Thu 13 Oct 2022 03:27",
          "username": "AwsBRFan",
          "content": "https://aws.amazon.com/pt/blogs/networking-and-content-delivery/deliver-your-apps-dynamic-content-using-amazon-cloudfront-getting-started-template/<br>\\\"CloudFront to deliver both static and dynamic content using a single distribution, for dynamic and static websites and web applications.\\\"<br><br>AB = 2 distribution and supposed to be 2 origins.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 678113,
          "date": "Sat 24 Sep 2022 20:35",
          "username": "SureNot",
          "content": "Only HTML and JavaScript -> no static for S3 -> answer BD",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 676447,
          "date": "Thu 22 Sep 2022 20:00",
          "username": "joanneli77",
          "content": "If both A and B, don't you have TWO CloudFront distributions?That's not reference... normally one with a static+dynamic origin would be correct.(?)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 649060,
          "date": "Fri 19 Aug 2022 19:22",
          "username": "nyshaa",
          "content": "BD for me",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 646446,
          "date": "Sat 13 Aug 2022 21:42",
          "username": "asfsdfsdf",
          "content": "AB<br>E - eliminated since backend is is dynamic - cant use s3 website.<br>Since S3 is cheaper than running instances on ASG:<br>C and D are eliminated for the static front-end content.<br>So the other answer is B - It will not save a lot of money since its a dynamic content but its the only valid answer.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 625543,
          "date": "Fri 01 Jul 2022 04:51",
          "username": "TechX",
          "content": "AB for me",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 583558,
          "date": "Sun 10 Apr 2022 05:17",
          "username": "Xianzai",
          "content": "AB.  Obviously",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 583202,
          "date": "Sat 09 Apr 2022 10:09",
          "username": "kapselrajje",
          "content": "Cost optimiztion. A migration to s3. D autoscaling for Costa reductionIf you migrate the front end to S3, why do you need the front-end EC2 instances?",
          "upvote_count": "24",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 583466,
          "date": "Sat 09 Apr 2022 21:57",
          "username": "rajje",
          "content": "If you migrate the front end to S3, why do you need the front-end EC2 instances?",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 577901,
          "date": "Wed 30 Mar 2022 00:31",
          "username": "jj22222",
          "content": "A and B look better looking at the thread",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 577900,
          "date": "Wed 30 Mar 2022 00:30",
          "username": "jj22222",
          "content": "B and D look right",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 561759,
          "date": "Sun 06 Mar 2022 04:34",
          "username": "pal40sg",
          "content": "All dynamic material **<br>A - S3 is wrong answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 557387,
          "date": "Sun 27 Feb 2022 16:00",
          "username": "johnsnow81cale",
          "content": "I dont understand answers here. How B can be correct? cloudfront is for frontend content not for backend contentIf you combine A and B as a solution, it will make sense because the front end will be migrated to S3 and CloudFront will be used and then B comes in. I hope that helps. I had initial thinking as well at first.",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 664062,
          "date": "Fri 09 Sep 2022 00:23",
          "username": "cale",
          "content": "If you combine A and B as a solution, it will make sense because the front end will be migrated to S3 and CloudFront will be used and then B comes in. I hope that helps. I had initial thinking as well at first.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 542854,
          "date": "Tue 08 Feb 2022 05:22",
          "username": "cannottellnamecannottellname",
          "content": "A & B both cannot come together. How can both have endpoints pointing to CF?<br>B & D seems better because, some static content and some dynamic - it will need EC2 or ECS for hosting and fetching dynamic content. ALB for load balancing of front-end only.Please ignore. AB is correct.<br>https://aws.amazon.com/blogs/networking-and-content-delivery/deliver-your-apps-dynamic-content-using-amazon-cloudfront-getting-started-template/",
          "upvote_count": "17",
          "selected_answers": ""
        },
        {
          "id": 542856,
          "date": "Tue 08 Feb 2022 05:35",
          "username": "cannottellname",
          "content": "Please ignore. AB is correct.<br>https://aws.amazon.com/blogs/networking-and-content-delivery/deliver-your-apps-dynamic-content-using-amazon-cloudfront-getting-started-template/",
          "upvote_count": "7",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#811",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building an application on AWS. The application sends logs to an Amazon Elasticsearch Service (Amazon ES) cluster for analysis. All data must be stored within a VPC. <br>Some of the company's developers work from home. Other developers work from three different company office locations. The developers need to access<br>Amazon ES to analyze and visualize logs directly from their local development machines.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#811",
          "answers": [
            {
              "choice": "<p>A. Configure and set up an AWS Client VPN endpoint. Associate the Client VPN endpoint with a subnet in the VPC.  Configure a Client VPN self-service portal. Instruct the developers to connect by using the client for Client VPN.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a transit gateway, and connect it to the VPC.  Create an AWS Site-to-Site VPN. Create an attachment to the transit gateway. Instruct the developers to connect by using an OpenVPN client.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a transit gateway, and connect it to the VPC.  Order an AWS Direct Connect connection. Set up a public VIF on the Direct Connect connection. Associate the public VIF with the transit gateway. Instruct the developers to connect to the Direct Connect connection<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create and configure a bastion host in a public subnet of the VPC.  Configure the bastion host security group to allow SSH access from the company CIDR ranges. Instruct the developers to connect by using SSH.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 632118,
          "date": "Sat 16 Jul 2022 13:09",
          "username": "asfsdfsdf",
          "content": "Only A will work if users are working from home",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 533510,
          "date": "Thu 27 Jan 2022 05:44",
          "username": "tkanmani76",
          "content": "A - https://aws.amazon.com/premiumsupport/knowledge-center/client-vpn-associate-target-network/",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 523599,
          "date": "Fri 14 Jan 2022 16:32",
          "username": "wahlbergusawahlbergusa",
          "content": "B - It is either On prem - TGW - VPC attachmentOR On prem - VPN - VPC attachment. Would not make sense to do both in this scenario. Redundancy is not the focus here. Plus OpenVPN client will be used as a client to site solution by developers. Hence this option is WRONG.<br>C - ElasticSearch is not a public service. Hence Public VIF will not help here.<br>D - ElasticSearch is GUI based so SSH will not help here. <br><br>Option A satisfies the criterias.A slight correction on Option C.  ElasticSearch actually is a public service. My vote is still on A since ordering a direct connect is certainly an overkill for this scenario.",
          "upvote_count": "41",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 523601,
          "date": "Fri 14 Jan 2022 16:40",
          "username": "wahlbergusa",
          "content": "A slight correction on Option C.  ElasticSearch actually is a public service. My vote is still on A since ordering a direct connect is certainly an overkill for this scenario.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 517171,
          "date": "Wed 05 Jan 2022 05:32",
          "username": "Smartphone",
          "content": "A is the correct Answer.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#812",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has created an OU in AWS Organizations for each of its engineering teams. Each OU owns multiple AWS accounts. The organization has hundreds of<br>AWS accounts.<br>A solutions architect must design a solution so that each OU can view a breakdown of usage costs across its AWS accounts.<br>Which solution meets these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#812",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Cost and Usage Report (CUR) for each OU by using AWS Resource Access Manager. Allow each team to visualize the CUR through an Amazon QuickSight dashboard.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Cost and Usage Report (CUR) from the AWS Organizations management account. Allow each team to visualize the CUR through an Amazon QuickSight dashboard.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Cost and Usage Report (CUR) in each AWS Organizations member account. Allow each team to visualize the CUR through an Amazon QuickSight dashboard.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Cost and Usage Report (CUR) by using AWS Systems Manager. Allow each team to visualize the CUR through Systems Manager OpsCenter dashboards.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 632119,
          "date": "Sat 16 Jul 2022 13:16",
          "username": "asfsdfsdf",
          "content": "B is the only valid option to conclude all bills from all OUs.<br>D - is not possible how can you visualize CUR with OpsCenter? <br>A - RAM cant create CUR<br>C - Not efficient and not possible with organization since it creates one CUR for all accounts",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 616109,
          "date": "Tue 14 Jun 2022 10:35",
          "username": "Serial_X25",
          "content": "First of all, I understood that one account can see the reports for all others accounts in the same OU only, so we need to create one report for each OU.<br>It looks to me that there is no reasonable option for this question, if there was an option to create CUR using AWS system Manager and view the report using Amazon QuickSight that would be my response.<br>IMO, it can't be letter B because there is a limit of 10 CUR per account (https://docs.aws.amazon.com/cur/latest/userguide/billing-cur-limits.html), then the management account will not be allowed to create all the reports, one by OU.<br>With AWS System Manager you can automate a runbook and run it in multiple AWS accounts, configuring the S3 bucket and CUR.<br><br>Guys, I would like to hear from you about my thoughts, Thanks in advance.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 591293,
          "date": "Mon 25 Apr 2022 01:27",
          "username": "zoomaczoomac",
          "content": "Condition: The organization has hundreds of AWS accounts. Use AWS Organizations management account to reduce administration overhead.<br><br>\\\"If you are **an administrator of an AWS Organizations management account and do not want any of the member accounts in your Organization to set-up a CUR** you can do one of the following:\\\"<br><br>Reference:<br>https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.htmlThe answer is B. ",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 591294,
          "date": "Mon 25 Apr 2022 01:27",
          "username": "zoomac",
          "content": "The answer is B. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 572941,
          "date": "Tue 22 Mar 2022 14:10",
          "username": "Mechanicuser0001",
          "content": "I wouldn't go with C but isn't B wrong since all teams will view all reports??that is the ask , so it is not wrong",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 598373,
          "date": "Sun 08 May 2022 00:50",
          "username": "user0001",
          "content": "that is the ask , so it is not wrong",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 554885,
          "date": "Wed 23 Feb 2022 22:17",
          "username": "usmanbaigmughal",
          "content": "A and D have no sense.<br>C is wrong because it's very difficult to configure CUR on hundreds of accounts.<br>B looks good.",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#813",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company in the United States (US) has acquired a company in Europe. Both companies use the AWS Cloud. The US company has built a new application with a microservices architecture. The US company is hosting the application across five VPCs in the us-east-2 Region. The application must be able to access resources in one VPC in the eu-west-1 Region. However, the application must not be able to access any other VPCs.<br>The VPCs in both Regions have no overlapping CIDR ranges. All Accounts are already consolidated in one organization in AWS Organizations.<br>Which solution will meet these requirements MOST cost-effectively?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#813",
          "answers": [
            {
              "choice": "<p>A. Create one transit gateway in eu-west-1. Attach the VPCs in us-east-2 and the VPC in eu-west-1 to the transit gateway. Create the necessary route entries in each VPC so that the traffic is routed through the transit gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create one transit gateway in each Region. Attach the involved subnets to the regional transit gateway. Create the necessary route entries in the associated route tables for each subnet so that the traffic is routed through the regional transit gateway. Peer the two transit gateways.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a full mesh VPC peering connection configuration between all the VPCs. Create the necessary route entries in each VPC so that the traffic is routed through the VPC peering connection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create one VPC peering connection for each VPC in us-east-2 to the VPC in eu-west-1. Create the necessary route entries in each VPC so that the traffic is routed through the VPC peering connection.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 528163,
          "date": "Thu 20 Jan 2022 06:34",
          "username": "ppandey96",
          "content": "https://docs.aws.amazon.com/whitepapers/latest/building-scalable-secure-multi-vpc-network-infrastructure/transit-gateway-vs-vpc-peering.html<br><br>Lower cost — With VPC peering you only pay for data transfer charges. Transit Gateway has an hourly charge per attachment in addition to the data transfer fees.",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 647493,
          "date": "Tue 16 Aug 2022 08:37",
          "username": "kadev",
          "content": "Right Aswer is D<br>Explain:<br>B and D is also right solutions to connect VPCs. But,two points you need toconsider to pick the best aswer:<br>- the best effort-cost<br>- \\\"The application, however, must be unable to access any other VPCs\\\" => that mean, each VPC in US can connect to EU, but US VPCs must unable to connect together => Transit GW is ignore",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 637570,
          "date": "Tue 26 Jul 2022 20:33",
          "username": "hilft",
          "content": "The question is asking cheap options. <br>D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 632120,
          "date": "Sat 16 Jul 2022 13:21",
          "username": "asfsdfsdfasfsdfsdf",
          "content": "D - is the most cost effective<br>A - not possible you cant attach VPCs from multi-regions to one transit GW<br>B - Can work but not cost effective you pay every hour for a transit GW attachments<br>C - Can work but no need for full mesh the requirement is for one VPCAlso \\\"The application, however, must be unable to access any other VPCs.\\\" this for states about peering and also exclude C",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 632122,
          "date": "Sat 16 Jul 2022 13:22",
          "username": "asfsdfsdf",
          "content": "Also \\\"The application, however, must be unable to access any other VPCs.\\\" this for states about peering and also exclude C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 625267,
          "date": "Thu 30 Jun 2022 15:03",
          "username": "aandc",
          "content": "Go with D<br>A is more expensive than D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 612611,
          "date": "Tue 07 Jun 2022 08:47",
          "username": "bobsmith2000",
          "content": "The Q states \\\"The application, however, must be unable to access any other VPCs\\\". VPC Peering doesn't allow transitive routing.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 611456,
          "date": "Sat 04 Jun 2022 16:01",
          "username": "hilftasfsdfsdfzekesg",
          "content": "It's A. <br><br>D.  is wrong because there are 5 VPCs in the U.S and peering each of them are operationally headwinds.<br>B.  is wrong. Transit gateway is ideal over the vpc but there is only 'a single' VPC in the eu-west-1 Region. You don't need two transitory gateway in each regions.<br>C.  Wrong wrong.How can you attach VPC from multiple regions to the same transit GW?B is wrong but not because of the reason you mentioned. Its wrong because its more costier solution than D.  Transit gateway is a regional service and hence you cannot link vpc in different regions to a same transit gateway.",
          "upvote_count": "112",
          "selected_answers": ""
        },
        {
          "id": 632123,
          "date": "Sat 16 Jul 2022 13:23",
          "username": "asfsdfsdf",
          "content": "How can you attach VPC from multiple regions to the same transit GW?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 631778,
          "date": "Fri 15 Jul 2022 15:51",
          "username": "zekesg",
          "content": "B is wrong but not because of the reason you mentioned. Its wrong because its more costier solution than D.  Transit gateway is a regional service and hence you cannot link vpc in different regions to a same transit gateway.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 609896,
          "date": "Tue 31 May 2022 22:33",
          "username": "antonisnyc",
          "content": "D is incorrect because TRANSITIVE TRAFFIC IS NOT ALLOWED with vpc peering and the question states that the business requires access to all vpcs.. The application has 5 VPCs. Thus it's either B or C, but it'd go with B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 609729,
          "date": "Tue 31 May 2022 14:54",
          "username": "ArreRaja",
          "content": "B <br>https://aws.amazon.com/blogs/networking-and-content-delivery/building-a-global-network-using-aws-transit-gateway-inter-region-peering/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 599549,
          "date": "Tue 10 May 2022 12:54",
          "username": "hfeng95",
          "content": "D.  Cost effective and app can not access all others VPC.  Transit gateway by default connect all vpc in a hub and spoke fashion.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 542481,
          "date": "Mon 07 Feb 2022 15:56",
          "username": "ravisarparasf",
          "content": "Answer is D.  AWS Transit Gateway connects VPC and on-premises networks through a central hub. There is no On-prem network here. So A & B is out.you are aware what you have written here right? Transit gateway is used to resolve mesh created by VPC Peering.",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 545728,
          "date": "Sat 12 Feb 2022 10:14",
          "username": "parasf",
          "content": "you are aware what you have written here right? Transit gateway is used to resolve mesh created by VPC Peering.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 527295,
          "date": "Wed 19 Jan 2022 08:46",
          "username": "Milind",
          "content": "It's A <br>https://aws.amazon.com/blogs/networking-and-content-delivery/automating-aws-transit-gateway-attachments-to-a-transit-gateway-in-a-central-account/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 520085,
          "date": "Sun 09 Jan 2022 11:07",
          "username": "tkanmani76wahlbergusa",
          "content": "Option D - Addreses the requirement of apps in VPC to connect to resources in eu-west. Cost effective over using transit gateways.It is absolutely D.  Each attachment to a transit gateway incurs charges. (on top of the per GB charge) , VPC peering would be cheaper.",
          "upvote_count": "31",
          "selected_answers": ""
        },
        {
          "id": 523025,
          "date": "Thu 13 Jan 2022 20:14",
          "username": "wahlbergusa",
          "content": "It is absolutely D.  Each attachment to a transit gateway incurs charges. (on top of the per GB charge) , VPC peering would be cheaper.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 517642,
          "date": "Wed 05 Jan 2022 17:02",
          "username": "padel",
          "content": "B - inter-region transit gateway",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 513897,
          "date": "Fri 31 Dec 2021 06:30",
          "username": "GeniusMikeLiu",
          "content": "Hi Guys , is B right?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 513763,
          "date": "Thu 30 Dec 2021 23:40",
          "username": "RamCrk",
          "content": "D , i suggest",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#814",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A United Kingdom (UK) company recently completed a successful proof of concept in Amazon WorkSpaces. The company also has a large office in the United<br>States (US). Staff members from each office regularly travel between the two locations and need access to a corporate WorkSpace without any reconfiguration of their WorkSpaces client.<br>The company has purchased a domain by using Amazon Route 53 for the connection alias. The company will use a Windows profile and document management solution.<br>A solutions architect needs to design the full solution. The solution must use a configuration of WorkSpaces in two AWS Regions and must provide Regional resiliency.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#814",
          "answers": [
            {
              "choice": "<p>A. Create a connection alias in a UK Region and a US Region. Associate the connection alias with a directory in the UK Region. Configure the DNS service for the domain in the connection alias. Configure a geolocation routing policy. Distribute the connection string to the WorkSpaces users.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a connection alias in a UK Region. Associated the connection alias with a directory in the UK Region. Configure the DNS service for the domain in the connection alias. Configure a weighted routing policy, with the UK Region set to 1 and a US Region set to 255. Distribute the connection string for the UK Region to the WorkSpaces users.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a connection alias in a UK Region and a US Region. Associate the connection aliases with a directory in each Region. Configure the DNS service for the domain in the connection alias. Configure a geolocation routing policy. Distribute the connection string to the WorkSpaces users.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a connection alias in a US Region. Associated the connection alias with a directory in the UK Region. Configure the DNS service for the domain in the connection alias. Configure a multivalue answer routing policy. Distribute the connection string for the US Region to the WorkSpaces users.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 545823,
          "date": "Sat 12 Feb 2022 13:20",
          "username": "tkanmani76",
          "content": "C<br>You must also create special FQDN-based registration codes called connection aliases. These connection aliases replace Region-specific registration codes for your WorkSpaces users. (The Region-specific registration codes remain valid; however, for cross-Region redirection to work, your users must use the FQDN instead as their registration code.)<br>After you've created your connection aliases, you associate them with your WorkSpaces directories in different Regions to create association pairs.<br>Each association pair has a primary Region and one or more failover Regions.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 632126,
          "date": "Sat 16 Jul 2022 13:30",
          "username": "asfsdfsdf",
          "content": "C this is AWS documentation",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 573744,
          "date": "Wed 23 Mar 2022 16:54",
          "username": "Bigbearcn",
          "content": "https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 546388,
          "date": "Sun 13 Feb 2022 11:24",
          "username": "futen0326",
          "content": "C is right",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 525925,
          "date": "Mon 17 Jan 2022 17:02",
          "username": "lakhera",
          "content": "C is correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#815",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a serverless multi-tenant content management system on AWS. The architecture contains a web-based front end that interacts with an Amazon<br>API Gateway API that uses a custom AWS Lambda authorizer. The authorizer authenticates a user to its tenant ID and encodes the information in a JSON Web<br>Token (JWT) token. After authentication, each API call through API Gateway targets a Lambda function that interacts with a single Amazon DynamoDB table to fulfill requests.<br>To comply with security standards, the company needs a stronger isolation between tenants. The company will have hundreds of customers within the first year.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#815",
          "answers": [
            {
              "choice": "<p>A. Create a DynamoDB table for each tenant by using the tenant ID in the table name. Create a service that uses the JWT token to retrieve the appropriate Lambda execution role that is tenant-specific. Attach IAM policies to the execution role to allow access only to the DynamoDB table for the tenant.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add tenant ID information to the partition key of the DynamoDB table. Create a service that uses the JWT token to retrieve the appropriate Lambda execution role that is tenant-specific. Attach IAM policies to the execution role to allow access to items in the table only when the key matches the tenant ID. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a separate AWS account for each tenant of the application. Use dedicated infrastructure for each tenant. Ensure that no cross-account network connectivity exists.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add tenant ID as a sort key in every DynamoDB table. Add logic to each Lambda function to use the tenant ID that comes from the JWT token as the sort key in every operation on the DynamoDB table.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 520568,
          "date": "Mon 10 Jan 2022 02:18",
          "username": "vinodkpsashsz",
          "content": "I support BTips: https://aws.amazon.com/blogs/apn/isolating-saas-tenants-with-dynamically-generated-iam-policies/",
          "upvote_count": "123",
          "selected_answers": ""
        },
        {
          "id": 595888,
          "date": "Mon 02 May 2022 07:30",
          "username": "sashsz",
          "content": "Tips: https://aws.amazon.com/blogs/apn/isolating-saas-tenants-with-dynamically-generated-iam-policies/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 519642,
          "date": "Sat 08 Jan 2022 17:10",
          "username": "Smartphone",
          "content": "Answer seems to be B.  Rather than creating table for each tenant, its better to use partition key in the already available table. This can be achieved with the LEAST operational.",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 672467,
          "date": "Sun 18 Sep 2022 16:45",
          "username": "Yashar1691",
          "content": "B is correct:<br>https://aws.amazon.com/blogs/apn/multi-tenant-storage-with-amazon-dynamodb/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 656948,
          "date": "Fri 02 Sep 2022 06:39",
          "username": "kadev",
          "content": "This Question is very confuse. Maybe is error from admin.<br>\\\"LEAST operational overhead\\\" => if A, seperate by tablename, in the future when need to add more tenant you need create more table, with B you dont need do anymore<br><br>\\\"a stronger isolation between tenants\\\" i think, for this stituation mean of question: find a soluiton that stronger isolation than current solution, not mean find the best soluiton for isolation.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 654980,
          "date": "Wed 31 Aug 2022 12:23",
          "username": "gnic",
          "content": "Partition key is not for isolation.<br>I support A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 636869,
          "date": "Mon 25 Jul 2022 19:42",
          "username": "cen007",
          "content": "A.  reason \\\"To comply with security standards, the company needs a stronger isolation between tenants.\\\"<br><br>https://aws.amazon.com/blogs/apn/multi-tenant-storage-with-amazon-dynamodb/<br><br>1. Separate database – each tenant has a fully isolated database with its own representation of the data.... best ISOLATION but the question is about multi-tent.2. Shared database, separate schema (Table Name Partitioning) – tenants all reside in the same database, but each tenant can have its own representation of the data. STRONGEST ISOLATION FOR MULTI-TENANT. but requires more operational than partition.<br><br>3. Shared everything (Index Partitioning)– tenants all reside in the same database and all leverage a universal representation of the data....EASIEST TO MANAGE BUT NOT LESS ISOLATION, prone to nosy neighbors.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 609742,
          "date": "Tue 31 May 2022 15:26",
          "username": "ArreRajamakpk",
          "content": "B.  <br>The choice is augmenting partition key with tenant id vs Silo keys in multiple tables(increased overhead)<br>https://aws.amazon.com/blogs/apn/partitioning-pooled-multi-tenant-saas-data-with-amazon-dynamodb/The link also explains to take the approach further by introducing a randomised suffix to the partition key, and introduce fine grain controlled access in coordination with STS",
          "upvote_count": "43",
          "selected_answers": ""
        },
        {
          "id": 615528,
          "date": "Mon 13 Jun 2022 01:05",
          "username": "makpk",
          "content": "The link also explains to take the approach further by introducing a randomised suffix to the partition key, and introduce fine grain controlled access in coordination with STS",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 601509,
          "date": "Sat 14 May 2022 11:36",
          "username": "ssSsEclipse",
          "content": "for those selecting B/D, you cant update the partition key and sort key in an existing table",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 594428,
          "date": "Fri 29 Apr 2022 13:57",
          "username": "jnxtx",
          "content": "Qns deals with the implementation of custom permission policies. The details of each policy should be stored in a central table with the client id as the partition key for quick retrival andthe subsequent creation of the custom policy. Much less operational overhead and also side benefit, better for backups",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 520078,
          "date": "Sun 09 Jan 2022 10:53",
          "username": "tkanmani76",
          "content": "Creating seperate accounts, different tables for tenants has more operational overhead. Partionkey based approach is the right way - Option B. ",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#816",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a custom database in the AWS Cloud. The database uses Amazon EC2 for compute and uses Amazon Elastic Block Store (Amazon EBS) for storage. The database runs on the latest generation of EC2 instances and uses a General Purpose SSD (gp2) EBS volume for data.<br>The current data volume has the following characteristics:<br>✑ The volume is 512 GB in size.<br>✑ The volume never goes above 256 GB utilization.<br>✑ The volume consistently uses around 1,500 IOPS.<br>A solutions architect needs to conduct an analysis of the current database storage layer and make a recommendation about ways to reduce cost.<br>Which solution will provide the MOST cost savings without impacting the performance of the database?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#816",
          "answers": [
            {
              "choice": "<p>A. Convert the data volume to the Cloud HDD (sc1) type. Leave the volume as 512 GB.  Set the volume IOPS to 1,500.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Convert the data volume to the Provisioned IOPS SSD (io2) type. Resize the volume to 256 GB.  Set the volume IOPS to 1,500.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Convert the data volume to the Provisioned IOPS SSD (io2) Block Express type. Leave the volume as 512 GB.  Set the volume IOPS to 1,500.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Convert the data volume to the General Purpose SSD (gp3) type. Resize the volume to 256 GB.  Set the volume IOPS to 1,500.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 716435,
          "date": "Sat 12 Nov 2022 03:02",
          "username": "Nidhin07",
          "content": "We can resize the existing volume to 256, so we can lean towards C, the only concern is provisioned I/O block express is not supported on all instance type, the question states instance is running on latest generation",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 646470,
          "date": "Sun 14 Aug 2022 01:46",
          "username": "kenchou73",
          "content": "https://aws.amazon.com/cn/ebs/general-purpose/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 637708,
          "date": "Wed 27 Jul 2022 02:55",
          "username": "hilft",
          "content": "I would go for B in normal cirumstances but the question is asking for the cost so, D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 632139,
          "date": "Sat 16 Jul 2022 14:01",
          "username": "asfsdfsdfAYANtheGLADIATOR",
          "content": "All answers are wrong - its not possible to shrink EBS- need to create it from scratch so its either A or C<br>A - will not provide the needed IOPS<br>C - super expensive<br>So I guess the only correct option should be D - only problem with it is wording need to\\\"recreate\\\" the volume and also we can set it to 3000This is a valid point.",
          "upvote_count": "32",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 661211,
          "date": "Tue 06 Sep 2022 14:31",
          "username": "AYANtheGLADIATOR",
          "content": "This is a valid point.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 607120,
          "date": "Wed 25 May 2022 10:51",
          "username": "bobsmith2000",
          "content": "Check here<br>https://aws.amazon.com/ebs/pricing/<br><br>A) jeopardises performance.<br>BC) - any io type is more expensive per GB then gp<br>D) the lowers price per GB without affecting performance.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 598060,
          "date": "Sat 07 May 2022 11:50",
          "username": "ghfalcon7",
          "content": "Resize the volume to 256 GB -> not possible, you can't shrink an ebs volume. You would have to create a new volume and migrate existing data to it. Answer is C IMO",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 580509,
          "date": "Mon 04 Apr 2022 03:13",
          "username": "Jonfernz",
          "content": "although gp3 baseline is 3000 iops it is still the most cost efficient.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 576076,
          "date": "Sun 27 Mar 2022 10:33",
          "username": "czarno",
          "content": "Max IOPS for HDD sc1 is indeed 250.<br>Gp3 is becoming the new default in place of gp2.<br>Although you can't set the IOPS of gp3 to 1500 as it's baseline is 3000, I think the question/answer is just slightly wrong and looks a bit different in the actual exam. <br>Which makes D the only correct answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 566356,
          "date": "Sat 12 Mar 2022 19:54",
          "username": "Ducer_deuceworld",
          "content": "option - D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 560437,
          "date": "Fri 04 Mar 2022 01:43",
          "username": "Alvindotobstar86",
          "content": "don't think it;s gp3 since it's baseline performance is 3000 iops: https://aws.amazon.com/ebs/volume-types/<br>Don't think it's io2 since it's min volume size is 4gb and the iops increase is 500/gb so won't be able to get 1500 iops<br>so i think it's cold hddD, despite the 3000 IOPS baseline<br>The cold HDD sc1 has a max IOPS volume of 250, therfore can't reached the needed 1500 IOPS.<br>https://aws.amazon.com/ebs/volume-types/",
          "upvote_count": "13",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 567912,
          "date": "Mon 14 Mar 2022 21:11",
          "username": "tobstar86",
          "content": "D, despite the 3000 IOPS baseline<br>The cold HDD sc1 has a max IOPS volume of 250, therfore can't reached the needed 1500 IOPS.<br>https://aws.amazon.com/ebs/volume-types/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 554596,
          "date": "Wed 23 Feb 2022 16:18",
          "username": "Z_dane_23",
          "content": "I think it'sB as io2 block express has the same price as io2, however as they question asks for the cheapest, by reducing size to 256GB it will be the cheaper than block express with 512GB",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 552420,
          "date": "Mon 21 Feb 2022 01:52",
          "username": "jyrajan69",
          "content": "All answers are wrong in terms of IOPS of 1500,but process of elimination, A is wrong, it is for data that is long term, cold, B and C do not satisfy the cost aspect, so only possible is D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 526085,
          "date": "Mon 17 Jan 2022 21:26",
          "username": "vissiYecine11y",
          "content": "AWS designed gp3 to provide predictable 3,000 IOPS baseline performance and 125 MiB/s, regardless of volume size. With gp3 volumes, you can provision IOPS and throughput independently, without increasing storage size, at costs up to 20% lower per GB compared to gp2 volumes. This means you can provision smaller volumes while maintaining high performance, at a cheaper cost.D seems to be good,but it's wrong cause it's clearly stating \\\"set the IOPS to 1,500\\\" which is impossible :<br>IOPS must be between 3000 and 16000.",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 528913,
          "date": "Fri 21 Jan 2022 03:57",
          "username": "Yecine11y",
          "content": "D seems to be good,but it's wrong cause it's clearly stating \\\"set the IOPS to 1,500\\\" which is impossible :<br>IOPS must be between 3000 and 16000.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 526083,
          "date": "Mon 17 Jan 2022 21:25",
          "username": "vissi",
          "content": "Option D is correct <br>https://aws.amazon.com/blogs/storage/migrate-your-amazon-ebs-volumes-from-gp2-to-gp3-and-save-up-to-20-on-costs/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 524642,
          "date": "Sun 16 Jan 2022 06:31",
          "username": "ByomkeshDas",
          "content": "Option-D.  General Purpose SSD (gp3) type",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 519091,
          "date": "Fri 07 Jan 2022 17:40",
          "username": "padel",
          "content": "D even if the minimal IOPS is 3'000",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 516092,
          "date": "Mon 03 Jan 2022 23:07",
          "username": "FirelordgeburyamByomkeshDas",
          "content": "It’s Dgp3 can't set volume IOPS to 1500.<br>baseline performance of 3,000 IOPS <br><br>Therefore, D is wrong.<br><br>https://aws.amazon.com/jp/about-aws/whats-new/2020/12/introducing-new-amazon-ebs-general-purpose-volumes-gp3/?nc1=h_lsHowever still General Purpose SSD (gp3) type will result in the MOST cost reduction while maintaining the database's performance.",
          "upvote_count": "123",
          "selected_answers": ""
        },
        {
          "id": 516859,
          "date": "Tue 04 Jan 2022 18:18",
          "username": "geburyamByomkeshDas",
          "content": "gp3 can't set volume IOPS to 1500.<br>baseline performance of 3,000 IOPS <br><br>Therefore, D is wrong.<br><br>https://aws.amazon.com/jp/about-aws/whats-new/2020/12/introducing-new-amazon-ebs-general-purpose-volumes-gp3/?nc1=h_lsHowever still General Purpose SSD (gp3) type will result in the MOST cost reduction while maintaining the database's performance.",
          "upvote_count": "23",
          "selected_answers": ""
        },
        {
          "id": 524644,
          "date": "Sun 16 Jan 2022 06:32",
          "username": "ByomkeshDas",
          "content": "However still General Purpose SSD (gp3) type will result in the MOST cost reduction while maintaining the database's performance.",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#817",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail company is hosting an ecommerce website on AWS across multiple AWS Regions. The company wants the website to be operational at all times for online purchases. The website stores data in an Amazon RDS for MySQL DB instance.<br>Which solution will provide the HIGHEST availability for the database?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#817",
          "answers": [
            {
              "choice": "<p>A. Configure automated backups on Amazon RDS. In the case of disruption, promote an automated backup to be a standalone DB instance. Direct database traffic to the promoted DB instance. Create a replacement read replica that has the promoted DB instance as its source.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure global tables and read replicas on Amazon RDS. Activate the cross-Region scope. In the case of disruption, use AWS Lambda to copy the read replicas from one Region to another Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure global tables and automated backups on Amazon RDS. In the case of disruption, use AWS Lambda to copy the read replicas from one Region to another Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure read replicas on Amazon RDS. In the case of disruption, promote a cross-Region and read replica to be a standalone DB instance. Direct database traffic to the promoted DB instance. Create a replacement read replica that has the promoted DB instance as its source.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 623537,
          "date": "Tue 28 Jun 2022 01:29",
          "username": "kangtamo",
          "content": "Agree with D. ",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 572717,
          "date": "Tue 22 Mar 2022 07:39",
          "username": "KennethTam",
          "content": "D is correct",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 543516,
          "date": "Wed 09 Feb 2022 04:59",
          "username": "Ishu_awsguywassbadsdadasdad",
          "content": "These look like associate level questionsDon't think so. <br>Associate lvl answer in this case would simply be : \\\"Configure Multi AZ on your RDS\\\" ... and you are doneThey are more tough than associate and require more knowledge, if they seem easy it shows how little you actually know.",
          "upvote_count": "215",
          "selected_answers": ""
        },
        {
          "id": 696228,
          "date": "Sun 16 Oct 2022 14:24",
          "username": "wassb",
          "content": "Don't think so. <br>Associate lvl answer in this case would simply be : \\\"Configure Multi AZ on your RDS\\\" ... and you are done",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 581064,
          "date": "Tue 05 Apr 2022 08:28",
          "username": "adsdadasdad",
          "content": "They are more tough than associate and require more knowledge, if they seem easy it shows how little you actually know.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 520814,
          "date": "Mon 10 Jan 2022 12:35",
          "username": "tkanmani76",
          "content": "Agree on D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 516506,
          "date": "Tue 04 Jan 2022 12:06",
          "username": "Riho",
          "content": "A is working option, but with data loss. Solution I really won't recommend as automatic solution. D seems to be right answer.",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#818",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to use Amazon S3 to back up its on-premises file storage solution. The company's on-premises file storage solution supports NFS, and the company wants its new solution to support NFS. The company wants to archive the backup files after 5 days. If the company needs archived files for disaster recovery, the company is willing to wait a few days for the retrieval of those files.<br>Which solution meets these requirements MOST cost-effectively?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: E</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#818",
          "answers": [
            {
              "choice": "<p>A. Deploy an AWS Storage Gateway files gateway that is associated with an S3 bucket. Move the files from the on-premises file storage solution to the file gateway. Create an S3 Lifecycle rule to move the file to S3 Standard-Infrequent Access (S3 Standard-IA) after 5 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an AWS Storage Gateway volume gateway that is associated with an S3 bucket. Move the files from the on-premises file storage solution to the volume gateway. Create an S3 Lifecycle rule to move the files to S3 Glacier Deep Archive after 5 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy an AWS Storage Gateway tape gateway that is associated with an S3 bucket. Move the files from the on-premises file storage solution to the tape gateway. Create an S3 Lifecycle rule to move the files to S3 Standard-Infrequent Access (S3 Standard-IA) after 5 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy an AWS Storage Gateway file gateway that is associated with an S3 bucket. Move the files from the on-premises file storage solution to the tape gateway. Create an S3 Lifecycle rule to move the files to S3 Standard-Infrequent Access (S3 Standard-IA) after 5 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Deploy an AWS Storage Gateway file gateway that is associated with an S3 bucket. Move the files from the on-premises file storage solution to the file gateway. Create an S3 Lifecycle rule to move the files to S3 Glacier Deep Archive after 5 days.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 695130,
          "date": "Sat 15 Oct 2022 04:22",
          "username": "AwsBRFan",
          "content": "Key=NFS, so file gateway.<br>https://aws.amazon.com/storagegateway/?nc1=h_ls",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: E"
        },
        {
          "id": 691607,
          "date": "Tue 11 Oct 2022 02:14",
          "username": "skywalker",
          "content": "Between A and E. ..<br><br>I would go for A since Data in S3 can move to Deep Glacier only after 90days.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 632147,
          "date": "Sat 16 Jul 2022 14:08",
          "username": "asfsdfsdf",
          "content": "E most cost effective and file gateway",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: E"
        },
        {
          "id": 624365,
          "date": "Wed 29 Jun 2022 03:51",
          "username": "TechX",
          "content": "100% E<br>File gateway support NFS protocol, while volume gateway support iCSI protocol. And we need glacier deep archive to save cost, cause the company willing to wait for few days retrival time.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: E"
        },
        {
          "id": 543431,
          "date": "Wed 09 Feb 2022 01:19",
          "username": "Bigbearcn",
          "content": "It's E. ",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: E"
        },
        {
          "id": 519939,
          "date": "Sun 09 Jan 2022 06:49",
          "username": "Akaza",
          "content": "I go for E.  \\\"a few days\\\" is enough. The new Glacier Deep Archive storage class is designed to provide durable and secure long-term storage for large amounts of data at a price that is competitive with off-premises tape archival services. Data is stored across 3 or more AWS Availability Zones and can be retrieved in 12 hours or less.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: E"
        },
        {
          "id": 517828,
          "date": "Wed 05 Jan 2022 22:49",
          "username": "Firelord",
          "content": "Confirmed E",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 516857,
          "date": "Tue 04 Jan 2022 18:15",
          "username": "krisvija12",
          "content": "E<br>Only File Gateway will support NFS and since the wait time for retrieval is few days Glacier deep archive is also fit.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 515944,
          "date": "Mon 03 Jan 2022 18:55",
          "username": "kemalgoklenwassbNano803",
          "content": "cost-effectiveness is the key while chosing the tier of s3.<br>Once they're ok to wait couple of days it should be Glacier Deep Archive.<br>Deep Archive option rules out A,C,D<br>Once they have custom solution for storage it should be volume gatewayNFS/SMB protocol goes with the Storage GatewayIt said\\\"file storage system\\\". It think it should be E. ",
          "upvote_count": "112",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 696231,
          "date": "Sun 16 Oct 2022 14:29",
          "username": "wassb",
          "content": "NFS/SMB protocol goes with the Storage Gateway",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 576601,
          "date": "Mon 28 Mar 2022 06:03",
          "username": "Nano803",
          "content": "It said\\\"file storage system\\\". It think it should be E. ",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#819",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A video processing company wants to build a machine learning (ML) model by using 600 TB of compressed data that is stored as thousands of files in the company's on-premises network attached storage system. The company does not have the necessary compute resources on premises for ML experiments and wants to use AWS.<br>The company needs to complete the data transfer to AWS within 3 weeks. The data transfer will be a one-time transfer. The data must be encrypted in transit. The measured upload speed of the company's internet connection is 100 Mbps, and multiple departments share the connection.<br>Which solution will meet these requirements MOST cost-effectively?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#819",
          "answers": [
            {
              "choice": "<p>A. Order several AWS Snowball Edge Storage Optimized devices by using the AWS Management Console. Configure the devices with a destination S3 bucket. Copy the data to the devices. Ship the devices back to AWS.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up a 10 Gbps AWS Direct Connect connection between the company location and the nearest AWS Region. Transfer the data over a VPN connection into the Region to store the data in Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a VPN connection between the on-premises network storage and the nearest AWS Region. Transfer the data over the VPN connection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy an AWS Storage Gateway file gateway on premises. Configure the file gateway with a destination S3 bucket. Copy the data to the file gateway.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 546398,
          "date": "Sun 13 Feb 2022 11:38",
          "username": "RVivek",
          "content": "The key is Data tarsfer should be completed in 3 week.<br><br>B:wrong /Getting a Direct connect will take at least 1 month<br>C & D will take arprximately two years to complete Data taransfer",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 632148,
          "date": "Sat 16 Jul 2022 14:12",
          "username": "asfsdfsdf",
          "content": "A is the most cost effective and quickest + need to do one time transfer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 593344,
          "date": "Wed 27 Apr 2022 20:24",
          "username": "snakecharmer2",
          "content": "A <br>B is not an option...once you added the vpn tunnel the max bandwidth is 1.25 Gbps regardless of the DX bandwidth",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 534440,
          "date": "Fri 28 Jan 2022 06:55",
          "username": "timlow84caveman712timlow84",
          "content": "Snowball edge has 80 TB of usable HDD storage. We need at least 8 of these to transfer 600 TB data. Based on the pricing here https://aws.amazon.com/snowball/pricing/ for each snowball device, it will not come cheap.<br><br>Transferring 60 TB or 600,000GB of data via a 10Gbps connection will only take around 60,000 secs, 1,000 mins or approx 16.7 hours. I think a 1 month 10Gbps connection will be much much cheaper than Snowball.yeah but you only have 3 weeks, which is not even enough for the DX setupSo yes - i think the original answer B makes sense.",
          "upvote_count": "211",
          "selected_answers": ""
        },
        {
          "id": 689829,
          "date": "Sun 09 Oct 2022 03:34",
          "username": "caveman712",
          "content": "yeah but you only have 3 weeks, which is not even enough for the DX setup",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 534444,
          "date": "Fri 28 Jan 2022 07:03",
          "username": "timlow84",
          "content": "So yes - i think the original answer B makes sense.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 520865,
          "date": "Mon 10 Jan 2022 14:16",
          "username": "frankzeng",
          "content": "A.  Direct connect takes one month to create",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 514684,
          "date": "Sat 01 Jan 2022 22:19",
          "username": "Firelord",
          "content": "A, it executes just once",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#820",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has several AWS accounts. A development team is building an automation framework for cloud governance and remediation processes. The automation framework uses AWS Lambda functions in a centralized account. A solutions architect must implement a least privilege permissions policy that allows the Lambda functions to run in each of the company's AWS accounts.<br>Which combination of steps will meet these requirements? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#820",
          "answers": [
            {
              "choice": "<p>A. In the centralized account, create an IAM role that has the Lambda service as a trusted entity. Add an inline policy to assume the roles of the other AWS accounts.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. In the other AWS accounts, create an IAM role that has minimal permissions. Add the centralized account's Lambda IAM role as a trusted entity.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. In the centralized account, create an IAM role that has roles of the other accounts as trusted entities. Provide minimal permissions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. In the other AWS accounts, create an IAM role that has permissions to assume the role of the centralized account. Add the Lambda service as a trusted entity.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. In the other AWS accounts, create an IAM role that has minimal permissions. Add the Lambda service as a trusted entity.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 520065,
          "date": "Sun 09 Jan 2022 10:15",
          "username": "tkanmani76",
          "content": "A&B is the right answer",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 725406,
          "date": "Wed 23 Nov 2022 22:48",
          "username": "SureNot",
          "content": "The describtion is awful",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 646669,
          "date": "Sun 14 Aug 2022 11:18",
          "username": "kenchou73",
          "content": "https://medium.com/@it.melnichenko/invoke-a-lambda-across-multiple-aws-accounts-8c094b2e70be",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 632150,
          "date": "Sat 16 Jul 2022 14:15",
          "username": "asfsdfsdf",
          "content": "AB - create a role that assumes a role in other account - need to add a trust entity for it",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 606735,
          "date": "Tue 24 May 2022 15:23",
          "username": "bobsmith2000",
          "content": "Create a role in central account for Lambda and allow it to assume roles in other acc.<br>In other accounts create a role with trusted policy for a role in central account and give it actual permissions.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 547798,
          "date": "Tue 15 Feb 2022 14:56",
          "username": "m0h3nm0h3n",
          "content": "C&D - centralized account - Create IAM role which can assumed by Lambda execution roles in other accounts and provide minimum permission. other account - Create roles which can be assumed by Lambda.Changing to A&B,<br>A - Lambda function located in centralized account - Lambda execution roles should assume a role in Managed accounts.<br>Managed Account IAM role should have minimum permission and lambda execution role as trusted entity.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 555720,
          "date": "Fri 25 Feb 2022 04:06",
          "username": "m0h3n",
          "content": "Changing to A&B,<br>A - Lambda function located in centralized account - Lambda execution roles should assume a role in Managed accounts.<br>Managed Account IAM role should have minimum permission and lambda execution role as trusted entity.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 540093,
          "date": "Fri 04 Feb 2022 00:16",
          "username": "Bigbearcn",
          "content": "AAABBB",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 517111,
          "date": "Wed 05 Jan 2022 03:01",
          "username": "AMKazi",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/lambda-function-assume-iam-role/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 515953,
          "date": "Mon 03 Jan 2022 19:12",
          "username": "Firelord",
          "content": "I think it's A & B",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#821",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A hedge fund company is developing a new web application to handle trades. Traders around the world will use the application. The application will handle hundreds of thousands of transactions, especially during overlapping work hours between Europe and the United States.<br>According to the company's disaster recovery plan, the data that is generated must be replicated to a second AWS Region. Each transaction item will be less than<br>100 KB in size. The company wants to simplify the CI/CD pipeline as much as possible.<br>Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#821",
          "answers": [
            {
              "choice": "<p>A. Deploy the application in multiple Regions. Use Amazon Route 53 latency-based routing to route users to the nearest deployment.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Provision an Amazon Aurora global database to persist data. Use Amazon ElastiCache to improve response time.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Provision an Amazon CloudFront domain with the website as an origin. Restrict access to geographies where the usage is expected.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provision an Amazon DynamoDB global table. Use DynamoDB Accelerator (DAX) to improve response time.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Provision an Amazon Aurora multi-master cluster to persist data. Use Amazon ElastiCache to improve response time.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 533059,
          "date": "Wed 26 Jan 2022 17:38",
          "username": "aws01jxoxhxnlavy",
          "content": "seems like A and DI agree with A and D<br><br>B) Answer is possible, but the transaction size of < 100KB sounds like DynamoDB to me<br>C) Doesn't help in this scenario<br>E) Multi-Master means data is only copied to one regionDAX is for read only, so I guess answer is AE",
          "upvote_count": "722",
          "selected_answers": ""
        },
        {
          "id": 544602,
          "date": "Thu 10 Feb 2022 15:04",
          "username": "jxoxhxn",
          "content": "I agree with A and D<br><br>B) Answer is possible, but the transaction size of < 100KB sounds like DynamoDB to me<br>C) Doesn't help in this scenario<br>E) Multi-Master means data is only copied to one region",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 534635,
          "date": "Fri 28 Jan 2022 12:00",
          "username": "lavy",
          "content": "DAX is for read only, so I guess answer is AE",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 654995,
          "date": "Wed 31 Aug 2022 12:40",
          "username": "gnic",
          "content": "AD<br>Aurora will kill the bill :)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 644733,
          "date": "Wed 10 Aug 2022 03:04",
          "username": "foureye2004",
          "content": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html<br><br>Build app in multiple-region with DynamoDB global table",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 632154,
          "date": "Sat 16 Jul 2022 14:28",
          "username": "asfsdfsdf",
          "content": "AD is the only correct one ... <br>E -multimaster is a regional resource<br>C - not sure how this help with DR its for Active-Active<br>B - Can work but the requirement here is for unstructured data < 100 KB",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 595021,
          "date": "Sat 30 Apr 2022 15:09",
          "username": "snakecharmer2",
          "content": "A & D<br>We should use DynamoDB and not Aurora because the data consist of files...",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 582600,
          "date": "Thu 07 Apr 2022 22:48",
          "username": "Bigbearcn",
          "content": "The following limitations currently apply to the AWS and Aurora features that you can use with multi-master clusters: <br>Currently, all DB instances in a multi-master cluster must be in the same AWS Region. <br><br>It's required that data should be copied to second region, So E is wrong.<br>I agree with A and D. <br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-multi-master.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 582202,
          "date": "Thu 07 Apr 2022 08:13",
          "username": "feelzu",
          "content": "You have to replicate DB to a different region. So Answer E shouldn't be answer because multi master cluster must be in same region.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 574102,
          "date": "Thu 24 Mar 2022 08:00",
          "username": "bfal",
          "content": "Ans is A and B<br>https://aws.amazon.com/rds/aurora/global-database/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 527035,
          "date": "Tue 18 Jan 2022 23:01",
          "username": "Student1950",
          "content": "I believe answer shouldbe A and E",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#822",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating some of its applications to AWS. The company wants to migrate and modernize the applications quickly after it finalizes networking and security strategies. The company has set up an AWS Direct Connection connection in a central network account.<br>The company expects to have hundreds of AWS accounts and VPCs in the near future. The corporate network must be able to access the resources on AWS seamlessly and also must be able to communicate with all the VPCs. The company also wants to route its cloud resources to the internet through its on-premises data center.<br>Which combination of steps will meet these requirements? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BDF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#822",
          "answers": [
            {
              "choice": "<p>A. Create a Direct Connect gateway in the central account. In each of the accounts, create an association proposal by using the Direct Connect gateway and the account ID for every virtual private gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a Direct Connect gateway and a transit gateway in the central network account. Attach the transit gateway to the Direct Connect gateway by using a transit VIF. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Provision an internet gateway. Attach the internet gateway to subnets. Allow internet traffic through the gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Share the transit gateway with other accounts. Attach VPCs to the transit gateway.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Provision VPC peering as necessary.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Provision only private subnets. Open the necessary route on the transit gateway and customer gateway to allow outbound internet traffic from AWS to flow through NAT services that run in the data center.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 517420,
          "date": "Wed 05 Jan 2022 12:56",
          "username": "guruaws2021",
          "content": "It should be BDF",
          "upvote_count": "14",
          "selected_answers": ""
        },
        {
          "id": 655000,
          "date": "Wed 31 Aug 2022 12:46",
          "username": "gnic",
          "content": "BDF, with TG you don't need peering",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BDF"
        },
        {
          "id": 632161,
          "date": "Sat 16 Jul 2022 14:40",
          "username": "asfsdfsdf",
          "content": "BDF - is the correct architecture to use with TGW + DX",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BDF"
        },
        {
          "id": 550042,
          "date": "Fri 18 Feb 2022 06:44",
          "username": "arberod",
          "content": "bdf should be",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BDF"
        },
        {
          "id": 533945,
          "date": "Thu 27 Jan 2022 17:57",
          "username": "lavyuser0001",
          "content": "Peering is not needed for transit GW, i agree with BDFit is not scalable , that is the reason it is wrong",
          "upvote_count": "31",
          "selected_answers": ""
        },
        {
          "id": 598779,
          "date": "Mon 09 May 2022 02:41",
          "username": "user0001",
          "content": "it is not scalable , that is the reason it is wrong",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#823",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a software-as-a-service (SaaS) solution on AWS. The company has deployed an Amazon API Gateway REST API with AWS Lambda integration in multiple AWS Regions and in the same production account.<br>The company offers tiered pricing that gives customers the ability to pay for the capacity to make a certain number of API calls per second. The premium tier offers up to 3,000 calls per second, and customers are identified by a unique API key. Several premium tier customers in various Regions report that they receive error responses of 429 Too Many Requests from multiple API methods during peak usage hours. Logs indicate that the Lambda function is never invoked.<br>What could be the cause of the error messages for these customers?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#823",
          "answers": [
            {
              "choice": "<p>A. The Lambda function reached its concurrency limit.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The Lambda function its Region limit for concurrency.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The company reached its API Gateway account limit for calls per second.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. The company reached its API Gateway default per-method limit for calls per second.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 714793,
          "date": "Wed 09 Nov 2022 22:56",
          "username": "SureNotdue",
          "content": "from multiple API methods during peak usage hoursgood point",
          "upvote_count": "22",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 715747,
          "date": "Fri 11 Nov 2022 04:51",
          "username": "due",
          "content": "good point",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 644722,
          "date": "Wed 10 Aug 2022 02:23",
          "username": "foureye2004",
          "content": "Should be C<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html#apig-request-throttling-account-level-limits<br><br>The documents is really clear for the error 429 Too Many Requests<br><br>with D, maybe the error will be: 429 Limit Exceeded",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 637338,
          "date": "Tue 26 Jul 2022 12:40",
          "username": "kenchou73",
          "content": "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html#apig-request-throttling-account-level-limits",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 632167,
          "date": "Sat 16 Jul 2022 14:57",
          "username": "asfsdfsdf",
          "content": "After reviewing it few times i will have to choose C. <br>If the company sends 10 keys for 10 different users it will for sure cross the 10k quota.<br>Why not D? the default per-method limit is the same as Usage plan - and this is limit to 3000.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 627678,
          "date": "Wed 06 Jul 2022 04:30",
          "username": "cloudude",
          "content": "C in my opinion",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 613170,
          "date": "Wed 08 Jun 2022 11:14",
          "username": "Anhdd",
          "content": "In my opinion, I would choose D over C.  Because 429 error, we should think about client error, so eliminate A & B due to Lamdba is server side. <br>Between C and D, Rest API could get 10,000 requests per second as the link below <br>https://docs.aws.amazon.com/apigateway/latest/developerguide/limits.html<br>While the question mention that user request upto 3000/s, so C should not be the reason cause error. So the remain answer should be D. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 553044,
          "date": "Mon 21 Feb 2022 18:15",
          "username": "johnnsmith",
          "content": "C is correct. It is because other API's caused the limit being reached. D is incorrect. If it is due to per method limit (20 per second). There would be some Lambda functions fired before throtolling happened. But it said Lambda functions never fired.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 542762,
          "date": "Tue 08 Feb 2022 00:36",
          "username": "jj22222",
          "content": "I also think its C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 542615,
          "date": "Mon 07 Feb 2022 19:52",
          "username": "Juks",
          "content": "D could be the answer. Default throttling limit for API gateway is 10,000. Seems method level throttling defined in the usage plan iscausing the 429 error.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 530913,
          "date": "Mon 24 Jan 2022 00:44",
          "username": "AMKazilavy",
          "content": "D is the ans <br>C: Default API gateway account limit is 10,000 requests per second<br>A,B: wrong choices as Lambda never called on erroneous requestswhy cant it be C? the request could be more than 10000 as well",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 537664,
          "date": "Tue 01 Feb 2022 07:01",
          "username": "lavy",
          "content": "why cant it be C? the request could be more than 10000 as well",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 526863,
          "date": "Tue 18 Jan 2022 18:27",
          "username": "lulz111bobsmith2000lulz111",
          "content": "I thought this one was tough tbh, because both Lambda concurrency issues and API gateway throttling can cause this error. My logic in the end was that it was C, because of the numbers quoted in https://docs.aws.amazon.com/apigateway/latest/developerguide/limits.html. In essence the requests per second limit per *account* is 10,000, so selling premium subscriptions that allow up to 3000 isnt scalable, and there is no mention of an account per API. Moreover that link seems to suggest that regional APIs are 600p/s. Tricky and im still not entirely sold on my answer.per account, per RegionActually now i look at the question again \\\"the lambda function was never called\\\", which means it definitely isnt a Lambda concurrency issue and C is the answer. That doesnt explain the issue with the Lambda function and API gateway integration, but that isnt the question.",
          "upvote_count": "112",
          "selected_answers": ""
        },
        {
          "id": 607192,
          "date": "Wed 25 May 2022 13:26",
          "username": "bobsmith2000",
          "content": "per account, per Region",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 526866,
          "date": "Tue 18 Jan 2022 18:30",
          "username": "lulz111",
          "content": "Actually now i look at the question again \\\"the lambda function was never called\\\", which means it definitely isnt a Lambda concurrency issue and C is the answer. That doesnt explain the issue with the Lambda function and API gateway integration, but that isnt the question.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 513386,
          "date": "Thu 30 Dec 2021 14:18",
          "username": "cldy",
          "content": "C, but... <br>https://aws.amazon.com/about-aws/whats-new/2017/06/amazon-api-gateway-increases-account-level-throttle-limits-to-10000-requests-per-second-rps/#:~:text=Amazon%20API%20Gateway%20has%20raised,original%20limit%20of%202%2C000%20requests.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#824",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has registered 10 new domain names. The company uses the domains for online marketing. The company needs a solution that will redirect online visitors to a specific URL for each domain. All domains and target URLS are defined in a JSON document. All DNS records are managed by Amazon Route 53.<br>A solutions architect must implement a redirect service that accepts HTTP and HTTPS requests.<br>Which combination of steps should the solutions architect take to meet these requirements with the LEAST amount of operational effort? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CEF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#824",
          "answers": [
            {
              "choice": "<p>A. Create a dynamic webpage that runs on an Amazon EC2 instance. Configure the webpage to use the JSON document in combination with the event message to look up and respond with a redirect URL.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Application Load Balancer that includes HTTP and HTTPS listeners.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Lambda function that uses the JSON document in combination with the event message to look up and respond with a redirect URL.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an Amazon API Gateway API with a custom domain to publish an AWS Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an Amazon CloudFront distribution. Deploy a Lambda@Edge function.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create an SSL certificate by using AWS Certificate Manager (ACM). Include the domains as Subject Alternative Names.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 605587,
          "date": "Sun 22 May 2022 17:07",
          "username": "bobsmith2000",
          "content": "The dumbest a the worst worded question I've ever read throughout four exams I've passed so far.<br>But anyway. the LEAST operation = Serverless.<br>So it's Lambda, CloudFront and ACM, hence CEF",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: CEF"
        },
        {
          "id": 715491,
          "date": "Thu 10 Nov 2022 20:11",
          "username": "mrgreatness",
          "content": "okay going CEF -- it addresses the full question. Cloudfront + Lambda, we need https so cert manager, then I chose C over B, because the cert will be attached to the Cloudfront not an alb, and it addresses the JSON doc. Final answer CEF",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 715489,
          "date": "Thu 10 Nov 2022 20:02",
          "username": "mrgreatness",
          "content": "definitely E & F , not sure then between B & C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 714065,
          "date": "Tue 08 Nov 2022 20:18",
          "username": "Rocketeer",
          "content": "BCE<br>F is to confuse people.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 704356,
          "date": "Wed 26 Oct 2022 05:33",
          "username": "joancarles",
          "content": "B and F, no discussion here , load and cert.<br>I choose B , because you can use lambda@edge to get the redirections directly from a json file as the question states. Example: https://aws.amazon.com/es/blogs/networking-and-content-delivery/handling-redirectsedge-part2/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BEF"
        },
        {
          "id": 686477,
          "date": "Wed 05 Oct 2022 01:16",
          "username": "dcdcdc3",
          "content": "E:(just as third option is needed)<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-examples.html<br>B F:(Load balancer + cert)<br>https://aws.amazon.com/premiumsupport/knowledge-center/elb-redirect-to-another-domain-with-alb/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BEF"
        },
        {
          "id": 655012,
          "date": "Wed 31 Aug 2022 12:56",
          "username": "gnic",
          "content": "BCF<br>F is for the HTTPS listner that need at least one certificate.<br>A, E are unuseful",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 644693,
          "date": "Wed 10 Aug 2022 00:12",
          "username": "foureye2004",
          "content": "Must be CEF, like bobsmith2000 comments:<br>- C.  Create Lambda first<br>- D.  Create Cloudfront distribution, CloudFront trigger to run the function (Lambda function above)<br>- E.  use ACM to add SSL into Cloudfront distribution for https support.<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-edge-how-it-works-tutorial.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CEF"
        },
        {
          "id": 623544,
          "date": "Tue 28 Jun 2022 01:45",
          "username": "kangtamo",
          "content": "I prefer BCE. ",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 563030,
          "date": "Tue 08 Mar 2022 06:09",
          "username": "Kuangomishaaaa",
          "content": "BCE is my answerDoesn't lambda seems overkill here?",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 576409,
          "date": "Sun 27 Mar 2022 21:05",
          "username": "omishaaaa",
          "content": "Doesn't lambda seems overkill here?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 548914,
          "date": "Wed 16 Feb 2022 21:33",
          "username": "nickstudy7",
          "content": "I like CEF",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 539249,
          "date": "Thu 03 Feb 2022 00:28",
          "username": "Bigbearcn",
          "content": "It's BCE. ",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 532706,
          "date": "Wed 26 Jan 2022 09:39",
          "username": "ravisar",
          "content": "The question is how to design a redirect service that takes HTTP and HTTPS queries?.As per this, <br>https://aws.amazon.com/premiumsupport/knowledge-center/route-53-redirect-to-another-domain/<br>B.  Create an Application Load Balancer that includes HTTP and HTTPS listeners<br>Also E.  Create an Amazon CloudFront distribution. Deploy a Lambda@Edge function.<br>Please refer - https://aws.amazon.com/blogs/networking-and-content-delivery/handling-redirectsedge-part1/<br>So B & E are the answers. Since they are asking for three answers, I think A can work.I select A, B & E. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 520230,
          "date": "Sun 09 Jan 2022 14:53",
          "username": "tkanmani76",
          "content": "Sure about B and C. Guess E is the 3rd option.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 512888,
          "date": "Thu 30 Dec 2021 01:49",
          "username": "notabot2",
          "content": "https://aws.amazon.com/blogs/networking-and-content-delivery/handling-redirectsedge-part2/",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#825",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company asks a solution architect to optimize the cost of a solution. The solution handles requests from multiple customers. The solution includes a multi-tier architecture that uses Amazon API Gateway, AWS Lambda, AWS Fargate, Amazon Simple Queue Service (Amazon SQS), and Amazon EC2.<br>In the current setup, requests go through API Gateway to Lambda and either start a container in Fargate or push a message to an SQS queue. An EC2 Fleet provides EC2 instances that serve as workers for the SQS queue. The EC2 Fleet scales based on the number of items in the SQS queue.<br>Which combination of steps should the solutions architect recommend to reduce cost the MOST? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BDE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#825",
          "answers": [
            {
              "choice": "<p>A. Determine the minimum number of EC2 instances that are needed during a day. Reserve this number of instances in a 3-year plan with payment all upfront.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Examine the last 6 months of compute utilization across the services. Use this information to determine the needed compute for the solution. Commit to a Savings Plan for this amount.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Determine the average number of EC2 instances that are needed during a day. Reserve this number of instances in a 3-year plan with payment all upfront.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Remove the SQS queue from the solution and from the solution infrastructure.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Change the solution so that it runs as a container instead of on EC2 instances. Configure Lambda to start up the solution in Fargate by using environment variables to give the solution the message.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Change the Lambda function so that it posts the message directly to the EC2 instances through an Application Load Balancer.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 632179,
          "date": "Sat 16 Jul 2022 15:35",
          "username": "asfsdfsdf",
          "content": "I will go withB D E<br>A - Need to use serverless solution<br>B - need compute saving plans for Fargate <br>C - Not needed as the solution will be serverless<br>D - Not needed anymore as we dont use SQS + EC2<br>E - Change EC2 to use fargate and move the data to a task<br>F - No instances are needed",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: BDE"
        },
        {
          "id": 520563,
          "date": "Mon 10 Jan 2022 02:08",
          "username": "vinodkp",
          "content": "Saving plan to save money on fargate containers.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BDE"
        },
        {
          "id": 709912,
          "date": "Wed 02 Nov 2022 16:57",
          "username": "alxjandroleiva",
          "content": "A, C: No payment upfront,<br><br>A.  Determine the minimum number of EC2 instances that are needed during a day. Reserve this number of instances in a 3-year plan with payment all upfront.<br>C.  Determine the average number of EC2 instances that are needed during a day. Reserve this number of instances in a 3-year plan with payment all upfront.<br><br>F: No make sense<br>F.  Change the Lambda function so that it posts the message directly to the EC2 instances through an Application Load Balancer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BDE"
        },
        {
          "id": 625244,
          "date": "Thu 30 Jun 2022 14:26",
          "username": "aandc",
          "content": "B & E are correct, not sure the last one. I go with A",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 621453,
          "date": "Fri 24 Jun 2022 07:22",
          "username": "maximoh",
          "content": "B.  As vinodkp said.<br>D.  As bobsmith2000 said<br>E.  Lambda can define environmental variables on Fargate task on demand creation. https://stackoverflow.com/questions/66261671/environment-variable-setting-for-fargate-task",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BDE"
        },
        {
          "id": 605611,
          "date": "Sun 22 May 2022 18:23",
          "username": "bobsmith2000bobsmith2000",
          "content": "D.  Removing SQS from the solutions will make components tightly coupled which is not going to save any money. <br>E.  To pass any env var to a fargate cotainer it has to be specified in task definition. I can hardly imagine a solution with a task def per request.<br>F.  Posting directly to EC2 through ALB means synchronous request, which will increase num of connection drastically. If they mean asynchronous, then there's a risk of loosing element in case of failure.<br><br>So what we have left is ABCChanged my mind to BDE",
          "upvote_count": "25",
          "selected_answers": "Selected Answer: ABC"
        },
        {
          "id": 612258,
          "date": "Mon 06 Jun 2022 10:30",
          "username": "bobsmith2000",
          "content": "Changed my mind to BDE",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 584884,
          "date": "Tue 12 Apr 2022 21:12",
          "username": "Yamchi",
          "content": "I think A, D, F",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 573779,
          "date": "Wed 23 Mar 2022 17:48",
          "username": "Bigbearcn",
          "content": "remove SQS and EC2 to lower cost.",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#826",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a messaging application that is based on a microservices architecture. A separate team develops each microservice by using Amazon<br>Elastic Container Service (Amazon ECS). The teams deploy the microservices multiple times daily by using AWS CloudFormation and AWS CodePipeline.<br>The application recently grew in size and complexity. Each service operates correctly on its own during development, but each service produces error messages when it has to interact with other services in production. A solutions architect must improve the application's availability.<br>Which solution will meet these requirements with the LEAST amount of operational overhead?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#826",
          "answers": [
            {
              "choice": "<p>A. Add an extra stage to CodePipeline for each service. Use the extra stage to deploy each service to a test environment. Test each service after deployment to make sure that no error messages occur.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add an AWS::CodeDeployBlueGreen Transform section and Hook section to the template to enable blue/green deployments by using AWS CodeDeploy in CloudFormation. Configure the template to perform ECS blue/green deployments in production.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Add an extra stage to CodePipeline for each service. Use the extra stage to deploy each service to a test environment. Write integration tests for each service. Run the tests automatically after deployment.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an ECS DeploymentConfiguration parameter in the template to configure AWS CodeDeploy to perform a rolling update of the service. Use a CircuitBreaker property to roll back the deployment if any error occurs during deployment.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 513869,
          "date": "Fri 31 Dec 2021 05:17",
          "username": "AzureDP900",
          "content": "B is right and easy to revert back incase of any issues with deployment",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 696279,
          "date": "Sun 16 Oct 2022 16:15",
          "username": "wassb",
          "content": "Answer is B.  <br>A : a service can fail when interacting with other service > No availability<br>C : you need to write the integration test > operational overhead<br>D : if the whole deployments fails and you do the rollback it's too late > no availability",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 684421,
          "date": "Sat 01 Oct 2022 20:17",
          "username": "JohnPiJohnPiJohnPi",
          "content": "Add an extra stage to CodePipeline for each service. Use the extra stage to deploy each service to a test environment. Write integration tests for each service. Run the tests automatically after deployment.\\\"C\\\" is a better optionB is more better. Question is care more about avalabiliy.",
          "upvote_count": "221",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 692066,
          "date": "Tue 11 Oct 2022 13:59",
          "username": "JohnPiJohnPi",
          "content": "\\\"C\\\" is a better optionB is more better. Question is care more about avalabiliy.",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 692067,
          "date": "Tue 11 Oct 2022 14:00",
          "username": "JohnPi",
          "content": "B is more better. Question is care more about avalabiliy.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 653561,
          "date": "Mon 29 Aug 2022 18:34",
          "username": "RocketeerRocketeer",
          "content": "I think A is right as it specifies tests to be run after the deployment of services. There is no mention of tests in the blue/green deployment option.After reading the questions again, \\\"C\\\" is a better option than A as the tests are automaticaly run.",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 653562,
          "date": "Mon 29 Aug 2022 18:37",
          "username": "Rocketeer",
          "content": "After reading the questions again, \\\"C\\\" is a better option than A as the tests are automaticaly run.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 632189,
          "date": "Sat 16 Jul 2022 15:53",
          "username": "asfsdfsdf",
          "content": "B will work efficiently:<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/blue-green.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 596699,
          "date": "Wed 04 May 2022 11:49",
          "username": "pankajrawat",
          "content": "B looks good",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 519883,
          "date": "Sun 09 Jan 2022 04:16",
          "username": "frankzengGeniusMikeLiu",
          "content": "C \\\"each service functions successfully on its own during development\\\" means each service works individually, but \\\"when it<br>must communicate with other services in production, each service generates error messages\\\" means getting error with integration. Need to integration test in the pipelineB is more better. Question is care more about avalabiliy.",
          "upvote_count": "42",
          "selected_answers": ""
        },
        {
          "id": 527325,
          "date": "Wed 19 Jan 2022 09:32",
          "username": "GeniusMikeLiu",
          "content": "B is more better. Question is care more about avalabiliy.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 512900,
          "date": "Thu 30 Dec 2021 02:07",
          "username": "notabot2",
          "content": "I go with B",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#827",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A startup company hosts a fleet of Amazon EC2 instances in private subnets using the latest Amazon Linux 2 AMI. The company's engineers rely heavily on SSH access to the instances for troubleshooting.<br>The company's existing architecture includes the following:<br>✑ A VPC with private and public subnets, and a NAT gateway<br>✑ Site-to-Site VPN for connectivity with the on-premises environment<br>✑ EC2 security groups with direct SSH access from the on-premises environment<br>The company needs to increase security controls around SSH access and provide auditing of commands run by the engineers.<br>Which strategy should a solutions architect use?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#827",
          "answers": [
            {
              "choice": "<p>A. Install and configure EC2 Instance Connect on the fleet of EC2 instances. Remove all security group rules attached to EC2 instances that allow inbound TCP on port 22. Advise the engineers to remotely access the instances by using the EC2 Instance Connect CLI.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Update the EC2 security groups to only allow inbound TCP on port 22 to the IP addresses of the engineer's devices. Install the Amazon CloudWatch agent on all EC2 instances and send operating system audit logs to CloudWatch Logs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the EC2 security groups to only allow inbound TCP on port 22 to the IP addresses of the engineer's devices. Enable AWS Config for EC2 security group resource changes. Enable AWS Firewall Manager and apply a security group policy that automatically remediates changes to rules.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM role with the AmazonSSMManagedInstanceCore managed policy attached. Attach the IAM role to all the EC2 instances. Remove all security group rules attached to the EC2 instances that allow inbound TCP on port 22. Have the engineers install the AWS Systems Manager Session Manager plugin for their devices and remotely access the instances by using the start-session API call from Systems Manager.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 716412,
          "date": "Sat 12 Nov 2022 01:59",
          "username": "Nidhin07",
          "content": "Definitely D,we can rely on security group rules to whitelist because engineer count may increase is unknow and not practically possible to restrict with SG when we have more engineers",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 715498,
          "date": "Thu 10 Nov 2022 20:18",
          "username": "mrgreatness",
          "content": "100% its D. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 715393,
          "date": "Thu 10 Nov 2022 17:41",
          "username": "SureNot",
          "content": "Whats wrong with B? The simpliest solution",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 709918,
          "date": "Wed 02 Nov 2022 17:05",
          "username": "alxjandroleiva",
          "content": "B is correct, D is do something that has not been asked of you and that may have more implications in other company processes",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 686510,
          "date": "Wed 05 Oct 2022 03:42",
          "username": "sb333",
          "content": "Allows client machines to be able to connect to Session Manager using the AWS CLI instead of going through the AWS EC2 or AWS Server Manager console.<br><br>https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html<br><br>https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html#:~:text=aws%20ssm%20start%2Dsession%20%2D%2Dtarget%20instance%2Did",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 632196,
          "date": "Sat 16 Jul 2022 16:04",
          "username": "asfsdfsdf",
          "content": "D - audit is being done on SSM level no need for keys or SGs use SSM plugin or AWS CLI to allow connection.<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 602543,
          "date": "Mon 16 May 2022 13:03",
          "username": "bobsmith2000",
          "content": "D for sure",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 589743,
          "date": "Fri 22 Apr 2022 07:06",
          "username": "shailurtm2001user0001Ddssssssbobsmith2000",
          "content": "Answer is DB is right , if you dont have something to back up your option dont answer it .there is nothing session manager you can install , it is already available on every server , and the question asking to use ssh not session managerhttps://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.htmlB is the ancient bull shit. Never do this now.b Use Session Manager instead of bastions<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html",
          "upvote_count": "4112",
          "selected_answers": ""
        },
        {
          "id": 601544,
          "date": "Sat 14 May 2022 13:24",
          "username": "user0001Ddssssssbobsmith2000",
          "content": "B is right , if you dont have something to back up your option dont answer it .there is nothing session manager you can install , it is already available on every server , and the question asking to use ssh not session managerhttps://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.htmlB is the ancient bull shit. Never do this now.b Use Session Manager instead of bastions<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html",
          "upvote_count": "112",
          "selected_answers": ""
        },
        {
          "id": 616353,
          "date": "Tue 14 Jun 2022 20:33",
          "username": "Ddssssss",
          "content": "https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 611096,
          "date": "Fri 03 Jun 2022 15:14",
          "username": "bobsmith2000",
          "content": "B is the ancient bull shit. Never do this now.b Use Session Manager instead of bastions<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#828",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating mobile banking applications to run on Amazon EC2 instances in a VPC.  Backend service applications run in an on-premises data center.<br>The data center has an AWS Direct Connect connection into AWS. The applications that run in the VPC need to resolve DNS requests to an on-premises Active<br>Directory domain that runs in the data center.<br>Which solution will meet these requirements with the LEAST administrative overhead?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#828",
          "answers": [
            {
              "choice": "<p>A. Provision a set of EC2 instances across two Availability Zones in the VPC as caching DNS servers to resolve DNS queries from the application servers within the VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Provision an Amazon Route 53 private hosted zone. Configure NS records that point to on-premises DNS servers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create DNS endpoints by using Amazon Route 53 Resolver Add conditional forwarding rules to resolve DNS namespaces between the on-premises data center and the VPC. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provision a new Active Directory domain controller in the VPC with a bidirectional trust between this new domain and the on-premises Active Directory domain.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 647693,
          "date": "Tue 16 Aug 2022 16:05",
          "username": "Ni_yot",
          "content": "C defo",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 632197,
          "date": "Sat 16 Jul 2022 16:10",
          "username": "asfsdfsdf",
          "content": "Should be C with inbound/outbound rules",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 612739,
          "date": "Tue 07 Jun 2022 13:59",
          "username": "dysan",
          "content": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver-forwarding-outbound-queries.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 589741,
          "date": "Fri 22 Apr 2022 07:05",
          "username": "shailurtm2001",
          "content": "It's C",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#829",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building an image service on the web that will allow users to upload and search random photos. At peak usage, up to 10,000 users worldwide will upload their images. The service will then overlay text on the uploaded images, which will then be published on the company website.<br>Which design should a solutions architect implement?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#829",
          "answers": [
            {
              "choice": "<p>A. Store the uploaded images in Amazon Elastic File System (Amazon EFS). Send application log information about each image to Amazon CloudWatch Logs. Create a fleet of Amazon EC2 instances that use CloudWatch Logs to determine which images need to be processed. Place processed images in another directory in Amazon EFS Enable Amazon CloudFront and configure the origin to be the one of the EC2 instances in the fleet.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Store the uploaded images in an Amazon S3 bucket and configure an S3 bucket event notification to send a message to Amazon Simple Notification Service (Amazon SNS). Create a fleet of Amazon EC2 instances behind an Application Load Balancer (ALB) to pull messages from Amazon SNS to process the images and place them in Amazon Elastic File System (Amazon EFS). Use Amazon CloudWatch metrics for the SNS message volume to scale out EC2 instances. Enable Amazon CloudFront and configure the origin to be the ALB in front of the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Store the uploaded images in an Amazon S3 bucket and configure an S3 bucket event notification to send a message to the Amazon Simple Queue Service (Amazon SQS) queue. Create a fleet of Amazon EC2 instances to pull messages from the SQS queue to process the images and place them in another S3 bucket Use Amazon CloudWatch metrics for queue depth to scale out EC2 instances. Enable Amazon CloudFront and configure the origin to be the S3 bucket that contains the processed images.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Store the uploaded images on a shared Amazon Elastic Block Store (Amazon EBS) volume mounted to a fleet of Amazon EC2 Spot instances. Create an Amazon DynamoDB table that contains information about each uploaded image and whether it has been processed. Use an Amazon EventBridge (Amazon CloudWatch Events) rule to scale out EC2 instances. Enable Amazon CloudFront and configure the origin to reference an Elastic Load Balancer in front of the fleet of EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 591281,
          "date": "Mon 25 Apr 2022 01:08",
          "username": "Bigbearcn",
          "content": "It's easy one. C",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 714959,
          "date": "Thu 10 Nov 2022 07:09",
          "username": "janvandermerwer",
          "content": "c - seems to be the most \\\"likely\\\" option<br>A- EFS will be very expensive for this use case.<br>B - SNS does not appear support native subscriber for ALB. <br>D - As data is stored on EBS volumes, can imagine there is the potential for data loss.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 694193,
          "date": "Thu 13 Oct 2022 20:12",
          "username": "Blair77",
          "content": "Easy! CCC",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 632200,
          "date": "Sat 16 Jul 2022 16:12",
          "username": "asfsdfsdf",
          "content": "C - decoupled application that can have 10,000 or more calls in a seconds, S3+SQS",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 615165,
          "date": "Sun 12 Jun 2022 07:45",
          "username": "Chuky64",
          "content": "C for sure.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 589745,
          "date": "Fri 22 Apr 2022 07:10",
          "username": "shailurtm2001",
          "content": "Correct C",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#830",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a new security policy. The policy requires the company to log any event that retrieves data from Amazon S3 buckets. The company must save these audit logs in a dedicated S3 bucket.<br>The company created the audit logs S3 bucket in an AWS account that is designated for centralized logging. The S3 bucket has a bucket policy that allows write- only cross-account access.<br>A solutions architect must ensure that all S3 object-level access is being logged for current S3 buckets and future S3 buckets.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#830",
          "answers": [
            {
              "choice": "<p>A. Enable server access logging for all current S3 buckets. Use the audit logs S3 bucket as a destination for audit logs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable replication between all current S3 buckets and the audit logs S3 bucket. Enable S3 Versioning in the audit logs S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure S3 Event Notifications for all current S3 buckets to invoke an AWS Lambda function every time objects are accessed. Store Lambda logs in the audit logs S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable AWS CloudTrail, and use the audit logs S3 bucket to store logs. Enable data event logging for S3 event sources, current S3 buckets, and future S3 buckets.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 714952,
          "date": "Thu 10 Nov 2022 06:54",
          "username": "janvandermerwer",
          "content": "D - Is the standard configuration when we deploy environments.<br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/enable-cloudtrail-logging-for-s3.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 695310,
          "date": "Sat 15 Oct 2022 11:12",
          "username": "AwsBRFan",
          "content": "Infact , access logs does not support cross accout log delivery:<br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/logging-with-S3.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 632182,
          "date": "Sat 16 Jul 2022 15:43",
          "username": "asfsdfsdf",
          "content": "only D will force the policy on for future buckets",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 591291,
          "date": "Mon 25 Apr 2022 01:24",
          "username": "BigbearcnBigbearcncaveman712",
          "content": "D is correct.s3 access log don't support cross account log deliveryCloudtrail data event for s3 supports cross account log delivery - https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html#logging-data-events-for-s3-resources-in-other-accounts",
          "upvote_count": "321",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 591678,
          "date": "Mon 25 Apr 2022 14:12",
          "username": "Bigbearcncaveman712",
          "content": "s3 access log don't support cross account log deliveryCloudtrail data event for s3 supports cross account log delivery - https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html#logging-data-events-for-s3-resources-in-other-accounts",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 689885,
          "date": "Sun 09 Oct 2022 04:49",
          "username": "caveman712",
          "content": "Cloudtrail data event for s3 supports cross account log delivery - https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html#logging-data-events-for-s3-resources-in-other-accounts",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#831",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail company is operating its ecommerce application on AWS. The application runs on Amazon EC2 instances behind an Application Load Balancer (ALB).<br>The company uses an Amazon RDS DB instance as the database backend. Amazon CloudFront is configured with one origin that points to the ALB.  Static content is cached. Amazon Route 53 is used to host all public zones.<br>After an update of the application, the ALB occasionally returns a 502 status code (Bad Gateway) error. The root cause is malformed HTTP headers that are returned to the ALB.  The webpage returns successfully when a solutions architect reloads the webpage immediately after the error occurs.<br>While the company is working on the problem, the solutions architect needs to provide a custom error page instead of the standard ALB error page to visitors.<br>Which combination of steps will meet this requirement with the LEAST amount of operational overhead? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#831",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon S3 bucket. Configure the S3 bucket to host a static webpage. Upload the custom error pages to Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon CloudWatch alarm to invoke an AWS Lambda function if the ALB health check response Target FailedHealthChecks is greater than 0. Configure the Lambda function to modify the forwarding rule at the ALB to point to a publicly accessible web server.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the existing Amazon Route 53 records by adding health checks. Configure a fallback target if the health check fails. Modify DNS records to point to a publicly accessible webpage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon CloudWatch alarm to invoke an AWS Lambda function if the ALB health check response Elb.InternalError is greater than 0. Configure the Lambda function to modify the forwarding rule at the ALB to point to a public accessible web server.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Add a custom error response by configuring a CloudFront custom error page. Modify DNS records to point to a publicly accessible web page.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 708810,
          "date": "Tue 01 Nov 2022 04:02",
          "username": "Jonfernz",
          "content": "\\\"Save your custom error pages in a location that is accessible to CloudFront. We recommend that you store them in an Amazon S3 bucket, and that you don’t store them in the same place as the rest of your website or application’s content. If you store the custom error pages on the same origin as your website or application, and the origin starts to return 5xx errors, CloudFront can’t get the custom error pages because the origin server is unavailable.\\\"<br><br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GeneratingCustomErrorResponses.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 692109,
          "date": "Tue 11 Oct 2022 14:41",
          "username": "JohnPiJohnPiNaj_64JohnPiJohnPi",
          "content": "AB<br>ALB 502 means FailedHealthChecks <br>DNS has a TTL and relies on the client's good behavior.AE is the answerNot true. HTTP 502: Bad gateway -- https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-troubleshooting.html#http-502-issueshttps://aws.amazon.com/premiumsupport/knowledge-center/elb-fix-failing-health-checks-alb/furthermore, \\\"The webpage returns successfully when a solutions architect reloads the webpage immediately after the error occurs\\\"",
          "upvote_count": "11111",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 704372,
          "date": "Wed 26 Oct 2022 06:19",
          "username": "JohnPi",
          "content": "AE is the answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 696534,
          "date": "Sun 16 Oct 2022 22:29",
          "username": "Naj_64JohnPi",
          "content": "Not true. HTTP 502: Bad gateway -- https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-troubleshooting.html#http-502-issueshttps://aws.amazon.com/premiumsupport/knowledge-center/elb-fix-failing-health-checks-alb/",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 700810,
          "date": "Fri 21 Oct 2022 13:38",
          "username": "JohnPi",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/elb-fix-failing-health-checks-alb/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 692111,
          "date": "Tue 11 Oct 2022 14:42",
          "username": "JohnPi",
          "content": "furthermore, \\\"The webpage returns successfully when a solutions architect reloads the webpage immediately after the error occurs\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 655023,
          "date": "Wed 31 Aug 2022 13:22",
          "username": "gnic",
          "content": "AE no brain",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 620694,
          "date": "Thu 23 Jun 2022 02:52",
          "username": "rockc",
          "content": "https://aws.amazon.com/blogs/aws/custom-error-pages-and-responses-for-amazon-cloudfront/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 602626,
          "date": "Mon 16 May 2022 16:33",
          "username": "[Removed]",
          "content": "I think DE<br>As in D you need a health-check and lambda mechanism to handle the incident <br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GeneratingCustomErrorResponses.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 600001,
          "date": "Wed 11 May 2022 11:16",
          "username": "titleone",
          "content": "AE<br>C, there is not InternalError type error but InternalFailure. <br>E, CloudFront provides the error page features exactly",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 598738,
          "date": "Mon 09 May 2022 00:14",
          "username": "user0001hfeng95",
          "content": "A/C , you need it only on failure, E does not provide this optionRead the problem, you will see that they would like to have a customized error page while troubleshooting. A&E is correct in my opinion",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 602264,
          "date": "Sun 15 May 2022 21:22",
          "username": "hfeng95",
          "content": "Read the problem, you will see that they would like to have a customized error page while troubleshooting. A&E is correct in my opinion",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 591098,
          "date": "Sun 24 Apr 2022 15:53",
          "username": "Bigbearcn",
          "content": "AE.  Custom error page for CF. ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 590189,
          "date": "Fri 22 Apr 2022 20:18",
          "username": "shailurtm2001",
          "content": "It's AE https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GeneratingCustomErrorResponses.html",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#832",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A large company runs workloads in VPCs that are deployed across hundreds of AWS accounts. Each VPC consists of public subnets and private subnets that span across multiple Availability Zones. NAT gateways are deployed in the public subnets and allow outbound connectivity to the internet from the private subnets.<br>A solutions architect is working on a hub-and-spoke design. All private subnets in the spoke VPCs must route traffic to the internet through an egress VPC.  The solutions architect already has deployed a NAT gateway in an egress VPC in a central AWS account.<br>Which set of additional steps should the solutions architect take to meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#832",
          "answers": [
            {
              "choice": "<p>A. Create peering connections between the egress VPC and the spoke VPCs. Configure the required routing to allow access to the internet.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a transit gateway, and share it with the existing AWS accounts. Attach existing VPCs to the transit gateway. Configure the required routing to allow access to the internet.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a transit gateway in every account. Attach the NAT gateway to the transit gateways. Configure the required routing to allow access to the internet.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS PrivateLink connection between the egress VPC and the spoke VPCs. Configure the required routing to allow access to the internet.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 590197,
          "date": "Fri 22 Apr 2022 20:26",
          "username": "shailurtm2001",
          "content": "B correct https://docs.aws.amazon.com/whitepapers/latest/building-scalable-secure-multi-vpc-network-infrastructure/centralized-egress-to-internet.html",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 668274,
          "date": "Tue 13 Sep 2022 19:22",
          "username": "pixepe",
          "content": "B, Architecture diagram with sequence number for outbound flow (via egress vpc) - https://d1.awsstatic.com/architecture-diagrams/ArchitectureDiagrams/NAT-gateway-centralized-egress-ra.pdf?did=wp_card&trk=wp_card",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 659345,
          "date": "Sun 04 Sep 2022 16:50",
          "username": "Ni_yot",
          "content": "B.  Yes is correct ans",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 632248,
          "date": "Sat 16 Jul 2022 17:59",
          "username": "asfsdfsdf",
          "content": "B is the only correct one since peering is limited to 125",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 623813,
          "date": "Tue 28 Jun 2022 09:32",
          "username": "TechX",
          "content": "it's B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#833",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services company sells its software-as-a-service (SaaS) platform for application compliance to large global banks. The SaaS platform runs on AWS and uses multiple AWS accounts that are managed in an organization in AWS Organizations. The SaaS platform uses many AWS resources globally.<br>For regulatory compliance, all API calls to AWS resources must be audited, tracked for changes, and stored in a durable and secure data store.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#833",
          "answers": [
            {
              "choice": "<p>A. Create a new AWS CloudTrail trail. Use an existing Amazon S3 bucket in the organization's management account to store the logs. Deploy the trail to all AWS Regions. Enable MFA delete and encryption on the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new AWS CloudTrail trail in each member account of the organization. Create new Amazon S3 buckets to store the logs. Deploy the trail to all AWS Regions. Enable MFA delete and encryption on the S3 buckets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new AWS CloudTrail trail in the organization's management account. Create a new Amazon S3 bucket with versioning turned on to store the logs. Deploy the trail for all accounts in the organization. Enable MFA delete and encryption on the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new AWS CloudTrail trail in the organization's management account. Create a new Amazon S3 bucket to store the logs. Configure Amazon Simple Notification Service (Amazon SNS) to send log-file delivery notifications to an external management system that will track the logs. Enable MFA delete and encryption on the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 715782,
          "date": "Fri 11 Nov 2022 06:53",
          "username": "due",
          "content": "S3 version for durable",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 701148,
          "date": "Fri 21 Oct 2022 22:24",
          "username": "vijay1319",
          "content": "tracked for changes == versioning",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 701147,
          "date": "Fri 21 Oct 2022 22:23",
          "username": "vijay1319",
          "content": "tracked for changes == versioning",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 700231,
          "date": "Thu 20 Oct 2022 21:15",
          "username": "redipa",
          "content": "Versioning is required for MFA delete. Answer has to be C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 653583,
          "date": "Mon 29 Aug 2022 19:52",
          "username": "Rocketeer",
          "content": "D seems to be the answer. No need to separately create the train in the member accounts. https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-trail-organization.html",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 632250,
          "date": "Sat 16 Jul 2022 18:03",
          "username": "asfsdfsdf",
          "content": "C - one management trail for all accounts no need to deliver logs for external system (not required in the question)",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 627728,
          "date": "Wed 06 Jul 2022 07:31",
          "username": "aandc",
          "content": "external management system means management overhead",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 604240,
          "date": "Fri 20 May 2022 06:48",
          "username": "solo18",
          "content": "C is correct",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 590203,
          "date": "Fri 22 Apr 2022 20:42",
          "username": "shailurtm2001",
          "content": "D correct.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#834",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail company runs a business-critical web service on an Amazon Elastic Container Service (Amazon ECS) cluster that runs on Amazon EC2 instances. The web service receives POST requests from end users and writes data to a MySQL database that runs on a separate EC2 instance. The company needs to ensure that data loss does not occur.<br>The current code deployment process includes manual updates of the ECS service. During a recent deployment, end users encountered intermittent 502 Bad<br>Gateway errors in response to valid web requests.<br>The company wants to implement a reliable solution to prevent this issue from recurring. The company also wants to automate code deployments. The solution must be highly available and must optimize cost-effectiveness.<br>Which combination of steps will meet these requirements? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#834",
          "answers": [
            {
              "choice": "<p>A. Run the web service on an ECS cluster that has a Fargate launch type. Use AWS CodePipeline and AWS CodeDeploy to perform a blue/green deployment with validation testing to update the ECS service.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the MySQL database to run on an Amazon RDS for MySQL Multi-AZ DB instance that uses Provisioned IOPS SSD (io2) storage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure an Amazon Simple Queue Service (Amazon SQS) queue as an event source to receive the POST requests from the web service. Configure an AWS Lambda function to poll the queue. Write the data to the database.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Run the web service on an ECS cluster that has a Fargate launch type. Use AWS CodePipeline and AWS CodeDeploy to perform a canary deployment to update the ECS service.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Configure an Amazon Simple Queue Service (Amazon SQS) queue. Install the SQS agent on the containers that run in the ECS cluster to poll the queue. Write the data to the database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Migrate the MySQL database to run on an Amazon RDS for MySQL Multi-AZ DB instance that uses General Purpose SSD (gp3) storage.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 672667,
          "date": "Sun 18 Sep 2022 20:21",
          "username": "pinhead900Cloudxie",
          "content": "Since it is a business critical app need Blue-Green with validation, therefore A, canary might cause error for some users.<br>RDS doesnt support GP3 but moving to RDS is essential, therefore B must be right.<br>C to save costs - SQS and LambdaThis makes the new gp3 volumes ideal for a wide variety of applications that require high performance at low cost, including MySQL, Cassandra, virtual desktops, and Hadoop analytics clusters",
          "upvote_count": "51",
          "selected_answers": "Selected Answer: ABC"
        },
        {
          "id": 673953,
          "date": "Tue 20 Sep 2022 10:48",
          "username": "Cloudxie",
          "content": "This makes the new gp3 volumes ideal for a wide variety of applications that require high performance at low cost, including MySQL, Cassandra, virtual desktops, and Hadoop analytics clusters",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 715777,
          "date": "Fri 11 Nov 2022 06:33",
          "username": "Nidhin07",
          "content": "RDS do support gp3 volumes but not on MultiAZ configuration,<br>Blue/Green Deployment over canary so the answer is ABC",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 712533,
          "date": "Sun 06 Nov 2022 18:56",
          "username": "JonfernzJonfernz",
          "content": "It's ACF.  RDS has gp3 now.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.htmlgp3 storage<br>By using General Purpose SSD gp3 storage volumes, you can customize storage performance independently of storage capacity. Storage performance is the combination of I/O operations per second (IOPS) and how fast the storage volume can perform reads and writes (storage throughput). On gp3 storage volumes, Amazon RDS provides a baseline storage performance of 3000 IOPS and 125 MiBps.<br><br>For every RDS DB engine except RDS for SQL Server, when the storage size for gp3 volumes reaches a certain threshold, the baseline storage performance increases to 12,000 IOPS and 500 MiBps. This is because of volume striping, where the storage uses four logical volumes instead of one. RDS for SQL Server doesn't support volume striping, and therefore doesn't have a threshold value.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 712535,
          "date": "Sun 06 Nov 2022 18:57",
          "username": "Jonfernz",
          "content": "gp3 storage<br>By using General Purpose SSD gp3 storage volumes, you can customize storage performance independently of storage capacity. Storage performance is the combination of I/O operations per second (IOPS) and how fast the storage volume can perform reads and writes (storage throughput). On gp3 storage volumes, Amazon RDS provides a baseline storage performance of 3000 IOPS and 125 MiBps.<br><br>For every RDS DB engine except RDS for SQL Server, when the storage size for gp3 volumes reaches a certain threshold, the baseline storage performance increases to 12,000 IOPS and 500 MiBps. This is because of volume striping, where the storage uses four logical volumes instead of one. RDS for SQL Server doesn't support volume striping, and therefore doesn't have a threshold value.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 709734,
          "date": "Wed 02 Nov 2022 10:49",
          "username": "alxjandroleiva",
          "content": "cost-effectiveness",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CDF"
        },
        {
          "id": 706596,
          "date": "Fri 28 Oct 2022 17:55",
          "username": "fais1985",
          "content": "Correct Answer :- ABC<br>A - prevent 502 errors , but expensive<br>B - SupportsGP2, PIOPS & Magnetic Only <br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html<br>C -SQS+ Lambda Cost saving",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 701102,
          "date": "Fri 21 Oct 2022 20:29",
          "username": "Ni_yot",
          "content": "My Choice is ACF",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 687131,
          "date": "Wed 05 Oct 2022 20:27",
          "username": "Blair77Ni_yot",
          "content": "A- Make more sens than Canary to prevent 502 bad gateway - OK<br>B- io2 - not available for RDS MySQL - not OK<br>C- SQS + Lambda > installing SQS agent - OK<br>D-A is a better option for not facing 502 Bad gtw - not OK<br>E- wrong option - not OK<br>F- gp3 - not available for RDS MySQL - not OK<br><br>RDS MySQL actually support only gp2 & io1 storage.<br><br>I can only have two good answer: A & C <br>This is a very difficult one!it does support gp3. - https://aws.amazon.com/blogs/aws/new-amazon-ebs-gp3-volume-lets-you-provision-performance-separate-from-capacity-and-offers-20-lower-price/",
          "upvote_count": "22",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 701101,
          "date": "Fri 21 Oct 2022 20:28",
          "username": "Ni_yot",
          "content": "it does support gp3. - https://aws.amazon.com/blogs/aws/new-amazon-ebs-gp3-volume-lets-you-provision-performance-separate-from-capacity-and-offers-20-lower-price/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 651839,
          "date": "Thu 25 Aug 2022 16:54",
          "username": "kadev",
          "content": "ACF<br>B is wrong: iOPS not cost-effectiveness<br>D is wrong: canary will replace all tasks => could cause 502 err again<br>E:SQS agent is not exist, you need use sdk to build procuder and consumer<br>About F : i think that is a typing errer (General Purpose SSDis clearly but he typo gp3 instead of gp2)",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 651548,
          "date": "Thu 25 Aug 2022 02:29",
          "username": "foureye2004Blair77",
          "content": "ABC because RDS does not support GP3 right nowB - io2 is not available for RDS MySQL...",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: ABC"
        },
        {
          "id": 687135,
          "date": "Wed 05 Oct 2022 20:31",
          "username": "Blair77",
          "content": "B - io2 is not available for RDS MySQL...",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 650283,
          "date": "Mon 22 Aug 2022 14:47",
          "username": "gnic",
          "content": "CDF -> canary deployment, cost-effective",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CDF"
        },
        {
          "id": 632257,
          "date": "Sat 16 Jul 2022 18:18",
          "username": "asfsdfsdf",
          "content": "ACF -<br>The only concern is about D which is more cost effective - however it may cause some users to report errors if.<br>So if its a dependable solution it must be blue/green even its expensive no other choice as the question is not allowing failures.<br>GP3 is + MultAZ will provide good cost effective solution For DB part<br>And SQS will make sure no drop of data - you dont need to install an agent for this if using lambda",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 628549,
          "date": "Fri 08 Jul 2022 02:37",
          "username": "hilfthilftBlair77",
          "content": "A.  You need Blue/Green over Canary for HA.  <br>B.  AWS doesn't recommend GP2/3 for database<br>C.  SQS + Lambda > installing SQS agent<br><br>It's ABCI would go ABC too.<br>gp2 isn't for DBs.Cone on guys, gp2 is exactly for RDS DB!<br>https://aws.amazon.com/fr/blogs/database/best-storage-practices-for-running-production-workloads-on-hosted-databases-with-amazon-rds-or-amazon-ec2/",
          "upvote_count": "221",
          "selected_answers": ""
        },
        {
          "id": 637645,
          "date": "Wed 27 Jul 2022 00:07",
          "username": "hilftBlair77",
          "content": "I would go ABC too.<br>gp2 isn't for DBs.Cone on guys, gp2 is exactly for RDS DB!<br>https://aws.amazon.com/fr/blogs/database/best-storage-practices-for-running-production-workloads-on-hosted-databases-with-amazon-rds-or-amazon-ec2/",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 687139,
          "date": "Wed 05 Oct 2022 20:34",
          "username": "Blair77",
          "content": "Cone on guys, gp2 is exactly for RDS DB!<br>https://aws.amazon.com/fr/blogs/database/best-storage-practices-for-running-production-workloads-on-hosted-databases-with-amazon-rds-or-amazon-ec2/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 625278,
          "date": "Thu 30 Jun 2022 15:20",
          "username": "aandc",
          "content": "CDF.  Canary -> cost effective",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 615505,
          "date": "Sun 12 Jun 2022 23:45",
          "username": "makpkwannaawssb333",
          "content": "ACF. <br>There is a consensus for C. <br>Why A? app is mission critical and question asks for HA.  Blue/Green is gives your much better HA than canary.<br>Why F? - there isn’t anything in question premise that hints towards provisioned IOPS or any issue with IO per se. On the contrary, question asks for cost effectiveness. So, live with GP instead of provisioned IOPS.Consideration is HA + Costs. Canary is also safe for deployment, though as not HA as b/g, while cost wise, it's cheaper. <br>https://aws.amazon.com/about-aws/whats-new/2020/02/amazon-elastic-container-service-support-canary-deployments/<br>https://harness.io/blog/continuous-verification/blue-green-canary-deployment-strategies/The question states that users should not receive errors. With Canary, that is entirely possible. With answer A, it includes testing before switching over to the new deployment.",
          "upvote_count": "111",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 617962,
          "date": "Sat 18 Jun 2022 00:15",
          "username": "wannaawssb333",
          "content": "Consideration is HA + Costs. Canary is also safe for deployment, though as not HA as b/g, while cost wise, it's cheaper. <br>https://aws.amazon.com/about-aws/whats-new/2020/02/amazon-elastic-container-service-support-canary-deployments/<br>https://harness.io/blog/continuous-verification/blue-green-canary-deployment-strategies/The question states that users should not receive errors. With Canary, that is entirely possible. With answer A, it includes testing before switching over to the new deployment.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 686498,
          "date": "Wed 05 Oct 2022 02:22",
          "username": "sb333",
          "content": "The question states that users should not receive errors. With Canary, that is entirely possible. With answer A, it includes testing before switching over to the new deployment.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 612265,
          "date": "Mon 06 Jun 2022 10:41",
          "username": "Jonfernz",
          "content": "Canary over blue/green simply because they want a cost effective solution. With canary, you would use nodes on a smaller scale. So D over A.  Info: https://circleci.com/blog/canary-vs-blue-green-downtime/<br><br>You're gonna need something to pull the data from SQS - Lambda required. And there is no such thing as an SQS agent anyway. So the answer is C. <br><br>As for GP3 vs io2 ...let's think about this. GP3 offers 99.98% durability vs IO2's 99.9999%. But this question wants us to take cost into consideration. So let's calculate the difference in operating costs.<br><br>For a 100GB volume with 16,000 IOPS and 256 MiB/s, gp3 would cost $78 per month (i.e. 0.08*100 + 0.005 * (16000-3000) + 0.04 * (256-125)), and io2 would cost $1052 per month (i.e. 0.125*100 + 0.065*16000.<br><br>For me it's CDF based on the answers given. Although in the real world, you would rarely see Fargate being used because running on EC2 is 1.3 times cheaper.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: CDF"
        },
        {
          "id": 611611,
          "date": "Sun 05 Jun 2022 01:25",
          "username": "hilft",
          "content": "BCD<br><br>B.  AWS recommends faster storage over the general-purpose SSD for DBs. IOPS > GP<br>C.  SQS + Lambda to decouple<br>D.  There seems debate between blue/green vs. Canary. The question is asking for highly accesible and cost-effective solution. Canary > blue/green.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 608428,
          "date": "Sat 28 May 2022 16:39",
          "username": "bogdan_alex",
          "content": "I'll go with ACF",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACF"
        }
      ]
    },
    {
      "question_id": "#835",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has multiple AWS accounts as part of an organization created with AWS Organizations. Each account has a VPC in the us-east-2 Region and is used for either production or development workloads. Amazon EC2 instances across production accounts need to communicate with each other, and EC2 instances across development accounts need to communicate with each other, but production and development instances should not be able to communicate with each other.<br>To facilitate connectivity, the company created a common network account. The company used AWS Transit Gateway to create a transit gateway in the us-east-2<br>Region in the network account and shared the transit gateway with the entire organization by using AWS Resource Access Manager. Network administrators then attached VPCs in each account to the transit gateway, after which the EC2 instances were able to communicate across accounts. However, production and development accounts were also able to communicate with one another.<br>Which set of steps should a solutions architect take to ensure production traffic and development traffic are completely isolated?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#835",
          "answers": [
            {
              "choice": "<p>A. Modify the security groups assigned to development EC2 instances to block traffic from production EC2 instances. Modify the security groups assigned to production EC2 instances to block traffic from development EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a tag on each VPC attachment with a value of either production or development, according to the type of account being attached. Using the Network Manager feature of AWS Transit Gateway, create policies that restrict traffic between VPCs based on the value of this tag.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create separate route tables for production and development traffic. Delete each account's association and route propagation to the default AWS Transit Gateway route table. Attach development VPCs to the development AWS Transit Gateway route table and production VPCs to the production route table, and enable automatic route propagation on each attachment.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a tag on each VPC attachment with a value of either production or development, according to the type of account being attached. Modify the AWS Transit Gateway routing table to route production tagged attachments to one another and development tagged attachments to one another.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 591130,
          "date": "Sun 24 Apr 2022 17:11",
          "username": "Bigbearcn",
          "content": "C is correct. attach different route table.<br>https://aws.amazon.com/cn/blogs/architecture/field-notes-working-with-route-tables-in-aws-transit-gateway/",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 655039,
          "date": "Wed 31 Aug 2022 13:44",
          "username": "gnic",
          "content": "It's C<br>https://docs.aws.amazon.com/vpc/latest/tgw/how-transit-gateways-work.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 632325,
          "date": "Sat 16 Jul 2022 20:40",
          "username": "asfsdfsdf",
          "content": "C is the only correct way to fully segregate between VPCs (different route tables)",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 598615,
          "date": "Sun 08 May 2022 18:24",
          "username": "tartarus23",
          "content": "C.  The production and development route tables and VPC should be disassociated and configured separately using AWS transit gateway then route propagation enabled for the respective VPC attachments.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 590214,
          "date": "Fri 22 Apr 2022 21:15",
          "username": "shailurtm2001",
          "content": "Should be C. ",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#836",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using an Amazon EMR cluster to run its big data jobs. The cluster's jobs are invoked by AWS Step Functions Express Workflows that consume various Amazon Simple Queue Service (Amazon SQS) queues. The workload of this solution is variable and unpredictable. Amazon CloudWatch metrics show that the cluster's peak utilization is only 25% at times and that the cluster sits idle the rest of the time.<br>A solutions architect must optimize the costs of the cluster without negatively impacting the time it takes to run the various jobs.<br>What is the MOST cost-effective solution that meets these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#836",
          "answers": [
            {
              "choice": "<p>A. Modify the EMR cluster by turning on automatic scaling of the core nodes and task nodes with a custom policy that is based on cluster utilization. Purchase Reserved Instance capacity to cover the master node.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Modify the EMR cluster to use an instance fleet of Dedicated On-Demand Instances for the master node and core nodes, and to use Spot Instances for the task nodes. Define target capacity for each node type to cover the load.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Purchase Reserved Instances for the master node and core nodes. Terminate all existing task nodes in the EMR cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the EMR cluster to use capacity-optimized Spot Instances and a diversified task fleet. Define target capacity for each node type with a mix of On- Demand Instances and Spot Instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 651203,
          "date": "Wed 24 Aug 2022 13:15",
          "username": "nyshaa",
          "content": "A.  <br>https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-automatic-scaling.html",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 715804,
          "date": "Fri 11 Nov 2022 07:49",
          "username": "due",
          "content": "cluster's peak utilization is only 25% at times and that the cluster sits idle the rest of the time<br><br>need to optimized",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 700232,
          "date": "Thu 20 Oct 2022 21:15",
          "username": "fdoxxxfdoxxx",
          "content": "The key part of the question is \\\"without negatively impacting the time it takes to run the various jobs.\\\" So Spot Instance for master node seems not to be perfect choice. I am goingfor B.  <br>https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-instances-guidelines.html#emr-dev-master-instance-group-spot:~:text=label%2Dexpression%3A%20%27CORE%27-,Master%20node%20on%20a%20Spot%20Instance,are%20running%20the%20entire%20cluster%20(all%20instance%20groups)%20as%20Spot%20Instances.,-Core%20nodes%20onchanging to A - RI for master node is better than On-Demand",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 700244,
          "date": "Thu 20 Oct 2022 21:25",
          "username": "fdoxxx",
          "content": "changing to A - RI for master node is better than On-Demand",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 695429,
          "date": "Sat 15 Oct 2022 15:39",
          "username": "AwsBRFan",
          "content": "https://aws.amazon.com/blogs/big-data/optimizing-amazon-emr-for-resilience-and-cost-with-capacity-optimized-spot-instances/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 689057,
          "date": "Sat 08 Oct 2022 07:56",
          "username": "skywalker",
          "content": "A<br>https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-scale-on-demand.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 659409,
          "date": "Sun 04 Sep 2022 18:52",
          "username": "Ni_yot",
          "content": "I also thinks its A. Automatic scaling with a custom policy in Amazon EMR release versions 4.0 and later allows you to programmatically scale out and scale in core nodes and task nodes based on a CloudWatch metric and other parameters that you specify in a scaling policy. Automatic scaling with a custom policy is available with the instance groups configuration and is not available when you use instance fleets. For more information about instance groups and instance fleets, see Create a cluster with instance fleets or uniform instance groups.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 649846,
          "date": "Sun 21 Aug 2022 19:31",
          "username": "asfsdfsdf",
          "content": "B for me",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 646791,
          "date": "Sun 14 Aug 2022 17:17",
          "username": "Harithareddynn",
          "content": "Between B and D, You cannot use spot for master hence B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 639483,
          "date": "Sat 30 Jul 2022 07:33",
          "username": "cen007",
          "content": "Reserved Or Dedicated for master node, spot for task nodes",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 632557,
          "date": "Sun 17 Jul 2022 14:57",
          "username": "EnigmaaaaaaEnigmaaaaaa",
          "content": "Will go with D due to the below:<br>https://aws.amazon.com/blogs/big-data/strategies-for-reducing-your-amazon-emr-costs/<br>https://aws.amazon.com/blogs/big-data/optimizing-amazon-emr-for-resilience-and-cost-with-capacity-optimized-spot-instances/<br>The correct is answer is a combining bothA and D since the question asks for \\\"minimizing the time required to perform numerous workloads\\\" it has to be D. <br>https://aws.amazon.com/blogs/big-data/best-practices-for-resizing-and-automatic-scaling-in-amazon-emr/Changing to A. <br>You cant define mix of on-demand and spot to master node type",
          "upvote_count": "23",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 632946,
          "date": "Mon 18 Jul 2022 11:06",
          "username": "Enigmaaaaaa",
          "content": "Changing to A. <br>You cant define mix of on-demand and spot to master node type",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 618037,
          "date": "Sat 18 Jun 2022 03:39",
          "username": "wannaaws",
          "content": "https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-fleet.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 591173,
          "date": "Sun 24 Apr 2022 19:12",
          "username": "BigbearcnpixepepixepepixepeBigbearcn",
          "content": "D is ok. <br>https://aws.amazon.com/blogs/big-data/optimizing-amazon-emr-for-resilience-and-cost-with-capacity-optimized-spot-instances/Seems D is correct based on link https://aws.amazon.com/blogs/big-data/optimizing-amazon-emr-for-resilience-and-cost-with-capacity-optimized-spot-instances/Correction:<br>B makes more sense; as task nodes are Spot instances (and remember that task nodes are stateless)D is incorrect, because master node can either be OnDemand or Spot instance, But NOT a MIX of it - Requirement (Define target capacity for each node type with a mix of On- Demand Instances and Spot Instances. Most Voted)Correcting it to A<br>The workload of this solution is variable and unpredictable => We need auto-scaling.<br>If they have mentioned EMR managed scaling for B, than only B would have been better. In B there is no mention of scaling, <br><br>So answer is AA auto scaling is also workable. but auto scaling need instance group that each node type (master, core, or task) consists of the same instance type and the same purchasing option for instances:On-Demand or Spot. To optimizing cost, D is better.",
          "upvote_count": "21113",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 659672,
          "date": "Mon 05 Sep 2022 04:13",
          "username": "pixepepixepepixepe",
          "content": "Seems D is correct based on link https://aws.amazon.com/blogs/big-data/optimizing-amazon-emr-for-resilience-and-cost-with-capacity-optimized-spot-instances/Correction:<br>B makes more sense; as task nodes are Spot instances (and remember that task nodes are stateless)D is incorrect, because master node can either be OnDemand or Spot instance, But NOT a MIX of it - Requirement (Define target capacity for each node type with a mix of On- Demand Instances and Spot Instances. Most Voted)Correcting it to A<br>The workload of this solution is variable and unpredictable => We need auto-scaling.<br>If they have mentioned EMR managed scaling for B, than only B would have been better. In B there is no mention of scaling, <br><br>So answer is A",
          "upvote_count": "111",
          "selected_answers": ""
        },
        {
          "id": 667855,
          "date": "Tue 13 Sep 2022 12:15",
          "username": "pixepepixepe",
          "content": "Correction:<br>B makes more sense; as task nodes are Spot instances (and remember that task nodes are stateless)D is incorrect, because master node can either be OnDemand or Spot instance, But NOT a MIX of it - Requirement (Define target capacity for each node type with a mix of On- Demand Instances and Spot Instances. Most Voted)Correcting it to A<br>The workload of this solution is variable and unpredictable => We need auto-scaling.<br>If they have mentioned EMR managed scaling for B, than only B would have been better. In B there is no mention of scaling, <br><br>So answer is A",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 695335,
          "date": "Sat 15 Oct 2022 12:21",
          "username": "pixepe",
          "content": "Correcting it to A<br>The workload of this solution is variable and unpredictable => We need auto-scaling.<br>If they have mentioned EMR managed scaling for B, than only B would have been better. In B there is no mention of scaling, <br><br>So answer is A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 591179,
          "date": "Sun 24 Apr 2022 19:16",
          "username": "Bigbearcn",
          "content": "A auto scaling is also workable. but auto scaling need instance group that each node type (master, core, or task) consists of the same instance type and the same purchasing option for instances:On-Demand or Spot. To optimizing cost, D is better.",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#837",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to establish a connection from its on-premises data center to AWS. The company needs to connect all of its VPCs that are located in different<br>AWS Regions with transitive routing capabilities between VPC networks. The company also must reduce network outbound traffic costs, increase bandwidth throughput, and provide a consistent network experience for end users.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#837",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Site-to-Site VPN connection between the on-premises data center and a new central VPC.  Create VPC peering connections that initiate from the central VPC to all other VPCs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Direct Connect connection between the on-premises data center and AWS. Provision a transit VIF, and connect it to a Direct Connect gateway. Connect the Direct Connect gateway to all the other VPCs by using a transit gateway in each Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Site-to-Site VPN connection between the on-premises data center and a new central VPC.  Use a transit gateway with dynamic routing. Connect the transit gateway to all other VPCs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Direct Connect connection between the on-premises data center and AWS. Establish an AWS Site-to-Site VPN connection between all VPCs in each Region. Create VPC peering connections that initiate from the central VPC to all other VPCs.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 591186,
          "date": "Sun 24 Apr 2022 19:38",
          "username": "Bigbearcnuser0001",
          "content": "I'll go for B.  VPCs in multiple region needs TGW in each region to connect.true , you need transit gateway to connect between regions",
          "upvote_count": "71",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 597906,
          "date": "Sat 07 May 2022 00:46",
          "username": "user0001",
          "content": "true , you need transit gateway to connect between regions",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 632558,
          "date": "Sun 17 Jul 2022 15:05",
          "username": "Enigmaaaaaa",
          "content": "Transit GW+ Direct Connect GW + Transit VIF + enabled SiteLink if two different DX locations<br>https://aws.amazon.com/blogs/networking-and-content-delivery/introducing-aws-direct-connect-sitelink/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 631710,
          "date": "Fri 15 Jul 2022 13:15",
          "username": "CloudHandsOnCloudHandsOn",
          "content": "First answer I came to was B.  One requirement of 'boost bandwidth throughput' sort of eliminated 3 of them for me, when comparing VPN to Direct Connect.Eliminated 2* of the answers.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 631711,
          "date": "Fri 15 Jul 2022 13:17",
          "username": "CloudHandsOn",
          "content": "Eliminated 2* of the answers.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 593249,
          "date": "Wed 27 Apr 2022 16:55",
          "username": "bobsmith2000bobsmith2000",
          "content": "There are three stipulations we must meet:<br>- transitive routing<br>- cut network outbound traffic expenditures<br>- boost bandwidth throughput.<br>So first a transit gateway would cover, two other - correct correct<br>So it's B. So first a transit gateway would cover, two other - direct connect",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 593250,
          "date": "Wed 27 Apr 2022 16:56",
          "username": "bobsmith2000",
          "content": "So first a transit gateway would cover, two other - direct connect",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#838",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A media company uses Amazon DynamoDB to store metadata for its catalog of movies that are available to stream. Each media item contains user-facing content that includes a description of the media, a list of searchable tags, and other similar data. In addition, media items include a list of Amazon S3 key names that relate to movie files. The company stores these movie files in a single S3 bucket that has versioning enabled. The company uses Amazon CloudFront to serve these movie files.<br>The company has 100,000 media items, and each media item can have many different S3 objects that represent different encodings of the same media. S3 objects that belong to the same media item are grouped together under the same key prefix, which is a random unique ID. <br>Because of an expiring contract with a media provider, the company must remove 2,000 media items. The company must completely delete all DynamoDB keys and movie files on Amazon S3 that are related to these media items within 36 hours. The company must ensure that the content cannot be recovered.<br>Which combination of actions will meet these requirements? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#838",
          "answers": [
            {
              "choice": "<p>A. Configure the DynamoDB table with a TTL field. Create and invoke an AWS Lambda function to perform a conditional update. Set the TTL field to the time of the contract's expiration on every affected media item.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure an S3 Lifecycle object expiration rule that is based on the contract's expiration date.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Write a script to perform a conditional delete on all the affected DynamoDB records.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Temporarily suspend versioning on the S3 bucket. Create and invoke an AWS Lambda function that deletes affected objects. Reactivate versioning when the operation is complete.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Write a script to delete objects from Amazon S3. Specify in each request a NoncurrentVersionExpiration property with a NoncurrentDays attribute set to 0.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 591187,
          "date": "Sun 24 Apr 2022 19:46",
          "username": "BigbearcnBigbearcn",
          "content": "AB is okA and D. ",
          "upvote_count": "83",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 591311,
          "date": "Mon 25 Apr 2022 02:13",
          "username": "Bigbearcn",
          "content": "A and D. ",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 686241,
          "date": "Tue 04 Oct 2022 16:16",
          "username": "sb333sb333",
          "content": "B - You can expire objects in S3 based on the prefix. Since movies are stored under their own prefixes in S3, you can delete both current and previous versions of the objects.<br>C - Conditional deletes are useful for deleting items only if specific conditions are met. If those conditions are met, DynamoDB performs the delete. Running a script to perform this one-time action is completely acceptable.D would not be correct as turning off versioning does not change the behavior of deleting versioned objects in the S3 bucket. https://docs.aws.amazon.com/AmazonS3/latest/userguide/DeletingObjectsfromVersioningSuspendedBuckets.html",
          "upvote_count": "51",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 686242,
          "date": "Tue 04 Oct 2022 16:18",
          "username": "sb333",
          "content": "D would not be correct as turning off versioning does not change the behavior of deleting versioned objects in the S3 bucket. https://docs.aws.amazon.com/AmazonS3/latest/userguide/DeletingObjectsfromVersioningSuspendedBuckets.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 715542,
          "date": "Thu 10 Nov 2022 21:16",
          "username": "mrgreatness",
          "content": "Why A is wrong: https://bibhuticoder.medium.com/beware-of-dynamodb-ttl-e4537be8c269#:~:text=DynamoDB%20typically%20deletes%20expired%20items,reads%2C%20queries%2C%20and%20scans.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 715541,
          "date": "Thu 10 Nov 2022 21:16",
          "username": "mrgreatness",
          "content": "Final Answer CD - I spent time reading lots of docs. Summary: A - won't work TTL requires 48 hours. B Won't work as previous versions can't be deleted. C will work. D Makes sense. E won't work as this only deleted non current. so CD",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 715536,
          "date": "Thu 10 Nov 2022 21:09",
          "username": "mrgreatness",
          "content": "A won't work: \\\"DynamoDB typically deletes expired items within 48 hours of expiration. The exact duration within which an item truly gets deleted after expiration is specific to the nature of the workload and the size of the table. Items that have expired and not been deleted will still show up in reads, queries, and scans.\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 715534,
          "date": "Thu 10 Nov 2022 21:05",
          "username": "mrgreatness",
          "content": "B won't work \\\"The Expiration action applies only to the current version (it has no impact on noncurrent object versions).\\\" see https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html#intro-lifecycle-rules-actions -- so the old versions won't be deleted",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 714484,
          "date": "Wed 09 Nov 2022 11:48",
          "username": "sou123454",
          "content": "CD is the answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 701360,
          "date": "Sat 22 Oct 2022 08:17",
          "username": "Vinafec",
          "content": "C, D<br>A: Won't work, not fast enough. TTL can take up to 48 hours: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/howitworks-ttl.html<br>B: Won't work, deletion doesn't really delete unless you suspend versioning: https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html<br><br>E: Frankly I am too lazy to figure out what that means, C and D look good enough.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 701256,
          "date": "Sat 22 Oct 2022 03:17",
          "username": "jinny21",
          "content": "B and C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 696412,
          "date": "Sun 16 Oct 2022 19:14",
          "username": "wassb",
          "content": "It's a TTL field not the DynamoDB TTL feature !!!!!!",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 692272,
          "date": "Tue 11 Oct 2022 18:48",
          "username": "JohnPiJohnPi",
          "content": "I vote A + Bchange to BC",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 700868,
          "date": "Fri 21 Oct 2022 14:41",
          "username": "JohnPi",
          "content": "change to BC",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 692156,
          "date": "Tue 11 Oct 2022 15:49",
          "username": "karanbhasin",
          "content": "B and C.  <br>DDB TTL typically deletes expired items within 48 hours of expiration. So, A won't work. <br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/howitworks-ttl.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 691628,
          "date": "Tue 11 Oct 2022 02:51",
          "username": "skywalker",
          "content": "A & Bis my choice.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 673994,
          "date": "Tue 20 Sep 2022 11:40",
          "username": "Cloudxie",
          "content": "B and C",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 636019,
          "date": "Sun 24 Jul 2022 13:36",
          "username": "CloudHandsOnCloudHandsOn",
          "content": "A, B was my answer.Changed to C,D",
          "upvote_count": "31",
          "selected_answers": ""
        },
        {
          "id": 636020,
          "date": "Sun 24 Jul 2022 13:39",
          "username": "CloudHandsOn",
          "content": "Changed to C,D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 633131,
          "date": "Mon 18 Jul 2022 20:47",
          "username": "JonnyB1001wassb",
          "content": "A is wrong, so C for dealing with the Dynamo table<br>B doesn't deal with versioning<br>D looks OK<br>E is incorrect as Noncurrentdays must be >0<br>https://docs.aws.amazon.com/AmazonS3/latest/API/API_NoncurrentVersionExpiration.html<br>So C & D are correctThanks for pointing out that Noncurrentdays must be > 0.",
          "upvote_count": "41",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 696411,
          "date": "Sun 16 Oct 2022 19:12",
          "username": "wassb",
          "content": "Thanks for pointing out that Noncurrentdays must be > 0.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 632637,
          "date": "Sun 17 Jul 2022 19:28",
          "username": "asfsdfsdfasfsdfsdfasfsdfsdf",
          "content": "Very tricky question . have to vote for CE<br>A - \\\"TTL typically deletes expired items within 48 hours of expiration.\\\" so its not a valid answer<br>B - Need to set object expiration for both current and noncurrent object including all versions so this answer is incorrect<br>C - Possible - not cost effective it will need write throughput.<br>D - It will not delete non-current versions of objects so this answer is wrong<br>E - can work the only issue is that noncurrent days cant bet set with 0 \\\"The value must be a non-zero positive integer.\\\" it will work with 1 (24 hours)<br>So only valid answer is here is C I believe either B was supposed to be with noncurrent versions or E should be with 1After reviewing this:<br>https://aws.amazon.com/premiumsupport/knowledge-center/s3-empty-bucket-lifecycle-rule/<br>Changing E to B for sure - with the above rule all objects in the buckets will become non-current immediately and after 1 day will be completely deleted<br>The only Valid answers are B and CSince I cant edit above answer the idea is to set the lifecycle rule using a prefix and not the whole bucket:<br>\\\"<br>To apply this lifecycle rule to all objects with a specific prefix or tag, choose Limit the scope to specific prefixes or tags.<br>To limit the scope by prefix, in Prefix, enter the prefix.\\\"<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/how-to-set-lifecycle-configuration-intro.html",
          "upvote_count": "332",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 632640,
          "date": "Sun 17 Jul 2022 19:37",
          "username": "asfsdfsdfasfsdfsdf",
          "content": "After reviewing this:<br>https://aws.amazon.com/premiumsupport/knowledge-center/s3-empty-bucket-lifecycle-rule/<br>Changing E to B for sure - with the above rule all objects in the buckets will become non-current immediately and after 1 day will be completely deleted<br>The only Valid answers are B and CSince I cant edit above answer the idea is to set the lifecycle rule using a prefix and not the whole bucket:<br>\\\"<br>To apply this lifecycle rule to all objects with a specific prefix or tag, choose Limit the scope to specific prefixes or tags.<br>To limit the scope by prefix, in Prefix, enter the prefix.\\\"<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/how-to-set-lifecycle-configuration-intro.html",
          "upvote_count": "32",
          "selected_answers": ""
        },
        {
          "id": 632643,
          "date": "Sun 17 Jul 2022 19:44",
          "username": "asfsdfsdf",
          "content": "Since I cant edit above answer the idea is to set the lifecycle rule using a prefix and not the whole bucket:<br>\\\"<br>To apply this lifecycle rule to all objects with a specific prefix or tag, choose Limit the scope to specific prefixes or tags.<br>To limit the scope by prefix, in Prefix, enter the prefix.\\\"<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/how-to-set-lifecycle-configuration-intro.html",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#839",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is importing a VM from an on-premises environment by using the Amazon EC2 VM Import feature of AWS Import/Export. The solutions architect has created an AMI and has provisioned an Amazon EC2 instance that is based on that AMI. The EC2 instance runs inside a public subnet in a VPC and has a public IP address assigned.<br>The EC2 instance does not appear as a managed instance in the AWS Systems Manager console.<br>Which combination of steps should the solutions architect take to troubleshoot this issue? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#839",
          "answers": [
            {
              "choice": "<p>A. Verify that Systems Manager Agent is installed on the instance and is running<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Verify that the instance is assigned an appropriate IAM role for Systems Manager.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Verify the existence of a VPC endpoint on the VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Verify that the AWS Application Discovery Agent is configured.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Verify the correct configuration of service-linked roles for Systems Manager.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 590237,
          "date": "Fri 22 Apr 2022 22:36",
          "username": "shailurtm2001",
          "content": "A & B https://aws.amazon.com/premiumsupport/knowledge-center/systems-manager-ec2-instance-not-appear/",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 632644,
          "date": "Sun 17 Jul 2022 19:47",
          "username": "asfsdfsdf",
          "content": "AB - No need an endpoint its in a public subnet",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 632032,
          "date": "Sat 16 Jul 2022 09:01",
          "username": "punj",
          "content": "Definitely A&B.  there is an additional need of ec2, ssm and ssmmessages endpoint as well",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 621818,
          "date": "Fri 24 Jun 2022 20:33",
          "username": "naiduveerendra",
          "content": "AB is answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 591189,
          "date": "Sun 24 Apr 2022 20:02",
          "username": "Bigbearcn",
          "content": "AB is ok.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AB"
        }
      ]
    },
    {
      "question_id": "#840",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a containerized application in the AWS Cloud. The application is running by using Amazon Elastic Container Service (Amazon ECS) on a set of Amazon EC2 instances. The EC2 instances run in an Auto Scaling group.<br>The company uses Amazon Elastic Container Registry (Amazon ECR) to store its container images. When a new image version is uploaded, the new image version receives a unique tag.<br>The company needs a solution that inspects new image versions for common vulnerabilities and exposures. The solution must automatically delete new image tags that have Critical or High severity findings. The solution also must notify the development team when such a deletion occurs.<br>Which solution meets these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#840",
          "answers": [
            {
              "choice": "<p>A. Configure scan on push on the repository. Use Amazon EventBridge (Amazon CloudWatch Events) to invoke an AWS Step Functions state machine when a scan is complete for images that have Critical or High severity findings. Use the Step Functions state machine to delete the image tag for those images and to notify the development team through Amazon Simple Notification Service (Amazon SNS).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure scan on push on the repository. Configure scan results to be pushed to an Amazon Simple Queue Service (Amazon SQS) queue. Invoke an AWS Lambda function when a new message is added to the SQS queue. Use the Lambda function to delete the image tag for images that have Critical or High severity findings. Notify the development team by using Amazon Simple Email Service (Amazon SES).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Schedule an AWS Lambda function to start a manual image scan every hour. Configure Amazon EventBridge (Amazon CloudWatch Events) to invoke another Lambda function when a scan is complete. Use the second Lambda function to delete the image tag for images that have Critical or High severity findings. Notify the development team by using Amazon Simple Notification Service (Amazon SNS).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure periodic image scan on the repository. Configure scan results to be added to an Amazon Simple Queue Service (Amazon SQS) queue. Invoke an AWS Step Functions state machine when a new message is added to the SQS queue. Use the Step Functions state machine to delete the image tag for images that have Critical or High severity findings. Notify the development team by using Amazon Simple Email Service (Amazon SES).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 630232,
          "date": "Tue 12 Jul 2022 01:24",
          "username": "jyrajan69sb333",
          "content": "First of all this is ECR so you can enable scan on push, eliminating answers C and D.  So between A and B, answer A, Step Functions is a Work Flow service, it can call up other services, but the answer here indicates that StepFunctions is doing something, so I will have to go with BAnswer B suggests using Amazon SES for notifications. That's the wrong service and should instead use Amazon SNS. Answer A has all the correct parts. The Step Function is the mechanism used to coordinate the effort to both remove the image tag and notify the developers through SNS. The details of exactly what is used to remove the image tag really isn't necessary. It's like saying CodePipeline is used to deploy an application. That can be a correct statement without going into the details of exactly what is part of that pipeline.",
          "upvote_count": "66",
          "selected_answers": ""
        },
        {
          "id": 685929,
          "date": "Tue 04 Oct 2022 07:01",
          "username": "sb333",
          "content": "Answer B suggests using Amazon SES for notifications. That's the wrong service and should instead use Amazon SNS. Answer A has all the correct parts. The Step Function is the mechanism used to coordinate the effort to both remove the image tag and notify the developers through SNS. The details of exactly what is used to remove the image tag really isn't necessary. It's like saying CodePipeline is used to deploy an application. That can be a correct statement without going into the details of exactly what is part of that pipeline.",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 632648,
          "date": "Sun 17 Jul 2022 19:53",
          "username": "asfsdfsdf",
          "content": "A - ECR scans supports only eventbridge<br> https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html#scanning-repository",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 715065,
          "date": "Thu 10 Nov 2022 09:58",
          "username": "janvandermerwer",
          "content": "A - Yes - Appears to be the best option.<br>B - Could potentially work - however seems overly complex, also set to use SES - Which is the wrong productfor this scenario.<br>C - no - requirement states new images and this does not allow for images to be scanned when uploaded to the register.<br>D - No - Overly complex.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 695448,
          "date": "Sat 15 Oct 2022 16:03",
          "username": "AwsBRFan",
          "content": "confused by A<br>https://docs.aws.amazon.com/AmazonECR/latest/userguide/ecr-eventbridge.html<br>\\\"Activating an AWS Step Functions state machine\\\"<br><br>https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-creating-lambda-state-machine.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 689062,
          "date": "Sat 08 Oct 2022 08:05",
          "username": "skywalker",
          "content": "B. . as Step Functions is a workflow and don't work here.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 643419,
          "date": "Sat 06 Aug 2022 16:03",
          "username": "sidweedRocketeerRocketeer",
          "content": "step functions cannot perform actions. they can only coordinate. So A is wrong.<br>B is correct.Step functions can invoke lambdas or other actionsI would prefer event bridge than SQS and it is serverless.",
          "upvote_count": "411",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 655106,
          "date": "Wed 31 Aug 2022 15:18",
          "username": "RocketeerRocketeer",
          "content": "Step functions can invoke lambdas or other actionsI would prefer event bridge than SQS and it is serverless.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 655108,
          "date": "Wed 31 Aug 2022 15:19",
          "username": "Rocketeer",
          "content": "I would prefer event bridge than SQS and it is serverless.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 607834,
          "date": "Fri 27 May 2022 02:12",
          "username": "michaelbaib",
          "content": "why C is wrong?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 595613,
          "date": "Sun 01 May 2022 15:31",
          "username": "pankajrawat",
          "content": "A is realtime",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 595459,
          "date": "Sun 01 May 2022 08:16",
          "username": "snakecharmer2",
          "content": "A - the scan result is sent to EventBridge, there is no support for Lambda today",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 590239,
          "date": "Fri 22 Apr 2022 22:47",
          "username": "shailurtm2001",
          "content": "I'll go for A.  https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html#scanning-repository",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#841",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running an application in the AWS Cloud. The application consists of microservices that run on a fleet of Amazon EC2 instances in multiple<br>Availability Zones behind an Application Load Balancer. The company recently added a new REST API that was implemented in Amazon API Gateway. Some of the older microservices that run on EC2 instances need to call this new API.<br>The company does not want the API to be accessible from the public internet and does not want proprietary data to traverse the public internet.<br>What should a solutions architect do to meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#841",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Site-to-Site VPN connection between the VPC and the API Gateway. Use API Gateway to generate a unique API key for each microservice. Configure the API methods to require the key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an interface VPC endpoint for API Gateway, and set an endpoint policy to only allow access to the specific API. Add a resource policy to API Gateway to only allow access from the VPC endpoint. Change the API Gateway endpoint type to private.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the API Gateway to use IAM authentication Update the IAM policy for the IAM role that is assigned to the EC2 instances to allow access to the API Gateway Move the API Gateway into a new VPC.  Deploy a transit gateway and connect the VPCs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an accelerator in AWS Global Accelerator, and connect the accelerator to the API Gateway. Update the route table for all VPC subnets with a route to the created Global Accelerator endpoint IP address. Add an API key for each service to use for authentication.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 590241,
          "date": "Fri 22 Apr 2022 22:52",
          "username": "shailurtm2001",
          "content": "B is correct https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-vpc-endpoint-policies.html",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 701368,
          "date": "Sat 22 Oct 2022 08:49",
          "username": "Ni_yot",
          "content": "B is correct. Private interface is what is needed here",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 635794,
          "date": "Sun 24 Jul 2022 01:07",
          "username": "hilft",
          "content": "Ignore A,D. <br>The keyword here is \\\"an interface VPC endpoint for API Gateway\\\"<br>B.  is the correct answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 590820,
          "date": "Sun 24 Apr 2022 00:47",
          "username": "Bigbearcn",
          "content": "B is correct.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#842",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A mobile gaming company is expanding into the global market. The company's game servers run in the us-east-1 Region. The game's client application uses UDP to communicate with the game servers and needs to be able to connect to a set of static IP addresses.<br>The company wants its game to be accessible on multiple continents. The company also wants the game to maintain its network performance and global availability.<br>Which solution meets these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#842",
          "answers": [
            {
              "choice": "<p>A. Provision an Application Load Balancer (ALB) in front of the game servers. Create an Amazon CloudFront distribution that has no geographical restrictions. Set the ALB as the origin. Perform DNS lookups for the cloudfront.net domain name. Use the resulting IP addresses in the game's client application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Provision game servers in each AWS Region. Provision an Application Load Balancer in front of the game servers. Create an Amazon Route 53 latency-based routing policy for the game's client application to use with DNS lookups.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Provision game servers in each AWS Region. Provision a Network Load Balancer (NLB) in front of the game servers. Create an accelerator in AWS Global Accelerator, and configure endpoint groups in each Region. Associate the NLBs with the corresponding Regional endpoint groups. Point the game client's application to the Global Accelerator endpoints.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provision game servers in each AWS Region. Provision a Network Load Balancer (NLB) in front of the game servers. Create an Amazon CloudFront distribution that has no geographical restrictions. Set the NLB as the origin. Perform DNS lookups for the cloudfront.net domain name. Use the resulting IP addresses in the game's client application.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 607941,
          "date": "Fri 27 May 2022 08:23",
          "username": "bobsmith2000",
          "content": "No-brainer. UDP, global usage - AWS Global Accelerator.<br>Right by the book.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 701372,
          "date": "Sat 22 Oct 2022 08:54",
          "username": "Ni_yot",
          "content": "C is correct. AWS Global Accelerator is a networking service that helps you improve the availability and performance of the applications that you offer to your global users. AWS Global Accelerator is easy to set up, configure, and manage. It provides static IP addresses that provide a fixed entry point to your applications and eliminate the complexity of managing specific IP addresses for different AWS Regions and Availability Zones. AWS Global Accelerator always routes user traffic to the optimal endpoint based on performance, reacting instantly to changes in application health, your user’s location, and policies that you configure",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 603304,
          "date": "Wed 18 May 2022 15:24",
          "username": "LiamNg",
          "content": "Answer: C, even the reference is about Global Accelerator",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 590821,
          "date": "Sun 24 Apr 2022 00:51",
          "username": "Bigbearcn",
          "content": "C is correct.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 590243,
          "date": "Fri 22 Apr 2022 22:59",
          "username": "shailurtm2001",
          "content": "I'll go for C",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#843",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using an on-premises Active Directory service for user authentication. The company wants to use the same authentication service to sign in to the company's AWS accounts, which are using AWS Organizations. AWS Site-to-Site VPN connectivity already exists between the on-premises environment and all the company's AWS accounts.<br>The company's security policy requires conditional access to the accounts based on user groups and roles. User identities must be managed in a single location.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#843",
          "answers": [
            {
              "choice": "<p>A. Configure AWS Single Sign-On (AWS SSO) to connect to Active Directory by using SAML 2.0. Enable automatic provisioning by using the System for Cross- domain Identity Management (SCIM) v2.0 protocol. Grant access to the AWS accounts by using attribute-based access controls (ABACs).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure AWS Single Sign-On (AWS SSO) by using AWS SSO as an identity source. Enable automatic provisioning by using the System for Cross-domain Identity Management (SCIM) v2.0 protocol. Grant access to the AWS accounts by using AWS SSO permission sets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. In one of the company's AWS accounts, configure AWS Identity and Access Management (IAM) to use a SAML 2.0 identity provider. Provision IAM users that are mapped to the federated users. Grant access that corresponds to appropriate groups in Active Directory. Grant access to the required AWS accounts by using cross-account IAM users.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. In one of the company's AWS accounts, configure AWS Identity and Access Management (IAM) to use an OpenID Connect (OIDC) identity provider. Provision IAM roles that grant access to the AWS account for the federated users that correspond to appropriate groups in Active Directory. Grant access to the required AWS accounts by using cross-account IAM roles.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 689064,
          "date": "Sat 08 Oct 2022 08:10",
          "username": "skywalker",
          "content": "A<br><br>https://aws.amazon.com/blogs/aws/new-attributes-based-access-control-with-aws-single-sign-on/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 686543,
          "date": "Wed 05 Oct 2022 05:21",
          "username": "dcdcdc3",
          "content": "AD connector is needed at any option.. or 3rd party IDP<br>https://getstarted.awsworkshop.io/05-optional/02-federated-access-to-aws/03-aws-sso-ad.html<br>something /words may be missing from the answers<br>D seems to be 95% correct except the One Account deployment",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 656893,
          "date": "Fri 02 Sep 2022 04:58",
          "username": "daiditenan",
          "content": "active directory does not support SCIM at this point. Azure AD does, but it's not mentioned<br>https://docs.aws.amazon.com/singlesignon/latest/userguide/supported-idps.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 647375,
          "date": "Tue 16 Aug 2022 00:23",
          "username": "jxl_harry",
          "content": "I choose A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 632177,
          "date": "Sat 16 Jul 2022 15:21",
          "username": "Student1950",
          "content": "correction: will go with D since Active Directory > MS Active Directory as per options displayed while configuring AWS SSO.<br>https://aws.amazon.com/blogs/architecture/field-notes-integrating-a-multi-forest-source-environment-with-aws-sso/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 632172,
          "date": "Sat 16 Jul 2022 15:11",
          "username": "Student1950",
          "content": "A is correct as per the link <br>https://docs.aws.amazon.com/singlesignon/latest/userguide/manage-your-identity-source-idp.html.<br>D is correct only If on-premises Active Directory is Microsoft AD since you need to use AWS Directory services to connect to MS AD through AWS SSO",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 626569,
          "date": "Sun 03 Jul 2022 15:16",
          "username": "aandc",
          "content": "vote for A",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 620685,
          "date": "Thu 23 Jun 2022 01:44",
          "username": "hinfsynz",
          "content": "AAAAAA",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 618045,
          "date": "Sat 18 Jun 2022 04:15",
          "username": "wannaawswannaaws",
          "content": "to utilize the same authentication solution to login in to its AWS accounts, idp is the on prem MS AD.  So SAML 2.0 is needed. So that D is preferred. SCIM used for provisioning with external idp (Azure AD, CyberArk, JumpCloud, Okta etc). https://docs.aws.amazon.com/singlesignon/latest/userguide/supported-idps.htmloverlooked. D with OIDC.  well, does not feel like right.<br>C with SAMPL 2.0, but should map users to role. So not correct either. <br>Is A the right use case in this scenario then?",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 618047,
          "date": "Sat 18 Jun 2022 04:21",
          "username": "wannaaws",
          "content": "overlooked. D with OIDC.  well, does not feel like right.<br>C with SAMPL 2.0, but should map users to role. So not correct either. <br>Is A the right use case in this scenario then?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 598243,
          "date": "Sat 07 May 2022 19:58",
          "username": "user0001user0001",
          "content": "A, you need to connect to on-prem ADhttps://aws.amazon.com/identity/attribute-based-access-control/",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 598244,
          "date": "Sat 07 May 2022 20:05",
          "username": "user0001",
          "content": "https://aws.amazon.com/identity/attribute-based-access-control/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 597821,
          "date": "Fri 06 May 2022 20:40",
          "username": "bobsmith2000",
          "content": "The AD just be the source of truth.<br>https://docs.aws.amazon.com/singlesignon/latest/userguide/provision-users-groups-AD. html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 590248,
          "date": "Fri 22 Apr 2022 23:11",
          "username": "shailurtm2001shailurtm2001mirnuj_atom",
          "content": "B seems correct.right changed to AThe question states that the clients have the Active Directory domain which they want to use as a source of truth. Can’t see where we connect the AD in B. ",
          "upvote_count": "111",
          "selected_answers": ""
        },
        {
          "id": 635014,
          "date": "Fri 22 Jul 2022 08:00",
          "username": "shailurtm2001",
          "content": "right changed to A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 590521,
          "date": "Sat 23 Apr 2022 11:54",
          "username": "mirnuj_atom",
          "content": "The question states that the clients have the Active Directory domain which they want to use as a source of truth. Can’t see where we connect the AD in B. ",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#844",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is deploying a third-party firewall appliance solution from AWS Marketplace to monitor and protect traffic that leaves the company's AWS environments. The company wants to deploy this appliance into a shared services VPC and route all outbound internet-bound traffic through the appliances.<br>A solutions architect needs to recommend a deployment method that prioritizes reliability and minimizes failover time between firewall appliances within a single<br>AWS Region. The company has set up routing from the shared services VPC to other VPCs.<br>Which steps should the solutions architect recommend to meet these requirements? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#844",
          "answers": [
            {
              "choice": "<p>A. Deploy two firewall appliances into the shared services VPC, each in a separate Availability Zone.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new Network Load Balancer in the shared services VPC.  Create a new target group, and attach it to the new Network Load Balancer. Add each of the firewall appliance instances to the target group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new Gateway Load Balancer in the shared services VPC.  Create a new target group, and attach it to the new Gateway Load Balancer. Add each of the firewall appliance instances to the target group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a VPC interface endpoint. Add a route to the route table in the shared services VPC.  Designate the new endpoint as the next hop for traffic that enters the shared services VPC from other VPCs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Deploy two firewall appliances into the shared services VPC, each in the same Availability Zone.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create a VPC Gateway Load Balancer endpoint. Add a route to the route table in the shared services VPC.  Designate the new endpoint as the next hop for traffic that enters the shared services VPC from other VPCs.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 590137,
          "date": "Fri 22 Apr 2022 18:57",
          "username": "snakecharmer2",
          "content": "A - multi-az for the firewall appliances<br>C - gateway LB for the routing<br>F - gateway LB endpoint to route the traffic to the gateway LB<br>See these url:<br>https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoint-services-gwlbe.html<br>https://docs.aws.amazon.com/vpc/latest/privatelink/vpce-gateway-load-balancer.html",
          "upvote_count": "16",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 647738,
          "date": "Tue 16 Aug 2022 17:50",
          "username": "Ni_yotrajvee",
          "content": "tough question.i have a headache reading this one.was the examtopics questions relevant? in your exam",
          "upvote_count": "42",
          "selected_answers": ""
        },
        {
          "id": 651136,
          "date": "Wed 24 Aug 2022 09:17",
          "username": "rajvee",
          "content": "was the examtopics questions relevant? in your exam",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 632671,
          "date": "Sun 17 Jul 2022 20:39",
          "username": "asfsdfsdf",
          "content": "ACF<br>GW LB EP -> GW LB -> FW appliances",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ACF"
        }
      ]
    },
    {
      "question_id": "#845",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a legacy monolithic application that is critical to the company's business. The company hosts the application on an Amazon EC2 instance that runs Amazon Linux 2. The company's application team receives a directive from the legal department to back up the data from the instance's encrypted Amazon<br>Elastic Block Store (Amazon EBS) volume to an Amazon S3 bucket. The application team does not have the administrative SSH key pair for the instance. The application must continue to serve the users.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#845",
          "answers": [
            {
              "choice": "<p>A. Attach a role to the instance with permission to write to Amazon S3. Use the AWS Systems Manager Session Manager option to gain access to the instance and run commands to copy data into Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an image of the instance with the reboot option turned on. Launch a new EC2 instance from the image. Attach a role to the new instance with permission to write to Amazon S3. Run a command to copy data into Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Take a snapshot of the EBS volume by using Amazon Data Lifecycle Manager (Amazon DLM). Copy the data to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an image of the instance. Launch a new EC2 instance from the image. Attach a role to the new instance with permission to write to Amazon S3. Run a command to copy data into Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 590250,
          "date": "Fri 22 Apr 2022 23:35",
          "username": "shailurtm2001hfeng95",
          "content": "I'll go for AA SSM Agent is also installed by default on Amazon Linux 2 AMIs and Amazon Linux 2 ECS-Optimized Base AMIs.",
          "upvote_count": "105",
          "selected_answers": ""
        },
        {
          "id": 604153,
          "date": "Fri 20 May 2022 00:08",
          "username": "hfeng95",
          "content": "A SSM Agent is also installed by default on Amazon Linux 2 AMIs and Amazon Linux 2 ECS-Optimized Base AMIs.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 715619,
          "date": "Fri 11 Nov 2022 00:42",
          "username": "SureNot",
          "content": "C - DLM - special solution for EBS snapshots.<br>A - Run manual command, for critical application... seriously??!!",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 715553,
          "date": "Thu 10 Nov 2022 21:32",
          "username": "mrgreatness",
          "content": "I think B answer is worded wrong, should be \\\"no reboot\\\" options which means it will work. If says no reboot in exam, go for B, if not go for A.  -- A will only work if role has SSM permissions",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 701380,
          "date": "Sat 22 Oct 2022 09:12",
          "username": "Ni_yotRocketeer",
          "content": "A in my opinion. if you say C then you still need permissions to copy the data from the snapshot to S3. - Before you export DB snapshot data to Amazon S3, give the snapshot export tasks write-access permission to the Amazon S3 bucket. To do this, create an IAM policy that provides access to the bucket. Then create an IAM role and attach the policy to the role. You later assign the IAM role to your snapshot export task.Wouldn't DLM manage its own S3 location and have the needed permissions. This is a critical application that needs automated backups. Doing it manual is a bad idea. I would go with C. ",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 713964,
          "date": "Tue 08 Nov 2022 17:10",
          "username": "Rocketeer",
          "content": "Wouldn't DLM manage its own S3 location and have the needed permissions. This is a critical application that needs automated backups. Doing it manual is a bad idea. I would go with C. ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 701375,
          "date": "Sat 22 Oct 2022 08:58",
          "username": "Vinafec",
          "content": "Was thinking C, but can you create snapshots of a volume that wasn't created with lifecycle manager?<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 701089,
          "date": "Fri 21 Oct 2022 19:51",
          "username": "fdoxxx",
          "content": "C - it is \\\"critical application\\\" and DLM is designed to protect EC2 EBS wo any disruption",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 689067,
          "date": "Sat 08 Oct 2022 08:15",
          "username": "skywalker",
          "content": "C<br><br>Why you need SSH to login to instance to backup when there is DLM that does snapshot. <br>It allow encrypted EBS to be snapshot.<br>https://aws.amazon.com/blogs/storage/automating-amazon-ebs-snapshots-management-using-data-lifecycle-manager/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 684651,
          "date": "Sun 02 Oct 2022 08:58",
          "username": "JohnPiJohnPi",
          "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.htmlI think option A is best answer!",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 701359,
          "date": "Sat 22 Oct 2022 08:10",
          "username": "JohnPi",
          "content": "I think option A is best answer!",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 651115,
          "date": "Wed 24 Aug 2022 07:51",
          "username": "Kyperos",
          "content": "\\\"By default, Amazon EC2 shuts down the instance, takes snapshots of any attached volumes, creates and registers the AMI, and then reboots the instance. Choose \\\"No reboot\\\" if you don't want your instance to be shut down.\\\" <br>Option D not mention about \\\"No reboot\\\" option so EC2 instance will reboot by default, in this question \\\"The application must continue to serve the users\\\".<br>So I think option A is best answer!<br><br>https://docs.aws.amazon.com/toolkit-for-visual-studio/latest/user-guide/tkv-create-ami-from-instance.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 639809,
          "date": "Sat 30 Jul 2022 22:59",
          "username": "kapara",
          "content": "amazon linux 2 has SSM installed already. its A. ",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 632676,
          "date": "Sun 17 Jul 2022 20:55",
          "username": "asfsdfsdfmrgreatness",
          "content": "A - Can work since its AML2 but there is no mention of AmazonSSMManagedInstanceCore policy<br>B - Incorrect since we cant reboot<br>C - not possible<br>D - can work but if a new data was written on the original disk during the change it will not be copied.<br>I guess I will go with A but both A and D can workI think B is worded wrong should be enable \\\"no reboot\\\" in which case B works",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 715556,
          "date": "Thu 10 Nov 2022 21:35",
          "username": "mrgreatness",
          "content": "I think B is worded wrong should be enable \\\"no reboot\\\" in which case B works",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 597702,
          "date": "Fri 06 May 2022 13:08",
          "username": "Ryannnsb333",
          "content": "The question did not say that the SSM agent have been installed.<br>So the answer is D. https://docs.aws.amazon.com/systems-manager/latest/userguide/prereqs-ssm-agent.html#:~:text=SSM%20Agent%20installation<br><br>SSM Agent is installed by default on Amazon Linux, Amazon Linux 2, SUSE Linux Enterprise Server (SLES) 12 and 15, Ubuntu Server 16.04, 18.04 LTS, and 20.04 base Amazon EC2 AMIs. You must manually install SSM Agent on other versions of Amazon EC2 for Linux, including non-base images.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 685914,
          "date": "Tue 04 Oct 2022 06:08",
          "username": "sb333",
          "content": "https://docs.aws.amazon.com/systems-manager/latest/userguide/prereqs-ssm-agent.html#:~:text=SSM%20Agent%20installation<br><br>SSM Agent is installed by default on Amazon Linux, Amazon Linux 2, SUSE Linux Enterprise Server (SLES) 12 and 15, Ubuntu Server 16.04, 18.04 LTS, and 20.04 base Amazon EC2 AMIs. You must manually install SSM Agent on other versions of Amazon EC2 for Linux, including non-base images.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 596944,
          "date": "Wed 04 May 2022 18:35",
          "username": "Yamchi",
          "content": "AAAAAA",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 591081,
          "date": "Sun 24 Apr 2022 15:27",
          "username": "Bigbearcnguruaws2021parijatavasthi",
          "content": "I think it's C. <br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.htmlThe snapshot can't be accesse from s3But they didn't mention that S3 access is required. I believe snapshots taken using lifecycle manager are written on S3 itself",
          "upvote_count": "312",
          "selected_answers": ""
        },
        {
          "id": 594922,
          "date": "Sat 30 Apr 2022 10:58",
          "username": "guruaws2021parijatavasthi",
          "content": "The snapshot can't be accesse from s3But they didn't mention that S3 access is required. I believe snapshots taken using lifecycle manager are written on S3 itself",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 638282,
          "date": "Wed 27 Jul 2022 20:48",
          "username": "parijatavasthi",
          "content": "But they didn't mention that S3 access is required. I believe snapshots taken using lifecycle manager are written on S3 itself",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#846",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A greeting card company recently advertised that customers could send cards to their favorite celebrities through the company's platform. Since the advertisement was published, the platform has received constant traffic from 10,000 unique users each second.<br>The platform runs on m5.xlarge Amazon EC2 instances behind an Application Load Balancer (ALB). The instances run in an Auto Scaling group and use a custom<br>AMI that is based on Amazon Linux. The platform uses a highly available Amazon Aurora MySQL DB cluster that uses primary and reader endpoints. The platform also uses an Amazon ElastiCache for Redis cluster that uses its cluster endpoint.<br>The platform generates a new process for each customer and holds open database connections to MySQL for the duration of each customer's session. However, resource usage for the platform is low.<br>Many customers are reporting errors when they connect to the platform. Logs show that connections to the Aurora database are failing. Amazon CloudWatch metrics show that the CPU load is low across the platform and that connections to the platform are successful through the ALB. <br>Which solution will remediate the errors MOST cost-effectively?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#846",
          "answers": [
            {
              "choice": "<p>A. Set up an Amazon CloudFront distribution. Set the ALB as the origin. Move all customer traffic to the CloudFront distribution endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon RDS Proxy. Reconfigure the database connections to use the proxy.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Increase the number of reader nodes in the Aurora MySQL cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Increase the number of nodes in the ElastiCache for Redis cluster.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 590513,
          "date": "Sat 23 Apr 2022 11:27",
          "username": "mirnuj_atom",
          "content": "I think B suits better<br>https://aws.amazon.com/rds/proxy/faqs/",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 704010,
          "date": "Tue 25 Oct 2022 18:04",
          "username": "Blair77",
          "content": "BBB RDS Proxy !",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 667899,
          "date": "Tue 13 Sep 2022 12:57",
          "username": "pixepe",
          "content": "The platform generates a new process for each customer and holds open database connections to MySQL for the duration of each customer's session.=> RDS PROXY (B)<br><br>from AWS:RDS Proxy also shares infrequently used database connections, so that fewer connections access the RDS database.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 659488,
          "date": "Sun 04 Sep 2022 21:30",
          "username": "Ni_yot",
          "content": "B is correct ans",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 645133,
          "date": "Wed 10 Aug 2022 21:40",
          "username": "etopics",
          "content": "bbbbbbbbbb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 608486,
          "date": "Sat 28 May 2022 19:27",
          "username": "bogdan_alex",
          "content": "I'll go with B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 591078,
          "date": "Sun 24 Apr 2022 15:19",
          "username": "Bigbearcn",
          "content": "B.  RDS proxy to pool the database connection.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#847",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that runs on Amazon EC2 instances in an Amazon EC2 Auto Scaling group. The company uses AWS CodePipeline to deploy the application. The instances that run in the Auto Scaling group are constantly changing because of scaling events.<br>When the company deploys new application code versions, the company installs the AWS CodeDeploy agent on any new target EC2 instances and associates the instances with the CodeDeploy deployment group. The application is set to go live within the next 24 hours.<br>What should a solutions architect recommend to automate the application deployment process with the LEAST amount of operational overhead?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#847",
          "answers": [
            {
              "choice": "<p>A. Configure Amazon EventBridge (Amazon CloudWatch Events) to invoke an AWS Lambda function when a new EC2 instance is launched into the Auto Scaling group. Code the Lambda function to associate the EC2 instances with the CodeDeploy deployment group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Write a script to suspend Amazon EC2 Auto Scaling operations before the deployment of new code. When the deployment is complete, create a new AMI and configure the Auto Scaling group's launch template to use the new AMI for new launches. Resume Amazon EC2 Auto Scaling operations.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new AWS CodeBuild project that creates a new AMI that contains the new code. Configure CodeBuild to update the Auto Scaling group's launch template to the new AMI. Run an Amazon EC2 Auto Scaling instance refresh operation.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new AMI that has the CodeDeploy agent installed. Configure the Auto Scaling group's launch template to use the new AMI. Associate the CodeDeploy deployment group with the Auto Scaling group instead of the EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 706499,
          "date": "Fri 28 Oct 2022 15:34",
          "username": "sindra",
          "content": "vote D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 655076,
          "date": "Wed 31 Aug 2022 14:40",
          "username": "gnic",
          "content": "D is more logical",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 591076,
          "date": "Sun 24 Apr 2022 15:15",
          "username": "Bigbearcn",
          "content": "code deployment group with ASG.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 590255,
          "date": "Fri 22 Apr 2022 23:55",
          "username": "shailurtm2001",
          "content": "Correct answer D https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-aws-auto-scaling.html",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#848",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is deploying a distributed in-memory database on a fleet of Amazon EC2 instances. The fleet consists of a primary node and eight worker nodes. The primary node is responsible for monitoring cluster health, accepting user requests, distributing user requests to worker nodes, and sending an aggregate response back to a client. Worker nodes communicate with each other to replicate data partitions.<br>The company requires the lowest possible networking latency to achieve maximum performance.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#848",
          "answers": [
            {
              "choice": "<p>A. Launch memory optimized EC2 instances in a partition placement group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Launch compute optimized EC2 instances in a partition placement group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Launch memory optimized EC2 instances in a cluster placement group<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Launch compute optimized EC2 instances in a spread placement group.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 589083,
          "date": "Thu 21 Apr 2022 06:28",
          "username": "mostafasookar",
          "content": "C is correct",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 714988,
          "date": "Thu 10 Nov 2022 08:00",
          "username": "janvandermerwer",
          "content": "Cluster = Close together for high performance, networking etc.<br>Partition = Spread so they don't share the same underlying hardware<br>Spread = Similar to above, but alot stricter.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 672315,
          "date": "Sun 18 Sep 2022 14:07",
          "username": "joancarles",
          "content": "The cluster placement group is indicated for high troughput and low network latency, while the partition placement group is used to avoid hw failures separating the instances in groups running over different hardware.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 669487,
          "date": "Thu 15 Sep 2022 07:02",
          "username": "Sathish1412",
          "content": "distributing user requests to worker nodes, and sending an aggregate response back to a client. Worker nodes communicate with each other to replicate data partitions<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 632969,
          "date": "Mon 18 Jul 2022 12:26",
          "username": "Enigmaaaaaagondohwe",
          "content": "C - memory instance + cluster to have lowest possible network latency.yes from correct indeed..a Cluster placement group allows intsances to be grouped together minimizing latency between them",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 642891,
          "date": "Fri 05 Aug 2022 11:56",
          "username": "gondohwe",
          "content": "yes from correct indeed..a Cluster placement group allows intsances to be grouped together minimizing latency between them",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#849",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A video streaming company recently launched a mobile app for video sharing. The app uploads various files to an Amazon S3 bucket in the us-east-1 Region. The files range in size from 1 GB to 10 GB. <br>Users who access the app from Australia have experienced uploads that take long periods of time. Sometimes the files fail to completely upload for these users. A solutions architect must improve the app's performance for these uploads.<br>Which solutions will meet these requirements? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#849",
          "answers": [
            {
              "choice": "<p>A. Enable S3 Transfer Acceleration on the S3 bucket. Configure the app to use the Transfer Acceleration endpoint for uploads.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure an S3 bucket in each Region to receive the uploads. Use S3 Cross-Region Replication to copy the files to the distribution S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up Amazon Route 53 with latency-based routing to route the uploads to the nearest S3 bucket Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the app to break the video files into chunks. Use a multipart upload to transfer files to Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Modify the app to add random prefixes to the files before uploading.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 590260,
          "date": "Sat 23 Apr 2022 00:07",
          "username": "shailurtm2001",
          "content": "AD.  https://aws.amazon.com/premiumsupport/knowledge-center/s3-upload-large-files/",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 632970,
          "date": "Mon 18 Jul 2022 12:31",
          "username": "Enigmaaaaaa",
          "content": "AD<br>S3 TA + Multipart",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 602494,
          "date": "Mon 16 May 2022 10:22",
          "username": "bobsmith2000",
          "content": "Transfer Accelerator + Multi-part uploads for files more 500MB",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 592656,
          "date": "Tue 26 Apr 2022 21:44",
          "username": "cooldeitycen007",
          "content": "BC: Only for Australia users, so not file size issue, A3 accelerator is configured for bucket, not from app clinetBucket is in the US.<br>The application uploads a variety of files to an Amazon S3 bucket located in the us-east-1 region",
          "upvote_count": "41",
          "selected_answers": ""
        },
        {
          "id": 639463,
          "date": "Sat 30 Jul 2022 05:56",
          "username": "cen007",
          "content": "Bucket is in the US.<br>The application uploads a variety of files to an Amazon S3 bucket located in the us-east-1 region",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#850",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating an application to the AWS Cloud. The application runs in an on-premises data center and writes thousands of images into a mounted NFS file system each night. After the company migrates the application, the company will host the application on an Amazon EC2 instance with a mounted Amazon<br>Elastic File System (Amazon EFS) file system.<br>The company has established an AWS Direct Connect connection to AWS. Before the migration cutover, a solutions architect must build a process that will replicate the newly created on-premises images to the EFS file system.<br>What is the MOST operationally efficient way to replicate the images?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#850",
          "answers": [
            {
              "choice": "<p>A. Configure a periodic process to run the aws s3 sync command from the on-premises file system to Amazon S3. Configure an AWS Lambda function to process event notifications from Amazon S3 and copy the images from Amazon S3 to the EFS file system.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an AWS Storage Gateway file gateway with an NFS mount point. Mount the file gateway file system on the on-premises server. Configure a process to periodically copy the images to the mount point.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy an AWS DataSync agent to an on-premises server that has access to the NFS file system. Send data over the Direct Connect connection to an S3 bucket by using public VIF.  Configure an AWS Lambda function to process event notifications from Amazon S3 and copy the images from Amazon S3 to the EFS file system.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy an AWS DataSync agent to an on-premises server that has access to the NFS file system. Send data over the Direct Connect connection to an AWS PrivateLink interface VPC endpoint for Amazon EFS by using a private VIF.  Configure a DataSync scheduled task to send the images to the EFS file system every 24 hours.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 590269,
          "date": "Sat 23 Apr 2022 00:38",
          "username": "shailurtm2001ByrneyByrneykzqcbobsmith2000",
          "content": "D https://aws.amazon.com/datasync/faqs/https://docs.aws.amazon.com/efs/latest/ug/efs-vpc-endpoints.html<br><br>VPC endpoints for EFS are only for the control plane APIs, not data transfer.Q:How does AWS DataSync access my Amazon EFS file system?<br><br>A: AWS DataSync accesses your Amazon EFS file system using the NFS protocol. The DataSync service mounts your file system from within your VPC from Elastic Network Interfaces (ENIs) managed by the DataSync service. DataSync fully manages the creation, use, and deletion of these ENIs on your behalf. You can choose to mount your EFS file system using a mount target or an EFS Access Point.D would have been the best solution if it were using VPC endpoint for \\\"DataSync\\\". But it is using VPC endpoint for EFS, which won't work. C is the answer.Search for \\\"VPC endpoints\\\" or \\\"AWS PrivateLink\\\"",
          "upvote_count": "131212",
          "selected_answers": ""
        },
        {
          "id": 714255,
          "date": "Wed 09 Nov 2022 04:31",
          "username": "ByrneyByrney",
          "content": "https://docs.aws.amazon.com/efs/latest/ug/efs-vpc-endpoints.html<br><br>VPC endpoints for EFS are only for the control plane APIs, not data transfer.Q:How does AWS DataSync access my Amazon EFS file system?<br><br>A: AWS DataSync accesses your Amazon EFS file system using the NFS protocol. The DataSync service mounts your file system from within your VPC from Elastic Network Interfaces (ENIs) managed by the DataSync service. DataSync fully manages the creation, use, and deletion of these ENIs on your behalf. You can choose to mount your EFS file system using a mount target or an EFS Access Point.",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 714256,
          "date": "Wed 09 Nov 2022 04:32",
          "username": "Byrney",
          "content": "Q:How does AWS DataSync access my Amazon EFS file system?<br><br>A: AWS DataSync accesses your Amazon EFS file system using the NFS protocol. The DataSync service mounts your file system from within your VPC from Elastic Network Interfaces (ENIs) managed by the DataSync service. DataSync fully manages the creation, use, and deletion of these ENIs on your behalf. You can choose to mount your EFS file system using a mount target or an EFS Access Point.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 711248,
          "date": "Fri 04 Nov 2022 16:41",
          "username": "kzqc",
          "content": "D would have been the best solution if it were using VPC endpoint for \\\"DataSync\\\". But it is using VPC endpoint for EFS, which won't work. C is the answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 607668,
          "date": "Thu 26 May 2022 15:12",
          "username": "bobsmith2000",
          "content": "Search for \\\"VPC endpoints\\\" or \\\"AWS PrivateLink\\\"",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 715625,
          "date": "Fri 11 Nov 2022 01:00",
          "username": "SureNot",
          "content": "C -event notifications is the most operationally efficient way",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 715563,
          "date": "Thu 10 Nov 2022 22:00",
          "username": "mrgreatness",
          "content": "D for me",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 715561,
          "date": "Thu 10 Nov 2022 21:55",
          "username": "mrgreatness",
          "content": "https://www.youtube.com/watch?v=_snUm9g5jG0",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 714257,
          "date": "Wed 09 Nov 2022 04:34",
          "username": "Byrney",
          "content": "Answer is C. D won't work as VPC Endpoints for EFS are to the control/management APIs, not for data transfer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 711241,
          "date": "Fri 04 Nov 2022 16:32",
          "username": "kzqc",
          "content": "D is WRONG! DataSync agent can ONLY use VPC endpoint for \\\"DataSync\\\", not VPC endpoint for \\\"EFS\\\".",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 692662,
          "date": "Wed 12 Oct 2022 07:13",
          "username": "JohnPi",
          "content": "https://aws.amazon.com/blogs/storage/transferring-files-from-on-premises-to-aws-and-back-without-leaving-your-vpc-using-aws-datasync/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 672307,
          "date": "Sun 18 Sep 2022 13:50",
          "username": "joancarles",
          "content": "The only option that comments the need of a task schedule it's the option D, also if you have a DX, you can use a vpc endpoint for the transmission, so it's correct:<br><br>https://aws.amazon.com/datasync/faqs/?nc1=h_ls",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 647340,
          "date": "Mon 15 Aug 2022 21:47",
          "username": "AWSProfessionalPractioner",
          "content": "Option is D.  Using the AWS direct, you can only connect over private VIF.  https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-direct-connect.html<br><br>Once you are connected to the VPC, then accessing EFS is only possible by private LINK and EFS.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 640787,
          "date": "Mon 01 Aug 2022 19:35",
          "username": "Ni_yot",
          "content": "I agree - D. How do I use datasync to migrate data to AWS? Configure DataSync to make an initial copy of your entire dataset, and schedule subsequent incremental transfers of changing data until the final cut-over from on-premises to AWS",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 637039,
          "date": "Tue 26 Jul 2022 03:11",
          "username": "cen007",
          "content": "D. <br>https://docs.aws.amazon.com/efs/latest/ug/gs-step-four-sync-files.html<br>Now that you have created a functioning Amazon EFS file system, you can use AWS DataSync to transfer files from an existing file system to Amazon EFS. AWS DataSync is a data transfer service that simplifies, automates, and accelerates moving and replicating data between on-premises storage systems and AWS storage services over the internet or AWS Direct Connect. AWS DataSync can transfer your file data, and also file system metadata such as ownership, timestamps, and access permissions.<br><br>Can option C work? <br>Yes, but that's a lot of unnecessary action. Remember, the question says \\\"What is the MOST OPTIMAL method for replicating the images?\\\"",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 628345,
          "date": "Thu 07 Jul 2022 14:24",
          "username": "aandc",
          "content": "vote for D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 623270,
          "date": "Mon 27 Jun 2022 14:38",
          "username": "kangtamo",
          "content": "Agree with C: S3.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 616171,
          "date": "Tue 14 Jun 2022 13:14",
          "username": "Chuky64",
          "content": "You can use VPC endpoints to ensure data transferred between your AWS DataSync agent, either deployed on-premises or in-cloud, doesn't traverse the public internet or need public IP addresses. Using VPC endpoints increases the security of your data by keeping network traffic within your Amazon Virtual Private Cloud (Amazon VPC). VPC endpoints for DataSync are powered by AWS PrivateLink, a highly available, scalable technology that enables you to privately connect your VPC to supported AWS services.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 613659,
          "date": "Thu 09 Jun 2022 08:40",
          "username": "Anhdd",
          "content": "I do support C because of best practice of S3 if store images which are static files",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 607669,
          "date": "Thu 26 May 2022 15:12",
          "username": "bobsmith2000",
          "content": "see theshailurtm2001's answer",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 599845,
          "date": "Wed 11 May 2022 04:41",
          "username": "James_Zheng",
          "content": "The best practice transferring organizations' internal data is to go through PrivateLink for S3; Refer to: https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html<br>The correct answer should be D. ..",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#851",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has more than 10,000 sensors that send data to an on-premises Apache Kafka server by using the Message Queuing Telemetry Transport (MQTT) protocol. The on-premises Kafka server transforms the data and then stores the results as objects in an Amazon S3 bucket.<br>Recently, the Kafka server crashed. The company lost sensor data while the server was being restored. A solutions architect must create a new design on AWS that is highly available and scalable to prevent a similar occurrence.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#851",
          "answers": [
            {
              "choice": "<p>A. Launch two Amazon EC2 instances to host the Kafka server in an active/standby configuration across two Availability Zones. Create a domain name in Amazon Route 53. Create a Route 53 failover policy. Route the sensors to send the data to the domain name.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the on-premises Kafka server to Amazon Managed Streaming for Apache Kafka (Amazon MSK). Create a Network Load Balancer (NLB) that points to the Amazon MSK broker. Enable NLB health checks. Route the sensors to send the data to the NLB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy AWS IoT Core, and connect it to an Amazon Kinesis Data Firehose delivery stream. Use an AWS Lambda function to handle data transformation. Route the sensors to send the data to AWS IoT Core.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy AWS IoT Core, and launch an Amazon EC2 instance to host the Kafka server. Configure AWS IoT Core to send the data to the EC2 instance. Route the sensors to send the data to AWS IoT Core.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 593316,
          "date": "Wed 27 Apr 2022 19:18",
          "username": "snakecharmer2pinhead900bobsmith2000",
          "content": "C - NLB does not support MQTT protocol <br>Kinese streams support it. <br>https://docs.aws.amazon.com/iot/latest/developerguide/kinesis-rule-action.htmlhow can this be highly voted? MQTT is application layer and can work over TCP and UDP<br>https://en.wikipedia.org/wiki/MQTT<br>Don't take highly voted answers for granted, must be BNLB works on 4th level of OSI. <br>MQTT work over TCP.<br>Hence NLB are not aware of what a TCP package contains.",
          "upvote_count": "725",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 676876,
          "date": "Fri 23 Sep 2022 09:29",
          "username": "pinhead900",
          "content": "how can this be highly voted? MQTT is application layer and can work over TCP and UDP<br>https://en.wikipedia.org/wiki/MQTT<br>Don't take highly voted answers for granted, must be B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 602179,
          "date": "Sun 15 May 2022 18:05",
          "username": "bobsmith2000",
          "content": "NLB works on 4th level of OSI. <br>MQTT work over TCP.<br>Hence NLB are not aware of what a TCP package contains.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 715570,
          "date": "Thu 10 Nov 2022 22:20",
          "username": "mrgreatness",
          "content": "C for me",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 700906,
          "date": "Fri 21 Oct 2022 14:58",
          "username": "Blair77",
          "content": "C for me: <br>https://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 687371,
          "date": "Thu 06 Oct 2022 03:29",
          "username": "dcdcdc3",
          "content": "Because MSK has Maximum number of client connections 1000 per second and the company has 10,000 sensors, the MSK likely will not be able to handle all connections, so have to select C as the answer<br><br>https://docs.aws.amazon.com/msk/latest/developerguide/limits.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 687370,
          "date": "Thu 06 Oct 2022 03:22",
          "username": "dcdcdc3",
          "content": "B is possible (4th diagram, PrivateLink, using one or more NLB for MSK) :<br>https://aws.amazon.com/blogs/big-data/secure-connectivity-patterns-to-access-amazon-msk-across-aws-regions/<br><br>Simplest design - IoT Core can send to MSK but there is no such option in the answers:<br>https://aws.amazon.com/blogs/iot/how-to-integrate-aws-iot-core-with-amazon-msk/<br><br>C is well described here:<br>https://medium.com/swlh/create-kinesis-firehose-data-stream-from-iot-core-to-s3-using-serverless-framework-2af1d0b35500<br><br>both B and C are correct. Both are highly available, both not optimal..<br><br>Maybe if the on-prem Kafka cluster is only storing transformed data in S3, then really Kafka is not needed and firehose is sufficient? <br>Then C would be the answer",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 685894,
          "date": "Tue 04 Oct 2022 05:19",
          "username": "sb333sb333",
          "content": "https://docs.aws.amazon.com/iot/latest/developerguide/mqtt.htmlRelooking at all the details, it makes more sense for this to be B. ",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 685902,
          "date": "Tue 04 Oct 2022 05:38",
          "username": "sb333",
          "content": "Relooking at all the details, it makes more sense for this to be B. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 684658,
          "date": "Sun 02 Oct 2022 09:14",
          "username": "JohnPi",
          "content": "https://aws.amazon.com/iot-core/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 653498,
          "date": "Mon 29 Aug 2022 15:02",
          "username": "tarisai",
          "content": "https://www.aklivity.io/products/private-msk-proxy",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 608132,
          "date": "Fri 27 May 2022 17:17",
          "username": "user89",
          "content": "I think its B because NLB support MQTT protocol<br>https://www.emqx.com/en/blog/mqtt-broker-clustering-part-1-load-balancing<br>http://kth.diva-portal.org/smash/get/diva2:1466268/FULLTEXT01.pdf",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 590320,
          "date": "Sat 23 Apr 2022 03:39",
          "username": "shailurtm2001user0001bobsmith2000",
          "content": "B seems right.true, why do we want to change the code?Because of \\\"a solutions architect must establish a new architecture on AWS that is highly available and scalable\\\"<br>Following best practices and well-architected framework, when you migrate to cloud, you'd better rearchitect the app to benefit from the cloud managed services and optimise costs",
          "upvote_count": "313",
          "selected_answers": ""
        },
        {
          "id": 599793,
          "date": "Wed 11 May 2022 01:31",
          "username": "user0001bobsmith2000",
          "content": "true, why do we want to change the code?Because of \\\"a solutions architect must establish a new architecture on AWS that is highly available and scalable\\\"<br>Following best practices and well-architected framework, when you migrate to cloud, you'd better rearchitect the app to benefit from the cloud managed services and optimise costs",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 610953,
          "date": "Fri 03 Jun 2022 08:06",
          "username": "bobsmith2000",
          "content": "Because of \\\"a solutions architect must establish a new architecture on AWS that is highly available and scalable\\\"<br>Following best practices and well-architected framework, when you migrate to cloud, you'd better rearchitect the app to benefit from the cloud managed services and optimise costs",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#852",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect needs to implement a client-side encryption mechanism for objects that will be stored in a new Amazon S3 bucket. The solutions architect created a CMK that is stored in AWS Key Management Service (AWS KMS) for this purpose.<br>The solutions architect created the following IAM policy and attached it to an IAM role:<br><img src=\"/https://examtopics.com/assets/media/exam-media/04241/0056200001.png\" class=\"in-exam-image\"><br>During tests, the solutions architect was able to successfully get existing test objects in the S3 bucket. However, attempts to upload a new object resulted in an error message. The error message stated that the action was forbidden.<br>Which action must the solutions architect add to the IAM policy to meet all the requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#852",
          "answers": [
            {
              "choice": "<p>A. kms:GenerateDataKey<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. kms:GetKeyPolicy<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. kms:GetPublicKey<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. kms:Sign<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 696251,
          "date": "Sun 16 Oct 2022 15:11",
          "username": "AwsBRFan",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/s3-access-denied-error-kms/<br> \\\"An error occurred (AccessDenied) when calling the PutObject operation: Access Denied\\\"<br><br>This error message indicates that your IAM user or role needs permission for the kms:GenerateDataKey action.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 635820,
          "date": "Sun 24 Jul 2022 02:38",
          "username": "hilft",
          "content": "A. <br>kms:GenerateDataKey",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 630563,
          "date": "Tue 12 Jul 2022 15:47",
          "username": "Millari",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingClientSideEncryption.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 626408,
          "date": "Sun 03 Jul 2022 06:43",
          "username": "aandc",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/s3-access-denied-error-kms/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 590816,
          "date": "Sun 24 Apr 2022 00:08",
          "username": "Bigbearcn",
          "content": "https://docs.aws.amazon.com/kms/latest/cryptographic-details/client-side-encryption.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 589980,
          "date": "Fri 22 Apr 2022 14:26",
          "username": "mirnuj_atom",
          "content": "Correct answer should be A<br>kms:GenerateDataKey",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#853",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail company needs to provide a series of data files to another company, which is its business partner. These files are saved in an Amazon S3 bucket under<br>Account A, which belongs to the retail company. The business partner company wants one of its IAM users, User_DataProcessor, to access the files from its own<br>AWS account (Account B).<br>Which combination of steps must the companies take so that User_DataProcessor can access the S3 bucket successfully? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#853",
          "answers": [
            {
              "choice": "<p>A. Turn on the cross-origin resource sharing (CORS) feature for the S3 bucket in Account A. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. InAccountA, set the S3 bucket policy to the following: <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. InAccount A, set the S3 bucket policy to the following: <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. InAccount B, set the permissions of User_DataProcessor to the following: <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. InAccount B, set the permissions of User_DataProcessor to the following: <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 656732,
          "date": "Fri 02 Sep 2022 01:44",
          "username": "RVD",
          "content": "CD-AccountA allow access via s3 bucket policy and in Account B allow s3 processor to access S3",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 716108,
          "date": "Fri 11 Nov 2022 15:08",
          "username": "due",
          "content": "Acc A (S3 owner) S3 bucket policy allow with Principal \\\"User_DataProcessor\\\" +Acc B (user) IAM policy allow all",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 698038,
          "date": "Tue 18 Oct 2022 10:25",
          "username": "bloless1s",
          "content": "Must be C,D.  Detail explained here: https://aws.amazon.com/premiumsupport/knowledge-center/cross-account-access-s3/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 656189,
          "date": "Thu 01 Sep 2022 13:32",
          "username": "Rocketeer",
          "content": "I am thinking CD",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#854",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has many AWS accounts and uses AWS Organizations to manage all of them. A solutions architect must implement a solution that the company can use to share a common network across multiple accounts.<br>The company's infrastructure team has a dedicated infrastructure account that has a VPC.  The infrastructure team must use this account to manage the network.<br>Individual accounts cannot have the ability to manage their own networks. However, individual accounts must be able to create AWS resources within subnets.<br>Which combination of actions should the solutions architect perform to meet these requirements? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#854",
          "answers": [
            {
              "choice": "<p>A. Create a transit gateway in the infrastructure account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable resource sharing from the AWS Organizations management account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create VPCs in each AWS account within the organization in AWS Organizations. Configure the VPCs to share the same CIDR range and subnets as the VPC in the infrastructure account. Peer the VPCs in each individual account with the VPC in the infrastructure account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a resource share in AWS Resource Access Manager in the infrastructure account. Select the specific AWS Organizations OU that will use the shared network. Select each subnet to associate with the resource share.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a resource share in AWS Resource Access Manager in the infrastructure account. Select the specific AWS Organizations OU that will use the shared network. Select each prefix list to associate with the resource share.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 590806,
          "date": "Sat 23 Apr 2022 23:26",
          "username": "Bigbearcn",
          "content": "It's B and D. ",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 588783,
          "date": "Wed 20 Apr 2022 16:00",
          "username": "snakecharmer2",
          "content": "B & D<br>You want to share the subnets using RAM (D) and you need to enable it first (B)",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 590362,
          "date": "Sat 23 Apr 2022 04:50",
          "username": "shailurtm2001",
          "content": "BE https://docs.aws.amazon.com/vpc/latest/userguide/sharing-managed-prefix-lists.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 589958,
          "date": "Fri 22 Apr 2022 13:56",
          "username": "mirnuj_atom",
          "content": "B/D, the prefix-list has nothing to do with the subnet sharing.",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#855",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has developed a web application. The company is hosting the application on a group of Amazon EC2 instances behind an Application Load Balancer.<br>The company wants to improve the security posture of the application and plans to use AWS WAF web ACLs. The solution must not adversely affect legitimate traffic to the application.<br>How should a solutions architect configure the web ACLs to meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#855",
          "answers": [
            {
              "choice": "<p>A. Set the action of the web ACL rules to Count. Enable AWS WAF logging. Analyze the requests for false positives. Modify the rules to avoid any false positive. Over time, change the action of the web ACL rules from Count to Block.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use only rate-based rules in the web ACLs, and set the throttle limit as high as possible. Temporarily block all requests that exceed the limit. Define nested rules to narrow the scope of the rate tracking.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set the action of the web ACL rules to Block. Use only AWS managed rule groups in the web ACLs. Evaluate the rule groups by using Amazon CloudWatch metrics with AWS WAF sampled requests or AWS WAF logs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use only custom rule groups in the web ACLs, and set the action to Allow. Enable AWS WAF logging. Analyze the requests for false positives. Modify the rules to avoid any false positive. Over time, change the action of the web ACL rules from Allow to Block.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 590805,
          "date": "Sat 23 Apr 2022 23:14",
          "username": "Bigbearcn",
          "content": "It's A.  in case of affect legimate traffic, set the action to count first.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 685854,
          "date": "Tue 04 Oct 2022 03:07",
          "username": "sb333",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/waf-analyze-count-action-rules/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 638206,
          "date": "Wed 27 Jul 2022 18:19",
          "username": "hilft",
          "content": "Agree with Bigbearcn.<br>A",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#856",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A startup company recently migrated a large ecommerce website to AWS. The website has experienced a 70% increase in sales. Software engineers are using a private GitHub repository to manage code. The DevOps team is using Jenkins for builds and unit testing. The engineers need to receive notifications for bad builds and zero downtime during deployments. The engineers also need to ensure any changes to production are seamless for users and can be rolled back in the event of a major issue.<br>The software engineers have decided to use AWS CodePipeline to manage their build and deployment process.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#856",
          "answers": [
            {
              "choice": "<p>A. Use GitHub websockets to trigger the CodePipeline pipeline. Use the Jenkins plugin for AWS CodeBuild to conduct unit testing. Send alerts to an Amazon SNS topic for any bad builds. Deploy in an in-place, all-at-once deployment configuration using AWS CodeDeploy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use GitHub webhooks to trigger the CodePipeline pipeline. Use the Jenkins plugin for AWS CodeBuild to conduct unit testing. Send alerts to an Amazon SNS topic for any bad builds. Deploy in a blue/green deployment using AWS CodeDeploy.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use GitHub websockets to trigger the CodePipeline pipeline. Use AWS X-Ray for unit testing and static code analysis. Send alerts to an Amazon SNS topic for any bad builds. Deploy in a blue/green deployment using AWS CodeDeploy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use GitHub webhooks to trigger the CodePipeline pipeline. Use AWS X-Ray for unit testing and static code analysis. Send alerts to an Amazon SNS topic for any bad builds. Deploy in an in-place, all-at-once deployment configuration using AWS CodeDeploy.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 611367,
          "date": "Sat 04 Jun 2022 10:55",
          "username": "Chuky64",
          "content": "B for sure.<br><br>Use GitHub webhooks to trigger the CodePipeline pipeline. Use the Jenkins plugin for AWS CodeBuild to conduct unit testing. Send alerts to an Amazon SNS topic for any bad builds. Deploy in a blue/green deployment using AWS CodeDeploy.",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 706802,
          "date": "Sat 29 Oct 2022 01:14",
          "username": "sindra",
          "content": "B for sure... blue green is the right one. <br>rule out C and D since AWS X-Ray is for troubleshooting not for build purpose",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 590799,
          "date": "Sat 23 Apr 2022 22:56",
          "username": "Bigbearcn",
          "content": "It's B.  Blue/Green deployment for zero downtime.",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#857",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect needs to deploy an application on a fleet of Amazon EC2 Instances. The EC2 instances run in private subnets in an Auto Scaling group. The application is expected to generate logs at a rate of 100 MB each second on each of the EC2 instances.<br>The logs must be stored in an Amazon S3 bucket so that an Amazon EMR cluster can consume them for further processing. The logs must be quickly accessible for the first 90 days and should be retrievable within 48 hours thereafter.<br>What is the MOST cost-effective solution that meets these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#857",
          "answers": [
            {
              "choice": "<p>A. Set up an S3 copy job to write logs from each EC2 instance to the S3 bucket with S3 Standard storage. Use a NAT instance within the private subnets to connect to Amazon S3. Create S3 Lifecycle policies to move logs that are older than 90 days to S3 Glacier.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up an S3 sync job to copy logs from each EC2 instance to the S3 bucket with S3 Standard storage. Use a gateway VPC endpoint for Amazon S3 to connect to Amazon S3. Create S3 Lifecycle policies to move logs that are older than 90 days to S3 Glacier Deep Archive.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up an S3 batch operation to copy logs from each EC2 instance to the S3 bucket with S3 Standard storage. Use a NAT gateway with the private subnets to connect to Amazon S3. Create S3 Lifecycle policies to move logs that are older than 90 days to S3 Glacier Deep Archive.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up an S3 sync job to copy logs from each EC2 instance to the S3 bucket with S3 Standard storage. Use a gateway VPC endpoint for Amazon S3 to connect to Amazon S3. Create S3 Lifecycle policies to move logs that are older than 90 days to S3 Glacier.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 590741,
          "date": "Sat 23 Apr 2022 19:58",
          "username": "Bigbearcn",
          "content": "It should be B.  S3 Glacier Deep Archive bulk retrieval time is max 48 hours.",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 716863,
          "date": "Sat 12 Nov 2022 19:42",
          "username": "Santo99",
          "content": "B<br>S3 sync is recommended for copying from Ec2 https://aws.amazon.com/de/premiumsupport/knowledge-center/s3-transfer-data-bucket-instance/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 710468,
          "date": "Thu 03 Nov 2022 13:04",
          "username": "Pigi_102",
          "content": "S3 \\\"sync\\\" operation only works from s3 to s3. S3 \\\"batch\\\" seems to works only from S3 to S3 so I think A is the only option available, also if is using NAT instead of gateway.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 706805,
          "date": "Sat 29 Oct 2022 01:16",
          "username": "sindra",
          "content": "B is the complete set for the answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 673692,
          "date": "Tue 20 Sep 2022 01:09",
          "username": "JoMainAWS",
          "content": "definitely BBBB this came up",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 623727,
          "date": "Tue 28 Jun 2022 06:54",
          "username": "TechX",
          "content": "No doubt, it's B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 610822,
          "date": "Fri 03 Jun 2022 01:46",
          "username": "Murtazaarif",
          "content": "B is correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 608125,
          "date": "Fri 27 May 2022 16:49",
          "username": "user89",
          "content": "B.  it satisfies both requirement<br>https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html<br>https://aws.amazon.com/s3/storage-classes/glacier/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 589912,
          "date": "Fri 22 Apr 2022 12:52",
          "username": "mirnuj_atom",
          "content": "Whoops, right answer is B )",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 589911,
          "date": "Fri 22 Apr 2022 12:51",
          "username": "mirnuj_atom",
          "content": "The right answer is C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#858",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An online retail company hosts its stateful web-based application and MySQL database in an on-premises data center on a single server. The company wants to increase its customer base by conducting more marketing campaigns and promotions. In preparation, the company wants to migrate its application and database to AWS to increase the reliability of its architecture.<br>Which solution should provide the HIGHEST level of reliability?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#858",
          "answers": [
            {
              "choice": "<p>A. Migrate the database to an Amazon RDS MySQL Multi-AZ DB instance. Deploy the application in an Auto Scaling group on Amazon EC2 instances behind an Application Load Balancer Store sessions in Amazon Neptune.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the database to Amazon Aurora MySQL. Deploy the application in an Auto Scaling group on Amazon EC2 instances behind an Application Load Balancer. Store sessions in an Amazon ElastiCache for Redis replication group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the database to Amazon DocumentDB (with MongoDB compatibility). Deploy the application in an Auto Scaling group on Amazon EC2 instances behind a Network Load Balancer. Store sessions in Amazon Kinesis Data Firehose.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the database to an Amazon RDS MariaDB Multi-AZ DB instance. Deploy the application in an Auto Scaling group on Amazon EC2 instances behind an Application Load Balancer. Store sessions in Amazon ElastiCache for Memcached.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 613027,
          "date": "Wed 08 Jun 2022 04:17",
          "username": "AnhddAnhdd",
          "content": "B is right. The question not mention that need multi-thread, so Redis is better than Memcache. I will choose B over D. <br>A) \\\"Store sessions in Amazon Neptune\\\" - wrong<br>C) DocumentDB is NoSQL + FireHose for session = wrongPlus that Aurora have 3 AZ for HA and also stability with 15 read replica to ensure during promotion it will stay stability",
          "upvote_count": "61",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 613029,
          "date": "Wed 08 Jun 2022 04:20",
          "username": "Anhdd",
          "content": "Plus that Aurora have 3 AZ for HA and also stability with 15 read replica to ensure during promotion it will stay stability",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 715576,
          "date": "Thu 10 Nov 2022 22:29",
          "username": "mrgreatness",
          "content": "I'm gping B , better performance with B and it is reliability not availability question",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 715574,
          "date": "Thu 10 Nov 2022 22:27",
          "username": "mrgreatnessmrgreatness",
          "content": "the key word is \\\"reliability\\\" don't get it confused with \\\"availability\\\"https://www.bmc.com/blogs/reliability-vs-availability/",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 715577,
          "date": "Thu 10 Nov 2022 22:29",
          "username": "mrgreatness",
          "content": "https://www.bmc.com/blogs/reliability-vs-availability/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 709385,
          "date": "Tue 01 Nov 2022 19:55",
          "username": "alxjandroleiva",
          "content": "D is more precise with multi AZ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 706806,
          "date": "Sat 29 Oct 2022 01:19",
          "username": "sindra",
          "content": "The question ask about the highest evel of availability.. <br>A is rule out because of neptune<br>C is rule out because of document db <br><br>its either B or D, but between of them because the question is availability.. i prefer D since it have Multi-AZ compared to the B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 685841,
          "date": "Tue 04 Oct 2022 02:13",
          "username": "sb333",
          "content": "First, keep the database using MySQL. No reason to convert it. So that leaves A or B.  You would not store session state in Amazon Neptune. ElastiCache for Redis is a perfect fit for storing session state.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 626901,
          "date": "Mon 04 Jul 2022 09:52",
          "username": "altonh",
          "content": "It's B.  There is no clustering in Memcache, only sharding.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 611641,
          "date": "Sun 05 Jun 2022 02:40",
          "username": "hilft",
          "content": "It's either B or D.  <br>AWS often puts Redis vs. Memcache in respect to multi-threading feature.<br>So, it's B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 606789,
          "date": "Tue 24 May 2022 17:37",
          "username": "bobsmith2000",
          "content": "A) \\\"Store sessions in Amazon Neptune\\\" - wrong<br>B) Even though Aurora stores data throughout 3 AZ, we still need HA on complete level.<br>C) DocumentDB is NoSQL + FireHose for session = wrong<br>D) Fits the bill. Sessions can be stored in Memcache https://aws.amazon.com/elasticache/memcached/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 590736,
          "date": "Sat 23 Apr 2022 19:49",
          "username": "Bigbearcn",
          "content": "It's B.  use redis for session state.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#859",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an organization that has many AWS accounts in AWS Organizations. A solutions architect must improve how the company manages common security group rules for the AWS accounts in the organization.<br>The company has a common set of IP CIDR ranges in an allow list in each AWS account to allow access to and from the company's on-premises network.<br>Developers within each account are responsible for adding new IP CIDR ranges to their security groups. The security team has its own AWS account. Currently, the security team notifies the owners of the other AWS accounts when changes are made to the allow list.<br>The solutions architect must design a solution that distributes the common set of CIDR ranges across all accounts.<br>Which solution meets these requirements with the LEAST amount of operational overhead?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#859",
          "answers": [
            {
              "choice": "<p>A. Set up an Amazon Simple Notification Service (Amazon SNS) topic in the security team's AWS account. Deploy an AWS Lambda function in each AWS account. Configure the Lambda function to run every time an SNS topic receives a message. Configure the Lambda function to take an IP address as input and add it to a list of security groups in the account. Instruct the security team to distribute changes by publishing messages to its SNS topic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create new customer-managed prefix lists in each AWS account within the organization. Populate the prefix lists in each account with all internal CIDR ranges. Notify the owner of each AWS account to allow the new customer-managed prefix list IDs in their accounts in their security groups. Instruct the security team to share updates with each AWS account owner.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new customer-managed prefix list in the security team's AWS account. Populate the customer-managed prefix list with all internal CIDR ranges. Share the customer-managed prefix list with the organization by using AWS Resource Access Manager. Notify the owner of each AWS account to allow the new customer-managed prefix list ID in their security groups.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM role in each account in the organization. Grant permissions to update security groups. Deploy an AWS Lambda function in the security team's AWS account. Configure the Lambda function to take a list of internal IP addresses as input, assume a role in each organization account, and add the list of IP addresses to the security groups in each account.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 696259,
          "date": "Sun 16 Oct 2022 15:31",
          "username": "AwsBRFan",
          "content": "https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html<br>A managed prefix list is a set of one or more CIDR blocks. You can use prefix lists to make it easier to configure and maintain your security groups and route tables. <br><br>https://docs.aws.amazon.com/vpc/latest/userguide/sharing-managed-prefix-lists.html<br><br>With AWS Resource Access Manager (AWS RAM), the owner of a prefix list can share a prefix list with the following:<br><br>Specific AWS accounts inside or outside of its organization in AWS Organizations<br><br>An organizational unit inside its organization in AWS Organizations<br><br>An entire organization in AWS Organizations",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 626374,
          "date": "Sun 03 Jul 2022 04:37",
          "username": "aandc",
          "content": "C is correct, RAM use case",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 590734,
          "date": "Sat 23 Apr 2022 19:45",
          "username": "Bigbearcn",
          "content": "It's C.  Customer managed prefix list and RAM to share.",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#860",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's lease of a colocated storage facility will expire in 90 days. The company wants to move to AWS to avoid signing a contract extension. The company's environment consists of 200 virtual machines and a NAS with 40 TB of data. Most of the data is archival, yet instant access is required when data is requested.<br>Leadership wants to ensure minimal downtime during the migration. Each virtual machine has a number of customized configurations. The company's existing 1<br>Gbps network connection is mostly idle, especially after business hours.<br>Which combination of steps should the company take to migrate to AWS while minimizing downtime and operational impact? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#860",
          "answers": [
            {
              "choice": "<p>A. Use new Amazon EC2 instances and reinstall all application code.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS SMS to migrate the virtual machines.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Storage Gateway to migrate the data to cloud-native storage.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Snowball to migrate the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use AWS SMS to copy the infrequently accessed data from the NAS.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 590730,
          "date": "Sat 23 Apr 2022 19:30",
          "username": "BigbearcnRyannnRyannn",
          "content": "1/8*3600*24=10,800. <br>With 1 Gb netowrk to transfer 40TB data,it takes about 4 days. So snowball is not needed.\\\"after hours\\\" meaning 16h instead of 24.<br>Which means roughly 6 days for the data transfer to AWS, better than snowball, takes 7 days for data to available on AWS.<br>AC is good.I mean BC",
          "upvote_count": "1112",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 597778,
          "date": "Fri 06 May 2022 17:24",
          "username": "RyannnRyannn",
          "content": "\\\"after hours\\\" meaning 16h instead of 24.<br>Which means roughly 6 days for the data transfer to AWS, better than snowball, takes 7 days for data to available on AWS.<br>AC is good.I mean BC",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 597779,
          "date": "Fri 06 May 2022 17:24",
          "username": "Ryannn",
          "content": "I mean BC",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 706817,
          "date": "Sat 29 Oct 2022 01:31",
          "username": "sindra",
          "content": "vote for BC",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 686920,
          "date": "Wed 05 Oct 2022 15:24",
          "username": "Ell89",
          "content": "BC<br>40TB is easy work for a 1Gbps line so more feasible than snowball",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 633006,
          "date": "Mon 18 Jul 2022 14:14",
          "username": "Enigmaaaaaajoancarles",
          "content": "BC<br>with 1Gbps of inactive speed means about 128MBs which will take about 4 days lets say only off hours so it will take about 8 days in total.<br>Better to use Storage File GW no need to order and send a snowball for thisBut you need the BW for the SMS migration too, so it takes a lot of time more sharing the same connection for both. Maybe the snowball have more sense in this scenario.<br>BD in my opinion.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 672093,
          "date": "Sun 18 Sep 2022 09:47",
          "username": "joancarles",
          "content": "But you need the BW for the SMS migration too, so it takes a lot of time more sharing the same connection for both. Maybe the snowball have more sense in this scenario.<br>BD in my opinion.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 627841,
          "date": "Wed 06 Jul 2022 13:00",
          "username": "aandc",
          "content": "vote for bc",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 615412,
          "date": "Sun 12 Jun 2022 18:04",
          "username": "future77",
          "content": "C.  1024Mbps is nearly 100MB per second, which will be enough to transfer the 40TB in 90days which data is unchanging(archived). <br>B. SMS is good for mission critical VMs which also guarantees little downtime.<br>A.  is wrong, since it will create downtime, .<br>D.  Will not be needed. Already explained it can be done online via Storage gateway.<br> E.  AWS SMS is for VM, not for data.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 615114,
          "date": "Sun 12 Jun 2022 02:09",
          "username": "SeanQi",
          "content": "BC <br>C is better than D because it's less disruption to the system, which is the question requires.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 590740,
          "date": "Sat 23 Apr 2022 19:54",
          "username": "shailurtm2001",
          "content": "Should be BD. ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 589891,
          "date": "Fri 22 Apr 2022 12:19",
          "username": "mirnuj_atom",
          "content": "Isn't the SMS designed for VMs migration?",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BD"
        }
      ]
    },
    {
      "question_id": "#861",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application. Once a month, the application creates a compressed file that contains every object within an Amazon S3 bucket. The total size of the objects before compression is 1 TB. <br>The application runs by using a scheduled cron job on an Amazon EC2 instance that has a 5 TB Amazon Elastic Block Store (Amazon EBS) volume attached. The application downloads all the files from the source S3 bucket to the EBS volume, compresses the file, and uploads the file to a target S3 bucket. Every invocation of the application takes 2 hours from start to finish.<br>Which combination of actions should a solutions architect take to OPTIMIZE costs for this application? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#861",
          "answers": [
            {
              "choice": "<p>A. Migrate the application to run an AWS Lambda function. Use Amazon EventBridge (Amazon CloudWatch Events) to schedule the Lambda function to run once each month.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the application to download the source files by using streams. Direct the streams into a compression library. Direct the output of the compression library into a target object in Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the application to download the source files from Amazon S3 and save the files to local storage. Compress the files and upload them to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the application to run as a container in AWS Fargate. Use Amazon EventBridge (Amazon CloudWatch Events) to schedule the task to run once each month.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Provision an Amazon Elastic File System (Amazon EFS) file system. Attach the file system to the AWS Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 590708,
          "date": "Sat 23 Apr 2022 18:25",
          "username": "snakecharmer2",
          "content": "B & D<br>You can write S3 streams in mutliple languages using its SDK, there is no need to download the files.<br>You should use Fargate and not Lambda becuase the proccesing time is bigger than 15 minutes. In Fargate you only pay for the resources you consume while your container is running instead of running the EC2 instance the all month.",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 715582,
          "date": "Thu 10 Nov 2022 22:35",
          "username": "mrgreatness",
          "content": "B and D for me",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 650291,
          "date": "Mon 22 Aug 2022 15:07",
          "username": "asfsdfsdf",
          "content": "Looks like Band D. <br>Lambda cant be used as the process is 2 hours - So A and E are out<br>Regarding C - It will do a full download of the files - need to split it<br>B - use stream (passthrough) so only the size of the stream is needed.<br>D - Not need to pay for an instance just create a task once a month",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 596978,
          "date": "Wed 04 May 2022 19:58",
          "username": "Yamchi",
          "content": "BD is for me",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 596033,
          "date": "Mon 02 May 2022 14:29",
          "username": "hfeng95",
          "content": "It is B & C.  The key is to avoid the network traffic during the compression. Streaming compression and local disk compression fit into this requirement.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 590723,
          "date": "Sat 23 Apr 2022 19:14",
          "username": "Bigbearcn",
          "content": "It's C and D.  use Fargate instead of EC2 to optimize cost.<br>Lambda has 15 min limits,It may not be enough to download the file, compress it and upload to S3. So A and E is rule out.<br><br>For C, I am not sure Fargate local storage can store such large files because Fargate local storage max size is 200GB. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        }
      ]
    },
    {
      "question_id": "#862",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A digital marketing company has multiple AWS accounts that belong to various teams. The creative team uses an Amazon S3 bucket in its AWS account to securely store images and media files that are used as content for the company's marketing campaigns. The creative team wants to share the S3 bucket with the strategy team so that the strategy team can view the objects.<br>A solutions architect has created an IAM role that is named strategy_reviewer in the Strategy account. The solutions architect also has set up a custom AWS Key<br>Management Service (AWS KMS) key in the Creative account and has associated the key with the S3 bucket. However, when users from the Strategy account assume the IAM role and try to access objects in the S3 bucket, they receive an Access Denied error.<br>The solutions architect must ensure that users in the Strategy account can access the S3 bucket. The solution must provide these users with only the minimum permissions that they need.<br>Which combination of steps should the solutions architect take to meet these requirements? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#862",
          "answers": [
            {
              "choice": "<p>A. Create a bucket policy that includes read permissions for the S3 bucket. Set the principal of the bucket policy to the account ID of the Strategy account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Update the strategy_reviewer IAM role to grant full permissions for the S3 bucket and to grant decrypt permissions for the custom KMS key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the custom KMS key policy in the Creative account to grant decrypt permissions to the strategy_reviewer IAM role.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a bucket policy that includes read permissions for the S3 bucket. Set the principal of the bucket policy to an anonymous user.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Update the custom KMS key policy in the Creative account to grant encrypt permissions to the strategy_reviewer IAM role.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Update the strategy_reviewer IAM role to grant read permissions for the S3 bucket and to grant decrypt permissions for the custom KMS key.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 633055,
          "date": "Mon 18 Jul 2022 16:06",
          "username": "Enigmaaaaaa",
          "content": "ACF nothing else make sense - users need to decrypt and read",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 626023,
          "date": "Sat 02 Jul 2022 10:18",
          "username": "aandc",
          "content": "ACF for sure",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 624529,
          "date": "Wed 29 Jun 2022 11:11",
          "username": "TechX",
          "content": "Should be ACF",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 596984,
          "date": "Wed 04 May 2022 20:05",
          "username": "Yamchi",
          "content": "A C F for me",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 590672,
          "date": "Sat 23 Apr 2022 16:00",
          "username": "Bigbearcn",
          "content": "It's ACF. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 590146,
          "date": "Fri 22 Apr 2022 19:06",
          "username": "snakecharmer2",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/cross-account-access-denied-error-s3/<br>ACF<br>In addition to the url above, you can eliminate the 3 of the answers easily<br>B- wrong becuase of the \\\"full access\\\"<br>D- wrong because of the \\\"anonymous user\\\"<br>E- wrong because of the \\\"encrypt\\\" - u need decrypt permission",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 589778,
          "date": "Fri 22 Apr 2022 08:23",
          "username": "mirnuj_atom",
          "content": "shouldn't it be ACF?",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACF"
        }
      ]
    },
    {
      "question_id": "#863",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running several large workloads on Amazon EC2 instances. Each EC2 instance has multiple Amazon Elastic Block Store (Amazon EBS) volumes attached to it. Once each day, an AWS Lambda function invokes the creation of EBS volume snapshots. These snapshots accumulate until an administrator manually purges them.<br>The company must maintain backups for a minimum of 30 days. A solutions architect needs to reduce the costs of this process.<br>Which solution meets these requirements MOST cost-effectively?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#863",
          "answers": [
            {
              "choice": "<p>A. Search AWS Marketplace. Find a third-party solution to deploy to automatically manage the EBS volume backups.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a second Lambda function to move the EBS snapshots that are older than 30 days to Amazon S3 Glacier Deep Archive.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set an Amazon S3 Lifecycle policy on the $3 bucket that contains the snapshots. Create a rule with an expiration action to delete EBS snapshots that are older than 30 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the backup functionality to Amazon Data Lifecycle Manager (Amazon DLM). Create a lifecycle policy for the daily backup of the EBS volumes. Set the retention period for the EBS snapshots to 30 days.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 696355,
          "date": "Sun 16 Oct 2022 17:54",
          "username": "AwsBRFan",
          "content": "DLM no doubts",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 633056,
          "date": "Mon 18 Jul 2022 16:07",
          "username": "Enigmaaaaaa",
          "content": "D - DLM is exactly for this on EBS no need for a lambda function",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 590663,
          "date": "Sat 23 Apr 2022 15:51",
          "username": "Bigbearcn",
          "content": "D.  <br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/automating-snapshots.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#864",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a serverless application in a single AWS Region. The application accesses external URLs and extracts metadata from those sites. The company uses an Amazon Simple Notification Service (Amazon SNS) topic to publish URLs to an Amazon Simple Queue Service (Amazon SQS) queue. An AWS Lambda function uses the queue as an event source and processes the URLs from the queue. Results are saved to an Amazon S3 bucket.<br>The company wants to process each URL in other Regions to compare possible differences in site localization. URLs must be published from the existing Region.<br>Results must be written to the existing S3 bucket in the current Region.<br>Which combination of changes will produce multi-Region deployment that meets these requirements? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#864",
          "answers": [
            {
              "choice": "<p>A. Deploy the SQS queue with the Lambda function to other Regions.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Subscribe the SNS topic in each Region to the SQS queue.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Subscribe the SQS queue in each Region to the SNS topic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the SQS queue to publish URLs to SNS topics in each Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Deploy the SNS topic and the Lambda function to other Regions.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 714964,
          "date": "Thu 10 Nov 2022 07:21",
          "username": "janvandermerwer",
          "content": "A - Process URLs in other regions = Lambda + SQS as source >><br>B - After the above is complete send <br><br> D - Wrong answer - URLs must be published from the existing region.<br>E: Wrong answer - \\\"Process in other regions\\\"= lambda, but \\\"urls must be published from existing region\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 685783,
          "date": "Mon 03 Oct 2022 22:50",
          "username": "sb333",
          "content": "https://docs.aws.amazon.com/sns/latest/dg/sns-cross-region-delivery.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 638978,
          "date": "Fri 29 Jul 2022 06:03",
          "username": "MarkChoi",
          "content": "In other region. it is needed that SQS & Lambda.<br>so, C&E is correct.<br>A is not correct answerr.<br>because, they say that \\\"deploy SQS to other region with using Lambda\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 633059,
          "date": "Mon 18 Jul 2022 16:13",
          "username": "Enigmaaaaaa",
          "content": "Confusing question... A and C since multiple SQS queues can subscribe to one SNS",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 600733,
          "date": "Thu 12 May 2022 18:43",
          "username": "bobsmith2000",
          "content": "It's a fan out.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 590659,
          "date": "Sat 23 Apr 2022 15:44",
          "username": "Bigbearcn",
          "content": "It's A C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 590169,
          "date": "Fri 22 Apr 2022 19:42",
          "username": "snakecharmer2",
          "content": "A & C<br>First you create the SQS and Lambda in each region and then you subscribe the SQS queue to the SNS topic (there is no need to create antoher SNS topic in each region)<br>https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-subscribe-queue-sns-topic.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 589268,
          "date": "Thu 21 Apr 2022 12:54",
          "username": "mirnuj_atomuser0001",
          "content": "AC - the company wants to process the URLs published through the same endpoint, so they are looking to a single SNS with cross-regional delivery but separate SQS + Lambda per region.true that is the key he company wants to process the URLs published through the same endpoint",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 598734,
          "date": "Mon 09 May 2022 00:05",
          "username": "user0001",
          "content": "true that is the key he company wants to process the URLs published through the same endpoint",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#865",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations to manage more than 1,000 AWS accounts. The company has created a new developer organization. There are 540 developer member accounts that must be moved to the new developer organization. All accounts are set up with all the required information so that each account can be operated as a standalone account.<br>Which combination of steps should a solutions architect take to move all of the developer accounts to the new developer organization? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BEF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#865",
          "answers": [
            {
              "choice": "<p>A. Call the MoveAccount operation in the Organizations API from the old organization's management account to migrate the developer accounts to the new developer organization.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. From the management account, remove each developer account from the old organization using the RemoveAccountFromOrganization operation in the Organizations API.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. From each developer account, remove the account from the old organization using the RemoveAccountFromOrganization operation in the Organizations API.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Sign in to the new developer organization's management account and create a placeholder member account that acts as a target for the developer account migration.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Call the InviteAccountToOrganization operation in the Organizations API from the new developer organization's management account to send invitations to the developer accounts.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Have each developer sign in to their account and confirm to join the new developer organization.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 590380,
          "date": "Sat 23 Apr 2022 05:39",
          "username": "Bigbearcn",
          "content": "It's B,E,F.  you need to remove member account from old org management account.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BEF"
        },
        {
          "id": 590149,
          "date": "Fri 22 Apr 2022 19:13",
          "username": "snakecharmer2",
          "content": "BEF<br>1 - remove from the old organization<br>2 - invite to the new one<br>3 - developer should accept the invitation<br>See the steps here: <br>https://aws.amazon.com/premiumsupport/knowledge-center/organizations-move-accounts/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BEF"
        },
        {
          "id": 589248,
          "date": "Thu 21 Apr 2022 12:16",
          "username": "mirnuj_atom",
          "content": "I think the right combination is BEF, as one cannot call \\\"RemoveAccountFromOrganization\\\" from the member account:<br>\\\"This operation can be called only from the organization's management account. Member accounts can remove themselves with LeaveOrganization instead.\\\"<br>https://docs.aws.amazon.com/organizations/latest/APIReference/API_RemoveAccountFromOrganization.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BEF"
        }
      ]
    },
    {
      "question_id": "#866",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A data analytics company has an Amazon Redshift cluster that consists of several reserved nodes. The cluster is experiencing unexpected bursts of usage because a team of employees is compiling a deep audit analysis report. The queries to generate the report are complex read queries and are CPU intensive.<br>Business requirements dictate that the cluster must be able to service read and write queries at all times. A solutions architect must devise a solution that accommodates the bursts of usage.<br>Which solution meets these requirements MOST cost-effectively?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#866",
          "answers": [
            {
              "choice": "<p>A. Provision an Amazon EMR cluster. Offload the complex data processing tasks.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an AWS Lambda function to add capacity to the Amazon Redshift cluster by using a classic resize operation when the cluster's CPU metrics in Amazon CloudWatch reach 80%.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy an AWS Lambda function to add capacity to the Amazon Redshift cluster by using an elastic resize operation when the cluster's CPU metrics in Amazon CloudWatch reach 80%<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Turn on the Concurrency Scaling feature for the Amazon Redshift cluster.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 595129,
          "date": "Sat 30 Apr 2022 17:36",
          "username": "Alexey79",
          "content": "https://docs.aws.amazon.com/redshift/latest/dg/concurrency-scaling.html<br>“<br>support virtually unlimited concurrent users and concurrent queries, with consistently fast query performance.<br><br>When you turn on concurrency scaling, Amazon Redshift automatically adds additional cluster capacity to process an increase in both read and write queries.<br><br>Users see the most current data, whether the queries run on the main cluster or a concurrency-scaling cluster. You're charged for concurrency-scaling clusters only for the time they're actively running queries.<br>“",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 590378,
          "date": "Sat 23 Apr 2022 05:27",
          "username": "Bigbearcn",
          "content": "It's C.  Elastic resize for Redshift cluster to add nodes.<br>https://aws.amazon.com/cn/blogs/big-data/scale-your-amazon-redshift-clusters-up-and-down-in-minutes-to-get-the-performance-you-need-when-you-need-it/",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 655188,
          "date": "Wed 31 Aug 2022 16:31",
          "username": "gnic",
          "content": "It's D. <br>Resizing will get cluster unavailable for few minutes, and question ask for run query all the time.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 651603,
          "date": "Thu 25 Aug 2022 04:24",
          "username": "AYANtheGLADIATOR",
          "content": "D is the answer for sure.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 633047,
          "date": "Mon 18 Jul 2022 15:42",
          "username": "Enigmaaaaaa",
          "content": "Only D is valid since reserved instances were bought - scaling down the cluster will not help to save cost.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 626600,
          "date": "Sun 03 Jul 2022 16:45",
          "username": "aandc",
          "content": "Vote D since concurrency-scaling has free credits<br>\\\"Concurrency Scaling credits<br><br>Redshift clusters earn up to one hour of free Concurrency Scaling credits per day. Credits are earned on an hourly basis for each active cluster in your AWS account, and can be consumed by the same cluster only after credits are earned. You can accumulate up to 30 hours of free Concurrency Scaling credits for each active cluster. Credits do not expire as long as your cluster is not terminated.\\\"",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 599216,
          "date": "Mon 09 May 2022 20:02",
          "username": "bobsmith2000",
          "content": "Key phrases:<br>\\\"numerous reserved nodes\\\" - adding or deleting don't seem to be an option<br>\\\"cost-effectiveness\\\"<br><br>Between C and D<br>C - https://docs.aws.amazon.com/redshift/latest/mgmt/managing-cluster-operations.html#elastic-resize<br>D - https://docs.aws.amazon.com/redshift/latest/dg/concurrency-scaling.html<br><br>As to me D makes more sense. It doesn't cause a cluster unavailability and aws charges you for concurrency-scaling clusters only for the time they're actively running queries.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#867",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A software company is using three AWS accounts for each of its 10 development teams. The company has developed an AWS CloudFormation standard VPC template that includes three NAT gateways. The template is added to each account for each team. The company is concerned that network costs will increase each time a new development team is added. A solutions architect must maintain the reliability of the company's solutions and minimize operational complexity.<br>What should the solutions architect do to reduce the network costs while meeting these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#867",
          "answers": [
            {
              "choice": "<p>A. Create a single VPC with three NAT gateways in a shared services account. Configure each account VPC with a default route through a transit gateway to the NAT gateway in the shared services account VPC.  Remove all NAT gateways from the standard VPC template.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a single VPC with three NAT gateways in a shared services account. Configure each account VPC with a default route through a VPC peering connection to the NAT gateway in the shared services account VPC.  Remove all NAT gateways from the standard VPC template.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Remove two NAT gateways from the standard VPC template. Rely on the NAT gateway SLA to cover reliability for the remaining NAT gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a single VPC with three NAT gateways in a shared services account. Configure a Site-to-Site VPN connection from each account to the shared services account. Remove all NAT gateways from the standard VPC template.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 590369,
          "date": "Sat 23 Apr 2022 05:13",
          "username": "Bigbearcnsnakecharmer2user0001Byrney",
          "content": "It's A.  https://aws.amazon.com/cn/blogs/networking-and-content-delivery/creating-a-single-internet-exit-point-from-multiple-vpcs-using-aws-transit-gateway/correct A, and also vpc peering is not Transitive, cant be used for egress using NAT. so B is wrongif you read B , it say each VPC peered with the shared VPC which will work in this caseB won't work:https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-basics.html<br><br>\\\"If VPC A has an NAT device that provides internet access to subnets in VPC A, resources in VPC B can't use the NAT device in VPC A to access the internet.\\\"",
          "upvote_count": "11311",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 596544,
          "date": "Wed 04 May 2022 08:17",
          "username": "snakecharmer2user0001Byrney",
          "content": "correct A, and also vpc peering is not Transitive, cant be used for egress using NAT. so B is wrongif you read B , it say each VPC peered with the shared VPC which will work in this caseB won't work:https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-basics.html<br><br>\\\"If VPC A has an NAT device that provides internet access to subnets in VPC A, resources in VPC B can't use the NAT device in VPC A to access the internet.\\\"",
          "upvote_count": "311",
          "selected_answers": ""
        },
        {
          "id": 603014,
          "date": "Tue 17 May 2022 20:29",
          "username": "user0001Byrney",
          "content": "if you read B , it say each VPC peered with the shared VPC which will work in this caseB won't work:https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-basics.html<br><br>\\\"If VPC A has an NAT device that provides internet access to subnets in VPC A, resources in VPC B can't use the NAT device in VPC A to access the internet.\\\"",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 714276,
          "date": "Wed 09 Nov 2022 05:13",
          "username": "Byrney",
          "content": "B won't work:https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-basics.html<br><br>\\\"If VPC A has an NAT device that provides internet access to subnets in VPC A, resources in VPC B can't use the NAT device in VPC A to access the internet.\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 714278,
          "date": "Wed 09 Nov 2022 05:14",
          "username": "Byrney",
          "content": "Byrney 0 minutes ago Awaiting moderator approval<br>B won't work:https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-basics.html<br><br>\\\"If VPC A has an NAT device that provides internet access to subnets in VPC A, resources in VPC B can't use the NAT device in VPC A to access the internet.\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 697509,
          "date": "Mon 17 Oct 2022 17:23",
          "username": "AwsBRFan",
          "content": "\\\"minimize operational complexity.\\\" so peering is not the best choice,",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 691680,
          "date": "Tue 11 Oct 2022 05:18",
          "username": "skywalkerPigi_102",
          "content": "B<br>Between A nd B, i go for B as there are only 3 accounts/vpc to be peer.No need to have Transit Gateway which added additional cost.3 account for each of 10 development teams. This count at least 30 account/vpc.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 711621,
          "date": "Sat 05 Nov 2022 09:39",
          "username": "Pigi_102",
          "content": "3 account for each of 10 development teams. This count at least 30 account/vpc.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 655303,
          "date": "Wed 31 Aug 2022 19:01",
          "username": "gnicgnic",
          "content": "Why guys you are pointing accent on costs? The question ask for reliability and operational complexity. <br>Should be A in this case.Also the NAT Gateway are in the shared services account, it should save costs.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 655304,
          "date": "Wed 31 Aug 2022 19:02",
          "username": "gnic",
          "content": "Also the NAT Gateway are in the shared services account, it should save costs.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 638583,
          "date": "Thu 28 Jul 2022 10:45",
          "username": "CloudHandsOn",
          "content": "B.  This is my final answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 633053,
          "date": "Mon 18 Jul 2022 15:55",
          "username": "Enigmaaaaaa",
          "content": "A will reduce operational complexity for sure.<br>B is incorrect - you have limitation of peering connection of 125 MAX also you cant route traffic to NAT using peering <br>https://docs.aws.amazon.com/vpc/latest/peering/invalid-peering-configurations.html#edge-to-edge-vgw<br>\\\"If either VPC in a peering relationship has one of the following connections, you cannot extend the peering relationship to that connection:<br>An internet connection through an internet gateway<br>An internet connection in a private subnet through a NAT device<br>\\\"",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 627796,
          "date": "Wed 06 Jul 2022 11:12",
          "username": "aandc",
          "content": "A B are both OK. but B is cheaper",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 604969,
          "date": "Sat 21 May 2022 19:50",
          "username": "bobsmith2000",
          "content": "B is cheaper than A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 603012,
          "date": "Tue 17 May 2022 20:28",
          "username": "user0001sb333",
          "content": "B is right as it is low cost .<br><br>https://aws.amazon.com/blogs/apn/simplifying-routing-across-multiple-aws-regions-with-a-virtual-router-service/B does not minimize operational complexity, which is one of the requirements of the question. TGW minimizes operational complexity.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 685202,
          "date": "Mon 03 Oct 2022 06:30",
          "username": "sb333",
          "content": "B does not minimize operational complexity, which is one of the requirements of the question. TGW minimizes operational complexity.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#868",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is creating a sequel for a popular online game. A large number of users from all over the world will play the game within the first week after launch.<br>Currently, the game consists of the following components deployed in a single AWS Region:<br>✑ Amazon S3 bucket that stores game assets<br>✑ Amazon DynamoDB table that stores player scores<br>A solutions architect needs to design a multi-Region solution that will reduce latency, improve reliability, and require the least effort to implement.<br>What should the solutions architect do to meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#868",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon CloudFront distribution to serve assets from the S3 bucket. Configure S3 Cross-Region Replication. Create a new DynamoDB table in a new Region. Use the new table as a replica target for DynamoDB global tables.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon CloudFront distribution to serve assets from the S3 bucket. Configure S3 Same-Region Replication. Create a new DynamoDB table in a new Region. Configure asynchronous replication between the DynamoDB tables by using AWS Database Migration Service (AWS DMS) with change data capture (CDC).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create another S3 bucket in a new Region, and configure S3 Cross-Region Replication between the buckets. Create an Amazon CloudFront distribution and configure origin failover with two origins accessing the S3 buckets in each Region. Configure DynamoDB global tables by enabling Amazon DynamoDB Streams, and add a replica table in a new Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create another S3 bucket in the sine Region, and configure S3 Same-Region Replication between the buckets. Create an Amazon CloudFront distribution and configure origin failover with two origins accessing the S3 buckets. Create a new DynamoDB table in a new Region. Use the new table as a replica target for DynamoDB global tables.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 590374,
          "date": "Sat 23 Apr 2022 05:20",
          "username": "Bigbearcn",
          "content": "It's C.  <br>D is definitely wrong because same region replicate",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 712327,
          "date": "Sun 06 Nov 2022 14:38",
          "username": "Relaxeasy",
          "content": "C makes sense",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 670671,
          "date": "Fri 16 Sep 2022 11:48",
          "username": "ASC1joancarles",
          "content": "for dynamodb Global table streams should be enabled. that is a pre-requisiteCorrect:<br>https://aws.amazon.com/premiumsupport/knowledge-center/dynamodb-global-table-stream-lambda/?nc1=h_ls",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 672036,
          "date": "Sun 18 Sep 2022 08:28",
          "username": "joancarles",
          "content": "Correct:<br>https://aws.amazon.com/premiumsupport/knowledge-center/dynamodb-global-table-stream-lambda/?nc1=h_ls",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 636922,
          "date": "Mon 25 Jul 2022 21:25",
          "username": "allasikipixepe",
          "content": "C is not correct , how is Dynamo streams related to the solution ?DynamoDB Stream is Prerequisite for Dynamo global Tables, which creates replica table in other regions.<br><br>From AWS, \\\"For replication to work, DynamoDB Streams will be enabled automatically for new and old images.\\\"",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 671526,
          "date": "Sat 17 Sep 2022 14:54",
          "username": "pixepe",
          "content": "DynamoDB Stream is Prerequisite for Dynamo global Tables, which creates replica table in other regions.<br><br>From AWS, \\\"For replication to work, DynamoDB Streams will be enabled automatically for new and old images.\\\"",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 636921,
          "date": "Mon 25 Jul 2022 21:23",
          "username": "allasiki",
          "content": "why not A ?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 589217,
          "date": "Thu 21 Apr 2022 10:51",
          "username": "mirnuj_atom",
          "content": "The reference article describes the Cross-Region replication, which is answer C. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#869",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing a solution to connect a company's on-premises network with all the company's current and future VPCs on AWS. The company is running VPCs in five different AWS Regions and has at least 15 VPCs in each Region.<br>The company's AWS usage is constantly increasing and will continue to grow. Additionally, all the VPCs throughout all five Regions must be able to communicate with each other.<br>The solution must maximize scalability and ease of management.<br>Which solution meets these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#869",
          "answers": [
            {
              "choice": "<p>A. Set up a transit gateway in each Region. Establish a redundant AWS Site-to-Site VPN connection between the on-premises firewalls and the transit gateway in the Region that is closest to the on-premises network. Peer all the transit gateways with each other. Connect all the VPCs to the transit gateway in their Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS CloudFormation template for a redundant AWS Site-to-Site VPN tunnel to the on-premises network. Deploy the CloudFormation template for each VPC.  Set up VPC peering between all the VPCs for VPC-to-VPC communication.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up a transit gateway in each Region. Establish a redundant AWS Site-to-Site VPN connection between the on-premises firewalls and each transit gateway. Route traffic between the different Regions through the company's on-premises firewalls. Connect all the VPCs to the transit gateway in their Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS CloudFormation template for a redundant AWS Site-to-Site VPN tunnel to the on-premises network. Deploy the CloudFormation template for each VPC.  Route traffic between the different Regions through the company's on-premises firewalls.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 590305,
          "date": "Sat 23 Apr 2022 01:58",
          "username": "Bigbearcnsnakecharmer2delfnecdelfnec",
          "content": "I think it's A.  The solution must maximize scalability and ease of management. There are too much VPC, so B is wrong.It is A - intra-region transit gateways peering - https://aws.amazon.com/blogs/networking-and-content-delivery/aws-transit-gateway-now-supports-intra-region-peering/but they have 5 regions so you cant pearing them...oh sorry ,then can...here is the url...<br>https://aws.amazon.com/about-aws/whats-new/2019/12/aws-transit-gateway-supports-inter-region-peering/?nc1=h_ls",
          "upvote_count": "8211",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 593969,
          "date": "Thu 28 Apr 2022 19:29",
          "username": "snakecharmer2delfnecdelfnec",
          "content": "It is A - intra-region transit gateways peering - https://aws.amazon.com/blogs/networking-and-content-delivery/aws-transit-gateway-now-supports-intra-region-peering/but they have 5 regions so you cant pearing them...oh sorry ,then can...here is the url...<br>https://aws.amazon.com/about-aws/whats-new/2019/12/aws-transit-gateway-supports-inter-region-peering/?nc1=h_ls",
          "upvote_count": "211",
          "selected_answers": ""
        },
        {
          "id": 596612,
          "date": "Wed 04 May 2022 10:24",
          "username": "delfnec",
          "content": "but they have 5 regions so you cant pearing them...",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 596615,
          "date": "Wed 04 May 2022 10:27",
          "username": "delfnec",
          "content": "oh sorry ,then can...here is the url...<br>https://aws.amazon.com/about-aws/whats-new/2019/12/aws-transit-gateway-supports-inter-region-peering/?nc1=h_ls",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 704878,
          "date": "Wed 26 Oct 2022 19:05",
          "username": "Blair77",
          "content": "AAA for me!",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 605370,
          "date": "Sun 22 May 2022 13:01",
          "username": "bobsmith2000wassb",
          "content": "A or C. <br>A looks better, because we don't need to create lots of VPNs and route traffic through onpremIt's A.  <br>In C, the TGW are not peered and the VPCs throughout the region wont be able to communicate.",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 697001,
          "date": "Mon 17 Oct 2022 08:33",
          "username": "wassb",
          "content": "It's A.  <br>In C, the TGW are not peered and the VPCs throughout the region wont be able to communicate.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 589208,
          "date": "Thu 21 Apr 2022 10:24",
          "username": "mirnuj_atomRocketeer",
          "content": "I think C fits better, the company already has 75 VPCs and plans to grow. So setting up 1 to 74 peering connections per VPCand updating the pool for each new VPC sounds like a mess to me.one transit gateway per region. Hence the transit gateways in different regions need to be peered. Hence A. ",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 656368,
          "date": "Thu 01 Sep 2022 16:44",
          "username": "Rocketeer",
          "content": "one transit gateway per region. Hence the transit gateways in different regions need to be peered. Hence A. ",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#870",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A large company is migrating its on-premises applications to the AWS Cloud. All the company's AWS accounts belong to an organization in AWS Organizations.<br>Each application is deployed into its own VPC in separate AWS accounts.<br>The company decides to start the migration process by migrating the front-end web services while keeping the databases on premises. The databases are configured with local domain names that are specific to the on-premises environment. The local domain names must be resolvable from the migrated web services.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#870",
          "answers": [
            {
              "choice": "<p>A. Create a shared services VPC in a new AWS account. Deploy Amazon Route 53 outbound resolvers. For relevant on-premises domains, use the outbound resolver settings to create forwarding rules that point to the on-premises DNS servers. Share these rules with the other AWS accounts by using AWS Resource Access Manager.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy Multi-AZ Amazon Route 53 outbound resolvers in each VPC.  Create forwarding rules that point to on-premises DNS servers in local outbound resolvers for each VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a shared services VPC in a new AWS account. Deploy Amazon EC2 instances that act conditional forwarders inside the shared services VPC.  Change the DHCP options set in each VPC to point to these forwarders as DNS servers. Create forwarding rules for relevant on-premises domains in these forwarders.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a shared services VPC in a new AWS account. Deploy Amazon Route 53 inbound resolvers. For relevant on-premises domains, create forwarding rules that point to on-premises DNS servers. Share these rules with other AWS accounts by using AWS Resource Access Manager.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 714775,
          "date": "Wed 09 Nov 2022 22:26",
          "username": "janvandermerwer",
          "content": "A seems to be a go. \\\"LEAST\\\" operational effort.<br>OUTBOUND from VPC to on-premise.<br>AWS App > Shared VPC > Outbound Resolver > On premise",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 685175,
          "date": "Mon 03 Oct 2022 05:09",
          "username": "sb333",
          "content": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html#resolver-overview-forward-vpc-to-network<br>https://aws.amazon.com/premiumsupport/knowledge-center/route-53-share-resolver-rules-with-ram/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 666363,
          "date": "Sun 11 Sep 2022 20:22",
          "username": "Ni_yot",
          "content": "concur its A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 656788,
          "date": "Fri 02 Sep 2022 03:20",
          "username": "RVD",
          "content": "Answer isA",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#871",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an organization in AWS Organizations. The organization consists of a large number of AWS accounts that belong to separate business units. The company requires all Amazon EC2 instances to be provisioned with custom, hardened AMIs. The company wants a solution that provides each AWS account access to the AMIs.<br>Which solution will meet these requirements with the MOST operational efficiency?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#871",
          "answers": [
            {
              "choice": "<p>A. Create the AMIs with EC2 Image Builder. Create an AWS CodePipeline pipeline to share the AMIs across all AWS accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy Jenkins on an EC2 instance. Create jobs to create and share the AMIs across all AWS accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create and share the AMIs with EC2 Image Builder. Use AWS Service Catalog to configure a product that provides access to the AMIs across all AWS accounts.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create the AMIs with EC2 Image Builder. Create an AWS Lambda function to share the AMIs across all AWS accounts.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 714776,
          "date": "Wed 09 Nov 2022 22:28",
          "username": "janvandermerwer",
          "content": "A and B do not appear to be the most operationally efficient.<br><br>C will do the job and will allow individual business units to subscribe.<br>D will also work, however may not scale as new accounts are added to the environment.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 685171,
          "date": "Mon 03 Oct 2022 05:01",
          "username": "sb333",
          "content": "https://aws.amazon.com/blogs/mt/simplify-sharing-your-aws-service-catalog-portfolios-in-an-aws-organizations-setup/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 678964,
          "date": "Sun 25 Sep 2022 17:37",
          "username": "akash_it",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 678711,
          "date": "Sun 25 Sep 2022 12:49",
          "username": "SGES",
          "content": "Consider - C<br>https://youtu.be/A6-jv3gZa4U<br>https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 677698,
          "date": "Sat 24 Sep 2022 10:58",
          "username": "PramodPant",
          "content": "https://www.bluepiit.com/blog/how-to-automate-copying-an-ec2-amis-from-one-aws-region-to-another-cleanup-using-aws-lambda/<br>D should be correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 658972,
          "date": "Sun 04 Sep 2022 07:33",
          "username": "JoMainAWSNi_yot",
          "content": "D is correct one from previous setA link or reference would be nice",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 666346,
          "date": "Sun 11 Sep 2022 19:52",
          "username": "Ni_yot",
          "content": "A link or reference would be nice",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#872",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to deploy an API to AWS. The company plans to run the API on AWS Fargate behind a load balancer. The API requires the use of header- based routing and must be accessible from on-premises networks through an AWS Direct Connect connection and a private VIF. <br>The company needs to add the client IP addresses that connect to the API to an allow list in AWS. The company also needs to add the IP addresses of the API to the allow list. The company's security team will allow /27 CIDR ranges to be added to the allow list. The solution must minimize complexity and operational overhead.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#872",
          "answers": [
            {
              "choice": "<p>A. Create a new Network Load Balancer (NLB) in the same subnets as the Fargate task deployments. Create a security group that includes only the client IP addresses that need access to the API. Attach the new security group to the Fargate tasks. Provide the security team with the NLB's IP addresses for the allow list.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create two new /27 subnets. Create a new Application Load Balancer (ALB) that extends across the new subnets. Create a security group that includes only the client IP addresses that need access to the API. Attach the security group to the ALB, Provide the security team with the new subnet IP ranges for the allow list.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create two new /27 subnets. Create a new Network Load Balancer (NLB) that extends across the new subnets. Create a new Application Load Balancer (ALB) within the new subnets. Create a security group that includes only the client IP addresses that need access to the API. Attach the security group to the ALB.  Add the ALB's IP addresses as targets behind the NLB.  Provide the security team with the NLB's IP addresses for the allow list.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new Application Load Balancer (ALB) in the same subnets as the Fargate task deployments. Create a security group that includes only the client IP addresses that need access to the API. Attach the security group to the ALB.  Provide the security team with the ALB's IP addresses for the allow list.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 685168,
          "date": "Mon 03 Oct 2022 04:52",
          "username": "sb333",
          "content": "Since the security group will permit /27 CIDR ranges to be added to the allow list, we do not need to know what the actual IPs are of the ALBs (as they are dynamic). ALB is required as it operates at L7, needed for head-based routing.",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 687909,
          "date": "Thu 06 Oct 2022 17:05",
          "username": "dcdcdc3",
          "content": "Thank you all for tips. This link shows C is the solution for the specified requirements:<br>https://aws.amazon.com/blogs/networking-and-content-delivery/application-load-balancer-type-target-group-for-network-load-balancer/",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 709768,
          "date": "Wed 02 Nov 2022 12:43",
          "username": "sjpd10",
          "content": "C. <br>NLB --> ALB ( SG with client IPs ) -->Subnets ( /27 )",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 708585,
          "date": "Mon 31 Oct 2022 18:04",
          "username": "exam_war",
          "content": "NLB + ALB",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 708279,
          "date": "Mon 31 Oct 2022 09:10",
          "username": "nsvijay04b1Byrney",
          "content": "You need NLB to provide static IP to company and put 2 ALBs in 2 subnet /27path /route forwardingto application.<br>a) NLB - its layer 4 , cant path forward<br>b) you cant get IPs for ALBs to provide it to allow list<br>c) NLB to give IP to allow list and put 2 ALBs to path forward to application - CORRECT answer<br>d) ALB cant provide IP,plus in app subnet doesnt help to be in /27 rulesALBs will be given private IP addresses in the /27 CIDR blocks.",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 714286,
          "date": "Wed 09 Nov 2022 05:22",
          "username": "Byrney",
          "content": "ALBs will be given private IP addresses in the /27 CIDR blocks.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 701438,
          "date": "Sat 22 Oct 2022 11:19",
          "username": "fdoxxx",
          "content": "B - \\\"Posted On: Mar 27, 2019 Application Load Balancers now support request routing based on standard or custom HTTP headers and methods, query parameters, and source IP addresses. This launch extends the existing support for Host header and path-based routing rules in Application Load Balancers to more fields from HTTP request messages. This richer set of routing criteria enables you to further simplify your application architecture by offloading routing functionality to the load balancer. It can also be used to block unwanted traffic at the load balancer.\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 691688,
          "date": "Tue 11 Oct 2022 05:34",
          "username": "skywalker",
          "content": "C <br>Make us of NLB static IPto allow security team to whitelist",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 690529,
          "date": "Sun 09 Oct 2022 22:46",
          "username": "caveman712",
          "content": "Header-based routing - require ALB<br>ALB's IP are dynamic - need to put the CIDR range in the allow list",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 673883,
          "date": "Tue 20 Sep 2022 09:02",
          "username": "pinhead900",
          "content": "NLB for static ip, then load balance it to ALB",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 670467,
          "date": "Fri 16 Sep 2022 06:52",
          "username": "phuongntbphuongntb",
          "content": "D.  Sine ALB does not provided static ip but in this case we need abl for header routing. NLB forward traffic to ALB is a good solution in this casei mean c.",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 670468,
          "date": "Fri 16 Sep 2022 06:53",
          "username": "phuongntb",
          "content": "i mean c.",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#873",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has two VPCs: VPC A and VPC B.  The company uses a solution in VPC A in the ca-central-1 Region to expose services that are deployed on Amazon<br>EC2 instances. The services read objects that are stored in an Amazon S3 bucket in ca-central-1. The S3 bucket must not be publicly accessible, and the EC2 instances must use a gateway VPC endpoint. A rule in the S3 bucket policy allows only traffic that comes from the VPC A endpoint.<br>The company recently created another application. The application is hosted on EC2 instances that are deployed in VPC B in the us-east-1 Region in the same<br>AWS account. The application needs to access objects that are stored in the S3 bucket in ca-central-1.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#873",
          "answers": [
            {
              "choice": "<p>A. Create a cross-Region VPC peering connection between the two VPCs. Add a route in the route table of VPC B to use the peering connection to access the S3 gateway VPC endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a gateway VPC endpoint in VPC B in us-east-1. Add a route in the route table of VPC B to use the S3 gateway VPC endpoint to access Amazon S3. Update the S3 bucket policy to accept connection from this gateway VPC endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a third VPC (VPC C) in ca-central-1. Create a cross-Region VPC peering connection between VPC C and VPC B in us-east-1. Use AWS PrivateLink with a Network Load Balancer (NLB) to expose the services in VPC A in ca-central-1. Use the interface VPC endpoint created with PrivateLink in VPC C to call the services.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a virtual private gateway, and attach it to VPC A in ca-central-1. Create an IPsec VPN connection between the EC2 instances in us-east-1 and the virtual private gateway. Grant the EC2 instances in us-east-1 direct access to the S3 bucket by adding a route to use the VPN connection to access Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 692905,
          "date": "Wed 12 Oct 2022 11:33",
          "username": "JohnPiKakusaif",
          "content": "C is the answer, you need an interface gateway.<br>S3 access through gateway endpoints is supported only for resources in a specific VPC to which the endpoint is associated. S3 gateway endpoints do not currently support access from resources in a different Region, different VPC, or from an on-premises (non-AWS) environment.<br>https://aws.amazon.com/blogs/architecture/choosing-your-vpc-endpoint-strategy-for-amazon-s3/agreed- Resources on the other side of a VPC peering connection, transit gateway, or AWS Direct Connect connection in your VPC cannot use a S3 gateway endpoint to communicate with Amazon S3.",
          "upvote_count": "102",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 703739,
          "date": "Tue 25 Oct 2022 11:36",
          "username": "Kakusaif",
          "content": "agreed- Resources on the other side of a VPC peering connection, transit gateway, or AWS Direct Connect connection in your VPC cannot use a S3 gateway endpoint to communicate with Amazon S3.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 657981,
          "date": "Sat 03 Sep 2022 04:18",
          "username": "rajveenano2ndnano2ndKakusaif",
          "content": "I believe should be A, https://aws.amazon.com/premiumsupport/knowledge-center/vpc-endpoints-cross-region-aws-services/For example, if you deploy an S3 VPC endpoint in the us-west-2 Region, then you can access S3 buckets in us-west-2 from that VPC endpoint.from that link:However, you can access these VPC endpoints from the same Region only. For example, if you deploy an S3 VPC endpoint in the us-west-2 Region, then you can access S3 buckets in us-west-2 from that VPC endpoint.question mentions S3 gateway endpoint -Resources on the other side of a VPN connection, VPC peering connection, transit gateway, or AWS Direct Connect connection in your VPC cannot use a S3 gateway endpoint to communicate with Amazon S3.",
          "upvote_count": "7112",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 715456,
          "date": "Thu 10 Nov 2022 19:27",
          "username": "nano2ndnano2nd",
          "content": "For example, if you deploy an S3 VPC endpoint in the us-west-2 Region, then you can access S3 buckets in us-west-2 from that VPC endpoint.from that link:However, you can access these VPC endpoints from the same Region only. For example, if you deploy an S3 VPC endpoint in the us-west-2 Region, then you can access S3 buckets in us-west-2 from that VPC endpoint.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 715457,
          "date": "Thu 10 Nov 2022 19:28",
          "username": "nano2nd",
          "content": "from that link:However, you can access these VPC endpoints from the same Region only. For example, if you deploy an S3 VPC endpoint in the us-west-2 Region, then you can access S3 buckets in us-west-2 from that VPC endpoint.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 703735,
          "date": "Tue 25 Oct 2022 11:34",
          "username": "Kakusaif",
          "content": "question mentions S3 gateway endpoint -Resources on the other side of a VPN connection, VPC peering connection, transit gateway, or AWS Direct Connect connection in your VPC cannot use a S3 gateway endpoint to communicate with Amazon S3.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 715074,
          "date": "Thu 10 Nov 2022 10:08",
          "username": "janvandermerwer",
          "content": "D seems overkill<br>A doesn't seem like it's going to work<br>B also won't work<br>Answer must be C:Gateway VPC endpoint is VPC specific and allows access to resources in that region only.<br><br>\\\"A gateway endpoint is available only in the Region where you created it. Be sure to create your gateway endpoint in the same Region as your S3 buckets.\\\"<br><br>\\\"Endpoint connections cannot be extended out of a VPC.  Resources on the other side of a VPN connection, VPC peering connection, transit gateway, or AWS Direct Connect connection in your VPC cannot use a gateway endpoint to communicate with Amazon S3.\\\"<br><br>https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 708096,
          "date": "Mon 31 Oct 2022 01:33",
          "username": "Rocketeer",
          "content": "A<br>https://aws.amazon.com/premiumsupport/knowledge-center/vpc-endpoints-cross-region-aws-services/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 697546,
          "date": "Mon 17 Oct 2022 18:14",
          "username": "AwsBRFan",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/vpc-endpoints-cross-region-aws-services/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 686424,
          "date": "Tue 04 Oct 2022 22:28",
          "username": "joanneli77",
          "content": "Answer is B IMHO - you can write to an S3 bucket from anywhere, and a Gateway Endpoint in VPC B is to the S3 service in that region.Yes there is more latency.As long as I can communicate to S3 service and have some sort of auth, I can write to a bucket anywhere.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 685161,
          "date": "Mon 03 Oct 2022 04:35",
          "username": "sb333AkaAka4",
          "content": "Neither A nor B are correct. This is because they both use S3 \\\"gateway\\\" endpoints. Gateway endpoints cannot be used outside of its own VPC, and they also cannot reference S3 buckets in another Region.<br><br>Answer C is correct. For answer C, it has both relevant and non-relevant information in it. The relevant part for accessing the S3 bucket from both Regions is: \\\"Create a third VPC (VPC C) in ca-central-1. Create a cross-Region VPC peering connection between VPC C and VPC B in us-east-1. Use the interface VPC endpoint created with PrivateLink in VPC C to call the services.\\\" An interface VPC endpoint is a newer offering (for S3 can be accessed across a cross-Region VPC peering connection. The rest of the answer isn't relevant as it speaks to what you can do for accessing the application.<br><br>https://aws.amazon.com/blogs/aws/aws-privatelink-for-amazon-s3-now-available/This comment really helped me understand. Thanks so much!",
          "upvote_count": "51",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 716231,
          "date": "Fri 11 Nov 2022 18:10",
          "username": "AkaAka4",
          "content": "This comment really helped me understand. Thanks so much!",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 684899,
          "date": "Sun 02 Oct 2022 16:44",
          "username": "JohnPiJohnPiJohnPi",
          "content": "Gateway VPC endpoint must be in the same region as S3 bucketit is not A.  Gateway endpoint cannot be extended out of a VPC (VPN, DX, TGW, peeringC must be the answer, you need an interface gateway.<br>S3 access through gateway endpoints is supported only for resources in a specific VPC to which the endpoint is associated. S3 gateway endpoints do not currently support access from resources in a different Region, different VPC, or from an on-premises (non-AWS) environment. <br>https://aws.amazon.com/blogs/architecture/choosing-your-vpc-endpoint-strategy-for-amazon-s3/",
          "upvote_count": "121",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 692898,
          "date": "Wed 12 Oct 2022 11:22",
          "username": "JohnPiJohnPi",
          "content": "it is not A.  Gateway endpoint cannot be extended out of a VPC (VPN, DX, TGW, peeringC must be the answer, you need an interface gateway.<br>S3 access through gateway endpoints is supported only for resources in a specific VPC to which the endpoint is associated. S3 gateway endpoints do not currently support access from resources in a different Region, different VPC, or from an on-premises (non-AWS) environment. <br>https://aws.amazon.com/blogs/architecture/choosing-your-vpc-endpoint-strategy-for-amazon-s3/",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 692903,
          "date": "Wed 12 Oct 2022 11:32",
          "username": "JohnPi",
          "content": "C must be the answer, you need an interface gateway.<br>S3 access through gateway endpoints is supported only for resources in a specific VPC to which the endpoint is associated. S3 gateway endpoints do not currently support access from resources in a different Region, different VPC, or from an on-premises (non-AWS) environment. <br>https://aws.amazon.com/blogs/architecture/choosing-your-vpc-endpoint-strategy-for-amazon-s3/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 676917,
          "date": "Fri 23 Sep 2022 10:40",
          "username": "pinhead900",
          "content": "Cannot be A as is stated that \\\"A rule in the S3 bucket policy allows only traffic that comes from the VPC A endpoint\\\".Only with VPC peering the access would be denied.<br>Must be B",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 659785,
          "date": "Mon 05 Sep 2022 08:12",
          "username": "caleKakusaif",
          "content": "Yes seems to be A - VPC peeringquestion mentions S3 gateway endpoint -Resources on the other side of a VPN connection, VPC peering connection, transit gateway, or AWS Direct Connect connection in your VPC cannot use a S3 gateway endpoint to communicate with Amazon S3.",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 703738,
          "date": "Tue 25 Oct 2022 11:35",
          "username": "Kakusaif",
          "content": "question mentions S3 gateway endpoint -Resources on the other side of a VPN connection, VPC peering connection, transit gateway, or AWS Direct Connect connection in your VPC cannot use a S3 gateway endpoint to communicate with Amazon S3.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 657980,
          "date": "Sat 03 Sep 2022 04:17",
          "username": "rajveeKakusaif",
          "content": "I believe should be A, https://aws.amazon.com/premiumsupport/knowledge-center/vpc-endpoints-cross-region-aws-services/question mentions S3 gateway endpoint -Resources on the other side of a VPN connection, VPC peering connection, transit gateway, or AWS Direct Connect connection in your VPC cannot use a S3 gateway endpoint to communicate with Amazon S3.",
          "upvote_count": "41",
          "selected_answers": ""
        },
        {
          "id": 703737,
          "date": "Tue 25 Oct 2022 11:35",
          "username": "Kakusaif",
          "content": "question mentions S3 gateway endpoint -Resources on the other side of a VPN connection, VPC peering connection, transit gateway, or AWS Direct Connect connection in your VPC cannot use a S3 gateway endpoint to communicate with Amazon S3.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 656910,
          "date": "Fri 02 Sep 2022 05:15",
          "username": "cloudude",
          "content": "I think B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 656383,
          "date": "Thu 01 Sep 2022 17:04",
          "username": "RocketeerKakusaif",
          "content": "I think A - https://aws.amazon.com/premiumsupport/knowledge-center/vpc-endpoints-cross-region-aws-services/question mentions S3 gateway endpoint -Resources on the other side of a VPN connection, VPC peering connection, transit gateway, or AWS Direct Connect connection in your VPC cannot use a S3 gateway endpoint to communicate with Amazon S3.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 703736,
          "date": "Tue 25 Oct 2022 11:34",
          "username": "Kakusaif",
          "content": "question mentions S3 gateway endpoint -Resources on the other side of a VPN connection, VPC peering connection, transit gateway, or AWS Direct Connect connection in your VPC cannot use a S3 gateway endpoint to communicate with Amazon S3.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#874",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A large industrial company has two AWS accounts. One account is for production, and one account is for development. The company manages the production account under its corporate organization in AWS Organizations. The development account is an isolated environment that developers use for testing.<br>The company stores all the application configuration information in an Amazon S3 bucket in the production account. All developers in the development account are members of a single IAM group. A solutions architect must ensure that the developers can update the application configuration information in real time.<br>What is the MOST operationally efficient solution that meets these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#874",
          "answers": [
            {
              "choice": "<p>A. In the production account, modify the S3 bucket policy by adding the development account ID in the condition field. Add a permissions policy to the developers' IAM group to allow users to put objects in the production S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. In the production account, create a two-staged pipeline that uses AWS CodeDeploy and an S3 bucket that has versioning enabled. Create an IAM role in the production account that has the permission to put objects in the S3 bucket. Associate the role with the pipeline. Allow developers to push a new version in the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an IAM role in the production account. Establish a trust relationship between the production account and the development account. Specify a permissions policy in the role to allow trusted users to put objects in the S3 bucket. Grant sts:AssumeRole permissions to the developers' IAM group for the role.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an S3 bucket in the development account. Enable S3 bucket replication between the development S3 bucket and the production S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 683791,
          "date": "Fri 30 Sep 2022 20:10",
          "username": "vbloise",
          "content": "C for the win: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 715098,
          "date": "Thu 10 Nov 2022 10:38",
          "username": "janvandermerwer",
          "content": "C - Likely the correct answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 701492,
          "date": "Sat 22 Oct 2022 13:27",
          "username": "Ni_yot",
          "content": "C correct ans",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#875",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A media company has a video-streaming application that runs on smart TVs. The application is written in HTML and JavaScript. A configuration exists for each smart TV type to control application behavior, such as whether the application should offer high-definition content. The configuration typically changes each quarter.<br>The company serves the application from a fleet of Amazon EC2 instances that handle the requests from the smart TVs. On each request, an application template and smart TV configuration are retrieved from Amazon S3 and are merged to produce the customized application.<br>The company's current solution produces high response times during peak load. The company wants to use Amazon CloudFront to deliver and cache the application.<br>Which combination of steps should a solutions architect take to meet these requirements? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BDE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#875",
          "answers": [
            {
              "choice": "<p>A. Create a CloudFront distribution with the EC2 instances as an origin.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a Lambda@Edge function to be invoked by an origin request event. Determine the smart TV type by inspecting the user agent in the event. Modify the request URI to point to the application file from the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable S3 Transfer Acceleration on the S3 bucket to allow faster access from CloudFront.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable S3 Versioning on the S3 bucket that hosts the object. Modify the application build process to create a single application file for each configuration. Push the file to the S3 bucket by using the same name to create a new version. Set a Maximum TTL on the object.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a CloudFront distribution with a custom origin.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Modify the application build process to create a single application file for each configuration. Upload the application files to the S3 bucket with an incremented version number in the object name. Create an S3 webpage redirect to redirect requests for the customized application to the latest version of the file. Set a Maximum TTL on the object.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 676926,
          "date": "Fri 23 Sep 2022 10:49",
          "username": "pinhead900",
          "content": "Should be BDE, as EC2 is a custom origin:<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html#concept_CustomOrigin",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: BDE"
        },
        {
          "id": 685121,
          "date": "Mon 03 Oct 2022 01:42",
          "username": "sb333wassb",
          "content": "Should be BEF<br>E: EC2 is a custom origin, so that is what needs to be selected.<br>F: By putting a version number in the application file name for each config, changes to the application files will result in the new files being cached by CloudFront. If you retain the same file name for each new application file, it will not cache the new file until the TTL of the cache expires (or you have to invalidate the cache, which takes time and costs money).Great clarification. tx",
          "upvote_count": "51",
          "selected_answers": "Selected Answer: BEF"
        },
        {
          "id": 697232,
          "date": "Mon 17 Oct 2022 11:31",
          "username": "wassb",
          "content": "Great clarification. tx",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 705076,
          "date": "Thu 27 Oct 2022 02:03",
          "username": "nhatvu",
          "content": "Agree BDE",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BDE"
        },
        {
          "id": 692913,
          "date": "Wed 12 Oct 2022 11:47",
          "username": "JohnPi",
          "content": "The configuration typically changes each quarter.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BDE"
        },
        {
          "id": 687987,
          "date": "Thu 06 Oct 2022 19:02",
          "username": "dcdcdc3",
          "content": "In support of sb333, AWS recommends filenames changed:<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/UpdatingExistingObjects.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BEF"
        },
        {
          "id": 656915,
          "date": "Fri 02 Sep 2022 05:22",
          "username": "cloudude",
          "content": "agree ABD",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ABD"
        },
        {
          "id": 656403,
          "date": "Thu 01 Sep 2022 17:33",
          "username": "Rocketeer",
          "content": "I think ABD",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#876",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A research company is running daily simulations in the AWS Cloud to meet high demand. The simulations run on several hundred Amazon EC2 instances that are based on Amazon Linux 2. Occasionally, a simulation gets stuck and requires a cloud operations engineer to solve the problem by connecting to an EC2 instance through SSH.<br>Company policy states that no EC2 instance can use the same SSH key and that all connections must be logged in AWS CloudTrail.<br>How can a solutions architect meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#876",
          "answers": [
            {
              "choice": "<p>A. Launch new EC2 instances, and generate an individual SSH key for each instance. Store the SSH key in AWS Secrets Manager. Create a new IAM policy, and attach it to the engineers' IAM role with an Allow statement for the GetSecretValue action. Instruct the engineers to fetch the SSH key from Secrets Manager when they connect through any SSH client.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Systems Manager document to run commands on EC2 instances to set a new unique SSH key. Create a new IAM policy, and attach it to the engineers' IAM role with an Allow statement to run Systems Manager documents. Instruct the engineers to run the document to set an SSH key and to connect through any SSH client.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Launch new EC2 instances without setting up any SSH key for the instances. Set up EC2 Instance Connect on each instance. Create a new IAM policy, and attach it to the engineers' IAM role with an Allow statement for the SendSSHPublicKey action. Instruct the engineers to connect to the instance by using a browser-based SSH client from the EC2 console.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up AWS Secrets Manager to store the EC2 SSH key. Create a new AWS Lambda function to create a new SSH key and to call AWS Systems Manager Session Manager to set the SSH key on the EC2 instance. Configure Secrets Manager to use the Lambda function for automatic rotation once daily. Instruct the engineers to fetch the SSH key from Secrets Manager when they connect through any SSH client.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 671184,
          "date": "Sat 17 Sep 2022 03:33",
          "username": "exam_asz",
          "content": "https://aws.amazon.com/vi/blogs/compute/new-using-amazon-ec2-instance-connect-for-ssh-access-to-your-ec2-instances/",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 675997,
          "date": "Thu 22 Sep 2022 12:52",
          "username": "DDONG",
          "content": "I think C",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 708593,
          "date": "Mon 31 Oct 2022 18:23",
          "username": "exam_war",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 700697,
          "date": "Fri 21 Oct 2022 11:15",
          "username": "Kende",
          "content": "Requirement: \\\"all connections must be logged in AWS CloudTrail.\\\" <br>EC2 connect pushes the SSH connection logs to AWS Cloudtrail.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 697869,
          "date": "Tue 18 Oct 2022 06:13",
          "username": "sodasu",
          "content": "Why not D?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 697558,
          "date": "Mon 17 Oct 2022 18:41",
          "username": "AwsBRFan",
          "content": "https://aws.amazon.com/vi/blogs/compute/new-using-amazon-ec2-instance-connect-for-ssh-access-to-your-ec2-instances/<br><br>Key Word \\\"Cloud Trail\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 659304,
          "date": "Sun 04 Sep 2022 15:19",
          "username": "pixepepixepepixepe",
          "content": "Both B & D needs attention.<br><br>However, B is INCORRECT since there is no way to share SSH key with engineers. And without SSH key, how will engineer connect to EC2?Why Session Manager is better than EC2 instance connect - https://www.linkedin.com/pulse/ec2-connect-versus-ssm-session-manager-security-review-almbasherCorrecting answer to EC2 instance connect (Option C); Session manager eliminates management of SSH keys; in question still there is management of key, though unique",
          "upvote_count": "111",
          "selected_answers": ""
        },
        {
          "id": 668285,
          "date": "Tue 13 Sep 2022 19:39",
          "username": "pixepepixepe",
          "content": "Why Session Manager is better than EC2 instance connect - https://www.linkedin.com/pulse/ec2-connect-versus-ssm-session-manager-security-review-almbasherCorrecting answer to EC2 instance connect (Option C); Session manager eliminates management of SSH keys; in question still there is management of key, though unique",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 709083,
          "date": "Tue 01 Nov 2022 12:58",
          "username": "pixepe",
          "content": "Correcting answer to EC2 instance connect (Option C); Session manager eliminates management of SSH keys; in question still there is management of key, though unique",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 658820,
          "date": "Sun 04 Sep 2022 00:13",
          "username": "JoMainAWS",
          "content": "definitely D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 656409,
          "date": "Thu 01 Sep 2022 17:40",
          "username": "Rocketeer",
          "content": "I think D",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#877",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to use a third-party software-as-a-service (SaaS) application. The third-party SaaS application is consumed through several API calls. The third- party SaaS application also runs on AWS inside a VPC. <br>The company will consume the third-party SaaS application from inside a VPC.  The company has internal security policies that mandate the use of private connectivity that does not traverse the internet. No resources that run in the company VPC are allowed to be accessed from outside the company's VPC.  All permissions must conform to the principles of least privilege.<br>Which solution meets these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#877",
          "answers": [
            {
              "choice": "<p>A. Create an AWS PrivateLink interface VPC endpoint. Connect this endpoint to the endpoint service that the third-party SaaS application provides. Create a security group to limit the access to the endpoint. Associate the security group with the endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Site-to-Site VPN connection between the third-party SaaS application and the company VPC.  Configure network ACLs to limit access across the VPN tunnels.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a VPC peering connection between the third-party SaaS application and the company VPC.  Update route tables by adding the needed routes for the peering connection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS PrivateLink endpoint service. Ask the third-party SaaS provider to create an interface VPC endpoint for this endpoint service. Grant permissions for the endpoint service to the specific account of the third-party SaaS provider.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 730971,
          "date": "Wed 30 Nov 2022 02:11",
          "username": "pixepe",
          "content": "A<br><br>Reference architecture - https://docs.aws.amazon.com/vpc/latest/privatelink/privatelink-access-saas.html<br>Note from documentation that Interface Endpoint is at client side<br><br>In addition, it can have security groups as https://docs.aws.amazon.com/vpc/latest/privatelink/interface-endpoints.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 697568,
          "date": "Mon 17 Oct 2022 18:53",
          "username": "AwsBRFan",
          "content": "https://docs.aws.amazon.com/vpc/latest/privatelink/interface-endpoints.html<br>I was in doubt about security group, but thats possible<br><br>You can change the security groups that are associated with the network interfaces for your interface endpoint. The security group rules control the traffic that is allowed to the endpoint network interface from the resources in your VPC. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 666375,
          "date": "Sun 11 Sep 2022 20:44",
          "username": "Ni_yot",
          "content": "A seems good.It meets all the criteria.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 659803,
          "date": "Mon 05 Sep 2022 08:39",
          "username": "cale",
          "content": "I think its A. .. reason: https://docs.aws.amazon.com/vpc/latest/privatelink/interface-endpoints.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 657992,
          "date": "Sat 03 Sep 2022 04:38",
          "username": "rajveerajveerajveerajvee",
          "content": "I think it is D: https://docs.aws.amazon.com/vpc/latest/privatelink/create-endpoint-service.htmlbut than again, it is is SaaS provide that creates the Service Endpoint, and Consumer created the Interface endpointChange to 'A' because of above reason.but this line is unsettling \\\"create a security group to limit the access to the endpoint. \\\"",
          "upvote_count": "1111",
          "selected_answers": ""
        },
        {
          "id": 657994,
          "date": "Sat 03 Sep 2022 04:41",
          "username": "rajveerajveerajvee",
          "content": "but than again, it is is SaaS provide that creates the Service Endpoint, and Consumer created the Interface endpointChange to 'A' because of above reason.but this line is unsettling \\\"create a security group to limit the access to the endpoint. \\\"",
          "upvote_count": "111",
          "selected_answers": ""
        },
        {
          "id": 657995,
          "date": "Sat 03 Sep 2022 04:42",
          "username": "rajveerajvee",
          "content": "Change to 'A' because of above reason.but this line is unsettling \\\"create a security group to limit the access to the endpoint. \\\"",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 657997,
          "date": "Sat 03 Sep 2022 04:45",
          "username": "rajvee",
          "content": "but this line is unsettling \\\"create a security group to limit the access to the endpoint. \\\"",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#878",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has many services running in its on-premises data center. The data center is connected to AWS using AWS Direct Connect (DX) and an IPSec VPN.<br>The service data is sensitive and connectivity cannot traverse the internet. The company wants to expand into a new market segment and begin offering its services to other companies that are using AWS.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#878",
          "answers": [
            {
              "choice": "<p>A. Create a VPC Endpoint Service that accepts TCP traffic, host it behind a Network Load Balancer, and make the service available over DX.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a VPC Endpoint Service that accepts HTTP or HTTPS traffic, host it behind an Application Load Balancer, and make the service available over DX.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Attach an internet gateway to the VPC, and ensure that network access control and security group rules allow the relevant inbound and outbound traffic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Attach a NAT gateway to the VPC, and ensure that network access control and security group rules allow the relevant inbound and outbound traffic.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 666532,
          "date": "Mon 12 Sep 2022 03:40",
          "username": "asg76",
          "content": "Answer A. <br>Endpoint services require either a Network Load Balancer or a Gateway Load Balancer. An endpoint service supports traffic only over TCP.",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 697581,
          "date": "Mon 17 Oct 2022 19:07",
          "username": "AwsBRFan",
          "content": "https://docs.aws.amazon.com/vpc/latest/privatelink/create-endpoint-service.html<br>Endpoint services require either a Network Load Balancer or a Gateway Load Balancer.<br><br>An endpoint service supports traffic only over TCP.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 684928,
          "date": "Sun 02 Oct 2022 18:02",
          "username": "JohnPi",
          "content": "To use AWS PrivateLink, create a Network Load Balancer for your application in your VPC, and create a VPC endpoint service configuration pointing to that load balancer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#879",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's compliance audit reveals that some Amazon Elastic Block Store (Amazon EBS) volumes that were created in an AWS account were not encrypted.<br>A solutions architect must implement a solution to encrypt all new EBS volumes at rest.<br>Which solution will meet this requirement with the LEAST effort?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#879",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to detect the creation of unencrypted EBS volumes. Invoke an AWS Lambda function to delete noncompliant volumes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Audit Manager with data encryption.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Config rule to detect the creation of a new EBS volume. Encrypt the volume by using AWS Systems Manager Automation.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Turn on EBS encryption by default in all AWS Regions.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 697588,
          "date": "Mon 17 Oct 2022 19:18",
          "username": "AwsBRFan",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/ebs-automatic-encryption/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 688021,
          "date": "Thu 06 Oct 2022 20:07",
          "username": "dcdcdc3",
          "content": "Agree with D for all New volumes",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 685094,
          "date": "Mon 03 Oct 2022 00:14",
          "username": "sb333",
          "content": "D is correct. The question is looking for the LEAST effort for encrypting \\\"new\\\" volumes. This is accomplished by turning on encryption by default, which will only allow encryption to be used unless it is turned off again. https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default<br><br>If you want to correct current volumes, which the questions is not asking you to do, then you could follow-up with answer C as a solution (which requires a bit of configuration). Remember to only answer what the question is asking for and not try to solve things that it doesn't ask for.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 684929,
          "date": "Sun 02 Oct 2022 18:06",
          "username": "JohnPi",
          "content": "New Amazon EBS volumes aren't encrypted by default. However, there is a setting in the EC2 console that turns on encryption by default for all new Amazon EBS volumes and snapshot copies created within a specified Region.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 674374,
          "date": "Tue 20 Sep 2022 19:20",
          "username": "Malluchan",
          "content": "D is correct , Since the ask is to encrypt all new EBS volumes. Existing unencrypted Volumes will be handled separately..",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 669230,
          "date": "Wed 14 Sep 2022 19:46",
          "username": "Ni_yot",
          "content": "D as per link",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 666352,
          "date": "Sun 11 Sep 2022 20:03",
          "username": "Ni_yot",
          "content": "I will go with D as per the link already added",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 659818,
          "date": "Mon 05 Sep 2022 08:49",
          "username": "calecaveman712",
          "content": "I think its CCan encrypt un-encrypted EBS volumes.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 690545,
          "date": "Sun 09 Oct 2022 23:06",
          "username": "caveman712",
          "content": "Can encrypt un-encrypted EBS volumes.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 658583,
          "date": "Sat 03 Sep 2022 16:41",
          "username": "FF",
          "content": "D is right. https://aws.amazon.com/premiumsupport/knowledge-center/ebs-automatic-encryption/",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 655393,
          "date": "Wed 31 Aug 2022 21:03",
          "username": "gnicSteven111",
          "content": "It's C.  Enabling encryption doesn't guarantee that ESB will be encrypted. You have to create a snapshot, create a new volume encrypted...encrypt all new EBS volumes, NEW!",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 716656,
          "date": "Sat 12 Nov 2022 12:02",
          "username": "Steven111",
          "content": "encrypt all new EBS volumes, NEW!",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#880",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning to migrate an application from on premises to the AWS Cloud. The company will begin the migration by moving the application's underlying data storage to AWS. The application data is stored on a shared file system on premises, and the application servers connect to the shared file system through<br>SMB. <br>A solutions architect must implement a solution that uses an Amazon S3 bucket for shared storage. Until the application is fully migrated and code is rewritten to use native Amazon S3 APIs, the application must continue to have access to the data through SMB.  The solutions architect must migrate the application data to<br>AWS to its new location while still allowing the on-premises application to access the data.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#880",
          "answers": [
            {
              "choice": "<p>A. Create a new Amazon FSx for Windows File Server file system. Configure AWS DataSync with one location for the on-premises file share and one location for the new Amazon FSx file system. Create a new DataSync task to copy the data from the on-premises file share location to the Amazon FSx file system.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an S3 bucket for the application. Copy the data from the on-premises storage to the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy an AWS Server Migration Service (AWS SMS) VM to the on-premises environment. Use AWS SMS to migrate the file storage server from on premises to an Amazon EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an S3 bucket for the application. Deploy a new AWS Storage Gateway file gateway on an on-premises VM. Create a new file share that stores data in the S3 bucket and is associated with the file gateway. Copy the data from the on-premises storage to the new file gateway endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 714975,
          "date": "Thu 10 Nov 2022 07:42",
          "username": "Nidhin07",
          "content": "Question clearly states \\\"must implement a solution that uses an Amazon S3 bucket for shared storage \\\" so the answer is D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 688033,
          "date": "Thu 06 Oct 2022 20:24",
          "username": "dcdcdc3joancarles",
          "content": "Since question states that app will be rewritten to use native S3 APIs, I would not pick FSX, rather, use Storage GW/File Gateway and the data will reside in S3. <br><br>https://stackoverflow.com/questions/71413007/aws-fsx-vs-s3-file-gateway<br><br>SMB over SGW/FGW is reported way slower than FSX but this is not an issue within the question.Answer D.  SMB it's supported for Storage Gateway to store and retrieve files from S3 bucket:<br>https://aws.amazon.com/about-aws/whats-new/2018/06/aws-storage-gateway-adds-smb-support-to-store-objects-in-amazon-s3/?nc1=h_ls",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 702170,
          "date": "Sun 23 Oct 2022 14:40",
          "username": "joancarles",
          "content": "Answer D.  SMB it's supported for Storage Gateway to store and retrieve files from S3 bucket:<br>https://aws.amazon.com/about-aws/whats-new/2018/06/aws-storage-gateway-adds-smb-support-to-store-objects-in-amazon-s3/?nc1=h_ls",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 686977,
          "date": "Wed 05 Oct 2022 16:56",
          "username": "Ell89",
          "content": "D<br>because if you use Datasync, then you are maintaining two locations and have not actually migrated anything, just replicating.<br>D will allow a migration and permanent switch from on prem to AWS storage.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 685089,
          "date": "Sun 02 Oct 2022 23:55",
          "username": "sb333",
          "content": "The answer is A.  You cannot migrate data to S3 at this time per the question. You must copy the data to AWS to a solution that allows SMB.  Later, once they modify the application to use S3, will they then migrate the data to S3. AWS DataSync was built for a solution like this. It can migrate from an on-premises SMB server to FSx for Windows File Server. DataSync will replicate on a schedule and keep the target in sync with the Source based on that replication schedule.<br>https://docs.aws.amazon.com/datasync/latest/userguide/how-datasync-works.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 684932,
          "date": "Sun 02 Oct 2022 18:11",
          "username": "JohnPi",
          "content": "File Gateway appliance is a virtual machine to bridge between your NFS and S3",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 669235,
          "date": "Wed 14 Sep 2022 19:51",
          "username": "Ni_yot",
          "content": "Will go with D.  B and C ruled out as you need to continue accessing the data during copy. A does migrate date to S3.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 666533,
          "date": "Mon 12 Sep 2022 03:45",
          "username": "asg76",
          "content": "Answer D",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#881",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A finance company hosts a data lake in Amazon S3. The company receives financial data records over SFTP each night from several third parties. The company runs its own SFTP server on an Amazon EC2 instance in a public subnet of a VPC.  After the files are uploaded, they are moved to the data lake by a cron job that runs on the same instance. The SFTP server is reachable on DNS sftp.example.com through the use of Amazon Route 53.<br>What should a solutions architect do to improve the reliability and scalability of the SFTP solution?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#881",
          "answers": [
            {
              "choice": "<p>A. Move the EC2 instance into an Auto Scaling group. Place the EC2 instance behind an Application Load Balancer (ALB). Update the DNS record sftp.example.com in Route 53 to point to the ALB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the SFTP server to AWS Transfer for SFTP. Update the DNS record sftp.example.com in Route 53 to point to the server endpoint hostname.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the SFTP server to a file gateway in AWS Storage Gateway. Update the DNS record sftp.example.com in Route 53 to point to the file gateway endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Place the EC2 instance behind a Network Load Balancer (NLB). Update the DNS record sftp.example.com in Route 53 to point to the NLB. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 660778,
          "date": "Tue 06 Sep 2022 05:58",
          "username": "cale",
          "content": "AWS Transfer Family is managed service -- https://aws.amazon.com/aws-transfer-family/faqs/",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 686981,
          "date": "Wed 05 Oct 2022 16:59",
          "username": "Ell89",
          "content": "100% B<br><br>for A, what happens if an AZ goes down? you think EC2 instances are more reliable than a managed service?",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 685087,
          "date": "Sun 02 Oct 2022 23:47",
          "username": "sb333",
          "content": "https://docs.aws.amazon.com/transfer/latest/userguide/what-is-aws-transfer-family.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 660320,
          "date": "Mon 05 Sep 2022 17:42",
          "username": "AwsBRFan",
          "content": "https://aws.amazon.com/about-aws/whats-new/2018/11/aws-transfer-for-sftp-fully-managed-sftp-for-s3/?nc1=h_ls",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 656926,
          "date": "Fri 02 Sep 2022 05:40",
          "username": "cloudude",
          "content": "A makes more sense",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#882",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A weather forecasting company is migrating an application that stores data on premises in a PostgreSQL database. The Company wants to migrate the database to Amazon Aurora PostgreSQL. The database size grows at an average rate of 5 GB daily and is currently 50 TB.  The data center has an internet connection with<br>50 Mbps of available bandwidth. The migration to AWS must be completed as soon as possible within the next 21 days.<br>Which data transfer strategy meets these requirements with the LEAST amount of application downtime?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#882",
          "answers": [
            {
              "choice": "<p>A. Take the application offline. Create a local backup of the database. Transmit the database backup file over the existing connection to an Amazon S3 bucket. Use native database tools to restore the backup onto the new database and to set up replication to capture any changes since the backup. Modify the database connection string, and bring the application online.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Install the Server Migration Connector VM in the local data center. Use the AWS Server Migration Service (AWS SMS) console to replicate the on-premises database to the new database. Modify DNS records to point to the new database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a local backup of the database, and copy the backup onto an AWS Snowcone device. Activate the AWS DataSync agent on the device, and configure the agent to copy the backup and ongoing changes to an Amazon S3 bucket. Use AWS Backup to restore the backup onto the new database and to apply the changes. Modify DNS records to point to the new database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Database Migration Service (AWS DMS) to launch a replication instance in a connected VPC.  Use the AWS Schema Conversion Tool to extract the data locally and to move the data to an AWS Snowball Edge Storage Optimized device. Ship the device to AWS, and use an AWS DMS task to complete the transfer to the target database. For the migration type, choose the option to migrate existing data and replicate ongoing changes. Modify DNS records to point to the new database.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 660782,
          "date": "Tue 06 Sep 2022 06:03",
          "username": "cale",
          "content": "It is D",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 660326,
          "date": "Mon 05 Sep 2022 17:49",
          "username": "AwsBRFan",
          "content": "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snowcone-what-is-snowcone.html (snowcone will max 14 TB) <br>https://docs.aws.amazon.com/SchemaConversionTool/latest/userguide/agents.oltp.html (SCT agents can extract data)",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 656927,
          "date": "Fri 02 Sep 2022 05:43",
          "username": "cloudude",
          "content": "No brainer D",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#883",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect needs to provide AWS Cost and Usage Report data from a company's AWS Organizations management account. The company already has an Amazon S3 bucket to store the reports. The reports must be automatically ingested into a database that can be visualized with other tools.<br>Which combination of steps should the solutions architect take to meet these requirements? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ABF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#883",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that a new object creation in the S3 bucket will trigger.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Cost and Usage Report configuration to deliver the data into the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure an AWS Glue crawler that a new object creation in the S3 bucket will trigger.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Lambda function that a new object creation in the S3 bucket will trigger.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an AWS Glue crawler that the AWS Lambda function will trigger to crawl objects in the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create an AWS Glue crawler that the Amazon EventBridge (Amazon CloudWatch Events) rule will trigger to crawl objects in the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 685085,
          "date": "Sun 02 Oct 2022 23:37",
          "username": "sb333",
          "content": "I would have gone with BDE, as DE was the only option previously (Lambda as trigger). But as of 11/29/21, you now can do this easier (and more advanced options) using EventBridge and a target of AWS Glue (you must turn on \\\"Send notifications to Amazon EventBridge for all events in this bucket\\\" in S3 bucket properties first).<br>https://aws.amazon.com/about-aws/whats-new/2021/11/amazon-s3-event-notifications-amazon-eventbridge-build-advanced-serverless-applications/",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: ABF"
        },
        {
          "id": 715594,
          "date": "Thu 10 Nov 2022 23:31",
          "username": "mrgreatness",
          "content": "BDE after reviewing: https://www.wellarchitectedlabs.com/cost/300_labs/300_automated_cur_updates_and_ingestion/1_cf_stack/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 700452,
          "date": "Fri 21 Oct 2022 03:35",
          "username": "tomosabc1",
          "content": "This question seems too vague, not containing enough information to rule out options.<br><br>From below link, BD is correct, but the question asks for selecting 3 options.<br>https://aws.amazon.com/blogs/big-data/query-and-visualize-aws-cost-and-usage-data-using-amazon-athena-and-amazon-quicksight/<br><br>Frow below link, BDE seems to be the correct answer.<br>https://www.wellarchitectedlabs.com/cost/300_labs/300_automated_cur_updates_and_ingestion/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BDE"
        },
        {
          "id": 694929,
          "date": "Fri 14 Oct 2022 19:14",
          "username": "Blair77",
          "content": "ABF all the way",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ABF"
        },
        {
          "id": 688055,
          "date": "Thu 06 Oct 2022 21:01",
          "username": "dcdcdc3lmimi",
          "content": "This diagram supports ABF<br>https://www.wellarchitectedlabs.com/cost/300_labs/300_automated_cur_updates_and_ingestion/That diagram from that link supports BDE actually.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: ABF"
        },
        {
          "id": 712777,
          "date": "Mon 07 Nov 2022 04:10",
          "username": "lmimi",
          "content": "That diagram from that link supports BDE actually.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 675135,
          "date": "Wed 21 Sep 2022 14:46",
          "username": "Yashar1691",
          "content": "Glue crawlers only extract the schema, not the data.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ABD"
        },
        {
          "id": 660797,
          "date": "Tue 06 Sep 2022 06:17",
          "username": "cale",
          "content": "I also answer ABF but I also read this feature in AWS --> https://aws.amazon.com/about-aws/whats-new/2021/10/aws-glue-crawlers-amazon-s3-notifications/ that can also be an alternative approach but this is not in the choices.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ABF"
        }
      ]
    },
    {
      "question_id": "#884",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has its cloud infrastructure on AWS. A solutions architect needs to define the infrastructure as code. The infrastructure is currently deployed in one<br>AWS Region. The company's business expansion plan includes deployments in multiple Regions across multiple AWS accounts.<br>What should the solutions architect do to meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#884",
          "answers": [
            {
              "choice": "<p>A. Use AWS CloudFormation templates. Add IAM policies to control the various accounts. Deploy the templates across the multiple Regions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Organizations. Deploy AWS CloudFormation templates from the management account. Use AWS Control Tower to manage deployments across accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Organizations and AWS CloudFormation StackSets. Deploy a CloudFormation template from an account that has the necessary IAM permissions.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use nested stacks with AWS CloudFormation templates. Change the Region by using nested stacks.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 660333,
          "date": "Mon 05 Sep 2022 17:58",
          "username": "AwsBRFan",
          "content": "https://aws.amazon.com/blogs/aws/new-use-aws-cloudformation-stacksets-for-multiple-accounts-in-an-aws-organization/",
          "upvote_count": "13",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 715596,
          "date": "Thu 10 Nov 2022 23:34",
          "username": "mrgreatness",
          "content": "C definitely",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 698262,
          "date": "Tue 18 Oct 2022 15:19",
          "username": "ctchen",
          "content": "https://aws.amazon.com/tw/blogs/mt/cross-account-deployments-aws-control-tower-environment/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#885",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A new application is running on Amazon Elastic Container Service (Amazon ECS) with AWS Fargate. The application uses an Amazon Aurora MySQL database.<br>The application and the database run in the same subnets of a VPC with distinct security groups that are configured.<br>The password for the database is stored in AWS Secrets Manager and is passed to the application through the DB_PASSWORD environment variable. The hostname of the database is passed to the application through the DB_HOST environment variable. The application is failing to access the database.<br>Which combination of actions should a solutions architect take to resolve this error? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#885",
          "answers": [
            {
              "choice": "<p>A. Ensure that the container has the environment variable with name \"DB_PASSWORD\" specified with a ג€ValueFromג€ and the ARN of the secret.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Ensure that the container has the environment variable with name \"DB_PASSWORD\" specified with a ג€ValueFromג€ and the secret name of the secret.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Ensure that the Fargate service security group allows inbound network traffic from the Aurora MySQL database on the MySQL TCP port 3306.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Ensure that the Aurora MySQL database security group allows inbound network traffic from the Fargate service on the MySQL TCP port 3306.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Ensure that the container has the environment variable with name \"DB_HOST\" specified with the hostname of a DB instance endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Ensure that the container has the environment variable with name \"DB_HOST\" specified with the hostname of the DB cluster endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 706578,
          "date": "Fri 28 Oct 2022 17:19",
          "username": "nsvijay04b1Byrney",
          "content": "ADF<br>Admin, plz make it 3 options.I'm not sure about D. Why would you allow list the Fargate 'service'? The traffic from the task to the DB comes from an ENI injected by Fargate into your subnet, within your VPC. ",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 714303,
          "date": "Wed 09 Nov 2022 05:58",
          "username": "Byrney",
          "content": "I'm not sure about D. Why would you allow list the Fargate 'service'? The traffic from the task to the DB comes from an ENI injected by Fargate into your subnet, within your VPC. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 686766,
          "date": "Wed 05 Oct 2022 12:06",
          "username": "firstabed",
          "content": "D&F --<>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 684940,
          "date": "Sun 02 Oct 2022 18:32",
          "username": "JohnPi",
          "content": "A D F 3 correct answers",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 682308,
          "date": "Thu 29 Sep 2022 05:30",
          "username": "joancarles",
          "content": "A D F<br><br>In this type of question, with six possible answers, it is usually necessary to choose three:<br>A.  Select the ARN https://docs.aws.amazon.com/AmazonECS/latest/userguide/specifying-sensitive-data-secrets.html<br>D.  Ensure the SG allows traffic in the DB<br>F.  Amazon Aurora typically involves a cluster of DB instances instead of a single instance. A cluster endpoint (or writer endpoint) for an Aurora DB cluster connects to the current primary DB instance for that DB cluster. <br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.Endpoints.html",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 666543,
          "date": "Mon 12 Sep 2022 04:07",
          "username": "asg76asg76",
          "content": "My Answer - B,DTypo...D&F",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 666544,
          "date": "Mon 12 Sep 2022 04:08",
          "username": "asg76",
          "content": "Typo...D&F",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#886",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to host a global web application on AWS. It has the following design requirements:<br>* The access pattern must allow for fetching data from multiple data sources.<br>* Minimize the cost of API calls.<br>* Keep page load times to within 50 ms.<br>* Provide user authentication and authorization and manage data access for different user personas (for example, administrator, manager, or engineer).<br>* Use a serverless design.<br>Which set of strategies should a solutions architect use?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#886",
          "answers": [
            {
              "choice": "<p>A. Use Amazon CloudFront with Amazon S3 to host the web application. Use Amazon API Gateway to build the application APIs with AWS Lambda for the custom authorizer. Authorize data access by performing user lookup in Simple AD. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon CloudFront with AWS WAF to host the web application. Use AWS AppSync to build the application APIs. Use IAM groups for each user persona. Authorize data access by leveraging IAM groups in AWS AppSync resolvers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon CloudFront with Amazon S3 to host the web application. Use AWS AppSync to build the application APIs. Use Amazon Cognito groups for each user persona. Authorize data access by leveraging Amazon Cognito groups in AWS AppSync resolvers.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Direct Connect with Amazon S3 to host the web application. Use Amazon API Gateway to build the application APIs. Use AWS Lambda for custom authentication and authorization. Authorize data access by leveraging IAM roles.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 661440,
          "date": "Tue 06 Sep 2022 18:12",
          "username": "SGES",
          "content": "C<br>Use S3 to optmize cost in hosting Web application and cloud front for global reach, then use Appsync for managing API calls and able to handle multiple data source in simplified manner with cognito for authentication and authorisation.",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 716642,
          "date": "Sat 12 Nov 2022 11:22",
          "username": "dev1234",
          "content": "C<br>Multiple data sources = GraphQL = AWS AppSync",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 697621,
          "date": "Mon 17 Oct 2022 20:17",
          "username": "AwsBRFan",
          "content": "API Gateway to build -sounds wrong on A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 686764,
          "date": "Wed 05 Oct 2022 12:05",
          "username": "firstabed",
          "content": "Answer: C",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#887",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a web application that provides an HTTP API. The API uses a MySQL-compatible SQL database for session persistence. The existing workload runs in an on-premises environment on a Kubernetes cluster. The company has significant operational overhead associated with managing servers on premises and is considering a migration to AWS.<br>The company wants to remove the need to manage servers or instances by using as many managed AWS offerings as possible. The company does not want to introduce significant changes to the web application or the HTTP API. A solutions architect must recommend different architecture solutions that the company can use to achieve these goals.<br>Which solutions will meet these requirements? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CDF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#887",
          "answers": [
            {
              "choice": "<p>A. Create a Kubernetes cluster on AWS. Deploy an Amazon Aurora Serverless cluster. Run the web application on Kubernetes by using a managed node group. Use a containerized application that runs on Kubernetes to deploy an Application Load Balancer that exposes the web application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Auto Scaling group for the web application. Run the web application and a MySQL database on Amazon EC2 general purpose instances. Deploy an Application Load Balancer (ALB). Associate the ALB with the Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new Amazon Elastic Container Service (Amazon ECS) service for the web application. Deploy MySQL by using Amazon RDS. Run the web application as tasks in Amazon ECS with a serverless compute engine. Configure health checks. Use AWS Cloud Map and DNS to direct traffic to healthy tasks for the service.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a Kubernetes cluster on AWS. Deploy an Amazon Aurora Serverless cluster. Run the web application by using AWS Fargate and Amazon Elastic Kubernetes Service (Amazon EKS). Use containerized application that runs on Kubernetes to deploy an Application Load Balancer that exposes the web application.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a new Amazon Elastic Container Service (Amazon ECS) service for the web application. Deploy a MySQL-compatible Amazon Aurora cluster. Run the web application as tasks by using Amazon ECS with EXTERNAL launch. Deploy an Application Load Balancer (ALB). Associate the ALB with the ECS service.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create an Amazon Lightsail containers deployment for the web application. Create a highly available Lightsail database in MySQL mode. Specify a public endpoint for the container deployment. Add a custom domain for the public endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 666646,
          "date": "Mon 12 Sep 2022 08:18",
          "username": "pixepe",
          "content": "Answer is C, D, F. <br><br>Cis implicitly mentioning Fargate (Run the web application as tasks in Amazon ECS with a serverless compute engine.) Hence, it is correct.<br><br>D- Fargate, correct<br><br>F (LightSail Container Deployment) - Correct.I've launched container using lightsail container deployment, we have to specify Scale (sort of number of instances) &Power (type of instances). STILL, it is similar to Serverless as I don't see instances in EC2 console, also I don't see instances in LightSail console, though containers are running.<br><br>E is INCORRECT owing to EXTERNAL launch.<br>External launch type is NOT a serverless. <br>External launch type (doc from AWS): The External launch type is used to run your containerized applications on your on-premise server or virtual machine (VM) that you register to your Amazon ECS cluster and manage remotely. For more information, see External instances (Amazon ECS Anywhere).<br>https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 700455,
          "date": "Fri 21 Oct 2022 03:38",
          "username": "sb333",
          "content": "Answer A is not referring to AWS EKS (managed Kubernetes). Instead, it is referring to a self-managed Kubernetes cluster in AWS. So that is not correct.<br><br>C, D, F all are serverless solutions that run containers and AWS-managed databases.<br><br>For answer C, if you look up AWS ECS and AWS Cloud Map, you can see this is a valid answer. https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CDF"
        },
        {
          "id": 689750,
          "date": "Sun 09 Oct 2022 01:21",
          "username": "skywalker",
          "content": "Inital though ADF. ... but A say create K8S on AWS..It can meant EKS cluster or K8S on EC2 instance.... thus confuse on A<br><br>Later reseach possible CDF. . There is indeed AWS CloudMap services..<br>AWS Cloud Map is tightly integrated with Amazon Elastic Container Service (Amazon ECS). As new container tasks spin up or down, they automatically register with AWS Cloud Map. You can use the Kubernetes ExternalDNS connector to integrate Amazon Elastic Kubernetes Service with AWS Cloud Map. <br><br>Thus CDF<br><br>https://docs.aws.amazon.com/cloud-map/latest/api/Welcome.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 688085,
          "date": "Thu 06 Oct 2022 22:00",
          "username": "dcdcdc3",
          "content": "B - no,ec2<br>C - no, CloudMap is somwhting else<br>E - no,External",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 686763,
          "date": "Wed 05 Oct 2022 12:04",
          "username": "firstabed",
          "content": "CDF answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 684979,
          "date": "Sun 02 Oct 2022 19:37",
          "username": "JohnPi",
          "content": "CDF answer",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CDF"
        },
        {
          "id": 673078,
          "date": "Mon 19 Sep 2022 10:38",
          "username": "kaparakapara",
          "content": "ADF. <br>B - Incorrect, EC2 should not be used.<br>E - Incorrect,External meaning running the workload on-prem. the question mentions \\\"by using as many managed AWS offerings as possible.\\\". <br>A - Valid, it's creating instances indeed - but AWS manages them, even if it wasn't, this is still one of the best answers.<br>D - Valid. completely serverless.<br>F -F - Valid, Lightsail is completely serverless.<br><br>C - incorrect, AWS Cloud Map and DNS to direct traffic to healthy tasks for the service? don't seem right.",
          "upvote_count": "32",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 673079,
          "date": "Mon 19 Sep 2022 10:39",
          "username": "kapara",
          "content": "F - Valid, Lightsail is completely serverless.<br><br>C - incorrect, AWS Cloud Map and DNS to direct traffic to healthy tasks for the service? don't seem right.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 666549,
          "date": "Mon 12 Sep 2022 04:21",
          "username": "asg76",
          "content": "\\\"The company wants to remove the need to manage servers or instances by using as many managed AWS offerings as possible. \\\" This should eliminate A,B,D. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 660347,
          "date": "Mon 05 Sep 2022 18:16",
          "username": "AwsBRFan",
          "content": "Also make sense to me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: DEF"
        },
        {
          "id": 656933,
          "date": "Fri 02 Sep 2022 05:56",
          "username": "cloudude",
          "content": "DEF I think",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: DEF"
        }
      ]
    },
    {
      "question_id": "#888",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently started hosting new application workloads in the AWS Cloud. The company is using Amazon EC2 instances, Amazon Elastic File System<br>(Amazon EFS) file systems, and Amazon RDS DB instances.<br>To meet regulatory and business requirements, the company must make the following changes for data backups:<br>* Backups must be retained based on custom daily, weekly, and monthly requirements.<br>* Backups must be replicated to at least one other AWS Region immediately after capture.<br>* The backup solution must provide a single source of backup status across the AWS environment.<br>* The backup solution must send immediate notifications upon failure of any resource backup.<br>Which combination of steps will meet these requirements with the LEAST amount of operational overhead? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ABD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#888",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Backup plan with a backup rule for each of the retention requirements<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure an AWS Backup plan to copy backups to another Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Lambda function to replicate backups to another Region and send notification if a failure occurs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add an Amazon Simple Notification Service (Amazon SNS) topic to the backup plan to send a notification for finished jobs that have any status except BACKUP_JOB_COMPLETED. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an Amazon Data Lifecycle Manager (Amazon DLM) snapshot lifecycle policy for each of the retention requirements.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Setup RDS snapshots on each database.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 660353,
          "date": "Mon 05 Sep 2022 18:22",
          "username": "AwsBRFan",
          "content": "Cross region with AWS Backup: https://docs.aws.amazon.com/aws-backup/latest/devguide/cross-region-backup.html",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: ABD"
        },
        {
          "id": 697452,
          "date": "Mon 17 Oct 2022 15:56",
          "username": "wassb",
          "content": "https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ABD"
        },
        {
          "id": 660356,
          "date": "Mon 05 Sep 2022 18:23",
          "username": "AwsBRFan",
          "content": "DLM is for EBS and AMI snaps https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#889",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a proprietary stateless ETL application on an Amazon EC2 Linux instances. The application is a Linux binary, and the source code cannot be modified. The application is single-threaded, uses 2 GB of RAM, and is highly CPU intensive. The application is scheduled to run every 4 hours and runs for up to<br>20 minutes. A solutions architect wants to revise the architecture for the solution.<br>Which strategy should the solutions architect use?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#889",
          "answers": [
            {
              "choice": "<p>A. Use AWS Lambda to run the application. Use Amazon CloudWatch Logs to invoke the Lambda function every 4 hours.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Batch to run the application. Use an AWS Step Functions state machine to invoke the AWS Batch job every 4 hours.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Fargate to run the application. Use Amazon EventBridge (Amazon CloudWatch Events) to invoke the Fargate task every 4 hours.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon EC2 Spot Instances to run the application. Use AWS CodeDeploy to deploy and run the application every 4 hours.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 676982,
          "date": "Fri 23 Sep 2022 12:12",
          "username": "pinhead900",
          "content": "probably C, <br>step function could run a scheduled task when triggered by eventbrige, but why would you add that layer of complexity just to run aws batch when you could directly invoke it through eventbridge. <br>The link provided - https://aws.amazon.com/pt/blogs/compute/orchestrating-high-performance-computing-with-aws-step-functions-and-aws-batch/ makes sense only for HPC, this is a single instance that needs to be run",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 711516,
          "date": "Sat 05 Nov 2022 03:47",
          "username": "Jonfernz",
          "content": "A & D don't make sense. As for B --- it's wrong for two reasons. Firstly, this is just a single job ... you don't an added workflow by using StepFunctions. Secondly, Step Functions cannot be scheduled. Even if you want to use it for this case, you would at least need to use CloudWatch Events to trigger the process. C solves everything and is this only feasible option.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 705653,
          "date": "Thu 27 Oct 2022 16:25",
          "username": "fais1985fais1985",
          "content": "Answer B<br>https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduled_tasks.htmlSorry its C via Fargate<br>https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduled_tasks.html",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 705655,
          "date": "Thu 27 Oct 2022 16:25",
          "username": "fais1985",
          "content": "Sorry its C via Fargate<br>https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduled_tasks.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 688170,
          "date": "Fri 07 Oct 2022 02:20",
          "username": "dcdcdc3dcdcdc3",
          "content": "I would like to go with B:<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/orchestrate-an-etl-pipeline-with-validation-transformation-and-partitioning-using-aws-step-functions.html<br><br>as the question is asking for an ETL solution<br><br>Maybe the incorrect piece in C is around invoking a \\\"Fargate task\\\" every 4 hours where it should be invoke \\\"ECS task\\\" (aka your app) every 4 hoursOr maybe because source code cannot be modified, we are stuck with a fargate container with unclear answer Cand we cannot re-architect the solution to B ?.?",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 688178,
          "date": "Fri 07 Oct 2022 02:31",
          "username": "dcdcdc3",
          "content": "Or maybe because source code cannot be modified, we are stuck with a fargate container with unclear answer Cand we cannot re-architect the solution to B ?.?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 677021,
          "date": "Fri 23 Sep 2022 12:54",
          "username": "Yashar1691",
          "content": "https://docs.aws.amazon.com/step-functions/latest/dg/connect-batch.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 673095,
          "date": "Mon 19 Sep 2022 10:53",
          "username": "kapara",
          "content": "C. <br>those who say B - how can step function state can run schedule task?",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 664132,
          "date": "Fri 09 Sep 2022 03:37",
          "username": "cale",
          "content": "It is B. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 660362,
          "date": "Mon 05 Sep 2022 18:31",
          "username": "AwsBRFan",
          "content": "B considering this link https://aws.amazon.com/pt/blogs/compute/orchestrating-high-performance-computing-with-aws-step-functions-and-aws-batch/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 660360,
          "date": "Mon 05 Sep 2022 18:29",
          "username": "AwsBRFan",
          "content": "Maybe C https://aws.amazon.com/pt/blogs/compute/orchestrating-high-performance-computing-with-aws-step-functions-and-aws-batch/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#890",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating a legacy application from an on-premises data center to AWS. The application uses MongoDB as a key-value database. According to the company's technical guidelines, all Amazon EC2 instances must be hosted in a private subnet without an internet connection. In addition, all connectivity between applications and databases must be encrypted. The database must be able to scale based on demand.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#890",
          "answers": [
            {
              "choice": "<p>A. Create new Amazon DocumentDB (with MongoDB compatibility) tables for the application with Provisioned IOPS volumes. Use the instance endpoint to connect to Amazon DocumentDB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create new Amazon DynamoDB tables for the application with on-demand capacity. Use a gateway VPC endpoint for DynamoDB to connect to the DynamoDB tables.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create new Amazon DynamoDB tables for the application with on-demand capacity. Use an interface VPC endpoint for DynamoDB to connect to the DynamoDB tables.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create new Amazon DocumentDB (with MongoDB compatibility) tables for the application with Provisioned IOPS volumes. Use the cluster endpoint to connect to Amazon DocumentDB. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 686963,
          "date": "Wed 05 Oct 2022 16:24",
          "username": "joanneli77fdoxxxRocketeer",
          "content": "Both answers with provisioned IOPS don't scale on demand.Eliminate A and D. DynamoDB and S3 both use Gateway Endpoints, so it is B. For debate on Dynamo vs Document, it works in Mongo as key/value outside, so it will work with either Dynamo or Document.Would have gone with DocumentDB if not for provisioned IOPS and requirement it scale on-demand.What about \\\"all Amazon EC2 instances must be hosted in a private subnet without an internet connection.\\\" It clearly states that it can not be a Gateway - it needs to be Interface endpoint - so C imhoApps will run in the EC2s and connect to DynamobDB using Gateway endpoint.",
          "upvote_count": "612",
          "selected_answers": ""
        },
        {
          "id": 702020,
          "date": "Sun 23 Oct 2022 10:51",
          "username": "fdoxxxRocketeer",
          "content": "What about \\\"all Amazon EC2 instances must be hosted in a private subnet without an internet connection.\\\" It clearly states that it can not be a Gateway - it needs to be Interface endpoint - so C imhoApps will run in the EC2s and connect to DynamobDB using Gateway endpoint.",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 708136,
          "date": "Mon 31 Oct 2022 03:12",
          "username": "Rocketeer",
          "content": "Apps will run in the EC2s and connect to DynamobDB using Gateway endpoint.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 708913,
          "date": "Tue 01 Nov 2022 07:58",
          "username": "alxjandroleivamrgreatness",
          "content": "D: Legacy application, You can not request the team to change all application to make request to dynamo instead of Mongowhat about scaling?",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 715607,
          "date": "Fri 11 Nov 2022 00:13",
          "username": "mrgreatness",
          "content": "what about scaling?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 705230,
          "date": "Thu 27 Oct 2022 06:49",
          "username": "dmscounteraalxjandroleiva",
          "content": "Going for B<br>https://docs.aws.amazon.com/vpc/latest/privatelink/aws-services-privatelink-support.html<br>DynamoDB not supported by private link<br>Gateway endpoint not relies on private link<br>therefore BAnd change all legacy application code to persist and request data to dynamo...?",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 708915,
          "date": "Tue 01 Nov 2022 07:59",
          "username": "alxjandroleiva",
          "content": "And change all legacy application code to persist and request data to dynamo...?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 702021,
          "date": "Sun 23 Oct 2022 10:51",
          "username": "fdoxxx",
          "content": "\\\"all Amazon EC2 instances must be hosted in a private subnet without an internet connection.\\\" It clearly states that it can not be a Gateway - it needs to be Interface endpoint - so C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 691713,
          "date": "Tue 11 Oct 2022 06:18",
          "username": "skywalker",
          "content": "B,DynamoDB uses Gateway Point to allow connection from VPC",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 686753,
          "date": "Wed 05 Oct 2022 11:46",
          "username": "firstabed",
          "content": "BVpc gateway",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 685005,
          "date": "Sun 02 Oct 2022 20:24",
          "username": "JohnPiJohnPi",
          "content": "Vpc gateway + scale on demand + being exchanged over an AWS PrivateLink is also encryptedinterface VPC endpoint uses private link encripted",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 685007,
          "date": "Sun 02 Oct 2022 20:25",
          "username": "JohnPi",
          "content": "interface VPC endpoint uses private link encripted",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 684997,
          "date": "Sun 02 Oct 2022 20:14",
          "username": "JohnPi",
          "content": "Vpc gateway + scale on demand",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 684995,
          "date": "Sun 02 Oct 2022 20:11",
          "username": "JohnPi",
          "content": "Amazon DocumentDB is virtual private cloud (VPC)-only and does not currently support public endpoints. Hence, if you are trying to connect from a Node server running locally in your machine, it will not be able to reach Amazon DocumentDB publicly.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 682223,
          "date": "Thu 29 Sep 2022 02:21",
          "username": "BEN_TUTUsb333",
          "content": "ANSWER IS : C The question above is tricky, it's a \\\"bait\\\", a trap ! the question says: using mongo db as a\\\" key-value\\\" database, the term key-value database changes it from a DOCUMENT DB(Mongo compatible) to a \\\"key-value database, of course which DYNAMO DB is an example of NOSQL KEY VALUE database, which will make it \\\"scalable\\\" as the question requires.<br><br>For further proof, <br>1. ) google the meaning of\\\"key-value\\\" database<br>2.) google examples of NOSQL \\\"KEY VALUE\\\" DATABASE : YOU WILL SEE \\\"DYNAMO DB \\\"<br>3.) Then, compare\\\"Mongo db as a key-value database\\\"to dynamo db as an example of nosql key-value database ? they both belong to the same group of key-value database and it will scale as the question required. (QED)<br><br>Answer is : C <br><br>NOTE : AVOID JUMPING AT ANSWERS THAT LOOK SO STRAIGHT FORWARD.  ALSO TRY TO FIND OUT THE MEANING OF ANY STRANGE UNKNOWN \\\"TERMINOLOGIES\\\" BEFORE ARRIVING AT YOUR ANSWERS.It's actually D.  DocumentDB (Mongo compatible) is just that - compatible with MongoDB.  This is a legacy application that is built to use MongDB.  The AWS exam is testing if you know that this is an available option for this use case. There is no requirement in the question that would force you to convert the database type to DynamoDB (or any other for that matter).<br><br>https://www.mongodb.com/databases/key-value-database",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 684615,
          "date": "Sun 02 Oct 2022 07:27",
          "username": "sb333",
          "content": "It's actually D.  DocumentDB (Mongo compatible) is just that - compatible with MongoDB.  This is a legacy application that is built to use MongDB.  The AWS exam is testing if you know that this is an available option for this use case. There is no requirement in the question that would force you to convert the database type to DynamoDB (or any other for that matter).<br><br>https://www.mongodb.com/databases/key-value-database",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 659708,
          "date": "Mon 05 Sep 2022 05:59",
          "username": "rajveeNi_yot",
          "content": "D, seems about right. https://docs.aws.amazon.com/documentdb/latest/developerguide/endpoints.html <br>Cluster endpoint<br>A cluster endpoint is an endpoint for an Amazon DocumentDB cluster that connects to the current primary instance for the cluster. Each Amazon DocumentDB cluster has a single cluster endpoint and one primary instance. In case of a failover, the cluster endpoint is remapped to the new primary instance.<br><br>Vs<br><br>Instance endpoint<br>An instance endpoint is an endpoint that connects to a specific instance. Each instance in a cluster, regardless of whether it is a primary or replica instance, has its own unique instance endpoint. It is best to not use instance endpoints in your application. This is because they can change roles in case of a failover, thus requiring code changes in your application.happy with that explanation",
          "upvote_count": "42",
          "selected_answers": ""
        },
        {
          "id": 667367,
          "date": "Mon 12 Sep 2022 20:44",
          "username": "Ni_yot",
          "content": "happy with that explanation",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#891",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs many workloads on AWS and uses AWS Organizations to manage its accounts. The workloads are hosted on Amazon EC2, AWS Fargate, and<br>AWS Lambda. Some of the workloads have unpredictable demand. Accounts record high usage in some months and low usage in other months.<br>The company wants to optimize its compute costs over the next 3 years. A solutions architect obtains a 6-month average for each of the accounts across the organization to calculate usage.<br>Which solution will provide the MOST cost savings for all the organization's compute usage?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#891",
          "answers": [
            {
              "choice": "<p>A. Purchase Reserved Instances for the organization to match the size and number of the most common EC2 instances from the member accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Purchase a Compute Savings Plan for the organization from the management account by using the recommendation at the management account level.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Purchase Reserved Instances for each member account that had high EC2 usage according to the data from the last 6 months.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Purchase an EC2 Instance Savings Plan for each member account from the management account based on EC2 usage data from the last 6 months.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 659605,
          "date": "Mon 05 Sep 2022 00:41",
          "username": "epomatti",
          "content": "B - Savings Plan, which apply to EC2+Fargate+Lambda",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 711663,
          "date": "Sat 05 Nov 2022 11:10",
          "username": "Costi",
          "content": "The answer is in the question: \\\"compute cost\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 667371,
          "date": "Mon 12 Sep 2022 20:48",
          "username": "Ni_yot",
          "content": "B. Savings plan will defo save more money and is cost optimized",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#892",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running an application on Amazon EC2 instances in three environments: development, testing, and production. The company uses AMIs to deploy the EC2 instances. The company builds the AMIs by using custom deployment scripts and infrastructure orchestration tools for each release in each environment.<br>The company is receiving errors in its deployment process. Errors appear during operating system package downloads and during application code installation from a third-party Git hosting service. The company needs deployments to become more reliable across all environments.<br>Which combination of steps will meet these requirements? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#892",
          "answers": [
            {
              "choice": "<p>A. Mirror the application code to an AWS CodeCommit Git repository. Use the repository to build EC2 AMIs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Produce multiple EC2 AMIs, one for each environment, for each release.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Produce one EC2 AMI for each release for use across all environments.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Mirror the application code to a third-party Git repository that uses Amazon S3 storage. Use the repository for deployment.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Replace the custom scripts and tools with AWS CodeBuild. Update the infrastructure deployment process to use EC2 Image Builder.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Replace the custom scripts and tools with EC2 Image Builder. Update the deployment process to use AWS CloudFormation.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 660879,
          "date": "Tue 06 Sep 2022 08:35",
          "username": "calecreremblitzzzz",
          "content": "Here is a good reference material: https://aws.amazon.com/blogs/mt/create-immutable-servers-using-ec2-image-builder-aws-codepipeline/. My answer is A, C, F because AMIs should be same (immutable) across environments and use Image Builder into CloudFormation.why not doing a diffrent AMI for production, devel an testing ?but why. Is it better for production to use a stable and fixed version?",
          "upvote_count": "911",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 707745,
          "date": "Sun 30 Oct 2022 10:44",
          "username": "crerem",
          "content": "why not doing a diffrent AMI for production, devel an testing ?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 698788,
          "date": "Wed 19 Oct 2022 09:46",
          "username": "blitzzzz",
          "content": "but why. Is it better for production to use a stable and fixed version?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 717542,
          "date": "Sun 13 Nov 2022 23:12",
          "username": "Relaxeasy",
          "content": "ACF ok",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 715090,
          "date": "Thu 10 Nov 2022 10:28",
          "username": "janvandermerwer",
          "content": "B - Not best practice and introduces potential issues.<br>D - Seems overly complex, rather than using native AWS services \\\"CodeCommit\\\"<br>E -- ? On the fence, part 2 update infrastructure deployment to use ec2 image builder seems to be inaccurate.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 671355,
          "date": "Sat 17 Sep 2022 10:31",
          "username": "Ni_yot",
          "content": "Agree ACF",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#893",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A flood monitoring agency has deployed more than 10,000 water-level monitoring Sensors. Sensors send continuous data updates, and each update is less than<br>1 MB in size. The agency has a fleet of on-premises application servers. These servers receive updates from the sensors, convert the raw data into a human readable format, and write the results to an on-premises relational database server. Data analysts then use simple SQL queries to monitor the data.<br>The agency wants to increase overall application availability and reduce the effort that is required to perform maintenance tasks. These maintenance tasks, which include updates and patches to the application servers, cause downtime. While an application server is down, data is lost from sensors because the remaining servers cannot handle the entire workload.<br>The agency wants a solution that optimizes operational overhead and costs. A solutions architect recommends the use of AWS IoT Core to collect the sensor data.<br>What else should the solutions architect recommend to meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#893",
          "answers": [
            {
              "choice": "<p>A. Send the sensor data to Amazon Kinesis Data Firehose. Use an AWS Lambda function to read the Kinesis Data Firehose data, convert it to .csv format, and insert it into an Amazon Aurora MySQL DB instance. Instruct the data analysts to query the data directly from the DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Send the sensor data to Amazon Kinesis Data Firehose. Use an AWS Lambda function to read the Kinesis Data Firehose data, convert it to Apache Parquet format, and save it to an Amazon S3 bucket. Instruct the data analysts to query the data by using Amazon Athena.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Send the sensor data to an Amazon Kinesis Data Analytics application to convert the data to .csv format and store it in an Amazon S3 bucket. Import the data into an Amazon Aurora MySQL DB instance. Instruct the data analysts to query the data directly from the DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Send the sensor data to an Amazon Kinesis Data Analytics application to convert the data to Apache Parquet format and store it in an Amazon S3 bucket. Instruct the data analysts to query the data by using Amazon Athena.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 674088,
          "date": "Tue 20 Sep 2022 13:30",
          "username": "pinhead900",
          "content": "\\\"The agency wants to increase overall application availability and reduce the effort that is required to perform maintenance tasks\\\" -> B",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 688206,
          "date": "Fri 07 Oct 2022 03:47",
          "username": "dcdcdc3",
          "content": "The closest I could find. Not Lambda, rather Glue there but still<br><br>https://aws.amazon.com/blogs/big-data/analyzing-apache-parquet-optimized-data-using-amazon-kinesis-data-firehose-amazon-athena-and-amazon-redshift/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 680757,
          "date": "Tue 27 Sep 2022 14:41",
          "username": "Trump2022",
          "content": "I like B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 676547,
          "date": "Thu 22 Sep 2022 22:18",
          "username": "gnandam",
          "content": "B-<br>Apache Parquet is a incredibly versatile open source columnar storage format. It is 2x faster to unload and takes up 6x less storage in Amazon S3 as compared to text formats. It also allows you to save the Parquet files in Amazon S3 as an open format with all data transformation and enrichment carried out in Amazon Redshift.<br>Amazon Athena can be used for object metadata<br>Parquet is a self-describing format and the schema or structure is embedded in the data itself therefore it is not possible to track the data changes in the file. To track the changes, you can use Amazon Athena to track object metadata across Parquet files as it provides an API for metadata.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 661894,
          "date": "Wed 07 Sep 2022 05:04",
          "username": "SGEScalecalepinhead900",
          "content": "B - better realistic in my opinionI actually like option B and it is how I will do it but those two requirements (at least how I interpret them as requirements) are throwing me off a bit. It's just one of those questions that is tricky but you actually know what to do in real life.Option B does not satisfy these requirements though:<br>1. convert the raw data into a human readable format, and <br>2. write the results to an on-premises relational database server.those are not the requirements, the actual requirement is: <br>\\\"The agency wants to increase overall application availability and reduce the effort that is required to perform maintenance tasks\\\"<br>So Option B is right.<br>Additionally you cannot directly load csv data into aurora, you need to have it uploaded into S3 first: https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.LoadFromS3.html",
          "upvote_count": "1111",
          "selected_answers": ""
        },
        {
          "id": 664494,
          "date": "Fri 09 Sep 2022 14:05",
          "username": "cale",
          "content": "I actually like option B and it is how I will do it but those two requirements (at least how I interpret them as requirements) are throwing me off a bit. It's just one of those questions that is tricky but you actually know what to do in real life.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 664490,
          "date": "Fri 09 Sep 2022 14:01",
          "username": "calepinhead900",
          "content": "Option B does not satisfy these requirements though:<br>1. convert the raw data into a human readable format, and <br>2. write the results to an on-premises relational database server.those are not the requirements, the actual requirement is: <br>\\\"The agency wants to increase overall application availability and reduce the effort that is required to perform maintenance tasks\\\"<br>So Option B is right.<br>Additionally you cannot directly load csv data into aurora, you need to have it uploaded into S3 first: https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.LoadFromS3.html",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 674085,
          "date": "Tue 20 Sep 2022 13:30",
          "username": "pinhead900",
          "content": "those are not the requirements, the actual requirement is: <br>\\\"The agency wants to increase overall application availability and reduce the effort that is required to perform maintenance tasks\\\"<br>So Option B is right.<br>Additionally you cannot directly load csv data into aurora, you need to have it uploaded into S3 first: https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.LoadFromS3.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 660907,
          "date": "Tue 06 Sep 2022 08:57",
          "username": "cale",
          "content": "I will go with A because it satisfies the requirements.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#894",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a project that is launching Amazon EC2 instances that are larger than required. The project's account cannot be part of the company's organization in AWS Organizations due to policy restrictions to keep this activity outside of corporate IT. The company wants to allow only the launch of t3.small<br>EC2 instances by developers in the project's account. These EC2 instances must be restricted to the us-east-2 Region.<br>What should a solutions architect do to meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#894",
          "answers": [
            {
              "choice": "<p>A. Create a new developer account. Move all EC2 instances, users, and assets into us-east-2. Add the account to the company's organization in AWS Organizations. Enforce a tagging policy that denotes Region affinity.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an SCP that denies the launch of all EC2 instances except t3.small EC2 instances in us-east-2. Attach the SCP to the project's account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create and purchase a t3.small EC2 Reserved Instance for each developer in us-east-2. Assign each developer a specific EC2 instance with their name as the tag.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM policy than allows the launch of only t3.small EC2 instances in us-east-2. Attach the policy to the roles and groups that the developers use in the project's account.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 655441,
          "date": "Wed 31 Aug 2022 21:50",
          "username": "gnic",
          "content": "It's D. <br>Question says \\\"The project's account cannot be part of the company's organization in AWS Organizations\\\", so how we can use SCP?????",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 714779,
          "date": "Wed 09 Nov 2022 22:33",
          "username": "janvandermerwer",
          "content": "\\\"The project's account CANNOT be part of the company's organization in AWS Organizations due to policy restrictions to keep this activity outside of corporate IT\\\"<br>A = Not applicable<br>B = SCP requires organisations<br>C = High admin overhead - won't allow scaling out.<br>D= Not ideal, but will do the job for a standalone account.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 686749,
          "date": "Wed 05 Oct 2022 11:38",
          "username": "firstabed",
          "content": "D DD",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#895",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using Amazon WorkSpaces to provide access to its corporate applications across multiple global locations. User profile data is stored on an<br>Amazon FSx for Windows File Server file system that is configured with a DNS alias. The file system is linked to an existing Active Directory service.<br>Recently, the company added a new application that unexpectedly caused user profiles to grow significantly. The company increased the FSx for Windows File<br>Server file system size from 3 TiB to 6 TiB to prevent any issues. A few days later, the company made changes to the application's configuration. The user profile storage usage decreased significantly, leaving a large amount of free space on the file system. A solutions architect needs to reduce the size of the file system to avoid unnecessary costs.<br>What should the solutions architect do to achieve this goal?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#895",
          "answers": [
            {
              "choice": "<p>A. During an agreed upon maintenance window, use AWS Backup to create a point-in-time backup of the file system. Restore the backup to a new, smaller FSx for Windows File Server file system. Adjust the DNS alias after the restore is completed. Delete the original file system.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. During an agreed upon maintenance window, disconnect users from the file system. In the Amazon FSx console, update the storage capacity of the file system. Enter an absolute value of 3 TiB.  Reconnect users to the file system.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy an AWS DataSyne agent onto a new Amazon EC2 instance. Create a DataSync task. Configure the existing file system as the source location. Configure a new, smaller FSx for Windows File Server file system as the target location. Schedule the task. Adjust the DNS alias after the task is completed. Delete the original file system.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable shadow copies on the existing file system by using a Windows PowerShell command. Schedule a shadow copy job to create a point-in-time backup of the file system. Choose to restore previous versions, and create a new, smaller FSx for Windows File Server file system. Adjust the DNS alias after the copy job is completed. Delete the original file system.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 686976,
          "date": "Wed 05 Oct 2022 16:55",
          "username": "joanneli77",
          "content": "Can't restore to larger or smaller file system.Can't reduce file system size.C seems a bit convoluted but it's correct.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 685194,
          "date": "Mon 03 Oct 2022 06:17",
          "username": "JohnPi",
          "content": "Amazon FSx for Windows File Server - You can only increase the amount of storage capacity for a file system; you cannot decrease storage capacity.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 682862,
          "date": "Thu 29 Sep 2022 18:42",
          "username": "jg0081Rocketeer",
          "content": "Q: Can I change my file system’s storage capacity and throughput capacity?<br><br>A: Yes, you can increase the storage capacity, and increase or decrease the throughput capacity of your file system – while continuing to use it – at any time by clicking “Update storage\\\" or \\\"Update throughput” in the Amazon FSx Console, or by calling “update-file-system” in the AWS CLI/API and specifying the desired level.You can only increase storage but cannot decrease it. Hence C. ",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 708616,
          "date": "Mon 31 Oct 2022 18:54",
          "username": "Rocketeer",
          "content": "You can only increase storage but cannot decrease it. Hence C. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 677103,
          "date": "Fri 23 Sep 2022 14:14",
          "username": "gnandam",
          "content": "Answer is C:<br><br>Basic steps for migrating files using DataSync<br>To transfer files from a source location to a destination location using DataSync, take the following basic steps:<br><br>Download and deploy an agent in your environment and activate it.<br><br>Create and configure a source and destination location.<br><br>Create and configure a task.<br><br>Run the task to transfer files from the source to the destination.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 675305,
          "date": "Wed 21 Sep 2022 18:18",
          "username": "redipa",
          "content": "It's not A, you can't restore to a smaller file system:<br><br>Note<br>You can only restore your backup to a file system of the same deployment type and storage capacity as the original. <br><br>https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html#restoring-backups",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 666859,
          "date": "Mon 12 Sep 2022 13:22",
          "username": "jabilrn",
          "content": "There would be minimal downtime with C.  See https://docs.aws.amazon.com/fsx/latest/WindowsGuide/migrate-files-to-fsx-datasync.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 661913,
          "date": "Wed 07 Sep 2022 05:23",
          "username": "SGES",
          "content": "A - agreed",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#896",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an online shop that uses an Amazon API Gateway API, AWS Lambda functions, and an Amazon DynamoDB table provisioned with 900 RCUs.<br>The API Gateway API receives requests from customers, and the Lambda functions handle the requests. Some of the Lambda functions read data from the<br>DynamoDB table.<br>During peak hours, customers are reporting timeout errors and slow performance. An investigation reveals that the Lambda functions that read the DynamoDB table occasionally time out. Amazon CloudWatch metrics show that the peak usage of the DynamoDB table is just below 900 RCUs.<br>Which solution will resolve this issue MOST cost-effectively?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#896",
          "answers": [
            {
              "choice": "<p>A. Configure the DynamoDB table's read capacity to use auto scaling with default parameters.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Increase the timeout of all the Lambda functions that read from the DynamoDB table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use DynamoDB Streams to replicate data to a new table. Configure all the Lambda functions to read from the new table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Increase the DynamoDB table's provisioned read capacity to 1,400 RCUs.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 686982,
          "date": "Wed 05 Oct 2022 16:59",
          "username": "joanneli77",
          "content": "It can't exceed 900 RCUs, so \\\"just below 900 RCUs\\\" is \\\"at capacity\\\".Change to auto-scaling.If you were at 896-899, wouldn't you say \\\"woah, that's too close!\\\" or would you say \\\"Must be lambda time-outs?\\\"Best case, you'd still address dynamoDB even if it WAS lambda time-outs.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 665996,
          "date": "Sun 11 Sep 2022 11:55",
          "username": "pixepe",
          "content": "Amazon CloudWatch metrics show that the peak usage of the DynamoDB table is just below 900 RCUs. => There is NO Issue w.r.t DynamoDB<br><br>So, A,B and D filtered out.<br><br>ANSWER is B",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 708836,
          "date": "Tue 01 Nov 2022 05:29",
          "username": "alxjandroleiva",
          "content": "RCU is not a problem",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 703191,
          "date": "Mon 24 Oct 2022 18:13",
          "username": "redipa",
          "content": "The answer is definitely not A.  The key words are \\\"with default parameters\\\" <br>Default auto-scaling read parameters have a maximum of 10. If the table is already using 900 RCUs, this would severely lower the resources. 900 -> 10",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 691729,
          "date": "Tue 11 Oct 2022 06:36",
          "username": "skywalkerskywalker",
          "content": "Customers are reporting timeout errors and slow performance.. Increasing timemout will caused it even slower.<br><br>Thus going for A.  At least it provide some read performance enhancement.DynamoDB auto scaling modifies provisioned throughput settings only when the actual workload stays elevated (or depressed) for a sustained period of several minutes. The Application Auto Scaling target tracking algorithm seeks to keep the target utilization at or near your chosen value over the long term.Thus no harm turn on AutoScaling if the workload is steady and require some bursting in few min.<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/AutoScaling.html",
          "upvote_count": "52",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 691736,
          "date": "Tue 11 Oct 2022 06:41",
          "username": "skywalker",
          "content": "DynamoDB auto scaling modifies provisioned throughput settings only when the actual workload stays elevated (or depressed) for a sustained period of several minutes. The Application Auto Scaling target tracking algorithm seeks to keep the target utilization at or near your chosen value over the long term.Thus no harm turn on AutoScaling if the workload is steady and require some bursting in few min.<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/AutoScaling.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 660961,
          "date": "Tue 06 Sep 2022 09:43",
          "username": "cale",
          "content": "I think it's B. ",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#897",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a hybrid solution between its existing on-premises systems and a new backend in AWS. The company has a management application to monitor the state of its current IT infrastructure and automate responses to issues. The company wants to incorporate the status of its consumed AWS services into the application. The application uses an HTTPS endpoint to receive updates.<br>Which approach meets these requirements with the LEAST amount of operational overhead?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#897",
          "answers": [
            {
              "choice": "<p>A. Configure AWS Systems Manager OpsCenter to ingest operational events from the on-premises systems. Retire the on-premises management application and adopt OpsCenter as the hub.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure Amazon EventBridge (Amazon CloudWatch Events) to detect and react to changes for AWS Health events from the AWS Personal Health Dashboard. Configure the EventBridge (CloudWateh Events) event to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic and subscribe the topic to the HTTPS endpoint of the management application.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the on-premises management application to call the AWS Health API to poll for status events of AWS services.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure Amazon EventBridge (Amazon CloudWatch Events) to detect and react to changes for AWS Health events from the AWS Service Health Dashboard. Configure the EventBridge (CloudWateh Events) event to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic and subscribe the topic to an HTTPS endpoint for the management application with a topic filter corresponding to the services being used.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 706714,
          "date": "Fri 28 Oct 2022 21:04",
          "username": "nsvijay04b1",
          "content": "A.  doesn't support on-pr em infra monitoring<br>B.  send aws resource health to on-prem monitoring<br>C,D others already discussed",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 700376,
          "date": "Fri 21 Oct 2022 01:32",
          "username": "AwsBRFan",
          "content": "\\\"The application uses an HTTPS endpoint to receive updates.\\\" So lazy app will not call AWS Health api, then C is not option. My best guess B also",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 697497,
          "date": "Mon 17 Oct 2022 17:11",
          "username": "wassb",
          "content": "AWS Personal Health Dashboard is about the resources you own.<br>AWS Service Health Dashboard is about the status of the AWS services",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 688681,
          "date": "Fri 07 Oct 2022 16:09",
          "username": "dcdcdc3",
          "content": "https://docs.aws.amazon.com/health/latest/ug/cloudwatch-events-health.html<br><br>why not D (from above link)<br>Currently, you can't use EventBridge to return public events from the Service Health Dashboard. Events from the Service Health Dashboard provide public information about the Regional availability of a service. These events aren't specific to AWS accounts, so they aren't delivered to EventBridge.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 679608,
          "date": "Mon 26 Sep 2022 12:09",
          "username": "saidmaziz",
          "content": "https://aws.amazon.com/about-aws/whats-new/2016/12/introducing-aws-personal-health-dashboard/<br><br>You can now receive notification and remediation guidance when AWS is experiencing events that may impact you. Available to all AWS customers, AWS Personal Health Dashboard provides a personalized view into the performance and availability of the AWS services you are using, as well as alerts that are automatically triggered by changes in the health of those services.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 673133,
          "date": "Mon 19 Sep 2022 11:32",
          "username": "kaparasb333",
          "content": "D - they need only to get data on AWS services they consume, not all services on AWS. so not B, choose D!D is what is used for all AWS services (not for one particular account). Since AWS Service Health Dashboard is public...it cannot interface with EventBridge. Answer is B since that dashboard is related to services within your account.",
          "upvote_count": "32",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 684579,
          "date": "Sun 02 Oct 2022 05:38",
          "username": "sb333",
          "content": "D is what is used for all AWS services (not for one particular account). Since AWS Service Health Dashboard is public...it cannot interface with EventBridge. Answer is B since that dashboard is related to services within your account.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 671363,
          "date": "Sat 17 Sep 2022 10:48",
          "username": "Ni_yot",
          "content": "The Service Health Dashboard is a good way to view the overall status of each AWS service, but provides little in terms of how the health of those services is impacting your resources. AWS Personal Health Dashboard provides a personalized view of the health of the specific services that are powering your workloads and applications. What’s more, Personal Health Dashboard proactively notifies you when AWS experiences any events that may affect you, helping provide quick visibility and guidance to help you minimize the impact of events in progress, and plan for any scheduled changes, such as AWS hardware maintenance.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#898",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is offering one of its applications as a multi-tenant software-as-a-service (SaaS) solution. The application has a RESTAPI that runs on a set of Amazon<br>EC2 instances behind an Application Load Balancer (ALB). The instances run in an Auto Scaling group.<br>Last week, one of the tenants ran a campaign that significantly increased traffic to the REST API. The resource constraints affected the performance of other tenants that were running on the same set of EC2 instances. The company wants the ability to throttle API calls for each tenant.<br>Which combination of steps should a solutions architect take to meet these requirements? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BEF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#898",
          "answers": [
            {
              "choice": "<p>A. Create an AWS WAF web ACL. Add a rate-based rule statement to the web ACL. Set the action to block.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon API Gateway API. Assign an API key usage plan for each tenant.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon API Gateway API. Assign the AWS WAF web ACL to the API Gateway API.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon CloudFront distribution. Assign the AWS WAF web ACL to the CloudFront distribution.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a VPC link for HTTP APIs. Set up the ALB as the target. Configure an HTTP proxy private integration that uses the VPC link.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Modify the application's API requests to target the newly created endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 685221,
          "date": "Mon 03 Oct 2022 07:27",
          "username": "JohnPicrerem",
          "content": "B.  Create an Amazon API Gateway API. Assign an API key usage plan for each tenant.<br>E.  Create a VPC link for HTTP APIs. Set up the ALB as the target. Configure an HTTP proxy private integration that uses the VPC link.<br>F.  Modify the application's API requests to target the newly created endpoint.i don't understand how will E and F -help on throttle API calls ?",
          "upvote_count": "61",
          "selected_answers": "Selected Answer: BEF"
        },
        {
          "id": 714345,
          "date": "Wed 09 Nov 2022 07:48",
          "username": "crerem",
          "content": "i don't understand how will E and F -help on throttle API calls ?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 656484,
          "date": "Thu 01 Sep 2022 19:12",
          "username": "daiditenan",
          "content": "e.g. B,E,F",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 714314,
          "date": "Wed 09 Nov 2022 06:27",
          "username": "Byrney",
          "content": "Not A because a rate based rule in WAF is per *originating IP address* not per tenant.You need to use usage plans.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BEF"
        },
        {
          "id": 708145,
          "date": "Mon 31 Oct 2022 03:34",
          "username": "awsguru1998",
          "content": "BC cant go together as they are both having step of 'Create an Amazon API Gateway API.\\\"<br>CORRECT ABD",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 695381,
          "date": "Sat 15 Oct 2022 14:27",
          "username": "pek77pek77",
          "content": "Usage Plan could enable to limit throttling the rate.<br>Thus, A C wrong.<br><br>When you chose the API gateway you should modify your app, from ALB to API Gateway (F)<br><br>And proxy API Gateway to ALB (E) <br>https://aws.amazon.com/premiumsupport/knowledge-center/api-gateway-application-load-balancers/?nc1=h_lsUsage Plan, enable throttling to limit the rate.: https://aws.amazon.com/cn/blogs/aws/new-usage-plans-for-amazon-api-gateway/",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: BEF"
        },
        {
          "id": 695382,
          "date": "Sat 15 Oct 2022 14:28",
          "username": "pek77",
          "content": "Usage Plan, enable throttling to limit the rate.: https://aws.amazon.com/cn/blogs/aws/new-usage-plans-for-amazon-api-gateway/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 691744,
          "date": "Tue 11 Oct 2022 06:47",
          "username": "skywalker",
          "content": "A. Create a Rate Limit so that no tenat can over use the bandwidth<br>B.  Create Usage Plan to limit usage of each API<br>C.  Assign API Gateway API together with WAF. <br><br>Thus ABC. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ABC"
        },
        {
          "id": 688693,
          "date": "Fri 07 Oct 2022 16:20",
          "username": "dcdcdc3",
          "content": "I will go with the links provided by sb333<br>It appears DEF are how to make a private API, which is already private, per the question.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ABC"
        },
        {
          "id": 684575,
          "date": "Sun 02 Oct 2022 05:20",
          "username": "sb333",
          "content": "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-control-access-aws-waf.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ABC"
        },
        {
          "id": 671850,
          "date": "Sun 18 Sep 2022 01:06",
          "username": "Cloudxie",
          "content": "https://aws.amazon.com/blogs/compute/managing-multi-tenant-apis-using-amazon-api-gateway/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 656481,
          "date": "Thu 01 Sep 2022 19:09",
          "username": "daiditenancrerem",
          "content": "why do you think that waf acl is throttling related ? is more about usage plans <br>https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.htmlwaf is rate based rule - so it will block anything above a value - just like throttling",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 714343,
          "date": "Wed 09 Nov 2022 07:46",
          "username": "crerem",
          "content": "waf is rate based rule - so it will block anything above a value - just like throttling",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#899",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A news company wants to implement an AWS Lambda function that calls an external API to receive new press releases every 10 minutes. The API provider is planning to use an IP address allow list to protect the API, so the news company needs to provide any public IP addresses that access the API. The company's current architecture includes a VPC with an internet gateway and a NAT gateway. A solutions architect must implement a static IP address for the Lambda function.<br>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#899",
          "answers": [
            {
              "choice": "<p>A. Use the Elastic IP address that is associated with the NAT gateway for the IP address allow list.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Assign an Elastic IP address to the Lambda function. Use the Lambda function's Elastic IP address for the IP address allow list.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the Lambda function to launch in the private subnet of the VPC. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the Lambda function to launch in the public subnet of the VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a transit gateway. Attach the VPC and the Lambda function to the transit gateway.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 685222,
          "date": "Mon 03 Oct 2022 07:29",
          "username": "JohnPi",
          "content": "private subnet + NAT",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 667386,
          "date": "Mon 12 Sep 2022 21:02",
          "username": "Ni_yot",
          "content": "A and C.  AWS Lambda functions should not be configured to connect to public subnets. They should either be configured to use \\\"No VPC\\\" (in which case they can directly access the Internet), or they should be connected to private subnets (and can use a NAT Gateway or NAT",
          "upvote_count": "5",
          "selected_answers": ""
        }
      ]
    }
  ]
}