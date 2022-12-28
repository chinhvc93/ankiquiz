var ExamTopic_301_400 = {
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#301",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You have written a CloudFormation template that creates 1 Elastic Load Balancer fronting 2 EC2 Instances.<br>Which section of the template should you edit so that the DNS of the load balancer is returned upon creation of the stack?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#301",
          "answers": [
            {
              "choice": "<p>A. Parameters<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Outputs<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Mappings<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Resources<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 532707,
          "date": "Wed 26 Jan 2022 09:45",
          "username": "shotty1",
          "content": "it is most definitly B",
          "upvote_count": "2"
        },
        {
          "id": 529352,
          "date": "Fri 21 Jan 2022 21:08",
          "username": "CloudChef",
          "content": "You can use AWS CloudFormation's sample templates or create your own templates to describe the AWS resources, and any associated dependencies or runtime parameters, required to run your application.<br>In the following example, the output named BackupLoadBalancerDNSName returns the DNS name for the resource with the logical ID BackupLoadBalancer only when the CreateProdResources condition is true. (The second output shows how to specify multiple outputs.) \\\"Outputs\\\" : {<br>\\\"BackupLoadBalancerDNSName\\\" : {<br>\\\"Description\\\": \\\"The DNSName of the backup load balancer\\\", \\\"Value\\\" : { \\\"Fn::GetAtt\\\" : [ \\\"BackupLoadBalancer\\\", \\\"DNSName\\\" ]}, \\\"Condition\\\" :<br>\\\"CreateProdResources\\\"<br>},<br>\\\"InstanceID\\\" : {<br>\\\"Description\\\": \\\"The Instance ID\\\", \\\"Value\\\" : { \\\"Ref\\\" : \\\"EC2Instance\\\" }<br>}<br>}<br>Reference:<br>http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/outputs-section-structure.html",
          "upvote_count": "1"
        },
        {
          "id": 462580,
          "date": "Thu 28 Oct 2021 23:51",
          "username": "Bhagirathi",
          "content": "is it not B ?",
          "upvote_count": "4"
        },
        {
          "id": 407788,
          "date": "Sun 03 Oct 2021 11:39",
          "username": "anirban7172",
          "content": "Correct Answer is C",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#302",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In CloudFormation, if you want to map an Amazon Elastic Block Store to an Amazon EC2 instance, _________.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#302",
          "answers": [
            {
              "choice": "<p>A. you reference the logical IDs to associate the block stores with the instance<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. you reference the physical IDs of the instance along with the resource type<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. you reference the instance IDs of the block store along with the resource properties<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. you reference the physical IDs of both the block stores and the instance<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 515869,
          "date": "Mon 03 Jan 2022 16:21",
          "username": "Ni_yot",
          "content": "Agree its A.  https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resources-section-structure.html",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#303",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization hosts an app on EC2 instances which multiple developers need access to in order to perform updates.<br>The organization plans to implement some security best practices related to instance access.<br>Which one of the following recommendations will not help improve its security in this way?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#303",
          "answers": [
            {
              "choice": "<p>A. Disable the password based login for all the users. All the users should use their own keys to connect with the instance securely.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an IAM policy allowing only IAM users to connect to the EC2 instances with their own SSH key.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a procedure to revoke the access rights of the individual user when they are not required to connect to EC2 instance anymore for the purpose of application configuration.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Apply the latest patch of OS and always keep it updated.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 501256,
          "date": "Tue 14 Dec 2021 10:18",
          "username": "GeniusMikeLiuGeniusMikeLiu",
          "content": "why B ? It seems more security for the ssh accessIt's b;<br>\\\"IAM is useful when users are required to work with AWS resources and actions, such as launching an instance. It is not useful in this case because it does not manage who can connect via RDP or SSH with an instance.\\\"",
          "upvote_count": "32"
        },
        {
          "id": 527291,
          "date": "Wed 19 Jan 2022 08:33",
          "username": "GeniusMikeLiu",
          "content": "It's b;<br>\\\"IAM is useful when users are required to work with AWS resources and actions, such as launching an instance. It is not useful in this case because it does not manage who can connect via RDP or SSH with an instance.\\\"",
          "upvote_count": "2"
        },
        {
          "id": 496558,
          "date": "Wed 08 Dec 2021 06:37",
          "username": "cldy",
          "content": "B.  Create an IAM policy allowing only IAM users to connect to the EC2 instances with their own SSH key.",
          "upvote_count": "3"
        },
        {
          "id": 462620,
          "date": "Tue 12 Oct 2021 01:12",
          "username": "Bhagirathi",
          "content": "B seems OK",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#304",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user has configured two security groups which allow traffic as given below: 1: SecGrp1:<br>Inbound on port 80 for 0.0.0.0/0 Inbound on port 22 for 0.0.0.0/0 2: SecGrp2:<br>Inbound on port 22 for 10.10.10.1/32<br>If both the security groups are associated with the same instance, which of the below mentioned statements is true?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#304",
          "answers": [
            {
              "choice": "<p>A. It is not possible to have more than one security group assigned to a single instance<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. It is not possible to create the security group with conflicting rules. AWS will reject the request<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. It allows inbound traffic for everyone on both ports 22 and 80<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. It allows inbound traffic on port 22 for IP 10.10.10.1 and for everyone else on port 80<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 494247,
          "date": "Sun 05 Dec 2021 12:02",
          "username": "cldy",
          "content": "C.  It allows inbound traffic for everyone on both ports 22 and 80",
          "upvote_count": "1"
        },
        {
          "id": 277864,
          "date": "Sun 07 Nov 2021 15:46",
          "username": "aimar047",
          "content": "clearly C",
          "upvote_count": "1"
        },
        {
          "id": 148277,
          "date": "Sun 31 Oct 2021 01:01",
          "username": "SlinkySideWinder",
          "content": "C also, Security group rules are always permissive; you can't create rules that deny access.",
          "upvote_count": "1"
        },
        {
          "id": 53254,
          "date": "Tue 05 Oct 2021 23:46",
          "username": "SamuelKGorha",
          "content": "C is the right answer.<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html<br>If there is more than one rule for a specific port, we apply the most permissive rule. For example, if you have a rule that allows access to TCP port 22 (SSH) from IP address 203.0.113.1 and another rule that allows access to TCP port 22 from everyone, everyone has access to TCP port 22.correct, thanks for posting!",
          "upvote_count": "31"
        },
        {
          "id": 55080,
          "date": "Fri 15 Oct 2021 12:48",
          "username": "Gorha",
          "content": "correct, thanks for posting!",
          "upvote_count": "1"
        },
        {
          "id": 52216,
          "date": "Tue 05 Oct 2021 11:59",
          "username": "GorhaGorha",
          "content": "Yes D is correct: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.htmlsorry, C is correct the most permissive rule",
          "upvote_count": "12"
        },
        {
          "id": 55079,
          "date": "Wed 13 Oct 2021 04:25",
          "username": "Gorha",
          "content": "sorry, C is correct the most permissive rule",
          "upvote_count": "2"
        },
        {
          "id": 36876,
          "date": "Thu 30 Sep 2021 08:10",
          "username": "Danao",
          "content": "C is correct.",
          "upvote_count": "1"
        },
        {
          "id": 29370,
          "date": "Wed 29 Sep 2021 19:08",
          "username": "tan9",
          "content": "D. <br><br>If there is more than one rule for a SPECIFIC PORT, we apply the most permissive rule. For example, if you have a rule that allows access to TCP port 22 (SSH) from IP address 203.0.113.1 and another rule that allows access to TCP port 22 from everyone, everyone has access to TCP port 22.<br><br>The rule on port 22 and the other on 80 should remain two separate rules in the merged rules set.",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#305",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You have a website which requires international presence and consequently you have set it up as follows.<br>It is hosted on 30 EC2 instances.<br>It is on in 15 regions around the globe. Each region has 2 instances.<br>All the instances are a public hosted zone.<br>Which of the following is the best way to configure your site to maintain availability with minimum downtime if one of the 15 regions was to lose network connectivity for an extended period? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#305",
          "answers": [
            {
              "choice": "<p>A. Create a Route 53 Latency Based Routing Record set that resolves to an Elastic Load Balancer in each region and has the Evaluate Target Health flag set to true.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a Route 53 failover routing policy and configure an active-passive failover.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a Route 53 Failover Routing Policy and assign each resource record set a unique identifier and a relative weight.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a Route 53 Geolocation Routing Policy that resolves to an Elastic Load Balancer in each region and has the Evaluate Target Health flag set to false.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 497602,
          "date": "Thu 09 Dec 2021 11:24",
          "username": "cldy",
          "content": "A.  Create a Route 53 Latency Based Routing Record set that resolves to an Elastic Load Balancer in each region and has the Evaluate Target Health flag set to true.<br>B.  Create a Route 53 failover routing policy and configure an active-passive failover.",
          "upvote_count": "2"
        },
        {
          "id": 458812,
          "date": "Fri 29 Oct 2021 15:51",
          "username": "seyik",
          "content": "AB<br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-simple",
          "upvote_count": "1"
        },
        {
          "id": 380793,
          "date": "Sat 09 Oct 2021 16:04",
          "username": "0103701037",
          "content": "A and B are different solution, I don't see how they work together.In B, inside every region, one instance is active, the other is passive.",
          "upvote_count": "11"
        },
        {
          "id": 380794,
          "date": "Sun 17 Oct 2021 03:59",
          "username": "01037",
          "content": "In B, inside every region, one instance is active, the other is passive.",
          "upvote_count": "1"
        },
        {
          "id": 376949,
          "date": "Fri 24 Sep 2021 00:30",
          "username": "Aline_H01037",
          "content": "is not BD? why AB?“has the Evaluate Target Health flag set to false.” is the point",
          "upvote_count": "11"
        },
        {
          "id": 380792,
          "date": "Sun 03 Oct 2021 14:43",
          "username": "01037",
          "content": "“has the Evaluate Target Health flag set to false.” is the point",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#306",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user is accessing an EC2 instance on the SSH port for IP 10.20.30.40/32.<br>Which one is a secure way to configure that the instance can be accessed only from this IP?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#306",
          "answers": [
            {
              "choice": "<p>A. In the security group, open port 22 for IP 10.20.30.40<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. In the security group, open port 22 for IP 10.20.30.0<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. In the security group, open port 22 for IP 10.20.30.40/32<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. In the security group, open port 22 for IP 10.20.30.40/0<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 577615,
          "date": "Tue 29 Mar 2022 15:03",
          "username": "jj22222",
          "content": "C is right for sure using/32",
          "upvote_count": "1"
        },
        {
          "id": 561315,
          "date": "Sat 05 Mar 2022 09:54",
          "username": "pal40sg",
          "content": "Straight forward answer",
          "upvote_count": "1"
        },
        {
          "id": 462866,
          "date": "Thu 21 Oct 2021 05:07",
          "username": "Bhagirathi",
          "content": "looks like it is correct.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#307",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>While assigning a tag to an instance, which of the below mentioned options is not a valid tag key/value pair?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#307",
          "answers": [
            {
              "choice": "<p>A. Key : \"aws\" Value:\"aws\"<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Key: \"aws:name\" Value: \"instanceAnswer: Aws\"<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Key: \"Name :aws\" Value: \"instanceAnswer: Aws\"<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Key : \"nameAnswer: Aws\" Value:\"aws:instance\"<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 494115,
          "date": "Sun 05 Dec 2021 07:46",
          "username": "cldy",
          "content": "B.  Key: \\\"aws:name\\\" Value: \\\"instanceAnswer: Aws\\\"",
          "upvote_count": "3"
        },
        {
          "id": 289356,
          "date": "Wed 29 Sep 2021 17:48",
          "username": "Mansur",
          "content": "Answer B<br><br>Tag restrictions<br><br>The following basic restrictions apply to tags:<br><br>Maximum number of tags per resource – 50<br>For each resource, each tag key must be unique, and each tag key can have only one value.<br>Maximum key length – 128 Unicode characters in UTF-8<br>Maximum value length – 256 Unicode characters in UTF-8<br>Although EC2 allows for any character in its tags, other services are more restrictive. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.<br>Tag keys and values are case-sensitive.<br>The aws: prefix is reserved for AWS use. If a tag has a tag key with this prefix, then you can't edit or delete the tag's key or value. Tags with the aws: prefix do not count against your tags per resource limit.",
          "upvote_count": "3"
        },
        {
          "id": 142989,
          "date": "Thu 23 Sep 2021 07:17",
          "username": "learner4ever",
          "content": "The aws: prefix is reserved for AWS use. If a tag has a tag key with this prefix, then you can't edit or delete the tag's key or value. Tags with the aws: prefix do not count against your tags per resource limit.",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#308",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Will you be able to access EC2 snapshots using the regular Amazon S3 APIs?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#308",
          "answers": [
            {
              "choice": "<p>A. Yes, you will be able to access using S3 APIs if you have chosen the snapshot to be stored in S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. No, snapshots are only available through the Amazon EBS APIs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Yes, you will be able to access them using S3 APIs as all snapshots are stored in S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. No, snapshots are only available through the Amazon EC2 APIs.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 42357,
          "date": "Tue 19 Oct 2021 07:44",
          "username": "Denis_H",
          "content": "FYI<br>The correct link is: https://aws.amazon.com/ec2/faqs/#Storage<br><br>Q: Will I be able to access my EBS snapshots using the regular Amazon S3 APIs?<br>No, EBS snapshots are only available through the Amazon EC2 APIs.",
          "upvote_count": "10"
        },
        {
          "id": 494221,
          "date": "Sun 05 Dec 2021 11:22",
          "username": "cldy",
          "content": "D.  No, snapshots are only available through the Amazon EC2 APIs.",
          "upvote_count": "1"
        },
        {
          "id": 477989,
          "date": "Sun 14 Nov 2021 08:37",
          "username": "gingerbytes",
          "content": "Q: Will I be able to access my EBS snapshots using the regular Amazon S3 APIs?<br>No, EBS snapshots are only available through the Amazon EC2 APIs.",
          "upvote_count": "1"
        },
        {
          "id": 172254,
          "date": "Sat 30 Oct 2021 13:13",
          "username": "Ganfeng",
          "content": "EBS direct API seems can access the snapshot too?<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-accessing-snapshot.html",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#309",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user has created an AWS AMI. The user wants the AMI to be available only to his friend and not anyone else. How can the user manage this?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#309",
          "answers": [
            {
              "choice": "<p>A. Share the AMI with the community and setup the approval workflow before anyone launches it.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. It is not possible to share the AMI with the selected user.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Share the AMI with a friend's AWS account ID. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Share the AMI with a friend's AWS login ID. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 521698,
          "date": "Tue 11 Jan 2022 19:37",
          "username": "AnonymousJhb",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/share-ami-account/",
          "upvote_count": "3"
        },
        {
          "id": 515656,
          "date": "Mon 03 Jan 2022 12:46",
          "username": "hansmong",
          "content": "I think it's this from AWS doc:<br>\\\"You can share an AMI with specific AWS accounts without making the AMI public. All you need is the AWS account IDs.<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sharingamis-explicit.html",
          "upvote_count": "2"
        },
        {
          "id": 495913,
          "date": "Tue 07 Dec 2021 12:17",
          "username": "RihoAnonymousJhbRVivek",
          "content": "Can't understand how it's correct. If AMI is shared withfriend AWS account - then all fiends account user can have access for this AMI. It's not what was asked.C is correct.<br>https://aws.amazon.com/premiumsupport/knowledge-center/share-ami-account/Yes. Sharing it to a specific user account is not possible. B should be the anser",
          "upvote_count": "211"
        },
        {
          "id": 521696,
          "date": "Tue 11 Jan 2022 19:37",
          "username": "AnonymousJhb",
          "content": "C is correct.<br>https://aws.amazon.com/premiumsupport/knowledge-center/share-ami-account/",
          "upvote_count": "1"
        },
        {
          "id": 510047,
          "date": "Mon 27 Dec 2021 06:51",
          "username": "RVivek",
          "content": "Yes. Sharing it to a specific user account is not possible. B should be the anser",
          "upvote_count": "1"
        },
        {
          "id": 494214,
          "date": "Sun 05 Dec 2021 11:12",
          "username": "cldy",
          "content": "C.  Share the AMI with a friend's AWS account ID. ",
          "upvote_count": "2"
        },
        {
          "id": 462868,
          "date": "Thu 23 Sep 2021 04:18",
          "username": "Bhagirathi",
          "content": "looks that is correct.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#310",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user is planning to launch multiple EC2 instance same as current running instance.<br>Which of the below mentioned parameters is not copied by Amazon EC2 in the launch wizard when the user has selected the option \"Launch more like this\"?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#310",
          "answers": [
            {
              "choice": "<p>A. Termination protection<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Tenancy setting<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Storage<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Shutdown behavior<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 585267,
          "date": "Wed 13 Apr 2022 16:54",
          "username": "Hasitha99",
          "content": "Specially, Number of network interfaces ANDStorage not copied ( in addition to that there may have some other attributes as well).<br>Ref: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/launch-more-like-this.html",
          "upvote_count": "1"
        },
        {
          "id": 495695,
          "date": "Tue 07 Dec 2021 07:58",
          "username": "cldy",
          "content": "C.  Storage",
          "upvote_count": "2"
        },
        {
          "id": 446585,
          "date": "Tue 19 Oct 2021 00:47",
          "username": "moon2351",
          "content": "Answer is C",
          "upvote_count": "2"
        },
        {
          "id": 78973,
          "date": "Wed 22 Sep 2021 05:19",
          "username": "Exam_boy",
          "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/launch-more-like-this.html",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#311",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user has launched an EBS optimized instance with EC2. Which of the below mentioned options is the correct statement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#311",
          "answers": [
            {
              "choice": "<p>A. It provides additional dedicated capacity for EBS IO<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. The attached EBS will have greater storage capacity<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The user will have a PIOPS based EBS volume<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. It will be launched on dedicated hardware in VPC<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 495620,
          "date": "Tue 07 Dec 2021 06:11",
          "username": "cldy",
          "content": "A.  It provides additional dedicated capacity for EBS IO",
          "upvote_count": "1"
        },
        {
          "id": 462874,
          "date": "Sat 25 Sep 2021 08:14",
          "username": "Bhagirathi",
          "content": "A seems correct.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#312",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which status represents a failure state in AWS CloudFormation?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#312",
          "answers": [
            {
              "choice": "<p>A. ROLLBACK_IN_PROGRESS<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. DELETE_IN_PROGRESS<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. UPDATE_COMPLETE_CLEANUP_IN_PROGRESS<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. REVIEW_IN_PROGRESS<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 529590,
          "date": "Sat 22 Jan 2022 05:22",
          "username": "Devgela",
          "content": "A is my choice",
          "upvote_count": "2"
        },
        {
          "id": 494137,
          "date": "Sun 05 Dec 2021 08:34",
          "username": "cldy",
          "content": "A.  ROLLBACK_IN_PROGRESS",
          "upvote_count": "2"
        },
        {
          "id": 446589,
          "date": "Sun 31 Oct 2021 06:18",
          "username": "moon2351",
          "content": "Answer is A",
          "upvote_count": "2"
        },
        {
          "id": 407105,
          "date": "Tue 19 Oct 2021 09:27",
          "username": "rodolfo2020",
          "content": "The answer is ROLLBACK_IN_PROGRESS.",
          "upvote_count": "2"
        },
        {
          "id": 390451,
          "date": "Sun 17 Oct 2021 21:46",
          "username": "DashL",
          "content": "If you create a change set for a new stack, AWS CloudFormation creates a stack with a unique stack ID, but no template or resources. The stack will be in the REVIEW_IN_PROGRESS state until you execute the change set.",
          "upvote_count": "2"
        },
        {
          "id": 41384,
          "date": "Tue 12 Oct 2021 01:25",
          "username": "CloudFloater",
          "content": "going for A<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-describing-stacks.html<br><br>REVIEW_IN_PROGRESS\tOngoing creation of one or more stacks with an expected StackId but without any templates or resource<br><br>ROLLBACK_IN_PROGRESS<br><br>Ongoing removal of one or more stacks after a failed stack creation or after an explicitly cancelled stack creation",
          "upvote_count": "2"
        },
        {
          "id": 29445,
          "date": "Thu 07 Oct 2021 13:08",
          "username": "tan9Ian90",
          "content": "I will go for D. <br><br>Other three options all describing one ongoing state of the stack, and will eventually advanced to next state once the action performing is completed or failed.<br><br>However, REVIEW_IN_PROGRESS is a failure state that the stack was stock, and only you can do something on it to put it forward another state.rollback la. where got D,",
          "upvote_count": "21"
        },
        {
          "id": 562000,
          "date": "Sun 06 Mar 2022 13:30",
          "username": "Ian90",
          "content": "rollback la. where got D,",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#313",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are playing around with setting up stacks using JSON templates in CloudFormation to try and understand them a little better. You have set up about 5 or 6 but now start to wonder if you are being charged for these stacks.<br>What is AWS's billing policy regarding stack resources?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#313",
          "answers": [
            {
              "choice": "<p>A. You are not charged for the stack resources if they are not taking any traffic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. You are charged for the stack resources for the time they were operating (but not if you deleted the stack within 30 minutes)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. You are charged for the stack resources for the time they were operating (but not if you deleted the stack within 60 minutes)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. You are charged for the stack resources for the time they were operating (even if you deleted the stack right away)<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 42367,
          "date": "Tue 12 Oct 2021 01:00",
          "username": "Denis_H",
          "content": "FYI<br>The full text for the ANSWER:<br>\\\"You are charged for the stack resources for the time they were operating (even if you deleted the stack right away)\\\"",
          "upvote_count": "6"
        },
        {
          "id": 495591,
          "date": "Tue 07 Dec 2021 05:30",
          "username": "cldy",
          "content": "D.  You are charged for the stack resources for the time they were operating (even if you deleted the stack right away)",
          "upvote_count": "1"
        },
        {
          "id": 488863,
          "date": "Sun 28 Nov 2021 07:06",
          "username": "backfringe",
          "content": "I'd go with D",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#314",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In an AWS CloudFormation template, each resource declaration includes:</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#314",
          "answers": [
            {
              "choice": "<p>A. a logical ID, a resource type, and resource properties<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. a variable resource name and resource attributes<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. an IP address and resource entities<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. a physical ID, a resource file, and resource data<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 494160,
          "date": "Sun 05 Dec 2021 09:27",
          "username": "cldy",
          "content": "A.  a logical ID, a resource type, and resource properties",
          "upvote_count": "1"
        },
        {
          "id": 480688,
          "date": "Thu 18 Nov 2021 13:33",
          "username": "acloudguru",
          "content": "A, https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resources-section-structure.html. Such question will not be shown in the real exam. I guess it is just the practise questions here.",
          "upvote_count": "1"
        },
        {
          "id": 236381,
          "date": "Mon 11 Oct 2021 09:55",
          "username": "nqobza",
          "content": "Is this really for the profession exam. Questions seem a bit too easy.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#315",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>For AWS CloudFormation, which stack state refuses UpdateStack calls?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#315",
          "answers": [
            {
              "choice": "<p>A. UPDATE_ROLLBACK_FAILED<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. UPDATE_ROLLBACK_COMPLETE<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. UPDATE_COMPLETE<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. CREATE_COMPLETE<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 643708,
          "date": "Sun 07 Aug 2022 13:32",
          "username": "ude",
          "content": "it's A. <br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-continueupdaterollback.html",
          "upvote_count": "1"
        },
        {
          "id": 546128,
          "date": "Sat 12 Feb 2022 23:24",
          "username": "GreenTick",
          "content": "B. either rollback status indicate the stack update has failed, UPDATE_ROLLBACK_FAILED indicate that the rollback has failed too, UPDATE_ROLLBACK_COMPLETE indicate that the rollback has been completed.",
          "upvote_count": "2"
        },
        {
          "id": 494243,
          "date": "Sun 05 Dec 2021 11:54",
          "username": "cldy",
          "content": "A.  UPDATE_ROLLBACK_FAILED",
          "upvote_count": "2"
        },
        {
          "id": 42371,
          "date": "Tue 26 Oct 2021 11:15",
          "username": "Denis_H",
          "content": "Updated link bellow:<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-continueupdaterollback.html",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#316",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In the context of AWS CloudFormation, which of the following statements is correct?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#316",
          "answers": [
            {
              "choice": "<p>A. Actual resource names are a combination of the resource ID, stack, and logical resource name.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Actual resource name is the stack resource name.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Actual resource name is the logical resource name.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Actual resource names are a combination of the stack and logical resource name.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 320678,
          "date": "Sun 17 Oct 2021 01:37",
          "username": "ExtHoacloudguru",
          "content": "https://aws.amazon.com/cloudformation/faqs/<br>Q: How does AWS CloudFormation choose actual resource names?<br><br>You can assign logical names to AWS resources in a template. When a stack is created, AWS CloudFormation binds the logical name to the name of the corresponding actual AWS resource. Actual resource names are a combination of the stack and logical resource name. This allows multiple stacks to be created from a template without fear of name collisions between AWS resources.D, right? the combination",
          "upvote_count": "52"
        },
        {
          "id": 479177,
          "date": "Tue 16 Nov 2021 05:51",
          "username": "acloudguru",
          "content": "D, right? the combination",
          "upvote_count": "2"
        },
        {
          "id": 546031,
          "date": "Sat 12 Feb 2022 18:55",
          "username": "arberod",
          "content": "Answer is D",
          "upvote_count": "1"
        },
        {
          "id": 494097,
          "date": "Sun 05 Dec 2021 07:07",
          "username": "cldy",
          "content": "D.  Actual resource names are a combination of the stack and logical resource name.",
          "upvote_count": "2"
        },
        {
          "id": 380806,
          "date": "Thu 21 Oct 2021 12:50",
          "username": "01037",
          "content": "Not every type resources, for example EIP, EC2, RDS, etc.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#317",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>When using the AWS CLI for AWS CloudFormation, which of the following commands returns a description of the specified resource in the specified stack?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#317",
          "answers": [
            {
              "choice": "<p>A. describe-stack-events<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. describe-stack-resource<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. create-stack-resource<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. describe-stack-returns<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 496025,
          "date": "Tue 07 Dec 2021 14:06",
          "username": "cldy",
          "content": "B.  describe-stack-resource",
          "upvote_count": "1"
        },
        {
          "id": 462875,
          "date": "Fri 15 Oct 2021 01:06",
          "username": "Bhagirathi",
          "content": "B is correct",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#318",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user is using CloudFormation to launch an EC2 instance and then configure an application after the instance is launched. The user wants the stack creation of<br>ELB and AutoScaling to wait until the EC2 instance is launched and configured properly.<br>How can the user configure this?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#318",
          "answers": [
            {
              "choice": "<p>A. The user can use the DependentCondition resource to hold the creation of the other dependent resources.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. It is not possible that the stack creation will wait until one service is created and launched.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The user can use the HoldCondition resource to wait for the creation of the other dependent resources.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The user can use the WaitCondition resource to hold the creation of the other dependent resources.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 577823,
          "date": "Tue 29 Mar 2022 20:25",
          "username": "jj22222",
          "content": "D.  The user can use the WaitCondition resource to hold the creation of the other dependent resources.",
          "upvote_count": "2"
        },
        {
          "id": 573750,
          "date": "Wed 23 Mar 2022 17:07",
          "username": "ravisar",
          "content": "Answer is D.  Waitcondition will Coordinate stack resource creation with other configuration actions that are external to the stack creation<br><br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-waitcondition.html",
          "upvote_count": "1"
        },
        {
          "id": 380867,
          "date": "Sat 02 Oct 2021 12:19",
          "username": "01037",
          "content": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waitcondition.html",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#319",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>AWS ________supports__________ environments as one of the AWS resource types.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#319",
          "answers": [
            {
              "choice": "<p>A. Elastic Beanstalk; Elastic Beanstalk application<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. CloudFormation; Elastic Beanstalk application<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Elastic Beanstalk ; CloudFormation application<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. CloudFormation; CloudFormation application<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 696428,
          "date": "Sun 16 Oct 2022 19:59",
          "username": "rostykm",
          "content": "B CloudFormation; Elastic Beanstalk application",
          "upvote_count": "1"
        },
        {
          "id": 494104,
          "date": "Sun 05 Dec 2021 07:09",
          "username": "cldy",
          "content": "B.  CloudFormation; Elastic Beanstalk application",
          "upvote_count": "1"
        },
        {
          "id": 410037,
          "date": "Sat 23 Oct 2021 02:06",
          "username": "Aline_Hacloudguru",
          "content": "AWS CloudFormation supports Elastic Beanstalk application environments as one of the AWS resource types.so it is B, right? what a weird question. I do not believe it can exist in the exam.",
          "upvote_count": "21"
        },
        {
          "id": 479875,
          "date": "Wed 17 Nov 2021 09:40",
          "username": "acloudguru",
          "content": "so it is B, right? what a weird question. I do not believe it can exist in the exam.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#320",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>AWS CloudFormation ______ are special actions you use in your template to assign values to properties that are not available until runtime.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#320",
          "answers": [
            {
              "choice": "<p>A. intrinsic functions<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. properties declarations<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. output functions<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. conditions declarations<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 497764,
          "date": "Thu 09 Dec 2021 14:48",
          "username": "fais1985",
          "content": "Correct answer",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#321",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>For Amazon EC2 issues, while troubleshooting AWS CloudFormation, you need to view the cloud-init and cfn logs for more information. Identify a directory to which these logs are published.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#321",
          "answers": [
            {
              "choice": "<p>A. /var/opt/log/ec2<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. /var/log/lastlog<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. /var/log/<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. /var/log/ec2<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 495027,
          "date": "Mon 06 Dec 2021 11:09",
          "username": "cldy",
          "content": "C.  /var/log/",
          "upvote_count": "1"
        },
        {
          "id": 478130,
          "date": "Sun 14 Nov 2021 14:09",
          "username": "gingerbytes",
          "content": "C. /var/log/",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#322",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>True or false: In a CloudFormation template, you can reuse the same logical ID several times to reference the resources in other parts of the template.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#322",
          "answers": [
            {
              "choice": "<p>A. True, a logical ID can be used several times to reference the resources in other parts of the template.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. False, a logical ID must be unique within the template.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. False, you can mention a resource only once and you cannot reference it in other parts of a template.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. False, you cannot reference other parts of the template.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 483004,
          "date": "Sun 21 Nov 2021 05:05",
          "username": "acloudguru",
          "content": "reuse! not duplicated! so it is A. ",
          "upvote_count": "8"
        },
        {
          "id": 696431,
          "date": "Sun 16 Oct 2022 20:06",
          "username": "rostykm",
          "content": "B:the logical name not ID",
          "upvote_count": "1"
        },
        {
          "id": 547508,
          "date": "Tue 15 Feb 2022 04:35",
          "username": "jyrajan69",
          "content": "You may reuse the same logical ID multiple times, keyword being reuse. The logical ID is still unique, and it is, so the answer is A",
          "upvote_count": "2"
        },
        {
          "id": 495741,
          "date": "Tue 07 Dec 2021 08:39",
          "username": "cldy",
          "content": "B.  False, a logical ID must be unique within the template.",
          "upvote_count": "2"
        },
        {
          "id": 200996,
          "date": "Sun 07 Nov 2021 16:28",
          "username": "MIU",
          "content": "B.  It should be unique. Why people here are confused?",
          "upvote_count": "1"
        },
        {
          "id": 88332,
          "date": "Fri 29 Oct 2021 18:04",
          "username": "Merlin1",
          "content": "Again the wording \\\"reuse\\\" can you reuse it? No, can you reference it to add a resource to it i.e an EBS store yes. Does it have to be unique within a template yes.<br>So if I am understanding the wording here...Can you \\\"reference\\\" a logical id more than once? Yes i.e adding 2 EBS volumes to it...You would use the logical ID to add each volume. Can you \\\"reuse\\\" that ID for a different resource? No...So what am I missing here? Seems like A to me.",
          "upvote_count": "3"
        },
        {
          "id": 79687,
          "date": "Mon 11 Oct 2021 00:51",
          "username": "santanu77",
          "content": "A.  <br><br>Logical ID\\\"The logical ID must be alphanumeric (A-Za-z0-9) and unique within the template. Use the logical name to reference the resource in other parts of the template. For example, if you want to map an Amazon Elastic Block Store volume to an Amazon EC2 instance, you reference the logical IDs to associate the block stores with the instance.\\\"From http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/concept-resources.html",
          "upvote_count": "2"
        },
        {
          "id": 61681,
          "date": "Sat 25 Sep 2021 21:13",
          "username": "lephi16lephi16",
          "content": "Shouldn't this be A, according to it's own supporting information: In AWS CloudFormation, the logical ID must be alphanumeric (A-Za-z0-9) and unique within the template. You use the logical name to reference the resource in other parts of the template. http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/concept-resources.htmlSry misread, the logical name part.. B it is",
          "upvote_count": "11"
        },
        {
          "id": 61682,
          "date": "Fri 08 Oct 2021 00:36",
          "username": "lephi16",
          "content": "Sry misread, the logical name part.. B it is",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#323",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>True or false: In CloudFormation, you cannot create an Amazon RDS DB instance from a snapshot.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#323",
          "answers": [
            {
              "choice": "<p>A. False, you can specify it in attributes<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. False, you can specify it in condition<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. False, you can specify it in resource properties<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. True<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 498316,
          "date": "Fri 10 Dec 2021 06:24",
          "username": "cldy",
          "content": "C.  False, you can specify it in resource properties",
          "upvote_count": "3"
        },
        {
          "id": 380926,
          "date": "Thu 30 Sep 2021 19:30",
          "username": "01037Aline_H",
          "content": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-dbsnapshotidentifierAWS CloudFormation creates a database from the specified snapshot.",
          "upvote_count": "11"
        },
        {
          "id": 410039,
          "date": "Sun 17 Oct 2021 07:54",
          "username": "Aline_H",
          "content": "AWS CloudFormation creates a database from the specified snapshot.",
          "upvote_count": "1"
        },
        {
          "id": 79787,
          "date": "Mon 27 Sep 2021 17:18",
          "username": "Exam_boy",
          "content": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#aws-properties-rds-database-instance-syntax",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#324",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>How can you check the operational validity of your AWS CloudFormation template?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#324",
          "answers": [
            {
              "choice": "<p>A. To check the operational validity, you need to attempt to create the stack.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. There is no way to check the operational validity of your AWS CloudFormation template.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. To check the operational validity, you need a sandbox or test area for AWS CloudFormation stacks.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. To check the operational validity, you need to use the aws cloudformation validate-template command.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 560133,
          "date": "Thu 03 Mar 2022 15:44",
          "username": "Mechanic",
          "content": "Answer is A. <br>The aws cloudformation validate-template command is designed to check only the syntax of your template<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-validate-template.html",
          "upvote_count": "4"
        },
        {
          "id": 513395,
          "date": "Thu 30 Dec 2021 14:23",
          "username": "fifakuAnonymousJhb",
          "content": "I think D tooIt's not D. <br>This will only check for syntax errors.",
          "upvote_count": "21"
        },
        {
          "id": 534820,
          "date": "Fri 28 Jan 2022 16:54",
          "username": "AnonymousJhb",
          "content": "It's not D. <br>This will only check for syntax errors.",
          "upvote_count": "1"
        },
        {
          "id": 494205,
          "date": "Sun 05 Dec 2021 11:01",
          "username": "cldy",
          "content": "A.  To check the operational validity, you need to attempt to create the stack.",
          "upvote_count": "2"
        },
        {
          "id": 446606,
          "date": "Fri 29 Oct 2021 00:37",
          "username": "moon2351",
          "content": "Answer is A",
          "upvote_count": "1"
        },
        {
          "id": 331558,
          "date": "Tue 12 Oct 2021 22:20",
          "username": "M_Asep",
          "content": "A<br>To check your template file for syntax errors, you can use the aws cloudformation validate-template command.<br><br>To check the operational validity, you need to attempt to create the stack. There is no sandbox or test area for AWS CloudFormation stacks, so you are charged for the resources you create during testing.<br><br>http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-validate-template.html",
          "upvote_count": "1"
        },
        {
          "id": 24187,
          "date": "Thu 07 Oct 2021 13:13",
          "username": "Rockeye",
          "content": "A is the correct answer.",
          "upvote_count": "1"
        },
        {
          "id": 21932,
          "date": "Sat 25 Sep 2021 23:49",
          "username": "Scunningham99",
          "content": "Sorry A is the correct due to operational validity",
          "upvote_count": "3"
        },
        {
          "id": 21931,
          "date": "Thu 23 Sep 2021 15:48",
          "username": "Scunningham99lcyning",
          "content": "D is the correct answer !I think the key is \\\"operational validity\\\", to check syntax we can use answer D",
          "upvote_count": "12"
        },
        {
          "id": 476544,
          "date": "Thu 11 Nov 2021 23:46",
          "username": "lcyning",
          "content": "I think the key is \\\"operational validity\\\", to check syntax we can use answer D",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#325",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>What is a circular dependency in AWS CloudFormation?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#325",
          "answers": [
            {
              "choice": "<p>A. When Nested Stacks depend on each other.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. When Resources form a Depend On loop.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. When a Template references an earlier version of itself.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. When a Template references a region, which references the original Template.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 475958,
          "date": "Thu 11 Nov 2021 04:22",
          "username": "acloudguruAnonymousJhbacloudguru",
          "content": "B,<br>\\\"A circular dependency, as the name implies, means that two resources are dependent on each other or that a resource is dependent on itself:\\\"https://aws.amazon.com/blogs/infrastructure-and-automation/handling-circular-dependency-errors-in-aws-cloudformation/this is the same question in Devops?",
          "upvote_count": "1111"
        },
        {
          "id": 563157,
          "date": "Tue 08 Mar 2022 11:25",
          "username": "AnonymousJhb",
          "content": "https://aws.amazon.com/blogs/infrastructure-and-automation/handling-circular-dependency-errors-in-aws-cloudformation/",
          "upvote_count": "1"
        },
        {
          "id": 479172,
          "date": "Tue 16 Nov 2021 05:37",
          "username": "acloudguru",
          "content": "this is the same question in Devops?",
          "upvote_count": "1"
        },
        {
          "id": 606889,
          "date": "Tue 24 May 2022 21:58",
          "username": "jelefunk",
          "content": "Answer B<br>http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-dependency-error",
          "upvote_count": "1"
        },
        {
          "id": 570071,
          "date": "Thu 17 Mar 2022 22:16",
          "username": "missionml",
          "content": "It is B",
          "upvote_count": "1"
        },
        {
          "id": 566096,
          "date": "Sat 12 Mar 2022 12:53",
          "username": "cale",
          "content": "It's B",
          "upvote_count": "1"
        },
        {
          "id": 562066,
          "date": "Sun 06 Mar 2022 15:40",
          "username": "Bukowski",
          "content": "clearly B",
          "upvote_count": "1"
        },
        {
          "id": 494095,
          "date": "Sun 05 Dec 2021 07:07",
          "username": "cldy",
          "content": "B.  When Resources form a Depend On loop.",
          "upvote_count": "1"
        },
        {
          "id": 474306,
          "date": "Mon 08 Nov 2021 14:39",
          "username": "m_y_sm_y_s",
          "content": "It seems that ASorry, I'm wrong. I can't delete my comment",
          "upvote_count": "11"
        },
        {
          "id": 474309,
          "date": "Mon 08 Nov 2021 14:41",
          "username": "m_y_s",
          "content": "Sorry, I'm wrong. I can't delete my comment",
          "upvote_count": "1"
        },
        {
          "id": 380935,
          "date": "Sun 07 Nov 2021 12:20",
          "username": "01037",
          "content": "https://aws.amazon.com/cn/blogs/infrastructure-and-automation/handling-circular-dependency-errors-in-aws-cloudformation/",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#326",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You need to develop and run some new applications on AWS and you know that Elastic Beanstalk and CloudFormation can both help as a deployment mechanism for a broad range of AWS resources.<br>Which of the following is TRUE statements when describing the differences between Elastic Beanstalk and CloudFormation?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#326",
          "answers": [
            {
              "choice": "<p>A. AWS Elastic Beanstalk introduces two concepts: The template, a JSON or YAML-format, text- based file<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Elastic Beanstalk supports AWS CloudFormation application environments as one of the AWS resource types.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Elastic Beanstalk automates and simplifies the task of repeatedly and predictably creating groups of related resources that power your applications. CloudFormation does not.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. You can design and script custom resources in CloudFormation<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 498419,
          "date": "Fri 10 Dec 2021 09:31",
          "username": "KiraguJohn",
          "content": "I was thinking the answer is B until I realised this is a reverse statement. The correct statement could be...AWS CloudFormation supports Elastic Beanstalk application environments as one of the AWS resource types.<br>So i will go with D because of the Custom keyword",
          "upvote_count": "6"
        },
        {
          "id": 544305,
          "date": "Thu 10 Feb 2022 06:01",
          "username": "Bigbearcn",
          "content": "It's B.  <br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-beanstalk-environment.html",
          "upvote_count": "1"
        },
        {
          "id": 524692,
          "date": "Sun 16 Jan 2022 08:00",
          "username": "peddyua",
          "content": "D is more of a full answer <br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-custom-resources.html",
          "upvote_count": "3"
        },
        {
          "id": 520436,
          "date": "Sun 09 Jan 2022 21:13",
          "username": "CloudChef",
          "content": "D people.",
          "upvote_count": "3"
        },
        {
          "id": 338575,
          "date": "Thu 21 Oct 2021 12:48",
          "username": "Billy101",
          "content": "D is the only one that is true as it is stated.<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-custom-resources.html",
          "upvote_count": "2"
        },
        {
          "id": 175324,
          "date": "Thu 07 Oct 2021 17:10",
          "username": "KayodeKayodeKayodesergioandreslq",
          "content": "The question is about the difference between the two. I think the answer is D. Sorry, It's B.  \\\"AWS CloudFormation supports Elastic Beanstalk application environments as one of the AWS resource types\\\" and not the other way!This question is so confusing. B is not true. I'm going with D again!Bro, it is D. ",
          "upvote_count": "1112"
        },
        {
          "id": 175329,
          "date": "Sat 09 Oct 2021 07:21",
          "username": "KayodeKayodesergioandreslq",
          "content": "Sorry, It's B.  \\\"AWS CloudFormation supports Elastic Beanstalk application environments as one of the AWS resource types\\\" and not the other way!This question is so confusing. B is not true. I'm going with D again!Bro, it is D. ",
          "upvote_count": "112"
        },
        {
          "id": 175331,
          "date": "Tue 19 Oct 2021 08:40",
          "username": "Kayodesergioandreslq",
          "content": "This question is so confusing. B is not true. I'm going with D again!Bro, it is D. ",
          "upvote_count": "12"
        },
        {
          "id": 444873,
          "date": "Tue 26 Oct 2021 02:18",
          "username": "sergioandreslq",
          "content": "Bro, it is D. ",
          "upvote_count": "2"
        },
        {
          "id": 159817,
          "date": "Tue 05 Oct 2021 11:59",
          "username": "uupadhyayPhat",
          "content": "I think correct answer is : Bseem reversely, cloudformation supports Elastic Beantalk as manoj101 points out.",
          "upvote_count": "12"
        },
        {
          "id": 161509,
          "date": "Wed 06 Oct 2021 02:35",
          "username": "Phat",
          "content": "seem reversely, cloudformation supports Elastic Beantalk as manoj101 points out.",
          "upvote_count": "2"
        },
        {
          "id": 123405,
          "date": "Wed 22 Sep 2021 23:47",
          "username": "manoj101manoj101",
          "content": "Shouldn't it be B. My apology I misread the statement. The correct statement is following.<br><br>AWS CloudFormation supports Elastic Beanstalk application environments as one of the AWS resource types.",
          "upvote_count": "12"
        },
        {
          "id": 123407,
          "date": "Sat 02 Oct 2021 13:19",
          "username": "manoj101",
          "content": "My apology I misread the statement. The correct statement is following.<br><br>AWS CloudFormation supports Elastic Beanstalk application environments as one of the AWS resource types.",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#327",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An elastic network interface (ENI) is a virtual network interface that you can attach to an instance in a VPC.  An ENI can include one public IP address, which can be auto-assigned to the elastic network interface for eth0 when you launch an instance, but only when you_____.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#327",
          "answers": [
            {
              "choice": "<p>A. create an elastic network interface for eth1<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. include a MAC address<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. use an existing network interface<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. create an elastic network interface for eth0<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 233522,
          "date": "Fri 24 Sep 2021 06:23",
          "username": "newme01037",
          "content": "What does D mean?<br>I think only when subnet is configured auto-assign public ip, the primary ENI will have public ip when an instance is launched.D \\\"create an elastic network interface for eth0\\\" is the default action when creating an EC2 instance.<br>If changed to use an exsiting ENI for eth0, or add a new network interface, public IP won't be auto assigned.",
          "upvote_count": "12"
        },
        {
          "id": 381046,
          "date": "Wed 29 Sep 2021 19:05",
          "username": "01037",
          "content": "D \\\"create an elastic network interface for eth0\\\" is the default action when creating an EC2 instance.<br>If changed to use an exsiting ENI for eth0, or add a new network interface, public IP won't be auto assigned.",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#328",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>After setting an AWS Direct Connect, which of the following cannot be done with an AWS Direct Connect Virtual Interface?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#328",
          "answers": [
            {
              "choice": "<p>A. You can exchange traffic between the two ports in the same region connecting to different Virtual Private Gateways (VGWs) if you have more than one virtual interface.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. You can change the region of your virtual interface.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. You can delete a virtual interface; if its connection has no other virtual interfaces, you can delete the connection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. You can create a hosted virtual interface.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 490501,
          "date": "Tue 30 Nov 2021 08:52",
          "username": "Gaurav_GGG",
          "content": "B<br>You can migrate a virtual interface to a new connection within the same Region, but you can't migrate it from one Region to another. <br>Source <br> - <br>https://docs.aws.amazon.com/directconnect/latest/UserGuide/migratevirtualinterface.html",
          "upvote_count": "7"
        },
        {
          "id": 550095,
          "date": "Fri 18 Feb 2022 09:03",
          "username": "jyrajan69",
          "content": "It says what cannot be done, and based on that the answer is definitely B",
          "upvote_count": "3"
        },
        {
          "id": 548679,
          "date": "Wed 16 Feb 2022 15:37",
          "username": "Ricky53",
          "content": "A is right answer:<br>https://docs.aws.amazon.com/directconnect/latest/UserGuide/migratevirtualinterface.html<br>Note<br>You can migrate a virtual interface to a new connection within the same Region, but you can't migrate it from one Region to another. When you migrate or associate an existing virtual interface to a new connection, the configuration parameters associated with those virtual interfaces are the same. To work around this, you can pre-stage the configuration on the connection, and then update the BGP configuration.<br><br>You can't migrate a VIF from one hosted connection to another hosted connection. VLAN IDs are unique; therefore, migrating a VIF in this way would mean the VLANs don't match. You either need to delete the connection or VIF, and then recreate that using a VLAN that's the same for both the connection and the VIF. ",
          "upvote_count": "1"
        },
        {
          "id": 542626,
          "date": "Mon 07 Feb 2022 20:17",
          "username": "jj22222",
          "content": "BBBBBBBBBBBBBBB",
          "upvote_count": "1"
        },
        {
          "id": 525766,
          "date": "Mon 17 Jan 2022 13:40",
          "username": "cannottellname",
          "content": "A cannot be done. While, interface is global entity.<br>Not sure why answer cannot be A",
          "upvote_count": "1"
        },
        {
          "id": 522770,
          "date": "Thu 13 Jan 2022 11:12",
          "username": "pititcu667",
          "content": "A is just wrong",
          "upvote_count": "3"
        },
        {
          "id": 513349,
          "date": "Thu 30 Dec 2021 13:27",
          "username": "cldy",
          "content": "B is correct.",
          "upvote_count": "2"
        },
        {
          "id": 499312,
          "date": "Sat 11 Dec 2021 11:13",
          "username": "cldy",
          "content": "B.  You can change the region of your virtual interface.",
          "upvote_count": "1"
        },
        {
          "id": 490393,
          "date": "Tue 30 Nov 2021 04:38",
          "username": "acloudguru",
          "content": "B,https://docs.aws.amazon.com/directconnect/latest/UserGuide/migratevirtualinterface.html",
          "upvote_count": "1"
        },
        {
          "id": 475948,
          "date": "Thu 11 Nov 2021 04:02",
          "username": "sashenka",
          "content": "B<br>\\\"You can migrate a virtual interface to a new connection within the same Region, but you can't migrate it from one Region to another.\\\"<br>https://docs.aws.amazon.com/directconnect/latest/UserGuide/migratevirtualinterface.html",
          "upvote_count": "3"
        },
        {
          "id": 442162,
          "date": "Tue 19 Oct 2021 14:04",
          "username": "rlandire",
          "content": "Looks like A is possible:<br>https://d0.awsstatic.com/whitepapers/aws-amazon-vpc-connectivity-options.pdf",
          "upvote_count": "2"
        },
        {
          "id": 381062,
          "date": "Sun 26 Sep 2021 21:09",
          "username": "01037",
          "content": "Not sure about B<br>Can't find any references",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#329",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Identify a correct statement about the expiration date of the \"Letter of Authorization and Connecting Facility Assignment (LOA-CFA),\" which lets you complete the<br>Cross Connect step of setting up your AWS Direct Connect.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#329",
          "answers": [
            {
              "choice": "<p>A. If the cross connect is not completed within 90 days, the authority granted by the LOA-CFA expires.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. If the virtual interface is not created within 72 days, the LOA-CFA becomes outdated.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. If the cross connect is not completed within a user-defined time, the authority granted by the LOA- CFA expires.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. If the cross connect is not completed within the specified duration from the appropriate provider, the LOA-CFA expires.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 462889,
          "date": "Wed 27 Oct 2021 06:21",
          "username": "Bhagirathi",
          "content": "90 days......",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#330",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which of the following is the final step that should be completed to start using AWS Direct Connect?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#330",
          "answers": [
            {
              "choice": "<p>A. Creating your Virtual Interface<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configuring your router<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Completing the Cross Connect<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Verifying your Virtual Interface<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 624376,
          "date": "Wed 29 Jun 2022 04:23",
          "username": "TechX",
          "content": "Answer: D<br>Explanation:<br>You can get started using AWS Direct Connect by completing the following steps. <br>Step 1: Sign Up for Amazon Web Services <br>Step 2: Submit AWS Direct Connect Connection Request <br>Step 3: Complete the Cross Connect (optional) <br>Step 4: Configure Redundant Connections with AWS Direct Connect <br>Step 5: Create a Virtual Interface <br>Step 6: Download Router Configuration <br>Step 7: Verify Your Virtual Interface",
          "upvote_count": "4"
        },
        {
          "id": 465139,
          "date": "Wed 03 Nov 2021 00:41",
          "username": "gingerbytes",
          "content": "D <br>https://docs.aws.amazon.com/directconnect/latest/UserGuide/getting_started.html",
          "upvote_count": "1"
        },
        {
          "id": 450643,
          "date": "Wed 22 Sep 2021 07:12",
          "username": "moon2351",
          "content": "Answer is D",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#331",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user has created a VPC with CIDR 20.0.0.0/16. The user has created one subnet with CIDR 20.0.0.0/16 by mistake. The user is trying to create another subnet of CIDR 20.0.1.0/24.<br>How can the user create the second subnet?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#331",
          "answers": [
            {
              "choice": "<p>A. The user can modify the first subnet CIDR with AWS CLI<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The user can modify the first subnet CIDR from the console<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. There is no need to update the subnet as VPC automatically adjusts the CIDR of the first subnet based on the second subnet's CIDR<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. It is not possible to create a second subnet with overlapping IP CIDR without deleting the first subnet.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 497322,
          "date": "Thu 09 Dec 2021 05:41",
          "username": "cldy",
          "content": "D.  It is not possible to create a second subnet with overlapping IP CIDR without deleting the first subnet.",
          "upvote_count": "2"
        },
        {
          "id": 484108,
          "date": "Mon 22 Nov 2021 12:02",
          "username": "acloudguru",
          "content": "hope I can have this question in my exam",
          "upvote_count": "1"
        },
        {
          "id": 462944,
          "date": "Mon 25 Oct 2021 22:59",
          "username": "Bhagirathi",
          "content": "D speaks",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#332",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which of the following should be followed before connecting to Amazon Virtual Private Cloud (Amazon VPC) using AWS Direct Connect?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#332",
          "answers": [
            {
              "choice": "<p>A. Provide a public Autonomous System Number (ASN) to identify your network on the Internet.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a virtual private gateway and attach it to your Virtual Private Cloud (VPC).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Allocate a private IP address to your network in the 122.x.x.x range.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provide a public IP address for each Border Gateway Protocol (BGP) session.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 496553,
          "date": "Wed 08 Dec 2021 06:31",
          "username": "cldy",
          "content": "B.  Create a virtual private gateway and attach it to your Virtual Private Cloud (VPC).",
          "upvote_count": "1"
        },
        {
          "id": 483771,
          "date": "Mon 22 Nov 2021 02:04",
          "username": "acloudguru",
          "content": "wish i can have such simple question in my exam",
          "upvote_count": "2"
        },
        {
          "id": 462948,
          "date": "Wed 03 Nov 2021 08:22",
          "username": "Bhagirathi",
          "content": "B speaks",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#333",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your supervisor has given you the task of creating an elastic network interface on each of your web servers that connect to a mid-tier network where an application server resides. He also wants this set up as a Dual-homed Instance on Distinct Subnets. Instead of routing network packets through the dual-homed instances, where should each dual-homed instance receive and process requests to fulfil his criteria?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#333",
          "answers": [
            {
              "choice": "<p>A. On one of the web servers<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. On the front end<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. On the back end<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Through a security group<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 381844,
          "date": "Thu 14 Oct 2021 22:48",
          "username": "01037GeniusMikeLiu",
          "content": "I don't understand the question very well.me too ,I just memorize this one.",
          "upvote_count": "82"
        },
        {
          "id": 531981,
          "date": "Tue 25 Jan 2022 09:41",
          "username": "GeniusMikeLiu",
          "content": "me too ,I just memorize this one.",
          "upvote_count": "2"
        },
        {
          "id": 517264,
          "date": "Wed 05 Jan 2022 09:18",
          "username": "lucesarano",
          "content": "Creating dual-homed instances with workloads/roles on distinct subnets<br>You can place a network interface on each of your web servers that connects to a mid-tier network where an application server resides. The application server can also be dual-homed to a backend network (subnet) where the database server resides. Instead of routing network packets through the dual-homed instances, each dual-homed instance receives and processes requests on the front end, initiates a connection to the backend, and then sends requests to the servers on the backend network.",
          "upvote_count": "1"
        },
        {
          "id": 446899,
          "date": "Mon 18 Oct 2021 08:10",
          "username": "nodogoshi",
          "content": "I think this question is not real aws exam. too ambiguous question.",
          "upvote_count": "1"
        },
        {
          "id": 426108,
          "date": "Sat 16 Oct 2021 10:40",
          "username": "FERIN_01",
          "content": "Creating dual-homed instances with workloads/roles on distinct subnets<br>You can place a network interface on each of your web servers that connects to a mid-tier network where an application server resides. The application server can also be dual-homed to a backend network (subnet) where the database server resides. Instead of routing network packets through the dual-homed instances, each dual-homed instance receives and processes requests on the front end, initiates a connection to the backend, and then sends requests to the servers on the backend network.",
          "upvote_count": "1"
        },
        {
          "id": 240570,
          "date": "Tue 12 Oct 2021 15:39",
          "username": "muffadalis",
          "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/scenarios-enis.html",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#334",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user has created a VPC with CIDR 20.0.0.0/16 using the wizard. The user has created a public subnet CIDR (20.0.0.0/24) and VPN only subnets CIDR<br>(20.0.1.0/24) along with the VPN gateway (vgw-123456) to connect to the user's data center. The user's data center has CIDR 172.28.0.0/12. The user has also setup a NAT instance (i-123456) to allow traffic to the internet from the VPN subnet.<br>Which of the below mentioned options is not a valid entry for the main route table in this scenario?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#334",
          "answers": [
            {
              "choice": "<p>A. Destination: 20.0.0.0/16 and Target: local<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Destination: 0.0.0.0/0 and Target: i-123456<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Destination: 172.28.0.0/12 and Target: vgw-123456<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Destination: 20.0.1.0/24 and Target: i-123456<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 497348,
          "date": "Thu 09 Dec 2021 06:18",
          "username": "cldy",
          "content": "D.  Destination: 20.0.1.0/24 and Target: i-123456",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#335",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In which step of \"start using AWS Direct Connect\" steps is the virtual interface you created tagged with a customer-provided tag that complies with the Ethernet<br>802.1Q standard?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#335",
          "answers": [
            {
              "choice": "<p>A. Download Router Configuration.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Complete the Cross Connect.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure Redundant Connections with AWS Direct Connect.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a Virtual Interface.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 539216,
          "date": "Wed 02 Feb 2022 23:10",
          "username": "wahlbergusa",
          "content": "https://docs.aws.amazon.com/directconnect/latest/UserGuide/create-vif.html",
          "upvote_count": "1"
        },
        {
          "id": 410044,
          "date": "Tue 05 Oct 2021 03:25",
          "username": "Aline_H",
          "content": "mentioned it in VLAN",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#336",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user has created a VPC with CIDR 20.0.0.0/16 using the VPC wizard. The user has created public and VPN only subnets along with hardware VPN access to connect to the user's data center. The user has not yet launched any instance as well as modified or deleted any setup. He wants to delete this VPC from the console.<br>Will the console allow the user to delete the VPC?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#336",
          "answers": [
            {
              "choice": "<p>A. Yes, the user can detach the virtual private gateway and then use the VPC console to delete the VPC. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. No, since the NAT instance is running, the user cannot delete the VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Yes, the user can use the CLI to delete the VPC that will detach the virtual private gateway automatically.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. No, the VPC console needs to be accessed using an administrator account to delete the VPC. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 513054,
          "date": "Thu 30 Dec 2021 07:30",
          "username": "Lukasz_Jankowski",
          "content": "VPC peering connections are not deleted automatically: https://docs.aws.amazon.com/vpc/latest/userguide/working-with-vpcs.html#VPC_Deleting",
          "upvote_count": "1"
        },
        {
          "id": 495058,
          "date": "Mon 06 Dec 2021 11:52",
          "username": "cldy",
          "content": "A.  Yes, the user can detach the virtual private gateway and then use the VPC console to delete the VPC. ",
          "upvote_count": "2"
        },
        {
          "id": 377562,
          "date": "Sat 06 Nov 2021 03:30",
          "username": "Aline_H",
          "content": "https://docs.aws.amazon.com/vpc/latest/userguide/working-with-vpcs.html#VPC_Deleting",
          "upvote_count": "1"
        },
        {
          "id": 132906,
          "date": "Sat 30 Oct 2021 05:10",
          "username": "khksomavishg",
          "content": "Nat Instance will come into play when there is a private subnet. Here its only Public and VPN only subnetsSeems 2 correct",
          "upvote_count": "31"
        },
        {
          "id": 595884,
          "date": "Mon 02 May 2022 07:15",
          "username": "vishg",
          "content": "Seems 2 correct",
          "upvote_count": "1"
        },
        {
          "id": 18625,
          "date": "Sat 30 Oct 2021 02:13",
          "username": "TechGuru",
          "content": "No NAT instance will be created in VPN only flow",
          "upvote_count": "2"
        },
        {
          "id": 17596,
          "date": "Tue 28 Sep 2021 22:21",
          "username": "Warrennvbal",
          "content": "Isn't the answer B as the NAT instance would still be running in the VPC and it needs to be deleted first?I had the same question and spent sometime to understand it. Since there is no Private Subnet & Internet Gateway in the picture; A is right.",
          "upvote_count": "13"
        },
        {
          "id": 502491,
          "date": "Wed 15 Dec 2021 22:47",
          "username": "vbal",
          "content": "I had the same question and spent sometime to understand it. Since there is no Private Subnet & Internet Gateway in the picture; A is right.",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#337",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You have been asked to set up a public website on AWS with the following criteria:<br>You want the database and the application server running on an Amazon VPC.  You want the database to be able to connect to the Internet so that it can be automatically updated to the correct patch level.<br>You do not want to receive any incoming traffic from the Internet to the database.<br>Which solutions would be the best to satisfy all the above requirements for your planned public website on AWS? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#337",
          "answers": [
            {
              "choice": "<p>A. Set up both the public website and the database on a public subnet and block all incoming requests from the Internet with a Network Access Control List (NACL)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up both the public website and the database on a public subnet, and block all incoming requests from the Internet with a security group which only allows access from the IP of the public website.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up the public website on a public subnet and set up the database in a private subnet which connects to the Internet via a NAT instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up both the public website and the database on a private subnet and block all incoming requests from the Internet with a Network Access Control List (NACL). Set up a Security group between the public website and the database which only allows access via port 80.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 647715,
          "date": "Tue 16 Aug 2022 16:58",
          "username": "Ni_yot",
          "content": "B and C. I can see B works but not ideal to have your DB in public subnet",
          "upvote_count": "2"
        },
        {
          "id": 538369,
          "date": "Wed 02 Feb 2022 04:43",
          "username": "zolivuser0001",
          "content": "C is the ONLY correct answer. is this question rigged to fail?you can still have database in public submet and control access via SG , not recommended but still an option",
          "upvote_count": "41"
        },
        {
          "id": 606784,
          "date": "Tue 24 May 2022 17:27",
          "username": "user0001",
          "content": "you can still have database in public submet and control access via SG , not recommended but still an option",
          "upvote_count": "1"
        },
        {
          "id": 532027,
          "date": "Tue 25 Jan 2022 11:03",
          "username": "HellGate",
          "content": "BC is right choice over A(NACL).<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.RDSSecurityGroups.html",
          "upvote_count": "1"
        },
        {
          "id": 530412,
          "date": "Sun 23 Jan 2022 10:25",
          "username": "lulz111",
          "content": "This is a one answer question, not a two answer question. The answer is C. ",
          "upvote_count": "2"
        },
        {
          "id": 499795,
          "date": "Sun 12 Dec 2021 06:20",
          "username": "KiraguJohn",
          "content": "I only see C as a good answer",
          "upvote_count": "2"
        },
        {
          "id": 450706,
          "date": "Wed 27 Oct 2021 14:52",
          "username": "moon2351",
          "content": "I think Answer is C",
          "upvote_count": "2"
        },
        {
          "id": 446905,
          "date": "Fri 01 Oct 2021 12:13",
          "username": "nodogoshi",
          "content": "Only C. <br>you should not place database in public subnet .",
          "upvote_count": "2"
        },
        {
          "id": 383446,
          "date": "Mon 20 Sep 2021 15:39",
          "username": "rain_wu",
          "content": "I suppose CD",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#338",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which statement is NOT true about accessing remote AWS region in the US by your AWS Direct Connect which is located in the US?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#338",
          "answers": [
            {
              "choice": "<p>A. AWS Direct Connect locations in the United States can access public resources in any US region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. You can use a single AWS Direct Connect connection to build multi-region services.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Any data transfer out of a remote region is billed at the location of your AWS Direct Connect data transfer rate.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. To connect to a VPC in a remote region, you can use a virtual private network (VPN) connection over your public virtual interface.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 495115,
          "date": "Mon 06 Dec 2021 13:20",
          "username": "cldy",
          "content": "C.  Any data transfer out of a remote region is billed at the location of your AWS Direct Connect data transfer rate.",
          "upvote_count": "2"
        },
        {
          "id": 488862,
          "date": "Sun 28 Nov 2021 07:01",
          "username": "backfringe",
          "content": "I'd go with C",
          "upvote_count": "1"
        },
        {
          "id": 69584,
          "date": "Sun 03 Oct 2021 11:56",
          "username": "Smart",
          "content": "Option B: 'Multi-region services' confuses me. It suggests that one region can connect to another using Direct Connect - which is incorrect. I think it should be worded like Multi-Region connectivity. ???",
          "upvote_count": "2"
        },
        {
          "id": 43195,
          "date": "Thu 23 Sep 2021 10:00",
          "username": "Denis_Hnewme01037",
          "content": "FYI, bellow the complete text for D:<br>\\\"To connect to a VPC in a remote region, you can use a virtual private network (VPN) connection over your public virtual interface.\\\"use a virtual private network (VPN) connection over your public virtual interface<br>What does it mean?https://aws.amazon.com/premiumsupport/knowledge-center/create-vpn-direct-connect/",
          "upvote_count": "311"
        },
        {
          "id": 233721,
          "date": "Sun 17 Oct 2021 05:58",
          "username": "newme01037",
          "content": "use a virtual private network (VPN) connection over your public virtual interface<br>What does it mean?https://aws.amazon.com/premiumsupport/knowledge-center/create-vpn-direct-connect/",
          "upvote_count": "11"
        },
        {
          "id": 381856,
          "date": "Mon 01 Nov 2021 04:20",
          "username": "01037",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/create-vpn-direct-connect/",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#339",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which of the following statements is NOT correct when working with your AWS Direct Connect connection after it is set up completely?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#339",
          "answers": [
            {
              "choice": "<p>A. You can manage your AWS Direct Connect connections and view the connection details.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. You can delete a connection as long as there are no virtual interfaces attached to it.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. You cannot view the current connection ID and verify if it matches the connection ID on the Letter of Authorization (LOA).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. You can accept a host connection by purchasing a hosted connection from the partner (APN).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 635795,
          "date": "Sun 24 Jul 2022 01:08",
          "username": "hilft",
          "content": "Another question with \\\"NOT\\\" or \\\"FALSE\\\".<br>You can definitely view what you got.<br>C.  You cannot view the current connection ID and verify if it matches the connection ID on the Letter of Authorization (LOA).",
          "upvote_count": "1"
        },
        {
          "id": 505594,
          "date": "Mon 20 Dec 2021 18:48",
          "username": "thomasjos79thomasjos79",
          "content": "Ans :CYou can manage your AWS Direct Connect connections and view connection details, accept hosted connections, and delete connections. You can view the current status of your connection. You can also view your connection ID, which looks similar to this example dxcon-xxxx, and verify that it matches the connectionID on the Letter of Authorization (LOA) that you received from Amazon.<br><br>Reference:<br><br>http://docs.aws.amazon.com/directconnect/latest/UserGuide/viewdetails.html",
          "upvote_count": "24"
        },
        {
          "id": 505595,
          "date": "Mon 20 Dec 2021 18:49",
          "username": "thomasjos79",
          "content": "You can manage your AWS Direct Connect connections and view connection details, accept hosted connections, and delete connections. You can view the current status of your connection. You can also view your connection ID, which looks similar to this example dxcon-xxxx, and verify that it matches the connectionID on the Letter of Authorization (LOA) that you received from Amazon.<br><br>Reference:<br><br>http://docs.aws.amazon.com/directconnect/latest/UserGuide/viewdetails.html",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#340",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Over which of the following Ethernet standards does AWS Direct Connect link your internal network to an AWS Direct Connect location?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#340",
          "answers": [
            {
              "choice": "<p>A. Single mode fiber-optic cable<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Multi-mode fiber-optic cable<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Shielded balanced copper cable<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Twisted pair cable<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 529582,
          "date": "Sat 22 Jan 2022 04:56",
          "username": "Devgela",
          "content": "A.  Your network must use single-mode fiber with a 1000BASE-LX (1310 nm) transceiver for 1 gigabit Ethernet, a 10GBASE-LR (1310 nm) transceiver for 10 gigabit, or a 100GBASE-LR4 for 100 gigabit Ethernet.",
          "upvote_count": "1"
        },
        {
          "id": 494117,
          "date": "Sun 05 Dec 2021 07:50",
          "username": "cldy",
          "content": "A.  Single mode fiber-optic cable",
          "upvote_count": "1"
        },
        {
          "id": 491723,
          "date": "Wed 01 Dec 2021 15:31",
          "username": "wahlbergusa",
          "content": "A<br>https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html#overview_requirements",
          "upvote_count": "2"
        },
        {
          "id": 377570,
          "date": "Sat 09 Oct 2021 06:56",
          "username": "Aline_H",
          "content": "https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html#overview_requirements",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#341",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>One of the components that is part of ec2-net-utils used with ENI's is ec2ifscan.<br>Which of the following is not correct about ec2-net-utils?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#341",
          "answers": [
            {
              "choice": "<p>A. ec2-net-utils generates an interface configuration file suitable for use with DHCP.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. ec2-net-utils extends the functionality of the standard if up.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. ec2-net-utils detaches a primary network interface from an instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. ec2-net-utils identifies network interfaces when they are attached, detached, or reattached to a running instance.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 658148,
          "date": "Sat 03 Sep 2022 09:03",
          "username": "nnope",
          "content": "In the common case, customers should not need to be aware of its operation. Configuration of network interfaces should occur following the principle of least astonishment. That is, traffic should be routed via the ENI associated with the source address. Custom configuration should be respected. New ENI attachments should be used automatically, and associated resources should be cleaned up on detachment. Manipulation of an ENI attachment should not impact the functionality of any other ENIs.",
          "upvote_count": "1"
        },
        {
          "id": 642887,
          "date": "Fri 05 Aug 2022 11:53",
          "username": "gondohwe",
          "content": "C isnt correct...u cant detach a primary interface on an instance regardless of instance state...D is the correct if u interested in passing this Architect exam lol",
          "upvote_count": "1"
        },
        {
          "id": 494367,
          "date": "Sun 05 Dec 2021 14:34",
          "username": "cldy",
          "content": "C.  ec2-net-utils detaches a primary network interface from an instance.",
          "upvote_count": "2"
        },
        {
          "id": 407337,
          "date": "Sun 07 Nov 2021 05:28",
          "username": "rodolfo2020",
          "content": "C its correct.<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/best-practices-for-configuring-network-interfaces.html",
          "upvote_count": "3"
        },
        {
          "id": 377912,
          "date": "Fri 05 Nov 2021 05:54",
          "username": "Aline_H",
          "content": "not C? Question is NOT correct. And they mentioned <br>\\\"You can detach secondary network interfaces when the instance is running or stopped. However, you can't detach the primary network interface.\\\"",
          "upvote_count": "2"
        },
        {
          "id": 348352,
          "date": "Sun 24 Oct 2021 15:31",
          "username": "fcbflo01037",
          "content": "It's D https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/best-practices-for-configuring-network-interfaces.html<br>e.g.: \\\"Identifies network interfaces when they are attached, detached, or reattached to a running instance, and ensures that the hotplug script runs (53-ec2-network-interfaces.rules). Maps the MAC address to a device name (75-persistent-net-generator.rules, which generates 70-persistent-net.rules). \\\"Are you proving D is NOT \\\"NOT correct\\\"?",
          "upvote_count": "11"
        },
        {
          "id": 381869,
          "date": "Fri 05 Nov 2021 07:25",
          "username": "01037",
          "content": "Are you proving D is NOT \\\"NOT correct\\\"?",
          "upvote_count": "1"
        },
        {
          "id": 209992,
          "date": "Mon 04 Oct 2021 12:03",
          "username": "sohrshaisohrshai",
          "content": "D is correctpls ignore; C is correct answer ( Qn has NOT )",
          "upvote_count": "11"
        },
        {
          "id": 209994,
          "date": "Thu 21 Oct 2021 15:06",
          "username": "sohrshai",
          "content": "pls ignore; C is correct answer ( Qn has NOT )",
          "upvote_count": "1"
        },
        {
          "id": 43204,
          "date": "Mon 27 Sep 2021 08:44",
          "username": "Denis_H",
          "content": "FYI, bellow the complete text for D:<br>\\\"ec2-net-utils identifies network interfaces when they are attached, detached, or reattached to a running instance.\\\"",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#342",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user wants to create a public subnet in VPC and launch an EC2 instance within it. The user has not selected the option to assign a public IP address while launching the instance.<br>Which of the below mentioned statements is true with respect to this scenario?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#342",
          "answers": [
            {
              "choice": "<p>A. The instance will always have a public DNS attached to the instance by default<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The user would need to create a default route to IGW in subnet's route table and then attach an elastic IP to the instance to connect from the internet<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The user can directly attach an elastic IP to the instance<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. The instance will never launch if the public IP is not assigned<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 517129,
          "date": "Wed 05 Jan 2022 04:09",
          "username": "Buggie",
          "content": "B is better. C will not work without IGW",
          "upvote_count": "5"
        },
        {
          "id": 705453,
          "date": "Thu 27 Oct 2022 12:40",
          "username": "resnef",
          "content": "It is B.  Unless there was already an IGW and rt created, we need to create VPC > Subnet > IGW(Attach to VPC) > Add 0/0 with igw Route table for the subnet, the create EC2 Instance...",
          "upvote_count": "1"
        },
        {
          "id": 564251,
          "date": "Wed 09 Mar 2022 20:10",
          "username": "BlueGreen",
          "content": "- user wishes to construct a public subnet in VPC<br>- user did not pick the option to provide a public IP address<br>B covers both concerns!",
          "upvote_count": "3"
        },
        {
          "id": 495998,
          "date": "Tue 07 Dec 2021 13:51",
          "username": "cldy",
          "content": "C.  The user can directly attach an elastic IP to the instance",
          "upvote_count": "3"
        },
        {
          "id": 483115,
          "date": "Sun 21 Nov 2021 09:33",
          "username": "acloudguruBlueGreen",
          "content": "By default, an instance in a nondefault VPC is not assigned a public IPv4 address. When you create a subnet, we automatically associate it with the main route table for the VPC.  By default, the main route table doesn't contain a route to an internet gateway.- user wishes to construct a public subnet in VPC<br>- user did not pick the option to provide a public IP address<br>B covers both concerns!",
          "upvote_count": "41"
        },
        {
          "id": 564255,
          "date": "Wed 09 Mar 2022 20:13",
          "username": "BlueGreen",
          "content": "- user wishes to construct a public subnet in VPC<br>- user did not pick the option to provide a public IP address<br>B covers both concerns!",
          "upvote_count": "1"
        },
        {
          "id": 446918,
          "date": "Thu 04 Nov 2021 02:33",
          "username": "nodogoshi",
          "content": "C is correct also",
          "upvote_count": "1"
        },
        {
          "id": 427935,
          "date": "Wed 20 Oct 2021 13:35",
          "username": "blackgamer",
          "content": "The answer is C. ",
          "upvote_count": "1"
        },
        {
          "id": 390779,
          "date": "Wed 20 Oct 2021 04:05",
          "username": "DashL",
          "content": "By default, an instance in a nondefault VPC is not assigned a public IPv4 address. When you create a subnet, we automatically associate it with the main route table for the VPC.  By default, the main route table doesn't contain a route to an internet gateway.",
          "upvote_count": "1"
        },
        {
          "id": 377916,
          "date": "Sun 10 Oct 2021 23:49",
          "username": "Aline_H",
          "content": "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-getting-started.html",
          "upvote_count": "1"
        },
        {
          "id": 233726,
          "date": "Fri 08 Oct 2021 04:35",
          "username": "newme01037",
          "content": "The question is wired.<br>Doesn't \\\"public subnet\\\" mean the subnet has a IGW?Yes, but you still need to create route",
          "upvote_count": "11"
        },
        {
          "id": 381872,
          "date": "Mon 18 Oct 2021 07:38",
          "username": "01037",
          "content": "Yes, but you still need to create route",
          "upvote_count": "1"
        },
        {
          "id": 138739,
          "date": "Wed 29 Sep 2021 13:40",
          "username": "sco_murad",
          "content": "Bastion host can be used to connect from the Internet",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#343",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user has created a VPC with a public subnet. The user has terminated all the instances which are part of the subnet.<br>Which of the below mentioned statements is true with respect to this scenario?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#343",
          "answers": [
            {
              "choice": "<p>A. The subnet to which the instances were launched with will be deleted<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. When the user launches a new instance it cannot use the same subnet<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The user cannot delete the VPC since the subnet is not deleted<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Secondary network interfaces attached to the terminated instances may persist.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 520413,
          "date": "Sun 09 Jan 2022 19:57",
          "username": "CloudChef",
          "content": "D for me",
          "upvote_count": "1"
        },
        {
          "id": 507114,
          "date": "Wed 22 Dec 2021 14:33",
          "username": "bwestpha",
          "content": "Wasn't there the fact that a public subnet creates an IGW which will not be removed automatically when deleting the vpc? I thought so ^^°",
          "upvote_count": "1"
        },
        {
          "id": 441973,
          "date": "Sun 31 Oct 2021 12:37",
          "username": "johnyc55",
          "content": "D.  <br>If interfaces created using aws-cli-> create-network-interface without option ->DeleteOnTermination, It will persist.<br><br>Also, Before you can delete a VPC, you must terminate any instances that are running in the VPC.  If you delete a VPC using the VPC console, it also deletes resources that are associated with the VPC, such as subnets, security groups, network ACLs, DHCP options sets, route tables, and Internet gateways.",
          "upvote_count": "4"
        },
        {
          "id": 381733,
          "date": "Fri 22 Oct 2021 01:20",
          "username": "kolwoh",
          "content": "VPC can be deleted with public subnet in it, so it can't be C",
          "upvote_count": "1"
        },
        {
          "id": 186122,
          "date": "Thu 07 Oct 2021 20:19",
          "username": "AlwaysLearning2020TerrenceC",
          "content": "C is also correct.Actually, C is incorrect due to there is no dependency in between. However, the subnet has a dependency on both the EC2 instance and Elastic Network Interface (not only generated by creating the EC2 instance but also any of the cloud-native services) before the removal.",
          "upvote_count": "23"
        },
        {
          "id": 224374,
          "date": "Sat 09 Oct 2021 21:43",
          "username": "TerrenceC",
          "content": "Actually, C is incorrect due to there is no dependency in between. However, the subnet has a dependency on both the EC2 instance and Elastic Network Interface (not only generated by creating the EC2 instance but also any of the cloud-native services) before the removal.",
          "upvote_count": "3"
        },
        {
          "id": 126054,
          "date": "Wed 29 Sep 2021 02:52",
          "username": "FreeparkFreeparkfcbflo",
          "content": "Isn’t it B?Sorry, A?No, why do you think so?<br>You can run an empty subnet without ec2 instances ...",
          "upvote_count": "111"
        },
        {
          "id": 126055,
          "date": "Mon 04 Oct 2021 23:15",
          "username": "Freeparkfcbflo",
          "content": "Sorry, A?No, why do you think so?<br>You can run an empty subnet without ec2 instances ...",
          "upvote_count": "11"
        },
        {
          "id": 144722,
          "date": "Thu 07 Oct 2021 11:15",
          "username": "fcbflo",
          "content": "No, why do you think so?<br>You can run an empty subnet without ec2 instances ...",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#344",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>When configuring your customer gateway to connect to your VPC, the________Association is established first between the virtual private gateway and customer gateway using the Pre-Shared Key as the authenticator.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#344",
          "answers": [
            {
              "choice": "<p>A. IPsec<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. BGP<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. IKE Security<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Tunnel<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 381721,
          "date": "Sun 03 Oct 2021 07:25",
          "username": "kolwoh",
          "content": "C is correct",
          "upvote_count": "2"
        },
        {
          "id": 82492,
          "date": "Mon 27 Sep 2021 04:36",
          "username": "Exam_boy",
          "content": "https://docs.aws.amazon.com/vpn/latest/s2svpn/your-cgw.html",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#345",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization is trying to setup a VPC with Auto Scaling. Which configuration steps below is not required to setup AWS VPC with Auto Scaling?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#345",
          "answers": [
            {
              "choice": "<p>A. Configure the Auto Scaling group with the VPC ID in which instances will be launched.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the Auto Scaling Launch configuration with multiple subnets of the VPC to enable the Multi AZ feature.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the Auto Scaling Launch configuration which does not allow assigning a public IP to instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the Auto Scaling Launch configuration with the VPC security group.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 69591,
          "date": "Fri 22 Oct 2021 19:28",
          "username": "Smart",
          "content": "The essence of the question is what settings are specified where. In Launch Config, you specify instance details (SGs, Userdata, etc.) - Not Subnets! That is specified, during the creation of AS Group.",
          "upvote_count": "6"
        },
        {
          "id": 650741,
          "date": "Tue 23 Aug 2022 12:55",
          "username": "elenium",
          "content": "Seems like C not required in any case? But multiple subnets REQUIRED in order TO enable the Multi AZ feature.",
          "upvote_count": "2"
        },
        {
          "id": 497319,
          "date": "Thu 09 Dec 2021 05:35",
          "username": "cldy",
          "content": "B.  Configure the Auto Scaling Launch configuration with multiple subnets of the VPC to enable the Multi AZ feature.",
          "upvote_count": "1"
        },
        {
          "id": 484096,
          "date": "Mon 22 Nov 2021 11:54",
          "username": "acloudguru",
          "content": "hope i can have such easy question in my exam",
          "upvote_count": "1"
        },
        {
          "id": 382431,
          "date": "Sat 30 Oct 2021 16:50",
          "username": "01037",
          "content": "C is not required either.<br>It is just recommended by AWS.",
          "upvote_count": "2"
        },
        {
          "id": 23899,
          "date": "Sat 16 Oct 2021 21:11",
          "username": "examacc",
          "content": "B is fine all other options are required",
          "upvote_count": "1"
        },
        {
          "id": 17603,
          "date": "Wed 22 Sep 2021 10:44",
          "username": "Warrenntan9",
          "content": "Surely if you want the multi az feature you need to use multiple subnets? If its only recommended to select the parameter which does not allow assigning a public IP to the instances. Doesn't that imply that it is optional? Answer should be C?B is optional since the question didn't mention anything about HA. ",
          "upvote_count": "13"
        },
        {
          "id": 29461,
          "date": "Sun 17 Oct 2021 06:48",
          "username": "tan9",
          "content": "B is optional since the question didn't mention anything about HA. ",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#346",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization is planning to host a Wordpress blog as well as joomla CMS on a single instance launched with VPC.  The organization wants to create separate domains for each application using Route 53. The organization may have about ten instances each with these two applications. While launching each instance, the organization configured two separate network interfaces (primary + secondary ENI) with their own Elastic IPs to the instance. The suggestion was to use a public IP from AWS instead of an Elastic IP as the number of elastic IPs allocation per region is restricted in the account.<br>What action will you recommend to the organization?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#346",
          "answers": [
            {
              "choice": "<p>A. Only Elastic IP can be used by requesting limit increase, since AWS does not assign a public IP to an instance with multiple ENIs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. AWS VPC does not attach a public IP to an ENI; so the only way is to use an Elastic IP.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. I agree with the suggestion but will prefer that the organization should use separate subnets with each ENI for different public IPs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. I agree with the suggestion and it is recommended to use a public IP from AWS since the organization is going to use DNS with Route 53.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 502048,
          "date": "Wed 15 Dec 2021 11:19",
          "username": "GeniusMikeLiuGeniusMikeLiu",
          "content": "which one is right?A is right. AWS cannot assign a public IP when there are two ENIs attached to a single instance. you can request for other Elastic IPs if you have not enough.",
          "upvote_count": "11"
        },
        {
          "id": 527530,
          "date": "Wed 19 Jan 2022 14:25",
          "username": "GeniusMikeLiu",
          "content": "A is right. AWS cannot assign a public IP when there are two ENIs attached to a single instance. you can request for other Elastic IPs if you have not enough.",
          "upvote_count": "1"
        },
        {
          "id": 377920,
          "date": "Sun 17 Oct 2021 22:43",
          "username": "Aline_H",
          "content": "duplicate with 123",
          "upvote_count": "1"
        },
        {
          "id": 43218,
          "date": "Mon 27 Sep 2021 05:51",
          "username": "Denis_H",
          "content": "FYI, find bellow the complete text for D:<br>\\\"I agree with the suggestion and it is recommended to use a public IP from AWS since the organization is going to use DNS with Route 53.\\\"",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#347",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user has created a VPC with public and private subnets. The VPC has CIDR 20.0.0.0/16. The private subnet uses CIDR 20.0.1.0/24 and the public subnet uses<br>CIDR 20.0.0.0/24. The user is planning to host a web server in the public subnet (port 80) and a DB server in the private subnet (port 3306). The user is configuring a security group of the NAT instance.<br>Which of the below mentioned entries is not required in NAT's security group for the database servers to connect to the Internet for software updates?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#347",
          "answers": [
            {
              "choice": "<p>A. For Outbound allow Destination: 0.0.0.0/0 on port 443<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. For Inbound allow Source: 20.0.1.0/24 on port 80<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. For Inbound allow Source: 20.0.0.0/24 on port 80<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. For Outbound allow Destination: 0.0.0.0/0 on port 80<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 498485,
          "date": "Fri 10 Dec 2021 10:33",
          "username": "cldy",
          "content": "C.  For Inbound allow Source: 20.0.0.0/24 on port 80",
          "upvote_count": "2"
        },
        {
          "id": 434584,
          "date": "Sun 31 Oct 2021 10:16",
          "username": "sergioandreslq",
          "content": "Which rule is not required!!!!<br>C correct: Reason: NAT instance is not used for inbound traffic from internet to reach public subnet, so, It is not required rule: \\\"Inbound allow Source: 20.0.0.0/24 on port 80\\\" because if there is a webserver on port 80, it will use another way for inbound traffic like EIP, ELB, CloudFront, API Gateway. <br><br>The other 3 are required:<br>A is required: DB instance in private subnet will send request to NAT instance from 20.0.0.0/24 to port 80 and port 443, so, the NAT instance should be allowed as inbound in NAT SG. <br>B & D are Required: Now NAT SG connects to internet (0.0.0.0) using 80/443 which is Outbound. Outbound allow Destination: 0.0.0.0/0 on port 80and Outbound allow Destination: 0.0.0.0/0 on port 443",
          "upvote_count": "3"
        },
        {
          "id": 278104,
          "date": "Sun 24 Oct 2021 23:46",
          "username": "aimar047",
          "content": "\\\"Which of the below mentioned entries is not required in NAT's security group for the database servers to connect to the Internet for software updates?\\\"<br>Again, is only for DB servers.. based on the given, all options are not required ,",
          "upvote_count": "1"
        },
        {
          "id": 245068,
          "date": "Sun 24 Oct 2021 00:56",
          "username": "MichaelHuangAline_H",
          "content": "Port 443 is confusingThat's why it is there. anyway 443 port is for HTTPS. doesn't make any sense in this question",
          "upvote_count": "11"
        },
        {
          "id": 377922,
          "date": "Sat 30 Oct 2021 13:33",
          "username": "Aline_H",
          "content": "That's why it is there. anyway 443 port is for HTTPS. doesn't make any sense in this question",
          "upvote_count": "1"
        },
        {
          "id": 233748,
          "date": "Sat 16 Oct 2021 16:52",
          "username": "newme",
          "content": "I understand C isn't necessary, but why ports 80 and 443?",
          "upvote_count": "2"
        },
        {
          "id": 170581,
          "date": "Mon 11 Oct 2021 04:51",
          "username": "Neive",
          "content": "C - The NAT should not have an entry for the public subnet CIDR.",
          "upvote_count": "2"
        },
        {
          "id": 126060,
          "date": "Sat 09 Oct 2021 19:35",
          "username": "Freepark",
          "content": "C<br>Implementing scenario 2 with a NAT instance",
          "upvote_count": "1"
        },
        {
          "id": 84798,
          "date": "Thu 07 Oct 2021 03:32",
          "username": "bilcat",
          "content": "Answer is C.  <br>NAT instance should accept traffic from the private subnet so as to redirect it to Internet. However it does nothing to do with the public subnet.",
          "upvote_count": "4"
        },
        {
          "id": 84024,
          "date": "Fri 01 Oct 2021 10:48",
          "username": "AmazonAu",
          "content": "Answer is B. ",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#348",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user has created a VPC with public and private subnets using the VPC wizard. Which of the below mentioned statements is true in this scenario?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#348",
          "answers": [
            {
              "choice": "<p>A. The user has to manually create a NAT instance<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The Amazon VPC will automatically create a NAT instance with the micro size only<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. VPC updates the main route table used with the private subnet, and creates a custom route table with a public subnet<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. VPC updates the main route table used with a public subnet, and creates a custom route table with a private subnet<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 29463,
          "date": "Thu 23 Sep 2021 01:18",
          "username": "tan9",
          "content": "While VPC wizard create NAT gateway instead of NAT instance by default nowaday. C is still valid if user choose \\\"Use a NAT instance instead\\\" in the NAT section.<br><br>See: https://docs.aws.amazon.com/en_pv/vpc/latest/userguide/VPC_Scenario2.html",
          "upvote_count": "8"
        },
        {
          "id": 714980,
          "date": "Thu 10 Nov 2022 07:46",
          "username": "janvandermerwer",
          "content": "C: - Update private subnet to point to NAT /0 --> NAT<br>--> Public subnet will then need a route out via an IGW or similar.",
          "upvote_count": "1"
        },
        {
          "id": 559643,
          "date": "Wed 02 Mar 2022 20:09",
          "username": "omishaaaaNathanvB99",
          "content": "Why not A? NAT has to be created manually, right?Yes but it's not something you really have to do. You can just choose not to create a NAT. The question doesn't state it's needed, ruling out A I think.",
          "upvote_count": "11"
        },
        {
          "id": 712228,
          "date": "Sun 06 Nov 2022 10:35",
          "username": "NathanvB99",
          "content": "Yes but it's not something you really have to do. You can just choose not to create a NAT. The question doesn't state it's needed, ruling out A I think.",
          "upvote_count": "1"
        },
        {
          "id": 494240,
          "date": "Sun 05 Dec 2021 11:50",
          "username": "cldy",
          "content": "C.  VPC updates the main route table used with the private subnet, and creates a custom route table with a public subnet",
          "upvote_count": "1"
        },
        {
          "id": 84805,
          "date": "Sun 03 Oct 2021 04:54",
          "username": "bilcatnewme",
          "content": "D.  VPC updates the main route table used with a public subnet, and creates a custom route table with a private subnet.Tried. It's C. ",
          "upvote_count": "11"
        },
        {
          "id": 233750,
          "date": "Tue 12 Oct 2021 10:21",
          "username": "newme",
          "content": "Tried. It's C. ",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#349",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user has created a VPC with two subnets: one public and one private. The user is planning to run the patch update for the instances in the private subnet.<br>How can the instances in the private subnet connect to the internet?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#349",
          "answers": [
            {
              "choice": "<p>A. The private subnet can never connect to the internet<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use NAT with an elastic IP<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the internet gateway with a private IP<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Allow outbound traffic in the security group for port 80 to allow internet updates<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 624488,
          "date": "Wed 29 Jun 2022 09:40",
          "username": "TechX",
          "content": "100% B",
          "upvote_count": "1"
        },
        {
          "id": 547747,
          "date": "Tue 15 Feb 2022 13:31",
          "username": "lifebegins",
          "content": "B is the answer: NAT Instance or Nat Gateway",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#350",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user has created a VPC with public and private subnets using the VPC Wizard. The VPC has CIDR 20.0.0.0/16. The private subnet uses CIDR 20.0.0.0/24.<br>Which of the below mentioned entries are required in the main route table to allow the instances in VPC to communicate with each other?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#350",
          "answers": [
            {
              "choice": "<p>A. Destination : 20.0.0.0/0 and Target : ALL<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Destination : 20.0.0.0/16 and Target : Local<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Destination : 20.0.0.0/24 and Target : Local<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Destination : 20.0.0.0/16 and Target : ALL<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 641900,
          "date": "Wed 03 Aug 2022 15:03",
          "username": "gondohwe",
          "content": "B makes sense coz if the VPC CIDR is 20.0.0./16 then to reach instances in the whole VPC,the route table points to the local route of 20.0.0.0/16 from the private subnet of 20.0.0.0/24",
          "upvote_count": "1"
        },
        {
          "id": 530548,
          "date": "Sun 23 Jan 2022 14:18",
          "username": "AnonymousJhb",
          "content": "Correct<br>https://docs.aws.amazon.com/vpc/latest/userguide/route-table-options.html#route-tables-vpc-peering",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#351",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You want to establish redundant VPN connections and customer gateways on your network by setting up a second VPN connection.<br>Which of the following will ensure that this functions correctly?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#351",
          "answers": [
            {
              "choice": "<p>A. The customer gateway IP address for the second VPN connection must be publicly accessible.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. The virtual gateway IP address for the second VPN connection must be publicly accessible.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The customer gateway IP address for the second VPN connection must use dynamic routes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The customer gateway IP address for the second VPN connection must be privately accessible and be the same public IP address that you are using for the first VPN connection.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 584888,
          "date": "Tue 12 Apr 2022 21:38",
          "username": "tgw",
          "content": "i'm sure they were meant \\\"dynamic protocols\\\" as apposed to \\\"dynamic routes\\\" in \\\"C\\\"",
          "upvote_count": "1"
        },
        {
          "id": 502513,
          "date": "Wed 15 Dec 2021 23:28",
          "username": "vbal",
          "content": "The customer gateway IP address for the second Site-to-Site VPN connection must be publicly accessible.",
          "upvote_count": "1"
        },
        {
          "id": 495908,
          "date": "Tue 07 Dec 2021 12:07",
          "username": "wahlbergusaomishaaaa",
          "content": "It is C. <br>Dynamic routing is a must to address \\\"guarantee that this works properly\\\" part in the question. <br>https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-redundant-connection.htmlSame doc, first point also mentions `The customer gateway IP address for the second Site-to-Site VPN connection must be publicly accessible.`",
          "upvote_count": "24"
        },
        {
          "id": 570840,
          "date": "Sat 19 Mar 2022 05:00",
          "username": "omishaaaa",
          "content": "Same doc, first point also mentions `The customer gateway IP address for the second Site-to-Site VPN connection must be publicly accessible.`",
          "upvote_count": "4"
        },
        {
          "id": 495103,
          "date": "Mon 06 Dec 2021 13:04",
          "username": "cldy",
          "content": "A.  The customer gateway IP address for the second VPN connection must be publicly accessible.",
          "upvote_count": "2"
        },
        {
          "id": 488850,
          "date": "Sun 28 Nov 2021 06:29",
          "username": "backfringe",
          "content": "I'd go with A<br>The customer gateway IP address for the second Site-to-Site VPN connection must be publicly accessible.",
          "upvote_count": "2"
        },
        {
          "id": 384509,
          "date": "Sun 17 Oct 2021 03:50",
          "username": "walkwolf3walkwolf3",
          "content": "A looks more correct, but it's not totally correct. If primary VPN connection is down, only AWS can initiate the secondary VPN connection. Commonly speaking, VPN connection should initiate from any of two ends.https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-redundant-connection.html",
          "upvote_count": "23"
        },
        {
          "id": 384512,
          "date": "Sun 31 Oct 2021 11:11",
          "username": "walkwolf3",
          "content": "https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-redundant-connection.html",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#352",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Someone is creating a VPC for their application hosting. He has created two private subnets in the same availability zone and created one subnet in a separate availability zone. He wants to make a High Availability system with an internal Elastic Load Balancer.<br>Which choice is true regarding internal ELBs in this scenario? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#352",
          "answers": [
            {
              "choice": "<p>A. Internal ELBs should only be launched within private subnets.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Amazon ELB service does not allow subnet selection; instead it will automatically select all the available subnets of the VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Internal ELBs can support only one subnet in each availability zone.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. An internal ELB can support all the subnets irrespective of their zones.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 499079,
          "date": "Sat 11 Dec 2021 04:47",
          "username": "challenger1",
          "content": "My Answer: A & C",
          "upvote_count": "2"
        },
        {
          "id": 450726,
          "date": "Thu 21 Oct 2021 03:26",
          "username": "moon2351",
          "content": "Answer is A&C",
          "upvote_count": "1"
        },
        {
          "id": 448639,
          "date": "Sun 17 Oct 2021 01:30",
          "username": "lifebegins",
          "content": "Answer is A & C, <br><br>D also possible only if you enable Cross-Zone Load Balancing<br><br>If cross-zone load balancing is enabled, each node is connected to each back-end instance, regardless of Availability Zone. Otherwise, each node is connected only to the instances that are in its Availability Zone.<br><br>https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-internal-load-balancers.html",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#353",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>To ensure failover capabilities on an elastic network interface (ENI), what should you use for incoming traffic?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#353",
          "answers": [
            {
              "choice": "<p>A. A Route53 A record<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. A secondary private IP<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. A secondary public IP<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. A secondary ENI<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 705748,
          "date": "Thu 27 Oct 2022 18:58",
          "username": "resnef",
          "content": "ok, it is B, but this question is terribly written. It is in regards of floating ip involving active/standby instances",
          "upvote_count": "1"
        },
        {
          "id": 643709,
          "date": "Sun 07 Aug 2022 13:37",
          "username": "ude",
          "content": "B.  <br>\\\"ensure failover capabilities, consider using a secondary private IPv4\\\"<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/scenarios-enis.html",
          "upvote_count": "1"
        },
        {
          "id": 581769,
          "date": "Wed 06 Apr 2022 13:07",
          "username": "zekesgbobsmith2000bobsmith2000",
          "content": "Correct Answer is B https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/scenarios-enis.htmlJudging from the link you sent is D. <br>All solutions mention two interfaces.Going through it second rime, I realised it's actually B<br>\\\"To ensure failover capabilities, consider using a secondary private IPv4 for incoming traffic on a network interface. In the event of an instance failure, you can move the interface and/or secondary private IPv4 address to a standby instance.\\\"",
          "upvote_count": "211"
        },
        {
          "id": 592582,
          "date": "Tue 26 Apr 2022 18:56",
          "username": "bobsmith2000bobsmith2000",
          "content": "Judging from the link you sent is D. <br>All solutions mention two interfaces.Going through it second rime, I realised it's actually B<br>\\\"To ensure failover capabilities, consider using a secondary private IPv4 for incoming traffic on a network interface. In the event of an instance failure, you can move the interface and/or secondary private IPv4 address to a standby instance.\\\"",
          "upvote_count": "11"
        },
        {
          "id": 609225,
          "date": "Mon 30 May 2022 15:41",
          "username": "bobsmith2000",
          "content": "Going through it second rime, I realised it's actually B<br>\\\"To ensure failover capabilities, consider using a secondary private IPv4 for incoming traffic on a network interface. In the event of an instance failure, you can move the interface and/or secondary private IPv4 address to a standby instance.\\\"",
          "upvote_count": "1"
        },
        {
          "id": 568957,
          "date": "Wed 16 Mar 2022 10:28",
          "username": "Serial_X25",
          "content": "For me it's letter D - Secondary ENI.<br>When we move the secondary ENI from one failed instance to a standby instance the ENI goes with its primary private IP, secondary IP, public IP, MAC, etc...<br>https://docs.amazonaws.cn/en_us/AWSEC2/latest/UserGuide/scenarios-enis.html",
          "upvote_count": "3"
        },
        {
          "id": 494245,
          "date": "Sun 05 Dec 2021 11:57",
          "username": "cldy",
          "content": "B.  A secondary private IP",
          "upvote_count": "1"
        },
        {
          "id": 412594,
          "date": "Thu 04 Nov 2021 10:11",
          "username": "mericov",
          "content": "To ensure failover capabilities, consider using a secondary private IPv4 for incoming traffic on a network interface. In the event of an instance failure, you can move the interface and/or secondary private IPv4 address to a standby instance.https://docs.amazonaws.cn/en_us/AWSEC2/latest/UserGuide/scenarios-enis.html",
          "upvote_count": "4"
        },
        {
          "id": 375194,
          "date": "Sat 30 Oct 2021 09:34",
          "username": "tekkart",
          "content": "plus the question states \\\"for incoming traffic\\\"",
          "upvote_count": "1"
        },
        {
          "id": 375187,
          "date": "Sun 24 Oct 2021 21:35",
          "username": "tekkart",
          "content": "For me should be answer A : a Route53 A Record. You have an ENI you do not know if the failover must cover a front end (public IP) or back end (private IP) instance to reattach the ENI to.An ENI by itself is not sufficient without any action or script, neither is a secondary ENI.Therefore an A record with the IP of this ENI would be a sufficient configuration to failover to it",
          "upvote_count": "2"
        },
        {
          "id": 367690,
          "date": "Sun 17 Oct 2021 23:46",
          "username": "victordun",
          "content": "B https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html",
          "upvote_count": "1"
        },
        {
          "id": 233768,
          "date": "Sat 02 Oct 2021 12:59",
          "username": "newmenewme01037",
          "content": "Why is D wrong?Understand now.<br>The question is asking \\\"To ensure failover capabilities on an elastic network interface (ENI)\\\"Thank you",
          "upvote_count": "121"
        },
        {
          "id": 233769,
          "date": "Thu 14 Oct 2021 21:06",
          "username": "newme01037",
          "content": "Understand now.<br>The question is asking \\\"To ensure failover capabilities on an elastic network interface (ENI)\\\"Thank you",
          "upvote_count": "21"
        },
        {
          "id": 382634,
          "date": "Mon 01 Nov 2021 11:34",
          "username": "01037",
          "content": "Thank you",
          "upvote_count": "1"
        },
        {
          "id": 86706,
          "date": "Thu 30 Sep 2021 23:02",
          "username": "Merlin1",
          "content": "Cant disconnect a primary ENI",
          "upvote_count": "3"
        },
        {
          "id": 69599,
          "date": "Mon 27 Sep 2021 08:44",
          "username": "Smart",
          "content": "I don't get this. ENI maintains Primary Private IPv4. Why need Secondary Private IPv4 for incoming traffic? Just detach and attach to Standby instance and have the incoming traffic use Primary.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#354",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization is setting up a highly scalable application using Elastic Beanstalk. The organization is using ELB and RDS with VPC.  The organization has public and private subnets within the cloud.<br>Which of the below mentioned configurations will not work in this scenario?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#354",
          "answers": [
            {
              "choice": "<p>A. To setup RDS in a private subnet and ELB in a public subnet.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The configuration must have public and private subnets in the same AZ.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. The configuration must have two private subnets in separate AZs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The EC2 instance should have a public IP assigned to it.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 531785,
          "date": "Tue 25 Jan 2022 03:04",
          "username": "RVivek",
          "content": "Answer B:<br>RDS requires a subnet group which contains at least two subnest from two diffrent AZ,.You need to do this even for Single-AZ deployments, just in case you want to convert them to Multi-AZ deployments at some point",
          "upvote_count": "5"
        },
        {
          "id": 711222,
          "date": "Fri 04 Nov 2022 15:44",
          "username": "Pigi_102",
          "content": "I think D is ricght. The question ask for scalable. If an EC2 has a public IP is not scalable.",
          "upvote_count": "1"
        },
        {
          "id": 664307,
          "date": "Fri 09 Sep 2022 08:38",
          "username": "welcomeYM",
          "content": "BBBBBBB",
          "upvote_count": "1"
        },
        {
          "id": 598226,
          "date": "Sat 07 May 2022 19:34",
          "username": "user0001",
          "content": "D, the question is , which one will not provide high availability , the first 3 , the do provide high availability , D do not",
          "upvote_count": "1"
        },
        {
          "id": 448656,
          "date": "Wed 03 Nov 2021 04:42",
          "username": "lifebeginsrb39",
          "content": "Answer Should be B:<br><br>For getting High Availability, You should put your Subnets in Diffrent Avaiality Zone. Here it is recommnded as same AZ. So this will not work for this configuration<br><br>https://docs.aws.amazon.com/AmazonECS/latest/developerguide/create-public-private-vpc.htmlnot sure about B - HA is achieved when several private+public subnets are distributed among more than one AZ, not when you have 1 subnet in one AZ and another subnet in a different AZ",
          "upvote_count": "41"
        },
        {
          "id": 499832,
          "date": "Sun 12 Dec 2021 07:58",
          "username": "rb39",
          "content": "not sure about B - HA is achieved when several private+public subnets are distributed among more than one AZ, not when you have 1 subnet in one AZ and another subnet in a different AZ",
          "upvote_count": "1"
        },
        {
          "id": 388059,
          "date": "Thu 14 Oct 2021 10:52",
          "username": "morp30us",
          "content": "A is correct",
          "upvote_count": "1"
        },
        {
          "id": 382644,
          "date": "Thu 07 Oct 2021 03:22",
          "username": "01037RVivek",
          "content": "I don’t think there is a correct answer.<br>All work.<br>A is not necessary, but recommended.<br>B is not necessary, maybe not even recommended.<br>C is not necessary, but recommended for high availability.<br>D is not necessary, and not recommended.B will not work. RDS requires a subnet group with at least two subnetsfrom two AZ (one from each)",
          "upvote_count": "11"
        },
        {
          "id": 537201,
          "date": "Mon 31 Jan 2022 16:24",
          "username": "RVivek",
          "content": "B will not work. RDS requires a subnet group with at least two subnetsfrom two AZ (one from each)",
          "upvote_count": "1"
        },
        {
          "id": 95711,
          "date": "Fri 24 Sep 2021 21:29",
          "username": "JAWS1600newmenewmenewme",
          "content": "Well D sounds ok. Because EB can work with Elastic IP ( routable to public) , dont have to have Public. <br> However B is not a bad either. We don't have to have two private subnets for RDS. RDS can be deployed in Single AZ, in one private Subnet.It has to be two when creating subnet groupIt doesn't have to be two PRIVATE subnets, public subnets also workCheck<br>https://aws.amazon.com/rds/faqs/<br>Q: Why does my additional backup storage cost more than allocated DB instance storage?",
          "upvote_count": "1111"
        },
        {
          "id": 233775,
          "date": "Mon 27 Sep 2021 20:38",
          "username": "newmenewme",
          "content": "It has to be two when creating subnet groupIt doesn't have to be two PRIVATE subnets, public subnets also work",
          "upvote_count": "11"
        },
        {
          "id": 233782,
          "date": "Fri 01 Oct 2021 23:48",
          "username": "newme",
          "content": "It doesn't have to be two PRIVATE subnets, public subnets also work",
          "upvote_count": "1"
        },
        {
          "id": 233781,
          "date": "Fri 01 Oct 2021 02:45",
          "username": "newme",
          "content": "Check<br>https://aws.amazon.com/rds/faqs/<br>Q: Why does my additional backup storage cost more than allocated DB instance storage?",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#355",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In DynamoDB, a projection is__________.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#355",
          "answers": [
            {
              "choice": "<p>A. systematic transformation of the latitudes and longitudes of the locations inside your table<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. importing data from your file to a table<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. exporting data from a table to your file<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. the set of attributes that is copied from a table into a secondary index<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 566214,
          "date": "Sat 12 Mar 2022 15:51",
          "username": "foxrj21",
          "content": "D is correct!",
          "upvote_count": "3"
        },
        {
          "id": 494099,
          "date": "Sun 05 Dec 2021 07:08",
          "username": "cldy",
          "content": "D.  the set of attributes that is copied from a table into a secondary index",
          "upvote_count": "2"
        },
        {
          "id": 439840,
          "date": "Sat 06 Nov 2021 11:36",
          "username": "Rabbit117",
          "content": "I think D is correct.<br>From the link below;<br>Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.<br>https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Projection.html",
          "upvote_count": "2"
        },
        {
          "id": 43263,
          "date": "Fri 15 Oct 2021 19:11",
          "username": "Denis_H",
          "content": "FYI, find bellow the updated link:<br>https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Projection.html",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#356",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which of the following is NOT true of the DynamoDB Console?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#356",
          "answers": [
            {
              "choice": "<p>A. It allows you to add local secondary indexes to existing tables.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. It allows you to query a table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. It allows you to set up alarms to monitor your table's capacity usage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. It allows you to view items stored in a tables, add, update, and delete items.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 21681,
          "date": "Sun 10 Oct 2021 18:54",
          "username": "pra276",
          "content": "Answer is A: . It allows you to add local secondary indexes to existing tables.<br>We cannot create local secondary indexes(LSI) for existing tables. LSI can only be created during the table creation.",
          "upvote_count": "9"
        },
        {
          "id": 686894,
          "date": "Wed 05 Oct 2022 14:59",
          "username": "astalavista1",
          "content": "Local secondary indexes can only be created on table creation.",
          "upvote_count": "1"
        },
        {
          "id": 635760,
          "date": "Sun 24 Jul 2022 00:14",
          "username": "hilft",
          "content": "I vote for A.  You can't add local secondary indexes to existing tables. Only upon creation",
          "upvote_count": "1"
        },
        {
          "id": 448662,
          "date": "Sun 17 Oct 2021 01:25",
          "username": "lifebegins",
          "content": "Answer is A. <br>Local secondary indexes on a table are created when the table is created. When you delete a table, any local secondary indexes on that table are also deleted.<br><br>Only Global Secondary Instance can be created after the table creation<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LSI.html#LSI.Creating",
          "upvote_count": "1"
        },
        {
          "id": 43266,
          "date": "Tue 12 Oct 2021 20:00",
          "username": "Denis_H",
          "content": "more information here: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/creating-alarms.html",
          "upvote_count": "1"
        },
        {
          "id": 19104,
          "date": "Wed 29 Sep 2021 12:54",
          "username": "skywalker",
          "content": "None of the answer are not wrong... <br><br>u can use the console to do the following in DynamoDB:<br><br>Monitor recent alerts, total capacity, service health, and the latest DynamoDB news on the DynamoDB dashboard.<br><br>Create, update, and delete tables. The capacity calculator provides estimates of how many capacity units to request based on the usage information you provide.<br><br>Manage streams.<br><br>View, add, update, and delete items that are stored in tables. Manage Time to Live (TTL) to define when items in a table expire so that they can be automatically deleted from the database.<br><br>Query and scan a table.<br><br>Set up and view alarms to monitor your table's capacity usage. View your table's top monitoring metrics on real-time graphs from CloudWatch.<br><br>Modify a table's provisioned capacity.<br><br>Create and delete global secondary indexes.<br><br>Create triggers to connect DynamoDB streams to AWS Lambda functions.<br><br>Apply tags to your resources to help organize and identify them.<br><br>Purchase reserved capacity.<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ConsoleDynamoDB. html",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#357",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>DynamoDB uses only as a transport protocol, not as a storage format.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#357",
          "answers": [
            {
              "choice": "<p>A. WDDX<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. XML<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. SGML<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. JSON<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 498599,
          "date": "Fri 10 Dec 2021 13:14",
          "username": "cldy",
          "content": "D.  JSON",
          "upvote_count": "1"
        },
        {
          "id": 448669,
          "date": "Tue 26 Oct 2021 05:00",
          "username": "lifebegins",
          "content": "Answer is D:<br><br>DynamoDB uses JSON only as a transport protocol, not as a storage format. The AWS SDKs use JSON to send data to DynamoDB, and DynamoDB responds with JSON. DynamoDB does not store data persistently in JSON format.<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.LowLevelAPI.html",
          "upvote_count": "1"
        },
        {
          "id": 233784,
          "date": "Fri 01 Oct 2021 00:50",
          "username": "newme",
          "content": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.LowLevelAPI.html",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#358",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In DynamoDB, which of the following allows you to set alarms when you reach a specified threshold for a metric?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#358",
          "answers": [
            {
              "choice": "<p>A. Alarm Signal<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. DynamoDB Analyzer<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. CloudWatch<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. DynamoDBALARM<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 494144,
          "date": "Sun 05 Dec 2021 08:49",
          "username": "cldy",
          "content": "C.  CloudWatch",
          "upvote_count": "2"
        },
        {
          "id": 321270,
          "date": "Sun 24 Oct 2021 23:30",
          "username": "ExtHo",
          "content": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/creating-alarms.html",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#359",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Is it possible to load data from Amazon DynamoDB into Amazon Redshift?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#359",
          "answers": [
            {
              "choice": "<p>A. No, you cannot load all the data from DynamoDB table to a Redshift table as it limited by size constraints.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. No<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. No, DynamoDB data types do not correspond directly with those of Amazon Redshift.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Yes<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 637643,
          "date": "Wed 27 Jul 2022 00:00",
          "username": "hilft",
          "content": "skip this. probably won't be in SAP exam",
          "upvote_count": "1"
        },
        {
          "id": 498699,
          "date": "Fri 10 Dec 2021 15:32",
          "username": "cldy",
          "content": "D.  Yes. possible to Load Data From DynamoDB Into Amazon Redshift",
          "upvote_count": "1"
        },
        {
          "id": 448671,
          "date": "Sat 30 Oct 2021 15:47",
          "username": "lifebegins",
          "content": "Answer should be D:<br><br>Yes, we can trasfer the data from Dynamod DB to redshift for Analysis<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/RedshiftforDynamoDB. html",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#360",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In regard to DynamoDB, when you create a table with a hash-and-range key.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#360",
          "answers": [
            {
              "choice": "<p>A. You must define one or more Local secondary indexes on that table<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. You must define one or more Global secondary indexes on that table<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. You can optionally define one or more secondary indexes on that table<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. You must define one or more secondary indexes on that table<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 494258,
          "date": "Sun 05 Dec 2021 12:19",
          "username": "cldy",
          "content": "C.  You can optionally define one or more secondary indexes on that table",
          "upvote_count": "2"
        },
        {
          "id": 448676,
          "date": "Fri 15 Oct 2021 16:47",
          "username": "lifebegins",
          "content": "Amazon DynamoDB provides fast access to items in a table by specifying primary key values. However, many applications might benefit from having one or more secondary (or alternate) keys available, to allow efficient access to data with attributes other than the primary key. To address this, you can create one or more secondary indexes on a table and issue Query or Scan requests against these indexes.",
          "upvote_count": "1"
        },
        {
          "id": 448675,
          "date": "Sun 10 Oct 2021 18:14",
          "username": "lifebegins",
          "content": "Answer: C<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SecondaryIndexes.html",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#361",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Someone has recommended a new client to you and you know he is into online gaming and you are almost certain he will want to set up an online gaming site which will require a database service that provides fast and predictable performance with seamless scalability.<br>Which of the following AWS databases would be best suited to an online gaming site?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#361",
          "answers": [
            {
              "choice": "<p>A. Amazon SimpleDB<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Amazon DynamoDB<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Amazon Redshift<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Amazon ElastiCache<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 627328,
          "date": "Tue 05 Jul 2022 09:40",
          "username": "TechX",
          "content": "always think to DynamoDB when it mention game",
          "upvote_count": "2"
        },
        {
          "id": 626434,
          "date": "Sun 03 Jul 2022 07:47",
          "username": "aandc",
          "content": "This one is to easy to a SAP level exam",
          "upvote_count": "1"
        },
        {
          "id": 586308,
          "date": "Fri 15 Apr 2022 13:11",
          "username": "tartarus23",
          "content": "Amazon DynamoDB is more scalable, globally available and performant for requirements such as online gaming websites.",
          "upvote_count": "1"
        },
        {
          "id": 448680,
          "date": "Tue 12 Oct 2021 20:04",
          "username": "lifebegins",
          "content": "Answer is B<br><br>https://aws.amazon.com/blogs/database/amazon-dynamodb-gaming-use-cases-and-design-patterns/",
          "upvote_count": "1"
        },
        {
          "id": 446830,
          "date": "Sun 10 Oct 2021 01:07",
          "username": "moon2351",
          "content": "Answer is B",
          "upvote_count": "1"
        },
        {
          "id": 439857,
          "date": "Sun 03 Oct 2021 16:14",
          "username": "Rabbit117",
          "content": "B is correct.<br>DynamoDB scales seemlessly with no down time.",
          "upvote_count": "1"
        },
        {
          "id": 233788,
          "date": "Fri 24 Sep 2021 00:49",
          "username": "newmeAline_H",
          "content": "Why are they good match?https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html<br>predictable + seamless + online game",
          "upvote_count": "11"
        },
        {
          "id": 410047,
          "date": "Sat 25 Sep 2021 23:04",
          "username": "Aline_H",
          "content": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html<br>predictable + seamless + online game",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#362",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In DynamoDB, \"The data is eventually consistent\" means that__________.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#362",
          "answers": [
            {
              "choice": "<p>A. a read request immediately after a write operation might not show the latest change.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. a read request immediately after a write operation shows the latest change.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. a write request immediately after a read operation might cause data loss.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. a read request immediately after a write operation might cause data loss.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 494166,
          "date": "Sun 05 Dec 2021 09:36",
          "username": "cldy",
          "content": "A.  a read request immediately after a write operation might not show the latest change.",
          "upvote_count": "3"
        },
        {
          "id": 479183,
          "date": "Tue 16 Nov 2021 06:07",
          "username": "acloudguru",
          "content": "this is not a SAP question it is a developer associate question!",
          "upvote_count": "3"
        },
        {
          "id": 448685,
          "date": "Mon 01 Nov 2021 13:23",
          "username": "lifebegins",
          "content": "Answer is A:<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html",
          "upvote_count": "3"
        },
        {
          "id": 446831,
          "date": "Sat 16 Oct 2021 14:24",
          "username": "moon2351",
          "content": "Answer is A",
          "upvote_count": "1"
        },
        {
          "id": 439858,
          "date": "Thu 30 Sep 2021 22:57",
          "username": "Rabbit117",
          "content": "A is correct.",
          "upvote_count": "1"
        },
        {
          "id": 400736,
          "date": "Wed 22 Sep 2021 08:37",
          "username": "Changwha",
          "content": "How long does it take to guarantee it.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#363",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>____________pricing offers significant savings over the normal price of DynamoDB provisioned throughput capacity.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#363",
          "answers": [
            {
              "choice": "<p>A. Discount Voucher<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Reserved Capacity<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Discount Service<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Reserved Point<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 534552,
          "date": "Fri 28 Jan 2022 09:50",
          "username": "HellGate",
          "content": "Seems very old question... no more pricing model this kind.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#364",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In DynamoDB, which of the following operations is not possible by the console?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#364",
          "answers": [
            {
              "choice": "<p>A. Updating an item<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Copying an item<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Blocking an item<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deleting an item<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 664320,
          "date": "Fri 09 Sep 2022 08:57",
          "username": "welcomeYM",
          "content": "CCCCCCC",
          "upvote_count": "1"
        },
        {
          "id": 495859,
          "date": "Tue 07 Dec 2021 11:04",
          "username": "wahlbergusa",
          "content": "According to this link it seems \\\"blocking\\\" is not supported. <br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ConsoleDynamoDB. html<br><br>\\\"View, add, update, and delete items that are stored in tables.\\\"",
          "upvote_count": "1"
        },
        {
          "id": 495047,
          "date": "Mon 06 Dec 2021 11:29",
          "username": "cldy",
          "content": "C.  Blocking an item",
          "upvote_count": "1"
        },
        {
          "id": 448694,
          "date": "Sun 07 Nov 2021 07:45",
          "username": "lifebegins",
          "content": "Answer: C",
          "upvote_count": "2"
        },
        {
          "id": 448693,
          "date": "Thu 21 Oct 2021 23:40",
          "username": "lifebegins",
          "content": "Answer : B",
          "upvote_count": "2"
        },
        {
          "id": 233791,
          "date": "Fri 08 Oct 2021 21:04",
          "username": "newmenewmeExtHo01037bobsmith2000",
          "content": "What does \\\"Blocking an item\\\" mean?Locking?Its block access to the DynamoDb ItemsDo you mean Fine-Grained Access Control?<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.htmlI suppose it has something to do with mutex or \\\"ConditionExpression\\\"",
          "upvote_count": "21121"
        },
        {
          "id": 233792,
          "date": "Sat 09 Oct 2021 18:53",
          "username": "newmeExtHo01037bobsmith2000",
          "content": "Locking?Its block access to the DynamoDb ItemsDo you mean Fine-Grained Access Control?<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.htmlI suppose it has something to do with mutex or \\\"ConditionExpression\\\"",
          "upvote_count": "1121"
        },
        {
          "id": 321288,
          "date": "Mon 11 Oct 2021 13:52",
          "username": "ExtHo01037bobsmith2000",
          "content": "Its block access to the DynamoDb ItemsDo you mean Fine-Grained Access Control?<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.htmlI suppose it has something to do with mutex or \\\"ConditionExpression\\\"",
          "upvote_count": "121"
        },
        {
          "id": 382661,
          "date": "Thu 21 Oct 2021 05:27",
          "username": "01037bobsmith2000",
          "content": "Do you mean Fine-Grained Access Control?<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.htmlI suppose it has something to do with mutex or \\\"ConditionExpression\\\"",
          "upvote_count": "21"
        },
        {
          "id": 599073,
          "date": "Mon 09 May 2022 15:45",
          "username": "bobsmith2000",
          "content": "I suppose it has something to do with mutex or \\\"ConditionExpression\\\"",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#365",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In order for a table write to succeed, the provisioned throughput settings for the table and global secondary indexes, in DynamoDB, must have__________; otherwise, the write to the table will be throttled.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#365",
          "answers": [
            {
              "choice": "<p>A. enough write capacity to accommodate the write<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. no additional write cost for the index<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. 100 bytes of overhead per index item<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. the size less than or equal to 1 KB<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 580863,
          "date": "Mon 04 Apr 2022 19:29",
          "username": "roka_ua",
          "content": "Vote A",
          "upvote_count": "2"
        },
        {
          "id": 448712,
          "date": "Fri 22 Oct 2021 17:28",
          "username": "lifebegins",
          "content": "Answer: A<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.html",
          "upvote_count": "2"
        },
        {
          "id": 321292,
          "date": "Tue 19 Oct 2021 05:47",
          "username": "ExtHo",
          "content": "For a table write to succeed, the provisioned throughput settings for the table and all of its global secondary indexes must have enough write capacity to accommodate the write. Otherwise, the write to the table is throttled.",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#366",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In DynamoDB, to get a detailed listing of secondary indexes on a table, you can use the ______ action.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#366",
          "answers": [
            {
              "choice": "<p>A. BatchGetItem<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. TableName<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. DescribeTable<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. GetItem<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 561415,
          "date": "Sat 05 Mar 2022 13:17",
          "username": "niau",
          "content": "C.  DescribeTable",
          "upvote_count": "1"
        },
        {
          "id": 494218,
          "date": "Sun 05 Dec 2021 11:18",
          "username": "cldy",
          "content": "C.  DescribeTable",
          "upvote_count": "4"
        },
        {
          "id": 477988,
          "date": "Sun 14 Nov 2021 08:33",
          "username": "gingerbytes",
          "content": "C. To get a detailed listing of secondary indexes on a table, use the DescribeTable operation. DescribeTable returns the name, storage size, and item counts for every secondary index on the table. These values are not updated in real time, but they are refreshed approximately every six hours.",
          "upvote_count": "2"
        },
        {
          "id": 307049,
          "date": "Thu 30 Sep 2021 07:30",
          "username": "JAGUARCODESreenikvJAGUARCODE",
          "content": "Answer is A. <br>In DynamoDB, DescribeTable returns information about the table, including the current status of the table, when it was created, the primary key schema, and any indexes on the table.<br>http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SecondaryIndexes.htmlDescribe Table is given as answer for option C. The answer is \\\"DescribeTable\\\"!!",
          "upvote_count": "112"
        },
        {
          "id": 444300,
          "date": "Fri 29 Oct 2021 18:49",
          "username": "Sreenikv",
          "content": "Describe Table is given as answer for option C. ",
          "upvote_count": "1"
        },
        {
          "id": 307051,
          "date": "Mon 11 Oct 2021 03:34",
          "username": "JAGUARCODE",
          "content": "The answer is \\\"DescribeTable\\\"!!",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#367",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In regard to DynamoDB, for which one of the following parameters does Amazon not charge you?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#367",
          "answers": [
            {
              "choice": "<p>A. Storage cost<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. I/O usage within the same Region<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Cost per provisioned read units<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Cost per provisioned write units<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 634344,
          "date": "Thu 21 Jul 2022 06:13",
          "username": "brianjian",
          "content": "Feels like I am pricing architect professional.",
          "upvote_count": "3"
        },
        {
          "id": 563534,
          "date": "Tue 08 Mar 2022 21:53",
          "username": "Serial_X25",
          "content": "Letter B:<br>https://aws.amazon.com/dynamodb/pricing/on-demand/<br>Data transfer in and out refers to transfer into and out of DynamoDB.  DynamoDB does not charge for inbound data transfer, and it does not charge for data transferred between DynamoDB and other AWS services within the same AWS Region (in other words, $0.00 per GB). Data transferred across AWS Regions (such as between DynamoDB in the US East [N. Virginia] Region and Amazon EC2 in the EU [Ireland] Region) is charged on both sides of the transfer.",
          "upvote_count": "3"
        },
        {
          "id": 519393,
          "date": "Sat 08 Jan 2022 10:02",
          "username": "AnonymousJhb",
          "content": "Correct",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#368",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Complete this statement: \"When you load your table directly from an Amazon_____ table, you have the option to control the amount of provisioned throughput you consume.\"</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#368",
          "answers": [
            {
              "choice": "<p>A. RDS<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. DataPipeline<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. DynamoDB<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. S3<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 636803,
          "date": "Mon 25 Jul 2022 17:54",
          "username": "hilft",
          "content": "keyword 'throughput' - > dynamoDB",
          "upvote_count": "3"
        },
        {
          "id": 446835,
          "date": "Tue 02 Nov 2021 09:09",
          "username": "moon2351",
          "content": "Answer is C",
          "upvote_count": "2"
        },
        {
          "id": 400773,
          "date": "Mon 04 Oct 2021 06:19",
          "username": "Changwha",
          "content": "To avoid using excessive amounts of provisioned read throughput, do not load data from Amazon DynamoDB tables that are in production.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#369",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which of the following does Amazon DynamoDB perform?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#369",
          "answers": [
            {
              "choice": "<p>A. Atomic increment or decrement on scalar values<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Neither increment nor decrement operations<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Only increment on vector values<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Only atomic decrement operations<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 623887,
          "date": "Tue 28 Jun 2022 12:03",
          "username": "TechX",
          "content": "Answer: A<br>Explanation:<br>Amazon DynamoDB allows atomic increment and decrement operations on scalar values. http://aws.amazon.com/dynamodb/faqs/",
          "upvote_count": "1"
        },
        {
          "id": 321321,
          "date": "Tue 26 Oct 2021 16:31",
          "username": "ExtHo",
          "content": "Question 10<br>Yes, Amazon DynamoDB support both increment and decrement atomic operations.<br>https://jayendrapatil.com/aws-dynamodb/",
          "upvote_count": "1"
        },
        {
          "id": 309528,
          "date": "Thu 14 Oct 2021 15:03",
          "username": "ar2000",
          "content": "DynamoDB supports atomic counters, where you use the update method to increment or decrement the value of an existing attribute without interfering with other write requests. (All write requests are applied in the order in which they are received.)",
          "upvote_count": "1"
        },
        {
          "id": 233799,
          "date": "Mon 20 Sep 2021 03:44",
          "username": "newme01037",
          "content": "Can't find any referenceshttps://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html#WorkingWithItems.AtomicCounters",
          "upvote_count": "11"
        },
        {
          "id": 383365,
          "date": "Thu 04 Nov 2021 20:47",
          "username": "01037",
          "content": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html#WorkingWithItems.AtomicCounters",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#370",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A Provisioned IOPS volume must be at least __________ GB in size:</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#370",
          "answers": [
            {
              "choice": "<p>A. 20<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. 10<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. 50<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. 1<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 23249,
          "date": "Wed 22 Sep 2021 10:27",
          "username": "Scunningham99",
          "content": "Provisions iops needs to be a minimum of 4gb https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html",
          "upvote_count": "11"
        },
        {
          "id": 577736,
          "date": "Tue 29 Mar 2022 18:48",
          "username": "jj22222",
          "content": "Is this question on the test?",
          "upvote_count": "1"
        },
        {
          "id": 448741,
          "date": "Fri 05 Nov 2021 16:51",
          "username": "lifebegins",
          "content": "Outdated Question:<br><br>Actually it is 4GiB",
          "upvote_count": "1"
        },
        {
          "id": 383370,
          "date": "Fri 05 Nov 2021 07:52",
          "username": "01037",
          "content": "Ignore this question",
          "upvote_count": "4"
        },
        {
          "id": 375239,
          "date": "Mon 25 Oct 2021 10:21",
          "username": "tekkart",
          "content": "If the question is about RDS PIOPS, the answer should be A - 20 GiB, for some distribution of SQL Server (the rest, 100 GiB)<br>Source : https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html",
          "upvote_count": "1"
        },
        {
          "id": 233802,
          "date": "Thu 14 Oct 2021 18:13",
          "username": "newme",
          "content": "RDS<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS<br><br>EBS<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html",
          "upvote_count": "1"
        },
        {
          "id": 218167,
          "date": "Wed 06 Oct 2021 02:33",
          "username": "smartassX",
          "content": "1GB is min for General Purpose SSD",
          "upvote_count": "1"
        },
        {
          "id": 191517,
          "date": "Tue 05 Oct 2021 09:43",
          "username": "MIU",
          "content": "So there is no option to answer? Is this question out of date?",
          "upvote_count": "2"
        },
        {
          "id": 32214,
          "date": "Wed 29 Sep 2021 10:09",
          "username": "cinopi",
          "content": "4 GB for EBS io1,<br>100GB for RDS - Provisione IOPS",
          "upvote_count": "2"
        },
        {
          "id": 11204,
          "date": "Wed 22 Sep 2021 06:51",
          "username": "dpvnme",
          "content": "100 GB",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#371",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user has launched two EBS backed EC2 instances in the US-East-1a region. The user wants to change the zone of one of the instances. How can the user change it?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#371",
          "answers": [
            {
              "choice": "<p>A. It is not possible to change the zone of an instance after it is launched<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. From the AWS EC2 console, select the Actions - > Change zones and specify the new zone<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The zone can only be modified using the AWS CLI<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Stop one of the instances and change the availability zone<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 496568,
          "date": "Wed 08 Dec 2021 06:55",
          "username": "cldy",
          "content": "A.  It is not possible to change the zone of an instance after it is launched",
          "upvote_count": "2"
        },
        {
          "id": 448743,
          "date": "Fri 29 Oct 2021 19:39",
          "username": "lifebegins",
          "content": "It's not possible to move an existing instance to another subnet, Availability Zone, or VPC.  Instead, you can manually migrate the instance by creating a new Amazon Machine Image (AMI) from the source instance. Then, launch a new instance using the new AMI in the desired subnet, Availability Zone, or VPC.  Finally, you can reassign any Elastic IP addresses from the source instance to the new instance.",
          "upvote_count": "2"
        },
        {
          "id": 448742,
          "date": "Sat 02 Oct 2021 05:59",
          "username": "lifebegins",
          "content": "Answer : A<br>https://aws.amazon.com/premiumsupport/knowledge-center/move-ec2-instance/",
          "upvote_count": "1"
        },
        {
          "id": 400797,
          "date": "Mon 20 Sep 2021 00:41",
          "username": "Changwha",
          "content": "To migrate an instance to another Availability Zone<br>1. Creating an AMI from the original instance<br>2. Launching an instance in the new Availability Zone<br>3. Updating the configuration of the new instance",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#372",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In Amazon Elastic Compute Cloud, you can specify storage volumes in addition to the root device volume when you create an AMI or when launching a new instance using______.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#372",
          "answers": [
            {
              "choice": "<p>A. block device mapping<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. object mapping<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. batch storage mapping<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. datacenter mapping<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 614393,
          "date": "Fri 10 Jun 2022 09:51",
          "username": "foxrj21",
          "content": "its a A",
          "upvote_count": "1"
        },
        {
          "id": 494142,
          "date": "Sun 05 Dec 2021 08:47",
          "username": "cldy",
          "content": "A.  block device mapping",
          "upvote_count": "3"
        },
        {
          "id": 448763,
          "date": "Sun 17 Oct 2021 07:46",
          "username": "lifebeginsacloudguru",
          "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.htmlA is the answer,thanks",
          "upvote_count": "21"
        },
        {
          "id": 480674,
          "date": "Thu 18 Nov 2021 13:10",
          "username": "acloudguru",
          "content": "A is the answer,thanks",
          "upvote_count": "1"
        },
        {
          "id": 386184,
          "date": "Sun 26 Sep 2021 05:09",
          "username": "cixiver",
          "content": "A is correct",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#373",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You create an Amazon Elastic File System (EFS) file system and mount targets for the file system in your Virtual Private Cloud (VPC). Identify the initial permissions you can grant to the group root of your file system.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#373",
          "answers": [
            {
              "choice": "<p>A. write-execute-modify<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. read-execute<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. read-write-modify<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. read-write<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 386186,
          "date": "Thu 14 Oct 2021 07:33",
          "username": "cixiver",
          "content": "The initial permissions mode allows:<br>read-write-execute permissions to the owner root<br>read-execute permissions to the group root<br>read-execute permissions to others",
          "upvote_count": "9"
        },
        {
          "id": 496812,
          "date": "Wed 08 Dec 2021 13:28",
          "username": "cldy",
          "content": "B.  read-execute",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#374",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You want to mount an Amazon EFS file system on an Amazon EC2 instance using DNS names. Which of the following generic form of a mount target's DNS name must you use to mount the file system?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#374",
          "answers": [
            {
              "choice": "<p>A. availability-zone.file-system-id.efs.aws-region.amazonaws.com<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. efs-system-id.availability-zone.file-aws-region.amazonaws.com<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. $file-system-id.$availability-zone.$efs.aws-region.$amazonaws.com<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. #aws-region.#availability-zone.#file-system-id.#efs.#amazonaws.com<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 636860,
          "date": "Mon 25 Jul 2022 19:31",
          "username": "hilft",
          "content": "A. <br>Super specific question... I will memorize this",
          "upvote_count": "1"
        },
        {
          "id": 580407,
          "date": "Sun 03 Apr 2022 20:12",
          "username": "ravisar",
          "content": "Answer is A.  The question is what is \\\"Generic DNS Name\\\"<br><br>Mounting on EC2 with a DNS name:<br>File system DNS (file-system-id.efs.aws-region.amazonaws.com)<br>OR<br>Mount Target DNS(availability-zone.file-system-id.efs.aws-region.amazonaws.com)<br>Refer - https://docs.aws.amazon.com/efs/latest/ug/mounting-fs-mount-cmd-dns-name.html",
          "upvote_count": "1"
        },
        {
          "id": 526146,
          "date": "Mon 17 Jan 2022 22:59",
          "username": "weurseuk",
          "content": "file-system-id.efs.aws-region.amazonaws.com",
          "upvote_count": "2"
        },
        {
          "id": 321536,
          "date": "Thu 04 Nov 2021 00:54",
          "username": "ExtHo",
          "content": "Answer is A <br>Here<br>https://docs.aws.amazon.com/efs/latest/ug/mounting-fs-mount-cmd-dns-name.html<br><br>Mount target DNS name – In December 2016, we introduced file system DNS names. We continue to provide a DNS name for each Availability Zone mount target for backward compatibility. The generic form of a mount target DNS name is as follows.<br><br>availability-zone.file-system-id.efs.aws-region.amazonaws.com",
          "upvote_count": "2"
        },
        {
          "id": 218161,
          "date": "Mon 11 Oct 2021 22:22",
          "username": "smartassX",
          "content": "DNS for EFS: file-system-id.efs.aws-region.amazonaws.com",
          "upvote_count": "1"
        },
        {
          "id": 148113,
          "date": "Sat 25 Sep 2021 23:34",
          "username": "sco_murad",
          "content": "https://docs.aws.amazon.com/efs/latest/ug/mounting-fs-mount-cmd-dns-name.html",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#375",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user is creating a Provisioned IOPS volume. What is the maximum ratio the user should configure between Provisioned IOPS and the volume size?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#375",
          "answers": [
            {
              "choice": "<p>A. 30 to 1<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. 50 to 1<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. 10 to 1<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. 20 to 1<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 375248,
          "date": "Wed 22 Sep 2021 19:23",
          "username": "tekkart01037",
          "content": "Today, the maximum ratio available is 500:1 for io2 block express<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.htmlYes, outdated question",
          "upvote_count": "52"
        },
        {
          "id": 383381,
          "date": "Thu 04 Nov 2021 22:14",
          "username": "01037",
          "content": "Yes, outdated question",
          "upvote_count": "2"
        },
        {
          "id": 494312,
          "date": "Sun 05 Dec 2021 13:11",
          "username": "cldy",
          "content": "B.  50 to 1",
          "upvote_count": "1"
        },
        {
          "id": 375264,
          "date": "Tue 26 Oct 2021 05:25",
          "username": "tekkart",
          "content": "The ratio is 3:1 for EBS gp <br>and for EBS sc1 or st1, the ratio IOPS:size is not used, <br>the preferred ratio is throughput:size with throughput in MiB/s.<br>st1 : 40(MiB/s)/TB baseline, 250 (MiB/s)/TB burst<br>sc1 : 12(MiB/s)/TB baseline, 80 (MiB/s)/TB burst<br>I have not tested it but with these information the compared throughput of a 100 GiB EBS volume WOULD BE: <br>io1 : 100 MiB/s for 5000 IOPS and 16 KB blocks (because linear scaling until 500 MiB/s and 32 000 IOPS or non Nitro EC2, 1000 MiB/s and 64 000 IOPS)<br>io1 : 500 MiB/s for 5000 IOPS and 256 KB blocks (ceiling reached from 2000 IOPS on)<br>gp2 : 250 MiB/s for 300 IOPS or 500 MiB/s if you burst it to 2000 IOPS whatever block size<br>st1 : 4 MiB/s on baseline ratio, 25 MiB/s on burst ratio<br>sc1 : 1,2 MiB/s on baseline ratio, 80 MiB/s on burst ratio",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#376",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your Application is not highly available, and your on-premises server cannot access the mount target because the Availability Zone (AZ) in which the mount target exists is unavailable.<br>Which of the following actions is recommended?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#376",
          "answers": [
            {
              "choice": "<p>A. The application must implement the checkpoint logic and recreate the mount target.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The application must implement the shutdown logic and delete the mount target in the AZ.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The application must implement the delete logic and connect to a different mount target in the same AZ.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The application must implement the restart logic and connect to a mount target in a different AZ.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 375268,
          "date": "Mon 27 Sep 2021 23:03",
          "username": "tekkarttekkart",
          "content": "https://docs.aws.amazon.com/efs/latest/ug/efs-ug.pdfto remove I did not see Newme's link",
          "upvote_count": "11"
        },
        {
          "id": 375270,
          "date": "Sat 09 Oct 2021 02:46",
          "username": "tekkart",
          "content": "to remove I did not see Newme's link",
          "upvote_count": "1"
        },
        {
          "id": 233816,
          "date": "Sat 25 Sep 2021 15:38",
          "username": "newmenewme01037Clandestine60TechX",
          "content": "Not quite understand the question.https://docs.aws.amazon.com/efs/latest/ug/performance-onpremises.htmlYes, according to this, it is D. <br>But how could we know the question is about EFS（笑）You know because of this statement \\\"the mount target due to the mount target's Availability Zone (AZ) \\\"I think this ismore easy to get. The full question is:<br><br>I think this is the full question Your Application is not highly available, and your on-premises server cannot access the mount target because the Availability Zone (AZ) in which the mount target exists is unavailable. Which of the following actions is recommended?<br>A.  The application must implement the checkpoint logic and recreate the mount target.<br>B.  The application must implement the shutdown logic and delete the mount target in the AZ.<br>C.  The application must implement the delete logic and connect to a different mount target in the same AZ.<br>D.  The application must implement the restart logic and connect to a mount target in a different AZ.",
          "upvote_count": "22111"
        },
        {
          "id": 233817,
          "date": "Mon 27 Sep 2021 15:55",
          "username": "newme01037Clandestine60",
          "content": "https://docs.aws.amazon.com/efs/latest/ug/performance-onpremises.htmlYes, according to this, it is D. <br>But how could we know the question is about EFS（笑）You know because of this statement \\\"the mount target due to the mount target's Availability Zone (AZ) \\\"",
          "upvote_count": "211"
        },
        {
          "id": 383388,
          "date": "Tue 02 Nov 2021 14:04",
          "username": "01037Clandestine60",
          "content": "Yes, according to this, it is D. <br>But how could we know the question is about EFS（笑）You know because of this statement \\\"the mount target due to the mount target's Availability Zone (AZ) \\\"",
          "upvote_count": "11"
        },
        {
          "id": 528435,
          "date": "Thu 20 Jan 2022 14:36",
          "username": "Clandestine60",
          "content": "You know because of this statement \\\"the mount target due to the mount target's Availability Zone (AZ) \\\"",
          "upvote_count": "1"
        },
        {
          "id": 624444,
          "date": "Wed 29 Jun 2022 07:36",
          "username": "TechX",
          "content": "I think this ismore easy to get. The full question is:<br><br>I think this is the full question Your Application is not highly available, and your on-premises server cannot access the mount target because the Availability Zone (AZ) in which the mount target exists is unavailable. Which of the following actions is recommended?<br>A.  The application must implement the checkpoint logic and recreate the mount target.<br>B.  The application must implement the shutdown logic and delete the mount target in the AZ.<br>C.  The application must implement the delete logic and connect to a different mount target in the same AZ.<br>D.  The application must implement the restart logic and connect to a mount target in a different AZ.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#377",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which of the following Amazon RDS storage types is ideal for applications with light or burst I/O requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#377",
          "answers": [
            {
              "choice": "<p>A. Both magnetic and Provisioned IOPS storage<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Magnetic storage<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Provisioned IOPS storage<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. None of these<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 637014,
          "date": "Tue 26 Jul 2022 02:20",
          "username": "hilft",
          "content": "gp2. I think it's D. ",
          "upvote_count": "1"
        },
        {
          "id": 624695,
          "date": "Wed 29 Jun 2022 16:10",
          "username": "kronomor",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SettingUp.html<br><br>\\\"Magnetic storage offers cost-effective storage that is ideal for applications with light or burst I/O requirements. General purpose, SSD-backed storage, also called gp2, can provide faster access than disk-based storage. Provisioned IOPS storage is designed to meet the needs of I/O-intensive workloads, particularly database workloads, which are sensitive to storage performance and consistency in random access I/O throughput. For more information on Amazon RDS storage, see Amazon RDS DB instance storage.\\\"",
          "upvote_count": "2"
        },
        {
          "id": 582471,
          "date": "Thu 07 Apr 2022 15:36",
          "username": "tartarus23",
          "content": "D.  None of these.<br>Should be General Purpose (SSD) because Magnetic storage is no anymore recommended as per AWS.",
          "upvote_count": "2"
        },
        {
          "id": 561910,
          "date": "Sun 06 Mar 2022 10:47",
          "username": "Alvindo",
          "content": "should be b, go to [ https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SettingUp.html ] ctrl + f and type in i/o and you should see the paragraph giving you the full answer",
          "upvote_count": "2"
        },
        {
          "id": 561435,
          "date": "Sat 05 Mar 2022 14:23",
          "username": "Ni_yotNi_yot",
          "content": "C.  Magnetic storage offers cost-effective storage that is ideal for applications with light or burst I/O requirements. General purpose, SSD-backed storage, also called gp2, can provide faster access than disk-based storage. Provisioned IOPS storage is designed to meet the needs of I/O-intensive workloads, particularly database workloads, which are sensitive to storage performance and consistency in random access I/O throughput. For more information on Amazon RDS storage,should be B.  my bad",
          "upvote_count": "11"
        },
        {
          "id": 674476,
          "date": "Tue 20 Sep 2022 21:48",
          "username": "Ni_yot",
          "content": "should be B.  my bad",
          "upvote_count": "1"
        },
        {
          "id": 540696,
          "date": "Sat 05 Feb 2022 00:29",
          "username": "HellGate",
          "content": "Answer is C - Provisioned IOPS storage",
          "upvote_count": "2"
        },
        {
          "id": 447305,
          "date": "Tue 02 Nov 2021 11:44",
          "username": "nodogoshi",
          "content": "D.  Magnetic is not suitable for light or burst I/O requirements. It's for archive purpose.",
          "upvote_count": "1"
        },
        {
          "id": 396895,
          "date": "Tue 02 Nov 2021 03:20",
          "username": "Pb55",
          "content": "Magnetic – Amazon RDS also supports magnetic storage for backward compatibility. We recommend that you use General Purpose SSD or Provisioned IOPS for any new storage needs. The maximum amount of storage allowed for DB instances on magnetic storage is less than that of the other storage types. For more information, see Magnetic storage.<br>Therefore D.  Question is out of date.",
          "upvote_count": "1"
        },
        {
          "id": 375272,
          "date": "Wed 27 Oct 2021 21:57",
          "username": "tekkart",
          "content": "Yes D, for gp2",
          "upvote_count": "1"
        },
        {
          "id": 363154,
          "date": "Sat 23 Oct 2021 07:05",
          "username": "Skdbc",
          "content": "I am not sure how we can say magnetic. on AWS documentation they recommend not using magnetic for new storage needs. We recommend that you use General Purpose SSD or Provisioned IOPS SSD for any new storage needs. I would say its General purpose SSD so D is the answer",
          "upvote_count": "1"
        },
        {
          "id": 233820,
          "date": "Sun 17 Oct 2021 10:42",
          "username": "newmenewmeExtHo",
          "content": "Can't find any official AWS documents to support B. Found it<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SettingUp.htmlB !!!",
          "upvote_count": "278"
        },
        {
          "id": 233821,
          "date": "Thu 21 Oct 2021 13:24",
          "username": "newmeExtHo",
          "content": "Found it<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SettingUp.htmlB !!!",
          "upvote_count": "78"
        },
        {
          "id": 321540,
          "date": "Thu 21 Oct 2021 22:59",
          "username": "ExtHo",
          "content": "B !!!",
          "upvote_count": "8"
        },
        {
          "id": 176981,
          "date": "Fri 15 Oct 2021 07:50",
          "username": "Krish812003",
          "content": "The answer is Magnetic Storage. Please refer to https://jayendrapatil.com/aws-rds-storage/<br>Magnetic storage, also called standard storage, offers cost-effective storage that is ideal for applications with light or burst I/O requirements.",
          "upvote_count": "4"
        },
        {
          "id": 164581,
          "date": "Fri 08 Oct 2021 00:03",
          "username": "jelongparkYecine11y",
          "content": "D.  it should be General Purpose storage, no magneticProvisioned IOPS. <br>https://aws.amazon.com/ko/blogs/database/understanding-burst-vs-baseline-performance-with-amazon-rds-and-gp2/an extract: To understand burst mode, you must be aware that every gp2 volume regardless of size starts with 5.4 million I/O credits at 3000 IOPS. This means that even for very small volumes, you start with a high-performing volume. <br>=>This is ideal for “bursty” workloads, such as daily reporting and recurring extract, transform, and load (ETL) jobs. It is also good for workloads that don’t require high-sustained IOPS.",
          "upvote_count": "41"
        },
        {
          "id": 527634,
          "date": "Wed 19 Jan 2022 15:57",
          "username": "Yecine11y",
          "content": "an extract: To understand burst mode, you must be aware that every gp2 volume regardless of size starts with 5.4 million I/O credits at 3000 IOPS. This means that even for very small volumes, you start with a high-performing volume. <br>=>This is ideal for “bursty” workloads, such as daily reporting and recurring extract, transform, and load (ETL) jobs. It is also good for workloads that don’t require high-sustained IOPS.",
          "upvote_count": "1"
        },
        {
          "id": 162440,
          "date": "Wed 22 Sep 2021 18:23",
          "username": "sam_1975Phat",
          "content": "Should be D, magnetic doesn;t support burst I/O<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.htmlI think B.  Magnetic",
          "upvote_count": "11"
        },
        {
          "id": 163697,
          "date": "Fri 01 Oct 2021 22:42",
          "username": "Phat",
          "content": "I think B.  Magnetic",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#378",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>When I/O performance is more important than fault tolerance, which of the following configurations should be used?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#378",
          "answers": [
            {
              "choice": "<p>A. SPAN 10<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. RAID 1<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. RAID 0<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. NFS 1<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 594071,
          "date": "Thu 28 Apr 2022 23:46",
          "username": "jj22222",
          "content": "c is right",
          "upvote_count": "2"
        },
        {
          "id": 494106,
          "date": "Sun 05 Dec 2021 07:10",
          "username": "cldy",
          "content": "C.  RAID 0",
          "upvote_count": "2"
        },
        {
          "id": 448787,
          "date": "Fri 05 Nov 2021 04:18",
          "username": "lifebegins",
          "content": "Answer is C:<br>https://en.wikipedia.org/wiki/Standard_RAID_levels<br><br>RAID 0 is primarily used in applications that require high performance and are able to tolerate lower reliability,",
          "upvote_count": "3"
        },
        {
          "id": 296721,
          "date": "Sat 25 Sep 2021 05:40",
          "username": "vid_25",
          "content": "C<br>https://docs.amazonaws.cn/en_us/AWSEC2/latest/WindowsGuide/raid-config.html",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#379",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Amazon Elastic File System (EFS) provides information about the space used for an object by using the space _ used attribute of the Network File System Version<br>4.1 (NFSv4.1). The attribute includes the object's current metered data size and not the metadata size. Which of the following utilities will you use to measure the amount of disk that is used of a file?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#379",
          "answers": [
            {
              "choice": "<p>A. blkid utility<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. du utility<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. sfdisk utility<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. pydf utility<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 543170,
          "date": "Tue 08 Feb 2022 16:47",
          "username": "jj22222",
          "content": "B, its du",
          "upvote_count": "1"
        },
        {
          "id": 513993,
          "date": "Fri 31 Dec 2021 10:35",
          "username": "cldy",
          "content": "B: du and stat.",
          "upvote_count": "1"
        },
        {
          "id": 363251,
          "date": "Sat 16 Oct 2021 10:48",
          "username": "Skdbc",
          "content": "B du and stat <br>https://docs.aws.amazon.com/efs/latest/ug/metered-sizes.html",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#380",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You have custom Network File System (NFS) client settings for your Amazon Elastic File System (EFS). It takes up to three seconds for an Amazon Elastic<br>Compute Cloud (EC2) instance to see a write operation performed on a file system from another Amazon EC2 instance.<br>Which of the following actions should you take to solve the custom NFS settings from causing delays in the write operation?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#380",
          "answers": [
            {
              "choice": "<p>A. Unmount and remount the file system with the noac option to disable attribute caching.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Reduce the number of active users that have files open simultaneously on the instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Verify that the IP address of the specified mount target is valid.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Run the write operation from a different user ID on the same Amazon EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 561172,
          "date": "Sat 05 Mar 2022 05:20",
          "username": "pal40sg",
          "content": "https://docs.aws.amazon.com/efs/latest/ug/troubleshooting-efs-general.html",
          "upvote_count": "1"
        },
        {
          "id": 544301,
          "date": "Thu 10 Feb 2022 05:39",
          "username": "cloudude",
          "content": "A<br>https://docs.aws.amazon.com/efs/latest/ug/troubleshooting-efs-general.html",
          "upvote_count": "1"
        },
        {
          "id": 485313,
          "date": "Tue 23 Nov 2021 19:29",
          "username": "ryu10_09",
          "content": "it is A.  i changed my answer<br>because of this: Unmount and remount the file system with the noac option to disable attribute caching.",
          "upvote_count": "3"
        },
        {
          "id": 485311,
          "date": "Tue 23 Nov 2021 19:27",
          "username": "ryu10_09",
          "content": "I believe it is D : Run the write operation from a different user ID on the same Amazon EC2 instance.<br>https://docs.aws.amazon.com/efs/latest/ug/troubleshooting-efs-general.html",
          "upvote_count": "1"
        },
        {
          "id": 88370,
          "date": "Sun 10 Oct 2021 06:43",
          "username": "Merlin1",
          "content": "https://docs.aws.amazon.com/efs/latest/ug/troubleshooting-efs-general.html",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#381",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which of the following rules must be added to a mount target security group to access Amazon Elastic File System (EFS) from an on-premises server?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#381",
          "answers": [
            {
              "choice": "<p>A. Configure an NFS proxy between Amazon EFS and the on-premises server to route traffic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up a Point-To-Point Tunneling Protocol Server (PPTP) to allow secure connection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Permit secure traffic to the Kerberos port 88 from the on-premises server.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Allow inbound traffic to the Network File System (NFS) port (2049) from the on-premises server.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 499008,
          "date": "Sat 11 Dec 2021 00:42",
          "username": "challenger1",
          "content": "My Answer: D",
          "upvote_count": "1"
        },
        {
          "id": 480553,
          "date": "Thu 18 Nov 2021 10:21",
          "username": "ryu10_09",
          "content": "D is your choice",
          "upvote_count": "1"
        },
        {
          "id": 334728,
          "date": "Fri 01 Oct 2021 15:40",
          "username": "Kelvin",
          "content": "D is correct",
          "upvote_count": "1"
        },
        {
          "id": 24137,
          "date": "Fri 01 Oct 2021 01:31",
          "username": "2g",
          "content": "answer: D",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#382",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which of the following is true of Amazon EBS encryption keys?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#382",
          "answers": [
            {
              "choice": "<p>A. Amazon EBS encryption uses the Customer Master Key (CMK) to create an AWS Key Management Service (AWS KMS) master key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Amazon EBS encryption uses the EBS Magnetic key to create an AWS Key Management Service (AWS KMS) master key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Amazon EBS encryption uses the EBS Magnetic key to create a Customer Master Key (CMK).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Amazon EBS encryption uses the AWS Key Management Service (AWS KMS) master key to create a Customer Master Key (CMK).<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 588246,
          "date": "Tue 19 Apr 2022 17:02",
          "username": "Alexey79",
          "content": "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html<br>“<br>AWS KMS is replacing the term customer master key (CMK) with AWS KMS key<br>…<br>You create KMS keys in AWS KMS.<br>“",
          "upvote_count": "2"
        },
        {
          "id": 561444,
          "date": "Sat 05 Mar 2022 14:45",
          "username": "Ni_yot",
          "content": "D is correct.as per ar2000",
          "upvote_count": "2"
        },
        {
          "id": 321549,
          "date": "Wed 20 Oct 2021 23:33",
          "username": "ExtHo",
          "content": "Dhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html",
          "upvote_count": "2"
        },
        {
          "id": 311217,
          "date": "Sat 09 Oct 2021 03:28",
          "username": "ar2000",
          "content": "CMKs are created in AWS KMS",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#383",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user is creating a snapshot of an EBS volume. Which of the below statements is incorrect in relation to the creation of an EBS snapshot?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#383",
          "answers": [
            {
              "choice": "<p>A. Its incremental<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. It is a point in time backup of the EBS volume<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. It can be used to create an AMI<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. It is stored in the same AZ as the volume<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 648481,
          "date": "Thu 18 Aug 2022 16:33",
          "username": "MBO80",
          "content": "D is the answer.",
          "upvote_count": "1"
        },
        {
          "id": 581626,
          "date": "Wed 06 Apr 2022 08:11",
          "username": "Hasitha99",
          "content": "The answer is D . Now you can copy EBS snapshots to different regions as well.<br>Ref: https://aws.amazon.com/blogs/aws/ebs-snapshot-copy/",
          "upvote_count": "2"
        },
        {
          "id": 494294,
          "date": "Sun 05 Dec 2021 12:59",
          "username": "cldy",
          "content": "D.  It is stored in the same AZ as the volume",
          "upvote_count": "1"
        },
        {
          "id": 451844,
          "date": "Wed 03 Nov 2021 01:48",
          "username": "kirrim",
          "content": "A is correct, snapshots are definitely incremental<br>B is correct, a snapshot is a point-in-time backup of the EBS volume<br>C is correct, you must use a snapshot with an AMI image.If you don't have a snapshot already, one will be created while creating the AMI (Note, you cannot reference a source snapshot when creating a Windows AMI image, that only works with Linux.Windows AMIs must be created from a running instance.However, the process of creating a Windows AMI still creates a snapshot of the running Windows instance's root volume and any other EBS volumes that are attached to the instance at the time.https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/Creating_EBSbacked_WinAMI.html#process-creating-a-windows-ami-ebs )<br>D is incorrect.The EBS volume that was used to create the snapshot exists only in a specific AZ.But the snapshot is replicated across multiple AZs within the region for durability purposes, and can be used to generate a new EBS volume in any AZ within that region.<br>https://docs.aws.amazon.com/whitepapers/latest/aws-storage-services-overview/durability-and-availability-3.html",
          "upvote_count": "4"
        },
        {
          "id": 362427,
          "date": "Wed 20 Oct 2021 09:18",
          "username": "Radhaghosh",
          "content": "EBS Snapshot stored in S3 bucket, but you can't access. So it will not be always on the same AZ. That is the only wrong.<br>Answer D",
          "upvote_count": "4"
        },
        {
          "id": 334729,
          "date": "Fri 15 Oct 2021 14:07",
          "username": "Kelvin",
          "content": "D is the answer. The statement is wrong.",
          "upvote_count": "1"
        },
        {
          "id": 203095,
          "date": "Sun 10 Oct 2021 18:51",
          "username": "MIU",
          "content": "Which of the below statements is INCORRECT?<br><br>So it is C. ",
          "upvote_count": "1"
        },
        {
          "id": 69614,
          "date": "Fri 08 Oct 2021 15:58",
          "username": "Smart",
          "content": "C is only true for Linux Instances - Not Windows",
          "upvote_count": "1"
        },
        {
          "id": 24169,
          "date": "Tue 28 Sep 2021 22:25",
          "username": "Rockeye",
          "content": "Answer D is correct.",
          "upvote_count": "4"
        },
        {
          "id": 24139,
          "date": "Wed 22 Sep 2021 06:37",
          "username": "2g",
          "content": "answer: B",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#384",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user is running a critical batch process which runs for 1 hour and 50 mins every day at a fixed time. Which of the below mentioned options is the right instance type and costing model in this case if the user performs the same task for the whole year?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#384",
          "answers": [
            {
              "choice": "<p>A. Instance store backed instance with spot instance pricing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. EBS backed instance with standard reserved upfront instance pricing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. EBS backed scheduled reserved instance with partial instance pricing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. EBS backed instance with on-demand instance pricing.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 53336,
          "date": "Tue 12 Oct 2021 17:05",
          "username": "Jshuen",
          "content": "C may not be the good choice, because from the link, it says <br><br>The minimum required utilization is 1,200 hours per year.<br><br>means need to use at least 3.3hr per day, but actually batch just need to run around 2hr, we have to pay extra hours if we use scheduled reserved instance.<br>So, D seems a better choice",
          "upvote_count": "6"
        },
        {
          "id": 447309,
          "date": "Sun 07 Nov 2021 16:51",
          "username": "nodogoshi",
          "content": "D.  <br>C is not available now. <br>https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/ec2-scheduled-instances.html",
          "upvote_count": "2"
        },
        {
          "id": 362430,
          "date": "Fri 29 Oct 2021 18:40",
          "username": "Radhaghosh",
          "content": "Scheduled reserved are no longer available it became On-Demand capacity reserve. So Option D <br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-scheduled-instances.html",
          "upvote_count": "3"
        },
        {
          "id": 289961,
          "date": "Fri 29 Oct 2021 06:29",
          "username": "Mansur",
          "content": "Answer D<br>Option C is incorrect. AWS announced \\\"We do not have any capacity for purchasing Scheduled Reserved Instances or any plans to make it available in the future\\\"<br>To reserve capacity, use On-Demand Capacity Reservations instead.<br>Ref:https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-scheduled-instances.html",
          "upvote_count": "1"
        },
        {
          "id": 140902,
          "date": "Thu 28 Oct 2021 12:37",
          "username": "DuyPhan",
          "content": "1 hour 50 min = 1.83 hr/day<br>1 year: 1.83 * 365 = 669 hr/year --> cannot purchase scheduled RI (min scheduled RI is 1200 hr/year)<br>--> D",
          "upvote_count": "2"
        },
        {
          "id": 124651,
          "date": "Wed 20 Oct 2021 04:17",
          "username": "manoj101manoj101",
          "content": "C:<br>Scheduled Reserved Instances (Scheduled Instances) enable you to purchase capacity reservations that recur on a daily, weekly, or monthly basis, with a specified start time and duration, for a one-year term. You reserve the capacity in advance, so that you know it is available when you need it. You pay for the time that the instances are scheduled, even if you do not use them.<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-scheduled-instances.html<br><br>Scheduled Instances are a good choice for workloads that do not run continuously, but do run on a regular schedule. For example, you can use Scheduled Instances for an application that runs during business hours or for batch processing that runs at the end of the week.It is D as minimum required utilization is 1,200 hours per year doe Scheduled Instances",
          "upvote_count": "22"
        },
        {
          "id": 125291,
          "date": "Sun 24 Oct 2021 23:11",
          "username": "manoj101",
          "content": "It is D as minimum required utilization is 1,200 hours per year doe Scheduled Instances",
          "upvote_count": "2"
        },
        {
          "id": 104091,
          "date": "Wed 13 Oct 2021 16:10",
          "username": "NKnab",
          "content": "D is the correct choice. there is no such thing as ' partial instance pricing'",
          "upvote_count": "1"
        },
        {
          "id": 43321,
          "date": "Fri 08 Oct 2021 15:57",
          "username": "Denis_H",
          "content": "Updated link: <br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-scheduled-instances.html",
          "upvote_count": "3"
        },
        {
          "id": 41530,
          "date": "Thu 07 Oct 2021 07:01",
          "username": "kanisuka",
          "content": "C is correct",
          "upvote_count": "2"
        },
        {
          "id": 41500,
          "date": "Fri 01 Oct 2021 06:05",
          "username": "CloudFloater",
          "content": "going for D as suggested.<br>It runs only for less than 8 percent of the year; therefore on-demand will be cheaper than reserved on an annual basis;cannot use spot because it is critical.",
          "upvote_count": "2"
        },
        {
          "id": 36057,
          "date": "Tue 21 Sep 2021 21:07",
          "username": "KatiePerry",
          "content": "Should be C",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#385",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user has created a launch configuration for Auto Scaling where CloudWatch detailed monitoring is disabled. The user wants to now enable detailed monitoring.<br>How can the user achieve this?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#385",
          "answers": [
            {
              "choice": "<p>A. Update the Launch config with CLI to set InstanceMonitoringDisabled = false<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The user should change the Auto Scaling group from the AWS console to enable detailed monitoring<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new Launch Config with detail monitoring enabled and update the Auto Scaling group<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the Launch config with CLI to set InstanceMonitoring.Enabled = true<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 46126,
          "date": "Tue 21 Sep 2021 17:22",
          "username": "ReggieR2Neivefeddo",
          "content": "You cannot change a Launch Config (LC), so you will need to create a new one.As per my understanding Launch Config can be updated; Launch template cannot be.It is the other way around ;)",
          "upvote_count": "1611"
        },
        {
          "id": 170892,
          "date": "Thu 14 Oct 2021 13:31",
          "username": "Neivefeddo",
          "content": "As per my understanding Launch Config can be updated; Launch template cannot be.It is the other way around ;)",
          "upvote_count": "11"
        },
        {
          "id": 513230,
          "date": "Thu 30 Dec 2021 11:15",
          "username": "feddo",
          "content": "It is the other way around ;)",
          "upvote_count": "1"
        },
        {
          "id": 362432,
          "date": "Sat 06 Nov 2021 08:42",
          "username": "Radhaghosh",
          "content": "Answer C<br>Launch Configuration can't be updated/modified.",
          "upvote_count": "1"
        },
        {
          "id": 289343,
          "date": "Fri 05 Nov 2021 08:38",
          "username": "Kian1",
          "content": "going with C",
          "upvote_count": "1"
        },
        {
          "id": 281164,
          "date": "Sun 31 Oct 2021 12:42",
          "username": "Ebi",
          "content": "Answer is C",
          "upvote_count": "1"
        },
        {
          "id": 244556,
          "date": "Tue 26 Oct 2021 06:25",
          "username": "happpieee",
          "content": "C.  New launch config - change the type of monitoring enabled on new EC2 instances, update the launch template or update the Auto Scaling group to use a new launch configuration. <br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/enable-as-instance-metrics.html",
          "upvote_count": "1"
        },
        {
          "id": 242198,
          "date": "Sun 24 Oct 2021 08:38",
          "username": "gookseang",
          "content": "C for sure ~~",
          "upvote_count": "1"
        },
        {
          "id": 241799,
          "date": "Sun 24 Oct 2021 07:00",
          "username": "T14102020",
          "content": "Correct is C",
          "upvote_count": "1"
        },
        {
          "id": 231199,
          "date": "Thu 21 Oct 2021 15:03",
          "username": "petebear55",
          "content": "i'll go with C. . but this is an example of the tricky questions AWS gives .. as really in Run time or during routine Admin .. one should really be able to do D ...",
          "upvote_count": "1"
        },
        {
          "id": 226776,
          "date": "Wed 20 Oct 2021 22:35",
          "username": "jackdryan",
          "content": "I'll go with C",
          "upvote_count": "1"
        },
        {
          "id": 206770,
          "date": "Tue 19 Oct 2021 15:38",
          "username": "Bulti",
          "content": "Cuz the right answer",
          "upvote_count": "1"
        },
        {
          "id": 134066,
          "date": "Fri 01 Oct 2021 22:52",
          "username": "NikkyDicky",
          "content": "C for sure",
          "upvote_count": "1"
        },
        {
          "id": 133502,
          "date": "Wed 29 Sep 2021 22:51",
          "username": "noisonnoiton",
          "content": "go with C",
          "upvote_count": "1"
        },
        {
          "id": 124866,
          "date": "Tue 21 Sep 2021 17:58",
          "username": "ar2000",
          "content": "C.  https://docs.aws.amazon.com/autoscaling/ec2/userguide/change-launch-config.html",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#386",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user is sending a custom metric to CloudWatch. If the call to the CloudWatch APIs has different dimensions, but the same metric name, how will CloudWatch treat all the requests?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#386",
          "answers": [
            {
              "choice": "<p>A. It will reject the request as there cannot be a separate dimension for a single metric.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. It will group all the calls into a single call.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. It will treat each unique combination of dimensions as a separate metric.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. It will overwrite the previous dimension data with the new dimension data.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 596017,
          "date": "Mon 02 May 2022 13:41",
          "username": "tartarus23hilft",
          "content": "Dimension combinations<br>CloudWatch treats each unique combination of dimensions as a separate metric, even if the metrics have the same metric name.<br><br>Reference:<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#MetricExcellent. I go C",
          "upvote_count": "31"
        },
        {
          "id": 636888,
          "date": "Mon 25 Jul 2022 20:24",
          "username": "hilft",
          "content": "Excellent. I go C",
          "upvote_count": "1"
        },
        {
          "id": 364975,
          "date": "Mon 04 Oct 2021 08:19",
          "username": "XAvenger",
          "content": "C. <br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Dimension<br>CloudWatch treats each unique combination of dimensions as a separate metric, even if the metrics have the same metric name.",
          "upvote_count": "3"
        },
        {
          "id": 261717,
          "date": "Tue 28 Sep 2021 13:25",
          "username": "snegha",
          "content": "CloudWatch treats each unique combination of dimensions as a separate metric, even if the metrics have the same metric name.",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#387",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>What is the maximum number of data points for an HTTP data request that a user can include in PutMetricRequest in the CloudWatch?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#387",
          "answers": [
            {
              "choice": "<p>A. 30<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. 50<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. 10<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. 20<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 509993,
          "date": "Mon 27 Dec 2021 04:45",
          "username": "cakriwut",
          "content": "D.  20 data points<br>20 different metrics, 150 values per metric<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricData.html",
          "upvote_count": "2"
        },
        {
          "id": 495079,
          "date": "Mon 06 Dec 2021 12:20",
          "username": "cldy",
          "content": "D.  20 data points",
          "upvote_count": "1"
        },
        {
          "id": 375303,
          "date": "Sun 07 Nov 2021 06:44",
          "username": "tekkart",
          "content": "PutMetricData request<br>40 KB for HTTP POST requests. PutMetricData can handle 150 transactions per second (TPS), which is the maximum number of operation requests you can make per second without being throttled.<br>You can request a quota increase<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_limits.html",
          "upvote_count": "1"
        },
        {
          "id": 345727,
          "date": "Sat 02 Oct 2021 03:25",
          "username": "bororo",
          "content": "I think there is an error in the question and answer <br>Each PutMetricData request is limited to 40 KB in size for HTTP POST requests. Each request is also limited to no more than 20 different metrics. <br>You can publish either individual data points in the Value field, or arrays of values and the number of times each value occurred during the period by using the Values and Counts fields in the MetricDatum structure. Using the Values and Counts method enables you to publish up to 150 values per metric with one PutMetricData request, and supports retrieving percentile statistics on this data. <br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricData.html",
          "upvote_count": "2"
        },
        {
          "id": 322403,
          "date": "Sat 25 Sep 2021 23:11",
          "username": "alisyech",
          "content": "sure for D",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#388",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You have set up a huge amount of network infrastructure in AWS and you now need to think about monitoring all of this. You decide CloudWatch will best fit your needs but you are unsure of the pricing structure and the limitations of CloudWatch.<br>Which of the following statements is TRUE in relation to the limitations of CloudWatch?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#388",
          "answers": [
            {
              "choice": "<p>A. You get 10 CloudWatch metrics, 10 alarms, 1,000,000 API requests, and 1,000 Amazon SNS email notifications per customer per month for free.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. You get 100 CloudWatch metrics, 100 alarms, 10,000,000 API requests, and 10,000 Amazon SNS email notifications per customer per month for free.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. You get 10 CloudWatch metrics, 10 alarms, 1,000 API requests, and 100 Amazon SNS email notifications per customer per month for free.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. You get 100 CloudWatch metrics, 100 alarms, 1,000,000 API requests, and 1,000 Amazon SNS email notifications per customer per month for free.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 561177,
          "date": "Sat 05 Mar 2022 05:33",
          "username": "GreenTick",
          "content": "stupid question, why should Solution Architect remember numbersand limits, while things could change in the future.",
          "upvote_count": "14"
        },
        {
          "id": 494372,
          "date": "Sun 05 Dec 2021 14:36",
          "username": "cldy",
          "content": "A.  You get 10 CloudWatch metrics, 10 alarms, 1,000,000 API requests, and 1,000 Amazon SNS email notifications per customer per month for free.",
          "upvote_count": "1"
        },
        {
          "id": 451852,
          "date": "Wed 03 Nov 2021 06:57",
          "username": "kirrim",
          "content": "A:<br><br>https://aws.amazon.com/cloudwatch/pricing/<br>Free Tier:<br>10 Detailed Monitoring Metrics (at 1-minute frequency)<br>10 Alarm metrics<br>1 million API requests<br><br>https://aws.amazon.com/sns/pricing/<br>Free Tier:<br>Email 1,000 notifications",
          "upvote_count": "1"
        },
        {
          "id": 364982,
          "date": "Mon 04 Oct 2021 05:29",
          "username": "XAvenger",
          "content": "A. <br>https://aws.amazon.com/cloudwatch/pricing/<br>10 Custom Metrics and 10 Alarms<br>1,000,000 API Requests",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#389",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user is trying to send custom metrics to CloudWatch using the PutMetricData APIs. Which of the below mentioned points should the user needs to take care while sending the data to CloudWatch?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#389",
          "answers": [
            {
              "choice": "<p>A. The size of a request is limited to 8KB for HTTP GET requests and 40KB for HTTP POST requests<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. The size of a request is limited to 16KB for HTTP GET requests and 80KB for HTTP POST requests<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The size of a request is limited to 128KB for HTTP GET requests and 64KB for HTTP POST requests<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The size of a request is limited to 40KB for HTTP GET requests and 8KB for HTTP POST requests<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 70842,
          "date": "Sun 17 Oct 2021 05:05",
          "username": "netmrt",
          "content": "Answer A<br>https://docs.aws.amazon.com/sdkfornet/latest/apidocs/items/MCloudWatchICloudWatchPutMetricDataPutMetricDataRequestNET45.html",
          "upvote_count": "5"
        },
        {
          "id": 495816,
          "date": "Tue 07 Dec 2021 10:19",
          "username": "cldy",
          "content": "A.  The size of a request is limited to 8KB for HTTP GET requests and 40KB for HTTP POST requests",
          "upvote_count": "2"
        },
        {
          "id": 364984,
          "date": "Sun 17 Oct 2021 19:00",
          "username": "XAvenger",
          "content": "A.  The size of a request is limited to 8KB for HTTP GET requests and 40KB for HTTP POST requests",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#390",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You set up your first Lambda function and want to set up some Cloudwatch metrics to monitor your function. Which of the following Lambda metrics can<br>Cloudwatch monitor?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#390",
          "answers": [
            {
              "choice": "<p>A. Total requests only<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Status Check Failed, total requests, and error rates<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Total requests and CPU utilization<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Total invocations, errors, duration, and throttles<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 451858,
          "date": "Fri 01 Oct 2021 17:38",
          "username": "kirrim",
          "content": "D:<br><br>https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics.html<br><br>- Invocation metrics<br>- Invocations<br>- Errors<br>- DeadLetterErrors<br>- DestinationDeliveryFailures<br>- Throttles<br>- ProvisionedConcurrencyInvocations<br>- ProvisionedConcurrencySpilloverInvocations<br><br>- Performance metrics<br>- Duration<br>- PostRuntimeExtensionsDuration<br>- IteratorAge<br><br>- Concurrency metrics<br>- ConcurrentExecutions<br>- ProvisionedConcurrentExecutions<br>- ProvisionedConcurrencyUtilization<br>- UnreservedConcurrentExecutions",
          "upvote_count": "5"
        },
        {
          "id": 362437,
          "date": "Wed 22 Sep 2021 02:33",
          "username": "Radhaghosh",
          "content": "Agreed. Answer D",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#391",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>How many metrics are supported by CloudWatch for Auto Scaling?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#391",
          "answers": [
            {
              "choice": "<p>A. 7 metrics and 5 dimension<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. 5 metrics and 1 dimension<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. 1 metric and 5 dimensions<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. 8 metrics and 1 dimension<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 14791,
          "date": "Sat 09 Oct 2021 22:36",
          "username": "DJTau",
          "content": "D<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-monitoring.html<br>GroupMinSize<br>GroupMaxSize<br>GroupDesiredCapacity<br>GroupInServiceInstances<br>GroupPendingInstances<br>GroupStandbyInstances<br>GroupTerminatingInstances<br>GroupTotalInstances",
          "upvote_count": "16"
        },
        {
          "id": 669889,
          "date": "Thu 15 Sep 2022 14:04",
          "username": "jujumomma",
          "content": "D 8 Metrics & 1 Dimension<br>https://docs.aws.amazon.com/ko_kr/autoscaling/ec2/userguide/ec2-auto-scaling-cloudwatch-monitoring.html#available-cloudwatch-metrics",
          "upvote_count": "1"
        },
        {
          "id": 635761,
          "date": "Sun 24 Jul 2022 00:16",
          "username": "hilft",
          "content": "D. <br>8 Metrics. Definitely not a question for a professional exam.",
          "upvote_count": "3"
        },
        {
          "id": 409321,
          "date": "Mon 25 Oct 2021 02:50",
          "username": "runtheworld",
          "content": "The metrics are available at 1-minute granularity at no additional charge, but you must enable them.",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#392",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user has enabled detailed CloudWatch monitoring with the AWS Simple Notification Service. Which of the below mentioned statements helps the user understand detailed monitoring better?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#392",
          "answers": [
            {
              "choice": "<p>A. SNS cannot provide data every minute<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. SNS will send data every minute after configuration<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. There is no need to enable since SNS provides data every minute</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. AWS CloudWatch does not support monitoring for SNS<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 345739,
          "date": "Sat 09 Oct 2021 12:17",
          "username": "bororoAnonymousJhb",
          "content": "C.  There is no need to enable since SNS provides data every minute <br>\\\"The metrics you configure with CloudWatch for your Amazon SNS topics are automatically collected and pushed to CloudWatch at 1-minute intervals. \\\"<br>There is no need to enable detailed monitoringArticle here https://docs.aws.amazon.com/sns/latest/dg/sns-monitoring-using-cloudwatch.html",
          "upvote_count": "191"
        },
        {
          "id": 534813,
          "date": "Fri 28 Jan 2022 16:43",
          "username": "AnonymousJhb",
          "content": "Article here https://docs.aws.amazon.com/sns/latest/dg/sns-monitoring-using-cloudwatch.html",
          "upvote_count": "1"
        },
        {
          "id": 397319,
          "date": "Wed 27 Oct 2021 04:19",
          "username": "Shran",
          "content": "The answer should be C as There is no action needed on your part to begin taking advantage of Amazon CloudWatch metrics with 1-minute resolution. This feature is automatically available for all existing and new Amazon SNS topics at no additional cost in all AWS regions.",
          "upvote_count": "7"
        },
        {
          "id": 669901,
          "date": "Thu 15 Sep 2022 14:20",
          "username": "jujumomma",
          "content": "C<br>\\\"Amazon Simple Notification Service (Amazon SNS) now publishes metrics at 1-minute resolution to Amazon CloudWatch, providing granular monitoring for Amazon SNS standard and FIFO topics. Previously, Amazon SNS published metrics to Amazon CloudWatch in 5-minute resolution.\\\"<br>https://aws.amazon.com/about-aws/whats-new/2021/01/amazon-sns-now-supports-1-minute-cloudwatch-metrics/?nc1=h_ls",
          "upvote_count": "1"
        },
        {
          "id": 653219,
          "date": "Mon 29 Aug 2022 02:30",
          "username": "epomatti",
          "content": "Correct: C.  There is no need to enable since SNS provides data every minute",
          "upvote_count": "1"
        },
        {
          "id": 614137,
          "date": "Thu 09 Jun 2022 19:46",
          "username": "Ddssssss",
          "content": "Is there really any difference between B and C?",
          "upvote_count": "2"
        },
        {
          "id": 613560,
          "date": "Thu 09 Jun 2022 02:54",
          "username": "Harry_01",
          "content": "The Answer is B",
          "upvote_count": "1"
        },
        {
          "id": 605368,
          "date": "Sun 22 May 2022 13:00",
          "username": "p2010",
          "content": "The metrics you configure with CloudWatch for your Amazon SNS topics are automatically collected and pushed to CloudWatch at 1-minute intervals. These metrics are gathered on all topics that meet the CloudWatch guidelines for being active. A topic is considered active by CloudWatch for up to six hours from the last activity (that is, any API call) on the topic.<br><br>There is no charge for the Amazon SNS metrics reported in CloudWatch; they are provided as part of the Amazon SNS service.<br>https://docs.aws.amazon.com/sns/latest/dg/sns-monitoring-using-cloudwatch.html",
          "upvote_count": "1"
        },
        {
          "id": 602931,
          "date": "Tue 17 May 2022 15:08",
          "username": "Karthikeyan_nick",
          "content": "Answer C:<br>https://aws.amazon.com/about-aws/whats-new/2021/01/amazon-sns-now-supports-1-minute-cloudwatch-metrics/",
          "upvote_count": "1"
        },
        {
          "id": 587125,
          "date": "Sun 17 Apr 2022 10:52",
          "username": "LiamNg",
          "content": "Ans is C",
          "upvote_count": "1"
        },
        {
          "id": 577430,
          "date": "Tue 29 Mar 2022 10:43",
          "username": "Hasitha99",
          "content": "selected Answer: B<br><br>The metrics you configure with CloudWatch for your Amazon SNS topics are automatically collected and pushed to CloudWatch at 1-minute intervals. These metrics are gathered on all topics that meet the CloudWatch guidelines for being active. A topic is considered active by CloudWatch for up to six hours from the last activity (that is, any API call) on the topic.<br><br>There is no charge for the Amazon SNS metrics reported in CloudWatch; they are provided as part of the Amazon SNS service.<br><br>Ref: https://docs.aws.amazon.com/sns/latest/dg/sns-monitoring-using-cloudwatch.html",
          "upvote_count": "1"
        },
        {
          "id": 560689,
          "date": "Fri 04 Mar 2022 11:25",
          "username": "Serial_X25",
          "content": "According to https://docs.aws.amazon.com/sns/latest/dg/sns-monitoring-using-cloudwatch.html you need to configure the CloudWatch to enable monitoring, \\\"Once you have configured CloudWatch for Amazon SNS, you can gain better insight into the performance of your Amazon SNS topics, push notifications, and SMS deliveries\\\".<br>So now after enable 1-minute monitoring for SNS the right response is B. ",
          "upvote_count": "1"
        },
        {
          "id": 560114,
          "date": "Thu 03 Mar 2022 15:23",
          "username": "Mechanic",
          "content": "Answer is C. <br>https://aws.amazon.com/about-aws/whats-new/2021/01/amazon-sns-now-supports-1-minute-cloudwatch-metrics/",
          "upvote_count": "2"
        },
        {
          "id": 494155,
          "date": "Sun 05 Dec 2021 09:21",
          "username": "cldy",
          "content": "B.  SNS will send data every minute after configuration",
          "upvote_count": "2"
        },
        {
          "id": 484078,
          "date": "Mon 22 Nov 2021 11:13",
          "username": "javiems",
          "content": "B<br>https://docs.aws.amazon.com/es_es/sns/latest/dg/sns-monitoring-using-cloudwatch.html",
          "upvote_count": "1"
        },
        {
          "id": 452300,
          "date": "Fri 05 Nov 2021 03:51",
          "username": "student22",
          "content": "B<br>---<br>\\\"The metrics you configure with CloudWatch for your Amazon SNS topics are automatically collected and pushed to CloudWatch at 1-minute intervals.\\\"<br><br>https://docs.aws.amazon.com/sns/latest/dg/sns-monitoring-using-cloudwatch.html",
          "upvote_count": "1"
        },
        {
          "id": 380032,
          "date": "Sat 23 Oct 2021 04:00",
          "username": "lowKeyAWS",
          "content": "https://aws.amazon.com/about-aws/whats-new/2021/01/amazon-sns-now-supports-1-minute-cloudwatch-metrics/<br>This question no longer applies since it is not standard that SNS provides data to CloudWatch every minute for no additional cost. The answer used to be A though",
          "upvote_count": "3"
        },
        {
          "id": 362441,
          "date": "Mon 18 Oct 2021 05:55",
          "username": "Radhaghosh",
          "content": "After January 28, 2021, Answer is C",
          "upvote_count": "5"
        }
      ]
    },
    {
      "question_id": "#393",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An AWS account owner has setup multiple IAM users. One of these IAM users, named John, has CloudWatch access, but no access to EC2 services. John has setup an alarm action which stops EC2 instances when their CPU utilization is below the threshold limit.<br>When an EC2 instance's CPU Utilization rate drops below the threshold John has set, what will happen and why?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#393",
          "answers": [
            {
              "choice": "<p>A. CloudWatch will stop the instance when the action is executed<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Nothing will happen. John cannot set an alarm on EC2 since he does not have the permission.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Nothing will happen. John can setup the action, but it will not be executed because he does not have EC2 access through IAM policies.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Nothing will happen because it is not possible to stop the instance using the CloudWatch alarm<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 366501,
          "date": "Thu 21 Oct 2021 20:23",
          "username": "chrisyod",
          "content": "answer is A<br>https://aws.amazon.com/fr/about-aws/whats-new/2017/12/amazon-cloudwatch-now-supports-service-linked-roles-for-ec2-actions-in-alarms/",
          "upvote_count": "12"
        },
        {
          "id": 391172,
          "date": "Fri 22 Oct 2021 11:56",
          "username": "Desaillynano2nd",
          "content": "A is correct (checked directly in the AWS console)<br>EC2 action - Terminate <br>You will not be able to terminate this instance if termination protection is enabled. AWS will use the existing Service Linked Role (AWSServiceRoleForCloudWatchEvents) to perform this action. Show IAM policy document<br>Linked role can do following with EC2<br>{<br>\\\"Version\\\": \\\"2012-10-17\\\",<br>\\\"Statement\\\": [<br>{<br>\\\"Effect\\\": \\\"Allow\\\",<br>\\\"Action\\\": [<br>\\\"cloudwatch:DescribeAlarms\\\",<br>\\\"ec2:DescribeInstanceStatus\\\",<br>\\\"ec2:DescribeInstances\\\",<br>\\\"ec2:DescribeSnapshots\\\",<br>\\\"ec2:DescribeVolumeStatus\\\",<br>\\\"ec2:DescribeVolumes\\\",<br>\\\"ec2:RebootInstances\\\",<br>\\\"ec2:StopInstances\\\",<br>\\\"ec2:TerminateInstances\\\",<br>\\\"ec2:CreateSnapshot\\\"<br>],<br>\\\"Resource\\\": \\\"*\\\"<br>}<br>]<br> }I tested it too, A is correct, if the user \\\"john\\\" has the \\\"CloudWatchFullAccess\\\" policy then they don't need the linked role either, confirmed here and in my testing: <br>\\\"To be able to start using service-linked role with CloudWatch Alarms, new permissions are required when calling PutMetricAlarm API. If your IAM users or roles are using CloudWatchFullAccess managed policy, no action is required at your end.\\\"",
          "upvote_count": "71"
        },
        {
          "id": 661312,
          "date": "Tue 06 Sep 2022 16:19",
          "username": "nano2nd",
          "content": "I tested it too, A is correct, if the user \\\"john\\\" has the \\\"CloudWatchFullAccess\\\" policy then they don't need the linked role either, confirmed here and in my testing: <br>\\\"To be able to start using service-linked role with CloudWatch Alarms, new permissions are required when calling PutMetricAlarm API. If your IAM users or roles are using CloudWatchFullAccess managed policy, no action is required at your end.\\\"",
          "upvote_count": "1"
        },
        {
          "id": 702777,
          "date": "Mon 24 Oct 2022 09:12",
          "username": "Jayapriya",
          "content": "Answer is A.  The service role for CWevents is assumed and the action (terminate) is executed.",
          "upvote_count": "1"
        },
        {
          "id": 695093,
          "date": "Sat 15 Oct 2022 03:34",
          "username": "Dionenonly",
          "content": "A is the right answer",
          "upvote_count": "1"
        },
        {
          "id": 669930,
          "date": "Thu 15 Sep 2022 14:49",
          "username": "jujumomma",
          "content": "answer is C<br>\\\"To set up a CloudWatch alarm action that can reboot, stop, or terminate an instance, you must use a service-linked IAM role, AWSServiceRoleForCloudWatchEvents. The AWSServiceRoleForCloudWatchEvents IAM role enables AWS to perform alarm actions on your behalf.\\\"<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/UsingAlarmActions.html",
          "upvote_count": "1"
        },
        {
          "id": 498289,
          "date": "Fri 10 Dec 2021 05:31",
          "username": "rogan1821",
          "content": "i will go A",
          "upvote_count": "1"
        },
        {
          "id": 496120,
          "date": "Tue 07 Dec 2021 15:58",
          "username": "wahlbergusa",
          "content": "Question has too much ambiguity. <br>From => https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/UsingAlarmActions.html<br><br>\\\"Permissions :<br>If you are using an AWS Identity and Access Management (IAM) account to create or modify an alarm that performs EC2 actions or Systems Manager OpsItem actions, you must have the iam:CreateServiceLinkedRole permission.\\\"<br><br>So we do not know if John has the following policy. If not then this cannot work and C would be the correct answer.",
          "upvote_count": "6"
        },
        {
          "id": 495602,
          "date": "Tue 07 Dec 2021 05:54",
          "username": "cldy",
          "content": "A.  CloudWatch will stop the instance when the action is executed",
          "upvote_count": "2"
        },
        {
          "id": 488873,
          "date": "Sun 28 Nov 2021 07:15",
          "username": "backfringe",
          "content": "I'd go with C as the user doesn't have permissions on ec2",
          "upvote_count": "2"
        },
        {
          "id": 445451,
          "date": "Wed 03 Nov 2021 23:08",
          "username": "WillCloud",
          "content": "A. <br>1. https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/UsingAlarmActions.html#AddingStopActions. <br>2. https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-service-linked-roles.html<br>Creating a service-linked role for CloudWatch<br>You do not need to manually create any of these service-linked roles. The first time you create an alarm in the AWS Management Console, the IAM CLI, or the IAM API, CloudWatch creates AWSServiceRoleForCloudWatchEvents and AWSServiceRoleForCloudWatchAlarms_ActionSSM for you. The first time When you first enable an account to be a monitoring account for cross-account cross-Region functionality, CloudWatch creates AWSServiceRoleForCloudWatchCrossAccount for you.",
          "upvote_count": "3"
        },
        {
          "id": 408823,
          "date": "Wed 03 Nov 2021 09:09",
          "username": "DerekKey",
          "content": "A - user has already created an alarm (user has iam:CreateServiceLinkedRole permission)",
          "upvote_count": "2"
        },
        {
          "id": 399921,
          "date": "Thu 28 Oct 2021 03:00",
          "username": "Shran",
          "content": "Right answer should be C.  This is tested as-well in an account.",
          "upvote_count": "2"
        },
        {
          "id": 365023,
          "date": "Wed 06 Oct 2021 03:17",
          "username": "XAvengerXAvengervinodhg",
          "content": "Just tested in my account.<br>Launced EC2 instance. <br>Created test user with CloudWatchFullAccess policy only.<br>Logged in using test user credentials. <br>User is able to create the alarm with action to stop the EC2 instance by CPUUtilizationMetric.During Alarm creation you can manually enter EC2 instance id. (where we take instance is - this is another question) <br>In 5 minutes instance is stopped.<br><br>sarah_t was right: the only thing is needed is to have permission to create a service-linked role (that is included in CloudWatchFullAccess)<br><br>Please try yourself who has AWS accounts. You will be surprisedIt seems to me that \\\"A\\\" answer is correctNowhere in question, it is mentioned that John has Cloudwatch Full access. Since John doesn't have Cloudwatch full access the answer is C. ",
          "upvote_count": "621"
        },
        {
          "id": 365024,
          "date": "Tue 12 Oct 2021 16:05",
          "username": "XAvengervinodhg",
          "content": "It seems to me that \\\"A\\\" answer is correctNowhere in question, it is mentioned that John has Cloudwatch Full access. Since John doesn't have Cloudwatch full access the answer is C. ",
          "upvote_count": "21"
        },
        {
          "id": 398133,
          "date": "Sat 23 Oct 2021 09:15",
          "username": "vinodhg",
          "content": "Nowhere in question, it is mentioned that John has Cloudwatch Full access. Since John doesn't have Cloudwatch full access the answer is C. ",
          "upvote_count": "1"
        },
        {
          "id": 355579,
          "date": "Sat 02 Oct 2021 19:21",
          "username": "SomboonCH",
          "content": "Answer is C<br>Testing in my account, the alarm can created, but Insufficient data state due to no EC2 permission.",
          "upvote_count": "2"
        },
        {
          "id": 336867,
          "date": "Thu 30 Sep 2021 01:03",
          "username": "bhupesh",
          "content": "As per this link https://aws.amazon.com/premiumsupport/knowledge-center/automatic-recovery-ec2-cloudwatch/ one cannot setup alarm if one doesn't have permission on that EC2 instance",
          "upvote_count": "2"
        },
        {
          "id": 332788,
          "date": "Fri 24 Sep 2021 07:01",
          "username": "sarah_t",
          "content": "A - john only needs to have the permission to create a service-linked role.",
          "upvote_count": "4"
        },
        {
          "id": 328512,
          "date": "Thu 23 Sep 2021 11:37",
          "username": "Amitv2706",
          "content": "answer is C <br>Example : https://aws.amazon.com/premiumsupport/knowledge-center/automatic-recovery-ec2-cloudwatch/",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#394",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user has configured an EC2 instance in the US-East-1a zone. The user has enabled detailed monitoring of the instance. The user is trying to get the data from<br>CloudWatch using a CLI.<br>Which of the below mentioned CloudWatch endpoint URLs should the user use?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#394",
          "answers": [
            {
              "choice": "<p>A. monitoring.us-east-1a.amazonaws.com<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. cloudwatch.us-east-1a.amazonaws.com<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. monitoring.us-east-1.amazonaws.com<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. monitoring.us-east-1-a.amazonaws.com<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 86256,
          "date": "Sun 03 Oct 2021 06:33",
          "username": "cloudinvader",
          "content": "Its C, Us-East-1, is a region and Us-East-1a is AZ in that region.",
          "upvote_count": "14"
        },
        {
          "id": 328523,
          "date": "Wed 13 Oct 2021 08:53",
          "username": "Amitv2706",
          "content": "Answer is C as A has an AZ in it which is not correct.<br>See : https://docs.amazonaws.cn/en_us/general/latest/gr/cw_region.html",
          "upvote_count": "5"
        },
        {
          "id": 449305,
          "date": "Wed 03 Nov 2021 04:21",
          "username": "lifebegins",
          "content": "Answer is C:<br>https://docs.aws.amazon.com/general/latest/gr/cw_region.html",
          "upvote_count": "2"
        },
        {
          "id": 347247,
          "date": "Wed 27 Oct 2021 03:53",
          "username": "macshild",
          "content": "The correct answer is C guys !!!",
          "upvote_count": "2"
        },
        {
          "id": 85685,
          "date": "Mon 20 Sep 2021 00:36",
          "username": "Niraj30sarah_t",
          "content": "I think the answer should be A.  as it is region specific and Region is clearly US-EAST-1a Zone not US-EAST-1us-east-1a is an AZ not a region. The region is us-east-1.",
          "upvote_count": "23"
        },
        {
          "id": 332790,
          "date": "Tue 26 Oct 2021 07:30",
          "username": "sarah_t",
          "content": "us-east-1a is an AZ not a region. The region is us-east-1.",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#395",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which of the following is not included in the metrics sent from Billing to Amazon CloudWatch?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#395",
          "answers": [
            {
              "choice": "<p>A. Recurring fees for AWS products and services<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Total AWS charges<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. One-time charges and refunds<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Usage charges for AWS products and services<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 716687,
          "date": "Sat 12 Nov 2022 13:58",
          "username": "DarthYoda",
          "content": "C is the correct answer.",
          "upvote_count": "1"
        },
        {
          "id": 670481,
          "date": "Fri 16 Sep 2022 07:20",
          "username": "jujumomma",
          "content": "Ans.: C<br>\t\t(Included) A.  Recurring fees for AWS products and services<br>\t\t“It includes usage charges for things like Amazon EC2 instance-hours and recurring fees for things like AWS Premium Support. “<br>\t\t<br>\t\t(Included) B.  Total AWS charges<br>\t\t“Estimated Charges: Total”<br>\t\t<br>\t\t(Not included) C.  One-time charges and refunds<br>\t\t(Included) D.  Usage charges for AWS products and services<br>\t\t“Estimated Charges: By Service”<br>\t\t<br>https://aws.amazon.com/ko/blogs/aws/monitor-estimated-costs-using-amazon-cloudwatch-billing-metrics-and-alarms/",
          "upvote_count": "1"
        },
        {
          "id": 328291,
          "date": "Tue 26 Oct 2021 04:08",
          "username": "macshild",
          "content": "Answer is C",
          "upvote_count": "3"
        },
        {
          "id": 43342,
          "date": "Sat 23 Oct 2021 06:30",
          "username": "Denis_H",
          "content": "More information here:<br>https://aws.amazon.com/fr/blogs/aws/monitor-estimated-costs-using-amazon-cloudwatch-billing-metrics-and-alarms/",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#396",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>After your Lambda function has been running for some time, you need to look at some metrics to ascertain how your function is performing and decide to use the<br>AWS CLI to do this.<br>Which of the following commands must be used to access these metrics using the AWS CLI?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#396",
          "answers": [
            {
              "choice": "<p>A. mon-list-metrics and mon-get-stats<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. list-metrics and get-metric-statistics<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. ListMetrics and GetMetricStatistics<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. list-metrics and mon-get-stats<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 32240,
          "date": "Sat 02 Oct 2021 18:13",
          "username": "JayK",
          "content": "B, <br>https://docs.aws.amazon.com/cli/latest/reference/cloudwatch/get-metric-statistics.html",
          "upvote_count": "6"
        },
        {
          "id": 321593,
          "date": "Wed 27 Oct 2021 09:32",
          "username": "ExtHo",
          "content": "https://docs.aws.amazon.com/cli/latest/reference/cloudwatch/list-metrics.html<br>https://docs.aws.amazon.com/cli/latest/reference/cloudwatch/get-metric-statistics.html",
          "upvote_count": "5"
        },
        {
          "id": 716689,
          "date": "Sat 12 Nov 2022 14:00",
          "username": "DarthYoda",
          "content": "C is the actual API calls while B is how they look using the CLI, so definitely B. ",
          "upvote_count": "1"
        },
        {
          "id": 670574,
          "date": "Fri 16 Sep 2022 09:36",
          "username": "jujumomma",
          "content": "(X) A.  mon-list-metrics and mon-get-stats - Amazon CloudWhatch CLI (No support from November 7, 2017)<br>\thttps://docs.aws.amazon.com/AmazonCloudWatch/latest/cli/cli-mon-get-stats.html<br>(O) B.  list-metrics and get-metric-statistics - Amazon AWS CLI v2<br>https://awscli.amazonaws.com/v2/documentation/api/latest/reference/cloudwatch/list-metrics.html<br>https://awscli.amazonaws.com/v2/documentation/api/latest/reference/cloudwatch/get-metric-statistics.html<br>(X) C.  ListMetrics and GetMetricStatistics - Amazon CloudWatch REST API<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html<br>\t\thttps://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html<br>(X) D.  list-metrics and mon-get-stats = AWS CLI & CloudWatch CLI (Not supported now)",
          "upvote_count": "2"
        },
        {
          "id": 577910,
          "date": "Wed 30 Mar 2022 00:47",
          "username": "jj22222",
          "content": "B looks ok",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#397",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In Amazon CloudWatch, you can publish your own metrics with the put-metric-data command. When you create a new metric using the put-metric-data command, it can take up to two minutes before you can retrieve statistics on the new metric using the get-metric-statistics command.<br>How long does it take before the new metric appears in the list of metrics retrieved using the list- metrics command?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#397",
          "answers": [
            {
              "choice": "<p>A. After 2 minutes<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Up to 15 minutes<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. More than an hour<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Within a minute<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 262234,
          "date": "Fri 08 Oct 2021 23:31",
          "username": "snegha",
          "content": "When you create a metric, it can take up to 2 minutes before you can retrieve statistics for the new metric using the get-metric-statistics command. However, it can take up to 15 minutes before the new metric appears in the list of metrics retrieved using the list-metrics command.",
          "upvote_count": "13"
        },
        {
          "id": 670589,
          "date": "Fri 16 Sep 2022 09:53",
          "username": "jujumomma",
          "content": "B<br>\\\"After you create a metric, allow up to 15 minutes before the metric appears.\\\"<br>https://awscli.amazonaws.com/v2/documentation/api/latest/reference/cloudwatch/list-metrics.html",
          "upvote_count": "1"
        },
        {
          "id": 497698,
          "date": "Thu 09 Dec 2021 13:10",
          "username": "cldy",
          "content": "B.  Up to 15 minutes",
          "upvote_count": "1"
        },
        {
          "id": 438711,
          "date": "Wed 27 Oct 2021 12:10",
          "username": "janvandermerwer",
          "content": "Note from AWS:<br>When you create a metric, it can take up to 2 minutes before you can retrieve statistics for the new metric using the get-metric-statistics command. However, it can take up to 15 minutes before the new metric appears in the list of metrics retrieved using the list-metrics command. <br>Ref: <br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#398",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a legacy system on a single m4.2xlarge Amazon EC2 instance with Amazon EBS storage. The EC2 instance runs both the web server and a self- managed Oracle database. A snapshot is made of the EBS volume every 12 hours, and an AMI was created from the fully configured EC2 instance.<br>A recent event that terminated the EC2 instance led to several hours of downtime. The application was successfully launched from the AMI, but the age of the<br>EBS snapshot and the repair of the database resulted in the loss of 8 hours of data. The system was also down for 4 hours while the Systems Operators manually performed these processes.<br>What architectural changes will minimize downtime and reduce the chance of lost data?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#398",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon CloudWatch alarm to automatically recover the instance. Create a script that will check and repair the database upon reboot. Subscribe the Operations team to the Amazon SNS message generated by the CloudWatch alarm.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Run the application on m4.xlarge EC2 instances behind an Elastic Load Balancer/Application Load Balancer. Run the EC2 instances in an Auto Scaling group across multiple Availability Zones with a minimum instance count of two. Migrate the database to an Amazon RDS Oracle Multi-AZ DB instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Run the application on m4.2xlarge EC2 instances behind an Elastic Load Balancer/Application Load Balancer. Run the EC2 instances in an Auto Scaling group across multiple Availability Zones with a minimum instance count of one. Migrate the database to an Amazon RDS Oracle Multi-AZ DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Increase the web server instance count to two m4.xlarge instances and use Amazon Route 53 round-robin load balancing to spread the load. Enable Route 53 health checks on the web servers. Migrate the database to an Amazon RDS Oracle Multi-AZ DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 31361,
          "date": "Sun 26 Sep 2021 06:23",
          "username": "LunchTimeSmart",
          "content": "B is correct.<br>A: Does not address a loss of data since the last backup.<br>B: Ensures that there are at least two EC instances, each of which is in a different AZ. It also ensures that the database spans multiple AZs. Hence this meets all the criteria.<br>C: Having auto scaling set to a minimum instance count of one means that if there is just one instance and there is a problem, that instance will need to be restarted, meaning there would an outage during that restart time. As such, B is a better answer. <br>D: Does not indicate that the two EC2 instances will be in different availability zones. If they are in the same AZ, that entire zone could theoretically have an outage. Given that, I would select B instead of D.  Apart from that consideration D does the trick.Completely agree. Also, others selecting m4.2xL becoz of legacy system, remember we are offloading DB from that instance - most likely, there is no need for 2xL size.",
          "upvote_count": "329"
        },
        {
          "id": 69637,
          "date": "Tue 28 Sep 2021 15:04",
          "username": "Smart",
          "content": "Completely agree. Also, others selecting m4.2xL becoz of legacy system, remember we are offloading DB from that instance - most likely, there is no need for 2xL size.",
          "upvote_count": "9"
        },
        {
          "id": 13537,
          "date": "Fri 24 Sep 2021 03:56",
          "username": "donathonJAWS1600",
          "content": "B<br>There are 2 problems here. Firstly, the EBS snapshot is too old and secondly, the outage resulted in DB issues and data loss. Using 2 instances installed with the web server and using Route 53 load balancing should help with the first problem and RDS Multi-AZ DB would help in the second.<br>A: This will not reduce the chances of lost data and downtime could still be significant and risky.<br>B\\D: I chose this simply because of the LB\\Auto Scaling. While Route 53 can do similar function, it does not auto heal the instance to bring it back to healthy state.<br>C: There is only 1 active instance, there should be at least 2.B wont work for Legacy. How do you know taht application can run on a smaller instance, for a legacy system. Legacy system are typically lift shift models.",
          "upvote_count": "164"
        },
        {
          "id": 100485,
          "date": "Thu 30 Sep 2021 01:00",
          "username": "JAWS1600",
          "content": "B wont work for Legacy. How do you know taht application can run on a smaller instance, for a legacy system. Legacy system are typically lift shift models.",
          "upvote_count": "4"
        },
        {
          "id": 625896,
          "date": "Sat 02 Jul 2022 03:42",
          "username": "jyrajan69",
          "content": "Those who jumped on B are not considering the legacy app and the downtime, the app needs to be tested if you are downsizing the instance, yes its one instance, downtime will be the time it takes to respawn",
          "upvote_count": "1"
        },
        {
          "id": 560476,
          "date": "Fri 04 Mar 2022 03:15",
          "username": "pal40sg",
          "content": "Ensures that there are at least two EC instances",
          "upvote_count": "1"
        },
        {
          "id": 514387,
          "date": "Sat 01 Jan 2022 06:39",
          "username": "cldy",
          "content": "B correct.",
          "upvote_count": "1"
        },
        {
          "id": 455032,
          "date": "Sun 07 Nov 2021 14:50",
          "username": "uninit",
          "content": "The choice is clearly between B & C.  I choose C for the following reasons-<br> - You cannot downsize the EC2 instance m4.2xlarge to m4.xlarge and assume the legacy application will run fine. What if the legacy application requires minimum 32GB of memory to run or need minimum of 8 cores to run? You might break the legacy application if you downsize.<br> - Similarly, you cannot assume that legacy application would work fine in an AutoScaling group. What about authentication, sessions and host of other adjustments you would need to make?<br> - The question asks architectural changes to minimize downtime and reduce the chance of lost data and C accomplishes both - <br>- It reduces downtime because the manual system operator's process would be automated with an AutoScaling Group. It will not be eliminated but minimized for sure.<br>- It reduces the chance of losing data because the database is migrated to RDS.",
          "upvote_count": "4"
        },
        {
          "id": 449840,
          "date": "Fri 05 Nov 2021 08:48",
          "username": "andylogan",
          "content": "It's B",
          "upvote_count": "1"
        },
        {
          "id": 352875,
          "date": "Thu 04 Nov 2021 04:20",
          "username": "NarendraNK01037tiffanny",
          "content": "Should be C.  We need to minimize the downtime, not looking to provide HA capability. <br>Autoscaling with 1 minimum will ensure, a new instance will be launched if something goes wrong.I think we are looking for the best solution to meet requirements of the question.<br>So it should be B. For C , it will takes time to spin up a new instance after the single instance is unhealthy. <br>But for B, it only takes seconds for ALB to redirect to the other instance. Remember the goal of the questions is \\\"minimize downtime\\\"",
          "upvote_count": "322"
        },
        {
          "id": 384239,
          "date": "Thu 04 Nov 2021 04:28",
          "username": "01037",
          "content": "I think we are looking for the best solution to meet requirements of the question.<br>So it should be B. ",
          "upvote_count": "2"
        },
        {
          "id": 410924,
          "date": "Thu 04 Nov 2021 08:10",
          "username": "tiffanny",
          "content": "For C , it will takes time to spin up a new instance after the single instance is unhealthy. <br>But for B, it only takes seconds for ALB to redirect to the other instance. Remember the goal of the questions is \\\"minimize downtime\\\"",
          "upvote_count": "2"
        },
        {
          "id": 333949,
          "date": "Wed 03 Nov 2021 02:22",
          "username": "WhyIronMan",
          "content": "I'll go with B",
          "upvote_count": "4"
        },
        {
          "id": 290379,
          "date": "Tue 02 Nov 2021 12:14",
          "username": "wind",
          "content": "I think B is correct.",
          "upvote_count": "2"
        },
        {
          "id": 289344,
          "date": "Tue 02 Nov 2021 01:32",
          "username": "Kian1",
          "content": "going with B",
          "upvote_count": "3"
        },
        {
          "id": 281170,
          "date": "Mon 01 Nov 2021 08:08",
          "username": "Ebi",
          "content": "I go with B, the question is about HA, with two instances in two different AZd behind ALB it is achieved",
          "upvote_count": "3"
        },
        {
          "id": 271928,
          "date": "Mon 01 Nov 2021 01:17",
          "username": "Joaster",
          "content": "I would say B. Ensures that there are at least two EC instances, each of which is in a different AZ. It also ensures that the database spans multiple AZs. Hence this meets all the criteria.",
          "upvote_count": "2"
        },
        {
          "id": 253784,
          "date": "Sun 31 Oct 2021 19:05",
          "username": "vipgcp",
          "content": "C looks better.. as option B and D are trying to run smaller instance for Legacy application. Legacy application doesnt support cluster because of session handling. SO C is not best option as it involve some downtime due to cooldown period but there will no data loss (which is the key) and this is best amongst given options.",
          "upvote_count": "4"
        },
        {
          "id": 252309,
          "date": "Sun 31 Oct 2021 03:17",
          "username": "sarofi",
          "content": "BBBBBBBBBBBBBBBBBBB",
          "upvote_count": "2"
        },
        {
          "id": 246931,
          "date": "Sat 30 Oct 2021 19:02",
          "username": "MichaelHuang",
          "content": "The answer should be B. <br>The reasons are:<br>1) For minimum downtime -- Run the EC2 instances in an Auto Scaling group across multiple Availability Zones with a minimum instance count of two; <br>2) For avoiding loss of data -- Migrate the database to an Amazon RDS Oracle Multi-AZ DB instance.",
          "upvote_count": "3"
        },
        {
          "id": 244562,
          "date": "Sat 30 Oct 2021 07:51",
          "username": "happpieee",
          "content": "B.  Data loss is addressed with Oracle Multi AZ RDZ. Downtime minimized with ALB+ ASG of MINIMUM 2. <br><br>C is having minimum of 1. D is not having ASG and inability to respawn instances.",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#399",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A Solutions Architect is working with a company that operates a standard three-tier web application in AWS. The web and application tiers run on Amazon EC2 and the database tier runs on Amazon RDS. The company is redesigning the web and application tiers to use Amazon API Gateway and AWS Lambda, and the company intends to deploy the new application within 6 months. The IT Manager has asked the Solutions Architect to reduce costs in the interim.<br>Which solution will be MOST cost effective while maintaining reliability?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#399",
          "answers": [
            {
              "choice": "<p>A. Use Spot Instances for the web tier, On-Demand Instances for the application tier, and Reserved Instances for the database tier.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use On-Demand Instances for the web and application tiers, and Reserved Instances for the database tier.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Spot Instances for the web and application tiers, and Reserved Instances for the database tier.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Reserved Instances for the web, application, and database tiers.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 14081,
          "date": "Sun 26 Sep 2021 02:27",
          "username": "donathon",
          "content": "B<br>A\\C: You cannot use spot instances if not the application will go down.<br>D: You should not use reserved instances as you are going to shutdown the instance after 6 months.",
          "upvote_count": "27"
        },
        {
          "id": 662314,
          "date": "Wed 07 Sep 2022 11:45",
          "username": "nano2nd",
          "content": "if you sold the web and app tier RI's after 6 months wouldn't that make D the MOST cost effective?",
          "upvote_count": "1"
        },
        {
          "id": 657161,
          "date": "Fri 02 Sep 2022 10:08",
          "username": "Network_1",
          "content": "B is the correct option. In 6 months, Web and application tiers would be replaced with API Gateway and lambda respectively. Only DB tier would still be maintained",
          "upvote_count": "1"
        },
        {
          "id": 498605,
          "date": "Fri 10 Dec 2021 13:21",
          "username": "cldy",
          "content": "B.  Use On-Demand Instances for the web and application tiers, and Reserved Instances for the database tier.",
          "upvote_count": "1"
        },
        {
          "id": 449841,
          "date": "Sun 07 Nov 2021 05:57",
          "username": "andylogan",
          "content": "It's B",
          "upvote_count": "2"
        },
        {
          "id": 449643,
          "date": "Sun 07 Nov 2021 03:51",
          "username": "sergza",
          "content": "Correct Answer is B <br>Average discount for 1 year for reserved vs on demand is 40%. so for 6 month on demand should be preferred option",
          "upvote_count": "2"
        },
        {
          "id": 428886,
          "date": "Sun 07 Nov 2021 02:58",
          "username": "AWS_Noob",
          "content": "B, using spot instances are for jobs that are easily reproducible. Reserved instances for web and app wont work because its a minimumof a year,and they want to change this in 6 months.",
          "upvote_count": "1"
        },
        {
          "id": 347258,
          "date": "Sat 06 Nov 2021 18:17",
          "username": "macshild",
          "content": "The correct Answer is B",
          "upvote_count": "1"
        },
        {
          "id": 334004,
          "date": "Fri 05 Nov 2021 02:36",
          "username": "WhyIronMan",
          "content": "I'll go with B",
          "upvote_count": "2"
        },
        {
          "id": 290381,
          "date": "Tue 02 Nov 2021 20:31",
          "username": "wind",
          "content": "B is correct.",
          "upvote_count": "2"
        },
        {
          "id": 289347,
          "date": "Mon 01 Nov 2021 17:48",
          "username": "Kian1",
          "content": "Ans B on demand reliable, reserved cost effective",
          "upvote_count": "2"
        },
        {
          "id": 281174,
          "date": "Mon 01 Nov 2021 17:20",
          "username": "Ebi",
          "content": "D cannot be the correct answer, with RI you can save more than 50% only for 3-year term.<br>With 1-year term saving is always less than 50%, so does not make sense to buy RI for pieces that you are going to remove in 6 months",
          "upvote_count": "2"
        },
        {
          "id": 280785,
          "date": "Sun 31 Oct 2021 01:38",
          "username": "certainly",
          "content": "agree B is winner for me",
          "upvote_count": "2"
        },
        {
          "id": 245318,
          "date": "Sat 30 Oct 2021 12:53",
          "username": "ju0n",
          "content": "The correct answer is B.  The keyword is within 6 months. If the app is deployed in less than 6 months time, it is definitely cheaper to use on-demand instance rather than RI.",
          "upvote_count": "2"
        },
        {
          "id": 242226,
          "date": "Thu 28 Oct 2021 19:49",
          "username": "gookseang",
          "content": "I will go B",
          "upvote_count": "2"
        },
        {
          "id": 241829,
          "date": "Wed 27 Oct 2021 06:24",
          "username": "T14102020",
          "content": "B is the correct answer.",
          "upvote_count": "2"
        },
        {
          "id": 231226,
          "date": "Thu 21 Oct 2021 10:58",
          "username": "petebear55",
          "content": "B :Front end will not exist in 6 months ... the database will so b as it can benefit from reserved instances..",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#400",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon S3 to store documents that may only be accessible to an Amazon EC2 instance in a certain virtual private cloud (VPC). The company fears that a malicious insider with access to this instance could also set up an EC2 instance in another VPC to access these documents.<br>Which of the following solutions will provide the required protection?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#400",
          "answers": [
            {
              "choice": "<p>A. Use an S3 VPC endpoint and an S3 bucket policy to limit access to this VPC endpoint.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use EC2 instance profiles and an S3 bucket policy to limit access to the role attached to the instance profile.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use S3 client-side encryption and store the key in the instance metadata.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use S3 server-side encryption and protect the key with an encryption context.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 13934,
          "date": "Fri 24 Sep 2021 02:38",
          "username": "manhmaluc",
          "content": "A true<br><br>https://docs.aws.amazon.com/vpc/latest/userguide/vpce-gateway.html<br>```<br>Endpoint connections cannot be extended out of a VPC.  Resources on the other side of a VPN connection, VPC peering connection, AWS Direct Connect connection, or ClassicLink connection in your VPC cannot use the endpoint to communicate with resources in the endpoint service.<br>```",
          "upvote_count": "37"
        },
        {
          "id": 281178,
          "date": "Wed 27 Oct 2021 11:50",
          "username": "Ebi",
          "content": "I go with A",
          "upvote_count": "10"
        },
        {
          "id": 727456,
          "date": "Sat 26 Nov 2022 12:12",
          "username": "evargasbrz",
          "content": "A - VPC EndPoint+ S3 Policy with condition<br>The main objective here is to prevent a malicious insider set up an EC2 instance in \\\"another\\\" VPC. ",
          "upvote_count": "1"
        },
        {
          "id": 708398,
          "date": "Mon 31 Oct 2022 13:18",
          "username": "resnef",
          "content": "Answer is A, Stephane's discussion in Udemy about exact same scenario.",
          "upvote_count": "1"
        },
        {
          "id": 700453,
          "date": "Fri 21 Oct 2022 03:36",
          "username": "Cloud_noob",
          "content": "I go with A",
          "upvote_count": "1"
        },
        {
          "id": 653593,
          "date": "Mon 29 Aug 2022 20:30",
          "username": "epomatti",
          "content": "A - VPC Endpoint + S3 Policy",
          "upvote_count": "3"
        },
        {
          "id": 636816,
          "date": "Mon 25 Jul 2022 18:14",
          "username": "hilft",
          "content": "A.  Use endpoint.",
          "upvote_count": "1"
        },
        {
          "id": 626435,
          "date": "Sun 03 Jul 2022 07:49",
          "username": "aandc",
          "content": "keyword \\\"in another VPC\\\"",
          "upvote_count": "2"
        },
        {
          "id": 581119,
          "date": "Tue 05 Apr 2022 10:41",
          "username": "bfalbfal",
          "content": "Answer is B.  You access from another VPC, you can either access through the internet or use S3 VPC endpoints. so in this case, S3 VPC endpoints would not come into the equation, as you won't need to create one, unless if you want access to the S3 buckets via AWS backbone, so any answer with S3 vpc endpoints is incorrectit says in \\\"another\\\"vpc, not the same VPC",
          "upvote_count": "21"
        },
        {
          "id": 581123,
          "date": "Tue 05 Apr 2022 10:42",
          "username": "bfal",
          "content": "it says in \\\"another\\\"vpc, not the same VPC",
          "upvote_count": "1"
        },
        {
          "id": 559001,
          "date": "Tue 01 Mar 2022 21:29",
          "username": "Ni_yot",
          "content": "A for me. since its within a VPC access, seems logical to use a VPC endpoint and ACL to control access",
          "upvote_count": "1"
        },
        {
          "id": 532702,
          "date": "Wed 26 Jan 2022 09:33",
          "username": "shotty1",
          "content": "While in real life I would always suggest first looking into B, the customers concern in this question will be addressed by A",
          "upvote_count": "1"
        },
        {
          "id": 498282,
          "date": "Fri 10 Dec 2021 05:23",
          "username": "fais1985",
          "content": "Correct Answer is A,<br>B looks correct, but the roles are global & they can be attached to the ec2 in different VPC as well that will rule out option B. ",
          "upvote_count": "3"
        },
        {
          "id": 458665,
          "date": "Thu 04 Nov 2021 02:27",
          "username": "chaconerw",
          "content": "The correct answer is A",
          "upvote_count": "2"
        },
        {
          "id": 449843,
          "date": "Tue 02 Nov 2021 06:37",
          "username": "andylogan",
          "content": "It's A",
          "upvote_count": "2"
        },
        {
          "id": 362458,
          "date": "Sat 30 Oct 2021 08:57",
          "username": "Radhaghosh",
          "content": "A is the most secured answer",
          "upvote_count": "2"
        },
        {
          "id": 347261,
          "date": "Sat 30 Oct 2021 03:17",
          "username": "macshild",
          "content": "The correct Answer is A",
          "upvote_count": "1"
        },
        {
          "id": 334006,
          "date": "Thu 28 Oct 2021 11:44",
          "username": "WhyIronMan",
          "content": "I'll go with A",
          "upvote_count": "2"
        }
      ]
    }
  ]
}